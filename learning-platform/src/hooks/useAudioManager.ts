/**
 * Audio Manager Hook
 * Manages TTS audio playback, queue, and avatar state synchronization
 */

import { useState, useRef, useCallback, useEffect } from 'react';
import { ttsService } from '../services/ttsService';

interface AudioQueueItem {
  text: string;
  emotion?: 'encouraging' | 'celebratory' | 'supportive' | 'neutral';
  onComplete?: () => void;
}

/**
 * Normalize text for TTS pronunciation
 * Handles acronyms and terms that need special pronunciation
 */
function normalizeTextForTTS(text: string): string {
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

interface UseAudioManagerReturn {
  isPlaying: boolean;
  currentSubtitle: string;
  avatarState: 'idle' | 'speaking' | 'listening';
  audioDuration: number;  // Duration of current audio in seconds
  speakText: (text: string, emotion?: AudioQueueItem['emotion'], onComplete?: () => void) => Promise<void>;
  stopSpeaking: () => void;
  clearQueue: () => void;
  setPlaybackSpeed: (speed: number) => void;
}

export const useAudioManager = (): UseAudioManagerReturn => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSubtitle, setCurrentSubtitle] = useState('');
  const [avatarState, setAvatarState] = useState<'idle' | 'speaking' | 'listening'>('idle');
  const [playbackSpeed, setPlaybackSpeed] = useState(1.25);
  const [audioDuration, setAudioDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const queueRef = useRef<AudioQueueItem[]>([]);
  const isProcessingRef = useRef(false);

  // Process the audio queue
  const processQueue = useCallback(async () => {
    if (isProcessingRef.current || queueRef.current.length === 0) {
      return;
    }

    isProcessingRef.current = true;
    const item = queueRef.current.shift()!;

    try {
      if (!ttsService) {
        console.warn('TTS service not available, skipping audio');
        setCurrentSubtitle(item.text);
        setTimeout(() => {
          setCurrentSubtitle('');
          item.onComplete?.();
          isProcessingRef.current = false;
          processQueue();
        }, 2000);
        return;
      }

      console.log('🔊 Speaking:', item.text);

      // Set avatar to speaking state (but no subtitle yet - waiting for audio to start)
      setAvatarState('speaking');
      setIsPlaying(true);

      // NOTE: Chirp 3 HD voices do not support SSML
      // SSML is disabled for this voice - using plain text only
      // Normalize text for better TTS pronunciation (e.g., SOH-CAH-TOA → S.O.H. C.A.H. T.O.A.)
      const textToSpeak = normalizeTextForTTS(item.text);

      console.log('🔊 Normalized text for TTS:', textToSpeak !== item.text ? `"${item.text}" → "${textToSpeak}"` : 'No changes');

      // Synthesize speech (useSsml = false for Chirp 3 HD compatibility)
      const audioBlob = await ttsService.synthesize(
        textToSpeak,
        { speakingRate: playbackSpeed },
        false
      );

      // Create audio
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      // Get audio duration when metadata loads
      audio.onloadedmetadata = () => {
        setAudioDuration(audio.duration);
        console.log(`🎵 Audio duration: ${audio.duration}s`);
      };

      // Show subtitle only when audio actually starts playing (natural sync)
      audio.onplay = () => {
        console.log('🎬 Audio started, showing subtitle');
        setCurrentSubtitle(item.text);
      };

      audio.onended = () => {
        console.log('✅ Speech completed');
        setIsPlaying(false);
        setAvatarState('idle');
        setCurrentSubtitle('');
        URL.revokeObjectURL(audioUrl);
        audioRef.current = null;

        // Call completion callback
        item.onComplete?.();

        // Process next item in queue
        isProcessingRef.current = false;
        processQueue();
      };

      audio.onerror = (err) => {
        console.error('❌ Audio playback error:', err);
        setIsPlaying(false);
        setAvatarState('idle');
        setCurrentSubtitle('');
        URL.revokeObjectURL(audioUrl);
        audioRef.current = null;

        item.onComplete?.();
        isProcessingRef.current = false;
        processQueue();
      };

      await audio.play();

    } catch (error) {
      console.error('❌ TTS Error:', error);
      setIsPlaying(false);
      setAvatarState('idle');
      setCurrentSubtitle('');
      item.onComplete?.();
      isProcessingRef.current = false;
      processQueue();
    }
  }, [playbackSpeed]);

  // Speak text (adds to queue)
  const speakText = useCallback(async (
    text: string,
    emotion?: AudioQueueItem['emotion'],
    onComplete?: () => void
  ) => {
    queueRef.current.push({ text, emotion, onComplete });
    processQueue();
  }, [processQueue]);

  // Stop current speech and clear queue
  const stopSpeaking = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    queueRef.current = [];
    setIsPlaying(false);
    setAvatarState('idle');
    setCurrentSubtitle('');
    setAudioDuration(0);
    isProcessingRef.current = false;
  }, []);

  // Clear queue without stopping current playback
  const clearQueue = useCallback(() => {
    queueRef.current = [];
  }, []);

  // Update playback speed
  const handleSetPlaybackSpeed = useCallback((speed: number) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
    if (ttsService) {
      ttsService.setSpeakingRate(speed);
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, [stopSpeaking]);

  return {
    isPlaying,
    currentSubtitle,
    avatarState,
    audioDuration,
    speakText,
    stopSpeaking,
    clearQueue,
    setPlaybackSpeed: handleSetPlaybackSpeed
  };
};
