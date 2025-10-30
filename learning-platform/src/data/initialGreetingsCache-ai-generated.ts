/**
 * AI-Generated Initial Greetings Cache (BATCH MODE with VARIATION)
 *
 * Generated using BATCH generation via scripts/generateAISamples.ts
 * Generated on: 2025-10-30T09:30:16.544Z
 * Topic filter: s4-math-vectors (5 subtopics)
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
    preGeneratedAudioUrl: string;
  };
}

export const INITIAL_GREETINGS_AI_GENERATED: Record<string, CachedGreeting> = {
  's4-math-vectors-fundamentals': {
    speech: {
      text: `Greetings! We are starting our journey into vectors by laying the groundwork. Understanding the difference between a simple number and a quantity that has direction is crucial. Let us make sure we have the basic definitions down.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-vectors-fundamentals.mp3'
    },
    display: {
      content: `### Scalars and Vectors

Which of the following physical quantities is a **vector** (requires both magnitude and direction)?

1. Mass
2. Speed
3. Velocity
4. Temperature`,
      showAfterSpeech: true
    }
  },

  's4-math-vectors-component-form': {
    speech: {
      text: `Hi there! Vectors are fantastic tools, but drawing them all the time can be slow. This section teaches us how to move vectors onto the coordinate plane, transforming visual geometry into straightforward algebra. Ready to see how components simplify everything?`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-vectors-component-form.mp3'
    },
    display: {
      content: `### Vectors in Component Form

Vector **v** has an initial point P(2, 5) and a terminal point Q(8, 1).

Express **v** in component form \$\\langle a, b \\rangle\$.`,
      showAfterSpeech: true
    }
  },

  's4-math-vectors-magnitude-ops': {
    speech: {
      text: `Welcome! If a vector tells you where to go, the magnitude tells you how far! We are tackling the essential skill of finding the length of any vector, which is just a quick application of the distance formula. Let us calculate some distance!`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-vectors-magnitude-ops.mp3'
    },
    display: {
      content: `### The Magnitude of a Vector

Find the magnitude of the vector **u** = \$\\langle -3, 4 \\rangle\$.`,
      showAfterSpeech: true
    }
  },

  's4-math-vectors-parallelism': {
    speech: {
      text: `Hey! Think of vectors as paths. When are two paths running perfectly alongside each other, even if one is longer or shorter? That is what parallelism is all about! We will explore the simple algebraic condition that defines this key geometric relationship.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-vectors-parallelism.mp3'
    },
    display: {
      content: `### Parallelism

Determine if the vectors **a** = \$\\langle 6, -2 \\rangle\$ and **b** = \$\\langle -18, 6 \\rangle\$ are parallel.`,
      showAfterSpeech: true
    }
  },

  's4-math-vectors-dot-product': {
    speech: {
      text: `Good morning! The dot product is one of the most powerful tools in vector math because it allows us to multiply two vectors and get a single, useful number, a scalar, back. This number unlocks concepts like angles and projections. Let us start with the calculation itself.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-vectors-dot-product.mp3'
    },
    display: {
      content: `### The Scalar (Dot) Product

Given vectors **u** = \$\\langle 5, 2 \\rangle\$ and **v** = \$\\langle -1, 3 \\rangle\$.

Calculate the dot product **u** \$\\cdot\$ **v**.`,
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
