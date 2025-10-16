import type { GeminiResponse, Message, ProblemState, QuestionGenerationResponse, InitialGreetingResponse, PracticeProblem, PracticeAgentResponse, PracticeProblemState } from '../types/types';
import type { EvaluatorOutput, TutorOutput } from '../prompt-library/types/agents';
import type { VisualizationData } from '../types/visualization';
import type { AIService } from './aiService';
import { AIServiceError, AIErrorType } from './aiService';
import BaseAIService from './BaseAIService';
import { GeminiProvider } from './providers/GeminiProvider';
import { ClaudeProvider } from './providers/ClaudeProvider';

interface FallbackConfig {
  maxRetries: number;
  retryDelay: number;
  exponentialBackoff: boolean;
  showFallbackMessage: boolean;
}

/**
 * AI Service that orchestrates between Gemini (primary) and Claude (fallback)
 * with intelligent error detection and retry logic
 */
class FallbackAIService implements AIService {
  private primaryService: AIService;
  private fallbackService: AIService | null;
  private config: FallbackConfig;
  private fallbackMessageCallback?: (message: string) => void;

  constructor(
    geminiApiKey: string,
    claudeApiKey?: string,
    config: Partial<FallbackConfig> = {},
    fallbackMessageCallback?: (message: string) => void
  ) {
    // Create providers
    const geminiProvider = new GeminiProvider({ apiKey: geminiApiKey });
    const claudeProvider = claudeApiKey ? new ClaudeProvider({ apiKey: claudeApiKey }) : null;

    // Create services using BaseAIService with providers
    this.primaryService = new BaseAIService(geminiProvider);
    this.fallbackService = claudeProvider ? new BaseAIService(claudeProvider) : null;
    this.fallbackMessageCallback = fallbackMessageCallback;

    this.config = {
      maxRetries: 1, // Single attempt before fallback for fast user experience
      retryDelay: 0, // No delay before fallback to Claude
      exponentialBackoff: false, // No exponential delays when Claude is available
      showFallbackMessage: true,
      ...config
    };
  }

  private async sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private shouldRetry(error: AIServiceError, attempt: number): boolean {
    if (attempt >= this.config.maxRetries) return false;

    // For fast fallback: don't retry service availability issues if Claude is available
    if (this.fallbackService && (
      error.errorType === AIErrorType.SERVICE_UNAVAILABLE ||
      error.errorType === AIErrorType.RATE_LIMIT
    )) {
      return false; // Skip retries for 503 and rate limits - go straight to Claude
    }

    // Only retry for genuine network/timeout issues
    return error.retryable && (
      error.errorType === AIErrorType.TIMEOUT ||
      error.errorType === AIErrorType.NETWORK
    );
  }

  private shouldFallback(error: AIServiceError): boolean {
    return this.fallbackService !== null && (
      error.errorType === AIErrorType.SERVICE_UNAVAILABLE ||
      error.errorType === AIErrorType.RATE_LIMIT ||
      error.errorType === AIErrorType.TIMEOUT ||
      error.errorType === AIErrorType.NETWORK
    );
  }

  private notifyFallback(service: 'claude' | 'error'): void {
    if (this.fallbackMessageCallback && this.config.showFallbackMessage) {
      if (service === 'claude') {
        this.fallbackMessageCallback('Still thinking... switching to backup system...');
      } else {
        this.fallbackMessageCallback('Having trouble connecting. Please try again.');
      }
    }
  }

  /**
   * Generic retry and fallback wrapper for AI service calls
   */
  private async executeWithFallback<T>(
    operation: (service: AIService) => Promise<T>,
    operationName: string
  ): Promise<T> {
    let lastError: AIServiceError | null = null;

    // Try primary service with retries
    for (let attempt = 1; attempt <= this.config.maxRetries; attempt++) {
      try {
        console.log(`${operationName}: Attempt ${attempt} with primary service (Gemini)`);
        return await operation(this.primaryService);
      } catch (error) {
        console.warn(`${operationName}: Primary service attempt ${attempt} failed:`, error);

        const aiError = error instanceof AIServiceError ? error : AIServiceError.fromHttpError(error);
        lastError = aiError;

        if (this.shouldRetry(aiError, attempt)) {
          const delay = this.config.exponentialBackoff
            ? this.config.retryDelay * Math.pow(2, attempt - 1)
            : this.config.retryDelay;

          console.log(`${operationName}: Retrying in ${delay}ms...`);
          await this.sleep(delay);
          continue;
        }

        break;
      }
    }

    // Try fallback service if available and appropriate
    if (lastError && this.shouldFallback(lastError)) {
      try {
        console.log(`${operationName}: Switching to fallback service (Claude)`);
        this.notifyFallback('claude');

        return await operation(this.fallbackService!);
      } catch (fallbackError) {
        console.error(`${operationName}: Fallback service also failed:`, fallbackError);

        // If fallback also fails, throw the original error
        this.notifyFallback('error');
        throw lastError;
      }
    }

    // No fallback available or not appropriate, throw original error
    if (lastError) {
      this.notifyFallback('error');
      throw lastError;
    }

    throw new AIServiceError(AIErrorType.UNKNOWN, null, false, `${operationName} failed with no error details`);
  }

  async generateInitialGreeting(topicId: string = 'fraction-division-by-whole-numbers'): Promise<string> {
    return this.executeWithFallback(
      (service) => service.generateInitialGreeting(topicId),
      'generateInitialGreeting'
    );
  }

  async generateInitialGreetingWithProblem(topicId: string = 'fraction-division-by-whole-numbers'): Promise<InitialGreetingResponse> {
    return this.executeWithFallback(
      (service) => service.generateInitialGreetingWithProblem(topicId),
      'generateInitialGreetingWithProblem'
    );
  }

  async generateSectionStartQuestion(topicId: string, sectionId: string): Promise<InitialGreetingResponse> {
    return this.executeWithFallback(
      (service) => service.generateSectionStartQuestion(topicId, sectionId),
      'generateSectionStartQuestion'
    );
  }

  async generateSectionResume(
    topicId: string,
    sectionId: string,
    sectionMessages: Message[],
    sectionStats: import('../types/types').SectionProgressEntry
  ): Promise<InitialGreetingResponse> {
    return this.executeWithFallback(
      (service) => service.generateSectionResume(topicId, sectionId, sectionMessages, sectionStats),
      'generateSectionResume'
    );
  }

  async generateCelebration(
    finalScore: number,
    problemsCompleted: number,
    sessionDuration: number,
    topicId: string = 'fraction-division-by-whole-numbers'
  ): Promise<string> {
    try {
      return await this.executeWithFallback(
        (service) => service.generateCelebration(finalScore, problemsCompleted, sessionDuration, topicId),
        'generateCelebration'
      );
    } catch (error) {
      console.error('All celebration services failed, providing fallback message:', error);

      // Final safety fallback when both Gemini and Claude fail
      return `🎉 Amazing work! You've completed the fraction division subtopic with a score of ${finalScore.toFixed(2)}/1.00! You solved ${problemsCompleted} problems and demonstrated excellent understanding. Keep up the great work! 🌟`;
    }
  }

  async generateQuestion(
    problemType: number,
    topicId: string = 'fraction-division-by-whole-numbers',
    context?: { recentHistory?: string; evaluatorReasoning?: string; questionInstruction?: any }
  ): Promise<QuestionGenerationResponse> {
    return this.executeWithFallback(
      (service) => service.generateQuestion(problemType, topicId, context),
      'generateQuestion'
    );
  }

  async generateResponse(
    studentResponse: string,
    recentHistory: Message[],
    currentProblemType: number,
    isComplete: boolean = false,
    topicId: string = 'fraction-division-by-whole-numbers'
  ): Promise<GeminiResponse> {
    return this.executeWithFallback(
      (service) => service.generateResponse(studentResponse, recentHistory, currentProblemType, isComplete, topicId),
      'generateResponse'
    );
  }

  /**
   * NEW ARCHITECTURE: Evaluate student answer and decide next action
   * Returns simple action + reasoning (no instruction objects)
   */
  async evaluateAnswer(
    studentResponse: string,
    recentHistory: Message[],
    problemState: ProblemState,
    topicId: string,
    sectionProgress?: import('../types/types').SectionProgressState
  ): Promise<EvaluatorOutput> {
    try {
      return await this.executeWithFallback(
        (service) => service.evaluateAnswer(studentResponse, recentHistory, problemState, topicId, sectionProgress),
        'evaluateAnswer'
      );
    } catch (error) {
      console.error('All evaluator services failed, providing safe fallback output:', error);

      // Final safety fallback when both Gemini and Claude fail
      return {
        answerCorrect: false,
        understanding: 'struggling',
        conceptGaps: ['Unable to assess due to service failure'],
        sectionMastered: false,
        advanceToNextSection: false,
        action: "GIVE_HINT",
        hintLevel: Math.min(problemState.hintsGivenForCurrentProblem + 1, 3) as 1 | 2 | 3,
        reasoning: "Fallback response due to all AI services being unavailable. Please try again."
      };
    }
  }

  /**
   * NEW ARCHITECTURE: Generate tutor response for hints and celebrations
   * Uses evaluator reasoning to provide appropriate feedback
   */
  async generateTutorResponse(
    evaluatorOutput: EvaluatorOutput,
    currentProblem: string,
    studentResponse: string,
    recentHistory: Message[],
    problemType: number,
    topicId: string,
    currentSection?: string
  ): Promise<TutorOutput> {
    try {
      return await this.executeWithFallback(
        (service) => service.generateTutorResponse(evaluatorOutput, currentProblem, studentResponse, recentHistory, problemType, topicId, currentSection),
        'generateTutorResponse'
      );
    } catch (error) {
      console.error('All tutor services failed, providing fallback response:', error);

      // Final safety fallback when both Gemini and Claude fail
      const fallbackText = evaluatorOutput.action === "CELEBRATE"
        ? "🎉 Congratulations! You've completed this section! Amazing work!"
        : "Let me give you a hint: Think about the steps you need to solve this problem. Can you try again?";

      return {
        speech: {
          text: fallbackText,
          emotion: evaluatorOutput.action === "CELEBRATE" ? 'celebratory' : 'encouraging'
        },
        display: {
          content: fallbackText,
          showAfterSpeech: true,
          type: evaluatorOutput.action === "CELEBRATE" ? 'celebration' : 'hint'
        }
      };
    }
  }

  async extractVisualizationData(
    problemText: string,
    visualizationId: string,
    trigger: 'solution' | 'hint' | 'explanation',
    topicId: string
  ): Promise<VisualizationData | null> {
    return this.executeWithFallback(
      (service) => service.extractVisualizationData(problemText, visualizationId, trigger, topicId),
      'extractVisualizationData'
    );
  }

  async extractStepByStepVisualizations(
    tutorResponse: string,
    problemText: string,
    problemType: number,
    topicId: string
  ): Promise<any> {
    return this.executeWithFallback(
      (service) => service.extractStepByStepVisualizations(tutorResponse, problemText, problemType, topicId),
      'extractStepByStepVisualizations'
    );
  }

  async generateSolution(
    problemText: string,
    problemType: number,
    topicId: string,
    recentHistory: Message[],
    studentResponse: string,
    evaluatorReasoning: string,
    solutionInstruction?: any,
    currentSection?: string
  ): Promise<any> {
    return this.executeWithFallback(
      (service) => service.generateSolution(problemText, problemType, topicId, recentHistory, studentResponse, evaluatorReasoning, solutionInstruction, currentSection),
      'generateSolution'
    );
  }

  async generatePracticeBatch(
    problemType: number,
    topicId: string,
    count: number = 3,
    context?: {
      userPreferences?: string[];
      excludeContexts?: string[];
      recentProblems?: string[];
    }
  ): Promise<PracticeProblem[]> {
    return this.executeWithFallback(
      (service) => service.generatePracticeBatch(problemType, topicId, count, context),
      'generatePracticeBatch'
    );
  }

  async evaluatePracticeResponse(
    studentResponse: string,
    currentProblem: PracticeProblem,
    problemState: PracticeProblemState,
    conversationHistory: Message[],
    topicId: string
  ): Promise<PracticeAgentResponse> {
    return this.executeWithFallback(
      (service) => service.evaluatePracticeResponse(studentResponse, currentProblem, problemState, conversationHistory, topicId),
      'evaluatePracticeResponse'
    );
  }

  /**
   * Simple text generation method for general purpose use
   * (e.g., template generation, content creation)
   */
  async generate(prompt: string): Promise<string> {
    return this.executeWithFallback(
      async (service) => {
        // Use the underlying provider directly for simple text generation
        const baseService = service as any;
        if (baseService.provider) {
          return await baseService.provider.generateContent(prompt);
        }
        // Fallback to using initial greeting as a generic text generator
        throw new Error('Provider not available for text generation');
      },
      'generate'
    );
  }

  /**
   * Alias for generate() - provides raw AI completion for testing/utilities
   */
  async generateRawCompletion(prompt: string): Promise<string> {
    return this.generate(prompt);
  }

  // Utility methods
  getActiveService(): 'gemini' | 'claude' | 'unknown' {
    // Since both services use BaseAIService now, we can't distinguish by instanceof
    // This method is primarily for debugging, so we'll just indicate primary/fallback
    return 'gemini'; // Primary is always Gemini in current setup
  }

  hasFallback(): boolean {
    return this.fallbackService !== null;
  }

  updateConfig(newConfig: Partial<FallbackConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }
}

// Lazy singleton instance for scripts and utilities
// This allows env vars to be loaded before instantiation
let _fallbackAIServiceInstance: FallbackAIService | null = null;

export function getFallbackAIService(): FallbackAIService {
  if (!_fallbackAIServiceInstance) {
    const geminiKey = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY) || process.env.VITE_GEMINI_API_KEY || '';
    const claudeKey = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_CLAUDE_API_KEY) || process.env.VITE_CLAUDE_API_KEY;

    if (!geminiKey) {
      console.warn('[FallbackAIService] No Gemini API key found. Make sure VITE_GEMINI_API_KEY is set.');
      console.warn('[FallbackAIService] Available env keys:', Object.keys(process.env).filter(k => k.includes('GEMINI')));
    }

    _fallbackAIServiceInstance = new FallbackAIService(geminiKey, claudeKey);
  }
  return _fallbackAIServiceInstance;
}

export default FallbackAIService;