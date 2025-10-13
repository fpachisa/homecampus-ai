/**
 * Secondary 3 Mathematics - Quadratic Equations and Functions
 *
 * AI-First Approach: Minimal configuration, maximum AI intelligence
 * - Mastery-based progression (no points)
 * - Learning objectives derived from curriculum
 * - AI generates appropriate questions (solving, graphing, word problems)
 * - Clear input/output contracts
 *
 * Curriculum Focus:
 * - How algebraic representations help shape environments and solve problems
 * - How quadratic equations are solved (factorization, formula, completing square)
 * - How quadratic functions apply to real-life problems (optimization, modeling)
 */

// ============================================
// TYPE EXPORTS
// ============================================

export type QuadraticEquationsTopicId =
  | 's3-math-quadratic-solving-standard-form'
  | 's3-math-quadratic-solving-factorization'
  | 's3-math-quadratic-solving-fractional'
  | 's3-math-quadratic-solving-completing-square'
  | 's3-math-quadratic-solving-formula'
  | 's3-math-quadratic-solving-exponential'
  | 's3-math-quadratic-word-problems'
  | 's3-math-quadratic-graph-features'
  | 's3-math-quadratic-graph-completed-square'
  | 's3-math-quadratic-graph-factorised'
  | 's3-math-quadratic-graph-polynomial'
  | 's3-math-quadratic-graph-finding-function'
  | 's3-math-quadratic-graph-problem-solving';

// ============================================
// CONFIGURATION STRUCTURE
// ============================================

export const S3_MATH_QUADRATIC_EQUATIONS_CONFIG = {

  // ============================================
  // GLOBAL: Socratic Tutor Identity (Reference for Tutor Agent Only)
  // ============================================
  TUTOR_ROLE: `[REFERENCE - Used for Tutor Agent Socratic responses only, NOT for Question/Solution/Evaluator agents]

You are a Socratic mathematics tutor for secondary school students learning Quadratic Equations and Functions.

Your Teaching Approach:
- Guide students to discover solution methods through questioning, not direct instruction
- Help students visualize parabolas and understand quadratic relationships
- Encourage algebraic manipulation and pattern recognition
- Connect abstract equations to real-world contexts (optimization, projectile motion)
- Celebrate insights when students discover factoring patterns or vertex forms
- Adapt difficulty organically based on student mastery

**IMPORTANT - Text-to-Speech Guidelines:**
When generating speech.text (what the avatar will speak aloud):
- Keep speech plain and conversational (no markdown, no LaTeX)
- Use "x squared" instead of "x²" for proper pronunciation
- Say "a times x squared plus b x plus c" instead of using symbols
- Avoid mathematical notation that might be mispronounced
- For display.content (shown visually), you can use LaTeX and symbols normally

Your Visual Tools:
You have access to PRE-BUILT visual tools to help explain concepts:
- Use tools when they genuinely help understanding (especially for parabola graphs)
- See MATH_TOOLS section for full details on available tools
- IMPORTANT: Use the technical name (e.g., "parabolaGraph") in the toolName field, NOT the display name

When you use a visual tool, include it in your response using the mathTool field.`,

  // ============================================
  // GLOBAL: Question Agent Role (Minimal, Focused)
  // ============================================
  QUESTION_AGENT_ROLE: `You are the Question Generation Agent - execute targeted instructions to generate quadratic equation questions.

Your sole responsibility is to generate questions based on precise instructions from the Evaluator Agent.
You do NOT make pedagogical decisions about what concepts to test or when to advance difficulty.`,

  // ============================================
  // GLOBAL: Solution Agent Role (Minimal, Focused)
  // ============================================
  SOLUTION_AGENT_ROLE: `You are the Solution Generation Agent - execute targeted instructions to generate step-by-step solutions for quadratic equations.

Your sole responsibility is to generate clear, logical solutions with proper algebraic reasoning based on precise instructions from the Evaluator Agent.
You do NOT make pedagogical decisions about explanation depth beyond the instructions.`,

  // ============================================
  // GLOBAL: Formatting Rules (CRITICAL - All Agents Must Follow)
  // ============================================
  FORMATTING_RULES: {
    description: "Universal formatting rules that all AI agents must follow in their responses",

    latex: {
      quadraticEquations: {
        rule: "Use $ax^2 + bx + c = 0$ in display, 'a times x squared plus b x plus c equals 0' in speech",
        examples: {
          correct_display: "$x^2 - 5x + 6 = 0$",
          correct_speech: "x squared minus 5 x plus 6 equals 0",
          incorrect: "x² - 5x + 6 = 0" // Don't use superscript in speech
        },
        reason: "TTS engines cannot pronounce superscripts or mathematical symbols correctly"
      },

      fractions: {
        rule: "Use $\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ in display, 'negative b plus or minus square root of b squared minus 4 a c, all over 2 a' in speech",
        examples: {
          correct_display: "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
          correct_speech: "x equals negative b plus or minus square root of b squared minus 4 a c, all over 2 a",
          incorrect: "x = (-b ± √(b² - 4ac)) / 2a" // Don't use symbols in speech
        }
      },

      completedSquare: {
        rule: "Use $a(x - h)^2 + k$ in display, 'a times the quantity x minus h, squared, plus k' in speech",
        examples: {
          correct_display: "$f(x) = 2(x - 3)^2 + 5$",
          correct_speech: "f of x equals 2 times the quantity x minus 3, squared, plus 5"
        }
      },

      vertexForm: {
        rule: "Use $(h, k)$ for vertex in display, 'the point h comma k' in speech",
        examples: {
          correct_display: "Vertex: $(3, 5)$",
          correct_speech: "Vertex is at the point 3 comma 5"
        }
      }
    },

    speech: {
      rule: "PLAIN TEXT ONLY - no markdown, no LaTeX, suitable for text-to-speech",
      forbidden: ["*", "_", "$", "\\", "^", "±", "√", "≤", "≥"],
      allowed: ["Use words: 'squared', 'cubed', 'plus or minus', 'square root', 'less than or equal to'"],
      examples: {
        correct: "The quadratic formula is x equals negative b plus or minus square root of b squared minus 4 a c, all over 2 a.",
        incorrect: "The quadratic formula is $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$."
      }
    },

    display: {
      rule: "CAN use markdown and LaTeX for proper mathematical formatting",
      encouraged: ["Use $...$ for inline math", "Use $$...$$ for block equations", "Use **bold** for emphasis"],
      examples: {
        correct: "Solve: $x^2 - 5x + 6 = 0$\n\nUsing factorization: $(x - 2)(x - 3) = 0$",
        acceptable: "Use the quadratic formula: $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$"
      }
    }
  },

  // ============================================
  // GLOBAL: Math Tools Reference
  // ============================================
  // NOTE: Math tool definitions are centralized in mathToolsRegistry.ts
  // This constant is kept for backward compatibility and references
  MATH_TOOLS_AVAILABLE: [
    "parabolaGraph",
    "factoringVisualizer",
    "completingSquareVisualizer",
    "quadraticFormulaVisualizer",
    "vertexFormTransform",
    "rootsVisualizer",
    "wordProblemDiagram"
  ],

  // ============================================
  // GLOBAL: Interaction Protocol
  // ============================================
  INTERACTION_PROTOCOL: {
    description: "Defines how agents communicate with each other through structured instructions",

    instructionSchemas: {
      TutorInstruction: {
        focusConcept: "string - The main concept the hint should address",
        studentError: "string - What the student did wrong",
        hintStrategy: "'leading-question' | 'partial-reveal' | 'analogy' | 'near-answer'",
        relevantInfo: "string - Specific formula/definition/concept to reference (minimal, targeted)",
        tone: "'encouraging' | 'supportive' | 'celebratory' | 'gentle-correction'",
        depth: "'surface' | 'moderate' | 'deep' | 'near-answer'"
      },

      QuestionInstruction: {
        targetSection: "string - Section ID from progressionStructure",
        targetConcept: "string - Specific skill to test from learningObjectives",
        difficulty: "'foundational' | 'intermediate' | 'advanced'",
        focusObjectives: "array - Section's learningObjectives (for AI context)",
        relevantFormulas: "array - ONLY formulas needed for this question",
        conceptGaps: "array (optional) - Student's struggles to address",
        sampleProblems: "array (optional) - Example problems to use as templates",
        questionConstraints: "object (optional) - Parameters to control generation"
      },

      SolutionInstruction: {
        problemText: "string - The exact problem to solve",
        studentAttempt: "string - What the student tried",
        explanationFocus: "string - Core concept to explain",
        relevantFormulas: "array - ONLY formulas for this solution",
        relevantConcepts: "array - Specific concepts from learningObjectives",
        explanationDepth: "'basic' | 'detailed' | 'comprehensive'",
        studentStrugglePoint: "string - What's confusing the student"
      }
    },

    evaluatorOutputs: {
      description: "What the Evaluator Agent must return",
      requiredFields: {
        action: "'NEW_PROBLEM' | 'GIVE_HINT' | 'GIVE_SOLUTION' | 'CELEBRATE'",
        assessment: {
          understanding: "'strong' | 'developing' | 'struggling'",
          conceptGaps: "array of strings",
          readyToAdvance: "boolean"
        },
        progression: {
          currentSection: "string - Section ID being tested",
          sectionMastered: "boolean",
          masteryProgress: "string - Description of mastery progress",
          nextSection: "string (optional) - Next section ID if current mastered"
        },
        instruction: "TutorInstruction | QuestionInstruction | SolutionInstruction - Based on action",
        reasoning: "string - Explanation of decision"
      }
    },

    tutorOutputs: {
      description: "What the Tutor Agent must return",
      requiredFields: {
        speech: {
          text: "string - PLAIN TEXT for TTS",
          emotion: "'encouraging' | 'supportive' | 'celebratory' | 'empathetic' | 'excited'"
        },
        display: {
          content: "string - Markdown/LaTeX formatted hint or null for CELEBRATE",
          showAfterSpeech: "boolean",
          type: "'hint' | 'celebration'"
        },
        mathTool: "object (optional) - Visual tool if helpful"
      }
    },

    questionGenerationOutputs: {
      description: "What the Question Agent must return",
      requiredFields: {
        speech: {
          text: "string - PLAIN TEXT transition",
          emotion: "'encouraging' | 'neutral' | 'excited'"
        },
        display: {
          content: "string - Markdown/LaTeX formatted question",
          showAfterSpeech: "boolean",
          type: "'question'"
        },
        mathTool: "object (optional) - Visual tool if helpful"
      }
    },

    solutionOutputs: {
      description: "What the Solution Agent must return",
      requiredFields: {
        speech: {
          text: "string - PLAIN TEXT intro to solution",
          emotion: "'supportive' | 'empathetic'"
        },
        display: {
          content: "string - Markdown/LaTeX formatted step-by-step solution",
          showAfterSpeech: "boolean",
          type: "'solution'"
        },
        mathTool: "object (optional) - Visual tool if helpful"
      }
    }
  },

  // ============================================
  // GLOBAL: Progression Model
  // ============================================
  PROGRESSION_MODEL: {
    description: "AI-driven mastery-based progression (no rigid point system)",

    philosophy: "Students advance through sections by demonstrating conceptual understanding, not by accumulating points. The AI evaluates readiness holistically based on answer quality, consistency, and minimal hint usage.",

    masteryIndicators: [
      "Consistent correct answers (typically 2-3 in a row with minimal hints)",
      "Ability to explain reasoning (when prompted)",
      "Application of concepts to new problem types",
      "Confidence in responses (fewer hesitations, clearer explanations)"
    ],

    adaptiveSupport: {
      struggling: "Provide foundational hints, revisit concepts, use more visuals",
      developing: "Offer targeted hints, encourage self-discovery",
      strong: "Challenge with harder problems, minimal scaffolding"
    }
  }
};

// ============================================
// SUBTOPICS CONFIGURATION
// ============================================

export const S3_MATH_QUADRATIC_EQUATIONS: Record<QuadraticEquationsTopicId, any> = {

  // ============================================
  // SECTION 1.1: SOLVING STANDARD FORM (ax² = k)
  // ============================================
  's3-math-quadratic-solving-standard-form': {
    displayName: 'Solving ax² = k',
    topicName: 'Solving quadratic equations of the form ax² = k by taking square roots',

    progressionStructure: {
      masteryPhilosophy: "Students master this subtopic when they can consistently solve ax² = k equations, understand that square roots yield ± solutions, and apply this to practical contexts. Typically requires 3+ correct answers with minimal hints.",

      sections: [
        {
          id: 'standard-form-basic',
          title: 'Basic Square Root Method',
          difficulty: 'foundational',
          focusObjectives: 'Solve simple equations like x² = 25',

          learningObjectives: [
            'Understand that x² = k has two solutions: ±√k',
            'Solve equations of the form x² = k where k > 0',
            'Recognize that x² = k has no real solutions when k < 0'
          ],

          relevantFormulas: [
            'If x² = k (k > 0), then x = ±√k',
            'If x² = k (k < 0), no real solutions exist'
          ],

          masterySignals: '2-3 correct answers showing understanding of ± solutions',

          availableTools: ['parabolaGraph', 'rootsVisualizer'],

          sampleProblems: [
            'Solve x² = 36',
            'Solve x² = 49',
            'Find the value of x if x² = 100'
          ]
        },

        {
          id: 'standard-form-coefficient',
          title: 'Equations with Coefficients (ax² = k)',
          difficulty: 'intermediate',
          focusObjectives: 'Solve equations like 3x² = 48',

          learningObjectives: [
            'Solve equations of the form ax² = k by isolating x²',
            'Divide both sides by coefficient a before taking square root',
            'Simplify radical expressions when necessary'
          ],

          relevantFormulas: [
            'ax² = k → x² = k/a → x = ±√(k/a)',
            'Simplify radicals: √(a/b) = √a / √b'
          ],

          masterySignals: '3 correct answers demonstrating proper algebraic steps',

          availableTools: ['parabolaGraph'],

          sampleProblems: [
            'Solve 2x² = 50',
            'Solve 5x² - 80 = 0',
            'Find x if 3x² = 27'
          ]
        },

        {
          id: 'standard-form-applications',
          title: 'Real-World Applications',
          difficulty: 'intermediate',
          focusObjectives: 'Apply square root method to word problems',

          learningObjectives: [
            'Model real-world situations with ax² = k equations',
            'Interpret solutions in context (discard negative when appropriate)',
            'Solve area and physics problems using square root method'
          ],

          relevantFormulas: [
            'Area of square: A = s² where s is side length',
            'Pythagorean theorem: a² + b² = c²'
          ],

          masterySignals: '2-3 correct word problems with proper interpretation',

          availableTools: ['wordProblemDiagram', 'parabolaGraph'],

          sampleProblems: [
            'A square garden has area 144 m². Find the side length.',
            'The area of a circle is 78.5 cm². Find the radius. (Use π ≈ 3.14)'
          ]
        }
      ]
    },

    learningObjectives: `
Students will:
- Solve quadratic equations of the form x² = k and ax² = k
- Understand the ± nature of square root solutions
- Apply the square root method to real-world problems
- Recognize when equations have no real solutions (k < 0)
    `,

    keyFormulas: `
- If x² = k (k > 0), then x = ±√k
- If ax² = k, then x = ±√(k/a)
- No real solutions when k < 0
    `
  },

  // ============================================
  // SECTION 1.2: SOLVING BY FACTORIZATION
  // ============================================
  's3-math-quadratic-solving-factorization': {
    displayName: 'Solving by Factorization',
    topicName: 'Solving quadratic equations by factorizing into (x + p)(x + q) = 0',

    progressionStructure: {
      masteryPhilosophy: "Students master factorization when they can identify factor pairs, apply the zero product property, and solve quadratics where factorization is possible. Typically requires 4-5 correct answers across different factoring patterns.",

      sections: [
        {
          id: 'factorization-zero-product',
          title: 'Zero Product Property',
          difficulty: 'foundational',
          focusObjectives: 'Understand that if AB = 0, then A = 0 or B = 0',

          learningObjectives: [
            'Understand the zero product property: if (x + p)(x + q) = 0, then x = -p or x = -q',
            'Solve equations already in factored form',
            'Recognize that factored form directly gives solutions'
          ],

          relevantFormulas: [
            'Zero Product Property: If AB = 0, then A = 0 or B = 0',
            'From (x + p)(x + q) = 0, solutions are x = -p and x = -q'
          ],

          masterySignals: '2 correct answers from factored form',

          availableTools: ['rootsVisualizer', 'parabolaGraph'],

          sampleProblems: [
            'Solve (x - 3)(x + 5) = 0',
            'Solve (x + 2)(x - 7) = 0',
            'Find x if (2x - 1)(x + 4) = 0'
          ]
        },

        {
          id: 'factorization-simple',
          title: 'Factorizing x² + bx + c',
          difficulty: 'intermediate',
          focusObjectives: 'Factor quadratics with leading coefficient 1',

          learningObjectives: [
            'Find two numbers that multiply to c and add to b',
            'Write x² + bx + c as (x + p)(x + q)',
            'Solve quadratic equations by factorization (a = 1)'
          ],

          relevantFormulas: [
            'x² + bx + c = (x + p)(x + q) where pq = c and p + q = b',
            'Factor pairs of c that add to b give the factors'
          ],

          masterySignals: '3-4 correct factorizations with proper factor pair identification',

          availableTools: ['factoringVisualizer', 'rootsVisualizer'],

          sampleProblems: [
            'Solve x² + 7x + 12 = 0',
            'Solve x² - 5x + 6 = 0',
            'Factor and solve: x² + 2x - 15 = 0'
          ]
        },

        {
          id: 'factorization-leading-coefficient',
          title: 'Factorizing ax² + bx + c (a ≠ 1)',
          difficulty: 'advanced',
          focusObjectives: 'Factor quadratics with leading coefficient a ≠ 1',

          learningObjectives: [
            'Use the split middle term method or grouping method',
            'Find factor pairs of ac that add to b',
            'Solve quadratics of the form ax² + bx + c = 0 by factorization'
          ],

          relevantFormulas: [
            'Split middle term: Find two numbers that multiply to ac and add to b',
            'Factor by grouping after splitting the middle term'
          ],

          masterySignals: '3-4 correct factorizations of ax² + bx + c where a ≠ 1',

          availableTools: ['factoringVisualizer', 'rootsVisualizer'],

          sampleProblems: [
            'Solve 2x² + 7x + 3 = 0',
            'Solve 3x² - 11x + 6 = 0',
            'Factor and solve: 6x² + 5x - 6 = 0'
          ]
        },

        {
          id: 'factorization-special-cases',
          title: 'Special Factorization Patterns',
          difficulty: 'intermediate',
          focusObjectives: 'Recognize and factor special patterns (difference of squares, perfect squares)',

          learningObjectives: [
            'Factor difference of squares: a² - b² = (a + b)(a - b)',
            'Factor perfect square trinomials: a² ± 2ab + b² = (a ± b)²',
            'Solve quadratics using special factorization patterns'
          ],

          relevantFormulas: [
            'a² - b² = (a + b)(a - b)',
            'a² + 2ab + b² = (a + b)²',
            'a² - 2ab + b² = (a - b)²'
          ],

          masterySignals: '3 correct answers recognizing and applying special patterns',

          availableTools: ['factoringVisualizer', 'parabolaGraph'],

          sampleProblems: [
            'Solve x² - 25 = 0 (difference of squares)',
            'Solve x² + 10x + 25 = 0 (perfect square)',
            'Solve 4x² - 9 = 0'
          ]
        }
      ]
    },

    learningObjectives: `
Students will:
- Apply the zero product property to solve factored equations
- Factor quadratics in the form x² + bx + c
- Factor quadratics in the form ax² + bx + c (a ≠ 1)
- Recognize and factor special patterns (difference of squares, perfect squares)
- Solve quadratic equations using factorization when possible
    `,

    keyFormulas: `
- Zero Product Property: If (x + p)(x + q) = 0, then x = -p or x = -q
- x² + bx + c = (x + p)(x + q) where pq = c, p + q = b
- Split middle term method for ax² + bx + c (a ≠ 1)
- Difference of squares: a² - b² = (a + b)(a - b)
- Perfect square: a² ± 2ab + b² = (a ± b)²
    `
  },

  // ============================================
  // SECTION 1.3: SOLVING FRACTIONAL EQUATIONS
  // ============================================
  's3-math-quadratic-solving-fractional': {
    displayName: 'Solving Fractional Equations',
    topicName: 'Solving fractional equations that reduce to quadratic equations',

    progressionStructure: {
      masteryPhilosophy: "Students master fractional equations when they can clear denominators, recognize the resulting quadratic, solve it, and check for extraneous solutions. Typically requires 3-4 correct solutions with proper validation.",

      sections: [
        {
          id: 'fractional-clearing-denominators',
          title: 'Clearing Denominators',
          difficulty: 'intermediate',
          focusObjectives: 'Multiply by LCD to eliminate fractions',

          learningObjectives: [
            'Identify the LCD (least common denominator) of all fractions',
            'Multiply every term by the LCD to clear fractions',
            'Simplify the resulting equation to standard quadratic form'
          ],

          relevantFormulas: [
            'LCD: The smallest common multiple of all denominators',
            'Multiply every term by LCD to eliminate fractions'
          ],

          masterySignals: '2-3 correct answers demonstrating proper LCD multiplication',

          availableTools: ['factoringVisualizer'],

          sampleProblems: [
            'Solve: (x + 1)/2 + (x - 1)/3 = 2',
            'Solve: 1/x + 1/(x+1) = 1/2'
          ]
        },

        {
          id: 'fractional-quadratic-result',
          title: 'Fractional Equations Becoming Quadratic',
          difficulty: 'advanced',
          focusObjectives: 'Recognize when clearing fractions produces a quadratic',

          learningObjectives: [
            'Clear fractions to obtain a quadratic equation',
            'Solve the resulting quadratic by factorization or formula',
            'Check solutions in the original fractional equation'
          ],

          relevantFormulas: [
            'After clearing denominators, use factorization or quadratic formula',
            'Always check solutions to avoid division by zero'
          ],

          masterySignals: '3-4 correct solutions with proper checking',

          availableTools: ['factoringVisualizer', 'quadraticFormulaVisualizer'],

          sampleProblems: [
            'Solve: 2/x + 3/(x-1) = 5',
            'Solve: (x + 2)/(x - 1) = (x - 3)/(x + 1)'
          ]
        },

        {
          id: 'fractional-extraneous-solutions',
          title: 'Checking for Extraneous Solutions',
          difficulty: 'advanced',
          focusObjectives: 'Identify and reject extraneous solutions',

          learningObjectives: [
            'Understand that clearing denominators can introduce extraneous solutions',
            'Check all solutions in the original equation',
            'Reject solutions that make denominators zero'
          ],

          relevantFormulas: [
            'Extraneous solution: A solution that emerges during solving but doesn\'t satisfy the original equation',
            'Always substitute solutions back into original equation'
          ],

          masterySignals: '2-3 problems with correct identification of extraneous solutions',

          availableTools: ['factoringVisualizer'],

          sampleProblems: [
            'Solve and check: 1/(x-2) + 1/(x+2) = 4/(x²-4)',
            'Solve: x/(x-1) = 2 + 1/(x-1)'
          ]
        }
      ]
    },

    learningObjectives: `
Students will:
- Clear fractions by multiplying by the LCD
- Recognize when fractional equations reduce to quadratics
- Solve the resulting quadratic equations
- Check for extraneous solutions that make denominators zero
- Properly validate all solutions in the original equation
    `,

    keyFormulas: `
- Multiply all terms by LCD to clear fractions
- Resulting equation may be quadratic (use factorization or formula)
- Always check solutions: denominators cannot be zero
- Extraneous solutions must be rejected
    `
  },

  // ============================================
  // SECTION 1.4: COMPLETING THE SQUARE
  // ============================================
  's3-math-quadratic-solving-completing-square': {
    displayName: 'Completing the Square',
    topicName: 'Solving quadratic equations by completing the square method',

    progressionStructure: {
      masteryPhilosophy: "Students master completing the square when they can systematically convert ax² + bx + c = 0 to (x + p)² = q form and solve. Typically requires 4-5 correct solutions showing all steps.",

      sections: [
        {
          id: 'completing-square-concept',
          title: 'Understanding Perfect Squares',
          difficulty: 'foundational',
          focusObjectives: 'Recognize perfect square trinomials',

          learningObjectives: [
            'Recognize perfect square trinomials: x² + 2px + p² = (x + p)²',
            'Identify the term needed to complete a square',
            'Understand the geometric interpretation of completing the square'
          ],

          relevantFormulas: [
            '(x + p)² = x² + 2px + p²',
            'To complete the square for x² + bx, add (b/2)²'
          ],

          masterySignals: '2 correct identifications of completing square terms',

          availableTools: ['completingSquareVisualizer'],

          sampleProblems: [
            'What number completes the square for x² + 6x?',
            'Write x² + 10x + 25 as a perfect square.',
            'Find k if x² + 8x + k is a perfect square.'
          ]
        },

        {
          id: 'completing-square-method',
          title: 'Completing the Square Method (a = 1)',
          difficulty: 'intermediate',
          focusObjectives: 'Solve x² + bx + c = 0 by completing the square',

          learningObjectives: [
            'Move constant term to the right side',
            'Add (b/2)² to both sides to complete the square',
            'Write left side as (x + p)² and solve for x'
          ],

          relevantFormulas: [
            'x² + bx + c = 0 → x² + bx = -c',
            'Add (b/2)² to both sides: x² + bx + (b/2)² = -c + (b/2)²',
            '(x + b/2)² = -c + (b/2)²',
            'x + b/2 = ±√(-c + (b/2)²)'
          ],

          masterySignals: '3-4 correct solutions showing all algebraic steps',

          availableTools: ['completingSquareVisualizer', 'parabolaGraph'],

          sampleProblems: [
            'Solve by completing the square: x² + 6x + 5 = 0',
            'Solve: x² - 8x + 7 = 0',
            'Solve: x² + 4x - 12 = 0'
          ]
        },

        {
          id: 'completing-square-leading-coefficient',
          title: 'Completing the Square (a ≠ 1)',
          difficulty: 'advanced',
          focusObjectives: 'Solve ax² + bx + c = 0 by completing the square',

          learningObjectives: [
            'Factor out the leading coefficient from x² and x terms',
            'Complete the square inside the parentheses',
            'Solve the resulting equation'
          ],

          relevantFormulas: [
            'ax² + bx + c = 0 → a(x² + (b/a)x) + c = 0',
            'Factor out a: a[x² + (b/a)x] = -c',
            'Complete the square: a[x² + (b/a)x + (b/2a)²] = -c + a(b/2a)²'
          ],

          masterySignals: '3-4 correct solutions with proper factoring of a',

          availableTools: ['completingSquareVisualizer', 'quadraticFormulaVisualizer'],

          sampleProblems: [
            'Solve by completing the square: 2x² + 8x - 10 = 0',
            'Solve: 3x² - 6x + 1 = 0',
            'Solve: 4x² + 12x - 7 = 0'
          ]
        },

        {
          id: 'completing-square-vertex-form',
          title: 'Converting to Vertex Form',
          difficulty: 'intermediate',
          focusObjectives: 'Rewrite f(x) = ax² + bx + c as f(x) = a(x - h)² + k',

          learningObjectives: [
            'Use completing the square to find vertex form',
            'Identify vertex (h, k) from completed square form',
            'Connect algebraic form to graph features'
          ],

          relevantFormulas: [
            'Vertex form: f(x) = a(x - h)² + k where vertex is (h, k)',
            'Complete the square to convert from standard to vertex form'
          ],

          masterySignals: '3 correct conversions to vertex form with vertex identification',

          availableTools: ['completingSquareVisualizer', 'vertexFormTransform', 'parabolaGraph'],

          sampleProblems: [
            'Rewrite f(x) = x² + 6x + 5 in vertex form and find the vertex.',
            'Convert to vertex form: f(x) = 2x² - 8x + 3',
            'Find the vertex of f(x) = x² - 4x + 7 by completing the square.'
          ]
        }
      ]
    },

    learningObjectives: `
Students will:
- Recognize perfect square trinomials
- Complete the square to solve quadratic equations (a = 1 and a ≠ 1)
- Convert quadratic functions to vertex form f(x) = a(x - h)² + k
- Identify the vertex from completed square form
- Connect completing the square to graph transformations
    `,

    keyFormulas: `
- To complete the square for x² + bx, add (b/2)²
- (x + p)² = x² + 2px + p²
- For ax² + bx + c = 0 (a ≠ 1), factor out a first
- Vertex form: f(x) = a(x - h)² + k where vertex is (h, k)
    `
  },

  // ============================================
  // SECTION 1.5: QUADRATIC FORMULA
  // ============================================
  's3-math-quadratic-solving-formula': {
    displayName: 'Quadratic Formula',
    topicName: 'Solving quadratic equations using the quadratic formula',

    progressionStructure: {
      masteryPhilosophy: "Students master the quadratic formula when they can correctly identify a, b, c, substitute into the formula, simplify radicals, and interpret results. Typically requires 4-5 correct applications.",

      sections: [
        {
          id: 'quadratic-formula-introduction',
          title: 'The Quadratic Formula',
          difficulty: 'foundational',
          focusObjectives: 'Understand and memorize the quadratic formula',

          learningObjectives: [
            'Recall the quadratic formula: x = (-b ± √(b² - 4ac)) / (2a)',
            'Identify a, b, c from ax² + bx + c = 0',
            'Understand that the formula works for any quadratic equation'
          ],

          relevantFormulas: [
            'Quadratic Formula: x = (-b ± √(b² - 4ac)) / (2a)',
            'For ax² + bx + c = 0, identify: a (coefficient of x²), b (coefficient of x), c (constant)'
          ],

          masterySignals: '2 correct identifications of a, b, c and formula statement',

          availableTools: ['quadraticFormulaVisualizer'],

          sampleProblems: [
            'For 2x² - 5x + 3 = 0, identify a, b, and c.',
            'State the quadratic formula and identify its parts.',
            'For x² + 7x - 2 = 0, what are a, b, and c?'
          ]
        },

        {
          id: 'quadratic-formula-application',
          title: 'Applying the Quadratic Formula',
          difficulty: 'intermediate',
          focusObjectives: 'Substitute values and solve using the formula',

          learningObjectives: [
            'Substitute a, b, c into the quadratic formula correctly',
            'Simplify expressions under the square root (discriminant)',
            'Calculate final solutions and simplify radicals'
          ],

          relevantFormulas: [
            'x = (-b ± √(b² - 4ac)) / (2a)',
            'Discriminant: Δ = b² - 4ac',
            'Simplify radicals: √(ab) = √a × √b'
          ],

          masterySignals: '3-4 correct applications with proper simplification',

          availableTools: ['quadraticFormulaVisualizer', 'parabolaGraph'],

          sampleProblems: [
            'Solve using the quadratic formula: x² + 5x + 6 = 0',
            'Solve: 2x² - 7x + 3 = 0',
            'Solve: x² - 6x + 2 = 0 (simplify radical form)'
          ]
        },

        {
          id: 'quadratic-formula-discriminant',
          title: 'The Discriminant (Informally)',
          difficulty: 'intermediate',
          focusObjectives: 'Understand how b² - 4ac affects solutions',

          learningObjectives: [
            'Recognize that b² - 4ac determines the nature of solutions',
            'Understand: Δ > 0 (two distinct real solutions), Δ = 0 (one repeated solution)',
            'Informally recognize when Δ < 0 (no real solutions - to be formalized in Sec 4)'
          ],

          relevantFormulas: [
            'Discriminant: Δ = b² - 4ac',
            'If Δ > 0: two distinct real solutions',
            'If Δ = 0: one repeated real solution (perfect square)',
            'If Δ < 0: no real solutions (informally - complex numbers in Sec 4)'
          ],

          masterySignals: '2-3 correct interpretations of discriminant values',

          availableTools: ['quadraticFormulaVisualizer', 'parabolaGraph', 'rootsVisualizer'],

          sampleProblems: [
            'Calculate the discriminant for x² - 4x + 4 = 0. What does it tell you?',
            'For 2x² + 3x + 5 = 0, find Δ. How many real solutions exist?',
            'Without solving, determine the number of real solutions for x² - 6x + 9 = 0.'
          ]
        },

        {
          id: 'quadratic-formula-applications',
          title: 'Applications and Problem Solving',
          difficulty: 'advanced',
          focusObjectives: 'Use quadratic formula for word problems and complex equations',

          learningObjectives: [
            'Apply quadratic formula to real-world problems',
            'Choose appropriate methods (factorization vs. formula)',
            'Interpret solutions in context (reject negative when necessary)'
          ],

          relevantFormulas: [
            'Use quadratic formula when factorization is difficult or impossible',
            'Always interpret solutions in the context of the problem'
          ],

          masterySignals: '3 correct word problems using quadratic formula',

          availableTools: ['quadraticFormulaVisualizer', 'wordProblemDiagram', 'parabolaGraph'],

          sampleProblems: [
            'The area of a rectangle is 50 cm². Its length is 3 cm more than its width. Find the dimensions.',
            'A ball is thrown upward with equation h = -5t² + 20t + 2. When does it hit the ground (h = 0)?'
          ]
        }
      ]
    },

    learningObjectives: `
Students will:
- Recall and apply the quadratic formula: x = (-b ± √(b² - 4ac)) / (2a)
- Correctly identify a, b, c from standard form
- Substitute and simplify to find solutions
- Understand the discriminant Δ = b² - 4ac informally
- Apply the quadratic formula to word problems
- Choose between factorization and formula appropriately
    `,

    keyFormulas: `
- Quadratic Formula: x = (-b ± √(b² - 4ac)) / (2a)
- Discriminant: Δ = b² - 4ac
- For ax² + bx + c = 0: a is coefficient of x², b is coefficient of x, c is constant
    `
  },

  // ============================================
  // SECTION 1.6: EXPONENTIAL QUADRATICS
  // ============================================
  's3-math-quadratic-solving-exponential': {
    displayName: 'Exponential Quadratics',
    topicName: 'Solving quadratic exponential equations (linked to exponents topic)',

    progressionStructure: {
      masteryPhilosophy: "Students master exponential quadratics when they can recognize substitution patterns (e.g., let y = 2^x), solve the resulting quadratic, and back-substitute to find x. Typically requires 3-4 correct solutions.",

      sections: [
        {
          id: 'exponential-quadratic-substitution',
          title: 'Substitution Method',
          difficulty: 'intermediate',
          focusObjectives: 'Use substitution to convert to quadratic form',

          learningObjectives: [
            'Recognize exponential equations that can be converted to quadratics',
            'Use substitution (e.g., let y = 2^x) to simplify',
            'Solve the resulting quadratic in y'
          ],

          relevantFormulas: [
            'If equation involves 2^(2x) and 2^x, let y = 2^x, then 2^(2x) = y²',
            'Solve quadratic in y, then back-substitute to find x'
          ],

          masterySignals: '3 correct substitutions and quadratic solutions',

          availableTools: ['factoringVisualizer', 'quadraticFormulaVisualizer'],

          sampleProblems: [
            'Solve: 2^(2x) - 5(2^x) + 4 = 0 (let y = 2^x)',
            'Solve: 3^(2x) - 4(3^x) + 3 = 0'
          ]
        },

        {
          id: 'exponential-quadratic-back-substitution',
          title: 'Back-Substitution to Find x',
          difficulty: 'advanced',
          focusObjectives: 'Convert y solutions back to x using logarithms',

          learningObjectives: [
            'After finding y, use y = a^x to solve for x',
            'Apply logarithms: x = log_a(y)',
            'Verify solutions in the original equation'
          ],

          relevantFormulas: [
            'If y = a^x, then x = log_a(y)',
            'For y = 2^x: x = log₂(y) or x = log(y)/log(2)',
            'Reject y ≤ 0 since a^x > 0 for all x'
          ],

          masterySignals: '2-3 complete solutions with logarithmic back-substitution',

          availableTools: ['quadraticFormulaVisualizer'],

          sampleProblems: [
            'Solve: 4^x - 5(2^x) + 4 = 0 (let y = 2^x, then find x)',
            'Solve: 9^x - 10(3^x) + 9 = 0'
          ]
        },

        {
          id: 'exponential-quadratic-applications',
          title: 'Applications and Mixed Problems',
          difficulty: 'advanced',
          focusObjectives: 'Apply to growth, decay, and compound interest contexts',

          learningObjectives: [
            'Model exponential growth/decay with quadratic constraints',
            'Solve real-world problems involving exponential quadratics',
            'Link to Topic 1: Exponents and indices'
          ],

          relevantFormulas: [
            'Exponential growth: A = P(1 + r)^t',
            'Compound interest with quadratic constraints'
          ],

          masterySignals: '2 correct application problems',

          availableTools: ['wordProblemDiagram'],

          sampleProblems: [
            'A population grows by factor 1.2 each year. After how many years will it have more than doubled but less than tripled?'
          ]
        }
      ]
    },

    learningObjectives: `
Students will:
- Recognize exponential equations reducible to quadratics
- Use substitution to convert to quadratic form
- Solve the quadratic and back-substitute to find x
- Apply logarithms to solve for x from y = a^x
- Connect to exponents topic (Topic 1)
    `,

    keyFormulas: `
- Substitution: If equation has a^(2x) and a^x, let y = a^x
- Then a^(2x) = (a^x)² = y²
- Solve quadratic in y, then x = log_a(y)
- Reject y ≤ 0 (exponentials are always positive)
    `
  },

  // ============================================
  // SECTION 2.1: WORD PROBLEMS
  // ============================================
  's3-math-quadratic-word-problems': {
    displayName: 'Word Problems and Optimization',
    topicName: 'Modeling and solving practical problems using quadratic equations',

    progressionStructure: {
      masteryPhilosophy: "Students master word problems when they can translate real-world situations into quadratic equations, solve them, and interpret solutions contextually. Typically requires 4-5 correct word problems across different contexts.",

      sections: [
        {
          id: 'word-problems-translating',
          title: 'Translating to Quadratic Equations',
          difficulty: 'intermediate',
          focusObjectives: 'Convert word problems into algebraic equations',

          learningObjectives: [
            'Identify the variable to represent (e.g., width, time)',
            'Express other quantities in terms of the variable',
            'Set up a quadratic equation based on the problem constraints'
          ],

          relevantFormulas: [
            'Area of rectangle: A = length × width',
            'Perimeter: P = 2(l + w)',
            'Pythagorean theorem: a² + b² = c²',
            'Consecutive integers: n, n+1, n+2'
          ],

          masterySignals: '2-3 correct translations to quadratic form',

          availableTools: ['wordProblemDiagram'],

          sampleProblems: [
            'A rectangle has area 60 cm². Its length is 4 cm more than its width. Find the dimensions.',
            'The sum of a number and its square is 56. Find the number.',
            'Two consecutive even integers have a product of 168. Find them.'
          ]
        },

        {
          id: 'word-problems-solving-interpreting',
          title: 'Solving and Interpreting Solutions',
          difficulty: 'intermediate',
          focusObjectives: 'Solve quadratics from word problems and interpret results',

          learningObjectives: [
            'Solve the quadratic equation (factorization, formula, completing square)',
            'Interpret solutions in context (reject negative lengths, times, etc.)',
            'Verify solutions make sense in the original problem'
          ],

          relevantFormulas: [
            'Always check if solutions are physically meaningful',
            'Reject negative values for quantities like length, time, population'
          ],

          masterySignals: '3-4 complete word problems with correct interpretation',

          availableTools: ['wordProblemDiagram', 'factoringVisualizer', 'quadraticFormulaVisualizer'],

          sampleProblems: [
            'A garden is 5 m longer than it is wide. If its area is 84 m², find its dimensions.',
            'A ball is thrown upward. Its height is given by h = -5t² + 20t + 1. When is it at height 16 m?'
          ]
        },

        {
          id: 'word-problems-optimization',
          title: 'Quadratic Optimization Problems',
          difficulty: 'advanced',
          focusObjectives: 'Maximize or minimize quantities using quadratics',

          learningObjectives: [
            'Set up optimization problems (max area, min cost, max profit)',
            'Express quantity to optimize as a quadratic function',
            'Find the vertex to determine maximum or minimum value',
            'Use completing the square or vertex form'
          ],

          relevantFormulas: [
            'For f(x) = ax² + bx + c, vertex is at x = -b/(2a)',
            'Vertex form: f(x) = a(x - h)² + k gives vertex (h, k)',
            'If a > 0: parabola opens up (minimum at vertex)',
            'If a < 0: parabola opens down (maximum at vertex)'
          ],

          masterySignals: '3-4 correct optimization problems',

          availableTools: ['wordProblemDiagram', 'parabolaGraph', 'vertexFormTransform'],

          sampleProblems: [
            'A farmer has 100 m of fencing. What dimensions give the maximum area for a rectangular enclosure?',
            'A company sells x items. Profit is P(x) = -2x² + 80x - 200. How many items maximize profit?',
            'A ball is thrown with h(t) = -5t² + 30t + 2. What is its maximum height?'
          ]
        },

        {
          id: 'word-problems-mixed-applications',
          title: 'Mixed Real-World Applications',
          difficulty: 'advanced',
          focusObjectives: 'Apply to diverse contexts (physics, business, geometry)',

          learningObjectives: [
            'Solve projectile motion problems (h = -gt² + v₀t + h₀)',
            'Solve business problems (revenue, profit, break-even)',
            'Solve geometric problems (Pythagorean theorem, areas)',
            'Choose appropriate solution method for the context'
          ],

          relevantFormulas: [
            'Projectile height: h = -gt² + v₀t + h₀ (g ≈ 5 m/s² or 10 m/s²)',
            'Revenue: R = price × quantity',
            'Profit: P = R - C (revenue - cost)'
          ],

          masterySignals: '4-5 diverse word problems solved correctly',

          availableTools: ['wordProblemDiagram', 'parabolaGraph', 'quadraticFormulaVisualizer'],

          sampleProblems: [
            'A stone is thrown from a 50 m cliff with initial velocity 15 m/s. When does it hit the ground?',
            'A company produces x units. Cost is C(x) = 2x² - 60x + 500. At what production level is cost minimized?',
            'A right triangle has legs differing by 7 cm and hypotenuse 13 cm. Find the leg lengths.'
          ]
        }
      ]
    },

    learningObjectives: `
Students will:
- Translate real-world situations into quadratic equations
- Solve word problems involving area, perimeter, Pythagorean theorem, consecutive integers
- Interpret solutions in context (reject negative or unrealistic values)
- Solve optimization problems (maximum area, minimum cost, maximum profit)
- Apply quadratics to projectile motion, business, and geometry contexts
- Connect algebraic representations to real-world problem solving
    `,

    keyFormulas: `
- Area, perimeter, Pythagorean theorem formulas
- Vertex of parabola: x = -b/(2a) or from vertex form
- Projectile motion: h = -gt² + v₀t + h₀
- Revenue, profit, cost relationships
- For optimization: use vertex form or completing the square
    `
  },

  // ============================================
  // SECTION 3.1: GRAPH FEATURES
  // ============================================
  's3-math-quadratic-graph-features': {
    displayName: 'Features of Quadratic Graphs',
    topicName: 'Identifying and labeling features of parabolas (shape, orientation, vertex, intercepts, axis of symmetry)',

    progressionStructure: {
      masteryPhilosophy: "Students master graph features when they can identify, sketch, and label all key parabola features from equations or graphs. Typically requires 3-4 correct identifications and sketches.",

      sections: [
        {
          id: 'graph-features-parabolic-shape',
          title: 'Parabolic Shape and Orientation',
          difficulty: 'foundational',
          focusObjectives: 'Recognize parabola shape and opening direction',

          learningObjectives: [
            'Understand that quadratic functions graph as parabolas',
            'Determine opening direction from coefficient a (a > 0: up, a < 0: down)',
            'Recognize that |a| affects the width (larger |a|: narrower, smaller |a|: wider)'
          ],

          relevantFormulas: [
            'f(x) = ax² + bx + c graphs as a parabola',
            'If a > 0: parabola opens upward (U-shape)',
            'If a < 0: parabola opens downward (∩-shape)',
            '|a| determines width: larger |a| = narrower parabola'
          ],

          masterySignals: '2 correct determinations of orientation and width',

          availableTools: ['parabolaGraph', 'vertexFormTransform'],

          sampleProblems: [
            'For f(x) = 2x² - 4x + 1, does the parabola open up or down?',
            'Compare the widths of f(x) = x² and g(x) = 3x². Which is narrower?',
            'Sketch the general shape of f(x) = -x² + 5x - 2.'
          ]
        },

        {
          id: 'graph-features-vertex',
          title: 'Vertex and Axis of Symmetry',
          difficulty: 'intermediate',
          focusObjectives: 'Find vertex and axis of symmetry',

          learningObjectives: [
            'Locate the vertex (turning point) of a parabola',
            'Use x = -b/(2a) to find x-coordinate of vertex',
            'Substitute to find y-coordinate of vertex',
            'Identify axis of symmetry as the vertical line x = h through vertex (h, k)'
          ],

          relevantFormulas: [
            'Vertex x-coordinate: x = -b/(2a)',
            'Vertex y-coordinate: substitute x into f(x)',
            'Vertex: (h, k) where h = -b/(2a), k = f(h)',
            'Axis of symmetry: x = h (vertical line through vertex)'
          ],

          masterySignals: '3 correct vertex and axis calculations',

          availableTools: ['parabolaGraph', 'vertexFormTransform'],

          sampleProblems: [
            'Find the vertex and axis of symmetry for f(x) = x² - 6x + 5.',
            'For f(x) = 2x² + 8x + 3, find the vertex.',
            'What is the axis of symmetry for f(x) = -x² + 4x - 1?'
          ]
        },

        {
          id: 'graph-features-intercepts',
          title: 'x-intercepts and y-intercept',
          difficulty: 'intermediate',
          focusObjectives: 'Find x-intercepts (roots) and y-intercept',

          learningObjectives: [
            'Find y-intercept by setting x = 0: f(0) = c',
            'Find x-intercepts (zeros/roots) by solving f(x) = 0',
            'Recognize that x-intercepts may be 0, 1, or 2 points',
            'Relate number of x-intercepts to discriminant'
          ],

          relevantFormulas: [
            'y-intercept: f(0) = c (constant term)',
            'x-intercepts: solve ax² + bx + c = 0',
            'Number of x-intercepts: Δ = b² - 4ac (Δ > 0: two, Δ = 0: one, Δ < 0: zero)'
          ],

          masterySignals: '3 correct intercept calculations',

          availableTools: ['parabolaGraph', 'rootsVisualizer', 'factoringVisualizer'],

          sampleProblems: [
            'Find all intercepts for f(x) = x² - 5x + 6.',
            'For f(x) = 2x² + 4x + 5, find the y-intercept and x-intercepts.',
            'How many x-intercepts does f(x) = x² - 4x + 4 have?'
          ]
        },

        {
          id: 'graph-features-complete-sketch',
          title: 'Complete Sketch with All Features',
          difficulty: 'advanced',
          focusObjectives: 'Sketch parabola with all labeled features',

          learningObjectives: [
            'Combine all features: orientation, vertex, axis, intercepts',
            'Sketch accurate parabola on coordinate plane',
            'Label all key points and lines',
            'Use symmetry to plot additional points'
          ],

          relevantFormulas: [
            'All previous formulas combined',
            'Use symmetry: points equidistant from axis have same y-value'
          ],

          masterySignals: '3-4 complete, accurately labeled sketches',

          availableTools: ['parabolaGraph', 'vertexFormTransform', 'rootsVisualizer'],

          sampleProblems: [
            'Sketch f(x) = x² - 4x + 3 with all features labeled.',
            'Sketch f(x) = -2x² + 8x - 5 and label vertex, intercepts, axis.',
            'For f(x) = x² + 2x - 8, create a complete labeled sketch.'
          ]
        }
      ]
    },

    learningObjectives: `
Students will:
- Identify parabolic shape and orientation (a > 0 or a < 0)
- Determine vertex using x = -b/(2a)
- Find axis of symmetry (vertical line through vertex)
- Calculate y-intercept (c) and x-intercepts (solve f(x) = 0)
- Sketch complete parabola with all features labeled
- Recognize relationship between discriminant and number of x-intercepts
    `,

    keyFormulas: `
- Parabola orientation: a > 0 (up), a < 0 (down)
- Vertex: (h, k) where h = -b/(2a), k = f(h)
- Axis of symmetry: x = h
- y-intercept: f(0) = c
- x-intercepts: solve ax² + bx + c = 0
- Discriminant: Δ = b² - 4ac (affects number of x-intercepts)
    `
  },

  // ============================================
  // SECTION 3.2: GRAPHS IN COMPLETED SQUARE FORM
  // ============================================
  's3-math-quadratic-graph-completed-square': {
    displayName: 'Graphs: Vertex Form f(x) = a(x - h)² + k',
    topicName: 'Sketching quadratic graphs in completed square (vertex) form',

    progressionStructure: {
      masteryPhilosophy: "Students master vertex form graphing when they can identify transformations (h, k shifts), sketch accurately from vertex form, and convert between forms. Typically requires 3-4 correct sketches.",

      sections: [
        {
          id: 'vertex-form-identification',
          title: 'Identifying Vertex from Vertex Form',
          difficulty: 'foundational',
          focusObjectives: 'Read vertex directly from f(x) = a(x - h)² + k',

          learningObjectives: [
            'Recognize vertex form: f(x) = a(x - h)² + k',
            'Identify vertex as (h, k) directly from the equation',
            'Note the sign: f(x) = a(x - 3)² + 5 has vertex (3, 5), not (-3, 5)'
          ],

          relevantFormulas: [
            'Vertex form: f(x) = a(x - h)² + k',
            'Vertex is at (h, k)',
            'IMPORTANT: f(x) = a(x - h)² has h with opposite sign in vertex'
          ],

          masterySignals: '2 correct vertex identifications from vertex form',

          availableTools: ['parabolaGraph', 'vertexFormTransform'],

          sampleProblems: [
            'Find the vertex of f(x) = (x - 4)² + 3.',
            'What is the vertex of f(x) = 2(x + 1)² - 5?',
            'For f(x) = -(x - 2)² + 7, identify the vertex.'
          ]
        },

        {
          id: 'vertex-form-transformations',
          title: 'Understanding Transformations',
          difficulty: 'intermediate',
          focusObjectives: 'Describe shifts and stretches from y = x²',

          learningObjectives: [
            'Start with base parabola y = x²',
            'Horizontal shift: h units right (or left if h < 0)',
            'Vertical shift: k units up (or down if k < 0)',
            'Vertical stretch/compression: multiply y by a'
          ],

          relevantFormulas: [
            'Base parabola: y = x² (vertex at origin)',
            'f(x) = a(x - h)² + k is y = x² transformed:',
            '  - Shift right h units (left if h < 0)',
            '  - Shift up k units (down if k < 0)',
            '  - Stretch vertically by factor |a| (flip if a < 0)'
          ],

          masterySignals: '3 correct transformation descriptions',

          availableTools: ['vertexFormTransform', 'parabolaGraph'],

          sampleProblems: [
            'Describe the transformations from y = x² to f(x) = (x - 3)² + 2.',
            'How is f(x) = 2(x + 1)² - 4 obtained from y = x²?',
            'What transformations give f(x) = -(x - 5)² + 1?'
          ]
        },

        {
          id: 'vertex-form-sketching',
          title: 'Sketching from Vertex Form',
          difficulty: 'intermediate',
          focusObjectives: 'Sketch parabola using vertex and key features',

          learningObjectives: [
            'Plot the vertex (h, k) first',
            'Determine opening direction from sign of a',
            'Use symmetry to plot additional points',
            'Find intercepts if needed (set f(x) = 0 or x = 0)'
          ],

          relevantFormulas: [
            'Vertex: (h, k) from f(x) = a(x - h)² + k',
            'Axis of symmetry: x = h',
            'y-intercept: f(0) = a(0 - h)² + k = ah² + k',
            'x-intercepts: solve a(x - h)² + k = 0'
          ],

          masterySignals: '3-4 accurate sketches from vertex form',

          availableTools: ['parabolaGraph', 'vertexFormTransform', 'rootsVisualizer'],

          sampleProblems: [
            'Sketch f(x) = (x - 2)² + 1 and label vertex and axis.',
            'Sketch f(x) = -2(x + 3)² + 4 with all features.',
            'Graph f(x) = 0.5(x - 1)² - 3 and find intercepts.'
          ]
        },

        {
          id: 'vertex-form-conversion',
          title: 'Converting Between Forms',
          difficulty: 'advanced',
          focusObjectives: 'Convert between vertex form and standard form',

          learningObjectives: [
            'Expand vertex form to get standard form: f(x) = ax² + bx + c',
            'Complete the square to convert standard to vertex form',
            'Verify that both forms represent the same parabola'
          ],

          relevantFormulas: [
            'Expand: a(x - h)² + k = a(x² - 2hx + h²) + k = ax² - 2ahx + ah² + k',
            'Completing the square: ax² + bx + c → a(x - h)² + k where h = -b/(2a)'
          ],

          masterySignals: '3 correct conversions in both directions',

          availableTools: ['completingSquareVisualizer', 'parabolaGraph'],

          sampleProblems: [
            'Expand f(x) = (x - 3)² + 5 to standard form.',
            'Convert f(x) = 2(x + 1)² - 7 to standard form.',
            'Rewrite f(x) = x² - 6x + 11 in vertex form.'
          ]
        }
      ]
    },

    learningObjectives: `
Students will:
- Identify vertex (h, k) directly from f(x) = a(x - h)² + k
- Describe transformations from y = x² (horizontal shift, vertical shift, stretch/flip)
- Sketch parabolas from vertex form with labeled features
- Find intercepts from vertex form
- Convert between vertex form and standard form
    `,

    keyFormulas: `
- Vertex form: f(x) = a(x - h)² + k
- Vertex: (h, k)
- Transformations from y = x²: shift right h, shift up k, stretch by |a|
- Axis of symmetry: x = h
- To expand: a(x - h)² + k = ax² - 2ahx + ah² + k
- To complete square: see Section 1.4
    `
  },

  // ============================================
  // SECTION 3.3: GRAPHS IN FACTORISED FORM
  // ============================================
  's3-math-quadratic-graph-factorised': {
    displayName: 'Graphs: Factorised Form f(x) = a(x - p)(x - q)',
    topicName: 'Sketching quadratic graphs in factorised form using roots',

    progressionStructure: {
      masteryPhilosophy: "Students master factorised form graphing when they can identify roots, find vertex (midpoint), and sketch accurately. Typically requires 3-4 correct sketches.",

      sections: [
        {
          id: 'factorised-form-roots',
          title: 'Identifying Roots from Factorised Form',
          difficulty: 'foundational',
          focusObjectives: 'Read x-intercepts directly from f(x) = a(x - p)(x - q)',

          learningObjectives: [
            'Recognize factorised form: f(x) = a(x - p)(x - q)',
            'Identify roots (x-intercepts) as x = p and x = q',
            'Understand that roots are where f(x) = 0'
          ],

          relevantFormulas: [
            'Factorised form: f(x) = a(x - p)(x - q)',
            'x-intercepts (roots): x = p and x = q',
            'These are the points where the parabola crosses the x-axis'
          ],

          masterySignals: '2 correct root identifications',

          availableTools: ['rootsVisualizer', 'parabolaGraph'],

          sampleProblems: [
            'Find the x-intercepts of f(x) = (x - 2)(x - 5).',
            'What are the roots of f(x) = 2(x + 1)(x - 3)?',
            'For f(x) = -(x + 4)(x - 1), identify the x-intercepts.'
          ]
        },

        {
          id: 'factorised-form-vertex-midpoint',
          title: 'Finding Vertex from Roots',
          difficulty: 'intermediate',
          focusObjectives: 'Use midpoint of roots to find vertex x-coordinate',

          learningObjectives: [
            'Find x-coordinate of vertex as midpoint of roots: h = (p + q)/2',
            'Substitute h into f(x) to find y-coordinate k = f(h)',
            'Recognize vertex lies on axis of symmetry between roots'
          ],

          relevantFormulas: [
            'Vertex x-coordinate: h = (p + q)/2 (midpoint of roots)',
            'Vertex y-coordinate: k = f(h) = a(h - p)(h - q)',
            'Axis of symmetry: x = (p + q)/2'
          ],

          masterySignals: '3 correct vertex calculations from roots',

          availableTools: ['rootsVisualizer', 'parabolaGraph'],

          sampleProblems: [
            'Find the vertex of f(x) = (x - 1)(x - 7).',
            'For f(x) = 2(x + 2)(x - 4), find the vertex.',
            'What is the vertex of f(x) = -(x - 3)(x + 1)?'
          ]
        },

        {
          id: 'factorised-form-sketching',
          title: 'Sketching from Factorised Form',
          difficulty: 'intermediate',
          focusObjectives: 'Sketch using roots, vertex, and orientation',

          learningObjectives: [
            'Plot x-intercepts (p, 0) and (q, 0) first',
            'Find and plot vertex at ((p+q)/2, f((p+q)/2))',
            'Determine opening from sign of a',
            'Sketch parabola through roots and vertex'
          ],

          relevantFormulas: [
            'x-intercepts: (p, 0) and (q, 0)',
            'Vertex: ((p+q)/2, f((p+q)/2))',
            'y-intercept: f(0) = a(0 - p)(0 - q) = apq'
          ],

          masterySignals: '3-4 accurate sketches from factorised form',

          availableTools: ['rootsVisualizer', 'parabolaGraph'],

          sampleProblems: [
            'Sketch f(x) = (x - 1)(x - 5) and label all features.',
            'Sketch f(x) = -2(x + 2)(x - 3) with vertex and intercepts.',
            'Graph f(x) = 0.5(x + 1)(x - 4) and find the y-intercept.'
          ]
        },

        {
          id: 'factorised-form-conversion',
          title: 'Converting Between Forms',
          difficulty: 'intermediate',
          focusObjectives: 'Expand factorised to standard form and vice versa',

          learningObjectives: [
            'Expand f(x) = a(x - p)(x - q) to f(x) = ax² + bx + c',
            'Factor f(x) = ax² + bx + c to get f(x) = a(x - p)(x - q)',
            'Verify equivalence of different forms'
          ],

          relevantFormulas: [
            'Expand: a(x - p)(x - q) = a[x² - (p+q)x + pq] = ax² - a(p+q)x + apq',
            'Factor: ax² + bx + c = a(x - p)(x - q) where p and q are roots'
          ],

          masterySignals: '3 correct conversions',

          availableTools: ['factoringVisualizer', 'rootsVisualizer'],

          sampleProblems: [
            'Expand f(x) = (x - 2)(x - 5) to standard form.',
            'Factor f(x) = x² - 7x + 12 to factorised form.',
            'Expand f(x) = 2(x + 1)(x - 3) to standard form.'
          ]
        }
      ]
    },

    learningObjectives: `
Students will:
- Identify x-intercepts (roots) directly from f(x) = a(x - p)(x - q)
- Find vertex x-coordinate as midpoint of roots: h = (p + q)/2
- Calculate vertex y-coordinate by substitution
- Sketch parabolas from factorised form with all features
- Find y-intercept from factorised form: f(0) = apq
- Convert between factorised and standard forms
    `,

    keyFormulas: `
- Factorised form: f(x) = a(x - p)(x - q)
- x-intercepts (roots): x = p and x = q
- Vertex x-coordinate: h = (p + q)/2
- Vertex y-coordinate: k = f(h)
- y-intercept: f(0) = apq
- Expand: a(x - p)(x - q) = ax² - a(p+q)x + apq
    `
  },

  // ============================================
  // SECTION 3.4: GRAPHS IN POLYNOMIAL FORM
  // ============================================
  's3-math-quadratic-graph-polynomial': {
    displayName: 'Graphs: Standard Form f(x) = ax² + bx + c',
    topicName: 'Sketching quadratic graphs in standard (polynomial) form',

    progressionStructure: {
      masteryPhilosophy: "Students master standard form graphing when they can find all features from ax² + bx + c, sketch accurately, and choose appropriate methods. Typically requires 4-5 correct sketches.",

      sections: [
        {
          id: 'polynomial-form-orientation-intercepts',
          title: 'Orientation and y-intercept',
          difficulty: 'foundational',
          focusObjectives: 'Determine opening and y-intercept from standard form',

          learningObjectives: [
            'Identify coefficient a to determine opening (up if a > 0, down if a < 0)',
            'Find y-intercept directly: f(0) = c',
            'Understand that c is where parabola crosses y-axis'
          ],

          relevantFormulas: [
            'Standard form: f(x) = ax² + bx + c',
            'Opening: a > 0 (up), a < 0 (down)',
            'y-intercept: (0, c)'
          ],

          masterySignals: '2 correct determinations of orientation and y-intercept',

          availableTools: ['parabolaGraph'],

          sampleProblems: [
            'For f(x) = 2x² - 5x + 3, does it open up or down? What is the y-intercept?',
            'Find the y-intercept of f(x) = -x² + 4x - 7.',
            'Does f(x) = 3x² + 6x - 2 open upward or downward?'
          ]
        },

        {
          id: 'polynomial-form-vertex',
          title: 'Finding Vertex from Standard Form',
          difficulty: 'intermediate',
          focusObjectives: 'Use x = -b/(2a) to find vertex',

          learningObjectives: [
            'Apply formula x = -b/(2a) to find vertex x-coordinate',
            'Substitute x-value into f(x) to find vertex y-coordinate',
            'Identify axis of symmetry as x = -b/(2a)'
          ],

          relevantFormulas: [
            'Vertex x-coordinate: h = -b/(2a)',
            'Vertex y-coordinate: k = f(h) = a(h)² + b(h) + c',
            'Vertex: (h, k) = (-b/(2a), f(-b/(2a)))',
            'Axis of symmetry: x = -b/(2a)'
          ],

          masterySignals: '3 correct vertex calculations',

          availableTools: ['parabolaGraph', 'completingSquareVisualizer'],

          sampleProblems: [
            'Find the vertex of f(x) = x² - 6x + 8.',
            'For f(x) = 2x² + 8x + 5, find the vertex.',
            'What is the vertex of f(x) = -x² + 4x - 1?'
          ]
        },

        {
          id: 'polynomial-form-x-intercepts',
          title: 'Finding x-intercepts',
          difficulty: 'intermediate',
          focusObjectives: 'Solve ax² + bx + c = 0 to find x-intercepts',

          learningObjectives: [
            'Set f(x) = 0 and solve for x (factorization, formula, completing square)',
            'Recognize that x-intercepts are roots of the equation',
            'Understand that there may be 0, 1, or 2 x-intercepts'
          ],

          relevantFormulas: [
            'x-intercepts: solve ax² + bx + c = 0',
            'Methods: factorization, quadratic formula, completing the square',
            'Discriminant Δ = b² - 4ac determines number of x-intercepts'
          ],

          masterySignals: '3 correct x-intercept calculations',

          availableTools: ['factoringVisualizer', 'quadraticFormulaVisualizer', 'rootsVisualizer'],

          sampleProblems: [
            'Find the x-intercepts of f(x) = x² - 5x + 6.',
            'For f(x) = 2x² + 3x - 2, find the x-intercepts.',
            'How many x-intercepts does f(x) = x² + 2x + 5 have?'
          ]
        },

        {
          id: 'polynomial-form-complete-sketch',
          title: 'Complete Sketch from Standard Form',
          difficulty: 'advanced',
          focusObjectives: 'Combine all features to sketch accurately',

          learningObjectives: [
            'Find orientation, vertex, axis, and all intercepts',
            'Plot key points and sketch smooth parabola',
            'Use symmetry to verify sketch accuracy',
            'Label all features clearly'
          ],

          relevantFormulas: [
            'All formulas from previous sections combined',
            'Strategy: orientation → vertex → y-intercept → x-intercepts → sketch'
          ],

          masterySignals: '4-5 complete, accurate sketches with all features',

          availableTools: ['parabolaGraph', 'vertexFormTransform', 'rootsVisualizer'],

          sampleProblems: [
            'Sketch f(x) = x² - 4x + 3 with all features labeled.',
            'Sketch f(x) = -2x² + 4x + 6 and identify vertex, intercepts, axis.',
            'Graph f(x) = 2x² - 8x + 6 and label all key features.'
          ]
        },

        {
          id: 'polynomial-form-choosing-methods',
          title: 'Choosing Efficient Methods',
          difficulty: 'advanced',
          focusObjectives: 'Select appropriate method based on coefficients',

          learningObjectives: [
            'Use factorization when b² - 4ac is a perfect square',
            'Use completing the square for vertex form conversion',
            'Use quadratic formula when factorization is difficult',
            'Use x = -b/(2a) for quick vertex calculation'
          ],

          relevantFormulas: [
            'Check discriminant before choosing method',
            'Factorization: fastest when factors are obvious',
            'Quadratic formula: always works',
            'Completing square: best for vertex form'
          ],

          masterySignals: '3-4 problems with efficient method selection',

          availableTools: ['factoringVisualizer', 'quadraticFormulaVisualizer', 'completingSquareVisualizer'],

          sampleProblems: [
            'For f(x) = x² - 7x + 12, which method is most efficient to find x-intercepts?',
            'Sketch f(x) = 2x² + 5x - 3 using the most efficient approach.',
            'Convert f(x) = x² + 6x + 11 to vertex form and sketch.'
          ]
        }
      ]
    },

    learningObjectives: `
Students will:
- Identify orientation (a > 0 or a < 0) and y-intercept (c) from standard form
- Calculate vertex using x = -b/(2a) and substitution
- Find x-intercepts by solving ax² + bx + c = 0
- Sketch complete parabola from standard form with all features labeled
- Choose efficient methods (factorization, formula, completing square) based on context
- Use discriminant to predict number of x-intercepts
    `,

    keyFormulas: `
- Standard form: f(x) = ax² + bx + c
- Orientation: a > 0 (up), a < 0 (down)
- y-intercept: (0, c)
- Vertex: (-b/(2a), f(-b/(2a)))
- Axis of symmetry: x = -b/(2a)
- x-intercepts: solve ax² + bx + c = 0
- Discriminant: Δ = b² - 4ac (two x-intercepts if Δ > 0, one if Δ = 0, zero if Δ < 0)
    `
  },

  // ============================================
  // SECTION 3.5: FINDING QUADRATIC FUNCTION
  // ============================================
  's3-math-quadratic-graph-finding-function': {
    displayName: 'Finding Quadratic Functions from Graphs',
    topicName: 'Determining the quadratic function given its graph or key features',

    progressionStructure: {
      masteryPhilosophy: "Students master finding functions when they can work backward from graphs/features to equations in any form. Typically requires 4-5 correct function determinations.",

      sections: [
        {
          id: 'finding-function-from-vertex',
          title: 'From Vertex and One Point',
          difficulty: 'intermediate',
          focusObjectives: 'Use vertex form f(x) = a(x - h)² + k',

          learningObjectives: [
            'Write f(x) = a(x - h)² + k using given vertex (h, k)',
            'Substitute another point to solve for a',
            'Verify the function passes through all given points'
          ],

          relevantFormulas: [
            'Start with f(x) = a(x - h)² + k where (h, k) is vertex',
            'Substitute known point (x₁, y₁): y₁ = a(x₁ - h)² + k',
            'Solve for a'
          ],

          masterySignals: '3 correct functions found from vertex and point',

          availableTools: ['parabolaGraph', 'vertexFormTransform'],

          sampleProblems: [
            'Find the equation if vertex is (2, -3) and the parabola passes through (0, 5).',
            'A parabola has vertex (-1, 4) and passes through (1, 0). Find f(x).',
            'Given vertex (3, -2) and point (5, 6), find the quadratic function.'
          ]
        },

        {
          id: 'finding-function-from-roots',
          title: 'From x-intercepts (Roots)',
          difficulty: 'intermediate',
          focusObjectives: 'Use factorised form f(x) = a(x - p)(x - q)',

          learningObjectives: [
            'Write f(x) = a(x - p)(x - q) using given roots p and q',
            'Substitute another point (often y-intercept) to solve for a',
            'Expand to standard form if needed'
          ],

          relevantFormulas: [
            'Start with f(x) = a(x - p)(x - q) where p and q are x-intercepts',
            'Substitute known point: y₁ = a(x₁ - p)(x₁ - q)',
            'Solve for a'
          ],

          masterySignals: '3 correct functions from roots and point',

          availableTools: ['rootsVisualizer', 'parabolaGraph', 'factoringVisualizer'],

          sampleProblems: [
            'Find the equation if x-intercepts are -2 and 4, and y-intercept is (0, -8).',
            'A parabola crosses the x-axis at 1 and 5, and passes through (2, -6). Find f(x).',
            'Given roots -3 and 2, and point (0, 12), find the quadratic function.'
          ]
        },

        {
          id: 'finding-function-from-three-points',
          title: 'From Three Points (System of Equations)',
          difficulty: 'advanced',
          focusObjectives: 'Use f(x) = ax² + bx + c and solve system',

          learningObjectives: [
            'Substitute three points into f(x) = ax² + bx + c',
            'Set up system of three equations with unknowns a, b, c',
            'Solve the system to find a, b, c'
          ],

          relevantFormulas: [
            'Given points (x₁, y₁), (x₂, y₂), (x₃, y₃):',
            'y₁ = ax₁² + bx₁ + c',
            'y₂ = ax₂² + bx₂ + c',
            'y₃ = ax₃² + bx₃ + c',
            'Solve system for a, b, c'
          ],

          masterySignals: '3 correct functions from three points',

          availableTools: ['parabolaGraph'],

          sampleProblems: [
            'Find f(x) passing through (0, 3), (1, 6), and (2, 11).',
            'A parabola passes through (-1, 8), (0, 3), and (2, 3). Find f(x).',
            'Determine the equation passing through (1, 0), (2, -3), and (3, -4).'
          ]
        },

        {
          id: 'finding-function-from-graph-sketch',
          title: 'From Graph or Sketch',
          difficulty: 'advanced',
          focusObjectives: 'Extract features from graph and determine equation',

          learningObjectives: [
            'Read vertex, intercepts, and other points from graph',
            'Choose appropriate form (vertex, factorised, standard) based on available info',
            'Determine equation and verify by checking graph features'
          ],

          relevantFormulas: [
            'Strategy: identify vertex → use vertex form, or',
            'Identify x-intercepts → use factorised form, or',
            'Use any three points → standard form with system',
            'Always verify y-intercept and other visible points'
          ],

          masterySignals: '4 correct equations from graph sketches',

          availableTools: ['parabolaGraph', 'vertexFormTransform', 'rootsVisualizer'],

          sampleProblems: [
            'From a graph showing vertex (1, -4) and y-intercept (0, -3), find f(x).',
            'A graph shows x-intercepts at -2 and 3, passing through (1, -8). Find f(x).',
            'From a sketch, you can see the parabola passes through (-1, 5), (0, 2), and (2, 8). Find f(x).'
          ]
        }
      ]
    },

    learningObjectives: `
Students will:
- Find quadratic function from vertex and another point using f(x) = a(x - h)² + k
- Find function from x-intercepts and another point using f(x) = a(x - p)(x - q)
- Find function from three points using system of equations
- Extract features from graphs to determine equations
- Choose the most efficient form based on given information
- Verify determined functions against given features
    `,

    keyFormulas: `
- From vertex (h, k) and point: f(x) = a(x - h)² + k, solve for a
- From roots p, q and point: f(x) = a(x - p)(x - q), solve for a
- From three points: f(x) = ax² + bx + c, solve system for a, b, c
- Always verify y-intercept and other features
    `
  },

  // ============================================
  // SECTION 3.6: GRAPH PROBLEM SOLVING
  // ============================================
  's3-math-quadratic-graph-problem-solving': {
    displayName: 'Graphing for Problem Solving',
    topicName: 'Using graphs of quadratic functions to solve optimization and real-world problems',

    progressionStructure: {
      masteryPhilosophy: "Students master graph-based problem solving when they can interpret graphs in context, find optimal values using vertex, and solve applied problems graphically. Typically requires 4-5 correct applications.",

      sections: [
        {
          id: 'graph-problem-interpretation',
          title: 'Interpreting Quadratic Graphs in Context',
          difficulty: 'intermediate',
          focusObjectives: 'Read meaning of vertex, intercepts, and points from context',

          learningObjectives: [
            'Understand what vertex represents (maximum/minimum value)',
            'Interpret x-intercepts in context (break-even, zeros, time when height = 0)',
            'Interpret y-intercept in context (initial value, starting point)',
            'Read and explain meaning of any point on the graph'
          ],

          relevantFormulas: [
            'Vertex: maximum if a < 0, minimum if a > 0',
            'In context: max profit, min cost, max height, etc.',
            'x-intercepts: where y = 0 (break-even, ground level, etc.)',
            'y-intercept: value when x = 0 (initial condition)'
          ],

          masterySignals: '3 correct contextual interpretations',

          availableTools: ['parabolaGraph', 'wordProblemDiagram'],

          sampleProblems: [
            'A profit function P(x) = -2x² + 80x - 200 is graphed. What does the vertex represent?',
            'A ball\'s height h(t) = -5t² + 20t + 2 is graphed. What do the x-intercepts mean?',
            'For a parabolic arch y = -0.5x² + 4x, what does the y-intercept represent?'
          ]
        },

        {
          id: 'graph-problem-optimization',
          title: 'Optimization Using Vertex',
          difficulty: 'advanced',
          focusObjectives: 'Find maximum/minimum values from vertex',

          learningObjectives: [
            'Determine if vertex gives maximum (a < 0) or minimum (a > 0)',
            'Find vertex algebraically or by completing the square',
            'Interpret vertex coordinates in context (optimal value and when it occurs)',
            'Verify using graph'
          ],

          relevantFormulas: [
            'Vertex: (h, k) where h = -b/(2a) or from completing square',
            'Maximum value: k (if a < 0)',
            'Minimum value: k (if a > 0)',
            'Optimal input: h'
          ],

          masterySignals: '4 correct optimization problems',

          availableTools: ['parabolaGraph', 'vertexFormTransform', 'wordProblemDiagram'],

          sampleProblems: [
            'Maximize profit: P(x) = -x² + 60x - 200. Find max profit and optimal production.',
            'Minimize cost: C(x) = 2x² - 40x + 500. Find min cost and optimal quantity.',
            'A ball is thrown with h(t) = -5t² + 30t + 2. Find maximum height and when it occurs.',
            'Maximize area of rectangle with perimeter 80 m: A(x) = x(40 - x).'
          ]
        },

        {
          id: 'graph-problem-graphical-solution',
          title: 'Solving Equations and Inequalities Graphically',
          difficulty: 'advanced',
          focusObjectives: 'Use graphs to solve equations and inequalities',

          learningObjectives: [
            'Find solutions to f(x) = k by locating intersections with y = k',
            'Solve f(x) > k or f(x) < k by reading graph regions',
            'Use graphs to estimate solutions when algebraic methods are complex',
            'Verify algebraic solutions using graphs'
          ],

          relevantFormulas: [
            'f(x) = k: find x-values where graph intersects y = k',
            'f(x) > k: find x-values where graph is above y = k',
            'f(x) < k: find x-values where graph is below y = k'
          ],

          masterySignals: '3 correct graphical solutions',

          availableTools: ['parabolaGraph', 'rootsVisualizer'],

          sampleProblems: [
            'Using the graph of f(x) = x² - 4x + 3, solve f(x) = 0 and f(x) = 3.',
            'For h(t) = -5t² + 20t + 5, when is h(t) > 15? (Use graph)',
            'Graphically solve x² - 6x + 5 < 0.'
          ]
        },

        {
          id: 'graph-problem-real-world-modeling',
          title: 'Real-World Modeling and Analysis',
          difficulty: 'advanced',
          focusObjectives: 'Create and analyze quadratic models from scenarios',

          learningObjectives: [
            'Translate real-world scenarios into quadratic functions',
            'Graph the function and analyze key features',
            'Answer questions using the graph (max/min, when does y = 0, etc.)',
            'Interpret results in context and verify reasonableness'
          ],

          relevantFormulas: [
            'Projectile motion: h = -gt² + v₀t + h₀',
            'Area with constraints: A = x(constraint - x)',
            'Revenue/Profit: R = price × quantity (with demand curve)',
            'Always check domain restrictions and interpret in context'
          ],

          masterySignals: '4-5 complete real-world problems with graphing',

          availableTools: ['parabolaGraph', 'wordProblemDiagram', 'vertexFormTransform'],

          sampleProblems: [
            'A farmer has 200 m of fence. Model and graph the area A(x) = x(100 - x). Find max area.',
            'A company\'s profit is P(n) = -2n² + 120n - 1000 where n is items sold. Graph and find optimal production.',
            'A rocket\'s height is h(t) = -5t² + 50t. Graph and find: (a) max height, (b) when it lands.',
            'A bridge arch is modeled by y = -0.02x² + 1.6x. Graph and find the max height and width.'
          ]
        }
      ]
    },

    learningObjectives: `
Students will:
- Interpret vertex, intercepts, and points on graphs in real-world contexts
- Use vertex to find maximum or minimum values (optimization)
- Solve equations and inequalities graphically
- Model real-world situations with quadratic functions
- Graph and analyze quadratic models (projectile motion, area, profit)
- Answer questions using graph features (max/min, zeros, intersections)
- Verify reasonableness of solutions in context
    `,

    keyFormulas: `
- Vertex gives optimal value: max if a < 0, min if a > 0
- Vertex: (h, k) where h is optimal input, k is optimal output
- Projectile motion: h = -gt² + v₀t + h₀
- Area optimization: often results in quadratic
- Graphical solving: f(x) = k (intersections), f(x) > k or f(x) < k (regions)
    `
  }

};
