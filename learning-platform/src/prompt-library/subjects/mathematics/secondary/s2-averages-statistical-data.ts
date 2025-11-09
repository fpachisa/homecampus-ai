/**
 * S2 Mathematics - Averages of Statistical Data Topic Configuration
 *
 * Topic: Measures of Central Tendency (Mean, Median, Mode)
 * Grade Level: Secondary 2
 * Prerequisites: Basic arithmetic, understanding of data organization
 */

// Type exports
export type AveragesTopicId =
  | 's2-math-averages-introduction'
  | 's2-math-averages-mean'
  | 's2-math-averages-median'
  | 's2-math-averages-mode'
  | 's2-math-averages-choosing';

// Topic-specific tutor customization
export const AVERAGES_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning about Averages and Measures of Central Tendency.

Teaching Approach:
- Guide students to discover why we need different types of averages through questioning
- Help students understand that "average" can mean different things (mean, median, mode)
- Use real-world contexts (salaries, test scores, shopping, surveys) to make concepts relatable
- Emphasize when to use each measure (mean for no extremes, median for skewed data, mode for most common)
- Celebrate insights when students identify which average is appropriate for a situation
- Show connections between raw data, frequency tables, and grouped data calculations
- Adapt difficulty organically based on student mastery

**Text-to-Speech Guidelines:**
- Say "x bar" for x̄ (mean symbol)
- Say "sigma" or "sum of" for Σ
- Say "f times x" not "fx" for frequency × value
- Spell out "frequency" clearly
- Say "n plus one over two" for median position formula
- Avoid complex notation in speech - spell out formulas
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name (e.g., "dotDiagram") in the toolName field, NOT the display name.
Available tools for this topic:
- dotDiagram: Perfect for showing small datasets where you want students to see individual values and find mean, median, or mode
- barChart: Good for discrete frequency distributions (e.g., favorite colors, number of siblings)
- histogram: For continuous grouped data (e.g., age ranges, height intervals)

Use dotDiagram frequently for raw data problems - it helps students visualize central tendency.`
};

// Available math tools for this topic
export const AVERAGES_MATH_TOOLS = [
  "dotDiagram",
  "barChart",
  "histogram"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S2_MATH_AVERAGES_SUBTOPICS = {

  's2-math-averages-introduction': {
    displayName: 'Introduction to Averages',
    topicName: 'measures of central tendency',

    progressionStructure: {
      sections: [
        {
          id: "what-is-central-tendency",
          title: "Understanding Central Tendency",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student explains the purpose of averages and identifies real-world applications in 2+ scenarios",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct explanations without hints",
                "Correctly identifies when averages are useful"
              ],
              qualitative: [
                "Explains that averages represent the 'center' or 'typical value' of data",
                "Understands averages simplify large datasets into one representative number",
                "Recognizes real-world uses (life expectancy, test scores, housing prices)",
                "Can explain why a single summary value is useful"
              ]
            },
            developing: {
              quantitative: ["1 correct explanation with prompting"],
              qualitative: [
                "Understands the basic concept but cannot articulate clearly",
                "Needs examples to see the purpose",
                "Can identify use cases after discussion"
              ]
            },
            struggling: {
              quantitative: ["Cannot explain purpose of averages"],
              qualitative: [
                "Confused about what averages represent",
                "Does not see why we need summary statistics",
                "Cannot connect to real-world applications"
              ]
            }
          },
          learningObjectives: [
            "Define central tendency as the 'center' or 'typical value' of a dataset",
            "Understand that an average is a single value representing an entire dataset",
            "Recognize real-world applications of averages (statistics, performance tracking, decision-making)",
            "Explain why averages are useful for comparing and communicating data"
          ],
          relevantFormulas: [
            "Central Tendency = measure of where the center of data is located",
            "Average = single representative value for entire dataset"
          ],
          availableTools: []
        },
        {
          id: "three-types-of-averages",
          title: "The Three Types of Averages: Mean, Median, Mode",
          difficulty: "foundational",
          prerequisites: ["what-is-central-tendency"],
          masterySignals: "Student distinguishes between mean, median, and mode conceptually in 3+ scenarios without calculation",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of which average is which",
                "Consistently distinguishes the three types"
              ],
              qualitative: [
                "Knows mean = sum divided by count (arithmetic center)",
                "Knows median = middle value when ordered",
                "Knows mode = most frequent value",
                "Understands each measures 'center' differently",
                "Can describe what each type tells us about data"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on definitions"],
              qualitative: [
                "Knows the names but confuses which is which",
                "Needs reminders about definitions",
                "Can distinguish after reviewing"
              ]
            },
            struggling: {
              quantitative: ["Multiple confusions between types"],
              qualitative: [
                "Cannot distinguish mean, median, and mode",
                "Does not understand the conceptual differences",
                "Confuses formulas and definitions"
              ]
            }
          },
          learningObjectives: [
            "Define the three types of averages: mean, median, and mode",
            "Understand mean as the arithmetic average (sum ÷ count)",
            "Understand median as the middle value in ordered data",
            "Understand mode as the most frequently occurring value",
            "Recognize that different averages measure 'center' in different ways"
          ],
          relevantFormulas: [
            "Mean = (sum of all values) ÷ (number of values)",
            "Median = middle value when data arranged in order",
            "Mode = value(s) with highest frequency"
          ],
          availableTools: ["dotDiagram"]
        },
        {
          id: "why-three-averages",
          title: "Why We Need Three Different Averages",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["three-types-of-averages"],
          masterySignals: "Student explains with examples why mean can be misleading and when median/mode are better in 2+ scenarios",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ scenarios correctly analyzed",
                "Identifies when mean is distorted by extremes"
              ],
              qualitative: [
                "Explains that mean uses all values so extreme values affect it",
                "Understands median is resistant to outliers (position-based)",
                "Recognizes mode shows most common value regardless of size",
                "Can identify scenarios where each average is most appropriate",
                "Understands the salary example (mean distorted by one high earner)"
              ]
            },
            developing: {
              quantitative: ["1 scenario with significant guidance"],
              qualitative: [
                "Sees that mean changes with extremes but cannot fully explain why",
                "Needs prompting to recognize when median is better",
                "Understands after working through examples"
              ]
            },
            struggling: {
              quantitative: ["Cannot analyze scenarios appropriately"],
              qualitative: [
                "Does not understand how extreme values affect mean",
                "Cannot explain advantages of median or mode",
                "Thinks mean is always the best average"
              ]
            }
          },
          learningObjectives: [
            "Understand that mean is affected by extreme values (outliers)",
            "Recognize that median is resistant to outliers (only position matters)",
            "See that mode identifies the most popular or common value",
            "Analyze scenarios to determine which average is most representative",
            "Explain the salary example: why median represents 'typical' employee better than mean"
          ],
          relevantFormulas: [],
          availableTools: ["dotDiagram"]
        }
      ]
    },

    learningObjectives: [
      "Understand the concept of central tendency and why we need averages",
      "Distinguish between the three types of averages: mean, median, and mode",
      "Recognize that different situations require different types of averages",
      "Explain how extreme values affect mean but not median",
      "Identify real-world applications of each type of average"
    ],

    keyFormulas: `
**Central Tendency Concepts:**
- Mean = arithmetic average (sum ÷ count), uses all data
- Median = middle value, resistant to outliers
- Mode = most frequent value, shows popularity
    `
  },

  's2-math-averages-mean': {
    displayName: 'Calculating Mean',
    topicName: 'mean of raw data, frequency distributions, and grouped data',

    progressionStructure: {
      sections: [
        {
          id: "mean-raw-data",
          title: "Mean of Raw Data",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly calculates mean from raw data in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations without hints",
                "Consistent accuracy in finding sum and dividing by count"
              ],
              qualitative: [
                "Correctly applies formula: mean = sum ÷ count",
                "Distinguishes between data values and number of values",
                "Can find mean for any list of numbers (5-15 values)",
                "Rounds appropriately when needed",
                "Interprets result in context (e.g., 'mean height is 1.62 m')"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on formula or arithmetic"],
              qualitative: [
                "Knows the formula but makes calculation errors",
                "Sometimes confuses numerator and denominator",
                "Needs reminder to count values correctly",
                "Calculation is correct after prompting"
              ]
            },
            struggling: {
              quantitative: ["Multiple calculation errors or wrong formula"],
              qualitative: [
                "Does not know formula or confuses with other averages",
                "Cannot find sum correctly",
                "Counts number of values incorrectly",
                "Major arithmetic errors"
              ]
            }
          },
          learningObjectives: [
            "Apply the formula: mean = (sum of data values) ÷ (number of data values)",
            "Distinguish between the data values themselves and the count of values",
            "Calculate mean for datasets of 5-15 values",
            "Round mean to appropriate decimal places",
            "Interpret mean in context of the problem"
          ],
          relevantFormulas: [
            "Mean = (sum of all data values) ÷ (number of data values)",
            "Example: For 3, 4, 4, 9, 10 → Mean = (3+4+4+9+10) ÷ 5 = 30 ÷ 5 = 6"
          ],
          availableTools: ["dotDiagram"]
        },
        {
          id: "finding-unknown-given-mean",
          title: "Finding Unknown Values Given the Mean",
          difficulty: "intermediate",
          prerequisites: ["mean-raw-data"],
          masterySignals: "Student solves for unknown value when mean is given in 2+ problems",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct solutions without hints",
                "Sets up equation correctly each time"
              ],
              qualitative: [
                "Understands that mean × count = sum of values",
                "Sets up equation: (known sum + x) ÷ n = given mean",
                "Rearranges to solve for unknown: sum + x = mean × n",
                "Checks answer makes sense in context",
                "Can handle multiple unknowns (e.g., two equal values)"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints on setting up equation"],
              qualitative: [
                "Understands the concept but struggles with algebra",
                "Needs help rearranging equation",
                "Can solve once equation is set up",
                "Makes occasional arithmetic errors"
              ]
            },
            struggling: {
              quantitative: ["Cannot set up equation or multiple errors"],
              qualitative: [
                "Does not understand relationship: mean × n = sum",
                "Cannot translate word problem into equation",
                "Confused about what to solve for",
                "Major algebraic errors"
              ]
            }
          },
          learningObjectives: [
            "Understand the relationship: sum of values = mean × number of values",
            "Set up equations when mean is given and one value is unknown",
            "Solve for unknown values using algebraic manipulation",
            "Verify solutions by checking if they produce the given mean",
            "Handle problems with multiple equal unknown values"
          ],
          relevantFormulas: [
            "Mean × number of values = sum of values",
            "If mean of x₁, x₂, ..., xₙ is M, then x₁ + x₂ + ... + xₙ = M × n",
            "Example: Mean of 10, 15, 12, 20, x is 13 → (10+15+12+20+x) ÷ 5 = 13 → 57+x = 65 → x = 8"
          ],
          availableTools: []
        },
        {
          id: "mean-frequency-distribution",
          title: "Mean from Frequency Table",
          difficulty: "intermediate",
          prerequisites: ["mean-raw-data"],
          masterySignals: "Student correctly calculates mean from frequency table in 3+ problems using Σfx/Σf formula",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations without hints",
                "Consistently applies Σfx/Σf correctly"
              ],
              qualitative: [
                "Understands x = data value, f = frequency",
                "Correctly computes fx for each row (value × frequency)",
                "Finds Σfx (sum of all fx products)",
                "Finds Σf (total frequency = total number of data points)",
                "Applies formula: mean = Σfx / Σf",
                "Recognizes this is equivalent to raw data mean (sum ÷ count)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on formula or table setup"],
              qualitative: [
                "Knows formula but makes errors in fx calculation",
                "Sometimes forgets to multiply x by f",
                "Needs reminder about what Σf represents",
                "Can complete after table structure is explained"
              ]
            },
            struggling: {
              quantitative: ["Multiple errors in calculation or wrong approach"],
              qualitative: [
                "Does not understand frequency table structure",
                "Confuses x and f",
                "Cannot compute fx products correctly",
                "Uses wrong formula (e.g., Σx/n instead of Σfx/Σf)"
              ]
            }
          },
          learningObjectives: [
            "Understand frequency distribution: x = data value, f = frequency",
            "Compute fx (value × frequency) for each data value",
            "Calculate Σfx (sum of all fx products) = total of all data values",
            "Calculate Σf (sum of frequencies) = total number of data points",
            "Apply formula: mean = Σfx / Σf",
            "Recognize this is the same as mean of raw data, just organized differently"
          ],
          relevantFormulas: [
            "Mean of frequency distribution: x̄ = Σfx / Σf",
            "where x is a data value, f is its frequency",
            "Σfx = sum of (value × frequency) for all values",
            "Σf = sum of all frequencies = total count of data points"
          ],
          availableTools: ["barChart", "dotDiagram"]
        },
        {
          id: "mean-from-diagrams",
          title: "Mean from Dot Diagrams and Statistical Diagrams",
          difficulty: "intermediate",
          prerequisites: ["mean-frequency-distribution"],
          masterySignals: "Student extracts data from dot diagrams/stem-and-leaf/histograms and calculates mean in 2+ problems",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct calculations from diagrams",
                "Accurately reads data from visual representations"
              ],
              qualitative: [
                "Correctly interprets dot diagram (counts dots at each value)",
                "Reads stem-and-leaf diagram correctly (e.g., 3|5 means 35)",
                "Extracts frequency table from histogram bars",
                "Applies Σfx/Σf formula after extracting data",
                "Recognizes Σf from diagram (total dots, leaves, or sum of bar heights)"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints on reading diagram"],
              qualitative: [
                "Can calculate mean but struggles to read diagram accurately",
                "Miscounts dots or misreads stem-and-leaf keys",
                "Needs help converting diagram to frequency data",
                "Completes calculation correctly once data is extracted"
              ]
            },
            struggling: {
              quantitative: ["Cannot extract data or multiple calculation errors"],
              qualitative: [
                "Does not understand how to read the diagram",
                "Cannot convert visual to numerical data",
                "Makes errors in both reading and calculation"
              ]
            }
          },
          learningObjectives: [
            "Extract data values and frequencies from dot diagrams",
            "Read stem-and-leaf diagrams correctly (understand key)",
            "Interpret histogram bars as frequency data",
            "Convert visual representations to frequency tables",
            "Apply mean formula to extracted data"
          ],
          relevantFormulas: [
            "Same formula applies: mean = Σfx / Σf",
            "First step: extract (x, f) pairs from diagram",
            "Dot diagram: count dots at each x value",
            "Stem-and-leaf: key tells you how to read (e.g., 2|6 means 26)",
            "Histogram: bar height = frequency, bar position = class interval"
          ],
          availableTools: ["dotDiagram", "histogram"]
        },
        {
          id: "mean-grouped-data",
          title: "Estimating Mean from Grouped Data",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["mean-frequency-distribution"],
          masterySignals: "Student correctly estimates mean using class midpoints in 2+ grouped data problems",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct calculations with class midpoints",
                "Consistently finds midpoints accurately"
              ],
              qualitative: [
                "Understands we use midpoint because exact values unknown",
                "Calculates midpoint: (lower bound + upper bound) / 2",
                "Uses midpoint as x value in Σfx/Σf formula",
                "Recognizes this is an estimate, not exact mean",
                "Can handle various class interval formats (15 < x ≤ 20, 20-30, etc.)",
                "Interprets result with appropriate unit and context"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints on midpoint calculation"],
              qualitative: [
                "Understands concept but makes midpoint calculation errors",
                "Confuses lower and upper bounds",
                "Needs reminder about using midpoints as x values",
                "Can complete after midpoint calculation is clarified"
              ]
            },
            struggling: {
              quantitative: ["Cannot find midpoints or multiple errors"],
              qualitative: [
                "Does not understand what grouped data means",
                "Cannot calculate midpoints correctly",
                "Tries to use exact values that don't exist",
                "Confuses class intervals with frequencies"
              ]
            }
          },
          learningObjectives: [
            "Understand that grouped data uses class intervals (ranges) not exact values",
            "Calculate class midpoint: (lower bound + upper bound) / 2",
            "Use midpoint as representative x value for the interval",
            "Apply formula: estimated mean = Σ(f × midpoint) / Σf",
            "Recognize this gives an estimate because we assume data evenly distributed in each interval",
            "Interpret result as 'estimated mean' in context"
          ],
          relevantFormulas: [
            "Estimated mean of grouped data: x̄ = Σfx / Σf",
            "where x = class midpoint = (lower + upper) / 2",
            "Example: For interval 15 < x ≤ 20, midpoint = (15 + 20) / 2 = 17.5",
            "This is an estimate because we represent each interval by its midpoint"
          ],
          availableTools: ["histogram"]
        },
        {
          id: "average-of-means-warning",
          title: "Understanding Why We Cannot Average Means with Different Bases",
          difficulty: "advanced",
          prerequisites: ["mean-raw-data"],
          masterySignals: "Student explains with examples why averaging means with different sample sizes gives wrong results",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ scenarios correctly analyzed",
                "Identifies when combining means is invalid"
              ],
              qualitative: [
                "Understands different bases (sample sizes) means different weights",
                "Recognizes that averaging 80 and 90 does not give overall mean if classes have different sizes",
                "Can calculate correct overall mean by finding total sum and total count",
                "Explains: mean × count = sum, so must add sums then divide by total count",
                "Sees why simple average of means fails when bases differ"
              ]
            },
            developing: {
              quantitative: ["1 scenario with significant guidance"],
              qualitative: [
                "Sees that simple average is wrong but cannot fully explain why",
                "Needs help understanding weighted nature of means",
                "Can follow correct method after demonstration"
              ]
            },
            struggling: {
              quantitative: ["Thinks averaging means always works"],
              qualitative: [
                "Does not understand the problem with different bases",
                "Cannot see why (80+90)/2 ≠ overall mean",
                "Confused about correct approach"
              ]
            }
          },
          learningObjectives: [
            "Understand that averaging means only works when bases (sample sizes) are equal",
            "Recognize that different bases require weighted calculation",
            "Calculate overall mean by finding total sum ÷ total count",
            "Use relationship: sum = mean × count to find totals",
            "Explain why simple average of means fails with different bases"
          ],
          relevantFormulas: [
            "To combine means with different bases:",
            "1. Find each sum: sum = mean × count",
            "2. Add sums: total sum = sum₁ + sum₂",
            "3. Add counts: total count = n₁ + n₂",
            "4. Overall mean = total sum / total count",
            "WARNING: (mean₁ + mean₂) / 2 only works if n₁ = n₂"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Calculate mean from raw data using sum ÷ count",
      "Find unknown values when mean is given",
      "Calculate mean from frequency distribution using Σfx/Σf",
      "Extract data from diagrams and calculate mean",
      "Estimate mean from grouped data using class midpoints",
      "Understand why we cannot average means with different bases"
    ],

    keyFormulas: `
**Mean Formulas:**
- Mean of raw data: x̄ = (sum of data values) / (number of values)
- Mean of frequency distribution: x̄ = Σfx / Σf
  - where x = data value, f = frequency
  - Σfx = sum of (value × frequency)
  - Σf = total frequency (total count)
- Estimated mean of grouped data: x̄ = Σfx / Σf
  - where x = class midpoint = (lower bound + upper bound) / 2

**Important Relationships:**
- Sum of values = mean × number of values
- Cannot average means unless bases (sample sizes) are equal
    `
  },

  's2-math-averages-median': {
    displayName: 'Calculating Median',
    topicName: 'median of raw data and frequency distributions',

    progressionStructure: {
      sections: [
        {
          id: "median-raw-data-odd",
          title: "Finding Median When Number of Values is Odd",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly finds median from odd-numbered datasets in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct median values without hints",
                "Consistently arranges data in order before finding median"
              ],
              qualitative: [
                "Arranges data in ascending (or descending) order first",
                "Uses formula: position = (n+1)/2 to find median position",
                "Correctly identifies the middle value",
                "Understands median is the value at that position, not the position itself",
                "Can handle datasets of 5-15 odd values"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on ordering or position formula"],
              qualitative: [
                "Sometimes forgets to arrange in order first",
                "Knows concept but makes counting errors",
                "Needs reminder about (n+1)/2 formula",
                "Can find median after prompting about order"
              ]
            },
            struggling: {
              quantitative: ["Multiple errors or does not order data"],
              qualitative: [
                "Does not order data before finding middle",
                "Cannot identify middle position correctly",
                "Confuses median with mean",
                "Returns position number instead of actual value"
              ]
            }
          },
          learningObjectives: [
            "Arrange data in ascending or descending order",
            "Use formula: median position = (n+1)/2 when n is odd",
            "Identify the value at the median position",
            "Understand median is the middle value, not the middle position number",
            "Find median for odd-numbered datasets (n = 5, 7, 9, etc.)"
          ],
          relevantFormulas: [
            "When n (total values) is odd:",
            "Median position = (n+1)/2",
            "Median = value at that position in ordered data",
            "Example: For 7 values, position = (7+1)/2 = 4, so median is 4th value"
          ],
          availableTools: ["dotDiagram"]
        },
        {
          id: "median-raw-data-even",
          title: "Finding Median When Number of Values is Even",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["median-raw-data-odd"],
          masterySignals: "Student correctly finds median from even-numbered datasets in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct median values without hints",
                "Consistently finds mean of two middle values"
              ],
              qualitative: [
                "Arranges data in order first",
                "Uses position = (n+1)/2 and recognizes it's between two values (e.g., 4.5)",
                "Identifies the two middle values correctly",
                "Calculates mean of the two middle values",
                "Understands why we average: median lies between two values",
                "Can handle datasets of 6-16 even values"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on finding two middle values"],
              qualitative: [
                "Knows to find two values but makes counting errors",
                "Sometimes picks wrong pair of middle values",
                "Needs reminder to average the two values",
                "Can complete after identifying the correct pair"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify middle values or averaging errors"],
              qualitative: [
                "Does not understand concept of two middle values",
                "Picks only one value even when n is even",
                "Cannot calculate mean of two values correctly",
                "Major confusion about even vs odd procedures"
              ]
            }
          },
          learningObjectives: [
            "Arrange data in order first",
            "Use position = (n+1)/2 and recognize non-integer position (e.g., 4.5)",
            "Identify the two middle values surrounding that position",
            "Calculate median as mean of two middle values: (value₁ + value₂)/2",
            "Understand why median lies between two values when n is even",
            "Find median for even-numbered datasets (n = 6, 8, 10, etc.)"
          ],
          relevantFormulas: [
            "When n (total values) is even:",
            "Median position = (n+1)/2 (will be decimal like 4.5)",
            "Median = mean of two middle values",
            "Median = (nth value + (n+1)th value) / 2",
            "Example: For 8 values, position = 4.5, so median = (4th value + 5th value) / 2"
          ],
          availableTools: ["dotDiagram"]
        },
        {
          id: "understanding-median",
          title: "Understanding Median Position and Properties",
          difficulty: "intermediate",
          prerequisites: ["median-raw-data-even"],
          masterySignals: "Student explains median properties and can find missing values when median is given in 2+ problems",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ scenarios correctly analyzed",
                "Can find unknown value when median is given"
              ],
              qualitative: [
                "Understands median divides ordered data into two equal halves",
                "Recognizes median only depends on position, not on extreme values",
                "Explains why median is resistant to outliers",
                "Can work backwards: given median, find constraints on unknown value",
                "Understands median can be any value if data not specified (e.g., median 10 doesn't mean value 10 must exist)"
              ]
            },
            developing: {
              quantitative: ["1 scenario with guidance"],
              qualitative: [
                "Understands concept but struggles with reverse problems",
                "Needs help setting up constraints for unknown values",
                "Can explain after working through examples"
              ]
            },
            struggling: {
              quantitative: ["Cannot work with median conceptually"],
              qualitative: [
                "Does not understand positional nature of median",
                "Cannot explain why outliers don't affect median",
                "Cannot solve reverse problems"
              ]
            }
          },
          learningObjectives: [
            "Understand median divides ordered data into two equal-sized groups",
            "Recognize median is positional: only affected by values at/near middle",
            "Explain why changing extreme values doesn't change median",
            "Solve for unknown values when median is given",
            "Understand constraints on unknown values to maintain given median"
          ],
          relevantFormulas: [
            "Median properties:",
            "- Divides data in half (50% below, 50% above)",
            "- Position-based: unaffected by extreme values",
            "- Only middle value(s) matter for median",
            "Working backwards: If median is m, the middle value(s) must equal m"
          ],
          availableTools: ["dotDiagram"]
        },
        {
          id: "median-frequency-distribution",
          title: "Finding Median from Frequency Distribution",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["median-raw-data-even"],
          masterySignals: "Student finds median from frequency tables, dot diagrams, and stem-and-leaf in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct medians from frequency representations",
                "Accurately counts total frequency and finds position"
              ],
              qualitative: [
                "Calculates Σf (total frequency) to get n",
                "Uses (n+1)/2 to find median position",
                "Counts cumulatively through frequency table to find value at that position",
                "Correctly reads dot diagrams (counts from left to find position)",
                "Reads stem-and-leaf diagrams correctly and finds median",
                "Handles both odd and even total frequencies"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on cumulative counting"],
              qualitative: [
                "Can find Σf but struggles with cumulative counting",
                "Makes errors reading diagrams",
                "Needs help identifying which value is at the median position",
                "Can complete once diagram is converted to list"
              ]
            },
            struggling: {
              quantitative: ["Cannot extract median from frequency representation"],
              qualitative: [
                "Does not understand how to work with frequency tables",
                "Cannot count cumulatively",
                "Misreads diagrams",
                "Confuses frequency with value"
              ]
            }
          },
          learningObjectives: [
            "Calculate total frequency Σf from frequency table",
            "Find median position using (Σf + 1)/2",
            "Count cumulatively through frequency table to locate median",
            "Extract median from dot diagram by counting dots from left",
            "Find median from stem-and-leaf by ordering leaves and finding middle",
            "Understand frequency distribution median is same as raw data median, just organized differently"
          ],
          relevantFormulas: [
            "For frequency distribution:",
            "1. Find n = Σf (total frequency)",
            "2. Find median position = (n+1)/2",
            "3. Count cumulatively through frequencies to find value at that position",
            "Dot diagram: count dots from left, stopping at median position",
            "Stem-and-leaf: list all values, find middle"
          ],
          availableTools: ["dotDiagram", "barChart"]
        }
      ]
    },

    learningObjectives: [
      "Find median from raw data (odd and even number of values)",
      "Understand median as the middle value in ordered data",
      "Recognize median divides data into two equal halves",
      "Find median from frequency distributions and diagrams",
      "Understand why median is resistant to outliers",
      "Solve problems involving finding unknown values when median is given"
    ],

    keyFormulas: `
**Median Formulas:**
- Median position when n is odd: position = (n+1)/2
  - Median = value at that position
- Median position when n is even: position = (n+1)/2 (will be decimal)
  - Median = mean of two middle values

**Steps to Find Median:**
1. Arrange data in ascending (or descending) order
2. Find median position: (n+1)/2
3. If odd n: median is value at that position
4. If even n: median is mean of two middle values

**Median Properties:**
- Divides ordered data into two equal halves
- Resistant to outliers (only position matters)
- Unaffected by extreme values
    `
  },

  's2-math-averages-mode': {
    displayName: 'Calculating Mode',
    topicName: 'mode of raw data and frequency distributions',

    progressionStructure: {
      sections: [
        {
          id: "mode-raw-data",
          title: "Finding Mode from Raw Data",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies mode (including bimodal and no mode cases) in 3+ datasets",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct mode identifications",
                "Correctly handles unimodal, bimodal, and no mode cases"
              ],
              qualitative: [
                "Identifies mode as value(s) with highest frequency",
                "Counts frequency correctly for each value",
                "Recognizes when dataset has one mode (unimodal)",
                "Recognizes when dataset has two modes (bimodal)",
                "Recognizes when dataset has no mode (all frequencies equal)",
                "States mode clearly (e.g., 'Mode = 8' not 'frequency = 3')"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on counting frequency"],
              qualitative: [
                "Understands concept but makes counting errors",
                "Sometimes reports frequency instead of value",
                "Needs reminder about bimodal/no mode cases",
                "Can identify after organizing data"
              ]
            },
            struggling: {
              quantitative: ["Multiple errors or reports wrong value"],
              qualitative: [
                "Confuses mode with mean or median",
                "Cannot identify most frequent value",
                "Reports frequency count instead of actual value",
                "Does not recognize bimodal or no mode scenarios"
              ]
            }
          },
          learningObjectives: [
            "Define mode as the value(s) that appears most frequently",
            "Count frequency of each value in a dataset",
            "Identify the value with highest frequency as the mode",
            "Recognize unimodal data (one mode)",
            "Recognize bimodal data (two modes with equal highest frequency)",
            "Recognize when data has no mode (all values appear equally often)"
          ],
          relevantFormulas: [
            "Mode = value(s) with highest frequency",
            "Unimodal: one value appears most often",
            "Bimodal: two values tied for highest frequency",
            "No mode: all values have same frequency",
            "Example: 2, 3, 3, 3, 5, 6, 6, 7 → Mode = 3 (appears 3 times)"
          ],
          availableTools: ["dotDiagram"]
        },
        {
          id: "mode-frequency-distribution",
          title: "Finding Mode from Frequency Distribution",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["mode-raw-data"],
          masterySignals: "Student identifies mode from frequency tables, dot diagrams, bar charts, and pictograms in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct mode identifications from various representations",
                "Accurately reads frequencies from diagrams"
              ],
              qualitative: [
                "Identifies value with highest frequency in table",
                "Finds tallest stack in dot diagram",
                "Identifies tallest bar in bar chart or histogram",
                "Reads pictogram keys correctly and counts symbols",
                "Distinguishes data value (mode) from frequency (how often it appears)",
                "Handles bimodal cases in frequency representations"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on reading diagram"],
              qualitative: [
                "Can find mode but struggles reading certain diagrams",
                "Sometimes confuses value with frequency in tables",
                "Needs help with pictogram keys or complex representations",
                "Can identify mode once data is clarified"
              ]
            },
            struggling: {
              quantitative: ["Cannot extract mode from diagrams"],
              qualitative: [
                "Does not understand how to read frequency table",
                "Cannot interpret visual representations",
                "Confuses which axis shows frequency vs value",
                "Reports frequency instead of value"
              ]
            }
          },
          learningObjectives: [
            "Identify mode from frequency table (value with highest frequency)",
            "Find mode from dot diagram (tallest stack of dots)",
            "Find mode from bar chart (tallest bar - but remember to read x-value, not height)",
            "Find mode from pictogram (most symbols, accounting for key)",
            "Extract mode from stem-and-leaf diagram (value appearing most often)",
            "Understand mode is data value, not frequency number"
          ],
          relevantFormulas: [
            "Mode from frequency table: find value x where f is maximum",
            "Mode from diagram: identify value with most representations (dots, bars, symbols)",
            "IMPORTANT: Mode is the data value (x), NOT the frequency (f)",
            "Example: If value 4 has frequency 7, mode = 4 (not 7)"
          ],
          availableTools: ["dotDiagram", "barChart", "histogram"]
        },
        {
          id: "mode-grouped-data",
          title: "Modal Class for Grouped Data",
          difficulty: "intermediate",
          prerequisites: ["mode-frequency-distribution"],
          masterySignals: "Student identifies modal class from grouped frequency tables and histograms in 2+ problems",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct modal class identifications",
                "Accurately identifies class with highest frequency"
              ],
              qualitative: [
                "Understands we cannot find exact mode from grouped data",
                "Identifies modal class as the class interval with highest frequency",
                "States modal class as an interval (e.g., 20 < x ≤ 30)",
                "Finds modal class from histogram (tallest bar)",
                "Recognizes we only know mode lies somewhere in that interval"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints"],
              qualitative: [
                "Understands concept but makes errors reading intervals",
                "Sometimes reports midpoint instead of interval",
                "Needs reminder about stating full interval",
                "Can identify once clarified"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify modal class"],
              qualitative: [
                "Does not understand grouped data concept",
                "Confuses modal class with exact mode",
                "Cannot read class intervals correctly",
                "Reports frequency instead of interval"
              ]
            }
          },
          learningObjectives: [
            "Understand we cannot find exact mode from grouped data (only know interval)",
            "Identify modal class as class interval with highest frequency",
            "State modal class as an interval (e.g., 15 < x ≤ 20)",
            "Find modal class from grouped frequency table",
            "Find modal class from histogram (tallest bar's interval)",
            "Explain why we can only identify a class, not exact value"
          ],
          relevantFormulas: [
            "Modal class = class interval with highest frequency",
            "We cannot determine exact mode from grouped data",
            "Modal class tells us the interval where mode lies",
            "From histogram: modal class corresponds to tallest bar"
          ],
          availableTools: ["histogram"]
        },
        {
          id: "mode-as-measure",
          title: "Understanding Mode as a Measure of Central Tendency",
          difficulty: "intermediate",
          prerequisites: ["mode-raw-data"],
          masterySignals: "Student explains when and why mode is useful in 2+ scenarios",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ scenarios correctly analyzed for mode usage"
              ],
              qualitative: [
                "Explains mode shows most common or popular value",
                "Recognizes mode is useful for categorical data (favorite color, shirt size)",
                "Understands mode is useful when frequency/popularity matters",
                "Can explain inventory example: stock most popular size",
                "Recognizes mode may not be near mean or median",
                "Understands mode is only measure that can be used for non-numerical data"
              ]
            },
            developing: {
              quantitative: ["1 scenario with guidance"],
              qualitative: [
                "Knows mode shows frequency but cannot explain applications well",
                "Needs examples to see when mode is useful",
                "Can identify usefulness after discussion"
              ]
            },
            struggling: {
              quantitative: ["Cannot explain when to use mode"],
              qualitative: [
                "Does not understand why mode is useful",
                "Cannot connect mode to real-world applications",
                "Thinks mean is always better"
              ]
            }
          },
          learningObjectives: [
            "Understand mode represents the most common or popular value",
            "Recognize mode is useful for understanding frequency patterns",
            "Identify scenarios where mode is most appropriate (inventory, preferences, sizes)",
            "Explain why mode works for categorical data (non-numerical)",
            "Understand mode may differ significantly from mean and median",
            "Apply mode to decision-making (e.g., which size to stock most)"
          ],
          relevantFormulas: [],
          availableTools: ["dotDiagram", "barChart"]
        }
      ]
    },

    learningObjectives: [
      "Identify mode as the value with highest frequency",
      "Recognize unimodal, bimodal, and no mode cases",
      "Find mode from frequency distributions and diagrams",
      "Identify modal class from grouped data",
      "Understand mode as a measure of what's most common",
      "Apply mode to real-world scenarios (inventory, preferences)"
    ],

    keyFormulas: `
**Mode Definitions:**
- Mode = value(s) that appears most frequently
- Unimodal: one value with highest frequency
- Bimodal: two values tied for highest frequency
- Multimodal: more than two values tied
- No mode: all values have equal frequency

**Modal Class (Grouped Data):**
- Modal class = class interval with highest frequency
- Cannot determine exact mode from grouped data
- Mode lies somewhere within modal class interval

**When to Use Mode:**
- To find most common or popular value
- For categorical/non-numerical data (colors, sizes)
- When frequency patterns matter (inventory, preferences)
- When you want to know what's "typical" by popularity, not size
    `
  },

  's2-math-averages-choosing': {
    displayName: 'Choosing the Right Average',
    topicName: 'selecting appropriate measures of central tendency',

    progressionStructure: {
      sections: [
        {
          id: "when-to-use-mean",
          title: "When to Use the Mean",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student identifies 2+ scenarios where mean is appropriate and explains why",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ scenarios correctly identified for mean usage"
              ],
              qualitative: [
                "Recognizes mean is appropriate when there are no extreme values",
                "Understands mean uses all data values equally",
                "Knows mean is best when data is evenly distributed",
                "Can explain mean is useful for calculating totals (sum = mean × count)",
                "Identifies contexts: test scores (no outliers), daily temperatures, balanced datasets",
                "Understands mean is the 'arithmetic center' or 'balance point'"
              ]
            },
            developing: {
              quantitative: ["1 scenario with hints"],
              qualitative: [
                "Knows mean is common but cannot explain when it's best",
                "Needs prompting about outliers affecting mean",
                "Can identify appropriate use after discussion"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify appropriate scenarios"],
              qualitative: [
                "Thinks mean is always the best average",
                "Does not understand limitations of mean",
                "Cannot explain why mean might be inappropriate"
              ]
            }
          },
          learningObjectives: [
            "Recognize mean is best when data has no extreme outliers",
            "Understand mean uses all data values (every value contributes)",
            "Know mean is useful for evenly distributed data",
            "Apply mean when you need to calculate totals or shares",
            "Identify real-world mean applications: average test score, average temperature, etc."
          ],
          relevantFormulas: [
            "Use mean when:",
            "- No extreme values (outliers)",
            "- Data evenly distributed",
            "- Every value should contribute equally",
            "- Need to calculate totals (sum = mean × n)"
          ],
          availableTools: ["dotDiagram"]
        },
        {
          id: "when-to-use-median",
          title: "When to Use the Median",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student identifies 2+ scenarios where median is better than mean due to outliers",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ scenarios correctly identified for median usage"
              ],
              qualitative: [
                "Recognizes median is appropriate when there are extreme values (outliers)",
                "Understands median is not distorted by outliers (position-based)",
                "Can explain salary example: median shows 'typical' worker, mean inflated by CEO",
                "Identifies contexts: house prices, incomes, skewed data",
                "Understands median represents the 'middle' person/item",
                "Can explain why median is more representative when data is skewed"
              ]
            },
            developing: {
              quantitative: ["1 scenario with significant guidance"],
              qualitative: [
                "Knows median is resistant to outliers but cannot explain well",
                "Needs examples to see when median is better",
                "Can identify after working through scenarios"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify when median is appropriate"],
              qualitative: [
                "Does not understand outlier effect on mean vs median",
                "Cannot explain when median is better than mean",
                "Thinks mean and median are interchangeable"
              ]
            }
          },
          learningObjectives: [
            "Recognize median is best when data has extreme outliers",
            "Understand median is resistant to outliers (only position matters)",
            "Explain classic examples: salaries, house prices where median is better",
            "Identify when data is skewed (not evenly distributed)",
            "Apply median when you want 'typical' value unaffected by extremes"
          ],
          relevantFormulas: [
            "Use median when:",
            "- Extreme values (outliers) present",
            "- Data is skewed (not symmetric)",
            "- Want 'typical' value resistant to extremes",
            "- Examples: salaries, house prices, incomes"
          ],
          availableTools: ["dotDiagram"]
        },
        {
          id: "when-to-use-mode",
          title: "When to Use the Mode",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student identifies 2+ scenarios where mode is most appropriate",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ scenarios correctly identified for mode usage"
              ],
              qualitative: [
                "Recognizes mode shows most popular or common value",
                "Understands mode is useful for categorical data (colors, sizes, flavors)",
                "Can explain inventory examples: stock most popular size",
                "Knows mode is the ONLY average that works for non-numerical data",
                "Identifies contexts: favorite item, most common shoe size, popular choice",
                "Understands mode tells you about frequency, not necessarily size or position"
              ]
            },
            developing: {
              quantitative: ["1 scenario with hints"],
              qualitative: [
                "Knows mode is about frequency but struggles with applications",
                "Needs examples to see when mode is useful",
                "Can identify after discussion of practical uses"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify when mode is appropriate"],
              qualitative: [
                "Does not understand unique purpose of mode",
                "Cannot explain why mode is useful",
                "Thinks mode is least important average"
              ]
            }
          },
          learningObjectives: [
            "Recognize mode is best for finding most common/popular value",
            "Understand mode works for categorical/non-numerical data",
            "Apply mode to inventory decisions (stock most popular items)",
            "Identify mode for preference data (favorite color, most common size)",
            "Understand mode is about frequency patterns, not magnitude"
          ],
          relevantFormulas: [
            "Use mode when:",
            "- Finding most popular/common value",
            "- Working with categorical data (non-numerical)",
            "- Making inventory/stocking decisions",
            "- Examples: shoe sizes, favorite items, popular choices"
          ],
          availableTools: ["dotDiagram", "barChart"]
        },
        {
          id: "comparing-all-three",
          title: "Comparing Mean, Median, and Mode",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["when-to-use-mean", "when-to-use-median", "when-to-use-mode"],
          masterySignals: "Student calculates all three averages for 2+ datasets and determines which is most appropriate",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ complete analyses with all three averages calculated correctly",
                "Consistently chooses most appropriate measure"
              ],
              qualitative: [
                "Correctly calculates mean, median, and mode for given data",
                "Compares the three values and notes differences",
                "Identifies when all three are similar (symmetric data)",
                "Identifies when they differ (skewed data with outliers)",
                "Justifies choice of most appropriate average based on context",
                "Explains how outliers affect mean but not median",
                "Recognizes mode may be very different from mean/median"
              ]
            },
            developing: {
              quantitative: ["1 analysis with some calculation errors"],
              qualitative: [
                "Can calculate all three but struggles to choose appropriate one",
                "Needs guidance on comparing values",
                "Can justify choice after prompting about context"
              ]
            },
            struggling: {
              quantitative: ["Multiple calculation errors or cannot choose appropriate measure"],
              qualitative: [
                "Cannot calculate all three correctly",
                "Does not understand how to compare them",
                "Cannot justify which is most appropriate",
                "Confused about when to use which"
              ]
            }
          },
          learningObjectives: [
            "Calculate mean, median, and mode for the same dataset",
            "Compare the three values and analyze differences",
            "Determine which average is most appropriate based on context",
            "Recognize symmetric data: mean ≈ median ≈ mode",
            "Recognize skewed data: mean pulled toward outliers, median resistant",
            "Justify choice of average with clear reasoning"
          ],
          relevantFormulas: [
            "For symmetric data: mean ≈ median ≈ mode",
            "For right-skewed data: mean > median (outliers pull mean up)",
            "For left-skewed data: mean < median (outliers pull mean down)",
            "Mode may differ from both regardless of skewness"
          ],
          availableTools: ["dotDiagram"]
        },
        {
          id: "measurement-error-effect",
          title: "How Measurement Errors Affect Averages",
          difficulty: "advanced",
          prerequisites: ["comparing-all-three"],
          masterySignals: "Student corrects for systematic measurement error in 2+ problems",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct adjustments for measurement error"
              ],
              qualitative: [
                "Understands systematic error affects all measurements equally",
                "Recognizes if scale reads +18g high, all measurements are +18g too high",
                "Correctly adjusts calculated average: true average = measured average - error",
                "Understands median and mode also shift by same amount as mean",
                "Can apply correction to mean, median, and mode",
                "Recognizes measurement error doesn't change which average is appropriate"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints on direction of correction"],
              qualitative: [
                "Understands concept but makes sign errors (+/-)",
                "Needs reminder about which direction to adjust",
                "Can complete after correction direction is clarified"
              ]
            },
            struggling: {
              quantitative: ["Cannot adjust for error correctly"],
              qualitative: [
                "Does not understand systematic error concept",
                "Confused about how to adjust averages",
                "Cannot determine direction of correction"
              ]
            }
          },
          learningObjectives: [
            "Understand systematic measurement error affects all values equally",
            "Recognize how systematic error affects calculated averages",
            "Apply correction: true average = measured average - error amount",
            "Understand all three averages shift by the same amount",
            "Solve problems involving measurement error correction"
          ],
          relevantFormulas: [
            "If measurements have systematic error of +e:",
            "True mean = measured mean - e",
            "True median = measured median - e",
            "True mode = measured mode - e",
            "All averages shift by the same amount as the error"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Identify when to use mean (no outliers, evenly distributed data)",
      "Identify when to use median (outliers present, skewed data)",
      "Identify when to use mode (most common, categorical data)",
      "Calculate and compare all three averages for a dataset",
      "Justify choice of appropriate average based on context and data characteristics",
      "Adjust averages for systematic measurement errors"
    ],

    keyFormulas: `
**Choosing the Right Average:**

**Use Mean when:**
- No extreme values (outliers)
- Data evenly distributed
- Need to use all values equally
- Examples: test scores, daily temperatures, balanced data

**Use Median when:**
- Extreme values (outliers) present
- Data is skewed
- Want "typical" value resistant to extremes
- Examples: salaries, house prices, income data

**Use Mode when:**
- Finding most popular/common value
- Categorical/non-numerical data
- Frequency patterns matter
- Examples: favorite color, most common shoe size, inventory decisions

**Data Patterns:**
- Symmetric data: mean ≈ median ≈ mode
- Right-skewed: mean > median (outliers pull mean up)
- Left-skewed: mean < median (outliers pull mean down)
    `
  }
};

// Global configuration for the entire Averages topic
export const S2_AVERAGES_CONFIG = {
  topicId: 's2-math-averages',
  displayName: 'Averages of Statistical Data',
  gradeLevel: 'Secondary 2',
  subject: 'Mathematics',

  description: 'Learn about measures of central tendency: mean, median, and mode. Understand when to use each type of average and how to calculate them from raw data, frequency distributions, and grouped data.',

  tutorCustomization: AVERAGES_TUTOR_CUSTOMIZATION,
  availableTools: AVERAGES_MATH_TOOLS,

  // Expected time to complete entire topic
  estimatedDurationMinutes: 300, // 5 hours across all subtopics

  // Overall topic learning outcomes
  topicObjectives: [
    "Master calculating mean from raw data, frequency distributions, and grouped data",
    "Master finding median from raw data and frequency distributions",
    "Master identifying mode and modal class",
    "Understand the conceptual differences between mean, median, and mode",
    "Choose the most appropriate average based on data characteristics",
    "Apply averages to real-world scenarios and problem-solving"
  ]
};
