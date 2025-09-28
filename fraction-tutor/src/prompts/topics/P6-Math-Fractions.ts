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

export const P6_MATH_FRACTIONS = {
  "p6-math-fractions-dividing-whole-numbers": {
    topicName: "dividing proper fractions by whole numbers",
    displayName: "Dividing Fractions by Whole Numbers",

    QUESTION_GENERATION: {
      easy: `Generate a word problem for dividing a proper fraction by a whole number.

Examples of appropriate problems:
- "You have 1/2 of a chocolate bar and want to share it equally among 3 friends. How much does each friend get?"
- "There's 2/3 of a pizza left. If we divide it equally between 2 people, what's each person's share?"

Guidelines:
- Use simple fractions (1/2, 1/3, 2/3, 1/4, 3/4)
- Use small whole numbers (2, 3, 4)
- Use relatable, everyday contexts
- Keep language simple and friendly
- Ensure the result is a proper fraction

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`,

      medium: `Generate a word problem for dividing a proper fraction by a whole number.

Examples of appropriate problems:
- "Sarah has 3/5 of a ribbon. She needs to cut it into 4 equal pieces for an art project. How long is each piece?"
- "A recipe uses 5/6 cup of milk. If you want to divide it equally among 3 portions, how much milk per portion?"

Guidelines:
- Use fractions with denominators 5-8
- Use whole numbers 3-6
- Create contexts that require some thinking
- The result might not simplify neatly

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`,

      hard: `Generate a word problem for dividing a proper fraction by a whole number.

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

    VISUALIZATION_CONFIG: {
      easy: {
        visualizationId: "bar-division-simple"
      },
      medium: {
        visualizationId: "bar-division-complex"
      },
      hard: {
        visualizationId: "bar-division-complex"
      }
    },

    SCORING_CONFIG: {
      points: {
        easy: 0.11,
        medium: 0.22,
        hard: 0.43
      },
      hintPenalties: {
        easy: { first: 0.01, second: 0.02, thirdPlus: 0.11 },
        medium: { first: 0.01, second: 0.02, thirdPlus: 0.22 },
        hard: { first: 0.02, second: 0.04, thirdPlus: 0.43 }
      }
    }
  },

  "p6-math-fractions-whole-number-dividing-fractions": {
    topicName: "dividing whole numbers by proper fractions",
    displayName: "Dividing Whole Numbers by Fractions",

    QUESTION_GENERATION: {
      easy: `Generate a word problem for dividing a whole number by a proper fraction.

Examples of appropriate problems:
- "How many 1/2-cup servings can you make from 3 cups of juice?"
- "You have 4 meters of ribbon. How many pieces can you cut if each piece is 1/4 meter long?"
- "A pizza recipe serves 2 people. How many people can you serve with 6 pizzas if each person gets 1/3 of a pizza?"

Guidelines:
- Use small whole numbers (2, 3, 4, 5, 6)
- Use unit fractions (1/2, 1/3, 1/4, 1/5) or simple fractions
- Focus on "how many groups" or "how many servings" contexts
- Use everyday situations like cooking, crafting, sharing
- Results should be simple whole numbers when possible

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`,

      medium: `Generate a word problem for dividing a whole number by a proper fraction.

Examples of appropriate problems:
- "A 6-meter rope is cut into pieces that are each 2/3 meter long. How many pieces can you make?"
- "Tom has 8 cups of flour. Each batch of cookies needs 3/4 cup. How many full batches can he make?"
- "A garden plot is 5 square meters. If each plant needs 2/5 square meters, how many plants can you grow?"

Guidelines:
- Use whole numbers 4-10
- Use fractions like 2/3, 3/4, 2/5, 3/5, 4/5
- Create practical scenarios (construction, cooking, gardening)
- Results may include remainders or mixed numbers
- Encourage thinking about "how many groups fit"

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`,

      hard: `Generate a word problem for dividing a whole number by a proper fraction.

Examples of appropriate problems:
- "A factory produces 12 kg of chocolate per day. Each chocolate bar requires 3/8 kg of chocolate. How many bars can be made per day?"
- "A carpenter has 15 meters of wood. Each shelf requires 5/6 meters. How many complete shelves can be made?"
- "A water tank holds 20 liters. If each bottle holds 4/7 liters, how many bottles can be filled completely?"

Guidelines:
- Use larger whole numbers (8-20)
- Use more complex fractions (3/8, 5/6, 4/7, 7/9, 5/8)
- Create industrial or professional contexts
- Focus on practical applications and efficiency
- Results often involve remainders and decision-making

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`
    },

    VISUALIZATION_CONFIG: {
      easy: {
        visualizationId: "grouping-model"
      },
      medium: {
        visualizationId: "grouping-model"
      },
      hard: {
        visualizationId: "grouping-model"
      }
    },

    SCORING_CONFIG: {
      points: {
        easy: 0.11,
        medium: 0.22,
        hard: 0.43
      },
      hintPenalties: {
        easy: { first: 0.01, second: 0.02, thirdPlus: 0.11 },
        medium: { first: 0.01, second: 0.02, thirdPlus: 0.22 },
        hard: { first: 0.02, second: 0.04, thirdPlus: 0.43 }
      }
    }
  },

  "p6-math-fractions-fraction-dividing-fraction": {
    topicName: "dividing proper fractions by proper fractions",
    displayName: "Dividing Fractions by Fractions",

    QUESTION_GENERATION: {
      easy: `Generate a word problem for dividing a proper fraction by a proper fraction.

Examples of appropriate problems:
- "You have 1/2 cup of milk. How many 1/4-cup servings can you make?"
- "A ribbon is 3/4 meter long. How many 1/8-meter pieces can you cut from it?"
- "You have 2/3 of a pizza. If each person gets 1/6 of the whole pizza, how many people can you serve?"

Guidelines:
- Use simple denominators (2, 4, 6, 8)
- Choose fraction pairs that result in whole number answers if it's a real life situation like number of scoops or pizza slices

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`,

      medium: `Generate a word problem for dividing a proper fraction by a proper fraction.

Examples of appropriate problems:
- "A baker has 5/6 cup of flour. How many 1/12-cup portions can be made?"
- "You have 4/5 meter of fabric. How many 1/10-meter strips can you cut?"
- "A recipe needs 2/3 cup sugar total. If you add 1/9 cup at a time, how many scoops are needed?"

Guidelines:
- Use denominators up to 12
- Choose fraction pairs that result in whole number answers if it's a real life situation like number of scoops or pizza slices

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`,

      hard: `Generate a word problem for dividing a proper fraction by a proper fraction.

Examples of appropriate problems:
- "A water tank holds 7/8 liters. If each bottle holds 1/16 liter, how many bottles can be filled completely?"
- "You have 5/6 kg of chocolate. How many 1/12-kg bars can you make?"
- "A garden plot is 11/12 square meters. How many 1/16-square-meter sections fit completely?"

Guidelines:
- Use denominators up to 16
- Choose fraction pairs that result in whole number answers if it's a real life situation like number of scoops or pizza slices

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`
    },

    VISUALIZATION_CONFIG: {
      easy: {
        visualizationId: "step-by-step-solution"
      },
      medium: {
        visualizationId: "step-by-step-solution"
      },
      hard: {
        visualizationId: "step-by-step-solution"
      }
    },

    SCORING_CONFIG: {
      points: {
        easy: 0.11,
        medium: 0.22,
        hard: 0.43
      },
      hintPenalties: {
        easy: { first: 0.01, second: 0.02, thirdPlus: 0.05 },
        medium: { first: 0.01, second: 0.02, thirdPlus: 0.11 },
        hard: { first: 0.02, second: 0.04, thirdPlus: 0.30 }
      }
    }
  },

  "p6-math-fractions-word-problems": {
    topicName: "solving fraction word problems",
    displayName: "Word Problems",

    QUESTION_GENERATION: {
      easy: `Generate a fraction word problem appropriate for Primary 6 students.

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

      medium: `Generate a fraction word problem appropriate for Primary 6 students.

Examples of appropriate problems:
- "A chemist fills 5 litres of perfume into bottles that have a capacity of 2/11 litre each. In the end, there is one bottle that is not completely filled. How much perfume does that bottle contain?"

Guidelines:
- Use more complex fractions (2/11, 3/8, 5/12, etc.)
- Include scenarios with remainders or partial quantities
- Use professional or scientific contexts
- Require students to think about what happens to leftover amounts
- May involve multiple steps or considerations

IMPORTANT: Return ONLY the problem statement, nothing else. No extra text, no solutions, no explanations.`,

      hard: `Generate a fraction word problem appropriate for Primary 6 students.

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
      easy: {
        visualizationId: "bar-division-simple"
      },
      medium: {
        visualizationId: "bar-division-complex"
      },
      hard: {
        visualizationId: "step-by-step-solution"
      }
    },

    SCORING_CONFIG: {
      points: {
        easy: 0.11,
        medium: 0.22,
        hard: 0.43
      },
      hintPenalties: {
        easy: { first: 0.01, second: 0.02, thirdPlus: 0.11 },
        medium: { first: 0.01, second: 0.02, thirdPlus: 0.22 },
        hard: { first: 0.02, second: 0.04, thirdPlus: 0.43 }
      }
    }
  }
};

export type TopicId = keyof typeof P6_MATH_FRACTIONS;
export type SubtopicConfig = typeof P6_MATH_FRACTIONS[TopicId];