import { useState } from 'react';

const SolvingFactorization = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Solving Quadratic Equations by Factorization
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
          Introduction
        </h2>
        <p className="mb-3">
          Factorization is one of the most powerful methods for solving quadratic equations.
          It relies on the <strong>Zero Product Property</strong>: if the product of two factors equals zero,
          then at least one of the factors must be zero.
        </p>
        <p className="mb-3">
          <strong>General Strategy:</strong> Rearrange the equation to standard form (ax² + bx + c = 0),
          factor the left side, then set each factor equal to zero and solve.
        </p>
      </section>

      {/* Zero Product Property */}
      <section className="mb-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
          1. Zero Product Property
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">The Fundamental Principle:</h3>
          <div className="text-center text-lg font-semibold my-3 p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
            If A × B = 0, then A = 0 or B = 0 (or both)
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            This means we can split one equation into two simpler equations.
          </p>
        </div>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Example Application:</h3>
          <p className="mb-2">If (x - 3)(x + 5) = 0, then:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Either x - 3 = 0, which gives x = 3</li>
            <li>Or x + 5 = 0, which gives x = -5</li>
          </ul>
          <p className="mt-3 font-semibold text-green-600 dark:text-green-400">
            Solutions: x = 3 or x = -5
          </p>
        </div>

        {/* Worked Example 1 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition"
          >
            {showExample1 ? '▼' : '▶'} Example 1: Solve (x - 7)(x + 2) = 0
          </button>

          {showExample1 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-blue-500">
              <p className="mb-2"><strong>Given:</strong> (x - 7)(x + 2) = 0</p>
              <p className="mb-2"><strong>Step 1:</strong> Apply Zero Product Property</p>
              <p className="ml-4 mb-2">Either x - 7 = 0 or x + 2 = 0</p>
              <p className="mb-2"><strong>Step 2:</strong> Solve each equation</p>
              <div className="ml-4 mb-2 space-y-1">
                <p>From x - 7 = 0: x = 7</p>
                <p>From x + 2 = 0: x = -2</p>
              </div>
              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded">
                <p className="font-semibold">Solutions: x = 7 or x = -2</p>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Check:</strong> (7 - 7)(7 + 2) = 0(9) = 0 ✓ and (-2 - 7)(-2 + 2) = (-9)(0) = 0 ✓
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Factoring Simple Trinomials */}
      <section className="mb-8 p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">
          2. Factoring Simple Trinomials (a = 1)
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">For equations of the form x² + bx + c = 0:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Find two numbers that multiply to give c and add to give b</li>
            <li>Write as (x + p)(x + q) = 0 where p and q are those numbers</li>
            <li>Apply Zero Product Property to solve</li>
          </ol>
        </div>

        <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded">
          <h3 className="font-semibold mb-2">Key Pattern:</h3>
          <div className="text-center text-lg my-2">
            x² + bx + c = (x + p)(x + q)
          </div>
          <p className="text-center text-sm mt-2">where p × q = c and p + q = b</p>
        </div>

        {/* Worked Example 2 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample2(!showExample2)}
            className="w-full text-left p-4 bg-green-100 dark:bg-green-900 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-800 transition"
          >
            {showExample2 ? '▼' : '▶'} Example 2: Solve x² + 5x + 6 = 0
          </button>

          {showExample2 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-green-500">
              <p className="mb-2"><strong>Given:</strong> x² + 5x + 6 = 0</p>
              <p className="mb-2"><strong>Step 1:</strong> Find two numbers that multiply to 6 and add to 5</p>
              <div className="ml-4 mb-2">
                <p>Factors of 6: 1×6, 2×3</p>
                <p>Check sums: 1+6 = 7, 2+3 = 5 ✓</p>
                <p className="font-semibold text-blue-600 dark:text-blue-400">Use 2 and 3</p>
              </div>
              <p className="mb-2"><strong>Step 2:</strong> Factor the trinomial</p>
              <p className="ml-4 mb-2">(x + 2)(x + 3) = 0</p>
              <p className="mb-2"><strong>Step 3:</strong> Apply Zero Product Property</p>
              <p className="ml-4 mb-2">x + 2 = 0 or x + 3 = 0</p>
              <p className="mb-2"><strong>Step 4:</strong> Solve each equation</p>
              <div className="ml-4 mb-2">
                <p>x = -2 or x = -3</p>
              </div>
              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Solutions: x = -2 or x = -3</p>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Check:</strong> (-2)² + 5(-2) + 6 = 4 - 10 + 6 = 0 ✓
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Special Factoring Patterns */}
      <section className="mb-8 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          3. Special Factoring Patterns
        </h2>

        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">
              Pattern 1: Difference of Squares
            </h3>
            <div className="text-center text-lg my-2 p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
              a² - b² = (a + b)(a - b)
            </div>
            <p className="text-sm mt-2"><strong>Example:</strong> x² - 25 = (x + 5)(x - 5)</p>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-green-600 dark:text-green-400">
              Pattern 2: Perfect Square Trinomial
            </h3>
            <div className="text-center text-lg my-2 p-3 bg-green-50 dark:bg-green-900/30 rounded">
              a² + 2ab + b² = (a + b)²
            </div>
            <div className="text-center text-lg my-2 p-3 bg-green-50 dark:bg-green-900/30 rounded">
              a² - 2ab + b² = (a - b)²
            </div>
            <p className="text-sm mt-2"><strong>Example:</strong> x² + 6x + 9 = (x + 3)²</p>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">
              Pattern 3: Common Factor
            </h3>
            <p className="mb-2">Always check for common factors first!</p>
            <p className="text-sm"><strong>Example:</strong> 2x² + 8x = 2x(x + 4)</p>
          </div>
        </div>

        {/* Worked Example 3 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample3(!showExample3)}
            className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-800 transition"
          >
            {showExample3 ? '▼' : '▶'} Example 3: Solve x² - 16 = 0 (Difference of Squares)
          </button>

          {showExample3 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-purple-500">
              <p className="mb-2"><strong>Given:</strong> x² - 16 = 0</p>
              <p className="mb-2"><strong>Step 1:</strong> Recognize as difference of squares</p>
              <p className="ml-4 mb-2">x² - 16 = x² - 4²</p>
              <p className="mb-2"><strong>Step 2:</strong> Apply the pattern a² - b² = (a + b)(a - b)</p>
              <p className="ml-4 mb-2">(x + 4)(x - 4) = 0</p>
              <p className="mb-2"><strong>Step 3:</strong> Apply Zero Product Property</p>
              <p className="ml-4 mb-2">x + 4 = 0 or x - 4 = 0</p>
              <p className="mb-2"><strong>Step 4:</strong> Solve each equation</p>
              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded">
                <p className="font-semibold">Solutions: x = -4 or x = 4</p>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Check:</strong> (-4)² - 16 = 16 - 16 = 0 ✓ and 4² - 16 = 16 - 16 = 0 ✓
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Factoring When a ≠ 1 */}
      <section className="mb-8 p-6 bg-orange-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700 dark:text-orange-300">
          4. Factoring When a ≠ 1
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">For equations of the form ax² + bx + c = 0 where a ≠ 1:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Multiply a × c</li>
            <li>Find two numbers that multiply to ac and add to b</li>
            <li>Rewrite the middle term using these numbers</li>
            <li>Factor by grouping</li>
            <li>Apply Zero Product Property</li>
          </ol>
        </div>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Detailed Example: Solve 2x² + 7x + 3 = 0</h3>
          <div className="space-y-2 ml-4">
            <p><strong>Step 1:</strong> a × c = 2 × 3 = 6</p>
            <p><strong>Step 2:</strong> Find two numbers that multiply to 6 and add to 7</p>
            <p className="ml-4">Try: 1 and 6 → 1 + 6 = 7 ✓</p>
            <p><strong>Step 3:</strong> Rewrite 7x as 1x + 6x</p>
            <p className="ml-4">2x² + 1x + 6x + 3 = 0</p>
            <p><strong>Step 4:</strong> Factor by grouping</p>
            <p className="ml-4">x(2x + 1) + 3(2x + 1) = 0</p>
            <p className="ml-4">(2x + 1)(x + 3) = 0</p>
            <p><strong>Step 5:</strong> Solve: 2x + 1 = 0 or x + 3 = 0</p>
            <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded mt-2">
              <p className="font-semibold">x = -1/2 or x = -3</p>
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
            <p className="font-semibold mb-2">1. Solve x² - 7x + 12 = 0</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Find two numbers that multiply to 12 and add to -7: -3 and -4</p>
                <p>(x - 3)(x - 4) = 0</p>
                <p className="font-semibold">Answer: x = 3 or x = 4</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">2. Solve x² - 81 = 0</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Difference of squares: x² - 9² = (x + 9)(x - 9) = 0</p>
                <p className="font-semibold">Answer: x = -9 or x = 9</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">3. Solve 3x² - 10x + 8 = 0</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>a × c = 24, find factors that add to -10: -4 and -6</p>
                <p>3x² - 4x - 6x + 8 = 0</p>
                <p>x(3x - 4) - 2(3x - 4) = 0</p>
                <p>(3x - 4)(x - 2) = 0</p>
                <p className="font-semibold">Answer: x = 4/3 or x = 2</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">4. Solve x² + 10x + 25 = 0</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Perfect square trinomial: (x + 5)² = 0</p>
                <p className="font-semibold">Answer: x = -5 (repeated root)</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">5. Solve 2x² + 8x = 0</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Common factor: 2x(x + 4) = 0</p>
                <p>2x = 0 or x + 4 = 0</p>
                <p className="font-semibold">Answer: x = 0 or x = -4</p>
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
          <li><strong>Zero Product Property:</strong> If A × B = 0, then A = 0 or B = 0</li>
          <li>Always rearrange to standard form (ax² + bx + c = 0) first</li>
          <li>Look for common factors before attempting other factoring methods</li>
          <li>Recognize special patterns: difference of squares, perfect square trinomials</li>
          <li>For x² + bx + c: find two numbers that multiply to c and add to b</li>
          <li>For ax² + bx + c (a ≠ 1): use the ac method and factor by grouping</li>
          <li>Always check your solutions by substituting back into the original equation</li>
        </ul>
      </section>
    </div>
  );
};

export default SolvingFactorization;
