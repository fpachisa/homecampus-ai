/**
 * TTS (Text-to-Speech) Cloud Function
 * Securely proxies TTS requests through Firebase Cloud Functions
 *
 * Uses Gemini TTS API with emotion-based voice control
 */

import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { geminiApiKey } from '../config/ai';
import { checkRateLimit, validateInput, DEFAULT_RATE_LIMITS } from '../utils/rateLimit';

// Emotion types supported
type EmotionType = 'encouraging' | 'celebratory' | 'supportive' | 'neutral' | 'warm' | 'excited' | 'proud';

// Emotion-based voice prompts
const EMOTION_PROMPTS: Record<EmotionType, string> = {
  encouraging: 'Say the following in an encouraging, supportive way with warmth:',
  celebratory: 'Say the following with excitement and celebration, expressing joy:',
  supportive: 'Say the following in a warm, supportive, and reassuring way:',
  neutral: 'Say the following in a clear, friendly, and conversational way:',
  warm: 'Say the following in a warm, welcoming, and friendly way:',
  excited: 'Say the following with high energy, enthusiasm, and excitement:',
  proud: 'Say the following with a sense of pride, accomplishment, and satisfaction:',
};

// Gemini TTS supported speakers
const VALID_SPEAKERS = [
  'achernar', 'achird', 'algenib', 'algieba', 'alnilam', 'aoede', 'autonoe',
  'callirrhoe', 'charon', 'despina', 'enceladus', 'erinome', 'fenrir', 'gacrux',
  'iapetus', 'kore', 'laomedeia', 'leda', 'orus', 'puck', 'pulcherrima',
  'rasalgethi', 'sadachbia', 'sadaltager', 'schedar', 'sulafat', 'umbriel',
  'vindemiatrix', 'zephyr', 'zubenelgenubi'
];

const DEFAULT_SPEAKER = 'sulafat';
const TTS_MODEL = 'gemini-2.5-flash-preview-tts';

// Request/Response types
export interface SynthesizeSpeechRequest {
  text: string;
  emotion?: EmotionType;
  speaker?: string;
  customPrompt?: string;
}

export interface SynthesizeSpeechResponse {
  audioBase64: string;  // Base64-encoded WAV audio
  mimeType: string;
}

/**
 * Build TTS prompt with emotion
 */
function buildTTSPrompt(text: string, emotion: EmotionType = 'neutral'): string {
  const emotionPrompt = EMOTION_PROMPTS[emotion];
  return `${emotionPrompt} "${text}"`;
}

/**
 * Convert base64 PCM to WAV format
 */
function pcmToWav(pcmBase64: string, sampleRate: number = 24000): string {
  // Decode base64 to raw bytes
  const pcmData = Buffer.from(pcmBase64, 'base64');
  const numChannels = 1;
  const bitsPerSample = 16;
  const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
  const blockAlign = numChannels * (bitsPerSample / 8);

  // Create WAV header (44 bytes)
  const header = Buffer.alloc(44);

  // RIFF chunk descriptor
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + pcmData.length, 4);
  header.write('WAVE', 8);

  // fmt sub-chunk
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16); // Subchunk1Size
  header.writeUInt16LE(1, 20);  // AudioFormat (PCM)
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);

  // data sub-chunk
  header.write('data', 36);
  header.writeUInt32LE(pcmData.length, 40);

  // Combine header and PCM data
  const wavData = Buffer.concat([header, pcmData]);
  return wavData.toString('base64');
}

/**
 * Synthesize Speech Cloud Function
 */
export const synthesizeSpeech = onCall<SynthesizeSpeechRequest, Promise<SynthesizeSpeechResponse>>(
  {
    region: 'asia-southeast1',
    timeoutSeconds: 60,
    memory: '256MiB',
    secrets: [geminiApiKey],
  },
  async (request) => {
    // 1. Require authentication
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Must be logged in to use TTS');
    }
    const uid = request.auth.uid;

    // 2. Validate request
    const { text, emotion = 'neutral', speaker, customPrompt } = request.data;

    if (!text || typeof text !== 'string') {
      throw new HttpsError('invalid-argument', 'Text is required');
    }

    // 3. Validate input (with lower limits for TTS - text only, no prompts)
    const ttsLimits = {
      ...DEFAULT_RATE_LIMITS,
      maxInputLength: 2000, // TTS text limit
    };
    validateInput(text, ttsLimits);

    // 4. Check rate limits (shared with AI calls)
    await checkRateLimit(uid, DEFAULT_RATE_LIMITS);

    // 5. Validate speaker
    const voiceName = (speaker || DEFAULT_SPEAKER).toLowerCase();
    if (!VALID_SPEAKERS.includes(voiceName)) {
      throw new HttpsError('invalid-argument', `Invalid speaker: ${voiceName}`);
    }

    // 6. Validate emotion
    if (emotion && !EMOTION_PROMPTS[emotion]) {
      throw new HttpsError('invalid-argument', `Invalid emotion: ${emotion}`);
    }

    // 7. Get API key
    const apiKey = geminiApiKey.value();
    if (!apiKey) {
      throw new HttpsError('internal', 'TTS service not configured');
    }

    // 8. Build prompt
    const prompt = customPrompt || buildTTSPrompt(text, emotion);

    // 9. Call Gemini TTS API
    try {
      const requestBody = {
        contents: [
          {
            parts: [{ text: prompt }]
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

      const url = `https://generativelanguage.googleapis.com/v1beta/models/${TTS_MODEL}:generateContent`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Gemini TTS API Error:', response.status, errorData);
        throw new HttpsError('unavailable', 'TTS service temporarily unavailable');
      }

      const data = await response.json();
      const audioData = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

      if (!audioData) {
        throw new HttpsError('internal', 'No audio data in TTS response');
      }

      // Convert PCM to WAV
      const wavBase64 = pcmToWav(audioData);

      console.log('TTS request completed:', {
        uid: uid.substring(0, 8) + '...',
        textLength: text.length,
        emotion,
        speaker: voiceName,
      });

      return {
        audioBase64: wavBase64,
        mimeType: 'audio/wav',
      };

    } catch (error: any) {
      if (error instanceof HttpsError) throw error;
      console.error('TTS synthesis error:', error);
      throw new HttpsError('internal', 'Failed to synthesize speech');
    }
  }
);
