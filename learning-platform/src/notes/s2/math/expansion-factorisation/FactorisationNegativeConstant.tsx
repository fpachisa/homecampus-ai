import { useState } from 'react';

export default function FactorisationNegativeConstantNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-orange-600 dark:from-red-600 dark:to-orange-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Factorising with Negative Constant</h1>
        <p className="mt-2 text-red-100">Factorising quadratics where the constant term is negative (c &lt; 0)</p>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-8">

        {/* Section 1: Understanding the Pattern */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            When the Constant is Negative
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When factorising x² + bx + c and the constant <strong>c is negative</strong>, we need factors with <strong>opposite signs</strong>.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3">
                Key Pattern:
              </h3>
              <div className="text-gray-700 dark:text-gray-300 space-y-3">
                <p>If <strong>c &lt; 0</strong> (negative constant):</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>One factor must be <strong>positive</strong></li>
                  <li>One factor must be <strong>negative</strong></li>
                  <li>Form: (x + p)(x − q) or (x − p)(x + q)</li>
                </ul>
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold mb-2">Finding the factors:</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Find factor pairs of c (ignore signs initially)</li>
                    <li>Determine which factor is larger</li>
                    <li>The <strong>larger factor</strong> gets the <strong>same sign as b</strong></li>
                    <li>The smaller factor gets the opposite sign</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Why Opposite Signs?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                When we multiply (x + p)(x − q), the constant term comes from p × (−q) = −pq, which is <strong>negative</strong>.
                <br /><br />
                This is the only way to get a negative constant when factorising!
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Example 1: Factorise x² + 5x − 6
              </h3>
              <div className="text-gray-700 dark:text-gray-300 space-y-2">
                <p><strong>Step 1:</strong> Find factor pairs of 6:</p>
                <p className="ml-4">• 1 × 6</p>
                <p className="ml-4">• 2 × 3</p>

                <p><strong>Step 2:</strong> Which pair's difference equals 5? (since b = +5)</p>
                <p className="ml-4">• 6 − 1 = 5 ✓</p>
                <p className="ml-4">• 3 − 2 = 1 ✗</p>

                <p><strong>Step 3:</strong> Since b is positive, the larger factor (6) is positive:</p>
                <p className="ml-4 font-semibold">x² + 5x − 6 = (x + 6)(x − 1)</p>

                <p className="mt-3"><strong>Check:</strong> (x + 6)(x − 1) = x² − x + 6x − 6 = x² + 5x − 6 ✓</p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Positive b, Negative c
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Factorise the following expressions:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <div>(a) x² + 4x − 12</div>
              <div>(b) x² + 2x − 15</div>
              <div>(c) x² + 3x − 10</div>
            </div>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Solution:</p>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <p><strong>(a)</strong> x² + 4x − 12</p>
                    <p className="ml-4">Factor pairs of 12: 1×12, 2×6, 3×4</p>
                    <p className="ml-4">Difference of 4: 6 − 2 = 4 ✓</p>
                    <p className="ml-4">b is positive, so: (x + 6)(x − 2)</p>
                  </div>
                  <div>
                    <p><strong>(b)</strong> x² + 2x − 15</p>
                    <p className="ml-4">Factor pairs of 15: 1×15, 3×5</p>
                    <p className="ml-4">Difference of 2: 5 − 3 = 2 ✓</p>
                    <p className="ml-4">b is positive, so: (x + 5)(x − 3)</p>
                  </div>
                  <div>
                    <p><strong>(c)</strong> x² + 3x − 10</p>
                    <p className="ml-4">Factor pairs of 10: 1×10, 2×5</p>
                    <p className="ml-4">Difference of 3: 5 − 2 = 3 ✓</p>
                    <p className="ml-4">b is positive, so: (x + 5)(x − 2)</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Negative b, Negative c */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            When Both b and c are Different Signs
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When <strong>b is negative</strong> and <strong>c is negative</strong>, the larger factor gets a negative sign.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                Rule Summary:
              </h3>
              <div className="text-gray-700 dark:text-gray-300 space-y-3">
                <div className="p-3 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold">If c &lt; 0 and b &gt; 0:</p>
                  <p>Larger factor is positive: (x + larger)(x − smaller)</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold">If c &lt; 0 and b &lt; 0:</p>
                  <p>Larger factor is negative: (x − larger)(x + smaller)</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Example 2: Factorise x² − 3x − 10
              </h3>
              <div className="text-gray-700 dark:text-gray-300 space-y-2">
                <p><strong>Step 1:</strong> Factor pairs of 10: 1×10, 2×5</p>

                <p><strong>Step 2:</strong> Which pair's difference equals 3?</p>
                <p className="ml-4">5 − 2 = 3 ✓</p>

                <p><strong>Step 3:</strong> Since b is negative, the larger factor (5) is negative:</p>
                <p className="ml-4 font-semibold">x² − 3x − 10 = (x − 5)(x + 2)</p>

                <p className="mt-3"><strong>Check:</strong> (x − 5)(x + 2) = x² + 2x − 5x − 10 = x² − 3x − 10 ✓</p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Negative b, Negative c
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Factorise the following expressions:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <div>(a) x² − 2x − 8</div>
              <div>(b) x² − 5x − 14</div>
              <div>(c) x² − x − 12</div>
            </div>

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Solution:</p>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <p><strong>(a)</strong> x² − 2x − 8</p>
                    <p className="ml-4">Factor pairs of 8: 1×8, 2×4</p>
                    <p className="ml-4">Difference of 2: 4 − 2 = 2 ✓</p>
                    <p className="ml-4">b is negative, so: (x − 4)(x + 2)</p>
                  </div>
                  <div>
                    <p><strong>(b)</strong> x² − 5x − 14</p>
                    <p className="ml-4">Factor pairs of 14: 1×14, 2×7</p>
                    <p className="ml-4">Difference of 5: 7 − 2 = 5 ✓</p>
                    <p className="ml-4">b is negative, so: (x − 7)(x + 2)</p>
                  </div>
                  <div>
                    <p><strong>(c)</strong> x² − x − 12</p>
                    <p className="ml-4">Factor pairs of 12: 1×12, 2×6, 3×4</p>
                    <p className="ml-4">Difference of 1: 4 − 3 = 1 ✓</p>
                    <p className="ml-4">b is negative, so: (x − 4)(x + 3)</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Strategy Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Complete Strategy for c &lt; 0
          </h2>

          <div className="mb-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
                Step-by-Step Process:
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>Find factor pairs</strong> of |c| (the positive value)</li>
                <li><strong>Look for the pair</strong> whose difference equals |b|</li>
                <li><strong>Assign signs:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>If b &gt; 0: larger factor is positive</li>
                    <li>If b &lt; 0: larger factor is negative</li>
                  </ul>
                </li>
                <li><strong>Write</strong> (x ± larger)(x ∓ smaller)</li>
                <li><strong>Verify</strong> by expanding</li>
              </ol>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Mixed Challenge
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Factorise and verify by expanding:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <div>(a) x² + 7x − 18</div>
              <div>(b) x² − 4x − 21</div>
            </div>

            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Solution:</p>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <p><strong>(a)</strong> x² + 7x − 18</p>
                    <p className="ml-4">Factors of 18: 1×18, 2×9, 3×6</p>
                    <p className="ml-4">Difference of 7: 9 − 2 = 7 ✓</p>
                    <p className="ml-4">Answer: (x + 9)(x − 2)</p>
                    <p className="ml-4 mt-2"><em>Verify: x² − 2x + 9x − 18 = x² + 7x − 18 ✓</em></p>
                  </div>
                  <div>
                    <p><strong>(b)</strong> x² − 4x − 21</p>
                    <p className="ml-4">Factors of 21: 1×21, 3×7</p>
                    <p className="ml-4">Difference of 4: 7 − 3 = 4 ✓</p>
                    <p className="ml-4">Answer: (x − 7)(x + 3)</p>
                    <p className="ml-4 mt-2"><em>Verify: x² + 3x − 7x − 21 = x² − 4x − 21 ✓</em></p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-red-700 dark:text-red-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>When c &lt; 0, factors have <strong>opposite signs</strong></li>
            <li>Find factor pairs and look for the pair whose <strong>difference</strong> equals |b|</li>
            <li>The <strong>larger factor</strong> takes the <strong>same sign as b</strong></li>
            <li>If b &gt; 0: (x + larger)(x − smaller)</li>
            <li>If b &lt; 0: (x − larger)(x + smaller)</li>
            <li>Always verify your factorisation by expanding!</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
