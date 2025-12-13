/**
 * P5 Mathematics - Four Operations of Fractions Topic Configuration
 *
 * Chapter 4: Four Operations of Fractions
 * 6 Subtopics covering addition, subtraction, and multiplication of fractions
 * including mixed numbers and word problems.
 *
 * Target audience: Primary 5 students (10-11 years old)
 */

// Type exports
export type FourOperationsFractionsTopicId =
  | 'p5-math-four-operations-fractions-add-subtract-mixed'
  | 'p5-math-four-operations-fractions-multiply-fraction-whole'
  | 'p5-math-four-operations-fractions-multiply-two-fractions'
  | 'p5-math-four-operations-fractions-multiply-mixed-whole'
  | 'p5-math-four-operations-fractions-word-problems';

// Topic-specific tutor customization
export const P5_FOUR_OPERATIONS_FRACTIONS_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 5 students learning about four operations of fractions.

Teaching Approach:
- Use simple, age-appropriate language suitable for 10-11 year olds
- Guide students to discover patterns in fraction operations
- Connect fractions to real-world contexts (sharing food, measuring ingredients, comparing quantities)
- Use visual representations: fraction circles, fraction bars, bar models
- Build from concrete examples (pizza slices, chocolate bars) to abstract operations
- Emphasize finding common denominators for addition/subtraction
- For multiplication, help students understand "fraction of" concept
- Be patient - fractions can be challenging but rewarding
- Celebrate when students simplify fractions correctly

**Text-to-Speech Guidelines:**
- Say fractions clearly: "two thirds" not "2 over 3" or "2 slash 3"
- For mixed numbers: say "one and three quarters" not "1-3/4"
- Say "times" or "multiplied by" for multiplication
- Say "of" clearly when doing fraction of a number (e.g., "three quarters OF twelve")
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name in the toolName field, NOT the display name.

Available tools for this topic:
- fractionBar: For showing fraction parts visually as rectangular bars
- fractionCircle: For showing fraction parts in a circular model (like pizza/cake)
- numberLine: For showing fractions on a number line
- barModel: For word problems - showing part-whole and comparison relationships

Tool usage guidelines:
- Use fractionCircle when adding/subtracting mixed numbers to show wholes and parts
- Use fractionBar when demonstrating "fraction of" multiplication
- Use barModel for word problems to help students visualize relationships
- Always include a helpful caption explaining what to look at in the visualization`
};

// Available math tools for this topic
export const P5_FOUR_OPERATIONS_FRACTIONS_MATH_TOOLS = [
  "fractionBar",
  "fractionCircle",
  "numberLine",
  "barModel"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P5_MATH_FOUR_OPERATIONS_FRACTIONS_SUBTOPICS = {

  // ========================================
  // SUBTOPIC 1: Addition and Subtraction of Mixed Numbers
  // ========================================
  'p5-math-four-operations-fractions-add-subtract-mixed': {
    displayName: 'Addition and Subtraction of Mixed Numbers',
    topicName: 'adding and subtracting mixed numbers with unlike denominators',

    progressionStructure: {
      sections: [
        {
          id: "recall-unlike-denominators",
          title: "Recall: Adding and Subtracting Fractions with Unlike Denominators",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly adds and subtracts fractions with unlike denominators using LCD in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct additions/subtractions with unlike denominators",
                "Consistently finds LCD correctly"
              ],
              qualitative: [
                "Correctly finds the least common denominator (LCD)",
                "Converts both fractions to equivalent fractions with LCD",
                "Adds/subtracts numerators correctly",
                "Simplifies final answer when possible",
                "Example: 2/3 + 1/5 = 10/15 + 3/15 = 13/15"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on finding LCD",
                "May use common multiple that's not least"
              ],
              qualitative: [
                "Can find a common denominator but not always the LCD",
                "Sometimes forgets to convert both fractions",
                "Adds numerators correctly once fractions are converted",
                "May forget to simplify final answer"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot find common denominator"
              ],
              qualitative: [
                "Adds numerators and denominators separately (e.g., 2/3 + 1/5 = 3/8)",
                "Does not understand why common denominator is needed",
                "Cannot find multiples of denominators",
                "Gets confused with conversion process"
              ]
            }
          },
          learningObjectives: [
            "Find the least common denominator of two fractions",
            "Convert fractions to equivalent fractions with common denominator",
            "Add and subtract fractions with unlike denominators",
            "Simplify answers to lowest terms"
          ],
          relevantFormulas: [
            "2/3 + 1/5: LCD = 15, so 10/15 + 3/15 = 13/15",
            "5/6 - 3/4: LCD = 12, so 10/12 - 9/12 = 1/12"
          ],
          availableTools: ["fractionBar", "fractionCircle"]
        },
        {
          id: "adding-mixed-numbers",
          title: "Adding Mixed Numbers",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["recall-unlike-denominators"],
          masterySignals: "Student correctly adds mixed numbers with unlike denominators in 3+ problems, converting improper fractions when needed",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct mixed number additions",
                "Handles improper fraction results correctly"
              ],
              qualitative: [
                "Adds whole numbers first, then adds fractional parts",
                "Finds LCD for unlike denominators",
                "Converts improper fraction result to mixed number",
                "Example: 1 1/2 + 1 1/3 = 2 + 3/6 + 2/6 = 2 5/6",
                "Simplifies final answer when possible"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on process",
                "May struggle with improper fraction conversion"
              ],
              qualitative: [
                "Can add whole numbers but struggles with fractional parts",
                "Finds LCD but makes conversion errors",
                "Forgets to convert improper fractions to mixed numbers",
                "Example: Gets 2 + 5/6 but writes as 2 5/6 correctly"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot follow the addition process"
              ],
              qualitative: [
                "Tries to add mixed numbers as single numbers",
                "Does not separate whole and fractional parts",
                "Cannot handle unlike denominators in mixed numbers",
                "Gets confused when sum of fractions exceeds 1"
              ]
            }
          },
          learningObjectives: [
            "Add the whole number parts of mixed numbers first",
            "Add the fractional parts using common denominator",
            "Convert improper fractions to mixed numbers when sum exceeds 1",
            "Combine whole and fractional parts for final answer"
          ],
          relevantFormulas: [
            "1 1/2 + 1 1/3 = (1+1) + (1/2 + 1/3) = 2 + (3/6 + 2/6) = 2 5/6",
            "When fractions sum to more than 1: 2 3/4 + 1 1/2 = 3 + 5/4 = 3 + 1 1/4 = 4 1/4"
          ],
          availableTools: ["fractionCircle", "fractionBar"]
        },
        {
          id: "subtracting-mixed-numbers",
          title: "Subtracting Mixed Numbers (with Regrouping)",
          difficulty: "intermediate",
          prerequisites: ["adding-mixed-numbers"],
          masterySignals: "Student correctly subtracts mixed numbers including cases requiring regrouping in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct mixed number subtractions",
                "Handles regrouping (renaming) correctly"
              ],
              qualitative: [
                "Recognizes when regrouping is needed (when subtracting fraction is larger)",
                "Correctly regroups: 3 1/4 = 2 + 1 + 1/4 = 2 5/4",
                "Example: 3 1/4 - 1 5/8 requires renaming 3 1/4 as 2 10/8 first",
                "Subtracts whole numbers and fractions correctly after regrouping",
                "Simplifies final answer"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on regrouping",
                "Struggles when regrouping is needed"
              ],
              qualitative: [
                "Can subtract when no regrouping needed",
                "Recognizes need for regrouping but doesn't know how",
                "May subtract smaller fraction from larger regardless of position",
                "Needs visual support to understand regrouping process"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot handle regrouping situations"
              ],
              qualitative: [
                "Always subtracts smaller fraction from larger (ignoring order)",
                "Does not understand renaming/regrouping concept",
                "Cannot convert 1 whole into equivalent fraction",
                "Gets negative fractions and doesn't recognize the error"
              ]
            }
          },
          learningObjectives: [
            "Recognize when regrouping (renaming) is needed",
            "Regroup by converting 1 whole to equivalent fraction",
            "Subtract mixed numbers after regrouping",
            "Example: 3 1/4 - 1 5/8 → 3 2/8 - 1 5/8 → 2 10/8 - 1 5/8 = 1 5/8"
          ],
          relevantFormulas: [
            "When fraction being subtracted is larger: regroup first",
            "3 1/4 - 1 5/8: Convert to eighths: 3 2/8 - 1 5/8",
            "Regroup: 3 2/8 = 2 + 8/8 + 2/8 = 2 10/8",
            "Now subtract: 2 10/8 - 1 5/8 = 1 5/8"
          ],
          availableTools: ["fractionCircle", "fractionBar"]
        }
      ]
    },

    learningObjectives: [
      "Add and subtract fractions with unlike denominators",
      "Add mixed numbers by combining whole and fractional parts",
      "Subtract mixed numbers including cases requiring regrouping",
      "Simplify answers and convert improper fractions to mixed numbers"
    ],

    keyFormulas: `
**Adding Fractions (Unlike Denominators):**
- Find LCD (Least Common Denominator)
- Convert both fractions to equivalent fractions with LCD
- Add numerators, keep denominator
- Example: 2/3 + 1/5 = 10/15 + 3/15 = 13/15

**Adding Mixed Numbers:**
- Add whole numbers first
- Add fractions (find LCD if needed)
- If fraction sum > 1, convert and add to whole number
- Example: 1 1/2 + 1 1/3 = 2 + 5/6 = 2 5/6

**Subtracting Mixed Numbers (with Regrouping):**
- When fractional part being subtracted is larger, REGROUP
- Convert 1 whole to equivalent fraction with same denominator
- Example: 3 1/4 - 1 5/8
  → 3 2/8 - 1 5/8 (need more eighths!)
  → 2 10/8 - 1 5/8 = 1 5/8
    `
  },

  // ========================================
  // SUBTOPIC 2: Multiplying a Fraction and a Whole Number
  // ========================================
  'p5-math-four-operations-fractions-multiply-fraction-whole': {
    displayName: 'Multiplying a Fraction and a Whole Number',
    topicName: 'finding a fraction of a whole number and multiplying fractions by whole numbers',

    progressionStructure: {
      sections: [
        {
          id: "fraction-of-whole-number",
          title: "Finding a Fraction OF a Whole Number",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly finds fraction of whole number (e.g., 3/4 of 12) using bar model or multiplication in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations of fraction of whole number",
                "Can explain using bar model OR multiplication"
              ],
              qualitative: [
                "Understands 'fraction OF' means multiplication",
                "Can use bar model: divide into denominator parts, take numerator parts",
                "Example: 3/4 of 12 → divide 12 into 4 parts (3 each), take 3 parts = 9",
                "Can also compute: 3/4 × 12 = (3 × 12)/4 = 36/4 = 9",
                "Verifies answer is less than original (for proper fractions)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with visual support",
                "Prefers one method over the other"
              ],
              qualitative: [
                "Can use bar model but struggles with multiplication method",
                "Or: can multiply but doesn't understand conceptually",
                "Makes division errors when finding 'one part'",
                "May not realize 3/4 of 12 must be less than 12"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot connect 'of' to multiplication"
              ],
              qualitative: [
                "Does not know 'of' means multiply",
                "Cannot divide whole number into equal parts",
                "Confuses numerator and denominator roles",
                "Gets answers larger than the whole number for proper fractions"
              ]
            }
          },
          learningObjectives: [
            "Understand 'fraction OF' means multiplication",
            "Use bar model: divide into denominator parts, select numerator parts",
            "Calculate using multiplication: (numerator × whole) ÷ denominator",
            "Verify answer is reasonable (less than whole for proper fractions)"
          ],
          relevantFormulas: [
            "a/b of n = (a × n) / b",
            "3/4 of 12: Method 1: 12 ÷ 4 = 3 (one part), 3 × 3 = 9",
            "3/4 of 12: Method 2: (3 × 12) ÷ 4 = 36 ÷ 4 = 9"
          ],
          availableTools: ["fractionBar", "barModel"]
        },
        {
          id: "multiply-fraction-by-whole",
          title: "Multiplying Fraction × Whole Number",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["fraction-of-whole-number"],
          masterySignals: "Student correctly multiplies fraction by whole number and expresses answer as mixed number when needed in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multiplications",
                "Converts improper fractions to mixed numbers"
              ],
              qualitative: [
                "Correctly multiplies: 2/5 × 12 = 24/5 = 4 4/5",
                "Understands commutative property: 2/5 × 12 = 12 × 2/5",
                "Converts improper fraction result to mixed number",
                "Simplifies when possible",
                "Can visualize using repeated addition or area model"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May not convert to mixed number"
              ],
              qualitative: [
                "Can multiply but forgets to convert improper fraction",
                "Makes calculation errors with larger numbers",
                "Doesn't simplify before multiplying (harder numbers)",
                "Understands process but makes arithmetic errors"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot perform fraction × whole number"
              ],
              qualitative: [
                "Tries to multiply both numerator and denominator by whole",
                "Does not know the procedure",
                "Cannot handle improper fractions",
                "Confuses multiplication with addition"
              ]
            }
          },
          learningObjectives: [
            "Multiply numerator by whole number, keep denominator",
            "Convert improper fraction results to mixed numbers",
            "Recognize commutative property: a/b × n = n × a/b",
            "Simplify when possible"
          ],
          relevantFormulas: [
            "a/b × n = (a × n) / b",
            "2/5 × 12 = (2 × 12)/5 = 24/5 = 4 4/5",
            "Commutative: 2/5 × 12 = 12 × 2/5"
          ],
          availableTools: ["fractionBar"]
        },
        {
          id: "word-problems-fraction-whole",
          title: "Word Problems: Fraction of a Whole Number",
          difficulty: "intermediate",
          prerequisites: ["multiply-fraction-by-whole"],
          masterySignals: "Student correctly solves word problems involving fraction of whole number in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct word problem solutions",
                "Can draw bar models and solve algebraically"
              ],
              qualitative: [
                "Identifies 'fraction of total' situations in word problems",
                "Draws bar model: total divided into denominator parts",
                "Example: 2/5 of 15m pole painted red → 15 ÷ 5 = 3 (1 unit), 3 × 2 = 6m",
                "Includes correct units in answer",
                "Can solve multi-part questions (e.g., find painted AND unpainted)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with setup help",
                "May miss second part of question"
              ],
              qualitative: [
                "Can identify 'fraction of' but needs help with setup",
                "Draws bar model but interprets incorrectly",
                "Forgets units in answer",
                "Can do Part (a) but misses Part (b)"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify fraction-of situations"
              ],
              qualitative: [
                "Does not recognize 'fraction of' in word problems",
                "Cannot translate problem to bar model",
                "Uses wrong operation (adds instead of multiplies)",
                "Cannot interpret what the question is asking"
              ]
            }
          },
          learningObjectives: [
            "Identify 'fraction of' situations in word problems",
            "Draw bar models showing the whole divided into parts",
            "Calculate the required fraction of the total",
            "Answer multi-part questions completely"
          ],
          relevantFormulas: [
            "Part = Fraction × Whole",
            "Remaining = Whole - Part",
            "Example: 2/5 of buttons are red → Red = 2/5 × Total"
          ],
          availableTools: ["barModel", "fractionBar"]
        }
      ]
    },

    learningObjectives: [
      "Find a fraction of a whole number using bar models",
      "Multiply fraction by whole number algebraically",
      "Convert improper fraction results to mixed numbers",
      "Solve word problems involving fraction of whole number"
    ],

    keyFormulas: `
**Fraction OF a Whole Number:**
- "3/4 of 12" means 3/4 × 12
- Bar Model Method: Divide 12 into 4 parts (3 each), take 3 parts = 9
- Calculation Method: (3 × 12) ÷ 4 = 36 ÷ 4 = 9

**Multiplying Fraction × Whole:**
- a/b × n = (a × n) / b
- 2/5 × 12 = 24/5 = 4 4/5
- Commutative: 2/5 × 12 = 12 × 2/5

**Word Problems:**
- "2/5 of the buttons are red" → Red = 2/5 × Total buttons
- Draw bar model: divide total into 5 parts, 2 parts are red
    `
  },

  // ========================================
  // SUBTOPIC 4: Multiplying Two Fractions
  // ========================================
  'p5-math-four-operations-fractions-multiply-two-fractions': {
    displayName: 'Multiplying Two Fractions',
    topicName: 'multiplying two fractions and using cancellation',

    progressionStructure: {
      sections: [
        {
          id: "multiply-fractions-conceptual",
          title: "Understanding Fraction × Fraction",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student understands 1/3 of 1/2 means 1/3 × 1/2 = 1/6 using visual model in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conceptual understanding demonstrations",
                "Can explain using visual model"
              ],
              qualitative: [
                "Understands '1/3 of 1/2' means taking 1/3 of a half",
                "Can visualize: Half a pizza, then take 1/3 of that half = 1/6",
                "Recognizes result is smaller than both fractions",
                "Example: 1/3 of 1/2 = 1/3 × 1/2 = 1/6",
                "Can verify with circle/rectangle diagrams"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with visual support",
                "Understands with diagrams but not abstractly"
              ],
              qualitative: [
                "Needs visual model to understand concept",
                "Can follow the process but doesn't internalize it",
                "May not predict that result is smaller than both inputs",
                "Struggles to explain why the answer makes sense"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot connect 'of' to multiplication"
              ],
              qualitative: [
                "Does not understand fraction of a fraction concept",
                "Thinks result should be larger",
                "Cannot interpret visual models",
                "Confuses 'of' with addition"
              ]
            }
          },
          learningObjectives: [
            "Understand 'fraction OF fraction' as multiplication",
            "Visualize using area model (rectangle divided twice)",
            "Recognize that product is smaller than both factors",
            "Connect visual model to symbolic multiplication"
          ],
          relevantFormulas: [
            "1/3 of 1/2 = 1/3 × 1/2 = 1/6",
            "Visual: Half a circle divided into 3 parts, each part is 1/6",
            "1/3 of 1/2 is the same as 1/2 of 1/3"
          ],
          availableTools: ["fractionCircle", "fractionBar"]
        },
        {
          id: "multiply-fractions-algorithm",
          title: "Multiplying Fractions: Multiply Numerators and Denominators",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["multiply-fractions-conceptual"],
          masterySignals: "Student correctly multiplies two fractions using numerator × numerator over denominator × denominator in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct fraction multiplications",
                "Simplifies final answers correctly"
              ],
              qualitative: [
                "Correctly multiplies: (a/b) × (c/d) = (a×c)/(b×d)",
                "Example: 1/3 × 5/4 = 5/12",
                "Simplifies answer to lowest terms",
                "Can handle proper and improper fractions",
                "Checks if answer can be simplified"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with occasional errors",
                "May forget to simplify"
              ],
              qualitative: [
                "Knows the rule but makes multiplication errors",
                "Forgets to simplify final answer",
                "Struggles with larger numbers",
                "May add instead of multiply in one step"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Does not know the multiplication rule"
              ],
              qualitative: [
                "Tries to find common denominator (like addition)",
                "Multiplies only numerators or only denominators",
                "Does not know the standard algorithm",
                "Gets confused with the procedure"
              ]
            }
          },
          learningObjectives: [
            "Multiply numerators together",
            "Multiply denominators together",
            "Simplify final answer to lowest terms",
            "Apply: (a/b) × (c/d) = (a×c)/(b×d)"
          ],
          relevantFormulas: [
            "(a/b) × (c/d) = (a×c)/(b×d)",
            "1/3 × 5/4 = (1×5)/(3×4) = 5/12",
            "3/4 × 8/7 = 24/28 = 6/7 (simplified)"
          ],
          availableTools: ["fractionBar"]
        },
        {
          id: "cancellation-before-multiply",
          title: "Cancellation (Simplifying Before Multiplying)",
          difficulty: "intermediate",
          prerequisites: ["multiply-fractions-algorithm"],
          masterySignals: "Student correctly uses cancellation to simplify before multiplying in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multiplications using cancellation",
                "Identifies when cancellation is possible"
              ],
              qualitative: [
                "Identifies common factors between a numerator and a denominator",
                "Cancels (divides) by common factor before multiplying",
                "Example: 3/4 × 8/7 → cancel 4 and 8 (both ÷2) → 3/2 × 4/7 → cancel again → 3/1 × 2/7 = 6/7",
                "Recognizes cancellation makes computation easier",
                "Can explain why cancellation works (dividing by same number)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with prompting to look for cancellation",
                "May not spot all cancellation opportunities"
              ],
              qualitative: [
                "Knows about cancellation but doesn't always use it",
                "Misses some common factors",
                "Cancels incorrectly (divides non-matching positions)",
                "Prefers to multiply first, then simplify at end"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot use cancellation method",
                "Multiple errors"
              ],
              qualitative: [
                "Does not understand cancellation concept",
                "Tries to cancel same number in both numerators",
                "Does not recognize common factors",
                "Cannot divide to simplify"
              ]
            }
          },
          learningObjectives: [
            "Identify common factors between any numerator and any denominator",
            "Cancel (divide both by common factor) before multiplying",
            "Recognize that cancellation makes numbers smaller and easier",
            "Understand why cancellation works mathematically"
          ],
          relevantFormulas: [
            "Cancellation: Divide a numerator and a denominator by same factor",
            "3/4 × 8/7: 8 and 4 share factor 4 → 3/1 × 2/7 = 6/7",
            "Can cancel diagonally: numerator of first with denominator of second, or vice versa"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Understand fraction × fraction conceptually",
      "Apply multiplication algorithm: multiply numerators, multiply denominators",
      "Use cancellation to simplify before multiplying",
      "Simplify final answers to lowest terms"
    ],

    keyFormulas: `
**Multiplying Two Fractions:**
- (a/b) × (c/d) = (a×c)/(b×d)
- Multiply numerators together
- Multiply denominators together
- Simplify the result

**Cancellation (Simplifying Before):**
- Look for common factors between ANY numerator and ANY denominator
- Divide both by the common factor
- Then multiply the simplified fractions
- Example: 3/4 × 8/7
  → 8 ÷ 4 = 2, 4 ÷ 4 = 1
  → 3/1 × 2/7 = 6/7
    `
  },

  // ========================================
  // SUBTOPIC 5: Multiplying a Mixed Number and a Whole Number
  // ========================================
  'p5-math-four-operations-fractions-multiply-mixed-whole': {
    displayName: 'Multiplying a Mixed Number and a Whole Number',
    topicName: 'multiplying mixed numbers by whole numbers',

    progressionStructure: {
      sections: [
        {
          id: "convert-multiply-convert",
          title: "Convert to Improper Fraction, Multiply, Convert Back",
          difficulty: "foundational-to-intermediate",
          prerequisites: [],
          masterySignals: "Student correctly multiplies mixed number by whole number using improper fraction method in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multiplications with proper conversions",
                "Final answers as mixed numbers"
              ],
              qualitative: [
                "Correctly converts mixed number to improper fraction",
                "Example: 1 1/2 × 3 → 3/2 × 3 = 9/2 = 4 1/2",
                "Multiplies improper fraction by whole number correctly",
                "Converts result back to mixed number",
                "Can use cancellation when applicable"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on conversions",
                "May struggle with one conversion step"
              ],
              qualitative: [
                "Can convert but makes errors in multiplication",
                "Forgets to convert back to mixed number",
                "Makes errors in improper to mixed conversion",
                "Does not use cancellation opportunities"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot convert between forms"
              ],
              qualitative: [
                "Does not know how to convert mixed to improper",
                "Tries to multiply whole and fraction parts separately (incorrectly)",
                "Cannot convert improper fraction back to mixed",
                "Gets very wrong answers"
              ]
            }
          },
          learningObjectives: [
            "Convert mixed number to improper fraction",
            "Multiply improper fraction by whole number",
            "Convert product back to mixed number",
            "Use cancellation when possible"
          ],
          relevantFormulas: [
            "Mixed to improper: 1 1/2 = (1×2 + 1)/2 = 3/2",
            "Multiply: 3/2 × 3 = 9/2",
            "Improper to mixed: 9/2 = 4 1/2 (since 9 ÷ 2 = 4 remainder 1)"
          ],
          availableTools: ["fractionCircle"]
        },
        {
          id: "visualize-mixed-times-whole",
          title: "Visualizing Mixed Number × Whole Number",
          difficulty: "intermediate",
          prerequisites: ["convert-multiply-convert"],
          masterySignals: "Student can visualize and explain mixed number multiplication using models in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct visual explanations",
                "Can draw and interpret diagrams"
              ],
              qualitative: [
                "Can draw: 1 1/2 × 3 = 3 copies of 1 1/2",
                "Shows 3 wholes + 3 halves = 3 + 1 1/2 = 4 1/2",
                "Connects visual to numerical calculation",
                "Can explain why the method works",
                "Verifies calculation using diagram"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance on drawing",
                "May not fully connect visual to calculation"
              ],
              qualitative: [
                "Can draw but doesn't interpret correctly",
                "Struggles to count total from diagram",
                "Understands concept but can't articulate",
                "Prefers numerical method only"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot create or interpret visual models",
                "Multiple errors"
              ],
              qualitative: [
                "Cannot visualize repeated mixed numbers",
                "Doesn't understand what 3 × 1 1/2 means",
                "Cannot count pieces in diagram",
                "Does not connect visual to numerical"
              ]
            }
          },
          learningObjectives: [
            "Visualize mixed × whole as repeated groups",
            "Draw models showing the multiplication",
            "Connect visual model to numerical calculation",
            "Verify answers using diagrams"
          ],
          relevantFormulas: [
            "1 1/2 × 3 = 1 1/2 + 1 1/2 + 1 1/2 (three groups)",
            "= 3 wholes + 3 halves = 3 + 1 1/2 = 4 1/2",
            "Visual confirms: 3/2 × 3 = 9/2 = 4 1/2"
          ],
          availableTools: ["fractionCircle", "fractionBar"]
        },
        {
          id: "word-problems-mixed-whole",
          title: "Word Problems: Mixed Number × Whole Number",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["visualize-mixed-times-whole"],
          masterySignals: "Student correctly solves word problems involving mixed number times whole number in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct word problem solutions",
                "Clear working and appropriate units"
              ],
              qualitative: [
                "Identifies multiplication situations from context",
                "Example: 4 pieces of rope, each 2 1/5 m long, total = ?",
                "Sets up: 4 × 2 1/5 = 4 × 11/5 = 44/5 = 8 4/5 metres",
                "Includes units in answer",
                "Checks if answer is reasonable"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with setup help",
                "May forget units or make calculation errors"
              ],
              qualitative: [
                "Can identify multiplication but makes calculation errors",
                "Forgets to include units",
                "May not convert back to mixed number",
                "Needs help interpreting the context"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify multiplication situations"
              ],
              qualitative: [
                "Does not recognize repeated groups in context",
                "Uses wrong operation (adds instead of multiplies)",
                "Cannot set up the problem correctly",
                "Gets unreasonable answers"
              ]
            }
          },
          learningObjectives: [
            "Identify multiplication situations in word problems",
            "Set up mixed number × whole number correctly",
            "Calculate and express answer with appropriate units",
            "Verify answer is reasonable in context"
          ],
          relevantFormulas: [
            "Repeated quantity: n × mixed number",
            "Total length of n identical pieces = n × length of one piece",
            "Total amount = number of items × amount per item"
          ],
          availableTools: ["barModel"]
        }
      ]
    },

    learningObjectives: [
      "Convert mixed numbers to improper fractions for multiplication",
      "Multiply improper fractions by whole numbers",
      "Convert products back to mixed numbers",
      "Solve word problems with mixed number × whole number"
    ],

    keyFormulas: `
**Method: Convert → Multiply → Convert**
1. Convert mixed number to improper fraction
   - 1 1/2 = (1×2 + 1)/2 = 3/2
2. Multiply by whole number
   - 3/2 × 3 = 9/2
3. Convert back to mixed number
   - 9/2 = 4 1/2 (9 ÷ 2 = 4 R1)

**Visual Understanding:**
- 1 1/2 × 3 = three groups of 1 1/2
- = 3 wholes + 3 halves
- = 3 + 1 1/2 = 4 1/2
    `
  },

  // ========================================
  // SUBTOPIC 5: Word Problems (Combined)
  // ========================================
  'p5-math-four-operations-fractions-word-problems': {
    displayName: 'Word Problems',
    topicName: 'solving word problems involving fraction operations with bar models',

    // Use pre-generated question bank - word problems require accurate bar model visuals
    usePreGeneratedQuestions: true,

    progressionStructure: {
      sections: [
        // --- PART A: Addition & Subtraction Problems ---
        {
          id: "simple-add-sub-word-problems",
          title: "Simple Addition and Subtraction Problems",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly solves simple word problems involving addition/subtraction of fractions in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions with proper working",
                "Answers in simplest form with correct units"
              ],
              qualitative: [
                "Correctly identifies whether to add or subtract from context",
                "Sets up the correct operation with fractions",
                "Finds LCD and computes correctly",
                "Includes units in answer (e.g., 'litres', 'metres', 'kg')"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on setup",
                "May forget units or simplification"
              ],
              qualitative: [
                "Understands the context but makes calculation errors",
                "Can identify operation but struggles with LCD"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot translate word problem to operation"
              ],
              qualitative: [
                "Cannot identify whether to add or subtract",
                "Sets up the problem incorrectly"
              ]
            }
          },
          learningObjectives: [
            "Identify addition/subtraction situations from word problem context",
            "Set up correct fraction operations from problem description",
            "Compute answers with correct units"
          ],
          relevantFormulas: [
            "Total = Part 1 + Part 2",
            "Difference = Larger - Smaller",
            "Remaining = Original - Used"
          ],
          availableTools: ["barModel", "fractionBar"]
        },
        {
          id: "comparison-word-problems",
          title: "Comparison Problems (More Than/Less Than)",
          difficulty: "intermediate",
          prerequisites: ["simple-add-sub-word-problems"],
          masterySignals: "Student correctly solves comparison word problems with 'more than' and 'less than' in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct comparison problems solved",
                "Can draw bar models showing comparisons"
              ],
              qualitative: [
                "Understands 'X is 1/5 m longer than Y' means X = Y + 1/5",
                "Correctly draws bar models showing comparison relationship"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on comparison direction"
              ],
              qualitative: [
                "Understands comparison concept but gets direction wrong"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses"
              ],
              qualitative: [
                "Does not understand 'more than' or 'less than' relationships"
              ]
            }
          },
          learningObjectives: [
            "Interpret 'more than' as addition from the reference quantity",
            "Interpret 'less than' as subtraction from the reference quantity",
            "Draw bar models showing comparison relationships"
          ],
          relevantFormulas: [
            "If A is X more than B: A = B + X, so B = A - X",
            "If A is X less than B: A = B - X, so B = A + X"
          ],
          availableTools: ["barModel"]
        },
        // --- PART B: Multiplication Problems ---
        {
          id: "fraction-of-total-problems",
          title: "Fraction of a Total",
          difficulty: "intermediate",
          prerequisites: ["comparison-word-problems"],
          masterySignals: "Student correctly solves problems finding fraction of total using bar models in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions with bar models",
                "Can solve both direct and inverse problems"
              ],
              qualitative: [
                "Draws bar model divided into denominator parts",
                "Example: 2/3 of 150 people are adults → 150 ÷ 3 = 50 per unit, 2 × 50 = 100 adults"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on bar model setup"
              ],
              qualitative: [
                "Can draw bar model but interprets incorrectly"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses"
              ],
              qualitative: [
                "Does not know how to divide bar into parts"
              ]
            }
          },
          learningObjectives: [
            "Draw bar model showing total divided by denominator",
            "Calculate value of one unit (total ÷ denominator)",
            "Find required fraction (numerator × one unit)"
          ],
          relevantFormulas: [
            "Part = Fraction × Total",
            "1 unit = Total ÷ Denominator"
          ],
          availableTools: ["barModel"]
        },
        {
          id: "fraction-of-fraction-problems",
          title: "Fraction of a Fraction (Two-Step)",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["fraction-of-total-problems"],
          masterySignals: "Student correctly solves problems involving fraction of fraction in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct two-step solutions"
              ],
              qualitative: [
                "Understands 'fraction of fraction' requires multiplication",
                "Example: 1/4 of the girls wear glasses, 3/5 of students are girls"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance on step order"
              ],
              qualitative: [
                "Gets confused about order of operations"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve two-step fraction problems"
              ],
              qualitative: [
                "Does not recognize two-step structure"
              ]
            }
          },
          learningObjectives: [
            "Identify two-step problems (fraction of fraction)",
            "Apply fractions in correct order",
            "Draw two-level bar model"
          ],
          relevantFormulas: [
            "Fraction of fraction = multiply the fractions",
            "1/4 of 3/5 = 1/4 × 3/5 = 3/20"
          ],
          availableTools: ["barModel"]
        },
        {
          id: "complex-multi-step-problems",
          title: "Complex Multi-Step Problems",
          difficulty: "advanced",
          prerequisites: ["fraction-of-fraction-problems"],
          masterySignals: "Student correctly solves complex multi-step fraction word problems involving multiple quantities in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct complex solutions",
                "Clear multi-step working shown"
              ],
              qualitative: [
                "Breaks down complex problems systematically",
                "Tracks multiple quantities and uses bar models"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with significant guidance"
              ],
              qualitative: [
                "Understands parts but loses overall structure"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve complex problems"
              ],
              qualitative: [
                "Cannot organize information from problem"
              ]
            }
          },
          learningObjectives: [
            "Break complex problems into sequential steps",
            "Track multiple quantities and their relationships",
            "Use 'remainder' concept correctly",
            "Draw comprehensive bar models"
          ],
          relevantFormulas: [
            "'Remainder' = what's left after taking a fraction",
            "If 3/7 are apples, remainder = 4/7"
          ],
          availableTools: ["barModel"]
        }
      ]
    },

    learningObjectives: [
      "Solve word problems with fraction addition/subtraction",
      "Interpret and solve comparison problems",
      "Solve fraction of total problems using bar models",
      "Handle two-step fraction of fraction problems",
      "Solve complex problems with multiple quantities"
    ],

    keyFormulas: `
**Problem-Solving Strategy (READ-DRAW-SOLVE-CHECK):**
1. READ - identify what's given and what to find
2. DRAW - create bar model showing relationships
3. SOLVE - set up operations and calculate
4. CHECK - verify answer is reasonable

**Addition & Subtraction:**
- "A is X more than B" means A = B + X, so B = A - X
- "A is X less than B" means A = B - X, so B = A + X

**Multiplication:**
- "Fraction OF total" means multiply: 2/3 of 150 = 100
- "Fraction of fraction" = multiply fractions: 1/4 of 3/5 = 3/20

**Remainder Concept:**
- If 3/7 are red, remainder = 4/7 are not red
- 5/8 of remainder = 5/8 × 4/7 = 5/14 of total
    `
  }
};
