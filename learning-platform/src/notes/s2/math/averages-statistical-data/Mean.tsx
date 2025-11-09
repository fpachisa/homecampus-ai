import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function MeanNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Mean</h1>
        <p className="mt-2 text-green-100">Learning to calculate and understand the arithmetic average</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Mean of Raw Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Mean of Raw Data
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Raw data</strong> are data values that have not been organized into a frequency table.
              For example: 3, 4, 4, 9, 10 is raw data - just a list of individual values.
            </p>
          </div>

          {/* Formula Box */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3">
              Formula for Mean of Raw Data
            </h3>

            <div className="bg-white dark:bg-gray-800 p-6 rounded mb-4">
              <p className="text-center text-xl text-gray-800 dark:text-gray-100 mb-4">
                Mean = <span className="font-mono">(sum of data values) / (number of data values)</span>
              </p>

              <p className="text-center text-gray-700 dark:text-gray-300 text-sm mt-4">
                or using the symbol <MathText>{'$\\bar{x}$'}</MathText> (read as "x bar"):
              </p>

              <div className="text-center mt-3">
                <MathText>{'$\\bar{x} = \\frac{\\text{sum of data values}}{\\text{number of data values}}$'}</MathText>
              </div>
            </div>

            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded">
              <p className="font-semibold text-green-900 dark:text-green-200 mb-2">
                💡 Think of it as "evening out"
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                If you took all the values and redistributed them equally, each person would get the mean.
                For example, if 5 students have 3, 4, 4, 9, and 10 books respectively, the mean is 6 books.
                This is like saying, "If we shared all 30 books equally among 5 students, each would get 6."
              </p>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Finding Mean of Test Scores
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Five students scored the following marks in a math test: 65, 72, 80, 75, 88
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Calculate the mean score.
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Solution:</p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>Step 1: Find the sum of all scores</p>
                <p className="ml-4">Sum = 65 + 72 + 80 + 75 + 88 = 380</p>

                <p>Step 2: Count the number of data values</p>
                <p className="ml-4">Number of students = 5</p>

                <p>Step 3: Divide sum by count</p>
                <p className="ml-4">Mean = 380 ÷ 5 = <strong className="text-green-600 dark:text-green-400">76</strong></p>

                <p className="mt-3 text-sm italic">
                  Therefore, the mean test score is 76 marks.
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2: Finding Unknown Value */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Finding an Unknown Value Given the Mean
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The mean of 10, 15, 12, 20, and x is 13. Find the value of x.
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Solution:</p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>We know that: Mean = (sum of data values) ÷ (number of data values)</p>

                <p className="mt-2">Substitute the known values:</p>
                <div className="ml-4">
                  <p>13 = (10 + 15 + 12 + 20 + x) ÷ 5</p>
                  <p>13 = (57 + x) ÷ 5</p>
                </div>

                <p className="mt-2">Multiply both sides by 5:</p>
                <p className="ml-4">13 × 5 = 57 + x</p>
                <p className="ml-4">65 = 57 + x</p>

                <p className="mt-2">Solve for x:</p>
                <p className="ml-4">x = 65 − 57 = <strong className="text-green-600 dark:text-green-400">8</strong></p>
              </div>

              <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                <p className="text-sm text-yellow-900 dark:text-yellow-200">
                  <strong>Key Insight:</strong> The relationship mean × number of values = sum of values
                  is very useful for solving problems where values are unknown!
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Your Turn
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The heights of seven students (in cm) are: 154, 167, 149, 154, 176, 169, 158
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Calculate the mean height.
            </p>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Sum = 154 + 167 + 149 + 154 + 176 + 169 + 158 = 1127 cm</p>
                  <p>Number of students = 7</p>
                  <p>Mean = 1127 ÷ 7 = <strong className="text-green-600 dark:text-green-400">161 cm</strong></p>
                </div>
              </div>
            )}
          </div>

          {/* Important Note Box */}
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mt-6">
            <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
              ⚠️ Important: Not Taking Average of Averages
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In general, we should <strong>NOT</strong> take the average of means because the bases (number of values) may be different.
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded">
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                <strong>Example:</strong> Class A (20 students) has mean score 75. Class B (30 students) has mean score 80.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                ❌ Wrong: Overall mean = (75 + 80) ÷ 2 = 77.5
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                ✅ Correct: Total marks = (20 × 75) + (30 × 80) = 3900, Total students = 50, Mean = 3900 ÷ 50 = 78
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Mean of Frequency Distribution */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Mean of Frequency Distribution
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When data is organized into a <strong>frequency table</strong>, we have data values (x) and their
              frequencies (f). Rather than listing every value repeatedly, we use a more efficient formula.
            </p>
          </div>

          {/* Sigma Notation Introduction */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-3">
              Understanding Σ Notation (Sigma)
            </h3>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The symbol <MathText>{'$\\Sigma$'}</MathText> (capital Greek letter sigma) means <strong>"sum of"</strong>.
                It's a shorthand way to write "add up all the values."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded">
                  <p className="font-semibold text-purple-900 dark:text-purple-200 mb-2">
                    <MathText>{'$\\Sigma fx$'}</MathText>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Means: Add up all the products of (frequency × value)
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    = f₁x₁ + f₂x₂ + f₃x₃ + ...
                  </p>
                </div>

                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded">
                  <p className="font-semibold text-purple-900 dark:text-purple-200 mb-2">
                    <MathText>{'$\\Sigma f$'}</MathText>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Means: Add up all the frequencies
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    = f₁ + f₂ + f₃ + ... = total number of data values
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formula Box */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3">
              Formula for Mean of Frequency Distribution
            </h3>

            <div className="bg-white dark:bg-gray-800 p-6 rounded text-center">
              <div className="text-2xl mb-4">
                <MathText>{'$\\bar{x} = \\frac{\\Sigma fx}{\\Sigma f}$'}</MathText>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                where x is a data value and f is the frequency of that data value
              </p>
            </div>
          </div>

          {/* Worked Example 3: Frequency Table */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Calculating Mean from Frequency Table
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The table shows weekly salaries of employees in a company:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      Weekly salary ($)
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      1000
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      1100
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      1200
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      2100
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                      2500
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      <strong>Number of employees</strong>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                      20
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                      8
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                      10
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                      7
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                      5
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Find the mean weekly salary.
            </p>

            {/* Visual representation */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visual Frequency Distribution:</h4>
              <MathToolRenderer
                toolName="barChart"
                parameters={{
                  categories: ["$1000", "$1100", "$1200", "$2100", "$2500"],
                  values: [20, 8, 10, 7, 5],
                  xLabel: "Weekly Salary",
                  yLabel: "Number of Employees",
                  title: "Employee Salary Frequency Distribution",
                  showValues: true,
                  orientation: "vertical"
                }}
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                The tallest bar shows $1000 has the most employees (20)
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Solution:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                We create an extended table with fx column:
              </p>

              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">x</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">f</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">fx</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">1000</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">20</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">20,000</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">1100</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">8</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">8,800</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">1200</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">10</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">12,000</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">2100</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">7</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">14,700</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">2500</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">5</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">12,500</td>
                    </tr>
                    <tr className="bg-green-100 dark:bg-green-900/30 font-bold">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">Total</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-800 dark:text-gray-100">
                        <MathText>{'$\\Sigma f = 50$'}</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-800 dark:text-gray-100">
                        <MathText>{'$\\Sigma fx = 68,000$'}</MathText>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>Apply the formula:</p>
                <div className="ml-4 space-y-1">
                  <p>
                    <MathText>{'$\\bar{x} = \\frac{\\Sigma fx}{\\Sigma f}$'}</MathText>
                  </p>
                  <p>
                    <MathText>{'$\\bar{x} = \\frac{68,000}{50}$'}</MathText>
                  </p>
                  <p>
                    <MathText>{'$\\bar{x} = 1360$'}</MathText>
                  </p>
                </div>
                <p className="mt-3 font-semibold text-green-600 dark:text-green-400">
                  Therefore, the mean weekly salary is $1,360.
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Frequency Distribution
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The number of goals scored by a soccer team over 20 matches:
            </p>

            <div className="overflow-x-auto mb-3">
              <table className="border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">Goals</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">0</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">1</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">2</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">3</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300"><strong>Frequency</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">2</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">5</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">7</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">4</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Find the mean number of goals scored per match.
            </p>

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <p><MathText>{'$\\Sigma fx = (0 \\times 2) + (1 \\times 5) + (2 \\times 7) + (3 \\times 4) + (4 \\times 2)$'}</MathText></p>
                  <p className="ml-4">= 0 + 5 + 14 + 12 + 8 = 39</p>
                  <p><MathText>{'$\\Sigma f = 2 + 5 + 7 + 4 + 2 = 20$'}</MathText></p>
                  <p><MathText>{'$\\bar{x} = \\frac{39}{20} = 1.95$'}</MathText></p>
                  <p className="font-semibold text-green-600 dark:text-green-400 mt-2">
                    Mean = 1.95 goals per match
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Mean of Grouped Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Mean of Grouped Data (Estimation)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When data is grouped into <strong>class intervals</strong>, we don't know the exact individual values.
              We can only <strong>estimate</strong> the mean by using the <strong>mid-value</strong> of each class interval.
            </p>
          </div>

          {/* Mid-value Explanation */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
              What is a Mid-value?
            </h3>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The <strong>mid-value</strong> (or class midpoint) represents the data in each class interval.
              </p>

              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded">
                <p className="text-center font-mono text-lg text-gray-800 dark:text-gray-100">
                  Mid-value = (lower bound + upper bound) ÷ 2
                </p>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">Examples:</p>
                <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300 ml-4">
                  <p>• Class interval 15 &lt; x ≤ 20: Mid-value = (15 + 20) ÷ 2 = <strong>17.5</strong></p>
                  <p>• Class interval 20 &lt; x ≤ 25: Mid-value = (20 + 25) ÷ 2 = <strong>22.5</strong></p>
                  <p>• Class interval 30 &lt; x ≤ 35: Mid-value = (30 + 35) ÷ 2 = <strong>32.5</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded">
              <p className="text-sm text-indigo-900 dark:text-indigo-200">
                <strong>Why mid-value?</strong> We assume that the values in each class interval are evenly distributed,
                so the mid-value is a reasonable estimate for the average value in that interval.
              </p>
            </div>
          </div>

          {/* Formula Box */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3">
              Formula for Estimated Mean of Grouped Data
            </h3>

            <div className="bg-white dark:bg-gray-800 p-6 rounded text-center">
              <div className="text-2xl mb-4">
                <MathText>{'$\\text{Estimated } \\bar{x} = \\frac{\\Sigma fx}{\\Sigma f}$'}</MathText>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                where x is now the <strong>mid-value</strong> of the class interval,<br />
                and f is the frequency of that class interval
              </p>
            </div>
          </div>

          {/* Worked Example 4: Grouped Data */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Estimating Mean from Grouped Data
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The times taken (in minutes) for a group of teenagers to cycle between two parks:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">
                      Time (x minutes)
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">
                      15 &lt; x ≤ 20
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">
                      20 &lt; x ≤ 25
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">
                      25 &lt; x ≤ 30
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">
                      30 &lt; x ≤ 35
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">
                      35 &lt; x ≤ 40
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">
                      <strong>Frequency</strong>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">5</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">10</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">20</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">15</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">18</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Estimate the mean time taken.
            </p>

            {/* Visual representation with histogram */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visual Grouped Data Distribution:</h4>
              <MathToolRenderer
                toolName="histogram"
                parameters={{
                  intervals: [
                    { start: 15, end: 20, frequency: 5 },
                    { start: 20, end: 25, frequency: 10 },
                    { start: 25, end: 30, frequency: 20 },
                    { start: 30, end: 35, frequency: 15 },
                    { start: 35, end: 40, frequency: 18 }
                  ],
                  xLabel: "Time (minutes)",
                  yLabel: "Frequency",
                  title: "Cycling Time Distribution",
                  showFrequencies: true,
                  highlightInterval: 2
                }}
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                The modal class is 25-30 minutes (highlighted - highest bar with frequency 20)
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Solution:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Step 1: Calculate mid-values for each class interval
              </p>

              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">
                        Time (x minutes)
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">
                        Frequency (f)
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">
                        Mid-value (x)
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">
                        fx
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">15 &lt; x ≤ 20</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">5</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">17.5</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">87.5</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">20 &lt; x ≤ 25</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">10</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">22.5</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">225</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">25 &lt; x ≤ 30</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">20</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">27.5</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">550</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">30 &lt; x ≤ 35</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">15</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">32.5</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">487.5</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">35 &lt; x ≤ 40</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">18</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">37.5</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-700 dark:text-gray-300">675</td>
                    </tr>
                    <tr className="bg-green-100 dark:bg-green-900/30 font-bold">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">Total</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-800 dark:text-gray-100">
                        <MathText>{'$\\Sigma f = 68$'}</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-800 dark:text-gray-100">-</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center text-gray-800 dark:text-gray-100">
                        <MathText>{'$\\Sigma fx = 2025$'}</MathText>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>Step 2: Apply the formula:</p>
                <div className="ml-4 space-y-1">
                  <p>
                    <MathText>{'$\\text{Estimated } \\bar{x} = \\frac{\\Sigma fx}{\\Sigma f}$'}</MathText>
                  </p>
                  <p>
                    <MathText>{'$\\text{Estimated } \\bar{x} = \\frac{2025}{68}$'}</MathText>
                  </p>
                  <p>
                    <MathText>{'$\\text{Estimated } \\bar{x} \\approx 29.8$'}</MathText>
                  </p>
                </div>
                <p className="mt-3 font-semibold text-green-600 dark:text-green-400">
                  Therefore, the estimated mean time is approximately 29.8 minutes.
                </p>
              </div>
            </div>
          </div>

          {/* Important Note about Estimation */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded">
            <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
              📊 Why is it only an Estimate?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              When data is grouped, we lose information about individual values. For example, in the interval
              15 &lt; x ≤ 20, we don't know if the actual values are 16, 18, 19.5, etc. We assume they're all
              at the mid-value (17.5), which is why our answer is an estimate, not the exact mean.
            </p>
            <p className="text-sm text-orange-900 dark:text-orange-200">
              The more narrow the class intervals, the better our estimate will be!
            </p>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Mean of raw data:</strong> Add all values and divide by how many there are.
              Formula: Mean = (sum of values) ÷ (number of values)
            </li>
            <li>
              <strong>Mean of frequency distribution:</strong> Use <MathText>{'$\\bar{x} = \\frac{\\Sigma fx}{\\Sigma f}$'}</MathText>
              where you multiply each value by its frequency, sum those products, then divide by total frequency.
            </li>
            <li>
              The <MathText>{'$\\Sigma$'}</MathText> (sigma) symbol means "sum of" - it's shorthand for adding up values.
            </li>
            <li>
              <strong>Mean of grouped data:</strong> Use mid-values to represent each class interval.
              This gives an <strong>estimate</strong>, not the exact mean.
            </li>
            <li>
              In general, <strong>don't take the average of averages</strong> unless the bases (number of values) are the same.
            </li>
            <li>
              Mean × number of values = sum of values. This relationship is useful for solving problems!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
