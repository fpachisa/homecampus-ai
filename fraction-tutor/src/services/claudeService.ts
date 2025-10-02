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
    problemType: number,
    topicId: string = 'fraction-division-by-whole-numbers'
  ): Promise<string> {
    try {
      const prompt = promptResolver.resolveQuestionGeneration({
        topicId: topicId as any,
        currentProblemType: problemType
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

    try {
      const prompt = promptResolver.resolveConversationResponse({
        topicId: topicId as any,
        currentProblemType,
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
      currentProblemType: problemState.problemType,
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
    problemType: number,
    topicId: string
  ): Promise<any> {
    try {
      // **NEW**: Use visualization selector to auto-detect context from problem text
      const { selectVisualization } = await import('../utils/visualizationSelector');
      const { visualizationId: detectedVisualizationId, context, confidence } = selectVisualization(problemText);

      console.log('=== CONTEXT-AWARE VISUALIZATION DETECTION (Claude) ===');
      console.log('Problem text:', problemText);
      console.log('Detected context:', context, 'with confidence:', confidence);
      console.log('Selected visualization:', detectedVisualizationId);

      // Get step visualization config from topic
      const { P6_MATH_FRACTIONS } = await import('../prompts/topics/P6-Math-Fractions');
      const config = P6_MATH_FRACTIONS[topicId as keyof typeof P6_MATH_FRACTIONS];

      if (!config || !('STEP_VISUALIZATION_CONFIG' in config)) {
        console.warn('No step visualization config found for topic:', topicId);
        return null;
      }

      let stepConfigs = (config as any).STEP_VISUALIZATION_CONFIG[problemType];
      if (!stepConfigs || !Array.isArray(stepConfigs)) {
        console.warn('No step configs found for problem type:', problemType);
        return null;
      }

      // **NEW**: Override all stepConfig visualizationIds with the detected one
      stepConfigs = stepConfigs.map(stepConfig => ({
        ...stepConfig,
        visualizationId: detectedVisualizationId
      }));

      console.log('=== UNIFIED STEP PARSING & VISUALIZATION EXTRACTION (Claude) ===');
      console.log('Tutor response:', tutorResponse);
      console.log('Overridden step configs with detected visualization:', stepConfigs);

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
      console.log('=== VISUALIZATION AGENT START (Claude) ===');
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

      console.log('Calling Claude API with Visualization Agent prompt...');

      const result = await this.anthropic.messages.create({
        model: this.model,
        max_tokens: 4096,
        temperature: 0.5,
        messages: [{
          role: 'user',
          content: prompt
        }]
      });

      const responseText = result.content[0].type === 'text'
        ? result.content[0].text.trim()
        : '';

      console.log('Visualization Agent raw response (Claude):', responseText);

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
      console.log('Parsed visualization solution data (Claude):', parsedResponse);

      // Inject the correct theme based on context from AI response
      const { getThemeForContext } = await import('../utils/visualizationRegistry');

      if (parsedResponse.steps && Array.isArray(parsedResponse.steps)) {
        parsedResponse.steps.forEach((step: any) => {
          if (step.visualizationData) {
            const contextFromAI = step.visualizationData.context || step.visualizationData.problemData?.context;

            if (contextFromAI) {
              const theme = getThemeForContext(contextFromAI as any);
              step.visualizationData.theme = theme;

              console.log('Injected theme for Visualization Agent (Claude):', {
                visualizationId: step.visualizationData.visualizationId,
                context: contextFromAI,
                theme: theme
              });
            }
          }
        });
      }

      console.log('=== VISUALIZATION AGENT COMPLETE (Claude) ===');
      return parsedResponse;

    } catch (error) {
      console.error('Error in Visualization Agent (Claude):', error);
      throw AIServiceError.fromHttpError(error);
    }
  }
}

export default ClaudeService;