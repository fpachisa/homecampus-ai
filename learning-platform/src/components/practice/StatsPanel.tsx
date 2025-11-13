/**
 * StatsPanel - Left sidebar with user stats and progress
 *
 * Displays XP, level, achievements, and key statistics.
 */

import React from 'react';
import type { PathProgress, DailyStreak } from '../../types/practice';
import { achievementService } from '../../services/achievementService';
import { StreakCounter } from './StreakCounter';
import { AchievementBadge } from './AchievementBadge';
import { useTheme } from '../../hooks/useTheme';

interface StatsPanelProps {
  progress: PathProgress;
  globalStreak: DailyStreak;
  onShowAchievements?: () => void;
}

export const StatsPanel: React.FC<StatsPanelProps> = ({ progress, globalStreak, onShowAchievements }) => {
  const { theme } = useTheme();

  // Calculate XP and level info (with safety checks for new fields)
  const totalXP = progress.totalXP || 0;
  const currentLevel = progress.currentLevel || 0;
  const xpProgress = achievementService.getXPProgress(totalXP);
  const accuracy = progress.totalProblemsAttempted > 0
    ? Math.round((progress.totalProblemsCorrect / progress.totalProblemsAttempted) * 100)
    : 0;

  // Format time
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  // Recent achievements (last 3) - safely handle undefined
  // Deduplicate by ID first (in case same achievement appears multiple times)
  const uniqueAchievements = progress.achievements
    ? Array.from(
        new Map(progress.achievements.map(a => [a.id, a])).values()
      )
    : [];
  const recentAchievements = uniqueAchievements.slice(-3).reverse();
  const totalTimeSpent = progress.totalTimeSpentSeconds || 0;

  return (
    <div className="h-full overflow-y-auto p-3 space-y-3">
      {/* Level and XP Card */}
      <div
        className="p-3 rounded-lg"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-xl font-bold" style={{ color: theme.colors.textPrimary }}>
              Level {currentLevel}
            </div>
            <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
              Total: {totalXP} XP
            </div>
          </div>
          <div className="text-3xl">🎓</div>
        </div>

        {/* XP Progress Bar */}
        <div className="mt-2">
          <div className="flex justify-between text-xs mb-1" style={{ color: theme.colors.textSecondary }}>
            <span>Level {currentLevel}</span>
            <span>Level {currentLevel + 1}</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: theme.colors.interactive }}>
            <div
              className="h-full transition-all duration-500"
              style={{
                width: `${Math.min(xpProgress.percentage, 100)}%`,
                backgroundColor: '#FFA500',
              }}
            />
          </div>
          <div className="text-xs text-center mt-1" style={{ color: theme.colors.textMuted }}>
            {xpProgress.current}/{xpProgress.needed} XP to next level
          </div>
        </div>
      </div>

      {/* Streak Counter (Global across all topics) */}
      <StreakCounter streak={globalStreak} />

      {/* Quick Stats */}
      <div
        className="p-3 rounded-lg space-y-2"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
        }}
      >
        <div className="text-sm font-bold mb-1" style={{ color: theme.colors.textPrimary }}>
          Quick Stats
        </div>

        {/* Problems Solved */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg">✅</span>
            <span className="text-sm" style={{ color: theme.colors.textSecondary }}>
              Problems Solved
            </span>
          </div>
          <span className="text-sm font-bold" style={{ color: theme.colors.textPrimary }}>
            {progress.totalProblemsCorrect}
          </span>
        </div>

        {/* Accuracy */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg">🎯</span>
            <span className="text-sm" style={{ color: theme.colors.textSecondary }}>
              Accuracy
            </span>
          </div>
          <span className="text-sm font-bold" style={{ color: accuracy >= 80 ? '#57F287' : theme.colors.textPrimary }}>
            {accuracy}%
          </span>
        </div>

        {/* Study Time */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg">⏱️</span>
            <span className="text-sm" style={{ color: theme.colors.textSecondary }}>
              Total Time
            </span>
          </div>
          <span className="text-sm font-bold" style={{ color: theme.colors.textPrimary }}>
            {formatTime(totalTimeSpent)}
          </span>
        </div>

        {/* Achievements Count */}
        <div
          className="flex items-center justify-between cursor-pointer transition-all hover:scale-102"
          onClick={onShowAchievements}
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg">🏅</span>
            <span className="text-sm" style={{ color: theme.colors.textSecondary }}>
              Achievements
            </span>
          </div>
          <span className="text-sm font-bold" style={{ color: theme.colors.textPrimary }}>
            {recentAchievements.length > 0 ? progress.achievements.length : 0}
          </span>
        </div>
      </div>

      {/* Recent Achievements */}
      {recentAchievements.length > 0 && (
        <div>
          <div className="text-sm font-bold mb-2 px-1" style={{ color: theme.colors.textPrimary }}>
            Recent Achievements
          </div>
          <div className="space-y-2">
            {recentAchievements.map((achievement, idx) => (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement}
                isNew={idx === 0}
                onClick={onShowAchievements}
              />
            ))}
          </div>
        </div>
      )}

      {/* Weekly Stats (if available) */}
      {progress.weeklyStats && (
        <div
          className="p-3 rounded-lg"
          style={{
            backgroundColor: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop,
          }}
        >
          <div className="text-sm font-bold mb-2" style={{ color: theme.colors.textPrimary }}>
            This Week
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span style={{ color: theme.colors.textSecondary }}>Problems:</span>
              <span style={{ color: theme.colors.textPrimary }}>{progress.weeklyStats.problemsSolved}</span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: theme.colors.textSecondary }}>Time:</span>
              <span style={{ color: theme.colors.textPrimary }}>{formatTime(progress.weeklyStats.timeSpentSeconds)}</span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: theme.colors.textSecondary }}>XP Earned:</span>
              <span style={{ color: '#57F287' }}>+{progress.weeklyStats.xpEarned}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
