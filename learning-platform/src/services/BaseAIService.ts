import type { GeminiResponse, Message, EvaluatorInstruction, ProblemState, QuestionGenerationResponse, InitialGreetingResponse, PracticeProblem, PracticeAgentResponse, PracticeProblemState } from '../types/types';
import type { VisualizationData } from '../types/visualization';
import { promptResolver } from '../prompts/promptResolver';
import type { AIService } from './aiService';
import { AIServiceError, AIErrorType } from './aiService';
import type { AIProvider } from './providers/AIProvider';
import { parseJSON, safeParseJSON, validateRequiredKeys, formatConversationHistory, extractJSONFromMarkdown } from './utils/responseParser';
import { calculateVisualizationMath } from '../utils/mathUtils';

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

      console.log('Prompt for initial greeting+problem:', prompt);
      const text = await this.provider.generateContent(prompt);

      console.log('Initial greeting+problem generation debug:');
      console.log('Raw response:', text);

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

  async generateSectionStartQuestion(topicId: string, sectionId: string): Promise<InitialGreetingResponse> {
    try {
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
    sectionStats: import('../types/types').SectionProgressEntry
  ): Promise<InitialGreetingResponse> {
    try {
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

  async generateCelebration(finalScore: number, problemsCompleted: number, sessionDuration: number, topicId: string = 'fraction-division-by-whole-numbers'): Promise<string> {
    const prompt = promptResolver.resolveCelebration({
      topicId: topicId as any,
      finalScore,
      problemsCompleted,
      sessionDuration
    });

    try {
      const text = await this.provider.generateContent(prompt);

      if (!text) {
        return `🎉 Congratulations! You've mastered fraction division with a score of ${finalScore.toFixed(2)}/1.00! You completed ${problemsCompleted} problems and showed excellent understanding. Great job - you're ready for more advanced math topics! 🌟`;
      }

      return text;
    } catch (error) {
      console.error('Error generating celebration:', error);
      throw AIServiceError.fromHttpError(error);
    }
  }

  async generateQuestion(problemType: number, topicId: string = 'fraction-division-by-whole-numbers', context?: { recentHistory?: string; evaluatorReasoning?: string; questionInstruction?: any }): Promise<QuestionGenerationResponse> {
    const prompt = promptResolver.resolveQuestionGeneration({
      topicId: topicId as any,
      currentProblemType: problemType,
      recentHistory: context?.recentHistory,
      evaluatorReasoning: context?.evaluatorReasoning,
      questionInstruction: context?.questionInstruction
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
      const parsedResponse = safeParseJSON<QuestionGenerationResponse>(
        text,
        ['speech', 'display'],
        {
          speech: {
            text: "Let's try another problem!",
            emotion: 'encouraging'
          },
          display: {
            content: "Sarah has 2/3 of a pizza and wants to share it equally among 4 friends. How much pizza does each friend get?",
            showAfterSpeech: true
          }
        }
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

  async evaluateAndInstruct(
    studentResponse: string,
    recentHistory: Message[],
    problemState: ProblemState,
    topicId: string,
    sectionProgress?: import('../types/types').SectionProgressState
  ): Promise<EvaluatorInstruction> {
    const historyText = formatConversationHistory(recentHistory);

    // Extract current section's detailed stats from sectionHistory
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
      originalMathTool: problemState.originalMathTool, // Pass ground truth for validation
      currentSection: sectionProgress?.currentSection,
      masteredSections: sectionProgress?.masteredSections,
      // NEW: Pass current section's detailed stats for accurate mastery tracking
      sectionStats: currentSectionStats ? {
        questionsAttempted: currentSectionStats.questionsAttempted,
        questionsCorrect: currentSectionStats.questionsCorrect,
        hintsUsed: currentSectionStats.hintsUsed
      } : undefined
    } as any);

    console.log('=== EVALUATOR AGENT DEBUG ===');
    console.log('Problem State:', problemState);
    console.log('Student Response:', studentResponse);
    console.log('==============================');

    try {
      const responseText = await this.provider.generateContent(prompt);

      console.log('Evaluator agent raw response:', responseText);

      // Clean and parse JSON response using safeParseJSON (prevents double-escaping LaTeX)
      const evaluation = safeParseJSON<any>(responseText, ['action', 'answerCorrect', 'isMainProblemSolved']);
      console.log('Parsed evaluator instruction:', evaluation);

      // Ensure we preserve all required fields from both top level and instruction
      if (evaluation.instruction) {
        return {
          ...evaluation,
          ...evaluation.instruction,
          // Explicitly preserve critical fields from top level
          answerCorrect: evaluation.answerCorrect,
          isMainProblemSolved: evaluation.isMainProblemSolved
        };
      }
      return evaluation;
    } catch (error) {
      console.error('Evaluator Agent error:', error);

      // Convert to AIServiceError for proper fallback handling
      throw AIServiceError.fromHttpError(error);
    }
  }

  async executeInstruction(
    instruction: EvaluatorInstruction,
    recentHistory: Message[],
    studentResponse: string,
    currentProblemType: number,
    topicId: string
  ): Promise<string> {
    const historyText = formatConversationHistory(recentHistory);

    // Use tutor agent prompt for all actions
    // For NEW_PROBLEM, this returns only celebration speech (display.content is null)
    // The actual problem is generated separately via generateQuestion call
    const prompt = promptResolver.resolveTutorAgent({
      topicId: topicId as any,
      tutorInstruction: instruction.tutorInstruction,
      evaluatorAssessment: instruction.assessment,
      answerCorrect: instruction.answerCorrect,
      evaluatorReasoning: instruction.reasoning,
      recentHistory: historyText,
      studentResponse,
      currentProblemType,
      hintLevel: instruction.hintLevel,
      currentSection: instruction.progression?.currentSection  // Pass section for scoped math tools
    });

    console.log('=== TUTOR AGENT DEBUG ===');
    console.log('Instruction:', instruction);
    console.log('Action:', instruction.action);
    console.log('=========================');

    try {
      const responseText = await this.provider.generateContent(prompt);

      console.log('Tutor agent raw response:', responseText);

      if (!responseText) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty response from Tutor Agent');
      }

      return responseText;
    } catch (error) {
      console.error('Tutor Agent error:', error);

      // Convert to AIServiceError for proper fallback handling
      throw AIServiceError.fromHttpError(error);
    }
  }

  async extractStepByStepVisualizations(
    tutorResponse: string,
    problemText: string,
    problemType: number,
    topicId: string
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
    solutionInstruction?: any
  ): Promise<any> {
    try {
      console.log('=== SOLUTION AGENT START ===');
      console.log('Problem text:', problemText);
      console.log('Problem type:', problemType);
      console.log('Student response:', studentResponse);
      console.log('Evaluator reasoning:', evaluatorReasoning);
      console.log('Solution instruction:', solutionInstruction);

      // Format history for prompt
      const historyText = formatConversationHistory(recentHistory);

      // Get the prompt for the solution agent with full context
      const prompt = promptResolver.resolveSolutionAgent({
        topicId: topicId as any,
        problemText,
        currentProblemType: problemType,
        recentHistory: historyText,
        studentResponse,
        evaluatorReasoning,
        solutionInstruction
      });

      console.log('Calling AI with Solution Agent prompt...');

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

      const withSolutions = practiceProblems.filter(p => p.solutionData !== null).length;
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
