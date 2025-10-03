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
  private defaultMaxTokens: number;

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

  async generateContent(prompt: string, maxTokens?: number): Promise<string> {
    try {
      const result = await this.model.generateContent(prompt);
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

  getProviderName(): string {
    return 'Gemini';
  }

  getModel(): string {
    return this.modelName;
  }
}
