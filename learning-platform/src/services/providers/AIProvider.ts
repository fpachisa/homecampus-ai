/**
 * AIProvider Interface
 * Defines the contract for raw API calls to different AI providers
 * Each provider (Gemini, Claude, etc.) implements this interface
 */

export interface AIProviderConfig {
  apiKey: string;
  model?: string;
  temperature?: number;
  defaultMaxTokens?: number;
}

export interface AIProvider {
  /**
   * Make a raw API call to generate content from a prompt
   * @param prompt - The prompt to send to the AI
   * @param maxTokens - Optional max tokens override
   * @returns The generated text response
   */
  generateContent(prompt: string, maxTokens?: number): Promise<string>;

  /**
   * Get the provider name for logging/debugging
   */
  getProviderName(): string;

  /**
   * Get the current model being used
   */
  getModel(): string;
}
