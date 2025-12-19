import type { QuestionBank } from './types.js';

/**
 * Pre-generated question bank for P6 Circles - Composite Figures
 *
 * Topic: Area and Perimeter of Composite Figures involving circles
 * 3 sections matching the progression structure
 *
 * Sections:
 * 0: Composite Addition (shapes joined together)
 * 1: Composite Subtraction (shapes cut out)
 * 2: Complex Composite (combination of addition/subtraction)
 */
export const P6_MATH_CIRCLES_COMPOSITE_QUESTION_BANK: QuestionBank = [
  // ============================================
  // INTRO SECTION (-1)
  // ============================================
  {
    sectionIndex: -1,
    questions: [
      {
        questionId: "p6-circles-comp-intro",
        problemStatement: `### Understanding Composite Figures

Composite figures are shapes made by **combining** simpler shapes together.

Look at this figure - a rectangle with two semicircles on each end (called a "stadium" shape):

When we find the area, we need to:
1. **Identify** the shapes (rectangle + 2 semicircles)
2. **Calculate** each part separately
3. **Add** them together

**Quick Question:** If two semicircles are joined together, what shape do they make?

A) A quarter circle
B) A full circle
C) Two circles
D) A rectangle`,
        correctAnswer: "B",
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "Think about what a semicircle is - it's HALF of a circle."
          },
          {
            stepNumber: 2,
            text: "If we have TWO halves: ½ + ½ = 1 whole."
          },
          {
            stepNumber: 3,
            text: "So 2 semicircles = 1 full circle. The answer is B!"
          },
          {
            stepNumber: 4,
            text: "This is a useful shortcut: instead of calculating 2 semicircles separately, we can just calculate 1 circle."
          }
        ]
      }
    ]
  },

  // ============================================
  // SECTION 0: COMPOSITE ADDITION
  // ============================================
  {
    "sectionIndex": 0,
    "questions": [
      {
        "questionId": "p6-circles-comp-stadium",
        "problemStatement": "The figure is made up of a rectangle and two semicircles. The rectangle measures 70 m by 28 m. Find the area of the figure. (Take π = 22/7)",
        "imagePath": "/curriculum-content/P6/Maths/circle-composite-svgs/practice/stadium-70x28m.svg",
        "correctAnswer": "2576 m²",
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the shapes: This is a stadium/capsule shape made of a rectangle plus two semicircles on the ends."
          },
          {
            "stepNumber": 2,
            "text": "Find the radius of each semicircle. The diameter equals the height of the rectangle. Radius = 28 ÷ 2 = 14 m."
          },
          {
            "stepNumber": 3,
            "text": "Two semicircles make one full circle. Area of circle = 22/7 × 14 × 14 = 616 m²."
          },
          {
            "stepNumber": 4,
            "text": "Find the area of the rectangle. Area = 70 × 28 = 1960 m²."
          },
          {
            "stepNumber": 5,
            "text": "Find total area by adding. Total = 1960 + 616 = 2576 m²."
          }
        ]
      },
      {
        "questionId": "p6-circles-comp-semicircles-bump",
        "problemStatement": "The figure is made up of two semicircles with diameter 21 cm each. Find (a) the perimeter and (b) the area of the shaded figure. (Take π = 22/7)",
        "imagePath": "/curriculum-content/P6/Maths/circle-composite-svgs/practice/semicircles-bump-21cm.svg",
        "correctAnswer": "Perimeter = 66 cm, Area = 346.5 cm²",
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the shapes: Two semicircles arranged together (one facing up, one facing down)."
          },
          {
            "stepNumber": 2,
            "text": "Find the radius. Radius = 21 ÷ 2 = 10.5 cm."
          },
          {
            "stepNumber": 3,
            "text": "For area: 2 semicircles = 1 full circle. Area = 22/7 × 10.5 × 10.5 = 346.5 cm²."
          },
          {
            "stepNumber": 4,
            "text": "For perimeter: Each semicircle arc = ½ × 2 × 22/7 × 10.5 = 33 cm."
          },
          {
            "stepNumber": 5,
            "text": "Total perimeter = 2 arcs = 33 + 33 = 66 cm."
          }
        ]
      }
    ]
  },
  {
    "sectionIndex": 1,
    "questions": [
      {
        "questionId": "p6-circles-comp-quarter-square",
        "problemStatement": "The figure shows a quarter circle in a square with side 14 cm. Find (a) the perimeter and (b) the area of the shaded part. (Take π = 22/7)",
        "imagePath": "/curriculum-content/P6/Maths/circle-composite-svgs/practice/quarter-in-square-14cm.svg",
        "correctAnswer": "Perimeter = 50 cm, Area = 42 cm²",
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the shapes: A square with a quarter circle cut from one corner. The shaded region is the remaining part."
          },
          {
            "stepNumber": 2,
            "text": "For perimeter: Find the arc length (quarter of circumference). Arc = 1/4 × 2 × 22/7 × 14 = 22 cm."
          },
          {
            "stepNumber": 3,
            "text": "Perimeter = arc + two sides of square = 22 + 14 + 14 = 50 cm."
          },
          {
            "stepNumber": 4,
            "text": "For area: Find area of square = 14 × 14 = 196 cm²."
          },
          {
            "stepNumber": 5,
            "text": "Find area of quarter circle = 1/4 × 22/7 × 14 × 14 = 154 cm²."
          },
          {
            "stepNumber": 6,
            "text": "Shaded area = Square - Quarter circle = 196 - 154 = 42 cm²."
          }
        ]
      },
      {
        "questionId": "p6-circles-comp-four-star",
        "problemStatement": "The figure shows a square with 4 quarter circles cut from each corner. The side of the square is 14 cm. Find the area of the shaded part. (Take π = 22/7)",
        "imagePath": "/curriculum-content/P6/Maths/circle-composite-svgs/practice/four-star-14cm.svg",
        "correctAnswer": "42 cm²",
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the shapes: A square with 4 quarter circles cut from the corners, creating a 4-point star shape."
          },
          {
            "stepNumber": 2,
            "text": "Find the radius of each quarter circle. Radius = 14 ÷ 2 = 7 cm (half the side of the square)."
          },
          {
            "stepNumber": 3,
            "text": "4 quarter circles = 1 full circle. Area of circle = 22/7 × 7 × 7 = 154 cm²."
          },
          {
            "stepNumber": 4,
            "text": "Find area of square = 14 × 14 = 196 cm²."
          },
          {
            "stepNumber": 5,
            "text": "Shaded area = Square - Circle = 196 - 154 = 42 cm²."
          }
        ]
      },
      {
        "questionId": "p6-circles-comp-tangent",
        "problemStatement": "The figure shows 2 identical circles with two lines touching the circles. The radius of each circle is 14 cm. Find (a) the perimeter and (b) the area of the shaded part. (Take π = 22/7)",
        "imagePath": "/curriculum-content/P6/Maths/circle-composite-svgs/practice/circles-tangent-14cm.svg",
        "correctAnswer": "Perimeter = 144 cm, Area = 168 cm²",
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the shaded region: It's like a rectangle with two semicircles removed (one from each side)."
          },
          {
            "stepNumber": 2,
            "text": "Find dimensions: The rectangle is 28 cm × 28 cm (diameter × diameter)."
          },
          {
            "stepNumber": 3,
            "text": "For perimeter: 2 semicircle arcs + 2 straight lines. Arc total = 2 × 22/7 × 14 = 88 cm. Lines = 2 × 28 = 56 cm."
          },
          {
            "stepNumber": 4,
            "text": "Perimeter = 88 + 56 = 144 cm."
          },
          {
            "stepNumber": 5,
            "text": "For area: Rectangle area = 28 × 28 = 784 cm²."
          },
          {
            "stepNumber": 6,
            "text": "2 semicircles = 1 circle. Circle area = 22/7 × 14 × 14 = 616 cm²."
          },
          {
            "stepNumber": 7,
            "text": "Shaded area = 784 - 616 = 168 cm²."
          }
        ]
      }
    ]
  },
  {
    "sectionIndex": 2,
    "questions": [
      {
        "questionId": "p6-circles-comp-overlapping",
        "problemStatement": "The figure is made up of two overlapping quarter circles with radius 14 cm. Find (a) the perimeter and (b) the area of the shaded part. (Take π = 22/7)",
        "imagePath": "/curriculum-content/P6/Maths/circle-composite-svgs/practice/overlapping-quarters-14cm.svg",
        "correctAnswer": "Perimeter = 44 cm, Area = 154 cm²",
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the shape: Two quarter circles overlapping to form a leaf/eye shape."
          },
          {
            "stepNumber": 2,
            "text": "For perimeter: The boundary consists of 2 quarter-circle arcs."
          },
          {
            "stepNumber": 3,
            "text": "Each arc = 1/4 × 2 × 22/7 × 14 = 22 cm."
          },
          {
            "stepNumber": 4,
            "text": "Perimeter = 2 × 22 = 44 cm."
          },
          {
            "stepNumber": 5,
            "text": "For area: The shaded region equals exactly one quarter circle (rearrange the parts to see this)."
          },
          {
            "stepNumber": 6,
            "text": "Area = 1/4 × 22/7 × 14 × 14 = 154 cm²."
          }
        ]
      },
      {
        "questionId": "p6-circles-comp-quarters-semicircle",
        "problemStatement": "The figure is made up of two quarter circles and a semicircle with radius 14 cm. Find the perimeter of the figure. (Take π = 22/7)",
        "imagePath": "/curriculum-content/P6/Maths/circle-composite-svgs/practice/quarters-semicircle-14cm.svg",
        "correctAnswer": "116 cm",
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the curved parts: 2 quarter circles + 1 semicircle."
          },
          {
            "stepNumber": 2,
            "text": "Combine: 2 quarters + 1 semicircle = 1/4 + 1/4 + 1/2 = 1 full circle."
          },
          {
            "stepNumber": 3,
            "text": "Circumference of full circle = 2 × 22/7 × 14 = 88 cm."
          },
          {
            "stepNumber": 4,
            "text": "Add the two straight edges (each equals radius). Straight edges = 14 + 14 = 28 cm."
          },
          {
            "stepNumber": 5,
            "text": "Total perimeter = 88 + 28 = 116 cm."
          }
        ]
      },
      {
        "questionId": "p6-circles-comp-semicircles-quarter",
        "problemStatement": "The figure is made up of 2 identical semicircles and a quarter circle. The diameter of each semicircle is 28 cm. Find the area of the shaded part. (Take π = 22/7)",
        "imagePath": "/curriculum-content/P6/Maths/circle-composite-svgs/practice/semicircles-quarter-28cm.svg",
        "correctAnswer": "616 cm²",
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the shapes: A quarter circle with two semicircles - one bulging out and one bulging in."
          },
          {
            "stepNumber": 2,
            "text": "Find radius of semicircles: 28 ÷ 2 = 14 cm."
          },
          {
            "stepNumber": 3,
            "text": "Area of one semicircle = 1/2 × 22/7 × 14 × 14 = 308 cm²."
          },
          {
            "stepNumber": 4,
            "text": "Key insight: One semicircle adds area (+308), one subtracts area (-308). They cancel out!"
          },
          {
            "stepNumber": 5,
            "text": "The shaded area = just the quarter circle with radius 28 cm."
          },
          {
            "stepNumber": 6,
            "text": "Area = 1/4 × 22/7 × 28 × 28 = 616 cm²."
          }
        ]
      }
    ]
  }
];
