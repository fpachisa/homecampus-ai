import { useState } from 'react';

const UnderstandingRate = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Understanding Rate</h1>
        <p className="text-lg">Learn what rate means and how to calculate it using division and multiplication</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is Rate? */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">1. What is Rate?</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              A <strong>rate</strong> tells us how much of one quantity there is for every one unit of another quantity.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">The Word "Per":</h3>
            <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded mb-4">
              <p className="text-gray-800 dark:text-gray-200 text-lg">
                <strong>"Per"</strong> means <strong>"every"</strong> or <strong>"for each"</strong>
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p className="text-gray-800 dark:text-gray-200">
                  📄 50 pages <strong>per minute</strong>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">= 50 pages every minute</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded">
                <p className="text-gray-800 dark:text-gray-200">
                  💵 $15 <strong>per hour</strong>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">= $15 for each hour</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded">
                <p className="text-gray-800 dark:text-gray-200">
                  🚗 80 km <strong>per hour</strong>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">= 80 km every hour</p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/30 p-4 rounded">
                <p className="text-gray-800 dark:text-gray-200">
                  💧 2 litres <strong>per hour</strong>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">= 2 litres for each hour</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500">
            <p className="text-gray-800 dark:text-gray-200">
              <strong>Real-life examples:</strong> Speed of a car, price per item, words typed per minute, water collected per hour — these are all rates!
            </p>
          </div>
        </section>

        {/* Section 2: Finding Unit Rate */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">2. Finding the Rate (Unit Rate)</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Idea:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              To find the rate, we <strong>divide</strong> to find how much for <strong>1 unit</strong>.
            </p>
          </div>

          {/* Rate Table Diagram */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Using a Rate Table:</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">A photocopier takes 5 minutes to print 300 pages. How many pages does it print per minute?</p>

            <div className="flex justify-center mb-4">
              <div className="relative">
                <table className="border-collapse border-2 border-green-500">
                  <tbody>
                    <tr>
                      <td className="border-2 border-green-500 px-8 py-3 bg-green-100 dark:bg-green-900/50 text-gray-900 dark:text-gray-100 font-semibold">5 min</td>
                      <td className="border-2 border-green-500 px-8 py-3 bg-green-100 dark:bg-green-900/50 text-gray-900 dark:text-gray-100 font-semibold">300 pages</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-green-500 px-8 py-3 bg-green-50 dark:bg-green-900/30 text-gray-900 dark:text-gray-100">1 min</td>
                      <td className="border-2 border-green-500 px-8 py-3 bg-green-50 dark:bg-green-900/30 text-gray-900 dark:text-gray-100">? pages</td>
                    </tr>
                  </tbody>
                </table>
                {/* Division arrows - aligned with second row */}
                <div className="absolute -left-8 top-3/4 -translate-y-1/2 text-pink-600 dark:text-pink-400 font-bold text-sm">÷5</div>
                <div className="absolute -right-8 top-3/4 -translate-y-1/2 text-pink-600 dark:text-pink-400 font-bold text-sm">÷5</div>
              </div>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded">
              <p className="text-gray-800 dark:text-gray-200 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200">Since we divide 5 min by 5 to get 1 min, we also divide 300 pages by 5.</p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">300 ÷ 5 = 60</p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">The photocopier prints <strong>60 pages per minute</strong>.</p>
            </div>
          </div>

          {/* More Examples */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">More Examples:</h3>

            <div className="space-y-4">
              {/* Example 1 */}
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example 1: Distance</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">A robot walks 20 m in 4 minutes. How far does it walk in 1 minute?</p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
                  <p className="text-gray-800 dark:text-gray-200">20 m ÷ 4 = <strong>5 m per minute</strong></p>
                </div>
              </div>

              {/* Example 2 */}
              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example 2: Money</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">Mark is paid $75 for working 5 hours. What is the rate of his pay per hour?</p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
                  <p className="text-gray-800 dark:text-gray-200">$75 ÷ 5 = <strong>$15 per hour</strong></p>
                </div>
              </div>

              {/* Example 3 */}
              <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example 3: Water</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">12 litres of water was collected from a dripping tap in 6 hours. How much water was collected per hour?</p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
                  <p className="text-gray-800 dark:text-gray-200">12 ℓ ÷ 6 = <strong>2 ℓ per hour</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Using Rate to Calculate */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">3. Using Rate to Calculate</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Idea:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When we know the rate and want to find a larger amount, we <strong>multiply</strong>.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Using Rate to Find Total</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Miriam is paid $11 an hour for working at a restaurant. How much is she paid for working 10 hours?</p>

            <div className="flex justify-center mb-4">
              <div className="relative">
                <table className="border-collapse border-2 border-green-500">
                  <tbody>
                    <tr>
                      <td className="border-2 border-green-500 px-8 py-3 bg-green-100 dark:bg-green-900/50 text-gray-900 dark:text-gray-100 font-semibold">$11</td>
                      <td className="border-2 border-green-500 px-8 py-3 bg-green-100 dark:bg-green-900/50 text-gray-900 dark:text-gray-100 font-semibold">1 h</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-green-500 px-8 py-3 bg-green-50 dark:bg-green-900/30 text-gray-900 dark:text-gray-100">$?</td>
                      <td className="border-2 border-green-500 px-8 py-3 bg-green-50 dark:bg-green-900/30 text-gray-900 dark:text-gray-100">10 h</td>
                    </tr>
                  </tbody>
                </table>
                {/* Multiplication arrows - aligned with second row */}
                <div className="absolute -left-10 top-3/4 -translate-y-1/2 text-pink-600 dark:text-pink-400 font-bold text-sm">×10</div>
                <div className="absolute -right-10 top-3/4 -translate-y-1/2 text-pink-600 dark:text-pink-400 font-bold text-sm">×10</div>
              </div>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded">
              <p className="text-gray-800 dark:text-gray-200 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200">Since we multiply 1 h by 10 to get 10 h, we also multiply $11 by 10.</p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">$11 × 10 = $110</p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">Miriam is paid <strong>$110</strong> for working 10 hours.</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Another Example:</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">In 2 hours, Susan cycles 58 km. At this rate, how far can she cycle in 6 hours?</p>

            <div className="flex justify-center mb-4">
              <div className="relative">
                <table className="border-collapse border-2 border-green-500">
                  <tbody>
                    <tr>
                      <td className="border-2 border-green-500 px-6 py-3 bg-green-100 dark:bg-green-900/50 text-gray-900 dark:text-gray-100 font-semibold">2 h</td>
                      <td className="border-2 border-green-500 px-6 py-3 bg-green-100 dark:bg-green-900/50 text-gray-900 dark:text-gray-100 font-semibold">58 km</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-green-500 px-6 py-3 bg-green-50 dark:bg-green-900/30 text-gray-900 dark:text-gray-100">6 h</td>
                      <td className="border-2 border-green-500 px-6 py-3 bg-green-50 dark:bg-green-900/30 text-gray-900 dark:text-gray-100">? km</td>
                    </tr>
                  </tbody>
                </table>
                {/* Multiplication arrows - aligned with second row */}
                <div className="absolute -left-8 top-3/4 -translate-y-1/2 text-pink-600 dark:text-pink-400 font-bold text-sm">×3</div>
                <div className="absolute -right-8 top-3/4 -translate-y-1/2 text-pink-600 dark:text-pink-400 font-bold text-sm">×3</div>
              </div>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded">
              <p className="text-gray-800 dark:text-gray-200 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200">Since 2 h × 3 = 6 h, we multiply 58 km by 3.</p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">58 km × 3 = 174 km</p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">She can cycle <strong>174 km</strong> in 6 hours.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Two-Step Rate Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">4. Two-Step Rate Problems</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Strategy:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Sometimes we need to: <br />
              <strong>Step 1:</strong> Find the unit rate (÷) <br />
              <strong>Step 2:</strong> Then calculate the target amount (×)
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Wheel Revolutions</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">A wheel can make 42 revolutions in 3 minutes. At this rate, how many revolutions can it make in 7 minutes?</p>

            <div className="flex justify-center mb-4">
              <div className="relative">
                <table className="border-collapse border-2 border-green-500">
                  <tbody>
                    <tr>
                      <td className="border-2 border-green-500 px-4 py-2 bg-green-100 dark:bg-green-900/50 text-gray-900 dark:text-gray-100 text-sm">42 revolutions</td>
                      <td className="border-2 border-green-500 px-4 py-2 bg-green-100 dark:bg-green-900/50 text-gray-900 dark:text-gray-100 text-sm">3 min</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-green-500 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-gray-900 dark:text-gray-100 text-sm">14 revolutions</td>
                      <td className="border-2 border-green-500 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-gray-900 dark:text-gray-100 text-sm">1 min</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-green-500 px-4 py-2 bg-green-50 dark:bg-green-900/30 text-gray-900 dark:text-gray-100 text-sm">? revolutions</td>
                      <td className="border-2 border-green-500 px-4 py-2 bg-green-50 dark:bg-green-900/30 text-gray-900 dark:text-gray-100 text-sm">7 min</td>
                    </tr>
                  </tbody>
                </table>
                {/* Arrows - aligned with row 2 and row 3 */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-pink-600 dark:text-pink-400 font-bold text-xs">÷3</div>
                <div className="absolute -right-8 top-[83%] -translate-y-1/2 text-pink-600 dark:text-pink-400 font-bold text-xs">×7</div>
              </div>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded">
              <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Step 1:</strong> Find revolutions per minute</p>
              <p className="text-gray-800 dark:text-gray-200">42 ÷ 3 = 14 revolutions per minute</p>
              <p className="text-gray-800 dark:text-gray-200 mt-3 mb-2"><strong>Step 2:</strong> Find revolutions in 7 minutes</p>
              <p className="text-gray-800 dark:text-gray-200">14 × 7 = 98 revolutions</p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">The wheel can make <strong>98 revolutions</strong> in 7 minutes.</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Construction Work</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">A construction worker lays 8 m² of tiles every 30 minutes. At this rate, what is the floor area he can lay with tiles in 2 hours?</p>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded mb-4">
              <p className="text-gray-800 dark:text-gray-200 text-sm"><strong>Note:</strong> 1 h = 60 min, so 2 h = 120 min</p>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded">
              <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Step 1:</strong> Find tiles per 60 min (1 hour)</p>
              <p className="text-gray-800 dark:text-gray-200">30 min × 2 = 60 min, so 8 m² × 2 = 16 m² per hour</p>
              <p className="text-gray-800 dark:text-gray-200 mt-3 mb-2"><strong>Step 2:</strong> Find tiles in 2 hours</p>
              <p className="text-gray-800 dark:text-gray-200">16 m² × 2 = 32 m²</p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">He can lay <strong>32 m²</strong> of tiles in 2 hours.</p>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: Finding Rate
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A printer prints 36 pages in 4 minutes. At this rate, how many pages does it print per minute?
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
                    36 ÷ 4 = <strong>9 pages per minute</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Using Rate
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A shopkeeper sells cloth at $9 per metre. Shanti buys 15 m of cloth. How much does she pay for the cloth?
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
                    $9 × 15 = <strong>$135</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Two-Step Problem
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A machine packs 9600 bottles into boxes every 5 hours. At this rate, how many bottles does it pack into boxes per hour?
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
                    9600 ÷ 5 = <strong>1920 bottles per hour</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 4: Distance Problem
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A car travels 450 km in 5 hours. At this rate, how far can it travel in 8 hours?
              </p>
              <button
                onClick={() => setShowSolution4(!showSolution4)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution4 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution4 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-2">
                    <strong>Step 1:</strong> Find rate per hour
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">450 ÷ 5 = 90 km per hour</p>
                  <p className="text-gray-800 dark:text-gray-200 mt-2 mb-2">
                    <strong>Step 2:</strong> Find distance in 8 hours
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">90 × 8 = <strong>720 km</strong></p>
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
            <li><strong>Rate</strong> tells us how much for every one unit (e.g., pages per minute, $ per hour)</li>
            <li><strong>"Per"</strong> means "every" or "for each"</li>
            <li>To <strong>find the rate</strong>: divide to find how much for 1 unit</li>
            <li>To <strong>use the rate</strong>: multiply to find larger amounts</li>
            <li>For two-step problems: first find the unit rate (÷), then calculate the target (×)</li>
            <li>Use a <strong>rate table</strong> to organize your working</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UnderstandingRate;
