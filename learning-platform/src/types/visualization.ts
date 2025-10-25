/**
 * Visualization type definitions for the AI tutoring system
 * These interfaces define the structure for visualization data extracted by LLMs
 * and consumed by pre-defined React visualization components.
 */

// Context types for different problem scenarios
export type VisualizationContext =
  | 'chocolate-bar'
  | 'pizza'
  | 'cake'
  | 'ribbon'
  | 'rope'
  | 'liquid'
  | 'measurement'
  | 'abstract';

// Theme configuration for context-specific styling
export interface VisualizationTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  backgroundColor: string;
  textColor: string;
  emoji?: string; // Context-specific emoji (e.g., 🍫, 🍕, 📏)
  iconLabel?: string; // Label for visual elements (e.g., "piece", "slice", "meter")
}

export interface ProblemData {
  numerator: number;
  denominator: number;
  divisor: number;
  context: VisualizationContext; // Specific context type
  contextKeywords?: string[]; // Keywords from problem text (e.g., ["chocolate", "bar", "friends"])
  numberOfRecipients?: number; // For sharing problems (e.g., 3 friends)
  unit?: string; // Unit of measurement (e.g., "cup", "meter", "liter")

  // For fraction ÷ fraction problems
  numerator1?: number;
  denominator1?: number;
  numerator2?: number;
  denominator2?: number;
  lcd?: number; // Least common denominator
  converted_numerator1?: number; // Numerator after LCD conversion
  converted_numerator2?: number; // Numerator after LCD conversion
  result?: number; // Final result value
  result_fraction?: string; // Result as fraction string

  // For whole number ÷ fraction problems
  initial_number?: number;

  // Result unit
  result_unit?: string;

  // Pre-calculated values (provided by Visualization Agent, not calculated by visualizers!)
  resultNumerator?: number; // Result numerator (typically same as numerator)
  resultDenominator?: number; // Result denominator (denominator * divisor)
  simplifiedNumerator?: number; // Simplified numerator (after GCD reduction)
  simplifiedDenominator?: number; // Simplified denominator (after GCD reduction)
  totalSmallPieces?: number; // Total pieces after subdivision (numerator * divisor)
  needsSimplification?: boolean; // True if result can be simplified
}

export interface VisualizationStage {
  id: string;
  title: string;
  description: string;
  highlight?: string; // What to highlight in this stage
  duration?: number; // Animation duration in milliseconds
  stepNumber?: number; // Visual step number (for multi-step visualizations)
  tutorText?: string; // Custom text from tutor agent for this step
}

export interface ContextualLabels {
  original: string; // e.g., "3/4 cup of flour"
  division: string; // e.g., "3 equal loaves"
  result: string; // e.g., "flour per loaf"
  unit?: string; // e.g., "cups", "pieces", "meters"
  recipients?: string[]; // For sharing problems (e.g., ["Friend 1", "Friend 2", "Friend 3"])
}

export interface VisualizationData {
  visualizationId: string; // Maps to component (e.g., "chocolate-bar-division")
  context: VisualizationContext; // Problem context
  theme?: VisualizationTheme; // Optional theme override
  problemData: ProblemData;
  stages: VisualizationStage[];
  contextualLabels: ContextualLabels;
  trigger: 'solution' | 'hint' | 'explanation'; // What triggered this visualization
  interactionMode?: 'auto' | 'manual'; // Auto-advance or manual step control
  introText?: string; // Intro text from tutor before steps
  conclusionText?: string; // Conclusion text from tutor after steps
  mathSummary?: {
    problem: string; // e.g., "3/4 ÷ 3 = ?"
    solution: string; // e.g., "3/4 ÷ 3 = 3/12 = 1/4"
    explanation: string; // Brief contextual explanation
  };
}

export interface VisualizationProps {
  data: VisualizationData;
  theme: any; // Theme from useTheme hook
  className?: string;
  step?: number; // Current step for step-controlled visualizations
  onStepChange?: (step: number) => void; // Callback for step changes
  onComplete?: () => void; // Callback when user finishes viewing all steps
}

// Supported visualization types
export type VisualizationId =
  | 'bar-division'                        // For linear/rectangular objects (ribbon, chocolate, rope, etc.)
  | 'circular-division'                   // For circular/round objects (pizza, cake, pie, garden, etc.)
  | 'whole-number-fraction-division'      // For whole number ÷ fraction (grouping model)
  | 'fraction-fraction-division';         // For fraction ÷ fraction (common denominator model)

export interface VisualizationConfig {
  visualizationId: VisualizationId;
  context: VisualizationContext;
  description: string; // Human-readable description of what this visualization shows
  theme: VisualizationTheme; // Default theme for this visualizer
  supportedOperations: ('division' | 'multiplication' | 'addition' | 'subtraction')[]; // What operations this visualizer supports
  qualityLevel: 'high' | 'medium' | 'basic'; // Quality/engagement level
  fallbackId?: VisualizationId; // Fallback visualizer if this one fails
}

// Metadata for visualization registry
export interface VisualizationMetadata {
  id: VisualizationId;
  displayName: string;
  context: VisualizationContext;
  keywords: string[]; // Keywords to match from problem text
  component: React.ComponentType<any>; // The actual React component
  config: VisualizationConfig;
}