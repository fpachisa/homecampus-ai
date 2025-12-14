/**
 * Topics Table
 *
 * Table view of all topics with status, progress, accuracy, and time spent
 */

import React from 'react';
import { useTheme } from '../../../../hooks/useTheme';
import type { TopicOverviewRow } from '../../../../types/studentDashboard';

interface TopicsTableProps {
  topics: TopicOverviewRow[];
}

export const TopicsTable: React.FC<TopicsTableProps> = ({ topics }) => {
  const { theme } = useTheme();

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'active':
        return '#57F287';
      case 'paused':
        return '#FFD700';
      case 'completed':
        return '#00D9FF';
      case 'locked':
        return theme.colors.textMuted;
      default:
        return theme.colors.textSecondary;
    }
  };

  const getStatusIcon = (status: string): string => {
    switch (status) {
      case 'active':
        return '🔄';
      case 'paused':
        return '⏸️';
      case 'completed':
        return '✅';
      case 'locked':
        return '🔒';
      default:
        return '📚';
    }
  };

  const getAccuracyColor = (accuracy: number): string => {
    if (accuracy >= 80) return '#57F287';
    if (accuracy >= 60) return '#FFD700';
    return '#FF6B6B';
  };

  if (topics.length === 0) {
    return (
      <div
        className="glass-surface p-12 rounded-lg text-center"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop
        }}
      >
        <div className="text-4xl mb-4">📚</div>
        <div className="text-lg mb-2" style={{ color: theme.colors.textPrimary }}>
          No Topics Yet
        </div>
        <div className="text-sm" style={{ color: theme.colors.textSecondary }}>
          Start learning to see your progress here!
        </div>
      </div>
    );
  }

  return (
    <div
      className="glass-surface p-6 rounded-lg overflow-hidden"
      style={{
        backgroundColor: theme.glass.background,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop
      }}
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold" style={{ color: theme.colors.textPrimary }}>
          Topics Breakdown
        </h2>
        <p className="text-sm mt-1" style={{ color: theme.colors.textSecondary }}>
          All topics you've worked on
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: `1px solid ${theme.glass.border}` }}>
              <th
                className="text-left py-3 px-4 text-sm font-medium"
                style={{ color: theme.colors.textSecondary }}
              >
                Topic
              </th>
              <th
                className="text-left py-3 px-4 text-sm font-medium"
                style={{ color: theme.colors.textSecondary }}
              >
                Status
              </th>
              <th
                className="text-left py-3 px-4 text-sm font-medium"
                style={{ color: theme.colors.textSecondary }}
              >
                Progress
              </th>
              <th
                className="text-left py-3 px-4 text-sm font-medium"
                style={{ color: theme.colors.textSecondary }}
              >
                Accuracy
              </th>
              <th
                className="text-left py-3 px-4 text-sm font-medium"
                style={{ color: theme.colors.textSecondary }}
              >
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {topics.map((topic, index) => (
              <tr
                key={topic.topicId}
                className="transition-all hover:bg-opacity-50"
                style={{
                  borderBottom: index < topics.length - 1 ? `1px solid ${theme.glass.border}` : 'none',
                  backgroundColor: 'transparent'
                }}
              >
                <td className="py-3 px-4">
                  <div>
                    <div className="font-medium" style={{ color: theme.colors.textPrimary }}>
                      {topic.displayName}
                    </div>
                    {topic.lastActive && (
                      <div className="text-xs mt-1" style={{ color: theme.colors.textMuted }}>
                        Last active: {new Date(topic.lastActive).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <span>{getStatusIcon(topic.status)}</span>
                    <span
                      className="text-sm font-medium capitalize"
                      style={{ color: getStatusColor(topic.status) }}
                    >
                      {topic.status}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="flex-1 h-2 rounded-full overflow-hidden"
                      style={{ backgroundColor: theme.colors.interactive, maxWidth: '100px' }}
                    >
                      <div
                        className="h-full transition-all"
                        style={{
                          width: `${Math.round((topic.problemsSolved / topic.totalProblems) * 100)}%`,
                          backgroundColor: '#00D9FF'
                        }}
                      />
                    </div>
                    <span className="text-sm" style={{ color: theme.colors.textSecondary }}>
                      {topic.problemsSolved}/{topic.totalProblems}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span
                    className="text-sm font-bold"
                    style={{ color: getAccuracyColor(topic.accuracy) }}
                  >
                    {topic.accuracy}%
                    {topic.accuracy >= 80 && ' ✅'}
                    {topic.accuracy < 60 && ' ⚠️'}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm" style={{ color: theme.colors.textSecondary }}>
                    {formatTime(topic.timeSpentSeconds)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
