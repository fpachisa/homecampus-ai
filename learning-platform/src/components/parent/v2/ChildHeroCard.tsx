/**
 * ChildHeroCard Component
 *
 * Hero section displaying child's overview with key stats.
 * Shows name, grade, streak, level, and overall progress.
 */

import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import type { OverviewMetrics } from '../../../services/analytics/parentAnalyticsService';

interface ChildHeroCardProps {
  overview: OverviewMetrics;
}

export const ChildHeroCard: React.FC<ChildHeroCardProps> = ({ overview }) => {
  const { theme } = useTheme();

  const formatLastActive = (lastActive: Date | null): string => {
    if (!lastActive) return 'Never active';

    const now = new Date();
    const diffMs = now.getTime() - lastActive.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMinutes < 5) return 'Active now';
    if (diffMinutes < 60) return `${diffMinutes} minutes ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;

    return lastActive.toLocaleDateString();
  };

  return (
    <div
      className="p-8 rounded-2xl"
      style={{
        background: `linear-gradient(135deg, ${theme.colors.brand}15 0%, ${theme.colors.interactive}10 100%)`,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
        boxShadow: theme.shadows.lg,
      }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Avatar */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${theme.colors.brand} 0%, ${theme.colors.interactive} 100%)`,
            boxShadow: theme.shadows.md,
          }}
        >
          👨‍🎓
        </div>

        {/* Main Info */}
        <div className="flex-1">
          {/* Name & Grade */}
          <h2 className="text-3xl font-bold mb-1" style={{ color: theme.colors.textPrimary }}>
            {overview.displayName}
          </h2>
          <p className="text-lg mb-4" style={{ color: theme.colors.textSecondary }}>
            {overview.gradeLevel}
          </p>

          {/* Status Bar */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Last Active */}
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  overview.lastActive && new Date().getTime() - overview.lastActive.getTime() < 5 * 60 * 1000
                    ? 'animate-pulse'
                    : ''
                }`}
                style={{
                  backgroundColor:
                    overview.lastActive && new Date().getTime() - overview.lastActive.getTime() < 5 * 60 * 1000
                      ? theme.colors.success
                      : theme.colors.textMuted,
                }}
              />
              <span className="text-sm" style={{ color: theme.colors.textMuted }}>
                {formatLastActive(overview.lastActive)}
              </span>
            </div>

            <div className="hidden md:block w-px h-4" style={{ backgroundColor: theme.colors.border }} />

            {/* Streak */}
            {overview.currentStreak > 0 && (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🔥</span>
                  <span className="text-sm font-semibold" style={{ color: theme.colors.textPrimary }}>
                    {overview.currentStreak}-day streak
                  </span>
                </div>
                <div className="hidden md:block w-px h-4" style={{ backgroundColor: theme.colors.border }} />
              </>
            )}

            {/* Level */}
            <div className="flex items-center gap-2">
              <span className="text-lg">⭐</span>
              <span className="text-sm" style={{ color: theme.colors.textMuted }}>
                Level {overview.currentLevel}
              </span>
            </div>

            <div className="hidden md:block w-px h-4" style={{ backgroundColor: theme.colors.border }} />

            {/* XP */}
            <div className="flex items-center gap-2">
              <span className="text-lg">💎</span>
              <span className="text-sm" style={{ color: theme.colors.textMuted }}>
                {overview.totalXP.toLocaleString()} XP
              </span>
            </div>
          </div>
        </div>

        {/* Overall Progress */}
        <div className="flex flex-col items-center justify-center">
          {/* Circular Progress */}
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 transform -rotate-90">
              {/* Background Circle */}
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke={`${theme.colors.textMuted}30`}
                strokeWidth="8"
                fill="none"
              />
              {/* Progress Circle */}
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke={theme.colors.brand}
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - overview.overallProgress / 100)}`}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.5s ease' }}
              />
            </svg>
            {/* Percentage Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold" style={{ color: theme.colors.textPrimary }}>
                {overview.overallProgress}%
              </span>
            </div>
          </div>
          <p className="text-xs mt-2 text-center" style={{ color: theme.colors.textMuted }}>
            Overall Progress
          </p>
        </div>
      </div>
    </div>
  );
};
