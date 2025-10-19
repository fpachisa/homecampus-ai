/**
 * Speaker Configuration Hook
 * Manages TTS speaker selection and preferences
 */

import { useState, useEffect } from 'react';
import { ttsService } from '../services/ttsService';

const SPEAKER_STORAGE_KEY = 'tts_speaker_preference';

export interface SpeakerConfig {
  currentSpeaker: string;
  availableSpeakers: string[];
  setSpeaker: (speaker: string) => void;
  resetToDefault: () => void;
}

/**
 * Hook for managing TTS speaker configuration
 * Persists speaker preference to localStorage
 */
export const useSpeakerConfig = (): SpeakerConfig => {
  const defaultSpeaker = import.meta.env.VITE_TTS_SPEAKER || 'callirrhoe';
  const [currentSpeaker, setCurrentSpeaker] = useState<string>(defaultSpeaker);
  const [availableSpeakers, setAvailableSpeakers] = useState<string[]>([]);

  // Load speaker preference from localStorage on mount
  useEffect(() => {
    const storedSpeaker = localStorage.getItem(SPEAKER_STORAGE_KEY);
    if (storedSpeaker) {
      // Normalize to lowercase (Gemini TTS requirement)
      const normalizedSpeaker = storedSpeaker.toLowerCase();
      setCurrentSpeaker(normalizedSpeaker);

      // Update localStorage if it was capitalized
      if (storedSpeaker !== normalizedSpeaker) {
        localStorage.setItem(SPEAKER_STORAGE_KEY, normalizedSpeaker);
      }
    }

    // Get available speakers from TTS service
    if (ttsService && ttsService.isAvailable()) {
      const speakers = ttsService.getSupportedSpeakers();
      setAvailableSpeakers(speakers);
    }
  }, []);

  // Save speaker preference to localStorage
  const setSpeaker = (speaker: string) => {
    setCurrentSpeaker(speaker);
    localStorage.setItem(SPEAKER_STORAGE_KEY, speaker);
    console.log(`🎙️ Speaker changed to: ${speaker}`);
  };

  // Reset to default speaker
  const resetToDefault = () => {
    setCurrentSpeaker(defaultSpeaker);
    localStorage.removeItem(SPEAKER_STORAGE_KEY);
    console.log(`🎙️ Speaker reset to default: ${defaultSpeaker}`);
  };

  return {
    currentSpeaker,
    availableSpeakers,
    setSpeaker,
    resetToDefault
  };
};
