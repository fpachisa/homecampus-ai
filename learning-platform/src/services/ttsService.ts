/**
 * Google Cloud Text-to-Speech Service
 * Uses REST API for client-side text-to-speech with Sulafat (Chirp 3 HD) voice
 */

interface TTSConfig {
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

interface TTSResponse {
  audioContent: string; // Base64 encoded audio
}

interface CachedAudio {
  blob: Blob;
  timestamp: number;
}

class TTSService {
  private apiKey: string;
  private apiEndpoint = 'https://texttospeech.googleapis.com/v1/text:synthesize';
  private cache: Map<string, CachedAudio> = new Map();
  private cacheExpiry = 1000 * 60 * 60; // 1 hour cache

  // Sulafat voice configuration (Chirp 3 HD)
  private config: TTSConfig = {
    voice: {
      languageCode: 'en-US',
      name: 'en-US-Chirp3-HD-Sulafat'
    },
    audioConfig: {
      audioEncoding: 'MP3',
      speakingRate: 3.5,
      pitch: 0.0,
      volumeGainDb: 0.0
    }
  };

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error('Google Cloud TTS API key is required');
    }
    this.apiKey = apiKey;
  }

  /**
   * Convert text to speech
   * @param text - The text to convert to speech (plain text or SSML)
   * @param options - Optional configuration overrides
   * @param useSsml - If true, treat text as SSML markup
   * @returns Audio blob ready for playback
   */
  async synthesize(
    text: string,
    options?: Partial<TTSConfig['audioConfig']>,
    useSsml: boolean = false
  ): Promise<Blob> {
    // Normalize text for caching
    const cacheKey = this.getCacheKey(text, options, useSsml);

    // Check cache first
    const cached = this.getFromCache(cacheKey);
    if (cached) {
      console.log('🔊 TTS: Using cached audio for:', text.substring(0, 50));
      return cached;
    }

    console.log('🔊 TTS: Synthesizing audio for:', text.substring(0, 50));

    try {
      // Prepare request payload
      // Use 'ssml' field if SSML is enabled, otherwise use 'text'
      const requestBody = {
        input: useSsml ? { ssml: text } : { text },
        voice: this.config.voice,
        audioConfig: {
          ...this.config.audioConfig,
          ...options
        }
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
          `TTS API Error: ${response.status} ${response.statusText}. ${JSON.stringify(errorData)}`
        );
      }

      const data: TTSResponse = await response.json();

      // Convert base64 audio to Blob
      const audioBlob = this.base64ToBlob(data.audioContent, 'audio/mp3');

      // Cache the result
      this.addToCache(cacheKey, audioBlob);

      console.log('✅ TTS: Audio synthesized successfully');
      return audioBlob;

    } catch (error) {
      console.error('❌ TTS Error:', error);
      throw new Error(`Failed to synthesize speech: ${error}`);
    }
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
   * Generate cache key from text, options, and SSML flag
   */
  private getCacheKey(text: string, options?: Partial<TTSConfig['audioConfig']>, useSsml?: boolean): string {
    const optionsKey = options ? JSON.stringify(options) : '';
    const ssmlKey = useSsml ? '_ssml' : '';
    return `${text.trim().toLowerCase()}_${optionsKey}${ssmlKey}`;
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
   * Pre-cache common phrases to reduce latency
   * Call this during app initialization
   */
  async preloadCommonPhrases(phrases: string[]): Promise<void> {
    console.log('🔊 TTS: Preloading common phrases...');

    const promises = phrases.map(phrase =>
      this.synthesize(phrase).catch(err => {
        console.warn(`Failed to preload phrase: "${phrase}"`, err);
      })
    );

    await Promise.all(promises);
    console.log('✅ TTS: Common phrases preloaded');
  }

  /**
   * Clear the cache
   */
  clearCache(): void {
    this.cache.clear();
    console.log('🗑️ TTS: Cache cleared');
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

  /**
   * Get current configuration
   */
  getConfig(): TTSConfig {
    return { ...this.config };
  }
}

// Create and export singleton instance
const apiKey = import.meta.env.VITE_GOOGLE_TTS_API_KEY;

if (!apiKey) {
  console.warn('⚠️ Google Cloud TTS API key not found. Voice features will be disabled.');
}

export const ttsService = apiKey ? new TTSService(apiKey) : null;

export default TTSService;
