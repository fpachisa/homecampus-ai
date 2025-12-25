/**
 * Achievements Tab
 *
 * Displays all achievements organized by category with earned/locked status
 */

import React, { useMemo } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { achievementService } from '../../../services/achievementService';
import type { StudentDashboardData } from '../../../types/studentDashboard';

interface AchievementsTabProps {
  data: StudentDashboardData['achievements'];
}

// Achievement category configuration
const CATEGORIES = [
  { id: 'first-steps', title: 'First Steps', icon: '🌟', description: 'Beginner achievements' },
  { id: 'streaks', title: 'Consistency', icon: '🔥', description: 'Daily streak achievements' },
  { id: 'accuracy', title: 'Accuracy', icon: '🎯', description: 'Precision achievements' },
  { id: 'volume', title: 'Problem Solving', icon: '🧮', description: 'Volume milestones' },
  { id: 'layers', title: 'Layer Completion', icon: '🏗️', description: 'Complete learning layers' },
  { id: 'nodes', title: 'Node Milestones', icon: '📦', description: 'Node completion achievements' },
  { id: 'speed', title: 'Speed', icon: '⚡', description: 'Quick completion achievements' },
  { id: 'time', title: 'Time Investment', icon: '⏰', description: 'Dedication achievements' },
  { id: 'daily', title: 'Daily Goals', icon: '📅', description: 'Consistency achievements' },
  { id: 'special', title: 'Special', icon: '✨', description: 'Unique achievements' },
];

// Map achievement IDs to categories
function getCategoryForAchievement(id: string): string {
  if (id.startsWith('first-') || id === 'first-perfect-session') return 'first-steps';
  if (id.startsWith('streak-')) return 'streaks';
  if (id.includes('accuracy') || id.includes('perfectionist') || id.includes('sharpshooter') || id.includes('no-hints')) return 'accuracy';
  if (id.startsWith('problem-solver')) return 'volume';
  if (id.includes('-complete') && !id.includes('nodes')) return 'layers';
  if (id.startsWith('nodes-')) return 'nodes';
  if (id.includes('speed') || id.includes('lightning') || id.includes('quick')) return 'speed';
  if (id.includes('dedicated') || id.includes('committed') || id.includes('marathon') || id.includes('time-master') || id.includes('knowledge')) return 'time';
  if (id.includes('daily') || id.includes('weekly-warrior')) return 'daily';
  return 'special';
}

export const AchievementsTab: React.FC<AchievementsTabProps> = ({ data }) => {
  const { theme, isLight } = useTheme();

  // Theme-aware accent colors (darker in light mode for better contrast)
  const accentGold = isLight ? '#B8860B' : '#FFD700';      // Gold/Yellow
  const accentOrange = isLight ? '#CC7000' : '#FFA500';    // Orange/XP color
  const accentGoldBg = isLight ? '#B8860B15' : '#FFD70015'; // Gold background

  // Get all achievement definitions and organize by category
  const allDefinitions = achievementService.ACHIEVEMENT_DEFINITIONS;

  // Create a set of earned achievement IDs for quick lookup
  const earnedIds = useMemo(() => {
    const ids = new Set<string>();
    data.recentAchievements?.forEach(a => ids.add(a.id));
    return ids;
  }, [data.recentAchievements]);

  // Group achievements by category
  const achievementsByCategory = useMemo(() => {
    const grouped = new Map<string, typeof allDefinitions>();

    CATEGORIES.forEach(cat => grouped.set(cat.id, []));

    allDefinitions.forEach(def => {
      const category = getCategoryForAchievement(def.id);
      const list = grouped.get(category) || [];
      list.push(def);
      grouped.set(category, list);
    });

    return grouped;
  }, [allDefinitions]);

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
              Achievements
            </h2>
            <p className="text-sm mt-1" style={{ color: theme.colors.textSecondary }}>
              Badges and milestones you've earned
            </p>
          </div>
          <div className="text-4xl">🏆</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className="glass-surface p-4 rounded-lg"
            style={{
              background: theme.glass.background,
              border: `1px solid ${theme.glass.border}`,
              backdropFilter: theme.glass.backdrop
            }}
          >
            <div className="text-xs mb-1" style={{ color: theme.colors.textMuted }}>
              Unlocked
            </div>
            <div className="text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
              {data.summary.totalUnlocked}
            </div>
            <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
              out of {data.summary.totalAvailable}
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
              Progress
            </div>
            <div className="flex items-end space-x-2">
              <div className="text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
                {data.summary.percentageComplete}%
              </div>
            </div>
            <div
              className="h-2 rounded-full overflow-hidden mt-2"
              style={{ backgroundColor: theme.colors.interactive }}
            >
              <div
                className="h-full transition-all"
                style={{
                  width: `${data.summary.percentageComplete}%`,
                  backgroundColor: accentGold
                }}
              />
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
              XP from Achievements
            </div>
            <div className="text-3xl font-bold" style={{ color: accentOrange }}>
              {data.summary.totalXPFromAchievements}
            </div>
            <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
              Total earned
            </div>
          </div>
        </div>

        {/* Next Milestone */}
        {data.summary.nextMilestone && (
          <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: accentGoldBg }}>
            <div className="text-sm font-bold mb-1" style={{ color: accentGold }}>
              🎯 Next Milestone
            </div>
            <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
              Unlock {data.summary.nextMilestone.achievementsNeeded} more achievements to earn{' '}
              {data.summary.nextMilestone.xpReward} XP!
            </div>
          </div>
        )}
      </div>

      {/* Achievement Categories */}
      {CATEGORIES.map(category => {
        const achievements = achievementsByCategory.get(category.id) || [];
        if (achievements.length === 0) return null;

        const earnedInCategory = achievements.filter(a => earnedIds.has(a.id)).length;

        return (
          <div
            key={category.id}
            className="glass-surface p-6 rounded-lg"
            style={{
              backgroundColor: theme.glass.background,
              border: `1px solid ${theme.glass.border}`,
              backdropFilter: theme.glass.backdrop
            }}
          >
            {/* Category Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: theme.colors.textPrimary }}>
                    {category.title}
                  </h3>
                  <p className="text-xs" style={{ color: theme.colors.textMuted }}>
                    {category.description}
                  </p>
                </div>
              </div>
              <div
                className="text-sm font-medium px-3 py-1 rounded-full"
                style={{
                  backgroundColor: earnedInCategory === achievements.length ? '#22c55e20' : theme.colors.interactive,
                  color: earnedInCategory === achievements.length ? '#22c55e' : theme.colors.textSecondary
                }}
              >
                {earnedInCategory}/{achievements.length}
              </div>
            </div>

            {/* Achievement Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {achievements.map(achievement => {
                const isEarned = earnedIds.has(achievement.id);

                return (
                  <div
                    key={achievement.id}
                    className="relative p-4 rounded-lg text-center transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: isEarned ? accentGoldBg : theme.colors.interactive,
                      border: `2px solid ${isEarned ? accentGold : theme.glass.border}`,
                      opacity: isEarned ? 1 : 0.6,
                    }}
                  >
                    {/* Badge Icon */}
                    <div
                      className="text-3xl mb-2"
                      style={{
                        filter: isEarned ? 'none' : 'grayscale(100%)',
                      }}
                    >
                      {achievement.icon}
                    </div>

                    {/* Title */}
                    <div
                      className="text-xs font-semibold mb-1 line-clamp-2"
                      style={{ color: isEarned ? theme.colors.textPrimary : theme.colors.textMuted }}
                    >
                      {achievement.title}
                    </div>

                    {/* XP Reward */}
                    <div
                      className="text-xs font-medium"
                      style={{ color: isEarned ? accentOrange : theme.colors.textMuted }}
                    >
                      +{achievement.xpReward} XP
                    </div>

                    {/* Locked Overlay */}
                    {!isEarned && (
                      <div className="absolute inset-0 flex items-center justify-center rounded-lg">
                        <span className="text-lg opacity-50">🔒</span>
                      </div>
                    )}

                    {/* Earned Checkmark */}
                    {isEarned && (
                      <div
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                        style={{ backgroundColor: '#22c55e', color: 'white' }}
                      >
                        ✓
                      </div>
                    )}

                    {/* Tooltip on hover */}
                    <div
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg text-xs opacity-0 hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap"
                      style={{
                        backgroundColor: theme.colors.surface,
                        border: `1px solid ${theme.glass.border}`,
                        color: theme.colors.textPrimary,
                      }}
                    >
                      {achievement.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
