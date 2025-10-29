/**
 * AI-Generated Initial Greetings Cache
 *
 * Generated using Gemini Flash API via scripts/generateAISamples.ts
 * Generated on: 2025-10-29T09:19:40.588Z
 * Topic filter: s3-math-relation (6 subtopics)
 *
 * This file contains AI-generated initial greetings for comparison with
 * the handcrafted version in initialGreetingsCache.ts
 *
 * Note: This file does NOT include preGeneratedAudioUrl fields since
 * we're not pre-generating audio for these samples.
 */

import type { InitialGreetingResponse } from '../types/types';

export interface CachedGreeting extends Omit<InitialGreetingResponse, 'speech'> {
  speech: {
    text: string;
    emotion: 'encouraging' | 'celebratory' | 'supportive' | 'neutral' | 'warm' | 'excited';
  };
}

export const INITIAL_GREETINGS_AI_GENERATED: Record<string, CachedGreeting> = {
  's3-math-relations-functions-fundamentals': {
    speech: {
      text: `Welcome! Today we are diving into one of the most fundamental ideas in algebra and calculus: relations and functions. We'll start by defining what a relation is, then we'll learn how to spot a special type of relation called a function, and finally, we'll use a cool trick called the Vertical Line Test to check our graphs! Let's jump right into understanding relations.`,
      emotion: 'excited'
    },
    display: {
      content: `### Understanding Relations

A **relation** is simply a set of ordered pairs (x, y).

Consider the following finite relation, R, plotted below:
\$\$R = \\{(-3, 5), (1, 2), (-3, 0), (4, 2)\\}\$\$

1. What is the **Domain** of the relation R?
2. What is the **Range** of the relation R?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "cartesianPlane",
          "parameters": {
                "points": [
                      {
                            "x": -3,
                            "y": 5,
                            "label": "(-3, 5)"
                      },
                      {
                            "x": 1,
                            "y": 2,
                            "label": "(1, 2)"
                      },
                      {
                            "x": -3,
                            "y": 0,
                            "label": "(-3, 0)"
                      },
                      {
                            "x": 4,
                            "y": 2,
                            "label": "(4, 2)"
                      }
                ],
                "title": "Relation R",
                "xMin": -5,
                "xMax": 5,
                "yMin": -1,
                "yMax": 6
          },
          "caption": "The points representing the relation R plotted on the coordinate plane."
    }
  },

  's3-math-relations-functions-function-notation': {
    speech: {
      text: `Welcome! We are diving into function notation today. This is a super useful concept that helps us describe relationships between variables clearly. We'll start by understanding what f of x actually means, and then we'll practice substituting values into functions to solve them. Ready to jump in?`,
      emotion: 'excited'
    },
    display: {
      content: `### Section 1: Function Notation Basics

Function notation, written as \$f(x)\$, is a way to name a function and show its input variable.

Consider the notation \$f(x) = 3x - 5\$.

**Question:** What does the letter 'f' represent in this notation?`,
      showAfterSpeech: true
    }
  },

  's3-math-relations-functions-domain-range': {
    speech: {
      text: `Hello! I'm excited to dive into one of the most fundamental concepts in function analysis: Domain and Range. These ideas tell us exactly what input values a function can take and what output values it can produce. We'll start by visualizing these concepts on a graph, and then we'll move on to finding the natural domain of functions with restrictions like square roots and denominators. Ready to start?`,
      emotion: 'excited'
    },
    display: {
      content: `### Introductory Problem

Look at the graph of the function below. It shows a segment of a parabola. 

What are the **Domain** (x-values) and the **Range** (y-values) of this function, expressed in interval notation?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "cartesianPlane",
          "parameters": {
                "xMin": -3,
                "xMax": 3,
                "yMin": -1,
                "yMax": 5,
                "points": [
                      {
                            "x": -2,
                            "y": 4,
                            "style": "closed",
                            "label": "(-2, 4)"
                      },
                      {
                            "x": 2,
                            "y": 4,
                            "style": "open",
                            "label": "(2, 4)"
                      }
                ],
                "curves": [
                      {
                            "type": "custom",
                            "points": [
                                  {
                                        "x": -2,
                                        "y": 4
                                  },
                                  {
                                        "x": -1.5,
                                        "y": 2.25
                                  },
                                  {
                                        "x": -1,
                                        "y": 1
                                  },
                                  {
                                        "x": -0.5,
                                        "y": 0.25
                                  },
                                  {
                                        "x": 0,
                                        "y": 0
                                  },
                                  {
                                        "x": 0.5,
                                        "y": 0.25
                                  },
                                  {
                                        "x": 1,
                                        "y": 1
                                  },
                                  {
                                        "x": 1.5,
                                        "y": 2.25
                                  },
                                  {
                                        "x": 2,
                                        "y": 4
                                  }
                            ],
                            "equation": "y = x²"
                      }
                ],
                "title": "Function Segment: f(x) = x²",
                "xLabel": "Domain (x)",
                "yLabel": "Range (y)"
          },
          "caption": "A segment of the parabola y = x² defined from x = -2 (inclusive, closed circle) to x = 2 (exclusive, open circle)."
    }
  },

  's3-math-relations-functions-sign-diagrams': {
    speech: {
      text: `Hello! Today we are diving into a super useful tool called Sign Diagrams. These diagrams are fantastic for quickly figuring out where a function is positive, negative, zero, or undefined. This skill is essential for analyzing function behavior, solving inequalities, and even sketching graphs! Let's start with the basics: identifying the critical points.`,
      emotion: 'excited'
    },
    display: {
      content: `### Section 1: Creating Sign Diagrams

A sign diagram is built around **critical points**, which are the values of \$x\$ where the function \$f(x)\$ is either \$0\$ (a zero) or undefined.

Consider the function:
\$\$f(x) = \\frac{x-3}{x+1}\$\$

**Question:** What are the critical points for this function? (List the values of \$x\$ where \$f(x) = 0\$ or \$f(x)\$ is undefined.)`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "numberLine",
          "parameters": {
                "min": -5,
                "max": 5,
                "step": 1,
                "showTickMarks": true,
                "showTickLabels": true,
                "title": "Number Line for $f(x)$",
                "points": [
                      {
                            "value": -1,
                            "style": "none"
                      },
                      {
                            "value": 3,
                            "style": "none"
                      }
                ]
          },
          "caption": "These critical points will divide the number line into intervals where the function's sign remains constant."
    }
  },

  's3-math-relations-functions-transformations': {
    speech: {
      text: `Hello! I'm so excited to dive into a really fun topic today: Transformations of Graphs! We're going to learn how to take a basic function and move it around, stretch it, or flip it, all by changing its equation. We'll start with the simplest type of transformation: Translations, or just plain old shifts. Are you ready to see how we can move graphs up, down, left, and right?`,
      emotion: 'excited'
    },
    display: {
      content: `## Section 1: Translations (Shifts)

We start with the parent function \$f(x) = |x|\$ (blue line).

Consider the transformed function \$g(x) = |x| + 3\$ (red line).

Look at the graph provided. How does the graph of \$g(x)\$ relate to the graph of \$f(x)\$?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "cartesianPlane",
          "parameters": {
                "xMin": -6,
                "xMax": 6,
                "yMin": -1,
                "yMax": 9,
                "title": "Vertical Translation",
                "curves": [
                      {
                            "type": "absolute",
                            "points": [
                                  {
                                        "x": -5,
                                        "y": 5
                                  },
                                  {
                                        "x": -3,
                                        "y": 3
                                  },
                                  {
                                        "x": 0,
                                        "y": 0
                                  },
                                  {
                                        "x": 3,
                                        "y": 3
                                  },
                                  {
                                        "x": 5,
                                        "y": 5
                                  }
                            ],
                            "equation": "f(x) = |x|",
                            "color": "blue"
                      },
                      {
                            "type": "absolute",
                            "points": [
                                  {
                                        "x": -5,
                                        "y": 8
                                  },
                                  {
                                        "x": -3,
                                        "y": 6
                                  },
                                  {
                                        "x": 0,
                                        "y": 3
                                  },
                                  {
                                        "x": 3,
                                        "y": 6
                                  },
                                  {
                                        "x": 5,
                                        "y": 8
                                  }
                            ],
                            "equation": "g(x) = |x| + 3",
                            "color": "red"
                      }
                ]
          },
          "caption": "The parent function $f(x) = |x|$ (blue) is shifted to create $g(x) = |x| + 3$ (red)."
    }
  },

  's3-math-relations-functions-absolute-value': {
    speech: {
      text: `Welcome! Today we are diving into a really cool concept: the absolute value function, sometimes called the modulus. It sounds fancy, but at its heart, absolute value is simply about distance. We'll start by mastering what absolute value means and how to calculate it, and then we'll move on to graphing those famous V-shapes! Are you ready to jump in?`,
      emotion: 'excited'
    },
    display: {
      content: `Let's start with the basics. The absolute value of a number represents its distance from zero on the number line. Since distance is always positive or zero, the result of an absolute value operation is never negative.

### Question 1

What is the value of \$|-4|\$?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "numberLine",
          "parameters": {
                "min": -6,
                "max": 6,
                "step": 1,
                "points": [
                      {
                            "value": -4,
                            "label": "-4",
                            "style": "closed",
                            "color": "#ef4444"
                      }
                ],
                "intervals": [
                      {
                            "start": -4,
                            "end": 0,
                            "startInclusive": true,
                            "endInclusive": true,
                            "color": "#3b82f6"
                      }
                ],
                "highlightIntegers": true
          },
          "caption": "The absolute value, $|-4|$, is the distance from -4 to 0. Count the units!"
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
