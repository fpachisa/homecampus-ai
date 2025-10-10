import React, { useState } from 'react';

const SolvingStandardForm = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Solving Quadratic Equations: ax² = k
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
          Introduction
        </h2>
        <p className="mb-3">
          The simplest form of quadratic equation is <strong>x² = k</strong> or more generally <strong>ax² = k</strong>.
          These equations can be solved by taking square roots.
        </p>
        <p className="mb-3">
          <strong>Key Concept:</strong> When we take the square root of both sides, we must consider both
          positive and negative roots because both (+√k)² = k and (-√k)² = k.
        </p>
      </section>

      {/* Basic Square Root Method */}
      <section className="mb-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
          1. Basic Square Root Method
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Rule:</h3>
          <p className="mb-2">If <strong>x² = k</strong> where k &gt; 0, then:</p>
          <div className="text-center text-lg font-semibold my-3 p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
            x = ±√k
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            This means x = √k or x = -√k (two solutions)
          </p>
        </div>

        <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/30 rounded">
          <h3 className="font-semibold mb-2 text-red-700 dark:text-red-300">Important:</h3>
          <p>If k &lt; 0 (negative), then x² = k has <strong>no real solutions</strong> because
            the square of any real number is always non-negative.</p>
        </div>

        {/* Worked Example 1 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition"
          >
            {showExample1 ? '▼' : '▶'} Example 1: Solve x² = 36
          </button>

          {showExample1 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-blue-500">
              <p className="mb-2"><strong>Given:</strong> x² = 36</p>
              <p className="mb-2"><strong>Step 1:</strong> Take square root of both sides</p>
              <p className="ml-4 mb-2">x = ±√36</p>
              <p className="mb-2"><strong>Step 2:</strong> Simplify</p>
              <p className="ml-4 mb-2">x = ±6</p>
              <p className="mb-2"><strong>Step 3:</strong> Write both solutions</p>
              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded">
                <p className="font-semibold">x = 6 or x = -6</p>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Check:</strong> 6² = 36 ✓ and (-6)² = 36 ✓
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Equations with Coefficients */}
      <section className="mb-8 p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">
          2. Equations with Coefficients (ax² = k)
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Method:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Divide both sides by the coefficient a to isolate x²</li>
            <li>Take the square root of both sides</li>
            <li>Simplify the result</li>
          </ol>
        </div>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <p className="mb-2">If <strong>ax² = k</strong>, then:</p>
          <div className="text-center text-lg my-3 space-y-2">
            <p>x² = k/a</p>
            <p className="font-semibold text-blue-600 dark:text-blue-400">x = ±√(k/a)</p>
          </div>
        </div>

        {/* Worked Example 2 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample2(!showExample2)}
            className="w-full text-left p-4 bg-green-100 dark:bg-green-900 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-800 transition"
          >
            {showExample2 ? '▼' : '▶'} Example 2: Solve 3x² = 48
          </button>

          {showExample2 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-green-500">
              <p className="mb-2"><strong>Given:</strong> 3x² = 48</p>
              <p className="mb-2"><strong>Step 1:</strong> Divide both sides by 3</p>
              <p className="ml-4 mb-2">x² = 48/3</p>
              <p className="ml-4 mb-2">x² = 16</p>
              <p className="mb-2"><strong>Step 2:</strong> Take square root of both sides</p>
              <p className="ml-4 mb-2">x = ±√16</p>
              <p className="mb-2"><strong>Step 3:</strong> Simplify</p>
              <p className="ml-4 mb-2">x = ±4</p>
              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">x = 4 or x = -4</p>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Check:</strong> 3(4)² = 3(16) = 48 ✓ and 3(-4)² = 3(16) = 48 ✓
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Practice Problems */}
      <section className="mb-8 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          Practice Problems
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">1. Solve x² = 49</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>x = ±√49 = ±7</p>
                <p className="font-semibold">Answer: x = 7 or x = -7</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">2. Solve 2x² = 50</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>x² = 50/2 = 25</p>
                <p>x = ±√25 = ±5</p>
                <p className="font-semibold">Answer: x = 5 or x = -5</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">3. Solve 5x² - 80 = 0</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>5x² = 80</p>
                <p>x² = 16</p>
                <p>x = ±4</p>
                <p className="font-semibold">Answer: x = 4 or x = -4</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">4. Solve x² + 25 = 0</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>x² = -25</p>
                <p className="text-red-600 dark:text-red-400 font-semibold">
                  No real solutions (cannot take square root of a negative number)
                </p>
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
          <li>For x² = k where k &gt; 0: <strong>x = ±√k</strong> (two solutions)</li>
          <li>For ax² = k: divide by a first, then take square root</li>
          <li>Always include both positive and negative roots: ±</li>
          <li>If k &lt; 0: no real solutions</li>
          <li>Always check your answers by substituting back into the original equation</li>
        </ul>
      </section>
    </div>
  );
};

export default SolvingStandardForm;
