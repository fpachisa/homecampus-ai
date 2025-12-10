import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { db } from '../config/firebase';
import {
  STRIPE_SECRET_KEY,
  STRIPE_PRICE_MONTHLY,
  STRIPE_PRICE_YEARLY,
  getStripeClient,
  isValidPriceId
} from '../config/stripe';

interface CheckoutRequest {
  priceId: string;
  childProfileId: string;
  successUrl?: string;
  cancelUrl?: string;
}

interface CheckoutResponse {
  sessionId: string;
  url: string;
}

export const createCheckoutSession = onCall<CheckoutRequest, Promise<CheckoutResponse>>(
  {
    region: 'asia-southeast1',
    secrets: [STRIPE_SECRET_KEY, STRIPE_PRICE_MONTHLY, STRIPE_PRICE_YEARLY],
    // enforceAppCheck: true,  // Enable in production
  },
  async (request) => {
    // 1. Validate authenticated user
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Must be logged in');
    }
    const parentUid = request.auth.uid;

    // 2. Validate input
    const { priceId, childProfileId, successUrl, cancelUrl } = request.data;

    if (!priceId || typeof priceId !== 'string') {
      throw new HttpsError('invalid-argument', 'Price ID is required');
    }

    if (!childProfileId || typeof childProfileId !== 'string') {
      throw new HttpsError('invalid-argument', 'Child profile ID is required');
    }

    // 3. Validate price ID against allowlist (prevents tampering)
    if (!isValidPriceId(priceId)) {
      throw new HttpsError('invalid-argument', 'Invalid price ID');
    }

    // 4. Verify parent account and get email
    const parentDoc = await db.collection('users').doc(parentUid).get();
    if (!parentDoc.exists) {
      throw new HttpsError('not-found', 'User profile not found');
    }

    const parentData = parentDoc.data()!;
    if (parentData.accountType !== 'parent') {
      throw new HttpsError('permission-denied', 'Only parents can purchase subscriptions');
    }

    // 5. Verify child exists and belongs to parent
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

    // 6. Check if child already has active subscription
    const currentStatus = childData.subscription?.subscriptionStatus;
    if (currentStatus === 'active') {
      throw new HttpsError('already-exists', 'Child already has an active subscription');
    }

    // 7. Get or create Stripe customer
    const stripe = getStripeClient();
    let stripeCustomerId = parentData.stripeCustomerId;

    if (!stripeCustomerId) {
      // Create new Stripe customer
      const customer = await stripe.customers.create({
        email: parentData.email,
        name: parentData.displayName,
        metadata: {
          firebaseUid: parentUid
        }
      });
      stripeCustomerId = customer.id;

      // Save customer ID to parent profile
      await db.collection('users').doc(parentUid).update({
        stripeCustomerId: customer.id
      });

      // Also save to stripeCustomers collection for reverse lookup
      await db.collection('stripeCustomers').doc(customer.id).set({
        uid: parentUid,
        email: parentData.email,
        createdAt: new Date()
      });
    }

    // 8. Create checkout session
    const baseUrl = successUrl?.split('?')[0] || 'https://homecampus.ai/billing';

    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}?session_id={CHECKOUT_SESSION_ID}&child=${childProfileId}`,
      cancel_url: cancelUrl || 'https://homecampus.ai/billing?canceled=true',
      client_reference_id: parentUid,
      subscription_data: {
        metadata: {
          parentUid,
          childProfileId,
          childName: childData.displayName
        }
      },
      metadata: {
        parentUid,
        childProfileId
      }
    });

    if (!session.url) {
      throw new HttpsError('internal', 'Failed to create checkout session');
    }

    console.log(`Checkout session ${session.id} created for child ${childProfileId}`);

    return {
      sessionId: session.id,
      url: session.url
    };
  }
);
