/**
 * AchievementBadge - Individual achievement display
 *
 * Shows an earned achievement with icon, title, and XP reward.
 */

import React from 'react';
import type { Achievement } from '../../types/practice';
import { useTheme } from '../../hooks/useTheme';

interface AchievementBadgeProps {
  achievement: Achievement;
  isNew?: boolean;
  onClick?: () => void;
}

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  achievement,
  isNew = false,
  onClick,
}) => {
  const { theme } = useTheme();

  return (
    <div
      onClick={onClick}
      className="
        p-3 rounded-lg
        transition-all duration-300
        hover:scale-105
        cursor-pointer
        relative
      "
      style={{
        backgroundColor: theme.glass.background,
        border: `2px solid ${isNew ? '#FFA500' : theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
        boxShadow: isNew ? '0 0 20px #FFA50040' : 'none',
      }}
    >
      {/* New Badge Indicator */}
      {isNew && (
        <div
          className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-bold"
          style={{
            backgroundColor: '#FFA500',
            color: '#ffffff',
          }}
        >
          NEW
        </div>
      )}

      {/* Icon */}
      <div className="text-3xl mb-2 text-center">{achievement.icon}</div>

      {/* Title */}
      <div className="text-sm font-bold text-center mb-1" style={{ color: theme.colors.textPrimary }}>
        {achievement.title}
      </div>

      {/* Description */}
      <div className="text-xs text-center mb-2" style={{ color: theme.colors.textSecondary }}>
        {achievement.description}
      </div>

      {/* XP Reward */}
      <div
        className="text-xs font-semibold text-center px-2 py-1 rounded"
        style={{
          backgroundColor: '#57F28720',
          color: '#57F287',
        }}
      >
        +{achievement.xpReward} XP
      </div>

      {/* Earned Date */}
      <div className="text-[10px] text-center mt-2" style={{ color: theme.colors.textMuted }}>
        Earned {new Date(achievement.earnedAt).toLocaleDateString()}
      </div>
    </div>
  );
};
