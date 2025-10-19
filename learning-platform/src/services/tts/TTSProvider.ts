/**
 * TTSProvider Interface
 * Defines the contract for TTS providers (Gemini TTS, Google Cloud TTS, etc.)
 */

export type EmotionType = 'encouraging' | 'celebratory' | 'supportive' | 'neutral';

export interface TTSProviderConfig {
  apiKey: string;
  model?: string;
  defaultSpeaker?: string;
  cacheExpiry?: number; // in milliseconds
}

export interface TTSSynthesizeOptions {
  text: string;
  emotion?: EmotionType;
  customPrompt?: string; // Override emotion with custom prompt
  speaker?: string; // Override default speaker
  phoneticAnnotations?: boolean; // Support [uhm], [pause], etc.
}

export interface TTSProvider {
  /**
   * Synthesize speech from text
   * @param options - Synthesis options including text, emotion, speaker
   * @returns Audio blob ready for playback
   */
  synthesize(options: TTSSynthesizeOptions): Promise<Blob>;

  /**
   * Get available speakers/voices for this provider
   * @returns Array of speaker names
   */
  getSupportedSpeakers(): string[];

  /**
   * Get the provider name for logging/debugging
   */
  getProviderName(): string;

  /**
   * Get the current model/voice being used
   */
  getModel(): string;

  /**
   * Clear the cache
   */
  clearCache(): void;
}
