/**
 * Grade Appropriateness Service
 * Checks if uploaded problem matches student's grade-level curriculum
 * Uses structured output to guarantee valid JSON responses
 */

import { GoogleGenAI } from '@google/genai';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { GradeCheckSchema } from '../schemas/homework.schemas';
import type { ProblemAnalysis, GradeAppropriatenessCheck } from '../types/homework';

// Standard K-12 Math Curriculum Mapping
// Maps topics to typical grade levels
const CURRICULUM_MAP: Record<string, { minGrade: number; maxGrade: number; concepts: string[] }> = {
  // Algebra
  'linear equations': { minGrade: 8, maxGrade: 12, concepts: ['solving equations', 'slope', 'y-intercept'] },
  'quadratic equations': { minGrade: 9, maxGrade: 12, concepts: ['factoring', 'quadratic formula', 'parabolas'] },
  'polynomials': { minGrade: 9, maxGrade: 12, concepts: ['factoring', 'operations', 'synthetic division'] },
  'systems of equations': { minGrade: 8, maxGrade: 12, concepts: ['substitution', 'elimination', 'graphing'] },
  'exponentials': { minGrade: 9, maxGrade: 12, concepts: ['exponential growth', 'logarithms', 'compound interest'] },
  'rational expressions': { minGrade: 10, maxGrade: 12, concepts: ['simplification', 'operations', 'asymptotes'] },

  // Geometry
  'basic geometry': { minGrade: 6, maxGrade: 10, concepts: ['angles', 'triangles', 'quadrilaterals', 'perimeter', 'area'] },
  'circles': { minGrade: 9, maxGrade: 12, concepts: ['circumference', 'area', 'arc length', 'sectors'] },
  'solid geometry': { minGrade: 9, maxGrade: 12, concepts: ['volume', 'surface area', 'prisms', 'pyramids', 'spheres'] },
  'coordinate geometry': { minGrade: 8, maxGrade: 12, concepts: ['distance formula', 'midpoint', 'slope'] },
  'transformations': { minGrade: 8, maxGrade: 10, concepts: ['translation', 'rotation', 'reflection', 'dilation'] },

  // Trigonometry
  'trigonometry': { minGrade: 9, maxGrade: 12, concepts: ['SOH-CAH-TOA', 'sine', 'cosine', 'tangent', 'angles'] },
  'angle of elevation': { minGrade: 9, maxGrade: 12, concepts: ['right triangles', 'trigonometric ratios'] },
  'unit circle': { minGrade: 10, maxGrade: 12, concepts: ['radians', 'special angles', 'trig identities'] },
  'law of sines': { minGrade: 10, maxGrade: 12, concepts: ['non-right triangles', 'ambiguous case'] },
  'law of cosines': { minGrade: 10, maxGrade: 12, concepts: ['non-right triangles', 'SAS', 'SSS'] },

  // Arithmetic & Pre-Algebra
  'fractions': { minGrade: 4, maxGrade: 8, concepts: ['operations', 'simplification', 'mixed numbers'] },
  'decimals': { minGrade: 4, maxGrade: 8, concepts: ['operations', 'conversion', 'percentages'] },
  'percentages': { minGrade: 6, maxGrade: 10, concepts: ['conversion', 'percent change', 'applications'] },
  'ratios and proportions': { minGrade: 6, maxGrade: 9, concepts: ['ratios', 'proportions', 'scale factor'] },
  'integers': { minGrade: 6, maxGrade: 8, concepts: ['operations', 'order of operations', 'absolute value'] },

  // Statistics & Probability
  'statistics': { minGrade: 6, maxGrade: 12, concepts: ['mean', 'median', 'mode', 'range', 'standard deviation'] },
  'probability': { minGrade: 7, maxGrade: 12, concepts: ['simple probability', 'compound events', 'permutations'] },
  'data analysis': { minGrade: 6, maxGrade: 12, concepts: ['graphs', 'histograms', 'box plots', 'scatter plots'] },

  // Advanced Topics
  'calculus': { minGrade: 11, maxGrade: 12, concepts: ['limits', 'derivatives', 'integrals'] },
  'sequences and series': { minGrade: 10, maxGrade: 12, concepts: ['arithmetic', 'geometric', 'summation'] },
  'matrices': { minGrade: 10, maxGrade: 12, concepts: ['operations', 'determinants', 'systems'] },
};

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

      console.log('[GradeCheck] 📤 Checking grade appropriateness...');
      console.log('[GradeCheck] Student grade:', studentGrade);
      console.log('[GradeCheck] Problem:', `${analysis.topic} (${analysis.difficulty})`);
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
