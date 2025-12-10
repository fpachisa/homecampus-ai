import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase';

// Response types from Cloud Functions
interface CheckoutResponse {
  sessionId: string;
  url: string;
}

interface PortalResponse {
  url: string;
}

interface SyncResponse {
  status: string;
  subscriptionId: string | null;
  currentPeriodEnd: string | null;
}

interface AddChildResponse {
  childProfileId: string;
  trialEndDate: string;
}

// Price IDs (from Stripe Dashboard)
export const STRIPE_PRICES = {
  MONTHLY: import.meta.env.VITE_STRIPE_PRICE_MONTHLY || 'price_1SXYyXFWKYH7DoHYVyYFDW2i',
  YEARLY: import.meta.env.VITE_STRIPE_PRICE_YEARLY || 'price_1SXYyXFWKYH7DoHYuiVfzrDa',
} as const;

export const PRICING = {
  monthly: {
    priceId: STRIPE_PRICES.MONTHLY,
    amount: 28.88,
    currency: 'SGD',
    interval: 'month' as const,
    label: 'Monthly',
  },
  yearly: {
    priceId: STRIPE_PRICES.YEARLY,
    amount: 288.88,
    currency: 'SGD',
    interval: 'year' as const,
    label: 'Yearly',
    savings: '2 months free',
  },
};

class BillingService {
  /**
   * Create a Stripe Checkout session for a specific child
   */
  async createCheckoutSession(
    priceId: string,
    childProfileId: string
  ): Promise<CheckoutResponse> {
    const createCheckout = httpsCallable<
      { priceId: string; childProfileId: string; successUrl: string; cancelUrl: string },
      CheckoutResponse
    >(functions, 'createCheckoutSession');

    // Dynamically construct URLs based on current origin (localhost or production)
    const origin = window.location.origin;
    const successUrl = `${origin}/billing`;
    const cancelUrl = `${origin}/billing?canceled=true`;

    const result = await createCheckout({
      priceId,
      childProfileId,
      successUrl,
      cancelUrl
    });
    return result.data;
  }

  /**
   * Open Stripe Customer Portal for managing subscriptions
   * Note: Portal shows ALL subscriptions (all children)
   */
  async openCustomerPortal(returnUrl?: string): Promise<PortalResponse> {
    const createPortal = httpsCallable<
      { returnUrl: string },
      PortalResponse
    >(functions, 'createPortalSession');

    // Default to billing page if no return URL provided
    const url = returnUrl || `${window.location.origin}/billing`;

    const result = await createPortal({ returnUrl: url });
    return result.data;
  }

  /**
   * Sync subscription state from Stripe
   * Call after checkout/portal redirects to ensure UI is up-to-date
   */
  async syncSubscription(childProfileId: string, sessionId?: string): Promise<SyncResponse> {
    const sync = httpsCallable<
      { childProfileId: string; sessionId?: string },
      SyncResponse
    >(functions, 'syncSubscription');

    const result = await sync({ childProfileId, sessionId });
    return result.data;
  }

  /**
   * Create a new child profile with trial
   * This is the only way to create child profiles (enforced by security rules)
   */
  async addChildProfile(
    displayName: string,
    gradeLevel: string,
    avatarUrl?: string
  ): Promise<AddChildResponse> {
    const addChild = httpsCallable<
      { displayName: string; gradeLevel: string; avatarUrl?: string },
      AddChildResponse
    >(functions, 'addChildProfile');

    const result = await addChild({ displayName, gradeLevel, avatarUrl });
    return result.data;
  }

  /**
   * Redirect to Stripe Checkout
   */
  async redirectToCheckout(priceId: string, childProfileId: string): Promise<void> {
    const { url } = await this.createCheckoutSession(priceId, childProfileId);
    window.location.href = url;
  }

  /**
   * Redirect to Stripe Customer Portal
   */
  async redirectToPortal(returnUrl?: string): Promise<void> {
    const { url } = await this.openCustomerPortal(returnUrl);
    window.location.href = url;
  }
}

// Export singleton instance
export const billingService = new BillingService();
