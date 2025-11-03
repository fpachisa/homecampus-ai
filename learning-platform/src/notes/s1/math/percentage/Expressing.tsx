import { useState } from 'react';
import MathText from '../../../../components/MathText';

const Expressing = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Expressing One Quantity as a Percentage of Another</h1>
        <p className="mt-2 text-green-100">Finding what percentage one value is of another</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: Basic Formula */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Basic Percentage Calculation (x as % of y)
          </h2>

          <div className="mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Formula:</p>
              <p className="text-center text-gray-700 dark:text-gray-300 text-xl my-3">
                <MathText>{'$x \\text{ as } \\% \\text{ of } y = \\frac{x}{y} \\times 100\\%$'}</MathText>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm mt-3">
                <li><MathText>$x$</MathText> = the part (numerator)</li>
                <li><MathText>$y$</MathText> = the whole (denominator)</li>
              </ul>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Basic Calculation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Express 18 as a percentage of 80.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>$x = 18$</MathText> (part), <MathText>$y = 80$</MathText> (whole)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <MathText>{'$\\frac{18}{80} \\times 100\\% = \\frac{1800}{80}\\% = 22.5\\%$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Answer:</strong> 18 is 22.5% of 80
              </p>
            </div>
          </div>

          {/* Practice */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Test Scores
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A student scored 72 marks out of 90. What percentage did they score?
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$\\frac{72}{90} \\times 100\\% = \\frac{7200}{90}\\% = 80\\%$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Answer:</strong> The student scored 80%
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Multi-Part Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Multi-Part Problems and Complements
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When parts make up a complete whole, we can find missing percentages using <MathText>{'$100\\% - \\text{known parts}$'}</MathText>
            </p>

            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-4">
              <p className="font-semibold text-teal-800 dark:text-teal-300 mb-2">Two Methods:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><strong>Method 1:</strong> Calculate each part as % of whole</li>
                <li><strong>Method 2:</strong> Find one part, then use <MathText>{'$100\\% - \\text{Part A}$'}</MathText></li>
              </ul>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Class Composition
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              In a class of 160 students, 90 are girls. Find the percentage of (a) girls, (b) boys.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Method 1 (Calculate both):</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                (a) Girls: <MathText>{'$\\frac{90}{160} \\times 100\\% = 56.25\\%$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                (b) Boys: <MathText>{'$\\frac{70}{160} \\times 100\\% = 43.75\\%$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Method 2 (Use complement):</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                (a) Girls: <MathText>$56.25\\%$</MathText> (same as Method 1)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                (b) Boys: <MathText>$100\\% - 56.25\\% = 43.75\\%$</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm italic">
                Verify: <MathText>$56.25\\% + 43.75\\% = 100\\%$</MathText> ✓
              </p>
            </div>
          </div>

          {/* Practice */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Storage Allocation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A 50 GB phone has 25 GB of photos, 10 GB of apps, and the rest is free space. What percentage is free space?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300">
                  Photos: <MathText>{'$\\frac{25}{50} \\times 100\\% = 50\\%$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Apps: <MathText>{'$\\frac{10}{50} \\times 100\\% = 20\\%$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Free space: <MathText>$100\\% - 50\\% - 20\\% = 30\\%$</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Answer:</strong> 30% is free space
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Unit Conversion */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Unit Conversion Before Percentage Calculation
          </h2>

          <div className="mb-6">
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <p className="font-semibold text-red-800 dark:text-red-300 mb-2">⚠️ Critical Rule:</p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ALWAYS convert to the same units before calculating percentage!</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                Common conversions: 1 kg = 1000 g, 1 m = 100 cm, 1 hour = 60 minutes
              </p>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Weight Comparison
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Express 250 g as a percentage of 2 kg.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 1:</strong> Convert to same units
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                2 kg = 2000 g
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Step 2:</strong> Calculate percentage
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                <MathText>{'$\\frac{250}{2000} \\times 100\\% = 12.5\\%$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Answer:</strong> 250 g is 12.5% of 2 kg
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm text-red-600 dark:text-red-400">
                ❌ Common mistake: <MathText>{'$\\frac{250}{2} = 125\\%$'}</MathText> (WRONG - different units!)
              </p>
            </div>
          </div>

          {/* Practice */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Time Calculation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A student studies for 45 minutes out of a 2-hour period. What percentage of the time did they study?
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Step 1:</strong> Convert to same units</p>
                <p className="text-gray-700 dark:text-gray-300">
                  2 hours = 120 minutes
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2 mb-2"><strong>Step 2:</strong> Calculate percentage</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$\\frac{45}{120} \\times 100\\% = 37.5\\%$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Answer:</strong> The student studied for 37.5% of the time
                </p>
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
            <li>Use the formula: <MathText>{'$(x/y) \\times 100\\%$'}</MathText> where x is the part and y is the whole</li>
            <li>For multi-part problems, use <MathText>{'$100\\% - \\text{known parts}$'}</MathText> to find remaining percentage</li>
            <li>Always verify that all parts sum to 100% when they represent a complete whole</li>
            <li>MUST convert to same units before calculating percentages</li>
            <li>Common conversions: 1 kg = 1000 g, 1 m = 100 cm, 1 hour = 60 min</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Expressing;
