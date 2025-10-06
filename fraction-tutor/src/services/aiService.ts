import type { GeminiResponse, Message, EvaluatorInstruction, ProblemState, QuestionGenerationResponse, InitialGreetingResponse, PracticeProblem } from '../types/types';
import type { VisualizationData } from '../types/visualization';

/**
 * Common interface for AI services (Gemini, Claude, etc.)
 * Ensures consistent API across different AI providers
 */
export interface AIService {
  /**
   * Generate initial greeting for a topic
   */
  generateInitialGreeting(topicId: string): Promise<string>;

  /**
   * Generate initial greeting with first problem in a single call
   */
  generateInitialGreetingWithProblem(topicId: string): Promise<InitialGreetingResponse>;

  /**
   * Generate celebration message for topic completion
   */
  generateCelebration(
    finalScore: number,
    problemsCompleted: number,
    sessionDuration: number,
    topicId: string
  ): Promise<string>;

  /**
   * Generate a new question at specified problem type with optional context
   */
  generateQuestion(
    problemType: number,
    topicId: string,
    context?: { recentHistory?: string; evaluatorReasoning?: string }
  ): Promise<QuestionGenerationResponse>;

  /**
   * Generate response to student input (legacy method)
   */
  generateResponse(
    studentResponse: string,
    recentHistory: Message[],
    currentProblemType: number,
    isComplete: boolean,
    topicId: string
  ): Promise<GeminiResponse>;

  /**
   * Evaluator Agent: Analyze student response and provide instruction
   */
  evaluateAndInstruct(
    studentResponse: string,
    recentHistory: Message[],
    problemState: ProblemState,
    topicId: string
  ): Promise<EvaluatorInstruction>;

  /**
   * Tutor Agent: Execute instruction from evaluator
   */
  executeInstruction(
    instruction: EvaluatorInstruction,
    recentHistory: Message[],
    studentResponse: string,
    currentProblemType: number,
    topicId: string
  ): Promise<string>;

  /**
   * Extract visualization data from problem text
   */
  extractVisualizationData(
    problemText: string,
    visualizationId: string,
    trigger: 'solution' | 'hint' | 'explanation',
    topicId: string
  ): Promise<VisualizationData | null>;

  /**
   * Extract step-by-step visualizations from solution
   */
  extractStepByStepVisualizations(
    tutorResponse: string,
    problemText: string,
    problemType: number,
    topicId: string
  ): Promise<any>;

  /**
   * Visualization Agent: Generate complete solution with visualization data in one call
   * Replaces the 2-step flow: executeInstruction (Tutor Agent) → extractStepByStepVisualizations
   */
  generateVisualizationSolution(
    problemText: string,
    problemType: number,
    topicId: string,
    recentHistory: Message[],
    studentResponse: string,
    evaluatorReasoning: string
  ): Promise<any>;

  /**
   * Practice Mode: Generate batch of practice problems in a single AI call
   * Returns array of problems with pre-generated solutions for instant feedback
   */
  generatePracticeBatch(
    problemType: number,
    topicId: string,
    count: number,
    context?: {
      userPreferences?: string[];      // Preferred contexts (e.g., ["sports", "cooking"])
      excludeContexts?: string[];      // Recently used contexts to avoid repetition
      recentProblems?: string[];       // Recent problem texts to avoid duplicates
    }
  ): Promise<PracticeProblem[]>;

  /**
   * Practice Mode: Evaluate student response and generate feedback in a single AI call
   * Handles intent detection, answer evaluation, and response generation
   */
  evaluatePracticeResponse(
    studentResponse: string,
    currentProblem: PracticeProblem,
    problemState: import('../types/types').PracticeProblemState,
    conversationHistory: Message[],
    topicId: string
  ): Promise<import('../types/types').PracticeAgentResponse>;
}

/**
 * Error types for AI service failures
 */
export const AIErrorType = {
  RATE_LIMIT: 'rate_limit',
  SERVICE_UNAVAILABLE: 'service_unavailable',
  TIMEOUT: 'timeout',
  AUTHENTICATION: 'authentication',
  NETWORK: 'network',
  UNKNOWN: 'unknown'
} as const;

export type AIErrorType = typeof AIErrorType[keyof typeof AIErrorType];

/**
 * Enhanced error class for AI service errors
 */
export class AIServiceError extends Error {
  constructor(
    public errorType: AIErrorType,
    public originalError: Error | null = null,
    public retryable: boolean = false,
    message?: string
  ) {
    super(message || `AI Service Error: ${errorType}`);
    this.name = 'AIServiceError';
  }

  static fromHttpError(error: any): AIServiceError {
    const status = error.status || error.response?.status;
    const message = error.message || error.response?.data?.message || 'Unknown error';

    switch (status) {
      case 429:
        return new AIServiceError(AIErrorType.RATE_LIMIT, error, true, message);
      case 503:
        return new AIServiceError(AIErrorType.SERVICE_UNAVAILABLE, error, true, message);
      case 401:
      case 403:
        return new AIServiceError(AIErrorType.AUTHENTICATION, error, false, message);
      default:
        if (message.includes('timeout') || message.includes('ECONNRESET')) {
          return new AIServiceError(AIErrorType.TIMEOUT, error, true, message);
        }
        if (message.includes('network') || message.includes('ENOTFOUND')) {
          return new AIServiceError(AIErrorType.NETWORK, error, true, message);
        }
        return new AIServiceError(AIErrorType.UNKNOWN, error, false, message);
    }
  }
}