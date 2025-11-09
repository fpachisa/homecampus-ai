import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function ModeNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Mode</h1>
        <p className="mt-2 text-orange-100">Finding the most frequently occurring value in data</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Introductory Motivation */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-700 mb-6">
            <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-200 mb-3">
              🛍️ Real-World Scenario: T-Shirt Shop
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A clothing store owner wants to know which T-shirt size to stock the most. This week they sold:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
              <p className="text-center font-mono text-gray-800 dark:text-gray-100">
                S, M, M, M, L, L, XL, XL, XL, XL
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The mean or median won't help here because the owner needs to know the <strong>most popular</strong> size.
              This is where the <strong>mode</strong> comes in!
            </p>
            <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded">
              <p className="text-orange-900 dark:text-orange-200">
                <strong>The Mode tells us:</strong> Which value appears most frequently? In this case, XL appears
                4 times (more than any other), so the shop should stock more XL shirts.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Mode of Raw Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Mode of Raw Data
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>mode</strong> is the value that appears <strong>most frequently</strong> in a data set.
              It's the only average that can be used with <strong>non-numerical data</strong> (like colors, names, or categories).
            </p>
          </div>

          {/* Definition Box */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-300 mb-3">
              Definition
            </h3>

            <div className="bg-white dark:bg-gray-800 p-6 rounded">
              <p className="text-center text-xl text-gray-800 dark:text-gray-100 mb-4">
                Mode = the data value(s) with the <strong>highest frequency</strong>
              </p>

              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded">
                  <p className="font-semibold text-orange-900 dark:text-orange-200 mb-1">
                    One Mode (Unimodal):
                  </p>
                  <p>Most data sets have one mode - the single most frequent value</p>
                </div>

                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded">
                  <p className="font-semibold text-orange-900 dark:text-orange-200 mb-1">
                    Two Modes (Bimodal):
                  </p>
                  <p>When two values appear with the same highest frequency</p>
                </div>

                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded">
                  <p className="font-semibold text-orange-900 dark:text-orange-200 mb-1">
                    Multiple Modes (Multimodal):
                  </p>
                  <p>When more than two values share the highest frequency</p>
                </div>

                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded">
                  <p className="font-semibold text-orange-900 dark:text-orange-200 mb-1">
                    No Mode:
                  </p>
                  <p>When all values appear with the same frequency (or all appear once)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Finding Mode - Step by Step */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">
              📋 Steps to Find the Mode
            </h3>

            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Count how many times each value appears</strong> (tally the frequencies)
              </li>
              <li>
                <strong>Identify the value(s) with the highest frequency</strong>
              </li>
              <li>
                <strong>That value is the mode!</strong> (Not the frequency, but the actual data value)
              </li>
            </ol>

            <div className="mt-4 bg-red-50 dark:bg-red-900/20 p-3 rounded border-l-4 border-red-500">
              <p className="text-sm text-red-900 dark:text-red-200">
                <strong>⚠️ Common Mistake:</strong> The mode is the <strong>data value</strong>, NOT the frequency!
                If the value 5 appears 8 times, the mode is <strong>5</strong>, not 8.
              </p>
            </div>
          </div>

          {/* Worked Example 1: Simple Mode */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Finding the Mode
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The number of books 10 students read in a year were:
            </p>
            <p className="text-center font-mono text-gray-800 dark:text-gray-100 mb-3">
              8, 9, 10, 10, 3, 5, 6, 10, 6 and 1
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Solution:</p>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold">Step 1: Count the frequency of each value</p>
                  <div className="ml-4 mt-2 space-y-1 bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                    <p>1 appears <strong>1 time</strong></p>
                    <p>3 appears <strong>1 time</strong></p>
                    <p>5 appears <strong>1 time</strong></p>
                    <p>6 appears <strong>2 times</strong></p>
                    <p>8 appears <strong>1 time</strong></p>
                    <p>9 appears <strong>1 time</strong></p>
                    <p>10 appears <strong className="text-orange-600 dark:text-orange-400">3 times</strong> ← highest!</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">Step 2: Identify the highest frequency</p>
                  <p className="ml-4">The highest frequency is 3</p>
                </div>

                <div>
                  <p className="font-semibold">Step 3: The mode is the value with that frequency</p>
                  <p className="ml-4 font-semibold text-orange-600 dark:text-orange-400">Mode = 10 books</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual representation */}
          <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visualizing the Mode:</h4>
            <MathToolRenderer
              toolName="dotDiagram"
              parameters={{
                values: [1, 3, 5, 6, 6, 8, 9, 10, 10, 10],
                xLabel: "Number of Books Read",
                title: "Books Read Distribution - Mode Highlighted",
                showTickLabels: true,
                highlightValue: 10,
                dotColor: "#f97316"
              }}
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
              The mode (10 books, highlighted in orange) appears most frequently - 3 times
            </p>
          </div>

          {/* Worked Example 2: Bimodal */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Bimodal Data (Two Modes)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The lengths of 10 ribbons (in cm) are:
            </p>
            <p className="text-center font-mono text-gray-800 dark:text-gray-100 mb-3">
              100, 110, 95, 60, 20, 60, 110, 88, 102, 120
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Solution:</p>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold">Count frequencies:</p>
                  <div className="ml-4 mt-2 space-y-1 bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                    <p>20 appears 1 time</p>
                    <p>60 appears <strong className="text-orange-600 dark:text-orange-400">2 times</strong></p>
                    <p>88 appears 1 time</p>
                    <p>95 appears 1 time</p>
                    <p>100 appears 1 time</p>
                    <p>102 appears 1 time</p>
                    <p>110 appears <strong className="text-orange-600 dark:text-orange-400">2 times</strong></p>
                    <p>120 appears 1 time</p>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Observation:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Both 60 cm and 110 cm appear twice, which is the highest frequency. So this data set
                    has <strong>two modes</strong>!
                  </p>
                </div>

                <p className="ml-4 font-semibold text-orange-600 dark:text-orange-400">
                  Modes = 60 cm and 110 cm (bimodal)
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 3: No Mode */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Data with No Mode
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Find the mode of: 5, 7, 9, 11, 13, 15
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Solution:</p>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>Each value appears exactly <strong>once</strong>.</p>
                <p>All values have the same frequency (1).</p>

                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded">
                  <p className="text-orange-900 dark:text-orange-200">
                    When all values appear with the same frequency, there is <strong>no mode</strong>.
                  </p>
                </div>

                <p className="ml-4 font-semibold text-orange-600 dark:text-orange-400">
                  This data set has no mode.
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Finding the Mode
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              For each data set, state the mode(s). If there is no mode, write "no mode".
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Test scores: 65, 70, 70, 75, 80, 85, 70, 90</li>
              <li>Ages: 12, 13, 14, 15, 16, 17</li>
              <li>Shoe sizes: 6, 7, 7, 8, 8, 9, 10</li>
            </ol>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold">1) Test scores: 65, 70, 70, 75, 80, 85, 70, 90</p>
                    <p className="ml-4">70 appears 3 times (most frequent)</p>
                    <p className="ml-4 font-semibold text-orange-600 dark:text-orange-400">Mode = 70</p>
                  </div>

                  <div>
                    <p className="font-semibold">2) Ages: 12, 13, 14, 15, 16, 17</p>
                    <p className="ml-4">All values appear once</p>
                    <p className="ml-4 font-semibold text-orange-600 dark:text-orange-400">No mode</p>
                  </div>

                  <div>
                    <p className="font-semibold">3) Shoe sizes: 6, 7, 7, 8, 8, 9, 10</p>
                    <p className="ml-4">Both 7 and 8 appear twice (highest frequency)</p>
                    <p className="ml-4 font-semibold text-orange-600 dark:text-orange-400">Modes = 7 and 8 (bimodal)</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mode with Categorical Data */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded mt-6">
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3">
              🎨 Mode Works with Non-Numerical Data!
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Unlike mean and median, the mode can be used with <strong>categorical data</strong> (non-numerical).
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Example: Favorite Colors</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Survey results: Red, Blue, Red, Green, Blue, Red, Yellow, Red, Blue, Red
              </p>
              <div className="mt-3 space-y-1 text-sm bg-green-50 dark:bg-green-900/20 p-3 rounded">
                <p>Red appears <strong>5 times</strong></p>
                <p>Blue appears 3 times</p>
                <p>Green appears 1 time</p>
                <p>Yellow appears 1 time</p>
              </div>
              <p className="mt-3 font-semibold text-green-600 dark:text-green-400">
                Mode = Red (most popular color)
              </p>
            </div>

            <div className="mt-4 bg-green-100 dark:bg-green-900/30 p-3 rounded">
              <p className="text-sm text-green-900 dark:text-green-200">
                <strong>Why this matters:</strong> Businesses use mode to determine popular products, sizes, flavors,
                or preferences. You can't calculate a mean of "Red" and "Blue"!
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Mode of Frequency Distribution */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Mode of Frequency Distribution
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When data is presented in a <strong>frequency table</strong>, finding the mode is even easier!
              Look for the data value with the highest frequency.
            </p>
          </div>

          {/* Important Note Box */}
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded mb-6">
            <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
              ⚠️ Critical Reminder
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The mode is <strong>NOT the highest frequency</strong>, but the <strong>data value</strong> that
              has the highest frequency!
            </p>

            <div className="bg-white dark:bg-gray-800 p-3 rounded">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                If this frequency table shows:
              </p>
              <div className="overflow-x-auto mb-2">
                <table className="border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                  <tbody>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-800 dark:text-gray-100"><strong>Score</strong></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center text-gray-800 dark:text-gray-100">1</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center text-gray-800 dark:text-gray-100">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center text-gray-800 dark:text-gray-100">3</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300"><strong>Frequency</strong></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center text-gray-700 dark:text-gray-300">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center text-gray-700 dark:text-gray-300">7</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center text-gray-700 dark:text-gray-300">2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ❌ Wrong: Mode = 7 (that's the frequency!)<br />
                ✅ Correct: Mode = 2 (the score with highest frequency of 7)
              </p>
            </div>
          </div>

          {/* Worked Example 4: Frequency Table */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Mode from Frequency Table
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The table shows commission earned by salesmen in a month:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      Commission ($)
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      1000
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      1200
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      1500
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      2000
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      <strong>Number of salesmen</strong>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                      2
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 bg-orange-100 dark:bg-orange-900/30">
                      <strong>5</strong>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                      3
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                      1
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Solution:</p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>The highest frequency is <strong>5</strong> (highlighted in the table).</p>
                <p>This frequency corresponds to the commission of <strong>$1200</strong>.</p>
                <p className="font-semibold text-orange-600 dark:text-orange-400 mt-3">
                  Mode = $1200
                </p>
                <p className="text-sm italic mt-2">
                  (This means $1200 is the most common commission earned by the salesmen)
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 5: Dot Diagram/Histogram */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 5: Mode from Pictogram/Diagram
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Students' favorite chocolate flavors:
            </p>

            <div className="bg-white dark:bg-gray-800 p-6 rounded mb-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-32 text-gray-800 dark:text-gray-100 font-semibold">Sea Salt</div>
                  <div className="flex gap-1">
                    <div className="w-8 h-8 bg-orange-500 dark:bg-orange-600 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 text-gray-800 dark:text-gray-100 font-semibold">Caramel</div>
                  <div className="flex gap-1">
                    <div className="w-8 h-8 bg-orange-500 dark:bg-orange-600 rounded"></div>
                    <div className="w-8 h-8 bg-orange-500 dark:bg-orange-600 rounded"></div>
                    <div className="w-8 h-8 bg-orange-500 dark:bg-orange-600 rounded"></div>
                    <div className="w-8 h-8 bg-orange-500 dark:bg-orange-600 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 text-gray-800 dark:text-gray-100 font-semibold">Peppermint</div>
                  <div className="flex gap-1">
                    <div className="w-8 h-8 bg-orange-500 dark:bg-orange-600 rounded"></div>
                    <div className="w-8 h-8 bg-orange-500 dark:bg-orange-600 rounded"></div>
                    <div className="w-8 h-8 bg-orange-500 dark:bg-orange-600 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 text-gray-800 dark:text-gray-100 font-semibold">Hazelnut</div>
                  <div className="flex gap-1">
                    <div className="w-8 h-8 bg-orange-500 dark:bg-orange-600 rounded"></div>
                    <div className="w-8 h-8 bg-orange-500 dark:bg-orange-600 rounded"></div>
                    <div className="w-8 h-8 bg-orange-500 dark:bg-orange-600 rounded"></div>
                    <div className="w-8 h-8 bg-orange-500 dark:bg-orange-600 rounded"></div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                Key: Each square represents 20 students
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Solution:</p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>Count the squares for each flavor:</p>
                <div className="ml-4 space-y-1 bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                  <p>Sea Salt: 1 square = 20 students</p>
                  <p>Caramel: 4 squares = 80 students ← Most!</p>
                  <p>Peppermint: 3 squares = 60 students</p>
                  <p>Hazelnut: 4 squares = 80 students ← Most!</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded border-l-4 border-yellow-500 mt-3">
                  <p className="text-yellow-900 dark:text-yellow-200">
                    Both Caramel and Hazelnut have the highest count (80 students each).
                  </p>
                </div>
                <p className="font-semibold text-orange-600 dark:text-orange-400 mt-3">
                  Modes = Caramel and Hazelnut (bimodal)
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Mode from Frequency Table
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Monthly salaries of employees:
            </p>

            <div className="overflow-x-auto mb-3">
              <table className="border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">Salary ($)</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">2000</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">3000</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">3500</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">4500</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">5000</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300"><strong>Employees</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">10</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">56</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">42</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">25</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">17</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 dark:text-gray-300">State the mode of the distribution.</p>

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>The highest frequency is 56 employees.</p>
                  <p>This corresponds to the salary of $3000.</p>
                  <p className="font-semibold text-orange-600 dark:text-orange-400 mt-2">
                    Mode = $3000
                  </p>
                  <p className="text-sm italic">
                    (Most employees earn $3000 per month)
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-orange-50 dark:bg-orange-900/30 border-l-4 border-orange-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              The <strong>mode</strong> is the value that appears <strong>most frequently</strong> in a data set.
            </li>
            <li>
              The mode is the <strong>data value itself</strong>, NOT the frequency count.
            </li>
            <li>
              A data set can have:
              <ul className="list-disc list-inside ml-8 mt-1 space-y-1">
                <li><strong>One mode</strong> (unimodal)</li>
                <li><strong>Two modes</strong> (bimodal)</li>
                <li><strong>Multiple modes</strong> (multimodal)</li>
                <li><strong>No mode</strong> (all values appear equally often)</li>
              </ul>
            </li>
            <li>
              Mode is the <strong>only average</strong> that works with <strong>categorical (non-numerical) data</strong>
              like colors, names, or categories.
            </li>
            <li>
              <strong>When to use mode:</strong> When you want to know the most <strong>popular</strong>, <strong>common</strong>,
              or <strong>frequent</strong> value - useful for business inventory, customer preferences, and marketing decisions.
            </li>
            <li>
              From frequency tables or diagrams, find the value with the <strong>highest frequency</strong> (tallest bar,
              most dots, etc.).
            </li>
          </ul>
        </div>

        {/* Advanced Section */}
        <div className="mt-6">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold"
          >
            <span>{showAdvanced ? '▼' : '▶'}</span>
            <span>Advanced: Modal Class for Grouped Data</span>
          </button>

          {showAdvanced && (
            <div className="mt-4 ml-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded border-l-2 border-orange-500">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                When data is grouped into class intervals (like 10-20, 20-30, etc.), we can't find an exact mode
                because we don't know the individual values. Instead, we identify the <strong>modal class</strong>:
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded mb-3">
                <p className="font-semibold text-orange-900 dark:text-orange-200 mb-2">Example:</p>
                <div className="overflow-x-auto">
                  <table className="border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                    <tbody>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-800 dark:text-gray-100"><strong>Age</strong></td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-800 dark:text-gray-100">20-30</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-800 dark:text-gray-100 bg-orange-100 dark:bg-orange-900/30">30-40</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-800 dark:text-gray-100">40-50</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300"><strong>Frequency</strong></td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center text-gray-700 dark:text-gray-300">5</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center text-gray-700 dark:text-gray-300 bg-orange-100 dark:bg-orange-900/30"><strong>12</strong></td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center text-gray-700 dark:text-gray-300">3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  The <strong>modal class</strong> is 30-40 (highest frequency of 12).
                </p>
              </div>
              <p className="text-sm text-orange-900 dark:text-orange-200">
                <strong>Note:</strong> We say "modal class" not "mode" because we can't determine a single exact value
                from grouped data - we only know the interval where the mode lies.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
