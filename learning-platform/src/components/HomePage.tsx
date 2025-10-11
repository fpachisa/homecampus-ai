import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { useThemeContext } from '../contexts/ThemeContext';

interface Topic {
  id: string;
  name: string;
  icon: string;
  description: string;
  subtopicCount: number;
  isActive: boolean;
  category?: 'fractions' | 's3-math-trigonometry' | 's3-math-circle-geometry' | 's3-math-quadratic-equations';
  grade?: string;
  subject?: string;
}

const topics: Topic[] = [
  // Secondary 3 Mathematics
  {
    id: 's3-trigonometry',
    name: 'Trigonometry',
    icon: '📐',
    description: 'Master trigonometric ratios: sine, cosine, and tangent',
    subtopicCount: 7,
    isActive: true,
    category: 's3-math-trigonometry',
    grade: 'Secondary 3',
    subject: 'Mathematics',
  },
  {
    id: 's3-circle-geometry',
    name: 'Circle Geometry',
    icon: '⭕',
    description: 'Prove geometric theorems: angles, chords, tangents',
    subtopicCount: 7,
    isActive: true,
    category: 's3-math-circle-geometry',
    grade: 'Secondary 3',
    subject: 'Mathematics',
  },
  {
    id: 'quadratic-equations',
    name: 'Quadratic Equations',
    icon: '📈',
    description: 'Solving, graphing, and applying quadratic equations and functions',
    subtopicCount: 13,
    isActive: true,
    category: 's3-math-quadratic-equations',
    grade: 'Secondary 3',
    subject: 'Mathematics',
  },
];

interface HomePageProps {
  onTopicSelect: (category: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onTopicSelect }) => {
  const { theme } = useTheme();
  const { toggleTheme, isDark } = useThemeContext();

  // Group topics by grade
  const groupedTopics = topics.reduce((acc, topic) => {
    const grade = topic.grade || 'Other';
    if (!acc[grade]) {
      acc[grade] = [];
    }
    acc[grade].push(topic);
    return acc;
  }, {} as Record<string, Topic[]>);

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
                  Personalized AI Learning
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
              Select a topic to begin your learning journey
            </p>
          </div>

          {/* Topics by Grade */}
          {Object.entries(groupedTopics).map(([grade, gradeTopics]) => (
            <div key={grade} className="mb-12">
              <h3 className="text-xl font-semibold mb-4" style={{ color: theme.colors.textPrimary }}>
                {grade} Mathematics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {gradeTopics.map((topic) => {
              const isActive = topic.isActive;

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
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-6 border-t" style={{ borderColor: theme.colors.border }}>
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
