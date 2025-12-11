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
import { useNavigate } from 'react-router-dom';
import { useActiveProfile } from '../../../contexts/ActiveProfileContext';

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
  const navigate = useNavigate();
  const { switchToChildProfile, switchToLinkedChild } = useActiveProfile();

  // State
  // State
  const [childProfiles, setChildProfiles] = useState<ChildProfile[]>([]);
  const [linkedChildren, setLinkedChildren] = useState<LinkedChild[]>([]);
  const [pendingInvites, setPendingInvites] = useState<Array<{
    email: string;
    displayName: string;
    gradeLevel: string;
    sentAt: string;
  }>>([]);
  const [selectedChildUid, setSelectedChildUid] = useState<string | null>(null);
  const [selectedChildType, setSelectedChildType] = useState<'child-profile' | 'linked-child'>('child-profile');
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '3m' | 'all'>('30d');
  const [isLoadingChildren, setIsLoadingChildren] = useState(true);

  // Fetch children data
  useEffect(() => {
    async function loadChildren() {
      if (user) {
        setIsLoadingChildren(true);
        try {
          const profiles = userProfile?.childProfiles || [];
          const linked = await authService.getLinkedChildren(user.uid);
          const invites = await authService.getPendingChildInvites(user.uid);

          setChildProfiles(profiles);
          setLinkedChildren(linked);
          setPendingInvites(invites);

          // Auto-select first child
          if (profiles.length > 0) {
            setSelectedChildUid(profiles[0].profileId);
            setSelectedChildType('child-profile');
          } else if (linked.length > 0) {
            setSelectedChildUid(linked[0].uid);
            setSelectedChildType('linked-child');
          }
        } catch (err) {
          console.error("Failed to load children data:", err);
        } finally {
          setIsLoadingChildren(false);
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

  const { data: analytics, loading: analyticsLoading, error, refresh } = useChildProgress(
    effectiveUid,
    timeRange,
    effectiveProfileId
  );

  const loading = analyticsLoading || isLoadingChildren;

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

  // If no child selected (or still loading initial state where no child might be selected yet)
  if (!selectedChildUid || !analytics) {
    // Check if we have any pending invites to show in this "empty" state
    const hasPendingInvites = pendingInvites.length > 0;
    const hasChildren = childProfiles.length > 0 || linkedChildren.length > 0;

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
        {(hasChildren || hasPendingInvites) && (
          <ChildSelector
            childProfiles={childProfiles}
            linkedChildren={linkedChildren}
            pendingInvites={pendingInvites}
            selectedChildUid={selectedChildUid}
            onSelect={handleChildSelect}
          />
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: theme.colors.brand }} />
          </div>
        )}

        {/* Pending Invites Section - Show prominently when no child is selected */}
        {hasPendingInvites && !loading && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4" style={{ color: theme.colors.textPrimary }}>
              Pending Invites
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pendingInvites.map((invite, index) => (
                <div
                  key={`pending-${index}`}
                  className="p-6 rounded-2xl"
                  style={{
                    background: theme.glass.background,
                    border: `1px solid ${theme.colors.border}`,
                    backdropFilter: theme.glass.backdrop,
                    boxShadow: theme.shadows.md,
                    opacity: 0.8,
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-1" style={{ color: theme.colors.textPrimary }}>
                        {invite.displayName}
                      </h4>
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        {invite.gradeLevel}
                      </p>
                    </div>
                    <div
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: theme.colors.warning + '20',
                        color: theme.colors.warning,
                      }}
                    >
                      Pending
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                      {invite.email}
                    </p>
                  </div>

                  <div
                    className="p-3 rounded-lg flex items-center gap-2 text-sm"
                    style={{
                      backgroundColor: theme.colors.info + '10',
                      color: theme.colors.textSecondary,
                    }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Awaiting account creation
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State - Only show if NO children AND NO pending invites */}
        {!hasChildren && !hasPendingInvites && !loading && !error && (
          <div
            className="p-12 rounded-2xl text-center mt-8"
            style={{
              background: theme.glass.background,
              border: `1px solid ${theme.glass.border}`,
              backdropFilter: theme.glass.backdrop,
            }}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6"
              style={{ backgroundColor: theme.colors.interactive }}
            >
              👨‍👩‍👧‍👦
            </div>
            <h3 className="text-2xl font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
              No Children Added Yet
            </h3>
            <p className="text-base mb-6" style={{ color: theme.colors.textSecondary }}>
              Start by adding children to monitor their learning progress
            </p>
            <button
              className="px-6 py-3 rounded-xl font-medium transition-all"
              style={{
                backgroundColor: theme.colors.brand,
                color: '#ffffff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Add Your First Child
            </button>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div
            className="p-6 rounded-2xl text-center mt-8"
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
          {selectedChildUid && (
            <button
              onClick={() => {
                const child = selectedChildType === 'linked-child'
                  ? linkedChildren.find(c => c.uid === selectedChildUid)
                  : childProfiles.find(c => c.profileId === selectedChildUid);

                if (child) {
                  const grade = selectedChildType === 'linked-child'
                    ? (child as LinkedChild).grade
                    : (child as ChildProfile).gradeLevel;

                  if (selectedChildType === 'linked-child') {
                    switchToLinkedChild(selectedChildUid, child.displayName, grade);
                  } else {
                    switchToChildProfile(selectedChildUid, child.displayName, grade);
                  }
                  navigate('/home');
                }
              }}
              className="mt-2 text-sm font-medium hover:underline flex items-center gap-1"
              style={{ color: theme.colors.brand }}
            >
              <span>Login as {childProfiles.find(c => c.profileId === selectedChildUid)?.displayName || linkedChildren.find(c => c.uid === selectedChildUid)?.displayName || 'Child'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          )}
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
            pendingInvites={pendingInvites}
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
