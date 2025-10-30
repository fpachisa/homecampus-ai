/**
 * S4 Mathematics - Advanced Trigonometry Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 *
 * NOTE: This module uses the unitCircle mathTool which is currently a PLACEHOLDER
 * and needs to be developed. See bottom of file for tool specification.
 */

// Type exports
export type AdvancedTrigonometryTopicId =
  | 's4-math-advanced-trig-unit-circle'
  | 's4-math-advanced-trig-functions-graphs'
  | 's4-math-advanced-trig-transformations'
  | 's4-math-advanced-trig-equations-identities'
  | 's4-math-advanced-trig-radians';

// Topic-specific tutor customization (overrides base)
export const ADVANCED_TRIGONOMETRY_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Advanced Trigonometry.

Teaching Approach:
- Guide students to discover relationships on the unit circle through questioning
- Emphasize visual understanding of angles, coordinates, and trig ratios
- Connect unit circle to trigonometric functions and their graphs
- Build understanding of identities through geometric reasoning, not just memorization
- Use the "why" behind identities and transformations

**Text-to-Speech Guidelines:**
- Say "sine theta" not "sin theta" for better pronunciation
- Say "cosine theta" not "cos theta"
- Say "All Students Take Calculus" for ASTC mnemonic
- Say "theta" for θ, "pi" for π
- Spell out angle values: "thirty degrees", "pi over six radians"
- Say "squared" for ², "cubed" for ³
- Avoid special symbols in speech.text - spell them out
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding (not for every question).

Available Tools:
- functionGraph: For graphing y = sin x, y = cos x, y = tan x and transformations
- unitCircle: PLACEHOLDER TOOL (to be developed) - For unit circle visualization
- rightTriangle: For right triangle contexts (review if needed)
- generalTriangle: For general triangle contexts

IMPORTANT: Use the technical name (e.g., "functionGraph") in the toolName field, NOT the display name.
IMPORTANT: unitCircle is a placeholder - tool needs development before full functionality.`
};

// Available math tools for this topic
export const ADVANCED_TRIGONOMETRY_MATH_TOOLS = [
  "functionGraph",    // AVAILABLE - For sin/cos/tan graphs
  "unitCircle",       // PLACEHOLDER (to be developed) - For unit circle
  "rightTriangle",    // AVAILABLE - For review contexts
  "generalTriangle"   // AVAILABLE - For triangle contexts
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S4_MATH_ADVANCED_TRIGONOMETRY_SUBTOPICS = {

  's4-math-advanced-trig-unit-circle': {
    displayName: 'Unit Circle & Special Angles',
    topicName: 'unit circle, special angles, and the Pythagorean identity',

    progressionStructure: {
      sections: [
        {
          id: "unit-circle-fundamentals",
          title: "Understanding the Unit Circle",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies points on unit circle and relates coordinates to sin/cos in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct coordinate identifications",
                "Correctly states cos θ = x-coordinate, sin θ = y-coordinate"
              ],
              qualitative: [
                "Understands unit circle has center (0, 0) and radius 1",
                "Recognizes point P on circle at angle θ has coordinates (cos θ, sin θ)",
                "Understands positive angles measured anticlockwise from positive x-axis",
                "Can explain relationship between Chapter 16 definitions and unit circle",
                "Identifies that −1 ≤ cos θ ≤ 1 and −1 ≤ sin θ ≤ 1"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on coordinate meaning"],
              qualitative: [
                "Understands concept but confuses x and y coordinates",
                "Needs prompting for sin vs cos",
                "Can identify points once relationship is stated"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify coordinates", "Confuses sin and cos consistently"],
              qualitative: [
                "Does not understand unit circle definition",
                "Cannot relate coordinates to trig ratios",
                "Confuses angle measurement direction"
              ]
            }
          },
          learningObjectives: [
            "Define the unit circle as circle with center (0, 0) and radius 1",
            "Understand angle θ measured anticlockwise from positive x-axis",
            "Recognize that for point P on unit circle at angle θ: P = (cos θ, sin θ)",
            "Identify cos θ as x-coordinate and sin θ as y-coordinate",
            "Understand range: −1 ≤ cos θ ≤ 1 and −1 ≤ sin θ ≤ 1",
            "Connect to Chapter 16 definitions using similar triangles"
          ],
          relevantFormulas: [
            "Unit circle equation: x² + y² = 1",
            "For point P at angle θ on unit circle:",
            "  • cos θ = x-coordinate of P",
            "  • sin θ = y-coordinate of P",
            "  • tan θ = sin θ / cos θ = y/x",
            "Angle measurement: positive = anticlockwise, negative = clockwise",
            "Range: −1 ≤ cos θ ≤ 1 and −1 ≤ sin θ ≤ 1"
          ],
          availableTools: ["unitCircle"]  // PLACEHOLDER - to be developed
        },
        {
          id: "special-angle-values",
          title: "Exact Values for Special Angles",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["unit-circle-fundamentals"],
          masterySignals: "Student states exact values for multiples of 30° and 45° correctly in 3+ problems without calculator",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ exact values stated correctly",
                "Derives values using symmetry in 2+ cases"
              ],
              qualitative: [
                "Knows exact values for 0°, 30°, 45°, 60°, 90°",
                "Can derive values for 120°, 135°, 150°, 180° using symmetry",
                "Understands 30-60-90 triangle ratios: 1 : √3 : 2",
                "Understands 45-45-90 triangle ratios: 1 : 1 : √2",
                "Uses unit circle symmetry to find values in other quadrants",
                "Recognizes cos 45° = sin 45° = 1/√2",
                "Knows sin 30° = 1/2, cos 30° = √3/2"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on triangle ratios"],
              qualitative: [
                "Knows some special angles but not all",
                "Needs prompting for symmetry",
                "Confuses 30° and 60° values occasionally",
                "Can derive once triangle is drawn"
              ]
            },
            struggling: {
              quantitative: ["Cannot state exact values", "Multiple errors"],
              qualitative: [
                "Does not know special angle values",
                "Cannot use triangle ratios",
                "Confuses all special angle values",
                "Relies on calculator instead of exact values"
              ]
            }
          },
          learningObjectives: [
            "State exact values for sin, cos, tan at 0°, 30°, 45°, 60°, 90°",
            "Derive 30° and 60° values using equilateral triangle (sides 1, height √3/2)",
            "Derive 45° values using isosceles right triangle (sides 1, hypotenuse √2)",
            "Use symmetry to find values for 120°, 135°, 150°, 180°, 210°, 225°, etc.",
            "Recognize patterns: multiples of 30° involve √3/2 and 1/2",
            "Recognize patterns: multiples of 45° involve 1/√2"
          ],
          sampleProblems: [
            {
              problem: "Find the exact coordinates of point P on the unit circle at angle 60°"
            },
            {
              problem: "Find tan 45° and explain why it equals 1"
            },
            {
              problem: "Use symmetry to find sin 150° given that sin 30° = 1/2"
            }
          ],
          relevantFormulas: [
            "Special angle values (0°, 30°, 45°, 60°, 90°):",
            "  • cos 0° = 1,   sin 0° = 0,   tan 0° = 0",
            "  • cos 30° = √3/2,   sin 30° = 1/2,   tan 30° = 1/√3",
            "  • cos 45° = 1/√2,   sin 45° = 1/√2,   tan 45° = 1",
            "  • cos 60° = 1/2,   sin 60° = √3/2,   tan 60° = √3",
            "  • cos 90° = 0,   sin 90° = 1,   tan 90° = undefined",
            "Derivation using 30-60-90 triangle: sides 1, √3, 2",
            "Derivation using 45-45-90 triangle: sides 1, 1, √2",
            "Symmetry: sin(180° − θ) = sin θ,  cos(180° − θ) = −cos θ"
          ],
          availableTools: ["unitCircle"]  // PLACEHOLDER - to be developed
        },
        {
          id: "signs-quadrants-astc",
          title: "Signs of Trig Ratios in Quadrants (ASTC)",
          difficulty: "intermediate",
          prerequisites: ["special-angle-values"],
          masterySignals: "Student correctly determines signs of sin, cos, tan in all quadrants for 3+ angles using ASTC",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct sign determinations without errors",
                "Correctly applies ASTC rule in all quadrants"
              ],
              qualitative: [
                "Quadrant 1: All positive (sin, cos, tan all +)",
                "Quadrant 2: Sin positive (cos and tan negative)",
                "Quadrant 3: Tan positive (sin and cos negative)",
                "Quadrant 4: Cos positive (sin and tan negative)",
                "Uses mnemonic: All Students Take Calculus (or All Silly Turtles Crawl)",
                "Can determine quadrant from given trig values and signs",
                "Understands why: relates to x and y coordinate signs"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with ASTC reminder"],
              qualitative: [
                "Knows ASTC but sometimes forgets application",
                "Needs prompting for which ratio is positive",
                "Can determine once quadrant is identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple sign errors", "Cannot apply ASTC"],
              qualitative: [
                "Does not understand ASTC rule",
                "Confuses which ratios are positive in which quadrants",
                "Cannot relate to coordinate signs"
              ]
            }
          },
          learningObjectives: [
            "Understand ASTC mnemonic: All Students Take Calculus",
            "Apply ASTC: Quadrant 1 (All), Quadrant 2 (Sin), Quadrant 3 (Tan), Quadrant 4 (Cos)",
            "Determine sign of sin θ based on whether point is above or below x-axis",
            "Determine sign of cos θ based on whether point is left or right of y-axis",
            "Determine sign of tan θ from tan = sin/cos (same sign if both +/− , opposite if mixed)",
            "Use signs to determine which quadrant angle θ lies in"
          ],
          sampleProblems: [
            {
              problem: "Determine whether sin θ, cos θ, and tan θ are positive or negative when θ = 210°"
            },
            {
              problem: "If sin θ is negative and tan θ is positive, in which quadrant does θ lie?"
            }
          ],
          relevantFormulas: [
            "ASTC Rule (All Students Take Calculus):",
            "  • Quadrant 1 (0° < θ < 90°): All positive",
            "  • Quadrant 2 (90° < θ < 180°): Sin positive, Cos negative, Tan negative",
            "  • Quadrant 3 (180° < θ < 270°): Tan positive, Sin negative, Cos negative",
            "  • Quadrant 4 (270° < θ < 360°): Cos positive, Sin negative, Tan negative",
            "Why it works:",
            "  • sin θ = y-coordinate (positive above x-axis, negative below)",
            "  • cos θ = x-coordinate (positive right of y-axis, negative left)",
            "  • tan θ = y/x (positive if same signs, negative if opposite signs)"
          ],
          availableTools: ["unitCircle"]  // PLACEHOLDER - to be developed
        },
        {
          id: "pythagorean-identity",
          title: "The Pythagorean Identity",
          difficulty: "intermediate",
          prerequisites: ["unit-circle-fundamentals"],
          masterySignals: "Student uses cos²θ + sin²θ = 1 to find unknown trig values in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ problems solved using Pythagorean identity",
                "Correctly finds both positive and negative solutions where applicable"
              ],
              qualitative: [
                "Understands identity comes from x² + y² = 1 on unit circle",
                "Can rearrange to sin²θ = 1 − cos²θ or cos²θ = 1 − sin²θ",
                "Determines correct sign using quadrant information",
                "Takes square root carefully: ± √(...)",
                "Verifies answer makes sense for given quadrant"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on sign"],
              qualitative: [
                "Knows identity but forgets to determine sign",
                "Needs prompting for quadrant consideration",
                "Can solve once identity is recalled"
              ]
            },
            struggling: {
              quantitative: ["Cannot apply identity", "Consistent sign errors"],
              qualitative: [
                "Does not understand where identity comes from",
                "Cannot rearrange identity",
                "Always chooses positive square root without considering quadrant"
              ]
            }
          },
          learningObjectives: [
            "Derive cos²θ + sin²θ = 1 from x² + y² = 1 on unit circle",
            "Use identity to find sin θ given cos θ (or vice versa)",
            "Rearrange to sin²θ = 1 − cos²θ and cos²θ = 1 − sin²θ",
            "Take square root: sin θ = ±√(1 − cos²θ)",
            "Use quadrant information to determine correct sign (+ or −)",
            "Verify answer satisfies original identity"
          ],
          sampleProblems: [
            {
              problem: "If cos θ = 3/5 and 90° < θ < 180°, find the exact value of sin θ"
            },
            {
              problem: "Given sin θ = −4/5 and cos θ < 0, find cos θ"
            }
          ],
          relevantFormulas: [
            "Pythagorean Identity: cos²θ + sin²θ = 1",
            "Derived from: (cos θ)² + (sin θ)² = x² + y² = 1 (unit circle)",
            "Rearranged forms:",
            "  • sin²θ = 1 − cos²θ  →  sin θ = ±√(1 − cos²θ)",
            "  • cos²θ = 1 − sin²θ  →  cos θ = ±√(1 − sin²θ)",
            "Sign determination:",
            "  • Use ASTC or quadrant information to choose + or −",
            "Example: If cos θ = 1/2 and 0° < θ < 90° (Q1, all positive):",
            "  sin²θ = 1 − (1/2)² = 1 − 1/4 = 3/4",
            "  sin θ = √(3/4) = √3/2  (positive in Q1)"
          ],
          availableTools: ["unitCircle"]  // PLACEHOLDER - to be developed
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Unit Circle Fundamentals (foundational) - Understand (cos θ, sin θ) on circle",
      "2. Special Angle Values (foundational→intermediate) - Exact values for 30°, 45°, 60°",
      "3. Signs in Quadrants (intermediate) - ASTC rule application",
      "4. Pythagorean Identity (intermediate) - Using cos²θ + sin²θ = 1"
    ],

    keyFormulas: `• Unit circle: x² + y² = 1, point P = (cos θ, sin θ)
                  • Special angles: 0°, 30°, 45°, 60°, 90° (exact values)
                  • ASTC: All (Q1), Sin (Q2), Tan (Q3), Cos (Q4)
                  • Pythagorean identity: cos²θ + sin²θ = 1
                  • tan θ = sin θ / cos θ
                  • Range: −1 ≤ cos θ ≤ 1, −1 ≤ sin θ ≤ 1`
  },

  's4-math-advanced-trig-functions-graphs': {
    displayName: 'Trigonometric Functions & Graphs',
    topicName: 'sine, cosine, and tangent functions as periodic graphs',

    progressionStructure: {
      sections: [
        {
          id: "sine-cosine-functions",
          title: "The Sine and Cosine Functions",
          difficulty: "intermediate",
          prerequisites: ["unit-circle-fundamentals", "special-angle-values"],
          masterySignals: "Student identifies period, amplitude, domain, range of y = sin x and y = cos x in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of function properties",
                "Correctly reads values from graphs"
              ],
              qualitative: [
                "Understands y = sin x is periodic with period 360°",
                "Knows amplitude of y = sin x is 1 (range: −1 ≤ y ≤ 1)",
                "Identifies domain {x ∈ ℝ} and range {y | −1 ≤ y ≤ 1}",
                "Recognizes sine starts at 0, rises to 1 at 90°, back to 0 at 180°",
                "Knows y = cos x has same period/amplitude but different phase (starts at 1)",
                "Understands cos x = sin(x + 90°) relationship",
                "Can find max/min points and zeros from graph"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on period/amplitude"],
              qualitative: [
                "Knows functions are waves but unsure of exact properties",
                "Needs prompting for period or amplitude",
                "Confuses sine and cosine graphs occasionally"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify function properties", "Multiple errors"],
              qualitative: [
                "Does not understand periodic nature",
                "Confuses period with amplitude",
                "Cannot read values from graph"
              ]
            }
          },
          learningObjectives: [
            "Understand y = sin x as function mapping angle to y-coordinate on unit circle",
            "Recognize periodic nature: pattern repeats every 360°",
            "Identify period = 360°, amplitude = 1, principal axis y = 0",
            "State domain {x ∈ ℝ} and range {y | −1 ≤ y ≤ 1}",
            "Locate maximum points (y = 1), minimum points (y = −1), zeros",
            "Understand y = cos x has same properties but starts at maximum",
            "Use identity: cos x = sin(x + 90°)"
          ],
          sampleProblems: [
            {
              problem: "Use the graph of y = sin x to find all angles between 0° and 720° where sin x = 0.5"
            },
            {
              problem: "State the maximum value of y = sin x and when it occurs"
            }
          ],
          relevantFormulas: [
            "Sine function y = sin x:",
            "  • Domain: {x ∈ ℝ} (all real numbers)",
            "  • Range: {y | −1 ≤ y ≤ 1}",
            "  • Period: 360° (pattern repeats)",
            "  • Amplitude: 1 (vertical distance from center to max/min)",
            "  • Principal axis: y = 0",
            "  • Maximum points: y = 1 at x = 90°, 450°, 810°, ...",
            "  • Minimum points: y = −1 at x = 270°, 630°, ...",
            "  • Zeros: x = 0°, 180°, 360°, 540°, ...",
            "Cosine function y = cos x:",
            "  • Same domain, range, period, amplitude as sine",
            "  • Maximum at x = 0°, 360°, 720°, ...",
            "  • Minimum at x = 180°, 540°, ...",
            "  • Zeros at x = 90°, 270°, 450°, ...",
            "Relationship: cos x = sin(x + 90°)"
          ],
          availableTools: ["functionGraph"]  // AVAILABLE - can graph sin/cos
        },
        {
          id: "tangent-function",
          title: "The Tangent Function",
          difficulty: "intermediate",
          prerequisites: ["sine-cosine-functions"],
          masterySignals: "Student identifies period, asymptotes, and discontinuities of y = tan x in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of tangent properties",
                "Correctly identifies asymptotes"
              ],
              qualitative: [
                "Understands y = tan x = sin x / cos x",
                "Recognizes period is 180° (not 360° like sin/cos)",
                "Identifies vertical asymptotes where cos x = 0 (x = 90°, 270°, ...)",
                "Knows tangent is undefined at asymptotes",
                "Understands domain excludes x = 90° + 180°k (k ∈ ℤ)",
                "Knows range is {y ∈ ℝ} (all real numbers)",
                "No amplitude (tangent is unbounded)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on asymptotes"],
              qualitative: [
                "Knows tangent is different from sin/cos but unsure how",
                "Needs prompting for period (180° not 360°)",
                "Can identify asymptotes once tan = sin/cos is recalled"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify tangent properties", "Confuses with sin/cos"],
              qualitative: [
                "Does not understand tan = sin/cos",
                "Thinks period is 360°",
                "Does not recognize asymptotes"
              ]
            }
          },
          learningObjectives: [
            "Understand y = tan x as ratio: tan x = sin x / cos x",
            "Recognize period = 180° (half that of sine/cosine)",
            "Identify vertical asymptotes at x = 90°, 270°, 450°, ... (where cos x = 0)",
            "State domain: x ≠ 90° + 180°k (k ∈ ℤ) - excludes asymptotes",
            "State range: {y ∈ ℝ} (all real numbers - no amplitude)",
            "Principal axis: y = 0",
            "Understand tangent is undefined at asymptotes (division by zero)"
          ],
          sampleProblems: [
            {
              problem: "For which angles from 0° to 360° is tan x undefined?"
            },
            {
              problem: "Explain why the period of y = tan x is 180° and not 360°"
            }
          ],
          relevantFormulas: [
            "Tangent function y = tan x:",
            "  • Definition: tan x = sin x / cos x = y/x on unit circle",
            "  • Period: 180° (repeats every 180°)",
            "  • Domain: x ≠ 90° + 180°k where k ∈ ℤ (excludes asymptotes)",
            "  • Range: {y ∈ ℝ} (all real numbers)",
            "  • No amplitude (unbounded)",
            "  • Principal axis: y = 0",
            "  • Vertical asymptotes: x = 90°, 270°, 450°, ... (where cos x = 0)",
            "  • Zeros: x = 0°, 180°, 360°, ... (where sin x = 0)",
            "Why period is 180°:",
            "  • tan(θ + 180°) = sin(θ + 180°)/cos(θ + 180°) = (−sin θ)/(−cos θ) = tan θ"
          ],
          availableTools: ["functionGraph"]  // AVAILABLE - can graph tan
        },
        {
          id: "reading-graphs",
          title: "Reading and Interpreting Trig Graphs",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["sine-cosine-functions", "tangent-function"],
          masterySignals: "Student solves equations and finds values graphically from trig function graphs in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions from graphs",
                "Identifies all solutions in given interval"
              ],
              qualitative: [
                "Reads y-values from x-values on graph accurately",
                "Finds x-values where function equals given y-value",
                "Identifies all solutions in specified domain (e.g., 0° ≤ x ≤ 720°)",
                "Uses periodicity to find additional solutions",
                "Distinguishes between sin, cos, and tan graphs by shape",
                "States maximum/minimum values and where they occur",
                "Estimates values between marked points"
              ]
            },
            developing: {
              quantitative: ["1-2 solutions with hints on periodicity"],
              qualitative: [
                "Can read graph but misses some solutions",
                "Needs prompting to use period to find additional answers",
                "Can solve once graph features are identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot read graph accurately", "Misses most solutions"],
              qualitative: [
                "Does not understand how to read function graphs",
                "Cannot connect equation to graph",
                "Confuses x and y axes"
              ]
            }
          },
          learningObjectives: [
            "Use graph of y = sin x to solve equations like sin x = 0.3",
            "Find all solutions in given interval using graph",
            "Apply periodicity: if sin x = k at x = a, also at x = a + 360°, a + 720°, etc.",
            "Use symmetry: if sin x = k at x = a, also at x = 180° − a (for 0° < a < 180°)",
            "Identify where function is increasing/decreasing",
            "Find maximum/minimum values from graph",
            "Estimate values to nearest degree from graph"
          ],
          sampleProblems: [
            {
              problem: "Use the graph of y = sin x to solve sin x = 0.8 for 0° ≤ x ≤ 720°. Give answers to nearest degree."
            },
            {
              problem: "From the graph of y = cos x, state the minimum value and all values of x where it occurs for 0° ≤ x ≤ 720°"
            }
          ],
          relevantFormulas: [
            "Using graphs to solve equations:",
            "  • To solve sin x = k: find where horizontal line y = k intersects y = sin x",
            "  • Read x-values of intersection points",
            "  • Use period to find additional solutions: add/subtract 360°",
            "Symmetry in sine (for 0° < x < 180°):",
            "  • If sin a = k, then sin(180° − a) = k",
            "  • Example: sin 30° = 0.5, so sin 150° = 0.5",
            "Multiple solutions:",
            "  • sin x = k has 2 solutions per 360° period (usually)",
            "  • cos x = k has 2 solutions per 360° period (usually)",
            "  • tan x = k has 1 solution per 180° period",
            "Reading features:",
            "  • Maximum of sine/cosine: y = 1",
            "  • Minimum of sine/cosine: y = −1",
            "  • Zeros: where graph crosses x-axis"
          ],
          availableTools: ["functionGraph"]  // AVAILABLE - for reading graphs
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Sine and Cosine Functions (intermediate) - Understand period, amplitude, domain, range",
      "2. Tangent Function (intermediate) - Identify asymptotes, period 180°, unbounded range",
      "3. Reading Graphs (intermediate→advanced) - Solve equations and interpret graphically"
    ],

    keyFormulas: `• y = sin x: period 360°, amplitude 1, range [−1, 1], domain ℝ
                  • y = cos x: same as sine but phase shifted (cos x = sin(x + 90°))
                  • y = tan x: period 180°, asymptotes at 90° + 180°k, range ℝ
                  • Solving graphically: find intersections with y = k
                  • Use periodicity and symmetry to find all solutions`
  },

  's4-math-advanced-trig-transformations': {
    displayName: 'Transformations of Trigonometric Functions',
    topicName: 'amplitude, period, and translation transformations of trig functions',

    progressionStructure: {
      sections: [
        {
          id: "amplitude-period-changes",
          title: "Amplitude and Period Changes",
          difficulty: "advanced",
          prerequisites: ["sine-cosine-functions"],
          masterySignals: "Student identifies amplitude and period from equations y = a sin(bx) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct amplitude and period identifications",
                "Correctly calculates period using 360°/b formula"
              ],
              qualitative: [
                "Understands amplitude = |a| (vertical stretch/compression)",
                "Recognizes a < 0 causes reflection in x-axis",
                "Knows period = 360°/b for y = a sin(bx)",
                "Understands b > 1 compresses horizontally (shorter period)",
                "Understands 0 < b < 1 stretches horizontally (longer period)",
                "Can find a and b given amplitude and period",
                "Applies same rules to cosine function"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on period formula"],
              qualitative: [
                "Understands amplitude but uncertain about period calculation",
                "Needs prompting for 360°/b formula",
                "Confuses horizontal and vertical transformations occasionally"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify amplitude or period", "Confuses a and b"],
              qualitative: [
                "Does not understand effect of a on amplitude",
                "Does not understand effect of b on period",
                "Cannot apply transformation formulas"
              ]
            }
          },
          learningObjectives: [
            "Understand amplitude = |a| in y = a sin x (vertical stretch factor)",
            "Recognize a < 0 reflects graph in x-axis (flips upside down)",
            "Calculate period using: period = 360°/b for y = sin(bx)",
            "Understand b > 1 gives shorter period (more cycles in 360°)",
            "Understand 0 < b < 1 gives longer period (fewer cycles in 360°)",
            "Combine: y = a sin(bx) has amplitude |a| and period 360°/b",
            "Apply to cosine: y = a cos(bx) follows same rules"
          ],
          sampleProblems: [
            {
              problem: "Find the amplitude and period of y = 3 sin(2x)"
            },
            {
              problem: "Write an equation for a sine function with amplitude 4 and period 180°"
            },
            {
              problem: "Sketch y = −2 cos x and explain the transformations from y = cos x"
            }
          ],
          relevantFormulas: [
            "For y = a sin(bx) or y = a cos(bx):",
            "  • Amplitude = |a| (distance from center line to max/min)",
            "  • Period = 360°/b (how long one complete cycle takes)",
            "  • If a < 0: graph is reflected in x-axis",
            "  • If b > 1: graph is horizontally compressed (more cycles)",
            "  • If 0 < b < 1: graph is horizontally stretched (fewer cycles)",
            "Examples:",
            "  • y = 4 sin x: amplitude = 4, period = 360°",
            "  • y = sin(2x): amplitude = 1, period = 360°/2 = 180°",
            "  • y = 3 sin(0.5x): amplitude = 3, period = 360°/0.5 = 720°",
            "  • y = −2 cos(3x): amplitude = 2, period = 360°/3 = 120°, reflected",
            "Finding a and b:",
            "  • Given amplitude A: a = ±A (choose sign for reflection)",
            "  • Given period P: b = 360°/P"
          ],
          availableTools: ["functionGraph"]  // AVAILABLE - can show transformations
        },
        {
          id: "translations",
          title: "Horizontal and Vertical Translations",
          difficulty: "advanced",
          prerequisites: ["amplitude-period-changes"],
          masterySignals: "Student identifies horizontal and vertical translations in y = a sin(b(x − c)) + d for 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of translations",
                "Correctly states all transformation parameters"
              ],
              qualitative: [
                "Understands +d shifts graph up d units (vertical translation)",
                "Understands −d shifts graph down d units",
                "Recognizes principal axis becomes y = d",
                "Understands (x − c) shifts graph right c units (horizontal translation)",
                "Understands (x + c) shifts graph left c units",
                "Beware: sign of c is opposite to direction (like vertex form in quadratics)",
                "Can combine all transformations: amplitude, period, translations"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on sign of c"],
              qualitative: [
                "Understands vertical translation but confuses horizontal direction",
                "Needs prompting for (x − c) means shift right, not left",
                "Can identify once transformation type is clarified"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify translations", "Confuses c and d"],
              qualitative: [
                "Does not understand translation effects",
                "Gets horizontal translation direction backward",
                "Cannot combine multiple transformations"
              ]
            }
          },
          learningObjectives: [
            "Understand vertical translation: y = sin x + d shifts graph up d units",
            "Recognize principal axis changes from y = 0 to y = d",
            "Understand horizontal translation: y = sin(x − c) shifts right c units",
            "Beware: y = sin(x − 30°) shifts right 30°, y = sin(x + 30°) shifts left 30°",
            "Combine with amplitude/period: y = a sin(b(x − c)) + d",
            "Identify principal axis (center line) as y = d",
            "Range becomes: d − |a| ≤ y ≤ d + |a|"
          ],
          sampleProblems: [
            {
              problem: "Describe all transformations applied to y = sin x to get y = sin(x − 45°) + 2"
            },
            {
              problem: "State the principal axis and range of y = 3 cos x − 1"
            },
            {
              problem: "Write equation for sine function: amplitude 2, period 180°, shifted up 3 units"
            }
          ],
          relevantFormulas: [
            "Vertical translation y = sin x + d:",
            "  • Shifts graph up d units (down if d < 0)",
            "  • Principal axis: y = d",
            "  • Maximum: y = 1 + d,  Minimum: y = −1 + d",
            "  • Range: [d − 1, d + 1] for amplitude 1",
            "Horizontal translation y = sin(x − c):",
            "  • Shifts graph right c units (opposite sign!)",
            "  • y = sin(x − 30°) shifts RIGHT 30°",
            "  • y = sin(x + 30°) shifts LEFT 30°",
            "  • Period unchanged",
            "Combined form: y = a sin(b(x − c)) + d",
            "  • Amplitude: |a|",
            "  • Period: 360°/b",
            "  • Horizontal shift: c units right (if x − c)",
            "  • Vertical shift: d units up",
            "  • Principal axis: y = d",
            "  • Range: [d − |a|, d + |a|]",
            "Example: y = 2 sin(3(x − 30°)) + 1",
            "  Amplitude = 2, Period = 120°, Right 30°, Up 1, Axis y = 1"
          ],
          availableTools: ["functionGraph"]  // AVAILABLE - can show translations
        },
        {
          id: "general-form",
          title: "General Form y = a sin(b(x − c)) + d",
          difficulty: "advanced",
          prerequisites: ["translations"],
          masterySignals: "Student identifies all parameters (a, b, c, d) and their effects in 3+ general form problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ complete parameter identifications",
                "Correctly states all properties: amplitude, period, shifts, range"
              ],
              qualitative: [
                "Identifies a (amplitude factor): amplitude = |a|",
                "Identifies b (period factor): period = 360°/b",
                "Identifies c (horizontal shift): right c units if (x − c)",
                "Identifies d (vertical shift): principal axis y = d",
                "States range: [d − |a|, d + |a|]",
                "Can write equation given all transformation details",
                "Applies equally to sine and cosine functions",
                "Sketches graph showing all transformations"
              ]
            },
            developing: {
              quantitative: ["1-2 complete analyses with prompting"],
              qualitative: [
                "Knows transformation effects but needs help organizing",
                "Occasional errors with signs (especially c)",
                "Can complete once parameters are identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot analyze general form", "Multiple parameter errors"],
              qualitative: [
                "Does not understand how parameters combine",
                "Confuses which parameter does what",
                "Cannot write equation from description"
              ]
            }
          },
          learningObjectives: [
            "Analyze general form: y = a sin(b(x − c)) + d",
            "Identify amplitude = |a| (vertical stretch, reflection if negative)",
            "Calculate period = 360°/b (horizontal compression/stretch)",
            "Identify horizontal shift = c units right (if x − c)",
            "Identify vertical shift = d units up (principal axis)",
            "State complete range: [d − |a|, d + |a|]",
            "Write equation given: amplitude, period, horizontal shift, vertical shift",
            "Apply to both y = a sin(b(x − c)) + d and y = a cos(b(x − c)) + d"
          ],
          sampleProblems: [
            {
              problem: "For y = −3 cos(2(x + 45°)) − 1, state: amplitude, period, horizontal shift, vertical shift, principal axis, range"
            },
            {
              problem: "Write equation for: cosine function, amplitude 4, period 120°, left 30°, down 2"
            },
            {
              problem: "Sketch y = 2 sin((x − 60°)/2) + 3 showing all key features"
            }
          ],
          relevantFormulas: [
            "General form: y = a sin(b(x − c)) + d  or  y = a cos(b(x − c)) + d",
            "Parameter effects:",
            "  • a: Amplitude = |a|, reflection if a < 0",
            "  • b: Period = 360°/b",
            "  • c: Horizontal shift c units right (if x − c), left (if x + c)",
            "  • d: Vertical shift d units up, principal axis y = d",
            "Derived properties:",
            "  • Principal axis: y = d",
            "  • Maximum value: y = d + |a|",
            "  • Minimum value: y = d − |a|",
            "  • Range: [d − |a|, d + |a|]",
            "  • Domain: {x ∈ ℝ} (all real numbers)",
            "Alternative form: y = a sin(b(x − c)) + d can be written:",
            "  • y = a sin(bx − bc) + d (expanding)",
            "  • So y = a sin(2x − 60°) + 3 is y = a sin(2(x − 30°)) + 3",
            "Example: y = 5 sin(3(x − 20°)) + 2",
            "  Amplitude = 5, Period = 120°, Right 20°, Up 2",
            "  Principal axis: y = 2, Range: [−3, 7]"
          ],
          availableTools: ["functionGraph"]  // AVAILABLE - can show full transformations
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 advanced sections:",
      "1. Amplitude & Period (advanced) - Understand y = a sin(bx) transformations",
      "2. Translations (advanced) - Identify horizontal/vertical shifts",
      "3. General Form (advanced) - Master y = a sin(b(x − c)) + d completely"
    ],

    keyFormulas: `• y = a sin(bx): amplitude = |a|, period = 360°/b
                  • y = sin(x − c) + d: right c, up d, principal axis y = d
                  • General: y = a sin(b(x − c)) + d
                  • Amplitude |a|, Period 360°/b, Right c, Up d
                  • Range: [d − |a|, d + |a|]
                  • Same rules apply to cosine`
  },

  's4-math-advanced-trig-equations-identities': {
    displayName: 'Trigonometric Equations & Identities',
    topicName: 'solving trig equations and using negative, complementary, and double angle identities',

    progressionStructure: {
      sections: [
        {
          id: "solving-basic-equations",
          title: "Solving Trigonometric Equations",
          difficulty: "advanced",
          prerequisites: ["reading-graphs", "signs-quadrants-astc"],
          masterySignals: "Student solves trig equations finding all solutions in given interval for 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ equations solved with all solutions found",
                "Correctly identifies number of solutions (0, 1, 2, or more)"
              ],
              qualitative: [
                "Uses unit circle to find reference angle",
                "Applies ASTC to find solutions in all relevant quadrants",
                "Adds/subtracts multiples of period to find all solutions in interval",
                "Understands sin θ = k has 2 solutions per 360° (usually)",
                "Understands cos θ = k has 2 solutions per 360° (usually)",
                "Understands tan θ = k has 1 solution per 180°",
                "Uses symmetry: if sin θ = k at θ = α, also at θ = 180° − α"
              ]
            },
            developing: {
              quantitative: ["1-2 equations solved, some solutions missed"],
              qualitative: [
                "Finds one solution but forgets others in interval",
                "Needs prompting for symmetry or periodicity",
                "Can solve once strategy is identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot solve equations", "Finds wrong solutions"],
              qualitative: [
                "Does not understand how to use unit circle for equations",
                "Cannot find multiple solutions",
                "Confuses which quadrants to check"
              ]
            }
          },
          learningObjectives: [
            "Solve sin θ = k by finding reference angle and using ASTC",
            "Solve cos θ = k by finding reference angle and using ASTC",
            "Solve tan θ = k by finding reference angle and using period 180°",
            "Find ALL solutions in given interval (e.g., 0° ≤ θ ≤ 720°)",
            "Use symmetry: sin(180° − θ) = sin θ for 0° < θ < 180°",
            "Add/subtract multiples of 360° (or 180° for tangent) to find additional solutions",
            "Recognize when no solution exists (e.g., sin θ = 2)"
          ],
          sampleProblems: [
            {
              problem: "Solve sin θ = √3/2 for 0° ≤ θ ≤ 360°"
            },
            {
              problem: "Solve 2 cos θ − 1 = 0 for 0° ≤ θ ≤ 720°"
            },
            {
              problem: "Solve √3 tan θ + 1 = 0 for 0° ≤ θ ≤ 360°"
            }
          ],
          relevantFormulas: [
            "Solving sin θ = k:",
            "  1. Find reference angle α where sin α = |k|",
            "  2. Use ASTC to determine which quadrants",
            "  3. If k > 0: solutions in Q1 and Q2 → θ = α, 180° − α",
            "  4. If k < 0: solutions in Q3 and Q4 → θ = 180° + α, 360° − α",
            "  5. Add 360° multiples for extended intervals",
            "Solving cos θ = k:",
            "  • Similar process using ASTC",
            "  • If k > 0: Q1 and Q4 → θ = α, 360° − α",
            "  • If k < 0: Q2 and Q3 → θ = 180° − α, 180° + α",
            "Solving tan θ = k:",
            "  • Period is 180°, so solutions differ by 180°",
            "  • If k > 0: Q1 and Q3 → θ = α, 180° + α",
            "  • If k < 0: Q2 and Q4 → θ = 180° − α, 360° − α",
            "Example: Solve sin θ = 1/2 for 0° ≤ θ ≤ 360°",
            "  Reference angle: 30° (since sin 30° = 1/2)",
            "  Positive sine → Q1 and Q2",
            "  Solutions: θ = 30°, 150°"
          ],
          availableTools: ["unitCircle", "functionGraph"]  // unitCircle PLACEHOLDER, functionGraph AVAILABLE
        },
        {
          id: "negative-complementary-identities",
          title: "Negative and Complementary Angle Identities",
          difficulty: "advanced",
          prerequisites: ["unit-circle-fundamentals"],
          masterySignals: "Student applies negative and complementary angle identities correctly in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of identities",
                "Correctly simplifies expressions using identities"
              ],
              qualitative: [
                "Knows sin(−θ) = −sin θ (odd function)",
                "Knows cos(−θ) = cos θ (even function)",
                "Knows tan(−θ) = −tan θ (odd function)",
                "Understands complementary: sin(90° − θ) = cos θ",
                "Understands complementary: cos(90° − θ) = sin θ",
                "Can explain using unit circle symmetry",
                "Applies to simplify expressions and solve equations"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on which identity to use"],
              qualitative: [
                "Knows identities but sometimes forgets which applies",
                "Needs prompting for negative vs complementary",
                "Can apply once identity is identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot apply identities", "Confuses identities"],
              qualitative: [
                "Does not remember negative angle identities",
                "Confuses sin(−θ) with cos(−θ)",
                "Does not understand complementary relationship"
              ]
            }
          },
          learningObjectives: [
            "Apply negative angle identities: sin(−θ) = −sin θ, cos(−θ) = cos θ, tan(−θ) = −tan θ",
            "Understand reflection in x-axis changes y-coordinate (sine) but not x-coordinate (cosine)",
            "Apply complementary identities: sin(90° − θ) = cos θ, cos(90° − θ) = sin θ",
            "Recognize sine and cosine are complementary functions",
            "Use identities to simplify expressions",
            "Use identities to solve equations",
            "Verify identities using unit circle reasoning"
          ],
          sampleProblems: [
            {
              problem: "Simplify sin(−45°) using negative angle identity"
            },
            {
              problem: "Find cos(−60°) without calculator"
            },
            {
              problem: "Use complementary identity to find sin 30° given that cos 60° = 1/2"
            }
          ],
          relevantFormulas: [
            "Negative angle identities:",
            "  • sin(−θ) = −sin θ  (sine is odd function)",
            "  • cos(−θ) = cos θ   (cosine is even function)",
            "  • tan(−θ) = −tan θ  (tangent is odd function)",
            "Why (using unit circle):",
            "  • Point at angle −θ is reflection of point at θ in x-axis",
            "  • Reflection in x-axis: (x, y) → (x, −y)",
            "  • So (cos θ, sin θ) → (cos(−θ), sin(−θ)) = (cos θ, −sin θ)",
            "  • Therefore: cos(−θ) = cos θ, sin(−θ) = −sin θ",
            "Complementary angle identities:",
            "  • sin(90° − θ) = cos θ",
            "  • cos(90° − θ) = sin θ",
            "  • tan(90° − θ) = 1/tan θ (or cot θ)",
            "Why: angles θ and 90° − θ are complementary in right triangle",
            "Example: sin(−30°) = −sin 30° = −1/2",
            "Example: cos 20° = sin(90° − 20°) = sin 70°"
          ],
          availableTools: ["unitCircle"]  // PLACEHOLDER - to be developed
        },
        {
          id: "double-angle-identities",
          title: "Double Angle Identities",
          difficulty: "advanced",
          prerequisites: ["pythagorean-identity"],
          masterySignals: "Student applies double angle identities to find exact values and simplify in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of double angle formulas",
                "Correctly derives values using identities"
              ],
              qualitative: [
                "Knows sin 2θ = 2 sin θ cos θ",
                "Knows three forms of cos 2θ:",
                "  • cos 2θ = cos²θ − sin²θ",
                "  • cos 2θ = 1 − 2sin²θ",
                "  • cos 2θ = 2cos²θ − 1",
                "Chooses appropriate form based on given information",
                "Uses identities to find exact values (e.g., cos 30° from cos 60°)",
                "Applies to simplify expressions",
                "Verifies identities using double angle formulas"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on which form to use"],
              qualitative: [
                "Knows sin 2θ formula but uncertain about cos 2θ variations",
                "Needs prompting for which cos 2θ form to choose",
                "Can apply once formula is identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot apply double angle formulas", "Confuses formulas"],
              qualitative: [
                "Does not remember double angle identities",
                "Confuses sin 2θ with 2 sin θ",
                "Cannot choose appropriate cos 2θ form"
              ]
            }
          },
          learningObjectives: [
            "Apply sin 2θ = 2 sin θ cos θ to find exact values and simplify",
            "Apply cos 2θ = cos²θ − sin²θ (primary form)",
            "Derive cos 2θ = 1 − 2sin²θ using Pythagorean identity",
            "Derive cos 2θ = 2cos²θ − 1 using Pythagorean identity",
            "Choose appropriate cos 2θ form based on given information",
            "Use identities to find unknown values (e.g., find sin 2θ given sin θ and quadrant)",
            "Verify double angle identities using algebra and Pythagorean identity"
          ],
          sampleProblems: [
            {
              problem: "Given sin θ = 3/5 and 0° < θ < 90°, find sin 2θ and cos 2θ"
            },
            {
              problem: "Verify the identity: cos 2θ = 1 − 2sin²θ using cos 2θ = cos²θ − sin²θ and the Pythagorean identity"
            },
            {
              problem: "Use a double angle identity to find cos 60° given that cos 30° = √3/2"
            }
          ],
          relevantFormulas: [
            "Double angle identities:",
            "  • sin 2θ = 2 sin θ cos θ",
            "  • cos 2θ = cos²θ − sin²θ  (primary form)",
            "  • cos 2θ = 1 − 2sin²θ     (using cos²θ = 1 − sin²θ)",
            "  • cos 2θ = 2cos²θ − 1     (using sin²θ = 1 − cos²θ)",
            "Derivation of alternative cos 2θ forms:",
            "  Start with: cos 2θ = cos²θ − sin²θ",
            "  Substitute sin²θ = 1 − cos²θ:",
            "    cos 2θ = cos²θ − (1 − cos²θ) = 2cos²θ − 1",
            "  Substitute cos²θ = 1 − sin²θ:",
            "    cos 2θ = (1 − sin²θ) − sin²θ = 1 − 2sin²θ",
            "When to use which form:",
            "  • Given sin θ only → use cos 2θ = 1 − 2sin²θ",
            "  • Given cos θ only → use cos 2θ = 2cos²θ − 1",
            "  • Given both → use any form (primary is simplest)",
            "Example: If sin θ = 4/5 and cos θ = 3/5:",
            "  sin 2θ = 2 sin θ cos θ = 2(4/5)(3/5) = 24/25",
            "  cos 2θ = cos²θ − sin²θ = (3/5)² − (4/5)² = 9/25 − 16/25 = −7/25"
          ],
          availableTools: []  // No visual tool needed - algebraic manipulation
        },
        {
          id: "algebraic-manipulation",
          title: "Algebraic Manipulation with Trig Expressions",
          difficulty: "advanced",
          prerequisites: ["pythagorean-identity", "double-angle-identities"],
          masterySignals: "Student simplifies and proves trig identities using algebraic techniques in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ expressions simplified correctly",
                "Successfully proves 2+ identities"
              ],
              qualitative: [
                "Factors trig expressions (e.g., 2 sin θ + 6 sin θ = 8 sin θ)",
                "Expands products using distributive property",
                "Substitutes identities strategically (Pythagorean, double angle)",
                "Simplifies complex fractions with trig terms",
                "Proves identities by working from one side to the other",
                "Recognizes when to use which identity",
                "Shows clear algebraic steps"
              ]
            },
            developing: {
              quantitative: ["1-2 simplifications with hints on which identity"],
              qualitative: [
                "Can perform basic operations but unsure which identity to use",
                "Needs prompting for factoring or substitution strategy",
                "Can complete once approach is identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot simplify trig expressions", "Incorrect algebra"],
              qualitative: [
                "Does not know how to manipulate trig expressions",
                "Makes algebraic errors",
                "Cannot prove identities"
              ]
            }
          },
          learningObjectives: [
            "Simplify expressions: combine like terms (3 sin θ + 5 sin θ = 8 sin θ)",
            "Factor trig expressions: 2 sin θ cos θ + 6 sin θ = 2 sin θ (cos θ + 3)",
            "Expand using distributive property: sin θ (2 + cos θ) = 2 sin θ + sin θ cos θ",
            "Substitute Pythagorean identity to simplify: sin²θ + cos²θ = 1",
            "Substitute double angle identities where helpful",
            "Prove identities by showing LHS = RHS using algebraic manipulation",
            "Work from more complex side toward simpler side when proving"
          ],
          sampleProblems: [
            {
              problem: "Simplify: 2 sin θ + 6 sin θ"
            },
            {
              problem: "Expand and simplify: (cos θ + sin θ)² using the Pythagorean identity"
            },
            {
              problem: "Prove: (cos θ + sin θ)² − (cos θ − sin θ)² = 4 sin θ cos θ"
            }
          ],
          relevantFormulas: [
            "Algebraic operations with trig:",
            "  • Combine like terms: a sin θ + b sin θ = (a + b) sin θ",
            "  • Distributive: a(sin θ + cos θ) = a sin θ + a cos θ",
            "  • Factoring: sin²θ − cos²θ = (sin θ + cos θ)(sin θ − cos θ)",
            "Useful identities for simplification:",
            "  • sin²θ + cos²θ = 1",
            "  • sin 2θ = 2 sin θ cos θ",
            "  • cos 2θ = cos²θ − sin²θ = 1 − 2sin²θ = 2cos²θ − 1",
            "  • tan θ = sin θ / cos θ",
            "Proving identities:",
            "  • Start with LHS (or RHS), work toward other side",
            "  • Show each step clearly",
            "  • Use identities to substitute",
            "  • Factor or expand as needed",
            "Example: Prove (4 sin θ + 3 cos θ)² + (3 sin θ − 4 cos θ)² = 25",
            "  LHS = 16sin²θ + 24sinθcosθ + 9cos²θ + 9sin²θ − 24sinθcosθ + 16cos²θ",
            "      = 25sin²θ + 25cos²θ",
            "      = 25(sin²θ + cos²θ)",
            "      = 25(1) = 25 = RHS ✓"
          ],
          availableTools: []  // No visual tool needed - algebraic manipulation
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 advanced sections:",
      "1. Solving Equations (advanced) - Find all solutions using unit circle and ASTC",
      "2. Negative & Complementary Identities (advanced) - Apply sin(−θ), cos(−θ), and 90° − θ relationships",
      "3. Double Angle Identities (advanced) - Use sin 2θ and cos 2θ formulas",
      "4. Algebraic Manipulation (advanced) - Simplify and prove trig identities"
    ],

    keyFormulas: `• Solving: sin θ = k → find reference angle, use ASTC for quadrants
                  • Negative: sin(−θ) = −sin θ, cos(−θ) = cos θ, tan(−θ) = −tan θ
                  • Complementary: sin(90° − θ) = cos θ, cos(90° − θ) = sin θ
                  • Double angle: sin 2θ = 2 sin θ cos θ
                  • Double angle: cos 2θ = cos²θ − sin²θ = 1 − 2sin²θ = 2cos²θ − 1
                  • Combine with Pythagorean identity: cos²θ + sin²θ = 1`
  },

  's4-math-advanced-trig-radians': {
    displayName: 'Radian Measure',
    topicName: 'understanding radians, conversion, arc length, and sector area',

    progressionStructure: {
      sections: [
        {
          id: "understanding-radians",
          title: "Understanding Radian Measure",
          difficulty: "advanced",
          prerequisites: ["unit-circle-fundamentals"],
          masterySignals: "Student explains radian definition and identifies common radian measures in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct radian angle identifications",
                "Correctly relates radians to arc length"
              ],
              qualitative: [
                "Understands radian as ratio: arc length / radius",
                "Knows 1 radian is angle when arc length equals radius",
                "Recognizes 2π radians = 360° (full circle)",
                "Knows π radians = 180° (half circle)",
                "States common angles: π/6, π/4, π/3, π/2, π, 2π",
                "Understands radians are dimensionless (ratio of lengths)",
                "Can explain why full circle is 2πr / r = 2π radians"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on common values"],
              qualitative: [
                "Understands definition but unsure of common angle values",
                "Needs prompting for relationship to arc length",
                "Can identify once definition is recalled"
              ]
            },
            struggling: {
              quantitative: ["Cannot work with radians", "Confuses with degrees"],
              qualitative: [
                "Does not understand radian definition",
                "Cannot relate to arc length",
                "Confuses radians and degrees constantly"
              ]
            }
          },
          learningObjectives: [
            "Define radian as angle subtended when arc length equals radius",
            "Understand θ (radians) = arc length / radius",
            "Recognize full circle: arc = 2πr, so angle = 2πr/r = 2π radians",
            "Know key relationship: 2π radians = 360°, so π radians = 180°",
            "State common angles in radians: π/6 (30°), π/4 (45°), π/3 (60°), π/2 (90°)",
            "Understand radians are dimensionless (pure number)",
            "Use radians as default in advanced mathematics"
          ],
          sampleProblems: [
            {
              problem: "Explain why a full circle is 2π radians"
            },
            {
              problem: "What angle in radians is subtended by an arc of length 5 cm on a circle of radius 5 cm?"
            },
            {
              problem: "Express 90° in radians without calculator"
            }
          ],
          relevantFormulas: [
            "Radian definition:",
            "  • θ (in radians) = arc length / radius = s / r",
            "  • 1 radian = angle when arc length equals radius",
            "Full circle in radians:",
            "  • Circumference = 2πr",
            "  • Full circle angle = 2πr / r = 2π radians",
            "  • Therefore: 2π radians = 360°",
            "  • So: π radians = 180°",
            "Common angles in radians:",
            "  • 30° = π/6,  45° = π/4,  60° = π/3",
            "  • 90° = π/2,  180° = π,  270° = 3π/2,  360° = 2π",
            "  • 0° = 0,  120° = 2π/3,  135° = 3π/4,  150° = 5π/6",
            "Why radians:",
            "  • Dimensionless (ratio of two lengths)",
            "  • Simplifies calculus formulas",
            "  • Natural unit for rotational motion"
          ],
          availableTools: ["unitCircle"]  // PLACEHOLDER - to be developed
        },
        {
          id: "degree-radian-conversion",
          title: "Converting Between Degrees and Radians",
          difficulty: "advanced",
          prerequisites: ["understanding-radians"],
          masterySignals: "Student converts between degrees and radians accurately in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions in both directions",
                "Leaves answers in exact form (multiples of π)"
              ],
              qualitative: [
                "Uses π radians = 180° relationship",
                "Converts degrees to radians: multiply by π/180",
                "Converts radians to degrees: multiply by 180/π",
                "Leaves answers as exact fractions of π when appropriate",
                "Simplifies fractions (e.g., 60° = 60π/180 = π/3)",
                "Recognizes when to use decimal vs exact form"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on conversion factor"],
              qualitative: [
                "Knows process but sometimes uses wrong conversion factor",
                "Needs prompting for simplification",
                "Can convert once formula is recalled"
              ]
            },
            struggling: {
              quantitative: ["Incorrect conversions", "Uses wrong formula"],
              qualitative: [
                "Confuses which direction to convert",
                "Cannot remember conversion factors",
                "Makes simplification errors"
              ]
            }
          },
          learningObjectives: [
            "Convert degrees to radians using: radians = degrees × π/180",
            "Convert radians to degrees using: degrees = radians × 180/π",
            "Leave exact answers in terms of π (e.g., π/3 not 1.047...)",
            "Simplify fractions: 90π/180 = π/2",
            "Recognize common conversions: 45° = π/4, 60° = π/3, 90° = π/2",
            "Use calculator for decimal approximations when needed"
          ],
          sampleProblems: [
            {
              problem: "Convert 135° to radians (leave answer in terms of π)"
            },
            {
              problem: "Convert 5π/6 radians to degrees"
            },
            {
              problem: "Convert 1 radian to degrees (to nearest degree)"
            }
          ],
          relevantFormulas: [
            "Conversion formulas:",
            "  • Degrees to radians: θ (rad) = θ (deg) × π/180",
            "  • Radians to degrees: θ (deg) = θ (rad) × 180/π",
            "Derivation:",
            "  • Since π radians = 180°",
            "  • 1° = π/180 radians",
            "  • 1 radian = 180/π degrees ≈ 57.3°",
            "Examples:",
            "  • 30° to radians: 30 × π/180 = 30π/180 = π/6",
            "  • 60° to radians: 60 × π/180 = 60π/180 = π/3",
            "  • π/4 to degrees: (π/4) × 180/π = 180/4 = 45°",
            "  • 2π/3 to degrees: (2π/3) × 180/π = 360/3 = 120°",
            "Simplification tips:",
            "  • Always reduce fractions: 90π/180 = π/2 (divide by 90)",
            "  • Leave in terms of π for exact answers",
            "  • Use calculator for decimals: π/6 ≈ 0.524 radians",
            "Common conversions to memorize:",
            "  • 30° = π/6,  45° = π/4,  60° = π/3,  90° = π/2",
            "  • 180° = π,  270° = 3π/2,  360° = 2π"
          ],
          availableTools: ["unitCircle"]  // PLACEHOLDER - to be developed
        },
        {
          id: "arc-length-sector-area",
          title: "Arc Length and Sector Area",
          difficulty: "advanced",
          prerequisites: ["degree-radian-conversion"],
          masterySignals: "Student calculates arc length and sector area using radian formulas in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct arc length calculations",
                "3+ correct sector area calculations",
                "Correctly converts to radians when needed"
              ],
              qualitative: [
                "Uses formula s = rθ where θ is in radians",
                "Uses formula A = (1/2)r²θ where θ is in radians",
                "Converts degrees to radians before applying formulas",
                "Understands these formulas only work with radians, not degrees",
                "Can rearrange to find r or θ given other quantities",
                "Includes correct units in answers"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on conversion to radians"],
              qualitative: [
                "Knows formulas but forgets to convert to radians",
                "Needs prompting for which formula to use",
                "Can solve once radians conversion is done"
              ]
            },
            struggling: {
              quantitative: ["Uses formulas with degrees", "Incorrect calculations"],
              qualitative: [
                "Does not know formulas",
                "Uses degree formulas instead of radian formulas",
                "Cannot rearrange formulas"
              ]
            }
          },
          learningObjectives: [
            "Calculate arc length using s = rθ (θ in radians)",
            "Calculate sector area using A = (1/2)r²θ (θ in radians)",
            "ALWAYS convert angle to radians before using these formulas",
            "Rearrange s = rθ to find r = s/θ or θ = s/r",
            "Rearrange A = (1/2)r²θ to find r or θ",
            "Include units: length in cm/m, area in cm²/m², angle in radians",
            "Understand derivation: sector area is fraction θ/(2π) of circle area πr²"
          ],
          sampleProblems: [
            {
              problem: "Find the arc length for a circle of radius 8 cm subtending an angle of π/3 radians"
            },
            {
              problem: "Find the area of a sector with radius 10 m and angle 60°"
            },
            {
              problem: "An arc of length 12 cm subtends an angle of 2 radians. Find the radius."
            }
          ],
          relevantFormulas: [
            "Arc length formula (θ in radians):",
            "  • s = rθ",
            "  • Where: s = arc length, r = radius, θ = angle in radians",
            "  • Rearranged: r = s/θ  or  θ = s/r",
            "Sector area formula (θ in radians):",
            "  • A = (1/2)r²θ",
            "  • Where: A = sector area, r = radius, θ = angle in radians",
            "  • Derivation: sector is fraction θ/(2π) of full circle",
            "    A = (θ/(2π)) × πr² = (1/2)r²θ",
            "CRITICAL: θ must be in radians!",
            "  • If angle given in degrees, convert first: θ (rad) = θ (deg) × π/180",
            "  • Then use formula",
            "Examples:",
            "  • Arc length: r = 6 cm, θ = π/4",
            "    s = rθ = 6 × π/4 = 3π/2 cm ≈ 4.71 cm",
            "  • Sector area: r = 10 m, θ = 60° = 60 × π/180 = π/3",
            "    A = (1/2)r²θ = (1/2)(10)²(π/3) = 50π/3 m² ≈ 52.4 m²",
            "  • Find radius: s = 15 cm, θ = 3 radians",
            "    r = s/θ = 15/3 = 5 cm"
          ],
          availableTools: ["unitCircle"]  // PLACEHOLDER - to be developed
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 advanced sections:",
      "1. Understanding Radians (advanced) - Define radians, relate to arc length",
      "2. Conversion (advanced) - Convert degrees ↔ radians using π/180 and 180/π",
      "3. Arc Length & Sector Area (advanced) - Apply s = rθ and A = (1/2)r²θ"
    ],

    keyFormulas: `• Definition: θ (radians) = arc length / radius = s/r
                  • Conversions: degrees × π/180 = radians, radians × 180/π = degrees
                  • 2π radians = 360°, π radians = 180°
                  • Common: π/6 (30°), π/4 (45°), π/3 (60°), π/2 (90°)
                  • Arc length: s = rθ (θ in radians)
                  • Sector area: A = (1/2)r²θ (θ in radians)
                  • ALWAYS convert to radians before using these formulas!`
  }
};

// Export for backward compatibility
export const S4_MATH_ADVANCED_TRIGONOMETRY: Record<AdvancedTrigonometryTopicId, any> = S4_MATH_ADVANCED_TRIGONOMETRY_SUBTOPICS;

// Export config that can be used by PromptLibrary
export const S4_ADVANCED_TRIGONOMETRY_CONFIG = {
  TUTOR_ROLE: ADVANCED_TRIGONOMETRY_TUTOR_CUSTOMIZATION.teachingPhilosophy,
  QUESTION_AGENT_ROLE: null, // Uses base from prompt-library
  SOLUTION_AGENT_ROLE: null, // Uses base from prompt-library
  MATH_TOOLS_AVAILABLE: ADVANCED_TRIGONOMETRY_MATH_TOOLS,
  // FORMATTING_RULES: imported from prompt-library
  // INTERACTION_PROTOCOL: imported from prompt-library
};

/**
 * ==========================================================================================
 * FUTURE DEVELOPMENT NOTE: unitCircle Math Tool Specification
 * ==========================================================================================
 *
 * The following tool is used throughout this module but currently does NOT exist.
 * It needs to be developed to provide full functionality for unit circle visualization.
 *
 * Tool Name: unitCircle
 * File Location (to create): src/components/math-tools/UnitCircleVisualizer.tsx
 *
 * Required Interface:
 *
 * interface UnitCircleVisualizerProps {
 *   angle?: number;                    // Angle in degrees (default: 45)
 *   showPoint?: boolean;               // Show P(cos θ, sin θ) (default: true)
 *   showTriangle?: boolean;            // Show reference triangle (default: false)
 *   showQuadrants?: boolean;           // Highlight quadrants (default: false)
 *   showSpecialAngles?: boolean;       // Mark 0°, 30°, 45°, 60°, 90°, etc. (default: false)
 *   highlightQuadrant?: 1 | 2 | 3 | 4; // Highlight specific quadrant (default: none)
 *   showCoordinates?: boolean;         // Display (cos θ, sin θ) (default: true)
 *   showASTC?: boolean;                // Show ASTC labels (default: false)
 *   showAngleArc?: boolean;            // Show arc from 0° to θ (default: true)
 *   angleMode?: 'degrees' | 'radians'; // Display mode (default: 'degrees')
 * }
 *
 * Required Visual Features:
 * 1. Circle with center (0, 0) and radius 1 unit
 * 2. Coordinate axes (x and y) clearly marked
 * 3. Point P that moves to position (cos θ, sin θ) based on angle
 * 4. Optional reference triangle from origin to P showing sin θ and cos θ
 * 5. Angle arc showing θ from positive x-axis
 * 6. Quadrant highlighting capability
 * 7. Special angle markers at multiples of 30° and 45°
 * 8. ASTC labels in each quadrant when enabled
 * 9. Coordinate display for point P
 * 10. Support both degree and radian display
 *
 * Sections requiring this tool (10 out of 17 total):
 * - unit-circle-fundamentals
 * - special-angle-values
 * - signs-quadrants-astc
 * - pythagorean-identity
 * - solving-basic-equations (with functionGraph)
 * - negative-complementary-identities
 * - understanding-radians
 * - degree-radian-conversion
 * - arc-length-sector-area
 *
 * Priority: HIGH - This tool is critical for effective teaching of unit circle concepts.
 *
 * Once developed:
 * 1. Remove PLACEHOLDER comments in this file
 * 2. Register tool in mathToolsRegistry.ts
 * 3. Create React component following existing tool patterns
 * 4. Test with sample problems from above sections
 * 5. Update notes files to use interactive tool instead of static diagrams
 *
 * ==========================================================================================
 */
