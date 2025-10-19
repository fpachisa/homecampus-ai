/**
 * Emotion-to-Prompt Mapping System
 * Maps emotion types to voice context prompts for Gemini TTS
 */

import type { EmotionType } from './TTSProvider';

/**
 * Emotion-based voice prompts
 * These prompts control the tone, pace, and style of the synthesized speech
 */
export const EMOTION_PROMPTS: Record<EmotionType, string> = {
  encouraging: 'Say the following in an encouraging, supportive way with warmth:',
  celebratory: 'Say the following with excitement and celebration, expressing joy:',
  supportive: 'Say the following in a warm, supportive, and reassuring way:',
  neutral: 'Say the following in a clear, friendly, and conversational way:',
};

/**
 * Get voice prompt for emotion
 * @param emotion - Emotion type
 * @returns Voice context prompt
 */
export function getEmotionPrompt(emotion: EmotionType = 'neutral'): string {
  return EMOTION_PROMPTS[emotion];
}

/**
 * Build complete TTS prompt with emotion
 * @param text - Text to speak
 * @param emotion - Emotion type
 * @returns Complete prompt for TTS
 */
export function buildTTSPrompt(text: string, emotion: EmotionType = 'neutral'): string {
  const emotionPrompt = getEmotionPrompt(emotion);
  return `${emotionPrompt} "${text}"`;
}

/**
 * Gemini TTS supported speakers/voices
 * All speaker names are lowercase and case-sensitive
 * Source: Gemini API error response (2025-10-17)
 */
export const GEMINI_TTS_SPEAKERS = [
  'achernar',
  'achird',
  'algenib',
  'algieba',
  'alnilam',
  'aoede',
  'autonoe',
  'callirrhoe',
  'charon',
  'despina',
  'enceladus',
  'erinome',
  'fenrir',
  'gacrux',
  'iapetus',
  'kore',
  'laomedeia',
  'leda',
  'orus',
  'puck',
  'pulcherrima',
  'rasalgethi',
  'sadachbia',
  'sadaltager',
  'schedar',
  'sulafat',
  'umbriel',
  'vindemiatrix',
  'zephyr',
  'zubenelgenubi'
] as const;

export type GeminiSpeaker = typeof GEMINI_TTS_SPEAKERS[number];

/**
 * Default speaker for the application
 * Note: All speaker names must be lowercase
 */
export const DEFAULT_SPEAKER: GeminiSpeaker = 'sulafat';

/**
 * Process text for phonetic annotations
 * Gemini TTS supports annotations like [uhm], [pause], etc.
 * @param text - Raw text
 * @returns Text with phonetic annotations processed
 */
export function processPhoneticAnnotations(text: string): string {
  // Gemini TTS natively supports these annotations, so just return as-is
  // Future: Could add custom annotation processing here
  return text;
}
