import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function InverseProportionAlgebraic() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 dark:from-red-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Equations and Graphs of Inverse Proportion</h1>
        <p className="mt-2 text-red-100">
          Learn to express and visualize inverse relationships with hyperbolas
        </p>
      </div>

      <div className="p-6">
        {/* Section 1: The Equation y = k/x */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Equations: y = k/x or xy = k
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we say "y is inversely proportional to x", we can write this in two equivalent forms:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-2 border-red-300 dark:border-red-700">
                <p className="text-center text-lg mb-2 font-semibold text-red-700 dark:text-red-300">
                  Form 1
                </p>
                <div className="text-center text-xl mb-2">
                  <MathText>{'$y = \\frac{k}{x}$'}</MathText>
                </div>
                <p className="text-center text-gray-700 dark:text-gray-300 text-sm">
                  Useful for finding y when given x
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-2 border-red-300 dark:border-red-700">
                <p className="text-center text-lg mb-2 font-semibold text-red-700 dark:text-red-300">
                  Form 2
                </p>
                <div className="text-center text-xl mb-2">
                  <MathText>xy = k</MathText>
                </div>
                <p className="text-center text-gray-700 dark:text-gray-300 text-sm">
                  Shows the constant product
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Where <strong className="text-red-600 dark:text-red-400">k</strong> is the constant of proportionality
              (k ≠ 0).
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-blue-600 dark:text-blue-400">Key Difference from Direct Proportion:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                <li>Direct proportion: y = kx (x is in the numerator)</li>
                <li>Inverse proportion: y = k/x (x is in the denominator)</li>
              </ul>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
              Example 1: Finding the Equation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              If y is inversely proportional to √x and y = 6 when x = 4, find:
            </p>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
              <li>(i) an equation connecting x and y</li>
              <li>(ii) the value of y when x = 16</li>
              <li>(iii) the value of x when y = 4</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong className="text-red-600 dark:text-red-400">Solution:</strong>
            </p>

            <div className="ml-4 space-y-4">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(i)</strong> Since y ∝ 1/√x, we have <MathText>{'$y = \\frac{k}{\\sqrt{x}}$'}</MathText> or <MathText>{'$y\\sqrt{x} = k$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  When x = 4, y = 6
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  <MathText>{'$6\\sqrt{4} = k$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  6 × 2 = k
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  k = 12
                </p>
                <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded border border-red-300 dark:border-red-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-red-600 dark:text-red-400">Equation:</strong>{' '}
                    <MathText>{'$y = \\frac{12}{\\sqrt{x}}$'}</MathText> or <MathText>{'$y\\sqrt{x} = 12$'}</MathText>
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(ii)</strong> When x = 16:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  <MathText>{'$y = \\frac{12}{\\sqrt{16}} = \\frac{12}{4} = 3$'}</MathText>
                </p>
                <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded border border-red-300 dark:border-red-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-red-600 dark:text-red-400">Answer:</strong> y = 3
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(iii)</strong> When y = 4:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  <MathText>{'$4 = \\frac{12}{\\sqrt{x}}$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  <MathText>{'$4\\sqrt{x} = 12$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  <MathText>{'$\\sqrt{x} = 3$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  x = 9
                </p>
                <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded border border-red-300 dark:border-red-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-red-600 dark:text-red-400">Answer:</strong> x = 9
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Graphing Inverse Proportion (Hyperbola) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Graph: Hyperbola
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The graph of y = k/x is called a <strong className="text-red-600 dark:text-red-400">hyperbola</strong>.
              It has very different properties from a straight line:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-300 dark:border-red-700">
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Key Property 1</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The curve does <strong>NOT</strong> pass through the origin
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-300 dark:border-red-700">
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Key Property 2</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The curve has two <strong>asymptotes</strong>: x = 0 and y = 0
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-300 dark:border-red-700">
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Key Property 3</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  As x → ∞, y → 0 (approaches but never touches the x-axis)
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-300 dark:border-red-700">
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Key Property 4</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  As x → 0, y → ∞ (approaches but never touches the y-axis)
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Let's visualize the speed-time relationship from our earlier example: y = 120/x
            </p>

            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50 mb-4">
              <MathToolRenderer
                toolName="functionGraph"
                parameters={{
                  expression: "120/x",
                  xMin: 5,
                  xMax: 130,
                  yMin: 0,
                  yMax: 15,
                  showGrid: true,
                  color: "#ef4444",
                  label: "y = 120/x",
                  showPoints: [
                    { x: 10, label: "(10, 12)" },
                    { x: 20, label: "(20, 6)" },
                    { x: 30, label: "(30, 4)" },
                    { x: 60, label: "(60, 2)" },
                    { x: 120, label: "(120, 1)" }
                  ]
                }}
              />
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong className="text-blue-600 dark:text-blue-400">Observations:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>The curve is smooth and continuous (but never touches the axes)</li>
                <li>As speed (x) increases, time (y) decreases</li>
                <li>The curve gets closer and closer to both axes but never reaches them</li>
                <li>The product of any point's coordinates equals 120 (the constant k)</li>
              </ul>
            </div>

            {/* Visual comparison */}
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded border border-gray-300 dark:border-gray-600">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Comparing Different Values of k
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                Let's see how different values of k affect the hyperbola shape:
              </p>

              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-800 mb-3">
                <MathToolRenderer
                  toolName="functionGraph"
                  parameters={{
                    expression: "60/x",
                    xMin: 1,
                    xMax: 20,
                    yMin: 0,
                    yMax: 20,
                    showGrid: true,
                    color: "#10b981",
                    label: "y = 60/x (k = 60)"
                  }}
                />
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm">
                <strong className="text-red-600 dark:text-red-400">Note:</strong> Larger values of k push
                the hyperbola further from the origin, but the shape remains the same.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Finding k from Graphs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Finding k from the Graph
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To find the constant k from a hyperbola graph, use any point (x, y) on the curve and
              calculate the product xy.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-red-600 dark:text-red-400">Method:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                <li>Pick any point on the curve with coordinates (x, y)</li>
                <li>Calculate k = xy</li>
                <li>Verify with another point if needed</li>
              </ol>
            </div>

            {/* Worked Example 2 */}
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                Example 2: Reading from a Graph
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A hyperbola passes through the point (8, 15). If y is inversely proportional to x:
              </p>
              <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
                <li>(a) Find the equation connecting x and y</li>
                <li>(b) State whether the point (10, 12) lies on this hyperbola</li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong className="text-red-600 dark:text-red-400">Solution:</strong>
              </p>

              <div className="ml-4 space-y-3">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>(a)</strong> Since y ∝ 1/x, we have y = k/x or xy = k
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                    Using point (8, 15):
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                    k = xy = 8 × 15 = 120
                  </p>
                  <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded border border-red-300 dark:border-red-700">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="text-red-600 dark:text-red-400">Equation:</strong>{' '}
                      <MathText>y = 120/x</MathText> or <MathText>xy = 120</MathText>
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>(b)</strong> Check if (10, 12) lies on the hyperbola:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                    Product = 10 × 12 = 120 ✓
                  </p>
                  <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded border border-red-300 dark:border-red-700">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="text-red-600 dark:text-red-400">Answer:</strong> Yes, the point
                      (10, 12) lies on the hyperbola because xy = 120.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Distinguishing Types of Graphs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Distinguishing Graph Types
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              It's important to recognize different types of graphs and what they represent:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-4">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-800 dark:text-gray-100">Relationship</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-800 dark:text-gray-100">Equation</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-800 dark:text-gray-100">Graph Shape</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-800 dark:text-gray-100">Passes Through Origin?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Direct proportion (y ∝ x)</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">y = kx</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Straight line</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">YES ✓</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Direct proportion to x² (y ∝ x²)</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300"><MathText>{'$y = kx^2$'}</MathText></td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Parabola (U-shape)</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">YES ✓</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Inverse proportion (y ∝ 1/x)</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">y = k/x</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Hyperbola (curve)</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-red-600 dark:text-red-400 font-semibold">NO ✗</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Linear (not proportional)</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">y = kx + c (c ≠ 0)</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Straight line</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-red-600 dark:text-red-400 font-semibold">NO ✗</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-blue-600 dark:text-blue-400">Quick Test:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                <li>If y/x is constant → y ∝ x (direct proportion)</li>
                <li>If xy is constant → y ∝ 1/x (inverse proportion)</li>
                <li>If neither is constant → neither direct nor inverse proportion</li>
              </ul>
            </div>
          </div>

          {/* Advanced Content (Collapsible) */}
          <div className="mt-6">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
            >
              <span>{showAdvanced ? '▼' : '▶'}</span>
              <span>Advanced: Graphing y = 1/x with Different k Values</span>
            </button>
            {showAdvanced && (
              <div className="mt-4 ml-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded border-l-2 border-red-500">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  When k is negative, the hyperbola appears in the 2nd and 4th quadrants instead of the
                  1st and 3rd quadrants.
                </p>

                <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-800">
                  <MathToolRenderer
                    toolName="functionGraph"
                    parameters={{
                      expression: "-60/x",
                      xMin: -20,
                      xMax: 20,
                      yMin: -20,
                      yMax: 20,
                      showGrid: true,
                      color: "#8b5cf6",
                      label: "y = -60/x"
                    }}
                  />
                </div>

                <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm">
                  Notice how the curve is in different quadrants, but still has asymptotes at x = 0 and y = 0.
                </p>
              </div>
            )}
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
              Practice 1: Finding Equation and Values
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              y is inversely proportional to x² and y = 2 when x = 4. Find:
            </p>
            <ul className="list-none space-y-1 text-gray-700 dark:text-gray-300 ml-4 mb-3">
              <li>(i) an equation connecting x and y</li>
              <li>(ii) the value of y when x = 8</li>
              <li>(iii) the values of x when y = 8</li>
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
                  <p className="text-gray-700 dark:text-gray-300 mb-1">
                    <strong>(i)</strong> Since y ∝ 1/x², we have <MathText>{'$y = \\frac{k}{x^2}$'}</MathText> or <MathText>{'$yx^2 = k$'}</MathText>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">When x = 4, y = 2:</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">
                    <MathText>{'$k = 2 \\times 4^2 = 2 \\times 16 = 32$'}</MathText>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4">
                    <strong className="text-yellow-600 dark:text-yellow-400">Equation: <MathText>{'$y = \\frac{32}{x^2}$'}</MathText></strong>
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-1">
                    <strong>(ii)</strong> When x = 8:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">
                    <MathText>{'$y = \\frac{32}{8^2} = \\frac{32}{64} = 0.5$'}</MathText>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4">
                    <strong className="text-yellow-600 dark:text-yellow-400">Answer: y = 0.5 or 1/2</strong>
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-1">
                    <strong>(iii)</strong> When y = 8:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">
                    <MathText>{'$8 = \\frac{32}{x^2}$'}</MathText>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">
                    <MathText>{'$8x^2 = 32$'}</MathText>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">
                    <MathText>{'$x^2 = 4$'}</MathText>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4">
                    <strong className="text-yellow-600 dark:text-yellow-400">Answer: x = 2 or x = -2</strong>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Identifying Inverse Proportion
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The table shows values of x and y. Determine whether y is inversely proportional to x, and
              if so, find the constant k.
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="border-collapse border border-gray-300 dark:border-gray-600 mx-auto">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">x</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">2</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">3</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">5</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">6</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">y</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">15</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">10</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">6</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">5</td>
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
                  Check if xy is constant:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mb-3">
                  <li>2 × 15 = 30</li>
                  <li>3 × 10 = 30</li>
                  <li>5 × 6 = 30</li>
                  <li>6 × 5 = 30</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  All products equal 30 ✓
                </p>

                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-400 dark:border-yellow-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-yellow-600 dark:text-yellow-400">Answer:</strong> Yes, y is inversely
                    proportional to x, with k = 30. The equation is <MathText>xy = 30</MathText> or <MathText>y = 30/x</MathText>.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-red-700 dark:text-red-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Inverse proportion is expressed as <MathText>y = k/x</MathText> or <MathText>xy = k</MathText></li>
            <li>The graph of inverse proportion is a hyperbola that does NOT pass through the origin</li>
            <li>The hyperbola has two asymptotes: x = 0 (y-axis) and y = 0 (x-axis)</li>
            <li>As x increases, y decreases (and vice versa) - they move in opposite directions</li>
            <li>To find k from a graph: pick any point (x, y) and calculate k = xy</li>
            <li>Unlike direct proportion (straight line), inverse proportion creates a curved graph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
