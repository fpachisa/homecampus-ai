/**
 * HeroStatsBanner - Full-width stats banner for active students
 *
 * Displays key metrics in a prominent banner:
 * - Level & XP (with progress bar)
 * - Current streak (with longest streak)
 * - This week's activity (problems, time, XP, trend)
 */

import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useGamificationStats } from '../../hooks/useGamificationStats';
import { useProgressSummary } from '../../hooks/useProgressSummary';
import { achievementService } from '../../services/achievementService';
import { StatCard } from './StatCard';

export const HeroStatsBanner: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { totalXP, currentLevel, currentStreak, longestStreak } = useGamificationStats();
  const { weeklyProblems, weeklyTimeMinutes, weeklyXP, weekTrend } = useProgressSummary();

  // Calculate XP progress for current level
  const xpProgress = achievementService.getXPProgress(totalXP);

  // Use real weekly stats from useProgressSummary (no more placeholders!)
  const weeklyStats = {
    problemsSolved: weeklyProblems,          // ✅ Real data
    timeSpent: weeklyTimeMinutes,            // ✅ Real data (minutes)
    xpEarned: weeklyXP,                      // ✅ Real data
    trend: weekTrend,                        // ✅ Real trend (e.g., "+25%")
  };

  // Format time
  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) return `${hours}h ${mins}m`;
    return `${mins}m`;
  };

  // Note: Component shows 0 values while isLoading=true, then updates with real data
  // This prevents layout shift and provides instant feedback

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Level & XP */}
        <StatCard
          icon="🎓"
          label="Level & XP"
          value={`Level ${currentLevel}`}
          subtitle={`Total: ${totalXP} XP`}
          onClick={() => navigate('/stats')}
        >
          {/* XP Progress Bar */}
          <div className="mt-3">
            <div
              className="flex justify-between text-xs mb-1"
              style={{ color: theme.colors.textSecondary }}
            >
              <span>Level {currentLevel}</span>
              <span>Level {currentLevel + 1}</span>
            </div>
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ backgroundColor: theme.colors.interactive }}
            >
              <div
                className="h-full transition-all duration-500"
                style={{
                  width: `${Math.min(xpProgress.percentage, 100)}%`,
                  backgroundColor: '#FFA500',
                }}
              />
            </div>
            <div
              className="text-xs mt-1 text-center"
              style={{ color: theme.colors.textMuted }}
            >
              {xpProgress.current} / {xpProgress.needed} XP
            </div>
          </div>
        </StatCard>

        {/* Streak */}
        <StatCard
          icon="🔥"
          label="Streak"
          value={`${currentStreak}-Day Streak`}
          subtitle={currentStreak > 0 ? 'Keep it going!' : 'Start your streak today!'}
          onClick={() => navigate('/stats')}
        >
          <div
            className="text-xs mt-2"
            style={{ color: theme.colors.textMuted }}
          >
            Longest: {longestStreak} {longestStreak === 1 ? 'day' : 'days'}
          </div>
        </StatCard>

        {/* This Week */}
        <StatCard
          icon="📊"
          label="This Week"
          value={`${weeklyStats.problemsSolved} Problems`}
          subtitle={`${formatTime(weeklyStats.timeSpent)} active`}
          trend={{
            value: weeklyStats.trend + ' vs last week',
            isPositive: true,
          }}
          onClick={() => navigate('/stats')}
        >
          <div
            className="text-sm mt-2"
            style={{ color: theme.colors.textSecondary }}
          >
            +{weeklyStats.xpEarned} XP earned
          </div>
        </StatCard>
      </div>
    </div>
  );
};
