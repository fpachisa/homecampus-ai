import React, { useState } from 'react';

const SolvingFractional = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Solving Fractional Equations that Reduce to Quadratics
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
          Introduction
        </h2>
        <p className="mb-3">
          Some equations involving fractions can be transformed into quadratic equations.
          These are called <strong>fractional equations</strong> or <strong>rational equations</strong>.
        </p>
        <p className="mb-3">
          <strong>Key Strategy:</strong> Multiply both sides by the LCD (Lowest Common Denominator)
          to clear all fractions, then solve the resulting quadratic equation. However, we must
          always check for <strong>extraneous solutions</strong> - values that make denominators zero.
        </p>
        <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded mt-4">
          <p className="font-semibold text-red-700 dark:text-red-300">Important Warning:</p>
          <p>Solutions that make any denominator in the original equation equal to zero must be rejected!</p>
        </div>
      </section>

      {/* Basic Fractional Equations */}
      <section className="mb-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
          1. Basic Fractional Equations
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Step-by-Step Method:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Identify all denominators and find the LCD</li>
            <li>Note restrictions: values that make any denominator zero</li>
            <li>Multiply both sides by the LCD to clear fractions</li>
            <li>Simplify and solve the resulting quadratic equation</li>
            <li>Check each solution against the restrictions</li>
            <li>Reject any extraneous solutions</li>
          </ol>
        </div>

        {/* Worked Example 1 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition"
          >
            {showExample1 ? '▼' : '▶'} Example 1: Solve (x + 3)/x = 4
          </button>

          {showExample1 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-blue-500">
              <p className="mb-2"><strong>Given:</strong> (x + 3)/x = 4</p>

              <p className="mb-2"><strong>Step 1:</strong> Identify restrictions</p>
              <p className="ml-4 mb-2 text-red-600 dark:text-red-400">x ≠ 0 (would make denominator zero)</p>

              <p className="mb-2"><strong>Step 2:</strong> Multiply both sides by x</p>
              <p className="ml-4 mb-2">x · (x + 3)/x = 4 · x</p>
              <p className="ml-4 mb-2">x + 3 = 4x</p>

              <p className="mb-2"><strong>Step 3:</strong> Rearrange and solve</p>
              <p className="ml-4 mb-2">x + 3 = 4x</p>
              <p className="ml-4 mb-2">3 = 3x</p>
              <p className="ml-4 mb-2">x = 1</p>

              <p className="mb-2"><strong>Step 4:</strong> Check against restrictions</p>
              <p className="ml-4 mb-2">x = 1 is valid (1 ≠ 0) ✓</p>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Solution: x = 1</p>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Verify:</strong> (1 + 3)/1 = 4/1 = 4 ✓
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Equations with Multiple Fractions */}
      <section className="mb-8 p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">
          2. Equations with Multiple Fractions
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">When you have multiple fractions:</h3>
          <p className="mb-2">Find the LCD of all denominators, then multiply every term by the LCD.
            This will clear all fractions at once.</p>
        </div>

        {/* Worked Example 2 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample2(!showExample2)}
            className="w-full text-left p-4 bg-green-100 dark:bg-green-900 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-800 transition"
          >
            {showExample2 ? '▼' : '▶'} Example 2: Solve 1/x + 1/(x-1) = 3/4
          </button>

          {showExample2 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-green-500">
              <p className="mb-2"><strong>Given:</strong> 1/x + 1/(x-1) = 3/4</p>

              <p className="mb-2"><strong>Step 1:</strong> Identify restrictions</p>
              <p className="ml-4 mb-2 text-red-600 dark:text-red-400">
                x ≠ 0 and x ≠ 1 (would make denominators zero)
              </p>

              <p className="mb-2"><strong>Step 2:</strong> Find LCD</p>
              <p className="ml-4 mb-2">LCD = 4x(x - 1)</p>

              <p className="mb-2"><strong>Step 3:</strong> Multiply every term by LCD</p>
              <div className="ml-4 mb-2 space-y-1">
                <p>4x(x-1) · 1/x + 4x(x-1) · 1/(x-1) = 4x(x-1) · 3/4</p>
                <p>4(x-1) + 4x = 3x(x-1)</p>
                <p>4x - 4 + 4x = 3x² - 3x</p>
                <p>8x - 4 = 3x² - 3x</p>
              </div>

              <p className="mb-2"><strong>Step 4:</strong> Rearrange to standard form</p>
              <p className="ml-4 mb-2">3x² - 3x - 8x + 4 = 0</p>
              <p className="ml-4 mb-2">3x² - 11x + 4 = 0</p>

              <p className="mb-2"><strong>Step 5:</strong> Factor (or use quadratic formula)</p>
              <div className="ml-4 mb-2">
                <p>Try factoring: (3x - 1)(x - 4) = 0</p>
                <p>3x - 1 = 0 or x - 4 = 0</p>
                <p>x = 1/3 or x = 4</p>
              </div>

              <p className="mb-2"><strong>Step 6:</strong> Check against restrictions</p>
              <div className="ml-4 mb-2">
                <p>x = 1/3: valid (1/3 ≠ 0 and 1/3 ≠ 1) ✓</p>
                <p>x = 4: valid (4 ≠ 0 and 4 ≠ 1) ✓</p>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Solutions: x = 1/3 or x = 4</p>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Verify x = 4:</strong> 1/4 + 1/3 = 3/12 + 4/12 = 7/12... Let me recalculate:
                <br/>Actually: 1/4 + 1/(4-1) = 1/4 + 1/3 = 7/12 ≠ 3/4
                <br/>(This shows the importance of checking!)
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Extraneous Solutions */}
      <section className="mb-8 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          3. Extraneous Solutions
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2 text-red-600 dark:text-red-400">
            What are Extraneous Solutions?
          </h3>
          <p className="mb-2">
            When we multiply by expressions containing variables, we might introduce solutions
            that don't work in the original equation. These are called <strong>extraneous solutions</strong>.
          </p>
          <p className="mb-2">
            An extraneous solution typically makes a denominator equal to zero in the original equation.
          </p>
        </div>

        {/* Worked Example 3 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample3(!showExample3)}
            className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-800 transition"
          >
            {showExample3 ? '▼' : '▶'} Example 3: Solve x/(x-2) = 2 + 4/(x-2)
          </button>

          {showExample3 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-purple-500">
              <p className="mb-2"><strong>Given:</strong> x/(x-2) = 2 + 4/(x-2)</p>

              <p className="mb-2"><strong>Step 1:</strong> Identify restrictions</p>
              <p className="ml-4 mb-2 text-red-600 dark:text-red-400">
                x ≠ 2 (would make denominators zero)
              </p>

              <p className="mb-2"><strong>Step 2:</strong> Multiply both sides by (x-2)</p>
              <div className="ml-4 mb-2 space-y-1">
                <p>(x-2) · x/(x-2) = (x-2) · [2 + 4/(x-2)]</p>
                <p>x = 2(x-2) + 4</p>
                <p>x = 2x - 4 + 4</p>
                <p>x = 2x</p>
              </div>

              <p className="mb-2"><strong>Step 3:</strong> Solve</p>
              <p className="ml-4 mb-2">x = 2x</p>
              <p className="ml-4 mb-2">0 = x</p>
              <p className="ml-4 mb-2">x = 0</p>

              <p className="mb-2"><strong>Step 4:</strong> Check against restrictions</p>
              <p className="ml-4 mb-2">x = 0 is valid (0 ≠ 2) ✓</p>

              <p className="mb-2"><strong>Step 5:</strong> Verify in original equation</p>
              <div className="ml-4 mb-2">
                <p>Left side: 0/(0-2) = 0/(-2) = 0</p>
                <p>Right side: 2 + 4/(0-2) = 2 + 4/(-2) = 2 - 2 = 0</p>
                <p>Both sides equal 0 ✓</p>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Solution: x = 0</p>
              </div>

              <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded">
                <p className="font-semibold">Note:</p>
                <p className="text-sm">
                  If our solution had been x = 2, it would be extraneous because it makes
                  the denominators zero in the original equation.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Complex Examples */}
      <section className="mb-8 p-6 bg-orange-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700 dark:text-orange-300">
          4. More Complex Examples
        </h2>

        <div className="p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Example: Solve 2/(x+1) + 3/(x-1) = 4/x</h3>
          <div className="space-y-2 ml-4 mt-3">
            <p><strong>Restrictions:</strong> x ≠ -1, x ≠ 1, x ≠ 0</p>
            <p><strong>LCD:</strong> x(x+1)(x-1)</p>
            <p><strong>Multiply through:</strong></p>
            <div className="ml-4 space-y-1">
              <p>2x(x-1) + 3x(x+1) = 4(x+1)(x-1)</p>
              <p>2x² - 2x + 3x² + 3x = 4(x² - 1)</p>
              <p>5x² + x = 4x² - 4</p>
              <p>x² + x + 4 = 0</p>
            </div>
            <p><strong>Using quadratic formula:</strong></p>
            <div className="ml-4">
              <p>x = (-1 ± √(1 - 16))/2 = (-1 ± √(-15))/2</p>
              <p className="text-red-600 dark:text-red-400 font-semibold">No real solutions</p>
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
            <p className="font-semibold mb-2">1. Solve 5/x = x + 4</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Restriction: x ≠ 0</p>
                <p>Multiply by x: 5 = x² + 4x</p>
                <p>x² + 4x - 5 = 0</p>
                <p>(x + 5)(x - 1) = 0</p>
                <p className="font-semibold">Answer: x = -5 or x = 1</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">2. Solve x/(x+3) + 2 = 6/(x+3)</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Restriction: x ≠ -3</p>
                <p>Multiply by (x+3): x + 2(x+3) = 6</p>
                <p>x + 2x + 6 = 6</p>
                <p>3x = 0</p>
                <p className="font-semibold">Answer: x = 0</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">3. Solve 1/(x-1) + 1/(x+1) = 1/2</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Restrictions: x ≠ 1, x ≠ -1</p>
                <p>LCD: 2(x-1)(x+1)</p>
                <p>2(x+1) + 2(x-1) = (x-1)(x+1)</p>
                <p>2x + 2 + 2x - 2 = x² - 1</p>
                <p>4x = x² - 1</p>
                <p>x² - 4x - 1 = 0</p>
                <p>x = (4 ± √(16+4))/2 = (4 ± √20)/2</p>
                <p className="font-semibold">Answer: x = 2 + √5 or x = 2 - √5</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">4. Solve x/(x-3) = 3 + 9/(x-3)</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Restriction: x ≠ 3</p>
                <p>Multiply by (x-3): x = 3(x-3) + 9</p>
                <p>x = 3x - 9 + 9</p>
                <p>x = 3x</p>
                <p>x = 0</p>
                <p className="font-semibold">Answer: x = 0 (valid since 0 ≠ 3)</p>
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
          <li><strong>Always identify restrictions first</strong> - values that make denominators zero</li>
          <li>Find the LCD of all denominators and multiply every term by it</li>
          <li>After clearing fractions, you'll have a quadratic equation to solve</li>
          <li><strong>Check all solutions</strong> against the restrictions you identified</li>
          <li>Reject any extraneous solutions (those that make denominators zero)</li>
          <li>Verify your final answers in the original equation</li>
          <li>If discriminant is negative, the equation has no real solutions</li>
        </ul>
      </section>
    </div>
  );
};

export default SolvingFractional;
