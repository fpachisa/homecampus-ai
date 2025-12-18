/**
 * Problem Analysis Service
 * Uses Gemini 2.5 Flash multimodal to analyze uploaded homework problems
 * Uses structured output to guarantee valid JSON responses
 */

import { GoogleGenAI } from '@google/genai';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { ProblemAnalysisSchema } from '../schemas/homework.schemas';
import type { ProblemAnalysis, UploadedProblem } from '../types/homework';

const ANALYSIS_PROMPT = `You are an expert educational content analyzer specializing in K-12 mathematics.

Analyze the uploaded problem image and provide a detailed breakdown:

1. Extract the complete problem statement accurately
2. Identify mathematical concepts and difficulty level
3. Note any visual elements (diagrams, graphs, tables)
4. Assess if the image is clear enough to work with

TOPIC CLASSIFICATION EXAMPLES:
- "Find the height of the building" with triangle → topic: "trigonometry", subTopic: "angle of elevation"
- "Solve 2x² + 5x - 3 = 0" → topic: "algebra", subTopic: "quadratic equations"
- "Find the area of the shaded region" → topic: "geometry", subTopic: "composite areas"
- "A train travels 120 km..." → topic: "algebra", subTopic: "linear equations" or topic: "arithmetic", subTopic: "rate problems"

DIFFICULTY GUIDELINES:
- basic: Single-step, direct application of one formula
- intermediate: Multi-step, combining 2-3 concepts
- advanced: Complex, requires insight or multiple approaches

PROBLEM TYPE CLASSIFICATION:
- word-problem: Real-world context, needs translation to math
- calculation: Direct computation given values
- proof: Show or explain why something is true
- multi-step: Requires 3+ distinct steps
- multi-part: Explicitly labeled parts (a), (b), (c)

If the image is unclear, blurry, or cut off, set analysisConfidence to "low" and list specific issues in clarificationNeeded.`;

export class ProblemAnalysisService {
  private ai: GoogleGenAI;
  private modelName: string;
  private config: any;

  constructor() {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('VITE_GEMINI_API_KEY not configured');
    }

    this.ai = new GoogleGenAI({ apiKey });
    this.modelName = 'gemini-3-flash-preview';
    this.config = {
      temperature: 0.3,
      responseMimeType: "application/json",
      responseJsonSchema: zodToJsonSchema(ProblemAnalysisSchema),
    };
  }

  /**
   * Analyze an uploaded problem image
   */
  async analyzeProblem(problem: UploadedProblem): Promise<ProblemAnalysis> {
    try {
      // Prepare image data
      const imageData = problem.imageData || await this.fetchImageData(problem.imageUrl);
      const mimeType = problem.fileType;


      // Call Gemini with multimodal input using SDK
      // With structured output, Gemini guarantees valid JSON matching our schema
      const response = await this.ai.models.generateContent({
        model: this.modelName,
        contents: [
          ANALYSIS_PROMPT,
          {
            inlineData: {
              mimeType: mimeType,
              data: imageData.replace(/^data:[^;]+;base64,/, ''),
            },
          },
        ],
        config: this.config
      });

      const textResponse = response.text;

      console.log('[ProblemAnalysis] 📥 Received response from Gemini');
      console.log('[ProblemAnalysis] Raw response:', textResponse);

      if (!textResponse) {
        throw new Error('No response from Gemini');
      }

      // Direct parse - guaranteed valid JSON from structured output
      const parsed = JSON.parse(textResponse);

      // Validate with Zod schema for runtime type safety
      const validated = ProblemAnalysisSchema.parse(parsed);

      console.log('[ProblemAnalysis] ✅ Analysis complete:', {
        topic: validated.topic,
        subTopic: validated.subTopic,
        difficulty: validated.difficulty,
        confidence: validated.analysisConfidence
      });

      // Type assertion for subject field (Zod schema uses string, TS type uses union)
      return validated as ProblemAnalysis;
    } catch (error) {
      console.error('[ProblemAnalysis] ❌ Analysis failed:', error);
      throw new Error(
        `Failed to analyze problem: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  /**
   * Fetch image data from URL if not provided
   */
  private async fetchImageData(url: string): Promise<string> {
    // If already base64, return as-is
    if (url.startsWith('data:')) {
      return url;
    }

    // Otherwise fetch and convert
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}
