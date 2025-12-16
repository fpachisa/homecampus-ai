import { useState } from 'react';

const DividingBy10_100_1000 = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Dividing Decimals by 10, 100, and 1000</h1>
        <p className="text-lg">Learn the shortcut: move the decimal point to the left!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Recall */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800 dark:text-cyan-300">1. Recall: Dividing Decimals by Whole Numbers</h2>

          <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border-l-4 border-cyan-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Quick Review:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Before we learn the shortcut for dividing by 10, 100, and 1000, let's recall basic decimal division.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: 0.6 ÷ 2</h3>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Visual representation */}
              <div className="flex flex-col gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-yellow-400 dark:bg-yellow-500 border-2 border-yellow-600 flex items-center justify-center text-xs font-bold text-yellow-900">0.1</div>
                  ))}
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-yellow-400 dark:bg-yellow-500 border-2 border-yellow-600 flex items-center justify-center text-xs font-bold text-yellow-900">0.1</div>
                  ))}
                </div>
              </div>
              <div className="text-gray-800 dark:text-gray-200">
                <p className="mb-2">6 tenths ÷ 2 = <strong>3 tenths</strong></p>
                <p className="text-xl font-bold text-cyan-600 dark:text-cyan-400">0.6 ÷ 2 = 0.3</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: 1.5 ÷ 3</h3>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-3">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Think:</strong> 1 one = 10 tenths, so 1.5 = 15 tenths
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                15 tenths ÷ 3 = 5 tenths = 0.5
              </p>
            </div>
            <p className="text-xl font-bold text-cyan-600 dark:text-cyan-400 text-center">1.5 ÷ 3 = 0.5</p>
          </div>
        </section>

        {/* Section 2: Dividing by 10, 100, 1000 */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800 dark:text-cyan-300">2. Dividing by 10, 100, and 1000</h2>

          <div className="bg-rose-50 dark:bg-rose-900/30 p-6 rounded-lg border-l-4 border-rose-500 mb-4">
            <h3 className="font-semibold text-rose-800 dark:text-rose-300 mb-2">The Opposite Pattern:</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              When dividing by 10, 100, or 1000, move the decimal point <strong>to the LEFT</strong>!
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              (This is the opposite of multiplication, where we move RIGHT)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">÷ 10</h3>
              <p className="text-gray-800 dark:text-gray-200">
                Move decimal <strong>1 place LEFT</strong>
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">÷ 100</h3>
              <p className="text-gray-800 dark:text-gray-200">
                Move decimal <strong>2 places LEFT</strong>
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">÷ 1000</h3>
              <p className="text-gray-800 dark:text-gray-200">
                Move decimal <strong>3 places LEFT</strong>
              </p>
            </div>
          </div>

          {/* Example: Divide by 10 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 12.4 ÷ 10</h3>

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
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">1</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">2</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">.</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">4</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-400">-</td>
                  </tr>
                  <tr>
                    <td colSpan={5} className="p-2 text-center text-gray-600 dark:text-gray-400">↓ ÷ 10 (move decimal 1 place LEFT)</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-400">-</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-cyan-600 dark:text-cyan-400">1</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">.</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-cyan-600 dark:text-cyan-400">2</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-cyan-600 dark:text-cyan-400">4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-xl font-bold text-cyan-600 dark:text-cyan-400">12.4 ÷ 10 = 1.24</p>
          </div>

          {/* Example: Divide by 100 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 12.4 ÷ 100</h3>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-purple-100 dark:bg-purple-900/50 p-2 text-purple-800 dark:text-purple-300">Tens</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-blue-100 dark:bg-blue-900/50 p-2 text-blue-800 dark:text-blue-300">Ones</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 p-2 text-gray-800 dark:text-gray-200">.</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-emerald-100 dark:bg-emerald-900/50 p-2 text-emerald-800 dark:text-emerald-300">Tenths</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-pink-100 dark:bg-pink-900/50 p-2 text-pink-800 dark:text-pink-300">Hundredths</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-amber-100 dark:bg-amber-900/50 p-2 text-amber-800 dark:text-amber-300">Thousandths</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200">1</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200">2</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200">.</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200">4</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-400">-</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-400">-</td>
                  </tr>
                  <tr>
                    <td colSpan={6} className="p-2 text-center text-gray-600 dark:text-gray-400">↓ ÷ 100 (move decimal 2 places LEFT)</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-400">-</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center font-bold text-cyan-600 dark:text-cyan-400">0</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200">.</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center font-bold text-cyan-600 dark:text-cyan-400">1</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center font-bold text-cyan-600 dark:text-cyan-400">2</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-2 text-center font-bold text-cyan-600 dark:text-cyan-400">4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-xl font-bold text-cyan-600 dark:text-cyan-400">12.4 ÷ 100 = 0.124</p>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
              Note: We add a leading zero (0.) because the number becomes less than 1
            </p>
          </div>

          {/* Example: Small number divided by 10 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 1.3 ÷ 10</h3>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-blue-100 dark:bg-blue-900/50 p-3 text-blue-800 dark:text-blue-300">Ones</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 p-3 text-gray-800 dark:text-gray-200">.</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-emerald-100 dark:bg-emerald-900/50 p-3 text-emerald-800 dark:text-emerald-300">Tenths</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 bg-pink-100 dark:bg-pink-900/50 p-3 text-pink-800 dark:text-pink-300">Hundredths</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">1</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">.</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">3</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-400">-</td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="p-2 text-center text-gray-600 dark:text-gray-400">↓ ÷ 10 (move decimal 1 place LEFT)</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-cyan-600 dark:text-cyan-400">0</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">.</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-cyan-600 dark:text-cyan-400">1</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-cyan-600 dark:text-cyan-400">3</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-xl font-bold text-cyan-600 dark:text-cyan-400">1.3 ÷ 10 = 0.13</p>
          </div>
        </section>

        {/* Multiplication vs Division Comparison */}
        <section>
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/40 dark:to-blue-900/40 p-6 rounded-lg border-2 border-cyan-300 dark:border-cyan-700">
            <h3 className="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">📌 Multiplication vs Division</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">× (Multiplication)</h4>
                <p className="text-gray-700 dark:text-gray-300">Move decimal <strong>RIGHT →</strong></p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Number gets BIGGER</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">÷ (Division)</h4>
                <p className="text-gray-700 dark:text-gray-300">Move decimal <strong>← LEFT</strong></p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Number gets SMALLER</p>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Box */}
        <section>
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
            <h3 className="font-bold text-xl mb-4 text-blue-800 dark:text-blue-300">📌 Quick Reference</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">÷ 10</p>
                <p className="text-gray-700 dark:text-gray-300">Move decimal</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">← 1 place left</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">÷ 100</p>
                <p className="text-gray-700 dark:text-gray-300">Move decimal</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">←← 2 places left</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">÷ 1000</p>
                <p className="text-gray-700 dark:text-gray-300">Move decimal</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">←←← 3 places left</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800 dark:text-cyan-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: Divide by 10
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Calculate: 45.6 ÷ 10
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
                    Move decimal 1 place left: 45.6 → <strong>4.56</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Divide by 100
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Calculate: 7.5 ÷ 100
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
                    Move decimal 2 places left: 7.5 → 0.75 → <strong>0.075</strong>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Add a zero before 7 since we need to move 2 places)
                  </p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Divide by 1000
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Calculate: 234 ÷ 1000
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
                    Move decimal 3 places left: 234. → 23.4 → 2.34 → <strong>0.234</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 4: Challenge
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Calculate: 2.002 ÷ 10
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
                    Move decimal 1 place left: 2.002 → <strong>0.2002</strong>
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
            <li>Dividing by <strong>10</strong>: Move decimal point <strong>1 place left</strong></li>
            <li>Dividing by <strong>100</strong>: Move decimal point <strong>2 places left</strong></li>
            <li>Dividing by <strong>1000</strong>: Move decimal point <strong>3 places left</strong></li>
            <li>Add <strong>leading zeros</strong> (e.g., 0.075) when the number becomes less than 1</li>
            <li>Division makes numbers <strong>smaller</strong>, so decimal moves <strong>LEFT</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DividingBy10_100_1000;
