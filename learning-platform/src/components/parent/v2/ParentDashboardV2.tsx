/**
 * ParentDashboardV2 Component
 *
 * Main container for the enhanced parent dashboard.
 * Displays comprehensive analytics and insights about child's learning progress.
 */

import React, { useState, useEffect } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { useAuth } from '../../../contexts/AuthContext';
import { authService } from '../../../services/authService';
import { useChildProgress } from '../../../hooks/parent/useChildProgress';
import type { ChildProfile, LinkedChild } from '../../../types/user';

// Components
import { ChildSelector } from './ChildSelector';
import { ChildHeroCard } from './ChildHeroCard';
import { MetricCard } from './MetricCard';
import { ActivityHeatmap } from './ActivityHeatmap';
import { StrengthsWeaknessesPanel } from './StrengthsWeaknessesPanel';
import { InsightsPanel } from './InsightsPanel';

export const ParentDashboardV2: React.FC = () => {
  const { theme } = useTheme();
  const { user, userProfile } = useAuth();

  // State
  const [childProfiles, setChildProfiles] = useState<ChildProfile[]>([]);
  const [linkedChildren, setLinkedChildren] = useState<LinkedChild[]>([]);
  const [selectedChildUid, setSelectedChildUid] = useState<string | null>(null);
  const [selectedChildType, setSelectedChildType] = useState<'child-profile' | 'linked-child'>('child-profile');
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '3m' | 'all'>('30d');

  // Fetch children data
  useEffect(() => {
    async function loadChildren() {
      if (user) {
        const profiles = userProfile?.childProfiles || [];
        const linked = await authService.getLinkedChildren(user.uid);

        setChildProfiles(profiles);
        setLinkedChildren(linked);

        // Auto-select first child
        if (profiles.length > 0) {
          setSelectedChildUid(profiles[0].profileId);
          setSelectedChildType('child-profile');
        } else if (linked.length > 0) {
          setSelectedChildUid(linked[0].uid);
          setSelectedChildType('linked-child');
        }
      }
    }
    loadChildren();
  }, [user, userProfile]);

  // Fetch child analytics
  // Important: With shadow documents, both Netflix profiles and linked children use their own UIDs
  // - Netflix profiles: selectedChildUid = profileId (shadow document at users/{profileId})
  // - Linked children: selectedChildUid = childUid (real account at users/{childUid})
  // Both cases: just pass selectedChildUid directly as the UID
  const effectiveUid = selectedChildUid || null;
  const effectiveProfileId = (selectedChildType === 'child-profile' && selectedChildUid) ? selectedChildUid : undefined;

  const { data: analytics, loading, error, refresh } = useChildProgress(
    effectiveUid,
    timeRange,
    effectiveProfileId
  );

  // Handle child selection
  const handleChildSelect = (uid: string, type: 'child-profile' | 'linked-child') => {
    if (uid === '') {
      // "View All Children" - go back to original parent dashboard
      setSelectedChildUid(null);
    } else {
      setSelectedChildUid(uid);
      setSelectedChildType(type);
    }
  };

  // If no child selected, show selector only
  if (!selectedChildUid || !analytics) {
    return (
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2" style={{ color: theme.colors.textPrimary }}>
            Parent Dashboard
          </h2>
          <p className="text-lg" style={{ color: theme.colors.textSecondary }}>
            Select a child to view their learning progress
          </p>
        </div>

        {/* Child Selector */}
        <ChildSelector
          childProfiles={childProfiles}
          linkedChildren={linkedChildren}
          selectedChildUid={selectedChildUid}
          onSelect={handleChildSelect}
        />

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: theme.colors.brand }} />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div
            className="p-6 rounded-2xl text-center"
            style={{
              background: `${theme.colors.error}10`,
              border: `1px solid ${theme.colors.error}30`,
            }}
          >
            <p style={{ color: theme.colors.error }}>Error loading child data: {error.message}</p>
            <button
              onClick={refresh}
              className="mt-4 px-4 py-2 rounded-lg font-medium"
              style={{ backgroundColor: theme.colors.error, color: '#ffffff' }}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 space-y-8">
      {/* Header with Child Selector */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2" style={{ color: theme.colors.textPrimary }}>
            Learning Progress
          </h2>
          <p className="text-lg" style={{ color: theme.colors.textSecondary }}>
            Track your child's achievements and growth
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Time Range Filter */}
          <div className="flex gap-2">
            {(['7d', '30d', '3m', 'all'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: timeRange === range ? theme.colors.brand : 'transparent',
                  color: timeRange === range ? '#ffffff' : theme.colors.textMuted,
                  border: `1px solid ${timeRange === range ? 'transparent' : theme.colors.border}`,
                }}
              >
                {range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : range === '3m' ? '3 Months' : 'All Time'}
              </button>
            ))}
          </div>

          {/* Child Selector */}
          <ChildSelector
            childProfiles={childProfiles}
            linkedChildren={linkedChildren}
            selectedChildUid={selectedChildUid}
            onSelect={handleChildSelect}
          />
        </div>
      </div>

      {/* Hero Card */}
      <ChildHeroCard overview={analytics.overview} />

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="This Week"
          value={analytics.keyMetrics.weeklyTime.formatted}
          subtitle="Study time"
          icon="⏱️"
          trend={{
            value: analytics.keyMetrics.weeklyTime.trend,
            direction: analytics.keyMetrics.weeklyTime.trendDirection,
            label: '%',
          }}
          color={theme.colors.info}
        />
        <MetricCard
          title="Topics"
          value={`${analytics.keyMetrics.topicsProgress.completed}/${analytics.keyMetrics.topicsProgress.total}`}
          subtitle={`${analytics.keyMetrics.topicsProgress.percentage}% complete`}
          icon="📚"
          trend={{
            value: analytics.keyMetrics.topicsProgress.trend,
            direction: analytics.keyMetrics.topicsProgress.trendDirection,
            label: ' topics',
          }}
          color={theme.colors.success}
        />
        <MetricCard
          title="Accuracy"
          value={`${analytics.keyMetrics.accuracy.value}%`}
          subtitle="Correctness rate"
          icon="🎯"
          trend={{
            value: analytics.keyMetrics.accuracy.trend,
            direction: analytics.keyMetrics.accuracy.trendDirection,
            label: '%',
          }}
          color={theme.colors.warning}
        />
        <MetricCard
          title="Streak"
          value={`${analytics.keyMetrics.streak.current} days`}
          subtitle={analytics.keyMetrics.streak.isBestEver ? 'Best ever! 🎉' : 'Keep it up!'}
          icon="🔥"
          color={theme.colors.error}
        />
      </div>

      {/* Activity Heatmap */}
      <ActivityHeatmap data={analytics.activity.heatmap} />

      {/* Insights Panel */}
      <InsightsPanel insights={analytics.insights} />

      {/* Strengths & Weaknesses */}
      <StrengthsWeaknessesPanel
        strengths={analytics.strengths}
        weaknesses={analytics.weaknesses}
      />

      {/* Refresh Button */}
      <div className="flex justify-center pt-8">
        <button
          onClick={refresh}
          className="px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: theme.colors.brand,
            color: '#ffffff',
            boxShadow: theme.shadows.md,
          }}
        >
          🔄 Refresh Data
        </button>
      </div>
    </div>
  );
};
