/**
 * ActiveTopicCard - Topic card for students with progress
 *
 * Features:
 * - Circular progress ring
 * - Status badge (New / In Progress / Mastered)
 * - XP earned display
 * - Last accessed timestamp
 * - Continue/Start button
 */

import { useTheme } from '../../hooks/useTheme';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import type { Topic } from '../../config/topicsByGrade';
import { CircularProgress } from './CircularProgress';

interface ActiveTopicCardProps {
  topic: Topic;
  progress?: number; // 0-100, undefined if never started
  xpEarned?: number;
  lastAccessed?: Date;
}

export const ActiveTopicCard: React.FC<ActiveTopicCardProps> = ({
  topic,
  progress = 0,
  xpEarned = 0,
  lastAccessed,
}) => {
  const { theme } = useTheme();
  const { goToLearn } = useAppNavigation();

  // Determine status
  const getStatus = (): { label: string; color: string } => {
    if (progress === 0) {
      return { label: 'New', color: theme.colors.brand };
    } else if (progress >= 100) {
      return { label: 'Mastered', color: theme.colors.success };
    } else {
      return { label: 'In Progress', color: '#FFA500' };
    }
  };

  const status = getStatus();

  // Format time ago
  const getTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  const handleClick = () => {
    if (!topic.category) return;
    goToLearn(topic.category, undefined, true);
  };

  return (
    <button
      onClick={handleClick}
      disabled={!topic.isActive}
      className="group relative p-4 sm:p-5 md:p-6 rounded-2xl transition-all duration-300 text-left w-full"
      style={{
        background: topic.isActive ? theme.glass.background : theme.colors.interactive,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: topic.isActive ? theme.glass.backdrop : 'none',
        opacity: topic.isActive ? 1 : 0.5,
        boxShadow: theme.shadows.md,
        cursor: topic.isActive ? 'pointer' : 'not-allowed',
      }}
      onMouseEnter={(e) => {
        if (topic.isActive) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = theme.shadows.glow;
        }
      }}
      onMouseLeave={(e) => {
        if (topic.isActive) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = theme.shadows.md;
        }
      }}
    >
      {/* Status Badge */}
      <div
        className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-1 rounded-full text-xs font-bold"
        style={{
          backgroundColor: status.color,
          color: '#ffffff',
        }}
      >
        {status.label}
      </div>

      {/* Circular Progress */}
      <div className="flex justify-center mb-4">
        <CircularProgress
          progress={progress}
          size={80}
          strokeWidth={8}
          color={status.color}
          showPercentage={progress > 0}
        />
      </div>

      {/* Topic Icon & Name */}
      <div className="text-center mb-2">
        <div className="text-3xl mb-2">{topic.icon}</div>
        <h3
          className="text-lg font-semibold"
          style={{ color: topic.isActive ? theme.colors.textPrimary : theme.colors.textMuted }}
        >
          {topic.name}
        </h3>
      </div>

      {/* Stats */}
      {topic.isActive && (
        <div className="space-y-2 text-sm">
          {/* XP Earned */}
          {xpEarned > 0 && (
            <div
              className="flex items-center justify-center gap-2"
              style={{ color: theme.colors.textSecondary }}
            >
              <span>⭐</span>
              <span>{xpEarned} XP earned</span>
            </div>
          )}

          {/* Last Accessed */}
          {lastAccessed && (
            <div
              className="text-center text-xs"
              style={{ color: theme.colors.textMuted }}
            >
              {getTimeAgo(lastAccessed)}
            </div>
          )}

          {/* No activity yet */}
          {!lastAccessed && progress === 0 && (
            <div
              className="text-center text-xs"
              style={{ color: theme.colors.textMuted }}
            >
              Not started
            </div>
          )}
        </div>
      )}

      {/* Coming Soon */}
      {!topic.isActive && (
        <div
          className="text-sm font-medium text-center mt-4"
          style={{ color: theme.colors.textMuted }}
        >
          Coming Soon
        </div>
      )}

      {/* Hover CTA */}
      {topic.isActive && (
        <div
          className="mt-4 py-2 text-center font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: theme.colors.brand }}
        >
          {progress > 0 ? 'Continue →' : 'Start →'}
        </div>
      )}
    </button>
  );
};
