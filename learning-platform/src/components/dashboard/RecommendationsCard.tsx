/**
 * RecommendationsCard - Smart suggestions for what to do next
 *
 * Shows 2-3 personalized recommendations based on:
 * - Streak status
 * - Achievement proximity
 * - Performance (accuracy, completion)
 * - Daily goals
 */

import { useTheme } from '../../hooks/useTheme';

export interface Recommendation {
  id: string;
  type: 'streak' | 'achievement' | 'practice' | 'continue' | 'next-topic' | 'daily-goal';
  icon: string;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  estimatedTime?: string; // e.g., "~10 min"
  xpReward?: number;
}

interface RecommendationsCardProps {
  recommendations: Recommendation[];
}

export const RecommendationsCard: React.FC<RecommendationsCardProps> = ({
  recommendations,
}) => {
  const { theme } = useTheme();

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div
      className="p-6 rounded-2xl"
      style={{
        background: theme.glass.background,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">💡</span>
        <h3
          className="text-lg font-semibold"
          style={{ color: theme.colors.textPrimary }}
        >
          Recommended For You
        </h3>
      </div>

      {/* Recommendations List */}
      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="p-4 rounded-xl transition-all duration-200"
            style={{
              backgroundColor: theme.colors.interactive,
              border: `1px solid ${theme.colors.border}`,
            }}
          >
            {/* Recommendation Header */}
            <div className="flex items-start gap-3 mb-2">
              <span className="text-2xl flex-shrink-0">{rec.icon}</span>
              <div className="flex-1">
                <h4
                  className="font-semibold mb-1"
                  style={{ color: theme.colors.textPrimary }}
                >
                  {rec.title}
                </h4>
                <p
                  className="text-sm"
                  style={{ color: theme.colors.textSecondary }}
                >
                  {rec.description}
                </p>
              </div>
            </div>

            {/* Metadata (Time & XP) */}
            {(rec.estimatedTime || rec.xpReward) && (
              <div className="flex items-center gap-4 mb-3 text-xs">
                {rec.estimatedTime && (
                  <div
                    className="flex items-center gap-1"
                    style={{ color: theme.colors.textMuted }}
                  >
                    <span>⏱️</span>
                    <span>{rec.estimatedTime}</span>
                  </div>
                )}
                {rec.xpReward && (
                  <div
                    className="flex items-center gap-1"
                    style={{ color: theme.colors.textMuted }}
                  >
                    <span>⭐</span>
                    <span>+{rec.xpReward} XP</span>
                  </div>
                )}
              </div>
            )}

            {/* Action Button */}
            {rec.action && (
              <button
                onClick={rec.action.onClick}
                className="w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: theme.colors.brand,
                  color: '#ffffff',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                {rec.action.label}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
