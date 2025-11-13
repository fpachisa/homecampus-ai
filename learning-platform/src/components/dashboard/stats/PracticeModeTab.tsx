/**
 * Practice Mode Tab
 *
 * Displays Practice Mode specific statistics:
 * - Summary card
 * - Paths progress
 * - Learn vs Practice comparison
 */

import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import type { StudentDashboardData } from '../../../types/studentDashboard';

interface PracticeModeTabProps {
  data: StudentDashboardData['practiceMode'];
}

export const PracticeModeTab: React.FC<PracticeModeTabProps> = ({ data }) => {
  const { theme } = useTheme();

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <div
        className="p-6 rounded-lg"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
              Practice Mode Stats
            </h2>
            <p className="text-sm mt-1" style={{ color: theme.colors.textSecondary }}>
              Self-directed practice without hints
            </p>
          </div>
          <div className="text-4xl">🎯</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            className="p-4 rounded-lg"
            style={{ backgroundColor: theme.colors.interactive }}
          >
            <div className="text-xs mb-1" style={{ color: theme.colors.textMuted }}>
              Paths
            </div>
            <div className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
              {data.summary.pathsInProgress}
            </div>
            <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
              In progress
            </div>
          </div>

          <div
            className="p-4 rounded-lg"
            style={{ backgroundColor: theme.colors.interactive }}
          >
            <div className="text-xs mb-1" style={{ color: theme.colors.textMuted }}>
              Problems
            </div>
            <div className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
              {data.summary.totalProblemsSolved}
            </div>
            <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
              Solved
            </div>
          </div>

          <div
            className="p-4 rounded-lg"
            style={{ backgroundColor: theme.colors.interactive }}
          >
            <div className="text-xs mb-1" style={{ color: theme.colors.textMuted }}>
              Accuracy
            </div>
            <div
              className="text-2xl font-bold"
              style={{
                color: data.summary.overallAccuracy >= 80 ? '#57F287' : theme.colors.textPrimary
              }}
            >
              {data.summary.overallAccuracy}%
            </div>
            <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
              Overall
            </div>
          </div>

          <div
            className="p-4 rounded-lg"
            style={{ backgroundColor: theme.colors.interactive }}
          >
            <div className="text-xs mb-1" style={{ color: theme.colors.textMuted }}>
              Time
            </div>
            <div className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
              {formatTime(data.summary.totalTimeSeconds)}
            </div>
            <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
              Total
            </div>
          </div>
        </div>
      </div>

      {/* Learn vs Practice Comparison */}
      <div
        className="p-6 rounded-lg"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop
        }}
      >
        <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
          Learn vs Practice Performance
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Learn Mode */}
          <div
            className="p-4 rounded-lg"
            style={{ backgroundColor: theme.colors.interactive }}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold" style={{ color: theme.colors.textPrimary }}>
                Learn Mode
              </h4>
              <span className="text-2xl">📚</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span style={{ color: theme.colors.textSecondary }}>Accuracy:</span>
                <span
                  className="font-bold"
                  style={{
                    color: data.learnVsPracticeComparison.learn.accuracy >= 80 ? '#57F287' : theme.colors.textPrimary
                  }}
                >
                  {data.learnVsPracticeComparison.learn.accuracy}% ✅
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: theme.colors.textSecondary }}>Problems:</span>
                <span style={{ color: theme.colors.textPrimary }}>
                  {data.learnVsPracticeComparison.learn.problemsSolved}
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: theme.colors.textSecondary }}>Avg Time:</span>
                <span style={{ color: theme.colors.textPrimary }}>
                  {Math.round(data.learnVsPracticeComparison.learn.averageTimePerProblem)}s
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: theme.colors.textSecondary }}>Hints:</span>
                <span style={{ color: theme.colors.textPrimary }}>Yes</span>
              </div>
            </div>
          </div>

          {/* Practice Mode */}
          <div
            className="p-4 rounded-lg"
            style={{ backgroundColor: theme.colors.interactive }}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold" style={{ color: theme.colors.textPrimary }}>
                Practice Mode
              </h4>
              <span className="text-2xl">🎯</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span style={{ color: theme.colors.textSecondary }}>Accuracy:</span>
                <span
                  className="font-bold"
                  style={{
                    color: data.learnVsPracticeComparison.practice.accuracy >= 80 ? '#57F287' : theme.colors.textPrimary
                  }}
                >
                  {data.learnVsPracticeComparison.practice.accuracy}% ✅
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: theme.colors.textSecondary }}>Problems:</span>
                <span style={{ color: theme.colors.textPrimary }}>
                  {data.learnVsPracticeComparison.practice.problemsSolved}
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: theme.colors.textSecondary }}>Avg Time:</span>
                <span style={{ color: theme.colors.textPrimary }}>
                  {Math.round(data.learnVsPracticeComparison.practice.averageTimePerProblem)}s
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: theme.colors.textSecondary }}>Hints:</span>
                <span style={{ color: theme.colors.textPrimary }}>No</span>
              </div>
            </div>
          </div>
        </div>

        {/* Insight */}
        {data.learnVsPracticeComparison.insight && (
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#57F28720' }}>
            <div className="text-sm" style={{ color: theme.colors.textPrimary }}>
              💡 {data.learnVsPracticeComparison.insight}
            </div>
          </div>
        )}
      </div>

      {/* Practice Paths */}
      {data.pathsProgress.length > 0 && (
        <div
          className="p-6 rounded-lg"
          style={{
            backgroundColor: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop
          }}
        >
          <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
            Practice Paths Progress
          </h3>

          <div className="space-y-4">
            {data.pathsProgress.map(path => (
              <div
                key={path.pathId}
                className="p-4 rounded-lg"
                style={{ backgroundColor: theme.colors.interactive }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-bold" style={{ color: theme.colors.textPrimary }}>
                      {path.displayName}
                    </div>
                    <div className="text-xs mt-1" style={{ color: theme.colors.textMuted }}>
                      {path.nodesCompleted} / {path.totalNodes} nodes completed
                    </div>
                  </div>
                  <div className="text-xl font-bold" style={{ color: theme.colors.textPrimary }}>
                    {path.progressPercentage}%
                  </div>
                </div>

                {/* Progress Bar */}
                <div
                  className="h-2 rounded-full overflow-hidden mb-3"
                  style={{ backgroundColor: theme.colors.interactive }}
                >
                  <div
                    className="h-full transition-all"
                    style={{
                      width: `${path.progressPercentage}%`,
                      backgroundColor: '#00D9FF'
                    }}
                  />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div style={{ color: theme.colors.textMuted }}>Accuracy</div>
                    <div
                      className="font-bold"
                      style={{ color: path.accuracy >= 80 ? '#57F287' : theme.colors.textSecondary }}
                    >
                      {path.accuracy}%
                    </div>
                  </div>
                  <div>
                    <div style={{ color: theme.colors.textMuted }}>Time</div>
                    <div style={{ color: theme.colors.textSecondary }}>
                      {formatTime(path.timeSpentSeconds)}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: theme.colors.textMuted }}>XP Earned</div>
                    <div style={{ color: '#FFA500' }}>+{path.xpEarned}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
