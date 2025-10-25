import { useState } from 'react';

const GraphFeatures = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Features of Quadratic Graphs (Parabolas)
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
          Introduction
        </h2>
        <p className="mb-3">
          The graph of a quadratic function f(x) = ax² + bx + c is called a <strong>parabola</strong>.
          Parabolas have distinctive U-shaped curves with several important features that help us
          understand and sketch them.
        </p>
        <p className="mb-3">
          Understanding these features allows us to quickly sketch parabolas, solve problems
          graphically, and interpret real-world quadratic relationships.
        </p>
      </section>

      {/* Shape and Orientation */}
      <section className="mb-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
          1. Shape and Orientation
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">The Role of 'a' (Leading Coefficient):</h3>
          <div className="space-y-3 mt-3">
            <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded">
              <p className="font-semibold text-green-700 dark:text-green-300">When a &gt; 0 (positive):</p>
              <p className="ml-4">• Parabola opens <strong>upward</strong> (U-shape)</p>
              <p className="ml-4">• Vertex is a <strong>minimum</strong> point</p>
              <p className="ml-4">• Example: f(x) = x² or f(x) = 2x² + 3x + 1</p>
            </div>
            <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded">
              <p className="font-semibold text-red-700 dark:text-red-300">When a &lt; 0 (negative):</p>
              <p className="ml-4">• Parabola opens <strong>downward</strong> (∩-shape)</p>
              <p className="ml-4">• Vertex is a <strong>maximum</strong> point</p>
              <p className="ml-4">• Example: f(x) = -x² or f(x) = -3x² + 2x - 1</p>
            </div>
          </div>
        </div>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Width of the Parabola:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Larger |a| → <strong>narrower</strong> parabola (steeper)</li>
            <li>Smaller |a| → <strong>wider</strong> parabola (flatter)</li>
            <li>When |a| = 1, standard width (like y = x²)</li>
          </ul>
          <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
            <p className="text-sm">
              <strong>Examples:</strong> y = 3x² is narrower than y = x², while y = (1/2)x² is wider
            </p>
          </div>
        </div>

        {/* Visual Example */}
        <div className="mt-6 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-3">Visual Comparison:</h3>
          <svg viewBox="-10 -10 120 120" className="w-full max-w-md mx-auto border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800">
            {/* Grid */}
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>

            {/* Upward parabola (a > 0) */}
            <path d="M 30,70 Q 50,30 70,70" fill="none" stroke="#22c55e" strokeWidth="2"/>
            <text x="72" y="75" fontSize="8" fill="#22c55e">a &gt; 0</text>

            {/* Downward parabola (a < 0) */}
            <path d="M 30,30 Q 50,70 70,30" fill="none" stroke="#ef4444" strokeWidth="2"/>
            <text x="72" y="25" fontSize="8" fill="#ef4444">a &lt; 0</text>

            {/* Vertex points */}
            <circle cx="50" cy="30" r="2" fill="#22c55e"/>
            <circle cx="50" cy="70" r="2" fill="#ef4444"/>
          </svg>
        </div>
      </section>

      {/* Vertex */}
      <section className="mb-8 p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">
          2. The Vertex
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">What is the Vertex?</h3>
          <p className="mb-3">
            The <strong>vertex</strong> is the turning point of the parabola - the highest or
            lowest point on the graph.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>For upward parabolas (a &gt; 0): vertex is the <strong>minimum</strong> point</li>
            <li>For downward parabolas (a &lt; 0): vertex is the <strong>maximum</strong> point</li>
          </ul>
        </div>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Finding the Vertex:</h3>
          <p className="mb-3">For f(x) = ax² + bx + c, the vertex is at point (h, k) where:</p>
          <div className="text-center text-lg my-3 p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
            <p>x-coordinate: h = -b / (2a)</p>
            <p className="mt-2">y-coordinate: k = f(h)</p>
          </div>
        </div>

        {/* Worked Example 1 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-green-100 dark:bg-green-900 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-800 transition"
          >
            {showExample1 ? '▼' : '▶'} Example 1: Find the vertex of f(x) = 2x² - 8x + 3
          </button>

          {showExample1 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-green-500">
              <p className="mb-2"><strong>Given:</strong> f(x) = 2x² - 8x + 3</p>

              <p className="mb-2"><strong>Step 1:</strong> Identify a, b, c</p>
              <p className="ml-4 mb-2">a = 2, b = -8, c = 3</p>

              <p className="mb-2"><strong>Step 2:</strong> Find x-coordinate of vertex</p>
              <div className="ml-4 mb-2">
                <p>h = -b / (2a) = -(-8) / (2×2)</p>
                <p>h = 8 / 4 = 2</p>
              </div>

              <p className="mb-2"><strong>Step 3:</strong> Find y-coordinate</p>
              <div className="ml-4 mb-2">
                <p>k = f(2) = 2(2)² - 8(2) + 3</p>
                <p>k = 2(4) - 16 + 3</p>
                <p>k = 8 - 16 + 3 = -5</p>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Vertex: (2, -5)</p>
                <p className="mt-2 text-sm">
                  Since a = 2 &gt; 0, this is a minimum point. The parabola opens upward.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Axis of Symmetry */}
      <section className="mb-8 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          3. Axis of Symmetry
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Definition:</h3>
          <p className="mb-3">
            The <strong>axis of symmetry</strong> is a vertical line that divides the parabola
            into two mirror-image halves. It always passes through the vertex.
          </p>
          <div className="text-center text-lg my-3 p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
            Equation: x = -b / (2a)
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            This is the same as the x-coordinate of the vertex!
          </p>
        </div>

        <div className="mt-6 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-3">Visual Representation:</h3>
          <svg viewBox="-10 -10 120 120" className="w-full max-w-md mx-auto border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800">
            {/* Grid */}
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>

            {/* Parabola */}
            <path d="M 20,80 Q 50,20 80,80" fill="none" stroke="#3b82f6" strokeWidth="2"/>

            {/* Axis of symmetry */}
            <line x1="50" y1="10" x2="50" y2="90" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3"/>

            {/* Vertex */}
            <circle cx="50" cy="20" r="2.5" fill="#22c55e"/>

            {/* Labels */}
            <text x="52" y="8" fontSize="7" fill="#ef4444">x = h</text>
            <text x="52" y="25" fontSize="7" fill="#22c55e">Vertex</text>
            <text x="35" y="95" fontSize="7" fill="#3b82f6">Parabola</text>
          </svg>
        </div>
      </section>

      {/* Intercepts */}
      <section className="mb-8 p-6 bg-orange-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700 dark:text-orange-300">
          4. Intercepts
        </h2>

        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Y-Intercept:</h3>
            <p className="mb-2">
              The point where the parabola crosses the y-axis (where x = 0).
            </p>
            <div className="text-center text-lg my-2 p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
              Y-intercept: (0, c)
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Simply substitute x = 0 into f(x) = ax² + bx + c to get y = c
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-green-600 dark:text-green-400">X-Intercepts (Roots/Zeros):</h3>
            <p className="mb-2">
              Points where the parabola crosses the x-axis (where y = 0).
            </p>
            <p className="mb-2">Find by solving: ax² + bx + c = 0</p>
            <div className="mt-3 space-y-2 ml-4">
              <p>• <strong>Two x-intercepts:</strong> discriminant &gt; 0</p>
              <p>• <strong>One x-intercept:</strong> discriminant = 0 (vertex touches x-axis)</p>
              <p>• <strong>No x-intercepts:</strong> discriminant &lt; 0 (parabola doesn't cross x-axis)</p>
            </div>
          </div>
        </div>

        {/* Worked Example 2 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample2(!showExample2)}
            className="w-full text-left p-4 bg-orange-100 dark:bg-orange-900 rounded-lg font-semibold hover:bg-orange-200 dark:hover:bg-orange-800 transition"
          >
            {showExample2 ? '▼' : '▶'} Example 2: Find all intercepts of f(x) = x² - 4x + 3
          </button>

          {showExample2 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-orange-500">
              <p className="mb-2"><strong>Given:</strong> f(x) = x² - 4x + 3</p>

              <p className="mb-2"><strong>Finding Y-Intercept:</strong></p>
              <div className="ml-4 mb-3">
                <p>Set x = 0: f(0) = 0² - 4(0) + 3 = 3</p>
                <p className="font-semibold text-blue-600 dark:text-blue-400">Y-intercept: (0, 3)</p>
              </div>

              <p className="mb-2"><strong>Finding X-Intercepts:</strong></p>
              <div className="ml-4 mb-2">
                <p>Set f(x) = 0: x² - 4x + 3 = 0</p>
                <p>Factor: (x - 1)(x - 3) = 0</p>
                <p>x = 1 or x = 3</p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  X-intercepts: (1, 0) and (3, 0)
                </p>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Summary of Intercepts:</p>
                <p className="ml-4">Y-intercept: (0, 3)</p>
                <p className="ml-4">X-intercepts: (1, 0) and (3, 0)</p>
              </div>

              <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="text-sm font-semibold">Bonus: Find the vertex</p>
                <p className="text-sm ml-4">
                  h = -(-4)/(2×1) = 2
                  <br/>
                  k = f(2) = 4 - 8 + 3 = -1
                  <br/>
                  Vertex: (2, -1) - note it's exactly between the x-intercepts!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Summary Table */}
      <section className="mb-8 p-6 bg-indigo-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">
          Quick Reference: Key Features
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-gray-700 rounded">
            <thead className="bg-gray-100 dark:bg-gray-600">
              <tr>
                <th className="p-3 text-left">Feature</th>
                <th className="p-3 text-left">How to Find</th>
                <th className="p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              <tr>
                <td className="p-3 font-semibold">Orientation</td>
                <td className="p-3">Check sign of a</td>
                <td className="p-3">a &gt; 0: upward, a &lt; 0: downward</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Vertex</td>
                <td className="p-3">(-b/2a, f(-b/2a))</td>
                <td className="p-3">Turning point (max or min)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Axis of Symmetry</td>
                <td className="p-3">x = -b/2a</td>
                <td className="p-3">Vertical line through vertex</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Y-Intercept</td>
                <td className="p-3">Set x = 0</td>
                <td className="p-3">Point (0, c)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">X-Intercepts</td>
                <td className="p-3">Solve ax² + bx + c = 0</td>
                <td className="p-3">0, 1, or 2 intercepts</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Width</td>
                <td className="p-3">Check |a|</td>
                <td className="p-3">Larger |a| = narrower</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Practice Problems */}
      <section className="mb-8 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          Practice Problems
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">1. For f(x) = -x² + 6x - 5, find the vertex and axis of symmetry</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>a = -1, b = 6</p>
                <p>h = -6/(2×-1) = 3</p>
                <p>k = -(3)² + 6(3) - 5 = -9 + 18 - 5 = 4</p>
                <p className="font-semibold">Vertex: (3, 4), Axis: x = 3</p>
                <p className="text-sm mt-2">Opens downward (a &lt; 0), so vertex is maximum</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">2. Find all intercepts of f(x) = 2x² + 4x - 6</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Y-intercept: (0, -6)</p>
                <p>X-intercepts: 2x² + 4x - 6 = 0 → x² + 2x - 3 = 0</p>
                <p>(x + 3)(x - 1) = 0</p>
                <p className="font-semibold">Intercepts: (0, -6), (-3, 0), (1, 0)</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">3. Does f(x) = x² + 2x + 5 have x-intercepts? Explain.</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Check discriminant: b² - 4ac = 4 - 20 = -16 &lt; 0</p>
                <p className="font-semibold">No x-intercepts (parabola doesn't cross x-axis)</p>
                <p className="text-sm mt-2">Opens upward with vertex above x-axis</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">4. Which is wider: f(x) = 3x² or g(x) = 0.5x²?</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>|a| for f(x) = 3, |a| for g(x) = 0.5</p>
                <p>Smaller |a| means wider parabola</p>
                <p className="font-semibold">g(x) = 0.5x² is wider</p>
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
          <li>Parabolas are U-shaped curves; orientation depends on sign of a</li>
          <li>Vertex is the turning point: use h = -b/(2a) and k = f(h)</li>
          <li>Axis of symmetry is vertical line x = -b/(2a) through vertex</li>
          <li>Y-intercept is always (0, c) - just the constant term</li>
          <li>X-intercepts found by solving ax² + bx + c = 0</li>
          <li>Discriminant tells how many x-intercepts: &gt;0 (two), =0 (one), &lt;0 (none)</li>
          <li>Larger |a| makes parabola narrower; smaller |a| makes it wider</li>
          <li>All parabolas are symmetric about their axis of symmetry</li>
        </ul>
      </section>
    </div>
  );
};

export default GraphFeatures;
