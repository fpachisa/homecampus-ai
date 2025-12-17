import { useState } from 'react';
import MathText from '../../../../components/MathText';

const PartOfWhole = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Percentage Part of a Whole</h1>
        <p className="text-lg">Learn to find what percentage one number is of another!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What Percentage Is... */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">1. Finding "What Percentage Is..."</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border-l-4 border-purple-500 mb-4">
              <p className="text-purple-800 dark:text-purple-300 font-semibold text-lg">
                Formula: <MathText>{'$\\frac{\\text{Part}}{\\text{Whole}} \\times 100\\%$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                The <strong>whole</strong> is the denominator, and the <strong>part</strong> is the numerator.
              </p>
            </div>

            {/* Example 1 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Example 1: What percentage of 80 is 60?</p>
              <div className="ml-4 space-y-2 text-gray-800 dark:text-gray-200">
                <p>Since 80 is the whole, the denominator is 80.</p>
                <p>Since 60 is part of the whole, the numerator is 60.</p>
                <div className="mt-3 space-y-1">
                  <p><MathText>{'$\\frac{60}{80} \\times 100\\%$'}</MathText></p>
                  <p>= <MathText>{'$\\frac{6}{8} \\times 100\\%$'}</MathText> (simplify first)</p>
                  <p>= <MathText>{'$\\frac{3}{4} \\times 100\\%$'}</MathText></p>
                  <p>= <MathText>{'$\\frac{3 \\times 100}{4}\\%$'}</MathText> = <MathText>{'$\\frac{300}{4}\\%$'}</MathText> = <strong>75%</strong></p>
                </div>
                <p className="mt-2">75% of 80 is 60.</p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Example 2: What percentage of 400 ml is 180 ml?</p>
              <div className="ml-4 space-y-2 text-gray-800 dark:text-gray-200">
                <p><MathText>{'$\\frac{180}{400} \\times 100\\%$'}</MathText></p>
                <p>= <MathText>{'$\\frac{18}{40} \\times 100\\%$'}</MathText></p>
                <p>= <MathText>{'$\\frac{9}{20} \\times 100\\%$'}</MathText></p>
                <p>= <MathText>{'$\\frac{9 \\times 100}{20}\\%$'}</MathText> = <MathText>{'$\\frac{900}{20}\\%$'}</MathText> = <strong>45%</strong></p>
                <p className="mt-2">45% of 400 ml is 180 ml.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Unit Conversion */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">2. Remember: Same Units!</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg border-l-4 border-amber-500 mb-4">
              <p className="text-amber-800 dark:text-amber-300 font-semibold">
                ⚠️ Important: Make sure both quantities have the same unit before calculating!
              </p>
            </div>

            {/* Example with unit conversion */}
            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border-l-4 border-teal-500 mb-4">
              <p className="font-semibold text-teal-800 dark:text-teal-300 mb-2">Example: Mr Lim bought 2 kg of grapes. His family ate 500 g. What percentage did they eat?</p>
              <div className="ml-4 space-y-2 text-gray-800 dark:text-gray-200">
                <p className="font-medium text-rose-600 dark:text-rose-400">Step 1: Convert to same units</p>
                <p>2 kg = 2000 g</p>
                <p className="font-medium text-rose-600 dark:text-rose-400 mt-3">Step 2: Calculate percentage</p>
                <p><MathText>{'$\\frac{500}{2000} \\times 100\\%$'}</MathText></p>
                <p>= <MathText>{'$\\frac{1}{4} \\times 100\\%$'}</MathText></p>
                <p>= <strong>25%</strong></p>
                <p className="mt-2">They ate 25% of the grapes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Finding Quantity from Percentage */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">3. Finding a Quantity from a Percentage</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border-l-4 border-purple-500 mb-4">
              <p className="text-purple-800 dark:text-purple-300 font-semibold text-lg">
                Formula: X% of Y = <MathText>{'$\\frac{X}{100} \\times Y$'}</MathText>
              </p>
            </div>

            {/* Example with two methods */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-500 mb-4">
              <p className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
                Example: Amy baked 200 cookies. Her friends ate 80% of the cookies. How many cookies did she have left?
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Method 1 */}
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Method 1: Find eaten, then subtract</h4>
                  <div className="space-y-1 text-gray-800 dark:text-gray-200">
                    <p>80% × 200</p>
                    <p>= <MathText>{'$\\frac{80 \\times 200}{100}$'}</MathText></p>
                    <p>= <MathText>{'$\\frac{16000}{100}$'}</MathText> = 160</p>
                    <p className="mt-2">Amy's friends ate 160 cookies.</p>
                    <p>200 − 160 = <strong>40 cookies left</strong></p>
                  </div>
                </div>

                {/* Method 2 */}
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Method 2: Find remaining % first</h4>
                  <div className="space-y-1 text-gray-800 dark:text-gray-200">
                    <p>100% − 80% = 20% left</p>
                    <p>100% of cookies = 200</p>
                    <p>10% of cookies = 200 ÷ 10 = 20</p>
                    <p>20% of cookies = 20 × 2 = <strong>40 cookies</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Multi-Step Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">4. Multi-Step Problems</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg border-l-4 border-rose-500 mb-4">
              <p className="font-semibold text-rose-800 dark:text-rose-300 mb-3">
                Example: There are 160 students in four Primary 5 classes. The table shows the number in 5A, 5B, and 5C. What percentage are in 5D?
              </p>

              {/* Table */}
              <div className="overflow-x-auto mb-4">
                <table className="border-collapse">
                  <thead>
                    <tr>
                      <th className="border-2 border-rose-300 dark:border-rose-600 bg-rose-200 dark:bg-rose-800 p-2 text-rose-900 dark:text-rose-100">Class</th>
                      <th className="border-2 border-rose-300 dark:border-rose-600 bg-rose-200 dark:bg-rose-800 p-2 text-rose-900 dark:text-rose-100">Number of Students</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-2 border-rose-300 dark:border-rose-600 bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-200">5A</td>
                      <td className="border-2 border-rose-300 dark:border-rose-600 bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-200">42</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-rose-300 dark:border-rose-600 bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-200">5B</td>
                      <td className="border-2 border-rose-300 dark:border-rose-600 bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-200">38</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-rose-300 dark:border-rose-600 bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-200">5C</td>
                      <td className="border-2 border-rose-300 dark:border-rose-600 bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-200">40</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-rose-300 dark:border-rose-600 bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-200">5D</td>
                      <td className="border-2 border-rose-300 dark:border-rose-600 bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-200">?</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-2 text-gray-800 dark:text-gray-200">
                <p><strong>Step 1:</strong> Find students in 5A, 5B, 5C</p>
                <p className="ml-4">42 + 38 + 40 = 120</p>
                <p><strong>Step 2:</strong> Find students in 5D</p>
                <p className="ml-4">160 − 120 = 40</p>
                <p><strong>Step 3:</strong> Find percentage</p>
                <p className="ml-4"><MathText>{'$\\frac{40}{160} \\times 100\\% = \\frac{1}{4} \\times 100\\% = $'}</MathText><strong>25%</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: What percentage is...
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                What percentage of 50 is 15?
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
                    <MathText>{'$\\frac{15}{50} \\times 100\\% = \\frac{3}{10} \\times 100\\% = \\frac{300}{10}\\% = $'}</MathText><strong>30%</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Unit conversion
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A tank holds 5 litres of water. 1500 ml was used. What percentage was used?
              </p>
              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution2 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution2 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-2">5 litres = 5000 ml</p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <MathText>{'$\\frac{1500}{5000} \\times 100\\% = \\frac{15}{50} \\times 100\\% = \\frac{3}{10} \\times 100\\% = $'}</MathText><strong>30%</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Finding quantity
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                There are 400 books in a library. 35% are fiction books. How many fiction books are there?
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
                    35% × 400 = <MathText>{'$\\frac{35}{100} \\times 400 = \\frac{35 \\times 400}{100} = \\frac{14000}{100} = $'}</MathText><strong>140 fiction books</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 4: Finding remaining
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A farmer has 500 chickens. He sold 60% of them. How many chickens does he have left?
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
                    <strong>Method 1:</strong> 60% × 500 = 300 sold, 500 − 300 = <strong>200 left</strong>
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>Method 2:</strong> 100% − 60% = 40% left, 40% × 500 = <strong>200 chickens</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>What percentage?</strong> Use <MathText>{'$\\frac{\\text{Part}}{\\text{Whole}} \\times 100\\%$'}</MathText></li>
            <li><strong>Same units</strong>: Always convert to same units first!</li>
            <li><strong>X% of Y</strong>: Calculate <MathText>{'$\\frac{X}{100} \\times Y$'}</MathText></li>
            <li><strong>Finding remaining</strong>: Either subtract from whole OR use (100% − X%)</li>
            <li>The <strong>whole</strong> goes in the denominator</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PartOfWhole;
