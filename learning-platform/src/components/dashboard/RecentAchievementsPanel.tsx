/**
 * RecentAchievementsPanel - Display recent achievements
 *
 * Shows:
 * - Last 3-5 achievements earned
 * - Achievement icon, title, timestamp
 * - XP reward
 * - "View All" link
 */

import { useTheme } from '../../hooks/useTheme';
import type { Achievement } from '../../types/practice';

interface RecentAchievementsPanelProps {
  achievements: Achievement[];
  totalAchievements: number;
  onViewAll?: () => void;
}

export const RecentAchievementsPanel: React.FC<RecentAchievementsPanelProps> = ({
  achievements,
  totalAchievements,
  onViewAll,
}) => {
  const { theme } = useTheme();

  // Get last 5 achievements, sorted by earnedAt descending
  // Deduplicate by ID first (in case same achievement appears multiple times)
  const uniqueAchievements = Array.from(
    new Map(achievements.map(a => [a.id, a])).values()
  );

  const recentAchievements = uniqueAchievements
    .filter((a) => a.earnedAt)
    .sort((a, b) => {
      const dateA = a.earnedAt instanceof Date ? a.earnedAt : new Date(a.earnedAt!);
      const dateB = b.earnedAt instanceof Date ? b.earnedAt : new Date(b.earnedAt!);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 5);

  // Format time ago
  const getTimeAgo = (date: Date | string): string => {
    const earnedDate = date instanceof Date ? date : new Date(date);
    const now = new Date();
    const diffMs = now.getTime() - earnedDate.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) return `${diffMins} ${diffMins === 1 ? 'minute' : 'minutes'} ago`;
    if (diffHours < 24) return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return earnedDate.toLocaleDateString();
  };

  if (recentAchievements.length === 0) {
    return (
      <div
        className="glass-surface p-6 rounded-2xl"
        style={{
          background: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🏆</span>
          <h3
            className="text-lg font-semibold"
            style={{ color: theme.colors.textPrimary }}
          >
            Achievements
          </h3>
        </div>
        <p
          className="text-sm text-center py-8"
          style={{ color: theme.colors.textMuted }}
        >
          Start learning to unlock achievements!
        </p>
      </div>
    );
  }

  return (
    <div
      className="glass-surface p-6 rounded-2xl"
      style={{
        background: theme.glass.background,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          <h3
            className="text-lg font-semibold"
            style={{ color: theme.colors.textPrimary }}
          >
            Recent Achievements
          </h3>
        </div>
        <div
          className="text-sm font-medium"
          style={{ color: theme.colors.textMuted }}
        >
          {achievements.length}/{totalAchievements}
        </div>
      </div>

      {/* Achievements List */}
      <div className="space-y-3 mb-4">
        {recentAchievements.map((achievement) => (
          <div
            key={achievement.id}
            className="p-3 rounded-lg"
            style={{
              backgroundColor: theme.colors.interactive,
              border: `1px solid ${theme.colors.border}`,
            }}
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <span className="text-2xl flex-shrink-0">{achievement.icon}</span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4
                  className="font-semibold mb-1"
                  style={{ color: theme.colors.textPrimary }}
                >
                  {achievement.title}
                </h4>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-xs"
                    style={{ color: theme.colors.textMuted }}
                  >
                    Earned {getTimeAgo(achievement.earnedAt!)}
                  </span>
                  <span
                    className="text-xs font-medium"
                    style={{ color: '#FFA500' }}
                  >
                    +{achievement.xpReward} XP
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {onViewAll && (
        <button
          onClick={onViewAll}
          className="w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200"
          style={{
            backgroundColor: theme.colors.interactive,
            color: theme.colors.textPrimary,
            border: `1px solid ${theme.colors.border}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = theme.colors.brand;
            e.currentTarget.style.color = theme.colors.brand;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = theme.colors.border;
            e.currentTarget.style.color = theme.colors.textPrimary;
          }}
        >
          View All {totalAchievements} Achievements →
        </button>
      )}
    </div>
  );
};
