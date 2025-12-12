/**
 * P5 Mathematics - Numbers up to 10 Million Topic Configuration
 *
 * Comprehensive configuration for teaching place value, reading and writing
 * large numbers, and comparing/ordering numbers up to 10 million.
 *
 * Target audience: Primary 5 students (10-11 years old)
 */

// Type exports
export type Numbers10MillionTopicId =
  | 'p5-math-numbers-10-million-place-value'
  | 'p5-math-numbers-10-million-writing-representing'
  | 'p5-math-numbers-10-million-comparing-ordering';

// Topic-specific tutor customization
export const P5_NUMBERS_10_MILLION_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 5 students learning about large numbers up to 10 million.

Teaching Approach:
- Use simple, age-appropriate language suitable for 10-11 year olds
- Guide students to discover place value patterns through questioning
- Help students understand large numbers through real-world contexts (population, money, distances)
- Use visual representations like place value charts and number discs
- Celebrate insights when students understand place value relationships
- Build from concrete (visual models) to abstract (numerical patterns)
- Be patient and encouraging - large numbers can be intimidating for young learners
- Use fun examples (pizza slices, sports scores, population of cities)

**Text-to-Speech Guidelines:**
- Say numbers clearly: "three million, four hundred and fifty-six thousand"
- Say "million" clearly, not "mil"
- For place values: "millions place" not "M place"
- Say "hundred thousands" not "H T"
- Say "greater than" instead of "greater-than" and "less than" instead of "less-than"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally
- When spelling large numbers, group them logically: "three million... four hundred and fifty-six thousand... seven hundred and eighty-nine"`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name (e.g., "placeValueChart", "numberLine") in the toolName field, NOT the display name.

Available tools for this topic:
- placeValueChart: For displaying numbers up to 10 million in a color-coded place value chart. Shows expanded form and number words. Use when teaching place value concepts or helping students understand digit values.
- numberLine: For comparing and ordering numbers. Use when students need to visualize relative positions of numbers.

Tool usage guidelines:
- Use placeValueChart when introducing new numbers or when students are struggling with place values
- Use placeValueChart when asking "What is the value of the digit X?"
- Use numberLine when comparing or ordering multiple numbers
- Always include a helpful caption explaining what to look at in the visualization`
};

// Available math tools for this topic
export const P5_NUMBERS_10_MILLION_MATH_TOOLS = [
  "placeValueChart",
  "numberLine"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P5_MATH_NUMBERS_10_MILLION_SUBTOPICS = {

  'p5-math-numbers-10-million-place-value': {
    displayName: 'Place Value to Millions',
    topicName: 'place value, millions, and reading large numbers',

    progressionStructure: {
      sections: [
        {
          id: "understanding-one-million",
          title: "Understanding One Million",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly explains that 10 hundred thousands make 1 million and can count by hundred thousands to reach 1 million in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses demonstrating understanding of one million",
                "Consistent recognition that 10 × 100,000 = 1,000,000"
              ],
              qualitative: [
                "Correctly states that 10 hundred thousands make 1 million",
                "Can count by hundred thousands: 100,000, 200,000, ... 1,000,000",
                "Knows one million has 7 digits (1 followed by 6 zeros)",
                "Can relate million to real-world contexts (city population, etc.)",
                "Understands million as a very large quantity"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about the relationship",
                "May need visual support to understand the concept"
              ],
              qualitative: [
                "Understands hundred thousands but unsure how many make a million",
                "Can count by hundred thousands with prompting",
                "Needs help connecting to real-world examples",
                "May confuse 1 million with other large numbers"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot explain the hundred thousands to million relationship"
              ],
              qualitative: [
                "Does not know how many hundred thousands make 1 million",
                "Cannot count by hundred thousands",
                "Confuses million with thousand or billion",
                "Does not understand the magnitude of one million",
                "Cannot write 1,000,000 correctly"
              ]
            }
          },
          learningObjectives: [
            "Understand that 10 hundred thousands equal 1 million",
            "Count by hundred thousands from 100,000 to 1,000,000",
            "Recognize that 1 million is written as 1,000,000 (7 digits)",
            "Connect large numbers to real-world contexts",
            "Understand the relative size of one million"
          ],
          relevantFormulas: [
            "10 × 100,000 = 1,000,000",
            "1 million = 1,000,000 = 1,000 thousands"
          ],
          availableTools: ["placeValueChart"]
        },
        {
          id: "place-value-chart-millions",
          title: "Place Value Chart with Millions",
          difficulty: "foundational",
          prerequisites: ["understanding-one-million"],
          masterySignals: "Student correctly identifies place values (millions to ones) and the value of digits in 7-digit numbers in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct place value identifications",
                "Accurately determines digit values in different positions"
              ],
              qualitative: [
                "Correctly names all place values: millions, hundred thousands, ten thousands, thousands, hundreds, tens, ones",
                "Can determine the value of any digit based on its position",
                "Understands that the same digit has different values in different positions (e.g., 4 in 4,000,000 vs 400,000)",
                "Can read a 7-digit place value chart correctly",
                "Uses commas or spaces correctly to separate place value groups"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on place value names",
                "Sometimes confuses hundred thousands with ten thousands"
              ],
              qualitative: [
                "Knows some place value names but not all",
                "Needs prompting to determine digit values",
                "Can identify millions place but struggles with middle positions",
                "May forget commas when writing large numbers"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect place value identifications",
                "Cannot determine digit values"
              ],
              qualitative: [
                "Does not know place value names beyond thousands",
                "Cannot determine the value of a digit from its position",
                "Confuses place values (thinks hundred thousands = millions)",
                "Reads place values from right to left instead of left to right",
                "Does not understand that position determines value"
              ]
            }
          },
          learningObjectives: [
            "Name place values from ones to millions",
            "Identify the place value of any digit in a 7-digit number",
            "Determine the value of a digit based on its position",
            "Understand that the same digit has different values in different positions",
            "Read and interpret place value charts"
          ],
          relevantFormulas: [
            "Place values (left to right): Millions, Hundred Thousands, Ten Thousands, Thousands, Hundreds, Tens, Ones",
            "Value = digit × place value (e.g., 5 in millions place = 5 × 1,000,000 = 5,000,000)"
          ],
          availableTools: ["placeValueChart"]
        },
        {
          id: "reading-large-numbers",
          title: "Reading Large Numbers",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["place-value-chart-millions"],
          masterySignals: "Student correctly reads 7-digit numbers aloud and writes them in expanded form in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct readings of large numbers",
                "Accurate expanded form representations"
              ],
              qualitative: [
                "Reads numbers fluently: 'Three million, four hundred and fifty-six thousand, seven hundred and eighty-nine'",
                "Writes numbers in expanded form correctly",
                "Uses 'and' appropriately (before tens and ones)",
                "Handles zeros correctly (skips zero places in speech)",
                "Can switch between standard form and expanded form"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with minor errors or hesitation",
                "Expanded form mostly correct with small mistakes"
              ],
              qualitative: [
                "Reads most parts correctly but hesitates",
                "May say 'zero hundred' instead of skipping",
                "Forgets 'and' or uses it incorrectly",
                "Expanded form has minor errors (missing terms or wrong place values)"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot read large numbers correctly",
                "Cannot write expanded form"
              ],
              qualitative: [
                "Reads digits individually instead of as number words",
                "Says 'one, zero, zero, zero, zero, zero, zero' instead of 'one million'",
                "Cannot group digits correctly (millions, thousands, ones)",
                "Confuses expanded form with standard form",
                "Does not know number words for large values"
              ]
            }
          },
          learningObjectives: [
            "Read 7-digit numbers aloud using correct number words",
            "Group digits into millions, thousands, and ones when reading",
            "Write numbers in expanded form (sum of place values)",
            "Handle zeros correctly when reading numbers",
            "Use 'and' appropriately in number words"
          ],
          relevantFormulas: [
            "Expanded form: 3,456,789 = 3,000,000 + 400,000 + 50,000 + 6,000 + 700 + 80 + 9",
            "Reading pattern: [millions] million, [thousands] thousand, [ones]"
          ],
          availableTools: ["placeValueChart"]
        }
      ]
    },

    learningObjectives: [
      "Understand the concept of one million and its relationship to smaller place values",
      "Identify and name place values from ones to millions",
      "Read and write 7-digit numbers correctly",
      "Write numbers in expanded form"
    ],

    keyFormulas: `
Place Value Basics:
- 10 ones = 1 ten
- 10 tens = 1 hundred
- 10 hundreds = 1 thousand
- 10 thousands = 1 ten thousand
- 10 ten thousands = 1 hundred thousand
- 10 hundred thousands = 1 million

Key Facts:
- 1 million = 1,000,000 (7 digits)
- 1 million = 1,000 thousands
- 1 million = 10 hundred thousands

Place Value Chart:
Millions | Hundred Thousands | Ten Thousands | Thousands | Hundreds | Tens | Ones
   M     |        HT        |      TT      |     Th    |    H     |  T   |  O

Reading Large Numbers:
- Group into millions, thousands, and ones
- Say each group, then say "million", "thousand"
- Skip zeros (don't say "zero hundred")
    `
  },

  'p5-math-numbers-10-million-writing-representing': {
    displayName: 'Writing & Representing Numbers',
    topicName: 'number discs, converting between words and numerals',

    progressionStructure: {
      sections: [
        {
          id: "number-discs-representation",
          title: "Number Discs and Visual Representation",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly determines the number shown by a set of number discs and can represent numbers using disc diagrams in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions between discs and numbers",
                "Accurate counting and grouping of discs"
              ],
              qualitative: [
                "Correctly counts discs in each place value column",
                "Accurately calculates total value from disc counts",
                "Can explain what each disc represents",
                "Can represent a given number using the correct discs",
                "Understands that 10 discs in one column can be exchanged for 1 disc in the next column"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with counting errors or hints needed",
                "May miscount discs in one column"
              ],
              qualitative: [
                "Counts discs correctly but makes calculation errors",
                "Needs prompting to remember disc values",
                "Can count but struggles to add all values together",
                "May forget to include all columns in total"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot determine number from discs",
                "Cannot represent numbers with discs"
              ],
              qualitative: [
                "Does not understand what number discs represent",
                "Cannot count discs by place value",
                "Adds disc counts instead of disc values",
                "Does not know the value of each disc type",
                "Confuses disc colors/labels with values"
              ]
            }
          },
          learningObjectives: [
            "Understand that number discs represent place values",
            "Count discs in each column to find the digit",
            "Calculate the total value by adding place values",
            "Represent numbers using appropriate number discs",
            "Understand exchanging 10 discs for 1 disc of higher value"
          ],
          relevantFormulas: [
            "Total = (millions × 1,000,000) + (hundred thousands × 100,000) + (ten thousands × 10,000) + (thousands × 1,000) + (hundreds × 100) + (tens × 10) + (ones × 1)"
          ],
          availableTools: ["placeValueChart"]
        },
        {
          id: "words-to-numerals",
          title: "Converting Words to Numerals",
          difficulty: "intermediate",
          prerequisites: ["number-discs-representation"],
          masterySignals: "Student correctly converts number words to numerals, including handling zeros, in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions from words to numerals",
                "Consistent correct placement of zeros"
              ],
              qualitative: [
                "Correctly interprets 'million', 'thousand' indicators",
                "Places zeros correctly for missing place values",
                "Converts complex numbers like 'Five million, three hundred and two'",
                "Groups digits correctly (7 digits for millions range)",
                "Uses commas or spaces appropriately"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with errors on zeros or complex numbers",
                "Needs hints for placing zeros"
              ],
              qualitative: [
                "Converts simple numbers correctly but struggles with zeros",
                "May write wrong number of zeros (e.g., 5,000,030 instead of 5,000,300)",
                "Gets confused with numbers like 'eight million, forty'",
                "Needs prompting for where to place zeros"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot convert word form to numerals",
                "Multiple place value errors"
              ],
              qualitative: [
                "Writes digits in wrong positions",
                "Does not understand where zeros go",
                "Confuses million and thousand positions",
                "Cannot process multi-part number words",
                "Writes numbers without proper place value understanding"
              ]
            }
          },
          learningObjectives: [
            "Convert number words to standard numeral form",
            "Recognize 'million' and 'thousand' as position indicators",
            "Place zeros correctly for unmentioned place values",
            "Write 7-digit numbers from word descriptions",
            "Check answers by reading back the number"
          ],
          relevantFormulas: [
            "Steps: 1) Listen for 'million' - that's the start. 2) Listen for 'thousand' - those digits go in thousands section. 3) Rest goes in ones section. 4) Fill missing places with zeros."
          ],
          availableTools: ["placeValueChart"]
        },
        {
          id: "numerals-to-words",
          title: "Converting Numerals to Words",
          difficulty: "intermediate",
          prerequisites: ["words-to-numerals"],
          masterySignals: "Student correctly writes numerals in word form, handling all place values and zeros, in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions from numerals to words",
                "Proper handling of zeros and 'and' placement"
              ],
              qualitative: [
                "Writes complete number words correctly",
                "Groups digits correctly: millions, thousands, ones",
                "Skips zeros appropriately (doesn't say 'zero hundred')",
                "Uses 'and' before tens and ones",
                "Handles numbers with internal zeros (e.g., 3,005,020)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with minor spelling or placement errors",
                "May make errors with 'and' placement"
              ],
              qualitative: [
                "Gets most of the number correct but makes small errors",
                "May spell number words incorrectly (e.g., 'fourty' instead of 'forty')",
                "Sometimes says zeros instead of skipping them",
                "Inconsistent use of 'and'"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot convert numerals to words correctly",
                "Makes major structural errors"
              ],
              qualitative: [
                "Reads each digit individually ('one, two, three...')",
                "Cannot group digits into millions/thousands/ones",
                "Does not know number words (forty, fifty, etc.)",
                "Confuses teens and tens (fifteen vs fifty)",
                "Cannot handle zeros in the middle of numbers"
              ]
            }
          },
          learningObjectives: [
            "Convert standard numerals to word form",
            "Group digits into millions, thousands, and ones sections",
            "Skip zero places in word form",
            "Use 'and' correctly before final tens/ones",
            "Spell number words correctly (especially forty, fifty, etc.)"
          ],
          relevantFormulas: [
            "Pattern: [millions] million, [thousands] thousand, [and] [ones]",
            "Skip zeros: 3,005,000 = 'Three million, five thousand' (not 'zero hundred')"
          ],
          availableTools: ["placeValueChart"]
        }
      ]
    },

    learningObjectives: [
      "Understand and use number disc representations",
      "Convert between word form and numeral form fluently",
      "Handle zeros correctly in both directions",
      "Write numbers accurately in standard and word forms"
    ],

    keyFormulas: `
Number Discs:
- Each disc shows its place value (1,000,000, 100,000, 10,000, 1,000, 100, 10, 1)
- Count discs in each column to find digits
- 10 discs = 1 disc of the next higher value

Words to Numerals:
1. Find "million" - write that number, then 6 more digits
2. Find "thousand" - those digits go in thousands place
3. Remaining words are hundreds/tens/ones
4. Fill empty places with zeros

Numerals to Words:
1. Split into groups of 3 from the right: millions | thousands | ones
2. Say each group, followed by "million", "thousand"
3. Skip zeros - don't say "zero hundred"
4. Use "and" before tens and ones

Common Number Words:
- 20 = twenty, 30 = thirty, 40 = forty, 50 = fifty
- 60 = sixty, 70 = seventy, 80 = eighty, 90 = ninety
    `
  },

  'p5-math-numbers-10-million-comparing-ordering': {
    displayName: 'Comparing & Ordering Numbers',
    topicName: 'comparing with symbols, ordering, and rounding large numbers',

    progressionStructure: {
      sections: [
        {
          id: "comparing-large-numbers",
          title: "Comparing Large Numbers",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly compares pairs of numbers up to millions using <, >, and = symbols in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct comparisons with correct symbol usage",
                "Consistent comparison strategy"
              ],
              qualitative: [
                "Correctly uses <, >, and = symbols",
                "Compares from left to right (highest place value first)",
                "Identifies the first different digit to determine comparison",
                "Handles numbers with same number of digits correctly",
                "Knows more digits generally means larger number"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with symbol confusion or comparison errors",
                "May need visual support to compare"
              ],
              qualitative: [
                "Knows comparison method but confuses < and >",
                "Sometimes compares from right to left (wrong direction)",
                "Can compare with help but not independently",
                "Confuses 'greater than' and 'less than' symbols"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot compare numbers correctly",
                "Symbol usage is random or always the same"
              ],
              qualitative: [
                "Does not know what < and > mean",
                "Compares based on first digit only regardless of place value",
                "Thinks a number with more 9s is always bigger",
                "Cannot explain comparison strategy",
                "Confuses equal numbers as different"
              ]
            }
          },
          learningObjectives: [
            "Use < (less than), > (greater than), and = (equal) symbols correctly",
            "Compare numbers by starting from the highest place value",
            "Identify the first different digit to determine which is greater",
            "Compare numbers with different numbers of digits",
            "Apply comparison skills to real-world contexts"
          ],
          relevantFormulas: [
            "< means less than (smaller number on left)",
            "> means greater than (larger number on left)",
            "= means equal to (same value)",
            "Compare from LEFT (millions first, then hundred thousands, etc.)"
          ],
          availableTools: ["placeValueChart", "numberLine"]
        },
        {
          id: "ordering-numbers",
          title: "Ordering Numbers",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["comparing-large-numbers"],
          masterySignals: "Student correctly orders sets of numbers in ascending and descending order in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct orderings in both ascending and descending",
                "All numbers placed in correct positions"
              ],
              qualitative: [
                "Correctly defines ascending (smallest to largest) and descending (largest to smallest)",
                "Uses systematic comparison to order multiple numbers",
                "Can order 4-5 numbers without errors",
                "Handles numbers that are close in value correctly",
                "Can check ordering by comparing adjacent pairs"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct orderings with some numbers misplaced",
                "May confuse ascending and descending"
              ],
              qualitative: [
                "Knows what ascending/descending means but confuses them",
                "Orders some numbers correctly but makes errors with similar numbers",
                "Needs prompting to check work",
                "May reverse the order (ascending for descending)"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot order numbers correctly",
                "Random or mostly incorrect ordering"
              ],
              qualitative: [
                "Does not understand ascending vs descending",
                "Cannot compare multiple numbers systematically",
                "Places numbers randomly without comparison",
                "Does not know how to check if ordering is correct",
                "Confuses ordering with listing"
              ]
            }
          },
          learningObjectives: [
            "Define ascending order (smallest to largest)",
            "Define descending order (largest to smallest)",
            "Order 4-5 numbers in ascending order",
            "Order 4-5 numbers in descending order",
            "Use comparison skills to verify ordering"
          ],
          relevantFormulas: [
            "Ascending = going UP (smallest → largest): 1 < 2 < 3 < 4",
            "Descending = going DOWN (largest → smallest): 4 > 3 > 2 > 1",
            "Strategy: Find smallest, then next smallest, etc. for ascending"
          ],
          availableTools: ["placeValueChart", "numberLine"]
        },
        {
          id: "rounding-large-numbers",
          title: "Rounding Large Numbers",
          difficulty: "advanced",
          prerequisites: ["ordering-numbers"],
          masterySignals: "Student correctly rounds numbers to specified place values (nearest 10, 1000, 100000, million) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct roundings to various place values",
                "Consistent application of rounding rules"
              ],
              qualitative: [
                "Identifies the digit to look at (one place to the right of rounding place)",
                "Applies 0-4 round down, 5-9 round up rule correctly",
                "Replaces all digits to the right with zeros",
                "Can round to nearest 10, 1000, 100000, and million",
                "Can explain rounding decisions"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with errors on which digit to check",
                "May round to wrong place value"
              ],
              qualitative: [
                "Knows rounding rule but looks at wrong digit",
                "Forgets to change digits to the right to zeros",
                "Rounds correctly but to wrong place value",
                "Needs prompting to identify which digit to check"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot round correctly",
                "Does not understand rounding rules"
              ],
              qualitative: [
                "Does not know the 0-4/5-9 rule",
                "Looks at the wrong digit entirely",
                "Does not change digits to the right to zeros",
                "Confuses rounding with other operations",
                "Cannot identify which place value to round to"
              ]
            }
          },
          learningObjectives: [
            "Understand the purpose of rounding (estimation, simplification)",
            "Apply the rounding rule: 0-4 round down, 5-9 round up",
            "Identify the correct digit to examine when rounding",
            "Round to nearest 10, 1000, 100000, and million",
            "Replace digits to the right of rounding place with zeros"
          ],
          relevantFormulas: [
            "Rounding rule: Look at digit ONE PLACE to the RIGHT of where you're rounding",
            "If digit is 0, 1, 2, 3, or 4 → Round DOWN (keep the digit the same)",
            "If digit is 5, 6, 7, 8, or 9 → Round UP (add 1 to the digit)",
            "After rounding: Change all digits to the RIGHT to zeros"
          ],
          availableTools: ["placeValueChart", "numberLine"]
        }
      ]
    },

    learningObjectives: [
      "Compare large numbers using <, >, and = symbols",
      "Order numbers in ascending and descending order",
      "Round numbers to various place values",
      "Apply number skills to real-world estimation problems"
    ],

    keyFormulas: `
Comparison Symbols:
- < (less than): 3,456,789 < 4,000,000
- > (greater than): 5,000,000 > 4,999,999
- = (equal to): same value

Comparison Strategy:
1. Check number of digits (more digits = larger, usually)
2. Compare from LEFT (millions first)
3. Find first different digit
4. Larger digit wins

Ordering:
- Ascending: smallest → largest (going UP)
- Descending: largest → smallest (going DOWN)

Rounding:
1. Find the place value you're rounding to
2. Look at the digit ONE PLACE to the RIGHT
3. If 0-4: round DOWN (keep same)
4. If 5-9: round UP (add 1)
5. Change all digits to the right to ZEROS

Examples:
- 3,456,789 rounded to nearest million = 3,000,000 (4 < 5, so round down)
- 3,567,890 rounded to nearest million = 4,000,000 (5 ≥ 5, so round up)
    `
  }
};
