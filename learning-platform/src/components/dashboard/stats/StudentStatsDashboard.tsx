/**
 * Student Stats Dashboard
 *
 * Comprehensive statistics dashboard for students with 4 tabs:
 * - Overview: Global stats, activity heatmap, week comparison
 * - Learn Mode: Topics breakdown, hints analysis, mastery timeline
 * - Practice Mode: Paths progress, Learn vs Practice comparison
 * - Achievements: Badges, categories, recent achievements
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import { useStudentDashboardStats } from '../../../hooks/useStudentDashboardStats';
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
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const {
    overview,
    learnMode,
    practiceMode,
    achievements,
    isLoading,
    error,
    refresh
  } = useStudentDashboardStats();

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen p-6" style={{ backgroundColor: theme.colors.primary }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <div className="text-lg" style={{ color: theme.colors.textSecondary }}>
                Loading your stats...
              </div>
            </div>
          </div>
        </div>
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
    <div className="min-h-screen p-6" style={{ backgroundColor: theme.colors.primary }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="p-2 rounded-lg transition-all hover:scale-105"
              style={{
                backgroundColor: theme.glass.background,
                border: `1px solid ${theme.glass.border}`,
                color: theme.colors.textSecondary
              }}
            >
              ← Back
            </button>
            <div>
              <h1 className="text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
                My Stats Dashboard
              </h1>
              <p className="text-sm mt-1" style={{ color: theme.colors.textSecondary }}>
                Track your learning progress and achievements
              </p>
            </div>
          </div>

          {/* Refresh Button */}
          <button
            onClick={refresh}
            className="px-4 py-2 rounded-lg font-medium transition-all hover:scale-105"
            style={{
              backgroundColor: theme.glass.background,
              border: `1px solid ${theme.glass.border}`,
              color: theme.colors.textSecondary
            }}
          >
            🔄 Refresh
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div
            className="flex space-x-2 p-1 rounded-lg"
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
                  className="flex-1 px-4 py-3 rounded-lg font-medium transition-all relative"
                  style={{
                    backgroundColor: isActive ? '#FFA50020' : 'transparent',
                    color: isActive ? '#FFA500' : theme.colors.textSecondary,
                    borderBottom: isActive ? '3px solid #FFA500' : '3px solid transparent'
                  }}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
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
