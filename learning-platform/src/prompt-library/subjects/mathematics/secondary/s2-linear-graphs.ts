/**
 * S2 Mathematics: Linear Graphs and Simultaneous Equations
 *
 * This module covers:
 * - Introduction to linear graphs and the Cartesian plane
 * - Gradient and y-intercept concepts
 * - Equation of a line (y = mx + c)
 * - Finding equations from two points
 * - Graphing linear equations
 * - Simultaneous equations (graphical and algebraic methods)
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export type LinearGraphsTopicId =
  | 's2-math-linear-graphs-intro'
  | 's2-math-linear-graphs-gradient-intercept'
  | 's2-math-linear-graphs-equation-of-line'
  | 's2-math-linear-graphs-equations-from-points'
  | 's2-math-linear-graphs-graphing'
  | 's2-math-linear-graphs-simultaneous-intro'
  | 's2-math-linear-graphs-simultaneous-algebraic';

// ============================================
// TUTOR CUSTOMIZATION
// ============================================

export const LINEAR_GRAPHS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for Secondary 2 students learning Linear Graphs and Simultaneous Equations.

Teaching Approach:
- Guide students to discover relationships between gradient, y-intercept, and line equations
- Help students visualize graphs and understand the connection between algebraic and graphical representations
- Use real-world contexts (distance-time, cost calculations, etc.) to make concepts concrete
- Celebrate insights when students connect different methods (graphical vs algebraic)
- Build confidence with systematic step-by-step approaches
- Adapt difficulty organically based on student mastery

**Text-to-Speech Guidelines:**
- Say "m" as "m" or "gradient" for clarity
- Say "c" as "c" or "y-intercept" for clarity
- Say "x equals" instead of just "x ="
- Spell out coordinates clearly: "two comma three" for (2,3)
- Say "simultaneous" as "sy-mul-TAY-nee-us"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.

IMPORTANT: Use the technical name (e.g., "functionGraph") in the toolName field, NOT the display name.

Available tools for this topic:
- functionGraph: Plot linear functions, mark points, show multiple lines
- simultaneousEquationsSolver: Visualize systems of equations with graphical/algebraic solutions

Use these tools to:
- Show how gradient affects line steepness
- Demonstrate y-intercept as the crossing point
- Visualize simultaneous equations as intersecting lines
- Illustrate the connection between equations and their graphs`
};

// ============================================
// AVAILABLE MATH TOOLS
// ============================================

export const LINEAR_GRAPHS_MATH_TOOLS = [
  "functionGraph",
  "simultaneousEquationsSolver"
];

// ============================================
// SUBTOPICS CONFIGURATION
// ============================================

export const LINEAR_GRAPHS_SUBTOPICS = {

  // ============================================
  // SUBTOPIC 1: Introduction to Linear Graphs
  // ============================================

  's2-math-linear-graphs-intro': {
    displayName: 'Introduction to Linear Graphs',
    topicName: 'Linear Graphs and Equations',

    progressionStructure: {
      sections: [
        {
          id: 'cartesian-plane-basics',
          title: 'The Cartesian Plane',
          difficulty: 'foundational',
          prerequisites: [],
          masterySignals: 'Student correctly plots points and identifies quadrants in 3+ problems with minimal hints',
          estimatedQuestions: '3-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct answers without hints',
                'Consistent accuracy plotting points in all quadrants'
              ],
              qualitative: [
                'Correctly identifies x and y coordinates',
                'Plots points accurately in all four quadrants',
                'Understands the origin (0,0)',
                'Can identify which quadrant a point belongs to',
                'Reads coordinates from plotted points correctly'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on quadrants or coordinate order',
                'Occasional errors in negative coordinates'
              ],
              qualitative: [
                'Sometimes confuses x and y coordinates',
                'Struggles with negative values',
                'Can plot in Quadrant I but makes errors in other quadrants',
                'Needs prompting to remember (x,y) order'
              ]
            },
            struggling: {
              quantitative: [
                'Multiple incorrect attempts',
                'Cannot plot points without full guidance',
                'Requests solution after 1 hint'
              ],
              qualitative: [
                'Confuses axes (horizontal vs vertical)',
                'Does not understand negative coordinates',
                'Plots points in wrong locations consistently',
                'Cannot identify quadrants',
                'Mixes up x and y values'
              ]
            }
          },

          learningObjectives: [
            'Understand the structure of the Cartesian plane with x and y axes',
            'Plot points given coordinates (x, y)',
            'Identify the four quadrants and their characteristics',
            'Read coordinates from plotted points',
            'Understand the origin as (0, 0)'
          ],

          relevantFormulas: `
**Coordinate Format:**
- Point: (x, y)
- x = horizontal position (positive right, negative left)
- y = vertical position (positive up, negative down)

**Quadrants:**
- Quadrant I: x > 0, y > 0
- Quadrant II: x < 0, y > 0
- Quadrant III: x < 0, y < 0
- Quadrant IV: x > 0, y < 0
          `,

          availableTools: ['functionGraph']
        },

        {
          id: 'recognizing-linear-relationships',
          title: 'What Makes a Graph Linear?',
          difficulty: 'foundational',
          prerequisites: ['cartesian-plane-basics'],
          masterySignals: 'Student correctly identifies linear vs non-linear relationships in 3+ problems by checking constant rate of change',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct identifications without hints',
                'Can explain why a relationship is or isn\'t linear'
              ],
              qualitative: [
                'Understands that linear means constant rate of change',
                'Can calculate change in y for each change in x',
                'Correctly identifies that equal x-steps produce equal y-steps in linear relationships',
                'Recognizes that linear graphs form straight lines',
                'Can distinguish linear from quadratic or other non-linear patterns'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about checking rate of change',
                'Can identify obvious linear relationships but struggles with subtle cases'
              ],
              qualitative: [
                'Understands the concept but makes calculation errors',
                'Sometimes forgets to check all intervals',
                'Can identify straight lines visually but struggles with tables',
                'Needs prompting to calculate differences systematically'
              ]
            },
            struggling: {
              quantitative: [
                'Multiple incorrect attempts',
                'Cannot determine linearity without full solution',
                'Guesses based on appearance rather than calculation'
              ],
              qualitative: [
                'Does not understand "constant rate of change"',
                'Cannot calculate differences between consecutive y-values',
                'Thinks any relationship with numbers is linear',
                'Confuses linear with "has a pattern"'
              ]
            }
          },

          learningObjectives: [
            'Understand that linear relationships have constant rate of change',
            'Identify linear relationships from tables of values',
            'Calculate the change in y for each change in x',
            'Recognize that linear graphs form straight lines',
            'Distinguish linear from non-linear relationships'
          ],

          relevantFormulas: `
**Constant Rate of Change:**
For a linear relationship, when x increases by the same amount, y always increases (or decreases) by the same amount.

Example:
If x: 0, 1, 2, 3
and y: 1, 3, 5, 7
Change in y: +2, +2, +2 (constant!) → Linear!

Non-example:
If x: 0, 1, 2, 3
and y: 0, 1, 4, 9
Change in y: +1, +3, +5 (NOT constant) → Not linear (it's y = x²)
          `,

          availableTools: ['functionGraph']
        },

        {
          id: 'introduction-to-gradient',
          title: 'Introduction to Gradient (Steepness)',
          difficulty: 'foundational-to-intermediate',
          prerequisites: ['recognizing-linear-relationships'],
          masterySignals: 'Student understands gradient as "rise over run" and can calculate simple gradients in 3+ problems',
          estimatedQuestions: '3-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct gradient calculations',
                'Can explain gradient in their own words'
              ],
              qualitative: [
                'Understands gradient as rise ÷ run',
                'Can identify rise (vertical change) and run (horizontal change)',
                'Correctly calculates gradient = change in y / change in x',
                'Understands that larger gradient = steeper line',
                'Recognizes that gradient measures steepness'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on rise/run',
                'Can calculate but needs prompting on what rise and run mean'
              ],
              qualitative: [
                'Sometimes confuses rise and run',
                'Can calculate when prompted but doesn\'t remember formula independently',
                'Understands the concept but makes arithmetic errors',
                'Needs visual aids to identify rise and run'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot calculate gradient without full walkthrough',
                'Confuses gradient with other concepts',
                'Gets rise and run backwards (run/rise instead of rise/run)'
              ],
              qualitative: [
                'Does not understand what "steepness" means',
                'Cannot identify vertical vs horizontal change',
                'Tries to add instead of divide',
                'Confuses gradient with y-intercept or coordinates'
              ]
            }
          },

          learningObjectives: [
            'Understand gradient as a measure of steepness',
            'Identify rise (vertical change) and run (horizontal change)',
            'Calculate gradient using rise ÷ run',
            'Relate gradient magnitude to line steepness',
            'Understand that steep lines have large gradients'
          ],

          relevantFormulas: `
**Gradient Formula (Simple Form):**
Gradient = Rise ÷ Run
         = Vertical change ÷ Horizontal change
         = Change in y ÷ Change in x

**Example:**
If a line goes up 6 units for every 2 units it goes across:
Gradient = 6 ÷ 2 = 3

**Interpretation:**
- Gradient = 3 means: for every 1 unit across, the line goes up 3 units
- Larger gradient = steeper line
- Smaller gradient = gentler line
- Gradient = 0 = flat horizontal line
          `,

          availableTools: ['functionGraph']
        }
      ]
    },

    learningObjectives: [
      'Master the Cartesian coordinate system',
      'Identify linear vs non-linear relationships',
      'Understand gradient as a measure of steepness',
      'Calculate simple gradients using rise over run',
      'Visualize how gradient affects line appearance'
    ],

    keyFormulas: `
**Cartesian Plane:**
- Point notation: (x, y)
- Origin: (0, 0)

**Linear Relationships:**
- Constant rate of change

**Gradient:**
- Gradient = Rise ÷ Run = (Change in y) ÷ (Change in x)
    `
  },

  // ============================================
  // SUBTOPIC 2: Gradient and y-intercept
  // ============================================

  's2-math-linear-graphs-gradient-intercept': {
    displayName: 'Gradient and y-intercept',
    topicName: 'Linear Graphs and Equations',

    progressionStructure: {
      sections: [
        {
          id: 'gradient-formula',
          title: 'The Gradient Formula',
          difficulty: 'intermediate',
          prerequisites: ['introduction-to-gradient'],
          masterySignals: 'Student correctly calculates gradient from two points using m = (y₂ - y₁)/(x₂ - x₁) in 3+ problems',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct calculations without hints',
                'Consistent accuracy with positive and negative values'
              ],
              qualitative: [
                'Correctly applies formula m = (y₂ - y₁)/(x₂ - x₁)',
                'Subtracts coordinates in the correct order',
                'Handles negative numbers correctly',
                'Can calculate gradient from any two points',
                'Simplifies fractions appropriately'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on formula or order',
                'Makes occasional sign errors with negative coordinates'
              ],
              qualitative: [
                'Knows the formula but sometimes mixes up the order',
                'Struggles with negative numbers',
                'Forgets to simplify fractions',
                'Needs prompting to label (x₁, y₁) and (x₂, y₂) correctly'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot apply formula without step-by-step guidance',
                'Consistently makes order errors (x - y confusion)',
                'Gets wrong answer even with hints'
              ],
              qualitative: [
                'Does not remember the gradient formula',
                'Adds instead of subtracts',
                'Subtracts in wrong order (y₁ - y₂ on top but x₂ - x₁ on bottom)',
                'Cannot handle negative coordinates',
                'Confuses numerator and denominator'
              ]
            }
          },

          learningObjectives: [
            'Learn and apply the gradient formula m = (y₂ - y₁)/(x₂ - x₁)',
            'Calculate gradient from any two points',
            'Handle negative coordinates correctly',
            'Maintain consistent order when subtracting',
            'Simplify gradient fractions'
          ],

          relevantFormulas: `
**Gradient Formula:**
For two points (x₁, y₁) and (x₂, y₂):

m = (y₂ - y₁) / (x₂ - x₁)

where m represents the gradient

**Example:**
Points (1, 2) and (5, 10):
m = (10 - 2) / (5 - 1) = 8/4 = 2

**Key Points:**
- The letter m is used for gradient
- It doesn't matter which point is (x₁, y₁) - just be consistent
- Subtract in the same order: if y₂ - y₁ on top, then x₂ - x₁ on bottom
          `,

          availableTools: ['functionGraph']
        },

        {
          id: 'types-of-gradients',
          title: 'Types of Gradients',
          difficulty: 'intermediate',
          prerequisites: ['gradient-formula'],
          masterySignals: 'Student correctly identifies and calculates positive, negative, zero, and undefined gradients in 3+ problems',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct identifications and calculations',
                'Can determine type of gradient before calculating'
              ],
              qualitative: [
                'Understands positive gradient = line slopes upward',
                'Understands negative gradient = line slopes downward',
                'Recognizes zero gradient = horizontal line',
                'Identifies undefined gradient = vertical line (division by zero)',
                'Can calculate and interpret all gradient types',
                'Relates gradient sign to line direction'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on gradient type',
                'Can calculate but struggles to predict line direction'
              ],
              qualitative: [
                'Sometimes confuses positive and negative slopes',
                'Forgets that horizontal lines have gradient = 0',
                'Doesn\'t recognize vertical lines as undefined',
                'Can calculate but needs help interpreting meaning',
                'Struggles with the concept of division by zero'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot identify gradient type without full solution',
                'Confuses gradient types consistently',
                'Tries to divide by zero for vertical lines'
              ],
              qualitative: [
                'Does not understand gradient sign',
                'Cannot connect gradient to line direction',
                'Thinks all lines have a numerical gradient',
                'Confuses horizontal (m=0) with vertical (undefined)',
                'Cannot determine when gradient is positive or negative'
              ]
            }
          },

          learningObjectives: [
            'Identify positive gradients (line slopes upward)',
            'Identify negative gradients (line slopes downward)',
            'Understand zero gradient (horizontal line)',
            'Understand undefined gradient (vertical line)',
            'Relate gradient sign and magnitude to line appearance'
          ],

          relevantFormulas: `
**Gradient Types:**

1. **Positive Gradient (m > 0):**
   - Line slopes upward from left to right
   - As x increases, y increases
   - Example: m = 2, m = 0.5, m = 5

2. **Negative Gradient (m < 0):**
   - Line slopes downward from left to right
   - As x increases, y decreases
   - Example: m = -2, m = -0.5, m = -3

3. **Zero Gradient (m = 0):**
   - Horizontal line (completely flat)
   - y-value stays constant
   - Example: y = 3, y = -2

4. **Undefined Gradient:**
   - Vertical line (straight up and down)
   - x-value stays constant
   - Example: x = 5, x = -1
   - Division by zero: (y₂ - y₁)/(0) is undefined
          `,

          availableTools: ['functionGraph']
        },

        {
          id: 'understanding-y-intercept',
          title: 'The y-intercept',
          difficulty: 'intermediate',
          prerequisites: ['gradient-formula'],
          masterySignals: 'Student correctly identifies y-intercepts from graphs, equations, and points in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct identifications',
                'Can find y-intercept from multiple representations'
              ],
              qualitative: [
                'Understands y-intercept is where line crosses y-axis',
                'Knows that x = 0 at the y-intercept',
                'Can read y-intercept from a graph',
                'Can identify y-intercept from equation y = mx + c',
                'Recognizes y-intercept as the starting value in real-world contexts',
                'Can find y-intercept given a point and gradient'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about x = 0',
                'Can identify from graph but struggles with equations'
              ],
              qualitative: [
                'Sometimes confuses y-intercept with x-intercept',
                'Needs reminding that y-intercept occurs when x = 0',
                'Can read from graph but forgets to write coordinate (0, c)',
                'Struggles to extract y-intercept from rearranged equations'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot identify y-intercept without full guidance',
                'Confuses intercepts with other features',
                'Gives x-value instead of y-value'
              ],
              qualitative: [
                'Does not know what y-intercept means',
                'Cannot locate y-axis on a graph',
                'Thinks y-intercept is a point with two coordinates rather than just the y-value',
                'Confuses y-intercept with gradient',
                'Cannot connect the concept across different representations'
              ]
            }
          },

          learningObjectives: [
            'Understand y-intercept as the point where a line crosses the y-axis',
            'Know that x = 0 at the y-intercept',
            'Read y-intercept from graphs',
            'Identify y-intercept from equations',
            'Interpret y-intercept in real-world contexts (initial value)'
          ],

          relevantFormulas: `
**y-intercept:**
- The y-coordinate where a line crosses the y-axis
- At this point, x = 0
- Often represented by the letter c
- Written as just a number (the y-value) or as a coordinate (0, c)

**Finding y-intercept:**
1. From a graph: Look where the line crosses the y-axis
2. From an equation y = mx + c: The y-intercept is c
3. From a point and gradient: Substitute into y = mx + c and solve for c

**Real-World Meaning:**
- Often represents the starting value or initial amount
- Examples:
  - Phone bill: Base fee before any usage
  - Tank draining: Initial amount of water
  - Distance: Starting position
          `,

          availableTools: ['functionGraph']
        },

        {
          id: 'gradient-intercept-connection',
          title: 'Connecting Gradient and y-intercept',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['types-of-gradients', 'understanding-y-intercept'],
          masterySignals: 'Student can determine both gradient and y-intercept from various representations in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct determinations of both m and c',
                'Can work with graphs, equations, and points interchangeably'
              ],
              qualitative: [
                'Understands how gradient and y-intercept work together to define a line',
                'Can extract both m and c from a graph',
                'Can identify both from equation y = mx + c',
                'Understands that parallel lines have the same gradient but different y-intercepts',
                'Can describe a line completely using m and c',
                'Sees the relationship: same gradient = parallel, same y-intercept = passes through same y-axis point'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints',
                'Can find one but forgets to find the other'
              ],
              qualitative: [
                'Can find gradient and y-intercept separately but doesn\'t connect them',
                'Needs prompting to look for both features',
                'Sometimes confuses which is which',
                'Understands individually but struggles with combined questions'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot find both without full walkthrough',
                'Confuses gradient and y-intercept consistently',
                'Gives the same value for both'
              ],
              qualitative: [
                'Does not understand that both are needed to define a line',
                'Cannot distinguish between m and c',
                'Thinks one determines the other automatically',
                'Cannot work with multiple representations'
              ]
            }
          },

          learningObjectives: [
            'Understand that m and c together define a unique line',
            'Extract both gradient and y-intercept from graphs',
            'Identify both from equations',
            'Understand parallel lines have same m, different c',
            'Describe lines using both gradient and y-intercept'
          ],

          relevantFormulas: `
**The Complete Picture:**
A straight line is completely defined by:
- m: the gradient (steepness and direction)
- c: the y-intercept (starting point on y-axis)

**Equation form:** y = mx + c

**Example:**
y = 2x + 3
- Gradient (m) = 2 → line slopes upward, rises 2 for every 1 across
- y-intercept (c) = 3 → line crosses y-axis at (0, 3)

**Parallel Lines:**
- Have the same gradient (m)
- Have different y-intercepts (c)
- Example: y = 2x + 3 and y = 2x - 1 are parallel
          `,

          availableTools: ['functionGraph']
        }
      ]
    },

    learningObjectives: [
      'Master the gradient formula m = (y₂ - y₁)/(x₂ - x₁)',
      'Identify and calculate all types of gradients',
      'Understand and locate y-intercepts',
      'Connect gradient and y-intercept to fully describe a line',
      'Interpret gradient and y-intercept in real-world contexts'
    ],

    keyFormulas: `
**Gradient Formula:**
m = (y₂ - y₁) / (x₂ - x₁)

**Gradient Types:**
- Positive (m > 0): slopes upward
- Negative (m < 0): slopes downward
- Zero (m = 0): horizontal
- Undefined: vertical (division by zero)

**y-intercept:**
- Where line crosses y-axis
- x = 0 at this point
- Represented by c
    `
  },

  // ============================================
  // SUBTOPIC 3: Equation of a Line
  // ============================================

  's2-math-linear-graphs-equation-of-line': {
    displayName: 'Equation of a Line',
    topicName: 'Linear Graphs and Equations',

    progressionStructure: {
      sections: [
        {
          id: 'gradient-intercept-form',
          title: 'The Gradient-Intercept Form: y = mx + c',
          difficulty: 'intermediate',
          prerequisites: ['gradient-intercept-connection'],
          masterySignals: 'Student correctly reads m and c from equations and writes equations given m and c in 3+ problems',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct identifications or equation writings',
                'Can work in both directions (read and write equations)'
              ],
              qualitative: [
                'Understands y = mx + c as the standard form',
                'Correctly identifies m (gradient) and c (y-intercept) from equations',
                'Can write equations given m and c values',
                'Recognizes variations like y = 3x (where c = 0) or y = -2x + 5',
                'Handles negative values and fractions correctly',
                'Can rearrange simple equations into y = mx + c form'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about which term is m and which is c',
                'Can identify but makes errors writing equations'
              ],
              qualitative: [
                'Sometimes forgets the sign of c when writing equations',
                'Confuses m and c positions',
                'Struggles when c = 0 (equations like y = 2x)',
                'Needs prompting to include the + or - sign before c',
                'Can handle positive values but struggles with negatives'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot identify m or c without full guidance',
                'Writes equations with values in wrong positions',
                'Confuses equation form with coordinate notation'
              ],
              qualitative: [
                'Does not remember the y = mx + c form',
                'Thinks m and c can be in any order',
                'Writes equations like y = c + mx or mx + c = y',
                'Cannot distinguish between m and c values',
                'Confuses equation notation with other mathematical forms'
              ]
            }
          },

          learningObjectives: [
            'Understand y = mx + c as the standard form for linear equations',
            'Identify m and c from given equations',
            'Write equations given gradient and y-intercept',
            'Handle variations where c = 0 or m = 1',
            'Work with negative values and fractions in equations'
          ],

          relevantFormulas: `
**Standard Form:**
y = mx + c

where:
- m = gradient (slope)
- c = y-intercept

**Examples:**
1. y = 3x + 5
   - m = 3, c = 5

2. y = -2x + 7
   - m = -2, c = 7

3. y = 0.5x - 3
   - m = 0.5, c = -3

4. y = 2x (same as y = 2x + 0)
   - m = 2, c = 0

5. y = -4 (same as y = 0x - 4)
   - m = 0, c = -4 (horizontal line)

**Important:**
- Always write as y = mx + c (not y = c + mx)
- Include the sign before c: use y = 2x - 3, not y = 2x + -3
- When c = 0, you can omit it: y = 5x instead of y = 5x + 0
          `,

          availableTools: ['functionGraph']
        },

        {
          id: 'writing-equations-from-graph',
          title: 'Writing Equations from Graphs',
          difficulty: 'intermediate',
          prerequisites: ['gradient-intercept-form'],
          masterySignals: 'Student correctly determines equation by finding m and c from a graph in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            masary: {
              quantitative: [
                '3+ correct equations written from graphs',
                'Accurately reads both gradient and y-intercept'
              ],
              qualitative: [
                'Reads y-intercept directly from where line crosses y-axis',
                'Calculates gradient using rise/run from the graph',
                'Can use any two clear points on the line to find gradient',
                'Writes final equation in y = mx + c form',
                'Checks answer makes sense by verifying a point on the line'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on reading graph',
                'Gets one component right but makes errors on the other'
              ],
              qualitative: [
                'Can read y-intercept but struggles to calculate gradient from graph',
                'Makes errors counting rise or run',
                'Forgets to check if gradient should be negative',
                'Needs prompting to use grid squares for accuracy',
                'Sometimes misreads the scale on axes'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot write equation without full step-by-step guidance',
                'Reads gradient and y-intercept incorrectly',
                'Writes equation in wrong form'
              ],
              qualitative: [
                'Cannot locate y-intercept on the graph',
                'Does not know how to calculate gradient from two points on a graph',
                'Confuses rise and run',
                'Guesses equation without systematic approach',
                'Cannot connect the visual graph to the algebraic equation'
              ]
            }
          },

          learningObjectives: [
            'Read y-intercept from a graph accurately',
            'Calculate gradient from a graph using rise over run',
            'Select appropriate points for gradient calculation',
            'Combine m and c to write the equation',
            'Verify equation by checking points on the line'
          ],

          relevantFormulas: `
**Steps to Write Equation from Graph:**

1. **Find the y-intercept (c):**
   - Look where the line crosses the y-axis
   - Read the y-coordinate at that point
   - This is your c value

2. **Find the gradient (m):**
   - Choose two clear points on the line
   - Count rise (vertical change)
   - Count run (horizontal change)
   - Calculate m = rise ÷ run
   - Check sign: upward slope = positive, downward = negative

3. **Write the equation:**
   - Substitute m and c into y = mx + c

**Example:**
If line crosses y-axis at (0, 2) and passes through (3, 8):
- c = 2 (y-intercept)
- m = (8-2)/(3-0) = 6/3 = 2
- Equation: y = 2x + 2
          `,

          availableTools: ['functionGraph']
        },

        {
          id: 'interpreting-real-world-equations',
          title: 'Real-World Applications of y = mx + c',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['gradient-intercept-form'],
          masterySignals: 'Student correctly interprets m and c in real-world contexts and writes equations for situations in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct interpretations or equation writings',
                'Can work in both directions (interpret given equation or write equation from description)'
              ],
              qualitative: [
                'Understands m as rate of change in context (cost per item, speed, rate of flow)',
                'Interprets c as initial value, starting amount, or fixed cost',
                'Can write equations from word problems',
                'Correctly identifies which quantity is the independent variable (x) and dependent variable (y)',
                'Makes real-world sense checks on equations'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about what m and c represent',
                'Can interpret but struggles to write equations from descriptions'
              ],
              qualitative: [
                'Sometimes confuses rate of change with initial value',
                'Needs prompting to identify variables',
                'Can work with simple contexts but struggles with complex scenarios',
                'Forgets units when interpreting',
                'Makes arithmetic errors when calculating m or c from context'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot interpret real-world meaning without full explanation',
                'Cannot write equations from word problems',
                'Gives nonsensical interpretations'
              ],
              qualitative: [
                'Does not connect m and c to real-world quantities',
                'Thinks equations only work with pure numbers',
                'Cannot identify variables in a situation',
                'Confuses independent and dependent variables',
                'Does not understand rate of change concept in context'
              ]
            }
          },

          learningObjectives: [
            'Interpret gradient (m) as a rate of change in context',
            'Interpret y-intercept (c) as initial value or fixed cost',
            'Write equations from real-world descriptions',
            'Identify independent and dependent variables',
            'Make sense of equations in practical situations'
          ],

          relevantFormulas: `
**Real-World Interpretation:**

**Gradient (m) often represents:**
- Cost per item
- Speed (distance per time)
- Rate of flow (volume per time)
- Rate of change
- Price per unit

**y-intercept (c) often represents:**
- Initial value or starting amount
- Fixed cost or base fee
- Starting position
- Constant value added

**Examples:**

1. **Phone Plan:** Cost = 20 + 0.50 × minutes
   - y = 0.5x + 20
   - m = 0.5 (50 cents per minute)
   - c = 20 (base monthly fee of $20)

2. **Car Rental:** Cost = 50 + 0.30 × km
   - y = 0.3x + 50
   - m = 0.3 (30 cents per km)
   - c = 50 (fixed rental fee)

3. **Water Tank Draining:** Water = 500 - 10 × hours
   - y = -10x + 500
   - m = -10 (loses 10 litres per hour)
   - c = 500 (starts with 500 litres)

**Key:** Identify what increases/decreases (m) and what the starting value is (c)
          `,

          availableTools: ['functionGraph']
        }
      ]
    },

    learningObjectives: [
      'Master the y = mx + c form and its components',
      'Write equations from graphs by finding m and c',
      'Interpret equations in real-world contexts',
      'Connect algebraic equations to their graphical representations',
      'Apply linear equations to solve practical problems'
    ],

    keyFormulas: `
**Standard Form:**
y = mx + c

**From a Graph:**
1. c = y-coordinate where line crosses y-axis
2. m = rise ÷ run (from any two points)

**Real-World:**
- m = rate of change
- c = initial value / fixed amount
    `
  },

  // ============================================
  // SUBTOPIC 4: Equations from Two Points
  // ============================================

  's2-math-linear-graphs-equations-from-points': {
    displayName: 'Finding Equations from Two Points',
    topicName: 'Linear Graphs and Equations',

    progressionStructure: {
      sections: [
        {
          id: 'two-point-method',
          title: 'The Two-Point Method',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['gradient-formula', 'gradient-intercept-form'],
          masterySignals: 'Student correctly finds equation from two points using systematic two-step process in 3+ problems',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct equations found',
                'Completes both steps (find m, then find c) systematically'
              ],
              qualitative: [
                'Correctly applies m = (y₂ - y₁)/(x₂ - x₁) to find gradient',
                'Substitutes m and one point into y = mx + c to find c',
                'Solves for c correctly',
                'Writes final equation in proper form',
                'Checks answer by verifying the second point satisfies the equation',
                'Works systematically through the process'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on the two-step process',
                'Can find m but makes errors finding c, or vice versa'
              ],
              qualitative: [
                'Sometimes forgets to find c after finding m',
                'Makes arithmetic errors when solving for c',
                'Mixes up which point to use for finding c',
                'Forgets to check answer',
                'Needs prompting to remember both steps'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot complete the process without full walkthrough',
                'Gets stuck after finding gradient',
                'Writes equation with incorrect c value'
              ],
              qualitative: [
                'Does not have a systematic approach',
                'Tries to guess the equation',
                'Cannot connect the two-step process',
                'Confuses finding m with finding c',
                'Does not understand why both steps are needed'
              ]
            }
          },

          learningObjectives: [
            'Apply a systematic two-step method to find equations',
            'Calculate gradient from two points',
            'Substitute to find y-intercept',
            'Write complete equation in y = mx + c form',
            'Verify equation using both points'
          ],

          relevantFormulas: `
**Two-Step Method:**

**Step 1: Find the gradient (m)**
Use the formula: m = (y₂ - y₁) / (x₂ - x₁)

**Step 2: Find the y-intercept (c)**
- Substitute m and one point (x, y) into y = mx + c
- Solve for c

**Example:**
Find equation through (2, 5) and (6, 13)

Step 1: m = (13 - 5)/(6 - 2) = 8/4 = 2

Step 2: Using point (2, 5):
5 = 2(2) + c
5 = 4 + c
c = 1

**Final equation:** y = 2x + 1

**Check with (6, 13):**
y = 2(6) + 1 = 13 ✓
          `,

          availableTools: ['functionGraph']
        },

        {
          id: 'parallel-perpendicular-lines',
          title: 'Parallel and Perpendicular Lines',
          difficulty: 'advanced',
          prerequisites: ['two-point-method'],
          masterySignals: 'Student understands that parallel lines have equal gradients and can find equations of parallel lines in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct equations of parallel lines',
                'Can identify when lines are parallel from equations'
              ],
              qualitative: [
                'Understands parallel lines have the same gradient (m₁ = m₂)',
                'Knows parallel lines have different y-intercepts',
                'Can write equation of line parallel to a given line through a given point',
                'Identifies parallel lines from equations by comparing gradients',
                'Uses same m, different c for parallel lines'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about equal gradients',
                'Can identify parallel lines but struggles to write equations'
              ],
              qualitative: [
                'Knows parallel lines have same gradient but forgets to use different c',
                'Sometimes copies entire equation instead of just the gradient',
                'Needs prompting to find new c value',
                'Understands concept but makes calculation errors'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot write equations of parallel lines without full guidance',
                'Thinks parallel lines have the same equation',
                'Uses wrong gradient for parallel line'
              ],
              qualitative: [
                'Does not understand what makes lines parallel',
                'Thinks parallel means same y-intercept instead of same gradient',
                'Cannot connect algebraic condition (m₁ = m₂) to geometric meaning',
                'Confuses parallel with perpendicular'
              ]
            }
          },

          learningObjectives: [
            'Understand that parallel lines have equal gradients',
            'Identify parallel lines from their equations',
            'Write equations of lines parallel to a given line',
            'Use same gradient but different y-intercept for parallel lines',
            'Distinguish between parallel and non-parallel lines'
          ],

          relevantFormulas: `
**Parallel Lines:**

**Condition:** Two lines are parallel if they have the same gradient
- If line 1 has equation y = m₁x + c₁
- And line 2 has equation y = m₂x + c₂
- They are parallel when: m₁ = m₂ (and c₁ ≠ c₂)

**Finding Parallel Line Equation:**
To find a line parallel to y = 3x + 2 through point (1, 7):
1. Use the same gradient: m = 3
2. Find c using the point (1, 7):
   7 = 3(1) + c
   c = 4
3. Equation: y = 3x + 4

**Examples of Parallel Lines:**
- y = 2x + 3 and y = 2x - 1 (both have m = 2)
- y = -x + 5 and y = -x - 2 (both have m = -1)
- y = 0.5x and y = 0.5x + 10 (both have m = 0.5)

**Perpendicular Lines (Extension):**
- Perpendicular lines have gradients that multiply to give -1
- If m₁ × m₂ = -1, the lines are perpendicular
- Example: y = 2x + 1 and y = -0.5x + 3 are perpendicular
  (because 2 × -0.5 = -1)
          `,

          availableTools: ['functionGraph']
        }
      ]
    },

    learningObjectives: [
      'Master the two-step method for finding equations from two points',
      'Understand and apply the concept of parallel lines',
      'Write equations of lines parallel to given lines',
      'Verify equations using point substitution',
      'Connect algebraic and geometric properties of lines'
    ],

    keyFormulas: `
**Two-Point Method:**
1. Find m: m = (y₂ - y₁)/(x₂ - x₁)
2. Find c: Substitute into y = mx + c and solve

**Parallel Lines:**
- Same gradient (m₁ = m₂)
- Different y-intercepts (c₁ ≠ c₂)

**Perpendicular Lines:**
- Gradients multiply to -1 (m₁ × m₂ = -1)
    `
  },

  // ============================================
  // SUBTOPIC 5: Graphing Linear Equations
  // ============================================

  's2-math-linear-graphs-graphing': {
    displayName: 'Graphing Linear Equations',
    topicName: 'Linear Graphs and Equations',

    progressionStructure: {
      sections: [
        {
          id: 'table-of-values-method',
          title: 'Table of Values Method',
          difficulty: 'intermediate',
          prerequisites: ['gradient-intercept-form'],
          masterySignals: 'Student correctly creates table of values and plots corresponding points in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct tables with accurate calculations',
                'Plots all points correctly'
              ],
              qualitative: [
                'Chooses appropriate x-values (simple numbers)',
                'Substitutes correctly into equation to find y',
                'Creates organized table with x and y columns',
                'Plots all points accurately on coordinate plane',
                'Draws straight line through points with ruler',
                'Extends line beyond plotted points appropriately'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct tables with occasional calculation errors',
                'Plots most points correctly'
              ],
              qualitative: [
                'Sometimes makes arithmetic errors finding y-values',
                'Forgets to include x = 0 for easy y-intercept check',
                'Plots points but line is slightly off',
                'Needs prompting to use ruler for straight line',
                'Doesn\'t extend line far enough'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot create accurate table without help',
                'Makes multiple calculation errors',
                'Plots points incorrectly'
              ],
              qualitative: [
                'Does not know how to substitute x-values',
                'Chooses inappropriate or complex x-values',
                'Cannot organize information in table format',
                'Plots points in wrong locations',
                'Draws curved or jagged line instead of straight',
                'Cannot connect table values to coordinate points'
              ]
            }
          },

          learningObjectives: [
            'Create a table of values for a given equation',
            'Choose appropriate x-values for the table',
            'Calculate corresponding y-values accurately',
            'Plot points from the table on a coordinate plane',
            'Draw a straight line through the plotted points'
          ],

          relevantFormulas: `
**Table of Values Method:**

**Steps:**
1. Choose 3-5 x-values (include 0 for easy checking)
2. Substitute each x into the equation to find y
3. Create a table with x and y columns
4. Plot each (x, y) point on graph
5. Draw straight line through all points

**Example:** Graph y = 2x + 1

| x  | Calculation | y  |
|----|-------------|----|
| -1 | 2(-1) + 1   | -1 |
|  0 | 2(0) + 1    |  1 |
|  1 | 2(1) + 1    |  3 |
|  2 | 2(2) + 1    |  5 |

Points to plot: (-1, -1), (0, 1), (1, 3), (2, 5)

**Tips:**
- Always include x = 0 (gives y-intercept quickly)
- Choose simple numbers (-2, -1, 0, 1, 2, 3)
- Avoid fractions if possible
- At least 3 points needed, 4-5 is better for accuracy check
          `,

          availableTools: ['functionGraph']
        },

        {
          id: 'gradient-intercept-method',
          title: 'Gradient-Intercept Graphing Method',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['table-of-values-method', 'gradient-intercept-connection'],
          masterySignals: 'Student graphs lines using gradient and y-intercept without needing table of values in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct graphs using m and c method',
                'Accurately represents gradient visually'
              ],
              qualitative: [
                'Plots y-intercept (0, c) as starting point',
                'Uses gradient m = rise/run to find next point',
                'Moves horizontally by run, vertically by rise',
                'Handles fractional gradients correctly',
                'Handles negative gradients correctly (goes down)',
                'Draws accurate line through points',
                'Method is faster than table of values for simple equations'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on using rise/run',
                'Can plot y-intercept but struggles with gradient steps'
              ],
              qualitative: [
                'Sometimes confuses rise and run',
                'Forgets which direction to move for negative gradient',
                'Makes errors with fractional gradients',
                'Needs to fall back on table of values',
                'Understands concept but execution is imprecise'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot use method without full demonstration',
                'Plots y-intercept but cannot use gradient',
                'Produces inaccurate graph'
              ],
              qualitative: [
                'Does not understand how to use gradient to find points',
                'Cannot connect m = rise/run to movement on graph',
                'Always relies on table of values',
                'Plots points randomly instead of using gradient',
                'Cannot work with negative or fractional gradients'
              ]
            }
          },

          learningObjectives: [
            'Use y-intercept as starting point for graphing',
            'Apply rise and run from gradient to find additional points',
            'Graph lines efficiently without full table of values',
            'Handle fractional and negative gradients correctly',
            'Choose the most efficient graphing method'
          ],

          relevantFormulas: `
**Gradient-Intercept Method:**

**Steps:**
1. Plot the y-intercept (0, c) on the y-axis
2. Use the gradient m = rise/run to find next point:
   - From y-intercept, move horizontally (run)
   - Then move vertically (rise)
3. Plot the new point
4. Draw line through the two points

**Example:** Graph y = 2x + 3

1. Plot y-intercept: (0, 3)
2. Gradient m = 2 = 2/1 (rise = 2, run = 1)
3. From (0, 3): move right 1, up 2 → (1, 5)
4. Draw line through (0, 3) and (1, 5)

**Negative Gradient Example:** y = -3x + 4

1. Plot: (0, 4)
2. m = -3 = -3/1 (rise = -3, run = 1)
3. From (0, 4): move right 1, down 3 → (1, 1)
4. Draw line

**Fractional Gradient:** y = (1/2)x + 2

1. Plot: (0, 2)
2. m = 1/2 (rise = 1, run = 2)
3. From (0, 2): move right 2, up 1 → (2, 3)
4. Draw line

**When to use this method:**
- Best for simple equations already in y = mx + c form
- Fast and efficient
- Requires good understanding of gradient
          `,

          availableTools: ['functionGraph']
        },

        {
          id: 'graphing-special-cases',
          title: 'Graphing Special Cases',
          difficulty: 'advanced',
          prerequisites: ['gradient-intercept-method'],
          masterySignals: 'Student correctly graphs horizontal and vertical lines in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct graphs of horizontal or vertical lines',
                'Can write equations for horizontal and vertical lines'
              ],
              qualitative: [
                'Understands horizontal lines have form y = c (gradient = 0)',
                'Understands vertical lines have form x = a (undefined gradient)',
                'Graphs horizontal lines as parallel to x-axis',
                'Graphs vertical lines as parallel to y-axis',
                'Can identify these special forms from equations',
                'Knows these lines have constant x or y values'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about horizontal vs vertical',
                'Can graph but confuses the two types'
              ],
              qualitative: [
                'Sometimes draws horizontal when should be vertical or vice versa',
                'Forgets which axis the line is parallel to',
                'Needs prompting about constant values',
                'Can graph but struggles to write equations',
                'Confuses y = 3 with x = 3'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot graph special cases without demonstration',
                'Draws slanted lines instead of horizontal/vertical',
                'Cannot distinguish between the two forms'
              ],
              qualitative: [
                'Does not understand what y = c or x = a means',
                'Thinks all lines must be slanted',
                'Cannot identify constant values in equations',
                'Tries to find gradient and y-intercept for vertical lines',
                'Completely confused by these special cases'
              ]
            }
          },

          learningObjectives: [
            'Understand and graph horizontal lines (y = c)',
            'Understand and graph vertical lines (x = a)',
            'Identify these special forms from equations',
            'Write equations for horizontal and vertical lines',
            'Recognize gradient properties (0 and undefined)'
          ],

          relevantFormulas: `
**Special Cases:**

**1. Horizontal Lines:**
- Form: y = c (where c is a constant)
- Gradient: m = 0
- Parallel to x-axis
- All points have the same y-coordinate
- Examples:
  * y = 3 (line through all points with y = 3)
  * y = -2 (line through all points with y = -2)
  * y = 0 (the x-axis itself)

**2. Vertical Lines:**
- Form: x = a (where a is a constant)
- Gradient: undefined (division by zero)
- Parallel to y-axis
- All points have the same x-coordinate
- Examples:
  * x = 5 (line through all points with x = 5)
  * x = -1 (line through all points with x = -1)
  * x = 0 (the y-axis itself)

**Important:**
- Horizontal lines cross the y-axis (have y-intercept)
- Vertical lines do NOT cross the y-axis (no y-intercept)
- Vertical lines cross the x-axis (have x-intercept)
- Horizontal lines may or may not cross the x-axis

**Remember:**
- y = [number] → HORIZONTAL
- x = [number] → VERTICAL
          `,

          availableTools: ['functionGraph']
        }
      ]
    },

    learningObjectives: [
      'Master table of values method for graphing',
      'Use gradient-intercept method efficiently',
      'Graph horizontal and vertical lines correctly',
      'Choose appropriate graphing method for different equations',
      'Produce accurate graphs of all linear equations'
    ],

    keyFormulas: `
**Table of Values:**
1. Choose x-values
2. Calculate y-values
3. Plot points
4. Draw line

**Gradient-Intercept Method:**
1. Plot (0, c)
2. Use m = rise/run to find next point
3. Draw line

**Special Cases:**
- Horizontal: y = c (m = 0)
- Vertical: x = a (m = undefined)
    `
  },

  // ============================================
  // SUBTOPIC 6: Introduction to Simultaneous Equations
  // ============================================

  's2-math-linear-graphs-simultaneous-intro': {
    displayName: 'Introduction to Simultaneous Equations',
    topicName: 'Linear Graphs and Equations',

    progressionStructure: {
      sections: [
        {
          id: 'understanding-simultaneous-equations',
          title: 'What are Simultaneous Equations?',
          difficulty: 'intermediate',
          prerequisites: ['gradient-intercept-form'],
          masterySignals: 'Student understands that solution must satisfy both equations and can verify solutions in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct verifications of whether a point is a solution',
                'Can check both equations systematically'
              ],
              qualitative: [
                'Understands simultaneous means "at the same time"',
                'Knows solution (x, y) must satisfy both equations',
                'Substitutes values correctly into both equations',
                'Recognizes when a point is NOT a solution if it fails either equation',
                'Can explain why both conditions must be met',
                'Understands systems can have one solution, no solution, or infinite solutions'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about checking both equations',
                'Sometimes forgets to check second equation'
              ],
              qualitative: [
                'Understands concept but forgets to check both equations',
                'Makes substitution errors',
                'Checks first equation correctly but makes errors in second',
                'Needs prompting to verify completely',
                'Gets confused about what "simultaneous" means'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot verify solutions without full guidance',
                'Thinks checking one equation is enough',
                'Makes consistent substitution errors'
              ],
              qualitative: [
                'Does not understand concept of simultaneous equations',
                'Thinks each equation has its own separate solution',
                'Cannot substitute coordinates into equations',
                'Does not understand why we need two equations',
                'Confuses the solution with other concepts'
              ]
            }
          },

          learningObjectives: [
            'Understand the meaning of "simultaneous" equations',
            'Verify that a point satisfies both equations',
            'Substitute coordinates correctly into equations',
            'Recognize that solution must work for both equations',
            'Understand real-world contexts requiring simultaneous equations'
          ],

          relevantFormulas: `
**Simultaneous Equations:**

A system of two equations with two unknowns (x and y).
The solution is the pair (x, y) that makes BOTH equations true.

**Example System:**
x + y = 5
x - y = 1

**Solution:** (3, 2)

**Verification:**
Equation 1: 3 + 2 = 5 ✓
Equation 2: 3 - 2 = 1 ✓

Both equations are satisfied, so (3, 2) is the solution!

**Real-World Example:**
Ali buys 2 pens and 3 pencils for $11
Ben buys 4 pens and 1 pencil for $13

Let p = price of pen, c = price of pencil
2p + 3c = 11 ... (Ali's purchase)
4p + c = 13  ... (Ben's purchase)

We need values of p and c that satisfy BOTH equations simultaneously.
          `,

          availableTools: ['simultaneousEquationsSolver']
        },

        {
          id: 'graphical-solution-method',
          title: 'The Graphical Solution Method',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['understanding-simultaneous-equations', 'graphing-linear-equations'],
          masterySignals: 'Student can solve simultaneous equations by graphing both lines and finding intersection in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct solutions found graphically',
                'Accurately graphs both equations and finds intersection'
              ],
              qualitative: [
                'Graphs both equations correctly on same axes',
                'Identifies intersection point accurately',
                'Reads coordinates of intersection correctly',
                'Understands that intersection = solution',
                'Verifies solution by substituting into both equations',
                'Can explain why intersection point satisfies both equations',
                'Recognizes when lines are parallel (no solution)'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on graphing or reading intersection',
                'Graphs correctly but struggles to read intersection accurately'
              ],
              qualitative: [
                'Makes errors graphing one or both equations',
                'Finds approximate intersection but not exact coordinates',
                'Forgets to verify solution',
                'Needs prompting to check answer makes sense',
                'Struggles when intersection is not at integer coordinates',
                'Does not understand why intersection is the solution'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot graph equations accurately',
                'Cannot identify intersection point',
                'Reads wrong coordinates from graph'
              ],
              qualitative: [
                'Graphs lines incorrectly or on separate axes',
                'Does not know what to look for (intersection)',
                'Cannot read coordinates from graph',
                'Does not connect graphical intersection to algebraic solution',
                'Cannot explain why method works',
                'Thinks any point on either line is the solution'
              ]
            }
          },

          learningObjectives: [
            'Graph both equations on the same coordinate plane',
            'Identify the intersection point of two lines',
            'Read coordinates of intersection accurately',
            'Understand intersection as the solution',
            'Verify graphical solution algebraically',
            'Recognize cases with no solution (parallel lines)'
          ],

          relevantFormulas: `
**Graphical Method Steps:**

1. Rearrange both equations into y = mx + c form (if needed)
2. Graph the first equation on coordinate plane
3. Graph the second equation on the SAME axes
4. Find where the lines intersect
5. Read the (x, y) coordinates of the intersection point
6. Check your answer by substituting into both original equations

**Example:**
Solve: y = x + 1
       y = -x + 5

1. Both already in y = mx + c form
2. Graph y = x + 1 (m=1, c=1)
3. Graph y = -x + 5 (m=-1, c=5)
4. Lines intersect at (2, 3)
5. Solution: x = 2, y = 3

Check:
y = x + 1: 3 = 2 + 1 ✓
y = -x + 5: 3 = -2 + 5 ✓

**Why It Works:**
- Each line shows all points that satisfy one equation
- The intersection point lies on BOTH lines
- Therefore it satisfies BOTH equations
- This is exactly what we're looking for!

**Special Cases:**
- Parallel lines (same gradient): No solution (never intersect)
- Same line (identical equations): Infinite solutions (every point on the line)
          `,

          availableTools: ['simultaneousEquationsSolver', 'functionGraph']
        }
      ]
    },

    learningObjectives: [
      'Understand the concept of simultaneous equations',
      'Verify solutions by substitution',
      'Solve systems graphically by finding intersection',
      'Interpret graphical solutions',
      'Recognize special cases (parallel lines, coincident lines)'
    ],

    keyFormulas: `
**Simultaneous Equations:**
Two equations, two unknowns
Solution (x, y) must satisfy BOTH

**Graphical Method:**
1. Graph both equations
2. Find intersection point
3. Read (x, y) coordinates
4. Verify by substitution

**Special Cases:**
- Parallel lines: No solution
- Same line: Infinite solutions
- Intersecting lines: One unique solution
    `
  },

  // ============================================
  // SUBTOPIC 7: Algebraic Methods for Simultaneous Equations
  // ============================================

  's2-math-linear-graphs-simultaneous-algebraic': {
    displayName: 'Algebraic Methods for Simultaneous Equations',
    topicName: 'Linear Graphs and Equations',

    progressionStructure: {
      sections: [
        {
          id: 'substitution-method',
          title: 'The Substitution Method',
          difficulty: 'advanced',
          prerequisites: ['graphical-solution-method'],
          masterySignals: 'Student solves simultaneous equations using substitution method with 4-5 steps correctly in 3+ problems',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct solutions using substitution',
                'Completes all steps systematically'
              ],
              qualitative: [
                'Identifies which equation to use for substitution (one variable already isolated)',
                'Correctly expresses one variable in terms of the other',
                'Substitutes expression into the other equation correctly',
                'Solves resulting single-variable equation',
                'Substitutes back to find second variable',
                'Checks solution in both original equations',
                'Works systematically through 5 steps'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on substitution process',
                'Can start but makes errors in middle steps'
              ],
              qualitative: [
                'Struggles to choose which variable to isolate',
                'Makes errors when substituting (missing brackets)',
                'Can solve for one variable but forgets to find the other',
                'Makes arithmetic errors when simplifying',
                'Forgets to check answer',
                'Needs prompting to complete all steps'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot use method without full step-by-step guidance',
                'Gets stuck after first step',
                'Makes errors at every step'
              ],
              qualitative: [
                'Does not understand the substitution concept',
                'Cannot express one variable in terms of the other',
                'Makes bracketing errors consistently',
                'Cannot solve the resulting equation',
                'Does not know what to do after finding first variable',
                'No systematic approach to the problem'
              ]
            }
          },

          learningObjectives: [
            'Identify when substitution method is most efficient',
            'Express one variable in terms of the other',
            'Substitute correctly into the second equation',
            'Solve for one variable systematically',
            'Find the second variable by back-substitution',
            'Verify the complete solution'
          ],

          relevantFormulas: `
**Substitution Method - 5 Steps:**

**Step 1:** Choose equation with variable already isolated (or easy to isolate)
**Step 2:** Substitute this expression into the other equation
**Step 3:** Solve the resulting equation for one variable
**Step 4:** Substitute back to find the other variable
**Step 5:** Check solution in both original equations

**Example:**
Solve: y = 2x + 1  ... (1)
       3x + y = 11 ... (2)

Step 1: y is already expressed in terms of x in equation (1)
        y = 2x + 1

Step 2: Substitute (2x + 1) for y in equation (2)
        3x + (2x + 1) = 11

Step 3: Solve for x
        5x + 1 = 11
        5x = 10
        x = 2

Step 4: Substitute x = 2 into equation (1)
        y = 2(2) + 1
        y = 5

Step 5: Check in both equations
        Eq (1): 5 = 2(2) + 1 = 5 ✓
        Eq (2): 3(2) + 5 = 11 ✓

**Solution: x = 2, y = 5**

**When to use substitution:**
- One variable already isolated (like y = 2x + 1)
- One variable has coefficient of 1 (easy to isolate)
- One equation is simple to rearrange

**Common Errors to Avoid:**
- Forgetting brackets when substituting: 3x + 2x + 1 ❌ should be 3x + (2x + 1) ✓
- Finding one variable but not the other
- Not checking the solution
          `,

          availableTools: ['simultaneousEquationsSolver']
        },

        {
          id: 'elimination-method',
          title: 'The Elimination Method',
          difficulty: 'advanced',
          prerequisites: ['substitution-method'],
          masterySignals: 'Student solves simultaneous equations using elimination by adding or subtracting equations in 3+ problems',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct solutions using elimination',
                'Can handle both direct elimination and cases requiring multiplication'
              ],
              qualitative: [
                'Identifies which variable to eliminate',
                'Recognizes when coefficients already match (direct elimination)',
                'Can multiply equation(s) to make coefficients match',
                'Correctly adds or subtracts equations to eliminate variable',
                'Solves for remaining variable',
                'Substitutes to find second variable',
                'Checks solution thoroughly',
                'Chooses elimination over substitution when more efficient'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints on which variable to eliminate',
                'Can do direct elimination but struggles with multiplication cases'
              ],
              qualitative: [
                'Sometimes eliminates wrong variable or uses wrong operation',
                'Makes errors when multiplying equations',
                'Forgets to multiply all terms',
                'Makes sign errors when subtracting equations',
                'Can eliminate but makes errors solving afterward',
                'Needs prompting to check which operation (add/subtract) to use'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot use method without complete demonstration',
                'Confuses elimination with substitution',
                'Makes errors at every step'
              ],
              qualitative: [
                'Does not understand the elimination concept',
                'Cannot identify matching coefficients',
                'Does not know when to add vs subtract',
                'Makes errors multiplying equations',
                'Cannot solve after elimination step',
                'Completely confused by the method'
              ]
            }
          },

          learningObjectives: [
            'Identify when elimination method is most efficient',
            'Make coefficients of one variable equal by multiplication',
            'Add or subtract equations to eliminate a variable',
            'Solve the resulting single-variable equation',
            'Find the second variable by substitution',
            'Choose between substitution and elimination methods'
          ],

          relevantFormulas: `
**Elimination Method:**

**Basic Idea:** Add or subtract equations to eliminate one variable

**Case 1: Direct Elimination (coefficients already match)**

Example:
x + y = 8   ... (1)
x - y = 2   ... (2)

Add equations to eliminate y:
  x + y = 8
+ x - y = 2
-----------
  2x    = 10
  x = 5

Substitute x = 5 into (1):
5 + y = 8
y = 3

**Solution: x = 5, y = 3**

**Case 2: Multiplication Required**

Example:
2x + 3y = 16 ... (1)
x + y = 6    ... (2)

Multiply (2) by 2 to match x-coefficients:
2x + 2y = 12 ... (2')

Subtract (2') from (1):
  2x + 3y = 16
- 2x + 2y = 12
--------------
       y = 4

Substitute y = 4 into (2):
x + 4 = 6
x = 2

**Solution: x = 2, y = 4**

**When to Use Elimination:**
- Coefficients already match or easy to make match
- Both equations in standard form (ax + by = c)
- Neither variable is already isolated
- Substitution would create messy fractions

**Steps:**
1. Look for matching coefficients (or make them match by multiplying)
2. Decide: Add (if signs opposite) or Subtract (if signs same) to eliminate
3. Solve for the remaining variable
4. Substitute to find the eliminated variable
5. Check in both original equations

**Adding vs Subtracting:**
- Same signs → Subtract to eliminate
  (2x + 3y and 2x + y → subtract)
- Opposite signs → Add to eliminate
  (3x + 2y and 3x - y → add)
          `,

          availableTools: ['simultaneousEquationsSolver']
        },

        {
          id: 'choosing-methods',
          title: 'Choosing the Best Method',
          difficulty: 'advanced',
          prerequisites: ['substitution-method', 'elimination-method'],
          masterySignals: 'Student selects appropriate method (graphical, substitution, or elimination) and justifies choice in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct method choices with successful solutions',
                'Solves efficiently using chosen method'
              ],
              qualitative: [
                'Chooses graphical when visual understanding is important or exact answer not critical',
                'Chooses substitution when one variable is already isolated',
                'Chooses elimination when coefficients match or are easy to match',
                'Can justify method selection with reasoning',
                'Solves correctly regardless of method chosen',
                'Recognizes when one method is significantly easier than others',
                'Flexible in switching methods if needed'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct method choices with hints',
                'Can solve once method is chosen but struggles with selection'
              ],
              qualitative: [
                'Sometimes chooses inefficient method but can still solve',
                'Needs prompting to consider different methods',
                'Has favorite method and always tries it first',
                'Cannot articulate why one method is better',
                'Makes good choice with guidance'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot choose appropriate method',
                'Tries wrong method repeatedly',
                'Cannot complete solution with any method'
              ],
              qualitative: [
                'Does not understand differences between methods',
                'Uses methods randomly without reasoning',
                'Cannot complete any method successfully',
                'Confused about when to use each approach',
                'No strategic thinking about method selection'
              ]
            }
          },

          learningObjectives: [
            'Compare advantages of graphical, substitution, and elimination methods',
            'Select the most efficient method for a given system',
            'Justify method choice with mathematical reasoning',
            'Solve flexibly using multiple methods',
            'Recognize when to switch methods'
          ],

          relevantFormulas: `
**Method Selection Guide:**

**1. Graphical Method**
Use when:
- Visual understanding is the goal
- Approximate answer is acceptable
- Equations are simple to graph
- Teaching/demonstrating the concept

Advantages:
- Visual representation of solution
- Easy to see if solution exists
- Good for understanding

Disadvantages:
- May not give exact answer
- Time-consuming for complex equations
- Accuracy depends on graph quality

**2. Substitution Method**
Use when:
- One variable already isolated (y = 2x + 1)
- One variable has coefficient of 1
- One equation is simple

Advantages:
- Systematic approach
- Good when one equation is already simplified
- Always gives exact answer

Disadvantages:
- Can create messy fractions
- More steps if no variable is isolated

**3. Elimination Method**
Use when:
- Coefficients already match or easy to match
- Both equations in standard form
- No variable is isolated
- Substitution would be messy

Advantages:
- Often fastest method
- Clean arithmetic when coefficients match well
- Good for equations with similar structure

Disadvantages:
- Requires multiplying equations sometimes
- Need to be careful with signs

**Decision Tree:**
1. Is one variable already isolated? → **Substitution**
2. Do coefficients match or easily match? → **Elimination**
3. Need visual understanding? → **Graphical**
4. Not sure? Try the method you're most comfortable with!

**Example Scenarios:**

System: y = x + 3, 2x + y = 9
→ **Substitution** (y already isolated)

System: 3x + 2y = 12, 3x - y = 3
→ **Elimination** (3x coefficients match)

System: y = 2x - 1, y = -x + 5
→ **Graphical** or **Substitution** (both easy to graph, or set equal)
          `,

          availableTools: ['simultaneousEquationsSolver', 'functionGraph']
        }
      ]
    },

    learningObjectives: [
      'Master the substitution method for simultaneous equations',
      'Master the elimination method',
      'Choose the most efficient solution method',
      'Solve any system of linear equations algebraically',
      'Verify solutions and check for special cases'
    ],

    keyFormulas: `
**Substitution Method:**
1. Isolate one variable
2. Substitute into other equation
3. Solve for one variable
4. Substitute back for other
5. Check solution

**Elimination Method:**
1. Make coefficients match
2. Add or subtract equations
3. Solve for remaining variable
4. Substitute to find other
5. Check solution

**Method Selection:**
- Variable isolated? → Substitution
- Coefficients match? → Elimination
- Need visual? → Graphical
    `
  }

};

// ============================================
// GLOBAL TOPIC CONFIGURATION
// ============================================

export const S2_LINEAR_GRAPHS_CONFIG = {
  id: 's2-linear-graphs',
  displayName: 'Linear Graphs and Simultaneous Equations',
  description: 'Master linear graphs, equations, and simultaneous equation systems',
  grade: 'Secondary 2',
  subject: 'Mathematics',

  subtopics: Object.keys(LINEAR_GRAPHS_SUBTOPICS) as LinearGraphsTopicId[],

  tutorCustomization: LINEAR_GRAPHS_TUTOR_CUSTOMIZATION,
  availableTools: LINEAR_GRAPHS_MATH_TOOLS,

  estimatedDuration: {
    perSubtopic: '45-60 minutes',
    total: '5-7 hours'
  }
};
