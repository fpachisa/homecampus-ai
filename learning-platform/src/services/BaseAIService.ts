import type { GeminiResponse, Message, ProblemState, QuestionGenerationResponse, InitialGreetingResponse, PracticeProblem, PracticeAgentResponse, PracticeProblemState } from '../types/types';
import type { EvaluatorOutput } from '../prompt-library/types/agents';
import type { VisualizationData } from '../types/visualization';
// Use new prompt resolver with clean prompt library architecture
import { newPromptResolver as promptResolver } from '../prompts/newPromptResolver';
import { PromptRegistry } from '../prompt-library/registry/prompt-registry';
import type { AIService } from './aiService';
import { AIServiceError, AIErrorType } from './aiService';
import type { AIProvider } from './providers/AIProvider';
import { safeParseJSON, validateRequiredKeys, formatConversationHistory } from './utils/responseParser';

/**
 * Base AI Service Implementation
 * Implements all AIService methods using a provider-agnostic approach
 * Provider (Gemini, Claude, etc.) is injected via constructor
 */
class BaseAIService implements AIService {
  private provider: AIProvider;

  constructor(provider: AIProvider) {
    this.provider = provider;
  }

  async generateInitialGreeting(topicId: string = 'fraction-division-by-whole-numbers'): Promise<string> {
    try {
      const prompt = promptResolver.resolveInitialGreeting({
        topicId: topicId as any
      });
      const text = await this.provider.generateContent(prompt);

      if (!text) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty greeting response from AI');
      }

      return text;
    } catch (error) {
      console.error('Error generating greeting:', error);
      throw AIServiceError.fromHttpError(error);
    }
  }

  async generateInitialGreetingWithProblem(topicId: string = 'fraction-division-by-whole-numbers'): Promise<InitialGreetingResponse> {
    try {
      const prompt = promptResolver.resolveInitialGreetingWithProblem({
        topicId: topicId as any
      });

      console.log('Prompt for initial greeting with problem:', prompt);
      const text = await this.provider.generateContent(prompt);

      if (!text) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty greeting+problem response from AI');
      }

      // Parse JSON response using safeParseJSON (prevents double-escaping LaTeX)
      const parsedResponse = safeParseJSON<InitialGreetingResponse>(
        text,
        ['speech', 'display'],
        {
          speech: {
            text: "Welcome! I'm having a bit of trouble generating your first question. Let me try again - could you tell me what topic you'd like to work on?",
            emotion: 'supportive' as const
          },
          display: {
            content: "I encountered an error. Please refresh the page to start your lesson, or let me know if you need help.",
            showAfterSpeech: true
          }
        }
      );

      // Validate response structure (only speech and display are required)
      validateRequiredKeys(parsedResponse, ['speech', 'display'], 'Invalid greeting+problem response structure');

      return parsedResponse;
    } catch (error) {
      console.error('Error generating greeting with problem:', error);

      throw AIServiceError.fromHttpError(error);
    }
  }

  /**
   * BATCH GENERATION: Generate initial greetings for multiple topics with variation
   * Used by scripts/generateAISamples.ts for efficient batch generation
   */
  async generateInitialGreetingBatch(
    topicIds: string[],
    options: {
      variationStyle?: 'diverse' | 'consistent';
      avoidPatterns?: string[];
      batchSize?: number;
    } = {}
  ): Promise<Record<string, InitialGreetingResponse>> {
    const batchSize = options.batchSize || 20;
    const variationStyle = options.variationStyle || 'diverse';
    const avoidPatterns = options.avoidPatterns || [];
    const allResults: Record<string, InitialGreetingResponse> = {};
    const registry = PromptRegistry.getInstance();

    // Process topics in chunks to avoid token limits
    for (let i = 0; i < topicIds.length; i += batchSize) {
      const chunk = topicIds.slice(i, i + batchSize);
      console.log(`[Batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(topicIds.length / batchSize)}] Processing ${chunk.length} topics...`);

      try {
        // Get topic configurations from registry
        const topics = chunk.map(id => {
          const config = registry.getTopic(id);
          if (!config) {
            throw new Error(`Topic ${id} not found in registry`);
          }

          const firstSection = config.progressionStructure?.sections?.[0];
          const objectives = Array.isArray(config.learningObjectives)
            ? config.learningObjectives.join('; ')
            : config.learningObjectives;

          return {
            topicId: id,
            displayName: config.displayName || config.topicName || id,
            topicName: config.topicName || id,
            firstSection: firstSection || { id: 'intro', title: 'Introduction' },
            learningObjectives: objectives
          };
        });

        // Build batch prompt using new resolver
        const prompt = promptResolver.resolveInitialGreetingBatch({
          topics,
          variationStyle,
          avoidPatterns
        });
        console.log('Batch prompt generated, calling AI provider...');
        console.log('Prompt length (chars):', prompt.length);
        // Call AI provider with larger token limit for batch
        const text = await this.provider.generateContent(prompt, 8192);

        if (!text) {
          throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty batch response from AI');
        }

        // Parse batch response
        const parsed = safeParseJSON<{ greetings: Record<string, InitialGreetingResponse> }>(
          text,
          ['greetings'],
          { greetings: {} }
        );

        if (!parsed.greetings || Object.keys(parsed.greetings).length === 0) {
          throw new AIServiceError(
            AIErrorType.UNKNOWN,
            null,
            false,
            'AI returned empty greetings object'
          );
        }

        // Validate each greeting
        Object.entries(parsed.greetings).forEach(([topicId, greeting]) => {
          validateRequiredKeys(greeting, ['speech', 'display'], `Invalid greeting for ${topicId}`);
        });

        // Merge results
        Object.assign(allResults, parsed.greetings);
        console.log(`  ✓ Generated ${Object.keys(parsed.greetings).length} greetings`);

      } catch (error) {
        console.error(`[Batch ${Math.floor(i / batchSize) + 1}] Failed:`, error);
        throw AIServiceError.fromHttpError(error);
      }
    }

    return allResults;
  }

  async generateSectionStartQuestion(
    topicId: string,
    sectionId: string,
    preGeneratedQuestion?: import('../data/learn/question-banks/types').PreGeneratedQuestion
  ): Promise<InitialGreetingResponse> {
    console.log(`📥 BaseAIService.generateSectionStartQuestion called with:`, {
      topicId,
      sectionId,
      hasPreGenQ: !!preGeneratedQuestion,
      preGenQId: preGeneratedQuestion?.questionId
    });

    try {
      // If pre-generated question provided, generate speech only
      if (preGeneratedQuestion) {
        console.log(`🏦 Generating speech for pre-generated question in section ${sectionId}`);

        const prompt = `You are an encouraging math tutor. Generate a warm, contextual transition greeting for a student starting a new section.

Section: ${sectionId}
Topic: ${topicId}

The student is about to work on this problem:
${preGeneratedQuestion.problemStatement}

Generate ONLY a brief (1-2 sentences) spoken greeting that:
- Acknowledges the section transition
- Encourages the student
- Is conversational and warm

Return ONLY a JSON object with this structure:
{
  "speech": {
    "text": "your greeting here (plain text, no markdown)",
    "emotion": "encouraging"
  }
}`;

        const text = await this.provider.generateContent(prompt);

        if (!text) {
          throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty speech response from AI');
        }

        const parsedResponse = safeParseJSON<{ speech: { text: string; emotion: string } }>(
          text,
          ['speech'],
          {
            speech: {
              text: "Great! Let's work on this new section together!",
              emotion: 'encouraging'
            }
          }
        );

        // Construct full response with pre-generated question
        return {
          speech: {
            text: parsedResponse.speech.text,
            emotion: (parsedResponse.speech.emotion as any) || 'encouraging'
          },
          display: {
            content: preGeneratedQuestion.imagePath
              ? `${preGeneratedQuestion.problemStatement}\n\n![Problem Diagram](${preGeneratedQuestion.imagePath})`
              : preGeneratedQuestion.problemStatement,
            showAfterSpeech: true
          },
          mathTool: undefined
        };
      }

      // Standard AI-generated flow (no pre-generated question)
      const prompt = promptResolver.resolveSectionStartQuestion({
        topicId: topicId as any,
        sectionId
      });

      console.log(`Prompt for section ${sectionId} start:`, prompt);
      const text = await this.provider.generateContent(prompt);

      console.log('Section start question generation debug:');
      console.log('Raw response:', text);

      if (!text) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty section start response from AI');
      }

      // Parse JSON response using safeParseJSON (prevents double-escaping LaTeX)
      const parsedResponse = safeParseJSON<InitialGreetingResponse>(
        text,
        ['speech', 'display'],
        {
          speech: {
            text: "Let's work on this new section together!",
            emotion: 'encouraging' as const
          },
          display: {
            content: "I encountered an error. Please try clicking the section again.",
            showAfterSpeech: true
          }
        }
      );

      // Validate response structure
      validateRequiredKeys(parsedResponse, ['speech', 'display'], 'Invalid section start response structure');

      return parsedResponse;
    } catch (error) {
      console.error('Error generating section start question:', error);

      throw AIServiceError.fromHttpError(error);
    }
  }

  async generateSectionResume(
    topicId: string,
    sectionId: string,
    sectionMessages: Message[],
    sectionStats: import('../types/types').SectionProgressEntry,
    preGeneratedQuestion?: import('../data/learn/question-banks/types').PreGeneratedQuestion
  ): Promise<InitialGreetingResponse> {
    try {
      // If pre-generated question provided, generate speech only
      if (preGeneratedQuestion) {
        console.log(`🏦 Generating resume speech for pre-generated question in section ${sectionId}`);

        const prompt = `You are an encouraging math tutor. Generate a warm, contextual resume greeting for a student returning to a section.

Section: ${sectionId}
Topic: ${topicId}

Student Progress:
- Questions attempted: ${sectionStats.questionsAttempted}
- Questions correct: ${sectionStats.questionsCorrect}
- Hints used: ${sectionStats.hintsUsed}

The student will continue with this problem:
${preGeneratedQuestion.problemStatement}

Generate ONLY a brief (1-2 sentences) spoken greeting that:
- Welcomes the student back
- Acknowledges their progress (if any)
- Encourages them to continue
- Is conversational and warm

Return ONLY a JSON object with this structure:
{
  "speech": {
    "text": "your greeting here (plain text, no markdown)",
    "emotion": "encouraging"
  }
}`;

        const text = await this.provider.generateContent(prompt);

        if (!text) {
          throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty speech response from AI');
        }

        const parsedResponse = safeParseJSON<{ speech: { text: string; emotion: string } }>(
          text,
          ['speech'],
          {
            speech: {
              text: "Welcome back! Let's continue where we left off.",
              emotion: 'encouraging'
            }
          }
        );

        // Construct full response with pre-generated question
        return {
          speech: {
            text: parsedResponse.speech.text,
            emotion: (parsedResponse.speech.emotion as any) || 'encouraging'
          },
          display: {
            content: preGeneratedQuestion.imagePath
              ? `${preGeneratedQuestion.problemStatement}\n\n![Problem Diagram](${preGeneratedQuestion.imagePath})`
              : preGeneratedQuestion.problemStatement,
            showAfterSpeech: true
          },
          mathTool: undefined
        };
      }

      // Standard AI-generated flow (no pre-generated question)
      const prompt = promptResolver.resolveSectionResume({
        topicId: topicId as any,
        sectionId,
        sectionMessages,
        sectionStats
      });

      console.log(`Prompt for section ${sectionId} resume:`, prompt);
      const text = await this.provider.generateContent(prompt);

      console.log('Section resume generation debug:');
      console.log('Raw response:', text);

      if (!text) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty section resume response from AI');
      }

      // Parse JSON response using safeParseJSON (prevents double-escaping LaTeX)
      const parsedResponse = safeParseJSON<InitialGreetingResponse>(
        text,
        ['speech', 'display'],
        {
          speech: {
            text: "Welcome back! Let's continue where we left off.",
            emotion: 'encouraging' as const
          },
          display: {
            content: "I encountered an error resuming this section. Please try again.",
            showAfterSpeech: true
          }
        }
      );

      // Validate response structure
      validateRequiredKeys(parsedResponse, ['speech', 'display'], 'Invalid section resume response structure');

      return parsedResponse;
    } catch (error) {
      console.error('Error generating section resume:', error);

      throw AIServiceError.fromHttpError(error);
    }
  }

  /**
   * LEGACY: Generate celebration message (deprecated - use new overload with stats)
   */
  async generateCelebrationLegacy(finalScore: number, problemsCompleted: number, sessionDuration: number, topicId: string = 'fraction-division-by-whole-numbers'): Promise<string> {
    const prompt = promptResolver.resolveCelebration({
      topicId: topicId as any,
      finalScore,
      problemsCompleted,
      sessionDuration
    });

    try {
      const text = await this.provider.generateContent(prompt);

      if (!text) {
        return `🎉 Congratulations! You've mastered the topic with a score of ${finalScore.toFixed(2)}/1.00! You completed ${problemsCompleted} problems and showed excellent understanding. Great job - you're ready for more advanced topics! 🌟`;
      }

      return text;
    } catch (error) {
      console.error('Error generating celebration:', error);
      throw AIServiceError.fromHttpError(error);
    }
  }

  async generateQuestion(
    problemType: number,
    topicId: string = 'fraction-division-by-whole-numbers',
    context?: {
      recentHistory?: string;
      evaluatorReasoning?: string;
      evaluatorAction?: string;
      advanceToNextSection?: boolean;
      currentSection?: string;
      recentProblems?: string[];
    }
  ): Promise<QuestionGenerationResponse> {
    const prompt = promptResolver.resolveQuestionGeneration({
      topicId: topicId as any,
      currentProblemType: problemType,
      recentHistory: context?.recentHistory,
      evaluatorReasoning: context?.evaluatorReasoning,
      evaluatorInstruction: {
        action: context?.evaluatorAction || 'NEW_PROBLEM',
        advanceToNextSection: context?.advanceToNextSection || false
      },
      currentSection: context?.currentSection,
      recentProblems: context?.recentProblems
    });
    console.log('Prompt for question generation:', prompt);
    try {
      const text = await this.provider.generateContent(prompt);

      // Debug logging
      console.log('Question generation debug:');
      console.log('Raw response:', text);

      if (!text) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty question response from AI');
      }

      // Parse JSON response using safeParseJSON (tries direct parsing first, prevents double-escaping LaTeX)
      // NOTE: No fallback provided - if parsing fails (including truncation), let the error propagate
      // so FallbackAIService can try Claude instead of showing an irrelevant fallback problem
      const parsedResponse = safeParseJSON<QuestionGenerationResponse>(
        text,
        ['speech', 'display']
        // No fallback - errors will trigger Claude fallback via FallbackAIService
      );

      // Validate response structure
      if (!parsedResponse.speech?.text || !parsedResponse.display?.content) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Invalid question generation response structure');
      }

      return parsedResponse;
    } catch (error) {
      console.error('Error generating question:', error);

      throw AIServiceError.fromHttpError(error);
    }
  }

  async generateResponse(
    studentResponse: string,
    recentHistory: Message[],
    currentProblemType: number,
    isComplete: boolean = false,
    topicId: string = 'fraction-division-by-whole-numbers'
  ): Promise<GeminiResponse> {
    const historyText = formatConversationHistory(recentHistory);

    // If subtopic is already complete, generate celebration instead
    if (isComplete) {
      return {
        response: "🎉 Congratulations! You've already mastered fraction division! Amazing work on completing this subtopic!",
        metadata: {
          detectedUnderstanding: "complete" as const,
          suggestedDifficulty: "same" as const,
          conceptsCovered: []
        }
      };
    }

    const prompt = promptResolver.resolveConversationResponse({
      topicId: topicId as any,
      currentProblemType,
      recentHistory: historyText,
      studentResponse
    });

    console.log('=== CONVERSATION DEBUG ===');
    console.log('Student response:', studentResponse);
    console.log('Recent history:', historyText);
    console.log('Full prompt:', prompt);
    console.log('=========================');

    try {
      console.log('Calling AI for conversation...');
      const responseText = await this.provider.generateContent(prompt);
      console.log('API call completed, response:', responseText);

      // Check if response is empty
      if (!responseText || !responseText.trim()) {
        console.error('Empty response from AI for conversation');
        // Return a fallback response
        return {
          response: "I'm having trouble generating a response. Can you try rephrasing your answer or ask for help?",
          metadata: {
            detectedUnderstanding: "none" as const,
            suggestedDifficulty: "same" as const,
            conceptsCovered: []
          }
        };
      }

      // Simple approach: just return the response, let AI handle all logic
      return {
        response: responseText || "I'm having trouble understanding. Can you try again?",
        metadata: {
          detectedUnderstanding: "partial" as const,
          suggestedDifficulty: "same" as const,
          conceptsCovered: []
        }
      };
    } catch (error) {
      console.error('AI conversation error:', error);

      // Return fallback response
      return {
        response: "I'm having some technical difficulties. Please try again!",
        metadata: {
          detectedUnderstanding: "none" as const,
          suggestedDifficulty: "same" as const,
          conceptsCovered: []
        }
      };
    }
  }

  /**
   * Evaluate student answer and decide next action
   * Returns action + reasoning (no instruction objects)
   */
  async evaluateAnswer(
    studentResponse: string,
    recentHistory: Message[],
    problemState: ProblemState,
    topicId: string,
    sectionProgress?: import('../types/types').SectionProgressState
  ): Promise<EvaluatorOutput> {
    const historyText = formatConversationHistory(recentHistory);

    // Extract current section's detailed stats
    const currentSectionStats = sectionProgress?.sectionHistory.find(
      entry => entry.sectionId === sectionProgress.currentSection
    );

    const prompt = promptResolver.resolveEvaluatorAgent({
      topicId: topicId as any,
      currentProblemType: problemState.problemType,
      recentHistory: historyText,
      studentResponse,
      currentProblemId: problemState.currentProblemId,
      hintsGiven: problemState.hintsGivenForCurrentProblem,
      studentAttempts: problemState.attemptsForCurrentProblem,
      currentProblemText: problemState.currentProblemText,
      originalMathTool: problemState.originalMathTool,
      currentSection: sectionProgress?.currentSection,
      masteredSections: sectionProgress?.masteredSections,
      sectionStats: currentSectionStats ? {
        questionsAttempted: currentSectionStats.questionsAttempted,
        questionsCorrect: currentSectionStats.questionsCorrect,
        hintsUsed: currentSectionStats.hintsUsed
      } : undefined
    } as any);

    console.log('=== EVALUATOR (SIMPLIFIED) DEBUG ===');
    console.log('Student Response:', studentResponse);
    console.log('Current Section:', sectionProgress?.currentSection);
    console.log('Full Prompt:', prompt);
    console.log('====================================');

    try {
      const responseText = await this.provider.generateContent(prompt);

      console.log('Evaluator raw response:', responseText);

      // Parse the evaluator output
      const evaluation = safeParseJSON<EvaluatorOutput>(
        responseText,
        ['action', 'answerCorrect', 'understanding', 'reasoning']
      );

      console.log('Parsed evaluator output:', evaluation);

      // Validate required fields
      validateRequiredKeys(
        evaluation,
        ['action', 'answerCorrect', 'understanding', 'advanceToNextSection', 'reasoning'],
        'Invalid evaluator output'
      );

      return evaluation;
    } catch (error) {
      console.error('Evaluator error:', error);
      throw AIServiceError.fromHttpError(error);
    }
  }

  /**
   * Evaluate student answer using pre-generated question with step-by-step solution
   * Used for topics where AI-generated questions are unreliable
   * Returns evaluation + direct hint/solution content (no separate Tutor agent needed)
   */
  async evaluateAnswerPreGenerated(
    studentResponse: string,
    _recentHistory: Message[],
    problemState: ProblemState,
    _topicId: string,
    sectionProgress: import('../types/types').SectionProgressState,
    preGeneratedQuestion: import('../data/learn/question-banks/types').PreGeneratedQuestion,
    nextQuestion?: import('../data/learn/question-banks/types').PreGeneratedQuestion,
    isLastQuestionInSection: boolean = false,
    previousAction?: string  // Previous evaluator action (GIVE_HINT, GIVE_SOLUTION, or none)
  ): Promise<import('../prompt-library/types/agents').PreGeneratedLearnEvaluatorOutput> {

    // Extract current section's detailed stats
    const currentSectionStats = sectionProgress.sectionHistory.find(
      entry => entry.sectionId === sectionProgress.currentSection
    );

    if (!currentSectionStats) {
      throw new Error(`No section stats found for section: ${sectionProgress.currentSection}`);
    }

    // Build the prompt using the appropriate evaluator
    // Use word problems evaluator for questions with hintImagePath (bar model problems)
    // Use generic evaluator for other pre-generated questions (e.g., composite figures)
    const hasBarModel = !!(preGeneratedQuestion as any).hintImagePath;

    let prompt: string;

    if (hasBarModel) {
      // Word problems with bar models - use specialized evaluator (no LaTeX, plain text only)
      const { buildWordProblemsEvaluatorPrompt } = await import(
        '../prompt-library/core/agents/preGeneratedWordProblemsEvaluator'
      );

      prompt = buildWordProblemsEvaluatorPrompt({
        stepByStepSolution: preGeneratedQuestion.stepByStepSolution,
        correctAnswer: preGeneratedQuestion.correctAnswer,
        currentProblem: problemState.currentProblemText,
        studentAnswer: studentResponse,
        currentSection: sectionProgress.currentSection,
        sectionProgress: `Attempted: ${currentSectionStats.questionsAttempted}, Correct: ${currentSectionStats.questionsCorrect}, Hints: ${currentSectionStats.hintsUsed}`,
        hintsGiven: problemState.hintsGivenForCurrentProblem,
        attemptsMade: problemState.attemptsForCurrentProblem,
        hintImagePath: (preGeneratedQuestion as any).hintImagePath,
        previousAction,
        nextQuestion: nextQuestion ? {
          questionId: nextQuestion.questionId,
          problemStatement: {
            display: nextQuestion.problemStatement,
            speech: nextQuestion.problemStatement
          }
        } : undefined,
        isLastQuestionInSection
      });
    } else {
      // Generic pre-generated questions (composite figures, etc.) - may need LaTeX
      const { buildPreGeneratedLearnEvaluatorPrompt } = await import(
        '../prompt-library/core/agents/preGeneratedLearnEvaluator'
      );

      prompt = buildPreGeneratedLearnEvaluatorPrompt({
        stepByStepSolution: preGeneratedQuestion.stepByStepSolution,
        correctAnswer: preGeneratedQuestion.correctAnswer,
        currentProblem: problemState.currentProblemText,
        studentAnswer: studentResponse,
        currentSection: sectionProgress.currentSection,
        sectionProgress: `Attempted: ${currentSectionStats.questionsAttempted}, Correct: ${currentSectionStats.questionsCorrect}, Hints: ${currentSectionStats.hintsUsed}`,
        hintsGiven: problemState.hintsGivenForCurrentProblem,
        attemptsMade: problemState.attemptsForCurrentProblem,
        hintImagePath: preGeneratedQuestion.imagePath,
        previousAction,
        nextQuestion: nextQuestion ? {
          questionId: nextQuestion.questionId,
          problemStatement: {
            display: nextQuestion.problemStatement,
            speech: nextQuestion.problemStatement
          }
        } : undefined,
        isLastQuestionInSection
      });
    }

    console.log('=== PRE-GENERATED LEARN EVALUATOR DEBUG ===');
    console.log('Prompt for pre-generated learn evaluator:', prompt);
    console.log('Student Response:', studentResponse);
    console.log('Correct Answer:', preGeneratedQuestion.correctAnswer);
    console.log('Current Section:', sectionProgress.currentSection);
    console.log('Full Prompt length:', prompt.length);
    console.log('====================================');

    try {
      const responseText = await this.provider.generateContent(prompt);

      console.log('Pre-generated evaluator raw response:', responseText);

      // Parse the evaluator output
      const evaluation = safeParseJSON<import('../prompt-library/types/agents').PreGeneratedLearnEvaluatorOutput>(
        responseText,
        ['answerCorrect', 'progression']  // action is optional (omitted when section complete)
      );

      console.log('Parsed pre-generated evaluator output:', evaluation);

      // Validate required fields
      validateRequiredKeys(
        evaluation,
        ['answerCorrect', 'action', 'speech', 'display'],
        'Invalid pre-generated evaluator output'
      );

      return evaluation;
    } catch (error) {
      console.error('Pre-generated evaluator error:', error);
      throw AIServiceError.fromHttpError(error);
    }
  }

  /**
   * Generate tutor response for hints and celebrations
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
  ): Promise<import('../prompt-library/types/agents').TutorOutput> {
    try {
      console.log('=== TUTOR AGENT START ===');
      console.log('Action:', evaluatorOutput.action);
      console.log('Evaluator reasoning:', evaluatorOutput.reasoning);
      console.log('Hint level:', evaluatorOutput.hintLevel);

      // Format history for prompt
      const historyText = formatConversationHistory(recentHistory);

      // Get the prompt for the tutor agent
      const prompt = promptResolver.resolveTutorAgent({
        topicId: topicId as any,
        currentProblemType: problemType,
        recentHistory: historyText,
        studentResponse,
        currentProblemText: currentProblem,
        evaluatorAssessment: {
          answerCorrect: evaluatorOutput.answerCorrect,
          understanding: evaluatorOutput.understanding,
          conceptGaps: evaluatorOutput.conceptGaps
        },
        evaluatorReasoning: evaluatorOutput.reasoning,
        evaluatorInstruction: {
          action: evaluatorOutput.action,
          hintLevel: evaluatorOutput.hintLevel
        },
        currentSection
      });

      console.log('Calling AI with Tutor Agent prompt...');
      console.log('Full tutor prompt:', prompt);

      const responseText = await this.provider.generateContent(prompt);

      console.log('Tutor Agent raw response:', responseText);

      // Parse JSON response using safeParseJSON (prevents double-escaping LaTeX)
      const parsedResponse = safeParseJSON<import('../prompt-library/types/agents').TutorOutput>(
        responseText,
        ['speech', 'display'],
        {
          speech: {
            text: "Let me help you with that.",
            emotion: 'encouraging'
          },
          display: {
            content: null,
            showAfterSpeech: false,
            type: evaluatorOutput.action === "CELEBRATE" ? 'celebration' : 'hint'
          }
        }
      );

      console.log('Parsed tutor response:', parsedResponse);

      // Validate required fields
      validateRequiredKeys(parsedResponse, ['speech', 'display'], 'Invalid tutor response');
      validateRequiredKeys(parsedResponse.speech, ['text', 'emotion'], 'Invalid speech structure');

      console.log('=== TUTOR AGENT COMPLETE ===');
      return parsedResponse;

    } catch (error) {
      console.error('Error in Tutor Agent:', error);
      throw AIServiceError.fromHttpError(error);
    }
  }

  /**
   * Generate concept clarification response (NEW - for CLARIFY_CONCEPT action)
   * Provides direct explanations to conceptual questions without counting as hints
   */
  async generateConceptClarification(
    currentProblem: string,
    studentResponse: string,
    recentHistory: Message[],
    problemType: number,
    topicId: string,
    evaluatorReasoning: string,
    currentSection?: string
  ): Promise<import('../prompt-library/types/agents').ConceptClarifierOutput> {
    try {
      console.log('=== CONCEPT CLARIFIER AGENT START ===');
      console.log('Student question:', studentResponse);
      console.log('Evaluator reasoning:', evaluatorReasoning);

      // Format history for prompt
      const historyText = formatConversationHistory(recentHistory);

      // Get the prompt for the concept clarifier agent
      const prompt = promptResolver.resolveConceptClarifierAgent({
        topicId: topicId as any,
        currentProblemType: problemType,
        recentHistory: historyText,
        studentResponse,
        currentProblemText: currentProblem,
        evaluatorReasoning,
        currentSection
      });

      console.log('Calling AI with Concept Clarifier Agent prompt...');
      console.log('Full concept clarification prompt:', prompt);

      const responseText = await this.provider.generateContent(prompt);

      console.log('Concept Clarifier Agent raw response:', responseText);

      // Parse JSON response using safeParseJSON
      const parsedResponse = safeParseJSON<import('../prompt-library/types/agents').ConceptClarifierOutput>(
        responseText,
        ['speech', 'display'],
        {
          speech: {
            text: "Let me explain that concept.",
            emotion: 'warm'
          },
          display: {
            content: "Here's an explanation of the concept.",
            showAfterSpeech: false,
            type: 'clarification'
          }
        }
      );

      console.log('Parsed concept clarification response:', parsedResponse);

      // Validate required fields
      validateRequiredKeys(parsedResponse, ['speech', 'display'], 'Invalid concept clarification response');
      validateRequiredKeys(parsedResponse.speech, ['text', 'emotion'], 'Invalid speech structure');

      console.log('=== CONCEPT CLARIFIER AGENT COMPLETE ===');
      return parsedResponse;

    } catch (error) {
      console.error('Error in Concept Clarifier Agent:', error);
      throw AIServiceError.fromHttpError(error);
    }
  }

  /**
   * Generate hint response (NEW - for GIVE_HINT action only)
   * Provides Socratic scaffolding for problem-solving
   */
  async generateHint(
    evaluatorOutput: EvaluatorOutput,
    currentProblem: string,
    studentResponse: string,
    recentHistory: Message[],
    problemType: number,
    topicId: string,
    currentSection?: string
  ): Promise<import('../prompt-library/types/agents').HintOutput> {
    try {
      console.log('=== HINT AGENT START ===');
      console.log('Hint level:', evaluatorOutput.hintLevel);
      console.log('Evaluator reasoning:', evaluatorOutput.reasoning);

      // Format history for prompt
      const historyText = formatConversationHistory(recentHistory);

      // Get the prompt for the hint agent
      const prompt = promptResolver.resolveHintAgent({
        topicId: topicId as any,
        currentProblemType: problemType,
        recentHistory: historyText,
        studentResponse,
        currentProblemText: currentProblem,
        evaluatorAssessment: {
          answerCorrect: evaluatorOutput.answerCorrect,
          understanding: evaluatorOutput.understanding,
          conceptGaps: evaluatorOutput.conceptGaps
        },
        evaluatorReasoning: evaluatorOutput.reasoning,
        hintLevel: evaluatorOutput.hintLevel || 1,
        currentSection
      });

      console.log('Calling AI with Hint Agent prompt...');
      console.log('Full hint prompt:', prompt);

      const responseText = await this.provider.generateContent(prompt);

      console.log('Hint Agent raw response:', responseText);

      // Parse JSON response using safeParseJSON
      const parsedResponse = safeParseJSON<import('../prompt-library/types/agents').HintOutput>(
        responseText,
        ['speech', 'display'],
        {
          speech: {
            text: "Let me give you a hint.",
            emotion: 'encouraging'
          },
          display: {
            content: "Here's a hint to help you.",
            showAfterSpeech: false,
            type: 'hint'
          }
        }
      );

      console.log('Parsed hint response:', parsedResponse);

      // Validate required fields
      validateRequiredKeys(parsedResponse, ['speech', 'display'], 'Invalid hint response');
      validateRequiredKeys(parsedResponse.speech, ['text', 'emotion'], 'Invalid speech structure');

      console.log('=== HINT AGENT COMPLETE ===');
      return parsedResponse;

    } catch (error) {
      console.error('Error in Hint Agent:', error);
      throw AIServiceError.fromHttpError(error);
    }
  }

  /**
   * Generate celebration response
   * Overload 1: Legacy signature (deprecated)
   * Overload 2: NEW 5-agent architecture with stats
   */
  async generateCelebration(finalScore: number, problemsCompleted: number, sessionDuration: number, topicId: string): Promise<string>;
  async generateCelebration(
    topicId: string,
    recentHistory: Message[],
    evaluatorReasoning: string,
    stats: {
      timeSpent: string;
      problemsSolved: number;
      sectionsCompleted: number;
      accuracy: string;
      sectionDetails?: string;
    }
  ): Promise<import('../prompt-library/types/agents').CelebrationOutput>;
  async generateCelebration(
    topicIdOrFinalScore: string | number,
    recentHistoryOrProblemsCompleted: Message[] | number,
    evaluatorReasoningOrSessionDuration: string | number,
    statsOrTopicId?: { timeSpent: string; problemsSolved: number; sectionsCompleted: number; accuracy: string; sectionDetails?: string } | string
  ): Promise<import('../prompt-library/types/agents').CelebrationOutput | string> {
    // NEW signature (5-agent architecture)
    if (typeof topicIdOrFinalScore === 'string' && Array.isArray(recentHistoryOrProblemsCompleted) && typeof evaluatorReasoningOrSessionDuration === 'string' && statsOrTopicId && typeof statsOrTopicId === 'object') {
      const topicId = topicIdOrFinalScore;
      const recentHistory = recentHistoryOrProblemsCompleted;
      const evaluatorReasoning = evaluatorReasoningOrSessionDuration;
      const stats = statsOrTopicId;
    try {
      console.log('=== CELEBRATION AGENT START ===');
      console.log('Topic completed:', topicId);
      console.log('Stats:', stats);

      // Format history for prompt
      const historyText = formatConversationHistory(recentHistory);

      // Get the prompt for the celebration agent
      const prompt = promptResolver.resolveCelebrationAgent({
        topicId: topicId as any,
        recentHistory: historyText,
        evaluatorReasoning,
        timeSpent: stats.timeSpent,
        problemsSolved: stats.problemsSolved,
        sectionsCompleted: stats.sectionsCompleted,
        accuracy: stats.accuracy,
        sectionDetails: stats.sectionDetails || ''
      });

      console.log('Calling AI with Celebration Agent prompt...');

      const responseText = await this.provider.generateContent(prompt);

      console.log('Celebration Agent raw response:', responseText);

      // Parse JSON response using safeParseJSON
      const parsedResponse = safeParseJSON<import('../prompt-library/types/agents').CelebrationOutput>(
        responseText,
        ['speech', 'display'],
        {
          speech: {
            text: "Congratulations on completing this topic!",
            emotion: 'celebratory'
          },
          display: {
            content: "You've completed all sections! Great work!",
            showAfterSpeech: false,
            type: 'celebration'
          },
          stats: stats
        }
      );

      console.log('Parsed celebration response:', parsedResponse);

      // Validate required fields
      validateRequiredKeys(parsedResponse, ['speech', 'display'], 'Invalid celebration response');
      validateRequiredKeys(parsedResponse.speech, ['text', 'emotion'], 'Invalid speech structure');

      console.log('=== CELEBRATION AGENT COMPLETE ===');
      return parsedResponse;

    } catch (error) {
      console.error('Error in Celebration Agent:', error);
      throw AIServiceError.fromHttpError(error);
    }
    }

    // OLD signature (legacy - for backward compatibility)
    const finalScore = topicIdOrFinalScore as number;
    const problemsCompleted = recentHistoryOrProblemsCompleted as number;
    const sessionDuration = evaluatorReasoningOrSessionDuration as number;
    const topicId = statsOrTopicId as string;

    return this.generateCelebrationLegacy(finalScore, problemsCompleted, sessionDuration, topicId);
  }

  async extractStepByStepVisualizations(
    _tutorResponse: string,
    _problemText: string,
    _problemType: number,
    _topicId: string
  ): Promise<any> {
    // Deprecated: This method has been replaced by generateSolution
    // Keeping for backward compatibility
    console.warn('extractStepByStepVisualizations is deprecated, use generateSolution instead');
    return null;
  }

  async extractVisualizationData(
    problemText: string,
    visualizationId: string,
    trigger: 'solution' | 'hint' | 'explanation',
    topicId: string
  ): Promise<VisualizationData | null> {
    const prompt = promptResolver.resolveVisualizationExtraction({
      topicId: topicId as any,
      problemText,
      visualizationId,
      trigger
    });

    console.log('=== VISUALIZATION EXTRACTION DEBUG ===');
    console.log('Problem text:', problemText);
    console.log('Visualization ID:', visualizationId);
    console.log('Trigger:', trigger);
    console.log('Full prompt:', prompt);
    console.log('======================================');

    try {
      const responseText = await this.provider.generateContent(prompt);

      console.log('Visualization extraction raw response:', responseText);

      if (!responseText) {
        console.warn('Empty response from visualization extraction');
        return null;
      }

      // Clean and parse JSON response using safeParseJSON (prevents double-escaping LaTeX)
      const visualizationData = safeParseJSON<any>(responseText, ['problemData', 'stages', 'contextualLabels']);
      console.log('Parsed visualization data:', visualizationData);

      // Validate the structure
      if (!visualizationData.problemData || !visualizationData.stages || !visualizationData.contextualLabels) {
        console.warn('Invalid visualization data structure:', visualizationData);
        return null;
      }

      // Ensure visualization ID is set
      visualizationData.visualizationId = visualizationId;
      visualizationData.trigger = trigger;

      return visualizationData as VisualizationData;
    } catch (error) {
      console.error('Visualization extraction error:', error);
      return null;
    }
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
    try {
      console.log('=== SOLUTION AGENT START ===');
      console.log('Problem text:', problemText);
      console.log('Problem type:', problemType);
      console.log('Student response:', studentResponse);
      console.log('Evaluator reasoning:', evaluatorReasoning);
      console.log('Current section:', currentSection);

      // Format history for prompt
      const historyText = formatConversationHistory(recentHistory);

      // Get the prompt for the solution agent with full context
      const prompt = promptResolver.resolveSolutionAgent({
        topicId: topicId as any,
        currentProblemText: problemText, // Map problemText to currentProblemText
        currentProblemType: problemType,
        recentHistory: historyText,
        studentResponse,
        evaluatorReasoning,
        evaluatorAssessment: {
          understanding: 'struggling', // Provide default assessment for solutions
          conceptGaps: ['Requested full solution']
        },
        solutionInstruction,
        currentSection
      });

      console.log('Calling AI with Solution Agent prompt...');
      console.log('Full prompt:', prompt);
      
      const responseText = await this.provider.generateContent(prompt, 4096);

      console.log('Solution Agent raw response:', responseText);

      // Clean and parse JSON response using safeParseJSON (prevents double-escaping LaTeX)
      const parsedResponse = safeParseJSON<any>(responseText, ['speech', 'display']);
      console.log('Parsed solution data:', parsedResponse);

      // NEW FORMAT: AI returns {speech, display, mathTool (optional)} per INTERACTION_PROTOCOL
      // Validate required fields
      if (!parsedResponse.speech || !parsedResponse.display || !parsedResponse.display.content) {
        throw new Error('Solution Agent response missing required fields (speech, display.content)');
      }

      console.log('=== SOLUTION AGENT COMPLETE ===');
      return parsedResponse;

    } catch (error) {
      console.error('Error in Solution Agent:', error);
      throw AIServiceError.fromHttpError(error);
    }
  }

  /**
   * Generate batch of practice problems in a single AI call
   * Each problem includes: problemText, correctAnswer, and pre-generated solution data
   */
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
    try {
      console.log('=== PRACTICE BATCH GENERATION START ===');
      console.log('Generating batch:', { problemType, topicId, count, context });

      // Build the practice batch prompt
      const prompt = promptResolver.resolvePracticeBatch({
        topicId: topicId as any,
        currentProblemType: problemType,
        count,
        userPreferences: context?.userPreferences,
        excludeContexts: context?.excludeContexts,
        recentProblems: context?.recentProblems
      });
      console.log('🔵 [PROMPT] Practice Batch Generation:\n', prompt);

      const text = await this.provider.generateContent(prompt);

      if (!text) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty practice batch response from AI');
      }

      console.log('Practice batch raw response:', text);

      // Parse JSON response using safeParseJSON (prevents double-escaping LaTeX)
      const parsedResponse = safeParseJSON<{ problems: any[] }>(text, ['problems']);

      // Validate response structure
      validateRequiredKeys(parsedResponse, ['problems'], 'Invalid practice batch response structure');

      if (!Array.isArray(parsedResponse.problems) || parsedResponse.problems.length === 0) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Practice batch returned no problems');
      }

      // Transform each problem into PracticeProblem format
      const practiceProblems: PracticeProblem[] = parsedResponse.problems.map((problem: any, index: number) => {
        // Validate each problem has required fields
        validateRequiredKeys(problem, ['problemText', 'correctAnswer', 'context'], `Invalid problem ${index + 1} structure`);

        // Validate solutionData if present
        let validatedSolutionData = null;
        if (problem.solutionData && typeof problem.solutionData === 'object') {
          try {
            // Check for required solutionData fields
            if (problem.solutionData.stages && Array.isArray(problem.solutionData.stages)) {
              // Validate each stage has required fields
              const validStages = problem.solutionData.stages.every((stage: any) =>
                stage.id && stage.title && stage.description
              );

              if (validStages && problem.solutionData.mathSummary) {
                validatedSolutionData = problem.solutionData;
                console.log(`✓ Problem ${index + 1} has valid solution data with ${problem.solutionData.stages.length} steps`);
              } else {
                console.warn(`⚠ Problem ${index + 1} has incomplete solution data, setting to null`);
              }
            }
          } catch (validationError) {
            console.warn(`⚠ Problem ${index + 1} solution data validation failed:`, validationError);
          }
        }

        return {
          id: `practice_${Date.now()}_${index}`,
          problemText: problem.problemText,
          correctAnswer: problem.correctAnswer,
          problemType,
          context: problem.context,
          generatedAt: Date.now(),
          solutionData: validatedSolutionData
        };
      });

      console.log('=== PRACTICE BATCH GENERATION COMPLETE ===');
      console.log(`Generated ${practiceProblems.length} practice problems`);

      const withSolutions = practiceProblems.filter(p => (p as any).solutionData !== null).length;
      console.log(`Problems with solution data: ${withSolutions}/${practiceProblems.length}`);

      return practiceProblems;

    } catch (error) {
      console.error('Error generating practice batch:', error);
      throw AIServiceError.fromHttpError(error);
    }
  }

  /**
   * Evaluate student response in practice mode with a single AI call
   */
  async evaluatePracticeResponse(
    studentResponse: string,
    currentProblem: PracticeProblem,
    problemState: PracticeProblemState,
    conversationHistory: Message[],
    topicId: string = 'fraction-division-by-whole-numbers'
  ): Promise<PracticeAgentResponse> {
    try {
      console.log('=== PRACTICE AGENT EVALUATION START ===');
      console.log('Student Response:', studentResponse);
      console.log('Current Problem:', currentProblem.problemText);
      console.log('Correct Answer:', currentProblem.correctAnswer);
      console.log('Problem State:', problemState);

      // Format conversation history
      const historyText = formatConversationHistory(conversationHistory);

      // Build the practice agent prompt
      const prompt = promptResolver.resolvePracticeAgent({
        topicId: topicId as any,
        currentProblem: currentProblem.problemText,
        correctAnswer: currentProblem.correctAnswer,
        studentResponse,
        hintsGivenCount: problemState.hintsGiven,
        attemptsCount: problemState.attempts,
        recentHistory: historyText
      });
      console.log('🔵 [PROMPT] Practice Agent Evaluation:\n', prompt);

      const text = await this.provider.generateContent(prompt);

      if (!text) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty practice agent response from AI');
      }

      console.log('Practice agent raw response:', text);

      // Parse JSON response using safeParseJSON (prevents double-escaping LaTeX)
      const parsedResponse = safeParseJSON<PracticeAgentResponse>(
        text,
        ['intent', 'answerCorrect', 'pointsEarned', 'isMainProblemSolved', 'speech', 'display', 'action', 'reasoning'],
        {
          intent: 'answer_submission',
          answerCorrect: false,
          pointsEarned: 0,
          isMainProblemSolved: false,
          speech: {
            text: "I'm having trouble understanding your response. Could you try again?",
            emotion: 'neutral'
          },
          display: {
            content: 'none',
            showAfterSpeech: true
          },
          action: 'none',
          reasoning: 'Fallback response due to parsing error'
        }
      );

      // Validate response structure
      validateRequiredKeys(
        parsedResponse,
        ['intent', 'answerCorrect', 'pointsEarned', 'isMainProblemSolved', 'speech', 'display', 'action', 'reasoning'],
        'Invalid practice agent response structure'
      );

      // Validate nested objects
      validateRequiredKeys(parsedResponse.speech, ['text', 'emotion'], 'Invalid speech structure in practice response');
      validateRequiredKeys(parsedResponse.display, ['content', 'showAfterSpeech'], 'Invalid display structure in practice response');

      console.log('=== PRACTICE AGENT EVALUATION COMPLETE ===');
      console.log('Intent:', parsedResponse.intent);
      console.log('Answer Correct:', parsedResponse.answerCorrect);
      console.log('Action:', parsedResponse.action);

      return parsedResponse;

    } catch (error) {
      console.error('Error evaluating practice response:', error);
      throw AIServiceError.fromHttpError(error);
    }
  }
}

export default BaseAIService;
