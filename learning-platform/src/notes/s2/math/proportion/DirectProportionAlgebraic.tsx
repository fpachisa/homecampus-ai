import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function DirectProportionAlgebraic() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Equations and Graphs of Direct Proportion</h1>
        <p className="mt-2 text-purple-100">
          Learn to express and visualize proportional relationships algebraically
        </p>
      </div>

      <div className="p-6">
        {/* Section 1: The Equation y = kx */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Equation y = kx
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we say "y is directly proportional to x", we can write this as an equation:
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-2 border-purple-300 dark:border-purple-700 mb-4">
              <div className="text-center text-xl mb-2">
                <MathText>y = kx</MathText>
              </div>
              <p className="text-center text-gray-700 dark:text-gray-300 text-sm">
                where k is a constant and k ≠ 0
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
              <li><strong className="text-purple-600 dark:text-purple-400">k</strong> is called the <strong>constant of proportionality</strong></li>
              <li>k represents the rate of change (how much y changes for each unit change in x)</li>
              <li><MathText>{'$k = \\frac{y}{x}$'}</MathText> for any corresponding values of x and y</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-blue-600 dark:text-blue-400">Remember:</strong> The constant k tells
                us how y and x are related. If k = 15, it means y increases by 15 units for every 1 unit
                increase in x.
              </p>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
              Example 1: Finding the Equation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              If y is directly proportional to x and y = 12 when x = 4, find:
            </p>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
              <li>(i) an equation connecting x and y</li>
              <li>(ii) the value of y when x = 8</li>
              <li>(iii) the value of x when y = 21</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong className="text-purple-600 dark:text-purple-400">Solution:</strong>
            </p>

            <div className="ml-4 space-y-4">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(i)</strong> Since y is directly proportional to x, we have y = kx
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  When x = 4, y = 12
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  12 = k × 4
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  k = 12 ÷ 4 = 3
                </p>
                <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-purple-600 dark:text-purple-400">Equation:</strong>{' '}
                    <MathText>y = 3x</MathText>
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(ii)</strong> When x = 8:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  y = 3 × 8 = 24
                </p>
                <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-purple-600 dark:text-purple-400">Answer:</strong> y = 24
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(iii)</strong> When y = 21:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  21 = 3x
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  <MathText>{'$x = \\frac{21}{3} = 7$'}</MathText>
                </p>
                <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-purple-600 dark:text-purple-400">Answer:</strong> x = 7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Graphing Direct Proportion */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Graphs of Direct Proportion
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The graph of y = kx is a <strong className="text-purple-600 dark:text-purple-400">straight line</strong> with two important properties:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border border-purple-300 dark:border-purple-700">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Property 1</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The line <strong>passes through the origin</strong> (0, 0)
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border border-purple-300 dark:border-purple-700">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Property 2</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The <strong>gradient equals k</strong> (the constant of proportionality)
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Let's visualize this with the equation y = 15x from our library fine example:
            </p>

            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50 mb-4">
              <MathToolRenderer
                toolName="cartesianPlane"
                parameters={{
                  xMin: 0,
                  xMax: 10,
                  yMin: 0,
                  yMax: 160,
                  points: [
                    { x: 0, y: 0, label: "(0, 0)", color: "#ef4444", style: "closed", labelPosition: "bottom-right" },
                    { x: 3, y: 45, label: "(3, 45)", color: "#8b5cf6", labelPosition: "left" },
                    { x: 6, y: 90, label: "(6, 90)", color: "#8b5cf6", labelPosition: "left" }
                  ],
                  lines: [
                    { type: "linear", slope: 15, yIntercept: 0, equation: "y = 15x", color: "#8b5cf6", style: "solid" }
                  ],
                  title: "Graph of y = 15x",
                  xLabel: "x (days)",
                  yLabel: "y (cents)",
                  showGrid: true
                }}
              />
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong className="text-blue-600 dark:text-blue-400">Key Observation:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>The red point (0, 0) shows the line passes through the origin</li>
                <li>The gradient = rise/run = 45/3 = 15, which equals k</li>
                <li>For every 1 unit increase in x, y increases by 15 units</li>
              </ul>
            </div>
          </div>

          {/* Comparing different values of k */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
              How k Affects the Graph
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Let's compare three different proportional relationships with different values of k:
            </p>

            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50 mb-4">
              <MathToolRenderer
                toolName="cartesianPlane"
                parameters={{
                  xMin: 0,
                  xMax: 10,
                  yMin: 0,
                  yMax: 50,
                  lines: [
                    { type: "linear", slope: 2, yIntercept: 0, equation: "y = 2x", color: "#10b981", style: "solid" },
                    { type: "linear", slope: 4, yIntercept: 0, equation: "y = 4x", color: "#3b82f6", style: "solid" },
                    { type: "linear", slope: 8, yIntercept: 0, equation: "y = 8x", color: "#ef4444", style: "solid" }
                  ],
                  title: "Comparing Different Values of k",
                  xLabel: "x",
                  yLabel: "y",
                  showGrid: true
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-400 dark:border-green-700">
                <p className="text-green-700 dark:text-green-300 font-semibold">y = 2x (k = 2)</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Gentle slope</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-400 dark:border-blue-700">
                <p className="text-blue-700 dark:text-blue-300 font-semibold">y = 4x (k = 4)</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Moderate slope</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded border border-red-400 dark:border-red-700">
                <p className="text-red-700 dark:text-red-300 font-semibold">y = 8x (k = 8)</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Steep slope</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mt-4">
              <strong className="text-purple-600 dark:text-purple-400">Notice:</strong> The larger the
              value of k, the steeper the line. All lines pass through the origin!
            </p>
          </div>
        </section>

        {/* Section 3: Identifying Direct Proportion from Graphs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Is This Graph Direct Proportion?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Not all straight-line graphs represent direct proportion! A graph shows direct proportion
              <strong className="text-purple-600 dark:text-purple-400"> only if</strong> it passes through
              the origin.
            </p>

            {/* Worked Example 2: Non-example */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Example 2: Mobile Phone Bill
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A mobile plan charges a fixed amount of $20 plus $0.20 for every minute used. The total
                monthly charges C and number of minutes n are related by: C = 0.2n + 20
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Is C directly proportional to n?
              </p>

              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-800 mb-4">
                <MathToolRenderer
                  toolName="cartesianPlane"
                  parameters={{
                    xMin: 0,
                    xMax: 140,
                    yMin: 0,
                    yMax: 50,
                    points: [
                      { x: 0, y: 20, label: "(0, 20)", color: "#ef4444", style: "closed", labelPosition: "right" },
                      { x: 120, y: 44, label: "(120, 44)", color: "#8b5cf6", labelPosition: "top-left" }
                    ],
                    lines: [
                      { type: "linear", slope: 0.2, yIntercept: 20, equation: "C = 0.2n + 20", color: "#8b5cf6", style: "solid" }
                    ],
                    title: "Mobile Bill: C = 0.2n + 20",
                    xLabel: "n (minutes)",
                    yLabel: "C (dollars)",
                    showGrid: true
                  }}
                />
              </div>

              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-300 dark:border-red-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong className="text-red-600 dark:text-red-400">Answer: NO</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  C is <strong>not directly proportional</strong> to n because the line does not pass through
                  the origin. When n = 0, C = 20 (not zero). The equation has the form C = 0.2n + 20, not C = kn.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-blue-600 dark:text-blue-400">Rule:</strong> For direct proportion,
                the equation must be y = kx (no constant term added). If there's a "+ c" at the end where
                c ≠ 0, it's NOT direct proportion.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice Problems
          </h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Finding k and Values
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              If y is directly proportional to x and y = 10 when x = 2, find:
            </p>
            <ul className="list-none space-y-1 text-gray-700 dark:text-gray-300 ml-4 mb-3">
              <li>(i) an equation connecting x and y</li>
              <li>(ii) the value of y when x = 10</li>
              <li>(iii) the value of x when y = 60</li>
            </ul>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700 space-y-3">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>(i)</strong> Since y ∝ x, then y = kx</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4">When x = 2, y = 10</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4">10 = k × 2</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4">k = 5</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4">
                    <strong className="text-yellow-600 dark:text-yellow-400">Equation: y = 5x</strong>
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>(ii)</strong> When x = 10:</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4">y = 5 × 10 = 50</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4">
                    <strong className="text-yellow-600 dark:text-yellow-400">Answer: y = 50</strong>
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>(iii)</strong> When y = 60:</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4">60 = 5x</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4">x = 12</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4">
                    <strong className="text-yellow-600 dark:text-yellow-400">Answer: x = 12</strong>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Finding k from Graph
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Given that q is directly proportional to p, copy and complete the table:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="border-collapse border border-gray-300 dark:border-gray-600 mx-auto">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">p</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">4</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">5</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">7</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">?</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">q</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">?</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">30</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">?</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">48</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">57</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 1:</strong> Find k using the given values (p = 5, q = 30)
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-2">
                  q = kp, so 30 = k × 5
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-3">
                  k = 6, so <MathText>q = 6p</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 2:</strong> Complete the table:
                </p>
                <div className="overflow-x-auto mb-2">
                  <table className="border-collapse border border-gray-300 dark:border-gray-600 mx-auto">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">p</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">4</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">5</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">7</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">8</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">9.5</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">q</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-yellow-600 dark:text-yellow-400 font-semibold">24</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">30</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-yellow-600 dark:text-yellow-400 font-semibold">42</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">48</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">57</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Proportional or Not?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Li Ting's height and weight increase as she grows older. Do you think her height and weight
              are in direct proportion? Give reasons to support your answer.
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong className="text-yellow-600 dark:text-yellow-400">Answer: NO</strong>, height and
                  weight are not in direct proportion.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Reasons:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>The ratio weight/height is not constant as she grows</li>
                  <li>When height doubles from 80cm to 160cm, weight does not double</li>
                  <li>Weight depends on many factors beyond height (muscle mass, bone density, etc.)</li>
                  <li>If we plot height vs weight, the graph would not be a straight line through the origin</li>
                </ul>
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
            <li>Direct proportion is expressed as <MathText>y = kx</MathText> where k is the constant of proportionality</li>
            <li>The graph of direct proportion is a straight line passing through the origin (0, 0)</li>
            <li>The gradient of the line equals k</li>
            <li>Larger values of k give steeper lines</li>
            <li>If a line has the form <MathText>y = kx + c</MathText> where c ≠ 0, it is NOT direct proportion</li>
            <li>To find k: use <MathText>{'$k = \\frac{y}{x}$'}</MathText> from any corresponding pair of values</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
