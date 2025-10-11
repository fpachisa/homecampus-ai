/**
 * StreakCounter - Daily streak tracker with calendar heatmap
 *
 * Displays current streak, longest streak, and a visual calendar heatmap
 * to encourage daily practice.
 */

import React from 'react';
import type { DailyStreak } from '../../types/practice';
import { streakService } from '../../services/streakService';
import { useTheme } from '../../hooks/useTheme';

interface StreakCounterProps {
  streak: DailyStreak;
}

export const StreakCounter: React.FC<StreakCounterProps> = ({ streak }) => {
  const { theme } = useTheme();
  const status = streakService.getStreakStatus(streak);
  const heatmapData = streakService.generateHeatmapData(streak, 30);

  // Group heatmap into weeks (7 days per row)
  const weeks: Array<Array<{date: string; active: boolean}>> = [];
  for (let i = 0; i < heatmapData.length; i += 7) {
    weeks.push(heatmapData.slice(i, i + 7));
  }

  return (
    <div
      className="p-4 rounded-lg"
      style={{
        backgroundColor: theme.glass.background,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
      }}
    >
      {/* Header with Fire Icon */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-xl">🔥</span>
          <div>
            <div className="text-base font-bold" style={{ color: theme.colors.textPrimary }}>
              {streak.currentStreak} Day Streak
            </div>
          </div>
        </div>
      </div>

      {/* Longest Streak Badge */}
      {streak.longestStreak > 0 && (
        <div
          className="mb-2 px-2 py-1 rounded inline-flex items-center space-x-1.5"
          style={{
            backgroundColor: '#FFA50020',
            border: '1px solid #FFA500',
          }}
        >
          <span className="text-xs">👑</span>
          <span className="text-xs font-semibold" style={{ color: '#FFA500' }}>
            Best: {streak.longestStreak} days
          </span>
        </div>
      )}

      {/* Calendar Heatmap */}
      <div className="mt-3">
        <div className="text-xs font-semibold mb-1.5" style={{ color: theme.colors.textSecondary }}>
          Last 30 Days
        </div>

        <div className="flex flex-col space-y-1">
          {weeks.map((week, weekIdx) => (
            <div key={weekIdx} className="flex space-x-0.5">
              {week.map((day, dayIdx) => {
                const date = new Date(day.date);
                const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });

                return (
                  <div
                    key={dayIdx}
                    className="
                      w-5 h-5
                      rounded
                      flex items-center justify-center
                      transition-all duration-200
                      hover:scale-110
                      cursor-pointer
                    "
                    style={{
                      backgroundColor: day.active
                        ? '#57F287'
                        : theme.name === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)',
                    }}
                    title={`${day.date} - ${day.active ? 'Active' : 'Inactive'}`}
                  >
                    {/* Show checkmark for active days */}
                    {day.active && (
                      <span className="text-[9px]" style={{ color: '#ffffff' }}>
                        ✓
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>


      </div>

      {/* Status Message */}
      {status.needsPractice && (
        <div
          className="mt-2 p-1.5 rounded text-xs text-center font-semibold"
          style={{
            backgroundColor: status.isActive ? '#FFA50020' : '#EB459E20',
            color: status.isActive ? '#FFA500' : '#EB459E',
          }}
        >
          {status.isActive ? '⚡ Practice today to keep your streak!' : '🎯 Start a new streak today!'}
        </div>
      )}
    </div>
  );
};
