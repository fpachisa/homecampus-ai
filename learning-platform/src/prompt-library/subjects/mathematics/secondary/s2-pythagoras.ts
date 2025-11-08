/**
 * S2 Mathematics - Pythagoras' Theorem
 * Complete topic configuration with detailed rubrics for each section
 */

// Type exports - 5 subtopic IDs (sections within the single topic)
export type PythagorasTopicId =
  | 's2-math-pythagoras-introduction'
  | 's2-math-pythagoras-finding-hypotenuse'
  | 's2-math-pythagoras-finding-shorter-sides'
  | 's2-math-pythagoras-real-world-applications'
  | 's2-math-pythagoras-converse';

// Topic-specific tutor customization
export const PYTHAGORAS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Pythagoras' Theorem.

Teaching Approach:
- Build understanding from geometric visualization to algebraic application
- Help students distinguish between finding hypotenuse (c² = a² + b²) vs finding legs (a² = c² - b²)
- Emphasize identifying the right angle and hypotenuse first
- Use visual tools (triangles, rectangles) to aid understanding
- Celebrate recognition of Pythagorean triples (3-4-5, 5-12-13, etc.)
- Guide students to verify answers are reasonable (hypotenuse > legs)
- Connect abstract theorem to real-world applications

**Text-to-Speech Guidelines:**
- Say "a squared plus b squared equals c squared" not "a² + b² = c²"
- Say "Pythagoras' Theorem" or "the theorem" (avoid complex pronunciation)
- Say "square root of 25" not "√25"
- Say "the hypotenuse" not "side c" when referring to context
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), use proper mathematical notation`,

  visualToolsGuidance: `Use pre-built visual tools to help students visualize right-angled triangles:
- rightTriangle: Shows labeled right triangle with sides and angles
- square: Demonstrates geometric proof (squares on sides)
- rectangle: For rectangle diagonal problems
- generalTriangle: For showing non-right triangles (converse section)
- cuboid: For 3D space diagonal problems

IMPORTANT: Use the technical name (e.g., "rightTriangle") in the toolName field, NOT the display name.`,

  keyReminders: [
    'Always identify the hypotenuse first (longest side, opposite right angle)',
    'Check which side is unknown before choosing formula',
    'Hypotenuse: c² = a² + b² (ADD the squares)',
    'Leg: a² = c² - b² (SUBTRACT from hypotenuse squared)',
    'Verify answer makes sense: c > a and c > b',
    'Round appropriately based on context',
    'Include units in final answer'
  ]
};

// Available math tools for this topic
export const PYTHAGORAS_MATH_TOOLS = [
  'rightTriangle',
  'square',
  'rectangle',
  'cuboid',
  'cartesianPlane'
  // Note: 'generalTriangle' is section-scoped to 'converse' section only
];

// Global configuration
export const S2_PYTHAGORAS_CONFIG = {
  tutor: PYTHAGORAS_TUTOR_CUSTOMIZATION,
  mathTools: PYTHAGORAS_MATH_TOOLS
};

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S2_MATH_PYTHAGORAS_SUBTOPICS = {

  // ==========================================
  // SECTION 1: Introduction to Pythagoras' Theorem
  // ==========================================

  's2-math-pythagoras-introduction': {
    displayName: 'Introduction to Pythagoras\' Theorem',
    topicName: 'Pythagoras\' Theorem introduction',

    progressionStructure: {
      sections: [
        {
          id: 'introduction',
          title: 'Introduction to Pythagoras\' Theorem',
          difficulty: 'foundational',
          prerequisites: ['Basic knowledge of right-angled triangles', 'Squares and square roots'],
          masterySignals: 'Student correctly identifies hypotenuse, states theorem, and verifies Pythagorean triples',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Identifies hypotenuse correctly in 4/5 different triangle orientations',
                'States Pythagoras\' Theorem accurately in words and formula',
                'Verifies 3 Pythagorean triples correctly (e.g., 3-4-5, 5-12-13)'
              ],
              qualitative: [
                'Explains: "The hypotenuse is the longest side, opposite the right angle"',
                'States: "The square of the hypotenuse equals the sum of squares of the other two sides"',
                'Recognizes Pythagorean triples without calculation',
                'Shows understanding that c must be the longest side',
                'Can point to hypotenuse in any orientation of right triangle'
              ]
            },
            developing: {
              quantitative: [
                '2-3 correct identifications with prompting',
                'States theorem with some terminology errors',
                'Verifies 1-2 Pythagorean triples correctly'
              ],
              qualitative: [
                'Identifies hypotenuse in standard orientation but struggles with rotated triangles',
                'Confuses which side is c in the formula',
                'Knows the formula structure but may reverse a and c',
                'Needs reminder that hypotenuse is opposite the right angle'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot consistently identify hypotenuse',
                'Cannot state the theorem accurately',
                'Makes errors in basic squaring (e.g., 3² = 6)'
              ],
              qualitative: [
                'Confuses hypotenuse with any side',
                'Thinks hypotenuse is always the vertical side',
                'Cannot explain the relationship between sides',
                'Adds before squaring: (a + b)² instead of a² + b²'
              ]
            }
          },

          learningObjectives: [
            'Identify the hypotenuse and legs of a right-angled triangle',
            'State Pythagoras\' Theorem: a² + b² = c²',
            'Understand that c is the hypotenuse (longest side)',
            'Recognize common Pythagorean triples (3-4-5, 5-12-13, 8-15-17, 7-24-25)',
            'Verify the theorem with given side lengths'
          ],

          relevantFormulas: [
            'Pythagoras\' Theorem: a² + b² = c²',
            'a and b are legs (shorter sides forming the right angle)',
            'c is the hypotenuse (longest side, opposite right angle)',
            'Common triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25'
          ],

          availableTools: ['rightTriangle', 'square'],

          problemDescriptor: {
            description: 'Pure geometric triangles with labeled vertices. Verify given triples or identify parts.',
            contexts: ['Triangles in different orientations', 'Simple Pythagorean triples', 'Verification problems'],
            scaffolding: 'high',
            visualSupport: 'always include triangle diagram'
          }
        }
      ]
    },

    learningObjectives: [
      'Identify the hypotenuse and legs of a right-angled triangle',
      'State Pythagoras\' Theorem in words and symbols',
      'Recognize Pythagorean triples'
    ]
  },

  // ==========================================
  // SECTION 2: Finding the Hypotenuse
  // ==========================================

  's2-math-pythagoras-finding-hypotenuse': {
    displayName: 'Finding the Hypotenuse',
    topicName: 'finding the hypotenuse using Pythagoras',

    progressionStructure: {
      sections: [
        {
          id: 'finding-hypotenuse',
          title: 'Finding the Hypotenuse',
          difficulty: 'foundational',
          prerequisites: ['introduction'],
          masterySignals: 'Student solves 3 consecutive hypotenuse problems correctly with appropriate rounding',
          estimatedQuestions: '5-7 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Finds hypotenuse correctly for 3 consecutive problems',
                'Handles Pythagorean triples (exact answers) and non-triples (decimal answers)',
                'Rounds appropriately to 1 dp, 2 dp, or 3 sf as requested',
                'Solves at least 1 word problem correctly'
              ],
              qualitative: [
                'Systematically: squares both legs, adds, takes square root',
                'Recognizes Pythagorean triples and states exact answer',
                'For non-triples: uses calculator and rounds appropriately',
                'Verifies answer makes sense (c > a and c > b)',
                'Includes correct units in answer',
                'Can solve ladder problems, diagonal problems, etc.'
              ]
            },
            developing: {
              quantitative: [
                '2-3 correct with Pythagorean triples',
                '1 correct with non-triple after hint about rounding',
                'Arithmetic errors occasionally'
              ],
              qualitative: [
                'Knows to use c² = a² + b² but may forget square root step',
                'Makes calculation errors (addition, squaring)',
                'Rounds too early in the process',
                'Forgets units occasionally',
                'Needs reminder to check if answer is reasonable'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot complete calculation without multiple prompts',
                'Gets wrong answer on triples (calculation errors)',
                'Cannot set up word problems'
              ],
              qualitative: [
                'Takes square root too early: √a² + √b²',
                'Adds before squaring: (a + b)²',
                'Forgets to take square root at the end',
                'Cannot interpret word problem to identify triangle',
                'Does not recognize when answer is unreasonable'
              ]
            }
          },

          learningObjectives: [
            'Apply c = √(a² + b²) to find hypotenuse',
            'Square numbers and add squares correctly',
            'Find square roots using calculator',
            'Round answers to specified precision',
            'Solve word problems involving hypotenuse'
          ],

          relevantFormulas: [
            'Finding hypotenuse: c² = a² + b²',
            'Therefore: c = √(a² + b²)',
            'Steps: 1) Square both legs, 2) Add, 3) Take square root',
            'Always check: c > a and c > b'
          ],

          availableTools: ['rightTriangle'],

          problemDescriptor: {
            description: 'Find hypotenuse given two legs. Progress from triples to non-triples to word problems.',
            contexts: [
              'Pure triangle: legs 3, 4 → hypotenuse 5',
              'Pure triangle: legs 7, 9 → hypotenuse √130 ≈ 11.4',
              'Ladder against wall',
              'Rectangle diagonal',
              'Kite string length'
            ],
            numberRanges: {
              basic: 'Pythagorean triples (3-4-5, 5-12-13, etc.)',
              intermediate: 'Multiples of triples (6-8-10, 9-12-15)',
              advanced: 'Non-triples requiring decimal answers'
            },
            scaffolding: 'reduce as student progresses'
          }
        }
      ]
    },

    learningObjectives: [
      'Apply c² = a² + b² to find the hypotenuse',
      'Round answers appropriately',
      'Solve real-world problems'
    ]
  },

  // ==========================================
  // SECTION 3: Finding Shorter Sides (Legs)
  // ==========================================

  's2-math-pythagoras-finding-shorter-sides': {
    displayName: 'Finding Shorter Sides',
    topicName: 'finding legs using Pythagoras',

    progressionStructure: {
      sections: [
        {
          id: 'finding-shorter-sides',
          title: 'Finding Shorter Sides (Legs)',
          difficulty: 'intermediate',
          prerequisites: ['introduction', 'finding-hypotenuse'],
          masterySignals: 'Student correctly uses a² = c² - b² formula, explains why subtract (not add), and solves problems accurately',
          estimatedQuestions: '5-7 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Correctly identifies when to use c² - b² formula in 4/5 problems',
                'Solves 3 consecutive leg-finding problems correctly',
                'Handles triples and non-triples with appropriate rounding',
                'Solves 1 word problem independently'
              ],
              qualitative: [
                'Explains: "We subtract because we\'re rearranging a² + b² = c²"',
                'Identifies the hypotenuse first before calculating',
                'Uses formula: a² = c² - b², so a = √(c² - b²)',
                'Verifies answer: checks that c² = a² + b²',
                'Recognizes that c² must be larger than b² (or error in problem)',
                'Distinguishes when to add (finding c) vs subtract (finding a or b)'
              ]
            },
            developing: {
              quantitative: [
                'Needs reminder to identify hypotenuse first',
                'Solves 2-3 correctly with prompting',
                'Makes occasional subtraction order errors'
              ],
              qualitative: [
                'Understands concept but confuses c² - b² with b² - c²',
                'Knows to subtract but may not articulate why',
                'Needs reminder about which formula to use',
                'Checks answer only when prompted',
                'Occasional arithmetic errors in subtraction'
              ]
            },
            struggling: {
              quantitative: [
                'Always tries to add, regardless of unknown side',
                'Gets negative values (subtracts wrong way)',
                'Cannot complete without extensive scaffolding'
              ],
              qualitative: [
                'Does not understand when to subtract vs add',
                'Subtracts in wrong order: b² - c² (giving negative)',
                'Forgets to take square root after subtracting',
                'Cannot identify which side is hypotenuse',
                'Thinks any formula variation works for any unknown'
              ]
            }
          },

          learningObjectives: [
            'Rearrange a² + b² = c² to find a leg: a² = c² - b²',
            'Apply a = √(c² - b²) correctly',
            'Distinguish finding hypotenuse from finding leg',
            'Solve word problems where hypotenuse is given',
            'Verify answers using the original theorem'
          ],

          relevantFormulas: [
            'Finding a leg: a² = c² - b²',
            'Therefore: a = √(c² - b²)',
            'Alternative: b = √(c² - a²)',
            'Key: Subtract leg² from hypotenuse²',
            'Steps: 1) Square hypotenuse, 2) Square known leg, 3) Subtract, 4) Take square root'
          ],

          availableTools: ['rightTriangle'],

          problemDescriptor: {
            description: 'Find a leg when hypotenuse and other leg are given. Emphasize identifying hypotenuse first.',
            contexts: [
              'Pure triangle: hypotenuse 13, leg 5 → other leg 12',
              'Pure triangle: hypotenuse 20, leg 11 → other leg √279 ≈ 16.7',
              'Ladder problem: ladder 10 m, height 8 m → base distance',
              'Rectangle: diagonal 15 cm, length 9 cm → width 12 cm'
            ],
            numberRanges: {
              basic: 'Pythagorean triples (5-12-13, 8-15-17, etc.)',
              intermediate: 'Multiples of triples',
              advanced: 'Non-triples requiring decimals'
            },
            keyEmphasis: 'Identify hypotenuse FIRST, then choose correct formula',
            scaffolding: 'Ask "Which side is the hypotenuse?" before solving'
          }
        }
      ]
    },

    learningObjectives: [
      'Use a² = c² - b² to find unknown leg',
      'Distinguish between formulas for finding c vs finding a/b',
      'Solve multi-step problems'
    ]
  },

  // ==========================================
  // SECTION 4: Real-World Applications
  // ==========================================

  's2-math-pythagoras-real-world-applications': {
    displayName: 'Real-World Applications',
    topicName: 'applying Pythagoras to real situations',

    progressionStructure: {
      sections: [
        {
          id: 'real-world-applications',
          title: 'Real-World Applications',
          difficulty: 'intermediate',
          prerequisites: ['finding-hypotenuse', 'finding-shorter-sides'],
          masterySignals: 'Student solves different types of application problems (ladders, navigation, rectangles) and 1 3D problem',
          estimatedQuestions: '6-8 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Solves 3 different types of 2D problems (ladder, navigation, rectangle)',
                'Solves 1 3D space diagonal problem correctly',
                'All answers include appropriate units',
                'Rounding is contextually appropriate'
              ],
              qualitative: [
                'Identifies the right-angled triangle from word problem description',
                'Draws diagram showing the triangle',
                'Labels known and unknown sides',
                'Chooses correct formula based on what\'s unknown',
                'Interprets answer in context (e.g., "The ladder reaches 12 m up the wall")',
                'For 3D: applies Pythagoras twice (base diagonal, then space diagonal)',
                'Validates answer makes practical sense'
              ]
            },
            developing: {
              quantitative: [
                'Solves 2 types of problems with hints',
                'Struggles with 3D problems',
                'Occasionally forgets units'
              ],
              qualitative: [
                'Needs help identifying the triangle in word problems',
                'Can solve once triangle is identified',
                'Draws diagram when prompted',
                'Mixes units occasionally (cm and m)',
                'For 3D: understands concept but makes calculation errors'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot solve word problems independently',
                'Cannot visualize the triangle',
                'Makes frequent setup or calculation errors'
              ],
              qualitative: [
                'Does not recognize perpendicular directions',
                'Cannot identify the right angle in physical situations',
                'Confuses which measurements to use',
                'For 3D: does not understand how to apply theorem twice',
                'Does not check if answer is reasonable for context'
              ]
            }
          },

          learningObjectives: [
            'Identify right-angled triangles in real contexts',
            'Solve ladder problems (wall-ground-ladder)',
            'Calculate navigation distances (perpendicular directions)',
            'Find rectangle diagonals',
            'Apply Pythagoras twice for 3D space diagonals',
            'Interpret answers in context with correct units'
          ],

          relevantFormulas: [
            'Pythagoras: a² + b² = c² (applied to context)',
            'Rectangle diagonal: d² = l² + w²',
            '3D space diagonal: d² = l² + w² + h²',
            'Or apply twice: base diagonal first, then with height'
          ],

          availableTools: ['rightTriangle', 'rectangle', 'cuboid', 'cartesianPlane'],

          problemDescriptor: {
            description: 'Real-world problems: ladders, navigation, rectangles, 3D boxes',
            contexts: [
              'Ladder: "15 m ladder, 9 m from wall, how high?"',
              'Navigation: "Walk 8 km north, 6 km east, how far from start?"',
              'Rectangle: "TV screen 80 cm × 45 cm, find diagonal"',
              '3D: "Box 12 cm × 9 cm × 8 cm, find space diagonal"',
              'Construction: "Check if corner is square using 3-4-5 method"'
            ],
            scaffolding: 'Provide diagram for basic, expect student to draw for advanced',
            realismLevel: 'Use realistic measurements'
          }
        }
      ]
    },

    learningObjectives: [
      'Apply Pythagoras to practical problems',
      'Work with rectangles and 3D shapes',
      'Interpret results in context'
    ]
  },

  // ==========================================
  // SECTION 5: Converse of Pythagoras' Theorem
  // ==========================================

  's2-math-pythagoras-converse': {
    displayName: 'Converse of Pythagoras\' Theorem',
    topicName: 'converse of Pythagoras - testing for right angles',

    progressionStructure: {
      sections: [
        {
          id: 'converse',
          title: 'Converse of Pythagoras\' Theorem',
          difficulty: 'intermediate',
          prerequisites: ['finding-hypotenuse', 'finding-shorter-sides'],
          masterySignals: 'Student tests triangles correctly, explains the converse, and applies to construction problems',
          estimatedQuestions: '5-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Correctly tests 4/5 triangles (mix of right and non-right)',
                'Identifies longest side correctly every time',
                'Solves 1 construction checking problem',
                'Recognizes Pythagorean triples without calculating'
              ],
              qualitative: [
                'States converse: "IF a² + b² = c², THEN triangle is right-angled"',
                'Explains difference: "Theorem assumes right angle. Converse tests for it."',
                'Procedure: 1) Find longest side (c), 2) Check if a² + b² = c²',
                'If equal → right-angled; if not → not right-angled',
                'States which angle is 90° (opposite the longest side)',
                'Applies to construction: 3-4-5 method creates right angles'
              ]
            },
            developing: {
              quantitative: [
                'Tests 3/5 correctly',
                'Occasionally uses wrong side as c',
                'Needs reminder about procedure'
              ],
              qualitative: [
                'Understands the concept but execution inconsistent',
                'May confuse which side is c',
                'Knows to square and compare but may make arithmetic errors',
                'Can state the converse when prompted',
                'Understands testing vs using the theorem with guidance'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot test without extensive scaffolding',
                'Does not identify longest side correctly',
                'Makes frequent calculation errors'
              ],
              qualitative: [
                'Does not understand what "converse" means',
                'Cannot explain when to use converse vs regular theorem',
                'Uses any side as c instead of longest',
                'Thinks unequal values mean calculation error (not non-right triangle)',
                'Cannot apply to practical checking problems'
              ]
            }
          },

          learningObjectives: [
            'State the converse of Pythagoras\' Theorem',
            'Test if a triangle is right-angled using side lengths',
            'Identify the longest side as potential hypotenuse',
            'Apply to construction checking (3-4-5 method)',
            'Explain the difference between theorem and converse'
          ],

          relevantFormulas: [
            'Converse: IF a² + b² = c², THEN triangle is right-angled',
            'Testing procedure: 1) Identify longest side (c), 2) Check if (shorter)² + (shorter)² = (longest)²',
            'If equal → right angle opposite the longest side',
            'If not equal → triangle is NOT right-angled',
            '3-4-5 method: If sides are 3, 4, 5 (or multiples), angle is 90°'
          ],

          availableTools: ['rightTriangle', 'generalTriangle'],

          problemDescriptor: {
            description: 'Test if given sides form right triangle. Construction checking problems.',
            contexts: [
              'Test: sides 7, 24, 25 → is it right-angled?',
              'Test: sides 10, 11, 12 → is it right-angled?',
              'Construction: "Measures 90 cm, 120 cm, diagonal 150 cm. Is corner square?"',
              'Egyptian rope: "12 segments forming 3-4-5 triangle creates 90°"',
              'Carpenter: "Will sides 6, 8, 10 form right triangle?"'
            ],
            numberTypes: {
              basic: 'Common Pythagorean triples',
              intermediate: 'Multiples and larger triples',
              advanced: 'Non-triples that fail the test'
            },
            keyEmphasis: 'Always identify longest side FIRST'
          }
        }
      ]
    },

    learningObjectives: [
      'Test if triangle is right-angled',
      'Apply converse in construction contexts',
      'Understand theorem vs converse distinction'
    ]
  }
};

export default S2_MATH_PYTHAGORAS_SUBTOPICS;
