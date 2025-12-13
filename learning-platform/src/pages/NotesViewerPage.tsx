/**
 * Notes Viewer Test Page
 *
 * Development tool for viewing and testing all notes components.
 * Renders notes exactly as they appear in the learn module for quick testing.
 */

import { useState, useEffect, Suspense } from 'react';
import { BookOpen, Loader2, Moon, Sun } from 'lucide-react';
import NotesThemeWrapper from '../components/NotesThemeWrapper';
import { useTheme } from '../hooks/useTheme';

// Notes registry - extracted from notesLoader.ts
const notesRegistry: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {

  // S2 Line Graphs notes
  's2/math/linear-graph/IntroToLineGraphs': () => import('../notes/s2/math/linear-graph/IntroToLinearGraphs'),
  's2/math/linear-graph/EquationOfLine': () => import('../notes/s2/math/linear-graph/EquationOfLine'),
  's2/math/linear-graph/EquationsFromTwoPoints': () => import('../notes/s2/math/linear-graph/EquationsFromTwoPoints'),
  's2/math/linear-graph/GradientAndIntercept': () => import('../notes/s2/math/linear-graph/GradientAndIntercept'),
  's2/math/linear-graph/GraphingLinearEquations': () => import('../notes/s2/math/linear-graph/GraphingLinearEquations'),
  's2/math/linear-graph/SimultaneousEquationsAlgebraic': () => import('../notes/s2/math/linear-graph/SimultaneousEquationsAlgebraic'),
  's2/math/linear-graph/SimultaneousEquationsIntro': () => import('../notes/s2/math/linear-graph/SimultaneousEquationsIntro'),

  // S2 Linear Inequalities notes
  's2/math/linear-inequalities/IntroductionToInequalities': () => import('../notes/s2/math/linear-inequalities/IntroductionToInequalities'),
  's2/math/linear-inequalities/SolvingLinearInequalities': () => import('../notes/s2/math/linear-inequalities/SolvingLinearInequalities'),
  's2/math/linear-inequalities/RepresentingSolutions': () => import('../notes/s2/math/linear-inequalities/RepresentingSolutions'),
  's2/math/linear-inequalities/GraphingTwoVariableInequalities': () => import('../notes/s2/math/linear-inequalities/GraphingTwoVariableInequalities'),
  's2/math/linear-inequalities/SystemsOfInequalities': () => import('../notes/s2/math/linear-inequalities/SystemsOfInequalities'),
  's2/math/linear-inequalities/ApplicationsAndOptimization': () => import('../notes/s2/math/linear-inequalities/ApplicationsAndOptimization'),

  // S2 Expansion & Factorisation notes (10 files)
  's2/math/expansion-factorisation/QuadraticIntro': () => import('../notes/s2/math/expansion-factorisation/QuadraticIntro'),
  's2/math/expansion-factorisation/DistributiveLaw': () => import('../notes/s2/math/expansion-factorisation/DistributiveLaw'),
  's2/math/expansion-factorisation/DoubleBracketExpansion': () => import('../notes/s2/math/expansion-factorisation/DoubleBracketExpansion'),
  's2/math/expansion-factorisation/QuadraticExpansion': () => import('../notes/s2/math/expansion-factorisation/QuadraticExpansion'),
  's2/math/expansion-factorisation/CommonFactorExtraction': () => import('../notes/s2/math/expansion-factorisation/CommonFactorExtraction'),
  's2/math/expansion-factorisation/FactorisationPositive': () => import('../notes/s2/math/expansion-factorisation/FactorisationPositive'),
  's2/math/expansion-factorisation/FactorisationNegative': () => import('../notes/s2/math/expansion-factorisation/FactorisationNegative'),
  's2/math/expansion-factorisation/FactorisationNegativeConstant': () => import('../notes/s2/math/expansion-factorisation/FactorisationNegativeConstant'),
  's2/math/expansion-factorisation/FactorisationLeadingCoefficient': () => import('../notes/s2/math/expansion-factorisation/FactorisationLeadingCoefficient'),
  's2/math/expansion-factorisation/FactorisationGrouping': () => import('../notes/s2/math/expansion-factorisation/FactorisationGrouping'),

  // S2 Quadratic Equations & Graphs notes
  's2/math/quadratic-equations-graphs/UnderstandingQuadratics': () => import('../notes/s2/math/quadratic-equations-graphs/UnderstandingQuadratics'),
  's2/math/quadratic-equations-graphs/SolvingBySquareRoot': () => import('../notes/s2/math/quadratic-equations-graphs/SolvingBySquareRoot'),
  's2/math/quadratic-equations-graphs/SolvingByFactorization': () => import('../notes/s2/math/quadratic-equations-graphs/SolvingByFactorization'),
  's2/math/quadratic-equations-graphs/IntroductionToGraphs': () => import('../notes/s2/math/quadratic-equations-graphs/IntroductionToGraphs'),
  's2/math/quadratic-equations-graphs/RootsAndIntercepts': () => import('../notes/s2/math/quadratic-equations-graphs/RootsAndIntercepts'),
  's2/math/quadratic-equations-graphs/ApplicationsWordProblems': () => import('../notes/s2/math/quadratic-equations-graphs/ApplicationsWordProblems'),

  // S2 Algebraic Fractions & Formulae notes
  's2/math/algebraic-fractions-formulae/Introduction': () => import('../notes/s2/math/algebraic-fractions-formulae/Introduction'),
  's2/math/algebraic-fractions-formulae/Factorization': () => import('../notes/s2/math/algebraic-fractions-formulae/Factorization'),
  's2/math/algebraic-fractions-formulae/MultiplicationDivision': () => import('../notes/s2/math/algebraic-fractions-formulae/MultiplicationDivision'),
  's2/math/algebraic-fractions-formulae/AdditionSubtraction': () => import('../notes/s2/math/algebraic-fractions-formulae/AdditionSubtraction'),
  's2/math/algebraic-fractions-formulae/EquationsFormulae': () => import('../notes/s2/math/algebraic-fractions-formulae/EquationsFormulae'),

  // S2 Direct and Inverse Proportion notes
  's2/math/proportion/DirectProportionIntro': () => import('../notes/s2/math/proportion/DirectProportionIntro'),
  's2/math/proportion/DirectProportionAlgebraic': () => import('../notes/s2/math/proportion/DirectProportionAlgebraic'),
  's2/math/proportion/DirectProportionForms': () => import('../notes/s2/math/proportion/DirectProportionForms'),
  's2/math/proportion/InverseProportionIntro': () => import('../notes/s2/math/proportion/InverseProportionIntro'),
  's2/math/proportion/InverseProportionAlgebraic': () => import('../notes/s2/math/proportion/InverseProportionAlgebraic'),
  's2/math/proportion/InverseProportionForms': () => import('../notes/s2/math/proportion/InverseProportionForms'),

  // S2 Pythagoras' Theorem notes
  's2/math/pythagoras/Introduction': () => import('../notes/s2/math/pythagoras/Introduction'),
  's2/math/pythagoras/FindingHypotenuse': () => import('../notes/s2/math/pythagoras/FindingHypotenuse'),
  's2/math/pythagoras/FindingShorterSides': () => import('../notes/s2/math/pythagoras/FindingShorterSides'),
  's2/math/pythagoras/RealWorldApplications': () => import('../notes/s2/math/pythagoras/RealWorldApplications'),
  's2/math/pythagoras/Converse': () => import('../notes/s2/math/pythagoras/Converse'),

  // S2 Trigonometric Ratios notes
  's2/math/trigonometric-ratios/IntroductionToTrigRatios': () => import('../notes/s2/math/trigonometric-ratios/IntroductionToTrigRatios'),
  's2/math/trigonometric-ratios/FindingSidesUsingSine': () => import('../notes/s2/math/trigonometric-ratios/FindingSidesUsingSine'),
  's2/math/trigonometric-ratios/FindingSidesCosAndTan': () => import('../notes/s2/math/trigonometric-ratios/FindingSidesCosAndTan'),
  's2/math/trigonometric-ratios/FindingUnknownAngles': () => import('../notes/s2/math/trigonometric-ratios/FindingUnknownAngles'),
  's2/math/trigonometric-ratios/RealWorldApplications': () => import('../notes/s2/math/trigonometric-ratios/RealWorldApplications'),

  // S2 Probability of Single Events notes
  's2/math/probability-single-event/ProbabilityExperimentsAndSampleSpace': () => import('../notes/s2/math/probability-single-event/ProbabilityExperimentsAndSampleSpace'),
  's2/math/probability-single-event/BasicProbabilityCalculation': () => import('../notes/s2/math/probability-single-event/BasicProbabilityCalculation'),
  's2/math/probability-single-event/AdvancedSingleEventProbability': () => import('../notes/s2/math/probability-single-event/AdvancedSingleEventProbability'),
  's2/math/probability-single-event/ExperimentalProbability': () => import('../notes/s2/math/probability-single-event/ExperimentalProbability'),

  // S2 Statistical Diagrams notes
  's2/math/statistical-diagrams/Introduction': () => import('../notes/s2/math/statistical-diagrams/Introduction'),
  's2/math/statistical-diagrams/DotDiagrams': () => import('../notes/s2/math/statistical-diagrams/DotDiagrams'),
  's2/math/statistical-diagrams/HistogramsUngrouped': () => import('../notes/s2/math/statistical-diagrams/HistogramsUngrouped'),
  's2/math/statistical-diagrams/StemAndLeaf': () => import('../notes/s2/math/statistical-diagrams/StemAndLeaf'),
  's2/math/statistical-diagrams/HistogramsGrouped': () => import('../notes/s2/math/statistical-diagrams/HistogramsGrouped'),

  // S2 Averages of Statistical Data notes
  's2/math/averages-statistical-data/IntroductionToAverages': () => import('../notes/s2/math/averages-statistical-data/IntroductionToAverages'),
  's2/math/averages-statistical-data/Mean': () => import('../notes/s2/math/averages-statistical-data/Mean'),
  's2/math/averages-statistical-data/Median': () => import('../notes/s2/math/averages-statistical-data/Median'),
  's2/math/averages-statistical-data/Mode': () => import('../notes/s2/math/averages-statistical-data/Mode'),
  's2/math/averages-statistical-data/ChoosingTheRightMeasure': () => import('../notes/s2/math/averages-statistical-data/ChoosingTheRightMeasure'),

  //S1 Data Handling notes
  's1/math/data-handling/Introduction': () => import('../notes/s1/math/data-handling/Introduction'),
  's1/math/data-handling/ComparingCritiquing': () => import('../notes/s1/math/data-handling/ComparingCritiquing'),
  's1/math/data-handling/GroupedData': () => import('../notes/s1/math/data-handling/GroupedData'),
  's1/math/data-handling/FrequencyTables': () => import('../notes/s1/math/data-handling/FrequencyTables'),
  's1/math/data-handling/PictogramsBarGraphs': () => import('../notes/s1/math/data-handling/PictogramsBarGraphs'),
  's1/math/data-handling/PieChartsLineGraphs': () => import('../notes/s1/math/data-handling/PieChartsLineGraphs'),

  //S1 Perimeters & Areas notes
  's1/math/perimeter-area/Parallelograms': () => import('../notes/s1/math/perimeter-area/Parallelograms'),
  's1/math/perimeter-area/Trapeziums': () => import('../notes/s1/math/perimeter-area/Trapeziums'),
  's1/math/perimeter-area/CompositeFigures': () => import('../notes/s1/math/perimeter-area/CompositeFigures'),
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
  // S1 Percentage notes
  's1/math/percentage/Introduction': () => import('../notes/s1/math/percentage/Introduction'),
  's1/math/percentage/Conversions': () => import('../notes/s1/math/percentage/Conversions'),
  's1/math/percentage/Expressing': () => import('../notes/s1/math/percentage/Expressing'),
  's1/math/percentage/Comparing': () => import('../notes/s1/math/percentage/Comparing'),
  's1/math/percentage/PercentageChange': () => import('../notes/s1/math/percentage/PercentageChange'),
  's1/math/percentage/ReversePercentage': () => import('../notes/s1/math/percentage/ReversePercentage'),
  's1/math/percentage/Applications': () => import('../notes/s1/math/percentage/Applications'),
  // S1 Linear Functions & Graphs notes
  's1/math/linear-functions-graphs/CartesianCoordinates': () => import('../notes/s1/math/linear-functions-graphs/CartesianCoordinates'),
  's1/math/linear-functions-graphs/FunctionConcept': () => import('../notes/s1/math/linear-functions-graphs/FunctionConcept'),
  's1/math/linear-functions-graphs/LinearGraphs': () => import('../notes/s1/math/linear-functions-graphs/LinearGraphs'),
  's1/math/linear-functions-graphs/Gradient': () => import('../notes/s1/math/linear-functions-graphs/Gradient'),
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

  // P5 Math notes
  'p5/math/numbers-10-million/ComparingOrderingNumbers': () => import('../notes/p5/math/numbers-10-million/ComparingOrderingNumbers'),
  'p5/math/numbers-10-million/PlaceValueMillions': () => import('../notes/p5/math/numbers-10-million/PlaceValueMillions'),
  'p5/math/numbers-10-million/WritingRepresentingNumbers': () => import('../notes/p5/math/numbers-10-million/WritingRepresentingNumbers'),
  // P5 Four Operations notes
  'p5/math/four-operations/MultiplyBy10_100_1000': () => import('../notes/p5/math/four-operations/MultiplyBy10_100_1000'),
  'p5/math/four-operations/MultiplyByTensHundredsThousands': () => import('../notes/p5/math/four-operations/MultiplyByTensHundredsThousands'),
  'p5/math/four-operations/DivideBy10_100_1000': () => import('../notes/p5/math/four-operations/DivideBy10_100_1000'),
  'p5/math/four-operations/DivideByTensHundredsThousands': () => import('../notes/p5/math/four-operations/DivideByTensHundredsThousands'),
  'p5/math/four-operations/OrderOfOperations': () => import('../notes/p5/math/four-operations/OrderOfOperations'),
  'p5/math/four-operations/OrderOfOperationsWithBrackets': () => import('../notes/p5/math/four-operations/OrderOfOperationsWithBrackets'),
  'p5/math/four-operations/WordProblems': () => import('../notes/p5/math/four-operations/WordProblems'),
  // P5 Four Operations of Fractions notes
  'p5/math/four-operations-fractions/AddSubtractMixedNumbers': () => import('../notes/p5/math/four-operations-fractions/AddSubtractMixedNumbers'),
  'p5/math/four-operations-fractions/MultiplyFractionWholeNumber': () => import('../notes/p5/math/four-operations-fractions/MultiplyFractionWholeNumber'),
  'p5/math/four-operations-fractions/MultiplyTwoFractions': () => import('../notes/p5/math/four-operations-fractions/MultiplyTwoFractions'),
  'p5/math/four-operations-fractions/MultiplyMixedNumberWholeNumber': () => import('../notes/p5/math/four-operations-fractions/MultiplyMixedNumberWholeNumber'),
  'p5/math/four-operations-fractions/WordProblems': () => import('../notes/p5/math/four-operations-fractions/WordProblems'),
};

// Helper to organize notes by hierarchy
interface NotesHierarchy {
  [grade: string]: {
    [subject: string]: {
      [topic: string]: string[];
    };
  };
}

function organizeNotesByHierarchy(): NotesHierarchy {
  const hierarchy: NotesHierarchy = {};

  Object.keys(notesRegistry).forEach((path) => {
    const parts = path.split('/');
    if (parts.length >= 4) {
      const [grade, subject, topic] = parts;

      if (!hierarchy[grade]) hierarchy[grade] = {};
      if (!hierarchy[grade][subject]) hierarchy[grade][subject] = {};
      if (!hierarchy[grade][subject][topic]) hierarchy[grade][subject][topic] = [];

      hierarchy[grade][subject][topic].push(path);
    }
  });

  return hierarchy;
}

// Friendly names
const gradeName = (grade: string) => {
  return grade.replace('p5', 'Primary 5')
    .replace('p6', 'Primary 6')
    .replace('s1', 'Secondary 1')
    .replace('s2', 'Secondary 2')
    .replace('s3', 'Secondary 3')
    .replace('s4', 'Secondary 4');
};

const topicName = (topic: string) => {
  return topic
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const fileDisplayName = (path: string) => {
  const name = path.split('/').pop() || '';
  return name
    .replace(/([A-Z])/g, ' $1')
    .trim();
};

export const NotesViewerPage: React.FC = () => {
  const [selectedNotePath, setSelectedNotePath] = useState<string>('');
  const [NotesComponent, setNotesComponent] = useState<React.ComponentType<any> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toggleTheme } = useTheme();

  const notesHierarchy = organizeNotesByHierarchy();

  useEffect(() => {
    const loadNote = async () => {
      if (!selectedNotePath) {
        setNotesComponent(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const importFn = notesRegistry[selectedNotePath];
        if (!importFn) {
          throw new Error(`Notes not found: ${selectedNotePath}`);
        }

        const notesModule = await importFn();
        setNotesComponent(() => notesModule.default);
      } catch (err) {
        console.error('Failed to load notes:', err);
        setError('Failed to load notes. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadNote();
  }, [selectedNotePath]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Notes Viewer
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Test and preview all notes components
                </p>
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
              title="Toggle theme"
            >
              {document.documentElement.classList.contains('dark') ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Select Notes to View:
            </label>
            <select
              value={selectedNotePath}
              onChange={(e) => setSelectedNotePath(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">-- Select a notes file --</option>
              {Object.entries(notesHierarchy).map(([grade, subjects]) =>
                Object.entries(subjects).map(([subject, topics]) =>
                  Object.entries(topics).map(([topic, files]) => (
                    <optgroup key={`${grade}-${subject}-${topic}`} label={`${gradeName(grade)} - ${topicName(topic)}`}>
                      {files.map((path) => (
                        <option key={path} value={path}>
                          {fileDisplayName(path)}
                        </option>
                      ))}
                    </optgroup>
                  ))
                )
              )}
            </select>

            {selectedNotePath && (
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 font-mono">
                📁 {selectedNotePath}
              </div>
            )}
          </div>
        </div>

        {/* Notes Display */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
            <p className="text-red-700 dark:text-red-400">{error}</p>
          </div>
        )}

        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
            <span className="ml-3 text-gray-600 dark:text-gray-400">Loading notes...</span>
          </div>
        )}

        {NotesComponent && !loading && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <NotesThemeWrapper>
              <div className="p-8">
                <Suspense fallback={
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                  </div>
                }>
                  <NotesComponent />
                </Suspense>
              </div>
            </NotesThemeWrapper>
          </div>
        )}

        {!selectedNotePath && !loading && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Select a notes file from the dropdown above to begin
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
              {Object.keys(notesRegistry).length} notes files available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesViewerPage;
