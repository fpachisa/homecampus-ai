/**
 * S3 Mathematics - Surds and Radicals Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 */

// Type exports
export type SurdsRadicalsTopicId =
  | 's3-math-surds-fundamentals'
  | 's3-math-surds-simplifying'
  | 's3-math-surds-addition-subtraction'
  | 's3-math-surds-multiplication-division'
  | 's3-math-surds-rationalizing'
  | 's3-math-surds-mixed-operations';

// Topic-specific tutor customization (overrides base)
export const SURDS_RADICALS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Surds and Radicals.

Teaching Approach:
- Guide students to discover solutions through questioning, not direct instruction
- Provide progressive hints only when students are stuck
- Celebrate insights and encourage perseverance
- Use visual representations to help students understand surd simplification
- Emphasize the "why" behind rationalization, not just the "how"

**Text-to-Speech Guidelines:**
- Spell out surd expressions clearly: "square root of two" not "√2"
- Say "a times the square root of b" for a√b
- Say "rationalize the denominator" not "make the denominator rational"
- Avoid special symbols in speech.text - spell them out
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), use proper surd notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding (not for every question).
IMPORTANT: Use the technical name (e.g., "numberLine") in the toolName field, NOT the display name.`
};

// Available math tools for this topic
export const SURDS_RADICALS_MATH_TOOLS = [
  "numberLine"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S3_MATH_SURDS_RADICALS_SUBTOPICS = {

  's3-math-surds-fundamentals': {
    displayName: 'Understanding Surds',
    topicName: 'surds, radicals, and square roots',

    progressionStructure: {
      sections: [
        {
          id: "surd-basics",
          title: "Understanding Surds and Radicals",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies surds, distinguishes rational from irrational roots in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct surd identifications without hints",
                "Consistent recognition of perfect squares"
              ],
              qualitative: [
                "Correctly identifies when √a is rational (a is perfect square)",
                "Recognizes surds as irrational numbers",
                "Understands decimal representation is non-terminating, non-repeating",
                "Distinguishes √16 = 4 (rational) from √15 (surd)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on perfect squares"],
              qualitative: [
                "Understands concept but uncertain about specific numbers",
                "Needs prompting for perfect square identification",
                "Can determine after checking if square root simplifies"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect identifications", "Cannot distinguish"],
              qualitative: [
                "Confuses rational and irrational roots",
                "Does not understand perfect squares",
                "Cannot identify surds correctly"
              ]
            }
          },
          learningObjectives: [
            "Define a surd as the square root of a number that is NOT a perfect square",
            "Recognize that surds are irrational numbers",
            "Identify perfect squares (1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144...)",
            "Distinguish between √a (where a is perfect square) and surds",
            "Understand that surds have non-terminating, non-repeating decimal expansions"
          ],
          relevantFormulas: [
            "Perfect squares: 1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25, ..., 12² = 144",
            "√(perfect square) = rational number (NOT a surd)",
            "√(non-perfect square) = surd (irrational number)",
            "Examples: √2, √3, √5, √7, √10 are surds",
            "Examples: √4 = 2, √9 = 3, √16 = 4 are NOT surds"
          ],
          availableTools: []
        },
        {
          id: "surd-properties",
          title: "Properties of Square Roots",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["surd-basics"],
          masterySignals: "Student applies √(ab) = √a × √b and √(a/b) = √a/√b correctly in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of properties without hints",
                "Consistent accurate use of multiplication/division properties"
              ],
              qualitative: [
                "Correctly applies √(ab) = √a × √b",
                "Correctly applies √(a/b) = √a / √b",
                "Understands these properties work in both directions",
                "Can combine roots: √4 × √9 = √36 = 6"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on which property to use"],
              qualitative: [
                "Knows properties but uncertain when to apply",
                "Needs prompting for direction (split vs combine)",
                "Can apply once property is identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect applications", "Confuses properties"],
              qualitative: [
                "Does not understand multiplication property",
                "Confuses √(a+b) with √a + √b (common error)",
                "Cannot apply division property correctly"
              ]
            }
          },
          learningObjectives: [
            "Apply multiplication property: √(ab) = √a × √b",
            "Apply division property: √(a/b) = √a / √b (b ≠ 0)",
            "Understand properties work in both directions (split or combine)",
            "Recognize that √(a + b) ≠ √a + √b (common mistake)",
            "Use properties to evaluate expressions like √(16 × 25)"
          ],
          relevantFormulas: [
            "√(ab) = √a × √b (multiplication property)",
            "√(a/b) = √a / √b, where b ≠ 0 (division property)",
            "√a × √a = a (perfect square property)",
            "Example: √(4 × 9) = √4 × √9 = 2 × 3 = 6",
            "Example: √(25/4) = √25 / √4 = 5/2"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Surd Basics (foundational) - Identify surds, distinguish from rational roots",
      "2. Surd Properties (foundational→intermediate) - Apply multiplication and division properties"
    ],

    keyFormulas: `• Surd = √(non-perfect square) = irrational number
                  • Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144
                  • √(ab) = √a × √b (multiplication property)
                  • √(a/b) = √a / √b, b ≠ 0 (division property)
                  • √a × √a = a
                  • Note: √(a + b) ≠ √a + √b`
  },

  's3-math-surds-simplifying': {
    displayName: 'Simplifying Surds',
    topicName: 'simplifying surds and extracting perfect squares',

    progressionStructure: {
      sections: [
        {
          id: "perfect-square-extraction",
          title: "Extracting Perfect Square Factors",
          difficulty: "intermediate",
          prerequisites: ["surd-properties"],
          masterySignals: "Student simplifies surds by extracting perfect squares in 3+ problems without hints",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ surds simplified correctly without hints",
                "Consistent identification of largest perfect square factor"
              ],
              qualitative: [
                "Identifies perfect square factors (4, 9, 16, 25...)",
                "Applies √(a×b) = √a × √b to extract perfect squares",
                "Simplifies √8 = √(4×2) = 2√2 correctly",
                "Recognizes when surd is already in simplest form"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on factorization"],
              qualitative: [
                "Understands concept but struggles to find factors",
                "Needs prompting for perfect square identification",
                "Can simplify once factors are identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect simplifications", "Cannot factor"],
              qualitative: [
                "Cannot identify perfect square factors",
                "Does not understand simplification process",
                "Confuses √8 with 8 or other errors"
              ]
            }
          },
          learningObjectives: [
            "Identify perfect square factors of numbers",
            "Apply √(ab) = √a × √b to split surds",
            "Extract the largest perfect square factor",
            "Simplify surds: √8 = √(4×2) = 2√2",
            "Recognize when a surd is in simplest form (no perfect square factors)"
          ],
          relevantFormulas: [
            "√8 = √(4×2) = 2√2",
            "√12 = √(4×3) = 2√3",
            "√18 = √(9×2) = 3√2",
            "√20 = √(4×5) = 2√5",
            "√27 = √(9×3) = 3√3",
            "√32 = √(16×2) = 4√2",
            "√45 = √(9×5) = 3√5",
            "√50 = √(25×2) = 5√2",
            "Simplest form: radicand has no perfect square factors"
          ],
          availableTools: []
        },
        {
          id: "simplifying-complex-surds",
          title: "Simplifying Complex Surds",
          difficulty: "intermediate",
          prerequisites: ["perfect-square-extraction"],
          masterySignals: "Student simplifies surds with large radicands and multiple factors in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 complex surds simplified correctly",
                "Consistent use of prime factorization or repeated factoring"
              ],
              qualitative: [
                "Uses prime factorization for complex numbers",
                "Identifies pairs of prime factors",
                "Simplifies √72 = √(36×2) = 6√2 correctly",
                "Handles surds with variables: √(4x²) = 2x"
              ]
            },
            developing: {
              quantitative: ["1 complex surd simplified with hints"],
              qualitative: [
                "Understands process but struggles with large numbers",
                "Needs prompting for prime factorization",
                "Can simplify once factorization is shown"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Cannot handle complexity"],
              qualitative: [
                "Cannot factor large numbers",
                "Does not understand prime factorization method",
                "Makes errors with multiple factors"
              ]
            }
          },
          learningObjectives: [
            "Use prime factorization to simplify complex surds",
            "Identify pairs of identical prime factors",
            "Extract each pair as a single factor outside the root",
            "Simplify surds like √72, √98, √128, √200",
            "Simplify surds with variables: √(a²) = a, √(a²b) = a√b"
          ],
          relevantFormulas: [
            "Prime factorization method: √72 = √(2³ × 3²) = 2×3√2 = 6√2",
            "√98 = √(2 × 7²) = 7√2",
            "√128 = √(2⁷) = √(2⁶ × 2) = 8√2",
            "√200 = √(2³ × 5²) = 2×5√2 = 10√2",
            "With variables: √(x²) = x (for x ≥ 0)",
            "√(4x²) = 2x, √(9a²b²) = 3ab",
            "Each pair of identical factors comes out as one factor"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Perfect Square Extraction (intermediate) - Extract perfect square factors from surds",
      "2. Complex Surds (intermediate) - Use prime factorization for large numbers and variables"
    ],

    keyFormulas: `• √(ab) = √a × √b (split to extract perfect squares)
• √8 = √(4×2) = 2√2
• √50 = √(25×2) = 5√2
• √72 = √(36×2) = 6√2
• Prime factorization: find pairs of identical factors
• Each pair comes out as one factor
• √(x²) = x (for x ≥ 0)
• Simplest form: no perfect square factors in radicand`
  },

  's3-math-surds-addition-subtraction': {
    displayName: 'Adding and Subtracting Surds',
    topicName: 'adding and subtracting like and unlike surds',

    progressionStructure: {
      sections: [
        {
          id: "like-surds",
          title: "Adding and Subtracting Like Surds",
          difficulty: "intermediate",
          prerequisites: ["simplifying-complex-surds"],
          masterySignals: "Student combines like surds correctly in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ like surd combinations correct without hints",
                "Consistent accurate coefficient arithmetic"
              ],
              qualitative: [
                "Recognizes like surds (same radicand)",
                "Combines coefficients: a√c + b√c = (a+b)√c",
                "Simplifies 3√2 + 5√2 = 8√2 correctly",
                "Understands radicand stays unchanged"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on combining coefficients"],
              qualitative: [
                "Understands like surds concept but makes arithmetic errors",
                "Needs prompting to keep radicand same",
                "Can combine once process is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect combinations", "Changes radicand"],
              qualitative: [
                "Does not understand like surds concept",
                "Tries to combine unlike surds",
                "Makes errors like 2√3 + 3√3 = 5√6"
              ]
            }
          },
          learningObjectives: [
            "Identify like surds (same radicand)",
            "Apply rule: a√c + b√c = (a + b)√c",
            "Combine coefficients while keeping radicand unchanged",
            "Add and subtract like surds: 5√7 + 3√7 = 8√7",
            "Recognize that unlike surds cannot be combined"
          ],
          relevantFormulas: [
            "Like surds: same radicand (number under √)",
            "a√c + b√c = (a + b)√c",
            "a√c - b√c = (a - b)√c",
            "Examples: 3√2 + 5√2 = 8√2",
            "7√5 - 2√5 = 5√5",
            "√7 + 4√7 = 5√7",
            "Unlike surds: 2√3 + 5√2 cannot be combined (different radicands)"
          ],
          availableTools: []
        },
        {
          id: "unlike-surds-simplification",
          title: "Simplifying Before Adding Unlike Surds",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["like-surds"],
          masterySignals: "Student simplifies unlike surds first, then combines in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 problems solved correctly without hints",
                "Consistent simplification before combining"
              ],
              qualitative: [
                "Simplifies each surd before attempting to combine",
                "Recognizes that √8 + √18 = 2√2 + 3√2 = 5√2",
                "Handles multi-term expressions systematically",
                "Identifies which terms remain unlike after simplification"
              ]
            },
            developing: {
              quantitative: ["1 problem solved with hints on simplification"],
              qualitative: [
                "Understands process but forgets to simplify first",
                "Needs prompting to check for simplification",
                "Can complete once reminded to simplify"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Skips simplification"],
              qualitative: [
                "Does not simplify surds before combining",
                "Cannot recognize when unlike surds become like",
                "Makes errors in multi-step process"
              ]
            }
          },
          learningObjectives: [
            "Always simplify each surd first before attempting to combine",
            "Recognize that unlike surds may become like surds after simplification",
            "Simplify √8 + √18 by first writing 2√2 + 3√2",
            "Handle multi-term expressions: simplify all terms, then group like surds",
            "Identify when surds remain unlike after simplification (cannot combine)"
          ],
          sampleProblems: [
            {
              problem: "Simplify: √12 + √27"
            },
            {
              problem: "Simplify: √50 - √32 + √18"
            },
            {
              problem: "Simplify: 2√8 + √18 - √32"
            }
          ],
          relevantFormulas: [
            "Step 1: Simplify each surd individually",
            "Step 2: Identify like surds (same radicand)",
            "Step 3: Combine like surds",
            "√8 + √18 = 2√2 + 3√2 = 5√2",
            "√12 + √27 = 2√3 + 3√3 = 5√3",
            "√50 - √32 = 5√2 - 4√2 = √2",
            "If surds remain unlike after simplification, leave as separate terms"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Like Surds (intermediate) - Combine like surds by adding/subtracting coefficients",
      "2. Unlike Surds (intermediate→advanced) - Simplify first to create like surds, then combine"
    ],

    keyFormulas: `• Like surds: same radicand (e.g., 2√3 and 5√3)
• a√c + b√c = (a + b)√c
• Unlike surds: different radicands (e.g., √2 and √3)
• ALWAYS simplify first: √8 + √18 = 2√2 + 3√2 = 5√2
• Multi-term: simplify all, then group like surds
• If surds stay unlike after simplification, leave separate`
  },

  's3-math-surds-multiplication-division': {
    displayName: 'Multiplying and Dividing Surds',
    topicName: 'multiplication and division of surds',

    progressionStructure: {
      sections: [
        {
          id: "multiplying-surds",
          title: "Multiplying Surds",
          difficulty: "intermediate",
          prerequisites: ["simplifying-complex-surds"],
          masterySignals: "Student multiplies surds using √a × √b = √(ab) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ multiplications correct without hints",
                "Consistent simplification of results"
              ],
              qualitative: [
                "Correctly applies √a × √b = √(ab)",
                "Multiplies coefficients separately from radicands",
                "Simplifies results: √6 × √10 = √60 = 2√15",
                "Handles expressions like 3√2 × 4√5 = 12√10"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on simplification"],
              qualitative: [
                "Knows multiplication rule but forgets to simplify",
                "Needs prompting for coefficient handling",
                "Can complete once process is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect multiplications", "Cannot simplify"],
              qualitative: [
                "Does not understand √a × √b = √(ab)",
                "Confuses multiplication with addition",
                "Cannot handle coefficients correctly"
              ]
            }
          },
          learningObjectives: [
            "Apply multiplication rule: √a × √b = √(ab)",
            "Multiply coefficients separately: (a√b)(c√d) = ac√(bd)",
            "Simplify products after multiplying",
            "Recognize √a × √a = a (eliminates radical)",
            "Multiply expressions like 2√3 × 5√6"
          ],
          relevantFormulas: [
            "√a × √b = √(ab)",
            "(a√b) × (c√d) = ac√(bd)",
            "√a × √a = a",
            "Examples: √2 × √3 = √6",
            "√5 × √5 = 5",
            "3√2 × 4√5 = 12√10",
            "√6 × √10 = √60 = √(4×15) = 2√15",
            "Always simplify the result"
          ],
          availableTools: []
        },
        {
          id: "dividing-surds",
          title: "Dividing Surds",
          difficulty: "intermediate",
          prerequisites: ["multiplying-surds"],
          masterySignals: "Student divides surds using √a ÷ √b = √(a/b) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ divisions correct without hints",
                "Consistent simplification of quotients"
              ],
              qualitative: [
                "Correctly applies √a / √b = √(a/b)",
                "Divides coefficients separately from radicands",
                "Simplifies √12 / √3 = √4 = 2",
                "Handles 12√6 / 3√2 = 4√3 correctly"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Knows division rule but struggles with simplification",
                "Needs prompting for coefficient division",
                "Can complete once structure is shown"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect divisions", "Cannot simplify quotients"],
              qualitative: [
                "Does not understand division property",
                "Cannot handle coefficients in division",
                "Makes errors simplifying √(a/b)"
              ]
            }
          },
          learningObjectives: [
            "Apply division rule: √a / √b = √(a/b), where b ≠ 0",
            "Divide coefficients separately: (a√b) / (c√d) = (a/c)√(b/d)",
            "Simplify quotients after dividing",
            "Recognize when quotient simplifies to rational number",
            "Divide expressions like 15√10 / 5√2"
          ],
          relevantFormulas: [
            "√a / √b = √(a/b), where b ≠ 0",
            "(a√b) / (c√d) = (a/c)√(b/d)",
            "Examples: √12 / √3 = √(12/3) = √4 = 2",
            "√50 / √2 = √(50/2) = √25 = 5",
            "12√6 / 3√2 = (12/3)√(6/2) = 4√3",
            "15√10 / 5√2 = (15/5)√(10/2) = 3√5",
            "Always simplify the quotient"
          ],
          availableTools: []
        },
        {
          id: "expanding-brackets",
          title: "Expanding Brackets with Surds",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["multiplying-surds"],
          masterySignals: "Student expands expressions like (a + √b)(c + √d) correctly in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 expansions correct without hints",
                "Consistent use of FOIL or distributive property"
              ],
              qualitative: [
                "Uses FOIL correctly for double brackets",
                "Applies distributive property for single brackets",
                "Simplifies (√2 + 3)(√2 + 5) = 2 + 5√2 + 3√2 + 15 = 17 + 8√2",
                "Recognizes difference of squares: (a + √b)(a - √b) = a² - b"
              ]
            },
            developing: {
              quantitative: ["1 expansion correct with hints on FOIL"],
              qualitative: [
                "Understands concept but makes errors in expansion",
                "Needs prompting for combining like surds",
                "Can complete once method is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect expansions", "Cannot use FOIL"],
              qualitative: [
                "Does not understand bracket expansion",
                "Cannot identify like terms after expansion",
                "Makes errors with difference of squares"
              ]
            }
          },
          learningObjectives: [
            "Expand single brackets: √3(2 + √3) = 2√3 + 3",
            "Expand double brackets using FOIL: (First, Outer, Inner, Last)",
            "Simplify after expansion by combining like surds",
            "Apply difference of squares: (a + √b)(a - √b) = a² - b",
            "Recognize when expansion results in rational number"
          ],
          sampleProblems: [
            {
              problem: "Expand and simplify: √5(2 + √5)"
            },
            {
              problem: "Expand and simplify: (√3 + 2)(√3 + 4)"
            },
            {
              problem: "Expand and simplify: (5 + √7)(5 - √7)"
            }
          ],
          relevantFormulas: [
            "Single bracket: a(b + c) = ab + ac",
            "√3(2 + √3) = 2√3 + 3",
            "FOIL for (a + b)(c + d): ac + ad + bc + bd",
            "(√2 + 3)(√2 + 5) = 2 + 5√2 + 3√2 + 15 = 17 + 8√2",
            "Difference of squares: (a + √b)(a - √b) = a² - b",
            "(3 + √5)(3 - √5) = 9 - 5 = 4",
            "Always combine like surds after expansion"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Multiplying Surds (intermediate) - Use √a × √b = √(ab), simplify products",
      "2. Dividing Surds (intermediate) - Use √a / √b = √(a/b), simplify quotients",
      "3. Expanding Brackets (intermediate→advanced) - FOIL, distributive property, difference of squares"
    ],

    keyFormulas: `• Multiplication: √a × √b = √(ab)
• (a√b) × (c√d) = ac√(bd)
• √a × √a = a
• Division: √a / √b = √(a/b), b ≠ 0
• (a√b) / (c√d) = (a/c)√(b/d)
• Expansion: use distributive property or FOIL
• Difference of squares: (a + √b)(a - √b) = a² - b
• Always simplify results`
  },

  's3-math-surds-rationalizing': {
    displayName: 'Rationalizing Denominators',
    topicName: 'rationalizing denominators with surds',

    progressionStructure: {
      sections: [
        {
          id: "monomial-denominators",
          title: "Rationalizing Monomial Denominators",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["dividing-surds"],
          masterySignals: "Student rationalizes denominators like 1/√a correctly in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ rationalizations correct without hints",
                "Consistent application of multiply by √b/√b"
              ],
              qualitative: [
                "Multiplies numerator and denominator by √b",
                "Simplifies 1/√3 = √3/3 correctly",
                "Rationalizes fractions with coefficients: 4/√5 = 4√5/5",
                "Simplifies surds in denominator before rationalizing if needed"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on method"],
              qualitative: [
                "Understands concept but forgets to simplify first",
                "Needs prompting for what to multiply by",
                "Can complete once √b/√b is identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect rationalizations", "Cannot eliminate surd"],
              qualitative: [
                "Does not understand rationalization process",
                "Multiplies by wrong expression",
                "Cannot simplify after rationalization"
              ]
            }
          },
          learningObjectives: [
            "Understand why we rationalize (standard form)",
            "Multiply numerator and denominator by √b to eliminate √b from denominator",
            "Rationalize 1/√a = √a/a",
            "Rationalize a/√b = (a√b)/b",
            "Simplify surds in denominator before rationalizing (e.g., 6/√8 = 6/(2√2))"
          ],
          relevantFormulas: [
            "a/√b = (a/√b) × (√b/√b) = (a√b)/b",
            "1/√2 = √2/2",
            "1/√3 = √3/3",
            "5/√2 = 5√2/2",
            "4/√5 = 4√5/5",
            "Simplify denominator first: 6/√8 = 6/(2√2) = 3/√2 = 3√2/2",
            "Multiplying by √b/√b = 1 (doesn't change value)"
          ],
          availableTools: []
        },
        {
          id: "binomial-denominators",
          title: "Rationalizing Binomial Denominators",
          difficulty: "advanced",
          prerequisites: ["monomial-denominators", "expanding-brackets"],
          masterySignals: "Student uses conjugates to rationalize denominators like 1/(a + √b) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 conjugate rationalizations correct without hints",
                "Consistent application of difference of squares"
              ],
              qualitative: [
                "Identifies conjugate: (a + √b) → (a - √b)",
                "Multiplies by conjugate/conjugate",
                "Applies difference of squares: (a + √b)(a - √b) = a² - b",
                "Simplifies final answer: 1/(2 + √3) = (2 - √3)/(4 - 3) = 2 - √3"
              ]
            },
            developing: {
              quantitative: ["1 problem solved with hints on conjugate"],
              qualitative: [
                "Understands conjugate concept but struggles with algebra",
                "Needs prompting for difference of squares",
                "Can complete once conjugate is identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Cannot use conjugates"],
              qualitative: [
                "Does not understand conjugate method",
                "Cannot identify correct conjugate",
                "Makes errors in difference of squares expansion"
              ]
            }
          },
          learningObjectives: [
            "Identify the conjugate of (a + √b) as (a - √b)",
            "Multiply numerator and denominator by conjugate",
            "Apply difference of squares to eliminate surd from denominator",
            "Simplify expressions like 1/(3 + √2) = (3 - √2)/7",
            "Handle more complex numerators and denominators"
          ],
          sampleProblems: [
            {
              problem: "Rationalize: 1/(1 + √3)"
            },
            {
              problem: "Rationalize: 2/(5 - √2)"
            },
            {
              problem: "Rationalize: (√6 + √2)/(√6 - √2)"
            }
          ],
          relevantFormulas: [
            "Conjugate of (a + √b) is (a - √b)",
            "Conjugate of (a - √b) is (a + √b)",
            "Difference of squares: (a + √b)(a - √b) = a² - b",
            "1/(a + √b) = (a - √b)/(a² - b)",
            "Example: 1/(2 + √3) = (2 - √3)/(4 - 3) = 2 - √3",
            "Example: 6/(3 + √2) = 6(3 - √2)/(9 - 2) = 6(3 - √2)/7",
            "Surds eliminate because (√b)(√b) = b"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Monomial Denominators (intermediate→advanced) - Multiply by √b/√b to eliminate surds",
      "2. Binomial Denominators (advanced) - Use conjugates and difference of squares"
    ],

    keyFormulas: `• Rationalize = eliminate surds from denominator
• Monomial: a/√b = (a√b)/b (multiply by √b/√b)
• Conjugate of (a + √b) is (a - √b)
• Binomial: multiply by conjugate/conjugate
• Difference of squares: (a + √b)(a - √b) = a² - b
• Example: 1/(2 + √3) = (2 - √3)/(4-3) = 2 - √3
• Always simplify final answer`
  },

  's3-math-surds-mixed-operations': {
    displayName: 'Mixed Operations with Surds',
    topicName: 'combined operations and problem solving with surds',

    progressionStructure: {
      sections: [
        {
          id: "combined-operations",
          title: "Combined Surd Operations",
          difficulty: "advanced",
          prerequisites: ["binomial-denominators"],
          masterySignals: "Student solves multi-step problems combining simplification, operations, and rationalization in 2-3 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 multi-step problems solved correctly",
                "Consistent systematic approach"
              ],
              qualitative: [
                "Follows systematic order: simplify → expand → combine → rationalize",
                "Simplifies all surds before combining operations",
                "Handles complex expressions like (√50 + √18)(√2)",
                "Rationalizes and simplifies final answers"
              ]
            },
            developing: {
              quantitative: ["1 problem solved with hints on order of operations"],
              qualitative: [
                "Understands individual operations but struggles with combinations",
                "Needs prompting for systematic approach",
                "Can complete once steps are broken down"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Cannot manage complexity"],
              qualitative: [
                "Does not have systematic approach",
                "Skips simplification steps",
                "Makes errors combining multiple operations"
              ]
            }
          },
          learningObjectives: [
            "Apply systematic approach: simplify → expand → combine → rationalize → simplify",
            "Simplify all surds before performing operations",
            "Combine multiple operations in correct order",
            "Avoid common errors: √a + √b ≠ √(a+b)",
            "Check final answer is fully simplified with rational denominator"
          ],
          sampleProblems: [
            {
              problem: "Simplify: (√45 + √20)(√5)"
            },
            {
              problem: "Expand and simplify: (√18 - √2)(√8 + √2)"
            },
            {
              problem: "Rationalize and simplify: (√12 + √3)/(√3)"
            }
          ],
          relevantFormulas: [
            "Order: Simplify → Expand → Combine → Rationalize → Simplify",
            "Always simplify surds first",
            "Common mistake: √a + √b ≠ √(a + b)",
            "Common mistake: √a × √b ≠ ab",
            "Final answer should have: simplified surds, rational denominator, like terms combined",
            "Check: no perfect square factors, no surds in denominator"
          ],
          availableTools: []
        },
        {
          id: "problem-solving",
          title: "Problem Solving with Surds",
          difficulty: "advanced",
          prerequisites: ["combined-operations"],
          masterySignals: "Student applies surds to solve real-world and geometric problems in 2-3 cases",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 application problems solved correctly",
                "Consistent accurate setup and solution"
              ],
              qualitative: [
                "Applies Pythagoras theorem with surds",
                "Solves for diagonal of square: d = s√2",
                "Calculates areas/perimeters involving surds",
                "Interprets and simplifies answers in context",
                "Leaves answers in surd form when appropriate"
              ]
            },
            developing: {
              quantitative: ["1 problem solved with hints on setup"],
              qualitative: [
                "Understands problem but struggles with surd manipulation",
                "Needs prompting for which formula to use",
                "Can solve once equation is set up"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect solutions", "Cannot set up"],
              qualitative: [
                "Cannot translate word problem to equations",
                "Does not recognize when to use surds",
                "Makes errors in geometric applications"
              ]
            }
          },
          learningObjectives: [
            "Apply surds in geometric contexts (diagonals, heights, areas)",
            "Use Pythagoras theorem with surd results",
            "Solve for unknown sides involving surds",
            "Calculate areas and perimeters with surd dimensions",
            "Interpret answers: when to use surd form vs decimal approximation"
          ],
          sampleProblems: [
            {
              problem: "A square has diagonal 10 cm. Find its side length in surd form and exact area."
            },
            {
              problem: "An equilateral triangle has side length 6 cm. Find its exact height. (Hint: height = (√3/2) × side)"
            },
            {
              problem: "A rectangle has sides 2√3 cm and √3 cm. Find its exact perimeter and area."
            }
          ],
          relevantFormulas: [
            "Square diagonal: d = s√2, so s = d/√2 = d√2/2",
            "Equilateral triangle height: h = (√3/2)s",
            "Pythagoras: a² + b² = c²",
            "Area of square: A = s²",
            "Perimeter of rectangle: P = 2(l + w)",
            "Leave in surd form for exact answers",
            "Use decimal approximation when specified"
          ],
          availableTools: ["numberLine"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Combined Operations (advanced) - Multi-step problems with all surd operations",
      "2. Problem Solving (advanced) - Real-world and geometric applications"
    ],

    keyFormulas: `• Systematic approach: Simplify → Expand → Combine → Rationalize → Simplify
• Always simplify surds first
• Avoid: √a + √b ≠ √(a+b), √a × √b ≠ ab
• Final answer: simplified surds, rational denominator
• Geometry: square diagonal d = s√2
• Equilateral triangle height h = (√3/2)s
• Leave exact answers in surd form when appropriate`
  }
};

// Export for backward compatibility
export const S3_MATH_SURDS_RADICALS: Record<SurdsRadicalsTopicId, any> = S3_MATH_SURDS_RADICALS_SUBTOPICS;

// Export config that can be used by PromptLibrary
export const S3_MATH_SURDS_RADICALS_CONFIG = {
  TUTOR_ROLE: SURDS_RADICALS_TUTOR_CUSTOMIZATION.teachingPhilosophy,
  QUESTION_AGENT_ROLE: null, // Uses base from prompt-library
  SOLUTION_AGENT_ROLE: null, // Uses base from prompt-library
  MATH_TOOLS_AVAILABLE: SURDS_RADICALS_MATH_TOOLS,
  // FORMATTING_RULES: imported from prompt-library
  // INTERACTION_PROTOCOL: imported from prompt-library
};
