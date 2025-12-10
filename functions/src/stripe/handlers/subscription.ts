import Stripe from 'stripe';
import { db, Timestamp, FieldValue } from '../../config/firebase';
import { mapStripeStatus } from '../../types/subscription';
import { queueEmail, EMAIL_TEMPLATES } from '../../utils/email';
import { getStripeClient } from '../../config/stripe';

/**
 * Get parent UID and child profile ID from subscription metadata
 */
async function getUidsFromSubscription(subscription: Stripe.Subscription): Promise<{
  parentUid: string | null;
  childProfileId: string | null;
}> {
  // First try metadata (set during checkout)
  const parentUid = subscription.metadata?.parentUid;
  const childProfileId = subscription.metadata?.childProfileId;

  if (parentUid && childProfileId) {
    return { parentUid, childProfileId };
  }

  // Fallback: Look up from stripeCustomers collection
  const customerId = typeof subscription.customer === 'string'
    ? subscription.customer
    : subscription.customer.id;

  const customerDoc = await db.collection('stripeCustomers').doc(customerId).get();
  if (customerDoc.exists) {
    return {
      parentUid: customerDoc.data()?.uid || null,
      childProfileId: subscription.metadata?.childProfileId || null
    };
  }

  return { parentUid: null, childProfileId: null };
}

/**
 * Handle customer.subscription.created event
 * Sets child's status to active, deletes active trial record
 */
export async function handleSubscriptionCreated(subscription: Stripe.Subscription): Promise<void> {
  const { parentUid, childProfileId } = await getUidsFromSubscription(subscription);

  if (!parentUid || !childProfileId) {
    console.error('Missing UIDs for subscription:', subscription.id);
    return;
  }

  const batch = db.batch();

  // 1. Update child's subscription
  const childRef = db
    .collection('users')
    .doc(parentUid)
    .collection('childProfiles')
    .doc(childProfileId);

  const childDoc = await childRef.get();
  if (!childDoc.exists) {
    console.error(`Child profile ${childProfileId} not found for parent ${parentUid}`);
    return;
  }

  batch.update(childRef, {
    'subscription.subscriptionId': subscription.id,
    'subscription.stripeCustomerId': subscription.customer,
    'subscription.subscriptionStatus': mapStripeStatus(subscription.status),
    'subscription.priceId': subscription.items.data[0]?.price.id || null,
    'subscription.billingInterval': subscription.items.data[0]?.price.recurring?.interval || null,
    'subscription.currentPeriodStart': Timestamp.fromMillis(subscription.current_period_start * 1000),
    'subscription.currentPeriodEnd': Timestamp.fromMillis(subscription.current_period_end * 1000),
    'subscription.cancelAtPeriodEnd': subscription.cancel_at_period_end,
    'subscription.graceUntil': null,
    'subscription.updatedAt': FieldValue.serverTimestamp()
  });

  // 2. Delete active trial record (no longer needed)
  const trialRef = db.collection('activeTrials').doc(`${parentUid}_${childProfileId}`);
  batch.delete(trialRef);

  // 3. Commit atomically
  await batch.commit();

  // 4. Send activation email
  try {
    const parentDoc = await db.collection('users').doc(parentUid).get();
    const childData = childDoc.data();

    if (parentDoc.exists) {
      await queueEmail(parentDoc.data()?.email, EMAIL_TEMPLATES.CHILD_SUBSCRIPTION_ACTIVATED, {
        parentName: parentDoc.data()?.displayName || 'Parent',
        childName: childData?.displayName || 'Your child'
      });
    }
  } catch (emailError) {
    console.error('Failed to queue activation email:', emailError);
  }

  console.log(`Subscription ${subscription.id} created for child ${childProfileId}`);
}

/**
 * Handle customer.subscription.updated event
 * Syncs status, handles cancellation
 */
export async function handleSubscriptionUpdated(subscription: Stripe.Subscription): Promise<void> {
  const { parentUid, childProfileId } = await getUidsFromSubscription(subscription);

  if (!parentUid || !childProfileId) {
    console.error('Missing UIDs for subscription:', subscription.id);
    return;
  }

  const childRef = db
    .collection('users')
    .doc(parentUid)
    .collection('childProfiles')
    .doc(childProfileId);

  const childDoc = await childRef.get();
  if (!childDoc.exists) {
    // Out-of-order event - subscription.created hasn't been processed yet
    // Fetch full state and process as creation
    console.log('Out-of-order event detected, processing as creation');
    const stripe = getStripeClient();
    const fullSubscription = await stripe.subscriptions.retrieve(subscription.id);
    await handleSubscriptionCreated(fullSubscription);
    return;
  }

  const currentStatus = childDoc.data()?.subscription?.subscriptionStatus;
  const newStatus = mapStripeStatus(subscription.status);

  // Handle cancellation (user canceled in portal)
  if (subscription.cancel_at_period_end && currentStatus !== 'canceled') {
    await childRef.update({
      'subscription.subscriptionStatus': 'canceled',
      'subscription.cancelAtPeriodEnd': true,
      'subscription.currentPeriodEnd': Timestamp.fromMillis(subscription.current_period_end * 1000),
      'subscription.updatedAt': FieldValue.serverTimestamp()
    });

    // Send cancellation email
    try {
      const parentDoc = await db.collection('users').doc(parentUid).get();
      const childData = childDoc.data();

      if (parentDoc.exists) {
        await queueEmail(parentDoc.data()?.email, EMAIL_TEMPLATES.SUBSCRIPTION_CANCELED, {
          parentName: parentDoc.data()?.displayName || 'Parent',
          childName: childData?.displayName || 'Your child',
          accessEndDate: new Date(subscription.current_period_end * 1000).toLocaleDateString('en-SG', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        });
      }
    } catch (emailError) {
      console.error('Failed to queue cancellation email:', emailError);
    }

    console.log(`Subscription ${subscription.id} marked as canceled for child ${childProfileId}`);
    return;
  }

  // Handle reactivation (user un-canceled)
  if (!subscription.cancel_at_period_end && currentStatus === 'canceled') {
    await childRef.update({
      'subscription.subscriptionStatus': 'active',
      'subscription.cancelAtPeriodEnd': false,
      'subscription.updatedAt': FieldValue.serverTimestamp()
    });

    console.log(`Subscription ${subscription.id} reactivated for child ${childProfileId}`);
    return;
  }

  // Handle price changes or other updates
  await childRef.update({
    'subscription.subscriptionStatus': newStatus,
    'subscription.priceId': subscription.items.data[0]?.price.id || null,
    'subscription.billingInterval': subscription.items.data[0]?.price.recurring?.interval || null,
    'subscription.currentPeriodStart': Timestamp.fromMillis(subscription.current_period_start * 1000),
    'subscription.currentPeriodEnd': Timestamp.fromMillis(subscription.current_period_end * 1000),
    'subscription.cancelAtPeriodEnd': subscription.cancel_at_period_end,
    'subscription.updatedAt': FieldValue.serverTimestamp()
  });

  console.log(`Subscription ${subscription.id} updated for child ${childProfileId}`);
}

/**
 * Handle customer.subscription.deleted event
 * Sets status to expired
 */
export async function handleSubscriptionDeleted(subscription: Stripe.Subscription): Promise<void> {
  const { parentUid, childProfileId } = await getUidsFromSubscription(subscription);

  if (!parentUid || !childProfileId) {
    console.error('Missing UIDs for subscription:', subscription.id);
    return;
  }

  const childRef = db
    .collection('users')
    .doc(parentUid)
    .collection('childProfiles')
    .doc(childProfileId);

  await childRef.update({
    'subscription.subscriptionStatus': 'expired',
    'subscription.cancelAtPeriodEnd': false,
    'subscription.updatedAt': FieldValue.serverTimestamp()
  });

  console.log(`Subscription ${subscription.id} deleted, child ${childProfileId} set to expired`);
}
