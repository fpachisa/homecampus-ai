/**
 * S2 Mathematics - Trigonometric Ratios
 * Complete topic configuration with detailed rubrics for each section
 */

// Type exports - 5 subtopic IDs (sections within the single topic)
export type TrigonometricRatiosTopicId =
  | 's2-math-trig-ratios-introduction'
  | 's2-math-trig-ratios-finding-sides-sine'
  | 's2-math-trig-ratios-finding-sides-cos-tan'
  | 's2-math-trig-ratios-finding-angles'
  | 's2-math-trig-ratios-real-world-applications';

// Topic-specific tutor customization
export const TRIGONOMETRIC_RATIOS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Trigonometric Ratios.

Teaching Approach:
- Build understanding from triangle labeling to ratio identification to practical application
- Emphasize the SOH-CAH-TOA mnemonic but ensure students understand what it represents
- Help students identify opposite, adjacent, and hypotenuse relative to a given angle
- Guide students to choose the correct ratio based on given and unknown sides
- Use visual tools (right triangles, elevation/depression diagrams) to aid understanding
- Celebrate recognition of when to multiply vs divide when rearranging equations
- Connect abstract ratios to real-world applications (heights, distances, angles)

**Text-to-Speech Guidelines:**
- Say "S O H, C A H, T O A" (with spaces) instead of "SOH-CAH-TOA" for proper pronunciation
- Say "sine theta" not "sin θ", "cosine theta" not "cos θ", "tangent theta" not "tan θ"
- Say "opposite over hypotenuse" not "O/H"
- Say "inverse sine" or "sine inverse" not "sin⁻¹"
- Say "theta equals 35 degrees" not "θ = 35°"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), use proper mathematical notation`,

  visualToolsGuidance: `Use pre-built visual tools to help students visualize right-angled triangles and real-world scenarios:
- rightTriangle: Shows labeled right triangle with sides and angles (use for all basic ratio problems)
- elevationDepression: For angle of elevation and depression problems
- unitCircle: For understanding ratios beyond 90° (advanced only)

IMPORTANT: Use the technical name (e.g., "rightTriangle") in the toolName field, NOT the display name.`,

  keyReminders: [
    'Always identify opposite, adjacent, and hypotenuse relative to the angle being considered',
    'SOH-CAH-TOA: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent',
    'Choose the ratio based on which sides are given and unknown',
    'For finding sides: rearrange equation by multiplying or dividing',
    'For finding angles: use inverse trig functions (sin⁻¹, cos⁻¹, tan⁻¹)',
    'Calculator MUST be in degree mode for S2 level',
    'Round appropriately based on context (usually 1 dp for lengths, nearest degree for angles)',
    'Include units in final answer',
    'Verify answer makes sense in context'
  ]
};

// Available math tools for this topic
export const TRIGONOMETRIC_RATIOS_MATH_TOOLS = [
  'rightTriangle',
  'elevationDepression'
  // Note: unitCircle is excluded for S2 level (too advanced)
];

// Global configuration
export const S2_TRIGONOMETRIC_RATIOS_CONFIG = {
  tutor: TRIGONOMETRIC_RATIOS_TUTOR_CUSTOMIZATION,
  mathTools: TRIGONOMETRIC_RATIOS_MATH_TOOLS
};

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S2_MATH_TRIGONOMETRIC_RATIOS_SUBTOPICS = {

  // ==========================================
  // SECTION 1: Introduction to Trigonometric Ratios
  // ==========================================

  's2-math-trig-ratios-introduction': {
    displayName: 'Introduction to Trigonometric Ratios',
    topicName: 'introduction to trigonometric ratios',

    progressionStructure: {
      sections: [
        {
          id: 'introduction',
          title: 'Introduction to Trigonometric Ratios',
          difficulty: 'foundational',
          prerequisites: ['Pythagoras\' Theorem', 'Right-angled triangles'],
          masterySignals: 'Student correctly identifies opposite, adjacent, and hypotenuse in different triangle orientations, and states all three ratios accurately',
          estimatedQuestions: '5-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Identifies opposite, adjacent, and hypotenuse correctly in 4/5 different triangle orientations',
                'States sine, cosine, and tangent ratios accurately without prompting',
                'Recalls SOH-CAH-TOA mnemonic correctly',
                'Calculates exact ratio values (as fractions) from triangle diagrams in 3/4 attempts'
              ],
              qualitative: [
                'Explains: "Opposite is the side opposite to the angle, adjacent is next to the angle but not the hypotenuse"',
                'States: "Sine = Opposite / Hypotenuse, Cosine = Adjacent / Hypotenuse, Tangent = Opposite / Adjacent"',
                'Recognizes that hypotenuse is always the longest side opposite the right angle',
                'Understands that opposite and adjacent are relative to the angle being considered',
                'Can explain what SOH-CAH-TOA represents without just reciting it',
                'Identifies which sides to use for each ratio without confusion'
              ]
            },
            developing: {
              quantitative: [
                '2-3 correct identifications with prompting',
                'States 2 out of 3 ratios correctly',
                'Recalls mnemonic with hints',
                'Calculates ratio values with some errors'
              ],
              qualitative: [
                'Identifies hypotenuse correctly but confuses opposite and adjacent in rotated triangles',
                'Knows the ratios but may mix up numerator and denominator',
                'Needs reminder about which side is opposite vs adjacent to the angle',
                'Can recall SOH-CAH-TOA but struggles to apply it to specific triangles',
                'Occasionally uses hypotenuse where adjacent should be used'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot consistently identify sides relative to angle',
                'States fewer than 2 ratios correctly',
                'Cannot recall mnemonic or its meaning',
                'Makes frequent errors in ratio calculations'
              ],
              qualitative: [
                'Confuses opposite, adjacent, and hypotenuse consistently',
                'Cannot explain what the ratios represent',
                'Thinks the sides have fixed labels regardless of angle',
                'Does not understand that ratios involve division',
                'Cannot connect SOH-CAH-TOA to the actual formulas'
              ]
            }
          },

          learningObjectives: [
            'Identify the hypotenuse (longest side, opposite right angle)',
            'Identify the opposite side (opposite to the angle being considered)',
            'Identify the adjacent side (next to the angle, but not the hypotenuse)',
            'State the sine ratio: sin θ = Opposite / Hypotenuse',
            'State the cosine ratio: cos θ = Adjacent / Hypotenuse',
            'State the tangent ratio: tan θ = Opposite / Adjacent',
            'Recall and apply the SOH-CAH-TOA mnemonic',
            'Calculate exact ratio values from triangle diagrams',
            'Understand that opposite and adjacent are relative to the angle being considered'
          ],

          relevantFormulas: [
            'sin θ = Opposite / Hypotenuse (SOH)',
            'cos θ = Adjacent / Hypotenuse (CAH)',
            'tan θ = Opposite / Adjacent (TOA)',
            'SOH-CAH-TOA mnemonic'
          ],

          availableTools: ['rightTriangle'],

          problemDescriptor: {
            description: 'Pure geometric triangles with labeled vertices. Identify sides and state/calculate ratios.',
            contexts: [
              'Triangles in standard orientation (right angle bottom-right)',
              'Triangles in rotated orientations',
              'Identifying sides for different angles in same triangle',
              'Calculating exact ratio values (fractions) from given side lengths'
            ],
            scaffolding: 'high',
            visualSupport: 'always include triangle diagram with labeled sides'
          }
        }
      ]
    },

    learningObjectives: [
      'Identify opposite, adjacent, and hypotenuse in right-angled triangles',
      'State the three trigonometric ratios using SOH-CAH-TOA',
      'Calculate exact ratio values from triangle diagrams'
    ]
  },

  // ==========================================
  // SECTION 2: Finding Sides Using Sine
  // ==========================================

  's2-math-trig-ratios-finding-sides-sine': {
    displayName: 'Finding Sides Using Sine',
    topicName: 'finding sides using the sine ratio',

    progressionStructure: {
      sections: [
        {
          id: 'finding-sides-sine',
          title: 'Finding Sides Using Sine',
          difficulty: 'foundational-to-intermediate',
          prerequisites: ['introduction'],
          masterySignals: 'Student solves 3 consecutive problems correctly: sets up sin equation, rearranges correctly (multiply or divide), and calculates answer',
          estimatedQuestions: '6-7 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Solves 3 consecutive sine problems correctly without hints',
                'Correctly identifies when to use sine ratio in 4/5 scenarios',
                'Rearranges equations correctly in both cases: finding opposite (multiply) and finding hypotenuse (divide)',
                'Calculator usage correct (degree mode) in all attempts',
                'Rounds appropriately to 1 dp or 2 dp as requested'
              ],
              qualitative: [
                'Systematically identifies: given angle, given side, unknown side',
                'Correctly determines if unknown is opposite or hypotenuse',
                'Sets up equation: sin(angle) = opposite/hypotenuse',
                'For opposite: rearranges to opposite = hypotenuse × sin(angle)',
                'For hypotenuse: rearranges to hypotenuse = opposite / sin(angle)',
                'Uses calculator correctly in degree mode',
                'Includes correct units in answer',
                'Verifies answer makes sense (opposite < hypotenuse)'
              ]
            },
            developing: {
              quantitative: [
                '2 consecutive correct with occasional hints on rearrangement',
                'Identifies sine ratio correctly but needs prompting for equation setup',
                'Makes occasional arithmetic or calculator errors',
                'Rounding sometimes imprecise'
              ],
              qualitative: [
                'Knows to use sine when opposite and hypotenuse are involved',
                'Sets up equation correctly but struggles with rearrangement',
                'Needs reminder about multiply vs divide based on what\'s unknown',
                'Occasionally forgets to check calculator mode',
                'Sometimes forgets units or rounds at wrong step',
                'Can verify answer when prompted'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot complete 2 consecutive problems without multiple prompts',
                'Confuses sine with other ratios',
                'Cannot rearrange equations correctly',
                'Frequent calculator or arithmetic errors'
              ],
              qualitative: [
                'Cannot identify which ratio to use from given information',
                'Confuses opposite with adjacent',
                'Does not understand when to multiply vs divide',
                'Uses calculator in radian mode or makes consistent calculation errors',
                'Does not verify if answer is reasonable',
                'Cannot identify given vs unknown sides from word problems'
              ]
            }
          },

          learningObjectives: [
            'Identify when sine ratio is appropriate (opposite and hypotenuse involved)',
            'Set up sine equation: sin(angle) = opposite / hypotenuse',
            'Find opposite side: opposite = hypotenuse × sin(angle)',
            'Find hypotenuse: hypotenuse = opposite / sin(angle)',
            'Use calculator in degree mode correctly',
            'Round answers to appropriate precision',
            'Verify answers are reasonable (opposite < hypotenuse)'
          ],

          relevantFormulas: [
            'sin θ = Opposite / Hypotenuse',
            'Finding opposite: Opposite = Hypotenuse × sin θ',
            'Finding hypotenuse: Hypotenuse = Opposite / sin θ',
            'Calculator must be in degree mode'
          ],

          availableTools: ['rightTriangle'],

          problemDescriptor: {
            description: 'Find unknown side using sine ratio. Progress from finding opposite to finding hypotenuse.',
            contexts: [
              'Pure triangle: angle 35°, hypotenuse 10 cm → find opposite',
              'Pure triangle: angle 52°, opposite 8 m → find hypotenuse',
              'Simple word problem: ladder length given, angle given, find height reached'
            ],
            numberRanges: {
              angles: '20° to 70° (avoid very small or very large angles initially)',
              sides: '5 to 50 units (realistic measurements)'
            },
            scaffolding: 'Start with diagram provided, progress to student identifying triangle from word problem',
            keyEmphasis: 'Distinguish between multiply (finding opposite) and divide (finding hypotenuse)'
          }
        }
      ]
    },

    learningObjectives: [
      'Use sine ratio to find opposite or hypotenuse',
      'Rearrange sin equation correctly based on unknown',
      'Solve simple word problems involving sine'
    ]
  },

  // ==========================================
  // SECTION 3: Finding Sides Using Cosine and Tangent
  // ==========================================

  's2-math-trig-ratios-finding-sides-cos-tan': {
    displayName: 'Finding Sides Using Cosine and Tangent',
    topicName: 'finding sides using cosine and tangent ratios',

    progressionStructure: {
      sections: [
        {
          id: 'finding-sides-cosine',
          title: 'Finding Sides Using Cosine',
          difficulty: 'intermediate',
          prerequisites: ['finding-sides-sine'],
          masterySignals: 'Student solves cosine problems correctly, distinguishing from sine cases, and chooses correct rearrangement',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Solves 3/4 cosine problems correctly',
                'Distinguishes when to use cosine vs sine in 4/5 scenarios',
                'Correctly rearranges for both finding adjacent and finding hypotenuse'
              ],
              qualitative: [
                'Identifies that cosine uses adjacent and hypotenuse',
                'Sets up equation: cos(angle) = adjacent / hypotenuse',
                'For adjacent: rearranges to adjacent = hypotenuse × cos(angle)',
                'For hypotenuse: rearranges to hypotenuse = adjacent / cos(angle)',
                'Distinguishes adjacent from opposite correctly',
                'Verifies answer makes sense (adjacent < hypotenuse)'
              ]
            },
            developing: {
              quantitative: [
                '2/4 correct with hints on which ratio to use',
                'Needs prompting to distinguish adjacent from opposite'
              ],
              qualitative: [
                'Knows cosine involves adjacent but sometimes confuses with opposite',
                'Can set up equation but struggles with rearrangement',
                'Needs reminder about multiply vs divide',
                'Can solve once triangle sides are clearly labeled'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot distinguish cosine from sine cases',
                'Frequent errors in identifying adjacent side',
                'Cannot rearrange equations'
              ],
              qualitative: [
                'Confuses adjacent with opposite consistently',
                'Does not understand when to use cosine vs sine',
                'Cannot set up correct equation from diagram',
                'Does not verify if answer is reasonable'
              ]
            }
          },

          learningObjectives: [
            'Identify when cosine ratio is appropriate (adjacent and hypotenuse involved)',
            'Set up cosine equation: cos(angle) = adjacent / hypotenuse',
            'Find adjacent side: adjacent = hypotenuse × cos(angle)',
            'Find hypotenuse: hypotenuse = adjacent / cos(angle)',
            'Distinguish adjacent from opposite in different orientations',
            'Verify answers are reasonable'
          ],

          relevantFormulas: [
            'cos θ = Adjacent / Hypotenuse',
            'Finding adjacent: Adjacent = Hypotenuse × cos θ',
            'Finding hypotenuse: Hypotenuse = Adjacent / cos θ'
          ],

          availableTools: ['rightTriangle'],

          problemDescriptor: {
            description: 'Find unknown side using cosine ratio.',
            contexts: [
              'Pure triangle: angle 40°, hypotenuse 15 cm → find adjacent',
              'Pure triangle: angle 58°, adjacent 12 m → find hypotenuse',
              'Word problem: distance from base of building given, angle given, find ladder length'
            ],
            scaffolding: 'Emphasize identifying adjacent vs opposite first'
          }
        },
        {
          id: 'finding-sides-tangent',
          title: 'Finding Sides Using Tangent',
          difficulty: 'intermediate',
          prerequisites: ['finding-sides-cosine'],
          masterySignals: 'Student solves tangent problems correctly, choosing tangent when neither side is hypotenuse',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Solves 3/4 tangent problems correctly',
                'Identifies when to use tangent (no hypotenuse) in 4/5 scenarios',
                'Correctly rearranges for both finding opposite and finding adjacent'
              ],
              qualitative: [
                'Recognizes tangent uses opposite and adjacent (not hypotenuse)',
                'Sets up equation: tan(angle) = opposite / adjacent',
                'For opposite: rearranges to opposite = adjacent × tan(angle)',
                'For adjacent: rearranges to adjacent = opposite / tan(angle)',
                'Chooses tangent when hypotenuse is not given or unknown',
                'Verifies answer using reasonableness check'
              ]
            },
            developing: {
              quantitative: [
                '2/4 correct with hints on which ratio to use',
                'Needs prompting when to use tangent vs sine/cosine'
              ],
              qualitative: [
                'Knows tangent does not involve hypotenuse but may still try sine/cosine',
                'Can set up equation but struggles with rearrangement',
                'Needs reminder that tangent is often easier when both legs are involved',
                'Can solve once ratio choice is confirmed'
              ]
            },
            struggling: {
              quantitative: [
                'Always defaults to sine/cosine even when tangent is simpler',
                'Cannot identify when tangent is appropriate',
                'Frequent rearrangement errors'
              ],
              qualitative: [
                'Does not understand that tangent only uses opposite and adjacent',
                'Confuses which sides to use for each ratio',
                'Cannot determine which ratio to use from given information',
                'Does not verify if answer makes sense'
              ]
            }
          },

          learningObjectives: [
            'Identify when tangent ratio is appropriate (opposite and adjacent involved, no hypotenuse)',
            'Set up tangent equation: tan(angle) = opposite / adjacent',
            'Find opposite side: opposite = adjacent × tan(angle)',
            'Find adjacent side: adjacent = opposite / tan(angle)',
            'Choose the simplest ratio for given information',
            'Solve word problems involving all three ratios'
          ],

          relevantFormulas: [
            'tan θ = Opposite / Adjacent',
            'Finding opposite: Opposite = Adjacent × tan θ',
            'Finding adjacent: Adjacent = Opposite / tan θ'
          ],

          availableTools: ['rightTriangle'],

          problemDescriptor: {
            description: 'Find unknown side using tangent ratio. Include mixed problems requiring ratio choice.',
            contexts: [
              'Pure triangle: angle 48°, adjacent 20 m → find opposite',
              'Pure triangle: angle 33°, opposite 7 cm → find adjacent',
              'Word problem: building height and horizontal distance',
              'Mixed: given different combinations, student must choose correct ratio'
            ],
            scaffolding: 'Progress to problems where student must decide which ratio to use',
            keyEmphasis: 'Use tangent when hypotenuse is not involved'
          }
        }
      ]
    },

    learningObjectives: [
      'Use cosine ratio to find adjacent or hypotenuse',
      'Use tangent ratio to find opposite or adjacent',
      'Choose appropriate ratio based on given and unknown sides'
    ]
  },

  // ==========================================
  // SECTION 4: Finding Unknown Angles
  // ==========================================

  's2-math-trig-ratios-finding-angles': {
    displayName: 'Finding Unknown Angles',
    topicName: 'finding unknown angles using inverse trigonometric functions',

    progressionStructure: {
      sections: [
        {
          id: 'finding-angles',
          title: 'Finding Unknown Angles',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['finding-sides-sine', 'finding-sides-cosine', 'finding-sides-tangent'],
          masterySignals: 'Student uses inverse functions correctly in 3 consecutive problems, choosing correct ratio and using calculator properly',
          estimatedQuestions: '6-7 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Finds angles correctly using inverse trig functions in 3 consecutive problems',
                'Chooses correct ratio (sin⁻¹, cos⁻¹, or tan⁻¹) in 4/5 scenarios',
                'Uses calculator\'s inverse function buttons correctly every time',
                'Rounds angles appropriately (to nearest degree or 1 dp as requested)'
              ],
              qualitative: [
                'Identifies which two sides are given',
                'Chooses correct ratio based on given sides (opposite & hypotenuse → sine, etc.)',
                'Sets up equation: sin θ = opposite/hypotenuse (or cos/tan equivalent)',
                'Calculates the ratio first: e.g., sin θ = 8/12 = 0.6667',
                'Uses inverse function: θ = sin⁻¹(0.6667)',
                'Explains: "Inverse functions undo the trig function to find the angle"',
                'Verifies answer makes sense (angle between 0° and 90° for right triangle)',
                'Includes degree symbol in answer'
              ]
            },
            developing: {
              quantitative: [
                '2 consecutive correct with occasional hints on which inverse function',
                'Calculator usage correct but needs prompting for inverse button location',
                'Rounding sometimes imprecise'
              ],
              qualitative: [
                'Knows to use inverse functions but unsure which one',
                'Needs prompting: "Which two sides are given?"',
                'Calculates ratio correctly but struggles with inverse function step',
                'Finds inverse button with hints',
                'Sometimes forgets degree symbol or rounds incorrectly',
                'Can verify answer when prompted'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot use inverse functions without extensive scaffolding',
                'Confuses which inverse function to use',
                'Frequent calculator errors',
                'Cannot complete 2 problems correctly'
              ],
              qualitative: [
                'Does not understand what inverse functions do',
                'Tries to use regular trig functions instead of inverse',
                'Cannot identify which ratio to use from given sides',
                'Cannot find or use calculator\'s inverse function buttons',
                'Gives ratio value instead of angle (e.g., answers 0.6667 instead of 41.8°)',
                'Does not verify if answer is reasonable'
              ]
            }
          },

          learningObjectives: [
            'Understand that inverse trig functions "undo" trig functions to find angles',
            'Choose correct inverse function based on given sides',
            'Use sin⁻¹ when opposite and hypotenuse are given',
            'Use cos⁻¹ when adjacent and hypotenuse are given',
            'Use tan⁻¹ when opposite and adjacent are given',
            'Calculate the ratio first, then apply inverse function',
            'Use calculator\'s inverse function buttons (sin⁻¹, cos⁻¹, tan⁻¹) correctly',
            'Verify angle is between 0° and 90° for right triangle',
            'Round angles appropriately and include degree symbol'
          ],

          relevantFormulas: [
            'If sin θ = opposite/hypotenuse, then θ = sin⁻¹(opposite/hypotenuse)',
            'If cos θ = adjacent/hypotenuse, then θ = cos⁻¹(adjacent/hypotenuse)',
            'If tan θ = opposite/adjacent, then θ = tan⁻¹(opposite/adjacent)',
            'Calculator must be in degree mode',
            'Inverse function notation: sin⁻¹ (also written as arcsin)'
          ],

          availableTools: ['rightTriangle'],

          problemDescriptor: {
            description: 'Find unknown angle given two sides. Progress through all three inverse functions.',
            contexts: [
              'Pure triangle: opposite 6 cm, hypotenuse 10 cm → find angle using sin⁻¹',
              'Pure triangle: adjacent 8 m, hypotenuse 15 m → find angle using cos⁻¹',
              'Pure triangle: opposite 12 cm, adjacent 9 cm → find angle using tan⁻¹',
              'Word problem: ladder against wall, find angle of elevation',
              'Mixed: student must choose which inverse function based on given sides'
            ],
            scaffolding: 'Start with specifying which function to use, progress to student choosing',
            visualSupport: 'Always show triangle diagram',
            keyEmphasis: [
              'Calculate ratio FIRST, then apply inverse function',
              'Identify given sides to determine which inverse function',
              'Use calculator\'s inverse/shift button'
            ]
          }
        }
      ]
    },

    learningObjectives: [
      'Use inverse trigonometric functions to find unknown angles',
      'Choose correct inverse function based on given sides',
      'Operate calculator to find sin⁻¹, cos⁻¹, and tan⁻¹'
    ]
  },

  // ==========================================
  // SECTION 5: Real-World Applications
  // ==========================================

  's2-math-trig-ratios-real-world-applications': {
    displayName: 'Real-World Applications',
    topicName: 'applying trigonometric ratios to real-world problems',

    progressionStructure: {
      sections: [
        {
          id: 'angle-of-elevation-depression',
          title: 'Angles of Elevation and Depression',
          difficulty: 'intermediate',
          prerequisites: ['finding-sides-sine', 'finding-angles'],
          masterySignals: 'Student correctly identifies and distinguishes elevation from depression, draws correct diagrams, and solves problems',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Correctly distinguishes elevation from depression in 4/5 scenarios',
                'Solves 3 elevation/depression problems correctly',
                'Draws accurate diagrams showing horizontal line and angle'
              ],
              qualitative: [
                'Defines: "Angle of elevation is measured UP from the horizontal"',
                'Defines: "Angle of depression is measured DOWN from the horizontal"',
                'Draws horizontal line of sight correctly',
                'Identifies that angle of depression from A to B equals angle of elevation from B to A (alternate angles)',
                'Sets up right triangle correctly from word problem',
                'Chooses appropriate trig ratio for the problem',
                'Interprets answer in context: "The building is 42 m tall"'
              ]
            },
            developing: {
              quantitative: [
                '2-3 correct identifications with prompting',
                'Solves 2 problems with hints on diagram setup',
                'Diagrams need correction for horizontal line'
              ],
              qualitative: [
                'Understands concept but confuses elevation with depression occasionally',
                'Needs reminder about horizontal reference line',
                'Can solve once triangle is correctly drawn',
                'Needs prompting for which trig ratio to use',
                'Can interpret answer with hints'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot distinguish elevation from depression',
                'Cannot draw correct diagrams',
                'Cannot solve problems without extensive scaffolding'
              ],
              qualitative: [
                'Confuses angle of elevation with any upward measurement',
                'Does not understand horizontal reference line',
                'Cannot identify right triangle from word problem',
                'Cannot determine which trig ratio applies',
                'Does not interpret numerical answer in context'
              ]
            }
          },

          learningObjectives: [
            'Define angle of elevation (measured UP from horizontal)',
            'Define angle of depression (measured DOWN from horizontal)',
            'Draw diagrams showing horizontal line of sight',
            'Recognize alternate angle relationship (depression from A to B = elevation from B to A)',
            'Solve problems finding heights using elevation angles',
            'Solve problems finding distances using depression angles',
            'Interpret results in real-world context'
          ],

          relevantFormulas: [
            'Angle of elevation: from horizontal UP to object',
            'Angle of depression: from horizontal DOWN to object',
            'Typically use: tan θ = height / distance',
            'Or sin θ = height / hypotenuse, cos θ = distance / hypotenuse as appropriate'
          ],

          availableTools: ['rightTriangle', 'elevationDepression'],

          problemDescriptor: {
            description: 'Angle of elevation and depression problems.',
            contexts: [
              'Angle of elevation: "Person 50 m from building, looks up at 35°, find height"',
              'Angle of depression: "Observer on 80 m cliff, looks down at boat at 28°, find distance from cliff base"',
              'Combined: "Plane at 5000 m altitude, angle of depression to airport is 12°, find horizontal distance"',
              'Identify type: Given scenario, student identifies if elevation or depression'
            ],
            scaffolding: 'Provide diagram initially, progress to student drawing diagram',
            visualSupport: 'Use elevationDepression tool to show correct diagram setup'
          }
        },
        {
          id: 'multi-step-real-world',
          title: 'Complex Real-World Applications',
          difficulty: 'advanced',
          prerequisites: ['angle-of-elevation-depression'],
          masterySignals: 'Student solves multi-step problems requiring ratio choice, equation setup, and contextual interpretation',
          estimatedQuestions: '5-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Solves 3 different types of real-world problems independently',
                'Chooses correct trig ratio in 4/5 varied contexts',
                'All answers include appropriate units and precision'
              ],
              qualitative: [
                'Translates word problem into right triangle setup',
                'Draws clear diagram showing given and unknown information',
                'Identifies which sides and angles are given vs unknown',
                'Chooses appropriate trig ratio (sin, cos, or tan)',
                'Chooses appropriate method (forward trig or inverse trig)',
                'Solves multi-step problems (e.g., find intermediate length first)',
                'Interprets answer in context: "The kite is flying at a height of 68 m"',
                'Verifies answer is reasonable for the real-world scenario'
              ]
            },
            developing: {
              quantitative: [
                'Solves 2 types with hints on problem setup',
                'Needs prompting for ratio choice',
                'Occasionally forgets units or rounds inappropriately'
              ],
              qualitative: [
                'Understands trig concepts but struggles with word problem interpretation',
                'Needs help identifying given vs unknown from text',
                'Can draw diagram with prompting',
                'Chooses correct ratio once triangle is set up',
                'Can solve once approach is clarified',
                'Interprets answer with hints'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot solve word problems independently',
                'Cannot identify which trig ratio to use',
                'Frequent setup and calculation errors'
              ],
              qualitative: [
                'Cannot translate word problem into triangle',
                'Does not recognize trig context in real-world scenarios',
                'Cannot draw appropriate diagram',
                'Confuses which sides/angles are given',
                'Does not know when to use forward vs inverse trig',
                'Cannot verify if answer makes sense for context'
              ]
            }
          },

          learningObjectives: [
            'Solve ladder problems (height reached, distance from wall)',
            'Solve kite/flagpole problems (height, string length, angle)',
            'Solve ramp/slope problems (angle of incline, length)',
            'Solve navigation problems (distance traveled, bearing)',
            'Draw diagrams from word problem descriptions',
            'Choose appropriate trig ratio and method',
            'Solve multi-step problems',
            'Interpret results with correct units and context',
            'Verify answers are reasonable for scenario'
          ],

          relevantFormulas: [
            'sin θ = O/H, cos θ = A/H, tan θ = O/A (applied to context)',
            'θ = sin⁻¹(O/H), θ = cos⁻¹(A/H), θ = tan⁻¹(O/A) (for finding angles)',
            'Context-specific: tan(angle) = height/distance (common for elevation/depression)',
            'May combine with Pythagoras if needed'
          ],

          availableTools: ['rightTriangle', 'elevationDepression'],

          problemDescriptor: {
            description: 'Varied real-world problems requiring diagram interpretation and problem-solving.',
            contexts: [
              'Ladder: "12 m ladder leans against wall at 68° to ground, how high up wall?"',
              'Kite: "Kite string 85 m long, angle of elevation 42°, find kite height"',
              'Ramp: "Ramp rises 2.5 m over horizontal distance 18 m, find angle of incline"',
              'Shadow: "Tree casts 24 m shadow when sun\'s angle of elevation is 58°, find tree height"',
              'Lighthouse: "Observer in 45 m lighthouse sees boat at depression angle 15°, find distance to boat"',
              'Multi-step: "Ladder 10 m long reaches 8 m up wall. Find angle. If moved to 6 m up same wall, find distance from wall."'
            ],
            scaffolding: 'Minimal - students should be able to work independently with occasional verification',
            realismLevel: 'Use realistic measurements and contexts',
            keyEmphasis: [
              'Draw diagram FIRST before attempting calculation',
              'Identify all given information and what needs to be found',
              'Choose simplest ratio/method for given information',
              'Always include units in final answer'
            ]
          }
        }
      ]
    },

    learningObjectives: [
      'Apply trigonometric ratios to real-world scenarios',
      'Understand and use angles of elevation and depression',
      'Solve multi-step practical problems',
      'Interpret results in context'
    ]
  }
};

export default S2_MATH_TRIGONOMETRIC_RATIOS_SUBTOPICS;
