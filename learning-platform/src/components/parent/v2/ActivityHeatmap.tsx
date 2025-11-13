/**
 * ActivityHeatmap Component
 *
 * GitHub-style contribution calendar showing child's daily learning activity.
 * Displays last 30 days with color intensity based on problems solved.
 */

import React, { useState } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import type { HeatmapDay } from '../../../services/analytics/parentAnalyticsService';

interface ActivityHeatmapProps {
  data: HeatmapDay[];
}

export const ActivityHeatmap: React.FC<ActivityHeatmapProps> = ({ data }) => {
  const { theme } = useTheme();
  const [hoveredDay, setHoveredDay] = useState<HeatmapDay | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const getIntensityColor = (intensity: 'none' | 'light' | 'medium' | 'high'): string => {
    const brandColor = theme.colors.brand;
    switch (intensity) {
      case 'none':
        return `${theme.colors.textMuted}20`;
      case 'light':
        return `${brandColor}40`;
      case 'medium':
        return `${brandColor}70`;
      case 'high':
        return brandColor;
      default:
        return `${theme.colors.textMuted}20`;
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Group days by week
  const weeks: HeatmapDay[][] = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  // Days of week labels
  const daysOfWeek = ['Mon', 'Wed', 'Fri'];

  return (
    <div
      className="p-6 rounded-2xl"
      style={{
        background: theme.glass.background,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
        boxShadow: theme.shadows.md,
      }}
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-1" style={{ color: theme.colors.textPrimary }}>
          Learning Activity
        </h3>
        <p className="text-sm" style={{ color: theme.colors.textMuted }}>
          Last 30 days
        </p>
      </div>

      {/* Heatmap */}
      <div className="relative">
        {/* Day labels */}
        <div className="flex mb-2">
          <div className="w-8" />
          {daysOfWeek.map((day, idx) => (
            <div
              key={idx}
              className="text-xs"
              style={{
                color: theme.colors.textMuted,
                width: `${100 / 7}%`,
                textAlign: 'center',
              }}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Heatmap grid */}
        <div className="flex gap-1">
          {weeks.map((week, weekIdx) => (
            <div key={weekIdx} className="flex flex-col gap-1">
              {week.map((day) => {
                const isToday = day.date === new Date().toISOString().split('T')[0];
                return (
                  <div
                    key={day.date}
                    className="w-4 h-4 rounded-sm cursor-pointer transition-all duration-150 hover:scale-110"
                    style={{
                      backgroundColor: getIntensityColor(day.intensity),
                      border: isToday ? `2px solid ${theme.colors.brand}` : 'none',
                    }}
                    onMouseEnter={(e) => {
                      setHoveredDay(day);
                      const rect = e.currentTarget.getBoundingClientRect();
                      setTooltipPosition({ x: rect.left, y: rect.top });
                    }}
                    onMouseLeave={() => setHoveredDay(null)}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-xs" style={{ color: theme.colors.textMuted }}>
            Less
          </span>
          {(['none', 'light', 'medium', 'high'] as const).map((intensity) => (
            <div
              key={intensity}
              className="w-4 h-4 rounded-sm"
              style={{ backgroundColor: getIntensityColor(intensity) }}
            />
          ))}
          <span className="text-xs" style={{ color: theme.colors.textMuted }}>
            More
          </span>
        </div>

        {/* Tooltip */}
        {hoveredDay && (
          <div
            className="fixed z-50 px-3 py-2 rounded-lg shadow-lg pointer-events-none"
            style={{
              background: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y - 80}px`,
              transform: 'translateX(-50%)',
            }}
          >
            <p className="text-sm font-semibold mb-1" style={{ color: theme.colors.textPrimary }}>
              {formatDate(hoveredDay.date)}
            </p>
            <div className="text-xs space-y-1" style={{ color: theme.colors.textSecondary }}>
              <p>
                {hoveredDay.problemsSolved} problem{hoveredDay.problemsSolved !== 1 ? 's' : ''}
              </p>
              {hoveredDay.timeSpent > 0 && <p>{formatTime(hoveredDay.timeSpent)}</p>}
              {hoveredDay.xpEarned > 0 && <p>{hoveredDay.xpEarned} XP</p>}
              {hoveredDay.problemsSolved === 0 && <p>No activity</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
