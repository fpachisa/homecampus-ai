/**
 * AI-Generated Initial Greetings Cache (BATCH MODE with VARIATION)
 *
 * Generated using BATCH generation via scripts/generateAISamples.ts
 * Generated on: 2025-11-02T10:50:57.861Z
 * Topic filter: s1-math-angles (6 subtopics)
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
    emotion: 'encouraging' | 'celebratory' | 'supportive' | 'neutral' | 'warm' | 'excited';
    preGeneratedAudioUrl?: string;
  };
}

export const INITIAL_GREETINGS_AI_GENERATED: Record<string, CachedGreeting> = {
  's1-math-angles-parallel-lines-introduction': {
    speech: {
      text: `Greetings! Geometry starts with angles, the building blocks of shapes. Let's make sure we understand the fundamental vocabulary and how we label them before we start measuring.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-angles-parallel-lines-introduction.mp3'
    },
    display: {
      content: `### Angle Basics, Notation, and Types

**Question:** An angle measures exactly 90°. What is the classification of this angle?`,
      showAfterSpeech: true
    }
  },

  's1-math-angles-parallel-lines-angles-at-point': {
    speech: {
      text: `Hi there! Have you ever thought about what happens when you turn completely around? That's a full circle, and in geometry, we call that 'angles at a point'. It is a powerful rule that always adds up the same way.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-angles-parallel-lines-angles-at-point.mp3'
    },
    display: {
      content: `### Angles at a Point - Basic Property

**Question:** Three angles meet at a point: 110°, 150°, and x. What is the value of x in degrees (°)?`,
      showAfterSpeech: true
    }
  },

  's1-math-angles-parallel-lines-angles-on-line': {
    speech: {
      text: `Welcome! A straight line looks simple, but it holds one of the most important angle rules in geometry. When angles sit side by side on a straight edge, they form a perfect half turn. Let's practice using this straight line property.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-angles-parallel-lines-angles-on-line.mp3'
    },
    display: {
      content: `### Angles on a Straight Line - Basic Property

**Question:** Angle A and Angle B are adjacent angles on a straight line. If Angle A measures 58°, what is the measure of Angle B?`,
      showAfterSpeech: true
    }
  },

  's1-math-angles-parallel-lines-vertically-opposite': {
    speech: {
      text: `Hey! Get ready for one of the coolest visual shortcuts in geometry: vertically opposite angles! When two lines cross, they create mirror images of each other. It is instant equality!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-angles-parallel-lines-vertically-opposite.mp3'
    },
    display: {
      content: `### Vertically Opposite Angles - Basic Property

**Question:** Two straight lines intersect, forming four angles. If one angle measures 142°, what is the measure of the angle directly opposite it?`,
      showAfterSpeech: true
    }
  },

  's1-math-angles-parallel-lines-basic-parallel': {
    speech: {
      text: `Hello there! We are stepping into the world of parallel lines, where angles suddenly start matching up in predictable patterns. We will start with corresponding angles, often called the F pattern. Can you spot the match?`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-angles-parallel-lines-basic-parallel.mp3'
    },
    display: {
      content: `### Corresponding Angles (F-Pattern)

Given two parallel lines cut by a transversal, if the upper angle in the pair measures 75°, what is the measure of its corresponding angle?`,
      showAfterSpeech: true
    }
  },

  's1-math-angles-parallel-lines-advanced-parallel': {
    speech: {
      text: `Greetings, geometry expert! You have mastered the basics, and now it is time to put those angle rules together. Advanced parallel line problems require chaining multiple steps. Think of it as a geometric puzzle!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-angles-parallel-lines-advanced-parallel.mp3'
    },
    display: {
      content: `### Multi-Step Parallel Lines Problems

**Question:** Lines L₁ and L₂ are parallel. Angle A and Angle B are corresponding angles. Angle B and Angle C are supplementary (on a straight line). If Angle A = 110°, what is the measure of Angle C?`,
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
