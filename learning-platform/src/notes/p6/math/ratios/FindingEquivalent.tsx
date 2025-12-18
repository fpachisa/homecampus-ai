import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function FindingEquivalent() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Finding Equivalent Ratios</h1>
        <p className="text-lg">Learn to scale ratios and find missing values</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Scaling Ratios */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">1. Scaling Ratios Up and Down</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Key Rule</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              To find an equivalent ratio, <strong>multiply or divide BOTH terms</strong> by the same number.
            </p>
          </div>

          {/* Example 1: Lemonade Recipe */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Lemonade Recipe</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Mrs Lim mixes <strong>1 glass of lemon juice</strong> with <strong>5 glasses of sparkling water</strong> to make lemonade.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border p-2">Lemon juice</th>
                    <th className="border p-2">1</th>
                    <th className="border p-2">2</th>
                    <th className="border p-2">3</th>
                    <th className="border p-2 bg-yellow-100 dark:bg-yellow-900">4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 bg-gray-100 dark:bg-gray-700 font-bold">Sparkling water</td>
                    <td className="border p-2">5</td>
                    <td className="border p-2">10</td>
                    <td className="border p-2">15</td>
                    <td className="border p-2 bg-yellow-100 dark:bg-yellow-900">?</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              If she uses <strong>4 glasses of lemon juice</strong>, how many glasses of sparkling water does she need?
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Ratio 1 : 5 scaled to 4 : ?",
                bars: [
                  { label: "Lemon", units: 4, color: "yellow" },
                  { label: "Water", units: 20, color: "blue" }
                ],
                showUnitDividers: true,
                caption: "1 : 5 → ×4 → 4 : 20"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Since 1 × 4 = 4, multiply both by 4:</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2 text-xl">
                <MathText>{'$1 : 5 = 4 : 20$'}</MathText>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                Mrs Lim needs <strong>20 glasses</strong> of sparkling water.
              </p>
            </div>
          </div>

          {/* Example 2: Scaling Down */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Scaling Down</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Find the missing value: <MathText>{'$5 : 20 = 1 : ?$'}</MathText>
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                bars: [
                  { label: "First", units: 1, color: "purple" },
                  { label: "Second", units: 4, color: "pink" }
                ],
                showUnitDividers: true,
                caption: "5 : 20 → ÷5 → 1 : 4"
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Since 5 ÷ 5 = 1, divide both by 5:</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                20 ÷ 5 = 4
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2 text-xl">
                <MathText>{'$5 : 20 = 1 : 4$'}</MathText>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Finding Missing Values */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-pink-700 dark:text-pink-300">2. Finding Missing Values</h2>

          <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border-l-4 border-pink-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Strategy</h3>
            <ol className="list-decimal list-inside text-gray-800 dark:text-gray-200 space-y-2">
              <li>Look at the known values to find the <strong>scaling factor</strong></li>
              <li>Apply the same factor to find the missing value</li>
            </ol>
          </div>

          {/* Example 3: Finding Missing Number */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: <MathText>{'$3 : 7 = ? : 28$'}</MathText></h3>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                bars: [
                  { label: "First", units: 12, color: "green" },
                  { label: "Second", units: 28, color: "blue" }
                ],
                showUnitDividers: true,
                caption: "3 : 7 → ×4 → 12 : 28"
              }}
            />

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Step 1:</strong> Find the factor: 7 → 28 means ×4
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>Step 2:</strong> Apply to first term: 3 × 4 = 12
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2 text-xl font-bold">
                <MathText>{'$3 : 7 = 12 : 28$'}</MathText>
              </p>
            </div>
          </div>

          {/* Example 4: Another Missing Value */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 4: <MathText>{'$? : 5 = 12 : 30$'}</MathText></h3>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                bars: [
                  { label: "First", units: 2, color: "orange" },
                  { label: "Second", units: 5, color: "purple" }
                ],
                showUnitDividers: true,
                caption: "12 : 30 → ÷6 → 2 : 5"
              }}
            />

            <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Step 1:</strong> Find the factor: 30 → 5 means ÷6
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>Step 2:</strong> Apply to first term: 12 ÷ 6 = 2
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2 text-xl font-bold">
                <MathText>{'$2 : 5 = 12 : 30$'}</MathText>
              </p>
            </div>
          </div>

          {/* Example 5: Three-Term Ratio */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 5: Three-Term Ratio</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Find the missing numbers: <MathText>{'$5 : 3 : 4 = ? : 18 : ?$'}</MathText>
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Scaled by ×6",
                bars: [
                  { label: "A", units: 5, color: "pink" },
                  { label: "B", units: 3, color: "green" },
                  { label: "C", units: 4, color: "blue" }
                ],
                partialBracket: { barIndex: 1, fromUnit: 0, toUnit: 3, value: "18", position: "bottom" },
                showUnitDividers: true,
                caption: "5 : 3 : 4 → ×6 → 30 : 18 : 24"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Step 1:</strong> Find the factor from 3 → 18: that's ×6
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>Step 2:</strong> Apply ×6 to all terms:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 text-gray-800 dark:text-gray-200">
                <li>5 × 6 = 30</li>
                <li>3 × 6 = 18 ✓</li>
                <li>4 × 6 = 24</li>
              </ul>
              <p className="text-gray-800 dark:text-gray-200 mt-2 text-xl font-bold">
                <MathText>{'$5 : 3 : 4 = 30 : 18 : 24$'}</MathText>
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Real-World Applications */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-300">3. Real-World Applications</h2>

          {/* Example 6: Bakery Tarts */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 6: Bakery Tarts</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A bakery sells boxes of tarts. Each box contains <strong>6 strawberry tarts</strong> and <strong>4 lemon tarts</strong>.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border p-2">Boxes</th>
                    <th className="border p-2">1</th>
                    <th className="border p-2">2</th>
                    <th className="border p-2">3</th>
                    <th className="border p-2">4</th>
                    <th className="border p-2 bg-yellow-100 dark:bg-yellow-900">5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 bg-pink-100 dark:bg-pink-900 font-bold">Strawberry</td>
                    <td className="border p-2">6</td>
                    <td className="border p-2">12</td>
                    <td className="border p-2">18</td>
                    <td className="border p-2">24</td>
                    <td className="border p-2 bg-yellow-100 dark:bg-yellow-900">?</td>
                  </tr>
                  <tr>
                    <td className="border p-2 bg-yellow-100 dark:bg-yellow-900 font-bold">Lemon</td>
                    <td className="border p-2">4</td>
                    <td className="border p-2">8</td>
                    <td className="border p-2">?</td>
                    <td className="border p-2">16</td>
                    <td className="border p-2 bg-yellow-100 dark:bg-yellow-900">20</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Ratio of Strawberry : Lemon = 6 : 4 = 3 : 2",
                bars: [
                  { label: "Strawberry", units: 3, color: "pink" },
                  { label: "Lemon", units: 2, color: "yellow" }
                ],
                showUnitDividers: true,
                caption: "The ratio stays constant: 3 : 2"
              }}
            />

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-pink-50 dark:bg-pink-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>5 boxes:</strong> Strawberry = 6 × 5 = <strong>30 tarts</strong>
                </p>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>3 boxes:</strong> Lemon = 4 × 3 = <strong>12 tarts</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points Summary */}
        <section>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-700">
            <h2 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-200">Key Points to Remember</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li>✓ To scale up: multiply both terms by the same number</li>
              <li>✓ To scale down: divide both terms by the same number</li>
              <li>✓ Find the factor from known values first</li>
              <li>✓ Apply the same factor to find missing values</li>
              <li>✓ Ratio tables help track equivalent ratios</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
