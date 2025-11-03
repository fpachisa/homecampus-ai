import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function Parallelograms() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Parallelograms</h1>
        <p className="mt-2 text-purple-100">Master the properties, perimeter, and area of parallelograms</p>
      </div>

      <div className="p-6">
        {/* Section 1: Quick Review - Rectangles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Quick Review: Rectangles
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Before we study parallelograms, let's quickly review rectangles. A <strong>rectangle</strong> is a special quadrilateral with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Four right angles (90° each)</li>
              <li>Opposite sides equal and parallel</li>
              <li>Perimeter: <MathText>{'$P = 2(l + w)$'}</MathText> or <MathText>{'$P = 2l + 2w$'}</MathText></li>
              <li>Area: <MathText>{'$A = l \\times w$'}</MathText></li>
            </ul>

            {/* Visual Example */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Rectangle Example:</h4>
              <MathToolRenderer
                toolName="rectangle"
                parameters={{
                  length: '12 cm',
                  width: '7 cm',
                  highlightMode: 'both',
                  showGrid: false,
                  vertexLabels: ['A', 'B', 'C', 'D']
                }}
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                Rectangle ABCD with length 12 cm and width 7 cm
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Parallelogram Properties */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What is a Parallelogram?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>parallelogram</strong> is a quadrilateral (four-sided shape) where:
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Properties:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Opposite sides are <strong>equal and parallel</strong></li>
                <li>Opposite angles are equal</li>
                <li>Adjacent angles are supplementary (sum to 180°)</li>
                <li>Diagonals bisect each other (cut each other in half)</li>
              </ul>
            </div>

            {/* Visual Example */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Parallelogram Properties:</h4>
              <MathToolRenderer
                toolName="parallelogram"
                parameters={{
                  base: '10 cm',
                  side: '6 cm',
                  height: '5 cm',
                  showPerpendicular: false,
                  showAngles: true,
                  vertexLabels: ['A', 'B', 'C', 'D']
                }}
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                Parallelogram with opposite sides equal: AB = CD = 10 cm, AD = BC = 6 cm
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Note:</strong> Rectangles and squares are special types of parallelograms! They have all the properties of parallelograms, plus additional special properties (like right angles).
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Perimeter of Parallelograms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Perimeter of Parallelograms
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>perimeter</strong> is the total distance around the parallelogram. Since opposite sides are equal, we can use the formula:
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="text-xl text-center font-semibold text-purple-800 dark:text-purple-300 my-3">
                <MathText>{'$\\text{Perimeter} = 2(a + b)$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-center text-sm">
                where <MathText>a</MathText> and <MathText>b</MathText> are the lengths of two adjacent (neighboring) sides
              </p>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
              Example 1: Finding the Perimeter
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A parallelogram has sides of length 12 cm and 8 cm. Find its perimeter.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Identify the values</p>
                <p className="ml-4"><MathText>{'$a = 12\\text{ cm}$'}</MathText>, <MathText>{'$b = 8\\text{ cm}$'}</MathText></p>
                <p><strong>Step 2:</strong> Use the perimeter formula</p>
                <p className="ml-4"><MathText>{'$P = 2(a + b)$'}</MathText></p>
                <p><strong>Step 3:</strong> Substitute and calculate</p>
                <p className="ml-4"><MathText>{'$P = 2(12 + 8)$'}</MathText></p>
                <p className="ml-4"><MathText>{'$P = 2(20)$'}</MathText></p>
                <p className="ml-4"><MathText>{'$P = 40\\text{ cm}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The perimeter is <MathText>{'$40\\text{ cm}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
              Example 2: Finding a Side Length
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A parallelogram has a perimeter of 56 cm. One side is 18 cm long. Find the length of an adjacent side.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Write what we know</p>
                <p className="ml-4"><MathText>{'$P = 56\\text{ cm}$'}</MathText>, <MathText>{'$a = 18\\text{ cm}$'}</MathText>, <MathText>{'$b = ?$'}</MathText></p>
                <p><strong>Step 2:</strong> Use the perimeter formula</p>
                <p className="ml-4"><MathText>{'$P = 2(a + b)$'}</MathText></p>
                <p><strong>Step 3:</strong> Substitute known values</p>
                <p className="ml-4"><MathText>{'$56 = 2(18 + b)$'}</MathText></p>
                <p><strong>Step 4:</strong> Solve for <MathText>b</MathText></p>
                <p className="ml-4"><MathText>{'$56 = 36 + 2b$'}</MathText></p>
                <p className="ml-4"><MathText>{'$20 = 2b$'}</MathText></p>
                <p className="ml-4"><MathText>{'$b = 10\\text{ cm}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The adjacent side is <MathText>{'$10\\text{ cm}$'}</MathText> long
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Area of Parallelograms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Area of Parallelograms
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>area</strong> of a parallelogram is the space it covers. The formula is:
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="text-xl text-center font-semibold text-purple-800 dark:text-purple-300 my-3">
                <MathText>{'$\\text{Area} = \\text{base} \\times \\text{height}$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-center text-sm">
                or <MathText>{'$A = b \\times h$'}</MathText>
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>⚠️ CRITICAL POINT:</strong> The <strong>height</strong> is the <strong>perpendicular distance</strong> between the base and the opposite side.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                It is <strong>NOT</strong> the slanted side length! This is a very common mistake.
              </p>
            </div>

            {/* Visual showing perpendicular height */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Understanding Height vs Slant Side:</h4>
              <MathToolRenderer
                toolName="parallelogram"
                parameters={{
                  base: '12 cm',
                  side: '7 cm',
                  height: '5 cm',
                  showPerpendicular: true,
                  angle: 60
                }}
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                The dashed line shows the perpendicular height (5 cm), which is different from the slant side (7 cm)
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Why does this work?</strong> If you imagine cutting off a triangle from one end of the parallelogram and sliding it to the other end, you can transform it into a rectangle. The area stays the same!
              </p>
            </div>

            {/* Transformation visualization */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Parallelogram to Rectangle Transformation:</h4>
              <MathToolRenderer
                toolName="parallelogram"
                parameters={{
                  base: '10 cm',
                  side: '6 cm',
                  height: '5 cm',
                  showPerpendicular: true,
                  showTransformation: true
                }}
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                Transforming a parallelogram into a rectangle shows why Area = base × height
              </p>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
              Example 3: Finding the Area
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A parallelogram has a base of 15 cm and a perpendicular height of 8 cm. Find its area.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Identify the values</p>
                <p className="ml-4"><MathText>{'$b = 15\\text{ cm}$'}</MathText>, <MathText>{'$h = 8\\text{ cm}$'}</MathText></p>
                <p><strong>Step 2:</strong> Use the area formula</p>
                <p className="ml-4"><MathText>{'$A = b \\times h$'}</MathText></p>
                <p><strong>Step 3:</strong> Substitute and calculate</p>
                <p className="ml-4"><MathText>{'$A = 15 \\times 8$'}</MathText></p>
                <p className="ml-4"><MathText>{'$A = 120\\text{ cm}^2$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The area is <MathText>{'$120\\text{ cm}^2$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
              Example 4: Finding the Height
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A parallelogram has an area of 96 cm² and a base of 12 cm. Find its perpendicular height.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Write what we know</p>
                <p className="ml-4"><MathText>{'$A = 96\\text{ cm}^2$'}</MathText>, <MathText>{'$b = 12\\text{ cm}$'}</MathText>, <MathText>{'$h = ?$'}</MathText></p>
                <p><strong>Step 2:</strong> Use the area formula</p>
                <p className="ml-4"><MathText>{'$A = b \\times h$'}</MathText></p>
                <p><strong>Step 3:</strong> Substitute known values</p>
                <p className="ml-4"><MathText>{'$96 = 12 \\times h$'}</MathText></p>
                <p><strong>Step 4:</strong> Solve for <MathText>h</MathText></p>
                <p className="ml-4"><MathText>{'$h = 96 \\div 12$'}</MathText></p>
                <p className="ml-4"><MathText>{'$h = 8\\text{ cm}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The perpendicular height is <MathText>{'$8\\text{ cm}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Perimeter
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A parallelogram has sides of length 20 cm and 14 cm. What is its perimeter?
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Formula:</strong> <MathText>{'$P = 2(a + b)$'}</MathText></p>
                  <p><strong>Substitute:</strong> <MathText>{'$P = 2(20 + 14)$'}</MathText></p>
                  <p><strong>Calculate:</strong> <MathText>{'$P = 2(34) = 68\\text{ cm}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$68\\text{ cm}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Area
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A parallelogram has a base of 18 cm and a perpendicular height of 11 cm. Find its area.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Formula:</strong> <MathText>{'$A = b \\times h$'}</MathText></p>
                  <p><strong>Substitute:</strong> <MathText>{'$A = 18 \\times 11$'}</MathText></p>
                  <p><strong>Calculate:</strong> <MathText>{'$A = 198\\text{ cm}^2$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$198\\text{ cm}^2$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Finding Missing Measurement
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A parallelogram has an area of 144 cm² and a base of 16 cm. Find the perpendicular height.
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Formula:</strong> <MathText>{'$A = b \\times h$'}</MathText></p>
                  <p><strong>Substitute:</strong> <MathText>{'$144 = 16 \\times h$'}</MathText></p>
                  <p><strong>Solve:</strong> <MathText>{'$h = 144 \\div 16 = 9\\text{ cm}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$9\\text{ cm}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Challenge Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A parallelogram has a perimeter of 84 cm and an area of 240 cm². One side is 24 cm and the base (for area calculation) is also 24 cm. Find:
              <br />(a) The other side length
              <br />(b) The perpendicular height
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Part (a): Finding the other side</strong></p>
                  <p className="ml-4"><strong>Formula:</strong> <MathText>{'$P = 2(a + b)$'}</MathText></p>
                  <p className="ml-4"><strong>Substitute:</strong> <MathText>{'$84 = 2(24 + b)$'}</MathText></p>
                  <p className="ml-4"><strong>Solve:</strong> <MathText>{'$84 = 48 + 2b$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$36 = 2b$'}</MathText>, so <MathText>{'$b = 18\\text{ cm}$'}</MathText></p>
                  <p className="mt-3"><strong>Part (b): Finding the height</strong></p>
                  <p className="ml-4"><strong>Formula:</strong> <MathText>{'$A = b \\times h$'}</MathText></p>
                  <p className="ml-4"><strong>Substitute:</strong> <MathText>{'$240 = 24 \\times h$'}</MathText></p>
                  <p className="ml-4"><strong>Solve:</strong> <MathText>{'$h = 240 \\div 24 = 10\\text{ cm}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answers:</strong> (a) Other side = <MathText>{'$18\\text{ cm}$'}</MathText>, (b) Height = <MathText>{'$10\\text{ cm}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Parallelograms have <strong>opposite sides equal and parallel</strong></li>
            <li><strong>Perimeter:</strong> <MathText>{'$P = 2(a + b)$'}</MathText> where <MathText>a</MathText> and <MathText>b</MathText> are adjacent sides</li>
            <li><strong>Area:</strong> <MathText>{'$A = \\text{base} \\times \\text{height}$'}</MathText></li>
            <li>⚠️ <strong>CRITICAL:</strong> Height is the <strong>perpendicular distance</strong>, NOT the slant side!</li>
            <li>You can transform a parallelogram into a rectangle to understand the area formula</li>
            <li>Always check which measurement is given - is it the height or the slant side?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
