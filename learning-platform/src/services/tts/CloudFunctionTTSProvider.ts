/**
 * Cloud Function TTS Provider
 *
 * Calls TTS through Firebase Cloud Functions instead of direct API calls.
 * This keeps API keys secure on the server side.
 */

import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase';
import type { TTSProvider, TTSSynthesizeOptions, EmotionType } from './TTSProvider';
import { GEMINI_TTS_SPEAKERS, DEFAULT_SPEAKER, type GeminiSpeaker } from './emotionPrompts';

// Types matching the Cloud Function
interface SynthesizeSpeechRequest {
  text: string;
  emotion?: EmotionType;
  speaker?: string;
  customPrompt?: string;
}

interface SynthesizeSpeechResponse {
  audioBase64: string;
  mimeType: string;
}

interface CachedAudio {
  blob: Blob;
  timestamp: number;
}

/**
 * Cloud Function TTS Provider Implementation
 * Routes TTS requests through Firebase Cloud Functions
 */
export class CloudFunctionTTSProvider implements TTSProvider {
  private defaultSpeaker: GeminiSpeaker;
  private cache: Map<string, CachedAudio> = new Map();
  private cacheExpiry: number;
  private synthesizeFn: ReturnType<typeof httpsCallable<SynthesizeSpeechRequest, SynthesizeSpeechResponse>>;

  constructor(config: { defaultSpeaker?: string; cacheExpiry?: number } = {}) {
    this.defaultSpeaker = (config.defaultSpeaker as GeminiSpeaker) || DEFAULT_SPEAKER;
    this.cacheExpiry = config.cacheExpiry || 1000 * 60 * 60; // 1 hour default

    // Create callable function reference
    this.synthesizeFn = httpsCallable<SynthesizeSpeechRequest, SynthesizeSpeechResponse>(
      functions,
      'synthesizeSpeech'
    );
  }

  async synthesize(options: TTSSynthesizeOptions): Promise<Blob> {
    const { text, emotion = 'neutral', customPrompt, speaker } = options;

    // Use provided speaker or default
    const voiceName = (speaker || this.defaultSpeaker).toLowerCase();

    // Check cache first
    const cacheKey = this.getCacheKey(text, emotion, voiceName);
    const cached = this.getFromCache(cacheKey);
    if (cached) {
      console.log('🔊 CloudFunction TTS: Using cached audio for:', text.substring(0, 50));
      return cached;
    }

    console.log('🔊 CloudFunction TTS: Synthesizing audio for:', text.substring(0, 50));
    console.log('   Emotion:', emotion, '| Speaker:', voiceName);

    try {
      const result = await this.synthesizeFn({
        text,
        emotion,
        speaker: voiceName,
        customPrompt,
      });

      const { audioBase64, mimeType } = result.data;

      // Convert base64 to Blob
      const binaryString = atob(audioBase64);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const audioBlob = new Blob([bytes], { type: mimeType });

      // Cache the result
      this.addToCache(cacheKey, audioBlob);

      console.log('✅ CloudFunction TTS: Audio synthesized successfully');
      return audioBlob;

    } catch (error: any) {
      console.error('❌ CloudFunction TTS Error:', error);

      // Map Firebase function errors
      const code = error.code || error.message;

      if (code === 'functions/unauthenticated' || code === 'unauthenticated') {
        throw new Error('You must be logged in to use TTS');
      }

      if (code === 'functions/resource-exhausted' || code === 'resource-exhausted') {
        throw new Error('Rate limit exceeded. Please wait before trying again.');
      }

      if (code === 'functions/unavailable' || code === 'unavailable') {
        throw new Error('TTS service temporarily unavailable');
      }

      throw new Error(`Failed to synthesize speech: ${error.message}`);
    }
  }

  getSupportedSpeakers(): string[] {
    return [...GEMINI_TTS_SPEAKERS];
  }

  getProviderName(): string {
    return 'CloudFunction TTS';
  }

  getModel(): string {
    return 'cloud-function-proxy';
  }

  clearCache(): void {
    this.cache.clear();
    console.log('🗑️ CloudFunction TTS: Cache cleared');
  }

  /**
   * Generate cache key
   */
  private getCacheKey(text: string, emotion: string, speaker: string): string {
    return `${text.trim().toLowerCase()}_${emotion}_${speaker}`;
  }

  /**
   * Get audio from cache if available and not expired
   */
  private getFromCache(key: string): Blob | null {
    const cached = this.cache.get(key);

    if (!cached) return null;

    // Check if cache has expired
    const isExpired = Date.now() - cached.timestamp > this.cacheExpiry;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return cached.blob;
  }

  /**
   * Add audio to cache
   */
  private addToCache(key: string, blob: Blob): void {
    this.cache.set(key, {
      blob,
      timestamp: Date.now()
    });
  }
}
