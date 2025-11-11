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
      console.log('🎭 Emotion:', item.emotion || 'neutral');

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
    emotion?: AudioQueueItem['emotion'],
    onComplete?: () => void
  ) => {
    try {
      console.log('🎵 Playing pre-generated audio:', audioUrl);
      console.log('🎭 Emotion:', emotion || 'neutral');

      // Set avatar to speaking state
      setAvatarState('speaking');
      setIsPlaying(true);

      // Load audio from URL
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      // Get audio duration when metadata loads
      audio.onloadedmetadata = () => {
        setAudioDuration(audio.duration);
        console.log(`🎵 Audio duration: ${audio.duration}s`);
      };

      // Show subtitle when audio starts playing
      audio.onplay = () => {
        console.log('🎬 Audio started, showing subtitle');
        setCurrentSubtitle(text);
      };

      audio.onended = () => {
        console.log('✅ Speech completed');
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
    speakText,
    speakTextWithAudio,
    stopSpeaking,
    clearQueue,
    setPlaybackSpeed: handleSetPlaybackSpeed
  };
};
