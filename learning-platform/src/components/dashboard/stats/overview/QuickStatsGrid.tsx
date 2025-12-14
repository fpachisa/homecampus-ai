/**
 * Quick Stats Grid
 *
 * 4-column grid showing key metrics at a glance
 */

import React from 'react';
import { useTheme } from '../../../../hooks/useTheme';
import type { OverviewStats } from '../../../../types/studentDashboard';

interface QuickStatsGridProps {
  stats: OverviewStats;
}

export const QuickStatsGrid: React.FC<QuickStatsGridProps> = ({ stats }) => {
  const { theme } = useTheme();

  const quickStats = [
    {
      icon: '🎯',
      label: 'Accuracy',
      value: `${stats.overallAccuracy}%`,
      subtitle: 'Overall',
      color: stats.overallAccuracy >= 80 ? '#57F287' : theme.colors.textPrimary
    },
    {
      icon: '✅',
      label: 'Problems',
      value: stats.totalProblemsSolved.toLocaleString(),
      subtitle: 'Solved',
      color: theme.colors.textPrimary
    },
    {
      icon: '📚',
      label: 'Topics',
      value: `${stats.topicsStarted}`,
      subtitle: `${stats.topicsCompleted} completed`,
      color: theme.colors.textPrimary
    },
    {
      icon: '🏆',
      label: 'Badges',
      value: stats.totalAchievements.toString(),
      subtitle: 'Earned',
      color: theme.colors.textPrimary
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {quickStats.map((stat, index) => (
        <div
          key={index}
          className="glass-surface p-4 rounded-lg transition-all hover:scale-105 cursor-pointer"
          style={{
            backgroundColor: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="text-2xl">{stat.icon}</div>
          </div>
          <div className="text-sm mb-1" style={{ color: theme.colors.textSecondary }}>
            {stat.label}
          </div>
          <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>
            {stat.value}
          </div>
          <div className="text-xs" style={{ color: theme.colors.textMuted }}>
            {stat.subtitle}
          </div>
        </div>
      ))}
    </div>
  );
};
