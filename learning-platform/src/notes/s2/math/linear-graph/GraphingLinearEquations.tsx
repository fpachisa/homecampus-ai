import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

const GraphingLinearEquations = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Graphing Linear Equations</h1>
        <p className="text-lg text-cyan-100">Learning different methods to graph straight lines from equations</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Table of Values Method */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Table of Values Method
          </h2>

          <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              The Most Reliable Method
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This method works for any linear equation. Create a table of x and y values, then plot the points.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Steps:</p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>Choose several x-values (usually 3-5)</li>
                <li>Substitute each x-value into the equation to find y</li>
                <li>Create a table with these (x, y) pairs</li>
                <li>Plot all points on the coordinate plane</li>
                <li>Draw a straight line through the points</li>
              </ol>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Graph <MathText>y = 2x + 1</MathText> using a table of values
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p><strong>Step 1-2:</strong> Choose x-values and calculate y</p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-400 dark:border-gray-500">
                      <th className="p-3 text-left text-gray-900 dark:text-gray-100">x</th>
                      <th className="p-3 text-left text-gray-900 dark:text-gray-100">Calculation</th>
                      <th className="p-3 text-left text-gray-900 dark:text-gray-100">y</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <td className="p-3">−1</td>
                      <td className="p-3 text-sm">2(−1) + 1 = −1</td>
                      <td className="p-3 font-semibold">−1</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <td className="p-3">0</td>
                      <td className="p-3 text-sm">2(0) + 1 = 1</td>
                      <td className="p-3 font-semibold">1</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <td className="p-3">1</td>
                      <td className="p-3 text-sm">2(1) + 1 = 3</td>
                      <td className="p-3 font-semibold">3</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <td className="p-3">2</td>
                      <td className="p-3 text-sm">2(2) + 1 = 5</td>
                      <td className="p-3 font-semibold">5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Step 3-5:</strong> Plot points (−1, −1), (0, 1), (1, 3), (2, 5) and draw a line through them</p>
            </div>
          </div>

          {/* Visual: Graphing y = 2x + 1 from table of values */}
          <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visualizing y = 2x + 1 with Points from the Table:</h4>
            <MathToolRenderer
              toolName="functionGraph"
              parameters={{
                expression: "2*x + 1",
                xMin: -2,
                xMax: 3,
                yMin: -2,
                yMax: 7,
                showGrid: true,
                showPoints: [
                  { x: -1, label: "(−1,−1)", color: "#06b6d4" },
                  { x: 0, label: "(0,1)", color: "#06b6d4" },
                  { x: 1, label: "(1,3)", color: "#06b6d4" },
                  { x: 2, label: "(2,5)", color: "#06b6d4" }
                ],
                color: "#06b6d4",
                label: "y = 2x + 1",
                caption: "All points from the table lie on the same straight line!"
              }}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-700 mb-6">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">
              Tips for Choosing x-values
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>Include x = 0 (gives you the y-intercept quickly)</li>
              <li>Choose simple numbers like −2, −1, 0, 1, 2</li>
              <li>Avoid fractions if possible (makes plotting easier)</li>
              <li>Choose values that make sense for the context</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Create a table for <MathText>y = −x + 4</MathText> using x = 0, 2, 4
            </h3>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-400 dark:border-gray-500">
                      <th className="p-2 text-left text-gray-900 dark:text-gray-100">x</th>
                      <th className="p-2 text-left text-gray-900 dark:text-gray-100">y = −x + 4</th>
                      <th className="p-2 text-left text-gray-900 dark:text-gray-100">Point</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <td className="p-2">0</td>
                      <td className="p-2">−0 + 4 = 4</td>
                      <td className="p-2 font-semibold">(0, 4)</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <td className="p-2">2</td>
                      <td className="p-2">−2 + 4 = 2</td>
                      <td className="p-2 font-semibold">(2, 2)</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <td className="p-2">4</td>
                      <td className="p-2">−4 + 4 = 0</td>
                      <td className="p-2 font-semibold">(4, 0)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Intercepts Method */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Intercepts Method (Two Points)
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Fast Method Using Two Special Points
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Since two points determine a line, we only need to find where the line crosses each axis.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-purple-400">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">x-intercept</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Where line crosses x-axis<br />Set y = 0 and solve for x</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-purple-400">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">y-intercept</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Where line crosses y-axis<br />Set x = 0 and solve for y</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Graph <MathText>2x + 3y = 12</MathText> using intercepts
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold mb-2">Find x-intercept (set y = 0):</p>
                <p>2x + 3(0) = 12</p>
                <p>2x = 12</p>
                <p>x = 6</p>
                <p className="font-bold text-green-600 dark:text-green-400">Point: (6, 0)</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold mb-2">Find y-intercept (set x = 0):</p>
                <p>2(0) + 3y = 12</p>
                <p>3y = 12</p>
                <p>y = 4</p>
                <p className="font-bold text-green-600 dark:text-green-400">Point: (0, 4)</p>
              </div>

              <p className="bg-blue-100 dark:bg-blue-800/30 p-3 rounded">
                <strong>Final step:</strong> Plot (6, 0) and (0, 4), then draw a line through them
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Find intercepts for <MathText>x + 2y = 8</MathText>
            </h3>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold">x-intercept (y = 0):</p>
                    <p>x + 2(0) = 8 → x = 8</p>
                    <p className="font-bold text-green-600 dark:text-green-400">Point: (8, 0)</p>
                  </div>
                  <div>
                    <p className="font-semibold">y-intercept (x = 0):</p>
                    <p>0 + 2y = 8 → 2y = 8 → y = 4</p>
                    <p className="font-bold text-green-600 dark:text-green-400">Point: (0, 4)</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Gradient-Intercept Method */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Gradient-Intercept Method
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Quick Method for y = mx + c Form
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When equation is in <MathText>y = mx + c</MathText> form, use the gradient and y-intercept directly.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Steps:</p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>Plot the y-intercept (0, c) on the y-axis</li>
                <li>Use the gradient to find a second point (rise over run)</li>
                <li>Draw a line through both points</li>
              </ol>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Graph <MathText>y = 3x − 2</MathText>
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p><strong>Step 1:</strong> y-intercept is −2, so plot point (0, −2)</p>

              <p><strong>Step 2:</strong> Gradient = 3 = 3/1</p>
              <p className="ml-4">• This means: rise 3, run 1</p>
              <p className="ml-4">• From (0, −2): move right 1, up 3</p>
              <p className="ml-4 font-bold text-green-600 dark:text-green-400">• Second point: (1, 1)</p>

              <p><strong>Step 3:</strong> Draw line through (0, −2) and (1, 1)</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-700 mb-6">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">
              Understanding Rise and Run
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Positive Gradient: <MathText>m = 2</MathText>
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Rise = 2, Run = 1<br />
                  From any point: right 1, up 2
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Negative Gradient: <MathText>m = −3</MathText>
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Rise = −3, Run = 1<br />
                  From any point: right 1, down 3
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Describe how to graph <MathText>y = −2x + 5</MathText>
            </h3>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Plot y-intercept at (0, 5)</p>
                  <p><strong>Step 2:</strong> Gradient = −2 = −2/1</p>
                  <p className="ml-4">From (0, 5): move right 1, down 2</p>
                  <p className="ml-4 font-bold">Second point: (1, 3)</p>
                  <p><strong>Step 3:</strong> Draw line through (0, 5) and (1, 3)</p>
                  <p className="text-sm mt-3 bg-blue-100 dark:bg-blue-900/30 p-2 rounded">
                    The line slopes downward from left to right (negative gradient)
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Interpreting Graphs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            4. Interpreting Graphs in Context
          </h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Reading Real-World Information from Graphs
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When graphs represent real situations, we need to understand what the axes, gradient, and intercepts mean.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-700 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Key Questions to Ask
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">What do the axes represent?</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Example: x-axis = time (hours), y-axis = distance (km)
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">What does the gradient tell us?</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Rate of change – speed, cost per item, growth rate, etc.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">What does the y-intercept mean?</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Starting value, initial amount, fixed cost, etc.
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Are there domain/range restrictions?</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Can x or y be negative? Maximum/minimum values?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example: Water Tank Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A tank contains 200 litres initially and drains at 10 litres per hour. The equation is <MathText>L = 200 − 10h</MathText>.
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <p><strong>Gradient = −10:</strong> Tank loses 10 litres each hour (negative = decreasing)</p>
              <p><strong>y-intercept = 200:</strong> Starting amount is 200 litres</p>
              <p><strong>When is tank empty?</strong> Set L = 0: 0 = 200 − 10h → h = 20 hours</p>
              <p><strong>Domain:</strong> 0 ≤ h ≤ 20 (can't have negative time or go past empty)</p>
              <p><strong>Range:</strong> 0 ≤ L ≤ 200 (can't have negative water or more than started)</p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-cyan-50 dark:bg-cyan-900/30 border-l-4 border-cyan-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Table of values:</strong> Most reliable – choose x-values, calculate y, plot points</li>
            <li><strong>Intercepts method:</strong> Fast – find where line crosses each axis (set x=0 and y=0)</li>
            <li><strong>Gradient-intercept method:</strong> Quick for y = mx + c – plot c, then use rise/run</li>
            <li>Two points are enough to draw a straight line (but three is safer for checking)</li>
            <li>In real contexts, consider domain and range restrictions</li>
            <li>Gradient represents rate of change; y-intercept represents starting value</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GraphingLinearEquations;
