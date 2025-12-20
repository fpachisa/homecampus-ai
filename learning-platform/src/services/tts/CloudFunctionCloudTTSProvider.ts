/**
 * Cloud Function Google Cloud TTS Provider
 *
 * Calls Google Cloud TTS (Chirp HD) through Firebase Cloud Functions.
 * Faster than Gemini TTS, uses separate API key.
 */

import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase';
import type { TTSProvider, TTSSynthesizeOptions } from './TTSProvider';

// Types matching the Cloud Function
interface SynthesizeCloudTTSRequest {
  text: string;
  speakingRate?: number;
}

interface SynthesizeCloudTTSResponse {
  audioBase64: string;
  mimeType: string;
}

interface CachedAudio {
  blob: Blob;
  timestamp: number;
}

/**
 * Cloud Function Google Cloud TTS Provider
 * Uses Chirp 3 HD voice - faster than Gemini TTS
 */
export class CloudFunctionCloudTTSProvider implements TTSProvider {
  private cache: Map<string, CachedAudio> = new Map();
  private cacheExpiry: number;
  private speakingRate: number;
  private synthesizeFn: ReturnType<typeof httpsCallable<SynthesizeCloudTTSRequest, SynthesizeCloudTTSResponse>>;

  constructor(config: { speakingRate?: number; cacheExpiry?: number } = {}) {
    this.speakingRate = config.speakingRate || 1.25;
    this.cacheExpiry = config.cacheExpiry || 1000 * 60 * 60; // 1 hour default

    // Create callable function reference
    this.synthesizeFn = httpsCallable<SynthesizeCloudTTSRequest, SynthesizeCloudTTSResponse>(
      functions,
      'synthesizeCloudTTS'
    );
  }

  async synthesize(options: TTSSynthesizeOptions): Promise<Blob> {
    const { text } = options;

    // Check cache first
    const cacheKey = this.getCacheKey(text);
    const cached = this.getFromCache(cacheKey);
    if (cached) {
      console.log('🔊 CloudFunction Cloud TTS: Using cached audio for:', text.substring(0, 50));
      return cached;
    }

    console.log('🔊 CloudFunction Cloud TTS: Synthesizing audio for:', text.substring(0, 50));

    try {
      const result = await this.synthesizeFn({
        text,
        speakingRate: this.speakingRate,
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

      console.log('✅ CloudFunction Cloud TTS: Audio synthesized successfully');
      return audioBlob;

    } catch (error: any) {
      console.error('❌ CloudFunction Cloud TTS Error:', error);

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
    return ['Sulafat (Chirp 3 HD)'];
  }

  getProviderName(): string {
    return 'CloudFunction Cloud TTS';
  }

  getModel(): string {
    return 'en-US-Chirp3-HD-Sulafat';
  }

  clearCache(): void {
    this.cache.clear();
    console.log('🗑️ CloudFunction Cloud TTS: Cache cleared');
  }

  setSpeakingRate(rate: number): void {
    if (rate < 0.25 || rate > 4.0) {
      throw new Error('Speaking rate must be between 0.25 and 4.0');
    }
    this.speakingRate = rate;
  }

  private getCacheKey(text: string): string {
    return `cloudtts_${text.trim().toLowerCase()}_${this.speakingRate}`;
  }

  private getFromCache(key: string): Blob | null {
    const cached = this.cache.get(key);

    if (!cached) return null;

    const isExpired = Date.now() - cached.timestamp > this.cacheExpiry;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return cached.blob;
  }

  private addToCache(key: string, blob: Blob): void {
    this.cache.set(key, {
      blob,
      timestamp: Date.now()
    });
  }
}
