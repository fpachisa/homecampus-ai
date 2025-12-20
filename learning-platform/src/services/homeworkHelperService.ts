/**
 * Homework Helper Service
 * Manages Socratic tutoring sessions for uploaded problems
 * Uses structured output to guarantee valid JSON responses
 *
 * SECURITY: Uses Cloud Functions in production (API keys on server)
 */

import { GoogleGenAI } from '@google/genai';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { HomeworkHelperResponseSchema } from '../schemas/homework.schemas';
import HOMEWORK_HELPER_AGENT from '../prompt-library/core/agents/homeworkHelper';
import { shouldUseCloudFunctions, generateWithCloudFunction } from './cloudFunctionAIService';
import type {
  HomeworkHelperContext,
  HomeworkHelperResponse,
} from '../types/homework';

export class HomeworkHelperService {
  private ai: GoogleGenAI | null = null;
  private modelName: string = 'gemini-2.5-flash-preview-05-20';
  private config: any;
  private useCloudFunctions: boolean;
  private jsonSchemaInstruction: string;

  constructor() {
    this.useCloudFunctions = shouldUseCloudFunctions();

    // Store JSON schema as instruction for prompts
    const schema = zodToJsonSchema(HomeworkHelperResponseSchema);
    this.jsonSchemaInstruction = `\n\nYou MUST respond with valid JSON matching this schema:\n${JSON.stringify(schema, null, 2)}`;

    if (this.useCloudFunctions) {
      console.log('🔒 HomeworkHelperService: Using Cloud Functions (secure mode)');
    } else {
      console.warn('⚠️ HomeworkHelperService: Using direct API calls (development mode)');
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('VITE_GEMINI_API_KEY not configured');
      }

      this.ai = new GoogleGenAI({ apiKey });
      this.config = {
        temperature: 0.3,
        responseMimeType: 'application/json',
        responseJsonSchema: schema,
      };
    }
  }

  /**
   * Call AI - routes through Cloud Functions in production
   */
  private async callAI(prompt: string): Promise<string> {
    if (this.useCloudFunctions) {
      // Add JSON schema instruction to prompt for Cloud Functions
      const promptWithSchema = prompt + this.jsonSchemaInstruction;
      return generateWithCloudFunction(promptWithSchema);
    }

    // Direct API call with structured output
    const response = await this.ai!.models.generateContent({
      model: this.modelName,
      contents: prompt,
      config: this.config
    });
    return response.text || '';
  }

  /**
   * Generate Socratic response to student input
   */
  async generateResponse(
    context: HomeworkHelperContext,
    studentInput: string
  ): Promise<HomeworkHelperResponse> {
    // Build full prompt with system prompt and context
    const fullPrompt = `${HOMEWORK_HELPER_AGENT}\n\n${this.buildPrompt(context, studentInput)}`;

    // Call AI (Cloud Function or direct)
    const textResponse = await this.callAI(fullPrompt);

    if (!textResponse) {
      throw new Error('No response from AI');
    }

    // Parse JSON response
    const parsed = JSON.parse(textResponse);

    // Validate with Zod schema for runtime type safety
    const validated = HomeworkHelperResponseSchema.parse(parsed);

    return validated;
  }

  /**
   * Build prompt with full context
   */
  private buildPrompt(context: HomeworkHelperContext, studentInput: string): string {
    // Format conversation history
    const historyText = context.conversationHistory
      .slice(-6) // Last 6 messages for context
      .map((msg) => {
        if (msg.role === 'student') {
          return `Student: ${msg.text}`;
        } else {
          return `Tutor: ${msg.display?.content || msg.speech?.text || ''}`;
        }
      })
      .join('\n\n');

    // Build context object
    const contextObj = {
      problemAnalysis: context.analysis,
      conversationHistory: historyText,
      currentFocus: context.currentFocus,
      hintsGiven: context.hintsGiven,
      questionsAsked: context.questionsAsked,
      studentDemonstrated: context.studentDemonstrated,
      currentStudentInput: studentInput,
    };

    return `CONTEXT:
${JSON.stringify(contextObj, null, 2)}


Evaluate the student response and generate your Socratic response.

Remember:
- NEVER give the final answer
- Ask questions to guide thinking`;
  }

  /**
   * Generate initial greeting for new problem
   */
  async generateInitialGreeting(context: HomeworkHelperContext): Promise<HomeworkHelperResponse> {
    const contextPrompt = `CONTEXT:
${JSON.stringify({ problemAnalysis: context.analysis }, null, 2)}

This is the FIRST interaction with the student about this uploaded problem.

Generate a warm, encouraging greeting that:
1. Acknowledge the probem uploaded
2. Check thier understanding of the problem
3. Sets a collaborative, Socratic tone`;

    // Build full prompt with system prompt
    const fullPrompt = `${HOMEWORK_HELPER_AGENT}\n\n${contextPrompt}`;

    // Call AI (Cloud Function or direct)
    const textResponse = await this.callAI(fullPrompt);

    if (!textResponse) {
      throw new Error('No response from AI');
    }

    // Parse JSON response
    const parsed = JSON.parse(textResponse);

    // Validate with Zod schema for runtime type safety
    const validated = HomeworkHelperResponseSchema.parse(parsed);

    return validated;
  }
}
