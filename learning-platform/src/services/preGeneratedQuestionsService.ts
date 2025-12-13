/**
 * Service for managing pre-generated question banks
 * Used for topics where AI-generated questions are unreliable (e.g., Composite Figures)
 */

import type { PreGeneratedQuestion, QuestionBank } from '../data/learn/question-banks/types.js';
import { S1_MATH_PERIMETER_AREA_COMPOSITE_QUESTION_BANK } from '../data/learn/question-banks/s1-math-perimeter-area-composite.js';
import { P5_MATH_FOUR_OPERATIONS_WORD_PROBLEMS_QUESTION_BANK } from '../data/learn/question-banks/p5-math-four-operations-word-problems.js';
import { P5_MATH_FOUR_OPERATIONS_FRACTIONS_WORD_PROBLEMS_QUESTION_BANK } from '../data/learn/question-banks/p5-math-four-operations-fractions-word-problems.js';

/**
 * Registry of all question banks, keyed by topicId
 */
const QUESTION_BANKS: Record<string, QuestionBank> = {
  's1-math-perimeter-area-composite': S1_MATH_PERIMETER_AREA_COMPOSITE_QUESTION_BANK,
  'p5-math-four-operations-word-problems': P5_MATH_FOUR_OPERATIONS_WORD_PROBLEMS_QUESTION_BANK,
  'p5-math-four-operations-fractions-word-problems': P5_MATH_FOUR_OPERATIONS_FRACTIONS_WORD_PROBLEMS_QUESTION_BANK,
};

export class PreGeneratedQuestionsService {
  /**
   * Get the next question from the question bank for a specific section
   * Questions are cycled sequentially within each section
   *
   * @param topicId - The topic ID (e.g., 's1-math-perimeter-area-composite')
   * @param sectionIndex - The section index (0-based)
   * @param currentQuestionIndex - Current position in the question bank (0-based)
   * @returns The next question, or null if not found
   */
  getNextQuestion(
    topicId: string,
    sectionIndex: number,
    currentQuestionIndex: number = -1
  ): PreGeneratedQuestion | null {
    const questionBank = QUESTION_BANKS[topicId];

    if (!questionBank) {
      console.error(`Question bank not found for topic: ${topicId}`);
      return null;
    }

    const sectionEntry = questionBank.find(entry => entry.sectionIndex === sectionIndex);

    if (!sectionEntry) {
      console.error(`Section ${sectionIndex} not found in question bank for topic: ${topicId}`);
      return null;
    }

    const questions = sectionEntry.questions;

    if (questions.length === 0) {
      console.error(`No questions found for section ${sectionIndex} in topic: ${topicId}`);
      return null;
    }

    // Calculate next index (sequential cycling)
    const nextIndex = this.getNextIndex(currentQuestionIndex, questions.length);

    return questions[nextIndex];
  }

  /**
   * Get total number of questions for a specific section
   *
   * @param topicId - The topic ID
   * @param sectionIndex - The section index (0-based)
   * @returns Total number of questions, or 0 if not found
   */
  getTotalQuestions(topicId: string, sectionIndex: number): number {
    const questionBank = QUESTION_BANKS[topicId];

    if (!questionBank) {
      return 0;
    }

    const sectionEntry = questionBank.find(entry => entry.sectionIndex === sectionIndex);

    return sectionEntry?.questions.length || 0;
  }

  /**
   * Check if there are more questions available in a section
   * Always returns true for pre-generated questions since they cycle
   *
   * @param topicId - The topic ID
   * @param sectionIndex - The section index (0-based)
   * @param currentQuestionIndex - Current position in the question bank
   * @returns True if questions exist for this section
   */
  hasMoreQuestions(topicId: string, sectionIndex: number, _currentQuestionIndex: number): boolean {
    const totalQuestions = this.getTotalQuestions(topicId, sectionIndex);
    return totalQuestions > 0;
  }

  /**
   * Calculate the next question index (sequential cycling)
   *
   * @param currentIndex - Current index (-1 means start from beginning)
   * @param totalQuestions - Total number of questions
   * @returns Next index (0-based)
   */
  private getNextIndex(currentIndex: number, totalQuestions: number): number {
    if (currentIndex === -1) {
      return 0; // Start from the beginning
    }

    return (currentIndex + 1) % totalQuestions; // Cycle back to 0 after last question
  }

  /**
   * Get a specific question by index
   *
   * @param topicId - The topic ID
   * @param sectionIndex - The section index (0-based)
   * @param questionIndex - The question index (0-based)
   * @returns The question, or null if not found
   */
  getQuestionByIndex(
    topicId: string,
    sectionIndex: number,
    questionIndex: number
  ): PreGeneratedQuestion | null {
    const questionBank = QUESTION_BANKS[topicId];

    if (!questionBank) {
      return null;
    }

    const sectionEntry = questionBank.find(entry => entry.sectionIndex === sectionIndex);

    if (!sectionEntry) {
      return null;
    }

    const questions = sectionEntry.questions;

    if (questionIndex < 0 || questionIndex >= questions.length) {
      return null;
    }

    return questions[questionIndex];
  }

  /**
   * Check if a topic has a pre-generated question bank
   *
   * @param topicId - The topic ID
   * @returns True if question bank exists
   */
  hasQuestionBank(topicId: string): boolean {
    return topicId in QUESTION_BANKS;
  }

  /**
   * Get all section indices available in a question bank
   *
   * @param topicId - The topic ID
   * @returns Array of section indices
   */
  getAvailableSections(topicId: string): number[] {
    const questionBank = QUESTION_BANKS[topicId];

    if (!questionBank) {
      return [];
    }

    return questionBank.map(entry => entry.sectionIndex);
  }
}

// Export singleton instance
export const preGeneratedQuestionsService = new PreGeneratedQuestionsService();
