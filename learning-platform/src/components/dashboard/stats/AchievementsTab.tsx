/**
 * Achievements Tab
 *
 * Displays achievements and badges
 */

import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import type { StudentDashboardData } from '../../../types/studentDashboard';

interface AchievementsTabProps {
  data: StudentDashboardData['achievements'];
}

export const AchievementsTab: React.FC<AchievementsTabProps> = ({ data }) => {
  const { theme } = useTheme();

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
                  backgroundColor: '#FFD700'
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
            <div className="text-3xl font-bold" style={{ color: '#FFA500' }}>
              {data.summary.totalXPFromAchievements}
            </div>
            <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
              Total earned
            </div>
          </div>
        </div>

        {/* Next Milestone */}
        {data.summary.nextMilestone && (
          <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: '#FFD70020' }}>
            <div className="text-sm font-bold mb-1" style={{ color: '#FFD700' }}>
              🎯 Next Milestone
            </div>
            <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
              Unlock {data.summary.nextMilestone.achievementsNeeded} more achievements to earn{' '}
              {data.summary.nextMilestone.xpReward} XP!
            </div>
          </div>
        )}
      </div>

      {/* Placeholder for Achievement Grid */}
      <div
        className="glass-surface p-12 rounded-lg text-center"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop
        }}
      >
        <div className="text-4xl mb-4">🏆</div>
        <div className="text-lg mb-2" style={{ color: theme.colors.textPrimary }}>
          Achievement System Coming Soon
        </div>
        <div className="text-sm" style={{ color: theme.colors.textSecondary }}>
          Detailed achievement categories and badges will be displayed here
        </div>
      </div>
    </div>
  );
};
