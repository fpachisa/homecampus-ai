/**
 * ActiveStudentDashboard - Dashboard view for students with progress
 *
 * Layout:
 * 1. HeroStatsBanner - Level, XP, Streak, Weekly stats
 * 2. Continue & Recommendations - Resume + Smart suggestions (2-column)
 * 3. Topic Grid - Progress visualization (4-column responsive)
 * 4. Achievements & Activity - Recent achievements + weekly chart (2-column)
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useAuth } from '../../contexts/AuthContext';
import { useActiveProfile } from '../../contexts/ActiveProfileContext';
import { useGamificationStats } from '../../hooks/useGamificationStats';
import { useProgressSummary } from '../../hooks/useProgressSummary';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { GRADE_LEVELS, getTopicsByGrade, type GradeLevel } from '../../config/topicsByGrade';
import { GreetingHeader } from './GreetingHeader';
import { ActionCard } from './ActionCard';
import { ImprovedTopicCard } from './ImprovedTopicCard';
import { WeeklyActivityChart } from './WeeklyActivityChart';
import { RecentAchievementsPanel } from './RecentAchievementsPanel';
import LoadingSpinner from '../LoadingSpinner';

type LearningMode = 'learn' | 'practice';

export const ActiveStudentDashboard: React.FC = () => {
  const { theme } = useTheme();
  const { userProfile } = useAuth();
  const { activeProfile } = useActiveProfile();
  const { currentStreak } = useGamificationStats();
  const { goToPractice, goToHomeworkHelper } = useAppNavigation();
  const navigate = useNavigate();
  const [learningMode, setLearningMode] = useState<LearningMode>('learn');

  const progressSummary = useProgressSummary();

  // Get topics for student's grade
  const resolvedGrade = activeProfile?.gradeLevel || userProfile?.gradeLevel;
  const gradeLevel: GradeLevel | null =
    resolvedGrade && GRADE_LEVELS.includes(resolvedGrade as GradeLevel)
      ? (resolvedGrade as GradeLevel)
      : null;

  if (!gradeLevel) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background: theme.gradients.panel,
          color: theme.colors.textPrimary,
        }}
      >
        {resolvedGrade ? (
          <div className="text-center max-w-md px-6">
            <p className="text-lg font-semibold">Unsupported grade level</p>
            <p className="text-sm opacity-80 mt-2">{resolvedGrade}</p>
            <button
              className="mt-5 px-5 py-2 rounded-lg font-semibold"
              style={{
                backgroundColor: theme.colors.brand,
                color: '#ffffff',
              }}
              onClick={() => navigate('/settings')}
            >
              Update in Settings
            </button>
          </div>
        ) : (
          <LoadingSpinner size="large" />
        )}
      </div>
    );
  }

  const topics = getTopicsByGrade(gradeLevel);

  // Transform weekly activity to chart format
  const weeklyData = progressSummary.weeklyActivity.map((activity) => {
    // Get actual day name from the date
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayName = dayNames[activity.date.getDay()];

    return {
      day: dayName,
      value: activity.problemsSolved,
      date: activity.date,
    };
  });

  // Get last accessed topic for navigation
  const lastTopic = progressSummary.lastAccessedTopic;

  // Handler for navigating to last accessed topic
  const handleContinuePractice = () => {
    if (lastTopic) {
      // Navigate to the last accessed topic
      goToPractice(lastTopic.topicCategory);
    } else {
      // No previous topic, find first available active topic
      const firstActiveTopic = topics.find(t => t.isActive);
      if (firstActiveTopic && firstActiveTopic.category) {
        goToPractice(firstActiveTopic.category);
      }
    }
  };

  // Handler for quick practice (any topic)
  const handleQuickPractice = () => {
    // Find a topic that's not completed yet
    const inProgressTopic = progressSummary.topics.find(t => t.progress > 0 && t.progress < 100);
    if (inProgressTopic) {
      goToPractice(inProgressTopic.topicCategory);
    } else {
      // No in-progress topics, use first available active topic
      const firstActiveTopic = topics.find(t => t.isActive);
      if (firstActiveTopic && firstActiveTopic.category) {
        goToPractice(firstActiveTopic.category);
      }
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: theme.gradients.panel,
        color: theme.colors.textPrimary,
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4 lg:py-6">
        {/* Greeting Header with Integrated Stats */}
        <div className="relative" style={{ zIndex: 50 }}>
          <GreetingHeader />
        </div>

        {/* Divider */}
        <hr className="mb-4 sm:mb-6 lg:mb-8 mx-auto" style={{ borderColor: theme.colors.border, opacity: 0.6, maxWidth: '600px' }} />

        {/* Quick Actions Section */}
        <section className="mb-4 sm:mb-6 lg:mb-8">
          <h2
            className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2"
            style={{ color: theme.colors.textPrimary }}
          >

          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {/* First Card: O-Level Practice (Sec 4) OR Streak Protection (Others) */}
            {gradeLevel === 'Secondary 4' ? (
              <ActionCard
                icon="🎓"
                title="O-Level Practice"
                description="Practice with real past-year questions"
                buttonLabel="Start Practice"
                buttonColor="#D97757"
                onAction={() => navigate('/practice/olevel')}
                metadata={{
                  time: '35 questions',
                  xp: 18,
                }}
              />
            ) : currentStreak > 0 ? (
              <ActionCard
                icon="🔥"
                title={`Keep your ${currentStreak}-day streak alive!`}
                description="Solve at least 1 problem today to maintain your streak"
                buttonLabel="Start Practice"
                buttonColor="#D97757"
                onAction={handleQuickPractice}
                metadata={{
                  time: '~5 min',
                  xp: 5,
                }}
              />
            ) : null}

            {/* Daily Goal */}
            <ActionCard
              icon="🎯"
              title={`Daily Goal: ${progressSummary.dailyProblems}/${progressSummary.dailyGoal} problems`}
              description={
                progressSummary.dailyProblems >= progressSummary.dailyGoal
                  ? 'Great job! You completed your daily goal'
                  : `Solve ${progressSummary.dailyGoal - progressSummary.dailyProblems} more to complete your daily goal`
              }
              buttonLabel="Complete Daily Goal"
              buttonColor="#D97757"
              onAction={handleContinuePractice}
              metadata={{
                time: '~10 min',
                xp: 10,
              }}
            />

            {/* Homework Helper */}
            <ActionCard
              icon="📸"
              title="Need help with homework?"
              description="Upload your math problem and I'll guide you through solving it"
              buttonLabel="Get Help"
              buttonColor="#D97757"
              onAction={goToHomeworkHelper}
              metadata={{
                time: 'As needed',
              }}
            />
          </div>
        </section>

        {/* Divider */}
        <hr className="mb-4 sm:mb-6 lg:mb-8 mx-auto" style={{ borderColor: theme.colors.border, opacity: 0.6, maxWidth: '600px' }} />

        {/* Topic Grid Section */}
        <section className="mb-4 sm:mb-6 lg:mb-8">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h2
              className="text-base sm:text-lg font-bold flex items-center gap-2"
              style={{ color: theme.colors.textPrimary }}
            >
              <span>📚</span>
              <span>{gradeLevel}</span>
            </h2>

            {/* Mode Toggle */}
            <div className="flex flex-col items-end gap-2">
              <div
                className="glass-surface flex items-center rounded-full p-1"
                style={{
                  background: theme.glass.background,
                  border: `1px solid ${theme.glass.border}`,
                  backdropFilter: theme.glass.backdrop,
                }}
              >
                <button
                  onClick={() => setLearningMode('learn')}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: learningMode === 'learn' ? theme.colors.brand : 'transparent',
                    color: learningMode === 'learn' ? '#ffffff' : theme.colors.textSecondary,
                    cursor: 'pointer',
                  }}
                >
                  Learn Mode
                </button>
                <button
                  onClick={() => setLearningMode('practice')}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: learningMode === 'practice' ? theme.colors.brand : 'transparent',
                    color: learningMode === 'practice' ? '#ffffff' : theme.colors.textSecondary,
                    cursor: 'pointer',
                  }}
                >
                  Practice Mode
                </button>
              </div>
              <p className="text-xs" style={{ color: theme.colors.textMuted }}>
                Progress shown for {learningMode === 'learn' ? 'Learn' : 'Practice'} mode only
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {topics
              .filter((topic) => topic.isActive)
              .map((topic) => {
                // Find matching progress data for this topic AND current mode
                const topicProgress = progressSummary.topics.find(
                  (tp) => tp.topicCategory === topic.category && tp.source === learningMode
                );

                // If topic exists in progressSummary for this mode, it means it's been accessed
                // Mark it as "started" even if progress is 0%
                const hasBeenAccessed = !!topicProgress;
                const effectiveProgress = hasBeenAccessed
                  ? Math.max(topicProgress.progress, 0.1) // Treat accessed topics as at least 0.1% to differentiate from truly new
                  : 0;

                return (
                  <ImprovedTopicCard
                    key={topic.id}
                    topic={topic}
                    progress={effectiveProgress}
                    xpEarned={topicProgress?.xpEarned || 0}
                    lastAccessed={topicProgress?.lastAccessed}
                    mode={learningMode}
                  />
                );
              })}
          </div>
        </section>

        {/* Divider */}
        <hr className="mb-4 sm:mb-6 lg:mb-8 mx-auto" style={{ borderColor: theme.colors.border, opacity: 0.6, maxWidth: '600px' }} />

        {/* Progress & Insights Section */}
        <section>
          <h2
            className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2"
            style={{ color: theme.colors.textPrimary }}
          >
            <span>📊</span>
            <span>Progress & Insights</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            {/* Recent Achievements */}
            <RecentAchievementsPanel
              achievements={progressSummary.achievements}
              totalAchievements={progressSummary.totalAchievements}
              onViewAll={() => {
                // TODO: Navigate to achievements page
              }}
            />

            {/* Weekly Activity Chart */}
            <WeeklyActivityChart
              data={weeklyData}
              label="Problems Solved"
              dailyAverage={weeklyData.length > 0 ? Math.round(weeklyData.reduce((sum, d) => sum + d.value, 0) / 7) : 0}
              weekOverWeekChange={progressSummary.weekTrend}
            />
          </div>
        </section>
      </div>
    </div>
  );
};
