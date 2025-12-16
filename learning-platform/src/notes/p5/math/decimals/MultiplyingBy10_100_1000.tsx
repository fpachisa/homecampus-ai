import { useState } from 'react';

const MultiplyingBy10_100_1000 = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Multiplying Decimals by 10, 100, and 1000</h1>
        <p className="text-lg">Learn the shortcut: move the decimal point to the right!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Recall */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">1. Recall: Multiplying Decimals by Whole Numbers</h2>

          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border-l-4 border-emerald-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Quick Review:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Before we learn the shortcut, let's recall how decimals work with place value.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: 0.3 × 3</h3>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Visual representation */}
              <div className="flex gap-2">
                {[0, 1, 2].map((row) => (
                  <div key={row} className="flex flex-col gap-1">
                    {[0, 1, 2].map((col) => (
                      <div
                        key={col}
                        className="w-10 h-10 rounded-full bg-yellow-400 dark:bg-yellow-500 border-2 border-yellow-600 flex items-center justify-center text-xs font-bold text-yellow-900"
                      >
                        0.1
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="text-gray-800 dark:text-gray-200">
                <p className="mb-2">3 tenths × 3 = <strong>9 tenths</strong></p>
                <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">0.3 × 3 = 0.9</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: 0.03 × 3</h3>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Visual representation */}
              <div className="flex gap-2">
                {[0, 1, 2].map((row) => (
                  <div key={row} className="flex flex-col gap-1">
                    {[0, 1, 2].map((col) => (
                      <div
                        key={col}
                        className="w-10 h-10 rounded-full bg-pink-400 dark:bg-pink-500 border-2 border-pink-600 flex items-center justify-center text-xs font-bold text-pink-900"
                      >
                        0.01
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="text-gray-800 dark:text-gray-200">
                <p className="mb-2">3 hundredths × 3 = <strong>9 hundredths</strong></p>
                <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">0.03 × 3 = 0.09</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Multiplying by 10 */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">2. Multiplying by 10</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">The Pattern:</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              When you multiply a decimal by <strong>10</strong>, move the decimal point <strong>1 place to the right</strong>.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 0.3 × 10</h3>

            {/* Place Value Table */}
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-blue-100 dark:bg-blue-900/50 p-3 text-blue-800 dark:text-blue-300">Ones</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 p-3 text-gray-800 dark:text-gray-200">.</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-emerald-100 dark:bg-emerald-900/50 p-3 text-emerald-800 dark:text-emerald-300">Tenths</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">0</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">.</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">3</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="p-2 text-center text-gray-600 dark:text-gray-400">↓ × 10 (move decimal 1 place right)</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-emerald-600 dark:text-emerald-400">3</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">.</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center gap-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-yellow-600 flex items-center justify-center text-xs font-bold">0.1</div>
                  ))}
                </div>
                <span className="text-xl font-bold text-gray-800 dark:text-gray-200">× 10 →</span>
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-blue-400 border-2 border-blue-600 flex items-center justify-center text-xs font-bold">1</div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center mt-3 text-gray-800 dark:text-gray-200">
              3 tenths become <strong>3 ones</strong>
            </p>
            <p className="text-center text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-2">0.3 × 10 = 3</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 1.25 × 10</h3>

            {/* Place Value Table */}
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-purple-100 dark:bg-purple-900/50 p-3 text-purple-800 dark:text-purple-300">Tens</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-blue-100 dark:bg-blue-900/50 p-3 text-blue-800 dark:text-blue-300">Ones</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 p-3 text-gray-800 dark:text-gray-200">.</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-emerald-100 dark:bg-emerald-900/50 p-3 text-emerald-800 dark:text-emerald-300">Tenths</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-pink-100 dark:bg-pink-900/50 p-3 text-pink-800 dark:text-pink-300">Hundredths</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-400">-</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">1</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">.</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">2</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">5</td>
                  </tr>
                  <tr>
                    <td colSpan={5} className="p-2 text-center text-gray-600 dark:text-gray-400">↓ × 10 (move decimal 1 place right)</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-emerald-600 dark:text-emerald-400">1</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-emerald-600 dark:text-emerald-400">2</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">.</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-emerald-600 dark:text-emerald-400">5</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-400">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-xl font-bold text-emerald-600 dark:text-emerald-400">1.25 × 10 = 12.5</p>
          </div>
        </section>

        {/* Section 3: Multiplying by 100 and 1000 */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">3. Multiplying by 100 and 1000</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">× 100</h3>
              <p className="text-gray-800 dark:text-gray-200">
                Move the decimal point <strong>2 places to the right</strong>
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">× 1000</h3>
              <p className="text-gray-800 dark:text-gray-200">
                Move the decimal point <strong>3 places to the right</strong>
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 1.25 × 100</h3>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-indigo-100 dark:bg-indigo-900/50 p-3 text-indigo-800 dark:text-indigo-300">Hundreds</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-purple-100 dark:bg-purple-900/50 p-3 text-purple-800 dark:text-purple-300">Tens</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-blue-100 dark:bg-blue-900/50 p-3 text-blue-800 dark:text-blue-300">Ones</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 p-3 text-gray-800 dark:text-gray-200">.</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-emerald-100 dark:bg-emerald-900/50 p-3 text-emerald-800 dark:text-emerald-300">Tenths</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-pink-100 dark:bg-pink-900/50 p-3 text-pink-800 dark:text-pink-300">Hundredths</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-400">-</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-400">-</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">1</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">.</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">2</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">5</td>
                  </tr>
                  <tr>
                    <td colSpan={6} className="p-2 text-center text-gray-600 dark:text-gray-400">↓ × 100 (move decimal 2 places right)</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-emerald-600 dark:text-emerald-400">1</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-emerald-600 dark:text-emerald-400">2</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-emerald-600 dark:text-emerald-400">5</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">.</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-400">-</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-400">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-xl font-bold text-emerald-600 dark:text-emerald-400">1.25 × 100 = 125</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 1.25 × 1000</h3>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-rose-100 dark:bg-rose-900/50 p-2 text-rose-800 dark:text-rose-300">Thousands</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-indigo-100 dark:bg-indigo-900/50 p-2 text-indigo-800 dark:text-indigo-300">Hundreds</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-purple-100 dark:bg-purple-900/50 p-2 text-purple-800 dark:text-purple-300">Tens</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-blue-100 dark:bg-blue-900/50 p-2 text-blue-800 dark:text-blue-300">Ones</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 p-2 text-gray-800 dark:text-gray-200">.</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-emerald-100 dark:bg-emerald-900/50 p-2 text-emerald-800 dark:text-emerald-300">Tenths</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-pink-100 dark:bg-pink-900/50 p-2 text-pink-800 dark:text-pink-300">Hundredths</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-400">-</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-400">-</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-400">-</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200">1</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200">.</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200">2</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200">5</td>
                  </tr>
                  <tr>
                    <td colSpan={7} className="p-2 text-center text-gray-600 dark:text-gray-400">↓ × 1000 (move decimal 3 places right)</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center font-bold text-emerald-600 dark:text-emerald-400">1</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center font-bold text-emerald-600 dark:text-emerald-400">2</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center font-bold text-emerald-600 dark:text-emerald-400">5</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center font-bold text-emerald-600 dark:text-emerald-400">0</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200">.</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-400">-</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-400">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-xl font-bold text-emerald-600 dark:text-emerald-400">1.25 × 1000 = 1250</p>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
              Note: We add a 0 because we need to move 3 places but only have 2 decimal digits
            </p>
          </div>
        </section>

        {/* Summary Box */}
        <section>
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40 p-6 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
            <h3 className="font-bold text-xl mb-4 text-emerald-800 dark:text-emerald-300">📌 Quick Reference</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">× 10</p>
                <p className="text-gray-700 dark:text-gray-300">Move decimal</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">1 place right →</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">× 100</p>
                <p className="text-gray-700 dark:text-gray-300">Move decimal</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">2 places right →→</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">× 1000</p>
                <p className="text-gray-700 dark:text-gray-300">Move decimal</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">3 places right →→→</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: Multiply by 10
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Calculate: 0.41 × 10
              </p>
              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution1 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution1 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    Move decimal 1 place right: 0.41 → <strong>4.1</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Multiply by 100
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Calculate: 0.41 × 100
              </p>
              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution2 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution2 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    Move decimal 2 places right: 0.41 → <strong>41</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Multiply by 1000
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Calculate: 0.41 × 1000
              </p>
              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution3 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution3 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    Move decimal 3 places right: 0.41 → 4.1 → 41 → <strong>410</strong>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Add a zero because we need 3 places but only have 2 decimal digits)
                  </p>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 4: With Thousandths
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Calculate: 2.002 × 100
              </p>
              <button
                onClick={() => setShowSolution4(!showSolution4)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution4 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution4 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    Move decimal 2 places right: 2.002 → <strong>200.2</strong>
                  </p>
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
            <li>Multiplying by <strong>10</strong>: Move decimal point <strong>1 place right</strong></li>
            <li>Multiplying by <strong>100</strong>: Move decimal point <strong>2 places right</strong></li>
            <li>Multiplying by <strong>1000</strong>: Move decimal point <strong>3 places right</strong></li>
            <li>If you run out of digits, <strong>add zeros</strong> as needed</li>
            <li>The digits stay the same - only the decimal point moves!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MultiplyingBy10_100_1000;
