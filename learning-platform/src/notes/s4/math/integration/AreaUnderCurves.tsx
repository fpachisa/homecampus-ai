import { useState } from 'react';

const AreaUnderCurves = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showPractice1, setShowPractice1] = useState(false);
  const [showPractice2, setShowPractice2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">The Area Under a Curve</h1>
        <p className="text-lg">Understanding integration through geometric areas</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Finding Areas with Geometric Shapes */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">
            1. Finding Areas Using Geometric Shapes
          </h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Fundamental Idea:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The area under a curve can be estimated using <strong>basic geometric shapes</strong> that we already
              know how to calculate: rectangles, triangles, and trapezoids.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Key Formulas:</p>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li className="font-mono">• Rectangle: A = length × width</li>
                <li className="font-mono">• Triangle: A = ½ × base × height</li>
                <li className="font-mono">• Trapezoid: A = ½ × (a + b) × h</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 1: Area Under a Straight Line</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Find the area under the line y = 2x from x = 0 to x = 3.
            </p>

            <button
              onClick={() => setShowExample1(!showExample1)}
              className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors mb-3"
            >
              {showExample1 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showExample1 && (
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded border border-indigo-200 dark:border-indigo-700 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 1: Visualize the region</p>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    The line y = 2x from x = 0 to x = 3 forms a <strong>triangle</strong> with the x-axis.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 2: Identify the shape</p>
                  <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
                    This is a right triangle with:
                  </p>
                  <ul className="text-sm text-gray-800 dark:text-gray-200 ml-4 space-y-1">
                    <li>• Base = 3 (from x = 0 to x = 3)</li>
                    <li>• Height = y(3) = 2(3) = 6</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 3: Calculate the area</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    A = ½ × base × height
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    A = ½ × 3 × 6
                  </p>
                  <p className="text-sm font-mono font-bold text-indigo-700 dark:text-indigo-300 mt-2">
                    A = 9 square units
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 2: Counting Squares Method */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">
            2. The Counting Squares Method
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Approach:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              For irregular curves, we can estimate the area by overlaying a <strong>grid</strong> and counting:
            </p>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200 ml-4">
              <li>• <strong>Full squares</strong> - completely under the curve</li>
              <li>• <strong>Partial squares</strong> - partly under the curve (count as ½)</li>
            </ul>
            <div className="bg-white dark:bg-gray-800 p-3 rounded mt-3">
              <p className="text-sm font-mono text-gray-900 dark:text-gray-100">
                Approximate Area ≈ (full squares) + ½(partial squares)
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 2: Using a Grid</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              A curve is drawn on a grid where each square represents 1 square unit. The region under the curve
              contains 24 full squares and 8 partial squares. Estimate the area.
            </p>

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors mb-3"
            >
              {showExample2 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showExample2 && (
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border border-purple-200 dark:border-purple-700 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Apply the formula:</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    Area ≈ (full squares) + ½(partial squares)
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    Area ≈ 24 + ½(8)
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    Area ≈ 24 + 4
                  </p>
                  <p className="text-sm font-mono font-bold text-purple-700 dark:text-purple-300 mt-2">
                    Area ≈ 28 square units
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-xs text-gray-900 dark:text-gray-100 font-semibold mb-1">Note:</p>
                  <p className="text-xs text-gray-800 dark:text-gray-200">
                    This is an <strong>approximation</strong>. The finer the grid, the more accurate the estimate!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Approximating with Rectangles */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">
            3. Rectangle Approximation Method
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Method:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              We can approximate the area under any curve by dividing the region into <strong>vertical rectangles</strong>
              and summing their areas.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Three Approaches:</p>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>• <strong>Left Rectangle</strong>: Height = f(left edge of interval)</li>
                <li>• <strong>Right Rectangle</strong>: Height = f(right edge of interval)</li>
                <li>• <strong>Midpoint</strong>: Height = f(middle of interval)</li>
              </ul>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                More rectangles → More accurate approximation!
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 3: Rectangle Approximation</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Approximate the area under f(x) = x² from x = 0 to x = 4 using 4 rectangles of equal width (left endpoint method).
            </p>

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors mb-3"
            >
              {showExample3 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showExample3 && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 1: Find the width</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    Width = (4 - 0) / 4 = 1
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Intervals: [0,1], [1,2], [2,3], [3,4]
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 2: Calculate heights (left endpoints)</p>
                  <div className="text-sm font-mono text-gray-800 dark:text-gray-200 space-y-1">
                    <p>• h₁ = f(0) = 0² = 0</p>
                    <p>• h₂ = f(1) = 1² = 1</p>
                    <p>• h₃ = f(2) = 2² = 4</p>
                    <p>• h₄ = f(3) = 3² = 9</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 3: Sum the rectangle areas</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    Area ≈ (width)(h₁ + h₂ + h₃ + h₄)
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    Area ≈ (1)(0 + 1 + 4 + 9)
                  </p>
                  <p className="text-sm font-mono font-bold text-blue-700 dark:text-blue-300 mt-2">
                    Area ≈ 14 square units
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    (The exact area is 64/3 ≈ 21.33, so our approximation underestimates)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 4: From Approximation to Integration */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">
            4. Introduction to Integration
          </h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Big Idea:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              As we use <strong>more and more rectangles</strong> (making them thinner), our approximation gets
              better and better. In the <strong>limit</strong>, as the number of rectangles approaches infinity,
              we get the <strong>exact area</strong>.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-center font-semibold text-gray-900 dark:text-gray-100 mb-2">
                This limiting process is called <span className="text-green-700 dark:text-green-300">INTEGRATION</span>
              </p>
              <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100">
                Area = ∫ₐᵇ f(x) dx
              </p>
              <p className="text-center text-xs text-gray-600 dark:text-gray-400 mt-2">
                Read as: "the integral from a to b of f(x) dx"
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-300 dark:border-gray-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">What Integration Represents:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>✓ Exact area under a curve</li>
                <li>✓ Accumulation of quantities</li>
                <li>✓ Total change over an interval</li>
                <li>✓ Reverse of differentiation</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-300 dark:border-gray-600">
              <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Real-World Applications:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>• Distance from velocity</li>
                <li>• Total cost from marginal cost</li>
                <li>• Work from force</li>
                <li>• Volume from cross-sections</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-5 rounded border-2 border-indigo-300 dark:border-indigo-600">
              <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">Problem 1:</p>
              <p className="text-gray-800 dark:text-gray-200 mb-3">
                Find the area under the line y = 3x + 2 from x = 1 to x = 4 using geometric shapes.
              </p>

              <button
                onClick={() => setShowPractice1(!showPractice1)}
                className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors text-sm"
              >
                {showPractice1 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showPractice1 && (
                <div className="mt-4 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded border border-indigo-200 dark:border-indigo-700">
                  <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
                    The region is a trapezoid with parallel sides along x = 1 and x = 4.
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    Height 1: y(1) = 3(1) + 2 = 5
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    Height 2: y(4) = 3(4) + 2 = 14
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200 mt-2">
                    Base: 4 - 1 = 3
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200 mt-2">
                    Area = ½(5 + 14)(3) = ½(19)(3) = <strong className="text-indigo-700 dark:text-indigo-300">28.5 square units</strong>
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded border-2 border-purple-300 dark:border-purple-600">
              <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">Problem 2:</p>
              <p className="text-gray-800 dark:text-gray-200 mb-3">
                A region under a curve on a grid has 18 full squares and 12 partial squares. If each square
                represents 0.5 square units, estimate the total area.
              </p>

              <button
                onClick={() => setShowPractice2(!showPractice2)}
                className="px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors text-sm"
              >
                {showPractice2 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showPractice2 && (
                <div className="mt-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded border border-purple-200 dark:border-purple-700">
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    Number of squares ≈ 18 + ½(12) = 18 + 6 = 24
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200 mt-2">
                    Area ≈ 24 × 0.5 = <strong className="text-purple-700 dark:text-purple-300">12 square units</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 p-6 rounded-lg border-2 border-indigo-300 dark:border-indigo-600">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900 dark:text-indigo-200">Key Takeaways</h2>
          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Areas under curves can be estimated using geometric shapes (rectangles, triangles, trapezoids)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>The counting squares method provides quick approximations for irregular curves</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Rectangle approximation (left, right, midpoint) becomes more accurate with more rectangles</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Integration is the limiting process of rectangle approximation as rectangles become infinitesimally thin</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>The definite integral ∫ₐᵇ f(x) dx represents the exact area under f(x) from x = a to x = b</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AreaUnderCurves;
