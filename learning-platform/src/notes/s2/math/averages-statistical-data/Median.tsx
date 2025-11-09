import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function MedianNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Median</h1>
        <p className="mt-2 text-purple-100">Finding the middle value and understanding resistance to extreme values</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Introductory Motivation */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700 mb-6">
            <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-200 mb-3">
              🤔 Revisiting the Salary Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Remember the nine employees with salaries:
            </p>
            <p className="text-center font-mono text-gray-800 dark:text-gray-100 mb-3">
              2000, 2100, 2200, 2400, 2600, 2700, 2800, 2800, 10000
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The mean was $3,378, but 8 out of 9 employees earn less than this! The extreme value of $10,000
              pulled the mean upward, making it misleading.
            </p>
            <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded">
              <p className="text-purple-900 dark:text-purple-200">
                <strong>The Solution:</strong> The <strong>median</strong> is a measure that isn't affected by extreme values.
                It only cares about the <strong>position</strong> of values, not their actual sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Median of Raw Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Median of Raw Data
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>median</strong> is the <strong>middle value</strong> when the data is arranged in order
              (either ascending or descending). If the data set has an even number of values, the median is the
              <strong> mean of the two middle values</strong>.
            </p>
          </div>

          {/* Definition Box */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-3">
              Definition
            </h3>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  When n (number of values) is ODD:
                </p>
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded">
                  <p className="text-center text-gray-800 dark:text-gray-100">
                    Position of median = <MathText>{'$\\frac{n+1}{2}$'}</MathText>
                  </p>
                  <p className="text-center text-sm text-gray-700 dark:text-gray-300 mt-1">
                    Median is the <strong>middle value</strong> of the arranged data
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  When n (number of values) is EVEN:
                </p>
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded">
                  <p className="text-center text-gray-800 dark:text-gray-100">
                    Position = <MathText>{'$\\frac{n+1}{2}$'}</MathText> (will be like 4.5)
                  </p>
                  <p className="text-center text-sm text-gray-700 dark:text-gray-300 mt-1">
                    Median is the <strong>mean of the two middle values</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Process Box */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">
              📋 Steps to Find the Median
            </h3>

            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Arrange the data in order</strong> (ascending or descending - both work!)
              </li>
              <li>
                <strong>Count the number of values (n)</strong>
              </li>
              <li>
                <strong>Find the position:</strong> Calculate <MathText>{'$\\frac{n+1}{2}$'}</MathText>
              </li>
              <li>
                <strong>If position is a whole number:</strong> That's the median position
              </li>
              <li>
                <strong>If position is a decimal (like 4.5):</strong> Take the mean of the two values
                on either side (4th and 5th values)
              </li>
            </ol>
          </div>

          {/* Worked Example 1: Odd Number of Values */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Finding Median (Odd Number of Values)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Find the median of the following test scores: 68, 75, 82, 91, 70, 88, 79
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Solution:</p>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold">Step 1: Arrange in order (ascending)</p>
                  <p className="ml-4 font-mono bg-purple-50 dark:bg-purple-900/20 p-2 rounded inline-block">
                    68, 70, 75, 79, 82, 88, 91
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Step 2: Count the values</p>
                  <p className="ml-4">n = 7</p>
                </div>

                <div>
                  <p className="font-semibold">Step 3: Find the position</p>
                  <p className="ml-4">Position = <MathText>{'$\\frac{7+1}{2} = \\frac{8}{2} = 4$'}</MathText></p>
                </div>

                <div>
                  <p className="font-semibold">Step 4: Identify the median</p>
                  <div className="ml-4">
                    <p className="mb-2">The median is the 4th value:</p>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded">
                      <p className="text-center font-mono">
                        68, 70, 75, <span className="bg-purple-300 dark:bg-purple-700 px-2 py-1 rounded font-bold">79</span>, 82, 88, 91
                      </p>
                    </div>
                  </div>
                </div>

                <p className="font-semibold text-purple-600 dark:text-purple-400 mt-4">
                  Therefore, the median = 79
                </p>
              </div>
            </div>

            {/* Visual representation */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visualizing the Median:</h4>
              <MathToolRenderer
                toolName="dotDiagram"
                parameters={{
                  values: [68, 70, 75, 79, 82, 88, 91],
                  xLabel: "Test Scores",
                  title: "Test Score Distribution with Median",
                  showTickLabels: true,
                  highlightValue: 79,
                  dotColor: "#a855f7"
                }}
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                The median (79, highlighted) is the middle value - 3 scores below it and 3 scores above it
              </p>
            </div>
          </div>

          {/* Worked Example 2: Even Number of Values */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Finding Median (Even Number of Values)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Find the median of: 12, 8, 19, 30, 14, 21, 9, 5
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Solution:</p>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold">Step 1: Arrange in order (ascending)</p>
                  <p className="ml-4 font-mono bg-purple-50 dark:bg-purple-900/20 p-2 rounded inline-block">
                    5, 8, 9, 12, 14, 19, 21, 30
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Step 2: Count the values</p>
                  <p className="ml-4">n = 8</p>
                </div>

                <div>
                  <p className="font-semibold">Step 3: Find the position</p>
                  <p className="ml-4">Position = <MathText>{'$\\frac{8+1}{2} = \\frac{9}{2} = 4.5$'}</MathText></p>
                  <p className="ml-4 text-sm mt-1 italic">
                    The 4.5th position means we need the mean of the 4th and 5th values
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Step 4: Find the two middle values</p>
                  <div className="ml-4">
                    <p className="mb-2">The 4th value is 12, the 5th value is 14:</p>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded">
                      <p className="text-center font-mono">
                        5, 8, 9, <span className="bg-purple-300 dark:bg-purple-700 px-2 py-1 rounded font-bold">12</span>, <span className="bg-purple-300 dark:bg-purple-700 px-2 py-1 rounded font-bold">14</span>, 19, 21, 30
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">Step 5: Calculate the median</p>
                  <p className="ml-4">Median = <MathText>{'$\\frac{12 + 14}{2} = \\frac{26}{2} = 13$'}</MathText></p>
                </div>

                <p className="font-semibold text-purple-600 dark:text-purple-400 mt-4">
                  Therefore, the median = 13
                </p>
              </div>
            </div>

            <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
              <p className="text-sm text-yellow-900 dark:text-yellow-200">
                <strong>Note:</strong> Even though 13 is not in the original data set, it's the median because
                it's exactly halfway between the two middle values. 50% of values are below 13, and 50% are above 13.
              </p>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Find the Median
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Find the median of each data set:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>20, 16, 9, 3, 18, 11, 15</li>
              <li>32, 15, 20, 15, 25, 12</li>
            </ol>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold mb-2">1) 20, 16, 9, 3, 18, 11, 15</p>
                    <p className="ml-4 mb-1">Ordered: 3, 9, 11, 15, 16, 18, 20</p>
                    <p className="ml-4 mb-1">n = 7, Position = (7+1)/2 = 4</p>
                    <p className="ml-4 font-semibold text-purple-600 dark:text-purple-400">Median = 15 (4th value)</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2) 32, 15, 20, 15, 25, 12</p>
                    <p className="ml-4 mb-1">Ordered: 12, 15, 15, 20, 25, 32</p>
                    <p className="ml-4 mb-1">n = 6, Position = (6+1)/2 = 3.5</p>
                    <p className="ml-4 mb-1">Mean of 3rd and 4th values: (15 + 20)/2 = 35/2</p>
                    <p className="ml-4 font-semibold text-purple-600 dark:text-purple-400">Median = 17.5</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Why Median is Resistant to Outliers */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded mt-6">
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3">
              💪 Median is Resistant to Extreme Values
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Let's see how changing one value affects the mean vs. median:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-800 dark:text-gray-100">
                      Data Set
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-800 dark:text-gray-100">
                      Mean
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-800 dark:text-gray-100">
                      Median
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      5, 8, 10, 12, 15
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                      10
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                      10
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      5, 8, 10, 12, <span className="text-red-600 dark:text-red-400 font-bold">100</span> (changed 15 to 100)
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                      <span className="text-red-600 dark:text-red-400 font-bold">27</span> (changed!)
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                      <span className="text-green-600 dark:text-green-400 font-bold">10</span> (unchanged!)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
              <p className="text-green-900 dark:text-green-200">
                <strong>Observation:</strong> Changing the largest value from 15 to 100 dramatically increased the mean from 10 to 27,
                but the median stayed at 10! This is because the median only cares about the <strong>position</strong>, not the
                actual value.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Median of Frequency Distribution */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Median of Frequency Distribution
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When data is presented in a <strong>frequency table</strong>, <strong>dot diagram</strong>, or
              <strong> stem-and-leaf diagram</strong>, we can still find the median. The process is similar,
              but we use the data values shown in the diagram.
            </p>
          </div>

          {/* Worked Example 3: Dot Diagram */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Finding Median from Dot Diagram
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The dot diagram shows the number of times some people visit the supermarket in a week:
            </p>

            <div className="bg-white dark:bg-gray-800 p-6 rounded mb-4">
              <div className="flex items-end justify-around" style={{height: '120px'}}>
                <div className="flex flex-col items-center justify-end">
                  <div className="w-6 h-6 rounded-full bg-purple-500 dark:bg-purple-400 mb-1"></div>
                  <div className="text-gray-800 dark:text-gray-100 text-sm mt-1">1</div>
                </div>
                <div className="flex flex-col items-center justify-end">
                  <div className="w-6 h-6 rounded-full bg-purple-500 dark:bg-purple-400 mb-1"></div>
                  <div className="w-6 h-6 rounded-full bg-purple-500 dark:bg-purple-400 mb-1"></div>
                  <div className="w-6 h-6 rounded-full bg-purple-500 dark:bg-purple-400 mb-1"></div>
                  <div className="text-gray-800 dark:text-gray-100 text-sm mt-1">2</div>
                </div>
                <div className="flex flex-col items-center justify-end">
                  <div className="w-6 h-6 rounded-full bg-purple-500 dark:bg-purple-400 mb-1"></div>
                  <div className="w-6 h-6 rounded-full bg-purple-500 dark:bg-purple-400 mb-1"></div>
                  <div className="w-6 h-6 rounded-full bg-purple-500 dark:bg-purple-400 mb-1"></div>
                  <div className="w-6 h-6 rounded-full bg-purple-500 dark:bg-purple-400 mb-1"></div>
                  <div className="text-gray-800 dark:text-gray-100 text-sm mt-1">3</div>
                </div>
                <div className="flex flex-col items-center justify-end">
                  <div className="w-6 h-6 rounded-full bg-purple-500 dark:bg-purple-400 mb-1"></div>
                  <div className="text-gray-800 dark:text-gray-100 text-sm mt-1">4</div>
                </div>
                <div className="flex flex-col items-center justify-end">
                  <div className="text-gray-800 dark:text-gray-100 text-sm mt-1">5</div>
                </div>
                <div className="flex flex-col items-center justify-end">
                  <div className="w-6 h-6 rounded-full bg-purple-500 dark:bg-purple-400 mb-1"></div>
                  <div className="text-gray-800 dark:text-gray-100 text-sm mt-1">6</div>
                </div>
              </div>
              <div className="border-t-2 border-gray-400 dark:border-gray-600 mt-2 pt-2 text-center text-gray-700 dark:text-gray-300 text-sm">
                Number of visits
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Solution:</p>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold">Step 1: Count the dots to get data in order</p>
                  <div className="ml-4 bg-purple-50 dark:bg-purple-900/20 p-3 rounded">
                    <p>1 person visited 1 time: <strong>1</strong></p>
                    <p>3 people visited 2 times: <strong>2, 2, 2</strong></p>
                    <p>4 people visited 3 times: <strong>3, 3, 3, 3</strong></p>
                    <p>1 person visited 4 times: <strong>4</strong></p>
                    <p>0 people visited 5 times: (none)</p>
                    <p>1 person visited 6 times: <strong>6</strong></p>
                    <p className="mt-2 font-mono">Data: 1, 2, 2, 2, 3, 3, 3, 3, 4, 6</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">Step 2: Count total number of data values</p>
                  <p className="ml-4">n = 10</p>
                </div>

                <div>
                  <p className="font-semibold">Step 3: Find position</p>
                  <p className="ml-4">Position = (10+1)/2 = 5.5</p>
                  <p className="ml-4 text-sm italic">Mean of 5th and 6th values</p>
                </div>

                <div>
                  <p className="font-semibold">Step 4: Identify 5th and 6th values</p>
                  <div className="ml-4 bg-purple-50 dark:bg-purple-900/20 p-2 rounded font-mono">
                    1, 2, 2, 2, <span className="bg-purple-300 dark:bg-purple-700 px-1 rounded font-bold">3</span>, <span className="bg-purple-300 dark:bg-purple-700 px-1 rounded font-bold">3</span>, 3, 3, 4, 6
                  </div>
                  <p className="ml-4 mt-2">Both are 3</p>
                </div>

                <div>
                  <p className="font-semibold">Step 5: Calculate median</p>
                  <p className="ml-4">Median = (3 + 3)/2 = 3</p>
                </div>

                <p className="font-semibold text-purple-600 dark:text-purple-400 mt-4">
                  Therefore, the median = 3 visits
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 4: Frequency Table */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Finding Median from Frequency Table
            </h3>

            <div className="overflow-x-auto mb-4">
              <table className="border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      Number of siblings
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      0
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      1
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      2
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      3
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      4
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      <strong>Frequency</strong>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                      1
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                      3
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                      4
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                      2
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
              <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                <p>Total frequency: 1 + 3 + 4 + 2 + 1 = 11</p>
                <p>Position = (11+1)/2 = 6</p>
                <p className="mb-2">Finding the 6th value by counting:</p>
                <div className="ml-4 space-y-1">
                  <p>• 0 siblings: 1 person (positions 1)</p>
                  <p>• 1 sibling: 3 people (positions 2, 3, 4)</p>
                  <p>• 2 siblings: 4 people (positions 5, <span className="bg-purple-300 dark:bg-purple-700 px-1 rounded font-bold">6</span>, 7, 8)</p>
                </div>
                <p className="font-semibold text-purple-600 dark:text-purple-400 mt-3">
                  The 6th value = 2 siblings
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Median from Frequency Table
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The table shows test scores for a class:
            </p>

            <div className="overflow-x-auto mb-3">
              <table className="border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">Score</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">5</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">6</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">7</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">8</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">9</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300"><strong>Frequency</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">2</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">3</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">5</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">4</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 dark:text-gray-300">Find the median score.</p>

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <p>Total frequency = 2 + 3 + 5 + 4 + 2 = 16</p>
                  <p>Position = (16+1)/2 = 8.5 (mean of 8th and 9th values)</p>
                  <div className="ml-4 space-y-1">
                    <p>• Score 5: 2 students (positions 1-2)</p>
                    <p>• Score 6: 3 students (positions 3-5)</p>
                    <p>• Score 7: 5 students (positions 6-10) ← includes 8th and 9th!</p>
                  </div>
                  <p className="font-semibold text-purple-600 dark:text-purple-400 mt-2">
                    Both 8th and 9th values are 7, so median = (7+7)/2 = 7
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              The <strong>median</strong> is the middle value when data is arranged in order (ascending or descending).
            </li>
            <li>
              <strong>Odd number of values:</strong> Median is the middle value at position <MathText>{'$\\frac{n+1}{2}$'}</MathText>
            </li>
            <li>
              <strong>Even number of values:</strong> Median is the mean of the two middle values.
            </li>
            <li>
              The median is <strong>resistant to extreme values (outliers)</strong> because it only depends on position,
              not the actual magnitude of values.
            </li>
            <li>
              When finding median from frequency distributions, count through the data values in order until you reach
              the middle position(s).
            </li>
            <li>
              <strong>When to use median:</strong> Use median instead of mean when your data has extreme values that
              would distort the mean, such as incomes, house prices, or test scores with outliers.
            </li>
          </ul>
        </div>

        {/* Advanced Section */}
        <div className="mt-6">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold"
          >
            <span>{showAdvanced ? '▼' : '▶'}</span>
            <span>Advanced: Median Meaning and Interpretation</span>
          </button>

          {showAdvanced && (
            <div className="mt-4 ml-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded border-l-2 border-purple-500">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The median has a very important interpretation:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>
                  <strong>50% of the data values are at or below the median</strong>
                </li>
                <li>
                  <strong>50% of the data values are at or above the median</strong>
                </li>
                <li>
                  This is why median is also called the <strong>50th percentile</strong> in statistics
                </li>
                <li>
                  For example, if median house price is $500,000, it means half of all houses cost $500,000 or less,
                  and half cost $500,000 or more
                </li>
              </ul>
              <p className="text-sm text-purple-900 dark:text-purple-200 mt-4 font-semibold">
                This 50-50 split makes median very useful for understanding what's "typical" in skewed data!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
