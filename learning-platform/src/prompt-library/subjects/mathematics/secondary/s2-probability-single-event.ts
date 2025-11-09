/**
 * S2 Mathematics - Probability of Single Events Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 */

// ===========================
// TYPE EXPORTS
// ===========================

export type ProbabilitySingleEventTopicId =
  | 's2-math-probability-experiments-sample-space'
  | 's2-math-probability-basic-calculation'
  | 's2-math-probability-experimental'
  | 's2-math-probability-advanced-single-event';

// ===========================
// TUTOR CUSTOMIZATION
// ===========================

export const S2_PROBABILITY_SINGLE_EVENT_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for Secondary 2 students learning Probability of Single Events.

Teaching Approach:
- Guide students to discover probability concepts through questioning, not direct instruction
- Help students visualize sample spaces before calculating probabilities
- Emphasize understanding "why" formulas work, not just memorizing them
- Celebrate insights when students connect experimental to theoretical probability
- Use real-world contexts (games, spinners, cards, sports) to make probability relatable
- Encourage students to verify probabilities sum to 1 (completeness check)
- Adapt difficulty based on student mastery of counting and fractions

Key Teaching Points:
- Sample space must list ALL possible outcomes (completeness is critical)
- Probability formula only works for equally likely outcomes
- Experimental probability approaches theoretical as trials increase
- Always check: 0 ≤ P(E) ≤ 1
- For playing cards, emphasize deck structure (52 cards, 4 suits, 13 ranks)
- Distinguish favorable outcomes vs total possible outcomes

**Text-to-Speech Guidelines:**
- Say "probability" clearly, not "prob" or "P of E"
- Spell out fractions: "one-half" or "1 over 2", not "½"
- Say "sample space" not "S"
- Say "favorable outcomes" not "n of E"
- Avoid mathematical notation in speech.text - spell everything out
- For die/dice: say "a die is rolled" (singular), "the plural form is dice"
- Say "equals" not "="
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name (e.g., "fractionBar") in the toolName field, NOT the display name.

Available tools for this topic:
- fractionBar: Show probability as visual fraction (e.g., 3/4 filled bar)
- numberLine: Place probability on 0 to 1 scale
- setVisualizer: Display sample space in list/box/circle notation

Use tools when:
- Student struggles to visualize fraction as probability
- Comparing experimental vs theoretical probabilities
- Showing sample space for complex scenarios
- Explaining probability scale (0 = impossible, 1 = certain)

DON'T use tools for:
- Every single question (only when beneficial)
- Simple counting problems student handles easily
- When student explicitly requests no visual aids`
};

// ===========================
// AVAILABLE MATH TOOLS
// ===========================

export const S2_PROBABILITY_SINGLE_EVENT_MATH_TOOLS = [
  "fractionBar",
  "numberLine",
  "setVisualizer"
];

// ===========================
// SUBTOPICS CONFIGURATION
// ===========================

export const S2_PROBABILITY_SINGLE_EVENT_SUBTOPICS = {

  // ========================================
  // SUBTOPIC 1: PROBABILITY EXPERIMENTS AND SAMPLE SPACE
  // ========================================

  's2-math-probability-experiments-sample-space': {
    displayName: 'Probability Experiments and Sample Space',
    topicName: 'probability experiments, sample space, and possible outcomes',

    progressionStructure: {
      sections: [
        // Section 1.1: Understanding Probability Experiments
        {
          id: "probability-experiments-concept",
          title: "Understanding Probability Experiments",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies probability experiments in 3+ scenarios",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications without hints",
                "Consistent recognition across different contexts (coins, cards, dice, weather, games)"
              ],
              qualitative: [
                "Understands key characteristic: outcome depends on chance and cannot be predicted with certainty",
                "Can explain WHY something is/isn't a probability experiment",
                "Distinguishes predictable outcomes (5+7=12) from chance-based outcomes (coin flip)",
                "Recognizes uncertainty as the defining feature of probability experiments",
                "Identifies real-world examples: tossing coins, rolling dice, drawing cards, spinning spinners, weather outcomes"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about chance vs. certainty",
                "Needs prompting for borderline or unfamiliar cases"
              ],
              qualitative: [
                "Understands concept but uncertain with unfamiliar examples",
                "Can identify obvious cases (dice, coins) but struggles with context-based examples (weather, sports)",
                "Needs guidance to distinguish chance from skill or calculation",
                "Recognizes experiments after explanation but cannot identify independently"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect identifications",
                "Cannot distinguish chance-based from deterministic processes"
              ],
              qualitative: [
                "Confuses probability experiments with their outcomes",
                "Does not understand the role of chance/unpredictability",
                "Thinks all real-world events are probability experiments",
                "Cannot explain reasoning for identification",
                "Believes calculations like 5+7 are probability experiments because 'you don't know the answer until you calculate it'"
              ]
            }
          },

          learningObjectives: [
            "Define a probability experiment as a process or operation whose outcome cannot be predicted with certainty",
            "Identify real-world probability experiments (tossing coins, rolling dice, drawing cards, spinning spinners)",
            "Distinguish experiments that depend on chance from deterministic processes",
            "Recognize that outcomes of probability experiments are uncertain until the experiment is performed",
            "Understand that probability allows us to measure or quantify the likelihood of uncertain events"
          ],

          relevantFormulas: [
            "Probability experiment: A process whose outcome depends on chance and cannot be predicted with certainty",
            "Examples of probability experiments: tossing a coin, rolling a die, drawing a card from a deck, spinning a spinner, drawing a ball from a bag",
            "NOT probability experiments: calculations (5+7), measuring fixed quantities, deterministic processes"
          ],

          sampleProblems: [
            "Which of the following are probability experiments? (a) Tossing a coin to decide who goes first (b) Calculating 12 × 8 (c) Drawing a card from a shuffled deck (d) Measuring your height",
            "Explain why rolling a die is a probability experiment",
            "Give three examples of probability experiments you encounter in daily life"
          ],

          availableTools: []
        },

        // Section 1.2: Listing Simple Sample Spaces
        {
          id: "sample-space-simple",
          title: "Listing Simple Sample Spaces",
          difficulty: "foundational",
          prerequisites: ["probability-experiments-concept"],
          masterySignals: "Student correctly lists complete sample spaces and states n(S) in 3+ simple scenarios",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ complete sample spaces listed correctly",
                "Accurate counting of n(S) in all cases",
                "Correct set notation with braces consistently"
              ],
              qualitative: [
                "Lists ALL possible outcomes (complete sample space, nothing missing)",
                "Uses correct set notation with braces { }",
                "States n(S) = total number of possible outcomes accurately",
                "No missing or duplicate outcomes in sample space",
                "Understands sample space must be exhaustive (includes every possible outcome)",
                "Can list sample spaces for: coin toss, die roll, spinner, simple card draws"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on missing outcomes",
                "Occasional errors in notation or counting"
              ],
              qualitative: [
                "Understands concept but misses occasional outcomes",
                "Forgets braces or n(S) statement",
                "Can complete sample space with prompting about 'did you list everything?'",
                "Counts correctly after listing is verified complete",
                "Needs reminder about set notation format"
              ]
            },
            struggling: {
              quantitative: [
                "Incomplete sample spaces (missing outcomes)",
                "Incorrect counting of n(S)",
                "Multiple attempts needed to list all outcomes"
              ],
              qualitative: [
                "Lists only some outcomes (e.g., S = {H} for coin toss, missing T)",
                "Confuses sample space with a single outcome",
                "Does not understand what 'all possible outcomes' means",
                "Includes duplicate outcomes (e.g., {H, H, T} for coin toss)",
                "Includes impossible outcomes",
                "Cannot use set notation correctly (missing braces, incorrect format)"
              ]
            }
          },

          learningObjectives: [
            "Define sample space as the collection of all possible outcomes of a probability experiment",
            "List sample spaces for simple experiments: coin toss, die roll, spinner",
            "Use correct set notation with braces { } to represent sample space",
            "Count and state the total number of possible outcomes: n(S)",
            "Understand that sample space must be complete (all outcomes listed)",
            "Recognize that n(S) represents the total number of elements in the sample space"
          ],

          relevantFormulas: [
            "Sample space notation: S = {outcome₁, outcome₂, ..., outcomeₙ}",
            "n(S) = total number of possible outcomes",
            "Coin toss: S = {Head, Tail} or {H, T}, n(S) = 2",
            "Die roll: S = {1, 2, 3, 4, 5, 6}, n(S) = 6",
            "Spinner with 5 equal sectors (Red, Orange, Blue, Green, Purple): S = {Red, Orange, Blue, Green, Purple}, n(S) = 5",
            "Note: Use braces { } to enclose the sample space"
          ],

          sampleProblems: [
            "A die is rolled. Write down the sample space and state the total number of possible outcomes.",
            "A spinner is divided into five equal sectors of different colours: red, orange, blue, green, purple. Write down the sample space and state the total number of possible outcomes.",
            "What is the sample space when a coin is tossed? How many possible outcomes are there?"
          ],

          availableTools: ["setVisualizer"]
        },

        // Section 1.3: Listing Complex Sample Spaces
        {
          id: "sample-space-complex",
          title: "Listing Complex Sample Spaces",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["sample-space-simple"],
          masterySignals: "Student correctly lists complex sample spaces using subscripts/notation and calculates n(S) arithmetically in 3+ problems",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ complex sample spaces listed correctly",
                "Accurate n(S) calculation using arithmetic (e.g., 99 - 9 = 90)",
                "Correct use of subscripts and ellipsis notation"
              ],
              qualitative: [
                "Correctly differentiates identical-looking objects using subscripts (B₁, B₂, W₁, W₂, W₃)",
                "Uses ellipsis (...) appropriately for long lists without listing all elements",
                "Calculates n(S) arithmetically without listing all outcomes (for large sets)",
                "Understands when objects are distinct vs when they appear identical",
                "Handles edge cases: consecutive integers, letters in words, numbered cards",
                "Recognizes that distinct objects need distinct labels even if they look the same"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on notation or counting method",
                "Can count but struggles with compact listing notation"
              ],
              qualitative: [
                "Understands need for subscripts but sometimes forgets them",
                "Lists some elements but unsure about when/how to use ellipsis",
                "Calculates n(S) by counting/listing (less efficient) rather than arithmetic",
                "Needs guidance on arithmetic shortcuts (99 - 9 vs listing all 90 numbers)",
                "Can apply correct method once reminded"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot handle complex scenarios with distinct objects",
                "Incorrect n(S) for large sets",
                "Confuses distinct vs identical items"
              ],
              qualitative: [
                "Does not use subscripts (writes S = {B, B, W, W, W} instead of {B₁, B₂, W₁, W₂, W₃})",
                "Cannot use ellipsis correctly or doesn't understand its purpose",
                "Tries to list all 90 two-digit numbers individually",
                "Confuses when 'N' appears twice in NATIONAL (doesn't distinguish positions)",
                "Makes off-by-one errors (thinks 10 to 99 is 89 numbers instead of 90)",
                "Does not understand that identical-looking objects can be distinct"
              ]
            }
          },

          learningObjectives: [
            "List sample spaces with multiple distinct objects using subscripts (B₁, B₂, W₁, W₂, W₃)",
            "Handle large sample spaces using pattern notation and ellipsis (e.g., {10, 11, 12, ..., 99})",
            "Calculate n(S) using counting principles and arithmetic without listing all outcomes",
            "Use ellipsis (...) correctly for lengthy lists",
            "Distinguish outcomes when order or position matters",
            "Understand that visually identical objects may be distinct (need labels)"
          ],

          relevantFormulas: [
            "For distinct objects (even if they look identical): Use subscripts B₁, B₂ for black balls; W₁, W₂, W₃ for white balls",
            "Drawing from bag with 2 black and 3 white balls: S = {B₁, B₂, W₁, W₂, W₃}, n(S) = 5",
            "Two-digit numbers: S = {10, 11, 12, ..., 99}, n(S) = 99 - 9 = 90 (or 99 - 10 + 1 = 90)",
            "Consecutive integers from a to b: n(S) = b - a + 1",
            "Letters in word NATIONAL (8 letters, positions 1-8): S has 8 distinct positions even though N appears twice",
            "Using ellipsis: Write first few outcomes, ..., then last outcome to show pattern"
          ],

          sampleProblems: [
            "A bag contains two identical black balls and three identical white balls. One ball is drawn at random. Write down the sample space and state the total number of possible outcomes.",
            "A two-digit number is chosen at random. Write down the sample space and state the total number of possible outcomes.",
            "Ten identical cards numbered 11, 12, 13, ..., 20 are placed in a box. One card is drawn at random. Write down the sample space and state the total number of possible outcomes.",
            "A bag contains marbles numbered from 10 to 24. One marble is drawn. How many possible outcomes are there?"
          ],

          availableTools: ["setVisualizer"]
        }
      ]
    },

    learningObjectives: [
      "Define and identify probability experiments",
      "List complete sample spaces for simple and complex experiments",
      "Use correct set notation and subscripts",
      "Calculate n(S) for various scenarios"
    ],

    keyFormulas: `
**Probability Experiment:**
- A process or operation whose outcome cannot be predicted with certainty
- Outcome depends on chance

**Sample Space (S):**
- Collection of ALL possible outcomes of a probability experiment
- Notation: S = {outcome₁, outcome₂, ..., outcomeₙ}
- n(S) = total number of possible outcomes

**Examples:**
- Coin: S = {H, T}, n(S) = 2
- Die: S = {1, 2, 3, 4, 5, 6}, n(S) = 6
- Two-digit numbers: S = {10, 11, ..., 99}, n(S) = 90
- Drawing from bag (2 black, 3 white): S = {B₁, B₂, W₁, W₂, W₃}, n(S) = 5
    `
  },

  // ========================================
  // SUBTOPIC 2: BASIC PROBABILITY CALCULATION
  // ========================================

  's2-math-probability-basic-calculation': {
    displayName: 'Basic Probability Calculation',
    topicName: 'calculating probability, equally likely outcomes, and probability formula',

    progressionStructure: {
      sections: [
        // Section 2.1: Equally Likely Outcomes and Fair/Unbiased
        {
          id: "equally-likely-outcomes",
          title: "Equally Likely Outcomes and Fair Experiments",
          difficulty: "foundational",
          prerequisites: ["sample-space-simple"],
          masterySignals: "Student correctly identifies equally likely scenarios and understands probability scale in 3+ problems",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of equally likely vs not equally likely",
                "Accurate recognition of fair/unbiased experiments"
              ],
              qualitative: [
                "Understands 'equally likely outcomes' means each outcome has the same chance of occurring",
                "Correctly identifies fair/unbiased experiments (fair coin, fair die, well-shuffled deck)",
                "Recognizes when theoretical probability formula P(E) = n(E)/n(S) applies (equally likely outcomes only)",
                "Understands probability scale: 0 ≤ P(E) ≤ 1",
                "Knows P(E) = 0 means impossible, P(E) = 1 means certain",
                "Can explain why fair coin has P(Head) = P(Tail) = 1/2"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about equal chance",
                "Needs prompting to verify equal likelihood"
              ],
              qualitative: [
                "Understands concept but uncertain in new contexts",
                "Can determine equal likelihood with guidance",
                "Knows probability range but needs reminder",
                "Understands fair experiments after explanation"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot identify equally likely scenarios",
                "Confuses probability values outside 0-1 range"
              ],
              qualitative: [
                "Does not understand what 'equally likely' means",
                "Thinks all outcomes are always equally likely",
                "Cannot distinguish fair from biased experiments",
                "Believes probability can be negative or greater than 1",
                "Confuses probability with frequency or number of outcomes"
              ]
            }
          },

          learningObjectives: [
            "Understand that 'equally likely outcomes' means each outcome has the same chance of occurring",
            "Define fair or unbiased experiments (fair coin, fair die, well-shuffled deck)",
            "Identify when the theoretical probability formula applies (equally likely outcomes required)",
            "Recognize the probability scale: 0 ≤ P(E) ≤ 1",
            "Understand P(E) = 0 represents an impossible event",
            "Understand P(E) = 1 represents a certain event",
            "Know that probability is a measure of chance that takes values between 0 and 1 inclusive"
          ],

          relevantFormulas: [
            "For equally likely outcomes: P(E) = n(E) / n(S)",
            "Where: n(E) = number of favorable outcomes for event E, n(S) = total number of possible outcomes",
            "Probability range: 0 ≤ P(E) ≤ 1",
            "Impossible event: P(E) = 0",
            "Certain event: P(E) = 1",
            "Fair coin: P(Head) = P(Tail) = 1/2 = 0.5",
            "Fair die: P(1) = P(2) = P(3) = P(4) = P(5) = P(6) = 1/6"
          ],

          sampleProblems: [
            "Are the outcomes equally likely when you toss a fair coin?",
            "A spinner has 5 equal sectors. Are the outcomes equally likely?",
            "Can a probability be 1.5? Why or why not?",
            "What does it mean if P(Event) = 0?"
          ],

          availableTools: ["numberLine", "fractionBar"]
        },

        // Section 2.2: Calculating Probability with Counting
        {
          id: "probability-calculation-counting",
          title: "Calculating Probability Using the Formula",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["equally-likely-outcomes", "sample-space-simple"],
          masterySignals: "Student correctly applies P(E) = n(E)/n(S) and counts favorable outcomes in 3+ problems with minimal hints",
          estimatedQuestions: "5-6 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct probability calculations without hints",
                "Accurate counting of both favorable and total outcomes",
                "Correct simplification of fractions"
              ],
              qualitative: [
                "Correctly applies P(E) = n(E)/n(S) formula",
                "Accurately counts favorable outcomes for the specific event",
                "Accurately counts total possible outcomes (sample space size)",
                "Simplifies probability fractions to lowest terms",
                "Can express probability as fraction, decimal, or percentage",
                "Verifies answer is between 0 and 1",
                "Understands numerator = favorable, denominator = total possible"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on counting favorable outcomes",
                "Occasional errors in simplification or counting"
              ],
              qualitative: [
                "Understands formula but sometimes miscounts favorable outcomes",
                "Knows n(S) but uncertain about n(E) for specific events",
                "Can calculate once outcomes are counted correctly",
                "Needs prompting for simplification",
                "Forgets to verify 0 ≤ P(E) ≤ 1"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect calculations",
                "Cannot distinguish favorable from total outcomes",
                "Inverts fraction (n(S)/n(E) instead of n(E)/n(S))"
              ],
              qualitative: [
                "Confuses favorable outcomes with total outcomes",
                "Uses wrong formula or inverts the fraction",
                "Cannot identify which outcomes are 'favorable' for the event",
                "Counts outcomes incorrectly (misses some, counts duplicates)",
                "Does not simplify fractions",
                "Gets probabilities outside 0-1 range and doesn't notice error"
              ]
            }
          },

          learningObjectives: [
            "Apply the probability formula: P(E) = n(E) / n(S) for equally likely outcomes",
            "Count favorable outcomes n(E) correctly for a given event",
            "Count total possible outcomes n(S) from the sample space",
            "Express probability as a simplified fraction",
            "Convert probability between fraction, decimal, and percentage forms",
            "Verify calculated probability is in the valid range [0, 1]"
          ],

          relevantFormulas: [
            "P(E) = n(E) / n(S)",
            "n(E) = number of favorable outcomes for event E",
            "n(S) = total number of possible outcomes in sample space",
            "Example: Drawing from 12 cards numbered 1-12",
            "  P(drawing '7') = 1/12 (only one card shows 7)",
            "  P(perfect square) = 3/12 = 1/4 (cards 1, 4, 9 are perfect squares)",
            "  P(negative number) = 0/12 = 0 (no negative numbers in 1-12)",
            "  P(number less than 13) = 12/12 = 1 (all cards satisfy this)"
          ],

          sampleProblems: [
            "A card is drawn at random from a box containing 12 cards numbered 1, 2, 3, ..., 12. Find the probability of drawing: (i) a '7', (ii) a perfect square, (iii) a negative number, (iv) a number less than 13",
            "A die is rolled. Find the probability of getting: (i) a 5, (ii) an even number, (iii) a number greater than 4",
            "A bag contains balls numbered 10, 11, 12, ..., 24. Find the probability of drawing: (i) a '21', (ii) an odd number, (iii) a prime number"
          ],

          availableTools: ["fractionBar", "numberLine"]
        },

        // Section 2.3: Playing Cards Probability
        {
          id: "probability-playing-cards",
          title: "Probability with Playing Cards",
          difficulty: "intermediate",
          prerequisites: ["probability-calculation-counting"],
          masterySignals: "Student correctly calculates probabilities for card events using deck structure knowledge in 3+ problems",
          estimatedQuestions: "5-6 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct playing card probabilities without hints",
                "Accurate counting using deck structure (52 total, 4 suits, 13 ranks)"
              ],
              qualitative: [
                "Knows standard deck structure: 52 cards total",
                "Knows 4 suits: ♣ clubs, ♦ diamonds, ♥ hearts, ♠ spades (13 cards each)",
                "Knows 13 ranks per suit: A, 2, 3, ..., 10, J, Q, K",
                "Knows 26 black cards (clubs + spades), 26 red cards (diamonds + hearts)",
                "Correctly counts for composite events (e.g., red Ace, picture card, not a diamond)",
                "Can use complementary counting: P(not diamond) = 1 - P(diamond) OR count directly (39/52)",
                "Simplifies card probabilities correctly (e.g., 13/52 = 1/4)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on deck structure",
                "Needs reminder about suits, ranks, or colors"
              ],
              qualitative: [
                "Understands deck has 52 cards but uncertain about details",
                "Knows suits exist but doesn't remember all 4",
                "Can count favorable outcomes with prompting about structure",
                "Forgets picture cards are J, Q, K only (not A)",
                "Needs guidance on complementary counting approach"
              ]
            },
            struggling: {
              quantitative: [
                "Incorrect deck structure (thinks 48 or 54 cards)",
                "Cannot count favorable outcomes for card events"
              ],
              qualitative: [
                "Does not know standard deck has 52 cards",
                "Confuses number of suits (thinks 2 or 3 suits)",
                "Does not understand suit structure (13 cards per suit)",
                "Confuses colors (thinks diamonds are black, or all suits have different colors)",
                "Counts Aces as picture cards or excludes them incorrectly",
                "Cannot identify which cards satisfy composite conditions"
              ]
            }
          },

          learningObjectives: [
            "Understand standard deck structure: 52 cards total",
            "Know the 4 suits: ♣ clubs (black), ♦ diamonds (red), ♥ hearts (red), ♠ spades (black)",
            "Know the 13 ranks: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J (Jack), Q (Queen), K (King)",
            "Calculate probabilities for suits, ranks, and colors",
            "Handle composite events (e.g., red Ace, picture card, card which is not a diamond)",
            "Use complementary counting when appropriate: P(not E) = 1 - P(E)"
          ],

          relevantFormulas: [
            "Standard deck: 52 cards total",
            "4 suits × 13 ranks = 52 cards",
            "Suits: ♣ clubs (black), ♦ diamonds (red), ♥ hearts (red), ♠ spades (black)",
            "Each suit has 13 cards: A, 2, 3, ..., 10, J, Q, K",
            "26 black cards (clubs + spades), 26 red cards (diamonds + hearts)",
            "Picture cards: J, Q, K in each suit = 12 total (3 per suit × 4 suits)",
            "Number of red Aces: 2 (A♦, A♥)",
            "Example calculations:",
            "  P(black card) = 26/52 = 1/2",
            "  P(red Ace) = 2/52 = 1/26",
            "  P(diamond) = 13/52 = 1/4",
            "  P(not diamond) = 39/52 = 3/4  OR  1 - 1/4 = 3/4",
            "  P(picture card) = 12/52 = 3/13"
          ],

          sampleProblems: [
            "A card is drawn at random from a standard pack of 52 playing cards. Find the probability of drawing: (i) a black card, (ii) a red Ace, (iii) a diamond, (iv) a card which is not a diamond",
            "All the 26 red cards from a standard pack are mixed thoroughly. A card is then drawn at random. Find the probability of drawing: (i) the Queen of hearts, (ii) the Jack of clubs, (iii) either the six of hearts or the seven of diamonds, (iv) a card which is not a nine",
            "Find the probability of drawing a picture card from a standard deck",
            "What is the probability of drawing a heart or a spade?"
          ],

          availableTools: []
        },

        // Section 2.4: Impossible and Certain Events
        {
          id: "impossible-certain-events",
          title: "Impossible and Certain Events",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["probability-calculation-counting"],
          masterySignals: "Student correctly identifies impossible (P=0) and certain (P=1) events and verifies probability bounds in 3+ problems",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of impossible and certain events",
                "Accurate calculation showing P(E) = 0 or P(E) = 1"
              ],
              qualitative: [
                "Identifies impossible events: P(E) = 0 (no favorable outcomes, n(E) = 0)",
                "Identifies certain events: P(E) = 1 (all outcomes favorable, n(E) = n(S))",
                "Understands probability bounds: For any event E, 0 ≤ P(E) ≤ 1",
                "Can explain why impossible events have probability 0",
                "Can explain why certain events have probability 1",
                "Uses probability bounds to verify calculated answers",
                "Recognizes that if P(E) < 0 or P(E) > 1, there's an error in calculation"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about favorable outcomes",
                "Needs prompting to check probability bounds"
              ],
              qualitative: [
                "Understands P(E) = 0 means impossible but needs examples",
                "Understands P(E) = 1 means certain but needs confirmation",
                "Knows bounds exist but forgets to check answers",
                "Can identify obvious impossible/certain events but struggles with subtle ones"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot identify impossible or certain events",
                "Calculates probabilities outside [0, 1] and doesn't notice"
              ],
              qualitative: [
                "Thinks impossible events can have P(E) > 0",
                "Thinks certain events can have P(E) < 1",
                "Does not understand what 'impossible' means in probability context",
                "Confuses 'impossible' with 'unlikely'",
                "Does not check if calculated probability is valid (0 ≤ P(E) ≤ 1)",
                "Believes P(E) can be negative or greater than 1"
              ]
            }
          },

          learningObjectives: [
            "Identify impossible events: events with no favorable outcomes (n(E) = 0)",
            "Calculate P(impossible event) = 0/n(S) = 0",
            "Identify certain events: events where all outcomes are favorable (n(E) = n(S))",
            "Calculate P(certain event) = n(S)/n(S) = 1",
            "Understand that for any event E: 0 ≤ P(E) ≤ 1",
            "Use probability bounds to verify calculations are correct",
            "Recognize that probabilities cannot be negative or greater than 1"
          ],

          relevantFormulas: [
            "For any event E: 0 ≤ P(E) ≤ 1",
            "Impossible event: P(E) = 0 (n(E) = 0, no favorable outcomes)",
            "Certain event: P(E) = 1 (n(E) = n(S), all outcomes are favorable)",
            "Example: Drawing from cards 1-12",
            "  P(drawing a negative number) = 0/12 = 0  (impossible: no negatives in 1-12)",
            "  P(drawing a number less than 13) = 12/12 = 1  (certain: all cards satisfy)",
            "Example: Rolling a standard die",
            "  P(rolling a 7) = 0/6 = 0  (impossible: die shows 1-6 only)",
            "  P(rolling a number from 1-6) = 6/6 = 1  (certain: all outcomes satisfy)"
          ],

          sampleProblems: [
            "A die is rolled. Find P(rolling a 7). What type of event is this?",
            "Cards numbered 1-12 are in a box. Find P(drawing a number less than 20). What type of event is this?",
            "Give an example of an impossible event and a certain event for tossing a coin",
            "If you calculate a probability and get 1.3, what does this tell you?"
          ],

          availableTools: ["numberLine", "fractionBar"]
        }
      ]
    },

    learningObjectives: [
      "Understand equally likely outcomes and fair experiments",
      "Apply probability formula P(E) = n(E)/n(S)",
      "Calculate probabilities for various contexts including playing cards",
      "Identify impossible and certain events"
    ],

    keyFormulas: `
**Probability Formula (for equally likely outcomes):**
P(E) = n(E) / n(S)
- n(E) = number of favorable outcomes for event E
- n(S) = total number of possible outcomes

**Probability Range:**
0 ≤ P(E) ≤ 1
- Impossible event: P(E) = 0
- Certain event: P(E) = 1

**Standard Deck of Playing Cards:**
- Total: 52 cards
- 4 suits: ♣ clubs (black), ♦ diamonds (red), ♥ hearts (red), ♠ spades (black)
- 13 ranks per suit: A, 2, 3, ..., 10, J, Q, K
- 26 black, 26 red
- Picture cards: J, Q, K (12 total)

**Examples:**
- P(Head on fair coin) = 1/2
- P(5 on fair die) = 1/6
- P(red card) = 26/52 = 1/2
- P(diamond) = 13/52 = 1/4
    `
  },

  // ========================================
  // SUBTOPIC 3: EXPERIMENTAL PROBABILITY
  // ========================================

  's2-math-probability-experimental': {
    displayName: 'Experimental Probability',
    topicName: 'experimental probability, relative frequency, and comparing with theoretical probability',

    progressionStructure: {
      sections: [
        // Section 3.1: Understanding Experimental vs Theoretical Probability
        {
          id: "experimental-vs-theoretical",
          title: "Experimental vs Theoretical Probability",
          difficulty: "intermediate",
          prerequisites: ["probability-calculation-counting"],
          masterySignals: "Student distinguishes experimental from theoretical probability and explains why they differ in 3+ scenarios",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of theoretical vs experimental probability",
                "Accurate explanations of why experimental ≠ theoretical in small samples"
              ],
              qualitative: [
                "Defines theoretical probability as P(E) = n(E)/n(S) based on equally likely outcomes",
                "Defines experimental probability as relative frequency from actual experiments",
                "Understands theoretical is calculated, experimental is observed",
                "Recognizes experimental probability varies from trial to trial",
                "Explains why experimental ≠ theoretical in small samples (randomness, chance variation)",
                "Understands repeated trials are needed for good estimates",
                "Can compare theoretical vs experimental for specific experiments"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about calculation vs observation",
                "Needs prompting to explain differences"
              ],
              qualitative: [
                "Knows there are two types of probability but uncertain about differences",
                "Can identify theoretical probability with guidance",
                "Understands experimental involves doing the experiment but unsure about details",
                "Needs reminder that small samples give variable results"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot distinguish theoretical from experimental",
                "Expects experimental to exactly equal theoretical"
              ],
              qualitative: [
                "Thinks experimental and theoretical are the same thing",
                "Believes experimental probability from 10 trials should exactly equal theoretical",
                "Does not understand role of randomness in experiments",
                "Cannot explain why results vary from trial to trial",
                "Thinks if experimental ≠ theoretical, there's an error"
              ]
            }
          },

          learningObjectives: [
            "Define theoretical probability: P(E) = n(E)/n(S) based on equally likely outcomes",
            "Define experimental probability (relative frequency): observed proportion from experiments",
            "Distinguish between calculated (theoretical) and observed (experimental) probability",
            "Understand that experimental probability varies due to randomness",
            "Recognize why experimental ≠ theoretical in small samples",
            "Understand the need for repeated trials to estimate probability experimentally"
          ],

          relevantFormulas: [
            "Theoretical probability: P(E) = n(E) / n(S)  (calculated based on equally likely outcomes)",
            "Experimental probability (Relative frequency): P(E) ≈ (number of occurrences) / (total number of trials)",
            "Example: Coin toss",
            "  Theoretical: P(Head) = 1/2 = 0.5",
            "  Experimental (20 tosses, 12 heads): P(Head) ≈ 12/20 = 0.6",
            "  Difference is EXPECTED in small samples due to randomness!",
            "Key insight: Theoretical is what we EXPECT on average; experimental is what we OBSERVE in actual trials"
          ],

          sampleProblems: [
            "What is the theoretical probability of getting a head when tossing a fair coin? If you toss the coin 20 times and get 12 heads, what is the experimental probability? Why are they different?",
            "Explain the difference between theoretical and experimental probability",
            "If theoretical P(rolling 6) = 1/6, would you expect to get exactly 10 sixes in 60 rolls? Why or why not?"
          ],

          availableTools: ["fractionBar"]
        },

        // Section 3.2: Calculating Relative Frequency
        {
          id: "relative-frequency-calculation",
          title: "Calculating Relative Frequency from Data",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["experimental-vs-theoretical"],
          masterySignals: "Student correctly calculates relative frequency from experimental data and creates frequency tables in 3+ problems",
          estimatedQuestions: "5-6 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct relative frequency calculations",
                "Accurate frequency tables with all required columns"
              ],
              qualitative: [
                "Correctly calculates relative frequency = (occurrences) / (total trials)",
                "Creates proper frequency tables with outcome, tally, frequency, relative frequency columns",
                "Expresses relative frequency as fraction and decimal",
                "Can compare experimental result (relative frequency) with theoretical probability",
                "Verifies sum of all relative frequencies equals 1",
                "Interprets relative frequency in context (e.g., 28/50 = 0.56 means 'about 56% of the time')"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on formula or table structure",
                "Occasional calculation errors"
              ],
              qualitative: [
                "Understands concept but makes arithmetic errors",
                "Can calculate relative frequency with prompting on formula",
                "Needs guidance on table organization",
                "Forgets to verify sum equals 1",
                "Struggles with decimal/fraction conversion"
              ]
            },
            struggling: {
              quantitative: [
                "Incorrect relative frequency calculations",
                "Cannot create frequency tables",
                "Inverts fraction (trials/occurrences instead of occurrences/trials)"
              ],
              qualitative: [
                "Confuses frequency with relative frequency",
                "Uses wrong formula or inverts the fraction",
                "Cannot organize data into tables",
                "Does not understand what 'relative' means",
                "Thinks relative frequency is the same as theoretical probability",
                "Cannot interpret decimal results in context"
              ]
            }
          },

          learningObjectives: [
            "Calculate relative frequency from experimental data: (occurrences) / (total trials)",
            "Create frequency tables with: outcome, tally, frequency, relative frequency",
            "Express relative frequency as both fraction and decimal",
            "Compare experimental relative frequency with theoretical probability",
            "Verify that sum of all relative frequencies equals 1",
            "Interpret relative frequency in real-world context"
          ],

          relevantFormulas: [
            "Relative frequency = (number of occurrences) / (total number of trials)",
            "Example: Drawing balls experiment (50 trials, 28 red balls drawn)",
            "  Relative frequency of red = 28/50 = 0.56",
            "If theoretical P(red) = 7/12 ≈ 0.583:",
            "  Difference = 0.583 - 0.56 = 0.023 (small difference is normal)",
            "Frequency table format:",
            "  Outcome | Tally | Frequency | Relative Frequency",
            "  Head    | ....  | 12        | 12/20 = 0.6",
            "  Tail    | ....  | 8         | 8/20 = 0.4",
            "  Total   |       | 20        | 1.0",
            "Check: Sum of relative frequencies should equal 1"
          ],

          sampleProblems: [
            "A coin is tossed 50 times. Heads appears 28 times. Calculate the relative frequency of getting heads. Compare with theoretical probability.",
            "Create a frequency table for an experiment where a die is rolled 60 times: 1 appears 8 times, 2 appears 12 times, 3 appears 9 times, 4 appears 11 times, 5 appears 10 times, 6 appears 10 times. Calculate relative frequencies.",
            "In a bag experiment with 100 draws, red ball appeared 35 times, blue 42 times, green 23 times. Find relative frequency for each color."
          ],

          availableTools: ["fractionBar"]
        },

        // Section 3.3: Law of Large Numbers (Intuition)
        {
          id: "law-of-large-numbers-intuition",
          title: "Experimental Probability Approaches Theoretical",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["relative-frequency-calculation"],
          masterySignals: "Student explains how experimental probability approaches theoretical as trials increase and interprets convergence graphs in 3+ scenarios",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct interpretations of experimental vs theoretical comparisons",
                "Accurate predictions about convergence with more trials"
              ],
              qualitative: [
                "Understands experimental probability approaches theoretical as trials increase",
                "Interprets graphs showing convergence (relative frequency → theoretical value)",
                "Explains why more trials give better estimates of theoretical probability",
                "Recognizes high variation in small samples (10-20 trials)",
                "Knows experimental may NEVER exactly equal theoretical but gets closer",
                "Can predict behavior: few trials = high variation, many trials = close to theoretical",
                "Understands this is why we repeat experiments many times in science"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about pattern in data/graphs",
                "Needs prompting about relationship between trial count and accuracy"
              ],
              qualitative: [
                "Understands concept that 'more is better' but unsure about details",
                "Can see pattern in graph with guidance",
                "Knows many trials help but cannot explain why",
                "Needs reminder that experimental approaches but may not equal theoretical"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot interpret convergence patterns",
                "Thinks small samples are as reliable as large samples"
              ],
              qualitative: [
                "Does not understand relationship between number of trials and reliability",
                "Thinks 10 trials is sufficient to determine exact probability",
                "Expects experimental to exactly equal theoretical regardless of sample size",
                "Cannot interpret graphs showing convergence",
                "Does not understand why scientists repeat experiments",
                "Thinks variation in experimental results means the experiment is 'wrong'"
              ]
            }
          },

          learningObjectives: [
            "Understand that experimental probability approaches theoretical as the number of trials increases",
            "Interpret graphs showing experimental probability converging to theoretical value",
            "Explain why more trials produce better estimates of theoretical probability",
            "Recognize that small samples have high variation",
            "Understand that experimental probability may never exactly equal theoretical but gets arbitrarily close",
            "Apply this understanding to real-world scientific experiments"
          ],

          relevantFormulas: [
            "Law of Large Numbers (intuitive version):",
            "As number of trials increases → experimental probability approaches theoretical probability",
            "Patterns from coin-toss experiment:",
            "  10-20 tosses: High variation (might get 0.6 or 0.4 instead of 0.5)",
            "  100 tosses: Moderate variation (might get 0.48 or 0.52)",
            "  1000 tosses: Low variation (might get 0.503 or 0.497)",
            "  Very large samples: Experimental very close to theoretical",
            "Key insight: Relative frequency may deviate from theoretical value of 1/2 for small samples, but approaches 1/2 as sample size increases",
            "Important: Experimental may NEVER exactly equal theoretical, but difference becomes smaller and smaller"
          ],

          sampleProblems: [
            "Look at this graph showing fraction of heads vs number of coin tosses. What pattern do you observe as the number of tosses increases?",
            "If theoretical P(red) = 0.5, which is more reliable: experimental result from 20 trials or from 200 trials? Why?",
            "Explain why scientists repeat experiments many times instead of doing them just once",
            "A student tosses a coin 10 times and gets 7 heads. They conclude the coin is unfair. What would you tell them?"
          ],

          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Distinguish experimental from theoretical probability",
      "Calculate relative frequency from experimental data",
      "Understand that experimental probability approaches theoretical as trials increase",
      "Interpret convergence patterns in data and graphs"
    ],

    keyFormulas: `
**Theoretical Probability:**
P(E) = n(E) / n(S)
- Calculated based on equally likely outcomes

**Experimental Probability (Relative Frequency):**
Relative frequency = (number of occurrences) / (total number of trials)
- Observed from actual experiments

**Law of Large Numbers (Intuitive):**
As trials increase → experimental probability approaches theoretical probability
- Small samples (10-20): High variation
- Large samples (100+): Close to theoretical
- Very large samples (1000+): Very close to theoretical

**Example:**
Theoretical: P(Head) = 1/2 = 0.5
- 20 tosses, 12 heads: experimental = 0.6 (difference = 0.1)
- 100 tosses, 48 heads: experimental = 0.48 (difference = 0.02)
- 1000 tosses, 503 heads: experimental = 0.503 (difference = 0.003)
    `
  },

  // ========================================
  // SUBTOPIC 4: ADVANCED SINGLE EVENT PROBABILITY
  // ========================================

  's2-math-probability-advanced-single-event': {
    displayName: 'Advanced Single Event Probability',
    topicName: 'probability with non-equally likely outcomes, complementary events, and real-world applications',

    progressionStructure: {
      sections: [
        // Section 4.1: Probability with Angles and Sectors
        {
          id: "probability-angles-sectors",
          title: "Probability with Non-Equally Likely Outcomes (Angles and Sectors)",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["probability-calculation-counting"],
          masterySignals: "Student correctly calculates probability using angle/area ratios for non-equally likely outcomes in 3+ problems",
          estimatedQuestions: "5-6 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct probability calculations using angle or area ratios",
                "Accurate application of P(E) = measure(favorable) / measure(all)"
              ],
              qualitative: [
                "Recognizes when outcomes are NOT equally likely (unequal sector sizes)",
                "Applies generalized formula: P(E) = (measure of favorable) / (measure of all possible)",
                "Uses angle ratios correctly: P(sector) = (angle of sector) / 360°",
                "Uses area ratios when needed: P(sector) = (area of sector) / (area of circle)",
                "Converts angle measurements to probability fractions",
                "Simplifies angle ratios to lowest terms",
                "Verifies all sector probabilities sum to 1"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on which measure to use (angle vs area)",
                "Occasional errors in angle calculations or simplification"
              ],
              qualitative: [
                "Understands concept but uncertain about formula application",
                "Knows to use angles but makes arithmetic errors",
                "Needs prompting to recognize non-equally likely scenarios",
                "Can calculate once formula is stated",
                "Forgets to verify probabilities sum to 1"
              ]
            },
            struggling: {
              quantitative: [
                "Tries to use P(E) = n(E)/n(S) for non-equally likely outcomes",
                "Cannot work with angle or area measurements"
              ],
              qualitative: [
                "Does not recognize that unequal sectors mean unequal probabilities",
                "Counts sectors (4 sectors = 1/4 each) instead of measuring angles",
                "Cannot apply angle ratio formula",
                "Confuses degrees with probability",
                "Does not understand what 'measure' means in this context",
                "Cannot convert between angle measurements and fractions"
              ]
            }
          },

          learningObjectives: [
            "Recognize when outcomes are NOT equally likely (unequal sector sizes, biased scenarios)",
            "Apply generalized probability formula: P(E) = (measure of favorable) / (measure of all possible)",
            "Calculate probability using angle ratios for spinners: P(sector) = (angle) / 360°",
            "Calculate probability using area ratios when needed",
            "Convert angle measurements to simplified probability fractions",
            "Verify that all sector probabilities sum to 1"
          ],

          relevantFormulas: [
            "For NON-equally likely outcomes:",
            "P(E) = (measure of favorable outcomes) / (measure of all possible outcomes)",
            "For spinners with unequal sectors (using angles):",
            "P(sector) = (angle of sector) / (angle of circle) = (angle of sector) / 360°",
            "For sectors (using area):",
            "P(sector) = (area of sector) / (area of circle)",
            "Example: Spinner with sectors of different sizes",
            "  Red sector: 90°,  P(Red) = 90°/360° = 1/4",
            "  Blue sector: 45°, P(Blue) = 45°/360° = 1/8",
            "  Green sector: 180°, P(Green) = 180°/360° = 1/2",
            "  Pink sector: 45°, P(Pink) = 45°/360° = 1/8",
            "Check: 1/4 + 1/8 + 1/2 + 1/8 = 2/8 + 1/8 + 4/8 + 1/8 = 8/8 = 1 ✓",
            "Note: Since sectors have different sizes, outcomes are NOT equally likely!"
          ],

          sampleProblems: [
            "A spinner is divided into sectors with angles: Red (90°), Blue (45°), Green (180°), Pink (45°). Find the probability that the spinner lands on: (i) red, (ii) blue, (iii) green",
            "A circle is divided into 4 sectors with angles 60°, 80°, 120°, and 100°. A point is selected at random. Find the probability the point lies in the 120° sector.",
            "A biased spinner has 3 sectors: A (120°), B (150°), C (90°). Find P(A), P(B), and P(C). Verify probabilities sum to 1."
          ],

          availableTools: []
        },

        // Section 4.2: Complementary Events
        {
          id: "complementary-events",
          title: "Complementary Events and P(not E)",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["probability-calculation-counting"],
          masterySignals: "Student correctly applies P(not E) = 1 - P(E) and recognizes when complement method is more efficient in 3+ problems",
          estimatedQuestions: "5-6 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct complementary probability calculations",
                "Accurate application of P(not E) = 1 - P(E)"
              ],
              qualitative: [
                "Understands complement: 'not E' means all outcomes except E",
                "Applies formula P(not E) = 1 - P(E) correctly",
                "Recognizes when complement method is more efficient than direct counting",
                "Verifies P(E) + P(not E) = 1",
                "Can solve using both methods (complement and direct counting) and verify they match",
                "Uses complement for 'at least one' type problems",
                "Chooses appropriate method based on problem structure"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on using complement",
                "Can apply formula but doesn't recognize when to use it"
              ],
              qualitative: [
                "Understands P(not E) = 1 - P(E) but prefers direct counting",
                "Needs prompting to consider complement method",
                "Can calculate complement once suggested",
                "Forgets to verify P(E) + P(not E) = 1",
                "Uncertain about when complement is easier"
              ]
            },
            struggling: {
              quantitative: [
                "Incorrect complement calculations",
                "Cannot apply P(not E) = 1 - P(E)"
              ],
              qualitative: [
                "Does not understand what 'not E' or 'complement' means",
                "Thinks P(not E) is the same as 1/P(E) or other incorrect formulas",
                "Cannot identify which outcomes are 'not E'",
                "Believes P(E) + P(not E) can equal something other than 1",
                "Does not recognize relationship between event and its complement",
                "Tries to use complement formula in inappropriate situations"
              ]
            }
          },

          learningObjectives: [
            "Understand that the complement of event E (written 'not E') includes all outcomes except E",
            "Apply the complementary probability formula: P(not E) = 1 - P(E)",
            "Recognize when complement method is more efficient than direct counting",
            "Verify that P(E) + P(not E) = 1 for any event",
            "Use complement method for 'at least one' problems",
            "Choose between complement and direct counting based on problem structure"
          ],

          relevantFormulas: [
            "Complementary events:",
            "P(not E) = 1 - P(E)",
            "P(E) + P(not E) = 1",
            "Alternative forms:",
            "P(E) = 1 - P(not E)",
            "P(not E) = 1 - P(E)",
            "Example: Standard deck",
            "  P(diamond) = 13/52 = 1/4",
            "  P(not diamond) = 1 - 1/4 = 3/4",
            "  OR count directly: 39 cards are not diamonds, so 39/52 = 3/4 ✓",
            "When to use complement:",
            "  - If counting 'not E' is harder → use P(not E) = 1 - P(E)",
            "  - If counting 'E' is harder → count 'not E' directly, then subtract from 1",
            "  - If both are equally easy → either method works"
          ],

          sampleProblems: [
            "A card is drawn from a standard deck. P(diamond) = 1/4. Find P(not diamond) using: (i) complementary formula, (ii) direct counting. Verify both methods give the same answer.",
            "A die is rolled. Find P(not getting a 6) using the complement method.",
            "In a bag of 20 marbles (5 red, 15 blue), find P(not red) using both methods.",
            "If P(rain tomorrow) = 0.3, find P(no rain tomorrow)."
          ],

          availableTools: ["fractionBar"]
        },

        // Section 4.3: Real-World Probability Applications
        {
          id: "real-world-probability",
          title: "Real-World Probability Applications",
          difficulty: "advanced",
          prerequisites: ["probability-angles-sectors", "complementary-events"],
          masterySignals: "Student correctly solves multi-step real-world probability problems with various contexts in 3+ scenarios",
          estimatedQuestions: "6-8 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct real-world probability problems",
                "Accurate multi-step calculations with proper setup"
              ],
              qualitative: [
                "Applies probability to real-world contexts (games, prizes, shopping, biased scenarios)",
                "Solves multi-step word problems systematically",
                "Correctly interprets problem context to identify favorable and total outcomes",
                "Chooses appropriate method (direct counting, complement, angle ratios) based on context",
                "Handles biased experiments (weighted dice, non-uniform spinners, unequal prizes)",
                "Expresses final answer in context-appropriate form (fraction, decimal, percentage)",
                "Interprets probability in decision-making contexts ('Is this a good deal?', 'What are my chances?')"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on problem interpretation or setup",
                "Can calculate once favorable/total outcomes are identified"
              ],
              qualitative: [
                "Understands basic approach but struggles with complex word problems",
                "Needs help identifying favorable outcomes in context",
                "Can apply formulas but uncertain about which method to use",
                "Makes errors in multi-step problems (gets one step wrong)",
                "Needs prompting to consider all cases or use complement"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve real-world probability problems",
                "Misidentifies favorable or total outcomes from word problem"
              ],
              qualitative: [
                "Cannot translate word problem into probability setup",
                "Confuses favorable outcomes with total outcomes in context",
                "Does not recognize when to use different methods (angles, complement, etc.)",
                "Gives up on multi-step problems",
                "Cannot interpret what probability means in context (e.g., 'probability 1/6 means...')",
                "Struggles with reading comprehension of problem scenarios",
                "Does not check if answer makes sense in context"
              ]
            }
          },

          learningObjectives: [
            "Apply probability to real-world contexts: games, prizes, shopping, biased scenarios",
            "Solve multi-step word problems involving probability",
            "Interpret problem context to identify favorable and total outcomes",
            "Choose appropriate calculation method based on problem structure",
            "Handle biased experiments (non-equally likely outcomes)",
            "Express probability in context-appropriate forms and interpret meaning",
            "Use probability for decision-making and risk assessment"
          ],

          relevantFormulas: [
            "General approach for word problems:",
            "1. Identify the experiment and sample space",
            "2. Identify the event E (favorable outcomes)",
            "3. Determine if outcomes are equally likely",
            "4. Choose method:",
            "   - Equally likely → P(E) = n(E)/n(S)",
            "   - Non-equally likely → P(E) = measure(favorable)/measure(all)",
            "   - Complement easier → P(not E) = 1 - P(E)",
            "5. Calculate and simplify",
            "6. Interpret in context",
            "Example contexts:",
            "  - Prize wheels with unequal sectors (use angles)",
            "  - Games with biased dice or spinners",
            "  - Shopping scenarios (probability of winning discount)",
            "  - Weather predictions (experimental probability)",
            "  - Quality control (probability of defect)"
          ],

          sampleProblems: [
            "In a shopping mall, a customer who spends minimum \\$500 gets to spin a prize wheel. The wheel is divided into 6 equal sectors with prizes: A (\\$30), B (\\$50), C (\\$60), D (umbrella), E (\\$40), F (1-kg cheesecake). Find the probability that a customer who spins the wheel wins: (i) an umbrella, (ii) a voucher, (iii) \\$100 cash.",
            "A biased tetrahedral die has faces labeled 1, 2, 3, 4 with probabilities: P(1) = 0.1, P(2) = 0.3, P(3) = 0.4. Find P(4). Then find P(getting a prime number).",
            "A bag contains colored marbles. The probability of drawing red is 0.35. What is the probability of NOT drawing red?",
            "A spinner for a board game has 8 sectors: 4 are 'Move 1', 2 are 'Move 2', 1 is 'Move 3', 1 is 'Go Back'. If the sectors are equal size, find the probability of moving forward.",
            "In a lottery, 100 tickets are sold. You buy 5 tickets. What is the probability you win if: (i) there's one prize, (ii) you want to find P(not winning)?"
          ],

          availableTools: ["fractionBar"]
        }
      ]
    },

    learningObjectives: [
      "Calculate probability for non-equally likely outcomes using angle/area ratios",
      "Apply complementary probability formula P(not E) = 1 - P(E)",
      "Solve real-world probability problems in various contexts",
      "Choose appropriate calculation methods based on problem structure"
    ],

    keyFormulas: `
**Non-Equally Likely Outcomes:**
P(E) = (measure of favorable outcomes) / (measure of all possible outcomes)

**Using Angles (for spinners with unequal sectors):**
P(sector) = (angle of sector) / 360°

**Complementary Events:**
P(not E) = 1 - P(E)
P(E) + P(not E) = 1

**Problem-Solving Strategy:**
1. Identify experiment and sample space
2. Identify event E (favorable outcomes)
3. Check if equally likely
4. Choose method: direct counting, angles, or complement
5. Calculate and verify answer makes sense

**Examples:**
- Unequal spinner: P(90° sector) = 90°/360° = 1/4
- Complement: P(not diamond) = 1 - P(diamond) = 1 - 1/4 = 3/4
- Real-world: Shopping wheel with prizes, biased dice, game spinners
    `
  }
};

// ===========================
// GLOBAL CONFIGURATION
// ===========================

export const S2_PROBABILITY_SINGLE_EVENT_CONFIG = {
  tutor: S2_PROBABILITY_SINGLE_EVENT_TUTOR_CUSTOMIZATION,
  mathTools: S2_PROBABILITY_SINGLE_EVENT_MATH_TOOLS,
  subtopics: S2_PROBABILITY_SINGLE_EVENT_SUBTOPICS
};
