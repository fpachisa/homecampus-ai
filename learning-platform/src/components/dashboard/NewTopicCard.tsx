/**
 * NewTopicCard - Topic card for new students
 *
 * Simple, clean design:
 * - "NEW" badge
 * - Icon, title, and description
 * - Entire card is clickable to start learning
 */

import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import type { Topic } from '../../config/topicsByGrade';

interface NewTopicCardProps {
  topic: Topic;
  disabled?: boolean;
}

export const NewTopicCard: React.FC<NewTopicCardProps> = ({ topic, disabled = false }) => {
  const { theme } = useTheme();
  const { goToLearn } = useAppNavigation();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (disabled || !topic.category) return;
    // Default to Learn mode for new students
    goToLearn(topic.category, undefined, true);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="group relative p-4 sm:p-5 md:p-6 rounded-2xl transition-all duration-300 text-left w-full"
      style={{
        background: disabled ? theme.colors.interactive : theme.glass.background,
        border: `1px solid ${disabled ? theme.colors.border : theme.glass.border}`,
        backdropFilter: disabled ? 'none' : theme.glass.backdrop,
        opacity: disabled ? 0.5 : 1,
        boxShadow: theme.shadows.md,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          setIsHovered(true);
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = theme.shadows.glow;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          setIsHovered(false);
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = theme.shadows.md;
        }
      }}
    >
      {/* NEW Badge */}
      {!disabled && (
        <div
          className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-1 rounded-full text-xs font-bold"
          style={{
            backgroundColor: theme.colors.brand,
            color: '#ffffff',
          }}
        >
          NEW
        </div>
      )}

      {/* Icon */}
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4"
        style={{
          backgroundColor: disabled ? theme.colors.interactive : theme.colors.brand,
          color: disabled ? theme.colors.textMuted : '#ffffff',
        }}
      >
        {topic.icon}
      </div>

      {/* Title */}
      <h3
        className="text-lg font-semibold mb-2"
        style={{ color: disabled ? theme.colors.textMuted : theme.colors.textPrimary }}
      >
        {topic.name}
      </h3>

      {/* Description */}
      <p
        className="text-sm mb-4 line-clamp-2 min-h-[40px]"
        style={{ color: disabled ? theme.colors.textMuted : theme.colors.textSecondary }}
      >
        {topic.description}
      </p>

      {/* Footer - Shows subtopics by default, "Start Learning" on hover */}
      {!disabled && (
        <div
          className="pt-3 border-t flex items-center justify-between text-sm transition-all duration-200"
          style={{ borderColor: theme.colors.border }}
        >
          <span style={{ color: theme.colors.textMuted }}>
            {topic.subtopicCount} subtopics
          </span>
          <span
            className="font-medium transition-all duration-200"
            style={{
              color: isHovered ? theme.colors.brand : theme.colors.textMuted,
              opacity: isHovered ? 1 : 0,
            }}
          >
            Start Learning →
          </span>
        </div>
      )}

      {/* Coming Soon (only for disabled topics) */}
      {disabled && (
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
