import React, { useState } from 'react';

const MultiplyingDividingSurds = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Multiplying and Dividing Surds</h1>
        <p className="text-lg">Multiply, divide, and expand expressions with surds</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Multiplying Surds */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. Multiplying Surds</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Rule:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-center text-2xl font-mono mb-2 text-gray-900 dark:text-gray-100">
                √a × √b = √(ab)
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Multiply the numbers under the square roots, then simplify
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Examples:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li className="font-mono">√2 × √3 = √(2 × 3) = √6</li>
              <li className="font-mono">√5 × √5 = √(5 × 5) = √25 = 5</li>
              <li className="font-mono">√6 × √10 = √(6 × 10) = √60 = √(4 × 15) = 2√15</li>
              <li className="font-mono">√7 × √14 = √(7 × 14) = √98 = √(49 × 2) = 7√2</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">With Coefficients:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              When surds have coefficients, multiply the coefficients separately:
            </p>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
              <p className="text-center font-mono text-lg mb-2 text-gray-900 dark:text-gray-100">
                (a√b) × (c√d) = ac√(bd)
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Multiply coefficients, multiply radicands
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Examples with Coefficients:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li className="font-mono">3√2 × 4√5 = (3 × 4)√(2 × 5) = 12√10</li>
              <li className="font-mono">2√3 × 5√3 = (2 × 5)√(3 × 3) = 10√9 = 10 × 3 = 30</li>
              <li className="font-mono">6√2 × 3√8 = 18√16 = 18 × 4 = 72</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Dividing Surds */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Dividing Surds</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Rule:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-center text-2xl font-mono mb-2 text-gray-900 dark:text-gray-100">
                √a / √b = √(a/b)
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Divide the numbers under the square roots, then simplify (b ≠ 0)
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Examples:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li className="font-mono">√12 / √3 = √(12/3) = √4 = 2</li>
              <li className="font-mono">√50 / √2 = √(50/2) = √25 = 5</li>
              <li className="font-mono">√72 / √8 = √(72/8) = √9 = 3</li>
              <li className="font-mono">√18 / √2 = √(18/2) = √9 = 3</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">With Coefficients:</h3>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded mb-3">
              <p className="text-center font-mono text-lg mb-2 text-gray-900 dark:text-gray-100">
                (a√b) / (c√d) = (a/c)√(b/d)
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Divide coefficients, divide radicands
              </p>
            </div>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li className="font-mono">12√6 / 3√2 = (12/3)√(6/2) = 4√3</li>
              <li className="font-mono">15√10 / 5√2 = (15/5)√(10/2) = 3√5</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Expanding Brackets */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">3. Expanding Brackets with Surds</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Just Like Algebra!</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Use the <strong>distributive property</strong> to expand brackets with surds, just like with algebraic expressions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Single Bracket:</h3>
            <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
              <p className="font-semibold text-gray-900 dark:text-gray-100">Example: √3(2 + √3)</p>
              <p className="font-mono ml-4">= √3 × 2 + √3 × √3</p>
              <p className="font-mono ml-4">= 2√3 + 3</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Double Brackets (FOIL Method):</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Multiply: <strong>F</strong>irst, <strong>O</strong>uter, <strong>I</strong>nner, <strong>L</strong>ast
            </p>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Example: (√2 + 3)(√2 + 5)</p>
              <div className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p className="font-mono">First: √2 × √2 = 2</p>
                <p className="font-mono">Outer: √2 × 5 = 5√2</p>
                <p className="font-mono">Inner: 3 × √2 = 3√2</p>
                <p className="font-mono">Last: 3 × 5 = 15</p>
                <p className="font-mono mt-2">= 2 + 5√2 + 3√2 + 15</p>
                <p className="font-mono font-bold">= 17 + 8√2</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Difference of Two Squares:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
              <p className="text-center font-mono text-lg mb-2 text-gray-900 dark:text-gray-100">
                (a + √b)(a - √b) = a² - b
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                The surd terms cancel out!
              </p>
            </div>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p className="font-semibold text-gray-900 dark:text-gray-100">Example: (3 + √5)(3 - √5)</p>
              <p className="font-mono ml-4">= 3² - (√5)²</p>
              <p className="font-mono ml-4">= 9 - 5</p>
              <p className="font-mono ml-4 font-bold">= 4</p>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Multiplying Surds
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Simplify: 2√6 × 3√8</p>

                <div className="ml-4 space-y-2 bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-gray-800 dark:text-gray-200">
                  <p className="font-mono">2√6 × 3√8</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Multiply coefficients and radicands</p>
                  <p className="font-mono">= (2 × 3)√(6 × 8)</p>
                  <p className="font-mono">= 6√48</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Simplify √48</p>
                  <p className="font-mono">= 6√(16 × 3)</p>
                  <p className="font-mono">= 6 × 4√3</p>
                  <p className="font-mono font-bold">= 24√3</p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Dividing Surds
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Simplify: 18√15 / 6√3</p>

                <div className="ml-4 space-y-2 bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-gray-800 dark:text-gray-200">
                  <p className="font-mono">18√15 / 6√3</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Divide coefficients and radicands</p>
                  <p className="font-mono">= (18/6)√(15/3)</p>
                  <p className="font-mono">= 3√5</p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample3 ? '▼' : '▶'} Example 3: Expanding (2 + √3)(4 - √3)
            </button>

            {showExample3 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Expand and simplify: (2 + √3)(4 - √3)</p>

                <div className="ml-4 space-y-2 bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-gray-800 dark:text-gray-200">
                  <p className="font-mono">(2 + √3)(4 - √3)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Use FOIL</p>
                  <p className="font-mono">First: 2 × 4 = 8</p>
                  <p className="font-mono">Outer: 2 × (-√3) = -2√3</p>
                  <p className="font-mono">Inner: √3 × 4 = 4√3</p>
                  <p className="font-mono">Last: √3 × (-√3) = -3</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">↓ Combine all terms</p>
                  <p className="font-mono">= 8 - 2√3 + 4√3 - 3</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Simplify</p>
                  <p className="font-mono font-bold">= 5 + 2√3</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. Multiply:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) √3 × √7</p>
                <p>b) √5 × √5</p>
                <p>c) 2√3 × 4√6</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> √3 × √7 = √21</p>
                  <p><strong>b)</strong> √5 × √5 = 5</p>
                  <p><strong>c)</strong> 2√3 × 4√6 = 8√18 = 8 × 3√2 = 24√2</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Divide:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) √20 / √5</p>
                <p>b) 12√18 / 4√2</p>
                <p>c) √75 / √3</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> √20 / √5 = √4 = 2</p>
                  <p><strong>b)</strong> 12√18 / 4√2 = 3√9 = 9</p>
                  <p><strong>c)</strong> √75 / √3 = √25 = 5</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                3. Expand and simplify:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) √5(2 + √5)</p>
                <p>b) (√3 + 2)(√3 + 4)</p>
                <p>c) (5 + √7)(5 - √7)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> √5(2 + √5) = 2√5 + 5</p>
                  <p><strong>b)</strong> (√3 + 2)(√3 + 4) = 3 + 4√3 + 2√3 + 8 = 11 + 6√3</p>
                  <p><strong>c)</strong> (5 + √7)(5 - √7) = 25 - 7 = 18</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>Multiplication:</strong> √a × √b = √(ab), then simplify</li>
            <li><strong>Division:</strong> √a / √b = √(a/b), then simplify</li>
            <li>With coefficients: multiply or divide coefficients separately</li>
            <li><strong>Expanding brackets:</strong> Use distributive property (FOIL for double brackets)</li>
            <li><strong>Difference of squares:</strong> (a + √b)(a - √b) = a² - b</li>
            <li>Remember to <strong>always simplify</strong> the final answer</li>
            <li>√a × √a = a (perfect square eliminates the radical)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MultiplyingDividingSurds;
