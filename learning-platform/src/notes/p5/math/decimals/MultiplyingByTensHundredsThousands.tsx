import { useState } from 'react';

const MultiplyingByTensHundredsThousands = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Multiplying by Tens, Hundreds, and Thousands</h1>
        <p className="text-lg">Learn to multiply decimals by 20, 30, 200, 600, 3000, and more!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Strategy */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">1. The Decomposition Strategy</h2>

          <div className="bg-violet-50 dark:bg-violet-900/30 p-6 rounded-lg border-l-4 border-violet-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Idea:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Break down the multiplier into smaller parts. For example:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li><strong>20</strong> = 2 × 10</li>
              <li><strong>30</strong> = 3 × 10</li>
              <li><strong>200</strong> = 2 × 100</li>
              <li><strong>600</strong> = 6 × 100</li>
              <li><strong>3000</strong> = 3 × 1000</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 mb-4">
            <p className="text-gray-800 dark:text-gray-200">
              <strong>💡 Remember:</strong> You can multiply in any order! First multiply by the single digit, then by 10, 100, or 1000.
            </p>
          </div>
        </section>

        {/* Section 2: Multiplying by Tens */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">2. Multiplying by Tens (20, 30, 40...)</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 2.3 × 20</h3>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4">
              <p className="text-blue-800 dark:text-blue-300 font-semibold mb-2">Think: 20 = 2 × 10</p>
              <p className="text-gray-800 dark:text-gray-200">So: 2.3 × 20 = 2.3 × 2 × 10</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="bg-violet-100 dark:bg-violet-900/50 px-3 py-1 rounded font-mono text-violet-800 dark:text-violet-300">Step 1:</span>
                <span className="text-gray-800 dark:text-gray-200">2.3 × 2 = <strong>4.6</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-violet-100 dark:bg-violet-900/50 px-3 py-1 rounded font-mono text-violet-800 dark:text-violet-300">Step 2:</span>
                <span className="text-gray-800 dark:text-gray-200">4.6 × 10 = <strong>46</strong></span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center text-xl font-bold text-green-700 dark:text-green-300">2.3 × 20 = 46</p>
            </div>

            {/* Visual representation */}
            <div className="mt-4 flex justify-center">
              <div className="flex items-center gap-2 text-sm">
                <span className="px-3 py-2 bg-violet-200 dark:bg-violet-800 rounded text-violet-800 dark:text-violet-200">2.3</span>
                <span className="text-gray-600 dark:text-gray-400">× 2 →</span>
                <span className="px-3 py-2 bg-blue-200 dark:bg-blue-800 rounded text-blue-800 dark:text-blue-200">4.6</span>
                <span className="text-gray-600 dark:text-gray-400">× 10 →</span>
                <span className="px-3 py-2 bg-green-200 dark:bg-green-800 rounded text-green-800 dark:text-green-200 font-bold">46</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 3.12 × 30</h3>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4">
              <p className="text-blue-800 dark:text-blue-300 font-semibold mb-2">Think: 30 = 3 × 10</p>
              <p className="text-gray-800 dark:text-gray-200">So: 3.12 × 30 = 3.12 × 3 × 10</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="bg-violet-100 dark:bg-violet-900/50 px-3 py-1 rounded font-mono text-violet-800 dark:text-violet-300">Step 1:</span>
                <span className="text-gray-800 dark:text-gray-200">3.12 × 3 = <strong>9.36</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-violet-100 dark:bg-violet-900/50 px-3 py-1 rounded font-mono text-violet-800 dark:text-violet-300">Step 2:</span>
                <span className="text-gray-800 dark:text-gray-200">9.36 × 10 = <strong>93.6</strong></span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center text-xl font-bold text-green-700 dark:text-green-300">3.12 × 30 = 93.6</p>
            </div>
          </div>
        </section>

        {/* Section 3: Multiplying by Hundreds */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">3. Multiplying by Hundreds (200, 300, 600...)</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 1.9 × 200</h3>

            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg mb-4">
              <p className="text-orange-800 dark:text-orange-300 font-semibold mb-2">Think: 200 = 2 × 100</p>
              <p className="text-gray-800 dark:text-gray-200">So: 1.9 × 200 = 1.9 × 2 × 100</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="bg-violet-100 dark:bg-violet-900/50 px-3 py-1 rounded font-mono text-violet-800 dark:text-violet-300">Step 1:</span>
                <span className="text-gray-800 dark:text-gray-200">1.9 × 2 = <strong>3.8</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-violet-100 dark:bg-violet-900/50 px-3 py-1 rounded font-mono text-violet-800 dark:text-violet-300">Step 2:</span>
                <span className="text-gray-800 dark:text-gray-200">3.8 × 100 = <strong>380</strong></span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center text-xl font-bold text-green-700 dark:text-green-300">1.9 × 200 = 380</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 4.15 × 600</h3>

            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg mb-4">
              <p className="text-orange-800 dark:text-orange-300 font-semibold mb-2">Think: 600 = 6 × 100</p>
              <p className="text-gray-800 dark:text-gray-200">So: 4.15 × 600 = 4.15 × 6 × 100</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="bg-violet-100 dark:bg-violet-900/50 px-3 py-1 rounded font-mono text-violet-800 dark:text-violet-300">Step 1:</span>
                <span className="text-gray-800 dark:text-gray-200">4.15 × 6 = <strong>24.9</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-violet-100 dark:bg-violet-900/50 px-3 py-1 rounded font-mono text-violet-800 dark:text-violet-300">Step 2:</span>
                <span className="text-gray-800 dark:text-gray-200">24.9 × 100 = <strong>2490</strong></span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center text-xl font-bold text-green-700 dark:text-green-300">4.15 × 600 = 2490</p>
            </div>
          </div>
        </section>

        {/* Section 4: Multiplying by Thousands */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">4. Multiplying by Thousands (3000, 5000...)</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 3000 × 5.7</h3>

            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg mb-4">
              <p className="text-red-800 dark:text-red-300 font-semibold mb-2">Think: 3000 = 3 × 1000</p>
              <p className="text-gray-800 dark:text-gray-200">So: 3000 × 5.7 = 1000 × 3 × 5.7</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="bg-violet-100 dark:bg-violet-900/50 px-3 py-1 rounded font-mono text-violet-800 dark:text-violet-300">Step 1:</span>
                <span className="text-gray-800 dark:text-gray-200">3 × 5.7 = <strong>17.1</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-violet-100 dark:bg-violet-900/50 px-3 py-1 rounded font-mono text-violet-800 dark:text-violet-300">Step 2:</span>
                <span className="text-gray-800 dark:text-gray-200">1000 × 17.1 = <strong>17 100</strong></span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center text-xl font-bold text-green-700 dark:text-green-300">3000 × 5.7 = 17 100</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 8.25 × 5000</h3>

            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg mb-4">
              <p className="text-red-800 dark:text-red-300 font-semibold mb-2">Think: 5000 = 5 × 1000</p>
              <p className="text-gray-800 dark:text-gray-200">So: 8.25 × 5000 = 8.25 × 5 × 1000</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="bg-violet-100 dark:bg-violet-900/50 px-3 py-1 rounded font-mono text-violet-800 dark:text-violet-300">Step 1:</span>
                <span className="text-gray-800 dark:text-gray-200">8.25 × 5 = <strong>41.25</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-violet-100 dark:bg-violet-900/50 px-3 py-1 rounded font-mono text-violet-800 dark:text-violet-300">Step 2:</span>
                <span className="text-gray-800 dark:text-gray-200">41.25 × 1000 = <strong>41 250</strong></span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center text-xl font-bold text-green-700 dark:text-green-300">8.25 × 5000 = 41 250</p>
            </div>
          </div>
        </section>

        {/* Summary Box */}
        <section>
          <div className="bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/40 dark:to-purple-900/40 p-6 rounded-lg border-2 border-violet-300 dark:border-violet-700">
            <h3 className="font-bold text-xl mb-4 text-violet-800 dark:text-violet-300">📌 The Decomposition Method</h3>
            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <p><strong>Step 1:</strong> Break down the multiplier</p>
              <div className="grid md:grid-cols-3 gap-3 ml-4">
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                  <p>20 = 2 × 10</p>
                  <p>30 = 3 × 10</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                  <p>200 = 2 × 100</p>
                  <p>600 = 6 × 100</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                  <p>3000 = 3 × 1000</p>
                  <p>5000 = 5 × 1000</p>
                </div>
              </div>
              <p><strong>Step 2:</strong> Multiply by the single digit first</p>
              <p><strong>Step 3:</strong> Then multiply by 10, 100, or 1000 (move the decimal point)</p>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: Multiply by Tens
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Calculate: 0.63 × 20
              </p>
              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution1 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution1 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-2">20 = 2 × 10</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-1">Step 1: 0.63 × 2 = 1.26</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-1">Step 2: 1.26 × 10 = <strong>12.6</strong></p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Multiply by Tens
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Calculate: 5.1 × 40
              </p>
              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution2 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution2 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-2">40 = 4 × 10</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-1">Step 1: 5.1 × 4 = 20.4</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-1">Step 2: 20.4 × 10 = <strong>204</strong></p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Multiply by Hundreds
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Calculate: 0.732 × 300
              </p>
              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution3 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution3 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-2">300 = 3 × 100</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-1">Step 1: 0.732 × 3 = 2.196</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-1">Step 2: 2.196 × 100 = <strong>219.6</strong></p>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 4: Multiply by Thousands
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Calculate: 12.52 × 7000
              </p>
              <button
                onClick={() => setShowSolution4(!showSolution4)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution4 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution4 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-2">7000 = 7 × 1000</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-1">Step 1: 12.52 × 7 = 87.64</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-1">Step 2: 87.64 × 1000 = <strong>87 640</strong></p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Break down</strong> the multiplier: 20 = 2 × 10, 300 = 3 × 100, etc.</li>
            <li>Multiply by the <strong>single digit first</strong>, then by 10, 100, or 1000</li>
            <li>You can multiply in <strong>any order</strong> - the answer is the same!</li>
            <li>This method works for <strong>any</strong> multiple of 10, 100, or 1000</li>
            <li>Practice makes this method <strong>fast and easy</strong>!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MultiplyingByTensHundredsThousands;
