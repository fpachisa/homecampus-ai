import { defineSecret } from 'firebase-functions/params';
import Stripe from 'stripe';

// Define secrets (v2 pattern)
// Set via: firebase functions:secrets:set STRIPE_SECRET_KEY
export const STRIPE_SECRET_KEY = defineSecret('STRIPE_SECRET_KEY');
export const STRIPE_WEBHOOK_SECRET = defineSecret('STRIPE_WEBHOOK_SECRET');
export const STRIPE_PRICE_MONTHLY = defineSecret('STRIPE_PRICE_MONTHLY');
export const STRIPE_PRICE_YEARLY = defineSecret('STRIPE_PRICE_YEARLY');

// Create Stripe client (call inside function handler, not at module level)
export function getStripeClient(): Stripe {
  return new Stripe(STRIPE_SECRET_KEY.value());
}

// Validate price ID against allowlist
export function isValidPriceId(priceId: string): boolean {
  const validPrices = [
    STRIPE_PRICE_MONTHLY.value(),
    STRIPE_PRICE_YEARLY.value()
  ];
  return validPrices.includes(priceId);
}

// Get billing interval from price ID
export function getBillingInterval(priceId: string): 'month' | 'year' | null {
  if (priceId === STRIPE_PRICE_MONTHLY.value()) return 'month';
  if (priceId === STRIPE_PRICE_YEARLY.value()) return 'year';
  return null;
}
