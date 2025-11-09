import { useState } from 'react';

export default function IntroductionToAveragesNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Introduction to Averages</h1>
        <p className="mt-2 text-blue-100">Understanding central tendency and measures of the centre of data</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: What is Central Tendency? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What is Central Tendency?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we have a set of numerical data, we often want to find a <strong>single value</strong> that represents
              the <strong>centre</strong> or <strong>typical value</strong> of the entire data set. This single value is
              called a <strong>measure of central tendency</strong>, commonly known as an <strong>average</strong>.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Why do we need averages? Consider these real-world examples:
            </p>
          </div>

          {/* Real-World Examples Box */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Real-World Applications
            </h3>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  📊 Singapore Statistics (2018)
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 text-sm">
                  <li>Average life expectancy: 81.0 years (males), 85.4 years (females)</li>
                  <li>Mean years of schooling: 11.1 years (residents aged 25+)</li>
                  <li>Median age of residents: 40.8 years</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  🏫 School Performance
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  A teacher uses the class average to understand overall performance on a test.
                  If the class average is 75%, this gives a quick sense of how the class performed.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  🏠 Housing Prices
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  The median price of HDB flats helps families understand what a typical flat costs,
                  without being misled by very expensive or very cheap outliers.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  👕 Retail Inventory
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  A clothing store stocks more of the most popular (mode) shirt size because that's
                  what most customers buy.
                </p>
              </div>
            </div>
          </div>

          {/* Key Concept Box */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-700 mb-6">
            <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-200 mb-3">
              🎯 The Big Idea
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Instead of looking at all individual data points, an average gives us <strong>one representative value</strong>
              that summarizes the entire data set. This makes data easier to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Understand at a glance</li>
              <li>Compare with other data sets</li>
              <li>Make informed decisions</li>
              <li>Communicate clearly</li>
            </ul>
          </div>
        </section>

        {/* Section 2: The Three Types of Averages */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Three Types of Averages
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In statistics, there are <strong>three main types of averages</strong>, each measuring the "centre"
              in a different way. Different scenarios require different types of averages.
            </p>
          </div>

          {/* Mean Section */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3">
              1. Mean (Arithmetic Average)
            </h3>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Definition:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The <strong>mean</strong> is what most people think of as the "average." It's calculated by
                adding all the values together and dividing by how many values there are.
              </p>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                <p className="text-center text-gray-800 dark:text-gray-100 font-mono">
                  Mean = (Sum of all values) ÷ (Number of values)
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Example:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Test scores: 70, 75, 80, 85, 90
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Mean = (70 + 75 + 80 + 85 + 90) ÷ 5 = 400 ÷ 5 = <strong>80</strong>
              </p>
            </div>

            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
              <p className="text-sm text-green-900 dark:text-green-200">
                <strong>Key Characteristic:</strong> The mean uses <strong>all data values</strong> in its calculation,
                so it's affected by every single number, including extreme values (outliers).
              </p>
            </div>
          </div>

          {/* Median Section */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-3">
              2. Median (Middle Value)
            </h3>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Definition:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The <strong>median</strong> is the <strong>middle value</strong> when the data is arranged in order
                (from smallest to largest). If there's an even number of values, it's the average of the two middle values.
              </p>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded">
                <p className="text-center text-gray-800 dark:text-gray-100">
                  <strong>Odd number of values:</strong> Median is the middle value
                </p>
                <p className="text-center text-gray-800 dark:text-gray-100 mt-1">
                  <strong>Even number of values:</strong> Median is the mean of two middle values
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Example:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Ages: 12, 13, 14, 14, 15, 16, 17
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Already in order, 7 values, so median is the 4th value = <strong>14</strong>
              </p>
            </div>

            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded">
              <p className="text-sm text-purple-900 dark:text-purple-200">
                <strong>Key Characteristic:</strong> The median is <strong>not affected by extreme values</strong>.
                It only cares about the position of values, not their actual sizes.
              </p>
            </div>
          </div>

          {/* Mode Section */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-300 mb-3">
              3. Mode (Most Frequent Value)
            </h3>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Definition:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The <strong>mode</strong> is the value that appears <strong>most frequently</strong> in the data set.
                A data set can have one mode, multiple modes (bimodal, multimodal), or no mode at all.
              </p>
              <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded">
                <p className="text-center text-gray-800 dark:text-gray-100">
                  Mode = The value(s) with the highest frequency
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Example:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Shoe sizes: 6, 7, 7, 8, 8, 8, 9, 10
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Size 8 appears 3 times (more than any other), so mode = <strong>8</strong>
              </p>
            </div>

            <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded">
              <p className="text-sm text-orange-900 dark:text-orange-200">
                <strong>Key Characteristic:</strong> The mode tells us the <strong>most common or popular value</strong>.
                It's useful for understanding what's "typical" in terms of frequency.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-800 dark:text-gray-100">
                    Type
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-800 dark:text-gray-100">
                    What it Measures
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-800 dark:text-gray-100">
                    Main Use
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50 dark:bg-green-900/20">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Mean</strong>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Arithmetic centre (sum ÷ count)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    When all values matter equally
                  </td>
                </tr>
                <tr className="bg-purple-50 dark:bg-purple-900/20">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Median</strong>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Positional centre (middle value)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    When there are extreme values
                  </td>
                </tr>
                <tr className="bg-orange-50 dark:bg-orange-900/20">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Mode</strong>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Most popular/common value
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    When finding most frequent item
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: A Motivating Problem */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Why Do We Need Three Different Averages?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Let's explore why having three types of averages is necessary by examining a real scenario.
            </p>
          </div>

          {/* Motivating Example */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3 text-lg">
              📊 Real-World Scenario: Employee Salaries
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A company has 9 employees with the following monthly salaries (in dollars):
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <p className="text-center text-gray-800 dark:text-gray-100 font-mono text-lg">
                2000, 2100, 2200, 2400, 2600, 2700, 2800, 2800, 10000
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Let's calculate all three averages:
            </p>

            <div className="space-y-3">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                <p className="font-semibold text-green-900 dark:text-green-200">Mean:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Sum = 30,400, Count = 9 → Mean = 30,400 ÷ 9 ≈ <strong>3,378</strong>
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded">
                <p className="font-semibold text-purple-900 dark:text-purple-200">Median:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Already ordered, 9 values, middle (5th) value = <strong>2,600</strong>
                </p>
              </div>

              <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded">
                <p className="font-semibold text-orange-900 dark:text-orange-200">Mode:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  2,800 appears twice, all others once → Mode = <strong>2,800</strong>
                </p>
              </div>
            </div>

            <div className="mt-4 bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-500">
              <p className="font-semibold text-red-800 dark:text-red-300 mb-2">
                🤔 Important Question:
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Notice that 8 out of 9 employees earn <strong>less than the mean salary</strong> of 3,378!
                Does the mean accurately represent a "typical" employee's salary?
              </p>
            </div>
          </div>

          {/* Discussion */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-3">
              💡 The Answer:
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The mean was <strong>distorted by one extreme value</strong> (the 10,000 salary). In this case:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>
                The <strong>median (2,600)</strong> better represents what a "typical" employee earns
              </li>
              <li>
                The <strong>mode (2,800)</strong> shows the most common salary level
              </li>
              <li>
                The <strong>mean (3,378)</strong> is useful if we're calculating total payroll or budget
              </li>
            </ul>
          </div>
        </section>

        {/* Practice Problem */}
        <section className="mb-8">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Understanding the Three Averages
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A small shop sells different sizes of T-shirts. This week, they sold shirts in the following sizes:
            </p>
            <p className="text-center text-gray-800 dark:text-gray-100 font-mono bg-white dark:bg-gray-800 p-3 rounded mb-3">
              S, M, M, M, L, L, XL, XL, XL, XL, XXL
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              If we assign numbers to sizes (S=1, M=2, L=3, XL=4, XXL=5):
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Calculate the mean, median, and mode.</li>
              <li>Which average would be most useful for deciding how many of each size to stock next week? Why?</li>
            </ol>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Solution:</p>

                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Data values: 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5
                </p>

                <div className="space-y-3 mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                    <p className="font-semibold text-green-900 dark:text-green-200">Mean:</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      (1 + 2 + 2 + 2 + 3 + 3 + 4 + 4 + 4 + 4 + 5) ÷ 11 = 34 ÷ 11 ≈ <strong>3.09</strong> (about L)
                    </p>
                  </div>

                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded">
                    <p className="font-semibold text-purple-900 dark:text-purple-200">Median:</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      11 values, so median is 6th value = <strong>3</strong> (L)
                    </p>
                  </div>

                  <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded">
                    <p className="font-semibold text-orange-900 dark:text-orange-200">Mode:</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      4 (XL) appears most frequently (4 times) = <strong>4 (XL)</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                  <p className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Answer to Question 2:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    The <strong>mode (XL)</strong> would be most useful because it tells the shop owner which size
                    sells most frequently. This helps with inventory management - they should stock more XL shirts!
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              An <strong>average</strong> is a single value that represents the centre or typical value of a data set,
              making large amounts of data easier to understand.
            </li>
            <li>
              There are <strong>three types of averages</strong>: mean, median, and mode. Each measures "centre"
              differently and is useful in different situations.
            </li>
            <li>
              The <strong>mean</strong> uses all data values equally and is affected by extreme values.
            </li>
            <li>
              The <strong>median</strong> is the middle value and is resistant to extreme values.
            </li>
            <li>
              The <strong>mode</strong> is the most frequent value and shows what's most common or popular.
            </li>
            <li>
              Choosing the right average depends on your data and what you want to communicate.
              In the coming sections, we'll learn how to calculate each type and when to use each one.
            </li>
          </ul>
        </div>

        {/* Advanced Section */}
        <div className="mt-6">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
          >
            <span>{showAdvanced ? '▼' : '▶'}</span>
            <span>Advanced: Why "Average" Can Be Misleading</span>
          </button>

          {showAdvanced && (
            <div className="mt-4 ml-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded border-l-2 border-blue-500">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                In everyday language, people often say "average" without specifying which type. This can lead to
                confusion or even intentional misrepresentation:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>
                  <strong>Marketing claims</strong>: "Average customer saves 100!" - Which average? Mean could
                  be skewed by a few big savers.
                </li>
                <li>
                  <strong>Income statistics</strong>: "Average household income is 80,000" - Is this mean or median?
                  The mean could be inflated by very wealthy households.
                </li>
                <li>
                  <strong>Test scores</strong>: "Average score improved by 5 points" - Mode might not have changed,
                  meaning the most common score stayed the same.
                </li>
              </ul>
              <p className="text-sm text-blue-900 dark:text-blue-200 mt-4 font-semibold">
                Always ask: "Which average?" and "Why was that particular average chosen?"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
