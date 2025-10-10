/**
 * Math Tools - Pre-built visual components for AI to use
 * These tools can be invoked by the AI to help explain mathematical concepts visually
 */

// Trigonometry and 3D visualizers
export { default as RightTriangleVisualizer } from './RightTriangleVisualizer';
export { default as ElevationDepressionVisualizer } from './ElevationDepressionVisualizer';
export { default as CuboidVisualizer } from './CuboidVisualizer';
export { default as PyramidVisualizer } from './PyramidVisualizer';
export { default as BearingsVisualizer } from './BearingsVisualizer';
export { default as GeneralTriangleVisualizer } from './GeneralTriangleVisualizer';

// Circle geometry visualizers
export { default as CircleBasicVisualizer } from './CircleBasicVisualizer';
export { default as CircleChordVisualizer } from './CircleChordVisualizer';
export { default as CircleAngleVisualizer } from './CircleAngleVisualizer';
export { default as CircleTangentVisualizer } from './CircleTangentVisualizer';

// Quadratic equations visualizers
export { default as ParabolaGraphVisualizer } from './ParabolaGraphVisualizer';
export { default as FactoringVisualizer } from './FactoringVisualizer';
export { default as CompletingSquareVisualizer } from './CompletingSquareVisualizer';
export { default as QuadraticFormulaVisualizer } from './QuadraticFormulaVisualizer';
export { default as VertexFormTransformVisualizer } from './VertexFormTransformVisualizer';
export { default as RootsVisualizer } from './RootsVisualizer';
export { default as WordProblemDiagramVisualizer } from './WordProblemDiagramVisualizer';

// Tool registry for dynamic rendering based on AI responses
export const MATH_TOOL_COMPONENTS = {
  // Trigonometry and 3D tools
  rightTriangle: 'RightTriangleVisualizer',
  elevationDepression: 'ElevationDepressionVisualizer',
  cuboid: 'CuboidVisualizer',
  pyramid: 'PyramidVisualizer',
  bearings: 'BearingsVisualizer',
  generalTriangle: 'GeneralTriangleVisualizer',

  // Circle geometry tools (8 tools mapped to 4 components)
  circleBasic: 'CircleBasicVisualizer',
  circleWithArcs: 'CircleBasicVisualizer',
  circleWithChords: 'CircleChordVisualizer',
  circleSemicircle: 'CircleAngleVisualizer',
  circleTangent: 'CircleTangentVisualizer',
  circleTwoTangents: 'CircleTangentVisualizer',
  circleAngleCentre: 'CircleAngleVisualizer',
  circleSameArc: 'CircleAngleVisualizer',

  // Quadratic equations tools
  parabolaGraph: 'ParabolaGraphVisualizer',
  factoringVisualizer: 'FactoringVisualizer',
  completingSquareVisualizer: 'CompletingSquareVisualizer',
  quadraticFormulaVisualizer: 'QuadraticFormulaVisualizer',
  vertexFormTransform: 'VertexFormTransformVisualizer',
  rootsVisualizer: 'RootsVisualizer',
  wordProblemDiagram: 'WordProblemDiagramVisualizer'
} as const;

export type MathToolName = keyof typeof MATH_TOOL_COMPONENTS;
