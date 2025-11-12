import { GoogleGenerativeAI } from '@google/generative-ai';
import type { AIProvider, AIProviderConfig } from './AIProvider';
import { AIServiceError, AIErrorType } from '../aiService';

/**
 * Gemini AI Provider
 * Handles all raw API calls to Google Gemini API
 */
export class GeminiProvider implements AIProvider {
  private genAI: GoogleGenerativeAI;
  private model: any;
  private modelName: string;
  private temperature: number;

  constructor(config: AIProviderConfig) {
    this.genAI = new GoogleGenerativeAI(config.apiKey);
    this.modelName = config.model || 'gemini-flash-latest';
    this.temperature = config.temperature ?? 0.5;

    this.model = this.genAI.getGenerativeModel({
      model: this.modelName,
      generationConfig: {
        temperature: this.temperature,
      }
    });
  }

  async generateContent(prompt: string, _maxTokens?: number): Promise<string> {
    try {
      // Add 2-minute timeout (increased for batch generation with theory content)
      const result = await this.withTimeout(
        this.model.generateContent(prompt),
        120000, // 120 seconds (2 minutes)
        'Gemini API request timed out after 120 seconds'
      ) as any;

      const text = result.response.text().trim();

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

      // Map Gemini-specific errors
      if (error.status === 429) {
        throw new AIServiceError(AIErrorType.RATE_LIMIT, error, true, error.message);
      }
      if (error.status === 503 || error.status === 502) {
        throw new AIServiceError(AIErrorType.SERVICE_UNAVAILABLE, error, true, error.message);
      }
      if (error.status === 401 || error.status === 403) {
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
