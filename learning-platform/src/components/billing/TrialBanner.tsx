import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Clock, X, Sparkles } from 'lucide-react';

interface TrialBannerProps {
  daysRemaining: number;
  onSubscribe: () => void;
}

const DISMISS_KEY = 'trial-banner-dismissed';

/**
 * Banner shown when trial is ending soon (≤3 days remaining)
 * Dismissible for current session (persists in localStorage with timestamp)
 */
export const TrialBanner: React.FC<TrialBannerProps> = ({
  daysRemaining,
  onSubscribe,
}) => {
  const { theme } = useTheme();
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if banner was dismissed recently (within 12 hours)
  useEffect(() => {
    const dismissedAt = localStorage.getItem(DISMISS_KEY);
    if (dismissedAt) {
      const dismissTime = parseInt(dismissedAt, 10);
      const twelveHoursAgo = Date.now() - 12 * 60 * 60 * 1000;
      if (dismissTime > twelveHoursAgo) {
        setIsDismissed(true);
      } else {
        localStorage.removeItem(DISMISS_KEY);
      }
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem(DISMISS_KEY, Date.now().toString());
  };

  if (isDismissed) return null;

  // Determine urgency styling
  const isUrgent = daysRemaining <= 1;
  const bgColor = isUrgent ? 'rgba(239, 68, 68, 0.15)' : `${theme.colors.brand}15`;
  const borderColor = isUrgent ? '#ef4444' : theme.colors.brand;
  const iconColor = isUrgent ? '#ef4444' : theme.colors.brand;

  return (
    <div
      className="relative flex items-center justify-between px-4 py-3 rounded-xl mb-4"
      style={{
        backgroundColor: bgColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center w-8 h-8 rounded-full"
          style={{ backgroundColor: `${iconColor}20` }}
        >
          <Clock size={18} color={iconColor} />
        </div>
        <div>
          <p
            className="text-sm font-medium"
            style={{ color: theme.colors.textPrimary }}
          >
            {daysRemaining === 0
              ? 'Your free trial ends today!'
              : daysRemaining === 1
              ? '1 day left in your free trial'
              : `${daysRemaining} days left in your free trial`}
          </p>
          <p
            className="text-xs"
            style={{ color: theme.colors.textSecondary }}
          >
        Subscribe now to keep excelling in Maths
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onSubscribe}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all"
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
          <Sparkles size={14} />
          Subscribe
        </button>
        <button
          onClick={handleDismiss}
          className="p-1.5 rounded-lg transition-colors"
          style={{
            color: theme.colors.textMuted,
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.interactive;
            e.currentTarget.style.color = theme.colors.textPrimary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = theme.colors.textMuted;
          }}
          title="Dismiss for now"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};
