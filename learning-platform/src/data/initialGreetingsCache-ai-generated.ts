/**
 * AI-Generated Initial Greetings Cache (BATCH MODE with VARIATION)
 *
 * Generated using BATCH generation via scripts/generateAISamples.ts
 * Generated on: 2025-11-01T09:16:49.597Z
 * Topic filter: s1-math-real-numbers (5 subtopics)
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
  };
}

export const INITIAL_GREETINGS_AI_GENERATED: Record<string, CachedGreeting> = {
  's1-math-real-numbers-negative-numbers-number-line': {
    speech: {
      text: `Hello! Have you ever wondered what happens when we go below zero? We are starting our journey into the world of negative numbers today, which are essential for understanding temperature, elevation, and debt. Let us start by mapping where these numbers live.`,
      emotion: 'encouraging'
    },
    display: {
      content: `### Understanding Negative Numbers

**Problem:** Locate the integer **-4** on the number line provided below. How many units is it to the left of zero?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "numberLine",
          "parameters": {
                "min": -5,
                "max": 5,
                "step": 1,
                "highlightPoints": [
                      -4
                ]
          },
          "caption": "A number line spanning from -5 to 5."
    }
  },

  's1-math-real-numbers-addition-subtraction-integers': {
    speech: {
      text: `Welcome! Today we are tackling integer operations. Think of positive numbers as money you have, and negative numbers as debt. When we add them, we use 'zero pairs' to cancel out the debt. Let us see how this balancing act works.`,
      emotion: 'warm'
    },
    display: {
      content: `### Zero Pairs and Adding Integers

If you have 5 positive tiles (+) and 3 negative tiles (-), what is the result when you form as many zero pairs as possible?

**Solve:** 5 + (-3) = ?`,
      showAfterSpeech: true
    }
  },

  's1-math-real-numbers-multiplication-division-integers': {
    speech: {
      text: `Hey there! Get ready to unlock one of the biggest mysteries in early algebra: the rules of signs! Multiplying integers is straightforward once you know the pattern. Let us jump right into the core concept of multiplying a positive number by a negative number.`,
      emotion: 'encouraging'
    },
    display: {
      content: `### Multiplication of Integers

Multiplication can be thought of as repeated addition. If you owe \$2 to four different people, what is your total debt?

**Calculate:** 4 × (-2)`,
      showAfterSpeech: true
    }
  },

  's1-math-real-numbers-rational-irrational-numbers': {
    speech: {
      text: `Greetings. Our focus now shifts to classifying numbers based on their form. We begin with rational numbers—those that can be perfectly expressed as a ratio of two integers. This is a foundational concept for all future math. Let us test your understanding of the definition.`,
      emotion: 'supportive'
    },
    display: {
      content: `### Rational Numbers

A rational number is any number that can be written in the form \$\\frac{p}{q}\$, where \$p\$ and \$q\$ are integers and \$q 
eq 0\$.

**Question:** Can the decimal \$0.75\$ be written as a fraction of two integers? If so, what is that fraction?`,
      showAfterSpeech: true
    }
  },

  's1-math-real-numbers-operations-real-numbers': {
    speech: {
      text: `Hi! We are moving on to combining all the number types we have learned, starting with mastering operations involving fractions. Fractions are crucial building blocks, so let us make sure we have that addition skill locked down before we proceed.`,
      emotion: 'encouraging'
    },
    display: {
      content: `### Operations with Fractions

To add fractions, you must find a common denominator. What is the sum of the following fractions?

**Solve:** \$\\frac{1}{3} + \\frac{1}{6}\$`,
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
