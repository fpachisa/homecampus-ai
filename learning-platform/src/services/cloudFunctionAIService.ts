/**
 * Cloud Function AI Service
 *
 * Secure AI service that routes all requests through Firebase Cloud Functions.
 * API keys are never exposed to the client.
 *
 * Benefits over direct API calls:
 * - API keys stored securely on server
 * - Server-side rate limiting (per-user)
 * - Input validation and spam detection
 * - Automatic Gemini → Claude fallback
 * - Usage monitoring and cost control
 */

import type { AIService } from './aiService';
import BaseAIService from './BaseAIService';
import { CloudFunctionProvider } from './providers/CloudFunctionProvider';

// Singleton provider instance for raw generation
let _cloudFunctionProvider: CloudFunctionProvider | null = null;

function getCloudFunctionProvider(): CloudFunctionProvider {
  if (!_cloudFunctionProvider) {
    _cloudFunctionProvider = new CloudFunctionProvider({
      temperature: 0.5,
      defaultMaxTokens: 4096,
    });
  }
  return _cloudFunctionProvider;
}

/**
 * Create a Cloud Function-backed AI Service
 * This is the recommended way to use AI in production
 */
export function createCloudFunctionAIService(): AIService {
  return new BaseAIService(getCloudFunctionProvider());
}

// Lazy singleton instance
let _cloudFunctionAIServiceInstance: AIService | null = null;

/**
 * Get the singleton Cloud Function AI Service instance
 * Use this for all AI operations in the application
 */
export function getCloudFunctionAIService(): AIService {
  if (!_cloudFunctionAIServiceInstance) {
    _cloudFunctionAIServiceInstance = createCloudFunctionAIService();
  }
  return _cloudFunctionAIServiceInstance;
}

/**
 * Check if Cloud Functions should be used
 * Returns true in production, false in development with emulators
 */
export function shouldUseCloudFunctions(): boolean {
  // Always use Cloud Functions in production
  if (import.meta.env.PROD) {
    return true;
  }

  // In development, use Cloud Functions unless explicitly disabled
  // Set VITE_USE_DIRECT_AI=true to bypass Cloud Functions (for debugging)
  const useDirectAI = import.meta.env.VITE_USE_DIRECT_AI === 'true';

  return !useDirectAI;
}

/**
 * Simple text generation using Cloud Functions
 * This is a direct wrapper for services that need raw AI completion
 */
export async function generateWithCloudFunction(prompt: string): Promise<string> {
  const provider = getCloudFunctionProvider();
  return provider.generateContent(prompt);
}

export default { getCloudFunctionAIService, createCloudFunctionAIService, shouldUseCloudFunctions, generateWithCloudFunction };
