/**
 * Grade Appropriateness Service
 * Checks if uploaded problem matches student's grade-level curriculum
 * Uses structured output to guarantee valid JSON responses
 *
 * SECURITY: Uses Cloud Functions in production (API keys on server)
 */

import { GoogleGenAI } from '@google/genai';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { GradeCheckSchema } from '../schemas/homework.schemas';
import { shouldUseCloudFunctions, generateWithCloudFunction } from './cloudFunctionAIService';
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
  private ai: GoogleGenAI | null = null;
  private modelName: string = 'gemini-2.5-flash-preview-05-20';
  private config: any;
  private useCloudFunctions: boolean;
  private jsonSchemaInstruction: string;

  constructor() {
    this.useCloudFunctions = shouldUseCloudFunctions();

    // Store JSON schema as instruction for prompts
    const schema = zodToJsonSchema(GradeCheckSchema);
    this.jsonSchemaInstruction = `\n\nYou MUST respond with valid JSON matching this schema:\n${JSON.stringify(schema, null, 2)}`;

    if (this.useCloudFunctions) {
      console.log('🔒 GradeAppropriatenessService: Using Cloud Functions (secure mode)');
    } else {
      console.warn('⚠️ GradeAppropriatenessService: Using direct API calls (development mode)');
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('VITE_GEMINI_API_KEY not configured');
      }

      this.ai = new GoogleGenAI({ apiKey });
      this.config = {
        temperature: 0.3,
        responseMimeType: "application/json",
        responseJsonSchema: schema,
      };
    }
  }

  /**
   * Call AI - routes through Cloud Functions in production
   */
  private async callAI(prompt: string): Promise<string> {
    if (this.useCloudFunctions) {
      const promptWithSchema = prompt + this.jsonSchemaInstruction;
      return generateWithCloudFunction(promptWithSchema);
    }

    const response = await this.ai!.models.generateContent({
      model: this.modelName,
      contents: prompt,
      config: this.config
    });
    return response.text || '';
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

      // Call AI (Cloud Function or direct)
      const textResponse = await this.callAI(prompt);

      if (!textResponse) {
        throw new Error('No response from AI');
      }

      // Parse JSON response
      const parsed = JSON.parse(textResponse);

      // Validate with Zod schema for runtime type safety
      const validated = GradeCheckSchema.parse(parsed);

      return {
        studentGrade,
        ...validated
      };
    } catch (error) {
      console.error('[GradeCheck] ❌ Check failed:', error);
      throw new Error(
        `Failed to check grade appropriateness: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

}
