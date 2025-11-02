/**
 * NotesLoader Service
 *
 * Dynamically loads and manages React component-based notes for subtopics.
 * Supports both .tsx React components and .md markdown files.
 */

import { configLoader } from './configLoader';
import { type ComponentType } from 'react';

// Import all notes components statically
// This is required because Vite doesn't support fully dynamic imports
const notesComponents: Record<string, () => Promise<{ default: ComponentType<any> }>> = {
  // S1 Factors & Multiples notes
  's1/math/factors-multiples/IntroductionToFactorsMultiples': () => import('../notes/s1/math/factors-multiples/IntroductionToFactorsMultiples'),
  's1/math/factors-multiples/PrimeNumbersAndFactorisation': () => import('../notes/s1/math/factors-multiples/PrimeNumbersAndFactorisation'),
  's1/math/factors-multiples/HighestCommonFactor': () => import('../notes/s1/math/factors-multiples/HighestCommonFactor'),
  's1/math/factors-multiples/LowestCommonMultiple': () => import('../notes/s1/math/factors-multiples/LowestCommonMultiple'),
  's1/math/factors-multiples/SquareAndCubeRoots': () => import('../notes/s1/math/factors-multiples/SquareAndCubeRoots'),
  // S1 Real Numbers notes
  's1/math/real-numbers/NegativeNumbersAndNumberLine': () => import('../notes/s1/math/real-numbers/NegativeNumbersAndNumberLine'),
  's1/math/real-numbers/AdditionSubtractionIntegers': () => import('../notes/s1/math/real-numbers/AdditionSubtractionIntegers'),
  's1/math/real-numbers/MultiplicationDivisionIntegers': () => import('../notes/s1/math/real-numbers/MultiplicationDivisionIntegers'),
  's1/math/real-numbers/RationalIrrationalNumbers': () => import('../notes/s1/math/real-numbers/RationalIrrationalNumbers'),
  's1/math/real-numbers/OperationsRealNumbers': () => import('../notes/s1/math/real-numbers/OperationsRealNumbers'),
  // S1 Approximation & Estimation notes
  's1/math/approximation-estimation/RoundingDecimalPlaces': () => import('../notes/s1/math/approximation-estimation/RoundingDecimalPlaces'),
  's1/math/approximation-estimation/SignificantFigures': () => import('../notes/s1/math/approximation-estimation/SignificantFigures'),
  's1/math/approximation-estimation/EstimationTechniques': () => import('../notes/s1/math/approximation-estimation/EstimationTechniques'),

  // S1 Basic Algebra notes
  's1/math/basic-algebra/AlgebraicNotation': () => import('../notes/s1/math/basic-algebra/AlgebraicNotation'),
  's1/math/basic-algebra/SimplifyingExpressions': () => import('../notes/s1/math/basic-algebra/SimplifyingExpressions'),
  's1/math/basic-algebra/ExpandingBrackets': () => import('../notes/s1/math/basic-algebra/ExpandingBrackets'),
  's1/math/basic-algebra/Factorization': () => import('../notes/s1/math/basic-algebra/Factorization'),
  's1/math/basic-algebra/LinearEquations': () => import('../notes/s1/math/basic-algebra/LinearEquations'),
  's1/math/basic-algebra/ChangingTheSubject': () => import('../notes/s1/math/basic-algebra/ChangingTheSubject'),
  's1/math/basic-algebra/WordProblems': () => import('../notes/s1/math/basic-algebra/WordProblems'),
  // S1 Simple Linear Equations notes
  's1/math/simple-linear-equations/IntroductionToLinearEquations': () => import('../notes/s1/math/simple-linear-equations/IntroductionToLinearEquations'),
  's1/math/simple-linear-equations/VariablesOnBothSides': () => import('../notes/s1/math/simple-linear-equations/VariablesOnBothSides'),
  's1/math/simple-linear-equations/FractionalEquations': () => import('../notes/s1/math/simple-linear-equations/FractionalEquations'),
  's1/math/simple-linear-equations/WordProblemsApplications': () => import('../notes/s1/math/simple-linear-equations/WordProblemsApplications'),
  // S1 Angles and Parallel Lines notes
  's1/math/angles-parallel-lines/IntroductionToAngles': () => import('../notes/s1/math/angles-parallel-lines/IntroductionToAngles'),
  's1/math/angles-parallel-lines/AnglesAtPoint': () => import('../notes/s1/math/angles-parallel-lines/AnglesAtPoint'),
  's1/math/angles-parallel-lines/AnglesOnStraightLine': () => import('../notes/s1/math/angles-parallel-lines/AnglesOnStraightLine'),
  's1/math/angles-parallel-lines/VerticallyOppositeAngles': () => import('../notes/s1/math/angles-parallel-lines/VerticallyOppositeAngles'),
  's1/math/angles-parallel-lines/ParallelLinesBasic': () => import('../notes/s1/math/angles-parallel-lines/ParallelLinesBasic'),
  's1/math/angles-parallel-lines/ParallelLinesAdvanced': () => import('../notes/s1/math/angles-parallel-lines/ParallelLinesAdvanced'),
  // S3 Trigonometry notes
  's3/math/trigonometry/BasicRatios': () => import('../notes/s3/math/trigonometry/BasicRatios'),
  's3/math/trigonometry/ProblemSolving': () => import('../notes/s3/math/trigonometry/ProblemSolving'),
  's3/math/trigonometry/TrueBearings': () => import('../notes/s3/math/trigonometry/TrueBearings'),
  's3/math/trigonometry/ObtuseAngles': () => import('../notes/s3/math/trigonometry/ObtuseAngles'),
  's3/math/trigonometry/AreaOfTriangle': () => import('../notes/s3/math/trigonometry/AreaOfTriangle'),
  's3/math/trigonometry/SineRule': () => import('../notes/s3/math/trigonometry/SineRule'),
  's3/math/trigonometry/CosineRule': () => import('../notes/s3/math/trigonometry/CosineRule'),
  's3/math/circle-geometry/Definitions': () => import('../notes/s3/math/circle-geometry/Definitions'),
  's3/math/circle-geometry/AngleInSemicircle': () => import('../notes/s3/math/circle-geometry/AngleInSemicircle'),
  's3/math/circle-geometry/Chords': () => import('../notes/s3/math/circle-geometry/Chords'),
  's3/math/circle-geometry/RadiusTangent': () => import('../notes/s3/math/circle-geometry/RadiusTangent'),
  's3/math/circle-geometry/TangentsExternal': () => import('../notes/s3/math/circle-geometry/TangentsExternal'),
  's3/math/circle-geometry/AngleCentre': () => import('../notes/s3/math/circle-geometry/AngleCentre'),
  's3/math/circle-geometry/AngleSameArc': () => import('../notes/s3/math/circle-geometry/AngleSameArc'),
  's3/math/quadratic-equations/SolvingStandardForm': () => import('../notes/s3/math/quadratic-equations/SolvingStandardForm'),
  's3/math/quadratic-equations/SolvingFactorization': () => import('../notes/s3/math/quadratic-equations/SolvingFactorization'),
  's3/math/quadratic-equations/SolvingFractional': () => import('../notes/s3/math/quadratic-equations/SolvingFractional'),
  's3/math/quadratic-equations/SolvingCompletingSquare': () => import('../notes/s3/math/quadratic-equations/SolvingCompletingSquare'),
  's3/math/quadratic-equations/SolvingFormula': () => import('../notes/s3/math/quadratic-equations/SolvingFormula'),
  's3/math/quadratic-equations/SolvingExponential': () => import('../notes/s3/math/quadratic-equations/SolvingExponential'),
  's3/math/quadratic-equations/WordProblems': () => import('../notes/s3/math/quadratic-equations/WordProblems'),
  's3/math/quadratic-equations/GraphFeatures': () => import('../notes/s3/math/quadratic-equations/GraphFeatures'),
  's3/math/quadratic-equations/GraphCompletedSquare': () => import('../notes/s3/math/quadratic-equations/GraphCompletedSquare'),
  's3/math/quadratic-equations/GraphFactorised': () => import('../notes/s3/math/quadratic-equations/GraphFactorised'),
  's3/math/quadratic-equations/GraphPolynomial': () => import('../notes/s3/math/quadratic-equations/GraphPolynomial'),
  's3/math/quadratic-equations/GraphFindingFunction': () => import('../notes/s3/math/quadratic-equations/GraphFindingFunction'),
  's3/math/quadratic-equations/GraphProblemSolving': () => import('../notes/s3/math/quadratic-equations/GraphProblemSolving'),
  's3/math/exponential-logarithms/ExponentialFunctions': () => import('../notes/s3/math/exponential-logarithms/ExponentialFunctions'),
  's3/math/exponential-logarithms/ExponentialGraphs': () => import('../notes/s3/math/exponential-logarithms/ExponentialGraphs'),
  's3/math/exponential-logarithms/ExponentialEquations': () => import('../notes/s3/math/exponential-logarithms/ExponentialEquations'),
  's3/math/exponential-logarithms/ExponentialGrowth': () => import('../notes/s3/math/exponential-logarithms/ExponentialGrowth'),
  's3/math/exponential-logarithms/ExponentialDecay': () => import('../notes/s3/math/exponential-logarithms/ExponentialDecay'),
  's3/math/exponential-logarithms/CommonLogarithms': () => import('../notes/s3/math/exponential-logarithms/CommonLogarithms'),
  's3/math/exponential-logarithms/LogarithmLaws': () => import('../notes/s3/math/exponential-logarithms/LogarithmLaws'),
  's3/math/exponential-logarithms/UsingLogarithms': () => import('../notes/s3/math/exponential-logarithms/UsingLogarithms'),
  's3/math/exponential-logarithms/LogarithmsOtherBases': () => import('../notes/s3/math/exponential-logarithms/LogarithmsOtherBases'),
  's3/math/exponents/ExponentLaws': () => import('../notes/s3/math/exponents/ExponentLaws'),
  's3/math/exponents/RationalExponents': () => import('../notes/s3/math/exponents/RationalExponents'),
  's3/math/exponents/StandardForm': () => import('../notes/s3/math/exponents/StandardForm'),
  's3/math/surds-radicals/SurdsFundamentals': () => import('../notes/s3/math/surds-radicals/SurdsFundamentals'),
  's3/math/surds-radicals/SimplifyingSurds': () => import('../notes/s3/math/surds-radicals/SimplifyingSurds'),
  's3/math/surds-radicals/AddingSubtractingSurds': () => import('../notes/s3/math/surds-radicals/AddingSubtractingSurds'),
  's3/math/surds-radicals/MultiplyingDividingSurds': () => import('../notes/s3/math/surds-radicals/MultiplyingDividingSurds'),
  's3/math/surds-radicals/RationalizingDenominators': () => import('../notes/s3/math/surds-radicals/RationalizingDenominators'),
  's3/math/surds-radicals/MixedOperations': () => import('../notes/s3/math/surds-radicals/MixedOperations'),
  // S3 Statistics notes
  's3/math/statistics/DataTypes': () => import('../notes/s3/math/statistics/DataTypes'),
  's3/math/statistics/MeasuresOfCentre': () => import('../notes/s3/math/statistics/MeasuresOfCentre'),
  's3/math/statistics/BoxPlots': () => import('../notes/s3/math/statistics/BoxPlots'),
  's3/math/statistics/CumulativeFrequency': () => import('../notes/s3/math/statistics/CumulativeFrequency'),
  's3/math/statistics/StandardDeviation': () => import('../notes/s3/math/statistics/StandardDeviation'),
  's3/math/statistics/NormalDistribution': () => import('../notes/s3/math/statistics/NormalDistribution'),
  's3/math/sets-venn-diagrams/Sets': () => import('../notes/s3/math/sets-venn-diagrams/Sets'),
  's3/math/sets-venn-diagrams/ComplementOfSet': () => import('../notes/s3/math/sets-venn-diagrams/ComplementOfSet'),
  's3/math/sets-venn-diagrams/IntersectionUnion': () => import('../notes/s3/math/sets-venn-diagrams/IntersectionUnion'),
  's3/math/sets-venn-diagrams/SpecialNumberSets': () => import('../notes/s3/math/sets-venn-diagrams/SpecialNumberSets'),
  's3/math/sets-venn-diagrams/IntervalNotation': () => import('../notes/s3/math/sets-venn-diagrams/IntervalNotation'),
  's3/math/sets-venn-diagrams/VennDiagrams': () => import('../notes/s3/math/sets-venn-diagrams/VennDiagrams'),
  's3/math/sets-venn-diagrams/VennDiagramRegions': () => import('../notes/s3/math/sets-venn-diagrams/VennDiagramRegions'),
  's3/math/sets-venn-diagrams/NumbersInRegions': () => import('../notes/s3/math/sets-venn-diagrams/NumbersInRegions'),
  's3/math/sets-venn-diagrams/ProblemSolvingVenn': () => import('../notes/s3/math/sets-venn-diagrams/ProblemSolvingVenn'),
  // S3 Relations & Functions notes
  's3/math/relations-functions/RelationsFunctionsFundamentals': () => import('../notes/s3/math/relations-functions/RelationsFunctionsFundamentals'),
  's3/math/relations-functions/FunctionNotation': () => import('../notes/s3/math/relations-functions/FunctionNotation'),
  's3/math/relations-functions/DomainAndRange': () => import('../notes/s3/math/relations-functions/DomainAndRange'),
  's3/math/relations-functions/SignDiagrams': () => import('../notes/s3/math/relations-functions/SignDiagrams'),
  's3/math/relations-functions/TransformationsOfGraphs': () => import('../notes/s3/math/relations-functions/TransformationsOfGraphs'),
  's3/math/relations-functions/AbsoluteValueFunction': () => import('../notes/s3/math/relations-functions/AbsoluteValueFunction'),
  // S3 Coordinate Geometry notes
  's3/math/coordinate-geometry/CoordinatePlaneFundamentals': () => import('../notes/s3/math/coordinate-geometry/CoordinatePlaneFundamentals'),
  's3/math/coordinate-geometry/GradientAndLineRelationships': () => import('../notes/s3/math/coordinate-geometry/GradientAndLineRelationships'),
  's3/math/coordinate-geometry/LineEquations': () => import('../notes/s3/math/coordinate-geometry/LineEquations'),
  's3/math/coordinate-geometry/GraphingStraightLines': () => import('../notes/s3/math/coordinate-geometry/GraphingStraightLines'),
  's3/math/coordinate-geometry/PerpendicularBisectors': () => import('../notes/s3/math/coordinate-geometry/PerpendicularBisectors'),
  's3/math/coordinate-geometry/CoordinateGeometryApplications': () => import('../notes/s3/math/coordinate-geometry/CoordinateGeometryApplications'),
  's3/math/coordinate-geometry/ThreeDimensionalCoordinates': () => import('../notes/s3/math/coordinate-geometry/ThreeDimensionalCoordinates'),
  // S4 Differential Calculus notes
  's4/math/differential-calculus/Limits': () => import('../notes/s4/math/differential-calculus/Limits'),
  's4/math/differential-calculus/GradientOfTangent': () => import('../notes/s4/math/differential-calculus/GradientOfTangent'),
  's4/math/differential-calculus/DerivativeFunction': () => import('../notes/s4/math/differential-calculus/DerivativeFunction'),
  's4/math/differential-calculus/FirstPrinciples': () => import('../notes/s4/math/differential-calculus/FirstPrinciples'),
  's4/math/differential-calculus/DifferentiationRules': () => import('../notes/s4/math/differential-calculus/DifferentiationRules'),
  's4/math/differential-calculus/TangentEquations': () => import('../notes/s4/math/differential-calculus/TangentEquations'),
  's4/math/differential-calculus/StationaryPoints': () => import('../notes/s4/math/differential-calculus/StationaryPoints'),
  // S4 Integration notes
  's4/math/integration/AreaUnderCurves': () => import('../notes/s4/math/integration/AreaUnderCurves'),
  's4/math/integration/Antiderivatives': () => import('../notes/s4/math/integration/Antiderivatives'),
  's4/math/integration/IntegrationRules': () => import('../notes/s4/math/integration/IntegrationRules'),
  's4/math/integration/DefiniteIntegrals': () => import('../notes/s4/math/integration/DefiniteIntegrals'),
  's4/math/integration/RiemannSums': () => import('../notes/s4/math/integration/RiemannSums'),
  // S4 Probability notes
  's4/math/probability/BasicConcepts': () => import('../notes/s4/math/probability/BasicConcepts'),
  's4/math/probability/CombinedEvents': () => import('../notes/s4/math/probability/CombinedEvents'),
  's4/math/probability/ProbabilityTrees': () => import('../notes/s4/math/probability/ProbabilityTrees'),
  's4/math/probability/ConditionalProbability': () => import('../notes/s4/math/probability/ConditionalProbability'),
  's4/math/probability/Applications': () => import('../notes/s4/math/probability/Applications'),

  // S4 Quadratic Functions notes
  's4/math/quadratic-functions/QuadraticFundamentals': () => import('../notes/s4/math/quadratic-functions/QuadraticFundamentals'),
  's4/math/quadratic-functions/GraphsTransformations': () => import('../notes/s4/math/quadratic-functions/GraphsTransformations'),
  's4/math/quadratic-functions/KeyFeatures': () => import('../notes/s4/math/quadratic-functions/KeyFeatures'),
  's4/math/quadratic-functions/FindingQuadratics': () => import('../notes/s4/math/quadratic-functions/FindingQuadratics'),
  's4/math/quadratic-functions/QuadraticInequalities': () => import('../notes/s4/math/quadratic-functions/QuadraticInequalities'),
  // S4 Advanced Trigonometry notes
  's4/math/advanced-trigonometry/UnitCircleSpecialAngles': () => import('../notes/s4/math/advanced-trigonometry/UnitCircleSpecialAngles'),
  's4/math/advanced-trigonometry/TrigonometricFunctionsGraphs': () => import('../notes/s4/math/advanced-trigonometry/TrigonometricFunctionsGraphs'),
  's4/math/advanced-trigonometry/Transformations': () => import('../notes/s4/math/advanced-trigonometry/Transformations'),
  's4/math/advanced-trigonometry/EquationsIdentities': () => import('../notes/s4/math/advanced-trigonometry/EquationsIdentities'),
  's4/math/advanced-trigonometry/RadianMeasure': () => import('../notes/s4/math/advanced-trigonometry/RadianMeasure'),
  // S4 Vectors notes
  's4/math/vectors/VectorFundamentals': () => import('../notes/s4/math/vectors/VectorFundamentals'),
  's4/math/vectors/ComponentForm': () => import('../notes/s4/math/vectors/ComponentForm'),
  's4/math/vectors/MagnitudeOperations': () => import('../notes/s4/math/vectors/MagnitudeOperations'),
  's4/math/vectors/Parallelism': () => import('../notes/s4/math/vectors/Parallelism'),
  's4/math/vectors/DotProduct': () => import('../notes/s4/math/vectors/DotProduct'),
  // Add more note components here as you create them
  // 'p4/science/biology/PlantParts': () => import('../notes/p4/science/biology/PlantParts'),
};

interface NotesCache {
  [key: string]: ComponentType<any>;
}

class NotesLoaderService {
  private cache: NotesCache = {};

  /**
   * Load notes component for a subtopic
   * @param subtopicId - The subtopic ID
   * @returns React component or null if not available
   */
  async loadNotesComponent(subtopicId: string): Promise<ComponentType<any> | null> {
    // Check cache first
    if (this.cache[subtopicId]) {
      return this.cache[subtopicId];
    }

    // Get config to find notes component path
    const config = await configLoader.getSubtopicConfig(subtopicId);

    if (!config.notesComponent) {
      console.warn(`No notes component configured for ${subtopicId}`);
      return null;
    }

    try {
      // Get the import function for this component
      const importFn = notesComponents[config.notesComponent];

      if (!importFn) {
        console.warn(`Notes component not found in registry: ${config.notesComponent}`);
        console.warn('Available components:', Object.keys(notesComponents));
        return null;
      }

      // Dynamic import of the notes component
      const notesModule = await importFn();

      if (!notesModule.default) {
        throw new Error(`Notes component ${config.notesComponent} must have a default export`);
      }

      // Cache the loaded component
      this.cache[subtopicId] = notesModule.default;

      return notesModule.default;
    } catch (error) {
      console.error(`Failed to load notes component for ${subtopicId}:`, error);
      return null;
    }
  }

  /**
   * Preload notes component (for performance optimization)
   * @param subtopicId - The subtopic ID to preload
   */
  async preloadNotes(subtopicId: string): Promise<void> {
    await this.loadNotesComponent(subtopicId);
  }

  /**
   * Check if notes are available for a subtopic
   * @param subtopicId - The subtopic ID
   * @returns true if notes component is configured
   */
  async hasNotes(subtopicId: string): Promise<boolean> {
    const config = await configLoader.getSubtopicConfig(subtopicId);
    return !!config.notesComponent;
  }

  /**
   * Clear cache for a specific subtopic or all
   * @param subtopicId - Optional subtopic ID. If not provided, clears all cache
   */
  clearCache(subtopicId?: string): void {
    if (subtopicId) {
      delete this.cache[subtopicId];
    } else {
      this.cache = {};
    }
  }
}

// Export singleton instance
export const notesLoader = new NotesLoaderService();
