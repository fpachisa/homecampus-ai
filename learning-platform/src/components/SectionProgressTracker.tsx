import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import type { SectionProgressState } from '../types/types';
import { S3_MATH_TRIGONOMETRY } from '../prompt-library/subjects/mathematics/secondary/s3-trigonometry';
import type { TrigonometryTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-trigonometry';
import { S3_MATH_CIRCLE_GEOMETRY } from '../prompt-library/subjects/mathematics/secondary/s3-circle-geometry';
import type { CircleGeometryTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-circle-geometry';
import { S3_MATH_QUADRATIC_EQUATIONS } from '../prompt-library/subjects/mathematics/secondary/s3-quadratic-equations';
import type { QuadraticEquationsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-quadratic-equations';
import { S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-exponential-logarithms';
import type { ExponentialLogarithmsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-exponential-logarithms';
import { S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
import type { SetsVennDiagramsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
import { S3_MATH_EXPONENTS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-exponents';
import type { ExponentsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-exponents';
import { S3_MATH_SURDS_RADICALS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-surds-radicals';
import type { SurdsRadicalsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-surds-radicals';
import { S3_MATH_STATISTICS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-statistics';
import type { StatisticsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-statistics';
import { S3_MATH_RELATIONS_FUNCTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-relations-functions';
import type { RelationsFunctionsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-relations-functions';
import { S3_MATH_COORDINATE_GEOMETRY_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-coordinate-geometry';
import type { CoordinateGeometryTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-coordinate-geometry';
import { DIFFERENTIAL_CALCULUS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-differential-calculus';
import type { DifferentialCalculusTopicId } from '../prompt-library/subjects/mathematics/secondary/s4-differential-calculus';
import { S4_MATH_INTEGRATION_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-integration';
import type { IntegrationTopicId } from '../prompt-library/subjects/mathematics/secondary/s4-integration';
import { S4_MATH_PROBABILITY_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-probability';
import type { ProbabilityTopicId } from '../prompt-library/subjects/mathematics/secondary/s4-probability';

interface SectionProgressTrackerProps {
  topicId: string;
  sectionProgress: SectionProgressState;
  onSectionClick: (sectionId: string) => void;
  messages: import('../types/types').Message[];  // To detect which sections have been started
  compact?: boolean;  // Compact mode for header integration
}

const SectionProgressTracker: React.FC<SectionProgressTrackerProps> = ({
  topicId,
  sectionProgress,
  onSectionClick,
  messages,
  compact = false
}) => {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  // Get topic configuration
  const getTopicSections = () => {
    if (topicId.startsWith('s3-math-trigonometry-')) {
      const subtopic = S3_MATH_TRIGONOMETRY[topicId as TrigonometryTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s3-math-circle-geometry-')) {
      const subtopic = S3_MATH_CIRCLE_GEOMETRY[topicId as CircleGeometryTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s3-math-quadratic-')) {
      const subtopic = S3_MATH_QUADRATIC_EQUATIONS[topicId as QuadraticEquationsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s3-math-exponential-logarithms-')) {
      const subtopic = S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS[topicId as ExponentialLogarithmsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s3-math-sets-')) {
      const subtopic = S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS[topicId as SetsVennDiagramsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s3-math-exponents-')) {
      const subtopic = S3_MATH_EXPONENTS_SUBTOPICS[topicId as ExponentsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s3-math-surds-')) {
      const subtopic = S3_MATH_SURDS_RADICALS_SUBTOPICS[topicId as SurdsRadicalsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s3-math-statistics-')) {
      const subtopic = S3_MATH_STATISTICS_SUBTOPICS[topicId as StatisticsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s3-math-relations-')) {
      const subtopic = S3_MATH_RELATIONS_FUNCTIONS_SUBTOPICS[topicId as RelationsFunctionsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s3-math-coord-geom-')) {
      const subtopic = S3_MATH_COORDINATE_GEOMETRY_SUBTOPICS[topicId as CoordinateGeometryTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // S4 Differential Calculus topics (direct topic IDs, no prefix)
    const differentialCalculusTopics = ['s4-math-differential-calculus-limits', 's4-math-differential-calculus-gradient-tangent', 's4-math-differential-calculus-derivative-function', 's4-math-differential-calculus-first-principles', 's4-math-differential-calculus-differentiation-rules', 's4-math-differential-calculus-tangent-equations', 's4-math-differential-calculus-stationary-points'];
    if (differentialCalculusTopics.includes(topicId)) {
      const subtopic = DIFFERENTIAL_CALCULUS_SUBTOPICS[topicId as DifferentialCalculusTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // S4 Integration topics
    if (topicId.startsWith('s4-math-integration-')) {
      const subtopic = S4_MATH_INTEGRATION_SUBTOPICS[topicId as IntegrationTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // S4 Probability topics
    if (topicId.startsWith('s4-math-probability-')) {
      const subtopic = S4_MATH_PROBABILITY_SUBTOPICS[topicId as ProbabilityTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    return [];
  };

  const sections = getTopicSections();

  if (sections.length === 0) {
    return null; // No sections to display
  }

  const getSectionStatus = (sectionId: string): 'completed' | 'current' | 'in-progress' | 'upcoming' => {
    if (sectionProgress.masteredSections.includes(sectionId)) {
      return 'completed';
    }
    if (sectionProgress.currentSection === sectionId) {
      return 'current';
    }
    // Check if this section has been started (has messages)
    const hasSectionMessages = messages.some(m => m.sectionId === sectionId);
    if (hasSectionMessages) {
      return 'in-progress';
    }
    return 'upcoming';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'current':
        return '→';
      case 'in-progress':
        return '◐';  // Half-filled circle to indicate partial progress
      case 'upcoming':
        return '•';
      default:
        return '•';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#10b981'; // green
      case 'current':
        return '#f59e0b'; // orange
      case 'in-progress':
        return '#3b82f6'; // blue - started but not mastered
      case 'upcoming':
        return '#9ca3af'; // gray
      default:
        return '#9ca3af';
    }
  };

  const getDifficultyBadge = (difficulty: string) => {
    const colors = {
      foundational: '#3b82f6', // blue
      intermediate: '#8b5cf6', // purple
      advanced: '#ef4444' // red
    };
    return colors[difficulty as keyof typeof colors] || '#6b7280';
  };

  // Compact mode: just circles, no wrapper or counter
  if (compact) {
    return (
      <div className="flex items-center space-x-1">
        {sections.map((section: any, index: number) => {
          const status = getSectionStatus(section.id);
          const statusColor = getStatusColor(status);
          const isActive = status === 'current';

          return (
            <React.Fragment key={section.id}>
              {/* Step indicator - smaller for header */}
              <div
                className="relative group cursor-pointer"
                onClick={() => onSectionClick(section.id)}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold transition-all hover:scale-110 ${
                    isActive ? 'ring-2 ring-offset-1' : ''
                  }`}
                  style={{
                    backgroundColor: status === 'upcoming' ? theme.colors.chat : statusColor,
                    color: status === 'upcoming' ? theme.colors.textMuted : '#ffffff',
                    border: status === 'upcoming' ? `2px solid ${theme.colors.interactive}` : 'none',
                    opacity: status === 'in-progress' ? 0.9 : 1
                  }}
                >
                  {status === 'completed' ? '✓' : index + 1}
                </div>

                {/* Tooltip on hover */}
                <div
                  className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 rounded shadow-lg z-50"
                  style={{
                    backgroundColor: theme.colors.chat,
                    border: `1px solid ${statusColor}`,
                    fontSize: '11px',
                    color: theme.colors.textPrimary,
                    maxWidth: '200px',
                    textAlign: 'center',
                    whiteSpace: 'normal',
                    wordWrap: 'break-word'
                  }}
                >
                  {section.title}
                </div>
              </div>

              {/* Connector line - shorter for compact */}
              {index < sections.length - 1 && (
                <div
                  className="w-3 h-0.5"
                  style={{
                    backgroundColor: status === 'completed' ? '#10b981' : theme.colors.interactive
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  // Full mode: with border, background, expand/collapse
  return (
    <div
      className="border-b px-4 py-2.5"
      style={{
        backgroundColor: theme.colors.chat,
        borderColor: theme.colors.interactive
      }}
    >
      {/* Compact Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium" style={{ color: theme.colors.textPrimary }}>
            Progress
          </span>
          <div className="flex items-center space-x-1.5">
            {sections.map((section: any, index: number) => {
              const status = getSectionStatus(section.id);
              const statusColor = getStatusColor(status);
              const isActive = status === 'current';

              return (
                <React.Fragment key={section.id}>
                  {/* Step indicator */}
                  <div
                    className="relative group cursor-pointer"
                    onClick={() => onSectionClick(section.id)}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all hover:scale-110 ${
                        isActive ? 'ring-2 ring-offset-1' : ''
                      }`}
                      style={{
                        backgroundColor: status === 'upcoming' ? theme.colors.chat : statusColor,
                        color: status === 'upcoming' ? theme.colors.textMuted : '#ffffff',
                        border: status === 'upcoming' ? `2px solid ${theme.colors.interactive}` : 'none',
                        opacity: status === 'in-progress' ? 0.9 : 1  // Slightly transparent to distinguish from current
                      }}
                    >
                      {status === 'completed' ? '✓' : index + 1}
                    </div>

                    {/* Tooltip on hover */}
                    <div
                      className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 rounded shadow-lg z-50"
                      style={{
                        backgroundColor: theme.colors.chat,
                        border: `1px solid ${statusColor}`,
                        fontSize: '11px',
                        color: theme.colors.textPrimary,
                        maxWidth: '200px',
                        textAlign: 'center',
                        whiteSpace: 'normal',
                        wordWrap: 'break-word'
                      }}
                    >
                      {section.title}
                    </div>
                  </div>

                  {/* Connector line */}
                  {index < sections.length - 1 && (
                    <div
                      className="w-4 h-0.5"
                      style={{
                        backgroundColor: status === 'completed' ? '#10b981' : theme.colors.interactive
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <span className="text-xs" style={{ color: theme.colors.textSecondary }}>
            {sectionProgress.masteredSections.length}/{sections.length}
          </span>
        </div>

        {/* Expand/collapse button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs px-2 py-1 rounded hover:bg-opacity-10 transition-colors"
          style={{ color: theme.colors.brand }}
        >
          {isExpanded ? 'Less' : 'More'}
        </button>
      </div>

      {/* Expanded details */}
      {isExpanded && (
        <div className="mt-3 pt-3 border-t" style={{ borderColor: theme.colors.interactive }}>
          <div className="text-xs space-y-1.5">
            {sections.map((section: any) => {
              const status = getSectionStatus(section.id);
              const statusColor = getStatusColor(status);

              return (
                <div
                  key={section.id}
                  className="flex items-center justify-between py-1 cursor-pointer hover:bg-opacity-10 hover:bg-gray-500 rounded px-2 transition-colors"
                  style={{
                    opacity: status === 'upcoming' ? 0.6 : status === 'in-progress' ? 0.85 : 1
                  }}
                  onClick={() => onSectionClick(section.id)}
                >
                  <div className="flex items-center space-x-2">
                    <span style={{ color: statusColor, fontSize: '14px' }}>
                      {getStatusIcon(status)}
                    </span>
                    <span
                      className="font-medium"
                      style={{ color: status === 'current' ? statusColor : theme.colors.textPrimary }}
                    >
                      {section.title}
                    </span>
                    {status === 'current' && (
                      <span
                        className="text-xs px-1.5 py-0.5 rounded"
                        style={{
                          backgroundColor: `${statusColor}20`,
                          color: statusColor
                        }}
                      >
                        current
                      </span>
                    )}
                  </div>
                  <span
                    className="text-xs capitalize"
                    style={{ color: theme.colors.textMuted }}
                  >
                    {section.difficulty}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionProgressTracker;
