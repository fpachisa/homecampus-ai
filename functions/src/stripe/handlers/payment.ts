import Stripe from 'stripe';
import { db, Timestamp, FieldValue } from '../../config/firebase';
import { queueEmail, EMAIL_TEMPLATES } from '../../utils/email';
import { getStripeClient } from '../../config/stripe';

/**
 * Get child ref from invoice's subscription
 */
async function getChildRefFromInvoice(invoice: Stripe.Invoice): Promise<{
  childRef: FirebaseFirestore.DocumentReference | null;
  parentDoc: FirebaseFirestore.DocumentSnapshot | null;
  childDoc: FirebaseFirestore.DocumentSnapshot | null;
}> {
  if (!invoice.subscription) {
    return { childRef: null, parentDoc: null, childDoc: null };
  }

  const stripe = getStripeClient();
  const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);

  const parentUid = subscription.metadata?.parentUid;
  const childProfileId = subscription.metadata?.childProfileId;

  if (!parentUid || !childProfileId) {
    // Try to find from stripeCustomers
    const customerId = typeof invoice.customer === 'string' ? invoice.customer : invoice.customer?.id;
    if (!customerId) return { childRef: null, parentDoc: null, childDoc: null };

    const customerDoc = await db.collection('stripeCustomers').doc(customerId).get();
    if (!customerDoc.exists) return { childRef: null, parentDoc: null, childDoc: null };

    const uid = customerDoc.data()?.uid;
    if (!uid || !subscription.metadata?.childProfileId) {
      return { childRef: null, parentDoc: null, childDoc: null };
    }

    const parentDoc = await db.collection('users').doc(uid).get();
    const childRef = db.collection('users').doc(uid).collection('childProfiles').doc(subscription.metadata.childProfileId);
    const childDoc = await childRef.get();

    return { childRef, parentDoc, childDoc };
  }

  const parentDoc = await db.collection('users').doc(parentUid).get();
  const childRef = db.collection('users').doc(parentUid).collection('childProfiles').doc(childProfileId);
  const childDoc = await childRef.get();

  return { childRef, parentDoc, childDoc };
}

/**
 * Handle invoice.payment_succeeded event
 * Updates payment info, clears grace period
 */
export async function handlePaymentSucceeded(invoice: Stripe.Invoice): Promise<void> {
  // Skip if not a subscription payment
  if (!invoice.subscription || invoice.billing_reason === 'subscription_create') {
    // subscription_create is handled by subscription.created
    return;
  }

  const { childRef, parentDoc, childDoc } = await getChildRefFromInvoice(invoice);

  if (!childRef || !childDoc?.exists) {
    console.log('Could not find child for invoice:', invoice.id);
    return;
  }

  await childRef.update({
    'subscription.subscriptionStatus': 'active',
    'subscription.graceUntil': null,
    'subscription.lastPaymentDate': Timestamp.fromMillis((invoice.status_transitions?.paid_at || Date.now() / 1000) * 1000),
    'subscription.lastPaymentAmount': invoice.amount_paid,
    'subscription.updatedAt': FieldValue.serverTimestamp()
  });

  // Send renewal confirmation for recurring payments
  if (invoice.billing_reason === 'subscription_cycle' && parentDoc?.exists) {
    try {
      await queueEmail(parentDoc.data()?.email, EMAIL_TEMPLATES.SUBSCRIPTION_RENEWED, {
        parentName: parentDoc.data()?.displayName || 'Parent',
        childName: childDoc.data()?.displayName || 'Your child',
        amount: (invoice.amount_paid / 100).toFixed(2),
        currency: invoice.currency.toUpperCase()
      });
    } catch (emailError) {
      console.error('Failed to queue renewal email:', emailError);
    }
  }

  console.log(`Payment succeeded for invoice ${invoice.id}`);
}

/**
 * Handle invoice.payment_failed event
 * Sets status to past_due with grace period
 */
export async function handlePaymentFailed(invoice: Stripe.Invoice): Promise<void> {
  if (!invoice.subscription) {
    return;
  }

  const { childRef, parentDoc, childDoc } = await getChildRefFromInvoice(invoice);

  if (!childRef || !childDoc?.exists) {
    console.log('Could not find child for invoice:', invoice.id);
    return;
  }

  // Set 7-day grace period
  const graceUntil = Timestamp.fromMillis(Date.now() + 7 * 24 * 60 * 60 * 1000);

  await childRef.update({
    'subscription.subscriptionStatus': 'past_due',
    'subscription.graceUntil': graceUntil,
    'subscription.updatedAt': FieldValue.serverTimestamp()
  });

  // Send payment failed email
  if (parentDoc?.exists) {
    try {
      await queueEmail(parentDoc.data()?.email, EMAIL_TEMPLATES.PAYMENT_FAILED, {
        parentName: parentDoc.data()?.displayName || 'Parent',
        childName: childDoc.data()?.displayName || 'Your child',
        updateCardUrl: 'https://homecampus.ai/billing',
        graceEndDate: graceUntil.toDate().toLocaleDateString('en-SG', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      });
    } catch (emailError) {
      console.error('Failed to queue payment failed email:', emailError);
    }
  }

  console.log(`Payment failed for invoice ${invoice.id}, grace period until ${graceUntil.toDate()}`);
}
