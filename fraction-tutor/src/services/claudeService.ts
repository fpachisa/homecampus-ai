import Anthropic from '@anthropic-ai/sdk';
import type { GeminiResponse, Message, EvaluatorInstruction, ProblemState } from '../types/types';
import type { VisualizationData } from '../types/visualization';
import { promptResolver } from '../prompts/promptResolver';
import type { AIService } from './aiService';
import { AIServiceError, AIErrorType } from './aiService';

class ClaudeService implements AIService {
  private anthropic: Anthropic;

  constructor(apiKey: string) {
    this.anthropic = new Anthropic({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true // For browser usage
    });
  }

  private async generateContent(prompt: string): Promise<string> {
    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2000,
        temperature: 0.5,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      });

      // Extract text content from Claude response
      const content = response.content[0];
      if (content.type === 'text') {
        return content.text.trim();
      }

      throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Unexpected response format from Claude');
    } catch (error: any) {
      console.error('Claude API error:', error);

      // Map Claude-specific errors
      if (error.status === 429) {
        throw new AIServiceError(AIErrorType.RATE_LIMIT, error, true, error.message);
      }
      if (error.status === 503 || error.status === 502) {
        throw new AIServiceError(AIErrorType.SERVICE_UNAVAILABLE, error, true, error.message);
      }
      if (error.status === 401 || error.status === 403) {
        throw new AIServiceError(AIErrorType.AUTHENTICATION, error, false, error.message);
      }

      throw AIServiceError.fromHttpError(error);
    }
  }

  async generateInitialGreeting(topicId: string = 'fraction-division-by-whole-numbers'): Promise<string> {
    try {
      const prompt = promptResolver.resolveInitialGreeting({
        topicId: topicId as any
      });

      const text = await this.generateContent(prompt);

      if (!text) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty greeting response from Claude API');
      }

      return text;
    } catch (error) {
      if (error instanceof AIServiceError) {
        throw error;
      }
      console.error('Error generating greeting with Claude:', error);
      throw AIServiceError.fromHttpError(error);
    }
  }

  async generateCelebration(
    finalScore: number,
    problemsCompleted: number,
    sessionDuration: number,
    topicId: string = 'fraction-division-by-whole-numbers'
  ): Promise<string> {
    try {
      const prompt = promptResolver.resolveCelebration({
        topicId: topicId as any,
        finalScore,
        problemsCompleted,
        sessionDuration
      });

      const text = await this.generateContent(prompt);

      if (!text) {
        return `🎉 Congratulations! You've mastered fraction division with a score of ${finalScore.toFixed(2)}/1.00! You completed ${problemsCompleted} problems and showed excellent understanding. Great job - you're ready for more advanced math topics! 🌟`;
      }

      return text;
    } catch (error) {
      console.error('Error generating celebration with Claude:', error);
      return `🎉 Amazing work! You've completed the fraction division subtopic with a score of ${finalScore.toFixed(2)}/1.00! You solved ${problemsCompleted} problems and demonstrated excellent understanding. Keep up the great work! 🌟`;
    }
  }

  async generateQuestion(
    difficulty: 'easy' | 'medium' | 'hard',
    topicId: string = 'fraction-division-by-whole-numbers'
  ): Promise<string> {
    try {
      const prompt = promptResolver.resolveQuestionGeneration({
        topicId: topicId as any,
        currentDifficulty: difficulty
      });

      const text = await this.generateContent(prompt);

      if (!text) {
        throw new AIServiceError(AIErrorType.UNKNOWN, null, false, 'Empty question response from Claude API');
      }

      return text;
    } catch (error) {
      if (error instanceof AIServiceError) {
        throw error;
      }
      console.error('Error generating question with Claude:', error);
      throw AIServiceError.fromHttpError(error);
    }
  }

  async generateResponse(
    studentResponse: string,
    recentHistory: Message[],
    currentDifficulty: 'easy' | 'medium' | 'hard',
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

    try {
      const prompt = promptResolver.resolveConversationResponse({
        topicId: topicId as any,
        currentDifficulty,
        recentHistory: historyText,
        studentResponse
      });

      const responseText = await this.generateContent(prompt);

      return {
        response: responseText || "I'm having trouble understanding. Can you try again?",
        metadata: {
          detectedUnderstanding: "partial" as const,
          suggestedDifficulty: "same" as const,
          conceptsCovered: []
        }
      };
    } catch (error) {
      console.error('Claude conversation error:', error);
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
    const historyText = recentHistory
      .map(m => `${m.role === 'tutor' ? 'Tutor' : 'Student'}: ${m.content}`)
      .join('\n');

    const prompt = promptResolver.resolveEvaluatorAgent({
      topicId: topicId as any,
      currentDifficulty: problemState.difficulty,
      recentHistory: historyText,
      studentResponse,
      currentProblemId: problemState.currentProblemId,
      hintsGiven: problemState.hintsGivenForCurrentProblem,
      studentAttempts: problemState.attemptsForCurrentProblem,
      currentProblemText: problemState.currentProblemText
    });

    try {
      const responseText = await this.generateContent(prompt);

      // Clean and parse JSON response
      let cleanedText = responseText;
      if (cleanedText.startsWith('```json')) {
        cleanedText = cleanedText.replace(/```json\s*/, '').replace(/\s*```$/, '');
      } else if (cleanedText.startsWith('```')) {
        cleanedText = cleanedText.replace(/```\s*/, '').replace(/\s*```$/, '');
      }

      const evaluation = JSON.parse(cleanedText);

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
      console.error('Claude Evaluator Agent error:', error);

      // Return safe fallback instruction
      return {
        answerCorrect: false,
        pointsEarned: 0,
        isMainProblemSolved: false,
        action: "GIVE_HINT",
        hintLevel: Math.min(problemState.hintsGivenForCurrentProblem + 1, 3) as 1 | 2 | 3,
        reasoning: "Fallback instruction due to Claude API error"
      };
    }
  }

  async executeInstruction(
    instruction: EvaluatorInstruction,
    recentHistory: Message[],
    studentResponse: string,
    currentDifficulty: 'easy' | 'medium' | 'hard',
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
        currentDifficulty: currentDifficulty,
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
        currentDifficulty,
        hintLevel: instruction.hintLevel
      });
    }

    try {
      const responseText = await this.generateContent(prompt);

      if (!responseText) {
        throw new Error('Empty response from Claude Tutor Agent');
      }

      return responseText;
    } catch (error) {
      console.error('Claude Tutor Agent error:', error);

      // Return fallback response based on instruction
      switch (instruction.action) {
        case "GIVE_HINT":
          return `Let me give you a hint: Think about the steps you need to solve this problem. Can you try again?`;
        case "GIVE_SOLUTION":
          return `Let me show you the complete solution step by step, then we'll try a new problem.`;
        case "NEW_PROBLEM":
          return `Great job! Let me give you a new problem to solve.`;
        case "CELEBRATE":
          return `🎉 Congratulations! You've completed this subtopic! Amazing work!`;
        default:
          return `I'm having some technical difficulties. Please try again!`;
      }
    }
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

    try {
      const responseText = await this.generateContent(prompt);

      if (!responseText) {
        console.warn('Empty response from Claude visualization extraction');
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

      // Validate the structure
      if (!visualizationData.problemData || !visualizationData.stages || !visualizationData.contextualLabels) {
        console.warn('Invalid visualization data structure from Claude:', visualizationData);
        return null;
      }

      // Ensure visualization ID is set
      visualizationData.visualizationId = visualizationId;
      visualizationData.trigger = trigger;

      return visualizationData as VisualizationData;
    } catch (error) {
      console.error('Claude visualization extraction error:', error);
      return null;
    }
  }

  async extractStepByStepVisualizations(
    tutorResponse: string,
    problemText: string,
    difficulty: 'easy' | 'medium' | 'hard',
    topicId: string
  ): Promise<any> {
    try {
      // Get step visualization config from topic
      const { P6_MATH_FRACTIONS } = await import('../prompts/topics/P6-Math-Fractions');
      const config = P6_MATH_FRACTIONS[topicId as keyof typeof P6_MATH_FRACTIONS];

      if (!config || !('STEP_VISUALIZATION_CONFIG' in config)) {
        console.warn('No step visualization config found for topic:', topicId);
        return null;
      }

      const stepConfigs = (config as any).STEP_VISUALIZATION_CONFIG[difficulty];
      if (!stepConfigs || !Array.isArray(stepConfigs)) {
        console.warn('No step configs found for difficulty:', difficulty);
        return null;
      }

      console.log('=== UNIFIED STEP PARSING & VISUALIZATION EXTRACTION (Claude) ===');
      console.log('Tutor response:', tutorResponse);
      console.log('Problem text:', problemText);
      console.log('Step configs:', stepConfigs);

      // Use centralized prompt from prompt resolver
      const unifiedPrompt = promptResolver.resolveStepByStepVisualizationExtraction({
        topicId: topicId as any,
        tutorResponse,
        problemText,
        stepConfigs
      });

      console.log('Sending unified extraction prompt to Claude...');

      const responseText = await this.generateContent(unifiedPrompt);

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

      return parsedResponse;

    } catch (error) {
      console.error('Error in unified step parsing and visualization extraction with Claude:', error);
      return null;
    }
  }
}

export default ClaudeService;