/**
 * Grade Appropriateness Service
 * Checks if uploaded problem matches student's grade-level curriculum
 * Uses structured output to guarantee valid JSON responses
 */

import { GoogleGenAI } from '@google/genai';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { GradeCheckSchema } from '../schemas/homework.schemas';
import type { ProblemAnalysis, GradeAppropriatenessCheck } from '../types/homework';

const CHECK_PROMPT = `You are a curriculum expert for K-12 mathematics education.

Given:
1. A student's grade level: {GRADE}
2. An analyzed problem with these details:
   - Topic: {TOPIC}
   - Sub-topic: {SUBTOPIC}
   - Difficulty: {DIFFICULTY}
   - Key concepts: {CONCEPTS}
   - Problem type: {PROBLEM_TYPE}

Determine if this problem is appropriate for this student's grade level.

Consider:
- Is this topic typically covered at this grade?
- Are the required concepts in the standard curriculum for this grade?
- Is the difficulty level appropriate?
- Would attempting this problem be beneficial or frustrating?

RECOMMENDATION GUIDELINES:
- "proceed": Problem is well-suited for student's grade
- "too-advanced": Requires concepts not yet taught
- "too-basic": Well below grade level (but can still help with review)

SUGGESTION MESSAGE EXAMPLES:
- proceed: "This looks like a great problem to practice your trigonometry skills!"
- too-advanced: "This problem involves calculus concepts you'll learn in grade 11. Want to try something else?"
- too-basic: "This is a bit below your grade level, but reviewing basics never hurts!"`;

export class GradeAppropriatenessService {
  private ai: GoogleGenAI;
  private modelName: string;
  private config: any;

  constructor() {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('VITE_GEMINI_API_KEY not configured');
    }

    this.ai = new GoogleGenAI({ apiKey });
    this.modelName = 'gemini-2.5-flash';
    this.config = {
      temperature: 0.3,
      responseMimeType: "application/json",
      responseJsonSchema: zodToJsonSchema(GradeCheckSchema),
    };
  }

  /**
   * Check if problem is appropriate for student's grade
   */
  async checkAppropriateness(
    analysis: ProblemAnalysis,
    studentGrade: number
  ): Promise<GradeAppropriatenessCheck> {

      return this.aiBasedCheck(analysis, studentGrade);
  }



  /**
   * AI-based check using Gemini for complex cases
   */
  private async aiBasedCheck(
    analysis: ProblemAnalysis,
    studentGrade: number
  ): Promise<GradeAppropriatenessCheck> {
    try {
      const prompt = CHECK_PROMPT
        .replace('{GRADE}', studentGrade.toString())
        .replace('{TOPIC}', analysis.topic)
        .replace('{SUBTOPIC}', analysis.subTopic || 'N/A')
        .replace('{DIFFICULTY}', analysis.difficulty)
        .replace('{CONCEPTS}', analysis.keyMathConcepts.join(', '))
        .replace('{PROBLEM_TYPE}', analysis.problemType);

      console.log('[GradeCheck] Prompt:', prompt);


      // Call Gemini using SDK with structured output
      const response = await this.ai.models.generateContent({
        model: this.modelName,
        contents: prompt,
        config: this.config
      });

      const textResponse = response.text;

      console.log('[GradeCheck] 📥 Received response from Gemini');
      console.log('[GradeCheck] Raw response:', textResponse);

      if (!textResponse) {
        throw new Error('No response from Gemini');
      }

      // Direct parse - guaranteed valid JSON from structured output
      const parsed = JSON.parse(textResponse);

      // Validate with Zod schema for runtime type safety
      const validated = GradeCheckSchema.parse(parsed);

      console.log('[GradeCheck] ✅ Check complete:', {
        isAppropriate: validated.isAppropriate,
        recommendation: validated.recommendation,
        requiredGrade: validated.requiredGradeLevel
      });

      return {
        studentGrade,
        ...validated
      };
    } catch (error) {
      console.error('[GradeCheck] ❌ Check failed:', error);
      // Propagate error - don't fake a grade check result
      throw new Error(
        `Failed to check grade appropriateness: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

}
