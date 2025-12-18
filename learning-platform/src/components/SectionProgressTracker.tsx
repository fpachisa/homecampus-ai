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
import { S4_MATH_QUADRATIC_FUNCTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-quadratic-functions';
import type { QuadraticFunctionsTopicId } from '../prompt-library/subjects/mathematics/secondary/s4-quadratic-functions';
import { S4_MATH_ADVANCED_TRIGONOMETRY_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-advanced-trigonometry';
import type { AdvancedTrigonometryTopicId } from '../prompt-library/subjects/mathematics/secondary/s4-advanced-trigonometry';
import { S4_VECTORS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-vectors';
import type { S4VectorsTopicId } from '../prompt-library/subjects/mathematics/secondary/s4-vectors';
import { S1_MATH_FACTORS_MULTIPLES_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-factors-multiples';
import type { FactorsMultiplesTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-factors-multiples';
import { S1_MATH_REAL_NUMBERS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-real-numbers';
import type { RealNumbersTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-real-numbers';
import { S1_MATH_APPROXIMATION_ESTIMATION_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-approximation-estimation';
import type { ApproximationEstimationTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-approximation-estimation';
import { S1_MATH_BASIC_ALGEBRA_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-basic-algebra';
import type { BasicAlgebraTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-basic-algebra';
import { S1_SIMPLE_LINEAR_EQUATIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-simple-linear-equations';
import type { SimpleLinearEquationsTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-simple-linear-equations';
import { S1_MATH_ANGLES_PARALLEL_LINES_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-angles-parallel-lines';
import type { AnglesParallelLinesTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-angles-parallel-lines';
import { S1_MATH_RATIO_RATE_SPEED_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-ratio-rate-speed';
import type { RatioRateSpeedTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-ratio-rate-speed';
import { S1_PERCENTAGE_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-percentage';
import type { PercentageTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-percentage';
import { S1_LINEAR_FUNCTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-linear-functions-graphs';
import type { LinearFunctionsTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-linear-functions-graphs';
import { S1_MATH_PERIMETER_AREA_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-perimeter-area';
import type { PerimeterAreaTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-perimeter-area';
import { S1_MATH_DATA_HANDLING_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-data-handling';
import type { DataHandlingTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-data-handling';
import { LINEAR_GRAPHS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-linear-graphs';
import type { LinearGraphsTopicId } from '../prompt-library/subjects/mathematics/secondary/s2-linear-graphs';
import { LINEAR_INEQUALITIES_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-linear-inequalities';
import type { LinearInequalitiesTopicId } from '../prompt-library/subjects/mathematics/secondary/s2-linear-inequalities';
import { S2_MATH_EXPANSION_FACTORISATION_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-expansion-factorisation';
import type { ExpansionFactorisationTopicId } from '../prompt-library/subjects/mathematics/secondary/s2-expansion-factorisation';
import { S2_MATH_QUADRATIC_EQUATIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-quadratic-equations-graphs';
import type { QuadraticTopicId } from '../prompt-library/subjects/mathematics/secondary/s2-quadratic-equations-graphs';
import { S2_MATH_ALGEBRAIC_FRACTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-algebraic-fractions-formulae';
import type { AlgebraicFractionsTopicId } from '../prompt-library/subjects/mathematics/secondary/s2-algebraic-fractions-formulae';
import { S2_MATH_PROPORTION_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-direct-inverse-proportion';
import type { ProportionTopicId } from '../prompt-library/subjects/mathematics/secondary/s2-direct-inverse-proportion';
import { S2_MATH_PYTHAGORAS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-pythagoras';
import type { PythagorasTopicId } from '../prompt-library/subjects/mathematics/secondary/s2-pythagoras';
import { S2_MATH_TRIGONOMETRIC_RATIOS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-trigonometric-ratios';
import type { TrigonometricRatiosTopicId } from '../prompt-library/subjects/mathematics/secondary/s2-trigonometric-ratios';
import { S2_PROBABILITY_SINGLE_EVENT_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-probability-single-event';
import type { ProbabilitySingleEventTopicId } from '../prompt-library/subjects/mathematics/secondary/s2-probability-single-event';
import { STATISTICAL_DIAGRAMS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-statistical-diagrams';
import type { StatisticalDiagramsTopicId } from '../prompt-library/subjects/mathematics/secondary/s2-statistical-diagrams';
import { S2_MATH_AVERAGES_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-averages-statistical-data';
import type { AveragesTopicId } from '../prompt-library/subjects/mathematics/secondary/s2-averages-statistical-data';
// Primary 5 imports
import { P5_MATH_NUMBERS_10_MILLION_SUBTOPICS } from '../prompt-library/subjects/mathematics/primary/p5-numbers-10-million';
import type { Numbers10MillionTopicId } from '../prompt-library/subjects/mathematics/primary/p5-numbers-10-million';
import { P5_MATH_FOUR_OPERATIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/primary/p5-four-operations';
import type { FourOperationsTopicId } from '../prompt-library/subjects/mathematics/primary/p5-four-operations';
import { P5_MATH_FRACTIONS_DIVISIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/primary/p5-fractions-divisions';
import type { FractionsDivisionsTopicId } from '../prompt-library/subjects/mathematics/primary/p5-fractions-divisions';
import { P5_MATH_FOUR_OPERATIONS_FRACTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/primary/p5-four-operations-fractions';
import type { FourOperationsFractionsTopicId } from '../prompt-library/subjects/mathematics/primary/p5-four-operations-fractions';
import { P5_MATH_AREA_OF_TRIANGLE_SUBTOPICS } from '../prompt-library/subjects/mathematics/primary/p5-area-of-triangle';
import type { AreaOfTriangleTopicId } from '../prompt-library/subjects/mathematics/primary/p5-area-of-triangle';
import { P5_MATH_VOLUME_SUBTOPICS } from '../prompt-library/subjects/mathematics/primary/p5-volume';
import { P5_MATH_DECIMALS_SUBTOPICS } from '../prompt-library/subjects/mathematics/primary/p5-decimals';
import type { DecimalsTopicId } from '../prompt-library/subjects/mathematics/primary/p5-decimals';
import type { VolumeTopicId } from '../prompt-library/subjects/mathematics/primary/p5-volume';
import { P5_MATH_RATE_SUBTOPICS } from '../prompt-library/subjects/mathematics/primary/p5-rate';
import type { RateTopicId } from '../prompt-library/subjects/mathematics/primary/p5-rate';
import { P5_MATH_PERCENTAGE_SUBTOPICS } from '../prompt-library/subjects/mathematics/primary/p5-percentage';
import type { PercentageTopicId as P5PercentageTopicId } from '../prompt-library/subjects/mathematics/primary/p5-percentage';
import { P5_MATH_ANGLES_SUBTOPICS } from '../prompt-library/subjects/mathematics/primary/p5-angles';
import type { P5AnglesTopicId } from '../prompt-library/subjects/mathematics/primary/p5-angles';
import { P5_MATH_PROPERTIES_OF_TRIANGLES_SUBTOPICS } from '../prompt-library/subjects/mathematics/primary/p5-properties-of-triangles';
import type { PropertiesOfTrianglesTopicId as P5PropertiesOfTrianglesTopicId } from '../prompt-library/subjects/mathematics/primary/p5-properties-of-triangles';
import { P5_MATH_PROPERTIES_OF_QUADRILATERALS_SUBTOPICS } from '../prompt-library/subjects/mathematics/primary/p5-properties-of-quadrilaterals';
import type { PropertiesOfQuadrilateralsTopicId } from '../prompt-library/subjects/mathematics/primary/p5-properties-of-quadrilaterals';
// Primary 6 imports
import { P6_FRACTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/primary/p6-fractions';
import type { P6FractionsTopicId } from '../prompt-library/subjects/mathematics/primary/p6-fractions';

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
    if (topicId.startsWith('s1-math-factors-multiples-')) {
      const subtopic = S1_MATH_FACTORS_MULTIPLES_SUBTOPICS[topicId as FactorsMultiplesTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s1-math-real-numbers-')) {
      const subtopic = S1_MATH_REAL_NUMBERS_SUBTOPICS[topicId as RealNumbersTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s1-math-approximation-estimation-')) {
      const subtopic = S1_MATH_APPROXIMATION_ESTIMATION_SUBTOPICS[topicId as ApproximationEstimationTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s1-math-basic-algebra-')) {
      const subtopic = S1_MATH_BASIC_ALGEBRA_SUBTOPICS[topicId as BasicAlgebraTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s1-math-simple-linear-equations-')) {
      const subtopic = S1_SIMPLE_LINEAR_EQUATIONS_SUBTOPICS[topicId as SimpleLinearEquationsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s1-math-angles-parallel-lines-')) {
      const subtopic = S1_MATH_ANGLES_PARALLEL_LINES_SUBTOPICS[topicId as AnglesParallelLinesTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s1-math-ratio-rate-speed-')) {
      const subtopic = S1_MATH_RATIO_RATE_SPEED_SUBTOPICS[topicId as RatioRateSpeedTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s1-math-percentage-')) {
      const subtopic = S1_PERCENTAGE_SUBTOPICS[topicId as PercentageTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s1-math-linear-functions-')) {
      const subtopic = S1_LINEAR_FUNCTIONS_SUBTOPICS[topicId as LinearFunctionsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s1-math-perimeter-area-')) {
      const subtopic = S1_MATH_PERIMETER_AREA_SUBTOPICS[topicId as PerimeterAreaTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s1-math-data-')) {
      const subtopic = S1_MATH_DATA_HANDLING_SUBTOPICS[topicId as DataHandlingTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s2-math-linear-graphs-')) {
      const subtopic = LINEAR_GRAPHS_SUBTOPICS[topicId as LinearGraphsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s2-math-linear-inequalities-')) {
      const subtopic = LINEAR_INEQUALITIES_SUBTOPICS[topicId as LinearInequalitiesTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s2-math-expansion-factorisation-')) {
      const subtopic = S2_MATH_EXPANSION_FACTORISATION_SUBTOPICS[topicId as ExpansionFactorisationTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s2-math-quadratics-')) {
      const subtopic = S2_MATH_QUADRATIC_EQUATIONS_SUBTOPICS[topicId as QuadraticTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s2-math-algebraic-fractions-')) {
      const subtopic = S2_MATH_ALGEBRAIC_FRACTIONS_SUBTOPICS[topicId as AlgebraicFractionsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s2-math-proportion-')) {
      const subtopic = S2_MATH_PROPORTION_SUBTOPICS[topicId as ProportionTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s2-math-pythagoras-')) {
      const subtopic = S2_MATH_PYTHAGORAS_SUBTOPICS[topicId as PythagorasTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s2-math-trig-ratios-')) {
      const subtopic = S2_MATH_TRIGONOMETRIC_RATIOS_SUBTOPICS[topicId as TrigonometricRatiosTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s2-math-probability-')) {
      const subtopic = S2_PROBABILITY_SINGLE_EVENT_SUBTOPICS[topicId as ProbabilitySingleEventTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s2-math-statistical-diagrams-')) {
      const subtopic = STATISTICAL_DIAGRAMS_SUBTOPICS[topicId as StatisticalDiagramsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    if (topicId.startsWith('s2-math-averages-')) {
      const subtopic = S2_MATH_AVERAGES_SUBTOPICS[topicId as AveragesTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
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
    // S4 Quadratic Functions topics
    if (topicId.startsWith('s4-math-quad-')) {
      const subtopic = S4_MATH_QUADRATIC_FUNCTIONS_SUBTOPICS[topicId as QuadraticFunctionsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // S4 Advanced Trigonometry topics
    if (topicId.startsWith('s4-math-advanced-trig-')) {
      const subtopic = S4_MATH_ADVANCED_TRIGONOMETRY_SUBTOPICS[topicId as AdvancedTrigonometryTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // S4 Vectors topics
    if (topicId.startsWith('s4-math-vectors-')) {
      const subtopic = S4_VECTORS_SUBTOPICS[topicId as S4VectorsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // P5 Numbers up to 10 Million topics
    if (topicId.startsWith('p5-math-numbers-10-million-')) {
      const subtopic = P5_MATH_NUMBERS_10_MILLION_SUBTOPICS[topicId as Numbers10MillionTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // P5 Four Operations of Fractions topics (check BEFORE four-operations since it's more specific)
    if (topicId.startsWith('p5-math-four-operations-fractions-')) {
      const subtopic = P5_MATH_FOUR_OPERATIONS_FRACTIONS_SUBTOPICS[topicId as FourOperationsFractionsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // P5 Four Operations topics
    if (topicId.startsWith('p5-math-four-operations-')) {
      const subtopic = P5_MATH_FOUR_OPERATIONS_SUBTOPICS[topicId as FourOperationsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // P5 Fractions and Divisions topics
    if (topicId.startsWith('p5-math-fractions-divisions-')) {
      const subtopic = P5_MATH_FRACTIONS_DIVISIONS_SUBTOPICS[topicId as FractionsDivisionsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // P5 Area of Triangle topics
    if (topicId.startsWith('p5-math-area-triangle-')) {
      const subtopic = P5_MATH_AREA_OF_TRIANGLE_SUBTOPICS[topicId as AreaOfTriangleTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // P5 Volume topics
    if (topicId.startsWith('p5-math-volume-')) {
      const subtopic = P5_MATH_VOLUME_SUBTOPICS[topicId as VolumeTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // P5 Decimals topics
    if (topicId.startsWith('p5-math-decimals-')) {
      const subtopic = P5_MATH_DECIMALS_SUBTOPICS[topicId as DecimalsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // P5 Rate topics
    if (topicId.startsWith('p5-math-rate-')) {
      const subtopic = P5_MATH_RATE_SUBTOPICS[topicId as RateTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // P5 Percentage topics
    if (topicId.startsWith('p5-math-percentage-')) {
      const subtopic = P5_MATH_PERCENTAGE_SUBTOPICS[topicId as P5PercentageTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // P5 Angles topics
    if (topicId.startsWith('p5-math-angles-')) {
      const subtopic = P5_MATH_ANGLES_SUBTOPICS[topicId as P5AnglesTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // P5 Properties of Triangles topics
    if (topicId.startsWith('p5-math-properties-triangles-')) {
      const subtopic = P5_MATH_PROPERTIES_OF_TRIANGLES_SUBTOPICS[topicId as P5PropertiesOfTrianglesTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // P5 Properties of Quadrilaterals topics
    if (topicId.startsWith('p5-math-properties-quadrilaterals-')) {
      const subtopic = P5_MATH_PROPERTIES_OF_QUADRILATERALS_SUBTOPICS[topicId as PropertiesOfQuadrilateralsTopicId];
      return (subtopic as any)?.progressionStructure?.sections || [];
    }
    // P6 Fractions topics
    if (topicId.startsWith('p6-math-fractions-')) {
      const subtopic = P6_FRACTIONS_SUBTOPICS[topicId as P6FractionsTopicId];
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
                  className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 rounded shadow-lg z-50"
                  style={{
                    backgroundColor: theme.colors.chat,
                    border: `1px solid ${statusColor}`,
                    fontSize: '12px',
                    color: theme.colors.textPrimary,
                    minWidth: '150px',
                    maxWidth: '280px',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    overflow: 'visible'
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
                      className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 rounded shadow-lg z-50"
                      style={{
                        backgroundColor: theme.colors.chat,
                        border: `1px solid ${statusColor}`,
                        fontSize: '12px',
                        color: theme.colors.textPrimary,
                        minWidth: '150px',
                        maxWidth: '280px',
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                        overflow: 'visible'
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
