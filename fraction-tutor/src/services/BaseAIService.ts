import type { GeminiResponse, Message, EvaluatorInstruction, ProblemState, QuestionGenerationResponse, InitialGreetingResponse, PracticeProblem, PracticeAgentResponse, PracticeProblemState } from '../types/types';
import type { VisualizationData } from '../types/visualization';
import { promptResolver } from '../prompts/promptResolver';
import type { AIService } from './aiService';
import { AIServiceError, AIErrorType } from './aiService';
import type { AIProvider } from './providers/AIProvider';
import { parseJSON, validateRequiredKeys, formatConversationHistory, extractJSONFromMarkdown } from './utils/responseParser';
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

      const text = await this.provider.generateContent(prompt);

      console.log('Initial greeting+problem generation debug:');
      console.log('Raw response:', text);

      if (!text) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty greeting+problem response from AI');
      }

      // Parse JSON response
      const parsedResponse = parseJSON<InitialGreetingResponse>(text);

      // Validate response structure
      validateRequiredKeys(parsedResponse, ['greeting', 'problem'], 'Invalid greeting+problem response structure');

      return parsedResponse;
    } catch (error) {
      console.error('Error generating greeting with problem:', error);

      // If JSON parsing fails, provide fallback
      if (error instanceof SyntaxError) {
        console.warn('Failed to parse greeting+problem JSON, using fallback');
        return {
          greeting: "Hi there! I'm your math tutor and I'm excited to help you learn about dividing proper fractions by whole numbers today. Let's start with a problem to see what you already know!",
          problem: "You have 3/4 of a chocolate bar and want to share it equally among 3 friends. How much does each friend get?"
        };
      }

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

  async generateQuestion(problemType: number, topicId: string = 'fraction-division-by-whole-numbers', context?: { recentHistory?: string; evaluatorReasoning?: string }): Promise<QuestionGenerationResponse> {
    const prompt = promptResolver.resolveQuestionGeneration({
      topicId: topicId as any,
      currentProblemType: problemType,
      recentHistory: context?.recentHistory,
      evaluatorReasoning: context?.evaluatorReasoning
    });

    try {
      const text = await this.provider.generateContent(prompt);

      // Debug logging
      console.log('Question generation debug:');
      console.log('Raw response:', text);

      if (!text) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty question response from AI');
      }

      // Parse JSON response
      const parsedResponse = parseJSON<QuestionGenerationResponse>(text);

      // Validate response structure
      if (!parsedResponse.speech?.text || !parsedResponse.display?.content) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Invalid question generation response structure');
      }

      return parsedResponse;
    } catch (error) {
      console.error('Error generating question:', error);

      // If JSON parsing fails, provide fallback
      if (error instanceof SyntaxError) {
        console.warn('Failed to parse question JSON, using fallback');
        return {
          speech: {
            text: "Let's try another problem!",
            emotion: 'encouraging'
          },
          display: {
            content: "Sarah has 2/3 of a pizza and wants to share it equally among 4 friends. How much pizza does each friend get?",
            showAfterSpeech: true
          }
        };
      }

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
    topicId: string
  ): Promise<EvaluatorInstruction> {
    const historyText = formatConversationHistory(recentHistory);

    const prompt = promptResolver.resolveEvaluatorAgent({
      topicId: topicId as any,
      currentProblemType: problemState.problemType,
      recentHistory: historyText,
      studentResponse,
      currentProblemId: problemState.currentProblemId,
      hintsGiven: problemState.hintsGivenForCurrentProblem,
      studentAttempts: problemState.attemptsForCurrentProblem,
      currentProblemText: problemState.currentProblemText
    });

    console.log('=== EVALUATOR AGENT DEBUG ===');
    console.log('Problem State:', problemState);
    console.log('Student Response:', studentResponse);
    console.log('==============================');

    try {
      const responseText = await this.provider.generateContent(prompt);

      console.log('Evaluator agent raw response:', responseText);

      // Clean and parse JSON response
      const evaluation = parseJSON<any>(responseText);
      console.log('Parsed evaluator instruction:', evaluation);

      // Ensure we preserve all required fields from both top level and instruction
      if (evaluation.instruction) {
        return {
          ...evaluation,
          ...evaluation.instruction,
          // Explicitly preserve critical fields from top level
          answerCorrect: evaluation.answerCorrect,
          pointsEarned: evaluation.pointsEarned,
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
      evaluatorInstruction: JSON.stringify(instruction),
      recentHistory: historyText,
      studentResponse,
      currentProblemType,
      hintLevel: instruction.hintLevel
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
    // Deprecated: This method has been replaced by generateVisualizationSolution
    // Keeping for backward compatibility
    console.warn('extractStepByStepVisualizations is deprecated, use generateVisualizationSolution instead');
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

      // Clean and parse JSON response
      const visualizationData = parseJSON<any>(responseText);
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

  async generateVisualizationSolution(
    problemText: string,
    problemType: number,
    topicId: string,
    recentHistory: Message[],
    studentResponse: string,
    evaluatorReasoning: string
  ): Promise<any> {
    try {
      console.log('=== VISUALIZATION AGENT START ===');
      console.log('Problem text:', problemText);
      console.log('Problem type:', problemType);
      console.log('Student response:', studentResponse);
      console.log('Evaluator reasoning:', evaluatorReasoning);

      // Format history for prompt
      const historyText = formatConversationHistory(recentHistory);

      // Get the prompt for the visualization agent with full context
      const prompt = promptResolver.resolveVisualizationAgent({
        topicId: topicId as any,
        problemText,
        currentProblemType: problemType,
        recentHistory: historyText,
        studentResponse,
        evaluatorReasoning
      });

      console.log('Calling AI with Visualization Agent prompt...');

      const responseText = await this.provider.generateContent(prompt, 4096);

      console.log('Visualization Agent raw response:', responseText);

      // Clean and parse JSON response - handle markdown code fences anywhere in response
      const parsedResponse = parseJSON<any>(responseText, true);
      console.log('Parsed visualization solution data:', parsedResponse);

      // NEW FORMAT: AI returns {introText, visualizationData}
      // Transform to MessageBubble format: {introText, steps: [{includeVisualization: true, visualizationData}]}

      let transformedResponse = parsedResponse;

      // If response has visualizationData at top level (new format), transform it
      if (parsedResponse.visualizationData && !parsedResponse.steps) {
        console.log('🔄 Transforming new format to MessageBubble format');

        const vizData = parsedResponse.visualizationData;

        // Inject calculated math fields and theme
        const { getThemeForContext } = await import('../utils/visualizationRegistry');

        // Calculate math fields if we have the basic data
        if (vizData.numerator !== undefined &&
            vizData.denominator !== undefined &&
            vizData.divisor !== undefined) {

          const calculatedMath = calculateVisualizationMath(
            vizData.numerator,
            vizData.denominator,
            vizData.divisor
          );

          // Inject calculated fields into visualizationData
          Object.assign(vizData, calculatedMath);

          console.log('Injected calculated math:', {
            original: { numerator: vizData.numerator, denominator: vizData.denominator, divisor: vizData.divisor },
            calculated: calculatedMath
          });
        }

        // Inject theme based on context
        const contextFromAI = vizData.context;
        if (contextFromAI) {
          const theme = getThemeForContext(contextFromAI as any);
          vizData.theme = theme;

          console.log('Injected theme for Visualization Agent:', {
            context: contextFromAI,
            theme: theme
          });
        }

        // Get visualization config to check if visualization is enabled
        const { P6_MATH_FRACTIONS } = await import('../prompts/topics/P6-Math-Fractions');
        const config = P6_MATH_FRACTIONS[topicId as keyof typeof P6_MATH_FRACTIONS];
        let includeVisualization = true;

        if (config && 'VISUALIZATION_CONFIG' in config) {
          const vizConfig = (config as any).VISUALIZATION_CONFIG[problemType];
          if (vizConfig) {
            // Check if visualization is enabled for this problem type
            includeVisualization = vizConfig.includeVisualization === true;

            if (vizConfig.visualizationId) {
              vizData.visualizationId = vizConfig.visualizationId;
            }
          }
        }

        // Transform to expected format based on visualization setting
        if (includeVisualization) {
          // With visualization: use the standard format
          transformedResponse = {
            introText: parsedResponse.introText || '',
            steps: [{
              stepNumber: 1,
              includeVisualization: true,
              visualizationData: vizData
            }],
            conclusionText: ''
          };
          console.log('✅ Transformed response format (with visualization)');
        } else {
          // Without visualization: return plain text from stages
          // Extract the text content from stages to display as plain text
          const stagesText = vizData.stages
            ? vizData.stages.map((stage: any, index: number) =>
                `**${stage.title}**\n${stage.description}`
              ).join('\n\n')
            : '';

          // Add math summary if available
          let mathSummaryText = '';
          if (vizData.mathSummary) {
            mathSummaryText = `\n\n**The Math:**\n\n**Problem:** ${vizData.mathSummary.problem}\n**Solution:** ${vizData.mathSummary.solution}\n\n${vizData.mathSummary.explanation}`;
          }

          transformedResponse = {
            introText: parsedResponse.introText || '',
            plainTextSolution: stagesText + mathSummaryText,
            includeVisualization: false
          };
          console.log('✅ Transformed response format (plain text only)');
        }
      }

      console.log('=== VISUALIZATION AGENT COMPLETE ===');
      return transformedResponse;

    } catch (error) {
      console.error('Error in Visualization Agent:', error);
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

      const text = await this.provider.generateContent(prompt);

      if (!text) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty practice batch response from AI');
      }

      console.log('Practice batch raw response:', text);

      // Parse JSON response
      const parsedResponse = parseJSON<{ problems: any[] }>(text);

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

      const text = await this.provider.generateContent(prompt);

      if (!text) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty practice agent response from AI');
      }

      console.log('Practice agent raw response:', text);

      // Parse JSON response
      const parsedResponse = parseJSON<PracticeAgentResponse>(text);

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

      // Provide fallback response
      if (error instanceof SyntaxError) {
        console.warn('Failed to parse practice agent JSON, using fallback');
        return {
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
        };
      }

      throw AIServiceError.fromHttpError(error);
    }
  }
}

export default BaseAIService;
