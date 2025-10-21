/**
 * LeaderboardPanel - Right sidebar with goals and suggestions
 *
 * Shows daily goals, suggested next nodes, and future leaderboard (when multiplayer is added).
 */

import React from 'react';
import type { PathProgress, PathNode } from '../../types/practice';
import { useTheme } from '../../hooks/useTheme';

interface LeaderboardPanelProps {
  progress: PathProgress;
  allNodes: PathNode[];
}

export const LeaderboardPanel: React.FC<LeaderboardPanelProps> = ({ progress, allNodes }) => {
  const { theme } = useTheme();

  // Layer color scheme (matching CircularPathNode)
  const layerColors = {
    foundation: '#FFA500',
    integration: '#5865F2',
    application: '#10B981',
    examPractice: '#EB459E',
  };

  // Daily goal (5 problems) - safely handle undefined sessionHistory
  const dailyGoalTarget = 5;
  const todayProblems = progress.sessionHistory && progress.sessionHistory.length > 0
    ? progress.sessionHistory[progress.sessionHistory.length - 1].problemsSolved
    : 0;
  const dailyGoalProgress = Math.min((todayProblems / dailyGoalTarget) * 100, 100);

  // Find suggested next node (incomplete nodes with prerequisites met)
  const suggestedNodes = allNodes
    .filter(node => {
      const nodeProgress = progress.nodes[node.id];
      if (!nodeProgress || nodeProgress.status === 'locked') return false;
      if (nodeProgress.status === 'completed') return false;
      return true;
    })
    .slice(0, 3);

  return (
    <div className="h-full overflow-y-auto p-4 space-y-4">
      {/* Daily Goal */}
      <div
        className="p-4 rounded-lg"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-lg font-bold" style={{ color: theme.colors.textPrimary }}>
              Daily Goal
            </div>
            <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
              {todayProblems}/{dailyGoalTarget} problems
            </div>
          </div>
          <div className="text-3xl">{dailyGoalProgress >= 100 ? '🎉' : '🎯'}</div>
        </div>

        {/* Progress Bar */}
        <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: theme.colors.interactive }}>
          <div
            className="h-full transition-all duration-500"
            style={{
              width: `${dailyGoalProgress}%`,
              backgroundColor: '#FFA500',
            }}
          />
        </div>

        {dailyGoalProgress >= 100 && (
          <div className="mt-2 text-xs text-center font-semibold" style={{ color: '#FFA500' }}>
            Goal Complete! Keep going!
          </div>
        )}
      </div>

      {/* Suggested Next Nodes */}
      {suggestedNodes.length > 0 && (
        <div
          className="p-4 rounded-lg"
          style={{
            backgroundColor: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop,
          }}
        >
          <div className="text-sm font-bold mb-3" style={{ color: theme.colors.textPrimary }}>
            Recommended Next
          </div>

          <div className="space-y-2">
            {suggestedNodes.map(node => {
              const nodeProgress = progress.nodes[node.id];
              const progressPercent = nodeProgress
                ? Math.round((nodeProgress.problemsAttempted / node.problemsRequired) * 100)
                : 0;

              return (
                <div
                  key={node.id}
                  className="p-2 rounded-lg transition-all hover:scale-102 cursor-pointer"
                  style={{
                    backgroundColor: theme.colors.interactive,
                    border: `1px solid ${theme.colors.border}`,
                  }}
                >
                  <div className="text-xs font-semibold mb-1" style={{ color: theme.colors.textPrimary }}>
                    {node.title}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: theme.colors.background }}>
                      <div
                        className="h-full transition-all"
                        style={{
                          width: `${progressPercent}%`,
                          backgroundColor: layerColors[node.layer] || layerColors.foundation,
                        }}
                      />
                    </div>
                    <span className="text-[10px]" style={{ color: theme.colors.textMuted }}>
                      {nodeProgress?.problemsAttempted || 0}/{node.problemsRequired}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Personal Bests */}
      <div
        className="p-4 rounded-lg"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
        }}
      >
        <div className="text-sm font-bold mb-3" style={{ color: theme.colors.textPrimary }}>
          Personal Bests
        </div>

        <div className="space-y-2">
          {/* Best Streak */}
          <div className="flex items-center justify-between p-2 rounded" style={{ backgroundColor: theme.colors.interactive }}>
            <div className="flex items-center space-x-2">
              <span className="text-lg">🔥</span>
              <span className="text-xs" style={{ color: theme.colors.textSecondary }}>Best Streak</span>
            </div>
            <span className="text-xs font-bold" style={{ color: theme.colors.textPrimary }}>
              {progress.streak ? progress.streak.longestStreak : 0} days
            </span>
          </div>

          {/* Total XP */}
          <div className="flex items-center justify-between p-2 rounded" style={{ backgroundColor: theme.colors.interactive }}>
            <div className="flex items-center space-x-2">
              <span className="text-lg">⭐</span>
              <span className="text-xs" style={{ color: theme.colors.textSecondary }}>Total XP</span>
            </div>
            <span className="text-xs font-bold" style={{ color: '#57F287' }}>
              {progress.totalXP || 0}
            </span>
          </div>

          {/* Achievements */}
          <div className="flex items-center justify-between p-2 rounded" style={{ backgroundColor: theme.colors.interactive }}>
            <div className="flex items-center space-x-2">
              <span className="text-lg">🏅</span>
              <span className="text-xs" style={{ color: theme.colors.textSecondary }}>Achievements</span>
            </div>
            <span className="text-xs font-bold" style={{ color: theme.colors.textPrimary }}>
              {progress.achievements ? progress.achievements.length : 0}
            </span>
          </div>
        </div>
      </div>

      {/* Future: Leaderboard Placeholder */}
      <div
        className="p-4 rounded-lg text-center"
        style={{
          backgroundColor: theme.colors.interactive,
          border: `1px dashed ${theme.colors.border}`,
        }}
      >
        <div className="text-2xl mb-2">🏆</div>
        <div className="text-xs font-semibold mb-1" style={{ color: theme.colors.textSecondary }}>
          Leaderboard Coming Soon
        </div>
        <div className="text-[10px]" style={{ color: theme.colors.textMuted }}>
          Compete with friends and classmates
        </div>
      </div>
    </div>
  );
};
