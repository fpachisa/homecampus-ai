import { useState } from 'react';

const SurdsFundamentals = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [testNumber, setTestNumber] = useState(16);

  // Helper function to check if a number is a perfect square
  const isPerfectSquare = (n: number) => {
    const sqrt = Math.sqrt(n);
    return sqrt === Math.floor(sqrt);
  };

  // Calculate square root
  const sqrtValue = Math.sqrt(testNumber);
  const isSurd = !isPerfectSquare(testNumber) && testNumber > 0;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Understanding Surds</h1>
        <p className="text-lg">Introduction to surds, radicals, and irrational square roots</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is a Surd? */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">1. What is a Surd?</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              A <strong>surd</strong> is the square root of a number that is <strong>not a perfect square</strong>.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Surds are <strong>irrational numbers</strong> - they cannot be expressed as a simple fraction and their decimal representation goes on forever without repeating.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Perfect Squares (NOT surds):</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li className="font-mono">√4 = 2 <span className="text-gray-600 dark:text-gray-400">(rational)</span></li>
                <li className="font-mono">√9 = 3 <span className="text-gray-600 dark:text-gray-400">(rational)</span></li>
                <li className="font-mono">√16 = 4 <span className="text-gray-600 dark:text-gray-400">(rational)</span></li>
                <li className="font-mono">√25 = 5 <span className="text-gray-600 dark:text-gray-400">(rational)</span></li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-orange-300 dark:border-orange-600">
              <h3 className="font-bold mb-3 text-orange-700 dark:text-orange-300">Surds (irrational):</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li className="font-mono">√2 = 1.414213... <span className="text-gray-600 dark:text-gray-400">(surd)</span></li>
                <li className="font-mono">√3 = 1.732050... <span className="text-gray-600 dark:text-gray-400">(surd)</span></li>
                <li className="font-mono">√5 = 2.236067... <span className="text-gray-600 dark:text-gray-400">(surd)</span></li>
                <li className="font-mono">√7 = 2.645751... <span className="text-gray-600 dark:text-gray-400">(surd)</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded mb-4 border border-purple-200 dark:border-purple-700">
            <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Interactive: Test if a number produces a surd</p>
            <div className="flex gap-2 items-center mb-3">
              <span className="text-gray-800 dark:text-gray-200">√</span>
              <input
                type="number"
                value={testNumber}
                onChange={(e) => setTestNumber(Number(e.target.value))}
                className="px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded w-24 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                placeholder="16"
                min="1"
              />
              <span className="text-gray-800 dark:text-gray-200">= {sqrtValue.toFixed(6)}</span>
            </div>
            <div className={`p-3 rounded ${isSurd ? 'bg-orange-100 dark:bg-orange-900/50' : 'bg-green-100 dark:bg-green-900/50'}`}>
              <p className="text-sm text-gray-800 dark:text-gray-200">
                <strong>√{testNumber}</strong> is {isSurd ? 'a SURD' : 'NOT a surd'}
                {!isSurd && testNumber > 0 ? ` (perfect square: √${testNumber} = ${sqrtValue})` : ''}
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Properties of Square Roots */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">2. Properties of Square Roots</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Multiplication Property:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100">
                √(ab) = √a × √b
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                The square root of a product equals the product of the square roots
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Examples:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li className="font-mono">√(4 × 9) = √4 × √9 = 2 × 3 = 6</li>
              <li className="font-mono">√50 = √(25 × 2) = √25 × √2 = 5√2</li>
              <li className="font-mono">√12 = √(4 × 3) = √4 × √3 = 2√3</li>
            </ul>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Division Property:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100">
                √(a/b) = √a / √b
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                The square root of a quotient equals the quotient of the square roots (b ≠ 0)
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Examples:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li className="font-mono">√(9/4) = √9 / √4 = 3/2</li>
              <li className="font-mono">√(25/16) = √25 / √16 = 5/4</li>
              <li className="font-mono">√(1/2) = √1 / √2 = 1/√2</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Radical Notation */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">3. Radical Notation</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Terminology:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-center text-2xl font-mono mb-3 text-gray-900 dark:text-gray-100">
                √a
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-800 dark:text-gray-200">
                <div>
                  <p><strong className="text-gray-900 dark:text-gray-100">√</strong> is the <strong>radical symbol</strong></p>
                </div>
                <div>
                  <p><strong className="text-gray-900 dark:text-gray-100">a</strong> is the <strong>radicand</strong> (number under the root)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Standard Form of a Surd:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              A surd is in <strong>simplest form</strong> when the number under the square root has no perfect square factors (other than 1).
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-300 dark:border-green-600">
                <p className="font-bold text-green-700 dark:text-green-300 mb-2">Simplified:</p>
                <ul className="space-y-1 text-gray-800 dark:text-gray-200">
                  <li className="font-mono">√2</li>
                  <li className="font-mono">√3</li>
                  <li className="font-mono">5√2</li>
                  <li className="font-mono">3√7</li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded border border-red-300 dark:border-red-600">
                <p className="font-bold text-red-700 dark:text-red-300 mb-2">Not Simplified:</p>
                <ul className="space-y-1 text-gray-800 dark:text-gray-200">
                  <li className="font-mono">√8 → 2√2</li>
                  <li className="font-mono">√12 → 2√3</li>
                  <li className="font-mono">√50 → 5√2</li>
                  <li className="font-mono">√75 → 5√3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Perfect Squares Reference */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">4. Perfect Squares Reference</h2>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-200">Common Perfect Squares (memorize these!):</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => (
                <div key={n} className="bg-white dark:bg-gray-800 p-2 rounded text-center border border-gray-300 dark:border-gray-600">
                  <p className="font-mono text-gray-900 dark:text-gray-100">{n}² = {n * n}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
              Knowing these helps identify perfect square factors quickly!
            </p>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-orange-100 dark:bg-orange-900/50 rounded-lg font-semibold hover:bg-orange-200 dark:hover:bg-orange-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Identifying Surds vs Rational Numbers
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-orange-500 dark:border-orange-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Which of the following are surds?
                </p>

                <div className="ml-4 space-y-3 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-mono text-gray-900 dark:text-gray-100">a) √36</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                      √36 = 6 → <strong className="text-red-600 dark:text-red-400">NOT a surd</strong> (perfect square)
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-gray-900 dark:text-gray-100">b) √10</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                      10 is not a perfect square → <strong className="text-green-600 dark:text-green-400">IS a surd</strong>
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-gray-900 dark:text-gray-100">c) √100</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                      √100 = 10 → <strong className="text-red-600 dark:text-red-400">NOT a surd</strong> (perfect square)
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-gray-900 dark:text-gray-100">d) √7</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                      7 is not a perfect square → <strong className="text-green-600 dark:text-green-400">IS a surd</strong>
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-orange-100 dark:bg-orange-900/50 rounded-lg font-semibold hover:bg-orange-200 dark:hover:bg-orange-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Using Square Root Properties
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-orange-500 dark:border-orange-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Simplify using the multiplication property:
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">a) √(16 × 25)</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p className="font-mono">√(16 × 25)</p>
                      <p className="text-gray-600 dark:text-gray-400">↓ Use √(ab) = √a × √b</p>
                      <p className="font-mono">= √16 × √25</p>
                      <p className="font-mono">= 4 × 5</p>
                      <p className="font-mono font-bold">= 20</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">b) √(9/4)</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p className="font-mono">√(9/4)</p>
                      <p className="text-gray-600 dark:text-gray-400">↓ Use √(a/b) = √a / √b</p>
                      <p className="font-mono">= √9 / √4</p>
                      <p className="font-mono">= 3/2</p>
                      <p className="font-mono font-bold">= 1.5</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. State whether each is a surd or not:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) √49</p>
                <p>b) √13</p>
                <p>c) √144</p>
                <p>d) √20</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-orange-600 dark:text-orange-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> √49 = 7 → NOT a surd</p>
                  <p><strong>b)</strong> √13 → IS a surd</p>
                  <p><strong>c)</strong> √144 = 12 → NOT a surd</p>
                  <p><strong>d)</strong> √20 → IS a surd</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Evaluate using the properties of square roots:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) √(4 × 9)</p>
                <p>b) √(25/9)</p>
                <p>c) √100 × √4</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-orange-600 dark:text-orange-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> √(4 × 9) = √4 × √9 = 2 × 3 = 6</p>
                  <p><strong>b)</strong> √(25/9) = √25 / √9 = 5/3</p>
                  <p><strong>c)</strong> √100 × √4 = 10 × 2 = 20</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li>A <strong>surd</strong> is the square root of a number that is NOT a perfect square</li>
            <li>Surds are <strong>irrational numbers</strong> with non-terminating, non-repeating decimals</li>
            <li><strong>√(ab) = √a × √b</strong> (multiplication property)</li>
            <li><strong>√(a/b) = √a / √b</strong> (division property, b ≠ 0)</li>
            <li>The <strong>radical symbol</strong> is √, and the <strong>radicand</strong> is the number under it</li>
            <li>Surds are in <strong>simplest form</strong> when the radicand has no perfect square factors</li>
            <li>Memorize perfect squares (1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144...)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SurdsFundamentals;
