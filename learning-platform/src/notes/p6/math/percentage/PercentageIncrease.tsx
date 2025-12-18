import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function PercentageIncrease() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Percentage Increase</h1>
        <p className="text-lg">Learn to calculate and apply percentage increases</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Understanding Percentage Increase */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">1. Understanding Percentage Increase</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Big Idea</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              When a value goes <strong>UP</strong>, we have an <strong>increase</strong>.<br />
              The <strong>original value</strong> is always <strong>100%</strong> (the base).
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">The Formula</h3>
            <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 text-lg">
                <strong>Increase = New Value - Original Value</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 text-lg mt-2">
                <strong>Percentage Increase = (Increase / Original) x 100%</strong>
              </p>
            </div>
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border-l-4 border-red-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Important:</strong> Always divide by the <strong>ORIGINAL</strong> value, not the new value!
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Calculating Percentage Increase */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-700 dark:text-emerald-300">2. Calculating Percentage Increase</h2>

          {/* Example 1: Medals */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Prize-Giving Ceremony Medals</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              At a prize-giving ceremony, a tray with 5 medals was prepared for Class A.
              Mrs Tan adds 2 medals on the tray for Class B.
              What is the percentage increase in the number of medals?
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Medals on Tray",
                bars: [
                  { label: "Class A", segments: [{ percentage: 100, value: "5", color: "green" }] },
                  { label: "Class A+B", segments: [
                    { percentage: 100, value: "5", color: "green" },
                    { percentage: 40, value: "2", label: "added", color: "yellow", highlight: true }
                  ]}
                ],
                referenceLine: { percentage: 100, label: "100% (Original)" },
                differenceBracket: { barIndices: [0, 1], value: "2", label: "increase" },
                caption: "5 medals increased to 7 medals (added 2)"
              }}
            />

            <div className="mt-4">
              <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Method 1: Formula</h4>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  Increase = 7 - 5 = 2 medals<br />
                  Percentage Increase = (2 / 5) x 100% = <strong>40%</strong>
                </p>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Method 2: Table Method</h4>
              <MathToolRenderer
                toolName="unitaryMethodTable"
                parameters={{
                  title: "Percentage Increase",
                  headers: ["Number of medals", "Percentage"],
                  rows: [
                    { percentage: "100%", value: "5" },
                    { percentage: "20%", value: "1" },
                    { percentage: "40%", value: "2", highlight: true }
                  ],
                  operations: [
                    { fromRow: 0, toRow: 1, leftOp: "div 5", rightOp: "div 5" },
                    { fromRow: 1, toRow: 2, leftOp: "x2", rightOp: "x2" }
                  ],
                  swapColumns: true,
                  annotation: "The percentage increase is 40%."
                }}
              />
            </div>
          </div>

          {/* Example 2: Buns Sold */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Buns Sold</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Mr Lim sold 80 buns on Monday. On Tuesday, he sold 40 more buns than on Monday.
              Find the percentage increase in the number of buns sold on Tuesday.
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Buns Sold",
                bars: [
                  { label: "Monday", segments: [{ percentage: 100, value: "80", color: "green" }] },
                  { label: "Tuesday", segments: [
                    { percentage: 100, value: "80", color: "green" },
                    { percentage: 50, value: "40", label: "increase", color: "yellow", highlight: true }
                  ]}
                ],
                referenceLine: { percentage: 100, label: "100%" },
                differenceBracket: { barIndices: [0, 1], value: "40", label: "increase" },
                percentageMarkers: [0, 100, 150],
                caption: "Monday (original) = 100%. Tuesday = 150% (100% + 50% increase)"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                Percentage Increase = (40 / 80) x 100% = <strong>50%</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                The percentage increase in the number of buns sold on Tuesday was 50%.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Finding New Value from Percentage Increase */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-300">3. Finding New Value from Percentage Increase</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Method</h3>
            <p className="text-gray-800 dark:text-gray-200">
              <strong>Step 1:</strong> Calculate the increase: Original x (Percentage / 100)<br />
              <strong>Step 2:</strong> Add to original: New Value = Original + Increase
            </p>
          </div>

          {/* Service Charge Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Restaurant Service Charge</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A restaurant bill is $85 before service charge. The restaurant adds a 10% service charge.
              What is the total bill?
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Bill with 10% Service Charge",
                bars: [{
                  label: "Total Bill",
                  segments: [
                    { percentage: 100, value: "$85", label: "food", color: "green" },
                    { percentage: 10, value: "$8.50", label: "service", color: "yellow", highlight: true }
                  ]
                }],
                percentageMarkers: [0, 100, 110],
                caption: "Food (100%) + Service (10%) = 110%"
              }}
            />

            <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                Service charge = 10% of $85 = 10/100 x $85 = <strong>$8.50</strong><br />
                Total bill = $85 + $8.50 = <strong>$93.50</strong>
              </p>
            </div>
          </div>

          {/* Population Growth Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Town Population Growth</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A town had a population of 25,000 people. After new housing was built,
              the population increased by 8%. What is the new population?
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Town Population",
                bars: [{
                  label: "Population",
                  segments: [
                    { percentage: 100, value: "25,000", label: "original", color: "blue" },
                    { percentage: 8, value: "2,000", label: "growth", color: "green", highlight: true }
                  ]
                }],
                percentageMarkers: [0, 100, 108],
                annotation: "8% of 25,000 = 2,000 new residents"
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                Increase = 8% of 25,000 = 8/100 x 25,000 = <strong>2,000</strong><br />
                New population = 25,000 + 2,000 = <strong>27,000</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Finding Original from Percentage Increase */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">4. Finding Original from Percentage Increase</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Insight</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              If you know the <strong>increase amount</strong> and the <strong>percentage increase</strong>,
              the increase amount represents that percentage!
            </p>
          </div>

          {/* Tennis Racket Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Tennis Racket Price</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The price of a tennis racket increased by 20%. The increase was $32.
              What was the price of the tennis racket after the increase?
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Tennis Racket Price",
                bars: [{
                  label: "Price",
                  segments: [
                    { percentage: 100, value: "?", label: "original", color: "green" },
                    { percentage: 20, value: "$32", label: "increase", color: "yellow", highlight: true }
                  ]
                }],
                percentageMarkers: [0, 100, 120],
                partialBracket: { barIndex: 0, fromPercent: 100, toPercent: 120, value: "$32", label: "20%", position: "bottom" },
                caption: "The increase ($32) represents 20%"
              }}
            />

            <MathToolRenderer
              toolName="unitaryMethodTable"
              parameters={{
                title: "Finding Original Price",
                rows: [
                  { percentage: "20%", value: "$32" },
                  { percentage: "100%", value: "$160", highlight: true },
                  { percentage: "120%", value: "$192" }
                ],
                operations: [
                  { fromRow: 0, toRow: 1, leftOp: "x5", rightOp: "x5" },
                  { fromRow: 1, toRow: 2, leftOp: "+20%", rightOp: "+$32" }
                ],
                annotation: "Price after increase = $160 + $32 = $192"
              }}
            />

            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                20% = $32<br />
                1% = $32 / 20 = $1.60<br />
                100% (original) = $1.60 x 100 = <strong>$160</strong><br />
                Price after increase = $160 + $32 = <strong>$192</strong>
              </p>
            </div>
          </div>

          {/* Basketball Match Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Finding Original from New Value</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              After a 25% increase, a shirt now costs $75. What was the original price?
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Shirt Price After 25% Increase",
                bars: [{
                  label: "Price",
                  segments: [
                    { percentage: 100, value: "?", label: "original", color: "green" },
                    { percentage: 25, label: "increase", color: "yellow" }
                  ],
                  totalValue: "$75"
                }],
                percentageMarkers: [0, 100, 125],
                caption: "Original (100%) + Increase (25%) = 125% = $75"
              }}
            />

            <MathToolRenderer
              toolName="unitaryMethodTable"
              parameters={{
                title: "Finding Original Price",
                rows: [
                  { percentage: "125%", value: "$75" },
                  { percentage: "25%", value: "$15" },
                  { percentage: "100%", value: "$60", highlight: true }
                ],
                operations: [
                  { fromRow: 0, toRow: 1, leftOp: "div 5", rightOp: "div 5" },
                  { fromRow: 1, toRow: 2, leftOp: "x4", rightOp: "x4" }
                ],
                annotation: "The original price was $60."
              }}
            />
          </div>
        </section>

        {/* Key Points Summary */}
        <section>
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
            <h2 className="text-xl font-bold mb-4 text-green-800 dark:text-green-200">Key Points to Remember</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li>&#x2713; <strong>Increase = New Value - Original Value</strong></li>
              <li>&#x2713; <strong>% Increase = (Increase / Original) x 100%</strong></li>
              <li>&#x2713; Always divide by the <strong>ORIGINAL</strong> value (not the new value)</li>
              <li>&#x2713; The original value is always 100% (the base)</li>
              <li>&#x2713; GST and Interest are examples of percentage increase</li>
              <li>&#x2713; To find original from increase: increase amount = percentage increase</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
