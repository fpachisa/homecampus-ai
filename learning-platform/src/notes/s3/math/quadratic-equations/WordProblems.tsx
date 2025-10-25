import { useState } from 'react';

const WordProblems = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Quadratic Equations: Word Problems
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
          Introduction
        </h2>
        <p className="mb-3">
          Quadratic equations appear in many real-world situations involving area, projectile
          motion, optimization, and business problems. The key skill is translating word
          problems into mathematical equations.
        </p>
        <p className="mb-3">
          <strong>General Strategy:</strong> Define variables, translate relationships into
          equations, solve the quadratic, and interpret solutions in context.
        </p>
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded mt-4">
          <p className="font-semibold">Problem-Solving Steps:</p>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>Read carefully and identify what you're looking for</li>
            <li>Define variables clearly</li>
            <li>Translate the problem into an equation</li>
            <li>Solve the quadratic equation</li>
            <li>Check solutions against constraints</li>
            <li>Answer the question in context</li>
          </ol>
        </div>
      </section>

      {/* Area and Geometry Problems */}
      <section className="mb-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
          1. Area and Geometry Problems
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Common Formulas:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Rectangle: Area = length × width</li>
            <li>Triangle: Area = (1/2) × base × height</li>
            <li>Circle: Area = πr²</li>
            <li>Pythagorean Theorem: a² + b² = c²</li>
          </ul>
        </div>

        {/* Worked Example 1 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition"
          >
            {showExample1 ? '▼' : '▶'} Example 1: Rectangle Area Problem
          </button>

          {showExample1 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-blue-500">
              <p className="mb-3 font-semibold">
                A rectangular garden has a length that is 4 meters more than its width.
                If the area is 96 square meters, find the dimensions.
              </p>

              <p className="mb-2"><strong>Step 1:</strong> Define variables</p>
              <div className="ml-4 mb-2">
                <p>Let w = width (in meters)</p>
                <p>Then length = w + 4</p>
              </div>

              <p className="mb-2"><strong>Step 2:</strong> Set up equation</p>
              <div className="ml-4 mb-2">
                <p>Area = length × width</p>
                <p>96 = (w + 4) × w</p>
                <p>96 = w² + 4w</p>
              </div>

              <p className="mb-2"><strong>Step 3:</strong> Rearrange to standard form</p>
              <p className="ml-4 mb-2">w² + 4w - 96 = 0</p>

              <p className="mb-2"><strong>Step 4:</strong> Solve (by factoring or formula)</p>
              <div className="ml-4 mb-2">
                <p>Look for factors of -96 that differ by 4: 12 and -8</p>
                <p>(w + 12)(w - 8) = 0</p>
                <p>w = -12 or w = 8</p>
              </div>

              <p className="mb-2"><strong>Step 5:</strong> Check constraints</p>
              <div className="ml-4 mb-2">
                <p>Width cannot be negative, so reject w = -12</p>
                <p>Therefore w = 8 meters</p>
              </div>

              <p className="mb-2"><strong>Step 6:</strong> Find all dimensions</p>
              <div className="ml-4 mb-2">
                <p>Width = 8 meters</p>
                <p>Length = 8 + 4 = 12 meters</p>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Answer: Width = 8m, Length = 12m</p>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Check:</strong> 8 × 12 = 96 ✓
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Projectile Motion Problems */}
      <section className="mb-8 p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">
          2. Projectile Motion Problems
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Height Formula:</h3>
          <p className="mb-2">
            The height h (in meters) of an object at time t (seconds) is often modeled by:
          </p>
          <div className="text-center text-lg my-3 p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
            h(t) = -4.9t² + v₀t + h₀
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            where v₀ = initial velocity, h₀ = initial height, -4.9 accounts for gravity
          </p>
        </div>

        {/* Worked Example 2 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample2(!showExample2)}
            className="w-full text-left p-4 bg-green-100 dark:bg-green-900 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-800 transition"
          >
            {showExample2 ? '▼' : '▶'} Example 2: Ball Thrown Upward
          </button>

          {showExample2 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-green-500">
              <p className="mb-3 font-semibold">
                A ball is thrown upward from ground level with an initial velocity of 20 m/s.
                The height is given by h(t) = -4.9t² + 20t. When does the ball hit the ground?
              </p>

              <p className="mb-2"><strong>Step 1:</strong> Understand the question</p>
              <p className="ml-4 mb-2">Ball hits ground when height h = 0</p>

              <p className="mb-2"><strong>Step 2:</strong> Set up equation</p>
              <p className="ml-4 mb-2">-4.9t² + 20t = 0</p>

              <p className="mb-2"><strong>Step 3:</strong> Factor out common term</p>
              <div className="ml-4 mb-2">
                <p>t(-4.9t + 20) = 0</p>
                <p>t = 0 or -4.9t + 20 = 0</p>
              </div>

              <p className="mb-2"><strong>Step 4:</strong> Solve for t</p>
              <div className="ml-4 mb-2">
                <p>t = 0 (initial throw)</p>
                <p>-4.9t + 20 = 0</p>
                <p>t = 20/4.9 ≈ 4.08 seconds</p>
              </div>

              <p className="mb-2"><strong>Step 5:</strong> Interpret</p>
              <p className="ml-4 mb-2">
                t = 0 is when the ball is thrown (starting point)
                <br/>
                t ≈ 4.08 is when the ball returns to ground level
              </p>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Answer: The ball hits the ground after approximately 4.08 seconds</p>
              </div>

              <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="text-sm font-semibold">Bonus: Maximum height?</p>
                <p className="text-sm ml-4">
                  Max height occurs at vertex: t = -b/(2a) = -20/(2×-4.9) ≈ 2.04 seconds
                  <br/>
                  h(2.04) ≈ 20.4 meters
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Business and Optimization */}
      <section className="mb-8 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          3. Business and Optimization Problems
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Common Concepts:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Revenue = (price per unit) × (number of units sold)</li>
            <li>Profit = Revenue - Cost</li>
            <li>Often modeled by quadratic equations</li>
            <li>Maximum/minimum occurs at vertex</li>
          </ul>
        </div>

        {/* Worked Example 3 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample3(!showExample3)}
            className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-800 transition"
          >
            {showExample3 ? '▼' : '▶'} Example 3: Revenue Optimization
          </button>

          {showExample3 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-purple-500">
              <p className="mb-3 font-semibold">
                A company finds that its revenue R (in thousands) from selling x hundred units
                is given by R(x) = -2x² + 16x. How many units should be sold to maximize revenue?
              </p>

              <p className="mb-2"><strong>Step 1:</strong> Identify what we're finding</p>
              <p className="ml-4 mb-2">We want to maximize revenue (find the vertex)</p>

              <p className="mb-2"><strong>Step 2:</strong> Find vertex using formula</p>
              <div className="ml-4 mb-2">
                <p>For f(x) = ax² + bx + c, vertex x-coordinate: x = -b/(2a)</p>
                <p>Here: a = -2, b = 16</p>
                <p>x = -16/(2×-2) = -16/(-4) = 4</p>
              </div>

              <p className="mb-2"><strong>Step 3:</strong> Interpret x = 4</p>
              <p className="ml-4 mb-2">
                Since x represents hundreds of units, x = 4 means 400 units
              </p>

              <p className="mb-2"><strong>Step 4:</strong> Find maximum revenue</p>
              <div className="ml-4 mb-2">
                <p>R(4) = -2(4)² + 16(4)</p>
                <p>R(4) = -2(16) + 64</p>
                <p>R(4) = -32 + 64 = 32</p>
              </div>

              <p className="mb-2"><strong>Step 5:</strong> Interpret the result</p>
              <p className="ml-4 mb-2">
                Since R is in thousands, maximum revenue is $32,000
              </p>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Answer: Sell 400 units for maximum revenue of $32,000</p>
              </div>

              <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="text-sm font-semibold">Alternative question: Revenue of $24,000?</p>
                <p className="text-sm ml-4">
                  Solve: -2x² + 16x = 24
                  <br/>
                  -2x² + 16x - 24 = 0 → x² - 8x + 12 = 0
                  <br/>
                  (x - 2)(x - 6) = 0 → x = 2 or x = 6
                  <br/>
                  Answer: 200 or 600 units
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Number Problems */}
      <section className="mb-8 p-6 bg-orange-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700 dark:text-orange-300">
          4. Number and Consecutive Integer Problems
        </h2>

        <div className="p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Quick Example:</h3>
          <p className="mb-2">
            <strong>Problem:</strong> Find two consecutive positive integers whose product is 132.
          </p>
          <div className="space-y-2 ml-4 mt-3">
            <p><strong>Setup:</strong> Let n = first integer, then n+1 = second integer</p>
            <p><strong>Equation:</strong> n(n + 1) = 132</p>
            <p><strong>Expand:</strong> n² + n = 132</p>
            <p><strong>Solve:</strong> n² + n - 132 = 0</p>
            <p className="ml-4">(n + 12)(n - 11) = 0</p>
            <p className="ml-4">n = -12 or n = 11</p>
            <p><strong>Check:</strong> Since we need positive integers, n = 11</p>
            <p className="font-semibold text-green-600 dark:text-green-400">
              Answer: The integers are 11 and 12 (since 11 × 12 = 132)
            </p>
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
              1. A square garden's area is increased by adding a 3m border around it.
              If the new area is 169 m², what was the original side length?
            </p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Let x = original side length</p>
                <p>New side = x + 6 (3m border on each side)</p>
                <p>(x + 6)² = 169</p>
                <p>x + 6 = ±13 → x = 7 or x = -19</p>
                <p className="font-semibold">Answer: Original side = 7m</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">
              2. An object is thrown from a 15m building with initial velocity 10 m/s upward.
              Height: h(t) = -4.9t² + 10t + 15. When does it hit the ground?
            </p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Set h = 0: -4.9t² + 10t + 15 = 0</p>
                <p>Using quadratic formula: t = (-10 ± √(100 + 294)) / (-9.8)</p>
                <p>t = (-10 ± √394) / (-9.8)</p>
                <p>t ≈ 3.06 seconds (reject negative solution)</p>
                <p className="font-semibold">Answer: ~3.06 seconds</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">
              3. The sum of a number and its square is 56. Find the number.
            </p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Let n = the number</p>
                <p>n + n² = 56</p>
                <p>n² + n - 56 = 0</p>
                <p>(n + 8)(n - 7) = 0</p>
                <p className="font-semibold">Answer: n = 7 or n = -8</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">
              4. A rectangle's length is 5cm more than twice its width. Area is 75 cm². Find dimensions.
            </p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Let w = width, length = 2w + 5</p>
                <p>w(2w + 5) = 75</p>
                <p>2w² + 5w - 75 = 0</p>
                <p>(2w + 15)(w - 5) = 0 → w = 5 (reject negative)</p>
                <p className="font-semibold">Answer: Width = 5cm, Length = 15cm</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">
              5. Profit P(x) = -x² + 40x - 300 (in dollars) where x is units in hundreds.
              How many units for break-even (profit = 0)?
            </p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>-x² + 40x - 300 = 0</p>
                <p>x² - 40x + 300 = 0</p>
                <p>(x - 10)(x - 30) = 0 → x = 10 or x = 30</p>
                <p className="font-semibold">Answer: 1000 or 3000 units (break-even points)</p>
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
          <li>Read the problem carefully and identify what you're looking for</li>
          <li>Define variables clearly with units</li>
          <li>Translate word relationships into mathematical equations</li>
          <li>Solve the quadratic using appropriate method (factoring, formula, etc.)</li>
          <li>Check solutions against physical constraints (positive lengths, realistic times, etc.)</li>
          <li>Reject solutions that don't make sense in context</li>
          <li>State your final answer in the context of the original problem</li>
          <li>For optimization: maximum/minimum occurs at the vertex</li>
          <li>Always include units in your final answer</li>
        </ul>
      </section>
    </div>
  );
};

export default WordProblems;
