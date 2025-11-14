/**
 * Homework Helper Service
 * Manages Socratic tutoring sessions for uploaded problems
 * Uses structured output to guarantee valid JSON responses
 */

import { GoogleGenAI } from '@google/genai';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { HomeworkHelperResponseSchema } from '../schemas/homework.schemas';
import HOMEWORK_HELPER_AGENT from '../prompt-library/core/agents/homeworkHelper';
import type {
  HomeworkHelperContext,
  HomeworkHelperResponse,
} from '../types/homework';

export class HomeworkHelperService {
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
      temperature: 0.7, // Higher temperature for more varied Socratic responses
      topP: 0.9,
      topK: 40,
      maxOutputTokens: 2048,
      responseMimeType: "application/json",
      responseSchema: zodToJsonSchema(HomeworkHelperResponseSchema, {
        target: 'openApi3',
        $refStrategy: 'none',
      }) as any,
    };
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

    console.log('[HomeworkHelper] 📤 Generating Socratic response...');
    console.log('[HomeworkHelper] Student input:', studentInput);
    console.log('[HomeworkHelper] Conversation turns:', context.conversationHistory.length);

    // Call Gemini with structured output
    const response = await this.ai.models.generateContent({
      model: this.modelName,
      contents: fullPrompt,
      config: this.config
    });

    const textResponse = response.text;

    console.log('[HomeworkHelper] 📥 Received response from Gemini');
    console.log('[HomeworkHelper] Response length:', textResponse?.length || 0, 'chars');

    if (!textResponse) {
      throw new Error('No response from Gemini');
    }

    // Direct parse - guaranteed valid JSON from structured output
    const parsed = JSON.parse(textResponse);

    // Validate with Zod schema for runtime type safety
    const validated = HomeworkHelperResponseSchema.parse(parsed);

    console.log('[HomeworkHelper] ✅ Response generated:', {
      teachingAction: validated.teachingAction,
      hasMathTool: !!validated.display.mathTool,
      speechLength: validated.speech.text.length
    });

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

The student just said: "${studentInput}"

Generate your Socratic response following the rules in your system prompt.

Remember:
- NEVER give the final answer
- Ask questions to guide thinking
- Validate reasoning, not just answers`;
  }

  /**
   * Generate initial greeting for new problem
   */
  async generateInitialGreeting(context: HomeworkHelperContext): Promise<HomeworkHelperResponse> {
    const contextPrompt = `CONTEXT:
${JSON.stringify({ problemAnalysis: context.analysis }, null, 2)}

This is the FIRST interaction with the student about this uploaded problem.

Generate a warm, encouraging greeting that:
1. Acknowledges you see their problem
2. Asks what they understand so far
3. Sets a collaborative, Socratic tone`;

    // Build full prompt with system prompt
    const fullPrompt = `${HOMEWORK_HELPER_AGENT}\n\n${contextPrompt}`;

    console.log('[HomeworkHelper] 📤 Generating initial greeting...');
    console.log('[HomeworkHelper] Problem topic:', context.analysis.topic);

    // Call Gemini with structured output
    const response = await this.ai.models.generateContent({
      model: this.modelName,
      contents: fullPrompt,
      config: this.config
    });

    const textResponse = response.text;

    console.log('[HomeworkHelper] 📥 Received greeting from Gemini');
    console.log('[HomeworkHelper] Response length:', textResponse?.length || 0, 'chars');

    if (!textResponse) {
      throw new Error('No response from Gemini');
    }

    // Direct parse - guaranteed valid JSON from structured output
    const parsed = JSON.parse(textResponse);

    // Validate with Zod schema for runtime type safety
    const validated = HomeworkHelperResponseSchema.parse(parsed);

    console.log('[HomeworkHelper] ✅ Initial greeting generated:', {
      emotion: validated.speech.emotion,
      hasVisual: !!validated.display.mathTool
    });

    return validated;
  }
}
