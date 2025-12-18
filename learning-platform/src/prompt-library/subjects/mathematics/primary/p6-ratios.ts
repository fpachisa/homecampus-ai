/**
 * P6 Mathematics - Ratios Topic Configuration
 *
 * Comprehensive configuration for teaching Ratios:
 * 1. Ratio (Introduction)
 * 2. Equivalent Ratios
 * 3. Finding Equivalent Ratios
 * 4. Finding New Ratios
 * 5. Fraction and Ratio
 * 6. Word Problems
 *
 * Target audience: Primary 6 students (11-12 years old)
 * Based on Singapore Math curriculum
 */

// Type exports
export type P6RatiosTopicId =
  | 'p6-math-ratios-introduction'
  | 'p6-math-ratios-equivalent'
  | 'p6-math-ratios-finding-equivalent'
  | 'p6-math-ratios-finding-new'
  | 'p6-math-ratios-fraction-ratio'
  | 'p6-math-ratios-word-problems';

// Topic-specific tutor customization
export const P6_RATIOS_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 6 students learning about Ratios.

Teaching Approach:
- Use simple, age-appropriate language suitable for 11-12 year olds
- Use real-world contexts: recipes, sharing items, comparing quantities
- Build from concrete visual models (bar models) to abstract ratio notation
- Emphasize that ratio compares quantities - ORDER MATTERS (A:B ≠ B:A)
- Help students see the connection between fractions and ratios
- Use the Singapore Math bar model method extensively
- Celebrate when students make connections between concepts

Key Concepts to Reinforce:
- Ratio compares two or more quantities
- Order matters: "A to B" is different from "B to A"
- Equivalent ratios represent the same relationship
- Simplest form: when both terms have no common factor except 1
- Bar models help visualize ratio relationships

**Text-to-Speech Guidelines:**
- Say ratios clearly: "3 to 4" or "3 is to 4" not "3 colon 4"
- For ratio notation: say "the ratio of boys to girls is 3 to 4"
- Say "simplified" or "simplest form" not "lowest terms"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation`,

  visualToolsGuidance: `Use the ratioBarModel tool extensively for ratio problems.
IMPORTANT: Use the technical name in the toolName field.

Available tools for this topic:
- ratioBarModel: PRIMARY TOOL - Specialized bar model for ratio problems. Supports partial brackets, total brackets, difference brackets. USE THIS FOR ALL RATIO VISUALIZATIONS.
- fractionBar: For showing fraction-ratio connections visually.
- fractionCircle: For part-to-whole ratio concepts (like pizza sharing).

Tool usage guidelines:
- Use ratioBarModel for ALL ratio problems in hints and solutions
- For basic ratios: show bars with different unit counts
- For totals: use totalBracket to group bars
- For differences: use differenceBracket to highlight the extra portion
- For known values: use partialBracket to show value for subset of units
- Always include helpful caption explaining the visualization
- Use unitValue to show "1 unit = X" calculations`
};

// Available math tools for this topic
export const P6_RATIOS_MATH_TOOLS = [
  "ratioBarModel",
  "fractionBar",
  "fractionCircle"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P6_RATIOS_SUBTOPICS = {

  'p6-math-ratios-introduction': {
    displayName: 'Ratio',
    topicName: 'introduction to ratios',

    progressionStructure: {
      sections: [
        {
          id: "understanding-ratio",
          title: "Understanding Ratios",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly writes ratios from given quantities and understands ratio notation in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses writing ratios from quantities",
                "Correctly uses ratio notation (a:b)"
              ],
              qualitative: [
                "Understands ratio compares two or more quantities",
                "Correctly writes ratio in correct order (A to B vs B to A)",
                "Can express ratio using ':' notation",
                "Understands ratio does not show actual quantities",
                "Can read and interpret ratio notation"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about order",
                "Sometimes confuses order of ratio"
              ],
              qualitative: [
                "Understands concept but writes ratio in wrong order",
                "Needs prompting to check order",
                "Can write ratio but struggles to interpret it"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot write ratios correctly"
              ],
              qualitative: [
                "Does not understand what ratio means",
                "Confuses ratio with fraction",
                "Cannot identify quantities to compare",
                "Does not understand order matters"
              ]
            }
          },
          learningObjectives: [
            "Understand that ratio compares quantities",
            "Write ratios using ':' notation",
            "Understand that order matters in ratios"
          ],
          relevantFormulas: [
            "Ratio of A to B is written as A : B",
            "3 yellow to 4 green = 3 : 4",
            "A : B is different from B : A"
          ],
          availableTools: ["ratioBarModel"]
        },
        {
          id: "part-to-part-whole",
          title: "Part-to-Part and Part-to-Whole Ratios",
          difficulty: "foundational",
          prerequisites: ["understanding-ratio"],
          masterySignals: "Student correctly distinguishes and writes part-to-part and part-to-whole ratios in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses with both ratio types",
                "Correctly calculates total for part-to-whole"
              ],
              qualitative: [
                "Distinguishes part-to-part from part-to-whole ratios",
                "Correctly calculates total (sum of parts)",
                "Can write three-term ratios (A : B : C)",
                "Understands relationship between parts and whole"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Struggles with part-to-whole calculations"
              ],
              qualitative: [
                "Understands part-to-part but not part-to-whole",
                "Forgets to add parts for total",
                "Needs support with three-term ratios"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot distinguish ratio types"
              ],
              qualitative: [
                "Confuses part-to-part with part-to-whole",
                "Cannot calculate total from parts",
                "Does not understand 'total' in ratio context"
              ]
            }
          },
          learningObjectives: [
            "Understand part-to-part ratios (comparing parts)",
            "Understand part-to-whole ratios (part compared to total)",
            "Write and interpret three-term ratios"
          ],
          relevantFormulas: [
            "Part-to-part: boys : girls = 3 : 4",
            "Part-to-whole: boys : total = 3 : 7 (since total = 3 + 4)",
            "Three-term: A : B : C"
          ],
          availableTools: ["ratioBarModel"]
        }
      ]
    },

    learningObjectives: [
      "Understand ratio as comparison of quantities",
      "Write ratios using correct notation",
      "Distinguish between part-to-part and part-to-whole ratios",
      "Understand that order matters in ratios"
    ],

    keyFormulas: `
**What is Ratio?**
Ratio compares two or more quantities.
We write "3 to 4" as 3 : 4

**Order Matters!**
- Ratio of boys to girls: 3 : 4
- Ratio of girls to boys: 4 : 3
These are DIFFERENT ratios!

**Part-to-Part vs Part-to-Whole:**
If there are 3 boys and 4 girls:
- Part-to-part: boys : girls = 3 : 4
- Part-to-whole: boys : total children = 3 : 7

**Key Point:**
Ratio does NOT tell us actual numbers.
3 : 4 could mean 3 and 4, or 6 and 8, or 30 and 40...
`
  },

  'p6-math-ratios-equivalent': {
    displayName: 'Equivalent Ratios',
    topicName: 'equivalent ratios',

    progressionStructure: {
      sections: [
        {
          id: "understanding-equivalent-ratios",
          title: "Understanding Equivalent Ratios",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student identifies equivalent ratios and understands they represent the same relationship in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses identifying equivalent ratios",
                "Correctly explains why ratios are equivalent"
              ],
              qualitative: [
                "Understands equivalent ratios show same relationship",
                "Can verify equivalence by multiplication/division",
                "Uses grouping concept to find equivalent ratios",
                "Recognizes 8:4 = 4:2 = 2:1"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Can identify but not explain equivalence"
              ],
              qualitative: [
                "Understands concept visually but not numerically",
                "Needs support to verify equivalence",
                "Can group items but struggles with numbers"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify equivalent ratios"
              ],
              qualitative: [
                "Does not understand 'equivalent' means same relationship",
                "Thinks different numbers means different ratio",
                "Cannot see grouping pattern"
              ]
            }
          },
          learningObjectives: [
            "Understand equivalent ratios represent same relationship",
            "Use grouping to find equivalent ratios",
            "Verify equivalence by multiplication or division"
          ],
          relevantFormulas: [
            "8 : 4 = 4 : 2 = 2 : 1 (divide both by 2)",
            "Equivalent ratios: same relationship, different numbers"
          ],
          availableTools: ["ratioBarModel"]
        },
        {
          id: "simplifying-ratios",
          title: "Simplifying Ratios",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["understanding-equivalent-ratios"],
          masterySignals: "Student correctly simplifies ratios to simplest form using GCF in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses simplifying ratios",
                "Consistently finds simplest form"
              ],
              qualitative: [
                "Finds GCF to simplify in one step",
                "Recognizes when ratio is in simplest form",
                "Can simplify three-term ratios",
                "Simplifies efficiently (not multiple steps when one works)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about GCF",
                "Simplifies but not to simplest form"
              ],
              qualitative: [
                "Simplifies in multiple steps instead of using GCF",
                "Sometimes stops before simplest form",
                "Knows process but makes calculation errors"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot simplify ratios"
              ],
              qualitative: [
                "Does not understand simplest form",
                "Cannot find common factors",
                "Divides only one term instead of both"
              ]
            }
          },
          learningObjectives: [
            "Simplify ratios by dividing by common factors",
            "Find simplest form using GCF",
            "Simplify three-term ratios"
          ],
          relevantFormulas: [
            "To simplify: divide both terms by their GCF",
            "72 : 48 → ÷8 → 9 : 6 → ÷3 → 3 : 2",
            "Or directly: 72 : 48 → ÷24 → 3 : 2"
          ],
          availableTools: ["ratioBarModel"]
        }
      ]
    },

    learningObjectives: [
      "Understand equivalent ratios",
      "Find equivalent ratios using multiplication and division",
      "Simplify ratios to simplest form",
      "Recognize when a ratio is in simplest form"
    ],

    keyFormulas: `
**Equivalent Ratios:**
Ratios that show the same relationship.
8 : 4 = 4 : 2 = 2 : 1 (all equivalent)

**Finding Equivalent Ratios:**
Multiply or divide BOTH terms by the same number.
- 2 : 3 → ×4 → 8 : 12 (equivalent)
- 12 : 8 → ÷4 → 3 : 2 (equivalent)

**Simplest Form:**
A ratio where both terms have no common factor except 1.
- 12 : 8 → simplest form is 3 : 2
- 15 : 24 : 18 → simplest form is 5 : 8 : 6 (÷3)

**Method:**
1. Find the GCF (Greatest Common Factor)
2. Divide both terms by GCF
`
  },

  'p6-math-ratios-finding-equivalent': {
    displayName: 'Finding Equivalent Ratios',
    topicName: 'finding equivalent ratios',

    progressionStructure: {
      sections: [
        {
          id: "scaling-ratios",
          title: "Scaling Ratios",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly scales ratios up and down to find equivalent ratios in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses scaling ratios",
                "Correctly multiplies/divides both terms"
              ],
              qualitative: [
                "Multiplies both terms to scale up",
                "Divides both terms to scale down",
                "Understands scaling preserves the relationship",
                "Can work with larger numbers confidently"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Sometimes only scales one term"
              ],
              qualitative: [
                "Understands concept but makes calculation errors",
                "Forgets to apply same factor to both terms",
                "Needs support with larger numbers"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot scale ratios correctly"
              ],
              qualitative: [
                "Only multiplies/divides one term",
                "Does not understand why both terms must change",
                "Cannot determine the scaling factor"
              ]
            }
          },
          learningObjectives: [
            "Scale ratios up by multiplying both terms",
            "Scale ratios down by dividing both terms",
            "Understand scaling preserves the ratio relationship"
          ],
          relevantFormulas: [
            "1 : 5 → ×4 → 4 : 20 (scaled up)",
            "20 : 15 → ÷5 → 4 : 3 (scaled down)"
          ],
          availableTools: ["ratioBarModel"]
        },
        {
          id: "finding-missing-values",
          title: "Finding Missing Values",
          difficulty: "intermediate",
          prerequisites: ["scaling-ratios"],
          masterySignals: "Student correctly finds missing values in equivalent ratios in 4+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct responses finding missing values",
                "Uses efficient methods"
              ],
              qualitative: [
                "Identifies the scaling factor from known values",
                "Applies factor to find missing value",
                "Can solve 3 : 7 = ? : 28 type problems",
                "Works with three-term ratios"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with hints",
                "Inconsistent with method"
              ],
              qualitative: [
                "Can find factor but makes calculation errors",
                "Struggles with three-term ratio problems",
                "Needs support identifying which factor to use"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot find missing values"
              ],
              qualitative: [
                "Cannot identify the relationship between known values",
                "Does not understand how to find scaling factor",
                "Gets confused with which number to multiply/divide"
              ]
            }
          },
          learningObjectives: [
            "Find missing values in equivalent ratio pairs",
            "Determine scaling factor from given values",
            "Solve problems with three-term ratios"
          ],
          relevantFormulas: [
            "3 : 7 = ? : 28 → 7 × 4 = 28, so ? = 3 × 4 = 12",
            "5 : 3 : 4 = ? : 18 : ? → factor is 6 (18÷3)"
          ],
          availableTools: ["ratioBarModel"]
        }
      ]
    },

    learningObjectives: [
      "Scale ratios up and down",
      "Find missing values in equivalent ratios",
      "Apply ratio concepts to real-world problems",
      "Work with ratio tables"
    ],

    keyFormulas: `
**Scaling Ratios:**
Multiply or divide BOTH terms by the same number.

**Finding Missing Values:**
Given: 3 : 7 = ? : 28

Step 1: Find the factor
7 → 28 means ×4

Step 2: Apply to find missing value
3 × 4 = 12

So 3 : 7 = 12 : 28

**Three-Term Ratios:**
5 : 3 : 4 = ? : 18 : ?
Since 3 → 18 means ×6:
5 × 6 = 30 and 4 × 6 = 24
Answer: 30 : 18 : 24
`
  },

  'p6-math-ratios-finding-new': {
    displayName: 'Finding New Ratios',
    topicName: 'finding new ratios from given ratios',

    progressionStructure: {
      sections: [
        {
          id: "combining-two-ratios",
          title: "Combining Two Ratios",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly combines two ratios with a common term into a three-term ratio in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses combining ratios",
                "Uses common term method efficiently"
              ],
              qualitative: [
                "Identifies the common term in both ratios",
                "Makes common term equal in both ratios",
                "Correctly combines into three-term ratio",
                "Can work with different scaling factors"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about common term",
                "Makes errors in scaling"
              ],
              qualitative: [
                "Identifies common term but struggles to equalize",
                "Makes calculation errors when scaling",
                "Needs support choosing which ratio to scale"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot combine two ratios"
              ],
              qualitative: [
                "Does not understand common term concept",
                "Cannot see how to connect two ratios",
                "Gets confused about which values to use"
              ]
            }
          },
          learningObjectives: [
            "Identify common term between two ratios",
            "Make common term equal by scaling",
            "Combine into three-term ratio"
          ],
          relevantFormulas: [
            "A : B = 2 : 3 and A : C = 6 : 5",
            "Make A equal: 2 : 3 → 6 : 9 (×3)",
            "Combined: A : B : C = 6 : 9 : 5"
          ],
          availableTools: ["ratioBarModel"]
        },
        {
          id: "three-term-ratios",
          title: "Working with Three-Term Ratios",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["combining-two-ratios"],
          masterySignals: "Student fluently works with three-term ratios including finding equivalents and simplifying in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses with three-term ratios",
                "Handles various operations confidently"
              ],
              qualitative: [
                "Finds equivalent three-term ratios",
                "Simplifies three-term ratios correctly",
                "Can extract two-term ratio from three-term",
                "Applies to word problems"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Struggles with some operations"
              ],
              qualitative: [
                "Can simplify but struggles with combining",
                "Makes errors extracting two-term ratios",
                "Needs support with word problems"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot work with three-term ratios"
              ],
              qualitative: [
                "Gets confused with three numbers",
                "Cannot simplify three-term ratios",
                "Does not understand how to extract parts"
              ]
            }
          },
          learningObjectives: [
            "Find equivalent three-term ratios",
            "Simplify three-term ratios",
            "Extract two-term ratios from three-term"
          ],
          relevantFormulas: [
            "A : B : C = 6 : 9 : 5",
            "From this: A : B = 6 : 9 = 2 : 3",
            "And: B : C = 9 : 5"
          ],
          availableTools: ["ratioBarModel"]
        }
      ]
    },

    learningObjectives: [
      "Combine two ratios using common term",
      "Work with three-term ratios",
      "Extract two-term ratios from three-term ratios",
      "Apply to complex problems"
    ],

    keyFormulas: `
**Combining Two Ratios:**
Given: Ken : Suzy = 2 : 3
       Ken : Ming = 6 : 5

Step 1: Find common term (Ken)
Step 2: Make Ken equal in both ratios
        2 : 3 → ×3 → 6 : 9
        6 : 5 stays same

Step 3: Combine
        Ken : Suzy : Ming = 6 : 9 : 5

**Extracting from Three-Term:**
From A : B : C = 6 : 9 : 5:
- A : B = 6 : 9 = 2 : 3
- B : C = 9 : 5
- A : C = 6 : 5
`
  },

  'p6-math-ratios-fraction-ratio': {
    displayName: 'Fraction and Ratio',
    topicName: 'connection between fractions and ratios',

    progressionStructure: {
      sections: [
        {
          id: "fractions-to-ratios",
          title: "Converting Fractions to Ratios",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly converts fraction relationships to ratios in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions from fractions to ratios",
                "Understands the relationship clearly"
              ],
              qualitative: [
                "Converts '1/2 of' to ratio 1 : 2",
                "Understands 'A is 3/5 of B' means A : B = 3 : 5",
                "Can work backwards from fraction to ratio",
                "Explains the connection clearly"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Sometimes confuses the order"
              ],
              qualitative: [
                "Understands concept but makes order errors",
                "Needs support with 'of' language",
                "Can convert simple cases only"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot convert fractions to ratios"
              ],
              qualitative: [
                "Does not see connection between fraction and ratio",
                "Confuses numerator and denominator with ratio terms",
                "Cannot interpret 'fraction of' language"
              ]
            }
          },
          learningObjectives: [
            "Convert 'fraction of' statements to ratios",
            "Understand that 'A is a/b of B' means A : B = a : b",
            "See the connection between fractions and ratios"
          ],
          relevantFormulas: [
            "A is 1/2 of B → A : B = 1 : 2",
            "A is 3/5 of B → A : B = 3 : 5",
            "Leila's stickers = 1/2 of Siti's → Leila : Siti = 1 : 2"
          ],
          availableTools: ["ratioBarModel", "fractionBar"]
        },
        {
          id: "ratios-to-fractions",
          title: "Converting Ratios to Fractions",
          difficulty: "intermediate",
          prerequisites: ["fractions-to-ratios"],
          masterySignals: "Student correctly converts ratios to fraction representations in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions from ratios to fractions",
                "Handles both part-part and part-whole"
              ],
              qualitative: [
                "Expresses part as fraction of another part",
                "Expresses part as fraction of whole",
                "Correctly calculates total for part-to-whole",
                "Can explain the relationship"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Struggles with part-to-whole"
              ],
              qualitative: [
                "Can do part-to-part but not part-to-whole",
                "Forgets to calculate total",
                "Makes errors with fractions"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot convert ratios to fractions"
              ],
              qualitative: [
                "Does not understand how ratio becomes fraction",
                "Confuses which number is numerator/denominator",
                "Cannot calculate total from ratio"
              ]
            }
          },
          learningObjectives: [
            "Express ratio as 'fraction of' statement",
            "Convert ratio to part-to-part fraction",
            "Convert ratio to part-to-whole fraction"
          ],
          relevantFormulas: [
            "A : B = 3 : 5 → A is 3/5 of B, B is 5/3 of A",
            "A : B = 3 : 5 → A is 3/8 of total (3+5=8)",
            "Mike : Sam = 3 : 5 → Mike has 3/8 of all marbles"
          ],
          availableTools: ["ratioBarModel", "fractionBar", "fractionCircle"]
        }
      ]
    },

    learningObjectives: [
      "Convert between fractions and ratios",
      "Understand 'fraction of' as ratio relationship",
      "Express ratio as part of whole (fraction)",
      "See the deep connection between fractions and ratios"
    ],

    keyFormulas: `
**Fraction to Ratio:**
"A is 1/2 of B" → A : B = 1 : 2
"A is 3/5 of B" → A : B = 3 : 5

**Ratio to Fraction (Part-to-Part):**
A : B = 3 : 5
- A is 3/5 of B
- B is 5/3 of A

**Ratio to Fraction (Part-to-Whole):**
A : B = 3 : 5 (total = 8)
- A is 3/8 of total
- B is 5/8 of total

**Key Insight:**
1/2 can be represented as ratio 1 : 2
The numerator and denominator become the ratio terms!
`
  },

  'p6-math-ratios-word-problems': {
    displayName: 'Word Problems',
    topicName: 'ratio word problems',

    progressionStructure: {
      sections: [
        {
          id: "total-given-problems",
          title: "Total Given Problems",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly solves ratio word problems where total is given in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct word problems with total given",
                "Uses bar model method effectively"
              ],
              qualitative: [
                "Draws bar model showing ratio parts",
                "Calculates total units correctly",
                "Finds value of 1 unit from total",
                "Applies to find individual quantities",
                "Shows clear working"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Bar model drawn but calculation errors"
              ],
              qualitative: [
                "Can draw bar model but struggles with calculation",
                "Forgets to find value of 1 unit first",
                "Makes arithmetic errors"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot solve total given problems"
              ],
              qualitative: [
                "Cannot draw appropriate bar model",
                "Does not understand total units concept",
                "Cannot connect ratio to bar model"
              ]
            }
          },
          learningObjectives: [
            "Draw bar model for ratio word problems",
            "Calculate total units from ratio",
            "Find value of 1 unit",
            "Find individual quantities from total"
          ],
          relevantFormulas: [
            "Ratio 2:3, Total $50",
            "Total units = 2 + 3 = 5 units",
            "1 unit = $50 ÷ 5 = $10",
            "Anna (2 units) = 2 × $10 = $20"
          ],
          availableTools: ["ratioBarModel"]
        },
        {
          id: "difference-given-problems",
          title: "Difference Given Problems",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["total-given-problems"],
          masterySignals: "Student correctly solves ratio word problems where difference is given in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct word problems with difference given",
                "Identifies difference in units correctly"
              ],
              qualitative: [
                "Draws bar model showing difference",
                "Calculates difference in units (larger - smaller)",
                "Finds value of 1 unit from difference",
                "Applies to find individual quantities"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Struggles to identify difference units"
              ],
              qualitative: [
                "Can draw model but incorrect difference calculation",
                "Confuses total with difference",
                "Needs support identifying what represents difference"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot solve difference problems"
              ],
              qualitative: [
                "Does not understand difference concept in ratios",
                "Uses total method instead of difference",
                "Cannot calculate difference in units"
              ]
            }
          },
          learningObjectives: [
            "Identify difference in ratio problems",
            "Calculate difference in units",
            "Find value of 1 unit from difference",
            "Solve for individual quantities"
          ],
          relevantFormulas: [
            "Boys:Girls = 7:4, 12 more boys",
            "Difference = 7 - 4 = 3 units",
            "3 units = 12 → 1 unit = 4",
            "Girls = 4 × 4 = 16"
          ],
          availableTools: ["ratioBarModel"]
        },
        {
          id: "complex-word-problems",
          title: "Complex Word Problems",
          difficulty: "advanced",
          prerequisites: ["difference-given-problems"],
          masterySignals: "Student correctly solves complex multi-step ratio word problems in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct complex word problems",
                "Systematic problem-solving approach"
              ],
              qualitative: [
                "Handles problems with fractions and ratios combined",
                "Solves multi-step problems methodically",
                "Uses bar models for complex scenarios",
                "Can work with three-person ratio problems",
                "Verifies answers make sense"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with significant guidance",
                "Struggles with multi-step problems"
              ],
              qualitative: [
                "Can solve parts but loses track of whole problem",
                "Needs help organizing steps",
                "Makes errors combining operations"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot complete complex problems",
                "Needs review of simpler problems"
              ],
              qualitative: [
                "Cannot break down complex problems",
                "Gets overwhelmed by multiple steps",
                "Needs to strengthen fundamentals first"
              ]
            }
          },
          learningObjectives: [
            "Solve multi-step ratio problems",
            "Handle problems with fractions and ratios",
            "Apply bar model to complex scenarios",
            "Solve three-person ratio problems"
          ],
          relevantFormulas: [
            "Combining fraction and ratio information",
            "1/3 of Lucy = 4/5 of Charlene type problems",
            "Problems with multiple constraints"
          ],
          availableTools: ["ratioBarModel"]
        }
      ]
    },

    learningObjectives: [
      "Solve ratio word problems using bar model",
      "Handle total given problems",
      "Handle difference given problems",
      "Solve complex multi-step problems"
    ],

    keyFormulas: `
**Total Given Method:**
Anna : Jill = 2 : 3, Total = $50
1. Total units = 2 + 3 = 5
2. 1 unit = $50 ÷ 5 = $10
3. Anna = 2 × $10 = $20
   Jill = 3 × $10 = $30

**Difference Given Method:**
Boys : Girls = 7 : 4, 12 more boys
1. Difference = 7 - 4 = 3 units
2. 3 units = 12 → 1 unit = 4
3. Girls = 4 × 4 = 16
   Boys = 7 × 4 = 28

**Bar Model Strategy:**
1. Draw bars for each quantity
2. Mark the known value (total or difference)
3. Find value of 1 unit
4. Calculate what's asked
`
  }
};

// Helper function to get all subtopic IDs
export const getP6RatiosSubtopicIds = (): P6RatiosTopicId[] => {
  return Object.keys(P6_RATIOS_SUBTOPICS) as P6RatiosTopicId[];
};
