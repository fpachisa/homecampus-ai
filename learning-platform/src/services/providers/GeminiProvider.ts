import { GoogleGenAI } from '@google/genai';
import type { AIProvider, AIProviderConfig } from './AIProvider';
import { AIServiceError, AIErrorType } from '../aiService';

/**
 * Gemini AI Provider
 * Handles all raw API calls to Google Gemini API
 */
export class GeminiProvider implements AIProvider {
  private ai: GoogleGenAI;
  private modelName: string;
  private temperature: number;

  constructor(config: AIProviderConfig) {
    this.ai = new GoogleGenAI({ apiKey: config.apiKey });
    this.modelName = config.model || 'gemini-3-flash-preview';
    this.temperature = config.temperature ?? 0.5;
  }

  async generateContent(prompt: string, _maxTokens?: number): Promise<string> {
    try {
      // Default to 10000 tokens for response
      const outputTokens = _maxTokens ?? 10000;

      // Add 2-minute timeout (increased for batch generation with theory content)
      const response = await this.withTimeout(
        this.ai.models.generateContent({
          model: this.modelName,
          contents: prompt,
          config: {
            temperature: this.temperature,
            maxOutputTokens: outputTokens,
            thinkingConfig: {
              thinkingLevel: 'MEDIUM'  // Balanced reasoning without excessive tokens
            } as any
          }
        }),
        120000, // 120 seconds (2 minutes)
        'Gemini API request timed out after 120 seconds'
      );

      // Check for truncation BEFORE processing response
      const finishReason = (response as any).candidates?.[0]?.finishReason;
      if (finishReason === 'MAX_TOKENS') {
        console.warn('⚠️ Gemini response truncated! Finish reason: MAX_TOKENS');
        throw new AIServiceError(
          AIErrorType.TRUNCATED_RESPONSE,
          null,
          true,  // retryable - triggers Claude fallback
          'Gemini response truncated due to token limit'
        );
      }

      // Debug logging to diagnose truncation issues
      console.log('🔍 Gemini Response Debug:', {
        hasText: !!response.text,
        textLength: response.text?.length,
        // Log any finish reason or safety info from the response
        finishReason: (response as any).candidates?.[0]?.finishReason,
        safetyRatings: (response as any).candidates?.[0]?.safetyRatings,
        usageMetadata: (response as any).usageMetadata,
        // Check if response might be truncated
        textEndsCleanly: response.text?.trim().endsWith('}') || response.text?.trim().endsWith('"'),
      });

      const text = response.text?.trim() || '';

      if (!text) {
        throw new AIServiceError(
          AIErrorType.UNKNOWN,
          null,
          false,
          'Empty response from Gemini API'
        );
      }

      return text;
    } catch (error: any) {
      console.error('Gemini API error:', error);

      // Check if this is a timeout error
      if (error.name === 'TimeoutError' || error.message?.includes('timed out')) {
        throw new AIServiceError(AIErrorType.TIMEOUT, error, true, error.message);
      }

      // Map Gemini-specific errors (error structure may vary in new SDK)
      const status = error.status || error.statusCode || error.code;
      if (status === 429) {
        throw new AIServiceError(AIErrorType.RATE_LIMIT, error, true, error.message);
      }
      if (status === 503 || status === 502) {
        throw new AIServiceError(AIErrorType.SERVICE_UNAVAILABLE, error, true, error.message);
      }
      if (status === 401 || status === 403) {
        throw new AIServiceError(AIErrorType.AUTHENTICATION, error, false, error.message);
      }

      throw AIServiceError.fromHttpError(error);
    }
  }

  /**
   * Wraps a promise with a timeout
   */
  private withTimeout<T>(
    promise: Promise<T>,
    timeoutMs: number,
    timeoutMessage: string
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        const error = new Error(timeoutMessage);
        error.name = 'TimeoutError';
        reject(error);
      }, timeoutMs);

      promise
        .then(resolve)
        .catch(reject)
        .finally(() => clearTimeout(timeoutId));
    });
  }

  getProviderName(): string {
    return 'Gemini';
  }

  getModel(): string {
    return this.modelName;
  }
}
