import { useState } from 'react';

const PerpendicularBisectors = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Perpendicular Bisectors</h1>
        <p className="text-lg">Finding the equation of the perpendicular bisector of a line segment</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Definition */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">1. What is a Perpendicular Bisector?</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The <strong>perpendicular bisector</strong> of a line segment [AB] is the line perpendicular to [AB] which passes through its midpoint.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Key Properties:</h3>
            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <div className="flex items-start gap-3">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">1.</span>
                <p>Points on the perpendicular bisector are <strong>equidistant</strong> from A and B</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">2.</span>
                <p>The perpendicular bisector <strong>divides the number plane</strong> into two regions:</p>
              </div>
              <div className="ml-8">
                <p>• On one side of the line are points that are <strong>closer to A than to B</strong></p>
                <p>• On the other side are points that are <strong>closer to B than to A</strong></p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">Important Insight:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              The perpendicular bisector is useful in many real-world applications, such as determining service regions (like the Voronoi diagram in the opening problem of the textbook).
            </p>
          </div>
        </div>

        {/* Section 2: Finding the Equation */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">2. Finding the Equation of a Perpendicular Bisector</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Step-by-Step Method:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              To find the equation of the perpendicular bisector of [AB]:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li><strong>Find the midpoint M</strong> of [AB] using the midpoint formula</li>
              <li><strong>Find the gradient m₁</strong> of line segment [AB]</li>
              <li><strong>Find the gradient m₂</strong> of the perpendicular bisector using m₁ × m₂ = −1</li>
              <li><strong>Use point-gradient form</strong> with the midpoint M and gradient m₂</li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Formulas You'll Need:</h3>
            <div className="space-y-3 bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">Midpoint formula:</p>
                <p className="font-mono text-sm text-gray-800 dark:text-gray-200 ml-4">M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">Gradient formula:</p>
                <p className="font-mono text-sm text-gray-800 dark:text-gray-200 ml-4">m = (y₂ − y₁)/(x₂ − x₁)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">Perpendicular gradient:</p>
                <p className="font-mono text-sm text-gray-800 dark:text-gray-200 ml-4">m₁ × m₂ = −1  →  m₂ = −1/m₁</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">Point-gradient form:</p>
                <p className="font-mono text-sm text-gray-800 dark:text-gray-200 ml-4">y − y₁ = m(x − x₁)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Applications */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">3. Applications</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Common Uses:</h3>
            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Geometry Problems:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Finding the center of a circle that passes through two points, or constructing shapes with specific symmetry properties.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Real-World Applications:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Voronoi diagrams for service regions, where each location is served by the nearest facility (ambulance stations, schools, etc.).
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Proving Properties:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Showing that points are equidistant from two given points, or that a quadrilateral is a rhombus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg font-semibold hover:bg-indigo-200 dark:hover:bg-indigo-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Finding the Equation of a Perpendicular Bisector
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-indigo-500 dark:border-indigo-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Find the equation of the perpendicular bisector of [AB] where A(−1, 3) and B(4, 7).
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Find the midpoint M</p>
                    <p className="ml-4 font-mono">M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</p>
                    <p className="ml-4 font-mono">M = ((−1 + 4)/2, (3 + 7)/2)</p>
                    <p className="ml-4 font-mono">M = (3/2, 5)</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Find the gradient of [AB]</p>
                    <p className="ml-4 font-mono">m₁ = (y₂ − y₁)/(x₂ − x₁)</p>
                    <p className="ml-4 font-mono">m₁ = (7 − 3)/(4 − (−1))</p>
                    <p className="ml-4 font-mono">m₁ = 4/5</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 3: Find the perpendicular gradient</p>
                    <p className="ml-4 font-mono">m₂ = −1/m₁</p>
                    <p className="ml-4 font-mono">m₂ = −1/(4/5)</p>
                    <p className="ml-4 font-mono">m₂ = −5/4</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 4: Use point-gradient form with M(3/2, 5)</p>
                    <p className="ml-4 font-mono">y − y₁ = m(x − x₁)</p>
                    <p className="ml-4 font-mono">y − 5 = (−5/4)(x − 3/2)</p>
                    <p className="ml-4 font-mono">y − 5 = (−5/4)x + 15/8</p>
                    <p className="ml-4 font-mono">y = (−5/4)x + 15/8 + 5</p>
                    <p className="ml-4 font-mono">y = (−5/4)x + 55/8</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 5: Convert to general form (optional)</p>
                    <p className="ml-4 font-mono">8y = −10x + 55</p>
                    <p className="ml-4 font-mono">10x + 8y = 55</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200">
                      Answer: y = (−5/4)x + 55/8  or  10x + 8y = 55
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg font-semibold hover:bg-indigo-200 dark:hover:bg-indigo-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Verifying Equidistance Property
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-indigo-500 dark:border-indigo-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Show that the point P(2, 3) lies on the perpendicular bisector of [AB] where A(0, 1) and B(4, 5).
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Method 1: Show that P is equidistant from A and B</p>
                  </div>

                  <div>
                    <p className="ml-4 font-semibold text-gray-900 dark:text-gray-100">Find PA:</p>
                    <p className="ml-8 font-mono">PA = √[(2 − 0)² + (3 − 1)²]</p>
                    <p className="ml-8 font-mono">PA = √[4 + 4]</p>
                    <p className="ml-8 font-mono">PA = √8 = 2√2</p>
                  </div>

                  <div>
                    <p className="ml-4 font-semibold text-gray-900 dark:text-gray-100">Find PB:</p>
                    <p className="ml-8 font-mono">PB = √[(2 − 4)² + (3 − 5)²]</p>
                    <p className="ml-8 font-mono">PB = √[4 + 4]</p>
                    <p className="ml-8 font-mono">PB = √8 = 2√2</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200">
                      Since PA = PB = 2√2, point P is equidistant from A and B.
                    </p>
                    <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                      Therefore, P lies on the perpendicular bisector of [AB].
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. Find the equation of the perpendicular bisector of [AB] for:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) A(2, 3) and B(6, 11)</p>
                <p>b) A(−1, −1) and B(3, −5)</p>
                <p>c) A(0, 0) and B(4, 2)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-indigo-600 dark:text-indigo-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-3 text-sm text-gray-800 dark:text-gray-200">
                  <div>
                    <p><strong>a)</strong> M = (4, 7), m₁ = 2, m₂ = −1/2</p>
                    <p className="ml-4">Equation: y = (−1/2)x + 9  or  x + 2y = 18</p>
                  </div>
                  <div>
                    <p><strong>b)</strong> M = (1, −3), m₁ = −1, m₂ = 1</p>
                    <p className="ml-4">Equation: y = x − 4  or  x − y = 4</p>
                  </div>
                  <div>
                    <p><strong>c)</strong> M = (2, 1), m₁ = 1/2, m₂ = −2</p>
                    <p className="ml-4">Equation: y = −2x + 5  or  2x + y = 5</p>
                  </div>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Show that the given point lies on the perpendicular bisector by proving it is equidistant from A and B:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) P(5, 7), A(1, 5), B(6, 4)</p>
                <p>b) Q(0, 0), A(−3, 4), B(4, 3)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-indigo-600 dark:text-indigo-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> PA = √20 = 2√5, PB = √10, NOT on perpendicular bisector</p>
                  <p><strong>b)</strong> QA = 5, QB = 5, Q is equidistant, so Q IS on perpendicular bisector</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                3. Challenge: Triangle ABC has vertices A(1, 3), B(6, 3), and C(4, 1). Find the equation of the perpendicular bisector of [BC], and show that it passes through A.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-indigo-600 dark:text-indigo-400 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p>M of [BC] = (5, 2)</p>
                  <p>Gradient of [BC] = −1, perpendicular gradient = 1</p>
                  <p>Equation: y − 2 = 1(x − 5) → y = x − 3</p>
                  <p>Check if A(1, 3) satisfies: 3 = 1 − 3? No, 3 ≠ −2</p>
                  <p className="font-semibold">The perpendicular bisector does NOT pass through A, so triangle ABC is not isosceles with AB = AC.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li>The <strong>perpendicular bisector</strong> passes through the midpoint and is perpendicular to the line segment</li>
            <li>Points on the perpendicular bisector are <strong>equidistant</strong> from both endpoints</li>
            <li><strong>Steps:</strong> Find midpoint M, find gradient m₁, find perpendicular gradient m₂ = −1/m₁, use point-gradient form</li>
            <li>Perpendicular gradients satisfy <strong>m₁ × m₂ = −1</strong></li>
            <li>The perpendicular bisector divides the plane into regions based on proximity to each endpoint</li>
            <li>Applications include Voronoi diagrams, circle construction, and geometric proofs</li>
            <li>To verify a point is on the perpendicular bisector, show it is equidistant from both endpoints</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PerpendicularBisectors;
