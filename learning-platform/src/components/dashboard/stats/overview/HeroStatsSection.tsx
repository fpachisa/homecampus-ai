/**
 * Hero Stats Section
 *
 * Displays the top 3 key metrics in large cards:
 * - Level & XP (with progress bar)
 * - Current Streak
 * - Total Time Spent
 */

import React from 'react';
import { useTheme } from '../../../../hooks/useTheme';
import type { OverviewStats } from '../../../../types/studentDashboard';

interface HeroStatsSectionProps {
  stats: OverviewStats;
}

export const HeroStatsSection: React.FC<HeroStatsSectionProps> = ({ stats }) => {
  const { theme } = useTheme();

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Level & XP */}
      <div
        className="p-6 rounded-lg"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm mb-1" style={{ color: theme.colors.textSecondary }}>
              Level & XP
            </div>
            <div className="text-4xl font-bold" style={{ color: theme.colors.textPrimary }}>
              Level {stats.currentLevel}
            </div>
            <div className="text-sm mt-1" style={{ color: theme.colors.textMuted }}>
              Total: {stats.totalXP.toLocaleString()} XP
            </div>
          </div>
          <div className="text-5xl">🎓</div>
        </div>

        {/* XP Progress Bar */}
        <div className="mt-4">
          <div
            className="flex justify-between text-xs mb-2"
            style={{ color: theme.colors.textSecondary }}
          >
            <span>Level {stats.currentLevel}</span>
            <span>Level {stats.currentLevel + 1}</span>
          </div>
          <div
            className="h-3 rounded-full overflow-hidden"
            style={{ backgroundColor: theme.colors.interactive }}
          >
            <div
              className="h-full transition-all duration-500"
              style={{
                width: `${Math.min(stats.xpProgress.percentage, 100)}%`,
                backgroundColor: '#FFA500'
              }}
            />
          </div>
          <div
            className="text-xs mt-2 text-center"
            style={{ color: theme.colors.textMuted }}
          >
            {stats.xpProgress.current} / {stats.xpProgress.needed} XP
          </div>
        </div>
      </div>

      {/* Current Streak */}
      <div
        className="p-6 rounded-lg"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm mb-1" style={{ color: theme.colors.textSecondary }}>
              Current Streak
            </div>
            <div className="text-4xl font-bold" style={{ color: theme.colors.textPrimary }}>
              {stats.currentStreak} {stats.currentStreak === 1 ? 'Day' : 'Days'}
            </div>
            <div className="text-sm mt-1" style={{ color: theme.colors.textMuted }}>
              {stats.currentStreak > 0 ? 'Keep it going!' : 'Start your streak today!'}
            </div>
          </div>
          <div className="text-5xl">🔥</div>
        </div>

        {/* Longest Streak */}
        <div
          className="glass-surface mt-4 p-3 rounded-lg"
          style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop
          }}
        >
          <div className="text-xs mb-1" style={{ color: theme.colors.textMuted }}>
            Longest Streak
          </div>
          <div className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
            {stats.longestStreak} {stats.longestStreak === 1 ? 'Day' : 'Days'}
          </div>
        </div>
      </div>

      {/* Total Time */}
      <div
        className="p-6 rounded-lg"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm mb-1" style={{ color: theme.colors.textSecondary }}>
              Total Time
            </div>
            <div className="text-4xl font-bold" style={{ color: theme.colors.textPrimary }}>
              {formatTime(stats.totalTimeSeconds)}
            </div>
            <div className="text-sm mt-1" style={{ color: theme.colors.textMuted }}>
              All learning modes
            </div>
          </div>
          <div className="text-5xl">⏱️</div>
        </div>

        {/* Additional Stats */}
        <div
          className="glass-surface mt-4 p-3 rounded-lg"
          style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop
          }}
        >
          <div className="flex justify-between items-center">
            <div>
              <div className="text-xs" style={{ color: theme.colors.textMuted }}>
                Problems Solved
              </div>
              <div className="text-lg font-bold" style={{ color: theme.colors.textPrimary }}>
                {stats.totalProblemsSolved.toLocaleString()}
              </div>
            </div>
            <div className="text-2xl">✅</div>
          </div>
        </div>
      </div>
    </div>
  );
};
