/**
 * S3 Mathematics - Sets and Venn Diagrams Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 */

// Type exports
export type SetsVennDiagramsTopicId =
  | 's3-math-sets-fundamentals'
  | 's3-math-sets-complement'
  | 's3-math-sets-intersection-union'
  | 's3-math-sets-special-number-sets'
  | 's3-math-sets-interval-notation'
  | 's3-math-sets-venn-diagrams'
  | 's3-math-sets-venn-regions'
  | 's3-math-sets-numbers-in-regions'
  | 's3-math-sets-problem-solving';

// Topic-specific tutor customization (overrides base)
export const SETS_VENN_DIAGRAMS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Sets and Venn Diagrams.

Teaching Approach:
- Guide students to discover solutions through questioning, not direct instruction
- Provide progressive hints only when students are stuck
- Celebrate insights and encourage perseverance
- Use relatable, real-world contexts (surveys, preferences, classifications)

**Text-to-Speech Guidelines:**
- Spell out set notation clearly: "A intersection B" not "A∩B"
- Say "A prime" for A', "A union B" for A∪B, "A is a subset of B" for A⊆B
- Avoid special symbols in speech.text - spell them out
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), use proper set notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding (not for every question).
IMPORTANT: Use the technical name (e.g., "vennDiagram") in the toolName field, NOT the display name.`
};

// Available math tools for this topic
export const SETS_VENN_DIAGRAMS_MATH_TOOLS = [
  "vennDiagram",
  "vennDiagram3",
  "numberLine",
  "setVisualizer"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS = {

  's3-math-sets-fundamentals': {
    displayName: 'Sets',
    topicName: 'sets, set notation, and set relationships',

    progressionStructure: {
      sections: [
        {
          id: "set-fundamentals",
          title: "Set Fundamentals and Notation",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies set elements, uses ∈/∉ notation, and counts elements in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct set identifications without hints",
                "Consistent accurate use of ∈ and ∉"
              ],
              qualitative: [
                "Correctly lists elements in set notation { }",
                "Accurately determines membership (∈ or ∉)",
                "Correctly counts n(A) for finite sets",
                "Distinguishes finite vs infinite sets"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on notation"],
              qualitative: [
                "Understands concept but inconsistent with notation",
                "Needs prompting for proper bracket usage",
                "Can count elements but struggles with set-builder notation"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Cannot use notation"],
              qualitative: [
                "Confuses ∈ with ⊆ or other symbols",
                "Cannot list elements correctly",
                "Does not understand element counting"
              ]
            }
          },
          learningObjectives: [
            "Define a set as a collection of elements",
            "Use curly brackets { } to write sets",
            "Apply membership notation: ∈ (is an element of) and ∉ (is not an element of)",
            "Count elements using n(A) notation",
            "Distinguish between finite and infinite sets",
            "List elements of sets defined by descriptions"
          ],
          relevantFormulas: [
            "Set notation: A = {a, b, c, ...}",
            "a ∈ A means 'a is an element of set A'",
            "a ∉ A means 'a is not an element of set A'",
            "n(A) = number of elements in set A",
            "Finite set: countable number of elements",
            "Infinite set: unlimited number of elements (e.g., ℕ = {0, 1, 2, 3, ...})"
          ],
          availableTools: ["setVisualizer"]
        },
        {
          id: "set-relationships",
          title: "Set Relationships and Properties",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["set-fundamentals"],
          masterySignals: "Student correctly identifies equal sets, subsets, and empty set in 3+ scenarios",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 correct subset identifications without hints",
                "Consistent recognition of equal sets"
              ],
              qualitative: [
                "Correctly applies subset notation A ⊆ B",
                "Understands order doesn't matter for equality",
                "Recognizes empty set as subset of all sets",
                "Can determine if two sets are equal",
                "Counts subsets using 2^n formula"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints"],
              qualitative: [
                "Understands subset concept but struggles with notation",
                "Needs prompting for empty set properties",
                "Can verify equality but uncertain about subset relationship"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect identifications", "Requests solution early"],
              qualitative: [
                "Confuses subset with element membership",
                "Does not understand empty set properties",
                "Cannot determine set equality correctly"
              ]
            }
          },
          learningObjectives: [
            "Recognize equal sets (same elements, any order)",
            "Apply subset notation: A ⊆ B",
            "Understand that every element of A must be in B for A ⊆ B",
            "Recognize the empty set: ∅ or { }",
            "Understand ∅ ⊆ A for any set A",
            "Calculate number of subsets using 2^n formula"
          ],
          relevantFormulas: [
            "A = B if both sets contain exactly the same elements",
            "A ⊆ B means 'every element of A is also in B'",
            "Empty set: ∅ or { }",
            "∅ ⊆ A for any set A",
            "A set with n elements has 2^n subsets"
          ],
          availableTools: ["setVisualizer", "vennDiagram"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Set Fundamentals (foundational) - Define sets, use notation ∈/∉, count elements",
      "2. Set Relationships (foundational→intermediate) - Identify equal sets, subsets, empty set"
    ],

    keyFormulas: `• Set notation: A = {a, b, c, ...}
                  • Membership: a ∈ A (is in), a ∉ A (is not in)
                  • Cardinality: n(A) = number of elements
                  • Equal sets: same elements (order doesn't matter)
                  • Subset: A ⊆ B (every element of A is in B)
                  • Empty set: ∅ or { } (no elements)
                  • Number of subsets: 2^n where n = n(A)`
  },

  's3-math-sets-complement': {
    displayName: 'Complement of a Set',
    topicName: 'universal set and set complements',

    progressionStructure: {
      sections: [
        {
          id: "understanding-complements",
          title: "Understanding Complements and Universal Set",
          difficulty: "intermediate",
          prerequisites: ["s3-math-sets-fundamentals"],
          masterySignals: "Student correctly identifies universal set, finds complements, and uses A' notation in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 complements found correctly without hints",
                "Consistent recognition of universal set context"
              ],
              qualitative: [
                "Correctly identifies universal set from problem context",
                "Finds complement A' by excluding A elements from U",
                "Uses A' notation correctly",
                "Explains why complement depends on universal set"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints on universal set"],
              qualitative: [
                "Understands complement concept but uncertain about U",
                "Needs prompting to identify what's NOT in A",
                "Can find complement once U is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Requests solution early"],
              qualitative: [
                "Cannot identify universal set from context",
                "Confuses complement with other set operations",
                "Does not understand A' notation"
              ]
            }
          },
          learningObjectives: [
            "Define the universal set U as all elements under consideration",
            "Understand that U depends on problem context",
            "Find the complement A' = elements in U but not in A",
            "Use complement notation A' correctly",
            "Recognize that complement depends on universal set"
          ],
          relevantFormulas: [
            "Universal set: U = all elements under consideration",
            "Complement: A' = {x ∈ U | x ∉ A}",
            "A' contains all elements of U that are NOT in A"
          ],
          availableTools: ["vennDiagram", "setVisualizer"]
        },
        {
          id: "complement-properties",
          title: "Complement Properties and Formulas",
          difficulty: "intermediate",
          prerequisites: ["understanding-complements"],
          masterySignals: "Student applies n(A') = n(U) - n(A) formula correctly in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 cardinality calculations correct",
                "Consistent formula application"
              ],
              qualitative: [
                "Correctly applies n(A') = n(U) - n(A)",
                "Understands n(A) + n(A') = n(U)",
                "Recognizes finite/infinite set properties",
                "Explains why both A and A' can't be finite if U is infinite"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints on formula"],
              qualitative: [
                "Knows formula but makes calculation errors",
                "Needs prompting for proper rearrangement",
                "Can apply once formula structure is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect calculations", "Cannot apply formula"],
              qualitative: [
                "Does not understand cardinality relationship",
                "Cannot rearrange n(A) + n(A') = n(U)",
                "Does not recognize finite/infinite contradictions"
              ]
            }
          },
          learningObjectives: [
            "Apply formula: n(A') = n(U) - n(A)",
            "Understand relationship: n(A) + n(A') = n(U)",
            "Rearrange formula to find n(A) or n(U)",
            "Recognize that if U is finite and A ⊆ U, then both A and A' are finite",
            "Understand that if U is infinite, at least one of A or A' must be infinite"
          ],
          relevantFormulas: [
            "n(A') = n(U) - n(A)",
            "n(A) + n(A') = n(U)",
            "n(A) = n(U) - n(A')"
          ],
          availableTools: ["vennDiagram"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Understanding Complements (intermediate) - Universal set, finding complements",
      "2. Complement Properties (intermediate) - Apply formulas relating n(A), n(A'), n(U)"
    ],

    keyFormulas: `• Universal set: U = all elements under consideration
• Complement: A' = elements in U but NOT in A
• n(A') = n(U) - n(A)
• n(A) + n(A') = n(U)
• If U is infinite, both A and A' cannot be finite`
  },

  's3-math-sets-intersection-union': {
    displayName: 'Intersection and Union',
    topicName: 'intersection, union, and combined set operations',

    progressionStructure: {
      sections: [
        {
          id: "basic-set-operations",
          title: "Basic Set Operations: Intersection and Union",
          difficulty: "intermediate",
          prerequisites: ["s3-math-sets-fundamentals"],
          masterySignals: "Student correctly finds A ∩ B and A ∪ B in 3+ problems, identifies disjoint sets",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct intersections and unions without hints",
                "Consistent identification of disjoint sets"
              ],
              qualitative: [
                "Correctly finds intersection (elements in BOTH sets)",
                "Correctly finds union (elements in EITHER set)",
                "Recognizes A ∩ B = ∅ means disjoint sets",
                "Applies 'AND' logic for intersection, 'OR' logic for union",
                "Lists elements only once in union"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on operation"],
              qualitative: [
                "Understands concept but confuses ∩ and ∪",
                "Needs prompting for AND vs OR logic",
                "Can find operation once distinction is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Confuses operations"],
              qualitative: [
                "Cannot distinguish intersection from union",
                "Lists elements multiple times in union",
                "Does not understand disjoint sets"
              ]
            }
          },
          learningObjectives: [
            "Find intersection A ∩ B (elements in BOTH A and B)",
            "Find union A ∪ B (elements in EITHER A or B or both)",
            "Recognize disjoint sets when A ∩ B = ∅",
            "Apply 'AND' logic for intersection, 'OR' logic for union",
            "List each element only once in union (even if in both sets)"
          ],
          relevantFormulas: [
            "Intersection: A ∩ B = {x | x ∈ A AND x ∈ B}",
            "Union: A ∪ B = {x | x ∈ A OR x ∈ B}",
            "Disjoint sets: A ∩ B = ∅ (no common elements)",
            "Each element listed once in union"
          ],
          availableTools: ["vennDiagram", "setVisualizer"]
        },
        {
          id: "combined-operations",
          title: "Combined Operations and Cardinality",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["basic-set-operations", "complement-properties"],
          masterySignals: "Student applies n(A ∪ B) = n(A) + n(B) - n(A ∩ B) correctly and evaluates combined operations in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 cardinality calculations correct",
                "Consistent evaluation of combined operations"
              ],
              qualitative: [
                "Correctly applies cardinality formula for union",
                "Evaluates expressions like (A ∪ B)', (A ∩ B)', A ∩ B', A ∪ B'",
                "Explains why we subtract n(A ∩ B) in union formula",
                "Combines multiple operations correctly"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints on formula or order"],
              qualitative: [
                "Knows formula but makes calculation errors",
                "Needs prompting for order of operations",
                "Can evaluate once expression is simplified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Cannot apply formula"],
              qualitative: [
                "Does not understand cardinality formula",
                "Confuses (A ∪ B)' with A' ∪ B'",
                "Cannot evaluate combined operations"
              ]
            }
          },
          learningObjectives: [
            "Apply cardinality formula: n(A ∪ B) = n(A) + n(B) - n(A ∩ B)",
            "Evaluate (A ∪ B)' (elements NOT in either A or B)",
            "Evaluate (A ∩ B)' (elements NOT in both A and B)",
            "Evaluate A ∩ B' (elements in A but NOT in B)",
            "Evaluate A ∪ B' (elements in A OR not in B)",
            "Understand why double-counting requires subtraction"
          ],
          relevantFormulas: [
            "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)",
            "(A ∪ B)' = elements in U but not in A or B",
            "(A ∩ B)' = elements in U but not in both A and B",
            "A ∩ B' = elements in A but not in B",
            "A ∪ B' = elements in A or not in B"
          ],
          availableTools: ["vennDiagram"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Basic Set Operations (intermediate) - Find intersection ∩ and union ∪, identify disjoint sets",
      "2. Combined Operations (intermediate→advanced) - Apply cardinality formula, evaluate complex expressions"
    ],

    keyFormulas: `• Intersection: A ∩ B (elements in BOTH A and B)
• Union: A ∪ B (elements in EITHER A or B)
• Disjoint: A ∩ B = ∅
• Cardinality: n(A ∪ B) = n(A) + n(B) - n(A ∩ B)
• Combined operations: (A ∪ B)', (A ∩ B)', A ∩ B', A ∪ B'`
  },

  's3-math-sets-special-number-sets': {
    displayName: 'Special Number Sets',
    topicName: 'special number sets (natural, integer, rational, real)',

    progressionStructure: {
      sections: [
        {
          id: "integer-sets",
          title: "Integer Sets: ℕ, ℤ, ℤ⁺, ℤ⁻",
          difficulty: "foundational",
          prerequisites: ["s3-math-sets-fundamentals"],
          masterySignals: "Student correctly identifies and uses ℕ, ℤ, ℤ⁺, ℤ⁻ notation in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 correct set identifications without hints",
                "Consistent use of special set notation"
              ],
              qualitative: [
                "Correctly identifies natural numbers ℕ = {0, 1, 2, 3, ...}",
                "Correctly identifies integers ℤ = {..., -2, -1, 0, 1, 2, ...}",
                "Distinguishes ℤ⁺ (positive integers) from ℤ⁻ (negative integers)",
                "Recognizes subset relationships: ℕ ⊆ ℤ⁺ ⊆ ℤ"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints on notation"],
              qualitative: [
                "Understands concept but uncertain about notation",
                "Needs prompting for subset relationships",
                "Confuses ℕ and ℤ⁺ (whether 0 is included)"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect identifications", "Cannot use notation"],
              qualitative: [
                "Confuses natural numbers with integers",
                "Does not understand negative integers",
                "Cannot recognize subset relationships"
              ]
            }
          },
          learningObjectives: [
            "Identify natural numbers: ℕ = {0, 1, 2, 3, ...}",
            "Identify integers: ℤ = {..., -2, -1, 0, 1, 2, ...}",
            "Identify positive integers: ℤ⁺ = {1, 2, 3, ...}",
            "Identify negative integers: ℤ⁻ = {..., -3, -2, -1}",
            "Recognize subset relationships: ℕ ⊆ ℤ⁺ ⊆ ℤ"
          ],
          relevantFormulas: [
            "ℕ = {0, 1, 2, 3, ...} (natural numbers, including 0)",
            "ℤ = {..., -2, -1, 0, 1, 2, ...} (integers)",
            "ℤ⁺ = {1, 2, 3, ...} (positive integers)",
            "ℤ⁻ = {..., -3, -2, -1} (negative integers)",
            "ℕ ⊆ ℤ⁺ ⊆ ℤ"
          ],
          availableTools: ["numberLine", "setVisualizer"]
        },
        {
          id: "rational-real-numbers",
          title: "Rational and Real Numbers: ℚ, ℚ', ℝ",
          difficulty: "intermediate",
          prerequisites: ["integer-sets"],
          masterySignals: "Student correctly identifies rational, irrational, and real numbers in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 correct classifications without hints",
                "Consistent recognition of rational vs irrational"
              ],
              qualitative: [
                "Correctly identifies rational numbers ℚ (p/q form)",
                "Recognizes irrational numbers ℚ' (cannot be written as p/q)",
                "Understands ℝ = ℚ ∪ ℚ' (all numbers on number line)",
                "Identifies subset relationships: ℤ ⊆ ℚ ⊆ ℝ",
                "Classifies specific numbers (π, √2, 0.333..., etc.)"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints on classification"],
              qualitative: [
                "Understands rational concept but struggles with decimals",
                "Needs prompting for irrational identification",
                "Can classify once form is clarified (p/q or not)"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect classifications", "Cannot identify"],
              qualitative: [
                "Confuses rational with irrational",
                "Does not understand p/q form",
                "Cannot recognize subset relationships"
              ]
            }
          },
          learningObjectives: [
            "Identify rational numbers: ℚ = {p/q | p, q ∈ ℤ, q ≠ 0}",
            "Identify irrational numbers: ℚ' (cannot be written as p/q)",
            "Recognize real numbers: ℝ = all points on number line",
            "Understand ℝ = ℚ ∪ ℚ' (rationals and irrationals make up reals)",
            "Identify subset relationships: ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ",
            "Classify specific numbers as rational or irrational"
          ],
          relevantFormulas: [
            "ℚ = {p/q | p, q ∈ ℤ, q ≠ 0} (rational numbers)",
            "ℚ' = irrational numbers (cannot be written as p/q)",
            "ℝ = ℚ ∪ ℚ' (real numbers = all points on number line)",
            "ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ",
            "Examples: π ∈ ℚ', √2 ∈ ℚ', 0.5 ∈ ℚ, 3 ∈ ℤ ⊆ ℚ"
          ],
          availableTools: ["numberLine", "setVisualizer"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Integer Sets (foundational) - Natural numbers ℕ, integers ℤ, positive/negative integers",
      "2. Rational and Real Numbers (intermediate) - Rational ℚ, irrational ℚ', real ℝ, subset relationships"
    ],

    keyFormulas: `• ℕ = {0, 1, 2, 3, ...} (natural numbers)
• ℤ = {..., -2, -1, 0, 1, 2, ...} (integers)
• ℤ⁺ = {1, 2, 3, ...} (positive integers)
• ℤ⁻ = {..., -3, -2, -1} (negative integers)
• ℚ = {p/q | p, q ∈ ℤ, q ≠ 0} (rational numbers)
• ℚ' = irrational numbers
• ℝ = ℚ ∪ ℚ' (real numbers)
• ℕ ⊆ ℤ⁺ ⊆ ℤ ⊆ ℚ ⊆ ℝ`
  },

  's3-math-sets-interval-notation': {
    displayName: 'Interval Notation',
    topicName: 'interval notation and number line representations',

    progressionStructure: {
      sections: [
        {
          id: "reading-writing-intervals",
          title: "Reading and Writing Intervals",
          difficulty: "intermediate",
          prerequisites: ["s3-math-sets-special-number-sets"],
          masterySignals: "Student correctly reads and writes interval notation in 3+ problems, distinguishes open/closed brackets",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ intervals written correctly without hints",
                "Consistent use of ( ) vs [ ] notation"
              ],
              qualitative: [
                "Correctly uses [ ] for closed intervals (includes endpoint)",
                "Correctly uses ( ) for open intervals (excludes endpoint)",
                "Writes intervals in form [a, b], (a, b), [a, b), (a, b]",
                "Distinguishes bounded from unbounded intervals",
                "Uses ∞ correctly in unbounded intervals"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on bracket type"],
              qualitative: [
                "Understands concept but confuses ( ) and [ ]",
                "Needs prompting for endpoint inclusion/exclusion",
                "Can write once bracket type is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect notations", "Cannot distinguish brackets"],
              qualitative: [
                "Confuses open and closed brackets",
                "Does not understand endpoint inclusion",
                "Cannot write unbounded intervals"
              ]
            }
          },
          learningObjectives: [
            "Read interval notation: [a, b], (a, b), [a, b), (a, b]",
            "Use [ ] for closed intervals (includes endpoint)",
            "Use ( ) for open intervals (excludes endpoint)",
            "Write bounded intervals with both endpoints",
            "Write unbounded intervals using ∞",
            "Understand ∞ is never included (always use parenthesis)"
          ],
          relevantFormulas: [
            "[a, b] = {x ∈ ℝ | a ≤ x ≤ b} (closed interval)",
            "(a, b) = {x ∈ ℝ | a < x < b} (open interval)",
            "[a, b) = {x ∈ ℝ | a ≤ x < b} (half-open interval)",
            "(a, b] = {x ∈ ℝ | a < x ≤ b} (half-open interval)",
            "[a, ∞) = {x ∈ ℝ | x ≥ a} (unbounded)",
            "(-∞, b] = {x ∈ ℝ | x ≤ b} (unbounded)",
            "Always use ( ) with ∞ (never [ ] because ∞ is not a number)"
          ],
          availableTools: ["numberLine"]
        },
        {
          id: "interval-representations",
          title: "Interval Representations and Conversions",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["reading-writing-intervals"],
          masterySignals: "Student converts between interval notation, set-builder notation, and number lines in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 conversions correct without hints",
                "Consistent accuracy across different representations"
              ],
              qualitative: [
                "Converts interval notation to set-builder notation",
                "Draws number line correctly (open/closed circles)",
                "Converts number line diagrams to interval notation",
                "Identifies intervals from inequalities",
                "Uses correct inequality symbols (< vs ≤)"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints on conversion"],
              qualitative: [
                "Understands one form but struggles with conversion",
                "Needs prompting for open/closed circle placement",
                "Can convert once form is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect conversions", "Cannot translate"],
              qualitative: [
                "Cannot convert between notations",
                "Draws incorrect number line representations",
                "Confuses < and ≤ in inequalities"
              ]
            }
          },
          learningObjectives: [
            "Convert interval notation to set-builder notation",
            "Draw number line representations (open/closed circles)",
            "Convert number line diagrams to interval notation",
            "Identify intervals from inequality statements",
            "Recognize equivalent representations of same interval"
          ],
          sampleProblems: [
            {
              problem: "Write the interval [-3, 5) in set-builder notation and draw on a number line"
            },
            {
              problem: "Express {x ∈ ℝ | x > 7} using interval notation and draw on a number line"
            },
            {
              problem: "A number line shows a closed circle at -2 and an open circle at 4, with the region between shaded. Write in interval notation."
            }
          ],
          relevantFormulas: [
            "[a, b] ↔ {x ∈ ℝ | a ≤ x ≤ b} ↔ closed circles at a and b",
            "(a, b) ↔ {x ∈ ℝ | a < x < b} ↔ open circles at a and b",
            "[a, ∞) ↔ {x ∈ ℝ | x ≥ a} ↔ closed circle at a, arrow to right",
            "Closed circle • means ≤ or ≥ (endpoint included)",
            "Open circle ○ means < or > (endpoint excluded)"
          ],
          availableTools: ["numberLine"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Reading and Writing Intervals (intermediate) - Interval notation, open/closed brackets",
      "2. Interval Representations (intermediate→advanced) - Convert between notations, draw number lines"
    ],

    keyFormulas: `• [a, b] = closed interval (includes a and b)
• (a, b) = open interval (excludes a and b)
• [a, b) or (a, b] = half-open interval
• [a, ∞) = unbounded (x ≥ a)
• (-∞, b] = unbounded (x ≤ b)
• Always use ( ) with ∞
• Closed circle • means endpoint included
• Open circle ○ means endpoint excluded`
  },

  's3-math-sets-venn-diagrams': {
    displayName: 'Venn Diagrams',
    topicName: 'drawing and interpreting Venn diagrams',

    progressionStructure: {
      sections: [
        {
          id: "drawing-venn-diagrams",
          title: "Drawing Venn Diagrams",
          difficulty: "foundational",
          prerequisites: ["s3-math-sets-fundamentals"],
          masterySignals: "Student correctly draws Venn diagrams for 1-2 sets with proper structure in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 diagrams drawn correctly without hints",
                "Consistent proper structure (rectangle, circles, labels)"
              ],
              qualitative: [
                "Draws rectangle for universal set U",
                "Draws circles for sets inside rectangle",
                "Labels U, A, B correctly",
                "Places elements in correct regions",
                "Uses appropriate overlap for intersecting sets"
              ]
            },
            developing: {
              quantitative: ["1 diagram correct with hints on structure"],
              qualitative: [
                "Understands concept but diagrams lack precision",
                "Needs prompting for proper labeling",
                "Can draw once structure is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect diagrams", "Incomplete structure"],
              qualitative: [
                "Cannot draw proper structure (missing U or circles)",
                "Places elements in wrong regions",
                "Does not label sets correctly"
              ]
            }
          },
          learningObjectives: [
            "Draw rectangle to represent universal set U",
            "Draw circles inside rectangle to represent sets",
            "Label universal set and each set clearly",
            "Place elements in appropriate regions",
            "Draw overlapping circles for intersecting sets",
            "Draw separate circles for disjoint sets",
            "Draw one circle inside another for subsets"
          ],
          relevantFormulas: [
            "Rectangle = Universal set U",
            "Circles = Individual sets (A, B, etc.)",
            "Overlapping circles = sets have common elements (A ∩ B ≠ ∅)",
            "Separate circles = disjoint sets (A ∩ B = ∅)",
            "Circle inside circle = subset (A ⊆ B)"
          ],
          availableTools: ["vennDiagram"]
        },
        {
          id: "representing-operations",
          title: "Representing Set Operations on Venn Diagrams",
          difficulty: "intermediate",
          prerequisites: ["drawing-venn-diagrams", "basic-set-operations"],
          masterySignals: "Student correctly identifies and shades regions for A ∩ B, A ∪ B, A', (A ∪ B)' in 3+ diagrams",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 operations shaded correctly without hints",
                "Consistent accurate region identification"
              ],
              qualitative: [
                "Shades intersection region for A ∩ B",
                "Shades both circles for A ∪ B",
                "Shades outside A for A' (complement)",
                "Identifies 'A only' region (A ∩ B')",
                "Identifies 'B only' region (B ∩ A')",
                "Shades correctly for combined operations like (A ∪ B)'"
              ]
            },
            developing: {
              quantitative: ["1 operation shaded correctly with hints"],
              qualitative: [
                "Understands concept but uncertain which region to shade",
                "Needs prompting for complement regions",
                "Can shade once operation is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect shadings", "Cannot identify regions"],
              qualitative: [
                "Confuses intersection with union shading",
                "Cannot identify complement regions",
                "Does not understand combined operations"
              ]
            }
          },
          learningObjectives: [
            "Shade intersection region (overlap) for A ∩ B",
            "Shade union (both circles) for A ∪ B",
            "Shade complement region (outside A, inside U) for A'",
            "Identify 'A only' region (A but not B)",
            "Identify 'B only' region (B but not A)",
            "Shade combined operations: (A ∪ B)', (A ∩ B)', A ∩ B', A ∪ B'"
          ],
          sampleProblems: [
            {
              problem: "Shade the region representing A ∩ B on a Venn diagram with two overlapping sets A and B"
            },
            {
              problem: "Shade the region representing (A ∪ B)' on a Venn diagram"
            },
            {
              problem: "Identify the region representing elements in A but not in B (A ∩ B')"
            }
          ],
          relevantFormulas: [
            "A ∩ B → shade overlap region only",
            "A ∪ B → shade both circles completely",
            "A' → shade outside A but inside U",
            "A ∩ B' → shade A only (not overlap)",
            "(A ∪ B)' → shade outside both circles",
            "(A ∩ B)' → shade everything except overlap"
          ],
          availableTools: ["vennDiagram"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Drawing Venn Diagrams (foundational) - Draw rectangle for U, circles for sets, proper labels",
      "2. Representing Operations (intermediate) - Shade regions for ∩, ∪, ', and combined operations"
    ],

    keyFormulas: `• Rectangle = Universal set U
• Circles = Sets (A, B, etc.)
• Overlapping circles = A ∩ B ≠ ∅
• Separate circles = A ∩ B = ∅ (disjoint)
• Circle inside circle = A ⊆ B (subset)
• Shading: A ∩ B (overlap), A ∪ B (both circles), A' (outside A)`
  },

  's3-math-sets-venn-regions': {
    displayName: 'Venn Diagram Regions',
    topicName: 'set identities and laws using Venn diagrams',

    progressionStructure: {
      sections: [
        {
          id: "set-identities",
          title: "Understanding and Verifying Set Identities",
          difficulty: "advanced",
          prerequisites: ["s3-math-sets-venn-diagrams", "combined-operations"],
          masterySignals: "Student verifies set identities using Venn diagrams in 2-3 problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ identities verified correctly without hints",
                "Consistent accurate region comparison"
              ],
              qualitative: [
                "Correctly shades both sides of identity separately",
                "Compares shaded regions to verify equality",
                "Explains why regions match or differ",
                "Identifies equivalent set expressions"
              ]
            },
            developing: {
              quantitative: ["1 identity verified with hints"],
              qualitative: [
                "Understands verification process but makes shading errors",
                "Needs prompting for systematic comparison",
                "Can verify once both sides are shaded correctly"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect verifications", "Cannot compare"],
              qualitative: [
                "Cannot shade complex expressions correctly",
                "Does not understand verification method",
                "Cannot identify when regions match"
              ]
            }
          },
          learningObjectives: [
            "Verify set identities by shading both sides on separate diagrams",
            "Compare shaded regions to confirm equality",
            "Understand A ∪ A = A (idempotent law for union)",
            "Understand A ∩ A = A (idempotent law for intersection)",
            "Understand A ∪ ∅ = A (identity law for union)",
            "Understand A ∩ U = A (identity law for intersection)",
            "Verify A ∪ A' = U and A ∩ A' = ∅ (complement laws)"
          ],
          relevantFormulas: [
            "Idempotent laws: A ∪ A = A, A ∩ A = A",
            "Identity laws: A ∪ ∅ = A, A ∩ U = A",
            "Complement laws: A ∪ A' = U, A ∩ A' = ∅",
            "Double complement: (A')' = A",
            "To verify: shade both sides, compare regions"
          ],
          availableTools: ["vennDiagram"]
        },
        {
          id: "distributive-demorgans",
          title: "Distributive and De Morgan's Laws",
          difficulty: "advanced",
          prerequisites: ["set-identities"],
          masterySignals: "Student applies and verifies distributive and De Morgan's laws in 2-3 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ law applications/verifications correct",
                "Consistent accurate use of laws"
              ],
              qualitative: [
                "Applies distributive law: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)",
                "Applies De Morgan's law: (A ∪ B)' = A' ∩ B'",
                "Applies De Morgan's law: (A ∩ B)' = A' ∪ B'",
                "Verifies laws using Venn diagrams",
                "Explains why laws hold"
              ]
            },
            developing: {
              quantitative: ["1 law applied with hints"],
              qualitative: [
                "Knows laws but struggles with application",
                "Needs prompting for correct law selection",
                "Can apply once law is identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect applications", "Cannot verify"],
              qualitative: [
                "Confuses distributive with De Morgan's laws",
                "Cannot remember or apply laws correctly",
                "Does not understand verification process"
              ]
            }
          },
          learningObjectives: [
            "Apply distributive law: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)",
            "Apply distributive law: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)",
            "Apply De Morgan's law: (A ∪ B)' = A' ∩ B'",
            "Apply De Morgan's law: (A ∩ B)' = A' ∪ B'",
            "Verify laws using Venn diagrams with 2-3 sets",
            "Use laws to simplify complex set expressions"
          ],
          sampleProblems: [
            {
              problem: "Verify using Venn diagrams that (A ∪ B)' = A' ∩ B'"
            },
            {
              problem: "Simplify (A ∩ B') ∪ (A ∩ B) using set laws"
            },
            {
              problem: "Show that A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) using Venn diagrams with three sets"
            }
          ],
          relevantFormulas: [
            "Distributive laws:",
            "  • A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)",
            "  • A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)",
            "De Morgan's laws:",
            "  • (A ∪ B)' = A' ∩ B'",
            "  • (A ∩ B)' = A' ∪ B'"
          ],
          availableTools: ["vennDiagram", "vennDiagram3"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Set Identities (advanced) - Verify identities using Venn diagrams",
      "2. Distributive and De Morgan's Laws (advanced) - Apply and verify major set laws"
    ],

    keyFormulas: `• Idempotent: A ∪ A = A, A ∩ A = A
• Identity: A ∪ ∅ = A, A ∩ U = A
• Complement: A ∪ A' = U, A ∩ A' = ∅
• Distributive: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)
• De Morgan's: (A ∪ B)' = A' ∩ B', (A ∩ B)' = A' ∪ B'`
  },

  's3-math-sets-numbers-in-regions': {
    displayName: 'Numbers in Regions',
    topicName: 'counting elements in Venn diagram regions',

    progressionStructure: {
      sections: [
        {
          id: "basic-counting",
          title: "Basic Counting with Two Sets",
          difficulty: "intermediate",
          prerequisites: ["s3-math-sets-venn-diagrams", "combined-operations"],
          masterySignals: "Student correctly fills in Venn diagram regions with numbers for two-set problems in 3+ cases",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 diagrams filled correctly without hints",
                "Consistent accurate counting"
              ],
              qualitative: [
                "Starts with intersection region n(A ∩ B)",
                "Calculates 'A only' = n(A) - n(A ∩ B)",
                "Calculates 'B only' = n(B) - n(A ∩ B)",
                "Finds 'neither' = n(U) - n(A ∪ B)",
                "Verifies total adds to n(U)"
              ]
            },
            developing: {
              quantitative: ["1 diagram filled with hints on order"],
              qualitative: [
                "Understands concept but uncertain where to start",
                "Needs prompting to fill intersection first",
                "Can complete once initial step is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect counts", "Cannot fill regions"],
              qualitative: [
                "Does not know where to start",
                "Cannot calculate exclusive regions",
                "Total does not add to n(U)"
              ]
            }
          },
          learningObjectives: [
            "Fill intersection region first: n(A ∩ B)",
            "Calculate 'A only' region: n(A) - n(A ∩ B)",
            "Calculate 'B only' region: n(B) - n(A ∩ B)",
            "Calculate 'neither' region: n(U) - [n(A only) + n(A ∩ B) + n(B only)]",
            "Verify all regions sum to n(U)",
            "Use bracket notation for regions"
          ],
          relevantFormulas: [
            "Start with: n(A ∩ B) in overlap",
            "A only = n(A) - n(A ∩ B)",
            "B only = n(B) - n(A ∩ B)",
            "Neither = n(U) - n(A ∪ B)",
            "Verify: (A only) + (both) + (B only) + (neither) = n(U)"
          ],
          availableTools: ["vennDiagram"]
        },
        {
          id: "advanced-counting",
          title: "Advanced Counting and Three-Set Problems",
          difficulty: "advanced",
          prerequisites: ["basic-counting"],
          masterySignals: "Student solves three-set Venn diagram problems and applies cardinality formula in 2-3 cases",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ three-set problems solved correctly",
                "Consistent accurate application of cardinality formula"
              ],
              qualitative: [
                "Fills three-set Venn diagrams systematically",
                "Applies cardinality formula for two sets correctly",
                "Solves for unknown using n(A ∪ B) = n(A) + n(B) - n(A ∩ B)",
                "Handles 'exactly one', 'at least one', 'neither' correctly",
                "Verifies solutions make sense"
              ]
            },
            developing: {
              quantitative: ["1 problem solved with hints"],
              qualitative: [
                "Understands process but struggles with complexity",
                "Needs prompting for formula application",
                "Can solve once approach is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect solutions", "Cannot apply formula"],
              qualitative: [
                "Cannot handle three-set complexity",
                "Does not understand cardinality formula",
                "Confuses 'exactly one' with 'at least one'"
              ]
            }
          },
          learningObjectives: [
            "Fill three-set Venn diagrams (8 regions total)",
            "Apply cardinality formula: n(A ∪ B) = n(A) + n(B) - n(A ∩ B)",
            "Solve for unknown n(A ∩ B) when other values are given",
            "Interpret 'exactly one' (exclusive regions only)",
            "Interpret 'at least one' (all in union)",
            "Interpret 'neither' (outside all sets)"
          ],
          sampleProblems: [
            {
              problem: "In a group of 50 students, 30 study French, 25 study Spanish, and 12 study both. How many study neither language?"
            },
            {
              problem: "Given n(U) = 100, n(A) = 45, n(B) = 60, and n(A ∪ B) = 85. Find n(A ∩ B)."
            },
            {
              problem: "For three sets A, B, C with overlapping regions, given specific counts in each region, find n(A ∪ B ∪ C)."
            }
          ],
          relevantFormulas: [
            "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)",
            "n(A ∩ B) = n(A) + n(B) - n(A ∪ B)",
            "Exactly one = (A only) + (B only) + (C only)",
            "At least one = n(A ∪ B ∪ C)",
            "Neither = n(U) - n(A ∪ B ∪ C)"
          ],
          availableTools: ["vennDiagram", "vennDiagram3"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Basic Counting (intermediate) - Fill two-set Venn diagrams with numbers",
      "2. Advanced Counting (advanced) - Three-set problems, cardinality formula, solve for unknowns"
    ],

    keyFormulas: `• Start with intersection: n(A ∩ B)
• A only = n(A) - n(A ∩ B)
• B only = n(B) - n(A ∩ B)
• Neither = n(U) - n(A ∪ B)
• Cardinality: n(A ∪ B) = n(A) + n(B) - n(A ∩ B)
• Exactly one ≠ At least one
• Verify: all regions sum to n(U)`
  },

  's3-math-sets-problem-solving': {
    displayName: 'Problem Solving with Venn Diagrams',
    topicName: 'solving real-world problems using Venn diagrams',

    progressionStructure: {
      sections: [
        {
          id: "two-set-survey-problems",
          title: "Two-Set Survey Problems",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["s3-math-sets-numbers-in-regions"],
          masterySignals: "Student solves 2-3 two-set survey problems independently with correct setup and calculations",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 survey problems solved correctly",
                "Consistent accurate diagram setup and calculations"
              ],
              qualitative: [
                "Translates word problem into Venn diagram setup",
                "Identifies what represents A, B, and U from context",
                "Fills intersection first, then exclusive regions",
                "Answers specific questions from completed diagram",
                "Interprets results in context (people, objects, etc.)"
              ]
            },
            developing: {
              quantitative: ["1 problem solved with hints on setup"],
              qualitative: [
                "Understands process but struggles with word problem translation",
                "Needs prompting to identify given information",
                "Can solve once diagram is set up"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect solutions", "Cannot set up"],
              qualitative: [
                "Cannot translate word problem to diagram",
                "Does not identify what A, B, U represent",
                "Cannot extract answers from diagram"
              ]
            }
          },
          learningObjectives: [
            "Translate survey scenarios into Venn diagram setups",
            "Identify A, B, and U from problem context",
            "Fill diagram systematically (intersection first)",
            "Answer 'how many both', 'how many exactly one', 'how many neither'",
            "Answer 'how many total surveyed' using diagram",
            "Interpret results with appropriate units and context"
          ],
          sampleProblems: [
            {
              problem: "At a sports club, 38 members play tennis, 27 play badminton, and 15 play both sports. If 12 members play neither sport, how many members are in the club?"
            },
            {
              problem: "In a class of 30 students, 18 like pizza, 20 like burgers, and 2 like neither. How many students like both?"
            },
            {
              problem: "A survey of 75 resort guests found 36 went sailing, 24 went fishing, and 9 did both activities. How many did neither activity?"
            }
          ],
          relevantFormulas: [
            "Total surveyed = (A only) + (both) + (B only) + (neither)",
            "Both = n(A ∩ B)",
            "Exactly one = (A only) + (B only)",
            "At least one = n(A ∪ B) = total - neither",
            "Use n(A ∪ B) = n(A) + n(B) - n(A ∩ B) to find unknowns"
          ],
          availableTools: ["vennDiagram"]
        },
        {
          id: "complex-multi-set-problems",
          title: "Complex Multi-Set Problems",
          difficulty: "advanced",
          prerequisites: ["two-set-survey-problems"],
          masterySignals: "Student solves 2-3 complex problems involving three sets, 'exactly one', 'exactly two', with correct strategy",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ complex problems solved correctly",
                "Consistent systematic approach to multi-set scenarios"
              ],
              qualitative: [
                "Handles three-set Venn diagrams (8 regions)",
                "Correctly interprets 'exactly one' (3 exclusive regions)",
                "Correctly interprets 'exactly two' (3 pairwise intersections, not all three)",
                "Correctly interprets 'all three' (center region)",
                "Uses cardinality formulas to find unknowns",
                "Verifies solutions make sense in context"
              ]
            },
            developing: {
              quantitative: ["1 complex problem solved with hints"],
              qualitative: [
                "Understands concept but struggles with complexity",
                "Needs prompting for 'exactly one' vs 'exactly two' distinction",
                "Can solve once regions are identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect solutions", "Cannot handle complexity"],
              qualitative: [
                "Cannot manage three-set complexity",
                "Confuses 'exactly one', 'exactly two', 'at least one'",
                "Does not use systematic approach"
              ]
            }
          },
          learningObjectives: [
            "Solve three-set survey problems (A, B, C)",
            "Interpret 'exactly one' = (A only) + (B only) + (C only)",
            "Interpret 'exactly two' = n(A ∩ B only) + n(B ∩ C only) + n(A ∩ C only)",
            "Interpret 'all three' = n(A ∩ B ∩ C)",
            "Use systematic filling strategy for 8 regions",
            "Apply cardinality formulas to solve for unknowns",
            "Verify solutions using total count"
          ],
          sampleProblems: [
            {
              problem: "In a survey of 100 people about languages spoken: 45 speak English, 38 speak French, 30 speak German, 15 speak both English and French, 12 speak both English and German, 8 speak both French and German, and 5 speak all three. How many speak exactly one language?"
            },
            {
              problem: "A service club has 65 members. 38 attend Monday meetings, 35 attend Thursday meetings, and 19 attend neither. How many attend both meetings?"
            },
            {
              problem: "Of 80 students surveyed about streaming services: 40 have Netflix, 35 have Disney+, 30 have HBO Max, 18 have Netflix and Disney+, 15 have Netflix and HBO Max, 12 have Disney+ and HBO Max, and 8 have all three. Find: a) How many have exactly two services? b) How many have exactly one service?"
            }
          ],
          relevantFormulas: [
            "Exactly one = (A only) + (B only) + (C only)",
            "Exactly two = (A∩B only) + (B∩C only) + (A∩C only)",
            "All three = n(A ∩ B ∩ C)",
            "At least one = n(A ∪ B ∪ C)",
            "Neither = n(U) - n(A ∪ B ∪ C)",
            "Fill center (all three) first, then work outward"
          ],
          availableTools: ["vennDiagram3"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Two-Set Survey Problems (intermediate→advanced) - Real-world scenarios with two categories",
      "2. Complex Multi-Set Problems (advanced) - Three sets, 'exactly one/two', systematic strategies"
    ],

    keyFormulas: `• Total = (A only) + (both) + (B only) + (neither)
• Both = n(A ∩ B)
• Exactly one = (A only) + (B only)
• At least one = n(A ∪ B) = total - neither
• Three sets: 8 regions total
• Exactly one ≠ At least one ≠ Exactly two
• Verify: all regions sum to n(U)`
  }
};

// Export for backward compatibility
export const S3_MATH_SETS_VENN_DIAGRAMS: Record<SetsVennDiagramsTopicId, any> = S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS;

// Export config that can be used by PromptLibrary
export const S3_MATH_SETS_VENN_DIAGRAMS_CONFIG = {
  TUTOR_ROLE: SETS_VENN_DIAGRAMS_TUTOR_CUSTOMIZATION.teachingPhilosophy,
  QUESTION_AGENT_ROLE: null, // Uses base from prompt-library
  SOLUTION_AGENT_ROLE: null, // Uses base from prompt-library
  MATH_TOOLS_AVAILABLE: SETS_VENN_DIAGRAMS_MATH_TOOLS,
  // FORMATTING_RULES: imported from prompt-library
  // INTERACTION_PROTOCOL: imported from prompt-library
};
