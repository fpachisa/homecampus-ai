import { useState } from 'react';

const GraphPolynomial = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Graphing Quadratics from Standard Form
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
          Introduction
        </h2>
        <p className="mb-3">
          The <strong>standard form</strong> (or polynomial form) is the most common way to write
          quadratic functions. While it doesn't immediately reveal key features like other forms,
          we can systematically find everything we need to sketch the graph.
        </p>
        <div className="p-6 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg mt-4 border-2 border-blue-400 dark:border-blue-600">
          <h3 className="font-bold text-xl mb-3 text-center">Standard Form</h3>
          <div className="text-center text-2xl font-bold mb-3">
            f(x) = ax² + bx + c
          </div>
          <p className="text-center text-sm">
            where a ≠ 0
          </p>
        </div>
        <p className="mt-4">
          This lesson shows you a complete, methodical approach to graphing any quadratic
          given in standard form.
        </p>
      </section>

      {/* Step-by-Step Process */}
      <section className="mb-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
          1. Complete Graphing Strategy
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">The 7-Step Method:</h3>
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Determine orientation:</strong> Check if a &gt; 0 (opens up) or a &lt; 0 (opens down)
            </li>
            <li>
              <strong>Find the vertex:</strong> Use h = -b/(2a), then k = f(h)
            </li>
            <li>
              <strong>Identify axis of symmetry:</strong> x = -b/(2a)
            </li>
            <li>
              <strong>Find y-intercept:</strong> Set x = 0, giving (0, c)
            </li>
            <li>
              <strong>Find x-intercepts:</strong> Solve ax² + bx + c = 0 (if they exist)
            </li>
            <li>
              <strong>Plot additional points:</strong> Choose x-values and calculate y-values
            </li>
            <li>
              <strong>Sketch the parabola:</strong> Draw smooth curve through all points
            </li>
          </ol>
        </div>

        <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded">
          <h3 className="font-semibold mb-2">Key Formulas:</h3>
          <div className="space-y-2 ml-4">
            <p>• <strong>Vertex x-coordinate:</strong> h = -b / (2a)</p>
            <p>• <strong>Vertex y-coordinate:</strong> k = f(h) = ah² + bh + c</p>
            <p>• <strong>Axis of symmetry:</strong> x = -b / (2a)</p>
            <p>• <strong>Y-intercept:</strong> (0, c)</p>
            <p>• <strong>X-intercepts:</strong> Solve ax² + bx + c = 0</p>
          </div>
        </div>
      </section>

      {/* Worked Example 1 */}
      <section className="mb-8 p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">
          2. Complete Example (Upward Opening)
        </h2>

        <div className="mt-6">
          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-green-100 dark:bg-green-900 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-800 transition"
          >
            {showExample1 ? '▼' : '▶'} Example 1: Graph f(x) = x² - 4x + 3
          </button>

          {showExample1 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-green-500">
              <p className="mb-2"><strong>Given:</strong> f(x) = x² - 4x + 3</p>
              <p className="mb-3">a = 1, b = -4, c = 3</p>

              <p className="mb-2"><strong>Step 1: Determine orientation</strong></p>
              <p className="ml-4 mb-3">
                a = 1 &gt; 0 → parabola opens <strong>upward</strong>
                <br/>
                Vertex will be a minimum point
              </p>

              <p className="mb-2"><strong>Step 2: Find vertex</strong></p>
              <div className="ml-4 mb-3">
                <p>h = -b / (2a) = -(-4) / (2×1) = 4/2 = 2</p>
                <p>k = f(2) = (2)² - 4(2) + 3 = 4 - 8 + 3 = -1</p>
                <p className="font-semibold text-blue-600 dark:text-blue-400">Vertex: (2, -1)</p>
              </div>

              <p className="mb-2"><strong>Step 3: Axis of symmetry</strong></p>
              <p className="ml-4 mb-3 font-semibold text-purple-600 dark:text-purple-400">
                x = 2
              </p>

              <p className="mb-2"><strong>Step 4: Y-intercept</strong></p>
              <div className="ml-4 mb-3">
                <p>f(0) = 0² - 4(0) + 3 = 3</p>
                <p className="font-semibold text-orange-600 dark:text-orange-400">
                  Y-intercept: (0, 3)
                </p>
              </div>

              <p className="mb-2"><strong>Step 5: X-intercepts</strong></p>
              <div className="ml-4 mb-3">
                <p>Solve: x² - 4x + 3 = 0</p>
                <p>Factor: (x - 1)(x - 3) = 0</p>
                <p>x = 1 or x = 3</p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  X-intercepts: (1, 0) and (3, 0)
                </p>
              </div>

              <p className="mb-2"><strong>Step 6: Additional symmetric point</strong></p>
              <div className="ml-4 mb-3">
                <p>Since (0, 3) is 2 units left of axis x = 2,</p>
                <p>symmetric point is 2 units right: (4, 3)</p>
              </div>

              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-600 rounded">
                <h4 className="font-semibold mb-3">Visual Graph:</h4>
                <svg viewBox="-10 -10 140 140" className="w-full max-w-md mx-auto border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800">
                  {/* Grid */}
                  <line x1="0" y1="65" x2="130" y2="65" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                  <line x1="65" y1="0" x2="65" y2="130" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>

                  {/* Axis of symmetry at x = 2 */}
                  <line x1="85" y1="10" x2="85" y2="120" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2"/>
                  <text x="88" y="15" fontSize="7" fill="#ef4444">x=2</text>

                  {/* Parabola */}
                  <path d="M 45,85 Q 85,75 125,85" fill="none" stroke="#3b82f6" strokeWidth="2"/>

                  {/* Vertex */}
                  <circle cx="85" cy="75" r="3" fill="#8b5cf6"/>
                  <text x="88" y="73" fontSize="7" fill="#8b5cf6">(2,-1)</text>

                  {/* X-intercepts */}
                  <circle cx="65" cy="65" r="2.5" fill="#22c55e"/>
                  <text x="55" y="60" fontSize="7" fill="#22c55e">(1,0)</text>
                  <circle cx="105" cy="65" r="2.5" fill="#22c55e"/>
                  <text x="108" y="60" fontSize="7" fill="#22c55e">(3,0)</text>

                  {/* Y-intercept */}
                  <circle cx="45" cy="85" r="2" fill="#f97316"/>
                  <text x="30" y="83" fontSize="7" fill="#f97316">(0,3)</text>

                  {/* Symmetric point */}
                  <circle cx="125" cy="85" r="2" fill="#06b6d4"/>
                  <text x="115" y="98" fontSize="7" fill="#06b6d4">(4,3)</text>
                </svg>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Summary of Features:</p>
                <p>• Vertex: (2, -1) - minimum</p>
                <p>• X-intercepts: (1, 0) and (3, 0)</p>
                <p>• Y-intercept: (0, 3)</p>
                <p>• Axis of symmetry: x = 2</p>
                <p>• Opens upward (a = 1 &gt; 0)</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Downward Opening Example */}
      <section className="mb-8 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          3. Example with Downward Opening
        </h2>

        <div className="mt-6">
          <button
            onClick={() => setShowExample2(!showExample2)}
            className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-800 transition"
          >
            {showExample2 ? '▼' : '▶'} Example 2: Graph f(x) = -x² + 2x + 8
          </button>

          {showExample2 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-purple-500">
              <p className="mb-2"><strong>Given:</strong> f(x) = -x² + 2x + 8</p>
              <p className="mb-3">a = -1, b = 2, c = 8</p>

              <p className="mb-2"><strong>Step 1: Orientation</strong></p>
              <p className="ml-4 mb-3">
                a = -1 &lt; 0 → opens <strong>downward</strong>, vertex is maximum
              </p>

              <p className="mb-2"><strong>Step 2: Vertex</strong></p>
              <div className="ml-4 mb-3">
                <p>h = -2 / (2×-1) = -2 / -2 = 1</p>
                <p>k = f(1) = -(1)² + 2(1) + 8 = -1 + 2 + 8 = 9</p>
                <p className="font-semibold text-blue-600 dark:text-blue-400">Vertex: (1, 9)</p>
              </div>

              <p className="mb-2"><strong>Step 3: Axis of symmetry</strong></p>
              <p className="ml-4 mb-3 font-semibold">x = 1</p>

              <p className="mb-2"><strong>Step 4: Y-intercept</strong></p>
              <p className="ml-4 mb-3 font-semibold text-orange-600 dark:text-orange-400">
                (0, 8)
              </p>

              <p className="mb-2"><strong>Step 5: X-intercepts</strong></p>
              <div className="ml-4 mb-3">
                <p>Solve: -x² + 2x + 8 = 0</p>
                <p>Multiply by -1: x² - 2x - 8 = 0</p>
                <p>Factor: (x - 4)(x + 2) = 0</p>
                <p>x = 4 or x = -2</p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  X-intercepts: (-2, 0) and (4, 0)
                </p>
              </div>

              <p className="mb-2"><strong>Step 6: Symmetric point</strong></p>
              <p className="ml-4 mb-3">
                Point (0, 8) has symmetric point at (2, 8)
              </p>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Summary:</p>
                <p>• Vertex: (1, 9) - maximum point</p>
                <p>• X-intercepts: (-2, 0) and (4, 0)</p>
                <p>• Y-intercept: (0, 8)</p>
                <p>• Opens downward, maximum value is 9</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* No X-Intercepts Case */}
      <section className="mb-8 p-6 bg-orange-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700 dark:text-orange-300">
          4. When There Are No X-Intercepts
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Checking with the Discriminant:</h3>
          <p className="mb-2">Before solving for x-intercepts, check the discriminant:</p>
          <div className="text-center text-lg my-3 p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
            Δ = b² - 4ac
          </div>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>If Δ &gt; 0: Two x-intercepts</li>
            <li>If Δ = 0: One x-intercept (vertex on x-axis)</li>
            <li>If Δ &lt; 0: No x-intercepts (parabola doesn't cross x-axis)</li>
          </ul>
        </div>

        <div className="mt-6">
          <button
            onClick={() => setShowExample3(!showExample3)}
            className="w-full text-left p-4 bg-orange-100 dark:bg-orange-900 rounded-lg font-semibold hover:bg-orange-200 dark:hover:bg-orange-800 transition"
          >
            {showExample3 ? '▼' : '▶'} Example 3: Graph f(x) = x² + 2x + 5
          </button>

          {showExample3 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-orange-500">
              <p className="mb-2"><strong>Given:</strong> f(x) = x² + 2x + 5</p>
              <p className="mb-3">a = 1, b = 2, c = 5</p>

              <p className="mb-2"><strong>Step 1: Orientation</strong></p>
              <p className="ml-4 mb-3">a = 1 &gt; 0 → opens upward</p>

              <p className="mb-2"><strong>Step 2: Vertex</strong></p>
              <div className="ml-4 mb-3">
                <p>h = -2 / (2×1) = -1</p>
                <p>k = f(-1) = (-1)² + 2(-1) + 5 = 1 - 2 + 5 = 4</p>
                <p className="font-semibold text-blue-600 dark:text-blue-400">Vertex: (-1, 4)</p>
              </div>

              <p className="mb-2"><strong>Step 3: Y-intercept</strong></p>
              <p className="ml-4 mb-3 font-semibold text-orange-600 dark:text-orange-400">
                (0, 5)
              </p>

              <p className="mb-2"><strong>Step 4: Check for x-intercepts</strong></p>
              <div className="ml-4 mb-3">
                <p>Discriminant: Δ = b² - 4ac = 4 - 4(1)(5) = 4 - 20 = -16</p>
                <p className="font-semibold text-red-600 dark:text-red-400">
                  Δ &lt; 0 → No x-intercepts
                </p>
                <p className="text-sm mt-1">
                  The parabola opens upward with vertex at y = 4, so it never crosses the x-axis
                </p>
              </div>

              <p className="mb-2"><strong>Step 5: Additional points</strong></p>
              <div className="ml-4 mb-3">
                <p>f(1) = 1 + 2 + 5 = 8 → (1, 8)</p>
                <p>f(-2) = 4 - 4 + 5 = 5 → (-2, 5)</p>
                <p>f(-3) = 9 - 6 + 5 = 8 → (-3, 8)</p>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Summary:</p>
                <p>• Vertex: (-1, 4) - minimum</p>
                <p>• Y-intercept: (0, 5)</p>
                <p>• No x-intercepts</p>
                <p>• Range: y ≥ 4</p>
                <p>• All y-values are positive (graph entirely above x-axis)</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Tips and Tricks */}
      <section className="mb-8 p-6 bg-indigo-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">
          5. Graphing Tips and Tricks
        </h2>

        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">
              Tip 1: Use Symmetry
            </h3>
            <p className="text-sm">
              Once you find the vertex and axis of symmetry, you only need points on one side.
              Mirror them across the axis to get the other side.
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-green-600 dark:text-green-400">
              Tip 2: Start with Easy Points
            </h3>
            <p className="text-sm">
              Always find y-intercept first (x = 0). Then try x = 1, x = -1, or other simple
              values near the vertex.
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">
              Tip 3: Check Discriminant Early
            </h3>
            <p className="text-sm">
              Calculate b² - 4ac before trying to find x-intercepts. If negative, save time
              by skipping that step.
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">
              Tip 4: Estimate Width
            </h3>
            <p className="text-sm">
              |a| &gt; 1 means narrower, 0 &lt; |a| &lt; 1 means wider than y = x².
              Use this to gauge how "steep" your parabola should be.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Problems */}
      <section className="mb-8 p-6 bg-pink-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-pink-700 dark:text-pink-300">
          Practice Problems
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">1. Find vertex and intercepts of f(x) = 2x² - 8x + 6</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Vertex: h = 8/4 = 2, k = f(2) = 8-16+6 = -2 → (2, -2)</p>
                <p>Y-intercept: (0, 6)</p>
                <p>X-intercepts: 2x² - 8x + 6 = 0 → x² - 4x + 3 = 0</p>
                <p>(x-1)(x-3) = 0 → x = 1, 3</p>
                <p className="font-semibold">Points: (1,0), (3,0), (0,6), (2,-2)</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">2. Sketch f(x) = -2x² - 4x + 6 with all features</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Opens down (a = -2 &lt; 0)</p>
                <p>Vertex: h = 4/(-4) = -1, k = -2+4+6 = 8 → (-1, 8) max</p>
                <p>Y-int: (0, 6)</p>
                <p>X-ints: -2x² - 4x + 6 = 0 → x² + 2x - 3 = 0 → x = -3, 1</p>
                <p className="font-semibold">Narrower than standard, max at (-1, 8)</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">3. Does f(x) = x² - 6x + 10 have x-intercepts?</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Discriminant: Δ = 36 - 40 = -4 &lt; 0</p>
                <p className="font-semibold text-red-600 dark:text-red-400">
                  No x-intercepts
                </p>
                <p className="text-sm">Vertex: (3, 1) above x-axis, opens up</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">4. Find all features of f(x) = ½x² + 2x - 3</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Vertex: h = -2/1 = -2, k = 2-4-3 = -5 → (-2, -5)</p>
                <p>Y-int: (0, -3)</p>
                <p>X-ints: x² + 4x - 6 = 0 → x = (-4±√40)/2 = -2±√10</p>
                <p className="font-semibold">Opens up, wider, min at (-2, -5)</p>
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
          <li>Standard form f(x) = ax² + bx + c requires systematic approach to graphing</li>
          <li>Always find vertex first using h = -b/(2a), then k = f(h)</li>
          <li>Y-intercept is immediate: just the constant c</li>
          <li>Check discriminant b² - 4ac before solving for x-intercepts</li>
          <li>Use axis of symmetry x = -b/(2a) to find symmetric points</li>
          <li>Sign of a determines orientation; magnitude affects width</li>
          <li>Plot vertex, intercepts, and 2-3 additional points for accuracy</li>
          <li>Sketch smooth U-shaped curve through all plotted points</li>
        </ul>
      </section>
    </div>
  );
};

export default GraphPolynomial;
