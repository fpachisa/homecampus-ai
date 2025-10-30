/**
 * AI-Generated Initial Greetings Cache (BATCH MODE with VARIATION)
 *
 * Generated using BATCH generation via scripts/generateAISamples.ts
 * Generated on: 2025-10-30T06:26:29.772Z
 * Topic filter: s4-math-advanced-trig (5 subtopics)
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
  's4-math-advanced-trig-unit-circle': {
    speech: {
      text: `Welcome! We are starting at the very heart of trigonometry: the Unit Circle. This elegant tool connects angles to coordinates, making complex problems visual and manageable.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-advanced-trig-unit-circle.wav'
    },
    display: {
      content: `### Understanding the Unit Circle

What are the coordinates (x, y) of the point on the unit circle that corresponds to the angle \$\\theta = 90°\$?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "unitCircle",
          "parameters": {},
          "caption": "The Unit Circle visualization helps locate coordinates based on angles."
    }
  },

  's4-math-advanced-trig-functions-graphs': {
    speech: {
      text: `Hey there! Get ready to see trigonometry in motion. When we graph sine and cosine, we reveal beautiful, repeating waves that model everything from sound to light.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-advanced-trig-functions-graphs.wav'
    },
    display: {
      content: `### The Sine and Cosine Functions

For the standard sine function, \$y = \\sin(x)\$:

1. What is the maximum value of the function?`,
      showAfterSpeech: true
    }
  },

  's4-math-advanced-trig-transformations': {
    speech: {
      text: `Greetings! Think of trigonometric functions as elastic bands. We are going to learn how to stretch, compress, and move these waves precisely. This is where we gain control over the graphs.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-advanced-trig-transformations.wav'
    },
    display: {
      content: `### Amplitude and Period Changes

Consider the function \$y = 3\\cos(x)\$.

How does the coefficient 3 affect the **amplitude** of the graph compared to the standard function \$y = \\cos(x)\$?`,
      showAfterSpeech: true
    }
  },

  's4-math-advanced-trig-equations-identities': {
    speech: {
      text: `Hello! We are stepping into the realm of trigonometric puzzles. Solving these equations requires combining algebra skills with our knowledge of angles and periodicity. Let us start simple.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-advanced-trig-equations-identities.wav'
    },
    display: {
      content: `### Solving Trigonometric Equations

Find all solutions for \$\\theta\$ in the interval \$0° \\le \\theta < 360°\$ for the equation:

\$\$\\sin(\\theta) = \\frac{1}{2}\$\$`,
      showAfterSpeech: true
    }
  },

  's4-math-advanced-trig-radians': {
    speech: {
      text: `Hi! We are transitioning from degrees to a more natural, fundamental way to measure angles: radians. This system is essential for calculus and advanced physics because it links arc length directly to the radius.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-advanced-trig-radians.wav'
    },
    display: {
      content: `### Understanding Radian Measure

If a circle has a radius (\$r\$) of 1 unit, what is the radian measure of the central angle (\$\\theta\$) that subtends an arc length (\$s\$) of 1 unit?`,
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
