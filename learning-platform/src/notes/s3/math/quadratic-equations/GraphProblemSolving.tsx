import React, { useState } from 'react';

const GraphProblemSolving = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Using Graphs for Problem Solving
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
          Introduction
        </h2>
        <p className="mb-3">
          Graphs of quadratic functions are powerful tools for solving real-world problems.
          They allow us to visualize relationships, find optimal values, and understand
          behavior over time or space.
        </p>
        <p className="mb-3">
          <strong>Common Applications:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Finding maximum or minimum values (optimization)</li>
          <li>Solving equations graphically</li>
          <li>Interpreting graphs in context (projectile motion, business, area)</li>
          <li>Modeling real-world situations</li>
        </ul>
      </section>

      {/* Interpreting Graphs in Context */}
      <section className="mb-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
          1. Interpreting Graphs in Context
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Reading Key Information:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Vertex:</strong> Maximum/minimum value and when it occurs</li>
            <li><strong>X-intercepts:</strong> When the quantity equals zero</li>
            <li><strong>Y-intercept:</strong> Initial value (when t = 0 or x = 0)</li>
            <li><strong>Domain:</strong> Valid input values (often restricted in real contexts)</li>
            <li><strong>Range:</strong> Possible output values</li>
            <li><strong>Increasing/Decreasing:</strong> Before and after the vertex</li>
          </ul>
        </div>

        {/* Worked Example 1 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition"
          >
            {showExample1 ? '▼' : '▶'} Example 1: Projectile Motion Interpretation
          </button>

          {showExample1 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-blue-500">
              <p className="mb-3 font-semibold">
                A ball is thrown upward. Its height (in meters) after t seconds is given by
                h(t) = -5t² + 20t + 2.
              </p>

              <p className="mb-2"><strong>Question a:</strong> What is the maximum height?</p>
              <div className="ml-4 mb-3">
                <p>Find the vertex (maximum since a &lt; 0):</p>
                <p>t = -b/(2a) = -20/(2×-5) = -20/(-10) = 2</p>
                <p>h(2) = -5(4) + 20(2) + 2 = -20 + 40 + 2 = 22</p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  Maximum height: 22 meters at t = 2 seconds
                </p>
              </div>

              <p className="mb-2"><strong>Question b:</strong> What is the initial height?</p>
              <div className="ml-4 mb-3">
                <p>Initial height when t = 0:</p>
                <p>h(0) = -5(0)² + 20(0) + 2 = 2</p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  Initial height: 2 meters
                </p>
              </div>

              <p className="mb-2"><strong>Question c:</strong> When does the ball hit the ground?</p>
              <div className="ml-4 mb-3">
                <p>Set h = 0: -5t² + 20t + 2 = 0</p>
                <p>Using quadratic formula:</p>
                <p>t = (-20 ± √(400 + 40)) / (-10)</p>
                <p>t = (-20 ± √440) / (-10)</p>
                <p>t = (-20 ± 20.98) / (-10)</p>
                <p>t ≈ 4.10 seconds (reject negative solution)</p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  Ball hits ground after approximately 4.1 seconds
                </p>
              </div>

              <p className="mb-2"><strong>Question d:</strong> When is the ball above 15 meters?</p>
              <div className="ml-4 mb-3">
                <p>Solve: -5t² + 20t + 2 &gt; 15</p>
                <p>-5t² + 20t - 13 &gt; 0</p>
                <p>Find roots of -5t² + 20t - 13 = 0:</p>
                <p>t = (-20 ± √(400-260)) / (-10) = (-20 ± 11.83) / (-10)</p>
                <p>t ≈ 0.82 seconds and t ≈ 3.18 seconds</p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  Ball is above 15m between t ≈ 0.82s and t ≈ 3.18s
                </p>
              </div>

              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="font-semibold">Key Insights from Graph:</p>
                <p>• Opens downward (gravity pulling down)</p>
                <p>• Maximum at vertex (highest point of trajectory)</p>
                <p>• Symmetric about t = 2 (ascent and descent take equal time from max)</p>
                <p>• Valid domain: 0 ≤ t ≤ 4.1 (from throw to landing)</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Optimization Problems */}
      <section className="mb-8 p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">
          2. Optimization Using the Vertex
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Strategy:</h3>
          <p className="mb-2">
            The vertex of a parabola represents the optimal value:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>If a &gt; 0 (opens up): vertex is the <strong>minimum</strong></li>
            <li>If a &lt; 0 (opens down): vertex is the <strong>maximum</strong></li>
          </ul>
          <p className="mt-3">
            Use h = -b/(2a) to find when the optimum occurs, then calculate the optimal value.
          </p>
        </div>

        {/* Worked Example 2 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample2(!showExample2)}
            className="w-full text-left p-4 bg-green-100 dark:bg-green-900 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-800 transition"
          >
            {showExample2 ? '▼' : '▶'} Example 2: Maximizing Revenue
          </button>

          {showExample2 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-green-500">
              <p className="mb-3 font-semibold">
                A company's daily revenue R (in thousands of dollars) from selling x hundred
                units is modeled by R(x) = -2x² + 16x - 10.
              </p>

              <p className="mb-2"><strong>Question a:</strong> How many units should be sold to maximize revenue?</p>
              <div className="ml-4 mb-3">
                <p>Find x-coordinate of vertex:</p>
                <p>x = -b/(2a) = -16/(2×-2) = -16/(-4) = 4</p>
                <p>Since x represents hundreds of units:</p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  Sell 400 units to maximize revenue
                </p>
              </div>

              <p className="mb-2"><strong>Question b:</strong> What is the maximum revenue?</p>
              <div className="ml-4 mb-3">
                <p>R(4) = -2(4)² + 16(4) - 10</p>
                <p>R(4) = -2(16) + 64 - 10</p>
                <p>R(4) = -32 + 64 - 10 = 22</p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  Maximum revenue: $22,000
                </p>
              </div>

              <p className="mb-2"><strong>Question c:</strong> For what production levels is revenue at least $18,000?</p>
              <div className="ml-4 mb-3">
                <p>Solve: -2x² + 16x - 10 ≥ 18</p>
                <p>-2x² + 16x - 28 ≥ 0</p>
                <p>x² - 8x + 14 ≤ 0</p>
                <p>Find roots: x = (8 ± √(64-56))/2 = (8 ± √8)/2 = (8 ± 2.83)/2</p>
                <p>x ≈ 2.59 or x ≈ 5.41</p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  Between 259 and 541 units (or approximately 260 to 540 units)
                </p>
              </div>

              <p className="mb-2"><strong>Question d:</strong> Interpret the y-intercept</p>
              <div className="ml-4 mb-3">
                <p>R(0) = -10</p>
                <p className="font-semibold text-orange-600 dark:text-orange-400">
                  Fixed costs or loss of $10,000 when no units are sold
                </p>
              </div>

              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-600 rounded">
                <h4 className="font-semibold mb-3">Visual Graph:</h4>
                <svg viewBox="-10 -10 140 120" className="w-full max-w-md mx-auto border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800">
                  {/* Grid */}
                  <line x1="0" y1="60" x2="130" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                  <line x1="10" y1="0" x2="10" y2="110" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>

                  {/* Parabola (revenue curve) */}
                  <path d="M 10,70 Q 70,10 130,70" fill="none" stroke="#3b82f6" strokeWidth="2"/>

                  {/* Vertex (maximum revenue) */}
                  <circle cx="70" cy="10" r="3" fill="#22c55e"/>
                  <text x="73" y="8" fontSize="7" fill="#22c55e">(4, 22)</text>

                  {/* Revenue = 18 points */}
                  <circle cx="42" cy="32" r="2" fill="#f97316"/>
                  <circle cx="98" cy="32" r="2" fill="#f97316"/>
                  <line x1="42" y1="32" x2="98" y2="32" stroke="#f97316" strokeWidth="1.5"/>
                  <text x="60" y="28" fontSize="6" fill="#f97316">R ≥ 18</text>

                  {/* Axis labels */}
                  <text x="120" y="65" fontSize="8">x (100s units)</text>
                  <text x="12" y="10" fontSize="8">R ($1000s)</text>

                  {/* Y-intercept */}
                  <circle cx="10" cy="70" r="2" fill="#8b5cf6"/>
                  <text x="2" y="80" fontSize="6" fill="#8b5cf6">(0,-10)</text>
                </svg>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Graphical Solutions */}
      <section className="mb-8 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          3. Solving Equations Graphically
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Two Methods:</h3>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
              <p className="font-semibold text-blue-700 dark:text-blue-300">Method 1: Find X-Intercepts</p>
              <p className="text-sm ml-4">
                To solve f(x) = 0, find where the parabola crosses the x-axis
              </p>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded">
              <p className="font-semibold text-green-700 dark:text-green-300">Method 2: Find Intersections</p>
              <p className="text-sm ml-4">
                To solve f(x) = k, find where the parabola intersects the horizontal line y = k
              </p>
            </div>
          </div>
        </div>

        {/* Worked Example 3 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample3(!showExample3)}
            className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-800 transition"
          >
            {showExample3 ? '▼' : '▶'} Example 3: Solving Graphically
          </button>

          {showExample3 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-purple-500">
              <p className="mb-3 font-semibold">
                Use the graph of f(x) = x² - 4x + 3 to solve various equations.
              </p>

              <p className="mb-2"><strong>Question a:</strong> Solve x² - 4x + 3 = 0</p>
              <div className="ml-4 mb-3">
                <p>Find x-intercepts of f(x):</p>
                <p>Factor: (x - 1)(x - 3) = 0</p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  Solutions: x = 1 and x = 3
                </p>
                <p className="text-sm">Graphically: where parabola crosses x-axis</p>
              </div>

              <p className="mb-2"><strong>Question b:</strong> Solve x² - 4x + 3 = 3</p>
              <div className="ml-4 mb-3">
                <p>Find where f(x) = 3 (intersections with line y = 3):</p>
                <p>x² - 4x + 3 = 3</p>
                <p>x² - 4x = 0</p>
                <p>x(x - 4) = 0</p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  Solutions: x = 0 and x = 4
                </p>
                <p className="text-sm">Graphically: where parabola meets horizontal line y = 3</p>
              </div>

              <p className="mb-2"><strong>Question c:</strong> Solve x² - 4x + 3 &lt; 0</p>
              <div className="ml-4 mb-3">
                <p>Find where the parabola is below the x-axis:</p>
                <p>From part (a), x-intercepts are at x = 1 and x = 3</p>
                <p>Parabola opens upward (a = 1 &gt; 0)</p>
                <p>So it's below x-axis between the roots</p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  Solution: 1 &lt; x &lt; 3
                </p>
                <p className="text-sm">Graphically: interval where curve is below x-axis</p>
              </div>

              <p className="mb-2"><strong>Question d:</strong> For what x-values is f(x) ≥ 3?</p>
              <div className="ml-4 mb-3">
                <p>Find where parabola is at or above line y = 3:</p>
                <p>From part (b), intersections at x = 0 and x = 4</p>
                <p>Parabola opens upward, so it's above y = 3 outside these points</p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  Solution: x ≤ 0 or x ≥ 4
                </p>
              </div>

              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-600 rounded">
                <h4 className="font-semibold mb-3">Visual Graph with Solutions:</h4>
                <svg viewBox="-10 -5 130 100" className="w-full max-w-md mx-auto border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800">
                  {/* Grid */}
                  <line x1="0" y1="50" x2="120" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                  <line x1="50" y1="0" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>

                  {/* Horizontal line y = 3 */}
                  <line x1="0" y1="30" x2="120" y2="30" stroke="#f97316" strokeWidth="1" strokeDasharray="3,3"/>
                  <text x="105" y="28" fontSize="7" fill="#f97316">y=3</text>

                  {/* Parabola */}
                  <path d="M 10,70 Q 50,30 90,70" fill="none" stroke="#3b82f6" strokeWidth="2"/>

                  {/* X-intercepts */}
                  <circle cx="30" cy="50" r="2.5" fill="#22c55e"/>
                  <text x="25" y="60" fontSize="7" fill="#22c55e">x=1</text>
                  <circle cx="70" cy="50" r="2.5" fill="#22c55e"/>
                  <text x="65" y="60" fontSize="7" fill="#22c55e">x=3</text>

                  {/* Intersections with y=3 */}
                  <circle cx="10" cy="30" r="2.5" fill="#8b5cf6"/>
                  <text x="5" y="25" fontSize="7" fill="#8b5cf6">x=0</text>
                  <circle cx="90" cy="30" r="2.5" fill="#8b5cf6"/>
                  <text x="85" y="25" fontSize="7" fill="#8b5cf6">x=4</text>

                  {/* Vertex */}
                  <circle cx="50" cy="30" r="2" fill="#ef4444"/>
                  <text x="53" y="28" fontSize="6" fill="#ef4444">(2,-1)</text>

                  {/* Region f(x) < 0 */}
                  <line x1="30" y1="55" x2="70" y2="55" stroke="#10b981" strokeWidth="3" opacity="0.5"/>
                  <text x="40" y="70" fontSize="7" fill="#10b981">f(x)&lt;0</text>
                </svg>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Real-World Modeling */}
      <section className="mb-8 p-6 bg-orange-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700 dark:text-orange-300">
          4. Real-World Modeling Applications
        </h2>

        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">
              Area Optimization
            </h3>
            <p className="text-sm mb-2">
              <strong>Example:</strong> A farmer has 100m of fencing to make a rectangular pen
              against a barn (one side doesn't need fence).
            </p>
            <div className="ml-4 text-sm space-y-1">
              <p>Let width = x, then length = 100 - 2x</p>
              <p>Area: A(x) = x(100 - 2x) = -2x² + 100x</p>
              <p>Maximum at x = -100/(-4) = 25m</p>
              <p>Maximum area = -2(625) + 2500 = 1250 m²</p>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-green-600 dark:text-green-400">
              Profit Analysis
            </h3>
            <p className="text-sm mb-2">
              <strong>Example:</strong> Profit P(x) = -0.5x² + 20x - 150
            </p>
            <div className="ml-4 text-sm space-y-1">
              <p>Break-even: Solve P(x) = 0 (x-intercepts)</p>
              <p>Maximum profit: Find vertex</p>
              <p>Profit target: Solve P(x) = k for specific profit k</p>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">
              Trajectory Problems
            </h3>
            <p className="text-sm mb-2">
              <strong>Example:</strong> A diver's height above water: h(t) = -4.9t² + 5t + 10
            </p>
            <div className="ml-4 text-sm space-y-1">
              <p>Maximum height: Vertex</p>
              <p>When hits water: Solve h(t) = 0</p>
              <p>When at specific height: Solve h(t) = k</p>
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
            <p className="font-semibold mb-2">
              1. A rocket's height is h(t) = -16t² + 64t + 80. Find maximum height and when it hits the ground.
            </p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Vertex: t = -64/(-32) = 2, h(2) = -64 + 128 + 80 = 144</p>
                <p>Ground: -16t² + 64t + 80 = 0 → t² - 4t - 5 = 0</p>
                <p>(t - 5)(t + 1) = 0 → t = 5 (reject t = -1)</p>
                <p className="font-semibold">Max: 144 ft at 2s, hits ground at 5s</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">
              2. Profit P(x) = -x² + 40x - 300. How many units for max profit? What's max profit?
            </p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>x = -40/(-2) = 20 units</p>
                <p>P(20) = -400 + 800 - 300 = 100</p>
                <p className="font-semibold">20 units for max profit of $100</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">
              3. For f(x) = -x² + 6x - 5, solve graphically: (a) f(x) = 0, (b) f(x) = 3, (c) f(x) &gt; 0
            </p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>(a) x² - 6x + 5 = 0 → (x-1)(x-5) = 0 → x = 1 or 5</p>
                <p>(b) -x² + 6x - 5 = 3 → x² - 6x + 8 = 0 → x = 2 or 4</p>
                <p>(c) Opens down, above x-axis between roots: 1 &lt; x &lt; 5</p>
                <p className="font-semibold">Answers: (a) x=1,5 (b) x=2,4 (c) 1&lt;x&lt;5</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">
              4. Rectangle: length is 3 more than width, area is 40. Graph A(w) = w(w+3) and find dimensions.
            </p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Solve: w(w + 3) = 40</p>
                <p>w² + 3w - 40 = 0</p>
                <p>(w + 8)(w - 5) = 0 → w = 5 (reject w = -8)</p>
                <p className="font-semibold">Width = 5, Length = 8</p>
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
          <li>Vertex gives maximum or minimum value (optimal solution)</li>
          <li>X-intercepts solve f(x) = 0 (break-even, landing, zeros)</li>
          <li>Y-intercept often represents initial value (t = 0)</li>
          <li>Solve f(x) = k by finding intersections with horizontal line y = k</li>
          <li>Inequalities: check intervals between critical points</li>
          <li>Always interpret solutions in context (reject impossible values)</li>
          <li>Domain and range may be restricted in real-world problems</li>
          <li>Graph provides visual understanding of the entire situation</li>
          <li>Use symmetry and parabola shape to predict behavior</li>
        </ul>
      </section>
    </div>
  );
};

export default GraphProblemSolving;
