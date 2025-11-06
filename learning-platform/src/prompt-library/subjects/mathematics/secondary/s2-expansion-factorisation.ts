/**
 * S2 Mathematics - Expansion and Factorisation of Algebraic Expressions
 *
 * Complete topic configuration for algebraic expansion and factorisation.
 * Covers: quadratic expressions, single/double bracket expansion, factorisation techniques.
 */

// Type exports - 12 subtopic IDs (each subtopic contains multiple sections internally)
export type ExpansionFactorisationTopicId =
  | 's2-math-expansion-factorisation-quadratic-intro'
  | 's2-math-expansion-factorisation-single-bracket-basic'
  | 's2-math-expansion-factorisation-double-bracket-intro'
  | 's2-math-expansion-factorisation-expand-linear-to-quadratic'
  | 's2-math-expansion-factorisation-common-factor-basic'
  | 's2-math-expansion-factorisation-factorisation-conceptual'
  | 's2-math-expansion-factorisation-negative-b-positive-c'
  | 's2-math-expansion-factorisation-negative-c-factorisation'
  | 's2-math-expansion-factorisation-leading-coefficient-concept'
  | 's2-math-expansion-factorisation-grouping-multiplication-frame'
  | 's2-math-expansion-factorisation-perfect-square-identities'
  | 's2-math-expansion-factorisation-difference-squares';

// Topic-specific tutor customization
export const EXPANSION_FACTORISATION_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Expansion and Factorisation of Algebraic Expressions.

Teaching Approach:
- Guide students to discover patterns in expansion and factorisation through questioning
- Help students understand factorisation as the reverse process of expansion
- Use visual tools (multiplication grids, area models) to build conceptual understanding
- Celebrate insights when students recognize factor patterns or expansion structures
- Adapt difficulty organically based on student mastery
- Emphasize verification: expand to check factorisation, factorise to check expansion

**Text-to-Speech Guidelines:**
- Say "x squared" instead of "x²" for clarity
- Say "2x plus 3, times x minus 5" instead of "(2x+3)(x-5)"
- Spell out operations: "multiply" not "×", "subtract" not "−"
- Avoid complex notation in speech - spell out algebraic expressions clearly
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools to help students visualize expansion and factorisation:
- multiplicationGrid: Shows area model for bracket expansion (CRITICAL for double brackets)
- factoringVisualizer: Helps identify factor pairs and verify factorisation
- distributiveVisualizer: Demonstrates distributive law a(b+c) = ab + ac
- algebraExpression: General expression manipulation and simplification

IMPORTANT: Use the technical name (e.g., "multiplicationGrid") in the toolName field, NOT the display name.`
};

// Available math tools for this topic
export const EXPANSION_FACTORISATION_MATH_TOOLS = [
  "multiplicationGrid",
  "factoringVisualizer",
  "distributiveVisualizer",
  "algebraExpression",
  "balanceScale",
  "numberLine"
];

// Global configuration
export const S2_EXPANSION_FACTORISATION_CONFIG = {
  tutor: EXPANSION_FACTORISATION_TUTOR_CUSTOMIZATION,
  mathTools: EXPANSION_FACTORISATION_MATH_TOOLS
};

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S2_MATH_EXPANSION_FACTORISATION_SUBTOPICS = {

  // ==========================================
  // SUBTOPIC 1: Foundation - Quadratic Expressions and Operations
  // ==========================================

  's2-math-expansion-factorisation-quadratic-intro': {
    displayName: 'Understanding Quadratic Expressions',
    topicName: 'quadratic expressions introduction',

    progressionStructure: {
      sections: [
        {
          id: "quadratic-definition",
          title: "Understanding Quadratic Expressions",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies quadratic expressions and names coefficients in 4/5 examples",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4/5 expressions correctly identified as quadratic or not",
                "All three coefficients (a, b, c) named correctly in 3+ expressions"
              ],
              qualitative: [
                "Defines quadratic expression as ax² + bx + c where a ≠ 0",
                "Identifies the x² term as defining characteristic",
                "Correctly names coefficients: a (x² coefficient), b (x coefficient), c (constant)",
                "Distinguishes quadratic from linear expressions (no x² term)",
                "Recognizes various forms: 3x² + 5x - 2, x² - 4, 2x² + 7"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct identifications with hints",
                "Can name coefficients with prompting"
              ],
              qualitative: [
                "Understands x² requirement but uncertain with unusual forms",
                "Confuses coefficient positions occasionally",
                "Needs prompting to identify missing terms (when b=0 or c=0)",
                "Can identify once form ax² + bx + c is clarified"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect identifications",
                "Cannot name coefficients consistently",
                "Requests solution after 1 hint"
              ],
              qualitative: [
                "Does not understand what makes expression quadratic",
                "Confuses quadratic with linear or cubic expressions",
                "Cannot identify x² term reliably",
                "Thinks any expression with variables is quadratic"
              ]
            }
          },
          learningObjectives: [
            "Define quadratic expression: ax² + bx + c where a ≠ 0",
            "Identify x² term as the defining characteristic",
            "Name coefficients correctly: a (of x²), b (of x), c (constant)",
            "Recognize quadratic expressions in various forms",
            "Distinguish quadratic from linear expressions"
          ],
          relevantFormulas: [
            "Standard form: ax² + bx + c",
            "a ≠ 0 (if a = 0, expression becomes linear)",
            "Examples: 2x² + 5x - 3, x² - 9, -4x² + x"
          ],
          availableTools: ["algebraExpression"]
        },

        {
          id: "add-subtract-quadratics",
          title: "Adding and Subtracting Quadratic Expressions",
          difficulty: "foundational",
          prerequisites: ["quadratic-definition"],
          masterySignals: "Student simplifies 5 expressions by combining like terms, including those with negative coefficients",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "5+ correct simplifications without hints",
                "Consistent accuracy with negative coefficients and signs"
              ],
              qualitative: [
                "Correctly identifies like terms (x², x, constants)",
                "Combines coefficients of x² terms accurately",
                "Combines coefficients of x terms accurately",
                "Handles signs correctly with negative terms",
                "Writes final answer in standard form ax² + bx + c"
              ]
            },
            developing: {
              quantitative: [
                "3-4 correct with occasional sign errors",
                "Needs 1-2 hints on combining terms"
              ],
              qualitative: [
                "Understands like terms concept but makes calculation errors",
                "Struggles with negative coefficient arithmetic",
                "Can combine x² and x terms but forgets constant terms",
                "Needs prompting for sign rules with subtraction"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Cannot simplify without full guidance",
                "Makes consistent sign errors"
              ],
              qualitative: [
                "Does not understand like terms concept",
                "Adds unlike terms incorrectly (e.g., x² + x = x³)",
                "Cannot handle negative coefficients",
                "Confuses addition and multiplication of terms"
              ]
            }
          },
          learningObjectives: [
            "Identify like terms in algebraic expressions",
            "Combine x² terms by adding/subtracting coefficients",
            "Combine x terms by adding/subtracting coefficients",
            "Handle negative coefficients correctly",
            "Write simplified expressions in standard form"
          ],
          relevantFormulas: [
            "Like terms rule: ax² + bx² = (a+b)x²",
            "Same for x terms: ax + bx = (a+b)x",
            "Sign rules: +(−a) = −a, −(−a) = +a"
          ],
          sampleProblems: [
            {
              problem: "Simplify: (3x² + 5x - 2) + (2x² - 3x + 7)"
            },
            {
              problem: "Simplify: (4x² - 6x + 1) - (x² + 2x - 5)"
            }
          ],
          availableTools: ["algebraExpression", "balanceScale"]
        },

        {
          id: "multi-variable-simplification",
          title: "Simplifying Multi-Variable Expressions",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["add-subtract-quadratics"],
          masterySignals: "Student simplifies 4 complex expressions with 2-3 variables, handling squares and mixed terms",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct simplifications with multiple variables",
                "Handles x²y, xy², x²y² terms correctly"
              ],
              qualitative: [
                "Recognizes xy and yx as like terms (commutative)",
                "Distinguishes x²y from xy² (different terms)",
                "Combines like terms across multiple variables",
                "Handles higher powers correctly (x², y², x³)",
                "Maintains proper order and grouping in final answer"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with hints on identifying like terms",
                "Occasional confusion between x²y and xy²"
              ],
              qualitative: [
                "Understands commutativity but uncertain with complex terms",
                "Needs prompting to recognize xy = yx",
                "Can simplify once like terms are identified",
                "Makes occasional errors with higher powers"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect groupings",
                "Cannot distinguish like from unlike terms",
                "Requests solution early"
              ],
              qualitative: [
                "Does not recognize xy = yx",
                "Combines unlike terms incorrectly",
                "Confused by multiple variables",
                "Cannot handle squares and cubes properly"
              ]
            }
          },
          learningObjectives: [
            "Recognize commutative property: xy = yx",
            "Distinguish x²y from xy² (different terms)",
            "Identify like terms with multiple variables",
            "Combine coefficients of like terms",
            "Simplify expressions with x², y², xy, etc."
          ],
          relevantFormulas: [
            "Commutativity: xy = yx, x²y = yx²",
            "Unlike terms: x²y ≠ xy² (cannot combine)",
            "Like terms: 3xy + 5xy = 8xy"
          ],
          sampleProblems: [
            {
              problem: "Simplify: 3x²y + 2xy² - xy² + 5yx²"
            },
            {
              problem: "Simplify: 4ab + 2b² - 3ba + 5b² + ab"
            }
          ],
          availableTools: ["algebraExpression", "multiplicationGrid"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 foundational sections:",
      "1. Definition - Identify quadratic expressions and name coefficients",
      "2. Addition/Subtraction - Combine like terms with proper sign handling",
      "3. Multi-variable - Simplify expressions with multiple variables and powers"
    ],

    keyFormulas: `• Quadratic form: ax² + bx + c where a ≠ 0
• Like terms: Same variable(s) with same exponent(s)
• Combining rule: ax + bx = (a+b)x
• Commutativity: xy = yx
• Examples: x²y and yx² are like terms, but x²y and xy² are not`
  },

  // ==========================================
  // SUBTOPIC 2: Expansion Fundamentals
  // ==========================================

  's2-math-expansion-factorisation-single-bracket-basic': {
    displayName: 'Single Bracket Expansion',
    topicName: 'single bracket expansion',

    progressionStructure: {
      sections: [
        {
          id: "distributive-law",
          title: "Single Bracket Expansion - a(b+c)",
          difficulty: "foundational",
          prerequisites: ["add-subtract-quadratics"],
          masterySignals: "Student expands 6 single bracket expressions correctly, including negative multipliers",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "6+ correct expansions without hints",
                "All sign changes handled correctly with negative multipliers"
              ],
              qualitative: [
                "Applies distributive law: a(b+c) = ab + ac consistently",
                "Multiplies each term inside bracket by outside term",
                "Handles negative multipliers: -2(x+3) = -2x - 6",
                "Recognizes sign changes: -(x+y) = -x - y",
                "Verifies expansion by checking each term"
              ]
            },
            developing: {
              quantitative: [
                "4-5 correct with occasional sign errors",
                "Needs hints on negative multiplier sign changes"
              ],
              qualitative: [
                "Understands distributive law but makes sign errors",
                "Correctly expands with positive multipliers",
                "Struggles with -(x-y) = -x+y sign pattern",
                "Needs prompting for negative cases"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect expansions",
                "Consistent sign errors",
                "Requests solution after 1 hint"
              ],
              qualitative: [
                "Does not understand distributive law",
                "Only multiplies first term: 3(x+5) = 3x+5 (wrong)",
                "Cannot handle negative multipliers",
                "Confuses addition and multiplication"
              ]
            }
          },
          learningObjectives: [
            "Apply distributive law: a(b+c) = ab + ac",
            "Multiply each term inside bracket by outside term",
            "Handle positive multipliers correctly",
            "Handle negative multipliers with sign changes",
            "Understand -(x+y) = -x-y and -(x-y) = -x+y"
          ],
          relevantFormulas: [
            "Distributive law: a(b+c) = ab + ac",
            "Negative multiplier: -a(b+c) = -ab - ac",
            "Special case: -(x+y) = -x-y, -(x-y) = -x+y"
          ],
          sampleProblems: [
            {
              problem: "Expand: 3(2x + 5)"
            },
            {
              problem: "Expand: -2(4p - 3q)"
            },
            {
              problem: "Expand: -(5a - 2b + 1)"
            }
          ],
          availableTools: ["distributiveVisualizer", "multiplicationGrid"]
        },

        {
          id: "single-bracket-simplify",
          title: "Expanding and Simplifying Multiple Brackets",
          difficulty: "intermediate",
          prerequisites: ["distributive-law"],
          masterySignals: "Student expands multiple brackets then combines like terms in 5 expressions",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "5+ correct expansions with full simplification",
                "All like terms combined properly"
              ],
              qualitative: [
                "Expands all brackets using distributive law",
                "Identifies like terms after expansion",
                "Combines like terms correctly",
                "Handles mixed positive and negative terms",
                "Writes final answer in standard simplified form"
              ]
            },
            developing: {
              quantitative: [
                "3-4 correct with hints on combining terms",
                "Expansion correct but simplification incomplete"
              ],
              qualitative: [
                "Can expand brackets but misses some like terms",
                "Needs prompting to combine all terms",
                "Makes occasional arithmetic errors in combining",
                "Can complete once like terms are identified"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in expansion or simplification",
                "Cannot combine terms without guidance",
                "Requests solution early"
              ],
              qualitative: [
                "Forgets to expand some brackets",
                "Cannot identify like terms after expansion",
                "Makes sign errors when combining",
                "Does not understand order of operations"
              ]
            }
          },
          learningObjectives: [
            "Expand multiple single brackets in one expression",
            "Identify like terms after expansion",
            "Combine like terms with correct signs",
            "Simplify complex expressions step by step",
            "Verify final answer is fully simplified"
          ],
          relevantFormulas: [
            "Process: Expand all brackets → Identify like terms → Combine",
            "Example: 2(x+3) - 5(x-1) = 2x+6 - 5x+5 = -3x+11"
          ],
          sampleProblems: [
            {
              problem: "Expand and simplify: 3(2x+1) + 2(x-4)"
            },
            {
              problem: "Expand and simplify: 2p(3p+q) - 6q(3p+2r)"
            }
          ],
          availableTools: ["distributiveVisualizer", "algebraExpression"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Distributive Law (foundational) - Expand single brackets with positive and negative multipliers",
      "2. Multiple Brackets (intermediate) - Expand several brackets then combine like terms"
    ],

    keyFormulas: `• Distributive law: a(b+c) = ab + ac
• Negative signs: -(x+y) = -x-y, -(x-y) = -x+y
• Process: Expand → Identify like terms → Combine
• Always multiply EACH term inside bracket by outside term`
  },

  's2-math-expansion-factorisation-double-bracket-intro': {
    displayName: 'Double Bracket Expansion',
    topicName: 'double bracket expansion',

    progressionStructure: {
      sections: [
        {
          id: "foil-method",
          title: "Double Bracket Expansion - (a+b)(c+d)",
          difficulty: "intermediate",
          prerequisites: ["distributive-law"],
          masterySignals: "Student expands 6 double bracket expressions using area model or FOIL, explaining each term",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "6+ correct expansions with all four terms",
                "Can explain where each of four terms comes from"
              ],
              qualitative: [
                "Applies (a+b)(c+d) = ac + ad + bc + bd systematically",
                "Uses area model or FOIL method correctly",
                "Generates all four terms (First, Outer, Inner, Last)",
                "Simplifies by combining like terms when present",
                "Verifies expansion has correct number of terms before simplifying"
              ]
            },
            developing: {
              quantitative: [
                "4-5 correct with occasional missing terms",
                "Needs hints to remember all four multiplications"
              ],
              qualitative: [
                "Understands concept but forgets one term (usually Inner or Outer)",
                "Can expand with area model guidance",
                "Needs prompting for systematic approach",
                "Can complete once four-term structure is reviewed"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect expansions",
                "Consistently missing terms",
                "Requests solution after 1 hint"
              ],
              qualitative: [
                "Only multiplies first terms: (x+2)(x+3) = x²+6 (missing middle)",
                "Cannot generate all four terms reliably",
                "Does not understand multiplication structure",
                "Confuses with single bracket expansion"
              ]
            }
          },
          learningObjectives: [
            "Apply (a+b)(c+d) = ac + ad + bc + bd",
            "Use FOIL method: First, Outer, Inner, Last",
            "Visualize with area model (rectangle divided into 4 regions)",
            "Generate all four terms systematically",
            "Combine like terms in expanded form"
          ],
          relevantFormulas: [
            "(a+b)(c+d) = ac + ad + bc + bd",
            "FOIL: First × First, Outer × Outer, Inner × Inner, Last × Last",
            "Area model: 2×2 grid shows four products"
          ],
          sampleProblems: [
            {
              problem: "Expand: (x+3)(x+5)"
            },
            {
              problem: "Expand: (2a+1)(3a+4)"
            },
            {
              problem: "Expand and simplify: (x+2)(x+7)"
            }
          ],
          availableTools: ["multiplicationGrid", "distributiveVisualizer"]
        },

        {
          id: "double-bracket-negatives",
          title: "Double Brackets with Negative Terms",
          difficulty: "intermediate",
          prerequisites: ["foil-method"],
          masterySignals: "Student expands 5 expressions with subtraction, all signs correct in final answer",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "5+ correct expansions with no sign errors",
                "Handles all combinations: (+,+), (+,-), (-,+), (-,-)"
              ],
              qualitative: [
                "Applies sign rules during multiplication correctly",
                "Recognizes (+)(+)=+, (+)(-)=-, (-)(+)=-, (-)(-) = +",
                "Expands (x-y)(a-b) = xa - xb - ya + yb accurately",
                "Combines like terms with correct signs",
                "Checks work by examining sign pattern"
              ]
            },
            developing: {
              quantitative: [
                "3-4 correct with occasional sign errors",
                "Needs hints on negative × negative = positive"
              ],
              qualitative: [
                "Understands expansion but makes sign mistakes",
                "Correctly handles one negative but struggles with two",
                "Needs prompting for sign rules",
                "Can correct errors when sign rules are reviewed"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple sign errors in every expansion",
                "Cannot handle negative terms reliably",
                "Requests solution early"
              ],
              qualitative: [
                "Does not know sign multiplication rules",
                "Treats all products as positive",
                "Makes random sign errors",
                "Confused by subtraction in brackets"
              ]
            }
          },
          learningObjectives: [
            "Apply sign rules: (+)(+)=+, (+)(-)=-, (-)(-)=+",
            "Expand expressions with one negative term",
            "Expand expressions with two or more negative terms",
            "Handle subtraction systematically: (a-b) = (a+(-b))",
            "Verify signs in final expanded form"
          ],
          relevantFormulas: [
            "Sign rules: (+)(+)=+, (+)(-)=-, (-)(+)=-, (-)(-) = +",
            "(x-y)(a-b) = xa - xb - ya + yb",
            "(a-b)(c-d) = ac - ad - bc + bd"
          ],
          sampleProblems: [
            {
              problem: "Expand: (x-3)(x+5)"
            },
            {
              problem: "Expand: (2p-q)(3p-4q)"
            },
            {
              problem: "Expand: (8p-3q)(2r-5s)"
            }
          ],
          availableTools: ["multiplicationGrid", "distributiveVisualizer"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. FOIL Method (intermediate) - Expand (a+b)(c+d) with all positive terms using area model",
      "2. Negative Terms (intermediate) - Handle subtraction and negative terms with correct signs"
    ],

    keyFormulas: `• Double bracket: (a+b)(c+d) = ac + ad + bc + bd
• FOIL: First, Outer, Inner, Last terms
• Sign rules: (+)(+)=+, (+)(-)=-, (-)(-)=+
• Area model: 2×2 grid with four regions
• Always generate FOUR terms before simplifying`
  }

,

  // ==========================================
  // SUBTOPIC 3: Quadratic Expansion Mastery
  // ==========================================

  's2-math-expansion-factorisation-expand-linear-to-quadratic': {
    displayName: 'Expanding to Quadratic Expressions',
    topicName: 'expanding linear to quadratic',

    progressionStructure: {
      sections: [
        {
          id: "linear-brackets-to-quadratic",
          title: "Expanding (px+q)(rx+s) to Quadratics",
          difficulty: "intermediate",
          prerequisites: ["double-bracket-negatives"],
          masterySignals: "Student expands 6 expressions to quadratic form, identifying x² coefficient pattern",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "6+ correct expansions to quadratic form",
                "All coefficients (of x², x, constant) correct"
              ],
              qualitative: [
                "Applies (px+q)(rx+s) = prx² + psx + qrx + qs",
                "Identifies x² coefficient comes from p × r",
                "Combines middle terms: psx + qrx = (ps+qr)x",
                "Identifies constant term from q × s",
                "Writes final answer in standard form ax² + bx + c"
              ]
            },
            developing: {
              quantitative: [
                "4-5 correct with hints on combining x terms",
                "Occasional errors in middle term coefficient"
              ],
              qualitative: [
                "Can generate four terms but struggles to simplify",
                "Needs prompting to combine like x terms",
                "Makes arithmetic errors in ps + qr calculation",
                "Can complete once middle term combining is reviewed"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple expansion errors",
                "Cannot identify coefficient patterns",
                "Requests solution early"
              ],
              qualitative: [
                "Does not recognize quadratic result",
                "Cannot identify where x² term comes from",
                "Forgets to combine middle terms",
                "Confused by coefficient multiplication"
              ]
            }
          },
          learningObjectives: [
            "Expand (px+q)(rx+s) to get prx² + (ps+qr)x + qs",
            "Identify x² coefficient: p × r",
            "Identify x coefficient: ps + qr (sum of outer and inner)",
            "Identify constant: q × s",
            "Recognize all (linear)×(linear) give quadratic"
          ],
          relevantFormulas: [
            "(px+q)(rx+s) = prx² + psx + qrx + qs",
            "Simplified: prx² + (ps+qr)x + qs",
            "Example: (2x+3)(x+5) = 2x² + 10x + 3x + 15 = 2x² + 13x + 15"
          ],
          sampleProblems: [
            {
              problem: "Expand: (x+4)(x+6)"
            },
            {
              problem: "Expand: (2x+1)(3x+2)"
            },
            {
              problem: "Expand and simplify: (3x-2)(2x+5)"
            }
          ],
          availableTools: ["multiplicationGrid", "factoringVisualizer"]
        },

        {
          id: "rectangular-array-patterns",
          title: "Recognizing Rectangular Array Patterns",
          difficulty: "intermediate",
          prerequisites: ["linear-brackets-to-quadratic"],
          masterySignals: "Student identifies all four regions in multiplication grid for 5 expansions",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "5+ grids correctly labeled with all regions",
                "Can explain which grid region gives which term"
              ],
              qualitative: [
                "Identifies top-left as x × x = x² term",
                "Identifies bottom-right as constant × constant term",
                "Identifies two middle regions as x-terms that combine",
                "Uses grid to systematically generate all four products",
                "Connects grid visual to algebraic expansion"
              ]
            },
            developing: {
              quantitative: [
                "3-4 grids correct with hints on region identification",
                "Can fill grid but uncertain about term origins"
              ],
              qualitative: [
                "Can create grid but needs prompting for interpretation",
                "Recognizes x² corner but uncertain about middle regions",
                "Can use grid once structure is explained",
                "Makes occasional errors in region labeling"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot create or interpret grid correctly",
                "Multiple region mislabeling",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand grid structure",
                "Cannot connect grid regions to expansion terms",
                "Confused by visual representation",
                "Cannot identify which products go in which cells"
              ]
            }
          },
          learningObjectives: [
            "Create 2×2 multiplication grid for (a+b)(c+d)",
            "Identify four distinct grid regions",
            "Recognize top-left: x² term, bottom-right: constant",
            "Understand middle regions: two x-terms to combine",
            "Use grid as verification tool for expansion"
          ],
          relevantFormulas: [
            "Grid structure: rows (first bracket), columns (second bracket)",
            "Four products: one x², two x-terms, one constant",
            "Visual: area model represents algebraic multiplication"
          ],
          sampleProblems: [
            {
              problem: "Draw multiplication grid for (x+5)(x+3) and identify all regions"
            },
            {
              problem: "Use grid to expand (2x+1)(x+4)"
            }
          ],
          availableTools: ["multiplicationGrid", "factoringVisualizer"]
        },

        {
          id: "expand-squares-cubes",
          title: "Expanding with Higher Powers",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["linear-brackets-to-quadratic"],
          masterySignals: "Student correctly expands 5 expressions involving x², y², xy with proper exponent rules",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "5+ correct expansions with squares/cubes",
                "All exponent arithmetic correct (a × a² = a³)"
              ],
              qualitative: [
                "Applies exponent rules: x × x² = x³, y × y³ = y⁴",
                "Handles mixed variables: ab(ac+b²) correctly",
                "Expands x(xy+y) = x²y + xy",
                "Simplifies expressions with multiple powers systematically",
                "Recognizes when terms cannot be combined (x³ and x²)"
              ]
            },
            developing: {
              quantitative: [
                "3-4 correct with hints on exponent arithmetic",
                "Occasional exponent addition errors"
              ],
              qualitative: [
                "Understands multiplication but makes exponent errors",
                "Confuses x·x² = x³ with x + x² (cannot combine)",
                "Needs prompting for power rules",
                "Can complete once exponent laws are reviewed"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple exponent errors",
                "Cannot handle higher powers",
                "Requests solution early"
              ],
              qualitative: [
                "Does not know exponent multiplication rules",
                "Adds exponents when should multiply: x²·x³ = x⁵ not x⁶",
                "Confused by multiple variables with powers",
                "Cannot simplify mixed power expressions"
              ]
            }
          },
          learningObjectives: [
            "Apply exponent rule: xᵃ × xᵇ = xᵃ⁺ᵇ",
            "Expand expressions with x², y², x³ terms",
            "Handle mixed variables: ab(ac+b²) = a²bc + ab³",
            "Simplify x(xy+y) - y(xy+x) type expressions",
            "Recognize like vs unlike terms with powers"
          ],
          relevantFormulas: [
            "Exponent rule: xᵃ × xᵇ = xᵃ⁺ᵇ",
            "Examples: x·x² = x³, y·y³ = y⁴",
            "Like terms: 3x²y and 5x²y can combine",
            "Unlike: x²y and xy² cannot combine"
          ],
          sampleProblems: [
            {
              problem: "Expand: ab(ac + b²)"
            },
            {
              problem: "Expand and simplify: x(xy+y) - y(xy+x)"
            }
          ],
          availableTools: ["algebraExpression", "multiplicationGrid"]
        },

        {
          id: "multi-bracket-expansion",
          title: "Complex Multi-Bracket Expansion",
          difficulty: "advanced",
          prerequisites: ["linear-brackets-to-quadratic", "single-bracket-simplify"],
          masterySignals: "Student expands 3 three-bracket or 4 two-bracket expressions correctly",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ complex multi-bracket expressions expanded fully",
                "All terms generated and combined correctly"
              ],
              qualitative: [
                "Uses strategic expansion order: (a+b)(c+d)(e+f) → expand pairs first",
                "Expands two brackets, then multiplies result by third",
                "Combines multiple expansion techniques",
                "Manages large expressions systematically",
                "Verifies all terms accounted for before final simplification"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on expansion strategy",
                "Can expand but makes errors in final combining"
              ],
              qualitative: [
                "Understands process but overwhelmed by complexity",
                "Needs prompting for strategic approach",
                "Makes arithmetic errors with many terms",
                "Can complete once strategy is clarified"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot complete multi-bracket expansion",
                "Multiple missing terms",
                "Requests solution early"
              ],
              qualitative: [
                "Does not know where to start with three brackets",
                "Attempts to expand all at once (unsuccessfully)",
                "Loses track of terms",
                "Cannot manage complexity"
              ]
            }
          },
          learningObjectives: [
            "Expand three-bracket expressions: (a+b)(c+d)(e+f)",
            "Use strategic order: expand two, then multiply by third",
            "Expand expressions with multiple two-bracket terms",
            "Manage complexity with systematic approach",
            "Verify term count before simplification"
          ],
          relevantFormulas: [
            "Strategy: (a+b)(c+d)(e+f) = [(a+b)(c+d)](e+f)",
            "Expand first pair → get result → multiply by remaining bracket"
          ],
          sampleProblems: [
            {
              problem: "Expand: (x+1)(x+2)(x+3)"
            },
            {
              problem: "Expand: 2(x+1)(x-2) + 3(x+4)(x-1)"
            }
          ],
          availableTools: ["algebraExpression", "distributiveVisualizer"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Linear to Quadratic (intermediate) - Expand (px+q)(rx+s) to quadratic form",
      "2. Array Patterns (intermediate) - Use rectangular grid to visualize expansion",
      "3. Higher Powers (intermediate→advanced) - Handle x², y², xy with exponent rules",
      "4. Multi-Bracket (advanced) - Expand three brackets or multiple expressions"
    ],

    keyFormulas: `• (px+q)(rx+s) = prx² + (ps+qr)x + qs
• Multiplication grid: 2×2 array shows four products
• Exponent rule: xᵃ × xᵇ = xᵃ⁺ᵇ
• Strategy for 3 brackets: expand two first, then multiply result
• Always generate all terms before combining`
  },

  // ==========================================
  // SUBTOPIC 4: Introduction to Factorisation
  // ==========================================

  's2-math-expansion-factorisation-common-factor-basic': {
    displayName: 'Factorising by Common Factors',
    topicName: 'common factor extraction',

    progressionStructure: {
      sections: [
        {
          id: "extracting-common-factors",
          title: "Factorising by Common Factor Extraction",
          difficulty: "intermediate",
          prerequisites: ["distributive-law"],
          masterySignals: "Student factorises 6 expressions completely, verifies by expansion",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "6+ expressions factorised completely",
                "All common factors extracted (HCF)",
                "Verification by expansion confirms correctness"
              ],
              qualitative: [
                "Identifies HCF of all terms (numerical and algebraic)",
                "Writes factorised form a(b+c) where ab + ac was original",
                "Recognizes factorisation as reverse of expansion",
                "Checks work: expands a(b+c) to verify equals original",
                "Understands 'completely factorised' means largest possible factor"
              ]
            },
            developing: {
              quantitative: [
                "4-5 correct with hints on finding HCF",
                "Partial factorisation (not extracting largest factor)"
              ],
              qualitative: [
                "Can find numerical HCF but misses algebraic factors",
                "Extracts some but not all common factors",
                "Needs prompting to check if further factorisation possible",
                "Can complete once HCF identification is reviewed"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect factorisations",
                "Cannot identify common factors",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand factorisation concept",
                "Cannot find HCF of terms",
                "Confuses factorisation with expansion",
                "Does not know how to verify work"
              ]
            }
          },
          learningObjectives: [
            "Understand factorisation as reverse of expansion",
            "Find HCF of all terms (numerical and algebraic)",
            "Write in form a(b+c) from ab + ac",
            "Extract completely (largest common factor)",
            "Verify by expanding factorised form"
          ],
          relevantFormulas: [
            "Reverse distributive: ab + ac = a(b+c)",
            "HCF: Highest Common Factor of all terms",
            "Verification: expand result should equal original"
          ],
          sampleProblems: [
            {
              problem: "Factorise: 6x + 9"
            },
            {
              problem: "Factorise completely: 12ab + 18a"
            },
            {
              problem: "Factorise: 5x² + 15x"
            }
          ],
          availableTools: ["distributiveVisualizer", "factoringVisualizer"]
        },

        {
          id: "negative-common-factors",
          title: "Factorising with Negative Common Factors",
          difficulty: "intermediate",
          prerequisites: ["extracting-common-factors"],
          masterySignals: "Student factorises 5 expressions with negative factors, all signs correct",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "5+ expressions factorised with negative factors",
                "All sign changes handled correctly"
              ],
              qualitative: [
                "Recognizes when to extract -1 as factor",
                "Applies sign changes inside brackets: -x-y = -(x+y)",
                "Factorises -15x-6 = -3(5x+2) correctly",
                "Chooses positive or negative factor strategically",
                "Verifies by expansion with correct signs"
              ]
            },
            developing: {
              quantitative: [
                "3-4 correct with occasional sign errors",
                "Needs hints on extracting negative factors"
              ],
              qualitative: [
                "Can extract positive factors but struggles with negative",
                "Forgets sign changes inside brackets",
                "Needs prompting for when to use negative factor",
                "Can complete once sign rules are reviewed"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple sign errors",
                "Cannot extract negative factors",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand extracting -1",
                "Makes random sign changes",
                "Cannot handle negative coefficients",
                "Confused by sign pattern in factorised form"
              ]
            }
          },
          learningObjectives: [
            "Extract -1 as common factor when appropriate",
            "Apply sign changes: -x-y = -(x+y), -x+y = -(x-y)",
            "Factorise expressions with all negative terms",
            "Choose positive or negative factor form",
            "Verify factorisation with correct sign handling"
          ],
          relevantFormulas: [
            "Extracting -1: -x-y = -(x+y)",
            "Extracting -1: -x+y = -(x-y) or -(x-y) = y-x",
            "Example: -15x-6 = -3(5x+2) or = 3(-5x-2)"
          ],
          sampleProblems: [
            {
              problem: "Factorise: -6x - 9"
            },
            {
              problem: "Factorise: -12a + 18"
            },
            {
              problem: "Factorise: -3x² - 6x"
            }
          ],
          availableTools: ["distributiveVisualizer", "balanceScale"]
        },

        {
          id: "factor-higher-powers",
          title: "Factorising with Squares and Cubes",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["extracting-common-factors"],
          masterySignals: "Student factorises 6 expressions with squares/cubes completely",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "6+ expressions with higher powers factorised completely",
                "Highest power of each variable extracted"
              ],
              qualitative: [
                "Identifies highest power common to all terms",
                "Extracts x² when terms have x² and x³",
                "Handles mixed variables: 6x²y + 9xy² = 3xy(2x+3y)",
                "Combines numerical HCF with algebraic HCF",
                "Verifies complete factorisation (no further extraction possible)"
              ]
            },
            developing: {
              quantitative: [
                "4-5 correct with hints on highest power",
                "Partial extraction (not all common factors)"
              ],
              qualitative: [
                "Can extract x but misses x²",
                "Needs prompting for highest power rule",
                "Makes errors with mixed variables",
                "Can complete once power extraction is reviewed"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect factorisations",
                "Cannot handle powers correctly",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand extracting powers",
                "Extracts wrong power of variables",
                "Confused by x² vs x³",
                "Cannot combine numerical and algebraic factors"
              ]
            }
          },
          learningObjectives: [
            "Extract highest common power of each variable",
            "Factorise expressions with x², x³, etc.",
            "Handle mixed variables (xy², x²y)",
            "Combine numerical HCF with algebraic HCF",
            "Verify complete factorisation"
          ],
          relevantFormulas: [
            "Extract highest power: 6x³ + 9x² = 3x²(2x+3)",
            "Mixed variables: 12x²y + 8xy² = 4xy(3x+2y)",
            "Combine: numerical HCF × algebraic HCF"
          ],
          sampleProblems: [
            {
              problem: "Factorise: 6x² + 15x"
            },
            {
              problem: "Factorise: 8a³b - 12a²b²"
            },
            {
              problem: "Factorise completely: -a³bc + a²b²"
            }
          ],
          availableTools: ["factoringVisualizer", "algebraExpression"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Common Factors (intermediate) - Extract HCF and write in a(b+c) form",
      "2. Negative Factors (intermediate) - Handle negative common factors with sign changes",
      "3. Higher Powers (intermediate→advanced) - Extract highest powers and mixed variables"
    ],

    keyFormulas: `• Factorisation: reverse of expansion (ab + ac = a(b+c))
• HCF: Highest Common Factor (numerical and algebraic)
• Negative extraction: -x-y = -(x+y)
• Highest power rule: extract largest power common to all terms
• Verification: always expand to check factorisation`
  }

,

  // ==========================================
  // SUBTOPIC 5: Factorising Quadratics (c>0, b>0)
  // ==========================================

  's2-math-expansion-factorisation-factorisation-conceptual': {
    displayName: 'Understanding Quadratic Factorisation',
    topicName: 'quadratic factorisation concepts',

    progressionStructure: {
      sections: [
        {
          id: "factorisation-concept",
          title: "Understanding the Factorisation Process",
          difficulty: "intermediate",
          prerequisites: ["linear-brackets-to-quadratic", "rectangular-array-patterns"],
          masterySignals: "Student explains factorisation process for 3 examples using visual model",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ explanations of factorisation process",
                "Can use multiplication grid to find factors"
              ],
              qualitative: [
                "Explains factorisation as reverse of expansion",
                "Finds factor pairs of constant term c",
                "Identifies pair where sum equals coefficient b",
                "Uses rectangular array to verify: (x+p)(x+q) = x² + (p+q)x + pq",
                "Connects visual model to algebraic process"
              ]
            },
            developing: {
              quantitative: [
                "2 explanations with hints on factor pairs",
                "Can use grid with guidance"
              ],
              qualitative: [
                "Understands reverse process but uncertain about method",
                "Needs prompting to find factor pairs",
                "Can identify correct pair once options are listed",
                "Can complete once process is clarified"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot explain process",
                "Multiple errors in understanding",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand factorisation as reverse of expansion",
                "Cannot find factor pairs of numbers",
                "Does not know to check sum of factors",
                "Confused by grid representation"
              ]
            }
          },
          learningObjectives: [
            "Understand factorisation as reverse of expansion",
            "Find all factor pairs of constant term c",
            "Identify pair where sum equals x-coefficient b",
            "Verify using grid: (x+p)(x+q) → x² + (p+q)x + pq",
            "Connect visual and algebraic representations"
          ],
          relevantFormulas: [
            "Target form: x² + bx + c = (x+p)(x+q)",
            "Conditions: p × q = c, p + q = b",
            "Example: x² + 5x + 6 → find factors of 6 where sum = 5"
          ],
          sampleProblems: [
            {
              problem: "Explain how to factorise x² + 7x + 12 using factor pairs"
            }
          ],
          availableTools: ["factoringVisualizer", "multiplicationGrid"]
        },

        {
          id: "simple-quadratics",
          title: "Factorising Simple Quadratics",
          difficulty: "intermediate",
          prerequisites: ["factorisation-concept"],
          masterySignals: "Student factorises 8 simple quadratics (c ≤ 20) with minimal trial",
          estimatedQuestions: "7-8 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "8+ correct factorisations",
                "Minimal trial needed to find factor pair"
              ],
              qualitative: [
                "Lists factor pairs of c systematically",
                "Tests sums to find pair equal to b",
                "Writes factorised form (x+p)(x+q) correctly",
                "Verifies by expanding back to original",
                "Completes most on first or second attempt"
              ]
            },
            developing: {
              quantitative: [
                "5-7 correct with multiple trials",
                "Needs hints on factor pair selection"
              ],
              qualitative: [
                "Can find factor pairs but tests randomly",
                "Needs prompting for systematic approach",
                "Makes occasional errors in sum calculation",
                "Can complete once factor pairs are listed"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect factorisations",
                "Cannot find correct factor pair",
                "Requests solution early"
              ],
              qualitative: [
                "Cannot list factor pairs reliably",
                "Tests factors without checking sum",
                "Writes wrong signs in brackets",
                "Does not verify work by expansion"
              ]
            }
          },
          learningObjectives: [
            "List all factor pairs of constant term c",
            "Test sums systematically to find correct pair",
            "Write factorised form (x+p)(x+q)",
            "Verify factorisation by expanding",
            "Build efficiency through practice"
          ],
          relevantFormulas: [
            "Process: x² + bx + c → find factors of c that sum to b",
            "Common pairs: 6=(1,6),(2,3); 12=(1,12),(2,6),(3,4)"
          ],
          sampleProblems: [
            {
              problem: "Factorise: x² + 5x + 6"
            },
            {
              problem: "Factorise: x² + 7x + 10"
            },
            {
              problem: "Factorise: x² + 9x + 20"
            }
          ],
          availableTools: ["multiplicationGrid", "factoringVisualizer"]
        },

        {
          id: "systematic-factorisation",
          title: "Systematic Factorisation with Reasoning",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["simple-quadratics"],
          masterySignals: "Student factorises 6 quadratics explaining reasoning for factor choice",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "6+ correct factorisations with reasoning",
                "Efficient elimination of impossible pairs"
              ],
              qualitative: [
                "Eliminates factor pairs based on sum analysis",
                "Reasons about which pairs to try first",
                "Explains why certain pairs won't work",
                "Uses efficient trial strategies (start with middle values)",
                "Demonstrates understanding beyond guessing"
              ]
            },
            developing: {
              quantitative: [
                "4-5 correct but limited reasoning",
                "Can eliminate some but not all wrong pairs"
              ],
              qualitative: [
                "Can reason once prompted",
                "Needs help identifying elimination criteria",
                "Makes progress but not always efficiently",
                "Can complete once strategy is reviewed"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect factorisations",
                "Cannot explain reasoning",
                "Requests solution early"
              ],
              qualitative: [
                "Uses pure guessing without reasoning",
                "Cannot eliminate impossible pairs",
                "Does not understand sum-product relationship",
                "Makes random attempts"
              ]
            }
          },
          learningObjectives: [
            "Eliminate impossible factor pairs before testing",
            "Use b-coefficient to narrow choices",
            "Reason about factor sums strategically",
            "Apply efficient trial approaches",
            "Explain factor selection reasoning"
          ],
          relevantFormulas: [
            "If c=6 and b=5: try (2,3) not (1,6) since 2+3=5",
            "Large b suggests unequal factors, small b suggests equal"
          ],
          sampleProblems: [
            {
              problem: "Factorise x² + 11x + 18 and explain your factor selection"
            }
          ],
          availableTools: ["multiplicationGrid", "factoringVisualizer"]
        },

        {
          id: "large-constant",
          title: "Factorising with Large Constant Terms",
          difficulty: "advanced",
          prerequisites: ["systematic-factorisation"],
          masterySignals: "Student factorises quadratics with c > 50 using systematic approach",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ quadratics with large c factorised correctly",
                "Systematic enumeration demonstrated"
              ],
              qualitative: [
                "Lists all divisor pairs systematically",
                "Uses prime factorisation when helpful",
                "Tests pairs efficiently (middle values first)",
                "Handles many factor pairs without getting overwhelmed",
                "Verifies factorisation by expansion"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on systematic listing",
                "Can complete but takes many trials"
              ],
              qualitative: [
                "Can list pairs but misses some",
                "Needs prompting for systematic approach",
                "Gets overwhelmed by many possibilities",
                "Can complete once all pairs are listed"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot complete factorisation",
                "Missing factor pairs",
                "Requests solution early"
              ],
              qualitative: [
                "Cannot list all factor pairs",
                "No systematic approach",
                "Gives up when c is large",
                "Does not use prime factorisation"
              ]
            }
          },
          learningObjectives: [
            "List all divisor pairs of large numbers systematically",
            "Use prime factorisation to find factors",
            "Test pairs efficiently to minimize trials",
            "Handle complexity without being overwhelmed",
            "Maintain accuracy with many possibilities"
          ],
          relevantFormulas: [
            "Prime factorisation: 60 = 2² × 3 × 5 → divisors: 1,2,3,4,5,6,10,12,15,20,30,60",
            "Test middle values first: often yields sum closest to b"
          ],
          sampleProblems: [
            {
              problem: "Factorise: x² + 17x + 60"
            },
            {
              problem: "Factorise: x² + 23x + 72"
            }
          ],
          availableTools: ["factoringVisualizer", "numberLine"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Conceptual (intermediate) - Understand factorisation using visual models",
      "2. Simple (intermediate) - Factorise quadratics with small constants",
      "3. Systematic (intermediate→advanced) - Use reasoning to select factors efficiently",
      "4. Large Constants (advanced) - Handle complex cases with many factor pairs"
    ],

    keyFormulas: `• Target: x² + bx + c = (x+p)(x+q) where pq=c, p+q=b
• Process: list factor pairs of c → find pair summing to b → write (x+p)(x+q)
• Verification: always expand to check
• Prime factorisation helps find all divisors
• Systematic approach: test middle values first`
  },

  // ==========================================
  // SUBTOPIC 6: Factorising Quadratics (Mixed Signs)
  // ==========================================

  's2-math-expansion-factorisation-negative-b-positive-c': {
    displayName: 'Factorising with Negative x-Coefficient',
    topicName: 'negative b positive c factorisation',

    progressionStructure: {
      sections: [
        {
          id: "both-factors-negative",
          title: "Factorising x²+bx+c where b<0, c>0",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["systematic-factorisation"],
          masterySignals: "Student factorises 6 quadratics recognizing both factors must be negative",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "6+ correct factorisations with b<0, c>0",
                "All signs correct in factorised form"
              ],
              qualitative: [
                "Recognizes pattern: b<0, c>0 → both factors negative",
                "Writes form (x-p)(x-q) where p, q positive",
                "Finds factors where (-p)×(-q)=c (positive) and -p-q=b (negative)",
                "Verifies: (x-2)(x-3) = x² -5x + 6",
                "Explains why both must be negative"
              ]
            },
            developing: {
              quantitative: [
                "4-5 correct with sign hints",
                "Occasional sign errors in brackets"
              ],
              qualitative: [
                "Understands need for negative but makes sign errors",
                "Confuses which sign goes where",
                "Needs prompting for sign pattern",
                "Can complete once (-)(-)=(+) is reviewed"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple sign errors",
                "Cannot determine correct signs",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand sign relationships",
                "Uses positive factors when should be negative",
                "Cannot connect b<0, c>0 to both negative",
                "Makes random sign choices"
              ]
            }
          },
          learningObjectives: [
            "Recognize b<0, c>0 means both factors negative",
            "Write (x-p)(x-q) form correctly",
            "Find negative factors: (-p)+(-q)=b, (-p)×(-q)=c",
            "Verify by expansion with correct signs",
            "Explain sign reasoning"
          ],
          relevantFormulas: [
            "Pattern: x²-bx+c = (x-p)(x-q) where p,q positive",
            "Example: x²-5x+6 = (x-2)(x-3) since -2-3=-5, (-2)(-3)=6"
          ],
          sampleProblems: [
            {
              problem: "Factorise: x² - 7x + 10"
            },
            {
              problem: "Factorise: x² - 8x + 15"
            }
          ],
          availableTools: ["multiplicationGrid", "factoringVisualizer"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 1 section:",
      "1. Both Negative (intermediate→advanced) - Handle b<0, c>0 case with both factors negative"
    ],

    keyFormulas: `• Pattern: b<0, c>0 → (x-p)(x-q) form
• Both factors negative: (-)(-)=(+)
• Find p, q where: p+q=|b| and pq=c
• Example: x²-7x+12 = (x-3)(x-4)`
  },

  's2-math-expansion-factorisation-negative-c-factorisation': {
    displayName: 'Factorising with Negative Constant',
    topicName: 'negative constant factorisation',

    progressionStructure: {
      sections: [
        {
          id: "one-negative-factor",
          title: "Factorising x²+bx+c where c<0",
          difficulty: "advanced",
          prerequisites: ["both-factors-negative"],
          masterySignals: "Student factorises 6 quadratics with negative constant, determining signs correctly",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "6+ correct factorisations with c<0",
                "Correct sign determination every time"
              ],
              qualitative: [
                "Recognizes c<0 means one positive, one negative factor",
                "Finds factor pair where product is negative",
                "Determines which factor is larger based on sign of b",
                "Applies: larger factor gets sign of b",
                "Verifies: (x+6)(x-1) = x²+5x-6"
              ]
            },
            developing: {
              quantitative: [
                "4-5 correct with hints on sign determination",
                "Can find factors but struggles with sign placement"
              ],
              qualitative: [
                "Understands one of each sign but uncertain which",
                "Needs prompting for larger factor rule",
                "Can determine once sign rules are reviewed",
                "Makes occasional sign placement errors"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple sign errors",
                "Cannot determine factor signs",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand c<0 sign pattern",
                "Uses random signs",
                "Cannot connect b sign to larger factor",
                "Confused by (+)(-) multiplication"
              ]
            }
          },
          learningObjectives: [
            "Recognize c<0 means factors have opposite signs",
            "Find factor pair where product equals c (negative)",
            "Determine larger factor gets sign of b",
            "Write (x+p)(x-q) or (x-p)(x+q) correctly",
            "Verify factorisation by expansion"
          ],
          relevantFormulas: [
            "Pattern: c<0 → (x+p)(x-q) form (one + one -)",
            "Larger factor sign = sign of b",
            "Example: x²+5x-6 = (x+6)(x-1) since 6 is larger, gets + sign"
          ],
          sampleProblems: [
            {
              problem: "Factorise: x² + 5x - 6"
            },
            {
              problem: "Factorise: x² - 3x - 10"
            },
            {
              problem: "Factorise: x² + 2x - 15"
            }
          ],
          availableTools: ["multiplicationGrid", "factoringVisualizer"]
        },

        {
          id: "sign-determination-strategy",
          title: "Sign Combination Strategy",
          difficulty: "advanced",
          prerequisites: ["one-negative-factor"],
          masterySignals: "Student correctly determines signs for 8 quadratics, all first-try correct",
          estimatedQuestions: "7-8 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "8+ quadratics with correct sign determination",
                "First attempt correct (no trial needed)"
              ],
              qualitative: [
                "Quickly identifies sign scenario from b and c",
                "Applies rules: c>0,b>0→(+,+); c>0,b<0→(-,-); c<0→(+,-)",
                "Determines specific signs efficiently",
                "Explains reasoning for sign choices",
                "Handles all four scenarios fluently"
              ]
            },
            developing: {
              quantitative: [
                "6-7 correct with occasional sign errors",
                "Needs to review rules for some cases"
              ],
              qualitative: [
                "Knows rules but applies inconsistently",
                "Needs prompting for c<0 cases",
                "Can determine once scenario is identified",
                "Makes occasional errors under complexity"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple sign determination errors",
                "Cannot apply rules reliably",
                "Requests solution early"
              ],
              qualitative: [
                "Does not know sign determination rules",
                "Confuses different scenarios",
                "Uses random trial instead of reasoning",
                "Cannot explain sign choices"
              ]
            }
          },
          learningObjectives: [
            "Master all four sign scenarios",
            "Quickly identify which scenario applies",
            "Apply sign rules efficiently",
            "Explain reasoning for sign determination",
            "Achieve first-try accuracy"
          ],
          relevantFormulas: [
            "c>0, b>0 → (+,+): (x+p)(x+q)",
            "c>0, b<0 → (-,-): (x-p)(x-q)",
            "c<0, b>0 → larger +: (x+p)(x-q)",
            "c<0, b<0 → larger -: (x-p)(x+q)"
          ],
          sampleProblems: [
            {
              problem: "Determine signs then factorise: x² + 8x + 12"
            },
            {
              problem: "Determine signs then factorise: x² - 9x + 14"
            },
            {
              problem: "Determine signs then factorise: x² + 4x - 12"
            },
            {
              problem: "Determine signs then factorise: x² - 2x - 8"
            }
          ],
          availableTools: ["factoringVisualizer", "balanceScale"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. One Negative (advanced) - Handle c<0 with opposite sign factors",
      "2. Sign Strategy (advanced) - Master all four scenarios with efficient determination"
    ],

    keyFormulas: `• Four scenarios:
  - c>0, b>0 → (x+p)(x+q)
  - c>0, b<0 → (x-p)(x-q)
  - c<0, b>0 → (x+larger)(x-smaller)
  - c<0, b<0 → (x-larger)(x+smaller)
• Larger factor gets sign of b when c<0`
  },

  // ==========================================
  // SUBTOPIC 7: Factorising ax²+bx+c (a≠1)
  // ==========================================

  's2-math-expansion-factorisation-leading-coefficient-concept': {
    displayName: 'Factorising with Leading Coefficient',
    topicName: 'factorising a not equal 1',

    progressionStructure: {
      sections: [
        {
          id: "understand-a-not-1",
          title: "Understanding Factorisation with a≠1",
          difficulty: "advanced",
          prerequisites: ["sign-determination-strategy"],
          masterySignals: "Student explains why common factor method fails for 3 examples",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ clear explanations of why method changes",
                "Can identify when a≠1 requires different approach"
              ],
              qualitative: [
                "Recognizes extracting common factors doesn't work here",
                "Explains: 2x²+7x-15 has no common factor",
                "Understands need for (px+q)(rx+s) form where pr=a",
                "Recognizes diagonal product pattern in grid",
                "Connects to previous (x+p)(x+q) as special case (a=1)"
              ]
            },
            developing: {
              quantitative: [
                "2 explanations with hints",
                "Can identify difference but struggles to explain why"
              ],
              qualitative: [
                "Sees different approach needed but uncertain of reason",
                "Needs prompting for why common factor fails",
                "Can understand once pattern is explained",
                "Makes connection with guidance"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot explain difference",
                "Attempts common factor method incorrectly",
                "Requests solution early"
              ],
              qualitative: [
                "Does not recognize when different method needed",
                "Tries to force previous methods",
                "Confused by leading coefficient",
                "Cannot connect to expansion pattern"
              ]
            }
          },
          learningObjectives: [
            "Recognize when a≠1 (x² coefficient not 1)",
            "Understand why previous method doesn't work",
            "Learn (px+q)(rx+s) form where pr=a",
            "Understand multiplication frame necessity",
            "Connect to previous work as special case"
          ],
          relevantFormulas: [
            "Form: (px+q)(rx+s) = prx² + (ps+qr)x + qs",
            "Leading coefficient: pr = a",
            "Diagonal product: (prx²)(qs) = (ps)(qr)"
          ],
          availableTools: ["multiplicationGrid", "factoringVisualizer"]
        },

        {
          id: "guess-and-check",
          title: "Guess-and-Check Method",
          difficulty: "advanced",
          prerequisites: ["understand-a-not-1"],
          masterySignals: "Student factorises 5 quadratics (a=2 or 3) using systematic guess-check",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "5+ correct factorisations with a=2 or 3",
                "Systematic testing demonstrated"
              ],
              qualitative: [
                "Lists factor pairs of a (leading coefficient)",
                "Lists factor pairs of c (constant)",
                "Tests combinations in multiplication frame",
                "Checks if x-coefficient sum equals b",
                "Adjusts factor placement strategically"
              ]
            },
            developing: {
              quantitative: [
                "3-4 correct with many trials",
                "Can complete but inefficiently"
              ],
              qualitative: [
                "Can test combinations but randomly",
                "Needs prompting for systematic approach",
                "Makes arithmetic errors in checking sums",
                "Can complete once combinations are listed"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect factorisations",
                "Cannot complete guess-check process",
                "Requests solution early"
              ],
              qualitative: [
                "Does not know which combinations to try",
                "Cannot use multiplication frame",
                "Gets lost in trials",
                "Gives up when first attempt fails"
              ]
            }
          },
          learningObjectives: [
            "List factor pairs of a and c",
            "Test combinations systematically in frame",
            "Check x-coefficient for each trial",
            "Adjust factor placement based on results",
            "Build efficiency through practice"
          ],
          relevantFormulas: [
            "For 2x²+7x-15: try (2x,x) with factor pairs of -15",
            "Test: (2x+?)(x+?) and check middle term"
          ],
          sampleProblems: [
            {
              problem: "Factorise: 2x² + 7x + 3"
            },
            {
              problem: "Factorise: 3x² + 10x + 8"
            }
          ],
          availableTools: ["multiplicationGrid", "factoringVisualizer"]
        },

        {
          id: "reasoning-method",
          title: "Reasoning Method for Efficient Factorisation",
          difficulty: "advanced",
          prerequisites: ["guess-and-check"],
          masterySignals: "Student factorises 6 quadratics using diagonal product reasoning, explaining steps",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "6+ correct factorisations using reasoning method",
                "Explains diagonal product at each step"
              ],
              qualitative: [
                "Calculates diagonal product: a×c",
                "Finds factor pairs of (a×c) that sum to b",
                "Splits middle term using found factors",
                "Groups terms: (first two) + (last two)",
                "Extracts common factors to complete: (px+q)(rx+s)"
              ]
            },
            developing: {
              quantitative: [
                "4-5 correct with hints on splitting",
                "Can follow method but makes arithmetic errors"
              ],
              qualitative: [
                "Understands diagonal product but struggles with splitting",
                "Needs prompting for grouping strategy",
                "Can complete once factors of a×c are found",
                "Makes errors in final extraction"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in reasoning method",
                "Cannot apply diagonal product rule",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand diagonal product concept",
                "Cannot split middle term correctly",
                "Confused by grouping process",
                "Cannot connect method to result"
              ]
            }
          },
          learningObjectives: [
            "Calculate diagonal product a×c",
            "Find factors of (a×c) summing to b",
            "Split middle term using found factors",
            "Group terms and extract common factors",
            "Explain reasoning at each step"
          ],
          relevantFormulas: [
            "Diagonal product: 2x²×(-15) = -30x²",
            "Find factors of -30 summing to 7: -3 and 10",
            "Split: 2x²+10x-3x-15",
            "Group: (2x²+10x)+(-3x-15) = 2x(x+5)-3(x+5) = (2x-3)(x+5)"
          ],
          sampleProblems: [
            {
              problem: "Factorise using reasoning method: 2x² + 7x - 15"
            },
            {
              problem: "Factorise: 3x² + 11x + 6"
            }
          ],
          availableTools: ["factoringVisualizer", "multiplicationGrid"]
        },

        {
          id: "negative-leading",
          title: "Negative Leading Coefficient",
          difficulty: "advanced",
          prerequisites: ["reasoning-method"],
          masterySignals: "Student factorises 5 quadratics with negative leading coefficient",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "5+ correct factorisations with negative a",
                "Multiple valid representations shown"
              ],
              qualitative: [
                "Extracts negative sign first: -2x²-7x+15 = -(2x²+7x-15)",
                "Factorises positive form inside",
                "Reapplies negative: -(2x-3)(x+5)",
                "Shows alternative: (3-2x)(x+5)",
                "Verifies both forms by expansion"
              ]
            },
            developing: {
              quantitative: [
                "3-4 correct with hints on negative extraction",
                "Can factorise but shows only one form"
              ],
              qualitative: [
                "Understands extracting negative but makes sign errors",
                "Needs prompting for alternative representation",
                "Can complete once negative is extracted",
                "Makes errors in verification"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple sign errors",
                "Cannot handle negative leading coefficient",
                "Requests solution early"
              ],
              qualitative: [
                "Does not know to extract negative first",
                "Makes random sign changes",
                "Cannot represent in alternative forms",
                "Confused by negative sign throughout"
              ]
            }
          },
          learningObjectives: [
            "Extract negative sign from expression",
            "Factorise positive form",
            "Reapply negative to factorised form",
            "Show alternative representations",
            "Verify all forms by expansion"
          ],
          relevantFormulas: [
            "-ax²+bx+c = -(ax²-bx-c)",
            "Example: -2x²-7x+15 = -(2x²+7x-15) = -(2x-3)(x+5) = (3-2x)(x+5)"
          ],
          sampleProblems: [
            {
              problem: "Factorise: -2x² - 7x + 15"
            },
            {
              problem: "Factorise: -3x² + 11x + 4"
            }
          ],
          availableTools: ["factoringVisualizer", "distributiveVisualizer"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Conceptual (advanced) - Understand why a≠1 requires different approach",
      "2. Guess-Check (advanced) - Test factor combinations systematically",
      "3. Reasoning (advanced) - Use diagonal product method efficiently",
      "4. Negative Leading (advanced) - Handle negative leading coefficients"
    ],

    keyFormulas: `• Form: (px+q)(rx+s) where pr=a, qs=c, ps+qr=b
• Diagonal product: a×c, find factors summing to b
• Split middle term, group, extract
• Negative a: extract minus sign first
• Example: 2x²+7x-15 → diagonal -30, factors -3,10 → (2x-3)(x+5)`
  },

  // ==========================================
  // SUBTOPIC 8: Factorisation by Grouping
  // ==========================================

  's2-math-expansion-factorisation-grouping-multiplication-frame': {
    displayName: 'Factorisation by Grouping',
    topicName: 'factorisation by grouping',

    progressionStructure: {
      sections: [
        {
          id: "grouping-frame-method",
          title: "Grouping Using Multiplication Frame",
          difficulty: "advanced",
          prerequisites: ["reasoning-method"],
          masterySignals: "Student factorises 5 four-term expressions using frame method",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "5+ four-term expressions factorised using frame",
                "Correct (a+b)(c+d) form every time"
              ],
              qualitative: [
                "Arranges four terms in 2×2 multiplication frame",
                "Identifies common factor in each row",
                "Identifies common factor in each column",
                "Reads off factors from frame structure",
                "Verifies by expanding back"
              ]
            },
            developing: {
              quantitative: [
                "3-4 correct with hints on frame arrangement",
                "Can use frame but needs help identifying factors"
              ],
              qualitative: [
                "Can arrange terms but uncertain about reading factors",
                "Needs prompting for row/column patterns",
                "Can complete once frame structure is explained",
                "Makes occasional arrangement errors"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot complete frame method",
                "Multiple arrangement errors",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand frame structure",
                "Cannot arrange terms correctly",
                "Cannot read factors from frame",
                "Confused by four-term expressions"
              ]
            }
          },
          learningObjectives: [
            "Arrange ac+ad+bc+bd in 2×2 frame",
            "Identify common row factors",
            "Identify common column factors",
            "Read (a+b)(c+d) from frame",
            "Verify factorisation by expansion"
          ],
          relevantFormulas: [
            "Frame method: arrange in grid, read row/column factors",
            "ac+ad+bc+bd → (a+b)(c+d)"
          ],
          sampleProblems: [
            {
              problem: "Factorise using frame: xy + 3x + 2y + 6"
            },
            {
              problem: "Factorise: 2ac + 3ad + 4bc + 6bd"
            }
          ],
          availableTools: ["multiplicationGrid", "factoringVisualizer"]
        },

        {
          id: "grouping-pairs-method",
          title: "Grouping by Pairs",
          difficulty: "advanced",
          prerequisites: ["grouping-frame-method"],
          masterySignals: "Student factorises 5 expressions by strategic pairing, verifying by expansion",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "5+ expressions factorised by pairing",
                "Systematic pairing strategy demonstrated"
              ],
              qualitative: [
                "Groups terms strategically: (ac+ad)+(bc+bd)",
                "Extracts common factor from first pair: a(c+d)",
                "Extracts common factor from second pair: b(c+d)",
                "Identifies common binomial factor (c+d)",
                "Final extraction: (a+b)(c+d)"
              ]
            },
            developing: {
              quantitative: [
                "3-4 correct with hints on pairing",
                "Can extract but needs help identifying binomial"
              ],
              qualitative: [
                "Can group but makes extraction errors",
                "Needs prompting for common binomial",
                "Can complete once pairs are formed",
                "Makes sign errors in extraction"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple pairing errors",
                "Cannot complete grouping method",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand pairing strategy",
                "Cannot extract common factors from pairs",
                "Does not recognize common binomial",
                "Confused by multi-step process"
              ]
            }
          },
          learningObjectives: [
            "Group four terms into two pairs strategically",
            "Extract common factor from each pair",
            "Identify common binomial factor",
            "Complete final extraction to (a+b)(c+d)",
            "Verify by expansion"
          ],
          relevantFormulas: [
            "Method: (ac+ad)+(bc+bd) = a(c+d)+b(c+d) = (a+b)(c+d)",
            "Key: both pairs must have same binomial factor"
          ],
          sampleProblems: [
            {
              problem: "Factorise by grouping: 3x + 3y + ax + ay"
            },
            {
              problem: "Factorise: 2mn + 4m + 3n + 6"
            }
          ],
          availableTools: ["factoringVisualizer", "distributiveVisualizer"]
        },

        {
          id: "term-arrangement",
          title: "Choosing Correct Term Arrangement",
          difficulty: "advanced",
          prerequisites: ["grouping-pairs-method"],
          masterySignals: "Student identifies correct arrangement for 6 expressions, explaining choices",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "6+ expressions with correct arrangement identified",
                "Explains why arrangement works or doesn't work"
              ],
              qualitative: [
                "Tests different pairings systematically",
                "Recognizes when pairing won't yield common binomial",
                "Rearranges terms before grouping when needed",
                "Explains: ac+bc+ad+bd may need rearrangement to ac+ad+bc+bd",
                "Shows multiple valid arrangements when possible"
              ]
            },
            developing: {
              quantitative: [
                "4-5 correct with hints on testing arrangements",
                "Can rearrange with guidance"
              ],
              qualitative: [
                "Understands need but uncertain about which arrangement",
                "Needs prompting to test alternatives",
                "Can complete once arrangement is identified",
                "Makes errors in systematic testing"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot identify correct arrangement",
                "Multiple arrangement errors",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand importance of arrangement",
                "Uses first arrangement without testing",
                "Cannot recognize when binomials don't match",
                "Gives up if first pairing fails"
              ]
            }
          },
          learningObjectives: [
            "Test different term pairings",
            "Recognize when arrangement doesn't work",
            "Rearrange terms strategically before grouping",
            "Identify multiple valid arrangements",
            "Explain arrangement reasoning"
          ],
          relevantFormulas: [
            "ac+bc+ad+bd needs rearrangement",
            "Try: (ac+ad)+(bc+bd) = a(c+d)+b(c+d) ✓",
            "Or: (ac+bc)+(ad+bd) = c(a+b)+d(a+b) ✓"
          ],
          sampleProblems: [
            {
              problem: "Find correct arrangement: pr+qr+ps+qs"
            },
            {
              problem: "Factorise: ab+2b+3a+6"
            }
          ],
          availableTools: ["factoringVisualizer", "algebraExpression"]
        },

        {
          id: "combined-techniques",
          title: "Combined Extraction and Grouping",
          difficulty: "advanced",
          prerequisites: ["term-arrangement", "factor-higher-powers"],
          masterySignals: "Student completes 4 complex problems using multiple factorisation techniques",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ complex multi-step factorisations completed",
                "Complete factorisation achieved (no further factoring possible)"
              ],
              qualitative: [
                "Extracts common factor first when present",
                "Then applies grouping to remaining terms",
                "Recognizes when multiple techniques needed",
                "Verifies complete factorisation at each step",
                "Checks final form cannot be factored further"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with hints on technique order",
                "Can apply each technique but struggles with combination"
              ],
              qualitative: [
                "Understands both methods but uncertain about order",
                "Needs prompting for next step",
                "Can complete once strategy is outlined",
                "Makes errors in multi-step process"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot complete multi-step factorisation",
                "Missing steps",
                "Requests solution early"
              ],
              qualitative: [
                "Does not recognize need for multiple techniques",
                "Stops after first step without full factorisation",
                "Cannot combine methods",
                "Overwhelmed by complexity"
              ]
            }
          },
          learningObjectives: [
            "Extract common factors as first step",
            "Apply grouping to remaining expression",
            "Combine multiple factorisation techniques",
            "Verify complete factorisation achieved",
            "Explain multi-step strategy"
          ],
          relevantFormulas: [
            "Strategy: Extract HCF first → then group remaining",
            "Example: 6ac+6ad+9bc+9bd = 3(2ac+2ad+3bc+3bd) = 3[(2a)(c+d)+(3b)(c+d)] = 3(2a+3b)(c+d)"
          ],
          sampleProblems: [
            {
              problem: "Factorise completely: 6xy + 9x + 10y + 15"
            },
            {
              problem: "Factorise: 4ab + 6ac + 6b + 9c"
            }
          ],
          availableTools: ["factoringVisualizer", "distributiveVisualizer"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Frame Method (advanced) - Use multiplication grid for four-term expressions",
      "2. Pairing Method (advanced) - Group pairs and extract common binomial",
      "3. Arrangement (advanced) - Choose correct term order for successful grouping",
      "4. Combined (advanced) - Use extraction + grouping for complex expressions"
    ],

    keyFormulas: `• ac+ad+bc+bd = (a+b)(c+d)
• Pairing method: (ac+ad)+(bc+bd) = a(c+d)+b(c+d) = (a+b)(c+d)
• Frame method: arrange in 2×2 grid, read factors
• Term arrangement matters: test different pairings
• Combined: extract common factor first, then group`
  },

  // ==========================================
  // SUBTOPIC 11: Special Algebraic Identities - Perfect Squares
  // ==========================================

  's2-math-expansion-factorisation-perfect-square-identities': {
    displayName: 'Perfect Square Identities',
    topicName: 'special algebraic identities - perfect squares',

    progressionStructure: {
      sections: [
        {
          id: "perfect-square-sum-discovery",
          title: "Discovering (a + b)²",
          difficulty: "foundational",
          prerequisites: ["double-bracket-expansion"],
          masterySignals: "Student correctly expands (a+b)² and explains the identity geometrically in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct expansions of (a+b)² without hints",
                "Correctly identifies all four terms: a², ab, ab, b²",
                "Combines middle terms correctly: ab + ab = 2ab"
              ],
              qualitative: [
                "Expands (a+b)(a+b) systematically using distributive law",
                "Writes final form correctly: a² + 2ab + b²",
                "Explains why middle term is 2ab (two rectangles of area ab)",
                "Visualizes as area of square with side (a+b)",
                "Understands (a+b)² ≠ a² + b² (avoids common mistake)",
                "Can verify geometrically using area model"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on combining terms",
                "Needs prompting for geometric interpretation",
                "Can expand but makes occasional sign errors"
              ],
              qualitative: [
                "Can expand (a+b)(a+b) but forgets to combine ab terms",
                "Writes a² + ab + ab + b² but doesn't simplify to 2ab",
                "Understands concept but makes arithmetic errors",
                "Needs guidance to see four regions in square diagram",
                "Confuses expansion steps occasionally"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Cannot expand without full solution",
                "Makes the error (a+b)² = a² + b²",
                "Requests solution after 1 hint"
              ],
              qualitative: [
                "Incorrectly squares each term separately: (a+b)² → a² + b²",
                "Does not understand (a+b)² means (a+b)(a+b)",
                "Cannot apply distributive law to expand brackets",
                "Confuses squaring with multiplication by 2",
                "Has no geometric understanding of the identity"
              ]
            }
          },
          learningObjectives: [
            "Expand (a+b)² using distributive law: (a+b)(a+b)",
            "Combine like terms to get a² + 2ab + b²",
            "Visualize (a+b)² as area of square with side (a+b)",
            "Explain why middle term is 2ab (two rectangles of area ab)",
            "Avoid common error: (a+b)² ≠ a² + b²",
            "Apply identity to algebraic expressions with coefficients"
          ],
          relevantFormulas: [
            "(a + b)² = (a + b)(a + b) = a² + 2ab + b²",
            "NOT a² + b² - this is a common mistake!",
            "Geometric: Area of square with side (a+b) = a² + ab + ab + b²",
            "Examples: (x+4)² = x²+8x+16, (3y+5)² = 9y²+30y+25"
          ],
          sampleProblems: [
            {
              problem: "Expand (x + 3)² and explain each term"
            },
            {
              problem: "Expand (2a + 5)² and verify using area model"
            },
            {
              problem: "Explain why (x + 4)² ≠ x² + 16"
            }
          ],
          availableTools: ["multiplicationGrid", "algebraExpression"]
        },

        {
          id: "perfect-square-difference-discovery",
          title: "Discovering (a - b)²",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["perfect-square-sum-discovery"],
          masterySignals: "Student correctly expands (a-b)² and understands relationship to (a+b)² in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct expansions of (a-b)² without hints",
                "Correctly handles negative signs throughout",
                "Recognizes pattern: a² - 2ab + b² (positive last term)"
              ],
              qualitative: [
                "Derives (a-b)² by replacing b with -b in (a+b)²",
                "Expands systematically: (a-b)(a-b) = a²-ab-ab+b²",
                "Correctly simplifies: -ab - ab = -2ab",
                "Understands (-b)² = b² (not -b²)",
                "Avoids error: (a-b)² ≠ a² - b²",
                "Explains why last term is +b² despite subtraction"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on sign handling",
                "Makes occasional errors with negative terms",
                "Needs prompting for (-b)² = b²"
              ],
              qualitative: [
                "Understands process but makes sign errors",
                "Writes (a-b)² = a² - 2ab - b² (wrong sign on last term)",
                "Can expand with guidance but uncertain independently",
                "Confuses (-b)² with -b²",
                "Needs reminders about sign rules"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot handle negative signs correctly",
                "Multiple sign errors in expansion",
                "Writes (a-b)² = a² - b² (missing middle term)"
              ],
              qualitative: [
                "Does not understand how to expand (a-b)(a-b)",
                "Cannot handle negative term -b systematically",
                "Confuses (a-b)² with a² - b² (difference of squares)",
                "Makes error (-b)² = -b²",
                "Overwhelmed by negative signs"
              ]
            }
          },
          learningObjectives: [
            "Expand (a-b)² to get a² - 2ab + b²",
            "Understand relationship between (a+b)² and (a-b)²",
            "Handle negative terms correctly: (-b)² = b²",
            "Recognize why last term is +b² (not -b²)",
            "Derive identity by replacing b with -b",
            "Apply to expressions with subtraction"
          ],
          relevantFormulas: [
            "(a - b)² = (a - b)(a - b) = a² - 2ab + b²",
            "Key: Last term is +b² (positive!) even though we subtract",
            "Relationship: Replace b with -b in (a+b)² formula",
            "(-b)² = b² (negative squared is positive)",
            "Examples: (x-3)² = x²-6x+9, (5a-2b)² = 25a²-20ab+4b²"
          ],
          sampleProblems: [
            {
              problem: "Expand (x - 5)² and identify each term"
            },
            {
              problem: "Expand (3y - 4)² and verify the last term is positive"
            },
            {
              problem: "Compare (x+3)² and (x-3)² - what's similar and different?"
            }
          ],
          availableTools: ["multiplicationGrid", "algebraExpression"]
        },

        {
          id: "perfect-square-expansion",
          title: "Expanding Using Perfect Square Identities",
          difficulty: "intermediate",
          prerequisites: ["perfect-square-sum-discovery", "perfect-square-difference-discovery"],
          masterySignals: "Student efficiently expands perfect square expressions with coefficients in 5+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "5+ correct expansions using identities",
                "Handles integer, fractional, and variable coefficients accurately",
                "Minimal or no calculation errors"
              ],
              qualitative: [
                "Recognizes pattern immediately: (anything)² → use identity",
                "Correctly identifies 'a' and 'b' in complex expressions",
                "Applies identity: square first, double product, square second",
                "Handles (4a+3b)² type problems with ease",
                "Uses identity as shortcut instead of full FOIL",
                "Self-corrects if initial setup is wrong"
              ]
            },
            developing: {
              quantitative: [
                "3-4 correct with occasional errors",
                "Struggles with fractional coefficients",
                "Makes arithmetic errors in middle term calculation"
              ],
              qualitative: [
                "Knows to use identity but makes setup errors",
                "Confuses (3x)² with 3x²",
                "Forgets to square coefficients properly",
                "Calculates 2ab incorrectly with multiple variables",
                "Can complete with hints on coefficient handling"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect expansions",
                "Cannot handle coefficients systematically",
                "Reverts to incorrect (a+b)² = a²+b² pattern"
              ],
              qualitative: [
                "Does not recognize when to use perfect square identity",
                "Cannot identify 'a' and 'b' in expression",
                "Makes errors like (2x)² = 2x²",
                "Cannot compute middle term 2ab correctly",
                "Tries to expand without using identity"
              ]
            }
          },
          learningObjectives: [
            "Recognize expressions of form (linear)²",
            "Identify 'a' and 'b' in expressions like (3x+5)²",
            "Apply identity quickly: (a±b)² = a²±2ab+b²",
            "Handle coefficients: (4a)² = 16a², not 4a²",
            "Calculate middle term correctly: 2(3x)(5) = 30x",
            "Expand expressions with fractions and multiple variables"
          ],
          relevantFormulas: [
            "(a + b)² = a² + 2ab + b²",
            "(a - b)² = a² - 2ab + b²",
            "Coefficient rule: (ka)² = k²a²",
            "Middle term: 2 × first × second",
            "Examples: (2x+3)² = 4x²+12x+9, (5a-2b)² = 25a²-20ab+4b²"
          ],
          sampleProblems: [
            {
              problem: "Expand (x + 6)²"
            },
            {
              problem: "Expand (4y + 3)²"
            },
            {
              problem: "Expand (7 + 3a)²"
            },
            {
              problem: "Expand (2x - 5y)²"
            }
          ],
          availableTools: ["multiplicationGrid", "algebraExpression"]
        },

        {
          id: "perfect-square-factorisation",
          title: "Factorising Using Perfect Square Identities",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["perfect-square-expansion"],
          masterySignals: "Student recognizes and factorises perfect square trinomials in 5+ problems, including identifying when identity doesn't apply",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "5+ correct factorisations of perfect squares",
                "Correctly identifies when expression is NOT a perfect square",
                "Verifies factorisation by expanding back"
              ],
              qualitative: [
                "Recognizes perfect square pattern: a²±2ab+b²",
                "Takes square roots of first and last terms correctly",
                "Checks middle term: does it equal 2×√first×√last?",
                "Factorises a²+2ab+b² as (a+b)²",
                "Factorises a²-2ab+b² as (a-b)²",
                "States 'N.A.' when expression doesn't fit pattern",
                "Verifies answer by expanding to check"
              ]
            },
            developing: {
              quantitative: [
                "3-4 correct factorisations with hints",
                "Misses some non-perfect-square cases",
                "Needs prompting for middle term verification"
              ],
              qualitative: [
                "Recognizes pattern sometimes but not consistently",
                "Takes square roots but doesn't verify middle term",
                "Confuses sign: writes (a-b)² when should be (a+b)²",
                "Attempts to factorise non-perfect-squares incorrectly",
                "Forgets to verify by expanding"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot recognize perfect square patterns",
                "Incorrectly factorises most expressions",
                "Does not check if identity applies"
              ],
              qualitative: [
                "Cannot take square roots of terms",
                "Does not know how to check middle term",
                "Tries to factorise all trinomials as perfect squares",
                "Cannot distinguish perfect squares from other trinomials",
                "Writes incorrect factors without verification"
              ]
            }
          },
          learningObjectives: [
            "Recognize perfect square trinomial pattern",
            "Check if expression is perfect square using 3 tests",
            "Take square roots of first and last terms",
            "Verify middle term equals 2×√first×√last",
            "Factorise a²+2ab+b² as (a+b)²",
            "Factorise a²-2ab+b² as (a-b)²",
            "Identify when identity doesn't apply (state N.A.)",
            "Verify factorisation by expanding back"
          ],
          relevantFormulas: [
            "a² + 2ab + b² = (a + b)²",
            "a² - 2ab + b² = (a - b)²",
            "Tests: (1) Three terms, (2) First & last are perfect squares, (3) Middle = ±2√first√last",
            "Examples: x²+10x+25=(x+5)², 9y²-24y+16=(3y-4)²",
            "If not perfect square, state 'N.A.' or use other factorisation methods"
          ],
          sampleProblems: [
            {
              problem: "Factorise x² + 10x + 25"
            },
            {
              problem: "Factorise 16y² + 20y + 25 (check if perfect square first!)"
            },
            {
              problem: "Factorise 4a² - 12ab + 9b²"
            },
            {
              problem: "Factorise 25x² - 40xy + 16y²"
            }
          ],
          availableTools: ["factoringVisualizer", "algebraExpression"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Discovering (a+b)² (foundational) - Derive identity geometrically and algebraically",
      "2. Discovering (a-b)² (foundational-to-intermediate) - Understand sign handling",
      "3. Expanding with identities (intermediate) - Apply to expressions with coefficients",
      "4. Factorising with identities (intermediate-to-advanced) - Recognize and apply reverse process"
    ],

    keyFormulas: `• (a + b)² = a² + 2ab + b² (First Perfect Square Identity)
• (a - b)² = a² - 2ab + b² (Second Perfect Square Identity)
• Expansion: Square first, double product middle, square last
• Factorisation: Check three conditions for perfect square
• Common mistakes: (a+b)² ≠ a²+b², and (a-b)² has +b² not -b²
• Geometric proof: Square with side (a+b) divided into four regions`
  },

  // ==========================================
  // SUBTOPIC 12: Special Algebraic Identities - Difference of Squares
  // ==========================================

  's2-math-expansion-factorisation-difference-squares': {
    displayName: 'Difference of Squares Identity',
    topicName: 'special algebraic identities - difference of squares',

    progressionStructure: {
      sections: [
        {
          id: "difference-squares-discovery",
          title: "Discovering (a + b)(a - b)",
          difficulty: "intermediate",
          prerequisites: ["double-bracket-expansion"],
          masterySignals: "Student discovers and explains why middle terms cancel in (a+b)(a-b) in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct expansions showing middle term cancellation",
                "Correctly derives a² - b² result",
                "Can explain cancellation algebraically and geometrically"
              ],
              qualitative: [
                "Expands (a+b)(a-b) systematically: a²-ab+ab-b²",
                "Recognizes -ab and +ab are opposites that cancel",
                "Simplifies to a² - b² correctly",
                "Explains geometric proof using area of squares",
                "Understands 'difference of two squares' terminology",
                "Sees pattern in multiple examples"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on cancellation",
                "Can expand but needs prompting to combine terms",
                "Recognizes pattern after demonstration"
              ],
              qualitative: [
                "Expands correctly but doesn't see cancellation immediately",
                "Needs guidance to recognize -ab + ab = 0",
                "Can complete once cancellation is pointed out",
                "Understands algebraically but not geometrically",
                "Confuses with perfect square identities"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot expand (a+b)(a-b) correctly",
                "Does not recognize middle terms cancel",
                "Leaves answer as four-term expression"
              ],
              qualitative: [
                "Makes errors in distributive law application",
                "Does not combine -ab and +ab",
                "Confuses (a+b)(a-b) with (a+b)² or (a-b)²",
                "Cannot explain why terms cancel",
                "No understanding of geometric interpretation"
              ]
            }
          },
          learningObjectives: [
            "Expand (a+b)(a-b) using distributive law",
            "Recognize middle terms -ab and +ab cancel",
            "Simplify to a² - b² (two terms only)",
            "Explain algebraic reason for cancellation",
            "Visualize geometrically using area model",
            "Understand 'difference of two squares' meaning"
          ],
          relevantFormulas: [
            "(a + b)(a - b) = a² - ab + ab - b² = a² - b²",
            "Middle terms cancel: -ab + ab = 0",
            "Result has only 2 terms (no middle term!)",
            "Geometric: Large square minus small square = rectangle (a+b)×(a-b)",
            "Examples: (x+5)(x-5) = x²-25, (3y+7)(3y-7) = 9y²-49"
          ],
          sampleProblems: [
            {
              problem: "Expand (x + 3)(x - 3) and show cancellation"
            },
            {
              problem: "Expand (2a + 5)(2a - 5) step by step"
            },
            {
              problem: "Explain why (a+b)(a-b) has no middle term"
            }
          ],
          availableTools: ["multiplicationGrid", "algebraExpression"]
        },

        {
          id: "difference-squares-expansion",
          title: "Expanding Using Difference of Squares",
          difficulty: "intermediate",
          prerequisites: ["difference-squares-discovery"],
          masterySignals: "Student rapidly expands expressions using difference of squares in 5+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "5+ correct expansions using identity as shortcut",
                "Handles various coefficient combinations accurately",
                "Recognizes pattern regardless of term order"
              ],
              qualitative: [
                "Identifies (a+b)(a-b) pattern immediately",
                "Applies identity directly: square first - square second",
                "Recognizes (a-b)(a+b) is same as (a+b)(a-b)",
                "Handles expressions like (4x+7y)(4x-7y) efficiently",
                "Uses identity instead of full expansion as shortcut",
                "Explains speed advantage over FOIL method"
              ]
            },
            developing: {
              quantitative: [
                "3-4 correct with occasional setup errors",
                "Sometimes forgets pattern applies",
                "Makes arithmetic errors in squaring"
              ],
              qualitative: [
                "Recognizes pattern but not consistently",
                "Sometimes expands fully instead of using shortcut",
                "Confuses (2x)² with 2x² occasionally",
                "Needs reminding that order doesn't matter",
                "Can use identity with prompting"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot recognize when identity applies",
                "Makes errors like (a+b)(a-b) = a²-b²+middle term",
                "Confuses with perfect square expansion"
              ],
              qualitative: [
                "Does not see (a+b)(a-b) pattern",
                "Tries to expand fully and makes errors",
                "Writes three terms instead of two",
                "Cannot apply identity correctly",
                "Confuses all three special identities"
              ]
            }
          },
          learningObjectives: [
            "Recognize (expression)(expression with opposite sign) pattern",
            "Apply identity directly: (a+b)(a-b) = a² - b²",
            "Handle coefficients correctly when squaring",
            "Recognize pattern works in either order",
            "Use as computational shortcut",
            "Expand quickly without full distribution"
          ],
          relevantFormulas: [
            "(a + b)(a - b) = a² - b²",
            "(a - b)(a + b) = a² - b² (order doesn't matter)",
            "Shortcut: Just square first term and subtract square of second",
            "Coefficient rule: (ka)² = k²a²",
            "Examples: (x+7)(x-7)=x²-49, (5y-3)(5y+3)=25y²-9"
          ],
          sampleProblems: [
            {
              problem: "Expand (x + 5)(x - 5)"
            },
            {
              problem: "Expand (3a + 4b)(3a - 4b)"
            },
            {
              problem: "Expand (7 - 2y)(7 + 2y)"
            }
          ],
          availableTools: ["multiplicationGrid", "algebraExpression"]
        },

        {
          id: "difference-squares-factorisation-and-applications",
          title: "Factorising and Applications of Difference of Squares",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["difference-squares-expansion", "perfect-square-factorisation"],
          masterySignals: "Student factorises difference of squares and solves application problems in 6+ problems",
          estimatedQuestions: "6-7 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "6+ correct factorisations of difference of squares",
                "Correctly identifies when identity doesn't apply",
                "Solves application problems using identity",
                "Handles mental math challenges successfully"
              ],
              qualitative: [
                "Recognizes a² - b² pattern immediately (two terms, subtraction)",
                "Takes square roots of both terms correctly",
                "Factorises as (a+b)(a-b)",
                "Knows a² + b² cannot be factorised (sum of squares)",
                "Distinguishes from perfect square trinomials",
                "Applies to mental math: 103×97 = (100+3)(100-3) = 10000-9",
                "Solves equations by factorising: x²-16=0 → (x+4)(x-4)=0",
                "Verifies by expanding back"
              ]
            },
            developing: {
              quantitative: [
                "4-5 correct factorisations with hints",
                "Misses some non-applicable cases",
                "Struggles with application problems"
              ],
              qualitative: [
                "Recognizes pattern but needs verification",
                "Takes square roots but unsure of sign placement",
                "Attempts to factorise a²+b² incorrectly",
                "Can factorise but doesn't see applications",
                "Needs guidance for mental math shortcuts"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot recognize difference of squares pattern",
                "Attempts to factorise sum of squares",
                "Makes factorisation errors"
              ],
              qualitative: [
                "Cannot identify when expression is a²-b²",
                "Does not take square roots correctly",
                "Writes incorrect factors",
                "Confuses with perfect square factorisation",
                "Cannot apply to problem-solving contexts",
                "No understanding of mental math applications"
              ]
            }
          },
          learningObjectives: [
            "Recognize difference of squares pattern: a² - b²",
            "Check two conditions: subtraction and both perfect squares",
            "Factorise a² - b² as (a + b)(a - b)",
            "Distinguish from sum of squares (cannot factorise)",
            "Apply to mental math shortcuts",
            "Solve equations using factorisation",
            "Use for consecutive square differences: n²-(n-1)²=2n-1",
            "Verify factorisation by expanding"
          ],
          relevantFormulas: [
            "a² - b² = (a + b)(a - b)",
            "a² + b² cannot be factorised (sum of squares)",
            "Recognition: Two terms, both perfect squares, subtraction",
            "Mental math: (100+n)(100-n) = 10000 - n²",
            "Consecutive squares: n² - (n-1)² = 2n - 1",
            "Examples: x²-9=(x+3)(x-3), 25y²-16=(5y+4)(5y-4)"
          ],
          sampleProblems: [
            {
              problem: "Factorise x² - 64"
            },
            {
              problem: "Factorise 49a² - 36b²"
            },
            {
              problem: "Calculate 103 × 97 using difference of squares"
            },
            {
              problem: "Find 50² - 49² without calculating squares first"
            },
            {
              problem: "Solve x² - 9y² = 13 for positive integers x and y"
            },
            {
              problem: "Explain why x² + 25 cannot be factorised"
            }
          ],
          availableTools: ["factoringVisualizer", "algebraExpression"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Discovering (a+b)(a-b) (intermediate) - Understand middle term cancellation",
      "2. Expanding with identity (intermediate) - Apply as computational shortcut",
      "3. Factorising & Applications (intermediate-to-advanced) - Recognize pattern and solve problems"
    ],

    keyFormulas: `• (a + b)(a - b) = a² - b² (Difference of Squares Identity)
• Middle terms cancel: -ab + ab = 0
• Factorisation: a² - b² = (a + b)(a - b)
• Cannot factorise: a² + b² (sum of squares)
• Mental math: n² - (n-1)² = 2n - 1 (consecutive squares)
• Applications: Quick multiplication, solving equations, number patterns
• Geometric proof: L-shaped region rearranged into rectangle`
  }

};

// Export final complete config
export const S2_EXPANSION_FACTORISATION_SUBTOPICS = S2_MATH_EXPANSION_FACTORISATION_SUBTOPICS;
