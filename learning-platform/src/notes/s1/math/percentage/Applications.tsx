import { useState } from 'react';
import MathText from '../../../../components/MathText';

const Applications = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-green-600 dark:from-emerald-600 dark:to-green-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Real-World Percentage Applications</h1>
        <p className="mt-2 text-emerald-100">Applying percentages to discounts, taxes, interest, and instalments</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: Discount */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Discount Calculations
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>discount</strong> is a reduction in the marked (original) price of an item. Discounts are typically
              expressed as percentages and can be applied singly or successively.
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded mb-4">
              <p className="font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Key Formulas:</p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><MathText>{'$\\text{Discount amount} = \\text{Marked price} \\times (\\text{\\% discount} / 100)$'}</MathText></p>
                <p><MathText>{'$\\text{Selling price} = \\text{Marked price} - \\text{Discount}$'}</MathText></p>
                <p><MathText>{'$\\text{OR: Selling price} = \\text{Marked price} \\times (100\\% - \\text{\\% discount})$'}</MathText></p>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <p className="font-semibold text-red-800 dark:text-red-300 mb-2">⚠️ Successive Discounts:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Multiple discounts are applied <strong>sequentially</strong>, not added! A 30% + 20% discount is NOT 50% off.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                Apply each discount to the current price, not the original.
              </p>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Necklace with Successive Discounts
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A necklace is marked at $3,400. During a sale, it has a 30% discount, followed by an additional 20% discount
              for members. What is the final selling price for a member?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Apply first discount (30%)
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Price after 30% off = $3,400 <MathText>{'$\\times$'}</MathText> 0.70 = $2,380
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2">
                <strong>Step 2:</strong> Apply second discount (20%) to new price
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Final price = $2,380 <MathText>{'$\\times$'}</MathText> 0.80 = $1,904
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Answer:</strong> The final selling price for a member is $1,904.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                Note: Total discount = $3,400 - $1,904 = $1,496, which is 44% of the original price,
                NOT 50% (30% + 20%).
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm italic">
                Alternative calculation: $3,400 <MathText>{'$\\times$'}</MathText> 0.70 <MathText>{'$\\times$'}</MathText> 0.80 = $1,904
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Laptop Discount
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A laptop is priced at $2,500. It has a 25% discount during a flash sale. What is the selling price?
              If the store offers an additional 10% discount for students, what would a student pay?
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Part 1:</strong> Regular sale price (25% off)</p>
                <p className="text-gray-700 dark:text-gray-300">
                  $2,500 <MathText>{'$\\times$'}</MathText> 0.75 = $1,875
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Part 2:</strong> Student price (additional 10% off)</p>
                <p className="text-gray-700 dark:text-gray-300">
                  $1,875 <MathText>{'$\\times$'}</MathText> 0.90 = $1,687.50
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Answer:</strong> Regular sale price is $1,875. Student price is $1,687.50.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: GST */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Goods and Services Tax (GST)
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>GST</strong> (Goods and Services Tax) is a consumption tax added to the price of goods and services.
              In Singapore, the current GST rate is 9% (as of 2024).
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Key Formulas:</p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><MathText>{'$\\text{GST amount} = \\text{Price before GST} \\times \\text{GST rate}$'}</MathText></p>
                <p><MathText>{'$\\text{Price including GST} = \\text{Price before GST} \\times (100\\% + \\text{GST rate})$'}</MathText></p>
                <p><MathText>{'$\\text{Price before GST} = \\text{Price including GST} \\div (100\\% + \\text{GST rate})$'}</MathText></p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Two Types of Problems:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><strong>Adding GST:</strong> Given price before GST, find total price</li>
                <li><strong>Removing GST:</strong> Given total price (inclusive), find price before GST</li>
              </ul>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: GST Calculation (Both Directions)
            </h3>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded space-y-4">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(a) Adding GST:</strong> A meal costs $80 before GST. What is the total price including 9% GST?
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  GST amount = $80 <MathText>{'$\\times$'}</MathText> 0.09 = $7.20
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Total price = $80 + $7.20 = $87.20
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  OR: $80 <MathText>{'$\\times$'}</MathText> 1.09 = $87.20
                </p>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(b) Removing GST:</strong> The total bill is $87.20 (inclusive of 9% GST). What was the price before GST?
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  Price before GST = $87.20 <MathText>{'$\\div$'}</MathText> 1.09 = $80
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  GST amount = $87.20 - $80 = $7.20
                </p>
              </div>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Phone Purchase with GST
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A phone is advertised at $1,200 (before GST). If GST is 9%, what is the total amount you need to pay?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Method 1:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  GST = $1,200 <MathText>{'$\\times$'}</MathText> 0.09 = $108
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Total = $1,200 + $108 = $1,308
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Method 2:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  Total = $1,200 <MathText>{'$\\times$'}</MathText> 1.09 = $1,308
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Answer:</strong> You need to pay $1,308.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Simple Interest */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Simple Interest
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Simple interest</strong> is interest calculated only on the original principal (the amount deposited or borrowed).
              It does not compound - the interest earned/charged is constant each period.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Simple Interest Formula:</p>
              <p className="text-center text-gray-700 dark:text-gray-300 text-xl my-3">
                <MathText>{'$I = P \\times R \\times T$'}</MathText>
              </p>
              <div className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <p><strong>I</strong> = Interest earned or paid</p>
                <p><strong>P</strong> = Principal (initial amount)</p>
                <p><strong>R</strong> = Annual interest rate (as decimal: 5% = 0.05)</p>
                <p><strong>T</strong> = Time period in years</p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Total Amount:</p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{'$\\text{Total amount} = \\text{Principal} + \\text{Interest}$'}</MathText>
              </p>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Savings Account Interest
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Sarah deposits $3,600 in a savings account that pays 1.5% simple interest per annum.
              How much interest will she earn after 3 years? What will be the total amount in her account?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Given:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                <li>Principal (P) = $3,600</li>
                <li>Rate (R) = 1.5% per annum = 0.015</li>
                <li>Time (T) = 3 years</li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2">
                <strong>Step 1:</strong> Calculate interest
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{'$I = P \\times R \\times T$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                I = $3,600 <MathText>{'$\\times$'}</MathText> 0.015 <MathText>{'$\\times$'}</MathText> 3 = $162
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2">
                <strong>Step 2:</strong> Calculate total amount
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Total = $3,600 + $162 = $3,762
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Answer:</strong> Interest earned = $162. Total amount = $3,762.
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Loan Interest
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A person borrows $5,000 at 4% simple interest per annum. How much interest must they pay after 2 years?
              What is the total amount to be repaid?
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Given:</strong></p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                  <li>P = $5,000</li>
                  <li>R = 4% = 0.04</li>
                  <li>T = 2 years</li>
                </ul>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Calculate interest:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  I = $5,000 <MathText>{'$\\times$'}</MathText> 0.04 <MathText>{'$\\times$'}</MathText> 2 = $400
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Total repayment:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  Total = $5,000 + $400 = $5,400
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Answer:</strong> Interest = $400. Total repayment = $5,400.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Instalments */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            4. Instalments and Down Payments
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When purchasing expensive items, buyers often pay a <strong>down payment</strong> upfront and the
              remaining <strong>outstanding balance</strong> in monthly instalments. Interest is typically charged
              on the outstanding balance.
            </p>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-4">
              <p className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Calculation Steps:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Calculate down payment = Total price × % down payment</li>
                <li>Calculate outstanding balance = Total price - Down payment</li>
                <li>Calculate interest on outstanding balance</li>
                <li>Calculate total to pay in instalments = Outstanding + Interest</li>
                <li>Calculate monthly instalment = Total in instalments ÷ Number of months</li>
              </ol>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: TV Set Purchase on Instalment
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A TV set costs $2,750. A customer pays 30% down payment and the rest in 12 monthly instalments.
              If interest is charged at 6% per annum on the outstanding balance, calculate:
              (a) the down payment, (b) the monthly instalment amount, (c) the total cost of the TV.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>(a) Down payment:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Down payment = $2,750 <MathText>{'$\\times$'}</MathText> 0.30 = $825
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2">
                <strong>(b) Monthly instalment:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 1:</strong> Outstanding balance = $2,750 - $825 = $1,925
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Step 2:</strong> Interest on outstanding (6% per annum for 1 year)
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Interest = $1,925 <MathText>{'$\\times$'}</MathText> 0.06 = $115.50
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Step 3:</strong> Total in instalments
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                $1,925 + $115.50 = $2,040.50
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Step 4:</strong> Monthly instalment
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                $2,040.50 <MathText>{'$\\div$'}</MathText> 12 = $170.04 (rounded to nearest cent)
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2">
                <strong>(c) Total cost:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Total = $825 + $2,040.50 = $2,865.50
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Answers:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                <li>(a) Down payment = $825</li>
                <li>(b) Monthly instalment = $170.04</li>
                <li>(c) Total cost = $2,865.50 (which is $115.50 more than the original price)</li>
              </ul>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Furniture Purchase
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A sofa set costs $4,800. A customer pays 25% down payment and the rest over 18 months with 5% interest per annum
              on the outstanding balance. Calculate the monthly instalment amount.
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Step 1:</strong> Down payment</p>
                <p className="text-gray-700 dark:text-gray-300">
                  $4,800 <MathText>{'$\\times$'}</MathText> 0.25 = $1,200
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Step 2:</strong> Outstanding balance</p>
                <p className="text-gray-700 dark:text-gray-300">
                  $4,800 - $1,200 = $3,600
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Step 3:</strong> Interest (5% per annum for 18 months = 1.5 years)</p>
                <p className="text-gray-700 dark:text-gray-300">
                  $3,600 <MathText>{'$\\times$'}</MathText> 0.05 <MathText>{'$\\times$'}</MathText> 1.5 = $270
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Step 4:</strong> Total in instalments</p>
                <p className="text-gray-700 dark:text-gray-300">
                  $3,600 + $270 = $3,870
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Step 5:</strong> Monthly instalment</p>
                <p className="text-gray-700 dark:text-gray-300">
                  $3,870 <MathText>{'$\\div$'}</MathText> 18 = $215
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Answer:</strong> The monthly instalment is $215.
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
            <li><strong>Discount:</strong> Selling price = Marked price × (100% - % discount); successive discounts multiply, not add</li>
            <li><strong>GST:</strong> Price with GST = Price × (100% + GST rate); to remove GST, divide by (100% + GST rate)</li>
            <li><strong>Simple Interest:</strong> I = P × R × T; calculated only on principal, doesn't compound</li>
            <li><strong>Instalments:</strong> Outstanding = Total - Down payment; add interest to outstanding, then divide by months</li>
            <li>Interest is charged on outstanding balance, not total price</li>
            <li>Total cost with instalments is always higher than cash price due to interest</li>
            <li>Always convert time to years when using per annum rates (18 months = 1.5 years)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Applications;
