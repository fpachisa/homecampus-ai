import { useState } from 'react';
import MathText from '../../../../components/MathText';
import ParabolaGraphVisualizer from '../../../../components/math-tools/ParabolaGraphVisualizer';

export default function RootsAndIntercepts() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 dark:from-violet-600 dark:to-purple-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Solving Quadratics Graphically</h1>
        <p className="mt-2 text-violet-100">Connect algebraic solutions to graphical representations</p>
      </div>

      <div className="bg-white dark:bg-gray-800 px-6 pb-6 rounded-b-lg">

        {/* Section 1: Roots as x-intercepts */}
        <section className="mb-8 mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Understanding Roots Graphically
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>roots</strong> (or <strong>solutions</strong>) of a quadratic equation are the x-values where the parabola crosses the x-axis.
            </p>

            {/* Visual: Algebraic vs Graphical Connection */}
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 border-2 border-violet-400 dark:border-violet-500 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-violet-800 dark:text-violet-300 mb-4 text-center text-lg">
                Algebraic ↔ Graphical Connection
              </h3>
              <div className="space-y-4">
                {/* Algebraic view */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-blue-400 dark:border-blue-500">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3 text-center">Algebraic View</h4>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p className="text-center font-semibold">Solve the equation:</p>
                    <p className="text-center"><MathText>x² - 5x + 6 = 0</MathText></p>
                    <p className="text-center text-sm">↓ Factor</p>
                    <p className="text-center"><MathText>(x - 2)(x - 3) = 0</MathText></p>
                    <p className="text-center text-sm">↓ Solutions</p>
                    <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded text-center font-bold">
                      x = 2 or x = 3
                    </div>
                  </div>
                </div>

                {/* Graphical view */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-green-400 dark:border-green-500">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3 text-center">Graphical View</h4>
                  <ParabolaGraphVisualizer
                    a={1}
                    b={-5}
                    c={6}
                    showVertex={true}
                    showAxisOfSymmetry={false}
                    showIntercepts={true}
                    xRange={[0, 5]}
                    yRange={[-2, 6]}
                  />
                  <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded text-center font-bold text-sm mt-3">
                    x-intercepts: 2 and 3
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-white dark:bg-gray-800 p-3 rounded border border-violet-300 dark:border-violet-600">
                <p className="text-center text-gray-700 dark:text-gray-300">
                  <strong className="text-violet-700 dark:text-violet-300">Key Insight:</strong> Roots = x-intercepts = Zeros of the function!
                </p>
              </div>
            </div>

            {/* Visual: Three Cases */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center text-lg">
                How Many Roots? Three Possible Cases
              </h3>
              <div className="space-y-4">
                {/* 2 roots */}
                <div className="bg-green-50 dark:bg-green-900/30 border-2 border-green-500 dark:border-green-400 p-4 rounded-lg">
                  <div className="text-center mb-3">
                    <span className="text-4xl">✓✓</span>
                    <p className="font-semibold text-green-800 dark:text-green-300 text-lg mt-2">TWO Roots</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-green-300 dark:border-green-600">
                    <ParabolaGraphVisualizer
                      a={1}
                      b={-2}
                      c={-3}
                      showVertex={false}
                      showAxisOfSymmetry={false}
                      showIntercepts={true}
                      xRange={[-2, 4]}
                      yRange={[-5, 3]}
                    />
                    <p className="text-xs text-green-700 dark:text-green-400 text-center mt-2">
                      Parabola <strong>crosses</strong> x-axis twice
                    </p>
                  </div>
                </div>

                {/* 1 root */}
                <div className="bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500 dark:border-blue-400 p-4 rounded-lg">
                  <div className="text-center mb-3">
                    <span className="text-4xl">✓</span>
                    <p className="font-semibold text-blue-800 dark:text-blue-300 text-lg mt-2">ONE Root</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">(Repeated)</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-300 dark:border-blue-600">
                    <ParabolaGraphVisualizer
                      a={1}
                      b={-4}
                      c={4}
                      showVertex={true}
                      showAxisOfSymmetry={false}
                      showIntercepts={true}
                      xRange={[0, 4]}
                      yRange={[-1, 5]}
                    />
                    <p className="text-xs text-blue-700 dark:text-blue-400 text-center mt-2">
                      Parabola <strong>touches</strong> x-axis at vertex
                    </p>
                  </div>
                </div>

                {/* 0 roots */}
                <div className="bg-red-50 dark:bg-red-900/30 border-2 border-red-500 dark:border-red-400 p-4 rounded-lg">
                  <div className="text-center mb-3">
                    <span className="text-4xl">✗</span>
                    <p className="font-semibold text-red-800 dark:text-red-300 text-lg mt-2">NO Real Roots</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-red-300 dark:border-red-600">
                    <ParabolaGraphVisualizer
                      a={1}
                      b={0}
                      c={2}
                      showVertex={true}
                      showAxisOfSymmetry={false}
                      showIntercepts={false}
                      xRange={[-3, 3]}
                      yRange={[0, 7]}
                    />
                    <p className="text-xs text-red-700 dark:text-red-400 text-center mt-2">
                      Parabola <strong>doesn't cross</strong> x-axis
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 1 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 1: How many roots does y = x² - x - 6 have?
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Method 1: Solve algebraically</strong>
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="text-gray-700 dark:text-gray-300"><MathText>x² - x - 6 = 0</MathText></p>
                    <p className="text-gray-700 dark:text-gray-300"><MathText>(x - 3)(x + 2) = 0</MathText></p>
                    <p className="text-gray-700 dark:text-gray-300">x = 3 or x = −2</p>
                    <p className="text-green-700 dark:text-green-300 font-semibold mt-2">✓ TWO real roots</p>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Method 2: Look at the graph</strong>
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                    <ParabolaGraphVisualizer
                      a={1}
                      b={-1}
                      c={-6}
                      showVertex={true}
                      showAxisOfSymmetry={true}
                      showIntercepts={true}
                      xRange={[-3, 4]}
                      yRange={[-8, 4]}
                    />
                    <p className="text-green-700 dark:text-green-300 font-semibold text-center mt-3">
                      ✓ Graph crosses x-axis twice → TWO roots
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: From graph, estimate the roots of y = x² - 4
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Hint: Think about where y = x² - 4 crosses the x-axis
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
                  <p>Algebraically: <MathText>x² - 4 = 0</MathText></p>
                  <p><MathText>x² = 4</MathText></p>
                  <p><MathText>x = ±2</MathText></p>
                  <p className="font-semibold text-green-700 dark:text-green-300 mt-3">
                    ✓ Roots: x = −2 and x = 2
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    Graph crosses x-axis at (−2, 0) and (2, 0)
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Reading and Verifying Solutions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Reading Solutions from Graphs
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We can estimate solutions from a graph and then verify them algebraically.
            </p>

            {/* Visual: Estimation Process */}
            <div className="bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border-2 border-indigo-400 dark:border-indigo-500 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-4 text-center">
                Graphical Solution Process
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-indigo-600 dark:bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Identify x-intercepts</p>
                    <p className="text-sm text-indigo-700 dark:text-indigo-400">Find where the parabola crosses the x-axis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-600 dark:bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Read x-coordinates</p>
                    <p className="text-sm text-indigo-700 dark:text-indigo-400">Estimate to nearest 0.5 or integer</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-600 dark:bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Verify by substitution</p>
                    <p className="text-sm text-indigo-700 dark:text-indigo-400">Check if y ≈ 0 when substituting x-value</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-600 dark:bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Solve algebraically for exact answer</p>
                    <p className="text-sm text-indigo-700 dark:text-indigo-400">Use factorization or other methods</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 2: Solving Inequalities */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 2: Use the graph to solve x² - 3x - 4 &gt; 0
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    First, find where <MathText>x² - 3x - 4 = 0</MathText>
                  </p>

                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Factor:</p>
                    <p className="text-gray-700 dark:text-gray-300"><MathText>(x - 4)(x + 1) = 0</MathText></p>
                    <p className="text-gray-700 dark:text-gray-300">Roots: x = 4 and x = −1</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-600">
                    <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-center">Graph analysis:</p>
                    <ParabolaGraphVisualizer
                      a={1}
                      b={-3}
                      c={-4}
                      showVertex={true}
                      showAxisOfSymmetry={true}
                      showIntercepts={true}
                      xRange={[-2, 5]}
                      yRange={[-7, 5]}
                    />
                    <div className="space-y-2 text-gray-700 dark:text-gray-300 mt-3">
                      <p className="text-sm text-center">Roots at x = −1 and x = 4</p>
                      <p className="font-semibold text-blue-800 dark:text-blue-300 text-center">For y &gt; 0 (above x-axis):</p>
                      <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded border-2 border-green-500 dark:border-green-400">
                        <p className="font-bold text-center">x &lt; −1 OR x &gt; 4</p>
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-400 italic text-center">
                        The parabola is above the x-axis in these regions!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual: Inequality Regions */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-400 dark:border-purple-500 p-5 rounded-lg mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-4 text-center">
                Understanding Inequality Regions
              </h3>
              <div className="space-y-4">
                {/* y > 0 */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-purple-300 dark:border-purple-600">
                  <p className="font-semibold text-center text-purple-700 dark:text-purple-300 mb-3">
                    <MathText>y &gt; 0</MathText> (Positive)
                  </p>
                  <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded border border-green-400 dark:border-green-500">
                    <p className="text-gray-700 dark:text-gray-300 text-center mb-2">
                      Graph is <strong>ABOVE</strong> x-axis
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-400 text-center">
                      Solution region: <strong>OUTSIDE the roots</strong> (left of smaller root OR right of larger root)
                    </p>
                  </div>
                </div>

                {/* y < 0 */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-purple-300 dark:border-purple-600">
                  <p className="font-semibold text-center text-purple-700 dark:text-purple-300 mb-3">
                    <MathText>y &lt; 0</MathText> (Negative)
                  </p>
                  <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded border border-red-400 dark:border-red-500">
                    <p className="text-gray-700 dark:text-gray-300 text-center mb-2">
                      Graph is <strong>BELOW</strong> x-axis
                    </p>
                    <p className="text-sm text-red-700 dark:text-red-400 text-center">
                      Solution region: <strong>BETWEEN the roots</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: For y = x² - 9, when is y &lt; 0?
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
                  <p><strong>Step 1:</strong> Find roots</p>
                  <p><MathText>x² - 9 = 0 → x² = 9 → x = ±3</MathText></p>
                  <p>Roots: x = −3 and x = 3</p>

                  <p><strong>Step 2:</strong> Determine where graph is below x-axis</p>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <ParabolaGraphVisualizer
                      a={1}
                      b={0}
                      c={-9}
                      showVertex={true}
                      showAxisOfSymmetry={false}
                      showIntercepts={true}
                      xRange={[-5, 5]}
                      yRange={[-10, 5]}
                    />
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded border-2 border-green-500 dark:border-green-400 mt-3">
                    <p className="font-bold text-center">✓ y &lt; 0 when −3 &lt; x &lt; 3</p>
                    <p className="text-sm text-center mt-1">(between the roots - graph is below x-axis)</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Vertex and Optimization */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Maximum and Minimum Values
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The vertex of a parabola gives us the maximum or minimum value of the function - this is very useful in real-world problems!
            </p>

            {/* Visual: Max vs Min */}
            <div className="space-y-4 mb-6">
              {/* Minimum */}
              <div className="bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500 dark:border-blue-400 p-5 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3 text-center">
                  Minimum Value (a &gt; 0)
                </h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <ParabolaGraphVisualizer
                    a={1}
                    b={0}
                    c={-4}
                    showVertex={true}
                    showAxisOfSymmetry={true}
                    showIntercepts={false}
                    xRange={[-4, 4]}
                    yRange={[-5, 7]}
                  />
                  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded text-center mt-3">
                    <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">
                      Minimum value = y-coordinate of vertex (lowest point)
                    </p>
                  </div>
                </div>
              </div>

              {/* Maximum */}
              <div className="bg-red-50 dark:bg-red-900/30 border-2 border-red-500 dark:border-red-400 p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3 text-center">
                  Maximum Value (a &lt; 0)
                </h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <ParabolaGraphVisualizer
                    a={-1}
                    b={0}
                    c={4}
                    showVertex={true}
                    showAxisOfSymmetry={true}
                    showIntercepts={false}
                    xRange={[-4, 4]}
                    yRange={[-7, 5]}
                  />
                  <div className="bg-red-100 dark:bg-red-900/40 p-3 rounded text-center mt-3">
                    <p className="text-sm font-semibold text-red-800 dark:text-red-300">
                      Maximum value = y-coordinate of vertex (highest point)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formula Reminder */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-400 dark:border-indigo-500 p-5 rounded-lg mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3 text-center">
                Finding Maximum/Minimum Value
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="text-gray-700 dark:text-gray-300 mb-3 text-center">
                  For <MathText>y = ax² + bx + c</MathText>:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                    <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">Step 1: Find x-coordinate</p>
                    <p className="text-center text-xl font-bold text-blue-900 dark:text-blue-100">
                      <MathText>{'x = -b/(2a)'}</MathText>
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-1">Step 2: Find y-coordinate</p>
                    <p className="text-center text-sm text-green-900 dark:text-green-100">
                      Substitute x into equation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 3: Find the minimum value of y = x² - 6x + 11
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Given: <MathText>y = x² - 6x + 11</MathText></p>
                    <p className="text-gray-700 dark:text-gray-300">a = 1, b = −6, c = 11</p>
                    <p className="text-sm text-blue-700 dark:text-blue-400 mt-2">
                      Since a = 1 &gt; 0, parabola opens upward → has MINIMUM
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                    <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Step 1: x-coordinate of vertex</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <MathText>{'x = -(-6)/(2×1) = 6/2 = 3'}</MathText>
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                    <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Step 2: y-coordinate (minimum value)</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <MathText>y = 3² - 6(3) + 11</MathText>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <MathText>y = 9 - 18 + 11</MathText>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <MathText>y = 2</MathText>
                    </p>
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded border-2 border-green-500 dark:border-green-400">
                    <p className="font-bold text-green-800 dark:text-green-300 text-center text-lg">
                      ✓ Minimum value = 2 (occurs when x = 3)
                    </p>
                    <p className="text-sm text-center text-gray-700 dark:text-gray-300 mt-2">
                      Vertex: (3, 2)
                    </p>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-400 dark:border-yellow-500 p-3 rounded">
                    <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-1">💡 Interpretation:</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The function never goes below y = 2. The lowest point on the graph is at (3, 2).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-World Application Box */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-400 dark:border-purple-500 p-5 rounded-lg mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                Real-World Applications of Max/Min
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-purple-300 dark:border-purple-600">
                  <p className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Maximum Height</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Projectile motion: ball/rocket reaches maximum height at vertex
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-purple-300 dark:border-purple-600">
                  <p className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Maximum Area</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Fencing problems: find dimensions that give largest area
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-purple-300 dark:border-purple-600">
                  <p className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Maximum Profit</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Business: find price/quantity that maximizes revenue
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-purple-300 dark:border-purple-600">
                  <p className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Minimum Cost</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Manufacturing: find production level that minimizes cost
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Find the maximum value of y = −2x² + 8x − 5
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
                  <p>Given: <MathText>y = -2x² + 8x - 5</MathText></p>
                  <p>a = −2, b = 8, c = −5</p>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    Since a = −2 &lt; 0, parabola opens downward → has MAXIMUM
                  </p>

                  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded">
                    <p className="font-semibold">x-coordinate of vertex:</p>
                    <p><MathText>{'x = -8/(2×-2) = -8/-4 = 2'}</MathText></p>
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded">
                    <p className="font-semibold">y-coordinate (maximum value):</p>
                    <p><MathText>y = -2(2)² + 8(2) - 5</MathText></p>
                    <p><MathText>y = -8 + 16 - 5</MathText></p>
                    <p><MathText>y = 3</MathText></p>
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded border-2 border-green-500 dark:border-green-400 mt-3">
                    <p className="font-bold text-center text-lg">
                      ✓ Maximum value = 3 (at x = 2)
                    </p>
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
            <li>Roots (solutions) of a quadratic = x-intercepts = zeros of the function</li>
            <li>Parabola can have 0, 1, or 2 x-intercepts (real roots)</li>
            <li>For inequalities: y &gt; 0 means graph is ABOVE x-axis, y &lt; 0 means BELOW x-axis</li>
            <li>Vertex gives the maximum (a &lt; 0) or minimum (a &gt; 0) value</li>
            <li>To find max/min: use <MathText>{'x = -b/(2a)'}</MathText>, then substitute to get y</li>
            <li>Always verify graphical estimates with algebraic calculations</li>
            <li>Maximum and minimum values have many real-world applications</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
