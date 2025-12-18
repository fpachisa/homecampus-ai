import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function EquivalentRatios() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Equivalent Ratios</h1>
        <p className="text-lg">Learn about ratios that represent the same relationship</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Understanding Equivalent Ratios */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">1. What are Equivalent Ratios?</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Big Idea</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              <strong>Equivalent ratios</strong> are ratios that show the <strong>same relationship</strong>
              even though they use different numbers.
            </p>
          </div>

          {/* Example 1: Sandwiches */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Egg and Cheese Sandwiches</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              There are <strong>8 egg sandwiches</strong> and <strong>4 cheese sandwiches</strong>.
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Original: 8 egg to 4 cheese",
                bars: [
                  { label: "Egg", units: 8, color: "yellow" },
                  { label: "Cheese", units: 4, color: "orange" }
                ],
                showUnitDividers: true,
                caption: "Ratio = 8 : 4"
              }}
            />

            <p className="text-gray-800 dark:text-gray-200 my-4">
              Let's group them in <strong>twos</strong>:
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Grouped in twos: 4 groups to 2 groups",
                bars: [
                  { label: "Egg", units: 4, color: "yellow" },
                  { label: "Cheese", units: 2, color: "orange" }
                ],
                showUnitDividers: true,
                caption: "Ratio = 4 : 2 (same relationship!)"
              }}
            />

            <p className="text-gray-800 dark:text-gray-200 my-4">
              Let's group them in <strong>fours</strong>:
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Grouped in fours: 2 groups to 1 group",
                bars: [
                  { label: "Egg", units: 2, color: "yellow" },
                  { label: "Cheese", units: 1, color: "orange" }
                ],
                showUnitDividers: true,
                caption: "Ratio = 2 : 1 (simplest form!)"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-800 dark:text-gray-200 font-bold text-lg">
                8 : 4 = 4 : 2 = 2 : 1
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                These are all <strong>equivalent ratios</strong>!
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>2 : 1</strong> is the ratio in its <strong className="text-green-600 dark:text-green-400">simplest form</strong>.
              </p>
            </div>
          </div>

          {/* Example 2: Squares and Circles */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Squares and Circles</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              There are <strong>12 squares</strong> and <strong>8 circles</strong>.
              Find the equivalent ratios.
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "12 squares : 8 circles",
                bars: [
                  { label: "Squares", units: 12, color: "blue" },
                  { label: "Circles", units: 8, color: "green" }
                ],
                showUnitDividers: true,
                caption: "Original ratio = 12 : 8"
              }}
            />

            <div className="my-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Divide both by 2:</strong> 12 : 8 → 6 : 4
              </p>
            </div>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "6 units : 4 units",
                bars: [
                  { label: "Squares", units: 6, color: "blue" },
                  { label: "Circles", units: 4, color: "green" }
                ],
                showUnitDividers: true,
                caption: "Equivalent ratio = 6 : 4"
              }}
            />

            <div className="my-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Divide both by 2 again:</strong> 6 : 4 → 3 : 2
              </p>
            </div>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "3 units : 2 units (Simplest Form)",
                bars: [
                  { label: "Squares", units: 3, color: "blue" },
                  { label: "Circles", units: 2, color: "green" }
                ],
                showUnitDividers: true,
                caption: "Simplest form = 3 : 2"
              }}
            />

            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-bold">
                12 : 8 = 6 : 4 = 3 : 2
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>3 : 2</strong> means 3 units to 2 units
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Simplifying Ratios */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">2. Simplifying Ratios</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">How to Simplify</h3>
            <p className="text-gray-800 dark:text-gray-200">
              To simplify a ratio, divide both terms by their <strong>Greatest Common Factor (GCF)</strong>.
            </p>
          </div>

          {/* Example 3: Motorcycles and Bicycles */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: Motorcycles and Bicycles</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              There are <strong>5 motorcycles</strong> and <strong>15 bicycles</strong> at a parking space.
              Find the ratio in simplest form.
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                bars: [
                  { label: "Motorcycles", units: 1, color: "blue" },
                  { label: "Bicycles", units: 3, color: "green" }
                ],
                showUnitDividers: true,
                caption: "5 : 15 → ÷5 → 1 : 3"
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>5 is a common factor</strong> of 5 and 15.
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                Divide both by 5: <MathText>{'$5 : 15 \\rightarrow 1 : 3$'}</MathText>
              </p>
            </div>
          </div>

          {/* Example 4: Brown and Yellow Buttons */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 4: Brown and Yellow Buttons</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Jane has <strong>21 brown buttons</strong> and <strong>6 yellow buttons</strong>.
              Find the ratio in simplest form.
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                bars: [
                  { label: "Brown", units: 7, color: "orange" },
                  { label: "Yellow", units: 2, color: "yellow" }
                ],
                showUnitDividers: true,
                caption: "21 : 6 → ÷3 → 7 : 2"
              }}
            />

            <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>GCF of 21 and 6 = 3</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                Divide both by 3: <MathText>{'$21 : 6 \\rightarrow 7 : 2$'}</MathText>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>7 : 2</strong> means 7 units to 2 units
              </p>
            </div>
          </div>

          {/* Example 5: Stickers - Multiple Steps */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 5: Raju's and Anna's Stickers</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Raju has <strong>72 stickers</strong> and Anna has <strong>48 stickers</strong>.
              Find the ratio in simplest form.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Method 1 (Step by step):</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                72 : 48 → ÷8 → 9 : 6 → ÷3 → <strong>3 : 2</strong>
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Method 2 (Using GCF directly):</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                GCF of 72 and 48 = 24
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                72 : 48 → ÷24 → <strong>3 : 2</strong>
              </p>
            </div>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                bars: [
                  { label: "Raju", units: 3, color: "purple" },
                  { label: "Anna", units: 2, color: "pink" }
                ],
                partialBracket: { barIndex: 0, fromUnit: 0, toUnit: 3, value: "72", position: "top" },
                partialBracket2: { barIndex: 1, fromUnit: 0, toUnit: 2, value: "48", position: "bottom" },
                showUnitDividers: true,
                caption: "Ratio in simplest form = 3 : 2"
              }}
            />
          </div>

          {/* Example 6: Three-Term Ratio */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 6: Three Parts A, B, and C</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A piece of ribbon is cut into 3 parts A, B, and C.
              A is <strong>15 cm</strong>, B is <strong>24 cm</strong>, and C is <strong>18 cm</strong>.
              Find the ratio in simplest form.
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Ribbon Parts",
                bars: [
                  { label: "A", units: 5, color: "pink" },
                  { label: "B", units: 8, color: "green" },
                  { label: "C", units: 6, color: "blue" }
                ],
                showUnitDividers: true,
                caption: "15 : 24 : 18 → ÷3 → 5 : 8 : 6"
              }}
            />

            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>GCF of 15, 24, and 18 = 3</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <MathText>{'$15 : 24 : 18 \\rightarrow 5 : 8 : 6$'}</MathText>
              </p>
            </div>
          </div>
        </section>

        {/* Key Points Summary */}
        <section>
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
            <h2 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">Key Points to Remember</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li>✓ Equivalent ratios show the same relationship</li>
              <li>✓ To find equivalent ratios: multiply or divide BOTH terms by the same number</li>
              <li>✓ Simplest form: when both terms have no common factor except 1</li>
              <li>✓ Use GCF to simplify in one step</li>
              <li>✓ The actual numbers change, but the relationship stays the same!</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
