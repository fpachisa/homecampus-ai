/**
 * ImprovedTopicCard - Topic card for students with progress
 *
 * Features:
 * - Large icon + title + description
 * - Status dot (top-right):
 *   - Orange dot: NEW/unstarted topics (progress = 0)
 *   - Green dot: In Progress (0 < progress < 100) or Mastered (progress >= 100)
 * - Progress bar for topics with progress > 0
 * - Footer: Subtopic count + hover "Start Learning →" for NEW topics
 * - Footer: Last accessed time for topics with progress
 */

import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import type { Topic } from '../../config/topicsByGrade';

interface ImprovedTopicCardProps {
  topic: Topic;
  progress?: number; // 0-100, undefined if never started
  xpEarned?: number;
  lastAccessed?: Date;
  mode?: 'learn' | 'practice'; // Which mode to navigate to on click
}

export const ImprovedTopicCard: React.FC<ImprovedTopicCardProps> = ({
  topic,
  progress = 0,
  xpEarned = 0,
  lastAccessed,
  mode = 'learn',
}) => {
  const { theme } = useTheme();
  const { goToLearn, goToPractice } = useAppNavigation();
  const [isHovered, setIsHovered] = useState(false);

  // Determine status
  const getStatus = (): { label: string; color: string } => {
    if (progress === 0) {
      return { label: 'New', color: '#FFA500' }; // Orange for NEW
    } else if (progress >= 100) {
      return { label: 'Mastered', color: theme.colors.success }; // Green for mastered
    } else {
      return { label: 'In Progress', color: theme.colors.success }; // Green for in-progress
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
    return 'Never';
  };

  const handleClick = () => {
    if (!topic.category || !topic.isActive) return;

    if (mode === 'practice') {
      goToPractice(topic.category);
    } else {
      goToLearn(topic.category, undefined, true);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={!topic.isActive}
      className="group relative p-4 sm:p-5 md:p-6 rounded-2xl transition-all duration-300 text-left w-full"
      style={{
        background: topic.isActive ? theme.glass.background : theme.colors.interactive,
        border: `1px solid ${topic.isActive ? theme.glass.border : theme.colors.border}`,
        backdropFilter: topic.isActive ? theme.glass.backdrop : 'none',
        opacity: topic.isActive ? 1 : 0.5,
        boxShadow: theme.shadows.md,
        cursor: topic.isActive ? 'pointer' : 'not-allowed',
      }}
      onMouseEnter={(e) => {
        if (topic.isActive) {
          setIsHovered(true);
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = theme.shadows.glow;
        }
      }}
      onMouseLeave={(e) => {
        if (topic.isActive) {
          setIsHovered(false);
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = theme.shadows.md;
        }
      }}
    >
      {/* Status Dot (top-right) - Orange for NEW, Green for In Progress/Mastered */}
      {topic.isActive && (
        <div
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-2 h-2 rounded-full"
          style={{ backgroundColor: status.color }}
        />
      )}

      {/* Icon */}
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4"
        style={{
          backgroundColor: topic.isActive ? theme.colors.brand : theme.colors.interactive,
          color: topic.isActive ? '#ffffff' : theme.colors.textMuted,
        }}
      >
        {topic.icon}
      </div>

      {/* Title */}
      <h3
        className="text-lg font-semibold mb-2"
        style={{ color: topic.isActive ? theme.colors.textPrimary : theme.colors.textMuted }}
      >
        {topic.name}
      </h3>

      {/* Description */}
      <p
        className="text-sm mb-4 line-clamp-2 min-h-[40px]"
        style={{ color: topic.isActive ? theme.colors.textSecondary : theme.colors.textMuted }}
      >
        {topic.description}
      </p>

      {/* Progress Bar (if started) */}
      {topic.isActive && progress > 0 && (
        <div className="mb-3">
          <div
            className="flex justify-between text-xs mb-1"
            style={{ color: theme.colors.textMuted }}
          >
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div
            className="h-2 rounded-full overflow-hidden"
            style={{ backgroundColor: theme.colors.interactive }}
          >
            <div
              className="h-full transition-all duration-500"
              style={{
                width: `${Math.min(progress, 100)}%`,
                backgroundColor: status.color,
              }}
            />
          </div>
        </div>
      )}

      {/* Stats Footer */}
      {topic.isActive && (
        <div
          className="pt-3 border-t flex items-center justify-between text-sm transition-all duration-200"
          style={{ borderColor: theme.colors.border }}
        >
          {/* Left: Subtopics or XP earned */}
          <div style={{ color: theme.colors.textMuted }}>
            {xpEarned > 0 ? (
              <span className="text-xs">⭐ {xpEarned} XP earned</span>
            ) : (
              <span className="text-xs">{topic.subtopicCount} subtopics</span>
            )}
          </div>

          {/* Right: Show different content based on progress */}
          {progress === 0 ? (
            // NEW topics: Show "Start Learning/Practice →" on hover only
            <span
              className="font-medium transition-all duration-200"
              style={{
                color: isHovered ? theme.colors.brand : theme.colors.textMuted,
                opacity: isHovered ? 1 : 0,
              }}
            >
              {mode === 'practice' ? 'Start Practice →' : 'Start Learning →'}
            </span>
          ) : (
            // Topics with progress: Show last accessed time
            <div
              className="font-medium text-xs"
              style={{ color: theme.colors.brand }}
            >
              {lastAccessed ? getTimeAgo(lastAccessed) : 'Recently started'}
            </div>
          )}
        </div>
      )}

      {/* Coming Soon */}
      {!topic.isActive && (
        <div
          className="text-sm font-medium mt-4"
          style={{ color: theme.colors.textMuted }}
        >
          Coming Soon
        </div>
      )}
    </button>
  );
};
