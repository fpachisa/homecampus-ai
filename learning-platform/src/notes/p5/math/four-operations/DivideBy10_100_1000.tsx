import { useState } from 'react';

const DivideBy10_100_1000 = () => {
  const [showSolution1, setShowSolution1] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Dividing by 10, 100 and 1000</h1>
        <p className="text-lg">Learn the patterns for dividing by powers of 10</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Dividing by 10 */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">1. Dividing by 10</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Pattern</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When you divide a number by 10, you <strong>remove one zero</strong> from the end.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              This is the opposite of multiplying by 10!
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Examples:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100">10 ÷ 10 = <strong className="text-orange-600 dark:text-orange-400">1</strong></p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Because 1 × 10 = 10</p>
              </div>
              <div className="p-4 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100">100 ÷ 10 = <strong className="text-orange-600 dark:text-orange-400">10</strong></p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Because 10 × 10 = 100</p>
              </div>
              <div className="p-4 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100">320 ÷ 10 = <strong className="text-orange-600 dark:text-orange-400">32</strong></p>
              </div>
              <div className="p-4 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100">32,000 ÷ 10 = <strong className="text-orange-600 dark:text-orange-400">3,200</strong></p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">Why does this work?</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When you divide by 10, each digit <strong>moves one place to the right</strong> in the place value chart.
              The zero at the end disappears!
            </p>
          </div>
        </section>

        {/* Section 2: Dividing by 100 */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">2. Dividing by 100</h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Pattern</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When you divide by 100, you <strong>remove two zeros</strong> from the end.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Examples:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-100 dark:bg-red-900/40 rounded-lg">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100">100 ÷ 100 = <strong className="text-red-600 dark:text-red-400">1</strong></p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Because 1 × 100 = 100</p>
              </div>
              <div className="p-4 bg-red-100 dark:bg-red-900/40 rounded-lg">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100">32,000 ÷ 100 = <strong className="text-red-600 dark:text-red-400">320</strong></p>
              </div>
              <div className="p-4 bg-red-100 dark:bg-red-900/40 rounded-lg">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100">5,900 ÷ 100 = <strong className="text-red-600 dark:text-red-400">59</strong></p>
              </div>
              <div className="p-4 bg-red-100 dark:bg-red-900/40 rounded-lg">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100">245,000 ÷ 100 = <strong className="text-red-600 dark:text-red-400">2,450</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Dividing by 1000 */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">3. Dividing by 1000</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Pattern</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When you divide by 1000, you <strong>remove three zeros</strong> from the end.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Examples:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100">32,000 ÷ 1000 = <strong className="text-purple-600 dark:text-purple-400">32</strong></p>
              </div>
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100">59,000 ÷ 1000 = <strong className="text-purple-600 dark:text-purple-400">59</strong></p>
              </div>
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100">245,000 ÷ 1000 = <strong className="text-purple-600 dark:text-purple-400">245</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Table */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">Summary: Division Patterns</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="p-3 text-gray-900 dark:text-gray-100">Divide</th>
                  <th className="p-3 text-gray-900 dark:text-gray-100">32,000</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t dark:border-gray-600">
                  <td className="p-3 font-bold text-orange-600 dark:text-orange-400">÷ 10</td>
                  <td className="p-3 text-gray-900 dark:text-gray-100">3,200</td>
                </tr>
                <tr className="border-t dark:border-gray-600">
                  <td className="p-3 font-bold text-red-600 dark:text-red-400">÷ 100</td>
                  <td className="p-3 text-gray-900 dark:text-gray-100">320</td>
                </tr>
                <tr className="border-t dark:border-gray-600">
                  <td className="p-3 font-bold text-purple-600 dark:text-purple-400">÷ 1000</td>
                  <td className="p-3 text-gray-900 dark:text-gray-100">32</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Connection to Multiplication */}
        <section>
          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Division is the Opposite of Multiplication!</h3>
            <div className="space-y-2 text-gray-800 dark:text-gray-200">
              <p>If 245 × 10 = 2,450, then 2,450 ÷ 10 = 245</p>
              <p>If 245 × 100 = 24,500, then 24,500 ÷ 100 = 245</p>
              <p>If 245 × 1000 = 245,000, then 245,000 ÷ 1000 = 245</p>
            </div>
          </div>
        </section>

        {/* Practice */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">Practice Problems</h2>

          <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
            <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Find the quotients:</p>
            <div className="ml-4 space-y-1 text-gray-800 dark:text-gray-200">
              <p>a) 590 ÷ 10 = ?</p>
              <p>b) 5,900 ÷ 100 = ?</p>
              <p>c) 59,000 ÷ 1000 = ?</p>
              <p>d) 480,000 ÷ 100 = ?</p>
              <p>e) 7,000,000 ÷ 1000 = ?</p>
            </div>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solutions
            </button>
            {showSolution1 && (
              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-gray-800 dark:text-gray-200">
                <p><strong>a)</strong> 590 ÷ 10 = 59 (remove 1 zero)</p>
                <p><strong>b)</strong> 5,900 ÷ 100 = 59 (remove 2 zeros)</p>
                <p><strong>c)</strong> 59,000 ÷ 1000 = 59 (remove 3 zeros)</p>
                <p><strong>d)</strong> 480,000 ÷ 100 = 4,800 (remove 2 zeros)</p>
                <p><strong>e)</strong> 7,000,000 ÷ 1000 = 7,000 (remove 3 zeros)</p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>÷ 10</strong>: Remove ONE zero (digits shift right 1 place)</li>
            <li><strong>÷ 100</strong>: Remove TWO zeros (digits shift right 2 places)</li>
            <li><strong>÷ 1000</strong>: Remove THREE zeros (digits shift right 3 places)</li>
            <li>Division is the <strong>inverse</strong> (opposite) of multiplication</li>
            <li>You can check your answer by multiplying back!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DivideBy10_100_1000;
