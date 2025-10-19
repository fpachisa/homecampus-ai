/**
 * Gemini TTS Provider
 * Uses Gemini 2.5 Flash TTS with emotion-driven voice context control
 *
 * Note: This uses REST API approach. For future enhancement, consider
 * migrating to @google/genai SDK (newer) which has native TTS support.
 */

import type { TTSProvider, TTSProviderConfig, TTSSynthesizeOptions } from './TTSProvider';
import { buildTTSPrompt, processPhoneticAnnotations, GEMINI_TTS_SPEAKERS, DEFAULT_SPEAKER, type GeminiSpeaker } from './emotionPrompts';

interface CachedAudio {
  blob: Blob;
  timestamp: number;
}

interface GeminiTTSResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        inlineData?: {
          mimeType: string;
          data: string; // Base64-encoded PCM audio
        };
        text?: string;
      }>;
    };
  }>;
}

/**
 * Gemini TTS Provider Implementation
 * Uses gemini-2.5-flash-preview-tts model with prompt-based voice control
 */
export class GeminiTTSProvider implements TTSProvider {
  private apiKey: string;
  private model: string;
  private defaultSpeaker: GeminiSpeaker;
  private cache: Map<string, CachedAudio> = new Map();
  private cacheExpiry: number;
  private apiEndpoint = 'https://generativelanguage.googleapis.com/v1beta/models';

  constructor(config: TTSProviderConfig) {
    if (!config.apiKey) {
      throw new Error('Gemini API key is required for TTS');
    }

    this.apiKey = config.apiKey;
    this.model = config.model || 'gemini-2.5-flash-preview-tts';
    this.defaultSpeaker = (config.defaultSpeaker as GeminiSpeaker) || DEFAULT_SPEAKER;
    this.cacheExpiry = config.cacheExpiry || 1000 * 60 * 60; // 1 hour default
  }

  async synthesize(options: TTSSynthesizeOptions): Promise<Blob> {
    const { text, emotion = 'neutral', customPrompt, speaker, phoneticAnnotations = true } = options;

    // Process text for phonetic annotations if enabled
    const processedText = phoneticAnnotations ? processPhoneticAnnotations(text) : text;

    // Build prompt with emotion or use custom prompt
    const prompt = customPrompt || buildTTSPrompt(processedText, emotion);

    // Use provided speaker or default
    // IMPORTANT: Speaker names MUST be lowercase for Gemini TTS
    const voiceName = (speaker || this.defaultSpeaker).toLowerCase();

    // Check cache first
    const cacheKey = this.getCacheKey(prompt, voiceName);
    const cached = this.getFromCache(cacheKey);
    if (cached) {
      console.log('🔊 Gemini TTS: Using cached audio for:', text.substring(0, 50));
      return cached;
    }

    console.log('🔊 Gemini TTS: Synthesizing audio for:', text.substring(0, 50));
    console.log('   Emotion:', emotion, '| Speaker:', voiceName);

    try {
      // Build request body for Gemini TTS
      const requestBody = {
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ],
        generationConfig: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: {
                voiceName: voiceName
              }
            }
          }
        }
      };

      // Call Gemini TTS API
      const url = `${this.apiEndpoint}/${this.model}:generateContent`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': this.apiKey
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `Gemini TTS API Error: ${response.status} ${response.statusText}. ${JSON.stringify(errorData)}`
        );
      }

      const data: GeminiTTSResponse = await response.json();

      // Extract audio data from response
      const audioData = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!audioData) {
        throw new Error('No audio data in Gemini TTS response');
      }

      // Convert base64 PCM to WAV Blob
      // Gemini returns: Base64-encoded PCM audio at 24kHz, mono, 16-bit
      const audioBlob = this.base64ToWavBlob(audioData, 24000, 1, 16);

      // Cache the result
      this.addToCache(cacheKey, audioBlob);

      console.log('✅ Gemini TTS: Audio synthesized successfully');
      return audioBlob;

    } catch (error) {
      console.error('❌ Gemini TTS Error:', error);
      throw new Error(`Failed to synthesize speech with Gemini TTS: ${error}`);
    }
  }

  getSupportedSpeakers(): string[] {
    return [...GEMINI_TTS_SPEAKERS];
  }

  getProviderName(): string {
    return 'Gemini TTS';
  }

  getModel(): string {
    return this.model;
  }

  clearCache(): void {
    this.cache.clear();
    console.log('🗑️ Gemini TTS: Cache cleared');
  }

  /**
   * Convert base64 PCM data to WAV Blob
   * @param base64Data - Base64-encoded PCM audio
   * @param sampleRate - Sample rate (24000 Hz for Gemini)
   * @param numChannels - Number of channels (1 for mono)
   * @param bitsPerSample - Bits per sample (16 for Gemini)
   */
  private base64ToWavBlob(
    base64Data: string,
    sampleRate: number,
    numChannels: number,
    bitsPerSample: number
  ): Blob {
    // Decode base64 to raw PCM data
    const pcmData = atob(base64Data);
    const pcmBytes = new Uint8Array(pcmData.length);
    for (let i = 0; i < pcmData.length; i++) {
      pcmBytes[i] = pcmData.charCodeAt(i);
    }

    // Create WAV header
    const wavHeader = this.createWavHeader(pcmBytes.length, sampleRate, numChannels, bitsPerSample);

    // Combine header and PCM data
    const wavData = new Uint8Array(wavHeader.length + pcmBytes.length);
    wavData.set(wavHeader, 0);
    wavData.set(pcmBytes, wavHeader.length);

    return new Blob([wavData], { type: 'audio/wav' });
  }

  /**
   * Create WAV file header
   */
  private createWavHeader(
    dataLength: number,
    sampleRate: number,
    numChannels: number,
    bitsPerSample: number
  ): Uint8Array {
    const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
    const blockAlign = numChannels * (bitsPerSample / 8);
    const header = new ArrayBuffer(44);
    const view = new DataView(header);

    // "RIFF" chunk descriptor
    this.writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + dataLength, true);
    this.writeString(view, 8, 'WAVE');

    // "fmt " sub-chunk
    this.writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
    view.setUint16(20, 1, true); // AudioFormat (1 for PCM)
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, byteRate, true);
    view.setUint16(32, blockAlign, true);
    view.setUint16(34, bitsPerSample, true);

    // "data" sub-chunk
    this.writeString(view, 36, 'data');
    view.setUint32(40, dataLength, true);

    return new Uint8Array(header);
  }

  /**
   * Write string to DataView
   */
  private writeString(view: DataView, offset: number, string: string): void {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  /**
   * Generate cache key
   */
  private getCacheKey(prompt: string, speaker: string): string {
    return `${prompt.trim().toLowerCase()}_${speaker}`;
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
