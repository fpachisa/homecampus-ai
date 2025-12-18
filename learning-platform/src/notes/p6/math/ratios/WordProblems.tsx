import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function WordProblems() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Ratio Word Problems</h1>
        <p className="text-lg">Master the bar model method for solving ratio problems</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Total Given Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">1. Total Given Problems</h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Strategy</h3>
            <ol className="list-decimal list-inside text-gray-800 dark:text-gray-200 space-y-2">
              <li>Draw a bar model showing the ratio parts</li>
              <li>Calculate the <strong>total number of units</strong></li>
              <li>Find the <strong>value of 1 unit</strong> from the total</li>
              <li>Calculate what's being asked</li>
            </ol>
          </div>

          {/* Example 1: Anna and Jill */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Sharing Money</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Anna and Jill share a sum of <strong>$50</strong>.
              <br />
              The ratio of Anna's money to Jill's money is <strong>2 : 3</strong>.
              <br />
              How much money does Jill have?
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Anna and Jill's Money",
                bars: [
                  { label: "Anna", units: 2, color: "green" },
                  { label: "Jill", units: 3, color: "yellow", unitLabel: "?" }
                ],
                totalBracket: { barIndices: [0, 1], value: "$50" },
                showUnitDividers: true,
                unitValue: "5 units = $50"
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-bold">Solution:</p>
              <div className="mt-2 space-y-2 text-gray-800 dark:text-gray-200">
                <p>Total units = 2 + 3 = <strong>5 units</strong></p>
                <p>5 units = $50</p>
                <p>1 unit = $50 ÷ 5 = <strong>$10</strong></p>
                <p>Jill (3 units) = 3 × $10 = <strong>$30</strong></p>
              </div>
            </div>
          </div>

          {/* Example 2: Three-person problem */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Three Children</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Ken, Hassan, and Mei share <strong>70 coins</strong>.
              <br />
              The ratio of their coins is <strong>3 : 4 : 7</strong>.
              <br />
              How many coins does each child have?
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "70 Coins Shared",
                bars: [
                  { label: "Ken", units: 3, color: "blue" },
                  { label: "Hassan", units: 4, color: "green" },
                  { label: "Mei", units: 7, color: "pink" }
                ],
                totalBracket: { barIndices: [0, 1, 2], value: "70 coins" },
                showUnitDividers: true,
                unitValue: "14 units = 70, so 1 unit = 5"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-bold">Solution:</p>
              <div className="mt-2 space-y-2 text-gray-800 dark:text-gray-200">
                <p>Total units = 3 + 4 + 7 = <strong>14 units</strong></p>
                <p>14 units = 70 → 1 unit = <strong>5 coins</strong></p>
                <p>Ken (3 units) = 3 × 5 = <strong>15 coins</strong></p>
                <p>Hassan (4 units) = 4 × 5 = <strong>20 coins</strong></p>
                <p>Mei (7 units) = 7 × 5 = <strong>35 coins</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Difference Given Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-pink-700 dark:text-pink-300">2. Difference Given Problems</h2>

          <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border-l-4 border-pink-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Strategy</h3>
            <ol className="list-decimal list-inside text-gray-800 dark:text-gray-200 space-y-2">
              <li>Draw a bar model showing the ratio parts</li>
              <li>Calculate the <strong>difference in units</strong> (larger - smaller)</li>
              <li>Find the <strong>value of 1 unit</strong> from the difference</li>
              <li>Calculate what's being asked</li>
            </ol>
          </div>

          {/* Example 3: Boys and Girls */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: School Canteen</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The ratio of boys to girls in a school canteen is <strong>7 : 4</strong>.
              <br />
              There are <strong>12 more boys</strong> than girls.
              <br />
              How many girls are there?
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Boys vs Girls",
                bars: [
                  { label: "Boys", units: 7, color: "blue" },
                  { label: "Girls", units: 4, color: "pink", unitLabel: "?" }
                ],
                differenceBracket: { barIndices: [0, 1], value: "12" },
                showUnitDividers: true,
                unitValue: "3 units = 12, so 1 unit = 4"
              }}
            />

            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-bold">Solution:</p>
              <div className="mt-2 space-y-2 text-gray-800 dark:text-gray-200">
                <p>Difference in units = 7 - 4 = <strong>3 units</strong></p>
                <p>3 units = 12</p>
                <p>1 unit = 12 ÷ 3 = <strong>4</strong></p>
                <p>Girls (4 units) = 4 × 4 = <strong>16 girls</strong></p>
              </div>
            </div>
          </div>

          {/* Example 4: Ken and Raju */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 4: Sharing Money (Difference)</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Ken and Raju shared a sum of money in the ratio <strong>5 : 3</strong>.
              <br />
              Raju received <strong>$60 less</strong> than Ken.
              <br />
              How much money did Raju receive?
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                bars: [
                  { label: "Ken", units: 5, color: "green" },
                  { label: "Raju", units: 3, color: "yellow", unitLabel: "?" }
                ],
                differenceBracket: { barIndices: [0, 1], value: "$60" },
                showUnitDividers: true,
                unitValue: "2 units = $60, so 1 unit = $30"
              }}
            />

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-bold">Solution:</p>
              <div className="mt-2 space-y-2 text-gray-800 dark:text-gray-200">
                <p>Difference = 5 - 3 = <strong>2 units</strong></p>
                <p>2 units = $60 → 1 unit = <strong>$30</strong></p>
                <p>Raju (3 units) = 3 × $30 = <strong>$90</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Complex Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">3. Complex Word Problems</h2>

          {/* Example 5: Ken and Hassan with fraction */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 5: Coins Problem</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Ken has <strong>21 coins</strong>. Ken's coins is <MathText>{'$\\frac{3}{7}$'}</MathText> of Hassan's coins.
              <br />
              (a) How many coins does Hassan have?
              <br />
              (b) How many coins do they have altogether?
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Ken : Hassan = 3 : 7",
                bars: [
                  { label: "Ken", units: 3, color: "green" },
                  { label: "Hassan", units: 7, color: "blue" }
                ],
                partialBracket: { barIndex: 0, fromUnit: 0, toUnit: 3, value: "21", position: "bottom" },
                totalBracket: { barIndices: [0, 1], value: "? (b)" },
                showUnitDividers: true,
                unitValue: "3 units = 21, so 1 unit = 7"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-bold">Solution:</p>
              <div className="mt-2 space-y-2 text-gray-800 dark:text-gray-200">
                <p><MathText>{'$\\frac{3}{7}$'}</MathText> means Ken : Hassan = <strong>3 : 7</strong></p>
                <p>Ken (3 units) = 21 → 1 unit = <strong>7 coins</strong></p>
                <p>(a) Hassan (7 units) = 7 × 7 = <strong>49 coins</strong></p>
                <p>(b) Total = 3 + 7 = 10 units = 10 × 7 = <strong>70 coins</strong></p>
              </div>
            </div>
          </div>

          {/* Example 6: Concert Tickets (5 bars!) */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 6: Concert Tickets</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The ratio of the price of an adult ticket to a child ticket is <strong>5 : 3</strong>.
              <br />
              A family of <strong>2 adults and 3 children</strong> paid <strong>$76</strong> for all tickets.
              <br />
              (a) What was the price of an adult ticket?
              <br />
              (b) How much did 3 child tickets cost?
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Ticket Prices",
                bars: [
                  { label: "Adult 1", units: 5, color: "green" },
                  { label: "Adult 2", units: 5, color: "green" },
                  { label: "Child 1", units: 3, color: "yellow" },
                  { label: "Child 2", units: 3, color: "yellow" },
                  { label: "Child 3", units: 3, color: "yellow" }
                ],
                totalBracket: { barIndices: [0, 1, 2, 3, 4], value: "$76" },
                showUnitDividers: true,
                unitValue: "19 units = $76, so 1 unit = $4"
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-bold">Solution:</p>
              <div className="mt-2 space-y-2 text-gray-800 dark:text-gray-200">
                <p>2 adult tickets = 5 × 2 = <strong>10 units</strong></p>
                <p>3 child tickets = 3 × 3 = <strong>9 units</strong></p>
                <p>Total = 10 + 9 = <strong>19 units</strong></p>
                <p>19 units = $76 → 1 unit = <strong>$4</strong></p>
                <p>(a) Adult ticket (5 units) = 5 × $4 = <strong>$20</strong></p>
                <p>(b) 3 child tickets (9 units) = 9 × $4 = <strong>$36</strong></p>
              </div>
            </div>
          </div>

          {/* Example 7: Lucy and Charlene (fraction equality) */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 7: Equal Parts Problem</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <MathText>{'$\\frac{1}{3}$'}</MathText> of Lucy's stickers is equal to <MathText>{'$\\frac{4}{5}$'}</MathText> of Charlene's stickers.
              <br />
              (a) Find the ratio of Lucy's stickers to Charlene's.
              <br />
              (b) Lucy has 28 more stickers than Charlene. How many stickers does Charlene have?
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Key insight:</strong> <MathText>{'$\\frac{1}{3}$'}</MathText> of Lucy = <MathText>{'$\\frac{4}{5}$'}</MathText> of Charlene
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                If 1 part of Lucy = 4 parts of Charlene, then:
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Lucy has 3 parts total, Charlene has 5 parts total
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                But we need to scale: Lucy's 1 part = Charlene's 4 parts
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Lucy = 3 × 4 = 12 parts, Charlene = 5 × 1 = 5 parts
              </p>
            </div>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Lucy : Charlene = 12 : 5",
                bars: [
                  { label: "Lucy", units: 12, color: "pink" },
                  { label: "Charlene", units: 5, color: "purple" }
                ],
                differenceBracket: { barIndices: [0, 1], value: "28" },
                showUnitDividers: true,
                unitValue: "7 units = 28, so 1 unit = 4"
              }}
            />

            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-bold">Solution:</p>
              <div className="mt-2 space-y-2 text-gray-800 dark:text-gray-200">
                <p>(a) Lucy : Charlene = <strong>12 : 5</strong></p>
                <p>(b) Difference = 12 - 5 = <strong>7 units</strong></p>
                <p>7 units = 28 → 1 unit = <strong>4 stickers</strong></p>
                <p>Charlene (5 units) = 5 × 4 = <strong>20 stickers</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Strategy Box */}
        <section>
          <div className="bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/50 dark:to-pink-900/50 p-6 rounded-lg border-2 border-red-300 dark:border-red-700">
            <h2 className="text-xl font-bold mb-4 text-red-800 dark:text-red-200">Bar Model Strategy Summary</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Total Given</h3>
                <ol className="list-decimal list-inside text-gray-800 dark:text-gray-200 text-sm space-y-1">
                  <li>Add all units</li>
                  <li>Total ÷ units = 1 unit</li>
                  <li>Multiply to find answer</li>
                </ol>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Difference Given</h3>
                <ol className="list-decimal list-inside text-gray-800 dark:text-gray-200 text-sm space-y-1">
                  <li>Subtract units (larger - smaller)</li>
                  <li>Difference ÷ units = 1 unit</li>
                  <li>Multiply to find answer</li>
                </ol>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-bold text-center">
                Always draw the bar model first! It helps you see the relationship clearly.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
