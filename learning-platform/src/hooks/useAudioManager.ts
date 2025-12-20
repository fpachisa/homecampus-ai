/**
 * Audio Manager Hook
 * Manages TTS audio playback, queue, and avatar state synchronization
 */

import { useState, useRef, useCallback, useEffect } from 'react';
import { ttsService } from '../services/ttsService';

const SPEAKER_STORAGE_KEY = 'tts_speaker_preference';

interface AudioQueueItem {
  text: string;
  emotion?: 'encouraging' | 'celebratory' | 'supportive' | 'neutral' | 'warm' | 'excited' | 'proud';
  onComplete?: () => void;
}

// Note: Text normalization for pronunciation is now handled by the TTS providers internally
// (CloudTTSProvider for Google Cloud TTS, GeminiTTSProvider for Gemini TTS)

interface UseAudioManagerReturn {
  isPlaying: boolean;
  currentSubtitle: string;
  avatarState: 'idle' | 'speaking' | 'listening';
  audioDuration: number;  // Duration of current audio in seconds
  isAudioUnlocked: boolean; // iOS audio unlock state
  unlockAudio: () => Promise<void>; // Unlock audio on iOS
  speakText: (text: string, emotion?: AudioQueueItem['emotion'], onComplete?: () => void) => Promise<void>;
  speakTextWithAudio: (text: string, audioUrl: string, emotion?: AudioQueueItem['emotion'], onComplete?: () => void) => Promise<void>;
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
  const [isAudioUnlocked, setIsAudioUnlocked] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const queueRef = useRef<AudioQueueItem[]>([]);
  const isProcessingRef = useRef(false);

  // iOS audio unlock - play silent audio on first user gesture
  const unlockAudio = useCallback(async () => {
    if (isAudioUnlocked) return;

    try {
      // Create silent audio to unlock iOS audio context
      const silentAudio = new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADhADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAA4QfQ');

      silentAudio.volume = 0.1;
      await silentAudio.play();

      setIsAudioUnlocked(true);

      // Store in sessionStorage so we don't ask again
      sessionStorage.setItem('audio_unlocked', 'true');
    } catch (error) {
      console.warn('⚠️ Failed to unlock audio:', error);
      // Don't set isAudioUnlocked to true if it fails
    }
  }, [isAudioUnlocked]);

  // Check if audio was already unlocked in this session
  useEffect(() => {
    const wasUnlocked = sessionStorage.getItem('audio_unlocked');
    if (wasUnlocked === 'true') {
      setIsAudioUnlocked(true);
    }
  }, []);

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

      // Set avatar to speaking state (but no subtitle yet - waiting for audio to start)
      setAvatarState('speaking');
      setIsPlaying(true);

      // Get speaker preference from localStorage
      const preferredSpeaker = localStorage.getItem(SPEAKER_STORAGE_KEY) || undefined;

      // Synthesize speech with emotion and speaker preference
      // New TTS system uses emotion parameter for voice context control
      const audioBlob = await ttsService.synthesize(
        item.text,
        item.emotion || 'neutral',
        preferredSpeaker
      );

      // Create audio
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      // Get audio duration when metadata loads
      audio.onloadedmetadata = () => {
        setAudioDuration(audio.duration);
      };

      // Show subtitle only when audio actually starts playing (natural sync)
      audio.onplay = () => {
        setCurrentSubtitle(item.text);
      };

      audio.onended = () => {
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
    // Note: setSpeakingRate is deprecated in favor of emotion-based voice control
    // Only works with Cloud TTS provider
    if (ttsService && ttsService.isAvailable()) {
      ttsService.setSpeakingRate(speed);
    }
  }, []);

  // Speak text using pre-generated audio URL (for cached greetings)
  const speakTextWithAudio = useCallback(async (
    text: string,
    audioUrl: string,
    _emotion?: AudioQueueItem['emotion'],  // Reserved for future emotion-based audio selection
    onComplete?: () => void
  ) => {
    try {
      // Set avatar to speaking state
      setAvatarState('speaking');
      setIsPlaying(true);

      // Load audio from URL
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      // Get audio duration when metadata loads
      audio.onloadedmetadata = () => {
        setAudioDuration(audio.duration);
      };

      // Show subtitle when audio starts playing
      audio.onplay = () => {
        setCurrentSubtitle(text);
      };

      audio.onended = () => {
        setIsPlaying(false);
        setAvatarState('idle');
        setCurrentSubtitle('');
        audioRef.current = null;

        // Call completion callback
        onComplete?.();
      };

      audio.onerror = (err) => {
        console.error('❌ Audio playback error:', err);
        setIsPlaying(false);
        setAvatarState('idle');
        setCurrentSubtitle('');
        audioRef.current = null;
        onComplete?.();
      };

      await audio.play();

    } catch (error) {
      console.error('❌ Pre-generated audio error:', error);
      setIsPlaying(false);
      setAvatarState('idle');
      setCurrentSubtitle('');
      onComplete?.();
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
    isAudioUnlocked,
    unlockAudio,
    speakText,
    speakTextWithAudio,
    stopSpeaking,
    clearQueue,
    setPlaybackSpeed: handleSetPlaybackSpeed
  };
};
