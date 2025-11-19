/**
 * OLevelStatsPanel - Left sidebar stats for O-Level practice
 *
 * Displays paper-specific progress, accuracy, time spent, and streak
 */

import React from 'react';
import type { PathProgress, DailyStreak } from '../../types/practice';
import { StreakCounter } from './StreakCounter';
import { useTheme } from '../../hooks/useTheme';

interface OLevelStatsPanelProps {
  progress: PathProgress | null;
  globalStreak: DailyStreak;
  topicName: string;
  selectedPaper: 'paper1' | 'paper2';
}

export const OLevelStatsPanel: React.FC<OLevelStatsPanelProps> = ({
  progress,
  globalStreak,
  topicName,
  selectedPaper,
}) => {
  const { theme } = useTheme();

  // Calculate stats
  const totalAttempted = progress?.totalProblemsAttempted || 0;
  const totalCorrect = progress?.totalProblemsCorrect || 0;
  const accuracy = totalAttempted > 0
    ? Math.round((totalCorrect / totalAttempted) * 100)
    : 0;

  // Completed nodes count
  const completedNodes = progress
    ? Object.values(progress.nodes).filter(n => n.status === 'completed').length
    : 0;

  // Total nodes in current paper (from layerProgress.examPractice)
  const totalNodes = progress?.layerProgress?.examPractice?.total || 0;

  // Format time
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    if (minutes > 0) return `${minutes}m`;
    return `${seconds}s`;
  };

  const totalTimeSpent = progress?.totalTimeSpentSeconds || 0;
  const paperLabel = selectedPaper === 'paper1' ? 'Paper 1' : 'Paper 2';

  return (
    <div className="h-full overflow-y-auto p-3 space-y-3">
      {/* Topic Progress Card */}
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
            <div className="text-lg font-bold" style={{ color: theme.colors.textPrimary }}>
              {topicName}
            </div>
            <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
              {paperLabel}
            </div>
          </div>
          <div className="text-3xl">📚</div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3">
          <div className="flex justify-between text-xs mb-1" style={{ color: theme.colors.textSecondary }}>
            <span>Progress</span>
            <span>{completedNodes}/{totalNodes}</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: theme.colors.interactive }}>
            <div
              className="h-full transition-all duration-500"
              style={{
                width: `${totalNodes > 0 ? (completedNodes / totalNodes) * 100 : 0}%`,
                backgroundColor: '#EB459E', // Pink for exam practice
              }}
            />
          </div>
          <div className="text-xs text-center mt-1" style={{ color: theme.colors.textMuted }}>
            {totalNodes > 0 ? Math.round((completedNodes / totalNodes) * 100) : 0}% Complete
          </div>
        </div>
      </div>

      {/* Streak Counter (Global across all practice) */}
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
        <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
          Your Stats
        </div>

        {/* Questions Attempted */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">📝</span>
            <span className="text-xs" style={{ color: theme.colors.textSecondary }}>
              Questions Attempted
            </span>
          </div>
          <span className="text-sm font-bold" style={{ color: theme.colors.textPrimary }}>
            {totalAttempted}
          </span>
        </div>

        {/* Accuracy */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎯</span>
            <span className="text-xs" style={{ color: theme.colors.textSecondary }}>
              Accuracy
            </span>
          </div>
          <span
            className="text-sm font-bold"
            style={{
              color: accuracy >= 80 ? '#10B981' : accuracy >= 60 ? '#FFA500' : '#EF4444'
            }}
          >
            {accuracy}%
          </span>
        </div>

        {/* Time Spent */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">⏱️</span>
            <span className="text-xs" style={{ color: theme.colors.textSecondary }}>
              Time Spent
            </span>
          </div>
          <span className="text-sm font-bold" style={{ color: theme.colors.textPrimary }}>
            {formatTime(totalTimeSpent)}
          </span>
        </div>
      </div>

      {/* Exam Prep Tips */}
      <div
        className="p-3 rounded-lg"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
        }}
      >
        <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
          💡 Study Tips
        </div>
        <ul className="text-xs space-y-1.5" style={{ color: theme.colors.textSecondary }}>
          <li>• Practice regularly for best retention</li>
          <li>• Review your mistakes carefully</li>
          <li>• Try to solve without hints first</li>
          <li>• Time yourself for exam conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default OLevelStatsPanel;
