/**
 * S1 Mathematics: Approximation and Estimation
 *
 * This module covers fundamental concepts of rounding, significant figures, and estimation
 * techniques for Secondary 1 students, aligned with the Singapore Mathematics curriculum.
 */

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ApproximationEstimationTopicId =
  | 's1-math-approximation-estimation-rounding-decimal-places'
  | 's1-math-approximation-estimation-significant-figures'
  | 's1-math-approximation-estimation-techniques';

// ============================================================================
// TOPIC CONFIGURATION
// ============================================================================

export const S1_APPROXIMATION_ESTIMATION_CONFIG = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for Secondary 1 students learning Approximation and Estimation.

Teaching Approach:
- Guide students to understand WHY we approximate (practical limitations, ease of use)
- Help students develop number sense and reasonableness checking
- Use real-world contexts: money, population figures, measurements, shopping
- Build from concrete (rounding whole numbers) to abstract (significant figures)
- Emphasize the trade-off between simplicity and accuracy
- Celebrate insights when students recognize appropriate degrees of accuracy

**Text-to-Speech Guidelines:**
- Say "approximately equals" instead of "≈" symbol
- Say "significant figures" fully, not "s f" or "sig figs"
- Spell out "d p" as "decimal places" for clarity
- Say numbers clearly: "twenty-three thousand six hundred forty-five"
- For rounding notation, say "rounds to" not "approximately equals to"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name (e.g., "numberLine") in the toolName field, NOT the display name.

Available tools for this topic:
- numberLine: Essential for showing rounding ranges, midpoints, and intervals
- barChart: For estimation from visual data and graph reading
- cartesianPlane: For coordinate estimation and measurement visualization

Examples of effective tool use:
- numberLine to show where 23,645 sits between 23,640 and 23,650 (midpoint concept)
- barChart to practice estimating values from graphs
- numberLine with highlighted regions for upper/lower bounds`
};

// ============================================================================
// AVAILABLE MATH TOOLS
// ============================================================================

export const S1_APPROXIMATION_ESTIMATION_MATH_TOOLS = [
  "numberLine",
  "barChart",
  "cartesianPlane"
];

// ============================================================================
// SUBTOPICS CONFIGURATION
// ============================================================================

export const S1_MATH_APPROXIMATION_ESTIMATION_SUBTOPICS = {
  // ========================================================================
  // SUBTOPIC 1: ROUNDING TO DECIMAL PLACES
  // ========================================================================

  's1-math-approximation-estimation-rounding-decimal-places': {
    displayName: 'Rounding to Decimal Places',
    topicName: 'Approximation and Estimation',

    progressionStructure: {
      sections: [
        {
          id: "understanding-rounding-midpoint",
          title: "Understanding Rounding and the Midpoint Concept",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student explains why numbers round up or down based on the midpoint, correctly identifies midpoints, and rounds 4+ numbers using number line reasoning",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct answers with minimal hints",
                "Explains reasoning using midpoint concept",
                "Correctly rounds in both directions (up and down)"
              ],
              qualitative: [
                "Understands that 5 is the midpoint between 0 and 9",
                "Explains why midpoint rounds up by convention",
                "Can visualize numbers on a number line mentally",
                "Identifies closer endpoint without calculation",
                "Applies concept to any place value (ones, tens, hundreds)"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with hints about midpoint",
                "Memorizes '5 rounds up' without understanding why"
              ],
              qualitative: [
                "Knows the rounding rule but not the reasoning",
                "Struggles to visualize on number line",
                "Correctly rounds 5 but unsure about other digits",
                "Needs prompting to identify which endpoint is closer"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Inconsistent rounding decisions",
                "Cannot explain why 5 rounds up"
              ],
              qualitative: [
                "Does not understand midpoint concept",
                "Rounds randomly or always in one direction",
                "Cannot identify which of two numbers is closer",
                "Confused about what 'nearest' means",
                "Treats all digits the same regardless of place value"
              ]
            }
          },

          learningObjectives: [
            "Understand that rounding finds the nearest value within a specified degree of accuracy",
            "Recognize that the midpoint (5) conventionally rounds up",
            "Use a number line to visualize rounding decisions",
            "Identify which endpoint a number is closer to",
            "Explain the purpose of rounding in real-world contexts"
          ],

          relevantFormulas: [
            "Midpoint concept: If the digit to consider is 5 or more, round up; if less than 5, round down",
            "Degree of accuracy: The place value to which we round (nearest 10, 100, 1000, etc.)"
          ],

          sampleProblems: [
            "Round 23,645 to the nearest 10. Explain using a number line.",
            "Round 23,645 to the nearest 100. How does your answer change?",
            "Why do we round 23,645 up to 23,650 (nearest 10) but down to 23,600 (nearest 100)?"
          ],

          availableTools: ["numberLine"]
        },

        {
          id: "rounding-whole-numbers",
          title: "Rounding Whole Numbers to Place Values",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["understanding-rounding-midpoint"],
          masterySignals: "Student correctly rounds whole numbers to nearest 10, 100, and 1000 in 4+ problems, identifies the digit to consider, and applies rounding rules accurately",
          estimatedQuestions: "4-6 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct answers across different place values",
                "Consistent accuracy with minimal hints",
                "Correctly handles edge cases (e.g., 999 rounded to nearest 10)"
              ],
              qualitative: [
                "Identifies the correct digit to consider for each place value",
                "Knows to look at ones place for nearest 10, tens place for nearest 100, etc.",
                "Correctly applies round up/down rule",
                "Replaces remaining digits with zeros as placeholders",
                "Verifies answer makes sense (checks if result is reasonable)"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with hints on which digit to check",
                "Occasional errors with placeholder zeros"
              ],
              qualitative: [
                "Sometimes checks wrong digit (e.g., checks tens when rounding to nearest 10)",
                "Applies rounding rule correctly once digit is identified",
                "Forgets to add placeholder zeros",
                "Confuses 'nearest 100' with 'nearest hundred' vs 'nearest hundredth'",
                "Needs reminder about which direction to round"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors across different place values",
                "Cannot complete without step-by-step guidance",
                "Random digit selection"
              ],
              qualitative: [
                "Does not know which digit to look at",
                "Rounds the wrong digit or in wrong direction",
                "Confused between rounding to different place values",
                "Adds wrong number of zeros or no zeros",
                "Cannot distinguish between 'to nearest 100' and 'to 100s place'"
              ]
            }
          },

          learningObjectives: [
            "Round whole numbers to the nearest 10, 100, and 1000",
            "Identify the digit to consider for each degree of accuracy",
            "Apply the rounding rule (5 or more rounds up, less than 5 rounds down)",
            "Use zeros as placeholders after rounding",
            "Verify rounded answers are reasonable"
          ],

          relevantFormulas: [
            "To round to nearest 10: Look at the ones digit (Example: 5,610,475 → look at 5 → round up to 5,610,480)",
            "To round to nearest 100: Look at the tens digit (Example: 5,610,475 → look at 7 → round up to 5,610,500)",
            "To round to nearest 1000: Look at the hundreds digit (Example: 5,610,475 → look at 4 → round down to 5,610,000)"
          ],

          sampleProblems: [
            "Singapore's population was 5,610,475. Round to nearest: (a) 1000, (b) million",
            "A school has 24,891 students. Round to: (a) nearest 10, (b) nearest 100, (c) nearest 10,000",
            "Which rounding gives a more accurate representation: nearest 10 or nearest 1000? Explain."
          ],

          availableTools: ["numberLine"]
        },

        {
          id: "rounding-one-decimal-place",
          title: "Rounding to 1 Decimal Place",
          difficulty: "intermediate",
          prerequisites: ["rounding-whole-numbers"],
          masterySignals: "Student rounds decimal numbers to 1 d.p. correctly in 3+ problems, identifies the digit in the hundredths place, and understands that the process mirrors whole number rounding",
          estimatedQuestions: "3-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct answers without hints",
                "Handles various decimal forms (e.g., 8.4695, 9.95, 12.04)"
              ],
              qualitative: [
                "Identifies tenths place as the place to round to",
                "Looks at hundredths place (next digit) to decide",
                "Applies same rounding rules as whole numbers",
                "Understands that rounding to 1 d.p. means one digit after decimal point",
                "Does not add extra zeros after final decimal place (8.5, not 8.50)",
                "Can explain difference between 'd.p.' and 'decimal place value'"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on which digit to check",
                "Occasional confusion about decimal place notation"
              ],
              qualitative: [
                "Knows to look one place beyond target but sometimes counts wrong",
                "Applies rounding rule correctly once digit is identified",
                "Sometimes adds unnecessary trailing zeros",
                "Confuses 1 d.p. with 'to nearest tenth' terminology",
                "Needs reminder that decimal rounding follows same rules as whole numbers"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors, even with guidance",
                "Cannot identify which digit to check",
                "Rounds to wrong decimal place"
              ],
              qualitative: [
                "Does not understand decimal place value",
                "Confused about what '1 decimal place' means",
                "Tries to round the whole number part",
                "Cannot locate hundredths place",
                "Applies whole number rounding rules incorrectly to decimals"
              ]
            }
          },

          learningObjectives: [
            "Understand that rounding decimals follows the same rules as whole numbers",
            "Identify the tenths place as the target when rounding to 1 d.p.",
            "Look at the hundredths place to decide round up or down",
            "Express final answer with exactly 1 digit after the decimal point",
            "Recognize when rounding to 1 d.p. is appropriate (measurements, money)"
          ],

          relevantFormulas: [
            "To round to 1 d.p.: Look at the digit in the hundredths place",
            "If hundredths digit is 5 or more, round tenths up; if less than 5, keep tenths same",
            "Example: 8.4695 → look at 6 (hundredths) → 6 ≥ 5 → round up → 8.5"
          ],

          sampleProblems: [
            "Round 8.4695 to 1 decimal place",
            "Round 9.003 50 to 1 decimal place. Explain your reasoning.",
            "A measurement is 12.47 cm. Round to 1 d.p. Why might we do this?"
          ],

          availableTools: ["numberLine"]
        },

        {
          id: "rounding-multiple-decimal-places",
          title: "Rounding to 2 and 3 Decimal Places",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["rounding-one-decimal-place"],
          masterySignals: "Student rounds to 2 d.p. and 3 d.p. accurately in 4+ problems, understands increasing accuracy with more decimal places, and correctly handles multiple rounding steps",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct across 2 d.p. and 3 d.p. problems",
                "Can round the same number to different decimal places",
                "Handles consecutive rounding correctly"
              ],
              qualitative: [
                "Identifies correct decimal place to examine (thousandths for 2 d.p., ten-thousandths for 3 d.p.)",
                "Understands that more decimal places = higher accuracy",
                "Recognizes that 8.470 (3 d.p.) is more accurate than 8.47 (2 d.p.)",
                "Can round a number progressively (to 1 d.p., then that result to 0 d.p.)",
                "Explains why final answer differs based on decimal places kept",
                "Notes that trailing zeros in 3 d.p. indicate measurement precision"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with hints on place value",
                "Struggles with 3 d.p. but handles 2 d.p. well"
              ],
              qualitative: [
                "Counts decimal places correctly but sometimes examines wrong digit",
                "Understands the pattern but makes occasional place value errors",
                "Forgets to include trailing zeros when required (8.47 vs 8.470)",
                "Can round to 2 d.p. but confused about 3 d.p.",
                "Doesn't yet grasp the accuracy relationship between d.p. levels"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in place value identification",
                "Cannot round beyond 1 d.p. consistently",
                "Mixes up 2 d.p. and 3 d.p. requirements"
              ],
              qualitative: [
                "Loses track of decimal places while counting",
                "Confused about hundredths vs thousandths vs ten-thousandths",
                "Cannot explain difference between 2 d.p. and 3 d.p.",
                "Rounds incorrectly when there are many digits",
                "Does not understand why we might need 3 d.p. instead of 1 d.p."
              ]
            }
          },

          learningObjectives: [
            "Round decimal numbers to 2 and 3 decimal places accurately",
            "Identify the correct digit to examine for each degree of precision",
            "Understand that more decimal places provide higher accuracy",
            "Recognize when to include trailing zeros (8.470 for 3 d.p.)",
            "Compare accuracy of same number rounded to different decimal places"
          ],

          relevantFormulas: [
            "To round to 2 d.p.: Look at the digit in the thousandths place (3rd decimal place)",
            "To round to 3 d.p.: Look at the digit in the ten-thousandths place (4th decimal place)",
            "Example: 8.4695 → 2 d.p. → look at 9 (thousandths) → round up → 8.47",
            "Example: 8.4695 → 3 d.p. → look at 5 (ten-thousandths) → round up → 8.470"
          ],

          sampleProblems: [
            "Round 8.4695 to: (a) 2 d.p., (b) 3 d.p. Which is more accurate?",
            "Round 9.003 50 to: (a) nearest tenth, (b) 3 d.p. Are the answers the same? Explain.",
            "A scientist measures 0.004 503 m. Round to 2 d.p. and explain why trailing zeros matter."
          ],

          availableTools: ["numberLine"]
        }
      ]
    },

    learningObjectives: [
      "Understand the concept of rounding as approximation to a specified degree of accuracy",
      "Apply the midpoint rule (5 rounds up) with understanding",
      "Round whole numbers to various place values (10, 100, 1000, million)",
      "Round decimal numbers to 1, 2, and 3 decimal places",
      "Recognize that more decimal places provide greater accuracy",
      "Choose appropriate degrees of accuracy for real-world contexts"
    ],

    keyFormulas: `**Rounding Rule:**
If the digit to consider is **5 or more**, round up the number.
If the digit is **less than 5**, round down (keep the digit the same).

**For Whole Numbers:**
- Nearest 10: Look at ones digit
- Nearest 100: Look at tens digit
- Nearest 1000: Look at hundreds digit

**For Decimals:**
- 1 d.p.: Look at hundredths (2nd decimal place)
- 2 d.p.: Look at thousandths (3rd decimal place)
- 3 d.p.: Look at ten-thousandths (4th decimal place)

**Degree of Accuracy:** The place value to which we round. Higher precision = more decimal places kept.`
  },

  // ========================================================================
  // SUBTOPIC 2: SIGNIFICANT FIGURES
  // ========================================================================

  's1-math-approximation-estimation-significant-figures': {
    displayName: 'Significant Figures',
    topicName: 'Approximation and Estimation',

    progressionStructure: {
      sections: [
        {
          id: "understanding-significant-figures",
          title: "Understanding Significant Figures",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student explains what significant figures are, why they matter for accuracy, and can distinguish them from decimal places in 3+ scenarios",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct explanations of s.f. concept",
                "Correctly identifies which digits are significant in simple examples"
              ],
              qualitative: [
                "Understands s.f. represent the important/meaningful digits",
                "Explains that s.f. indicate precision of measurement or calculation",
                "Recognizes that 500 (1 s.f.) is less accurate than 500.0 (4 s.f.)",
                "Distinguishes between s.f. and decimal places clearly",
                "Can explain why scientists use s.f. instead of d.p."
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Basic understanding but incomplete"
              ],
              qualitative: [
                "Knows s.f. are 'important digits' but vague about why",
                "Can identify obvious significant digits but unsure about zeros",
                "Confuses s.f. with d.p. in some cases",
                "Needs examples to explain concept",
                "Understands practical use but not theoretical basis"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot explain s.f. concept",
                "Thinks s.f. and d.p. are the same thing"
              ],
              qualitative: [
                "Does not understand what 'significant' means in this context",
                "Believes all digits in a number are equally important",
                "Cannot explain why 500 might have 1, 2, or 3 s.f.",
                "Sees no difference between accuracy and precision"
              ]
            }
          },

          learningObjectives: [
            "Define significant figures as the important digits in a number",
            "Understand that s.f. indicate the precision or accuracy of a value",
            "Distinguish between significant figures and decimal places",
            "Recognize that the same number can have different s.f. depending on context",
            "Explain why significant figures are used in science and measurements"
          ],

          relevantFormulas: [
            "Significant figures (s.f.): The important digits used to express the degree of accuracy",
            "More s.f. = more accurate/precise the number",
            "Example: 54,332 has 5 s.f.; 0.16 has 2 s.f."
          ],

          sampleProblems: [
            "Explain the difference between 3 decimal places and 3 significant figures.",
            "Why does 0.000 8 (1 s.f.) convey less precision than 0.000 80 (2 s.f.)?",
            "A thickness is given as 0.004 503 m. How do s.f. help communicate accuracy?"
          ],

          availableTools: []
        },

        {
          id: "identifying-significant-figures-rules",
          title: "The Five Rules for Identifying Significant Figures",
          difficulty: "intermediate",
          prerequisites: ["understanding-significant-figures"],
          masterySignals: "Student correctly applies all 5 rules to identify s.f. in whole numbers and decimals in 5+ problems, explains each rule, and handles edge cases",
          estimatedQuestions: "5-7 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "5+ correct across various number types",
                "Applies all 5 rules correctly and consistently",
                "Handles edge cases (100 009, 0.040 05, 1.60)"
              ],
              qualitative: [
                "Rule 1: Identifies all non-zero digits as significant",
                "Rule 2: Recognizes zeros between non-zero digits are significant",
                "Rule 3: Knows zeros at end of integers may or may not be significant (context-dependent)",
                "Rule 4: Understands zeros before first non-zero in decimals are NOT significant",
                "Rule 5: Recognizes zeros after non-zero in decimals ARE significant",
                "Can explain the reasoning behind each rule",
                "Applies rules in combination for complex numbers"
              ]
            },
            developing: {
              quantitative: [
                "3-4 correct with occasional rule confusion",
                "Knows rules but sometimes applies wrong one"
              ],
              qualitative: [
                "Confidently applies Rules 1, 2, and 4",
                "Struggles with Rule 3 (trailing zeros in integers like 500)",
                "Sometimes forgets Rule 5 (trailing zeros after decimal non-zero digits)",
                "Needs hints to identify which rule applies",
                "Makes errors when multiple rules needed for same number",
                "Can state rules but application is inconsistent"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple rule violations",
                "Cannot identify s.f. in even simple cases",
                "Random counting of digits"
              ],
              qualitative: [
                "Does not understand or remember the 5 rules",
                "Counts all digits as significant",
                "Ignores zeros entirely or counts all of them",
                "Cannot distinguish leading zeros from trailing zeros",
                "Confused about when zeros count",
                "Cannot explain any rule with understanding"
              ]
            }
          },

          learningObjectives: [
            "Apply Rule 1: All non-zero digits are significant",
            "Apply Rule 2: All zeros between non-zero digits are significant",
            "Apply Rule 3: Zeros at end of integers may or may not be significant",
            "Apply Rule 4: Zeros before the first non-zero digit in decimals are NOT significant",
            "Apply Rule 5: Zeros after a non-zero digit in decimals ARE significant",
            "Determine the number of significant figures in any number using these rules"
          ],

          relevantFormulas: [
            "**Rule 1:** All non-zero digits are significant (54332 → all 5 digits significant)",
            "**Rule 2:** All zeros between non-zero digits are significant (100009 → all 6 digits significant, 0.04005 → 4 significant)",
            "**Rule 3:** Zeros at end of integers may or may not be significant depending on approximation (500 rounded to nearest 100 → 1 s.f.; 500 exact count → 3 s.f.)",
            "**Rule 4:** Zeros before first non-zero digit are NOT significant (0.0008 → 1 s.f., 0.011 → 2 s.f.)",
            "**Rule 5:** Zeros after non-zero digit in decimals ARE significant (1.60 → 3 s.f., 0.07000 → 4 s.f.)"
          ],

          sampleProblems: [
            "How many significant figures: (a) 54332, (b) 0.16, (c) 100009, (d) 0.04005?",
            "Does 500 have 1, 2, or 3 significant figures? Explain when each is correct.",
            "Why does 0.0008 have 1 s.f. but 0.0070 have 2 s.f.?"
          ],

          availableTools: []
        },

        {
          id: "rounding-significant-figures",
          title: "Rounding to Specified Significant Figures",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["identifying-significant-figures-rules"],
          masterySignals: "Student rounds to 2 s.f. and 3 s.f. correctly in 4+ problems, identifies the target significant figure, applies rounding rules, and uses zeros as placeholders correctly",
          estimatedQuestions: "4-6 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct answers across whole numbers and decimals",
                "Handles various s.f. requirements (2 s.f., 3 s.f., 4 s.f.)",
                "Correctly manages placeholder zeros"
              ],
              qualitative: [
                "Locates the nth significant figure from the left",
                "Examines the next digit to decide round up/down",
                "Applies standard rounding rule (5 or more rounds up)",
                "Uses zeros as placeholders when needed (60000 for 60220 to 1 s.f.)",
                "Recognizes that zeros after rounding to s.f. ARE significant",
                "Can round both large numbers (60220) and small decimals (0.008101)",
                "Verifies final answer has correct number of s.f."
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with hints on which digit is the target s.f.",
                "Occasional placeholder zero errors"
              ],
              qualitative: [
                "Can count to find target s.f. with prompting",
                "Applies rounding rule correctly once target identified",
                "Sometimes forgets placeholder zeros (writes 6 instead of 60000)",
                "Struggles with decimals vs whole numbers",
                "Needs reminder to count s.f. from first non-zero digit",
                "Makes errors when rounding changes number magnitude significantly"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in identifying target s.f.",
                "Cannot complete rounding process",
                "Wrong number of s.f. in final answer"
              ],
              qualitative: [
                "Does not know how to locate the 2nd or 3rd s.f.",
                "Counts from wrong position (from right instead of left)",
                "Rounds wrong digit",
                "Omits necessary placeholder zeros",
                "Cannot distinguish between 2 s.f. and 2 d.p.",
                "Final answer has incorrect number of s.f."
              ]
            }
          },

          learningObjectives: [
            "Round numbers to a specified number of significant figures (2 s.f., 3 s.f., etc.)",
            "Locate the target significant figure by counting from the first non-zero digit",
            "Apply rounding rules to the digit following the target s.f.",
            "Use zeros as placeholders to maintain place value after rounding",
            "Verify the final answer has the correct number of significant figures"
          ],

          relevantFormulas: [
            "**Rounding to n s.f.:**",
            "1. Count to the nth significant figure from the left (starting from first non-zero digit)",
            "2. Look at the next digit (n+1 position)",
            "3. If next digit is 5 or more, round up; if less than 5, keep same",
            "4. Replace remaining digits with zeros as placeholders (if needed)",
            "**Example:** 60220 to 2 s.f. → 2nd s.f. is '0', next digit is '2' → round down → 60000"
          ],

          sampleProblems: [
            "Round to 2 s.f.: (a) 60220, (b) 0.008101, (c) 89.950",
            "Round 70049 to 3 s.f. Explain why placeholder zeros are needed.",
            "Round 0.070185 to 3 s.f. How is this different from rounding to 3 d.p.?"
          ],

          availableTools: []
        },

        {
          id: "follow-through-errors-calculations",
          title: "Follow-through Errors and Significant Figures in Calculations",
          difficulty: "advanced",
          prerequisites: ["rounding-significant-figures"],
          masterySignals: "Student understands how rounding intermediate steps affects final accuracy, calculates with appropriate s.f. throughout, and explains the (n+1) rule for intermediate calculations",
          estimatedQuestions: "3-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of follow-through error concept",
                "Uses (n+1) s.f. rule in intermediate steps",
                "Final answers have correct s.f."
              ],
              qualitative: [
                "Understands that rounding intermediate values can change final result",
                "Knows to keep extra s.f. during calculation, round only at end",
                "Applies (n+1) rule: if final needs n s.f., keep n+1 in intermediate steps",
                "Recognizes when early rounding causes significant error propagation",
                "Can compare results from different rounding strategies",
                "Explains why calculator precision is better than premature rounding"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance on when to round",
                "Understands concept but application inconsistent"
              ],
              qualitative: [
                "Knows early rounding is problematic but not sure how to avoid it",
                "Sometimes rounds too early out of habit",
                "Aware of (n+1) rule but forgets to apply it",
                "Can identify follow-through error when shown, but doesn't prevent it independently",
                "Needs reminders about when to round in multi-step problems"
              ]
            },
            struggling: {
              quantitative: [
                "Rounds at every step, causing large errors",
                "Cannot explain difference between methods",
                "Unaware of accuracy loss"
              ],
              qualitative: [
                "Does not understand how rounding affects accuracy",
                "Rounds every intermediate result without thinking",
                "Believes rounding early simplifies calculation (doesn't see downside)",
                "Cannot explain follow-through error concept",
                "No strategy for maintaining accuracy through calculations"
              ]
            }
          },

          learningObjectives: [
            "Understand that rounding intermediate values can introduce follow-through errors",
            "Apply the (n+1) rule: keep one extra s.f. during intermediate calculations",
            "Recognize when to round (only at the final answer for maximum accuracy)",
            "Compare results from rounding at different stages of calculation",
            "Explain why premature rounding reduces final answer accuracy"
          ],

          relevantFormulas: [
            "**Follow-through Error:** Error that occurs when rounded intermediate values are used in further calculations",
            "**The (n+1) Rule:** If final answer needs n s.f., keep at least n+1 s.f. in all intermediate steps",
            "**Example:** To get answer correct to 3 s.f., keep 4 s.f. during calculation",
            "**Best Practice:** Use full calculator precision during calculation, round only the final answer"
          ],

          sampleProblems: [
            "Calculate (1/3 + 1/3 + 1/3) by: (a) rounding each 1/3 to 1 s.f. first, (b) using full precision. Compare results.",
            "The perimeter of a square tile is found from side length 1.414 m (4 s.f.). Give answer to 3 s.f. How many s.f. should you keep during calculation?",
            "Explain why rounding √2 = 1.414 to 1.4 before multiplying by 4 gives less accurate result than rounding after."
          ],

          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Understand what significant figures represent and why they matter",
      "Apply the five rules to identify significant figures in any number",
      "Round numbers to a specified number of significant figures",
      "Distinguish between significant figures and decimal places",
      "Maintain appropriate significant figures throughout calculations",
      "Avoid follow-through errors by keeping extra precision in intermediate steps"
    ],

    keyFormulas: `**The Five Rules for Identifying Significant Figures:**

1. **All non-zero digits** are significant (54332 has 5 s.f.)
2. **Zeros between non-zero digits** are significant (100009 has 6 s.f.; 0.04005 has 4 s.f.)
3. **Zeros at end of integers** may or may not be significant (depends on whether number is approximate)
4. **Zeros before first non-zero digit** in decimals are NOT significant (0.0008 has 1 s.f.)
5. **Zeros after non-zero digit** in decimals ARE significant (1.60 has 3 s.f.)

**Rounding to n Significant Figures:**
1. Count to the nth s.f. from left (from first non-zero digit)
2. Look at next digit
3. Round up if ≥5, round down if <5
4. Use zeros as placeholders

**Follow-through Errors:**
Keep (n+1) s.f. during intermediate calculations if final answer needs n s.f.`
  },

  // ========================================================================
  // SUBTOPIC 3: ESTIMATION TECHNIQUES
  // ========================================================================

  's1-math-approximation-estimation-techniques': {
    displayName: 'Estimation Techniques',
    topicName: 'Approximation and Estimation',

    progressionStructure: {
      sections: [
        {
          id: "estimation-by-rounding",
          title: "Estimation by Rounding",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student uses rounding to estimate sums, differences, products, and quotients in 4+ problems, chooses appropriate rounding levels, and verifies reasonableness",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct estimations using rounding",
                "Chooses appropriate degree of rounding for context",
                "Estimates within reasonable range of actual answer"
              ],
              qualitative: [
                "Rounds each number before calculating",
                "Selects rounding level that balances simplicity and accuracy",
                "Uses mental math effectively with rounded numbers",
                "Checks if estimate is reasonable compared to exact answer",
                "Explains that estimate gives 'ballpark figure'",
                "Adjusts rounding strategy if estimate seems too far off"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with hints on rounding level",
                "Estimates are reasonable but rounding choices unclear"
              ],
              qualitative: [
                "Knows to round before calculating but unsure how much to round",
                "Sometimes rounds too much (loses too much accuracy)",
                "Or rounds too little (calculation still complicated)",
                "Can estimate but doesn't verify reasonableness independently",
                "Needs prompting to choose appropriate rounding degree"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in estimation process",
                "Estimates wildly inaccurate",
                "Does not round before calculating"
              ],
              qualitative: [
                "Tries to calculate exact answer instead of estimating",
                "Rounds incorrectly or inconsistently",
                "Cannot perform mental math even with rounded numbers",
                "No sense of whether estimate is reasonable",
                "Does not understand purpose of estimation"
              ]
            }
          },

          learningObjectives: [
            "Estimate sums, differences, products, and quotients by rounding",
            "Choose appropriate rounding level for the context (to 1 s.f., nearest 10, etc.)",
            "Perform mental calculations with rounded numbers",
            "Verify that estimates are reasonable",
            "Explain when estimation by rounding is useful (quick checks, shopping, etc.)"
          ],

          relevantFormulas: [
            "**Estimation by Rounding:**",
            "1. Round each number to 1 s.f. (or another appropriate level)",
            "2. Perform calculation with rounded numbers",
            "3. Check if result is reasonable",
            "**Example:** 125 + 3.91 × 27.48 ≈ 100 + 4 × 30 = 100 + 120 = 220"
          ],

          sampleProblems: [
            "Mrs Lim has $30. Estimate if she can buy milk ($22.50), cereal ($3.45), and buns ($2.80).",
            "Estimate: 347 − 482 + 659",
            "Estimate: 23.92 × 4.801 by rounding to 1 s.f."
          ],

          availableTools: []
        },

        {
          id: "cluster-values-compatible-numbers",
          title: "Cluster Values and Compatible Numbers",
          difficulty: "intermediate",
          prerequisites: ["estimation-by-rounding"],
          masterySignals: "Student identifies cluster values in sets of similar numbers, uses compatible numbers for division estimation, and applies these strategies in 3+ real-world scenarios",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of cluster value method",
                "Identifies appropriate cluster value for given set",
                "Chooses compatible numbers that simplify division"
              ],
              qualitative: [
                "Recognizes when numbers are 'close in value to each other'",
                "Selects cluster value by averaging or finding midpoint",
                "Uses cluster value to estimate sum efficiently",
                "For division, chooses compatible numbers (numerator divisible by denominator)",
                "Explains why $3000 is a good cluster value for salaries $3150, $2980, $3040, $2890, $2950",
                "Adjusts strategy based on spread of values"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance on cluster selection",
                "Identifies concept but struggles to apply"
              ],
              qualitative: [
                "Understands cluster value idea but uncertain how to choose it",
                "Picks cluster value randomly instead of strategically",
                "Can use cluster value once given, but can't determine it independently",
                "Knows compatible numbers should divide evenly but struggles to find them",
                "Needs examples to see pattern"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot identify or use cluster values",
                "Chooses inappropriate cluster value",
                "No strategy for compatible numbers"
              ],
              qualitative: [
                "Does not recognize when numbers cluster together",
                "Tries to round every number differently instead of using one cluster value",
                "Picks cluster value far from actual values",
                "Cannot explain what 'compatible numbers' means",
                "Reverts to exact calculation instead of estimation"
              ]
            }
          },

          learningObjectives: [
            "Identify cluster values when numbers are close in value",
            "Use a cluster value to represent a group and estimate the sum",
            "Select compatible numbers for easy division estimation",
            "Apply cluster value strategy to real-world scenarios (salaries, prices, etc.)",
            "Compare estimation by rounding vs. cluster value methods"
          ],

          relevantFormulas: [
            "**Cluster Value:** A representative value chosen when numbers are close together",
            "**Method:** If values cluster around a number, use that as the cluster value for all items",
            "**Example:** Salaries $3150, $2980, $3040, $2890, $2950 cluster around $3000",
            "**Estimated total:** $3000 × 5 = $15,000",
            "**Compatible Numbers:** Number pairs that are easy to compute (e.g., 120 ÷ 40 instead of 118 ÷ 39)"
          ],

          sampleProblems: [
            "Five employees earn $3150, $2980, $3040, $2890, $2950. Estimate total monthly salary using cluster values.",
            "1180 students, 40 per bus. Estimate buses needed using compatible numbers.",
            "When is cluster value method better than rounding each number separately?"
          ],

          availableTools: []
        },

        {
          id: "estimation-measurements-benchmarks",
          title: "Estimation in Measurements Using Benchmarks",
          difficulty: "intermediate",
          prerequisites: ["estimation-by-rounding"],
          masterySignals: "Student uses common benchmarks (coin size, arm span, body parts) to estimate lengths and distances in 3+ scenarios, and explains the benchmark selection reasoning",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct estimations using benchmarks",
                "Chooses appropriate benchmark for scale of measurement",
                "Estimates within reasonable accuracy"
              ],
              qualitative: [
                "Knows common benchmarks: $1 coin ≈ 2.5 cm diameter, arm span ≈ height, cubit ≈ 45 cm",
                "Selects benchmark appropriate to what's being measured (coin for small, arm span for large)",
                "Uses benchmark to gauge other measurements mentally",
                "Explains reasoning: 'Width is about 10 coins, so 10 × 2.5 cm = 25 cm'",
                "Recognizes limitations (benchmarks vary by person, not perfectly accurate)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on which benchmark to use",
                "Estimates somewhat reasonable but benchmark choice questionable"
              ],
              qualitative: [
                "Knows some benchmarks but not sure when to apply each",
                "Uses benchmark mechanically without understanding scale",
                "Chooses inappropriate benchmark (coin for room width)",
                "Estimation process unclear or illogical",
                "Needs prompting to remember common benchmarks"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot use benchmarks to estimate",
                "Estimates wildly inaccurate",
                "No benchmark knowledge"
              ],
              qualitative: [
                "Does not know any standard benchmarks",
                "Cannot relate benchmark to measurement target",
                "Guesses randomly without reasoning",
                "Does not understand what 'benchmark' means in this context",
                "Cannot explain estimation process"
              ]
            }
          },

          learningObjectives: [
            "Use common benchmarks to estimate measurements (coin diameter, arm span, etc.)",
            "Select appropriate benchmarks for different scales of measurement",
            "Apply benchmark reasoning to estimate lengths, widths, heights",
            "Recognize that benchmarks provide approximate values",
            "Explain how benchmarks make estimation practical without tools"
          ],

          relevantFormulas: [
            "**Common Benchmarks:**",
            "- $1 coin diameter ≈ 2.5 cm",
            "- Arm span ≈ person's height",
            "- Cubit (elbow to fingertip) ≈ 45 cm",
            "- Footstep ≈ 30 cm",
            "- Hand width ≈ 10 cm",
            "**Method:** Compare object to benchmark, estimate how many benchmarks fit"
          ],

          sampleProblems: [
            "Estimate the length of a line segment if it's about 4 coin diameters long.",
            "How could you estimate classroom width using your arm span?",
            "Why might arm span be better than coins for estimating room dimensions?"
          ],

          availableTools: ["numberLine", "cartesianPlane"]
        },

        {
          id: "decomposition-recomposition",
          title: "Decomposition-Recomposition Strategy",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["estimation-measurements-benchmarks"],
          masterySignals: "Student breaks complex measurements into parts, estimates each part separately, then combines in 3+ problems, showing clear decomposition reasoning",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of decomposition strategy",
                "Logical part selection for decomposition",
                "Accurate recomposition of estimates"
              ],
              qualitative: [
                "Identifies when decomposition is useful (complex shapes, multiple components)",
                "Breaks object into manageable parts that can be estimated",
                "Estimates each part using appropriate method (benchmark, rounding, etc.)",
                "Combines part estimates correctly (addition, multiplication, etc.)",
                "Explains full process: 'I estimated each floor as 3 m, 25 floors × 3 m = 75 m'",
                "Verifies combined estimate makes sense for original object"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance on how to decompose",
                "Can decompose but struggles with recomposition"
              ],
              qualitative: [
                "Understands decomposition concept but unsure how to divide object",
                "Breaks into parts but parts are difficult to estimate",
                "Estimates parts correctly but makes errors combining",
                "Needs examples to see how to apply strategy",
                "Can follow decomposition when shown but doesn't generate independently"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot decompose effectively",
                "Part estimates unrelated to whole",
                "Recomposition errors"
              ],
              qualitative: [
                "Does not see how to break object into parts",
                "Tries to estimate entire complex object at once",
                "Part selection illogical or arbitrary",
                "Cannot explain how parts relate to whole",
                "Forgets to combine parts or combines incorrectly"
              ]
            }
          },

          learningObjectives: [
            "Decompose complex measurement problems into simpler parts",
            "Estimate each part using appropriate strategies",
            "Recompose (combine) part estimates to get total estimate",
            "Explain decomposition reasoning clearly",
            "Recognize when decomposition strategy is most useful"
          ],

          relevantFormulas: [
            "**Decomposition-Recomposition Strategy:**",
            "1. Break object/measurement into manageable parts",
            "2. Estimate each part separately (using benchmarks, rounding, etc.)",
            "3. Combine estimates: add, multiply, or other operation as appropriate",
            "**Example:** Height of 25-story building → assume each floor ≈ 3 m → 25 × 3 = 75 m"
          ],

          sampleProblems: [
            "Estimate the height of a 25-story building if each floor is about one story (≈ 3 m).",
            "Estimate total distance of four long jumps: 7.58 m, 7.62 m, 7.54 m, 7.63 m.",
            "How would you estimate the perimeter of a classroom using decomposition?"
          ],

          availableTools: ["numberLine"]
        },

        {
          id: "estimating-computation-results",
          title: "Estimating Results of Computation",
          difficulty: "advanced",
          prerequisites: ["estimation-by-rounding", "cluster-values-compatible-numbers"],
          masterySignals: "Student estimates calculation results to check reasonableness in 4+ problems, detects calculator errors, and explains how estimation provides a reality check",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct reasonableness checks using estimation",
                "Identifies unreasonable calculator results",
                "Estimates within appropriate range"
              ],
              qualitative: [
                "Uses estimation to verify calculator answers make sense",
                "Rounds strategically for quick mental calculation",
                "Recognizes when calculator answer is way off (wrong keys, decimal error)",
                "Estimates before calculating to have expectations",
                "Explains: 'Expected about 540, got 542, so reasonable' vs 'Expected 540, got 5420, error!'",
                "Chooses estimation strategy based on calculation type"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct checks, but sometimes misses errors",
                "Estimates somewhat reasonable"
              ],
              qualitative: [
                "Can estimate but doesn't always compare to actual answer",
                "Sometimes makes estimation errors that prevent detecting calculator mistakes",
                "Knows estimation is for checking but application inconsistent",
                "Needs prompting to estimate before or after calculating",
                "Can identify obvious errors but misses subtle ones"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot estimate effectively enough to check",
                "Misses obvious calculator errors",
                "Estimates far from actual values"
              ],
              qualitative: [
                "Trusts calculator blindly without checking",
                "Cannot estimate well enough to detect errors",
                "Doesn't see connection between estimation and error checking",
                "Accepts unreasonable answers without question",
                "Has no strategy for reasonableness verification"
              ]
            }
          },

          learningObjectives: [
            "Use estimation to check if calculator results are reasonable",
            "Detect obvious calculation errors (wrong keys, misplaced decimals)",
            "Choose appropriate estimation strategies for different operations",
            "Develop number sense to recognize unreasonable answers",
            "Explain why estimation is useful even with calculators available"
          ],

          relevantFormulas: [
            "**Using Estimation to Check Calculations:**",
            "1. Before calculating: Estimate expected result",
            "2. Calculate using calculator or algorithm",
            "3. Compare: Is actual result close to estimate?",
            "4. If very different, check for errors",
            "**Example:** 62.9 − 4.67 × 18.62 ≈ 60 − 5 × 20 = 60 − 100 = −40 (expect negative answer around −40)"
          ],

          sampleProblems: [
            "Miriam calculates 62.9 − 4.67 × 18.62 = 542.0446. Use estimation to check if reasonable.",
            "Calculator shows √83 ÷ ³√130 = 1.798 420 573. Estimate to verify reasonableness.",
            "Jason gets 79.5 − 33.21 × 29.52 = −185.3592. Is this reasonable? Check by estimation."
          ],

          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Estimate sums, differences, products, and quotients by rounding numbers",
      "Use cluster values when numbers are similar in value",
      "Apply compatible numbers for easy mental division",
      "Estimate measurements using common benchmarks",
      "Use decomposition-recomposition for complex estimation problems",
      "Check calculation reasonableness using estimation",
      "Develop strong number sense and approximation intuition"
    ],

    keyFormulas: `**Estimation Strategies:**

**1. Estimation by Rounding:**
Round each number, then calculate with rounded values

**2. Cluster Values:**
When numbers are close together, use one representative value for all

**3. Compatible Numbers:**
Choose numbers that divide evenly for easy mental math

**4. Benchmarks:**
Common references: $1 coin ≈ 2.5 cm, arm span ≈ height, cubit ≈ 45 cm

**5. Decomposition-Recomposition:**
Break complex problem into parts, estimate each, then combine

**6. Reasonableness Checking:**
Always estimate to verify calculator results make sense`
  }
};
