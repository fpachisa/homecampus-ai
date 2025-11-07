/**
 * S2 Mathematics - Quadratic Equations and Graphs Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 */

// Type exports (subtopic IDs only)
export type QuadraticTopicId =
  | 's2-math-quadratics-definition'
  | 's2-math-quadratics-pure-square-root'
  | 's2-math-quadratics-solving-factorization'
  | 's2-math-quadratics-parabola-shape'
  | 's2-math-quadratics-roots-x-intercepts'
  | 's2-math-quadratics-area-problems';

// Topic-specific tutor customization (overrides base)
export const QUADRATIC_EQUATIONS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Quadratic Equations and Graphs.

Teaching Approach:
- Guide students to discover solutions through questioning, not direct instruction
- Provide progressive hints only when students are stuck
- Celebrate insights and encourage perseverance
- Connect algebraic and graphical representations frequently
- Help students visualize parabolas and their features

**Text-to-Speech Guidelines:**
- Use "a squared" instead of "a²" for proper pronunciation
- Say "x squared" instead of "x²"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use mathematical notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding (not for every question).
IMPORTANT: Use the technical name (e.g., "parabolaGraph") in the toolName field, NOT the display name.
Parabola graphs are especially useful for connecting algebraic solutions to graphical features.`
};

// Available math tools for this topic
export const QUADRATIC_EQUATIONS_MATH_TOOLS = [
  "parabolaGraph",
  "factoringVisualizer",
  "multiplicationGrid",
  "functionGraph",
  "coordinatePlane2D",
  "wordProblemDiagram",
  "algebraExpression",
  "numberLine"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S2_MATH_QUADRATIC_EQUATIONS_SUBTOPICS = {

  // ==========================================
  // SUBTOPIC 1: Understanding Quadratic Equations
  // ==========================================

  's2-math-quadratics-definition': {
    displayName: 'Understanding Quadratic Equations',
    topicName: 'quadratic equations (definition and standard form)',

    progressionStructure: {
      sections: [
        {
          id: "quadratic-definition",
          title: "Recognizing Quadratic Equations",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies quadratic equations and coefficients in 3+ different forms with minimal hints",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications without hints",
                "Correctly identifies all three coefficients (a, b, c) in each case"
              ],
              qualitative: [
                "Recognizes standard form ax² + bx + c = 0",
                "Understands that a ≠ 0 (distinguishes from linear equations)",
                "Identifies equations needing rearrangement (e.g., x² = 5x + 1)",
                "Correctly handles cases where b = 0 or c = 0"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on coefficient identification"],
              qualitative: [
                "Recognizes obvious quadratic forms but struggles with rearrangement",
                "Needs prompting to identify coefficients",
                "Sometimes confuses with linear equations"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Cannot identify coefficients"],
              qualitative: [
                "Thinks b and c must be non-zero",
                "Confuses quadratic with linear equations consistently",
                "Does not recognize x² term as key identifier",
                "Cannot distinguish equation degree"
              ]
            }
          },
          learningObjectives: [
            "Define quadratic equation as ax² + bx + c = 0 where a ≠ 0",
            "Identify the three coefficients: a (quadratic), b (linear), c (constant)",
            "Recognize that a ≠ 0 is essential (otherwise it's linear)",
            "Distinguish quadratic from linear and cubic equations",
            "Handle special cases where b = 0 or c = 0"
          ],
          relevantFormulas: [
            "Standard form: ax² + bx + c = 0 where a ≠ 0",
            "Examples: x² + 5x + 6 = 0 (a=1, b=5, c=6)",
            "         2x² - 3x + 1 = 0 (a=2, b=-3, c=1)",
            "         x² - 4 = 0 (a=1, b=0, c=-4)"
          ],
          availableTools: []
        },
        {
          id: "standard-form-rearrangement",
          title: "Writing Quadratics in Standard Form",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["quadratic-definition"],
          masterySignals: "Student successfully rearranges 3-4 equations to standard form with correct signs and combined terms",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3-4 correct rearrangements with minimal hints",
                "No sign errors when moving terms"
              ],
              qualitative: [
                "Moves all terms to one side systematically",
                "Combines like terms correctly",
                "Arranges in descending powers (x², x, constant)",
                "Recognizes when to expand brackets first"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on sign handling"],
              qualitative: [
                "Understands the goal but makes occasional sign errors",
                "Needs prompting for like term combination",
                "Sometimes forgets to expand brackets"
              ]
            },
            struggling: {
              quantitative: ["Multiple sign errors", "Cannot complete rearrangement"],
              qualitative: [
                "Consistent sign errors when moving terms across equals",
                "Does not combine like terms properly",
                "Forgets to expand brackets before rearranging",
                "Leaves terms on both sides of equation"
              ]
            }
          },
          learningObjectives: [
            "Rearrange equations to ax² + bx + c = 0 form",
            "Move all terms to one side (making RHS = 0)",
            "Combine like terms and simplify",
            "Handle equations with terms on both sides",
            "Expand brackets when necessary before rearranging"
          ],
          relevantFormulas: [
            "Rearrangement steps: Move all terms to left, combine like terms, ensure RHS = 0",
            "Examples: x² + 3x = 4 → x² + 3x - 4 = 0",
            "         2x² = 5x + 3 → 2x² - 5x - 3 = 0",
            "         x(x - 2) = 8 → x² - 2x - 8 = 0"
          ],
          availableTools: ["algebraExpression"]
        }
      ]
    }
  },

  // ==========================================
  // SUBTOPIC 2: Solving by Square Root Method
  // ==========================================

  's2-math-quadratics-pure-square-root': {
    displayName: 'Solving by Taking Square Roots',
    topicName: 'solving quadratic equations using square root method',

    progressionStructure: {
      sections: [
        {
          id: "solving-pure-quadratic",
          title: "Solving x² = k",
          difficulty: "foundational",
          prerequisites: ["quadratic-definition"],
          masterySignals: "Student correctly solves x² = k problems including both ± roots, and recognizes no solution when k < 0 (3-4 questions)",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3-4 correct solutions with both ± roots",
                "Correctly identifies no solution for negative k"
              ],
              qualitative: [
                "Always includes ±√k (both positive and negative roots)",
                "Recognizes when k < 0 has no real solution",
                "Simplifies radicals appropriately (√4 = 2, not leaving as √4)",
                "Handles special case x² = 0 correctly (one solution: x = 0)"
              ]
            },
            developing: {
              quantitative: ["2 correct, occasionally forgets ± sign"],
              qualitative: [
                "Sometimes forgets the negative root",
                "Needs reminding about no solution for negative k",
                "Partial radical simplification"
              ]
            },
            struggling: {
              quantitative: ["Consistently forgets ± sign", "Thinks negative k has solution"],
              qualitative: [
                "Only writes x = √k (forgets negative root consistently)",
                "Attempts to find solutions when k < 0",
                "Does not simplify radicals (leaves √4 instead of 2)",
                "Confused about why there are two solutions"
              ]
            }
          },
          learningObjectives: [
            "Solve equations of form x² = k by taking square roots",
            "Understand why there are two solutions: x = ±√k",
            "Recognize when k < 0 means no real solution",
            "Handle special case k = 0 (one solution)",
            "Express solutions exactly using radicals when needed"
          ],
          relevantFormulas: [
            "x² = k → x = ±√k (when k ≥ 0)",
            "Examples: x² = 25 → x = ±5 → x = 5 or x = -5",
            "         x² = 7 → x = ±√7 (exact form)",
            "         x² = 0 → x = 0 (one solution)",
            "         x² = -9 → No real solution"
          ],
          availableTools: ["parabolaGraph", "numberLine"]
        },
        {
          id: "solving-ax-squared-equals-k",
          title: "Solving ax² = k",
          difficulty: "intermediate",
          prerequisites: ["solving-pure-quadratic"],
          masterySignals: "Student isolates x² by dividing by a, then applies square root principle correctly in 3-4 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3-4 correct solutions with proper isolation",
                "Correct division and square root application"
              ],
              qualitative: [
                "Isolates x² first by dividing both sides by a",
                "Applies ±√ principle after isolation",
                "Handles fractional coefficients correctly",
                "Verifies solutions by substitution"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on division or ± sign"],
              qualitative: [
                "Understands process but makes arithmetic errors",
                "Sometimes takes square root before isolating x²",
                "Needs prompting for fractional coefficient handling"
              ]
            },
            struggling: {
              quantitative: ["Cannot isolate x²", "Takes square root prematurely"],
              qualitative: [
                "Takes square root before isolating x² term",
                "Sign errors when rearranging",
                "Division errors with fractions or decimals",
                "Forgets ± after isolation"
              ]
            }
          },
          learningObjectives: [
            "Isolate x² by dividing both sides by coefficient a",
            "Apply square root principle after isolation",
            "Handle fractional and decimal coefficients",
            "Verify solutions by substitution",
            "Recognize when rearrangement to ax² = k form is needed first"
          ],
          relevantFormulas: [
            "ax² = k → x² = k/a → x = ±√(k/a)",
            "Examples: 2x² = 18 → x² = 9 → x = ±3",
            "         3x² - 12 = 0 → 3x² = 12 → x² = 4 → x = ±2",
            "         5x² = 20 → x² = 4 → x = ±2",
            "         ½x² = 8 → x² = 16 → x = ±4"
          ],
          availableTools: ["parabolaGraph", "algebraExpression"]
        }
      ]
    }
  },

  // ==========================================
  // SUBTOPIC 3: Solving by Factorization
  // ==========================================

  's2-math-quadratics-solving-factorization': {
    displayName: 'Solving by Factorization',
    topicName: 'solving quadratic equations using factorization method',

    progressionStructure: {
      sections: [
        {
          id: "factorization-review",
          title: "Factorizing Quadratic Expressions",
          difficulty: "foundational",
          prerequisites: ["quadratic-definition"],
          masterySignals: "Student correctly factorizes 3+ quadratic expressions with different sign patterns, verifying by expansion",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct factorizations across different sign patterns",
                "Verification by expansion successful"
              ],
              qualitative: [
                "Finds factor pairs that multiply to c and add to b",
                "Handles positive c with positive b: (x + p)(x + q)",
                "Handles positive c with negative b: (x - p)(x - q)",
                "Handles negative c: (x + p)(x - q)",
                "Recognizes difference of squares pattern"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on factor pair selection"],
              qualitative: [
                "Understands factor pair concept but makes sign errors",
                "Needs prompting for correct factor combinations",
                "Can factor simple cases but struggles with negative c"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect factor pairs", "Cannot find correct signs"],
              qualitative: [
                "Confuses addition and multiplication in factor search",
                "Consistent sign errors in factor pairs",
                "Does not check by expanding",
                "Does not recognize special patterns like difference of squares"
              ]
            }
          },
          learningObjectives: [
            "Review factorization: x² + bx + c = (x + p)(x + q) where p + q = b, pq = c",
            "Factor when c > 0 and b > 0 (both factors same sign, positive)",
            "Factor when c > 0 and b < 0 (both factors same sign, negative)",
            "Factor when c < 0 (factors have opposite signs)",
            "Recognize and factor difference of squares: x² - a² = (x + a)(x - a)"
          ],
          relevantFormulas: [
            "x² + bx + c = (x + p)(x + q) where p + q = b and pq = c",
            "Examples: x² + 5x + 6 = (x + 2)(x + 3)",
            "         x² - 5x + 6 = (x - 2)(x - 3)",
            "         x² + x - 6 = (x + 3)(x - 2)",
            "         x² - 4 = (x + 2)(x - 2) [difference of squares]"
          ],
          availableTools: ["factoringVisualizer", "multiplicationGrid"]
        },
        {
          id: "zero-product-property",
          title: "Using Zero Product Property",
          difficulty: "intermediate",
          prerequisites: ["factorization-review"],
          masterySignals: "Student applies zero product property correctly to solve (x + p)(x + q) = 0 in 4-5 problems, finding both roots",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4-5 correct applications with both roots found",
                "Correct sign handling when solving x + p = 0"
              ],
              qualitative: [
                "States zero product property: if ab = 0 then a = 0 or b = 0",
                "Sets each factor equal to zero separately",
                "Solves linear equations correctly (handles signs)",
                "Recognizes repeated roots: (x - a)² = 0 gives one solution",
                "Verifies solutions by substitution"
              ]
            },
            developing: {
              quantitative: ["3 correct with occasional sign errors"],
              qualitative: [
                "Understands the property but makes sign errors",
                "Sometimes finds only one solution",
                "Needs prompting for verification"
              ]
            },
            struggling: {
              quantitative: ["Cannot separate factors", "Consistent sign errors"],
              qualitative: [
                "Tries to solve when RHS ≠ 0 (doesn't rearrange first)",
                "Sign errors when solving x + p = 0 (forgets to change sign)",
                "Only finds one solution when there are two",
                "Does not understand why ab = 0 means a = 0 or b = 0"
              ]
            }
          },
          learningObjectives: [
            "Understand zero product property: if ab = 0, then a = 0 or b = 0",
            "Solve factored equations: (x + p)(x + q) = 0",
            "Set each factor to zero separately",
            "Handle sign changes correctly (x + p = 0 → x = -p)",
            "Recognize repeated roots from perfect squares",
            "Connect solutions to x-intercepts of parabola"
          ],
          relevantFormulas: [
            "If (x + p)(x + q) = 0, then: x + p = 0 OR x + q = 0",
            "                              x = -p OR x = -q",
            "Examples: (x + 2)(x - 3) = 0 → x = -2 or x = 3",
            "         (x - 5)(x - 1) = 0 → x = 5 or x = 1",
            "         (x + 4)² = 0 → x = -4 [repeated root]"
          ],
          availableTools: ["parabolaGraph", "algebraExpression"]
        },
        {
          id: "solving-by-factorization-complete",
          title: "Complete Solution Process",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["zero-product-property"],
          masterySignals: "Student completes full process: rearrange → factor → apply zero product → solve, for 5-6 varied problems with minimal hints",
          estimatedQuestions: "6-8 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "5-6 correct complete solutions",
                "Handles equations with a ≠ 1 correctly"
              ],
              qualitative: [
                "Rearranges to standard form first (all terms on one side)",
                "Factors correctly (including common factors)",
                "Applies zero product property",
                "Solves resulting linear equations accurately",
                "Handles special cases: common factor extraction (e.g., x² = 4x → x(x-4) = 0)",
                "Verifies solutions make original equation true"
              ]
            },
            developing: {
              quantitative: ["3-4 correct with hints on factorization or rearrangement"],
              qualitative: [
                "Completes most steps but needs prompting",
                "Factorization errors with a ≠ 1",
                "Forgets x = 0 in equations like x² = 4x"
              ]
            },
            struggling: {
              quantitative: ["Cannot complete full process", "Multiple errors at different steps"],
              qualitative: [
                "Does not rearrange to standard form first",
                "Cannot factor correctly",
                "Misses x = 0 solution in equations like x² = 4x (forgets to factor out x)",
                "Cannot handle equations where a ≠ 1",
                "Does not verify solutions"
              ]
            }
          },
          learningObjectives: [
            "Execute complete process: rearrange → factor → apply ZPP → solve",
            "Rearrange equation to ax² + bx + c = 0 form first",
            "Factor quadratic expressions (including when a ≠ 1)",
            "Extract common factors when present (e.g., x² = 4x → x(x - 4) = 0)",
            "Apply zero product property and solve for x",
            "Handle equations requiring simplification first",
            "Verify solutions by substitution"
          ],
          relevantFormulas: [
            "Complete process: 1) Rearrange to standard form, 2) Factor, 3) Set factors to zero, 4) Solve, 5) Verify",
            "Examples: x² + 5x = -6 → x² + 5x + 6 = 0 → (x + 2)(x + 3) = 0 → x = -2 or x = -3",
            "         x² = 4x → x² - 4x = 0 → x(x - 4) = 0 → x = 0 or x = 4",
            "         2x² + 5x - 3 = 0 → (2x - 1)(x + 3) = 0 → x = ½ or x = -3"
          ],
          availableTools: ["factoringVisualizer", "multiplicationGrid", "parabolaGraph", "algebraExpression"]
        }
      ]
    }
  },

  // ==========================================
  // SUBTOPIC 4: Introduction to Quadratic Graphs
  // ==========================================

  's2-math-quadratics-parabola-shape': {
    displayName: 'Graphing Quadratic Functions',
    topicName: 'graphing quadratic functions and understanding parabola shape',

    progressionStructure: {
      sections: [
        {
          id: "parabola-shape-basics",
          title: "Understanding Parabola Shape",
          difficulty: "foundational",
          prerequisites: ["quadratic-definition"],
          masterySignals: "Student correctly predicts parabola opening direction and width based on coefficient a in 3-4 questions",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3-4 correct predictions of opening direction",
                "Correctly compares widths based on |a|"
              ],
              qualitative: [
                "Recognizes y = x² as parent quadratic function",
                "Knows a > 0 → opens upward (∪), a < 0 → opens downward (∩)",
                "Understands |a| > 1 → narrower, 0 < |a| < 1 → wider",
                "Recognizes parabola is smooth curve (no corners)",
                "Understands symmetry about vertical axis"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on width comparison"],
              qualitative: [
                "Knows opening direction but uncertain about width",
                "Needs prompting for |a| effect on width",
                "Sometimes draws parabolas with sharp corners"
              ]
            },
            struggling: {
              quantitative: ["Cannot predict opening or width consistently"],
              qualitative: [
                "Confuses opening direction (thinks a < 0 opens upward)",
                "Does not understand how |a| affects width",
                "Draws parabolas with corners or as straight lines",
                "Thinks all parabolas are identical in shape"
              ]
            }
          },
          learningObjectives: [
            "Recognize U-shaped parabola as graph of quadratic function",
            "Understand y = x² as parent quadratic function",
            "Identify upward opening (a > 0) vs downward opening (a < 0)",
            "Understand effect of |a| on width: larger |a| → narrower, smaller |a| → wider",
            "Recognize parabola is smooth curve with symmetry"
          ],
          relevantFormulas: [
            "y = x² [parent function - standard parabola]",
            "y = ax² [vertical stretch/compression and reflection]",
            "Properties: If a > 0, opens upward (∪); if a < 0, opens downward (∩)",
            "           If |a| > 1, narrower; if 0 < |a| < 1, wider"
          ],
          availableTools: ["parabolaGraph", "functionGraph"]
        },
        {
          id: "plotting-quadratics-table",
          title: "Plotting Points to Draw Parabolas",
          difficulty: "intermediate",
          prerequisites: ["parabola-shape-basics"],
          masterySignals: "Student creates accurate table of values, plots points correctly, and draws smooth parabola curve for 2-3 functions",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 complete and accurate plots",
                "Table calculations correct, points plotted accurately"
              ],
              qualitative: [
                "Chooses appropriate x-values (centered around vertex)",
                "Calculates y-values accurately",
                "Plots points on coordinate plane correctly",
                "Draws smooth curve through points (not connecting with straight lines)",
                "Uses symmetry to check accuracy"
              ]
            },
            developing: {
              quantitative: ["1-2 plots with minor calculation errors"],
              qualitative: [
                "Understands process but makes arithmetic errors in table",
                "Sometimes connects points with straight lines",
                "Needs prompting for symmetric x-value selection"
              ]
            },
            struggling: {
              quantitative: ["Multiple calculation errors", "Incorrect plotting"],
              qualitative: [
                "Connects points with straight lines instead of smooth curve",
                "Does not choose enough points near vertex",
                "Significant calculation errors in table",
                "Cannot identify appropriate x-value range"
              ]
            }
          },
          learningObjectives: [
            "Create table of values for quadratic functions",
            "Choose strategic x-values centered around vertex",
            "Calculate y-values accurately for each x",
            "Plot points correctly on coordinate plane",
            "Draw smooth parabola curve through points",
            "Use symmetry to verify accuracy"
          ],
          relevantFormulas: [
            "For y = ax² + bx + c: Create table with x-values, calculate corresponding y-values",
            "Example: y = x² - 2x - 3",
            "x: -2, -1, 0, 1, 2, 3, 4",
            "y:  5,  0, -3, -4, -3, 0, 5",
            "Plot points (x, y) and draw smooth curve"
          ],
          availableTools: ["coordinatePlane2D", "parabolaGraph", "functionGraph"]
        },
        {
          id: "parabola-key-features",
          title: "Vertex, Axis of Symmetry, and Intercepts",
          difficulty: "intermediate",
          prerequisites: ["plotting-quadratics-table"],
          masterySignals: "Student identifies all key features (vertex, axis, y-intercept, x-intercepts) from equation or graph in 4-5 problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4-5 correct identifications of all key features",
                "Vertex formula applied correctly",
                "Intercepts found accurately"
              ],
              qualitative: [
                "Finds vertex using x = -b/(2a), then substitutes for y",
                "Identifies axis of symmetry as x = -b/(2a)",
                "Finds y-intercept by setting x = 0 (gives c)",
                "Finds x-intercepts by solving ax² + bx + c = 0",
                "Distinguishes maximum (a < 0) from minimum (a > 0) at vertex",
                "Reads features from graph accurately"
              ]
            },
            developing: {
              quantitative: ["3 correct with hints on vertex formula or intercepts"],
              qualitative: [
                "Knows vertex formula but makes errors in application",
                "Sometimes confuses vertex with intercepts",
                "Needs prompting for axis of symmetry",
                "Can find y-intercept but struggles with x-intercepts"
              ]
            },
            struggling: {
              quantitative: ["Cannot apply vertex formula", "Confuses different features"],
              qualitative: [
                "Confuses vertex coordinates with intercepts",
                "Axis of symmetry formula errors (wrong sign or missing division)",
                "Does not understand minimum vs maximum distinction",
                "Cannot connect algebraic and graphical features"
              ]
            }
          },
          learningObjectives: [
            "Identify vertex (turning point) - highest or lowest point",
            "Find axis of symmetry: x = -b/(2a)",
            "Calculate vertex: x-coordinate using formula, y by substitution",
            "Locate y-intercept: where x = 0, value is c",
            "Find x-intercepts: solve ax² + bx + c = 0 (roots)",
            "Read maximum or minimum value from vertex",
            "Understand parabola has 0, 1, or 2 x-intercepts"
          ],
          relevantFormulas: [
            "For y = ax² + bx + c:",
            "y-intercept: Set x = 0 → y = c → point (0, c)",
            "Axis of symmetry: x = -b/(2a)",
            "Vertex x-coordinate: x = -b/(2a)",
            "Vertex y-coordinate: substitute x into equation",
            "x-intercepts: Solve ax² + bx + c = 0",
            "Example: y = x² - 4x + 3",
            "  y-intercept: (0, 3)",
            "  Axis: x = 4/2 = 2",
            "  Vertex: (2, -1)",
            "  x-intercepts: (1, 0) and (3, 0)"
          ],
          availableTools: ["parabolaGraph", "functionGraph", "coordinatePlane2D"]
        }
      ]
    }
  },

  // ==========================================
  // SUBTOPIC 5: Roots and Reading Graphs
  // ==========================================

  's2-math-quadratics-roots-x-intercepts': {
    displayName: 'Solving Quadratics Graphically',
    topicName: 'understanding roots as x-intercepts and reading solutions from graphs',

    progressionStructure: {
      sections: [
        {
          id: "roots-as-x-intercepts",
          title: "Understanding Roots Graphically",
          difficulty: "intermediate",
          prerequisites: ["parabola-key-features", "zero-product-property"],
          masterySignals: "Student connects algebraic roots to graphical x-intercepts and determines number of roots from graph in 4-5 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4-5 correct connections between algebra and graphs",
                "Accurately determines 0, 1, or 2 roots from graph position"
              ],
              qualitative: [
                "States: roots = x-intercepts = zeros of function",
                "Understands 2 x-intercepts → 2 distinct real roots",
                "Understands 1 x-intercept → 1 repeated root (vertex touches x-axis)",
                "Understands 0 x-intercepts → no real roots (parabola above or below x-axis)",
                "Connects factored form (x - r₁)(x - r₂) to x-intercepts at r₁ and r₂"
              ]
            },
            developing: {
              quantitative: ["3 correct with prompts on cases"],
              qualitative: [
                "Understands connection but needs prompting for special cases",
                "Sometimes confuses y-intercept with x-intercepts",
                "Unsure about repeated root case (tangent to x-axis)"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify number of roots from graph"],
              qualitative: [
                "Confuses y-intercept with x-intercepts",
                "Does not recognize repeated root (tangent case)",
                "Thinks all quadratics have exactly 2 roots",
                "Cannot connect algebraic solutions to graph"
              ]
            }
          },
          learningObjectives: [
            "Understand roots are where parabola crosses x-axis (y = 0)",
            "Connect algebraic solutions to graphical x-intercepts",
            "Identify number of roots from graph: 0, 1, or 2",
            "Recognize 2 x-intercepts → 2 distinct roots",
            "Recognize 1 x-intercept → 1 repeated root (vertex on x-axis)",
            "Recognize 0 x-intercepts → no real roots",
            "Relate to factorization: (x - r₁)(x - r₂) = 0 gives roots r₁, r₂"
          ],
          relevantFormulas: [
            "Roots are solutions to ax² + bx + c = 0",
            "Graphically: x-coordinates where parabola crosses x-axis (y = 0)",
            "Cases:",
            "  2 x-intercepts → 2 distinct real roots",
            "  1 x-intercept → 1 repeated root (vertex touches x-axis)",
            "  0 x-intercepts → no real roots (parabola doesn't cross x-axis)",
            "Examples:",
            "  y = x² - 5x + 6 crosses at x = 2 and x = 3",
            "  y = x² - 4x + 4 touches at x = 2 (repeated)",
            "  y = x² + 1 doesn't cross (no real roots)"
          ],
          availableTools: ["parabolaGraph", "functionGraph"]
        },
        {
          id: "reading-graph-solutions",
          title: "Estimating and Verifying Solutions",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["roots-as-x-intercepts"],
          masterySignals: "Student estimates solutions from graphs, verifies algebraically, and solves inequalities graphically in 4-5 problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4-5 correct estimations and verifications",
                "Correctly solves inequalities using graphs"
              ],
              qualitative: [
                "Estimates roots from graph to reasonable accuracy",
                "Verifies graphical estimates by substitution",
                "Solves inequalities: y > 0 (above x-axis), y < 0 (below x-axis)",
                "Identifies solution regions correctly",
                "Understands accuracy limitations of graphical method",
                "Compares graphical and algebraic approaches appropriately"
              ]
            },
            developing: {
              quantitative: ["3 correct with hints on inequality regions"],
              qualitative: [
                "Can estimate from graph but forgets to verify",
                "Needs prompting for inequality region identification",
                "Sometimes confuses above/below x-axis regions"
              ]
            },
            struggling: {
              quantitative: ["Cannot estimate or identify regions accurately"],
              qualitative: [
                "Accepts graphical estimates without verification",
                "Does not understand inequality regions (y > 0, y < 0)",
                "Reads y-values instead of x-values for roots",
                "Cannot translate graph information to algebraic inequality solutions"
              ]
            }
          },
          learningObjectives: [
            "Estimate solutions from graph to nearest integer or 0.5",
            "Verify graphical solutions by algebraic substitution",
            "Solve inequalities using graphs: when is y > 0? when is y < 0?",
            "Identify regions: y > 0 (parabola above x-axis), y < 0 (below)",
            "For y > 0 with 2 roots: x < smaller root OR x > larger root",
            "For y < 0 with 2 roots: smaller root < x < larger root",
            "Compare graphical estimation with exact algebraic solutions"
          ],
          relevantFormulas: [
            "Process: 1) Read x-intercepts from graph, 2) Verify by substitution, 3) For inequalities, identify regions",
            "Inequality regions:",
            "  y > 0: parabola above x-axis (outside roots if a > 0)",
            "  y < 0: parabola below x-axis (between roots if a > 0)",
            "Example: For y = x² - 3x - 4 with roots at x = -1 and x = 4:",
            "  y > 0 when x < -1 OR x > 4 (parabola above x-axis)",
            "  y < 0 when -1 < x < 4 (parabola below x-axis)"
          ],
          availableTools: ["parabolaGraph", "functionGraph", "coordinatePlane2D"]
        },
        {
          id: "vertex-optimization",
          title: "Maximum and Minimum Values",
          difficulty: "advanced",
          prerequisites: ["parabola-key-features"],
          masterySignals: "Student finds exact maximum or minimum values using vertex formula and applies to optimization in 4-5 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4-5 correct max/min calculations",
                "Correct vertex formula application"
              ],
              qualitative: [
                "Identifies maximum (a < 0) vs minimum (a > 0) correctly",
                "Calculates vertex: x = -b/(2a), then finds y",
                "Understands max/min value is y-coordinate of vertex",
                "Interprets vertex in real-world contexts (max height, min cost, etc.)",
                "Distinguishes between x-coordinate (where) and y-coordinate (the value)",
                "Reads max/min from graphs accurately"
              ]
            },
            developing: {
              quantitative: ["3 correct with hints on formula or interpretation"],
              qualitative: [
                "Applies formula but sometimes confuses x and y coordinates",
                "Needs prompting for maximum vs minimum distinction",
                "Can calculate but struggles with real-world interpretation"
              ]
            },
            struggling: {
              quantitative: ["Cannot apply vertex formula correctly"],
              qualitative: [
                "Confuses x-coordinate of vertex with the maximum/minimum value",
                "Does not distinguish between maximum and minimum",
                "Vertex formula errors (sign or division mistakes)",
                "Cannot interpret vertex in context of word problems"
              ]
            }
          },
          learningObjectives: [
            "Identify maximum value when a < 0 (parabola opens downward)",
            "Identify minimum value when a > 0 (parabola opens upward)",
            "Understand vertex is the optimal point",
            "Calculate vertex using x = -b/(2a), then substitute for y",
            "Recognize max/min value is y-coordinate of vertex",
            "Apply to optimization problems (max area, max height, min cost)",
            "Read maximum/minimum from graphs"
          ],
          relevantFormulas: [
            "For y = ax² + bx + c:",
            "Vertex: x = -b/(2a), then y = a(x)² + b(x) + c",
            "If a > 0: vertex is minimum point",
            "If a < 0: vertex is maximum point",
            "Minimum/Maximum value = y-coordinate of vertex",
            "Example: y = -x² + 4x - 3",
            "  x = -4/(2(-1)) = 2",
            "  y = -(2)² + 4(2) - 3 = -4 + 8 - 3 = 1",
            "  Maximum value = 1 (occurs at x = 2)"
          ],
          availableTools: ["parabolaGraph", "functionGraph"]
        }
      ]
    }
  },

  // ==========================================
  // SUBTOPIC 6: Applications and Word Problems
  // ==========================================

  's2-math-quadratics-area-problems': {
    displayName: 'Real-World Applications',
    topicName: 'applying quadratic equations to real-world problems',

    progressionStructure: {
      sections: [
        {
          id: "quadratic-area-problems",
          title: "Area and Perimeter Optimization",
          difficulty: "intermediate",
          prerequisites: ["solving-by-factorization-complete", "vertex-optimization"],
          masterySignals: "Student translates word problems to equations, solves for dimensions, and optimizes area given constraints in 3-4 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3-4 correct setups and solutions",
                "Appropriate rejection of invalid solutions"
              ],
              qualitative: [
                "Translates words to algebraic expressions accurately",
                "Sets up equations using area/perimeter formulas",
                "Solves quadratic equations correctly",
                "Rejects negative or unrealistic solutions (e.g., negative dimensions)",
                "Interprets solutions in context of problem",
                "Uses vertex for optimization problems (maximum area given perimeter)"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on setup"],
              qualitative: [
                "Understands general approach but needs help with equation setup",
                "Sometimes forgets to reject invalid solutions",
                "Can solve equation but struggles with word-to-algebra translation"
              ]
            },
            struggling: {
              quantitative: ["Cannot set up equations from words"],
              qualitative: [
                "Does not reject negative solutions",
                "Sets up incorrect expressions (confuses area and perimeter)",
                "Cannot translate word problem constraints to equations",
                "Does not check if solutions make sense in context"
              ]
            }
          },
          learningObjectives: [
            "Translate word problems to quadratic equations",
            "Set up expressions for area (length × width) and perimeter (2(l + w))",
            "Solve for dimensions given area or perimeter constraints",
            "Find maximum area given fixed perimeter (using vertex)",
            "Interpret solutions in problem context",
            "Reject invalid solutions (negative dimensions, unrealistic values)"
          ],
          relevantFormulas: [
            "Rectangle: Area = length × width, Perimeter = 2(length + width)",
            "Example setups:",
            "  'Length is 3 more than width' → l = w + 3",
            "  'Area is 40' → w(w + 3) = 40 → w² + 3w - 40 = 0",
            "Maximum area with fixed perimeter:",
            "  'Fence 100m total' → If width = x, length = 50 - x",
            "  Area = x(50 - x) = -x² + 50x",
            "  Maximum at vertex: x = -50/(2(-1)) = 25"
          ],
          availableTools: ["wordProblemDiagram", "parabolaGraph", "algebraExpression"]
        },
        {
          id: "quadratic-projectile-motion",
          title: "Projectile Motion and Height-Time",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["vertex-optimization", "roots-as-x-intercepts"],
          masterySignals: "Student interprets height-time equations, finds max height (vertex) and landing time (root) in 3-4 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3-4 correct interpretations and calculations",
                "Correct max height and landing time"
              ],
              qualitative: [
                "Understands h = -at² + vt + h₀ model",
                "Finds maximum height using vertex: t = v/(2a)",
                "Calculates max height by substituting t into equation",
                "Finds landing time by solving h = 0",
                "Rejects negative time solutions (no physical meaning)",
                "Interprets coefficients: v = initial velocity, h₀ = initial height, a ~ gravity"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on vertex vs root"],
              qualitative: [
                "Knows vertex gives max height but makes calculation errors",
                "Confuses time at max height with the max height value",
                "Needs prompting to reject negative time"
              ]
            },
            struggling: {
              quantitative: ["Cannot distinguish vertex from roots in context"],
              qualitative: [
                "Does not reject negative time solutions",
                "Confuses maximum height (y-value) with time at maximum (x-value)",
                "Sign errors with negative coefficient of t²",
                "Cannot interpret what vertex and roots mean in projectile context"
              ]
            }
          },
          learningObjectives: [
            "Understand height as quadratic function of time: h = -at² + vt + h₀",
            "Find maximum height using vertex formula",
            "Calculate time when max height occurs",
            "Find time when object hits ground (solve h = 0)",
            "Interpret coefficients: a (gravity), v (initial velocity), h₀ (initial height)",
            "Reject negative time solutions as physically meaningless",
            "Connect to parabola graph: vertex = max height, positive root = landing time"
          ],
          relevantFormulas: [
            "Height: h = -at² + vt + h₀",
            "where: a relates to gravity (often 5 in simplified models)",
            "       v is initial upward velocity",
            "       h₀ is initial height",
            "       t is time",
            "Maximum height: at vertex t = v/(2a), then calculate h at that t",
            "Hits ground: solve h = 0 (use positive root)",
            "Example: h = -5t² + 20t + 5",
            "  Max height at: t = 20/(2·5) = 2 seconds",
            "  Max height: h = -5(4) + 40 + 5 = 25 meters",
            "  Lands: -5t² + 20t + 5 = 0 → solve for t > 0"
          ],
          availableTools: ["parabolaGraph", "wordProblemDiagram", "functionGraph"]
        },
        {
          id: "quadratic-number-patterns",
          title: "Number Relationships and Patterns",
          difficulty: "advanced",
          prerequisites: ["solving-by-factorization-complete"],
          masterySignals: "Student sets up and solves number pattern problems, checking both solutions for validity in 4-5 problems",
          estimatedQuestions: "4-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4-5 correct setups and solutions",
                "Both solutions evaluated for context appropriateness"
              ],
              qualitative: [
                "Sets up equations for consecutive number problems (n, n+1, n+2)",
                "Handles consecutive even/odd (n, n+2, n+4)",
                "Translates abstract relationships to equations",
                "Solves quadratic equations correctly",
                "Checks both solutions for validity in problem context",
                "Interprets which solutions fit the problem statement"
              ]
            },
            developing: {
              quantitative: ["3 correct with hints on setup or validity check"],
              qualitative: [
                "Can set up equations but makes errors with consecutive notation",
                "Solves correctly but doesn't always check both solutions",
                "Needs prompting for which solution fits the context"
              ]
            },
            struggling: {
              quantitative: ["Cannot set up consecutive number expressions"],
              qualitative: [
                "Incorrect expressions for 'consecutive' (doesn't use n, n+1)",
                "Does not check which solution fits the problem",
                "Expansion and simplification errors",
                "Cannot translate word relationships to algebraic equations"
              ]
            }
          },
          learningObjectives: [
            "Set up equations for consecutive integer problems (n, n+1, n+2)",
            "Handle consecutive even numbers (n, n+2, n+4) and odd numbers",
            "Translate abstract relationships to quadratic equations",
            "Solve geometric pattern problems",
            "Interpret both solutions and determine which fit the problem",
            "Check solutions by substitution into original problem statement"
          ],
          relevantFormulas: [
            "Consecutive integers: n, n+1, n+2, ...",
            "Consecutive even: n, n+2, n+4, ... (where n is even)",
            "Consecutive odd: n, n+2, n+4, ... (where n is odd)",
            "Example setups:",
            "  'Product of two consecutive numbers is 72'",
            "  → n(n+1) = 72 → n² + n - 72 = 0",
            "  'Sum of squares of two consecutive is 85'",
            "  → n² + (n+1)² = 85 → n² + n² + 2n + 1 = 85 → 2n² + 2n - 84 = 0"
          ],
          availableTools: ["algebraExpression", "numberLine"]
        }
      ]
    }
  }

};

// Export all subtopic IDs for easy reference
export const ALL_QUADRATIC_SUBTOPIC_IDS: QuadraticTopicId[] = [
  's2-math-quadratics-definition',
  's2-math-quadratics-pure-square-root',
  's2-math-quadratics-solving-factorization',
  's2-math-quadratics-parabola-shape',
  's2-math-quadratics-roots-x-intercepts',
  's2-math-quadratics-area-problems'
];
