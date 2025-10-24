/**
 * S4 Mathematics - Probability Topic Configuration
 *
 * Comprehensive probability module covering:
 * - Basic probability concepts and sample spaces
 * - Combined events and probability rules
 * - Probability trees and multi-stage experiments
 * - Conditional probability
 * - Real-world applications and problem-solving
 */

// Type exports
export type ProbabilityTopicId =
  | 's4-math-probability-basic-concepts'
  | 's4-math-probability-combined-events'
  | 's4-math-probability-trees'
  | 's4-math-probability-conditional'
  | 's4-math-probability-applications';

// Topic-specific tutor customization
export const PROBABILITY_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary 4 students learning Probability.

Teaching Approach:
- Guide students to understand probability as quantifying uncertainty
- Use real-world contexts extensively (games, medical testing, quality control)
- Emphasize the difference between independent and dependent events
- Help students recognize when to use complement strategies for "at least one" problems
- Celebrate insights about conditional probability and Bayes' theorem

**Text-to-Speech Guidelines:**
- Say "P of A" for P(A)
- Say "P of A given B" for P(A|B)
- Say "P of A union B" for P(A ∪ B), or "P of A or B"
- Say "P of A intersection B" for P(A ∩ B), or "P of A and B"
- Say "A prime" or "not A" for A'
- Spell out fractions: "three fifths" for 3/5
- Avoid special symbols in speech.text - spell them out clearly
- Keep speech.text plain and conversational (no markdown, no LaTeX)`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding:
- vennDiagram: For showing overlapping events and set relationships
- probabilityTree: For multi-stage experiments and conditional probabilities
- twoWayTable: For categorical data and conditional probability
Note: If specific probability tools are not available, describe the diagrams verbally.`
};

// Available math tools for this topic
export const PROBABILITY_MATH_TOOLS = [
  "vennDiagram",
  "vennDiagram1Set",
  "vennDiagram3",
  "probabilityTree",
  "twoWayTable"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S4_MATH_PROBABILITY_SUBTOPICS = {

  's4-math-probability-basic-concepts': {
    displayName: 'Basic Probability Concepts',
    topicName: 'fundamental probability concepts, sample spaces, and basic calculations',

    progressionStructure: {
      sections: [
        {
          id: "sample-space-outcomes",
          title: "Sample Spaces and Outcomes",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly lists sample spaces and identifies outcomes in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct sample space listings",
                "Systematic approach to listing all outcomes"
              ],
              qualitative: [
                "Understands experiment, outcome, and sample space terminology",
                "Lists sample spaces systematically (organized approach)",
                "Identifies favorable outcomes correctly",
                "Uses correct set notation for sample spaces",
                "Recognizes n(S) as the total number of outcomes"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on systematic listing"],
              qualitative: [
                "Understands basic concept but misses some outcomes",
                "Needs prompting for systematic approach",
                "Can identify favorable outcomes once sample space is given"
              ]
            },
            struggling: {
              quantitative: ["Cannot list complete sample space", "Duplicates or misses outcomes"],
              qualitative: [
                "Does not understand what sample space means",
                "Lists outcomes randomly without system",
                "Cannot distinguish between outcomes and events"
              ]
            }
          },
          learningObjectives: [
            "Define and identify experiments, outcomes, and sample spaces",
            "List sample spaces systematically for simple experiments",
            "Use set notation {outcome1, outcome2, ...} for sample spaces",
            "Identify favorable outcomes for a given event",
            "Calculate n(S) and n(Event) for basic probability setup"
          ],
          relevantFormulas: [
            "Sample space S = {all possible outcomes}",
            "Event E = subset of sample space",
            "n(S) = number of outcomes in sample space",
            "n(E) = number of favorable outcomes"
          ],
          availableTools: []
        },
        {
          id: "basic-probability-calculation",
          title: "Basic Probability Formula",
          difficulty: "foundational",
          prerequisites: ["sample-space-outcomes"],
          masterySignals: "Student calculates basic probabilities correctly in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct probability calculations",
                "Consistent use of formula P(E) = n(E)/n(S)"
              ],
              qualitative: [
                "Applies P(Event) = favorable outcomes / total outcomes correctly",
                "Expresses probabilities as fractions, decimals, or percentages",
                "Recognizes P(certain event) = 1 and P(impossible event) = 0",
                "Understands probability range: 0 ≤ P(E) ≤ 1",
                "Simplifies probability fractions to lowest terms"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with formula reminders"],
              qualitative: [
                "Knows formula but makes counting errors",
                "Needs help identifying numerator vs denominator",
                "Can apply formula once favorable outcomes are identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot apply formula", "Confuses numerator and denominator"],
              qualitative: [
                "Does not understand what formula represents",
                "Cannot count favorable or total outcomes accurately",
                "Gives probabilities outside 0-1 range"
              ]
            }
          },
          learningObjectives: [
            "Apply the basic probability formula: P(E) = n(E) / n(S)",
            "Calculate probabilities for simple events",
            "Express probabilities as fractions, decimals, and percentages",
            "Recognize certain events (P = 1) and impossible events (P = 0)",
            "Understand that all probabilities fall between 0 and 1"
          ],
          relevantFormulas: [
            "P(Event) = Number of favorable outcomes / Total number of outcomes",
            "P(E) = n(E) / n(S)",
            "0 ≤ P(E) ≤ 1 for any event E",
            "P(certain event) = 1",
            "P(impossible event) = 0"
          ],
          availableTools: []
        },
        {
          id: "complementary-events",
          title: "Complementary Events",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["basic-probability-calculation"],
          masterySignals: "Student uses complement rule correctly in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct uses of complement rule",
                "Strategic choice of complement when it simplifies calculation"
              ],
              qualitative: [
                "Understands complement A' as 'event A does not occur'",
                "Applies P(A') = 1 - P(A) correctly",
                "Recognizes P(A) + P(A') = 1",
                "Identifies when complement strategy is more efficient",
                "Uses correct notation: A', Ā, or 'not A'"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with prompting to use complement"],
              qualitative: [
                "Understands complement concept but forgets to use it",
                "Can apply P(A') = 1 - P(A) when reminded",
                "Uncertain when complement approach is better"
              ]
            },
            struggling: {
              quantitative: ["Cannot apply complement rule", "Confuses complement with other events"],
              qualitative: [
                "Does not understand what 'not A' means",
                "Cannot see connection between P(A) and P(A')",
                "Tries to calculate directly when complement would be easier"
              ]
            }
          },
          learningObjectives: [
            "Define complementary events: A' is the event that A does not occur",
            "Apply the complement rule: P(A') = 1 - P(A)",
            "Recognize that P(A) + P(A') = 1",
            "Identify situations where complement approach simplifies calculation",
            "Use proper notation for complements (A', Ā, or not A)"
          ],
          relevantFormulas: [
            "P(A') = 1 - P(A)",
            "P(A) + P(A') = 1",
            "A and A' are mutually exclusive and exhaustive",
            "P(A' ∩ B) = P(B) - P(A ∩ B)"
          ],
          availableTools: ["vennDiagram1Set"]
        },
        {
          id: "probability-with-sets",
          title: "Probability with Set Notation",
          difficulty: "intermediate",
          prerequisites: ["complementary-events"],
          masterySignals: "Student correctly interprets and uses set notation in probability contexts in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct interpretations of union and intersection",
                "Accurate use of Venn diagrams for probability"
              ],
              qualitative: [
                "Interprets P(A ∪ B) as 'probability of A or B'",
                "Interprets P(A ∩ B) as 'probability of A and B'",
                "Connects Venn diagram regions to probabilities",
                "Understands sample space as universal set in probability",
                "Uses complement notation P(A') correctly"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with notation reminders"],
              qualitative: [
                "Confuses ∪ and ∩ symbols occasionally",
                "Needs help translating between words and symbols",
                "Can apply once notation is clarified"
              ]
            },
            struggling: {
              quantitative: ["Cannot interpret set notation", "Confuses union with intersection"],
              qualitative: [
                "Does not understand what ∪ and ∩ represent",
                "Cannot connect Venn diagrams to probability",
                "Treats set operations as arithmetic operations"
              ]
            }
          },
          learningObjectives: [
            "Interpret P(A ∪ B) as probability that A or B or both occur",
            "Interpret P(A ∩ B) as probability that both A and B occur",
            "Use Venn diagrams to visualize probability relationships",
            "Recognize sample space S as the universal set",
            "Connect set operations to probability language (OR = union, AND = intersection)"
          ],
          relevantFormulas: [
            "P(A ∪ B) represents 'A or B' (union)",
            "P(A ∩ B) represents 'A and B' (intersection)",
            "P(A') represents 'not A' (complement)",
            "In Venn diagrams: total area = 1 (sample space)",
            "Region areas represent probabilities"
          ],
          availableTools: ["vennDiagram", "vennDiagram1Set", "vennDiagram3"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Sample Spaces and Outcomes (foundational) - List and identify outcomes systematically",
      "2. Basic Probability Formula (foundational) - Apply P(E) = n(E)/n(S)",
      "3. Complementary Events (foundational→intermediate) - Use P(A') = 1 - P(A)",
      "4. Probability with Sets (intermediate) - Interpret and use P(A ∪ B), P(A ∩ B)"
    ],

    keyFormulas: `• P(Event) = n(favorable) / n(total) = n(E) / n(S)
                  • 0 ≤ P(E) ≤ 1 for any event
                  • P(A') = 1 - P(A) (complement rule)
                  • P(A) + P(A') = 1
                  • P(A ∪ B) = "A or B" | P(A ∩ B) = "A and B"`
  },

  's4-math-probability-combined-events': {
    displayName: 'Combined Events & Probability Rules',
    topicName: 'addition and multiplication rules for combining probabilities',

    progressionStructure: {
      sections: [
        {
          id: "mutually-exclusive-events",
          title: "Mutually Exclusive Events",
          difficulty: "intermediate",
          prerequisites: ["probability-with-sets"],
          masterySignals: "Student identifies mutually exclusive events and applies addition rule in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of mutually exclusive events",
                "Accurate application of P(A ∪ B) = P(A) + P(B)"
              ],
              qualitative: [
                "Understands mutually exclusive means events cannot occur together",
                "Recognizes P(A ∩ B) = 0 for mutually exclusive events",
                "Applies addition rule: P(A ∪ B) = P(A) + P(B) correctly",
                "Can determine if given events are mutually exclusive",
                "Provides examples and non-examples of mutually exclusive events"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with guidance on identifying mutual exclusivity"],
              qualitative: [
                "Understands definition but struggles to apply to new situations",
                "Needs prompting to check if events can occur together",
                "Can apply addition rule once mutual exclusivity is confirmed"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify mutually exclusive events", "Applies rule incorrectly"],
              qualitative: [
                "Confuses mutually exclusive with independent",
                "Cannot determine if events can occur together",
                "Adds probabilities without checking mutual exclusivity"
              ]
            }
          },
          learningObjectives: [
            "Define mutually exclusive events as events that cannot both occur",
            "Recognize that P(A ∩ B) = 0 for mutually exclusive events",
            "Apply addition rule for mutually exclusive events: P(A ∪ B) = P(A) + P(B)",
            "Identify whether given events are mutually exclusive",
            "Extend to more than two events: P(A ∪ B ∪ C) = P(A) + P(B) + P(C) if pairwise mutually exclusive"
          ],
          relevantFormulas: [
            "Events A and B are mutually exclusive if P(A ∩ B) = 0",
            "For mutually exclusive events: P(A ∪ B) = P(A) + P(B)",
            "Cannot both happen at the same time",
            "Example: rolling a 2 and rolling a 5 on one die roll"
          ],
          availableTools: ["vennDiagram","vennDiagram1Set","vennDiagram3"]
        },
        {
          id: "general-addition-rule",
          title: "General Addition Rule",
          difficulty: "intermediate",
          prerequisites: ["mutually-exclusive-events"],
          masterySignals: "Student applies general addition rule with overlap correction in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of general addition rule",
                "Accurate calculation of overlap P(A ∩ B)"
              ],
              qualitative: [
                "Applies P(A ∪ B) = P(A) + P(B) - P(A ∩ B) for any two events",
                "Understands why overlap must be subtracted",
                "Identifies overlap region in Venn diagrams",
                "Recognizes when general rule reduces to mutually exclusive case",
                "Uses Venn diagrams to visualize the rule"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with reminders to subtract overlap"],
              qualitative: [
                "Knows formula but forgets the subtraction",
                "Needs help identifying what P(A ∩ B) represents",
                "Can complete calculation once overlap is identified"
              ]
            },
            struggling: {
              quantitative: ["Forgets to subtract overlap", "Cannot identify P(A ∩ B)"],
              qualitative: [
                "Does not understand why subtraction is needed",
                "Cannot visualize overlap in Venn diagram",
                "Confuses when to add vs when to subtract"
              ]
            }
          },
          learningObjectives: [
            "Apply general addition rule: P(A ∪ B) = P(A) + P(B) - P(A ∩ B) for any two events",
            "Understand that overlap is counted twice when adding P(A) and P(B)",
            "Identify and calculate P(A ∩ B) from given information",
            "Use Venn diagrams to visualize why subtraction is necessary",
            "Recognize special case: if mutually exclusive, P(A ∩ B) = 0, rule simplifies"
          ],
          relevantFormulas: [
            "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) (general addition rule)",
            "Subtract P(A ∩ B) because it's counted in both P(A) and P(B)",
            "If mutually exclusive: P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B)",
            "Use Venn diagram: total shaded = circle A + circle B - overlap"
          ],
          availableTools: ["vennDiagram", "vennDiagram1Set", "vennDiagram3"]
        },
        {
          id: "independent-events",
          title: "Independent Events",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["general-addition-rule"],
          masterySignals: "Student identifies independent events and understands independence testing in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of independence",
                "Accurate testing using P(A ∩ B) = P(A) × P(B)"
              ],
              qualitative: [
                "Understands independent means one event doesn't affect the other",
                "Tests independence: P(A ∩ B) = P(A) × P(B)",
                "Distinguishes independent from mutually exclusive",
                "Provides examples: flipping two coins, rolling two dice",
                "Recognizes sampling with replacement creates independence"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with guidance on testing independence"],
              qualitative: [
                "Understands concept but struggles with formal test",
                "Confuses independent with mutually exclusive",
                "Can apply once independence is confirmed"
              ]
            },
            struggling: {
              quantitative: ["Cannot determine if events are independent", "Confuses with mutually exclusive"],
              qualitative: [
                "Does not understand what independence means",
                "Thinks independent and mutually exclusive are the same",
                "Cannot apply multiplication test"
              ]
            }
          },
          learningObjectives: [
            "Define independent events: occurrence of one doesn't affect probability of the other",
            "Test for independence: events are independent if P(A ∩ B) = P(A) × P(B)",
            "Distinguish independent from mutually exclusive",
            "Identify independent events in context (separate experiments, sampling with replacement)",
            "Understand: if mutually exclusive (except trivial cases), then NOT independent"
          ],
          relevantFormulas: [
            "Events A and B are independent if P(A ∩ B) = P(A) × P(B)",
            "For independent events: P(A|B) = P(A) (knowing B doesn't change P(A))",
            "Examples: flipping two coins, rolling two dice, drawing with replacement",
            "Mutually exclusive events (except P=0) are NOT independent"
          ],
          availableTools: []
        },
        {
          id: "multiplication-rule",
          title: "Multiplication Rule for Independent Events",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["independent-events"],
          masterySignals: "Student applies multiplication rule for multiple independent events in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of multiplication rule",
                "Accurate calculations for 2+ stage independent events"
              ],
              qualitative: [
                "Applies P(A ∩ B) = P(A) × P(B) for independent events",
                "Extends to multiple events: P(A ∩ B ∩ C) = P(A) × P(B) × P(C)",
                "Recognizes when to multiply (AND, both, all) vs add (OR, either)",
                "Solves multi-stage problems by multiplying stage probabilities",
                "Checks independence before applying multiplication rule"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with reminders to multiply for AND"],
              qualitative: [
                "Understands rule but sometimes multiplies when should add",
                "Can apply to 2 events but struggles with 3+",
                "Needs prompting to verify independence first"
              ]
            },
            struggling: {
              quantitative: ["Multiplies when should add, or vice versa", "Calculation errors"],
              qualitative: [
                "Does not understand when to multiply vs add",
                "Cannot handle more than 2 events",
                "Forgets to check independence"
              ]
            }
          },
          learningObjectives: [
            "Apply multiplication rule: P(A ∩ B) = P(A) × P(B) for independent events",
            "Extend to three or more independent events",
            "Recognize 'AND' keywords signal multiplication",
            "Solve multi-stage independent experiment problems",
            "Calculate probability of specific sequences in independent trials"
          ],
          relevantFormulas: [
            "P(A ∩ B) = P(A) × P(B) for independent events",
            "P(A ∩ B ∩ C) = P(A) × P(B) × P(C) for independent A, B, C",
            "Keyword 'AND' → multiply (if independent)",
            "Keyword 'OR' → add",
            "Example: P(heads and 6) = P(heads) × P(6) = 1/2 × 1/6 = 1/12"
          ],
          availableTools: []
        },
        {
          id: "dependent-events-introduction",
          title: "Introduction to Dependent Events",
          difficulty: "advanced",
          prerequisites: ["multiplication-rule"],
          masterySignals: "Student recognizes dependent events and understands changing probabilities in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of dependent events",
                "Accurate probability calculations with changing denominators"
              ],
              qualitative: [
                "Recognizes when one event affects probability of another",
                "Identifies sampling without replacement as dependent",
                "Calculates changing probabilities after first event",
                "Understands denominators decrease in without-replacement scenarios",
                "Distinguishes dependent from independent events"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with guidance on updating probabilities"],
              qualitative: [
                "Understands concept but forgets to update probabilities",
                "Needs prompting to recognize without-replacement scenario",
                "Can calculate once dependence is identified"
              ]
            },
            struggling: {
              quantitative: ["Treats dependent events as independent", "Doesn't update probabilities"],
              qualitative: [
                "Does not recognize when events are dependent",
                "Uses same probabilities for both events",
                "Cannot calculate changing probabilities"
              ]
            }
          },
          learningObjectives: [
            "Define dependent events: occurrence of one affects probability of the other",
            "Recognize sampling without replacement creates dependence",
            "Calculate updated probabilities after first event",
            "Understand P(A ∩ B) ≠ P(A) × P(B) for dependent events",
            "Connect to conditional probability concept"
          ],
          relevantFormulas: [
            "For dependent events: P(A ∩ B) = P(A) × P(B|A)",
            "Without replacement: probabilities change for second draw",
            "Example: P(2 red from 3R, 2B) = 3/5 × 2/4 = 6/20 = 3/10",
            "Denominator decreases: total items reduce by 1",
            "Numerator may also change depending on first outcome"
          ],
          availableTools: ["probabilityTree"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 5 sections:",
      "1. Mutually Exclusive Events (intermediate) - Identify and use P(A ∪ B) = P(A) + P(B)",
      "2. General Addition Rule (intermediate) - Apply P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
      "3. Independent Events (intermediate→advanced) - Test and identify independence",
      "4. Multiplication Rule (intermediate→advanced) - Apply P(A ∩ B) = P(A) × P(B)",
      "5. Dependent Events (advanced) - Recognize dependence and changing probabilities"
    ],

    keyFormulas: `• Mutually exclusive: P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B)
                  • General addition: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
                  • Independent: P(A ∩ B) = P(A) × P(B)
                  • Dependent: P(A ∩ B) = P(A) × P(B|A)
                  • AND → multiply | OR → add`
  },

  's4-math-probability-trees': {
    displayName: 'Probability Trees',
    topicName: 'tree diagrams for multi-stage experiments and calculating probabilities',

    progressionStructure: {
      sections: [
        {
          id: "tree-diagram-construction",
          title: "Constructing Tree Diagrams",
          difficulty: "intermediate",
          prerequisites: ["basic-probability-calculation"],
          masterySignals: "Student draws correct tree diagrams for 2-stage experiments in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct tree diagrams with all branches labeled",
                "All branch probabilities sum to 1 at each stage"
              ],
              qualitative: [
                "Draws branches for each possible outcome at each stage",
                "Labels branches with outcomes and probabilities",
                "Verifies probabilities sum to 1 from each branching point",
                "Organizes tree clearly from left to right (or top to bottom)",
                "Identifies all final outcomes systematically"
              ]
            },
            developing: {
              quantitative: ["1-2 correct trees with guidance on structure"],
              qualitative: [
                "Understands tree concept but misses some branches",
                "Forgets to label all probabilities",
                "Can complete tree with prompting"
              ]
            },
            struggling: {
              quantitative: ["Cannot construct tree", "Missing branches or wrong structure"],
              qualitative: [
                "Does not understand tree diagram purpose",
                "Cannot organize stages systematically",
                "Probabilities don't sum to 1"
              ]
            }
          },
          learningObjectives: [
            "Draw tree diagrams for two-stage experiments",
            "Label each branch with outcome and probability",
            "Verify that probabilities from each point sum to 1",
            "Identify all possible final outcomes from tree",
            "Use trees to organize and list sample spaces"
          ],
          relevantFormulas: [
            "Each stage = new set of branches",
            "Probabilities on branches from one point must sum to 1",
            "Number of final outcomes = product of branches at each stage",
            "Tree shows all possible paths through experiment"
          ],
          availableTools: ["probabilityTree"]
        },
        {
          id: "probability-from-trees",
          title: "Calculating Probabilities from Trees",
          difficulty: "intermediate",
          prerequisites: ["tree-diagram-construction"],
          masterySignals: "Student calculates probabilities using multiply-along and add-across rules in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct probability calculations from trees",
                "Accurate use of multiply and add rules"
              ],
              qualitative: [
                "Applies multiply rule: multiply along branches for one path",
                "Applies add rule: add across different paths for same outcome",
                "Calculates P(specific sequence) by multiplying along path",
                "Calculates P(outcome regardless of order) by adding relevant paths",
                "Shows clear working: identifies paths, multiplies, then adds"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with reminders about multiply/add rules"],
              qualitative: [
                "Knows rules but sometimes applies incorrectly",
                "Needs help identifying which paths to add",
                "Can complete once paths are identified"
              ]
            },
            struggling: {
              quantitative: ["Multiplies when should add or vice versa", "Cannot identify paths"],
              qualitative: [
                "Does not understand multiply-along and add-across",
                "Cannot identify which path represents which outcome",
                "Makes calculation errors"
              ]
            }
          },
          learningObjectives: [
            "Apply multiply-along rule: multiply probabilities along one path",
            "Apply add-across rule: add probabilities of different paths to same outcome",
            "Calculate P(specific sequence) by following one path",
            "Calculate P(outcome in any order) by adding all relevant paths",
            "Verify calculations: all final outcomes should sum to 1"
          ],
          relevantFormulas: [
            "Multiply along branches (AND rule): P(path) = p₁ × p₂ × p₃ × ...",
            "Add across outcomes (OR rule): P(outcome) = Σ P(paths leading to outcome)",
            "P(all final outcomes) = 1 (completeness check)",
            "Example: P(HT) = P(H) × P(T) = 1/2 × 1/2 = 1/4"
          ],
          availableTools: ["probabilityTree"]
        },
        {
          id: "multi-stage-trees",
          title: "Multi-Stage Tree Diagrams",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["probability-from-trees"],
          masterySignals: "Student constructs and uses 3+ stage trees correctly in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-stage trees (3+ stages)",
                "Accurate probability calculations from complex trees"
              ],
              qualitative: [
                "Extends tree to 3 or more stages",
                "Maintains organization as complexity increases",
                "Correctly multiplies along longer paths",
                "Groups and adds relevant paths for complex events",
                "Uses trees to solve multi-step probability problems"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with guidance on organizing multiple stages"],
              qualitative: [
                "Can handle 2 stages but struggles with 3+",
                "Gets confused with many branches",
                "Needs help identifying paths for complex events"
              ]
            },
            struggling: {
              quantitative: ["Cannot construct trees beyond 2 stages", "Overwhelmed by branches"],
              qualitative: [
                "Loses track of stages",
                "Cannot organize complex trees",
                "Makes frequent calculation errors with many paths"
              ]
            }
          },
          learningObjectives: [
            "Construct tree diagrams for 3+ stage experiments",
            "Navigate complex trees with many branches",
            "Calculate probabilities along extended paths",
            "Group multiple paths for combined events",
            "Use systematic approach to avoid missing paths"
          ],
          relevantFormulas: [
            "For n stages: multiply n probabilities along each path",
            "Total paths = (branches at stage 1) × (branches at stage 2) × ...",
            "Organize systematically to avoid missing paths",
            "Example: 3 coins = 2³ = 8 final outcomes"
          ],
          availableTools: ["probabilityTree"]
        },
        {
          id: "trees-without-replacement",
          title: "Tree Diagrams Without Replacement",
          difficulty: "advanced",
          prerequisites: ["multi-stage-trees"],
          masterySignals: "Student correctly adjusts probabilities in without-replacement scenarios in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct trees with changing probabilities",
                "Accurate calculations for dependent events"
              ],
              qualitative: [
                "Recognizes without replacement creates dependence",
                "Updates probabilities on second-stage branches",
                "Reduces denominators appropriately",
                "Adjusts numerators based on first outcome",
                "Explains why probabilities change"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with reminders to update probabilities"],
              qualitative: [
                "Understands concept but forgets to change probabilities",
                "Needs help determining updated fractions",
                "Can complete once changes are identified"
              ]
            },
            struggling: {
              quantitative: ["Uses same probabilities for all stages", "Incorrect denominator updates"],
              qualitative: [
                "Does not recognize need to update probabilities",
                "Cannot calculate changed probabilities",
                "Treats as independent when it's dependent"
              ]
            }
          },
          learningObjectives: [
            "Recognize without replacement creates dependent events",
            "Update second-stage probabilities based on first outcome",
            "Reduce total items (denominator) after each draw",
            "Adjust favorable outcomes (numerator) after each draw",
            "Solve realistic problems: drawing cards, selecting people, quality control"
          ],
          relevantFormulas: [
            "Without replacement: second probability depends on first outcome",
            "Total decreases by 1: denominator = original - 1",
            "Favorable may decrease: if first was favorable, numerator = original - 1",
            "Example: P(2 red from 3R, 2B) = 3/5 × 2/4 = 3/10",
            "Verify: all paths from one branch must sum to 1"
          ],
          availableTools: ["probabilityTree"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Tree Construction (intermediate) - Draw and label tree diagrams",
      "2. Probability from Trees (intermediate) - Use multiply-along and add-across rules",
      "3. Multi-Stage Trees (intermediate→advanced) - Handle 3+ stage experiments",
      "4. Without Replacement (advanced) - Adjust probabilities for dependent events"
    ],

    keyFormulas: `• Multiply along branches (one path): P(A and B) = P(A) × P(B)
                  • Add across outcomes (multiple paths): P(outcome) = Σ paths
                  • Probabilities from each point sum to 1
                  • Without replacement: update probabilities on later branches
                  • Denominator decreases: total - 1 after each draw`
  },

  's4-math-probability-conditional': {
    displayName: 'Conditional Probability',
    topicName: 'probability of events given that another event has occurred',

    progressionStructure: {
      sections: [
        {
          id: "conditional-probability-concept",
          title: "Understanding Conditional Probability",
          difficulty: "advanced",
          prerequisites: ["dependent-events-introduction"],
          masterySignals: "Student interprets and explains conditional probability in context in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct interpretations of P(A|B)",
                "Accurate identification of restricted sample space"
              ],
              qualitative: [
                "Interprets P(A|B) as 'probability of A given B has occurred'",
                "Understands conditional probability uses restricted sample space",
                "Identifies 'given that' keywords in problems",
                "Explains difference between P(A) and P(A|B)",
                "Recognizes real-world conditional probability situations"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with prompting on 'given' condition"],
              qualitative: [
                "Understands notation but struggles with interpretation",
                "Needs help identifying what condition restricts",
                "Can solve once restriction is clarified"
              ]
            },
            struggling: {
              quantitative: ["Cannot interpret P(A|B)", "Confuses with regular probability"],
              qualitative: [
                "Does not understand 'given that' concept",
                "Cannot identify restricted sample space",
                "Treats P(A|B) same as P(A)"
              ]
            }
          },
          learningObjectives: [
            "Interpret P(A|B) notation as 'probability of A given B'",
            "Understand conditional probability uses restricted sample space",
            "Identify 'given that' keywords in word problems",
            "Explain how knowing B changes probability of A",
            "Connect to real-world: diagnostic testing, weather forecasting"
          ],
          relevantFormulas: [
            "P(A|B) reads as 'probability of A given B'",
            "Given B has occurred, only consider outcomes in B",
            "Restricted sample space = outcomes where B is true",
            "If A and B independent: P(A|B) = P(A)"
          ],
          availableTools: [ "twoWayTable"]
        },
        {
          id: "conditional-probability-formula",
          title: "The Conditional Probability Formula",
          difficulty: "advanced",
          prerequisites: ["conditional-probability-concept"],
          masterySignals: "Student applies P(A|B) = P(A ∩ B) / P(B) correctly in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of conditional probability formula",
                "Accurate calculation of P(A ∩ B) and P(B)"
              ],
              qualitative: [
                "Applies P(A|B) = P(A ∩ B) / P(B) correctly",
                "Identifies numerator as intersection probability",
                "Identifies denominator as condition probability",
                "Rearranges to P(A ∩ B) = P(B) × P(A|B) when needed",
                "Tests independence using P(A|B) = P(A)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with formula reminders"],
              qualitative: [
                "Knows formula but confuses numerator and denominator",
                "Needs help identifying P(A ∩ B)",
                "Can apply once components are identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot apply formula", "Confuses P(A|B) with P(B|A)"],
              qualitative: [
                "Does not understand what formula represents",
                "Cannot identify intersection and condition",
                "Makes calculation errors"
              ]
            }
          },
          learningObjectives: [
            "Apply formula: P(A|B) = P(A ∩ B) / P(B)",
            "Calculate P(A ∩ B) from given information",
            "Use rearranged form: P(A ∩ B) = P(B) × P(A|B)",
            "Test independence: events independent if P(A|B) = P(A)",
            "Solve for unknown probabilities using formula"
          ],
          relevantFormulas: [
            "P(A|B) = P(A ∩ B) / P(B), provided P(B) ≠ 0",
            "Rearranged: P(A ∩ B) = P(B) × P(A|B)",
            "Also: P(A ∩ B) = P(A) × P(B|A)",
            "Independence test: P(A|B) = P(A) ⟺ independent",
            "If P(B) = 0, conditional probability undefined"
          ],
          availableTools: ["vennDiagram", "vennDiagram1Set", "vennDiagram3", "twoWayTable"]
        },
        {
          id: "conditional-with-trees",
          title: "Conditional Probability with Trees",
          difficulty: "advanced",
          prerequisites: ["conditional-probability-formula", "trees-without-replacement"],
          masterySignals: "Student uses trees for conditional probability and Bayes' theorem in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conditional probability calculations using trees",
                "Accurate reverse probability calculations (Bayes' type)"
              ],
              qualitative: [
                "Recognizes tree branches show conditional probabilities naturally",
                "Calculates P(earlier event | later outcome) using Bayes' approach",
                "Finds P(outcome) by summing all paths to it",
                "Applies P(branch | outcome) = P(branch and outcome) / P(outcome)",
                "Solves diagnostic testing and classification problems"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with guidance on tree interpretation"],
              qualitative: [
                "Can use tree for forward probabilities but struggles with reverse",
                "Needs help setting up Bayes' calculation",
                "Can complete once structure is identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot use trees for conditional probability", "Confused by reverse probabilities"],
              qualitative: [
                "Does not see connection between trees and conditional probability",
                "Cannot calculate reverse probabilities",
                "Gets lost in Bayes' theorem calculations"
              ]
            }
          },
          learningObjectives: [
            "Recognize tree branches as conditional probabilities",
            "Calculate P(outcome) using law of total probability (sum all paths)",
            "Apply Bayes' theorem using tree diagram",
            "Calculate P(earlier stage | later outcome) - reverse probability",
            "Solve real-world problems: medical diagnosis, quality control"
          ],
          relevantFormulas: [
            "Tree branches show P(second | first) naturally",
            "Law of total probability: P(B) = Σ P(A_i) × P(B|A_i)",
            "Bayes' theorem: P(A|B) = P(A ∩ B) / P(B) = [P(A) × P(B|A)] / P(B)",
            "P(B) found by summing all paths to B",
            "Medical testing: P(disease | positive test) using Bayes"
          ],
          availableTools: ["probabilityTree"]
        },
        {
          id: "conditional-with-tables",
          title: "Conditional Probability with Two-Way Tables",
          difficulty: "advanced",
          prerequisites: ["conditional-with-trees"],
          masterySignals: "Student calculates conditional probabilities from two-way tables in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conditional probabilities from tables",
                "Accurate identification of row/column totals"
              ],
              qualitative: [
                "Identifies condition (given event) as row or column",
                "Finds intersection cell for both events",
                "Calculates P(A|B) = (cell value) / (row or column total for B)",
                "Reads tables in both directions for different conditionals",
                "Converts between tables, trees, and formulas"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with guidance on reading tables"],
              qualitative: [
                "Can read table but uncertain which total to use",
                "Needs help identifying row vs column for condition",
                "Can calculate once direction is clarified"
              ]
            },
            struggling: {
              quantitative: ["Cannot read conditional probabilities from tables", "Uses wrong totals"],
              qualitative: [
                "Does not understand table structure",
                "Cannot identify condition row/column",
                "Confuses numerator and denominator"
              ]
            }
          },
          learningObjectives: [
            "Read two-way tables (contingency tables) for categorical data",
            "Identify condition event (given) as row or column",
            "Calculate P(A|B) = (intersection cell) / (total for B)",
            "Read tables in both directions: P(A|B) vs P(B|A)",
            "Convert between table representation and formula"
          ],
          relevantFormulas: [
            "P(A|B) from table = (cell for A and B) / (row or column total for B)",
            "Look at the 'given' row or column only",
            "Example: P(Cat | Dog owner) = (cat and dog cell) / (total dog owners)",
            "Row totals for conditioning on row variable",
            "Column totals for conditioning on column variable"
          ],
          availableTools: ["twoWayTable"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Conditional Probability Concept (advanced) - Interpret P(A|B) and restricted sample space",
      "2. Conditional Probability Formula (advanced) - Apply P(A|B) = P(A ∩ B) / P(B)",
      "3. Conditional with Trees (advanced) - Use trees for Bayes' theorem and reverse probabilities",
      "4. Conditional with Tables (advanced) - Read conditional probabilities from two-way tables"
    ],

    keyFormulas: `• P(A|B) = "probability of A given B has occurred"
                  • P(A|B) = P(A ∩ B) / P(B)
                  • Rearranged: P(A ∩ B) = P(B) × P(A|B) = P(A) × P(B|A)
                  • Independence: P(A|B) = P(A) ⟺ A and B independent
                  • Bayes: P(A|B) = [P(A) × P(B|A)] / P(B)
                  • From table: P(A|B) = (cell) / (row or column total for B)`
  },

  's4-math-probability-applications': {
    displayName: 'Applications & Problem Solving',
    topicName: 'real-world applications and advanced probability problem-solving strategies',

    progressionStructure: {
      sections: [
        {
          id: "real-world-probability",
          title: "Real-World Probability Applications",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["conditional-probability-formula"],
          masterySignals: "Student solves real-world probability problems in diverse contexts in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions to contextualized problems",
                "Appropriate probability model selection"
              ],
              qualitative: [
                "Applies probability to games, medical testing, quality control",
                "Identifies independence vs dependence in real contexts",
                "Uses conditional probability for diagnostic scenarios",
                "Interprets results in context with appropriate units/conclusions",
                "Recognizes when complement strategy simplifies real problems"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with guidance on problem setup"],
              qualitative: [
                "Understands probability concepts but struggles with context translation",
                "Needs help identifying which probability rule applies",
                "Can solve once problem is translated to mathematical form"
              ]
            },
            struggling: {
              quantitative: ["Cannot set up real-world problems", "Misidentifies probability type"],
              qualitative: [
                "Does not see connection between context and probability rules",
                "Cannot translate word problems to probability statements",
                "Makes unrealistic interpretations"
              ]
            }
          },
          learningObjectives: [
            "Apply probability to games and gambling (fair games, expected outcomes)",
            "Solve medical testing problems (sensitivity, specificity, false positives)",
            "Address quality control scenarios (defect rates, batch sampling)",
            "Interpret probability results in context",
            "Recognize ethical implications of probability in decision-making"
          ],
          relevantFormulas: [
            "Fair game: P(win) × payoff = cost to play (expected value = 0)",
            "Medical: P(disease | positive) using Bayes' theorem",
            "Quality: P(defective) in sampling scenarios",
            "False positive rate, false negative rate",
            "Sensitivity = P(positive | disease), Specificity = P(negative | no disease)"
          ],
          availableTools: ["probabilityTree", "twoWayTable"]
        },
        {
          id: "at-least-at-most-problems",
          title: "'At Least' and 'At Most' Problems",
          difficulty: "advanced",
          prerequisites: ["complementary-events", "multiplication-rule"],
          masterySignals: "Student uses complement strategy for 'at least one' problems in 3+ cases",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions using complement strategy",
                "Strategic recognition when complement simplifies"
              ],
              qualitative: [
                "Recognizes 'at least one' = 'NOT none'",
                "Applies P(at least one) = 1 - P(none) efficiently",
                "Solves 'at most k' by adding P(0) + P(1) + ... + P(k)",
                "Chooses complement vs direct based on simplicity",
                "Extends to 'at least k' problems"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with reminders to use complement"],
              qualitative: [
                "Understands complement strategy but doesn't think of it first",
                "Needs prompting to recognize 'NOT none'",
                "Can apply complement once strategy is suggested"
              ]
            },
            struggling: {
              quantitative: ["Attempts direct calculation for 'at least one'", "Cannot handle multiple cases"],
              qualitative: [
                "Does not see complement connection",
                "Gets overwhelmed by many cases to add",
                "Cannot identify when complement is simpler"
              ]
            }
          },
          learningObjectives: [
            "Recognize 'at least one' problems benefit from complement",
            "Apply P(at least one) = 1 - P(none)",
            "Solve 'at most k' by adding probabilities for 0, 1, ..., k outcomes",
            "Choose between complement and direct approach strategically",
            "Extend to more complex 'at least'/'at most' scenarios"
          ],
          relevantFormulas: [
            "P(at least one) = 1 - P(none)",
            "P(at least k) = 1 - P(fewer than k) = 1 - [P(0) + ... + P(k-1)]",
            "P(at most k) = P(0) + P(1) + ... + P(k)",
            "Complement useful when 'none' is single outcome, 'at least one' is many",
            "Example: P(at least one 6 in 4 rolls) = 1 - P(no 6 in 4 rolls) = 1 - (5/6)⁴"
          ],
          availableTools: []
        },
        {
          id: "complex-probability-problems",
          title: "Complex Probability Problem Solving",
          difficulty: "advanced",
          prerequisites: ["conditional-with-tables", "at-least-at-most-problems"],
          masterySignals: "Student solves multi-step problems combining multiple probability concepts in 3+ cases",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions to complex multi-step problems",
                "Successful integration of multiple probability rules"
              ],
              qualitative: [
                "Breaks complex problems into manageable steps",
                "Identifies which probability rules apply at each step",
                "Combines addition, multiplication, conditional, and complement rules",
                "Uses appropriate visualization (tree, Venn, table) for problem type",
                "Explains solution strategy and verifies reasonableness of answer"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with step-by-step guidance"],
              qualitative: [
                "Can solve individual steps but struggles to combine",
                "Needs help identifying which tool/rule to use",
                "Can complete once problem is broken down"
              ]
            },
            struggling: {
              quantitative: ["Overwhelmed by complex problems", "Cannot identify first step"],
              qualitative: [
                "Does not know how to start multi-step problems",
                "Cannot determine which rules apply",
                "Makes conceptual errors mixing different rules"
              ]
            }
          },
          learningObjectives: [
            "Analyze complex probability problems systematically",
            "Identify and apply multiple probability rules in sequence",
            "Combine addition, multiplication, conditional probability, and complements",
            "Choose appropriate visualization or organizational tool",
            "Verify solutions for reasonableness and completeness"
          ],
          relevantFormulas: [
            "Problem-solving framework: identify type, draw diagram, apply rules, verify",
            "Law of total probability: P(B) = Σ P(A_i) × P(B|A_i)",
            "Multiplication principle for counting outcomes",
            "Systematic case analysis for OR conditions",
            "Check: probabilities in [0,1], probabilities of exhaustive events sum to 1"
          ],
          availableTools: ["probabilityTree", "twoWayTable"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Real-World Probability (intermediate→advanced) - Apply to games, medical testing, quality control",
      "2. 'At Least'/'At Most' (advanced) - Use complement strategy P(at least one) = 1 - P(none)",
      "3. Complex Problem Solving (advanced) - Combine multiple rules, multi-step reasoning"
    ],

    keyFormulas: `• P(at least one) = 1 - P(none) | P(at most k) = P(0) + ... + P(k)
                  • Fair game: expected value = 0
                  • Bayes: P(cause | effect) in real contexts
                  • Problem-solving: identify type, visualize, apply rules, verify
                  • Law of total probability: sum over all paths`
  }
};
