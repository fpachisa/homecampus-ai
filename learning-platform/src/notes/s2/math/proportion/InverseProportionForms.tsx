import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function InverseProportionForms() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-600 dark:to-purple-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Other Forms of Inverse Proportion</h1>
        <p className="mt-2 text-pink-100">
          Explore inverse square laws and other power relationships
        </p>
      </div>

      <div className="p-6">
        {/* Section 1: Inverse Square Relationship */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Inverse Proportion to x² (Inverse Square Law)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Just as y can be proportional to x², it can also be <strong className="text-pink-600 dark:text-pink-400">inversely
              proportional to x²</strong>. This is called the <strong>inverse square law</strong>.
            </p>

            <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border-2 border-pink-300 dark:border-pink-700 mb-4">
              <div className="text-center text-xl mb-2">
                <MathText>{'$y \\propto \\frac{1}{x^2}$'}</MathText>
              </div>
              <p className="text-center text-gray-700 dark:text-gray-300 text-sm">
                which means <MathText>{'$y = \\frac{k}{x^2}$'}</MathText> or <MathText>{'$yx^2 = k$'}</MathText> where k is a constant
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded border border-orange-300 dark:border-orange-700">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Regular Inverse: y ∝ 1/x</h4>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• When x doubles, y halves (×½)</li>
                  <li>• When x triples, y is divided by 3 (×⅓)</li>
                  <li>• xy is constant</li>
                </ul>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded border border-pink-300 dark:border-pink-700">
                <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">Inverse Square: y ∝ 1/x²</h4>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• When x doubles, y is divided by 4 (×¼)</li>
                  <li>• When x triples, y is divided by 9 (×1/9)</li>
                  <li>• <MathText>{'$yx^2$'}</MathText> is constant</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-blue-600 dark:text-blue-400">Real-World Examples:</strong> The inverse
                square law appears in physics:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                <li>Gravitational force decreases with the square of distance</li>
                <li>Light intensity decreases with the square of distance from the source</li>
                <li>Electrical force between charges follows inverse square law</li>
              </ul>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-pink-800 dark:text-pink-300 mb-2">
              Example 1: Force Between Magnets
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The force of attraction between two magnets is inversely proportional to the square of the
              distance between them. When the magnets are r cm apart, the force of attraction between
              them is F newtons (N). If the distance between the magnets is increased by 400%, the force
              of attraction between them becomes cF N. Find the value of c.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong className="text-pink-600 dark:text-pink-400">Solution:</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Since F ∝ 1/r², we have <MathText>{'$F = \\frac{k}{r^2}$'}</MathText> or <MathText>{'$Fr^2 = k$'}</MathText>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
              <strong>Step 1:</strong> Find original force
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              Original: <MathText>{'$F_1 = F$'}</MathText>, <MathText>{'$r_1 = r$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              <MathText>{'$k = Fr^2$'}</MathText>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
              <strong>Step 2:</strong> Distance increases by 400%
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              New distance = r + 400% of r = r + 4r = 5r
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
              <strong>Step 3:</strong> Find new force
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              <MathText>{'$F_2 = \\frac{k}{(5r)^2} = \\frac{Fr^2}{25r^2} = \\frac{F}{25}$'}</MathText>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
              <strong>Step 4:</strong> Express as cF
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              <MathText>{'$F_2 = \\frac{1}{25}F = cF$'}</MathText>
            </p>

            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border border-pink-300 dark:border-pink-700">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-pink-600 dark:text-pink-400">Answer:</strong> c = 1/25 or 0.04
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                <em>Note: When distance increases 5 times, force decreases to 1/25 of original (5² = 25).</em>
              </p>
            </div>
          </div>

          {/* Visual: Graph of inverse square */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Graph of y ∝ 1/x² (Steeper Hyperbola)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The graph of <MathText>{'$y = k/x^2$'}</MathText> is also a hyperbola, but it falls more
              steeply than <MathText>y = k/x</MathText>:
            </p>

            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50 mb-4">
              <MathToolRenderer
                toolName="functionGraph"
                parameters={{
                  expression: "100/(x^2)",
                  xMin: 1,
                  xMax: 15,
                  yMin: 0,
                  yMax: 25,
                  showGrid: true,
                  color: "#ec4899",
                  label: "y = 100/x²",
                  showPoints: [
                    { x: 2, label: "(2, 25)" },
                    { x: 4, label: "(4, 6.25)" },
                    { x: 5, label: "(5, 4)" },
                    { x: 10, label: "(10, 1)" }
                  ]
                }}
              />
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong className="text-blue-600 dark:text-blue-400">Comparison:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>y = k/x decreases gradually</li>
                <li>y = k/x² decreases more rapidly (steeper curve near the origin)</li>
                <li>Both approach zero as x increases, but y = k/x² approaches faster</li>
                <li>Both have asymptotes at x = 0 and y = 0</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Other Inverse Power Relationships */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Other Inverse Power Relationships
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We can extend inverse proportion to other powers and roots:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded border border-pink-300 dark:border-pink-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong className="text-pink-600 dark:text-pink-400">y ∝ 1/x³:</strong> When x doubles,
                  y is divided by 8 (2³ = 8)
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm ml-4 mt-1">
                  <MathText>{'$y = k/x^3$'}</MathText> or <MathText>{'$yx^3 = k$'}</MathText>
                </p>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded border border-pink-300 dark:border-pink-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong className="text-pink-600 dark:text-pink-400">y ∝ 1/√x:</strong> When x increases
                  4 times, y halves
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm ml-4 mt-1">
                  <MathText>{'$y = k/\\sqrt{x}$'}</MathText> or <MathText>{'$y\\sqrt{x} = k$'}</MathText>
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-blue-600 dark:text-blue-400">General Form:</strong> If y ∝ 1/xⁿ, then:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                <li><MathText>{'$y = k/x^n$'}</MathText> where k is a constant</li>
                <li><MathText>{'$yx^n$'}</MathText> is constant</li>
                <li><MathText>{'$x_1^n y_1 = x_2^n y_2$'}</MathText></li>
              </ul>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-pink-800 dark:text-pink-300 mb-2">
              Example 2: Identifying the Relationship
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              For each of the following equations, state the two variables which are inversely proportional
              to each other and explain your answer.
            </p>

            <div className="space-y-4 ml-4">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(a)</strong> <MathText>{'$y = \\frac{2}{x^3}$'}</MathText>
                </p>
                <div className="ml-4 p-3 bg-white dark:bg-gray-800 rounded border border-pink-300 dark:border-pink-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-pink-600 dark:text-pink-400">Answer:</strong> y and x³ are
                    inversely proportional because <MathText>{'$y \\times x^3 = 2$'}</MathText> (constant).
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm">
                    We can write: y ∝ 1/x³
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(b)</strong> <MathText>{'$y = \\frac{3}{\\sqrt{x}}$'}</MathText>
                </p>
                <div className="ml-4 p-3 bg-white dark:bg-gray-800 rounded border border-pink-300 dark:border-pink-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-pink-600 dark:text-pink-400">Answer:</strong> y and √x are
                    inversely proportional because <MathText>{'$y \\times \\sqrt{x} = 3$'}</MathText> (constant).
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm">
                    We can write: y ∝ 1/√x
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Solving Complex Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Solving Complex Proportion Problems
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sometimes we need to work with inverse square or higher power relationships in problem-solving:
            </p>

            {/* Worked Example 3 */}
            <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded">
              <h3 className="font-semibold text-pink-800 dark:text-pink-300 mb-2">
                Example 3: Cone Volume Problem
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                For a fixed volume, the height, h cm, of a cone is inversely proportional to the square
                of the base radius, r cm. Cone A has a base radius of 6 cm and a height of 5 cm. The base
                radius of Cone B is 3 cm and the height of Cone C is 1.25 cm. If all the cones have the
                same volume, find:
              </p>
              <ul className="list-none space-y-1 text-gray-700 dark:text-gray-300 ml-4 mb-4">
                <li>(i) the height of Cone B</li>
                <li>(ii) the base radius of Cone C</li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong className="text-pink-600 dark:text-pink-400">Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Since h ∝ 1/r², we have <MathText>{'$h = k/r^2$'}</MathText> or <MathText>{'$hr^2 = k$'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                <strong>Find k using Cone A:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                Cone A: r = 6 cm, h = 5 cm
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                <MathText>{'$k = hr^2 = 5 \\times 6^2 = 5 \\times 36 = 180$'}</MathText>
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>(i)</strong> Cone B: r = 3 cm, h = ?
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                    <MathText>{'$h \\times 3^2 = 180$'}</MathText>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                    <MathText>{'$h \\times 9 = 180$'}</MathText>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                    h = 180 ÷ 9 = 20 cm
                  </p>
                  <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded border border-pink-300 dark:border-pink-700">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="text-pink-600 dark:text-pink-400">Answer:</strong> Height of Cone B = 20 cm
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>(ii)</strong> Cone C: h = 1.25 cm, r = ?
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                    <MathText>{'$1.25 \\times r^2 = 180$'}</MathText>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                    <MathText>{'$r^2 = 180 \\div 1.25 = 144$'}</MathText>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                    r = √144 = 12 cm
                  </p>
                  <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded border border-pink-300 dark:border-pink-700">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="text-pink-600 dark:text-pink-400">Answer:</strong> Base radius of Cone C = 12 cm
                    </p>
                  </div>
                </div>
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
              Practice 1: Inverse to s³
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              If q² is inversely proportional to p + 3 and q = 5 when p = 2, find the values of q when p = 17.
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
                  Since q² ∝ 1/(p + 3), we have <MathText>{'$q^2 = \\frac{k}{p+3}$'}</MathText> or <MathText>{'$q^2(p+3) = k$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                  <strong>Step 1:</strong> Find k using p = 2, q = 5
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-2">
                  <MathText>{'$k = 5^2(2+3) = 25 \\times 5 = 125$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                  <strong>Step 2:</strong> Find q when p = 17
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">
                  <MathText>{'$q^2(17+3) = 125$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">
                  <MathText>{'$q^2 \\times 20 = 125$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">
                  <MathText>{'$q^2 = 6.25$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-2">
                  q = ±2.5
                </p>

                <div className="mt-3 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-400 dark:border-yellow-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-yellow-600 dark:text-yellow-400">Answer: q = 2.5 or q = -2.5</strong>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Square Root Relationship
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              If y is inversely proportional to √x and y = 6 when x = 9, find the value of y when x = 25.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Since y ∝ 1/√x, we have <MathText>{'$y = k/\\sqrt{x}$'}</MathText> or <MathText>{'$y\\sqrt{x} = k$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                  <strong>Step 1:</strong> Find k using x = 9, y = 6
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-2">
                  <MathText>{'$k = 6\\sqrt{9} = 6 \\times 3 = 18$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                  <strong>Step 2:</strong> Find y when x = 25
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-1">
                  <MathText>{'$y = \\frac{18}{\\sqrt{25}} = \\frac{18}{5} = 3.6$'}</MathText>
                </p>

                <div className="mt-3 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-400 dark:border-yellow-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-yellow-600 dark:text-yellow-400">Answer: y = 3.6</strong>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Container Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Yi Hao has a few cylindrical containers. He pours the same amount of water into each
              container. He then takes note of the diameter of each container and the respective heights
              of the water level. He concludes that the diameter of the container and the height of the
              water level are inversely proportional to each other. Do you agree? Explain your answer.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm italic">
              (Hint: Volume of cylinder = πr²h where r is radius and h is height)
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
                  <strong className="text-yellow-600 dark:text-yellow-400">Answer: NO</strong>, I do not
                  agree. The diameter and height are NOT inversely proportional.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Explanation:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>Volume = πr²h = constant (same amount of water)</li>
                  <li>If d is diameter, then r = d/2</li>
                  <li>So: <MathText>{'$\\pi (d/2)^2 h = k$'}</MathText></li>
                  <li>This simplifies to: <MathText>{'$d^2 h = k$'}</MathText> (constant)</li>
                  <li>This means h is inversely proportional to d², NOT to d</li>
                  <li>For inverse proportion to d, we would need dh = constant, but we have d²h = constant</li>
                </ul>

                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Correct relationship:</strong> Height is inversely proportional to the square
                  of the diameter (h ∝ 1/d²).
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-pink-50 dark:bg-pink-900/30 border-l-4 border-pink-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>When y ∝ 1/x², we have <MathText>{'$y = k/x^2$'}</MathText> or <MathText>{'$yx^2 = k$'}</MathText> (inverse square law)</li>
            <li>Inverse square law: if x doubles, y is divided by 4; if x triples, y is divided by 9</li>
            <li>Real-world examples: gravity, light intensity, electrical force all follow inverse square laws</li>
            <li>Other forms: y ∝ 1/x³, y ∝ 1/√x, etc. follow similar patterns</li>
            <li>To identify: check if <MathText>{'$yx^n$'}</MathText> is constant for some power n</li>
            <li>Graphs of <MathText>{'$y = k/x^2$'}</MathText> fall more steeply than y = k/x</li>
            <li>All inverse proportion graphs are hyperbolas with asymptotes at both axes</li>
          </ul>
        </div>

        {/* Final Summary Box */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-purple-300 dark:border-purple-700 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">
            🎓 Congratulations! You've Completed Direct and Inverse Proportion
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            You now understand:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-purple-300 dark:border-purple-700">
              <p className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Direct Proportion</p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• y = kx (straight line through origin)</li>
                <li>• y ∝ x², y ∝ x³ (parabolas)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-purple-300 dark:border-purple-700">
              <p className="font-semibold text-pink-600 dark:text-pink-400 mb-1">Inverse Proportion</p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• y = k/x (hyperbola)</li>
                <li>• y ∝ 1/x², y ∝ 1/√x (steeper curves)</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 text-center">
            Keep practicing to master these concepts! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
