/**
 * S2 Statistical Diagrams - Complete Topic Configuration
 *
 * Covers visualization and interpretation of numerical data using:
 * - Dot diagrams for small datasets
 * - Histograms for ungrouped data
 * - Stem-and-leaf diagrams for preserving values
 * - Histograms for grouped data with class intervals
 *
 * Prerequisites: Basic data handling, understanding of frequency
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export type StatisticalDiagramsTopicId =
  | 's2-math-statistical-diagrams-introduction'
  | 's2-math-statistical-diagrams-dot-diagrams'
  | 's2-math-statistical-diagrams-histograms-ungrouped'
  | 's2-math-statistical-diagrams-stem-and-leaf'
  | 's2-math-statistical-diagrams-histograms-grouped';

// ============================================
// TUTOR CUSTOMIZATION
// ============================================

export const STATISTICAL_DIAGRAMS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for Secondary 2 students learning Statistical Diagrams.

Teaching Approach:
- Guide students to discover patterns and distributions in data through questioning
- Help students understand when and why different diagrams are appropriate for different data types
- Use real-world contexts (surveys, measurements, experiments) to make statistics relevant
- Celebrate insights when students correctly identify data types or choose appropriate diagrams
- Emphasize the importance of accurate construction (equal intervals, proper scales, sorted values)
- Adapt difficulty organically based on student mastery

Key Concepts to Emphasize:
- Categorical vs numerical data distinction
- Dot diagrams show individual values clearly but are limited to small datasets
- Histograms use continuous bars (no gaps) for numerical data
- Stem-and-leaf diagrams preserve exact values while showing distribution
- Grouped histograms use class intervals for large datasets
- Different interval choices can reveal or hide patterns

Common Misconceptions to Address:
- Confusing histograms with bar charts (bars should touch in histograms)
- Forgetting to include all values in the range on dot diagrams
- Not sorting leaves in stem-and-leaf diagrams
- Using unequal class widths in grouped histograms
- Thinking one diagram type works for all data

**Text-to-Speech Guidelines:**
- Say "class interval" clearly, not "interval" alone
- Spell out symbols: "less than or equal to x, which is less than" instead of "≤ x <"
- Say "stem and leaf" with clear separation between words
- For frequencies, say "the frequency is" rather than using symbols
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding of statistical diagrams.

IMPORTANT: Use the technical name (e.g., "histogram", "dotDiagram") in the toolName field, NOT the display name.

Available tools for this topic:
- dotDiagram: For small datasets showing individual values with stacked dots (NEW! - use this for dot diagram topics)
- histogram: For both ungrouped and grouped data histograms (use intervals parameter)
- numberLine: For number line demonstrations (can show points but NOT frequency stacking)
- barChart: For comparing categorical data and contrasting with histograms
- pieChart: For showing proportions when comparing diagram types

When to use tools:
- Use dotDiagram for small datasets (10-30 values) where each dot = one observation
- Use histogram tool for clear frequency distribution visualization
- Use numberLine for basic number concepts (but dotDiagram is better for frequencies)
- Use barChart when contrasting with histograms (bars have gaps vs bars touch)
- Avoid overusing tools - sometimes a simple frequency table is clearer

Tool parameters must match the mathToolsRegistry exactly. Always verify parameter names before use.`
};

// ============================================
// AVAILABLE MATH TOOLS
// ============================================

export const STATISTICAL_DIAGRAMS_MATH_TOOLS = [
  "dotDiagram",
  "histogram",
  "numberLine",
  "barChart",
  "pieChart"
];

// ============================================
// SUBTOPICS CONFIGURATION
// ============================================

export const STATISTICAL_DIAGRAMS_SUBTOPICS = {

  // ==========================================
  // SUBTOPIC 1: INTRODUCTION
  // ==========================================

  's2-math-statistical-diagrams-introduction': {
    displayName: 'Introduction to Statistical Diagrams',
    topicName: 'Understanding Data Types and Choosing Appropriate Diagrams',

    progressionStructure: {
      sections: [
        {
          id: 'understanding-data-types',
          title: 'Understanding Data Types',
          difficulty: 'foundational' as const,
          prerequisites: [],
          masterySignals: 'Student correctly identifies categorical vs numerical data in 3+ examples without hints',
          estimatedQuestions: '3-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct identifications without hints',
                'Consistent accuracy across different contexts (surveys, measurements, counts)'
              ],
              qualitative: [
                'Correctly distinguishes categorical data (labels, categories) from numerical data (measurements, counts)',
                'Can explain why data is categorical ("uses labels not numbers") or numerical ("can be measured or counted")',
                'Identifies discrete vs continuous numerical data correctly',
                'Recognizes that some numbers are categorical (phone numbers, ID numbers)',
                'Provides clear reasoning for their classification'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on edge cases',
                'Makes occasional errors with borderline examples'
              ],
              qualitative: [
                'Understands basic distinction but struggles with edge cases',
                'Can identify obvious categorical data (colors, names) and numerical data (heights, scores)',
                'Confused by numerical-looking categories (jersey numbers, zip codes)',
                'May classify discrete data as continuous or vice versa',
                'Reasoning is incomplete or imprecise'
              ]
            },
            struggling: {
              quantitative: [
                'Multiple incorrect classifications',
                'Cannot proceed without extensive guidance',
                'Requests solution after minimal hints'
              ],
              qualitative: [
                'Does not understand the fundamental difference between categorical and numerical data',
                'Thinks all numbers are numerical data (confuses jersey numbers with measurements)',
                'Cannot explain reasoning behind classifications',
                'Mixes up discrete and continuous concepts entirely',
                'Gives superficial answers without understanding ("it has numbers so it\'s numerical")'
              ]
            }
          },

          learningObjectives: [
            'Distinguish between categorical (qualitative) and numerical (quantitative) data',
            'Identify whether numerical data is discrete or continuous',
            'Recognize that some numbers represent categories, not measurements',
            'Explain the reasoning behind data type classifications'
          ],

          relevantFormulas: `No formulas for this section - focuses on conceptual understanding of data types.

Key Concepts:
- Categorical data: Labels, categories, names (e.g., colors, countries, subjects)
- Numerical data: Measurements or counts (e.g., height, age, test scores)
- Discrete: Specific values only, usually whole numbers (e.g., number of siblings)
- Continuous: Any value in a range (e.g., height, weight, temperature)`,

          availableTools: ['barChart', 'pieChart']
        },

        {
          id: 'choosing-appropriate-diagrams',
          title: 'Choosing Appropriate Diagrams',
          difficulty: 'foundational-to-intermediate' as const,
          prerequisites: ['understanding-data-types'],
          masterySignals: 'Student correctly chooses appropriate diagrams for 4+ different scenarios with clear justification',
          estimatedQuestions: '4-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '4+ correct diagram choices with justification',
                'Considers multiple factors: data type, size, purpose'
              ],
              qualitative: [
                'Correctly identifies that categorical data uses bar charts, pie charts, or pictograms',
                'Recognizes that numerical data uses dot diagrams, histograms, or stem-and-leaf',
                'Considers data set size when choosing (small → dot diagram, large → grouped histogram)',
                'Understands when to preserve exact values (stem-and-leaf) vs show distribution only (histogram)',
                'Can explain multiple valid options and their trade-offs',
                'Justifies choices based on practical considerations (readability, purpose, audience)'
              ]
            },
            developing: {
              quantitative: [
                '2-3 correct choices, may need hints on edge cases',
                'Justifications are incomplete or partially correct'
              ],
              qualitative: [
                'Knows basic rules (categorical → bar chart, numerical → histogram) but misses nuances',
                'Doesn\'t consider data set size when choosing diagrams',
                'May suggest dot diagram for 100 values or grouped histogram for 10 values',
                'Struggles to articulate why one diagram is better than another',
                'Focuses on only one factor (e.g., data type) while ignoring others (size, range)',
                'Cannot identify multiple valid options'
              ]
            },
            struggling: {
              quantitative: [
                'Multiple incorrect choices',
                'Cannot justify selections',
                'Random guessing without reasoning'
              ],
              qualitative: [
                'Suggests pie charts for numerical data or histograms for categorical data',
                'No understanding of when different diagrams are appropriate',
                'Thinks all diagrams work for all data types',
                'Cannot explain why a chosen diagram is suitable',
                'Ignores all relevant factors (data type, size, purpose)',
                'Shows fundamental confusion about diagram purposes'
              ]
            }
          },

          learningObjectives: [
            'Match diagram types to data types (categorical vs numerical)',
            'Consider data set size when selecting visualization methods',
            'Understand trade-offs between different diagram types',
            'Justify diagram choices based on data characteristics and purpose',
            'Recognize when multiple diagram types could be appropriate'
          ],

          relevantFormulas: `Decision Framework for Choosing Diagrams:

Step 1: Identify data type
- Categorical → Bar chart, pie chart, or pictogram
- Numerical → Continue to Step 2

Step 2: Check data set size
- Small (< 30 values) → Dot diagram or stem-and-leaf
- Medium (30-100 values) → Stem-and-leaf or histogram
- Large (100+ values) → Grouped histogram

Step 3: Consider purpose
- Preserve exact values? → Stem-and-leaf diagram
- Show distribution only? → Histogram (grouped or ungrouped)
- Compare categories? → Bar chart
- Show parts of whole? → Pie chart`,

          availableTools: ['histogram', 'numberLine', 'barChart', 'pieChart']
        }
      ]
    },

    learningObjectives: [
      'Understand the difference between categorical and numerical data',
      'Identify discrete and continuous numerical data',
      'Choose appropriate statistical diagrams based on data type and size',
      'Justify diagram selections with clear reasoning'
    ],

    keyFormulas: `This introductory section focuses on understanding data types and diagram selection rather than formulas.

Key decision points are based on:
1. Data type (categorical vs numerical)
2. Data set size (small, medium, large)
3. Purpose (preserve values, show distribution, compare categories)`
  },

  // ==========================================
  // SUBTOPIC 2: DOT DIAGRAMS
  // ==========================================

  's2-math-statistical-diagrams-dot-diagrams': {
    displayName: 'Dot Diagrams',
    topicName: 'Visualizing Small Numerical Datasets',

    progressionStructure: {
      sections: [
        {
          id: 'understanding-dot-diagrams',
          title: 'Understanding Dot Diagrams',
          difficulty: 'foundational' as const,
          prerequisites: ['understanding-data-types'],
          masterySignals: 'Student correctly identifies key features of dot diagrams and their purpose in 3+ questions',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct answers about dot diagram features',
                'Accurately identifies when dot diagrams are appropriate'
              ],
              qualitative: [
                'Understands that each dot represents one data value',
                'Recognizes that dots are stacked vertically for repeated values',
                'Knows that the number line must have equal intervals',
                'Can explain that dot diagrams work best for small datasets (under 30 values)',
                'Identifies advantages: shows every value, easy to construct, reveals mode quickly',
                'Identifies limitations: impractical for large datasets, inefficient for many different values'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on specific features',
                'Partial understanding of when to use dot diagrams'
              ],
              qualitative: [
                'Knows dots represent values but unclear on stacking rules',
                'May think gaps in number line are acceptable',
                'Unclear about the size limit for practical use',
                'Can identify one or two advantages but misses others',
                'Doesn\'t fully understand limitations',
                'Confuses dot diagrams with scatter plots'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot identify basic features',
                'Multiple misconceptions about purpose and construction',
                'Requests solution immediately'
              ],
              qualitative: [
                'Thinks dots can represent multiple values each',
                'Doesn\'t understand the importance of equal intervals',
                'No awareness of when dot diagrams are appropriate or inappropriate',
                'Cannot distinguish dot diagrams from other visualization types',
                'Shows fundamental confusion about the purpose and structure'
              ]
            }
          },

          learningObjectives: [
            'Understand that each dot represents one data value',
            'Recognize that dots stack vertically for repeated values',
            'Identify when dot diagrams are appropriate (small numerical datasets)',
            'List advantages and limitations of dot diagrams'
          ],

          relevantFormulas: `Dot Diagram Structure:
- Horizontal number line with equal intervals
- Each dot = one data value
- Dots stacked vertically when values repeat
- Number line must include all values from minimum to maximum (no gaps allowed)

When to use:
- Small datasets (typically 10-30 values)
- When you want to show every individual value
- When identifying the mode (most common value) is important

Example: Travel times: 20, 22, 21, 23, 18, 18, 22, 20 minutes
Dot diagram shows 2 dots above 18, 2 above 20, 1 above 21, 2 above 22, 1 above 23`,

          availableTools: ['dotDiagram', 'numberLine']
        },

        {
          id: 'constructing-dot-diagrams',
          title: 'Constructing Dot Diagrams',
          difficulty: 'foundational-to-intermediate' as const,
          prerequisites: ['understanding-dot-diagrams'],
          masterySignals: 'Student correctly constructs dot diagrams for 2+ datasets following all conventions',
          estimatedQuestions: '2-3 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '2+ correctly constructed dot diagrams',
                'All elements present: number line, equal intervals, properly stacked dots, axis label'
              ],
              qualitative: [
                'Correctly identifies range (minimum to maximum values)',
                'Draws number line with equal intervals covering full range',
                'Includes all values from min to max (no missing values on number line)',
                'Places dots directly above their values on the number line',
                'Stacks dots vertically with equal spacing when values repeat',
                'Labels axis clearly (e.g., "Time (minutes)", "Number of Books")',
                'Ensures dots are equally sized and aligned'
              ]
            },
            developing: {
              quantitative: [
                '1 correct construction, or 2 with minor errors',
                'Missing some elements or has spacing issues'
              ],
              qualitative: [
                'Identifies range correctly but may have gaps in number line',
                'Intervals are unequal or inconsistent',
                'Dots are placed approximately but not precisely above values',
                'Vertical stacking is uneven or misaligned',
                'Axis label missing or imprecise',
                'May skip values that have frequency 0',
                'Dot sizes or spacing inconsistent'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot construct a correct dot diagram',
                'Multiple fundamental errors',
                'Does not follow basic conventions'
              ],
              qualitative: [
                'Cannot identify correct range for number line',
                'Number line has wrong values or missing intervals',
                'Dots are randomly placed or not aligned with number line',
                'Does not stack dots for repeated values',
                'No axis label or completely incorrect labeling',
                'Shows fundamental misunderstanding of dot diagram structure',
                'Attempts to use symbols other than dots'
              ]
            }
          },

          learningObjectives: [
            'Identify the range of values (minimum to maximum)',
            'Draw a number line with equal intervals covering the full range',
            'Place dots accurately above their corresponding values',
            'Stack dots vertically with equal spacing for repeated values',
            'Label axes clearly and appropriately'
          ],

          relevantFormulas: `Construction Steps:

Step 1: Identify range
- Find minimum and maximum values
- Range determines number line span

Step 2: Draw number line
- Mark equal intervals
- Include ALL values from min to max (even if frequency = 0)
- Example: If range is 18-23, mark 18, 19, 20, 21, 22, 23

Step 3: Plot dots
- One dot per data value
- Place directly above value on number line
- Stack vertically for repeats with equal spacing

Step 4: Label
- Add axis label describing the variable
- Example: "Travel Time (minutes)", "Test Score"

Critical Rule: Number line must NOT have gaps - include all values in range!`,

          availableTools: ['dotDiagram']
        },

        {
          id: 'interpreting-dot-diagrams',
          title: 'Interpreting and Analyzing Dot Diagrams',
          difficulty: 'intermediate' as const,
          prerequisites: ['constructing-dot-diagrams'],
          masterySignals: 'Student correctly describes distributions from dot diagrams using appropriate terminology in 3+ examples',
          estimatedQuestions: '3-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ complete and accurate descriptions of distributions',
                'Uses correct statistical terminology consistently'
              ],
              qualitative: [
                'Correctly identifies range (span from minimum to maximum)',
                'Identifies clusters (groups of values close together)',
                'Recognizes outliers (values significantly separated from others)',
                'Describes symmetry or skewness of distribution accurately',
                'Can find the mode (tallest stack) by inspection',
                'Uses appropriate language: "clustered around", "range from X to Y", "outlier at", "symmetrical about"',
                'Connects observations to real-world context when provided'
              ]
            },
            developing: {
              quantitative: [
                '1-2 descriptions partially correct',
                'Uses some terminology correctly but misses key features'
              ],
              qualitative: [
                'Can identify range but struggles with clusters',
                'Misses outliers or identifies normal values as outliers',
                'Cannot assess symmetry accurately',
                'Finds mode correctly but doesn\'t identify it as such',
                'Uses informal language instead of statistical terms',
                'Descriptions are vague or incomplete ("the values are spread out")',
                'Doesn\'t connect patterns to context'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot provide meaningful descriptions',
                'Multiple errors in identifying basic features',
                'Completely incorrect terminology'
              ],
              qualitative: [
                'Cannot calculate or identify range',
                'No understanding of what constitutes a cluster',
                'Calls every extreme value an outlier or never identifies true outliers',
                'No concept of symmetry in distributions',
                'Cannot locate mode even when clearly visible',
                'Uses incorrect or made-up terminology',
                'Provides purely subjective observations without statistical meaning'
              ]
            }
          },

          learningObjectives: [
            'Identify the range, mode, and outliers from dot diagrams',
            'Recognize clusters and patterns in data distributions',
            'Describe symmetry or skewness in distributions',
            'Use appropriate statistical terminology in descriptions',
            'Connect distribution patterns to real-world contexts'
          ],

          relevantFormulas: `Key Features to Describe:

1. Range: Maximum value - Minimum value
   Example: "The data ranges from 18 to 30 minutes"

2. Mode: Value with tallest stack (highest frequency)
   Example: "The mode is 23, appearing 4 times"

3. Clusters: Groups of values close together
   Example: "Data is clustered around 20-22 minutes"

4. Outliers: Values significantly separated from main group
   Example: "There is an outlier at 30 minutes"

5. Symmetry: Whether distribution is balanced
   - Symmetrical: Similar shape on both sides of center
   - Skewed: More values on one side than the other

Description Framework:
"The data ranges from [min] to [max]. Most values are clustered around [range].
The mode is [value]. There is/are [number] outlier(s) at [value(s)].
The distribution is [symmetrical/skewed left/skewed right]."`,

          availableTools: ['dotDiagram']
        }
      ]
    },

    learningObjectives: [
      'Understand the structure and purpose of dot diagrams',
      'Construct accurate dot diagrams for small numerical datasets',
      'Interpret and describe distributions using statistical terminology',
      'Identify appropriate contexts for using dot diagrams'
    ],

    keyFormulas: `Dot Diagrams are best for small numerical datasets (10-30 values).

Key construction rules:
- Number line must have equal intervals
- Number line must include ALL values from minimum to maximum
- Each dot represents exactly ONE data value
- Dots stack vertically for repeated values

Key features to identify:
- Range = Maximum - Minimum
- Mode = Value with highest frequency (tallest stack)
- Clusters = Groups of values close together
- Outliers = Values far from main group`
  },

  // ==========================================
  // SUBTOPIC 3: HISTOGRAMS FOR UNGROUPED DATA
  // ==========================================

  's2-math-statistical-diagrams-histograms-ungrouped': {
    displayName: 'Histograms for Ungrouped Data',
    topicName: 'From Dot Diagrams to Frequency Distributions',

    progressionStructure: {
      sections: [
        {
          id: 'creating-frequency-tables',
          title: 'Creating Frequency Tables',
          difficulty: 'foundational-to-intermediate' as const,
          prerequisites: ['understanding-data-types'],
          masterySignals: 'Student correctly creates frequency tables with tally marks for 2+ datasets',
          estimatedQuestions: '2-3 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '2+ correctly constructed frequency tables',
                'All possible values listed systematically',
                'Tally marks and frequencies match exactly'
              ],
              qualitative: [
                'Lists all possible values systematically (in ascending order)',
                'Uses tally marks correctly (groups of 5 with diagonal stroke)',
                'Counts every data value without missing or double-counting',
                'Correctly converts tally marks to numerical frequencies',
                'Includes values with frequency 0 when appropriate',
                'Verifies total frequency matches number of data values',
                'Table is organized and clearly labeled with column headers'
              ]
            },
            developing: {
              quantitative: [
                '1 correct table or 2 with minor counting errors',
                'May miss some values or have tally mistakes'
              ],
              qualitative: [
                'Lists most values but may skip some',
                'Tally marks are present but not properly grouped in 5s',
                'Occasional counting errors (misses one or two values)',
                'Frequencies mostly correct but one or two off by 1',
                'Forgets to include zero-frequency values',
                'Doesn\'t verify total or makes arithmetic error in verification',
                'Table structure is unclear or missing headers'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot create a correct frequency table',
                'Multiple counting errors',
                'Total frequency does not match dataset size'
              ],
              qualitative: [
                'Lists values randomly or incompletely',
                'Does not use tally marks or uses them incorrectly',
                'Significant counting errors (misses many values or double-counts)',
                'Cannot convert tally marks to frequencies',
                'No understanding of zero-frequency values',
                'Does not check total against dataset size',
                'Table structure is confusing or missing essential elements',
                'Shows fundamental confusion about frequency concept'
              ]
            }
          },

          learningObjectives: [
            'List all possible values in a dataset systematically',
            'Use tally marks correctly to count frequencies',
            'Create organized frequency tables with proper headers',
            'Verify that total frequency matches dataset size',
            'Include values with zero frequency when appropriate'
          ],

          relevantFormulas: `Frequency Table Structure:

| Value | Tally | Frequency |
|-------|-------|-----------|
| (list all values from min to max in order)

Tally Mark Rules:
- Group in 5s: |||| represents 5
- Makes counting easier and reduces errors
- Cross through first 4 marks with 5th mark

Verification Check:
Sum of all frequencies = Total number of data values

Example: For data with 20 values, all frequencies must add to 20

Important: Include ALL values in the range, even if frequency = 0
This ensures no values are missed in analysis`,

          availableTools: ['histogram']
        },

        {
          id: 'constructing-ungrouped-histograms',
          title: 'Constructing Histograms from Ungrouped Data',
          difficulty: 'intermediate' as const,
          prerequisites: ['creating-frequency-tables'],
          masterySignals: 'Student correctly constructs histograms from frequency tables with proper scales and conventions',
          estimatedQuestions: '2-3 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '2+ correctly constructed histograms',
                'All elements present and accurate: axes, labels, bars, title'
              ],
              qualitative: [
                'Both axes are drawn and labeled correctly (x-axis = values, y-axis = frequency)',
                'X-axis includes all values in the range with equal spacing',
                'Y-axis scale goes to at least the maximum frequency with clear intervals',
                'Bars touch each other (no gaps) - characteristic of histograms',
                'Each bar\'s height exactly matches the frequency from table',
                'Bars are equal width',
                'Histogram has a descriptive title',
                'Can identify the modal class (tallest bar)',
                'Distinguishes histogram from bar chart (bars touch vs gaps)'
              ]
            },
            developing: {
              quantitative: [
                '1 correct histogram or 2 with minor errors',
                'Some elements missing or slightly inaccurate'
              ],
              qualitative: [
                'Axes present but labeling incomplete or imprecise',
                'X-axis may skip some values',
                'Y-axis scale adequate but intervals unclear',
                'Some gaps between bars (confusing with bar chart)',
                'Most bar heights correct but one or two off',
                'Bar widths slightly inconsistent',
                'Title missing or too vague',
                'Can identify tallest bar but doesn\'t call it modal class',
                'Unclear on histogram vs bar chart distinction'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot construct a correct histogram',
                'Multiple fundamental errors in structure',
                'Missing essential elements'
              ],
              qualitative: [
                'Axes missing, unlabeled, or incorrectly labeled',
                'X-axis has wrong values or major gaps',
                'Y-axis scale inadequate or missing',
                'Large gaps between bars or bars overlap',
                'Bar heights do not correspond to frequencies',
                'Bars have very different widths',
                'No title or completely irrelevant title',
                'Cannot identify any features of the histogram',
                'Fundamental confusion between different diagram types',
                'Draws something that is not a histogram at all'
              ]
            }
          },

          learningObjectives: [
            'Draw and label both axes appropriately',
            'Choose appropriate scales for both axes',
            'Construct bars with correct heights matching frequencies',
            'Ensure bars touch (no gaps) as per histogram convention',
            'Identify the modal class from the tallest bar',
            'Distinguish histograms from bar charts'
          ],

          relevantFormulas: `Histogram Construction Steps:

Step 1: Draw axes
- Horizontal (x-axis): The numerical values
- Vertical (y-axis): Frequency

Step 2: Label axes clearly
- X-axis: Variable name and units (e.g., "Score", "Age (years)")
- Y-axis: "Frequency"

Step 3: Choose scales
- X-axis: Include all values from min to max
- Y-axis: 0 to at least maximum frequency

Step 4: Draw bars
- Height = frequency from table
- Width = same for all bars
- Bars MUST TOUCH (no gaps) - this is what makes it a histogram!

Step 5: Add title
- Descriptive title explaining what data is shown

Modal Class: The value with the highest frequency (tallest bar)

Key Difference from Bar Chart:
- Histogram: Bars touch (numerical data, continuous)
- Bar Chart: Bars have gaps (categorical data, discrete categories)`,

          availableTools: ['histogram']
        },

        {
          id: 'comparing-histograms-bar-charts',
          title: 'Comparing Histograms with Bar Charts',
          difficulty: 'intermediate' as const,
          prerequisites: ['constructing-ungrouped-histograms'],
          masterySignals: 'Student can clearly explain key differences and correctly identify when to use each type',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct identifications of histogram vs bar chart',
                'Clear explanation of at least 4 key differences'
              ],
              qualitative: [
                'Identifies data type difference: histograms for numerical, bar charts for categorical',
                'Recognizes bar spacing: histograms have touching bars, bar charts have gaps',
                'Understands x-axis difference: histograms use numerical scale, bar charts use category labels',
                'Knows purpose difference: histograms show distribution, bar charts compare categories',
                'Can explain why bars touch in histograms (continuous numerical data)',
                'Can explain why bars have gaps in bar charts (separate discrete categories)',
                'Correctly chooses which to use given a dataset and purpose',
                'Provides multiple correct reasons for their choice'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct identifications',
                'Can explain 2-3 differences but misses others'
              ],
              qualitative: [
                'Knows one main difference (usually "bars touch" vs "bars have gaps")',
                'Understands data type distinction but cannot explain implications',
                'May confuse purposes of each diagram type',
                'Struggles to explain WHY bars touch or have gaps',
                'Can make correct choice but reasoning is incomplete',
                'Misses subtle differences (axis types, purposes)',
                'May think they\'re interchangeable in some cases when they\'re not'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot distinguish histograms from bar charts',
                'Incorrect or contradictory explanations',
                'Random guessing'
              ],
              qualitative: [
                'Thinks they are the same thing with different names',
                'Cannot identify any meaningful differences',
                'Incorrect explanations (e.g., "bar charts are colored differently")',
                'No understanding of when to use each type',
                'Suggests using histogram for categorical data or bar chart for numerical data',
                'Completely confused about the purpose and structure of each',
                'Cannot relate bar spacing to data type'
              ]
            }
          },

          learningObjectives: [
            'Identify the four key differences between histograms and bar charts',
            'Explain why bars touch in histograms but have gaps in bar charts',
            'Choose the appropriate diagram type based on data type',
            'Justify diagram choice with clear reasoning'
          ],

          relevantFormulas: `Key Differences: Histograms vs Bar Charts

| Feature | Histogram | Bar Chart |
|---------|-----------|-----------|
| Data Type | Numerical (quantitative) | Categorical (qualitative) |
| Bar Spacing | Bars TOUCH (no gaps) | Bars have GAPS |
| X-Axis | Numerical scale (values) | Category labels (names) |
| Purpose | Show frequency distribution | Compare categories |
| X-Axis Order | Must be numerical order | Any order (often alphabetical or by frequency) |

Why bars touch in histograms:
- Represents continuous numerical data
- Shows that values flow from one to the next
- No "gap" between 5 and 6, for example

Why bars have gaps in bar charts:
- Represents separate discrete categories
- "Red" and "Blue" are completely different categories
- Gap emphasizes they are distinct

Decision Rule:
- Numerical data (heights, scores, ages) → HISTOGRAM
- Categorical data (colors, countries, types) → BAR CHART`,

          availableTools: ['histogram', 'barChart']
        }
      ]
    },

    learningObjectives: [
      'Create frequency tables with tally marks from raw data',
      'Construct histograms from frequency tables',
      'Understand the relationship between dot diagrams and histograms',
      'Distinguish histograms from bar charts',
      'Identify modal class from histogram'
    ],

    keyFormulas: `Frequency Table → Histogram conversion

Histogram for ungrouped data:
- Each bar represents ONE value
- Bar height = frequency of that value
- Bars MUST touch (no gaps)
- X-axis: all values from min to max
- Y-axis: frequency (count)

Modal Class = Value with highest frequency (tallest bar)

Critical Distinction:
- Histogram (numerical): Bars touch
- Bar Chart (categorical): Bars have gaps`
  },

  // ==========================================
  // SUBTOPIC 4: STEM-AND-LEAF DIAGRAMS
  // ==========================================

  's2-math-statistical-diagrams-stem-and-leaf': {
    displayName: 'Stem-and-Leaf Diagrams',
    topicName: 'Preserving Data Values While Showing Distribution',

    progressionStructure: {
      sections: [
        {
          id: 'basic-stem-and-leaf-construction',
          title: 'Basic Stem-and-Leaf Construction',
          difficulty: 'intermediate' as const,
          prerequisites: ['creating-frequency-tables'],
          masterySignals: 'Student correctly constructs stem-and-leaf diagrams with proper stem/leaf separation and sorting',
          estimatedQuestions: '2-3 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '2+ correctly constructed stem-and-leaf diagrams',
                'All stems and leaves properly identified and sorted'
              ],
              qualitative: [
                'Correctly identifies stems (leading digit(s)) and leaves (trailing digit)',
                'Lists all stems in ascending order from top to bottom',
                'Records all leaves for each stem',
                'Sorts leaves in ascending order from left to right within each stem',
                'Uses proper formatting with vertical line separator (stem | leaves)',
                'Includes a key explaining the notation (e.g., "14 | 2 means 142")',
                'Includes all stems in the range even if they have no leaves',
                'Can retrieve original data values from the diagram'
              ]
            },
            developing: {
              quantitative: [
                '1 correct diagram or 2 with minor sorting errors',
                'Structure mostly correct but some organizational issues'
              ],
              qualitative: [
                'Correctly splits numbers into stems and leaves',
                'Stems are in order but may miss one in the range',
                'Records all leaves but forgets to sort them',
                'Leaves sorted in most stems but not all',
                'Formatting is present but inconsistent',
                'Key is present but unclear or incomplete',
                'May forget stems with no leaves',
                'Can retrieve most but not all original values'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot construct a correct stem-and-leaf diagram',
                'Fundamental errors in splitting stems and leaves',
                'Random or unsorted arrangement'
              ],
              qualitative: [
                'Cannot correctly identify what is stem vs leaf',
                'Stems and leaves are confused or reversed',
                'Stems not in order or missing many',
                'Leaves not sorted or randomly placed',
                'No proper formatting (missing separator)',
                'No key or completely incorrect key',
                'Cannot retrieve original values from diagram',
                'Shows fundamental misunderstanding of stem-and-leaf structure'
              ]
            }
          },

          learningObjectives: [
            'Split two-digit and three-digit numbers into stem and leaf parts',
            'List stems in ascending order from top to bottom',
            'Record leaves and sort them in ascending order left to right',
            'Use proper formatting with stem | leaf separator',
            'Create a clear key explaining the notation',
            'Include all stems in the range even with no leaves'
          ],

          relevantFormulas: `Stem-and-Leaf Diagram Structure:

For two-digit numbers (e.g., 142, 157, 164):
- Stem = first two digits (14, 15, 16)
- Leaf = last digit (2, 7, 4)

Format:
Stem | Leaves
14   | 2 7
15   | 1 3 5 7
16   | 0 4 8

Key: 14 | 2 means 142

Critical Rules:
1. Stems in ASCENDING order (top to bottom)
2. Leaves in ASCENDING order (left to right)
3. All leaves must be SINGLE DIGITS (0-9)
4. Include ALL stems in range (even if no leaves)
5. Each leaf represents one data value

Example Construction:
Data: 142, 144, 147, 151, 151, 152

Step 1: Identify range → stems 14, 15
Step 2: List stems
14 |
15 |

Step 3: Add leaves (unsorted first)
14 | 2 4 7
15 | 1 1 2

Step 4: Sort leaves (already sorted in this case)
14 | 2 4 7
15 | 1 1 2

Key: 14 | 2 means 142`,

          availableTools: []
        },

        {
          id: 'split-stems',
          title: 'Split Stems for Better Distribution',
          difficulty: 'intermediate-to-advanced' as const,
          prerequisites: ['basic-stem-and-leaf-construction'],
          masterySignals: 'Student understands when and how to use split stems, correctly constructs diagrams with split stems',
          estimatedQuestions: '2-3 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '2+ correctly constructed split stem diagrams',
                'Proper splitting of stems into 0-4 and 5-9 groups'
              ],
              qualitative: [
                'Recognizes when a stem has too many leaves (crowding the diagram)',
                'Understands that split stems help reveal distribution patterns better',
                'Correctly splits each stem into two rows: first for leaves 0-4, second for 5-9',
                'Maintains ascending order for both stems and leaves',
                'Uses consistent notation (some use * for second half, some just repeat stem)',
                'Can explain why split stems improve visualization',
                'Compares regular vs split stem diagrams and identifies which shows pattern better',
                'Still includes proper key for interpretation'
              ]
            },
            developing: {
              quantitative: [
                '1 correct split stem diagram or 2 with minor errors',
                'Understands concept but execution has issues'
              ],
              qualitative: [
                'Knows split stems exist but unclear on when to use them',
                'Understands the 0-4 and 5-9 split rule',
                'May place some leaves in wrong half of split stem',
                'Split stems present but not consistently formatted',
                'Can create split stem diagram but cannot explain advantages',
                'Struggles to compare effectiveness of regular vs split',
                'Key may be incomplete or unclear about split stem notation'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot construct split stem diagrams',
                'Fundamental confusion about splitting concept',
                'Leaves in wrong sections'
              ],
              qualitative: [
                'No understanding of why or when to split stems',
                'Cannot correctly determine which half a leaf belongs to',
                'Splits stems arbitrarily or inconsistently',
                'Creates more than two splits per stem (incorrect)',
                'Cannot explain any advantages of split stems',
                'Shows fundamental confusion about the concept',
                'Produces diagrams that are less clear than regular stem-and-leaf'
              ]
            }
          },

          learningObjectives: [
            'Identify when a stem has too many leaves for clear visualization',
            'Split stems into two rows: 0-4 and 5-9',
            'Maintain proper ordering in split stem diagrams',
            'Explain advantages of split stems for showing distribution',
            'Compare regular and split stem diagrams for same data'
          ],

          relevantFormulas: `Split Stem Rules:

When to use:
- A stem has many leaves (typically 8+ leaves)
- Distribution pattern is hard to see
- Want to show clustering more clearly

How to split:
Each stem becomes TWO rows:
- First row: leaves 0, 1, 2, 3, 4
- Second row: leaves 5, 6, 7, 8, 9

Example - Regular stem (crowded):
15 | 1 1 2 3 5 5 6 6 7 7 8 8 9 9  (14 leaves - hard to read!)

Example - Split stem (clearer):
15 | 1 1 2 3
15 | 5 5 6 6 7 7 8 8 9 9

Key stays same: 15 | 1 means 151

Advantages of Split Stems:
1. Shows distribution shape more clearly
2. Easier to identify modal groups
3. Less crowding makes diagram more readable
4. Patterns and gaps are more visible

Typical notation:
- Some write stem twice: 15 | ... and 15 | ...
- Some use asterisk: 15 | ... and 15* | ...
Both are acceptable as long as key explains it`,

          availableTools: []
        },

        {
          id: 'stem-and-leaf-advantages-interpretation',
          title: 'Advantages and Interpretation',
          difficulty: 'intermediate' as const,
          prerequisites: ['basic-stem-and-leaf-construction'],
          masterySignals: 'Student clearly articulates advantages of stem-and-leaf, can read values and find median/quartiles',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct interpretations from stem-and-leaf diagrams',
                'Can find median, range, and quartiles accurately'
              ],
              qualitative: [
                'Identifies key advantage: preserves exact data values (can retrieve all original numbers)',
                'Recognizes advantage: shows distribution shape visually',
                'Knows advantage: easy to find median by counting to middle value(s)',
                'Can efficiently find median by counting leaves',
                'Calculates range correctly from stem-and-leaf (max - min)',
                'Can identify quartiles by counting to 25% and 75% positions',
                'Compares to histograms: stem-and-leaf preserves values, histogram does not',
                'Identifies best use case: medium-sized datasets (30-100 values)',
                'Can read all original values from the diagram accurately'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct interpretations',
                'Can find some statistics but makes errors on others'
              ],
              qualitative: [
                'Knows stem-and-leaf preserves values but cannot articulate why this matters',
                'Understands it shows distribution but struggles to describe the shape',
                'Can find median with guidance but not independently',
                'Makes counting errors when finding median or quartiles',
                'Calculates range with minor errors',
                'Knows stem-and-leaf differs from histogram but cannot explain how clearly',
                'Unclear on when stem-and-leaf is better than other diagram types',
                'Can read most values but makes occasional mistakes'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot interpret stem-and-leaf diagrams',
                'Cannot find basic statistics from the diagram',
                'Multiple fundamental errors'
              ],
              qualitative: [
                'Does not understand that exact values can be retrieved',
                'Cannot read original values from the diagram',
                'No strategy for finding median (doesn\'t know to count leaves)',
                'Cannot calculate range even when shown min and max',
                'Has no concept of quartiles',
                'Cannot compare stem-and-leaf with other diagram types',
                'No understanding of when stem-and-leaf is appropriate',
                'Shows fundamental confusion about the purpose and use of stem-and-leaf diagrams'
              ]
            }
          },

          learningObjectives: [
            'Articulate key advantages of stem-and-leaf diagrams',
            'Retrieve original data values from the diagram',
            'Find median by counting to middle value(s)',
            'Calculate range, quartiles from stem-and-leaf',
            'Compare stem-and-leaf with histograms and identify trade-offs',
            'Identify appropriate use cases for stem-and-leaf diagrams'
          ],

          relevantFormulas: `Advantages of Stem-and-Leaf Diagrams:

1. Preserves Exact Values
   - Can read every original data point
   - Unlike histograms which show only frequency

2. Shows Distribution Shape
   - Visual pattern reveals clustering, gaps, symmetry
   - Similar to histogram but with actual values

3. Easy to Find Statistics
   - Median: Count to middle value(s)
   - Range: Read min and max directly
   - Quartiles: Count to 25% and 75% positions
   - Mode: Look for most repeated leaf in same stem

4. Compact Representation
   - More efficient than listing all values
   - Less space than full data table

Finding Statistics:

Median:
- Count total leaves (n)
- If n is odd: median is the ((n+1)/2)th value
- If n is even: median is average of (n/2)th and (n/2 + 1)th values

Example: 20 values
- Median is average of 10th and 11th values
- Count leaves from top until you reach 10th and 11th

Range = Largest value - Smallest value
(Read directly from stem-and-leaf)

Best Use Cases:
- Medium datasets (30-100 values)
- When exact values matter
- When you need to find median/quartiles easily
- Two-digit or three-digit data

Comparison with Histograms:
- Stem-and-leaf: Keeps values, harder to read for large n
- Histogram: Loses values, easier to read for large n`,

          availableTools: []
        }
      ]
    },

    learningObjectives: [
      'Construct stem-and-leaf diagrams with proper formatting',
      'Use split stems when appropriate for clearer visualization',
      'Read original values from stem-and-leaf diagrams',
      'Find median, range, and quartiles from stem-and-leaf diagrams',
      'Compare stem-and-leaf with other diagram types'
    ],

    keyFormulas: `Stem-and-Leaf Structure:
- Stem = leading digit(s)
- Leaf = trailing digit (always single digit 0-9)
- Format: Stem | Leaves
- Key: Explains notation (e.g., "14 | 2 = 142")

Critical Rules:
1. Stems in ascending order (top to bottom)
2. Leaves in ascending order (left to right)
3. Include all stems in range

Split Stems:
- First row: leaves 0-4
- Second row: leaves 5-9
- Use when a stem has 8+ leaves

Finding Median:
- Count total leaves (n)
- Median position: (n+1)/2 for odd n, or average of n/2 and n/2+1 for even n
- Count from diagram to find value at that position`
  },

  // ==========================================
  // SUBTOPIC 5: HISTOGRAMS FOR GROUPED DATA
  // ==========================================

  's2-math-statistical-diagrams-histograms-grouped': {
    displayName: 'Histograms for Grouped Data',
    topicName: 'Using Class Intervals for Large Datasets',

    progressionStructure: {
      sections: [
        {
          id: 'understanding-class-intervals',
          title: 'Understanding Class Intervals',
          difficulty: 'intermediate' as const,
          prerequisites: ['constructing-ungrouped-histograms'],
          masterySignals: 'Student understands class interval notation and can correctly identify which values belong in each interval',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct identifications of interval membership',
                'Correctly interprets inequality notation consistently'
              ],
              qualitative: [
                'Understands notation: a ≤ x < b means "a is included, b is not included"',
                'Can correctly determine if a value belongs in an interval',
                'Recognizes that intervals must be continuous (no gaps, no overlaps)',
                'Understands that end of one interval = start of next interval',
                'Knows that class width = upper boundary - lower boundary',
                'Can explain why 150 is NOT in interval 140 ≤ x < 150 (excluded by <)',
                'Understands alternative notations: [140, 150) means same as 140 ≤ x < 150',
                'Can list all values in an interval if data is whole numbers'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on boundary cases',
                'Makes errors with boundary values'
              ],
              qualitative: [
                'Understands basic idea but confused about boundaries',
                'May think both boundaries are included',
                'May think both boundaries are excluded',
                'Unclear why intervals are constructed this way',
                'Can calculate class width with guidance',
                'Struggles with boundary values (is 150 in 140-150?)',
                'Doesn\'t recognize that gaps or overlaps are problems',
                'Confused by alternative notations'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot determine interval membership',
                'Consistently wrong about boundary values',
                'Multiple fundamental errors'
              ],
              qualitative: [
                'No understanding of ≤ vs < notation',
                'Thinks intervals can have gaps or overlaps',
                'Cannot calculate class width',
                'Randomly decides if boundaries are included',
                'Has no strategy for determining if value belongs in interval',
                'Fundamental confusion about the purpose of intervals',
                'Cannot work with any notation for intervals'
              ]
            }
          },

          learningObjectives: [
            'Interpret class interval notation (a ≤ x < b)',
            'Determine whether specific values belong in given intervals',
            'Understand that intervals must be continuous (no gaps or overlaps)',
            'Calculate class width (interval size)',
            'Recognize alternative interval notations'
          ],

          relevantFormulas: `Class Interval Notation:

Standard: a ≤ x < b
- Reads as: "a is less than or equal to x, which is less than b"
- Meaning: Includes a, excludes b
- Example: 140 ≤ x < 150
  - Includes: 140, 140.5, 141, 149.9
  - Excludes: 150 (belongs to next interval)

Alternative Notations:
- 140-150 (common in textbooks, same meaning)
- [140, 150) (interval notation: [ = included, ) = excluded)

Class Width (Interval Size):
Class Width = Upper Boundary - Lower Boundary

Example: 140 ≤ x < 150
Width = 150 - 140 = 10

Continuous Intervals (No gaps or overlaps):
Correct:
140 ≤ x < 150
150 ≤ x < 160  ← 150 ends first, starts second (continuous!)
160 ≤ x < 170

Wrong (gap):
140 ≤ x < 150
151 ≤ x < 160  ← Gap at 150! Where does 150 go?

Wrong (overlap):
140 ≤ x < 150
149 ≤ x < 160  ← Overlap! 149.5 is in both intervals!

Key Rule: End of one interval = Start of next interval`,

          availableTools: ['histogram']
        },

        {
          id: 'choosing-class-widths',
          title: 'Choosing Appropriate Class Widths',
          difficulty: 'intermediate-to-advanced' as const,
          prerequisites: ['understanding-class-intervals'],
          masterySignals: 'Student can choose appropriate class widths and explain trade-offs of different choices',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ appropriate class width choices with justification',
                'Recognizes when width is too small or too large'
              ],
              qualitative: [
                'Knows to aim for 5-10 intervals total (general guideline)',
                'Can calculate appropriate width: (max - min) ÷ desired number of intervals',
                'Chooses "nice" numbers for width (5, 10, 20, 25, 50 rather than 7, 13, 23)',
                'Recognizes problems with too-small width: too many intervals, like ungrouped data',
                'Recognizes problems with too-large width: too few intervals, pattern hidden',
                'Can adjust width up or down to improve visualization',
                'Ensures all class widths are equal (standard histogram requirement)',
                'Justifies choice based on data range and desired level of detail'
              ]
            },
            developing: {
              quantitative: [
                '1-2 acceptable choices but reasoning incomplete',
                'May choose extreme widths without recognizing issues'
              ],
              qualitative: [
                'Has heard "5-10 intervals" rule but doesn\'t know when to adjust',
                'Can calculate width mechanically but doesn\'t evaluate if it\'s good',
                'May choose awkward numbers (width of 7 when 10 would work better)',
                'Knows too-small is bad but cannot explain specifically why',
                'Knows too-large is bad but cannot explain specifically why',
                'May create unequal widths unintentionally',
                'Justification is vague or circular ("because it looks good")'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot choose appropriate class width',
                'Extreme choices (width of 1 or width equal to entire range)',
                'No justification ability'
              ],
              qualitative: [
                'Has no strategy for choosing class width',
                'Picks random numbers without considering data',
                'Doesn\'t understand why width matters',
                'Cannot recognize obvious problems (100 intervals or 1 interval)',
                'May create wildly unequal widths',
                'Shows no understanding of trade-offs',
                'Cannot provide any meaningful justification'
              ]
            }
          },

          learningObjectives: [
            'Calculate appropriate class width based on data range',
            'Choose "nice" round numbers for class widths',
            'Explain problems with too-small or too-large class widths',
            'Aim for 5-10 intervals total for clear visualization',
            'Justify class width choice based on data characteristics'
          ],

          relevantFormulas: `Choosing Class Width:

General Guideline: Aim for 5-10 intervals total

Step 1: Find data range
Range = Maximum value - Minimum value

Step 2: Estimate width
Approximate Width = Range ÷ Desired number of intervals

Example:
Data range: 0 to 50
Want ~5 intervals
Width ≈ 50 ÷ 5 = 10 ✓ (nice number!)

Step 3: Round to "nice" number
Nice numbers: 1, 2, 5, 10, 20, 25, 50, 100
Avoid: 7, 13, 23, 37 (awkward to work with)

Step 4: Verify
Calculate: How many intervals does this create?
Number of intervals = Range ÷ Width
Check: Is this 5-10? Adjust if needed.

Problems with Poor Width Choice:

Too Small (e.g., width = 1 for range 0-100):
- 100 intervals! Defeats purpose of grouping
- Like ungrouped data, pattern hard to see
- Histogram very wide and sparse

Too Large (e.g., width = 50 for range 0-100):
- Only 2 intervals! No detail
- Pattern completely hidden
- Most data in one bar

Just Right (e.g., width = 10 for range 0-100):
- 10 intervals - clear pattern
- Good level of detail
- Pattern easily visible

Equal Width Requirement:
ALL intervals must have the SAME width
- 0-10, 10-20, 20-30 ✓ (all width 10)
- 0-10, 10-25, 25-40 ✗ (different widths!)`,

          availableTools: ['histogram']
        },

        {
          id: 'constructing-grouped-histograms',
          title: 'Constructing Grouped Histograms',
          difficulty: 'intermediate-to-advanced' as const,
          prerequisites: ['choosing-class-widths'],
          masterySignals: 'Student correctly constructs grouped histograms with frequency tables and proper labeling',
          estimatedQuestions: '2-3 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '2+ correctly constructed grouped histograms',
                'Frequency table and histogram match exactly'
              ],
              qualitative: [
                'Creates correct frequency table with class intervals',
                'All intervals have equal width',
                'Intervals are continuous (no gaps or overlaps)',
                'Correctly assigns each data value to its interval',
                'All data values accounted for (sum of frequencies = n)',
                'Draws histogram with bars touching',
                'X-axis shows interval boundaries clearly',
                'Y-axis shows frequency with appropriate scale',
                'Bar heights match frequencies from table',
                'Identifies modal class (interval with highest frequency)',
                'Labels axes and provides title'
              ]
            },
            developing: {
              quantitative: [
                '1 correct or 2 with minor errors',
                'Frequency table or histogram has small mistakes'
              ],
              qualitative: [
                'Frequency table mostly correct but one or two values misassigned',
                'Intervals may have slight width inconsistencies',
                'May have one gap or overlap in intervals',
                'Minor counting errors in frequency table',
                'Total frequency close but off by 1-2',
                'Histogram structure correct but some bars slightly wrong height',
                'X-axis labeling unclear or imprecise',
                'Y-axis scale adequate but not optimal',
                'Can identify modal class but may not label it clearly',
                'Axes labeled but title missing or vague'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot construct correct grouped histogram',
                'Frequency table has major errors',
                'Multiple fundamental mistakes'
              ],
              qualitative: [
                'Cannot create proper frequency table with intervals',
                'Intervals have unequal widths',
                'Major gaps or overlaps in intervals',
                'Many data values misassigned or missed entirely',
                'Total frequency does not match dataset size',
                'Histogram structure wrong (gaps between bars, wrong orientation)',
                'X-axis does not properly show intervals',
                'Y-axis scale missing or completely wrong',
                'Bar heights unrelated to frequencies',
                'Cannot identify modal class',
                'Missing essential labels or labels are wrong'
              ]
            }
          },

          learningObjectives: [
            'Create frequency tables with class intervals',
            'Ensure all intervals have equal width and are continuous',
            'Correctly assign data values to appropriate intervals',
            'Construct histogram from grouped frequency table',
            'Identify modal class from grouped histogram',
            'Verify total frequency matches dataset size'
          ],

          relevantFormulas: `Constructing Grouped Histogram:

Step 1: Create Frequency Table

| Class Interval | Tally | Frequency |
|----------------|-------|-----------|
| a ≤ x < b      |       |           |
| b ≤ x < c      |       |           |
...

Check:
- All intervals same width ✓
- Continuous (b ends first, starts second) ✓
- Sum of frequencies = total data values ✓

Step 2: Draw Axes
- X-axis: Interval boundaries (0, 10, 20, 30...)
- Y-axis: Frequency (0 to at least maximum frequency)

Step 3: Draw Bars
- One bar per interval
- Bar from lower to upper boundary
- Height = frequency from table
- Bars MUST TOUCH (no gaps)
- All bars same width

Step 4: Label
- X-axis label: Variable name with units
- Y-axis label: "Frequency"
- Title: Descriptive title for the data

Step 5: Identify Modal Class
- Interval with highest frequency
- Tallest bar in histogram

Example Frequency Table:
Waiting Times (n = 36 patients)

| Time (min)     | Frequency |
|----------------|-----------|
| 0 ≤ x < 10     | 7         |
| 10 ≤ x < 20    | 11        | ← Modal class
| 20 ≤ x < 30    | 8         |
| 30 ≤ x < 40    | 8         |
| 40 ≤ x < 50    | 2         |
| Total          | 36 ✓      |

Modal class: 10 ≤ x < 20 (frequency 11)`,

          availableTools: ['histogram']
        },

        {
          id: 'impact-of-interval-choice',
          title: 'Impact of Interval Choice on Interpretation',
          difficulty: 'advanced' as const,
          prerequisites: ['constructing-grouped-histograms'],
          masterySignals: 'Student recognizes how different interval choices affect data interpretation and can critically evaluate histograms',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct analyses of how interval choice affects interpretation',
                'Can compare same data with different interval choices'
              ],
              qualitative: [
                'Recognizes that the same data can look very different with different interval choices',
                'Can explain how narrow intervals show more detail but may appear noisy',
                'Can explain how wide intervals smooth data but hide important patterns',
                'Identifies when interval choice might mislead readers (intentionally or not)',
                'Critically evaluates histograms by checking interval width and boundaries',
                'Understands that "data-driven" interval choice is more honest than "conclusion-driven"',
                'Can suggest better interval choices when given a poorly constructed histogram',
                'Recognizes importance of stating interval choice in reports',
                'Understands that while choice is somewhat arbitrary, it should be reasonable and justified'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct analyses',
                'Partial understanding of how intervals affect appearance'
              ],
              qualitative: [
                'Knows intervals matter but cannot articulate specific effects',
                'Understands narrow vs wide trade-off at surface level',
                'Can identify obviously bad interval choices but misses subtle issues',
                'Limited ability to critically evaluate histograms',
                'Doesn\'t connect interval choice to potential for misleading readers',
                'May not consider whether histogram is honest representation',
                'Struggles to suggest improvements',
                'Doesn\'t recognize importance of documenting interval choice'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot analyze impact of interval choice',
                'No recognition that choice matters',
                'Thinks all interval choices are equivalent'
              ],
              qualitative: [
                'Believes there is only one "correct" way to group data',
                'No understanding that intervals are a choice',
                'Cannot see how different choices affect interpretation',
                'No critical evaluation skills for histograms',
                'No awareness of potential for misleading visualizations',
                'Cannot identify problems even in obviously bad histograms',
                'Has no concept of "reasonable" vs "unreasonable" interval choices',
                'Shows no understanding of the interpretive challenges with grouped data'
              ]
            }
          },

          learningObjectives: [
            'Analyze how interval width affects histogram appearance',
            'Compare histograms of same data with different interval choices',
            'Identify when interval choices might mislead readers',
            'Critically evaluate histograms by checking interval selection',
            'Understand trade-offs between detail and smoothness in grouping',
            'Recognize importance of transparent, reasonable interval choices'
          ],

          relevantFormulas: `Impact of Class Interval Choice:

Same Data, Different Intervals:

Too Narrow (Width = 2):
- Many intervals (25 intervals for range 0-50)
- Lots of detail but "noisy" - hard to see pattern
- Defeats purpose of grouping
- May have many intervals with frequency 0 or 1

Good Choice (Width = 10):
- Reasonable number of intervals (5 intervals)
- Clear pattern visible
- Good balance of detail and smoothness
- Most intervals have meaningful frequencies

Too Wide (Width = 25):
- Few intervals (2 intervals)
- Pattern completely hidden
- Too much smoothing - lost all detail
- Most data in just one or two bars

Critical Evaluation Checklist:

When viewing a histogram, ask:
1. What is the class width? Is it reasonable?
2. How many intervals are there? (Should be 5-10)
3. Are all intervals equal width?
4. Could different intervals show a different pattern?
5. Does the histogram honestly represent the data?
6. Are interval boundaries clearly marked?

Misleading Histograms (Red Flags):
- Unequal interval widths (hard to compare bars)
- Very few intervals (hides variation)
- Very many intervals (defeats grouping purpose)
- Intervals chosen to emphasize one pattern over another
- Y-axis doesn't start at 0 (exaggerates differences)
- Unlabeled or unclear interval boundaries

Honest Practice:
- Choose intervals before looking at pattern (data-driven)
- Try multiple reasonable widths and show the clearest
- State interval choice in caption/title
- Use equal widths unless there's strong justification
- Aim for ~5-10 intervals
- Be transparent about choices made`,

          availableTools: ['histogram']
        }
      ]
    },

    learningObjectives: [
      'Understand class interval notation and membership',
      'Choose appropriate class widths for datasets',
      'Construct grouped frequency tables and histograms',
      'Identify modal class from grouped histograms',
      'Critically evaluate how interval choices affect interpretation',
      'Recognize potential for misleading visualizations'
    ],

    keyFormulas: `Class Interval Notation:
a ≤ x < b means "a included, b excluded"
Alternative: [a, b) or "a-b"

Class Width = Upper Boundary - Lower Boundary

Choosing Width:
- Aim for 5-10 intervals total
- Approximate width = Range ÷ Desired intervals
- Round to "nice" number (5, 10, 20, etc.)

Frequency Table:
- All intervals equal width
- Intervals continuous (no gaps or overlaps)
- Sum of frequencies = n (total data points)

Modal Class = Interval with highest frequency (tallest bar)

Critical Evaluation:
- Check if interval width is reasonable
- Ensure equal widths throughout
- Consider if different choices would change interpretation`
  }
};

// ============================================
// GLOBAL TOPIC CONFIGURATION
// ============================================

export const S2_STATISTICAL_DIAGRAMS_CONFIG = {
  mathTools: STATISTICAL_DIAGRAMS_MATH_TOOLS,
  tutorCustomization: STATISTICAL_DIAGRAMS_TUTOR_CUSTOMIZATION,
  subtopics: STATISTICAL_DIAGRAMS_SUBTOPICS
};
