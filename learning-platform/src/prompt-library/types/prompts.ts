/**
 * Prompt Library Type Definitions
 * Core types for the prompt library system
 */

// ============================================
// Enums and Constants (Must be first due to forward references)
// ============================================

export enum SubjectType {
  MATHEMATICS = 'mathematics',
  SCIENCE = 'science',
  LANGUAGE = 'language',
  HUMANITIES = 'humanities',
  ARTS = 'arts',
  TECHNOLOGY = 'technology'
}

export enum GradeLevel {
  // Primary
  P1 = 'primary-1',
  P2 = 'primary-2',
  P3 = 'primary-3',
  P4 = 'primary-4',
  P5 = 'primary-5',
  P6 = 'primary-6',
  // Secondary
  S1 = 'secondary-1',
  S2 = 'secondary-2',
  S3 = 'secondary-3',
  S4 = 'secondary-4',
  S5 = 'secondary-5',
  // Junior College
  JC1 = 'jc-1',
  JC2 = 'jc-2',
  // Kindergarten
  K1 = 'kindergarten-1',
  K2 = 'kindergarten-2'
}

export enum DifficultyLevel {
  FOUNDATIONAL = 'foundational',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert'
}

// ============================================
// Template Types
// ============================================

export interface PromptTemplateConfig {
  id: string;
  name: string;
  description?: string;
  template: string;
  variables?: TemplateVariable[];
  validators?: TemplateValidator[];
  metadata?: Record<string, any>;
}

export interface TemplateVariable {
  key: string;
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
  required: boolean;
  default?: any;
  description?: string;
  validator?: (value: any) => boolean;
}

export interface TemplateValidator {
  name: string;
  validate: (variables: Map<string, any>) => boolean;
  errorMessage?: string;
}

// ============================================
// Agent Types
// ============================================

export interface AgentPrompt {
  id: string;
  role: string;
  responsibilities: string[];
  capabilities?: AgentCapabilities;
  constraints?: string[];
  outputSchema?: any;
}

export interface AgentCapabilities {
  assessment?: string[];
  decisions?: string[];
  tracking?: string[];
  generation?: string[];
}

export interface AgentInstruction {
  action: 'GIVE_HINT' | 'GIVE_SOLUTION' | 'NEW_PROBLEM' | 'CELEBRATE';
  reasoning: string;
  targetAgent?: 'tutor' | 'question' | 'solution';
  instruction?: any;
}

// ============================================
// Topic Types
// ============================================

export interface TopicConfig {
  id: string;
  displayName: string;
  topicName: string;
  subject: SubjectType;
  gradeLevel: GradeLevel;
  agents?: TopicAgentConfig;
  progressionStructure?: ProgressionStructure;
  learningObjectives?: string[];
  keyFormulas?: string[];
  visualTools?: string[];
}

export interface TopicAgentConfig {
  evaluator?: AgentExtension;
  tutor?: AgentExtension;
  question?: AgentExtension;
  solution?: AgentExtension;
}

export interface AgentExtension {
  extends: string; // Base agent ID
  topicSpecific?: any;
  customizations?: any;
}

export interface ProgressionStructure {
  masteryPhilosophy?: string;
  sections: ProgressionSection[];
}

export interface ProgressionSection {
  id: string;
  title: string;
  difficulty: DifficultyLevel;
  prerequisites?: string[];
  masterySignals?: string;
  estimatedQuestions?: string;
  learningObjectives: string[];
  relevantFormulas?: string[];
  availableTools?: string[];
  sampleProblems?: any[];
}

// ============================================
// Context Types
// ============================================

export interface PromptContext {
  topicId: string;
  studentResponse?: string;
  problemState?: any;
  sectionProgress?: any;
  recentHistory?: string;
  currentSection?: string;
  masteredSections?: string[];
  metadata?: Record<string, any>;
}

export interface BuilderContext {
  role?: string;
  context?: any;
  objectives?: string[];
  formattingRules?: any;
  outputSchema?: any;
  customSections?: Map<string, string>;
}

// ============================================
// Registry Types
// ============================================

export interface RegistryEntry<T> {
  id: string;
  type: 'template' | 'agent' | 'topic' | 'builder';
  data: T;
  metadata?: {
    createdAt: number;
    updatedAt: number;
    version: string;
    tags?: string[];
  };
}

export interface RegistryConfig {
  enableCaching?: boolean;
  cacheTimeout?: number;
  lazyLoad?: boolean;
  validationMode?: 'strict' | 'loose';
}

// ============================================
// Protocol Types
// ============================================

export interface FormattingRules {
  latex?: LatexRules;
  speech?: SpeechRules;
  display?: DisplayRules;
  commonMistakes?: CommonMistake[];
}

export interface LatexRules {
  dollarAmounts?: FormatRule;
  mathExpressions?: FormatRule;
  jsonEscaping?: FormatRule;
  generalGuideline?: string;
}

export interface FormatRule {
  rule: string;
  examples?: {
    correct?: string | string[];
    incorrect?: string | string[];
  };
  reason?: string;
}

export interface SpeechRules {
  format?: FormatRule;
  acronyms?: FormatRule;
  numbers?: FormatRule;
}

export interface DisplayRules {
  format?: FormatRule;
  structuring?: {
    headings?: string;
    emphasis?: string;
    latex?: string;
  };
}

export interface CommonMistake {
  mistake: string;
  fix: string;
  severity?: 'error' | 'warning';
}

export interface InteractionProtocol {
  inputs?: any;
  outputs?: any;
  evaluatorOutputs?: any;
  tutorOutputs?: any;
  questionGenerationOutputs?: any;
  solutionOutputs?: any;
  instructionSchemas?: any;
}

// ============================================
// Builder Types
// ============================================

export interface BuilderComponent {
  type: 'role' | 'context' | 'objectives' | 'formatting' | 'schema' | 'custom';
  content: string;
  order?: number;
}

export interface BuilderOptions {
  separator?: string;
  includeHeaders?: boolean;
  validateOutput?: boolean;
}

// ============================================
// Mode Types
// ============================================

export type LearningMode = 'learn' | 'practice' | 'exam' | 'review';

export interface ModeConfig {
  mode: LearningMode;
  features: string[];
  prompts: {
    initial?: string;
    progression?: string;
    assessment?: string;
    feedback?: string;
  };
}

// ============================================
// Utility Types
// ============================================

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[P] extends object
    ? DeepPartial<T[P]>
    : T[P];
};

export type Validator<T> = (value: T) => boolean | string;

export type TemplateResolver = (
  template: string,
  variables: Map<string, any>
) => string;

export type PromptGenerator = (
  context: PromptContext
) => string | Promise<string>;

// ============================================
// Response Types
// ============================================

export interface PromptResponse {
  prompt: string;
  metadata?: {
    templateId?: string;
    variables?: Record<string, any>;
    generatedAt?: number;
    cacheHit?: boolean;
  };
}

export interface ValidationResult {
  valid: boolean;
  errors?: ValidationError[];
  warnings?: ValidationWarning[];
}

export interface ValidationError {
  field: string;
  message: string;
  value?: any;
}

export interface ValidationWarning {
  field: string;
  message: string;
  suggestion?: string;
}