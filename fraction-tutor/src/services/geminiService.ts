import { GoogleGenerativeAI } from '@google/generative-ai';
import type { GeminiResponse, Message, AnswerEvaluation, EvaluatorInstruction, ProblemState } from '../types/types';
import type { VisualizationData } from '../types/visualization';
import { promptResolver } from '../prompts/promptResolver';

class GeminiService {
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
    const prompt = promptResolver.resolveInitialGreeting({
      topicId: topicId as any
    });
    const result = await this.model.generateContent(prompt);
    const text = result.response.text().trim();

    if (!text) {
      throw new Error('Empty greeting response from Gemini API');
    }

    return text;
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
      return `🎉 Amazing work! You've completed the fraction division subtopic with a score of ${finalScore.toFixed(2)}/1.00! You solved ${problemsCompleted} problems and demonstrated excellent understanding. Keep up the great work! 🌟`;
    }
  }

  async generateQuestion(difficulty: 'easy' | 'medium' | 'hard', topicId: string = 'fraction-division-by-whole-numbers'): Promise<string> {
    const prompt = promptResolver.resolveQuestionGeneration({
      topicId: topicId as any,
      currentDifficulty: difficulty
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
        throw new Error('Empty question response from Gemini API');
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
      throw error;
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

    const prompt = promptResolver.resolveConversationResponse({
      topicId: topicId as any,
      currentDifficulty,
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
      currentDifficulty: problemState.difficulty,
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

      // Return safe fallback instruction
      return {
        answerCorrect: false,
        pointsEarned: 0,
        isMainProblemSolved: false,
        action: "GIVE_HINT",
        hintLevel: Math.min(problemState.hintsGivenForCurrentProblem + 1, 3) as 1 | 2 | 3,
        reasoning: "Fallback instruction due to API error"
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

    console.log('=== TUTOR AGENT DEBUG ===');
    console.log('Instruction:', instruction);
    console.log('Action:', instruction.action);
    console.log('=========================');

    try {
      const result = await this.model.generateContent(prompt);
      const responseText = result.response.text().trim();

      console.log('Tutor agent raw response:', responseText);

      if (!responseText) {
        throw new Error('Empty response from Tutor Agent');
      }

      return responseText;
    } catch (error) {
      console.error('Tutor Agent error:', error);

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

// LEGACY: Keep for backward compatibility
  async evaluateAnswer(
    studentResponse: string,
    _tutorResponse: string,
    recentHistory: Message[],
    currentDifficulty: string,
    topicId: string
  ): Promise<AnswerEvaluation> {
    const historyText = recentHistory
      .map(m => `${m.role === 'tutor' ? 'Tutor' : 'Student'}: ${m.content}`)
      .join('\n');

const prompt = promptResolver.resolveAnswerEvaluation({
      topicId: topicId as any,
      currentDifficulty: currentDifficulty as 'easy' | 'medium' | 'hard',
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
}

export default GeminiService;