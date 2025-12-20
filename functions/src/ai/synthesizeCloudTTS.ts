/**
 * Google Cloud TTS Cloud Function
 * Uses Google Cloud Text-to-Speech API with Chirp 3 HD voice
 * Faster than Gemini TTS
 */

import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { defineSecret } from 'firebase-functions/params';
import { checkRateLimit, DEFAULT_RATE_LIMITS } from '../utils/rateLimit';

// Define secret for Google Cloud TTS API key
export const googleTTSApiKey = defineSecret('GOOGLE_TTS_API_KEY');

// Request/Response types
export interface SynthesizeCloudTTSRequest {
  text: string;
  speakingRate?: number;  // 0.25 to 4.0, default 1.25
}

export interface SynthesizeCloudTTSResponse {
  audioBase64: string;  // Base64-encoded MP3 audio
  mimeType: string;
}

// Chirp 3 HD voice configuration
const VOICE_CONFIG = {
  languageCode: 'en-US',
  name: 'en-US-Chirp3-HD-Sulafat'
};

/**
 * Normalize text for TTS pronunciation
 */
function normalizeTextForTTS(text: string): string {
  let normalized = text;

  // Replace SOH-CAH-TOA with spaced letters
  normalized = normalized.replace(/SOH-CAH-TOA/gi, 'S.O.H. C.A.H. T.O.A.');
  normalized = normalized.replace(/\bSOH\b/gi, 'S.O.H.');
  normalized = normalized.replace(/\bCAH\b/gi, 'C.A.H.');
  normalized = normalized.replace(/\bTOA\b/gi, 'T.O.A.');

  return normalized;
}

/**
 * Google Cloud TTS Cloud Function
 */
export const synthesizeCloudTTS = onCall<SynthesizeCloudTTSRequest, Promise<SynthesizeCloudTTSResponse>>(
  {
    region: 'asia-southeast1',
    timeoutSeconds: 30,  // Cloud TTS is fast
    memory: '256MiB',
    secrets: [googleTTSApiKey],
  },
  async (request) => {
    // 1. Require authentication
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Must be logged in to use TTS');
    }
    const uid = request.auth.uid;

    // 2. Validate request
    const { text, speakingRate = 1.25 } = request.data;

    if (!text || typeof text !== 'string') {
      throw new HttpsError('invalid-argument', 'Text is required');
    }

    if (text.length > 5000) {
      throw new HttpsError('invalid-argument', 'Text too long. Maximum 5000 characters.');
    }

    if (speakingRate < 0.25 || speakingRate > 4.0) {
      throw new HttpsError('invalid-argument', 'Speaking rate must be between 0.25 and 4.0');
    }

    // 3. Check rate limits
    await checkRateLimit(uid, DEFAULT_RATE_LIMITS);

    // 4. Get API key
    const apiKey = googleTTSApiKey.value();
    if (!apiKey) {
      throw new HttpsError('internal', 'Google Cloud TTS not configured');
    }

    // 5. Normalize text for pronunciation
    const normalizedText = normalizeTextForTTS(text);

    // 6. Call Google Cloud TTS API
    try {
      const requestBody = {
        input: { text: normalizedText },
        voice: VOICE_CONFIG,
        audioConfig: {
          audioEncoding: 'MP3',
          speakingRate: speakingRate,
          pitch: 0.0,
          volumeGainDb: 0.0
        }
      };

      const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Google Cloud TTS API Error:', response.status, errorData);
        throw new HttpsError('unavailable', 'TTS service temporarily unavailable');
      }

      const data = await response.json();

      if (!data.audioContent) {
        throw new HttpsError('internal', 'No audio in TTS response');
      }

      console.log('Cloud TTS request completed:', {
        uid: uid.substring(0, 8) + '...',
        textLength: text.length,
        speakingRate,
      });

      return {
        audioBase64: data.audioContent,
        mimeType: 'audio/mp3',
      };

    } catch (error: any) {
      if (error instanceof HttpsError) throw error;
      console.error('Cloud TTS synthesis error:', error);
      throw new HttpsError('internal', 'Failed to synthesize speech');
    }
  }
);
