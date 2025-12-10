import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { db, Timestamp, FieldValue } from '../config/firebase';
import { STRIPE_SECRET_KEY, getStripeClient } from '../config/stripe';
import { SubscriptionData, mapStripeStatus } from '../types/subscription';

interface SyncRequest {
  childProfileId: string;
  sessionId?: string;
}

interface SyncResponse {
  status: string;
  subscriptionId: string | null;
  currentPeriodEnd: string | null;
}

export const syncSubscription = onCall<SyncRequest, Promise<SyncResponse>>(
  {
    region: 'asia-southeast1',
    secrets: [STRIPE_SECRET_KEY],
    // enforceAppCheck: true,  // Enable in production
  },
  async (request) => {
    // 1. Validate authenticated user
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Must be logged in');
    }
    const parentUid = request.auth.uid;

    // 2. Validate input
    const { childProfileId, sessionId } = request.data;
    if (!childProfileId || typeof childProfileId !== 'string') {
      throw new HttpsError('invalid-argument', 'Child profile ID is required');
    }

    // 3. Get child profile
    const childDoc = await db
      .collection('users')
      .doc(parentUid)
      .collection('childProfiles')
      .doc(childProfileId)
      .get();

    if (!childDoc.exists) {
      throw new HttpsError('not-found', 'Child profile not found');
    }

    const childData = childDoc.data()!;
    let subscriptionId = childData.subscription?.subscriptionId;

    const stripe = getStripeClient();

    // 3a. If sessionId provided, look up subscription via Session
    if (sessionId) {
      try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        if (session.subscription) {
          subscriptionId = typeof session.subscription === 'string'
            ? session.subscription
            : session.subscription.id;
        }
      } catch (err) {
        console.warn(`[Sync] Failed to retrieve session ${sessionId}:`, err);
      }
    }

    // If no subscription ID found (via session OR existing doc), return current status
    if (!subscriptionId) {
      return {
        status: childData.subscription?.subscriptionStatus || 'trial',
        subscriptionId: null,
        currentPeriodEnd: null
      };
    }

    // 4. Fetch current state from Stripe
    try {
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);

      // 5. Update Firestore with current Stripe state
      const updates: Partial<SubscriptionData> = {
        subscriptionStatus: mapStripeStatus(subscription.status),
        subscriptionId: subscription.id,
        stripeCustomerId: typeof subscription.customer === 'string' ? subscription.customer : subscription.customer.id,
        priceId: subscription.items.data[0]?.price.id || null,
        billingInterval: (['month', 'year'].includes(subscription.items.data[0]?.price.recurring?.interval || '')
          ? subscription.items.data[0]?.price.recurring?.interval as 'month' | 'year'
          : null),
        currentPeriodStart: Timestamp.fromMillis(subscription.current_period_start * 1000),
        currentPeriodEnd: Timestamp.fromMillis(subscription.current_period_end * 1000),
        cancelAtPeriodEnd: subscription.cancel_at_period_end,
        updatedAt: Timestamp.now()
      };

      // Handle cancellation
      if (subscription.cancel_at_period_end && childData.subscription?.subscriptionStatus !== 'canceled') {
        updates.subscriptionStatus = 'canceled';
      }

      // Merge updates into the full subscription object
      const fullSubscription = {
        ...childData.subscription,
        ...updates,
        updatedAt: FieldValue.serverTimestamp()
      };

      // Perform dual-write to ensure consistency
      const batch = db.batch();

      // 1. Update subcollection (view model)
      batch.update(childDoc.ref, {
        subscription: fullSubscription
      });

      // 2. Update shadow document (primary entity)
      const shadowDocRef = db.collection('users').doc(childProfileId);
      batch.update(shadowDocRef, {
        subscription: fullSubscription
      });

      await batch.commit();

      console.log(`Synced subscription ${subscriptionId} for child ${childProfileId} (dual-write)`);

      return {
        status: updates.subscriptionStatus!,
        subscriptionId,
        currentPeriodEnd: updates.currentPeriodEnd!.toDate().toISOString()
      };

    } catch (error) {
      console.error('[Sync] Error syncing subscription:', error);

      // Subscription might have been deleted
      if ((error as any).code === 'resource_missing') {
        const batch = db.batch();
        const expiredUpdate = {
          'subscription.subscriptionStatus': 'expired',
          'subscription.updatedAt': FieldValue.serverTimestamp()
        };

        batch.update(childDoc.ref, expiredUpdate);
        batch.update(db.collection('users').doc(childProfileId), expiredUpdate);

        await batch.commit();

        return {
          status: 'expired',
          subscriptionId,
          currentPeriodEnd: null
        };
      }

      throw new HttpsError('internal', `Failed to sync subscription: ${(error as Error).message}`);
    }
  }
);
