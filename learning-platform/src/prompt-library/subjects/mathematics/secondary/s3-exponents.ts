/**
 * S3 Mathematics - Exponents Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 */

// Type exports
export type ExponentsTopicId =
  | 's3-math-exponents-laws'
  | 's3-math-exponents-rational'
  | 's3-math-exponents-standard-form';

// Topic-specific tutor customization (overrides base)
export const EXPONENTS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Exponents.

Teaching Approach:
- Guide students to discover solutions through questioning, not direct instruction
- Provide progressive hints only when students are stuck
- Celebrate insights and encourage perseverance
- Help students see patterns in exponent rules

**Text-to-Speech Guidelines:**
- Pronounce exponents clearly: "two to the power of three" or "two cubed"
- For notation like a^m, say "a to the power of m"
- Avoid complex formatting in speech - keep it conversational
- Keep speech.text plain and conversational (no markdown, no LaTeX)`,

  visualToolsGuidance: `Visual tools are not typically needed for exponent problems, but use number lines or visualization aids when they help understanding.`
};

// Available math tools for this topic
export const EXPONENTS_MATH_TOOLS = [
  "numberLine"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S3_MATH_EXPONENTS_SUBTOPICS = {

  's3-math-exponents-laws': {
    displayName: 'Exponent Laws',
    topicName: 'exponent laws and integer exponents',

    progressionStructure: {
      sections: [
        {
          id: "basic-exponent-notation",
          title: "Basic Exponent Notation and Terminology",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies base, exponent, and expands notation in 2-3 problems, and understands that a^n means n factors of a",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct identifications of base and exponent",
                "Consistent expansion of exponential notation"
              ],
              qualitative: [
                "Correctly identifies base and exponent in expressions like 5³",
                "Explains that a^n means 'a × a × a × ... × a' (n factors)",
                "Uses correct terminology: base, exponent, power, index",
                "Evaluates simple exponential expressions correctly"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints"],
              qualitative: [
                "Partial understanding of exponential notation",
                "Needs prompting for terminology",
                "Can identify base but struggles with meaning of exponent"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Requests solution early"],
              qualitative: [
                "Confuses base and exponent",
                "Does not understand repeated multiplication concept",
                "Cannot evaluate basic exponential expressions"
              ]
            }
          },
          learningObjectives: [
            "Define exponent notation: a^n means a × a × a × ... × a (n factors)",
            "Identify the base (the number being multiplied)",
            "Identify the exponent/power/index (how many times to multiply)",
            "Evaluate simple exponential expressions (e.g., 2⁴ = 16)",
            "Understand exponential growth through repeated multiplication"
          ],
          relevantFormulas: [
            "a^n = a × a × a × ... × a (n factors of a)",
            "Base = a, Exponent/Power/Index = n"
          ],
          availableTools: []
        },
        {
          id: "multiplication-division-laws",
          title: "Multiplication and Division Laws for Exponents",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["basic-exponent-notation"],
          masterySignals: "Student correctly applies multiplication law (add exponents) and division law (subtract exponents) in 3+ problems with same base",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of multiplication/division laws",
                "Consistent recognition of same base requirement"
              ],
              qualitative: [
                "Correctly applies: a^m × a^n = a^(m+n)",
                "Correctly applies: a^m / a^n = a^(m-n)",
                "Explains why we add exponents when multiplying (combining factors)",
                "Recognizes that bases must be the same to apply these laws"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on when to add/subtract"],
              qualitative: [
                "Understands concept but uncertain when to add vs subtract",
                "Needs prompting for same base requirement",
                "Can apply once operation is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Confuses rules"],
              qualitative: [
                "Adds exponents when should subtract or vice versa",
                "Tries to apply laws with different bases",
                "Does not understand why rules work"
              ]
            }
          },
          learningObjectives: [
            "Apply the multiplication law: a^m × a^n = a^(m+n)",
            "Apply the division law: a^m / a^n = a^(m-n) (provided a ≠ 0)",
            "Understand why we add exponents when multiplying (counting total factors)",
            "Understand why we subtract exponents when dividing",
            "Recognize that bases must be the same to apply these laws"
          ],
          relevantFormulas: [
            "a^m × a^n = a^(m+n) (multiply with same base → add exponents)",
            "a^m / a^n = a^(m-n) (divide with same base → subtract exponents, a ≠ 0)"
          ],
          availableTools: []
        },
        {
          id: "power-laws",
          title: "Power Laws and Product/Quotient Rules",
          difficulty: "intermediate",
          prerequisites: ["multiplication-division-laws"],
          masterySignals: "Student correctly applies power-to-power, product-to-power, and quotient-to-power laws in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of power laws",
                "Consistent recognition of which law applies"
              ],
              qualitative: [
                "Correctly applies: (a^m)^n = a^(mn) - multiply exponents",
                "Correctly applies: (ab)^n = a^n × b^n - distribute power to each factor",
                "Correctly applies: (a/b)^n = a^n / b^n - distribute power to numerator and denominator",
                "Explains why each law works"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Understands some laws but confuses which to apply",
                "Needs prompting for power-to-power vs product-to-power",
                "Can apply once law is identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Confuses laws"],
              qualitative: [
                "Adds exponents when should multiply",
                "Does not distribute power correctly to products/quotients",
                "Cannot distinguish between different power situations"
              ]
            }
          },
          learningObjectives: [
            "Apply power-to-power law: (a^m)^n = a^(mn) - multiply exponents",
            "Apply product-to-power law: (ab)^n = a^n × b^n - raise each factor",
            "Apply quotient-to-power law: (a/b)^n = a^n / b^n - raise numerator and denominator",
            "Understand why multiplying exponents works for nested powers",
            "Recognize when each law applies"
          ],
          relevantFormulas: [
            "(a^m)^n = a^(mn) (power to a power → multiply exponents)",
            "(ab)^n = a^n × b^n (product to a power → raise each factor)",
            "(a/b)^n = a^n / b^n (quotient to a power, b ≠ 0)"
          ],
          availableTools: []
        },
        {
          id: "zero-negative-exponents",
          title: "Zero and Negative Exponents",
          difficulty: "intermediate",
          prerequisites: ["power-laws"],
          masterySignals: "Student correctly applies zero exponent rule (a^0 = 1) and negative exponent rule (a^(-n) = 1/a^n) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of zero/negative exponent rules",
                "Consistent recognition across different bases"
              ],
              qualitative: [
                "Correctly applies: a^0 = 1 (provided a ≠ 0)",
                "Correctly applies: a^(-n) = 1/a^n - reciprocal relationship",
                "Understands that a^n and a^(-n) are reciprocals",
                "Writes expressions without negative exponents when requested"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Knows a^0 = 1 but uncertain about negative exponents",
                "Needs prompting for reciprocal concept",
                "Can apply once rule is stated"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Thinks a^0 = 0"],
              qualitative: [
                "Believes a^0 = 0 or a^0 = a",
                "Does not understand negative exponent means reciprocal",
                "Cannot convert between positive and negative exponents"
              ]
            }
          },
          learningObjectives: [
            "Understand and apply: a^0 = 1 (provided a ≠ 0)",
            "Understand and apply: a^(-n) = 1/a^n - negative exponent creates reciprocal",
            "Recognize that a^n and a^(-n) are reciprocals (multiply to 1)",
            "Write expressions without brackets or negative exponents",
            "Understand special case: a^(-1) = 1/a"
          ],
          relevantFormulas: [
            "a^0 = 1 (provided a ≠ 0)",
            "a^(-n) = 1/a^n",
            "a^(-1) = 1/a",
            "a^n × a^(-n) = a^0 = 1 (reciprocals)"
          ],
          availableTools: []
        },
        {
          id: "prime-base-simplification",
          title: "Writing Powers with Prime Number Bases",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["zero-negative-exponents"],
          masterySignals: "Student converts composite numbers to prime bases and simplifies expressions in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions to prime bases",
                "Consistent application of exponent laws after conversion"
              ],
              qualitative: [
                "Recognizes common prime powers: 4=2², 8=2³, 9=3², 27=3³, etc.",
                "Converts composite bases to prime bases correctly",
                "Applies exponent laws to simplify after conversion",
                "Recognizes when prime base conversion is useful strategy"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on prime factorization"],
              qualitative: [
                "Knows some common prime powers but not all",
                "Needs prompting for prime factorization",
                "Can proceed once prime form is identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect conversions", "Cannot identify primes"],
              qualitative: [
                "Does not know common prime powers",
                "Cannot factor composite numbers into primes",
                "Does not see benefit of prime base conversion"
              ]
            }
          },
          learningObjectives: [
            "Express composite numbers as powers of primes (4=2², 8=2³, 9=3², 27=3³, etc.)",
            "Convert expressions with composite bases to prime bases",
            "Apply exponent laws to simplify expressions with prime bases",
            "Recognize when prime conversion simplifies problem",
            "Combine prime base conversion with other exponent laws"
          ],
          sampleProblems: [
            {
              problem: "Write 4 × 2^p as a power with base 2"
            },
            {
              problem: "Write 32/8 as a single power of 2"
            },
            {
              problem: "Write 25^(x-1) as a power with base 5"
            }
          ],
          relevantFormulas: [
            "Common prime powers: 4=2², 8=2³, 16=2⁴, 32=2⁵",
            "9=3², 27=3³, 25=5², 125=5³",
            "After conversion, apply: a^m × a^n = a^(m+n) or (a^m)^n = a^(mn)"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 5 sections:",
      "1. Basic Notation (foundational) - Understand a^n as repeated multiplication",
      "2. Multiplication/Division Laws (foundational→intermediate) - Master adding/subtracting exponents",
      "3. Power Laws (intermediate) - Apply power-to-power, product-to-power, quotient-to-power",
      "4. Zero/Negative Exponents (intermediate) - Master a^0=1 and a^(-n)=1/a^n",
      "5. Prime Base Simplification (intermediate→advanced) - Convert to prime bases and simplify"
    ],

    keyFormulas: `• a^n = a × a × a × ... × a (n factors)
• a^m × a^n = a^(m+n)
• a^m / a^n = a^(m-n) (a ≠ 0)
• (a^m)^n = a^(mn)
• (ab)^n = a^n × b^n
• (a/b)^n = a^n / b^n (b ≠ 0)
• a^0 = 1 (a ≠ 0)
• a^(-n) = 1/a^n`
  },

  's3-math-exponents-rational': {
    displayName: 'Rational Exponents',
    topicName: 'rational exponents and roots',

    progressionStructure: {
      sections: [
        {
          id: "rational-exponents-form-1-over-n",
          title: "Rational Exponents of the Form 1/n",
          difficulty: "intermediate",
          prerequisites: ["s3-math-exponents-zero-negative-exponents"],
          masterySignals: "Student correctly interprets and evaluates a^(1/n) as the nth root in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct evaluations of a^(1/n)",
                "Consistent recognition of nth root relationship"
              ],
              qualitative: [
                "Understands a^(1/n) = ⁿ√a (the nth root of a)",
                "Correctly evaluates a^(1/2) as square root",
                "Correctly evaluates a^(1/3) as cube root",
                "Uses calculator appropriately for non-perfect roots"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Knows a^(1/2) = √a but uncertain about other roots",
                "Needs prompting for nth root interpretation",
                "Can evaluate once root form is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Cannot interpret notation"],
              qualitative: [
                "Does not understand fractional exponent means root",
                "Confuses with negative exponents",
                "Cannot evaluate even simple cases like 25^(1/2)"
              ]
            }
          },
          learningObjectives: [
            "Understand a^(1/n) = ⁿ√a (the nth root of a)",
            "Evaluate expressions like a^(1/2), a^(1/3), a^(1/4)",
            "Recognize that a^(1/2) = √a (square root)",
            "Understand that ⁿ√a is the number that, when raised to power n, gives a",
            "Use calculator to evaluate rational exponents"
          ],
          relevantFormulas: [
            "a^(1/n) = ⁿ√a (the nth root of a)",
            "a^(1/2) = √a (square root)",
            "a^(1/3) = ³√a (cube root)",
            "Examples: 25^(1/2) = √25 = 5, 8^(1/3) = ³√8 = 2"
          ],
          availableTools: []
        },
        {
          id: "rational-exponents-form-m-over-n",
          title: "Rational Exponents of the Form m/n",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["rational-exponents-form-1-over-n"],
          masterySignals: "Student correctly evaluates a^(m/n) using both forms (power then root, or root then power) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct evaluations of a^(m/n)",
                "Consistent application of both equivalent forms"
              ],
              qualitative: [
                "Understands a^(m/n) = ⁿ√(a^m) = (ⁿ√a)^m",
                "Chooses more efficient method (root then power when root is easy)",
                "Evaluates expressions correctly with both methods",
                "Applies exponent laws with rational exponents"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on which form to use"],
              qualitative: [
                "Understands one form but not both equivalences",
                "Needs prompting for more efficient method",
                "Can evaluate once approach is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Cannot handle m/n form"],
              qualitative: [
                "Does not understand m/n extends 1/n",
                "Cannot evaluate even when given one form",
                "Confuses with other exponent operations"
              ]
            }
          },
          learningObjectives: [
            "Understand a^(m/n) = ⁿ√(a^m) = (ⁿ√a)^m",
            "Evaluate using power then root: 8^(2/3) = ³√(8²) = ³√64 = 4",
            "Evaluate using root then power: 8^(2/3) = (³√8)² = 2² = 4",
            "Choose efficient method based on which calculation is easier",
            "Apply exponent laws with rational exponents"
          ],
          sampleProblems: [
            {
              problem: "Evaluate 27^(2/3)"
            },
            {
              problem: "Evaluate 16^(3/4)"
            },
            {
              problem: "Simplify 8^(1/3) × 8^(2/3)"
            }
          ],
          relevantFormulas: [
            "a^(m/n) = ⁿ√(a^m) = (ⁿ√a)^m",
            "All exponent laws apply: a^(m/n) × a^(p/q) = a^(m/n + p/q)",
            "(a^(m/n))^p = a^((m/n)×p) = a^(mp/n)"
          ],
          availableTools: []
        },
        {
          id: "converting-forms-rational",
          title: "Converting Between Exponential and Radical Forms",
          difficulty: "advanced",
          prerequisites: ["rational-exponents-form-m-over-n"],
          masterySignals: "Student fluently converts between exponential (a^(m/n)) and radical (ⁿ√a^m) forms in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions in both directions",
                "Consistent accurate form conversion"
              ],
              qualitative: [
                "Converts radical to exponential: ⁿ√a = a^(1/n)",
                "Converts exponential to radical: a^(m/n) = ⁿ√(a^m)",
                "Recognizes when each form is more useful",
                "Combines with other exponent laws after conversion"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Can convert one direction but struggles with reverse",
                "Needs prompting for denominator = root, numerator = power",
                "Can proceed once conversion pattern is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect conversions"],
              qualitative: [
                "Does not understand equivalence of forms",
                "Confuses numerator and denominator roles",
                "Cannot identify when to convert"
              ]
            }
          },
          learningObjectives: [
            "Convert radical to exponential: √a = a^(1/2), ³√a = a^(1/3)",
            "Convert exponential to radical: a^(1/n) = ⁿ√a, a^(m/n) = ⁿ√(a^m)",
            "Recognize denominator of exponent = root index",
            "Recognize numerator of exponent = power inside/outside root",
            "Choose appropriate form for simplification"
          ],
          relevantFormulas: [
            "Radical → Exponential: ⁿ√(a^m) = a^(m/n)",
            "Exponential → Radical: a^(m/n) = ⁿ√(a^m) = (ⁿ√a)^m",
            "Denominator = root, Numerator = power"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Form 1/n (intermediate) - Master a^(1/n) = ⁿ√a",
      "2. Form m/n (intermediate→advanced) - Evaluate a^(m/n) using both methods",
      "3. Converting Forms (advanced) - Fluently convert between exponential and radical notation"
    ],

    keyFormulas: `• a^(1/n) = ⁿ√a (the nth root of a)
• a^(1/2) = √a (square root)
• a^(m/n) = ⁿ√(a^m) = (ⁿ√a)^m
• All exponent laws apply to rational exponents
• a^(m/n) × a^(p/q) = a^(m/n + p/q)`
  },

  's3-math-exponents-standard-form': {
    displayName: 'Standard Form (Scientific Notation)',
    topicName: 'scientific notation and standard form',

    progressionStructure: {
      sections: [
        {
          id: "understanding-standard-form",
          title: "Understanding and Writing Standard Form",
          difficulty: "intermediate",
          prerequisites: ["s3-math-exponents-zero-negative-exponents"],
          masterySignals: "Student correctly writes large and small numbers in standard form (a × 10^k where 1 ≤ a < 10) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions to standard form",
                "Consistent correct format (1 ≤ a < 10)"
              ],
              qualitative: [
                "Writes in form a × 10^k where 1 ≤ a < 10",
                "Correctly determines positive exponent for large numbers (≥ 10)",
                "Correctly determines negative exponent for small numbers (< 1)",
                "Counts decimal place movements accurately"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on decimal placement"],
              qualitative: [
                "Understands concept but makes counting errors",
                "Needs prompting for sign of exponent",
                "Gets coefficient correct but wrong exponent or vice versa"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Wrong format"],
              qualitative: [
                "Coefficient not between 1 and 10",
                "Incorrect sign on exponent",
                "Cannot count decimal places correctly"
              ]
            }
          },
          learningObjectives: [
            "Understand standard form: a × 10^k where 1 ≤ a < 10 and k is integer",
            "Identify when to use standard form (very large or very small numbers)",
            "Write large numbers (k positive): 68,000,000 = 6.8 × 10^7",
            "Write small numbers (k negative): 0.0000236 = 2.36 × 10^(-5)",
            "Count decimal place movements to determine k"
          ],
          relevantFormulas: [
            "Standard form: a × 10^k where 1 ≤ a < 10, k is integer",
            "Large numbers (≥ 10): k is positive",
            "Numbers between 1 and 10: k = 0",
            "Small numbers (< 1): k is negative"
          ],
          availableTools: []
        },
        {
          id: "converting-standard-form",
          title: "Converting Between Standard and Ordinary Form",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["understanding-standard-form"],
          masterySignals: "Student converts fluently between standard and ordinary forms in both directions in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions in both directions",
                "Consistent accuracy moving decimals correctly"
              ],
              qualitative: [
                "Converts TO standard form: counts places, determines sign",
                "Converts FROM standard form: moves decimal k places",
                "Remembers: positive k → move RIGHT (larger), negative k → move LEFT (smaller)",
                "Applies to real-world contexts appropriately"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on direction"],
              qualitative: [
                "Can do one direction but struggles with reverse",
                "Needs prompting for which direction to move decimal",
                "Gets magnitude right but places decimal incorrectly"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect conversions"],
              qualitative: [
                "Moves decimal wrong direction",
                "Loses or gains zeros incorrectly",
                "Cannot determine how many places to move"
              ]
            }
          },
          learningObjectives: [
            "Convert ordinary to standard: identify first significant figure, count moves",
            "Convert standard to ordinary: move decimal k places",
            "Understand: positive k → move RIGHT (number gets larger)",
            "Understand: negative k → move LEFT (number gets smaller)",
            "Apply to real-world contexts (astronomy, microscopy, computing)"
          ],
          sampleProblems: [
            {
              problem: "Write in scientific notation: 23,600,000"
            },
            {
              problem: "Write as an ordinary number: 2.57 × 10^4"
            },
            {
              problem: "Write in scientific notation: 0.0000236"
            },
            {
              problem: "The thickness of a coin is about 0.0008 m. Write this in standard form."
            }
          ],
          relevantFormulas: [
            "To convert TO standard: place decimal after first significant figure, count places moved",
            "To convert FROM standard: move decimal k places (right if k>0, left if k<0)",
            "Examples: 2.57 × 10^4 = 25,700 (moved 4 right)",
            "7.853 × 10^(-3) = 0.007853 (moved 3 left)"
          ],
          availableTools: []
        },
        {
          id: "place-value-understanding",
          title: "Understanding Place Value and k",
          difficulty: "advanced",
          prerequisites: ["converting-standard-form"],
          masterySignals: "Student explains relationship between k and place value, and identifies k correctly from original number in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of place value relationships",
                "Consistent understanding across different magnitudes"
              ],
              qualitative: [
                "Explains: 10^k is place value of first significant figure",
                "Determines k from original number's place value",
                "Recognizes: k positive → number ≥ 10, k negative → number < 1",
                "Uses place value understanding to verify standard form conversions"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Understands some connection but not complete picture",
                "Needs prompting for place value interpretation",
                "Can verify once relationship is explained"
              ]
            },
            struggling: {
              quantitative: ["Cannot explain relationship"],
              qualitative: [
                "Does not understand place value concept",
                "Cannot determine k from original number",
                "Sees standard form as arbitrary notation"
              ]
            }
          },
          learningObjectives: [
            "Understand: 10^k is the place value of the first significant figure",
            "Determine k by identifying place value in original number",
            "Recognize patterns: k positive for large numbers, negative for small",
            "Use place value to verify standard form is correct",
            "Apply understanding to scientific contexts (measurements, distances)"
          ],
          relevantFormulas: [
            "10^k = place value of first significant figure",
            "Example: 23,600,000 → 2 is in 10,000,000s place → k=7",
            "Example: 0.000471 → 4 is in 0.0001s place → k=-4"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Understanding Standard Form (intermediate) - Master a × 10^k format for large and small numbers",
      "2. Converting Forms (intermediate→advanced) - Fluently convert between standard and ordinary",
      "3. Place Value Understanding (advanced) - Connect k to place value of first significant figure"
    ],

    keyFormulas: `• Standard form: a × 10^k where 1 ≤ a < 10, k is integer
• Large numbers (≥ 10): k is positive
• Small numbers (< 1): k is negative
• To convert TO standard: count decimal moves, determine sign of k
• To convert FROM standard: move decimal k places (right if k>0, left if k<0)
• 10^k = place value of first significant figure`
  }
};

// Export for backward compatibility
export const S3_MATH_EXPONENTS: Record<ExponentsTopicId, any> = S3_MATH_EXPONENTS_SUBTOPICS;

// Export config that can be used by PromptLibrary
export const S3_MATH_EXPONENTS_CONFIG = {
  TUTOR_ROLE: EXPONENTS_TUTOR_CUSTOMIZATION.teachingPhilosophy,
  QUESTION_AGENT_ROLE: null, // Uses base from prompt-library
  SOLUTION_AGENT_ROLE: null, // Uses base from prompt-library
  MATH_TOOLS_AVAILABLE: EXPONENTS_MATH_TOOLS,
  // FORMATTING_RULES: imported from prompt-library
  // INTERACTION_PROTOCOL: imported from prompt-library
};
