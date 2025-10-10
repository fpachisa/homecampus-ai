import React, { useState } from 'react';

const GraphFindingFunction = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Finding Quadratic Equations from Graphs
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
          Introduction
        </h2>
        <p className="mb-3">
          Sometimes you're given information about a parabola and need to find its equation.
          The strategy you use depends on what information is provided.
        </p>
        <p className="mb-3">
          <strong>Three Main Scenarios:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Given the vertex and one other point → Use vertex form</li>
          <li>Given two x-intercepts and one other point → Use factored form</li>
          <li>Given three points (general case) → Use standard form</li>
        </ul>
      </section>

      {/* Method 1: From Vertex and Point */}
      <section className="mb-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
          1. From Vertex and Another Point
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Strategy: Use Vertex Form</h3>
          <div className="text-center text-lg my-3 p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
            f(x) = a(x - h)² + k
          </div>
          <ol className="list-decimal list-inside space-y-2 mt-3">
            <li>Substitute vertex (h, k) into the equation</li>
            <li>Substitute the coordinates of the other point for x and f(x)</li>
            <li>Solve for the value of a</li>
            <li>Write the final equation</li>
            <li>Expand to standard form if needed</li>
          </ol>
        </div>

        {/* Worked Example 1 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition"
          >
            {showExample1 ? '▼' : '▶'} Example 1: Vertex (2, -3), passes through (0, 5)
          </button>

          {showExample1 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-blue-500">
              <p className="mb-2"><strong>Given:</strong> Vertex (2, -3), point (0, 5)</p>

              <p className="mb-2"><strong>Step 1:</strong> Set up vertex form with h = 2, k = -3</p>
              <p className="ml-4 mb-2">f(x) = a(x - 2)² + (-3)</p>
              <p className="ml-4 mb-2">f(x) = a(x - 2)² - 3</p>

              <p className="mb-2"><strong>Step 2:</strong> Substitute point (0, 5)</p>
              <div className="ml-4 mb-2">
                <p>When x = 0, f(x) = 5:</p>
                <p>5 = a(0 - 2)² - 3</p>
                <p>5 = a(4) - 3</p>
                <p>5 = 4a - 3</p>
              </div>

              <p className="mb-2"><strong>Step 3:</strong> Solve for a</p>
              <div className="ml-4 mb-2">
                <p>8 = 4a</p>
                <p>a = 2</p>
              </div>

              <p className="mb-2"><strong>Step 4:</strong> Write the equation</p>
              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded">
                <p className="font-semibold mb-2">Vertex form: f(x) = 2(x - 2)² - 3</p>
              </div>

              <p className="mb-2"><strong>Step 5 (Optional):</strong> Convert to standard form</p>
              <div className="ml-4 mb-2">
                <p>f(x) = 2(x² - 4x + 4) - 3</p>
                <p>f(x) = 2x² - 8x + 8 - 3</p>
                <p className="font-semibold text-blue-600 dark:text-blue-400">
                  f(x) = 2x² - 8x + 5
                </p>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Verify:</strong> f(0) = 2(0)² - 8(0) + 5 = 5 ✓
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Method 2: From Roots and Point */}
      <section className="mb-8 p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">
          2. From X-Intercepts and Another Point
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Strategy: Use Factored Form</h3>
          <div className="text-center text-lg my-3 p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
            f(x) = a(x - p)(x - q)
          </div>
          <ol className="list-decimal list-inside space-y-2 mt-3">
            <li>Substitute the x-intercepts p and q into factored form</li>
            <li>Substitute the coordinates of the third point</li>
            <li>Solve for a</li>
            <li>Write the final equation</li>
            <li>Expand if needed</li>
          </ol>
        </div>

        {/* Worked Example 2 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample2(!showExample2)}
            className="w-full text-left p-4 bg-green-100 dark:bg-green-900 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-800 transition"
          >
            {showExample2 ? '▼' : '▶'} Example 2: X-intercepts at -1 and 5, passes through (2, -9)
          </button>

          {showExample2 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-green-500">
              <p className="mb-2"><strong>Given:</strong> Roots at x = -1 and x = 5, point (2, -9)</p>

              <p className="mb-2"><strong>Step 1:</strong> Set up factored form</p>
              <div className="ml-4 mb-2">
                <p>Roots are p = -1 and q = 5</p>
                <p>f(x) = a(x - (-1))(x - 5)</p>
                <p>f(x) = a(x + 1)(x - 5)</p>
              </div>

              <p className="mb-2"><strong>Step 2:</strong> Substitute point (2, -9)</p>
              <div className="ml-4 mb-2">
                <p>When x = 2, f(x) = -9:</p>
                <p>-9 = a(2 + 1)(2 - 5)</p>
                <p>-9 = a(3)(-3)</p>
                <p>-9 = -9a</p>
              </div>

              <p className="mb-2"><strong>Step 3:</strong> Solve for a</p>
              <p className="ml-4 mb-2">a = 1</p>

              <p className="mb-2"><strong>Step 4:</strong> Write the equation</p>
              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded">
                <p className="font-semibold mb-2">Factored form: f(x) = (x + 1)(x - 5)</p>
              </div>

              <p className="mb-2"><strong>Step 5:</strong> Expand to standard form</p>
              <div className="ml-4 mb-2">
                <p>f(x) = x² - 5x + x - 5</p>
                <p className="font-semibold text-blue-600 dark:text-blue-400">
                  f(x) = x² - 4x - 5
                </p>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Verify:</strong> f(2) = 4 - 8 - 5 = -9 ✓
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Method 3: From Three Points */}
      <section className="mb-8 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          3. From Three General Points
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Strategy: Use Standard Form and System of Equations</h3>
          <div className="text-center text-lg my-3 p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
            f(x) = ax² + bx + c
          </div>
          <ol className="list-decimal list-inside space-y-2 mt-3">
            <li>Substitute each point into f(x) = ax² + bx + c</li>
            <li>Create a system of three equations with three unknowns (a, b, c)</li>
            <li>Solve the system using substitution or elimination</li>
            <li>Write the final equation with found values of a, b, and c</li>
          </ol>
        </div>

        {/* Worked Example 3 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample3(!showExample3)}
            className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-800 transition"
          >
            {showExample3 ? '▼' : '▶'} Example 3: Points (0, 3), (1, 6), (2, 11)
          </button>

          {showExample3 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-purple-500">
              <p className="mb-2"><strong>Given:</strong> Three points (0, 3), (1, 6), (2, 11)</p>

              <p className="mb-2"><strong>Step 1:</strong> Set up standard form</p>
              <p className="ml-4 mb-2">f(x) = ax² + bx + c</p>

              <p className="mb-2"><strong>Step 2:</strong> Substitute each point</p>
              <div className="ml-4 mb-2 space-y-2">
                <div>
                  <p><strong>Point (0, 3):</strong></p>
                  <p className="ml-4">3 = a(0)² + b(0) + c</p>
                  <p className="ml-4 font-semibold text-blue-600 dark:text-blue-400">
                    Equation 1: c = 3
                  </p>
                </div>
                <div>
                  <p><strong>Point (1, 6):</strong></p>
                  <p className="ml-4">6 = a(1)² + b(1) + c</p>
                  <p className="ml-4 font-semibold text-blue-600 dark:text-blue-400">
                    Equation 2: a + b + c = 6
                  </p>
                </div>
                <div>
                  <p><strong>Point (2, 11):</strong></p>
                  <p className="ml-4">11 = a(4) + b(2) + c</p>
                  <p className="ml-4 font-semibold text-blue-600 dark:text-blue-400">
                    Equation 3: 4a + 2b + c = 11
                  </p>
                </div>
              </div>

              <p className="mb-2"><strong>Step 3:</strong> Solve the system</p>
              <div className="ml-4 mb-2 space-y-2">
                <p>From Equation 1: c = 3</p>
                <p>Substitute c = 3 into Equation 2:</p>
                <p className="ml-4">a + b + 3 = 6</p>
                <p className="ml-4">a + b = 3 ... (Equation 4)</p>
                <p>Substitute c = 3 into Equation 3:</p>
                <p className="ml-4">4a + 2b + 3 = 11</p>
                <p className="ml-4">4a + 2b = 8</p>
                <p className="ml-4">2a + b = 4 ... (Equation 5)</p>
              </div>

              <p className="mb-2"><strong>Step 4:</strong> Solve Equations 4 and 5</p>
              <div className="ml-4 mb-2">
                <p>Equation 5 - Equation 4:</p>
                <p className="ml-4">(2a + b) - (a + b) = 4 - 3</p>
                <p className="ml-4">a = 1</p>
                <p>Substitute a = 1 into Equation 4:</p>
                <p className="ml-4">1 + b = 3</p>
                <p className="ml-4">b = 2</p>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Solution: a = 1, b = 2, c = 3</p>
                <p className="mt-2 font-semibold text-lg text-blue-600 dark:text-blue-400">
                  f(x) = x² + 2x + 3
                </p>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Verify all three points:</strong>
                <br/>
                f(0) = 0 + 0 + 3 = 3 ✓
                <br/>
                f(1) = 1 + 2 + 3 = 6 ✓
                <br/>
                f(2) = 4 + 4 + 3 = 11 ✓
              </p>
            </div>
          )}
        </div>
      </section>

      {/* From Graph Sketch */}
      <section className="mb-8 p-6 bg-orange-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700 dark:text-orange-300">
          4. Finding Equation from a Graph Sketch
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Reading Information from a Graph:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Identify key points:</strong> Look for labeled vertex, intercepts, or other points</li>
            <li><strong>Choose appropriate form:</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>If vertex is clear → use vertex form</li>
                <li>If x-intercepts are clear → use factored form</li>
                <li>Otherwise → use three points and standard form</li>
              </ul>
            </li>
            <li><strong>Apply the relevant method</strong> from above</li>
          </ol>
        </div>

        <div className="p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Quick Example:</h3>
          <p className="mb-2">
            <strong>Graph shows:</strong> Vertex at (1, -4), passes through (0, -3)
          </p>
          <div className="ml-4 space-y-1 text-sm">
            <p><strong>Setup:</strong> f(x) = a(x - 1)² - 4</p>
            <p><strong>Substitute (0, -3):</strong> -3 = a(0-1)² - 4 = a - 4</p>
            <p><strong>Solve:</strong> a = 1</p>
            <p className="font-semibold text-green-600 dark:text-green-400">
              Answer: f(x) = (x - 1)² - 4 or f(x) = x² - 2x - 3
            </p>
          </div>
        </div>
      </section>

      {/* Decision Guide */}
      <section className="mb-8 p-6 bg-indigo-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">
          Quick Decision Guide
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-gray-700 rounded">
            <thead className="bg-gray-100 dark:bg-gray-600">
              <tr>
                <th className="p-3 text-left">Given Information</th>
                <th className="p-3 text-left">Form to Use</th>
                <th className="p-3 text-left">Steps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              <tr>
                <td className="p-3">Vertex + 1 point</td>
                <td className="p-3 font-semibold">Vertex Form</td>
                <td className="p-3">Substitute vertex & point, solve for a</td>
              </tr>
              <tr>
                <td className="p-3">2 x-intercepts + 1 point</td>
                <td className="p-3 font-semibold">Factored Form</td>
                <td className="p-3">Substitute roots & point, solve for a</td>
              </tr>
              <tr>
                <td className="p-3">3 general points</td>
                <td className="p-3 font-semibold">Standard Form</td>
                <td className="p-3">System of 3 equations, solve for a, b, c</td>
              </tr>
              <tr>
                <td className="p-3">Vertex on x-axis + 1 point</td>
                <td className="p-3 font-semibold">Perfect Square</td>
                <td className="p-3">f(x) = a(x - h)², find a</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Practice Problems */}
      <section className="mb-8 p-6 bg-pink-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-pink-700 dark:text-pink-300">
          Practice Problems
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">1. Find equation: vertex (3, 2), passes through (1, 10)</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>f(x) = a(x - 3)² + 2</p>
                <p>10 = a(1-3)² + 2 = 4a + 2</p>
                <p>a = 2</p>
                <p className="font-semibold">Answer: f(x) = 2(x - 3)² + 2 or f(x) = 2x² - 12x + 20</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">2. Find equation: x-intercepts at 2 and 6, passes through (3, -3)</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>f(x) = a(x - 2)(x - 6)</p>
                <p>-3 = a(3-2)(3-6) = a(1)(-3) = -3a</p>
                <p>a = 1</p>
                <p className="font-semibold">Answer: f(x) = (x - 2)(x - 6) or f(x) = x² - 8x + 12</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">3. Find equation through points (0, 5), (1, 4), (-1, 8)</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>From (0,5): c = 5</p>
                <p>From (1,4): a + b + 5 = 4 → a + b = -1</p>
                <p>From (-1,8): a - b + 5 = 8 → a - b = 3</p>
                <p>Adding: 2a = 2 → a = 1, b = -2</p>
                <p className="font-semibold">Answer: f(x) = x² - 2x + 5</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">4. Parabola has vertex at (-2, 0) and passes through (0, 8). Find equation.</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Vertex on x-axis → f(x) = a(x + 2)²</p>
                <p>8 = a(0 + 2)² = 4a</p>
                <p>a = 2</p>
                <p className="font-semibold">Answer: f(x) = 2(x + 2)² or f(x) = 2x² + 8x + 8</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">
          Key Takeaways
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Choose the form based on given information (vertex, roots, or general points)</li>
          <li>Vertex form is easiest when vertex is known: f(x) = a(x - h)² + k</li>
          <li>Factored form is best for x-intercepts: f(x) = a(x - p)(x - q)</li>
          <li>Standard form requires system of equations for three general points</li>
          <li>Always substitute one known point to find the value of a</li>
          <li>Verify your answer by checking all given points</li>
          <li>You can convert between forms after finding the equation</li>
          <li>Three non-collinear points uniquely determine a parabola</li>
        </ul>
      </section>
    </div>
  );
};

export default GraphFindingFunction;
