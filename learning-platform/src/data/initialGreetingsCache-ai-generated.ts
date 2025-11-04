/**
 * AI-Generated Initial Greetings Cache (BATCH MODE with VARIATION)
 *
 * Generated using BATCH generation via scripts/generateAISamples.ts
 * Generated on: 2025-11-03T07:35:49.134Z
 * Topic filter: s1-math-perimeter (3 subtopics)
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

export interface CachedGreeting extends InitialGreetingResponse {
  speech: InitialGreetingResponse['speech'] & {
    /**
     * Relative path to pre-generated TTS audio file from public directory
     * Example: '/assets/audio/initial-greetings/s1-math-perimeter-area-parallelograms.mp3'
     */
    preGeneratedAudioUrl?: string;
  };
}

export const INITIAL_GREETINGS_AI_GENERATED: Record<string, CachedGreeting> = {
  's1-math-perimeter-area-parallelograms': {
    speech: {
      text: `Welcome! Before we tackle the slanting sides of parallelograms, let us quickly warm up by reviewing the basics: rectangles and squares. These shapes are the essential building blocks for everything we will calculate next. Let's start with a quick area calculation.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-perimeter-area-parallelograms.mp3'
    },
    display: {
      content: `### Review: Rectangles and Squares

Welcome! Let's start with a quick review of the fundamentals.

A square has a side length of 7.5 cm.

What is the area of the square? (Remember to include the correct units.)`,
      showAfterSpeech: true
    }
  },

  's1-math-perimeter-area-trapeziums': {
    speech: {
      text: `Hey there! Are you ready to explore one of the most interesting and often misunderstood quadrilaterals? Trapeziums are unique because they only require one pair of parallel sides. Understanding their properties is the first step to mastering their area formulas.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-perimeter-area-trapeziums.mp3'
    },
    display: {
      content: `### Trapezium Properties and Identification

Let's start by confirming the defining feature of a trapezium (also known as a trapezoid).

Which of the following statements correctly describes a trapezium?

A) It has two pairs of parallel sides.
B) It has exactly one pair of parallel sides.
C) All four sides are equal in length.
D) All angles are 90°.`,
      showAfterSpeech: true
    }
  },

  's1-math-perimeter-area-composite': {
    speech: {
      text: `Greetings! When facing a complex problem, the best strategy is often to break it down into smaller, manageable pieces. That is exactly what we do with composite figures! We take big, unusual shapes and decompose them into familiar shapes like rectangles and triangles.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-perimeter-area-composite.mp3'
    },
    display: {
      content: `### Breaking Down Composite Shapes

The key to working with composite figures is decomposition.

Imagine an L-shaped figure. If you wanted to calculate its area, which two basic shapes would you most likely break it down into?

A) A circle and a square
B) Two rectangles
C) A trapezium and a triangle
D) A parallelogram and a rhombus`,
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
