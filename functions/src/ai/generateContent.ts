/**
 * AI Content Generation Cloud Function
 * Securely proxies AI requests with rate limiting and fallback
 */

import { onCall, HttpsError } from 'firebase-functions/v2/https';
import {
  geminiApiKey,
  claudeApiKey,
  createGeminiClient,
  createClaudeClient,
  generateWithGemini,
  generateWithClaude,
  GEMINI_CONFIG,
  CLAUDE_CONFIG,
} from '../config/ai';
import { checkRateLimit, validateInput, DEFAULT_RATE_LIMITS } from '../utils/rateLimit';

// Request/Response types
export interface GenerateContentRequest {
  prompt: string;
  userInput?: string;  // Optional: raw user input for validation (separate from full prompt)
  maxTokens?: number;
  temperature?: number;
  preferredProvider?: 'gemini' | 'claude';
}

export interface GenerateContentResponse {
  content: string;
  provider: 'gemini' | 'claude';
  fallbackUsed: boolean;
}

/**
 * Main AI content generation function
 * - Requires authentication
 * - Enforces rate limits
 * - Validates input
 * - Falls back to Claude if Gemini fails
 */
export const generateContent = onCall<GenerateContentRequest, Promise<GenerateContentResponse>>(
  {
    region: 'asia-southeast1',
    timeoutSeconds: 180, // 3 minutes for AI operations
    memory: '256MiB',
    secrets: [geminiApiKey, claudeApiKey],
    // enforceAppCheck: true, // Enable in production for extra security
  },
  async (request) => {
    // 1. Require authentication
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Must be logged in to use AI features');
    }
    const uid = request.auth.uid;

    // 2. Validate request data
    const { prompt, userInput, maxTokens, temperature, preferredProvider } = request.data;

    if (!prompt) {
      throw new HttpsError('invalid-argument', 'Prompt is required');
    }

    // 3. Validate user input (if provided separately for stricter validation)
    if (userInput) {
      validateInput(userInput, DEFAULT_RATE_LIMITS);
    }

    // 3.1 SECURITY: Always validate prompt length as fallback (prevents malicious bypass)
    // Max prompt length = system prompt (~5000) + context (~3000) + user input (1000) = ~10000
    // We use 15000 to be safe but still catch abuse
    const MAX_PROMPT_LENGTH = 15000;
    if (prompt.length > MAX_PROMPT_LENGTH) {
      throw new HttpsError(
        'invalid-argument',
        `Request too large. Please shorten your message.`
      );
    }

    // 4. Check rate limits
    await checkRateLimit(uid, DEFAULT_RATE_LIMITS);

    // 5. Get API keys from secrets
    const geminiKey = geminiApiKey.value();
    const claudeKey = claudeApiKey.value();

    if (!geminiKey && !claudeKey) {
      console.error('No AI API keys configured');
      throw new HttpsError('internal', 'AI service not configured');
    }

    // 6. Configure AI settings
    const geminiConfig = {
      ...GEMINI_CONFIG,
      ...(maxTokens && { maxTokens }),
      ...(temperature !== undefined && { temperature }),
    };

    const claudeConfig = {
      ...CLAUDE_CONFIG,
      ...(maxTokens && { maxTokens }),
      ...(temperature !== undefined && { temperature }),
    };

    // 7. Attempt generation with primary provider (fallback on failure)
    let content: string;
    let provider: 'gemini' | 'claude';
    let fallbackUsed = false;

    const useClaude = preferredProvider === 'claude' || !geminiKey;

    if (!useClaude && geminiKey) {
      // Try Gemini first
      try {
        const geminiClient = createGeminiClient(geminiKey);
        content = await generateWithGemini(geminiClient, prompt, geminiConfig);
        provider = 'gemini';
      } catch (geminiError: any) {
        console.warn('Gemini failed, attempting Claude fallback:', geminiError.message);

        // Fallback to Claude
        if (claudeKey) {
          try {
            const claudeClient = createClaudeClient(claudeKey);
            content = await generateWithClaude(claudeClient, prompt, claudeConfig);
            provider = 'claude';
            fallbackUsed = true;
          } catch (claudeError: any) {
            console.error('Both AI providers failed:', {
              gemini: geminiError.message,
              claude: claudeError.message,
            });
            throw new HttpsError('unavailable', 'AI service temporarily unavailable. Please try again.');
          }
        } else {
          console.error('Gemini failed and no Claude key configured:', geminiError.message);
          throw new HttpsError('unavailable', 'AI service temporarily unavailable. Please try again.');
        }
      }
    } else if (claudeKey) {
      // Use Claude directly
      try {
        const claudeClient = createClaudeClient(claudeKey);
        content = await generateWithClaude(claudeClient, prompt, claudeConfig);
        provider = 'claude';
      } catch (claudeError: any) {
        // Try Gemini as fallback if available
        if (geminiKey && !useClaude) {
          try {
            const geminiClient = createGeminiClient(geminiKey);
            content = await generateWithGemini(geminiClient, prompt, geminiConfig);
            provider = 'gemini';
            fallbackUsed = true;
          } catch (geminiError: any) {
            console.error('Both AI providers failed:', {
              claude: claudeError.message,
              gemini: geminiError.message,
            });
            throw new HttpsError('unavailable', 'AI service temporarily unavailable. Please try again.');
          }
        } else {
          console.error('Claude failed:', claudeError.message);
          throw new HttpsError('unavailable', 'AI service temporarily unavailable. Please try again.');
        }
      }
    } else {
      throw new HttpsError('internal', 'No AI provider configured');
    }

    // 8. Log usage (for monitoring, no PII)
    console.log('AI request completed:', {
      uid: uid.substring(0, 8) + '...', // Truncate for privacy
      provider,
      fallbackUsed,
      promptLength: prompt.length,
      responseLength: content.length,
      contentEndsCleanly: content.trim().endsWith('}') || content.trim().endsWith('"'),
      last50Chars: content.slice(-50), // Help diagnose truncation
    });

    return {
      content,
      provider,
      fallbackUsed,
    };
  }
);

/**
 * Batch generation for multiple prompts (e.g., pre-generating greetings)
 * More restrictive rate limits
 */
export const generateContentBatch = onCall<
  { prompts: Array<{ id: string; prompt: string }> },
  Promise<{ results: Array<{ id: string; content: string; error?: string }> }>
>(
  {
    region: 'asia-southeast1',
    timeoutSeconds: 300, // 5 minutes for batch
    memory: '512MiB',
    secrets: [geminiApiKey, claudeApiKey],
  },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Must be logged in');
    }

    const { prompts } = request.data;

    if (!prompts || !Array.isArray(prompts) || prompts.length === 0) {
      throw new HttpsError('invalid-argument', 'Prompts array is required');
    }

    if (prompts.length > 10) {
      throw new HttpsError('invalid-argument', 'Maximum 10 prompts per batch');
    }

    // Check rate limit once for the batch
    await checkRateLimit(request.auth.uid, {
      ...DEFAULT_RATE_LIMITS,
      maxRequestsPerMinute: 5, // More restrictive for batch
    });

    const geminiKey = geminiApiKey.value();
    if (!geminiKey) {
      throw new HttpsError('internal', 'AI service not configured');
    }

    const geminiClient = createGeminiClient(geminiKey);
    const results: Array<{ id: string; content: string; error?: string }> = [];

    // Process sequentially to avoid rate limits
    for (const { id, prompt } of prompts) {
      try {
        // Skip validation for batch prompts (system-generated)
        const content = await generateWithGemini(geminiClient, prompt);
        results.push({ id, content });
      } catch (error: any) {
        results.push({ id, content: '', error: error.message });
      }
    }

    return { results };
  }
);
