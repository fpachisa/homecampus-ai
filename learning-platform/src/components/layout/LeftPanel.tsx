import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { sessionStorage } from '../../services/sessionStorage';
// OLD: P6_MATH_FRACTIONS removed - not migrated
// import { P6_MATH_FRACTIONS } from '../../prompts/topics/P6-Math-Fractions';
// import type { TopicId } from '../../prompts/topics/P6-Math-Fractions';
import { S3_MATH_TRIGONOMETRY } from '../../prompt-library/subjects/mathematics/secondary/s3-trigonometry';
import type { TrigonometryTopicId } from '../../prompt-library/subjects/mathematics/secondary/s3-trigonometry';
import { S3_MATH_CIRCLE_GEOMETRY } from '../../prompt-library/subjects/mathematics/secondary/s3-circle-geometry';
import type { CircleGeometryTopicId } from '../../prompt-library/subjects/mathematics/secondary/s3-circle-geometry';
import { S3_MATH_QUADRATIC_EQUATIONS } from '../../prompt-library/subjects/mathematics/secondary/s3-quadratic-equations';
import type { QuadraticEquationsTopicId } from '../../prompt-library/subjects/mathematics/secondary/s3-quadratic-equations';
import { S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s3-exponential-logarithms';
import type { ExponentialLogarithmsTopicId } from '../../prompt-library/subjects/mathematics/secondary/s3-exponential-logarithms';
import { S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
import type { SetsVennDiagramsTopicId } from '../../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
import { S3_MATH_EXPONENTS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s3-exponents';
import type { ExponentsTopicId } from '../../prompt-library/subjects/mathematics/secondary/s3-exponents';
import { S3_MATH_SURDS_RADICALS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s3-surds-radicals';
import type { SurdsRadicalsTopicId } from '../../prompt-library/subjects/mathematics/secondary/s3-surds-radicals';
import { S3_MATH_STATISTICS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s3-statistics';
import type { StatisticsTopicId } from '../../prompt-library/subjects/mathematics/secondary/s3-statistics';
import { S3_MATH_RELATIONS_FUNCTIONS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s3-relations-functions';
import type { RelationsFunctionsTopicId } from '../../prompt-library/subjects/mathematics/secondary/s3-relations-functions';
import { S3_MATH_COORDINATE_GEOMETRY_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s3-coordinate-geometry';
import type { CoordinateGeometryTopicId } from '../../prompt-library/subjects/mathematics/secondary/s3-coordinate-geometry';
import { DIFFERENTIAL_CALCULUS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s4-differential-calculus';
import type { DifferentialCalculusTopicId } from '../../prompt-library/subjects/mathematics/secondary/s4-differential-calculus';
import { S4_MATH_INTEGRATION_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s4-integration';
import type { IntegrationTopicId } from '../../prompt-library/subjects/mathematics/secondary/s4-integration';
import { S4_MATH_PROBABILITY_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s4-probability';
import type { ProbabilityTopicId } from '../../prompt-library/subjects/mathematics/secondary/s4-probability';
import { S4_MATH_QUADRATIC_FUNCTIONS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s4-quadratic-functions';
import type { QuadraticFunctionsTopicId } from '../../prompt-library/subjects/mathematics/secondary/s4-quadratic-functions';
import type { LayoutActions } from './MainLayout';

interface LeftPanelProps {
  isCollapsed: boolean;
  width: number;
  layoutActions: LayoutActions;
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
  if (topicId === 's4-math-differential-calculus-limits') return '∞';
  if (topicId === 's4-math-differential-calculus-gradient-tangent') return '📈';
  if (topicId === 's4-math-differential-calculus-derivative-function') return 'f′';
  if (topicId === 's4-math-differential-calculus-first-principles') return '△';
  if (topicId === 's4-math-differential-calculus-differentiation-rules') return '∂';
  if (topicId === 's4-math-differential-calculus-tangent-equations') return '📐';
  if (topicId === 's4-math-differential-calculus-stationary-points') return '📊';

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

  // S4 Quadratic Functions icons
  if (topicId === 's4-math-quad-fundamentals') return '📊';
  if (topicId === 's4-math-quad-graphs-transformations') return '📈';
  if (topicId === 's4-math-quad-key-features') return '🎯';
  if (topicId === 's4-math-quad-finding-functions') return '🔍';
  if (topicId === 's4-math-quad-inequalities') return '⚖️';

  return '📐';
}

function getCategoryDisplayName(category: string): string {
  if (category === 'fractions') return 'Fractions';
  if (category === 's3-math-trigonometry') return 'Trigonometry';
  if (category === 's3-math-circle-geometry') return 'Circle Geometry';
  if (category === 's3-math-quadratic-equations') return 'Quadratic Equations';
  if (category === 's3-math-exponential-logarithms') return 'Exponential & Logarithms';
  if (category === 's3-math-sets-venn-diagrams') return 'Sets & Venn Diagrams';
  if (category === 's3-math-exponents') return 'Exponents';
  if (category === 's4-math-differential-calculus') return 'Differential Calculus';
  if (category === 's4-math-integration') return 'Integration';
  if (category === 's4-math-probability') return 'Probability';
  if (category === 's4-math-quad') return 'Quadratic Functions';
  if (category === 's3-math-surds-radicals') return 'Surds & Radicals';
  if (category === 's3-math-statistics') return 'Statistics';
  if (category === 's3-math-relations-functions') return 'Relations & Functions';
  if (category === 's3-math-coordinate-geometry') return 'Coordinate Geometry';
  return category;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ isCollapsed, width, layoutActions }) => {
  const { theme } = useTheme();
  const { pathId } = useParams<{ pathId: string }>();
  const { goToLearn, goToHome } = useAppNavigation();
  const [searchTerm, setSearchTerm] = useState('');

  // Derive category from pathId
  // Derive category from pathId
  // Import helper to check if it's a valid path
  const knownPaths = [
    's3-math-trigonometry', 's3-math-circle-geometry', 's3-math-quadratic-equations',
    's3-math-exponential-logarithms', 's3-math-sets-venn-diagrams', 's3-math-exponents',
    's3-math-surds-radicals', 's3-math-statistics', 's3-math-relations-functions',
    's3-math-coordinate-geometry', 's4-math-differential-calculus', 's4-math-integration',
    's4-math-probability', 's4-math-quad'
  ];

  const selectedCategory = pathId
    ? (knownPaths.includes(pathId)
        ? pathId  // It's already a known path/category
        : pathId.split('-').slice(0, 3).join('-'))  // Extract category from subtopic
    : '';

  console.log('[LeftPanel] pathId from URL:', pathId);
  console.log('[LeftPanel] derived selectedCategory:', selectedCategory);

  const [selectedTopic, setSelectedTopic] = useState<string>('');

  // Handle topic selection - navigate to learn mode with category and topic
  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
    // Navigate to Socratic mode with the selected topic
    if (selectedCategory) {
      goToLearn(selectedCategory, undefined, true, topicId);
    }
  };

  // Handle back to topics - go back to home page
  const handleBackToTopics = () => {
    goToHome();
  };

  // Dynamically get topic configs based on selected category
  const topicConfigs = useMemo(() => {
    console.log('[LeftPanel] selectedCategory:', selectedCategory);
    // OLD: Fractions not migrated - commented out
    // if (selectedCategory === 'fractions') {
    //   return Object.entries(P6_MATH_FRACTIONS).map(([topicId, config]) => ({
    //     id: topicId as TopicId | TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId,
    //     name: config.displayName,
    //     icon: getTopicIcon(topicId),
    //     status: 'active' as const,
    //     description: config.topicName,
    //   }));
    // } else
    if (selectedCategory === 's3-math-trigonometry') {
      return Object.entries(S3_MATH_TRIGONOMETRY).map(([topicId, config]) => ({
        id: topicId as TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's3-math-circle-geometry') {
      return Object.entries(S3_MATH_CIRCLE_GEOMETRY).map(([topicId, config]) => ({
        id: topicId as TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's3-math-quadratic-equations') {
      return Object.entries(S3_MATH_QUADRATIC_EQUATIONS).map(([topicId, config]) => ({
        id: topicId as TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's3-math-exponential-logarithms') {
      return Object.entries(S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's3-math-sets-venn-diagrams') {
      return Object.entries(S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId | SetsVennDiagramsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's3-math-exponents') {
      return Object.entries(S3_MATH_EXPONENTS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId | SetsVennDiagramsTopicId | ExponentsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's3-math-surds-radicals') {
      return Object.entries(S3_MATH_SURDS_RADICALS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId | SetsVennDiagramsTopicId | ExponentsTopicId | SurdsRadicalsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's3-math-statistics') {
      return Object.entries(S3_MATH_STATISTICS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId | SetsVennDiagramsTopicId | ExponentsTopicId | SurdsRadicalsTopicId | StatisticsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's3-math-relations-functions') {
      return Object.entries(S3_MATH_RELATIONS_FUNCTIONS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId | SetsVennDiagramsTopicId | ExponentsTopicId | SurdsRadicalsTopicId | StatisticsTopicId | RelationsFunctionsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's3-math-coordinate-geometry') {
      return Object.entries(S3_MATH_COORDINATE_GEOMETRY_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId | SetsVennDiagramsTopicId | ExponentsTopicId | SurdsRadicalsTopicId | StatisticsTopicId | RelationsFunctionsTopicId | CoordinateGeometryTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's4-math-differential-calculus') {
      console.log('[LeftPanel] Differential Calculus matched!');
      console.log('[LeftPanel] DIFFERENTIAL_CALCULUS_SUBTOPICS keys:', Object.keys(DIFFERENTIAL_CALCULUS_SUBTOPICS));
      const entries = Object.entries(DIFFERENTIAL_CALCULUS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId | SetsVennDiagramsTopicId | ExponentsTopicId | SurdsRadicalsTopicId | StatisticsTopicId | RelationsFunctionsTopicId | CoordinateGeometryTopicId | DifferentialCalculusTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
      console.log('[LeftPanel] Mapped entries:', entries);
      return entries;
    } else if (selectedCategory === 's4-math-integration') {
      return Object.entries(S4_MATH_INTEGRATION_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId | SetsVennDiagramsTopicId | ExponentsTopicId | SurdsRadicalsTopicId | StatisticsTopicId | RelationsFunctionsTopicId | CoordinateGeometryTopicId | DifferentialCalculusTopicId | IntegrationTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's4-math-probability') {
      return Object.entries(S4_MATH_PROBABILITY_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId | SetsVennDiagramsTopicId | ExponentsTopicId | SurdsRadicalsTopicId | StatisticsTopicId | RelationsFunctionsTopicId | CoordinateGeometryTopicId | DifferentialCalculusTopicId | IntegrationTopicId | ProbabilityTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's4-math-quad') {
      return Object.entries(S4_MATH_QUADRATIC_FUNCTIONS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId | SetsVennDiagramsTopicId | ExponentsTopicId | SurdsRadicalsTopicId | StatisticsTopicId | RelationsFunctionsTopicId | CoordinateGeometryTopicId | DifferentialCalculusTopicId | IntegrationTopicId | ProbabilityTopicId | QuadraticFunctionsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    }
    return [];
  }, [selectedCategory]);

  const categoryName = getCategoryDisplayName(selectedCategory || '');

  if (isCollapsed) {
    return (
      <div
        className="h-full flex flex-col items-center py-4 space-y-4 relative z-10"
        style={{
          width: 60,
          background: theme.glass.background,
          borderRight: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
        }}
      >
        {/* Back Button */}
        <button
          onClick={handleBackToTopics}
          className="p-3 rounded-lg transition-all duration-200 hover:scale-105"
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
          title={`Back to ${categoryName}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Expand Button */}
        <button
          onClick={layoutActions.toggleLeftPanel}
          className="p-3 rounded-lg transition-all duration-200 hover:scale-105"
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
          title="Expand Topics Panel"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Topic Icons */}
        {topicConfigs.slice(0, 3).map((topic) => (
          <button
            key={topic.id}
            onClick={() => handleTopicSelect(topic.id)}
            className="p-2 rounded-lg transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: selectedTopic === topic.id ? theme.colors.brand : theme.colors.interactive,
              color: selectedTopic === topic.id ? '#ffffff' : theme.colors.textSecondary,
            }}
            title={topic.name}
          >
            <span className="text-lg">{topic.icon}</span>
          </button>
        ))}
      </div>
    );
  }

  const filteredTopics = topicConfigs.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to get section progress for a topic
  const getSectionProgress = (topicId: string) => {
    // First, try to get section progress from active session (source of truth)
    const session = sessionStorage.loadSession(topicId);
    const sectionProgress = session?.sectionProgress;

    // Get total sections from config
    let topicConfig;
    // OLD: Fractions not migrated - commented out
    // if (selectedCategory === 'fractions') {
    //   topicConfig = P6_MATH_FRACTIONS[topicId as TopicId];
    // } else
    if (selectedCategory === 's3-math-trigonometry') {
      topicConfig = S3_MATH_TRIGONOMETRY[topicId as TrigonometryTopicId];
    } else if (selectedCategory === 's3-math-circle-geometry') {
      topicConfig = S3_MATH_CIRCLE_GEOMETRY[topicId as CircleGeometryTopicId];
    } else if (selectedCategory === 's3-math-quadratic-equations') {
      topicConfig = S3_MATH_QUADRATIC_EQUATIONS[topicId as QuadraticEquationsTopicId];
    } else if (selectedCategory === 's3-math-exponential-logarithms') {
      topicConfig = S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS[topicId as ExponentialLogarithmsTopicId];
    } else if (selectedCategory === 's3-math-sets-venn-diagrams') {
      topicConfig = S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS[topicId as SetsVennDiagramsTopicId];
    } else if (selectedCategory === 's3-math-exponents') {
      topicConfig = S3_MATH_EXPONENTS_SUBTOPICS[topicId as ExponentsTopicId];
    }

    const sections = (topicConfig as any)?.progressionStructure?.sections || [];
    const totalSections = sections.length;
    const masteredSections = sectionProgress?.masteredSections || [];
    const completedSections = masteredSections.length;

    return {
      completed: completedSections,
      total: totalSections,
      percentage: totalSections > 0 ? (completedSections / totalSections) * 100 : 0,
    };
  };

  return (
    <div
      className="h-full flex flex-col relative z-10 animate-slide-up"
      style={{
        width,
        background: theme.glass.background,
        borderRight: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
        boxShadow: theme.shadows.lg,
      }}
    >
      {/* Panel Header */}
      <div
        className="border-b"
        style={{ borderColor: theme.colors.border }}
      >
        {/* Back Button */}
        <button
          onClick={handleBackToTopics}
          className="w-full px-4 py-3 flex items-center space-x-2 transition-colors duration-200 hover:bg-interactive"
          style={{
            color: theme.colors.textSecondary,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.interactive;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          title={`Back to ${categoryName}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back to {categoryName}</span>
        </button>

        {/* Category Header */}
        <div className="flex items-center justify-between px-4 pb-4">
          <div className="flex items-center space-x-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: theme.colors.brand }}
            >
              {selectedCategory === 'fractions' ? '➗' :
               selectedCategory === 's3-math-trigonometry' ? '📐' :
               selectedCategory === 's3-math-circle-geometry' ? '⭕' :
               selectedCategory === 's3-math-quadratic-equations' ? '📈' :
               selectedCategory === 's3-math-exponential-logarithms' ? '📊' :
               selectedCategory === 's3-math-sets-venn-diagrams' ? '⭕' :
               selectedCategory === 's3-math-exponents' ? '⚡' :
               selectedCategory === 's4-math-probability' ? '🎲' : '📈'}
            </div>
            <div>
              <h2 className="font-semibold text-sm" style={{ color: theme.colors.textPrimary }}>
                {categoryName}
              </h2>
              <p className="text-xs" style={{ color: theme.colors.textMuted }}>
                Choose a subtopic
              </p>
            </div>
          </div>

          {/* Collapse Button */}
          <button
            onClick={layoutActions.toggleLeftPanel}
            className="p-1.5 rounded-md transition-colors duration-200"
            style={{
              color: theme.colors.textSecondary,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.interactive;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            title="Collapse sidebar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-md border-none outline-none transition-colors duration-200"
            style={{
              backgroundColor: theme.colors.interactive,
              color: theme.colors.textPrimary,
            }}
          />
          <svg
            className="absolute right-3 top-2.5 w-4 h-4"
            style={{ color: theme.colors.textMuted }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Topic Categories */}
      <div className="flex-1 overflow-y-auto px-2">
        <div className="space-y-1">
          {/* Section Header */}
          <div className="px-2 py-1.5">
            <h3 className="text-xs font-semibold uppercase tracking-wide" style={{ color: theme.colors.textMuted }}>
              {selectedCategory === 'fractions' ? 'Primary 6 Mathematics' : 'Secondary 3 Mathematics'}
            </h3>
          </div>

          {/* Topic List - WhatsApp Style */}
          {filteredTopics.map((topic) => {
            const preview = sessionStorage.getSessionPreview(topic.id);
            const hasSession = preview !== null;
            const sectionProgress = getSectionProgress(topic.id);

            return (
              <button
                key={topic.id}
                onClick={() => handleTopicSelect(topic.id)}
                className={`w-full flex items-start space-x-3 px-3 py-3 text-left transition-all duration-300 group ${
                  selectedTopic === topic.id ? 'bg-brand text-white' : ''
                }`}
                style={{
                  background: selectedTopic === topic.id ? theme.gradients.brand : 'transparent',
                  color: selectedTopic === topic.id ? '#ffffff' : theme.colors.textSecondary,
                  borderRadius: theme.radius.lg,
                  boxShadow: selectedTopic === topic.id ? theme.shadows.glow : 'none',
                }}
                onMouseEnter={(e) => {
                  if (selectedTopic !== topic.id) {
                    e.currentTarget.style.background = theme.colors.interactive;
                    e.currentTarget.style.boxShadow = theme.shadows.md;
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedTopic !== topic.id) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                    style={{
                      backgroundColor: selectedTopic === topic.id
                        ? 'rgba(255, 255, 255, 0.2)'
                        : theme.colors.interactive,
                    }}
                  >
                    {topic.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold truncate">{topic.name}</p>
                    {hasSession && (
                      <span className="text-xs opacity-70 ml-2 flex-shrink-0">
                        {sessionStorage.getTimeElapsedString(preview.timestamp)}
                      </span>
                    )}
                  </div>

                  {hasSession && sectionProgress.total > 0 && (
                    <div className="mt-2 space-y-1">
                      {/* Progress Bar */}
                      <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: selectedTopic === topic.id ? 'rgba(255, 255, 255, 0.2)' : theme.colors.interactive }}>
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{
                            width: `${sectionProgress.percentage}%`,
                            backgroundColor: selectedTopic === topic.id ? '#ffffff' : theme.colors.brand,
                          }}
                        />
                      </div>
                      {/* Progress Text */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs opacity-60">
                          {sectionProgress.completed}/{sectionProgress.total} sections
                        </span>
                        {sectionProgress.completed === sectionProgress.total && (
                          <span className="text-xs opacity-70">✓</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Check mark for selected */}
                {selectedTopic === topic.id && (
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Section - User Profile Placeholder */}
      <div
        className="p-3 border-t"
        style={{ borderColor: theme.colors.border }}
      >
        <div className="flex items-center space-x-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium"
            style={{
              backgroundColor: theme.colors.brand,
              color: '#ffffff',
            }}
          >
            👤
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate" style={{ color: theme.colors.textPrimary }}>
              Student
            </p>
            <p className="text-xs truncate" style={{ color: theme.colors.textMuted }}>
              Learning Mode
            </p>
          </div>
          <button
            className="p-1.5 rounded-md hover:bg-interactive transition-colors duration-200"
            style={{ color: theme.colors.textMuted }}
            title="Settings"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;