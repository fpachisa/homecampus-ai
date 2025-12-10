import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { db } from '../config/firebase';
import { STRIPE_SECRET_KEY, getStripeClient } from '../config/stripe';

interface PortalRequest {
  returnUrl?: string;
}

interface PortalResponse {
  url: string;
}

export const createPortalSession = onCall<PortalRequest, Promise<PortalResponse>>(
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

    // 2. Get parent profile and Stripe customer ID
    const parentDoc = await db.collection('users').doc(parentUid).get();
    if (!parentDoc.exists) {
      throw new HttpsError('not-found', 'User profile not found');
    }

    const parentData = parentDoc.data()!;
    if (parentData.accountType !== 'parent') {
      throw new HttpsError('permission-denied', 'Only parents can access billing');
    }

    const stripeCustomerId = parentData.stripeCustomerId;
    if (!stripeCustomerId) {
      throw new HttpsError(
        'failed-precondition',
        'No billing account found. Please subscribe first.'
      );
    }

    // 3. Create portal session
    const stripe = getStripeClient();
    const returnUrl = request.data.returnUrl || 'https://homecampus.ai/billing';

    const session = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: returnUrl,
    });

    console.log(`Portal session created for customer ${stripeCustomerId}`);

    return {
      url: session.url
    };
  }
);
