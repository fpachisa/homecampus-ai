/**
 * S1 Data Handling Topic Configuration
 *
 * Comprehensive learning module for Secondary 1 Data Handling
 * Covers: data collection, frequency tables, grouped data, visual representations,
 * and critical analysis of statistical diagrams
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export type DataHandlingTopicId =
  | 's1-math-data-intro'
  | 's1-math-data-frequency'
  | 's1-math-data-grouped'
  | 's1-math-data-visual-1'
  | 's1-math-data-visual-2'
  | 's1-math-data-critique';

// ============================================
// TUTOR CUSTOMIZATION
// ============================================

export const DATA_HANDLING_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for Secondary 1 students learning Data Handling.

Teaching Approach:
- Guide students to discover patterns in data through questioning
- Help students understand WHY we organize and visualize data, not just HOW
- Use real-world contexts (surveys, sports statistics, school data, weather) to make concepts concrete
- Celebrate insights when students recognize appropriate diagram types for different data
- Emphasize the connection between raw data → organized data → visual representation → analysis
- Adapt difficulty organically based on student mastery of each section

Key Pedagogical Principles:
- Start with familiar contexts students can relate to (favorite colors, sports, daily activities)
- Progress from simple counting (tally marks) to complex analysis (critiquing misleading graphs)
- Emphasize the DATA PIPELINE: Collect → Organize → Represent → Analyze → Critique
- Build confidence with frequency tables before introducing visual diagrams
- Show multiple representations of the same data to build flexibility
- Teach critical thinking: "Can this graph mislead? How? Why?"

Common Student Misconceptions to Address:
- Confusing "frequency" with "frequency table" vs "tally marks"
- Creating overlapping class intervals (e.g., 10-20, 20-30)
- Forgetting that pie chart angles must sum to 360°
- Using percentages incorrectly when calculating sector angles
- Believing all graphs are truthful (teach skepticism!)
- Choosing inappropriate diagram types (pie chart for trends, line graph for categories)

**Text-to-Speech Guidelines:**
- Say "frequency" as "free-kwen-see" (clear pronunciation)
- Say "three hundred sixty degrees" not "three-six-zero degrees"
- Say "tally marks" not just "tallies"
- Spell out mathematical symbols: "equals" not "=", "divided by" not "÷"
- Say "sector angle" as "sec-tor angle" (emphasize both words)
- Say "pictogram" as "pic-toe-gram"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding of data representations.

IMPORTANT: Use the technical name (e.g., "barChart", "pieChart") in the toolName field, NOT the display name.

Available tools for this topic:
- barChart: For categorical data comparison (vertical or horizontal bars)
- histogram: For continuous data with class intervals (no gaps between bars)
- pieChart: For showing proportions and parts of a whole (NEW tool - use it!)
- lineChart: For time-series data and trends (NEW tool - use it!)

When to use each tool:
- Use barChart when comparing frequencies across distinct categories (favorite colors, sports, subjects)
- Use histogram when showing grouped continuous data (heights, test scores, ages in ranges)
- Use pieChart when emphasizing proportions that sum to 100% (budget breakdown, survey percentages)
- Use lineChart when showing change over time or sequential data (daily temperatures, monthly sales, growth trends)

Tool Parameters:
- For pieChart: Always include showAngles: true when teaching angle calculations
- For pieChart: Set showCalculations: true to display the formula breakdown
- For lineChart: Use highlightPoint to draw attention to specific data points
- For lineChart: Enable trendLine: true when discussing patterns and predictions
- For barChart: Use orientation: 'horizontal' for long category names
- All tools support caption parameter for additional context

Example usage in questions:
"Let's visualize this survey data showing favorite ice cream flavors. The pie chart will help us see how the choices compare as proportions of the whole class."

Remember: Visual tools should enhance understanding, not replace it. Students should be able to work with tables before relying on visuals.`
};

// ============================================
// AVAILABLE MATH TOOLS
// ============================================

export const DATA_HANDLING_MATH_TOOLS = [
  'barChart',      // Existing tool for categorical data
  'histogram',     // Existing tool for continuous grouped data
  'pieChart',      // NEW tool for proportions and angle calculations
  'lineChart'      // NEW tool for trends and time-series data
];

// ============================================
// SUBTOPIC CONFIGURATIONS
// ============================================

export const S1_MATH_DATA_HANDLING_SUBTOPICS = {

  // ============================================
  // SUBTOPIC 1: INTRODUCTION TO DATA & COLLECTION
  // ============================================

  's1-math-data-intro': {
    displayName: 'Introduction to Data & Collection',
    topicName: 'Data Handling',

    progressionStructure: {
      sections: [
        {
          id: 'what-is-statistics-and-data',
          title: 'What is Statistics and Data?',
          difficulty: 'foundational',
          prerequisites: [],
          masterySignals: '2-3 correct responses showing understanding of statistics as a 4-step process and ability to distinguish raw vs organized data',
          estimatedQuestions: '2-3 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '2-3 correct answers without hints',
                'Consistently identifies whether data is raw or organized'
              ],
              qualitative: [
                'Correctly explains the four processes of statistics (collect, organize, represent, analyze)',
                'Can distinguish between raw data and organized data with clear reasoning',
                'Recognizes that raw data is unorganized and difficult to interpret',
                'Provides examples of data from real-world contexts',
                'Understands that statistics is about making sense of information'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on the four processes',
                'Partially distinguishes raw vs organized data'
              ],
              qualitative: [
                'Can name 2-3 of the four statistical processes but misses some',
                'Understands data is information but struggles to explain organization',
                'Recognizes examples of data but cannot categorize them well',
                'Needs prompting to explain why raw data is problematic'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot list the four statistical processes',
                'Confuses raw data with organized data',
                'Multiple incorrect attempts'
              ],
              qualitative: [
                'Does not understand what statistics means',
                'Cannot explain the difference between raw and organized data',
                'Confuses data with other mathematical concepts',
                'Cannot identify examples of data in real-world contexts'
              ]
            }
          },

          learningObjectives: [
            'Define statistics as involving four processes: collecting, organizing, representing, and analyzing data',
            'Understand what data is and identify examples in real-world contexts',
            'Distinguish between raw data (unorganized) and organized data',
            'Recognize why organizing data is necessary for analysis',
            'Identify different types of data (numerical, categorical)'
          ],

          relevantFormulas: `No formulas required for this conceptual section.

Key Definitions:
- Statistics: The branch of mathematics involving collecting, organizing, representing, and analyzing data
- Data: Information collected for analysis
- Raw Data: Data that has not been organized yet (can be messy and hard to understand)`,

          availableTools: []
        },

        {
          id: 'four-collection-methods',
          title: 'Four Methods of Data Collection',
          difficulty: 'foundational',
          prerequisites: ['what-is-statistics-and-data'],
          masterySignals: '3 correct identifications of appropriate collection methods for given scenarios',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct matches of scenarios to collection methods',
                'Consistent accuracy across different contexts'
              ],
              qualitative: [
                'Correctly identifies all four collection methods: experiments, surveys, observations, searching data',
                'Matches appropriate method to scenario with clear reasoning',
                'Explains WHY a particular method is most suitable for a given situation',
                'Can describe what each method involves',
                'Recognizes when multiple methods might work but identifies the best choice'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about method characteristics',
                'Confuses similar methods (surveys vs observations)'
              ],
              qualitative: [
                'Can name all four methods but struggles to match them to contexts',
                'Understands surveys and observations but confuses experiments and searching data',
                'Provides reasoning but misses key factors in choosing methods',
                'Needs prompting to consider practical aspects (time, resources, accuracy)'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot correctly match methods to scenarios',
                'Multiple incorrect attempts even with hints',
                'Confuses most or all methods'
              ],
              qualitative: [
                'Cannot distinguish between the four collection methods',
                'Thinks all methods are the same or interchangeable',
                'Does not understand what surveys, experiments, or observations involve',
                'Cannot explain why different methods are needed for different situations'
              ]
            }
          },

          learningObjectives: [
            'Identify and describe the four data collection methods',
            'Understand when to use experiments (testing to gather data)',
            'Understand when to use surveys (asking people questions)',
            'Understand when to use observations (watching and recording naturally)',
            'Understand when to use searching statistical data (finding published information)',
            'Match appropriate collection methods to real-world scenarios'
          ],

          relevantFormulas: `No formulas required for this section.

Four Data Collection Methods:
1. Conducting Experiments - Testing or trying something to gather data
2. Conducting Surveys - Asking people questions to gather responses
3. Observing Outcomes - Watching and recording what happens naturally
4. Searching Statistical Data - Finding data already collected and published

Decision Factors:
- What information do you need?
- Is it already available somewhere?
- Do you need people's opinions or measured data?
- Can you test it, or must you observe it naturally?`,

          availableTools: []
        },

        {
          id: 'choosing-collection-method',
          title: 'Choosing the Appropriate Collection Method',
          difficulty: 'foundational-to-intermediate',
          prerequisites: ['four-collection-methods'],
          masterySignals: '3+ correct choices with clear justification for why that method is best',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct method choices with detailed reasoning',
                'Consistently considers multiple factors (time, cost, accuracy, feasibility)'
              ],
              qualitative: [
                'Evaluates scenarios and selects the most practical and accurate method',
                'Provides detailed justification considering feasibility, resources, and accuracy',
                'Can explain why other methods would be less suitable',
                'Recognizes trade-offs between different methods',
                'Understands when combining methods might be beneficial'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with prompting about practical considerations',
                'Selects appropriate method but reasoning is incomplete'
              ],
              qualitative: [
                'Chooses plausible methods but misses optimal choice',
                'Provides basic reasoning but does not consider all factors',
                'Understands primary uses but struggles with edge cases',
                'Needs guidance to think about practical constraints'
              ]
            },
            struggling: {
              quantitative: [
                'Chooses inappropriate methods repeatedly',
                'Cannot justify choices even with hints',
                'Random guessing without reasoning'
              ],
              qualitative: [
                'Does not consider scenario requirements when choosing',
                'Cannot explain why one method is better than another',
                'Suggests impractical or impossible collection methods',
                'Confuses what each method accomplishes'
              ]
            }
          },

          learningObjectives: [
            'Analyze scenarios to determine the most appropriate data collection method',
            'Justify choice of collection method based on scenario requirements',
            'Consider practical factors: time, cost, accuracy, and feasibility',
            'Recognize when one method is clearly superior to others',
            'Understand trade-offs between different collection approaches',
            'Design simple data collection plans for given objectives'
          ],

          relevantFormulas: `No formulas required for this section.

Decision Framework for Choosing Methods:
- Need people's opinions/preferences? → Survey
- Need to measure cause-and-effect? → Experiment
- Need to track natural behavior? → Observation
- Need historical or large-scale data? → Search statistical data

Practical Considerations:
- Time available (experiments and surveys take longer)
- Resources needed (experiments may need equipment)
- Sample size (searching data gives large samples)
- Accuracy requirements (experiments provide controlled accuracy)`,

          availableTools: []
        }
      ]
    },

    learningObjectives: [
      'Understand statistics as a four-step process for making sense of data',
      'Distinguish between raw and organized data',
      'Identify and apply four data collection methods appropriately',
      'Evaluate scenarios to choose the best collection method',
      'Recognize real-world applications of data collection in various fields'
    ],

    keyFormulas: `No formulas for this introductory subtopic. Focus is on conceptual understanding.`
  },

  // ============================================
  // SUBTOPIC 2: ORGANIZING DATA WITH FREQUENCY TABLES
  // ============================================

  's1-math-data-frequency': {
    displayName: 'Organizing Data with Frequency Tables',
    topicName: 'Data Handling',

    progressionStructure: {
      sections: [
        {
          id: 'tally-marks-and-counting',
          title: 'Using Tally Marks to Count',
          difficulty: 'foundational',
          prerequisites: ['what-is-statistics-and-data'],
          masterySignals: '3+ correct tally mark readings/creations without calculation errors',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct tally mark counts without errors',
                'Correctly groups tallies in sets of 5 consistently'
              ],
              qualitative: [
                'Correctly uses tally mark notation (4 vertical strokes, 5th crosses diagonally)',
                'Accurately counts groups of 5 and remaining tallies',
                'Creates tally marks correctly when given frequencies',
                'Understands WHY grouping by 5 makes counting faster',
                'Can convert between tally marks and numbers fluently'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on grouping by 5',
                'Makes occasional counting errors with large numbers of tallies'
              ],
              qualitative: [
                'Understands tally mark concept but inconsistent with grouping',
                'Can count simple tally groups but struggles with many groups',
                'Sometimes forgets to cross the 5th tally',
                'Needs to recount groups to verify totals'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot count tally marks correctly',
                'Does not group by 5',
                'Multiple counting errors'
              ],
              qualitative: [
                'Does not understand tally mark notation',
                'Counts each stroke individually instead of using grouping',
                'Cannot create correct tally marks from numbers',
                'Does not see the purpose of grouping by 5',
                'Confuses tally marks with other counting systems'
              ]
            }
          },

          learningObjectives: [
            'Understand the tally mark system for counting',
            'Use tally marks correctly (4 vertical, 5th diagonal)',
            'Group tally marks in sets of 5 for efficient counting',
            'Count totals from tally marks accurately',
            'Create tally marks from given frequencies',
            'Recognize advantages of tally grouping over individual counting'
          ],

          relevantFormulas: `No formulas required.

Tally Mark System:
- Each item = one vertical stroke: |
- Every 5th mark crosses the previous four: ||||/
- Groups of 5 make counting easy
- Example: ||||/ ||||/ ||| = (5 + 5 + 3) = 13

Counting Strategy:
1. Count the full groups of 5
2. Count the remaining individual tallies
3. Add: (number of groups × 5) + remaining tallies`,

          availableTools: []
        },

        {
          id: 'constructing-frequency-tables',
          title: 'Constructing Frequency Tables',
          difficulty: 'foundational-to-intermediate',
          prerequisites: ['tally-marks-and-counting'],
          masterySignals: '2 correctly constructed frequency tables from raw data with accurate tallies and frequencies',
          estimatedQuestions: '2-3 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '2+ complete frequency tables constructed correctly',
                'All tallies and frequencies match the raw data',
                'Totals calculated correctly'
              ],
              qualitative: [
                'Correctly identifies distinct classes (categories) from raw data',
                'Creates proper 3-column table: Class | Tally | Frequency',
                'Uses tally marks correctly for each class',
                'Converts tallies to frequencies accurately',
                'Includes total row at bottom',
                'Organizes data systematically (goes through raw data once, marks each item)',
                'Recognizes when all data has been accounted for'
              ]
            },
            developing: {
              quantitative: [
                '1 correct table with minor errors in tallies or frequencies',
                'Misses some data points or miscounts',
                'Total is incorrect'
              ],
              qualitative: [
                'Understands table structure but makes organizational errors',
                'Sometimes misses categories or combines incorrectly',
                'Tallies do not always match frequencies (conversion errors)',
                'Needs to recheck work multiple times',
                'May forget to include total row'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot create a proper frequency table',
                'Multiple errors in tallies and frequencies',
                'Missing categories or data'
              ],
              qualitative: [
                'Does not understand table structure (missing columns)',
                'Cannot identify distinct classes from raw data',
                'Mixes up tally marks and frequencies',
                'Loses track of which data points have been counted',
                'Does not know when they are done',
                'Totals do not match the dataset size'
              ]
            }
          },

          learningObjectives: [
            'Understand the structure of a frequency table (Class, Tally, Frequency)',
            'Identify distinct classes/categories from raw data',
            'Systematically count and tally each data point',
            'Convert tally marks to frequency numbers',
            'Create complete frequency tables from messy raw data',
            'Calculate and verify totals',
            'Recognize when all data has been accounted for'
          ],

          relevantFormulas: `No formulas required.

Frequency Table Structure:
┌──────────────┬──────────┬───────────┐
│ Class        │ Tally    │ Frequency │
├──────────────┼──────────┼───────────┤
│ Category 1   │ ||||/ || │ 7         │
│ Category 2   │ ||||/    │ 5         │
│ Category 3   │ |||      │ 3         │
├──────────────┼──────────┼───────────┤
│ Total        │          │ 15        │
└──────────────┴──────────┴───────────┘

Key Terms:
- Class: Each item in the first column (a category)
- Tally: Stroke marks for counting
- Frequency: The number of times each class occurs

Construction Steps:
1. Read through raw data and identify all distinct categories
2. Create table with Class, Tally, Frequency columns
3. Go through data systematically, adding tally for each item
4. Convert tallies to frequency numbers
5. Calculate total and verify it matches dataset size`,

          availableTools: []
        },

        {
          id: 'interpreting-frequency-tables',
          title: 'Interpreting and Analyzing Frequency Tables',
          difficulty: 'intermediate',
          prerequisites: ['constructing-frequency-tables'],
          masterySignals: '3+ correct analyses including finding totals, mode, percentages, and ratios from frequency tables',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct calculations (totals, percentages, ratios)',
                'Accurate identification of mode (highest frequency)',
                'Correct percentage calculations'
              ],
              qualitative: [
                'Correctly calculates total frequency by summing all frequencies',
                'Identifies the mode (class with highest frequency) accurately',
                'Calculates percentages using formula: (frequency ÷ total) × 100%',
                'Simplifies ratios correctly between classes',
                'Can answer various questions from a single frequency table',
                'Interprets what the data reveals (patterns, most common, least common)',
                'Explains findings in context of the original scenario'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on formulas',
                'Makes calculation errors with percentages or ratios',
                'Can find totals and mode but struggles with more complex questions'
              ],
              qualitative: [
                'Understands basic interpretation but makes arithmetic errors',
                'Can identify mode but struggles to explain what it means',
                'Knows percentage formula but makes calculation mistakes',
                'Has difficulty simplifying ratios',
                'Needs prompting to connect findings back to context'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot calculate totals or percentages',
                'Cannot identify the mode',
                'Multiple calculation errors'
              ],
              qualitative: [
                'Does not understand how to read information from the table',
                'Confuses frequency with class names',
                'Cannot perform percentage calculations even with formula',
                'Does not understand what ratios represent',
                'Cannot explain what the data shows'
              ]
            }
          },

          learningObjectives: [
            'Calculate total frequency from a frequency table',
            'Identify the mode (most frequent class)',
            'Calculate percentages for each class',
            'Find ratios between different classes',
            'Answer various analytical questions from frequency tables',
            'Interpret patterns and draw conclusions from organized data',
            'Compare frequencies across categories',
            'Use frequency data to make simple predictions or decisions'
          ],

          relevantFormulas: `Key Formulas:

1. Total Frequency:
   Total = Sum of all frequencies
   Example: If frequencies are 5, 8, 3, 6 → Total = 5 + 8 + 3 + 6 = 22

2. Percentage:
   Percentage = (Frequency ÷ Total) × 100%
   Example: If class has frequency 8 out of total 20:
   Percentage = (8 ÷ 20) × 100% = 0.4 × 100% = 40%

3. Ratio:
   Ratio = Frequency A : Frequency B (simplified)
   Example: If A has 12 and B has 8:
   Ratio = 12 : 8 = 3 : 2 (divide both by 4)

4. Mode:
   Mode = Class with the highest frequency
   (No calculation needed, just identify the largest frequency)`,

          availableTools: []
        },

        {
          id: 'frequency-table-applications',
          title: 'Real-World Applications of Frequency Tables',
          difficulty: 'intermediate',
          prerequisites: ['interpreting-frequency-tables'],
          masterySignals: '2-3 correctly constructed and analyzed frequency tables from realistic scenarios with appropriate conclusions',
          estimatedQuestions: '2-3 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '2+ complete frequency tables from realistic data',
                'All calculations (totals, percentages, ratios) accurate',
                'Correct conclusions drawn from data'
              ],
              qualitative: [
                'Creates frequency tables appropriate for the scenario',
                'Performs accurate analysis to answer scenario questions',
                'Draws meaningful conclusions based on the data',
                'Can explain findings in everyday language',
                'Recognizes practical implications of the analysis',
                'Connects mathematical analysis to real-world decision-making',
                'Suggests appropriate actions based on data insights'
              ]
            },
            developing: {
              quantitative: [
                '1 correct table and analysis with minor errors',
                'Calculations mostly correct but misses some insights',
                'Conclusions are partially correct'
              ],
              qualitative: [
                'Creates tables correctly but analysis is superficial',
                'Performs calculations but struggles to interpret meaning',
                'Can answer direct questions but misses broader patterns',
                'Needs prompting to connect analysis to real-world implications'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot construct appropriate table for scenario',
                'Analysis contains multiple errors',
                'Conclusions are incorrect or nonsensical'
              ],
              qualitative: [
                'Does not recognize what data needs to be collected',
                'Cannot organize scenario data into a frequency table',
                'Performs calculations without understanding what they mean',
                'Cannot draw conclusions from data',
                'Does not see connection between math and real scenarios'
              ]
            }
          },

          learningObjectives: [
            'Apply frequency table skills to real-world scenarios',
            'Determine what data to collect for a given problem',
            'Organize realistic data into appropriate frequency tables',
            'Perform analysis to answer specific scenario questions',
            'Draw meaningful conclusions from data analysis',
            'Communicate findings effectively in context',
            'Recognize how frequency tables support decision-making',
            'Suggest actions or recommendations based on data insights'
          ],

          relevantFormulas: `Use all previously learned formulas in context:
- Total frequency
- Percentages: (frequency ÷ total) × 100%
- Ratios between categories
- Mode identification

Application Examples:
1. Business: Analyzing customer preferences to stock inventory
2. Education: Tracking student performance to identify areas needing support
3. Healthcare: Monitoring symptoms to diagnose patterns
4. Sports: Recording game statistics to improve strategy
5. Environment: Tracking weather patterns for predictions`,

          availableTools: []
        }
      ]
    },

    learningObjectives: [
      'Master the use of tally marks for efficient counting',
      'Construct complete and accurate frequency tables from raw data',
      'Interpret frequency tables to calculate totals, percentages, ratios, and identify modes',
      'Apply frequency table skills to real-world scenarios',
      'Recognize how organized data supports better understanding and decision-making'
    ],

    keyFormulas: `Key Formulas for Frequency Tables:

1. Total Frequency = Sum of all individual frequencies

2. Percentage = (Frequency ÷ Total Frequency) × 100%

3. Ratio = Frequency A : Frequency B (simplified to lowest terms)

4. Mode = Class with highest frequency (most common value)`
  },

  // ============================================
  // SUBTOPIC 3: GROUPED DATA & CLASS INTERVALS
  // ============================================

  's1-math-data-grouped': {
    displayName: 'Grouped Data & Class Intervals',
    topicName: 'Data Handling',

    progressionStructure: {
      sections: [
        {
          id: 'when-to-group-data',
          title: 'When and Why to Group Data',
          difficulty: 'intermediate',
          prerequisites: ['constructing-frequency-tables'],
          masterySignals: '2-3 correct decisions about when grouping is appropriate, with clear reasoning',
          estimatedQuestions: '2-3 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '2-3 correct decisions about grouping necessity',
                'Accurate comparison of grouped vs ungrouped tables'
              ],
              qualitative: [
                'Recognizes when data is too spread out or large for simple frequency tables',
                'Explains that grouping makes patterns clearer in large datasets',
                'Understands grouping is especially useful for continuous data (heights, weights, scores)',
                'Can articulate advantages: clearer patterns, reduced table size, easier interpretation',
                'Recognizes trade-off: grouping loses some individual detail but gains overall clarity',
                'Identifies scenarios where simple frequency tables are sufficient vs. when grouping helps'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about data size and spread',
                'Understands concept but struggles to apply decision criteria'
              ],
              qualitative: [
                'Understands grouping concept but unclear about when it is needed',
                'Can see advantages when shown examples but does not identify need independently',
                'Recognizes grouped tables are shorter but unsure why that matters',
                'Needs prompting to consider data characteristics (range, number of values)'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot decide when grouping is appropriate',
                'Thinks grouping is always better or always unnecessary',
                'Does not see difference between scenarios'
              ],
              qualitative: [
                'Does not understand the purpose of grouping',
                'Cannot explain advantages or disadvantages of grouping',
                'Thinks grouped and ungrouped tables are the same',
                'Does not recognize that large or spread-out data benefits from grouping'
              ]
            }
          },

          learningObjectives: [
            'Identify when data is too large or spread out for simple frequency tables',
            'Understand advantages of grouping: clearer patterns, reduced table size, easier interpretation',
            'Recognize disadvantages of grouping: loss of individual detail',
            'Determine whether grouping is appropriate for a given dataset',
            'Understand that grouping is particularly useful for continuous data',
            'Compare grouped vs. ungrouped representations of the same data'
          ],

          relevantFormulas: `No formulas required for this section.

Decision Criteria for Grouping:
✅ Group data when:
- Many different values (e.g., 50+ distinct values)
- Data spans a large range (e.g., ages 15-75)
- Continuous measurements (heights, weights, times)
- Pattern is more important than individual values

❌ Don't group when:
- Few distinct categories (e.g., 3-8 values)
- Already categorical (colors, names, yes/no)
- Individual values are important
- Dataset is small (under 20 data points)`,

          availableTools: []
        },

        {
          id: 'creating-class-intervals',
          title: 'Creating Non-Overlapping Class Intervals',
          difficulty: 'intermediate',
          prerequisites: ['when-to-group-data'],
          masterySignals: '3+ correctly created non-overlapping class interval sets that cover all data',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct class interval sets',
                'All intervals are non-overlapping',
                'All intervals cover full data range (min to max)'
              ],
              qualitative: [
                'Creates intervals where each value belongs to exactly ONE interval',
                'Uses clear boundary notation (e.g., 10-19, 20-29 OR 10 ≤ x < 20, 20 ≤ x < 30)',
                'Ensures intervals cover smallest to largest value in dataset',
                'Recognizes common error of overlapping boundaries (e.g., 10-20, 20-30)',
                'Can explain why overlapping intervals cause ambiguity',
                'Chooses appropriate interval width based on data range and desired detail'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct interval sets with hints on overlapping',
                'Creates intervals but some overlap or have gaps',
                'May not cover full data range'
              ],
              qualitative: [
                'Understands interval concept but makes boundary errors',
                'Sometimes creates overlapping intervals (e.g., 10-20, 20-30)',
                'May miss covering extreme values (smallest or largest)',
                'Needs reminding that each value must belong to exactly one interval',
                'Struggles with notation consistency'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot create proper class intervals',
                'All intervals overlap or have gaps',
                'Does not cover data range'
              ],
              qualitative: [
                'Does not understand non-overlapping requirement',
                'Creates random intervals without considering data range',
                'Cannot identify overlapping boundaries even when pointed out',
                'Does not know where to start intervals or how to end them',
                'Confuses class intervals with individual frequencies'
              ]
            }
          },

          learningObjectives: [
            'Understand that class intervals must be non-overlapping',
            'Create intervals where each value belongs to exactly one interval',
            'Use clear boundary notation consistently',
            'Ensure intervals cover the full range of data (minimum to maximum)',
            'Recognize and fix overlapping intervals',
            'Explain why overlapping intervals create ambiguity',
            'Choose appropriate starting points and boundaries for intervals'
          ],

          relevantFormulas: `No formulas required, but important rules:

Non-Overlapping Interval Rules:
✅ CORRECT Examples:
- 0-9, 10-19, 20-29, 30-39
- 0 ≤ x < 10, 10 ≤ x < 20, 20 ≤ x < 30
- 0-4, 5-9, 10-14, 15-19

❌ WRONG (Overlapping):
- 0-10, 10-20, 20-30  (10 appears in two intervals! 20 appears in two!)
- 0-9, 10-20, 21-30  (Gap! Where does 20 go? Where does 20.5 go?)

Key Principle:
Every possible value must fit into EXACTLY ONE interval.

Coverage Rule:
If data ranges from 15 to 85, intervals must include:
- A class containing 15 (or starting at/below 15)
- A class containing 85 (or ending at/above 85)
- All values in between`,

          availableTools: []
        },

        {
          id: 'class-width-uniform-intervals',
          title: 'Class Width and Uniform Intervals',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['creating-class-intervals'],
          masterySignals: '3+ correct class width calculations and verification of uniform intervals',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct class width calculations',
                'Accurately identifies whether intervals are uniform',
                'Correctly calculates width for various interval notations'
              ],
              qualitative: [
                'Correctly uses formula: Class Width = Upper Limit - Lower Limit',
                'Calculates width accurately for different interval formats',
                'Verifies that all intervals have the same width (uniform)',
                'Recognizes that uniform intervals make comparison easier',
                'Can create uniform interval sets with specified width',
                'Understands that non-uniform intervals can mislead or confuse',
                'Adjusts interval boundaries to achieve desired uniform width'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct width calculations',
                'Confuses upper and lower limits',
                'Makes arithmetic errors in subtraction'
              ],
              qualitative: [
                'Understands class width concept but makes calculation errors',
                'Can identify uniform intervals when widths are given but struggles to calculate',
                'Knows uniform is better but cannot explain why clearly',
                'Needs prompting to check all intervals have same width'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot calculate class width',
                'Does not know what upper and lower limits are',
                'Cannot determine if intervals are uniform'
              ],
              qualitative: [
                'Does not understand what class width means',
                'Confuses width with frequency',
                'Cannot identify upper and lower limits of intervals',
                'Does not recognize uniform vs non-uniform intervals',
                'Does not see why uniform intervals are preferable'
              ]
            }
          },

          learningObjectives: [
            'Calculate class width using the formula: Upper Limit - Lower Limit',
            'Identify upper and lower limits of class intervals',
            'Determine whether a set of intervals has uniform (equal) widths',
            'Understand advantages of uniform intervals: easier comparison, clearer patterns',
            'Create grouped frequency tables with uniform class intervals',
            'Recognize that non-uniform intervals can be misleading',
            'Choose appropriate class width based on data range and desired detail'
          ],

          relevantFormulas: `Key Formula:

Class Width = Upper Limit - Lower Limit

Examples:
1. Interval 20-29:
   Width = 29 - 20 = 9 (or 10 if counting 20, 21, ..., 29 inclusively)

2. Interval 10 ≤ x < 20:
   Width = 20 - 10 = 10

3. Interval 150-159:
   Width = 159 - 150 = 9 (or 10 counting all integers)

Uniform Intervals:
- All class widths are EQUAL
- Example: 0-9 (width 10), 10-19 (width 10), 20-29 (width 10) ✅ Uniform
- Example: 0-9 (width 10), 10-24 (width 15), 25-29 (width 5) ❌ Not uniform

Why Uniform Intervals Matter:
- Fair comparison across intervals
- Easier to interpret patterns
- Standard practice in statistics
- Frequencies are directly comparable`,

          availableTools: ['histogram']
        }
      ]
    },

    learningObjectives: [
      'Recognize when grouping data is necessary and beneficial',
      'Create non-overlapping class intervals that cover full data range',
      'Calculate class width and verify uniform intervals',
      'Construct grouped frequency tables with appropriate intervals',
      'Understand trade-offs between detail and clarity in grouping'
    ],

    keyFormulas: `Key Formula:

Class Width = Upper Limit - Lower Limit

Example: For interval 30-39, width = 39 - 30 = 9

Important Rules:
1. Intervals must be NON-OVERLAPPING (each value in exactly one interval)
2. Intervals must COVER all data (from minimum to maximum value)
3. UNIFORM intervals (equal widths) are preferred for fair comparison`
  },

  // ============================================
  // SUBTOPIC 4: VISUAL REPRESENTATIONS - PICTOGRAMS & BAR GRAPHS
  // ============================================

  's1-math-data-visual-1': {
    displayName: 'Visual Representations: Pictograms & Bar Graphs',
    topicName: 'Data Handling',

    progressionStructure: {
      sections: [
        {
          id: 'reading-pictograms',
          title: 'Reading and Interpreting Pictograms',
          difficulty: 'foundational-to-intermediate',
          prerequisites: ['interpreting-frequency-tables'],
          masterySignals: '3+ correct interpretations of pictograms with accurate calculations from key/scale',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct readings from pictograms',
                'Accurately uses key/scale to calculate totals',
                'Correctly handles fractional symbols'
              ],
              qualitative: [
                'Correctly reads the key/scale (e.g., ⭐ = 10 students)',
                'Calculates quantities accurately by multiplying symbols by scale value',
                'Handles partial symbols correctly (e.g., half symbol = half the scale)',
                'Compares categories by counting and calculating their totals',
                'Recognizes advantages: visual appeal, easy to understand at glance',
                'Identifies limitations: imprecise for exact values, hard to show fractions'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on using the key',
                'Makes calculation errors with scale',
                'Struggles with fractional symbols'
              ],
              qualitative: [
                'Understands pictogram concept but forgets to use key',
                'Can count symbols but makes multiplication errors',
                'Confused by fractional or partial symbols',
                'Needs prompting to check key before answering',
                'Overlooks scale value in calculations'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot read pictograms correctly',
                'Counts symbols without using scale',
                'Multiple calculation errors'
              ],
              qualitative: [
                'Does not understand the concept of a key/scale',
                'Thinks each symbol = 1 regardless of key',
                'Cannot handle fractional symbols at all',
                'Does not know how to calculate totals from symbol counts',
                'Confuses pictograms with other diagram types'
              ]
            }
          },

          learningObjectives: [
            'Understand that pictograms use symbols to represent quantities',
            'Read and use the key/scale correctly (e.g., 🍎 = 5 apples)',
            'Calculate totals by multiplying symbols by scale value',
            'Interpret fractional symbols (e.g., half symbol = half the scale)',
            'Compare categories within a pictogram',
            'Recognize advantages and limitations of pictograms',
            'Answer various questions from pictogram data'
          ],

          relevantFormulas: `Calculation from Pictograms:

Total = (Number of symbols) × (Scale value)

Example:
Key: 📚 = 20 books
If there are 4 symbols: 4 × 20 = 80 books

Fractional Symbols:
Half symbol = 0.5 × Scale value
Example: Key: 🚗 = 10 cars
If there are 3.5 symbols: 3.5 × 10 = 35 cars

Important:
ALWAYS check the key first!
The key tells you what each symbol represents.`,

          availableTools: []
        },

        {
          id: 'creating-pictograms',
          title: 'Creating Pictograms',
          difficulty: 'intermediate',
          prerequisites: ['reading-pictograms'],
          masterySignals: '2 correctly created pictograms with appropriate key and consistent symbols',
          estimatedQuestions: '2-3 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '2+ correctly drawn pictograms',
                'All symbol counts match data using chosen key',
                'Appropriate key chosen (not too easy or too hard)'
              ],
              qualitative: [
                'Chooses sensible key value (makes reasonable number of symbols)',
                'Draws all symbols the same size and style',
                'Includes clear title describing what data is shown',
                'Creates proper key stating what each symbol represents',
                'Uses fractional symbols appropriately when needed',
                'Organizes categories clearly (rows or columns)',
                'Labels each category',
                'Calculations for symbol counts are correct'
              ]
            },
            developing: {
              quantitative: [
                '1 correct pictogram with minor errors',
                'Key is awkward (too many or too few symbols)',
                'Some symbol counts are incorrect'
              ],
              qualitative: [
                'Understands creation process but makes planning errors',
                'Forgets title or key',
                'Symbols are inconsistent in size',
                'Has trouble deciding appropriate key value',
                'Makes calculation errors when determining symbol counts',
                'Layout is disorganized'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot create proper pictogram',
                'Symbol counts do not match data',
                'No key provided or incorrect key'
              ],
              qualitative: [
                'Does not know where to start',
                'Cannot choose appropriate key value',
                'Draws random number of symbols without calculation',
                'Forgets essential elements (title, key, labels)',
                'Symbols vary in size (misleading)',
                'Cannot calculate how many symbols needed for each category'
              ]
            }
          },

          learningObjectives: [
            'Choose an appropriate key/scale value for data',
            'Calculate how many symbols needed for each category',
            'Draw symbols consistently (same size and style)',
            'Include all essential elements: title, key, category labels',
            'Use fractional symbols when necessary',
            'Create organized and clear pictogram layout',
            'Recognize when pictograms are appropriate vs. other diagrams'
          ],

          relevantFormulas: `Creating Pictograms:

Step 1: Choose a Key
- Pick a value that makes reasonable number of symbols (usually 3-10 symbols per category)
- Example: If data values are 25, 40, 55, 30 → Key of 10 gives 2.5, 4, 5.5, 3 symbols ✅
- Avoid keys that give too many symbols (key=1) or too few (key=100)

Step 2: Calculate Symbols Needed
Number of symbols = Data value ÷ Key value

Example: Data = 35 students, Key = 10 students per symbol
Symbols needed = 35 ÷ 10 = 3.5 symbols

Step 3: Draw
- Draw whole symbols, plus fractions if needed
- All symbols must be SAME SIZE
- Include: Title, Key, Category Labels

Essential Elements Checklist:
✓ Title (what the pictogram shows)
✓ Key (what each symbol represents)
✓ Category labels
✓ Consistent symbol sizes
✓ Correct symbol counts`,

          availableTools: []
        },

        {
          id: 'bar-graphs-basics',
          title: 'Reading and Creating Bar Graphs',
          difficulty: 'intermediate',
          prerequisites: ['interpreting-frequency-tables'],
          masterySignals: '3+ correct bar graph readings and 1-2 correctly drawn bar graphs',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct readings from bar graphs',
                '1-2 correctly drawn bar graphs with accurate heights/lengths',
                'Appropriate scale chosen'
              ],
              qualitative: [
                'Correctly reads values from bar heights',
                'Compares bars to determine largest/smallest categories',
                'Draws bars with equal width and uniform gaps',
                'Labels both axes clearly with appropriate names',
                'Includes title describing the data',
                'Chooses sensible scale (not too compressed or stretched)',
                'Bars are properly aligned to baseline (zero)',
                'Recognizes advantages: precise values, easy comparison',
                'Can explain when bar graphs are better than pictograms'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct readings',
                'Bar graph has errors: unequal widths, missing labels, or scale issues',
                'Some bar heights are inaccurate'
              ],
              qualitative: [
                'Can read simple bar graphs but struggles with complex ones',
                'Draws bars but widths or gaps are inconsistent',
                'Forgets axis labels or title',
                'Scale is awkward (hard to read intermediate values)',
                'Needs reminding about essential elements',
                'Understands concept but execution has errors'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot read bar graph values',
                'Cannot draw proper bar graph',
                'Bar heights do not match data'
              ],
              qualitative: [
                'Does not understand how to read values from bar height',
                'Cannot identify axes or understand their purpose',
                'Draws bars of random heights without using scale',
                'Bars have wildly different widths',
                'Missing essential elements (title, labels, scale)',
                'Does not recognize that bar graphs show frequencies/quantities'
              ]
            }
          },

          learningObjectives: [
            'Read and interpret vertical and horizontal bar graphs',
            'Compare values by examining bar heights/lengths',
            'Draw bar graphs with equal bar widths and uniform gaps',
            'Label axes appropriately (categories and frequency/values)',
            'Choose appropriate scale for Y-axis (frequency axis)',
            'Include title that describes the data',
            'Understand advantages of bar graphs: precision, easy comparison',
            'Recognize when bar graphs are more suitable than pictograms'
          ],

          relevantFormulas: `No formulas required, but important rules:

Bar Graph Essential Features:
1. Title (describes what data is shown)
2. X-axis label (category axis)
3. Y-axis label (frequency/value axis)
4. Scale on Y-axis (evenly spaced)
5. Equal width bars
6. Uniform gaps between bars
7. Bars aligned to baseline (zero)

Choosing Y-axis Scale:
- Scale should go from 0 to slightly above maximum value
- Use intervals that are easy to read (1, 2, 5, 10, 20, 50, 100)
- Example: If max value is 47, scale could go 0, 10, 20, 30, 40, 50

Reading Bar Heights:
- Align top of bar with Y-axis scale
- Read value directly from scale
- Interpolate between lines if necessary

Advantages of Bar Graphs vs Pictograms:
✓ More precise (exact values clear)
✓ Better for many categories
✓ Better for large values
✓ No symbol ambiguity`,

          availableTools: ['barChart']
        },

        {
          id: 'vertical-vs-horizontal-bars',
          title: 'Vertical vs. Horizontal Bar Graphs',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['bar-graphs-basics'],
          masterySignals: '2-3 correct choices of orientation with clear justification',
          estimatedQuestions: '2-3 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '2-3 correct orientation choices',
                'Correct conversion between vertical and horizontal formats'
              ],
              qualitative: [
                'Understands that vertical and horizontal show same data differently',
                'Chooses vertical for short category names and fewer categories',
                'Chooses horizontal for long category names or many categories',
                'Can explain reasoning: readability of labels, space efficiency',
                'Correctly identifies which axis shows categories and which shows values',
                'Can convert between formats (redraw vertical as horizontal and vice versa)',
                'Recognizes that choice is about presentation clarity, not data content'
              ]
            },
            developing: {
              quantitative: [
                '1 correct choice with hints about label length',
                'Can recognize difference but struggles to choose'
              ],
              qualitative: [
                'Understands there are two orientations but unclear about when to use each',
                'Makes choices based on personal preference rather than data characteristics',
                'Needs prompting to consider label length and readability',
                'Can convert formats but makes errors in axis labels'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot distinguish between vertical and horizontal',
                'Chooses randomly without reasoning',
                'Cannot convert between formats'
              ],
              qualitative: [
                'Thinks vertical and horizontal are different types of data',
                'Does not recognize they show the same information',
                'Cannot explain any advantages of one over the other',
                'Confuses which axis represents categories vs values',
                'Does not consider readability factors'
              ]
            }
          },

          learningObjectives: [
            'Distinguish between vertical and horizontal bar graphs',
            'Understand both show the same data in different orientations',
            'Choose vertical bars for short category names and fewer categories',
            'Choose horizontal bars for long category names or many categories',
            'Consider label readability when choosing orientation',
            'Convert data between vertical and horizontal formats',
            'Correctly identify category axis and value axis in each orientation',
            'Justify orientation choice based on data characteristics'
          ],

          relevantFormulas: `No formulas required.

Orientation Decision Guide:

Vertical Bar Graph:
- Bars extend upward from horizontal baseline
- Categories on X-axis (horizontal, bottom)
- Values on Y-axis (vertical, left side)
✅ Best when:
  • Category names are short (1-2 words)
  • Few categories (3-8)
  • Traditional expectation (most common format)

Horizontal Bar Graph:
- Bars extend rightward from vertical baseline
- Categories on Y-axis (vertical, left side)
- Values on X-axis (horizontal, bottom)
✅ Best when:
  • Category names are long (3+ words)
  • Many categories (8+)
  • Need more space for category labels

Key Principle:
BOTH formats show exactly the same data!
Choice is about READABILITY and CLARITY only.

Example:
"Student Government Representative for Grade 7" - LONG name
→ Use horizontal bars so label fits comfortably

"Red" "Blue" "Green" - SHORT names
→ Use vertical bars (traditional and clean)`,

          availableTools: ['barChart']
        }
      ]
    },

    learningObjectives: [
      'Read and interpret pictograms using key/scale correctly',
      'Create pictograms with consistent symbols and appropriate key',
      'Read and create bar graphs with proper structure and labels',
      'Choose between vertical and horizontal bar graph orientations',
      'Understand advantages and limitations of pictograms vs. bar graphs',
      'Recognize when each diagram type is most appropriate'
    ],

    keyFormulas: `Pictogram Calculations:
Total = (Number of symbols) × (Scale value from key)

Bar Graph Requirements:
- Equal width bars
- Uniform gaps
- Labeled axes
- Appropriate scale
- Title

Choosing Orientation:
- Vertical: short labels, fewer categories
- Horizontal: long labels, many categories`
  },

  // ============================================
  // SUBTOPIC 5: VISUAL REPRESENTATIONS - PIE CHARTS & LINE GRAPHS
  // ============================================

  's1-math-data-visual-2': {
    displayName: 'Visual Representations: Pie Charts & Line Graphs',
    topicName: 'Data Handling',

    progressionStructure: {
      sections: [
        {
          id: 'pie-chart-proportions',
          title: 'Understanding Pie Charts and Proportions',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['interpreting-frequency-tables'],
          masterySignals: '3+ correct interpretations of pie chart proportions and percentage calculations',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct calculations of percentages from pie charts',
                'Accurate estimation of proportions from sector sizes',
                'Correct understanding of part-to-whole relationships'
              ],
              qualitative: [
                'Understands that the whole circle = 100%',
                'Recognizes that sector sizes represent proportions',
                'Can estimate percentages from visual sector sizes (e.g., "about half" = 50%)',
                'Calculates exact percentages using formula: (frequency ÷ total) × 100%',
                'Compares sectors to understand relative sizes',
                'Explains that pie charts show "parts of a whole"',
                'Recognizes when data adds up to 100% (suitable for pie chart)'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on percentage formula',
                'Can estimate rough proportions but struggles with exact calculations',
                'Makes arithmetic errors'
              ],
              qualitative: [
                'Understands basic pie chart concept but unclear about percentages',
                'Can see which sectors are larger but cannot quantify',
                'Knows formula but makes calculation mistakes',
                'Needs prompting to check that proportions sum to 100%'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot calculate percentages from pie chart data',
                'Does not understand proportions',
                'Cannot compare sector sizes'
              ],
              qualitative: [
                'Does not understand that circle represents 100%',
                'Cannot interpret sector sizes as proportions',
                'Thinks all sectors are equal regardless of size',
                'Does not know percentage formula or how to apply it',
                'Cannot explain what pie charts show'
              ]
            }
          },

          learningObjectives: [
            'Understand that pie charts show parts of a whole (100%)',
            'Recognize that sector sizes represent proportions of the total',
            'Estimate proportions visually from sector sizes',
            'Calculate exact percentages using: (frequency ÷ total) × 100%',
            'Compare sectors to determine relative sizes',
            'Verify that all proportions sum to 100%',
            'Identify when data is suitable for pie chart representation'
          ],

          relevantFormulas: `Key Formula:

Percentage = (Frequency ÷ Total Frequency) × 100%

Example:
If 12 out of 40 students chose chocolate:
Percentage = (12 ÷ 40) × 100% = 0.3 × 100% = 30%

Important Principles:
1. Whole circle = 100% (represents complete dataset)
2. Each sector = percentage of that category
3. All sectors together = 100%

Visual Estimation:
- Half circle ≈ 50%
- Quarter circle ≈ 25%
- Three-quarters ≈ 75%

When to Use Pie Charts:
✓ Data represents parts of a whole
✓ Showing proportions is important
✓ Data adds up to 100%
✓ Have 3-7 categories (not too many)
✓ Want to emphasize relative sizes`,

          availableTools: ['pieChart']
        },

        {
          id: 'calculating-sector-angles',
          title: 'Calculating Pie Chart Sector Angles',
          difficulty: 'advanced',
          prerequisites: ['pie-chart-proportions'],
          masterySignals: '3+ correct angle calculations with all angles summing to 360°',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct sector angle calculations',
                'All angles sum exactly to 360°',
                'Accurate arithmetic throughout'
              ],
              qualitative: [
                'Correctly uses formula: Angle = (Frequency ÷ Total) × 360°',
                'Understands why 360° is used (full circle)',
                'Calculates all sector angles for a complete pie chart',
                'Verifies work by checking angles sum to 360°',
                'Can work backwards: given angle, find frequency',
                'Recognizes relationship between percentage and angle (1% = 3.6°)',
                'Rounds appropriately when needed',
                'Can set up complete calculation table (frequency → angle)'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct angle calculations',
                'Makes arithmetic errors',
                'Angles do not quite sum to 360° due to rounding'
              ],
              qualitative: [
                'Knows formula but makes calculation mistakes',
                'Forgets to multiply by 360°',
                'Confuses angle formula with percentage formula',
                'Does not verify that angles sum to 360°',
                'Struggles with rounding decisions',
                'Needs prompting at each step'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot calculate sector angles',
                'Uses wrong formula or no formula',
                'Angles are completely incorrect'
              ],
              qualitative: [
                'Does not know the angle formula',
                'Does not understand why 360° is used',
                'Cannot set up the calculation',
                'Confuses angles with frequencies or percentages',
                'Does not recognize that angles must sum to 360°',
                'Cannot connect fraction/percentage to angle'
              ]
            }
          },

          learningObjectives: [
            'Use formula to calculate sector angles: (Frequency ÷ Total) × 360°',
            'Understand why 360° represents the full circle',
            'Calculate angles for all sectors in a pie chart',
            'Verify calculations by checking angles sum to 360°',
            'Work backwards from angle to find frequency or percentage',
            'Understand relationship: 1% = 3.6°, 50% = 180°, 25% = 90°',
            'Round angles appropriately when necessary',
            'Create complete calculation table for pie chart construction'
          ],

          relevantFormulas: `CRITICAL FORMULA:

Angle of Sector = (Frequency ÷ Total Frequency) × 360°

Why 360°?
A complete circle has 360 degrees.
Each sector's angle represents its proportion of the total.

Step-by-Step Process:
1. Calculate total frequency (sum all frequencies)
2. For each category: Angle = (frequency ÷ total) × 360°
3. Verify: All angles should sum to 360°

Example:
Data: A=15, B=10, C=5
Total = 15 + 10 + 5 = 30

A: (15 ÷ 30) × 360° = 0.5 × 360° = 180°
B: (10 ÷ 30) × 360° = 0.333... × 360° = 120°
C: (5 ÷ 30) × 360° = 0.167... × 360° = 60°

Check: 180° + 120° + 60° = 360° ✓

Useful Relationships:
- 1% of data → 3.6° angle
- 10% of data → 36° angle
- 25% of data → 90° angle (quarter circle)
- 50% of data → 180° angle (half circle)
- 75% of data → 270° angle (three-quarters)

Working Backwards:
If angle is known, find frequency:
Frequency = (Angle ÷ 360°) × Total Frequency`,

          availableTools: ['pieChart']
        },

        {
          id: 'line-graphs-for-trends',
          title: 'Line Graphs for Trends and Time-Series Data',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['interpreting-frequency-tables'],
          masterySignals: '3+ correct interpretations of line graphs including trend identification and predictions',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct readings of values from line graphs',
                'Accurate identification of trends (increasing, decreasing, steady)',
                'Reasonable predictions based on observed patterns'
              ],
              qualitative: [
                'Reads values accurately from points on the line',
                'Identifies overall trend: increasing, decreasing, or constant',
                'Recognizes specific patterns: steady growth, sudden spike, gradual decline',
                'Describes changes using appropriate language (rising, falling, fluctuating)',
                'Makes logical predictions based on established trends',
                'Compares values at different time points',
                'Identifies highest and lowest points',
                'Understands that line graphs show continuous change over time',
                'Can explain what the graph reveals about the data'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct readings',
                'Can identify obvious trends but misses subtle patterns',
                'Predictions are somewhat reasonable but not well-justified'
              ],
              qualitative: [
                'Can read simple points but struggles with interpolation',
                'Recognizes basic increasing/decreasing but misses nuances',
                'Describes trends vaguely ("goes up" without specifics)',
                'Makes predictions without considering full pattern',
                'Needs prompting to look at overall trend vs individual points'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot read values from line graph',
                'Cannot identify trends',
                'Predictions are random or illogical'
              ],
              qualitative: [
                'Does not understand how to read points from the line',
                'Cannot distinguish increasing from decreasing trends',
                'Focuses on individual points without seeing overall pattern',
                'Makes predictions unrelated to data trend',
                'Does not understand time-series concept',
                'Cannot explain what the graph shows'
              ]
            }
          },

          learningObjectives: [
            'Read values from points on a line graph accurately',
            'Identify overall trends: increasing, decreasing, constant, or fluctuating',
            'Describe patterns using appropriate language',
            'Compare values at different time points',
            'Identify maximum and minimum values',
            'Make reasonable predictions based on observed trends',
            'Understand that line graphs show continuous change',
            'Recognize when line graphs are appropriate (time-series, sequential data)',
            'Distinguish between short-term fluctuations and long-term trends'
          ],

          relevantFormulas: `No formulas required, but important concepts:

Reading Line Graphs:
1. Locate the time point on X-axis
2. Follow vertical line up to the plotted line
3. Follow horizontal line to Y-axis
4. Read the value

Trend Analysis:
- Increasing Trend: Line generally goes up from left to right
- Decreasing Trend: Line generally goes down from left to right
- Constant: Line stays roughly horizontal
- Fluctuating: Line goes up and down repeatedly

Making Predictions:
- Look at overall trend direction
- Consider rate of change (steep vs. gradual)
- Extrapolate: continue the pattern beyond the data
- Be cautious: trends may not continue indefinitely!

When to Use Line Graphs:
✓ Data changes over time (daily, monthly, yearly)
✓ Sequential data (measurements in order)
✓ Want to show trends and patterns
✓ Continuous change is important
✓ Making predictions based on trends

When NOT to use:
✗ Categorical data (use bar graph instead)
✗ Parts of a whole (use pie chart instead)
✗ Data without time or sequence relationship`,

          availableTools: ['lineChart']
        },

        {
          id: 'interpreting-trends-predictions',
          title: 'Interpreting Trends and Making Predictions',
          difficulty: 'advanced',
          prerequisites: ['line-graphs-for-trends'],
          masterySignals: '3+ correct trend interpretations with justified predictions',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct trend identifications',
                'Predictions are mathematically reasonable',
                'Accurately describes rate of change'
              ],
              qualitative: [
                'Distinguishes between short-term variation and long-term trends',
                'Makes predictions with clear reasoning based on data patterns',
                'Recognizes limitations: trends may change, predictions are estimates',
                'Compares rates of change (fast growth vs slow growth)',
                'Identifies turning points where trends shift',
                'Uses data to support conclusions',
                'Explains confidence level in predictions',
                'Can suggest factors that might affect future trend',
                'Communicates findings effectively in context'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct trend analyses',
                'Predictions are plausible but reasoning is weak',
                'Struggles to quantify rate of change'
              ],
              qualitative: [
                'Can identify basic trend but misses subtleties',
                'Makes predictions but does not justify thoroughly',
                'Treats all predictions as certain (does not recognize uncertainty)',
                'Confuses correlation with causation',
                'Needs prompting to consider alternative explanations'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot identify trends correctly',
                'Predictions are illogical or random',
                'Does not understand rate of change'
              ],
              qualitative: [
                'Cannot distinguish trend from random variation',
                'Makes predictions without any basis in data',
                'Cannot explain reasoning',
                'Does not recognize prediction uncertainty',
                'Cannot communicate findings clearly',
                'Does not connect data to real-world context'
              ]
            }
          },

          learningObjectives: [
            'Distinguish between short-term fluctuations and long-term trends',
            'Describe trends quantitatively (e.g., "increased by 20 per month")',
            'Compare rates of change across different periods',
            'Identify turning points where trends change direction',
            'Make justified predictions with explicit reasoning',
            'Recognize limitations and uncertainty in predictions',
            'Use data evidence to support conclusions',
            'Communicate trend analysis effectively',
            'Consider real-world factors that might affect trends',
            'Interpolate (estimate within data range) and extrapolate (estimate beyond data)'
          ],

          relevantFormulas: `Trend Analysis Concepts:

Rate of Change:
Change = Final Value - Initial Value
Average rate = Total change ÷ Time period

Example:
Sales went from 100 to 160 over 4 months
Change = 160 - 100 = 60
Rate = 60 ÷ 4 = 15 per month

Prediction Methods:
1. Linear Extrapolation:
   - Assume trend continues at same rate
   - Next value ≈ Last value + Average rate of change

2. Pattern Recognition:
   - Identify repeating patterns (seasonal, cyclical)
   - Predict based on pattern repetition

Confidence in Predictions:
HIGH confidence when:
- Clear, consistent trend
- Many data points
- Recent data
- No signs of change

LOW confidence when:
- Erratic, inconsistent data
- Few data points
- Old data
- External factors changing

Important Cautions:
⚠ Correlation ≠ Causation (related doesn't mean one causes other)
⚠ Past trends may not continue
⚠ Unexpected events can disrupt patterns
⚠ Long-term predictions are less reliable`,

          availableTools: ['lineChart']
        }
      ]
    },

    learningObjectives: [
      'Understand pie charts show proportions of a whole (100%)',
      'Calculate sector angles using: (Frequency ÷ Total) × 360°',
      'Verify pie chart angles sum to 360°',
      'Read and interpret line graphs showing trends',
      'Identify increasing, decreasing, and fluctuating trends',
      'Make reasonable predictions based on observed patterns',
      'Distinguish between appropriate uses of pie charts vs. line graphs'
    ],

    keyFormulas: `Key Formulas:

1. Percentage:
   Percentage = (Frequency ÷ Total) × 100%

2. Pie Chart Sector Angle (CRITICAL):
   Angle = (Frequency ÷ Total) × 360°

   Remember: Full circle = 360°
   All angles must sum to 360°

3. Rate of Change (for trends):
   Rate = (Final Value - Initial Value) ÷ Time Period

Important Relationships:
- 1% = 3.6°
- 50% = 180° (half circle)
- 25% = 90° (quarter circle)`
  },

  // ============================================
  // SUBTOPIC 6: COMPARING & CRITIQUING DIAGRAMS
  // ============================================

  's1-math-data-critique': {
    displayName: 'Comparing & Critiquing Statistical Diagrams',
    topicName: 'Data Handling',

    progressionStructure: {
      sections: [
        {
          id: 'advantages-disadvantages-diagrams',
          title: 'Advantages and Disadvantages of Each Diagram Type',
          difficulty: 'advanced',
          prerequisites: ['bar-graphs-basics', 'pie-chart-proportions', 'line-graphs-for-trends'],
          masterySignals: '3+ correct identifications of appropriate diagram types with clear reasoning about advantages',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct diagram choices for given scenarios',
                'Accurate comparisons of diagram effectiveness'
              ],
              qualitative: [
                'Clearly articulates advantages and disadvantages of each diagram type',
                'Matches diagram type to data characteristics and purpose',
                'Explains reasoning: why one diagram is better than others for specific data',
                'Recognizes trade-offs: precision vs visual appeal, detail vs clarity',
                'Understands multiple diagrams can work, but one may be optimal',
                'Can critique diagram choices and suggest better alternatives',
                'Considers audience and purpose when recommending diagrams'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct choices with hints',
                'Can compare diagrams but reasoning is incomplete'
              ],
              qualitative: [
                'Knows some advantages/disadvantages but list is incomplete',
                'Makes plausible choices but cannot fully justify',
                'Focuses on one criterion (e.g., "looks nice") ignoring others',
                'Needs prompting to consider data type and purpose',
                'Compares diagrams superficially'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot choose appropriate diagram type',
                'Choices are random without reasoning',
                'Cannot identify any advantages or disadvantages'
              ],
              qualitative: [
                'Does not understand what each diagram type is good for',
                'Thinks all diagrams are the same',
                'Cannot explain why one choice is better than another',
                'Does not consider data characteristics when choosing',
                'No understanding of diagram appropriateness'
              ]
            }
          },

          learningObjectives: [
            'List advantages and disadvantages of pictograms',
            'List advantages and disadvantages of bar graphs',
            'List advantages and disadvantages of pie charts',
            'List advantages and disadvantages of line graphs',
            'Match diagram types to data characteristics (categorical, continuous, time-series, proportions)',
            'Consider purpose when choosing diagram (comparison, trend, proportion)',
            'Justify diagram choice with clear reasoning',
            'Recognize that multiple diagrams may work, but one is usually optimal',
            'Critique diagram choices and suggest improvements'
          ],

          relevantFormulas: `No formulas required.

Diagram Comparison Summary:

PICTOGRAMS:
✓ Advantages: Visual appeal, engaging, easy to understand at glance
✗ Disadvantages: Less precise, hard to show fractions, not for large datasets

BAR GRAPHS:
✓ Advantages: Precise values, easy comparison, handles many categories, works for large values
✗ Disadvantages: Less visual appeal, doesn't show proportions of whole

PIE CHARTS:
✓ Advantages: Shows proportions clearly, visual "parts of whole", good for percentages, compact
✗ Disadvantages: Hard to read exact values, difficult with many categories (>7), can't show trends

LINE GRAPHS:
✓ Advantages: Perfect for trends, shows continuous change, easy predictions, identifies patterns
✗ Disadvantages: Requires sequential/time data, not for categories, multiple lines can confuse

Decision Framework:
┌─────────────────────────┬───────────────────┐
│ Data Type               │ Best Diagram      │
├─────────────────────────┼───────────────────┤
│ Categories (discrete)   │ Bar Graph         │
│ Proportions (add to 100%)│ Pie Chart        │
│ Time series / Sequential│ Line Graph        │
│ Simple engagement       │ Pictogram         │
│ Continuous ranges       │ Histogram         │
└─────────────────────────┴───────────────────┘`,

          availableTools: ['barChart', 'pieChart', 'lineChart']
        },

        {
          id: 'choosing-appropriate-diagram',
          title: 'Choosing the Most Appropriate Diagram',
          difficulty: 'advanced',
          prerequisites: ['advantages-disadvantages-diagrams'],
          masterySignals: '3+ correct diagram selections with comprehensive justification considering data type, purpose, and audience',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ optimal diagram choices',
                'Consistently evaluates multiple factors'
              ],
              qualitative: [
                'Analyzes data type (categorical, continuous, time-series, proportions)',
                'Considers purpose (comparison, trend, proportion, engagement)',
                'Thinks about audience (children, experts, general public)',
                'Evaluates practical constraints (space, color, medium)',
                'Provides comprehensive justification covering multiple criteria',
                'Can explain why other diagrams would be less suitable',
                'Recognizes when combining diagrams might be beneficial',
                'Makes professional, well-reasoned recommendations'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct choices',
                'Reasoning addresses some factors but misses others'
              ],
              qualitative: [
                'Considers one or two factors but not all relevant ones',
                'Makes reasonable choice but justification is incomplete',
                'Can identify appropriate diagram but struggles to rule out alternatives',
                'Needs prompting to think about audience or purpose',
                'Reasoning is somewhat superficial'
              ]
            },
            struggling: {
              quantitative: [
                'Inappropriate diagram choices',
                'No clear reasoning',
                'Random selection'
              ],
              qualitative: [
                'Does not analyze data characteristics',
                'Cannot identify purpose or audience considerations',
                'Chooses based on personal preference only',
                'Cannot justify choice at all',
                'Does not understand decision-making process'
              ]
            }
          },

          learningObjectives: [
            'Analyze data type before choosing diagram',
            'Identify purpose: comparison, trend analysis, proportion, or general overview',
            'Consider target audience: age, expertise, familiarity with data',
            'Evaluate practical constraints: available space, color vs black-and-white, digital vs print',
            'Provide comprehensive justification for diagram choice',
            'Explain why alternative diagrams are less suitable',
            'Recognize when multiple diagrams might be needed',
            'Make professional recommendations for data visualization',
            'Adapt choices based on specific requirements'
          ],

          relevantFormulas: `No formulas required.

Decision-Making Framework:

Step 1: Analyze the Data
- What type? Categorical / Continuous / Time-series / Proportions?
- How many categories? Few (<7) / Many (>7)?
- What values? Small / Large / Ranges?

Step 2: Identify the Purpose
- Compare categories? → Bar graph
- Show proportions of whole? → Pie chart
- Track changes over time? → Line graph
- Engage young audience? → Pictogram

Step 3: Consider the Audience
- Children / General public → Simple, visual (pictogram, pie chart)
- Experts / Technical → Precise, detailed (bar graph, line graph)
- Mixed audience → Clear labels, straightforward (bar graph)

Step 4: Check Constraints
- Limited space → Compact (pie chart)
- Many categories → Use horizontal bar graph or histogram
- Black & white printing → Avoid pie charts (colors help distinguish sectors)
- Digital interactive → Can use any type with tooltips

Step 5: Justify Choice
- State chosen diagram
- Explain why it fits data type
- Explain why it serves purpose
- Mention why alternatives are less suitable

Example Justification:
"I recommend a LINE GRAPH because:
✓ Data is time-series (monthly sales over 2 years)
✓ Purpose is to identify trends and predict future
✓ Shows continuous change effectively
✗ Bar graph would work but doesn't show trend as clearly
✗ Pie chart is inappropriate (not proportions, not parts of whole)"`,

          availableTools: ['barChart', 'pieChart', 'lineChart', 'histogram']
        },

        {
          id: 'identifying-misleading-graphs',
          title: 'Identifying Misleading Statistical Graphs',
          difficulty: 'advanced',
          prerequisites: ['choosing-appropriate-diagram'],
          masterySignals: '3+ correctly identified misleading elements with clear explanation of why they mislead and how to fix them',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ misleading elements correctly identified',
                'Accurate assessment of how much distortion occurs'
              ],
              qualitative: [
                'Identifies manipulated scales (starting above zero, inconsistent intervals)',
                'Recognizes misleading symbols (inconsistent sizes in pictograms)',
                'Spots cherry-picked time ranges or selective data presentation',
                'Detects 3D effects and perspective distortions',
                'Identifies unequal bar widths or gaps',
                'Recognizes biased titles or labels',
                'Explains HOW each element misleads viewers',
                'Suggests specific fixes to make graph honest',
                'Evaluates overall trustworthiness of graph',
                'Demonstrates healthy skepticism and critical thinking'
              ]
            },
            developing: {
              quantitative: [
                '1-2 misleading elements identified with hints',
                'Can see problem when pointed out but does not find independently'
              ],
              qualitative: [
                'Identifies obvious problems (clearly wrong scale) but misses subtle ones',
                'Can recognize something is "off" but struggles to articulate exactly what',
                'Knows misleading is wrong but cannot explain impact on interpretation',
                'Suggests vague fixes ("make it better") without specifics',
                'Needs prompting to check scale, symbols, and proportions'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot identify any misleading elements',
                'Accepts all graphs as truthful',
                'Does not see problems even when shown'
              ],
              qualitative: [
                'Does not understand how graphs can mislead',
                'Thinks all published graphs are accurate',
                'Cannot spot scale manipulation',
                'Does not recognize inconsistent symbols or sizes',
                'Has no critical evaluation skills for graphs',
                'Cannot suggest any improvements'
              ]
            }
          },

          learningObjectives: [
            'Identify manipulated Y-axis scales (starting above zero)',
            'Recognize inconsistent axis intervals',
            'Spot misleading pictogram symbols (size variations)',
            'Detect cherry-picked time ranges',
            'Identify 3D effects and perspective distortions',
            'Recognize unequal bar widths or gaps',
            'Spot biased or sensational titles',
            'Explain how each misleading element distorts interpretation',
            'Suggest specific corrections to make graphs honest',
            'Develop critical thinking habits for evaluating graphs',
            'Ask key questions: Does Y-axis start at zero? Are symbols consistent? Is data complete?'
          ],

          relevantFormulas: `No formulas required.

Common Misleading Techniques:

1. MANIPULATED Y-AXIS:
Problem: Y-axis starts at 95 instead of 0 for data ranging 96-98
Effect: Tiny difference (2) looks like huge change
Fix: Start Y-axis at 0, or clearly show axis break

2. INCONSISTENT SYMBOLS (Pictograms):
Problem: Symbols of different sizes (bigger = more than intended)
Effect: Viewer misinterprets based on visual size, not count
Fix: All symbols must be identical size

3. CHERRY-PICKED TIME RANGE:
Problem: Showing only 3 months that had growth, ignoring 9 months of decline
Effect: False impression of positive trend
Fix: Show complete time period or explain why range was chosen

4. 3D EFFECTS:
Problem: 3D bars or pie slices distort proportions due to perspective
Effect: Closer items look larger, distant items look smaller
Fix: Use flat 2D diagrams for accurate comparison

5. UNEQUAL BAR WIDTHS:
Problem: Some bars wider than others
Effect: Wider bars look more important regardless of height
Fix: All bars must have equal width

6. BIASED TITLES:
Problem: "Massive Growth" when increase is 2%
Effect: Title influences interpretation before viewer sees data
Fix: Use neutral, factual titles

Critical Questions Checklist:
1. Does Y-axis start at zero?
2. Are axis intervals evenly spaced?
3. Is the scale appropriate for the data range?
4. Are all symbols/bars consistent in size/width?
5. Is the complete dataset shown, or just selected portions?
6. Is the title neutral and factual?
7. Are 3D effects distorting visual comparisons?
8. Is the source reliable and recent?

Red Flags:
🚩 Y-axis starting above zero
🚩 Inconsistent intervals on axes
🚩 3D effects on bars or pie slices
🚩 Different sized symbols in pictogram
🚩 Sensational title ("Catastrophic!" "Incredible!")
🚩 Missing source or date
🚩 Suspiciously perfect results`,

          availableTools: ['barChart', 'pieChart', 'lineChart']
        }
      ]
    },

    learningObjectives: [
      'Understand advantages and disadvantages of each diagram type',
      'Choose appropriate diagrams based on data type, purpose, and audience',
      'Justify diagram choices with comprehensive reasoning',
      'Identify misleading elements in statistical graphs',
      'Explain how misleading techniques distort interpretation',
      'Suggest corrections to make graphs honest and accurate',
      'Develop critical thinking skills for evaluating statistical representations',
      'Apply healthy skepticism to published graphs and data visualizations'
    ],

    keyFormulas: `No formulas required for this critical analysis topic.

Key Principles:
1. Every diagram type has strengths and weaknesses
2. Choice depends on data type, purpose, and audience
3. Graphs can mislead through manipulation of scale, symbols, or presentation
4. Always ask: Does this graph accurately represent the data?
5. Critical thinking is essential when interpreting statistics`
  }
};

// ============================================
// GLOBAL CONFIGURATION
// ============================================

export const S1_DATA_HANDLING_CONFIG = {
  tutorCustomization: DATA_HANDLING_TUTOR_CUSTOMIZATION,
  mathTools: DATA_HANDLING_MATH_TOOLS
};
