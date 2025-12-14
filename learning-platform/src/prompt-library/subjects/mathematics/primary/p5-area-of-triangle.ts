/**
 * P5 Mathematics - Area of Triangle Topic Configuration
 *
 * Comprehensive configuration for teaching area of triangles,
 * including base/height identification and composite figures.
 *
 * Target audience: Primary 5 students (10-11 years old)
 */

// Type exports
export type AreaOfTriangleTopicId =
  | 'p5-math-area-triangle-base-height'
  | 'p5-math-area-triangle-formula'
  | 'p5-math-area-triangle-composite';

// Topic-specific tutor customization
export const P5_AREA_OF_TRIANGLE_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 5 students learning about the area of triangles.

Teaching Approach:
- Use simple, age-appropriate language suitable for 10-11 year olds
- Build understanding step by step: first identify base and height, then apply formula
- Connect triangles to rectangles - every triangle is half of a related rectangle
- Use real-world contexts: rooftops, pizza slices, garden plots, sails, kites
- Help students visualize the perpendicular relationship (90° angle) between base and height
- Emphasize that ANY side can be the base - the height changes accordingly
- For composite figures, teach both "split and add" and "take away" strategies
- Be patient - the concept that height must be perpendicular is often confusing
- Celebrate when students recognize base-height pairs correctly

**Text-to-Speech Guidelines:**
- Say "base" and "height" clearly
- Say "perpendicular" as "per-pen-DIC-you-lar" with emphasis
- Say "square centimetres" not "cm squared" or "centimetres squared"
- Say fractions clearly: "one half" not "1 over 2"
- For formulas: say "one half times base times height" not "half b h"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation`,

  visualToolsGuidance: `Use pre-built visual tools when they help understanding.
IMPORTANT: Use the technical name in the toolName field, NOT the display name.

Available tools for this topic:
- triangleIdentify: Shows triangle with vertex labels and optional height line. Use for identifying base/height pairs.
- triangleArea: Shows triangle with base and height dimensions labeled. Use for area calculation problems.

Tool usage guidelines:
- Use triangleIdentify when teaching students to identify base and height
- Use different shape values (acute, right, obtuse-left, obtuse-right) to show variety
- Use rotation to show triangles in different orientations (base not always at bottom)
- Use triangleArea when student needs to calculate area from given dimensions
- For obtuse triangles, the extended base line shows where height meets the base line
- Always include helpful captions explaining what to notice
- The right-angle marker (small square) shows where base and height meet at 90°
- DO NOT show formulas or calculations in visualizations - student figures those out`
};

// Available math tools for this topic
export const P5_AREA_OF_TRIANGLE_MATH_TOOLS = [
  "triangleIdentify",
  "triangleArea"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P5_MATH_AREA_OF_TRIANGLE_SUBTOPICS = {

  'p5-math-area-triangle-base-height': {
    displayName: 'Base and Height of a Triangle',
    topicName: 'identifying the base and height of triangles',

    progressionStructure: {
      sections: [
        {
          id: "what-is-base-height",
          title: "Understanding Base and Height",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies base and height in standard triangles (base at bottom) and understands the perpendicular relationship in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of base and height",
                "Correctly identifies perpendicular relationship"
              ],
              qualitative: [
                "Correctly names the base (horizontal side at bottom)",
                "Correctly identifies height as perpendicular distance from base to apex",
                "Understands that base and height meet at 90° (right angle)",
                "Can point to the right-angle marker (small square) where base and height meet",
                "Understands height can be inside the triangle (acute) or outside (obtuse)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about perpendicular",
                "May confuse height with slant side"
              ],
              qualitative: [
                "Identifies base correctly but struggles with height",
                "Thinks any line from apex to base is the height",
                "Does not understand why height must be perpendicular",
                "Confuses height with the length of slanted sides"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify base or height"
              ],
              qualitative: [
                "Does not know what 'perpendicular' means",
                "Cannot identify base of triangle",
                "Thinks height is always the longest side",
                "Does not understand the concept of right angles"
              ]
            }
          },
          learningObjectives: [
            "Identify the base of a triangle",
            "Identify the height as the perpendicular distance from base to opposite vertex",
            "Recognize the right-angle marker where base and height meet",
            "Understand that height can be inside or outside the triangle"
          ],
          relevantFormulas: [],
          availableTools: ["triangleIdentify"]
        },
        {
          id: "any-side-as-base",
          title: "Any Side Can Be the Base",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["what-is-base-height"],
          masterySignals: "Student correctly identifies that any side can be the base and finds the corresponding perpendicular height in 3+ problems with different orientations",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct base-height pair identifications",
                "Can identify base-height pairs for different triangle orientations"
              ],
              qualitative: [
                "Understands that choosing a different base gives a different height",
                "Can identify base and height when triangle is rotated",
                "Recognizes that the base doesn't have to be at the bottom",
                "Can identify all three possible base-height pairs for a triangle",
                "Understands the height always goes to the opposite vertex"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct when triangle is not in standard position",
                "Struggles with rotated triangles"
              ],
              qualitative: [
                "Only comfortable when base is horizontal",
                "Gets confused when triangle is rotated",
                "Can find one base-height pair but not others",
                "Needs support to visualize height from non-horizontal bases"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify base-height pairs"
              ],
              qualitative: [
                "Thinks only the bottom side can be the base",
                "Cannot find height when base is not horizontal",
                "Does not understand that every triangle has three base-height pairs",
                "Gets confused by different orientations"
              ]
            }
          },
          learningObjectives: [
            "Understand that any side of a triangle can be the base",
            "Find the corresponding height for each base choice",
            "Identify base and height in triangles with different orientations",
            "Recognize that a triangle has three possible base-height pairs"
          ],
          relevantFormulas: [],
          availableTools: ["triangleIdentify"]
        },
        {
          id: "height-outside-triangle",
          title: "Height Outside the Triangle (Obtuse Triangles)",
          difficulty: "intermediate",
          prerequisites: ["any-side-as-base"],
          masterySignals: "Student correctly identifies base and height in obtuse triangles where the height falls outside the triangle in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications in obtuse triangles",
                "Correctly identifies when height is outside"
              ],
              qualitative: [
                "Recognizes obtuse triangles (one angle > 90°)",
                "Understands why height extends outside the triangle",
                "Can draw the extended base line (dashed) to find height",
                "Identifies the correct height even when it's outside",
                "Understands the height still meets the base line at 90°"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about extending the base",
                "Hesitates with obtuse triangles"
              ],
              qualitative: [
                "Understands concept but struggles to visualize",
                "Needs help drawing the extended base line",
                "Confuses which direction to extend the base",
                "Can identify after seeing the construction"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot find height in obtuse triangles"
              ],
              qualitative: [
                "Does not understand why height would be outside",
                "Thinks obtuse triangles don't have a height",
                "Cannot visualize extending the base line",
                "Picks a slant side as the height"
              ]
            }
          },
          learningObjectives: [
            "Recognize obtuse triangles",
            "Understand that in obtuse triangles, the height may fall outside the triangle",
            "Extend the base line to find where the height meets it",
            "Identify the perpendicular height even when it's outside the triangle"
          ],
          relevantFormulas: [],
          availableTools: ["triangleIdentify"]
        }
      ]
    },

    learningObjectives: [
      "Identify the base of a triangle",
      "Identify the height (perpendicular distance from base to opposite vertex)",
      "Understand that any side can be the base with its corresponding height",
      "Identify base and height in obtuse triangles where height is outside"
    ],

    keyFormulas: `
**Key Concepts (No Formulas Yet):**
- Base: Any side of the triangle
- Height: The perpendicular distance from the base to the opposite vertex
- Perpendicular: Meeting at a 90° angle (right angle)
- In obtuse triangles, the height may fall outside the triangle
- A triangle has 3 possible base-height pairs
    `
  },

  'p5-math-area-triangle-formula': {
    displayName: 'Area of Triangle',
    topicName: 'calculating the area of triangles using the formula',

    progressionStructure: {
      sections: [
        {
          id: "triangle-rectangle-connection",
          title: "Triangles and Rectangles",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student understands that a triangle is half of a related rectangle with the same base and height in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses showing understanding of triangle-rectangle relationship",
                "Can identify the 'related rectangle' for a given triangle"
              ],
              qualitative: [
                "Understands that two identical triangles form a rectangle",
                "Can visualize the rectangle that contains the triangle",
                "Recognizes that the triangle is exactly half the rectangle",
                "Understands the rectangle has the same base and height as the triangle",
                "Can explain why Area of Triangle = ½ × Area of Rectangle"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with visual support",
                "Needs help seeing the rectangle"
              ],
              qualitative: [
                "Understands concept when shown visually",
                "Struggles to visualize without diagram",
                "Not confident about the 'half' relationship",
                "Can follow explanation but can't generate it independently"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot see triangle-rectangle connection"
              ],
              qualitative: [
                "Does not see how triangles relate to rectangles",
                "Cannot visualize combining two triangles",
                "Does not understand why it's exactly half",
                "Needs concrete manipulatives to understand"
              ]
            }
          },
          learningObjectives: [
            "Understand that a triangle is half of a rectangle with the same base and height",
            "Visualize the 'related rectangle' for any triangle",
            "Explain why two identical triangles form a rectangle",
            "Connect Area of Triangle to Area of Rectangle"
          ],
          relevantFormulas: [
            "Area of Rectangle = base × height",
            "Area of Triangle = ½ × Area of Related Rectangle"
          ],
          availableTools: ["triangleArea"]
        },
        {
          id: "area-formula",
          title: "Area Formula: ½ × base × height",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["triangle-rectangle-connection"],
          masterySignals: "Student correctly calculates area of triangles using Area = ½ × base × height in 3+ problems with whole number dimensions",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct area calculations",
                "Uses formula correctly and consistently"
              ],
              qualitative: [
                "Correctly applies Area = ½ × base × height",
                "Identifies base and height from diagram correctly",
                "Calculates accurately (multiplies, then halves)",
                "Includes correct units in answer (cm², m²)",
                "Can solve for base or height when area is given"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May forget to halve or make arithmetic errors"
              ],
              qualitative: [
                "Knows formula but makes calculation errors",
                "Forgets to multiply by ½ (gives rectangle area)",
                "Forgets units in answer",
                "Confused about which measurements to use (picks wrong values)"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply the formula"
              ],
              qualitative: [
                "Does not remember the formula",
                "Uses wrong measurements (slant height instead of perpendicular height)",
                "Cannot perform the calculation",
                "Adds instead of multiplies"
              ]
            }
          },
          learningObjectives: [
            "State and apply the formula: Area = ½ × base × height",
            "Identify the correct base and height from a diagram",
            "Calculate area with whole number dimensions",
            "Include correct units (cm², m²) in answers"
          ],
          relevantFormulas: [
            "Area of Triangle = ½ × base × height",
            "Area of Triangle = (base × height) ÷ 2"
          ],
          availableTools: ["triangleArea"]
        },
        {
          id: "different-orientations",
          title: "Triangles in Different Orientations",
          difficulty: "intermediate",
          prerequisites: ["area-formula"],
          masterySignals: "Student correctly calculates area of triangles in various orientations (rotated, obtuse) in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations with non-standard orientations",
                "Correctly identifies base and height regardless of orientation"
              ],
              qualitative: [
                "Calculates area correctly for rotated triangles",
                "Calculates area correctly for obtuse triangles",
                "Correctly identifies height even when outside triangle",
                "Not confused by extra measurements given (distractors)",
                "Confidently selects the right pair of base and height"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with non-standard triangles",
                "Struggles when diagram shows extra measurements"
              ],
              qualitative: [
                "Gets confused by rotated triangles",
                "Uses wrong measurement when multiple are given",
                "Picks slant side instead of perpendicular height",
                "Needs help identifying which values to use"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot handle non-standard orientations"
              ],
              qualitative: [
                "Cannot identify base and height in rotated triangles",
                "Always picks the largest numbers given",
                "Does not recognize perpendicular height",
                "Completely thrown by obtuse triangles"
              ]
            }
          },
          learningObjectives: [
            "Calculate area of triangles regardless of orientation",
            "Identify correct base and height in rotated triangles",
            "Handle obtuse triangles where height is shown outside",
            "Ignore distractor measurements and select the correct values"
          ],
          relevantFormulas: [
            "Area of Triangle = ½ × base × height (works for all triangles)"
          ],
          availableTools: ["triangleArea"]
        },
        {
          id: "word-problems-area",
          title: "Word Problems: Area of Triangles",
          difficulty: "intermediate",
          prerequisites: ["different-orientations"],
          masterySignals: "Student correctly solves word problems involving triangle areas in real-world contexts in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ word problems solved correctly",
                "Extracts correct values and applies formula"
              ],
              qualitative: [
                "Correctly identifies base and height from word problem",
                "Sets up calculation correctly",
                "Includes appropriate units in answer",
                "Can solve reverse problems (find base/height given area)",
                "Interprets context correctly (triangular garden, sail, roof, etc.)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on setup",
                "May misidentify which measurement is base/height"
              ],
              qualitative: [
                "Extracts numbers but uses them incorrectly",
                "Forgets to include units",
                "Struggles with reverse problems",
                "Gets confused by context details"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot extract information from word problems"
              ],
              qualitative: [
                "Cannot identify which measurements to use",
                "Does not recognize triangle area context",
                "Cannot set up the calculation from text",
                "Gives unreasonable answers"
              ]
            }
          },
          learningObjectives: [
            "Extract base and height from word problem contexts",
            "Apply area formula to real-world scenarios",
            "Solve reverse problems (find base or height given area)",
            "Include appropriate units in answers"
          ],
          relevantFormulas: [
            "Area of Triangle = ½ × base × height",
            "If Area and height are known: base = (2 × Area) ÷ height",
            "If Area and base are known: height = (2 × Area) ÷ base"
          ],
          availableTools: ["triangleArea"]
        }
      ]
    },

    learningObjectives: [
      "Understand that a triangle is half of a related rectangle",
      "Apply the formula: Area = ½ × base × height",
      "Calculate area for triangles in various orientations",
      "Solve word problems involving triangle areas"
    ],

    keyFormulas: `
**Area of Triangle:**
- Area = ½ × base × height
- Area = (base × height) ÷ 2

**Connection to Rectangle:**
- Area of Triangle = ½ × Area of Related Rectangle
- The related rectangle has the same base and height as the triangle

**Finding Base or Height:**
- base = (2 × Area) ÷ height
- height = (2 × Area) ÷ base
    `
  },

  'p5-math-area-triangle-composite': {
    displayName: 'Area of Composite Figures',
    topicName: 'finding the area of composite figures involving triangles',

    progressionStructure: {
      sections: [
        {
          id: "split-and-add",
          title: "Split and Add Method",
          difficulty: "foundational-to-intermediate",
          prerequisites: [],
          masterySignals: "Student correctly splits composite figures into triangles and rectangles, then adds their areas in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct composite area calculations using split and add",
                "Correctly identifies all component shapes"
              ],
              qualitative: [
                "Splits figure into appropriate triangles and rectangles",
                "Identifies correct dimensions for each component",
                "Calculates each area correctly",
                "Adds component areas accurately",
                "Includes correct units in final answer"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance on splitting",
                "May miss a component or use wrong dimensions"
              ],
              qualitative: [
                "Can split figure but misses some components",
                "Uses wrong dimensions for some shapes",
                "Makes arithmetic errors when adding",
                "Needs help identifying where to draw split lines"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify how to split the figure"
              ],
              qualitative: [
                "Does not know where to split the figure",
                "Cannot identify component shapes",
                "Counts same area twice",
                "Cannot extract dimensions from diagram"
              ]
            }
          },
          learningObjectives: [
            "Identify composite figures that can be split into simpler shapes",
            "Draw appropriate split lines to create triangles and rectangles",
            "Calculate the area of each component shape",
            "Add component areas to find total area"
          ],
          relevantFormulas: [
            "Total Area = Area of Shape A + Area of Shape B + ...",
            "Area of Rectangle = length × width",
            "Area of Triangle = ½ × base × height"
          ],
          availableTools: ["triangleArea"]
        },
        {
          id: "take-away-method",
          title: "Take Away Method",
          difficulty: "intermediate",
          prerequisites: ["split-and-add"],
          masterySignals: "Student correctly uses the take-away method (large shape minus cutout) to find composite areas in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations using take-away method",
                "Correctly identifies when to use take-away vs split-and-add"
              ],
              qualitative: [
                "Recognizes when take-away is more efficient",
                "Identifies the larger shape correctly",
                "Calculates the cutout area correctly",
                "Subtracts accurately to get final answer",
                "Can choose between methods appropriately"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about the method",
                "May subtract wrong portion"
              ],
              qualitative: [
                "Understands concept but execution is inconsistent",
                "Confuses which area to subtract",
                "Forgets to subtract (gives area of large shape)",
                "Needs help identifying the cutout shape"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply take-away method"
              ],
              qualitative: [
                "Does not understand the take-away concept",
                "Cannot identify the larger shape",
                "Does not know what to subtract",
                "Adds instead of subtracts"
              ]
            }
          },
          learningObjectives: [
            "Recognize figures where take-away method is appropriate",
            "Identify the larger shape and the cutout shape",
            "Calculate both areas correctly",
            "Subtract to find the remaining area"
          ],
          relevantFormulas: [
            "Remaining Area = Area of Large Shape - Area of Cutout",
            "Use take-away when a triangle or shape is 'cut out' from a larger shape"
          ],
          availableTools: ["triangleArea"]
        },
        {
          id: "complex-composite",
          title: "Complex Composite Figures",
          difficulty: "intermediate-to-challenging",
          prerequisites: ["take-away-method"],
          masterySignals: "Student correctly calculates area of complex composite figures requiring multiple splits or a combination of methods in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct complex composite calculations",
                "Uses appropriate strategy for each problem"
              ],
              qualitative: [
                "Analyzes figure to choose best approach",
                "Handles figures with multiple triangles",
                "Can combine split-and-add with take-away as needed",
                "Extracts all necessary dimensions from diagram",
                "Works systematically and shows clear steps"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance",
                "Gets lost in multi-step problems"
              ],
              qualitative: [
                "Starts correctly but makes errors in multi-step work",
                "Misses some components in complex figures",
                "Cannot combine methods effectively",
                "Loses track of which areas have been calculated"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot handle complex figures"
              ],
              qualitative: [
                "Overwhelmed by complexity",
                "Cannot devise a strategy",
                "Makes multiple errors in basic calculations",
                "Cannot identify all component shapes"
              ]
            }
          },
          learningObjectives: [
            "Analyze complex composite figures to plan approach",
            "Split figures into multiple components when needed",
            "Combine split-and-add and take-away methods",
            "Work systematically through multi-step problems"
          ],
          relevantFormulas: [
            "Total Area = Sum of all added shapes - Sum of all subtracted shapes",
            "Work step by step: identify all shapes, calculate each area, combine"
          ],
          availableTools: ["triangleArea"]
        },
        {
          id: "word-problems-composite",
          title: "Word Problems: Composite Figures",
          difficulty: "challenging",
          prerequisites: ["complex-composite"],
          masterySignals: "Student correctly solves word problems involving composite figures with triangles in real-world contexts in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ word problems solved correctly",
                "Interprets context and applies correct method"
              ],
              qualitative: [
                "Visualizes or sketches the composite figure from description",
                "Extracts all necessary dimensions from text",
                "Chooses appropriate method (split or take-away)",
                "Calculates accurately with clear steps",
                "Gives answer with correct units and context"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with support",
                "Struggles to visualize from description"
              ],
              qualitative: [
                "Has difficulty creating diagram from text",
                "Misses some dimensions mentioned in problem",
                "Can solve once figure is drawn correctly",
                "Forgets to include units or context in answer"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot extract information from word problems"
              ],
              qualitative: [
                "Cannot visualize composite figure from description",
                "Does not recognize composite figure context",
                "Cannot identify which measurements to use",
                "Gives unreasonable answers"
              ]
            }
          },
          learningObjectives: [
            "Visualize composite figures from word problem descriptions",
            "Extract relevant dimensions from text",
            "Choose and apply appropriate method",
            "Give answers with correct units and in context"
          ],
          relevantFormulas: [
            "Read carefully to identify the shape",
            "Draw a diagram to visualize the problem",
            "Apply appropriate area formulas"
          ],
          availableTools: ["triangleArea"]
        }
      ]
    },

    learningObjectives: [
      "Use split-and-add method to find area of composite figures",
      "Use take-away method when shape is cut from a larger shape",
      "Handle complex composite figures with multiple components",
      "Solve word problems involving composite figures"
    ],

    keyFormulas: `
**Split and Add Method:**
- Break the figure into triangles and rectangles
- Calculate each area separately
- Add all areas together
- Total Area = Area A + Area B + ...

**Take Away Method:**
- Start with a larger, simpler shape
- Calculate the area of the cutout
- Subtract the cutout from the larger shape
- Remaining Area = Large Shape Area - Cutout Area

**Strategy Selection:**
- Use split-and-add when figure can be divided into non-overlapping parts
- Use take-away when a piece has been "cut out" from a larger shape
- Sometimes combine both methods for complex figures
    `,

    // Use pre-generated question bank for this subtopic
    // Composite figures are difficult to generate accurately with AI
    usePreGeneratedQuestions: true
  }
};
