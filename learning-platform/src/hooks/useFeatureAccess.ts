import { useMemo, useCallback } from 'react';
import { useCurrentChildSubscription } from './useSubscription';
import type { ChildSubscriptionState } from '../types/user';

interface FeatureAccess {
  // Core access checks
  hasAccess: boolean;              // Can use the app at all
  showPaywall: boolean;            // Should show paywall (trial expired, no sub)
  showTrialBanner: boolean;        // Show trial countdown banner
  showPaymentFailedBanner: boolean; // Show payment failed warning

  // Trial info
  trialDaysRemaining: number | null;
  trialEndsAt: Date | null;

  // Grace period info (for past_due)
  graceDaysRemaining: number | null;
  graceEndsAt: Date | null;

  // Subscription info
  isSubscribed: boolean;
  currentPeriodEnd: Date | null;
  isCanceled: boolean;

  // Current child's subscription state
  subscriptionState: ChildSubscriptionState | null;

  // Actions
  openPricingModal: () => void;

  // Loading state
  loading: boolean;
}

/**
 * Hook to determine feature access for the current child
 * Use this to gate features and show appropriate UI
 */
export function useFeatureAccess(): FeatureAccess {
  const { subscription, loading } = useCurrentChildSubscription();

  const access = useMemo((): Omit<FeatureAccess, 'openPricingModal' | 'loading' | 'subscriptionState'> => {
    if (!subscription) {
      // No subscription data yet - assume no access until loaded
      return {
        hasAccess: false,
        showPaywall: false,
        showTrialBanner: false,
        showPaymentFailedBanner: false,
        trialDaysRemaining: null,
        trialEndsAt: null,
        graceDaysRemaining: null,
        graceEndsAt: null,
        isSubscribed: false,
        currentPeriodEnd: null,
        isCanceled: false,
      };
    }

    const now = new Date();

    // Calculate grace days remaining
    const graceDaysRemaining = subscription.graceEndsAt
      ? Math.max(0, Math.ceil((subscription.graceEndsAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)))
      : null;

    return {
      hasAccess: subscription.hasAccess,
      // Show paywall if user does NOT have access. 
      // This catches all cases: expired trial, expired sub, canceled sub with period ended, grace period ended
      showPaywall: !subscription.hasAccess,
      showTrialBanner: subscription.isInTrial && (subscription.trialDaysRemaining || 0) <= 3,
      showPaymentFailedBanner: subscription.isPastDue,
      trialDaysRemaining: subscription.trialDaysRemaining,
      trialEndsAt: subscription.trialEndsAt,
      graceDaysRemaining,
      graceEndsAt: subscription.graceEndsAt,
      isSubscribed: subscription.isSubscribed,
      currentPeriodEnd: subscription.currentPeriodEnd,
      isCanceled: subscription.isCanceled,
    };
  }, [subscription]);

  const openPricingModal = useCallback(() => {
    // This will be implemented when the PricingModal component is created
    // For now, you can dispatch an event or use a global state manager
    window.dispatchEvent(new CustomEvent('open-pricing-modal'));
  }, []);

  return {
    ...access,
    subscriptionState: subscription,
    openPricingModal,
    loading,
  };
}

/**
 * Check if a specific feature is accessible
 * For now, all features are gated the same way (access = full access)
 * Extend this if you add tiered features later
 */
export function useCanAccessFeature(_featureName: string): boolean {
  const { hasAccess } = useFeatureAccess();
  return hasAccess;
}
