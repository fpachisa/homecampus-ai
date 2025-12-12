import { useState } from 'react';

const MultiplyBy10_100_1000 = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Multiplying by 10, 100 and 1000</h1>
        <p className="text-lg">Learn the patterns for multiplying by powers of 10</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Multiplying by 10 */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">1. Multiplying by 10</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Pattern</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When you multiply any number by 10, you <strong>add one zero</strong> to the end.
            </p>
          </div>

          {/* Visual examples */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Examples:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">1 × 10 = <strong className="text-green-600 dark:text-green-400">10</strong></p>
              </div>
              <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">3 × 10 = <strong className="text-green-600 dark:text-green-400">30</strong></p>
              </div>
              <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">12 × 10 = <strong className="text-green-600 dark:text-green-400">120</strong></p>
              </div>
              <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">245 × 10 = <strong className="text-green-600 dark:text-green-400">2,450</strong></p>
              </div>
              <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">728 × 10 = <strong className="text-green-600 dark:text-green-400">7,280</strong></p>
              </div>
              <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">8,990 × 10 = <strong className="text-green-600 dark:text-green-400">89,900</strong></p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">Why does this work?</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When you multiply by 10, each digit <strong>moves one place to the left</strong> in the place value chart.
              The empty ones place gets filled with a zero.
            </p>
          </div>
        </section>

        {/* Section 2: Multiplying by 100 */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">2. Multiplying by 100</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Pattern</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When you multiply any number by 100, you <strong>add two zeros</strong> to the end.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              This makes sense because 100 = 10 × 10, so × 100 = × 10 × 10
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Examples:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">1 × 100 = <strong className="text-blue-600 dark:text-blue-400">100</strong></p>
              </div>
              <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">3 × 100 = <strong className="text-blue-600 dark:text-blue-400">300</strong></p>
              </div>
              <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">12 × 100 = <strong className="text-blue-600 dark:text-blue-400">1,200</strong></p>
              </div>
              <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">27 × 100 = <strong className="text-blue-600 dark:text-blue-400">2,700</strong></p>
              </div>
              <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">245 × 100 = <strong className="text-blue-600 dark:text-blue-400">24,500</strong></p>
              </div>
              <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">4,992 × 100 = <strong className="text-blue-600 dark:text-blue-400">499,200</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Multiplying by 1000 */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">3. Multiplying by 1000</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Pattern</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When you multiply any number by 1000, you <strong>add three zeros</strong> to the end.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              This makes sense because 1000 = 10 × 10 × 10, so × 1000 = × 10 × 10 × 10
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Examples:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">3 × 1000 = <strong className="text-purple-600 dark:text-purple-400">3,000</strong></p>
              </div>
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">12 × 1000 = <strong className="text-purple-600 dark:text-purple-400">12,000</strong></p>
              </div>
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">165 × 1000 = <strong className="text-purple-600 dark:text-purple-400">165,000</strong></p>
              </div>
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">245 × 1000 = <strong className="text-purple-600 dark:text-purple-400">245,000</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Table */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">Summary Pattern</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="p-3 text-gray-900 dark:text-gray-100">Multiply by</th>
                  <th className="p-3 text-gray-900 dark:text-gray-100">3</th>
                  <th className="p-3 text-gray-900 dark:text-gray-100">12</th>
                  <th className="p-3 text-gray-900 dark:text-gray-100">245</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t dark:border-gray-600">
                  <td className="p-3 font-bold text-green-600 dark:text-green-400">× 10</td>
                  <td className="p-3 text-gray-900 dark:text-gray-100">30</td>
                  <td className="p-3 text-gray-900 dark:text-gray-100">120</td>
                  <td className="p-3 text-gray-900 dark:text-gray-100">2,450</td>
                </tr>
                <tr className="border-t dark:border-gray-600">
                  <td className="p-3 font-bold text-blue-600 dark:text-blue-400">× 100</td>
                  <td className="p-3 text-gray-900 dark:text-gray-100">300</td>
                  <td className="p-3 text-gray-900 dark:text-gray-100">1,200</td>
                  <td className="p-3 text-gray-900 dark:text-gray-100">24,500</td>
                </tr>
                <tr className="border-t dark:border-gray-600">
                  <td className="p-3 font-bold text-purple-600 dark:text-purple-400">× 1000</td>
                  <td className="p-3 text-gray-900 dark:text-gray-100">3,000</td>
                  <td className="p-3 text-gray-900 dark:text-gray-100">12,000</td>
                  <td className="p-3 text-gray-900 dark:text-gray-100">245,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Practice */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">Practice Problems</h2>

          <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">1. Multiply:</p>
            <div className="ml-4 space-y-1 text-gray-800 dark:text-gray-200">
              <p>a) 14 × 10 = ?</p>
              <p>b) 728 × 10 = ?</p>
              <p>c) 27 × 100 = ?</p>
              <p>d) 165 × 1000 = ?</p>
            </div>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solutions
            </button>
            {showSolution1 && (
              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-gray-800 dark:text-gray-200">
                <p><strong>a)</strong> 14 × 10 = 140 (add 1 zero)</p>
                <p><strong>b)</strong> 728 × 10 = 7,280 (add 1 zero)</p>
                <p><strong>c)</strong> 27 × 100 = 2,700 (add 2 zeros)</p>
                <p><strong>d)</strong> 165 × 1000 = 165,000 (add 3 zeros)</p>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
            <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">2. Raju and Xinyi noticed that 3 × 100 = 3 × 10 × 10. How about 3 × 1000?</p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded text-gray-800 dark:text-gray-200">
                <p>3 × 1000 can be written as:</p>
                <p className="font-mono ml-4">3 × 1000 = 3 × 10 × 10 × 10 = 3000</p>
                <p className="mt-2">We can also write it as:</p>
                <p className="font-mono ml-4">3 × 1000 = 3 × 10 × 100 = 30 × 100 = 3000</p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>× 10</strong>: Add ONE zero (digits shift left 1 place)</li>
            <li><strong>× 100</strong>: Add TWO zeros (digits shift left 2 places)</li>
            <li><strong>× 1000</strong>: Add THREE zeros (digits shift left 3 places)</li>
            <li>100 = 10 × 10, so × 100 = × 10 × 10</li>
            <li>1000 = 10 × 10 × 10, so × 1000 = × 10 × 10 × 10</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MultiplyBy10_100_1000;
