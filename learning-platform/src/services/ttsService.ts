/**
 * TTS Service with Provider Pattern
 * Supports multiple TTS providers: Gemini TTS (primary), Google Cloud TTS (fallback)
 */

import type { TTSProvider, TTSSynthesizeOptions, EmotionType } from './tts/TTSProvider';
import { GeminiTTSProvider } from './tts/GeminiTTSProvider';
import { CloudTTSProvider } from './tts/CloudTTSProvider';

type TTSProviderType = 'gemini' | 'cloud';

/**
 * TTS Service with automatic fallback
 * Uses Gemini TTS by default, falls back to Cloud TTS if unavailable
 */
class TTSService {
  private primaryProvider: TTSProvider | null = null;
  private fallbackProvider: TTSProvider | null = null;

  constructor(
    providerType: TTSProviderType = 'gemini',
    geminiApiKey?: string,
    cloudApiKey?: string,
    defaultSpeaker?: string
  ) {
    // Initialize primary provider based on type
    if (providerType === 'gemini' && geminiApiKey) {
      try {
        this.primaryProvider = new GeminiTTSProvider({
          apiKey: geminiApiKey,
          defaultSpeaker: defaultSpeaker || 'callirrhoe'
        });
        console.log('✅ Gemini TTS initialized as primary provider');
      } catch (error) {
        console.warn('⚠️ Failed to initialize Gemini TTS:', error);
      }
    }

    if (providerType === 'cloud' && cloudApiKey) {
      try {
        this.primaryProvider = new CloudTTSProvider({
          apiKey: cloudApiKey
        });
        console.log('✅ Cloud TTS initialized as primary provider');
      } catch (error) {
        console.warn('⚠️ Failed to initialize Cloud TTS:', error);
      }
    }

    // Initialize fallback provider (opposite of primary)
    if (providerType === 'gemini' && cloudApiKey) {
      try {
        this.fallbackProvider = new CloudTTSProvider({
          apiKey: cloudApiKey
        });
        console.log('✅ Cloud TTS initialized as fallback provider');
      } catch (error) {
        console.warn('⚠️ Failed to initialize fallback Cloud TTS:', error);
      }
    }

    if (providerType === 'cloud' && geminiApiKey) {
      try {
        this.fallbackProvider = new GeminiTTSProvider({
          apiKey: geminiApiKey,
          defaultSpeaker: defaultSpeaker || 'callirrhoe'
        });
        console.log('✅ Gemini TTS initialized as fallback provider');
      } catch (error) {
        console.warn('⚠️ Failed to initialize fallback Gemini TTS:', error);
      }
    }

    if (!this.primaryProvider && !this.fallbackProvider) {
      console.warn('⚠️ No TTS providers available. Voice features will be disabled.');
    }
  }

  /**
   * Synthesize speech with automatic fallback
   * @param text - Text to speak
   * @param emotion - Emotion/tone for the voice (used by Gemini TTS)
   * @param speaker - Optional speaker override
   * @returns Audio blob ready for playback
   */
  async synthesize(
    text: string,
    emotion: EmotionType = 'neutral',
    speaker?: string
  ): Promise<Blob> {
    // Ensure speaker name is lowercase (Gemini TTS requirement)
    const normalizedSpeaker = speaker?.toLowerCase();

    const options: TTSSynthesizeOptions = {
      text,
      emotion,
      speaker: normalizedSpeaker
    };

    // Try primary provider first
    if (this.primaryProvider) {
      try {
        return await this.primaryProvider.synthesize(options);
      } catch (error) {
        console.error(`❌ ${this.primaryProvider.getProviderName()} failed:`, error);
        console.log('🔄 Attempting fallback provider...');
      }
    }

    // Fallback to secondary provider
    if (this.fallbackProvider) {
      try {
        return await this.fallbackProvider.synthesize(options);
      } catch (error) {
        console.error(`❌ ${this.fallbackProvider.getProviderName()} failed:`, error);
        throw new Error('All TTS providers failed');
      }
    }

    throw new Error('No TTS providers available');
  }

  /**
   * Get supported speakers from current provider
   */
  getSupportedSpeakers(): string[] {
    return this.primaryProvider?.getSupportedSpeakers() || [];
  }

  /**
   * Get current provider name
   */
  getProviderName(): string {
    return this.primaryProvider?.getProviderName() || 'None';
  }

  /**
   * Clear cache for all providers
   */
  clearCache(): void {
    this.primaryProvider?.clearCache();
    this.fallbackProvider?.clearCache();
  }

  /**
   * Pre-cache common phrases
   */
  async preloadCommonPhrases(phrases: string[], emotion: EmotionType = 'neutral'): Promise<void> {
    console.log('🔊 TTS: Preloading common phrases...');

    const promises = phrases.map(phrase =>
      this.synthesize(phrase, emotion).catch(err => {
        console.warn(`Failed to preload phrase: "${phrase}"`, err);
      })
    );

    await Promise.all(promises);
    console.log('✅ TTS: Common phrases preloaded');
  }

  /**
   * Check if TTS is available
   */
  isAvailable(): boolean {
    return this.primaryProvider !== null || this.fallbackProvider !== null;
  }

  /**
   * Set speaking rate (Cloud TTS only)
   * @deprecated Use emotion parameter instead for better voice control
   */
  setSpeakingRate(rate: number): void {
    if (this.primaryProvider instanceof CloudTTSProvider) {
      this.primaryProvider.setSpeakingRate(rate);
    }
    if (this.fallbackProvider instanceof CloudTTSProvider) {
      this.fallbackProvider.setSpeakingRate(rate);
    }
  }
}

// Initialize TTS service based on environment configuration
const providerType = (import.meta.env.VITE_TTS_PROVIDER || 'gemini') as TTSProviderType;
const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
const cloudApiKey = import.meta.env.VITE_GOOGLE_TTS_API_KEY;
const defaultSpeaker = import.meta.env.VITE_TTS_SPEAKER || 'callirrhoe';

console.log(`🔧 TTS Configuration: Provider=${providerType}, Speaker=${defaultSpeaker}`);

export const ttsService = new TTSService(
  providerType,
  geminiApiKey,
  cloudApiKey,
  defaultSpeaker
);

export default TTSService;
