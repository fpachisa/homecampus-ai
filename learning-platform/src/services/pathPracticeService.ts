/**
 * Path Practice Service
 *
 * Handles problem generation and evaluation for path-based practice.
 * Uses AI to generate contextual problems based on node descriptors.
 */

import type { PathNode, PathProblem, EvaluationWithHistory, AttemptHistory } from '../types/practice';
import FallbackAIService from './fallbackAIService';
import { subtopicContentLoader } from './subtopicContentLoader';
import {
  generatePracticeProblemsPrompt,
  evaluatePracticeAnswerWithHistoryPrompt,
  generatePracticeHintPrompt,
  generatePracticeSolutionPrompt,
  extractJSON
} from '../prompts/practicePrompts';

class PathPracticeService {
  private aiService: FallbackAIService;

  constructor() {
    // Initialize AI service with API keys from environment
    const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const claudeKey = import.meta.env.VITE_CLAUDE_API_KEY;

    if (!geminiKey) {
      throw new Error('VITE_GEMINI_API_KEY is required for practice mode');
    }

    this.aiService = new FallbackAIService(geminiKey, claudeKey);
  }

  /**
   * Call AI provider directly without topicId-based prompt resolution
   * This is used for practice mode which has its own custom prompts
   */
  private async callAIDirectly(prompt: string): Promise<string> {
    return this.aiService.generate(prompt);
  }

  /**
   * Generate problems for a node using AI
   * Enhanced with Socratic subtopic content (learning objectives, formulas, visual tools)
   */
  async generateNodeProblems(node: PathNode, count: number): Promise<PathProblem[]> {
    try {
      // Load subtopic content for all subtopics in the node descriptor
      const subtopicIds = node.descriptor.subtopics.map(st => st.id);
      const subtopicContents = subtopicContentLoader.getMultipleSubtopicContents(subtopicIds);

      if (subtopicContents.length === 0) {
        console.warn('No subtopic content found for:', subtopicIds);
      }

      // Generate enhanced prompt with subtopic content
      const prompt = generatePracticeProblemsPrompt(node, count, subtopicContents);

      console.log('=== PRACTICE: Generate Problems ===');
      console.log('Node:', node.id, node.title);
      console.log('Count:', count);
      console.log('Prompt:', prompt);

      // Call AI provider directly instead of using generateResponse (which requires valid topicId)
      const responseText = await this.callAIDirectly(prompt);

      console.log('Response:', responseText);
      console.log('===================================');

      // Parse JSON response
      const data = extractJSON(responseText);

      if (!data.problems || !Array.isArray(data.problems)) {
        throw new Error('Invalid response format from AI');
      }

      // Convert to PathProblem format
      const problems: PathProblem[] = data.problems.map((p: any, index: number) => ({
        id: `${node.id}-problem-${index + 1}`,
        nodeId: node.id,
        problemText: p.problemText,
        correctAnswer: p.correctAnswer,
        context: p.context,
        subtopicId: p.subtopicId || node.descriptor.subtopics[0].id,
        difficulty: node.descriptor.difficulty,
        generatedAt: new Date(),
        // Include mathTool if provided by AI
        mathTool: p.mathTool ? {
          toolName: p.mathTool.toolName,
          parameters: p.mathTool.parameters,
          caption: p.mathTool.caption
        } : undefined,
      }));

      return problems;
    } catch (error) {
      console.error('Failed to generate problems with AI:', error);
      // Don't fallback - let the error propagate to show user-friendly message
      throw new Error('Failed to generate practice problems. Please try again later.');
    }
  }

  /**
   * Evaluate student answer using AI
   * Calls AI provider directly with custom prompt (not using topicId-based resolution)
   */
  async evaluateAnswer(
    problem: PathProblem,
    studentAnswer: string
  ): Promise<{
    isCorrect: boolean;
    feedback: string;
    explanation?: string;
  }> {
    try {
      const prompt = evaluatePracticeAnswerPrompt(
        problem.problemText,
        problem.correctAnswer,
        studentAnswer
      );

      console.log('=== PRACTICE: Evaluate Answer ===');
      console.log('Problem:', problem.problemText);
      console.log('Correct Answer:', problem.correctAnswer);
      console.log('Student Answer:', studentAnswer);
      console.log('Prompt:', prompt);

      // Call AI provider directly instead of using generateResponse (which requires valid topicId)
      const responseText = await this.callAIDirectly(prompt);

      console.log('Response:', responseText);
      console.log('==================================');

      const data = extractJSON(responseText);

      return {
        isCorrect: data.isCorrect === true,
        feedback: data.feedback || (data.isCorrect ? '✓ Correct!' : 'Not quite right.'),
        explanation: data.explanation
      };
    } catch (error) {
      console.error('Failed to evaluate answer with AI:', error);
      throw new Error('Failed to evaluate your answer. Please try again.');
    }
  }

  /**
   * Enhanced evaluation with attempt history for progressive hints
   * Provides both avatar speech and detailed hints based on attempt number
   */
  async evaluateAnswerWithHistory(
    problem: PathProblem,
    studentAnswer: string,
    attemptNumber: number,
    previousAttempts: Array<{ answer: string; hint: string }>
  ): Promise<EvaluationWithHistory> {
    try {
      const prompt = evaluatePracticeAnswerWithHistoryPrompt(
        problem.problemText,
        problem.correctAnswer,
        studentAnswer,
        attemptNumber,
        previousAttempts
      );

      console.log('=== PRACTICE: Evaluate with History ===');
      console.log('Problem:', problem.problemText);
      console.log('Attempt Number:', attemptNumber);
      console.log('Previous Attempts:', previousAttempts.length);
      console.log('Student Answer:', studentAnswer);

      // Call AI provider directly
      const responseText = await this.callAIDirectly(prompt);

      console.log('Response:', responseText);
      console.log('========================================');

      const data = extractJSON(responseText);

      // Ensure all required fields are present
      return {
        isCorrect: data.isCorrect === true,
        avatarSpeech: data.avatarSpeech || (data.isCorrect ?
          'Excellent work! You got it!' :
          `Let's try again. ${attemptNumber < 3 ? 'Take another look.' : 'One more try.'}`),
        hint: data.hint || 'Think about the problem step by step.',
        hintLevel: data.hintLevel || attemptNumber
      };
    } catch (error) {
      console.error('Failed to evaluate answer with history:', error);
      // Fallback response
      return {
        isCorrect: false,
        avatarSpeech: 'Let me help you with this.',
        hint: 'Take another look at the problem and try breaking it down into smaller steps.',
        hintLevel: attemptNumber
      };
    }
  }

  /**
   * Generate hint using AI
   */
  async generateHint(problem: PathProblem, hintLevel: number): Promise<string> {
    try {
      const prompt = generatePracticeHintPrompt(problem.problemText, hintLevel);

      console.log('=== PRACTICE: Generate Hint ===');
      console.log('Problem:', problem.problemText);
      console.log('Hint Level:', hintLevel);
      console.log('Prompt:', prompt);

      // Call AI provider directly instead of using generateResponse (which requires valid topicId)
      const responseText = await this.callAIDirectly(prompt);

      console.log('Response:', responseText);
      console.log('================================');

      const data = extractJSON(responseText);

      return data.hint || '💡 Try breaking down the problem step by step.';
    } catch (error) {
      console.error('Failed to generate hint with AI:', error);
      throw new Error('Failed to generate hint. Please try again.');
    }
  }

  /**
   * Get solution with steps using AI
   */
  async getSolution(problem: PathProblem): Promise<{
    steps: string[];
    finalAnswer: string;
  }> {
    try {
      const prompt = generatePracticeSolutionPrompt(
        problem.problemText,
        problem.correctAnswer
      );

      console.log('=== PRACTICE: Get Solution ===');
      console.log('Problem:', problem.problemText);
      console.log('Correct Answer:', problem.correctAnswer);
      console.log('Prompt:', prompt);

      // Call AI provider directly instead of using generateResponse (which requires valid topicId)
      const responseText = await this.callAIDirectly(prompt);

      console.log('Response:', responseText);
      console.log('===============================');

      const data = extractJSON(responseText);

      return {
        steps: data.steps || ['Solution not available'],
        finalAnswer: problem.correctAnswer
      };
    } catch (error) {
      console.error('Failed to generate solution with AI:', error);
      throw new Error('Failed to generate solution. Please try again.');
    }
  }
}

export const pathPracticeService = new PathPracticeService();
