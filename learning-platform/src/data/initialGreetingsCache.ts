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
      text: `Welcome to the exciting world of trigonometry! At its core, this topic is about unlocking the hidden relationships between the sides and angles of right triangles. Why do we care? Because these simple ratios are the foundation used by engineers, architects, and physicists to calculate heights and distances that are impossible to measure directly. Before we jump into the famous S O H C A H T O A ratios, we must first master the language of the right triangle. Let's start by identifying the three essential sides.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-trigonometry-basic-ratios.mp3'
    },
    display: {
      content: `# Introduction to Trigonometric Ratios

Trigonometry is the study of how the angles and side lengths of triangles relate to each other. Specifically, we begin with **right-angled triangles**.

The key insight is that for a specific angle, the ratio of any two sides (like the opposite side divided by the hypotenuse) remains constant, regardless of the triangle's size. This constancy allows us to set up equations to solve for unknown lengths or angles.

Before we can use the sine, cosine, and tangent ratios, we must correctly identify the three sides relative to the angle of interest: the **Hypotenuse** (always opposite the right angle), the **Opposite** side (opposite the angle θ), and the **Adjacent** side (next to the angle θ).

---

### First Problem: Triangle Labeling

Based on the angle \$\\theta\$ shown in the triangle below, which side is the **Hypotenuse**?`,
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
          "caption": "A right triangle with sides A, B, and C, and angle θ."
    }
  },

  's3-math-trigonometry-problem-solving': {
    speech: {
      text: `Hello! You've mastered the basic trigonometric ratios; now it's time to put that knowledge to work solving real-world puzzles. Trigonometry is the mathematical tool used to measure the height of buildings and the distance across rivers. A crucial step in solving these problems is correctly interpreting the scenario and drawing the diagram. This often involves understanding the concepts of the angle of elevation and the angle of depression. These angles are always measured relative to a horizontal line of sight. Let's start by defining these essential terms.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-trigonometry-problem-solving.mp3'
    },
    display: {
      content: `# Introduction to Problem Solving Using Trigonometry

Solving real-world trigonometry problems requires translating a written description into a geometric diagram, usually involving a right triangle. The most common challenge is correctly identifying the position of the angle.

We use two key terms:
1. **Angle of Elevation:** The angle measured **up** from the horizontal line of sight to an object above.
2. **Angle of Depression:** The angle measured **down** from the horizontal line of sight to an object below.

Both angles are always formed between the line of sight and the **horizontal line** (not the vertical side of the object!).

---

### First Problem: Understanding Angles of Elevation and Depression

If a person standing on the ground looks up at the top of a tower, what type of angle is formed between their line of sight and the horizontal ground?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "elevationDepression",
          "parameters": {
                "type": "elevation",
                "angle": null,
                "height": "h",
                "distance": "d",
                "observerLabel": "Person",
                "targetLabel": "Top of Tower",
                "showTriangle": true,
                "showRightAngle": true,
                "highlightSide": "none"
          },
          "caption": "Visualization of a person looking up at a tower."
    }
  },

  's3-math-trigonometry-true-bearings': {
    speech: {
      text: `Greetings, future navigators! Today, we embark on a journey into true bearings, the precise language of direction used by pilots, sailors, and surveyors worldwide. True bearings provide an unambiguous, three-digit number representing the angle measured clockwise from the North line, which is always zero zero zero degrees. This standardized system is essential for plotting courses and ensuring accurate travel across long distances. Mastering bearings requires visualizing the North line at every point. Let's start by defining the standard format.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-trigonometry-true-bearings.mp3'
    },
    display: {
      content: `# Introduction to True Bearings

True bearings are a fundamental concept in navigation and surveying, providing a precise direction from one point to another. They are defined by three key rules:

1. **Measured from North:** Bearings always start from the North line (000°).
2. **Clockwise Direction:** The angle is measured in a clockwise direction.
3. **Three Digits:** Bearings must always be written using three digits (e.g., 45° is written as 045°).

Understanding these fundamentals is the first step to drawing accurate navigation diagrams and solving complex path problems.

---

### First Problem: Understanding True Bearings

What is the true bearing for traveling due East?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "bearings",
          "parameters": {
                "points": [
                      {
                            "label": "A",
                            "bearing": 90
                      }
                ],
                "legs": [],
                "showInteriorAngles": false,
                "showCompassRose": true,
                "showNorthLines": true
          },
          "caption": "A compass rose showing the North line (000°)."
    }
  },

  's3-math-trigonometry-obtuse-angles': {
    speech: {
      text: `Hi there! Up until now, trigonometry has been confined to the ninety degree limit of the right triangle. But what happens when we encounter angles greater than ninety degrees, or obtuse angles? Does sine, cosine, or tangent still work? Absolutely! This topic expands our trigonometric world by introducing supplementary angle relationships. We learn how the trigonometric ratios for an obtuse angle relate directly to the ratios for its supplementary angle, which is one hundred eighty degrees minus theta. Let's start by clarifying what an obtuse angle means in this context.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-trigonometry-obtuse-angles.mp3'
    },
    display: {
      content: `# Introduction to Trigonometry with Obtuse Angles

When we first learned trigonometry, we focused solely on acute angles (less than 90°) within right triangles. However, many real-world triangles (and those solved using the Sine and Cosine Rules) contain **obtuse angles** (angles between 90° and 180°).

To handle these larger angles, we extend the definitions of sine, cosine, and tangent using the concept of the unit circle. The key idea is that the trigonometric ratios for an obtuse angle are mathematically linked to the ratios of its corresponding acute angle in the first quadrant.

This relationship, known as the supplementary angle relationship, is crucial: for example, \$\\sin(\\theta) = \\sin(180° - \\theta)\$. We will explore how this affects the signs (positive or negative) of the trig ratios.

---

### First Problem: Obtuse Angle Definition

In the context of solving a general triangle, what is the range of possible angle measures for an obtuse angle?`,
      showAfterSpeech: true
    }
  },

  's3-math-trigonometry-area-of-triangle': {
    speech: {
      text: `Welcome back! For years, you've calculated the area of a triangle using the formula: Area equals one half base times height. But what if you don't know the perpendicular height, or it's simply too difficult to measure? This is where trigonometry steps in to offer a far more versatile and elegant solution. The trigonometric area formula allows us to find the area of any triangle, provided we know the lengths of two sides and the measure of the angle included between them. Let's look at this powerful formula.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-trigonometry-area-of-triangle.mp3'
    },
    display: {
      content: `# Introduction to Area of a Triangle (Trigonometric Formula)

While the traditional formula, Area = \$\\frac{1}{2}bh\$, works well for simple cases, it requires knowing the perpendicular height (\$h\$), which is often unavailable in surveying or design problems.

The trigonometric area formula generalizes this concept: **Area = \$\\frac{1}{2}ab \\sin C\$**.

This formula requires knowing two sides (\$a\$ and \$b\$) and the angle *included* between them (\$C\$). This is a powerful tool because it allows us to calculate the area of *any* triangle, regardless of whether it is a right triangle or not, using only easily measurable side lengths and angles.

---

### First Problem: Understanding the Area Formula

In triangle PQR shown below, which angle must be used in the formula Area = \$\\frac{1}{2}pq \\sin R\$?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "generalTriangle",
          "parameters": {
                "sideA": "q",
                "sideB": "r",
                "sideC": "p",
                "angleA": 65,
                "angleB": 45,
                "angleC": 70,
                "angleA_label": "Q",
                "angleB_label": "R",
                "angleC_label": "P",
                "vertexA_label": "Q",
                "vertexB_label": "R",
                "vertexC_label": "P",
                "highlightSide": "none",
                "highlightAngle": "none",
                "showAngles": true,
                "showSides": true,
                "triangleType": "acute"
          },
          "caption": "Triangle PQR with sides p, q, and r, and angles P, Q, and R."
    }
  },

  's3-math-trigonometry-sine-rule': {
    speech: {
      text: `Hey! Get ready for a major upgrade in your geometry toolkit! Until now, if a triangle wasn't a right triangle, we were stuck. The Sine Rule changes everything, allowing us to solve any triangle, provided we have enough information. This powerful formula provides a proportional relationship between the sides of any triangle and the sines of their opposite angles. This rule is indispensable when you know a side and its opposite angle. Let's discover the rule now!`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-trigonometry-sine-rule.mp3'
    },
    display: {
      content: `# Introduction to the Sine Rule

The Sine Rule is a crucial tool used to solve non-right-angled triangles. It establishes a simple, elegant relationship: the ratio of a side length to the sine of its opposite angle is constant throughout the triangle.

**The Sine Rule:** \$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}\$

We use the Sine Rule primarily when we have a 'matching pair'—a known side and its opposite angle. This allows us to solve triangles given Angle-Angle-Side (AAS) or Angle-Side-Angle (ASA) information. It is foundational for complex calculations in surveying and navigation.

---

### First Problem: Discovering the Sine Rule

If we are given a triangle with side \$a = 10\$ and angle \$A = 40°\$, and we need to find side \$b\$, which ratio must we also know to apply the Sine Rule?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "generalTriangle",
          "parameters": {
                "sideA": "a",
                "sideB": "b",
                "sideC": "c",
                "angleA": 40,
                "angleB": 60,
                "angleC": 80,
                "highlightSide": "b",
                "showAngles": true,
                "showSides": true,
                "triangleType": "acute"
          },
          "caption": "A general triangle labeled for the Sine Rule."
    }
  },

  's3-math-trigonometry-cosine-rule': {
    speech: {
      text: `Hello again! While the Sine Rule is fantastic for solving triangles with matching angle and side pairs, it can't solve every triangle. If you know all three sides, or two sides and the included angle, you need a different tool: the Cosine Rule. This rule is essentially an extension of the Pythagorean theorem, adding a correction factor to account for non-right angles. Mastering the Cosine Rule completes your ability to solve any triangle, no matter how complex its shape. Let's look at when we need to use this specialized formula.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-trigonometry-cosine-rule.mp3'
    },
    display: {
      content: `# Introduction to the Cosine Rule

The Cosine Rule is the second major tool for solving non-right-angled triangles. It is a powerful generalization of the Pythagorean theorem (\$c² = a² + b²\$), adding the term \$-2ab \\cos C\$ to adjust for angles that are not 90°.

**The Cosine Rule (Finding a Side):** \$c² = a² + b² - 2ab \\cos C\$

We use the Cosine Rule in two specific scenarios where the Sine Rule won't work:
1. **SAS (Side-Angle-Side):** When two sides and the angle *included* between them are known, to find the third side.
2. **SSS (Side-Side-Side):** When all three sides are known, to find any angle.

---

### First Problem: Understanding the Cosine Rule

In the triangle below, we know sides \$a\$ and \$c\$, and the included angle \$B\$. Which side can we calculate directly using the Cosine Rule?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "generalTriangle",
          "parameters": {
                "sideA": "a",
                "sideB": "b",
                "sideC": "c",
                "angleA": 50,
                "angleB": 70,
                "angleC": 60,
                "highlightSide": "b",
                "highlightAngle": "B",
                "showAngles": true,
                "showSides": true,
                "triangleType": "acute"
          },
          "caption": "Triangle ABC showing two known sides (a and c) and the included angle B."
    }
  },

  /**
   * ========================================
   * S3 MATHEMATICS - EXPONENTS
   * ========================================
   */
  's3-math-exponents-laws': {
    speech: {
      text: `Hey there, ready to unlock some mathematical superpowers? Exponents are the ultimate shortcut in math. They let us simplify huge, repetitive calculations into neat, compact expressions. We are starting today by mastering the fundamental language of exponents: knowing what the base is, what the exponent is, and what they mean together.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponents-laws.mp3'
    },
    display: {
      content: `# Introduction to Exponent Laws

Welcome! Exponents are one of the most powerful tools in mathematics, acting as a shorthand for repeated multiplication. Instead of writing \$2 \\times 2 \\times 2 \\times 2\$, we can simply write \$2^4\$. This concise notation is crucial for simplifying complex expressions and handling large numbers efficiently.

Understanding exponents is foundational. You will learn five core laws, starting with the basic notation \$a^n\$. Here, 'a' is the **base** (the number being multiplied), and 'n' is the **exponent** (how many times the base is multiplied by itself). Over the next few sections, you will master how to multiply, divide, and raise powers to powers, ultimately allowing you to simplify any exponential expression.

Let's begin by ensuring we are fluent in the basic language of exponents.

---

**First Problem: Basic Exponent Notation and Terminology**

Write the following expression using exponent notation:

\$ 5 \\times 5 \\times 5 \\times 5 \\times 5 \\times 5 \$`,
      showAfterSpeech: true
    }
  },

  's3-math-exponents-rational': {
    speech: {
      text: `Greetings! Today we are making a crucial connection in algebra, linking two seemingly different concepts: exponents and roots. Rational exponents, which are exponents that are fractions, are the key to this connection. They allow us to rewrite tricky radical expressions using the familiar rules of exponents, which makes advanced problem solving much smoother.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponents-rational.mp3'
    },
    display: {
      content: `# Introduction to Rational Exponents

Hello! If you've mastered the basic laws of exponents, you're ready for the next level: **Rational Exponents**. A rational exponent is simply an exponent that is a fraction, like \$\\frac{1}{2}\$ or \$\\frac{2}{3}\$.

Why do we need them? Rational exponents provide a powerful way to express roots (radicals). The core rule we learn first is:

\$ a^{1/n} = \\sqrt[n]{a} \$

This rule means that raising a number to the power of \$\\frac{1}{n}\$ is the same as taking the \$n\$-th root of that number. For instance, \$9^{1/2}\$ is the square root of 9. This notation is essential for simplifying complex expressions and is widely used in calculus and higher mathematics.

We start by mastering the simplest form, \$a^{1/n}\$.

---

**First Problem: Rational Exponents of the Form 1/n**

Evaluate the following expression without using a calculator:

\$ 64^{1/3} \$`,
      showAfterSpeech: true
    }
  },

  's3-math-exponents-standard-form': {
    speech: {
      text: `Welcome to the world of the very big and the very small! Have you ever wondered how scientists calculate the distance to a star or the size of an atom? They use Standard Form, also known as Scientific Notation. This system allows us to handle incredibly long numbers, whether they have dozens of zeros at the end or dozens of zeros after the decimal point, by expressing them neatly as a number between one and ten multiplied by a power of ten.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponents-standard-form.mp3'
    },
    display: {
      content: `# Introduction to Standard Form (Scientific Notation)

Greetings! Standard Form, or Scientific Notation, is the universal language for expressing numbers encountered in the real world—from the mass of the Sun to the diameter of a virus. It solves the problem of writing and manipulating numbers that are too large or too small to be practical in their ordinary form.

The format is always expressed as:

\$ a \\times 10^k \$

Where 'a' is a number between 1 and 10 (specifically, 1 <= |a| &lt; 10), and 'k' is an integer exponent. The exponent \$k\$ tells us exactly how many places the decimal point has been moved. Mastering this notation is essential for scientific literacy and advanced calculations.

Let's start by identifying the components of Standard Form.

---

**First Problem: Understanding and Writing Standard Form**

In the standard form expression \$3.45 \\times 10^9\$:

1. Identify the value of 'a' (the coefficient).
2. Identify the value of 'k' (the exponent).`,
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
      text: `Welcome to the foundation of advanced mathematics! Relations and Functions. Think of a relation as a partnership or a connection between two sets of values, usually the input x and the output y. Understanding how these variables connect is the very first step in mathematical modeling.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-relations-functions-fundamentals.mp3'
    },
    display: {
      content: `# Introduction to Relations and Functions Fundamentals

Relations are the backbone of mathematical modeling. Think of a relation as a partnership or a connection between two sets of values—usually the input (\$x\$) and the output (\$y\$). Mathematically, a **relation** is simply a set of ordered pairs \$(x, y)\$. These pairs can come from a list of points, an equation, or a graph.

Understanding relations is the first step toward understanding functions, which are special, highly organized relations where every input has exactly one output. In this first section, we will focus on defining relations, whether they are represented by a finite set of points or an infinite set described by an equation.

--- 

### First Problem: Understanding Relations

Consider the relation \$R = \\{(1, 5), (2, 7), (3, 5), (4, 9)\\}\$.

Which of the following ordered pairs belongs to the relation \$R\$?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "cartesianPlane",
          "parameters": {
                "points": [
                      {
                            "x": 1,
                            "y": 5
                      },
                      {
                            "x": 2,
                            "y": 7
                      },
                      {
                            "x": 3,
                            "y": 5
                      },
                      {
                            "x": 4,
                            "y": 9
                      }
                ],
                "title": "Relation R",
                "xMin": 0,
                "xMax": 5,
                "yMin": 0,
                "yMax": 10
          },
          "caption": "The relation R visualized as a set of points on the coordinate plane."
    }
  },

  's3-math-relations-functions-function-notation': {
    speech: {
      text: `Hello and welcome to Function Notation! Get ready to upgrade your mathematical language. Function notation, often written as f of x, is one of the most powerful conventions in mathematics because it clearly identifies the input, the output, and the function itself.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-relations-functions-function-notation.mp3'
    },
    display: {
      content: `# Introduction to Function Notation

Function notation, often written as \$f(x)\$, is one of the most powerful conventions in mathematics. While you are used to writing equations like \$y = 2x + 1\$, the \$f(x)\$ notation doesn't just replace \$y\$; it tells you *which* function you are using and *what* the input variable is. We read \$f(x)\$ as "f of x," meaning the output value of the function \$f\$ when the input is \$x\$.

This notation is essential because it allows us to clearly distinguish between multiple functions in a single problem (like \$f(x)\$ and \$g(x)\$) and makes evaluating functions incredibly clear. Instead of saying, "Find \$y\$ when \$x=3\$," we simply write "Find \$f(3)\$." We start by understanding the components of this notation.

--- 

### First Problem: Function Notation Basics

Consider the function notation \$P(t) = 5t² - 1\$.

In this expression, what does the variable \$t\$ represent?`,
      showAfterSpeech: true
    }
  },

  's3-math-relations-functions-domain-range': {
    speech: {
      text: `Hey there! Are you ready to define the boundaries of a function? We are diving into Domain and Range. Every function operates within certain limits, and understanding these limits is essential for real-world applications.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-relations-functions-domain-range.mp3'
    },
    display: {
      content: `# Introduction to Domain and Range

Every function operates within certain limits. The **Domain** of a function is the complete set of all possible input values (the \$x\$-values) that the function can accept. The **Range** is the complete set of all resulting output values (the \$y\$-values) that the function produces.

Understanding domain and range is critical because, in real-world scenarios, inputs often have physical constraints—you can't have a negative number of people or divide by zero. We use interval notation to precisely describe these sets of values. In this first section, we will establish the foundational concepts: identifying which values belong to the domain and which belong to the range.

--- 

### First Problem: Domain and Range Concepts

Consider the relation \$R = \\{(1, 8), (3, 9), (5, 10), (7, 11)\\}\$.

What is the Domain of this relation?`,
      showAfterSpeech: true
    }
  },

  's3-math-relations-functions-sign-diagrams': {
    speech: {
      text: `Greetings! Today we learn a powerful analytical tool: Sign Diagrams. This technique helps us map out the behavior of functions by summarizing where a function's output values are positive, negative, zero, or undefined.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-relations-functions-sign-diagrams.mp3'
    },
    display: {
      content: `# Introduction to Sign Diagrams

A **Sign Diagram** (or sign chart) is essentially a number line that summarizes where a function's output values (\$y\$ or \$f(x)\$) are positive (+), negative (-), zero (0), or undefined. Instead of graphing the entire function, we use the diagram to quickly analyze inequalities and determine the function's behavior across different intervals.

The key to creating a sign diagram is finding the **critical points**—the values of \$x\$ where the function equals zero (roots) or where the function is undefined. These critical points divide the number line into intervals, and within each interval, the sign of the function remains constant. We start by identifying these critical points.

--- 

### First Problem: Creating Sign Diagrams

To create a sign diagram for the function \$f(x) = (x - 2)(x + 5)\$, we must first find the critical points where \$f(x) = 0\$.

What are the critical points (roots) of \$f(x)\$?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "numberLine",
          "parameters": {
                "min": -7,
                "max": 4,
                "points": [
                      {
                            "value": -5,
                            "label": "-5",
                            "style": "closed"
                      },
                      {
                            "value": 2,
                            "label": "2",
                            "style": "closed"
                      }
                ],
                "title": "Critical Points for f(x) = (x - 2)(x + 5)",
                "caption": "The critical points divide the number line into intervals where the sign of the function is constant."
          }
    }
  },

  's3-math-relations-functions-transformations': {
    speech: {
      text: `Hi there, future graph master! Ready to move some functions around? We are diving into Transformations! This technique gives us a massive shortcut for graphing by systematically shifting, stretching, or reflecting a basic parent function.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-relations-functions-transformations.mp3'
    },
    display: {
      content: `# Introduction to Transformations of Graphs

Why redraw an entire graph from scratch every time you change the equation slightly? Function transformations give us a massive shortcut! Transformations are systematic ways to manipulate the graph of a basic function (the parent function) to create the graph of a more complex function. We achieve this through three main types of changes: **translations** (shifts), **stretches/compressions**, and **reflections** (flips).

In this first section, we focus on **translations**, which involve shifting the graph horizontally or vertically without changing its shape or orientation. If you add a constant \$k\$ *outside* the function, \$y = f(x) + k\$, the graph shifts vertically. If you subtract a constant \$h\$ *inside* the function, \$y = f(x - h)\$, the graph shifts horizontally. 

--- 

### First Problem: Translations (Shifts)

Consider the parent function \$f(x) = x²\$. A new function is defined as \$g(x) = x² + 7\$.

How does the graph of \$g(x)\$ relate to the graph of \$f(x)\$?`,
      showAfterSpeech: true
    }
  },

  's3-math-relations-functions-absolute-value': {
    speech: {
      text: `Welcome to the world of absolute value! What happens when we only care about magnitude, not direction? The absolute value of a number is simply its distance from zero on the number line, meaning it always returns a non-negative result.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-relations-functions-absolute-value.mp3'
    },
    display: {
      content: `# Introduction to the Absolute Value Function

The **absolute value** of a number, denoted by \$|x|\$, is simply its distance from zero on the number line. Because distance is always non-negative, the absolute value function takes any input and returns a positive result (or zero).

This fundamental concept is defined piecewise: \$|x| = x\$ if \$x \\ge 0\$, and \$|x| = -x\$ if \$x < 0\$. The absolute value function is crucial in mathematics for measuring error, distance, and magnitude. Graphically, the absolute value function \$y = |x|\$ forms a distinctive V-shape. We start by ensuring we fully grasp the definition and evaluation process.

--- 

### First Problem: Understanding Absolute Value

Evaluate the expression \$|-15| + |8 - 3|\$.`,
      showAfterSpeech: true
    }
  },

  /**
   * ========================================
   * S3 MATHEMATICS - STATISTICS
   * ========================================
   */
  's3-math-statistics-data-types': {
    speech: {
      text: `Welcome to the world of statistics! Before we can analyze data, we have to collect and organize it properly. This means understanding the difference between a population and a sample, and classifying data as either discrete, which is counted, or continuous, which is measured. Mastering data collection basics is the essential first step to becoming a great statistician.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-statistics-data-types.mp3'
    },
    display: {
      content: `# Introduction to Statistics and Data Collection

Statistics is the science of collecting, organizing, analyzing, and interpreting data. Our journey begins with **Data Collection Basics**, where we establish the scope of our study. A **Population** is the entire group we are interested in, while a **Sample** is a smaller, manageable subset chosen from that population.

We also classify data based on how it is obtained: **Discrete data** results from counting (like the number of cars), and **Continuous data** results from measuring (like height or temperature). Correctly identifying these types is fundamental, as it dictates how we organize the data using tools like frequency tables and histograms.

--- 

Let's start with the foundational concepts of data collection.

**Problem:** A researcher wants to study the average age of all registered voters in the state of Texas. They randomly select 5,000 registered voters and record their ages.

Identify the **Population** and the **Sample** in this study.`,
      showAfterSpeech: true
    }
  },

  's3-math-statistics-distributions': {
    speech: {
      text: `Have you ever looked at a graph and wondered what story the data is telling? Today, we are learning to read that story by describing distribution shapes. Understanding whether data is symmetric, skewed, or bimodal is crucial because the shape influences which statistical tools we should use for analysis.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-statistics-distributions.mp3'
    },
    display: {
      content: `# Describing Distribution Shapes

When we plot data, the resulting shape of the distribution reveals critical information about the underlying process. We look for key features like symmetry, peaks, and tails. A **Symmetric** distribution (like a perfect bell curve) has equal halves, suggesting the mean and median are similar.

If the data is clustered on one side, it is **Skewed**. If the tail points to the right, it is positively skewed; if the tail points to the left, it is negatively skewed. We also look for **Bimodal** distributions (having two distinct peaks) and **Outliers** (extreme values that stand far away from the rest of the data).

--- 

Let's practice identifying the shape of a distribution.

**Problem:** A histogram showing the results of a difficult exam has most students scoring between 10% and 40%, with a long, thin tail extending towards 100%. 

How would you describe the shape of this distribution (symmetric, positively skewed, or negatively skewed)?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "histogram",
          "parameters": {
                "intervals": [
                      {
                            "start": 0,
                            "end": 20,
                            "frequency": 15
                      },
                      {
                            "start": 20,
                            "end": 40,
                            "frequency": 25
                      },
                      {
                            "start": 40,
                            "end": 60,
                            "frequency": 10
                      },
                      {
                            "start": 60,
                            "end": 80,
                            "frequency": 5
                      },
                      {
                            "start": 80,
                            "end": 100,
                            "frequency": 2
                      }
                ],
                "xLabel": "Exam Score (%)",
                "title": "Distribution of Difficult Exam Scores"
          },
          "caption": "A visual representation of the exam scores. Notice the long tail on the right side."
    }
  },

  's3-math-statistics-centre': {
    speech: {
      text: `Hey there! Ready to find the 'average' of a dataset? Today we dive into Measures of Centre, which are single values that represent the typical or central position of a group of numbers. We will focus on the three main types: the mean, the median, and the mode. This skill is vital for summarizing information quickly, whether you are calculating your GPA or reporting market trends.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-statistics-centre.mp3'
    },
    display: {
      content: `# The Mean (Arithmetic Average)

Measures of centre provide a summary statistic for a dataset. The most common measure is the **Mean**, often denoted by \$\\\\bar{x}\$ (x-bar) for a sample. The mean is the arithmetic average—the sum of all values divided by the count of values.

The formula for the mean is: 
\$\\\\bar{x} = \\\\frac{\\\\Sigma x}{n}\$

Where \$\\Sigma x\$ is the sum of all data points, and \$n\$ is the total number of data points. We will also learn about the **Median** (the middle value) and the **Mode** (the most frequent value), and when it is best to use each one.

--- 

Let's begin by calculating the mean.

**Problem:** A small group of students recorded the number of hours they spent studying for a test: 5, 8, 2, 7, 3. 

Calculate the mean (\$\\bar{x}\$) number of hours studied.`,
      showAfterSpeech: true
    }
  },

  's3-math-statistics-boxplots': {
    speech: {
      text: `Greetings! Let's master the art of data summarization using box plots. These visual tools rely on the five number summary, which gives us a quick, robust overview of a dataset's spread and central tendency, regardless of how large the data is. Understanding quartiles is key to comparing different data sets effectively.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-statistics-boxplots.mp3'
    },
    display: {
      content: `# The Five-Number Summary and Quartiles

Box plots (or box-and-whisker plots) are built using the **Five-Number Summary**: Minimum, First Quartile (\$Q_1\$), Median (\$Q_2\$), Third Quartile (\$Q_3\$), and Maximum. These five values divide the ordered data into four equal sections, or quartiles, with 25% of the data falling into each section.

The **Median** (\$Q_2\$) is the middle value of the entire dataset. \$Q_1\$ is the median of the lower half, and \$Q_3\$ is the median of the upper half. These quartiles allow us to calculate the **Interquartile Range (IQR)**, which measures the spread of the middle 50% of the data.

--- 

Let's start by finding the most important part of the summary: the median.

**Problem:** Find the median (\$Q_2\$) of the following ordered dataset:

12, 15, 18, 20, 21, 25, 29`,
      showAfterSpeech: true
    }
  },

  's3-math-statistics-cumulative': {
    speech: {
      text: `Hello! Today we unlock the power of percentiles. Cumulative frequency is a technique that lets us track the running total of frequencies, which is essential for determining the relative standing of any score. If you have ever wondered what percentile your test score falls into, this is the math that tells you!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-statistics-cumulative.mp3'
    },
    display: {
      content: `# Cumulative Frequency and Percentiles

While standard frequency tells us *how many* times a score occurred, **Cumulative Frequency (CF)** tells us *how many* scores fall below a certain value. We calculate CF by continuously adding the frequencies of the preceding classes.

This running total is vital for finding **Percentiles**, which are measures of position. For example, the 75th percentile is the value below which 75% of the data falls. We use CF tables to construct **Cumulative Frequency Graphs (Ogive)**, which allow us to estimate percentiles and quartiles quickly from the curve.

--- 

Let's begin by building a cumulative frequency table.

**Problem:** Given the following frequency table, calculate the cumulative frequency for the score of 3.

| Score (x) | Frequency (f) |
| :---: | :---: |
| 1 | 4 |
| 2 | 7 |
| 3 | 5 |
| 4 | 2 |`,
      showAfterSpeech: true
    }
  },

  's3-math-statistics-deviation': {
    speech: {
      text: `Think about consistency. If two athletes have the same average score, how do we know which one is more reliable? The answer lies in Standard Deviation, which is the most common measure of spread. It quantifies how much data points typically deviate from the mean, helping us understand risk, reliability, and consistency.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-statistics-deviation.mp3'
    },
    display: {
      content: `# Understanding Deviation from the Mean

We know the mean (\$\\\\bar{x}\$) tells us the center of the data, but **Standard Deviation (\$\\sigma\$)** tells us how spread out the data is. Our first step in calculating \$\\\\sigma\$ is finding the **deviation** of each data point (\$x\$) from the mean (\$\\\\bar{x}\$), calculated as \$(x - \\\\bar{x})\$.

We square these deviations, \$(x - \\\\bar{x})^2\$, to ensure positive values (since positive and negative deviations would cancel out) and to penalize larger deviations more heavily. The standard deviation is ultimately the square root of the average of these squared deviations, giving us a measure in the original units of the data.

--- 

Let's start with the very first step in the calculation.

**Problem:** A small dataset has a mean (\$\\\\bar{x}\$) of 10. Calculate the deviation from the mean \$(x - \\\\bar{x})\$ for a data point where \$x = 13\$.`,
      showAfterSpeech: true
    }
  },

  's3-math-statistics-normal': {
    speech: {
      text: `Welcome to the 'Bell Curve' club! The Normal Distribution is arguably the most important concept in statistics, describing everything from human height to manufacturing errors. It is a beautiful, symmetric distribution that allows us to make powerful predictions about probability and population characteristics.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-statistics-normal.mp3'
    },
    display: {
      content: `# Understanding the Normal Distribution

The **Normal Distribution** is a continuous probability distribution characterized by its distinctive **bell curve** shape. It is perfectly symmetric around its central point, where the mean (\$\\mu\$), median, and mode are all equal. The shape is entirely defined by two parameters: the mean (\$\\mu\$) and the standard deviation (\$\\sigma\$).

Because of its predictable shape, we can use the **Empirical Rule** (or 68-95-99.7 rule) to estimate the percentage of data that falls within 1, 2, or 3 standard deviations of the mean. This rule is fundamental for calculating probabilities and making real-world predictions based on normally distributed data.

--- 

Let's start by confirming our understanding of its basic properties.

**Problem:** State two key properties of the Normal Distribution curve related to its shape and central tendency.`,
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
      text: `Hello! Ready to dive into the simplest way to solve quadratics? We start with the basic square root method. This technique acts like an undo button for squared terms, allowing us to isolate x quickly. Remember, when you take a square root, you always get two answers: a positive one and a negative one. This approach is essential for calculating things like area and distance in physics.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-solving-standard-form.mp3'
    },
    display: {
      content: `# Introduction to the Basic Square Root Method

Solving quadratic equations of the form \$ax² = k\$ is the most straightforward path to finding roots. This method relies on the fundamental concept of **inverse operations**. Since squaring a number is the last operation performed on x, we 'undo' it by taking the square root of both sides.

Crucially, remember the **Plus/Minus (±) Rule**: Every positive number has two real square roots (a positive one and a negative one). If we ignore the negative root, we lose a valid solution! This method is widely used in geometry and physics when dealing with formulas involving squares, such as \$A = \\pi r²\$ or distance calculations. We must also recognize that if \$k\$ is negative, there are no real solutions.

Let's start by practicing the basic isolation and application of the square root rule.

***

**First Problem:**

Solve the following quadratic equation for x:

\$3x² = 75\$`,
      showAfterSpeech: true
    }
  },

  's3-math-quadratic-solving-factorization': {
    speech: {
      text: `Hey there, math enthusiast! Get ready to unlock the secrets of factorization. We are starting with one of the most powerful rules in algebra: the Zero Product Property. This property allows us to turn a complicated quadratic equation into two simple linear equations, making finding the solutions incredibly fast and efficient.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-solving-factorization.mp3'
    },
    display: {
      content: `# Introduction to the Zero Product Property

Factorization is a cornerstone of algebra, allowing us to rewrite complex polynomials as a product of simpler expressions (factors). The key to solving quadratics using this method is the **Zero Product Property (ZPP)**. This property states that if the product of two or more factors is zero, then at least one of the factors must be zero. If \$A \\times B = 0\$, then \$A = 0\$ or \$B = 0\$.

This method is essential because it provides the fastest way to find the roots (x-intercepts) of a quadratic equation, provided the equation is factorable. We will learn how to factor equations where the leading coefficient (\$a\$) equals 1, and later, where \$a\$ is not 1, using techniques like splitting the middle term.

Let's begin by applying the Zero Product Property directly to an already factored equation.

***

**First Problem:**

Use the Zero Product Property to solve for the roots of the equation:

\$(x - 5)(x + 2) = 0\$`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "factoringVisualizer",
          "parameters": {
                "a": 1,
                "b": -3,
                "c": -10,
                "showSteps": false
          },
          "caption": "Visualizing the roots of the expanded form x² - 3x - 10 = 0, which factors to (x-5)(x+2)."
    }
  },

  's3-math-quadratic-solving-fractional': {
    speech: {
      text: `Welcome! Dealing with fractional equations can feel messy, but we have a powerful technique to clear the clutter: the Least Common Denominator method. Today, we learn how to transform these equations into standard quadratics that we already know how to solve. A critical step in this process is checking your final answers to ensure you dont have any extraneous roots.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-solving-fractional.mp3'
    },
    display: {
      content: `# Introduction to Clearing Fractional Equations

Fractional equations, also known as rational equations, often hide a quadratic structure. Our primary goal is to **clear the fractions** to transform the equation into the standard form \$ax² + bx + c = 0\$. We achieve this by multiplying every term in the equation by the **Least Common Denominator (LCD)** of all the fractions present.

This transformation is crucial because it simplifies the solving process dramatically. However, when variables appear in the denominator, we must be vigilant. Any solution that makes the original denominator equal to zero is an **extraneous root** and must be discarded. This concept is vital when solving real-world problems involving work rates or mixing solutions, where constraints on inputs exist.

Let's start by clearing the denominator in a simple rational equation.

***

**First Problem:**

Clear the fraction and rewrite the following equation in the standard quadratic form \$ax² + bx + c = 0\$:

\$\\frac{6}{x} = x + 5\$`,
      showAfterSpeech: true
    }
  },

  's3-math-quadratic-solving-completing-square': {
    speech: {
      text: `Greetings! Today we are tackling one of the most elegant and fundamental methods in algebra: completing the square. Think of it like building a perfect geometric square out of algebraic pieces. This method is crucial because it helps us understand the structure of the parabola, easily find its vertex, and is the very technique used to derive the quadratic formula itself.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-solving-completing-square.mp3'
    },
    display: {
      content: `# Introduction to Perfect Squares

**Completing the Square (CTS)** is an algebraic technique used to convert any standard quadratic equation (\$ax² + bx + c = 0\$) into the vertex form \$a(x-h)² + k = 0\$. This method is based on creating a **perfect square trinomial (PST)**, which is a trinomial that factors into \$(x + d)²\$.

The key insight is that for a PST of the form \$x² + bx + c\$, the constant term \$c\$ must always be equal to the square of half the coefficient of \$x\$: \$c = (b/2)²\$. By adding and subtracting this specific value, we maintain the equality of the equation while creating the desired perfect square structure. This method is indispensable for graphing parabolas and understanding transformations.

Let's begin by identifying the missing piece needed to form a perfect square.

***

**First Problem:**

Find the constant \$c\$ that must be added to the expression to complete the square:

\$x² + 10x + c\$`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "completingSquareVisualizer",
          "parameters": {
                "a": 1,
                "b": 10,
                "c": 0,
                "showGeometric": true,
                "showSteps": false
          },
          "caption": "Visualizing the geometric components of x² + 10x, showing the missing piece needed to form a perfect square."
    }
  },

  's3-math-quadratic-solving-formula': {
    speech: {
      text: `Good morning! Are you ready for the ultimate safety net of quadratic solving? The quadratic formula is the reliable tool that guarantees a solution for any quadratic equation, regardless of how messy the numbers are or whether it factors easily. Understanding the formula starts with correctly identifying the coefficients a, b, and c from the standard form.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-solving-formula.mp3'
    },
    display: {
      content: `# Introduction to the Quadratic Formula

The **Quadratic Formula** is the universal method for solving any equation in the standard form \$ax² + bx + c = 0\$. It is derived directly from the method of completing the square and provides the roots (solutions) \$x\$ instantly, provided you correctly substitute the coefficients \$a\$, \$b\$, and \$c\$.

The formula is:

\$x = \\frac{-b \\pm \\sqrt{b² - 4ac}}{2a}\$

This formula is not just a calculation tool; it also contains the **discriminant** (\$b² - 4ac\$), which predicts the number and nature of the solutions (two real, one real, or complex). The quadratic formula is essential in fields like engineering and finance, where finding exact breaking points or optimal values is critical.

We start by ensuring we can accurately identify the inputs for the formula.

***

**First Problem:**

Identify the coefficients \$a\$, \$b\$, and \$c\$ for the following quadratic equation:

\$5x² - 2x + 1 = 0\$`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "quadraticFormulaVisualizer",
          "parameters": {
                "a": 5,
                "b": -2,
                "c": 1,
                "showDiscriminant": false,
                "showSteps": false
          },
          "caption": "Highlighting the coefficients a, b, and c in the standard quadratic equation."
    }
  },

  's3-math-quadratic-solving-exponential': {
    speech: {
      text: `Hi there! Let's explore a fascinating intersection of exponential functions and quadratics. Sometimes, an equation looks intimidatingly exponential, but it's actually a quadratic in disguise! We use the substitution method to temporarily simplify the equation, solve it using standard techniques, and then revert back to the original variable using logarithms if necessary.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-solving-exponential.mp3'
    },
    display: {
      content: `# Introduction to Substitution in Exponential Equations

Certain exponential equations can be solved using quadratic techniques if they exhibit the form \$A(a^{2x}) + B(a^x) + C = 0\$. Recognizing this pattern is the first step in applying the **Substitution Method**.

By defining a new variable, say \$y\$, where \$y = a^x\$, the equation simplifies dramatically into the standard quadratic form \$Ay² + By + C = 0\$. This transformation allows us to use factoring or the quadratic formula to solve for \$y\$. Once \$y\$ is found, we substitute back (\$a^x = y\$) and use logarithms to solve for the original variable \$x\$.

This technique is vital in modeling real-world phenomena like population growth, radioactive decay, and compound interest, where exponential functions are fundamental. We will start by applying the substitution step.

***

**First Problem:**

Use the substitution \$y = e^x\$ to transform the following exponential equation into a standard quadratic equation in terms of \$y\$:

\$e^{2x} + e^x - 12 = 0\$`,
      showAfterSpeech: true
    }
  },

  's3-math-quadratic-word-problems': {
    speech: {
      text: `Welcome to the exciting world of quadratic word problems! Think of these problems as mathematical puzzles where you are the detective. Instead of just solving equations, you first have to find them hidden in plain sight within a story. This topic is crucial because quadratics describe real-world phenomena like how a ball flies through the air or how architects design space. The main challenge is translating complex sentences into the standard form A x squared plus B x plus C equals zero. Let's focus on setting up that equation correctly.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-word-problems.mp3'
    },
    display: {
      content: `# Introduction to Quadratic Word Problems

Quadratic word problems are mathematical scenarios that describe a relationship between variables where one variable is proportional to the square of another. These problems require you to translate verbal descriptions into the standard quadratic equation form: \$Ax^2 + Bx + C = 0\$.

Why does this matter? Quadratics are the backbone of many real-world applications. They model the path of projectiles (like rockets or thrown balls), help engineers optimize the area of structures, and are used in finance to calculate maximum profit or minimum cost. Mastering the translation process is the key to unlocking these powerful applications.

Our core focus in this section is **Setting Up Equations from Words**. This involves two critical steps: first, defining your unknown variables (usually \$x\$), and second, using the constraints given in the problem (like area, perimeter, or time) to build the complete quadratic equation. Once the equation is set up correctly, solving it becomes straightforward.

--- 

### First Problem: Setting Up Equations from Words

The length of a rectangular garden is 5 meters greater than its width. If the area of the garden is 36 square meters, write the quadratic equation that models this situation in the form \$Ax^2 + Bx + C = 0\$.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "wordProblemDiagram",
          "parameters": {
                "problemType": "area",
                "labels": {
                      "width": "x",
                      "length": "x + 5",
                      "area": "36 m²"
                },
                "showEquation": false
          },
          "caption": "A diagram illustrating the rectangular garden with width x and length x + 5, and a total area of 36 m²."
    }
  },

  's3-math-quadratic-graph-features': {
    speech: {
      text: `Hey there, ready to dive into the world of parabolas? Think of a basketball shot or a water fountain arc. These are the shapes we are studying! We will learn how to read the quadratic equation to immediately know the shape, direction, and key points of the graph, allowing us to sketch accurate pictures of these real-world trajectories.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-graph-features.mp3'
    },
    display: {
      content: `# Introduction to Graph Features & Sketching

Quadratic functions, represented by the equation \$y = ax² + bx + c\$, produce U-shaped graphs called **parabolas**. These shapes are fundamental in physics, engineering, and architecture, describing projectile motion, satellite dishes, and bridge structures.

Our first step in graphing is understanding how the coefficient \$a\$ dictates the overall appearance. If a > 0, the parabola opens upward (like a smile), meaning it has a minimum value. If a < 0, it opens downward (like a frown), indicating a maximum value. The magnitude of \$a\$ controls the width—a larger absolute value means a narrower parabola.

Mastering these basic features—shape, direction, vertex, and intercepts—is essential for creating a complete, labeled sketch of any quadratic function.

***

### First Problem: Parabola Shape and Direction

Consider the quadratic function \$y = -3x² + 5x - 1\$.

1.  What is the shape of the graph (parabola)?
2.  Does the parabola open upward or downward?
3.  Does the function have a maximum or a minimum value?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "parabolaGraph",
          "parameters": {
                "a": -3,
                "b": 5,
                "c": -1,
                "showVertex": true,
                "showRoots": false,
                "showAxisOfSymmetry": true
          },
          "caption": "Visualizing the parabola y = -3x² + 5x - 1 to determine its direction and maximum point."
    }
  },

  's3-math-quadratic-graph-completed-square': {
    speech: {
      text: `Welcome! Today we are looking at the most informative way to write a quadratic equation: vertex form. Think of the standard form as a cryptic code, and the vertex form as a perfectly clear map. Once the equation is in the form y equals a times x minus h squared plus k, the graph's most important feature, the vertex, is instantly revealed, making graphing incredibly straightforward.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-graph-completed-square.mp3'
    },
    display: {
      content: `# Introduction to Graphing from Vertex Form

Graphing a quadratic function is easiest when the equation is in **vertex form**: \$y = a(x - h)² + k\$. This form is powerful because it allows us to read the vertex \$(h, k)\$ directly, without any calculation. Furthermore, this form clearly shows the transformations applied to the basic parent function \$y = x²\$.

\$h\$ dictates the horizontal shift (right if h > 0, left if h < 0), and \$k\$ dictates the vertical shift (up if k > 0, down if k < 0). The coefficient \$a\$ still determines the direction and vertical stretch/compression. By identifying \$(h, k)\$, we establish the turning point and can quickly sketch the parabola.

Let's start by practicing how to extract the vertex coordinates from this efficient form.

***

### First Problem: Reading Vertex from Vertex Form

Identify the coordinates of the vertex for the following quadratic function:

\$y = 2(x + 4)² - 7\$`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "vertexFormTransform",
          "parameters": {
                "a": 2,
                "h": -4,
                "k": -7,
                "showTransformations": true,
                "showBothForms": false
          },
          "caption": "The Vertex Form $y = 2(x + 4)² - 7$ showing the vertex at (-4, -7) and the vertical stretch."
    }
  },

  's3-math-quadratic-graph-factorised': {
    speech: {
      text: `Hi there! If you love shortcuts, you'll love factorised form. When a quadratic is factored, it gives away its x-intercepts—the places where the graph crosses the x-axis—for free! This makes finding the axis of symmetry and the vertex extremely fast, since the axis of symmetry is always exactly halfway between the intercepts.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-graph-factorised.mp3'
    },
    display: {
      content: `# Introduction to Graphing from Factorised Form

When a quadratic function is written in **factorised form**, \$y = a(x - r_1)(x - r_2)\$, the values \$r_1\$ and \$r_2\$ are the **x-intercepts** (also called the roots or zeros). This is because setting \$y = 0\$ immediately yields \$x = r_1\$ or \$x = r_2\$.

Having the intercepts makes graphing highly efficient. The **axis of symmetry** is the vertical line exactly in the middle, calculated by averaging the roots: \$x = \\frac{r_1 + r_2}{2}\$. Once the axis of symmetry is known, substituting that \$x\$-value back into the equation gives the \$y\$-coordinate of the vertex.

Let's start by using the factorised form to identify the intercepts.

***

### First Problem: Reading x-intercepts

Identify the x-intercepts (roots) of the function given in factorised form:

\$y = -0.5(x - 6)(x + 2)\$`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "parabolaGraph",
          "parameters": {
                "a": -0.5,
                "b": 2,
                "c": 6,
                "showVertex": true,
                "showRoots": true,
                "showAxisOfSymmetry": true,
                "xMin": -5,
                "xMax": 9
          },
          "caption": "The graph of $y = -0.5(x - 6)(x + 2)$ visually confirming the x-intercepts at 6 and -2."
    }
  },

  's3-math-quadratic-graph-polynomial': {
    speech: {
      text: `Greetings. We are now focusing on the standard polynomial form, y equals ax squared plus bx plus c. While this form doesn't immediately reveal the vertex or the roots, it is the most common starting point. Our goal is to develop a systematic strategy to extract every necessary feature—vertex, intercepts, and direction—efficiently using specific formulas derived from this structure.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-graph-polynomial.mp3'
    },
    display: {
      content: `# Introduction to Graphing from Standard Form

The **Standard Form** of a quadratic function, \$y = ax² + bx + c\$, is the general way we encounter these equations. Although less descriptive than vertex or factorised form, it provides two key features immediately: the direction (from \$a\$) and the **y-intercept** (which is always \$c\$, since setting \$x=0\$ yields \$y=c\$).

To find the crucial vertex, we rely on the derived formula for the axis of symmetry: \$x = \\frac{-b}{2a}\$. This calculation gives us the \$x\$-coordinate of the vertex. We then substitute this value back into the original equation to find the \$y\$-coordinate. This systematic approach ensures we can accurately plot the graph regardless of the initial form.

Let's begin by finding the axis of symmetry, the backbone of the parabola.

***

### First Problem: Basic Features from Standard Form

For the function \$y = x² + 6x + 5\$, use the formula \$x = \\frac{-b}{2a}\$ to calculate the equation of the axis of symmetry.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "parabolaGraph",
          "parameters": {
                "a": 1,
                "b": 6,
                "c": 5,
                "showVertex": true,
                "showRoots": true,
                "showAxisOfSymmetry": true,
                "highlightAxisOfSymmetry": true
          },
          "caption": "Visualizing $y = x² + 6x + 5$ and its axis of symmetry, which passes through the vertex."
    }
  },

  's3-math-quadratic-graph-finding-function': {
    speech: {
      text: `Have you ever wanted to reverse engineer a formula? That's what we are doing today! Instead of starting with an equation and drawing the graph, we are given key points on the graph—like the vertex or the intercepts—and must work backwards to construct the unique quadratic equation that fits those constraints. This requires choosing the right starting form based on the information provided.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-graph-finding-function.mp3'
    },
    display: {
      content: `# Introduction to Finding Quadratic Functions

In this section, we transition from analyzing given equations to **constructing** them. Finding the equation of a quadratic function requires identifying three independent pieces of information, typically provided as key points on the graph.

If the **vertex \$(h, k)\$** is known, we should start with the Vertex Form: \$y = a(x - h)² + k\$. If the **x-intercepts \$(r_1, 0)\$ and \$(r_2, 0)\$** are known, we should start with the Factorised Form: \$y = a(x - r_1)(x - r_2)\$. In both cases, a third point \$(x, y)\$ is required to solve for the vertical stretch factor, \$a\$.

Let's start with the most common scenario: using the vertex and one additional point.

***

### First Problem: From Vertex and a Point

A parabola has a vertex at \$(3, 1)\$ and passes through the point \$(1, 9)\$.

Substitute the vertex coordinates into the vertex form \$y = a(x - h)² + k\$ and then use the point \$(1, 9)\$ to solve for the value of \$a\$.`,
      showAfterSpeech: true
    }
  },

  's3-math-quadratic-graph-problem-solving': {
    speech: {
      text: `Hello, and welcome to applying quadratic graphs to the real world! Quadratic functions are essential tools for optimization, whether you are maximizing profit, minimizing cost, or determining the highest point of a launched object. The features we have studied—the vertex, the intercepts, and the axis of symmetry—all take on important physical meaning in context.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-quadratic-graph-problem-solving.mp3'
    },
    display: {
      content: `# Introduction to Problem Solving with Graphs

Quadratic graphs are powerful models for real-world phenomena. When solving problems involving projectile motion (like throwing a ball) or area maximization, the graph features translate directly into answers to practical questions.

-   The **Vertex** represents the maximum height or the maximum profit/area.
-   The **x-intercepts** often represent the starting point, the landing point, or the break-even points.
-   The **y-intercept** usually represents the initial value or starting height.

Success in problem-solving depends on accurately interpreting what each feature means within the context of the word problem.

***

### First Problem: Interpreting Graphs in Context

The height \$H\$ (in meters) of a rocket \$t\$ seconds after launch is modeled by the function \$H(t) = -5t² + 40t + 5\$. The graph of this function is a parabola opening downward.

What physical quantity does the vertex of this parabola represent in this scenario?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "wordProblemDiagram",
          "parameters": {
                "problemType": "projectile",
                "labels": {
                      "equation": "H(t) = -5t² + 40t + 5",
                      "vertex": "Maximum Height",
                      "xIntercept": "Landing Time (t)",
                      "yIntercept": "Initial Height"
                },
                "showEquation": true
          },
          "caption": "Diagram illustrating the projectile path, where the vertex signifies the maximum height achieved."
    }
  },

  /**
   * ========================================
   * S3 MATHEMATICS - SURDS & RADICALS
   * ========================================
   */
  's3-math-surds-fundamentals': {
    speech: {
      text: `Hello and welcome to the world of Surds! Surds are the mathematical way of dealing with exact, irrational numbers. They are roots that cannot be simplified into neat whole numbers or fractions, like the square root of 2. We are starting with Surd Basics, where we will learn to identify these special numbers and distinguish them from rational roots. Let us begin by testing your foundational knowledge.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-surds-fundamentals.mp3'
    },
    display: {
      content: `# Introduction to Understanding Surds

Surds are square roots (or other roots) that result in **irrational numbers**—decimals that go on forever without repeating, such as √2 or √3. We call the symbol (√) the radical sign. Understanding surds is crucial because they allow us to express exact values in geometry and physics, avoiding messy rounding errors that occur when we approximate irrational numbers.

In this first section, we establish the basics: identifying a surd and distinguishing it from a rational root. For example, √9 is **not** a surd because it equals 3 (a rational number), but √5 **is** a surd because its value is non-terminating and non-repeating.

We will progress by learning to identify surds and then applying basic multiplication and division properties.

***

### First Problem: Understanding Surds and Radicals

Which of the following is a surd?

A) √16
B) √49
C) √5
D) √100`,
      showAfterSpeech: true
    }
  },

  's3-math-surds-simplifying': {
    speech: {
      text: `Hey there! Ready to unlock some hidden math power? Surds often come in a messy form, but we can simplify them to make calculations much easier. This process is called simplifying surds, and it involves extracting perfect square factors. Think of it like unpacking a complicated mathematical package. Let us jump straight into extracting those perfect squares.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-surds-simplifying.mp3'
    },
    display: {
      content: `# Introduction to Simplifying Surds

Simplifying a surd means extracting any **perfect square factors** from inside the radical sign. We look for the largest perfect square (4, 9, 16, 25, etc.) that divides the number under the root. The key rule that allows us to do this is the multiplication property of radicals: \$\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}\$.

For instance, to simplify √18, we recognize that 18 = 9 × 2, where 9 is a perfect square. We rewrite this as \$\\sqrt{9 \\times 2} = \\sqrt{9} \\times \\sqrt{2} = 3\\sqrt{2}\$. This simplified form is easier to work with when performing further calculations.

We will start by mastering the extraction of perfect square factors and then move on to handling complex surds using prime factorization.

***

### First Problem: Extracting Perfect Square Factors

Simplify the surd \$\\sqrt{12}\$ by extracting the largest perfect square factor.`,
      showAfterSpeech: true
    }
  },

  's3-math-surds-addition-subtraction': {
    speech: {
      text: `Greetings! Today we tackle combining surds. If you can combine like terms in algebra, you can add and subtract surds. The core idea is that you can only combine surds if they are 'like surds', meaning they have the exact same number under the radical sign. Let us start by combining some simple like surds.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-surds-addition-subtraction.mp3'
    },
    display: {
      content: `# Introduction to Adding and Subtracting Surds

Adding and subtracting surds follows the same fundamental principle as combining like terms in algebra. Just as \$3x + 2x = 5x\$, we can combine \$3\\sqrt{5}\$ and \$2\\sqrt{5}\$ to get \$5\\sqrt{5}\$. The surd term (\$\\sqrt{5}\$) acts like the variable (\$x\$).

Crucially, you must have **like surds** (the number under the radical must be identical) to perform addition or subtraction. You simply add or subtract the coefficients (the numbers outside the radical) while keeping the surd term unchanged.

In this module, we first practice combining like surds, and then we move on to more complex problems where you must simplify the surds first to *create* like surds before combining them.

***

### First Problem: Adding and Subtracting Like Surds

Calculate the value of the following expression:

\$7\\sqrt{3} + 2\\sqrt{3} - 4\\sqrt{3}\$`,
      showAfterSpeech: true
    }
  },

  's3-math-surds-multiplication-division': {
    speech: {
      text: `Welcome back! Let us explore the power of surd algebra through multiplication and division. Unlike addition, these operations are always possible, regardless of the number under the radical. The rules are straightforward and essential for expanding brackets and solving complex geometry problems. We will start with the core multiplication rule.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-surds-multiplication-division.mp3'
    },
    display: {
      content: `# Introduction to Multiplying and Dividing Surds

Multiplication and division of surds rely on two simple, powerful rules derived from the properties of exponents:

1. **Multiplication:** \$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{a \\times b}\$
2. **Division:** \$\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}\$

When multiplying expressions that include coefficients (numbers outside the radical), remember to multiply the outside numbers together and the inside numbers together. For example, \$(2\\sqrt{3}) \\times (4\\sqrt{5}) = (2 \\times 4) \\sqrt{3 \\times 5} = 8\\sqrt{15}\$. Always simplify the resulting surd if possible.

We will cover basic multiplication and division, followed by expanding brackets using techniques like FOIL and the distributive property.

***

### First Problem: Multiplying Surds

Multiply the following surds and simplify the result:

\$3\\sqrt{2} \\times 5\\sqrt{3}\$`,
      showAfterSpeech: true
    }
  },

  's3-math-surds-rationalizing': {
    speech: {
      text: `Hi there! Ever wonder why mathematicians hate surds in the denominator? Rationalizing the denominator is a key skill that eliminates surds from the bottom of a fraction, ensuring consistency and precision in our answers. We achieve this by multiplying the fraction by a clever form of the number one. Let us master rationalizing simple monomial denominators first.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-surds-rationalizing.mp3'
    },
    display: {
      content: `# Introduction to Rationalizing Denominators

Rationalizing the denominator is the process of converting a fraction with an irrational denominator (a surd) into an equivalent fraction with a rational denominator (a whole number or integer). While \$1/\\sqrt{2}\$ is mathematically correct, it is considered unsimplified.

To rationalize a simple **monomial denominator** (like \$\\sqrt{b}\$), we multiply the entire fraction by \$\\frac{\\sqrt{b}}{\\sqrt{b}}\$. Since this fraction equals 1, we haven't changed the value of the original expression. The magic happens in the denominator: \$\\sqrt{b} \\times \\sqrt{b} = b\$, which is now rational.

We begin with monomial denominators and then progress to the more complex technique of using conjugates to rationalize binomial denominators.

***

### First Problem: Rationalizing Monomial Denominators

Rationalize the denominator of the fraction:

\$\\frac{4}{\\sqrt{3}}\$`,
      showAfterSpeech: true
    }
  },

  's3-math-surds-mixed-operations': {
    speech: {
      text: `Fantastic job reaching the final stage of Surds mastery! Mixed operations is where we truly test your command of all the rules. You will need to apply simplification, multiplication, division, and rationalization, all while strictly following the order of operations, or PEMDAS. This is the mathematical toolkit you need for solving complex real-world problems. Let us tackle our first combined operation problem.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-surds-mixed-operations.mp3'
    },
    display: {
      content: `# Introduction to Mixed Operations with Surds

Solving problems involving mixed surd operations requires methodical application of every skill you have learned: simplifying, combining, multiplying, dividing, and rationalizing. The key to success is adhering strictly to the order of operations (PEMDAS/BODMAS).

**Key Strategy:** Always handle multiplication, division, and simplification *before* attempting addition or subtraction. If a fraction needs rationalization, do that first. Often, simplification is the first step that allows unlike surds to become like surds, enabling final combination.

These multi-step problems are essential for advanced geometry and physics applications where exact answers are required. We will start with combined operations and then move into practical problem-solving scenarios.

***

### First Problem: Combined Surd Operations

Simplify the expression fully:

\$3\\sqrt{8} + 5\\sqrt{2} - \\frac{10}{\\sqrt{2}}\$`,
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
      text: `Welcome to the absolute foundation of coordinate geometry! Think of the Cartesian Plane as the ultimate mathematical map. Just like a map uses latitude and longitude, we use X and Y coordinates to pinpoint any location precisely. This module will teach you how to read this map, understand the four quadrants, and use coordinates to calculate things like distance and midpoints. Mastering plotting points is the critical first step, so let's start by locating a specific spot on our grid.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-coord-geom-fundamentals.mp3'
    },
    display: {
      content: `# Introduction to Coordinate Plane Fundamentals

Coordinate geometry begins with the **Cartesian Plane**, a two-dimensional system defined by a horizontal x-axis and a vertical y-axis. These axes intersect at the origin (0, 0) and divide the plane into four regions called **quadrants**.

Every point on this plane is uniquely identified by an ordered pair of coordinates, (x, y). Understanding how to plot these points and interpret their location is the foundational skill required to apply coordinate geometry tools, such as the Distance Formula and the Midpoint Formula, which you will master in this module.

Let's begin by ensuring we can accurately locate points.

**Problem 1:** Plot the point P(4, -3) on the coordinate plane. In which quadrant does the point P lie?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "cartesianPlane",
          "parameters": {
                "xMin": -5,
                "xMax": 5,
                "yMin": -5,
                "yMax": 5,
                "showGrid": true,
                "title": "The Cartesian Plane",
                "caption": "The standard x-y coordinate plane used for plotting points."
          }
    }
  },

  's3-math-coord-geom-gradient': {
    speech: {
      text: `Hey there! Get ready to tackle one of the most practical concepts in math: Gradient. Gradient, often represented by the letter m, is simply the measure of a line's steepness or slope. Whether you are designing a road, calculating the pitch of a roof, or analyzing rates of change in physics, gradient is essential. We calculate it using the 'rise over run' ratio, which tells us how much the line changes vertically for every unit it changes horizontally. This concept is also the key to understanding how lines relate to each other—specifically, if they are parallel or perpendicular.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-coord-geom-gradient.mp3'
    },
    display: {
      content: `# Introduction to Gradient and Line Relationships

**Gradient (m)** measures the steepness and direction of a line segment. It is calculated using the ratio of the vertical change (rise) to the horizontal change (run) between any two points, \$(x_1, y_1)\$ and \$(x_2, y_2)\$, on the line.

The formula for gradient is:
\$m = \\frac{y_2 - y_1}{x_2 - x_1}\$

Mastering this calculation allows us to determine if lines are parallel (same gradient) or perpendicular (gradients are negative reciprocals). Let's start by calculating the steepness of a segment.

**Problem 1:** Calculate the gradient (m) of the line segment connecting point A(2, 7) and point B(8, 4).`,
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
                            "label": "A"
                      },
                      {
                            "x": 8,
                            "y": 4,
                            "label": "B"
                      }
                ],
                "lines": [
                      {
                            "type": "linear",
                            "slope": -0.5,
                            "yIntercept": 8,
                            "color": "#3b82f6"
                      }
                ],
                "caption": "Visualizing the line segment between A(2, 7) and B(8, 4) to find the gradient."
          }
    }
  },

  's3-math-coord-geom-line-equations': {
    speech: {
      text: `Hello! Today we are moving from calculating the properties of lines to writing their algebraic DNA. An equation of a line is a powerful tool because it allows us to describe every single point on that line using a simple algebraic rule. We will focus on three key formats: Point-Gradient form, Gradient-Intercept form, and General form. The Point-Gradient form, y minus y one equals m times x minus x one, is the most versatile starting block, allowing you to build the equation of any straight line provided you know its slope and just one point it passes through.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-coord-geom-line-equations.mp3'
    },
    display: {
      content: `# Introduction to Equations of Lines

While coordinates define points and gradient defines steepness, the **equation of a line** connects these elements into a single algebraic statement. This statement allows us to predict the position of any point on that line.

We start with the **Point-Gradient Form**:
\$y - y_1 = m(x - x_1)\$

Where \$m\$ is the gradient and \$(x_1, y_1)\$ is a known point on the line. This foundational form can then be rearranged into the more familiar Gradient-Intercept Form (\$y = mx + c\$) or the General Form (\$ax + by = d\$).

Let's practice using the Point-Gradient Form directly.

**Problem 1:** A line passes through the point (5, 2) and has a gradient (m) of 3. Write the equation of this line in Point-Gradient Form.`,
      showAfterSpeech: true
    }
  },

  's3-math-coord-geom-graphing': {
    speech: {
      text: `Greetings! Have you ever wanted to translate abstract algebra into clear, visual geometry? That is exactly what graphing straight lines allows us to do. Graphing is a crucial skill for interpreting relationships and solving systems of equations. We will focus first on the Gradient-Intercept form, y equals m x plus c, because it gives us two immediate clues for plotting: the y-intercept, c, and the gradient, m. These clues make graphing quick and accurate.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-coord-geom-graphing.mp3'
    },
    display: {
      content: `# Introduction to Graphing Straight Lines

Graphing is the process of visually representing an algebraic relationship on the Cartesian plane. The most straightforward method uses the **Gradient-Intercept Form**:
\$y = mx + c\$

Here, \$c\$ is the **y-intercept** (where the line crosses the y-axis), giving us our starting point. The gradient \$m\$ (rise over run) then tells us the direction and steepness, providing the steps needed to find subsequent points and draw the line.

We will also learn how to graph lines given in General Form by finding the x and y intercepts.

**Problem 1:** Consider the equation \$y = -2x + 5\$. Identify the y-intercept (\$c\$) and the gradient (\$m\$).`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "cartesianPlane",
          "parameters": {
                "xMin": -5,
                "xMax": 5,
                "yMin": -5,
                "yMax": 10,
                "lines": [
                      {
                            "type": "linear",
                            "slope": -2,
                            "yIntercept": 5,
                            "equation": "y = -2x + 5"
                      }
                ],
                "title": "Graphing y = -2x + 5",
                "caption": "The graph of the line showing the y-intercept at (0, 5) and a negative gradient."
          }
    }
  },

  's3-math-coord-geom-perpendicular-bisectors': {
    speech: {
      text: `Welcome to a topic that demands precision: Perpendicular Bisectors. This is where you bring together everything you have learned about midpoints and gradients. A perpendicular bisector is a line with two defining properties: it cuts a line segment exactly in half, and it intersects that segment at a perfect ninety degree angle. Finding the equation of this unique line requires a multi-step, advanced process, combining the midpoint formula and the negative reciprocal rule for slopes.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-coord-geom-perpendicular-bisectors.mp3'
    },
    display: {
      content: `# Introduction to Perpendicular Bisectors

A **perpendicular bisector** is a line that is simultaneously perpendicular to a given line segment and passes through its midpoint. This line is geometrically significant because every point on the bisector is equidistant from the endpoints of the segment it bisects.

To find the equation of a perpendicular bisector, we must first find the midpoint \$(x_m, y_m)\$ and then determine the perpendicular gradient (\$m_{\\perp}\$). 

We start with the first step: finding the midpoint.

**Problem 1:** Calculate the coordinates of the midpoint (M) of the line segment AB, where A = (1, 10) and B = (7, 4).`,
      showAfterSpeech: true
    }
  },

  's3-math-coord-geom-applications': {
    speech: {
      text: `Are you ready to use coordinate geometry as a tool for rigorous proof? This module is all about application. Instead of just calculating distances or slopes, you will use these formulas to prove geometric properties. Is that triangle truly right-angled? Is that quadrilateral a perfect square? By applying the distance formula, gradient formula, and midpoint formula systematically, you can provide mathematical certainty to these geometric questions. We begin by proving properties of triangles.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-coord-geom-applications.mp3'
    },
    display: {
      content: `# Introduction to Coordinate Geometry Applications

Coordinate geometry provides an algebraic framework for solving geometric problems. By assigning coordinates to vertices, we can use formulas to prove properties of shapes, such as triangles and quadrilaterals, rather than relying on visual inspection.

For example, to prove a triangle is isosceles, we must show that at least two sides have equal length using the Distance Formula. To prove it is right-angled, we must show two sides have perpendicular gradients.

Let's start by calculating the length of one side of a triangle.

**Problem 1:** A triangle has vertices at P(1, 1), Q(5, 1), and R(3, 4). Calculate the length of the side PQ.`,
      showAfterSpeech: true
    }
  },

  's3-math-coord-geom-3d': {
    speech: {
      text: `Wow, we are expanding our mathematical universe today! We are leaving the flat, two-dimensional world of the X Y plane and jumping into three dimensions by adding the Z axis, which represents depth or height. This allows us to accurately model real objects like buildings, rooms, and boxes, often called rectangular prisms or cuboids. While the space is bigger, the rules are familiar: coordinates now have three values, X, Y, and Z, and we simply adapt our distance and midpoint formulas to include this third dimension.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-coord-geom-3d.mp3'
    },
    display: {
      content: `# Introduction to 3-Dimensional Coordinate Geometry

Three-dimensional coordinate geometry extends the Cartesian system by introducing a third axis, the **z-axis**, perpendicular to both the x and y axes. Points are now represented by ordered triples \$(x, y, z)\$.

This system is essential for modeling solid shapes like rectangular prisms (cuboids). The vertices of a cuboid placed at the origin can be easily identified by its length (y-axis), width (x-axis), and height (z-axis).

Let's start by identifying the coordinates of key vertices on a cuboid.

**Problem 1:** A rectangular prism has its base on the xy-plane with one vertex at the origin O(0, 0, 0). If the width is 4 units (along x), the length is 3 units (along y), and the height is 5 units (along z), what are the coordinates of the vertex P diagonally opposite the origin?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "coordinate3DPlane",
          "parameters": {
                "length": "3",
                "width": "4",
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
                ],
                "caption": "A rectangular prism with dimensions 4 (width), 3 (length), and 5 (height) anchored at the origin."
          }
    }
  },

  /**
   * ========================================
   * S3 MATHEMATICS - CIRCLE GEOMETRY
   * ========================================
   */
  's3-math-circle-geometry-definitions': {
    speech: {
      text: `Welcome to the exciting world of Circle Geometry! Before we dive into complex theorems, we must first learn the language. Mastering the definitions of the basic parts of a circle is the crucial first step to success in this topic.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-circle-geometry-definitions.mp3'
    },
    display: {
      content: `# Introduction to Circle Geometry Definitions

Circles are fundamental shapes, appearing everywhere from architecture to engineering. To analyze circle geometry effectively, we must first master the terminology. We need precise definitions for every component, ensuring we can communicate clearly about the geometry we observe.

In this section, we will define the core building blocks: the **Centre (O)**, the distance from the centre to the edge (**radius, r**), and the distance across the circle through the centre (**diameter, d = 2r**). We will also learn about segments of the circle's boundary (**arcs** and **circumference**) and internal elements like **chords** (lines connecting two points on the circle) and the regions they define (**segments**).

Understanding these terms is non-negotiable. Let's start by identifying the basic parts in a diagram.

### First Problem: Identifying Parts of a Circle

In the circle provided, the centre is O, and the distance from O to point A on the circumference is 7 cm.

1. What is the length of the radius?
2. What is the length of the diameter?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "circleBasic",
          "parameters": {
                "radius": "7 cm",
                "centreLabel": "O",
                "showCentre": true,
                "showRadius": true,
                "showDiameter": false,
                "highlightElement": "radius"
          },
          "caption": "A circle with centre O and radius OA = 7 cm."
    }
  },

  's3-math-circle-geometry-angle-semicircle': {
    speech: {
      text: `Hi there! Are you ready to master one of the simplest yet most powerful rules in geometry? The Angle in a Semi-circle theorem is elegant and essential for solving problems involving right-angled triangles inside circles.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-circle-geometry-angle-semicircle.mp3'
    },
    display: {
      content: `# The Angle in a Semi-circle Theorem

The Angle in a Semi-circle Theorem (also known as Thales' Theorem) is a geometric gem. It states that if you construct a triangle inside a circle such that one side is the circle's diameter, the angle opposite the diameter (the angle on the circumference) will **always be 90°**.

This theorem is incredibly useful because it instantly creates a right-angled triangle, allowing us to use tools like Pythagoras' Theorem and trigonometry to find unknown lengths and angles. We will explore the proof using isosceles triangles and then apply this knowledge to solve various problems.

Let's apply this instant right-angle rule.

### First Problem: Finding the Semi-circle Angle

In the circle with centre O, AB is the diameter. C is a point on the circumference. Find the measure of angle ACB.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "circleSemicircle",
          "parameters": {
                "diameter": "AB",
                "pointOnCircle": "C",
                "showAngle": true,
                "showRightAngleMarker": false,
                "highlightDiameter": true
          },
          "caption": "Triangle ABC is inscribed in a circle where AB is the diameter."
    }
  },

  's3-math-circle-geometry-chords': {
    speech: {
      text: `Hello! Did you know that circles and their internal line segments, called chords, were crucial for ancient navigators and builders? Today, we unlock the geometric rules governing these chords, focusing on symmetry and length relationships.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-circle-geometry-chords.mp3'
    },
    display: {
      content: `# Theorems Related to Chords of a Circle

A **chord** is simply a straight line segment whose endpoints both lie on the circle's circumference. Chords create fascinating geometric relationships, especially when related to the circle's centre.

We will focus on two key theorems. Firstly, we learn that **equal chords** subtend equal angles at the centre. Secondly, and perhaps more importantly for calculations, we discover the **Perpendicular Bisector Theorem**: A line drawn from the centre of the circle perpendicular (at 90°) to a chord will always bisect (cut in half) that chord. This rule is often combined with Pythagoras' theorem to calculate unknown lengths.

Let's start by applying the perpendicular bisector rule.

### First Problem: Distance from Centre to Chord

A circle has a radius of 5 cm. A chord AB is 8 cm long. If a perpendicular line segment is drawn from the centre O to the chord at point M (the midpoint of AB), what is the length of OM (the distance from the centre to the chord)?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "circleWithChords",
          "parameters": {
                "chord1Points": "AB",
                "showPerpendicular": true,
                "showMidpoint": true,
                "equalChords": false,
                "highlightChord": "1"
          },
          "caption": "Chord AB with perpendicular OM drawn from the centre O."
    }
  },

  's3-math-circle-geometry-radius-tangent': {
    speech: {
      text: `Greetings. We are about to explore the elegant relationship between a circle's radius and a tangent line. This is a fundamental concept that defines how a straight line can interact with a curved boundary at a single point.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-circle-geometry-radius-tangent.mp3'
    },
    display: {
      content: `# The Radius-Tangent Theorem

A **tangent** is a straight line that touches the circle at exactly one single point, known as the point of tangency. This relationship is incredibly precise and leads to a crucial geometric rule.

The **Radius-Tangent Perpendicular Theorem** states that the radius drawn to the point of tangency is always perpendicular to the tangent line. In other words, the radius and the tangent form a **90° angle** at the point where they meet. This perpendicularity is the cornerstone for solving problems involving tangents, as it immediately introduces a right angle, which can be used in conjunction with other geometric rules.

Let's confirm this foundational angle.

### First Problem: The Angle of Contact

A circle has its centre at O. A line L is tangent to the circle at point T. If the radius OT is drawn to the point of tangency, what is the measure of the angle between the radius OT and the tangent line L?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "circleTangent",
          "parameters": {
                "tangentPoint": "T",
                "showRadius": true,
                "showRightAngle": true,
                "tangentLabel": "L",
                "highlightRadius": false,
                "highlightTangent": true
          },
          "caption": "Radius OT meets the tangent line L at point T."
    }
  },

  's3-math-circle-geometry-tangents-external': {
    speech: {
      text: `Hey, let's investigate what happens when we draw two tangents from the same point outside a circle. Does symmetry dictate the outcome? Absolutely! This theorem is a great tool for calculating unknown lengths.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-circle-geometry-tangents-external.mp3'
    },
    display: {
      content: `# Tangents from an External Point

When you stand outside a circle and draw two lines that just touch the circle (tangents), you create a perfectly symmetrical configuration. The **Equal Tangents Theorem** formalizes this symmetry: the lengths of the two tangent segments, measured from the external point to the points of contact on the circle, are always equal.

If P is the external point and T₁ and T₂ are the points of tangency, then PT₁ = PT₂. This theorem is proven using the Radius-Tangent theorem (creating two right angles) and congruent triangles (RHS rule). This equality is essential for calculating unknown lengths and solving perimeter problems.

Let's start with a direct application of the equality rule.

### First Problem: Calculating Tangent Lengths

From an external point P, tangents PA and PB are drawn to a circle. If the length of PA is 15 cm, what is the length of PB?`,
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
          "caption": "Tangents PA and PB drawn from external point P."
    }
  },

  's3-math-circle-geometry-angle-centre': {
    speech: {
      text: `Fantastic! Get ready for the cornerstone of angle theorems in circle geometry. The relationship between the angle at the center and the angle at the circumference is the key to unlocking almost every complex angle calculation.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-circle-geometry-angle-centre.mp3'
    },
    display: {
      content: `# The Angle at the Centre Theorem

This theorem establishes a crucial 2:1 ratio within the circle. The **Angle at the Centre Theorem** states that the angle subtended by an arc at the centre of the circle (∠AOB) is exactly double the angle subtended by the same arc at any point on the remaining part of the circumference (∠ACB).

If ∠ACB = θ, then ∠AOB = 2θ. This relationship holds true regardless of where point C is located on the major arc. We will explore the proof, which relies on isosceles triangles and the exterior angle theorem, and then use this powerful rule to find unknown angles.

Let's test this 2:1 ratio immediately.

### First Problem: Applying the 2:1 Ratio

In a circle with centre O, the angle subtended by the minor arc AB at the centre is 110°. If C is a point on the major arc, what is the measure of the angle subtended by the arc AB at C (∠ACB)?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "circleAngleCentre",
          "parameters": {
                "arcPoints": "AB",
                "circumferencePoint1": "C",
                "arcAngleDegrees": 110,
                "showAngleCentre": true,
                "showAngleCircumference": true,
                "angleCentreLabel": "110°",
                "angleCircumferenceLabel": "$x$",
                "highlightArc": true
          },
          "caption": "Angle at centre AOB = 110°. Find angle ACB."
    }
  },

  's3-math-circle-geometry-angle-same-arc': {
    speech: {
      text: `It's great to have you back! We are now connecting our knowledge of the angle at the center to discover another fundamental angle relationship: Angles Subtended by the Same Arc. This principle simplifies complex diagrams dramatically.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-circle-geometry-angle-same-arc.mp3'
    },
    display: {
      content: `# Angles Subtended by the Same Arc (Angles in the Same Segment)

Building directly upon the Angle at the Centre Theorem, we arrive at the **Angles in the Same Segment Theorem**. This theorem states that angles subtended by the same arc (or chord) at the circumference are equal. Imagine a chord AB; if you draw multiple triangles using AB as the base, all the angles opposite AB on the circumference will be identical.

If points C and D both lie on the major arc defined by chord AB, then ∠ACB = ∠ADB. This equality is vital for solving problems where multiple points lie on the circumference. We will also use this concept to introduce the properties of **Cyclic Quadrilaterals** later in the lesson.

Let's begin by applying the equality rule.

### First Problem: Finding Equal Angles

In the diagram, chord PQ subtends angles at points R and S on the circumference. If ∠PRQ = 35°, and R and S are in the same segment, find the measure of angle PSQ.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "circleSameArc",
          "parameters": {
                "arcPoints": "PQ",
                "circumferencePoint1": "R",
                "circumferencePoint2": "S",
                "arcAngleDegrees": 70,
                "oppositeSegments": false,
                "showAngle1": true,
                "showAngle2": true,
                "angleLabel": "35°",
                "angleLabel2": "$x$",
                "highlightSegment": false
          },
          "caption": "Angles PRQ and PSQ are subtended by the same arc PQ."
    }
  },
  /**
   * ========================================
   * S3 MATHEMATICS - Exponential and Logarithm
   * ========================================
   */
  's3-math-exponential-logarithms-exponential-functions': {
    speech: {
      text: `Hey there! Get ready to unlock the power of exponents. We are moving beyond simple polynomials and diving into functions where the variable itself is the exponent. This is where math starts modeling truly rapid change, like population booms or viral spread.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponential-logarithms-exponential-functions.mp3'
    },
    display: {
      content: `# Introduction to Exponential Functions

Exponential functions are fundamentally different from linear or quadratic functions because the independent variable (x) appears in the exponent, rather than the base. They take the general form \$f(x) = b^x\$ or \$f(x) = a \\times b^x\$, where \$b\$ is the base and must be a positive number not equal to 1.

Why do these matter? Exponential functions are essential for modeling any phenomenon characterized by rapid growth or decay, such as compound interest, population dynamics, or radioactive half-life. Understanding their definition and how to evaluate them is the critical first step in analyzing these real-world processes.

In this section, we will focus on the foundational skill of evaluation. This means substituting a value for the variable and calculating the result.

***

## First Problem: Understanding Exponential Functions

Evaluate the exponential expression \$2^5\$.`,
      showAfterSpeech: true
    }
  },

  's3-math-exponential-logarithms-exponential-graphs': {
    speech: {
      text: `Welcome! Today we are learning how to see exponential functions in action. These functions do not look like straight lines or parabolas; they have a unique, curving shape that shows rapid change. By plotting points, we can visualize exactly how quickly things grow or decay.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponential-logarithms-exponential-graphs.mp3'
    },
    display: {
      content: `# Creating Graphs from Tables of Values

Graphing an exponential function, such as \$f(x) = b^x\$, gives us a clear visual understanding of its behavior. Unlike linear functions which have constant slope, exponential functions have a rate of change that accelerates dramatically (growth) or slows down rapidly (decay).

The most basic way to understand this unique curve is by creating a table of values. We choose several x-values (both positive and negative), calculate the corresponding y-values, and plot the resulting coordinate pairs. This process reveals key features of the graph, including the **y-intercept** (where x=0) and the **horizontal asymptote** (the line the graph approaches but never crosses).

Let’s start by building the foundation for graphing: completing a table of values.

***

## First Problem: Creating Graphs from Tables of Values

Complete the following table of values for the function $f(x) = 3^x$.

| $x$ | $f(x) = 3^x$ | $y$ |
|:---:|:------------:|:---:|
| $-1$ | $3^{-1}$ | $?$ |
| $0$ | $3^0$ | $?$ |
| $1$ | $3^1$ | $?$ |`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "exponentialGraph",
          "parameters": {
                "base": 3,
                "coefficient": 1,
                "verticalShift": 0,
                "showAsymptote": true,
                "showYIntercept": true,
                "xRange": [
                      -3,
                      3
                ],
                "yRange": [
                      -1,
                      10
                ],
                "showGrid": true,
                "caption": "The graph of f(x) = 3ˣ demonstrates rapid exponential growth."
          },
          "caption": "The graph of f(x) = 3ˣ demonstrates rapid exponential growth."
    }
  },

  's3-math-exponential-logarithms-exponential-equations': {
    speech: {
      text: `Greetings! Solving exponential equations might sound intimidating, but often we can use a clever trick: rewriting both sides with the same base. When the bases match, we can simply equate the exponents, turning a complex exponential problem into a straightforward linear one.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponential-logarithms-exponential-equations.mp3'
    },
    display: {
      content: `# Solving Simple Same-Base Equations

An exponential equation is one where the variable appears in the exponent. To solve these equations without using logarithms (yet!), we rely on a fundamental property: **If \$b^x = b^y\$ and b > 0 and \$b ≠ 1\$, then \$x = y\$.**

This means our primary goal is to rewrite the numbers on both sides of the equation using a common base. Once the bases are identical, we can set the exponents equal to each other and solve for the variable. This technique is the cornerstone of solving all exponential equations.

Let's begin with a simple equation where the common base is easily recognizable.

***

## First Problem: Solving Simple Same-Base Equations

Solve the following exponential equation for \$x\$:

\$2^x = 32\$`,
      showAfterSpeech: true
    }
  },

  's3-math-exponential-logarithms-exponential-growth': {
    speech: {
      text: `Hello and welcome to Exponential Growth! This is arguably the most powerful concept in finance and population science. It is the math behind why savings accounts grow rapidly and why populations can explode. Understanding this formula is key to making smart financial decisions.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponential-logarithms-exponential-growth.mp3'
    },
    display: {
      content: `# Understanding Exponential Growth

Exponential growth occurs when a quantity increases by a fixed percentage over regular time intervals. This type of growth is characterized by an accelerating rate—the larger the quantity gets, the faster it grows.

The standard formula for exponential growth is \$f(x) = p \\times a^x\$, where:
*   \$p\$ is the initial amount (principal).
*   \$a\$ is the growth factor, calculated as \$a = 1 + r\$ (where \$r\$ is the growth rate expressed as a decimal).
*   \$x\$ is the time period.

For a function to represent growth, the growth factor \$a\$ must be greater than 1 (a > 1). Our first task is learning to identify the components of the growth formula.

***

## First Problem: Understanding Exponential Growth

A city's population, \$P(t)\$, after \$t\$ years is modeled by the function \$P(t) = 500(1.08)^t\$.

What is the annual growth factor in this model?`,
      showAfterSpeech: true
    }
  },

  's3-math-exponential-logarithms-exponential-decay': {
    speech: {
      text: `Hi! Have you ever wondered how scientists calculate the age of ancient artifacts or how fast medicine leaves your bloodstream? The answer lies in exponential decay, the opposite side of the growth coin.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-exponential-logarithms-exponential-decay.mp3'
    },
    display: {
      content: `# Understanding Exponential Decay

Exponential decay describes a process where a quantity decreases by a fixed percentage over regular time intervals. Unlike linear decrease, the amount lost is proportional to the current amount, meaning the rate of decrease slows down over time. This concept is vital in physics (radioactive decay) and chemistry (half-life).

The decay formula is the same structure as the growth formula: \$f(x) = p \\times a^x\$. However, the decay factor, \$a\$, is calculated as \$a = 1 - r\$ (where \$r\$ is the decay rate expressed as a decimal).

For a function to represent decay, the decay factor \$a\$ must be between 0 and 1 (0 < a < 1). Let's practice identifying the rate of decrease from a given formula.

***

## First Problem: Understanding Exponential Decay

The concentration of a drug, \$A(t)\$, in a patient's bloodstream after \$t\$ hours is modeled by the function \$A(t) = 100(0.75)^t\$.

What is the hourly decay rate (as a percentage) of the drug concentration?`,
      showAfterSpeech: true
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

\$10^2 = 100\$

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
\$\\log_b(xy) = \\log_b(x) + \\log_b(y)\$

**Problem 1:**
Expand the following expression using the Product Law. Remember to simplify any resulting logarithmic terms if possible.

\$\\log_2(8x)\$`,
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
\$2^x = 8\$

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

\$\\log_b(x) = y \\iff b^y = x\$

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
      text: `Welcome to the foundational world of set theory! Sets are the basic building blocks of mathematical organization. Think of a set as a well defined collection of distinct objects. These objects are called elements or members.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-fundamentals.mp3'
    },
    display: {
      content: `# Introduction to Set Fundamentals and Notation

Sets provide a precise language for grouping items. Whether you're organizing data, defining mathematical domains, or analyzing logic, sets are essential. In this first section, we establish the core vocabulary: defining a set, listing its elements (usually using braces { }), and determining its **cardinality**, which is the number of elements it contains, denoted as n(A).

We will also master the membership notation: the symbol **∈** means 'is an element of', and **∉** means 'is not an element of'. Understanding this notation is crucial for describing relationships between elements and sets.

***

### First Problem

Let Set A be defined as the set of all positive factors of 12.

1. List the elements of Set A using roster notation.
2. Determine the cardinality, n(A).`,
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
                      "6",
                      "12"
                ],
                "displayMode": "list",
                "showCardinality": true,
                "showBraces": true,
                "membershipExamples": [
                      {
                            "element": "3",
                            "isMember": true
                      },
                      {
                            "element": "5",
                            "isMember": false
                      }
                ]
          },
          "caption": "Set A, representing the positive factors of 12, shown with its cardinality n(A) = 6."
    }
  },

  's3-math-sets-complement': {
    speech: {
      text: `Hey there! Ready to explore the concept of 'everything else'? In set theory, every problem operates within a defined boundary called the Universal Set, or U. When we talk about a set A, the complement of A, written as A prime or A with a superscript C, is simply every element in U that is NOT in A.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-complement.mp3'
    },
    display: {
      content: `# Understanding Complements and Universal Set

The **Universal Set (U)** acts as the container for all elements relevant to a specific problem. The concept of the **Complement (A')** is essential for logic and filtering data—it's like hitting the 'NOT' button on a search query.

Formally, the complement of A, denoted \$A^1\$ or \$A^c\$, is the set of all elements \$x\$ such that \$x \\\\in U\$ and \$x \\
otin A\$. This relationship gives us a fundamental cardinality rule: the number of elements in A plus the number of elements in A prime must equal the number of elements in the universal set: n(A) + n(A') = n(U).

***

### First Problem

Let the Universal Set \$U = \\\\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\\\}\$.

If Set \$P = \\\\{2, 4, 6, 8, 10\\\\}\$, what is the complement of P, denoted P'?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "vennDiagram1Set",
          "parameters": {
                "setLabel": "P",
                "universalSetLabel": "U",
                "setElements": [
                      "2",
                      "4",
                      "6",
                      "8",
                      "10"
                ],
                "complementElements": [
                      "1",
                      "3",
                      "5",
                      "7",
                      "9"
                ],
                "showElements": true,
                "shadeRegion": "complement"
          },
          "caption": "The shaded region represents P', the complement of P."
    }
  },

  's3-math-sets-intersection-union': {
    speech: {
      text: `Greetings! Think about sorting your music playlists. You might want songs that are both rock AND from the 90s, or perhaps songs that are rock OR pop. These concepts of 'and' and 'or' are the core of set operations: intersection and union.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-intersection-union.mp3'
    },
    display: {
      content: `# Basic Set Operations: Intersection and Union

Set operations allow us to combine or compare sets. The **Intersection** of two sets, \$A\$ and \$B\$, denoted \$A \\\\cap B\$, represents the elements that are common to *both* sets (the 'AND' condition). The **Union** of two sets, \$A\$ and \$B\$, denoted \$A \\\\cup B\$, represents all elements that belong to \$A\$ *or* \$B\$ (or both) (the 'OR' condition).

These operations are fundamental in fields like database querying and probability. If two sets have no elements in common (i.e., \$A \\\\cap B = \\\\emptyset\$), they are called **disjoint sets**.

***

### First Problem

Given the following two sets:

\$A = \\\\{m, a, t, h, s\\\\}\$
\$B = \\\\{s, c, i, e, n, c, e\\\\}\$

Find the intersection of A and B, \$A \\\\cap B\$.`,
      showAfterSpeech: true
    }
  },

  's3-math-sets-special-number-sets': {
    speech: {
      text: `Hello and welcome to the structure of numbers! Mathematics isn't just a random collection of values; it's a beautifully organized system. We use special symbols to categorize numbers based on their properties, creating nested sets that build upon each other.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-special-number-sets.mp3'
    },
    display: {
      content: `# Integer Sets: ℕ, ℤ, ℤ⁺, ℤ⁻

We begin by classifying the most basic number sets. The **Natural Numbers (ℕ)** are the counting numbers \$\\{1, 2, 3, ...\\}\$. When we include zero and the negative counterparts, we get the **Integers (ℤ)**: \$\\{..., -2, -1, 0, 1, 2, ...\\}\$.

This categorization is crucial because it defines the domain for many mathematical functions and equations. In this section, we focus on identifying and distinguishing between the integers, positive integers (\$\\\\mathbb{Z}^+\$), and negative integers (\$\\\\mathbb{Z}^-\$), understanding the subset relationships between them (e.g., \$\\\\mathbb{N} \\\\subset \\\\mathbb{Z}\$). 

***

### First Problem

Which of the following numbers belong to the set of positive integers (\$\\\\mathbb{Z}^+\$)?

\$\\\\{ -5, \\\\ 0, \\\\ 1, \\\\ 3.5, \\\\ 100, \\\\ -\\\\frac{1}{2} \\\\}\$`,
      showAfterSpeech: true
    }
  },

  's3-math-sets-interval-notation': {
    speech: {
      text: `Hi! Imagine trying to describe an infinite range of numbers using just a few symbols. That's the power of Interval Notation. It's a concise mathematical language used to represent continuous sets of real numbers, often derived from inequalities.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-interval-notation.mp3'
    },
    display: {
      content: `# Reading and Writing Intervals

**Interval Notation** provides a compact way to describe subsets of the real number line. Instead of writing x > 3 or 5 <= x < 10, we use brackets and parentheses.

- **Parentheses ( )** indicate that the endpoint is **excluded** (used for strict inequalities like < or >).
- **Square Brackets [ ]** indicate that the endpoint is **included** (used for non-strict inequalities like \$\\\\le\$ or \$\\\\ge\$).

Mastering the difference between open and closed intervals is key to accurately describing domains, ranges, and solution sets in higher mathematics.

***

### First Problem

Convert the following inequality into interval notation:

\$x \\\\le 4\$`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "numberLine",
          "parameters": {
                "min": 0,
                "max": 6,
                "intervals": [
                      {
                            "start": null,
                            "end": 4,
                            "startInclusive": false,
                            "endInclusive": true,
                            "label": "(-∞, 4]"
                      }
                ],
                "caption": "Visualizing x <= 4 on the number line, showing the closed circle at 4 and shading extending to negative infinity."
          }
    }
  },

  's3-math-sets-venn-diagrams': {
    speech: {
      text: `Wow, we're diving into visualization! Venn diagrams are perhaps the most famous tool in set theory. They transform abstract set relationships into clear, easy to understand pictures, helping us organize and analyze data visually.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-venn-diagrams.mp3'
    },
    display: {
      content: `# Drawing Venn Diagrams

A **Venn Diagram** uses geometric shapes—typically a rectangle for the Universal Set (\$U\$) and circles for the individual sets (\$A\$, \$B\$, etc.)—to illustrate the relationships between sets. When sets overlap, the intersection is clearly visible.

In this section, we learn the foundational skill of properly drawing and labeling a Venn diagram for two sets. The rectangle defines the boundary (\$U\$), and the circles define the sets within that boundary. The way the circles intersect (or don't) reveals whether the sets are overlapping, disjoint, or if one is a subset of the other.

***

### First Problem

Draw a standard Venn diagram illustrating two overlapping sets, A and B, within a universal set U. Label the four distinct regions created by the sets using Roman numerals I, II, III, and IV, starting with region I for A only.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "vennDiagram",
          "parameters": {
                "setALabel": "A",
                "setBLabel": "B",
                "layout": "overlapping",
                "aOnlyElements": "I",
                "bOnlyElements": "III",
                "intersectionElements": "II",
                "neitherElements": "IV",
                "showElements": true,
                "showRegionCounts": false,
                "caption": "Standard two-set Venn diagram showing the four regions."
          }
    }
  },

  's3-math-sets-venn-regions': {
    speech: {
      text: `Ready for a challenge? Set theory isn't just about grouping objects; it's about logic and proving mathematical truths. We are going to use the visual power of Venn diagrams to verify complex set identities, ensuring that two different set expressions are actually equivalent.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-venn-regions.mp3'
    },
    display: {
      content: `# Understanding and Verifying Set Identities

Two set expressions are considered **identical** if they describe the exact same region(s) in a Venn diagram, regardless of how they are written. For instance, $(A \\cup B)'$ and $A' \\cap B'$ look different but describe the same region (the area outside both A and B).

Verifying these identities using Venn diagrams is a powerful technique. We shade the region corresponding to the left side of the equation and then shade the region corresponding to the right side. If the final shaded regions match perfectly, the identity is proven. This process is critical for understanding advanced set laws, including De Morgan's Laws and the Distributive Laws.

***

### First Problem

On a two-set Venn diagram (A and B), shade the region that corresponds to the expression $A \\cap B'$.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "vennDiagram",
          "parameters": {
                "setALabel": "A",
                "setBLabel": "B",
                "layout": "overlapping",
                "aOnlyElements": " ",
                "bOnlyElements": " ",
                "intersectionElements": " ",
                "neitherElements": " ",
                "showElements": false,
                "shadeRegion": "aOnly"
          },
          "caption": "Shade the region representing $A \\\\cap B'$ (elements in A AND not in B)."
    }
  },

  's3-math-sets-numbers-in-regions': {
    speech: {
      text: `Good day! Now that we know how to draw Venn diagrams, let's put them to practical use by filling them with numbers. This skill is essential for managing data, counting elements, and ensuring we don't double count items that belong to multiple categories.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-numbers-in-regions.mp3'
    },
    display: {
      content: `# Basic Counting with Two Sets

When dealing with the cardinality of sets, Venn diagrams help us visualize the counts in each specific region: \$A\$ only, \$B\$ only, the intersection (\$A \\\\cap B\$), and neither set \$((A \\\\cup B)')\$.

The key strategy is always to start filling the diagram from the innermost region—the intersection—and work outward. This prevents errors caused by counting shared elements twice. This method is the foundation for solving complex survey problems involving up to three sets.

***

### First Problem

In a class survey, 15 students like soccer (S) and 12 students like basketball (B). If 5 students like both sports, how many students like only soccer?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "vennDiagram",
          "parameters": {
                "setALabel": "S",
                "setBLabel": "B",
                "layout": "overlapping",
                "aOnlyElements": 10,
                "bOnlyElements": 7,
                "intersectionElements": 5,
                "showElements": false,
                "showRegionCounts": true,
                "caption": "Venn diagram showing the counts derived from the problem data."
          }
    }
  },

  's3-math-sets-problem-solving': {
    speech: {
      text: `Fantastic! It's time to apply everything we know about sets, operations, and Venn diagrams to real-world scenarios. This is where set theory truly shines, helping us organize and analyze data from surveys, experiments, and population studies.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s3-math-sets-problem-solving.mp3'
    },
    display: {
      content: `# Two-Set Survey Problems

Solving real-world problems using Venn diagrams requires translating natural language into precise set notation. Phrases like 'like both' refer to the intersection (\$A \\\\cap B\$), while 'like neither' refers to the complement of the union \$((A \\\\cup B)')\$.

Our primary tool for success is the Venn diagram, which acts as a visual organizer. We must systematically fill the regions, usually starting with the intersection, to determine the total number of elements in the universal set or in specific categories. This skill is vital for statistical analysis and logical deduction.

***

### First Problem

A survey of 50 people found that 30 enjoy coffee (C) and 25 enjoy tea (T). If 10 people enjoy neither beverage, how many people enjoy both coffee and tea?`,
      showAfterSpeech: true
    }
  },

  /**
   * ========================================
   * S4 MATHEMATICS - PROBABILITY
   * ========================================
   */
  's4-math-probability-basic-concepts': {
    speech: {
      text: `Hey there! Ready to unlock the secrets of chance? We are diving into Basic Probability Concepts, the absolute foundation for quantifying uncertainty. Before we calculate the likelihood of winning the lottery, we need to master the building blocks: defining all possible results. This first section is all about systematically listing every possible outcome in an experiment. Let us start by mapping out the Sample Space.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-probability-basic-concepts.mp3'
    },
    display: {
      content: `# Introduction to Basic Probability Concepts

Probability is the mathematical framework we use to quantify uncertainty, turning guesswork into calculated prediction. At its core, probability relies on two fundamental ideas: the **Sample Space (S)**, which is the set of all possible outcomes of an experiment, and an **Event (E)**, which is a specific subset of those outcomes we are interested in.

Mastering the concept of the Sample Space is crucial because the probability of any event E is calculated using the foundational formula: P(E) = n(E) / n(S), where n(E) is the number of favorable outcomes and n(S) is the total number of outcomes. We will start by focusing on how to list and identify these outcomes systematically.

***

### First Problem: Sample Spaces and Outcomes

A six-sided die is rolled, and a coin is flipped. List the complete sample space, S, for this combined experiment using set notation (e.g., {1H, 2H, ...}).`,
      showAfterSpeech: true
    }
  },

  's4-math-probability-combined-events': {
    speech: {
      text: `Welcome back! You have mastered single events. Now let us put those building blocks together to calculate the probability of combined events. This is where probability gets powerful, allowing us to analyze complex scenarios like the chance of rain or winning a specific hand in poker. We start by looking at mutually exclusive events, which are events that cannot happen at the same time. Think of rolling a four and rolling a five on a single die. They are separate, non-overlapping possibilities.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-probability-combined-events.mp3'
    },
    display: {
      content: `# Introduction to Combined Events & Probability Rules

When we deal with two or more events, we need rules to calculate the probability of them happening together (intersection, \$A \\cap B\$) or either one happening (union, \$A \\cup B\$). Our focus here is the Addition Rule, which governs the probability of the union of two events.

We begin with **Mutually Exclusive Events**. These are events that share no outcomes; if one occurs, the other cannot. Because the intersection is empty (P(\$A \\cap B\$) = 0), the Addition Rule simplifies significantly: P(\$A \\cup B\$) = P(A) + P(B). If events are *not* mutually exclusive, we must use the General Addition Rule: P(\$A \\cup B\$) = P(A) + P(B) - P(\$A \\cap B\$).

***

### First Problem: Mutually Exclusive Events

Consider rolling a standard six-sided die once. Let Event A be rolling an even number {2, 4, 6} and Event B be rolling a number less than 3 {1, 2}.

Are Event A and Event B mutually exclusive? Explain why or why not.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "vennDiagram",
          "parameters": {
                "setALabel": "A (Even)",
                "setBLabel": "B (< 3)",
                "intersectionElements": [
                      "2"
                ],
                "aOnlyElements": [
                      "4",
                      "6"
                ],
                "bOnlyElements": [
                      "1"
                ],
                "neitherElements": [
                      "3",
                      "5"
                ],
                "showElements": true,
                "caption": "Visualization of Event A (Even) and Event B (Less than 3) on a single die roll. The intersection shows they are NOT mutually exclusive."
          }
    }
  },

  's4-math-probability-trees': {
    speech: {
      text: `Hello! Ready to map out your probability journey? When experiments happen in sequence, like drawing cards or flipping a coin multiple times, tracking the outcomes can get complicated. Probability trees are powerful visual tools that help us organize these multi-stage events. They allow us to see every possible path and calculate the probability of reaching the end of that path by simply multiplying the probabilities along the branches.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-probability-trees.mp3'
    },
    display: {
      content: `# Introduction to Probability Trees

Probability trees are graphical representations used to model sequences of events. They are particularly useful when dealing with multi-stage experiments where the outcome of one stage might influence the probabilities in the next stage (dependent events).

**Core Concepts:** Each branch represents a possible outcome, and the number written on the branch is the probability of that outcome occurring. To find the probability of a specific sequence of events, we use the **Multiplication Rule**: we multiply the probabilities along the path (or 'branch'). To find the probability of a general outcome (which might be reached by multiple paths), we use the **Addition Rule**: we add the probabilities of the relevant end points.

***

### First Problem: Constructing Tree Diagrams

A bag contains 4 red marbles (R) and 6 blue marbles (B). A marble is drawn, its color is noted, and then it is replaced before a second marble is drawn (drawing *with* replacement).

Draw the first stage of the probability tree diagram. What are the probabilities for the two initial branches?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "probabilityTree",
          "parameters": {
                "stage1": [
                      {
                            "outcome": "Red",
                            "probability": 0.4
                      },
                      {
                            "outcome": "Blue",
                            "probability": 0.6
                      }
                ],
                "showProbabilities": true,
                "caption": "The first stage of the probability tree for drawing a marble from the bag."
          }
    }
  },

  's4-math-probability-conditional': {
    speech: {
      text: `Greetings, advanced learner! How does new information change your world? Conditional probability is arguably the most powerful concept in this field, because it allows us to update our predictions based on evidence. We are no longer calculating the chance of an event in a general setting, but rather, the chance of an event happening, knowing that another specific event has already occurred. This fundamentally restricts our sample space, making our calculations far more precise.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-probability-conditional.mp3'
    },
    display: {
      content: `# Introduction to Conditional Probability

**Conditional Probability** measures the likelihood of an event A occurring, given that another event B has already occurred. This is written as P(A|B), read as 'the probability of A given B'. The key insight here is the restriction of the sample space: instead of considering all possible outcomes (S), we only consider the outcomes where B is true.

The fundamental formula linking joint probability and conditional probability is: P(A|B) = \$\\frac{P(A \\cap B)}{P(B)}\$. This concept is crucial for fields like medical testing, machine learning, and risk assessment, where decisions must be updated instantly based on new data.

***

### First Problem: Understanding Conditional Probability

In a class of 30 students, 18 take Math (M) and 12 take Physics (P). 5 students take both subjects.

If you randomly select a student who is known to take Physics (P), what is the size of the new, restricted sample space for this selection?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "vennDiagram",
          "parameters": {
                "setALabel": "Math (M)",
                "setBLabel": "Physics (P)",
                "aOnlyElements": 13,
                "bOnlyElements": 7,
                "intersectionElements": 5,
                "neitherElements": 5,
                "showRegionCounts": true,
                "highlightSet": "B",
                "caption": "Venn diagram showing the counts for Math and Physics students. The restricted sample space for P(A|B) is the count within set B (Physics)."
          }
    }
  },

  's4-math-probability-applications': {
    speech: {
      text: `Good day. We are now moving from theory to impact. You have mastered the formulas, the trees, and the conditional rules. Now, we apply this powerful knowledge to solve complex, real-world problems. Probability is the language of risk and decision-making, used everywhere from assessing insurance premiums to ensuring product quality and analyzing medical test results. This final module is about translating messy, practical scenarios into clean mathematical models.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-probability-applications.mp3'
    },
    display: {
      content: `# Introduction to Applications & Problem Solving

Probability theory moves beyond classroom examples when applied to real-world scenarios. In this unit, we focus on translating complex descriptions—often involving multiple stages, dependence, or high-stakes outcomes—into solvable mathematical structures. We will use all the rules learned previously, including the multiplication rule, addition rule, and conditional probability.

One particularly useful strategy we will master is the use of the **Complementary Event** for 'at least' problems. Calculating P(at least one success) is often far easier by calculating 1 minus P(no successes), or P(A') = 1 - P(A).

***

### First Problem: Real-World Probability Applications

An electronics factory produces light bulbs. Historically, 5% of the bulbs produced are defective. A quality control inspector randomly selects one bulb.

What is the probability that the selected bulb is *not* defective? Express your answer as a decimal.`,
      showAfterSpeech: true
    }
  },

  /**
   * ========================================
   * S4 MATHEMATICS - DIFFERENTIAL CALCULUS
   * ========================================
   */
  's4-math-differential-calculus-limits': {
    speech: {
      text: `Hello and welcome to the foundation of calculus! Have you ever wondered what happens right at the edge of something, even if you can't touch it? Limits are the mathematical tool we use to explore that very question.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-differential-calculus-limits.mp3'
    },
    display: {
      content: `# Introduction to Limits

Limits are the conceptual cornerstone of calculus. A limit describes the value that a function or sequence "approaches" as the input approaches some specific value. Crucially, the limit does not depend on the value of the function *at* that point, only on the values near it. This allows us to analyze functions that have holes or breaks, which is essential for defining continuity and the derivative.

In practical applications, limits help engineers and scientists model asymptotic behavior—such as the maximum speed an object can reach or the long-term carrying capacity of an ecosystem. Mastering limits involves understanding how to approach a value (from the left, from the right, or toward infinity) and using algebraic techniques (like factoring or rationalizing) to resolve indeterminate forms.

Let's start by evaluating a limit using direct substitution and algebraic simplification.

***

### First Problem: Evaluate the Limit

Find the limit of the function \$f(x) = x^2 + 5x - 3\$ as \$x\$ approaches 2.

\$\$\\lim_{x \\to 2} (x^2 + 5x - 3)\$\$
`,
      showAfterSpeech: true
    }
  },

  's4-math-differential-calculus-gradient-tangent': {
    speech: {
      text: `Hey there! Get ready for some high-speed math. We are diving into the gradient of a tangent line. This is where we learn how to measure the exact speed or rate of change of a curve at a single, specific moment.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-differential-calculus-gradient-tangent.mp3'
    },
    display: {
      content: `# Tangent vs Secant Lines

In algebra, we calculate the **average rate of change** over an interval using the slope of a **secant line** (a line connecting two points on a curve). Calculus, however, focuses on the **instantaneous rate of change**—the rate at a single, precise moment.

To achieve this instantaneous measurement, we use the limit process. We take the two points defining the secant line and move them infinitely close together until they merge into a single point. The resulting line is the **tangent line**, which touches the curve at exactly one point. The slope (or gradient) of this tangent line is the instantaneous rate of change.

Understanding this transition from secant to tangent via the limit is the foundation for defining the derivative. It allows us to analyze motion, optimize processes, and understand how quickly things are changing in real-time.

***

### First Problem: Calculate the Secant Gradient

Consider the function \$f(x) = x^2 + 1\$.

Find the gradient of the secant line passing through the points where \$x_1 = 1\$ and \$x_2 = 3\$.`,
      showAfterSpeech: true
    }
  },

  's4-math-differential-calculus-derivative-function': {
    speech: {
      text: `Greetings! We are about to define the single most important concept in this entire module: the derivative function. This function gives us a formula that unlocks the slope of any curve at any point.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-differential-calculus-derivative-function.mp3'
    },
    display: {
      content: `# Definition of the Derivative

Welcome to the core of differential calculus: the derivative function. The derivative, denoted \$f'(x)\$ or \$\\frac{dy}{dx}\$, is a function derived from the original function \$f(x)\$. Its value at any point \$x\$ gives the instantaneous rate of change of \$f(x)\$ at that point (i.e., the slope of the tangent line).

Formally, the derivative is defined as the **limit of the difference quotient**:

\$\$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}\$\$

This definition is crucial because it connects the concepts of limits and instantaneous rate of change. We must also understand **differentiability**: a function is differentiable at a point if this limit exists. Graphically, this means the function is smooth and continuous, without sharp corners or vertical tangents. 

***

### First Problem: Identify the Definition

Which of the following expressions represents the definition of the derivative of a function \$f(x)\$?`,
      showAfterSpeech: true
    }
  },

  's4-math-differential-calculus-first-principles': {
    speech: {
      text: `Welcome back! Today we are tackling the challenge of differentiation from first principles. This is the ultimate proof, showing exactly how the derivative rules are derived using the limit definition.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-differential-calculus-first-principles.mp3'
    },
    display: {
      content: `# First Principles Formula

Differentiation from First Principles is the foundational method for finding derivatives. It requires us to apply the formal definition of the derivative directly, using the limit of the difference quotient. While it can be algebraically intensive, mastering this process ensures a deep understanding of *why* the derivative rules work.

The **First Principles Formula** is:

\$\$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}\$\$

To successfully use this formula, you must first substitute \$f(x+h)\$ and \$f(x)\$, expand the expression, simplify the numerator so that the \$h\$ in the denominator can be cancelled, and finally, take the limit by setting \$h=0\$. This process is essential for deriving the basic rules like the Power Rule.

***

### First Problem: Set Up the Expression

Given the function \$f(x) = 3x + 5\$, set up the numerator of the difference quotient, \$f(x+h) - f(x)\$.`,
      showAfterSpeech: true
    }
  },

  's4-math-differential-calculus-differentiation-rules': {
    speech: {
      text: `Hi there! Are you ready to level up your calculus game? We are moving from the slow, foundational method to the fast, powerful rules that make differential calculus practical. This is where we learn to work smarter, not harder.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-differential-calculus-differentiation-rules.mp3'
    },
    display: {
      content: `# Power Rule

While differentiation from first principles is necessary for understanding the theory, it is far too slow for real-world application. Differentiation rules are the shortcuts that allow us to find derivatives quickly and efficiently. These rules are the core tools used in physics, economics, and engineering.

The most fundamental rule is the **Power Rule**. It states that if \$f(x) = ax^n\$, then the derivative is \$f'(x) = anx^{n-1}\$. This rule applies to all real exponents, positive or negative, whole numbers or fractions.

Beyond the Power Rule, we will master the Product Rule (for multiplying functions), the Quotient Rule (for dividing functions), and the Chain Rule (for composite functions). Combining these rules allows us to differentiate almost any function encountered in applied mathematics.

***

### First Problem: Simple Power Rule Application

Find the derivative of the function \$f(x) = 7x^3\$.`,
      showAfterSpeech: true
    }
  },

  's4-math-differential-calculus-tangent-equations': {
    speech: {
      text: `Hello! Today we are applying everything we have learned about derivatives to solve a practical geometry problem: finding the equation of a tangent line. This is where the abstract concept of the derivative becomes a tangible line on a graph.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-differential-calculus-tangent-equations.mp3'
    },
    display: {
      content: `# Tangent Equation Using Point-Slope Form

Finding the equation of a tangent line at a specific point is a key application of differential calculus. Remember, any straight line requires two things: a point and a slope (\$m\$).

1. **The Point \$(x_1, y_1)\$:** This is given or found by substituting \$x\$ into the original function \$f(x)\$.
2. **The Slope \$m_{tan}\$:** This is found by calculating the derivative \$f'(x)\$ and substituting the given \$x\$-value into the derivative function.

Once we have these two components, we use the standard **point-slope form** of a linear equation: \$y - y_1 = m(x - x_1)\$. We can also find the equation of the **normal line**, which is perpendicular to the tangent, using the negative reciprocal of the tangent's slope (\$m_{normal} = -1/m_{tan}\$). 

***

### First Problem: Find the Slope

Given the function \$f(x) = x^2 - 4x + 1\$.

Find the slope of the tangent line to the curve at the point where \$x = 3\$.`,
      showAfterSpeech: true
    }
  },

  's4-math-differential-calculus-stationary-points': {
    speech: {
      text: `Greetings and welcome to optimization! We are going to learn how to find the highest highs and the lowest lows of any function. These critical locations, where the function momentarily stops changing, are called stationary points.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-differential-calculus-stationary-points.mp3'
    },
    display: {
      content: `# Finding Stationary Points

Stationary points are the points on a function's graph where the gradient (slope of the tangent) is exactly zero. Graphically, these correspond to the peaks (local maxima) and valleys (local minima) of the curve, as well as some points of inflection.

To locate these points, we use the first derivative. Since the gradient must be zero, the mathematical condition for a stationary point is:

\$\$f'(x) = 0\$\$

Solving this equation for \$x\$ gives us the \$x\$-coordinates of all stationary points. Finding and classifying these points is essential for solving real-world optimization problems, such as determining the maximum volume of a container or the minimum cost of production.

***

### First Problem: Locate Potential Stationary Points

Find the \$x\$-coordinates of the stationary points for the function \$f(x) = x^3 - 6x^2 + 5\$.`,
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
      text: `Welcome to the world where geometry meets calculus! For centuries, mathematicians struggled with finding the exact area under a curved line. This concept, known as integration, is the solution. It allows engineers to calculate volumes, physicists to determine work done, and economists to analyze total change. We start by mastering the basics: finding areas using shapes we already know, like triangles and trapezoids, to build a strong foundation for approximating and ultimately solving complex areas.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-integration-area-under-curves.mp3'
    },
    display: {
      content: `# Introduction to Area Under Curves

Integration is the process of finding the total accumulation of a quantity, often visualized as the area bounded by a function, the x-axis, and specific vertical lines. Before we tackle complex curves that require advanced calculus, we must first confirm we can calculate areas of simple shapes defined by linear functions.

This foundational step ensures we understand that the definite integral is fundamentally a measure of area. We will use standard geometric formulas (Area = ½bh, Area = h(b₁ + b₂)/2) to find exact areas bounded by straight lines and the x-axis.

Let's begin by finding the area of a region that forms a simple geometric shape.

**First Problem:**

Find the exact area bounded by the function \$f(x) = 2x + 1\$, the x-axis, and the vertical lines \$x = 0\$ and \$x = 3\$.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "definiteIntegralVisualizer",
          "parameters": {
                "functionExpression": "2*x+1",
                "lowerBound": 0,
                "upperBound": 3,
                "shadeArea": true,
                "showValue": false
          },
          "caption": "Visualize the area under the linear function f(x) = 2x + 1 from x=0 to x=3."
    }
  },

  's4-math-integration-antiderivatives': {
    speech: {
      text: `Hi there! Ready to learn how to reverse the magic of differentiation? If differentiation tells you the rate of change, the antiderivative tells you the original function—the total accumulated change. This is the core concept of integration. Understanding antiderivatives is crucial because it connects the two major halves of calculus, and it's essential for solving differential equations in physics and engineering.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-integration-antiderivatives.mp3'
    },
    display: {
      content: `# Understanding Antiderivatives

An **antiderivative** of a function \$f(x)\$ is a function \$F(x)\$ such that the derivative of \$F(x)\$ is \$f(x)\$. In notation, this means \$F'(x) = f(x)\$. Finding the antiderivative is the inverse process of finding the derivative.

Because the derivative of any constant (like 5, -10, or π) is zero, when finding an antiderivative, we must always include the **constant of integration**, denoted as \$+ C\$. This \$C\$ represents a family of functions that all share the same derivative. We will start by identifying this fundamental inverse relationship.

**First Problem:**

If the derivative of a function \$F(x)\$ is \$f(x) = 3x^2 + 2\$, which of the following expressions could represent the original function \$F(x)\$?

A) \$x^3 + 2x\$
B) \$x^3 + 2x + 5\$
C) \$6x + 2\$
D) \$6x + 2 + C\$`,
      showAfterSpeech: true
    }
  },

  's4-math-integration-rules': {
    speech: {
      text: `Greetings, future integration master! Now that you know what an antiderivative is, we need the tools to find them efficiently. Just as the power rule was your best friend for differentiation, it's essential for integration too. Mastering the power rule allows us to integrate polynomials and many other expressions quickly, forming the backbone of almost every integration problem you will encounter. Let's unlock this first key tool for indefinite integrals.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-integration-rules.mp3'
    },
    display: {
      content: `# The Power Rule for Integration

The **Power Rule for Integration** is the inverse operation of the Power Rule for Differentiation. Instead of multiplying by the exponent and subtracting 1, we reverse the process: we add 1 to the exponent and then divide by the new exponent.

The general formula for the power rule is:
\$\$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C, \\quad \\text{provided n is not equal to -1} \$\$

This rule is the most fundamental technique for finding indefinite integrals (integrals without limits of integration). Remember that the constant of integration (\$+ C\$) is always required when the integral is indefinite.

**First Problem:**

Apply the Power Rule to find the indefinite integral:

\$\$\\int x^5 dx\$\$`,
      showAfterSpeech: true
    }
  },

  's4-math-integration-definite-integrals': {
    speech: {
      text: `Hello and welcome to the pinnacle of calculus—a concept so powerful it changed mathematics forever! We are about to bridge the gap between finding the rate of change and finding the total accumulated change. This connection is formalized in the Fundamental Theorem of Calculus. This theorem is arguably the most important result in the field, allowing us to calculate exact areas under curves, total distance traveled, and overall change in any quantity, simply by evaluating the antiderivative at the endpoints.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-integration-definite-integrals.mp3'
    },
    display: {
      content: `# The Fundamental Theorem of Calculus

A **definite integral** calculates the net area under a curve \$f(x)\$ between two specific points, \$x=a\$ (the lower limit) and \$x=b\$ (the upper limit). The notation is \$\\int_a^b f(x) dx\$.

The **Fundamental Theorem of Calculus (Part 2)** provides the elegant method for evaluating these integrals:
\$\$\\int_a^b f(x) dx = F(b) - F(a)\$\$

Where \$F(x)\$ is any antiderivative of \$f(x)\$. This means we no longer have to rely on complex approximations; we can find the exact value instantly! Our goal in this section is to master the application of this theorem.

**First Problem:**

Use the Fundamental Theorem of Calculus to evaluate the definite integral:

\$\$\\int_1^4 2x dx\$\$`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "definiteIntegralVisualizer",
          "parameters": {
                "functionExpression": "2*x",
                "lowerBound": 1,
                "upperBound": 4,
                "shadeArea": true,
                "showValue": true
          },
          "caption": "Visualize the definite integral of 2x from 1 to 4."
    }
  },

  's4-math-integration-riemann-sums': {
    speech: {
      text: `Hey there! Are you ready to dive into the intricate details of how integration actually works? Before the Fundamental Theorem of Calculus gave us the easy way out, mathematicians had to calculate area by approximating it with thousands of tiny rectangles. These approximations are called Riemann Sums. Understanding Riemann Sums is vital because it reveals the formal definition of the definite integral as a limit, connecting discrete sums to continuous area.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-integration-riemann-sums.mp3'
    },
    display: {
      content: `# Types of Riemann Sums

**Riemann Sums** are methods used to approximate the area under a curve by dividing the area into a finite number (\$n\$) of rectangles and summing their areas. The width of each rectangle is \$\\Delta x\$, and the height is determined by the function value, \$f(x_i)\$.

We primarily use three types, defined by where the height is measured: **Left, Right, and Midpoint** sums. The key insight is that as the number of rectangles (\$n\$) approaches infinity, the Riemann Sum converges exactly to the definite integral:
\$\$\\int_a^b f(x) dx = \\lim_{n\\to\\infty} \\sum_{i=1}^n f(x_i) \\Delta x\$\$

We start by calculating these approximations using a small number of partitions.

**First Problem:**

Approximate the area under the curve \$f(x) = x^2 + 1\$ on the interval \$[0, 4]\$ using a **Left Riemann Sum** with \$n=4\$ rectangles.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "areaApproximation",
          "parameters": {
                "functionExpression": "x^2+1",
                "lowerBound": 0,
                "upperBound": 4,
                "rectangles": 4,
                "method": "left",
                "showExact": false
          },
          "caption": "Visualize the area approximation using 4 left-hand rectangles."
    }
  },

  /**
   * ========================================
   * S4 MATHEMATICS - QUADRATIC FUNCTIONS
   * ========================================
   */
  's4-math-quad-fundamentals': {
    speech: {
      text: `Hello and welcome! Have you ever wondered how engineers model the path of a projectile or the shape of a satellite dish? The answer lies in quadratic functions.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-quad-fundamentals.mp3'
    },
    display: {
      content: `# Introduction to Quadratic Functions Fundamentals

Quadratic functions are defined by the standard form: y = ax² + bx + c, where 'a' cannot be zero. The term 'quadratic' comes from the Latin word for square, reflecting the presence of the x² term. These functions are critical in physics, engineering, and economics because they model parabolic curves, which describe everything from the trajectory of a launched object to the shape of reflective surfaces.

In this module, we will build a foundational understanding of quadratics. We start by defining the components of the standard equation. Then, we move into evaluating the function (finding y given x). Finally, we will use basic factoring techniques to solve for x when y is known, laying the groundwork for more advanced solving methods.

Let's start with the most basic skill: evaluating the function.

### First Problem

Given the quadratic function f(x) = x² + 3x - 4, what is the value of f(x) when x = 2?`,
      showAfterSpeech: true
    }
  },

  's4-math-quad-graphs-transformations': {
    speech: {
      text: `Hey there! Get ready to become a mathematical sculptor! We are diving into the beautiful, symmetrical shape created by quadratic functions: the parabola.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-quad-graphs-transformations.mp3'
    },
    display: {
      content: `# Parabolas and Graphing

The graph of a quadratic function is called a **parabola**. This U-shaped curve is perfectly symmetrical and has a single turning point called the vertex. Understanding how to graph parabolas and transform them allows us to visualize real-world phenomena, such as the optimal design for bridges or the path of water from a fountain.

We will primarily use the **Vertex Form** of the quadratic equation, y = a(x-h)² + k, which acts as a blueprint for transformations. In this form, the vertex is easily identified at (h, k). We will analyze how the coefficient 'a' affects the width and direction of the parabola, and how 'h' and 'k' translate (shift) the graph horizontally and vertically.

Our first step is to master the Vertex Form to quickly identify the position of the graph.

### First Problem

Identify the coordinates of the vertex for the following quadratic function:

y = 2(x - 3)² + 5`,
      showAfterSpeech: true
    }
  },

  's4-math-quad-key-features': {
    speech: {
      text: `Greetings! Let's talk about optimization. When you throw a ball, how high does it go? When should a company set its price to maximize profit? Finding these critical points requires analyzing the key features of a parabola.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-quad-key-features.mp3'
    },
    display: {
      content: `# x-intercepts and y-intercepts

Key features—like intercepts, the axis of symmetry (AOS), and the vertex—are the navigational points of a quadratic graph. Intercepts tell us where the function crosses the axes: the y-intercept occurs when x = 0, and the x-intercepts (or roots) occur when y = 0. These points often represent starting or ending conditions in a real-world scenario.

The Axis of Symmetry is a vertical line that divides the parabola into two mirror images. We calculate it using the formula: x = \$\\frac{-b}{2a}\$. This line is crucial because the vertex always lies on it. By finding the vertex, we determine the maximum (highest) or minimum (lowest) value of the function, which is the core of optimization problems.

We begin by locating the easiest feature to find: the y-intercept.

### First Problem

Find the y-intercept of the quadratic function defined by:

y = 3x² - 5x + 1`,
      showAfterSpeech: true
    }
  },

  's4-math-quad-finding-functions': {
    speech: {
      text: `Welcome to the detective work of algebra! We are moving beyond solving equations—now we are reverse-engineering them. If you know the critical points of a parabola, can you write its equation?`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-quad-finding-functions.mp3'
    },
    display: {
      content: `# Finding Quadratic Equations

In previous sections, we graphed functions given their equations. Now, we flip the process. We will be given key features—such as the vertex, intercepts, or a set of points—and our task is to determine the specific quadratic equation that generated those features.

Choosing the correct form (Standard Form: y = ax² + bx + c, or Vertex Form: y = a(x-h)² + k) is the first step. If the vertex is known, the Vertex Form is usually easiest. We then substitute the known coordinates into the chosen equation and solve for the remaining unknown coefficients, most often the stretch factor 'a'. This skill is essential for modeling data gathered from experiments or observations.

Let's use the Vertex Form to construct our first equation.

### First Problem

A parabola has a vertex at (1, -4) and passes through the point (0, -3). Write the equation of the parabola in Vertex Form.`,
      showAfterSpeech: true
    }
  },

  's4-math-quad-inequalities': {
    speech: {
      text: `Hi! We've mastered equality, but the real world is full of 'greater than' and 'less than' scenarios. When is the profit *above* zero? When is the height *less than* 10 feet? Are you ready for the next level of quadratic analysis?`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-quad-inequalities.mp3'
    },
    display: {
      content: `# Quadratic Inequalities (Sign Diagrams)

Quadratic inequalities involve comparing a quadratic expression to zero using symbols like <, >, ≤, or ≥ (e.g., x² - 4 > 0). Unlike equations, which usually have one or two solutions, inequalities result in a range or interval of x-values that satisfy the condition.

To solve these, we first treat the inequality as an equation to find the roots (the boundary points). We then use a **sign diagram** or analyze the graph of the parabola to test the intervals created by those roots. This process helps us determine whether the quadratic expression is positive or negative in those regions, thus identifying the solution set.

We will use factoring and sign analysis to solve our first inequality. Since the solution is an interval, we will visualize it on a number line.

### First Problem

Solve the following quadratic inequality for x:

x² - x - 6 < 0`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "numberLine",
          "parameters": {
                "min": -5,
                "max": 5,
                "step": 1,
                "intervals": [],
                "points": [],
                "caption": "Use the number line to visualize the solution interval after finding the roots."
          },
          "caption": "A number line tool to visualize the solution set for the inequality."
    }
  },
  /**
   * ========================================
   * S4 MATHEMATICS - Advanced Trigonometry
   * ========================================
   */
  's4-math-advanced-trig-unit-circle': {
    speech: {
      text: `Hello and welcome to the world of advanced trigonometry! We are starting with the Unit Circle, which is arguably the most important map in all of trig. This simple circle, centered at the origin with a radius of one, is the key to defining sine and cosine for every single angle. Get ready to connect angles to coordinates, because that relationship, where the point P is always equal to cosine theta, sine theta, is the foundational concept we need to master first.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-advanced-trig-unit-circle.mp3'
    },
    display: {
      content: `# Introduction to Unit Circle & Special Angles

The **Unit Circle** is a circle centered at the origin (0, 0) with a radius \$r=1\$. It serves as the foundational tool for advanced trigonometry because it allows us to define trigonometric functions for *any* angle, not just acute angles in a right triangle.

For any angle \$\\theta\$ measured counterclockwise from the positive x-axis, the coordinates of the point \$P\$ where the terminal side intersects the circle are always given by the ordered pair: \$P = (\\cos \\theta, \\sin \\theta)\$. This means the x-coordinate is \$\\cos \\theta\$ and the y-coordinate is \$\\sin \\theta\$.

Mastering this connection is essential for understanding periodic functions and solving complex equations later on. Let's start by identifying these coordinates for a basic angle.

***

### First Problem: Understanding the Unit Circle

If the terminal side of an angle \$\\theta\$ intersects the unit circle at the point \$P = (0.6, 0.8)\$, what are the values of \$\\cos \\theta\$ and \$\\sin \\theta\$?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "unitCircle",
          "parameters": {
                "angle": 53,
                "showPoint": true,
                "showCoordinates": true,
                "showAngleArc": true
          },
          "caption": "The Unit Circle visualization shows the coordinates (cos θ, sin θ) for any angle θ."
    }
  },

  's4-math-advanced-trig-functions-graphs': {
    speech: {
      text: `Greetings! We are diving into the world of wave mathematics today. Trigonometric functions like sine and cosine don't just solve triangles; they model everything that oscillates, from sound waves to electrical currents. When we graph these functions, we are visualizing repeating cycles. Our first goal is to nail down the fundamental characteristics of these basic wave forms: the period, the amplitude, the domain, and the range.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-advanced-trig-functions-graphs.mp3'
    },
    display: {
      content: `# Introduction to Trigonometric Functions & Graphs

Trigonometric functions (\$y = \\sin(x)\$, \$y = \\cos(x)\$, etc.) are essential for modeling **periodic phenomena**—anything that repeats over a fixed interval, such as sound waves, light waves, and seasonal cycles. Graphing these functions allows us to visualize their behavior.

For the basic sine and cosine functions, \$y = \\sin(x)\$ and \$y = \\cos(x)\$, the key characteristics are:

*   **Amplitude:** The maximum displacement from the midline (usually 1).
*   **Period:** The horizontal length of one complete cycle (usually \$360°\$ or \$2\\pi\$).
*   **Domain:** All real numbers.
*   **Range:** \$[-1, 1]\$.

Let's begin by confirming these fundamental properties for the sine function.

***

### First Problem: The Sine and Cosine Functions

Consider the graph of the basic sine function, \$y = \\sin(x)\$. What are the amplitude and the period (in radians) of this function?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "functionGraph",
          "parameters": {
                "expression": "sin(x)",
                "xMin": -6.28,
                "xMax": 6.28,
                "yMin": -1.5,
                "yMax": 1.5,
                "xAxisMode": "radians",
                "label": "y = sin(x)"
          },
          "caption": "The graph of y = sin(x) showing its periodic nature over two cycles (from -2π to 2π)."
    }
  },

  's4-math-advanced-trig-transformations': {
    speech: {
      text: `Hey there, advanced mathematician! Welcome to the control panel of trigonometry. We've seen the basic sine and cosine waves, but real-world data rarely fits the default settings. In this unit, we learn how to stretch, compress, and shift those waves to match any scenario. We begin by mastering amplitude and period changes, which control the height and the speed of the wave. Remember, the amplitude is determined by a, and the period is determined by b, using the formula two pi divided by the absolute value of b.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-advanced-trig-transformations.mp3'
    },
    display: {
      content: `# Introduction to Transformations of Trigonometric Functions

In advanced trigonometry, we move beyond the basic graphs of \$y = \\sin(x)\$ and \$y = \\cos(x)\$ to analyze and create functions that model specific real-world phenomena. This requires understanding **transformations**—how changes to the function's parameters alter its graph.

We begin with the function \$y = a \\sin(bx)\$ (or \$y = a \\cos(bx)\$):

1.  **Amplitude (a):** The value \$|a|\$ determines the amplitude, controlling the vertical stretch or compression of the graph.
2.  **Period (b):** The value \$b\$ determines the period, controlling the horizontal stretch or compression. The new period \$P\$ is calculated using the formula: \$P = \\frac{2\\pi}{|b|}\$.

Mastering these two parameters is essential for accurately modeling cyclic data.

***

### First Problem: Amplitude and Period Changes

Determine the amplitude and the period (in radians) of the function \$y = 4 \\cos(3x)\$.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "functionGraph",
          "parameters": {
                "expression": "4*cos(3*x)",
                "xMin": 0,
                "xMax": 2.09,
                "yMin": -5,
                "yMax": 5,
                "xAxisMode": "radians",
                "label": "y = 4 cos(3x)"
          },
          "caption": "Visualization of $y = 4 \\cos(3x)$, showing the increased amplitude (4) and compressed period (2π/3)."
    }
  },

  's4-math-advanced-trig-equations-identities': {
    speech: {
      text: `Hello. Today we embark on a crucial phase of trigonometry: solving equations. This is where all your foundational knowledge of the Unit Circle and special angles comes together. Solving trig equations is a strategic process. We must find every single angle that satisfies the condition, which means we need to use the ASTC rule to find solutions in all four quadrants, and then account for the infinite nature of the periodic functions.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-advanced-trig-equations-identities.mp3'
    },
    display: {
      content: `# Introduction to Trigonometric Equations & Identities

Solving **Trigonometric Equations** means finding the angle(s) \$\\theta\$ that make a given equation true. Because trigonometric functions are periodic, these equations typically have an infinite number of solutions. Our primary goal is to find all solutions within one rotation (\$0° \\le \\theta < 360°\$) and then generalize the solution set.

Key steps in solving equations:

1.  Isolate the trigonometric function (e.g., \$\\sin \\theta\$).
2.  Determine the **reference angle** (the acute angle that satisfies the equation).
3.  Use the **ASTC rule** (All, Sine, Tangent, Cosine) to identify the quadrants where the function has the required sign.
4.  Calculate the specific angles in those quadrants.

Let's apply this strategy to a fundamental equation.

***

### First Problem: Solving Trigonometric Equations

Find all solutions for \$\\theta\$ in the interval \$0° \\le \\theta < 360°\$ for the equation:

\$\$2 \\sin(\\theta) - 1 = 0\$\$`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "unitCircle",
          "parameters": {
                "showPoint": true,
                "showSpecialAngles": true,
                "showASTC": true
          },
          "caption": "The Unit Circle showing special angles and the ASTC rule, essential tools for solving trigonometric equations."
    }
  },

  's4-math-advanced-trig-radians': {
    speech: {
      text: `Hey there! We are stepping into the advanced language of mathematics: radians. While degrees are intuitive for geometry, radians are absolutely essential for calculus and physics because they link angle measure directly to the physical dimensions of a circle. A radian is fundamentally defined by the relationship between the arc length and the radius. Our first goal is to grasp this definition and understand why pi, the circumference constant, is so central to angular measurement.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-advanced-trig-radians.mp3'
    },
    display: {
      content: `# Introduction to Radian Measure

In advanced mathematics, **radian measure** is the standard unit for angles. Unlike degrees, which are arbitrary divisions (360 parts), radians are based on the geometric properties of the circle itself.

A **radian** is defined as the measure of a central angle \$\\theta\$ that subtends an arc length (\$s\$) equal to the radius (\$r\$) of the circle. This leads to the fundamental relationship between arc length, radius, and angle:

\$\$s = r\\theta \\quad (\\text{where } \\theta \\text{ is in radians})\$\$

This definition is critical because it simplifies many formulas in calculus and physics. Since the circumference of a circle is \$C = 2\\pi r\$, a full rotation (\$360°\$) corresponds to an arc length of \$2\\pi r\$. If we set \$r=1\$, then \$360° = 2\\pi\$ radians.

***

### First Problem: Understanding Radian Measure

Based on the definition of a radian, if a central angle \$\\theta\$ in a circle with radius \$r=5\$ centimeters intercepts an arc length \$s=5\$ centimeters, what is the measure of \$\\theta\$ in radians?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "unitCircle",
          "parameters": {
                "angle": 57.3,
                "showPoint": true,
                "showAngleArc": true,
                "angleMode": "radians"
          },
          "caption": "Visualization showing approximately 1 radian (≈ 57.3°), where the arc length equals the radius."
    }
  },
  /**
   * ========================================
   * S4 MATHEMATICS - Vectors
   * ========================================
   */
  's4-math-vectors-fundamentals': {
    speech: {
      text: `Welcome to Vector Fundamentals! Imagine trying to describe the wind or the movement of an airplane. You need more than just speed; you need direction. This is the essence of vectors. Unlike scalars, which only have magnitude, vectors have both magnitude and direction. In this first section, we will learn to distinguish between these two types of quantities and understand what makes two vectors equal or opposite. This foundation is crucial for mastering geometric operations like addition and subtraction later on. Let's start by looking at some basic vector representations.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-vectors-fundamentals.mp3'
    },
    display: {
      content: `# Introduction to Vector Fundamentals

Vectors are mathematical objects used to represent quantities that have both **magnitude (size)** and **direction**, such as force, velocity, and displacement. This distinguishes them from **scalars**, which only possess magnitude (like temperature, speed, or mass).

In this module, we start by understanding the geometric nature of vectors. Two vectors are considered **equal** if they have the same magnitude and the same direction, regardless of where they start. A vector is the **negative** of another if they have the same magnitude but point in the exact opposite direction.

Mastering this distinction—scalars versus vectors—is the essential first step before we dive into geometric operations like the Triangle and Parallelogram Laws of addition. Let's begin by identifying vector properties visually.

---

### First Problem: Scalars and Vectors

Observe the vectors **a**, **b**, **c**, and **d** in the diagram below.

Which vector is equal to **a**?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "vectorDiagram",
          "parameters": {
                "vectors": "[{\"label\":\"a\",\"x\":3,\"y\":2},{\"label\":\"b\",\"x\":-3,\"y\":-2},{\"label\":\"c\",\"x\":2,\"y\":3},{\"label\":\"d\",\"x\":3,\"y\":2}]",
                "operation": "none",
                "resultant": false,
                "showComponents": false,
                "gridSize": 5
          },
          "caption": "Four vectors shown on a grid."
    }
  },

  's4-math-vectors-component-form': {
    speech: {
      text: `Hello there! We are moving from the visual world of geometric vectors to the powerful realm of algebra. While drawing vectors helps us understand direction, calculating with them requires a coordinate system. This is where component form comes in. By breaking a vector down into its horizontal and vertical movements, we can perform complex operations easily using simple arithmetic. This section introduces the language of component notation, which is the cornerstone of advanced vector algebra.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-vectors-component-form.mp3'
    },
    display: {
      content: `# Component Form and Algebraic Methods

To move beyond drawing and measuring, we use **component form** to represent vectors algebraically. Any vector \$\\mathbf{v}\$ can be uniquely defined by how far it moves horizontally (the \$x\$-component) and how far it moves vertically (the \$y\$-component).

We typically use two notations for components: the **column vector** \$\\begin{pmatrix} x \\ y \\end{pmatrix}\$ or the **unit vector notation** \$x\\mathbf{i} + y\\mathbf{j}\$, where \$\\mathbf{i}\$ is the unit vector in the \$x\$-direction and \$\\mathbf{j}\$ is the unit vector in the \$y\$-direction.

This algebraic representation allows us to easily add, subtract, and scale vectors using simple arithmetic rules, making calculations fast and precise. Let's practice writing vectors in this new algebraic language.

---

### First Problem: Vectors in Component Form

Given two points, \$A=(2, 1)\$ and \$B=(5, 7)\$, find the component form of the displacement vector \$\\vec{AB}\$. Express your answer using column notation.`,
      showAfterSpeech: true
    }
  },

  's4-math-vectors-magnitude-ops': {
    speech: {
      text: `Hi! We've learned that a vector has both direction and magnitude. Now, let's focus on calculating that magnitude, which is simply the length or size of the vector. Whether you're calculating the speed of an object or the strength of a force, finding the magnitude is essential. Since vectors are defined by their components, we can use one of the most famous theorems in mathematics to find its length. Let's dive into the Pythagorean connection!`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-vectors-magnitude-ops.mp3'
    },
    display: {
      content: `# Magnitude of a Vector

The **magnitude** of a vector, often denoted by \$|\\mathbf{v}|\$ or \$||\\mathbf{v}||\$, represents its length or size. In physics, this might be the speed (for a velocity vector) or the force (for a force vector). Since a vector \$\\mathbf{v} = \\begin{pmatrix} x \\ y \\end{pmatrix}\$ forms the hypotenuse of a right-angled triangle with sides \$x\$ and \$y\$, we can calculate its magnitude using the Pythagorean theorem:

\$\$||\\mathbf{v}|| = \\sqrt{x^2 + y^2}\$\$

Understanding magnitude also leads us to the concept of a **unit vector**, which is a vector with a magnitude of exactly 1. Unit vectors are vital because they define direction without affecting size. Let's start by calculating the length of a simple vector.

---

### First Problem: The Magnitude of a Vector

Calculate the magnitude of the vector \$\\mathbf{a} = 5\\mathbf{i} - 12\\mathbf{j}\$.`,
      showAfterSpeech: true
    }
  },

  's4-math-vectors-parallelism': {
    speech: {
      text: `Greetings, future geometric proof master! In this module, we tackle parallelism, a concept that allows us to prove geometric relationships using pure vector algebra. How do you know if two paths are running side-by-side without ever intersecting? In vector language, two vectors are parallel if one is simply a scaled version of the other. This powerful idea is key to solving advanced geometry problems and proving collinearity. Let's unlock the scalar multiple condition!`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-vectors-parallelism.mp3'
    },
    display: {
      content: `# Parallelism and Geometric Applications

Two non-zero vectors, \$\\mathbf{a}\$ and \$\\mathbf{b}\$, are **parallel** if and only if one is a scalar multiple of the other. Mathematically, this means:

\$\$\\mathbf{a} = k\\mathbf{b}\$\$

where \$k\$ is a non-zero scalar (a real number). If \$k\$ is positive, the vectors point in the same direction; if \$k\$ is negative, they point in opposite directions.

This condition is fundamental in advanced vector geometry, allowing us to prove that lines are parallel or that three points are collinear (lie on the same straight line) without relying on visual inspection or complex coordinate geometry.

---

### First Problem: Parallelism

Determine whether the vector \$\\mathbf{p} = \\begin{pmatrix} 6 \\ 9 \\end{pmatrix}\$ is parallel to the vector \$\\mathbf{q} = \\begin{pmatrix} 2 \\ 3 \\end{pmatrix}\$. If they are parallel, find the scalar \$k\$ such that \$\\mathbf{p} = k\\mathbf{q}\$.`,
      showAfterSpeech: true
    }
  },

  's4-math-vectors-dot-product': {
    speech: {
      text: `Hey, get ready for an exciting new operation! We've added and subtracted vectors, but how do we multiply them? We introduce the Scalar Product, also known as the Dot Product. This operation is unique because multiplying two vectors results in a scalar, a single number, not another vector. Why is this number so important? It tells us about the relationship between the vectors, especially their angle. Most critically, if the dot product is zero, the vectors are perfectly perpendicular! Let's calculate our first scalar product.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s4-math-vectors-dot-product.mp3'
    },
    display: {
      content: `# The Scalar (Dot) Product

The **Scalar Product**, or **Dot Product** (denoted \$\\mathbf{a} \\cdot \\mathbf{b}\$), is a type of vector multiplication that yields a scalar (a number). It measures the extent to which two vectors point in the same direction and is defined algebraically by multiplying corresponding components and summing the results:

\$\$\\mathbf{a} \\cdot \\mathbf{b} = a_x b_x + a_y b_y\$\$

This operation is foundational for finding the angle between vectors and for testing perpendicularity. A key property is that if \$\\mathbf{a} \\cdot \\mathbf{b} = 0\$, then the vectors \$\\mathbf{a}\$ and \$\\mathbf{b}\$ are **perpendicular** (orthogonal).

In this section, we will master the calculation of the dot product and use it to classify the angle between vectors.

---

### First Problem: The Scalar (Dot) Product

Calculate the scalar product \$\\mathbf{a} \\cdot \\mathbf{b}\$ for the vectors \$\\mathbf{a} = \\begin{pmatrix} 4 \\ 1 \\end{pmatrix}\$ and \$\\mathbf{b} = \\begin{pmatrix} -2 \\ 5 \\end{pmatrix}\$.`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "dotProduct",
          "parameters": {
                "vector1X": 4,
                "vector1Y": 1,
                "vector2X": -2,
                "vector2Y": 5,
                "label1": "a",
                "label2": "b",
                "showAngle": false,
                "showDotProduct": true,
                "showMagnitudes": false
          },
          "caption": "Visualizing vectors a and b for the dot product calculation."
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
  },
  /**
   * ========================================
   * S2 TRIGONOMETRIC RATIOS
   * ========================================
   */

  's2-math-trig-ratios-introduction': {
    speech: {
      text: `Welcome! Have you ever wondered how we measure things we cannot physically reach? Trigonometry is the answer, and it all starts with recognizing the relationships between sides in a right triangle. Let us start by mastering the language of trigonometry.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-trig-ratios-introduction.mp3'
    },
    display: {
      content: `### Introduction to Trigonometric Ratios

For the right triangle shown below, if we focus on angle \$A\$, which side is the **Opposite** side?

*   a) Side x
*   b) Side y
*   c) Side z`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "rightTriangle",
          "parameters": {
                "angle": null,
                "angleLabel": "A",
                "hypotenuse": "z",
                "opposite": "x",
                "adjacent": "y",
                "highlightSide": "none",
                "showAngleMark": true,
                "showRightAngle": true,
                "showSideTypeLabels": false
          },
          "caption": "A right triangle with sides x, y, z and angle A."
    }
  },

  's2-math-trig-ratios-finding-sides-sine': {
    speech: {
      text: `Hey there! Ready to put the Sine ratio into action? Sine is our first major tool for calculating unknown lengths. When you know the angle and the hypotenuse, Sine is the key to unlocking the opposite side. Let us calculate our first unknown length!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-trig-ratios-finding-sides-sine.mp3'
    },
    display: {
      content: `### Finding Sides Using Sine

Use the Sine ratio to find the length of the opposite side, \$x\$. Round your answer to two decimal places.

(Given: \$\\sin(40°) \\approx 0.6428\$)`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "rightTriangle",
          "parameters": {
                "angle": 40,
                "angleLabel": "40°",
                "hypotenuse": "15",
                "opposite": "x",
                "adjacent": "",
                "highlightSide": "opposite",
                "showAngleMark": true,
                "showRightAngle": true,
                "showSideTypeLabels": false
          },
          "caption": "A right triangle with angle 40°, hypotenuse 15, and opposite side x."
    }
  },

  's2-math-trig-ratios-finding-sides-cos-tan': {
    speech: {
      text: `Greetings! We have already mastered Sine, and now we are expanding our toolkit. If Sine deals with the opposite side, what about the adjacent side? That is where Cosine comes in! It is just as straightforward, focusing on the relationship between the adjacent side and the hypotenuse.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-trig-ratios-finding-sides-cos-tan.mp3'
    },
    display: {
      content: `### Finding Sides Using Cosine

In the triangle below, calculate the length of the adjacent side, \$y\$. Round your final answer to one decimal place.

(Use \$\\cos(55°) \\approx 0.5736\$)`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "rightTriangle",
          "parameters": {
                "angle": 55,
                "angleLabel": "55°",
                "hypotenuse": "20 cm",
                "opposite": "",
                "adjacent": "y",
                "highlightSide": "adjacent",
                "showAngleMark": true,
                "showRightAngle": true,
                "showSideTypeLabels": false
          },
          "caption": "A right triangle with angle 55°, hypotenuse 20 cm, and adjacent side y."
    }
  },

  's2-math-trig-ratios-finding-angles': {
    speech: {
      text: `Hello! Up until now, we have used angles to find sides. But what if the angle itself is the mystery? We need a mathematical key to unlock that angle! This is where inverse trigonometric functions become essential. Let us try finding our first unknown angle.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-trig-ratios-finding-angles.mp3'
    },
    display: {
      content: `### Finding Unknown Angles

Find the measure of angle \$\\theta\$ in the right triangle shown below. Round your answer to the nearest whole degree.

(Hint: Which ratio relates the Opposite and Adjacent sides?)`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "rightTriangle",
          "parameters": {
                "angle": null,
                "angleLabel": "θ",
                "hypotenuse": "",
                "opposite": "12 ft",
                "adjacent": "15 ft",
                "highlightSide": "none",
                "showAngleMark": true,
                "showRightAngle": true,
                "showSideTypeLabels": false
          },
          "caption": "A right triangle with opposite side 12 ft and adjacent side 15 ft relative to angle θ."
    }
  },

  's2-math-trig-ratios-real-world-applications': {
    speech: {
      text: `Hi! It is time to take trigonometry out of the textbook and into the real world! Trigonometry is incredibly useful for navigation, architecture, and surveying. We start by understanding how we measure angles when looking up, elevation, or looking down, depression. This concept is fundamental to solving complex application problems.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-trig-ratios-real-world-applications.mp3'
    },
    display: {
      content: `### Angles of Elevation and Depression

A person standing 50 meters away from a lighthouse looks up at the light at the top. The angle formed between the horizontal line of sight and the line of sight up to the light is 25°.

What term describes this 25° angle?

*   a) Angle of Depression
*   b) Angle of Incidence
*   c) Angle of Elevation`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "elevationDepression",
          "parameters": {
                "type": "elevation",
                "angle": 25,
                "height": "h",
                "distance": "50 m",
                "observerLabel": "Person",
                "targetLabel": "Light",
                "showTriangle": true,
                "showRightAngle": true,
                "highlightSide": "none"
          },
          "caption": "A visual representation of a person looking up at a lighthouse, showing the angle of elevation."
    }
  },
  /**
   * ========================================
   * S2 TRIGONOMETRIC RATIOS
   * ========================================
   */

  's2-math-probability-experiments-sample-space': {
    speech: {
      text: `Hey there! Ready to unlock the secrets of chance? Probability starts with understanding the boundaries of what can happen. We begin by defining the sample space for different experiments.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-probability-experiments-sample-space.mp3'
    },
    display: {
      content: `### Understanding Probability Experiments

Probability experiments are processes that lead to well-defined outcomes. The **sample space** is the set of all possible outcomes.

**Problem:** If you roll a standard six-sided die once, what is the sample space (S) for this experiment? List all elements.`,
      showAfterSpeech: true
    }
  },

  's2-math-probability-basic-calculation': {
    speech: {
      text: `Welcome! Today, we are starting with the foundation of probability: calculating the chance of an event when all outcomes are equally likely. Think of flipping a fair coin—the math is straightforward once you know the rules.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-probability-basic-calculation.mp3'
    },
    display: {
      content: `### Equally Likely Outcomes and Fair Experiments

When outcomes are equally likely, the probability of an event (E) is calculated as \$P(E) = \\frac{\\text{Number of Favorable Outcomes}}{\\text{Total Number of Outcomes}}\$.

**Problem:** A standard deck contains 52 cards. If you draw one card randomly, what is the probability of drawing a red Queen? (Express your answer as a simplified fraction.)`,
      showAfterSpeech: true
    }
  },

  's2-math-probability-experimental': {
    speech: {
      text: `Greetings, math explorer! We are moving beyond perfect theory and into the messy, fascinating world of real data. What happens when we actually run the experiment? This section compares the ideal probability with what we observe in practice.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-probability-experimental.mp3'
    },
    display: {
      content: `### Experimental vs Theoretical Probability

**Theoretical Probability** is what *should* happen (like P(Heads) = \$\\frac{1}{2}\$). **Experimental Probability** is what *actually* happens based on trials.

**Problem:** A student flips a coin 50 times. It lands on heads 28 times. Based on this data, what is the experimental probability of flipping heads? (Express your answer as a simplified fraction.)`,
      showAfterSpeech: true
    }
  },

  's2-math-probability-advanced-single-event': {
    speech: {
      text: `Hi there! We are tackling a specialized area of probability now: situations where outcomes are not equally likely, but depend on geometric measures like angles or area. This requires us to use ratios of measures rather than just counting items.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-probability-advanced-single-event.mp3'
    },
    display: {
      content: `### Probability with Non-Equally Likely Outcomes (Angles and Sectors)

For spinners and sectors, probability is determined by the ratio of the favorable angle to the total angle (360°).

**Problem:** A spinner is divided into three sectors: Red (90°), Blue (120°), and Green (150°). If the spinner is spun once, what is the probability that it lands on the Blue sector? (Express your answer as a simplified fraction.)`,
      showAfterSpeech: true
    }
  },
  /**
   * ========================================
   * S2 STATISTICAL DIAGRAM
   * ========================================
   */
  's2-math-statistical-diagrams-introduction': {
    speech: {
      text: `Welcome! Before we draw beautiful charts, we need to understand the raw material: data. Data comes in different types, and knowing the type tells us which diagram to use. Let us start by classifying a common type of data.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-statistical-diagrams-introduction.mp3'
    },
    display: {
      content: `### Understanding Data Types

Data can generally be classified as **Qualitative (Categorical)** or **Quantitative (Numerical)**.

Which category does the data collected from asking students their **favorite type of music** fall into?`,
      showAfterSpeech: true
    }
  },

  's2-math-statistical-diagrams-dot-diagrams': {
    speech: {
      text: `Hey there! Dot diagrams are fantastic because they let us see every single piece of data while still showing the frequency. Each dot represents one observation. Look at the diagram we have created and tell me what the most common result is.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-statistical-diagrams-dot-diagrams.mp3'
    },
    display: {
      content: `### Understanding Dot Diagrams

The dot diagram below shows the number of pets owned by students in a class.

What is the **mode** (the most frequent number of pets owned) shown in the diagram?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "dotDiagram",
          "parameters": {
                "values": [
                      1,
                      2,
                      0,
                      1,
                      3,
                      2,
                      1,
                      1,
                      2,
                      0,
                      4,
                      1
                ],
                "xLabel": "Number of Pets",
                "title": "Pets Owned Per Student",
                "showMode": true
          },
          "caption": "Dot diagram showing the frequency of pets owned by students."
    }
  },

  's2-math-statistical-diagrams-histograms-ungrouped': {
    speech: {
      text: `Greetings, future statistician! When you have a lot of individual numbers, the first step to making sense of them is organizing them into a frequency table. This step is crucial for building our first histogram. Take this small set of raw scores and calculate the frequency for the score of 4.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-statistical-diagrams-histograms-ungrouped.mp3'
    },
    display: {
      content: `### Creating Frequency Tables

We have the following raw data representing the scores (out of 5) achieved by 15 students in a quick quiz:

\$\$3, 4, 1, 5, 2, 4, 3, 4, 5, 1, 4, 2, 3, 4, 4\$\$

What is the **frequency** of the score **4** in this dataset?`,
      showAfterSpeech: true
    }
  },

  's2-math-statistical-diagrams-stem-and-leaf': {
    speech: {
      text: `Hi! Stem and leaf plots are one of the cleverest ways to display data because they organize it while still preserving the original values. It is like having a sorted list and a graph all in one! To begin, we need to know how to separate a data point into its stem and its leaf.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-statistical-diagrams-stem-and-leaf.mp3'
    },
    display: {
      content: `### Basic Stem-and-Leaf Construction

In a stem-and-leaf diagram, each data point is split into two parts: the **stem** (the leading digit(s)) and the **leaf** (the last digit).

If the data value is **37**, what number represents the **stem** and what number represents the **leaf**?`,
      showAfterSpeech: true
    }
  },

  's2-math-statistical-diagrams-histograms-grouped': {
    speech: {
      text: `Hello, and great to see you! When dealing with continuous data or data spread over a very wide range, we cannot count every single number. We have to group them. This means creating class intervals. If we are measuring heights, what is the width of the interval 150 centimeters to 160 centimeters?`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-statistical-diagrams-histograms-grouped.mp3'
    },
    display: {
      content: `### Understanding Class Intervals

When grouping continuous data, a **class interval** is a range of values. The **class width** is the difference between the upper and lower boundaries of the interval.

Calculate the class width for the interval \$150 \\le x < 160\$.`,
      showAfterSpeech: true
    }
  },
  /**
   * ========================================
   * S2 STATISTICAL DIAGRAM
   * ========================================
   */
  's2-math-averages-introduction': {
    speech: {
      text: `Welcome to the world of averages! Data can often look like a confusing jumble of numbers, but central tendency helps us find one single value that best represents the whole group. Think of it as finding the typical or summary value. Let us start with a simple conceptual question to set the stage.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-averages-introduction.mp3'
    },
    display: {
      content: `### Understanding Central Tendency

Imagine you have collected the daily high temperature for a month. If you wanted to report the "typical" temperature for that month using just one number, which concept would you be applying?

A) Data Range
B) Central Tendency
C) Data Spread
D) Frequency Distribution`,
      showAfterSpeech: true
    }
  },

  's2-math-averages-mean': {
    speech: {
      text: `Hey there! Ready to calculate the most common type of average, the mean? The mean is often called the arithmetic average, and it is all about finding the perfect 'fair share.' If we added up all the values and divided them equally, what would each share be? Let us calculate the mean of the following small dataset.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-averages-mean.mp3'
    },
    display: {
      content: `### Mean of Raw Data

A small bakery sold the following number of loaves of bread over four days: 10, 15, 20, and 5.

What is the mean number of loaves sold per day?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "dotDiagram",
          "parameters": {
                "values": [
                      10,
                      15,
                      20,
                      5
                ],
                "xLabel": "Loaves Sold",
                "title": "Daily Loaf Sales",
                "showTickLabels": true
          },
          "caption": "A dot diagram showing the number of loaves sold each day."
    }
  },

  's2-math-averages-median': {
    speech: {
      text: `Greetings! Today we are focusing on the median, which is all about finding the exact middle value in a dataset. Remember, the first critical step is always to put the numbers in order! Since we have an odd number of values here, the median will be one of the data points itself.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-averages-median.mp3'
    },
    display: {
      content: `### Finding Median When Number of Values is Odd

Five students reported the number of hours they spent studying last week: 12, 5, 8, 15, 10.

What is the median number of hours studied?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "dotDiagram",
          "parameters": {
                "values": [
                      12,
                      5,
                      8,
                      15,
                      10
                ],
                "xLabel": "Hours Studied",
                "title": "Study Hours Per Week",
                "showTickLabels": true
          },
          "caption": "A dot diagram showing the raw data points for study hours."
    }
  },

  's2-math-averages-mode': {
    speech: {
      text: `Hi! Are you prepared to find the most popular number in a data set? That is exactly what the mode is—the value that appears most often. Unlike the mean or median, the mode is the easiest average to spot just by looking at the frequencies! Let us identify the mode in this set of test scores.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-averages-mode.mp3'
    },
    display: {
      content: `### Finding Mode from Raw Data

Seven students took a short quiz and earned the following scores (out of 10): 7, 8, 9, 7, 10, 6, 7.

What is the mode of this data set?`,
      showAfterSpeech: true
    },
    mathTool: {
          "toolName": "dotDiagram",
          "parameters": {
                "values": [
                      7,
                      8,
                      9,
                      7,
                      10,
                      6,
                      7
                ],
                "xLabel": "Quiz Score",
                "title": "Student Quiz Scores",
                "showMode": true,
                "showFrequencies": true
          },
          "caption": "A dot diagram showing the frequency of each quiz score, with the mode highlighted."
    }
  },

  's2-math-averages-choosing': {
    speech: {
      text: `Hello! We are moving beyond calculation and into critical thinking. We know how to find the mean, median, and mode, but when should we actually use the mean over the others? It is important to consider the structure and shape of the data before choosing the best representative average.`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s2-math-averages-choosing.mp3'
    },
    display: {
      content: `### When to Use the Mean

When analyzing a dataset, what is the primary characteristic of the data distribution that makes the **mean** the most appropriate measure of central tendency?`,
      showAfterSpeech: true
    }
  },

  /**
   * ========================================
   * P5 MATHEMATICS - NUMBERS UP TO 10 MILLION
   * ========================================
   */
  'p5-math-numbers-10-million-place-value': {
    speech: {
      text: `Hello! Welcome to our lesson on big numbers! Today we're going to learn about numbers up to one million and even bigger! Have you ever wondered how to read really big numbers like three million, four hundred and fifty-six thousand, seven hundred and eighty-nine? That's a lot of digits! But don't worry, I'll show you a clever trick using a place value chart. Each digit has its own special spot that tells us exactly how much it's worth. Let's start by figuring out how many hundred thousands make one million!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-numbers-10-million-place-value.mp3'
    },
    display: {
      content: `# Welcome to Numbers up to 10 Million!

Today we'll explore the amazing world of **large numbers**! You'll learn how to read numbers with millions, understand what each digit means, and use place value charts like a pro.

**Did you know?** One million is written as 1,000,000 - that's a 1 followed by 6 zeros!

---

### Let's Start: Building to One Million

How many **hundred thousands** do you need to make **one million**?

*Hint: Think about counting by hundred thousands: 100,000... 200,000... 300,000...*`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "placeValueChart",
      parameters: {
        number: 1000000,
        showExpandedForm: false,
        showWords: true,
        showColumnValues: true
      },
      caption: "A place value chart showing one million - notice how the 1 is in the millions column!"
    }
  },

  'p5-math-numbers-10-million-writing-representing': {
    speech: {
      text: `Hi there! Now that you understand place values, let's learn how to write numbers in different ways. Sometimes you'll see numbers written with digits like three comma five six four comma one two seven. Other times you'll see them written in words like three million, five hundred sixty-four thousand, one hundred twenty-seven. And sometimes you'll even see them shown with colorful number discs! Being able to switch between these different ways of showing the same number is a super useful skill. Let's practice converting a number written in words into digits!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-numbers-10-million-writing-representing.mp3'
    },
    display: {
      content: `# Writing & Representing Numbers

Now let's learn to write numbers in different ways:
- **Standard form**: 3,564,127 (using digits)
- **Word form**: Three million, five hundred sixty-four thousand, one hundred twenty-seven
- **Expanded form**: 3,000,000 + 500,000 + 60,000 + 4,000 + 100 + 20 + 7

---

### First Challenge: Words to Numbers

Write this number using digits:

**"Five million, two hundred and thirty thousand, eight hundred and fifteen"**

*Remember: Start with the millions, then the thousands, then the rest!*`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "placeValueChart",
      parameters: {
        number: 5230815,
        showExpandedForm: true,
        showWords: true,
        showColumnValues: true
      },
      caption: "Here's what the answer looks like in a place value chart!"
    }
  },

  'p5-math-numbers-10-million-comparing-ordering': {
    speech: {
      text: `Hello! You've become great at reading and writing big numbers. Now let's learn how to compare them! When you have two big numbers, how do you know which one is bigger? The trick is to start from the left side, from the biggest place value, and work your way right until you find a digit that's different. We use special symbols: the less than sign, the greater than sign, and the equals sign. Think of the less than and greater than signs like a hungry crocodile's mouth - it always wants to eat the bigger number! Let's try comparing some numbers!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-numbers-10-million-comparing-ordering.mp3'
    },
    display: {
      content: `# Comparing & Ordering Large Numbers

When comparing big numbers, remember:
- **<** means "less than" (smaller number first)
- **>** means "greater than" (bigger number first)
- **=** means "equal to"

**The Crocodile Trick**: The crocodile's mouth always opens toward the bigger number!

---

### First Challenge: Which is Greater?

Compare these two numbers using **<**, **>**, or **=**:

**4,567,890** _____ **4,576,890**

*Hint: Start comparing from the left (millions place). When are the digits different?*`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "placeValueChart",
      parameters: {
        number: 4567890,
        showExpandedForm: false,
        showWords: false,
        highlightPlace: "tenThousands",
        showColumnValues: true
      },
      caption: "Look at the place value chart - where do the two numbers first become different?"
    }
  },

  /**
   * ========================================
   * P5 MATHEMATICS - FOUR OPERATIONS ON WHOLE NUMBERS
   * ========================================
   */
  'p5-math-four-operations-multiply-10-100-1000': {
    speech: {
      text: `Hello there! Today we are going to discover some awesome patterns in multiplication! When you multiply by 10, 100, or 1000, something magical happens to the digits. Instead of doing long multiplication, there is a super quick shortcut! Are you ready to become a multiplication wizard?`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-four-operations-multiply-10-100-1000.mp3'
    },
    display: {
      content: `# Multiplying by 10, 100 and 1000

Today we'll discover the **pattern** that makes multiplying by 10, 100, and 1000 super easy!

**Did you know?** Instead of doing long multiplication, there's a shortcut that works every time!

---

### Let's Start: The Magic of Times 10

What do you notice about these multiplications?

- 3 × 10 = **30**
- 12 × 10 = **120**
- 245 × 10 = **2,450**

*What happens to each number when we multiply by 10?*`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "placeValueChart",
      parameters: {
        number: 2450,
        showExpandedForm: false,
        showWords: true,
        showColumnValues: true
      },
      caption: "Watch how the digit 245 becomes 2,450 when multiplied by 10 - each digit shifts one place to the left!"
    }
  },

  'p5-math-four-operations-multiply-tens-hundreds-thousands': {
    speech: {
      text: `Excellent! Now that you know how to multiply by 10, 100, and 1000, we can tackle even bigger multiplications! What if you need to multiply by 20, or 60, or 400? There is a clever trick using what you already know. We break the number into parts and multiply step by step!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-four-operations-multiply-tens-hundreds-thousands.mp3'
    },
    display: {
      content: `# Multiplying by Tens, Hundreds and Thousands

Now we'll learn to multiply by numbers like **20, 60, 400, 600**!

**The Secret:** Break it into two steps using what you already know!

---

### Let's Start: Multiplying by 20

To multiply 43 × 20, think of it as:
- 20 = **2 × 10**
- So: 43 × 20 = 43 × 2 × 10

What is 43 × 2? Then multiply your answer by 10!

*Hint: 43 × 2 = 86, then 86 × 10 = ?*`,
      showAfterSpeech: true
    }
  },

  'p5-math-four-operations-divide-10-100-1000': {
    speech: {
      text: `Great job with multiplication! Now let us learn the opposite, division! When you divide by 10, 100, or 1000, the digits shift the other way. If multiplying adds zeros, can you guess what dividing does? Let us find out together!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-four-operations-divide-10-100-1000.mp3'
    },
    display: {
      content: `# Dividing by 10, 100 and 1000

Division is the **opposite** of multiplication! If multiplying by 10 adds a zero, what does dividing by 10 do?

---

### Let's Start: The Pattern

Look at these divisions:

- 30 ÷ 10 = **3**
- 320 ÷ 10 = **32**
- 32,000 ÷ 10 = **3,200**

*What happens to each number when we divide by 10?*

**Check:** You can verify by multiplying back! Does 3 × 10 = 30?`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "placeValueChart",
      parameters: {
        number: 3200,
        showExpandedForm: false,
        showWords: true,
        showColumnValues: true
      },
      caption: "When we divide 32,000 by 10, each digit shifts one place to the right, giving us 3,200!"
    }
  },

  'p5-math-four-operations-divide-tens-hundreds-thousands': {
    speech: {
      text: `Awesome! Now let us use what we know to divide by bigger numbers like 20, 60, or 400. Just like with multiplication, we can break the division into two steps. First divide by 10 or 100, then divide by the remaining digit!`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-four-operations-divide-tens-hundreds-thousands.mp3'
    },
    display: {
      content: `# Dividing by Tens, Hundreds and Thousands

We can divide by **20, 60, 400, 600** using two steps!

**The Strategy:** Break it down!
- 20 = 2 × 10, so ÷ 20 = ÷ 10 ÷ 2

---

### Let's Try: 860 ÷ 20

Step 1: 860 ÷ 10 = ?
Step 2: Then divide by 2

*What answer do you get?*

**Check your work:** Does your answer × 20 = 860?`,
      showAfterSpeech: true
    }
  },

  'p5-math-four-operations-order-of-operations': {
    speech: {
      text: `Now for something really important! When you see a math expression like 6 plus 8 times 3, which operation do you do first? Is the answer 42 or 30? There is a rule that tells us the correct order to follow, and everyone in the world uses the same rule! Let us learn it together.`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-four-operations-order-of-operations.mp3'
    },
    display: {
      content: `# Order of Operations

When you see: **6 + 8 × 3**

Is the answer **42** or **30**?

Only ONE answer is correct! There's a rule that everyone follows:
- **Multiplication and Division** come FIRST
- **Addition and Subtraction** come SECOND

---

### Let's Find Out!

**6 + 8 × 3 = ?**

Which operation should you do first - the addition or the multiplication?

*Hint: Remember, × and ÷ are "stronger" than + and −*`,
      showAfterSpeech: true
    }
  },

  'p5-math-four-operations-order-with-brackets': {
    speech: {
      text: `Here comes the VIP of math operations, the brackets! Brackets are like a fast pass at a theme park, they get to go first no matter what! When you see brackets, you ALWAYS work out what is inside them first. Brackets can completely change your answer!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-four-operations-order-with-brackets.mp3'
    },
    display: {
      content: `# Order of Operations with Brackets

**Brackets are the VIP!** They ALWAYS come first!

Compare these two expressions:
- 6 + 8 × 3 = **30** (multiply first)
- **(6 + 8)** × 3 = **42** (brackets first!)

The brackets changed the answer!

---

### Full Order of Operations:

1. **BRACKETS** - do what's inside first
2. **× and ÷** - multiplication and division
3. **+ and −** - addition and subtraction

What is **(16 - 4) ÷ 2**?`,
      showAfterSpeech: true
    }
  },

  'p5-math-four-operations-word-problems': {
    speech: {
      text: `Now let us put everything together! Real life problems often involve multiple steps and different operations. We will learn to use bar models to help us see the relationships between numbers. Bar models are like a map that shows us exactly what we need to do!`,
      emotion: 'supportive',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-four-operations-word-problems.mp3'
    },
    display: {
      content: `# Word Problems with Bar Models

Bar models help us **see** the problem clearly!

**Problem-Solving Steps:**
1. **READ** - What do we know? What do we need to find?
2. **DRAW** - Create a bar model
3. **SOLVE** - Choose the operations and calculate
4. **CHECK** - Does the answer make sense?

---

### Let's Try One!

Ahmad has \\$850. Mei Ling has \\$650.

**How much more money does Ahmad have than Mei Ling?**

*What operation do we need? Addition or subtraction?*`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "barModel",
      parameters: {
        title: "Comparing Ahmad and Mei Ling's Money",
        bars: [
          { label: "Ahmad", segments: [{ value: "$850" }] },
          { label: "Mei Ling", segments: [{ value: "$650" }, { value: "?", highlight: true }] }
        ],
        showUnitDividers: false
      },
      caption: "The bar model shows that Ahmad's bar is longer. The difference (?) is what we need to find!"
    }
  },

  /**
   * ========================================
   * P5 FRACTIONS AND DIVISION TOPIC GREETINGS
   * ========================================
   */
  'p5-math-fractions-divisions-whole-numbers': {
    speech: {
      text: `Hello! Today we are going to discover something amazing. Did you know that division and fractions are the same thing? When you share one pizza equally among three friends, each person gets one third. So 1 divided by 3 equals one third! Let us explore this together with some fun sharing problems!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-fractions-divisions-whole-numbers.mp3'
    },
    display: {
      content: `# Division of Whole Numbers as Fractions

Today we'll discover something amazing: **Division and Fractions are the same thing!**

---

### Think About This:

When you share **1 pizza** equally among **3 friends**:
- Each person gets **1/3** of the pizza
- So: 1 ÷ 3 = 1/3

The **numerator** is what you're sharing.
The **denominator** is how many people are sharing.

*What fraction does each person get if 2 pizzas are shared among 3 friends?*`,
      showAfterSpeech: true
    },
  },

  'p5-math-fractions-divisions-decimals': {
    speech: {
      text: `Great work with fractions! Now let us learn to express fractions as decimals. You already know that three tenths is zero point three. But what about fractions like one half or one quarter? We can convert them too! There are some really cool methods, and I will show you the tricks!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-fractions-divisions-decimals.mp3'
    },
    display: {
      content: `# Expressing Fractions as Decimals

Fractions and decimals are different ways to show the **same number**!

---

### Quick Reminder:

| Fraction | Decimal |
|:--------:|:-------:|
| 3/10 | 0.3 |
| 14/100 | 0.14 |
| 1/2 | 0.5 |
| 1/4 | 0.25 |

**Methods to Convert:**
1. If denominator is 10 or 100 → Easy! Just use place value
2. Find an equivalent fraction with 10 or 100
3. Use long division

*What is 3/10 as a decimal?*`,
      showAfterSpeech: true
    }
  },

  // ============================================
  // P5 FOUR OPERATIONS OF FRACTIONS
  // ============================================

  'p5-math-four-operations-fractions-add-subtract-mixed': {
    speech: {
      text: `Welcome to adding and subtracting mixed numbers! You have already learned to work with proper fractions. Now we take it up a notch with mixed numbers, those numbers with a whole part and a fraction part, like two and three quarters. The key is finding a common denominator and then handling the whole numbers cleverly. Let me show you!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-four-operations-fractions-add-subtract-mixed.mp3'
    },
    display: {
      content: `# Addition and Subtraction of Mixed Numbers

Mixed numbers have a **whole part** and a **fraction part**!

---

### Remember:
- 2¾ means 2 + ¾
- To add or subtract mixed numbers with **unlike denominators**, first find a common denominator

### Key Steps:
1. Find the **common denominator**
2. Convert the fractions
3. Add or subtract the fractions
4. Add or subtract the whole numbers
5. **Simplify** if needed

*Can you add 1⅔ + 2¼?*`,
      showAfterSpeech: true
    }
  },

  'p5-math-four-operations-fractions-multiply-fraction-whole': {
    speech: {
      text: `Let us learn to multiply fractions and whole numbers! Here is a secret: the word "of" in math often means multiply. So when we say three fifths of twenty, we actually mean three fifths times twenty. We will use bar models to see what this looks like. This is really useful for solving real problems!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-four-operations-fractions-multiply-fraction-whole.mp3'
    },
    display: {
      content: `# Multiplying a Fraction and a Whole Number

**"Of" means multiply!**

---

### The Big Idea:
- ⅗ **of** 20 means ⅗ × 20
- First find ONE part, then find the required parts

### Method:
1. Divide by the **denominator** (find one part)
2. Multiply by the **numerator** (find required parts)

### Example:
- ⅗ of 20
- 20 ÷ 5 = 4 (one fifth)
- 4 × 3 = 12 (three fifths)

*What is ¾ of 24?*`,
      showAfterSpeech: true
    }
  },

  'p5-math-four-operations-fractions-multiply-two-fractions': {
    speech: {
      text: `Ready for something cool? Multiplying two fractions! Unlike adding fractions, you do not need a common denominator here. Just multiply the numerators together and the denominators together. But wait, there is a smart shortcut called cancelling that makes the numbers smaller before you multiply. Let me show you!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-four-operations-fractions-multiply-two-fractions.mp3'
    },
    display: {
      content: `# Multiplying Two Fractions

Multiply across: **numerator × numerator** and **denominator × denominator**!

---

### The Rule:
$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$

### Smart Shortcut - Cancelling:
Cancel **common factors** before multiplying to get smaller numbers!

### Example:
$$\\frac{2}{3} \\times \\frac{3}{4}$$

Cancel the 3s: $$\\frac{2}{\\cancel{3}} \\times \\frac{\\cancel{3}}{4} = \\frac{2}{4} = \\frac{1}{2}$$

*What is ⅔ × ¾?*`,
      showAfterSpeech: true
    }
  },

  'p5-math-four-operations-fractions-multiply-mixed-whole': {
    speech: {
      text: `Now we will multiply mixed numbers by whole numbers! The trick is to convert the mixed number to an improper fraction first. Remember, two and a half is the same as five halves. Then multiply like we learned before. Finally, convert back to a mixed number. Let us practice!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-four-operations-fractions-multiply-mixed-whole.mp3'
    },
    display: {
      content: `# Multiplying a Mixed Number and a Whole Number

**Convert → Multiply → Simplify**

---

### The Method:
1. **Convert** the mixed number to an improper fraction
2. **Multiply** with the whole number
3. **Convert** back to a mixed number

### Converting Mixed to Improper:
2½ = (2 × 2 + 1)/2 = 5/2

### Example:
2½ × 3
= 5/2 × 3
= 15/2
= 7½

*What is 1¾ × 4?*`,
      showAfterSpeech: true
    }
  },

  'p5-math-four-operations-fractions-word-problems': {
    speech: {
      text: `Time to put all your fraction skills together with word problems! We will solve real world problems using addition, subtraction, and multiplication of fractions. Bar models will help us visualize what is happening in each problem. Remember, the word "of" usually means multiply, while "more than" and "less than" tell us to add or subtract. Let us tackle some interesting challenges!`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-four-operations-fractions-word-problems.mp3'
    },
    display: {
      content: `# Word Problems with Fractions

Solving real-world problems with **all fraction operations**!

---

### Problem-Solving Strategy:
1. **Read** - identify what's given and what to find
2. **Draw** - create a bar model
3. **Solve** - set up operations and calculate
4. **Check** - verify your answer makes sense

### Key Phrases:
- **"more than" / "less than"** → Addition/Subtraction
- **"of"** → Multiplication

### Problem Types:
- Addition & subtraction word problems
- Finding fractions of totals
- Multi-step problems with remainders

*Let's solve some problems together!*`,
      showAfterSpeech: true
    }
  },

  // ============================================
  // P5 MATHEMATICS - Area of Triangle
  // ============================================

  'p5-math-area-triangle-base-height': {
    speech: {
      text: `Welcome to learning about the base and height of triangles! Every triangle has a base and a height. The base can be any side of the triangle. The height is the perpendicular distance from the base to the opposite vertex, it always makes a ninety degree angle with the base. Sometimes the height falls inside the triangle, and sometimes it falls outside. Let us explore this together!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-area-triangle-base-height.mp3'
    },
    display: {
      content: `# Base and Height of a Triangle

Every triangle has a **base** and a **height**!

---

### Key Concepts:
- **Base**: Any side of the triangle
- **Height**: The perpendicular distance from the base to the opposite vertex
- Height always meets the base at **90°** (right angle)

### Important:
- ANY side can be the base
- Each base has its own corresponding height
- Height can be **inside** or **outside** the triangle

Ready to identify base and height in different triangles?`,
      showAfterSpeech: true
    }
  },

  'p5-math-area-triangle-formula': {
    speech: {
      text: `Now let us learn the formula for the area of a triangle! Here is the big idea: a triangle is exactly half of a rectangle with the same base and height. That is why the formula is one half times base times height. We write it as Area equals one half times base times height. Once you know the base and height, just multiply them and divide by two!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-area-triangle-formula.mp3'
    },
    display: {
      content: `# Area of a Triangle

A triangle is **half** of a rectangle!

---

### The Formula:
$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$$

### Why does this work?
- A triangle is exactly **half** of a rectangle with the same base and height
- Area of rectangle = base × height
- Area of triangle = ½ × base × height

### Remember:
- Use the **perpendicular** height (not the slanted side!)
- Don't forget to include **units²** in your answer

Let's calculate some triangle areas!`,
      showAfterSpeech: true
    }
  },

  'p5-math-area-triangle-composite': {
    speech: {
      text: `Time to tackle composite figures, shapes made from triangles and other shapes! There are two main strategies. First, the split and add method: break the figure into simpler shapes, find each area, then add them together. Second, the take away method: start with a larger shape and subtract the pieces that are cut out. Let us learn both approaches!`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-area-triangle-composite.mp3'
    },
    display: {
      content: `# Area of Composite Figures

Find the area of shapes made from **triangles and rectangles**!

---

### Method 1: Split and Add
1. **Split** the figure into triangles and rectangles
2. Find the **area** of each part
3. **Add** all the areas together

### Method 2: Take Away
1. Start with a **larger** simple shape
2. Find the area of the **cutout**
3. **Subtract** the cutout from the larger shape

### When to use which?
- **Split and Add**: Figure is made of joined shapes
- **Take Away**: Shape has parts "cut out"

Let's solve some composite figure problems!`,
      showAfterSpeech: true
    }
  },

  // ============================================
  // P5 MATHEMATICS - Volume
  // ============================================

  'p5-math-volume-unit-cubes': {
    speech: {
      text: `Welcome to learning about volume! Volume is the amount of space inside a solid object. Imagine filling a box with small cubes. Each small cube is called a unit cube, and it takes up exactly one cubic unit of space. We can find the volume of a solid by counting how many unit cubes fit inside it. Remember to count the hidden cubes too, not just the ones you can see on the outside!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-volume-unit-cubes.mp3'
    },
    display: {
      content: `# Understanding Volume with Unit Cubes

**Volume** is the amount of space inside a solid object!

---

### Key Concepts:
- A **unit cube** is a cube with edges of 1 unit
- Volume of a unit cube = **1 cubic unit**
- We find volume by **counting** how many unit cubes fit inside

### Important:
- Remember to count **hidden cubes** inside the solid!
- A helpful strategy: count cubes in one layer, then multiply by the number of layers

Ready to count some cubes?`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "unitCubeGrid",
      parameters: {
        cubesAlong: 3,
        cubesDeep: 2,
        cubesHigh: 2
      },
      caption: "A cuboid made of unit cubes. Can you count how many cubes there are?"
    }
  },

  'p5-math-volume-cubic-units': {
    speech: {
      text: `Now let us learn about the units we use to measure volume! A cubic centimetre, written as centimetres cubed, is the space taken up by a cube with edges of one centimetre. It is about the size of your fingertip! For larger objects like rooms or swimming pools, we use cubic metres. A cubic metre is huge, it can fit about three to four children inside! Choosing the right unit helps us write sensible numbers.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-volume-cubic-units.mp3'
    },
    display: {
      content: `# Volume in cm³ and m³

We measure volume in **cubic units**!

---

### Cubic Centimetre (cm³):
- A cube with edges of **1 cm**
- Size reference: about the size of a **fingertip**
- Used for: small objects (boxes, drink cartons)

### Cubic Metre (m³):
- A cube with edges of **1 m**
- Size reference: fits about **3-4 children** inside!
- Used for: large objects (rooms, pools, trucks)

### Choosing Units:
- Small objects → cm³
- Large objects → m³

Would you use cm³ or m³ to measure a pencil case?`,
      showAfterSpeech: true
    }
  },

  'p5-math-volume-formula': {
    speech: {
      text: `Now for the volume formula! Instead of counting cubes one by one, we can use a shortcut. Volume equals length times breadth times height. Think of it this way: length times breadth tells us how many cubes fit in one layer. Then we multiply by height to get the total number of layers. For a cube where all sides are equal, we just multiply the side by itself three times!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-volume-formula.mp3'
    },
    display: {
      content: `# Volume of Cubes and Cuboids

The **volume formula** is a shortcut for counting cubes!

---

### Volume of a Cuboid:
$$V = \\text{Length} \\times \\text{Breadth} \\times \\text{Height}$$
$$V = L \\times B \\times H$$

### Why does this work?
- L × B = cubes in **one layer**
- Multiply by H = total number of **layers**

### Volume of a Cube:
$$V = \\text{side} \\times \\text{side} \\times \\text{side}$$
(All edges are equal!)

### Remember:
- Always include the **units** (cm³ or m³)
- For unknown dimensions: divide volume by the known dimensions

Can you find the volume of the cuboid shown below?`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "unitCubeGrid",
      parameters: {
        cubesAlong: 4,
        cubesDeep: 3,
        cubesHigh: 2,
        highlightLayer: 1
      },
      caption: "A 4 × 3 × 2 cuboid. Notice how the highlighted layer has 4 × 3 = 12 cubes!"
    }
  },

  'p5-math-volume-liquids': {
    speech: {
      text: `Let us connect volume to liquids! We measure liquid volume in litres and millilitres. Here is the key connection: one millilitre equals exactly one cubic centimetre! That means one litre equals one thousand millilitres, which equals one thousand cubic centimetres. So if a tank has a volume of five thousand cubic centimetres, it can hold five litres of water. This connection helps us solve many real-world problems!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-volume-liquids.mp3'
    },
    display: {
      content: `# Volume of Liquids

Connecting **solid volume** to **liquid capacity**!

---

### The Key Connection:
$$1 \\text{ ml} = 1 \\text{ cm}^3$$

### Converting Units:
- 1 litre = **1000 ml**
- 1 litre = **1000 cm³**

### Container Capacity:
1. Calculate volume using V = L × B × H
2. Convert cm³ to ml (same number!)
3. Convert to litres if needed (÷ 1000)

### Water Level Problems:
- Volume of water = L × B × **water height**
- Water height = Volume ÷ (L × B)

If a tank has a volume of 2000 cm³, how many litres of water can it hold?`,
      showAfterSpeech: true
    }
  },

  'p5-math-volume-word-problems': {
    speech: {
      text: `Time for volume word problems! These problems combine everything we have learned: counting cubes, using formulas, and working with liquids. You might see problems about filling tanks, transferring water between containers, or finding how much space is left. Some problems involve fractions, like a tank that is two thirds full. Take it step by step: read carefully, identify what is given and what is asked, then choose the right formula!`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-volume-word-problems.mp3'
    },
    display: {
      content: `# Word Problems on Volume

Bringing it all together!

---

### Problem-Solving Strategy:
1. **Read carefully** - what's given and what's asked?
2. **Visualize** the situation
3. **Choose** the right formula
4. **Calculate** step by step
5. **Check** your answer makes sense

### Common Problem Types:
- **Basic**: Find volume from dimensions
- **Transfer**: Track water between containers
- **Fractional**: ²/₃ full means (²/₃) × capacity
- **Multi-step**: Combine concepts systematically

### Key Formulas:
- V = L × B × H
- 1 ℓ = 1000 ml = 1000 cm³

Ready to put your volume skills to the test?`,
      showAfterSpeech: true
    }
  },

  // ============================================
  // P5 MATHEMATICS - Decimals
  // ============================================

  'p5-math-decimals-multiply-10-100-1000': {
    speech: {
      text: `Welcome to multiplying decimals! Today we will learn a simple but powerful pattern. When you multiply a decimal by ten, every digit moves one place to the left, making the number bigger. Multiply by one hundred and digits move two places left. Multiply by one thousand and they move three places! Think of the decimal point as staying still while the digits shift. This pattern works for any decimal number.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-decimals-multiply-10-100-1000.mp3'
    },
    display: {
      content: `# Multiplying Decimals by 10, 100, 1000

Welcome! Today we'll master a powerful pattern for multiplying decimals.

### The Pattern:
When multiplying by powers of 10, **digits shift LEFT** (number gets bigger):

| × 10 | × 100 | × 1000 |
|------|-------|--------|
| 1 place left | 2 places left | 3 places left |

### Example:
**2.34 × 100**
- Digits shift 2 places LEFT
- 2.34 → 234

### Key Insight:
- The decimal point **stays still**
- The **digits** move around it
- Moving LEFT = number gets BIGGER

If you multiply 3.45 by 100, how many places do the digits shift?`,
      showAfterSpeech: true
    }
  },

  'p5-math-decimals-multiply-tens-hundreds-thousands': {
    speech: {
      text: `Now let us level up our multiplication skills! What if we need to multiply by twenty, or three hundred, or four thousand? Here is the two step method. First, multiply by the simple number like two or three. Then multiply by ten, hundred, or thousand using our place value shift. So for two point three times twenty, first find two point three times two, which is four point six. Then multiply by ten to get forty six. Easy!`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-decimals-multiply-tens-hundreds-thousands.mp3'
    },
    display: {
      content: `# Multiplying by Tens, Hundreds, Thousands

Level up! Now we multiply by numbers like 20, 300, or 4000.

### The Two-Step Method:
**Break down the multiplier**, then combine!

### Example: 2.3 × 20
**Step 1:** 20 = 2 × 10
**Step 2:** 2.3 × 2 = 4.6
**Step 3:** 4.6 × 10 = **46**

### Another Example: 1.5 × 300
**Step 1:** 300 = 3 × 100
**Step 2:** 1.5 × 3 = 4.5
**Step 3:** 4.5 × 100 = **450**

### Key Strategy:
1. Factor the multiplier (e.g., 20 = 2 × 10)
2. Multiply by the simple number first
3. Then shift digits for the power of 10

Can you break down 4000 into a simple number times a power of 10?`,
      showAfterSpeech: true
    }
  },

  'p5-math-decimals-divide-10-100-1000': {
    speech: {
      text: `Now for division! When we divide decimals by ten, one hundred, or one thousand, we do the opposite of multiplication. The digits move to the right instead of left, and the number gets smaller. Divide by ten and digits shift one place right. Divide by one hundred, two places right. Divide by one thousand, three places right. You might need to add zeros as placeholders when the digits move past the decimal point.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-decimals-divide-10-100-1000.mp3'
    },
    display: {
      content: `# Dividing Decimals by 10, 100, 1000

Division is the **opposite** of multiplication!

### The Pattern:
When dividing by powers of 10, **digits shift RIGHT** (number gets smaller):

| ÷ 10 | ÷ 100 | ÷ 1000 |
|------|-------|--------|
| 1 place right | 2 places right | 3 places right |

### Example:
**45.6 ÷ 100**
- Digits shift 2 places RIGHT
- 45.6 → 0.456

### Comparison:
| Multiplication | Division |
|----------------|----------|
| Digits go LEFT | Digits go RIGHT |
| Number BIGGER | Number SMALLER |

### Remember:
- May need **placeholder zeros** (e.g., 2.3 ÷ 100 = 0.023)

When you divide 5.6 by 1000, which direction do the digits move?`,
      showAfterSpeech: true
    }
  },

  'p5-math-decimals-divide-tens-hundreds-thousands': {
    speech: {
      text: `Let us complete our skills with dividing by numbers like thirty, two hundred, or five thousand! Just like with multiplication, we use a two step method. First divide by the simple number, then divide by the power of ten. For example, six point three divided by thirty becomes six point three divided by three, which is two point one, then divided by ten gives zero point two one. Breaking it into steps makes it manageable!`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-decimals-divide-tens-hundreds-thousands.mp3'
    },
    display: {
      content: `# Dividing by Tens, Hundreds, Thousands

Complete your skills! Divide by numbers like 30, 200, or 5000.

### The Two-Step Method:
**Break down the divisor**, divide in steps!

### Example: 6.3 ÷ 30
**Step 1:** 30 = 3 × 10
**Step 2:** 6.3 ÷ 3 = 2.1
**Step 3:** 2.1 ÷ 10 = **0.21**

### Another Example: 24 ÷ 400
**Step 1:** 400 = 4 × 100
**Step 2:** 24 ÷ 4 = 6
**Step 3:** 6 ÷ 100 = **0.06**

### Key Strategy:
1. Factor the divisor (e.g., 30 = 3 × 10)
2. Divide by the simple number first
3. Then shift digits right for the power of 10

What two steps would you use to divide 8.4 by 40?`,
      showAfterSpeech: true
    }
  },

  'p5-math-decimals-converting-measurements': {
    speech: {
      text: `Now let us apply our decimal skills to real measurements! Converting between units like metres and centimetres, or kilograms and grams, uses exactly what we have learned. There are one hundred centimetres in a metre, so to convert metres to centimetres, multiply by one hundred. To go from centimetres to metres, divide by one hundred. The same pattern works for kilometres and metres, kilograms and grams, and litres and millilitres!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-decimals-converting-measurements.mp3'
    },
    display: {
      content: `# Converting Measurements

Apply your decimal skills to real measurements!

### Key Conversions:
| Larger → Smaller | Smaller → Larger |
|------------------|------------------|
| m → cm: × 100 | cm → m: ÷ 100 |
| km → m: × 1000 | m → km: ÷ 1000 |
| kg → g: × 1000 | g → kg: ÷ 1000 |
| ℓ → ml: × 1000 | ml → ℓ: ÷ 1000 |

### Examples:
- **2.5 m = ? cm** → 2.5 × 100 = **250 cm**
- **450 g = ? kg** → 450 ÷ 1000 = **0.45 kg**
- **3.2 km = ? m** → 3.2 × 1000 = **3200 m**

### Rule of Thumb:
- Going to **smaller** units? **Multiply** (more of them!)
- Going to **larger** units? **Divide** (fewer of them!)

To convert 2.5 km to metres, should you multiply or divide by 1000?`,
      showAfterSpeech: true
    }
  },

  'p5-math-decimals-word-problems': {
    speech: {
      text: `Time to put everything together with word problems! These problems use all your decimal multiplication and division skills in real life situations. You might calculate the total cost of multiple items, find how many pieces you can cut from a length, or convert measurements in a recipe. Read carefully to identify the operation needed: is the answer bigger or smaller than what you started with? That tells you whether to multiply or divide!`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-decimals-word-problems.mp3'
    },
    display: {
      content: `# Word Problems on Decimals

Put all your skills together with real problems!

### Problem Types:
- **Total cost**: Multiple items at decimal prices
- **Equal sharing**: Divide into equal parts
- **Cutting/measuring**: How many pieces from a length?
- **Measurement conversions**: Real-world applications

### Problem-Solving Strategy:
1. **Read** carefully - what's given? what's asked?
2. **Identify** the operation - will the answer be bigger or smaller?
3. **Set up** the calculation
4. **Check** - does the answer make sense?

### Key Question:
> "Will my answer be **bigger** or **smaller** than what I started with?"
- Bigger → likely **multiplication**
- Smaller → likely **division**

If a ribbon is 12.6 m long and you cut it into pieces of 0.3 m each, will you multiply or divide to find how many pieces?`,
      showAfterSpeech: true
    }
  },

  /**
   * ========================================
   * P5 MATHEMATICS - RATE
   * ========================================
   */
  'p5-math-rate-understanding': {
    speech: {
      text: `Welcome to the world of rate! Have you ever wondered how fast a printer can print pages, or how much someone earns per hour? These are examples of rate. Today, we'll discover what rate means and learn how to calculate it. The key word to remember is "per" which means "every" or "for each". For example, 50 pages per minute means 50 pages every minute. Let's start with a simple question to see if you understand this important concept.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-rate-understanding.mp3'
    },
    display: {
      content: `# Understanding Rate

Rate tells us **how much of one thing** there is for **every one unit** of another thing.

### The Word "Per"
- **"Per"** means **"every"** or **"for each"**
- 50 pages **per minute** = 50 pages every minute
- \\$15 **per hour** = \\$15 for each hour

### Real-Life Examples of Rate
- A printer prints 50 pages per minute
- Mark earns \\$15 per hour
- A car travels 80 km per hour
- A tap fills 2 litres per minute

---

### First Question

A photocopier can print 50 copies per minute. What does "per minute" mean?`,
      showAfterSpeech: true
    }
  },

  'p5-math-rate-word-problems': {
    speech: {
      text: `Great work on understanding rate! Now it's time to apply your skills to solve real-world problems. In this topic, we'll tackle word problems that involve rate tables and tiered rates. You'll learn how to read tables that show different charges for different amounts, and handle situations where the rate changes, like parking fees or utility bills. Let's start with a problem about reading a rate table.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-rate-word-problems.mp3'
    },
    display: {
      content: `# Rate Word Problems

Now let's apply rate concepts to solve real-world problems!

### What You'll Learn
1. **Table-Based Problems** - Reading and using rate tables
2. **Tiered Rates** - When rates change at certain amounts
3. **Multi-Step Problems** - Combining skills to solve complex problems

### Key Skills
- Understanding "up to" means less than or equal to
- Splitting quantities when different rates apply
- Breaking down problems into steps

---

### First Question

A postage table shows:
| Mass up to | Charge  |
|------------|---------|
| 50 g       | \\$2.65 |
| 100 g      | \\$2.85 |

If a letter weighs 75 g, which row should you use to find the charge?`,
      showAfterSpeech: true
    }
  },

  /**
   * ========================================
   * P5 MATHEMATICS - PERCENTAGE
   * ========================================
   */
  'p5-math-percentage-per-cent': {
    speech: {
      text: `Welcome to the exciting world of percentage! Have you ever seen signs like 50 percent off or scored 90 percent on a test? Today, we'll discover what percent really means. The word percent comes from per cent which means out of one hundred. Think of it like dividing something into 100 equal parts. If you shade 25 squares out of 100, that's 25 percent. Let's see if you understand this concept with a quick question.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-percentage-per-cent.mp3'
    },
    display: {
      content: `# Understanding Per Cent

**Per cent** means **"out of 100"** or **"per hundred"**.

### The Symbol %
- The symbol **%** represents percent
- 25% means 25 out of 100
- 100% means all of something (100 out of 100)

### Visualizing Percentages
Imagine a 10 × 10 grid with 100 equal squares:
- If 25 squares are shaded, that's **25%**
- If 75 squares are shaded, that's **75%**
- If all 100 squares are shaded, that's **100%**

---

### First Question

A 10 × 10 grid has 100 equal squares. If 40 squares are shaded, what percentage of the grid is shaded?`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "percentageGrid",
      parameters: {
        shadedCount: 40,
        showPercentage: false,
        showFraction: false
      },
      caption: "A 10×10 grid with 40 squares shaded"
    }
  },

  'p5-math-percentage-conversions': {
    speech: {
      text: `Great job understanding what percent means! Now let's learn how percentages connect to fractions and decimals. These three are like cousins; they all represent parts of a whole. For example, 50 percent, one half, and 0.5 all mean the same thing! Being able to convert between them is super useful. Let's start by learning how to change a fraction into a percentage.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-percentage-conversions.mp3'
    },
    display: {
      content: `# Converting Between Fractions, Decimals & Percentages

Fractions, decimals, and percentages are different ways to show the **same value**!

### The Conversion Triangle

| From | To | Method |
|------|-----|--------|
| Fraction → % | Multiply by 100% | $\\frac{3}{4} \\times 100\\% = 75\\%$ |
| % → Fraction | Divide by 100 | $75\\% = \\frac{75}{100} = \\frac{3}{4}$ |
| Decimal → % | Multiply by 100 | $0.75 \\times 100 = 75\\%$ |
| % → Decimal | Divide by 100 | $75\\% ÷ 100 = 0.75$ |

### Quick Examples
- $\\frac{1}{2} = 0.5 = 50\\%$
- $\\frac{1}{4} = 0.25 = 25\\%$
- $\\frac{3}{10} = 0.3 = 30\\%$

---

### First Question

Convert $\\frac{3}{5}$ to a percentage.`,
      showAfterSpeech: true
    }
  },

  'p5-math-percentage-part-of-whole': {
    speech: {
      text: `Now that you know how to convert between fractions, decimals, and percentages, let's put that skill to work! In this section, we'll learn to find what percentage one number is of another. For example, if you scored 18 out of 20 on a test, what percentage is that? We'll also learn to find a quantity when given the percentage. These skills are super useful in real life!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-percentage-part-of-whole.mp3'
    },
    display: {
      content: `# Percentage as Part of a Whole

### Finding "What Percentage?"

**Formula:** $\\text{Percentage} = \\frac{\\text{Part}}{\\text{Whole}} \\times 100\\%$

**Example:** What percentage is 18 out of 20?
$\\frac{18}{20} \\times 100\\% = 90\\%$

### Finding the Quantity

**Formula:** $\\text{Quantity} = \\text{Percentage} \\times \\text{Whole}$

**Example:** Find 25% of 80
$25\\% \\times 80 = \\frac{25}{100} \\times 80 = 20$

---

### First Question

In a class of 40 students, 12 are girls. What percentage of the class are girls?`,
      showAfterSpeech: true
    }
  },

  'p5-math-percentage-pie-charts': {
    speech: {
      text: `Let's use what you've learned to read pie charts! Pie charts are circular diagrams that show data as slices of a pie. Each slice represents a fraction or percentage of the whole. The complete pie always represents 100 percent. In this section, you'll learn to read pie chart data and convert between fractions and percentages in charts. Let's start with a question about reading a pie chart.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-percentage-pie-charts.mp3'
    },
    display: {
      content: `# Percentage in Pie Charts

Pie charts show data as **slices of a circle**.

### Key Facts About Pie Charts
- The **whole pie** = **100%**
- Each slice shows a **fraction** or **percentage** of the whole
- All slices must **add up to 100%**

### Reading Pie Charts
1. **Identify** what each slice represents
2. **Read** the given values (fractions or percentages)
3. **Calculate** missing values (remember: total = 100%)

---

### First Question

A pie chart shows the favourite sports of 40 students:
- Swimming: 25%
- Football: 40%
- Badminton: ?%

What percentage of students chose Badminton?`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "pieChart",
      parameters: {
        categories: ["Swimming", "Football", "Badminton"],
        frequencies: [25, 40, 35],
        title: "Favourite Sports",
        showAngles: false,
        displayMode: "none"
      },
      caption: "Find the missing percentage: 100% - 25% - 40% = ?"
    }
  },

  'p5-math-percentage-gst-discount-interest': {
    speech: {
      text: `Time to apply percentages to real life! In Singapore, we pay G S T on most items we buy. Shops offer discounts during sales. Banks pay interest on savings. All these involve percentage calculations. In this section, you'll learn to calculate G S T, discounts, and simple interest. These are important life skills! Let's start with G S T, which is currently 9 percent in Singapore.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-percentage-gst-discount-interest.mp3'
    },
    display: {
      content: `# GST, Discount and Annual Interest

### GST (Goods and Services Tax)
- Singapore GST = **9%**
- **GST amount** = 9% × Price
- **Total with GST** = Price + GST = 109% × Price

### Discount
- **Discount amount** = Discount% × Usual Price
- **Selling price** = Usual Price − Discount
- Or: Selling Price = (100% − Discount%) × Usual Price

### Simple Interest
- **Interest** = Interest Rate × Principal
- **Total after 1 year** = Principal + Interest

---

### First Question

A toy costs \\$50 before GST. If the GST rate is 9%, how much is the GST?`,
      showAfterSpeech: true
    }
  },

  /* ========================================
   * P5 MATHEMATICS - ANGLES
   * ========================================
   */
  'p5-math-angles-straight-line': {
    speech: {
      text: `Welcome to our lesson on angles! Today we'll explore a very useful property: angles on a straight line always add up to 180 degrees. Imagine drawing a straight line and then adding another line that meets it. The angles formed on one side of that point always sum to 180 degrees. This is called the angle sum property of a straight line. Let's see if you can apply this concept to find an unknown angle.`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-angles-straight-line.mp3'
    },
    display: {
      content: `# Angles on a Straight Line

### Key Property
**Angles on a straight line add up to 180°**

When a line meets another line at a point, the angles formed on one side of that point always sum to **180 degrees**.

### Why 180°?
- A straight line forms a **straight angle**
- A straight angle = 180°
- Any angles that share this straight line must add up to 180°

### Example
If angle $a = 65°$ and angle $b$ is on the same straight line, then:
$$a + b = 180°$$
$$65° + b = 180°$$
$$b = 180° - 65° = 115°$$

---

### First Question

Look at the angles on the straight line below. If angle $p = 125°$, find angle $q$.`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "anglesOnLine",
      parameters: {
        angles: [125, null],
        labels: ["p", "q"],
        showSum: false
      },
      caption: "Two angles p and q on a straight line. Find angle q."
    }
  },

  'p5-math-angles-vertically-opposite': {
    speech: {
      text: `Now let's discover something amazing about intersecting lines! When two straight lines cross each other, they form four angles. The angles that are opposite each other, called vertically opposite angles, are always equal! This property is super useful because if you know one angle, you automatically know its opposite angle. Let me show you with an example.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-angles-vertically-opposite.mp3'
    },
    display: {
      content: `# Vertically Opposite Angles

### Key Property
**Vertically opposite angles are equal**

When two straight lines intersect (cross each other), they form **4 angles**.
- The angles **opposite each other** are called **vertically opposite angles**
- These opposite angles are **always equal**

### How to Identify Them
Looking at two intersecting lines:
- Angles across from each other (not next to each other) are vertically opposite
- There are **2 pairs** of vertically opposite angles

### Example
If angle $a = 72°$, then the angle directly opposite to $a$ is also $72°$.

The other pair of angles would each be: $180° - 72° = 108°$

---

### First Question

Two lines intersect as shown. If angle $x = 58°$, find angle $y$ which is vertically opposite to $x$.`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "verticallyOppositeAngles",
      parameters: {
        angles: [58, 122, 58, 122],
        labels: ["x", "", "y", ""],
        highlight: 0
      },
      caption: "Two intersecting lines forming four angles. Find angle y."
    }
  },

  'p5-math-angles-at-point': {
    speech: {
      text: `Here's another important angle property. When several lines meet at a single point, the angles around that point always add up to 360 degrees. Think of it like going around in a complete circle. A full turn is 360 degrees, so all the angles at a point must total 360 degrees. This is useful for finding missing angles when you know some of the angles at a point.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-angles-at-point.mp3'
    },
    display: {
      content: `# Angles at a Point

### Key Property
**Angles at a point add up to 360°**

When multiple lines meet at a single point, the angles formed around that point always sum to **360 degrees**.

### Why 360°?
- Going around a point completely = one full turn
- One full turn = 360°
- All angles around a point must add up to 360°

### Finding Unknown Angles
To find a missing angle at a point:
1. Add all the known angles
2. Subtract from 360°

### Example
If three angles at a point are $90°$, $120°$, and $85°$:
$$\\text{Fourth angle} = 360° - (90° + 120° + 85°)$$
$$= 360° - 295° = 65°$$

---

### First Question

Four angles meet at a point. Three of them are $95°$, $75°$, and $110°$. Find the fourth angle.`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "anglesAtPoint",
      parameters: {
        angles: [95, 75, 110, null],
        labels: ["a", "b", "c", "d"],
        showSum: false
      },
      caption: "Four angles meeting at a point. Find angle d."
    }
  },

  'p5-math-angles-finding-unknown': {
    speech: {
      text: `Excellent progress! Now it's time to put all our angle properties together. In this section, we'll solve more challenging problems that combine angles on a straight line, vertically opposite angles, and angles at a point. Often, you'll need to use more than one property to find unknown angles. The key is to identify which property applies to each situation. Let's practice with a problem.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-angles-finding-unknown.mp3'
    },
    display: {
      content: `# Finding Unknown Angles

### Combining Angle Properties

In complex diagrams, you may need to use **multiple properties** to find unknown angles:

| Property | When to Use |
|----------|-------------|
| Angles on a straight line = 180° | When angles share a straight line |
| Vertically opposite angles are equal | When two lines intersect |
| Angles at a point = 360° | When angles surround a single point |

### Problem-Solving Strategy
1. **Identify** what information is given
2. **Look for** straight lines, intersecting lines, or angles at a point
3. **Apply** the correct property
4. **Calculate** step by step

### Example Strategy
For intersecting lines where one angle is $50°$:
- Vertically opposite angle = $50°$
- Adjacent angles = $180° - 50° = 130°$ (angles on a straight line)

---

### First Question

Two straight lines intersect. One of the angles is $65°$. Using both the vertically opposite property and the straight line property, find all four angles.`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "verticallyOppositeAngles",
      parameters: {
        angles: [65, 115, 65, 115],
        labels: ["a", "b", "c", "d"],
        highlight: 0
      },
      caption: "Two intersecting lines. Angle a = 65°. Find angles b, c, and d."
    }
  },

  /* ========================================
   * P5 MATHEMATICS - PROPERTIES OF TRIANGLES
   * ========================================
   */
  'p5-math-properties-triangles-types': {
    speech: {
      text: `Welcome to our exciting journey into triangles! Today we'll learn how to classify triangles in two different ways. First, we'll look at their sides. A triangle with three equal sides is called equilateral. One with two equal sides is isosceles. And one with no equal sides is scalene. Then we'll classify by angles. A triangle with all angles less than 90 degrees is acute. One with a 90 degree angle is right. And one with an angle greater than 90 degrees is obtuse. Let's start by identifying some triangles!`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-properties-triangles-types.mp3'
    },
    display: {
      content: `# Types of Triangles

### Classifying by Sides
- **Equilateral**: 3 equal sides (marked with tick marks)
- **Isosceles**: 2 equal sides
- **Scalene**: No equal sides

### Classifying by Angles
- **Acute**: All angles less than 90°
- **Right**: One angle equals 90° (marked with a square)
- **Obtuse**: One angle greater than 90°

### Combined Classification
A triangle can be described using **both** classifications.
Example: An "isosceles right triangle" has 2 equal sides AND a 90° angle.

---

### First Question

Look at the triangle below. It has tick marks on two sides and all angles are less than 90°. What type of triangle is this?`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "generalTriangle",
      parameters: {
        vertices: ["A", "B", "C"],
        angles: [70, 70, 40],
        showAngles: true,
        equalSides: "a-c",
        caption: "Classify this triangle by sides and angles"
      },
      caption: "Classify this triangle by sides and angles"
    }
  },

  'p5-math-properties-triangles-angle-sum': {
    speech: {
      text: `Here's one of the most important properties of triangles. The angles inside any triangle always add up to exactly 180 degrees. This is true for every triangle, whether it's equilateral, isosceles, scalene, acute, right, or obtuse. This property is super useful because if you know two angles, you can always find the third. Let me show you how it works.`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-properties-triangles-angle-sum.mp3'
    },
    display: {
      content: `# Angle Sum of a Triangle

### Key Property
**The sum of angles in any triangle = 180°**

This is true for ALL triangles - equilateral, isosceles, scalene, acute, right, or obtuse.

### Finding Unknown Angles
If you know two angles, you can find the third:
1. Add the two known angles
2. Subtract from 180°

### Example
If angle A = 65° and angle B = 50°:
$$\\text{Angle C} = 180° - 65° - 50° = 65°$$

### Special Cases
- **Equilateral triangle**: Each angle = 60° (because 180° ÷ 3 = 60°)
- **Right triangle**: The two acute angles add up to 90°

---

### First Question

In triangle PQR, angle P = 45° and angle Q = 80°. Find angle R.`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "generalTriangle",
      parameters: {
        vertices: ["P", "Q", "R"],
        angles: [45, 80, null],
        angleLabels: ["45°", "80°", "?"],
        showAngles: true,
        equalSides: "none",
        caption: "Find angle R using the angle sum property"
      },
      caption: "Find angle R using the angle sum property"
    }
  },

  'p5-math-properties-triangles-finding-unknown': {
    speech: {
      text: `Now let's tackle more challenging problems! We'll use the exterior angle property, which says that an exterior angle of a triangle equals the sum of the two interior opposite angles. We'll also work with adjacent triangles that share a side. These problems often require using multiple properties together. The key is to work step by step and use what you know to find what you don't know. Let's try one!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-properties-triangles-finding-unknown.mp3'
    },
    display: {
      content: `# Finding Unknown Angles

### Exterior Angle Property
When a side of a triangle is extended:
**Exterior angle = Sum of two interior opposite angles**

### Adjacent Triangles
When two triangles share a side:
- Apply angle sum = 180° to each triangle separately
- Use isosceles/equilateral properties when applicable
- Information from one triangle helps solve the other

### Problem-Solving Strategy
1. Identify all triangles in the figure
2. Note any special triangles (isosceles, equilateral)
3. Look for exterior angles
4. Apply properties one step at a time

---

### First Question

In the figure, side BC of triangle ABC is extended to point D. If angle A = 50° and angle B = 65°, find the exterior angle ACD.`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "extendedLineTriangle",
      parameters: {
        vertices: ["A", "B", "C"],
        extendedSide: "BC",
        extensionLabel: "D",
        angles: [50, 65, null],
        showExteriorAngle: true,
        exteriorAngleLabel: "?",
        caption: "BC extended to D. Find exterior angle ACD."
      },
      caption: "BC extended to D. Find exterior angle ACD."
    }
  },

  /**
   * ========================================
   * P5 MATHEMATICS - PROPERTIES OF QUADRILATERALS
   * (Parallelogram, Rhombus, Trapezium)
   * ========================================
   */
  'p5-math-properties-quadrilaterals-parallelogram': {
    speech: {
      text: `Welcome to the world of parallelograms! A parallelogram is a special quadrilateral with two pairs of parallel sides. You can spot the parallel sides by looking for the arrow markers. The amazing thing about parallelograms is that their angles follow special patterns. Opposite angles are always equal to each other, and any two angles that are next to each other, called adjacent angles, always add up to one hundred eighty degrees. Let's explore these properties together!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-properties-quadrilaterals-parallelogram.mp3'
    },
    display: {
      content: `# Properties of Parallelogram

A **parallelogram** is a quadrilateral with **2 pairs of parallel sides**.

### Key Properties
1. **Opposite sides are parallel** (marked with arrows)
2. **Opposite sides are equal** in length
3. **Opposite angles are equal**
4. **Adjacent angles sum to 180°** (co-interior angles)

---

### First Question

Look at parallelogram WXYZ below. The arrows show which sides are parallel.

Which side is **parallel** to WX?`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "parallelogramAngles",
      parameters: {
        vertexLabels: ["W", "X", "Y", "Z"],
        angles: [null, null, null, null],
        showParallelMarkers: true,
        showEqualSideMarkers: false,
        skewAngle: 30,
        caption: "Parallelogram WXYZ - Notice the arrow markers showing parallel sides"
      },
      caption: "Parallelogram WXYZ - Notice the arrow markers showing parallel sides"
    }
  },

  'p5-math-properties-quadrilaterals-rhombus': {
    speech: {
      text: `Now let's meet the rhombus! A rhombus is a very special parallelogram because all four of its sides are exactly the same length. You can spot this by looking for the tick marks on every side. Think of it like a tilted square or a diamond shape. Because a rhombus is a parallelogram, it has all the same angle properties. Opposite angles are equal, and adjacent angles add up to one hundred eighty degrees. The key difference is those four equal sides!`,
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-properties-quadrilaterals-rhombus.mp3'
    },
    display: {
      content: `# Properties of Rhombus

A **rhombus** is a parallelogram with **4 equal sides**.

### Key Properties
1. **All 4 sides are equal** (marked with tick marks)
2. **2 pairs of parallel sides** (it's a parallelogram!)
3. **Opposite angles are equal**
4. **Adjacent angles sum to 180°**

### Rhombus vs Parallelogram
- Every rhombus IS a parallelogram
- But NOT every parallelogram is a rhombus

---

### First Question

Look at rhombus EFGH below. Notice the tick marks showing all sides are equal.

If EF = 8 cm, what is the length of GH?`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "rhombusAngles",
      parameters: {
        vertexLabels: ["E", "F", "G", "H"],
        angles: [null, null, null, null],
        orientation: "diamond",
        showEqualSideMarkers: true,
        showParallelMarkers: true,
        caption: "Rhombus EFGH - All 4 sides are equal"
      },
      caption: "Rhombus EFGH - All 4 sides are equal"
    }
  },

  'p5-math-properties-quadrilaterals-trapezium': {
    speech: {
      text: `Hello! Today we're learning about trapeziums. A trapezium is different from a parallelogram because it has only one pair of parallel sides, not two. You can see the parallel sides marked with arrows on the top and bottom. The special angle property for trapeziums is that angles on the same side between the parallel lines add up to one hundred eighty degrees. These are called co-interior angles. Let's practice identifying these angles!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-properties-quadrilaterals-trapezium.mp3'
    },
    display: {
      content: `# Properties of Trapezium

A **trapezium** is a quadrilateral with exactly **1 pair of parallel sides**.

### Key Property
**Co-interior angles sum to 180°**

The angles on the same side of the trapezium (between the parallel sides) add up to 180°.

- Left side: $\\angle P + \\angle S = 180°$
- Right side: $\\angle Q + \\angle R = 180°$

### Trapezium vs Parallelogram
- Trapezium: **1 pair** of parallel sides
- Parallelogram: **2 pairs** of parallel sides

---

### First Question

In trapezium PQRS below, PQ is parallel to SR.

If $\\angle SPQ = 110°$, what is $\\angle PSR$?`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "trapeziumAngles",
      parameters: {
        vertexLabels: ["S", "R", "Q", "P"],
        angles: ["?", null, null, "110°"],
        highlightAngles: [0, 3],
        showParallelMarkers: true,
        showAngleSumAnnotation: false,
        topSideRatio: 0.5,
        caption: "Trapezium PQRS with PQ // SR"
      },
      caption: "Trapezium PQRS with PQ // SR"
    }
  },

  'p5-math-properties-quadrilaterals-finding-unknown': {
    speech: {
      text: `Great job learning all those properties! Now it's time to put everything together and solve angle problems. The key is to first identify the shape. Is it a parallelogram, a rhombus, or a trapezium? Then apply the correct property. For parallelograms and rhombuses, remember opposite angles are equal and adjacent angles sum to one hundred eighty degrees. For trapeziums, use the co-interior angles property. Let's practice choosing the right approach!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p5-math-properties-quadrilaterals-finding-unknown.mp3'
    },
    display: {
      content: `# Finding Unknown Angles

### Problem-Solving Strategy
1. **Identify the shape** (parallelogram, rhombus, or trapezium)
2. **Find parallel sides** (look for arrow markers)
3. **Apply the correct property**
4. **Check:** All angles should sum to 360°

### Quick Reference
| Shape | Property |
|-------|----------|
| Parallelogram | Opposite angles equal, Adjacent = 180° |
| Rhombus | Same as parallelogram (it IS one!) |
| Trapezium | Co-interior angles = 180° |

---

### First Question

ABCD is a parallelogram. $\\angle ABC = 72°$.

Find $\\angle BCD$.`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: "parallelogramAngles",
      parameters: {
        vertexLabels: ["A", "B", "C", "D"],
        angles: [null, "72°", "?", null],
        highlightAngles: [1, 2],
        showParallelMarkers: true,
        showEqualSideMarkers: false,
        skewAngle: 28,
        caption: "Find ∠BCD"
      },
      caption: "Find ∠BCD"
    }
  },

  /**
   * ========================================
   * P6 MATHEMATICS - FRACTIONS (Division of Fractions)
   * ========================================
   */
  'p6-math-fractions-divide-by-whole': {
    speech: {
      text: `Hello! Today we are going to learn about dividing fractions by whole numbers. Imagine you have half a pizza and you want to share it equally among three friends. What fraction does each friend get? When we divide a fraction by a whole number, the result is always smaller than what we started with. Let me show you how this works!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p6-math-fractions-divide-by-whole.mp3'
    },
    display: {
      content: `# Dividing a Fraction by a Whole Number

When you divide a fraction by a whole number, you are **cutting that fraction into more pieces**.

---

### Think About This:

You have **half a cake** (1/2) and share it among **3 children**.

Each child gets a **smaller piece** than 1/2!

**1/2 ÷ 3 = ?**

*What fraction of the whole cake does each child get?*`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: 'fractionDivision',
      parameters: {
        dividend: '1/2',
        divisor: '3',
        showReciprocal: false,
        showSteps: false,
        showResult: false,
        caption: 'Half a cake shared among 3 children - each gets 1/6 of the whole cake'
      },
      caption: 'Half a cake shared among 3 children'
    }
  },

  'p6-math-fractions-whole-by-fraction': {
    speech: {
      text: `Welcome! Now we are going to flip things around and learn about dividing whole numbers by fractions. Here is a fun question: if you have four chocolate bars and each friend gets one third of a bar, how many friends can share? The answer is more than four! When we divide by a fraction, our answer gets bigger. Let me show you why with some counting!`,
      emotion: 'excited',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p6-math-fractions-whole-by-fraction.mp3'
    },
    display: {
      content: `# Dividing a Whole Number by a Fraction

When you divide a whole number by a fraction, you are asking: **"How many of these fractional pieces fit in the whole?"**

---

### Think About This:

You have **4 chocolate bars** and give each friend **1/3** of a bar.

**How many friends** can share?

**4 ÷ 1/3 = ?**

*Hint: How many thirds are in 4 wholes?*`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: 'fractionDivision',
      parameters: {
        dividend: '4',
        divisor: '1/3',
        showReciprocal: false,
        showSteps: false,
        showResult: false,
        caption: '4 chocolate bars divided into thirds - 12 friends can share!'
      },
      caption: 'How many thirds fit in 4 wholes?'
    }
  },

  'p6-math-fractions-fraction-by-fraction': {
    speech: {
      text: `Great job so far! Now for the final challenge: dividing a fraction by a fraction. Think about this: if you have two thirds of a pancake and cut it into pieces that are each one sixth of a pancake, how many pieces do you get? We can count how many of the smaller fraction fit into the larger one. There is also a really cool rule to help us: keep, change, flip!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p6-math-fractions-fraction-by-fraction.mp3'
    },
    display: {
      content: `# Dividing a Fraction by a Fraction

When you divide one fraction by another, you are asking: **"How many of the second fraction fit in the first?"**

---

### The Golden Rule:

**Keep - Change - Flip!**

1. **Keep** the first fraction
2. **Change** division to multiplication
3. **Flip** the second fraction

**Example:** 2/3 ÷ 1/6 = 2/3 × 6/1 = ?

*How many sixths fit in two-thirds?*`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: 'fractionDivision',
      parameters: {
        dividend: '2/3',
        divisor: '1/6',
        showReciprocal: false,
        showSteps: false,
        showResult: false,
        caption: 'How many 1/6 pieces fit in 2/3?'
      },
      caption: 'How many sixths fit in two-thirds?'
    }
  },

  'p6-math-fractions-word-problems': {
    speech: {
      text: `Excellent work learning all the fraction division rules! Now let us put everything together with word problems. The key is to first understand what the problem is asking. Look for clues like sharing, cutting, or how many fit. Draw a bar model to help visualize the problem. Then decide which type of division you need. Let us practice with some real world scenarios!`,
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/p6-math-fractions-word-problems.mp3'
    },
    display: {
      content: `# Word Problems: Fraction Division

### Problem-Solving Strategy

1. **Read carefully** - What is the question asking?
2. **Draw a bar model** - Visualize the problem
3. **Identify the operation** - Is it division?
4. **Solve step by step** - Show your working
5. **Check your answer** - Does it make sense?

---

### Example Problem:

Julie, Tom and Ben had a pizza. Julie ate 1/4 of the pizza. Tom and Ben shared the rest equally.

*What fraction did Tom get?*`,
      showAfterSpeech: true
    },
    mathTool: {
      toolName: 'barModel',
      parameters: {
        title: 'Pizza Problem',
        bars: [
          {
            label: 'Pizza',
            segments: [
              { value: 'Julie', units: 1, highlight: true },
              { value: 'Tom & Ben', units: 3 }
            ],
            totalLabel: '1 whole',
            bracketPosition: 'top'
          }
        ],
        showUnitDividers: true,
        caption: 'Julie ate 1/4. What fraction did Tom and Ben share?'
      },
      caption: 'Bar model showing pizza sharing problem'
    }
  },

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
