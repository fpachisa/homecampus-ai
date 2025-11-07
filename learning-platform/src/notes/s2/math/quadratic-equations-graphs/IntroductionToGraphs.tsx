import { useState } from 'react';
import MathText from '../../../../components/MathText';
import ParabolaGraphVisualizer from '../../../../components/math-tools/ParabolaGraphVisualizer';

export default function IntroductionToGraphs() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Graphing Quadratic Functions</h1>
        <p className="mt-2 text-cyan-100">Understand and draw parabola graphs</p>
      </div>

      <div className="bg-white dark:bg-gray-800 px-6 pb-6 rounded-b-lg">

        {/* Section 1: The Parabola Shape */}
        <section className="mb-8 mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Parabola Shape
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The graph of a quadratic function is called a <strong>parabola</strong>. It has a distinctive U-shape or inverted U-shape.
            </p>

            {/* Visual: Basic Parabola Shapes with actual graphs */}
            <div className="space-y-4 mb-6">
              {/* Upward Opening */}
              <div className="bg-gradient-to-b from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-400 dark:border-blue-500 p-5 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3 text-center">
                  Opens Upward (∪)
                </h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-600">
                  <ParabolaGraphVisualizer
                    a={1}
                    b={0}
                    c={0}
                    showVertex={true}
                    showAxisOfSymmetry={true}
                    showIntercepts={false}
                    xRange={[-5, 5]}
                    yRange={[-2, 10]}
                  />
                  <p className="text-sm text-blue-700 dark:text-blue-400 text-center mt-2">
                    When <strong>a &gt; 0</strong>: <MathText>y = x²</MathText>
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1 text-center italic">
                    Has a minimum point
                  </p>
                </div>
              </div>

              {/* Downward Opening */}
              <div className="bg-gradient-to-b from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 border-2 border-red-400 dark:border-red-500 p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3 text-center">
                  Opens Downward (∩)
                </h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-red-200 dark:border-red-600">
                  <ParabolaGraphVisualizer
                    a={-1}
                    b={0}
                    c={0}
                    showVertex={true}
                    showAxisOfSymmetry={true}
                    showIntercepts={false}
                    xRange={[-5, 5]}
                    yRange={[-10, 2]}
                  />
                  <p className="text-sm text-red-700 dark:text-red-400 text-center mt-2">
                    When <strong>a &lt; 0</strong>: <MathText>y = -x²</MathText>
                  </p>
                  <p className="text-xs text-red-600 dark:text-red-400 mt-1 text-center italic">
                    Has a maximum point
                  </p>
                </div>
              </div>
            </div>

            {/* Visual: Effect of Coefficient a */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-400 dark:border-purple-500 p-5 rounded-lg mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-4 text-center">
                How Coefficient 'a' Affects the Parabola
              </h3>
              <div className="space-y-4">
                {/* Wide parabola */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-purple-300 dark:border-purple-600">
                  <p className="text-center font-semibold text-purple-700 dark:text-purple-300 mb-3">0 &lt; |a| &lt; 1 - WIDER parabola</p>
                  <ParabolaGraphVisualizer
                    a={0.5}
                    b={0}
                    c={0}
                    showVertex={true}
                    showAxisOfSymmetry={false}
                    showIntercepts={false}
                    xRange={[-5, 5]}
                    yRange={[-1, 8]}
                  />
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-3">
                    <MathText>{'y = ½x²'}</MathText>
                  </p>
                </div>

                {/* Standard parabola */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-purple-500 dark:border-purple-400">
                  <p className="text-center font-semibold text-purple-700 dark:text-purple-300 mb-3">|a| = 1 - STANDARD width</p>
                  <ParabolaGraphVisualizer
                    a={1}
                    b={0}
                    c={0}
                    showVertex={true}
                    showAxisOfSymmetry={false}
                    showIntercepts={false}
                    xRange={[-5, 5]}
                    yRange={[-1, 8]}
                  />
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-3">
                    <MathText>y = x²</MathText>
                  </p>
                </div>

                {/* Narrow parabola */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-purple-300 dark:border-purple-600">
                  <p className="text-center font-semibold text-purple-700 dark:text-purple-300 mb-3">|a| &gt; 1 - NARROWER parabola</p>
                  <ParabolaGraphVisualizer
                    a={2}
                    b={0}
                    c={0}
                    showVertex={true}
                    showAxisOfSymmetry={false}
                    showIntercepts={false}
                    xRange={[-5, 5]}
                    yRange={[-1, 8]}
                  />
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-3">
                    <MathText>y = 2x²</MathText>
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-white dark:bg-gray-800 p-3 rounded border border-purple-300 dark:border-purple-600">
                <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                  <strong>Remember:</strong> Larger |a| = narrower parabola, Smaller |a| = wider parabola
                </p>
              </div>
            </div>

            {/* Important Properties Box */}
            <div className="bg-cyan-50 dark:bg-cyan-900/20 border-2 border-cyan-400 dark:border-cyan-500 p-5 rounded-lg mb-6">
              <h3 className="font-semibold text-cyan-800 dark:text-cyan-300 mb-3">
                Key Properties of Parabolas
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">✓</span>
                  <span><strong>Smooth curve</strong> - no sharp corners or straight edges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">✓</span>
                  <span><strong>Symmetric</strong> - both sides mirror each other</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">✓</span>
                  <span><strong>Has a vertex</strong> - the turning point (highest or lowest)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">✓</span>
                  <span><strong>Extends infinitely</strong> - arms go on forever</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Plotting Using Tables */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Plotting Quadratic Graphs Using Tables
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To draw a parabola accurately, we create a table of values and plot the points on a coordinate plane.
            </p>

            {/* Visual: Step-by-Step Process */}
            <div className="bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border-2 border-blue-400 dark:border-blue-500 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4 text-center">
                Table of Values Method
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Choose x-values</p>
                    <p className="text-sm text-blue-700 dark:text-blue-400">Pick about 5-7 values centered around the vertex</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Calculate y-values</p>
                    <p className="text-sm text-blue-700 dark:text-blue-400">Substitute each x into the equation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Plot the points</p>
                    <p className="text-sm text-blue-700 dark:text-blue-400">Mark each (x, y) coordinate on the grid</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Draw smooth curve</p>
                    <p className="text-sm text-blue-700 dark:text-blue-400">Connect points with a smooth U-shape, not straight lines!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 1: Complete Table and Graph */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 1: Plot y = x² - 2x - 3
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Step 1:</strong> Create table of values (choose x from −2 to 4)
                  </p>

                  {/* Table of values */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-2 border-gray-300 dark:border-gray-600">
                      <thead className="bg-blue-100 dark:bg-blue-900/40">
                        <tr>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-200">x</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-200">Calculation</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-200">y</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800">
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-semibold text-blue-700 dark:text-blue-300">−2</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">
                            <MathText>(-2)² - 2(-2) - 3 = 4 + 4 - 3</MathText>
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-bold text-green-700 dark:text-green-300">5</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50">
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-semibold text-blue-700 dark:text-blue-300">−1</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">
                            <MathText>(-1)² - 2(-1) - 3 = 1 + 2 - 3</MathText>
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-bold text-green-700 dark:text-green-300">0</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-semibold text-blue-700 dark:text-blue-300">0</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">
                            <MathText>0² - 2(0) - 3 = 0 - 0 - 3</MathText>
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-bold text-green-700 dark:text-green-300">−3</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50">
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-semibold text-blue-700 dark:text-blue-300">1</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">
                            <MathText>1² - 2(1) - 3 = 1 - 2 - 3</MathText>
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-bold text-green-700 dark:text-green-300">−4</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-semibold text-blue-700 dark:text-blue-300">2</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">
                            <MathText>2² - 2(2) - 3 = 4 - 4 - 3</MathText>
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-bold text-green-700 dark:text-green-300">−3</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50">
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-semibold text-blue-700 dark:text-blue-300">3</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">
                            <MathText>3² - 2(3) - 3 = 9 - 6 - 3</MathText>
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-bold text-green-700 dark:text-green-300">0</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-semibold text-blue-700 dark:text-blue-300">4</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">
                            <MathText>4² - 2(4) - 3 = 16 - 8 - 3</MathText>
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center font-bold text-green-700 dark:text-green-300">5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Step 2:</strong> Plot these points and draw the parabola:
                  </p>

                  {/* Actual Graph */}
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-blue-400 dark:border-blue-500">
                    <ParabolaGraphVisualizer
                      a={1}
                      b={-2}
                      c={-3}
                      showVertex={true}
                      showAxisOfSymmetry={true}
                      showIntercepts={true}
                      xRange={[-2, 4]}
                      yRange={[-5, 6]}
                    />
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-400 dark:border-yellow-500 p-3 rounded">
                    <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-2">💡 Key Observations:</p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Lowest point (vertex): (1, −4)</li>
                      <li>• x-intercepts (where y = 0): x = −1 and x = 3</li>
                      <li>• y-intercept (where x = 0): y = −3</li>
                      <li>• Axis of symmetry: x = 1</li>
                      <li>• Notice the symmetry: values at x = 0 and x = 2 are both −3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual: Common Mistakes */}
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-500 p-5 rounded-lg mb-6">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3 flex items-center">
                <span className="text-2xl mr-2">⚠️</span>
                Common Mistakes When Plotting
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-red-300 dark:border-red-600">
                  <p className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ DON'T:</p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Connect points with straight lines</li>
                    <li>• Make sharp corners at the vertex</li>
                    <li>• Forget negative values of x</li>
                    <li>• Stop the curve too early</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-green-500 dark:border-green-400">
                  <p className="font-semibold text-green-700 dark:text-green-300 mb-2">✓ DO:</p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Draw a smooth, flowing curve</li>
                    <li>• Make vertex a smooth turn</li>
                    <li>• Include x-values on both sides</li>
                    <li>• Extend curve beyond points</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Visualize y = x² + 2
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Look at the graph below and identify: vertex, axis of symmetry, and y-intercept
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-yellow-300 dark:border-yellow-700 mb-3">
              <ParabolaGraphVisualizer
                a={1}
                b={0}
                c={2}
                showVertex={true}
                showAxisOfSymmetry={true}
                showIntercepts={false}
                xRange={[-4, 4]}
                yRange={[-1, 10]}
              />
            </div>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>• <strong>Vertex:</strong> (0, 2) - the lowest point</p>
                  <p>• <strong>Axis of symmetry:</strong> x = 0 (the y-axis)</p>
                  <p>• <strong>y-intercept:</strong> (0, 2) - same as vertex in this case!</p>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                    Note: This parabola has no x-intercepts because it never crosses the x-axis
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Key Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Key Features of Parabolas
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Every parabola has important features that help us understand and graph it.
            </p>

            {/* Visual: Labeled Parabola with actual graph */}
            <div className="bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border-2 border-indigo-400 dark:border-indigo-500 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-4 text-center text-lg">
                Anatomy of a Parabola
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <ParabolaGraphVisualizer
                  a={1}
                  b={-4}
                  c={3}
                  showVertex={true}
                  showAxisOfSymmetry={true}
                  showIntercepts={true}
                  xRange={[-1, 5]}
                  yRange={[-2, 8]}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded border border-blue-300 dark:border-blue-600">
                    <p className="font-semibold text-blue-800 dark:text-blue-300 mb-1">Vertex</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">The turning point - highest or lowest point on the graph</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-300 dark:border-green-600">
                    <p className="font-semibold text-green-800 dark:text-green-300 mb-1">Axis of Symmetry</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Vertical line through vertex - parabola mirrors on both sides</p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-3 rounded border border-orange-300 dark:border-orange-600">
                    <p className="font-semibold text-orange-800 dark:text-orange-300 mb-1">y-intercept</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Where graph crosses y-axis (x = 0)</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded border border-purple-300 dark:border-purple-600">
                    <p className="font-semibold text-purple-800 dark:text-purple-300 mb-1">x-intercepts (roots)</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Where graph crosses x-axis (y = 0) - can be 0, 1, or 2 points</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual: Finding Each Feature */}
            <div className="space-y-4 mb-6">
              {/* y-intercept */}
              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                  Finding the y-intercept
                </h4>
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-orange-200 dark:border-orange-700">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Set <strong>x = 0</strong> and solve for y
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">For <MathText>y = ax² + bx + c</MathText></p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">When x = 0: <MathText>y = c</MathText></p>
                    <p className="text-sm font-semibold text-orange-700 dark:text-orange-300 mt-2">
                      y-intercept is simply the constant term c!
                    </p>
                  </div>
                </div>
              </div>

              {/* Axis of symmetry */}
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                  Finding the Axis of Symmetry
                </h4>
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-green-200 dark:border-green-700">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    For <MathText>y = ax² + bx + c</MathText>, the axis of symmetry is:
                  </p>
                  <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded border-2 border-green-500 dark:border-green-400 text-center">
                    <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                      <MathText>{'x = -b/(2a)'}</MathText>
                    </p>
                  </div>
                </div>
              </div>

              {/* Vertex */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  Finding the Vertex
                </h4>
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Two steps:</p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Find x-coordinate using <MathText>{'x = -b/(2a)'}</MathText></li>
                    <li>Substitute this x-value into equation to get y-coordinate</li>
                  </ol>
                </div>
              </div>

              {/* x-intercepts */}
              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                  Finding the x-intercepts (roots)
                </h4>
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-purple-200 dark:border-purple-700">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Set <strong>y = 0</strong> and solve the quadratic equation
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Use factorization or square root method (we'll learn more methods later!)
                  </p>
                </div>
              </div>
            </div>

            {/* Example 2: Finding All Features with graph */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 2: Find all key features of y = x² - 4x + 3
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Given: <MathText>y = x² - 4x + 3</MathText></p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">So a = 1, b = −4, c = 3</p>
                  </div>

                  {/* Show the graph */}
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-blue-400 dark:border-blue-500 mb-4">
                    <ParabolaGraphVisualizer
                      a={1}
                      b={-4}
                      c={3}
                      showVertex={true}
                      showAxisOfSymmetry={true}
                      showIntercepts={true}
                      xRange={[-1, 5]}
                      yRange={[-2, 8]}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* y-intercept */}
                    <div className="bg-orange-50 dark:bg-orange-900/30 p-3 rounded">
                      <p className="font-semibold text-orange-800 dark:text-orange-300 mb-1">y-intercept:</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">c = 3</p>
                      <p className="text-sm font-bold text-orange-700 dark:text-orange-300">Point: (0, 3)</p>
                    </div>

                    {/* Axis of symmetry */}
                    <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                      <p className="font-semibold text-green-800 dark:text-green-300 mb-1">Axis of symmetry:</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300"><MathText>{'x = -(-4)/(2×1) = 4/2 = 2'}</MathText></p>
                      <p className="text-sm font-bold text-green-700 dark:text-green-300">x = 2</p>
                    </div>
                  </div>

                  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded">
                    <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Vertex:</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">x-coordinate: 2 (from axis)</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">y-coordinate: <MathText>y = 2² - 4(2) + 3 = 4 - 8 + 3 = -1</MathText></p>
                    <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mt-1">Vertex: (2, −1)</p>
                  </div>

                  <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded">
                    <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">x-intercepts (roots):</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Solve: <MathText>x² - 4x + 3 = 0</MathText></p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Factorize: <MathText>(x - 1)(x - 3) = 0</MathText></p>
                    <p className="text-sm font-bold text-purple-700 dark:text-purple-300 mt-1">x = 1 or x = 3</p>
                    <p className="text-sm font-bold text-purple-700 dark:text-purple-300">Points: (1, 0) and (3, 0)</p>
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded border-2 border-green-500 dark:border-green-400">
                    <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Summary:</p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Vertex (turning point): (2, −1) - MINIMUM</li>
                      <li>• Axis of symmetry: x = 2</li>
                      <li>• y-intercept: (0, 3)</li>
                      <li>• x-intercepts: (1, 0) and (3, 0)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Find the vertex and y-intercept of y = x² + 6x + 5
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
                  <p>Given: <MathText>y = x² + 6x + 5</MathText> → a = 1, b = 6, c = 5</p>

                  <div className="bg-orange-100 dark:bg-orange-900/40 p-3 rounded">
                    <p className="font-semibold text-orange-700 dark:text-orange-300">y-intercept:</p>
                    <p>c = 5, so y-intercept is (0, 5)</p>
                  </div>

                  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded">
                    <p className="font-semibold text-blue-700 dark:text-blue-300">Vertex:</p>
                    <p>x-coordinate: <MathText>{'x = -6/(2×1) = -3'}</MathText></p>
                    <p>y-coordinate: <MathText>y = (-3)² + 6(-3) + 5 = 9 - 18 + 5 = -4</MathText></p>
                    <p className="font-bold text-green-700 dark:text-green-300 mt-1">Vertex: (−3, −4)</p>
                  </div>

                  {/* Show the graph */}
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-yellow-400 dark:border-yellow-500 mt-3">
                    <ParabolaGraphVisualizer
                      a={1}
                      b={6}
                      c={5}
                      showVertex={true}
                      showAxisOfSymmetry={true}
                      showIntercepts={true}
                      xRange={[-7, 1]}
                      yRange={[-5, 10]}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Find all key features of y = −x² + 2x + 3
            </h3>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>Given: <MathText>y = -x² + 2x + 3</MathText> → a = −1, b = 2, c = 3</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="bg-orange-100 dark:bg-orange-900/40 p-2 rounded">
                      <p className="text-sm font-semibold">y-intercept: (0, 3)</p>
                    </div>
                    <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded">
                      <p className="text-sm font-semibold">Axis: <MathText>{'x = -2/(2×-1) = 1'}</MathText></p>
                    </div>
                  </div>

                  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded">
                    <p className="font-semibold">Vertex:</p>
                    <p className="text-sm">x = 1, y = −1 + 2 + 3 = 4</p>
                    <p className="font-bold text-blue-700 dark:text-blue-300">Vertex: (1, 4) - MAXIMUM (a &lt; 0)</p>
                  </div>

                  <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded">
                    <p className="font-semibold">x-intercepts:</p>
                    <p className="text-sm">Solve: <MathText>-x² + 2x + 3 = 0</MathText></p>
                    <p className="text-sm">Multiply by −1: <MathText>x² - 2x - 3 = 0</MathText></p>
                    <p className="text-sm">Factor: <MathText>(x - 3)(x + 1) = 0</MathText></p>
                    <p className="font-bold text-purple-700 dark:text-purple-300">x = 3 or x = −1</p>
                  </div>

                  {/* Show the graph */}
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-yellow-400 dark:border-yellow-500 mt-3">
                    <ParabolaGraphVisualizer
                      a={-1}
                      b={2}
                      c={3}
                      showVertex={true}
                      showAxisOfSymmetry={true}
                      showIntercepts={true}
                      xRange={[-3, 5]}
                      yRange={[-2, 5]}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Quadratic graphs are U-shaped curves called parabolas</li>
            <li>If a &gt; 0: parabola opens upward (∪), if a &lt; 0: opens downward (∩)</li>
            <li>Larger |a| means narrower parabola, smaller |a| means wider parabola</li>
            <li>To plot: create table of values, plot points, draw smooth curve (NOT straight lines!)</li>
            <li>Key features: vertex (turning point), axis of symmetry, y-intercept, x-intercepts</li>
            <li>y-intercept is always c (set x = 0)</li>
            <li>Axis of symmetry: <MathText>{'x = -b/(2a)'}</MathText></li>
            <li>Vertex x-coordinate is on the axis of symmetry</li>
            <li>Parabolas are symmetric - both sides mirror each other</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
