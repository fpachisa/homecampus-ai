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
}) => {
  const { theme } = useTheme();

  return (
    <div
      className="p-3 sm:p-4 lg:p-5 rounded-xl flex flex-col h-full"
      style={{
        background: theme.glass.background,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
      }}
    >
      {/* Icon */}
      <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{icon}</div>

      {/* Title */}
      <h3
        className="text-sm sm:text-base font-bold mb-1.5 sm:mb-2"
        style={{ color: theme.colors.textPrimary }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-xs sm:text-sm mb-2 sm:mb-3 flex-1"
        style={{ color: theme.colors.textSecondary }}
      >
        {description}
      </p>


      {/* CTA Button */}
      <button
        onClick={onAction}
        className="self-center py-2.5 px-4 sm:py-2 sm:px-5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 min-h-[44px] sm:min-h-0"
        style={{
          backgroundColor: buttonColor || theme.colors.brand,
          color: '#ffffff',
          cursor: 'pointer',
          touchAction: 'manipulation',
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
