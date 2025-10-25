import { useState } from 'react';

const CoordinateGeometryApplications = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Coordinate Geometry Applications</h1>
        <p className="text-lg">Using coordinate geometry to prove geometric facts and solve problems</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Introduction */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">1. Using Coordinate Geometry</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 dark:border-teal-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Coordinate Geometry as a Powerful Tool:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Coordinate geometry is a powerful tool which can be used to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li><strong>Check the truth</strong> of a geometrical fact</li>
              <li><strong>Prove geometrical facts</strong> using general cases</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Key Applications:</h3>
            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <div className="flex items-start gap-3">
                <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                <div>
                  <p className="font-semibold">Classifying Shapes:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Proving triangles are isosceles, right-angled, or equilateral; showing quadrilaterals are parallelograms, rhombuses, or rectangles
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                <div>
                  <p className="font-semibold">Proving Collinearity:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Showing that three or more points lie on the same straight line
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                <div>
                  <p className="font-semibold">Proving Parallelism and Perpendicularity:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Using gradient relationships to prove lines are parallel or perpendicular
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Proving Triangle Properties */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">2. Proving Triangle Properties</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Common Triangle Proofs:</h3>

            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Proving a Triangle is Isosceles:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Show that two sides have equal length using the distance formula.
                </p>
                <p className="text-xs font-mono text-gray-800 dark:text-gray-200 ml-4">
                  If AB = AC, then triangle ABC is isosceles
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Proving a Triangle is Right-Angled:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Method 1: Show that two sides are perpendicular (m₁ × m₂ = −1)
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Method 2: Use Pythagoras' theorem (a² + b² = c²)
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Proving a Triangle is Equilateral:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Show that all three sides have equal length using the distance formula.
                </p>
                <p className="text-xs font-mono text-gray-800 dark:text-gray-200 ml-4">
                  If AB = BC = AC, then triangle ABC is equilateral
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Proving Quadrilateral Properties */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">3. Proving Quadrilateral Properties</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Common Quadrilateral Proofs:</h3>

            <div className="space-y-4">
              <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Proving a Parallelogram:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Show that opposite sides are parallel (equal gradients) OR show that the diagonals bisect each other (same midpoint).
                </p>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Proving a Rhombus:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Show that all four sides have equal length using the distance formula.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 ml-4">
                  A rhombus is a parallelogram with all sides equal
                </p>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Proving a Rectangle:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Show that it's a parallelogram AND that adjacent sides are perpendicular (m₁ × m₂ = −1).
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 ml-4">
                  OR show that diagonals are equal in length and bisect each other
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Proving a Square:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Show that all sides are equal (rhombus) AND adjacent sides are perpendicular (rectangle).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Proving Collinearity */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">4. Proving Collinearity</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 dark:border-teal-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Proving Points are Collinear:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Three points A, M, and C are <strong>collinear</strong> if they lie on the same straight line.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              To prove collinearity, show that the gradient from A to M equals the gradient from M to C.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-gray-300 dark:border-gray-600">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">
                Collinearity Test:
              </p>
              <p className="text-center font-mono text-lg text-gray-900 dark:text-gray-100">
                gradient of [AM] = gradient of [MC]
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                If this is true, then A, M, and C are collinear
              </p>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-teal-100 dark:bg-teal-900/50 rounded-lg font-semibold hover:bg-teal-200 dark:hover:bg-teal-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Proving Triangle PQR is Isosceles
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-teal-500 dark:border-teal-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Consider points P(1, 5), Q(5, 7), and R(3, 1). Show that triangle PQR is isosceles.
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Find the length of PQ</p>
                    <p className="ml-4 font-mono">PQ = √[(5 − 1)² + (7 − 5)²]</p>
                    <p className="ml-4 font-mono">PQ = √[16 + 4]</p>
                    <p className="ml-4 font-mono">PQ = √20 = 2√5</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Find the length of QR</p>
                    <p className="ml-4 font-mono">QR = √[(3 − 5)² + (1 − 7)²]</p>
                    <p className="ml-4 font-mono">QR = √[4 + 36]</p>
                    <p className="ml-4 font-mono">QR = √40 = 2√10</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 3: Find the length of PR</p>
                    <p className="ml-4 font-mono">PR = √[(3 − 1)² + (1 − 5)²]</p>
                    <p className="ml-4 font-mono">PR = √[4 + 16]</p>
                    <p className="ml-4 font-mono">PR = √20 = 2√5</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200">
                      Since PQ = PR = 2√5, triangle PQR is isosceles.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-teal-100 dark:bg-teal-900/50 rounded-lg font-semibold hover:bg-teal-200 dark:hover:bg-teal-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Proving ABCD is a Parallelogram
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-teal-500 dark:border-teal-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Consider points A(1, 3), B(6, 3), C(3, −1), and D(−2, −1). Show that ABCD is a parallelogram.
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Method: Show that opposite sides are parallel</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Find gradient of AB</p>
                    <p className="ml-4 font-mono">m₁ = (3 − 3)/(6 − 1) = 0/5 = 0</p>
                    <p className="ml-4 text-sm">AB is horizontal</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Find gradient of DC</p>
                    <p className="ml-4 font-mono">m₂ = (−1 − (−1))/(3 − (−2)) = 0/5 = 0</p>
                    <p className="ml-4 text-sm">DC is also horizontal</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 3: Find gradient of BC</p>
                    <p className="ml-4 font-mono">m₃ = (−1 − 3)/(3 − 6) = −4/(−3) = 4/3</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 4: Find gradient of AD</p>
                    <p className="ml-4 font-mono">m₄ = (−1 − 3)/(−2 − 1) = −4/(−3) = 4/3</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200 mb-2">
                      Since AB ∥ DC (both have gradient 0) and BC ∥ AD (both have gradient 4/3),
                    </p>
                    <p className="font-bold text-green-800 dark:text-green-200">
                      ABCD is a parallelogram (opposite sides are parallel).
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left p-4 bg-teal-100 dark:bg-teal-900/50 rounded-lg font-semibold hover:bg-teal-200 dark:hover:bg-teal-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample3 ? '▼' : '▶'} Example 3: Proving Three Points are Collinear
            </button>

            {showExample3 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-teal-500 dark:border-teal-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Show that points A(−2, −7), B(0, −3), and C(6, 5) are collinear.
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Find gradient of AB</p>
                    <p className="ml-4 font-mono">m₁ = (−3 − (−7))/(0 − (−2))</p>
                    <p className="ml-4 font-mono">m₁ = 4/2 = 2</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Find gradient of BC</p>
                    <p className="ml-4 font-mono">m₂ = (5 − (−3))/(6 − 0)</p>
                    <p className="ml-4 font-mono">m₂ = 8/6 = 4/3</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 3: Compare gradients</p>
                    <p className="ml-4">m₁ = 2 and m₂ = 4/3</p>
                    <p className="ml-4">Since m₁ ≠ m₂, the gradients are NOT equal</p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded border border-red-400 dark:border-red-600">
                    <p className="font-bold text-red-800 dark:text-red-200">
                      The points are NOT collinear (they do not lie on the same line).
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. Triangle ABC has vertices A(1, 0), B(3, 1), and C(4, 5). Classify the triangle.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-teal-600 dark:text-teal-400 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p>AB = √5, BC = √17, AC = √34</p>
                  <p>Check if right-angled: AB² + BC² = 5 + 17 = 22 ≠ 34 = AC²</p>
                  <p><strong>Triangle is scalene</strong> (all sides different, not right-angled)</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Consider points A(1, 3), B(6, 3), C(3, −1), and D(−2, −1). Use the distance formula to show that ABCD is a rhombus.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-teal-600 dark:text-teal-400 hover:underline">Show Hint</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p>Calculate AB, BC, CD, and DA. If all four sides are equal, it's a rhombus.</p>
                  <p>Note: In Example 2, we showed it's a parallelogram. If it's also equilateral, it's a rhombus.</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                3. Show that A, M, and C are collinear if M is the midpoint of [AB], and A(−1, 1), B(6, 3), and C(5, 1).
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-teal-600 dark:text-teal-400 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p>Find M: M = ((−1+6)/2, (1+3)/2) = (2.5, 2)</p>
                  <p>Gradient of [AM] = (2−1)/(2.5−(−1)) = 1/3.5 = 2/7</p>
                  <p>Gradient of [MC] = (1−2)/(5−2.5) = −1/2.5 = −2/5</p>
                  <p><strong>Since 2/7 ≠ −2/5, the points are NOT collinear.</strong></p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                4. Challenge: Prove that the midpoints of the sides of any quadrilateral form a parallelogram.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-teal-600 dark:text-teal-400 hover:underline">Show Hint</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p>Use general coordinates A(a, b), B(c, d), C(e, f), D(g, h)</p>
                  <p>Find midpoints of all four sides</p>
                  <p>Show that opposite sides of the midpoint quadrilateral are parallel using gradients</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li>Coordinate geometry can <strong>check</strong> and <strong>prove</strong> geometric facts</li>
            <li><strong>Isosceles triangle:</strong> two sides equal (distance formula)</li>
            <li><strong>Right-angled triangle:</strong> two sides perpendicular (gradient) OR Pythagoras' theorem</li>
            <li><strong>Equilateral triangle:</strong> all three sides equal</li>
            <li><strong>Parallelogram:</strong> opposite sides parallel (equal gradients)</li>
            <li><strong>Rhombus:</strong> all sides equal (parallelogram with equal sides)</li>
            <li><strong>Rectangle:</strong> parallelogram with perpendicular adjacent sides</li>
            <li><strong>Square:</strong> rhombus with perpendicular sides (or rectangle with equal sides)</li>
            <li><strong>Collinear points:</strong> gradient from A to M = gradient from M to C</li>
            <li>Use <strong>distance formula</strong> for side lengths, <strong>gradient formula</strong> for parallel/perpendicular</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoordinateGeometryApplications;
