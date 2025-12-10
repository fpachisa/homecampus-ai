import { useState, useEffect } from 'react';
import { useFeatureAccess } from '../../hooks/useFeatureAccess';
import { useActiveProfile } from '../../contexts/ActiveProfileContext';
import { Paywall, TrialBanner, PaymentFailedBanner, PricingModal } from '../billing';
import LoadingSpinner from '../LoadingSpinner';

interface SubscriptionGuardProps {
  children: React.ReactNode;
}

/**
 * Wrapper component for subscription-required content
 * Shows appropriate UI based on subscription status:
 * - Paywall for expired trials/subscriptions (blocking)
 * - Trial banner when trial is ending soon (≤3 days)
 * - Payment failed banner for past_due status
 */
export const SubscriptionGuard: React.FC<SubscriptionGuardProps> = ({ children }) => {
  const {
    showPaywall,
    showTrialBanner,
    showPaymentFailedBanner,
    trialDaysRemaining,
    graceDaysRemaining,
    graceEndsAt,
    subscriptionState,
    loading,
  } = useFeatureAccess();

  const { activeProfile } = useActiveProfile();
  const [showPricingModal, setShowPricingModal] = useState(false);

  // Listen for pricing modal events (from useFeatureAccess.openPricingModal)
  useEffect(() => {
    const handleOpenPricingModal = () => setShowPricingModal(true);
    window.addEventListener('open-pricing-modal', handleOpenPricingModal);
    return () => window.removeEventListener('open-pricing-modal', handleOpenPricingModal);
  }, []);

  // Get child info for billing components
  const childProfileId = activeProfile?.profileId || activeProfile?.uid || '';
  const childName = activeProfile?.displayName || 'your child';

  // Show loading state while checking subscription
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  // If no subscription state and no active profile, allow access (non-child context)
  // This handles cases where the user is a parent viewing the parent dashboard
  if (!subscriptionState && !activeProfile?.profileId) {
    return <>{children}</>;
  }

  // Show hard-blocking paywall for expired trials/subscriptions
  if (showPaywall && childProfileId) {
    return (
      <Paywall
        childName={childName}
        childProfileId={childProfileId}
      />
    );
  }

  // User has access - show content with optional banners
  return (
    <>
      {/* Payment failed banner (top priority) */}
      {showPaymentFailedBanner && (
        <div className="px-4 pt-4">
          <PaymentFailedBanner
            graceDaysRemaining={graceDaysRemaining}
            graceEndsAt={graceEndsAt}
          />
        </div>
      )}

      {/* Trial ending soon banner */}
      {showTrialBanner && trialDaysRemaining !== null && !showPaymentFailedBanner && (
        <div className="px-4 pt-4">
          <TrialBanner
            daysRemaining={trialDaysRemaining}
            onSubscribe={() => setShowPricingModal(true)}
          />
        </div>
      )}

      {/* Main content */}
      {children}

      {/* Pricing modal (triggered by banner or other components) */}
      {showPricingModal && childProfileId && (
        <PricingModal
          isOpen={true}
          onClose={() => setShowPricingModal(false)}
          childProfileId={childProfileId}
          childName={childName}
          trialDaysRemaining={trialDaysRemaining}
        />
      )}
    </>
  );
};
