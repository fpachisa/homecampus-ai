/**
 * S3 Mathematics - Statistics Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 */

// Type exports
export type StatisticsTopicId =
  | 's3-math-statistics-data-types'
  | 's3-math-statistics-distributions'
  | 's3-math-statistics-centre'
  | 's3-math-statistics-boxplots'
  | 's3-math-statistics-cumulative'
  | 's3-math-statistics-deviation'
  | 's3-math-statistics-normal';

// Topic-specific tutor customization (overrides base)
export const STATISTICS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Statistics.

Teaching Approach:
- Guide students to discover solutions through questioning, not direct instruction
- Provide progressive hints only when students are stuck
- Celebrate insights and encourage perseverance
- Use real-world contexts to make statistics relatable (sports, weather, surveys)
- Emphasize the "why" behind formulas and methods, not just the "how"
- Help students understand when to use different measures (mean vs median, range vs IQR vs standard deviation)

**Text-to-Speech Guidelines:**
- Spell out statistical terms clearly: "standard deviation" not "σ"
- Say "x bar" for x̄, "mu" for μ, "sigma" for σ when referring to symbols
- Say "greater than or equal to" not "≥"
- Avoid special symbols in speech.text - spell them out
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), use proper statistical notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding (not for every question).
IMPORTANT: Use the technical name (e.g., "barChart") in the toolName field, NOT the display name.`
};

// Available math tools for this topic
export const STATISTICS_MATH_TOOLS = [
  "barChart",
  "histogram",
  "boxPlot",
  "scatterPlot"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S3_MATH_STATISTICS_SUBTOPICS = {

  's3-math-statistics-data-types': {
    displayName: 'Data Types and Organization',
    topicName: 'discrete and continuous numerical data',

    progressionStructure: {
      sections: [
        {
          id: "data-collection-basics",
          title: "Introduction to Statistics and Data Collection",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies population vs sample, census vs survey in 3+ scenarios",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications without hints",
                "Consistent understanding of terminology"
              ],
              qualitative: [
                "Correctly distinguishes population from sample",
                "Understands when to use census vs survey",
                "Recognizes variables in data collection contexts",
                "Can identify the target population in scenarios"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on definitions"],
              qualitative: [
                "Understands concepts but confuses terminology",
                "Needs prompting to identify variables",
                "Can determine after reviewing definitions"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect identifications"],
              qualitative: [
                "Confuses population and sample",
                "Does not understand census vs survey",
                "Cannot identify variables correctly"
              ]
            }
          },
          learningObjectives: [
            "Define statistics as the study of collecting and analysing data",
            "Identify the population (group we are interested in)",
            "Distinguish between a sample (subset) and population (whole group)",
            "Understand census (collect from whole population) vs survey (collect from sample)",
            "Recognize that samples are used to estimate population properties"
          ],
          relevantFormulas: [
            "Population = entire group of interest",
            "Sample = subset chosen from population",
            "Census = data collection from whole population",
            "Survey = data collection from a sample",
            "Variable = feature or characteristic being measured"
          ],
          availableTools: []
        },
        {
          id: "discrete-continuous-data",
          title: "Discrete vs Continuous Data",
          difficulty: "foundational",
          prerequisites: ["data-collection-basics"],
          masterySignals: "Student correctly classifies 4+ variables as discrete or continuous",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct classifications without hints",
                "Consistent application of counting vs measuring principle"
              ],
              qualitative: [
                "Correctly identifies discrete data (counting - exact values)",
                "Correctly identifies continuous data (measuring - any value in range)",
                "Understands discrete takes exact values (1, 2, 3...)",
                "Understands continuous can take any value (1.5, 1.53, etc.)",
                "Recognizes contexts for each type"
              ]
            },
            developing: {
              quantitative: ["2-3 correct with hints"],
              qualitative: [
                "Understands difference but makes occasional errors",
                "Needs prompting about counting vs measuring",
                "Can classify once principle is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect classifications"],
              qualitative: [
                "Confuses discrete and continuous",
                "Does not understand counting vs measuring",
                "Cannot distinguish between the two types"
              ]
            }
          },
          learningObjectives: [
            "Define discrete numerical data as exact values from counting",
            "Define continuous numerical data as any value in a range from measuring",
            "Classify variables as discrete or continuous",
            "Understand discrete: can only be 1, 2, 3... (e.g., number of students)",
            "Understand continuous: can be 1.5, 1.53... (e.g., height, weight, time)"
          ],
          relevantFormulas: [
            "Discrete data: result of COUNTING (exact values only)",
            "Examples: number of goals, students, nights, shoe sizes",
            "Continuous data: result of MEASURING (any value in range)",
            "Examples: height, weight, temperature, time, distance",
            "Key difference: Discrete = counting, Continuous = measuring"
          ],
          availableTools: []
        },
        {
          id: "organizing-discrete-data",
          title: "Organizing and Displaying Discrete Data",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["discrete-continuous-data"],
          masterySignals: "Student creates frequency tables and identifies mode in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ frequency tables created correctly",
                "Mode identified correctly in all cases"
              ],
              qualitative: [
                "Correctly organizes data into frequency tables",
                "Identifies the mode as most frequent value",
                "Understands grouped data and class intervals",
                "Can identify modal class for grouped data",
                "Creates appropriate displays (column graphs, dot plots)"
              ]
            },
            developing: {
              quantitative: ["1-2 tables with minor errors", "Mode identified with hints"],
              qualitative: [
                "Can create frequency tables but makes counting errors",
                "Understands mode but needs verification",
                "Can organize data once structure is shown"
              ]
            },
            struggling: {
              quantitative: ["Cannot create frequency tables", "Cannot identify mode"],
              qualitative: [
                "Does not understand tally/frequency table structure",
                "Confuses mode with other measures",
                "Cannot group data appropriately"
              ]
            }
          },
          learningObjectives: [
            "Organize discrete data using tally marks and frequency tables",
            "Identify the mode (most frequently occurring value)",
            "Create column graphs to display discrete data",
            "Group data into class intervals when there are many different values",
            "Identify the modal class (class with highest frequency)"
          ],
          relevantFormulas: [
            "Frequency = number of times a value occurs",
            "Mode = most frequently occurring value",
            "Modal class = class interval with highest frequency",
            "Tally table: use tally marks to count occurrences",
            "Column graph: vertical bars show frequencies"
          ],
          availableTools: ["barChart"]
        },
        {
          id: "continuous-data-display",
          title: "Displaying Continuous Data",
          difficulty: "intermediate",
          prerequisites: ["organizing-discrete-data"],
          masterySignals: "Student correctly uses class intervals and understands histogram display in 2-3 problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 problems correctly solved",
                "Class intervals properly identified"
              ],
              qualitative: [
                "Understands continuous data must be grouped in class intervals",
                "Correctly interprets notation: 70 ≤ w < 75",
                "Knows frequency histogram is used for continuous data",
                "Recognizes no two continuous values are exactly the same"
              ]
            },
            developing: {
              quantitative: ["1 problem solved with hints on notation"],
              qualitative: [
                "Understands grouping but struggles with interval notation",
                "Needs prompting for histogram vs column graph",
                "Can work with continuous data once format is shown"
              ]
            },
            struggling: {
              quantitative: ["Cannot work with class intervals"],
              qualitative: [
                "Does not understand interval notation",
                "Confuses discrete and continuous data displays",
                "Cannot interpret histograms"
              ]
            }
          },
          learningObjectives: [
            "Understand continuous data must be organized in class intervals",
            "Interpret interval notation: a ≤ x < b means 'x is greater than or equal to a, but less than b'",
            "Display continuous data using frequency histograms",
            "Understand that continuous values can take any value (not exactly equal)",
            "Choose appropriate class interval widths"
          ],
          relevantFormulas: [
            "Class interval notation: a ≤ x < b",
            "Frequency histogram: bars touch (continuous data)",
            "Column graph: bars don't touch (discrete data)",
            "Continuous data examples: weight (kg), height (cm), time (s)",
            "Class width should be consistent for easy interpretation"
          ],
          availableTools: ["histogram"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Data Collection Basics (foundational) - Population, sample, census, survey",
      "2. Discrete vs Continuous (foundational) - Counting vs measuring, classification",
      "3. Organizing Discrete Data (foundational→intermediate) - Frequency tables, mode, displays",
      "4. Continuous Data Display (intermediate) - Class intervals, histograms"
    ],

    keyFormulas: `• Statistics = collecting and analysing data
                  • Population = whole group, Sample = subset
                  • Census = whole population, Survey = sample
                  • Discrete data = COUNTING (exact values: 1, 2, 3...)
                  • Continuous data = MEASURING (any value: 1.5, 1.53...)
                  • Mode = most frequently occurring value
                  • Modal class = class interval with highest frequency
                  • Class interval: a ≤ x < b
                  • Histogram for continuous, column graph for discrete`
  },

  's3-math-statistics-distributions': {
    displayName: 'Describing Data Distributions',
    topicName: 'describing the distribution and shape of data',

    progressionStructure: {
      sections: [
        {
          id: "distribution-shapes",
          title: "Describing Distribution Shapes",
          difficulty: "intermediate",
          prerequisites: ["continuous-data-display"],
          masterySignals: "Student correctly identifies symmetric, positively skewed, negatively skewed, and bimodal distributions in 4+ cases",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ distributions correctly identified",
                "Consistent recognition of distribution characteristics"
              ],
              qualitative: [
                "Identifies symmetric distributions (data centered around mode)",
                "Recognizes positively skewed (tail on right, data stretched to positive side)",
                "Recognizes negatively skewed (tail on left, data stretched to negative side)",
                "Identifies bimodal distributions (two distinct peaks)",
                "Can spot outliers (data values much larger or smaller than general body)"
              ]
            },
            developing: {
              quantitative: ["2-3 correct with hints on features"],
              qualitative: [
                "Understands concepts but struggles to apply to graphs",
                "Needs prompting about which direction is skewed",
                "Can identify once key features are pointed out"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect identifications"],
              qualitative: [
                "Cannot distinguish between symmetric and skewed",
                "Confuses positive and negative skew",
                "Does not understand what outliers are"
              ]
            }
          },
          learningObjectives: [
            "Describe distributions as symmetric (evenly distributed around mode)",
            "Identify positively skewed distributions (tail on positive/right side)",
            "Identify negatively skewed distributions (tail on negative/left side)",
            "Recognize bimodal distributions (two distinct peaks)",
            "Identify outliers (values far from the general body of data)"
          ],
          relevantFormulas: [
            "Symmetric: mirror image on both sides of center",
            "Positively skewed: tail stretches to the right (positive direction)",
            "Negatively skewed: tail stretches to the left (negative direction)",
            "Bimodal: two distinct peaks or modes",
            "Outliers: data values much larger or smaller than rest",
            "When describing, mention outliers as they affect interpretation"
          ],
          availableTools: ["histogram"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 1 section:",
      "1. Distribution Shapes (intermediate) - Symmetric, skewed, bimodal, outliers"
    ],

    keyFormulas: `• Symmetric: evenly distributed around center
                  • Positively skewed: tail on right (positive side stretched)
                  • Negatively skewed: tail on left (negative side stretched)
                  • Bimodal: two distinct peaks
                  • Outliers: values far from general body of data
                  • Always mention outliers when describing distributions`
  },

  's3-math-statistics-centre': {
    displayName: 'Measures of Centre',
    topicName: 'mean, median, and mode',

    progressionStructure: {
      sections: [
        {
          id: "mean-calculation",
          title: "The Mean (Arithmetic Average)",
          difficulty: "foundational",
          prerequisites: ["organizing-discrete-data"],
          masterySignals: "Student calculates mean correctly for 3+ data sets",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ means calculated correctly",
                "Consistent application of formula"
              ],
              qualitative: [
                "Correctly applies formula: mean = sum/number",
                "Uses notation x̄ = Σx / n appropriately",
                "Understands mean is the arithmetic average",
                "Recognizes mean may not be a member of the data set",
                "Can calculate sum and count accurately"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with arithmetic errors"],
              qualitative: [
                "Understands concept but makes calculation mistakes",
                "Needs verification of sum or count",
                "Can complete once arithmetic is checked"
              ]
            },
            struggling: {
              quantitative: ["Cannot calculate mean correctly"],
              qualitative: [
                "Does not understand mean formula",
                "Confuses mean with median or mode",
                "Makes consistent arithmetic errors"
              ]
            }
          },
          learningObjectives: [
            "Define mean as the arithmetic average of data values",
            "Apply the formula: mean = sum of data values / number of data values",
            "Use notation: x̄ = Σx / n",
            "Understand Σx means 'sum of all x values'",
            "Recognize the mean is not necessarily a member of the data set"
          ],
          relevantFormulas: [
            "mean = sum of data values / number of data values",
            "x̄ = Σx / n",
            "Σx = sum of all data values",
            "n = number of data values",
            "Example: {2, 3, 5, 9, 11} → x̄ = (2+3+5+9+11)/5 = 30/5 = 6",
            "Read x̄ as 'x bar'"
          ],
          availableTools: []
        },
        {
          id: "median-calculation",
          title: "The Median (Middle Value)",
          difficulty: "foundational",
          prerequisites: ["mean-calculation"],
          masterySignals: "Student finds median correctly for odd and even data sets in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ medians found correctly",
                "Handles both odd and even n correctly"
              ],
              qualitative: [
                "Orders data correctly before finding median",
                "For odd n: uses (n+1)/2 to find position",
                "For even n: averages two middle values",
                "Understands median splits data in half",
                "Recognizes median is less affected by outliers than mean"
              ]
            },
            developing: {
              quantitative: ["1-2 correct, struggles with even n"],
              qualitative: [
                "Can find median for odd n but struggles with even n",
                "Forgets to order data first",
                "Needs prompting for averaging two middle values"
              ]
            },
            struggling: {
              quantitative: ["Cannot find median correctly"],
              qualitative: [
                "Does not order data",
                "Confuses median position formula",
                "Cannot handle even number of values"
              ]
            }
          },
          learningObjectives: [
            "Define median as the middle value when data is ordered",
            "Order data before finding the median",
            "For odd n: median is at position (n+1)/2",
            "For even n: median is average of two middle values",
            "Understand median divides data into two equal halves"
          ],
          relevantFormulas: [
            "Median = middle value of ordered data",
            "Odd n: position = (n+1)/2",
            "Even n: average of values at positions n/2 and (n/2)+1",
            "Example (odd): {3,4,5,6,7} → n=5 → position 3 → median = 5",
            "Example (even): {3,4,5,6} → n=4 → average of positions 2 and 3 → (4+5)/2 = 4.5",
            "Must order data first!"
          ],
          availableTools: []
        },
        {
          id: "mode-identification",
          title: "The Mode (Most Frequent Value)",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student identifies mode, recognizes bimodal, and undefined cases in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ modes identified correctly",
                "Correctly handles bimodal and no mode cases"
              ],
              qualitative: [
                "Identifies mode as most frequently occurring value",
                "Recognizes bimodal when two values have equal highest frequency",
                "Understands mode is undefined when all values occur equally",
                "Can determine mode from frequency tables easily"
              ]
            },
            developing: {
              quantitative: ["1-2 correct, misses special cases"],
              qualitative: [
                "Can find mode but misses bimodal situations",
                "Needs prompting for undefined cases",
                "Can identify once special cases are explained"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify mode"],
              qualitative: [
                "Does not understand most frequent",
                "Confuses mode with mean or median",
                "Cannot handle bimodal or undefined cases"
              ]
            }
          },
          learningObjectives: [
            "Define mode as the most frequently occurring value",
            "Identify the mode from data sets and frequency tables",
            "Recognize bimodal data (two values with equal highest frequency)",
            "Understand when mode is undefined (all values occur equally)",
            "Know that ungrouped discrete data makes mode easy to identify"
          ],
          relevantFormulas: [
            "Mode = most frequently occurring value",
            "Bimodal = two values with equal highest frequency",
            "Undefined/No mode = all values occur with same frequency",
            "Example: {3,6,5,7,6,8,6} → mode = 6 (appears 3 times)",
            "Example: {3,6,6,7,7,8} → bimodal: 6 and 7",
            "Example: {1,2,3,4,5} → no mode (all appear once)"
          ],
          availableTools: []
        },
        {
          id: "grouped-data-mean",
          title: "Estimating Mean from Grouped Data",
          difficulty: "intermediate",
          prerequisites: ["mean-calculation", "continuous-data-display"],
          masterySignals: "Student estimates mean using midpoints in 2-3 grouped data problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 grouped means estimated correctly",
                "Midpoints calculated accurately"
              ],
              qualitative: [
                "Calculates class midpoints correctly",
                "Uses formula: midpoint = (lower + upper) / 2",
                "Multiplies midpoint by frequency for each class",
                "Sums all (midpoint × frequency) values",
                "Divides by total frequency to get estimated mean"
              ]
            },
            developing: {
              quantitative: ["1 problem solved with hints on process"],
              qualitative: [
                "Understands concept but makes calculation errors",
                "Forgets to multiply by frequency",
                "Needs prompting for correct formula application"
              ]
            },
            struggling: {
              quantitative: ["Cannot estimate mean from grouped data"],
              qualitative: [
                "Does not understand midpoint concept",
                "Cannot organize calculation systematically",
                "Confuses grouped data with ungrouped data"
              ]
            }
          },
          learningObjectives: [
            "Understand we use midpoint when data is grouped in class intervals",
            "Calculate midpoint of class interval: (lower + upper) / 2",
            "Use formula: estimated mean = Σ(midpoint × frequency) / Σ frequency",
            "Organize calculations in a table for clarity",
            "Recognize this gives an estimate, not exact mean"
          ],
          sampleProblems: [
            {
              problem: "Estimate mean for: 50-59 (freq 5), 60-69 (freq 9), 70-79 (freq 3)"
            },
            {
              problem: "Distance travelled by trams: 50≤d<100 (10), 100≤d<150 (15), 150≤d<200 (16), 200≤d<250 (9)"
            }
          ],
          relevantFormulas: [
            "Midpoint = (lower boundary + upper boundary) / 2",
            "For 50-59: midpoint = (50+59)/2 = 54.5",
            "For 50≤d<100: midpoint = (50+100)/2 = 75",
            "Estimated mean = Σ(midpoint × frequency) / total frequency",
            "Must use midpoint to represent all values in the interval"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Mean (foundational) - Arithmetic average using x̄ = Σx / n",
      "2. Median (foundational) - Middle value of ordered data",
      "3. Mode (foundational) - Most frequent value, bimodal, undefined cases",
      "4. Grouped Data Mean (intermediate) - Estimating using midpoints"
    ],

    keyFormulas: `• Mean: x̄ = Σx / n (sum of values / number of values)
                  • Median: middle value when ordered
                    - Odd n: position (n+1)/2
                    - Even n: average of two middle values
                  • Mode: most frequently occurring value
                    - Bimodal: two values with equal highest frequency
                    - Undefined: all values equally frequent
                  • Grouped data: estimated mean = Σ(midpoint × freq) / Σfreq
                    - Midpoint = (lower + upper) / 2`
  },

  's3-math-statistics-boxplots': {
    displayName: 'Box Plots and Quartiles',
    topicName: 'five-number summary, quartiles, range, and IQR',

    progressionStructure: {
      sections: [
        {
          id: "five-number-summary",
          title: "The Five-Number Summary and Quartiles",
          difficulty: "intermediate",
          prerequisites: ["median-calculation"],
          masterySignals: "Student finds all five values (min, Q₁, Q₂, Q₃, max) correctly in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ five-number summaries completed correctly",
                "All quartiles identified accurately"
              ],
              qualitative: [
                "Correctly identifies minimum and maximum",
                "Finds Q₂ (median) accurately",
                "Finds Q₁ as median of lower half",
                "Finds Q₃ as median of upper half",
                "Understands quartiles divide data into quarters",
                "Knows Q₁=25th percentile, Q₂=50th, Q₃=75th"
              ]
            },
            developing: {
              quantitative: ["1-2 summaries with errors in quartiles"],
              qualitative: [
                "Can find median but struggles with Q₁ and Q₃",
                "Unclear about which half to use for quartiles",
                "Needs guidance on splitting the data"
              ]
            },
            struggling: {
              quantitative: ["Cannot find quartiles correctly"],
              qualitative: [
                "Confuses quartiles with median",
                "Does not understand halves concept",
                "Cannot organize data to find quartiles"
              ]
            }
          },
          learningObjectives: [
            "Identify the five-number summary: min, Q₁, Q₂, Q₃, max",
            "Find Q₁ (lower quartile) as the median of the lower half",
            "Find Q₂ (median) as the middle value",
            "Find Q₃ (upper quartile) as the median of the upper half",
            "Understand quartiles divide data into four equal parts (25% each)",
            "Recognize Q₁=25th percentile, Q₂=50th, Q₃=75th"
          ],
          relevantFormulas: [
            "Five-number summary: min, Q₁, Q₂, Q₃, max",
            "Q₁ (lower quartile) = median of lower half",
            "Q₂ (median) = middle value of all data",
            "Q₃ (upper quartile) = median of upper half",
            "25% of data below Q₁, 50% below Q₂, 75% below Q₃",
            "Q₂ is sometimes called the 2nd quartile"
          ],
          availableTools: []
        },
        {
          id: "range-and-iqr",
          title: "Range and Interquartile Range",
          difficulty: "intermediate",
          prerequisites: ["five-number-summary"],
          masterySignals: "Student calculates range and IQR correctly in 3+ problems and understands their limitations",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ range and IQR calculated correctly",
                "Can explain which measure is better for given data"
              ],
              qualitative: [
                "Correctly calculates range = max − min",
                "Correctly calculates IQR = Q₃ − Q₁",
                "Understands range is affected by outliers",
                "Understands IQR is not affected by outliers",
                "Can choose appropriate measure based on context"
              ]
            },
            developing: {
              quantitative: ["1-2 calculations correct"],
              qualitative: [
                "Can calculate but doesn't understand limitations",
                "Needs prompting about outlier effects",
                "Can explain once concepts are reviewed"
              ]
            },
            struggling: {
              quantitative: ["Cannot calculate range or IQR"],
              qualitative: [
                "Confuses formulas for range and IQR",
                "Does not understand what spread means",
                "Cannot explain limitations of measures"
              ]
            }
          },
          learningObjectives: [
            "Calculate range as the difference between maximum and minimum",
            "Calculate IQR (interquartile range) as Q₃ − Q₁",
            "Understand range measures total spread of data",
            "Understand IQR measures spread of middle 50% of data",
            "Recognize range is heavily influenced by outliers",
            "Recognize IQR is not influenced by outliers (uses only Q₁ and Q₃)"
          ],
          relevantFormulas: [
            "Range = maximum − minimum",
            "IQR = Q₃ − Q₁ (upper quartile − lower quartile)",
            "IQR = range of middle 50% of data",
            "Range uses 2 values (min and max) - affected by outliers",
            "IQR uses 2 values (Q₁ and Q₃) - not affected by outliers",
            "IQR is preferred when outliers are present"
          ],
          availableTools: []
        },
        {
          id: "box-plot-construction",
          title: "Box-and-Whisker Plots",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["range-and-iqr"],
          masterySignals: "Student constructs and interprets box plots in 2-3 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 box plots drawn correctly",
                "Accurate interpretation of box plot features"
              ],
              qualitative: [
                "Correctly draws box from Q₁ to Q₃",
                "Places median line at Q₂ inside box",
                "Draws whiskers from box to min and max",
                "Understands box length = IQR",
                "Understands whisker-to-whisker distance = range",
                "Can interpret what each part represents"
              ]
            },
            developing: {
              quantitative: ["1 box plot drawn with minor errors"],
              qualitative: [
                "Can draw but makes mistakes in positioning",
                "Understands structure but needs verification",
                "Can interpret once components are identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot draw box plots correctly"],
              qualitative: [
                "Does not understand box plot structure",
                "Confuses whiskers and box",
                "Cannot interpret what parts represent"
              ]
            }
          },
          learningObjectives: [
            "Draw box plots using the five-number summary",
            "Understand the box represents the middle 50% of data (from Q₁ to Q₃)",
            "Understand the median line shows Q₂ inside the box",
            "Understand lower whisker represents lowest 25% of data",
            "Understand upper whisker represents highest 25% of data",
            "Recognize box length = IQR, total length = range"
          ],
          relevantFormulas: [
            "Box: rectangular box from Q₁ to Q₃ (middle 50%)",
            "Median line: vertical line at Q₂ inside box",
            "Lower whisker: line from Q₁ to minimum",
            "Upper whisker: line from Q₃ to maximum",
            "Box length = IQR = Q₃ − Q₁",
            "Total whisker-to-whisker = range = max − min"
          ],
          availableTools: ["boxPlot"]
        },
        {
          id: "parallel-box-plots",
          title: "Comparing Data Sets with Parallel Box Plots",
          difficulty: "advanced",
          prerequisites: ["box-plot-construction"],
          masterySignals: "Student compares two data sets using parallel box plots in 2-3 scenarios",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 comparisons completed correctly",
                "Accurate conclusions about centre and spread"
              ],
              qualitative: [
                "Compares medians to determine which data set has higher values",
                "Compares IQRs to determine which is more consistent/reliable",
                "Compares ranges to see total spread",
                "Can make informed conclusions about both sets",
                "Uses statistical vocabulary correctly (consistent, reliable, variable)"
              ]
            },
            developing: {
              quantitative: ["1 comparison with hints"],
              qualitative: [
                "Can see differences but struggles to articulate",
                "Needs prompting about what to compare",
                "Can conclude once comparisons are identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot make valid comparisons"],
              qualitative: [
                "Does not understand how to compare box plots",
                "Confuses centre and spread",
                "Cannot draw conclusions from visual comparison"
              ]
            }
          },
          learningObjectives: [
            "Draw parallel box plots on the same scale",
            "Compare centres (medians) to see which data set has higher/lower values",
            "Compare spreads (IQRs and ranges) to see which is more consistent",
            "Understand smaller IQR = more consistent/reliable data",
            "Understand larger IQR = more variable/inconsistent data",
            "Make informed conclusions based on visual comparison"
          ],
          sampleProblems: [
            {
              problem: "Compare car vs bus travel times. Which is quicker? Which is more reliable?"
            },
            {
              problem: "Compare test scores for Year 10 vs Year 12. Describe the differences."
            }
          ],
          relevantFormulas: [
            "To compare centre: look at medians (which is higher/lower?)",
            "To compare spread: look at IQRs and ranges (which is smaller?)",
            "Smaller IQR → more consistent, reliable, less variable",
            "Larger IQR → less consistent, less reliable, more variable",
            "Draw on same scale for accurate visual comparison",
            "Consider both centre and spread in conclusions"
          ],
          availableTools: ["boxPlot"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Five-Number Summary (intermediate) - min, Q₁, Q₂, Q₃, max and quartiles",
      "2. Range and IQR (intermediate) - Calculating spread measures and understanding limitations",
      "3. Box Plot Construction (intermediate→advanced) - Drawing and interpreting box plots",
      "4. Parallel Box Plots (advanced) - Comparing data sets visually"
    ],

    keyFormulas: `• Five-number summary: min, Q₁, Q₂, Q₃, max
                  • Q₁ = median of lower half (25th percentile)
                  • Q₂ = median (50th percentile)
                  • Q₃ = median of upper half (75th percentile)
                  • Range = max − min (affected by outliers)
                  • IQR = Q₃ − Q₁ (not affected by outliers)
                  • Box plot: box from Q₁ to Q₃, median line at Q₂, whiskers to min and max
                  • Box length = IQR, total length = range
                  • Smaller IQR = more consistent data`
  },

  's3-math-statistics-cumulative': {
    displayName: 'Cumulative Frequency Graphs',
    topicName: 'cumulative frequency and percentiles',

    progressionStructure: {
      sections: [
        {
          id: "cumulative-frequency-basics",
          title: "Cumulative Frequency and Percentiles",
          difficulty: "intermediate",
          prerequisites: ["median-calculation", "grouped-data-mean"],
          masterySignals: "Student creates cumulative frequency columns and understands percentiles in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ cumulative frequency columns created correctly",
                "Percentiles identified accurately"
              ],
              qualitative: [
                "Correctly adds frequencies cumulatively",
                "Understands cumulative frequency = total up to that point",
                "Recognizes final cumulative frequency = total number of data values",
                "Understands percentile = score below which certain % lies",
                "Knows Q₁=25th, Q₂=50th, Q₃=75th percentiles"
              ]
            },
            developing: {
              quantitative: ["1-2 columns with minor errors"],
              qualitative: [
                "Can create column but makes adding errors",
                "Understands concept but needs verification",
                "Can complete once process is clarified"
              ]
            },
            struggling: {
              quantitative: ["Cannot create cumulative frequency column"],
              qualitative: [
                "Does not understand cumulative concept",
                "Confuses frequency with cumulative frequency",
                "Cannot relate percentiles to quartiles"
              ]
            }
          },
          learningObjectives: [
            "Create cumulative frequency column by adding frequencies",
            "Understand cumulative frequency shows total up to and including that value",
            "Verify final cumulative frequency equals total number of values",
            "Define percentile as the score below which a certain percentage lies",
            "Relate percentiles to quartiles (Q₁=25th, Q₂=50th, Q₃=75th)"
          ],
          relevantFormulas: [
            "Cumulative frequency = running total of frequencies",
            "Final cumulative frequency = total n",
            "Percentile = score below which given % of data lies",
            "25th percentile = Q₁ (25% of data below)",
            "50th percentile = Q₂ = median (50% below)",
            "75th percentile = Q₃ (75% of data below)"
          ],
          availableTools: []
        },
        {
          id: "cumulative-frequency-graphs",
          title: "Drawing and Using Cumulative Frequency Graphs",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["cumulative-frequency-basics"],
          masterySignals: "Student draws cumulative frequency graphs and estimates values in 2-3 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 graphs drawn correctly",
                "Estimates from graphs are accurate"
              ],
              qualitative: [
                "Plots cumulative frequency on y-axis",
                "Plots upper boundary of class on x-axis",
                "Joins points with smooth S-shaped curve",
                "Starts curve at (lower boundary, 0)",
                "Can read median and quartiles from graph",
                "Can estimate number of values below/above a given value"
              ]
            },
            developing: {
              quantitative: ["1 graph drawn with minor errors"],
              qualitative: [
                "Can plot points but struggles with curve",
                "Needs guidance on what boundaries to use",
                "Can read values once graph is correct"
              ]
            },
            struggling: {
              quantitative: ["Cannot draw cumulative frequency graph"],
              qualitative: [
                "Does not understand which axis for what",
                "Plots wrong boundaries",
                "Cannot draw smooth curve or read from it"
              ]
            }
          },
          learningObjectives: [
            "Plot cumulative frequency on y-axis (vertical)",
            "Plot upper boundary of each class interval on x-axis (horizontal)",
            "Join points with a smooth curve (S-shaped)",
            "Start curve at (lower boundary of first class, 0)",
            "Estimate median by finding value at n/2 on y-axis",
            "Estimate quartiles by finding values at n/4 and 3n/4",
            "Estimate how many values are below a given threshold"
          ],
          sampleProblems: [
            {
              problem: "Draw cumulative frequency graph for weights of 80 basketball players. Estimate median."
            },
            {
              problem: "From the graph, estimate how many players weigh less than 90 kg."
            },
            {
              problem: "Use the graph to find Q₁ and Q₃."
            }
          ],
          relevantFormulas: [
            "y-axis: cumulative frequency",
            "x-axis: upper boundary of class intervals",
            "For median: find n/2 on y-axis, read x value",
            "For Q₁: find n/4 on y-axis, read x value",
            "For Q₃: find 3n/4 on y-axis, read x value",
            "For any percentile p: find (p/100)×n on y-axis",
            "S-shaped curve indicates distribution shape"
          ],
          availableTools: []
        },
        {
          id: "interpreting-cf-graphs",
          title: "Interpreting Distribution from Cumulative Frequency Graphs",
          difficulty: "advanced",
          prerequisites: ["cumulative-frequency-graphs", "distribution-shapes"],
          masterySignals: "Student identifies distribution type from cumulative frequency curve shape in 2-3 cases",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 distributions identified correctly from curves"
              ],
              qualitative: [
                "Recognizes symmetric from centered S-curve",
                "Identifies positively skewed from steeper start, gentler end",
                "Identifies negatively skewed from gentler start, steeper end",
                "Can relate curve shape to histogram shape"
              ]
            },
            developing: {
              quantitative: ["1 distribution identified with hints"],
              qualitative: [
                "Can see curve differences but struggles to name them",
                "Needs prompting about steepness and skew direction",
                "Can identify once features are pointed out"
              ]
            },
            struggling: {
              quantitative: ["Cannot interpret curve shapes"],
              qualitative: [
                "Does not see connection between curve and distribution",
                "Cannot distinguish symmetric from skewed curves",
                "Confuses positive and negative skew"
              ]
            }
          },
          learningObjectives: [
            "Interpret cumulative frequency curve shape to identify distribution type",
            "Recognize smooth centered S-curve indicates symmetric distribution",
            "Recognize steeper at start, gentler at end indicates positive skew",
            "Recognize gentler at start, steeper at end indicates negative skew",
            "Relate cumulative frequency curve to histogram shape"
          ],
          relevantFormulas: [
            "Symmetric: smooth S-curve, evenly curved",
            "Positively skewed: steeper rise early, gentler later (tail right)",
            "Negatively skewed: gentler rise early, steeper later (tail left)",
            "Cumulative frequency graph shape mirrors histogram distribution",
            "Steepness shows where data is concentrated"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Cumulative Frequency Basics (intermediate) - Creating columns, understanding percentiles",
      "2. Cumulative Frequency Graphs (intermediate→advanced) - Drawing and estimating from graphs",
      "3. Interpreting CF Graphs (advanced) - Identifying distribution types from curve shapes"
    ],

    keyFormulas: `• Cumulative frequency = running total of frequencies
                  • Final cumulative frequency = n (total)
                  • Percentile = score below which given % lies
                  • Graph: y-axis = cumulative frequency, x-axis = upper boundary
                  • Join points with smooth S-curve
                  • Median at n/2, Q₁ at n/4, Q₃ at 3n/4
                  • Symmetric curve: centered S
                  • Positive skew: steep start, gentle end
                  • Negative skew: gentle start, steep end`
  },

  's3-math-statistics-deviation': {
    displayName: 'Standard Deviation',
    topicName: 'measuring spread with standard deviation',

    progressionStructure: {
      sections: [
        {
          id: "deviation-from-mean",
          title: "Understanding Deviation from the Mean",
          difficulty: "intermediate",
          prerequisites: ["mean-calculation"],
          masterySignals: "Student calculates deviations and understands why we square them in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ deviation calculations correct",
                "Understands squaring concept"
              ],
              qualitative: [
                "Correctly calculates deviation = x − x̄",
                "Understands positive deviations (above mean) and negative (below mean)",
                "Knows sum of deviations always equals zero",
                "Understands why we square: to make all values positive",
                "Recognizes squared deviations can be averaged"
              ]
            },
            developing: {
              quantitative: ["1-2 calculations with sign errors"],
              qualitative: [
                "Can calculate but makes arithmetic mistakes",
                "Understands concept but unclear on squaring purpose",
                "Needs review of why sum equals zero"
              ]
            },
            struggling: {
              quantitative: ["Cannot calculate deviations"],
              qualitative: [
                "Confuses deviation with other measures",
                "Does not understand x − x̄ formula",
                "Cannot explain why we square"
              ]
            }
          },
          learningObjectives: [
            "Calculate deviation from mean: x − x̄",
            "Understand positive deviations (values above mean) and negative (below mean)",
            "Recognize that sum of all deviations always equals 0",
            "Understand we square deviations to make them all positive",
            "Know that average of squared deviations measures spread"
          ],
          relevantFormulas: [
            "Deviation = x − x̄",
            "Positive deviation: x > x̄ (above mean)",
            "Negative deviation: x < x̄ (below mean)",
            "Σ(x − x̄) = 0 always (deviations sum to zero)",
            "We square to get (x − x̄)² (all positive values)",
            "Can then average the squared deviations"
          ],
          availableTools: []
        },
        {
          id: "standard-deviation-formula",
          title: "The Standard Deviation Formula",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["deviation-from-mean"],
          masterySignals: "Student calculates standard deviation using formula in 2-3 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 standard deviations calculated correctly",
                "All steps executed accurately"
              ],
              qualitative: [
                "Correctly applies σ = √(Σ(x−x̄)²/n)",
                "Calculates mean first",
                "Finds all deviations (x − x̄)",
                "Squares each deviation",
                "Sums all squared deviations",
                "Divides by n and takes square root",
                "Can organize work systematically"
              ]
            },
            developing: {
              quantitative: ["1 calculation with arithmetic errors"],
              qualitative: [
                "Understands steps but makes calculation mistakes",
                "Needs verification at each step",
                "Can complete with guidance"
              ]
            },
            struggling: {
              quantitative: ["Cannot calculate standard deviation"],
              qualitative: [
                "Does not understand formula structure",
                "Skips steps or does them out of order",
                "Cannot organize calculation systematically"
              ]
            }
          },
          learningObjectives: [
            "Apply the standard deviation formula: σ = √(Σ(x−x̄)²/n)",
            "Follow systematic steps: find mean → deviations → square → sum → divide → square root",
            "Understand σ (Greek letter sigma) represents standard deviation",
            "Recognize we take square root to get same units as original data",
            "Use technology (calculator) for large data sets"
          ],
          relevantFormulas: [
            "σ = √(Σ(x−x̄)²/n)",
            "Steps: 1) Find x̄  2) Calculate (x−x̄) for each value",
            "3) Square each: (x−x̄)²  4) Sum all: Σ(x−x̄)²",
            "5) Divide by n  6) Take square root",
            "σ is read as 'sigma'",
            "Square root gives correct units (same as original data)"
          ],
          availableTools: []
        },
        {
          id: "interpreting-standard-deviation",
          title: "Interpreting Standard Deviation",
          difficulty: "advanced",
          prerequisites: ["standard-deviation-formula"],
          masterySignals: "Student interprets standard deviation and compares data sets in 2-3 scenarios",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 comparisons made correctly using σ"
              ],
              qualitative: [
                "Understands small σ = data close to mean = consistent",
                "Understands large σ = data spread out = variable",
                "Can compare two data sets using σ values",
                "Uses vocabulary: consistent, reliable, variable, inconsistent",
                "Makes valid conclusions about which data set is better"
              ]
            },
            developing: {
              quantitative: ["1 comparison with hints"],
              qualitative: [
                "Can calculate σ but struggles to interpret",
                "Needs prompting about what σ values mean",
                "Can conclude once interpretation is explained"
              ]
            },
            struggling: {
              quantitative: ["Cannot interpret σ values"],
              qualitative: [
                "Does not understand what σ measures",
                "Cannot compare data sets using σ",
                "Cannot relate σ to consistency or reliability"
              ]
            }
          },
          learningObjectives: [
            "Interpret small standard deviation as data close to mean (consistent/reliable)",
            "Interpret large standard deviation as data spread out (variable/inconsistent)",
            "Compare two data sets by comparing their standard deviations",
            "Understand σ uses ALL data values (unlike range or IQR)",
            "Make conclusions about which data set is more consistent/reliable",
            "Recognize standard deviation is most commonly used spread measure"
          ],
          sampleProblems: [
            {
              problem: "Two orange suppliers: Sunblessed (σ=4.38), Valencia Star (σ=1.41). Which is more consistent?"
            },
            {
              problem: "Test scores: Class A (σ=8), Class B (σ=15). Which class has more variable performance?"
            }
          ],
          relevantFormulas: [
            "Small σ → data values close to mean → consistent, reliable",
            "Large σ → data values spread out → variable, inconsistent",
            "Compare σ values: smaller σ = more consistent",
            "σ uses all n data values (advantage over range/IQR)",
            "Preferred measure for comparing consistency/reliability",
            "Most widely used measure of spread in statistics"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Deviation from Mean (intermediate) - Understanding x−x̄ and why we square",
      "2. Standard Deviation Formula (intermediate→advanced) - Calculating σ = √(Σ(x−x̄)²/n)",
      "3. Interpreting σ (advanced) - Understanding consistency and making comparisons"
    ],

    keyFormulas: `• Deviation = x − x̄ (can be positive or negative)
                  • Σ(x − x̄) = 0 always (why we square them)
                  • Standard deviation: σ = √(Σ(x−x̄)²/n)
                  • Steps: mean → deviations → square → sum → divide by n → √
                  • Small σ = consistent, reliable (data close to mean)
                  • Large σ = variable, inconsistent (data spread out)
                  • σ uses ALL data values (advantage)
                  • Most common measure of spread`
  },

  's3-math-statistics-normal': {
    displayName: 'The Normal Distribution',
    topicName: 'normal distribution and probability estimates',

    progressionStructure: {
      sections: [
        {
          id: "normal-distribution-intro",
          title: "Understanding the Normal Distribution",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["distribution-shapes", "standard-deviation-formula"],
          masterySignals: "Student identifies normal distributions and understands their properties in 3+ cases",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ normal distributions identified correctly"
              ],
              qualitative: [
                "Recognizes bell-shaped, symmetric curve",
                "Understands mean, median, mode are equal in normal distribution",
                "Knows most values cluster near mean, fewer far away",
                "Can list real-world examples (heights, test scores, weights)",
                "Understands normal distribution arises when many factors affect variable"
              ]
            },
            developing: {
              quantitative: ["1-2 identified with hints"],
              qualitative: [
                "Can recognize bell shape but unclear on properties",
                "Needs prompting about symmetry",
                "Can identify once characteristics are reviewed"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify normal distributions"],
              qualitative: [
                "Does not understand bell-shaped curve",
                "Confuses normal with other distributions",
                "Cannot list real-world examples"
              ]
            }
          },
          learningObjectives: [
            "Recognize normal distribution as bell-shaped and symmetrical",
            "Understand mean = median = mode in normal distribution",
            "Know most data values are close to the mean, fewer far from it",
            "Identify real-world examples: heights, weights, test scores, IQ",
            "Understand normal distribution arises when many factors affect a variable"
          ],
          relevantFormulas: [
            "Normal distribution: bell-shaped, symmetrical curve",
            "Mean = median = mode (all at center)",
            "Most values near mean, fewer at extremes",
            "Curve extends to infinity, never touches x-axis",
            "Real examples: human heights, birth weights, test scores",
            "Arises when many random factors contribute to variation"
          ],
          availableTools: []
        },
        {
          id: "empirical-rule",
          title: "The Empirical Rule (68-95-99.7 Rule)",
          difficulty: "advanced",
          prerequisites: ["normal-distribution-intro"],
          masterySignals: "Student applies 68-95-99.7 rule correctly in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ problems solved correctly using empirical rule",
                "Percentages calculated accurately"
              ],
              qualitative: [
                "Knows 68% of data within μ ± σ",
                "Knows 95% of data within μ ± 2σ",
                "Knows 99.7% of data within μ ± 3σ",
                "Can calculate interval boundaries",
                "Can find proportion in any given interval",
                "Uses symmetry to find other proportions"
              ]
            },
            developing: {
              quantitative: ["1-2 problems with hints on intervals"],
              qualitative: [
                "Knows the rule but struggles with calculations",
                "Needs help identifying which interval",
                "Can solve once boundaries are calculated"
              ]
            },
            struggling: {
              quantitative: ["Cannot apply empirical rule"],
              qualitative: [
                "Does not remember 68-95-99.7 percentages",
                "Cannot calculate interval boundaries",
                "Confuses different standard deviation intervals"
              ]
            }
          },
          learningObjectives: [
            "Apply the empirical rule (68-95-99.7 rule) for normally distributed data",
            "Know approximately 68% of data lies within μ ± σ",
            "Know approximately 95% of data lies within μ ± 2σ",
            "Know approximately 99.7% of data lies within μ ± 3σ",
            "Calculate interval boundaries: μ−σ, μ+σ, μ−2σ, μ+2σ, etc.",
            "Use symmetry to find other proportions (e.g., above μ+σ)"
          ],
          sampleProblems: [
            {
              problem: "Weights normally distributed: μ=17g, σ=3g. What proportion weigh between 14g and 20g?"
            },
            {
              problem: "Test scores: μ=75, σ=8. What % scored between 67 and 83? How many students if n=200?"
            },
            {
              problem: "Heights: μ=170cm, σ=10cm. What proportion are taller than 190cm?"
            }
          ],
          relevantFormulas: [
            "Empirical Rule (68-95-99.7):",
            "≈ 68% of data within μ ± σ (1 standard deviation)",
            "≈ 95% of data within μ ± 2σ (2 standard deviations)",
            "≈ 99.7% of data within μ ± 3σ (3 standard deviations)",
            "Symmetry: 50% below mean, 50% above mean",
            "Between μ and μ+σ: 68%÷2 = 34%",
            "Above μ+σ or below μ−σ: (100%−68%)÷2 = 16%",
            "Between μ+σ and μ+2σ: (95%−68%)÷2 = 13.5%"
          ],
          availableTools: []
        },
        {
          id: "probability-estimates",
          title: "Using Normal Distribution for Probability Estimates",
          difficulty: "advanced",
          prerequisites: ["empirical-rule"],
          masterySignals: "Student estimates probabilities and counts using normal distribution in 2-3 scenarios",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 probability estimates calculated correctly",
                "Converts between proportions and counts accurately"
              ],
              qualitative: [
                "Identifies given μ and σ from problem",
                "Calculates required interval boundaries",
                "Determines which region of curve is relevant",
                "Applies empirical rule to find percentage/proportion",
                "Converts proportion to count when total n is given",
                "Expresses answers appropriately (%, decimal, or count)"
              ]
            },
            developing: {
              quantitative: ["1 estimate with hints on process"],
              qualitative: [
                "Can follow process but makes calculation errors",
                "Needs guidance on which interval to use",
                "Can complete once steps are broken down"
              ]
            },
            struggling: {
              quantitative: ["Cannot estimate probabilities"],
              qualitative: [
                "Does not know how to start problem",
                "Cannot identify relevant interval",
                "Confuses proportions with counts"
              ]
            }
          },
          learningObjectives: [
            "Use normal distribution to estimate probabilities",
            "Identify mean μ and standard deviation σ from problem",
            "Calculate interval boundaries (μ±σ, μ±2σ, etc.)",
            "Apply empirical rule to find proportion in interval",
            "Convert proportion to percentage or probability",
            "Calculate number of items when total n is given (proportion × n)",
            "Interpret results in context of the problem"
          ],
          sampleProblems: [
            {
              problem: "Strawberry weights: μ=17g, σ=3g. What proportion weigh less than 11g? If 1000 strawberries, how many?"
            },
            {
              problem: "IQ scores: μ=100, σ=15. What's the probability a random person has IQ between 85 and 115?"
            },
            {
              problem: "Flight delays: μ=20 min, σ=8 min. Out of 500 flights, approximately how many delayed 12-28 minutes?"
            }
          ],
          relevantFormulas: [
            "Process: Identify μ, σ → Calculate boundaries → Find proportion → Convert if needed",
            "Proportion in interval = percentage from empirical rule ÷ 100",
            "Number of items = proportion × total n",
            "Probability = proportion (decimal between 0 and 1)",
            "Use symmetry: each half = 50%",
            "Less than μ−2σ: (100%−95%)÷2 = 2.5%",
            "Express answer appropriately: %, decimal, or count"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Normal Distribution Intro (intermediate→advanced) - Bell curve, symmetry, properties",
      "2. Empirical Rule (advanced) - 68-95-99.7 rule and calculating proportions",
      "3. Probability Estimates (advanced) - Using normal distribution for real-world predictions"
    ],

    keyFormulas: `• Normal distribution: bell-shaped, symmetrical
                  • Mean = median = mode (at center)
                  • Empirical Rule (68-95-99.7):
                    - 68% within μ ± σ
                    - 95% within μ ± 2σ
                    - 99.7% within μ ± 3σ
                  • Symmetry: 50% below μ, 50% above μ
                  • Between μ and μ+σ: 34%
                  • Beyond μ+σ or μ−σ: 16% each tail
                  • Number of items = proportion × n
                  • μ (mu) = mean, σ (sigma) = standard deviation`
  }
};

// Export for backward compatibility
export const S3_MATH_STATISTICS: Record<StatisticsTopicId, any> = S3_MATH_STATISTICS_SUBTOPICS;

// Export config that can be used by PromptLibrary
export const S3_MATH_STATISTICS_CONFIG = {
  TUTOR_ROLE: STATISTICS_TUTOR_CUSTOMIZATION.teachingPhilosophy,
  QUESTION_AGENT_ROLE: null, // Uses base from prompt-library
  SOLUTION_AGENT_ROLE: null, // Uses base from prompt-library
  MATH_TOOLS_AVAILABLE: STATISTICS_MATH_TOOLS,
  // FORMATTING_RULES: imported from prompt-library
  // INTERACTION_PROTOCOL: imported from prompt-library
};
