/**
 * Problem Analysis Service
 * Uses Gemini 2.5 Flash multimodal to analyze uploaded homework problems
 * Uses structured output to guarantee valid JSON responses
 *
 * SECURITY: Uses Cloud Functions in production (API keys on server)
 */

import { GoogleGenAI } from '@google/genai';
import { httpsCallable } from 'firebase/functions';
import { functions } from './firebase';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { ProblemAnalysisSchema } from '../schemas/homework.schemas';
import { shouldUseCloudFunctions } from './cloudFunctionAIService';
import type { ProblemAnalysis, UploadedProblem } from '../types/homework';

// Types for Cloud Function
interface AnalyzeImageRequest {
  prompt: string;
  imageBase64: string;
  mimeType: string;
}

interface AnalyzeImageResponse {
  content: string;
}

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
  private ai: GoogleGenAI | null = null;
  private modelName: string = 'gemini-2.5-flash-preview-05-20';
  private config: any;
  private useCloudFunctions: boolean;
  private jsonSchemaInstruction: string;
  private analyzeImageFn: ReturnType<typeof httpsCallable<AnalyzeImageRequest, AnalyzeImageResponse>> | null = null;

  constructor() {
    this.useCloudFunctions = shouldUseCloudFunctions();

    // Store JSON schema as instruction for prompts
    const schema = zodToJsonSchema(ProblemAnalysisSchema);
    this.jsonSchemaInstruction = `\n\nYou MUST respond with valid JSON matching this schema:\n${JSON.stringify(schema, null, 2)}`;

    if (this.useCloudFunctions) {
      console.log('🔒 ProblemAnalysisService: Using Cloud Functions (secure mode)');
      this.analyzeImageFn = httpsCallable<AnalyzeImageRequest, AnalyzeImageResponse>(
        functions,
        'analyzeImage'
      );
    } else {
      console.warn('⚠️ ProblemAnalysisService: Using direct API calls (development mode)');
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
   * Analyze an uploaded problem image
   */
  async analyzeProblem(problem: UploadedProblem): Promise<ProblemAnalysis> {
    try {
      // Prepare image data
      const imageData = problem.imageData || await this.fetchImageData(problem.imageUrl);
      const mimeType = problem.fileType;
      const promptWithSchema = ANALYSIS_PROMPT + this.jsonSchemaInstruction;

      let textResponse: string;

      if (this.useCloudFunctions && this.analyzeImageFn) {
        // Use Cloud Function for secure analysis
        const result = await this.analyzeImageFn({
          prompt: promptWithSchema,
          imageBase64: imageData.replace(/^data:[^;]+;base64,/, ''),
          mimeType: mimeType,
        });
        textResponse = result.data.content;
      } else {
        // Direct API call (development mode only)
        const response = await this.ai!.models.generateContent({
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
        textResponse = response.text || '';
      }

      if (!textResponse) {
        throw new Error('No response from AI');
      }

      // Parse JSON response
      const parsed = JSON.parse(textResponse);

      // Validate with Zod schema for runtime type safety
      const validated = ProblemAnalysisSchema.parse(parsed);

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
