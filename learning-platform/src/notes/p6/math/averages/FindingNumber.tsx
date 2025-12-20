import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function FindingNumber() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Finding Number of Data</h1>
        <p className="text-lg">Learn to find how many items when you know total and average</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: When to Use */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">1. When Do We Use This?</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Third Formula</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg mb-4">
              When you know the <strong>total</strong> and the <strong>average</strong>,
              you can find <strong>how many</strong> items there are!
            </p>
            <p className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 my-4">
              Number of Data = Total Value ÷ Average
            </p>
          </div>

          {/* The Complete Triangle */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">The Complete Average Triangle</h3>

            <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg">
              <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
                Now you know all three formulas!
              </p>
              <div className="space-y-3 text-gray-800 dark:text-gray-200">
                <p>Average = Total ÷ Number</p>
                <p>Total = Average × Number</p>
                <p className="text-purple-600 dark:text-purple-400 font-bold text-lg">
                  Number = Total ÷ Average ← NEW!
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Keywords to look for:</strong> "How many...?", "Number of...?", "Count of...?"
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-pink-700 dark:text-pink-300">2. Worked Examples</h2>

          {/* Example 1: T-shirts */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Raju's T-shirts</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Raju spent <strong>$45</strong> on some T-shirts.
              The average cost of the T-shirts is <strong>$9</strong>.
              How many T-shirts did he buy?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "T-shirts Problem",
                bars: [
                  {
                    label: "Total spent",
                    segments: [
                      { value: "$9", units: 1, color: "blue" }
                    ],
                    totalLabel: "$45"
                  }
                ],
                showUnitDividers: false,
                caption: "How many $9 T-shirts can Raju buy with $45?"
              }}
            />

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Given:</strong> Total = $45, Average = $9
                </p>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Find:</strong> Number of T-shirts
                </p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  Number of T-shirts = Total ÷ Average
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  = $45 ÷ $9 = <strong>5 T-shirts</strong>
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Check:</strong> 5 T-shirts × $9 average = $45 total ✓
              </p>
            </div>
          </div>

          {/* Example 2: Tarts */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Sally's Tarts</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Sally has <strong>24 tarts</strong>.
              She packs the tarts into some boxes.
              The average number of tarts in each box is <strong>6</strong>.
              How many boxes of tarts are there?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Finding Number of Boxes",
                bars: [
                  {
                    label: "24 tarts",
                    segments: [
                      { value: "6", units: 1, color: "blue" }
                    ],
                    totalLabel: "24"
                  }
                ],
                showUnitDividers: false,
                caption: "How many groups of 6 can fit in 24? Each box = 6 tarts (average)"
              }}
            />

            <div className="mt-4 space-y-2">
              <p className="text-gray-800 dark:text-gray-200">
                Number of boxes = Total ÷ Average
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                = 24 ÷ 6 = <strong>4 boxes</strong>
              </p>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Question:</strong> Do all the boxes have the same number of tarts?
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>Answer:</strong> Not necessarily! One box might have 5 tarts, another 7, another 6, another 6.
                The <em>average</em> is 6, but individual boxes can differ.
              </p>
            </div>
          </div>

          {/* Example 3: Books */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: James's Books</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              James bought some books for <strong>$72</strong>.
              The average cost of a book was <strong>$8</strong>.
              How many books did he buy?
            </p>

            <div className="space-y-3 mt-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  Number of books = Total ÷ Average
                </p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  = $72 ÷ $8 = <strong>9 books</strong>
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Check:</strong> 9 books × $8 = $72 ✓
                </p>
              </div>
            </div>
          </div>

          {/* Example 4: Papayas */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 4: Fruit Seller's Papayas</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A fruit seller has some papayas.
              The total mass of the papayas is <strong>70 kg</strong>.
              The average mass of a papaya is <strong>2 kg</strong>.
              How many papayas does the fruit seller have?
            </p>

            <div className="space-y-3 mt-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  Number of papayas = Total mass ÷ Average mass
                </p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  = 70 kg ÷ 2 kg = <strong>35 papayas</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Common Mistakes */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">3. Watch Out!</h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Common Mistake</h3>
            <div className="space-y-3">
              <div className="p-3 bg-red-100 dark:bg-red-900/50 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <span className="text-red-500 font-bold">✗ WRONG:</span> Average ÷ Total
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <span className="text-green-500 font-bold">✓ CORRECT:</span> Total ÷ Average
                </p>
              </div>
            </div>
            <p className="text-gray-800 dark:text-gray-200 mt-4">
              <strong>Remember:</strong> Total is always the bigger number (usually)!
              Divide the <strong>bigger</strong> by the <strong>smaller</strong>.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">How to Remember</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Ask yourself: "How many $9s are in $45?"
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                bars: [
                  {
                    label: "$45 total",
                    segments: [
                      { value: "$9" },
                      { value: "$9" },
                      { value: "$9" },
                      { value: "$9" },
                      { value: "$9" }
                    ],
                    totalLabel: "$45"
                  }
                ],
                showUnitDividers: true,
                caption: "How many $9 segments fit into $45? Answer: 5"
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                This is just like asking: "45 ÷ 9 = ?" The answer is 5!
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Practice */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">4. Try These!</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Practice Problem 1</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A farmer collected 180 eggs. The average number of eggs per basket is 15.
              How many baskets did the farmer use?
            </p>

            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-semibold">
                Click to see solution
              </summary>
              <div className="mt-3 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  Number of baskets = 180 ÷ 15 = <strong>12 baskets</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mt-2">
                  Check: 12 × 15 = 180 ✓
                </p>
              </div>
            </details>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Practice Problem 2</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A shop sold stickers for a total of $156. The average price per pack is $12.
              How many packs were sold?
            </p>

            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-semibold">
                Click to see solution
              </summary>
              <div className="mt-3 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  Number of packs = $156 ÷ $12 = <strong>13 packs</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mt-2">
                  Check: 13 × $12 = $156 ✓
                </p>
              </div>
            </details>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Practice Problem 3</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The total length of some ribbons is 63 m. The average length is 9 m.
              How many ribbons are there?
            </p>

            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-semibold">
                Click to see solution
              </summary>
              <div className="mt-3 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  Number of ribbons = 63 ÷ 9 = <strong>7 ribbons</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mt-2">
                  Check: 7 × 9 = 63 ✓
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Key Points Summary */}
        <section>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-700">
            <h2 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-200">Key Points to Remember</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li className="flex items-start gap-2">
                <span className="text-green-500">&#10003;</span>
                <span><strong>Number = Total ÷ Average</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">&#10003;</span>
                <span>Use this when you need to find "how many" items</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">&#10003;</span>
                <span>Remember: Total ÷ Average (NOT Average ÷ Total)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">&#10003;</span>
                <span>Always verify: Number × Average should equal Total</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">&#10003;</span>
                <span>Think: "How many averages fit into the total?"</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
