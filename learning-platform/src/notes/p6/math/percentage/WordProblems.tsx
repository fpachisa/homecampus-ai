import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function WordProblems() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Percentage Word Problems</h1>
        <p className="text-lg">Master complex percentage problems with multiple steps</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: GST, Discount, Interest */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">1. GST, Discount, and Interest Problems</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Quick Reference</h3>
            <ul className="text-gray-800 dark:text-gray-200 space-y-2">
              <li><strong>GST:</strong> ADD to price (increase)</li>
              <li><strong>Discount:</strong> SUBTRACT from price (decrease)</li>
              <li><strong>Interest:</strong> ADD to principal (increase)</li>
            </ul>
          </div>

          {/* Conceptual Example: Same Percentage ≠ Same Dollar Amount */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Does Same % Discount Mean Same $ Savings?</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Shop A sells a bottle of shampoo for <strong>$50</strong>. Shop B sells the same shampoo for <strong>$40</strong>.
              Both shops offer a <strong>20% discount</strong>.
              Does Amy (buying from Shop A) save the same dollar amount as Benny (buying from Shop B)?
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Comparing 20% Discount on Different Prices",
                bars: [
                  { label: "Shop A ($50)", segments: [
                    { percentage: 80, value: "$40", label: "paid", color: "green" },
                    { percentage: 20, value: "$10", label: "saved", color: "red", highlight: true }
                  ]},
                  { label: "Shop B ($40)", segments: [
                    { percentage: 80, value: "$32", label: "paid", color: "blue" },
                    { percentage: 20, value: "$8", label: "saved", color: "red", highlight: true }
                  ]}
                ],
                percentageMarkers: [0, 80, 100],
                caption: "Same 20% discount → different dollar savings!"
              }}
            />

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Key Insight:</strong> Same percentage does NOT mean same dollar amount!
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                Amy saves: 20% of $50 = <strong>$10</strong><br />
                Benny saves: 20% of $40 = <strong>$8</strong><br />
                <strong>Answer: No</strong>, Amy saves $2 more because percentage is relative to the base price.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Part-to-Whole Composition */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">2. Part-to-Whole Composition Problems</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Concept</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              All parts of a whole add up to <strong>100%</strong>.
              If you know some parts, you can find the rest.
            </p>
          </div>

          {/* School Library Books */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: School Library Books</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              In a school library, 45% of the books are fiction, 30% are non-fiction, and the rest are reference books.
              There are 150 reference books. How many books are there in total? How many fiction books are there?
            </p>

            <MathToolRenderer
              toolName="percentageStackedBar"
              parameters={{
                title: "Library Book Collection",
                segments: [
                  { label: "fiction", percentage: 45, color: "blue", subLabel: "(45%)" },
                  { label: "non-fiction", percentage: 30, color: "green", subLabel: "(30%)" },
                  { label: "reference", percentage: 25, value: "150", color: "orange", highlight: true }
                ],
                percentageMarkers: [0, 45, 75, 100],
                totalValue: { value: "?", label: "Total books", position: "top" },
                annotation: "Reference = 100% - 45% - 30% = 25%"
              }}
            />

            <MathToolRenderer
              toolName="unitaryMethodTable"
              parameters={{
                title: "Finding Total Books",
                rows: [
                  { percentage: "25%", value: "150" },
                  { percentage: "1%", value: "6" },
                  { percentage: "100%", value: "600", highlight: true }
                ],
                operations: [
                  { fromRow: 0, toRow: 1, leftOp: "÷ 25", rightOp: "÷ 25" },
                  { fromRow: 1, toRow: 2, leftOp: "× 100", rightOp: "× 100" }
                ],
                caption: "Total = 600 books"
              }}
            />

            <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Part 2:</strong> Fiction books = 45% of 600 = 45/100 × 600 = <strong>270 books</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Multi-Step Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-300">3. Multi-Step Problems</h2>

          {/* Siti and Xinyi */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Siti and Xinyi's Money</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Siti spent 20% of her money. Xinyi spent 25% of her money.
              Each girl spent the same amount of money and had $700 left in total.
              How much money did they have in all at first?
            </p>

            <div className="p-4 bg-teal-50 dark:bg-teal-900/30 rounded-lg mb-4 border-l-4 border-teal-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Key Insight:</strong> Convert percentages to fractions for easier calculation!
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                20% = 1/5 (Siti spent 1 out of 5 parts)<br />
                25% = 1/4 (Xinyi spent 1 out of 4 parts)
              </p>
            </div>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Siti and Xinyi's Money",
                bars: [
                  { label: "Siti", segments: [
                    { percentage: 20, label: "spent", color: "yellow" },
                    { percentage: 20, label: "left", color: "green" },
                    { percentage: 20, label: "left", color: "green" },
                    { percentage: 20, label: "left", color: "green" },
                    { percentage: 20, label: "left", color: "green" }
                  ]},
                  { label: "Xinyi", segments: [
                    { percentage: 25, label: "spent", color: "yellow" },
                    { percentage: 25, label: "left", color: "blue" },
                    { percentage: 25, label: "left", color: "blue" },
                    { percentage: 25, label: "left", color: "blue" }
                  ]}
                ],
                showPercentageScale: false,
                caption: "Siti: 5 units (1 spent, 4 left). Xinyi: 4 units (1 spent, 3 left)."
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Solution:</strong><br />
                Amount left = 4 units (Siti) + 3 units (Xinyi) = 7 units<br />
                7 units = $700<br />
                1 unit = $700 / 7 = $100<br />
                Total at first = 5 units + 4 units = 9 units = <strong>$900</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Percentage of Remainder */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">4. Percentage of Remainder Problems</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Concept</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              "X% of the remainder" means X% of what's LEFT, not X% of the original!
            </p>
          </div>

          {/* Fruit Seller */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Fruit Seller's Apples</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A fruit seller had a box of apples. He sold 25% of the apples in the morning
              and 1/6 of the remainder in the afternoon. He had 35 apples left.
              How many apples were sold altogether?
            </p>

            <MathToolRenderer
              toolName="percentageStackedBar"
              parameters={{
                title: "Fruit Seller's Apples",
                segments: [
                  { label: "sold (AM)", percentage: 25, color: "red", subLabel: "(25%)" },
                  { label: "sold (PM)", percentage: 12.5, color: "orange", subLabel: "(1/6 of 75%)" },
                  { label: "left", percentage: 62.5, value: "35", color: "green", highlight: true }
                ],
                percentageMarkers: [0, 25, 37.5, 100],
                totalValue: { value: "?", position: "top" },
                caption: "Morning: 25%. Remainder: 75%. Afternoon: 1/6 of 75% = 12.5%"
              }}
            />

            <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Step by step:</strong><br />
                Morning: Sold 25%, Remainder = 75%<br />
                Afternoon: Sold 1/6 of 75% = 12.5% of original<br />
                Left = 75% - 12.5% = 62.5% of original = 35 apples<br />
                <br />
                62.5% = 35 apples<br />
                1% = 35 / 62.5 = 0.56 apples<br />
                100% = 56 apples<br />
                <br />
                <strong>Apples sold = 56 - 35 = 21 apples</strong>
              </p>
            </div>
          </div>

          {/* Bakery Problem */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Bakery Muffins and Cupcakes</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A bakery had 40 muffins and some cupcakes at first.
              It sold 6 muffins and 20% of the cupcakes.
              It then had 50 muffins and cupcakes left in total.
              How many cupcakes did the bakery have at first?
            </p>

            <MathToolRenderer
              toolName="percentageBar"
              parameters={{
                title: "Bakery Items",
                bars: [
                  { label: "Muffins", segments: [
                    { percentage: 15, value: "6", label: "sold", color: "red" },
                    { percentage: 85, value: "34", label: "left", color: "green" }
                  ], totalValue: "40" },
                  { label: "Cupcakes", segments: [
                    { percentage: 20, label: "sold", color: "red" },
                    { percentage: 80, value: "16", label: "left", color: "blue", highlight: true }
                  ], totalValue: "?" }
                ],
                showPercentageScale: false,
                caption: "Muffins left = 40 - 6 = 34. Total left = 50. Cupcakes left = 50 - 34 = 16."
              }}
            />

            <MathToolRenderer
              toolName="unitaryMethodTable"
              parameters={{
                title: "Finding Original Cupcakes",
                rows: [
                  { percentage: "80%", value: "16" },
                  { percentage: "20%", value: "4" },
                  { percentage: "100%", value: "20", highlight: true }
                ],
                operations: [
                  { fromRow: 0, toRow: 1, leftOp: "div 4", rightOp: "div 4" },
                  { fromRow: 1, toRow: 2, leftOp: "x5", rightOp: "x5" }
                ],
                annotation: "The bakery had 20 cupcakes at first."
              }}
            />
          </div>
        </section>

        {/* Section 5: Percentage of Percentage (Nested) */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-pink-700 dark:text-pink-300">5. Percentage of Percentage (Nested)</h2>

          <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border-l-4 border-pink-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Formula</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              X% of Y% = (X/100) x (Y/100) x 100%<br />
              <strong>70% of 80% = 0.70 x 0.80 x 100% = 56%</strong>
            </p>
          </div>

          {/* Mrs Sim's Buttons */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Mrs Sim's Buttons</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Mrs Sim has some buttons. 20% of the buttons are red and the rest are blue.
              70% of the blue buttons are square-shaped and the remaining 60 blue buttons are round.
              How many buttons does she have in all?
            </p>

            <MathToolRenderer
              toolName="percentageStackedBar"
              parameters={{
                title: "Mrs Sim's Buttons",
                segments: [
                  { label: "red", percentage: 20, color: "red", subLabel: "(20%)" },
                  { label: "blue square", percentage: 56, color: "blue", subLabel: "(70% of 80% = 56%)" },
                  { label: "blue round", percentage: 24, value: "60", color: "purple", subLabel: "(30% of 80% = 24%)", highlight: true }
                ],
                percentageMarkers: [0, 20, 76, 100],
                totalValue: { value: "?", label: "Total buttons", position: "top" },
                caption: "Blue = 80%. Square blue = 70% of 80% = 56%. Round blue = 30% of 80% = 24%."
              }}
            />

            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Solution:</strong><br />
                Blue buttons = 100% - 20% = 80%<br />
                Square blue = 70% of 80% = 56%<br />
                Round blue = 30% of 80% = 24%<br />
                <br />
                24% = 60 buttons<br />
                1% = 60 / 24 = 2.5 buttons<br />
                100% = 2.5 x 100 = <strong>250 buttons</strong>
              </p>
            </div>

            <MathToolRenderer
              toolName="unitaryMethodTable"
              parameters={{
                title: "Finding Total Buttons",
                rows: [
                  { percentage: "24%", value: "60" },
                  { percentage: "4%", value: "10" },
                  { percentage: "100%", value: "250", highlight: true }
                ],
                operations: [
                  { fromRow: 0, toRow: 1, leftOp: "div 6", rightOp: "div 6" },
                  { fromRow: 1, toRow: 2, leftOp: "x25", rightOp: "x25" }
                ],
                annotation: "Mrs Sim has 250 buttons in all."
              }}
            />
          </div>
        </section>

        {/* Section 6: Combined Fractions and Percentages */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-700 dark:text-emerald-300">6. Combined Fractions and Percentages</h2>

          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border-l-4 border-emerald-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Strategy</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              Convert all values to the same form (either all fractions or all percentages).
            </p>
            <div className="mt-2 grid grid-cols-2 gap-4 text-gray-800 dark:text-gray-200">
              <div>
                <strong>Common conversions:</strong><br />
                20% = 1/5<br />
                25% = 1/4<br />
                50% = 1/2
              </div>
              <div>
                <br />
                10% = 1/10<br />
                75% = 3/4<br />
                33.33% = 1/3
              </div>
            </div>
          </div>

          {/* Paper Clips */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: John's Paper Clips</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              John has a box of red, green and yellow paper clips.
              He has 100 yellow paper clips. 30% of the paper clips are green.
              He has 20 more red paper clips than green paper clips.
              How many paper clips does John have in all?
            </p>

            <MathToolRenderer
              toolName="percentageStackedBar"
              parameters={{
                title: "John's Paper Clips",
                segments: [
                  { label: "green", percentage: 30, color: "green", subLabel: "(30%)" },
                  { label: "red", percentage: 50, color: "red", subLabel: "(green + 20 more)" },
                  { label: "yellow", percentage: 20, value: "100", color: "yellow", highlight: true }
                ],
                percentageMarkers: [0, 30, 80, 100],
                totalValue: { value: "?", position: "top" }
              }}
            />

            <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>This requires setting up equations:</strong><br />
                Let total = 100%<br />
                Green = 30%<br />
                Yellow = some percentage (= 100 clips)<br />
                Red = Green + 20 clips<br />
                <br />
                Since Red + Green + Yellow = 100%, and we know the relationships,
                we can solve step by step to find the total.
              </p>
            </div>
          </div>
        </section>

        {/* Key Points Summary */}
        <section>
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/50 dark:to-indigo-900/50 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-700">
            <h2 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-200">Key Points to Remember</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li>&#x2713; <strong>All parts add to 100%</strong> in composition problems</li>
              <li>&#x2713; <strong>"X% of remainder"</strong> means X% of what's LEFT, not original</li>
              <li>&#x2713; <strong>Nested percentages:</strong> 70% of 80% = 56%</li>
              <li>&#x2713; Convert fractions to percentages: 1/5 = 20%, 1/4 = 25%</li>
              <li>&#x2713; Use bar models to visualize complex relationships</li>
              <li>&#x2713; Break complex problems into smaller steps</li>
              <li>&#x2713; Always check: does my answer make sense?</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
