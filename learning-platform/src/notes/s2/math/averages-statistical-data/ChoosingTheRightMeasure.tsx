import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function ChoosingTheRightMeasureNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Choosing the Right Measure of Central Tendency</h1>
        <p className="mt-2 text-indigo-100">Understanding when to use mean, median, or mode</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Introduction */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-700">
            <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-200 mb-3">
              🎯 The Big Question
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We now know <strong>three different ways</strong> to measure the "centre" of data: mean, median, and mode.
              But which one should we use? The answer depends on:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>The <strong>nature of the data</strong> (numerical vs. categorical, presence of outliers)</li>
              <li>What <strong>question we're trying to answer</strong></li>
              <li>What we want to <strong>communicate</strong> to others</li>
            </ul>
          </div>
        </section>

        {/* Section 1: Quick Comparison */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Quick Comparison: Mean vs. Median vs. Mode
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-800 dark:text-gray-100">
                    Feature
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-800 dark:text-gray-100">
                    Mean
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-800 dark:text-gray-100">
                    Median
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-800 dark:text-gray-100">
                    Mode
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="bg-white dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>What it measures</strong>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Arithmetic centre (sum ÷ count)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Middle value (50th percentile)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Most frequent value
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Uses all data values?</strong>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    ✅ Yes
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    ❌ No (only position matters)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    ❌ No (only frequency matters)
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Affected by outliers?</strong>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    ✅ Yes (very sensitive)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    ❌ No (resistant)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    ❌ No (resistant)
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Works with categorical data?</strong>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    ❌ No
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    ❌ No
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    ✅ Yes
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Always exists?</strong>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    ✅ Yes
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    ✅ Yes
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    ❌ No (can have no mode)
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Unique value?</strong>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    ✅ Always one value
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    ✅ Always one value
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    ❌ Can have multiple modes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: When to Use Each Measure */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            When to Use Each Measure
          </h2>

          {/* Use Mean When... */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3">
              ✅ Use MEAN When:
            </h3>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  1. You want to use ALL data values
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The mean considers every single value, making it useful when you want a measure that
                  accounts for the entire data set.
                </p>
                <p className="text-sm text-green-700 dark:text-green-300 mt-2 italic">
                  Example: Calculating your overall test average (all scores matter)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  2. The data has NO extreme values (outliers)
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  When data is fairly evenly distributed without outliers, the mean is a good representative value.
                </p>
                <p className="text-sm text-green-700 dark:text-green-300 mt-2 italic">
                  Example: Heights of students in a class (usually no extreme values)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  3. You need to do further calculations
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The mean has mathematical properties that make it useful for advanced statistics
                  (like standard deviation, variance).
                </p>
                <p className="text-sm text-green-700 dark:text-green-300 mt-2 italic">
                  Example: Scientific research, quality control in manufacturing
                </p>
              </div>
            </div>
          </div>

          {/* Use Median When... */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-3">
              ✅ Use MEDIAN When:
            </h3>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  1. The data has EXTREME values (outliers)
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The median ignores the actual values and only looks at position, making it unaffected by outliers.
                </p>
                <p className="text-sm text-purple-700 dark:text-purple-300 mt-2 italic">
                  Example: Salaries in a company (CEO's salary is an outlier)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  2. You want to know the "typical" value when data is skewed
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  When data is not evenly distributed, the median better represents what's "typical."
                </p>
                <p className="text-sm text-purple-700 dark:text-purple-300 mt-2 italic">
                  Example: House prices in a neighborhood (a few luxury homes would inflate the mean)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  3. You want to understand the middle or 50th percentile
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The median tells you that 50% of values are below it and 50% are above it.
                </p>
                <p className="text-sm text-purple-700 dark:text-purple-300 mt-2 italic">
                  Example: Median household income in a country (official statistics often use median)
                </p>
              </div>
            </div>
          </div>

          {/* Use Mode When... */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-300 mb-3">
              ✅ Use MODE When:
            </h3>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  1. You want to know the most POPULAR or COMMON value
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The mode tells you what occurs most frequently, useful for understanding trends or preferences.
                </p>
                <p className="text-sm text-orange-700 dark:text-orange-300 mt-2 italic">
                  Example: Most common shoe size sold (for inventory planning)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  2. Your data is CATEGORICAL (non-numerical)
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Mode is the ONLY average that works with categories, colors, names, etc.
                </p>
                <p className="text-sm text-orange-700 dark:text-orange-300 mt-2 italic">
                  Example: Most popular car color, favorite ice cream flavor
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  3. You're making business or inventory decisions
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Knowing what's most common helps with stocking, production planning, and marketing.
                </p>
                <p className="text-sm text-orange-700 dark:text-orange-300 mt-2 italic">
                  Example: Which menu item to promote, which size clothing to stock more of
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Comparing All Three with Same Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Seeing All Three in Action
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Let's calculate mean, median, and mode for the same data set and see how they differ:
          </p>

          {/* Example: Company A */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Company A: Employee Salaries (Normal Distribution)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Monthly salaries (in dollars): 800, 5500, 5900, 6300, 10,500
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                <div className="flex justify-between items-center bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <span><strong>Mean:</strong></span>
                  <span>(800 + 5500 + 5900 + 6300 + 10,500) ÷ 5 = <strong>5,800</strong></span>
                </div>

                <div className="flex justify-between items-center bg-purple-50 dark:bg-purple-900/20 p-3 rounded">
                  <span><strong>Median:</strong></span>
                  <span>Middle value (ordered: 800, 5500, 5900, 6300, 10,500) = <strong>5,900</strong></span>
                </div>

                <div className="flex justify-between items-center bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                  <span><strong>Mode:</strong></span>
                  <span>All values appear once = <strong>No mode</strong></span>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                <p className="text-sm text-yellow-900 dark:text-yellow-200">
                  <strong>Observation:</strong> The mean (5,800) and median (5,900) are very close. Both represent
                  the "typical" salary well. The extreme values (800 and 10,500) don't distort the picture too much
                  because they balance each other out.
                </p>
              </div>
            </div>
          </div>

          {/* Example: Company B with Outlier */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Company B: Employee Salaries (With Extreme Outlier)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Monthly salaries: 2000, 2100, 2200, 2400, 2600, 2700, 2800, 2800, <span className="text-red-600 dark:text-red-400 font-bold">10,000</span> (CEO)
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                <div className="flex justify-between items-center bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <span><strong>Mean:</strong></span>
                  <span>30,400 ÷ 9 ≈ <strong className="text-red-600 dark:text-red-400">3,378</strong> ⚠️</span>
                </div>

                <div className="flex justify-between items-center bg-purple-50 dark:bg-purple-900/20 p-3 rounded">
                  <span><strong>Median:</strong></span>
                  <span>Middle (5th) value = <strong className="text-green-600 dark:text-green-400">2,600</strong> ✓</span>
                </div>

                <div className="flex justify-between items-center bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                  <span><strong>Mode:</strong></span>
                  <span>2,800 appears twice = <strong>2,800</strong></span>
                </div>
              </div>

              <div className="mt-4 bg-red-50 dark:bg-red-900/20 p-3 rounded border-l-4 border-red-500">
                <p className="text-sm text-red-900 dark:text-red-200 mb-2">
                  <strong>⚠️ Problem with Mean:</strong> The mean (3,378) is misleading! 8 out of 9 employees
                  earn LESS than the mean. The CEO's salary pulled the mean way up.
                </p>
                <p className="text-sm text-green-900 dark:text-green-200">
                  <strong>✓ Better Choice:</strong> The median (2,600) or mode (2,800) better represent what a
                  "typical" employee earns.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowComparison(!showComparison)}
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white rounded transition-colors"
          >
            {showComparison ? 'Hide' : 'Show'} Visual Comparison
          </button>

          {showComparison && (
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Visualizing Company B's data on a number line:
              </p>
              <div className="bg-white dark:bg-gray-900 p-6 rounded">
                <div className="relative h-32">
                  {/* Data points */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className="relative h-16 border-t-2 border-gray-400 dark:border-gray-600">
                      {/* 8 employees at 2000-2800 range */}
                      <div className="absolute left-[20%] bottom-0 w-2 h-12 bg-blue-500 dark:bg-blue-400"></div>
                      <div className="absolute left-[21%] bottom-0 w-2 h-12 bg-blue-500 dark:bg-blue-400"></div>
                      <div className="absolute left-[22%] bottom-0 w-2 h-12 bg-blue-500 dark:bg-blue-400"></div>
                      <div className="absolute left-[23%] bottom-0 w-2 h-12 bg-blue-500 dark:bg-blue-400"></div>
                      <div className="absolute left-[24%] bottom-0 w-2 h-12 bg-blue-500 dark:bg-blue-400"></div>
                      <div className="absolute left-[25%] bottom-0 w-2 h-12 bg-blue-500 dark:bg-blue-400"></div>
                      <div className="absolute left-[26%] bottom-0 w-2 h-12 bg-blue-500 dark:bg-blue-400"></div>
                      <div className="absolute left-[27%] bottom-0 w-2 h-12 bg-blue-500 dark:bg-blue-400"></div>

                      {/* CEO at 10,000 (far right) */}
                      <div className="absolute right-[5%] bottom-0 w-2 h-12 bg-red-500 dark:bg-red-400"></div>

                      {/* Median marker */}
                      <div className="absolute left-[24%] bottom-14">
                        <div className="w-1 h-4 bg-purple-600 dark:bg-purple-400"></div>
                        <span className="text-xs text-purple-600 dark:text-purple-400 whitespace-nowrap">Median</span>
                      </div>

                      {/* Mean marker */}
                      <div className="absolute left-[35%] bottom-14">
                        <div className="w-1 h-4 bg-green-600 dark:bg-green-400"></div>
                        <span className="text-xs text-green-600 dark:text-green-400 whitespace-nowrap">Mean</span>
                      </div>
                    </div>

                    {/* Scale */}
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-2">
                      <span>0</span>
                      <span>2,500</span>
                      <span>5,000</span>
                      <span>7,500</span>
                      <span>10,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                Notice how the mean is pulled toward the outlier (red bar), while the median stays in the middle
                of the cluster of values.
              </p>
            </div>
          )}
        </section>

        {/* Section 4: Decision Framework */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Decision Framework: Which Average Should I Use?
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-4">
              Ask yourself these questions:
            </h3>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Question 1: Is the data numerical or categorical?
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  • If <strong>categorical</strong> (colors, names, etc.) → Use <strong className="text-orange-600 dark:text-orange-400">MODE</strong><br />
                  • If <strong>numerical</strong> → Go to Question 2
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Question 2: Does the data have extreme values (outliers)?
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  • If <strong>yes</strong> (outliers present) → Use <strong className="text-purple-600 dark:text-purple-400">MEDIAN</strong><br />
                  • If <strong>no</strong> (no outliers) → Go to Question 3
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-yellow-500">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Question 3: What do you want to know?
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  • <strong>Most common/popular value?</strong> → Use <strong className="text-orange-600 dark:text-orange-400">MODE</strong><br />
                  • <strong>True average using all values?</strong> → Use <strong className="text-green-600 dark:text-green-400">MEAN</strong><br />
                  • <strong>Middle/typical value (50th percentile)?</strong> → Use <strong className="text-purple-600 dark:text-purple-400">MEDIAN</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice: Choosing the Right Average
          </h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: House Prices
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A real estate agent wants to advertise the "average" price of houses in a neighborhood. The prices are:
            </p>
            <p className="text-center font-mono text-gray-800 dark:text-gray-100 mb-3">
              $300,000, $320,000, $310,000, $330,000, $2,500,000
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Which average should the agent use, and why?
            </p>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                  <p><strong>Calculate all three:</strong></p>
                  <div className="ml-4 space-y-2">
                    <p>Mean = (300,000 + 320,000 + 310,000 + 330,000 + 2,500,000) ÷ 5 = <strong>$752,000</strong></p>
                    <p>Median = Middle value = <strong>$320,000</strong></p>
                    <p>Mode = No mode (all different)</p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded mt-3">
                    <p className="font-semibold text-purple-900 dark:text-purple-200 mb-2">
                      Best Choice: MEDIAN ($320,000)
                    </p>
                    <p className="text-purple-800 dark:text-purple-300">
                      <strong>Reason:</strong> The $2,500,000 mansion is an extreme outlier that pulls the mean
                      up to $752,000. The median of $320,000 better represents what a "typical" house costs in
                      the neighborhood. If the agent advertised the mean, buyers would be misled!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Ice Cream Shop
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              An ice cream shop wants to know which flavor to order more of. Sales this week:
            </p>
            <p className="text-center font-mono text-gray-800 dark:text-gray-100 mb-3">
              Chocolate: 45 scoops, Vanilla: 38 scoops, Strawberry: 52 scoops, Mint: 30 scoops
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Which average should they use?
            </p>

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                    <p className="font-semibold text-orange-900 dark:text-orange-200 mb-2">
                      Best Choice: MODE (Strawberry - 52 scoops)
                    </p>
                    <p className="text-orange-800 dark:text-orange-300">
                      <strong>Reason:</strong> The shop wants to know the <strong>most popular</strong> flavor
                      so they can stock more of it. The mode tells them Strawberry sold the most. Mean or median
                      wouldn't be helpful here because they need to know which specific flavor is most popular,
                      not an average quantity.
                    </p>
                  </div>

                  {/* Visualization */}
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded">
                    <MathToolRenderer
                      toolName="barChart"
                      parameters={{
                        categories: ["Chocolate", "Vanilla", "Strawberry", "Mint"],
                        values: [45, 38, 52, 30],
                        xLabel: "Ice Cream Flavor",
                        yLabel: "Scoops Sold",
                        title: "Ice Cream Sales - Strawberry is the Mode",
                        showValues: true,
                        orientation: "vertical"
                      }}
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                      Strawberry has the highest bar (52 scoops) - the mode shows what's most popular
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Class Test Scores
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A teacher wants to report the overall class performance on a test. Scores:
            </p>
            <p className="text-center font-mono text-gray-800 dark:text-gray-100 mb-3">
              65, 70, 72, 75, 78, 80, 82, 85, 88, 90
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Which average should the teacher use?
            </p>

            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                    <p className="font-semibold text-green-900 dark:text-green-200 mb-2">
                      Best Choice: MEAN (78.5)
                    </p>
                    <p className="text-green-800 dark:text-green-300">
                      <strong>Reason:</strong> The scores are fairly evenly distributed with no extreme outliers.
                      The teacher wants to use <strong>all students' scores</strong> to get an overall class average.
                      The mean (78.5) incorporates every student's performance and gives a fair representation.
                      The median (79) would also be acceptable, but mean is more commonly used for test averages
                      when there are no outliers.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              There is <strong>no single "best" average</strong> - it depends on your data and what you want to communicate.
            </li>
            <li>
              <strong>Mean</strong> is best when data is evenly distributed without outliers and you want to use all values.
            </li>
            <li>
              <strong>Median</strong> is best when data has extreme values (outliers) or is skewed, as it's resistant
              to extremes.
            </li>
            <li>
              <strong>Mode</strong> is best for finding the most popular/common value, and it's the ONLY average
              that works with categorical data.
            </li>
            <li>
              Always <strong>think critically</strong> about which average is appropriate - using the wrong one
              can be misleading or unhelpful.
            </li>
            <li>
              When in doubt, <strong>calculate all three</strong> and compare them - if they're very different,
              that's a sign of outliers or skewed data.
            </li>
            <li>
              Understanding <strong>when to use each measure</strong> is just as important as knowing how to calculate them!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
