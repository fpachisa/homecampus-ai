/**
 * S3 Mathematics - Quadratic Equations and Functions
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 *
 * Curriculum Focus:
 * - Solving quadratic equations (factorization, formula, completing square)
 * - Graphing quadratic functions and understanding their features
 * - Real-world applications (optimization, projectile motion, modeling)
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
// TOPIC-SPECIFIC CUSTOMIZATIONS
// ============================================

/**
 * Tutor role customization for quadratic equations
 * Extends TUTOR_BASE from core/agents/tutor.ts
 */
export const QUADRATIC_EQUATIONS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Quadratic Equations and Functions.

Your Teaching Approach:
- Guide students to discover solution methods through questioning, not direct instruction
- Help students visualize parabolas and understand quadratic relationships
- Encourage algebraic manipulation and pattern recognition
- Connect abstract equations to real-world contexts (optimization, projectile motion)
- Celebrate insights when students discover factoring patterns or vertex forms
- Adapt difficulty organically based on student mastery`,

  speechGuidelines: `When generating speech.text (what the avatar will speak aloud):
- Keep speech plain and conversational (no markdown, no LaTeX)
- Use "x squared" instead of "x²" for proper pronunciation
- Say "a times x squared plus b x plus c" instead of using symbols
- Avoid mathematical notation that might be mispronounced
- For display.content (shown visually), you can use LaTeX and symbols normally`,

  visualToolsGuidance: `You have access to PRE-BUILT visual tools to help explain concepts:
- Use tools when they genuinely help understanding (especially for parabola graphs)
- Available tools: parabolaGraph, factoringVisualizer, completingSquareVisualizer, quadraticFormulaVisualizer, vertexFormTransform, rootsVisualizer, wordProblemDiagram
- IMPORTANT: Use the technical name (e.g., "parabolaGraph") in the toolName field, NOT the display name
- When you use a visual tool, include it in your response using the mathTool field`
};

/**
 * Global configuration for quadratic equations topics
 */
export const S3_MATH_QUADRATIC_EQUATIONS_CONFIG = {
  TUTOR_ROLE: QUADRATIC_EQUATIONS_TUTOR_CUSTOMIZATION.teachingPhilosophy,

  // Question and Solution agents extend their respective base agents with no additional customization needed
  QUESTION_AGENT_ROLE: `You are the Question Generation Agent - execute targeted instructions to generate quadratic equation questions. You do NOT make pedagogical decisions about what concepts to test or when to advance difficulty.`,

  SOLUTION_AGENT_ROLE: `You are the Solution Generation Agent - execute targeted instructions to generate step-by-step solutions for quadratic equations. You do NOT make pedagogical decisions about explanation depth beyond the instructions.`,

  MATH_TOOLS_AVAILABLE: [
    "parabolaGraph",
    "factoringVisualizer",
    "completingSquareVisualizer",
    "quadraticFormulaVisualizer",
    "vertexFormTransform",
    "rootsVisualizer",
    "wordProblemDiagram"
  ]
};

// ============================================
// SUBTOPIC CONFIGURATIONS
// ============================================

export const S3_MATH_QUADRATIC_EQUATIONS: Record<QuadraticEquationsTopicId, any> = {

  // ============================================
  // SECTION 1: SOLVING QUADRATIC EQUATIONS
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

    learningObjectives: `Students will:
- Solve quadratic equations of the form x² = k and ax² = k
- Understand the ± nature of square root solutions
- Apply the square root method to real-world problems
- Recognize when equations have no real solutions (k < 0)`,

    keyFormulas: `- If x² = k (k > 0), then x = ±√k
- If ax² = k, then x = ±√(k/a)
- No real solutions when k < 0`
  },

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
          difficulty: 'advanced',
          focusObjectives: 'Recognize and factor difference of squares and perfect squares',

          learningObjectives: [
            'Recognize and factor difference of squares: a² - b² = (a + b)(a - b)',
            'Recognize and factor perfect square trinomials: a² ± 2ab + b² = (a ± b)²',
            'Apply special patterns to solve equations efficiently'
          ],

          relevantFormulas: [
            'Difference of squares: a² - b² = (a + b)(a - b)',
            'Perfect square: a² + 2ab + b² = (a + b)²',
            'Perfect square: a² - 2ab + b² = (a - b)²'
          ],

          masterySignals: '3 correct identifications and factorizations of special patterns',
          availableTools: ['factoringVisualizer', 'parabolaGraph'],

          sampleProblems: [
            'Solve x² - 25 = 0 (difference of squares)',
            'Solve x² + 10x + 25 = 0 (perfect square)',
            'Solve 4x² - 9 = 0'
          ]
        }
      ]
    },

    learningObjectives: `Students will:
- Apply the zero product property to solve factored equations
- Factor quadratics with a = 1 and a ≠ 1
- Recognize and apply special factorization patterns
- Choose efficient factorization strategies`,

    keyFormulas: `- Zero Product Property: If AB = 0, then A = 0 or B = 0
- x² + bx + c = (x + p)(x + q) where pq = c and p + q = b
- Difference of squares: a² - b² = (a + b)(a - b)
- Perfect square: a² ± 2ab + b² = (a ± b)²`
  },

  's3-math-quadratic-solving-fractional': {
    displayName: 'Fractional Equations → Quadratics',
    topicName: 'Solving fractional equations that lead to quadratic equations',

    progressionStructure: {
      masteryPhilosophy: "Students master this when they can clear fractions correctly, form quadratic equations, and check for extraneous solutions. Typically requires 3-4 correct answers with proper verification.",

      sections: [
        {
          id: 'fractional-simple',
          title: 'Simple Fractional Equations',
          difficulty: 'foundational',
          focusObjectives: 'Clear denominators and form linear/quadratic equations',

          learningObjectives: [
            'Multiply through by LCD to clear fractions',
            'Simplify to form a standard quadratic equation',
            'Check solutions to eliminate extraneous roots'
          ],

          relevantFormulas: [
            'LCD (Least Common Denominator) method',
            'Always check solutions in original equation'
          ],

          masterySignals: '2 correct solutions with proper checking',
          availableTools: ['factoringVisualizer'],

          sampleProblems: [
            'Solve: (x + 1)/2 + (x - 1)/3 = 2',
            'Solve: 1/x + 1/(x+1) = 1/2'
          ]
        },
        {
          id: 'fractional-complex',
          title: 'Complex Fractional Equations',
          difficulty: 'intermediate',
          focusObjectives: 'Handle multiple fractions and verify solutions',

          learningObjectives: [
            'Clear complex fractions with multiple terms',
            'Form and solve resulting quadratic equations',
            'Identify and discard extraneous solutions'
          ],

          relevantFormulas: [
            'LCD method for multiple fractions',
            'Factorization or quadratic formula for solving',
            'Solution verification is critical'
          ],

          masterySignals: '3 correct solutions with verification of valid roots',
          availableTools: ['factoringVisualizer', 'quadraticFormulaVisualizer'],

          sampleProblems: [
            'Solve: 2/x + 3/(x-1) = 5',
            'Solve: (x + 2)/(x - 1) = (x - 3)/(x + 1)'
          ]
        },
        {
          id: 'fractional-applications',
          title: 'Applications with Fractional Equations',
          difficulty: 'advanced',
          focusObjectives: 'Apply to rate, work, and mixture problems',

          learningObjectives: [
            'Model real-world situations with fractional equations',
            'Solve work-rate and distance-time problems',
            'Interpret solutions in practical context'
          ],

          relevantFormulas: [
            'Work rate: 1/t₁ + 1/t₂ = 1/t_combined',
            'Distance-time: d = rt'
          ],

          masterySignals: '2-3 correct word problems with proper modeling',
          availableTools: ['factoringVisualizer'],

          sampleProblems: [
            'Solve and check: 1/(x-2) + 1/(x+2) = 4/(x²-4)',
            'Solve: x/(x-1) = 2 + 1/(x-1)'
          ]
        }
      ]
    },

    learningObjectives: `Students will:
- Clear fractions using LCD method
- Transform fractional equations into quadratics
- Check solutions to identify extraneous roots
- Apply to work-rate and mixture problems`,

    keyFormulas: `- LCD (Least Common Denominator) method
- Always verify solutions in original equation
- Work rate formulas: 1/t₁ + 1/t₂ = 1/t_combined`
  },

  's3-math-quadratic-solving-completing-square': {
    displayName: 'Completing the Square',
    topicName: 'Solving quadratic equations by completing the square method',

    progressionStructure: {
      masteryPhilosophy: "Students master this method when they can complete the square for any quadratic, derive vertex form, and understand its geometric meaning. Typically requires 4-5 correct answers.",

      sections: [
        {
          id: 'completing-square-concept',
          title: 'Understanding Perfect Squares',
          difficulty: 'foundational',
          focusObjectives: 'Recognize and create perfect square trinomials',

          learningObjectives: [
            'Recognize perfect square trinomials: x² + bx + (b/2)²',
            'Find the value needed to complete the square',
            'Write perfect squares as (x + p)² form'
          ],

          relevantFormulas: [
            'Perfect square: x² + bx + (b/2)² = (x + b/2)²',
            'To complete: add (b/2)² where b is coefficient of x'
          ],

          masterySignals: '2-3 correct identifications of completing square values',
          availableTools: ['completingSquareVisualizer'],

          sampleProblems: [
            'What number completes the square for x² + 6x?',
            'Write x² + 10x + 25 as a perfect square.',
            'Find k if x² + 8x + k is a perfect square.'
          ]
        },
        {
          id: 'completing-square-solving',
          title: 'Solving by Completing the Square (a = 1)',
          difficulty: 'intermediate',
          focusObjectives: 'Apply completing square method to solve equations',

          learningObjectives: [
            'Rearrange equation to isolate constant',
            'Complete the square on left side',
            'Solve by taking square roots'
          ],

          relevantFormulas: [
            'Step 1: Move constant to right side',
            'Step 2: Add (b/2)² to both sides',
            'Step 3: Write left side as (x + p)² and solve'
          ],

          masterySignals: '3-4 correct solutions showing all steps',
          availableTools: ['completingSquareVisualizer', 'parabolaGraph'],

          sampleProblems: [
            'Solve by completing the square: x² + 6x + 5 = 0',
            'Solve: x² - 8x + 7 = 0',
            'Solve: x² + 4x - 12 = 0'
          ]
        },
        {
          id: 'completing-square-advanced',
          title: 'Completing Square with a ≠ 1',
          difficulty: 'advanced',
          focusObjectives: 'Handle equations with leading coefficient a ≠ 1',

          learningObjectives: [
            'Divide through by a first to get x² coefficient of 1',
            'Complete the square on simplified equation',
            'Solve equations of form ax² + bx + c = 0'
          ],

          relevantFormulas: [
            'Step 1: Divide all terms by a',
            'Step 2: Complete the square as before',
            'Step 3: Solve and simplify'
          ],

          masterySignals: '3 correct solutions with a ≠ 1',
          availableTools: ['completingSquareVisualizer', 'quadraticFormulaVisualizer'],

          sampleProblems: [
            'Solve by completing the square: 2x² + 8x - 10 = 0',
            'Solve: 3x² - 6x + 1 = 0',
            'Solve: 4x² + 12x - 7 = 0'
          ]
        },
        {
          id: 'completing-square-vertex',
          title: 'Converting to Vertex Form',
          difficulty: 'advanced',
          focusObjectives: 'Use completing square to find vertex form of parabolas',

          learningObjectives: [
            'Convert f(x) = ax² + bx + c to f(x) = a(x - h)² + k',
            'Identify vertex (h, k) from vertex form',
            'Connect completing square to graph transformations'
          ],

          relevantFormulas: [
            'Vertex form: f(x) = a(x - h)² + k where vertex is (h, k)',
            'Complete square to convert from standard to vertex form'
          ],

          masterySignals: '3 correct conversions with vertex identification',
          availableTools: ['completingSquareVisualizer', 'vertexFormTransform', 'parabolaGraph'],

          sampleProblems: [
            'Rewrite f(x) = x² + 6x + 5 in vertex form and find the vertex.',
            'Convert to vertex form: f(x) = 2x² - 8x + 3',
            'Find the vertex of f(x) = x² - 4x + 7 by completing the square.'
          ]
        }
      ]
    },

    learningObjectives: `Students will:
- Understand and create perfect square trinomials
- Solve quadratics by completing the square
- Handle equations with any leading coefficient
- Convert to vertex form to find parabola features`,

    keyFormulas: `- Perfect square: x² + bx + (b/2)² = (x + b/2)²
- Completing square steps: Move c, add (b/2)², factor, solve
- Vertex form: f(x) = a(x - h)² + k with vertex (h, k)`
  },

  's3-math-quadratic-solving-formula': {
    displayName: 'Quadratic Formula',
    topicName: 'Solving quadratic equations using the quadratic formula',

    progressionStructure: {
      masteryPhilosophy: "Students master the formula when they can identify a, b, c correctly, apply the formula, and interpret the discriminant. Typically requires 4-5 correct solutions.",

      sections: [
        {
          id: 'formula-understanding',
          title: 'Understanding the Formula',
          difficulty: 'foundational',
          focusObjectives: 'Learn the quadratic formula and identify coefficients',

          learningObjectives: [
            'Memorize the quadratic formula: x = [-b ± √(b² - 4ac)] / (2a)',
            'Identify coefficients a, b, c from standard form ax² + bx + c = 0',
            'Understand each part of the formula'
          ],

          relevantFormulas: [
            'Quadratic Formula: x = [-b ± √(b² - 4ac)] / (2a)',
            'Standard form: ax² + bx + c = 0',
            'a = coefficient of x², b = coefficient of x, c = constant'
          ],

          masterySignals: '2 correct identifications of a, b, c',
          availableTools: ['quadraticFormulaVisualizer'],

          sampleProblems: [
            'For 2x² - 5x + 3 = 0, identify a, b, and c.',
            'State the quadratic formula and identify its parts.',
            'For x² + 7x - 2 = 0, what are a, b, and c?'
          ]
        },
        {
          id: 'formula-application',
          title: 'Applying the Formula',
          difficulty: 'intermediate',
          focusObjectives: 'Use formula to solve quadratic equations',

          learningObjectives: [
            'Substitute a, b, c values into the formula',
            'Simplify radicals and fractions',
            'Solve any quadratic equation using the formula'
          ],

          relevantFormulas: [
            'Quadratic Formula: x = [-b ± √(b² - 4ac)] / (2a)',
            'Simplify radicals: √(4k) = 2√k',
            'Two solutions: x₁ = [-b + √Δ]/(2a), x₂ = [-b - √Δ]/(2a)'
          ],

          masterySignals: '3-4 correct solutions with proper simplification',
          availableTools: ['quadraticFormulaVisualizer', 'parabolaGraph'],

          sampleProblems: [
            'Solve using the quadratic formula: x² + 5x + 6 = 0',
            'Solve: 2x² - 7x + 3 = 0',
            'Solve: x² - 6x + 2 = 0 (simplify radical form)'
          ]
        },
        {
          id: 'formula-discriminant',
          title: 'Discriminant and Nature of Roots',
          difficulty: 'advanced',
          focusObjectives: 'Use discriminant to predict number and type of solutions',

          learningObjectives: [
            'Calculate discriminant: Δ = b² - 4ac',
            'Interpret: Δ > 0 (two real roots), Δ = 0 (one root), Δ < 0 (no real roots)',
            'Predict solution types before solving'
          ],

          relevantFormulas: [
            'Discriminant: Δ = b² - 4ac',
            'If Δ > 0: two distinct real roots',
            'If Δ = 0: one repeated real root',
            'If Δ < 0: no real roots (complex roots)'
          ],

          masterySignals: '3 correct discriminant calculations with interpretation',
          availableTools: ['quadraticFormulaVisualizer', 'parabolaGraph', 'rootsVisualizer'],

          sampleProblems: [
            'Calculate the discriminant for x² - 4x + 4 = 0. What does it tell you?',
            'For 2x² + 3x + 5 = 0, find Δ. How many real solutions exist?',
            'Without solving, determine the number of real solutions for x² - 6x + 9 = 0.'
          ]
        },
        {
          id: 'formula-applications',
          title: 'Real-World Applications',
          difficulty: 'advanced',
          focusObjectives: 'Apply quadratic formula to word problems',

          learningObjectives: [
            'Model real-world problems with quadratic equations',
            'Use formula to find practical solutions',
            'Interpret solutions in context (discard invalid solutions)'
          ],

          relevantFormulas: [
            'Quadratic Formula for any quadratic equation',
            'Context determines which solution is valid'
          ],

          masterySignals: '2-3 correct word problems with proper interpretation',
          availableTools: ['quadraticFormulaVisualizer', 'wordProblemDiagram', 'parabolaGraph'],

          sampleProblems: [
            'The area of a rectangle is 50 cm². Its length is 3 cm more than its width. Find the dimensions.',
            'A ball is thrown upward with equation h = -5t² + 20t + 2. When does it hit the ground (h = 0)?'
          ]
        }
      ]
    },

    learningObjectives: `Students will:
- Apply the quadratic formula to solve any quadratic equation
- Calculate and interpret the discriminant
- Predict the number and nature of solutions
- Use the formula to solve real-world problems`,

    keyFormulas: `- Quadratic Formula: x = [-b ± √(b² - 4ac)] / (2a)
- Discriminant: Δ = b² - 4ac
- Δ > 0: two real roots; Δ = 0: one root; Δ < 0: no real roots`
  },

  's3-math-quadratic-solving-exponential': {
    displayName: 'Exponential → Quadratic',
    topicName: 'Solving exponential equations that reduce to quadratic form',

    progressionStructure: {
      masteryPhilosophy: "Students master this when they can recognize exponential equations as quadratics in disguise, apply substitution, and solve correctly. Typically requires 3-4 correct answers.",

      sections: [
        {
          id: 'exponential-substitution',
          title: 'Substitution Method',
          difficulty: 'intermediate',
          focusObjectives: 'Use substitution to convert exponential to quadratic',

          learningObjectives: [
            'Recognize equations of form a^(2x) + ba^x + c = 0',
            'Apply substitution: let y = a^x to form quadratic in y',
            'Solve for y, then back-substitute to find x'
          ],

          relevantFormulas: [
            'If equation has a^(2x) and a^x terms, let y = a^x',
            'Then a^(2x) = (a^x)² = y²',
            'Solve quadratic in y, then x = log_a(y)'
          ],

          masterySignals: '3 correct solutions with proper substitution',
          availableTools: ['factoringVisualizer', 'quadraticFormulaVisualizer'],

          sampleProblems: [
            'Solve: 2^(2x) - 5(2^x) + 4 = 0 (let y = 2^x)',
            'Solve: 3^(2x) - 4(3^x) + 3 = 0'
          ]
        },
        {
          id: 'exponential-applications',
          title: 'Advanced Exponential Equations',
          difficulty: 'advanced',
          focusObjectives: 'Handle complex exponential equations with different bases',

          learningObjectives: [
            'Solve exponential equations with base conversions',
            'Apply substitution for equations like 4^x - 5(2^x) + 4 = 0',
            'Use logarithms to find final solutions'
          ],

          relevantFormulas: [
            'Base conversion: 4^x = (2^2)^x = 2^(2x) = (2^x)²',
            'Let y = 2^x to form quadratic',
            'Final step: x = log₂(y)'
          ],

          masterySignals: '2-3 correct solutions with base conversions',
          availableTools: ['quadraticFormulaVisualizer'],

          sampleProblems: [
            'Solve: 4^x - 5(2^x) + 4 = 0 (let y = 2^x, then find x)',
            'Solve: 9^x - 10(3^x) + 9 = 0'
          ]
        },
        {
          id: 'exponential-word-problems',
          title: 'Applications with Growth and Decay',
          difficulty: 'advanced',
          focusObjectives: 'Model and solve real-world exponential problems',

          learningObjectives: [
            'Model population growth and compound interest with exponential equations',
            'Set up quadratic-form exponential equations from word problems',
            'Interpret solutions in practical contexts'
          ],

          relevantFormulas: [
            'Exponential growth: A = P(1 + r)^t',
            'Compound interest variations',
            'Substitution method for quadratic form'
          ],

          masterySignals: '2 correct word problem solutions',
          availableTools: ['wordProblemDiagram'],

          sampleProblems: [
            'A population grows by factor 1.2 each year. After how many years will it have more than doubled but less than tripled?'
          ]
        }
      ]
    },

    learningObjectives: `Students will:
- Recognize exponential equations that can be solved as quadratics
- Apply substitution method (let y = a^x)
- Solve for the original variable using logarithms
- Apply to growth and decay problems`,

    keyFormulas: `- Substitution: Let y = a^x, so a^(2x) = y²
- Solve quadratic in y, then x = log_a(y)
- Base conversion: (a^m)^x = a^(mx)`
  },

  's3-math-quadratic-word-problems': {
    displayName: 'Word Problems',
    topicName: 'Solving real-world problems using quadratic equations',

    progressionStructure: {
      masteryPhilosophy: "Students master word problems when they can model situations, solve accurately, and interpret results in context. Typically requires 4-5 correct applications.",

      sections: [
        {
          id: 'word-problems-setup',
          title: 'Setting Up Equations from Words',
          difficulty: 'foundational',
          focusObjectives: 'Translate word problems into quadratic equations',

          learningObjectives: [
            'Identify key information and unknowns',
            'Define variables clearly',
            'Write equations based on problem relationships'
          ],

          relevantFormulas: [
            'Area: length × width',
            'Consecutive integers: n, n+1 or n, n+2',
            'Sum and product relationships'
          ],

          masterySignals: '2-3 correct equation setups with clear variable definitions',
          availableTools: ['wordProblemDiagram'],

          sampleProblems: [
            'A rectangle has area 60 cm². Its length is 4 cm more than its width. Find the dimensions.',
            'The sum of a number and its square is 56. Find the number.',
            'Two consecutive even integers have a product of 168. Find them.'
          ]
        },
        {
          id: 'word-problems-solving',
          title: 'Solving and Interpreting',
          difficulty: 'intermediate',
          focusObjectives: 'Solve word problems and interpret solutions',

          learningObjectives: [
            'Choose appropriate solving method (factorization, formula)',
            'Check solutions for reasonableness',
            'Discard non-sensical solutions (negative length, etc.)'
          ],

          relevantFormulas: [
            'All solving methods: factorization, completing square, formula',
            'Context determines valid solutions'
          ],

          masterySignals: '3-4 correct solutions with proper interpretation',
          availableTools: ['wordProblemDiagram', 'factoringVisualizer', 'quadraticFormulaVisualizer'],

          sampleProblems: [
            'A garden is 5 m longer than it is wide. If its area is 84 m², find its dimensions.',
            'A ball is thrown upward. Its height is given by h = -5t² + 20t + 1. When is it at height 16 m?'
          ]
        },
        {
          id: 'word-problems-optimization',
          title: 'Optimization Problems',
          difficulty: 'advanced',
          focusObjectives: 'Find maximum/minimum values in real contexts',

          learningObjectives: [
            'Set up optimization problems with quadratic functions',
            'Use vertex to find maximum or minimum values',
            'Interpret optimal solutions in context'
          ],

          relevantFormulas: [
            'Vertex form: f(x) = a(x - h)² + k has max/min at x = h',
            'For a < 0: maximum at vertex; for a > 0: minimum at vertex'
          ],

          masterySignals: '2-3 correct optimization problems',
          availableTools: ['wordProblemDiagram', 'parabolaGraph', 'vertexFormTransform'],

          sampleProblems: [
            'A farmer has 100 m of fencing. What dimensions give the maximum area for a rectangular enclosure?',
            'A company sells x items. Profit is P(x) = -2x² + 80x - 200. How many items maximize profit?',
            'A ball is thrown with h(t) = -5t² + 30t + 2. What is its maximum height?'
          ]
        },
        {
          id: 'word-problems-complex',
          title: 'Complex Multi-Step Problems',
          difficulty: 'advanced',
          focusObjectives: 'Solve multi-step problems requiring multiple concepts',

          learningObjectives: [
            'Combine multiple mathematical concepts (geometry, physics, algebra)',
            'Break complex problems into manageable steps',
            'Apply quadratics to projectile motion, optimization, and geometry'
          ],

          relevantFormulas: [
            'Projectile motion: h(t) = -½gt² + v₀t + h₀',
            'Pythagorean theorem: a² + b² = c²',
            'Optimization using vertex'
          ],

          masterySignals: '2-3 correct complex problems with complete reasoning',
          availableTools: ['wordProblemDiagram', 'parabolaGraph', 'quadraticFormulaVisualizer'],

          sampleProblems: [
            'A stone is thrown from a 50 m cliff with initial velocity 15 m/s. When does it hit the ground?',
            'A company produces x units. Cost is C(x) = 2x² - 60x + 500. At what production level is cost minimized?',
            'A right triangle has legs differing by 7 cm and hypotenuse 13 cm. Find the leg lengths.'
          ]
        }
      ]
    },

    learningObjectives: `Students will:
- Translate word problems into quadratic equations
- Solve using appropriate methods
- Interpret solutions in context
- Apply to optimization and real-world scenarios`,

    keyFormulas: `- Area, perimeter, and geometric relationships
- Projectile motion: h(t) = -½gt² + v₀t + h₀
- Optimization: Use vertex for max/min values
- Context determines valid solutions`
  },

  // ============================================
  // SECTION 2: GRAPHING QUADRATIC FUNCTIONS
  // ============================================

  's3-math-quadratic-graph-features': {
    displayName: 'Graph Features & Sketching',
    topicName: 'Understanding and sketching key features of quadratic graphs',

    progressionStructure: {
      masteryPhilosophy: "Students master graphing when they can identify all key features (vertex, axis, intercepts, shape) and sketch accurate graphs. Typically requires 4-5 correct graphs.",

      sections: [
        {
          id: 'graph-parabola-shape',
          title: 'Parabola Shape and Direction',
          difficulty: 'foundational',
          focusObjectives: 'Understand how coefficient a affects parabola shape',

          learningObjectives: [
            'Identify if parabola opens upward (a > 0) or downward (a < 0)',
            'Understand how |a| affects parabola width (narrow vs wide)',
            'Recognize y-intercept from constant term c'
          ],

          relevantFormulas: [
            'f(x) = ax² + bx + c',
            'a > 0: opens upward (U-shape); a < 0: opens downward (∩-shape)',
            'Larger |a|: narrower parabola; smaller |a|: wider parabola',
            'y-intercept: (0, c)'
          ],

          masterySignals: '2-3 correct identifications of shape and direction',
          availableTools: ['parabolaGraph', 'vertexFormTransform'],

          sampleProblems: [
            'For f(x) = 2x² - 4x + 1, does the parabola open up or down?',
            'Compare the widths of f(x) = x² and g(x) = 3x². Which is narrower?',
            'Sketch the general shape of f(x) = -x² + 5x - 2.'
          ]
        },
        {
          id: 'graph-vertex-axis',
          title: 'Vertex and Axis of Symmetry',
          difficulty: 'intermediate',
          focusObjectives: 'Find vertex and axis of symmetry from standard form',

          learningObjectives: [
            'Calculate vertex using x = -b/(2a), then find y-coordinate',
            'Write axis of symmetry as x = h where h is x-coordinate of vertex',
            'Identify vertex as maximum (a < 0) or minimum (a > 0) point'
          ],

          relevantFormulas: [
            'Vertex x-coordinate: x = -b/(2a)',
            'Vertex y-coordinate: substitute x into f(x)',
            'Axis of symmetry: x = -b/(2a)',
            'Vertex (h, k) is minimum if a > 0, maximum if a < 0'
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
          id: 'graph-intercepts',
          title: 'Finding Intercepts',
          difficulty: 'intermediate',
          focusObjectives: 'Calculate x-intercepts and y-intercept',

          learningObjectives: [
            'Find y-intercept by substituting x = 0 (gives (0, c))',
            'Find x-intercepts by solving f(x) = 0 (factorization or formula)',
            'Determine number of x-intercepts using discriminant'
          ],

          relevantFormulas: [
            'y-intercept: Set x = 0, get (0, c)',
            'x-intercepts: Solve ax² + bx + c = 0',
            'Discriminant Δ = b² - 4ac determines number of x-intercepts',
            'Δ > 0: two x-intercepts; Δ = 0: one; Δ < 0: none'
          ],

          masterySignals: '3-4 correct intercept calculations',
          availableTools: ['parabolaGraph', 'rootsVisualizer', 'factoringVisualizer'],

          sampleProblems: [
            'Find all intercepts for f(x) = x² - 5x + 6.',
            'For f(x) = 2x² + 4x + 5, find the y-intercept and x-intercepts.',
            'How many x-intercepts does f(x) = x² - 4x + 4 have?'
          ]
        },
        {
          id: 'graph-complete-sketch',
          title: 'Complete Labeled Sketch',
          difficulty: 'advanced',
          focusObjectives: 'Sketch parabola with all features labeled',

          learningObjectives: [
            'Combine all features: vertex, axis, intercepts, shape',
            'Plot key points and sketch smooth parabola',
            'Label all features clearly on graph'
          ],

          relevantFormulas: [
            'All previous formulas combined',
            'Check: parabola is symmetric about axis'
          ],

          masterySignals: '3 correct complete sketches with all features',
          availableTools: ['parabolaGraph', 'vertexFormTransform', 'rootsVisualizer'],

          sampleProblems: [
            'Sketch f(x) = x² - 4x + 3 with all features labeled.',
            'Sketch f(x) = -2x² + 8x - 5 and label vertex, intercepts, axis.',
            'For f(x) = x² + 2x - 8, create a complete labeled sketch.'
          ]
        }
      ]
    },

    learningObjectives: `Students will:
- Identify parabola shape, direction, and width
- Calculate vertex and axis of symmetry
- Find x-intercepts and y-intercept
- Sketch complete labeled graphs`,

    keyFormulas: `- Shape: a > 0 opens up, a < 0 opens down
- Vertex: x = -b/(2a), then find y
- Axis: x = -b/(2a)
- y-intercept: (0, c)
- x-intercepts: Solve f(x) = 0`
  },

  's3-math-quadratic-graph-completed-square': {
    displayName: 'Graphing from Vertex Form',
    topicName: 'Graphing quadratic functions in vertex form f(x) = a(x - h)² + k',

    progressionStructure: {
      masteryPhilosophy: "Students master vertex form when they can identify transformations, sketch from vertex form, and convert between forms. Typically requires 4 correct graphs.",

      sections: [
        {
          id: 'vertex-form-reading',
          title: 'Reading Vertex from Vertex Form',
          difficulty: 'foundational',
          focusObjectives: 'Identify vertex directly from f(x) = a(x - h)² + k',

          learningObjectives: [
            'Recognize vertex form: f(x) = a(x - h)² + k',
            'Read vertex as (h, k) directly from equation',
            'Understand sign conventions: (x - h) means vertex at x = +h'
          ],

          relevantFormulas: [
            'Vertex form: f(x) = a(x - h)² + k',
            'Vertex is (h, k)',
            'Note: (x - h) means h is positive; (x + h) means h is negative'
          ],

          masterySignals: '2-3 correct vertex identifications',
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
          focusObjectives: 'Describe transformations from y = x² to vertex form',

          learningObjectives: [
            'Identify horizontal shift: h units (right if +h, left if -h)',
            'Identify vertical shift: k units (up if +k, down if -k)',
            'Identify vertical stretch/compression: factor |a|',
            'Identify reflection: across x-axis if a < 0'
          ],

          relevantFormulas: [
            'Horizontal shift: (x - h) shifts right h, (x + h) shifts left h',
            'Vertical shift: +k shifts up k, -k shifts down k',
            'Vertical stretch: |a| > 1; compression: 0 < |a| < 1',
            'Reflection: a < 0 flips across x-axis'
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
          focusObjectives: 'Sketch parabolas directly from vertex form',

          learningObjectives: [
            'Plot vertex as starting point',
            'Determine shape (opens up/down, width) from a',
            'Find axis of symmetry: x = h',
            'Calculate intercepts if needed'
          ],

          relevantFormulas: [
            'Vertex (h, k) is the starting point',
            'Axis of symmetry: x = h',
            'y-intercept: substitute x = 0',
            'x-intercepts: solve a(x - h)² + k = 0'
          ],

          masterySignals: '3 correct sketches from vertex form',
          availableTools: ['parabolaGraph', 'vertexFormTransform', 'rootsVisualizer'],

          sampleProblems: [
            'Sketch f(x) = (x - 2)² + 1 and label vertex and axis.',
            'Sketch f(x) = -2(x + 3)² + 4 with all features.',
            'Graph f(x) = 0.5(x - 1)² - 3 and find intercepts.'
          ]
        },
        {
          id: 'vertex-form-converting',
          title: 'Converting Between Forms',
          difficulty: 'advanced',
          focusObjectives: 'Convert between standard and vertex form',

          learningObjectives: [
            'Expand vertex form to standard form (multiply out)',
            'Complete square to convert standard to vertex form',
            'Verify conversions by checking key features'
          ],

          relevantFormulas: [
            'Vertex to standard: Expand a(x - h)² + k',
            'Standard to vertex: Complete the square',
            'Both forms represent same parabola'
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

    learningObjectives: `Students will:
- Read vertex directly from vertex form
- Describe transformations from parent function y = x²
- Sketch parabolas from vertex form
- Convert between standard and vertex form`,

    keyFormulas: `- Vertex form: f(x) = a(x - h)² + k with vertex (h, k)
- Transformations: h (horizontal), k (vertical), a (stretch/reflect)
- Axis: x = h
- Convert: Expand or complete square`
  },

  's3-math-quadratic-graph-factorised': {
    displayName: 'Graphing from Factorised Form',
    topicName: 'Graphing quadratic functions in factorised form f(x) = a(x - p)(x - q)',

    progressionStructure: {
      masteryPhilosophy: "Students master factorised form when they can identify x-intercepts, find vertex, and sketch accurately. Typically requires 3-4 correct graphs.",

      sections: [
        {
          id: 'factorised-intercepts',
          title: 'Reading x-intercepts',
          difficulty: 'foundational',
          focusObjectives: 'Identify x-intercepts directly from factorised form',

          learningObjectives: [
            'Recognize factorised form: f(x) = a(x - p)(x - q)',
            'Read x-intercepts (roots) as x = p and x = q',
            'Understand zero product property application'
          ],

          relevantFormulas: [
            'Factorised form: f(x) = a(x - p)(x - q)',
            'x-intercepts (roots): x = p and x = q',
            'Note: (x - p) means root at x = +p'
          ],

          masterySignals: '2-3 correct x-intercept identifications',
          availableTools: ['rootsVisualizer', 'parabolaGraph'],

          sampleProblems: [
            'Find the x-intercepts of f(x) = (x - 2)(x - 5).',
            'What are the roots of f(x) = 2(x + 1)(x - 3)?',
            'For f(x) = -(x + 4)(x - 1), identify the x-intercepts.'
          ]
        },
        {
          id: 'factorised-vertex',
          title: 'Finding Vertex from Factorised Form',
          difficulty: 'intermediate',
          focusObjectives: 'Calculate vertex using axis of symmetry',

          learningObjectives: [
            'Find axis of symmetry: x = (p + q)/2 (midpoint of roots)',
            'Substitute into equation to find y-coordinate of vertex',
            'Understand symmetry of parabola about vertex'
          ],

          relevantFormulas: [
            'Axis of symmetry: x = (p + q)/2',
            'Vertex x-coordinate: h = (p + q)/2',
            'Vertex y-coordinate: k = f(h)'
          ],

          masterySignals: '3 correct vertex calculations from factorised form',
          availableTools: ['rootsVisualizer', 'parabolaGraph'],

          sampleProblems: [
            'Find the vertex of f(x) = (x - 1)(x - 7).',
            'For f(x) = 2(x + 2)(x - 4), find the vertex.',
            'What is the vertex of f(x) = -(x - 3)(x + 1)?'
          ]
        },
        {
          id: 'factorised-sketching',
          title: 'Sketching from Factorised Form',
          difficulty: 'intermediate',
          focusObjectives: 'Sketch complete parabola from factorised form',

          learningObjectives: [
            'Plot x-intercepts as starting points',
            'Calculate and plot vertex',
            'Determine shape from coefficient a',
            'Find y-intercept by substituting x = 0'
          ],

          relevantFormulas: [
            'x-intercepts: x = p, x = q',
            'Vertex: x = (p+q)/2, then find y',
            'y-intercept: f(0) = a(-p)(-q) = apq',
            'Shape: a > 0 opens up, a < 0 opens down'
          ],

          masterySignals: '3 correct complete sketches',
          availableTools: ['rootsVisualizer', 'parabolaGraph'],

          sampleProblems: [
            'Sketch f(x) = (x - 1)(x - 5) and label all features.',
            'Sketch f(x) = -2(x + 2)(x - 3) with vertex and intercepts.',
            'Graph f(x) = 0.5(x + 1)(x - 4) and find the y-intercept.'
          ]
        },
        {
          id: 'factorised-converting',
          title: 'Converting to Other Forms',
          difficulty: 'advanced',
          focusObjectives: 'Convert factorised form to standard form',

          learningObjectives: [
            'Expand factorised form to standard form',
            'Factor standard form to get factorised form',
            'Verify conversions using key features'
          ],

          relevantFormulas: [
            'Expand: a(x - p)(x - q) = ax² - a(p+q)x + apq',
            'Factor: ax² + bx + c = a(x - p)(x - q)',
            'Check: Both should have same x-intercepts'
          ],

          masterySignals: '3 correct conversions with verification',
          availableTools: ['factoringVisualizer', 'rootsVisualizer'],

          sampleProblems: [
            'Expand f(x) = (x - 2)(x - 5) to standard form.',
            'Factor f(x) = x² - 7x + 12 to factorised form.',
            'Expand f(x) = 2(x + 1)(x - 3) to standard form.'
          ]
        }
      ]
    },

    learningObjectives: `Students will:
- Read x-intercepts directly from factorised form
- Calculate vertex using axis of symmetry
- Sketch parabolas from factorised form
- Convert between factorised and standard forms`,

    keyFormulas: `- Factorised form: f(x) = a(x - p)(x - q)
- x-intercepts: x = p, x = q
- Vertex x: (p + q)/2, then find y
- y-intercept: f(0) = apq`
  },

  's3-math-quadratic-graph-polynomial': {
    displayName: 'Graphing from Standard Form',
    topicName: 'Graphing quadratic functions in standard form f(x) = ax² + bx + c',

    progressionStructure: {
      masteryPhilosophy: "Students master standard form graphing when they can efficiently extract all features and sketch accurately. Typically requires 4 correct complete graphs.",

      sections: [
        {
          id: 'polynomial-basic-features',
          title: 'Basic Features from Standard Form',
          difficulty: 'foundational',
          focusObjectives: 'Identify shape, direction, and y-intercept',

          learningObjectives: [
            'Determine if parabola opens up (a > 0) or down (a < 0)',
            'Read y-intercept directly: (0, c)',
            'Estimate parabola width from |a|'
          ],

          relevantFormulas: [
            'Standard form: f(x) = ax² + bx + c',
            'Direction: a > 0 opens up, a < 0 opens down',
            'y-intercept: (0, c)',
            'Width: larger |a| = narrower'
          ],

          masterySignals: '2-3 correct basic feature identifications',
          availableTools: ['parabolaGraph'],

          sampleProblems: [
            'For f(x) = 2x² - 5x + 3, does it open up or down? What is the y-intercept?',
            'Find the y-intercept of f(x) = -x² + 4x - 7.',
            'Does f(x) = 3x² + 6x - 2 open upward or downward?'
          ]
        },
        {
          id: 'polynomial-vertex',
          title: 'Finding Vertex from Standard Form',
          difficulty: 'intermediate',
          focusObjectives: 'Calculate vertex using formula',

          learningObjectives: [
            'Use x = -b/(2a) to find vertex x-coordinate',
            'Substitute to find y-coordinate',
            'Identify vertex as max or min point'
          ],

          relevantFormulas: [
            'Vertex x-coordinate: x = -b/(2a)',
            'Vertex y-coordinate: substitute x into f(x)',
            'Vertex is minimum if a > 0, maximum if a < 0'
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
          id: 'polynomial-intercepts',
          title: 'Finding x-intercepts',
          difficulty: 'intermediate',
          focusObjectives: 'Solve f(x) = 0 to find x-intercepts',

          learningObjectives: [
            'Choose solving method: factorization (if possible) or quadratic formula',
            'Calculate x-intercepts by solving ax² + bx + c = 0',
            'Use discriminant to predict number of x-intercepts'
          ],

          relevantFormulas: [
            'x-intercepts: Solve f(x) = 0',
            'Methods: Factorization or quadratic formula',
            'Discriminant: Δ = b² - 4ac',
            'Δ > 0: two x-intercepts; Δ = 0: one; Δ < 0: none'
          ],

          masterySignals: '3-4 correct x-intercept calculations',
          availableTools: ['factoringVisualizer', 'quadraticFormulaVisualizer', 'rootsVisualizer'],

          sampleProblems: [
            'Find the x-intercepts of f(x) = x² - 5x + 6.',
            'For f(x) = 2x² + 3x - 2, find the x-intercepts.',
            'How many x-intercepts does f(x) = x² + 2x + 5 have?'
          ]
        },
        {
          id: 'polynomial-complete-graph',
          title: 'Complete Graph from Standard Form',
          difficulty: 'advanced',
          focusObjectives: 'Sketch complete labeled graph efficiently',

          learningObjectives: [
            'Systematically find all features: shape, vertex, axis, intercepts',
            'Sketch accurate parabola with all features labeled',
            'Choose most efficient methods for each feature'
          ],

          relevantFormulas: [
            'All previous formulas combined',
            'Efficient approach: y-intercept (easy), vertex (formula), x-intercepts (factor or formula)'
          ],

          masterySignals: '3-4 correct complete graphs from standard form',
          availableTools: ['parabolaGraph', 'vertexFormTransform', 'rootsVisualizer'],

          sampleProblems: [
            'Sketch f(x) = x² - 4x + 3 with all features labeled.',
            'Sketch f(x) = -2x² + 4x + 6 and identify vertex, intercepts, axis.',
            'Graph f(x) = 2x² - 8x + 6 and label all key features.'
          ]
        },
        {
          id: 'polynomial-efficient-methods',
          title: 'Choosing Efficient Methods',
          difficulty: 'advanced',
          focusObjectives: 'Select most efficient approach for each problem',

          learningObjectives: [
            'Decide when to factor vs. use formula',
            'Choose when to complete square vs. use vertex formula',
            'Optimize problem-solving workflow'
          ],

          relevantFormulas: [
            'All solving methods available',
            'Decision criteria: Factorability, time efficiency, accuracy needs'
          ],

          masterySignals: '3 correct problems with efficient method choices',
          availableTools: ['factoringVisualizer', 'quadraticFormulaVisualizer', 'completingSquareVisualizer'],

          sampleProblems: [
            'For f(x) = x² - 7x + 12, which method is most efficient to find x-intercepts?',
            'Sketch f(x) = 2x² + 5x - 3 using the most efficient approach.',
            'Convert f(x) = x² + 6x + 11 to vertex form and sketch.'
          ]
        }
      ]
    },

    learningObjectives: `Students will:
- Extract all features from standard form efficiently
- Calculate vertex using x = -b/(2a)
- Find intercepts using appropriate methods
- Sketch complete accurate graphs
- Choose efficient solving strategies`,

    keyFormulas: `- Standard form: f(x) = ax² + bx + c
- y-intercept: (0, c)
- Vertex: x = -b/(2a), then find y
- x-intercepts: Solve f(x) = 0
- Discriminant: Δ = b² - 4ac`
  },

  's3-math-quadratic-graph-finding-function': {
    displayName: 'Finding Quadratic Functions',
    topicName: 'Determining quadratic function equations from given information',

    progressionStructure: {
      masteryPhilosophy: "Students master this when they can construct equations from various given information (vertex, roots, points). Typically requires 4 correct constructions.",

      sections: [
        {
          id: 'finding-from-vertex',
          title: 'From Vertex and a Point',
          difficulty: 'intermediate',
          focusObjectives: 'Use vertex form to find equation',

          learningObjectives: [
            'Write f(x) = a(x - h)² + k using given vertex (h, k)',
            'Substitute given point to solve for a',
            'Verify equation by checking given information'
          ],

          relevantFormulas: [
            'Vertex form: f(x) = a(x - h)² + k',
            'Substitute point (x, y) and solve for a',
            'Check: Does equation give correct vertex and pass through point?'
          ],

          masterySignals: '3 correct equations from vertex and point',
          availableTools: ['parabolaGraph', 'vertexFormTransform'],

          sampleProblems: [
            'Find the equation if vertex is (2, -3) and the parabola passes through (0, 5).',
            'A parabola has vertex (-1, 4) and passes through (1, 0). Find f(x).',
            'Given vertex (3, -2) and point (5, 6), find the quadratic function.'
          ]
        },
        {
          id: 'finding-from-roots',
          title: 'From x-intercepts and a Point',
          difficulty: 'intermediate',
          focusObjectives: 'Use factorised form to find equation',

          learningObjectives: [
            'Write f(x) = a(x - p)(x - q) using given roots p and q',
            'Substitute given point to solve for a',
            'Expand to standard form if needed'
          ],

          relevantFormulas: [
            'Factorised form: f(x) = a(x - p)(x - q)',
            'Roots are p and q',
            'Substitute point and solve for a'
          ],

          masterySignals: '3 correct equations from roots and point',
          availableTools: ['rootsVisualizer', 'parabolaGraph', 'factoringVisualizer'],

          sampleProblems: [
            'Find the equation if x-intercepts are -2 and 4, and y-intercept is (0, -8).',
            'A parabola crosses the x-axis at 1 and 5, and passes through (2, -6). Find f(x).',
            'Given roots -3 and 2, and point (0, 12), find the quadratic function.'
          ]
        },
        {
          id: 'finding-from-three-points',
          title: 'From Three Points',
          difficulty: 'advanced',
          focusObjectives: 'Set up and solve system of equations',

          learningObjectives: [
            'Write f(x) = ax² + bx + c',
            'Substitute three points to create system of three equations',
            'Solve system to find a, b, c'
          ],

          relevantFormulas: [
            'Standard form: f(x) = ax² + bx + c',
            'Three points give three equations in a, b, c',
            'Solve using substitution or elimination'
          ],

          masterySignals: '2-3 correct equations from three points',
          availableTools: ['parabolaGraph'],

          sampleProblems: [
            'Find f(x) passing through (0, 3), (1, 6), and (2, 11).',
            'A parabola passes through (-1, 8), (0, 3), and (2, 3). Find f(x).',
            'Determine the equation passing through (1, 0), (2, -3), and (3, -4).'
          ]
        },
        {
          id: 'finding-from-graph',
          title: 'From Graph Information',
          difficulty: 'advanced',
          focusObjectives: 'Extract information from graph and construct equation',

          learningObjectives: [
            'Read key features from graph (vertex, roots, y-intercept)',
            'Choose appropriate form based on available information',
            'Construct and verify equation'
          ],

          relevantFormulas: [
            'All forms available: vertex, factorised, standard',
            'Choose form based on what is easiest to read from graph'
          ],

          masterySignals: '2-3 correct equations from graph information',
          availableTools: ['parabolaGraph', 'vertexFormTransform', 'rootsVisualizer'],

          sampleProblems: [
            'From a graph showing vertex (1, -4) and y-intercept (0, -3), find f(x).',
            'A graph shows x-intercepts at -2 and 3, passing through (1, -8). Find f(x).',
            'From a sketch, you can see the parabola passes through (-1, 5), (0, 2), and (2, 8). Find f(x).'
          ]
        }
      ]
    },

    learningObjectives: `Students will:
- Construct equations from vertex and a point
- Construct equations from x-intercepts and a point
- Use systems of equations with three points
- Extract information from graphs to find equations`,

    keyFormulas: `- From vertex: f(x) = a(x - h)² + k, substitute point
- From roots: f(x) = a(x - p)(x - q), substitute point
- From three points: System with f(x) = ax² + bx + c
- Choose form based on given information`
  },

  's3-math-quadratic-graph-problem-solving': {
    displayName: 'Problem Solving with Graphs',
    topicName: 'Using quadratic graphs to solve real-world problems and interpret solutions',

    progressionStructure: {
      masteryPhilosophy: "Students master this when they can interpret graph features in context, solve optimization problems graphically, and use graphs for analysis. Typically requires 4-5 correct applications.",

      sections: [
        {
          id: 'problem-solving-interpretation',
          title: 'Interpreting Graphs in Context',
          difficulty: 'intermediate',
          focusObjectives: 'Understand what graph features mean in real situations',

          learningObjectives: [
            'Interpret vertex in context (maximum profit, maximum height, etc.)',
            'Interpret x-intercepts in context (break-even points, landing time)',
            'Interpret y-intercept in context (initial value, starting height)'
          ],

          relevantFormulas: [
            'Context determines meaning of each feature',
            'Vertex: optimal value (max/min)',
            'x-intercepts: zeros (where function equals zero)',
            'y-intercept: initial condition (t = 0 or x = 0)'
          ],

          masterySignals: '3 correct interpretations in context',
          availableTools: ['parabolaGraph', 'wordProblemDiagram'],

          sampleProblems: [
            'A profit function P(x) = -2x² + 80x - 200 is graphed. What does the vertex represent?',
            'A ball\'s height h(t) = -5t² + 20t + 2 is graphed. What do the x-intercepts mean?',
            'For a parabolic arch y = -0.5x² + 4x, what does the y-intercept represent?'
          ]
        },
        {
          id: 'problem-solving-optimization',
          title: 'Optimization Using Graphs',
          difficulty: 'advanced',
          focusObjectives: 'Find maximum/minimum values graphically',

          learningObjectives: [
            'Use vertex to find maximum or minimum value',
            'Determine optimal input value (x at vertex)',
            'Interpret optimization in context (max profit, min cost, max height)'
          ],

          relevantFormulas: [
            'Vertex gives optimal value',
            'a < 0: vertex is maximum',
            'a > 0: vertex is minimum',
            'Vertex (h, k): optimal x = h, optimal value = k'
          ],

          masterySignals: '3 correct optimization problems using graphs',
          availableTools: ['parabolaGraph', 'vertexFormTransform', 'wordProblemDiagram'],

          sampleProblems: [
            'Maximize profit: P(x) = -x² + 60x - 200. Find max profit and optimal production.',
            'Minimize cost: C(x) = 2x² - 40x + 500. Find min cost and optimal quantity.',
            'A ball is thrown with h(t) = -5t² + 30t + 2. Find maximum height and when it occurs.'
          ]
        },
        {
          id: 'problem-solving-graphical-solutions',
          title: 'Solving Equations Graphically',
          difficulty: 'advanced',
          focusObjectives: 'Use graphs to solve equations and inequalities',

          learningObjectives: [
            'Solve f(x) = k by finding intersection with y = k',
            'Solve f(x) > k or f(x) < k using graph',
            'Estimate solutions from graph when algebraic solution is complex'
          ],

          relevantFormulas: [
            'f(x) = k: Find where graph intersects y = k',
            'f(x) > k: Where graph is above y = k',
            'f(x) < k: Where graph is below y = k'
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
          id: 'problem-solving-modeling',
          title: 'Modeling and Analyzing Real Problems',
          difficulty: 'advanced',
          focusObjectives: 'Create and analyze quadratic models graphically',

          learningObjectives: [
            'Model real situations with quadratic functions',
            'Graph the model and extract meaningful information',
            'Answer multi-part questions using the graph',
            'Verify algebraic solutions graphically'
          ],

          relevantFormulas: [
            'All quadratic forms available',
            'Graph analysis: vertex, intercepts, intervals',
            'Context interpretation critical'
          ],

          masterySignals: '2-3 correct complete modeling problems',
          availableTools: ['parabolaGraph', 'wordProblemDiagram', 'vertexFormTransform'],

          sampleProblems: [
            'A farmer has 200 m of fence. Model and graph the area A(x) = x(100 - x). Find max area.',
            'A company\'s profit is P(n) = -2n² + 120n - 1000 where n is items sold. Graph and find optimal production.',
            'A rocket\'s height is h(t) = -5t² + 50t. Graph and find: (a) max height, (b) when it lands.'
          ]
        }
      ]
    },

    learningObjectives: `Students will:
- Interpret graph features in real-world contexts
- Use graphs to solve optimization problems
- Solve equations and inequalities graphically
- Model and analyze real-world situations with quadratic graphs`,

    keyFormulas: `- Vertex: Optimal value (max if a < 0, min if a > 0)
- x-intercepts: Where function equals zero
- y-intercept: Initial value
- Graph analysis for solving equations and inequalities`
  }
};

/**
 * Export the subtopic keys as a union type for validation
 */
export const QUADRATIC_EQUATIONS_SUBTOPIC_IDS = Object.keys(S3_MATH_QUADRATIC_EQUATIONS) as QuadraticEquationsTopicId[];

/**
 * Helper function to get subtopic by ID
 */
export function getQuadraticEquationsSubtopic(topicId: QuadraticEquationsTopicId) {
  return S3_MATH_QUADRATIC_EQUATIONS[topicId];
}
