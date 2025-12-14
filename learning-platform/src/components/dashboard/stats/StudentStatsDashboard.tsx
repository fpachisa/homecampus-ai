/**
 * Student Stats Dashboard
 *
 * Comprehensive statistics dashboard for students with 4 tabs:
 * - Overview: Global stats, activity heatmap, week comparison
 * - Learn Mode: Topics breakdown, hints analysis, mastery timeline
 * - Practice Mode: Paths progress, Learn vs Practice comparison
 * - Achievements: Badges, categories, recent achievements
 */

import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import { useAuth } from '../../../contexts/AuthContext';
import { useStudentDashboardStats } from '../../../hooks/useStudentDashboardStats';
import { authService } from '../../../services/authService';
import { LoadingSpinner } from '../../LoadingSpinner';
import { OverviewTab } from './OverviewTab';
import { LearnModeTab } from './LearnModeTab';
import { PracticeModeTab } from './PracticeModeTab';
import { AchievementsTab } from './AchievementsTab';

type TabId = 'overview' | 'learn' | 'practice' | 'achievements';

interface Tab {
  id: TabId;
  label: string;
  icon: string;
}

const TABS: Tab[] = [
  { id: 'overview', label: 'Overview', icon: '📊' },
  { id: 'learn', label: 'Learn Mode', icon: '📚' },
  { id: 'practice', label: 'Practice', icon: '🎯' },
  { id: 'achievements', label: 'Achievements', icon: '🏆' }
];

export const StudentStatsDashboard: React.FC = () => {
  const { theme } = useTheme();
  const { user, userProfile } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [selectedChildId, setSelectedChildId] = useState<string | null>(null);
  const [linkedChildren, setLinkedChildren] = useState<Array<{ uid: string; displayName: string }>>([]);

  // Fetch linked children (separate accounts) from subcollection
  useEffect(() => {
    async function loadLinkedChildren() {
      if (user && userProfile?.isParent) {
        try {
          const children = await authService.getLinkedChildren(user.uid);
          setLinkedChildren(children);
        } catch (error) {
          console.error('Error loading linked children:', error);
        }
      }
    }
    loadLinkedChildren();
  }, [user, userProfile]);

  // Combine parent's children (both Netflix-style and linked accounts)
  const children = useMemo(() => {
    if (!userProfile?.isParent) return [];

    const childProfiles = userProfile.childProfiles || [];

    // Combine profiles from document and fetched linked children
    return [
      ...childProfiles.map(c => ({ id: c.profileId, name: c.displayName })),
      ...linkedChildren.map(c => ({ id: c.uid, name: c.displayName }))
    ];
  }, [userProfile, linkedChildren]);

  // Auto-select first child if parent
  useEffect(() => {
    if (userProfile?.isParent && children.length > 0 && !selectedChildId) {
      setSelectedChildId(children[0].id);
    }
  }, [userProfile, children, selectedChildId]);

  const {
    overview,
    learnMode,
    practiceMode,
    achievements,
    isLoading,
    error,
    refresh
  } = useStudentDashboardStats(selectedChildId || undefined);

  // Determine display title
  const displayTitle = useMemo(() => {
    if (userProfile?.isParent && selectedChildId) {
      const child = children.find(c => c.id === selectedChildId);
      return child ? `${child.name}'s Stats Dashboard` : "Child's Stats Dashboard";
    }
    return 'My Stats Dashboard';
  }, [userProfile, selectedChildId, children]);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: theme.colors.primary }}>
        <LoadingSpinner size="large" />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen p-6" style={{ backgroundColor: theme.colors.primary }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="text-4xl mb-4">⚠️</div>
              <div className="text-lg mb-4" style={{ color: theme.colors.textPrimary }}>
                Failed to load dashboard
              </div>
              <div className="text-sm mb-6" style={{ color: theme.colors.textSecondary }}>
                {error}
              </div>
              <button
                onClick={refresh}
                className="px-6 py-2 rounded-lg font-medium transition-all hover:scale-105"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: '#FFFFFF'
                }}
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-3 sm:p-4 md:p-6" style={{ backgroundColor: theme.colors.primary }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          {/* Top row: Back/Refresh buttons */}
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => navigate('/')}
              className="p-2 rounded-lg transition-all hover:scale-105 flex items-center gap-1"
              style={{
                backgroundColor: theme.glass.background,
                border: `1px solid ${theme.glass.border}`,
                color: theme.colors.textSecondary
              }}
            >
              <span>←</span>
              <span className="text-sm">Back</span>
            </button>

            <div className="flex gap-3">
              {/* Child Selector Dropdown (Parent Only) */}
              {userProfile?.isParent && children.length > 1 && (
                <select
                  value={selectedChildId || ''}
                  onChange={(e) => setSelectedChildId(e.target.value)}
                  className="px-3 py-2 rounded-lg font-medium outline-none cursor-pointer"
                  style={{
                    backgroundColor: theme.glass.background,
                    border: `1px solid ${theme.glass.border}`,
                    color: theme.colors.textPrimary
                  }}
                >
                  {children.map(child => (
                    <option key={child.id} value={child.id}>
                      {child.name}
                    </option>
                  ))}
                </select>
              )}

              <button
                onClick={refresh}
                className="px-3 py-2 rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-1"
                style={{
                  backgroundColor: theme.glass.background,
                  border: `1px solid ${theme.glass.border}`,
                  color: theme.colors.textSecondary
                }}
              >
                <span>🔄</span>
                <span className="hidden sm:inline text-sm">Refresh</span>
              </button>
            </div>
          </div>

          {/* Title section */}
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
              {displayTitle}
            </h1>
            <p className="text-xs sm:text-sm mt-1" style={{ color: theme.colors.textSecondary }}>
              Track {userProfile?.isParent ? "your child's" : "your"} learning progress and achievements
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-4 sm:mb-6">
          <div
            className="flex gap-1 sm:gap-2 p-1 rounded-lg overflow-x-auto"
            style={{
              backgroundColor: theme.glass.background,
              border: `1px solid ${theme.glass.border}`
            }}
          >
            {TABS.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex-1 min-w-[70px] px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-lg font-medium transition-all relative flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2"
                  style={{
                    backgroundColor: isActive ? '#FFA50020' : 'transparent',
                    color: isActive ? '#FFA500' : theme.colors.textSecondary,
                    borderBottom: isActive ? '3px solid #FFA500' : '3px solid transparent'
                  }}
                >
                  <span className="text-lg sm:text-base">{tab.icon}</span>
                  <span className="text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-300">
          {activeTab === 'overview' && <OverviewTab data={overview} />}
          {activeTab === 'learn' && <LearnModeTab data={learnMode} />}
          {activeTab === 'practice' && <PracticeModeTab data={practiceMode} />}
          {activeTab === 'achievements' && <AchievementsTab data={achievements} />}
        </div>
      </div>
    </div>
  );
};
