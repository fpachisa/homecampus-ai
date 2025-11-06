import { useState } from 'react';

export default function DoubleBracketExpansionNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Double Bracket Expansion</h1>
        <p className="mt-2 text-purple-100">Expanding expressions of the form (a + b)(c + d) using FOIL method and area models</p>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-8">

        {/* Section 1: Understanding Double Bracket Expansion */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Expanding (a + b)(c + d)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When expanding double brackets, we multiply <strong>each term in the first bracket</strong> by <strong>each term in the second bracket</strong>.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                The Formula
              </h3>
              <div className="text-center text-xl font-bold text-purple-700 dark:text-purple-300 mb-4">
                (a + b)(c + d) = ac + ad + bc + bd
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Notice we get <strong>four terms</strong> from multiplying each term in the first bracket by each term in the second bracket.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                FOIL Method:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A helpful way to remember which terms to multiply:
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <div className="border-l-2 border-blue-300 dark:border-blue-600 pl-4">
                  <p><strong>F</strong>irst: Multiply the first terms → ac</p>
                </div>
                <div className="border-l-2 border-blue-300 dark:border-blue-600 pl-4">
                  <p><strong>O</strong>uter: Multiply the outer terms → ad</p>
                </div>
                <div className="border-l-2 border-blue-300 dark:border-blue-600 pl-4">
                  <p><strong>I</strong>nner: Multiply the inner terms → bc</p>
                </div>
                <div className="border-l-2 border-blue-300 dark:border-blue-600 pl-4">
                  <p><strong>L</strong>ast: Multiply the last terms → bd</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Example 1: Expand (x + 3)(x + 5)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution using FOIL:</strong>
              </p>
              <div className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>F</strong>irst: x × x = x²</p>
                <p><strong>O</strong>uter: x × 5 = 5x</p>
                <p><strong>I</strong>nner: 3 × x = 3x</p>
                <p><strong>L</strong>ast: 3 × 5 = 15</p>
                <p className="mt-3 font-semibold">Combine: x² + 5x + 3x + 15 = x² + 8x + 15</p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Basic Double Bracket Expansion
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Expand and simplify:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <div>(a) (x + 2)(x + 4)</div>
              <div>(b) (x + 1)(x + 7)</div>
              <div>(c) (2a + 1)(3a + 4)</div>
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
                    <p><strong>(a)</strong> (x + 2)(x + 4)</p>
                    <p className="ml-4">= x² + 4x + 2x + 8</p>
                    <p className="ml-4">= x² + 6x + 8</p>
                  </div>
                  <div>
                    <p><strong>(b)</strong> (x + 1)(x + 7)</p>
                    <p className="ml-4">= x² + 7x + x + 7</p>
                    <p className="ml-4">= x² + 8x + 7</p>
                  </div>
                  <div>
                    <p><strong>(c)</strong> (2a + 1)(3a + 4)</p>
                    <p className="ml-4">= 6a² + 8a + 3a + 4</p>
                    <p className="ml-4">= 6a² + 11a + 4</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Handling Negative Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Expanding with Negative Terms
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When brackets contain subtraction, we must be careful with signs:
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                Sign Rules:
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>(+) × (+) = +</p>
                <p>(+) × (−) = −</p>
                <p>(−) × (+) = −</p>
                <p>(−) × (−) = +</p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Example 2: Expand (x − 3)(x + 5)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong>
              </p>
              <div className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                <p>First: x × x = x²</p>
                <p>Outer: x × 5 = 5x</p>
                <p>Inner: (−3) × x = −3x</p>
                <p>Last: (−3) × 5 = −15</p>
                <p className="mt-3 font-semibold">Combine: x² + 5x − 3x − 15 = x² + 2x − 15</p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Expansion with Negative Terms
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Expand and simplify:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <div>(a) (x − 2)(x + 3)</div>
              <div>(b) (2p − q)(3p − 4q)</div>
              <div>(c) (x − 5)(x − 2)</div>
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
                    <p><strong>(a)</strong> (x − 2)(x + 3)</p>
                    <p className="ml-4">= x² + 3x − 2x − 6</p>
                    <p className="ml-4">= x² + x − 6</p>
                  </div>
                  <div>
                    <p><strong>(b)</strong> (2p − q)(3p − 4q)</p>
                    <p className="ml-4">= 6p² − 8pq − 3pq + 4q²</p>
                    <p className="ml-4">= 6p² − 11pq + 4q²</p>
                  </div>
                  <div>
                    <p><strong>(c)</strong> (x − 5)(x − 2)</p>
                    <p className="ml-4">= x² − 2x − 5x + 10</p>
                    <p className="ml-4">= x² − 7x + 10</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Area Model Visualization */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Understanding with Area Models
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We can visualize (a + b)(c + d) as the area of a rectangle divided into 4 parts:
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
                2 × 2 Grid (Multiplication Frame):
              </h3>
              <div className="text-gray-700 dark:text-gray-300 space-y-3">
                <p>For (x + 3)(x + 5), imagine a rectangle with:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Width: x + 3</li>
                  <li>Height: x + 5</li>
                </ul>
                <p className="mt-3">The four regions represent:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Top-left: x × x = x²</li>
                  <li>Top-right: x × 5 = 5x</li>
                  <li>Bottom-left: 3 × x = 3x</li>
                  <li>Bottom-right: 3 × 5 = 15</li>
                </ul>
                <p className="mt-3 font-semibold">Total area: x² + 5x + 3x + 15 = x² + 8x + 15</p>
              </div>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Challenge Problems
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Expand and simplify:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <div>(a) (3x + 2)(2x − 5)</div>
              <div>(b) (4 − x)(3 + 2x)</div>
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
                    <p><strong>(a)</strong> (3x + 2)(2x − 5)</p>
                    <p className="ml-4">= 6x² − 15x + 4x − 10</p>
                    <p className="ml-4">= 6x² − 11x − 10</p>
                  </div>
                  <div>
                    <p><strong>(b)</strong> (4 − x)(3 + 2x)</p>
                    <p className="ml-4">= 12 + 8x − 3x − 2x²</p>
                    <p className="ml-4">= −2x² + 5x + 12</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Double bracket expansion gives <strong>four terms</strong> before simplification</li>
            <li>Use FOIL to remember: First, Outer, Inner, Last</li>
            <li>Always watch signs: (−) × (−) = (+)</li>
            <li>Combine like terms after expanding</li>
            <li>Area model helps visualize the multiplication</li>
            <li>Always verify by checking all four products</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
