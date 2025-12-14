/**
 * StatCard - Reusable stat display component
 *
 * Used in HeroStatsBanner and other places to display metrics
 * with icon, value, label, and optional trend indicator
 */

import { useTheme } from '../../hooks/useTheme';

interface StatCardProps {
  icon: string; // Emoji or icon
  label: string; // Stat label (e.g., "Current Streak")
  value: string | number; // Main value to display
  subtitle?: string; // Optional subtitle (e.g., "Keep it going!")
  trend?: {
    value: string; // e.g., "+25%"
    isPositive: boolean; // Green or red
  };
  children?: React.ReactNode; // Optional custom content (e.g., progress bar)
  onClick?: () => void; // Optional click handler
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  label,
  value,
  subtitle,
  trend,
  children,
  onClick,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={`glass-surface p-3 sm:p-4 md:p-5 rounded-xl ${onClick ? 'cursor-pointer transition-all hover:scale-105' : ''}`}
      style={{
        background: theme.glass.background,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
      }}
      onClick={onClick}
    >
      {/* Icon */}
      <div className="text-2xl sm:text-3xl mb-2">{icon}</div>

      {/* Label */}
      <div
        className="text-xs font-medium uppercase tracking-wide mb-1"
        style={{ color: theme.colors.textMuted }}
      >
        {label}
      </div>

      {/* Value */}
      <div
        className="text-xl sm:text-2xl font-bold mb-1"
        style={{ color: theme.colors.textPrimary }}
      >
        {value}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <div
          className="text-sm mb-2"
          style={{ color: theme.colors.textSecondary }}
        >
          {subtitle}
        </div>
      )}

      {/* Trend indicator */}
      {trend && (
        <div
          className="text-xs font-medium flex items-center gap-1"
          style={{
            color: trend.isPositive ? theme.colors.success : theme.colors.error,
          }}
        >
          <span>{trend.isPositive ? '↑' : '↓'}</span>
          <span>{trend.value}</span>
        </div>
      )}

      {/* Custom children (e.g., progress bars) */}
      {children}
    </div>
  );
};
