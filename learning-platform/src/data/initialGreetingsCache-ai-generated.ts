/**
 * AI-Generated Initial Greetings Cache (BATCH MODE with VARIATION)
 *
 * Generated using BATCH generation via scripts/generateAISamples.ts
 * Generated on: 2025-11-04T08:28:37.994Z
 * Topic filter: s1-math-data (6 subtopics)
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
    preGeneratedAudioUrl?: string;
  };
}

export const INITIAL_GREETINGS_AI_GENERATED: Record<string, CachedGreeting> = {
  's1-math-data-intro': {
    speech: {
      text: `Welcome aboard! Statistics is like being a detective. It helps us find patterns and meaning in the world around us. Before we start collecting, what is the fundamental difference between data and information?`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-data-intro.mp3'
    },
    display: {
      content: `### What is Statistics and Data?

Explain the distinction between the following two terms in the context of a statistical study:

1. **Data**
2. **Information**`,
      showAfterSpeech: true
    }
  },

  's1-math-data-frequency': {
    speech: {
      text: `Hey there! Ready to get organized? Tally marks are the simplest, most effective way to keep track of counts in real time. If you see the marks four vertical lines with one diagonal line across them, what frequency does that represent?`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-data-frequency.mp3'
    },
    display: {
      content: `### Using Tally Marks to Count

In a frequency count, the standard tally mark group for five items is represented as \$\\cancel{||||}\$.

What numerical frequency does this specific group represent?`,
      showAfterSpeech: true
    }
  },

  's1-math-data-grouped': {
    speech: {
      text: `Greetings! As data sets grow larger, they can become overwhelming. Today, we learn the essential skill of grouping data to make it manageable. Imagine you collected the heights of 500 students. Why would using a frequency table with individual heights be ineffective?`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-data-grouped.mp3'
    },
    display: {
      content: `### When and Why to Group Data

Suppose you collected 500 individual data points, such as the exact height of every student in a large school (e.g., 155 cm, 161 cm, 170 cm, etc.).

Why is it necessary to use **grouped data** (class intervals) instead of a simple frequency table listing every unique height?`,
      showAfterSpeech: true
    }
  },

  's1-math-data-visual-1': {
    speech: {
      text: `Hi! Let's explore how pictures tell a story about numbers. Pictograms use symbols to represent quantities, but we always need to check the key! If one apple symbol represents 5 apples, how many apples are represented by 3 apple symbols?`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-data-visual-1.mp3'
    },
    display: {
      content: `### Reading and Interpreting Pictograms

A pictogram uses a key where one symbol (🍎) represents 5 units.

If a row displays 3 🍎 symbols, what is the total quantity represented?`,
      showAfterSpeech: true
    }
  },

  's1-math-data-visual-2': {
    speech: {
      text: `Hello! Today we slice up the whole! Pie charts are fantastic for showing proportions. Since a full circle is 360 degrees, if a category represents one quarter of the total data, how many degrees should that sector occupy?`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-data-visual-2.mp3'
    },
    display: {
      content: `### Understanding Pie Charts and Proportions

A pie chart represents 100% of the data using a full circle (360°).

If a specific data category accounts for \$\\frac{1}{4}\$ of the total observations, calculate the angle (in degrees) that the corresponding sector should occupy.`,
      showAfterSpeech: true
    }
  },

  's1-math-data-critique': {
    speech: {
      text: `A warm welcome to you! Data visualization is not just about drawing, it's about making smart choices. We need to evaluate which chart works best for the data we have. What is the main advantage of a line graph over a bar chart when showing trends over time?`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-data-critique.mp3'
    },
    display: {
      content: `### Advantages and Disadvantages of Each Diagram Type

When visualizing data that changes continuously over a period (e.g., stock prices, temperature readings), why is a **line graph** generally a more effective choice than a **bar chart**?`,
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
