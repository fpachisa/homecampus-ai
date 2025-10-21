/**
 * Path Practice Service
 *
 * Handles problem generation and evaluation for path-based practice.
 * Uses AI to generate contextual problems based on node descriptors.
 */

import type { PathNode, PathProblem, EvaluationWithHistory, AttemptHistory, RelatedQuestionContext } from '../types/practice';
import FallbackAIService from './fallbackAIService';
import {
  generatePracticeProblemsPrompt,
  evaluatePracticeAnswerWithHistoryPrompt,
  generatePracticeSolutionPrompt,
  solvePreWrittenProblemPrompt,
  extractJSON
} from '../prompts/practicePrompts';
import { safeParseJSON, extractPracticeJSON } from './utils/responseParser';

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
   * Generate problems for a node - either AI-generated or pre-written
   * Checks node.descriptor.aiGeneratedQuestions flag to determine mode
   * Optional progress callback for pre-written questions
   */
  async generateNodeProblems(
    node: PathNode,
    count: number,
    onProgress?: (current: number, total: number) => void
  ): Promise<PathProblem[]> {
    // Check if this node uses pre-written questions
    if (node.descriptor.aiGeneratedQuestions === false) {
      if (!node.descriptor.preWrittenQuestions) {
        throw new Error(`Node ${node.id} has aiGeneratedQuestions=false but no preWrittenQuestions defined`);
      }
      return this.loadPreWrittenQuestions(node, onProgress);
    }

    // Default: AI-generated questions
    return this.generateProblemsWithAI(node, count);
  }

  /**
   * Load pre-written questions from node descriptor
   * Used for exam-style problems with pre-built diagrams
   */
  private async loadPreWrittenQuestions(
    node: PathNode,
    onProgress?: (current: number, total: number) => void
  ): Promise<PathProblem[]> {
    const questions = node.descriptor.preWrittenQuestions!;

    console.log('=== PRACTICE: Load Pre-Written Questions ===');
    console.log('Node:', node.id, node.title);
    console.log('Questions:', questions.length);
    console.log('=============================================');

    // Check if questions have pre-written answers
    const hasPreWrittenAnswers = questions.some(q => q.finalAnswer && q.stepByStepGuideline);
    const allHavePreWrittenAnswers = questions.every(q => q.finalAnswer && q.stepByStepGuideline);

    if (allHavePreWrittenAnswers) {
      console.log('✓ All questions have pre-written answers and solutions - skipping AI solving');
    } else if (hasPreWrittenAnswers) {
      console.log('⚠️ Some questions have pre-written answers, others will use AI solving');
    } else {
      console.log('🔄 No pre-written answers found - will use AI solving');
    }

    // Map questions to PathProblem format
    const problems: PathProblem[] = questions.map((q, index) => ({
      id: q.id,
      nodeId: node.id,
      problemText: q.problemText,
      correctAnswer: q.finalAnswer || '',  // Use pre-written answer if available
      context: 'exam-style',
      subtopicId: node.id,
      difficulty: node.descriptor.difficulty || 'easy',
      generatedAt: new Date(),
      mathTool: q.mathTool ? {
        toolName: q.mathTool.toolName,
        parameters: q.mathTool.parameters,
        caption: ''  // Caption not provided in pre-written questions
      } : undefined,  // Use mathTool if provided, otherwise rely on diagramSvg
      diagramSvg: q.diagramSvg,
      questionGroup: q.questionGroup,  // Preserve question group for multi-part questions
      solutionSteps: q.stepByStepGuideline || [],  // Use pre-written solution steps if available
      metadata: {
        isPreWritten: true,
        avatarIntro: q.avatarIntro,
        partNumber: index + 1,
        totalParts: questions.length
      }
    }));

    // Only calculate solutions for questions without pre-written answers
    const questionsNeedingSolutions = problems.filter(p => !p.correctAnswer || !p.solutionSteps?.length);

    if (questionsNeedingSolutions.length > 0) {
      console.log(`🔄 Calculating solutions for ${questionsNeedingSolutions.length} questions without pre-written answers...`);

      // Calculate solutions for all questions sequentially
      // This ensures later parts can reference earlier answers
      for (let i = 0; i < problems.length; i++) {
        const problem = problems[i];

        // Skip if already has pre-written answer and solution
        if (problem.correctAnswer && problem.solutionSteps && problem.solutionSteps.length > 0) {
          console.log(`  ✓ Using pre-written answer for ${problem.id}: ${problem.correctAnswer}`);
          continue;
        }

        // Report progress
        if (onProgress) {
          onProgress(i + 1, problems.length);
        }

        // Build context from previously solved parts
        const previousAnswers = problems.slice(0, i)
          .filter(p => p.correctAnswer) // Only include solved problems
          .map(p => ({
            problemText: p.problemText,
            answer: p.correctAnswer
          }));

        console.log(`  Solving problem ${i + 1}/${problems.length}: ${problem.id}`);

        try {
          // Calculate this problem's solution using AI
          const solution = await this.solvePreWrittenProblem(
            problem.problemText,
            previousAnswers.length > 0 ? previousAnswers : undefined
          );

          problem.correctAnswer = solution.correctAnswer;
          problem.solutionSteps = solution.solutionSteps;

          console.log(`  ✓ Solution: ${solution.correctAnswer}`);
        } catch (error) {
          console.error(`  ✗ Failed to solve problem ${problem.id}:`, error);
          // Leave correctAnswer empty - will be calculated on-demand during evaluation
          problem.correctAnswer = '';
          problem.solutionSteps = [];
        }
      }
    } else {
      console.log('✓ All questions have pre-written answers - no AI solving needed');
    }

    console.log('✓ All pre-written questions ready');
    console.log('=============================================');

    return problems;
  }

  /**
   * Solve a pre-written problem to get correct answer and solution steps
   * Used during initial loading of pre-written exam questions
   */
  private async solvePreWrittenProblem(
    problemText: string,
    previousAnswers?: Array<{ problemText: string; answer: string }>
  ): Promise<{ correctAnswer: string; solutionSteps: string[] }> {
    try {
      const prompt = solvePreWrittenProblemPrompt(problemText, previousAnswers);

      // Call AI provider directly
      const responseText = await this.callAIDirectly(prompt);

      // Use safe parser for solution responses
      const data = safeParseJSON(responseText, ['correctAnswer', 'steps'], {
        correctAnswer: '',
        steps: []
      });

      if (!data.correctAnswer || !data.steps || !Array.isArray(data.steps)) {
        throw new Error('Invalid solution format from AI');
      }

      return {
        correctAnswer: data.correctAnswer,
        solutionSteps: data.steps
      };
    } catch (error) {
      console.error('Failed to solve pre-written problem:', error);
      throw new Error('Failed to calculate solution for this problem');
    }
  }

  /**
   * Generate problems using AI (original logic)
   * Uses node descriptor with direct math tool configuration
   */
  private async generateProblemsWithAI(node: PathNode, count: number): Promise<PathProblem[]> {
    try {
      // Generate prompt using node descriptor directly
      const prompt = generatePracticeProblemsPrompt(node, count);

      console.log('=== PRACTICE: Generate Problems with AI ===');
      console.log('Node:', node.id, node.title);
      console.log('Count:', count);
      console.log('Prompt:', prompt);

      // Call AI provider directly instead of using generateResponse (which requires valid topicId)
      const responseText = await this.callAIDirectly(prompt);

      console.log('Response:', responseText);
      console.log('============================================');

      // Use safe parser for problem generation responses
      const data = safeParseJSON(responseText, ['problems'], {
        problems: []
      });

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
        subtopicId: node.id, // Use node ID as subtopic ID for now (field kept for backward compatibility)
        difficulty: node.descriptor.difficulty || 'easy', // Default to 'easy' if not specified
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
   * Enhanced evaluation with attempt history for progressive hints
   * Provides both avatar speech and detailed hints based on attempt number
   * Optional: Include context from related multi-part questions
   * Optional: Specify if this is the last problem for context-aware avatar speech
   */
  async evaluateAnswerWithHistory(
    problem: PathProblem,
    studentAnswer: string,
    attemptNumber: number,
    previousAttempts: Array<{ answer: string; hint: string }>,
    relatedQuestionsContext?: RelatedQuestionContext[],
    isLastProblem?: boolean
  ): Promise<EvaluationWithHistory> {
    try {
      const prompt = evaluatePracticeAnswerWithHistoryPrompt(
        problem.problemText,
        problem.correctAnswer,
        studentAnswer,
        attemptNumber,
        previousAttempts,
        relatedQuestionsContext,
        isLastProblem,
        problem.solutionSteps  // Pass solution steps for context
      );

      console.log('=== PRACTICE: Evaluate with History ===');
      console.log('Problem:', problem.problemText);
      console.log('Attempt Number:', attemptNumber);
      console.log('Previous Attempts:', previousAttempts.length);
      console.log('Related Questions:', relatedQuestionsContext?.length || 0);
      console.log('Student Answer:', studentAnswer);
      console.log('Prompt:', prompt);


      // Call AI provider directly
      const responseText = await this.callAIDirectly(prompt);

      console.log('Response:', responseText);
      console.log('========================================');

      // Use the new safe parser specifically for evaluation responses
      const data = extractPracticeJSON(responseText);

      // Build response based on correctness
      const isCorrect = data.isCorrect === true;
      const baseResponse = {
        isCorrect,
        avatarSpeech: data.avatarSpeech || (isCorrect ?
          'Excellent work! You got it!' :
          `Let's try again. ${attemptNumber < 3 ? 'Take another look.' : 'One more try.'}`),
      };

      // Add fields based on correctness
      if (isCorrect) {
        // For correct answers: include explanation, no hint/hintLevel
        return {
          ...baseResponse,
          explanation: data.explanation || 'Your answer is correct! Well done.',
        };
      } else {
        // For incorrect answers: include hint and hintLevel, no explanation
        return {
          ...baseResponse,
          hint: data.hint || 'Think about the problem step by step.',
          hintLevel: data.hintLevel || attemptNumber,
        };
      }
    } catch (error) {
      console.error('Failed to evaluate answer with history:', error);
      // Fallback response (assume incorrect for safety)
      return {
        isCorrect: false,
        avatarSpeech: 'Let me help you with this.',
        hint: 'Take another look at the problem and try breaking it down into smaller steps.',
        hintLevel: attemptNumber
      };
    }
  }

  /**
   * Get solution with steps - uses pre-written steps if available, otherwise generates with AI
   */
  async getSolution(problem: PathProblem): Promise<{
    steps: string[];
    finalAnswer: string;
  }> {
    // Check if problem already has pre-written solution steps
    if (problem.solutionSteps && problem.solutionSteps.length > 0) {
      console.log('=== PRACTICE: Get Solution (Pre-Written) ===');
      console.log('Problem:', problem.problemText);
      console.log('Using pre-written solution steps');
      console.log('Steps:', problem.solutionSteps.length);
      console.log('===========================================');

      return {
        steps: problem.solutionSteps,
        finalAnswer: problem.correctAnswer
      };
    }

    // Fall back to AI generation if no pre-written solution
    try {
      const prompt = generatePracticeSolutionPrompt(
        problem.problemText,
        problem.correctAnswer
      );

      console.log('=== PRACTICE: Get Solution (AI Generated) ===');
      console.log('Problem:', problem.problemText);
      console.log('Correct Answer:', problem.correctAnswer);
      console.log('Prompt:', prompt);

      // Call AI provider directly instead of using generateResponse (which requires valid topicId)
      const responseText = await this.callAIDirectly(prompt);

      console.log('Response:', responseText);
      console.log('===========================================');

      // Use safe parser for solution responses
      const data = safeParseJSON(responseText, ['steps'], {
        steps: ['Solution not available']
      });

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
