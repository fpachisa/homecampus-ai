import { useState } from 'react';

const GroupedData = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Grouped Data & Class Intervals</h1>
        <p className="mt-2 text-amber-100">Learning to organize large datasets using class intervals</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: When to Group Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. When and Why to Group Data
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When dealing with large datasets or continuous data (like heights, weights, test scores), listing every individual value would create a very long frequency table. Instead, we group the data into <strong>class intervals</strong>.
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded mb-4">
              <p className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Why Group Data?</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Makes large datasets easier to understand and analyze</li>
                <li>Shows patterns and trends more clearly</li>
                <li>Reduces the size of the frequency table significantly</li>
                <li>Particularly useful for continuous data (measurements)</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Comparing Grouped vs Ungrouped
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              100 students' test scores range from 45 to 98. Instead of listing 50+ different scores, we can group them:
            </p>
            <div className="overflow-x-auto mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Score Range</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">40-49</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">8</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">50-59</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">15</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">60-69</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">28</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">70-79</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">32</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">80-89</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">12</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">90-99</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">5</td></tr>
                </tbody>
              </table>
              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                Much easier to see that most students scored in the 60-79 range!
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Class Intervals */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Understanding Class Intervals
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>class interval</strong> is a range of values grouped together. Class intervals must follow important rules:
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Rules for Class Intervals:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Non-overlapping:</strong> Each value belongs to exactly one interval (e.g., 10-19, 20-29, not 10-20, 20-30)</li>
                <li><strong>Cover all data:</strong> Intervals must include the smallest and largest values</li>
                <li><strong>Uniform width (preferred):</strong> All intervals should have the same width when possible</li>
                <li><strong>Clear boundaries:</strong> Use notation like 10 ≤ x &lt; 20 or 10-19 consistently</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Non-Overlapping Intervals
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Which set of intervals is correct for grouping ages?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>❌ Incorrect (overlapping):</strong></p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 ml-4">
                10-15, 15-20, 20-25<br />
                <span className="text-sm italic text-red-600 dark:text-red-400">Problem: Where does 15 go? Where does 20 go?</span>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>✅ Correct (non-overlapping):</strong></p>
              <p className="text-gray-700 dark:text-gray-300 ml-4">
                10-14, 15-19, 20-24<br />
                <span className="text-sm italic text-green-600 dark:text-green-400">Clear: 14 is in first group, 15 is in second group</span>
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Identifying Problems
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A student created these class intervals for homework times (in hours): 0-1, 1-2, 2-3, 3-4
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              (a) Are these intervals overlapping or non-overlapping?<br />
              (b) If a student spent exactly 2 hours on homework, which interval would they belong to?<br />
              (c) Suggest a better way to write these intervals.
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (a) These are <strong>overlapping</strong> - the boundaries (1, 2, 3) appear in two intervals
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (b) Ambiguous! It could be in "1-2" or "2-3" - this is the problem with overlapping intervals
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  (c) Better: Use <strong>0 ≤ h &lt; 1, 1 ≤ h &lt; 2, 2 ≤ h &lt; 3, 3 ≤ h &lt; 4</strong><br />
                  Or simply: <strong>0-0.9, 1-1.9, 2-2.9, 3-3.9</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Class Width Calculation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Calculating Class Width
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Class width</strong> (or class interval) is the difference between the upper and lower boundaries of a class.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Formula:</p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Class Width = Upper Limit - Lower Limit</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm italic">
                For interval 20-29: Class width = 29 - 20 = 9 (or 10 if we count inclusively: 20, 21, ..., 29)
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Uniform intervals</strong> mean all class widths are equal, making the data easier to compare.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Checking Uniform Intervals
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Are these class intervals uniform?
            </p>
            <div className="overflow-x-auto mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <table className="w-full border-collapse mb-4">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Height (cm)</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Class Width</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">150-159</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">10</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">160-169</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">10</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">170-179</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">10</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">180-189</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">10</td></tr>
                </tbody>
              </table>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Answer:</strong> Yes! All intervals have width 10, so these are <strong>uniform intervals</strong>.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Creating Grouped Data
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              You collected data on 50 students' ages, ranging from 11 to 16 years old.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              (a) Create appropriate class intervals with uniform width<br />
              (b) Calculate the class width<br />
              (c) How many intervals did you create?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  (a) <strong>Possible intervals:</strong> 11-12, 13-14, 15-16<br />
                  Or: 11-13, 14-16
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  (b) For first option: class width = <strong>2 years</strong><br />
                  For second option: class width = <strong>3 years</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  (c) First option: <strong>3 intervals</strong><br />
                  Second option: <strong>2 intervals</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                  Note: Multiple correct answers exist! The key is ensuring intervals are non-overlapping and have uniform width.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-amber-700 dark:text-amber-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Grouped data</strong> organizes large datasets into class intervals, making patterns easier to see</li>
            <li><strong>Class intervals</strong> must be non-overlapping so each value belongs to exactly one group</li>
            <li><strong>Class width</strong> = Upper Limit - Lower Limit; uniform widths make data easier to compare</li>
            <li>Intervals should cover all data from smallest to largest value</li>
            <li>Good grouping balances detail (not too few intervals) with clarity (not too many intervals)</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default GroupedData;
