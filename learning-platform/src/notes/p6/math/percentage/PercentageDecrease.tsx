import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function PercentageDecrease() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Percentage Decrease</h1>
        <p className="text-lg">Learn to calculate and apply percentage decreases</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Understanding Percentage Decrease */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">1. Understanding Percentage Decrease</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Big Idea</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              When a value goes <strong>DOWN</strong>, we have a <strong>decrease</strong>.<br />
              The <strong>original value</strong> is always <strong>100%</strong> (the base).
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">The Formula</h3>
            <div className="p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 text-lg">
                <strong>Decrease = Original Value - New Value</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 text-lg mt-2">
                <strong>Percentage Decrease = (Decrease / Original) x 100%</strong>
              </p>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Key Relationship:</strong> % Remaining = 100% - % Decrease
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Calculating Percentage Decrease */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">2. Calculating Percentage Decrease</h2>

          {/* Example 1: Chess Club */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Chess Club Membership</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A chess club had 280 members last year. 70 members remained in the club this year.
              Find the percentage decrease in the number of members in the club.
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Chess Club Membership",
                bars: [
                  { label: "Last year", segments: [{ percentage: 100, value: "280", color: "green" }] },
                  { label: "This year", segments: [{ percentage: 25, value: "70", color: "blue" }] }
                ],
                percentageMarkers: [0, 25, 100],
                differenceBracket: { barIndices: [0, 1], value: "210", label: "decrease" },
                caption: "Decrease = 280 - 70 = 210 members"
              }}
            />

            <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                Decrease = 280 - 70 = 210 members<br />
                Percentage Decrease = (210 / 280) x 100% = <strong>75%</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                The percentage decrease in the number of members is 75%.
              </p>
            </div>

            <div className="mt-4">
              <MathToolRenderer
                toolName="unitaryMethodTable"
                parameters={{
                  title: "Calculating Percentage Decrease",
                  headers: ["Number of members", "Percentage"],
                  rows: [
                    { percentage: "100%", value: "280" },
                    { percentage: "25%", value: "70" },
                    { percentage: "75%", value: "210", highlight: true }
                  ],
                  operations: [
                    { fromRow: 0, toRow: 1, leftOp: "div 4", rightOp: "div 4" },
                    { fromRow: 1, toRow: 2, leftOp: "x3", rightOp: "x3" }
                  ],
                  swapColumns: true,
                  annotation: "Decrease = 100% - 25% = 75%"
                }}
              />
            </div>
          </div>

          {/* Example 2: Mobile Phone Sales */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Mobile Phone Sales</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Mr Tan sold 60 mobile phones in March. His sales decreased by 15% in April.
              How many mobile phones did he sell in April?
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Mobile Phone Sales",
                bars: [
                  { label: "March", segments: [{ percentage: 100, value: "60", color: "green" }] },
                  { label: "April", segments: [
                    { percentage: 85, value: "?", label: "remaining", color: "blue" },
                    { percentage: 15, value: "9", label: "decrease", color: "red" }
                  ]}
                ],
                percentageMarkers: [0, 85, 100],
                referenceLine: { percentage: 100, label: "100% (March)" },
                caption: "April sales = 100% - 15% = 85% of March sales"
              }}
            />

            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                Decrease = 15% of 60 = 15/100 x 60 = <strong>9 phones</strong><br />
                April sales = 60 - 9 = <strong>51 phones</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>Or directly:</strong> 85% of 60 = 85/100 x 60 = 51 phones
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Finding New Value from Percentage Decrease */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-pink-700 dark:text-pink-300">3. Finding New Value from Percentage Decrease</h2>

          <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border-l-4 border-pink-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Method</h3>
            <p className="text-gray-800 dark:text-gray-200">
              <strong>Step 1:</strong> Calculate the decrease: Original x (Percentage / 100)<br />
              <strong>Step 2:</strong> Subtract from original: New Value = Original - Decrease<br />
              <strong>Or:</strong> New Value = Original x (100% - Decrease%) / 100%
            </p>
          </div>

          {/* Discount Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: 20% Discount on T-Shirt</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The usual price of a T-shirt is $40. How much does the T-shirt cost after a 20% discount?
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "T-Shirt with 20% Discount",
                bars: [{
                  label: "Price",
                  segments: [
                    { percentage: 80, value: "$32", label: "sale price", color: "green" },
                    { percentage: 20, value: "$8", label: "discount", color: "red", highlight: true }
                  ]
                }],
                percentageMarkers: [0, 80, 100],
                totalBracket: { barIndices: [0], value: "$40", label: "original", position: "right" },
                caption: "Sale price = 100% - 20% = 80% of original"
              }}
            />

            <div className="mt-4 p-4 bg-pink-50 dark:bg-pink-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                Discount = 20% of $40 = 20/100 x $40 = <strong>$8</strong><br />
                Sale Price = $40 - $8 = <strong>$32</strong>
              </p>
            </div>
          </div>

          {/* Blouse Price Decrease */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Blouse Price Decrease</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The price of a blouse decreased by 25%. The decrease was $9.
              What was the price of the blouse after the decrease?
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Blouse Price After Decrease",
                bars: [{
                  label: "Price",
                  segments: [
                    { percentage: 75, value: "?", label: "new price", color: "green" },
                    { percentage: 25, value: "$9", label: "decrease", color: "red", highlight: true }
                  ]
                }],
                percentageMarkers: [0, 75, 100],
                partialBracket: { barIndex: 0, fromPercent: 75, toPercent: 100, value: "$9", label: "25%", position: "bottom" }
              }}
            />

            <MathToolRenderer
              toolName="unitaryMethodTable"
              parameters={{
                title: "Finding the New Price",
                rows: [
                  { percentage: "25%", value: "$9" },
                  { percentage: "75%", value: "$27", highlight: true },
                  { percentage: "100%", value: "$36" }
                ],
                operations: [
                  { fromRow: 0, toRow: 1, leftOp: "x3", rightOp: "x3" },
                  { fromRow: 1, toRow: 2, leftOp: "+25%", rightOp: "+$9" }
                ],
                annotation: "New price = $27. Original was $36."
              }}
            />
          </div>
        </section>

        {/* Section 4: Finding Original from Percentage Decrease */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">4. Finding Original from Percentage Decrease</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Insight</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              If you know the <strong>remaining amount</strong> after a decrease, that amount represents:<br />
              <strong>(100% - Decrease%)</strong> of the original!
            </p>
          </div>

          {/* Basketball Match Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Basketball Match Spectators</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              During a basketball match, some spectators left and the number of spectators decreased
              by 30% to 210. Find the number of spectators at the start of the match.
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Basketball Match Spectators",
                bars: [{
                  label: "Spectators",
                  segments: [
                    { percentage: 70, value: "210", label: "remaining", color: "blue" },
                    { percentage: 30, label: "left", color: "red" }
                  ]
                }],
                percentageMarkers: [0, 70, 100],
                totalBracket: { barIndices: [0], value: "?", label: "original", position: "right" },
                caption: "If 30% left, then 70% remained. 70% = 210."
              }}
            />

            <MathToolRenderer
              toolName="unitaryMethodTable"
              parameters={{
                title: "Finding Original Number of Spectators",
                rows: [
                  { percentage: "70%", value: "210" },
                  { percentage: "10%", value: "30" },
                  { percentage: "100%", value: "300", highlight: true }
                ],
                operations: [
                  { fromRow: 0, toRow: 1, leftOp: "div 7", rightOp: "div 7" },
                  { fromRow: 1, toRow: 2, leftOp: "x10", rightOp: "x10" }
                ],
                annotation: "There were 300 spectators at the start."
              }}
            />

            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                100% - 30% = 70% remaining<br />
                70% = 210 spectators<br />
                1% = 210 / 70 = 3 spectators<br />
                100% = 3 x 100 = <strong>300 spectators</strong>
              </p>
            </div>
          </div>

          {/* Cookie Problem */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Devi's Cookies</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Devi baked some cookies. She ate 20% of the cookies and gave 1/5 of the remainder
              to her neighbour. She was left with 96 cookies. How many cookies did she bake?
            </p>

            <MathToolRenderer
              toolName="percentageStackedBar"
              parameters={{
                title: "Devi's Cookies",
                segments: [
                  { label: "ate", percentage: 20, color: "red", subLabel: "(20%)" },
                  { label: "gave away", percentage: 16, color: "orange", subLabel: "(1/5 of 80%)" },
                  { label: "left", percentage: 64, value: "96", color: "green", highlight: true }
                ],
                percentageMarkers: [0, 20, 36, 100],
                totalValue: { value: "?", label: "Total baked", position: "top" },
                caption: "After eating 20%, 80% remained. Gave 1/5 of 80% = 16%. Left with 64%."
              }}
            />

            <MathToolRenderer
              toolName="unitaryMethodTable"
              parameters={{
                title: "Finding Total Cookies",
                rows: [
                  { percentage: "64%", value: "96" },
                  { percentage: "8%", value: "12" },
                  { percentage: "100%", value: "150", highlight: true }
                ],
                operations: [
                  { fromRow: 0, toRow: 1, leftOp: "div 8", rightOp: "div 8" },
                  { fromRow: 1, toRow: 2, leftOp: "x12.5", rightOp: "x12.5" }
                ],
                annotation: "Devi baked 150 cookies."
              }}
            />
          </div>
        </section>

        {/* Key Points Summary */}
        <section>
          <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 p-6 rounded-lg border-2 border-orange-300 dark:border-orange-700">
            <h2 className="text-xl font-bold mb-4 text-orange-800 dark:text-orange-200">Key Points to Remember</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li>&#x2713; <strong>Decrease = Original Value - New Value</strong></li>
              <li>&#x2713; <strong>% Decrease = (Decrease / Original) x 100%</strong></li>
              <li>&#x2713; <strong>% Remaining = 100% - % Decrease</strong></li>
              <li>&#x2713; Always divide by the <strong>ORIGINAL</strong> value</li>
              <li>&#x2713; Discount is a common example of percentage decrease</li>
              <li>&#x2713; To find original from remaining: remaining = (100% - decrease%)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
