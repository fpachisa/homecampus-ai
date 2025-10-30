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
          "parameters": {},
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
