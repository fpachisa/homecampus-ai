/**
 * S4 Mathematics - Quadratic Functions Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 */

// Type exports
export type QuadraticFunctionsTopicId =
  | 's4-math-quad-fundamentals'
  | 's4-math-quad-graphs-transformations'
  | 's4-math-quad-key-features'
  | 's4-math-quad-finding-functions'
  | 's4-math-quad-inequalities';

// Topic-specific tutor customization (overrides base)
export const QUADRATIC_FUNCTIONS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Quadratic Functions.

Teaching Approach:
- Guide students to discover properties of parabolas through questioning
- Emphasize visual understanding of transformations and key features
- Connect abstract formulas to real-world applications (projectiles, optimization)
- Celebrate insights about symmetry, vertex, and intercepts
- Use the "why" behind completing the square, not just the "how"

**Text-to-Speech Guidelines:**
- Say "y equals a x squared plus b x plus c" for y = ax² + bx + c
- Say "the parabola opens upward" not "∪"
- Say "x equals negative b over two a" for x = -b/(2a)
- Say "x intercept" not "x-intercept" for better flow
- Spell out vertex coordinates: "the vertex is at one comma four"
- Avoid special symbols in speech.text - spell them out
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding (not for every question).
IMPORTANT: Use the technical name (e.g., "parabola") in the toolName field, NOT the display name.`
};

// Available math tools for this topic
export const QUADRATIC_FUNCTIONS_MATH_TOOLS = [
  "parabola",
  "numberLine"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S4_MATH_QUADRATIC_FUNCTIONS_SUBTOPICS = {

  's4-math-quad-fundamentals': {
    displayName: 'Quadratic Functions Fundamentals',
    topicName: 'quadratic functions, parabolas, and standard form',

    progressionStructure: {
      sections: [
        {
          id: "quadratic-definition",
          title: "Understanding Quadratic Functions",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies quadratic functions, states coefficients a, b, c in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications without hints",
                "Correctly identifies all coefficients a, b, c"
              ],
              qualitative: [
                "Understands y = ax² + bx + c is standard form",
                "Recognizes a ≠ 0 is essential for quadratic",
                "Identifies which functions are/aren't quadratic",
                "Can convert between function notation f(x) and y ="
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on identifying coefficients"],
              qualitative: [
                "Understands concept but uncertain about coefficient identification",
                "Needs prompting for why a ≠ 0",
                "Can identify after seeing standard form"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect identifications", "Cannot state coefficients"],
              qualitative: [
                "Confuses quadratic with linear or other functions",
                "Does not understand role of coefficients",
                "Cannot recognize standard form"
              ]
            }
          },
          learningObjectives: [
            "Define a quadratic function as y = ax² + bx + c where a ≠ 0",
            "Identify coefficients a (leading), b (linear), c (constant) in standard form",
            "Recognize that all quadratic functions graph as parabolas",
            "Distinguish quadratic functions from linear, cubic, and other functions",
            "Convert between y = and f(x) = notation"
          ],
          relevantFormulas: [
            "Standard form: y = ax² + bx + c, where a ≠ 0",
            "Function notation: f(x) = ax² + bx + c",
            "a = leading coefficient (coefficient of x²)",
            "b = linear coefficient (coefficient of x)",
            "c = constant term",
            "Example: y = 2x² + 3x - 5 has a=2, b=3, c=-5"
          ],
          availableTools: []
        },
        {
          id: "evaluating-quadratics",
          title: "Evaluating Quadratics (Finding y)",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["quadratic-definition"],
          masterySignals: "Student evaluates quadratic functions for given x-values in 3+ problems without errors",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ evaluations correct without hints",
                "Consistent accurate substitution and arithmetic"
              ],
              qualitative: [
                "Correctly substitutes x-values into quadratic",
                "Follows order of operations (BEDMAS/PEMDAS)",
                "Handles negative values and zero correctly",
                "Can evaluate for fractional and decimal inputs"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on order of operations"],
              qualitative: [
                "Understands substitution but makes arithmetic errors",
                "Needs prompting for order of operations",
                "Struggles with negative number arithmetic"
              ]
            },
            struggling: {
              quantitative: ["Multiple evaluation errors", "Incorrect order of operations"],
              qualitative: [
                "Does not understand substitution process",
                "Consistent errors with negative numbers",
                "Cannot handle powers correctly (x² vs 2x)"
              ]
            }
          },
          learningObjectives: [
            "Substitute given x-values into quadratic functions",
            "Apply order of operations: calculate x² first, then multiply by a and b",
            "Evaluate quadratics for x = 0, positive, negative, and fractional values",
            "Interpret results in context (e.g., height at time t)",
            "Use function notation: understand f(3) means 'find y when x = 3'"
          ],
          relevantFormulas: [
            "To find y when x = k: substitute k for every x",
            "Order: y = a(k)² + b(k) + c",
            "Example: If f(x) = 2x² + 3x - 5, then f(2) = 2(2)² + 3(2) - 5 = 8 + 6 - 5 = 9",
            "f(0) always equals c (the constant term)",
            "f(-x) substitutes -x for x: f(-2) = 2(-2)² + 3(-2) - 5 = 8 - 6 - 5 = -3"
          ],
          availableTools: []
        },
        {
          id: "solving-for-x",
          title: "Solving for x (Finding x-values)",
          difficulty: "intermediate",
          prerequisites: ["evaluating-quadratics"],
          masterySignals: "Student solves quadratic equations for x using factoring or other methods in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ quadratic equations solved correctly",
                "Identifies 0, 1, or 2 solutions appropriately"
              ],
              qualitative: [
                "Rearranges equation to standard form (= 0)",
                "Factors quadratics correctly",
                "Applies zero product property: if ab = 0, then a = 0 or b = 0",
                "Recognizes perfect squares: (x - a)² = 0 has one solution",
                "Understands why quadratics may have 0, 1, or 2 solutions"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on factoring"],
              qualitative: [
                "Understands process but struggles with factoring",
                "Needs prompting to rearrange to = 0",
                "Can solve once factored form is identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot factor", "Multiple solving errors"],
              qualitative: [
                "Does not understand zero product property",
                "Cannot rearrange equations",
                "Confuses solving with evaluating"
              ]
            }
          },
          learningObjectives: [
            "Set quadratic equal to zero to solve: ax² + bx + c = 0",
            "Factor quadratics into (x - p)(x - q) = 0 form",
            "Apply zero product property to find solutions",
            "Recognize perfect squares (x - a)² = 0 have one solution",
            "Understand quadratics may have 0, 1, or 2 real solutions"
          ],
          sampleProblems: [
            {
              problem: "Find x when y = 15 for y = x² - 6x + 8"
            },
            {
              problem: "Solve x² + 5x = 0"
            },
            {
              problem: "Find x when f(x) = -1 for f(x) = x² - 6x + 9"
            }
          ],
          relevantFormulas: [
            "To solve: set equation equal to 0",
            "Factor: ax² + bx + c = 0 → (px + q)(rx + s) = 0",
            "Zero product property: if (x - a)(x - b) = 0, then x = a or x = b",
            "Perfect square: (x - a)² = 0 → x = a (one solution)",
            "Example: x² - 5x + 6 = 0 → (x - 2)(x - 3) = 0 → x = 2 or x = 3"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Quadratic Definition (foundational) - Understand y = ax² + bx + c",
      "2. Evaluating Quadratics (foundational→intermediate) - Find y given x",
      "3. Solving for x (intermediate) - Find x given y using factoring"
    ],

    keyFormulas: `• Standard form: y = ax² + bx + c, a ≠ 0
                  • Coefficients: a (leading), b (linear), c (constant)
                  • Function notation: f(x) = ax² + bx + c
                  • Evaluation: substitute x-value into function
                  • Solving: set = 0, factor, apply zero product property
                  • Quadratics may have 0, 1, or 2 real solutions`
  },

  's4-math-quad-graphs-transformations': {
    displayName: 'Graphs and Transformations',
    topicName: 'parabolas, graphing, and transformations of quadratic functions',

    progressionStructure: {
      sections: [
        {
          id: "parabola-basics",
          title: "Parabolas and Graphing",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["evaluating-quadratics"],
          masterySignals: "Student creates table of values and identifies parabola features in 2-3 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 tables created correctly",
                "Parabola features identified (vertex, symmetry)"
              ],
              qualitative: [
                "Understands all quadratics graph as parabolas",
                "Recognizes parabola is U-shaped and symmetric",
                "Identifies vertex as turning point from table",
                "Can determine if parabola opens up or down from graph",
                "Creates systematic table of values (e.g., x = -3 to 3)"
              ]
            },
            developing: {
              quantitative: ["1 table with minor errors"],
              qualitative: [
                "Understands concept but makes calculation errors in table",
                "Needs prompting for symmetry",
                "Can identify vertex once table is complete"
              ]
            },
            struggling: {
              quantitative: ["Multiple errors in table", "Cannot identify features"],
              qualitative: [
                "Does not understand table of values method",
                "Cannot recognize parabola shape",
                "Confuses vertex with other points"
              ]
            }
          },
          learningObjectives: [
            "Understand that all quadratic functions graph as parabolas",
            "Create table of values for y = ax² + bx + c",
            "Identify parabola features: U-shape, symmetry, vertex",
            "Plot points from table to sketch parabola",
            "Recognize vertex as the turning point (minimum or maximum)"
          ],
          relevantFormulas: [
            "Simplest parabola: y = x² (vertex at origin)",
            "Table method: choose x-values, calculate corresponding y-values",
            "Parabola properties: symmetric, continuous, smooth curve",
            "Vertex: turning point (lowest or highest point)",
            "Example table for y = x²: x = -2,-1,0,1,2 gives y = 4,1,0,1,4"
          ],
          availableTools: ["parabola"]
        },
        {
          id: "transformations-vertical",
          title: "Effect of Coefficient a",
          difficulty: "intermediate",
          prerequisites: ["parabola-basics"],
          masterySignals: "Student predicts and explains effect of a on parabola shape and direction in 3+ cases",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct predictions about a's effect",
                "Consistently determines opening direction and width"
              ],
              qualitative: [
                "If a > 0, parabola opens upward ∪",
                "If a < 0, parabola opens downward ∩",
                "If |a| > 1, parabola is thinner than y = x²",
                "If |a| < 1, parabola is wider than y = x²",
                "Can compare multiple parabolas (e.g., y = 2x² vs y = 0.5x²)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on |a|"],
              qualitative: [
                "Understands opening direction but uncertain about width",
                "Needs prompting for |a| > 1 vs |a| < 1",
                "Can determine once shown examples"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect predictions"],
              qualitative: [
                "Confuses a > 0 vs a < 0",
                "Does not understand effect of |a| on width",
                "Cannot compare parabolas"
              ]
            }
          },
          learningObjectives: [
            "Understand how coefficient a affects parabola opening direction",
            "Recognize a > 0 means upward opening, a < 0 means downward",
            "Determine width: |a| > 1 is thinner, |a| < 1 is wider than y = x²",
            "Compare multiple parabolas based on a values",
            "Predict parabola shape before graphing"
          ],
          relevantFormulas: [
            "For y = ax²:",
            "• a > 0: opens upward ∪ (U-shape)",
            "• a < 0: opens downward ∩ (inverted U)",
            "• |a| > 1: thinner/narrower than y = x²",
            "• |a| < 1: wider than y = x²",
            "• a = 1: same as y = x²",
            "Examples: y = 2x² (thin, up), y = -0.5x² (wide, down)"
          ],
          availableTools: ["parabola"]
        },
        {
          id: "transformations-translations",
          title: "Horizontal and Vertical Translations",
          difficulty: "intermediate",
          prerequisites: ["transformations-vertical"],
          masterySignals: "Student identifies vertex from y = a(x - h)² + k form and describes translations in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ vertex identifications correct from vertex form",
                "Correctly describes all translations"
              ],
              qualitative: [
                "Recognizes vertex form: y = a(x - h)² + k",
                "Identifies vertex as (h, k) directly from equation",
                "Understands h is horizontal shift (opposite sign: x - h means right h)",
                "Understands k is vertical shift (up if +k, down if -k)",
                "Can describe transformations: 'y = x² translated 3 left, 2 up'"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on sign of h"],
              qualitative: [
                "Understands vertex form but confuses sign of h",
                "Needs prompting: x - 3 means shift right, not left",
                "Can identify vertex once form is clarified"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify vertex", "Wrong translations"],
              qualitative: [
                "Does not understand vertex form",
                "Confuses h and k",
                "Gets translation directions backward"
              ]
            }
          },
          learningObjectives: [
            "Recognize vertex form: y = a(x - h)² + k",
            "Identify vertex coordinates (h, k) from equation",
            "Understand h: horizontal shift (x - h means right h units)",
            "Understand k: vertical shift (up k units if +k)",
            "Describe complete transformation from y = ax²",
            "Beware: (x - h) has opposite sign to shift direction"
          ],
          sampleProblems: [
            {
              problem: "Identify vertex and describe transformation: y = (x - 3)² + 2"
            },
            {
              problem: "Write equation with vertex (-2, 5) and a = 1"
            }
          ],
          relevantFormulas: [
            "Vertex form: y = a(x - h)² + k",
            "Vertex: (h, k)",
            "h: horizontal shift (opposite sign in equation)",
            "  • y = (x - 3)² → shifted right 3",
            "  • y = (x + 2)² → shifted left 2",
            "k: vertical shift (same sign)",
            "  • y = x² + 4 → shifted up 4",
            "  • y = x² - 1 → shifted down 1",
            "Combined: y = 2(x + 1)² - 3 has vertex (-1, -3)"
          ],
          availableTools: ["parabola"]
        },
        {
          id: "completing-square",
          title: "Completing the Square",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["transformations-translations"],
          masterySignals: "Student converts standard form to vertex form using completing the square in 2-3 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 conversions completed correctly",
                "Vertex identified from completed square form"
              ],
              qualitative: [
                "Converts y = ax² + bx + c to y = a(x - h)² + k",
                "Understands process: (1) group x terms, (2) complete square, (3) simplify",
                "For y = x² + bx: adds and subtracts (b/2)²",
                "Recognizes completed form reveals vertex",
                "Can factor out leading coefficient when a ≠ 1"
              ]
            },
            developing: {
              quantitative: ["1 conversion with hints on (b/2)²"],
              qualitative: [
                "Understands concept but makes algebraic errors",
                "Needs prompting for (b/2)² formula",
                "Can complete once steps are outlined"
              ]
            },
            struggling: {
              quantitative: ["Cannot complete the square", "Multiple algebra errors"],
              qualitative: [
                "Does not understand completing square process",
                "Cannot find (b/2)²",
                "Makes errors with signs or factoring"
              ]
            }
          },
          learningObjectives: [
            "Convert standard form y = ax² + bx + c to vertex form",
            "Apply completing the square: add and subtract (b/2)²",
            "Handle leading coefficient a: factor out before completing square",
            "Identify vertex (h, k) from completed form",
            "Use vertex form for graphing and analysis"
          ],
          sampleProblems: [
            {
              problem: "Convert to vertex form: y = x² + 6x + 5"
            },
            {
              problem: "Complete the square: y = 2x² - 8x + 3"
            }
          ],
          relevantFormulas: [
            "Standard → Vertex: y = ax² + bx + c → y = a(x - h)² + k",
            "Completing square for y = x² + bx:",
            "  • Add and subtract (b/2)²",
            "  • y = x² + bx + (b/2)² - (b/2)² + c",
            "  • y = (x + b/2)² + [c - (b/2)²]",
            "Example: y = x² + 4x + 1",
            "  → y = x² + 4x + 4 - 4 + 1",
            "  → y = (x + 2)² - 3",
            "Vertex: (-2, -3)"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Parabola Basics (foundational→intermediate) - Graph from tables, identify features",
      "2. Effect of a (intermediate) - Understand opening direction and width",
      "3. Translations (intermediate) - Identify vertex from y = a(x-h)² + k",
      "4. Completing Square (intermediate→advanced) - Convert forms"
    ],

    keyFormulas: `• All quadratics graph as parabolas (U-shaped curves)
                  • Parabola properties: symmetric, continuous, has vertex
                  • Effect of a: direction (a>0 up, a<0 down), width (|a|>1 thin, |a|<1 wide)
                  • Vertex form: y = a(x - h)² + k, vertex at (h, k)
                  • h: horizontal shift (opposite sign), k: vertical shift (same sign)
                  • Completing square: convert standard to vertex form
                  • For y = x² + bx: add/subtract (b/2)²`
  },

  's4-math-quad-key-features': {
    displayName: 'Key Features of Parabolas',
    topicName: 'intercepts, axis of symmetry, and vertex of quadratic functions',

    progressionStructure: {
      sections: [
        {
          id: "intercepts-axes",
          title: "x-intercepts and y-intercepts",
          difficulty: "intermediate",
          prerequisites: ["solving-for-x", "parabola-basics"],
          masterySignals: "Student finds both x and y intercepts correctly in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ problems with all intercepts found correctly",
                "Correctly identifies 0, 1, or 2 x-intercepts"
              ],
              qualitative: [
                "y-intercept: let x = 0, get y = c",
                "x-intercepts: let y = 0, solve ax² + bx + c = 0",
                "Factors or uses quadratic formula to find x-intercepts",
                "Recognizes parabola may have 0, 1, or 2 x-intercepts",
                "Interprets graphically: intercepts are where parabola crosses axes"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on factoring"],
              qualitative: [
                "Finds y-intercept correctly but struggles with x-intercepts",
                "Needs prompting for solving method",
                "Can find intercepts once equation is set up"
              ]
            },
            struggling: {
              quantitative: ["Cannot find x-intercepts", "Confuses x and y intercepts"],
              qualitative: [
                "Does not understand intercept concept",
                "Cannot solve quadratic equations",
                "Confuses which variable to set to zero"
              ]
            }
          },
          learningObjectives: [
            "Find y-intercept by setting x = 0 (always get y = c)",
            "Find x-intercepts by setting y = 0 and solving",
            "Understand parabola may have 0, 1, or 2 x-intercepts",
            "Factor quadratics to find x-intercepts",
            "Interpret intercepts: points where parabola crosses axes",
            "If one x-intercept: parabola touches (doesn't cross) x-axis"
          ],
          relevantFormulas: [
            "y-intercept: set x = 0 in y = ax² + bx + c → y = c",
            "x-intercepts: set y = 0, solve ax² + bx + c = 0",
            "Factored form shows x-intercepts: y = a(x - α)(x - β) has x-intercepts α, β",
            "One x-intercept: perfect square (x - a)² touches at x = a",
            "No x-intercepts: parabola doesn't cross x-axis",
            "Example: y = x² - 6x + 9 = (x - 3)² has one x-intercept at x = 3"
          ],
          availableTools: ["parabola"]
        },
        {
          id: "axis-symmetry",
          title: "Axis of Symmetry",
          difficulty: "intermediate",
          prerequisites: ["intercepts-axes"],
          masterySignals: "Student finds axis of symmetry using x = -b/(2a) formula in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ axis equations found correctly",
                "Consistent accurate application of formula"
              ],
              qualitative: [
                "Uses formula x = -b/(2a) correctly",
                "Identifies coefficients a and b from standard form",
                "Understands axis passes through vertex",
                "Recognizes axis is vertical line (x = constant)",
                "If two x-intercepts: axis is midway between them"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on identifying a, b"],
              qualitative: [
                "Knows formula but makes sign errors",
                "Needs prompting for coefficient identification",
                "Can calculate once a and b are identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot apply formula", "Multiple errors"],
              qualitative: [
                "Does not understand axis of symmetry concept",
                "Cannot identify coefficients",
                "Confuses axis with vertex"
              ]
            }
          },
          learningObjectives: [
            "Understand axis of symmetry is vertical line through vertex",
            "Apply formula: x = -b/(2a)",
            "Identify a and b from y = ax² + bx + c",
            "Recognize axis equation form: x = constant",
            "Use axis to check graph symmetry",
            "Connection: if two x-intercepts α and β, axis is x = (α + β)/2"
          ],
          relevantFormulas: [
            "Axis of symmetry: x = -b/(2a)",
            "For y = ax² + bx + c: identify a (coefficient of x²), b (coefficient of x)",
            "Example: y = 2x² + 8x + 3",
            "  a = 2, b = 8",
            "  x = -8/(2×2) = -8/4 = -2",
            "  Axis: x = -2",
            "Alternative: midpoint of x-intercepts"
          ],
          availableTools: []
        },
        {
          id: "vertex-analysis",
          title: "The Vertex (Turning Point)",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["axis-symmetry"],
          masterySignals: "Student finds vertex coordinates and determines max/min in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ vertices found correctly",
                "Correctly identifies maximum vs minimum"
              ],
              qualitative: [
                "Finds x-coordinate using x = -b/(2a)",
                "Substitutes x-value back to find y-coordinate",
                "States vertex as ordered pair (h, k)",
                "Determines if vertex is maximum (a < 0) or minimum (a > 0)",
                "Interprets vertex in context (e.g., max height, min cost)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on substitution"],
              qualitative: [
                "Finds x-coordinate but forgets to find y",
                "Needs prompting for substitution step",
                "Can complete once reminded of process"
              ]
            },
            struggling: {
              quantitative: ["Cannot find vertex", "Confuses max and min"],
              qualitative: [
                "Does not understand vertex finding process",
                "Cannot determine if maximum or minimum",
                "Makes errors in substitution"
              ]
            }
          },
          learningObjectives: [
            "Understand vertex is the turning point of parabola",
            "Find vertex x-coordinate: x = -b/(2a)",
            "Find vertex y-coordinate: substitute x into function",
            "Determine if vertex is maximum (a < 0) or minimum (a > 0)",
            "Interpret vertex in real-world contexts",
            "Alternative: read vertex from completed square form y = a(x - h)² + k"
          ],
          sampleProblems: [
            {
              problem: "Find vertex of y = -x² + 4x + 3 and state if max or min"
            },
            {
              problem: "A ball's height is H(t) = -5t² + 20t + 2. Find maximum height."
            }
          ],
          relevantFormulas: [
            "Vertex coordinates: (x, y) where x = -b/(2a)",
            "Step 1: x = -b/(2a)",
            "Step 2: y = ax² + bx + c (substitute x from step 1)",
            "a > 0: vertex is minimum (parabola opens up ∪)",
            "a < 0: vertex is maximum (parabola opens down ∩)",
            "Example: y = 2x² - 8x + 3",
            "  x = -(-8)/(2×2) = 8/4 = 2",
            "  y = 2(2)² - 8(2) + 3 = 8 - 16 + 3 = -5",
            "  Vertex: (2, -5) - minimum since a = 2 > 0"
          ],
          availableTools: ["parabola"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Intercepts (intermediate) - Find x and y intercepts",
      "2. Axis of Symmetry (intermediate) - Use x = -b/(2a) formula",
      "3. Vertex Analysis (intermediate→advanced) - Find vertex, determine max/min"
    ],

    keyFormulas: `• y-intercept: y = c (let x = 0)
                  • x-intercepts: solve ax² + bx + c = 0 (may have 0, 1, or 2)
                  • Axis of symmetry: x = -b/(2a)
                  • Vertex x-coordinate: -b/(2a)
                  • Vertex y-coordinate: substitute x back into function
                  • Maximum: a < 0 (opens down ∩)
                  • Minimum: a > 0 (opens up ∪)
                  • Vertex from completing square: y = a(x-h)² + k has vertex (h,k)`
  },

  's4-math-quad-finding-functions': {
    displayName: 'Finding Quadratic Functions',
    topicName: 'determining quadratic equations from features and real-world problem solving',

    progressionStructure: {
      sections: [
        {
          id: "finding-from-features",
          title: "Finding Quadratic Equations",
          difficulty: "advanced",
          prerequisites: ["vertex-analysis"],
          masterySignals: "Student determines quadratic equation from given features in 2-3 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 equations found correctly from features",
                "Appropriate form chosen based on given information"
              ],
              qualitative: [
                "Uses vertex form f(x) = a(x - h)² + k when vertex is given",
                "Uses factored form f(x) = a(x - α)(x - β) when x-intercepts given",
                "Uses touch form f(x) = a(x - α)² when parabola touches at α",
                "Finds coefficient a using an additional point",
                "Can convert between forms if needed"
              ]
            },
            developing: {
              quantitative: ["1 equation with hints on which form to use"],
              qualitative: [
                "Understands forms but uncertain which to choose",
                "Needs prompting for finding a",
                "Can complete once form is identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot determine equation", "Wrong form used"],
              qualitative: [
                "Does not understand different quadratic forms",
                "Cannot use given information to build equation",
                "Makes errors finding coefficient a"
              ]
            }
          },
          learningObjectives: [
            "Choose appropriate form based on given information",
            "Vertex (h, k) given: use f(x) = a(x - h)² + k",
            "x-intercepts α, β given: use f(x) = a(x - α)(x - β)",
            "Touches x-axis at α: use f(x) = a(x - α)²",
            "Use additional point to solve for coefficient a",
            "Convert to standard form if required"
          ],
          sampleProblems: [
            {
              problem: "Find equation with vertex (3, -4) passing through (1, 0)"
            },
            {
              problem: "Find equation with x-intercepts -2 and 5, y-intercept 10"
            },
            {
              problem: "Parabola touches x-axis at 4, passes through (2, 8)"
            }
          ],
          relevantFormulas: [
            "Vertex form: f(x) = a(x - h)² + k (vertex at (h, k))",
            "Factored/Intercept form: f(x) = a(x - α)(x - β) (x-intercepts α, β)",
            "Touch form: f(x) = a(x - α)² (touches x-axis at α)",
            "To find a: substitute a point (x₀, y₀) and solve",
            "Example: vertex (2, 3), point (0, 7)",
            "  f(x) = a(x - 2)² + 3",
            "  7 = a(0 - 2)² + 3",
            "  7 = 4a + 3",
            "  a = 1",
            "  f(x) = (x - 2)² + 3"
          ],
          availableTools: []
        },
        {
          id: "problem-solving",
          title: "Applications and Optimization",
          difficulty: "advanced",
          prerequisites: ["finding-from-features"],
          masterySignals: "Student solves optimization and real-world problems using quadratics in 2-3 scenarios",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 real-world problems solved correctly",
                "Maximum/minimum values found accurately"
              ],
              qualitative: [
                "Identifies variables and their meanings (with units)",
                "Recognizes optimization requires finding vertex",
                "Uses x = -b/(2a) to find optimal value",
                "Substitutes back to find maximum/minimum",
                "Interprets answer in context with correct units",
                "Handles projectile motion, profit, area problems"
              ]
            },
            developing: {
              quantitative: ["1 problem solved with hints on setup"],
              qualitative: [
                "Understands context but struggles with equation setup",
                "Needs prompting for which variable to optimize",
                "Can solve once vertex formula is identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot solve applications", "No context understanding"],
              qualitative: [
                "Cannot translate word problem to equation",
                "Does not recognize optimization uses vertex",
                "Makes errors interpreting answer"
              ]
            }
          },
          learningObjectives: [
            "Translate real-world situations into quadratic functions",
            "Identify what to maximize or minimize (profit, height, area, etc.)",
            "Use vertex to find optimal values",
            "Solve projectile motion problems (height vs time)",
            "Solve optimization problems (profit, area maximization)",
            "Interpret results in context with proper units",
            "Verify answer makes sense in real-world context"
          ],
          sampleProblems: [
            {
              problem: "Rocket height H(t) = 100t - 5t². Find max height and when it hits ground."
            },
            {
              problem: "Profit P(x) = -x² + 50x - 200. Find bikes to make for max profit."
            },
            {
              problem: "Rectangle: perimeter 40m. Find dimensions for max area."
            }
          ],
          relevantFormulas: [
            "Optimization strategy:",
            "  1. Identify function (e.g., H(t) = at² + bt + c)",
            "  2. Find x-coordinate of vertex: x = -b/(2a)",
            "  3. Substitute to find y-coordinate (max/min value)",
            "  4. Interpret in context",
            "Projectile motion: H(t) = at² + bt + c (a < 0)",
            "  Max height at t = -b/(2a)",
            "  Hits ground when H(t) = 0",
            "Profit/Revenue: often inverted parabola (a < 0)",
            "Area optimization: express area in terms of one variable"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Finding from Features (advanced) - Determine equations from vertex, intercepts, points",
      "2. Problem Solving (advanced) - Real-world applications and optimization"
    ],

    keyFormulas: `• Vertex form: f(x) = a(x - h)² + k (use when vertex given)
                  • Intercept form: f(x) = a(x - α)(x - β) (use when x-intercepts given)
                  • Touch form: f(x) = a(x - α)² (parabola touches x-axis at α)
                  • Always use additional point to find a
                  • Optimization: find vertex using x = -b/(2a)
                  • Projectile motion: H(t) = at² + bt + c, max at t = -b/(2a)
                  • Interpret answers in context with units`
  },

  's4-math-quad-inequalities': {
    displayName: 'Quadratic Inequalities',
    topicName: 'solving quadratic inequalities using sign diagrams and graphs',

    progressionStructure: {
      sections: [
        {
          id: "solving-inequalities",
          title: "Quadratic Inequalities (Sign Diagrams)",
          difficulty: "advanced",
          prerequisites: ["intercepts-axes"],
          masterySignals: "Student solves quadratic inequalities using sign diagrams in 2-3 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 inequalities solved correctly",
                "Sign diagrams drawn accurately"
              ],
              qualitative: [
                "Rearranges inequality to have 0 on RHS",
                "Factors LHS completely",
                "Draws sign diagram with critical values",
                "Tests signs in each region",
                "Determines correct solution interval from diagram",
                "Understands strict (< or >) vs non-strict (≤ or ≥)"
              ]
            },
            developing: {
              quantitative: ["1 inequality solved with hints on sign testing"],
              qualitative: [
                "Understands process but makes errors in sign diagram",
                "Needs prompting for testing signs",
                "Can solve once diagram is correct"
              ]
            },
            struggling: {
              quantitative: ["Cannot solve inequalities", "Wrong sign diagrams"],
              qualitative: [
                "Does not understand inequality solving process",
                "Cannot draw or interpret sign diagrams",
                "Confuses < with > or ≤ with ≥"
              ]
            }
          },
          learningObjectives: [
            "Rearrange inequality: move all terms to LHS to get = 0 on RHS",
            "Factor LHS into (x - a)(x - b) form",
            "Draw sign diagram showing where expression is +/- ",
            "Test each region by choosing test point",
            "Read solution from diagram based on inequality sign",
            "Handle strict inequalities (< , >) vs non-strict (≤ , ≥)"
          ],
          sampleProblems: [
            {
              problem: "Solve x² + 5x < 14 using sign diagram"
            },
            {
              problem: "Solve (x - 2)(x + 3) ≥ 0"
            }
          ],
          relevantFormulas: [
            "Strategy for ax² + bx + c > 0 (or <, ≥, ≤):",
            "  1. Rearrange to = 0",
            "  2. Factor LHS",
            "  3. Find critical values (zeros)",
            "  4. Draw sign diagram",
            "  5. Test signs in each region",
            "  6. Read solution",
            "Example: x² - x - 6 < 0",
            "  (x - 3)(x + 2) < 0",
            "  Critical values: -2, 3",
            "  Sign: + | - | +",
            "  Solution: -2 < x < 3 (where negative)"
          ],
          availableTools: ["numberLine"]
        },
        {
          id: "graphical-interpretation",
          title: "Graphical Inequalities",
          difficulty: "advanced",
          prerequisites: ["solving-inequalities", "parabola-basics"],
          masterySignals: "Student solves inequalities graphically and interprets solutions in 2-3 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 graphical solutions correct",
                "Correctly identifies regions above/below x-axis"
              ],
              qualitative: [
                "Understands ax² + bx + c > 0 means parabola above x-axis",
                "Understands ax² + bx + c < 0 means parabola below x-axis",
                "Finds x-intercepts to determine critical values",
                "Uses opening direction (a > 0 or a < 0) to determine sign pattern",
                "Handles special cases: no intercepts, one intercept",
                "Connects algebraic and graphical solutions"
              ]
            },
            developing: {
              quantitative: ["1 graphical solution with hints"],
              qualitative: [
                "Understands concept but uncertain about above/below",
                "Needs prompting for opening direction",
                "Can solve once graph interpretation is clarified"
              ]
            },
            struggling: {
              quantitative: ["Cannot interpret graphs", "Wrong regions"],
              qualitative: [
                "Does not connect inequality to graph",
                "Confuses above and below x-axis",
                "Cannot handle special cases"
              ]
            }
          },
          learningObjectives: [
            "Interpret > 0 as parabola above x-axis",
            "Interpret < 0 as parabola below x-axis",
            "Use parabola opening direction to predict sign pattern",
            "Handle upward opening (a > 0): positive outside roots, negative between",
            "Handle downward opening (a < 0): negative outside roots, positive between",
            "Special cases: (x - a)² ≥ 0 always true, (x - a)² < 0 never true",
            "Connect graphical and algebraic methods"
          ],
          sampleProblems: [
            {
              problem: "Solve x² - 4x - 5 > 0 graphically"
            },
            {
              problem: "Why does x² + 2x + 5 > 0 for all real x?"
            }
          ],
          relevantFormulas: [
            "Graphical interpretation:",
            "• ax² + bx + c > 0: parabola above x-axis",
            "• ax² + bx + c < 0: parabola below x-axis",
            "• ax² + bx + c ≥ 0: above or touching x-axis",
            "• ax² + bx + c ≤ 0: below or touching x-axis",
            "Opening up (a > 0) with roots α, β (α < β):",
            "  • Positive: x < α or x > β",
            "  • Negative: α < x < β",
            "Opening down (a < 0): opposite pattern",
            "No real roots: always same sign as a"
          ],
          availableTools: ["parabola", "numberLine"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Solving Inequalities (advanced) - Use sign diagrams and algebraic methods",
      "2. Graphical Interpretation (advanced) - Connect inequalities to parabola graphs"
    ],

    keyFormulas: `• Strategy: rearrange to = 0, factor, sign diagram
                  • Sign diagram shows where expression is +/-
                  • Test each region with test point
                  • > 0: find where positive, < 0: find where negative
                  • Graphically: > 0 is above x-axis, < 0 is below
                  • Opening up (a>0): positive outside roots
                  • Opening down (a<0): negative outside roots
                  • Perfect square: (x-a)² ≥ 0 always true, (x-a)² < 0 never true
                  • No real roots: always same sign as a`
  }
};

// Export for backward compatibility
export const S4_MATH_QUADRATIC_FUNCTIONS: Record<QuadraticFunctionsTopicId, any> = S4_MATH_QUADRATIC_FUNCTIONS_SUBTOPICS;

// Export config that can be used by PromptLibrary
export const S4_MATH_QUADRATIC_FUNCTIONS_CONFIG = {
  TUTOR_ROLE: QUADRATIC_FUNCTIONS_TUTOR_CUSTOMIZATION.teachingPhilosophy,
  QUESTION_AGENT_ROLE: null, // Uses base from prompt-library
  SOLUTION_AGENT_ROLE: null, // Uses base from prompt-library
  MATH_TOOLS_AVAILABLE: QUADRATIC_FUNCTIONS_MATH_TOOLS,
  // FORMATTING_RULES: imported from prompt-library
  // INTERACTION_PROTOCOL: imported from prompt-library
};
