/**
 * S1 Mathematics - Linear Functions and Graphs Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 *
 * Coverage: Cartesian Coordinates, Function Concept, Linear Functions & Graphs, Gradient
 */

// Type exports
export type LinearFunctionsTopicId =
  | 's1-math-linear-functions-cartesian-coordinates'
  | 's1-math-linear-functions-function-concept'
  | 's1-math-linear-functions-linear-graphs'
  | 's1-math-linear-functions-gradient';

// Topic-specific tutor customization (overrides base)
export const LINEAR_FUNCTIONS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Linear Functions and Graphs.

Teaching Approach:
- Guide students to discover coordinate relationships and linear patterns through questioning
- Help students understand functions as input-output machines with exact one-to-one mapping
- Use real-world contexts (distance-time, cost, temperature, speed) to make graphs meaningful
- Celebrate insights when students connect tables, graphs, and equations
- Address common misconceptions explicitly (order in coordinates, gradient as "steepness", y-intercept meaning)
- Adapt difficulty organically based on student mastery
- Use the gradientVisualizer tool to show rise/run triangle method visually

**Common Misconceptions to Address:**
- Confusing (x, y) with (y, x) - order matters in ordered pairs!
- Thinking all functions are linear
- Not understanding that each input must have exactly ONE output for functions
- Confusing gradient (slope) with y-intercept
- Thinking horizontal lines have undefined gradient (they have gradient = 0)
- Thinking vertical lines have gradient = 0 (they have undefined gradient)
- Adding gradients directly when lines aren't parallel
- Forgetting that gradient represents rate of change in real contexts

**Text-to-Speech Guidelines:**
- Say "x-coordinate" and "y-coordinate" clearly, not "x-value" when referring to positions
- Say "gradient" or "slope" - pronounce clearly as "GRAY-dee-ent"
- For ordered pairs: say "the point with x-coordinate 3 and y-coordinate 5" or "the point three comma five"
- Say "y equals m x plus c" for y = mx + c
- Spell out "rise over run" clearly
- Avoid symbols in speech: say "percent" not "%", say "degrees" not "°"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name (e.g., "cartesianPlane") in the toolName field, NOT the display name.

Available tools:
- "cartesianPlane": Plot points, draw lines, show coordinate plane, visualize functions
- "functionGraph": Graph linear functions, show y = mx + c, multiple functions on same axes
- "gradientVisualizer": Show gradient calculation with rise/run triangle, visualize positive/negative/zero/undefined gradients
- "numberLine": Display single-axis concepts, introduce coordinates

When to use gradientVisualizer:
- Teaching gradient calculation (rise over run)
- Showing positive vs negative gradients visually
- Demonstrating horizontal (gradient = 0) and vertical (undefined) lines
- Explaining gradient as rate of change
- Any problem asking students to calculate or understand gradient`
};

// Available math tools for this topic
export const LINEAR_FUNCTIONS_MATH_TOOLS = [
  "cartesianPlane",
  "functionGraph",
  "gradientVisualizer",
  "numberLine"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S1_LINEAR_FUNCTIONS_SUBTOPICS = {

  // ========================================
  // SUBTOPIC 1: CARTESIAN COORDINATES
  // ========================================
  's1-math-linear-functions-cartesian-coordinates': {
    displayName: 'Cartesian Coordinates',
    topicName: 'cartesian coordinates',

    progressionStructure: {
      sections: [
        {
          id: "understanding-coordinate-system",
          title: "Understanding the Coordinate System",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies quadrants, understands ordered pairs, and recognizes that order matters in coordinates in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct answers without hints",
                "Consistent accuracy identifying quadrants",
                "No errors in ordered pair notation"
              ],
              qualitative: [
                "Correctly identifies all four quadrants and their sign conventions [(+,+), (-,+), (-,-), (+,-)]",
                "Understands that (a, b) is NOT the same as (b, a) unless a = b",
                "Recognizes origin as (0, 0) and that it belongs to no quadrant",
                "Knows points on axes do not belong to any quadrant",
                "Explains x-coordinate is horizontal position, y-coordinate is vertical position",
                "Can determine which quadrant a point lies in given its coordinates"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about quadrant signs",
                "Occasional confusion about order in coordinates"
              ],
              qualitative: [
                "Can identify quadrants once reminded of sign patterns",
                "Sometimes confuses x and y coordinates",
                "Needs prompting to remember origin is (0, 0)",
                "Understands concept but makes notation errors",
                "Requires guidance on points lying on axes"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect quadrant identifications",
                "Cannot write ordered pairs correctly",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand quadrant numbering or sign conventions",
                "Writes (y, x) instead of (x, y) consistently",
                "Cannot identify x-coordinate vs y-coordinate",
                "Does not recognize that order matters in ordered pairs",
                "Confuses horizontal (x-axis) with vertical (y-axis)",
                "Cannot locate origin or understand its significance"
              ]
            }
          },
          learningObjectives: [
            "Define the Cartesian coordinate system with perpendicular axes",
            "Identify and name the four quadrants with correct sign conventions",
            "Understand ordered pair notation (x, y) and why order matters",
            "Locate and label the origin (0, 0)",
            "Recognize that points on axes belong to no quadrant",
            "Determine which quadrant a point lies in given its coordinates"
          ],
          relevantFormulas: [
            "Ordered pair: P(x, y) where x = horizontal position, y = vertical position",
            "Origin: O(0, 0) - where axes intersect",
            "Quadrant I: (+, +) - both coordinates positive",
            "Quadrant II: (-, +) - x negative, y positive",
            "Quadrant III: (-, -) - both coordinates negative",
            "Quadrant IV: (+, -) - x positive, y negative"
          ],
          availableTools: ["cartesianPlane", "numberLine"]
        },
        {
          id: "plotting-reading-points",
          title: "Plotting and Reading Points",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["understanding-coordinate-system"],
          masterySignals: "Student accurately plots points from coordinates and reads coordinates from plotted points with different scales in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct plotting/reading tasks without hints",
                "Handles different scales correctly",
                "No errors with negative coordinates"
              ],
              qualitative: [
                "Plots points accurately: start at origin, move x units horizontally, then y units vertically",
                "Reads coordinates correctly from graphs with varying scales",
                "Recognizes and handles different scales on x and y axes",
                "Works confidently with negative coordinates in all quadrants",
                "Explains the process: 'From origin, move x right/left, then y up/down'",
                "Can plot and identify points on or near axes correctly"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on process or scale",
                "Occasional errors with negative values or scale reading"
              ],
              qualitative: [
                "Plots points but sometimes reverses x and y movements",
                "Can plot with guidance on which direction to move",
                "Struggles with non-standard scales without prompting",
                "Makes errors with negative coordinates occasionally",
                "Needs reminding to start from origin",
                "Forgets to count carefully on scaled axes"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple plotting/reading errors",
                "Cannot handle different scales",
                "Requests solution or full walkthrough"
              ],
              qualitative: [
                "Does not follow correct plotting procedure (origin → x → y)",
                "Cannot read scales correctly (counts grid squares instead of reading scale values)",
                "Confuses horizontal movement (x) with vertical movement (y)",
                "Makes consistent errors with negative coordinates (wrong direction)",
                "Does not understand that x and y axes can have different scales",
                "Plots points randomly without systematic approach"
              ]
            }
          },
          learningObjectives: [
            "Plot points accurately on the coordinate plane using ordered pairs",
            "Read coordinates of plotted points correctly",
            "Handle different scales on x-axis and y-axis",
            "Work confidently with negative coordinates",
            "Explain the plotting process step-by-step",
            "Apply coordinate skills to geometric shapes (rectangles, triangles)"
          ],
          relevantFormulas: [
            "Plotting process: Start at (0,0) → Move x units horizontally → Move y units vertically",
            "Right = positive x, Left = negative x",
            "Up = positive y, Down = negative y",
            "Distance between points on same axis:",
            "  Horizontal distance: |x₂ - x₁| (same y-value)",
            "  Vertical distance: |y₂ - y₁| (same x-value)"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "coordinate-transformations",
          title: "Coordinate Transformations",
          difficulty: "intermediate",
          prerequisites: ["understanding-coordinate-system", "plotting-reading-points"],
          masterySignals: "Student correctly calculates new coordinates after translations and reflections in 2+ multi-step problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct transformation calculations",
                "Handles combined transformations correctly",
                "No sign errors in reflections"
              ],
              qualitative: [
                "Correctly applies horizontal movement: (x, y) → (x ± a, y)",
                "Correctly applies vertical movement: (x, y) → (x, y ± b)",
                "Accurately reflects across x-axis: (x, y) → (x, -y)",
                "Accurately reflects across y-axis: (x, y) → (-x, y)",
                "Accurately reflects in origin: (x, y) → (-x, -y)",
                "Can perform multi-step transformations in correct sequence",
                "Explains which coordinate changes for each transformation type"
              ]
            },
            developing: {
              quantitative: [
                "1 correct transformation with hints on sign changes",
                "Makes errors in multi-step transformations"
              ],
              qualitative: [
                "Understands translations but sometimes adds/subtracts incorrectly",
                "Can reflect with guidance on which coordinate changes sign",
                "Struggles with combined transformations without step-by-step prompting",
                "Occasionally confuses horizontal and vertical movements",
                "Needs reminding which reflection affects which coordinate",
                "Makes sign errors when working with negative coordinates"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple transformation errors",
                "Cannot complete multi-step transformations",
                "Requests full solution"
              ],
              qualitative: [
                "Does not understand which coordinate to change for horizontal/vertical movement",
                "Confuses reflections - changes wrong coordinate or both coordinates",
                "Adds when should subtract, or vice versa",
                "Cannot track transformations through multiple steps",
                "Does not recognize that reflections change signs",
                "Randomly modifies coordinates without understanding rules"
              ]
            }
          },
          learningObjectives: [
            "Calculate new coordinates after horizontal translation (left/right)",
            "Calculate new coordinates after vertical translation (up/down)",
            "Perform reflections across the x-axis correctly",
            "Perform reflections across the y-axis correctly",
            "Perform reflections in the origin correctly",
            "Apply multiple transformations in sequence",
            "Explain which transformation affects which coordinate"
          ],
          relevantFormulas: [
            "Horizontal movement (a units right): (x, y) → (x + a, y)",
            "Horizontal movement (a units left): (x, y) → (x - a, y)",
            "Vertical movement (b units up): (x, y) → (x, y + b)",
            "Vertical movement (b units down): (x, y) → (x, y - b)",
            "Reflection in x-axis: (x, y) → (x, -y)",
            "Reflection in y-axis: (x, y) → (-x, y)",
            "Reflection in origin: (x, y) → (-x, -y)"
          ],
          availableTools: ["cartesianPlane"]
        }
      ]
    },

    learningObjectives: [
      "Master the Cartesian coordinate system with all four quadrants",
      "Plot and read points accurately with various scales",
      "Understand ordered pair notation and why order matters",
      "Perform coordinate transformations (translations and reflections)",
      "Apply coordinate geometry to solve practical problems"
    ],

    keyFormulas: `
**Coordinate Basics:**
- Ordered pair: (x, y) where x = horizontal, y = vertical
- Origin: (0, 0)
- Quadrants: I(+,+), II(-,+), III(-,-), IV(+,-)

**Transformations:**
- Horizontal: (x, y) → (x ± a, y)
- Vertical: (x, y) → (x, y ± b)
- Reflect x-axis: (x, y) → (x, -y)
- Reflect y-axis: (x, y) → (-x, y)
- Reflect origin: (x, y) → (-x, -y)
    `
  },

  // ========================================
  // SUBTOPIC 2: CONCEPT OF A FUNCTION
  // ========================================
  's1-math-linear-functions-function-concept': {
    displayName: 'Concept of a Function',
    topicName: 'function concept',

    progressionStructure: {
      sections: [
        {
          id: "understanding-functions",
          title: "Understanding Functions",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies functions vs non-functions and explains the one-to-one mapping requirement in 3+ examples",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct function identifications",
                "Can distinguish functions from non-functions consistently"
              ],
              qualitative: [
                "Correctly defines function: each input has exactly ONE output",
                "Identifies functions in various contexts (machines, tables, real-world)",
                "Explains why certain relationships are NOT functions (one input → multiple outputs)",
                "Understands function as input-output machine with a rule",
                "Recognizes independent variable (input/x) and dependent variable (output/y)",
                "Can give examples and non-examples of functions"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct identifications with hints about one-to-one rule",
                "Occasional confusion about what makes a function"
              ],
              qualitative: [
                "Understands basic concept once reminded of 'one input → one output' rule",
                "Can identify obvious functions but struggles with edge cases",
                "Needs prompting to check if each input has exactly one output",
                "Sometimes confuses independent and dependent variables",
                "Can identify functions in simple contexts with guidance"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect identifications",
                "Cannot explain function definition",
                "Requests full explanation"
              ],
              qualitative: [
                "Does not understand that each input must have exactly one output",
                "Cannot distinguish functions from non-functions even with examples",
                "Thinks any relationship between quantities is a function",
                "Confuses 'function' with 'formula' or 'equation'",
                "Cannot identify input vs output in context",
                "Does not grasp the 'machine' analogy"
              ]
            }
          },
          learningObjectives: [
            "Define a function as a relationship where each input has exactly one output",
            "Identify the independent variable (input) and dependent variable (output)",
            "Recognize functions in various representations",
            "Distinguish between functions and non-functions",
            "Explain the function machine concept (input → rule → output)",
            "Give real-world examples of functions"
          ],
          relevantFormulas: [
            "Function definition: Each input (x) has exactly ONE output (y)",
            "Function machine: Input → Rule → Output",
            "Independent variable: x (input, what you control)",
            "Dependent variable: y (output, depends on input)",
            "Not a function if: one input gives multiple different outputs"
          ],
          availableTools: []
        },
        {
          id: "function-representations",
          title: "Representations of Functions",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["understanding-functions"],
          masterySignals: "Student successfully converts functions between at least 3 different representations (words, table, graph, equation) in 2+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ successful conversions between different representations",
                "Creates accurate tables and ordered pairs"
              ],
              qualitative: [
                "Converts verbal descriptions to equations correctly",
                "Creates accurate value tables from function rules",
                "Writes ordered pairs in correct (x, y) format",
                "Can plot function points on coordinate plane",
                "Recognizes that all four representations show the same relationship",
                "Moves fluently between representations: statement ↔ table ↔ graph ↔ equation",
                "Identifies patterns in tables to write equations"
              ]
            },
            developing: {
              quantitative: [
                "1 correct conversion with hints",
                "Makes errors in table creation or plotting"
              ],
              qualitative: [
                "Can create tables once reminded of the function rule",
                "Understands representations but struggles to convert between them",
                "Makes calculation errors when filling in tables",
                "Can plot points but doesn't connect to function concept",
                "Needs guidance to identify patterns and write equations",
                "Sometimes forgets ordered pair format"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot convert between representations",
                "Multiple errors in tables or graphs",
                "Requests full solution"
              ],
              qualitative: [
                "Cannot translate verbal descriptions into any other form",
                "Makes random entries in value tables instead of using rule",
                "Does not understand ordered pair notation",
                "Cannot plot points or doesn't see connection to function",
                "Cannot identify patterns in tables",
                "Confuses different representations as separate concepts"
              ]
            }
          },
          learningObjectives: [
            "Represent functions in four ways: words, tables, graphs, equations",
            "Convert verbal descriptions to algebraic equations",
            "Create value tables from function rules",
            "Write ordered pairs to represent function values",
            "Plot function points on a coordinate plane",
            "Recognize patterns in tables and write corresponding equations",
            "Understand that all representations show the same relationship"
          ],
          relevantFormulas: [
            "Four representations: Statement, Table, Graph, Equation",
            "Ordered pair: (input, output) = (x, y)",
            "Table shows corresponding x and y values",
            "Graph plots ordered pairs on coordinate plane",
            "Equation relates x to y algebraically"
          ],
          availableTools: ["cartesianPlane", "functionGraph"]
        },
        {
          id: "function-evaluation",
          title: "Function Evaluation and Applications",
          difficulty: "intermediate",
          prerequisites: ["understanding-functions", "function-representations"],
          masterySignals: "Student correctly evaluates functions in both directions (find y from x, find x from y) and applies to real-world contexts in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct evaluations without hints",
                "Successfully solves both forward (x→y) and backward (y→x) problems"
              ],
              qualitative: [
                "Substitutes x-values into equations correctly to find y",
                "Solves equations for x when given y-value",
                "Applies functions to real-world contexts (temperature, lift floors, cost)",
                "Interprets function results in context correctly",
                "Explains what x and y represent in practical situations",
                "Shows all algebraic steps clearly when solving for unknown"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct evaluations with hints on substitution or solving",
                "Struggles with backward (y→x) problems"
              ],
              qualitative: [
                "Can substitute x-values once reminded of process",
                "Makes algebraic errors when solving for x from y",
                "Understands real-world contexts but makes calculation errors",
                "Needs prompting to interpret results in context",
                "Sometimes forgets what variables represent",
                "Can do forward evaluation but struggles with backward"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple evaluation errors",
                "Cannot solve for x when given y",
                "Requests full solution"
              ],
              qualitative: [
                "Cannot substitute values into equations correctly",
                "Does not know how to solve equations for x",
                "Cannot connect abstract function to real-world context",
                "Makes sign errors or calculation mistakes consistently",
                "Does not understand what 'evaluate the function' means",
                "Cannot interpret function values in practical terms"
              ]
            }
          },
          learningObjectives: [
            "Evaluate functions: substitute x-value to find y (forward)",
            "Solve for x given y-value (backward/inverse evaluation)",
            "Apply functions to real-world contexts",
            "Interpret function values in practical situations",
            "Explain what variables represent in context problems",
            "Show clear algebraic working when evaluating or solving"
          ],
          relevantFormulas: [
            "Forward evaluation: Given x, substitute into y = f(x) to find y",
            "Backward evaluation: Given y, solve equation y = f(x) for x",
            "Example: If y = 2x + 1 and x = 3, then y = 2(3) + 1 = 7",
            "Example: If y = 2x + 1 and y = 11, then 11 = 2x + 1, so x = 5",
            "Always check: Does answer make sense in context?"
          ],
          availableTools: ["functionGraph"]
        }
      ]
    },

    learningObjectives: [
      "Understand functions as input-output relationships with one-to-one mapping",
      "Represent functions in multiple ways (words, tables, graphs, equations)",
      "Evaluate functions in both directions (find output from input, input from output)",
      "Apply function concepts to real-world situations",
      "Recognize that different representations show the same relationship"
    ],

    keyFormulas: `
**Function Definition:**
- Function: Each input has exactly ONE output
- Independent variable (x): Input
- Dependent variable (y): Output

**Representations:**
1. Statement: "Output is 3 more than input"
2. Table: x → y pairs
3. Graph: Plotted points
4. Equation: y = x + 3

**Evaluation:**
- Forward: Given x, find y
- Backward: Given y, find x
    `
  },

  // ========================================
  // SUBTOPIC 3: LINEAR FUNCTIONS AND LINEAR GRAPHS
  // ========================================
  's1-math-linear-functions-linear-graphs': {
    displayName: 'Linear Functions and Linear Graphs',
    topicName: 'linear functions and graphs',

    progressionStructure: {
      sections: [
        {
          id: "identifying-linear-functions",
          title: "Identifying Linear Functions",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies linear functions in form y = mx + c and determines values of m and c in 3+ examples",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of linear/non-linear",
                "Consistently identifies m and c correctly"
              ],
              qualitative: [
                "Recognizes linear function form: y = mx + c where m, c are constants",
                "Identifies which functions are linear and which are not",
                "Correctly identifies m (coefficient of x) and c (constant term)",
                "Understands that graph of linear function is always a straight line",
                "Explains why y = x² is NOT linear (has x²)",
                "Can rewrite equations in y = mx + c form (e.g., y = 10 - 2x → y = -2x + 10)",
                "Recognizes special cases: y = mx (c=0), y = c (m=0)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct identifications with hints about form",
                "Sometimes confuses m and c"
              ],
              qualitative: [
                "Can identify linear functions once reminded of y = mx + c form",
                "Sometimes misidentifies which coefficient is m or c",
                "Needs prompting to recognize special cases (y = mx or y = c)",
                "Struggles with equations not in standard form",
                "Can identify obvious non-linear (x²) but uncertain about others",
                "Needs guidance to rewrite equations in standard form"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot distinguish linear from non-linear",
                "Multiple errors identifying m and c",
                "Requests solution"
              ],
              qualitative: [
                "Does not understand y = mx + c form",
                "Cannot identify coefficient of x vs constant term",
                "Thinks all equations are linear functions",
                "Does not recognize that x² makes function non-linear",
                "Cannot rewrite equations in different forms",
                "Confuses linear with 'contains a line of text'"
              ]
            }
          },
          learningObjectives: [
            "Recognize linear function form: y = mx + c",
            "Identify whether a function is linear or not",
            "Determine values of m and c from linear equations",
            "Understand that m and c are constants (fixed numbers)",
            "Explain why the graph of linear function is a straight line",
            "Rewrite linear equations in standard y = mx + c form",
            "Recognize special linear cases: y = mx and y = c"
          ],
          relevantFormulas: [
            "Linear function form: y = mx + c",
            "m = coefficient of x (multiplier of x)",
            "c = constant term (number on its own)",
            "Examples of linear: y = 2x + 3, y = -x + 5, y = 3x, y = 4",
            "Examples of NON-linear: y = x², y = 1/x, y = 2^x"
          ],
          availableTools: ["functionGraph"]
        },
        {
          id: "graphing-linear-functions",
          title: "Graphing Linear Functions",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["identifying-linear-functions"],
          masterySignals: "Student creates accurate value tables and graphs linear functions correctly in 2+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correctly graphed linear functions",
                "Accurate tables with no calculation errors"
              ],
              qualitative: [
                "Creates accurate value tables for given x-values",
                "Plots points correctly from table values",
                "Draws straight lines through points with ruler",
                "Chooses appropriate scale for axes",
                "Labels graph with equation",
                "Understands that only 2 points needed but 3 is safer for checking",
                "Recognizes when points don't line up (indicates error)"
              ]
            },
            developing: {
              quantitative: [
                "1 correct graph with hints on table or scale",
                "Occasional calculation or plotting errors"
              ],
              qualitative: [
                "Can create tables but makes occasional calculation errors",
                "Plots points mostly correctly but with some inaccuracy",
                "Forgets to use ruler for straight line",
                "Needs guidance on choosing appropriate scale",
                "Sometimes forgets to label graph",
                "Doesn't always check if points line up"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in table or graph",
                "Cannot create accurate straight line graph",
                "Requests full solution"
              ],
              qualitative: [
                "Makes consistent calculation errors when filling table",
                "Plots points incorrectly or randomly",
                "Draws curved or jagged line instead of straight",
                "Cannot choose appropriate scale",
                "Does not understand graphing process",
                "Doesn't check work or notice when points don't align"
              ]
            }
          },
          learningObjectives: [
            "Create value tables for linear functions",
            "Plot points accurately from table values",
            "Draw straight lines through plotted points",
            "Choose appropriate scales for x and y axes",
            "Label graphs with their equations",
            "Understand that 2 points determine a line",
            "Check work by verifying points line up"
          ],
          relevantFormulas: [
            "Graphing process:",
            "  1. Create table: choose x-values, calculate y-values",
            "  2. Plot points: mark each (x, y) on plane",
            "  3. Draw line: connect points with ruler",
            "  4. Label: write equation next to line",
            "Minimum points needed: 2 (but use 3 to check)"
          ],
          availableTools: ["cartesianPlane", "functionGraph"]
        },
        {
          id: "interpreting-linear-graphs",
          title: "Interpreting Linear Graphs",
          difficulty: "intermediate",
          prerequisites: ["identifying-linear-functions", "graphing-linear-functions"],
          masterySignals: "Student reads values from graphs, finds intercepts, and interprets meaning in context in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct readings or interpretations from graphs",
                "Finds both x and y intercepts correctly"
              ],
              qualitative: [
                "Reads y-value from graph given x-value accurately",
                "Reads x-value from graph given y-value accurately",
                "Identifies y-intercept as the point where line crosses y-axis (x=0)",
                "Recognizes that y-intercept equals c in y = mx + c",
                "Finds x-intercept by setting y = 0 and solving",
                "Interprets intercepts in real-world contexts (starting value, break-even point)",
                "Explains what m and c represent in context (rate and starting value)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct readings with hints",
                "Can find y-intercept but struggles with x-intercept"
              ],
              qualitative: [
                "Reads values from graph with some accuracy",
                "Identifies y-intercept once reminded it's where x = 0",
                "Struggles to find x-intercept algebraically",
                "Can interpret with prompting about what values mean",
                "Needs guidance on reading between grid lines",
                "Sometimes confuses which intercept is which"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot read values from graph accurately",
                "Multiple errors finding intercepts",
                "Requests solution"
              ],
              qualitative: [
                "Reads wrong values from graph",
                "Does not understand what intercepts are",
                "Cannot solve for x when y = 0",
                "Cannot connect graph values to real-world meaning",
                "Confuses x-intercept with y-intercept",
                "Does not understand that y-intercept is the constant c"
              ]
            }
          },
          learningObjectives: [
            "Read y-values from graph given x-values",
            "Read x-values from graph given y-values",
            "Identify the y-intercept (where line crosses y-axis)",
            "Find the x-intercept (set y=0 and solve)",
            "Understand that y-intercept equals c in y = mx + c",
            "Interpret intercepts in real-world contexts",
            "Explain what m (rate) and c (starting value) mean in context"
          ],
          relevantFormulas: [
            "y-intercept: Point where line crosses y-axis (when x = 0)",
            "  In y = mx + c, y-intercept = c",
            "x-intercept: Point where line crosses x-axis (when y = 0)",
            "  To find: Set y = 0 in equation and solve for x",
            "In context: c often represents starting/initial value",
            "In context: m often represents rate of change"
          ],
          availableTools: ["functionGraph"]
        }
      ]
    },

    learningObjectives: [
      "Identify and work with linear functions in form y = mx + c",
      "Create tables and graph linear functions accurately",
      "Read and interpret information from linear graphs",
      "Find and interpret x and y intercepts",
      "Apply linear functions to real-world situations (distance-time, cost)"
    ],

    keyFormulas: `
**Linear Function:**
- Form: y = mx + c
- m = coefficient of x
- c = constant term
- Graph is always a straight line

**Graphing:**
1. Create table (choose x, calculate y)
2. Plot points (x, y)
3. Draw straight line
4. Label with equation

**Intercepts:**
- y-intercept: (0, c) - where x = 0
- x-intercept: solve y = 0 for x
    `
  },

  // ========================================
  // SUBTOPIC 4: GRADIENT OF LINEAR GRAPHS
  // ========================================
  's1-math-linear-functions-gradient': {
    displayName: 'Gradient of Linear Graphs',
    topicName: 'gradient of linear graphs',

    progressionStructure: {
      sections: [
        {
          id: "understanding-gradient",
          title: "Understanding Gradient",
          difficulty: "foundational-to-intermediate",
          prerequisites: [],
          masterySignals: "Student correctly calculates gradient from two points using rise/run method and identifies positive vs negative gradients in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct gradient calculations without hints",
                "No errors with negative coordinates"
              ],
              qualitative: [
                "Correctly uses gradient formula: m = (y₂ - y₁)/(x₂ - x₁)",
                "Identifies rise (vertical change) and run (horizontal change) accurately",
                "Calculates gradient correctly with positive and negative values",
                "Recognizes positive gradient → line slopes upward (↗)",
                "Recognizes negative gradient → line slopes downward (↘)",
                "Understands gradient as measure of steepness",
                "Explains: larger |m| means steeper line",
                "Can visualize gradient using right-triangle method"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct calculations with hints on formula or signs",
                "Occasional errors with negative coordinates"
              ],
              qualitative: [
                "Can calculate gradient once reminded of formula",
                "Identifies rise and run but sometimes confuses which is which",
                "Makes sign errors with negative coordinates",
                "Can identify positive vs negative slope once calculated",
                "Understands steepness concept with prompting",
                "Needs guidance on order of subtraction in formula"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple calculation errors",
                "Cannot apply gradient formula",
                "Requests solution"
              ],
              qualitative: [
                "Does not know or cannot use gradient formula",
                "Confuses rise with run consistently",
                "Makes sign errors: (y₂ - y₁)/(x₁ - x₂) instead of (x₂ - x₁)",
                "Cannot identify if gradient is positive or negative",
                "Does not understand gradient as steepness",
                "Cannot visualize rise/run on graph",
                "Adds coordinates instead of subtracting"
              ]
            }
          },
          learningObjectives: [
            "Calculate gradient using formula m = (y₂ - y₁)/(x₂ - x₁)",
            "Identify rise (vertical change) and run (horizontal change)",
            "Work correctly with negative coordinates in gradient formula",
            "Recognize that positive gradient means upward slope",
            "Recognize that negative gradient means downward slope",
            "Understand gradient as measure of steepness",
            "Visualize gradient using right-triangle rise/run method",
            "Compare steepness of different lines using gradient values"
          ],
          relevantFormulas: [
            "Gradient formula: m = rise/run = (y₂ - y₁)/(x₂ - x₁)",
            "Rise = vertical change = change in y = y₂ - y₁",
            "Run = horizontal change = change in x = x₂ - x₁",
            "Positive gradient: m > 0 (line slopes upward ↗)",
            "Negative gradient: m < 0 (line slopes downward ↘)",
            "Larger |m| = steeper line"
          ],
          availableTools: ["gradientVisualizer", "functionGraph"]
        },
        {
          id: "special-gradient-cases",
          title: "Special Cases: Horizontal and Vertical Lines",
          difficulty: "intermediate",
          prerequisites: ["understanding-gradient"],
          masterySignals: "Student correctly identifies and explains gradient = 0 for horizontal lines and undefined gradient for vertical lines in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of special cases",
                "No confusion between horizontal (0) and vertical (undefined)"
              ],
              qualitative: [
                "Recognizes horizontal line form: y = c (gradient = 0)",
                "Explains why horizontal line has gradient 0 (rise = 0, flat line)",
                "Recognizes vertical line form: x = c (gradient = undefined)",
                "Explains why vertical line has undefined gradient (run = 0, cannot divide by zero)",
                "Uses HOY-VUX or similar memory aid correctly",
                "Can write equations of horizontal and vertical lines through given points",
                "Identifies special cases from graphs and equations"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct identifications with hints",
                "Sometimes confuses which is 0 and which is undefined"
              ],
              qualitative: [
                "Can identify once reminded of rules",
                "Confuses horizontal (y = c) with vertical (x = c)",
                "Knows one has gradient 0 but forgets which one",
                "Needs prompting about division by zero",
                "Can calculate m = 0/run = 0 with guidance",
                "Struggles to write equations without prompting"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot distinguish horizontal from vertical",
                "Multiple errors identifying special gradients",
                "Requests solution"
              ],
              qualitative: [
                "Thinks horizontal line has undefined gradient",
                "Thinks vertical line has gradient 0",
                "Cannot explain why vertical gradient is undefined",
                "Does not connect y = c to horizontal or x = c to vertical",
                "Tries to calculate m = rise/0 and gets confused",
                "Cannot write equations of special lines"
              ]
            }
          },
          learningObjectives: [
            "Recognize horizontal line equation: y = c",
            "Understand that horizontal lines have gradient = 0",
            "Explain why gradient is 0 (rise = 0, no vertical change)",
            "Recognize vertical line equation: x = c",
            "Understand that vertical lines have undefined gradient",
            "Explain why gradient is undefined (run = 0, division by zero)",
            "Write equations of horizontal and vertical lines through given points",
            "Use memory aids like HOY-VUX effectively"
          ],
          relevantFormulas: [
            "Horizontal line: y = c (for any constant c)",
            "  Gradient = 0 (rise = 0, completely flat)",
            "  Example: y = 3, y = -5, y = 0 (x-axis)",
            "Vertical line: x = c (for any constant c)",
            "  Gradient = undefined (run = 0, cannot divide by zero)",
            "  Example: x = 2, x = -4, x = 0 (y-axis)",
            "Memory aid: HOY-VUX",
            "  H = Horizontal, O = gradient is 0, Y = equation uses y",
            "  V = Vertical, U = Undefined gradient, X = equation uses x"
          ],
          availableTools: ["gradientVisualizer", "functionGraph"]
        },
        {
          id: "gradient-real-world",
          title: "Gradient in Real-World Contexts",
          difficulty: "intermediate",
          prerequisites: ["understanding-gradient", "special-gradient-cases"],
          masterySignals: "Student correctly interprets gradient as rate of change and applies to real contexts (speed, cost, temperature) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct interpretations of gradient in context",
                "Accurately extracts rate information from equations"
              ],
              qualitative: [
                "Interprets gradient as rate of change in context",
                "Correctly identifies gradient as speed in distance-time graphs",
                "Correctly identifies gradient as cost per item in pricing",
                "Correctly identifies gradient as rate of temperature change",
                "Explains what y-intercept represents in context (starting value)",
                "Distinguishes between what m and c represent in real situations",
                "Can extract and explain rates from y = mx + c equations",
                "Applies gradient understanding to solve practical problems"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct interpretations with hints about what m represents",
                "Needs prompting to connect gradient to rate"
              ],
              qualitative: [
                "Can identify rate once reminded gradient = rate of change",
                "Sometimes confuses gradient with y-intercept meaning",
                "Needs guidance to interpret in specific contexts",
                "Can extract numerical value but struggles with units or meaning",
                "Understands with prompting what starting value (c) means",
                "Makes sense of context after explanation"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot interpret gradient in context",
                "Multiple errors identifying rates",
                "Requests solution"
              ],
              qualitative: [
                "Does not understand gradient represents rate of change",
                "Cannot identify speed from distance-time equation",
                "Cannot identify cost per item from pricing equation",
                "Confuses what m and c represent completely",
                "Cannot connect mathematical gradient to real-world meaning",
                "Treats context problems as abstract without meaning"
              ]
            }
          },
          learningObjectives: [
            "Interpret gradient as rate of change in real contexts",
            "Identify gradient as speed in distance-time relationships",
            "Identify gradient as cost per unit in pricing",
            "Identify gradient as rate in temperature/volume changes",
            "Explain what y-intercept means in context (starting/initial value)",
            "Distinguish between rate (m) and starting value (c) in applications",
            "Apply gradient concepts to solve practical problems",
            "Include correct units when stating rates"
          ],
          relevantFormulas: [
            "In y = mx + c:",
            "  m = rate of change (how much y changes per unit of x)",
            "  c = starting/initial value (value when x = 0)",
            "Common contexts:",
            "  Distance-time: m = speed (km/h, m/s)",
            "  Cost vs quantity: m = price per item",
            "  Temperature vs time: m = rate of heating/cooling",
            "  Conversion: m = exchange/conversion rate",
            "Always include units with rates!"
          ],
          availableTools: ["gradientVisualizer", "functionGraph"]
        },
        {
          id: "gradient-applications",
          title: "Applications and Problem Solving",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["understanding-gradient", "special-gradient-cases", "gradient-real-world"],
          masterySignals: "Student solves multi-step problems involving gradient, applies parallel line property, and finds equations from points in 2+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct solutions to multi-step problems",
                "Accurately applies parallel lines property"
              ],
              qualitative: [
                "Recognizes that parallel lines have equal gradients",
                "Verifies if lines are parallel by comparing gradients",
                "Calculates gradients of geometric shapes (rectangle, parallelogram sides)",
                "Finds equation y = mx + c from two points",
                "Solves complex contextual problems using gradient",
                "Applies multiple concepts together (gradient, intercepts, parallel)",
                "Shows clear working for multi-step solutions",
                "Checks answers make sense in context"
              ]
            },
            developing: {
              quantitative: [
                "1 correct solution with hints on approach",
                "Makes errors in multi-step reasoning"
              ],
              qualitative: [
                "Understands parallel lines concept once reminded",
                "Can calculate gradients but struggles to compare or apply",
                "Needs step-by-step guidance for multi-step problems",
                "Makes algebraic errors when finding equations",
                "Can start problems but gets lost in complexity",
                "Sometimes forgets to check if answer makes sense"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve multi-step problems",
                "Multiple conceptual errors",
                "Requests full solution"
              ],
              qualitative: [
                "Does not know parallel lines have equal gradients",
                "Cannot calculate gradients of shape sides",
                "Cannot find equation from two points",
                "Gets confused by multi-step problems",
                "Does not know how to start complex applications",
                "Cannot integrate multiple concepts together",
                "Makes random attempts without clear reasoning"
              ]
            }
          },
          learningObjectives: [
            "Recognize that parallel lines have equal gradients",
            "Verify if two lines are parallel by comparing their gradients",
            "Calculate gradients of sides of geometric shapes",
            "Find the equation y = mx + c from two points",
            "Solve multi-step problems combining gradient and other concepts",
            "Apply gradient properties to geometry problems",
            "Show clear systematic working for complex problems",
            "Verify solutions make sense in context"
          ],
          relevantFormulas: [
            "Parallel lines: If lines are parallel, then m₁ = m₂",
            "Finding equation from two points:",
            "  1. Calculate m = (y₂ - y₁)/(x₂ - x₁)",
            "  2. Substitute one point into y = mx + c to find c",
            "  3. Write final equation y = mx + c",
            "Geometric applications:",
            "  - Opposite sides of parallelogram have equal gradients",
            "  - Rectangle has two pairs of parallel sides",
            "Problem-solving steps:",
            "  1. Identify what's given and what to find",
            "  2. Calculate gradients as needed",
            "  3. Apply properties (parallel, etc.)",
            "  4. Verify answer makes sense"
          ],
          availableTools: ["gradientVisualizer", "functionGraph", "cartesianPlane"]
        }
      ]
    },

    learningObjectives: [
      "Calculate gradient using rise/run formula from two points",
      "Understand special cases: horizontal (m=0) and vertical (undefined)",
      "Interpret gradient as rate of change in real-world contexts",
      "Apply gradient to solve geometric and practical problems",
      "Recognize parallel lines have equal gradients"
    ],

    keyFormulas: `
**Gradient Formula:**
- m = rise/run = (y₂ - y₁)/(x₂ - x₁)
- Rise = vertical change (Δy)
- Run = horizontal change (Δx)

**Special Cases:**
- Horizontal (y = c): gradient = 0
- Vertical (x = c): gradient = undefined

**Applications:**
- Gradient = rate of change
- In y = mx + c: m = rate, c = starting value
- Parallel lines: m₁ = m₂

**Interpretation:**
- Positive m: slopes upward ↗
- Negative m: slopes downward ↘
- Larger |m|: steeper line
    `
  }

};

// Export global config combining all subtopic configs
export const S1_LINEAR_FUNCTIONS_CONFIG = {
  tutor: LINEAR_FUNCTIONS_TUTOR_CUSTOMIZATION,
  mathTools: LINEAR_FUNCTIONS_MATH_TOOLS,
  subtopics: S1_LINEAR_FUNCTIONS_SUBTOPICS
};
