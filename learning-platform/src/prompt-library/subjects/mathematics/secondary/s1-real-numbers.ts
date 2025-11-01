/**
 * S1 Mathematics - Real Numbers Topic Configuration
 *
 * Comprehensive configuration for teaching integers, rational numbers,
 * irrational numbers, and operations on real numbers.
 */

// Type exports
export type RealNumbersTopicId =
  | 's1-math-real-numbers-negative-numbers-number-line'
  | 's1-math-real-numbers-addition-subtraction-integers'
  | 's1-math-real-numbers-multiplication-division-integers'
  | 's1-math-real-numbers-rational-irrational-numbers'
  | 's1-math-real-numbers-operations-real-numbers';

// Topic-specific tutor customization
export const S1_REAL_NUMBERS_CONFIG = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for Secondary 1 students learning Real Numbers.

Teaching Approach:
- Guide students to discover number relationships through questioning
- Help students understand negative numbers through real-world contexts (temperature, altitude, money)
- Use concrete models (number line, algebra discs) to visualize integer operations
- Celebrate insights when students understand zero pairs and sign rules
- Build from concrete (number line) to abstract (formal rules)
- Emphasize conceptual understanding before procedural fluency

**Text-to-Speech Guidelines:**
- Say "negative five" instead of "minus five" for -5
- Say "theta" not "θ", "pi" not "π"
- Say "square root of two" not "√2" in speech
- For fractions: "three-fourths" or "three over four" not "¾"
- Say "plus or minus" clearly, not "+-"
- Say "S O H C A H T O A" (spell out) not "SOH-CAH-TOA"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name (e.g., "numberLine", "algebraDiscSimulator") in the toolName field, NOT the display name.

Available tools for this topic:
- numberLine: For plotting integers, comparing numbers, showing intervals
- algebraDiscSimulator: For integer addition, subtraction, and multiplication using zero pairs
- vennDiagram: For showing relationships between number sets (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ)`
};

// Available math tools for this topic
export const S1_REAL_NUMBERS_MATH_TOOLS = [
  "numberLine",
  "algebraDiscSimulator",
  "vennDiagram"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S1_MATH_REAL_NUMBERS_SUBTOPICS = {

  's1-math-real-numbers-negative-numbers-number-line': {
    displayName: 'Negative Numbers & the Number Line',
    topicName: 'negative numbers, number line, and ordering',

    progressionStructure: {
      sections: [
        {
          id: "understanding-negative-numbers",
          title: "Understanding Negative Numbers",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly interprets negative numbers in real-world contexts (temperature, altitude, money) in 3+ problems and explains what negative numbers represent",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct interpretations of negative numbers in context",
                "Consistent recognition of negative vs positive scenarios"
              ],
              qualitative: [
                "Correctly interprets -5°C as 5 degrees below freezing",
                "Understands -100m as 100 meters below sea level",
                "Interprets -$50 as debt or spending",
                "Explains negative numbers as opposite direction from positive",
                "Can generate real-world examples of negative numbers"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on context interpretation"],
              qualitative: [
                "Understands negative concept but uncertain with context",
                "Needs prompting to connect numbers to real situations",
                "Can interpret once context is explained"
              ]
            },
            struggling: {
              quantitative: ["Multiple misinterpretations", "Treats negatives as positive"],
              qualitative: [
                "Confuses negative with positive (thinks -5°C is warmer than 0°C)",
                "Cannot explain what negative numbers represent",
                "Does not connect negatives to real-world scenarios",
                "Thinks negative sign is just for subtraction"
              ]
            }
          },
          learningObjectives: [
            "Define negative numbers as numbers less than zero",
            "Interpret negative numbers in real-world contexts (temperature, altitude, money)",
            "Recognize that zero is neither positive nor negative",
            "Understand negative numbers as opposite direction from positive",
            "Connect negative numbers to everyday situations"
          ],
          relevantFormulas: [],
          availableTools: ["numberLine"]
        },
        {
          id: "number-line-representation",
          title: "Number Line Representation",
          difficulty: "foundational",
          prerequisites: ["understanding-negative-numbers"],
          masterySignals: "Student correctly plots integers on number line and identifies positions in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct number line plots",
                "Accurate positioning of all given numbers"
              ],
              qualitative: [
                "Correctly plots negative and positive integers",
                "Understands zero as center/origin",
                "Recognizes numbers to left are smaller",
                "Recognizes numbers to right are larger",
                "Can identify number from position on line"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on direction"],
              qualitative: [
                "Can plot positive numbers but uncertain with negatives",
                "Needs prompting for which direction is smaller/larger",
                "Plots correctly once direction is clarified"
              ]
            },
            struggling: {
              quantitative: ["Plots in wrong direction", "Incorrect ordering"],
              qualitative: [
                "Plots -5 to the right of 0 (wrong direction)",
                "Confuses left/right with smaller/larger",
                "Cannot determine relative positions",
                "Does not understand number line structure"
              ]
            }
          },
          learningObjectives: [
            "Plot integers on a horizontal number line",
            "Identify zero as the origin/center point",
            "Recognize that numbers increase from left to right",
            "Understand distance from zero (absolute value concept)",
            "Use number line to visualize integer relationships"
          ],
          relevantFormulas: [],
          availableTools: ["numberLine"]
        },
        {
          id: "comparing-ordering-integers",
          title: "Comparing and Ordering Integers",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["number-line-representation"],
          masterySignals: "Student correctly compares and orders integers (including negatives) in 3+ problems using inequality symbols",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct comparisons and orderings",
                "Correct use of < and > symbols"
              ],
              qualitative: [
                "Correctly compares negative numbers (knows -3 > -8)",
                "Orders mixed positive and negative numbers",
                "Uses < and > symbols correctly",
                "Explains comparison using number line position",
                "Recognizes that closer to zero means greater (for negatives)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on negative comparisons"],
              qualitative: [
                "Can compare positives but struggles with negatives",
                "Needs prompting for 'closer to zero = greater' rule",
                "Confuses < and > symbols occasionally"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect comparisons of negatives"],
              qualitative: [
                "Thinks -8 > -3 (more negative = greater - wrong!)",
                "Cannot order mixed positive/negative lists",
                "Confuses < and > symbols consistently",
                "Does not use number line to help compare"
              ]
            }
          },
          learningObjectives: [
            "Compare two integers using < and > symbols",
            "Order a list of integers from least to greatest (ascending)",
            "Order a list of integers from greatest to least (descending)",
            "Understand that for negatives, closer to zero = greater",
            "Apply comparisons to real-world contexts (temperature, altitude)"
          ],
          relevantFormulas: [
            "On number line: left < right (always)",
            "For negatives: -2 > -5 (closer to zero is greater)"
          ],
          availableTools: ["numberLine"]
        }
      ]
    },

    learningObjectives: [
      "Understand negative numbers through real-world contexts",
      "Plot integers on a number line accurately",
      "Compare and order integers using inequality symbols",
      "Recognize number line patterns and relationships"
    ],

    keyFormulas: `
Number Line Basics:
- Zero is the origin (neither positive nor negative)
- Numbers to the left are smaller
- Numbers to the right are larger
- For negatives: closer to zero = greater value

Comparing Integers:
- Positive > 0 > Negative (always)
- Example: 3 > 0 > -5
- Example: -2 > -7 (closer to zero wins)
    `
  },

  's1-math-real-numbers-addition-subtraction-integers': {
    displayName: 'Addition & Subtraction of Integers',
    topicName: 'integer addition, subtraction, and zero pairs',

    progressionStructure: {
      sections: [
        {
          id: "zero-pairs-concept",
          title: "Zero Pairs and Adding Integers",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies zero pairs and adds integers using zero pair concept in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct integer additions",
                "Consistent recognition of zero pairs"
              ],
              qualitative: [
                "Explains that (+1) + (-1) = 0 (zero pair)",
                "Correctly adds same-sign integers (add values, keep sign)",
                "Correctly adds different-sign integers (subtract, use larger's sign)",
                "Visualizes using algebra discs or number line",
                "Can explain answer using zero pair reasoning"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on sign rules"],
              qualitative: [
                "Understands zero pairs but forgets to apply",
                "Can add same signs but struggles with different signs",
                "Needs prompting for which sign to use in answer"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect additions", "Sign errors"],
              qualitative: [
                "Does not understand zero pair concept",
                "Adds absolute values regardless of signs (+5 + (-3) = 8)",
                "Cannot determine correct sign of answer",
                "Treats all operations as addition of positives"
              ]
            }
          },
          learningObjectives: [
            "Understand zero pairs: (+1) + (-1) = 0",
            "Add integers with same signs (add values, keep sign)",
            "Add integers with different signs (subtract, use larger's sign)",
            "Visualize addition using algebra discs",
            "Apply integer addition to real-world problems"
          ],
          relevantFormulas: [
            "Same signs: (+a) + (+b) = +(a+b), (-a) + (-b) = -(a+b)",
            "Different signs: larger value determines sign",
            "Zero pair: (+a) + (-a) = 0"
          ],
          availableTools: ["algebraDiscSimulator", "numberLine"]
        },
        {
          id: "subtracting-integers",
          title: "Subtracting Integers",
          difficulty: "intermediate",
          prerequisites: ["zero-pairs-concept"],
          masterySignals: "Student correctly converts subtraction to addition of opposite and solves in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct integer subtractions",
                "Consistent conversion to addition"
              ],
              qualitative: [
                "Correctly applies rule: a - b = a + (-b)",
                "Understands 'subtracting is adding the opposite'",
                "Correctly subtracts positive: 5 - (+3) = 5 + (-3) = 2",
                "Correctly subtracts negative: 5 - (-3) = 5 + (+3) = 8",
                "Recognizes that subtracting negative = adding positive"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on conversion"],
              qualitative: [
                "Can subtract positive but forgets rule for negative",
                "Needs prompting to change minus-negative to plus-positive",
                "Understands after conversion but doesn't do it automatically"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect subtractions of negatives"],
              qualitative: [
                "Cannot convert subtraction to addition",
                "Thinks 5 - (-3) = 2 (wrong - should be 8)",
                "Does not understand 'opposite' concept",
                "Subtracts absolute values without considering signs"
              ]
            }
          },
          learningObjectives: [
            "Apply subtraction rule: a - b = a + (-b)",
            "Understand subtracting positive (becomes negative)",
            "Understand subtracting negative (becomes positive)",
            "Recognize pattern: two negatives make positive",
            "Solve multi-step integer subtraction problems"
          ],
          relevantFormulas: [
            "Subtraction rule: a - b = a + (-b)",
            "Minus a positive: a - (+b) = a + (-b)",
            "Minus a negative: a - (-b) = a + (+b)",
            "Pattern: - (-) = +"
          ],
          availableTools: ["algebraDiscSimulator", "numberLine"]
        },
        {
          id: "combined-integer-operations",
          title: "Combined Addition and Subtraction",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["subtracting-integers"],
          masterySignals: "Student correctly solves multi-step expressions with mixed addition and subtraction in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-step calculations",
                "Accurate tracking of signs throughout"
              ],
              qualitative: [
                "Converts all operations to addition before solving",
                "Groups positive and negative terms strategically",
                "Solves expressions like: 8 - (-3) + (-5) - 4",
                "Applies operations from left to right when needed",
                "Can solve real-world multi-step problems (bank account, temperature)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on conversion"],
              qualitative: [
                "Can solve with guidance on each step",
                "Makes sign errors in middle of calculation",
                "Needs prompting for conversion step"
              ]
            },
            struggling: {
              quantitative: ["Multiple errors in multi-step problems"],
              qualitative: [
                "Cannot track signs through multiple steps",
                "Loses track of which operation to apply",
                "Does not convert to all-addition form",
                "Makes calculation errors in addition"
              ]
            }
          },
          learningObjectives: [
            "Solve multi-step expressions with mixed operations",
            "Convert all subtractions to additions systematically",
            "Group and combine like-signed terms",
            "Apply integer operations to real-world scenarios",
            "Maintain accuracy through complex calculations"
          ],
          relevantFormulas: [
            "Strategy: Convert all to addition first",
            "Group: (positive terms) + (negative terms)",
            "Example: 5 - 8 + 3 - (-2) = 5 + (-8) + 3 + 2"
          ],
          availableTools: ["algebraDiscSimulator"]
        }
      ]
    },

    learningObjectives: [
      "Master addition of integers using zero pairs",
      "Convert subtraction to addition of opposite",
      "Solve multi-step integer expressions",
      "Apply integer operations to real-world problems"
    ],

    keyFormulas: `
Addition Rules:
- Same signs: Add values, keep sign
  (+5) + (+3) = +8
  (-5) + (-3) = -8
- Different signs: Subtract values, use larger's sign
  (+7) + (-3) = +4
  (-7) + (+3) = -4

Subtraction Rules:
- Key rule: a - b = a + (-b)
- Minus positive: becomes adding negative
- Minus negative: becomes adding positive
  5 - (-3) = 5 + 3 = 8

Zero Pairs:
- (+1) + (-1) = 0
- Any number + its opposite = 0
    `
  },

  's1-math-real-numbers-multiplication-division-integers': {
    displayName: 'Multiplication & Division of Integers',
    topicName: 'integer multiplication, division, and order of operations',

    progressionStructure: {
      sections: [
        {
          id: "multiplying-integers",
          title: "Multiplication of Integers",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly applies sign rules for multiplication in 3+ problems and explains why rules work",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct integer multiplications",
                "Consistent correct sign in answer"
              ],
              qualitative: [
                "Applies rule: same signs → positive result",
                "Applies rule: different signs → negative result",
                "Correctly calculates: (+3) × (+4) = +12",
                "Correctly calculates: (-3) × (-4) = +12",
                "Correctly calculates: (+3) × (-4) = -12",
                "Can explain sign rules intuitively"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on sign rules"],
              qualitative: [
                "Can multiply positives but forgets negative rules",
                "Needs prompting for negative × negative = positive",
                "Gets values correct but wrong sign"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect signs in answers"],
              qualitative: [
                "Thinks negative × negative = negative (wrong!)",
                "Cannot remember or apply sign rules",
                "Treats all multiplication as positive",
                "Does not understand why rules work"
              ]
            }
          },
          learningObjectives: [
            "Apply sign rule: same signs → positive",
            "Apply sign rule: different signs → negative",
            "Multiply integers with confidence",
            "Understand intuition behind sign rules",
            "Solve real-world multiplication problems with negatives"
          ],
          relevantFormulas: [
            "Sign Rules for Multiplication:",
            "(+) × (+) = (+)",
            "(-) × (-) = (+)",
            "(+) × (-) = (-)",
            "(-) × (+) = (-)"
          ],
          availableTools: ["algebraDiscSimulator"]
        },
        {
          id: "dividing-integers",
          title: "Division of Integers",
          difficulty: "intermediate",
          prerequisites: ["multiplying-integers"],
          masterySignals: "Student correctly applies sign rules for division (same as multiplication) in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct integer divisions",
                "Consistent correct sign in quotient"
              ],
              qualitative: [
                "Applies rule: same signs → positive quotient",
                "Applies rule: different signs → negative quotient",
                "Correctly calculates: (+12) ÷ (+3) = +4",
                "Correctly calculates: (-12) ÷ (-3) = +4",
                "Correctly calculates: (+12) ÷ (-3) = -4",
                "Recognizes division sign rules match multiplication"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Can divide but forgets sign rules",
                "Needs prompting to apply same rules as multiplication",
                "Gets quotient value but wrong sign"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect signs"],
              qualitative: [
                "Cannot apply sign rules to division",
                "Does not see connection to multiplication rules",
                "Treats all division as positive",
                "Makes calculation errors"
              ]
            }
          },
          learningObjectives: [
            "Apply same sign rules as multiplication to division",
            "Divide integers accurately",
            "Recognize division as inverse of multiplication",
            "Solve division problems with confidence",
            "Check division using multiplication"
          ],
          relevantFormulas: [
            "Sign Rules for Division (same as multiplication):",
            "(+) ÷ (+) = (+)",
            "(-) ÷ (-) = (+)",
            "(+) ÷ (-) = (-)",
            "(-) ÷ (+) = (-)"
          ],
          availableTools: []
        },
        {
          id: "order-of-operations-integers",
          title: "Order of Operations (BODMAS/PEMDAS)",
          difficulty: "advanced",
          prerequisites: ["multiplying-integers", "dividing-integers"],
          masterySignals: "Student correctly evaluates multi-operation expressions following BODMAS in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct BODMAS evaluations",
                "Correct order of operations throughout"
              ],
              qualitative: [
                "Evaluates brackets first",
                "Performs multiplication and division before addition/subtraction",
                "Works left to right within same priority",
                "Correctly evaluates: (-3) × 4 + 8 ÷ (-2)",
                "Correctly evaluates: (5 - 8) × (-2) + 6",
                "Maintains sign accuracy through all steps"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on order"],
              qualitative: [
                "Knows BODMAS but forgets to apply",
                "Makes errors in middle steps",
                "Needs prompting for which operation next"
              ]
            },
            struggling: {
              quantitative: ["Works left to right ignoring BODMAS"],
              qualitative: [
                "Does not know BODMAS order",
                "Performs operations in wrong sequence",
                "Makes both order and sign errors",
                "Cannot track multiple operations"
              ]
            }
          },
          learningObjectives: [
            "Apply BODMAS/PEMDAS order consistently",
            "Evaluate brackets first",
            "Perform multiplication/division before addition/subtraction",
            "Work left to right within same priority level",
            "Maintain accuracy with integer signs throughout"
          ],
          relevantFormulas: [
            "BODMAS/PEMDAS Order:",
            "1. Brackets/Parentheses",
            "2. Orders/Exponents",
            "3. Division & Multiplication (left to right)",
            "4. Addition & Subtraction (left to right)"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Master multiplication and division of integers",
      "Apply sign rules confidently",
      "Evaluate expressions using BODMAS/PEMDAS",
      "Solve complex multi-operation problems"
    ],

    keyFormulas: `
Multiplication & Division Sign Rules:
- Same signs → Positive result
  (+) × (+) = (+),  (-) × (-) = (+)
  (+) ÷ (+) = (+),  (-) ÷ (-) = (+)

- Different signs → Negative result
  (+) × (-) = (-),  (-) × (+) = (-)
  (+) ÷ (-) = (-),  (-) ÷ (+) = (-)

Order of Operations (BODMAS/PEMDAS):
1. Brackets/Parentheses
2. Orders/Exponents
3. Division & Multiplication (left to right)
4. Addition & Subtraction (left to right)
    `
  },

  's1-math-real-numbers-rational-irrational-numbers': {
    displayName: 'Rational & Irrational Numbers',
    topicName: 'rational numbers, irrational numbers, and real number system',

    progressionStructure: {
      sections: [
        {
          id: "understanding-rational-numbers",
          title: "Rational Numbers",
          difficulty: "foundational-to-intermediate",
          prerequisites: [],
          masterySignals: "Student correctly identifies rational numbers and expresses them as fractions in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of rational numbers",
                "Correct conversions to fraction form"
              ],
              qualitative: [
                "Defines rational: can be expressed as a/b (b ≠ 0)",
                "Recognizes integers as rational (5 = 5/1)",
                "Recognizes terminating decimals as rational (0.5 = 1/2)",
                "Recognizes recurring decimals as rational (0.333... = 1/3)",
                "Converts decimals to fractions correctly",
                "Explains that fractions are rational by definition"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Knows definition but struggles to apply",
                "Can identify obvious fractions but misses integers",
                "Uncertain about recurring decimals",
                "Needs prompting for conversions"
              ]
            },
            struggling: {
              quantitative: ["Multiple misidentifications"],
              qualitative: [
                "Cannot define rational numbers",
                "Thinks only fractions are rational",
                "Does not recognize integers as rational",
                "Cannot convert decimals to fractions",
                "Confuses rational with irrational"
              ]
            }
          },
          learningObjectives: [
            "Define rational numbers as a/b where a, b are integers, b ≠ 0",
            "Recognize all integers are rational",
            "Identify terminating decimals as rational",
            "Identify recurring decimals as rational",
            "Convert between decimal and fraction forms"
          ],
          relevantFormulas: [
            "Rational number: a/b where a, b ∈ ℤ, b ≠ 0",
            "Examples: 3/4, 0.5, -7, 0.333...",
            "Decimal conversion: count places, simplify"
          ],
          availableTools: ["vennDiagram"]
        },
        {
          id: "understanding-irrational-numbers",
          title: "Irrational Numbers",
          difficulty: "intermediate",
          prerequisites: ["understanding-rational-numbers"],
          masterySignals: "Student correctly identifies irrational numbers and explains why they cannot be expressed as fractions in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications",
                "Accurate distinction from rational"
              ],
              qualitative: [
                "Defines irrational: cannot be expressed as a/b",
                "Recognizes √2, √3, √5 as irrational (non-perfect squares)",
                "Recognizes π as irrational",
                "Understands decimals never terminate, never repeat",
                "Distinguishes √4 (rational) from √5 (irrational)",
                "Explains why √2 cannot be written as fraction"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Knows π is irrational but unsure why",
                "Uncertain about square roots (when rational vs irrational)",
                "Needs prompting to check if perfect square",
                "Can identify once told which category"
              ]
            },
            struggling: {
              quantitative: ["Cannot distinguish rational from irrational"],
              qualitative: [
                "Thinks all square roots are irrational (misses √4, √9, etc.)",
                "Cannot explain irrational number definition",
                "Confuses irrational with negative",
                "Does not understand decimal characteristic"
              ]
            }
          },
          learningObjectives: [
            "Define irrational numbers as non-expressible as a/b",
            "Recognize √2, √3, √5, √7... as irrational",
            "Recognize π and e as irrational",
            "Distinguish perfect square roots (rational) from others (irrational)",
            "Understand decimal representation never terminates/repeats"
          ],
          relevantFormulas: [
            "Irrational: cannot be written as a/b",
            "Common examples: √2, √3, √5, π, e",
            "Decimal: non-terminating, non-repeating"
          ],
          availableTools: ["numberLine", "vennDiagram"]
        },
        {
          id: "real-number-system",
          title: "The Real Number System",
          difficulty: "intermediate",
          prerequisites: ["understanding-irrational-numbers"],
          masterySignals: "Student correctly classifies numbers using all categories (ℕ, 𝕎, ℤ, ℚ, irrational, ℝ) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct complete classifications",
                "Accurate hierarchy understanding"
              ],
              qualitative: [
                "Correctly classifies using: Natural, Whole, Integer, Rational, Irrational, Real",
                "Understands hierarchy: ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ",
                "Knows -5 is: Integer, Rational, Real (not Natural or Whole)",
                "Knows √2 is: Irrational, Real only",
                "Knows every real number is either rational or irrational",
                "Can place numbers on Venn diagram of number sets"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on hierarchy"],
              qualitative: [
                "Knows some categories but misses others",
                "Uncertain about negative numbers (which categories apply)",
                "Needs prompting for hierarchy",
                "Can classify once categories are reviewed"
              ]
            },
            struggling: {
              quantitative: ["Multiple classification errors"],
              qualitative: [
                "Confuses categories (thinks integers include fractions)",
                "Does not know hierarchy",
                "Cannot determine if number is rational or irrational",
                "Thinks a number can be both rational and irrational"
              ]
            }
          },
          learningObjectives: [
            "Understand number system hierarchy: ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ",
            "Classify numbers using all applicable categories",
            "Recognize Real = Rational ∪ Irrational",
            "Place numbers in Venn diagram representation",
            "Understand that every real number appears on number line"
          ],
          relevantFormulas: [
            "Number Sets:",
            "ℕ = Natural = {1, 2, 3, ...}",
            "𝕎 = Whole = {0, 1, 2, 3, ...}",
            "ℤ = Integers = {..., -2, -1, 0, 1, 2, ...}",
            "ℚ = Rational = {a/b | a, b ∈ ℤ, b ≠ 0}",
            "ℝ = Real = Rational ∪ Irrational"
          ],
          availableTools: ["vennDiagram", "numberLine"]
        }
      ]
    },

    learningObjectives: [
      "Master identification of rational and irrational numbers",
      "Understand the complete real number system hierarchy",
      "Classify numbers into all applicable categories",
      "Recognize relationships between number sets"
    ],

    keyFormulas: `
Rational Numbers (ℚ):
- Definition: a/b where a, b ∈ ℤ, b ≠ 0
- Includes: integers, fractions, terminating decimals, recurring decimals
- Examples: 3, -5, 2/3, 0.5, 0.333...

Irrational Numbers:
- Definition: cannot be expressed as a/b
- Decimals: non-terminating, non-repeating
- Examples: √2, √3, π, e

Real Numbers (ℝ):
- ℝ = ℚ ∪ Irrational
- Every point on number line is a real number
- Hierarchy: ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ
    `
  },

  's1-math-real-numbers-operations-real-numbers': {
    displayName: 'Operations on Real Numbers',
    topicName: 'fraction operations, decimal operations, and mixed calculations',

    progressionStructure: {
      sections: [
        {
          id: "fraction-operations",
          title: "Operations with Fractions",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly performs all four operations with fractions in 3+ problems, simplifying answers",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct fraction operations",
                "Properly simplified final answers"
              ],
              qualitative: [
                "Correctly adds/subtracts fractions (finds LCD)",
                "Correctly multiplies fractions (multiply across)",
                "Correctly divides fractions (multiply by reciprocal)",
                "Simplifies fractions to lowest terms",
                "Handles mixed numbers correctly",
                "Shows work systematically"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on operation"],
              qualitative: [
                "Can perform operations but forgets to simplify",
                "Needs prompting for LCD in addition/subtraction",
                "Confuses division (flip which fraction?)",
                "Makes calculation errors"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect operations"],
              qualitative: [
                "Adds fractions incorrectly (adds denominators)",
                "Cannot find LCD",
                "Does not know division rule",
                "Does not simplify answers",
                "Confuses different operations"
              ]
            }
          },
          learningObjectives: [
            "Add and subtract fractions using LCD",
            "Multiply fractions by multiplying numerators and denominators",
            "Divide fractions using reciprocal (flip and multiply)",
            "Simplify fractions to lowest terms",
            "Convert between improper fractions and mixed numbers"
          ],
          relevantFormulas: [
            "Addition: a/b + c/d = (ad + bc)/bd",
            "Multiplication: a/b × c/d = ac/bd",
            "Division: a/b ÷ c/d = a/b × d/c",
            "Simplify: divide numerator and denominator by GCF"
          ],
          availableTools: []
        },
        {
          id: "decimal-operations",
          title: "Operations with Decimals",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly performs operations with decimals, aligning decimal points properly in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct decimal operations",
                "Proper decimal point placement"
              ],
              qualitative: [
                "Correctly adds/subtracts (aligns decimal points)",
                "Correctly multiplies (counts decimal places)",
                "Correctly divides (moves decimal points in both numbers)",
                "Places decimal point accurately in answer",
                "Shows work with proper alignment"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on alignment"],
              qualitative: [
                "Can calculate but forgets decimal point rules",
                "Needs prompting for proper alignment",
                "Makes place value errors",
                "Gets values right but decimal point wrong"
              ]
            },
            struggling: {
              quantitative: ["Multiple decimal point errors"],
              qualitative: [
                "Does not align decimal points in addition/subtraction",
                "Cannot count decimal places in multiplication",
                "Does not know how to divide decimals",
                "Places decimal point randomly"
              ]
            }
          },
          learningObjectives: [
            "Add and subtract decimals with proper alignment",
            "Multiply decimals by counting total decimal places",
            "Divide decimals by making divisor a whole number",
            "Place decimal point correctly in all operations",
            "Verify answers using estimation"
          ],
          relevantFormulas: [
            "Addition/Subtraction: Align decimal points vertically",
            "Multiplication: Count decimal places in both, add them",
            "Division: Move decimal in divisor to make it whole, move same in dividend"
          ],
          availableTools: []
        },
        {
          id: "converting-forms",
          title: "Converting Between Fractions and Decimals",
          difficulty: "intermediate",
          prerequisites: ["fraction-operations", "decimal-operations"],
          masterySignals: "Student correctly converts between fractions and decimals in both directions in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions in both directions",
                "Simplified fraction form"
              ],
              qualitative: [
                "Converts fraction to decimal by division",
                "Converts decimal to fraction using place value",
                "Simplifies fractions after conversion",
                "Recognizes common equivalents (1/2 = 0.5, 1/4 = 0.25)",
                "Chooses easier form for calculations"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Can convert one direction but struggles with other",
                "Forgets to simplify fractions",
                "Needs prompting for division method",
                "Makes calculation errors"
              ]
            },
            struggling: {
              quantitative: ["Cannot perform conversions"],
              qualitative: [
                "Does not know how to convert fraction to decimal",
                "Does not know how to convert decimal to fraction",
                "Cannot simplify fractions",
                "Does not understand place value"
              ]
            }
          },
          learningObjectives: [
            "Convert fractions to decimals by division",
            "Convert decimals to fractions using place value",
            "Simplify fractions to lowest terms",
            "Memorize common fraction-decimal equivalents",
            "Choose appropriate form for calculations"
          ],
          relevantFormulas: [
            "Fraction → Decimal: Divide numerator by denominator",
            "Decimal → Fraction: Use place value (0.6 = 6/10 = 3/5)",
            "Common equivalents: 1/2=0.5, 1/4=0.25, 3/4=0.75"
          ],
          availableTools: []
        },
        {
          id: "mixed-operations",
          title: "Mixed Operations (Fractions & Decimals)",
          difficulty: "advanced",
          prerequisites: ["converting-forms"],
          masterySignals: "Student correctly solves problems mixing fractions and decimals by converting to one form in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct mixed calculations",
                "Strategic choice of form"
              ],
              qualitative: [
                "Converts to single form before calculating",
                "Chooses easier form (fractions or decimals) strategically",
                "Solves problems like: 1/2 + 0.25 correctly",
                "Applies to real-world problems",
                "Shows complete work with conversions"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on conversion"],
              qualitative: [
                "Can solve once told which form to use",
                "Makes conversion errors",
                "Forgets to convert before operating",
                "Calculation correct but conversion wrong"
              ]
            },
            struggling: {
              quantitative: ["Cannot solve mixed problems"],
              qualitative: [
                "Tries to operate on mixed forms directly",
                "Cannot decide which form to convert to",
                "Makes both conversion and calculation errors",
                "Does not understand when/how to convert"
              ]
            }
          },
          learningObjectives: [
            "Solve problems mixing fractions and decimals",
            "Convert all numbers to same form strategically",
            "Choose easier form for given problem",
            "Apply mixed operations to real-world scenarios",
            "Maintain accuracy through conversions and calculations"
          ],
          relevantFormulas: [
            "Strategy: Convert all to one form first",
            "Choose fractions when: exact values needed",
            "Choose decimals when: estimation sufficient",
            "Example: 1/2 + 0.25 = 0.5 + 0.25 = 0.75 OR 1/2 + 1/4 = 3/4"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Master all four operations with fractions",
      "Perform operations with decimals accurately",
      "Convert between fractions and decimals fluently",
      "Solve mixed problems with strategic conversions"
    ],

    keyFormulas: `
Fraction Operations:
- Add/Subtract: Find LCD, convert, add/subtract numerators
- Multiply: Multiply numerators and denominators
- Divide: Multiply by reciprocal (flip second fraction)
- Simplify: Divide by GCF

Decimal Operations:
- Add/Subtract: Align decimal points
- Multiply: Count total decimal places
- Divide: Make divisor whole number

Conversions:
- Fraction → Decimal: Divide
- Decimal → Fraction: Use place value, simplify
    `
  }
};
