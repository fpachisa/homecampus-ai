import { useState } from 'react';
import MathText from '../../../../components/MathText';

const Conversions = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Conversions between Fractions, Decimals and Percentages</h1>
        <p className="text-lg">Learn to convert between these three forms!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Fraction to Percentage */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. Converting Fractions to Percentages</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Two Methods</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Method 1 */}
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Method 1: Multiply by 100%</h4>
                <div className="space-y-3 text-gray-800 dark:text-gray-200">
                  <p>Express <MathText>{'$\\frac{3}{5}$'}</MathText> as a percentage:</p>
                  <div className="ml-4 space-y-1">
                    <p><MathText>{'$\\frac{3}{5} \\times 100\\%$'}</MathText></p>
                    <p>= <MathText>{'$\\frac{3 \\times 100}{5}\\%$'}</MathText></p>
                    <p>= <MathText>{'$\\frac{300}{5}\\%$'}</MathText></p>
                    <p>= <strong>60%</strong></p>
                  </div>
                </div>
              </div>

              {/* Method 2 */}
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Method 2: Equivalent Fractions</h4>
                <div className="space-y-3 text-gray-800 dark:text-gray-200">
                  <p>Convert to denominator 100:</p>
                  <div className="ml-4 space-y-1">
                    <p><MathText>{'$\\frac{3}{5} = \\frac{3 \\times 20}{5 \\times 20} = \\frac{60}{100}$'}</MathText></p>
                    <p>= <strong>60%</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Another example */}
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mt-4 border-l-4 border-purple-500">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Example: Express <MathText>{'$\\frac{16}{200}$'}</MathText> as a percentage</p>
              <div className="grid md:grid-cols-2 gap-4 text-gray-800 dark:text-gray-200">
                <div>
                  <p className="font-medium">Method 1:</p>
                  <p><MathText>{'$\\frac{16}{200} \\times 100\\% = \\frac{16 \\times 100}{200}\\% = \\frac{1600}{200}\\% = 8\\%$'}</MathText></p>
                </div>
                <div>
                  <p className="font-medium">Method 2:</p>
                  <p><MathText>{'$\\frac{16}{200} = \\frac{16 \\div 2}{200 \\div 2} = \\frac{8}{100} = 8\\%$'}</MathText></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Decimal to Percentage */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Converting Decimals to Percentages</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg border-l-4 border-amber-500 mb-4">
              <p className="text-amber-800 dark:text-amber-300 font-semibold">
                Rule: Multiply the decimal by 100 to get the percentage
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Or: Convert decimal to fraction with denominator 100
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example (a): 0.05 as a percentage</p>
                <p className="text-gray-800 dark:text-gray-200">
                  0.05 = <MathText>{'$\\frac{5}{100}$'}</MathText> = <strong>5%</strong>
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example (b): 0.15 as a percentage</p>
                <p className="text-gray-800 dark:text-gray-200">
                  0.15 = <MathText>{'$\\frac{15}{100}$'}</MathText> = <strong>15%</strong>
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example (c): 0.3 as a percentage</p>
                <p className="text-gray-800 dark:text-gray-200">
                  0.3 = <MathText>{'$\\frac{3}{10} = \\frac{30}{100}$'}</MathText> = <strong>30%</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Percentage to Decimal */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">3. Converting Percentages to Decimals</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg border-l-4 border-teal-500 mb-4">
              <p className="text-teal-800 dark:text-teal-300 font-semibold">
                Rule: Divide the percentage by 100 to get the decimal
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">99% as a decimal:</p>
                <p className="text-gray-800 dark:text-gray-200">
                  99% = <MathText>{'$\\frac{99}{100}$'}</MathText> = <strong>0.99</strong>
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">7% as a decimal:</p>
                <p className="text-gray-800 dark:text-gray-200">
                  7% = <MathText>{'$\\frac{7}{100}$'}</MathText> = <strong>0.07</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Percentage to Fraction */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">4. Converting Percentages to Fractions</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="bg-rose-50 dark:bg-rose-900/30 p-4 rounded-lg border-l-4 border-rose-500 mb-4">
              <p className="text-rose-800 dark:text-rose-300 font-semibold">
                Rule: Write as fraction over 100, then simplify to lowest terms
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">75% as a fraction:</p>
                <div className="text-gray-800 dark:text-gray-200 space-y-1">
                  <p>75% = <MathText>{'$\\frac{75}{100}$'}</MathText></p>
                  <p>= <MathText>{'$\\frac{75 \\div 25}{100 \\div 25}$'}</MathText></p>
                  <p>= <strong><MathText>{'$\\frac{3}{4}$'}</MathText></strong></p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">80% as a fraction:</p>
                <div className="text-gray-800 dark:text-gray-200 space-y-1">
                  <p>80% = <MathText>{'$\\frac{80}{100}$'}</MathText></p>
                  <p>= <MathText>{'$\\frac{80 \\div 20}{100 \\div 20}$'}</MathText></p>
                  <p>= <strong><MathText>{'$\\frac{4}{5}$'}</MathText></strong></p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">6% as a fraction:</p>
                <div className="text-gray-800 dark:text-gray-200 space-y-1">
                  <p>6% = <MathText>{'$\\frac{6}{100}$'}</MathText></p>
                  <p>= <MathText>{'$\\frac{6 \\div 2}{100 \\div 2}$'}</MathText></p>
                  <p>= <strong><MathText>{'$\\frac{3}{50}$'}</MathText></strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Table */}
        <section>
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
            <h3 className="font-bold text-xl mb-4 text-blue-800 dark:text-blue-300">📌 Conversion Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-2 border-blue-300 dark:border-blue-600 bg-blue-200 dark:bg-blue-800 p-3 text-blue-900 dark:text-blue-100">From</th>
                    <th className="border-2 border-blue-300 dark:border-blue-600 bg-blue-200 dark:bg-blue-800 p-3 text-blue-900 dark:text-blue-100">To</th>
                    <th className="border-2 border-blue-300 dark:border-blue-600 bg-blue-200 dark:bg-blue-800 p-3 text-blue-900 dark:text-blue-100">Method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Fraction</td>
                    <td className="border-2 border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Percentage</td>
                    <td className="border-2 border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">× 100% OR equivalent fraction /100</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Decimal</td>
                    <td className="border-2 border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Percentage</td>
                    <td className="border-2 border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">× 100</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Percentage</td>
                    <td className="border-2 border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Decimal</td>
                    <td className="border-2 border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">÷ 100</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Percentage</td>
                    <td className="border-2 border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Fraction</td>
                    <td className="border-2 border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Write as /100, simplify</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: Fraction to Percentage
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Express <MathText>{'$\\frac{9}{20}$'}</MathText> as a percentage.
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
                    <MathText>{'$\\frac{9}{20} \\times 100\\% = \\frac{9 \\times 100}{20}\\% = \\frac{900}{20}\\% = $'}</MathText><strong>45%</strong>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                    Or: <MathText>{'$\\frac{9}{20} = \\frac{9 \\times 5}{20 \\times 5} = \\frac{45}{100} = 45\\%$'}</MathText>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Decimal to Percentage
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Express 0.72 as a percentage.
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
                    0.72 = <MathText>{'$\\frac{72}{100}$'}</MathText> = <strong>72%</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Percentage to Decimal
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Express 45% as a decimal.
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
                    45% = <MathText>{'$\\frac{45}{100}$'}</MathText> = <strong>0.45</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 4: Percentage to Fraction
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Express 40% as a fraction in its simplest form.
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
                    40% = <MathText>{'$\\frac{40}{100} = \\frac{40 \\div 20}{100 \\div 20} = $'}</MathText><strong><MathText>{'$\\frac{2}{5}$'}</MathText></strong>
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
            <li><strong>Fraction → Percentage</strong>: Multiply by 100% OR make denominator 100</li>
            <li><strong>Decimal → Percentage</strong>: Multiply by 100 (move decimal 2 places right)</li>
            <li><strong>Percentage → Decimal</strong>: Divide by 100 (move decimal 2 places left)</li>
            <li><strong>Percentage → Fraction</strong>: Write over 100, then simplify</li>
            <li>Remember: 100% = 1 whole = <MathText>{'$\\frac{100}{100}$'}</MathText> = 1.00</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Conversions;
