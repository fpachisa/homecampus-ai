import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useThemeContext } from '../contexts/ThemeContext';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { ProfileMenu, AuthModal } from './auth';
import { ProfileSwitcher } from './ProfileSwitcher';
import { ParentDashboard } from './parent/ParentDashboard';
import { useActiveProfile } from '../contexts/ActiveProfileContext';
import { GradeSelector } from './GradeSelector';
import { topicsByGrade, getTopicsByGrade, GRADE_LEVELS, type Topic, type GradeLevel } from '../config/topicsByGrade';

const HomePage: React.FC = () => {
  const { goToLearn, goToPractice } = useAppNavigation();
  const { theme } = useTheme();
  const { toggleTheme, isDark } = useThemeContext();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { isViewingAsParent, activeProfile, canSwitchProfiles } = useActiveProfile();

  // State for exploring other grades
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel | null>(null);
  const [showOtherGrades, setShowOtherGrades] = useState(false);

  // Only calculate grade/topic info for students (not when viewing as parent)
  const currentGrade = !isViewingAsParent ? ((activeProfile?.gradeLevel as GradeLevel) || 'Secondary 3') : 'Secondary 3';
  const displayGrade = selectedGrade || currentGrade;

  // Get topics for the display grade (only used for students)
  const myTopics = getTopicsByGrade(currentGrade);
  const displayTopics = getTopicsByGrade(displayGrade);

  // Other grades to explore (excluding current grade)
  const otherGrades = GRADE_LEVELS.filter(grade => grade !== currentGrade);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: theme.gradients.panel,
        color: theme.colors.textPrimary,
      }}
    >
      {/* Background texture */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(88, 101, 242, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(71, 82, 196, 0.05) 0%, transparent 50%)',
        }}
      />

      {/* Header */}
      <header className="relative z-[100] px-8 py-4 border-b" style={{ borderColor: theme.colors.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold text-white animate-float"
                style={{ backgroundColor: theme.colors.brand }}
              >
                📚
              </div>
              <div>
                <h1 className="text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
                  Home Campus
                </h1>
                <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                  AI-Powered Home Learning
                </p>
              </div>
            </div>

            {/* Theme toggle and user section */}
            <div className="flex items-center space-x-4">
              {/* Profile Switcher (for parents to switch between children) - only show for parents */}
              {canSwitchProfiles && <ProfileSwitcher />}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-200"
                style={{
                  backgroundColor: theme.colors.interactive,
                  color: theme.colors.textSecondary,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.brand;
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.interactive;
                  e.currentTarget.style.color = theme.colors.textSecondary;
                }}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Profile Menu */}
              <ProfileMenu onOpenAuth={() => setAuthModalOpen(true)} />
            </div>
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultView="signIn"
      />

      {/* Main Content */}
      <main className="relative z-10 flex-1 px-8 py-6">
        {isViewingAsParent ? (
          <ParentDashboard />
        ) : (
          <div className="max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-semibold" style={{ color: theme.colors.textPrimary }}>
                    {activeProfile
                      ? `${displayGrade} Mathematics`
                      : 'Choose a topic to begin your learning journey'}
                  </h2>
                </div>
                {activeProfile && (
                  <GradeSelector
                    currentGrade={displayGrade}
                    onGradeChange={(grade) => {
                      setSelectedGrade(grade);
                      setShowOtherGrades(false);
                    }}
                  />
                )}
              </div>

              {/* Info banner when viewing different grade */}
              {selectedGrade && selectedGrade !== currentGrade && (
                <div
                  className="p-4 rounded-xl flex items-center justify-between mb-6"
                  style={{
                    backgroundColor: theme.colors.info + '20',
                    border: `1px solid ${theme.colors.info}`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👀</span>
                    <div>
                      <p className="font-medium" style={{ color: theme.colors.textPrimary }}>
                        Exploring {selectedGrade} topics
                      </p>
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        Your grade is {currentGrade}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedGrade(null)}
                    className="px-4 py-2 rounded-lg font-medium transition-all"
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
                    Back to My Topics
                  </button>
                </div>
              )}
            </div>

            {/* Main Topics Grid */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayTopics.map((topic) => {
                  const isActive = topic.isActive;

                    return (
                      <div
                        key={topic.id}
                        className="group relative p-6 rounded-2xl transition-all duration-300 text-left"
                        style={{
                          background: isActive ? theme.glass.background : theme.colors.interactive,
                          border: `1px solid ${theme.glass.border}`,
                          backdropFilter: isActive ? theme.glass.backdrop : 'none',
                          opacity: isActive ? 1 : 0.5,
                          boxShadow: theme.shadows.md,
                        }}
                        onMouseEnter={(e) => {
                          if (isActive) {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = theme.shadows.glow;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (isActive) {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = theme.shadows.md;
                          }
                        }}
                      >
                        {/* Icon */}
                        <div
                          className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4"
                          style={{
                            backgroundColor: isActive ? theme.colors.brand : theme.colors.interactive,
                            color: isActive ? '#ffffff' : theme.colors.textMuted,
                          }}
                        >
                          {topic.icon}
                        </div>

                        {/* Title */}
                        <h3
                          className="text-lg font-semibold mb-2"
                          style={{ color: isActive ? theme.colors.textPrimary : theme.colors.textMuted }}
                        >
                          {topic.name}
                        </h3>

                        {/* Description */}
                        <p
                          className="text-sm mb-4 line-clamp-2"
                          style={{ color: isActive ? theme.colors.textSecondary : theme.colors.textMuted }}
                        >
                          {topic.description}
                        </p>

                        {/* Action Buttons or Coming Soon */}
                        {isActive ? (
                          <div className="flex gap-3 mt-4">
                            <button
                              onClick={() => goToLearn(topic.category!, undefined, true)}
                              className="flex-1 py-2.5 px-4 rounded-lg font-medium transition-all duration-200"
                              style={{
                                background: theme.gradients.brand,
                                color: '#ffffff',
                                boxShadow: theme.shadows.sm,
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.02)';
                                e.currentTarget.style.boxShadow = theme.shadows.md;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = theme.shadows.sm;
                              }}
                            >
                              Learn
                            </button>
                            <button
                              onClick={() => goToPractice(topic.category!)}
                              className="flex-1 py-2.5 px-4 rounded-lg font-medium transition-all duration-200"
                              style={{
                                backgroundColor: 'transparent',
                                color: theme.colors.brand,
                                border: `2px solid ${theme.colors.brand}`,
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = theme.colors.brand;
                                e.currentTarget.style.color = '#ffffff';
                                e.currentTarget.style.transform = 'scale(1.02)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = theme.colors.brand;
                                e.currentTarget.style.transform = 'scale(1)';
                              }}
                            >
                              Practice
                            </button>
                          </div>
                        ) : (
                          <div
                            className="text-sm font-medium mt-4"
                            style={{ color: theme.colors.textMuted }}
                          >
                            Coming Soon
                          </div>
                        )}

                        {/* Active indicator */}
                        {isActive && (
                          <div
                            className="absolute top-4 right-4 w-3 h-3 rounded-full"
                            style={{ backgroundColor: theme.colors.success }}
                          />
                        )}

                        {/* Subtopic count */}
                        {isActive && (
                          <div className="mt-3 text-xs" style={{ color: theme.colors.textMuted }}>
                            {topic.subtopicCount} subtopics
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Explore Other Grades Section */}
            {!selectedGrade && otherGrades.length > 0 && (
              <div className="mt-12">
                <button
                  onClick={() => setShowOtherGrades(!showOtherGrades)}
                  className="w-full flex items-center justify-between p-6 rounded-xl transition-all"
                  style={{
                    background: theme.glass.background,
                    border: `1px solid ${theme.glass.border}`,
                    backdropFilter: theme.glass.backdrop,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = theme.shadows.md;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔍</span>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold" style={{ color: theme.colors.textPrimary }}>
                        Explore Other Grades
                      </h3>
                      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                        Preview topics from other grade levels
                      </p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 transition-transform ${showOtherGrades ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showOtherGrades && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {otherGrades.map((grade) => {
                      const gradeTopics = getTopicsByGrade(grade);
                      const activeCount = gradeTopics.filter(t => t.isActive).length;
                      const totalCount = gradeTopics.length;

                      return (
                        <button
                          key={grade}
                          onClick={() => setSelectedGrade(grade)}
                          className="p-6 rounded-xl text-left transition-all"
                          style={{
                            background: theme.glass.background,
                            border: `1px solid ${theme.glass.border}`,
                            backdropFilter: theme.glass.backdrop,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = theme.shadows.glow;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                              style={{ backgroundColor: theme.colors.brand }}
                            >
                              📚
                            </div>
                            <h4 className="text-lg font-semibold" style={{ color: theme.colors.textPrimary }}>
                              {grade}
                            </h4>
                          </div>
                          <p className="text-sm mb-3" style={{ color: theme.colors.textSecondary }}>
                            {totalCount} topics in Mathematics
                          </p>
                          <div className="flex items-center gap-2">
                            {activeCount > 0 ? (
                              <>
                                <div
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: theme.colors.success }}
                                />
                                <span className="text-xs font-medium" style={{ color: theme.colors.success }}>
                                  {activeCount} Available
                                </span>
                              </>
                            ) : (
                              <>
                                <div
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: theme.colors.textMuted }}
                                />
                                <span className="text-xs" style={{ color: theme.colors.textMuted }}>
                                  Coming Soon
                                </span>
                              </>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-4 border-t" style={{ borderColor: theme.colors.border }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm" style={{ color: theme.colors.textMuted }}>
            AI-powered Socratic learning for Secondary 3 students
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
