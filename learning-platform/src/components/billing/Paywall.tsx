import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { billingService, PRICING } from '../../services/billing/billingService';
import { Lock, Check, Sparkles, Loader2 } from 'lucide-react';

interface PaywallProps {
  childName: string;
  childProfileId: string;
}

/**
 * Hard-blocking paywall overlay
 * Cannot be dismissed - user must subscribe to continue
 */
export const Paywall: React.FC<PaywallProps> = ({
  childName,
  childProfileId,
}) => {
  const { theme } = useTheme();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const priceId = selectedPlan === 'monthly'
        ? PRICING.monthly.priceId
        : PRICING.yearly.priceId;

      await billingService.redirectToCheckout(priceId, childProfileId);
    } catch (err) {
      console.error('Checkout error:', err);
      setError('Failed to start checkout. Please try again.');
      setLoading(false);
    }
  };

  const features = [
    'Full access to everything',
    'AI-powered personal tutoring',
    'Unlimited practice sessions',
    'Progress tracking',
    'Homework helper',
    'and much more...',
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div
        className="max-w-lg w-full rounded-2xl p-8 shadow-2xl"
        style={{
          backgroundColor: theme.colors.primary,
          border: `1px solid ${theme.colors.border}`,
          boxShadow: theme.shadows.xl,
        }}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)' }}
            >
              <Lock size={32} color="#ef4444" />
            </div>
          </div>
          <h2
            className="text-2xl font-bold mb-2"
            style={{ color: theme.colors.textPrimary }}
          >
            Free Trial Ended
          </h2>
          <p
            className="text-base"
            style={{ color: theme.colors.textSecondary }}
          >
            Subscribe to continue learning with {childName}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Monthly */}
          <button
            onClick={() => setSelectedPlan('monthly')}
            className="relative p-4 rounded-xl text-left transition-all"
            style={{
              backgroundColor: selectedPlan === 'monthly'
                ? `${theme.colors.brand}15`
                : theme.colors.secondary,
              border: `2px solid ${selectedPlan === 'monthly' ? theme.colors.brand : theme.colors.border}`,
              cursor: 'pointer',
            }}
          >
            <div
              className="text-sm font-medium mb-1"
              style={{ color: theme.colors.textSecondary }}
            >
              {PRICING.monthly.label}
            </div>
            <div
              className="text-2xl font-bold"
              style={{ color: theme.colors.textPrimary }}
            >
              S${PRICING.monthly.amount}
            </div>
            <div
              className="text-xs"
              style={{ color: theme.colors.textMuted }}
            >
              per month
            </div>
          </button>

          {/* Yearly */}
          <button
            onClick={() => setSelectedPlan('yearly')}
            className="relative p-4 rounded-xl text-left transition-all"
            style={{
              backgroundColor: selectedPlan === 'yearly'
                ? `${theme.colors.brand}15`
                : theme.colors.secondary,
              border: `2px solid ${selectedPlan === 'yearly' ? theme.colors.brand : theme.colors.border}`,
              cursor: 'pointer',
            }}
          >
            {/* Best Value Badge */}
            <div
              className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-xs font-semibold text-white"
              style={{ background: theme.gradients.brand }}
            >
              Best Value
            </div>
            <div
              className="text-sm font-medium mb-1"
              style={{ color: theme.colors.textSecondary }}
            >
              {PRICING.yearly.label}
            </div>
            <div
              className="text-2xl font-bold"
              style={{ color: theme.colors.textPrimary }}
            >
              S${PRICING.yearly.amount}
            </div>
            <div
              className="text-xs"
              style={{ color: theme.colors.brand }}
            >
              {PRICING.yearly.savings}
            </div>
          </button>
        </div>

        {/* Features */}
        <div
          className="rounded-xl p-4 mb-6"
          style={{ backgroundColor: theme.colors.secondary }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={16} color={theme.colors.brand} />
            <span
              className="text-sm font-semibold"
              style={{ color: theme.colors.textPrimary }}
            >
              Everything included:
            </span>
          </div>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check size={16} color={theme.colors.brand} />
                <span
                  className="text-sm"
                  style={{ color: theme.colors.textSecondary }}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Error Message */}
        {error && (
          <div
            className="rounded-lg p-3 mb-4 text-sm"
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              color: '#ef4444',
            }}
          >
            {error}
          </div>
        )}

        {/* Checkout Button */}
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full py-4 px-6 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 text-lg"
          style={{
            background: loading ? theme.colors.textMuted : theme.gradients.brand,
            boxShadow: theme.shadows.md,
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
          }}
          onMouseEnter={(e) => {
            if (!loading) {
              e.currentTarget.style.boxShadow = theme.shadows.glow;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = theme.shadows.md;
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {loading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Processing...
            </>
          ) : (
            `Subscribe Now - S$${selectedPlan === 'monthly' ? PRICING.monthly.amount : PRICING.yearly.amount}/${selectedPlan === 'monthly' ? 'mo' : 'yr'}`
          )}
        </button>

        {/* Fine print */}
        <p
          className="text-center text-xs mt-4"
          style={{ color: theme.colors.textMuted }}
        >
          Cancel anytime. Secure payment via Stripe.
        </p>
      </div>
    </div>
  );
};
