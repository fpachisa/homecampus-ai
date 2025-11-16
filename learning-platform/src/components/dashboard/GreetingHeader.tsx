/**
 * GreetingHeader - Compact greeting with integrated key stats
 *
 * Shows personalized greeting + key metrics in one compact row
 * - Greeting message on left
 * - Key stats (Level, Streak, Weekly) as compact chips on right
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useActiveProfile } from '../../contexts/ActiveProfileContext';
import { useGamificationStats } from '../../hooks/useGamificationStats';
import { useProgressSummary } from '../../hooks/useProgressSummary';
import { achievementService } from '../../services/achievementService';

export const GreetingHeader: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { activeProfile } = useActiveProfile();
  const { currentLevel, totalXP, currentStreak, longestStreak } = useGamificationStats();
  const progressSummary = useProgressSummary();
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  // Calculate XP progress
  const xpProgress = achievementService.getXPProgress(totalXP);

  // Get greeting based on time of day
  const getGreeting = (): string => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="mb-4 sm:mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
        {/* Greeting */}
        <div>
          <h1
            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1"
            style={{ color: theme.colors.textPrimary }}
          >
            {getGreeting()}, {activeProfile?.displayName || 'Student'}! 👋
          </h1>
          <p
            className="text-xs sm:text-sm"
            style={{ color: theme.colors.textSecondary }}
          >
            Ready to continue your learning journey?
          </p>
        </div>

        {/* Compact Stats Chips */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-3">
          {/* Level */}
          <div
            className="relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-all hover:scale-105"
            style={{
              backgroundColor: theme.colors.interactive,
              border: `1px solid ${hoveredStat === 'level' ? theme.colors.brand : theme.colors.border}`,
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHoveredStat('level')}
            onMouseLeave={() => setHoveredStat(null)}
            onClick={() => navigate('/stats')}
          >
            <span className="text-base sm:text-xl">🎓</span>
            <div className="text-xs sm:text-sm">
              <span
                className="font-bold"
                style={{ color: theme.colors.textPrimary }}
              >
                Level {currentLevel}
              </span>
              <span
                className="text-[10px] sm:text-xs ml-1"
                style={{ color: theme.colors.textMuted }}
              >
                ({totalXP} XP)
              </span>
            </div>

            {/* Tooltip */}
            {hoveredStat === 'level' && (
              <div
                className="absolute top-full left-0 mt-2 p-3 rounded-lg shadow-lg whitespace-nowrap"
                style={{
                  backgroundColor: theme.colors.panel,
                  border: `1px solid ${theme.colors.border}`,
                  zIndex: 9999,
                }}
              >
                <div className="text-xs space-y-1">
                  <div style={{ color: theme.colors.textPrimary }}>
                    <strong>Next level:</strong> {xpProgress.needed - xpProgress.current} XP needed
                  </div>
                  <div style={{ color: theme.colors.textSecondary }}>
                    Progress: {xpProgress.percentage.toFixed(1)}%
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Streak */}
          {currentStreak > 0 && (
            <div
              className="relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-all hover:scale-105"
              style={{
                backgroundColor: theme.colors.interactive,
                border: `1px solid ${hoveredStat === 'streak' ? theme.colors.brand : theme.colors.border}`,
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHoveredStat('streak')}
              onMouseLeave={() => setHoveredStat(null)}
              onClick={() => navigate('/stats')}
            >
              <span className="text-base sm:text-xl">🔥</span>
              <div className="text-xs sm:text-sm">
                <span
                  className="font-bold"
                  style={{ color: theme.colors.textPrimary }}
                >
                  {currentStreak}-day
                </span>
              </div>

              {/* Tooltip */}
              {hoveredStat === 'streak' && (
                <div
                  className="absolute top-full left-0 mt-2 p-3 rounded-lg shadow-lg whitespace-nowrap"
                  style={{
                    backgroundColor: theme.colors.panel,
                    border: `1px solid ${theme.colors.border}`,
                    zIndex: 9999,
                  }}
                >
                  <div className="text-xs space-y-1">
                    <div style={{ color: theme.colors.textPrimary }}>
                      <strong>Current:</strong> {currentStreak} {currentStreak === 1 ? 'day' : 'days'}
                    </div>
                    <div style={{ color: theme.colors.textSecondary }}>
                      Longest: {longestStreak} {longestStreak === 1 ? 'day' : 'days'}
                    </div>
                    <div style={{ color: theme.colors.textMuted }}>
                      +5 XP daily bonus
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Weekly Stats */}
          <div
            className="relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-all hover:scale-105"
            style={{
              backgroundColor: theme.colors.interactive,
              border: `1px solid ${hoveredStat === 'weekly' ? theme.colors.brand : theme.colors.border}`,
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHoveredStat('weekly')}
            onMouseLeave={() => setHoveredStat(null)}
            onClick={() => navigate('/stats')}
          >
            <span className="text-base sm:text-xl">📊</span>
            <div className="text-xs sm:text-sm">
              <span
                className="font-bold"
                style={{ color: theme.colors.textPrimary }}
              >
                {progressSummary.weeklyProblems} problems
              </span>
              <span
                className="text-[10px] sm:text-xs ml-1"
                style={{ color: theme.colors.success }}
              >
                this week
              </span>
            </div>

            {/* Tooltip */}
            {hoveredStat === 'weekly' && (
              <div
                className="absolute top-full left-0 mt-2 p-3 rounded-lg shadow-lg whitespace-nowrap"
                style={{
                  backgroundColor: theme.colors.panel,
                  border: `1px solid ${theme.colors.border}`,
                  zIndex: 9999,
                }}
              >
                <div className="text-xs space-y-1">
                  <div style={{ color: theme.colors.textPrimary }}>
                    <strong>This week:</strong> {progressSummary.weeklyProblems} problems
                  </div>
                  <div style={{ color: theme.colors.textSecondary }}>
                    Time: {Math.floor(progressSummary.weeklyTimeMinutes / 60)}h {progressSummary.weeklyTimeMinutes % 60}m active
                  </div>
                  <div style={{ color: theme.colors.textSecondary }}>
                    XP earned: {progressSummary.weeklyXP}
                  </div>
                  <div style={{ color: theme.colors.success }}>
                    {progressSummary.weekTrend} vs last week
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
