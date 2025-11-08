import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function DirectProportionForms() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Other Forms of Direct Proportion</h1>
        <p className="mt-2 text-green-100">
          Explore proportionality with squares, cubes, and other powers
        </p>
      </div>

      <div className="p-6">
        {/* Section 1: y proportional to x² */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Direct Proportion to x² (Squared)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sometimes, y is not directly proportional to x itself, but to <strong className="text-green-600 dark:text-green-400">x²</strong> (x squared).
              We write this as:
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-2 border-green-300 dark:border-green-700 mb-4">
              <div className="text-center text-xl mb-2">
                <MathText>y ∝ x²</MathText>
              </div>
              <p className="text-center text-gray-700 dark:text-gray-300 text-sm">
                which means <MathText>{'$y = kx^2$'}</MathText> where k is a constant
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The key difference from regular direct proportion:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-300 dark:border-blue-700">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Regular: y ∝ x</h4>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• When x doubles, y doubles (×2)</li>
                  <li>• When x triples, y triples (×3)</li>
                  <li>• <MathText>y/x</MathText> is constant</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-300 dark:border-green-700">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Squared: y ∝ x²</h4>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• When x doubles, y quadruples (×4)</li>
                  <li>• When x triples, y increases 9 times (×9)</li>
                  <li>• <MathText>{'$\\frac{y}{x^2}$'}</MathText> is constant</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-blue-600 dark:text-blue-400">Remember:</strong> When y ∝ x²,
                the rate <MathText>{'$\\frac{y}{x^2}$'}</MathText> stays constant, NOT <MathText>y/x</MathText>.
              </p>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 1: Investigating y ∝ x²
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The variables x and y are connected by the equation <MathText>{'$y = 3x^2$'}</MathText>.
              Complete the table and verify that <MathText>{'$\\frac{y}{x^2}$'}</MathText> is constant.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">x</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">1</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">2</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">3</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">x²</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">4</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">9</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">16</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">y</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">3</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">12</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">27</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">48</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      <MathText>{'$\\frac{y}{x^2}$'}</MathText>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">3</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">3</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">3</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-white dark:bg-gray-800 rounded border border-green-300 dark:border-green-700">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-green-600 dark:text-green-400">Observation:</strong> The ratio{' '}
                <MathText>{'$\\frac{y}{x^2} = 3$'}</MathText> is constant, confirming that y ∝ x².
              </p>
            </div>
          </div>

          {/* Visual: Graph of y = 3x² */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Graph of y ∝ x² (Parabola)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Unlike y = kx (which is a straight line), the graph of <MathText>{'$y = kx^2$'}</MathText> is
              a <strong className="text-green-600 dark:text-green-400">parabola</strong> (U-shaped curve):
            </p>

            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50 mb-4">
              <MathToolRenderer
                toolName="functionGraph"
                parameters={{
                  expression: "3*x^2",
                  xMin: -3,
                  xMax: 3,
                  yMin: 0,
                  yMax: 30,
                  showGrid: true,
                  color: "#10b981",
                  label: "y = 3x²",
                  showPoints: [
                    { x: 0, label: "(0, 0)" },
                    { x: 1, label: "(1, 3)" },
                    { x: 2, label: "(2, 12)" },
                    { x: 3, label: "(3, 27)" }
                  ]
                }}
              />
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-blue-600 dark:text-blue-400">Key Properties:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                <li>The graph is a parabola (curved), not a straight line</li>
                <li>It still passes through the origin (0, 0)</li>
                <li>The curve gets steeper as x increases</li>
                <li>It's symmetric about the y-axis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Other Power Relationships */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Other Power Relationships
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We can extend this idea to any power of x:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-300 dark:border-green-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong className="text-green-600 dark:text-green-400">y ∝ x³:</strong> When x doubles,
                  y increases 8 times (2³ = 8)
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm ml-4 mt-1">
                  Example: Volume of a cube varies as the cube of its side length
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-300 dark:border-green-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong className="text-green-600 dark:text-green-400">y ∝ √x:</strong> When x increases
                  4 times, y doubles
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm ml-4 mt-1">
                  Example: Period of a pendulum varies as the square root of its length
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-blue-600 dark:text-blue-400">General Form:</strong> If y ∝ xⁿ, then:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                <li><MathText>{'$y = kx^n$'}</MathText> where k is a constant</li>
                <li><MathText>{'$\\frac{y}{x^n}$'}</MathText> is constant</li>
                <li><MathText>{'$\\frac{y_1}{x_1^n} = \\frac{y_2}{x_2^n}$'}</MathText></li>
              </ul>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 2: Braking Distance
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The braking distance of a vehicle is directly proportional to the square of its speed.
              When the speed of the vehicle is b m/s, its braking distance is d m. If the speed of the
              vehicle is increased by 200%, find the percentage increase in its braking distance.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong className="text-green-600 dark:text-green-400">Solution:</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Since d ∝ b², we have <MathText>{'$d = kb^2$'}</MathText> for some constant k.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
              <strong>Step 1:</strong> Find original braking distance
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              Original: <MathText>{'$d_1 = kb^2$'}</MathText>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
              <strong>Step 2:</strong> Speed increases by 200%
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              New speed = b + 200% of b = b + 2b = 3b
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
              <strong>Step 3:</strong> Find new braking distance
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              <MathText>{'$d_2 = k(3b)^2 = k \\times 9b^2 = 9kb^2$'}</MathText>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
              <strong>Step 4:</strong> Calculate percentage increase
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              <MathText>{'$d_2 = 9 \\times d_1$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              Increase = <MathText>{'$9d_1 - d_1 = 8d_1$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              Percentage increase = <MathText>{'$\\frac{8d_1}{d_1} \\times 100\\% = 800\\%$'}</MathText>
            </p>

            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border border-green-300 dark:border-green-700">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-green-600 dark:text-green-400">Answer:</strong> The braking distance
                increases by 800% (it becomes 9 times the original distance).
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Recognizing Proportional Relationships */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            How to Identify the Relationship
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Given data, how do we determine what type of proportion exists?
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Strategy:</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Check if y/x is constant → if yes, then y ∝ x</li>
                <li>Check if <MathText>{'$y/x^2$'}</MathText> is constant → if yes, then y ∝ x²</li>
                <li>Check if <MathText>{'$y/x^3$'}</MathText> is constant → if yes, then y ∝ x³</li>
                <li>Continue testing powers until you find a constant ratio</li>
              </ol>
            </div>

            {/* Example table */}
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3 font-semibold">
                Example: Which relationship exists?
              </p>
              <div className="overflow-x-auto mb-3">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">x</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">2</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">4</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">5</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">8</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">y</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">5.2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">41.6</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">81.25</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">332.8</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-2">Test y/x: 5.2/2 = 2.6, but 41.6/4 = 10.4 ❌ Not constant</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Test <MathText>{'$y/x^2$'}</MathText>: 5.2/4 = 1.3, and 41.6/16 = 2.6 ❌ Not constant</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Test <MathText>{'$y/x^3$'}</MathText>: 5.2/8 = 0.65, and 41.6/64 = 0.65, and 81.25/125 = 0.65 ✅ Constant!</p>

              <div className="mt-3 p-3 bg-green-100 dark:bg-green-900/30 rounded border border-green-400 dark:border-green-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong className="text-green-600 dark:text-green-400">Conclusion:</strong> y ∝ x³ with{' '}
                  <MathText>{'$y = 0.65x^3$'}</MathText>
                </p>
              </div>
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
              Practice 1: Finding Expression
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              y is directly proportional to x² and y = a for a particular value of x. Find an expression
              for y in terms of a, when this value of x is doubled.
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Since y ∝ x², we have <MathText>{'$y = kx^2$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                  <strong>Original:</strong> When x = x₀, y = a
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  <MathText>{'$a = kx_0^2$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                  <strong>When doubled:</strong> x = 2x₀
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  <MathText>{'$y = k(2x_0)^2 = k \\times 4x_0^2 = 4kx_0^2$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  Since <MathText>{'$kx_0^2 = a$'}</MathText>, we have:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  <MathText>{'$y = 4a$'}</MathText>
                </p>

                <div className="mt-3 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-400 dark:border-yellow-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-yellow-600 dark:text-yellow-400">Answer: y = 4a</strong>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Identifying Relationship from Table
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The table shows a relationship between x and y. Explain if y is directly proportional to x or x³.
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="border-collapse border border-gray-300 dark:border-gray-600 mx-auto">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">x</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">2</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">4</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">5</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">8</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">10</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">y</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">5.2</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">41.6</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">81.25</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">332.8</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">650</td>
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
                  <strong>Test 1:</strong> Check if y/x is constant
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-2">
                  5.2 ÷ 2 = 2.6, but 41.6 ÷ 4 = 10.4
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-3">
                  Not constant ❌, so y is NOT proportional to x
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Test 2:</strong> Check if <MathText>{'$y/x^3$'}</MathText> is constant
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">
                  5.2 ÷ (2³) = 5.2 ÷ 8 = 0.65
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">
                  41.6 ÷ (4³) = 41.6 ÷ 64 = 0.65
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">
                  81.25 ÷ (5³) = 81.25 ÷ 125 = 0.65
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-3">
                  Constant! ✅
                </p>

                <div className="mt-3 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-400 dark:border-yellow-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-yellow-600 dark:text-yellow-400">Answer:</strong> y is directly
                    proportional to x³ (not to x)
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    The relationship is <MathText>{'$y = 0.65x^3$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Real-World Application
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              If y is directly proportional to x² for all positive values of y and the difference in the
              values of y when x = 1 and x = 3 is 32, find the value of y when x = -2.
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Since y ∝ x², we have <MathText>{'$y = kx^2$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                  <strong>Step 1:</strong> Find k using the given information
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">
                  When x = 1: <MathText>{'$y_1 = k(1)^2 = k$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">
                  When x = 3: <MathText>{'$y_2 = k(3)^2 = 9k$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">
                  Difference: <MathText>{'$y_2 - y_1 = 9k - k = 8k = 32$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-3">
                  Therefore, k = 4
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 2:</strong> Find y when x = -2
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">
                  <MathText>{'$y = 4x^2 = 4(-2)^2 = 4 \\times 4 = 16$'}</MathText>
                </p>

                <div className="mt-3 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-400 dark:border-yellow-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-yellow-600 dark:text-yellow-400">Answer: y = 16</strong>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>When y ∝ x², we have <MathText>{'$y = kx^2$'}</MathText> and the graph is a parabola passing through the origin</li>
            <li>When y ∝ x², if x doubles, y quadruples (×4); if x triples, y increases 9 times (×9)</li>
            <li>For any power relationship y ∝ xⁿ, check if <MathText>{'$y/x^n$'}</MathText> is constant</li>
            <li>The graph of <MathText>{'$y = kx^2$'}</MathText> is curved (parabola), not a straight line</li>
            <li>To identify the relationship from data, test y/x, then <MathText>{'$y/x^2$'}</MathText>, then <MathText>{'$y/x^3$'}</MathText>, etc.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
