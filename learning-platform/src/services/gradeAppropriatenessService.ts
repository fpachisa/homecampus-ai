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
- "review-needed": Student should review foundational concepts first

SUGGESTION MESSAGE EXAMPLES:
- proceed: "This looks like a great problem to practice your trigonometry skills!"
- too-advanced: "This problem involves calculus concepts you'll learn in grade 11. Want to try something else?"
- too-basic: "This is a bit below your grade level, but reviewing basics never hurts!"
- review-needed: "This problem needs some trigonometry basics. Let's make sure you're comfortable with those first."`;

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
      topP: 0.8,
      topK: 40,
      maxOutputTokens: 1024,
      responseMimeType: "application/json",
      responseSchema: zodToJsonSchema(GradeCheckSchema, {
        target: 'openApi3',
        $refStrategy: 'none',
      }) as any,
    };
  }

  /**
   * Check if problem is appropriate for student's grade
   */
  async checkAppropriateness(
    analysis: ProblemAnalysis,
    studentGrade: number
  ): Promise<GradeAppropriatenessCheck> {
    // First try rule-based check (faster)
    const ruleBasedCheck = this.ruleBasedCheck(analysis, studentGrade);

    // If confidence is low or we need AI reasoning, use Gemini
    if (analysis.analysisConfidence === 'low' || !ruleBasedCheck) {
      return this.aiBasedCheck(analysis, studentGrade);
    }

    return ruleBasedCheck;
  }

  /**
   * Rule-based check using curriculum map
   */
  private ruleBasedCheck(
    analysis: ProblemAnalysis,
    studentGrade: number
  ): GradeAppropriatenessCheck | null {
    const topicKey = analysis.subTopic?.toLowerCase() || analysis.topic.toLowerCase();
    const curriculumInfo = CURRICULUM_MAP[topicKey];

    if (!curriculumInfo) {
      // Topic not in our map, fall back to AI
      return null;
    }

    const { minGrade, maxGrade, concepts } = curriculumInfo;

    // Determine appropriateness
    let isAppropriate = studentGrade >= minGrade;
    let recommendation: 'proceed' | 'too-advanced' | 'too-basic' | 'review-needed';
    let suggestionMessage: string;
    let reason: string;

    if (studentGrade < minGrade) {
      recommendation = 'too-advanced';
      isAppropriate = false;
      reason = `This topic (${analysis.topic}) is typically taught in grade ${minGrade} or higher.`;
      suggestionMessage = `This problem covers ${analysis.topic}, which you'll learn in grade ${minGrade}. Want to try a different problem?`;
    } else if (studentGrade > maxGrade + 2) {
      recommendation = 'too-basic';
      reason = `This is below your grade level, but reviewing fundamentals can be helpful.`;
      suggestionMessage = `This is below your current grade level, but practicing the basics never hurts!`;
    } else if (analysis.difficulty === 'advanced' && studentGrade === minGrade) {
      recommendation = 'review-needed';
      reason = `This is an advanced problem for your grade. Make sure you're comfortable with the basics first.`;
      suggestionMessage = `This is a challenging problem! Let's make sure you're comfortable with ${analysis.topic} basics first.`;
    } else {
      recommendation = 'proceed';
      reason = `This problem is appropriate for grade ${studentGrade}.`;
      suggestionMessage = `Great! This is a perfect problem to practice your ${analysis.topic} skills.`;
    }

    return {
      studentGrade,
      isAppropriate,
      reason,
      requiredGradeLevel: minGrade,
      conceptsCovered: concepts,
      conceptsMissing: studentGrade < minGrade ? concepts : [],
      recommendation,
      suggestionMessage,
    };
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

      // Call Gemini using SDK with structured output
      const response = await this.ai.models.generateContent({
        model: this.modelName,
        contents: prompt,
        config: this.config
      });

      const textResponse = response.text;

      if (!textResponse) {
        throw new Error('No response from Gemini');
      }

      // Direct parse - guaranteed valid JSON from structured output
      const parsed = JSON.parse(textResponse);

      // Validate with Zod schema for runtime type safety
      const validated = GradeCheckSchema.parse(parsed);

      return {
        studentGrade,
        ...validated
      };
    } catch (error) {
      console.error('AI-based check failed:', error);
      // Propagate error - don't fake a grade check result
      throw new Error(
        `Failed to check grade appropriateness: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

}
