/**
 * Topic ID Naming Convention:
 * {grade}-{subject}-{topic}-{subtopic}
 *
 * Examples:
 * - p6-math-fractions-dividing-whole-numbers
 * - p6-math-fractions-adding-same-denominator
 * - p6-math-decimals-multiplication
 * - s1-math-algebra-linear-equations
 */

export interface SolutionStep {
  stepNumber: number;
  title: string;
  instruction: string;
  mathSummary?: string; // Only for the final step - provides mathematical explanation
}

export interface SolutionStepsConfig {
  templates: {
    [templateId: string]: SolutionStep[];
  };
  problemTypeMapping: {
    [problemType: number]: string;
  };
}


export interface ProblemTypeConfig {
  totalTypes: number;
  progressionThresholds: number[];
  completionScore: number;
}

export interface ScoringConfigForType {
  basePoints: number;
  hintPenalties: {
    first: number;
    second: number;
    thirdPlus: number;
  };
}

export const P6_MATH_FRACTIONS = {
  "p6-math-fractions-dividing-whole-numbers": {
    topicName: "dividing proper fractions by whole numbers",
    displayName: "Dividing Fractions by Whole Numbers",

    PROBLEM_TYPE_CONFIG: {
      totalTypes: 4,
      progressionThresholds: [0.15, 0.30, 0.50],
      completionScore: 1.0
    },

    QUESTION_GENERATION: {
      1: `Generate a word problem for dividing a proper fraction by a whole number.

Examples of appropriate problems:
- "You have 3/4 of a chocolate bar and want to share it equally among 3 friends. How much does each friend get?"
- "You have 1/2 of a meter of ribbon. If you cut it into 4 equal pieces for a craft project, how long is each piece?"

Context: use items like chocolate bar, ribbon, fabric, juice, or any object that is NOT circular as we have a separate problem type for pizzas

Guidelines:
- Use simple fractions (1/2, 1/3, 2/3, 1/4, 3/4)
- Use small whole numbers (2, 3, 4)
- Use relatable, everyday contexts
- Keep language simple and friendly
- Ensure the result is a proper fraction

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`,

      2: `Generate a word problem for dividing a proper fraction by a whole number.

Examples of appropriate problems:
- "A pizza is cut into 4 equal slices. If you have 2/3 of the pizza, how many slices do you have?"

Context: use items like pizza, pie, cake, or any circular object


Guidelines:
- Use simple fractions (1/2, 1/3, 2/3, 1/4, 3/4)
- Use small whole numbers (2, 3, 4)
- Use relatable, everyday contexts
- Keep language simple and friendly
- Ensure the result is a proper fraction

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`,

      3: `Generate a word problem for dividing a proper fraction by a whole number.

Examples of appropriate problems:
- "Sarah has 3/5 of a ribbon. She needs to cut it into 4 equal pieces for an art project. How long is each piece?"
- "A recipe uses 5/6 cup of milk. If you want to divide it equally among 3 portions, how much milk per portion?"

Guidelines:
- Use fractions with denominators 5-8
- Use whole numbers 3-6
- Create contexts that require some thinking
- The result might not simplify neatly

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`,

      4: `Generate a word problem for dividing a proper fraction by a whole number.

Examples of appropriate problems:
- "A contractor has 7/8 of a tin of paint left. If he uses equal amounts for 5 different rooms, how much paint is used per room?"
- "You have 5/12 of your monthly data allowance left. Dividing it equally across 4 devices, what fraction does each device get?"

Guidelines:
- Use fractions with denominators 7-12
- Use whole numbers 4-8
- Create contexts that require multi-step thinking
- Include scenarios where simplification is needed

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`
    },

    SOLUTION_STEPS: {
      templates: {
        "basic-fraction-division": [
          {
            stepNumber: 1,
            title: "Start with the whole",
            instruction: "Describe how the whole item (e.g., chocolate bar, pizza, ribbon) is divided into {denominator} equal parts. For example: 'The chocolate bar is divided into 4 equal pieces' or 'The pizza is cut into 3 equal slices.'"
          },
          {
            stepNumber: 2,
            title: "Show what we have",
            instruction: "Explain that we have {numerator} out of {denominator} parts. For example: 'We have 3/4 of the bar, which means 3 out of 4 pieces' or 'We have 2 out of 3 slices = 2/3 of the pizza.'"
          },
          {
            stepNumber: 3,
            title: "Divide into equal parts but careful of special cases",
            instruction: "Explain dividing each of the {numerator} pieces into {divisor} equal parts. Calculate and state the total number of small pieces: {numerator} × {divisor} only when {numerator} is not equal to {divisor} . as this isspecial cases where it's simply 1 part for each. For e.g.:'Divide each of the 3 pieces into 3 parts should not make 9 parts but simply 1 part for each. So we still have 3 parts total.'"
          },
          {
            stepNumber: 4,
            title: "Final answer",
            instruction: "Briefly explain how pieces are distributed equally. State each person/group gets {numerator} out of {denominator × divisor} total pieces. Simplify if needed. Example: 'Each friend gets 3/12 = 1/4 of the bar.' Keep it concise - 1-2 sentences max."
          }
        ]
      },
      problemTypeMapping: {
        1: "basic-fraction-division",
        2: "basic-fraction-division",
        3: "basic-fraction-division",
        4: "basic-fraction-division"
      }
    },

    VISUALIZATION_CONFIG: {
      1: {
        visualizationId: "bar-division",
        includeVisualization: true,
        dataSchema: {
          // Core problem data
          numerator: { type: "number", description: "numerator of the fraction" },
          denominator: { type: "number", description: "denominator of the fraction" },
          divisor: { type: "number", description: "whole number divisor" },
          context: { type: "string", description: "object name (chocolate, ribbon, etc.)" },
          problem_summary: { type: "string", description: "problem summary" },
          result_unit: { type: "string", description: "unit text (e.g., 'of chocolate bar')" },

          // Visualizer-specific structure
          stages: {
            type: "array",
            count: 4,
            description: "4-step visualization stages",
            itemSchema: {
              id: { type: "string", description: "Step1, Step2 …" },
              title: { type: "string", description: "Step 1 title, Step 2 title…" },
              description: { type: "string", description: "Step 1 content, Step 2 content" }
            }
          },

          mathSummary: {
            type: "object",
            fields: {
              problem: { type: "string", description: "describe the problem briefly" },
              solution: { type: "string", description: "provide solution" },
              explanation: { type: "string", description: "concluding remark based on the context" }
            }
          }
        }
      },
      2: {
        visualizationId: "circular-division",
        includeVisualization: true,
        dataSchema: {
          // Core problem data
          numerator: { type: "number", description: "numerator of the fraction" },
          denominator: { type: "number", description: "denominator of the fraction" },
          divisor: { type: "number", description: "whole number divisor" },
          context: { type: "string", description: "object name (pizza, pie, etc.)" },
          problem_summary: { type: "string", description: "problem summary" },
          result_unit: { type: "string", description: "unit text (e.g., 'of a whole pizza)" },

          // Visualizer-specific structure
          stages: {
            type: "array",
            count: 4,
            description: "4-step visualization stages",
            itemSchema: {
              id: { type: "string", description: "Step1, Step2 …" },
              title: { type: "string", description: "Step 1 title, Step 2 title…" },
              description: { type: "string", description: "Step 1 content, Step 2 content" }
            }
          },

          mathSummary: {
            type: "object",
            fields: {
              problem: { type: "string", description: "equation format: '3/4 ÷ 3 = ?'" },
              solution: { type: "string", description: "solved equation: '3/4 ÷ 3 = 1/4'" },
              explanation: { type: "string", description: "1-sentence explanation" }
            }
          }
        }
      },
      3: {
        visualizationId: null,
        includeVisualization: false,
        dataSchema: {
          // Text-only solution - no visualization data needed
          stages: {
            type: "array",
            count: 4,
            description: "4-step solution stages for plain text display",
            itemSchema: {
              id: { type: "string", description: "Step1, Step2, Step3, Step4" },
              title: { type: "string", description: "Step title (e.g., 'Start with the whole')" },
              description: { type: "string", description: "Step explanation text" }
            }
          },

          mathSummary: {
            type: "object",
            fields: {
              problem: { type: "string", description: "describe the problem briefly" },
              solution: { type: "string", description: "provide solution" },
              explanation: { type: "string", description: "concluding remark based on the context" }
            }
          }
        }
      },
      4: {
        visualizationId: null,
        includeVisualization: false,
        dataSchema: {
          // Text-only solution - no visualization data needed
          stages: {
            type: "array",
            count: 4,
            description: "4-step solution stages for plain text display",
            itemSchema: {
              id: { type: "string", description: "Step1, Step2, Step3, Step4" },
              title: { type: "string", description: "Step title (e.g., 'Start with the whole')" },
              description: { type: "string", description: "Step explanation text" }
            }
          },

          mathSummary: {
            type: "object",
            fields: {
              problem: { type: "string", description: "describe the problem briefly" },
              solution: { type: "string", description: "provide solution" },
              explanation: { type: "string", description: "concluding remark based on the context" }
            }
          }
        }
      }
    },

    SCORING_CONFIG: {
      1: {
        basePoints: 0.05,
        hintPenalties: { first: 0.01, second: 0.02, thirdPlus: 0.03 }
      },
      2: {
        basePoints: 0.05,
        hintPenalties: { first: 0.01, second: 0.02, thirdPlus: 0.03 }
      },      
      3: {
        basePoints: 0.15,
        hintPenalties: { first: 0.03, second: 0.05, thirdPlus: 0.1 }
      },
      4: {
        basePoints: 0.20,
        hintPenalties: { first: 0.05, second: 0.07, thirdPlus: 0.10 }
      }
    }
  },

  "p6-math-fractions-whole-number-dividing-fractions": {
    topicName: "dividing whole numbers by proper fractions",
    displayName: "Dividing Whole Numbers by Fractions",

    PROBLEM_TYPE_CONFIG: {
      totalTypes: 3,
      progressionThresholds: [0.2, 0.5],
      completionScore: 1.0
    },

    QUESTION_GENERATION: {
      1: `Generate a word problem for dividing a whole number by a proper fraction.

Examples of appropriate problems:
- "How many 1/2-cup servings can you make from 3 cups of juice?"
- "You have 4 meters of ribbon. How many pieces can you cut if each piece is 1/4 meter long?"
- "A pizza recipe serves 2 people. How many people can you serve with 6 pizzas if each person gets 1/3 of a pizza?"

Guidelines:
- Use small whole numbers (2, 3, 4, 5, 6)
- Use unit fractions (1/2, 1/3, 1/4, 1/5) or simple fractions
- Use everyday situations like cooking, crafting, sharing
- Results should always be a whole numbers

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`,

      2: `Generate a word problem for dividing a whole number by a proper fraction.

Examples of appropriate problems:
- "A 6-meter rope is cut into pieces that are each 2/3 meter long. How many pieces can you make?"
- "Tom has 8 cups of flour. Each batch of cookies needs 3/4 cup. How many full batches can he make?"
- "A garden plot is 5 square meters. If each plant needs 2/5 square meters, how many plants can you grow?"

Guidelines:
- Use whole numbers 4-8
- Use fractions like 2/3, 3/4, 2/5, 3/5, 4/5
- Create practical scenarios (construction, cooking, gardening)
- Final answer should NOT be a whole number

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`,

      3: `Generate a word problem for dividing a whole number by a proper fraction.

Examples of appropriate problems:
- "A factory produces 12 kg of chocolate per day. Each chocolate bar requires 3/8 kg of chocolate. How many bars can be made per day?"
- "A carpenter has 15 meters of wood. Each shelf requires 5/6 meters. How many complete shelves can be made?"
- "A water tank holds 20 liters. If each bottle holds 4/7 liters, how many bottles can be filled completely?"

Guidelines:
- Use larger whole numbers (8-20)
- Use more complex fractions (3/8, 5/6, 4/7, 7/9, 5/8)
- Focus on practical applications and efficiency
- Results often involve remainders and decision-making

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`
    },

    SOLUTION_STEPS: {
      templates: {
        "basic-whole-number-fraction-division": [
          {
            stepNumber: 1,
            title: "Start with the whole",
            instruction: "State that we have x number of whole items (e.g., cups of juice, meters of ribbon, pizzas). For example: 'We have 3 cups of juice' or 'We have 4 meters of ribbon.'"
          },
          {
            stepNumber: 2,
            title: "Divide the whole into fractional parts",
            instruction: "Explain that we divide the whole into parts based on the fraction denominator. For example: 'Each cup is divided into 2 equal parts since we are using 1/2 cups' or 'Each pizza is cut into 3 equal slices since each person gets 1/3 of a pizza.'"
          },
          {
            stepNumber: 3,
            title: "Group the parts",
            instruction: "Group the total parts into sets based on the fraction numerator. State if there is remainder and it cannot be grouped evenly."
          },
          {
            stepNumber: 4,
            title: "Final answer",
            instruction: "Count all the groups formed. State the final answer clearly. For example: 'We can make 6 servings of 1/2 cup from 3 cups of juice' or 'we can make only 10 batches of cookies with 8 cups of flour, with some flour left over.'"
          }
        ]
      },
      problemTypeMapping: {
        1: "basic-whole-number-fraction-division",
        2: "basic-whole-number-fraction-division",
        3: "basic-whole-number-fraction-division"
      }
    },

    VISUALIZATION_CONFIG: {
      1: {
        visualizationId: "whole-number-fraction-division",
        includeVisualization: true,
        dataSchema: {
          // Core problem data
          initial_number: { type: "number", description: "initial whole number" },
          numerator: { type: "number", description: "numerator of the fraction" },
          denominator: { type: "number", description: "denominator of the fraction" },
          context: { type: "string", description: "object name (chocolate, ribbon, etc.)" },
          problem_summary: { type: "string", description: "problem summary" },
          result_unit: { type: "string", description: "unit text that will go with the final answer" },

          // Visualizer-specific structure
          stages: {
            type: "array",
            count: 4,
            description: "4-step visualization stages",
            itemSchema: {
              id: { type: "string", description: "Step1, Step2 …" },
              title: { type: "string", description: "Step 1 title, Step 2 title…" },
              description: { type: "string", description: "Step 1 content, Step 2 content" }
            }
          },

          mathSummary: {
            type: "object",
            fields: {
              problem: { type: "string", description: "describe the original problem briefly" },
              solution: { type: "string", description: "solve the division using the flip rule" },
              explanation: { type: "string", description: "1-2 sentence context based conclusion" }
            }
          }
        }
      },

      2: {
        visualizationId: "whole-number-fraction-division",
        includeVisualization: true,
        dataSchema: {
          // Core problem data
          initial_number: { type: "number", description: "initial whole number" },
          numerator: { type: "number", description: "numerator of the fraction" },
          denominator: { type: "number", description: "denominator of the fraction" },
          context: { type: "string", description: "object name (chocolate, ribbon, etc.)" },
          problem_summary: { type: "string", description: "problem summary" },
          result_unit: { type: "string", description: "unit text that will go with the final answer" },

          // Visualizer-specific structure
          stages: {
            type: "array",
            count: 4,
            description: "4-step visualization stages",
            itemSchema: {
              id: { type: "string", description: "Step1, Step2 …" },
              title: { type: "string", description: "Step 1 title, Step 2 title…" },
              description: { type: "string", description: "Step 1 content, Step 2 content" }
            }
          },

          mathSummary: {
            type: "object",
            fields: {
              problem: { type: "string", description: "describe the original problem briefly" },
              solution: { type: "string", description: "solve the division using the flip rule" },
              explanation: { type: "string", description: "1-2 sentence context based conclusion" }
            }
          }
        }
      },
      3: {
        visualizationId: "null",
        includeVisualization: false,
        dataSchema: {
          // Visualizer-specific structure
          stages: {
            type: "array",
            count: 4,
            description: "4-step visualization stages",
            itemSchema: {
              id: { type: "string", description: "Step1, Step2 …" },
              title: { type: "string", description: "Step 1 title, Step 2 title…" },
              description: { type: "string", description: "Step 1 content, Step 2 content" }
            }
          },

          mathSummary: {
            type: "object",
            fields: {
              problem: { type: "string", description: "describe the original problem briefly" },
              solution: { type: "string", description: "solve the division using the flip rule" },
              explanation: { type: "string", description: "1-2 sentence context based conclusion" }
            }
          }
        }
      }
    },

    SCORING_CONFIG: {
      1: {
        basePoints: 0.1,
        hintPenalties: { first: 0.01, second: 0.02, thirdPlus: 0.05 }
      },
      2: {
        basePoints: 0.15,
        hintPenalties: { first: 0.02, second: 0.04, thirdPlus: 0.07 }
      },
      3: {
        basePoints: 0.30,
        hintPenalties: { first: 0.07, second: 0.12, thirdPlus: 0.20 }
      }
    }
  },

  "p6-math-fractions-fraction-dividing-fraction": {
    topicName: "dividing proper fractions by proper fractions",
    displayName: "Dividing Fractions by Fractions",

    PROBLEM_TYPE_CONFIG: {
      totalTypes: 3,
      progressionThresholds: [0.2, 0.5],
      completionScore: 1.0
    },

    QUESTION_GENERATION: {
      1: `Generate a word problem for dividing a proper fraction by a proper fraction.

Examples of appropriate problems:
- "You have 1/2 cup of milk. How many 1/4-cup servings can you make?"
- "A ribbon is 3/4 meter long. How many 1/8-meter pieces can you cut from it?"
- "You have 2/3 of a pizza. If each person gets 1/6 of the whole pizza, how many people can you serve?"

Guidelines:
- Use simple denominators (2, 4, 6, 8)
- Choose fraction pairs that result in whole number answers

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`,

      2: `Generate a word problem for dividing a proper fraction by a proper fraction.

Examples of appropriate problems:
- "A baker has 5/6 cup of flour. How many 1/12-cup portions can be made?"
- "You have 4/5 meter of fabric. How many 1/10-meter strips can you cut?"
- "A recipe needs 2/3 cup sugar total. If you add 1/9 cup at a time, how many scoops are needed?"

Guidelines:
- Use denominators up to 12
- Choose fraction pairs that result in whole number answers if it's a real life situation like number of scoops or pizza slices

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`,

      3: `Generate a word problem for dividing a proper fraction by a proper fraction.

Examples of appropriate problems:
- "A water tank holds 7/8 liters. If each bottle holds 1/16 liter, how many bottles can be filled completely?"
- "You have 5/6 kg of chocolate. How many 1/12-kg bars can you make?"
- "A garden plot is 11/12 square meters. How many 1/16-square-meter sections fit completely?"

Guidelines:
- Use denominators up to 16
- Choose fraction pairs that result in whole number answers if it's a real life situation like number of scoops or pizza slices

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`
    },

    SOLUTION_STEPS: {
      templates: {
        "fraction-dividing-fraction": [
          {
            stepNumber: 1,
            title: "Understand what we have",
            instruction: "State the initial fraction (dividend) clearly with context. For example: 'We have {numerator1}/{denominator1} {unit}' (e.g., 'We have 5/6 cup of flour' or 'We have 3/4 meter of ribbon')."
          },
          {
            stepNumber: 2,
            title: "Find common denominator",
            instruction: "Convert both fractions to the same denominator (LCD - Least Common Denominator). Explain the conversion clearly. For example: '{numerator1}/{denominator1} equals {converted_numerator1}/{lcd}' and 'Each portion is {numerator2}/{denominator2} which equals {converted_numerator2}/{lcd}'."
          },
          {
            stepNumber: 3,
            title: "Count the portions",
            instruction: "Count how many {converted_numerator2}/{lcd} portions fit into {converted_numerator1}/{lcd}. Show the simple division: {converted_numerator1} ÷ {converted_numerator2} = {result}. Make it concrete: 'We have {converted_numerator1} parts, and each portion needs {converted_numerator2} parts, so {converted_numerator1} ÷ {converted_numerator2} = {result}'."
          },
          {
            stepNumber: 4,
            title: "Final answer",
            instruction: "State the answer clearly with context. For whole number results: 'We can make {result} portions' or 'You can get {result} servings'. For fractional results: 'The answer is {result_fraction} {unit}'. Always relate back to the original problem context."
          }
        ]
      },
      problemTypeMapping: {
        1: "fraction-dividing-fraction",
        2: "fraction-dividing-fraction",
        3: "fraction-dividing-fraction"
      }
    },

    VISUALIZATION_CONFIG: {
      1: {
        visualizationId: "fraction-fraction-division",
        includeVisualization: true,
        dataSchema: {
          // Dividend fraction (first fraction)
          numerator1: { type: "number", description: "numerator of dividend fraction" },
          denominator1: { type: "number", description: "denominator of dividend fraction" },

          // Divisor fraction (second fraction)
          numerator2: { type: "number", description: "numerator of divisor fraction" },
          denominator2: { type: "number", description: "denominator of divisor fraction" },

          // Calculated values for visualization
          lcd: { type: "number", description: "least common denominator of both fractions" },
          converted_numerator1: { type: "number", description: "dividend numerator when converted to LCD" },
          converted_numerator2: { type: "number", description: "divisor numerator when converted to LCD" },
          result: { type: "number", description: "final answer (whole number or fraction as decimal)" },
          result_fraction: { type: "string", description: "result as fraction string if not whole number (e.g., '3/4')" },

          // Context information
          context: { type: "string", description: "object name (flour, milk, ribbon, fabric, etc.)" },
          problem_summary: { type: "string", description: "brief problem summary" },
          result_unit: { type: "string", description: "unit text for final answer (e.g., 'portions', 'servings', 'pieces')" },

          // Visualization stages
          stages: {
            type: "array",
            count: 5,
            description: "5-step visualization stages",
            itemSchema: {
              id: { type: "string", description: "Step0, Step1, Step2, Step3, Step4" },
              title: { type: "string", description: "Step title" },
              description: { type: "string", description: "Step explanation" }
            }
          },

          mathSummary: {
            type: "object",
            fields: {
              problem: { type: "string", description: "equation format: '5/6 ÷ 1/12 = ?'" },
              solution: { type: "string", description: "complete solution with steps" },
              explanation: { type: "string", description: "contextual explanation relating to the problem" }
            }
          }
        }
      },
      2: {
        visualizationId: "fraction-fraction-division",
        includeVisualization: true,
        dataSchema: {
          // Same as type 1
          numerator1: { type: "number", description: "numerator of dividend fraction" },
          denominator1: { type: "number", description: "denominator of dividend fraction" },
          numerator2: { type: "number", description: "numerator of divisor fraction" },
          denominator2: { type: "number", description: "denominator of divisor fraction" },
          lcd: { type: "number", description: "least common denominator of both fractions" },
          converted_numerator1: { type: "number", description: "dividend numerator when converted to LCD" },
          converted_numerator2: { type: "number", description: "divisor numerator when converted to LCD" },
          result: { type: "number", description: "final answer (whole number or fraction as decimal)" },
          result_fraction: { type: "string", description: "result as fraction string if not whole number" },
          context: { type: "string", description: "object name" },
          problem_summary: { type: "string", description: "brief problem summary" },
          result_unit: { type: "string", description: "unit text for final answer" },

          stages: {
            type: "array",
            count: 5,
            description: "5-step visualization stages",
            itemSchema: {
              id: { type: "string", description: "Step0, Step1, Step2, Step3, Step4" },
              title: { type: "string", description: "Step title" },
              description: { type: "string", description: "Step explanation" }
            }
          },

          mathSummary: {
            type: "object",
            fields: {
              problem: { type: "string", description: "equation format" },
              solution: { type: "string", description: "complete solution with steps" },
              explanation: { type: "string", description: "contextual explanation" }
            }
          }
        }
      },
      3: {
        visualizationId: null,
        includeVisualization: false,
        dataSchema: {
          // Text-only solution - no visualization
          stages: {
            type: "array",
            count: 4,
            description: "4-step solution stages for plain text display",
            itemSchema: {
              id: { type: "string", description: "Step1, Step2, Step3, Step4" },
              title: { type: "string", description: "Step title" },
              description: { type: "string", description: "Step explanation text" }
            }
          },

          mathSummary: {
            type: "object",
            fields: {
              problem: { type: "string", description: "equation format" },
              solution: { type: "string", description: "complete solution" },
              explanation: { type: "string", description: "mathematical explanation" }
            }
          }
        }
      }
    },

    SCORING_CONFIG: {
      1: {
        basePoints: 0.1,
        hintPenalties: { first: 0.01, second: 0.02, thirdPlus: 0.05 }
      },
      2: {
        basePoints: 0.15,
        hintPenalties: { first: 0.02, second: 0.04, thirdPlus: 0.07 }
      },
      3: {
        basePoints: 0.30,
        hintPenalties: { first: 0.07, second: 0.12, thirdPlus: 0.20 }
      }
    }
  },

  "p6-math-fractions-word-problems": {
    topicName: "solving fraction word problems",
    displayName: "Word Problems",

    PROBLEM_TYPE_CONFIG: {
      totalTypes: 3,
      progressionThresholds: [0.2, 0.5],
      completionScore: 1.0
    },

    QUESTION_GENERATION: {
      1: `Generate a fraction word problem appropriate for Primary 6 students.

Examples of appropriate problems:
- "Nina had 2 m of lace that she used for making bows. If she needed 2/7 m of lace for each bow, how many bows did she make?"
- "Mr. Lee buys 25 kg of decorative shells from a wholesale market. He then repacks the shells into small bags of 1/4 kg each. How many bags does he get?"

Guidelines:
- Use simple fractions (1/2, 1/3, 1/4, 2/7, etc.)
- Use everyday contexts like crafts, cooking, shopping
- Keep problems straightforward with clear division operations
- Results should be whole numbers or simple fractions
- Use relatable quantities and measurements

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`,

      2: `Generate a fraction word problem appropriate for Primary 6 students.

Examples of appropriate problems:
- "A chemist fills 5 litres of perfume into bottles that have a capacity of 2/11 litre each. In the end, there is one bottle that is not completely filled. How much perfume does that bottle contain?"

Guidelines:
- Use more complex fractions (2/11, 3/8, 5/12, etc.)
- Include scenarios with remainders or partial quantities
- Use professional or scientific contexts
- Require students to think about what happens to leftover amounts
- May involve multiple steps or considerations

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`,

      3: `Generate a fraction word problem appropriate for Primary 6 students.

Examples of appropriate problems:
- "Mr. Lee buys 25 kg of decorative shells from a wholesale market. He then repacks the shells into small bags of 1/4 kg each. If he sells each bag at $3.50, how much money does he collect from the sale of all bags?"

Guidelines:
- Combine fraction operations with other mathematical concepts (money, measurement)
- Use multi-step problems requiring division and multiplication
- Include business or real-world application contexts
- Require students to find intermediate results before final answer
- May involve converting between different units or concepts

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`
    },

    VISUALIZATION_CONFIG: {
      1: {
        visualizationId: "bar-division-simple"
      },
      2: {
        visualizationId: "bar-division-complex"
      },
      3: {
        visualizationId: "step-by-step-solution"
      }
    },

    SCORING_CONFIG: {
      1: {
        basePoints: 0.11,
        hintPenalties: { first: 0.01, second: 0.02, thirdPlus: 0.11 }
      },
      2: {
        basePoints: 0.22,
        hintPenalties: { first: 0.01, second: 0.02, thirdPlus: 0.22 }
      },
      3: {
        basePoints: 0.43,
        hintPenalties: { first: 0.02, second: 0.04, thirdPlus: 0.43 }
      }
    }
  }
};

export type TopicId = keyof typeof P6_MATH_FRACTIONS;
export type SubtopicConfig = typeof P6_MATH_FRACTIONS[TopicId];