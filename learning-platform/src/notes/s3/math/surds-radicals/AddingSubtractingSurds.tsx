import { useState } from 'react';

const AddingSubtractingSurds = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Adding and Subtracting Surds</h1>
        <p className="text-lg">Combine like surds and simplify unlike surds</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Like Surds */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">1. Like Surds</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              <strong>Like surds</strong> have the same number under the square root (same radicand).
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Like surds can be added or subtracted by combining their coefficients, just like combining like terms in algebra.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h3 className="font-bold mb-3 text-green-700 dark:text-green-300">Like Surds:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li className="font-mono">2√3 and 5√3 <span className="text-gray-600 dark:text-gray-400">(both have √3)</span></li>
                <li className="font-mono">√7 and 4√7 <span className="text-gray-600 dark:text-gray-400">(both have √7)</span></li>
                <li className="font-mono">6√2 and -3√2 <span className="text-gray-600 dark:text-gray-400">(both have √2)</span></li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-red-300 dark:border-red-600">
              <h3 className="font-bold mb-3 text-red-700 dark:text-red-300">Unlike Surds:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li className="font-mono">2√3 and 5√2 <span className="text-gray-600 dark:text-gray-400">(different radicands)</span></li>
                <li className="font-mono">√5 and √7 <span className="text-gray-600 dark:text-gray-400">(different radicands)</span></li>
                <li className="font-mono">3√6 and 2√3 <span className="text-gray-600 dark:text-gray-400">(different radicands)</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Rule for Adding/Subtracting Like Surds:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-center text-xl font-mono mb-2 text-gray-900 dark:text-gray-100">
                a√c + b√c = (a + b)√c
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Combine coefficients, keep the radicand
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Examples:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li className="font-mono">3√2 + 5√2 = (3 + 5)√2 = 8√2</li>
              <li className="font-mono">7√5 - 2√5 = (7 - 2)√5 = 5√5</li>
              <li className="font-mono">√7 + 4√7 = (1 + 4)√7 = 5√7</li>
              <li className="font-mono">6√3 - 8√3 = (6 - 8)√3 = -2√3</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Unlike Surds - Simplify First */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">2. Adding Unlike Surds</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Strategy:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              When surds appear to be unlike, <strong>simplify each surd first</strong>. They may become like surds after simplification!
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: √8 + √18</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p className="font-mono">√8 + √18</p>
              <p className="text-gray-600 dark:text-gray-400">↓ Simplify each surd first</p>
              <p className="font-mono">= √(4 × 2) + √(9 × 2)</p>
              <p className="font-mono">= 2√2 + 3√2</p>
              <p className="text-gray-600 dark:text-gray-400">↓ Now they're like surds!</p>
              <p className="font-mono">= (2 + 3)√2</p>
              <p className="font-mono font-bold">= 5√2</p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">More Examples:</h3>
            <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
              <li>
                <p className="font-mono mb-1">√12 + √27 = 2√3 + 3√3 = 5√3</p>
              </li>
              <li>
                <p className="font-mono mb-1">√50 - √32 = 5√2 - 4√2 = √2</p>
              </li>
              <li>
                <p className="font-mono mb-1">√20 + √45 = 2√5 + 3√5 = 5√5</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Complex Expressions */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">3. Complex Surd Expressions</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Multi-Term Expressions:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When dealing with multiple terms, <strong>simplify each surd</strong> then <strong>group like terms</strong>.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: 3√2 + √8 + 5√2 - √18</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p className="font-mono">3√2 + √8 + 5√2 - √18</p>
              <p className="text-gray-600 dark:text-gray-400">↓ Simplify √8 and √18</p>
              <p className="font-mono">= 3√2 + 2√2 + 5√2 - 3√2</p>
              <p className="text-gray-600 dark:text-gray-400">↓ Combine like surds</p>
              <p className="font-mono">= (3 + 2 + 5 - 3)√2</p>
              <p className="font-mono font-bold">= 7√2</p>
            </div>
          </div>
        </div>

        {/* Section 4: When Surds Stay Unlike */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">4. Truly Unlike Surds</h2>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Important Note:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              If surds remain unlike after simplification, they <strong>cannot be combined</strong>. Leave them as separate terms.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Examples:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li className="font-mono">√2 + √3 <span className="text-red-600 dark:text-red-400">cannot be simplified</span></li>
              <li className="font-mono">5√7 - 2√5 <span className="text-red-600 dark:text-red-400">stays as is</span></li>
              <li className="font-mono">3√2 + 4√3 - √2 = 2√2 + 4√3 <span className="text-green-600 dark:text-green-400">combine only like terms</span></li>
            </ul>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-green-100 dark:bg-green-900/50 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Simplify √75 + √48 - √27
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-green-500 dark:border-green-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Simplify: √75 + √48 - √27</p>

                <div className="ml-4 space-y-2 bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-gray-800 dark:text-gray-200">
                  <p className="font-mono">√75 + √48 - √27</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Simplify each surd</p>
                  <p className="font-mono">√75 = √(25 × 3) = 5√3</p>
                  <p className="font-mono">√48 = √(16 × 3) = 4√3</p>
                  <p className="font-mono">√27 = √(9 × 3) = 3√3</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">↓ Substitute back</p>
                  <p className="font-mono">= 5√3 + 4√3 - 3√3</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Combine like surds</p>
                  <p className="font-mono">= (5 + 4 - 3)√3</p>
                  <p className="font-mono font-bold">= 6√3</p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-green-100 dark:bg-green-900/50 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Simplify 2√12 + 3√3 - √48
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-green-500 dark:border-green-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Simplify: 2√12 + 3√3 - √48</p>

                <div className="ml-4 space-y-2 bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-gray-800 dark:text-gray-200">
                  <p className="font-mono">2√12 + 3√3 - √48</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Simplify √12 and √48</p>
                  <p className="font-mono">√12 = 2√3, so 2√12 = 2(2√3) = 4√3</p>
                  <p className="font-mono">√48 = 4√3</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Substitute back</p>
                  <p className="font-mono">= 4√3 + 3√3 - 4√3</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Combine</p>
                  <p className="font-mono">= (4 + 3 - 4)√3</p>
                  <p className="font-mono font-bold">= 3√3</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. Add or subtract like surds:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) 5√7 + 3√7</p>
                <p>b) 8√2 - 5√2</p>
                <p>c) √5 + 6√5 - 2√5</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-green-600 dark:text-green-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> 5√7 + 3√7 = 8√7</p>
                  <p><strong>b)</strong> 8√2 - 5√2 = 3√2</p>
                  <p><strong>c)</strong> √5 + 6√5 - 2√5 = 5√5</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Simplify first, then add/subtract:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) √8 + √18</p>
                <p>b) √50 - √32</p>
                <p>c) √45 + √20</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-green-600 dark:text-green-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> √8 + √18 = 2√2 + 3√2 = 5√2</p>
                  <p><strong>b)</strong> √50 - √32 = 5√2 - 4√2 = √2</p>
                  <p><strong>c)</strong> √45 + √20 = 3√5 + 2√5 = 5√5</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                3. Complex expressions:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) 2√3 + √12 + √27</p>
                <p>b) 3√8 - √32 + √2</p>
                <p>c) √18 + 2√2 - √8</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-green-600 dark:text-green-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> 2√3 + 2√3 + 3√3 = 7√3</p>
                  <p><strong>b)</strong> 6√2 - 4√2 + √2 = 3√2</p>
                  <p><strong>c)</strong> 3√2 + 2√2 - 2√2 = 3√2</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>Like surds</strong> have the same radicand and can be combined</li>
            <li><strong>Add/subtract like surds:</strong> a√c + b√c = (a + b)√c</li>
            <li><strong>Always simplify</strong> surds first - unlike surds may become like surds</li>
            <li><strong>Combine coefficients</strong> for like surds, keep the radicand unchanged</li>
            <li><strong>Unlike surds</strong> that remain different after simplification cannot be combined</li>
            <li>For multi-term expressions: simplify each surd, then group and combine like terms</li>
            <li>Remember: √2 + √3 ≠ √5 (common mistake!)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddingSubtractingSurds;
