/**
 * Activity Heatmap
 *
 * GitHub-style contribution graph showing 90 days of activity
 */

import React from 'react';
import { useTheme } from '../../../../hooks/useTheme';
import type { DailyActivity } from '../../../../types/studentDashboard';

interface ActivityHeatmapProps {
  activities: DailyActivity[];
  mostActiveTime?: string;
}

export const ActivityHeatmap: React.FC<ActivityHeatmapProps> = ({
  activities,
  mostActiveTime
}) => {
  const { theme } = useTheme();

  // Get color for activity level
  const getActivityColor = (level: 'none' | 'low' | 'medium' | 'high'): string => {
    const colors = {
      none: theme.colors.interactive,
      low: '#57F28733',    // Light green (20% opacity)
      medium: '#57F28766', // Medium green (40% opacity)
      high: '#57F287'      // Full green
    };
    return colors[level];
  };

  // Format date for tooltip
  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Get last 90 days
  const last90Days = activities.slice(-90);

  // Group by weeks (7 days each)
  const weeks: DailyActivity[][] = [];
  for (let i = 0; i < last90Days.length; i += 7) {
    weeks.push(last90Days.slice(i, i + 7));
  }

  // Day labels
  const dayLabels = ['Mon', 'Wed', 'Fri'];

  return (
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
          <h2 className="text-xl font-bold" style={{ color: theme.colors.textPrimary }}>
            Activity Over Last 90 Days
          </h2>
          {mostActiveTime && (
            <p className="text-sm mt-1" style={{ color: theme.colors.textSecondary }}>
              📊 Most active: {mostActiveTime}
            </p>
          )}
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-4 text-xs" style={{ color: theme.colors.textMuted }}>
          <span>Less</span>
          <div className="flex space-x-1">
            {(['none', 'low', 'medium', 'high'] as const).map(level => (
              <div
                key={level}
                className="w-3 h-3 rounded"
                style={{ backgroundColor: getActivityColor(level) }}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="overflow-x-auto">
        <div className="flex space-x-1">
          {/* Day labels column */}
          <div className="flex flex-col justify-around pr-2">
            {dayLabels.map((label, index) => (
              <div
                key={index}
                className="text-xs h-3"
                style={{ color: theme.colors.textMuted }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Weeks grid */}
          <div className="flex space-x-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col space-y-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="w-3 h-3 rounded cursor-pointer transition-all hover:scale-150"
                    style={{
                      backgroundColor: getActivityColor(day.activityLevel),
                      border: `1px solid ${theme.glass.border}`
                    }}
                    title={`${formatDate(day.date)}\n${day.problemsSolved} problems\n${Math.round(day.timeSpentSeconds / 60)}m active`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div
          className="glass-surface p-3 rounded-lg"
          style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop
          }}
        >
          <div className="text-xs mb-1" style={{ color: theme.colors.textMuted }}>
            Active Days
          </div>
          <div className="text-xl font-bold" style={{ color: theme.colors.textPrimary }}>
            {activities.filter(a => a.activityLevel !== 'none').length}
          </div>
        </div>
        <div
          className="glass-surface p-3 rounded-lg"
          style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop
          }}
        >
          <div className="text-xs mb-1" style={{ color: theme.colors.textMuted }}>
            Total Problems
          </div>
          <div className="text-xl font-bold" style={{ color: theme.colors.textPrimary }}>
            {activities.reduce((sum, a) => sum + a.problemsSolved, 0)}
          </div>
        </div>
        <div
          className="glass-surface p-3 rounded-lg"
          style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop
          }}
        >
          <div className="text-xs mb-1" style={{ color: theme.colors.textMuted }}>
            Total XP
          </div>
          <div className="text-xl font-bold" style={{ color: theme.colors.textPrimary }}>
            {activities.reduce((sum, a) => sum + a.xpEarned, 0).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};
