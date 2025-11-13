/**
 * Week Comparison Card
 *
 * Shows this week vs last week stats with trend indicators
 */

import React from 'react';
import { useTheme } from '../../../../hooks/useTheme';
import type { WeekComparisonStats } from '../../../../types/studentDashboard';

interface WeekComparisonCardProps {
  comparison: WeekComparisonStats;
}

export const WeekComparisonCard: React.FC<WeekComparisonCardProps> = ({ comparison }) => {
  const { theme } = useTheme();

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  const getTrendColor = (trend: number): string => {
    if (trend > 0) return '#57F287'; // Green for positive
    if (trend < 0) return '#FF6B6B'; // Red for negative
    return theme.colors.textMuted;   // Gray for neutral
  };

  const getTrendIcon = (trend: number): string => {
    if (trend > 0) return '↑';
    if (trend < 0) return '↓';
    return '→';
  };

  const stats = [
    {
      label: 'Problems Solved',
      thisWeek: comparison.thisWeek.problemsSolved,
      lastWeek: comparison.lastWeek.problemsSolved,
      trend: comparison.trends.problemsTrend
    },
    {
      label: 'Time Active',
      thisWeek: formatTime(comparison.thisWeek.timeSpentSeconds),
      lastWeek: formatTime(comparison.lastWeek.timeSpentSeconds),
      trend: comparison.trends.timeTrend
    },
    {
      label: 'Accuracy',
      thisWeek: `${comparison.thisWeek.accuracy}%`,
      lastWeek: `${comparison.lastWeek.accuracy}%`,
      trend: comparison.trends.accuracyTrend
    },
    {
      label: 'XP Earned',
      thisWeek: `${comparison.thisWeek.xpEarned} XP`,
      lastWeek: `${comparison.lastWeek.xpEarned} XP`,
      trend: comparison.trends.xpTrend
    }
  ];

  return (
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
          <h2 className="text-xl font-bold" style={{ color: theme.colors.textPrimary }}>
            This Week vs Last Week
          </h2>
          <p className="text-sm mt-1" style={{ color: theme.colors.textSecondary }}>
            Track your weekly progress
          </p>
        </div>
        <div className="text-3xl">📊</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-4 rounded-lg"
            style={{ backgroundColor: theme.colors.interactive }}
          >
            <div className="text-xs mb-2" style={{ color: theme.colors.textMuted }}>
              {stat.label}
            </div>

            {/* This Week */}
            <div className="mb-2">
              <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
                This Week
              </div>
              <div className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
                {stat.thisWeek}
              </div>
            </div>

            {/* Last Week */}
            <div className="mb-2">
              <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
                Last Week
              </div>
              <div className="text-sm" style={{ color: theme.colors.textMuted }}>
                {stat.lastWeek}
              </div>
            </div>

            {/* Trend */}
            <div
              className="flex items-center space-x-1 text-sm font-bold"
              style={{ color: getTrendColor(stat.trend) }}
            >
              <span>{getTrendIcon(stat.trend)}</span>
              <span>{Math.abs(stat.trend)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
