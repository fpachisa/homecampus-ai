import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function Trapeziums() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-600 dark:to-cyan-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Trapeziums (Trapezoids)</h1>
        <p className="mt-2 text-teal-100">Learn about trapeziums, their properties, and how to find perimeter and area</p>
      </div>

      <div className="p-6">
        {/* Section 1: What is a Trapezium? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What is a Trapezium?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>trapezium</strong> (also called a <strong>trapezoid</strong> in some countries) is a quadrilateral (four-sided shape) with:
            </p>
            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Property:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Exactly one pair of parallel sides</strong></li>
                <li>The parallel sides are called <strong>bases</strong></li>
                <li>The non-parallel sides are called <strong>legs</strong> or <strong>slant sides</strong></li>
                <li>The perpendicular distance between the parallel sides is the <strong>height</strong></li>
              </ul>
            </div>

            {/* Visual Example */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Parts of a Trapezium:</h4>
              <MathToolRenderer
                toolName="trapezium"
                parameters={{
                  parallelSide1: 'a',
                  parallelSide2: 'b',
                  height: 'h',
                  leftSlant: 'c',
                  rightSlant: 'd',
                  showHeight: true,
                  highlightParallel: true,
                  showRightAngles: true,
                  vertexLabels: ['A', 'B', 'C', 'D']
                }}
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                Trapezium ABCD with parallel sides <MathText>a</MathText> and <MathText>b</MathText>, height <MathText>h</MathText>, and slant sides <MathText>c</MathText> and <MathText>d</MathText>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 text-center">
                Notice the tick marks (||) showing which sides are parallel
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Special types of trapeziums:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mt-2">
                <li><strong>Isosceles trapezium:</strong> Both legs (slant sides) are equal in length</li>
                <li><strong>Right trapezium:</strong> Has two right angles (90°)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Perimeter of Trapeziums */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Perimeter of Trapeziums
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>perimeter</strong> is the total distance around the trapezium. Since all four sides may be different lengths, we add them all:
            </p>
            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-4">
              <p className="text-xl text-center font-semibold text-teal-800 dark:text-teal-300 my-3">
                <MathText>{'$\\text{Perimeter} = a + b + c + d$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-center text-sm">
                where <MathText>a</MathText> and <MathText>b</MathText> are the parallel sides, and <MathText>c</MathText> and <MathText>d</MathText> are the slant sides
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Note:</strong> For an <strong>isosceles trapezium</strong> where both legs are equal (<MathText>{'$c = d$'}</MathText>), the formula becomes:
                <br />
                <MathText>{'$\\text{Perimeter} = a + b + 2c$'}</MathText>
              </p>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-teal-800 dark:text-teal-300 mb-2">
              Example 1: Finding the Perimeter
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A trapezium has parallel sides of 8 cm and 12 cm, and slant sides of 5 cm and 6 cm. Find its perimeter.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-teal-300 dark:border-teal-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Identify all four sides</p>
                <p className="ml-4"><MathText>{'$a = 8\\text{ cm}$'}</MathText>, <MathText>{'$b = 12\\text{ cm}$'}</MathText>, <MathText>{'$c = 5\\text{ cm}$'}</MathText>, <MathText>{'$d = 6\\text{ cm}$'}</MathText></p>
                <p><strong>Step 2:</strong> Use the perimeter formula</p>
                <p className="ml-4"><MathText>{'$P = a + b + c + d$'}</MathText></p>
                <p><strong>Step 3:</strong> Substitute and calculate</p>
                <p className="ml-4"><MathText>{'$P = 8 + 12 + 5 + 6$'}</MathText></p>
                <p className="ml-4"><MathText>{'$P = 31\\text{ cm}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The perimeter is <MathText>{'$31\\text{ cm}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-teal-800 dark:text-teal-300 mb-2">
              Example 2: Isosceles Trapezium
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              An isosceles trapezium has parallel sides of 10 cm and 16 cm. Each leg is 7 cm long. Find the perimeter.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-teal-300 dark:border-teal-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Identify the values</p>
                <p className="ml-4"><MathText>{'$a = 10\\text{ cm}$'}</MathText>, <MathText>{'$b = 16\\text{ cm}$'}</MathText>, <MathText>{'$c = d = 7\\text{ cm}$'}</MathText> (isosceles)</p>
                <p><strong>Step 2:</strong> Use the formula for isosceles trapezium</p>
                <p className="ml-4"><MathText>{'$P = a + b + 2c$'}</MathText></p>
                <p><strong>Step 3:</strong> Substitute and calculate</p>
                <p className="ml-4"><MathText>{'$P = 10 + 16 + 2(7)$'}</MathText></p>
                <p className="ml-4"><MathText>{'$P = 10 + 16 + 14$'}</MathText></p>
                <p className="ml-4"><MathText>{'$P = 40\\text{ cm}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The perimeter is <MathText>{'$40\\text{ cm}$'}</MathText>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Area of Trapeziums */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Area of Trapeziums
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>area</strong> of a trapezium uses the average of the two parallel sides, multiplied by the perpendicular height:
            </p>
            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-4">
              <p className="text-xl text-center font-semibold text-teal-800 dark:text-teal-300 my-3">
                <MathText>{'$\\text{Area} = \\frac{1}{2}(a + b) \\times h$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-center text-sm">
                where <MathText>a</MathText> and <MathText>b</MathText> are the parallel sides, and <MathText>h</MathText> is the perpendicular height
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-center text-sm mt-2">
                or equivalently: <MathText>{'$A = \\frac{(a + b) \\times h}{2}$'}</MathText>
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>⚠️ CRITICAL POINT:</strong> The <strong>height</strong> <MathText>h</MathText> is the <strong>perpendicular distance</strong> between the two parallel sides.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                It is <strong>NOT</strong> the length of the slant sides! This is a very common mistake.
              </p>
            </div>

            {/* Visual showing perpendicular height */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Understanding Height in a Trapezium:</h4>
              <MathToolRenderer
                toolName="trapezium"
                parameters={{
                  parallelSide1: '6 cm',
                  parallelSide2: '10 cm',
                  height: '5 cm',
                  leftSlant: '6 cm',
                  rightSlant: '6 cm',
                  showHeight: true,
                  highlightParallel: true,
                  highlightMode: 'height',
                  showRightAngles: true
                }}
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                The height (5 cm) is perpendicular to both parallel sides. Notice it's different from the slant sides (6 cm each)
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Understanding the formula:</strong> Think of <MathText>{'$\\frac{1}{2}(a + b)$'}</MathText> as the "average" of the two parallel sides.
                The trapezium's area is like a rectangle with width equal to this average and height <MathText>h</MathText>.
              </p>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-teal-800 dark:text-teal-300 mb-2">
              Example 3: Finding the Area
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A trapezium has parallel sides of 8 cm and 12 cm, and a perpendicular height of 6 cm. Find its area.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-teal-300 dark:border-teal-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Identify the values</p>
                <p className="ml-4"><MathText>{'$a = 8\\text{ cm}$'}</MathText>, <MathText>{'$b = 12\\text{ cm}$'}</MathText>, <MathText>{'$h = 6\\text{ cm}$'}</MathText></p>
                <p><strong>Step 2:</strong> Use the area formula</p>
                <p className="ml-4"><MathText>{'$A = \\frac{1}{2}(a + b) \\times h$'}</MathText></p>
                <p><strong>Step 3:</strong> Substitute and calculate</p>
                <p className="ml-4"><MathText>{'$A = \\frac{1}{2}(8 + 12) \\times 6$'}</MathText></p>
                <p className="ml-4"><MathText>{'$A = \\frac{1}{2}(20) \\times 6$'}</MathText></p>
                <p className="ml-4"><MathText>{'$A = 10 \\times 6$'}</MathText></p>
                <p className="ml-4"><MathText>{'$A = 60\\text{ cm}^2$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The area is <MathText>{'$60\\text{ cm}^2$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-teal-800 dark:text-teal-300 mb-2">
              Example 4: Finding the Height
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A trapezium has an area of 84 cm². Its parallel sides are 10 cm and 18 cm. Find the perpendicular height.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-teal-300 dark:border-teal-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Write what we know</p>
                <p className="ml-4"><MathText>{'$A = 84\\text{ cm}^2$'}</MathText>, <MathText>{'$a = 10\\text{ cm}$'}</MathText>, <MathText>{'$b = 18\\text{ cm}$'}</MathText>, <MathText>{'$h = ?$'}</MathText></p>
                <p><strong>Step 2:</strong> Use the area formula</p>
                <p className="ml-4"><MathText>{'$A = \\frac{1}{2}(a + b) \\times h$'}</MathText></p>
                <p><strong>Step 3:</strong> Substitute known values</p>
                <p className="ml-4"><MathText>{'$84 = \\frac{1}{2}(10 + 18) \\times h$'}</MathText></p>
                <p className="ml-4"><MathText>{'$84 = \\frac{1}{2}(28) \\times h$'}</MathText></p>
                <p className="ml-4"><MathText>{'$84 = 14 \\times h$'}</MathText></p>
                <p><strong>Step 4:</strong> Solve for <MathText>h</MathText></p>
                <p className="ml-4"><MathText>{'$h = 84 \\div 14$'}</MathText></p>
                <p className="ml-4"><MathText>{'$h = 6\\text{ cm}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The perpendicular height is <MathText>{'$6\\text{ cm}$'}</MathText>
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
              A trapezium has parallel sides of 7 cm and 11 cm, and slant sides of 5 cm and 6 cm. Find its perimeter.
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
                  <p><strong>Formula:</strong> <MathText>{'$P = a + b + c + d$'}</MathText></p>
                  <p><strong>Substitute:</strong> <MathText>{'$P = 7 + 11 + 5 + 6$'}</MathText></p>
                  <p><strong>Calculate:</strong> <MathText>{'$P = 29\\text{ cm}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$29\\text{ cm}$'}</MathText>
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
              A trapezium has parallel sides of 9 cm and 15 cm, and a height of 8 cm. Find its area.
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
                  <p><strong>Formula:</strong> <MathText>{'$A = \\frac{1}{2}(a + b) \\times h$'}</MathText></p>
                  <p><strong>Substitute:</strong> <MathText>{'$A = \\frac{1}{2}(9 + 15) \\times 8$'}</MathText></p>
                  <p><strong>Calculate:</strong> <MathText>{'$A = \\frac{1}{2}(24) \\times 8 = 12 \\times 8 = 96\\text{ cm}^2$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$96\\text{ cm}^2$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Finding a Parallel Side
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A trapezium has an area of 90 cm², one parallel side of 12 cm, and a height of 10 cm. Find the length of the other parallel side.
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
                  <p><strong>Formula:</strong> <MathText>{'$A = \\frac{1}{2}(a + b) \\times h$'}</MathText></p>
                  <p><strong>Substitute:</strong> <MathText>{'$90 = \\frac{1}{2}(12 + b) \\times 10$'}</MathText></p>
                  <p><strong>Simplify:</strong> <MathText>{'$90 = 5(12 + b)$'}</MathText></p>
                  <p><strong>Divide:</strong> <MathText>{'$18 = 12 + b$'}</MathText></p>
                  <p><strong>Solve:</strong> <MathText>{'$b = 6\\text{ cm}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$6\\text{ cm}$'}</MathText>
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
              An isosceles trapezium has parallel sides of 8 cm and 14 cm. Each leg is 5 cm long and the height is 4 cm. Find:
              <br />(a) The perimeter
              <br />(b) The area
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
                  <p><strong>Part (a): Perimeter</strong></p>
                  <p className="ml-4"><strong>Formula:</strong> <MathText>{'$P = a + b + 2c$'}</MathText> (isosceles)</p>
                  <p className="ml-4"><strong>Substitute:</strong> <MathText>{'$P = 8 + 14 + 2(5)$'}</MathText></p>
                  <p className="ml-4"><strong>Calculate:</strong> <MathText>{'$P = 8 + 14 + 10 = 32\\text{ cm}$'}</MathText></p>
                  <p className="mt-3"><strong>Part (b): Area</strong></p>
                  <p className="ml-4"><strong>Formula:</strong> <MathText>{'$A = \\frac{1}{2}(a + b) \\times h$'}</MathText></p>
                  <p className="ml-4"><strong>Substitute:</strong> <MathText>{'$A = \\frac{1}{2}(8 + 14) \\times 4$'}</MathText></p>
                  <p className="ml-4"><strong>Calculate:</strong> <MathText>{'$A = \\frac{1}{2}(22) \\times 4 = 11 \\times 4 = 44\\text{ cm}^2$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answers:</strong> (a) Perimeter = <MathText>{'$32\\text{ cm}$'}</MathText>, (b) Area = <MathText>{'$44\\text{ cm}^2$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-teal-50 dark:bg-teal-900/30 border-l-4 border-teal-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>A trapezium has <strong>exactly one pair of parallel sides</strong> (the bases)</li>
            <li><strong>Perimeter:</strong> <MathText>{'$P = a + b + c + d$'}</MathText> (sum of all four sides)</li>
            <li>For <strong>isosceles trapezium:</strong> <MathText>{'$P = a + b + 2c$'}</MathText> where both legs equal <MathText>c</MathText></li>
            <li><strong>Area:</strong> <MathText>{'$A = \\frac{1}{2}(a + b) \\times h$'}</MathText> where <MathText>a</MathText> and <MathText>b</MathText> are parallel sides</li>
            <li>⚠️ <strong>CRITICAL:</strong> Height <MathText>h</MathText> is the <strong>perpendicular distance</strong> between parallel sides, NOT the slant side!</li>
            <li>The area formula uses the <strong>average</strong> of the two parallel sides: <MathText>{'$\\frac{1}{2}(a + b)$'}</MathText></li>
            <li>Always identify which sides are parallel (look for tick marks || in diagrams)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
