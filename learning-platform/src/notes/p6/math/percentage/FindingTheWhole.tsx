import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function FindingTheWhole() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Finding the Whole Given a Part and the Percentage</h1>
        <p className="text-lg">Learn to find 100% when you know a part and its percentage</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Recall - Percentage Basics */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">1. Recall: Percentage Basics</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Big Idea</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              <strong>Percent</strong> means "per 100" or "out of 100".
              When we say 43%, we mean 43 out of 100.
            </p>
          </div>

          {/* Percentage Grid Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Visualizing 43%</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              When a whole is divided into 100 equal parts, each part is 1% or 1/100 of the whole.
            </p>

            <MathToolRenderer
              toolName="percentageGrid"
              parameters={{
                shadedCount: 43,
                showPercentage: true,
                showFraction: true,
                caption: "43 out of 100 equal parts are shaded. This is 43%."
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                43 out of 100 = 43/100 = <strong>43%</strong>
              </p>
            </div>
          </div>

          {/* Converting Fractions to Percentages */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Converting Fractions to Percentages</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              What percentage of the whole is 11 out of 50 equal parts?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Method 1: Equivalent Fractions</h4>
                <p className="text-gray-800 dark:text-gray-200">
                  11/50 = 22/100 = 22%
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  (Multiply both by 2 to get denominator 100)
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Method 2: Multiply by 100%</h4>
                <p className="text-gray-800 dark:text-gray-200">
                  11/50 x 100% = 22%
                </p>
              </div>
            </div>

            <MathToolRenderer
              toolName="percentageGrid"
              parameters={{
                shadedCount: 22,
                showPercentage: true,
                showFraction: false,
                caption: "22 squares shaded = 22% of the whole"
              }}
            />
          </div>

          {/* Percentage to Fraction/Decimal */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: Converting Percentages</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Percentage to Fraction</h4>
                <p className="text-gray-800 dark:text-gray-200">
                  16% = 16/100 = <strong>4/25</strong> (simplest form)
                </p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Percentage to Decimal</h4>
                <p className="text-gray-800 dark:text-gray-200">
                  45% = 45/100 = <strong>0.45</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Expressing as Percentage */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">2. Expressing One Quantity as a Percentage of Another</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Formula</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              Percentage = (Part / Whole) x 100%
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Express 200g as a Percentage of 800g</h3>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "200g out of 800g",
                bars: [{
                  label: "Total",
                  segments: [
                    { percentage: 25, value: "200g", label: "part", color: "green" },
                    { percentage: 75, color: "gray" }
                  ]
                }],
                percentageMarkers: [0, 25, 100],
                totalBracket: { barIndices: [0], value: "800g", position: "right" },
                caption: "200g is what percentage of 800g?"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                200/800 x 100% = <strong>25%</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                200g is 25% of 800g.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Finding the Whole - Unitary Method */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">3. Finding the Whole - The Unitary Method</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Key Strategy</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              <strong>Step 1:</strong> Find 1% (divide by the percentage number)<br />
              <strong>Step 2:</strong> Find 100% (multiply by 100)
            </p>
          </div>

          {/* Example 1: Simple - 10% = 5 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: 10% of a Number is 5. What is the Number?</h3>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                bars: [{
                  label: "Number",
                  segments: [
                    { percentage: 10, value: "5", color: "yellow" },
                    { percentage: 90, value: "?", color: "green" }
                  ]
                }],
                percentageMarkers: [0, 10, 100],
                totalBracket: { barIndices: [0], value: "?", position: "right" },
                caption: "10% = 5. Find 100%."
              }}
            />

            <div className="mt-4">
              <MathToolRenderer
                toolName="unitaryMethodTable"
                parameters={{
                  title: "Finding the Whole",
                  headers: ["Percentage", "Value of number"],
                  rows: [
                    { percentage: "10%", value: "5" },
                    { percentage: "100%", value: "50", highlight: true }
                  ],
                  operations: [
                    { fromRow: 0, toRow: 1, leftOp: "x10", rightOp: "x10" }
                  ],
                  annotation: "The number is 50."
                }}
              />
            </div>
          </div>

          {/* Example 2: Two-Step via 1% - Hassan's Money */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Hassan's Money (via 1%)</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Hassan spent $240 and had <strong>70% of his money left</strong>.
              How much money did he have at first?
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Hassan's Money",
                bars: [{
                  label: "Hassan",
                  segments: [
                    { percentage: 30, value: "$240", label: "spent", color: "yellow" },
                    { percentage: 70, label: "left", color: "green" }
                  ]
                }],
                percentageMarkers: [0, 30, 100],
                totalBracket: { barIndices: [0], value: "?", position: "right" },
                caption: "Spent = 100% - 70% = 30%. So 30% = $240."
              }}
            />

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500 mb-4">
              <p className="text-gray-800 dark:text-gray-200 font-bold">
                Key Insight: If 70% is left, then 100% - 70% = 30% was spent.
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                So 30% of Hassan's money = $240
              </p>
            </div>

            <MathToolRenderer
              toolName="unitaryMethodTable"
              parameters={{
                title: "Finding Hassan's Total Money",
                rows: [
                  { percentage: "30%", value: "$240" },
                  { percentage: "1%", value: "$8" },
                  { percentage: "100%", value: "$800", highlight: true }
                ],
                operations: [
                  { fromRow: 0, toRow: 1, leftOp: "div 30", rightOp: "div 30" },
                  { fromRow: 1, toRow: 2, leftOp: "x100", rightOp: "x100" }
                ],
                annotation: "Hassan had $800 at first."
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Step 1:</strong> 1% of Hassan's money = $240 / 30 = $8<br />
                <strong>Step 2:</strong> 100% of Hassan's money = $8 x 100 = <strong>$800</strong>
              </p>
            </div>
          </div>

          {/* Example 3: Concert Problem */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: Concert Audience</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              At a concert, 2/5 of the audience were adults and 25% were girls.
              The rest were boys. There were 70 boys at the concert.
              How many people were there at the concert?
            </p>

            <MathToolRenderer
              toolName="percentageStackedBar"
              parameters={{
                title: "Concert Audience",
                segments: [
                  { label: "adults", percentage: 40, color: "red", subLabel: "(2/5 = 40%)" },
                  { label: "girls", percentage: 25, color: "yellow", subLabel: "(25%)" },
                  { label: "boys", percentage: 35, value: "70", color: "blue", highlight: true }
                ],
                percentageMarkers: [0, 40, 65, 100],
                totalValue: { value: "?", label: "Total", position: "top" },
                annotation: "Boys = 100% - 40% - 25% = 35%"
              }}
            />

            <div className="mt-4">
              <MathToolRenderer
                toolName="unitaryMethodTable"
                parameters={{
                  title: "Finding the Total Audience",
                  rows: [
                    { percentage: "35%", value: "70" },
                    { percentage: "5%", value: "10" },
                    { percentage: "100%", value: "200", highlight: true }
                  ],
                  operations: [
                    { fromRow: 0, toRow: 1, leftOp: "div 7", rightOp: "div 7" },
                    { fromRow: 1, toRow: 2, leftOp: "x20", rightOp: "x20" }
                  ],
                  annotation: "There were 200 people at the concert."
                }}
              />
            </div>
          </div>
        </section>

        {/* Section 4: Direct Method */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">4. Finding the Whole - Direct Method</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Formula</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              Whole = Part / (Percentage / 100)
            </p>
            <p className="text-gray-800 dark:text-gray-200 mt-2">
              Or: Whole = Part / decimal form of percentage
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Using the Direct Method</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              30% of a number is $240. What is the number?
            </p>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Direct Method:</strong><br />
                Whole = $240 / 0.30 = $240 / (30/100) = $240 x (100/30) = <strong>$800</strong>
              </p>
            </div>

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>When to use which method:</strong>
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-200">
                <li><strong>Unitary Method:</strong> Good for showing your working step-by-step</li>
                <li><strong>Direct Method:</strong> Faster when you're comfortable with decimals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Real-World Applications (Finding the Original) */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-300">5. Real-World Applications</h2>

          {/* Reverse GST Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Finding Price Before GST</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Mr Wong paid $218 for a watch, including 9% GST.
              What was the price of the watch before GST?
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Watch Price (Finding Original)",
                bars: [{
                  label: "Total",
                  segments: [
                    { percentage: 100, value: "?", label: "before GST", color: "blue" },
                    { percentage: 9, value: "", label: "GST (9%)", color: "yellow" }
                  ]
                }],
                percentageMarkers: [0, 100, 109],
                totalBracket: { barIndices: [0], value: "$218", position: "right" },
                annotation: "109% = $218"
              }}
            />

            <MathToolRenderer
              toolName="unitaryMethodTable"
              parameters={{
                title: "Solution: Unitary Method",
                rows: [
                  { percentage: "109%", value: "$218" },
                  { percentage: "1%", value: "$2" },
                  { percentage: "100%", value: "$200", highlight: true }
                ],
                operations: [
                  { fromRow: 0, toRow: 1, leftOp: "÷ 109", rightOp: "÷ 109" },
                  { fromRow: 1, toRow: 2, leftOp: "× 100", rightOp: "× 100" }
                ],
                caption: "The price before GST was $200"
              }}
            />
          </div>

          {/* Reverse Discount Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Finding Original Price from Sale Price</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              During a sale, a dress was sold at a 25% discount. The sale price was $60.
              What was the original price of the dress?
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Dress Price (Finding Original)",
                bars: [{
                  label: "Price",
                  segments: [
                    { percentage: 75, value: "$60", label: "sale (75%)", color: "green" },
                    { percentage: 25, value: "?", label: "discount", color: "red" }
                  ]
                }],
                percentageMarkers: [0, 75, 100],
                annotation: "After 25% off, 75% = $60"
              }}
            />

            <MathToolRenderer
              toolName="unitaryMethodTable"
              parameters={{
                title: "Solution",
                rows: [
                  { percentage: "75%", value: "$60" },
                  { percentage: "1%", value: "$0.80" },
                  { percentage: "100%", value: "$80", highlight: true }
                ],
                operations: [
                  { fromRow: 0, toRow: 1, leftOp: "÷ 75", rightOp: "÷ 75" },
                  { fromRow: 1, toRow: 2, leftOp: "× 100", rightOp: "× 100" }
                ],
                caption: "The original price was $80"
              }}
            />
          </div>

          {/* Finding Original Weight Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: Finding Original Amount</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              After evaporation, a tank has 360 litres of water, which is 90% of its original amount.
              How much water was in the tank originally?
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Water Tank",
                bars: [{
                  label: "Water",
                  segments: [
                    { percentage: 90, value: "360 L", label: "remaining (90%)", color: "blue" },
                    { percentage: 10, value: "?", label: "evaporated", color: "gray" }
                  ]
                }],
                percentageMarkers: [0, 90, 100],
                annotation: "90% = 360 litres"
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                90% = 360 L<br />
                1% = 360 ÷ 90 = 4 L<br />
                100% = 4 × 100 = <strong>400 L</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Key Points Summary */}
        <section>
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
            <h2 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">Key Points to Remember</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li>&#x2713; Percent means "per 100" - 43% means 43 out of 100</li>
              <li>&#x2713; To convert fraction to percentage: multiply by 100% or make denominator 100</li>
              <li>&#x2713; <strong>Unitary Method:</strong> Find 1% first, then find 100%</li>
              <li>&#x2713; If "70% left", then "30% spent" (100% - 70% = 30%)</li>
              <li>&#x2713; GST is added to price, Discount is subtracted from price</li>
              <li>&#x2713; Always identify what percentage the given value represents!</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
