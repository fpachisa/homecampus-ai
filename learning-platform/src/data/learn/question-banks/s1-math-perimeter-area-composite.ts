import type { QuestionBank } from './types.js';

/**
 * Pre-generated question bank for Composite Figures
 * Generated using Gemini
 * 1 intro section + 4 main sections with 4 questions each
 *
 * Topic: composite shapes - breaking down complex figures and calculating their area
 */
export const S1_MATH_PERIMETER_AREA_COMPOSITE_QUESTION_BANK: QuestionBank = [
  {
    "sectionIndex": -1,
    "questions": [
      {
        "questionId": "s1-composite-intro-q1",
        "problemStatement": "### Breaking Down Composite Shapes\n\nThe key to working with composite figures is decomposition.\n\nImagine an L-shaped figure. If you wanted to calculate its area, which two basic shapes would you most likely break it down into?\n\nA) A circle and a square\n\nB) Two rectangles\n\nC) A trapezium and a triangle\n\nD) A parallelogram and a rhombus",
        "imagePath": "",
        "correctAnswer": "B",
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "When working with composite figures, we always look for the simplest basic shapes that can be combined to form the complex shape."
          },
          {
            "stepNumber": 2,
            "text": "An L-shaped figure has all right angles (90°) and straight sides, which suggests it's made up of rectangles."
          },
          {
            "stepNumber": 3,
            "text": "We can decompose an L-shape by drawing one line, either horizontally or vertically, to split it into two rectangles."
          },
          {
            "stepNumber": 4,
            "text": "The correct answer is B) Two rectangles. This is the most natural and simplest decomposition for an L-shaped figure."
          }
        ]
      }
    ]
  },
  {
    "sectionIndex": 0,
    "questions": [
      {
        "questionId": "s1-composite-q1-s1",
        "problemStatement": "A composite figure is formed by attaching a smaller rectangle on top of a larger rectangle, creating an 'L' shape. The larger (bottom) rectangle has a length of 10 cm and a height of 4 cm. The smaller (top) rectangle is placed on the left side of the bottom rectangle and has a width of 3 cm. The total height of the entire composite figure is 7 cm. If you were to draw a line to separate these two rectangles, what would be the height of the smaller (top) rectangular component?",
        "correctAnswer": 3,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the basic shapes that form the composite figure. The problem states it's made of two rectangles: a larger bottom one and a smaller top one."
          },
          {
            "stepNumber": 2,
            "text": "Identify the given dimensions. The total height of the composite figure is 7 cm. The height of the larger (bottom) rectangle is 4 cm."
          },
          {
            "stepNumber": 3,
            "text": "Determine the missing dimension for the smaller (top) rectangle. Since the top rectangle sits on top of the bottom rectangle, its height contributes to the total height of the figure. The height of the smaller top rectangle is the total height minus the height of the bottom rectangle."
          },
          {
            "stepNumber": 4,
            "text": "Calculate the height of the smaller rectangle: 7 cm (total height) - 4 cm (height of bottom rectangle) = 3 cm."
          }
        ],
        "imagePath": "/assets/images/composite-figures/q1-section1.svg"
      },
      {
        "questionId": "s1-composite-q2-s1",
        "problemStatement": "A composite figure in the shape of the letter 'T' is created using two rectangular pieces. The horizontal piece (the top bar of the 'T') has a length of 10 cm and a width of 2 cm. The vertical piece (the stem of the 'T') extends downwards from the center of the horizontal piece. The total height of the entire 'T' figure is 8 cm. When decomposing this 'T' shape into its two rectangular components, what is the area of the vertical rectangular component?",
        "correctAnswer": 12,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the basic shapes. The composite 'T' shape is made of two rectangles: one horizontal and one vertical."
          },
          {
            "stepNumber": 2,
            "text": "Determine the dimensions of the horizontal rectangle. Its length is 10 cm and its width (which is also its height in the context of contributing to the total figure's height) is 2 cm."
          },
          {
            "stepNumber": 3,
            "text": "Find the height of the vertical rectangular component. The total height of the 'T' figure is 8 cm. The horizontal rectangle takes up 2 cm of this height. Therefore, the height of the vertical rectangle is the total height minus the height of the horizontal rectangle: 8 cm - 2 cm = 6 cm. The problem states its width is 2 cm (same as the horizontal bar's width, as it extends from the center)."
          },
          {
            "stepNumber": 4,
            "text": "Calculate the area of the vertical rectangular component. Area = length × width = 6 cm × 2 cm = 12 cm²."
          }
        ],
        "imagePath": "/assets/images/composite-figures/q2-section1.svg"
      },
      {
        "questionId": "s1-composite-q3-s1",
        "problemStatement": "A composite figure resembles a simple house shape, formed by placing a triangular roof directly on top of a rectangular base. The rectangular base has a length of 9 m and a height of 5 m. The triangular roof has its base perfectly aligned with the top side of the rectangle, and its perpendicular height is 4 m. After you decompose this house shape into its two basic components, what is the base length of the triangular component?",
        "correctAnswer": 9,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the basic shapes that form the composite figure. The problem describes it as a rectangle and a triangle."
          },
          {
            "stepNumber": 2,
            "text": "Identify the given dimensions of the rectangular component. The rectangular base has a length of 9 m and a height of 5 m."
          },
          {
            "stepNumber": 3,
            "text": "Understand the relationship between the components. The problem states that the triangular roof has its base 'perfectly aligned with the top side of the rectangle'."
          },
          {
            "stepNumber": 4,
            "text": "Determine the base length of the triangular component. Since the triangle's base is perfectly aligned with the top side of the rectangle, their lengths must be the same. Therefore, the base length of the triangular component is 9 m."
          }
        ],
        "imagePath": "/assets/images/composite-figures/q3-section1.svg"
      },
      {
        "questionId": "s1-composite-q4-s1",
        "problemStatement": "A section of a running track is designed as a composite figure consisting of a rectangle with a semicircle attached to one of its longer sides. The rectangular part of the track measures 15 m in length and 6 m in width. The diameter of the semicircle is exactly equal to the width of the rectangular part. If you were to decompose this figure into its basic shapes, what would be the radius of the semicircular component?",
        "correctAnswer": 3,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the basic shapes that form the composite figure. The problem clearly states it's a rectangle and a semicircle."
          },
          {
            "stepNumber": 2,
            "text": "Identify the given dimensions of the rectangular component. The length is 15 m and the width is 6 m."
          },
          {
            "stepNumber": 3,
            "text": "Relate the dimensions of the basic shapes. The problem states that 'the diameter of the semicircle is exactly equal to the width of the rectangular part'."
          },
          {
            "stepNumber": 4,
            "text": "Determine the diameter of the semicircle. Since the rectangle's width is 6 m, the diameter of the semicircle is also 6 m."
          },
          {
            "stepNumber": 5,
            "text": "Calculate the radius of the semicircular component. The radius is half of the diameter. So, radius = diameter ÷ 2 = 6 m ÷ 2 = 3 m."
          }
        ],
        "imagePath": "/assets/images/composite-figures/q4-section1.svg"
      }
    ]
  },
  {
    "sectionIndex": 1,
    "questions": [
      {
        "questionId": "s1-composite-q1-s2",
        "problemStatement": "A floor is shaped like an L-figure. It has an overall length of 12 meters and an overall width of 8 meters. The inner corner is formed such that there is a cut-out of 6 meters along the length and 4 meters along the width from the original rectangle. Calculate the total area of the floor. (Hint: Break the L-shape into two rectangles.)",
        "correctAnswer": 72,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Decompose the L-shaped figure into two simpler rectangles. We can draw a line to divide it either horizontally or vertically. Let's divide it horizontally into Rectangle A (the larger bottom part) and Rectangle B (the smaller top-right part)."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the dimensions of Rectangle A. Based on the problem description, we can consider Rectangle A to be 12 meters long and 4 meters wide (the full length, and the bottom part of the 8m width). Area of Rectangle A = length × width = 12 m × 4 m = 48 m²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the dimensions of Rectangle B. The total width is 8m, and Rectangle A uses 4m, so the height of Rectangle B is (8 m - 4 m) = 4 m. The inner cut is 6m from the total length of 12m, so the length of Rectangle B is (12 m - 6 m) = 6 m. Area of Rectangle B = length × width = 6 m × 4 m = 24 m²."
          },
          {
            "stepNumber": 4,
            "text": "Add the areas of the two rectangles to find the total area of the L-shaped floor. Total Area = Area of Rectangle A + Area of Rectangle B = 48 m² + 24 m² = 72 m²."
          }
        ],
        "imagePath": "/assets/images/composite-figures/q1-section2.svg"
      },
      {
        "questionId": "s1-composite-q2-s2",
        "problemStatement": "A running track has a U-shaped design for one of its sections. It consists of two parallel straight paths, each 10 meters long and 2 meters wide. These two paths are connected at their base by a straight horizontal path that is 8 meters long and 2 meters wide. Calculate the total area covered by this U-shaped section of the track.",
        "correctAnswer": 56,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the components of the U-shaped figure. It can be broken down into three rectangles: two vertical rectangles (the parallel straight paths) and one horizontal rectangle (the connecting path at the base)."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the two vertical rectangles. Each vertical path is 10 meters long and 2 meters wide. Area of one vertical rectangle = length × width = 10 m × 2 m = 20 m². Since there are two such paths, their combined area is 20 m² × 2 = 40 m²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of the horizontal connecting rectangle. This path is 8 meters long and 2 meters wide. Area of horizontal rectangle = length × width = 8 m × 2 m = 16 m²."
          },
          {
            "stepNumber": 4,
            "text": "Add the areas of all three rectangles to find the total area. Total Area = (Area of two vertical rectangles) + (Area of horizontal rectangle) = 40 m² + 16 m² = 56 m²."
          }
        ],
        "imagePath": "/assets/images/composite-figures/q2-section2.svg"
      },
      {
        "questionId": "s1-composite-q3-s2",
        "problemStatement": "A staircase is being built with three steps. The bottom step is 15 cm long and 4 cm high. The second step is 10 cm long and 4 cm high. The top step is 5 cm long and 4 cm high. All steps are aligned from the same starting point. Calculate the total area of the side profile of this staircase (the visible area from the side).",
        "correctAnswer": 120,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Recognize that the side profile of the staircase is a composite figure made of three rectangles stacked on top of each other, each representing a step. We will calculate the area of each step individually."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the bottom step (Rectangle 1). The bottom step is 15 cm long and 4 cm high. Area of Step 1 = length × height = 15 cm × 4 cm = 60 cm²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of the second step (Rectangle 2). The second step is 10 cm long and 4 cm high. Area of Step 2 = length × height = 10 cm × 4 cm = 40 cm²."
          },
          {
            "stepNumber": 4,
            "text": "Calculate the area of the top step (Rectangle 3). The top step is 5 cm long and 4 cm high. Area of Step 3 = length × height = 5 cm × 4 cm = 20 cm²."
          },
          {
            "stepNumber": 5,
            "text": "Sum the areas of all three steps to find the total area of the staircase's side profile. Total Area = Area of Step 1 + Area of Step 2 + Area of Step 3 = 60 cm² + 40 cm² + 20 cm² = 120 cm²."
          }
        ],
        "imagePath": "/assets/images/composite-figures/q3-section2.svg"
      },
      {
        "questionId": "s1-composite-q4-s2",
        "problemStatement": "A running track has a shape often referred to as a 'stadium'. It consists of a rectangle with a semicircle at each end. The rectangular part of the track is 50 meters long and 14 meters wide. Calculate the total area of the track. (Use $\\pi \\approx \\frac{22}{7}$ for your calculation.)",
        "correctAnswer": 854,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Decompose the stadium shape into its basic components: a rectangle and two semicircles. The two semicircles at each end combine to form one full circle."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the rectangular part. The length of the rectangle is 50 meters and the width is 14 meters. Area of Rectangle = length × width = 50 m × 14 m = 700 m²."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of the circular part. The width of the rectangle (14 meters) is the diameter of the semicircles. Therefore, the radius (r) of the full circle is half of the diameter: r = 14 m / 2 = 7 m. Area of Circle = $\\pi r^2$. Using $\\pi \\approx \\frac{22}{7}$, Area of Circle = $\\frac{22}{7} \\times (7 \\text{ m})^2 = \\frac{22}{7} \\times 49 \\text{ m}^2 = 22 \\times 7 \\text{ m}^2 = 154 \\text{ m}^2$."
          },
          {
            "stepNumber": 4,
            "text": "Add the area of the rectangle and the area of the full circle to find the total area of the track. Total Area = Area of Rectangle + Area of Circle = 700 m² + 154 m² = 854 m²."
          }
        ],
        "imagePath": "/assets/images/composite-figures/q4-section2.svg"
      }
    ]
  },
  {
    "sectionIndex": 2,
    "questions": [
      {
        "questionId": "s1-composite-q1-s3",
        "problemStatement": "A rectangular metal sheet measures 15 cm in length and 10 cm in width. A rectangular hole, 6 cm long and 4 cm wide, is cut out from its centre. What is the area of the remaining metal sheet?",
        "correctAnswer": 126,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "First, identify the outer shape and its dimensions. The outer shape is a rectangle with length 15 cm and width 10 cm."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the outer rectangular metal sheet using the formula Area = length × width. So, Outer Area = 15 cm × 10 cm = 150 cm²."
          },
          {
            "stepNumber": 3,
            "text": "Next, identify the cutout shape and its dimensions. The cutout is a rectangular hole with length 6 cm and width 4 cm."
          },
          {
            "stepNumber": 4,
            "text": "Calculate the area of the rectangular cutout using the formula Area = length × width. So, Cutout Area = 6 cm × 4 cm = 24 cm²."
          },
          {
            "stepNumber": 5,
            "text": "To find the area of the remaining metal sheet, subtract the cutout area from the outer area. Remaining Area = Outer Area − Cutout Area = 150 cm² − 24 cm² = 126 cm²."
          }
        ],
        "imagePath": "/assets/images/composite-figures/q1-section3.svg"
      },
      {
        "questionId": "s1-composite-q2-s3",
        "problemStatement": "A rectangular wooden board is 20 cm long and 15 cm wide. A circular hole with a radius of 3 cm is drilled through it. Find the area of the remaining wooden board, correct to 1 decimal place. (Use $\\pi = 3.14$)",
        "correctAnswer": 271.7,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the outer shape and its dimensions. The outer shape is a rectangle with length 20 cm and width 15 cm."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the outer rectangular wooden board. Area of rectangle = length × width. So, Outer Area = 20 cm × 15 cm = 300 cm²."
          },
          {
            "stepNumber": 3,
            "text": "Identify the cutout shape and its dimensions. The cutout is a circular hole with a radius (r) of 3 cm."
          },
          {
            "stepNumber": 4,
            "text": "Calculate the area of the circular cutout using the formula Area = $\\pi r^2$. Using $\\pi = 3.14$, Cutout Area = $3.14 \\times (3 \\text{ cm})^2 = 3.14 \\times 9 \\text{ cm}^2 = 28.26 \\text{ cm}^2$."
          },
          {
            "stepNumber": 5,
            "text": "Subtract the cutout area from the outer area to find the remaining area. Remaining Area = Outer Area − Cutout Area = $300 \\text{ cm}^2 - 28.26 \\text{ cm}^2 = 271.74 \\text{ cm}^2$. Rounding to 1 decimal place, the remaining area is $271.7 \\text{ cm}^2$."
          }
        ],
        "imagePath": "/assets/images/composite-figures/q2-section3.svg"
      },
      {
        "questionId": "s1-composite-q3-s3",
        "problemStatement": "A rectangular room has dimensions 8 m by 5 m. Two square pillars, each with sides of 0.5 m, are located within the room. If the floor is to be tiled, what is the total area of the floor that needs tiling?",
        "correctAnswer": 39.5,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the main area. The room is a rectangle with length 8 m and width 5 m."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the total area of the room's floor without considering the pillars. Area of rectangle = length × width. So, Total Room Area = 8 m × 5 m = 40 m²."
          },
          {
            "stepNumber": 3,
            "text": "Identify the cutouts. There are two square pillars, each with sides of 0.5 m. Calculate the area of one square pillar: Area = side × side = $0.5 \\text{ m} \\times 0.5 \\text{ m} = 0.25 \\text{ m}^2$."
          },
          {
            "stepNumber": 4,
            "text": "Since there are two identical pillars, their combined area is $2 \\times 0.25 \\text{ m}^2 = 0.50 \\text{ m}^2$. This is the total cutout area."
          },
          {
            "stepNumber": 5,
            "text": "Subtract the total area of the pillars (cutouts) from the total room area to find the area that needs tiling. Area to be Tiled = Total Room Area − Total Pillars Area = $40 \\text{ m}^2 - 0.50 \\text{ m}^2 = 39.5 \\text{ m}^2$."
          }
        ],
        "imagePath": "/assets/images/composite-figures/q3-section3.svg"
      },
      {
        "questionId": "s1-composite-q4-s3",
        "problemStatement": "A square-shaped plaque with sides of 14 cm has a semicircular design removed from one of its sides. The diameter of the semicircle is equal to the side length of the square. Calculate the area of the remaining plaque. (Use $\\pi = \\frac{22}{7}$)",
        "correctAnswer": 119,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "Identify the outer shape. The plaque is a square with sides of 14 cm."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the outer square plaque. Area of square = side × side. So, Outer Area = $14 \\text{ cm} \\times 14 \\text{ cm} = 196 \\text{ cm}^2$."
          },
          {
            "stepNumber": 3,
            "text": "Identify the cutout shape. It's a semicircle whose diameter is equal to the side length of the square, which is 14 cm. Therefore, the radius (r) of the semicircle is half of its diameter, so $r = 14 \\text{ cm} \\div 2 = 7 \\text{ cm}$."
          },
          {
            "stepNumber": 4,
            "text": "Calculate the area of the semicircular cutout. The area of a full circle is $\\pi r^2$, so the area of a semicircle is $\\frac{1}{2} \\pi r^2$. Using $\\pi = \\frac{22}{7}$, Cutout Area = $\\frac{1}{2} \\times \\frac{22}{7} \\times (7 \\text{ cm})^2 = \\frac{1}{2} \\times \\frac{22}{7} \\times 49 \\text{ cm}^2 = 11 \\times 7 \\text{ cm}^2 = 77 \\text{ cm}^2$."
          },
          {
            "stepNumber": 5,
            "text": "Subtract the area of the semicircular cutout from the area of the square plaque to find the remaining area. Remaining Area = Outer Area − Cutout Area = $196 \\text{ cm}^2 - 77 \\text{ cm}^2 = 119 \\text{ cm}^2$."
          }
        ],
        "imagePath": "/assets/images/composite-figures/q4-section3.svg"
      }
    ]
  },
  {
    "sectionIndex": 3,
    "questions": [
      {
        "questionId": "s1-composite-q1-s4",
        "problemStatement": "A craftsman is cutting a metal plate for a design. The plate starts as a large rectangle with dimensions 15 cm by 10 cm. From one corner, a smaller rectangular section measuring 5 cm by 4 cm is removed. Additionally, a circular hole with a radius of 2 cm is drilled through the remaining plate. Calculate the area of the final metal plate. (Use $\\pi \\approx 3.14$)",
        "correctAnswer": 117.44,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "First, calculate the area of the initial large rectangular plate. This is the base area before any parts are removed. Area of a rectangle = length × width. So, Area = $15 \\text{ cm} \\times 10 \\text{ cm} = 150 \\text{ cm}^2$."
          },
          {
            "stepNumber": 2,
            "text": "Calculate the area of the smaller rectangular section that is removed. This area will be subtracted from the initial plate's area. Area = $5 \\text{ cm} \\times 4 \\text{ cm} = 20 \\text{ cm}^2$."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of the circular hole. This area will also be subtracted from the plate. Area of a circle = $\\pi r^2$. Given radius $r = 2$ cm and $\\pi \\approx 3.14$. Area = $3.14 \\times (2)^2 = 3.14 \\times 4 = 12.56 \\text{ cm}^2$."
          },
          {
            "stepNumber": 4,
            "text": "Finally, subtract the areas of the removed rectangular section and the circular hole from the initial large rectangular area to find the area of the remaining metal plate. Remaining Area = $150 \\text{ cm}^2 - 20 \\text{ cm}^2 - 12.56 \\text{ cm}^2 = 130 \\text{ cm}^2 - 12.56 \\text{ cm}^2 = 117.44 \\text{ cm}^2$."
          }
        ],
        "imagePath": "/assets/images/composite-figures/q1-section4.svg"
      },
      {
        "questionId": "s1-composite-q2-s4",
        "problemStatement": "A running track is designed as a composite shape made up of a rectangle with two semicircles attached to its opposite, shorter sides. The rectangular part of the track is 100 m long and 60 m wide. Inside this track, there is a rectangular playing field that measures 80 m by 40 m. Calculate the total area of the track surface (the shaded region, excluding the inner playing field). (Use $\\pi \\approx 3.14$)",
        "correctAnswer": 5626,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "First, determine the total area of the outer boundary of the running track (the stadium shape). This consists of the rectangular part and the two semicircular ends. The area of the rectangular part is length × width = $100 \\text{ m} \\times 60 \\text{ m} = 6000 \\text{ m}^2$."
          },
          {
            "stepNumber": 2,
            "text": "The two semicircles attached to the 60 m sides form one full circle. The radius of each semicircle is half of the width, so $r = 60 \\text{ m} / 2 = 30 \\text{ m}$. The area of one full circle (two semicircles combined) = $\\pi r^2 = 3.14 \\times (30)^2 = 3.14 \\times 900 = 2826 \\text{ m}^2$."
          },
          {
            "stepNumber": 3,
            "text": "Add the area of the rectangular part and the two semicircles to find the total area of the entire track shape: Total outer area = $6000 \\text{ m}^2 + 2826 \\text{ m}^2 = 8826 \\text{ m}^2$."
          },
          {
            "stepNumber": 4,
            "text": "Next, calculate the area of the rectangular playing field that needs to be excluded from the track surface. Area of playing field = length × width = $80 \\text{ m} \\times 40 \\text{ m} = 3200 \\text{ m}^2$."
          },
          {
            "stepNumber": 5,
            "text": "Finally, subtract the area of the playing field from the total outer area of the track to find the area of the track surface: Track surface area = $8826 \\text{ m}^2 - 3200 \\text{ m}^2 = 5626 \\text{ m}^2$."
          }
        ],
        "imagePath": "/assets/images/composite-figures/q2-section4.svg"
      },
      {
        "questionId": "s1-composite-q3-s4",
        "problemStatement": "A decorative tile is made of a square joined to a right-angled triangle. A semi-circular piece is cut out from one side of the square. The square has a side length of 10 cm. The height of the right-angled triangle is 8 cm. The diameter of the semi-circular cutout is equal to the side length of the square. If the total area of the tile is $120.75 \\text{ cm}^2$, find the length of the base of the right-angled triangle. (Use $\\pi \\approx 3.14$)",
        "correctAnswer": 15,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "First, calculate the area of the square component. Area of square = side × side = $10 \\text{ cm} \\times 10 \\text{ cm} = 100 \\text{ cm}^2$."
          },
          {
            "stepNumber": 2,
            "text": "Next, calculate the area of the semi-circular cutout. The diameter of the semi-circle is equal to the side length of the square, which is 10 cm. So, its radius is $r = 10 \\text{ cm} / 2 = 5 \\text{ cm}$. Area of semicircle = $0.5 \\times \\pi r^2 = 0.5 \\times 3.14 \\times (5)^2 = 0.5 \\times 3.14 \\times 25 = 39.25 \\text{ cm}^2$. This area will be subtracted from the total."
          },
          {
            "stepNumber": 3,
            "text": "Let the base of the right-angled triangle be 'x' cm. The height of the triangle is given as 8 cm. The area of the triangle = $0.5 \\times \\text{base} \\times \\text{height} = 0.5 \\times x \\times 8 = 4x \\text{ cm}^2$. This area will be added to the total."
          },
          {
            "stepNumber": 4,
            "text": "Set up an equation for the total area of the tile: Total Area = (Area of square + Area of triangle) - Area of semicircle. We are given the total area is $120.75 \\text{ cm}^2$. So, $120.75 = (100 + 4x) - 39.25$."
          },
          {
            "stepNumber": 5,
            "text": "Solve the equation for 'x': First simplify the right side: $120.75 = 60.75 + 4x$. Now, subtract 60.75 from both sides: $120.75 - 60.75 = 4x$, which simplifies to $60 = 4x$. Divide by 4: $x = 60 / 4 = 15$. So, the length of the base of the right-angled triangle is 15 cm."
          }
        ],
        "imagePath": "/assets/images/composite-figures/q3-section4.svg"
      },
      {
        "questionId": "s1-composite-q4-s4",
        "problemStatement": "A school courtyard has a complex paved design. It consists of a main rectangular section measuring 20 m by 12 m. Attached to one of its 12 m sides is a semi-circular garden bed (this area is part of the paved courtyard). From an adjacent corner of the rectangular section, a quarter-circular pond with a radius of 5 m is cut out. Additionally, a square planter box with a side length of 3 m is placed in the middle of the main rectangular section, also removed from the paved area. Calculate the total area of the paved courtyard. (Use $\\pi \\approx 3.14$)",
        "correctAnswer": 267.895,
        "stepByStepSolution": [
          {
            "stepNumber": 1,
            "text": "First, calculate the area of the main rectangular section of the courtyard: Area = length × width = $20 \\text{ m} \\times 12 \\text{ m} = 240 \\text{ m}^2$."
          },
          {
            "stepNumber": 2,
            "text": "Next, calculate the area of the semi-circular garden bed. It's attached to a 12 m side, so its diameter is 12 m, meaning its radius is $r = 12 \\text{ m} / 2 = 6 \\text{ m}$. Area of semicircle = $0.5 \\times \\pi r^2 = 0.5 \\times 3.14 \\times (6)^2 = 0.5 \\times 3.14 \\times 36 = 56.52 \\text{ m}^2$. This area is added to the rectangular section as it is part of the paved courtyard."
          },
          {
            "stepNumber": 3,
            "text": "Calculate the area of the quarter-circular pond that is cut out. Its radius is given as 5 m. Area of quarter circle = $0.25 \\times \\pi r^2 = 0.25 \\times 3.14 \\times (5)^2 = 0.25 \\times 3.14 \\times 25 = 19.625 \\text{ m}^2$. This area is subtracted because it is a cutout."
          },
          {
            "stepNumber": 4,
            "text": "Calculate the area of the square planter box that is also removed from the paved area. Area of square = side × side = $3 \\text{ m} \\times 3 \\text{ m} = 9 \\text{ m}^2$. This area is subtracted because it is removed."
          },
          {
            "stepNumber": 5,
            "text": "Combine all areas to find the total paved area: Total Area = (Area of rectangle + Area of semicircle) - Area of quarter circle - Area of square. Total Area = $(240 \\text{ m}^2 + 56.52 \\text{ m}^2) - 19.625 \\text{ m}^2 - 9 \\text{ m}^2 = 296.52 \\text{ m}^2 - 19.625 \\text{ m}^2 - 9 \\text{ m}^2 = 276.895 \\text{ m}^2 - 9 \\text{ m}^2 = 267.895 \\text{ m}^2$."
          }
        ],
        "imagePath": "/assets/images/composite-figures/q4-section4.svg"
      }
    ]
  }
];
