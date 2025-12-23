/**
 * AI Provider Configuration for Cloud Functions
 * API keys are stored in Firebase environment config (not exposed to client)
 */

import { GoogleGenAI } from '@google/genai';
import Anthropic from '@anthropic-ai/sdk';
import { defineSecret } from 'firebase-functions/params';

// Define secrets (set via Firebase CLI: firebase functions:secrets:set GEMINI_API_KEY)
export const geminiApiKey = defineSecret('GEMINI_API_KEY');
export const claudeApiKey = defineSecret('CLAUDE_API_KEY');

// AI Provider types
export type AIProvider = 'gemini' | 'claude';

export interface AIConfig {
  model: string;
  temperature: number;
  maxTokens: number;
  timeoutMs: number;
}

export const GEMINI_CONFIG: AIConfig = {
  model: 'gemini-3-flash-preview',
  temperature: 0.5,
  maxTokens: 4096,
  timeoutMs: 120000, // 2 minutes
};

export const CLAUDE_CONFIG: AIConfig = {
  model: 'claude-sonnet-4-20250514',
  temperature: 0.5,
  maxTokens: 2000,
  timeoutMs: 120000, // 2 minutes
};

/**
 * Create Gemini client instance
 */
export function createGeminiClient(apiKey: string): GoogleGenAI {
  return new GoogleGenAI({ apiKey });
}

/**
 * Create Claude client instance
 */
export function createClaudeClient(apiKey: string): Anthropic {
  return new Anthropic({ apiKey });
}

/**
 * Generate content using Gemini
 */
export async function generateWithGemini(
  client: GoogleGenAI,
  prompt: string,
  config: AIConfig = GEMINI_CONFIG
): Promise<string> {
  const response = await withTimeout(
    client.models.generateContent({
      model: config.model,
      contents: prompt,
      config: {
        temperature: config.temperature,
        maxOutputTokens: config.maxTokens,
      },
    }),
    config.timeoutMs,
    'Gemini API request timed out'
  );

  // Debug logging to diagnose truncation issues
  const responseAny = response as any;
  const finishReason = responseAny.candidates?.[0]?.finishReason;
  const textLength = response.text?.length || 0;

  // Strip markdown code fences if present before checking if response ends cleanly
  let trimmedText = response.text?.trim() || '';
  if (trimmedText.endsWith('```')) {
    trimmedText = trimmedText.slice(0, -3).trim();
  }
  const textEndsCleanly = trimmedText.endsWith('}') || trimmedText.endsWith('"');

  console.log('🔍 Gemini Response Debug:', {
    hasText: !!response.text,
    textLength,
    finishReason,
    textEndsCleanly,
    usageMetadata: responseAny.usageMetadata,
  });

  // Check for truncated response (JSON that doesn't end properly)
  if (!textEndsCleanly && textLength > 0) {
    console.warn('⚠️ Gemini response appears truncated! Finish reason:', finishReason);
    console.warn('Last 100 chars:', response.text?.slice(-100));
    // Throw error to trigger Claude fallback
    throw new Error(`Gemini response truncated (finish reason: ${finishReason}). Triggering fallback.`);
  }

  const text = response.text?.trim() || '';
  if (!text) {
    throw new Error('Empty response from Gemini API');
  }

  return text;
}

/**
 * Generate content using Claude
 */
export async function generateWithClaude(
  client: Anthropic,
  prompt: string,
  config: AIConfig = CLAUDE_CONFIG
): Promise<string> {
  const response = await withTimeout(
    client.messages.create({
      model: config.model,
      max_tokens: config.maxTokens,
      temperature: config.temperature,
      messages: [{ role: 'user', content: prompt }],
    }),
    config.timeoutMs,
    'Claude API request timed out'
  );

  const content = response.content[0];
  if (content.type !== 'text' || !content.text.trim()) {
    throw new Error('Empty or invalid response from Claude API');
  }

  return content.text.trim();
}

/**
 * Timeout wrapper for promises
 */
function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number,
  message: string
): Promise<T> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(message));
    }, timeoutMs);

    promise
      .then(resolve)
      .catch(reject)
      .finally(() => clearTimeout(timeoutId));
  });
}
