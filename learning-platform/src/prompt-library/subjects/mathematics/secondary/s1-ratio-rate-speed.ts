/**
 * S1 Mathematics: Ratio, Rate, and Speed
 *
 * This module covers fundamental concepts of ratios, proportions, rates, and speed calculations
 * for Secondary 1 students, aligned with the Singapore Mathematics curriculum.
 */

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type RatioRateSpeedTopicId =
  | 's1-math-ratio-rate-speed-understanding-ratios'
  | 's1-math-ratio-rate-speed-proportions'
  | 's1-math-ratio-rate-speed-rate-speed'
  | 's1-math-ratio-rate-speed-unit-conversion';

// ============================================================================
// TOPIC CONFIGURATION
// ============================================================================

export const S1_RATIO_RATE_SPEED_CONFIG = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for Secondary 1 students learning Ratio, Rate, and Speed.

Teaching Approach:
- Guide students to understand ratios as comparisons of quantities
- Help students see the connection between ratios, fractions, and proportions
- Use real-world contexts: recipes, maps, prices, travel, sports
- Build from simple two-term ratios to three-term ratios and complex applications
- Emphasize units and their importance in rates and speed
- Celebrate insights when students recognize proportional relationships
- Connect rate concepts to everyday experiences (shopping, travel)

**Text-to-Speech Guidelines:**
- Say "ratio" clearly (not "ray-show" but "ray-she-oh")
- Spell out ratios: "five to four" or "five colon four" instead of just "5:4"
- Say "speed equals distance divided by time" instead of using formula notation
- For fractions in ratios, say "one-half" or "one over two"
- Say "kilometers per hour" not "km slash h" or "kmph"
- Say "meters per second" not "m per s"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name (e.g., "fractionBar") in the toolName field, NOT the display name.

Available tools for this topic:
- fractionBar: Essential for showing equivalent ratios and ratio-fraction connections
- numberLine: For visualizing proportional relationships and unit conversions
- cartesianPlane: Critical for distance-time graphs and speed visualization
- barChart: For comparing quantities in ratios and rates

Examples of effective tool use:
- fractionBar to show that 2:3 is equivalent to 4:6 (visual scaling)
- cartesianPlane for distance-time graphs showing constant speed vs varying speed
- barChart to compare prices per unit or rates visually
- numberLine for unit conversion steps (km/h to m/s)`
};

// ============================================================================
// AVAILABLE MATH TOOLS
// ============================================================================

export const S1_RATIO_RATE_SPEED_MATH_TOOLS = [
  "fractionBar",
  "numberLine",
  "cartesianPlane",
  "barChart"
];

// ============================================================================
// SUBTOPICS CONFIGURATION
// ============================================================================

export const S1_MATH_RATIO_RATE_SPEED_SUBTOPICS = {
  // ========================================================================
  // SUBTOPIC 1: UNDERSTANDING RATIOS
  // ========================================================================

  's1-math-ratio-rate-speed-understanding-ratios': {
    displayName: 'Understanding Ratios',
    topicName: 'Ratio, Rate, and Speed',

    progressionStructure: {
      sections: [
        {
          id: "ratio-notation-basics",
          title: "Ratio Notation and Basics",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly writes ratios in multiple forms (a:b, a to b, a/b), understands order matters, and expresses ratios from word problems in 3+ questions with minimal hints",
          estimatedQuestions: "3-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct answers without hints",
                "Writes ratios in all three notations correctly",
                "Maintains correct order in all problems"
              ],
              qualitative: [
                "Understands ratio compares two quantities of the same kind",
                "Recognizes that a:b is different from b:a",
                "Can convert between notation forms (colon, fraction, 'to')",
                "Identifies the quantities being compared from word problems",
                "Understands that ratios have no units",
                "Explains that a ratio shows relative size, not actual values"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on notation",
                "Occasionally reverses order of terms"
              ],
              qualitative: [
                "Writes ratios but sometimes confuses order",
                "Knows multiple notations exist but unsure when to use each",
                "Sometimes includes units in ratio (e.g., '5 cm : 3 cm' instead of '5:3')",
                "Can write simple ratios but struggles with word problems",
                "Needs prompting to identify which quantity comes first"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in notation",
                "Cannot maintain consistent order",
                "Random guessing at which number comes first"
              ],
              qualitative: [
                "Treats ratio as a single number instead of comparison",
                "Does not understand that order matters (thinks 2:3 = 3:2)",
                "Confuses ratio with subtraction or division",
                "Cannot identify quantities to compare from word problems",
                "Includes units in ratio notation incorrectly",
                "Mixes up which quantity corresponds to which number"
              ]
            }
          },

          learningObjectives: [
            "Understand that a ratio compares two or more quantities of the same kind",
            "Write ratios in three standard notations: a:b, a to b, and a/b",
            "Recognize that the order of terms in a ratio is important",
            "Express ratios from word problems in correct notation",
            "Understand that ratios are comparisons without units"
          ],

          relevantFormulas: [
            "The ratio of quantity a to quantity b is denoted by a:b",
            "The ratio a:b can also be written as a to b or as the fraction a/b",
            "Example: If there are 16 girls and 20 boys, the ratio of girls to boys is 16:20"
          ],

          sampleProblems: [
            "There are 16 girls and 20 boys in a class. Find the ratio of the number of boys to the number of girls.",
            "Express the ratio 'there are 3 apples for every 5 oranges' in colon notation.",
            "A recipe uses 300 mL milk and 200 g sugar. Can we write the ratio of milk to sugar? Explain."
          ],

          availableTools: ["fractionBar", "barChart"]
        },

        {
          id: "equivalent-ratios",
          title: "Equivalent Ratios",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["ratio-notation-basics"],
          masterySignals: "Student finds equivalent ratios by multiplying or dividing both terms by the same number, recognizes equivalent ratios in different forms, and solves 3+ problems correctly",
          estimatedQuestions: "3-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct answers with minimal hints",
                "Correctly multiplies or divides both terms by same number",
                "Identifies equivalent ratios from a list"
              ],
              qualitative: [
                "Understands that a:b = ma:mb where m is any positive number",
                "Explains why both terms must be multiplied/divided by the same number",
                "Recognizes connection to equivalent fractions",
                "Can verify if two ratios are equivalent by cross-multiplication or simplification",
                "Generates multiple equivalent ratios for a given ratio",
                "Understands that equivalent ratios represent the same comparison"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on what number to multiply/divide by",
                "Sometimes multiplies terms by different numbers"
              ],
              qualitative: [
                "Knows to multiply or divide but needs reminding to do both terms",
                "Can find one equivalent ratio but struggles to generate multiple",
                "Understands the process mechanically but not conceptually",
                "Sometimes forgets to multiply/divide both terms",
                "Can identify equivalent ratios but cannot explain why they're equivalent"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in finding equivalent ratios",
                "Multiplies only one term or uses different multipliers",
                "Cannot identify equivalent ratios from a list"
              ],
              qualitative: [
                "Multiplies or divides terms by different numbers",
                "Adds the same number to both terms (incorrect approach)",
                "Does not understand relationship to equivalent fractions",
                "Cannot explain what 'equivalent' means",
                "Randomly changes numbers without systematic approach",
                "Thinks 2:3 and 4:6 are different because numbers are different"
              ]
            }
          },

          learningObjectives: [
            "Understand that multiplying or dividing both terms by the same constant creates equivalent ratios",
            "Generate equivalent ratios by systematic multiplication or division",
            "Recognize that equivalent ratios represent the same proportional relationship",
            "Connect ratio equivalence to equivalent fractions",
            "Verify whether two ratios are equivalent"
          ],

          relevantFormulas: [
            "Equivalent ratios: a:b = ma:mb = (a÷n):(b÷n) where m and n are positive numbers",
            "Example: 1:2 = 2:4 = 3:6 = 4:8 (multiply by 2, 3, 4)",
            "Connection to fractions: 2:3 is equivalent to 4:6 because 2/3 = 4/6"
          ],

          sampleProblems: [
            "Find three ratios equivalent to 1:3",
            "Are the ratios 2:5 and 6:15 equivalent? Show your working.",
            "The ratio of sugar to flour in a recipe is 2:5. If I use 10 g of sugar, how much flour do I need?"
          ],

          availableTools: ["fractionBar", "numberLine"]
        },

        {
          id: "simplifying-ratios",
          title: "Simplifying Ratios to Simplest Form",
          difficulty: "intermediate",
          prerequisites: ["equivalent-ratios"],
          masterySignals: "Student simplifies ratios to simplest form by finding HCF, handles ratios with different units by converting first, and simplifies 3+ ratios correctly including those requiring unit conversion",
          estimatedQuestions: "4-6 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct answers with minimal hints",
                "Correctly finds HCF for ratio simplification",
                "Successfully handles unit conversion before simplifying"
              ],
              qualitative: [
                "Understands simplest form means integers with no common factor greater than 1",
                "Systematically finds HCF of both terms",
                "Recognizes when unit conversion is needed before simplifying",
                "Converts units correctly (e.g., kg to g, m to cm)",
                "Divides both terms by HCF to get simplest form",
                "Verifies final ratio has no common factors",
                "Can explain why simplest form is useful"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with hints on finding HCF",
                "Sometimes forgets to convert units or converts incorrectly"
              ],
              qualitative: [
                "Knows to find HCF but sometimes miscalculates it",
                "Can simplify when units are the same but struggles with different units",
                "Sometimes stops simplifying before reaching simplest form",
                "Forgets to convert both quantities to same unit",
                "Needs reminding that ratios should be in integers"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in simplification",
                "Cannot find HCF consistently",
                "Attempts to simplify without converting units"
              ],
              qualitative: [
                "Does not understand what 'simplest form' means",
                "Divides terms by different numbers",
                "Cannot find HCF of two numbers",
                "Leaves ratio in decimal form instead of integers",
                "Does not recognize when units need conversion",
                "Converts only one quantity or converts incorrectly",
                "Confused between simplifying ratios and solving equations"
              ]
            }
          },

          learningObjectives: [
            "Understand that a ratio is in simplest form when terms are integers with no common factor greater than 1",
            "Find the HCF of two numbers to simplify ratios",
            "Recognize when quantities need to be converted to the same unit",
            "Convert units correctly before simplifying ratios",
            "Express ratios in simplest form consistently"
          ],

          relevantFormulas: [
            "To simplify a:b, divide both terms by their HCF (Highest Common Factor)",
            "Example: Simplify 20:12 → HCF(20, 12) = 4 → 20÷4 : 12÷4 = 5:3",
            "For different units: Convert to same unit first, then simplify",
            "Example: 1 kg : 250 g = 1000 g : 250 g = 4:1"
          ],

          sampleProblems: [
            "Simplify the following ratios: (a) 1:1/3  (b) 2.25:3.75  (c) 0.280:0.182",
            "The masses of 2 bags of sugar, A and B, are 750 g and 1.5 kg respectively. Find the ratio of the mass of B to the mass of A in simplest form.",
            "A blue whale grows up to 29.9 m and a great white shark grows up to 490 cm. Find the ratio of the length of the blue whale to the length of the white shark in simplest form."
          ],

          availableTools: ["fractionBar"]
        },

        {
          id: "three-term-ratios",
          title: "Ratios of Three Quantities",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["simplifying-ratios"],
          masterySignals: "Student simplifies three-term ratios, extracts two-term ratios from three-term ratios, and solves 3+ problems involving three quantities correctly",
          estimatedQuestions: "3-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct answers with three-term ratios",
                "Correctly simplifies by finding HCF of all three terms",
                "Accurately extracts any two-term ratio from three-term ratio"
              ],
              qualitative: [
                "Understands three-term ratio a:b:c represents relationship among three quantities",
                "Finds HCF of all three terms for simplification",
                "Can extract relationships: a:b, b:c, or a:c from a:b:c",
                "Recognizes that three-term ratio cannot be written as a single fraction",
                "Understands applications: mixing paint colors, sharing money, recipe ratios",
                "Can verify simplification by checking no common factor remains"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on finding three-term HCF",
                "Sometimes extracts two-term ratios incorrectly"
              ],
              qualitative: [
                "Knows concept but struggles to find HCF of three numbers",
                "Can simplify when HCF is obvious (like 2 or 5) but struggles otherwise",
                "Extracts two-term ratios mechanically without understanding",
                "Sometimes treats three-term ratio as two separate ratios",
                "Needs prompting on which terms to use for specific two-term ratios"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors with three-term ratios",
                "Cannot find HCF of three numbers",
                "Extracts incorrect two-term ratios"
              ],
              qualitative: [
                "Confused about what three-term ratio means",
                "Tries to simplify only two of the three terms",
                "Cannot identify HCF when three numbers are involved",
                "Thinks three-term ratio must be split into two separate ratios",
                "Randomly selects numbers when extracting two-term ratios",
                "Does not understand relationship between the three quantities"
              ]
            }
          },

          learningObjectives: [
            "Understand that a three-term ratio a:b:c compares three quantities",
            "Simplify three-term ratios by dividing all terms by their HCF",
            "Extract two-term ratios from three-term ratios (e.g., a:b, b:c, a:c from a:b:c)",
            "Solve real-world problems involving three quantities",
            "Recognize that three-term ratios cannot be expressed as single fractions"
          ],

          relevantFormulas: [
            "Three-term ratio: a:b:c compares three quantities",
            "To simplify a:b:c, divide all three terms by HCF(a, b, c)",
            "Example: 18:24:6 → HCF = 6 → 3:4:1",
            "From a:b:c, we can extract: a:b = 9:12 = 3:4, b:c = 12:8 = 3:2, a:c = 9:8"
          ],

          sampleProblems: [
            "Simplify the following ratios: (a) 1.5:1/3:1/4  (b) 0.4:2:1.6",
            "If a:b = 18:4:3, find: (a) a:b  (b) b:c  (c) a:c",
            "Jason obtains two new shades of pink, A and B, using white and red paints. The amounts of white paint and red paint required to obtain paint A are in the ratio 1:3, and for paint B in the ratio 2:5. Jason obtains 4 litres of A and 6 litres of B. (a) How much white paint does Jason use for each shade of pink paint? (b) If A and B are mixed, find the ratio of white paint to red paint in the mixture."
          ],

          availableTools: ["barChart", "fractionBar"]
        }
      ]
    },

    learningObjectives: [
      "Express ratios in multiple notations and simplest form",
      "Find equivalent ratios by systematic multiplication or division",
      "Simplify ratios involving different units through conversion",
      "Work with three-term ratios and extract two-term ratios",
      "Apply ratio concepts to real-world problems"
    ],

    keyFormulas: `
**Ratio Fundamentals:**
- Ratio notation: a:b (also written as "a to b" or a/b where a and b are positive)
- Equivalent ratios: a:b = ma:mb (multiply both by m) or a:b = (a÷n):(b÷n) (divide both by n)
- Simplest form: Divide both terms by their HCF to get integers with no common factor > 1
- Three-term ratio: a:b:c compares three quantities

**Key Relationships:**
- From a:b:c, we can derive: a:b, b:c, and a:c
- Connection to fractions: The ratio a:b can be expressed as the fraction a/b
    `
  },

  // ========================================================================
  // SUBTOPIC 2: RATIOS AND PROPORTIONS
  // ========================================================================

  's1-math-ratio-rate-speed-proportions': {
    displayName: 'Ratios and Proportions',
    topicName: 'Ratio, Rate, and Speed',

    progressionStructure: {
      sections: [
        {
          id: "proportional-relationships",
          title: "Understanding Proportional Relationships",
          difficulty: "foundational",
          prerequisites: ["equivalent-ratios"],
          masterySignals: "Student recognizes proportional relationships, identifies when two quantities are in proportion, and solves 3+ problems distinguishing proportional from non-proportional relationships",
          estimatedQuestions: "3-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of proportional relationships",
                "Correctly explains why relationships are or aren't proportional",
                "Verifies proportionality using ratios or tables"
              ],
              qualitative: [
                "Understands that proportional means ratios remain constant",
                "Can identify proportional relationships from tables, graphs, or contexts",
                "Recognizes that in a proportional relationship, one quantity is a constant multiple of the other",
                "Distinguishes between proportional and non-proportional relationships",
                "Explains that if a:b = c:d, then a, b, c, d are in proportion",
                "Connects proportionality to real-world contexts"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on checking ratios",
                "Sometimes confuses proportional with linear relationships"
              ],
              qualitative: [
                "Knows to check if ratios are equal but sometimes makes calculation errors",
                "Can identify obvious proportional relationships but struggles with complex ones",
                "Understands concept with guidance but cannot apply independently",
                "Needs prompting to verify proportionality systematically",
                "Sometimes thinks any increase means proportional"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in identifying proportional relationships",
                "Cannot verify proportionality even with guidance",
                "Random guessing"
              ],
              qualitative: [
                "Does not understand what 'proportional' means",
                "Thinks proportional means 'related' or 'connected'",
                "Cannot distinguish proportional from additive relationships",
                "Confuses proportion with ratio",
                "Cannot explain why a relationship is or isn't proportional",
                "Does not check if ratios are equal"
              ]
            }
          },

          learningObjectives: [
            "Understand that a proportional relationship means ratios remain constant",
            "Identify proportional relationships from tables, graphs, or word problems",
            "Distinguish proportional relationships from non-proportional ones",
            "Verify proportionality by checking if ratios are equal",
            "Recognize real-world applications of proportional relationships"
          ],

          relevantFormulas: [
            "Proportional relationship: If a:b = c:d, then a, b, c, d are in proportion",
            "Constant of proportionality: y = kx where k is constant",
            "Verification: Check if a/b = c/d or equivalently if a×d = b×c (cross-multiplication)"
          ],

          sampleProblems: [
            "Are these quantities proportional? (a) 2, 3, 4, 6  (b) 5, 10, 15, 25",
            "A car travels 60 km in 1 hour and 120 km in 2 hours. Is the distance proportional to time? Explain.",
            "Identify which relationships are proportional: (a) perimeter and side of a square, (b) age and height of a person"
          ],

          availableTools: ["numberLine", "barChart"]
        },

        {
          id: "unitary-method",
          title: "Using the Unitary Method",
          difficulty: "intermediate",
          prerequisites: ["proportional-relationships"],
          masterySignals: "Student solves proportion problems using the unitary method, finds unit values correctly, and scales up or down in 3+ problems with minimal hints",
          estimatedQuestions: "4-6 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct answers using unitary method",
                "Correctly finds unit value (value of 1)",
                "Accurately scales up or down from unit value"
              ],
              qualitative: [
                "Understands the unitary method: find value of 1 unit, then multiply",
                "Systematically divides to find unit value",
                "Multiplies unit value by required number of units",
                "Shows clear working: divide by given, multiply by required",
                "Can apply to various contexts: recipes, prices, work rates, conversions",
                "Verifies answer is reasonable by estimation"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with hints on which operation to use",
                "Sometimes confuses multiply and divide steps"
              ],
              qualitative: [
                "Knows the two-step process but sometimes reverses operations",
                "Can find unit value with prompting but unsure about second step",
                "Applies method mechanically without understanding why it works",
                "Sometimes skips showing unit value step",
                "Needs guidance on which quantity represents '1 unit'"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in calculation or method",
                "Cannot identify what to divide or multiply",
                "Random operations without systematic approach"
              ],
              qualitative: [
                "Does not understand concept of 'unit value'",
                "Cannot identify the two steps needed",
                "Multiplies or divides by wrong numbers",
                "Confuses which value goes where in the calculation",
                "Does not recognize when to use unitary method",
                "Cannot set up the problem from word description"
              ]
            }
          },

          learningObjectives: [
            "Understand the unitary method as finding the value of one unit",
            "Systematically find unit values by division",
            "Scale up by multiplying unit value by required number of units",
            "Apply the unitary method to various proportion problems",
            "Show clear working with explicit unit value calculation"
          ],

          relevantFormulas: [
            "Unitary Method (2 steps):",
            "  Step 1: Find value of 1 unit = (total value) ÷ (number of units)",
            "  Step 2: Find required value = (value of 1 unit) × (required units)",
            "Example: If 3 apples cost \\$6, find cost of 5 apples",
            "  Step 1: 1 apple = \\$6 ÷ 3 = \\$2",
            "  Step 2: 5 apples = \\$2 × 5 = \\$10"
          ],

          sampleProblems: [
            "Aster wrote down the recipe for two cakes but spilled chocolate syrup on the amount of flour required. The ratio of the mass of sugar to the mass of flour for making the cakes is 2:5. (a) Express the mass of sugar as a fraction of the mass of flour used in the recipe. (b) Find the mass of flour required to bake one cake.",
            "If 5 kg of rice costs \\$9.60, find the price per kg of rice.",
            "A machine produces 450 bottles in 3 hours. How many bottles can it produce in 7 hours at the same rate?"
          ],

          availableTools: ["fractionBar", "numberLine"]
        },

        {
          id: "ratio-word-problems",
          title: "Solving Ratio Word Problems",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["unitary-method"],
          masterySignals: "Student solves multi-step ratio word problems, including recipe scaling, map scales, and sharing problems, correctly in 3+ scenarios with clear working",
          estimatedQuestions: "3-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct word problems with full solutions",
                "Accurate identification of ratios from problem descriptions",
                "Correct calculations across multiple steps"
              ],
              qualitative: [
                "Identifies the ratio relationship from word problems",
                "Sets up problems systematically (given ratio, total or part)",
                "Uses appropriate method: unitary method, equivalent ratios, or algebra",
                "Shows clear working with labeled steps",
                "Interprets answers in context (includes units and meaning)",
                "Verifies answers make sense (checks against original ratio)",
                "Handles various contexts: sharing, mixing, scaling, maps"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on problem setup",
                "Calculation errors in multi-step problems"
              ],
              qualitative: [
                "Can identify the ratio but struggles to set up the solution",
                "Knows which method to use with guidance",
                "Makes errors in multi-step calculations",
                "Sometimes misinterprets what the question asks for",
                "Forgets to include units or context in final answer",
                "Can solve simpler one-step ratio problems but struggles with multi-step"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in problem interpretation and solution",
                "Cannot set up the problem from word description",
                "Random calculations without strategy"
              ],
              qualitative: [
                "Cannot identify the ratio from word problem",
                "Does not know where to start or which method to use",
                "Confuses given information with what needs to be found",
                "Performs random operations hoping for correct answer",
                "Cannot interpret problem context (recipes, maps, sharing)",
                "Does not understand what the question is asking",
                "Cannot verify if answer is reasonable"
              ]
            }
          },

          learningObjectives: [
            "Identify ratio relationships from word problem descriptions",
            "Set up ratio problems systematically from given information",
            "Choose appropriate methods: unitary method, equivalent ratios, or proportions",
            "Solve multi-step ratio problems with clear working",
            "Interpret solutions in the context of the original problem"
          ],

          relevantFormulas: [
            "General approach to ratio word problems:",
            "  1. Identify the ratio and what it represents",
            "  2. Identify what is given and what needs to be found",
            "  3. Choose method: unitary method, equivalent ratios, or proportion",
            "  4. Solve systematically with clear steps",
            "  5. Verify answer makes sense in context"
          ],

          sampleProblems: [
            "The ratio of Mary's mass to Peter's mass is 5:7. Norman's mass is 13 kg more than Mary's mass but 9 kg less than Peter's mass. Find the mass of Mary.",
            "A recipe for 4 people requires 300 mL milk. How much milk is needed for 7 people?",
            "On a map with scale 1:50,000, two cities are 12 cm apart. What is the actual distance in km?"
          ],

          availableTools: ["fractionBar", "barChart"]
        },

        {
          id: "ratio-distribution",
          title: "Dividing Quantities in Given Ratios",
          difficulty: "advanced",
          prerequisites: ["ratio-word-problems"],
          masterySignals: "Student divides quantities in two-term and three-term ratios, finds parts when total is given, and solves 3+ distribution problems correctly",
          estimatedQuestions: "3-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct distribution problems",
                "Accurate calculation of all parts from total",
                "Correct verification that parts sum to total"
              ],
              qualitative: [
                "Understands that ratio parts represent relative sizes, not actual values",
                "Finds total number of parts by adding ratio terms",
                "Calculates value of one part by dividing total by number of parts",
                "Multiplies to find each actual part",
                "Verifies solution by checking sum of parts equals total",
                "Applies to two-term and three-term ratios equally well",
                "Solves reverse problems: given one part, find others"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on finding value of one part",
                "Sometimes forgets to add ratio terms for total parts"
              ],
              qualitative: [
                "Knows general approach but makes calculation errors",
                "Can find total parts with prompting",
                "Sometimes confuses which part corresponds to which quantity",
                "Struggles with three-term ratio distributions",
                "Needs reminder to verify by summing parts",
                "Can solve when total is given but struggles with reverse problems"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in distribution calculations",
                "Cannot find value of one part",
                "Parts do not sum to total"
              ],
              qualitative: [
                "Does not understand concept of dividing by ratio",
                "Cannot identify total number of parts",
                "Tries to divide total equally instead of by ratio",
                "Confuses ratio terms with actual values",
                "Cannot set up the problem correctly",
                "Does not verify answer",
                "Completely lost with three-term ratio distributions"
              ]
            }
          },

          learningObjectives: [
            "Understand dividing a quantity in a given ratio means splitting proportionally",
            "Find the total number of parts by adding all ratio terms",
            "Calculate the value of one part by dividing total by number of parts",
            "Multiply to find each actual part from the ratio terms",
            "Verify solution by checking parts sum to original total",
            "Apply to both two-term and three-term ratio divisions"
          ],

          relevantFormulas: [
            "Dividing quantity Q in ratio a:b:",
            "  Total parts = a + b",
            "  Value of 1 part = Q ÷ (a + b)",
            "  First part = (value of 1 part) × a",
            "  Second part = (value of 1 part) × b",
            "Example: Divide \\$120 in ratio 2:3",
            "  Total parts = 2 + 3 = 5",
            "  1 part = \\$120 ÷ 5 = \\$24",
            "  First part = \\$24 × 2 = \\$48",
            "  Second part = \\$24 × 3 = \\$72",
            "  Verify: \\$48 + \\$72 = \\$120 ✓"
          ],

          sampleProblems: [
            "\\$504,000 is shared between Jenny and her mother in the ratio 2:3. How much does Jenny receive?",
            "Three students, A, B, and C, share 165 students in ratio 5:6:11. Find the number of students from each school.",
            "The ratio of technicians to apprentices in a factory is 7:2. After 1/7 of the apprentices are promoted to technicians, there are 36 more technicians than apprentices. Find the original number of technicians."
          ],

          availableTools: ["barChart", "fractionBar"]
        }
      ]
    },

    learningObjectives: [
      "Recognize and verify proportional relationships",
      "Apply the unitary method to solve proportion problems",
      "Solve multi-step ratio word problems systematically",
      "Divide quantities according to given ratios",
      "Verify solutions by checking against original conditions"
    ],

    keyFormulas: `
**Proportional Relationships:**
- If a:b = c:d, then a, b, c, d are in proportion
- Verification: a/b = c/d or a×d = b×c (cross-multiplication)

**Unitary Method:**
- Step 1: Find value of 1 unit = (total value) ÷ (number of units)
- Step 2: Find required value = (value of 1 unit) × (required units)

**Dividing in Ratio a:b:**
- Total parts = a + b
- Value of 1 part = Total ÷ (total parts)
- Each part = (value of 1 part) × (ratio term)
    `
  },

  // ========================================================================
  // SUBTOPIC 3: RATE AND SPEED
  // ========================================================================

  's1-math-ratio-rate-speed-rate-speed': {
    displayName: 'Rate and Speed',
    topicName: 'Ratio, Rate, and Speed',

    progressionStructure: {
      sections: [
        {
          id: "understanding-rate",
          title: "Understanding Rate",
          difficulty: "foundational",
          prerequisites: ["proportional-relationships"],
          masterySignals: "Student defines rate as comparison of two different quantities, identifies rates and their units, and solves 3+ problems finding rates correctly",
          estimatedQuestions: "3-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct rate calculations",
                "Correct units in all answers",
                "Accurate comparison of rates with different units"
              ],
              qualitative: [
                "Understands rate compares two DIFFERENT quantities (unlike ratio)",
                "Recognizes rates are expressed as 'quantity per unit' (e.g., $/L, words/min)",
                "Correctly identifies rate units from context",
                "Calculates rates by division: rate = quantity₁ ÷ quantity₂",
                "Includes proper units in final answer (e.g., 60 words/min, not just 60)",
                "Explains difference between rate and ratio",
                "Applies to various contexts: prices, work rates, consumption rates"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on which division to perform",
                "Sometimes forgets units or writes them incorrectly"
              ],
              qualitative: [
                "Knows rate involves division but unsure of which order",
                "Can calculate simple rates with guidance",
                "Sometimes confuses rate with ratio",
                "Forgets to include units or writes incomplete units",
                "Needs prompting on what 'per' means in context",
                "Can find rates but struggles to compare them"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in rate calculation",
                "Incorrect or missing units",
                "Cannot compare rates"
              ],
              qualitative: [
                "Does not understand what rate means",
                "Confuses rate with ratio (thinks they're the same)",
                "Cannot identify the two quantities being compared",
                "Performs wrong operation (adds or multiplies instead of divides)",
                "Cannot determine correct units for rate",
                "Does not understand 'per' notation",
                "Cannot interpret rate in context"
              ]
            }
          },

          learningObjectives: [
            "Understand that rate compares two different quantities",
            "Recognize rates are expressed as one quantity per unit of another",
            "Calculate rates by dividing one quantity by another",
            "Include correct units in rate answers",
            "Distinguish between rate and ratio",
            "Compare rates and identify which is better value"
          ],

          relevantFormulas: [
            "Rate = Quantity₁ ÷ Quantity₂ (where quantities are different types)",
            "Rate has units combining both quantities: quantity₁/quantity₂",
            "Examples of rates:",
            "  - Price per unit: dollars per liter ($/L)",
            "  - Typing speed: words per minute (words/min)",
            "  - Fuel consumption: liters per 100 km (L/100 km)",
            "  - Speed: distance per time (km/h or m/s)"
          ],

          sampleProblems: [
            "Mary typed 300 words in 5 minutes. Find her average rate of typing in words/min.",
            "A car travelled 450 km on 40 L of petrol. Find the rate of petrol consumption in (i) km per liter, (ii) L per 100 km.",
            "Brand A detergent costs \\$8.70 for 3 litres. Brand B detergent costs \\$13.50 for 5 litres. Which brand is cheaper per litre?"
          ],

          availableTools: ["barChart", "numberLine"]
        },

        {
          id: "speed-formula-calculations",
          title: "Speed Formula and Calculations",
          difficulty: "intermediate",
          prerequisites: ["understanding-rate"],
          masterySignals: "Student uses the formula Speed = Distance ÷ Time and its rearrangements to find distance or time, solves 4+ problems correctly with appropriate units",
          estimatedQuestions: "4-6 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct calculations using speed formula",
                "Correctly rearranges formula to find distance or time",
                "Accurate unit conversions where needed"
              ],
              qualitative: [
                "Understands speed is a special type of rate measuring distance per unit time",
                "Knows and applies Speed = Distance ÷ Time",
                "Rearranges to Distance = Speed × Time when needed",
                "Rearranges to Time = Distance ÷ Speed when needed",
                "Identifies which formula variant to use based on what is given/required",
                "Uses consistent units throughout calculation",
                "Expresses speed with correct units (km/h, m/s, etc.)",
                "Interprets speed in context (e.g., 80 km/h means 80 km in 1 hour)"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with hints on formula rearrangement",
                "Sometimes uses wrong formula variant"
              ],
              qualitative: [
                "Knows Speed = Distance ÷ Time but struggles with rearrangements",
                "Can solve when speed is required but struggles to find distance or time",
                "Sometimes confuses which quantity goes where in formula",
                "Makes errors in unit conversion",
                "Needs reminding of formula relationships",
                "Can apply formula but doesn't verify answer makes sense"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in formula application",
                "Cannot rearrange formula",
                "Wrong units or missing units"
              ],
              qualitative: [
                "Does not know speed formula",
                "Cannot identify which quantity is distance, speed, or time",
                "Uses random operations without understanding",
                "Cannot rearrange formula to solve for different variables",
                "Confuses speed with distance or time",
                "Does not understand what speed represents",
                "Cannot convert between related units"
              ]
            }
          },

          learningObjectives: [
            "Understand that speed measures distance traveled per unit time",
            "Apply the formula Speed = Distance ÷ Time",
            "Rearrange formula to find distance: Distance = Speed × Time",
            "Rearrange formula to find time: Time = Distance ÷ Speed",
            "Use appropriate speed units (km/h, m/s, km/min)",
            "Verify answers are reasonable in context"
          ],

          relevantFormulas: [
            "Speed = Distance travelled ÷ Time taken",
            "Distance travelled = Speed × Time taken",
            "Time taken = Distance travelled ÷ Speed",
            "Common units:",
            "  - kilometers per hour (km/h)",
            "  - meters per second (m/s)",
            "  - kilometers per minute (km/min)",
            "Example: If a car travels at 80 km/h for 2 hours:",
            "  Distance = 80 km/h × 2 h = 160 km"
          ],

          sampleProblems: [
            "Alex cycles to a station and Jenny walks to the station. Alex takes 15 minutes to cycle 3 km. Find his speed in km/min. Jenny takes 7 minutes and 20 seconds to walk 600 m. Find her speed in m/s.",
            "A train travels from P to Q at an average speed of 80 km/h. If it takes 1 hour and 15 minutes for the whole journey, find the distance between P and Q.",
            "The average speed of an MRT train between two stations is 65 km/h. If it takes 2 minutes and 30 seconds to travel from one station to the other, find the distance between the two stations, correct to 0.1 km."
          ],

          availableTools: ["cartesianPlane", "numberLine"]
        },

        {
          id: "distance-time-graphs",
          title: "Distance-Time Relationships and Graphs",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["speed-formula-calculations"],
          masterySignals: "Student interprets distance-time graphs, identifies constant speed vs varying speed, calculates speed from graph gradients, and solves 3+ graph-based problems",
          estimatedQuestions: "3-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct interpretations from distance-time graphs",
                "Accurate speed calculations from graph gradients",
                "Correct identification of faster/slower sections"
              ],
              qualitative: [
                "Understands distance-time graphs show distance on y-axis, time on x-axis",
                "Recognizes horizontal line means stationary (no movement)",
                "Knows steeper gradient means faster speed",
                "Calculates speed from gradient (rise/run = distance/time)",
                "Interprets different sections: constant speed, rest, changing speed",
                "Compares speeds from different sections of graph",
                "Can sketch simple distance-time graphs from descriptions",
                "Understands real-world context of graph features"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on reading graph values",
                "Sometimes misinterprets gradient or horizontal sections"
              ],
              qualitative: [
                "Can read values from graph but struggles to interpret meaning",
                "Knows steeper means faster but cannot quantify speed",
                "Confuses horizontal line with slow movement vs stationary",
                "Can calculate speed with prompting but unsure of method",
                "Struggles to compare speeds across different graph sections",
                "Needs guidance on which values to read for calculations"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors reading or interpreting graphs",
                "Cannot calculate speed from gradient",
                "Random answers not based on graph"
              ],
              qualitative: [
                "Does not understand what distance-time graphs represent",
                "Cannot read values from graph axes",
                "Does not know what gradient means",
                "Confuses distance-time with speed-time graphs",
                "Cannot identify what horizontal or steep sections mean",
                "No understanding of how to extract speed from graph",
                "Cannot relate graph features to real-world movement"
              ]
            }
          },

          learningObjectives: [
            "Understand distance-time graphs show how distance changes over time",
            "Recognize that gradient represents speed",
            "Identify constant speed (straight line) vs varying speed (curved line)",
            "Recognize horizontal line indicates no movement (rest)",
            "Calculate speed from graph gradient using rise/run",
            "Compare speeds from different sections of graph",
            "Interpret graphs in real-world contexts"
          ],

          relevantFormulas: [
            "On a distance-time graph:",
            "  - Gradient (slope) = Speed",
            "  - Speed = Change in distance ÷ Change in time",
            "  - Horizontal line = stationary (speed = 0)",
            "  - Steeper line = faster speed",
            "  - Straight line = constant speed",
            "  - Curved line = changing speed (acceleration/deceleration)"
          ],

          sampleProblems: [
            "From a distance-time graph showing a journey, identify: (a) periods of rest, (b) fastest section, (c) speed during first hour.",
            "Sketch a distance-time graph for: Starting from home, traveling 60 km in 1 hour, resting for 30 minutes, then returning home at 40 km/h.",
            "A graph shows a cyclist's journey. Find the speed during each stage and compare them."
          ],

          availableTools: ["cartesianPlane"]
        },

        {
          id: "average-speed",
          title: "Average Speed Calculations",
          difficulty: "advanced",
          prerequisites: ["distance-time-graphs"],
          masterySignals: "Student distinguishes average speed from constant speed, calculates average speed for multi-stage journeys using total distance and total time, solves 3+ complex problems correctly",
          estimatedQuestions: "3-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct average speed calculations",
                "Accurate handling of multi-stage journeys",
                "Correct formula: total distance ÷ total time (not average of speeds)"
              ],
              qualitative: [
                "Understands average speed = total distance ÷ total time",
                "Recognizes average speed is NOT the average of individual speeds",
                "Calculates total distance by summing all stages",
                "Calculates total time by summing all stages",
                "Applies to journeys with different speeds in different stages",
                "Handles rest periods correctly (time passes but no distance)",
                "Converts time units correctly (hours and minutes to hours)",
                "Verifies answer is reasonable (between slowest and fastest speeds)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on using total distance/time",
                "Sometimes averages the speeds instead of using distance/time"
              ],
              qualitative: [
                "Knows to find total distance and time but makes calculation errors",
                "Sometimes incorrectly averages individual speeds",
                "Struggles with time unit conversions (hours and minutes)",
                "Forgets to include rest periods in total time",
                "Can handle two-stage journeys but struggles with three or more",
                "Needs reminding not to average speeds directly"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in average speed calculation",
                "Averages speeds instead of using distance/time",
                "Cannot handle multi-stage journeys"
              ],
              qualitative: [
                "Does not understand average speed formula",
                "Thinks average speed means averaging the speeds",
                "Cannot calculate total distance or total time correctly",
                "Confuses average speed with constant/uniform speed",
                "Does not include all stages in calculation",
                "Cannot convert time units",
                "Does not verify if answer makes sense"
              ]
            }
          },

          learningObjectives: [
            "Understand that average speed = total distance ÷ total time",
            "Recognize average speed differs from average of speeds",
            "Calculate total distance by summing all stages",
            "Calculate total time including all stages and rest periods",
            "Apply to complex multi-stage journeys",
            "Handle time conversions (hours, minutes, seconds)",
            "Verify average speed is reasonable"
          ],

          relevantFormulas: [
            "Average speed = Total distance travelled ÷ Total time taken",
            "NOT average speed = (speed₁ + speed₂) ÷ 2  ← THIS IS WRONG",
            "Example: Drive 60 km at 60 km/h (takes 1 h), then 70 km at 70 km/h (takes 1 h)",
            "  Total distance = 60 + 70 = 130 km",
            "  Total time = 1 + 1 = 2 h",
            "  Average speed = 130 ÷ 2 = 65 km/h",
            "  (Note: This equals (60+70)÷2 only because times were equal)"
          ],

          sampleProblems: [
            "Kate and her friends are on a road trip. She drives the first 2 hours at an average speed of 60 km/h and the next 3 hours at an average speed of 70 km/h. Calculate the average speed for the whole journey.",
            "A car travelled for the first 1.5 hours at an average speed of 64 km/h and the next 2.5 hours at 72 km/h. Calculate the average speed for the whole journey.",
            "Mr Lee runs 5 km in 40 minutes and then walks 2 km at an average speed of 4 km/h. Calculate (i) his running speed in km/h, (ii) his average speed for the whole journey."
          ],

          availableTools: ["cartesianPlane", "barChart"]
        }
      ]
    },

    learningObjectives: [
      "Understand rate as comparison of different quantities with units",
      "Apply speed formula and its rearrangements to solve problems",
      "Interpret distance-time graphs and calculate speeds from gradients",
      "Calculate average speed for multi-stage journeys correctly",
      "Distinguish between constant speed, varying speed, and average speed"
    ],

    keyFormulas: `
**Rate:**
- Rate = Quantity₁ ÷ Quantity₂ (different quantities with units)
- Examples: $/L, words/min, L/100km

**Speed (Special Type of Rate):**
- Speed = Distance travelled ÷ Time taken
- Distance travelled = Speed × Time taken
- Time taken = Distance travelled ÷ Speed
- Units: km/h, m/s, km/min

**Average Speed:**
- Average speed = Total distance travelled ÷ Total time taken
- NOT the average of individual speeds

**Distance-Time Graphs:**
- Gradient = Speed
- Horizontal line = stationary (speed = 0)
- Steeper gradient = faster speed
    `
  },

  // ========================================================================
  // SUBTOPIC 4: UNIT CONVERSION AND ADVANCED APPLICATIONS
  // ========================================================================

  's1-math-ratio-rate-speed-unit-conversion': {
    displayName: 'Unit Conversion and Applications',
    topicName: 'Ratio, Rate, and Speed',

    progressionStructure: {
      sections: [
        {
          id: "speed-unit-conversion",
          title: "Converting Speed Units",
          difficulty: "intermediate",
          prerequisites: ["speed-formula-calculations"],
          masterySignals: "Student converts between km/h and m/s accurately, shows clear conversion steps using multiplication factors, and converts correctly in 3+ problems",
          estimatedQuestions: "3-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct unit conversions",
                "Accurate use of conversion factors",
                "Correct rounding and significant figures"
              ],
              qualitative: [
                "Understands 1 km = 1000 m and 1 h = 60 min = 3600 s",
                "Converts km/h to m/s by multiplying by 1000/3600 or dividing by 3.6",
                "Converts m/s to km/h by multiplying by 3600/1000 or multiplying by 3.6",
                "Shows clear conversion steps with units",
                "Can derive conversion factor from first principles",
                "Verifies result makes sense (m/s value < km/h value for same speed)",
                "Applies conversions in context problems"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on conversion factor",
                "Sometimes confuses which direction to convert"
              ],
              qualitative: [
                "Knows conversion is needed but unsure of factor",
                "Can convert with formula given but cannot derive it",
                "Sometimes confuses ×3.6 with ÷3.6",
                "Makes errors in decimal arithmetic",
                "Needs reminding of conversion factor",
                "Can do conversion but doesn't understand why it works"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in conversion",
                "Uses wrong conversion factor",
                "Random multiplication/division"
              ],
              qualitative: [
                "Does not know conversion factors for length and time",
                "Cannot derive or remember km/h ↔ m/s conversion",
                "Multiplies or divides by wrong numbers",
                "Does not understand relationship between units",
                "Cannot verify if conversion result is reasonable",
                "Confuses km/h with m/s completely"
              ]
            }
          },

          learningObjectives: [
            "Understand relationships: 1 km = 1000 m, 1 h = 3600 s",
            "Convert km/h to m/s by dividing by 3.6 (or ×1000÷3600)",
            "Convert m/s to km/h by multiplying by 3.6 (or ×3600÷1000)",
            "Show clear conversion steps with units",
            "Verify conversions are reasonable",
            "Apply conversions in problem-solving contexts"
          ],

          relevantFormulas: [
            "Unit relationships:",
            "  1 km = 1000 m",
            "  1 h = 60 min = 3600 s",
            "",
            "Converting km/h to m/s:",
            "  Method 1: ÷ 3.6",
            "  Method 2: × 1000 ÷ 3600",
            "  Example: 110 km/h = 110 × 1000 ÷ 3600 = 30.56 m/s (to 2 d.p.)",
            "",
            "Converting m/s to km/h:",
            "  Method 1: × 3.6",
            "  Method 2: × 3600 ÷ 1000",
            "  Example: 10 m/s = 10 × 3600 ÷ 1000 = 36 km/h"
          ],

          sampleProblems: [
            "Usain Bolt's average speed in the 100 m sprint is 10.4 m/s. A cheetah runs at 110 km/h. By comparing their average speeds, determine whether the cheetah runs faster than Usain Bolt.",
            "Convert: (i) 110 km/h to m/s  (ii) 36 km/h to m/s",
            "Jane runs 1000 m in 3 minutes 20 seconds. Find her average speed in km/h."
          ],

          availableTools: ["numberLine"]
        },

        {
          id: "comparing-rates-speeds",
          title: "Comparing Rates and Speeds",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["speed-unit-conversion"],
          masterySignals: "Student compares rates and speeds with different units by converting to common units, determines better value or faster speed, and solves 3+ comparison problems correctly",
          estimatedQuestions: "3-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct comparisons with different units",
                "Accurate unit conversions before comparison",
                "Clear reasoning for which is better/faster"
              ],
              qualitative: [
                "Recognizes need to convert to same units before comparing",
                "Chooses appropriate common unit for comparison",
                "Performs accurate conversions",
                "Makes correct comparison after conversion",
                "Explains reasoning clearly (which is better value, faster, more efficient)",
                "Applies to various contexts: prices, speeds, rates of work",
                "Verifies comparison makes sense"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on which unit to convert to",
                "Sometimes makes errors in conversion affecting comparison"
              ],
              qualitative: [
                "Knows to convert units but unsure which to choose",
                "Makes conversion errors affecting final comparison",
                "Can compare with prompting but struggles independently",
                "Sometimes forgets to convert and compares incompatible units",
                "Needs guidance on interpreting 'better value' or 'faster'"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors in conversion and comparison",
                "Compares without converting units",
                "Incorrect conclusions"
              ],
              qualitative: [
                "Does not recognize need to convert units",
                "Compares numbers directly without considering units",
                "Cannot perform required conversions",
                "Makes wrong comparison even after conversion",
                "Cannot interpret what comparison means in context",
                "Does not understand 'better value' concept"
              ]
            }
          },

          learningObjectives: [
            "Recognize when rates or speeds have different units",
            "Convert to common units before comparing",
            "Choose appropriate common unit for comparison",
            "Make correct comparison after conversion",
            "Interpret comparison in context (better value, faster, more efficient)",
            "Explain reasoning clearly"
          ],

          relevantFormulas: [
            "To compare rates or speeds with different units:",
            "  1. Identify the units for each rate/speed",
            "  2. Choose a common unit to convert to",
            "  3. Convert both to the common unit",
            "  4. Compare the converted values",
            "  5. Interpret in context",
            "",
            "Example: Which is faster: 72 km/h or 25 m/s?",
            "  Convert 72 km/h to m/s: 72 ÷ 3.6 = 20 m/s",
            "  Compare: 25 m/s > 20 m/s",
            "  Conclusion: 25 m/s is faster"
          ],

          sampleProblems: [
            "Brand A rice costs \\$5.60 for 5 kg. Brand B rice costs \\$18.60 for 10 kg. Which brand is better value?",
            "Train A travels at 45 km/h. Train B travels at 80 km/h. The average speed of an MRT train between two stations is 65 km/h. Which is fastest?",
            "Two workers: Cindy cleans 17 rooms in 5 hours. Eddie cleans 14 rooms in 4 hours. Who works at a faster rate?"
          ],

          availableTools: ["barChart", "numberLine"]
        },

        {
          id: "complex-rate-problems",
          title: "Complex Rate and Ratio Applications",
          difficulty: "advanced",
          prerequisites: ["comparing-rates-speeds", "ratio-distribution"],
          masterySignals: "Student solves multi-step problems combining ratios, rates, and unit conversions, integrates concepts from multiple sections, and solves 3+ complex problems with clear working",
          estimatedQuestions: "3-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct complex multi-step problems",
                "Accurate calculations across all steps",
                "Proper handling of units throughout"
              ],
              qualitative: [
                "Identifies multiple concepts needed (ratio, rate, conversion, proportion)",
                "Plans solution strategy before calculating",
                "Applies concepts in correct sequence",
                "Shows clear working with labeled steps",
                "Handles complex contexts: combined rates, changing ratios, real-world scenarios",
                "Converts units as needed within multi-step problems",
                "Verifies final answer makes sense in original context",
                "Interprets solution meaningfully"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with significant guidance",
                "Can complete individual steps but struggles to connect them"
              ],
              qualitative: [
                "Can identify some concepts needed but misses others",
                "Completes steps in wrong order or skips steps",
                "Makes calculation errors in multi-step process",
                "Struggles to set up problem from complex word description",
                "Needs prompting on which concept to apply when",
                "Can solve with structured guidance but not independently"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple errors throughout problem",
                "Cannot identify approach or starting point",
                "Random calculations without strategy"
              ],
              qualitative: [
                "Overwhelmed by complexity of problem",
                "Cannot identify which concepts are relevant",
                "No systematic approach to problem-solving",
                "Cannot break complex problem into steps",
                "Gives up without attempting",
                "Performs random calculations hoping for answer",
                "Cannot interpret problem context or question requirements"
              ]
            }
          },

          learningObjectives: [
            "Integrate multiple concepts: ratio, rate, proportion, unit conversion",
            "Plan multi-step solution strategies for complex problems",
            "Apply concepts in correct sequence with clear working",
            "Handle complex real-world contexts and scenarios",
            "Convert units within multi-step problems as needed",
            "Verify solutions are reasonable and meaningful",
            "Communicate solution process clearly"
          ],

          relevantFormulas: [
            "Complex problems may require:",
            "  - Ratio simplification and equivalence",
            "  - Unitary method for proportions",
            "  - Dividing quantities in ratios",
            "  - Rate calculations (including speed)",
            "  - Unit conversions (km/h ↔ m/s, kg ↔ g, etc.)",
            "  - Average speed for multi-stage journeys",
            "",
            "Strategy:",
            "  1. Read problem carefully, identify what's given and required",
            "  2. Identify which concepts/formulas are needed",
            "  3. Plan the sequence of steps",
            "  4. Execute each step with clear working",
            "  5. Verify answer is reasonable"
          ],

          sampleProblems: [
            "A train passes through a 360 m long tunnel completely in 24 seconds. It passes through another tunnel 216 m long completely in 16 seconds at the same average speed. Find the length of the train.",
            "Along a road, spot X and spot Y are 1150 m apart. Ann walks along the road from X to Y at 2/5 m/s. Yohan walks along the same road from Y to X at 1.25 m/s. Both start walking at the same time. (a) How many minutes later will they meet? (b) How far is their meeting point away from X?",
            "A company rents an office and a warehouse with floor areas of 100 m² and 300 m² respectively. The rental rate of the office in dollars per square metre is 2.5 times that of the warehouse. If the total rent of the office and the warehouse is \\$4400 per month, find the monthly rental rate of the warehouse in $/m²."
          ],

          availableTools: ["cartesianPlane", "barChart", "numberLine"]
        }
      ]
    },

    learningObjectives: [
      "Convert between speed units (km/h and m/s) accurately",
      "Compare rates and speeds with different units",
      "Solve complex multi-step problems integrating ratios, rates, and conversions",
      "Apply problem-solving strategies to real-world scenarios",
      "Verify solutions are reasonable and meaningful in context"
    ],

    keyFormulas: `
**Unit Conversion:**
- 1 km = 1000 m,  1 h = 3600 s
- km/h to m/s: ÷ 3.6  (or × 1000 ÷ 3600)
- m/s to km/h: × 3.6  (or × 3600 ÷ 1000)

**Comparison Strategy:**
1. Identify units for each quantity
2. Choose common unit
3. Convert both to common unit
4. Compare converted values
5. Interpret in context

**Complex Problem Strategy:**
1. Read carefully, identify given and required
2. Identify concepts/formulas needed
3. Plan sequence of steps
4. Execute with clear working
5. Verify answer is reasonable
    `
  }
};
