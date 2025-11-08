/**
 * Initial Greetings Cache
 *
 * Pre-generated greeting + first question content for fast Learn Mode initialization.
 * Eliminates AI service calls on initial load, reducing load time from 2-6s to <0.5s.
 *
 * Structure matches InitialGreetingResponse from types/types.ts
 *
 * Audio files stored in: public/assets/audio/initial-greetings/{topicId}.mp3
 */

import type { InitialGreetingResponse } from '../types/types';

export interface CachedGreeting extends InitialGreetingResponse {
  speech: InitialGreetingResponse['speech'] & {
    /**
     * Relative path to pre-generated TTS audio file from public directory
     * Example: '/assets/audio/initial-greetings/s3-math-trigonometry-basic-ratios.mp3'
     */
    preGeneratedAudioUrl?: string;
  };
}

export const INITIAL_GREETINGS_CACHE: Record<string, CachedGreeting> = {
  /**
   * ========================================
   * S3 MATHEMATICS - TRIGONOMETRY
   * ========================================
   */
  's3-math-trigonometry-basic-ratios': {
    speech: {
      text: "Hey there! I'm excited to start our journey into trigonometry today. We're going to learn about trigonometric ratios—sine, cosine, and tangent—which are essential tools for relating the angles and sides of right triangles. Before we can use these ratios, we need to make sure we know how to label the sides correctly based on the angle we are focusing on. Let's start with the basics of labeling.",
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-trigonometry-basic-ratios.mp3'
    },
    display: {
      content: '### Section 1: Triangle Labeling\n\nIn trigonometry, the names of the sides of a right triangle—**Opposite**, **Adjacent**, and **Hypotenuse**—depend entirely on which acute angle (θ) you are looking at.\n\nTake a look at the triangle below. Relative to the angle θ, which side is the **Hypotenuse**?',
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "rightTriangle",
          "parameters": {
                "angle": null,
                "angleLabel": "θ",
                "hypotenuse": "A",
                "opposite": "B",
                "adjacent": "C",
                "highlightSide": "none",
                "showAngleMark": true,
                "showRightAngle": true,
                "showSideTypeLabels": false
          },
          "caption": "A right triangle labeled with sides A, B, and C, relative to angle θ."
    }
  },

  's3-math-trigonometry-problem-solving': {
    speech: {
      text: `Great to see you! Now that you understand the basic trigonometric ratios, we will apply them to solve real-world problems. These problems will help you see how trigonometry works in practical situations. Let me give you your first challenge.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-trigonometry-problem-solving.mp3'
    },
    display: {
      content: 'A ladder 5 meters long leans against a wall. The ladder makes an angle of 60° with the ground. How high up the wall does the ladder reach? Give your answer to 2 decimal places.',
      showAfterSpeech: true
    },
    mathTool: {
      toolName: 'rightTriangle',
      parameters: {
        angle: 60,
        hypotenuse: 5,
        labelAngle: 'θ',
        showOpposite: false,  // Student needs to find this
        showLabels: true
      },
      caption: 'Ladder leaning against wall at 60° angle'
    }
  },

  's3-math-trigonometry-true-bearings': {
    speech: {
      text: "Welcome to bearings! Bearings are a way to describe direction using angles measured clockwise from North. This is essential for navigation, whether you're sailing a ship or flying a plane. They help us describe direction accurately using a standard system. Let's start with the fundamentals of how they work.",
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-trigonometry-true-bearings.mp3'
    },
    display: {
      content: '### 1. Bearing Fundamentals\n\nTrue bearings are always measured **clockwise** from the North line (000°) and must always be written using **three digits**.\n\nLook at the diagram showing the path from point A to point B.\n\n**Question:** What is the true bearing of B from A?',
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "bearings",
          "parameters": {
                "points": [
                      {
                            "label": "A",
                            "bearing": 45
                      },
                      {
                            "label": "B"
                      }
                ],
                "legs": [
                      {
                            "fromPoint": 0,
                            "toPoint": 1,
                            "distance": "5 km"
                      }
                ],
                "showCompassRose": false,
                "showNorthLines": true,
                "highlightPoint": 0
          },
          "caption": "Find the true bearing from A to B."
    }
  },

  's3-math-trigonometry-obtuse-angles': {
    speech: {
      text: "Hi there! Let's learn about a really fascinating part of trigonometry today: working with obtuse angles. So far, you've probably only dealt with acute angles, those less than 90 degrees, usually inside a right-angled triangle. But what happens when an angle is bigger than 90 degrees? That's what we're going to explore! We'll start by making sure we all agree on what an obtuse angle looks like in a trigonometric context.",
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-trigonometry-obtuse-angles.mp3'
    },
    display: {
      content: '### Section 1: Obtuse Angle Definition\n\nIn geometry, an angle (θ) is classified as **obtuse** if it falls within a certain range.\n\nWhich inequality correctly defines an obtuse angle?\n\nA) 0° < θ < 90°\nB) 90° < θ < 180°\nC) 180° < θ < 360°\nD) θ = 90°',
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "generalTriangle",
          "parameters": {
                "angleA": 115,
                "angleB": 35,
                "angleC": 30,
                "angleA_label": "θ",
                "highlightAngle": "A",
                "triangleType": "obtuse",
                "showAngles": true,
                "showSides": false
          },
          "caption": "Here is an example of a triangle containing an obtuse angle, θ."
    }
  },

  's3-math-trigonometry-area-of-triangle': {
    speech: {
      text: "Hi there! We are starting a really exciting topic today: finding the area of a triangle using trigonometry. This method is incredibly powerful because it works for any triangle—acute, obtuse, or even right-angled—even when we don't know the vertical height. We're going to start by understanding the formula: Area equals one half of a times b times sine C. Let's first look at how the basics work.",
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-trigonometry-area-of-triangle.mp3'
    },
    display: {
      content: "Understanding the Area Formula\n\nThe standard formula for the area of a triangle using trigonometry is:\n\n$Area = \\frac{1}{2} \\times a \\times b \\times sin(C)$\n\nThis formula relies on knowing two sides and the angle between them (the included angle).\n\nLook at the triangle below. If we want to calculate the area using the sides labeled b and c, which angle must we know?",
      showAfterSpeech: true
    },
    mathTool: {
      toolName: 'generalTriangle',
      parameters: {
        "sideA": "a",
        "sideB": "b",
        "sideC": "c",
        "angleA": 70,
        "angleB": 60,
        "angleC": 50,
        "showSides": true,
        "showAngles": true
      },
      caption: 'Triangle with two sides and included angle'
    }
  },

  's3-math-trigonometry-sine-rule': {
    speech: {
      text: "Hi there! The Sine Rule is a powerful tool that helps us find unknown sides and angles in any triangle, not just right triangles. It relates the sides of a triangle to the sines of their opposite angles. Let's start by discovering the relationship itself.",
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-trigonometry-sine-rule.mp3'
    },
    display: {
      content: '### Discovering the Sine Rule\n\nTake a look at the triangle below. We are going to calculate the ratio of a side length to the sine of its opposite angle.\n\nCalculate the value of the following two ratios, rounding your answers to two decimal places:\n\n $1. \\frac{a}{\\sin A}$\n $2. \\frac{b}{\\sin B}$',
      showAfterSpeech: true
    },
    mathTool: {
      toolName: 'generalTriangle',
      parameters: {
              "sideA": "6.43",
              "sideB": "8.66",
              "sideC": "9.85",
              "angleA": 40,
              "angleB": 60,
              "angleC": 80,
              "highlightSide": "none",
              "showAngles": true,
              "showSides": true,
              "triangleType": "acute"
      },
      caption: 'Triangle ABC with given angles and side'
    }
  },

  's3-math-trigonometry-cosine-rule': {
    speech: {
      text: "Hey there! I'm excited to start working on trigonometry with you today. We're moving beyond right-angled triangles and diving into the Cosine Rule. This rule is a fantastic tool for solving triangles that don't have a 90-degree angle. It actually has a very close relationship with the Pythagorean theorem. Let's start by exploring that connection!",
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-trigonometry-cosine-rule.mp3'
    },
    display: {
      content: '### Understanding the Cosine Rule\n\nThe Cosine Rule is essential for solving non-right triangles. The standard form for finding side *c* is:\n\n$c² = a² + b² - 2ab \\cos C$\n\n1.  If angle C were 90° (a right angle), what is the value of $\\cos 90°$?\n2.  Using this value, explain how the Cosine Rule simplifies to the Pythagorean theorem ($c² = a² + b²$) when applied to a right triangle.',
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "generalTriangle",
          "parameters": {
                "sideA": "a",
                "sideB": "b",
                "sideC": "c",
                "angleA": 60,
                "angleB": 40,
                "angleC": 80,
                "showAngles": true,
                "showSides": true,
                "triangleType": "acute"
          },
          "caption": "A general triangle labeled for the Cosine Rule, where side *c* is opposite angle C."
    }
  },

  /**
   * ========================================
   * S3 MATHEMATICS - EXPONENTS
   * ========================================
   */
  's3-math-exponents-laws': {
    speech: {
      text: `Welcome! Let's explore a super important topic today: Exponent Laws and integer exponents. This is the foundation for a lot of higher math, but don't worry, we're going to build it up step by step, starting with the very basics of what an exponent even means. Let's get started with our first section on notation!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponents-laws.mp3'
    },
    display: {
      content: `### Section 1: Basic Notation

Let's start with the expression 3⁵.

**Question:**
1. What number is the **base**?
2. Write 3⁵ in **expanded form** (as repeated multiplication).`,
      showAfterSpeech: true
    }
  },

  's3-math-exponents-rational': {
    speech: {
      text: `Hello! I'm thrilled to explore a fascinating topic today: rational exponents and roots! This is where we learn how fractions in the exponent connect directly to radicals, like square roots and cube roots. It's a powerful concept that makes solving complex equations much easier. We're going to start with the simplest form, where the exponent is one over n.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponents-rational.mp3'
    },
    display: {
      content: `### Rational Exponents: Form \$\\frac{1}{n}\$

The core rule for this form is:
\$\$a^{\\frac{1}{n}} = \\sqrt[n]{a}\$\$

This means the denominator of the exponent (\$n\$) becomes the index of the root.

**Problem 1:**
Rewrite \$8^{\\frac{1}{3}}\$ in radical form and then evaluate the expression.`,
      showAfterSpeech: true
    }
  },

  's3-math-exponents-standard-form': {
    speech: {
      text: `Hello! I am so excited to start our new topic today. We're learning about scientific notation, which is also called standard form. This is a super powerful way to write really big numbers, like the distance to a star, or really tiny numbers, like the size of an atom. We are going to start by mastering the basic format, which is a times ten to the power of k. Ready for your first challenge?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponents-standard-form.mp3'
    },
    display: {
      content: `### Understanding Standard Form (a × 10ᵏ)

The number 6,500,000,000,000 represents the approximate mass of water (in kg) that flows over Niagara Falls every year.

Standard Form requires the coefficient 'a' to be between 1 and 10 (i.e., \$1 \\le a < 10\$).

Which of the following expressions correctly represents this number in **Standard Form**?

A) 65 × 10¹¹
B) 6.5 × 10¹²
C) 0.65 × 10¹³
D) 650 × 10¹⁰`,
      showAfterSpeech: true
    }
  },

  /**
   * ========================================
   * S3 MATHEMATICS - RELATIONS & FUNCTIONS
   * ========================================
   */
  's3-math-relations-functions-fundamentals': {
    speech: {
      text: `Welcome! Today we’ll be learning about one of the most fundamental ideas in algebra and calculus: relations and functions. We'll start by defining what a relation is, then we'll learn how to spot a special type of relation called a function, and finally, we'll use a cool trick called the Vertical Line Test to check our graphs! Let's jump right into understanding relations.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-relations-functions-fundamentals.mp3'
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
      text: `Welcome! Let's explore function notation today. This is a super useful concept that helps us describe relationships between variables clearly. We'll start by understanding what f of x actually means, and then we'll practice substituting values into functions to solve them. Ready to jump in?`,
      emotion: 'excited',
      preGeneratedAudioUrl:'/assets/audio/initial-greetings/s3-math-relations-functions-function-notation.mp3'
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
      text: `Hello! Let's learn about one of the most fundamental concepts in function analysis: Domain and Range. These ideas tell us exactly what input values a function can take and what output values it can produce. We'll start by visualizing these concepts on a graph, and then we'll move on to finding the natural domain of functions with restrictions like square roots and denominators. Ready to start?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-relations-functions-domain-range.mp3'
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
      text: `Hello! Today we’ll be learning about a super useful tool called Sign Diagrams. These diagrams are fantastic for quickly figuring out where a function is positive, negative, zero, or undefined. This skill is essential for analyzing function behavior, solving inequalities, and even sketching graphs! Let's start with the basics: identifying the critical points.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-relations-functions-sign-diagrams.mp3'
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
      text: `Hello! I'm thrilled to explore a really fun topic today: Transformations of Graphs! We're going to learn how to take a basic function and move it around, stretch it, or flip it, all by changing its equation. We'll start with the simplest type of transformation: Translations, or just plain old shifts. Are you ready to see how we can move graphs up, down, left, and right?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-relations-functions-transformations.mp3'
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
      text: `Welcome! Today we’ll be learning about a really cool concept: the absolute value function, sometimes called the modulus. It sounds fancy, but at its heart, absolute value is simply about distance. We'll start by mastering what absolute value means and how to calculate it, and then we'll move on to graphing those famous V-shapes! Are you ready to jump in?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-relations-functions-absolute-value.mp3'
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
  },

  /**
   * ========================================
   * S3 MATHEMATICS - STATISTICS
   * ========================================
   */
  's3-math-statistics-data-types': {
    speech: {
      text: `Hey there! I'm excited to start this new topic with you: Data Types and Organization. Understanding how we collect and classify data, whether it's by counting things or measuring them, is super important for statistics. We're going to start right at the beginning by looking at the basics of data collection. Ready for your first scenario?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-statistics-data-types.mp3'
    },
    display: {
      content: `## Introduction to Statistics: Data Collection

A high school principal wants to know how students feel about the new cafeteria menu. Since surveying all 1,500 students would take too long, the principal decides to randomly survey 150 students from various grade levels.

**Question 1:**

In this scenario, what is the **population** being studied?

A) The 150 students who were surveyed.
B) The high school principal.
C) All 1,500 students in the high school.
D) The new cafeteria menu.`,
      showAfterSpeech: true
    }
  },

  's3-math-statistics-distributions': {
    speech: {
      text: `Hi there! Today, we are diving into a super insightful part of statistics: describing the shape of data distributions. Understanding the shape—whether it’s symmetric, skewed, or has multiple peaks—tells us a lot about the data set. Let's start by looking at a very common shape. Take a look at the histogram below and tell me what you notice about how the data is spread out.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-statistics-distributions.mp3'
    },
    display: {
      content: `### Distribution Shapes

When we analyze data, the visual shape of its distribution gives us important clues about the underlying process. We typically look for **symmetry**, **skewness**, and the presence of **peaks** or **outliers**.

Look closely at the shape formed by the bars in the histogram below. If you drew a line down the middle, how would you describe the relationship between the left side and the right side of the distribution?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "histogram",
          "parameters": {
                "intervals": [
                      {
                            "start": 10,
                            "end": 20,
                            "frequency": 3
                      },
                      {
                            "start": 20,
                            "end": 30,
                            "frequency": 8
                      },
                      {
                            "start": 30,
                            "end": 40,
                            "frequency": 12
                      },
                      {
                            "start": 40,
                            "end": 50,
                            "frequency": 8
                      },
                      {
                            "start": 50,
                            "end": 60,
                            "frequency": 3
                      }
                ],
                "xLabel": "Value",
                "yLabel": "Frequency",
                "title": "Data Distribution Example",
                "showFrequencies": true
          },
          "caption": "A histogram showing a common data distribution shape."
    }
  },

  's3-math-statistics-centre': {
    speech: {
      text: `Welcome! Today we’ll be learning about one of the most practical areas of statistics: Measures of Centre. These are ways we summarize data using a single number. We'll be covering the three main types: the mean, the median, and the mode. Let's start right away with the mean, which is the arithmetic average. It's probably the measure you use most often in everyday life! Ready for our first problem?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-statistics-centre.mp3'
    },
    display: {
      content: `### Section 1: The Mean (Arithmetic Average)

The **mean** (often denoted as x̄) is the arithmetic average. We find it by summing all the values (Σx) and dividing by the number of values (n).

\$\$ \\bar{x} = \\frac{\\Sigma x}{n} \$\$

**Problem:** A student received the following scores on four quizzes: 85, 92, 78, and 95.

What is the mean quiz score?`,
      showAfterSpeech: true
    }
  },

  's3-math-statistics-boxplots': {
    speech: {
      text: `Hello! Let's learn about one of the most useful tools in statistics: box plots! Today, we are going to master how to summarize data using the five-number summary, calculate quartiles, and understand key measures of spread like the range and the Interquartile Range, or IQR. Let's start by finding the heart of our data set—the five-number summary.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-statistics-boxplots.mp3'
    },
    display: {
      content: `### Section 1: The Five-Number Summary

The **five-number summary** is the foundation of a box plot. It consists of the minimum value, the first quartile (Q₁), the median (Q₂), the third quartile (Q₃), and the maximum value.

Consider the following set of test scores, which are already ordered:

\$\$5, 8, 10, 12, 15, 18, 20\$\$

What is the **median (Q₂)** of this data set?`,
      showAfterSpeech: true
    }
  },

  's3-math-statistics-cumulative': {
    speech: {
      text: `Welcome! Today we’ll be learning about a really useful topic: Cumulative Frequency Graphs. These graphs help us understand how data piles up and are essential for finding things like the median and percentiles. Let's start with the basics of calculating cumulative frequency.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-statistics-cumulative.mp3'
    },
    display: {
      content: `### Cumulative Frequency Basics

A group of 35 students took a math quiz. Their scores are summarized in the frequency table below.

| Score (x) | Frequency (f) |
| :---: | :---: |
| 0 ≤ x < 10 | 3 |
| 10 ≤ x < 20 | 7 |
| 20 ≤ x < 30 | 12 |
| 30 ≤ x < 40 | 8 |
| 40 ≤ x < 50 | 5 |

**Question:** What is the cumulative frequency for scores less than 30 (i.e., for the interval \$x < 30\$)?`,
      showAfterSpeech: true
    }
  },

  's3-math-statistics-deviation': {
    speech: {
      text: `Hi there! We're diving into one of the most important concepts in statistics: Standard Deviation. It's the ultimate tool for measuring how spread out or consistent a set of data is. We're going to break it down into three simple steps, starting right now with understanding how far each data point is from the average. Let's get started!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-statistics-deviation.mp3'
    },
    display: {
      content: `### Section 1: Deviation from the Mean (x − \$\\bar{x}\$)

Standard deviation starts with finding out how much each data point *deviates* from the average.

Consider the following set of scores from a small quiz:
\$\$[2, 4, 6]\$\$

First, find the mean (\$\\bar{x}\$). Then, calculate the deviation for the score 6.

**What is the deviation (x − \$\\bar{x}\$) for the score x = 6?**`,
      showAfterSpeech: true
    }
  },

  's3-math-statistics-normal': {
    speech: {
      text: `Greetings! I am so excited to dive into one of the most useful concepts in statistics: the Normal Distribution! This is often called the 'bell curve', and by the end of this session, we will be using it to make real-world probability estimates. We are starting with the basics: understanding what makes this distribution so special.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-statistics-normal.mp3'
    },
    display: {
      content: `### Understanding the Normal Distribution

The Normal Distribution, often visualized as a bell curve, is fundamental in statistics due to its symmetry and predictable properties.

Which of the following statements accurately describes the relationship between the key measures of central tendency in a perfectly normal distribution?

A) The mean is always greater than the median.
B) The mode is always greater than the mean.
C) The mean, median, and mode are all equal.
D) The median is always twice the value of the mode.`,
      showAfterSpeech: true
    }
  },

  /**
   * ========================================
   * S3 MATHEMATICS - QUADRATIC EQUATIONS
   * ========================================
   */
  's3-math-quadratic-solving-standard-form': {
    speech: {
      text: `Hi there! Today we're going to tackle a really useful way to solve quadratic equations: using the square root method. This method works perfectly for equations that look like a x squared equals k. It's fast, efficient, and will help us understand why quadratic equations often have two solutions. Let's start with a simple one!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-solving-standard-form.mp3'
    },
    display: {
      content: `### Introductory Problem

Solve the following quadratic equation for \$x\$:

\$\$x^2 = 25\$\$

What are the two possible values for \$x\$?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "parabolaGraph",
          "parameters": {
                "a": 1,
                "b": 0,
                "c": -25,
                "showVertex": false,
                "showRoots": true,
                "showAxisOfSymmetry": true
          },
          "caption": "This graph shows $y = x^2 - 25$. The solutions to $x^2 = 25$ are the x-intercepts (where y = 0)."
    }
  },

  's3-math-quadratic-solving-factorization': {
    speech: {
      text: `Hi there! Ready to learn about one of the most powerful ways to solve quadratic equations? We're going to use factorization to turn tricky equations into simple ones. The key idea behind this method is the Zero Product Property. Let's start by seeing how that property works!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-solving-factorization.mp3'
    },
    display: {
      content: `We are solving quadratic equations using factorization. This method relies on the **Zero Product Property**.

If the product of two factors is zero, then at least one of the factors must be zero.

Solve the following equation for x:

\$\$(x + 5)(x - 2) = 0\$\$

What are the two possible values for x?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "parabolaGraph",
          "parameters": {
                "a": 1,
                "b": 3,
                "c": -10,
                "showRoots": true,
                "showVertex": true,
                "showAxisOfSymmetry": true,
                "xMin": -7,
                "xMax": 4
          },
          "caption": "This graph shows the function y = (x + 5)(x - 2). The solutions to (x + 5)(x - 2) = 0 are the x-intercepts (roots) where the graph crosses the x-axis."
    }
  },

  's3-math-quadratic-solving-fractional': {
    speech: {
      text: `Hi there! Today, we will learn about one of the most exciting topics in algebra: solving fractional equations that turn into quadratic equations. It's like a puzzle where we clear the denominators first, then solve the resulting quadratic. Ready to jump in?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-solving-fractional.mp3'
    },
    display: {
      content: `### Introductory Problem

Our first step in solving these types of equations is to eliminate the denominators by multiplying every term by the Least Common Denominator (LCD).

Solve the following fractional equation for x:

\$\$\\frac{x}{2} + \\frac{1}{x} = \\frac{3}{2}\$\$`,
      showAfterSpeech: true
    }
  },

  's3-math-quadratic-solving-completing-square': {
    speech: {
      text: `Hey there! I am so excited to start this journey with you. Today, we are tackling one of the most powerful techniques in algebra: Solving quadratic equations by completing the square! This method will not only help us find solutions but also unlock the secrets of the parabola's shape. We need to start by mastering the concept of a perfect square. Are you ready?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-solving-completing-square.mp3'
    },
    display: {
      content: `### Understanding Perfect Squares

A **perfect square trinomial** is a polynomial that results from squaring a binomial, meaning it can be factored into \$(x + k)²\$ or \$(x - k)²\$.

Which of the following expressions is a perfect square trinomial?

A) \$x² + 8x + 15\$
B) \$x² + 10x + 25\$
C) \$x² - 6x - 9\$`,
      showAfterSpeech: true
    }
  },

  's3-math-quadratic-solving-formula': {
    speech: {
      text: `Hey there! I'm so excited to be your tutor today and will teach you about one of the most powerful tools in algebra: the Quadratic Formula! This formula is like a universal key—it can solve any quadratic equation, no matter how tricky it looks. We're going to master it today!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-solving-formula.mp3'
    },
    display: {
      content: `### Understanding the Standard Form

The **Quadratic Formula** is used to solve equations written in standard form:
\$\$ax² + bx + c = 0\$\$

To begin, we must correctly identify the coefficients. For the following equation, what are the values of a, b, and c?

\$\$3x² - 5x + 2 = 0\$\$`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "quadraticFormulaVisualizer",
          "parameters": {
                "a": 3,
                "b": -5,
                "c": 2,
                "showDiscriminant": true,
                "showSteps": false
          },
          "caption": "The Quadratic Formula is $x = \\frac{-b \\pm \\sqrt{b² - 4ac}}{2a}$. Identifying a, b, and c is the crucial first step!"
    }
  },

  's3-math-quadratic-solving-exponential': {
    speech: {
      text: `Hey there! Today we are tackling one of the coolest algebraic tricks: solving exponential equations by turning them into quadratics! It sounds complicated, but we'll use a simple substitution method to make these tough problems easy. Get ready to put your factoring skills to the test!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-solving-exponential.mp3'
    },
    display: {
      content: `We are going to solve the exponential equation below. Notice how the bases relate to each other:

\$\$4^x - 5(2^x) + 6 = 0\$\$

### Step 1: Identify the Substitution

To see the quadratic form, we need to rewrite \$4^x\$. Remember the exponent rule \$(a^m)^n = a^{mn}\$.

Since \$4 = 2²\$, we can rewrite \$4^x\$ as \$(2^2)^x = 2^{2x} = (2^x)²\$.

The equation becomes:
\$\$(2^x)² - 5(2^x) + 6 = 0\$\$

What substitution should we use to turn this into a standard quadratic equation, like \$y² - 5y + 6 = 0\$?`,
      showAfterSpeech: true
    }
  },

  's3-math-quadratic-word-problems': {
    speech: {
      text: `Hi there! let's learn about one of the most practical areas of mathematics: solving real-world word problems using quadratic equations. We're going to learn how to translate everyday situations, like calculating areas or figuring out projectile motion, into equations we already know how to solve. Our first step is mastering the translation. Ready to tackle our first setup problem?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-word-problems.mp3'
    },
    display: {
      content: `## Setting Up Equations from Words

A rectangular field has an area of 84 square meters. The length of the field is 5 meters longer than its width.

Let 'x' represent the width of the field in meters.

**Question:** Write the quadratic equation that models this situation, before simplifying (i.e., keep it in factored form).`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "wordProblemDiagram",
          "parameters": {
                "problemType": "area",
                "labels": {
                      "length": "x + 5",
                      "width": "x",
                      "area": "A = 84 m²"
                },
                "showEquation": false
          },
          "caption": "Visualizing the rectangular field with width x and length x + 5."
    }
  },

  's3-math-quadratic-graph-features': {
    speech: {
      text: `Hi there! I'm glad to teach you about graphing quadratic functions today. We are going to learn how to understand and sketch all the key features of these awesome U-shaped curves, called parabolas! Let's start with the basics: shape and direction.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-graph-features.mp3'
    },
    display: {
      content: `### Parabola Shape and Direction

Quadratic functions, like \$y = ax^2 + bx + c\$, always graph as parabolas. The coefficient 'a' tells us everything about its direction and width.

Look at the function below:

\$\$y = -2x^2 + 8x - 5\$\$

**Question:** Based on the coefficient of \$x^2\$, what is the shape of this graph and which direction does it open?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "parabolaGraph",
          "parameters": {
                "a": -2,
                "b": 8,
                "c": -5,
                "showVertex": true,
                "showRoots": true,
                "showAxisOfSymmetry": true
          },
          "caption": "Graph of $y = -2x^2 + 8x - 5$"
    }
  },

  's3-math-quadratic-graph-completed-square': {
    speech: {
      text: `Welcome! Today we’ll be learning about one of the most powerful ways to graph quadratic functions: using the vertex form! This form makes graphing parabolas incredibly fast because it tells us exactly where the vertex is and how the graph is transformed. The general vertex form is f(x) = a times the quantity x minus h squared plus k. Let's start by identifying the vertex.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-graph-completed-square.mp3'
    },
    display: {
      content: `### Reading the Vertex

The **Vertex Form** of a quadratic function is given by:
\$\$f(x) = a(x - h)² + k\$\$

Where the vertex is the point \$(h, k)\$.

--- 

**Problem:**

What is the vertex \$(h, k)\$ of the parabola defined by the function \$f(x) = 2(x - 3)² + 1\$?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "vertexFormTransform",
          "parameters": {
                "a": 2,
                "h": 3,
                "k": 1,
                "showTransformations": true,
                "showBothForms": true
          },
          "caption": "This visual shows the parent function $y = x²$ shifting and stretching to match $f(x) = 2(x - 3)² + 1$. Observe the location of the vertex."
    }
  },

  's3-math-quadratic-graph-factorised': {
    speech: {
      text: `Hi there! Today, we're diving into graphing quadratic functions when they're written in what we call factorised form. This form, f of x equals a times the quantity x minus p times the quantity x minus q, is actually the easiest way to find where the parabola crosses the x-axis, which we call the x-intercepts. Let's start with a function and see if you can spot those intercepts right away!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-graph-factorised.mp3'
    },
    display: {
      content: `### Reading the X-Intercepts

When a quadratic function is written in the factorised form \$f(x) = a(x - p)(x - q)\$, the x-intercepts (or roots) occur at \$x = p\$ and \$x = q\$.

Consider the function:

\$\$f(x) = (x - 2)(x + 4)\$\$

What are the x-intercepts of this parabola?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "parabolaGraph",
          "parameters": {
                "a": 1,
                "b": 2,
                "c": -8,
                "showVertex": true,
                "showRoots": true,
                "showAxisOfSymmetry": true,
                "highlightVertex": false,
                "xMin": -6,
                "xMax": 4
          },
          "caption": "Observe the graph of $f(x) = (x - 2)(x + 4)$. Where does it cross the x-axis?"
    }
  },

  's3-math-quadratic-graph-polynomial': {
    speech: {
      text: `Hello! Let's explore one of the most useful forms of quadratic functions today: the standard form, f(x) equals a x squared plus b x plus c. This form holds all the secrets we need to graph parabolas quickly and accurately. Let's start by identifying the basic features that tell us how the graph will look.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-graph-polynomial.mp3'
    },
    display: {
      content: `Let's begin with the function:

\$\$f(x) = 2x^2 + 8x - 5\$\$

What are the values of \$a\$, \$b\$, and \$c\$, and based on the value of \$a\$, does the parabola open up or down?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "parabolaGraph",
          "parameters": {
                "a": 2,
                "b": 8,
                "c": -5,
                "showVertex": true,
                "showRoots": false,
                "showAxisOfSymmetry": false
          },
          "caption": "This graph shows the parabola $f(x) = 2x^2 + 8x - 5$. We can see the direction of opening immediately."
    }
  },

  's3-math-quadratic-graph-finding-function': {
    speech: {
      text: `Hi there! Today, we're diving into a super useful skill: writing the equation for a quadratic function, or a parabola, when we're given some key information. We'll start with the easiest case: when you know the vertex and one other point! This method relies on the vertex form of a quadratic equation.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-graph-finding-function.mp3'
    },
    display: {
      content: `### Finding the Equation from Vertex and a Point

The **Vertex Form** of a quadratic function is given by:

\$\$y = a(x - h)² + k\$\$

where (h, k) is the vertex.

**Problem:**

A parabola has a vertex at (2, 5) and passes through the point (0, 1).

What is the value of the stretch factor, 'a'?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "parabolaGraph",
          "parameters": {
                "a": -1,
                "b": 4,
                "c": 1,
                "highlightVertex": true
          },
          "caption": "This graph shows the parabola defined by the vertex (2, 5) and the point (0, 1). Notice how the parabola opens downward."
    }
  },

  's3-math-quadratic-graph-problem-solving': {
    speech: {
      text: `Hi there! Today, we are going to dive into one of the most useful applications of math: using quadratic graphs to solve real-world problems. We will learn how to interpret every feature of a parabola, from the vertex to the intercepts, to understand things like maximum profit or the highest point a rocket reaches. Let's start with a classic example!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-graph-problem-solving.mp3'
    },
    display: {
      content: `A ball is thrown upward from a height of 1 meter. The height, \$h\$ (in meters), of the ball above the ground \$t\$ seconds after being thrown is modeled by the equation: \$h(t) = -t² + 6t + 1\$.

The graph of this function is shown below.

### Question 1
Based on the graph, what is the maximum height, in meters, that the ball reaches?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "parabolaGraph",
          "parameters": {
                "a": -1,
                "b": 6,
                "c": 1,
                "showVertex": true,
                "showRoots": false,
                "showAxisOfSymmetry": true,
                "highlightVertex": true,
                "xMin": 0,
                "xMax": 7
          },
          "caption": "Graph showing the height (h) of the ball over time (t). Note: Only the positive time values are relevant in this physical context."
    }
  },

  /**
   * ========================================
   * S3 MATHEMATICS - SURDS & RADICALS
   * ========================================
   */
  's3-math-surds-fundamentals': {
    speech: {
      text: `Hello! Let's learn about the world of surds, radicals, and square roots with you today. These concepts are fundamental in algebra, and we’re going to make sure you master them. Let's start right at the beginning by defining what a surd actually is.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-surds-fundamentals.mp3'
    },
    display: {
      content: `### Surd Basics

A **surd** is a root of a number that cannot be simplified to a rational number (an integer or a fraction).

For example, \$\\sqrt{2}\$ is a surd, but \$\\sqrt{4}\$ is not (since \$\\sqrt{4} = 2\$).

Which of the following expressions represents a **surd**?

A) \$\\sqrt{9}\$
B) \$\\sqrt{16}\$
C) \$\\sqrt{25}\$
D) \$\\sqrt{3}\$`,
      showAfterSpeech: true
    }
  },

  's3-math-surds-simplifying': {
    speech: {
      text: `Hello! Let's learn about simplifying surds today. This skill is super useful for making complicated square roots much easier to work with. We're going to start by focusing on finding and extracting perfect square factors. Ready for our first challenge?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-surds-simplifying.mp3'
    },
    display: {
      content: `### Simplifying Surds: Perfect Square Extraction

The goal of simplifying a surd is to find the largest perfect square factor within the number under the square root sign.

**Problem 1:**

Simplify the following surd:

\$\$\\sqrt{48}\$\$`,
      showAfterSpeech: true
    }
  },

  's3-math-surds-addition-subtraction': {
    speech: {
      text: `Hi there! Ready to tackle surds? Today, we are learning how to add and subtract them. It's actually a lot like combining like terms in algebra. We'll start with the easy part: combining 'like surds'. This just means adding or subtracting the numbers in front of the square roots, treating the surd itself like a variable. Let's try an example.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-surds-addition-subtraction.mp3'
    },
    display: {
      content: `### Problem 1: Adding and Subtracting Like Surds

Simplify the following expression:

4√7 + 3√7 - √7`,
      showAfterSpeech: true
    }
  },

  's3-math-surds-multiplication-division': {
    speech: {
      text: `Hey there! Ready to dive into the exciting world of surds? Today, we're mastering how to multiply and divide these tricky square roots. We'll start with multiplication, which is surprisingly straightforward once you know the rule. Let's get started with our first problem!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-surds-multiplication-division.mp3'
    },
    display: {
      content: `### Section 1: Multiplying Surds

When multiplying surds, we use the rule: √a × √b = √(ab)

This means we multiply the numbers inside the square roots together, and then simplify the resulting surd if possible.

**Problem 1:**

Calculate and simplify the following expression:

√2 × √10`,
      showAfterSpeech: true
    }
  },

  's3-math-surds-rationalizing': {
    speech: {
      text: `Hello! Today we’ll be learning about a super useful skill called rationalizing denominators. This is all about cleaning up fractions so that we never have a square root, or a surd, hanging out in the denominator. We will start with the simpler cases, where the denominator is just a single surd. Let's get started!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-surds-rationalizing.mp3'
    },
    display: {
      content: `### Rationalizing Monomial Denominators

Our goal is to eliminate the surd from the denominator. For a monomial surd, like \$\\sqrt{5}\$, we multiply the numerator and the denominator by the surd itself.

**Problem:** Rationalize the denominator of the following expression.

\$\$\\frac{3}{\\sqrt{5}}\$\$

What is the resulting expression?`,
      showAfterSpeech: true
    }
  },

  's3-math-surds-mixed-operations': {
    speech: {
      text: `Glad to see you again! We are leveling up our surd skills today. We're diving into combined operations, where we mix up addition, subtraction, multiplication, and division in multi-step problems. Then, we'll tackle some real-world problem-solving using everything we've learned. Let's start with a challenging combined operation to warm up!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-surds-mixed-operations.mp3'
    },
    display: {
      content: `### Combined Surd Operations

We are starting with multi-step problems that combine all the operations we've mastered. 

**Question 1:**

Simplify the following expression completely:

\$\$(\\sqrt{5} + 2)(\\sqrt{5} - 1) - \\frac{10}{\\sqrt{5}}\$\$`,
      showAfterSpeech: true
    }
  },

  /**
   * ========================================
   * S3 MATHEMATICS - COORDINATE GEOMETRY
   * ========================================
   */
  's3-math-coord-geom-fundamentals': {
    speech: {
      text: `Hello! I'm thrilled to explore coordinate geometry with you today. We're going to explore the amazing world of the Cartesian plane, where we use coordinates to locate points, measure the distance between them, and even find their exact middle using midpoints. Let's start with the basics: understanding coordinates and quadrants!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-coord-geom-fundamentals.mp3'
    },
    display: {
      content: `Look at the points plotted on the coordinate plane.

### Question 1: Coordinates and Quadrants

What are the coordinates (x, y) of **Point C**, and which quadrant is it located in?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "cartesianPlane",
          "parameters": {
                "xMin": -6,
                "xMax": 6,
                "yMin": -6,
                "yMax": 6,
                "points": [
                      {
                            "x": 3,
                            "y": 4,
                            "label": "A",
                            "color": "#ef4444"
                      },
                      {
                            "x": -2,
                            "y": 5,
                            "label": "B",
                            "color": "#f97316"
                      },
                      {
                            "x": -4,
                            "y": -3,
                            "label": "C",
                            "color": "#22c55e"
                      },
                      {
                            "x": 5,
                            "y": -1,
                            "label": "D",
                            "color": "#3b82f6"
                      }
                ],
                "title": "Points on the Cartesian Plane"
          },
          "caption": "Points A, B, C, and D plotted on the coordinate plane. Remember that quadrants are numbered counter-clockwise starting from the top right (Quadrant I)."
    }
  },

  's3-math-coord-geom-gradient': {
    speech: {
      text: `Hi there! Let's learn about coordinate geometry with you today. We are going to master the key relationships between lines, starting with the concept of gradient, then moving on to parallel lines, and finally tackling perpendicular lines. Let's start by making sure we have a solid understanding of how to calculate the gradient of a straight line!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-coord-geom-gradient.mp3'
    },
    display: {
      content: `### Section 1: Understanding Gradient

The **gradient** (\$m\$) of a line measures its steepness and direction. We calculate it using the formula:

\$\$m = \\frac{\\text{Change in } y}{\\text{Change in } x} = \\frac{y_2 - y_1}{x_2 - x_1}\$\$

Use the points plotted on the graph below to find the gradient of the line segment AB.

**Point A:** (2, 7)
**Point B:** (8, 4)

What is the gradient of the line segment AB?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "cartesianPlane",
          "parameters": {
                "xMin": 0,
                "xMax": 10,
                "yMin": 0,
                "yMax": 10,
                "points": [
                      {
                            "x": 2,
                            "y": 7,
                            "label": "A(2, 7)",
                            "color": "#e11d48"
                      },
                      {
                            "x": 8,
                            "y": 4,
                            "label": "B(8, 4)",
                            "color": "#1d4ed8"
                      }
                ],
                "lines": [
                      {
                            "type": "linear",
                            "slope": -0.5,
                            "yIntercept": 8,
                            "color": "#059669"
                      }
                ],
                "title": "Line Segment AB",
                "caption": "Find the gradient of the line passing through A and B."
          },
          "caption": "Visual representation of the line segment AB."
    }
  },

  's3-math-coord-geom-line-equations': {
    speech: {
      text: `Hello! Today we’ll be learning about the fascinating world of linear equations. Lines can be written in several different forms, and learning how to switch between them is super useful. We'll start with the Point-Gradient Form, then move to Gradient-Intercept, and finally tackle the General Form. Let's start strong with our first form!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-coord-geom-line-equations.mp3'
    },
    display: {
      content: `### Section 1: Point-Gradient Form

The Point-Gradient Form is written as: \$y - y₁ = m(x - x₁)\$, where \$m\$ is the gradient (slope) and \$(x₁, y₁)\$ is a point on the line.

**Problem 1:**

A line passes through the point \$(2, 5)\$ and has a gradient (\$m\$) of \$3\$.

Write the equation of this line in **Point-Gradient Form**.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "cartesianPlane",
          "parameters": {
                "xMin": -5,
                "xMax": 5,
                "yMin": -5,
                "yMax": 10,
                "points": [
                      {
                            "x": 2,
                            "y": 5,
                            "label": "(2, 5)",
                            "color": "red"
                      }
                ],
                "lines": [
                      {
                            "type": "linear",
                            "slope": 3,
                            "yIntercept": -1,
                            "equation": "y = 3x - 1",
                            "color": "blue"
                      }
                ],
                "title": "Line through (2, 5) with slope 3",
                "caption": "The line we are defining passes through the red point $(2, 5)$ and has a slope of $3$."
          },
          "caption": "Visualizing the line we are trying to define."
    }
  },

  's3-math-coord-geom-graphing': {
    speech: {
      text: `Hello there! Let's explore graphing straight lines today. This is a super important skill that helps us visualize equations and understand relationships between variables. We'll start by mastering the Gradient-Intercept Form, which is y equals m x plus c. Ready for your first challenge?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-coord-geom-graphing.mp3'
    },
    display: {
      content: `### Section 1: Graphing from \$y = mx + c\$

We start with the **Gradient-Intercept Form** where \$m\$ is the gradient and \$c\$ is the y-intercept.

Consider the equation:

\$\$y = 2x - 3\$\$

To begin graphing this line, we need to find the starting point.

**What are the coordinates of the y-intercept?**`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "cartesianPlane",
          "parameters": {
                "lines": [
                      {
                            "type": "linear",
                            "slope": 2,
                            "yIntercept": -3,
                            "equation": "y = 2x - 3"
                      }
                ],
                "points": [
                      {
                            "x": 0,
                            "y": -3,
                            "label": "(0, -3)",
                            "color": "red"
                      }
                ],
                "xMin": -5,
                "xMax": 5,
                "yMin": -10,
                "yMax": 5,
                "title": "Graphing y = 2x - 3"
          },
          "caption": "The graph of $y = 2x - 3$. Notice the line crossing the y-axis."
    }
  },

  's3-math-coord-geom-perpendicular-bisectors': {
    speech: {
      text: `Hello! Let's learn about a really important concept in geometry and coordinate math today: perpendicular bisectors of line segments. These lines have some amazing properties that make solving complex coordinate problems much easier. Let's start by understanding their key characteristics!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-coord-geom-perpendicular-bisectors.mp3'
    },
    display: {
      content: `### Understanding Perpendicular Bisectors

Look at the segment AB and the line L (dashed blue line), which is its perpendicular bisector. P is any point on line L.

Which statement correctly describes the relationship between the distance from P to A (PA) and the distance from P to B (PB)?

A) PA is greater than PB.
B) PA is less than PB.
C) PA is equal to PB.
D) PA is twice PB.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "cartesianPlane",
          "parameters": {
                "xMin": 0,
                "xMax": 6,
                "yMin": 0,
                "yMax": 6,
                "points": [
                      {
                            "x": 1,
                            "y": 2,
                            "label": "A"
                      },
                      {
                            "x": 5,
                            "y": 2,
                            "label": "B"
                      },
                      {
                            "x": 3,
                            "y": 5,
                            "label": "P"
                      }
                ],
                "lines": [
                      {
                            "type": "vertical",
                            "xValue": 3,
                            "color": "#1e40af",
                            "style": "dashed"
                      },
                      {
                            "type": "horizontal",
                            "yValue": 2,
                            "xMin": 1,
                            "xMax": 5,
                            "color": "#ef4444"
                      }
                ],
                "title": "Perpendicular Bisector Concept"
          },
          "caption": "Line L (dashed blue line) is the perpendicular bisector of segment AB (red line). P is a point on L."
    }
  },

  's3-math-coord-geom-applications': {
    speech: {
      text: `Hey there! I'm excited to start this new topic with you. Today, we're diving into one of the most powerful applications of coordinate geometry: using algebra to rigorously prove geometric facts. We will use tools like the distance formula and the slope formula to prove properties of shapes like triangles and quadrilaterals. We are starting with triangles. Ready for our first challenge?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-coord-geom-applications.mp3'
    },
    display: {
      content: `### Section 1: Proving Triangle Properties

We can use coordinate geometry to prove if a triangle is isosceles, right-angled, or equilateral by calculating the lengths of its sides and the slopes of those sides.

Consider the triangle ABC with vertices A(1, 1), B(5, 1), and C(1, 5).

**Question:** Prove that triangle ABC is a right-angled isosceles triangle. (Hint: You will need the distance formula and the slope formula.)`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "cartesianPlane",
          "parameters": {
                "xMin": 0,
                "xMax": 6,
                "yMin": 0,
                "yMax": 6,
                "points": [
                      {
                            "x": 1,
                            "y": 1,
                            "label": "A(1, 1)",
                            "style": "closed"
                      },
                      {
                            "x": 5,
                            "y": 1,
                            "label": "B(5, 1)",
                            "style": "closed"
                      },
                      {
                            "x": 1,
                            "y": 5,
                            "label": "C(1, 5)",
                            "style": "closed"
                      }
                ],
                "title": "Triangle ABC",
                "caption": "The vertices of Triangle ABC plotted on the coordinate plane."
          },
          "caption": "Visualizing the triangle ABC."
    }
  },

  's3-math-coord-geom-3d': {
    speech: {
      text: `Hello! Let's learn about the world of 3D geometry with you today. We are going to explore how to use coordinates to describe rectangular prisms, also known as cuboids, and then we'll learn how to calculate distances and find midpoints in three dimensional space. Get ready to add that third dimension, Z, to your math toolkit!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-coord-geom-3d.mp3'
    },
    display: {
      content: `### 1. 3D Coordinates and Rectangular Prisms

Imagine a rectangular prism (cuboid) placed in the 3D coordinate system. One vertex rests at the **origin O(0, 0, 0)**.

Based on the visualization:

*   **Width (x-direction):** 4 units
*   **Length (y-direction):** 3 units
*   **Height (z-direction):** 5 units

What are the coordinates (x, y, z) of the vertex labeled P, which is the point farthest from the origin?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "coordinate3DPlane",
          "parameters": {
                "width": "4",
                "length": "3",
                "height": "5",
                "showAxes": true,
                "showOriginLabel": true,
                "customPoints": [
                      {
                            "x": 4,
                            "y": 3,
                            "z": 5,
                            "label": "P"
                      }
                ]
          },
          "caption": "A rectangular prism (cuboid) starting at the origin O(0, 0, 0) with dimensions 4 units (width), 3 units (length), and 5 units (height)."
    }
  },

  /**
   * ========================================
   * S3 MATHEMATICS - CIRCLE GEOMETRY
   * ========================================
   */
  's3-math-circle-geometry-definitions': {
    speech: {
      text: "Greetings! Let's start our journey into circle geometry today. Circles are everywhere, and understanding their parts is the first step to mastering them. We're going to define things like arcs, chords, and segments, but let's start with the very basics: the center, radius, and diameter.",
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-circle-geometry-definitions.mp3'
    },
    display: {
      content: '### Parts of a Circle\n\nTake a look at the circle diagram. The line segment connecting the centre (O) to the edge of the circle is highlighted.\n\nWhat is the mathematical term for this line segment?',
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "circleBasic",
          "parameters": {
                "radius": "r",
                "centreLabel": "O",
                "showCentre": true,
                "showRadius": true,
                "showDiameter": false,
                "highlightElement": "radius"
          },
          "caption": "A basic circle with centre O, showing a key line segment."
    }
  },

  's3-math-circle-geometry-angle-semicircle': {
    speech: {
      text: "Hey there! Today we're going to learn about one of the most elegant circle theorems: the Angle in a Semi-circle theorem. This theorem is super useful and easy to remember. It states that if you draw a triangle inside a circle where one side is the diameter, the angle opposite the diameter—the one on the circumference—will always be 90 degrees, or a right angle! Let's look at a diagram and confirm this key fact.",
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-circle-geometry-angle-semicircle.mp3'
    },
    display: {
      content: '### Understanding the Theorem\n\nLook at the diagram provided. AB is the diameter of the circle, and C is a point on the circumference.\n\nAccording to the Angle in a Semi-circle Theorem, what is the measure of angle ACB?\n\nA) 45°\nB) 90°\nC) 180°\nD) It depends on the location of C',
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "circleSemicircle",
          "parameters": {
                "diameter": "AB",
                "pointOnCircle": "C",
                "showAngle": true,
                "showRightAngleMarker": true,
                "highlightDiameter": true
          },
          "caption": "The angle subtended by the diameter (AB) at any point on the circumference (C) is 90°."
    }
  },

  's3-math-circle-geometry-chords': {
    speech: {
      text: "Hey there! I'll take you into the fascinating world of circles today. We're going to explore some powerful theorems about chords—those line segments that connect two points on a circle. These theorems make solving geometry problems much easier! Let's start with our very first theorem: The Equal Chords Theorem.",
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-circle-geometry-chords.mp3'
    },
    display: {
      content: '### Introductory Problem: Equal Chords and Central Angles\n\nIn the circle with center O, chord AB is equal in length to chord CD (AB = CD).\n\nIf the angle subtended by chord AB at the center, ∠AOB, is 75°, what is the measure of the angle subtended by chord CD at the center, ∠COD?',
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "circleWithChords",
          "parameters": {
                "chord1Points": "AB",
                "chord2Points": "CD",
                "showPerpendicular": false,
                "equalChords": true,
                "highlightChord": "none"
          },
          "caption": "A circle showing two equal chords, AB and CD, subtending angles at the center O."
    }
  },

  's3-math-circle-geometry-radius-tangent': {
    speech: {
      text: "Hey there! Let's learn about a super important concept in geometry today: the Radius and Tangent Perpendicular Theorem. This theorem connects two fundamental parts of a circle, the radius and the tangent line. Before we get to the perpendicular part, let's make sure we are clear on what a tangent line actually is.",
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-circle-geometry-radius-tangent.mp3'
    },
    display: {
      content: '### Understanding Tangents\n\nLook at the visualizer showing a circle and a line. Based on the definition, which of the following statements correctly describes a **tangent line**?\n\nA. A line that passes through the center of the circle.\nB. A line that intersects the circle at exactly one point.\nC. A line segment whose endpoints are on the circle.\nD. A line that intersects the circle at two points.',
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "circleTangent",
          "parameters": {
                "tangentPoint": "T",
                "showRadius": false,
                "showRightAngle": false,
                "tangentLabel": "Line L",
                "highlightRadius": false,
                "highlightTangent": true
          },
          "caption": "Line L is tangent to the circle at point T."
    }
  },

  's3-math-circle-geometry-tangents-external': {
    speech: {
      text: "Hello! Today we’ll be learning about a really neat concept about circles called 'Tangents from an External Point'. The main idea is simple but super powerful: if you draw two tangents from the same point outside a circle, those two tangents will always be exactly the same length! This is called the Equal Tangents Theorem. Let's look at a diagram and then try a quick problem.",
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-circle-geometry-tangents-external.mp3'
    },
    display: {
      content: '### Introductory Problem\n\nIn the figure shown, PA and PB are tangents to the circle from the external point P.\n\nIf the length of PA = 3x + 5 and the length of PB = 20, what is the value of x?',
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "circleTwoTangents",
          "parameters": {
                "externalPoint": "P",
                "tangentPoint1": "A",
                "tangentPoint2": "B",
                "showRadii": false,
                "showTangentLengths": true,
                "highlightTangents": true
          },
          "caption": "The Equal Tangents Theorem states that the lengths of the tangents PA and PB are equal."
    }
  },

  's3-math-circle-geometry-angle-centre': {
    speech: {
      text: "Hi there! Today, we're going to tackle one of the most fundamental and useful circle theorems: the Angle at the Centre theorem. This theorem is elegant and powerful, essentially stating that the angle formed at the centre of a circle is exactly double the angle formed at the circumference, provided they are both subtended by the same arc. Let's start by seeing this relationship visually and solving a quick problem.",
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-circle-geometry-angle-centre.mp3'
    },
    display: {
      content: '### Introductory Problem\n\nTake a look at the circle below. The angle at the centre is 100°. Both the angle at the centre (∠AOB) and the angle at the circumference (∠ACB, marked as x) are subtended by the same arc, AB.\n\nUsing the **Angle at the Centre Theorem**, what is the value of x (in degrees)?\n\n$ \\text{Angle at the Centre} = 2 \\times \\text{Angle at the Circumference} $',
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "circleAngleCentre",
          "parameters": {
                "arcPoints": "AB",
                "circumferencePoint1": "C",
                "arcAngleDegrees": 100,
                "showAngleCentre": true,
                "showAngleCircumference": true,
                "angleCentreLabel": "100°",
                "angleCircumferenceLabel": "x",
                "highlightArc": true
          },
          "caption": "The angle at the centre (∠AOB = 100°) and the angle at the circumference (∠ACB = x) are subtended by the same arc, AB."
    }
  },

  's3-math-circle-geometry-angle-same-arc': {
    speech: {
      text: "Hello! Today we’ll be learning about a really neat circle theorem about angles subtended by the same arc. This theorem is super useful and often called the Angles in the Same Segment theorem. It tells us something very simple and powerful about angles that share the same endpoints on the circle's circumference. Let's look at the diagram and figure out what that relationship is.",
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-circle-geometry-angle-same-arc.mp3'
    },
    display: {
      content: '### Introductory Problem 1\n\nIn the circle shown, the angles ∠ACB and ∠ADB are subtended by the same arc AB.\n\nIf ∠ACB = 40°, what is the value of x (∠ADB)?\n\nx = ?',
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "circleSameArc",
          "parameters": {
                "arcPoints": "AB",
                "circumferencePoint1": "C",
                "circumferencePoint2": "D",
                "arcAngleDegrees": 90,
                "angleLabel": "40°",
                "angleLabel2": "x",
                "showAngle1": true,
                "showAngle2": true,
                "oppositeSegments": false
          },
          "caption": "Angles ∠ACB and ∠ADB are subtended by the same arc AB."
    }
  },
  /**
   * ========================================
   * S3 MATHEMATICS - Exponential and Logarithm
   * ========================================
   */
  's3-math-exponential-logarithms-exponential-functions': {
    speech: {
      text: `Hey there! I'm excited to start our journey into exponential functions today. These functions are super important because they describe rapid growth and decay—things like population changes or compound interest. The key feature is that the variable, usually x, is up in the exponent! Let's start by defining exactly what an exponential function looks like.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponential-logarithms-exponential-functions.mp3'
    },
    display: {
      content: `Exponential functions are defined by the general form \$f(x) = a \\cdot b^x\$, where \$a\$ is the initial value and \$b\$ is the base.

Which statement correctly identifies the location of the **variable** in an exponential function?

A) The variable (x) is the base.
B) The variable (x) is the exponent.
C) The variable (x) is the coefficient (a).`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "exponentialGraph",
          "parameters": {
                "base": 2,
                "coefficient": 1,
                "verticalShift": 0,
                "showAsymptote": true,
                "showYIntercept": true,
                "xRange": [
                      -3,
                      4
                ],
                "showGrid": true,
                "label": "f(x) = 2^x"
          },
          "caption": "This graph of $f(x) = 2^x$ illustrates exponential growth. Notice how the input variable, x, controls the power of the base (2)."
    }
  },

  's3-math-exponential-logarithms-exponential-graphs': {
    speech: {
      text: `Hello! Let's explore one of the most exciting topics in algebra: the graphs of exponential functions! These functions model everything from population growth to compound interest. We are going to start with the basics: how to plot these graphs using a simple table of values. Let's get started!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponential-logarithms-exponential-graphs.mp3'
    },
    display: {
      content: `### Section 1: Graphing Basics

We are going to start by exploring the parent function for exponential growth: \$f(x) = 2^x\$.

To understand the shape of the graph, we first need to calculate some points.

Complete the table of values below for the given x-values. What is the value of \$f(x)\$ when \$x = 3\$?

| x | \$f(x) = 2^x\$ | (x, f(x)) |
|---|---|---|
| -2 | | |
| -1 | | |
| 0 | | |
| 1 | | |
| 2 | | |
| **3** | | |`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "exponentialGraph",
          "parameters": {
                "base": 2,
                "coefficient": 1,
                "verticalShift": 0,
                "showAsymptote": true,
                "showYIntercept": true,
                "xRange": [
                      -3,
                      4
                ],
                "yRange": [
                      -1,
                      10
                ],
                "highlightPoints": [
                      {
                            "x": 3,
                            "label": "(3, 8)"
                      }
                ]
          },
          "caption": "This graph shows the function $f(x) = 2^x$. We are calculating the points that define this curve."
    }
  },

  's3-math-exponential-logarithms-exponential-equations': {
    speech: {
      text: `Hello! Let's learn about exponential equations with you today. These equations look tricky, but once you master the trick of getting the bases to match, solving them becomes super straightforward! We're going to start with some simple cases where the bases are already the same or easy to make the same. Ready for our first problem?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponential-logarithms-exponential-equations.mp3'
    },
    display: {
      content: `### Section 1: Simple Same-Base Equations

When solving exponential equations, our primary goal is to rewrite both sides so they have the **same base**. Once the bases are equal, we can simply equate the exponents.

Solve for x:

5ˣ = 125

What exponent must 5 be raised to in order to equal 125?`,
      showAfterSpeech: true
    }
  },

  's3-math-exponential-logarithms-exponential-growth': {
    speech: {
      text: `Hello! I'm thrilled to explore one of the most powerful concepts in mathematics: Exponential Growth! This is how things like populations, investments, and even viruses spread. It's all about growth that gets faster and faster. We're going to start by understanding the core idea—what makes exponential growth different from regular, linear growth.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponential-logarithms-exponential-growth.mp3'
    },
    display: {
      content: `We are comparing two investment strategies over 5 days, starting with \$10.

**Strategy A:** Add \$5 every day.
**Strategy B:** Multiply the current amount by 1.5 every day.

1. Calculate the amount after 3 days for both strategies.
2. Which strategy represents **Exponential Growth**?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "exponentialGraph",
          "parameters": {
                "base": 2,
                "coefficient": 1,
                "verticalShift": 0,
                "xRange": [
                      -2,
                      4
                ],
                "yRange": [
                      0,
                      16
                ],
                "label": "f(x) = 2ˣ",
                "showAsymptote": true,
                "showYIntercept": true
          },
          "caption": "This graph shows a classic exponential growth function, f(x) = 2ˣ. Notice how the curve starts slow but quickly shoots upward. This is the hallmark of exponential growth."
    }
  },

  's3-math-exponential-logarithms-exponential-decay': {
    speech: {
      text: `Hello! I'm thrilled to explore a fascinating topic today: exponential decay. We've seen how things can grow exponentially, but what happens when they shrink? Decay is all about things decreasing rapidly over time, like the value of a car or the amount of medicine in your bloodstream. Let's start by looking at the graph of a decay function.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponential-logarithms-exponential-decay.mp3'
    },
    display: {
      content: `### Understanding Exponential Decay

Exponential functions have the form \$f(x) = p \\times a^x\$, where \$p\$ is the starting value and \$a\$ is the base.

We know that if the base \$a > 1\$, we have **exponential growth**.

What condition must the base \$a\$ meet for the function to show **exponential decay**?

Which of the following functions represents exponential decay?

A. \$f(x) = 3 \\times 1.5^x\$
B. \$g(x) = 5 \\times 0.8^x\$
C. \$h(x) = 0.5 \\times 2^x\$`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "exponentialGraph",
          "parameters": {
                "base": 0.7,
                "coefficient": 4,
                "xRange": [
                      0,
                      7
                ],
                "yRange": [
                      0,
                      5
                ],
                "realWorldContext": true,
                "label": "f(x) = 4 × 0.7^x"
          },
          "caption": "This graph illustrates exponential decay, where the function value decreases as x increases, approaching the x-axis."
    }
  },

  's3-math-exponential-logarithms-common-logarithms': {
    speech: {
      text: `Hello! Let's learn about a super useful topic today: Common Logarithms. Logarithms might look tricky at first, but they are just another way of asking a question about exponents. We're going to start by making sure we understand how logarithms and exponents are related, focusing on the foundational definition.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponential-logarithms-common-logarithms.mp3'
    },
    display: {
      content: `### Section 1: Definition

Logarithms are the inverse of exponential functions. They answer the question: 'To what power must we raise the base to get the number?'

If we have the exponential statement:

\$\$10^2 = 100\$\$

Which of the following correctly represents this relationship in **logarithmic form**?

A) \$\\log_{10}(2) = 100\$
B) \$\\log_{10}(100) = 2\$
C) \$\\log_{2}(100) = 10\$`,
      showAfterSpeech: true
    }
  },

  's3-math-exponential-logarithms-logarithm-laws': {
    speech: {
      text: `Greetings! Ready to unlock some powerful secrets of math? Today, we are diving into the Laws of Logarithms, which let us simplify and solve some tricky expressions. We're starting with the Product Law. This law helps us expand multiplication inside a logarithm into addition outside. Let's try our first problem!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponential-logarithms-logarithm-laws.mp3'
    },
    display: {
      content: `### Product Law of Logarithms

The Product Law states that:
\$\$\\log_b(xy) = \\log_b(x) + \\log_b(y)\$\$

**Problem 1:**
Expand the following expression using the Product Law. Remember to simplify any resulting logarithmic terms if possible.

\$\$\\log_2(8x)\$\$`,
      showAfterSpeech: true
    }
  },

  's3-math-exponential-logarithms-using-logarithms': {
    speech: {
      text: `Hello! Let's learn about a really powerful math tool today: logarithms! They might seem tricky, but they are the secret weapon for solving some of the coolest exponential problems. We're going to learn how to use logs to find unknown exponents. Think of them as the inverse operation to exponentiation, just like division is the inverse of multiplication.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponential-logarithms-using-logarithms.mp3'
    },
    display: {
      content: `We use logarithms to find unknown exponents. Logarithms essentially ask: "What exponent do I need?"

Consider this simple equation:
\$\$2^x = 8\$\$

1. What is the value of x?
2. How would you rewrite this equation using the definition of a logarithm (log base 2)?`,
      showAfterSpeech: true
    }
  },

  's3-math-exponential-logarithms-logarithms-other-bases': {
    speech: {
      text: `Glad to see you again! We've spent a lot of time with logarithms in base 10 and base e. But what if we need to use a different base, like base 2 or base 5? Today, we're going to master understanding and converting logarithms in any base. This is a crucial step for solving complex exponential equations, and it all starts with the basic definition. Let's jump right in!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponential-logarithms-logarithms-other-bases.mp3'
    },
    display: {
      content: `### Understanding Logarithms in Any Base

The fundamental definition of a logarithm is that it is the inverse operation of exponentiation:

\$\$\\log_b(x) = y \\iff b^y = x\$\$

**Problem:**

Convert the logarithmic equation \$\\log_3(81) = x\$ into its equivalent exponential form and solve for \$x\$.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "logarithmGraph",
          "parameters": {
                "base": 3,
                "coefficient": 1,
                "horizontalShift": 0,
                "verticalShift": 0,
                "label": "log₃(x)",
                "showAsymptote": true,
                "showKeyPoints": true,
                "xRange": [
                      0.1,
                      10
                ],
                "yRange": [
                      -2,
                      3
                ],
                "showGrid": true
          },
          "caption": "This graph shows the function $f(x) = \\log_3(x)$. Notice the key point (3, 1), where the function value equals 1 when the input equals the base."
    }
  },

  /**
   * ========================================
   * S3 MATHEMATICS - SETS & VENN DIAGRAMS
   * ========================================
   */
  's3-math-sets-fundamentals': {
    speech: {
      text: `Hi there! I'm thrilled to explore the world of sets with you today. Sets are fundamental to math and logic, and they're really just collections of distinct objects. We'll start by learning how to write sets down, count what's inside them, and then explore how different sets relate to each other. Ready to jump in?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-fundamentals.mp3' 
    },
    display: {
      content: `A set is a collection of distinct objects. We use curly braces { } to list the elements inside the set.

Let's consider Set A, which contains the first five positive integers:
\$\$A = \\\\{1, 2, 3, 4, 5\\\\}\$\$

### Your Turn:

Set B is the set of prime numbers less than 10:
\$\$B = \\\\{2, 3, 5, 7\\\\}\$\$

We use the symbol '∈' to mean 'is an element of' and '∉' to mean 'is not an element of'.

Which symbol (∈ or ∉) correctly completes the following statement?

\$\$9 \\\\text{ \\_\\_\\_ } B\$\$`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "setVisualizer",
          "parameters": {
                "setName": "A",
                "elements": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5"
                ],
                "displayMode": "list",
                "showCardinality": true,
                "caption": "Set A contains 5 elements. We write the number of elements as n(A) = 5."
          },
          "caption": "A set is a collection of distinct objects, often listed inside curly braces { }."
    }
  },

  's3-math-sets-complement': {
    speech: {
      text: `Hello! Let's learn about set theory today. We're going to explore the idea of the universal set, which is the big picture, and how it helps us define the complement of a set. The complement is simply everything that is not in the set but is in the universal set. Let's start with a visual example!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-complement.mp3'
    },
    display: {
      content: `### Understanding the Complement of a Set

The **Universal Set (U)** is the set of all possible elements under consideration.

The **Complement of Set A**, written as A' or Aᶜ, is the set of all elements in U that are *not* in A.

---

**Problem 1:**

A teacher defines the universal set U as the set of all primary and secondary colors:
\$\$U = \\{\\text{red, orange, yellow, green, blue, purple}\\}\$\$

She defines set P as the set of primary colors:
\$\$P = \\{\\text{red, yellow, blue}\\}\$\$

1. List the elements of the complement of P, denoted P'.
2. How many elements are in P'? (Find n(P'))`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "vennDiagram1Set",
          "parameters": {
                "setLabel": "A",
                "universalSetLabel": "U",
                "setElements": [
                      "1",
                      "3",
                      "5"
                ],
                "complementElements": [
                      "2",
                      "4",
                      "6",
                      "7"
                ],
                "showElements": true,
                "shadeRegion": "none",
                "caption": "The Universal Set U contains all elements. Set A and its complement A' partition U."
          },
          "caption": "The Universal Set U contains all elements. Set A and its complement A' partition U."
    }
  },

  's3-math-sets-intersection-union': {
    speech: {
      text: `Hello! Let's learn about the world of set operations with you today. We're going to learn all about how sets interact, specifically focusing on intersection and union, and then move on to some more complex combined operations. These concepts are fundamental for understanding probability and data analysis. Ready to start with some basic operations?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-intersection-union.mp3'
    },
    display: {
      content: `### Basic Set Operations: Intersection

We are given two sets:

Set A = {1, 3, 5, 7, 9}
Set B = {1, 2, 3, 4, 5}

**Question:** Find the intersection of A and B, written as A ∩ B. Which elements do both sets share?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "vennDiagram",
          "parameters": {
                "setALabel": "A",
                "setBLabel": "B",
                "layout": "overlapping",
                "aOnlyElements": [
                      "7",
                      "9"
                ],
                "bOnlyElements": [
                      "2",
                      "4"
                ],
                "intersectionElements": [
                      "1",
                      "3",
                      "5"
                ],
                "neitherElements": [],
                "showElements": true,
                "shadeRegion": "intersection",
                "highlightSet": "none"
          },
          "caption": "The shaded region represents the intersection of A and B (A ∩ B)."
    }
  },

  's3-math-sets-special-number-sets': {
    speech: {
      text: `Hi there! Ready to dive into some fundamental math concepts? Today, we're exploring Special Number Sets. These sets are the building blocks of mathematics, helping us categorize every number we use, from simple counting numbers to complex irrational values. We'll start with the basics: the Natural Numbers and the Integers!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-special-number-sets.mp3'
    },
    display: {
      content: `### Section 1: Integer Sets (ℕ, ℤ)

We start with the **Natural Numbers**, denoted by ℕ. These are the counting numbers: {1, 2, 3, ...}.

Next, we have the **Integers**, denoted by ℤ. This set includes all natural numbers, zero, and the negative whole numbers: {..., -3, -2, -1, 0, 1, 2, 3, ...}.

Take a look at the number line below, which visualizes the set of Integers (ℤ).

**Problem:**

Given the following list of numbers: \$5\$, \$0\$, \$-10\$, \$1.5\$, \$\\frac{1}{2}\$

Which of these numbers belong to the set of **Integers (ℤ)**?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "numberLine",
          "parameters": {
                "min": -5,
                "max": 5,
                "step": 1,
                "highlightIntegers": true,
                "showArrows": true,
                "title": "The Integers (ℤ)"
          },
          "caption": "Integers (ℤ) include all whole numbers: positive, negative, and zero. They are discrete points on the number line."
    }
  },

  's3-math-sets-interval-notation': {
    speech: {
      text: `Welcome! Today we’ll be learning about a super useful topic called interval notation. It's a neat, shorthand way to describe sets of numbers, and it connects directly to what we see on a number line. Let's start right away by looking at how the brackets work!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-interval-notation.mp3'
    },
    display: {
      content: `### Reading Intervals from a Number Line

Take a look at the number line shown below. This shaded region represents a set of real numbers.

How would you write this set using **interval notation**?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "numberLine",
          "parameters": {
                "min": -3,
                "max": 5,
                "intervals": [
                      {
                            "start": -1,
                            "end": 3,
                            "startInclusive": true,
                            "endInclusive": false
                      }
                ]
          },
          "caption": "A number line representation of a set of numbers."
    }
  },

  's3-math-sets-venn-diagrams': {
    speech: {
      text: `Hello! Let's learn about Venn diagrams with you today. They are fantastic tools for visualizing relationships between groups of things. We'll start by mastering the drawing basics—the universal set, the circles, and the labels—and then move on to using them to represent complex set operations. Ready to start with the foundational drawing?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-venn-diagrams.mp3'
    },
    display: {
      content: `We are organizing a set of students (U) based on two activities: Set A (Plays Soccer) and Set B (Plays Piano).

If a student, Lisa, plays **both** Soccer and Piano, which of the following regions describes her placement?

A) The region *only* inside A.
B) The region where A and B *overlap*.
C) The region *only* inside B.
D) The region *outside* both A and B.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "vennDiagram",
          "parameters": {
                "setALabel": "A (Soccer)",
                "setBLabel": "B (Piano)",
                "universalSetLabel": "U (Class)",
                "layout": "overlapping",
                "showElements": false,
                "highlightSet": "none"
          },
          "caption": "Basic structure of a two-set Venn Diagram."
    }
  },

  's3-math-sets-venn-regions': {
    speech: {
      text: `Hello! Today we’ll be learning about some advanced set theory using our favorite visual tool: Venn diagrams. We're going to use them to prove and understand powerful set identities and laws, like De Morgan's Laws. Let's start by verifying a fundamental identity visually!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-venn-regions.mp3'
    },
    display: {
      content: `### Understanding and Verifying Set Identities

We are going to verify the identity known as De Morgan's First Law: \$\$(A ∪ B)' = A' ∩ B'\$\$

First, let's focus on the left side of the equation: \$(A ∪ B)'\$.

Which region in the Venn diagram represents the complement of the union of A and B?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "vennDiagram",
          "parameters": {
                "setALabel": "A",
                "setBLabel": "B",
                "layout": "overlapping",
                "aOnlyElements": "",
                "bOnlyElements": "",
                "intersectionElements": "",
                "neitherElements": "",
                "showRegionCounts": false,
                "shadeRegion": "neither"
          },
          "caption": "The shaded region represents the set $(A ∪ B)'$"
    }
  },

  's3-math-sets-numbers-in-regions': {
    speech: {
      text: `Greetings! Get ready to dive into the fascinating world of set theory and counting. We are going to learn how to use Venn diagrams to organize data and figure out how many things fit into specific categories, especially when those categories overlap. This is super useful for solving survey problems!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-numbers-in-regions.mp3'
    },
    display: {
      content: `## Basic Counting: Two Sets

A survey was conducted among 50 students about their favorite hot drinks.

*   30 students like Coffee (C)
*   25 students like Tea (T)
*   5 students like neither Coffee nor Tea

**Question:** How many students like both Coffee and Tea? (i.e., find n(C ∩ T))`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "vennDiagram",
          "parameters": {
                "setALabel": "Coffee (C)",
                "setBLabel": "Tea (T)",
                "layout": "overlapping",
                "aOnlyElements": "(30-?)",
                "bOnlyElements": "(25-?)",
                "intersectionElements": "(?)",
                "neitherElements": 5,
                "showRegionCounts": true,
                "highlightSet": "none"
          },
          "caption": "A two-set Venn diagram to organize the survey data. Remember the total surveyed is 50."
    }
  },

  's3-math-sets-problem-solving': {
    speech: {
      text: `Hi there! Get ready to unlock the secrets of surveys and data! Venn diagrams are incredibly powerful tools for organizing information, especially when things overlap. We are starting with two-set problems, which are the foundation for solving complex real-world scenarios. Let's dive right into our first survey problem. I've set up a Venn diagram to help us visualize the data.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-problem-solving.mp3'
    },
    display: {
      content: `### Two-Set Survey Problem

A survey of **50 students** revealed the following preferences for morning beverages:

*   30 students like Coffee (C).
*   25 students like Tea (T).
*   10 students like both Coffee and Tea.

**Question:** How many students like **neither** Coffee nor Tea?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "vennDiagram",
          "parameters": {
                "setALabel": "Coffee (C)",
                "setBLabel": "Tea (T)",
                "universalSetLabel": "Total (50)",
                "layout": "overlapping",
                "aOnlyElements": 20,
                "bOnlyElements": 15,
                "intersectionElements": 10,
                "neitherElements": 0,
                "showRegionCounts": true,
                "caption": "We know the total surveyed (50) and the intersection (10). Use the given totals for C (30) and T (25) to find the remaining regions."
          },
          "caption": "Venn Diagram for the Coffee and Tea Survey"
    }
  },

  /**
   * ========================================
   * S4 MATHEMATICS - PROBABILITY
   * ========================================
   */
  's4-math-probability-basic-concepts': {
    speech: {
      text: `Hey there! I'm so excited to start our journey into probability today. Probability is all about predicting how likely things are to happen, and it's super useful in everyday life. We're going to start with the basics: understanding all the possible results in an experiment, which we call the sample space. Ready to dive in?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-probability-basic-concepts.mp3'
    },
    display: {
      content: `### Section 1: Sample Spaces and Outcomes

Imagine you flip two standard coins, one after the other. We want to list every possible result.

Let H represent Heads and T represent Tails.

**Question:** List all the possible outcomes in the sample space (S) for this experiment. (Hint: The order matters, so HT is different from TH.)`,
      showAfterSpeech: true
    }
  },

  's4-math-probability-combined-events': {
    speech: {
      text: `Hello! Let's learn about combined events and probability rules with you. Today, we'll learn how to combine probabilities using the addition and multiplication rules. We'll start with a fundamental concept: mutually exclusive events. These are events that simply cannot happen at the same time. Let's look at an example using a standard die roll!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-probability-combined-events.mp3'
    },
    display: {
      content: `### Section 1: Mutually Exclusive Events

We are rolling a standard six-sided die.

Let A be the event of rolling a 2. (\$P(A) = \\frac{1}{6}\$)
Let B be the event of rolling an odd number (1, 3, or 5). (\$P(B) = \\frac{3}{6}\$)

Since A and B cannot happen at the same time, they are **mutually exclusive**. We can find the probability of A OR B happening using the simple Addition Rule:

\$\$P(A \\cup B) = P(A) + P(B)\$\$

What is the probability of rolling a 2 OR an odd number, \$P(A \\cup B)\$? (Express your answer as a fraction in simplest form.)`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "vennDiagram",
          "parameters": {
                "setALabel": "A (Roll a 2)",
                "setBLabel": "B (Roll Odd)",
                "layout": "disjoint",
                "aOnlyElements": 1,
                "bOnlyElements": 3,
                "intersectionElements": 0,
                "neitherElements": 2,
                "showRegionCounts": true,
                "shadeRegion": "union"
          },
          "caption": "Events A and B are mutually exclusive (disjoint). The shaded region represents $P(A \\cup B)$, which includes all outcomes in A or B."
    }
  },

  's4-math-probability-trees': {
    speech: {
      text: `Hello! Let's learn about a super useful topic today: Probability Trees! These diagrams are fantastic tools for visualizing and calculating probabilities for experiments that happen in multiple stages. We'll start with drawing the trees, then learn how to use them to find probabilities, handle three or more stages, and finally tackle tricky scenarios like 'without replacement'. Let's jump right into constructing our first tree!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-probability-trees.mp3'
    },
    display: {
      content: `## Section 1: Tree Construction

### Introductory Problem

Imagine you flip a fair coin twice.

We need to construct a probability tree diagram to map out all possible sequences of outcomes.

**Question:** Based on the visual tool provided, list all the possible final outcomes (sequences) for this two-stage experiment.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "probabilityTree",
          "parameters": {
                "stage1": [
                      {
                            "outcome": "Heads (H)",
                            "probability": 0.5
                      },
                      {
                            "outcome": "Tails (T)",
                            "probability": 0.5
                      }
                ],
                "stage2": [
                      {
                            "outcome": "Heads (H)",
                            "probability": 0.5
                      },
                      {
                            "outcome": "Tails (T)",
                            "probability": 0.5
                      }
                ],
                "showProbabilities": true
          },
          "caption": "A probability tree for two independent coin flips."
    }
  },

  's4-math-probability-conditional': {
    speech: {
      text: `Hey there! I am so excited to dive into Conditional Probability with you today. This is where we learn about the probability of an event happening, given that we already know another event has occurred. It's like zooming in on a specific part of our data! We are going to master interpreting P(A given B), using the formula, working with probability trees, and reading two-way tables.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-probability-conditional.mp3'
    },
    display: {
      content: `We surveyed 150 people about their gender and whether they prefer cats or dogs. The results are shown in the table below.

### 1. Conditional Probability Concept

**Question:**

Imagine we randomly select a person **who is Male (M)**. What is the probability that this person **Likes Cats (C)**?

This is written as P(C | M).`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "twoWayTable",
          "parameters": {
                "rowLabels": [
                      "Male (M)",
                      "Female (F)"
                ],
                "columnLabels": [
                      "Likes Cats (C)",
                      "Likes Dogs (D)"
                ],
                "data": [
                      [
                            20,
                            50
                      ],
                      [
                            40,
                            40
                      ]
                ],
                "showTotals": true,
                "highlightRow": 0,
                "highlightCell": {
                      "row": 0,
                      "col": 0
                },
                "caption": "Survey results on pet preference by gender (150 people)"
          },
          "caption": "Survey results on pet preference by gender (150 people)"
    }
  },

  's4-math-probability-applications': {
    speech: {
      text: `Hi there! We're moving into the really exciting part of probability: applying these concepts to real-world scenarios. Today, we'll tackle everything from medical testing and quality control to those tricky 'at least' problems. Get ready to use all your probability rules together to solve some complex challenges!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-probability-applications.mp3'
    },
    display: {
      content: `### Section 1: Real-World Probability Applications

**Quality Control Scenario**

A manufacturing plant produces electronic components. Historically, **2%** of all components are defective (D).

The plant uses an automated testing machine (T) with the following accuracy rates:

1.  If a component is defective, the test correctly flags it as positive (T+) **95%** of the time (True Positive Rate).
2.  If a component is *not* defective, the test incorrectly flags it as positive (a 'false positive') **5%** of the time.

If a randomly selected component tests positive (T+), what is the probability that it is **actually defective**? (P(D | T+))`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "twoWayTable",
          "parameters": {
                "rowLabels": [
                      "Defective (D)",
                      "Not Defective (D')"
                ],
                "columnLabels": [
                      "Test Positive (T+)",
                      "Test Negative (T-)"
                ],
                "data": [
                      [
                            19,
                            1
                      ],
                      [
                            49,
                            931
                      ]
                ],
                "highlightColumn": 0,
                "highlightCell": {
                      "row": 0,
                      "col": 0
                },
                "showTotals": true,
                "showProbabilities": false,
                "caption": "Quality Control Data based on 1000 components. We need P(D | T+), which is the count of (D and T+) divided by the total count of (T+)."
          }
    }
  },

  /**
   * ========================================
   * S4 MATHEMATICS - DIFFERENTIAL CALCULUS
   * ========================================
   */
  's4-math-differential-calculus-limits': {
    speech: {
      text: `Hey there! I'm so excited to start learning about limits with you. Limits are one of the most fundamental ideas in calculus. They help us understand what value a function is heading toward as the input gets incredibly close to a certain number. It's like predicting where you'll end up, even if you can't actually step on that exact spot. Let's dive right into our first problem to see this concept in action.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-differential-calculus-limits.mp3'
    },
    display: {
      content: `Consider the function \$f(x) = x² + 3\$.

We want to find the limit of \$f(x)\$ as \$x\$ approaches 2, written as:

\$\$\\lim_{x \\to 2} (x² + 3)\$\$

Based on your intuition, what value does \$f(x)\$ appear to be approaching as \$x\$ gets infinitely close to 2?`,
      showAfterSpeech: true
    }
  },

  's4-math-differential-calculus-gradient-tangent': {
    speech: {
      text: `Hello! Today we’ll be learning about one of the coolest parts of calculus: finding the gradient of a tangent line. This is where we learn how to measure the speed of a curve at a single, precise moment. It all starts with understanding the difference between two special types of lines. Let's get started!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-differential-calculus-gradient-tangent.mp3'
    },
    display: {
      content: `To find the gradient of a curve at a specific point, we first need to understand the difference between two important lines:

1.  **Secant Line:** A line that passes through *two* distinct points on a curve.
2.  **Tangent Line:** A line that touches the curve at exactly *one* point.

### Question

If the gradient of a secant line represents the **average rate of change** between two points, what does the gradient of a tangent line represent?`,
      showAfterSpeech: true
    }
  },

  's4-math-differential-calculus-derivative-function': {
    speech: {
      text: `Welcome! Let's explore one of the most exciting and fundamental concepts in calculus: the derivative! This idea is all about measuring change, specifically, the instantaneous rate of change. It's the mathematical tool that lets us find the exact slope of a curve at any single point. Ready to define it formally?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-differential-calculus-derivative-function.mp3'
    },
    display: {
      content: `### Defining the Derivative

The derivative function, \$f'(x)\$, is formally defined as the instantaneous rate of change of \$f(x)\$. It is calculated by taking the limit of the difference quotient.

Which of the following expressions correctly represents the definition of the derivative of a function \$f(x)\$?

A) \$\\lim_{h→0} \\frac{f(x) - f(a)}{x - a}\$
B) \$\\frac{f(x_2) - f(x_1)}{x_2 - x_1}\$
C) \$\\lim_{h→0} \\frac{f(x+h) - f(x)}{h}\$
D) \$f(x+h) - f(x)\$`,
      showAfterSpeech: true
    }
  },

  's4-math-differential-calculus-first-principles': {
    speech: {
      text: `Hello! I'm thrilled to explore one of the foundational concepts of calculus: differentiation from first principles. This is where we truly understand what a derivative is—the limit of the average rate of change. It’s all about finding the instantaneous rate of change of a function. Let's start by looking at the formula that defines this process.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-differential-calculus-first-principles.mp3'
    },
    display: {
      content: `The derivative of a function \$f(x)\$, denoted \$f'(x)\$, is defined using the concept of a limit. This definition is known as differentiation from first principles.

Here is the formula:

\$\$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}\$\$

**Question:** What does the expression \$\\frac{f(x+h) - f(x)}{h}\$ represent *before* the limit is taken?`,
      showAfterSpeech: true
    }
  },

  's4-math-differential-calculus-differentiation-rules': {
    speech: {
      text: `Hi there! Are you ready to dive into the core rules of calculus? Differentiation rules are the foundation for so much of what we do, and mastering them will make solving complex problems a breeze. We're going to start with the most fundamental one: the Power Rule!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-differential-calculus-differentiation-rules.mp3'
    },
    display: {
      content: `### Power Rule Practice

We are starting with the foundational rule: the Power Rule.

**Problem:** Find the derivative, \$f'(x)\$, of the function:

\$\$f(x) = 5x³ + x⁻² + 7\$\$`,
      showAfterSpeech: true
    }
  },

  's4-math-differential-calculus-tangent-equations': {
    speech: {
      text: `Hello! Let's learn about a really important topic in calculus today: finding the equations of tangents and normals. These concepts help us understand the slope of a curve at any specific point. We're going to start with the tangent line, which relies heavily on the familiar point-slope form. Ready for our first problem?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-differential-calculus-tangent-equations.mp3'
    },
    display: {
      content: `### Introductory Problem: The Tangent Line

A curve passes through the point (2, 5). The gradient (slope) of the tangent line at this point is 3.

Using the point-slope form, \$y - y_1 = m(x - x_1)\$, what is the equation of the tangent line in the form \$y = mx + c\$?`,
      showAfterSpeech: true
    }
  },

  's4-math-differential-calculus-stationary-points': {
    speech: {
      text: `Hey there! I am so excited to dive into stationary points and optimization today. This is where calculus truly helps us understand the peaks and valleys of functions. Stationary points are those crucial spots where the gradient, or the slope, of the curve is exactly zero. Ready to find our first one?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-differential-calculus-stationary-points.mp3'
    },
    display: {
      content: `We are starting our journey by locating stationary points! Remember, a stationary point occurs when the first derivative, \$f'(x)\$, equals zero.

Consider the function:
\$\$f(x) = x³ - 6x² + 5\$\$

**Question:** What are the x-coordinates of the stationary points for \$f(x)\$?`,
      showAfterSpeech: true
    }
  },

  /**
   * ========================================
   * S4 MATHEMATICS - INTEGRATION
   * ========================================
   */
  's4-math-integration-area-under-curves': {
    speech: {
      text: `Hi there! Today we are starting one of the coolest topics in calculus: finding the area under curves. This skill is super important for understanding how things accumulate over time. We are going to start simple, using shapes you already know, like triangles and trapezoids, to find exact areas. Let's jump right into our first problem!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-integration-area-under-curves.mp3'
    },
    display: {
      content: `## Section 1: Geometric Areas

We can find the exact area under some simple curves using geometric formulas before we learn more complex methods.

**Problem:**

Find the exact area under the curve defined by the function \$f(x) = 2x\$ over the interval \$[0, 4]\$.

*Hint: The region bounded by the function, the x-axis, and the vertical line \$x=4\$ forms a right triangle. Use the formula for the area of a triangle.*`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "definiteIntegralVisualizer",
          "parameters": {
                "functionExpression": "2*x",
                "lowerBound": 0,
                "upperBound": 4,
                "shadeArea": true,
                "showValue": false
          },
          "caption": "The area under $f(x) = 2x$ from $x = 0$ to $x = 4$."
    }
  },

  's4-math-integration-antiderivatives': {
    speech: {
      text: `Hey there! We're starting a really exciting topic today: Antiderivatives and Introduction to Integration. If differentiation was all about finding the slope, integration is like running the whole process in reverse! We're going to learn how to undo differentiation, which is super useful in calculus. Let's dive right into the core concept of what an antiderivative actually is.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-integration-antiderivatives.mp3'
    },
    display: {
      content: `### Understanding the Antiderivative Concept

An **antiderivative** of a function \$f(x)\$ is a function \$F(x)\$ such that \$F'(x) = f(x)\$.

Consider the function \$f(x) = 3x² + 4\$.

Is the function \$F(x) = x³ + 4x\$ an antiderivative of \$f(x)\$?

**To verify, what is the derivative of \$F(x)\$?**`,
      showAfterSpeech: true
    }
  },

  's4-math-integration-rules': {
    speech: {
      text: `Hi there! Ready to dive into the core rules of integration? We're going to unlock the secrets to solving almost any polynomial integral using just three main ideas: the Power Rule, the Constant Multiple Rule, and the Sum and Difference Rule. These rules make integration much easier than you might think! Let's start with the most fundamental one: the Power Rule.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-integration-rules.mp3'
    },
    display: {
      content: `### Section 1: The Power Rule

The Power Rule for integration states:
\$\$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C, \\quad \\text{where } n 
eq -1\$\$

**Problem 1:**
Find the indefinite integral:
\$\$\\int x^5 dx\$\$
What is the resulting expression before adding the constant of integration, C?`,
      showAfterSpeech: true
    }
  },

  's4-math-integration-definite-integrals': {
    speech: {
      text: `Welcome! Let's explore one of the most powerful ideas in calculus: the Definite Integral! This is how we find the exact area under a curve. We'll start with the Fundamental Theorem of Calculus, which beautifully connects integration and differentiation. Ready to jump in and calculate some exact areas?`,
      emotion: 'excited'
    },
    display: {
      content: `### Section 1: The Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus (Part 2) provides the key tool for evaluating definite integrals:

\$\$\\int_a^b f(x) dx = F(b) - F(a)\$\$

where F(x) is the antiderivative of f(x).

**Problem 1:**

Evaluate the following definite integral:

\$\$\\int_1^3 (2x + 1) dx\$\$

What is the exact value of this integral?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "definiteIntegralVisualizer",
          "parameters": {
                "functionExpression": "2*x+1",
                "lowerBound": 1,
                "upperBound": 3,
                "shadeArea": true,
                "showValue": true
          },
          "caption": "Visualizing the area represented by $\\int_1^3 (2x + 1) dx$. The calculation we perform gives us the exact area of the shaded region."
    }
  },

  's4-math-integration-riemann-sums': {
    speech: {
      text: `Welcome to our deep dive into Riemann Sums! This topic is truly the bridge between differential and integral calculus. We're going to move beyond basic approximations and explore how these sums formally define the area under a curve. We have four exciting sections ahead, starting right now with calculating different types of Riemann sums. Let's warm up with a classic approximation!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-integration-riemann-sums.mp3'
    },
    display: {
      content: `### Section 1: Riemann Sum Types

We are approximating the area under the function \$f(x) = x^2 + 1\$ on the interval \$[0, 4]\$.

We will use \$n=4\$ subdivisions.

**Question:** Calculate the value of the Left Riemann Sum (\$L_4\$).`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "areaApproximation",
          "parameters": {
                "functionExpression": "x^2 + 1",
                "lowerBound": 0,
                "upperBound": 4,
                "rectangles": 4,
                "method": "left"
          },
          "caption": "Visualizing the Left Riemann Sum ($L_4$) for $f(x) = x^2 + 1$ on $[0, 4]$"
    }
  },

  /**
   * ========================================
   * S4 MATHEMATICS - QUADRATIC FUNCTIONS
   * ========================================
   */
  's4-math-quad-fundamentals': {
    speech: {
      text: `Hey there! I'm so excited to start working on quadratic functions with you. These functions are super useful because they create beautiful U-shaped curves called parabolas. We're going to start by looking at the standard form of a quadratic function and figuring out what makes it different from other functions you've seen.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-quad-fundamentals.mp3'
    },
    display: {
      content: `### Understanding Quadratic Functions

The standard form of a quadratic function is:

y = ax² + bx + c

where **a** cannot be zero.

Which of the following equations represents a quadratic function?

A) y = 3x + 5
B) y = 2x³ - x² + 1
C) y = 5x² - 4x + 7
D) y = 4x + 7`,
      showAfterSpeech: true
    }
  },

  's4-math-quad-graphs-transformations': {
    speech: {
      text: `Welcome! Today we’ll be learning about one of the most useful shapes in math: the parabola! We'll be exploring how to graph quadratic functions and how to transform them by sliding, stretching, and flipping. We are starting with the basics: what a parabola looks like and how to plot its points using a table.`,
      emotion: 'excited'
    },
    display: {
      content: `### Section 1: Parabola Basics

We are starting with the simplest quadratic function, the parent function:
\$y = x^2\$

**Question 1:** Complete the table of values for the function \$y = x^2\$. Based on the completed table, what are the coordinates of the lowest point on the graph (the vertex)?

| x | y = x² |
|---|---|
| -2 | |
| -1 | |
| 0 | |
| 1 | |
| 2 | |`,
      showAfterSpeech: true
    }
  },

  's4-math-quad-key-features': {
    speech: {
      text: `Welcome! Today we’ll be learning about the key features of parabolas. These curves are everywhere in math and science, and understanding their intercepts, axis of symmetry, and vertex helps us unlock their secrets. Let's start with the intercepts!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-quad-key-features.mp3'
    },
    display: {
      content: `We are starting with the quadratic function:
y = x² + 2x - 8

### Question 1: Intercepts

Find the coordinates of the y-intercept and the x-intercepts for this function.`,
      showAfterSpeech: true
    }
  },

  's4-math-quad-finding-functions': {
    speech: {
      text: `Hey there! Welcome back. Today we are leveling up our skills in quadratics. We're going to dive deep into determining quadratic equations, not just from simple graphs, but from specific features like vertices and intercepts, and then we'll tackle some complex real-world optimization problems. Let's start with finding equations from features. Are you ready?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-quad-finding-functions.mp3'
    },
    display: {
      content: `## Finding Quadratic Equations from Features

A parabola has a vertex at (3, -2) and passes through the point (1, 6).

**Question:** Determine the equation of the quadratic function in vertex form, y = a(x - h)² + k.`,
      showAfterSpeech: true
    }
  },

  's4-math-quad-inequalities': {
    speech: {
      text: `Hello! Today we’ll be learning about one of the most powerful tools in algebra: Quadratic Inequalities! We'll learn how to solve them using two fantastic methods: sign diagrams and graphical interpretation. This is where algebra meets geometry. Ready to tackle our first challenge using sign diagrams?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-quad-inequalities.mp3'
    },
    display: {
      content: `### Introductory Problem: Quadratic Inequalities

Solve the following quadratic inequality and express your answer in interval notation:

\$\$x^2 - x - 6 > 0\$\$`,
      showAfterSpeech: true
    }
  },
  /**
   * ========================================
   * S4 MATHEMATICS - Advanced Trigonometry
   * ========================================
   */
  's4-math-advanced-trig-unit-circle': {
    speech: {
      text: `Welcome! We are starting at the very heart of trigonometry: the Unit Circle. This elegant tool connects angles to coordinates, making complex problems visual and manageable.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-advanced-trig-unit-circle.mp3'
    },
    display: {
      content: `### Understanding the Unit Circle

What are the coordinates (x, y) of the point on the unit circle that corresponds to the angle \$\\theta = 90°\$?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "unitCircle",
          "parameters": {      
            "angle": 90,
            "showPoint": true,
            "showCoordinates": false,
            "showAngleArc": true,
            "showTriangle": false
            },
          "caption": "The Unit Circle visualization helps locate coordinates based on angles."
    }
  },

  's4-math-advanced-trig-functions-graphs': {
    speech: {
      text: `Hey there! Get ready to see trigonometry in motion. When we graph sine and cosine, we reveal beautiful, repeating waves that model everything from sound to light.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-advanced-trig-functions-graphs.mp3'
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
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-advanced-trig-transformations.mp3'
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
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-advanced-trig-equations-identities.mp3'
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
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-advanced-trig-radians.mp3'
    },
    display: {
      content: `### Understanding Radian Measure

If a circle has a radius (\$r\$) of 1 unit, what is the radian measure of the central angle (\$\\theta\$) that subtends an arc length (\$s\$) of 1 unit?`,
      showAfterSpeech: true
    }
  },
  /**
   * ========================================
   * S4 MATHEMATICS - Vectors
   * ========================================
   */
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
      text: `Hello! The dot product is one of the most powerful tools in vector math because it allows us to multiply two vectors and get a single, useful number, a scalar, back. This number unlocks concepts like angles and projections. Let us start with the calculation itself.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-vectors-dot-product.mp3'
    },
    display: {
      content: `### The Scalar (Dot) Product

Given vectors **u** = \$\\langle 5, 2 \\rangle\$ and **v** = \$\\langle -1, 3 \\rangle\$.

Calculate the dot product **u** \$\\cdot\$ **v**.`,
      showAfterSpeech: true
    }
  },

  /**
   * ========================================
   * S1 MATHEMATICS - FACTORS & MULTIPLES
   * ========================================
   */
  's1-math-factors-multiples-introduction': {
    speech: {
      text: `Hello, and welcome to the foundation of number theory! Factors are like the essential building blocks of numbers. Understanding them helps us break down and analyze almost every mathematical problem. Let's start by identifying the numbers that divide evenly into a specific value.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-factors-multiples-introduction.mp3'
    },
    display: {
      content: `### Understanding Factors

**Question:** List all the factors of 24. (Remember, factors must divide 24 exactly, leaving no remainder.)`,
      showAfterSpeech: true
    }
  },

  's1-math-factors-multiples-prime-factorisation': {
    speech: {
      text: `Hey there! Get ready to explore the secret life of numbers. Did you know some numbers are truly unique and can only be divided by themselves and one? These are the fascinating prime numbers! Let's begin by figuring out how to identify them.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-factors-multiples-prime-factorisation.mp3'
    },
    display: {
      content: `### Prime and Composite Numbers

**Question:** Determine if the number 29 is a prime number or a composite number. Explain your reasoning.`,
      showAfterSpeech: true
    }
  },

  's1-math-factors-multiples-hcf': {
    speech: {
      text: `Welcome! Today we are mastering the Highest Common Factor, or H C F. This important skill is all about finding the biggest number that fits perfectly into two or more different numbers. Let's start by simply listing the factors we need to compare.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-factors-multiples-hcf.mp3'
    },
    display: {
      content: `### Finding HCF by Listing Factors

**Question:**

1. List all the factors of 15.
2. List all the factors of 25.
3. What is the Highest Common Factor (HCF) of 15 and 25?`,
      showAfterSpeech: true
    }
  },

  's1-math-factors-multiples-lcm': {
    speech: {
      text: `Greetings! Get ready to tackle the Lowest Common Multiple! Think of L C M as the mathematical moment when two repeating cycles finally line up again, like two buses leaving the station at different intervals. We find this point by listing out the multiples.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-factors-multiples-lcm.mp3'
    },
    display: {
      content: `### Finding LCM by Listing Multiples

**Question:**

1. List the first six multiples of 3.
2. List the first six multiples of 5.
3. What is the Lowest Common Multiple (LCM) of 3 and 5?`,
      showAfterSpeech: true
    }
  },

  's1-math-factors-multiples-square-cube-roots': {
    speech: {
      text: `Hi! We're stepping into the world of geometry and numbers by looking at perfect squares. These are numbers that result from multiplying an integer by itself, forming a neat, equal-sided shape! Let's confirm our understanding of the basic operation first.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-factors-multiples-square-cube-roots.mp3'
    },
    display: {
      content: `### Perfect Squares and Square Roots

**Question:**

1. Calculate the value of 9².
2. Is 49 a perfect square? If so, what is its square root?`,
      showAfterSpeech: true
    }
  },

  /**
   * ========================================
   * S1 MATHEMATICS - REAL NUMBERS
   * ========================================
   */
  's1-math-real-numbers-negative-numbers-number-line': {
    speech: {
      text: `Hello! Have you ever wondered what happens when we go below zero? We are starting our journey into the world of negative numbers today, which are essential for understanding temperature, elevation, and debt. Let us start by mapping where these numbers live.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-real-numbers-negative-numbers-number-line.mp3'
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
        "highlightPoints": [-4]
      },
      "caption": "A number line spanning from -5 to 5."
    }
  },

  's1-math-real-numbers-addition-subtraction-integers': {
    speech: {
      text: `Welcome! Today we are tackling integer operations. Think of positive numbers as money you have, and negative numbers as debt. When we add them, we use 'zero pairs' to cancel out the debt. Let us see how this balancing act works.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-real-numbers-addition-subtraction-integers.mp3'
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
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-real-numbers-multiplication-division-integers.mp3'
    },
    display: {
      content: `### Multiplication of Integers

Multiplication can be thought of as repeated addition. If you owe $2 to four different people, what is your total debt?

**Calculate:** 4 × (-2)`,
      showAfterSpeech: true
    }
  },

  's1-math-real-numbers-rational-irrational-numbers': {
    speech: {
      text: `Greetings. Our focus now shifts to classifying numbers based on their form. We begin with rational numbers—those that can be perfectly expressed as a ratio of two integers. This is a foundational concept for all future math. Let us test your understanding of the definition.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-real-numbers-rational-irrational-numbers.mp3'
    },
    display: {
      content: `### Rational Numbers

A rational number is any number that can be written in the form $\\frac{p}{q}$, where $p$ and $q$ are integers and $q \\neq 0$.

**Question:** Can the decimal $0.75$ be written as a fraction of two integers? If so, what is that fraction?`,
      showAfterSpeech: true
    }
  },

  's1-math-real-numbers-operations-real-numbers': {
    speech: {
      text: `Hi! We are moving on to combining all the number types we have learned, starting with mastering operations involving fractions. Fractions are crucial building blocks, so let us make sure we have that addition skill locked down before we proceed.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-real-numbers-operations-real-numbers.mp3'
    },
    display: {
      content: `### Operations with Fractions

To add fractions, you must find a common denominator. What is the sum of the following fractions?

**Solve:** $\\frac{1}{3} + \\frac{1}{6}$`,
      showAfterSpeech: true
    }
  },

  /**
   * ========================================
   * S1 MATHEMATICS - APPROXIMATION & ESTIMATION
   * ========================================
   */
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
  },
  /**
   * ========================================
   * S1 MATHEMATICS - BASIC ALGEBRA
   * ========================================
   */  
  's1-math-basic-algebra-notation': {
    speech: {
      text: `Welcome to the world of algebra! Think of variables as mystery boxes holding numbers. We use notation to clearly describe what is in those boxes. Let us start by translating a common phrase into an algebraic expression.`,
      emotion: 'warm'
    },
    display: {
      content: `### Introduction to Variables

Write the algebraic expression for the phrase:

**"Five less than a number n."**`,
      showAfterSpeech: true
    }
  },

  's1-math-basic-algebra-simplifying': {
    speech: {
      text: `Hey there! Get ready to clean up some math messes. Simplifying expressions is like sorting laundry; we group the shirts with the shirts and the socks with the socks. Let us practice collecting terms that match.`,
      emotion: 'encouraging'
    },
    display: {
      content: `### Collecting Like Terms - Basics

Simplify the following expression by collecting like terms:

\$\$4x + 7y - x + 2y\$\$`,
      showAfterSpeech: true
    }
  },

  's1-math-basic-algebra-expanding': {
    speech: {
      text: `Greetings! Ready to unlock some brackets? The distributive law is a powerful tool that helps us spread a number across everything inside the parentheses. Take your time and make sure every term gets multiplied.`,
      emotion: 'encouraging'
    },
    display: {
      content: `### Distributive Law - Single Bracket

Use the distributive law to expand the expression:

\$\$3(2a + 5)\$\$`,
      showAfterSpeech: true
    }
  },

  's1-math-basic-algebra-factorization': {
    speech: {
      text: `Hi! We are starting our journey into factorization, which is essentially reverse multiplication. Can you spot the greatest common factor hiding within an expression? This skill is crucial for all higher algebra.`,
      emotion: 'supportive'
    },
    display: {
      content: `### Common Factor Extraction

Identify the greatest common factor and factorize the expression:

\$\$6x + 9\$\$`,
      showAfterSpeech: true
    }
  },

  's1-math-basic-algebra-equations': {
    speech: {
      text: `Hello and welcome to solving equations! Remember, an equation is like a balanced scale. Whatever you do to one side, you must do to the other to keep it level. Let us solve our first one-step problem.`,
      emotion: 'supportive'
    },
    display: {
      content: `### One-Step Equations

Solve for the unknown variable x:

\$\$x + 12 = 20\$\$`,
      showAfterSpeech: true
    }
  },

  's1-math-basic-algebra-changing-subject': {
    speech: {
      text: `Ever needed to rearrange a formula to find a different value? That is what changing the subject is all about. It gives you flexibility when working with real-world relationships. Let us practice isolating a variable.`,
      emotion: 'warm'
    },
    display: {
      content: `### Simple Formula Rearrangement

The area of a rectangle is given by the formula A = L × W.

Rearrange this formula to make **W** the subject.`,
      showAfterSpeech: true
    }
  },

  's1-math-basic-algebra-word-problems': {
    speech: {
      text: `Awesome! Let us put on our translator hats. Word problems challenge us to convert everyday language into the precise language of mathematics. If we can write the equation, solving it is easy.`,
      emotion: 'encouraging'
    },
    display: {
      content: `### Translating Word Problems to Equations

A taxi ride costs a fixed fee of \$3 plus \$2 per mile (m).

Write an equation for the total cost (C) of the ride.`,
      showAfterSpeech: true
    }
  },
  
  /**
   * ========================================
   * S1 MATHEMATICS - SIMPLE LINEAR EQUATIONS
   * ========================================
   */ 
  's1-math-simple-linear-equations-introduction': {
    speech: {
      text: `Welcome! Think of an equation like a perfectly balanced scale. Whatever operation you perform on one side, you must perform on the other to keep things level. We are starting with the simplest moves: one-step equations. Ready to find the missing number?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-simple-linear-equations-introduction.mp3'
    },
    display: {
      content: `### One-Step Equations

We need to isolate the variable \$x\$. What operation should you use to solve for \$x\$ in the equation below?

\$\$x + 7 = 15\$\$`,
      showAfterSpeech: true
    }
  },

  's1-math-simple-linear-equations-both-sides': {
    speech: {
      text: `Hi there! Sometimes our variables get scattered across both sides of the equal sign. This section is all about strategy: collecting those like terms first so we can solve efficiently. Don't worry, we'll take the process step by step, focusing on moving terms strategically.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-simple-linear-equations-both-sides.mp3'
    },
    display: {
      content: `### Collecting Like Terms - Variables on Both Sides

Your first task is to gather the variable terms on one side of the equation. Which operation will help you move the variable term \$2x\$ to the left side?

\$\$5x - 3 = 2x + 9\$\$`,
      showAfterSpeech: true
    }
  },

  's1-math-simple-linear-equations-fractional': {
    speech: {
      text: `Greetings! Dealing with fractions in equations can feel messy, but we have a powerful tool: the Least Common Multiple method. This trick lets us clear all the denominators right away, transforming the equation into something much simpler to handle. Let's practice that clearing step first.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-simple-linear-equations-fractional.mp3'
    },
    display: {
      content: `### Equations with Fractions (LCM Method)

Before solving, we want to eliminate the fraction. What is the Least Common Multiple (LCM) of the denominators in the equation below, and how would you use it to clear the fraction?

\$\$\\frac{x}{2} + 1 = 5\$\$`,
      showAfterSpeech: true
    }
  },

  's1-math-simple-linear-equations-word-problems': {
    speech: {
      text: `Hey! Equations are often hidden inside everyday situations. The key skill here is translating English phrases into mathematical expressions. Think of yourself as a decoder, turning words into symbols. Let's start by setting up the equation for a simple scenario.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-simple-linear-equations-word-problems.mp3'
    },
    display: {
      content: `### Translating Word Problems to Equations

Let \$n\$ represent the unknown number. Translate the following sentence into a mathematical equation:

**"Five less than three times a number is 16."**`,
      showAfterSpeech: true
    }
  },  
  
  /**
   * ========================================
   * S1 MATHEMATICS - ANGLES AND PARALLEL LINES
   * ========================================
   */ 

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
  },
  /**
   * ========================================
   * S1 MATHEMATICS - RATIOS, RATE & SPEED
   * ========================================
   */ 

  's1-math-ratio-rate-speed-understanding-ratios': {
    speech: {
      text: `Welcome! Ratios are the fundamental language we use to compare quantities. Think of them as mathematical recipes. Mastering the notation is the first step to success. Let's start with a simple comparison.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-ratio-rate-speed-understanding-ratios.mp3'
    },
    display: {
      content: `### Ratio Notation and Basics

In a basket, there are 12 red apples and 8 green apples.

**Write the ratio of green apples to red apples in three different ways (using a colon, the word 'to', and as a fraction).**`,
      showAfterSpeech: true
    }
  },

  's1-math-ratio-rate-speed-proportions': {
    speech: {
      text: `Hey there! Get ready to explore proportions. Proportions are everywhere, from baking cookies to building skyscrapers! They show us how two ratios are equal, allowing us to scale things up or down perfectly. Ready to see proportionality in action?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-ratio-rate-speed-proportions.mp3'
    },
    display: {
      content: `### Understanding Proportional Relationships

Ratio A compares 3 shirts to 9 dollars. Ratio B compares 5 shirts to 15 dollars.

**Do these two ratios form a proportion? Explain your reasoning.**`,
      showAfterSpeech: true
    }
  },

  's1-math-ratio-rate-speed-rate-speed': {
    speech: {
      text: `Greetings! We are moving into the exciting world of rates and speeds. A rate is simply a special type of ratio that compares two quantities with different units, like miles per hour or cost per item. Understanding how to express rate is key for everything that moves or changes.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-ratio-rate-speed-rate-speed.mp3'
    },
    display: {
      content: `### Understanding Rate

A factory produces 420 widgets in 6 hours.

**What is the unit rate of production in widgets per hour?**`,
      showAfterSpeech: true
    }
  },

  's1-math-ratio-rate-speed-unit-conversion': {
    speech: {
      text: `Hi! If you have ever traveled internationally or tried to compare different systems of measurement, you know how crucial unit conversion is. We are starting by tackling speed conversions, which require careful use of conversion factors. Let's practice setting up our conversion ratios correctly.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-ratio-rate-speed-unit-conversion.mp3'
    },
    display: {
      content: `### Converting Speed Units

A cyclist is traveling at a speed of 18 kilometers per hour (km/h).

**Convert this speed to meters per hour (m/h).**

*(Hint: 1 km = 1,000 m)*`,
      showAfterSpeech: true
    }
  },
  /**
   * ========================================
   * S1 MATHEMATICS - PERCENTAGES
   * ========================================
   */ 
  's1-math-percentage-introduction': {
    speech: {
      text: `Welcome! Percentages are everywhere, from shopping to statistics. They give us a universal way to talk about parts of a whole, standardizing comparison to a base of one hundred. Let's start by understanding exactly what the percent symbol means.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-percentage-introduction.mp3'
    },
    display: {
      content: `### Meaning of Percentage

If 100 students were surveyed, and 45% said they preferred math, how many students preferred math?`,
      showAfterSpeech: true
    }
  },

  's1-math-percentage-conversions': {
    speech: {
      text: `Hey there! Ready to become a math translator? Percentages, fractions, and decimals are just three different ways of saying the same thing. Mastering conversions gives you incredible flexibility in solving problems. Let's start by translating from percent to fraction and decimal.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-percentage-conversions.mp3'
    },
    display: {
      content: `### Converting Percentage to Fraction and Decimal

Convert 75% into both a simplified fraction and a decimal.`,
      showAfterSpeech: true
    }
  },

  's1-math-percentage-expressing': {
    speech: {
      text: `Greetings! Have you ever wondered how grades are calculated or how well a sports team is performing relative to their total games? This topic is all about turning a ratio into a standard percentage score. Let's find out how one number measures up against another.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-percentage-expressing.mp3'
    },
    display: {
      content: `### Basic Percentage Calculation (x as % of y)

A student scored 38 marks out of a possible 50 on a test. What percentage score did the student achieve?`,
      showAfterSpeech: true
    }
  },

  's1-math-percentage-comparing': {
    speech: {
      text: `Hi! We often need to compare apples and oranges, mathematically speaking. When two quantities are based on different totals, converting them to percentages is the only fair way to compare performance. Let's practice standardizing our comparison base to one hundred.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-percentage-comparing.mp3'
    },
    display: {
      content: `### Comparing Using Percentage (Different Bases)

Which statement represents a greater proportion: 12 successful shots out of 40, or 7 successful shots out of 25? Express both as percentages to compare.`,
      showAfterSpeech: true
    }
  },

  's1-math-percentage-change': {
    speech: {
      text: `Good morning! The world is constantly changing, and math helps us quantify that change. Whether it's population growth or price inflation, percentage increase is a crucial tool. We'll start by calculating the new value after a positive change.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-percentage-change.mp3'
    },
    display: {
      content: `### Percentage Increase

A shirt costs \$40. If the price increases by 15%, what is the new price of the shirt?`,
      showAfterSpeech: true
    }
  },

  's1-math-percentage-reverse': {
    speech: {
      text: `Welcome back! Today, we're putting on our detective hats. Reverse percentage problems challenge us to work backward from a final value to find the original starting amount. This skill is essential for calculating pre-tax prices or original populations.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-percentage-reverse.mp3'
    },
    display: {
      content: `### Finding Original Value from Percentage

After a 20% price increase, a bicycle now costs \$360. What was the original price of the bicycle before the increase?`,
      showAfterSpeech: true
    }
  },

  's1-math-percentage-applications': {
    speech: {
      text: `Hey, savvy shopper! Ever seen a forty percent off sign and immediately calculated the savings? Percentage applications, especially discounts, are some of the most useful math skills you can learn. Let's make sure you always know the real final price.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-percentage-applications.mp3'
    },
    display: {
      content: `### Discount Calculations

A pair of sneakers is priced at \$85. If a store offers a 30% discount, what is the final price the customer pays?`,
      showAfterSpeech: true
    }
  },
  /**
   * ========================================
   * S1 LINEAR FUNCTIONS & GRAPHS
   * ========================================
   */

  's1-math-linear-functions-cartesian-coordinates': {
    speech: {
      text: `Welcome aboard! Think of the Cartesian plane as a mathematical map, helping us pinpoint exact locations. Mastering coordinates is the first step to navigating the world of linear functions. Let us start by making sure we know our directions.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-linear-functions-cartesian-coordinates.mp3'
    },
    display: {
      content: `### Understanding the Coordinate System

In the Cartesian coordinate system, which axis represents the horizontal position, and which letter is conventionally used to label it?`,
      showAfterSpeech: true
    }
  },

  's1-math-linear-functions-function-concept': {
    speech: {
      text: `Hello! Today we are exploring the concept of a function. A function is essentially a reliable rule or a machine: you put in one input, and you get exactly one specific output. It is all about consistency. Let us check your foundational understanding of this relationship.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-linear-functions-function-concept.mp3'
    },
    display: {
      content: `### Understanding Functions

A relation is considered a function if every input (x-value) corresponds to exactly one output (y-value).

Which of the following sets of ordered pairs represents a relation that is **NOT** a function?

A) (1, 5), (2, 6), (3, 7)
B) (4, 8), (4, 9), (5, 10)
C) (–1, 1), (0, 0), (1, 1)`,
      showAfterSpeech: true
    }
  },

  's1-math-linear-functions-linear-graphs': {
    speech: {
      text: `Greetings! We are moving into the visual side of algebra now, focusing on linear graphs. Why are they called linear? Because when you plot them, they form a straight line. This section is about recognizing the defining characteristics of these functions. What makes an equation straight?`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-linear-functions-linear-graphs.mp3'
    },
    display: {
      content: `### Identifying Linear Functions

Which of the following equations represents a linear function?

A) y = x² + 3
B) y = 5x - 2
C) y = \$\\frac{4}{x}\$
D) y = \$\\sqrt{x}\$`,
      showAfterSpeech: true
    }
  },

  's1-math-linear-functions-gradient': {
    speech: {
      text: `Hey there! Ready to tackle the concept of gradient? Gradient, or slope, tells us exactly how steep a line is and in what direction it is moving. It is the rate of change. Think of it as the rise over the run. Let us start with the fundamental definition.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-linear-functions-gradient.mp3'
    },
    display: {
      content: `### Understanding Gradient

The gradient (m) of a line measures its steepness. It is calculated by the ratio of the change in the vertical distance (rise) to the change in the horizontal distance (run).

If a line passes through two points, \$(x₁, y₁)\$ and \$(x₂, y₂)\$, write the formula used to calculate the gradient (m).`,
      showAfterSpeech: true
    }
  },
  /**
   * ========================================
   * S1 PERIMETER, AREA
   * ========================================
   */
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
  },
  /**
   * ========================================
   * S1 DATA HANDLING
   * ========================================
   */
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
      text: `Hey there! Ready to get organized! Tally marks are the simplest, most effective way to keep track of counts in real time. If you see the marks four vertical lines with one diagonal line across them, what frequency does that represent?`,
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
  },
  /**
   * ========================================
   * S2 LINEAR GRAPHS & EQUATIONS
   * ========================================
   */
  's2-math-linear-graphs-intro': {
    speech: {
      text: `Welcome to the world of linear graphs! Every great journey starts with a map, and in algebra, our map is the Cartesian Plane. Let's make sure we know exactly where we are starting.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-linear-graphs-intro.mp3'
    },
    display: {
      content: `### The Cartesian Plane

What are the coordinates of the point that is 3 units right of the origin and 5 units down?`,
      showAfterSpeech: true
    }
  },

  's2-math-linear-graphs-gradient-intercept': {
    speech: {
      text: `Hey there! Ready to tackle steepness? Gradient is the core concept of how fast a line rises or falls. Think of it as calculating the slope of a hill. Let's jump right into the formula!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-linear-graphs-gradient-intercept.mp3'
    },
    display: {
      content: `### The Gradient Formula

Calculate the gradient (\$m\$) of the line passing through the points \$(1, 8)\$ and \$(3, 14)\$.`,
      showAfterSpeech: true
    }
  },

  's2-math-linear-graphs-equation-of-line': {
    speech: {
      text: `Greetings! Today we unlock the standard language of straight lines: the gradient-intercept form, y equals m x plus c. This equation is incredibly powerful because it tells us everything we need to know about the line's direction and starting point.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-linear-graphs-equation-of-line.mp3'
    },
    display: {
      content: `### The Gradient-Intercept Form: \$y = mx + c\$

Identify the gradient (\$m\$) and the \$y\$-intercept (\$c\$) for the equation \$y = 5x - 7\$.`,
      showAfterSpeech: true
    }
  },

  's2-math-linear-graphs-equations-from-points': {
    speech: {
      text: `Hi! Imagine you only have two tiny clues, two points, but you need the entire equation of the line. That's what the Two-Point Method is for! It's a systematic way to build the equation from minimal information. Let's start by recalling the first crucial step.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-linear-graphs-equations-from-points.mp3'
    },
    display: {
      content: `### The Two-Point Method

When finding the equation of a line passing through \$(2, 1)\$ and \$(4, 9)\$, what is the first step, and what value do you get for the gradient (\$m\$)?`,
      showAfterSpeech: true
    }
  },

  's2-math-linear-graphs-graphing': {
    speech: {
      text: `Ever wonder how an algebraic equation turns into a beautiful, straight line on a graph? The Table of Values method is our bridge! It allows us to systematically generate coordinates that satisfy the equation. Let's practice creating our first set of points.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-linear-graphs-graphing.mp3'
    },
    display: {
      content: `### Table of Values Method

Complete the table of values for the equation \$y = 3x - 1\$.

| \$x\$ | \$-1\$ | \$0\$ | \$1\$ |
| :---: | :---: | :---: | :---: |
| \$y\$ | ? | ? | ? |`,
      showAfterSpeech: true
    }
  },

  's2-math-linear-graphs-simultaneous-intro': {
    speech: {
      text: `Hello! Get ready for a fascinating topic! Simultaneous equations are like two separate paths, and our job is to find the exact point where they cross. This intersection point solves both equations at the same time. What does it mean for a single point to satisfy two different equations?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-linear-graphs-simultaneous-intro.mp3'
    },
    display: {
      content: `### What are Simultaneous Equations?

Does the point \$(3, 1)\$ satisfy *both* equations in the following system?

Equation 1: \$x + y = 4\$

Equation 2: \$2x - y = 5\$`,
      showAfterSpeech: true
    }
  },

  's2-math-linear-graphs-simultaneous-algebraic': {
    speech: {
      text: `Time to master an essential skill: the Substitution Method! When solving simultaneous equations algebraically, substitution is often the cleanest way to isolate a variable and reduce the system down to a single equation. Let's practice setting up the first step correctly.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-linear-graphs-simultaneous-algebraic.mp3'
    },
    display: {
      content: `### The Substitution Method

Given the system:

1. \$y = 2x + 1\$

2. \$3x + y = 11\$

Substitute Equation 1 into Equation 2, and write down the resulting equation in terms of \$x\$ only.`,
      showAfterSpeech: true
    }
  },
  /**
   * ========================================
   * S2 LINEAR INEQUALITIES
   * ========================================
   */
  's2-math-linear-inequalities-intro': {
    speech: {
      text: `Greetings! We are starting a fascinating journey into Linear Inequalities. Unlike equations that demand a single answer, inequalities describe entire ranges of possibilities. Lets make sure we speak the same language first.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-linear-inequalities-intro.mp3'
    },
    display: {
      content: `### Understanding Inequality Symbols

Which symbol correctly represents the phrase: "x is less than or equal to 5"?

(A) x < 5
(B) x > 5
(C) x ≥ 5
(D) x ≤ 5`,
      showAfterSpeech: true
    }
  },

  's2-math-linear-inequalities-solving': {
    speech: {
      text: `Hi there! Solving inequalities is just like solving equations, with one crucial twist we need to remember. Think of the inequality sign as a balance scale that needs to stay tilted correctly. Ready to tackle your first one-step problem?`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-linear-inequalities-solving.mp3'
    },
    display: {
      content: `### One-Step Inequalities

Solve the following inequality for the variable n:

n + 7 > 15`,
      showAfterSpeech: true
    }
  },

  's2-math-linear-inequalities-representing': {
    speech: {
      text: `Welcome aboard! Math isnt always about numbers; sometimes its about visualization. How do we clearly show an infinite set of solutions? We use the number line! Lets practice translating algebraic language into a visual map.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-linear-inequalities-representing.mp3'
    },
    display: {
      content: `### Number Line Representation

Describe the graph of the solution set for the inequality x < -3.

Specifically, should the circle at -3 be open or closed, and should the shading go left or right?`,
      showAfterSpeech: true
    }
  },

  's2-math-linear-inequalities-graphing': {
    speech: {
      text: `Hey, lets level up! Weve mastered inequalities with one variable, just x, but now we introduce the y-axis. When we move from a single line to a coordinate plane, the solution becomes an entire shaded region. This is where things get exciting!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-linear-inequalities-graphing.mp3'
    },
    display: {
      content: `### From One to Two Variables

When graphing the inequality 2x + 3y ≥ 6, should the boundary line be **solid** or **dashed**? Explain your reasoning.`,
      showAfterSpeech: true
    }
  },

  's2-math-linear-inequalities-systems': {
    speech: {
      text: `Greetings, mathematical strategist! Systems of inequalities are like overlapping Venn diagrams—we are looking for the sweet spot where all conditions are met simultaneously. Finding that common ground is the key to solving complex problems.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-linear-inequalities-systems.mp3'
    },
    display: {
      content: `### Graphing Systems of Inequalities

If you graph the system:

1. y > x
2. y < -x + 4

Which quadrant (I, II, III, or IV) contains the solution region?`,
      showAfterSpeech: true
    }
  },

  's2-math-linear-inequalities-applications': {
    speech: {
      text: `Did you know inequalities govern everything from budget constraints to speed limits? Today, we are putting on our translator hats to convert real-world rules into mathematical models. Lets start with a simple constraint.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-linear-inequalities-applications.mp3'
    },
    display: {
      content: `### Modeling Real-World Constraints

A delivery driver needs to drive **at least** 50 miles per day. Let \$m\$ represent the number of miles driven.

Write an inequality that models this constraint.`,
      showAfterSpeech: true
    }
  },
  /**
   * ========================================
   * S2 EXPANSION & FACTORING OF ALGEBRAIC EXPRESSIONS
   * ========================================
   */
  's2-math-expansion-factorisation-quadratic-intro': {
    speech: {
      text: `Hello! We are starting a crucial journey into quadratic expressions. These are the building blocks for parabolas and many real-world models. Let's make sure we recognize them right away by identifying the highest power.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-expansion-factorisation-quadratic-intro.mp3'
    },
    display: {
      content: `### Understanding Quadratic Expressions

Which of the following expressions is a quadratic expression?

1. x³ + 2x - 1
2. 4x + 5
3. 2x² - 3x + 1
4. x⁴`,
      showAfterSpeech: true
    }
  },

  's2-math-expansion-factorisation-single-bracket-basic': {
    speech: {
      text: `Hi there! Get ready to distribute! Expanding single brackets is like delivering mail—every term inside gets multiplied by the term outside. It's a fundamental skill we'll master instantly.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-expansion-factorisation-single-bracket-basic.mp3'
    },
    display: {
      content: `### Single Bracket Expansion - a(b+c)

Expand the following expression:

\$\$3(x + 5)\$\$`,
      showAfterSpeech: true
    }
  },

  's2-math-expansion-factorisation-double-bracket-intro': {
    speech: {
      text: `Greetings! Think of double bracket expansion as building a four-room house. Every term in the first bracket must interact with every term in the second. Let's lay the foundation for multiplying binomials.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-expansion-factorisation-double-bracket-intro.mp3'
    },
    display: {
      content: `### Double Bracket Expansion - (a+b)(c+d)

Expand the expression:

\$\$(x + 2)(y + 3)\$\$`,
      showAfterSpeech: true
    }
  },

  's2-math-expansion-factorisation-expand-linear-to-quadratic': {
    speech: {
      text: `Hey, have you ever wondered how two simple linear expressions multiply together to create a powerful quadratic curve? Today, we unlock that transformation. Let's practice moving from two brackets straight into the standard quadratic form.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-expansion-factorisation-expand-linear-to-quadratic.mp3'
    },
    display: {
      content: `### Expanding (px+q)(rx+s) to Quadratics

Expand and simplify the expression:

\$\$(2x + 1)(x - 3)\$\$`,
      showAfterSpeech: true
    }
  },

  's2-math-expansion-factorisation-common-factor-basic': {
    speech: {
      text: `Welcome to the world of factorization! If expansion is multiplication, factorization is division. We are learning to reverse the process of distribution by pulling out the greatest common factor. Ready to spot what is shared?`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-expansion-factorisation-common-factor-basic.mp3'
    },
    display: {
      content: `### Factorising by Common Factor Extraction

Factorise the expression completely:

\$\$6x + 18\$\$`,
      showAfterSpeech: true
    }
  },

  's2-math-expansion-factorisation-factorisation-conceptual': {
    speech: {
      text: `Why do we factor quadratics? Because the numbers in the middle and the end—the b and the c terms—hold the secret to finding the two numbers that multiply and add up correctly. This conceptual understanding is key. Let's start by identifying those target numbers.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-expansion-factorisation-factorisation-conceptual.mp3'
    },
    display: {
      content: `### Understanding the Factorisation Process

Find two integers that satisfy both conditions:

1. They multiply to give 10.
2. They add up to give 7.`,
      showAfterSpeech: true
    }
  },

  's2-math-expansion-factorisation-negative-b-positive-c': {
    speech: {
      text: `Time to put on our math detective hats! When the constant term is positive but the x coefficient is negative, we know exactly what signs our factors must have. This pattern is a great shortcut. Let's apply it to our first problem.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-expansion-factorisation-negative-b-positive-c.mp3'
    },
    display: {
      content: `### Factorising x²+bx+c where b<0, c>0

Factorise the expression:

\$\$x² - 8x + 12\$\$`,
      showAfterSpeech: true
    }
  },

  's2-math-expansion-factorisation-negative-c-factorisation': {
    speech: {
      text: `Hello, math enthusiasts! Dealing with a negative constant term, c, means we need factors that subtract or find the difference to equal the middle term, b. This adds a fun layer of complexity! Let's tackle our first one.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-expansion-factorisation-negative-c-factorisation.mp3'
    },
    display: {
      content: `### Factorising x²+bx+c where c<0

When the constant term is negative, the factors must have opposite signs. Factorise the following expression:

\$\$x² + 2x - 15\$\$`,
      showAfterSpeech: true
    }
  },

  's2-math-expansion-factorisation-leading-coefficient-concept': {
    speech: {
      text: `Good day. We are now transitioning to factorizing quadratics where the leading coefficient, a, is not equal to one. This requires a more structured approach than the simple x squared case. Understanding the structure is the first step.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-expansion-factorisation-leading-coefficient-concept.mp3'
    },
    display: {
      content: `### Understanding Factorisation with a≠1

In the general quadratic form ax² + bx + c, what are the values of a, b, and c for the expression **3x² - 5x + 7**?`,
      showAfterSpeech: true
    }
  },

  's2-math-expansion-factorisation-grouping-multiplication-frame': {
    speech: {
      text: `Welcome! When factorizing complex quadratics, visual tools like the multiplication frame can make the grouping process incredibly clear. We will use this frame to organize our terms and find the common factors efficiently. Let us set up the frame for our first problem.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-expansion-factorisation-grouping-multiplication-frame.mp3'
    },
    display: {
      content: `### Grouping Using Multiplication Frame

To factorise 2x² + 7x + 3 using the grouping method, we first need to split the middle term (7x).

What two numbers multiply to (2 × 3) = 6 and add up to 7?`,
      showAfterSpeech: true
    }
  },
  's2-math-expansion-factorisation-perfect-square-identities': {
    speech: {
      text: `Wow! Get ready to discover some amazing algebraic shortcuts! We are diving into perfect square trinomials today. These are special cases that follow a beautiful, predictable pattern. Let us expand this perfect square to see the pattern emerge.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-expansion-factorisation-perfect-square-identities.mp3'
    },
    display: {
      content: `### Discovering (a + b)²

Expand and fully simplify the expression:

\$\$(x + 5)²\$\$`,
      showAfterSpeech: true
    }
  },

  's2-math-expansion-factorisation-difference-squares': {
    speech: {
      text: `Have you ever noticed how some expansions result in terms cancelling out completely? That is exactly what happens with the Difference of Squares identity, one of the cleanest algebraic patterns out there! Expand this pair of brackets and see what happens to the middle term.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-expansion-factorisation-difference-squares.mp3'
    },
    display: {
      content: `### Discovering (a + b)(a - b)

Expand and simplify the expression:

\$\$(2x + 3)(2x - 3)\$\$`,
      showAfterSpeech: true
    }
  },
  /**
   * ========================================
   * S2 QUADRATIC EQUATIONS & GRAPHS
   * ========================================
   */  
  's2-math-quadratics-definition': {
    speech: {
      text: `Welcome back to our math journey! Before we start solving complex problems, we need to master the building blocks. Let us ensure we can recognize a quadratic equation when we see one.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-quadratics-definition.mp3'
    },
    display: {
      content: `### Recognizing Quadratic Equations

Which of the following equations is a quadratic equation?

A) \$2x + 5 = 0\$
B) \$x³ - 4x² + 1 = 0\$
C) \$3x² - 7x + 2 = 0\$`,
      showAfterSpeech: true
    }
  },

  's2-math-quadratics-pure-square-root': {
    speech: {
      text: `Hey there! Let us jump straight into solving equations where the variable is already isolated. When we have a pure square equation, taking the square root is the fastest way to find the answer. Remember to consider both positive and negative results!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-quadratics-pure-square-root.mp3'
    },
    display: {
      content: `### Solving \$x² = k\$

Find all real solutions for the equation:

\$\$x² = 49\$\$`,
      showAfterSpeech: true
    }
  },

  's2-math-quadratics-solving-factorization': {
    speech: {
      text: `Greetings, future math detective! Today, we unlock the power of factorization. This skill allows us to break down complex expressions into simpler parts, which is essential for solving quadratics. Let us start by factoring a basic trinomial.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-quadratics-solving-factorization.mp3'
    },
    display: {
      content: `### Factorizing Quadratic Expressions

To begin our journey into solving quadratics by factoring, first factor the following expression completely:

\$\$x² + 5x + 6\$\$`,
      showAfterSpeech: true
    }
  },

  's2-math-quadratics-parabola-shape': {
    speech: {
      text: `Hi! Imagine throwing a ball. That curve it traces in the air is a parabola, which is the visual representation of a quadratic function. The first thing we need to know is how the leading coefficient determines the shape of that curve.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-quadratics-parabola-shape.mp3'
    },
    display: {
      content: `### Understanding Parabola Shape

Consider the quadratic function:

\$\$y = -2x² + 3x - 1\$\$

Does the graph of this function (the parabola) open upward or downward?`,
      showAfterSpeech: true
    }
  },

  's2-math-quadratics-roots-x-intercepts': {
    speech: {
      text: `Hello! We are about to explore the most important points on a quadratic graph: the roots. Graphically, the roots are where the parabola crosses the horizontal axis. What does this mean for the solutions to the equation?`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-quadratics-roots-x-intercepts.mp3'
    },
    display: {
      content: `### Understanding Roots Graphically

If the graph of a quadratic function crosses the x-axis at the points \$(-3, 0)\$ and \$(5, 0)\$, what are the two real roots (solutions) of the corresponding quadratic equation?`,
      showAfterSpeech: true
    }
  },

  's2-math-quadratics-area-problems': {
    speech: {
      text: `What a great day to apply mathematics! We are tackling real-world optimization challenges, starting with area and perimeter problems. Often, the constraints of a physical space lead directly to a quadratic equation.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-quadratics-area-problems.mp3'
    },
    display: {
      content: `### Area and Perimeter Optimization

A rectangular garden has a width of \$x\$ meters and a length that is 4 meters longer than the width. If the total area of the garden is \$21\$ square meters, write the quadratic equation that models this situation.`,
      showAfterSpeech: true
    }
  },
  /**
   * ========================================
   * S2 ALGEBRAIC FRACTIONS and FORMULAE
   * ========================================
   */
  's2-math-algebraic-fractions-introduction': {
    speech: {
      text: `Welcome to the world of algebraic fractions! Just like regular fractions use numbers, these use algebraic expressions. Let us start by identifying the basic components of this new structure.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-algebraic-fractions-introduction.mp3'
    },
    display: {
      content: `### Understanding Algebraic Fractions

Consider the algebraic fraction: \$\\frac{x^2 + 3}{x - 5}\$

1. Identify the **numerator** of the fraction.
2. Identify the **denominator** of the fraction.`,
      showAfterSpeech: true
    }
  },

  's2-math-algebraic-fractions-factorization': {
    speech: {
      text: `Hey there! Ready to unlock the power of factorization? Simplifying algebraic fractions is like finding hidden shortcuts to make complex expressions neat and manageable. We will begin by factoring linear expressions.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-algebraic-fractions-factorization.mp3'
    },
    display: {
      content: `### Factorization with Linear Expressions

Simplify the following algebraic fraction by factoring the numerator:

\$\$\\frac{2x + 6}{x + 3}\$\$`,
      showAfterSpeech: true
    }
  },

  's2-math-algebraic-fractions-mult-div': {
    speech: {
      text: `Greetings! Today we tackle multiplying algebraic fractions. Remember, multiplication is often the easiest operation—we just multiply straight across the top and straight across the bottom. Let us try a basic example involving monomials.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-algebraic-fractions-mult-div.mp3'
    },
    display: {
      content: `### Multiplying Algebraic Fractions

Multiply the following fractions and express your answer in its simplest form:

\$\$\\frac{5}{2x} \\times \\frac{4x^2}{15}\$\$`,
      showAfterSpeech: true
    }
  },

  's2-math-algebraic-fractions-add-subtract': {
    speech: {
      text: `Hi! Ever wonder how we combine fractions with messy denominators? The secret is the Lowest Common Denominator, or L C D. Finding the L C D is the crucial first step before we can add or subtract.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-algebraic-fractions-add-subtract.mp3'
    },
    display: {
      content: `### Finding LCD for Algebraic Expressions

Find the Least Common Denominator (LCD) for the following pair of algebraic fractions:

\$\$\\frac{3}{x+1} \\quad \\text{and} \\quad \\frac{5}{x}\$\$`,
      showAfterSpeech: true
    }
  },

  's2-math-algebraic-fractions-equations-formulae': {
    speech: {
      text: `Hello! Our journey with algebraic fractions culminates in solving complex equations. This skill is essential for applying algebra to real-world problems. Let us start by clearing the fractions in a simple linear equation.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-algebraic-fractions-equations-formulae.mp3'
    },
    display: {
      content: `### Solving Equations with Fractions

Solve the following equation for \$x\$:

\$\$\\frac{x}{3} + \\frac{1}{2} = 4\$\$`,
      showAfterSpeech: true
    }
  },
  /**
   * ========================================
   * S2 Direct and Inverse Proportions
   * ========================================
   */
  's2-math-proportion-direct-intro': {
    speech: {
      text: `Welcome! Have you ever noticed how ingredients scale up perfectly when you double a recipe? That steady, predictable relationship is the core of direct proportion. Let's start by recognizing it in data.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-proportion-direct-intro.mp3'
    },
    display: {
      content: `### Recognizing Direct Proportion

A baker uses the following amounts of sugar (S) and flour (F) cups:

| Flour (F) cups | Sugar (S) cups |
| :---: | :---: |
| 2 | 0.5 |
| 8 | 2.0 |
| 10 | 2.5 |

Is the amount of sugar directly proportional to the amount of flour? Explain your reasoning.`,
      showAfterSpeech: true
    }
  },

  's2-math-proportion-direct-algebraic': {
    speech: {
      text: `Hey there! We are moving beyond just recognizing proportion and learning the algebraic language that makes predictions possible: the powerful y equals kx. Finding that constant k is our first step.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-proportion-direct-algebraic.mp3'
    },
    display: {
      content: `### Writing and Using y = kx

If y is directly proportional to x, and we know that y = 15 when x = 3:

1. Calculate the constant of proportionality, k.
2. Write the equation relating y and x.`,
      showAfterSpeech: true
    }
  },

  's2-math-proportion-direct-forms': {
    speech: {
      text: `Greetings! Not all growth is linear. Sometimes, one quantity grows much faster than the other, perhaps proportional to the square of the input. Let's explore these accelerated relationships, like y is proportional to x squared.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-proportion-direct-forms.mp3'
    },
    display: {
      content: `### y ∝ x² Relationships

The area (A) of a circle is proportional to the square of its radius (r²). This is written as A ∝ r².

If a circle with a radius of 4 cm has an area of 50.24 cm², find the constant of proportionality (k) such that A = kr².`,
      showAfterSpeech: true
    }
  },

  's2-math-proportion-inverse-intro': {
    speech: {
      text: `Hello and welcome! Think about teamwork: if you have more people working on a job, the time it takes goes down. This balancing act, where one quantity increases as the other decreases, is what inverse proportion is all about.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-proportion-inverse-intro.mp3'
    },
    display: {
      content: `### Recognizing Inverse Proportion

Consider the relationship between the speed (S) of a car and the time (T) it takes to travel a fixed distance.

| Speed (S) mph | Time (T) hours |
| :---: | :---: |
| 30 | 4 |
| 60 | 2 |
| 120 | 1 |

Is the time (T) inversely proportional to the speed (S)? How can you tell?`,
      showAfterSpeech: true
    }
  },

  's2-math-proportion-inverse-algebraic': {
    speech: {
      text: `Hi! When quantities vary inversely, their product remains constant. We use the form y equals k over x to capture this relationship, where k is our crucial constant that links the two variables.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-proportion-inverse-algebraic.mp3'
    },
    display: {
      content: `### Writing and Using y = k/x

Suppose y is inversely proportional to x. If we know that the point (4, 12) lies on the graph of this relationship:

1. Determine the constant of proportionality, k.
2. Write the equation relating y and x.`,
      showAfterSpeech: true
    }
  },

  's2-math-proportion-inverse-forms': {
    speech: {
      text: `Step right up! We are tackling the Inverse Square Law, a fundamental concept governing things like light intensity and gravity. These relationships weaken rapidly as distance increases, proportional to one over x squared.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-proportion-inverse-forms.mp3'
    },
    display: {
      content: `### Inverse Square Law (y ∝ 1/x²)

The intensity of light (I) from a source is inversely proportional to the square of the distance (d) from the source. This is written as I ∝ \$\\frac{1}{d^2}\$.

If the intensity is 50 units when the distance is 3 meters, find the constant of proportionality (k) such that I = \$\\frac{k}{d^2}\$.`,
      showAfterSpeech: true
    }
  },
  /**
   * ========================================
   * S2 PYTHAGORAS THEOREM
   * ========================================
   */
  's2-math-pythagoras-introduction': {
    speech: {
      text: `Welcome! We are about to unlock one of geometry's greatest secrets: Pythagoras' Theorem. Think of right triangles as the fundamental building blocks of many shapes. Before we start calculating, we need to make sure we know the names of the sides. Can you identify the longest side of a right triangle?`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-pythagoras-introduction.mp3'
    },
    display: {
      content: `### Introduction to Pythagoras' Theorem

Every right-angled triangle has three sides. The two shorter sides are called **legs** (or adjacent/opposite sides), and the longest side is the **hypotenuse**.

In the triangle below, which side is the hypotenuse?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "rightTriangle",
          "parameters": {
                "angle": null,
                "angleLabel": "",
                "hypotenuse": "C",
                "opposite": "A",
                "adjacent": "B",
                "highlightSide": "none",
                "showAngleMark": false,
                "showRightAngle": true,
                "showSideTypeLabels": false
          },
          "caption": "A right triangle with sides labeled A, B, and C."
    }
  },

  's2-math-pythagoras-finding-hypotenuse': {
    speech: {
      text: `Hey there! Ready to put the Pythagorean Theorem into action? When we know the length of the two shorter sides, finding the hypotenuse, the longest side, is just a few steps away. Let's start with a classic example. What is the length of side x in this right triangle?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-pythagoras-finding-hypotenuse.mp3'
    },
    display: {
      content: `### Finding the Hypotenuse

Remember the formula: \$a^2 + b^2 = c^2\$. We use this to find the hypotenuse (c) when the two legs (a and b) are known.

**Problem:** Calculate the length of the hypotenuse, x, rounding your answer to one decimal place.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "rightTriangle",
          "parameters": {
                "angle": null,
                "angleLabel": "",
                "hypotenuse": "x",
                "opposite": "5 cm",
                "adjacent": "12 cm",
                "highlightSide": "hypotenuse",
                "showAngleMark": false,
                "showRightAngle": true,
                "showSideTypeLabels": false
          },
          "caption": "A right triangle with legs 5 cm and 12 cm, and hypotenuse x."
    }
  },

  's2-math-pythagoras-finding-shorter-sides': {
    speech: {
      text: `Greetings! We've mastered finding the hypotenuse. Now, what if we know the hypotenuse and one leg, but need to find the other shorter side? It just means we need to rearrange the formula a little. Let's tackle this challenge. Find the missing side length, y.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-pythagoras-finding-shorter-sides.mp3'
    },
    display: {
      content: `### Finding Shorter Sides (Legs)

When finding a shorter side (a or b), we must subtract the square of the known leg from the square of the hypotenuse: \$a^2 = c^2 - b^2\$.

**Problem:** Find the length of the missing side, y, in the triangle below. Give your answer to the nearest whole number.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "rightTriangle",
          "parameters": {
                "angle": null,
                "angleLabel": "",
                "hypotenuse": "13 m",
                "opposite": "y",
                "adjacent": "10 m",
                "highlightSide": "opposite",
                "showAngleMark": false,
                "showRightAngle": true,
                "showSideTypeLabels": false
          },
          "caption": "A right triangle with hypotenuse 13 m, one leg 10 m, and the unknown leg y."
    }
  },

  's2-math-pythagoras-real-world-applications': {
    speech: {
      text: `Hello! Did you know Pythagoras' Theorem is used every day by builders and navigators? It's the perfect tool for calculating distances we can't measure directly, like the height a ladder reaches on a wall. Let's solve a practical problem right now. How high up the wall does this ladder reach?`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-pythagoras-real-world-applications.mp3'
    },
    display: {
      content: `### Real-World Applications

Many real-world situations form a right triangle, allowing us to use \$a^2 + b^2 = c^2\$.

**Problem:** A 6-meter ladder is placed against a wall. The base of the ladder is 2 meters away from the wall. How high up the wall (h) does the ladder reach? Round your answer to two decimal places.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "rightTriangle",
          "parameters": {
                "angle": null,
                "angleLabel": "",
                "hypotenuse": "6 m (Ladder)",
                "opposite": "h (Wall)",
                "adjacent": "2 m (Ground)",
                "highlightSide": "opposite",
                "showAngleMark": false,
                "showRightAngle": true,
                "showSideTypeLabels": false
          },
          "caption": "A ladder forming a right triangle with the wall and the ground."
    }
  },

  's2-math-pythagoras-converse': {
    speech: {
      text: `Good day! We've used Pythagoras to find missing sides, but now we're turning the theorem around. The Converse of Pythagoras helps us verify if a triangle is truly a right triangle when we only know its three side lengths. Let's investigate this triangle. Is it a right triangle?`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-pythagoras-converse.mp3'
    },
    display: {
      content: `### Converse of Pythagoras' Theorem

The converse states: If \$a^2 + b^2 = c^2\$ for a triangle with sides a, b, and c (where c is the longest side), then the triangle is a right-angled triangle.

**Problem:** Determine whether a triangle with side lengths 9 cm, 12 cm, and 15 cm is a right-angled triangle.`,
      showAfterSpeech: true
    }
  }


  // Add more topics as needed following the same pattern
  // Each topic should have: speech.text, speech.emotion, speech.preGeneratedAudioUrl,
  // display.content, display.showAfterSpeech, and optional mathTool
};

/**
 * Helper function to get cached greeting for a topic
 * Returns undefined if topic not in cache (will fall back to AI generation)
 */
export function getCachedGreeting(topicId: string): CachedGreeting | undefined {
  return INITIAL_GREETINGS_CACHE[topicId];
}

/**
 * Check if a topic has a cached greeting
 */
export function hasCachedGreeting(topicId: string): boolean {
  return topicId in INITIAL_GREETINGS_CACHE;
}

/**
 * Get list of all topics with cached greetings
 */
export function getCachedTopicIds(): string[] {
  return Object.keys(INITIAL_GREETINGS_CACHE);
}
