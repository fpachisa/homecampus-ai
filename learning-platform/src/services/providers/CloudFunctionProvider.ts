/**
 * Cloud Function AI Provider
 *
 * Calls AI through Firebase Cloud Functions instead of direct API calls.
 * This keeps API keys secure on the server side.
 *
 * Benefits:
 * - API keys never exposed to client
 * - Server-side rate limiting
 * - Input validation
 * - Automatic fallback (Gemini → Claude)
 */

import { httpsCallable } from 'firebase/functions';
import type { HttpsCallableResult } from 'firebase/functions';
import { functions } from '../firebase';
import type { AIProvider } from './AIProvider';
import { AIServiceError, AIErrorType } from '../aiService';

// Config for CloudFunctionProvider (no apiKey needed)
export interface CloudFunctionProviderConfig {
  temperature?: number;
  defaultMaxTokens?: number;
}

// Types matching the Cloud Function
interface GenerateContentRequest {
  prompt: string;
  userInput?: string;  // Raw user input for server-side validation
  maxTokens?: number;
  temperature?: number;
  preferredProvider?: 'gemini' | 'claude';
}

interface GenerateContentResponse {
  content: string;
  provider: 'gemini' | 'claude';
  fallbackUsed: boolean;
}

/**
 * Cloud Function AI Provider
 * Implements AIProvider interface but routes through Firebase Cloud Functions
 */
export class CloudFunctionProvider implements AIProvider {
  private temperature: number;
  private defaultMaxTokens: number;
  private generateContentFn: ReturnType<typeof httpsCallable<GenerateContentRequest, GenerateContentResponse>>;

  constructor(config: CloudFunctionProviderConfig = {}) {
    this.temperature = config.temperature ?? 0.5;
    this.defaultMaxTokens = config.defaultMaxTokens || 4096;

    // Create callable function reference
    this.generateContentFn = httpsCallable<GenerateContentRequest, GenerateContentResponse>(
      functions,
      'generateContent'
    );
  }

  async generateContent(prompt: string, maxTokens?: number): Promise<string> {
    try {
      const result: HttpsCallableResult<GenerateContentResponse> = await this.generateContentFn({
        prompt,
        maxTokens: maxTokens || this.defaultMaxTokens,
        temperature: this.temperature,
      });

      const { content, provider, fallbackUsed } = result.data;

      if (fallbackUsed) {
        console.log(`[CloudFunctionProvider] Fallback used: ${provider}`);
      }

      return content;
    } catch (error: any) {
      console.error('[CloudFunctionProvider] Error:', error);

      // Map Firebase function errors to AIServiceError
      const code = error.code || error.message;

      if (code === 'functions/unauthenticated' || code === 'unauthenticated') {
        throw new AIServiceError(
          AIErrorType.AUTHENTICATION,
          error,
          false,
          'You must be logged in to use AI features'
        );
      }

      if (code === 'functions/resource-exhausted' || code === 'resource-exhausted') {
        throw new AIServiceError(
          AIErrorType.RATE_LIMIT,
          error,
          true,
          error.message || 'Rate limit exceeded. Please wait before trying again.'
        );
      }

      if (code === 'functions/unavailable' || code === 'unavailable') {
        throw new AIServiceError(
          AIErrorType.SERVICE_UNAVAILABLE,
          error,
          true,
          'AI service temporarily unavailable. Please try again.'
        );
      }

      if (code === 'functions/invalid-argument' || code === 'invalid-argument') {
        throw new AIServiceError(
          AIErrorType.UNKNOWN,
          error,
          false,
          error.message || 'Invalid input provided'
        );
      }

      // Network errors
      if (error.message?.includes('network') || error.message?.includes('fetch')) {
        throw new AIServiceError(
          AIErrorType.NETWORK,
          error,
          true,
          'Network error. Please check your connection.'
        );
      }

      // Generic error
      throw new AIServiceError(
        AIErrorType.UNKNOWN,
        error,
        false,
        error.message || 'An unexpected error occurred'
      );
    }
  }

  getProviderName(): string {
    return 'CloudFunction';
  }

  getModel(): string {
    return 'cloud-function-proxy';
  }
}

/**
 * Create a CloudFunctionProvider instance
 * This is the recommended way to use AI in the application
 */
export function createCloudFunctionProvider(config?: CloudFunctionProviderConfig): CloudFunctionProvider {
  return new CloudFunctionProvider(config);
}
