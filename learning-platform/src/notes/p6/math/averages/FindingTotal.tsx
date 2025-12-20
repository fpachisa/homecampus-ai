import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function FindingTotal() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Finding Total Value</h1>
        <p className="text-lg">Learn to find the total when you know the average</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Reverse Formula */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">1. Reversing the Formula</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Key Insight</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg mb-4">
              If we know the <strong>average</strong> and the <strong>number of items</strong>,
              we can find the <strong>total</strong>!
            </p>
            <p className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 my-4">
              Total Value = Average × Number of Data
            </p>
          </div>

          {/* The Average Triangle */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">The Average Triangle</h3>

            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
                The three formulas are all connected:
              </p>
              <div className="space-y-3 text-gray-800 dark:text-gray-200">
                <p><strong>Average</strong> = Total ÷ Number</p>
                <p><strong>Total</strong> = Average × Number</p>
                <p><strong>Number</strong> = Total ÷ Average</p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Think of it like this:</strong> If we "evened out" the values, we get the average.
                To find the total, we "gather back" all those equal shares!
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Examples with Visualization */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-300">2. Worked Examples</h2>

          {/* Example 1: Stickers */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Stickers in Packets</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The average number of stickers in 3 packets is 18.
              What is the <strong>total</strong> number of stickers in the 3 packets?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Finding Total from Average",
                bars: [
                  {
                    label: "3 packets",
                    segments: [
                      { value: "18", units: 3 }
                    ],
                    totalLabel: "?"
                  }
                ],
                showUnitDividers: true,
                caption: "Each unit = 1 packet = 18 stickers (average)"
              }}
            />

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Given:</strong> Average = 18, Number of packets = 3
                </p>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Find:</strong> Total number of stickers
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Solution:</strong> Total = Average × Number = 18 × 3 = <strong>54 stickers</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Example 2: Water in Cups */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Water in Cups</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The average volume of water in 5 cups is 120 ml.
              What is the total volume of water in the 5 cups?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Finding Total Volume",
                bars: [
                  {
                    label: "5 cups",
                    segments: [
                      { value: "120 ml", units: 5 }
                    ],
                    totalLabel: "?"
                  }
                ],
                showUnitDividers: true,
                caption: "Each unit = 1 cup = 120 ml (average)"
              }}
            />

            <div className="mt-4 space-y-2">
              <p className="text-gray-800 dark:text-gray-200">
                Total volume = Average × Number of cups
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Total volume = 120 ml × 5 = <strong>600 ml</strong>
              </p>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Important:</strong> Does this mean all 5 cups have exactly 120 ml each? <strong>No!</strong>
                One cup might have 100 ml, another 140 ml. The average is 120 ml, but individual cups can differ.
              </p>
            </div>
          </div>

          {/* Example 3: Mobile Phones (with decimals) */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: Mobile Phones</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The average cost of 8 mobile phones is $315.75.
              What is the total cost of the 8 mobile phones?
            </p>

            <div className="space-y-3 mt-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Given:</strong> Average = $315.75, Number = 8
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  Total = $315.75 × 8 = <strong>$2,526</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Using Bar Model */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">3. Visualizing with Bar Model</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Joan's Project Time</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Joan spent an average of 2 hours a day on a project from Monday to Thursday.
              What was the total time Joan spent on her project?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Joan's Project Time",
                bars: [
                  {
                    label: "4 days",
                    segments: [
                      { value: "2h", units: 4 }
                    ],
                    totalLabel: "?"
                  }
                ],
                showUnitDividers: true,
                caption: "Each unit represents 1 day = 2 hours (average)"
              }}
            />

            <div className="mt-4 space-y-2">
              <p className="text-gray-800 dark:text-gray-200">
                Monday to Thursday = <strong>4 days</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Total time = 2 hours × 4 = <strong>8 hours</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">4. Try These!</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Practice Problem 1</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The average of 6 numbers is 25. What is the sum of the 6 numbers?
            </p>

            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-semibold">
                Click to see solution
              </summary>
              <div className="mt-3 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  Sum = Average × Number = 25 × 6 = <strong>150</strong>
                </p>
              </div>
            </details>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Practice Problem 2</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The average height of 7 students is 1.45 m. What is the total height of the 7 students?
            </p>

            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-semibold">
                Click to see solution
              </summary>
              <div className="mt-3 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  Total height = 1.45 m × 7 = <strong>10.15 m</strong>
                </p>
              </div>
            </details>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Practice Problem 3</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The average mass of 4 parcels is 2.5 kg. What is the total mass of the 4 parcels?
            </p>

            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-semibold">
                Click to see solution
              </summary>
              <div className="mt-3 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  Total mass = 2.5 kg × 4 = <strong>10 kg</strong>
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Key Points Summary */}
        <section>
          <div className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/50 dark:to-teal-900/50 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
            <h2 className="text-xl font-bold mb-4 text-green-800 dark:text-green-200">Key Points to Remember</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li className="flex items-start gap-2">
                <span className="text-green-500">&#10003;</span>
                <span><strong>Total = Average × Number of Data</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">&#10003;</span>
                <span>Use this when you know the average and need to find the total</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">&#10003;</span>
                <span>Think of it as "gathering back" all the evened-out shares</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">&#10003;</span>
                <span>Individual values don't need to equal the average - they just need to add up to the total</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">&#10003;</span>
                <span>Works with decimals too (e.g., $315.75 × 8)</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
