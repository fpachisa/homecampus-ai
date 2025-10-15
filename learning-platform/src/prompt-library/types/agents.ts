/**
 * Agent-specific Type Definitions
 * Types for different AI agents in the system
 */

import { DifficultyLevel } from './prompts';

// ============================================
// Evaluator Agent Types
// ============================================

export interface EvaluatorInput {
  studentResponse: string;
  currentProblem: string;
  problemId: string;
  hintsGiven: number;
  attempts: number;
  currentSection?: string;
  sectionStats?: {
    questionsAttempted: number;
    questionsCorrect: number;
    hintsUsed: number;
  };
}

export interface EvaluatorOutput {
  answerCorrect: boolean;
  isMainProblemSolved: boolean;

  assessment: {
    understanding: 'strong' | 'developing' | 'struggling';
    conceptGaps: string[];
    readyToAdvance: boolean;
  };

  progression: {
    currentSection: string;
    sectionMastered: boolean;
    masteryProgress: string;
    nextSection?: string | null;
  };

  action: 'GIVE_HINT' | 'GIVE_SOLUTION' | 'NEW_PROBLEM' | 'CELEBRATE';
  hintLevel?: 1 | 2 | 3;

  // Instructions for other agents
  tutorInstruction?: TutorInstruction;
  questionInstruction?: QuestionInstruction;
  solutionInstruction?: SolutionInstruction;

  reasoning: string;
}

// ============================================
// Tutor Agent Types
// ============================================

export interface TutorInstruction {
  focusConcept: string;
  studentError: string;
  hintStrategy: string;
  relevantInfo: string;
  tone: string;
  depth: 'gentle nudge' | 'specific guidance' | 'near-answer';
}

export interface TutorOutput {
  speech: {
    text: string;
    emotion: 'encouraging' | 'celebratory' | 'supportive' | 'neutral';
  };

  display: {
    content: string | null;
    showAfterSpeech: boolean;
    type?: 'hint' | 'celebration' | 'feedback';
  };

  mathTool?: {
    toolName: string;
    parameters: Record<string, any>;
    caption: string;
  };
}

// ============================================
// Question Agent Types
// ============================================

export interface QuestionInstruction {
  targetSection: string;
  targetConcept: string;
  difficulty: DifficultyLevel;
  focusObjectives: string[];
  relevantFormulas: string[];
  conceptGaps?: string[];
  sampleProblems?: any[];
  questionConstraints?: Record<string, any>;
}

export interface QuestionOutput {
  speech: {
    text: string;
    emotion: 'encouraging' | 'celebratory' | 'supportive' | 'neutral';
  };

  display: {
    content: string;
    showAfterSpeech: boolean;
    type: 'question';
  };

  mathTool?: {
    toolName: string;
    parameters: Record<string, any>;
    caption: string;
  };
}

// ============================================
// Solution Agent Types
// ============================================

export interface SolutionInstruction {
  problemText: string;
  studentAttempt: string;
  explanationFocus: string;
  relevantFormulas: string[];
  relevantConcepts: string;
  explanationDepth: string;
  studentStrugglePoint: string;
}

export interface SolutionOutput {
  speech: {
    text: string;
    emotion: 'supportive' | 'encouraging';
  };

  display: {
    content: string;
    showAfterSpeech: boolean;
    type: 'solution';
  };

  mathTool?: {
    toolName: string;
    parameters: Record<string, any>;
    caption: string;
  };
}

// ============================================
// Practice Agent Types
// ============================================

export interface PracticeAgentInput {
  studentResponse: string;
  currentProblem: string;
  correctAnswer: string;
  hintsGiven: number;
  attempts: number;
  recentHistory: string;
}

export interface PracticeAgentOutput {
  intent: 'answer_submission' | 'help_request' | 'clarification';
  answerCorrect: boolean;
  pointsEarned: number;
  isMainProblemSolved: boolean;

  speech: {
    text: string;
    emotion: 'encouraging' | 'celebratory' | 'supportive' | 'neutral';
  };

  display: {
    content: string;
    showAfterSpeech: boolean;
  };

  action: 'give_hint' | 'show_solution' | 'next_problem' | 'none';
  reasoning: string;
}

// ============================================
// Visualization Agent Types
// ============================================

export interface VisualizationInstruction {
  problemText: string;
  visualizationType: string;
  trigger: 'solution' | 'hint' | 'explanation';
  relevantValues?: Record<string, any>;
}

export interface VisualizationOutput {
  visualizationId: string;
  problemData: Record<string, any>;
  stages?: VisualizationStage[];
  contextualLabels?: Record<string, string>;
  mathSummary?: {
    problem: string;
    solution: string;
    explanation: string;
  };
}

export interface VisualizationStage {
  id: string;
  title: string;
  description: string;
  duration?: number;
  data?: any;
}

// ============================================
// Common Agent Types
// ============================================

export interface AgentContext {
  topicId: string;
  currentSection?: string;
  masteredSections?: string[];
  recentHistory?: string;
  sessionMetadata?: Record<string, any>;
}

export interface AgentCapability {
  name: string;
  description: string;
  required: boolean;
  parameters?: Record<string, any>;
}

export interface AgentConstraint {
  type: 'must' | 'should' | 'must_not';
  description: string;
  validator?: (output: any) => boolean;
}

// ============================================
// Agent Chain Types
// ============================================

export interface AgentChain {
  id: string;
  agents: AgentChainStep[];
  context?: AgentContext;
}

export interface AgentChainStep {
  agentType: 'evaluator' | 'tutor' | 'question' | 'solution' | 'practice';
  input: any;
  outputKey?: string;
  conditional?: {
    field: string;
    condition: 'equals' | 'contains' | 'exists';
    value: any;
  };
}

export interface AgentChainResult {
  chainId: string;
  steps: {
    agent: string;
    input: any;
    output: any;
    duration: number;
  }[];
  finalOutput: any;
  totalDuration: number;
}