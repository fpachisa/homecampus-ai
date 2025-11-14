/**
 * ContinueLearningCard - Resume last accessed topic
 *
 * Shows the most recently accessed topic with:
 * - Topic name
 * - Progress bar
 * - Time since last access
 * - One-click resume button
 */

import { useTheme } from '../../hooks/useTheme';
import { useAppNavigation } from '../../hooks/useAppNavigation';

interface ContinueLearningCardProps {
  topicName: string;
  topicCategory: string;
  progress: number; // 0-100
  lastAccessed: Date;
  mode: 'learn' | 'practice';
}

export const ContinueLearningCard: React.FC<ContinueLearningCardProps> = ({
  topicName,
  topicCategory,
  progress,
  lastAccessed,
  mode,
}) => {
  const { theme } = useTheme();
  const { goToLearn, goToPractice } = useAppNavigation();

  // Format time ago
  const getTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) return `${diffMins} ${diffMins === 1 ? 'minute' : 'minutes'} ago`;
    if (diffHours < 24) return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
    if (diffDays === 1) return 'yesterday';
    return `${diffDays} days ago`;
  };

  const handleResume = () => {
    if (mode === 'learn') {
      goToLearn(topicCategory, undefined, true);
    } else {
      goToPractice(topicCategory);
    }
  };

  return (
    <div
      className="p-6 rounded-2xl"
      style={{
        background: theme.glass.background,
        border: `2px solid ${theme.colors.brand}`,
        backdropFilter: theme.glass.backdrop,
        boxShadow: theme.shadows.glow,
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">📖</span>
        <h3
          className="text-lg font-semibold"
          style={{ color: theme.colors.textPrimary }}
        >
          Continue Learning
        </h3>
      </div>

      {/* Topic Name */}
      <div
        className="text-xl font-bold mb-2"
        style={{ color: theme.colors.textPrimary }}
      >
        {topicName}
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <span
            className="text-sm font-medium"
            style={{ color: theme.colors.textSecondary }}
          >
            {Math.round(progress)}% complete
          </span>
          <span
            className="text-xs"
            style={{ color: theme.colors.textMuted }}
          >
            Last studied: {getTimeAgo(lastAccessed)}
          </span>
        </div>
        <div
          className="h-3 rounded-full overflow-hidden"
          style={{ backgroundColor: theme.colors.interactive }}
        >
          <div
            className="h-full transition-all duration-500"
            style={{
              width: `${Math.min(progress, 100)}%`,
              backgroundColor: theme.colors.brand,
            }}
          />
        </div>
      </div>

      {/* Resume Button */}
      <button
        onClick={handleResume}
        className="w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
        style={{
          backgroundColor: theme.colors.brand,
          color: '#ffffff',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = theme.shadows.md;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <span>Resume Learning</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
};
