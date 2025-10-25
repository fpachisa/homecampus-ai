import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { useThemeContext } from '../contexts/ThemeContext';
import { sessionStorage } from '../services/sessionStorage';
import { progressService } from '../services/progressService';
import { S3_MATH_CIRCLE_GEOMETRY } from "../prompt-library/subjects/mathematics/secondary/s3-circle-geometry";

// Define the subtopic IDs for circle geometry
export type CircleGeometryTopicId =
  | 's3-math-circle-geometry-definitions'
  | 's3-math-circle-geometry-angle-semicircle'
  | 's3-math-circle-geometry-chords'
  | 's3-math-circle-geometry-radius-tangent'
  | 's3-math-circle-geometry-tangents-external'
  | 's3-math-circle-geometry-angle-centre'
  | 's3-math-circle-geometry-angle-same-arc';

interface CircleGeometryTopicViewProps {
  onSubtopicSelect: (topicId: CircleGeometryTopicId) => void;
  onBackToHome: () => void;
}

interface SubtopicInfo {
  id: CircleGeometryTopicId;
  name: string;
  description: string;
  icon: string;
  color: string;
}

const subtopics: SubtopicInfo[] = [
  {
    id: 's3-math-circle-geometry-definitions',
    name: 'Circle Geometry Definitions',
    description: 'Master the fundamental terminology: arcs, chords, segments',
    icon: '⭕',
    color: '#8B5CF6',
  },
  {
    id: 's3-math-circle-geometry-angle-semicircle',
    name: 'Angle in a Semi-circle',
    description: 'Prove and apply the 90° angle theorem',
    icon: '📐',
    color: '#EF4444',
  },
  {
    id: 's3-math-circle-geometry-chords',
    name: 'Chords of a Circle',
    description: 'Explore equal chords and perpendicular bisector theorems',
    icon: '📏',
    color: '#3B82F6',
  },
  {
    id: 's3-math-circle-geometry-radius-tangent',
    name: 'Radius-Tangent Theorem',
    description: 'Understand the perpendicular relationship',
    icon: '📍',
    color: '#10B981',
  },
  {
    id: 's3-math-circle-geometry-tangents-external',
    name: 'Tangents from External Point',
    description: 'Prove and use the equal tangents theorem',
    icon: '✏️',
    color: '#14B8A6',
  },
  {
    id: 's3-math-circle-geometry-angle-centre',
    name: 'Angle at the Centre',
    description: 'Master the central angle = 2 × inscribed angle theorem',
    icon: '🎯',
    color: '#F59E0B',
  },
  {
    id: 's3-math-circle-geometry-angle-same-arc',
    name: 'Angles in Same Segment',
    description: 'Explore equal angles and cyclic quadrilaterals',
    icon: '🔵',
    color: '#A855F7',
  },
];

const CircleGeometryTopicView: React.FC<CircleGeometryTopicViewProps> = ({
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

  const getSubtopicStats = (topicId: CircleGeometryTopicId) => {
    const preview = sessionStorage.getSessionPreview(topicId as any);
    const progress = progressService.loadProgress(topicId as any);

    // Check if all sections are mastered (completed)
    const subtopicConfig = S3_MATH_CIRCLE_GEOMETRY[topicId];
    const sections = (subtopicConfig as any)?.progressionStructure?.sections || [];
    const totalSections = sections.length;

    const masteredSections = progress?.sectionProgress?.masteredSections || [];
    const isCompleted = totalSections > 0 && masteredSections.length === totalSections;

    // Debug logging
    console.log(`[${topicId}] Progress check:`, {
      totalSections,
      masteredSections,
      masteredCount: masteredSections.length,
      isCompleted,
      hasProgress: !!progress,
      hasSectionProgress: !!progress?.sectionProgress
    });

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
            'radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)',
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
                  ⭕
                </div>
                <div>
                  <h1 className="text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
                    Circle Geometry
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
              Learn circle geometry theorems through logical reasoning and proof
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

export default CircleGeometryTopicView;
