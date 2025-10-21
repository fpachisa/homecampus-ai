import React, { useState } from 'react';

const GraphingStraightLines = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Graphing Straight Lines</h1>
        <p className="text-lg">Learning to graph lines and find equations from graphs</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Graphing from Gradient-Intercept Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">1. Graphing Lines in Gradient-Intercept Form</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Graphing y = mx + c:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              To draw the graph of y = mx + c:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>Use the <strong>y-intercept c</strong> to plot the point (0, c)</li>
              <li>Starting from (0, c), use <strong>horizontal and vertical steps</strong> from the gradient m to locate another point on the line</li>
              <li>Join the two points and <strong>extend the line</strong> in both directions</li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Understanding Gradient as Steps:</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Example: gradient = 3/4</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                  • From any point on the line, move <strong>4 units right</strong> (x-step)
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                  • Then move <strong>3 units up</strong> (y-step)
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                  • You'll land on another point on the line
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Example: gradient = −2</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                  • Think of −2 as −2/1
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                  • From any point, move <strong>1 unit right</strong> (x-step)
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                  • Then move <strong>2 units down</strong> (y-step is negative)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">Important Tip:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Always let the <strong>horizontal step be positive</strong>. If you have a negative gradient, the vertical step will be negative (move down instead of up).
            </p>
          </div>
        </div>

        {/* Section 2: Graphing from General Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">2. Graphing Lines in General Form</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Graphing ax + by = d:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              To draw the graph of ax + by = d:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>Find the <strong>y-intercept</strong> by letting x = 0</li>
              <li>Find the <strong>x-intercept</strong> by letting y = 0</li>
              <li>Join the points where the line cuts the axes and <strong>extend the line</strong> in both directions</li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Finding the Intercepts:</h3>
            <div className="space-y-3">
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Finding the y-intercept:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4 mb-1">
                  • Let x = 0 in the equation
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4 mb-1">
                  • Solve for y
                </p>
                <p className="text-sm font-mono text-gray-800 dark:text-gray-200 ml-4">
                  Example: 2x + 3y = 12 → 2(0) + 3y = 12 → y = 4
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 ml-4 mt-1">
                  The line cuts the y-axis at (0, 4)
                </p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Finding the x-intercept:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4 mb-1">
                  • Let y = 0 in the equation
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4 mb-1">
                  • Solve for x
                </p>
                <p className="text-sm font-mono text-gray-800 dark:text-gray-200 ml-4">
                  Example: 2x + 3y = 12 → 2x + 3(0) = 12 → x = 6
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 ml-4 mt-1">
                  The line cuts the x-axis at (6, 0)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Finding Equations from Graphs */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">3. Finding the Equation of a Line from a Graph</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Strategy:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              To find the equation from a graph, you need to determine:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>The <strong>gradient</strong> of the line</li>
              <li>Either:
                <ul className="ml-8 mt-1 list-disc list-inside">
                  <li>The <strong>y-intercept</strong> (for gradient-intercept form), or</li>
                  <li><strong>One point</strong> on the line (for point-gradient form)</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Methods for Finding the Gradient from a Graph:</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Method 1: Choose two clear points</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                  • Identify two points where the line passes through grid intersections
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                  • Use the gradient formula: m = (y₂ − y₁)/(x₂ − x₁)
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Method 2: Count the steps</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                  • From one point on the line, count how many units you move horizontally
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                  • Count how many units you move vertically to reach another point on the line
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                  • Gradient = vertical step / horizontal step
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">Special Cases:</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p><strong>Horizontal line:</strong> All points have the same y-coordinate → equation is y = k</p>
              <p><strong>Vertical line:</strong> All points have the same x-coordinate → equation is x = k</p>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-orange-100 dark:bg-orange-900/50 rounded-lg font-semibold hover:bg-orange-200 dark:hover:bg-orange-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Graphing y = (4/3)x − 5
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-orange-500 dark:border-orange-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Draw the graph of y = (4/3)x − 5
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Identify the gradient and y-intercept</p>
                    <p className="ml-4">Gradient m = 4/3</p>
                    <p className="ml-4">y-intercept c = −5</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Plot the y-intercept</p>
                    <p className="ml-4">Plot the point (0, −5) on the y-axis</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 3: Use the gradient to find another point</p>
                    <p className="ml-4">Gradient = 4/3 means:</p>
                    <p className="ml-4">• From (0, −5), move 3 units right → x = 3</p>
                    <p className="ml-4">• Then move 4 units up → y = −5 + 4 = −1</p>
                    <p className="ml-4">• Plot the point (3, −1)</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 4: Draw the line</p>
                    <p className="ml-4">Join (0, −5) and (3, −1) and extend in both directions</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200">
                      The line passes through (0, −5) and (3, −1), with positive gradient
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-orange-100 dark:bg-orange-900/50 rounded-lg font-semibold hover:bg-orange-200 dark:hover:bg-orange-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Graphing 2x + 3y = 12
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-orange-500 dark:border-orange-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Draw the graph of 2x + 3y = 12
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Find the y-intercept (let x = 0)</p>
                    <p className="ml-4 font-mono">2(0) + 3y = 12</p>
                    <p className="ml-4 font-mono">3y = 12</p>
                    <p className="ml-4 font-mono">y = 4</p>
                    <p className="ml-4">So the y-intercept is (0, 4)</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Find the x-intercept (let y = 0)</p>
                    <p className="ml-4 font-mono">2x + 3(0) = 12</p>
                    <p className="ml-4 font-mono">2x = 12</p>
                    <p className="ml-4 font-mono">x = 6</p>
                    <p className="ml-4">So the x-intercept is (6, 0)</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 3: Draw the line</p>
                    <p className="ml-4">Plot (0, 4) and (6, 0)</p>
                    <p className="ml-4">Join these points and extend in both directions</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200">
                      The line passes through (0, 4) and (6, 0)
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. Draw the graph of each line using gradient and y-intercept:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) y = 2x + 1</p>
                <p>b) y = −x + 4</p>
                <p>c) y = (1/2)x − 3</p>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Draw the graph of each line using the axes intercepts:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) x + y = 5</p>
                <p>b) 3x − 4y = 12</p>
                <p>c) 2x + 5y = 10</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-orange-600 dark:text-orange-400 hover:underline">Show Hints</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> x-intercept: (5, 0), y-intercept: (0, 5)</p>
                  <p><strong>b)</strong> x-intercept: (4, 0), y-intercept: (0, −3)</p>
                  <p><strong>c)</strong> x-intercept: (5, 0), y-intercept: (0, 2)</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                3. Find the gradient and y-intercept by reading from the graph:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) A line passes through (0, 3) and (2, 7)</p>
                <p>b) A line passes through (0, −1) and (4, −5)</p>
                <p>c) A line passes through (0, 2) with gradient −3</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-orange-600 dark:text-orange-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> Gradient = (7−3)/(2−0) = 2, y-intercept = 3 → y = 2x + 3</p>
                  <p><strong>b)</strong> Gradient = (−5−(−1))/(4−0) = −1, y-intercept = −1 → y = −x − 1</p>
                  <p><strong>c)</strong> Gradient = −3, y-intercept = 2 → y = −3x + 2</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>From y = mx + c:</strong> Plot (0, c), use gradient steps to find another point</li>
            <li><strong>From ax + by = d:</strong> Find x-intercept (y = 0) and y-intercept (x = 0), then join them</li>
            <li>Gradient tells you the <strong>rise over run</strong>: vertical step / horizontal step</li>
            <li>Always <strong>extend the line</strong> in both directions with arrows</li>
            <li>To find equation from graph: determine gradient and y-intercept</li>
            <li><strong>Horizontal line:</strong> y = k (gradient = 0)</li>
            <li><strong>Vertical line:</strong> x = k (undefined gradient)</li>
            <li>Check your work by testing if known points satisfy the equation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GraphingStraightLines;
