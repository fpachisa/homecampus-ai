/**
 * S3 Mathematics - Relations and Functions Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 */

// Type exports
export type RelationsFunctionsTopicId =
  | 's3-math-relations-functions-fundamentals'
  | 's3-math-function-notation'
  | 's3-math-domain-range'
  | 's3-math-sign-diagrams'
  | 's3-math-transformations'
  | 's3-math-absolute-value';

// Topic-specific tutor customization (overrides base)
export const RELATIONS_FUNCTIONS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Relations and Functions.

Teaching Approach:
- Guide students to discover solutions through questioning, not direct instruction
- Provide progressive hints only when students are stuck
- Celebrate insights and encourage perseverance
- Use visual representations (graphs, tables, mappings) to help understanding
- Emphasize the "why" behind function notation and transformations, not just the "how"

**Text-to-Speech Guidelines:**
- Spell out function notation clearly: "f of x" not "f(x)"
- Say "the absolute value of x" for |x|
- Say "x maps to y" or "x gives y" for function relationships
- Avoid special symbols in speech.text - spell them out
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), use proper mathematical notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding (not for every question).
IMPORTANT: Use the technical name (e.g., "cartesianPlane") in the toolName field, NOT the display name.`
};

// Available math tools for this topic
export const RELATIONS_FUNCTIONS_MATH_TOOLS = [
  "cartesianPlane",
  "numberLine"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S3_MATH_RELATIONS_FUNCTIONS_SUBTOPICS = {

  's3-math-relations-functions-fundamentals': {
    displayName: 'Relations and Functions Fundamentals',
    topicName: 'relations, functions, and the vertical line test',

    progressionStructure: {
      sections: [
        {
          id: "understanding-relations",
          title: "Understanding Relations",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies relations as sets of points, distinguishes equations from point sets in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct relation identifications without hints",
                "Consistent understanding of different relation representations"
              ],
              qualitative: [
                "Correctly identifies relations as sets of points in (x, y) plane",
                "Recognizes relations can be equations or finite/infinite point sets",
                "Understands that not all relations can be expressed as equations",
                "Distinguishes between finite and infinite sets of points"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on representations"],
              qualitative: [
                "Understands basic concept but struggles with multiple representations",
                "Needs prompting for equation vs point set distinction",
                "Can identify relations once format is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect identifications", "Cannot distinguish representations"],
              qualitative: [
                "Confuses relations with other mathematical concepts",
                "Does not understand point sets or equations as relations",
                "Cannot identify what constitutes a relation"
              ]
            }
          },
          learningObjectives: [
            "Define a relation as a set of points connecting variables x and y",
            "Recognize relations can be expressed as equations generating points",
            "Identify relations as finite sets of points",
            "Understand relations as infinite sets of points",
            "Recognize that some relations cannot be defined by equations"
          ],
          relevantFormulas: [
            "Relation as equation: y = x - 2 (infinite set of points on a line)",
            "Relation as finite set: {(1, 2), (3, 4), (5, 6)}",
            "Relation in (x, y) plane connects two variables",
            "Example equation: y = x² generates infinite points (parabola)",
            "Example finite set: 8 specific points that don't follow one equation"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "defining-functions",
          title: "Defining Functions",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["understanding-relations"],
          masterySignals: "Student correctly identifies functions using unique x-coordinate rule in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct function identifications without hints",
                "Consistent application of unique x-coordinate criterion"
              ],
              qualitative: [
                "Correctly defines function as relation with unique x-coordinates",
                "Recognizes every function is a relation, but not every relation is a function",
                "Identifies when two points have same x-coordinate (not a function)",
                "Understands functions as special type of relation"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on x-coordinates"],
              qualitative: [
                "Understands concept but makes errors checking x-values",
                "Needs prompting to examine x-coordinates systematically",
                "Can identify functions once criterion is reminded"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect function identifications", "Cannot check x-values"],
              qualitative: [
                "Does not understand unique x-coordinate criterion",
                "Confuses x and y coordinates in checking",
                "Cannot distinguish functions from general relations"
              ]
            }
          },
          learningObjectives: [
            "Define a function as a relation where no two points share the same x-coordinate",
            "Understand that every function is a relation (but not vice versa)",
            "Identify functions from sets of ordered pairs",
            "Recognize that y-values can repeat in functions, but x-values cannot",
            "Explain why certain relations are not functions"
          ],
          relevantFormulas: [
            "Function definition: no two different points have same x-coordinate",
            "Example function: {(1, 2), (2, 3), (3, 4)} - all x-values unique",
            "Example NOT function: {(-1, -2), (-1, 3)} - x = -1 appears twice",
            "Every function is a relation (special case)",
            "Not every relation is a function (general case)"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "vertical-line-test",
          title: "Vertical Line Test for Functions",
          difficulty: "intermediate",
          prerequisites: ["defining-functions"],
          masterySignals: "Student applies vertical line test correctly to graphs in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of vertical line test",
                "Consistent accurate determination from graphs"
              ],
              qualitative: [
                "Correctly applies vertical line test to graphs",
                "Understands: cuts once = function, cuts more than once = not function",
                "Explains why vertical line test works (one x → one y)",
                "Identifies functions and non-functions from graph shape"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on line placement"],
              qualitative: [
                "Knows test exists but struggles with application",
                "Needs prompting on where to draw vertical lines",
                "Can apply test once method is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect test applications", "Cannot visualize vertical lines"],
              qualitative: [
                "Does not understand vertical line test concept",
                "Confuses vertical and horizontal lines",
                "Cannot determine if graph passes or fails test"
              ]
            }
          },
          learningObjectives: [
            "State the vertical line test: if every vertical line cuts graph at most once, it's a function",
            "Apply vertical line test to various graphs",
            "Explain why vertical line test works (single x-value criterion)",
            "Identify common functions that pass the test (lines, parabolas)",
            "Identify common relations that fail the test (circles, ellipses)"
          ],
          relevantFormulas: [
            "Vertical line test: if any vertical line cuts graph more than once → NOT a function",
            "Vertical line test: if all vertical lines cut graph at most once → IS a function",
            "Example pass: y = x² (parabola) - every vertical line cuts once",
            "Example fail: x² + y² = 25 (circle) - some vertical lines cut twice",
            "Why it works: vertical line represents single x-value"
          ],
          availableTools: ["cartesianPlane"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Understanding Relations (foundational) - Relations as sets of points, equations, finite/infinite sets",
      "2. Defining Functions (foundational→intermediate) - Functions as special relations with unique x-coordinates",
      "3. Vertical Line Test (intermediate) - Geometric test for identifying functions from graphs"
    ],

    keyFormulas: `• Relation = set of points in (x, y) plane connecting two variables
• Function = relation where no two points share same x-coordinate
• Every function is a relation; not every relation is a function
• Vertical line test: cuts graph at most once → function
• Vertical line test: cuts graph more than once → NOT a function
• Relations can be: equations, finite sets, infinite sets
• Functions require unique x-values (y-values can repeat)`
  },

  's3-math-function-notation': {
    displayName: 'Function Notation',
    topicName: 'function notation and evaluating f(x)',

    progressionStructure: {
      sections: [
        {
          id: "function-notation-basics",
          title: "Function Notation Basics",
          difficulty: "foundational",
          prerequisites: ["vertical-line-test"],
          masterySignals: "Student correctly interprets and uses f(x) notation in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct uses of function notation without hints",
                "Consistent understanding of f(x) meaning"
              ],
              qualitative: [
                "Correctly reads f(x) as 'f of x'",
                "Understands f(x) represents output/function value/image",
                "Recognizes y = f(x) equivalence",
                "Identifies f as function name, x as input variable"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on notation meaning"],
              qualitative: [
                "Knows f(x) notation but uncertain about meaning",
                "Needs prompting on input vs output",
                "Can use notation once components are explained"
              ]
            },
            struggling: {
              quantitative: ["Multiple notation errors", "Cannot interpret f(x)"],
              qualitative: [
                "Confuses f(x) with multiplication",
                "Does not understand function notation purpose",
                "Cannot identify input and output variables"
              ]
            }
          },
          learningObjectives: [
            "Read f(x) as 'f of x'",
            "Understand f(x) as the output value (function value or image)",
            "Recognize y = f(x) means y equals f of x",
            "Identify f as the function name and x as the input",
            "Understand function machine concept (input → process → output)"
          ],
          relevantFormulas: [
            "f(x) is read as 'f of x'",
            "f(x) = output value = function value = image of x",
            "y = f(x) means y equals the function value",
            "Function notation: f(x) = 2x - 1 means 'function f converts x to 2x - 1'",
            "Example: if f(x) = 2x - 1, then f is the function name"
          ],
          availableTools: []
        },
        {
          id: "evaluating-functions",
          title: "Evaluating Functions",
          difficulty: "intermediate",
          prerequisites: ["function-notation-basics"],
          masterySignals: "Student evaluates f(a), f(-x), f(x+h) correctly in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct evaluations without hints",
                "Handles numbers, negatives, and expressions accurately"
              ],
              qualitative: [
                "Correctly substitutes values into function",
                "Uses parentheses when substituting negatives or expressions",
                "Evaluates f(a) by replacing every x with a",
                "Simplifies algebraic expressions after substitution",
                "Understands f(a) = b means point (a, b) on graph"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on substitution"],
              qualitative: [
                "Knows substitution concept but makes algebraic errors",
                "Needs prompting for parentheses with negatives",
                "Can evaluate once substitution method is shown"
              ]
            },
            struggling: {
              quantitative: ["Multiple substitution errors", "Cannot evaluate expressions"],
              qualitative: [
                "Does not understand substitution process",
                "Makes sign errors with negative numbers",
                "Cannot handle expressions like f(x + 2)"
              ]
            }
          },
          learningObjectives: [
            "Evaluate f(a) by replacing every x with a",
            "Use parentheses when substituting negative numbers",
            "Evaluate f(-x) by replacing x with -x throughout",
            "Evaluate f(x + h) and other expressions",
            "Understand that f(a) = b means (a, b) lies on the graph"
          ],
          relevantFormulas: [
            "To evaluate f(a): replace every x in f(x) with a",
            "Example: f(x) = 2x² - 3x + 2, then f(2) = 2(2)² - 3(2) + 2 = 4",
            "For negatives: f(-4) = 2(-4)² - 3(-4) + 2 (use parentheses!)",
            "For expressions: f(x + 1) = 2(x + 1)² - 3(x + 1) + 2",
            "f(a) = b means point (a, b) is on graph of f",
            "Always simplify after substitution"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Function Notation Basics (foundational) - Understanding f(x) notation and components",
      "2. Evaluating Functions (intermediate) - Substituting values and expressions into functions"
    ],

    keyFormulas: `• f(x) is read as "f of x"
• f(x) = function value = image of x = output
• y = f(x) (equivalent notations)
• f = function name, x = input variable
• To evaluate f(a): replace every x with a
• Use parentheses: f(-3) needs (-3) in substitution
• f(a) = b means point (a, b) lies on graph
• Function machine: input → function → output`
  },

  's3-math-domain-range': {
    displayName: 'Domain and Range',
    topicName: 'domain, range, and natural domain of functions',

    progressionStructure: {
      sections: [
        {
          id: "domain-range-concepts",
          title: "Domain and Range Concepts",
          difficulty: "intermediate",
          prerequisites: ["evaluating-functions"],
          masterySignals: "Student identifies domain and range from graphs and descriptions in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct domain/range identifications",
                "Consistent use of interval notation"
              ],
              qualitative: [
                "Correctly identifies domain as set of x-values (horizontal axis)",
                "Correctly identifies range as set of y-values (vertical axis)",
                "Uses interval notation correctly: [a, b], (a, b), [a, b)",
                "Writes set notation: {x | condition}"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on notation"],
              qualitative: [
                "Understands domain/range concept but struggles with notation",
                "Needs prompting for interval brackets",
                "Can identify once asked specifically for x or y values"
              ]
            },
            struggling: {
              quantitative: ["Confuses domain and range", "Incorrect notation"],
              qualitative: [
                "Cannot distinguish x-values from y-values",
                "Does not understand interval notation",
                "Confuses domain with range"
              ]
            }
          },
          learningObjectives: [
            "Define domain as the set of x-values (horizontal axis values)",
            "Define range as the set of y-values (vertical axis values)",
            "Express domain and range using interval notation",
            "Use set notation: {x | 1 ≤ x < 5}",
            "Read domain and range from graphs"
          ],
          relevantFormulas: [
            "Domain = set of x-values (inputs)",
            "Range = set of y-values (outputs)",
            "Interval notation: [a, b] includes endpoints, (a, b) excludes endpoints",
            "[a, b) includes a, excludes b (half-open interval)",
            "Set notation: {x | 1 ≤ x < 5} means 'x such that 1 ≤ x < 5'",
            "Example: domain {x | -2 ≤ x ≤ 5} or [-2, 5]",
            "Always use ( ) with ∞ or -∞ (infinity never reached)"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "natural-domain",
          title: "Natural Domain",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["domain-range-concepts"],
          masterySignals: "Student finds natural domain with square root and denominator restrictions in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct natural domain determinations",
                "Handles square roots and denominators correctly"
              ],
              qualitative: [
                "Identifies square root restrictions (radicand ≥ 0)",
                "Identifies denominator restrictions (denominator ≠ 0)",
                "Combines multiple restrictions correctly",
                "Expresses natural domain in interval or set notation",
                "Understands natural domain as largest subset of ℝ where f(x) is defined"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on restrictions"],
              qualitative: [
                "Knows restrictions exist but struggles to apply",
                "Needs prompting for which restrictions apply",
                "Can find domain once restrictions are identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect domains", "Misses restrictions"],
              qualitative: [
                "Does not recognize square root or denominator restrictions",
                "Cannot solve inequalities for domain",
                "Confuses different types of restrictions"
              ]
            }
          },
          learningObjectives: [
            "Define natural domain as largest subset of ℝ for which f(x) is defined",
            "Identify square root restrictions: radicand ≥ 0",
            "Identify denominator restrictions: denominator ≠ 0",
            "Combine multiple restrictions (AND logic)",
            "Express natural domain using proper notation"
          ],
          relevantFormulas: [
            "Natural domain = largest subset of ℝ where f(x) is defined",
            "Square root: f(x) = √x requires x ≥ 0, domain: [0, ∞)",
            "Denominator: f(x) = 1/x requires x ≠ 0, domain: (-∞, 0) ∪ (0, ∞)",
            "Combined: f(x) = 1/√(x-3) requires x > 3, domain: (3, ∞)",
            "Example: f(x) = √(x+3) requires x + 3 ≥ 0 → x ≥ -3, domain: [-3, ∞)",
            "Example: f(x) = 1/(x-2) requires x ≠ 2, domain: {x | x ≠ 2}",
            "Always solve inequalities to find allowed x-values"
          ],
          availableTools: ["numberLine"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Domain and Range Concepts (intermediate) - Understanding x-values and y-values, interval notation",
      "2. Natural Domain (intermediate→advanced) - Finding domain with restrictions from square roots and denominators"
    ],

    keyFormulas: `• Domain = set of x-values (horizontal, inputs)
• Range = set of y-values (vertical, outputs)
• Interval notation: [a, b] closed, (a, b) open, [a, b) half-open
• Natural domain = largest ℝ subset where f(x) defined
• Square root: √x requires x ≥ 0
• Denominator: 1/x requires x ≠ 0
• Combined restrictions: use AND logic
• Always use ( ) with ∞ or -∞`
  },

  's3-math-sign-diagrams': {
    displayName: 'Sign Diagrams',
    topicName: 'sign diagrams and analyzing function behavior',

    progressionStructure: {
      sections: [
        {
          id: "creating-sign-diagrams",
          title: "Creating Sign Diagrams",
          difficulty: "intermediate",
          prerequisites: ["domain-range-concepts"],
          masterySignals: "Student creates sign diagrams showing positive/negative/zero/undefined regions in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct sign diagrams without hints",
                "Consistent marking of critical values"
              ],
              qualitative: [
                "Correctly marks zeros with solid dots (•)",
                "Correctly marks undefined points with dashed lines (|)",
                "Identifies positive (+) and negative (-) regions",
                "Uses number line (horizontal) representation correctly",
                "Tests values in each region to determine sign"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on critical values"],
              qualitative: [
                "Understands concept but makes marking errors",
                "Needs prompting for where to test values",
                "Can create diagram once critical values are identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect diagrams", "Cannot identify critical values"],
              qualitative: [
                "Does not understand sign diagram purpose",
                "Confuses zeros with undefined points",
                "Cannot determine positive/negative regions"
              ]
            }
          },
          learningObjectives: [
            "Define sign diagram as number line showing where function is +, -, 0, or undefined",
            "Identify critical values (zeros and undefined points)",
            "Mark zeros with solid dot (•) and undefined points with dashed line (|)",
            "Test values in each region to determine sign",
            "Draw sign diagram on horizontal number line"
          ],
          relevantFormulas: [
            "Sign diagram shows: positive (+), negative (-), zero (•), undefined (|)",
            "Critical values: where f(x) = 0 or f(x) is undefined",
            "Zeros (x-intercepts): mark with solid dot •",
            "Undefined points: mark with dashed line |",
            "Test a value in each region to find sign",
            "Example: f(x) = (x-3)/(x+1) has zero at x = 3, undefined at x = -1"
          ],
          availableTools: ["numberLine"]
        },
        {
          id: "sign-changes-powers",
          title: "Sign Changes and Powers",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["creating-sign-diagrams"],
          masterySignals: "Student applies odd/even power rules for sign changes in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of power rules",
                "Consistent determination of sign changes"
              ],
              qualitative: [
                "Recognizes odd powers (1, 3, 5...) cause sign changes",
                "Recognizes even powers (2, 4, 6...) do NOT cause sign changes",
                "Applies rules to factored functions like (x-3)²(x+1)",
                "Explains why odd powers cross x-axis and even powers touch it"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on powers"],
              qualitative: [
                "Knows rule exists but struggles to identify powers",
                "Needs prompting for odd vs even",
                "Can apply rule once power is identified"
              ]
            },
            struggling: {
              quantitative: ["Confuses odd/even rules", "Cannot determine sign changes"],
              qualitative: [
                "Does not understand power effect on sign",
                "Cannot identify factor powers in expressions",
                "Makes incorrect sign change predictions"
              ]
            }
          },
          learningObjectives: [
            "State rule: odd power → sign change at critical value",
            "State rule: even power → no sign change at critical value",
            "Identify powers of linear factors: (x-a)ⁿ has power n",
            "Determine sign changes for factored functions",
            "Explain graphical interpretation (cross vs touch x-axis)"
          ],
          relevantFormulas: [
            "Odd power (1, 3, 5...): sign CHANGES at critical value",
            "Even power (2, 4, 6...): sign STAYS SAME at critical value",
            "Example: f(x) = (x-2) has power 1 (odd) → sign changes at x = 2",
            "Example: f(x) = (x-2)² has power 2 (even) → sign stays same at x = 2",
            "Graphically: odd power crosses x-axis, even power touches x-axis",
            "Complex example: f(x) = (x-3)(x+2)² has change at x = 3, no change at x = -2"
          ],
          availableTools: ["numberLine", "cartesianPlane"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Creating Sign Diagrams (intermediate) - Number lines showing +/-/0/undefined regions",
      "2. Sign Changes and Powers (intermediate→advanced) - Odd/even power rules for determining sign behavior"
    ],

    keyFormulas: `• Sign diagram: number line showing +, -, 0, undefined
• Critical values: zeros (•) and undefined points (|)
• Test values in each region to find sign
• Odd power (1, 3, 5...): sign changes
• Even power (2, 4, 6...): sign stays same
• Graphical: odd crosses x-axis, even touches
• Example: (x-a)³ changes sign, (x-a)² doesn't`
  },

  's3-math-transformations': {
    displayName: 'Transformations of Graphs',
    topicName: 'translations, stretches, and reflections of function graphs',

    progressionStructure: {
      sections: [
        {
          id: "translations",
          title: "Translations (Shifts)",
          difficulty: "intermediate",
          prerequisites: ["evaluating-functions"],
          masterySignals: "Student applies vertical and horizontal translations correctly in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct translation descriptions",
                "Consistent direction and magnitude identification"
              ],
              qualitative: [
                "Correctly identifies y = f(x) + k as vertical translation",
                "Correctly identifies y = f(x - h) as horizontal translation",
                "Understands k > 0 moves up, k < 0 moves down",
                "Understands h > 0 moves right, h < 0 moves left (opposite!)",
                "Combines vertical and horizontal translations"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on direction"],
              qualitative: [
                "Knows translations exist but confuses direction",
                "Needs prompting for horizontal shift paradox",
                "Can apply once direction rules are reminded"
              ]
            },
            struggling: {
              quantitative: ["Multiple direction errors", "Cannot identify translations"],
              qualitative: [
                "Confuses vertical and horizontal translations",
                "Gets directions backwards",
                "Cannot combine multiple translations"
              ]
            }
          },
          learningObjectives: [
            "Apply vertical translation: y = f(x) + k moves graph up k (k > 0) or down |k| (k < 0)",
            "Apply horizontal translation: y = f(x - h) moves graph right h (h > 0) or left |h| (h < 0)",
            "Understand horizontal shift is opposite to sign (x - 3 moves RIGHT)",
            "Combine translations: y = f(x - h) + k",
            "Identify translations from equations"
          ],
          relevantFormulas: [
            "Vertical translation: y = f(x) + k",
            "• k > 0: shift up k units",
            "• k < 0: shift down |k| units",
            "Horizontal translation: y = f(x - h)",
            "• h > 0: shift right h units (opposite to sign!)",
            "• h < 0: shift left |h| units",
            "Combined: y = f(x - h) + k moves right h, up k",
            "Example: y = (x - 3)² + 2 moves parabola right 3, up 2"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "stretches-compressions",
          title: "Stretches and Compressions",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["translations"],
          masterySignals: "Student applies vertical and horizontal stretches correctly in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct stretch/compression identifications",
                "Understands opposite behavior for vertical vs horizontal"
              ],
              qualitative: [
                "Correctly applies y = p f(x) vertical stretch (p > 1) or compression (0 < p < 1)",
                "Correctly applies y = f(qx) horizontal compression (q > 1) or stretch (0 < q < 1)",
                "Understands horizontal stretches work opposite to intuition",
                "Calculates scale factors correctly"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on scale factors"],
              qualitative: [
                "Knows stretches exist but confuses vertical/horizontal",
                "Needs prompting for which direction stretches",
                "Can apply once scale factor effect is explained"
              ]
            },
            struggling: {
              quantitative: ["Confuses stretches and compressions", "Wrong scale factors"],
              qualitative: [
                "Does not understand stretch vs compression",
                "Cannot determine effect of scale factors",
                "Confuses vertical and horizontal stretches"
              ]
            }
          },
          learningObjectives: [
            "Apply vertical stretch: y = p f(x) where p > 1 stretches, 0 < p < 1 compresses",
            "Apply horizontal stretch: y = f(qx) where q > 1 compresses, 0 < q < 1 stretches (opposite!)",
            "Understand vertical stretch multiplies y-values by p",
            "Understand horizontal stretch divides x-values by q",
            "Distinguish stretches from compressions"
          ],
          relevantFormulas: [
            "Vertical stretch/compression: y = p f(x), p > 0",
            "• p > 1: stretch (away from x-axis, taller)",
            "• 0 < p < 1: compression (toward x-axis, shorter)",
            "Horizontal stretch/compression: y = f(qx), q > 0",
            "• q > 1: compression (toward y-axis, narrower) - opposite!",
            "• 0 < q < 1: stretch (away from y-axis, wider) - opposite!",
            "Example: y = 2f(x) stretches vertically by factor 2",
            "Example: y = f(3x) compresses horizontally by factor 1/3"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "reflections",
          title: "Reflections",
          difficulty: "intermediate",
          prerequisites: ["translations"],
          masterySignals: "Student applies reflections in x-axis and y-axis correctly in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct reflection identifications",
                "Consistent application of negative signs"
              ],
              qualitative: [
                "Correctly identifies y = -f(x) as reflection in x-axis",
                "Correctly identifies y = f(-x) as reflection in y-axis",
                "Understands negative outside flips vertically",
                "Understands negative inside flips horizontally",
                "Identifies invariant points (points that don't move)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on axis"],
              qualitative: [
                "Knows reflections but confuses x-axis and y-axis",
                "Needs prompting for inside vs outside negative",
                "Can apply once axis is identified"
              ]
            },
            struggling: {
              quantitative: ["Confuses reflection axes", "Cannot apply negatives"],
              qualitative: [
                "Does not understand reflection concept",
                "Cannot distinguish x-axis from y-axis reflection",
                "Makes errors with negative sign placement"
              ]
            }
          },
          learningObjectives: [
            "Apply reflection in x-axis: y = -f(x) flips graph over x-axis",
            "Apply reflection in y-axis: y = f(-x) flips graph over y-axis",
            "Understand negative outside affects y-values (vertical flip)",
            "Understand negative inside affects x-values (horizontal flip)",
            "Identify invariant points under each reflection"
          ],
          relevantFormulas: [
            "Reflection in x-axis: y = -f(x)",
            "• Flips graph upside down",
            "• Positive becomes negative, negative becomes positive",
            "• Points on x-axis (y = 0) are invariant",
            "Reflection in y-axis: y = f(-x)",
            "• Flips graph left-right",
            "• Left becomes right, right becomes left",
            "• Points on y-axis (x = 0) are invariant",
            "Example: y = -x² flips parabola to open downward"
          ],
          availableTools: ["cartesianPlane"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Translations (intermediate) - Vertical (y = f(x) + k) and horizontal (y = f(x - h)) shifts",
      "2. Stretches/Compressions (intermediate→advanced) - Vertical (y = pf(x)) and horizontal (y = f(qx))",
      "3. Reflections (intermediate) - x-axis (y = -f(x)) and y-axis (y = f(-x)) flips"
    ],

    keyFormulas: `• Vertical translation: y = f(x) + k (up if k > 0, down if k < 0)
• Horizontal translation: y = f(x - h) (right if h > 0, left if h < 0) - opposite!
• Vertical stretch: y = pf(x) (p > 1 stretches, 0 < p < 1 compresses)
• Horizontal stretch: y = f(qx) (q > 1 compresses, 0 < q < 1 stretches) - opposite!
• Reflection in x-axis: y = -f(x) (negative outside)
• Reflection in y-axis: y = f(-x) (negative inside)
• Transformations can combine: y = -2f(x - 3) + 1`
  },

  's3-math-absolute-value': {
    displayName: 'Absolute Value Function',
    topicName: 'absolute value (modulus) and its graph',

    progressionStructure: {
      sections: [
        {
          id: "understanding-absolute-value",
          title: "Understanding Absolute Value",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["function-notation-basics"],
          masterySignals: "Student correctly evaluates absolute value expressions in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct absolute value evaluations",
                "Consistent application of |x| definition"
              ],
              qualitative: [
                "Correctly defines |x| as distance from 0",
                "Applies |x| = x when x ≥ 0",
                "Applies |x| = -x when x < 0",
                "Understands absolute value cannot be negative",
                "Evaluates expressions like |a - b| correctly"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on sign"],
              qualitative: [
                "Knows definition but makes sign errors",
                "Needs prompting for negative number handling",
                "Can evaluate once reminded of two cases"
              ]
            },
            struggling: {
              quantitative: ["Multiple evaluation errors", "Negative results"],
              qualitative: [
                "Does not understand absolute value concept",
                "Confuses |x| with -x",
                "Gets negative absolute values (impossible)"
              ]
            }
          },
          learningObjectives: [
            "Define absolute value as distance from 0 on number line",
            "Apply rule: if x ≥ 0, then |x| = x",
            "Apply rule: if x < 0, then |x| = -x",
            "Understand |x| ≥ 0 always (distance cannot be negative)",
            "Evaluate expressions involving absolute value"
          ],
          relevantFormulas: [
            "|x| = absolute value = modulus = distance from 0",
            "|x| ≥ 0 for all x (cannot be negative)",
            "If x ≥ 0: |x| = x (e.g., |5| = 5)",
            "If x < 0: |x| = -x (e.g., |-5| = -(-5) = 5)",
            "Symmetry: |-x| = |x| for all x",
            "Examples: |7| = 7, |-3| = 3, |0| = 0",
            "Distance interpretation: |-5| and |5| both equal 5 (same distance from 0)"
          ],
          availableTools: ["numberLine"]
        },
        {
          id: "graphing-absolute-value",
          title: "Graphing Absolute Value Functions",
          difficulty: "intermediate",
          prerequisites: ["understanding-absolute-value"],
          masterySignals: "Student graphs and transforms absolute value functions correctly in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct graph descriptions or sketches",
                "Correct identification of vertex and shape"
              ],
              qualitative: [
                "Recognizes y = |x| as V-shaped graph",
                "Identifies vertex at (0, 0) for y = |x|",
                "Understands left side follows y = -x, right side follows y = x",
                "Applies transformations to absolute value functions",
                "States domain as ℝ and range as y ≥ 0"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on shape"],
              qualitative: [
                "Knows V-shape but struggles with transformations",
                "Needs prompting for vertex location",
                "Can graph once basic properties are reminded"
              ]
            },
            struggling: {
              quantitative: ["Wrong graph shapes", "Cannot identify vertex"],
              qualitative: [
                "Does not recognize V-shape of |x|",
                "Cannot apply transformations to absolute value",
                "Confuses with other function types"
              ]
            }
          },
          learningObjectives: [
            "Graph y = |x| as V-shaped with vertex at origin",
            "Understand left side (x < 0) follows y = -x",
            "Understand right side (x ≥ 0) follows y = x",
            "Apply transformations: y = |x - h| + k has vertex at (h, k)",
            "State domain (all ℝ) and range (y ≥ 0 for y = |x|)"
          ],
          relevantFormulas: [
            "y = |x| is V-shaped graph with vertex at (0, 0)",
            "For x < 0: graph follows y = -x (gradient = -1)",
            "For x ≥ 0: graph follows y = x (gradient = 1)",
            "Domain: all real numbers (-∞, ∞)",
            "Range: y ≥ 0 or [0, ∞)",
            "Transformation: y = |x - h| + k has vertex at (h, k)",
            "Example: y = |x - 3| + 2 has vertex at (3, 2)",
            "y = -|x| opens downward (∧-shape), range y ≤ 0"
          ],
          availableTools: ["cartesianPlane"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Understanding Absolute Value (foundational→intermediate) - Distance interpretation, |x| definition and evaluation",
      "2. Graphing Absolute Value (intermediate) - V-shaped graphs, vertex, transformations"
    ],

    keyFormulas: `• |x| = distance from 0 on number line
• |x| ≥ 0 always (never negative)
• If x ≥ 0: |x| = x; if x < 0: |x| = -x
• |-x| = |x| (symmetry)
• y = |x| is V-shaped, vertex (0, 0)
• Left (x < 0): y = -x; Right (x ≥ 0): y = x
• Domain: ℝ; Range: y ≥ 0
• Transformation: y = |x - h| + k has vertex (h, k)`
  }
};

// Export for backward compatibility
export const S3_MATH_RELATIONS_FUNCTIONS: Record<RelationsFunctionsTopicId, any> = S3_MATH_RELATIONS_FUNCTIONS_SUBTOPICS;

// Export config that can be used by PromptLibrary
export const S3_MATH_RELATIONS_FUNCTIONS_CONFIG = {
  TUTOR_ROLE: RELATIONS_FUNCTIONS_TUTOR_CUSTOMIZATION.teachingPhilosophy,
  QUESTION_AGENT_ROLE: null, // Uses base from prompt-library
  SOLUTION_AGENT_ROLE: null, // Uses base from prompt-library
  MATH_TOOLS_AVAILABLE: RELATIONS_FUNCTIONS_MATH_TOOLS,
  // FORMATTING_RULES: imported from prompt-library
  // INTERACTION_PROTOCOL: imported from prompt-library
};
