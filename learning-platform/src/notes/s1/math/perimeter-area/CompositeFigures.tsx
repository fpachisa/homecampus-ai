import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function CompositeFigures() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Composite Figures</h1>
        <p className="mt-2 text-indigo-100">Master calculating perimeter and area of combined shapes</p>
      </div>

      <div className="p-6">
        {/* Section 1: What are Composite Figures? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What are Composite Figures?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>composite figure</strong> (also called a <strong>compound shape</strong>) is a shape made up of two or more simple geometric shapes combined together.
            </p>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Common Simple Shapes Used:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Rectangles and Squares</strong> - Most common building blocks</li>
                <li><strong>Triangles</strong> - Often used for corners or roofs</li>
                <li><strong>Semicircles and Circles</strong> - For curved edges</li>
                <li><strong>Trapeziums</strong> - For slanted sides</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Real-world examples:</strong> Floor plans, gardens, swimming pools, building designs, logos, and many everyday objects are composite figures!
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Strategy for Finding Perimeter */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Finding the Perimeter of Composite Figures
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>perimeter</strong> is the total distance around the <strong>outside</strong> of the composite figure.
            </p>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Strategy:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Trace around the <strong>outside edge</strong> of the figure</li>
                <li>Identify each segment of the perimeter</li>
                <li>Find any <strong>missing lengths</strong> using subtraction or addition</li>
                <li><strong>Add all the outer edge lengths</strong> together</li>
              </ol>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>⚠️ Common Mistake:</strong> Don't include internal edges (lines inside the figure that aren't part of the outer boundary)!
              </p>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
              Example 1: L-Shape Perimeter
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              An L-shaped figure is made from two rectangles joined together:
              <br />• Top horizontal rectangle: 12 cm wide × 4 cm tall
              <br />• Bottom left rectangle: 4 cm wide × 8 cm tall
              <br />Find the perimeter of the complete L-shape.
            </p>

            {/* Simple text-based diagram */}
            <div className="my-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm">
              <pre className="text-gray-700 dark:text-gray-300">
{`         12 cm
    ┌─────────────┐
    │             │ 4 cm
    │      ┌──────┘
    │      │
 12 │      │ 8 cm
 cm │      │
    └──────┘
      4 cm`}
              </pre>
            </div>

            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-indigo-300 dark:border-indigo-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Identify all outer edges going clockwise from top-left</p>
                <p className="ml-4">Top: 12 cm</p>
                <p className="ml-4">Right side (top part): 4 cm</p>
                <p className="ml-4">Horizontal indent (going left): 12 − 4 = 8 cm</p>
                <p className="ml-4">Right side (bottom part): 8 cm</p>
                <p className="ml-4">Bottom: 4 cm</p>
                <p className="ml-4">Left side (full height): 4 + 8 = 12 cm</p>
                <p><strong>Step 2:</strong> Add all outer edges</p>
                <p className="ml-4"><MathText>{'$P = 12 + 4 + 8 + 8 + 4 + 12$'}</MathText></p>
                <p className="ml-4"><MathText>{'$P = 48\\text{ cm}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The perimeter is <MathText>{'$48\\text{ cm}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
              Example 2: Rectangle with Semicircle (Stadium Shape)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A shape consists of a rectangle (20 m × 10 m) with a semicircle on top. The semicircle's diameter is the width of the rectangle (10 m). Find the perimeter.
            </p>

            <div className="my-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <MathToolRenderer
                toolName="semicircle"
                parameters={{
                  radius: '5 m',
                  orientation: 'top',
                  showDimensions: true
                }}
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                Semicircle with radius 5 m (diameter 10 m)
              </p>
            </div>

            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-indigo-300 dark:border-indigo-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Identify the outer edges</p>
                <p className="ml-4">Semicircle arc (top)</p>
                <p className="ml-4">Right side: 20 m</p>
                <p className="ml-4">Bottom: 10 m</p>
                <p className="ml-4">Left side: 20 m</p>
                <p><strong>Step 2:</strong> Calculate semicircle arc length</p>
                <p className="ml-4">Radius = <MathText>{'$10 \\div 2 = 5\\text{ m}$'}</MathText></p>
                <p className="ml-4">Arc length = <MathText>{'$\\pi r = \\pi \\times 5 = 5\\pi\\text{ m}$'}</MathText></p>
                <p><strong>Step 3:</strong> Add all outer edges</p>
                <p className="ml-4"><MathText>{'$P = 5\\pi + 20 + 10 + 20$'}</MathText></p>
                <p className="ml-4"><MathText>{'$P = 5\\pi + 50$'}</MathText></p>
                <p className="ml-4"><MathText>{'$P \\approx 15.71 + 50 = 65.71\\text{ m}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The perimeter is <MathText>{'$(50 + 5\\pi)\\text{ m} \\approx 65.71\\text{ m}$'}</MathText>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Strategy for Finding Area */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Finding the Area of Composite Figures
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For area, we need to <strong>break down</strong> the composite figure into simple shapes.
            </p>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Two Main Strategies:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Addition Method</strong>: Divide the figure into simple shapes and <strong>add</strong> their areas
                  <br />
                  <span className="text-sm ml-6">Best for: L-shapes, T-shapes, combinations</span>
                </li>
                <li>
                  <strong>Subtraction Method</strong>: Start with a larger shape and <strong>subtract</strong> cut-out areas
                  <br />
                  <span className="text-sm ml-6">Best for: Shapes with holes, cut corners, missing pieces</span>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Tip:</strong> Sometimes you can use either method! Choose the one that gives you simpler calculations.
              </p>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
              Example 3: L-Shape Area (Addition Method)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The same L-shape from Example 1:
              <br />• Top horizontal rectangle: 12 cm wide × 4 cm tall
              <br />• Bottom left rectangle: 4 cm wide × 8 cm tall
              <br />Find the total area.
            </p>

            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-indigo-300 dark:border-indigo-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution (Addition Method):</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Calculate area of each rectangle separately</p>
                <p className="ml-4">Top rectangle: <MathText>{'$12 \\times 4 = 48\\text{ cm}^2$'}</MathText></p>
                <p className="ml-4">Bottom left rectangle: <MathText>{'$4 \\times 8 = 32\\text{ cm}^2$'}</MathText></p>
                <p><strong>Step 2:</strong> Add the areas together</p>
                <p className="ml-4"><MathText>{'$A = 48 + 32 = 80\\text{ cm}^2$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The total area is <MathText>{'$80\\text{ cm}^2$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
              Example 4: Rectangle with Circle Cut Out (Subtraction Method)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A rectangular piece of cardboard (24 cm × 18 cm) has a circular hole of radius 4 cm cut from its center. Find the remaining area.
            </p>

            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-indigo-300 dark:border-indigo-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution (Subtraction Method):</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Find area of rectangle</p>
                <p className="ml-4"><MathText>{'$A_{\\text{rectangle}} = 24 \\times 18 = 432\\text{ cm}^2$'}</MathText></p>
                <p><strong>Step 2:</strong> Find area of circle</p>
                <p className="ml-4"><MathText>{'$A_{\\text{circle}} = \\pi r^2 = \\pi \\times 4^2 = 16\\pi\\text{ cm}^2$'}</MathText></p>
                <p className="ml-4"><MathText>{'$A_{\\text{circle}} \\approx 50.27\\text{ cm}^2$'}</MathText></p>
                <p><strong>Step 3:</strong> Subtract circle from rectangle</p>
                <p className="ml-4"><MathText>{'$A = 432 - 16\\pi$'}</MathText></p>
                <p className="ml-4"><MathText>{'$A \\approx 432 - 50.27 = 381.73\\text{ cm}^2$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The remaining area is <MathText>{'$(432 - 16\\pi)\\text{ cm}^2 \\approx 381.73\\text{ cm}^2$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: T-Shape Perimeter
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A T-shaped figure consists of:
              <br />• Top horizontal bar: 20 cm × 5 cm
              <br />• Vertical stem: 8 cm × 10 cm (centered below the bar)
              <br />Find the perimeter.
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
                  <p><strong>Outer edges clockwise from top-left:</strong></p>
                  <p className="ml-4">Top: 20 cm</p>
                  <p className="ml-4">Right (bar): 5 cm</p>
                  <p className="ml-4">Indent right: (20 - 8) ÷ 2 = 6 cm</p>
                  <p className="ml-4">Right (stem): 10 cm</p>
                  <p className="ml-4">Bottom: 8 cm</p>
                  <p className="ml-4">Left (stem): 10 cm</p>
                  <p className="ml-4">Indent left: 6 cm</p>
                  <p className="ml-4">Left (bar): 5 cm</p>
                  <p><strong>Total:</strong> <MathText>{'$P = 20 + 5 + 6 + 10 + 8 + 10 + 6 + 5 = 70\\text{ cm}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$70\\text{ cm}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: T-Shape Area
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Using the same T-shape from Practice 1, find the area.
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
                  <p><strong>Method: Addition</strong></p>
                  <p className="ml-4">Top bar: <MathText>{'$20 \\times 5 = 100\\text{ cm}^2$'}</MathText></p>
                  <p className="ml-4">Stem: <MathText>{'$8 \\times 10 = 80\\text{ cm}^2$'}</MathText></p>
                  <p className="ml-4">Total: <MathText>{'$A = 100 + 80 = 180\\text{ cm}^2$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$180\\text{ cm}^2$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Stadium Shape Area
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A running track is shaped like a rectangle (100 m × 60 m) with semicircles at both ends (radius 30 m). Find the total area enclosed.
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
                  <p><strong>Method: Addition</strong></p>
                  <p className="ml-4">Rectangle: <MathText>{'$100 \\times 60 = 6000\\text{ m}^2$'}</MathText></p>
                  <p className="ml-4">Two semicircles = 1 full circle: <MathText>{'$\\pi r^2 = \\pi \\times 30^2 = 900\\pi\\text{ m}^2$'}</MathText></p>
                  <p className="ml-4">Circle area: <MathText>{'$900\\pi \\approx 2827.43\\text{ m}^2$'}</MathText></p>
                  <p className="ml-4">Total: <MathText>{'$A = 6000 + 900\\pi \\approx 8827.43\\text{ m}^2$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$(6000 + 900\\pi)\\text{ m}^2 \\approx 8827.43\\text{ m}^2$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Challenge - U-Shape
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A U-shaped garden path is made from a rectangle (16 m × 10 m) with a rectangular section (8 m × 6 m) removed from the middle of one long side. Find:
              <br />(a) The perimeter of the path
              <br />(b) The area of the path
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
                  <p className="ml-4">Outer edges: 16 + 10 + 16 + 10 = 52 m</p>
                  <p className="ml-4">Inner cutout adds: 8 + 6 + 8 = 22 m (3 sides, bottom is internal)</p>
                  <p className="ml-4">Total: <MathText>{'$P = 52 + 22 = 74\\text{ m}$'}</MathText></p>
                  <p className="mt-3"><strong>Part (b): Area</strong></p>
                  <p className="ml-4">Large rectangle: <MathText>{'$16 \\times 10 = 160\\text{ m}^2$'}</MathText></p>
                  <p className="ml-4">Cutout rectangle: <MathText>{'$8 \\times 6 = 48\\text{ m}^2$'}</MathText></p>
                  <p className="ml-4">Remaining: <MathText>{'$A = 160 - 48 = 112\\text{ m}^2$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answers:</strong> (a) <MathText>{'$74\\text{ m}$'}</MathText>, (b) <MathText>{'$112\\text{ m}^2$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Composite figures</strong> are made from two or more simple shapes combined</li>
            <li><strong>Perimeter:</strong> Add all the <strong>outer edge</strong> lengths (don't include internal edges!)</li>
            <li><strong>Area - Addition Method:</strong> Break into simple shapes and <strong>add</strong> their areas</li>
            <li><strong>Area - Subtraction Method:</strong> Start with a large shape and <strong>subtract</strong> cut-outs</li>
            <li>Always find <strong>missing lengths</strong> using given dimensions (addition/subtraction)</li>
            <li>Draw lines to divide the figure into simple shapes you recognize</li>
            <li>Check your work: Does the answer make sense for the figure's size?</li>
            <li>For curves: Remember <MathText>{'$\\pi r^2$'}</MathText> for circles, <MathText>{'$\\pi r$'}</MathText> for semicircle arcs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
