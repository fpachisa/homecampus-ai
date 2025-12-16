import { useState } from 'react';

const DividingByTensHundredsThousands = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Dividing by Tens, Hundreds, and Thousands</h1>
        <p className="text-lg">Learn to divide decimals by 20, 30, 200, 600, 8000, and more!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Strategy */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-amber-800 dark:text-amber-300">1. The Decomposition Strategy for Division</h2>

          <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Idea:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Just like multiplication, break down the divisor into smaller parts:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li><strong>20</strong> = 2 × 10 → Divide by 2, then divide by 10</li>
              <li><strong>30</strong> = 3 × 10 → Divide by 3, then divide by 10</li>
              <li><strong>400</strong> = 4 × 100 → Divide by 4, then divide by 100</li>
              <li><strong>8000</strong> = 8 × 1000 → Divide by 8, then divide by 1000</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 mb-4">
            <p className="text-gray-800 dark:text-gray-200">
              <strong>💡 Remember:</strong> You can divide in any order! Divide by the single digit first, then by 10, 100, or 1000.
            </p>
          </div>
        </section>

        {/* Section 2: Dividing by Tens */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-amber-800 dark:text-amber-300">2. Dividing by Tens (20, 30, 40...)</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 6.3 ÷ 30</h3>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4">
              <p className="text-blue-800 dark:text-blue-300 font-semibold mb-2">Think: 30 = 3 × 10</p>
              <p className="text-gray-800 dark:text-gray-200">So: 6.3 ÷ 30 = 6.3 ÷ 3 ÷ 10</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="bg-amber-100 dark:bg-amber-900/50 px-3 py-1 rounded font-mono text-amber-800 dark:text-amber-300">Step 1:</span>
                <span className="text-gray-800 dark:text-gray-200">6.3 ÷ 3 = <strong>2.1</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-amber-100 dark:bg-amber-900/50 px-3 py-1 rounded font-mono text-amber-800 dark:text-amber-300">Step 2:</span>
                <span className="text-gray-800 dark:text-gray-200">2.1 ÷ 10 = <strong>0.21</strong></span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center text-xl font-bold text-green-700 dark:text-green-300">6.3 ÷ 30 = 0.21</p>
            </div>

            {/* Visual representation */}
            <div className="mt-4 flex justify-center">
              <div className="flex items-center gap-2 text-sm">
                <span className="px-3 py-2 bg-amber-200 dark:bg-amber-800 rounded text-amber-800 dark:text-amber-200">6.3</span>
                <span className="text-gray-600 dark:text-gray-400">÷ 3 →</span>
                <span className="px-3 py-2 bg-blue-200 dark:bg-blue-800 rounded text-blue-800 dark:text-blue-200">2.1</span>
                <span className="text-gray-600 dark:text-gray-400">÷ 10 →</span>
                <span className="px-3 py-2 bg-green-200 dark:bg-green-800 rounded text-green-800 dark:text-green-200 font-bold">0.21</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 8.16 ÷ 20</h3>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4">
              <p className="text-blue-800 dark:text-blue-300 font-semibold mb-2">Think: 20 = 2 × 10</p>
              <p className="text-gray-800 dark:text-gray-200">So: 8.16 ÷ 20 = 8.16 ÷ 2 ÷ 10</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="bg-amber-100 dark:bg-amber-900/50 px-3 py-1 rounded font-mono text-amber-800 dark:text-amber-300">Step 1:</span>
                <span className="text-gray-800 dark:text-gray-200">8.16 ÷ 2 = <strong>4.08</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-amber-100 dark:bg-amber-900/50 px-3 py-1 rounded font-mono text-amber-800 dark:text-amber-300">Step 2:</span>
                <span className="text-gray-800 dark:text-gray-200">4.08 ÷ 10 = <strong>0.408</strong></span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center text-xl font-bold text-green-700 dark:text-green-300">8.16 ÷ 20 = 0.408</p>
            </div>

            <div className="mt-4 bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
              <p className="text-purple-800 dark:text-purple-300 font-semibold mb-1">Alternative method:</p>
              <div className="flex justify-center items-center gap-2 text-sm">
                <span className="text-gray-700 dark:text-gray-300">8.16</span>
                <span className="text-gray-600 dark:text-gray-400">÷ 10 →</span>
                <span className="text-gray-700 dark:text-gray-300">0.816</span>
                <span className="text-gray-600 dark:text-gray-400">÷ 2 →</span>
                <span className="font-bold text-purple-700 dark:text-purple-300">0.408</span>
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">Same answer either way!</p>
            </div>
          </div>
        </section>

        {/* Section 3: Dividing by Hundreds */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-amber-800 dark:text-amber-300">3. Dividing by Hundreds (200, 400, 600...)</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 100.4 ÷ 400</h3>

            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg mb-4">
              <p className="text-orange-800 dark:text-orange-300 font-semibold mb-2">Think: 400 = 4 × 100</p>
              <p className="text-gray-800 dark:text-gray-200">So: 100.4 ÷ 400 = 100.4 ÷ 4 ÷ 100</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="bg-amber-100 dark:bg-amber-900/50 px-3 py-1 rounded font-mono text-amber-800 dark:text-amber-300">Step 1:</span>
                <span className="text-gray-800 dark:text-gray-200">100.4 ÷ 4 = <strong>25.1</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-amber-100 dark:bg-amber-900/50 px-3 py-1 rounded font-mono text-amber-800 dark:text-amber-300">Step 2:</span>
                <span className="text-gray-800 dark:text-gray-200">25.1 ÷ 100 = <strong>0.251</strong></span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center text-xl font-bold text-green-700 dark:text-green-300">100.4 ÷ 400 = 0.251</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 72 ÷ 600</h3>

            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg mb-4">
              <p className="text-orange-800 dark:text-orange-300 font-semibold mb-2">Think: 600 = 6 × 100</p>
              <p className="text-gray-800 dark:text-gray-200">So: 72 ÷ 600 = 72 ÷ 6 ÷ 100</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="bg-amber-100 dark:bg-amber-900/50 px-3 py-1 rounded font-mono text-amber-800 dark:text-amber-300">Step 1:</span>
                <span className="text-gray-800 dark:text-gray-200">72 ÷ 6 = <strong>12</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-amber-100 dark:bg-amber-900/50 px-3 py-1 rounded font-mono text-amber-800 dark:text-amber-300">Step 2:</span>
                <span className="text-gray-800 dark:text-gray-200">12 ÷ 100 = <strong>0.12</strong></span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center text-xl font-bold text-green-700 dark:text-green-300">72 ÷ 600 = 0.12</p>
            </div>
          </div>
        </section>

        {/* Section 4: Dividing by Thousands */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-amber-800 dark:text-amber-300">4. Dividing by Thousands (2000, 8000...)</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 208 ÷ 8000</h3>

            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg mb-4">
              <p className="text-red-800 dark:text-red-300 font-semibold mb-2">Think: 8000 = 8 × 1000</p>
              <p className="text-gray-800 dark:text-gray-200">So: 208 ÷ 8000 = 208 ÷ 8 ÷ 1000</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="bg-amber-100 dark:bg-amber-900/50 px-3 py-1 rounded font-mono text-amber-800 dark:text-amber-300">Step 1:</span>
                <span className="text-gray-800 dark:text-gray-200">208 ÷ 8 = <strong>26</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-amber-100 dark:bg-amber-900/50 px-3 py-1 rounded font-mono text-amber-800 dark:text-amber-300">Step 2:</span>
                <span className="text-gray-800 dark:text-gray-200">26 ÷ 1000 = <strong>0.026</strong></span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center text-xl font-bold text-green-700 dark:text-green-300">208 ÷ 8000 = 0.026</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 9084 ÷ 3000</h3>

            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg mb-4">
              <p className="text-red-800 dark:text-red-300 font-semibold mb-2">Think: 3000 = 3 × 1000</p>
              <p className="text-gray-800 dark:text-gray-200">So: 9084 ÷ 3000 = 9084 ÷ 3 ÷ 1000</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="bg-amber-100 dark:bg-amber-900/50 px-3 py-1 rounded font-mono text-amber-800 dark:text-amber-300">Step 1:</span>
                <span className="text-gray-800 dark:text-gray-200">9084 ÷ 3 = <strong>3028</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-amber-100 dark:bg-amber-900/50 px-3 py-1 rounded font-mono text-amber-800 dark:text-amber-300">Step 2:</span>
                <span className="text-gray-800 dark:text-gray-200">3028 ÷ 1000 = <strong>3.028</strong></span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center text-xl font-bold text-green-700 dark:text-green-300">9084 ÷ 3000 = 3.028</p>
            </div>
          </div>
        </section>

        {/* Summary Box */}
        <section>
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 p-6 rounded-lg border-2 border-amber-300 dark:border-amber-700">
            <h3 className="font-bold text-xl mb-4 text-amber-800 dark:text-amber-300">📌 The Decomposition Method for Division</h3>
            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <p><strong>Step 1:</strong> Break down the divisor</p>
              <div className="grid md:grid-cols-3 gap-3 ml-4">
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                  <p>20 = 2 × 10</p>
                  <p>40 = 4 × 10</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                  <p>400 = 4 × 100</p>
                  <p>600 = 6 × 100</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                  <p>2000 = 2 × 1000</p>
                  <p>8000 = 8 × 1000</p>
                </div>
              </div>
              <p><strong>Step 2:</strong> Divide by the single digit first</p>
              <p><strong>Step 3:</strong> Then divide by 10, 100, or 1000 (move decimal LEFT)</p>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-amber-800 dark:text-amber-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: Divide by Tens
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Calculate: 188 ÷ 40
              </p>
              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution1 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution1 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-2">40 = 4 × 10</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-1">Step 1: 188 ÷ 4 = 47</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-1">Step 2: 47 ÷ 10 = <strong>4.7</strong></p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Divide by Tens
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Calculate: 0.64 ÷ 20
              </p>
              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution2 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution2 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-2">20 = 2 × 10</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-1">Step 1: 0.64 ÷ 2 = 0.32</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-1">Step 2: 0.32 ÷ 10 = <strong>0.032</strong></p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Divide by Hundreds
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Calculate: 6 ÷ 200
              </p>
              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution3 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution3 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-2">200 = 2 × 100</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-1">Step 1: 6 ÷ 2 = 3</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-1">Step 2: 3 ÷ 100 = <strong>0.03</strong></p>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 4: Divide by Thousands
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Calculate: 84 ÷ 2000
              </p>
              <button
                onClick={() => setShowSolution4(!showSolution4)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution4 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution4 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-2">2000 = 2 × 1000</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-1">Step 1: 84 ÷ 2 = 42</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-1">Step 2: 42 ÷ 1000 = <strong>0.042</strong></p>
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
            <li><strong>Break down</strong> the divisor: 30 = 3 × 10, 400 = 4 × 100, etc.</li>
            <li>Divide by the <strong>single digit first</strong>, then by 10, 100, or 1000</li>
            <li>You can divide in <strong>any order</strong> - the answer is the same!</li>
            <li>When dividing by 10/100/1000, move decimal <strong>LEFT</strong></li>
            <li>Add <strong>leading zeros</strong> when needed (e.g., 0.032)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DividingByTensHundredsThousands;
