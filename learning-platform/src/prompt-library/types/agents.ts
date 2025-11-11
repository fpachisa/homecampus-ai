/**
 * Agent-specific Type Definitions
 * Types for different AI agents in the system
 */

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

/**
 * Evaluator Output
 * Evaluator only assesses and decides, no longer generates instructions
 * Reasoning becomes the communication layer between agents
 */
export interface EvaluatorOutput {
  // Assessment
  answerCorrect: boolean;
  understanding: 'strong' | 'developing' | 'struggling';
  conceptGaps: string[];

  // Progression decision
  sectionMastered: boolean;
  advanceToNextSection: boolean;

  // Action decision (from decision matrix)
  action: 'CLARIFY_CONCEPT' | 'GIVE_HINT' | 'GIVE_SOLUTION' | 'NEW_PROBLEM' | 'CELEBRATE';
  hintLevel?: 1 | 2 | 3;

  // Detailed reasoning for other agents to use
  reasoning: string;  // Plain text explanation of assessment and decision
}

// ============================================
// Pre-Generated Learn Evaluator Agent Types
// ============================================

/**
 * Pre-Generated Learn Evaluator Input
 * Includes step-by-step solution from question bank
 */
export interface PreGeneratedLearnEvaluatorInput {
  studentResponse: string;
  currentProblem: string;
  problemId: string;
  hintsGiven: number;
  attempts: number;
  currentSection: string;
  sectionStats: {
    questionsAttempted: number;
    questionsCorrect: number;
    hintsUsed: number;
  };
  // Pre-generated question data
  stepByStepSolution: Array<{
    stepNumber: number;
    text: string;
  }>;
  correctAnswer: string | number;
  masterySignals: string;
  // Next question context (for intelligent transition speech)
  nextQuestion?: {
    questionId: string;
    problemStatement: string;
  };
  isLastQuestionInSection: boolean;
}

/**
 * Pre-Generated Learn Evaluator Output
 * Simplified output - AI only evaluates and provides content, system determines progression
 */
export interface PreGeneratedLearnEvaluatorOutput {
  // Core assessment
  answerCorrect: boolean;

  // Action (always required - system determines section completion)
  action: 'GIVE_HINT' | 'GIVE_SOLUTION' | 'NEW_PROBLEM';
  hintLevel?: 1 | 2 | 3;

  // Content generation (always required)
  speech: {
    text: string;
    emotion: 'encouraging' | 'celebratory' | 'supportive' | 'neutral' | 'warm' | 'excited';
  };
  display: {
    content: string;
    showAfterSpeech: boolean;
  };
}

// ============================================
// Tutor Agent Types (Legacy - being split into specialized agents)
// ============================================

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
// Concept Clarifier Agent Types
// ============================================

export interface ConceptClarifierOutput {
  speech: {
    text: string;
    emotion: 'warm' | 'supportive' | 'neutral';
  };

  display: {
    content: string;
    showAfterSpeech: boolean;
    type: 'clarification';
  };

  mathTool?: {
    toolName: string;
    parameters: Record<string, any>;
    caption: string;
  };
}

// ============================================
// Hint Agent Types
// ============================================

export interface HintOutput {
  speech: {
    text: string;
    emotion: 'encouraging' | 'supportive' | 'warm';
  };

  display: {
    content: string;
    showAfterSpeech: boolean;
    type: 'hint';
  };

  mathTool?: {
    toolName: string;
    parameters: Record<string, any>;
    caption: string;
  };
}

// ============================================
// Celebration Agent Types
// ============================================

export interface CelebrationOutput {
  speech: {
    text: string;
    emotion: 'celebratory' | 'excited' | 'proud';
  };

  display: {
    content: string;
    showAfterSpeech: boolean;
    type: 'celebration';
  };

  stats?: {
    timeSpent: string;
    problemsSolved: number;
    sectionsCompleted: number;
    accuracy: string;
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