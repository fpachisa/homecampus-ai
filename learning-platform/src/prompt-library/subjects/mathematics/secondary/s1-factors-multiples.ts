/**
 * S1 Mathematics - Factors & Multiples Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 */

// Type exports
export type FactorsMultiplesTopicId =
  | 's1-math-factors-multiples-introduction'
  | 's1-math-factors-multiples-prime-factorisation'
  | 's1-math-factors-multiples-hcf'
  | 's1-math-factors-multiples-lcm'
  | 's1-math-factors-multiples-square-cube-roots';

// Topic-specific tutor customization (overrides base)
export const S1_FACTORS_MULTIPLES_CONFIG = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for Secondary 1 students learning Factors and Multiples.

Teaching Approach:
- Guide students to discover solutions through questioning, not direct instruction
- Help students understand the fundamental building blocks of numbers
- Use real-world contexts (sharing items equally, arranging objects, tiling patterns)
- Celebrate insights when students recognize patterns in factors and multiples
- Adapt difficulty organically based on student mastery
- Build confidence with foundational number concepts

**Text-to-Speech Guidelines:**
- Say "factors" clearly as "FAK-tors"
- Say "multiples" as "MUHL-tih-puls"
- Say "HCF" as "H C F" or "highest common factor"
- Say "LCM" as "L C M" or "lowest common multiple"
- For prime factorization like 2³, say "two cubed" or "two to the power of three"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name (e.g., "numberLine", "primeFactorTree") in the toolName field, NOT the display name.
Available tools for this topic: numberLine, vennDiagram for HCF/LCM visualization.`
};

// Available math tools for this topic
export const S1_FACTORS_MULTIPLES_MATH_TOOLS = [
  "numberLine",
  "vennDiagram"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S1_MATH_FACTORS_MULTIPLES_SUBTOPICS = {

  's1-math-factors-multiples-introduction': {
    displayName: 'Introduction to Factors & Multiples',
    topicName: 'factors, multiples, and divisibility',

    progressionStructure: {
      sections: [
        {
          id: "understanding-factors",
          title: "Understanding Factors",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies all factors of numbers up to 50 in 3+ problems and explains what makes a number a factor",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct complete factor lists",
                "No missing factors in systematic listing"
              ],
              qualitative: [
                "Correctly identifies all factors of a given number",
                "Lists factors systematically in pairs (1 and n, 2 and n/2, etc.)",
                "Explains that factors divide exactly with no remainder",
                "Recognizes 1 and the number itself are always factors",
                "Can check divisibility to verify factors"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on systematic listing"],
              qualitative: [
                "Finds some factors but misses others",
                "Needs prompting for systematic pairing strategy",
                "Understands concept but execution incomplete",
                "Forgets 1 or the number itself"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Lists non-factors"],
              qualitative: [
                "Lists numbers that don't divide exactly (e.g., 3 as factor of 10)",
                "Confuses factors with multiples",
                "Cannot explain what makes a number a factor",
                "No systematic approach to finding factors"
              ]
            }
          },
          learningObjectives: [
            "Define factor: a whole number that divides exactly into another number",
            "List all factors of a number systematically using factor pairs",
            "Understand that 1 and the number itself are always factors",
            "Check divisibility to verify if a number is a factor",
            "Recognize the relationship between multiplication and factors"
          ],
          relevantFormulas: [
            "If a × b = n, then a and b are factors of n",
            "n ÷ factor = whole number (no remainder)"
          ],
          availableTools: []
        },
        {
          id: "understanding-multiples",
          title: "Understanding Multiples",
          difficulty: "foundational",
          prerequisites: ["understanding-factors"],
          masterySignals: "Student correctly lists first 5-10 multiples of given numbers and identifies multiples from a list in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multiple listings",
                "Consistent recognition of multiples vs non-multiples"
              ],
              qualitative: [
                "Lists multiples systematically (n×1, n×2, n×3, ...)",
                "Explains that multiples are products of a number with whole numbers",
                "Identifies multiples from a given list",
                "Recognizes that multiples continue infinitely",
                "Understands the number itself is always the first multiple"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Can list multiples but needs prompting for system",
                "Occasional calculation errors",
                "Understands concept but uncertain with larger numbers"
              ]
            },
            struggling: {
              quantitative: ["Multiple errors", "Confuses with factors"],
              qualitative: [
                "Confuses multiples with factors",
                "Lists factors instead of multiples",
                "Cannot identify pattern in multiples",
                "Makes calculation errors in multiplication"
              ]
            }
          },
          learningObjectives: [
            "Define multiple: the result of multiplying a number by any whole number",
            "List the first n multiples of a number systematically",
            "Recognize that multiples are in the multiplication table of a number",
            "Identify whether a number is a multiple of another",
            "Understand that multiples continue infinitely"
          ],
          relevantFormulas: [
            "Multiples of n: n×1, n×2, n×3, n×4, ...",
            "If a is a multiple of b, then a ÷ b gives a whole number"
          ],
          availableTools: ["numberLine"]
        },
        {
          id: "divisibility-tests",
          title: "Divisibility Tests",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["understanding-multiples"],
          masterySignals: "Student correctly applies divisibility tests for 2, 3, 4, 5, 6, 9, 10 in 3+ problems without calculation",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of divisibility tests",
                "Quick recognition without full division"
              ],
              qualitative: [
                "Applies divisibility test for 2 (last digit even)",
                "Applies divisibility test for 5 (last digit 0 or 5)",
                "Applies divisibility test for 10 (last digit 0)",
                "Applies divisibility test for 3 (sum of digits divisible by 3)",
                "Applies divisibility test for 9 (sum of digits divisible by 9)",
                "Applies divisibility test for 4 (last 2 digits divisible by 4)",
                "Applies divisibility test for 6 (divisible by both 2 and 3)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on which test to use"],
              qualitative: [
                "Knows some tests (2, 5, 10) but not all",
                "Needs prompting for digit sum tests (3, 9)",
                "Can apply once test is identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect tests", "Resorts to long division"],
              qualitative: [
                "Does not remember divisibility tests",
                "Confuses different tests",
                "Cannot apply digit sum concept",
                "Defaults to long division instead of using tests"
              ]
            }
          },
          learningObjectives: [
            "Apply divisibility test for 2, 5, 10 using last digit",
            "Apply divisibility test for 3, 9 using sum of digits",
            "Apply divisibility test for 4 using last two digits",
            "Apply divisibility test for 6 using combination (2 and 3)",
            "Use divisibility tests to quickly check factors"
          ],
          sampleProblems: [
            {
              problem: "Is 348 divisible by 3? Use a divisibility test."
            },
            {
              problem: "Which of these numbers is divisible by 9: 234, 567, 891?"
            }
          ],
          relevantFormulas: [
            "Divisible by 2: last digit is 0, 2, 4, 6, or 8",
            "Divisible by 3: sum of digits is divisible by 3",
            "Divisible by 4: last 2 digits form a number divisible by 4",
            "Divisible by 5: last digit is 0 or 5",
            "Divisible by 6: divisible by both 2 and 3",
            "Divisible by 9: sum of digits is divisible by 9",
            "Divisible by 10: last digit is 0"
          ],
          availableTools: []
        },
        {
          id: "common-factors-multiples",
          title: "Common Factors and Common Multiples",
          difficulty: "intermediate",
          prerequisites: ["divisibility-tests"],
          masterySignals: "Student correctly finds common factors and common multiples of two numbers in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of common factors/multiples",
                "Systematic listing of factors/multiples for both numbers"
              ],
              qualitative: [
                "Lists all factors of each number",
                "Identifies which factors appear in both lists",
                "Lists multiples of each number",
                "Identifies which multiples appear in both lists",
                "Understands intersection concept for common elements"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on systematic approach"],
              qualitative: [
                "Can list factors/multiples but misses some common ones",
                "Needs prompting for systematic comparison",
                "Understands concept but execution incomplete"
              ]
            },
            struggling: {
              quantitative: ["Multiple errors", "Cannot identify commonality"],
              qualitative: [
                "Lists factors/multiples of only one number",
                "Cannot compare two lists systematically",
                "Confuses common factors with common multiples",
                "Misses common elements"
              ]
            }
          },
          learningObjectives: [
            "Find all common factors of two numbers by comparing factor lists",
            "Find common multiples of two numbers by comparing multiple lists",
            "Understand that common factors/multiples appear in both lists",
            "Use systematic listing to ensure no common elements are missed",
            "Prepare foundation for HCF and LCM concepts"
          ],
          relevantFormulas: [
            "Common factors: factors that appear in both numbers' factor lists",
            "Common multiples: multiples that appear in both numbers' multiple lists"
          ],
          availableTools: ["vennDiagram"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Understanding Factors (foundational) - List all factors systematically",
      "2. Understanding Multiples (foundational) - Generate and identify multiples",
      "3. Divisibility Tests (foundational→intermediate) - Quick tests for 2,3,4,5,6,9,10",
      "4. Common Factors/Multiples (intermediate) - Find common elements between two numbers"
    ],

    keyFormulas: `• Factor: a whole number that divides exactly into another number
• Multiple: the result of multiplying a number by any whole number
• Divisibility tests for 2, 3, 4, 5, 6, 9, 10
• Common factors: factors appearing in both numbers
• Common multiples: multiples appearing in both numbers`
  },

  's1-math-factors-multiples-prime-factorisation': {
    displayName: 'Prime Numbers and Factorisation',
    topicName: 'prime numbers, composite numbers, and prime factorization',

    progressionStructure: {
      sections: [
        {
          id: "prime-composite-numbers",
          title: "Prime and Composite Numbers",
          difficulty: "foundational",
          prerequisites: ["s1-math-factors-multiples-understanding-factors"],
          masterySignals: "Student correctly identifies prime and composite numbers up to 50 and explains why in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications with justification",
                "Consistent application of prime definition"
              ],
              qualitative: [
                "Defines prime number: exactly 2 factors (1 and itself)",
                "Defines composite number: more than 2 factors",
                "Correctly identifies primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47",
                "Recognizes 1 is neither prime nor composite",
                "Recognizes 2 is the only even prime",
                "Explains reasoning using factor count"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Understands prime concept but makes errors (e.g., thinks 1 is prime)",
                "Needs prompting to check all factors",
                "Can classify once factors are listed"
              ]
            },
            struggling: {
              quantitative: ["Multiple misclassifications", "Cannot explain reasoning"],
              qualitative: [
                "Confuses prime with odd numbers",
                "Thinks 1 is prime or 2 is not prime",
                "Cannot explain what makes a number prime",
                "Lists incorrect primes"
              ]
            }
          },
          learningObjectives: [
            "Define prime number: has exactly 2 factors (1 and itself)",
            "Define composite number: has more than 2 factors",
            "Recognize that 1 is neither prime nor composite (only 1 factor)",
            "Identify that 2 is the only even prime number",
            "List prime numbers up to 50",
            "Classify numbers as prime or composite with justification"
          ],
          relevantFormulas: [
            "Prime: exactly 2 factors (1 and itself)",
            "Composite: more than 2 factors",
            "Primes up to 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47"
          ],
          availableTools: []
        },
        {
          id: "prime-factorisation-method",
          title: "Prime Factorisation Method",
          difficulty: "intermediate",
          prerequisites: ["prime-composite-numbers"],
          masterySignals: "Student correctly expresses composite numbers as products of prime factors using factor tree or division method in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct prime factorisations",
                "Consistent use of factor tree or division method"
              ],
              qualitative: [
                "Breaks down composite numbers into prime factors systematically",
                "Uses factor tree method correctly (branching factors)",
                "Uses repeated division method correctly (dividing by smallest prime)",
                "Continues until all factors are prime",
                "Verifies result by multiplying primes back together",
                "Recognizes when factorisation is complete (all primes)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on next step"],
              qualitative: [
                "Starts factorisation but stops too early (leaves composite factors)",
                "Needs prompting to continue until all factors are prime",
                "Can complete once method is reinforced"
              ]
            },
            struggling: {
              quantitative: ["Multiple incomplete factorisations", "Includes non-prime factors"],
              qualitative: [
                "Stops factorisation before reaching all primes",
                "Includes composite numbers in final answer",
                "Cannot systematically break down numbers",
                "Confuses factors with multiples"
              ]
            }
          },
          learningObjectives: [
            "Express composite numbers as products of prime factors",
            "Use factor tree method to find prime factorisation",
            "Use repeated division method to find prime factorisation",
            "Continue factorisation until all factors are prime",
            "Verify prime factorisation by multiplication"
          ],
          sampleProblems: [
            {
              problem: "Find the prime factorisation of 60"
            },
            {
              problem: "Express 84 as a product of prime factors"
            },
            {
              problem: "Use a factor tree to find the prime factors of 72"
            }
          ],
          relevantFormulas: [
            "Every composite number can be expressed as a product of primes",
            "Factor tree: repeatedly split into factors until all are prime",
            "Division method: divide by smallest prime repeatedly"
          ],
          availableTools: []
        },
        {
          id: "index-notation",
          title: "Prime Factorisation in Index Notation",
          difficulty: "intermediate",
          prerequisites: ["prime-factorisation-method"],
          masterySignals: "Student correctly writes prime factorisations in index form (e.g., 2³ × 3² × 5) in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct index form expressions",
                "Correct counting of repeated prime factors"
              ],
              qualitative: [
                "Writes repeated factors using index notation (2 × 2 × 2 = 2³)",
                "Arranges primes in ascending order",
                "Correctly counts how many times each prime appears",
                "Understands that index shows number of times factor is used",
                "Can convert between expanded form and index form"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on counting"],
              qualitative: [
                "Understands index notation but makes counting errors",
                "Needs prompting to group repeated factors",
                "Can write in index form once factors are grouped"
              ]
            },
            struggling: {
              quantitative: ["Multiple errors in indices", "Cannot use index notation"],
              qualitative: [
                "Does not understand index notation",
                "Writes 2 × 2 × 2 instead of 2³",
                "Miscounts repeated factors",
                "Cannot convert between forms"
              ]
            }
          },
          learningObjectives: [
            "Write prime factorisation using index notation",
            "Count repeated prime factors correctly",
            "Understand that a^n means a is used as a factor n times",
            "Arrange prime factors in ascending order",
            "Convert between expanded and index form"
          ],
          relevantFormulas: [
            "2 × 2 × 2 = 2³ (2 cubed or 2 to the power 3)",
            "Index notation: base^index where base is prime, index is count",
            "Example: 72 = 2³ × 3²"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Prime and Composite Numbers (foundational) - Classify numbers by factor count",
      "2. Prime Factorisation Method (intermediate) - Break numbers into prime factors",
      "3. Index Notation (intermediate) - Write prime factorisation compactly"
    ],

    keyFormulas: `• Prime: exactly 2 factors (1 and itself)
• Composite: more than 2 factors
• Prime factorisation: expressing a number as a product of primes
• Index notation: 2 × 2 × 2 = 2³
• Factor tree or division method to find prime factors`
  },

  's1-math-factors-multiples-hcf': {
    displayName: 'Highest Common Factor (HCF)',
    topicName: 'highest common factor and GCD',

    progressionStructure: {
      sections: [
        {
          id: "hcf-listing-method",
          title: "Finding HCF by Listing Factors",
          difficulty: "intermediate",
          prerequisites: ["s1-math-factors-multiples-common-factors-multiples"],
          masterySignals: "Student correctly finds HCF of two or three numbers by listing all factors and identifying the highest common one in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct HCF findings using listing method",
                "Complete factor lists for all numbers"
              ],
              qualitative: [
                "Lists all factors of each number systematically",
                "Identifies all common factors",
                "Selects the highest common factor correctly",
                "Can find HCF of 2 or 3 numbers",
                "Verifies by checking HCF divides all numbers exactly"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on finding all factors"],
              qualitative: [
                "Lists some factors but misses some",
                "Identifies common factors but not the highest",
                "Needs prompting for systematic listing",
                "Can complete once all factors are listed"
              ]
            },
            struggling: {
              quantitative: ["Multiple errors", "Selects wrong common factor"],
              qualitative: [
                "Cannot list all factors of numbers",
                "Confuses common factors with all factors",
                "Selects a common factor but not the highest",
                "Confuses HCF with LCM"
              ]
            }
          },
          learningObjectives: [
            "Define HCF: the largest number that divides exactly into all given numbers",
            "List all factors of each number systematically",
            "Identify common factors from the lists",
            "Select the highest common factor",
            "Find HCF of 2 or 3 numbers using listing method"
          ],
          relevantFormulas: [
            "HCF = Highest Common Factor (also called GCD - Greatest Common Divisor)",
            "Method: List all factors → Find common factors → Select highest"
          ],
          availableTools: ["vennDiagram"]
        },
        {
          id: "hcf-prime-factorisation",
          title: "Finding HCF Using Prime Factorisation",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["hcf-listing-method", "s1-math-factors-multiples-index-notation"],
          masterySignals: "Student correctly finds HCF using prime factorisation method (selecting lowest powers of common primes) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct HCF findings using prime factorisation",
                "Correct identification of common prime factors"
              ],
              qualitative: [
                "Writes prime factorisation of each number in index form",
                "Identifies which prime factors appear in all numbers",
                "Selects the lowest power of each common prime",
                "Multiplies common primes (with lowest powers) to get HCF",
                "Understands why we take lowest powers",
                "Can handle numbers with different prime factors"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on selecting powers"],
              qualitative: [
                "Can write prime factorisations correctly",
                "Identifies common primes but confused about which power to use",
                "Needs prompting for lowest power rule",
                "Can complete once rule is reinforced"
              ]
            },
            struggling: {
              quantitative: ["Multiple errors", "Uses highest power instead of lowest"],
              qualitative: [
                "Cannot identify common prime factors",
                "Uses highest power instead of lowest",
                "Multiplies all primes instead of just common ones",
                "Makes errors in prime factorisation"
              ]
            }
          },
          learningObjectives: [
            "Write each number as a product of prime factors in index form",
            "Identify prime factors that appear in all numbers",
            "Select the lowest power of each common prime factor",
            "Multiply common primes (with lowest powers) to find HCF",
            "Understand why prime factorisation method is efficient for larger numbers"
          ],
          sampleProblems: [
            {
              problem: "Find the HCF of 24 and 36 using prime factorisation"
            },
            {
              problem: "Use prime factorisation to find HCF of 48, 72, and 96"
            }
          ],
          relevantFormulas: [
            "1. Write each number in prime factorisation (index form)",
            "2. Identify common prime factors",
            "3. Take lowest power of each common prime",
            "4. Multiply these together to get HCF",
            "Example: HCF(24, 36) → 24 = 2³×3, 36 = 2²×3² → HCF = 2²×3 = 12"
          ],
          availableTools: []
        },
        {
          id: "hcf-applications",
          title: "Applications of HCF",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["hcf-prime-factorisation"],
          masterySignals: "Student correctly solves real-world problems involving HCF (grouping, sharing, arranging) in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions to HCF word problems",
                "Correct interpretation of problem context"
              ],
              qualitative: [
                "Recognizes when a problem requires finding HCF",
                "Translates word problem into HCF calculation",
                "Applies appropriate method (listing or prime factorisation)",
                "Interprets HCF answer in context of the problem",
                "Explains why HCF solves the problem"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on problem setup"],
              qualitative: [
                "Can find HCF once identified, but needs help recognizing it's needed",
                "Struggles with translating word problem to numbers",
                "Can solve once problem is set up"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify HCF problems", "Uses LCM instead"],
              qualitative: [
                "Cannot recognize when HCF is needed",
                "Confuses HCF and LCM applications",
                "Cannot translate word problem to mathematics",
                "Misinterprets the answer in context"
              ]
            }
          },
          learningObjectives: [
            "Recognize real-world situations requiring HCF",
            "Apply HCF to solve grouping problems (largest equal groups)",
            "Apply HCF to sharing problems (largest size that divides exactly)",
            "Apply HCF to arrangement problems (largest common dimension)",
            "Interpret HCF answer in context of the problem"
          ],
          sampleProblems: [
            {
              problem: "A teacher has 24 pencils and 36 erasers. What is the largest number of identical gift packs that can be made using all items?"
            },
            {
              problem: "Two ropes of lengths 48 cm and 72 cm are to be cut into pieces of equal length. What is the greatest possible length of each piece?"
            }
          ],
          relevantFormulas: [
            "HCF applications: largest equal groups, greatest common size, biggest common dimension",
            "Keywords: largest, greatest, maximum equal groups, same size"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. HCF by Listing Method (intermediate) - List factors and find highest common",
      "2. HCF by Prime Factorisation (intermediate→advanced) - Use lowest powers of common primes",
      "3. HCF Applications (intermediate→advanced) - Solve real-world grouping/sharing problems"
    ],

    keyFormulas: `• HCF = Highest Common Factor (largest number dividing all given numbers)
• Listing method: List factors → Find common → Select highest
• Prime factorisation method: Lowest power of each common prime factor
• HCF applications: largest equal groups, greatest common measure`
  },

  's1-math-factors-multiples-lcm': {
    displayName: 'Lowest Common Multiple (LCM)',
    topicName: 'lowest common multiple and applications',

    progressionStructure: {
      sections: [
        {
          id: "lcm-listing-method",
          title: "Finding LCM by Listing Multiples",
          difficulty: "intermediate",
          prerequisites: ["s1-math-factors-multiples-common-factors-multiples"],
          masterySignals: "Student correctly finds LCM of two numbers by listing multiples and identifying the lowest common one in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct LCM findings using listing method",
                "Systematic listing of multiples"
              ],
              qualitative: [
                "Lists multiples of each number systematically",
                "Identifies common multiples from the lists",
                "Selects the lowest common multiple correctly",
                "Knows to stop listing once LCM is found",
                "Verifies by checking both numbers divide into LCM exactly"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Lists multiples but misses the lowest common one",
                "Needs prompting for how far to list multiples",
                "Can identify once both lists are extended enough",
                "Understands concept but execution incomplete"
              ]
            },
            struggling: {
              quantitative: ["Multiple errors", "Selects wrong multiple"],
              qualitative: [
                "Cannot list multiples systematically",
                "Selects a common multiple but not the lowest",
                "Stops listing too early and misses LCM",
                "Confuses LCM with HCF"
              ]
            }
          },
          learningObjectives: [
            "Define LCM: the smallest number that is a multiple of all given numbers",
            "List multiples of each number systematically",
            "Identify common multiples from the lists",
            "Select the lowest common multiple",
            "Find LCM of 2 numbers using listing method"
          ],
          relevantFormulas: [
            "LCM = Lowest Common Multiple (smallest number divisible by all given numbers)",
            "Method: List multiples → Find common multiples → Select lowest"
          ],
          availableTools: ["numberLine", "vennDiagram"]
        },
        {
          id: "lcm-prime-factorisation",
          title: "Finding LCM Using Prime Factorisation",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["lcm-listing-method", "s1-math-factors-multiples-index-notation"],
          masterySignals: "Student correctly finds LCM using prime factorisation method (selecting highest powers of all primes) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct LCM findings using prime factorisation",
                "Correct identification of all prime factors"
              ],
              qualitative: [
                "Writes prime factorisation of each number in index form",
                "Identifies all prime factors that appear in any number",
                "Selects the highest power of each prime factor",
                "Multiplies all primes (with highest powers) to get LCM",
                "Understands why we take highest powers",
                "Can handle numbers with different sets of prime factors"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on selecting powers"],
              qualitative: [
                "Can write prime factorisations correctly",
                "Identifies primes but confused about which power to use",
                "Needs prompting for highest power rule",
                "Can complete once rule is reinforced"
              ]
            },
            struggling: {
              quantitative: ["Multiple errors", "Uses lowest power instead of highest"],
              qualitative: [
                "Cannot identify all prime factors needed",
                "Uses lowest power instead of highest",
                "Misses primes that appear in only one number",
                "Makes errors in prime factorisation"
              ]
            }
          },
          learningObjectives: [
            "Write each number as a product of prime factors in index form",
            "Identify all prime factors that appear in any of the numbers",
            "Select the highest power of each prime factor",
            "Multiply all primes (with highest powers) to find LCM",
            "Understand why prime factorisation method is efficient"
          ],
          sampleProblems: [
            {
              problem: "Find the LCM of 12 and 18 using prime factorisation"
            },
            {
              problem: "Use prime factorisation to find LCM of 24, 36, and 48"
            }
          ],
          relevantFormulas: [
            "1. Write each number in prime factorisation (index form)",
            "2. Identify all prime factors (from any number)",
            "3. Take highest power of each prime",
            "4. Multiply these together to get LCM",
            "Example: LCM(12, 18) → 12 = 2²×3, 18 = 2×3² → LCM = 2²×3² = 36"
          ],
          availableTools: []
        },
        {
          id: "hcf-lcm-relationship",
          title: "Relationship Between HCF and LCM",
          difficulty: "advanced",
          prerequisites: ["lcm-prime-factorisation", "s1-math-factors-multiples-hcf-prime-factorisation"],
          masterySignals: "Student correctly uses the formula HCF × LCM = Product of numbers for two numbers in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of HCF × LCM formula",
                "Can find missing value (HCF, LCM, or one number) given others"
              ],
              qualitative: [
                "Understands that HCF × LCM = a × b for two numbers a and b",
                "Uses formula to find HCF when LCM and numbers are known",
                "Uses formula to find LCM when HCF and numbers are known",
                "Uses formula to find one number when the other, HCF, and LCM are known",
                "Can verify HCF and LCM calculations using this relationship"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on formula rearrangement"],
              qualitative: [
                "Knows the formula but uncertain about rearrangement",
                "Needs prompting for which formula form to use",
                "Can solve once equation is set up"
              ]
            },
            struggling: {
              quantitative: ["Cannot use formula", "Makes algebraic errors"],
              qualitative: [
                "Does not understand the HCF × LCM relationship",
                "Cannot rearrange formula to find different unknowns",
                "Makes calculation errors",
                "Confuses which values to substitute"
              ]
            }
          },
          learningObjectives: [
            "Understand the relationship: HCF(a,b) × LCM(a,b) = a × b",
            "Use formula to find HCF when LCM and both numbers are known",
            "Use formula to find LCM when HCF and both numbers are known",
            "Use formula to verify HCF and LCM calculations",
            "Apply algebraic rearrangement to solve for unknowns"
          ],
          relevantFormulas: [
            "For two numbers a and b: HCF × LCM = a × b",
            "Rearrangements: HCF = (a × b) / LCM",
            "LCM = (a × b) / HCF",
            "One number = (HCF × LCM) / other number"
          ],
          availableTools: []
        },
        {
          id: "lcm-applications",
          title: "Applications of LCM",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["lcm-prime-factorisation"],
          masterySignals: "Student correctly solves real-world problems involving LCM (recurring events, patterns, simultaneous occurrences) in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions to LCM word problems",
                "Correct interpretation of problem context"
              ],
              qualitative: [
                "Recognizes when a problem requires finding LCM",
                "Translates word problem into LCM calculation",
                "Applies appropriate method (listing or prime factorisation)",
                "Interprets LCM answer in context (next time events coincide)",
                "Explains why LCM solves the problem"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on problem setup"],
              qualitative: [
                "Can find LCM once identified, but needs help recognizing it's needed",
                "Struggles with translating word problem to numbers",
                "Can solve once problem is set up"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify LCM problems", "Uses HCF instead"],
              qualitative: [
                "Cannot recognize when LCM is needed",
                "Confuses LCM and HCF applications",
                "Cannot translate word problem to mathematics",
                "Misinterprets the answer in context"
              ]
            }
          },
          learningObjectives: [
            "Recognize real-world situations requiring LCM",
            "Apply LCM to recurring event problems (when events coincide)",
            "Apply LCM to pattern problems (common cycle length)",
            "Apply LCM to synchronization problems (same starting point again)",
            "Interpret LCM answer in context of the problem"
          ],
          sampleProblems: [
            {
              problem: "Bus A arrives every 12 minutes, Bus B every 18 minutes. If both arrive at 9:00 AM, when will they next arrive together?"
            },
            {
              problem: "Two bells ring at intervals of 15 seconds and 20 seconds. If they ring together now, after how many seconds will they ring together again?"
            }
          ],
          relevantFormulas: [
            "LCM applications: recurring events, common cycles, synchronization",
            "Keywords: next time together, when will coincide, common interval, same starting point"
          ],
          availableTools: ["numberLine"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. LCM by Listing Method (intermediate) - List multiples and find lowest common",
      "2. LCM by Prime Factorisation (intermediate→advanced) - Use highest powers of all primes",
      "3. HCF-LCM Relationship (advanced) - Apply HCF × LCM = a × b formula",
      "4. LCM Applications (intermediate→advanced) - Solve recurring event/pattern problems"
    ],

    keyFormulas: `• LCM = Lowest Common Multiple (smallest number divisible by all given numbers)
• Listing method: List multiples → Find common → Select lowest
• Prime factorisation method: Highest power of each prime factor (all primes)
• HCF × LCM = a × b (for two numbers a and b)
• LCM applications: recurring events, common cycles, synchronization`
  },

  's1-math-factors-multiples-square-cube-roots': {
    displayName: 'Square and Cube Roots',
    topicName: 'perfect squares, perfect cubes, and roots',

    progressionStructure: {
      sections: [
        {
          id: "perfect-squares",
          title: "Perfect Squares and Square Roots",
          difficulty: "foundational-to-intermediate",
          prerequisites: [],
          masterySignals: "Student correctly identifies perfect squares, finds square roots of perfect squares up to 225, and understands inverse relationship in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications and calculations",
                "Knows squares 1² to 15² from memory or quick calculation"
              ],
              qualitative: [
                "Defines square number: n² = n × n",
                "Identifies perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225",
                "Understands √a means 'what number squared gives a?'",
                "Recognizes that squaring and square root are inverse operations",
                "Can find square root of perfect squares mentally or with pattern recognition"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Knows some perfect squares but not all",
                "Needs prompting for square root meaning",
                "Can find square root once concept is reinforced",
                "Uncertain about larger perfect squares (121+)"
              ]
            },
            struggling: {
              quantitative: ["Multiple errors", "Cannot identify perfect squares"],
              qualitative: [
                "Does not understand square concept",
                "Cannot recognize perfect squares",
                "Confuses square with double (2n vs n²)",
                "Cannot find square roots even of simple numbers"
              ]
            }
          },
          learningObjectives: [
            "Understand square number: n² = n × n",
            "Identify and memorize perfect squares from 1² to 15²",
            "Understand square root: √a asks 'what number squared gives a?'",
            "Recognize that (√a)² = a and √(a²) = a (inverse operations)",
            "Find square roots of perfect squares up to 225"
          ],
          relevantFormulas: [
            "Square: n² = n × n",
            "Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225",
            "Square root: √n² = n",
            "Inverse relationship: (√a)² = a and √(a²) = a"
          ],
          availableTools: []
        },
        {
          id: "perfect-cubes",
          title: "Perfect Cubes and Cube Roots",
          difficulty: "intermediate",
          prerequisites: ["perfect-squares"],
          masterySignals: "Student correctly identifies perfect cubes, finds cube roots of perfect cubes up to 1000, and understands inverse relationship in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications and calculations",
                "Knows cubes 1³ to 10³"
              ],
              qualitative: [
                "Defines cube number: n³ = n × n × n",
                "Identifies perfect cubes: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000",
                "Understands ³√a means 'what number cubed gives a?'",
                "Recognizes that cubing and cube root are inverse operations",
                "Can find cube root of perfect cubes",
                "Recognizes negative cubes (e.g., (-2)³ = -8, ³√(-8) = -2)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Knows some perfect cubes but not all",
                "Needs prompting for cube root meaning",
                "Can find cube root once concept is reinforced",
                "Uncertain about negative cubes"
              ]
            },
            struggling: {
              quantitative: ["Multiple errors", "Cannot identify perfect cubes"],
              qualitative: [
                "Does not understand cube concept",
                "Confuses cubes with triple (3n vs n³)",
                "Cannot recognize perfect cubes",
                "Cannot find cube roots"
              ]
            }
          },
          learningObjectives: [
            "Understand cube number: n³ = n × n × n",
            "Identify and know perfect cubes from 1³ to 10³",
            "Understand cube root: ³√a asks 'what number cubed gives a?'",
            "Recognize that (³√a)³ = a and ³√(a³) = a (inverse operations)",
            "Find cube roots of perfect cubes including negative cubes"
          ],
          relevantFormulas: [
            "Cube: n³ = n × n × n",
            "Perfect cubes: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000",
            "Cube root: ³√n³ = n",
            "Negative cubes: (-n)³ = -(n³), ³√(-a) = -³√a"
          ],
          availableTools: []
        },
        {
          id: "estimating-roots",
          title: "Estimating Square and Cube Roots",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["perfect-cubes"],
          masterySignals: "Student correctly estimates square/cube roots of non-perfect squares/cubes by identifying between which consecutive perfect squares/cubes they lie in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct estimations with justification",
                "Identifies correct consecutive perfect squares/cubes"
              ],
              qualitative: [
                "Identifies which two perfect squares a number lies between",
                "Identifies which two perfect cubes a number lies between",
                "Estimates √50 is between √49=7 and √64=8",
                "Estimates ³√100 is between ³√64=4 and ³√125=5",
                "Can refine estimate (closer to which end of range)",
                "Uses calculator to verify estimate"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on perfect squares/cubes"],
              qualitative: [
                "Understands method but needs help identifying perfect squares/cubes",
                "Can estimate once range is identified",
                "Uncertain about refining estimates"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify range", "Random guessing"],
              qualitative: [
                "Does not know enough perfect squares/cubes to identify range",
                "Cannot compare non-perfect with perfect numbers",
                "Makes wild guesses without justification",
                "Cannot use pattern to estimate"
              ]
            }
          },
          learningObjectives: [
            "Identify which two consecutive perfect squares a number lies between",
            "Identify which two consecutive perfect cubes a number lies between",
            "Estimate square root by finding bounding perfect squares",
            "Estimate cube root by finding bounding perfect cubes",
            "Refine estimate by considering position within range"
          ],
          sampleProblems: [
            {
              problem: "Estimate √50 by identifying which two consecutive whole numbers it lies between"
            },
            {
              problem: "Between which two consecutive integers does ³√200 lie?"
            }
          ],
          relevantFormulas: [
            "If a² < n < b², then a < √n < b",
            "If a³ < n < b³, then a < ³√n < b",
            "Use known perfect squares/cubes to bracket the estimate"
          ],
          availableTools: []
        },
        {
          id: "roots-with-prime-factorisation",
          title: "Finding Roots Using Prime Factorisation",
          difficulty: "advanced",
          prerequisites: ["estimating-roots", "s1-math-factors-multiples-index-notation"],
          masterySignals: "Student correctly finds square/cube roots of larger perfect squares/cubes using prime factorisation in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct root calculations using prime factorisation",
                "Correct prime factorisation in index form"
              ],
              qualitative: [
                "Writes number in prime factorisation form",
                "For square root: divides each index by 2",
                "For cube root: divides each index by 3",
                "Recognizes when a number is a perfect square (all indices even)",
                "Recognizes when a number is a perfect cube (all indices divisible by 3)",
                "Understands √(a^n) = a^(n/2) and ³√(a^n) = a^(n/3)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on index manipulation"],
              qualitative: [
                "Can write prime factorisation correctly",
                "Needs prompting for dividing indices",
                "Can complete once method is reinforced"
              ]
            },
            struggling: {
              quantitative: ["Multiple errors in index division", "Cannot recognize perfect squares/cubes"],
              qualitative: [
                "Cannot use prime factorisation to find roots",
                "Does not understand index division",
                "Cannot determine if number is perfect square/cube from prime factors",
                "Makes calculation errors"
              ]
            }
          },
          learningObjectives: [
            "Use prime factorisation to find square roots (divide indices by 2)",
            "Use prime factorisation to find cube roots (divide indices by 3)",
            "Recognize perfect squares from prime factorisation (all even indices)",
            "Recognize perfect cubes from prime factorisation (all indices divisible by 3)",
            "Apply to larger numbers where mental calculation is difficult"
          ],
          sampleProblems: [
            {
              problem: "Find √144 using prime factorisation"
            },
            {
              problem: "Use prime factorisation to find ³√216"
            },
            {
              problem: "Is 180 a perfect square? Justify using prime factorisation."
            }
          ],
          relevantFormulas: [
            "√(a^n) = a^(n/2) (for square root, divide index by 2)",
            "³√(a^n) = a^(n/3) (for cube root, divide index by 3)",
            "Perfect square: all prime factor indices are even",
            "Perfect cube: all prime factor indices are divisible by 3",
            "Example: √(2⁴ × 3²) = 2² × 3 = 12"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Perfect Squares and Square Roots (foundational→intermediate) - Understand n² and √n",
      "2. Perfect Cubes and Cube Roots (intermediate) - Understand n³ and ³√n",
      "3. Estimating Roots (intermediate→advanced) - Bracket non-perfect roots between consecutive integers",
      "4. Roots with Prime Factorisation (advanced) - Use prime factors to find roots of larger numbers"
    ],

    keyFormulas: `• Square: n² = n × n; Square root: √n² = n
• Cube: n³ = n × n × n; Cube root: ³√n³ = n
• Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225
• Perfect cubes: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000
• √(a^n) = a^(n/2), ³√(a^n) = a^(n/3)
• Perfect square test: all prime factor indices even
• Perfect cube test: all prime factor indices divisible by 3`
  }

};

// Export global config for registration
export const S1_FACTORS_MULTIPLES_TUTOR_CUSTOMIZATION = S1_FACTORS_MULTIPLES_CONFIG;
export const S1_FACTORS_MULTIPLES_AVAILABLE_TOOLS = S1_FACTORS_MULTIPLES_MATH_TOOLS;
