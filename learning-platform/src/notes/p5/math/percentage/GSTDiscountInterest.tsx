import { useState } from 'react';
import MathText from '../../../../components/MathText';

const GSTDiscountInterest = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-600 dark:to-cyan-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">GST, Discount and Annual Interest</h1>
        <p className="text-lg">Learn to apply percentages in real-life money situations!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: GST */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">1. Goods and Services Tax (GST)</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg border-l-4 border-teal-500 mb-4">
              <p className="text-teal-800 dark:text-teal-300 font-semibold text-lg">
                GST stands for Goods and Services Tax
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                It is a tax on goods and services in Singapore. The current GST rate is <strong>9%</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Formula:</p>
                <p className="text-gray-800 dark:text-gray-200">GST = 9% × Price (before GST)</p>
                <p className="text-gray-800 dark:text-gray-200 mt-2">Total = Price + GST</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Alternative:</p>
                <p className="text-gray-800 dark:text-gray-200">Total = 109% × Price</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">(100% + 9% = 109%)</p>
              </div>
            </div>

            {/* Example 1 */}
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 mb-4">
              <p className="font-semibold text-amber-800 dark:text-amber-300 mb-3">
                Example: Mr Tan bought a fan for $80 (before GST). How much did he pay in total?
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-gray-800 dark:text-gray-200">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Method 1: Find GST first</h4>
                  <div className="space-y-1">
                    <p>GST = 9% × $80</p>
                    <p>= <MathText>{'$\\frac{9}{100} \\times $'}</MathText>$80</p>
                    <p>= $7.20</p>
                    <p className="mt-2">Total = $80 + $7.20 = <strong>$87.20</strong></p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Method 2: Direct calculation</h4>
                  <div className="space-y-1">
                    <p>100% of price = $80</p>
                    <p>1% of price = $80 ÷ 100 = $0.80</p>
                    <p>9% of price = $0.80 × 9 = $7.20</p>
                    <p className="mt-2">Total = $80 + $7.20 = <strong>$87.20</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 2: Washing machine */}
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                Example: A washing machine costs $500 before GST. What is the price including 9% GST?
              </p>
              <div className="text-gray-800 dark:text-gray-200 space-y-1">
                <p>GST = 9% × $500 = <MathText>{'$\\frac{9}{100} \\times $'}</MathText>$500 = $45</p>
                <p>Price with GST = $500 + $45 = <strong>$545</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Discounts */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">2. Discounts</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="bg-rose-50 dark:bg-rose-900/30 p-4 rounded-lg border-l-4 border-rose-500 mb-4">
              <p className="text-rose-800 dark:text-rose-300 font-semibold text-lg">
                A discount is a reduction in price
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Discount = X% of usual price<br />
                Price after discount = Usual price − Discount
              </p>
            </div>

            {/* Example */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-500 mb-4">
              <p className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
                Example: Jiahao bought a T-shirt at a 25% discount. The usual price was $36.
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-gray-800 dark:text-gray-200">
                <div>
                  <p className="font-medium mb-2">(a) How much was the discount?</p>
                  <div className="space-y-1">
                    <p>Discount = 25% × $36</p>
                    <p>= <MathText>{'$\\frac{25}{100} \\times $'}</MathText>$36</p>
                    <p>= <strong>$9</strong></p>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">(b) How much did he pay?</p>
                  <div className="space-y-1">
                    <p>Price after discount = $36 − $9</p>
                    <p>= <strong>$27</strong></p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-3 rounded mt-4">
                <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">Alternative method:</p>
                <p className="text-gray-800 dark:text-gray-200">
                  100% − 25% = 75%, so he paid 75% × $36 = <MathText>{'$\\frac{75}{100} \\times $'}</MathText>$36 = $27
                </p>
              </div>
            </div>

            {/* Bigger discount example */}
            <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border-l-4 border-cyan-500">
              <p className="font-semibold text-cyan-800 dark:text-cyan-300 mb-3">
                Example: A camera costs $1650. Mr Salleh bought it at 20% discount.
              </p>
              <div className="text-gray-800 dark:text-gray-200 space-y-2">
                <p>(i) Discount = 20% × $1650 = <MathText>{'$\\frac{20}{100} \\times $'}</MathText>$1650 = <strong>$330</strong></p>
                <p>(ii) He paid = $1650 − $330 = <strong>$1320</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Annual Interest */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">3. Annual Interest</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500 mb-4">
              <p className="text-green-800 dark:text-green-300 font-semibold text-lg">
                Interest is money paid by banks for saving your money
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Interest (1 year) = Rate% × Principal (amount deposited)<br />
                Total after 1 year = Principal + Interest
              </p>
            </div>

            {/* Example 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500 mb-4">
              <p className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">
                Example: Mrs Li deposited $12,000 in Star Bank for one year at 1% interest per year.
              </p>
              <div className="text-gray-800 dark:text-gray-200 space-y-2">
                <p>Interest = 1% × $12,000</p>
                <p>= <MathText>{'$\\frac{1}{100} \\times $'}</MathText>$12,000</p>
                <p>= <strong>$120</strong></p>
                <p className="mt-2">Mrs Li received $120 in interest.</p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500">
              <p className="font-semibold text-orange-800 dark:text-orange-300 mb-3">
                Example: Mr Siva deposited $26,000 at ABC Bank at 3% interest per year. How much will he have after one year?
              </p>
              <div className="text-gray-800 dark:text-gray-200 space-y-2">
                <p>Interest = 3% × $26,000 = <MathText>{'$\\frac{3}{100} \\times $'}</MathText>$26,000 = $780</p>
                <p className="mt-2">Total = $26,000 + $780 = <strong>$26,780</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Table */}
        <section>
          <div className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/40 dark:to-cyan-900/40 p-6 rounded-lg border-2 border-teal-300 dark:border-teal-700">
            <h3 className="font-bold text-xl mb-4 text-teal-800 dark:text-teal-300">📌 Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-2 border-teal-300 dark:border-teal-600 bg-teal-200 dark:bg-teal-800 p-3 text-teal-900 dark:text-teal-100">Type</th>
                    <th className="border-2 border-teal-300 dark:border-teal-600 bg-teal-200 dark:bg-teal-800 p-3 text-teal-900 dark:text-teal-100">Formula</th>
                    <th className="border-2 border-teal-300 dark:border-teal-600 bg-teal-200 dark:bg-teal-800 p-3 text-teal-900 dark:text-teal-100">Final Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-teal-300 dark:border-teal-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">GST (9%)</td>
                    <td className="border-2 border-teal-300 dark:border-teal-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">GST = 9% × Price</td>
                    <td className="border-2 border-teal-300 dark:border-teal-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Price + GST (ADD)</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-teal-300 dark:border-teal-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Discount</td>
                    <td className="border-2 border-teal-300 dark:border-teal-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Discount = X% × Usual Price</td>
                    <td className="border-2 border-teal-300 dark:border-teal-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Price − Discount (SUBTRACT)</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-teal-300 dark:border-teal-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Interest</td>
                    <td className="border-2 border-teal-300 dark:border-teal-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Interest = Rate% × Principal</td>
                    <td className="border-2 border-teal-300 dark:border-teal-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Principal + Interest (ADD)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: GST
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A tablet costs $450 before GST. How much is the total price including 9% GST?
              </p>
              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution1 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution1 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <div className="text-gray-800 dark:text-gray-200 space-y-1">
                    <p>GST = 9% × $450 = $40.50</p>
                    <p>Total = $450 + $40.50 = <strong>$490.50</strong></p>
                  </div>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Discount
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A bicycle has a usual price of $280. During a sale, it is sold at 15% off. How much does it cost during the sale?
              </p>
              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution2 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution2 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <div className="text-gray-800 dark:text-gray-200 space-y-1">
                    <p>Discount = 15% × $280 = $42</p>
                    <p>Sale price = $280 − $42 = <strong>$238</strong></p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                    Or: 85% × $280 = $238
                  </p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Interest
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Mdm Ong deposits $2986 in her savings account for a year. She earns 2% interest per year. How much will she have at the end of one year?
              </p>
              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution3 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution3 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <div className="text-gray-800 dark:text-gray-200 space-y-1">
                    <p>Interest = 2% × $2986 = $59.72</p>
                    <p>Total = $2986 + $59.72 = <strong>$3045.72</strong></p>
                  </div>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 4: GST on discounted item
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A wallet costs $12 before GST. Doris bought it and paid 9% GST. How much did she pay for the wallet?
              </p>
              <button
                onClick={() => setShowSolution4(!showSolution4)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution4 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution4 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <div className="text-gray-800 dark:text-gray-200 space-y-1">
                    <p>GST = 9% × $12 = $1.08</p>
                    <p>Total = $12 + $1.08 = <strong>$13.08</strong></p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-teal-50 dark:bg-teal-900/30 border-l-4 border-teal-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>GST (9%)</strong>: Tax added to price → Total = Price + GST</li>
            <li><strong>Discount</strong>: Reduction from price → Final = Price − Discount</li>
            <li><strong>Interest</strong>: Earned on savings → Total = Principal + Interest</li>
            <li>Use <MathText>{'$\\frac{X}{100} \\times $'}</MathText>Amount to calculate X%</li>
            <li>Alternative: Find 1%, then multiply by the percentage needed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GSTDiscountInterest;
