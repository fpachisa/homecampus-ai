/**
 * Learn Mode Tab
 *
 * Displays Learn Mode specific statistics:
 * - Summary card
 * - Topics breakdown
 * - Hints analysis
 * - Mastery timeline
 */

import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import type { StudentDashboardData } from '../../../types/studentDashboard';

interface LearnModeTabProps {
  data: StudentDashboardData['learnMode'];
}

export const LearnModeTab: React.FC<LearnModeTabProps> = ({ data }) => {
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
        className="glass-surface p-6 rounded-lg"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
              Learn Mode Stats
            </h2>
            <p className="text-sm mt-1" style={{ color: theme.colors.textSecondary }}>
              Guided learning with Socratic hints and solutions
            </p>
          </div>
          <div className="text-4xl">📚</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div
            className="glass-surface p-4 rounded-lg"
            style={{
              background: theme.glass.background,
              border: `1px solid ${theme.glass.border}`,
              backdropFilter: theme.glass.backdrop
            }}
          >
            <div className="text-xs mb-1" style={{ color: theme.colors.textMuted }}>
              Topics
            </div>
            <div className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
              {data.summary.topicsInProgress}
            </div>
            <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
              In progress
            </div>
          </div>

          <div
            className="glass-surface p-4 rounded-lg"
            style={{
              background: theme.glass.background,
              border: `1px solid ${theme.glass.border}`,
              backdropFilter: theme.glass.backdrop
            }}
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
            className="glass-surface p-4 rounded-lg"
            style={{
              background: theme.glass.background,
              border: `1px solid ${theme.glass.border}`,
              backdropFilter: theme.glass.backdrop
            }}
          >
            <div className="text-xs mb-1" style={{ color: theme.colors.textMuted }}>
              Hints
            </div>
            <div className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
              {data.summary.totalHintsUsed}
            </div>
            <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
              {data.summary.averageHintsPerProblem.toFixed(2)}/problem
            </div>
          </div>

          <div
            className="glass-surface p-4 rounded-lg"
            style={{
              background: theme.glass.background,
              border: `1px solid ${theme.glass.border}`,
              backdropFilter: theme.glass.backdrop
            }}
          >
            <div className="text-xs mb-1" style={{ color: theme.colors.textMuted }}>
              Solutions
            </div>
            <div className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
              {data.summary.solutionsViewed}
            </div>
            <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
              Viewed
            </div>
          </div>

          <div
            className="glass-surface p-4 rounded-lg"
            style={{
              background: theme.glass.background,
              border: `1px solid ${theme.glass.border}`,
              backdropFilter: theme.glass.backdrop
            }}
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

      {/* Hints Analysis */}
      {data.hintsAnalysis.byTopic.length > 0 && (
        <div
          className="glass-surface p-6 rounded-lg"
          style={{
            backgroundColor: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop
          }}
        >
          <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
            Hints & Solutions Usage
          </h3>

          <div className="space-y-4">
            {data.hintsAnalysis.byTopic.map(topic => {
              const insightColor =
                topic.insight === 'excellent'
                  ? '#57F287'
                  : topic.insight === 'good'
                  ? '#FFD700'
                  : '#FF6B6B';
              const insightText =
                topic.insight === 'excellent'
                  ? '✅ Excellent!'
                  : topic.insight === 'good'
                  ? '✅ Good'
                  : '⚠️ Consider review';

              return (
                <div
                  key={topic.topicId}
                  className="glass-surface p-4 rounded-lg"
                  style={{
                    background: theme.glass.background,
                    border: `1px solid ${theme.glass.border}`,
                    backdropFilter: theme.glass.backdrop
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium" style={{ color: theme.colors.textPrimary }}>
                      {topic.displayName}
                    </div>
                    <div className="text-sm font-bold" style={{ color: insightColor }}>
                      {insightText}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div style={{ color: theme.colors.textMuted }}>Hints Used</div>
                      <div style={{ color: theme.colors.textSecondary }}>{topic.hintsUsed}</div>
                    </div>
                    <div>
                      <div style={{ color: theme.colors.textMuted }}>Problems</div>
                      <div style={{ color: theme.colors.textSecondary }}>{topic.problemsSolved}</div>
                    </div>
                    <div>
                      <div style={{ color: theme.colors.textMuted }}>Average</div>
                      <div style={{ color: theme.colors.textSecondary }}>
                        {topic.averageHintsPerProblem.toFixed(2)}/problem
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {data.hintsAnalysis.bestTopic && (
            <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: '#57F28720' }}>
              <div className="text-sm font-bold mb-1" style={{ color: '#57F287' }}>
                💡 Best Topic: {data.hintsAnalysis.bestTopic.displayName}
              </div>
              <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
                Only {data.hintsAnalysis.bestTopic.averageHints.toFixed(2)} hints per problem - great work!
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mastery Timeline */}
      {data.masteryTimeline.length > 0 && (
        <div
          className="glass-surface p-6 rounded-lg"
          style={{
            backgroundColor: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop
          }}
        >
          <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
            Section Mastery Timeline
          </h3>

          <div className="space-y-3">
            {data.masteryTimeline.slice(0, 10).map((event, index) => (
              <div
                key={index}
                className="glass-surface flex items-start space-x-3 p-3 rounded-lg"
                style={{
                  background: theme.glass.background,
                  border: `1px solid ${theme.glass.border}`,
                  backdropFilter: theme.glass.backdrop
                }}
              >
                <div className="text-2xl">✅</div>
                <div className="flex-1">
                  <div className="font-medium" style={{ color: theme.colors.textPrimary }}>
                    {event.topicDisplayName} - {event.sectionName}
                  </div>
                  <div className="text-xs mt-1" style={{ color: theme.colors.textMuted }}>
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
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
