/**
 * ActionCard - Compact action/CTA card
 *
 * Used for quick actions like:
 * - Keep streak alive
 * - Daily goal progress
 * - Quick practice
 * - Achievement unlock
 */

import { useTheme } from '../../hooks/useTheme';

interface ActionCardProps {
  icon: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonColor?: string;
  onAction: () => void;
  metadata?: {
    time?: string;
    xp?: number;
  };
}

export const ActionCard: React.FC<ActionCardProps> = ({
  icon,
  title,
  description,
  buttonLabel,
  buttonColor,
  onAction,
  metadata,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className="p-5 rounded-xl flex flex-col h-full"
      style={{
        background: theme.glass.background,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
      }}
    >
      {/* Icon */}
      <div className="text-3xl mb-3">{icon}</div>

      {/* Title */}
      <h3
        className="text-base font-bold mb-2"
        style={{ color: theme.colors.textPrimary }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm mb-3 flex-1"
        style={{ color: theme.colors.textSecondary }}
      >
        {description}
      </p>

      {/* Metadata (time + XP) */}
      {metadata && (
        <div className="flex items-center gap-3 mb-3 text-xs">
          {metadata.time && (
            <div
              className="flex items-center gap-1"
              style={{ color: theme.colors.textMuted }}
            >
              <span>⏱️</span>
              <span>{metadata.time}</span>
            </div>
          )}
          {metadata.xp && (
            <div
              className="flex items-center gap-1"
              style={{ color: theme.colors.textMuted }}
            >
              <span>⭐</span>
              <span>+{metadata.xp} XP</span>
            </div>
          )}
        </div>
      )}

      {/* CTA Button */}
      <button
        onClick={onAction}
        className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200"
        style={{
          backgroundColor: buttonColor || theme.colors.brand,
          color: '#ffffff',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.9';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {buttonLabel}
      </button>
    </div>
  );
};
