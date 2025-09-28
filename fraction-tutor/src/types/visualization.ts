/**
 * Visualization type definitions for the AI tutoring system
 * These interfaces define the structure for visualization data extracted by LLMs
 * and consumed by pre-defined React visualization components.
 */

export interface ProblemData {
  numerator: number;
  denominator: number;
  divisor: number;
  context: string; // e.g., "flour-loaves", "pizza-friends", "ribbon-pieces"
}

export interface VisualizationStage {
  id: string;
  title: string;
  description: string;
  highlight?: string; // What to highlight in this stage
  duration?: number; // Animation duration in milliseconds
}

export interface ContextualLabels {
  original: string; // e.g., "3/4 cup of flour"
  division: string; // e.g., "3 equal loaves"
  result: string; // e.g., "flour per loaf"
  unit?: string; // e.g., "cups", "pieces", "meters"
}

export interface VisualizationData {
  visualizationId: string; // Maps to component (e.g., "bar-division-simple")
  problemData: ProblemData;
  stages: VisualizationStage[];
  contextualLabels: ContextualLabels;
  trigger: 'solution' | 'hint' | 'explanation'; // What triggered this visualization
}

export interface VisualizationProps {
  data: VisualizationData;
  theme: any; // Theme from useTheme hook
  className?: string;
}

// Supported visualization types
export type VisualizationId =
  | 'bar-division-simple'
  | 'bar-division-complex'
  | 'grouping-model'
  | 'step-by-step-solution';

export interface VisualizationConfig {
  visualizationId: VisualizationId;
  description: string; // Human-readable description of what this visualization shows
}