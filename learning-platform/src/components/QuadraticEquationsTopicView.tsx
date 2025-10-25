import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { useThemeContext } from '../contexts/ThemeContext';
import { sessionStorage } from '../services/sessionStorage';
import { progressService } from '../services/progressService';
import { S3_MATH_QUADRATIC_EQUATIONS } from "../prompt-library/subjects/mathematics/secondary/s3-quadratic-equations";

// Define the subtopic IDs for quadratic equations
export type QuadraticEquationsTopicId =
  | 's3-math-quadratic-solving-standard-form'
  | 's3-math-quadratic-solving-factorization'
  | 's3-math-quadratic-solving-fractional'
  | 's3-math-quadratic-solving-completing-square'
  | 's3-math-quadratic-solving-formula'
  | 's3-math-quadratic-solving-exponential'
  | 's3-math-quadratic-word-problems'
  | 's3-math-quadratic-graph-features'
  | 's3-math-quadratic-graph-completed-square'
  | 's3-math-quadratic-graph-factorised'
  | 's3-math-quadratic-graph-polynomial'
  | 's3-math-quadratic-graph-finding-function'
  | 's3-math-quadratic-graph-problem-solving';

interface QuadraticEquationsTopicViewProps {
  onSubtopicSelect: (topicId: QuadraticEquationsTopicId) => void;
  onBackToHome: () => void;
}

interface SubtopicInfo {
  id: QuadraticEquationsTopicId;
  name: string;
  description: string;
  icon: string;
  color: string;
}

const subtopics: SubtopicInfo[] = [
  {
    id: 's3-math-quadratic-solving-standard-form',
    name: 'Solving ax² = k',
    description: 'Learn the square root method for simple quadratic equations',
    icon: '🔢',
    color: '#3B82F6',
  },
  {
    id: 's3-math-quadratic-solving-factorization',
    name: 'Solving by Factorization',
    description: 'Master factoring techniques and the zero product property',
    icon: '✂️',
    color: '#8B5CF6',
  },
  {
    id: 's3-math-quadratic-solving-fractional',
    name: 'Fractional Equations',
    description: 'Solve fractional equations that reduce to quadratics',
    icon: '➗',
    color: '#EC4899',
  },
  {
    id: 's3-math-quadratic-solving-completing-square',
    name: 'Completing the Square',
    description: 'Transform to perfect square form and find vertex form',
    icon: '◼️',
    color: '#10B981',
  },
  {
    id: 's3-math-quadratic-solving-formula',
    name: 'Quadratic Formula',
    description: 'Apply the universal quadratic formula to any equation',
    icon: '📐',
    color: '#F59E0B',
  },
  {
    id: 's3-math-quadratic-solving-exponential',
    name: 'Exponential Quadratics',
    description: 'Use substitution to solve exponential equations',
    icon: '⚡',
    color: '#EF4444',
  },
  {
    id: 's3-math-quadratic-word-problems',
    name: 'Word Problems & Optimization',
    description: 'Apply quadratics to real-world scenarios and optimization',
    icon: '💡',
    color: '#06B6D4',
  },
  {
    id: 's3-math-quadratic-graph-features',
    name: 'Graph Features',
    description: 'Identify parabola shape, vertex, intercepts, and axis',
    icon: '📊',
    color: '#14B8A6',
  },
  {
    id: 's3-math-quadratic-graph-completed-square',
    name: 'Graphing: Vertex Form',
    description: 'Sketch f(x) = a(x - h)² + k using transformations',
    icon: '🎯',
    color: '#8B5CF6',
  },
  {
    id: 's3-math-quadratic-graph-factorised',
    name: 'Graphing: Factorised Form',
    description: 'Sketch f(x) = a(x - p)(x - q) using roots',
    icon: '🔍',
    color: '#6366F1',
  },
  {
    id: 's3-math-quadratic-graph-polynomial',
    name: 'Graphing: Standard Form',
    description: 'Sketch f(x) = ax² + bx + c from standard form',
    icon: '📈',
    color: '#10B981',
  },
  {
    id: 's3-math-quadratic-graph-finding-function',
    name: 'Finding Functions from Graphs',
    description: 'Work backwards: graph features to equation',
    icon: '🔎',
    color: '#F59E0B',
  },
  {
    id: 's3-math-quadratic-graph-problem-solving',
    name: 'Graphing for Problem Solving',
    description: 'Use graphs for optimization and real-world modeling',
    icon: '🎨',
    color: '#EC4899',
  },
];

const QuadraticEquationsTopicView: React.FC<QuadraticEquationsTopicViewProps> = ({
  onSubtopicSelect,
  onBackToHome,
}) => {
  const { theme } = useTheme();
  const { toggleTheme, isDark } = useThemeContext();

  // Force re-render to pick up latest progress
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);

  React.useEffect(() => {
    // Re-check progress when component mounts
    forceUpdate();
  }, []);

  const getSubtopicStats = (topicId: QuadraticEquationsTopicId) => {
    const preview = sessionStorage.getSessionPreview(topicId as any);
    const progress = progressService.loadProgress(topicId as any);

    // Check if all sections are mastered (completed)
    const subtopicConfig = S3_MATH_QUADRATIC_EQUATIONS[topicId];
    const sections = (subtopicConfig as any)?.progressionStructure?.sections || [];
    const totalSections = sections.length;

    const masteredSections = progress?.sectionProgress?.masteredSections || [];
    const isCompleted = totalSections > 0 && masteredSections.length === totalSections;

    if (!preview) {
      return {
        hasStarted: false,
        messageCount: 0,
        problemsCompleted: 0,
        timeElapsed: '',
        isCompleted: false,
        sectionsCompleted: 0,
        totalSections,
      };
    }

    return {
      hasStarted: true,
      messageCount: preview.messageCount,
      problemsCompleted: preview.problemsCompleted,
      timeElapsed: sessionStorage.getTimeElapsedString(preview.timestamp),
      isCompleted,
      sectionsCompleted: masteredSections.length,
      totalSections,
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
            'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)',
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
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold text-white"
                  style={{ backgroundColor: theme.colors.brand }}
                >
                  📈
                </div>
                <div>
                  <h1 className="text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
                    Quadratic Equations and Functions
                  </h1>
                  <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                    Secondary 3 Mathematics
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
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
              Choose a Subtopic
            </h2>
            <p className="text-base" style={{ color: theme.colors.textSecondary }}>
              Master solving, graphing, and applying quadratic equations
            </p>
          </div>

          {/* Subtopics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subtopics.map((subtopic) => {
              const stats = getSubtopicStats(subtopic.id);

              return (
                <button
                  key={subtopic.id}
                  onClick={() => onSubtopicSelect(subtopic.id)}
                  className="group relative p-6 rounded-2xl transition-all duration-300 text-left"
                  style={{
                    background: theme.glass.background,
                    border: `1px solid ${theme.glass.border}`,
                    backdropFilter: theme.glass.backdrop,
                    boxShadow: theme.shadows.md,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = theme.shadows.glow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = theme.shadows.md;
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4"
                    style={{
                      backgroundColor: subtopic.color,
                      color: '#ffffff',
                    }}
                  >
                    {subtopic.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: theme.colors.textPrimary }}
                  >
                    {subtopic.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm mb-4"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    {subtopic.description}
                  </p>

                  {/* Status */}
                  {stats.isCompleted ? (
                    <div className="flex items-center space-x-2">
                      <div
                        className="flex items-center justify-center w-5 h-5 rounded-full"
                        style={{ backgroundColor: theme.colors.success }}
                      >
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-sm font-semibold" style={{ color: theme.colors.success }}>
                        Completed
                      </span>
                    </div>
                  ) : stats.hasStarted ? (
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: '#FFA500' }}
                        />
                        <span className="text-sm" style={{ color: theme.colors.textMuted }}>
                          In Progress
                        </span>
                      </div>
                      {stats.totalSections > 0 && (
                        <span className="text-xs" style={{ color: theme.colors.textMuted }}>
                          {stats.sectionsCompleted}/{stats.totalSections} sections
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm" style={{ color: theme.colors.textMuted }}>
                        Not Started
                      </span>
                    </div>
                  )}

                  {/* Hover Arrow */}
                  <div
                    className="absolute top-6 right-6 transition-all duration-200 opacity-0 group-hover:opacity-100"
                    style={{ color: theme.colors.brand }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>
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

export default QuadraticEquationsTopicView;
