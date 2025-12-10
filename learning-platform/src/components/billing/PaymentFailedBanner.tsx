import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { billingService } from '../../services/billing/billingService';
import { AlertTriangle, CreditCard, Loader2 } from 'lucide-react';

interface PaymentFailedBannerProps {
  graceDaysRemaining: number | null;
  graceEndsAt: Date | null;
}

/**
 * Alert banner for past_due subscription status
 * Shows grace period countdown and CTA to update payment method
 */
export const PaymentFailedBanner: React.FC<PaymentFailedBannerProps> = ({
  graceDaysRemaining,
  graceEndsAt,
}) => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);

  const handleUpdatePayment = async () => {
    setLoading(true);
    try {
      await billingService.redirectToPortal(window.location.href);
    } catch (err) {
      console.error('Failed to open portal:', err);
      setLoading(false);
    }
  };

  // Format date for display
  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-SG', {
      month: 'short',
      day: 'numeric',
    });
  };

  const isUrgent = graceDaysRemaining !== null && graceDaysRemaining <= 2;

  return (
    <div
      className="relative flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 rounded-xl mb-4 gap-3"
      style={{
        backgroundColor: 'rgba(239, 68, 68, 0.15)',
        border: '1px solid #ef4444',
      }}
    >
      <div className="flex items-start sm:items-center gap-3">
        <div
          className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
          style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}
        >
          <AlertTriangle size={18} color="#ef4444" />
        </div>
        <div>
          <p
            className="text-sm font-medium"
            style={{ color: theme.colors.textPrimary }}
          >
            Payment failed - Please update your payment method
          </p>
          <p
            className="text-xs"
            style={{ color: theme.colors.textSecondary }}
          >
            {graceDaysRemaining !== null && graceDaysRemaining > 0 ? (
              <>
                Access continues until{' '}
                <span style={{ color: isUrgent ? '#ef4444' : theme.colors.textPrimary, fontWeight: 500 }}>
                  {formatDate(graceEndsAt)}
                </span>
                {' '}({graceDaysRemaining} day{graceDaysRemaining !== 1 ? 's' : ''} remaining)
              </>
            ) : graceDaysRemaining === 0 ? (
              <span style={{ color: '#ef4444', fontWeight: 500 }}>
                Access will be suspended today
              </span>
            ) : (
              'Update your payment method to continue access'
            )}
          </p>
        </div>
      </div>

      <button
        onClick={handleUpdatePayment}
        disabled={loading}
        className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap"
        style={{
          backgroundColor: '#ef4444',
          color: 'white',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1,
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            e.currentTarget.style.backgroundColor = '#dc2626';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#ef4444';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Opening...
          </>
        ) : (
          <>
            <CreditCard size={16} />
            Update Payment
          </>
        )}
      </button>
    </div>
  );
};
