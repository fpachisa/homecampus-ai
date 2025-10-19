/**
 * Google Cloud TTS Provider (Legacy)
 * Uses Google Cloud Text-to-Speech REST API with Chirp 3 HD voice
 * This is the fallback provider for when Gemini TTS is unavailable
 */

import type { TTSProvider, TTSProviderConfig, TTSSynthesizeOptions } from './TTSProvider';

interface CloudTTSConfig {
  voice: {
    languageCode: string;
    name: string;
  };
  audioConfig: {
    audioEncoding: string;
    speakingRate: number;
    pitch: number;
    volumeGainDb: number;
  };
}

interface CloudTTSResponse {
  audioContent: string; // Base64 encoded audio
}

interface CachedAudio {
  blob: Blob;
  timestamp: number;
}

/**
 * Google Cloud TTS Provider
 * Maintains compatibility with existing Chirp 3 HD voice setup
 */
export class CloudTTSProvider implements TTSProvider {
  private apiKey: string;
  private apiEndpoint = 'https://texttospeech.googleapis.com/v1/text:synthesize';
  private cache: Map<string, CachedAudio> = new Map();
  private cacheExpiry: number;

  // Sulafat voice configuration (Chirp 3 HD)
  private config: CloudTTSConfig = {
    voice: {
      languageCode: 'en-US',
      name: 'en-US-Chirp3-HD-Sulafat'
    },
    audioConfig: {
      audioEncoding: 'MP3',
      speakingRate: 1.25,
      pitch: 0.0,
      volumeGainDb: 0.0
    }
  };

  constructor(config: TTSProviderConfig) {
    if (!config.apiKey) {
      throw new Error('Google Cloud TTS API key is required');
    }

    this.apiKey = config.apiKey;
    this.cacheExpiry = config.cacheExpiry || 1000 * 60 * 60; // 1 hour default
  }

  async synthesize(options: TTSSynthesizeOptions): Promise<Blob> {
    const { text } = options;

    // Normalize text for better pronunciation (e.g., SOH-CAH-TOA → S.O.H. C.A.H. T.O.A.)
    const normalizedText = this.normalizeTextForTTS(text);

    // Check cache first
    const cacheKey = this.getCacheKey(normalizedText);
    const cached = this.getFromCache(cacheKey);
    if (cached) {
      console.log('🔊 Cloud TTS: Using cached audio for:', text.substring(0, 50));
      return cached;
    }

    console.log('🔊 Cloud TTS: Synthesizing audio for:', text.substring(0, 50));

    try {
      // Prepare request payload (plain text, no SSML for Chirp 3 HD)
      const requestBody = {
        input: { text: normalizedText },
        voice: this.config.voice,
        audioConfig: this.config.audioConfig
      };

      // Call Google Cloud TTS API
      const response = await fetch(`${this.apiEndpoint}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `Cloud TTS API Error: ${response.status} ${response.statusText}. ${JSON.stringify(errorData)}`
        );
      }

      const data: CloudTTSResponse = await response.json();

      // Convert base64 audio to Blob
      const audioBlob = this.base64ToBlob(data.audioContent, 'audio/mp3');

      // Cache the result
      this.addToCache(cacheKey, audioBlob);

      console.log('✅ Cloud TTS: Audio synthesized successfully');
      return audioBlob;

    } catch (error) {
      console.error('❌ Cloud TTS Error:', error);
      throw new Error(`Failed to synthesize speech with Cloud TTS: ${error}`);
    }
  }

  getSupportedSpeakers(): string[] {
    // Cloud TTS uses fixed voice, no speaker selection
    return ['Sulafat (Chirp 3 HD)'];
  }

  getProviderName(): string {
    return 'Google Cloud TTS';
  }

  getModel(): string {
    return this.config.voice.name;
  }

  clearCache(): void {
    this.cache.clear();
    console.log('🗑️ Cloud TTS: Cache cleared');
  }

  /**
   * Normalize text for TTS pronunciation
   * Handles acronyms and terms that need special pronunciation
   */
  private normalizeTextForTTS(text: string): string {
    let normalized = text;

    // Replace SOH-CAH-TOA with spaced letters for proper pronunciation
    normalized = normalized.replace(/SOH-CAH-TOA/gi, 'S.O.H. C.A.H. T.O.A.');

    // Replace individual acronyms when standalone
    normalized = normalized.replace(/\bSOH\b/gi, 'S.O.H.');
    normalized = normalized.replace(/\bCAH\b/gi, 'C.A.H.');
    normalized = normalized.replace(/\bTOA\b/gi, 'T.O.A.');

    // Add more replacements as needed for other math terms
    // Example: normalized = normalized.replace(/\bLCM\b/g, 'L.C.M.');

    return normalized;
  }

  /**
   * Convert base64 string to Blob
   */
  private base64ToBlob(base64: string, mimeType: string): Blob {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  }

  /**
   * Generate cache key from text
   */
  private getCacheKey(text: string): string {
    return text.trim().toLowerCase();
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

  /**
   * Update speaking rate (0.25 to 4.0)
   */
  setSpeakingRate(rate: number): void {
    if (rate < 0.25 || rate > 4.0) {
      throw new Error('Speaking rate must be between 0.25 and 4.0');
    }
    this.config.audioConfig.speakingRate = rate;
  }
}
