import { GoogleGenerativeAI } from '@google/generative-ai';
import type { GeminiResponse, Message, AnswerEvaluation, EvaluatorInstruction, ProblemState } from '../types/types';
import type { VisualizationData } from '../types/visualization';
import { promptResolver } from '../prompts/promptResolver';
import type { AIService } from './aiService';
import { AIServiceError, AIErrorType } from './aiService';

class GeminiService implements AIService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor(apiKey: string) {
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.5, // Lower temperature for more consistent responses
      }
    });
  }

  async generateInitialGreeting(topicId: string = 'fraction-division-by-whole-numbers'): Promise<string> {
    try {
      const prompt = promptResolver.resolveInitialGreeting({
        topicId: topicId as any
      });
      const result = await this.model.generateContent(prompt);
      const text = result.response.text().trim();

      if (!text) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty greeting response from Gemini API');
      }

      return text;
    } catch (error) {
      console.error('Error generating greeting:', error);
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
      const result = await this.model.generateContent(prompt);
      const text = result.response.text().trim();

      if (!text) {
        return `🎉 Congratulations! You've mastered fraction division with a score of ${finalScore.toFixed(2)}/1.00! You completed ${problemsCompleted} problems and showed excellent understanding. Great job - you're ready for more advanced math topics! 🌟`;
      }

      return text;
    } catch (error) {
      console.error('Error generating celebration:', error);
      throw AIServiceError.fromHttpError(error);
    }
  }

  async generateQuestion(problemType: number, topicId: string = 'fraction-division-by-whole-numbers'): Promise<string> {
    const prompt = promptResolver.resolveQuestionGeneration({
      topicId: topicId as any,
      currentProblemType: problemType
    });

    try {
      const result = await this.model.generateContent(prompt);
      let text = result.response.text().trim();

      // Debug logging
      console.log('Question generation debug:');
      console.log('Raw response:', text);
      console.log('Response length:', text.length);
      console.log('Ends with question mark:', text.endsWith('?'));

      if (!text) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty question response from Gemini API');
      }

      // Check if response seems truncated (doesn't end with ? or proper punctuation)
      if (!text.endsWith('?') && !text.endsWith('.') && !text.endsWith('!')) {
        console.warn('Response may be truncated, retrying...');
        // Retry once
        const retryResult = await this.model.generateContent(prompt);
        const retryText = retryResult.response.text().trim();
        if (retryText && retryText.length > text.length) {
          text = retryText;
          console.log('Retry successful, new text:', text);
        }
      }

      return text;
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
    const historyText = recentHistory
      .map(m => `${m.role === 'tutor' ? 'Tutor' : 'Student'}: ${m.content}`)
      .join('\n');

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

    let result;
    try {
      console.log('Calling Gemini API for conversation...');
      result = await this.model.generateContent(prompt);
      console.log('API call completed, result:', result);

      const responseText = result.response.text();
      console.log('Raw conversation response:', responseText);
      console.log('Response type:', typeof responseText);
      console.log('Response length:', responseText ? responseText.length : 0);

      // Check if response is empty
      if (!responseText || !responseText.trim()) {
        console.error('Empty response from Gemini API for conversation');
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

      // Clean response text and try to extract JSON
      let cleanedText = responseText.trim();

      // Remove markdown code blocks if present
      if (cleanedText.startsWith('```json')) {
        cleanedText = cleanedText.replace(/```json\s*/, '').replace(/\s*```$/, '');
      } else if (cleanedText.startsWith('```')) {
        cleanedText = cleanedText.replace(/```\s*/, '').replace(/\s*```$/, '');
      }

      // Simple approach: just return the response, let AI handle all logic
      return {
        response: cleanedText || "I'm having trouble understanding. Can you try again?",
        metadata: {
          detectedUnderstanding: "partial" as const,
          suggestedDifficulty: "same" as const,
          conceptsCovered: []
        }
      };
    } catch (error) {
      console.error('Gemini API error:', error);
      console.error('Raw response:', result?.response?.text?.());

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

// NEW: Sequential Agent Architecture Methods

  async evaluateAndInstruct(
    studentResponse: string,
    recentHistory: Message[],
    problemState: ProblemState,
    topicId: string
  ): Promise<EvaluatorInstruction> {
    const historyText = recentHistory
      .map(m => `${m.role === 'tutor' ? 'Tutor' : 'Student'}: ${m.content}`)
      .join('\n');

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
      const result = await this.model.generateContent(prompt);
      const responseText = result.response.text().trim();

      console.log('Evaluator agent raw response:', responseText);

      // Clean and parse JSON response
      let cleanedText = responseText;
      if (cleanedText.startsWith('```json')) {
        cleanedText = cleanedText.replace(/```json\s*/, '').replace(/\s*```$/, '');
      } else if (cleanedText.startsWith('```')) {
        cleanedText = cleanedText.replace(/```\s*/, '').replace(/\s*```$/, '');
      }

      const evaluation = JSON.parse(cleanedText);
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
    const historyText = recentHistory
      .map(m => `${m.role === 'tutor' ? 'Tutor' : 'Student'}: ${m.content}`)
      .join('\n');

    let prompt: string;

if (instruction.action === "NEW_PROBLEM") {
      // For new problems, use the question generation prompt with context
      prompt = promptResolver.resolveQuestionGeneration({
        topicId: topicId as any,
        currentProblemType: currentProblemType,
        recentHistory: historyText,
        evaluatorReasoning: instruction.reasoning
      });
    } else {
      // For all other actions, use the tutor agent prompt
      prompt = promptResolver.resolveTutorAgent({
        topicId: topicId as any,
        evaluatorInstruction: JSON.stringify(instruction),
        recentHistory: historyText,
        studentResponse,
        currentProblemType,
        hintLevel: instruction.hintLevel
      });
    }

    console.log('=== TUTOR AGENT DEBUG ===');
    console.log('Instruction:', instruction);
    console.log('Action:', instruction.action);
    console.log('=========================');

    try {
      const result = await this.model.generateContent(prompt);
      const responseText = result.response.text().trim();

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

// LEGACY: Keep for backward compatibility
  async evaluateAnswer(
    studentResponse: string,
    _tutorResponse: string,
    recentHistory: Message[],
    currentProblemType: number,
    topicId: string
  ): Promise<AnswerEvaluation> {
    const historyText = recentHistory
      .map(m => `${m.role === 'tutor' ? 'Tutor' : 'Student'}: ${m.content}`)
      .join('\n');

const prompt = promptResolver.resolveAnswerEvaluation({
      topicId: topicId as any,
      currentProblemType: currentProblemType,
      recentHistory: historyText,
      studentResponse
    });

    console.log('=== ANSWER EVALUATOR DEBUG ===');
    console.log('Recent history:', historyText);
    console.log('Topic ID:', topicId);
    console.log('Evaluating answer for:', studentResponse);
    console.log('Current difficulty:', currentDifficulty);
    console.log('=================================');

    try {
      const result = await this.model.generateContent(prompt);
      const responseText = result.response.text().trim();

      console.log('Answer evaluator raw response:', responseText);

      // Clean and parse JSON response
      let cleanedText = responseText;
      if (cleanedText.startsWith('```json')) {
        cleanedText = cleanedText.replace(/```json\s*/, '').replace(/\s*```$/, '');
      } else if (cleanedText.startsWith('```')) {
        cleanedText = cleanedText.replace(/```\s*/, '').replace(/\s*```$/, '');
      }

      const evaluation = JSON.parse(cleanedText);
      console.log('Parsed answer evaluation:', evaluation);

      return evaluation;
    } catch (error) {
      console.error('Answer Evaluator error:', error);

      // Return safe fallback evaluation
      return {
        answerCorrect: false,
        pointsEarned: 0,
        hintsUsed: 0,
        answerType: "intermediate" as const,
        isMainProblemSolved: false
      };
    }
  }

  /**
   * Extract visualization data from problem text using LLM
   * Takes a problem and returns structured data for visualization components
   */
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
      const result = await this.model.generateContent(prompt);
      const responseText = result.response.text().trim();

      console.log('Visualization extraction raw response:', responseText);

      if (!responseText) {
        console.warn('Empty response from visualization extraction');
        return null;
      }

      // Clean and parse JSON response
      let cleanedText = responseText;
      if (cleanedText.startsWith('```json')) {
        cleanedText = cleanedText.replace(/```json\s*/, '').replace(/\s*```$/, '');
      } else if (cleanedText.startsWith('```')) {
        cleanedText = cleanedText.replace(/```\s*/, '').replace(/\s*```$/, '');
      }

      const visualizationData = JSON.parse(cleanedText);
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

  /**
   * Extract visualization data for each step of a step-by-step solution
   * Parses the tutorResponse to identify steps and extracts visualization for each configured step
   * Now uses smart context detection to select appropriate visualization!
   */
  async extractStepByStepVisualizations(
    tutorResponse: string,
    problemText: string,
    problemType: number,
    topicId: string
  ): Promise<any> {
    try {
      console.log('=== AI-DRIVEN VISUALIZATION SELECTION ===');
      console.log('Problem text:', problemText);
      console.log('Letting AI decide: bar-division or circular-division');

      // Get step visualization config from topic
      const { P6_MATH_FRACTIONS } = await import('../prompts/topics/P6-Math-Fractions');
      const config = P6_MATH_FRACTIONS[topicId as keyof typeof P6_MATH_FRACTIONS];

      if (!config || !('STEP_VISUALIZATION_CONFIG' in config)) {
        console.warn('No step visualization config found for topic:', topicId);
        return null;
      }

      const stepConfigs = (config as any).STEP_VISUALIZATION_CONFIG[problemType];
      if (!stepConfigs || !Array.isArray(stepConfigs)) {
        console.warn('No step configs found for problem type:', problemType);
        return null;
      }

      console.log('=== UNIFIED STEP PARSING & VISUALIZATION EXTRACTION ===');
      console.log('Tutor response:', tutorResponse);
      console.log('Step configs:', stepConfigs);

      // Use centralized prompt from prompt resolver - AI will decide visualization type
      const unifiedPrompt = promptResolver.resolveStepByStepVisualizationExtraction({
        topicId: topicId as any,
        tutorResponse,
        problemText,
        stepConfigs
      });

      console.log('Sending unified extraction prompt to LLM...');

      const result = await this.model.generateContent(unifiedPrompt);
      const responseText = result.response.text().trim();

      console.log('Unified extraction response:', responseText);

      // Clean and parse JSON response
      let cleanedText = responseText;
      if (cleanedText.startsWith('```json')) {
        cleanedText = cleanedText.replace(/```json\s*/, '').replace(/\s*```$/, '');
      } else if (cleanedText.startsWith('```')) {
        cleanedText = cleanedText.replace(/```\s*/, '').replace(/\s*```$/, '');
      }

      const parsedResponse = JSON.parse(cleanedText);
      console.log('Final unified structured data:', parsedResponse);

      // IMPORTANT: Inject the correct theme based on the context field from AI response
      // This ensures colors are always correct regardless of what AI generates
      const { getThemeForContext } = await import('../utils/visualizationRegistry');

      // Find steps with visualization and inject the correct theme based on context
      if (parsedResponse.steps && Array.isArray(parsedResponse.steps)) {
        parsedResponse.steps.forEach((step: any) => {
          if (step.visualizationData) {
            const contextFromAI = step.visualizationData.context || step.visualizationData.problemData?.context;

            if (contextFromAI) {
              // Map the context string to a VisualizationContext type
              const theme = getThemeForContext(contextFromAI as any);
              step.visualizationData.theme = theme;

              console.log('Injected theme based on context:', {
                visualizationId: step.visualizationData.visualizationId,
                context: contextFromAI,
                theme: theme
              });
            }
          }
        });
      }

      return parsedResponse;

    } catch (error) {
      console.error('Error in unified step parsing and visualization extraction:', error);
      return null;
    }
  }

  /**
   * Visualization Agent: Generate complete solution with visualization data
   * Single LLM call replaces: Tutor Agent + extractStepByStepVisualizations
   */
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
      const historyText = recentHistory
        .map(m => `${m.role === 'tutor' ? 'Tutor' : 'Student'}: ${m.content}`)
        .join('\n');

      // Get the prompt for the visualization agent with full context
      const prompt = promptResolver.resolveVisualizationAgent({
        topicId: topicId as any,
        problemText,
        currentProblemType: problemType,
        recentHistory: historyText,
        studentResponse,
        evaluatorReasoning
      });

      console.log('Calling Gemini API with Visualization Agent prompt...');

      const result = await this.model.generateContent(prompt);
      const responseText = result.response.text().trim();

      console.log('Visualization Agent raw response:', responseText);

      // Clean and parse JSON response - handle markdown code fences anywhere in response
      let cleanedText = responseText;

      // Try to extract JSON from markdown code fences (```json ... ``` or ``` ... ```)
      const jsonFenceMatch = cleanedText.match(/```json\s*\n?([\s\S]*?)\n?```/);
      const genericFenceMatch = cleanedText.match(/```\s*\n?([\s\S]*?)\n?```/);

      if (jsonFenceMatch) {
        cleanedText = jsonFenceMatch[1].trim();
      } else if (genericFenceMatch) {
        cleanedText = genericFenceMatch[1].trim();
      }

      // Additional cleanup: remove any leading/trailing text that's not JSON
      cleanedText = cleanedText.trim();

      // Find first { and last } to extract just the JSON object
      const firstBrace = cleanedText.indexOf('{');
      const lastBrace = cleanedText.lastIndexOf('}');
      if (firstBrace !== -1 && lastBrace !== -1 && firstBrace < lastBrace) {
        cleanedText = cleanedText.substring(firstBrace, lastBrace + 1);
      }

      const parsedResponse = JSON.parse(cleanedText);
      console.log('Parsed visualization solution data:', parsedResponse);

      // Inject the correct theme based on context from AI response
      const { getThemeForContext } = await import('../utils/visualizationRegistry');

      if (parsedResponse.steps && Array.isArray(parsedResponse.steps)) {
        parsedResponse.steps.forEach((step: any) => {
          if (step.visualizationData) {
            const contextFromAI = step.visualizationData.context || step.visualizationData.problemData?.context;

            if (contextFromAI) {
              const theme = getThemeForContext(contextFromAI as any);
              step.visualizationData.theme = theme;

              console.log('Injected theme for Visualization Agent:', {
                visualizationId: step.visualizationData.visualizationId,
                context: contextFromAI,
                theme: theme
              });
            }
          }
        });
      }

      console.log('=== VISUALIZATION AGENT COMPLETE ===');
      return parsedResponse;

    } catch (error) {
      console.error('Error in Visualization Agent:', error);
      throw AIServiceError.fromHttpError(error);
    }
  }
}

export default GeminiService;