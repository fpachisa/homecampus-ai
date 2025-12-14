import type { QuestionBank } from './types.js';

/**
 * Pre-generated question bank for P5 Area of Triangle - Composite Figures
 *
 * Topic: Composite figures involving triangles
 * 4 sections with 4 questions each
 *
 * Sections:
 * 0: Split and Add Method (house shapes, arrows)
 * 1: Take Away Method (triangle cut from rectangle)
 * 2: Complex Composite (multiple triangles)
 * 3: Word Problems (real-world contexts)
 */
export const P5_MATH_AREA_TRIANGLE_COMPOSITE_QUESTION_BANK: QuestionBank = [
  {
    "sectionIndex": 0,
    "questions": [
      {
        "questionId": "p5-tri-comp-q1-s1",
        "problemStatement": "A house-shaped figure is made by placing a triangle on top of a rectangle. The rectangle has a base of 10 m and a height of 6 m. The triangle has the same base as the rectangle and a height of 4 m. Find the total area of the house-shaped figure.",
        "correctAnswer": 80,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the two shapes: a rectangle (the walls) and a triangle (the roof)."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the rectangle. Area of rectangle = base × height = 10 m × 6 m = 60 m²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of the triangle. Area of triangle = ½ × base × height = ½ × 10 m × 4 m = 20 m²."
          },
          {
            "stepNumber": 4,
            "text": "Add the two areas together. Total area = 60 m² + 20 m² = 80 m²."
          }
        ],
        "imagePath": "/assets/images/p5-triangle-composite/q1-section1.svg"
      },
      {
        "questionId": "p5-tri-comp-q2-s1",
        "problemStatement": "An arrow sign is made from a rectangle and a triangle. The rectangle is 8 cm long and 4 cm wide. The triangle is attached to one end of the rectangle. The triangle has a base of 4 cm (same as the width of the rectangle) and a height of 6 cm. What is the total area of the arrow sign?",
        "correctAnswer": 44,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the two shapes: a rectangle (the body of the arrow) and a triangle (the point)."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the rectangle. Area of rectangle = length × width = 8 cm × 4 cm = 32 cm²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of the triangle. Area of triangle = ½ × base × height = ½ × 4 cm × 6 cm = 12 cm²."
          },
          {
            "stepNumber": 4,
            "text": "Add the two areas together. Total area = 32 cm² + 12 cm² = 44 cm²."
          }
        ],
        "imagePath": "/assets/images/p5-triangle-composite/q2-section1.svg"
      },
      {
        "questionId": "p5-tri-comp-q3-s1",
        "problemStatement": "A sail for a toy boat is made from two triangles joined at their bases. Triangle A has a base of 12 cm and a height of 8 cm. Triangle B has the same base of 12 cm and a height of 10 cm. Find the total area of the sail.",
        "correctAnswer": 108,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the two shapes: both are triangles that share a common base."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of Triangle A. Area = ½ × base × height = ½ × 12 cm × 8 cm = 48 cm²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of Triangle B. Area = ½ × base × height = ½ × 12 cm × 10 cm = 60 cm²."
          },
          {
            "stepNumber": 4,
            "text": "Add the two areas together. Total area = 48 cm² + 60 cm² = 108 cm²."
          }
        ],
        "imagePath": "/assets/images/p5-triangle-composite/q3-section1.svg"
      },
      {
        "questionId": "p5-tri-comp-q4-s1",
        "problemStatement": "A pennant flag is made by placing a triangle below a square. The square has sides of 6 cm. The triangle has the same base as the square (6 cm) and a height of 8 cm. What is the total area of the pennant?",
        "correctAnswer": 60,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the two shapes: a square (top part) and a triangle (bottom point)."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the square. Area of square = side × side = 6 cm × 6 cm = 36 cm²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of the triangle. Area of triangle = ½ × base × height = ½ × 6 cm × 8 cm = 24 cm²."
          },
          {
            "stepNumber": 4,
            "text": "Add the two areas together. Total area = 36 cm² + 24 cm² = 60 cm²."
          }
        ],
        "imagePath": "/assets/images/p5-triangle-composite/q4-section1.svg"
      }
    ]
  },
  {
    "sectionIndex": 1,
    "questions": [
      {
        "questionId": "p5-tri-comp-q1-s2",
        "problemStatement": "A rectangular piece of card is 15 cm long and 10 cm wide. A triangular corner is cut off. The cut-off triangle has a base of 6 cm and a height of 4 cm. What is the area of the remaining card?",
        "correctAnswer": 138,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "This is a 'take away' problem. We start with a rectangle and remove a triangle."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the original rectangle. Area = length × width = 15 cm × 10 cm = 150 cm²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of the triangular cutout. Area = ½ × base × height = ½ × 6 cm × 4 cm = 12 cm²."
          },
          {
            "stepNumber": 4,
            "text": "Subtract the triangle area from the rectangle area. Remaining area = 150 cm² − 12 cm² = 138 cm²."
          }
        ],
        "imagePath": "/assets/images/p5-triangle-composite/q1-section2.svg"
      },
      {
        "questionId": "p5-tri-comp-q2-s2",
        "problemStatement": "A square wooden board has sides of 12 m. A right-angled triangular piece is cut from one corner. The two perpendicular sides of the triangle are both 4 m. What is the area of the remaining board?",
        "correctAnswer": 136,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "This is a 'take away' problem. We start with a square and remove a triangle."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the original square. Area = side × side = 12 m × 12 m = 144 m²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of the triangular cutout. Since it's a right-angled triangle, the two perpendicular sides are the base and height. Area = ½ × 4 m × 4 m = 8 m²."
          },
          {
            "stepNumber": 4,
            "text": "Subtract the triangle area from the square area. Remaining area = 144 m² − 8 m² = 136 m²."
          }
        ],
        "imagePath": "/assets/images/p5-triangle-composite/q2-section2.svg"
      },
      {
        "questionId": "p5-tri-comp-q3-s2",
        "problemStatement": "A rectangular banner is 20 cm by 14 cm. Two identical triangular pieces are cut from two opposite corners. Each triangle has a base of 5 cm and a height of 4 cm. What is the area of the remaining banner?",
        "correctAnswer": 260,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "This is a 'take away' problem with two identical triangular cutouts."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the original rectangle. Area = length × width = 20 cm × 14 cm = 280 cm²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of one triangular cutout. Area = ½ × base × height = ½ × 5 cm × 4 cm = 10 cm²."
          },
          {
            "stepNumber": 4,
            "text": "Since there are two identical triangles, total cutout area = 10 cm² × 2 = 20 cm²."
          },
          {
            "stepNumber": 5,
            "text": "Subtract the total triangle area from the rectangle area. Remaining area = 280 cm² − 20 cm² = 260 cm²."
          }
        ],
        "imagePath": "/assets/images/p5-triangle-composite/q3-section2.svg"
      },
      {
        "questionId": "p5-tri-comp-q4-s2",
        "problemStatement": "A rectangular metal sheet is 16 cm by 8 cm. A triangle with base 8 cm and height 6 cm is cut from the center of one of the long edges. What is the area of the remaining metal?",
        "correctAnswer": 104,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "This is a 'take away' problem where a triangle is cut from an edge."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the original rectangle. Area = length × width = 16 cm × 8 cm = 128 cm²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of the triangular cutout. Area = ½ × base × height = ½ × 8 cm × 6 cm = 24 cm²."
          },
          {
            "stepNumber": 4,
            "text": "Subtract the triangle area from the rectangle area. Remaining area = 128 cm² − 24 cm² = 104 cm²."
          }
        ],
        "imagePath": "/assets/images/p5-triangle-composite/q4-section2.svg"
      }
    ]
  },
  {
    "sectionIndex": 2,
    "questions": [
      {
        "questionId": "p5-tri-comp-q1-s3",
        "problemStatement": "A kite is made from two triangles. The vertical line down the middle of the kite is 18 cm long. It divides the kite into two triangles: one with base 18 cm and height 8 cm (left side), and one with base 18 cm and height 8 cm (right side). Find the total area of the kite.",
        "correctAnswer": 144,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "The kite is made of two identical triangles on either side of the vertical line."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of one triangle. The base is the vertical line (18 cm) and the height is the horizontal distance to the edge (8 cm). Area = ½ × 18 cm × 8 cm = 72 cm²."
          },
          {
            "stepNumber": 3,
            "text": "Since there are two identical triangles, total area = 72 cm² × 2 = 144 cm²."
          }
        ],
        "imagePath": "/assets/images/p5-triangle-composite/q1-section3.svg"
      },
      {
        "questionId": "p5-tri-comp-q2-s3",
        "problemStatement": "A trapezoid-shaped garden can be split into a rectangle and a triangle. The rectangle is 10 m by 6 m. The triangle has a base of 10 m and a height of 4 m. What is the total area of the garden?",
        "correctAnswer": 80,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "The trapezoid is split into a rectangle and a triangle."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the rectangle. Area = length × width = 10 m × 6 m = 60 m²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of the triangle. Area = ½ × base × height = ½ × 10 m × 4 m = 20 m²."
          },
          {
            "stepNumber": 4,
            "text": "Add the two areas together. Total area = 60 m² + 20 m² = 80 m²."
          }
        ],
        "imagePath": "/assets/images/p5-triangle-composite/q2-section3.svg"
      },
      {
        "questionId": "p5-tri-comp-q3-s3",
        "problemStatement": "A star medal is made from a hexagon with 6 identical triangles around it. The hexagon has an area of 48 cm². Each triangle has a base of 4 cm and a height of 3 cm. What is the total area of the medal?",
        "correctAnswer": 84,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "The medal is made of a hexagon plus 6 identical triangles."
          },
          {
            "stepNumber": 2,
            "text": "The area of the hexagon is given as 48 cm²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of one triangle. Area = ½ × base × height = ½ × 4 cm × 3 cm = 6 cm²."
          },
          {
            "stepNumber": 4,
            "text": "Calculate the total area of all 6 triangles. Total triangle area = 6 cm² × 6 = 36 cm²."
          },
          {
            "stepNumber": 5,
            "text": "Add the hexagon and triangle areas. Total area = 48 cm² + 36 cm² = 84 cm²."
          }
        ],
        "imagePath": "/assets/images/p5-triangle-composite/q3-section3.svg"
      },
      {
        "questionId": "p5-tri-comp-q4-s3",
        "problemStatement": "A chevron (arrow-like shape) is made from a rectangle with a triangle cut out of one end and a triangle added to the other end. The rectangle is 12 cm by 6 cm. The triangle added has base 6 cm and height 5 cm. The triangle removed has base 6 cm and height 3 cm. What is the area of the chevron?",
        "correctAnswer": 78,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "The chevron is made by adding a triangle to one end and removing a triangle from the other end of a rectangle."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the rectangle. Area = length × width = 12 cm × 6 cm = 72 cm²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of the triangle added. Area = ½ × 6 cm × 5 cm = 15 cm²."
          },
          {
            "stepNumber": 4,
            "text": "Calculate the area of the triangle removed. Area = ½ × 6 cm × 3 cm = 9 cm²."
          },
          {
            "stepNumber": 5,
            "text": "Calculate total area: Rectangle + Added − Removed = 72 cm² + 15 cm² − 9 cm² = 78 cm²."
          }
        ],
        "imagePath": "/assets/images/p5-triangle-composite/q4-section3.svg"
      }
    ]
  },
  {
    "sectionIndex": 3,
    "questions": [
      {
        "questionId": "p5-tri-comp-q1-s4",
        "problemStatement": "Mr Tan wants to tile his porch, which has a house shape (rectangle with triangular top). The rectangular part is 5 m by 4 m. The triangular roof section has a base of 5 m and a height of 2 m. If each tile covers 0.5 m², how many tiles does Mr Tan need?",
        "correctAnswer": 50,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "First, find the total area of the porch."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the rectangular part. Area = 5 m × 4 m = 20 m²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of the triangular part. Area = ½ × 5 m × 2 m = 5 m²."
          },
          {
            "stepNumber": 4,
            "text": "Total area of porch = 20 m² + 5 m² = 25 m²."
          },
          {
            "stepNumber": 5,
            "text": "Calculate number of tiles needed. Number of tiles = Total area ÷ Area per tile = 25 m² ÷ 0.5 m² = 50 tiles."
          }
        ],
        "imagePath": "/assets/images/p5-triangle-composite/q1-section4.svg"
      },
      {
        "questionId": "p5-tri-comp-q2-s4",
        "problemStatement": "A sailing club has a flag shaped like a rectangle with a triangular piece cut from the bottom to form a swallowtail. The rectangle is 80 cm by 50 cm. The triangular cutout has a base of 50 cm and a height of 20 cm. How much fabric is needed to make the flag?",
        "correctAnswer": 3500,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "This is a 'take away' problem where fabric = rectangle area minus triangle cutout."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the full rectangle. Area = 80 cm × 50 cm = 4000 cm²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of the triangular cutout. Area = ½ × 50 cm × 20 cm = 500 cm²."
          },
          {
            "stepNumber": 4,
            "text": "Subtract to find the fabric needed. Fabric area = 4000 cm² − 500 cm² = 3500 cm²."
          }
        ],
        "imagePath": "/assets/images/p5-triangle-composite/q2-section4.svg"
      },
      {
        "questionId": "p5-tri-comp-q3-s4",
        "problemStatement": "A farmer has a plot of land shaped like a trapezoid. It can be divided into a rectangle (14 m by 8 m) and a triangle (base 14 m, height 6 m). If the farmer plants flowers that need 2 m² each, how many flowers can he plant?",
        "correctAnswer": 77,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "First, find the total area of the plot."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the rectangle. Area = 14 m × 8 m = 112 m²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of the triangle. Area = ½ × 14 m × 6 m = 42 m²."
          },
          {
            "stepNumber": 4,
            "text": "Total area = 112 m² + 42 m² = 154 m²."
          },
          {
            "stepNumber": 5,
            "text": "Calculate number of flowers. Number = Total area ÷ Area per flower = 154 m² ÷ 2 m² = 77 flowers."
          }
        ],
        "imagePath": "/assets/images/p5-triangle-composite/q3-section4.svg"
      },
      {
        "questionId": "p5-tri-comp-q4-s4",
        "problemStatement": "Mrs Lee is making a house-shaped picture frame. The frame is made from a rectangle (30 cm by 20 cm) with a triangular top (base 30 cm, height 12 cm). Inside the frame is a rectangular photo area of 24 cm by 14 cm. What is the area of the visible frame (not covered by the photo)?",
        "correctAnswer": 444,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "This combines 'split and add' and 'take away' methods."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the total frame area (rectangle + triangle). Rectangle area = 30 cm × 20 cm = 600 cm². Triangle area = ½ × 30 cm × 12 cm = 180 cm². Total frame = 600 cm² + 180 cm² = 780 cm²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the photo area to subtract. Photo area = 24 cm × 14 cm = 336 cm²."
          },
          {
            "stepNumber": 4,
            "text": "Calculate the visible frame area. Visible frame = Total frame − Photo = 780 cm² − 336 cm² = 444 cm²."
          }
        ],
        "imagePath": "/assets/images/p5-triangle-composite/q4-section4.svg"
      }
    ]
  }
];
