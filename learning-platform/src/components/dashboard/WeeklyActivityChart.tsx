/**
 * WeeklyActivityChart - Simple bar chart showing last 7 days of activity
 *
 * Displays:
 * - Problems solved per day (bar height)
 * - Day labels (Mon-Sun)
 * - Daily average
 * - Week-over-week comparison
 */

import { useTheme } from '../../hooks/useTheme';

interface DayActivity {
  day: string; // Short day name (Mon, Tue, etc.)
  value: number; // Problems solved or XP earned
  date: Date;
}

interface WeeklyActivityChartProps {
  data: DayActivity[];
  label?: string; // e.g., "Problems Solved" or "XP Earned"
  dailyAverage?: number;
  weekOverWeekChange?: string; // e.g., "+25%"
}

export const WeeklyActivityChart: React.FC<WeeklyActivityChartProps> = ({
  data,
  label = 'Problems Solved',
  dailyAverage,
  weekOverWeekChange,
}) => {
  const { theme } = useTheme();

  // Calculate max value for scaling
  const maxValue = Math.max(...data.map((d) => d.value), 1);

  // Calculate bar height as percentage
  const getBarHeight = (value: number): number => {
    return (value / maxValue) * 100;
  };

  return (
    <div
      className="p-6 rounded-2xl"
      style={{
        background: theme.glass.background,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">📊</span>
        <h3
          className="text-lg font-semibold"
          style={{ color: theme.colors.textPrimary }}
        >
          This Week's Activity
        </h3>
      </div>

      {/* Chart */}
      <div className="mb-6">
        <div
          className="text-xs font-medium mb-2"
          style={{ color: theme.colors.textMuted }}
        >
          {label}
        </div>

        {/* Bar Chart */}
        <div className="flex items-end justify-between gap-2 h-32">
          {data.map((day, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center gap-2"
            >
              {/* Bar */}
              <div className="w-full flex flex-col justify-end h-24">
                <div
                  className="w-full rounded-t-lg transition-all duration-500"
                  style={{
                    height: `${getBarHeight(day.value)}%`,
                    backgroundColor: day.value > 0 ? theme.colors.brand : theme.colors.interactive,
                    opacity: day.value > 0 ? 1 : 0.3,
                  }}
                />
              </div>

              {/* Day Label */}
              <div
                className="text-xs font-medium"
                style={{ color: theme.colors.textSecondary }}
              >
                {day.day}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between text-sm">
        {/* Daily Average */}
        {dailyAverage !== undefined && (
          <div style={{ color: theme.colors.textSecondary }}>
            🎯 Daily avg: <span className="font-medium">{dailyAverage}</span>
          </div>
        )}

        {/* Week-over-week */}
        {weekOverWeekChange && (
          <div
            className="font-medium"
            style={{
              color: weekOverWeekChange.startsWith('+')
                ? theme.colors.success
                : theme.colors.error,
            }}
          >
            {weekOverWeekChange.startsWith('+') ? '📈' : '📉'} {weekOverWeekChange} vs last week
          </div>
        )}
      </div>
    </div>
  );
};
