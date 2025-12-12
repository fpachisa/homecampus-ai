import type { GeminiResponse, Message, ProblemState, QuestionGenerationResponse, InitialGreetingResponse, PracticeProblem, SectionProgressState } from '../types/types';
import type { EvaluatorOutput, TutorOutput } from '../prompt-library/types/agents';
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
   * BATCH GENERATION: Generate initial greetings for multiple topics with variation
   * Used by scripts/generateAISamples.ts for efficient batch generation
   * Produces varied greetings to avoid repetitive patterns across topics
   *
   * @param topicIds - Array of topic IDs to generate greetings for
   * @param options - Batch generation options
   * @param options.variationStyle - 'diverse' for maximum variation, 'consistent' for uniform style
   * @param options.avoidPatterns - Array of phrases to avoid (e.g., ["I'm excited to dive into"])
   * @param options.batchSize - Number of topics to process per AI call (default: 20)
   * @returns Record mapping topicId to InitialGreetingResponse
   */
  generateInitialGreetingBatch?(
    topicIds: string[],
    options?: {
      variationStyle?: 'diverse' | 'consistent';
      avoidPatterns?: string[];
      batchSize?: number;
    }
  ): Promise<Record<string, InitialGreetingResponse>>;

  /**
   * Generate section-specific start question when jumping to a new section
   * @param preGeneratedQuestion - Optional pre-generated question to use instead of AI-generating one
   */
  generateSectionStartQuestion(
    topicId: string,
    sectionId: string,
    preGeneratedQuestion?: import('../data/learn/question-banks/types').PreGeneratedQuestion
  ): Promise<InitialGreetingResponse>;

  /**
   * Generate section resume message when returning to a section that was already started
   * @param preGeneratedQuestion - Optional pre-generated question to use instead of AI-generating one
   */
  generateSectionResume(
    topicId: string,
    sectionId: string,
    sectionMessages: Message[],
    sectionStats: import('../types/types').SectionProgressEntry,
    preGeneratedQuestion?: import('../data/learn/question-banks/types').PreGeneratedQuestion
  ): Promise<InitialGreetingResponse>;

  /**
   * Generate celebration message for topic completion (LEGACY - deprecated)
   * Use the new generateCelebration method with stats instead
   */
  generateCelebration(
    finalScore: number,
    problemsCompleted: number,
    sessionDuration: number,
    topicId: string
  ): Promise<string>;

  /**
   * NEW 5-AGENT ARCHITECTURE: Concept Clarifier Agent - Provide direct concept explanations
   * Handles CLARIFY_CONCEPT action - NOT counted as hints
   */
  generateConceptClarification(
    currentProblem: string,
    studentResponse: string,
    recentHistory: import('../types/types').Message[],
    problemType: number,
    topicId: string,
    evaluatorReasoning: string,
    currentSection?: string
  ): Promise<import('../prompt-library/types/agents').ConceptClarifierOutput>;

  /**
   * NEW 5-AGENT ARCHITECTURE: Hint Agent - Provide Socratic hints only
   * Handles GIVE_HINT action - Socratic scaffolding
   */
  generateHint(
    evaluatorOutput: EvaluatorOutput,
    currentProblem: string,
    studentResponse: string,
    recentHistory: import('../types/types').Message[],
    problemType: number,
    topicId: string,
    currentSection?: string
  ): Promise<import('../prompt-library/types/agents').HintOutput>;

  /**
   * NEW 5-AGENT ARCHITECTURE: Celebration Agent - Celebrate with stats and learning summary
   * Handles CELEBRATE action - Topic completion only
   * @overload for new stats-based celebration
   */
  generateCelebration(
    topicId: string,
    recentHistory: import('../types/types').Message[],
    evaluatorReasoning: string,
    stats: {
      timeSpent: string;
      problemsSolved: number;
      sectionsCompleted: number;
      accuracy: string;
      sectionDetails?: string;
    }
  ): Promise<import('../prompt-library/types/agents').CelebrationOutput>;

  /**
   * Generate a new question at specified problem type with optional context
   */
  generateQuestion(
    problemType: number,
    topicId: string,
    context?: { recentHistory?: string; evaluatorReasoning?: string; questionInstruction?: any; currentSection?: string }
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
   * NEW ARCHITECTURE: Evaluator Agent - Evaluate answer and decide action
   * Returns simple action + reasoning (no instruction objects)
   */
  evaluateAnswer(
    studentResponse: string,
    recentHistory: Message[],
    problemState: ProblemState,
    topicId: string,
    sectionProgress?: SectionProgressState
  ): Promise<EvaluatorOutput>;

  /**
   * PRE-GENERATED QUESTIONS: Evaluator for topics with pre-generated question banks
   * Evaluates student answer against the correct answer in the question bank
   */
  evaluateAnswerPreGenerated(
    studentResponse: string,
    recentHistory: Message[],
    problemState: ProblemState,
    topicId: string,
    sectionProgress: SectionProgressState,
    preGeneratedQuestion: import('../data/learn/question-banks/types').PreGeneratedQuestion,
    nextQuestion?: import('../data/learn/question-banks/types').PreGeneratedQuestion,
    isLastQuestionInSection?: boolean,
    previousAction?: string  // Previous evaluator action (GIVE_HINT, GIVE_SOLUTION, or none)
  ): Promise<import('../prompt-library/types/agents').PreGeneratedLearnEvaluatorOutput>;

  /**
   * NEW ARCHITECTURE: Tutor Agent - Generate hints and celebrations
   * Uses evaluator reasoning to provide appropriate feedback
   */
  generateTutorResponse(
    evaluatorOutput: EvaluatorOutput,
    currentProblem: string,
    studentResponse: string,
    recentHistory: Message[],
    problemType: number,
    topicId: string,
    currentSection?: string
  ): Promise<TutorOutput>;

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
   * Solution Agent: Generate complete solution with optional mathTool in one call
   * Returns {solutionText: string, mathTool?: {toolName, parameters, caption}}
   */
  generateSolution(
    problemText: string,
    problemType: number,
    topicId: string,
    recentHistory: Message[],
    studentResponse: string,
    evaluatorReasoning: string,
    solutionInstruction?: any,
    currentSection?: string
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
 * User-friendly error messages for each error type
 * These are displayed to students instead of technical error details
 */
export const AI_ERROR_MESSAGES: Record<AIErrorType, { title: string; message: string; action: string }> = {
  rate_limit: {
    title: 'Too Many Requests',
    message: 'You\'re working very quickly! Please wait a moment before trying again.',
    action: 'Wait 30 seconds and try again'
  },
  service_unavailable: {
    title: 'AI Tutor Unavailable',
    message: 'The AI tutor is temporarily unavailable. We\'re trying another service for you.',
    action: 'Please wait a moment'
  },
  timeout: {
    title: 'Request Timeout',
    message: 'The AI tutor is taking too long to respond. This might be due to a slow connection.',
    action: 'Try again'
  },
  authentication: {
    title: 'Authentication Error',
    message: 'There\'s an issue with the AI service authentication. Please contact support.',
    action: 'Contact support'
  },
  network: {
    title: 'Connection Lost',
    message: 'Unable to reach the AI service. Please check your internet connection.',
    action: 'Check connection and retry'
  },
  unknown: {
    title: 'Something Went Wrong',
    message: 'We encountered an unexpected error. Your progress has been saved.',
    action: 'Try again or refresh the page'
  }
};

/**
 * Enhanced error class for AI service errors
 */
export class AIServiceError extends Error {
  errorType: AIErrorType;
  originalError: Error | null;
  retryable: boolean;

  constructor(
    errorType: AIErrorType,
    originalError: Error | null = null,
    retryable: boolean = false,
    message?: string
  ) {
    super(message || `AI Service Error: ${errorType}`);
    this.name = 'AIServiceError';
    this.errorType = errorType;
    this.originalError = originalError;
    this.retryable = retryable;
  }

  /**
   * Get user-friendly error message for display in UI
   */
  getUserMessage(): { title: string; message: string; action: string } {
    return AI_ERROR_MESSAGES[this.errorType];
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