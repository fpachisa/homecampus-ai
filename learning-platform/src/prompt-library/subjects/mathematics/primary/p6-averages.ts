/**
 * P6 Mathematics - Averages Topic Configuration
 *
 * Comprehensive configuration for teaching averages:
 * 1. Finding Average - The concept and formula
 * 2. Finding Total Value - Reversing the formula
 * 3. Finding Number of Data - Third formula application
 * 4. Word Problems - Multi-step problem solving
 *
 * Target audience: Primary 6 students (11-12 years old)
 */

// Type exports
export type P6AveragesTopicId =
  | 'p6-math-averages-finding-average'
  | 'p6-math-averages-finding-total'
  | 'p6-math-averages-finding-number'
  | 'p6-math-averages-word-problems';

// Topic-specific tutor customization
export const P6_AVERAGES_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 6 students learning about averages.

Teaching Approach:
- Use simple, age-appropriate language suitable for 11-12 year olds
- Introduce average as "evening out" - redistributing values so they're all equal
- Use the tower/block visualization to make the concept concrete
- Help students understand the THREE interconnected formulas (Average Triangle):
  • Average = Total ÷ Number
  • Total = Average × Number
  • Number = Total ÷ Average
- Use real-world contexts: books read, quiz scores, mass, money, items bought
- Guide students to identify which formula to use based on what's given
- For word problems, teach the strategy: Find total first, then work from there
- Be patient - average can be confusing because "average" doesn't mean "same"
- Celebrate insights when students connect the formulas

Key Concepts to Reinforce:
- "Evening out" = redistributing so all values are equal
- Average can be a decimal (e.g., 21.5) even when original values are whole numbers
- Individual values don't need to equal the average
- The three formulas are just rearrangements of the same relationship

**Text-to-Speech Guidelines:**
- Say "divided by" clearly, not "over" or "slash"
- Say decimal numbers naturally: "twenty-one point five" not "two one dot five"
- For formulas: "Average equals Total divided by Number"
- Say "times" for multiplication, not "multiplied by"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name in the toolName field, NOT the display name.

Available tools for this topic:
- averageTowerVisualizer: PRIMARY TOOL - Shows stacked blocks that can be "evened out" to demonstrate average concept. Use for introducing average, showing calculations, and demonstrating the evening-out concept. Parameters: values, labels, showAverage, showEvenedOut, showTotal, showFormula, showCalculation.
- barChart: For displaying data from bar graphs (books read per month, etc.). Parameters: categories, values, title, xLabel, yLabel.
- barModel: For word problems - shows Singapore Math bar model with segments and brackets. Use for complex word problems.

Tool usage guidelines:
- Use averageTowerVisualizer EXTENSIVELY for conceptual understanding
- Use barChart when problems involve reading data from bar graphs
- Use barModel for complex word problems involving comparison or multiple steps
- Always include a helpful caption explaining what to look at in the visualization`
};

// Available math tools for this topic
export const P6_AVERAGES_MATH_TOOLS = [
  "averageTowerVisualizer",
  "barChart",
  "barModel"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P6_AVERAGES_SUBTOPICS = {

  'p6-math-averages-finding-average': {
    displayName: 'Finding Average',
    topicName: 'finding the average',

    progressionStructure: {
      sections: [
        {
          id: "understanding-average-concept",
          title: "Understanding the Concept",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student explains 'evening out' concept and correctly finds average of simple sets in 3+ problems with minimal hints",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses explaining the evening out concept",
                "Correctly identifies that average means 'equal share'"
              ],
              qualitative: [
                "Explains average as 'evening out' or 'redistributing equally'",
                "Understands that if we have towers of 3, 7, 6, 4 blocks, evening out gives 5 each",
                "Can predict whether average will be higher or lower than certain values",
                "Understands why it's called 'average' - it represents the typical/central value",
                "Can describe what would happen if we redistributed items equally"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about the concept",
                "Can follow visual explanation but struggles to explain independently"
              ],
              qualitative: [
                "Understands the visual but can't articulate the concept",
                "Confuses average with total sometimes",
                "Needs visual support to understand evening out",
                "Gets the idea but struggles to apply it to new scenarios"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot explain the evening out concept",
                "Confuses average with other operations"
              ],
              qualitative: [
                "Does not understand what 'evening out' means",
                "Thinks average means 'the same as each value'",
                "Cannot visualize redistribution of items",
                "Confuses average with sum or count"
              ]
            }
          },
          learningObjectives: [
            "Understand average as 'evening out' values",
            "Visualize how redistributing creates equal shares",
            "Predict approximate average from a set of values"
          ],
          relevantFormulas: [
            "Evening out 3, 7, 6, 4 gives 5 each (because 3+7+6+4=20, and 20÷4=5)",
            "Average = Total ÷ Number of Data"
          ],
          availableTools: ["averageTowerVisualizer"]
        },
        {
          id: "using-the-formula",
          title: "Using the Formula",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["understanding-average-concept"],
          masterySignals: "Student correctly calculates average using Average = Total ÷ Number in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations using the formula",
                "Shows clear working: Total = ... , Average = Total ÷ Number = ..."
              ],
              qualitative: [
                "Correctly applies: Average = Total ÷ Number",
                "Finds total by adding all values first",
                "Counts number of data items correctly",
                "Shows step-by-step working",
                "Can verify answer makes sense (average is between smallest and largest values)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on formula steps",
                "Makes occasional arithmetic errors"
              ],
              qualitative: [
                "Knows the formula but makes errors adding the total",
                "Sometimes miscounts the number of data items",
                "Forgets to show working",
                "Gets confused with larger numbers"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot apply the formula correctly",
                "Makes multiple errors in calculation"
              ],
              qualitative: [
                "Does not remember the formula",
                "Multiplies instead of divides",
                "Cannot add values to find total",
                "Does not understand what 'number of data' means"
              ]
            }
          },
          learningObjectives: [
            "Apply the formula: Average = Total ÷ Number",
            "Calculate total by adding all values",
            "Count the number of data items accurately",
            "Show clear step-by-step working"
          ],
          relevantFormulas: [
            "Average = Total ÷ Number of Data",
            "Example: Quiz scores 24, 30, 12, 20 → Total = 86, Average = 86 ÷ 4 = 21.5"
          ],
          availableTools: ["averageTowerVisualizer"]
        },
        {
          id: "decimals-in-averages",
          title: "Averages with Decimals",
          difficulty: "intermediate",
          prerequisites: ["using-the-formula"],
          masterySignals: "Student correctly calculates and interprets decimal averages in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct with decimal answers",
                "Correctly handles decimal division"
              ],
              qualitative: [
                "Understands that average can be a decimal even when all values are whole numbers",
                "Correctly performs division that results in decimals",
                "Interprets decimal average meaningfully (e.g., '39.25 kg average' doesn't mean anyone weighs exactly that)",
                "Rounds appropriately when asked",
                "Explains why decimal averages make sense"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with decimal calculations",
                "Struggles with decimal division"
              ],
              qualitative: [
                "Gets confused when answer is a decimal",
                "Tries to round prematurely or incorrectly",
                "Understands concept but makes calculation errors",
                "Needs help interpreting what decimal average means"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot handle decimal division",
                "Expects whole number answers only"
              ],
              qualitative: [
                "Thinks average must be a whole number",
                "Cannot perform long division with decimals",
                "Gets frustrated when division doesn't come out evenly",
                "Does not understand decimal averages are valid"
              ]
            }
          },
          learningObjectives: [
            "Calculate averages that result in decimals",
            "Understand that decimal averages are valid",
            "Interpret the meaning of decimal averages",
            "Round averages appropriately when needed"
          ],
          relevantFormulas: [
            "Mass of 4 children: 38, 40, 37, 42 kg → Average = 157 ÷ 4 = 39.25 kg",
            "The average can be a decimal even when individual values are whole numbers"
          ],
          availableTools: ["averageTowerVisualizer"]
        },
        {
          id: "reading-from-bar-graphs",
          title: "Reading from Bar Graphs",
          difficulty: "intermediate",
          prerequisites: ["using-the-formula"],
          masterySignals: "Student correctly reads bar graph data and calculates average in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct from bar graph problems",
                "Accurately reads all bar heights"
              ],
              qualitative: [
                "Accurately reads bar heights from the scale",
                "Identifies all data values from the graph",
                "Correctly counts number of bars/categories",
                "Applies average formula correctly after extracting data",
                "Understands what the bars represent"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with graph reading hints",
                "Makes occasional reading errors"
              ],
              qualitative: [
                "Misreads some bar heights (especially between grid lines)",
                "Forgets to include all bars in calculation",
                "Calculation correct once values are extracted correctly",
                "Needs help reading scales"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot accurately read bar graphs",
                "Multiple errors in data extraction"
              ],
              qualitative: [
                "Cannot read values from bar graph scale",
                "Misunderstands what bars represent",
                "Confuses x-axis and y-axis labels",
                "Cannot connect graph data to average formula"
              ]
            }
          },
          learningObjectives: [
            "Accurately read data values from bar graphs",
            "Extract all values needed for average calculation",
            "Apply average formula to bar graph data",
            "Interpret bar graph context correctly"
          ],
          relevantFormulas: [
            "Read bar heights → Add for total → Count bars → Apply formula",
            "Example: Books read (Sep: 6, Oct: 11, Nov: 10, Dec: 13) → Average = 40 ÷ 4 = 10"
          ],
          availableTools: ["barChart", "averageTowerVisualizer"]
        }
      ]
    },

    learningObjectives: [
      "Understand average as 'evening out' values equally",
      "Apply the formula: Average = Total ÷ Number of Data",
      "Calculate averages resulting in decimals",
      "Read data from bar graphs to calculate averages"
    ],

    keyFormulas: `
**Key Formula:**
Average = Total Value ÷ Number of Data

**The Big Idea:**
Average is what each value would be if we "evened out" all the values.

**Steps to Find Average:**
1. Add all the values to get the Total
2. Count how many values (Number of Data)
3. Divide: Average = Total ÷ Number

**Examples:**
• Quiz scores: 24 + 30 + 12 + 20 = 86 → Average = 86 ÷ 4 = 21.5
• Mass: 38 + 40 + 37 + 42 = 157 kg → Average = 157 ÷ 4 = 39.25 kg
• Books: 6 + 11 + 10 + 13 = 40 → Average = 40 ÷ 4 = 10 books
`
  },

  'p6-math-averages-finding-total': {
    displayName: 'Finding Total Value',
    topicName: 'finding total value from average',

    progressionStructure: {
      sections: [
        {
          id: "understanding-reverse-relationship",
          title: "Understanding the Reverse Relationship",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student explains why Total = Average × Number and applies it correctly in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of reverse formula",
                "Explains the relationship clearly"
              ],
              qualitative: [
                "Understands: if we know average and count, we can find total",
                "Explains: 'If each has average 18, then 3 packets have 18 × 3 = 54'",
                "Connects to visual: 'gathering back' what was evened out",
                "Can set up the multiplication correctly",
                "Verifies answer by checking if dividing gives the original average"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about the relationship",
                "Understands concept but makes errors"
              ],
              qualitative: [
                "Knows to multiply but unsure why",
                "Needs prompting to use the reverse formula",
                "Sometimes divides instead of multiplies",
                "Gets confused about what average represents"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot apply the reverse formula",
                "Divides instead of multiplies"
              ],
              qualitative: [
                "Does not understand the reverse relationship",
                "Cannot see that Total = Average × Number",
                "Confuses total with average",
                "Cannot set up the calculation"
              ]
            }
          },
          learningObjectives: [
            "Understand that Total = Average × Number",
            "Recognize when to use this reverse formula",
            "Connect the reverse formula to the original concept"
          ],
          relevantFormulas: [
            "Total Value = Average × Number of Data",
            "Example: Average 18 stickers in 3 packets → Total = 18 × 3 = 54 stickers"
          ],
          availableTools: ["averageTowerVisualizer", "barModel"]
        },
        {
          id: "applying-total-formula",
          title: "Applying the Formula",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["understanding-reverse-relationship"],
          masterySignals: "Student correctly calculates Total = Average × Number in varied contexts in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations",
                "Shows clear working"
              ],
              qualitative: [
                "Confidently applies Total = Average × Number",
                "Handles decimal averages correctly (e.g., 120.5 × 4)",
                "Shows step-by-step working",
                "Works with various units (ml, kg, $, items)",
                "Can explain why the answer makes sense"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with calculation help",
                "Struggles with decimal multiplication"
              ],
              qualitative: [
                "Knows formula but makes arithmetic errors",
                "Gets confused with decimal averages",
                "Needs help with larger numbers",
                "Sometimes forgets units in answer"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot apply formula reliably",
                "Makes systematic errors"
              ],
              qualitative: [
                "Uses wrong operation (divides instead of multiplies)",
                "Cannot handle decimal averages",
                "Gets confused about which numbers to use",
                "Cannot set up the multiplication"
              ]
            }
          },
          learningObjectives: [
            "Apply Total = Average × Number confidently",
            "Handle decimal averages in multiplication",
            "Work with various real-world contexts"
          ],
          relevantFormulas: [
            "Total = Average × Number",
            "Example: Average 120 ml in 5 cups → Total = 120 × 5 = 600 ml",
            "Example: Average $315.75 for 8 phones → Total = $315.75 × 8 = $2526"
          ],
          availableTools: ["averageTowerVisualizer"]
        },
        {
          id: "practice-finding-total",
          title: "Practice Problems",
          difficulty: "intermediate",
          prerequisites: ["applying-total-formula"],
          masterySignals: "Student fluently finds total from average in 4+ varied problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct across varied contexts",
                "Efficient calculation"
              ],
              qualitative: [
                "Quickly identifies this as a 'find total' problem",
                "Handles decimals and large numbers confidently",
                "Always shows clear working",
                "Can create own problems of this type",
                "Explains reasoning if asked"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with occasional errors",
                "Needs context clues to identify problem type"
              ],
              qualitative: [
                "Sometimes struggles to identify problem type",
                "Makes occasional calculation errors",
                "Working may be incomplete",
                "Gets confused with complex wording"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors",
                "Cannot identify problem type"
              ],
              qualitative: [
                "Needs review of the formula",
                "Cannot distinguish from other average problems",
                "Makes systematic calculation errors",
                "Doesn't understand problem context"
              ]
            }
          },
          learningObjectives: [
            "Achieve fluency with finding total from average",
            "Identify 'find total' problems from word context",
            "Handle varied contexts and number types"
          ],
          relevantFormulas: [
            "Total = Average × Number",
            "Keywords: 'average is...', 'what is the total...', 'find the sum...'"
          ],
          availableTools: ["averageTowerVisualizer", "barModel"]
        }
      ]
    },

    learningObjectives: [
      "Understand the reverse relationship: Total = Average × Number",
      "Apply the formula in various contexts",
      "Handle decimal averages and large numbers",
      "Identify when to use this formula from word problems"
    ],

    keyFormulas: `
**Key Formula:**
Total Value = Average × Number of Data

**The Reverse Relationship:**
If Average = Total ÷ Number, then Total = Average × Number

**When to Use:**
When you know the AVERAGE and NUMBER of items, and need to find TOTAL

**Examples:**
• Average 18 stickers in 3 packets → Total = 18 × 3 = 54 stickers
• Average 120 ml in 5 cups → Total = 120 × 5 = 600 ml
• Average $315.75 for 8 phones → Total = $315.75 × 8 = $2526

**Important Note:**
Individual values don't need to equal the average!
5 cups averaging 120 ml doesn't mean each has exactly 120 ml.
`
  },

  'p6-math-averages-finding-number': {
    displayName: 'Finding Number of Data',
    topicName: 'finding number of data from average',

    progressionStructure: {
      sections: [
        {
          id: "understanding-number-formula",
          title: "Understanding When to Use",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student recognizes 'how many' problems and explains the formula in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identification and setup",
                "Explains relationship clearly"
              ],
              qualitative: [
                "Recognizes: given total and average, find how many",
                "Understands: Number = Total ÷ Average",
                "Explains: 'If $45 total and $9 average, how many $9s in $45?'",
                "Connects to division concept",
                "Can identify this problem type from word context"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Sometimes confuses with other formulas"
              ],
              qualitative: [
                "Knows to divide but unsure which way",
                "Sometimes divides in wrong order (Average ÷ Total)",
                "Needs help identifying problem type",
                "Can solve once setup is confirmed"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot identify problem type",
                "Uses wrong formula"
              ],
              qualitative: [
                "Confuses this with finding average or total",
                "Does not understand Number = Total ÷ Average",
                "Cannot set up the division correctly",
                "Multiplies instead of divides"
              ]
            }
          },
          learningObjectives: [
            "Recognize 'how many' problems about averages",
            "Understand Number = Total ÷ Average",
            "Connect this to division concept"
          ],
          relevantFormulas: [
            "Number of Data = Total Value ÷ Average",
            "Example: $45 total, $9 average per T-shirt → Number = 45 ÷ 9 = 5 T-shirts"
          ],
          availableTools: ["averageTowerVisualizer", "barModel"]
        },
        {
          id: "applying-number-formula",
          title: "Applying the Formula",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["understanding-number-formula"],
          masterySignals: "Student correctly calculates Number = Total ÷ Average in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations",
                "Accurate division"
              ],
              qualitative: [
                "Confidently applies Number = Total ÷ Average",
                "Sets up division correctly (Total first, then ÷ Average)",
                "Handles various number combinations",
                "Verifies answer: Number × Average should = Total",
                "Works with different units"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with help",
                "Makes division errors"
              ],
              qualitative: [
                "Sets up correctly but makes calculation errors",
                "Sometimes divides in wrong order",
                "Struggles with larger numbers",
                "Forgets to verify answer"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot divide correctly",
                "Sets up division wrong"
              ],
              qualitative: [
                "Divides Average ÷ Total instead of Total ÷ Average",
                "Cannot perform the division",
                "Gets confused about which number is which",
                "Doesn't understand what answer represents"
              ]
            }
          },
          learningObjectives: [
            "Apply Number = Total ÷ Average correctly",
            "Set up division with correct order",
            "Verify answers using multiplication"
          ],
          relevantFormulas: [
            "Number = Total ÷ Average",
            "Example: 24 tarts total, 6 average per box → Number = 24 ÷ 6 = 4 boxes",
            "Verify: 4 boxes × 6 tarts/box = 24 tarts ✓"
          ],
          availableTools: ["averageTowerVisualizer"]
        },
        {
          id: "practice-finding-number",
          title: "Practice Problems",
          difficulty: "intermediate",
          prerequisites: ["applying-number-formula"],
          masterySignals: "Student fluently finds number of data in 4+ varied problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct across varied problems",
                "Quick identification and calculation"
              ],
              qualitative: [
                "Immediately identifies 'how many' problems",
                "Efficient calculation with various numbers",
                "Checks reasonableness of answer",
                "Can explain why division is correct operation",
                "Handles decimal totals or averages"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with occasional errors",
                "Slower to identify problem type"
              ],
              qualitative: [
                "Sometimes needs hints to identify problem type",
                "Makes occasional errors",
                "Struggles with complex wording",
                "Forgets to check answer"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors",
                "Needs significant help"
              ],
              qualitative: [
                "Cannot reliably identify problem type",
                "Needs review of formula",
                "Makes systematic division errors",
                "Gets confused by word problem context"
              ]
            }
          },
          learningObjectives: [
            "Achieve fluency with finding number from average",
            "Identify 'how many' problems quickly",
            "Handle varied contexts confidently"
          ],
          relevantFormulas: [
            "Number = Total ÷ Average",
            "Keywords: 'how many...', 'number of...', 'count of...'"
          ],
          availableTools: ["averageTowerVisualizer", "barModel"]
        }
      ]
    },

    learningObjectives: [
      "Understand Number = Total ÷ Average",
      "Recognize 'how many' average problems",
      "Apply division correctly (Total ÷ Average, not reverse)",
      "Verify answers using multiplication"
    ],

    keyFormulas: `
**Key Formula:**
Number of Data = Total Value ÷ Average

**When to Use:**
When you know the TOTAL and AVERAGE, and need to find HOW MANY items

**The Complete Average Triangle:**
• Average = Total ÷ Number
• Total = Average × Number
• Number = Total ÷ Average

**Examples:**
• $45 total, $9 average per T-shirt → Number = 45 ÷ 9 = 5 T-shirts
• 24 tarts total, 6 average per box → Number = 24 ÷ 6 = 4 boxes
• 70 kg total papaya, 2 kg average → Number = 70 ÷ 2 = 35 papayas

**Verify Your Answer:**
Number × Average = Total (should match!)
`
  },

  'p6-math-averages-word-problems': {
    displayName: 'Word Problems',
    topicName: 'word problems involving averages',

    progressionStructure: {
      sections: [
        {
          id: "finding-missing-values",
          title: "Finding Missing Values",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student finds missing values given average in 3+ problems using 'find total first' strategy",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-step problems",
                "Uses 'find total first' strategy consistently"
              ],
              qualitative: [
                "Strategy: Find total from average, then subtract known values",
                "Example: Average of 4 is 20, sum of 3 is 69 → Total = 80, Missing = 80 - 69 = 11",
                "Shows clear step-by-step working",
                "Identifies all given information correctly",
                "Can verify answer is reasonable"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with strategy hints",
                "Sometimes skips finding total first"
              ],
              qualitative: [
                "Knows the strategy but forgets steps",
                "Makes arithmetic errors in subtraction",
                "Needs prompting to find total first",
                "Gets confused with the two-step process"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot complete missing value problems",
                "Tries wrong approach"
              ],
              qualitative: [
                "Doesn't know to find total first",
                "Tries to guess the missing value",
                "Cannot organize the multi-step solution",
                "Gets overwhelmed by the problem"
              ]
            }
          },
          learningObjectives: [
            "Use 'find total first' strategy for missing values",
            "Subtract known values from total to find missing",
            "Show clear multi-step working"
          ],
          relevantFormulas: [
            "Step 1: Total = Average × Number",
            "Step 2: Missing value = Total - Sum of known values",
            "Example: Avg of 4 numbers = 20 → Total = 80. If 3 numbers sum to 69 → Missing = 80 - 69 = 11"
          ],
          availableTools: ["barModel", "averageTowerVisualizer"]
        },
        {
          id: "bar-graph-problems",
          title: "Problems with Bar Graphs",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["finding-missing-values"],
          masterySignals: "Student finds missing bar values and solves average problems from graphs in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct bar graph problems",
                "Accurately reads and uses graph data"
              ],
              qualitative: [
                "Reads visible bar values correctly",
                "Uses given average to find total",
                "Calculates missing bar: Total - Sum of visible bars",
                "Interprets graph context correctly",
                "Can work with partially visible/torn graphs"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with reading hints",
                "Makes graph reading errors"
              ],
              qualitative: [
                "Strategy is understood but graph reading causes errors",
                "Sometimes forgets a bar in calculation",
                "Needs help connecting graph to formula",
                "Can solve once values are confirmed"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve bar graph problems",
                "Multiple errors"
              ],
              qualitative: [
                "Cannot connect bar graph data to average formula",
                "Misreads bar heights significantly",
                "Cannot figure out strategy for missing bar",
                "Gets confused by graph context"
              ]
            }
          },
          learningObjectives: [
            "Read data accurately from bar graphs",
            "Find missing bar values using average",
            "Combine graph interpretation with average calculation"
          ],
          relevantFormulas: [
            "Step 1: Total = Average × Number of bars",
            "Step 2: Missing bar = Total - Sum of visible bars",
            "Example: 4 days, 48 average → Total = 192. Visible sum = 152 → Missing = 40"
          ],
          availableTools: ["barChart", "barModel"]
        },
        {
          id: "combined-averages",
          title: "Combined Averages",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["finding-missing-values"],
          masterySignals: "Student solves problems with subgroup averages (boys+girls, combined groups) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct combined average problems",
                "Clear working with subgroups"
              ],
              qualitative: [
                "Finds total for combined group: Total = Average × Total count",
                "Finds total for subgroup: Subgroup total = Subgroup average × Subgroup count",
                "Calculates other subgroup by subtraction",
                "Example: 5 people avg $10, 3 boys avg $7 → Total = $50, Boys = $21, Girls = $29",
                "Understands that averages don't simply add"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance",
                "Struggles with subgroup organization"
              ],
              qualitative: [
                "Tries to add averages directly (common error)",
                "Loses track of which total belongs to which group",
                "Needs help organizing the multi-step solution",
                "Can follow worked example but struggles independently"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve combined average problems",
                "Makes conceptual errors"
              ],
              qualitative: [
                "Thinks averages can be added directly",
                "Cannot organize subgroup information",
                "Does not understand weighted average concept",
                "Gets completely lost with multiple groups"
              ]
            }
          },
          learningObjectives: [
            "Understand that averages don't simply add",
            "Calculate subgroup totals from subgroup averages",
            "Find missing subgroup by subtraction from combined total"
          ],
          relevantFormulas: [
            "Combined total = Combined average × Total count",
            "Subgroup total = Subgroup average × Subgroup count",
            "Other subgroup = Combined total - Known subgroup total"
          ],
          availableTools: ["barModel"]
        },
        {
          id: "challenging-problems",
          title: "Challenging Multi-Step Problems",
          difficulty: "advanced",
          prerequisites: ["bar-graph-problems", "combined-averages"],
          masterySignals: "Student solves complex problems with new members, balance scales, and multiple unknowns in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct challenging problems",
                "Systematic multi-step approach"
              ],
              qualitative: [
                "Handles 'new member joins' problems (recalculate new average)",
                "Solves balance scale problems (equal mass on both sides)",
                "Organizes multiple unknowns systematically",
                "Shows clear, logical working",
                "Verifies answers make sense in context"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with significant guidance",
                "Struggles with problem organization"
              ],
              qualitative: [
                "Can follow structured approach but can't create one",
                "Makes errors with multiple steps",
                "Needs help identifying all the relationships",
                "Loses track of what's being solved for"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot complete challenging problems",
                "Needs review of earlier sections"
              ],
              qualitative: [
                "Gets overwhelmed by problem complexity",
                "Cannot identify the approach needed",
                "Needs to strengthen fundamentals first",
                "Cannot organize multi-step solutions"
              ]
            }
          },
          learningObjectives: [
            "Solve 'new member joins' average problems",
            "Handle balance scale average problems",
            "Organize complex multi-step solutions"
          ],
          relevantFormulas: [
            "New member: New total = Old total + New value, New average = New total ÷ New count",
            "Balance: Items on left side total = Items on right side total",
            "Example: 4 children avg 1.45m, 5th child 1.55m → New total = 5.8 + 1.55 = 7.35m, New avg = 7.35 ÷ 5 = 1.47m"
          ],
          availableTools: ["barModel"]
        }
      ]
    },

    learningObjectives: [
      "Find missing values using 'find total first' strategy",
      "Solve problems involving bar graphs with missing data",
      "Handle combined average problems with subgroups",
      "Tackle complex multi-step average problems"
    ],

    keyFormulas: `
**Strategy 1: Finding Missing Values**
1. Find total: Total = Average × Number
2. Find missing: Missing = Total - Sum of known values

**Strategy 2: Bar Graph Problems**
1. Total = Average × Number of bars
2. Missing bar = Total - Sum of visible bars

**Strategy 3: Combined Averages**
- Combined total = Combined average × Total count
- Subgroup total = Subgroup average × Subgroup count
- Other subgroup = Combined total - Known subgroup

**Strategy 4: New Member Joins**
- New total = Old total + New member's value
- New average = New total ÷ New count

**Golden Rule:**
Always find the TOTAL first, then work from there!
`
  }
};

// Helper function to get all subtopic IDs
export const getP6AveragesSubtopicIds = (): P6AveragesTopicId[] => {
  return Object.keys(P6_AVERAGES_SUBTOPICS) as P6AveragesTopicId[];
};
