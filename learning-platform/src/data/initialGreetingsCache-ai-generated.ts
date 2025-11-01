/**
 * AI-Generated Initial Greetings Cache (BATCH MODE with VARIATION)
 *
 * Generated using BATCH generation via scripts/generateAISamples.ts
 * Generated on: 2025-11-01T12:11:53.363Z
 * Topic filter: s1-math-approximation-estimation (3 subtopics)
 * Generation method: Batch (with variation control)
 *
 * Features:
 * - Varied greetings: Anti-repetition instructions prevent formulaic patterns
 * - Auto-populated audio URLs: Ready for audio file generation
 * - Complete structure: Matches initialGreetingsCache.ts format exactly
 *
 * Next steps:
 * 1. Review greetings for quality and variety
 * 2. Copy desired greetings to initialGreetingsCache.ts
 * 3. Run 'npm run generate-initial-audio' to create audio files
 */

import type { InitialGreetingResponse } from '../types/types';

export interface CachedGreeting extends Omit<InitialGreetingResponse, 'speech'> {
  speech: {
    text: string;
    emotion: 'encouraging' | 'celebratory' | 'supportive' | 'neutral' | 'warm';
    /**
     * Relative path to pre-generated TTS audio file from public directory
     * Example: '/assets/audio/initial-greetings/s1-math-approximation-estimation-rounding-decimal-places.mp3'
     */
    preGeneratedAudioUrl?: string;
  };
}

export const INITIAL_GREETINGS_AI_GENERATED: Record<string, CachedGreeting> = {
  's1-math-approximation-estimation-rounding-decimal-places': {
    speech: {
      text: `Hi there! Welcome to the world of precision. Rounding to decimal places is like aiming for a specific target—we want to get as close as possible without being overly complicated. Let's start by making sure we understand exactly where the cutoff point is.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-approximation-estimation-rounding-decimal-places.mp3'
    },
    display: {
      content: `### Understanding Rounding and the Midpoint Concept

**Problem:** Round the number 47.3852 to two decimal places.`,
      showAfterSpeech: true
    }
  },

  's1-math-approximation-estimation-significant-figures': {
    speech: {
      text: `Hey! Ready to uncover the most important digits in any number? Significant figures tell us which parts of a measurement really matter. It's a foundational skill for all scientific calculations. Let's test your initial understanding of how we count them, especially when zeros are involved.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-approximation-estimation-significant-figures.mp3'
    },
    display: {
      content: `### Understanding Significant Figures

**Problem:** How many significant figures are in the number 0.00750?`,
      showAfterSpeech: true
    }
  },

  's1-math-approximation-estimation-techniques': {
    speech: {
      text: `Greetings! Estimation is one of the most practical math superpowers you can develop. It lets you quickly check answers or calculate rough totals in your head. We'll start with estimation by rounding, which simplifies complex numbers so we can work with them easily. Try this quick calculation.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-approximation-estimation-techniques.mp3'
    },
    display: {
      content: `### Estimation by Rounding

**Problem:** Estimate the value of 18.7 × 4.2 by first rounding each number to one significant figure.`,
      showAfterSpeech: true
    }
  }
};

/**
 * Helper function to get AI-generated greeting for a topic
 */
export function getAIGeneratedGreeting(topicId: string): CachedGreeting | undefined {
  return INITIAL_GREETINGS_AI_GENERATED[topicId];
}

/**
 * Check if a topic has an AI-generated greeting
 */
export function hasAIGeneratedGreeting(topicId: string): boolean {
  return topicId in INITIAL_GREETINGS_AI_GENERATED;
}

/**
 * Get list of all topics with AI-generated greetings
 */
export function getAIGeneratedTopicIds(): string[] {
  return Object.keys(INITIAL_GREETINGS_AI_GENERATED);
}
