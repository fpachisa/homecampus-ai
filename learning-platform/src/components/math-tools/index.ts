/**
 * Math Tools - Pre-built visual components for AI to use
 * These tools can be invoked by the AI to help explain mathematical concepts visually
 *
 * IMPORTANT: For tool definitions, metadata, and registry, see mathToolsRegistry.ts
 * This file only exports components for direct imports.
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

// Exponential and logarithm visualizers
export { default as ExponentialGraphVisualizer } from './ExponentialGraphVisualizer';
export { default as LogarithmGraphVisualizer } from './LogarithmGraphVisualizer';
export { default as GraphCompareVisualizer } from './GraphCompareVisualizer';

// Coordinate geometry visualizers
export { default as CartesianPlaneVisualizer } from './CartesianPlaneVisualizer';
export { default as Coordinate3DPlaneVisualizer } from './Coordinate3DPlaneVisualizer';

// Sets and Venn diagrams visualizers
export { default as VennDiagram1SetVisualizer } from './VennDiagram1SetVisualizer';
export { default as VennDiagram2SetVisualizer } from './VennDiagram2SetVisualizer';

// Probability visualizers
export { default as ProbabilityTreeVisualizer } from './ProbabilityTreeVisualizer';
export { default as TwoWayTableVisualizer } from './TwoWayTableVisualizer';

// Re-export registry types and utilities
export type { MathToolDefinition, MathToolName } from './mathToolsRegistry';
export {
  MATH_TOOLS_REGISTRY,
  MATH_TOOL_COMPONENTS,
  getToolDefinition,
  getToolsByCategory,
  getFilteredTools,
  getAllToolNames,
  toolExists
} from './mathToolsRegistry';
