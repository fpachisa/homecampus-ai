import { Timestamp } from 'firebase-admin/firestore';

export type SubscriptionStatus =
  | 'trial'           // 7-day free access (no payment yet)
  | 'trial_expired'   // Trial ended, no subscription
  | 'active'          // Paid and active
  | 'past_due'        // Payment failed, grace period
  | 'canceled'        // User canceled, access until period end
  | 'expired';        // Subscription ended

export interface SubscriptionData {
  // Trial tracking
  trialStartDate: Timestamp;
  trialEndDate: Timestamp;

  // Admin trial extension (optional override)
  trialExtendedUntil: Timestamp | null;
  trialExtensionReason: string | null;
  trialExtensionSetBy: string | null;
  trialExtensionSetAt: Timestamp | null;

  // Stripe identifiers (null until first payment)
  stripeCustomerId: string | null;
  subscriptionId: string | null;

  // Subscription details
  subscriptionStatus: SubscriptionStatus;
  priceId: string | null;
  billingInterval: 'month' | 'year' | null;
  currentPeriodStart: Timestamp | null;
  currentPeriodEnd: Timestamp | null;
  cancelAtPeriodEnd: boolean;

  // Grace period for past_due
  graceUntil: Timestamp | null;

  // Payment info
  lastPaymentDate: Timestamp | null;
  lastPaymentAmount: number | null;
  currency: string;

  updatedAt: Timestamp;
}

export interface ChildProfile {
  profileId: string;
  displayName: string;
  gradeLevel: string;
  avatarUrl: string | null;
  createdAt: Timestamp;
  subscription: SubscriptionData;
}

export interface ActiveTrial {
  parentUid: string;
  childProfileId: string;
  trialEndDate: Timestamp;
  effectiveTrialEnd: Timestamp;
  reminderSent: boolean;
  expiredProcessed: boolean;
}

// Helper to create initial subscription for trial
export function createTrialSubscription(now: Timestamp): SubscriptionData {
  const trialEnd = Timestamp.fromMillis(now.toMillis() + 7 * 24 * 60 * 60 * 1000);

  return {
    trialStartDate: now,
    trialEndDate: trialEnd,
    trialExtendedUntil: null,
    trialExtensionReason: null,
    trialExtensionSetBy: null,
    trialExtensionSetAt: null,
    stripeCustomerId: null,
    subscriptionId: null,
    subscriptionStatus: 'trial',
    priceId: null,
    billingInterval: null,
    currentPeriodStart: null,
    currentPeriodEnd: null,
    cancelAtPeriodEnd: false,
    graceUntil: null,
    lastPaymentDate: null,
    lastPaymentAmount: null,
    currency: 'SGD',
    updatedAt: now
  };
}

// Map Stripe status to internal status
export function mapStripeStatus(stripeStatus: string): SubscriptionStatus {
  const mapping: Record<string, SubscriptionStatus> = {
    'active': 'active',
    'trialing': 'active',      // Stripe trial (if used) = active for us
    'past_due': 'past_due',
    'canceled': 'canceled',
    'unpaid': 'expired',
    'incomplete': 'expired',
    'incomplete_expired': 'expired',
  };
  return mapping[stripeStatus] ?? 'expired';
}
