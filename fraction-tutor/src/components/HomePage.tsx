import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { useThemeContext } from '../contexts/ThemeContext';
import { sessionStorage } from '../services/sessionStorage';
import type { TopicId } from '../prompts/topics/P6-Math-Fractions';

interface Topic {
  id: string;
  name: string;
  icon: string;
  description: string;
  subtopicCount: number;
  isActive: boolean;
  category?: 'fractions';
}

const topics: Topic[] = [
  {
    id: 'fractions',
    name: 'Fractions',
    icon: '➗',
    description: 'Master fraction operations through interactive problem-solving',
    subtopicCount: 4,
    isActive: true,
    category: 'fractions',
  },
  {
    id: 'whole-numbers',
    name: 'Whole Numbers',
    icon: '🔢',
    description: 'Operations with whole numbers',
    subtopicCount: 0,
    isActive: false,
  },
  {
    id: 'percentages',
    name: 'Percentages',
    icon: '%',
    description: 'Understanding and calculating percentages',
    subtopicCount: 0,
    isActive: false,
  },
  {
    id: 'algebra',
    name: 'Algebra',
    icon: '🔤',
    description: 'Introduction to algebraic thinking',
    subtopicCount: 0,
    isActive: false,
  },
  {
    id: 'decimals',
    name: 'Decimals',
    icon: '🔟',
    description: 'Decimal operations and conversions',
    subtopicCount: 0,
    isActive: false,
  },
  {
    id: 'ratios',
    name: 'Ratios',
    icon: '⚖️',
    description: 'Understanding and working with ratios',
    subtopicCount: 0,
    isActive: false,
  },
  {
    id: 'geometry',
    name: 'Geometry',
    icon: '📐',
    description: 'Shapes, angles, and spatial reasoning',
    subtopicCount: 0,
    isActive: false,
  },
  {
    id: 'measurement',
    name: 'Measurement',
    icon: '📏',
    description: 'Length, area, volume, and time',
    subtopicCount: 0,
    isActive: false,
  },
];

interface HomePageProps {
  onTopicSelect: (category: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onTopicSelect }) => {
  const { theme } = useTheme();
  const { toggleTheme, isDark } = useThemeContext();

  // Get progress for Fractions topic
  const getFractionsProgress = () => {
    const fractionTopicIds = [
      'p6-math-fractions-dividing-whole-numbers',
      'p6-math-fractions-whole-number-dividing-fractions',
      'p6-math-fractions-fraction-dividing-fraction',
      'p6-math-fractions-word-problems',
    ] as TopicId[];

    const sessionsWithProgress = fractionTopicIds.filter(
      (topicId) => sessionStorage.getSessionPreview(topicId) !== null
    );

    return {
      started: sessionsWithProgress.length > 0,
      completedSubtopics: sessionsWithProgress.length,
      totalSubtopics: fractionTopicIds.length,
    };
  };

  const fractionsProgress = getFractionsProgress();

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
      <header className="relative z-10 px-8 py-6 border-b" style={{ borderColor: theme.colors.border }}>
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
                  AI Campus
                </h1>
                <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                  Primary 6 Mathematics
                </p>
              </div>
            </div>

            {/* Theme toggle and user section */}
            <div className="flex items-center space-x-4">
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

              {/* User Avatar */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: theme.colors.brand,
                  color: '#ffffff',
                }}
              >
                👤
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
              Choose a Topic
            </h2>
            <p className="text-base" style={{ color: theme.colors.textSecondary }}>
              Select a mathematics topic to begin your learning journey
            </p>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {topics.map((topic) => {
              const isActive = topic.isActive;
              const showProgress = topic.id === 'fractions' && fractionsProgress.started;

              return (
                <button
                  key={topic.id}
                  onClick={() => isActive && onTopicSelect(topic.category!)}
                  disabled={!isActive}
                  className="group relative p-6 rounded-2xl transition-all duration-300 text-left"
                  style={{
                    background: isActive ? theme.glass.background : theme.colors.interactive,
                    border: `1px solid ${theme.glass.border}`,
                    backdropFilter: isActive ? theme.glass.backdrop : 'none',
                    opacity: isActive ? 1 : 0.5,
                    cursor: isActive ? 'pointer' : 'not-allowed',
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

                  {/* Subtopic count or Coming Soon */}
                  {isActive ? (
                    <div className="flex items-center justify-between">
                      <span className="text-sm" style={{ color: theme.colors.textMuted }}>
                        {topic.subtopicCount} subtopics
                      </span>
                      {showProgress && (
                        <span
                          className="text-xs px-2 py-1 rounded-full"
                          style={{
                            backgroundColor: `${theme.colors.brand}20`,
                            color: theme.colors.brand,
                          }}
                        >
                          {fractionsProgress.completedSubtopics}/{fractionsProgress.totalSubtopics} started
                        </span>
                      )}
                    </div>
                  ) : (
                    <div
                      className="text-sm font-medium"
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
                </button>
              );
            })}
          </div>

          {/* Recent Activity Section */}
          {fractionsProgress.started && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4" style={{ color: theme.colors.textPrimary }}>
                Continue Learning
              </h3>
              <button
                onClick={() => onTopicSelect('fractions')}
                className="p-4 rounded-xl flex items-center space-x-4 transition-all duration-200"
                style={{
                  background: theme.glass.background,
                  border: `1px solid ${theme.glass.border}`,
                  backdropFilter: theme.glass.backdrop,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.boxShadow = theme.shadows.md;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                  style={{ backgroundColor: theme.colors.brand, color: '#ffffff' }}
                >
                  ➗
                </div>
                <div className="flex-1">
                  <p className="font-medium" style={{ color: theme.colors.textPrimary }}>
                    Fractions
                  </p>
                  <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                    {fractionsProgress.completedSubtopics} of {fractionsProgress.totalSubtopics} subtopics in progress
                  </p>
                </div>
                <svg
                  className="w-6 h-6"
                  style={{ color: theme.colors.textMuted }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-6 border-t" style={{ borderColor: theme.colors.border }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm" style={{ color: theme.colors.textMuted }}>
            AI-powered Socratic learning for Primary 6 students
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
