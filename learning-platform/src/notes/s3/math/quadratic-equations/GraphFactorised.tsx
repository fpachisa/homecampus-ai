import React, { useState } from 'react';

const GraphFactorised = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Graphing Quadratics from Factored Form
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
          Introduction
        </h2>
        <p className="mb-3">
          The <strong>factored form</strong> (also called intercept form) of a quadratic function
          makes it incredibly easy to identify the x-intercepts and sketch the parabola.
        </p>
        <div className="p-6 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 rounded-lg mt-4 border-2 border-blue-400 dark:border-blue-600">
          <h3 className="font-bold text-xl mb-3 text-center">Factored Form</h3>
          <div className="text-center text-2xl font-bold mb-3">
            f(x) = a(x - p)(x - q)
          </div>
          <p className="text-center text-sm">
            X-intercepts: (p, 0) and (q, 0)
          </p>
        </div>
        <p className="mt-4">
          This form is particularly useful when you need to quickly identify where the graph
          crosses the x-axis and find the axis of symmetry.
        </p>
      </section>

      {/* Understanding Factored Form */}
      <section className="mb-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
          1. Identifying X-Intercepts (Roots)
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">From f(x) = a(x - p)(x - q):</h3>
          <p className="mb-3">
            The x-intercepts are found by setting f(x) = 0 and applying the Zero Product Property.
          </p>
          <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
            <p className="font-semibold mb-2">Zero Product Property:</p>
            <p>If a(x - p)(x - q) = 0, then:</p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>x - p = 0 → x = p</li>
              <li>x - q = 0 → x = q</li>
            </ul>
            <p className="mt-2 font-semibold text-blue-600 dark:text-blue-400">
              X-intercepts: (p, 0) and (q, 0)
            </p>
          </div>
        </div>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Important Sign Considerations:</h3>
          <div className="space-y-2 ml-4">
            <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded">
              <p><strong>f(x) = (x - 3)(x - 5)</strong></p>
              <p className="ml-4 text-sm">Roots: x = 3 and x = 5</p>
            </div>
            <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded">
              <p><strong>f(x) = (x + 2)(x - 4)</strong> = (x - (-2))(x - 4)</p>
              <p className="ml-4 text-sm">Roots: x = -2 and x = 4</p>
            </div>
            <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded">
              <p><strong>f(x) = (x + 1)(x + 6)</strong> = (x - (-1))(x - (-6))</p>
              <p className="ml-4 text-sm">Roots: x = -1 and x = -6</p>
            </div>
          </div>
        </div>

        {/* Worked Example 1 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition"
          >
            {showExample1 ? '▼' : '▶'} Example 1: Identify x-intercepts of f(x) = (x - 2)(x + 5)
          </button>

          {showExample1 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-blue-500">
              <p className="mb-2"><strong>Given:</strong> f(x) = (x - 2)(x + 5)</p>

              <p className="mb-2"><strong>Step 1:</strong> Rewrite in standard form if needed</p>
              <p className="ml-4 mb-2">f(x) = (x - 2)(x - (-5))</p>

              <p className="mb-2"><strong>Step 2:</strong> Apply Zero Product Property</p>
              <div className="ml-4 mb-2">
                <p>Set f(x) = 0: (x - 2)(x + 5) = 0</p>
                <p>Either x - 2 = 0 or x + 5 = 0</p>
              </div>

              <p className="mb-2"><strong>Step 3:</strong> Solve each equation</p>
              <div className="ml-4 mb-2">
                <p>x - 2 = 0 → x = 2</p>
                <p>x + 5 = 0 → x = -5</p>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">X-intercepts: (2, 0) and (-5, 0)</p>
                <p className="mt-2 text-sm">
                  The parabola crosses the x-axis at x = -5 and x = 2
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Finding the Vertex */}
      <section className="mb-8 p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">
          2. Finding the Vertex from Roots
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Key Insight:</h3>
          <p className="mb-3">
            Due to symmetry, the vertex lies exactly <strong>halfway between</strong> the two
            x-intercepts. The axis of symmetry passes through the midpoint of the roots.
          </p>
          <div className="text-center text-lg my-3 p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
            <p className="mb-2">x-coordinate of vertex: h = (p + q) / 2</p>
            <p>y-coordinate of vertex: k = f(h)</p>
          </div>
        </div>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Step-by-Step Process:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Identify the roots p and q from f(x) = a(x - p)(x - q)</li>
            <li>Find the midpoint: h = (p + q) / 2</li>
            <li>Substitute h into the function to find k = f(h)</li>
            <li>Vertex is at (h, k)</li>
          </ol>
        </div>

        {/* Worked Example 2 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample2(!showExample2)}
            className="w-full text-left p-4 bg-green-100 dark:bg-green-900 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-800 transition"
          >
            {showExample2 ? '▼' : '▶'} Example 2: Find vertex of f(x) = (x - 1)(x - 7)
          </button>

          {showExample2 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-green-500">
              <p className="mb-2"><strong>Given:</strong> f(x) = (x - 1)(x - 7)</p>

              <p className="mb-2"><strong>Step 1:</strong> Identify the roots</p>
              <p className="ml-4 mb-2">p = 1, q = 7</p>
              <p className="ml-4 mb-2">X-intercepts: (1, 0) and (7, 0)</p>

              <p className="mb-2"><strong>Step 2:</strong> Find x-coordinate of vertex (midpoint)</p>
              <div className="ml-4 mb-2">
                <p>h = (p + q) / 2 = (1 + 7) / 2</p>
                <p>h = 8 / 2 = 4</p>
              </div>

              <p className="mb-2"><strong>Step 3:</strong> Find y-coordinate of vertex</p>
              <div className="ml-4 mb-2">
                <p>k = f(4) = (4 - 1)(4 - 7)</p>
                <p>k = (3)(-3)</p>
                <p>k = -9</p>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Vertex: (4, -9)</p>
                <p className="mt-2 text-sm">
                  Since a = 1 &gt; 0 (from the factored form), the parabola opens upward
                  and (4, -9) is the minimum point.
                </p>
              </div>

              <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="text-sm font-semibold">Verification:</p>
                <p className="text-sm ml-4">
                  The vertex x = 4 is exactly halfway between x = 1 and x = 7. ✓
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Complete Graphing Process */}
      <section className="mb-8 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          3. Complete Graphing from Factored Form
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Steps to Sketch the Graph:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Identify and plot the x-intercepts (p, 0) and (q, 0)</li>
            <li>Calculate and plot the vertex using h = (p + q) / 2</li>
            <li>Determine orientation from sign of a (up if a &gt; 0, down if a &lt; 0)</li>
            <li>Find the y-intercept by setting x = 0</li>
            <li>Draw the axis of symmetry (vertical line through vertex)</li>
            <li>Sketch the smooth U-shaped curve through all points</li>
          </ol>
        </div>

        {/* Worked Example 3 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample3(!showExample3)}
            className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-800 transition"
          >
            {showExample3 ? '▼' : '▶'} Example 3: Complete graph of f(x) = -2(x + 1)(x - 3)
          </button>

          {showExample3 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-purple-500">
              <p className="mb-2"><strong>Given:</strong> f(x) = -2(x + 1)(x - 3)</p>

              <p className="mb-2"><strong>Step 1:</strong> Find x-intercepts</p>
              <div className="ml-4 mb-2">
                <p>Roots: x = -1 and x = 3</p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  X-intercepts: (-1, 0) and (3, 0)
                </p>
              </div>

              <p className="mb-2"><strong>Step 2:</strong> Find vertex</p>
              <div className="ml-4 mb-2">
                <p>h = (-1 + 3) / 2 = 2 / 2 = 1</p>
                <p>k = f(1) = -2(1 + 1)(1 - 3)</p>
                <p>k = -2(2)(-2) = -2(-4) = 8</p>
                <p className="font-semibold text-blue-600 dark:text-blue-400">
                  Vertex: (1, 8)
                </p>
              </div>

              <p className="mb-2"><strong>Step 3:</strong> Determine orientation</p>
              <p className="ml-4 mb-2">
                a = -2 &lt; 0 → parabola opens <strong>downward</strong>
                <br/>
                Vertex (1, 8) is the <strong>maximum</strong> point
              </p>

              <p className="mb-2"><strong>Step 4:</strong> Find y-intercept</p>
              <div className="ml-4 mb-2">
                <p>f(0) = -2(0 + 1)(0 - 3)</p>
                <p>f(0) = -2(1)(-3) = 6</p>
                <p className="font-semibold text-orange-600 dark:text-orange-400">
                  Y-intercept: (0, 6)
                </p>
              </div>

              <p className="mb-2"><strong>Step 5:</strong> Additional symmetric point</p>
              <div className="ml-4 mb-2">
                <p>Since (0, 6) is 1 unit left of axis x = 1,</p>
                <p>there's a symmetric point 1 unit right: (2, 6)</p>
              </div>

              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-600 rounded">
                <h4 className="font-semibold mb-3">Visual Graph:</h4>
                <svg viewBox="-20 -10 140 140" className="w-full max-w-md mx-auto border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800">
                  {/* Grid */}
                  <line x1="0" y1="65" x2="120" y2="65" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                  <line x1="50" y1="0" x2="50" y2="130" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>

                  {/* Axis of symmetry at x = 1 (shifted to position 60) */}
                  <line x1="60" y1="5" x2="60" y2="120" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2"/>
                  <text x="63" y="10" fontSize="7" fill="#ef4444">x=1</text>

                  {/* Parabola (downward, scale adjusted) */}
                  <path d="M 30,65 Q 60,15 90,65" fill="none" stroke="#3b82f6" strokeWidth="2"/>

                  {/* X-intercepts */}
                  <circle cx="40" cy="65" r="2.5" fill="#22c55e"/>
                  <text x="35" y="75" fontSize="7" fill="#22c55e">(-1,0)</text>
                  <circle cx="80" cy="65" r="2.5" fill="#22c55e"/>
                  <text x="82" y="75" fontSize="7" fill="#22c55e">(3,0)</text>

                  {/* Vertex */}
                  <circle cx="60" cy="25" r="3" fill="#8b5cf6"/>
                  <text x="63" y="23" fontSize="7" fill="#8b5cf6">(1,8)</text>

                  {/* Y-intercept */}
                  <circle cx="50" cy="35" r="2" fill="#f97316"/>
                  <text x="38" y="33" fontSize="7" fill="#f97316">(0,6)</text>
                </svg>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Complete Features:</p>
                <p>• X-intercepts: (-1, 0) and (3, 0)</p>
                <p>• Vertex: (1, 8) - maximum</p>
                <p>• Y-intercept: (0, 6)</p>
                <p>• Axis of symmetry: x = 1</p>
                <p>• Opens downward (a = -2 &lt; 0)</p>
                <p>• Narrower than y = x² (|a| = 2 &gt; 1)</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Special Cases */}
      <section className="mb-8 p-6 bg-orange-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700 dark:text-orange-300">
          4. Special Cases
        </h2>

        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">
              Case 1: Repeated Root (Perfect Square)
            </h3>
            <p className="mb-2">f(x) = a(x - r)²</p>
            <div className="ml-4 space-y-1 text-sm">
              <p>• Only ONE x-intercept at (r, 0)</p>
              <p>• Vertex IS the x-intercept (touches but doesn't cross)</p>
              <p>• Example: f(x) = (x - 2)² has vertex and x-intercept at (2, 0)</p>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-green-600 dark:text-green-400">
              Case 2: Leading Coefficient a ≠ 1
            </h3>
            <p className="mb-2">f(x) = a(x - p)(x - q) where a ≠ ±1</p>
            <div className="ml-4 space-y-1 text-sm">
              <p>• X-intercepts still at p and q (a doesn't affect roots)</p>
              <p>• Vertex formula unchanged: h = (p + q) / 2</p>
              <p>• But |a| affects width and sign affects orientation</p>
              <p>• Example: f(x) = 3(x - 1)(x - 5) is narrower, opens up</p>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">
              Case 3: Converting to Other Forms
            </h3>
            <div className="ml-4 space-y-2 text-sm">
              <p><strong>To Standard Form:</strong> Expand the factors</p>
              <p className="ml-4">
                (x - 2)(x + 3) = x² + 3x - 2x - 6 = x² + x - 6
              </p>
              <p><strong>To Vertex Form:</strong> Find vertex, then complete the square</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Problems */}
      <section className="mb-8 p-6 bg-indigo-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">
          Practice Problems
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">1. Find x-intercepts and vertex of f(x) = (x - 4)(x + 2)</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>X-intercepts: (4, 0) and (-2, 0)</p>
                <p>h = (4 + (-2))/2 = 1</p>
                <p>k = f(1) = (1-4)(1+2) = (-3)(3) = -9</p>
                <p className="font-semibold">Vertex: (1, -9)</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">2. Sketch f(x) = -(x + 3)(x - 1) with all key features</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>X-intercepts: (-3, 0) and (1, 0)</p>
                <p>Vertex: h = -1, k = f(-1) = -(-2)(-2) = -4 → (-1, 4)</p>
                <p>Y-intercept: f(0) = -(3)(-1) = 3 → (0, 3)</p>
                <p className="font-semibold">Opens downward, max at (-1, 4)</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">3. Find equation in factored form with roots at -5 and 2, passing through (0, 10)</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Start: f(x) = a(x + 5)(x - 2)</p>
                <p>Use (0, 10): 10 = a(5)(-2) = -10a</p>
                <p>a = -1</p>
                <p className="font-semibold">Answer: f(x) = -(x + 5)(x - 2)</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">4. Convert to standard form: f(x) = 2(x - 3)(x + 1)</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Expand: 2(x² + x - 3x - 3)</p>
                <p>= 2(x² - 2x - 3)</p>
                <p className="font-semibold">= 2x² - 4x - 6</p>
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
          <li>Factored form f(x) = a(x - p)(x - q) immediately reveals x-intercepts at p and q</li>
          <li>Vertex x-coordinate is the midpoint of the roots: h = (p + q) / 2</li>
          <li>Find vertex y-coordinate by substituting: k = f(h)</li>
          <li>Sign of a determines orientation (up/down), magnitude affects width</li>
          <li>Axis of symmetry passes through vertex at x = (p + q) / 2</li>
          <li>Use symmetry to find additional points once you have one</li>
          <li>Y-intercept found by evaluating f(0) = a(-p)(-q) = apq</li>
          <li>Factored form is ideal when roots are known or easy to find</li>
        </ul>
      </section>
    </div>
  );
};

export default GraphFactorised;
