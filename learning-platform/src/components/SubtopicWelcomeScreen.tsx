import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
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

interface SubtopicWelcomeScreenProps {
  topicId: string;
  category: string;
  onStartLearning: (enableVoice: boolean) => void;
  onBack: () => void;
}

function getTopicIcon(topicId: string): string {
  // P6 Fractions icons
  if (topicId.includes('dividing-whole-numbers')) return '➗';
  if (topicId.includes('whole-number-dividing')) return '🔢';
  if (topicId.includes('fraction-dividing-fraction')) return '📏';
  if (topicId.includes('word-problems')) return '📝';

  // S3 Trigonometry icons
  if (topicId.includes('basic-ratios')) return '📐';
  if (topicId.includes('problem-solving')) return '🧮';
  if (topicId.includes('true-bearings')) return '🧭';
  if (topicId.includes('obtuse-angles')) return '📏';
  if (topicId.includes('area-of-triangle')) return '🔺';
  if (topicId.includes('sine-rule')) return '📊';
  if (topicId.includes('cosine-rule')) return '📈';

  // S3 Circle Geometry icons
  if (topicId.includes('definitions')) return '⭕';
  if (topicId.includes('angle-semicircle')) return '📐';
  if (topicId.includes('chords')) return '📏';
  if (topicId.includes('radius-tangent')) return '📍';
  if (topicId.includes('tangents-external')) return '✏️';
  if (topicId.includes('angle-centre')) return '🎯';
  if (topicId.includes('angle-same-arc')) return '🔵';

  // S3 Quadratic Equations icons
  if (topicId.includes('solving-standard-form')) return '🔢';
  if (topicId.includes('solving-factorization')) return '✂️';
  if (topicId.includes('solving-fractional')) return '➗';
  if (topicId.includes('solving-completing-square')) return '◼️';
  if (topicId.includes('solving-formula')) return '📐';
  if (topicId.includes('solving-exponential')) return '⚡';
  if (topicId.includes('word-problems')) return '💡';
  if (topicId.includes('graph-features')) return '📊';
  if (topicId.includes('graph-completed-square')) return '🎯';
  if (topicId.includes('graph-factorised')) return '🔍';
  if (topicId.includes('graph-polynomial')) return '📈';
  if (topicId.includes('graph-finding-function')) return '🔎';
  if (topicId.includes('graph-problem-solving')) return '🎨';

  // S3 Exponential & Logarithms icons
  if (topicId.includes('exponential-functions')) return '📈';
  if (topicId.includes('exponential-graphs')) return '📊';
  if (topicId.includes('exponential-equations')) return '🔢';
  if (topicId.includes('exponential-growth')) return '📈';
  if (topicId.includes('exponential-decay')) return '📉';
  if (topicId.includes('common-logarithms')) return '🔤';
  if (topicId.includes('logarithm-laws')) return '⚖️';
  if (topicId.includes('using-logarithms')) return '🔧';
  if (topicId.includes('logarithms-other-bases')) return '🔠';

  // S3 Sets & Venn Diagrams icons
  if (topicId.includes('sets-fundamentals')) return '📦';
  if (topicId.includes('sets-complement')) return '🔄';
  if (topicId.includes('sets-intersection-union')) return '🔗';
  if (topicId.includes('sets-special-number-sets')) return '🔢';
  if (topicId.includes('sets-interval-notation')) return '📏';
  if (topicId.includes('sets-venn-diagrams')) return '⭕';
  if (topicId.includes('sets-venn-regions')) return '🎯';
  if (topicId.includes('sets-numbers-in-regions')) return '🔢';
  if (topicId.includes('sets-problem-solving')) return '🧩';

  // S3 Exponents icons
  if (topicId.includes('exponents-laws')) return '⚡';
  if (topicId.includes('exponents-rational')) return '√';
  if (topicId.includes('exponents-standard-form')) return '🔬';

  // S3 Surds & Radicals icons
  if (topicId.includes('surds-fundamentals')) return '√';
  if (topicId.includes('surds-simplifying')) return '🔍';
  if (topicId.includes('surds-addition-subtraction')) return '➕';
  if (topicId.includes('surds-multiplication-division')) return '✖️';
  if (topicId.includes('surds-rationalizing')) return '🔄';
  if (topicId.includes('surds-mixed-operations')) return '🧮';

  // S3 Statistics icons
  if (topicId.includes('statistics-data-types')) return '📊';
  if (topicId.includes('statistics-distributions')) return '📉';
  if (topicId.includes('statistics-centre')) return '📍';
  if (topicId.includes('statistics-boxplots')) return '📦';
  if (topicId.includes('statistics-cumulative')) return '📈';
  if (topicId.includes('statistics-deviation')) return '📏';
  if (topicId.includes('statistics-normal')) return '🔔';

  // S3 Relations & Functions icons
  if (topicId.includes('relations-functions-fundamentals')) return '🔗';
  if (topicId.includes('function-notation')) return '📝';
  if (topicId.includes('domain-range')) return '📊';
  if (topicId.includes('sign-diagrams')) return '📉';
  if (topicId.includes('transformations')) return '🔄';
  if (topicId.includes('absolute-value')) return '📏';

  // S3 Coordinate Geometry icons
  if (topicId.includes('coord-geom-fundamentals')) return '📍';
  if (topicId.includes('coord-geom-gradient')) return '📈';
  if (topicId.includes('coord-geom-line-equations')) return '📝';
  if (topicId.includes('coord-geom-graphing')) return '📊';
  if (topicId.includes('coord-geom-perpendicular-bisectors')) return '⊥';
  if (topicId.includes('coord-geom-applications')) return '🎯';

  // S4 Differential Calculus icons
  if (topicId === 'limits') return '∞';
  if (topicId === 'gradient-tangent') return '📈';
  if (topicId === 'derivative-function') return 'f′';
  if (topicId === 'first-principles') return '△';
  if (topicId === 'differentiation-rules') return '∂';
  if (topicId === 'tangent-equations') return '📐';
  if (topicId === 'stationary-points') return '📊';

  // S4 Integration icons
  if (topicId === 's4-math-integration-area-under-curves') return '📊';
  if (topicId === 's4-math-integration-antiderivatives') return '∫';
  if (topicId === 's4-math-integration-rules') return '📏';
  if (topicId === 's4-math-integration-definite-integrals') return '🎯';
  if (topicId === 's4-math-integration-riemann-sums') return '📐';

  // S4 Probability icons
  if (topicId === 's4-math-probability-basic-concepts') return '🎲';
  if (topicId === 's4-math-probability-combined-events') return '🔢';
  if (topicId === 's4-math-probability-trees') return '🌳';
  if (topicId === 's4-math-probability-conditional') return '🔀';
  if (topicId === 's4-math-probability-applications') return '🎯';

  return '📐';
}

const SubtopicWelcomeScreen: React.FC<SubtopicWelcomeScreenProps> = ({
  topicId,
  category,
  onStartLearning,
  onBack,
}) => {
  const { theme } = useTheme();
  const [enableVoice, setEnableVoice] = useState(true);

  // Get topic config based on category
  let topicConfig: any;
  if (category === 's3-math-trigonometry') {
    topicConfig = S3_MATH_TRIGONOMETRY[topicId as TrigonometryTopicId];
  } else if (category === 's3-math-circle-geometry') {
    topicConfig = S3_MATH_CIRCLE_GEOMETRY[topicId as CircleGeometryTopicId];
  } else if (category === 's3-math-quadratic-equations') {
    topicConfig = S3_MATH_QUADRATIC_EQUATIONS[topicId as QuadraticEquationsTopicId];
  } else if (category === 's3-math-exponential-logarithms') {
    topicConfig = S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS[topicId as ExponentialLogarithmsTopicId];
  } else if (category === 's3-math-sets-venn-diagrams') {
    topicConfig = S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS[topicId as SetsVennDiagramsTopicId];
  } else if (category === 's3-math-exponents') {
    topicConfig = S3_MATH_EXPONENTS_SUBTOPICS[topicId as ExponentsTopicId];
  } else if (category === 's3-math-surds-radicals') {
    topicConfig = S3_MATH_SURDS_RADICALS_SUBTOPICS[topicId as SurdsRadicalsTopicId];
  } else if (category === 's3-math-statistics') {
    topicConfig = S3_MATH_STATISTICS_SUBTOPICS[topicId as StatisticsTopicId];
  } else if (category === 's3-math-relations-functions') {
    topicConfig = S3_MATH_RELATIONS_FUNCTIONS_SUBTOPICS[topicId as RelationsFunctionsTopicId];
  } else if (category === 's3-math-coordinate-geometry') {
    topicConfig = S3_MATH_COORDINATE_GEOMETRY_SUBTOPICS[topicId as CoordinateGeometryTopicId];
  } else if (category === 's4-math-differential-calculus') {
    topicConfig = DIFFERENTIAL_CALCULUS_SUBTOPICS[topicId as DifferentialCalculusTopicId];
  } else if (category === 's4-math-integration') {
    topicConfig = S4_MATH_INTEGRATION_SUBTOPICS[topicId as IntegrationTopicId];
  } else if (category === 's4-math-probability') {
    topicConfig = S4_MATH_PROBABILITY_SUBTOPICS[topicId as ProbabilityTopicId];
  }

  if (!topicConfig) {
    return null;
  }

  const sections = topicConfig.progressionStructure?.sections || [];
  const icon = getTopicIcon(topicId);

  return (
    <div
      className="h-full flex flex-col overflow-hidden"
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
      <div
        className="relative z-10 px-6 py-4 border-b"
        style={{ borderColor: theme.colors.border }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onBack}
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
            <h2 className="text-lg font-semibold" style={{ color: theme.colors.textPrimary }}>
              Ready to Learn?
            </h2>
          </div>

          {/* Voice Assistant Toggle in Header */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="text-xl">🎙️</span>
              <span className="text-sm font-medium hidden sm:inline" style={{ color: theme.colors.textPrimary }}>
                Voice Assistant
              </span>
            </div>
            <button
              onClick={() => setEnableVoice(!enableVoice)}
              className="relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200"
              style={{
                backgroundColor: enableVoice ? theme.colors.brand : theme.colors.interactive,
              }}
            >
              <span
                className="inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200"
                style={{
                  transform: enableVoice ? 'translateX(1.75rem)' : 'translateX(0.25rem)',
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Topic Hero */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-6" style={{ color: theme.colors.textPrimary }}>
              {topicConfig.displayName}
            </h1>

            <div className ="flex justify-center">
              {/* Start Button at Top */}
              <button
                onClick={() => onStartLearning(enableVoice)}
                className="w-48 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105"
                style={{
                  background: theme.gradients.brand,
                  color: '#ffffff',
                  boxShadow: theme.shadows.glow,
                }}
              >
                Start Learning
              </button>
            </div>
          </div>

          {/* Learning Sections */}
          {sections.length > 0 && (
            <div
              className="p-6 rounded-2xl mb-6"
              style={{
                background: theme.glass.background,
                border: `1px solid ${theme.glass.border}`,
                backdropFilter: theme.glass.backdrop,
                boxShadow: theme.shadows.md,
              }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: theme.colors.textPrimary }}>
                What You'll Learn
              </h3>
              <div className="space-y-4">
                {sections.map((section: any, index: number) => (
                  <div key={section.id} className="flex items-start space-x-3">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
                      style={{
                        backgroundColor: theme.colors.interactive,
                        color: theme.colors.textPrimary,
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1" style={{ color: theme.colors.textPrimary }}>
                        {section.title}
                      </h4>
                      {section.learningObjectives && section.learningObjectives.length > 0 && (
                        <ul className="space-y-1">
                          {section.learningObjectives.slice(0, 2).map((objective: string, i: number) => (
                            <li
                              key={i}
                              className="text-sm flex items-start"
                              style={{ color: theme.colors.textMuted }}
                            >
                              <span className="mr-2">•</span>
                              <span>{objective}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="p-4 rounded-xl text-center"
              style={{
                background: theme.glass.background,
                border: `1px solid ${theme.glass.border}`,
                backdropFilter: theme.glass.backdrop,
              }}
            >
              <div className="text-2xl mb-1">📝</div>
              <div className="text-sm" style={{ color: theme.colors.textMuted }}>
                {sections.length} Section{sections.length !== 1 ? 's' : ''}
              </div>
            </div>
            <div
              className="p-4 rounded-xl text-center"
              style={{
                background: theme.glass.background,
                border: `1px solid ${theme.glass.border}`,
                backdropFilter: theme.glass.backdrop,
              }}
            >
              <div className="text-2xl mb-1">🎯</div>
              <div className="text-sm" style={{ color: theme.colors.textMuted }}>
                Adaptive Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubtopicWelcomeScreen;
