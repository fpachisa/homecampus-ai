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
import { S4_MATH_ADVANCED_TRIGONOMETRY_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s4-advanced-trigonometry';
import type { AdvancedTrigonometryTopicId } from '../../prompt-library/subjects/mathematics/secondary/s4-advanced-trigonometry';
import { S4_VECTORS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s4-vectors';
import type { S4VectorsTopicId } from '../../prompt-library/subjects/mathematics/secondary/s4-vectors';
import { S1_MATH_FACTORS_MULTIPLES_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s1-factors-multiples';
import type { FactorsMultiplesTopicId } from '../../prompt-library/subjects/mathematics/secondary/s1-factors-multiples';
import { S1_MATH_REAL_NUMBERS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s1-real-numbers';
import type { RealNumbersTopicId } from '../../prompt-library/subjects/mathematics/secondary/s1-real-numbers';
import { S1_MATH_APPROXIMATION_ESTIMATION_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s1-approximation-estimation';
import type { ApproximationEstimationTopicId } from '../../prompt-library/subjects/mathematics/secondary/s1-approximation-estimation';
import { S1_MATH_BASIC_ALGEBRA_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s1-basic-algebra';
import type { BasicAlgebraTopicId } from '../../prompt-library/subjects/mathematics/secondary/s1-basic-algebra';
import { S1_SIMPLE_LINEAR_EQUATIONS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s1-simple-linear-equations';
import type { SimpleLinearEquationsTopicId } from '../../prompt-library/subjects/mathematics/secondary/s1-simple-linear-equations';
import { S1_MATH_ANGLES_PARALLEL_LINES_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s1-angles-parallel-lines';
import type { AnglesParallelLinesTopicId } from '../../prompt-library/subjects/mathematics/secondary/s1-angles-parallel-lines';
import { S1_MATH_RATIO_RATE_SPEED_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s1-ratio-rate-speed';
import type { RatioRateSpeedTopicId } from '../../prompt-library/subjects/mathematics/secondary/s1-ratio-rate-speed';
import { S1_PERCENTAGE_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s1-percentage';
import type { PercentageTopicId } from '../../prompt-library/subjects/mathematics/secondary/s1-percentage';
import { S1_LINEAR_FUNCTIONS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s1-linear-functions-graphs';
import type { LinearFunctionsTopicId } from '../../prompt-library/subjects/mathematics/secondary/s1-linear-functions-graphs';
import { S1_MATH_PERIMETER_AREA_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s1-perimeter-area';
import type { PerimeterAreaTopicId } from '../../prompt-library/subjects/mathematics/secondary/s1-perimeter-area';
import { S1_MATH_DATA_HANDLING_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s1-data-handling';
import type { DataHandlingTopicId } from '../../prompt-library/subjects/mathematics/secondary/s1-data-handling';
import { LINEAR_GRAPHS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s2-linear-graphs';
import type { LinearGraphsTopicId } from '../../prompt-library/subjects/mathematics/secondary/s2-linear-graphs';
import { LINEAR_INEQUALITIES_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s2-linear-inequalities';
import type { LinearInequalitiesTopicId } from '../../prompt-library/subjects/mathematics/secondary/s2-linear-inequalities';
import { S2_MATH_EXPANSION_FACTORISATION_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s2-expansion-factorisation';
import type { ExpansionFactorisationTopicId } from '../../prompt-library/subjects/mathematics/secondary/s2-expansion-factorisation';
import { S2_MATH_QUADRATIC_EQUATIONS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s2-quadratic-equations-graphs';
import type { QuadraticTopicId } from '../../prompt-library/subjects/mathematics/secondary/s2-quadratic-equations-graphs';
import { S2_MATH_ALGEBRAIC_FRACTIONS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s2-algebraic-fractions-formulae';
import type { AlgebraicFractionsTopicId } from '../../prompt-library/subjects/mathematics/secondary/s2-algebraic-fractions-formulae';
import { S2_MATH_PROPORTION_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s2-direct-inverse-proportion';
import type { ProportionTopicId } from '../../prompt-library/subjects/mathematics/secondary/s2-direct-inverse-proportion';
import { S2_MATH_PYTHAGORAS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s2-pythagoras';
import type { PythagorasTopicId } from '../../prompt-library/subjects/mathematics/secondary/s2-pythagoras';
import { S2_MATH_TRIGONOMETRIC_RATIOS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s2-trigonometric-ratios';
import type { TrigonometricRatiosTopicId } from '../../prompt-library/subjects/mathematics/secondary/s2-trigonometric-ratios';
import { S2_PROBABILITY_SINGLE_EVENT_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s2-probability-single-event';
import type { ProbabilitySingleEventTopicId } from '../../prompt-library/subjects/mathematics/secondary/s2-probability-single-event';
import { STATISTICAL_DIAGRAMS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s2-statistical-diagrams';
import type { StatisticalDiagramsTopicId } from '../../prompt-library/subjects/mathematics/secondary/s2-statistical-diagrams';
import { S2_MATH_AVERAGES_SUBTOPICS } from '../../prompt-library/subjects/mathematics/secondary/s2-averages-statistical-data';
import type { AveragesTopicId } from '../../prompt-library/subjects/mathematics/secondary/s2-averages-statistical-data';
// Primary level imports
import { P5_MATH_NUMBERS_10_MILLION_SUBTOPICS } from '../../prompt-library/subjects/mathematics/primary/p5-numbers-10-million';
import type { Numbers10MillionTopicId } from '../../prompt-library/subjects/mathematics/primary/p5-numbers-10-million';
import { P5_MATH_FOUR_OPERATIONS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/primary/p5-four-operations';
import type { FourOperationsTopicId } from '../../prompt-library/subjects/mathematics/primary/p5-four-operations';
import { P5_MATH_FRACTIONS_DIVISIONS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/primary/p5-fractions-divisions';
import type { FractionsDivisionsTopicId } from '../../prompt-library/subjects/mathematics/primary/p5-fractions-divisions';
import { P5_MATH_FOUR_OPERATIONS_FRACTIONS_SUBTOPICS } from '../../prompt-library/subjects/mathematics/primary/p5-four-operations-fractions';
import type { FourOperationsFractionsTopicId } from '../../prompt-library/subjects/mathematics/primary/p5-four-operations-fractions';
import type { LayoutActions } from './MainLayout';

interface LeftPanelProps {
  isCollapsed: boolean;
  width: number;
  layoutActions: LayoutActions;
}

function getTopicIcon(topicId: string): string {
  // P5 Numbers up to 10 Million icons
  if (topicId.includes('place-value')) return '📊';
  if (topicId.includes('writing-representing')) return '✍️';
  if (topicId.includes('comparing-ordering')) return '⚖️';

  // P5 Four Operations of Fractions icons (check BEFORE four-operations since it's more specific)
  if (topicId.startsWith('p5-math-four-operations-fractions-')) {
    const icons = ['➕', '✖️', '🔢', '🔗', '📝'];  // Add/Sub Mixed, Multiply Fraction×Whole, Multiply 2 Fractions, Multiply Mixed×Whole, Word Problems
    const index = Object.keys(P5_MATH_FOUR_OPERATIONS_FRACTIONS_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }
  // P5 Four Operations icons
  if (topicId.startsWith('p5-math-four-operations-')) {
    const icons = ['✖️', '🔢', '➗', '📊', '📐', '🔤', '📝'];
    const index = Object.keys(P5_MATH_FOUR_OPERATIONS_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }
  // P5 Fractions and Divisions icons
  if (topicId.startsWith('p5-math-fractions-divisions-')) {
    const icons = ['🍕', '🔢'];  // Pizza for division as sharing, decimal for decimals
    const index = Object.keys(P5_MATH_FRACTIONS_DIVISIONS_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }
  // P6 Fractions icons
  if (topicId.includes('dividing-whole-numbers')) return '➗';
  if (topicId.includes('whole-number-dividing')) return '🔢';
  if (topicId.includes('fraction-dividing-fraction')) return '📏';
  if (topicId.includes('word-problems')) return '📝';

  // S1 Factors & Multiples icons
  if (topicId.includes('introduction')) return '🔢';
  if (topicId.includes('prime-factorisation')) return '🌲';
  if (topicId.includes('hcf')) return '🔺';
  if (topicId.includes('lcm')) return '🔷';
  if (topicId.includes('square-cube-roots')) return '√';

  // S1 Real Numbers icons
  if (topicId.includes('negative-numbers-number-line')) return '📏';
  if (topicId.includes('addition-subtraction-integers')) return '🔵';
  if (topicId.includes('multiplication-division-integers')) return '✖️';
  if (topicId.includes('rational-irrational-numbers')) return '√';
  if (topicId.includes('operations-real-numbers')) return '🧮';

  // S1 Approximation & Estimation icons
  if (topicId.includes('rounding-decimal-places')) return '🔄';
  if (topicId.includes('significant-figures')) return '🔢';
  if (topicId.includes('techniques')) return '🎯';

  // S1 Basic Algebra icons
  if (topicId.includes('notation')) return '🔤';
  if (topicId.includes('simplifying')) return '🧹';
  if (topicId.includes('expanding')) return '📦';
  if (topicId.includes('factorization')) return '✂️';
  if (topicId.includes('equations')) return '⚖️';
  if (topicId.includes('changing-subject')) return '🔄';
  if (topicId.includes('word-problems')) return '📝';

  // S1 Simple Linear Equations icons
  if (topicId === 's1-math-simple-linear-equations-introduction') return '🎯';
  if (topicId === 's1-math-simple-linear-equations-both-sides') return '⚖️';
  if (topicId === 's1-math-simple-linear-equations-fractional') return '➗';
  if (topicId === 's1-math-simple-linear-equations-word-problems') return '📝';

  // S1 Angles and Parallel Lines icons
  if (topicId === 's1-math-angles-parallel-lines-introduction') return '📐';
  if (topicId === 's1-math-angles-parallel-lines-angles-at-point') return '⭕';
  if (topicId === 's1-math-angles-parallel-lines-angles-on-line') return '📏';
  if (topicId === 's1-math-angles-parallel-lines-vertically-opposite') return '✖️';
  if (topicId === 's1-math-angles-parallel-lines-basic-parallel') return '🔀';
  if (topicId === 's1-math-angles-parallel-lines-advanced-parallel') return '🔁';

  // S1 Ratio, Rate, and Speed icons
  if (topicId === 's1-math-ratio-rate-speed-understanding-ratios') return '⚖️';
  if (topicId === 's1-math-ratio-rate-speed-proportions') return '📊';
  if (topicId === 's1-math-ratio-rate-speed-rate-speed') return '⚡';
  if (topicId === 's1-math-ratio-rate-speed-unit-conversion') return '🔄';

  // S1 Percentage icons
  if (topicId.startsWith('s1-math-percentage-')) {
    const icons = ['%', '🔄', '📊', '⚖️', '📈', '🔙', '💰'];
    const index = Object.keys(S1_PERCENTAGE_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }

  // S1 Linear Functions & Graphs icons
  if (topicId.startsWith('s1-math-linear-functions-')) {
    const icons = ['📍', '🔗', '📈', '📐'];
    const index = Object.keys(S1_LINEAR_FUNCTIONS_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }

  // S1 Perimeter & Area icons
  if (topicId.startsWith('s1-math-perimeter-area-')) {
    const icons = ['▭', '🔷', '🧩'];
    const index = Object.keys(S1_MATH_PERIMETER_AREA_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }

  // S1 Data Handling icons
  if (topicId.startsWith('s1-math-data-')) {
    const icons = ['📋', '📊', '📈', '🎨', '📉', '🔍'];
    const index = Object.keys(S1_MATH_DATA_HANDLING_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }

  // S2 Linear Graphs icons
  if (topicId.startsWith('s2-math-linear-graphs-')) {
    const icons = ['📍', '📈', '📝', '📐', '🎯', '⚖️', '🔧'];
    const index = Object.keys(LINEAR_GRAPHS_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }

  // S2 Linear Inequalities icons
  if (topicId.startsWith('s2-math-linear-inequalities-')) {
    const icons = ['≤', '🔢', '📊', '📈', '🎯', '📐'];
    const index = Object.keys(LINEAR_INEQUALITIES_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }

  // S2 Expansion & Factorisation icons
  if (topicId.startsWith('s2-math-expansion-factorisation-')) {
    const icons = ['🔢', '📦', '✖️', '📈', '✂️', '🎯', '➖', '➕', '🔧', '🧩', '💠', '⬜'];
    const index = Object.keys(S2_MATH_EXPANSION_FACTORISATION_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }

  // S2 Quadratic Equations & Graphs icons
  if (topicId.startsWith('s2-math-quadratics-')) {
    const icons = ['📐', '📏', '✂️', '📊', '🎯', '🔧'];
    const index = Object.keys(S2_MATH_QUADRATIC_EQUATIONS_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }

  // S2 Algebraic Fractions & Formulae icons
  if (topicId.startsWith('s2-math-algebraic-fractions-')) {
    const icons = ['🧮', '🔧', '✖️', '➕', '⚖️'];
    const index = Object.keys(S2_MATH_ALGEBRAIC_FRACTIONS_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }

  // S2 Direct and Inverse Proportion icons
  if (topicId.startsWith('s2-math-proportion-')) {
    const icons = ['⚖️', '📈', '📊', '🔄', '📉', '💫'];
    const index = Object.keys(S2_MATH_PROPORTION_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }

  // S2 Pythagoras' Theorem icons
  if (topicId.startsWith('s2-math-pythagoras-')) {
    const icons = ['△', '📐', '📏', '🏗️', '✅'];
    const index = Object.keys(S2_MATH_PYTHAGORAS_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }

  // S2 Trigonometric Ratios icons
  if (topicId.startsWith('s2-math-trig-ratios-')) {
    const icons = ['📐', '📏', '📊', '∠', '🏔️'];
    const index = Object.keys(S2_MATH_TRIGONOMETRIC_RATIOS_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }

  // S2 Probability Single Event icons
  if (topicId.startsWith('s2-math-probability-')) {
    const icons = ['🎲', '📊', '🔬', '🎯'];
    const index = Object.keys(S2_PROBABILITY_SINGLE_EVENT_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }

  // S2 Statistical Diagrams icons
  if (topicId.startsWith('s2-math-statistical-diagrams-')) {
    const icons = ['📊', '•', '📊', '📋', '📈'];
    const index = Object.keys(STATISTICAL_DIAGRAMS_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }

  // S2 Averages of Statistical Data icons
  if (topicId.startsWith('s2-math-averages-')) {
    const icons = ['📊', '➗', '📏', '🔢', '⚖️'];
    const index = Object.keys(S2_MATH_AVERAGES_SUBTOPICS).indexOf(topicId);
    return icons[index >= 0 ? index : 0];
  }

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

  // S4 Advanced Trigonometry icons
  if (topicId === 's4-math-advanced-trig-unit-circle') return '⭕';
  if (topicId === 's4-math-advanced-trig-functions-graphs') return '📈';
  if (topicId === 's4-math-advanced-trig-transformations') return '🔄';
  if (topicId === 's4-math-advanced-trig-equations-identities') return '∑';
  if (topicId === 's4-math-advanced-trig-radians') return '🔵';

  // S4 Vectors icons
  if (topicId === 's4-math-vectors-fundamentals') return '→';
  if (topicId === 's4-math-vectors-component-form') return '📊';
  if (topicId === 's4-math-vectors-magnitude-ops') return '📏';
  if (topicId === 's4-math-vectors-parallelism') return '⫽';
  if (topicId === 's4-math-vectors-dot-product') return '•';

  return '📐';
}

function getCategoryDisplayName(category: string): string {
  // Primary 5 categories
  if (category === 'p5-math-numbers-10-million') return 'Numbers up to 10 Million';
  if (category === 'p5-math-four-operations') return 'Four Operations on Whole Numbers';
  if (category === 'p5-math-fractions-divisions') return 'Fractions and Division';
  if (category === 'p5-math-four-operations-fractions') return 'Four Operations of Fractions';
  if (category === 'fractions') return 'Fractions';
  if (category === 's1-math-factors-multiples') return 'Factors & Multiples';
  if (category === 's1-math-real-numbers') return 'Real Numbers';
  if (category === 's1-math-approximation-estimation') return 'Approximation & Estimation';
  if (category === 's1-math-basic-algebra') return 'Basic Algebra';
  if (category === 's1-math-simple-linear-equations') return 'Simple Linear Equations';
  if (category === 's1-math-angles-parallel-lines') return 'Angles & Parallel Lines';
  if (category === 's1-math-ratio-rate-speed') return 'Ratio, Rate, and Speed';
  if (category === 's1-math-percentage') return 'Percentage';
  if (category === 's1-math-linear-functions-graphs') return 'Linear Functions & Graphs';
  if (category === 's1-math-perimeter-area') return 'Perimeter & Area';
  if (category === 's1-math-data-handling') return 'Data Handling';
  if (category === 's2-math-linear-graphs') return 'Linear Graphs & Equations';
  if (category === 's2-math-linear-inequalities') return 'Linear Inequalities';
  if (category === 's2-math-expansion-factorisation') return 'Expansion & Factorisation';
  if (category === 's2-math-quadratic-equations-graphs') return 'Quadratic Equations & Graphs';
  if (category === 's2-math-algebraic-fractions-formulae') return 'Algebraic Fractions & Formulae';
  if (category === 's2-math-direct-inverse-proportion') return 'Direct & Inverse Proportion';
  if (category === 's2-math-pythagoras') return 'Pythagoras\' Theorem';
  if (category === 's2-math-trigonometric-ratios') return 'Trigonometric Ratios';
  if (category === 's2-math-probability-single-event') return 'Probability of Single Events';
  if (category === 's2-math-statistical-diagrams') return 'Statistical Diagrams';
  if (category === 's2-math-averages-statistical-data') return 'Averages of Statistical Data';
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
  if (category === 's4-math-advanced-trig') return 'Advanced Trigonometry';
  if (category === 's4-math-vectors') return 'Vectors';
  if (category === 's3-math-surds-radicals') return 'Surds & Radicals';
  if (category === 's3-math-statistics') return 'Statistics';
  if (category === 's3-math-relations-functions') return 'Relations & Functions';
  if (category === 's3-math-coordinate-geometry') return 'Coordinate Geometry';
  return category;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ isCollapsed, width, layoutActions }) => {
  const { theme } = useTheme();
  const { pathId } = useParams<{ pathId: string }>();
  const { goToLearn, goToHome, goToPractice } = useAppNavigation();
  const [searchTerm, setSearchTerm] = useState('');

  // Derive category from pathId
  // Derive category from pathId
  // Import helper to check if it's a valid path
  const knownPaths = [
    // Primary 5 paths
    'p5-math-numbers-10-million',
    'p5-math-four-operations',
    'p5-math-fractions-divisions',
    'p5-math-four-operations-fractions',
    // Secondary 1 paths
    's1-math-factors-multiples', 's1-math-real-numbers', 's1-math-approximation-estimation', 's1-math-basic-algebra',
    's1-math-simple-linear-equations', 's1-math-angles-parallel-lines', 's1-math-ratio-rate-speed', 's1-math-percentage',
    's1-math-linear-functions-graphs', 's1-math-perimeter-area', 's1-math-data-handling', 's2-math-linear-graphs', 's2-math-linear-inequalities', 's2-math-expansion-factorisation', 's2-math-quadratic-equations-graphs', 's2-math-algebraic-fractions-formulae', 's2-math-direct-inverse-proportion', 's2-math-pythagoras', 's2-math-trigonometric-ratios', 's2-math-probability-single-event', 's2-math-statistical-diagrams', 's2-math-averages-statistical-data', 's3-math-trigonometry', 's3-math-circle-geometry', 's3-math-quadratic-equations',
    's3-math-exponential-logarithms', 's3-math-sets-venn-diagrams', 's3-math-exponents',
    's3-math-surds-radicals', 's3-math-statistics', 's3-math-relations-functions',
    's3-math-coordinate-geometry', 's4-math-differential-calculus', 's4-math-integration',
    's4-math-probability', 's4-math-quad', 's4-math-advanced-trig', 's4-math-vectors'
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
    // Close the drawer on mobile after selecting a topic
    if (window.innerWidth < 768) {
      layoutActions.collapseAllPanels();
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
    if (selectedCategory === 's1-math-factors-multiples') {
      return Object.entries(S1_MATH_FACTORS_MULTIPLES_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as FactorsMultiplesTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's1-math-real-numbers') {
      return Object.entries(S1_MATH_REAL_NUMBERS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as RealNumbersTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's1-math-approximation-estimation') {
      return Object.entries(S1_MATH_APPROXIMATION_ESTIMATION_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as ApproximationEstimationTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's1-math-basic-algebra') {
      return Object.entries(S1_MATH_BASIC_ALGEBRA_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as BasicAlgebraTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's1-math-simple-linear-equations') {
      return Object.entries(S1_SIMPLE_LINEAR_EQUATIONS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as SimpleLinearEquationsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's1-math-angles-parallel-lines') {
      return Object.entries(S1_MATH_ANGLES_PARALLEL_LINES_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as AnglesParallelLinesTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's1-math-ratio-rate-speed') {
      return Object.entries(S1_MATH_RATIO_RATE_SPEED_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as RatioRateSpeedTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's1-math-percentage') {
      return Object.entries(S1_PERCENTAGE_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as PercentageTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's1-math-linear-functions-graphs') {
      return Object.entries(S1_LINEAR_FUNCTIONS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as LinearFunctionsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's1-math-perimeter-area') {
      return Object.entries(S1_MATH_PERIMETER_AREA_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as PerimeterAreaTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's1-math-data-handling') {
      return Object.entries(S1_MATH_DATA_HANDLING_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as DataHandlingTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's2-math-linear-graphs') {
      return Object.entries(LINEAR_GRAPHS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as LinearGraphsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's2-math-linear-inequalities') {
      return Object.entries(LINEAR_INEQUALITIES_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as LinearInequalitiesTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's2-math-expansion-factorisation') {
      return Object.entries(S2_MATH_EXPANSION_FACTORISATION_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as ExpansionFactorisationTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's2-math-quadratic-equations-graphs') {
      return Object.entries(S2_MATH_QUADRATIC_EQUATIONS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as QuadraticTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's2-math-algebraic-fractions-formulae') {
      return Object.entries(S2_MATH_ALGEBRAIC_FRACTIONS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as AlgebraicFractionsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's2-math-direct-inverse-proportion') {
      return Object.entries(S2_MATH_PROPORTION_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as ProportionTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's2-math-pythagoras') {
      return Object.entries(S2_MATH_PYTHAGORAS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as PythagorasTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's2-math-trigonometric-ratios') {
      return Object.entries(S2_MATH_TRIGONOMETRIC_RATIOS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as TrigonometricRatiosTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's2-math-probability-single-event') {
      return Object.entries(S2_PROBABILITY_SINGLE_EVENT_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as ProbabilitySingleEventTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's2-math-statistical-diagrams') {
      return Object.entries(STATISTICAL_DIAGRAMS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as StatisticalDiagramsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's2-math-averages-statistical-data') {
      return Object.entries(S2_MATH_AVERAGES_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as AveragesTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's3-math-trigonometry') {
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
    } else if (selectedCategory === 's4-math-advanced-trig') {
      return Object.entries(S4_MATH_ADVANCED_TRIGONOMETRY_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId | SetsVennDiagramsTopicId | ExponentsTopicId | SurdsRadicalsTopicId | StatisticsTopicId | RelationsFunctionsTopicId | CoordinateGeometryTopicId | DifferentialCalculusTopicId | IntegrationTopicId | ProbabilityTopicId | QuadraticFunctionsTopicId | AdvancedTrigonometryTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 's4-math-vectors') {
      return Object.entries(S4_VECTORS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId | SetsVennDiagramsTopicId | ExponentsTopicId | SurdsRadicalsTopicId | StatisticsTopicId | RelationsFunctionsTopicId | CoordinateGeometryTopicId | DifferentialCalculusTopicId | IntegrationTopicId | ProbabilityTopicId | QuadraticFunctionsTopicId | AdvancedTrigonometryTopicId | S4VectorsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 'p5-math-numbers-10-million') {
      return Object.entries(P5_MATH_NUMBERS_10_MILLION_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as Numbers10MillionTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 'p5-math-four-operations') {
      return Object.entries(P5_MATH_FOUR_OPERATIONS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as FourOperationsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 'p5-math-fractions-divisions') {
      return Object.entries(P5_MATH_FRACTIONS_DIVISIONS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as FractionsDivisionsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (selectedCategory === 'p5-math-four-operations-fractions') {
      return Object.entries(P5_MATH_FOUR_OPERATIONS_FRACTIONS_SUBTOPICS).map(([topicId, config]) => ({
        id: topicId as FourOperationsFractionsTopicId,
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
    } else if (selectedCategory === 's2-math-direct-inverse-proportion') {
      topicConfig = S2_MATH_PROPORTION_SUBTOPICS[topicId as ProportionTopicId];
    } else if (selectedCategory === 's2-math-pythagoras') {
      topicConfig = S2_MATH_PYTHAGORAS_SUBTOPICS[topicId as PythagorasTopicId];
    } else if (selectedCategory === 's2-math-trigonometric-ratios') {
      topicConfig = S2_MATH_TRIGONOMETRIC_RATIOS_SUBTOPICS[topicId as TrigonometricRatiosTopicId];
    } else if (selectedCategory === 's2-math-probability-single-event') {
      topicConfig = S2_PROBABILITY_SINGLE_EVENT_SUBTOPICS[topicId as ProbabilitySingleEventTopicId];
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
        {/* Category Header */}
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: theme.colors.brand }}
            >
              {selectedCategory === 'fractions' ? '➗' :
               selectedCategory === 's1-math-ratio-rate-speed' ? '⚡' :
               selectedCategory === 's2-math-linear-graphs' ? '📈' :
               selectedCategory === 's2-math-linear-inequalities' ? '≤' :
               selectedCategory === 's2-math-expansion-factorisation' ? '🔧' :
               selectedCategory === 's2-math-quadratic-equations-graphs' ? '📊' :
               selectedCategory === 's2-math-algebraic-fractions-formulae' ? '🧮' :
               selectedCategory === 's2-math-direct-inverse-proportion' ? '⚖️' :
               selectedCategory === 's2-math-pythagoras' ? '△' :
               selectedCategory === 's2-math-trigonometric-ratios' ? '📐' :
               selectedCategory === 's2-math-probability-single-event' ? '🎲' :
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

          {/* Home Button */}
          <button
            onClick={goToHome}
            className="p-1.5 rounded-md transition-colors duration-200"
            style={{
              color: theme.colors.textSecondary,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.interactive;
              e.currentTarget.style.color = theme.colors.textPrimary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = theme.colors.textSecondary;
            }}
            title="Go to Home"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>

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

        {/* Practice Mode Button */}
        <div className="px-4 pb-3">
          <button
            onClick={() => goToPractice(selectedCategory)}
            className="w-full px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center space-x-2"
            style={{
              backgroundColor: theme.colors.brand,
              color: 'white',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            title="Switch to Practice Mode for this topic"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Practice Mode</span>
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

    </div>
  );
};

export default LeftPanel;