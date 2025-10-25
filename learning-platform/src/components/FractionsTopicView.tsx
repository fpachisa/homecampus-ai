import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { useThemeContext } from '../contexts/ThemeContext';
import { sessionStorage } from '../services/sessionStorage';

type TopicId = string;  // Temporary type definition until P6 is migrated

interface FractionsTopicViewProps {
  onSubtopicSelect: (topicId: TopicId) => void;
  onBackToHome: () => void;
}

interface SubtopicInfo {
  id: TopicId;
  name: string;
  description: string;
  icon: string;
  color: string;
}

const subtopics: SubtopicInfo[] = [
  {
    id: 'p6-math-fractions-dividing-whole-numbers',
    name: 'Dividing Fractions by Whole Numbers',
    description: 'Learn how to divide proper fractions by whole numbers using visual models',
    icon: '➗',
    color: '#5865F2',
  },
  {
    id: 'p6-math-fractions-whole-number-dividing-fractions',
    name: 'Dividing Whole Numbers by Fractions',
    description: 'Understand how to divide whole numbers by proper fractions',
    icon: '🔢',
    color: '#57F287',
  },
  {
    id: 'p6-math-fractions-fraction-dividing-fraction',
    name: 'Dividing Fractions by Fractions',
    description: 'Master dividing proper fractions by proper fractions',
    icon: '📏',
    color: '#FEE75C',
  },
  {
    id: 'p6-math-fractions-word-problems',
    name: 'Word Problems',
    description: 'Apply fraction division skills to solve real-world problems',
    icon: '📝',
    color: '#EB459E',
  },
];

const FractionsTopicView: React.FC<FractionsTopicViewProps> = ({
  onSubtopicSelect,
  onBackToHome,
}) => {
  const { theme } = useTheme();
  const { toggleTheme, isDark } = useThemeContext();

  const getSubtopicStats = (topicId: TopicId) => {
    const preview = sessionStorage.getSessionPreview(topicId);

    if (!preview) {
      return {
        hasStarted: false,
        messageCount: 0,
        problemsCompleted: 0,
        timeElapsed: '',
      };
    }

    return {
      hasStarted: true,
      messageCount: preview.messageCount,
      problemsCompleted: preview.problemsCompleted,
      timeElapsed: sessionStorage.getTimeElapsedString(preview.timestamp),
    };
  };

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
            {/* Back button and title */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onBackToHome}
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
                title="Back to Topics"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex items-center space-x-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold text-white animate-float"
                  style={{ backgroundColor: theme.colors.brand }}
                >
                  ➗
                </div>
                <div>
                  <h1 className="text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
                    Fractions
                  </h1>
                  <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                    Primary 6 Mathematics
                  </p>
                </div>
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
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
              Choose a Subtopic
            </h2>
            <p className="text-base" style={{ color: theme.colors.textSecondary }}>
              Master fraction division through interactive, step-by-step problems
            </p>
          </div>

          {/* Subtopics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subtopics.map((subtopic) => {
              const stats = getSubtopicStats(subtopic.id);

              return (
                <button
                  key={subtopic.id}
                  onClick={() => onSubtopicSelect(subtopic.id)}
                  className="group relative p-8 rounded-2xl transition-all duration-300 text-left"
                  style={{
                    background: theme.glass.background,
                    border: `1px solid ${theme.glass.border}`,
                    backdropFilter: theme.glass.backdrop,
                    boxShadow: theme.shadows.md,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = theme.shadows.glow;
                    e.currentTarget.style.borderColor = subtopic.color + '50';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = theme.shadows.md;
                    e.currentTarget.style.borderColor = theme.glass.border;
                  }}
                >
                  {/* Icon and Title Section */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                      style={{
                        backgroundColor: subtopic.color + '20',
                        color: subtopic.color,
                      }}
                    >
                      {subtopic.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-xl font-semibold mb-2 line-clamp-2"
                        style={{ color: theme.colors.textPrimary }}
                      >
                        {subtopic.name}
                      </h3>
                      <p
                        className="text-sm line-clamp-2"
                        style={{ color: theme.colors.textSecondary }}
                      >
                        {subtopic.description}
                      </p>
                    </div>
                  </div>

                  {/* Statistics Section */}
                  {stats.hasStarted ? (
                    <div className="mt-6 pt-6 border-t" style={{ borderColor: theme.colors.border }}>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-xs mb-1" style={{ color: theme.colors.textMuted }}>
                            Messages
                          </p>
                          <p className="text-lg font-semibold" style={{ color: theme.colors.textPrimary }}>
                            {stats.messageCount}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs mb-1" style={{ color: theme.colors.textMuted }}>
                            Solved
                          </p>
                          <p className="text-lg font-semibold" style={{ color: theme.colors.textPrimary }}>
                            {stats.problemsCompleted}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs mb-1" style={{ color: theme.colors.textMuted }}>
                            Last Active
                          </p>
                          <p className="text-sm font-medium" style={{ color: theme.colors.textSecondary }}>
                            {stats.timeElapsed}
                          </p>
                        </div>
                      </div>

                      <div
                        className="px-4 py-2 rounded-lg text-center text-sm font-medium transition-all duration-200"
                        style={{
                          backgroundColor: subtopic.color + '20',
                          color: subtopic.color,
                        }}
                      >
                        Continue Learning →
                      </div>
                    </div>
                  ) : (
                    <div className="mt-6 pt-6 border-t" style={{ borderColor: theme.colors.border }}>
                      <div
                        className="px-4 py-2 rounded-lg text-center text-sm font-medium transition-all duration-200"
                        style={{
                          backgroundColor: subtopic.color + '20',
                          color: subtopic.color,
                        }}
                      >
                        Start Learning →
                      </div>
                    </div>
                  )}

                  {/* Progress indicator */}
                  {stats.hasStarted && (
                    <div
                      className="absolute top-4 right-4 w-3 h-3 rounded-full"
                      style={{ backgroundColor: subtopic.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Help Section */}
          <div className="mt-12 p-6 rounded-xl" style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop,
          }}>
            <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
              Learning Tips
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: theme.colors.textSecondary }}>
              <li className="flex items-start space-x-2">
                <span style={{ color: theme.colors.brand }}>•</span>
                <span>Start with easier subtopics and progress to more challenging ones</span>
              </li>
              <li className="flex items-start space-x-2">
                <span style={{ color: theme.colors.brand }}>•</span>
                <span>Use hints wisely - try solving on your own first</span>
              </li>
              <li className="flex items-start space-x-2">
                <span style={{ color: theme.colors.brand }}>•</span>
                <span>Review visualizations to understand the concepts better</span>
              </li>
              <li className="flex items-start space-x-2">
                <span style={{ color: theme.colors.brand }}>•</span>
                <span>Your progress is automatically saved</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-6 border-t" style={{ borderColor: theme.colors.border }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm" style={{ color: theme.colors.textMuted }}>
            AI-powered Socratic learning • Progress saved automatically
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FractionsTopicView;
