import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useSubscription } from '../hooks/useSubscription';
import { billingService, PRICING } from '../services/billing/billingService';
import { PricingModal } from '../components/billing';
import {
  CreditCard,
  Crown,
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Loader2,
  ExternalLink,
  User,
  Check,
} from 'lucide-react';
import type { ChildSubscriptionState } from '../types/user';

/**
 * Billing management page for parents
 * Shows all children with their subscription status
 */
export const BillingPage: React.FC = () => {
  const { theme } = useTheme();
  const { children, loading, error, refresh } = useSubscription();
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [selectedChild, setSelectedChild] = useState<{
    id: string;
    name: string;
    trialDaysRemaining: number | null;
  } | null>(null);
  const [portalLoading, setPortalLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Handle post-checkout sync
  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    const childId = searchParams.get('child');

    if (sessionId && childId && !syncing) {
      const sync = async () => {
        setSyncing(true);
        try {
          console.log(`Syncing subscription for child ${childId}...`);
          await billingService.syncSubscription(childId, sessionId);
          await refresh(); // Refresh local state

          // Show success and clean URL
          setShowSuccessMessage(true);
          searchParams.delete('session_id');
          searchParams.delete('child');
          navigate({ pathname: '/billing', search: searchParams.toString() }, { replace: true });

          // Hide success message after delay
          setTimeout(() => setShowSuccessMessage(false), 5000);
        } catch (err) {
          console.error('Failed to sync subscription:', err);
        } finally {
          setSyncing(false);
        }
      };

      sync();
    }
  }, [searchParams, navigate, refresh]);

  const handleOpenPortal = async () => {
    setPortalLoading(true);
    try {
      await billingService.redirectToPortal(window.location.href);
    } catch (err) {
      console.error('Failed to open portal:', err);
      setPortalLoading(false);
    }
  };

  const getStatusConfig = (child: ChildSubscriptionState) => {
    switch (child.status) {
      case 'trial':
        return {
          icon: Clock,
          label: `${child.trialDaysRemaining} day${child.trialDaysRemaining !== 1 ? 's' : ''} left in trial`,
          color: theme.colors.brand,
          bgColor: `${theme.colors.brand}15`,
        };
      case 'active':
        return {
          icon: Crown,
          label: 'Active Subscription',
          color: '#22c55e',
          bgColor: 'rgba(34, 197, 94, 0.15)',
        };
      case 'past_due':
        return {
          icon: AlertTriangle,
          label: 'Payment Failed',
          color: '#ef4444',
          bgColor: 'rgba(239, 68, 68, 0.15)',
        };
      case 'canceled':
        return {
          icon: XCircle,
          label: `Cancels ${child.currentPeriodEnd?.toLocaleDateString('en-SG', { month: 'short', day: 'numeric' })}`,
          color: '#f59e0b',
          bgColor: 'rgba(245, 158, 11, 0.15)',
        };
      case 'trial_expired':
      case 'expired':
      default:
        return {
          icon: XCircle,
          label: 'No Subscription',
          color: '#6b7280',
          bgColor: 'rgba(107, 114, 128, 0.15)',
        };
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 size={32} className="animate-spin" color={theme.colors.brand} />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="rounded-xl p-6 text-center"
        style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)' }}
      >
        <p style={{ color: '#ef4444' }}>Failed to load subscription data</p>
        <button
          onClick={refresh}
          className="mt-4 px-4 py-2 rounded-lg text-sm font-medium"
          style={{
            backgroundColor: theme.colors.interactive,
            color: theme.colors.textPrimary,
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-2xl font-bold mb-2"
          style={{ color: theme.colors.textPrimary }}
        >
          Billing & Subscriptions
        </h1>
        <p style={{ color: theme.colors.textSecondary }}>
          Manage subscriptions for your children
        </p>
      </div>

      {/* Success Message */}
      {showSuccessMessage && (
        <div
          className="mb-6 p-4 rounded-xl flex items-center gap-3 animate-fade-in"
          style={{
            backgroundColor: 'rgba(34, 197, 94, 0.15)',
            border: '1px solid #22c55e',
          }}
        >
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#22c55e' }}
          >
            <Check size={14} color="white" strokeWidth={3} />
          </div>
          <span style={{ color: '#15803d', fontWeight: 600 }}>
            Subscription activated successfully!
          </span>
        </div>
      )}

      {/* Syncing Loading State */}
      {syncing && (
        <div className="mb-6 px-4 py-3 rounded-xl flex items-center justify-center gap-2" style={{ backgroundColor: theme.colors.secondary }}>
          <Loader2 size={16} className="animate-spin" style={{ color: theme.colors.brand }} />
          <span className="text-sm font-medium" style={{ color: theme.colors.textSecondary }}>
            Updating subscription status...
          </span>
        </div>
      )}

      {/* Pricing Info */}
      <div
        className="rounded-xl p-4 mb-6 flex items-center justify-between"
        style={{
          backgroundColor: theme.colors.secondary,
          border: `1px solid ${theme.colors.border}`,
        }}
      >
        <div className="flex items-center gap-3">
          <CreditCard size={20} color={theme.colors.textSecondary} />
          <div>
            <p
              className="text-sm font-medium"
              style={{ color: theme.colors.textPrimary }}
            >
              Per-child pricing
            </p>
            <p
              className="text-xs"
              style={{ color: theme.colors.textSecondary }}
            >
              S${PRICING.monthly.amount}/mo or S${PRICING.yearly.amount}/yr ({PRICING.yearly.savings})
            </p>
          </div>
        </div>
        <button
          onClick={handleOpenPortal}
          disabled={portalLoading || children.every(c => !c.isSubscribed && !c.isPastDue && !c.isCanceled)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all"
          style={{
            backgroundColor: children.some(c => c.isSubscribed || c.isPastDue || c.isCanceled)
              ? theme.colors.interactive
              : theme.colors.border,
            color: children.some(c => c.isSubscribed || c.isPastDue || c.isCanceled)
              ? theme.colors.textPrimary
              : theme.colors.textMuted,
            cursor: children.some(c => c.isSubscribed || c.isPastDue || c.isCanceled) && !portalLoading
              ? 'pointer'
              : 'not-allowed',
          }}
        >
          {portalLoading ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <ExternalLink size={14} />
          )}
          Manage Billing
        </button>
      </div>

      {/* Children List */}
      {children.length === 0 ? (
        <div
          className="rounded-xl p-8 text-center"
          style={{
            backgroundColor: theme.colors.secondary,
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          <User size={48} color={theme.colors.textMuted} className="mx-auto mb-4" />
          <p style={{ color: theme.colors.textSecondary }}>
            No child profiles yet. Add a child to get started.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {children.map((child) => {
            const statusConfig = getStatusConfig(child);
            const StatusIcon = statusConfig.icon;

            return (
              <div
                key={child.childProfileId}
                className="rounded-xl p-5"
                style={{
                  backgroundColor: theme.colors.secondary,
                  border: `1px solid ${theme.colors.border}`,
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                      style={{
                        background: theme.gradients.brand,
                        color: 'white',
                      }}
                    >
                      {child.childName.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <h3
                        className="font-semibold text-lg"
                        style={{ color: theme.colors.textPrimary }}
                      >
                        {child.childName}
                      </h3>

                      {/* Status Badge */}
                      <div
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mt-1"
                        style={{
                          backgroundColor: statusConfig.bgColor,
                        }}
                      >
                        <StatusIcon size={14} color={statusConfig.color} />
                        <span
                          className="text-xs font-medium"
                          style={{ color: statusConfig.color }}
                        >
                          {statusConfig.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div>
                    {child.isSubscribed ? (
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={18} color="#22c55e" />
                        <span
                          className="text-sm"
                          style={{ color: theme.colors.textSecondary }}
                        >
                          Renews {child.currentPeriodEnd?.toLocaleDateString('en-SG', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    ) : child.isPastDue ? (
                      <button
                        onClick={handleOpenPortal}
                        className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                        style={{
                          backgroundColor: '#ef4444',
                          color: 'white',
                          cursor: 'pointer',
                        }}
                      >
                        Update Payment
                      </button>
                    ) : child.isCanceled ? (
                      <button
                        onClick={handleOpenPortal}
                        className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                        style={{
                          backgroundColor: theme.colors.interactive,
                          color: theme.colors.textPrimary,
                          cursor: 'pointer',
                        }}
                      >
                        Reactivate
                      </button>
                    ) : (
                      <button
                        onClick={() => setSelectedChild({
                          id: child.childProfileId,
                          name: child.childName,
                          trialDaysRemaining: child.trialDaysRemaining,
                        })}
                        className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all"
                        style={{
                          background: theme.gradients.brand,
                          cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-1px)';
                          e.currentTarget.style.boxShadow = theme.shadows.glow;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        Subscribe
                      </button>
                    )}
                  </div>
                </div>

                {/* Additional Info for specific states */}
                {child.isPastDue && child.graceEndsAt && (
                  <div
                    className="mt-3 p-3 rounded-lg flex items-center gap-2"
                    style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                  >
                    <AlertTriangle size={16} color="#ef4444" />
                    <span
                      className="text-sm"
                      style={{ color: '#ef4444' }}
                    >
                      Access until {child.graceEndsAt.toLocaleDateString('en-SG', {
                        month: 'short',
                        day: 'numeric',
                      })} - update payment to avoid interruption
                    </span>
                  </div>
                )}

                {child.isCanceled && child.currentPeriodEnd && (
                  <div
                    className="mt-3 p-3 rounded-lg flex items-center gap-2"
                    style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}
                  >
                    <Clock size={16} color="#f59e0b" />
                    <span
                      className="text-sm"
                      style={{ color: '#f59e0b' }}
                    >
                      Subscription canceled - access continues until {child.currentPeriodEnd.toLocaleDateString('en-SG', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Pricing Modal */}
      {selectedChild && (
        <PricingModal
          isOpen={true}
          onClose={() => setSelectedChild(null)}
          childProfileId={selectedChild.id}
          childName={selectedChild.name}
          trialDaysRemaining={selectedChild.trialDaysRemaining}
        />
      )}
    </div>
  );
};

export default BillingPage;
