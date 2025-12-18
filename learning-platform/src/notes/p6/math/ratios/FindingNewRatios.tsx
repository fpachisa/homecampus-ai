import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function FindingNewRatios() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Finding New Ratios</h1>
        <p className="text-lg">Learn to combine ratios and work with three-term ratios</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Combining Two Ratios */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">1. Combining Two Ratios</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Strategy</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When you have two ratios with a <strong>common term</strong>, you can combine them into a <strong>three-term ratio</strong>.
            </p>
            <ol className="list-decimal list-inside text-gray-800 dark:text-gray-200 mt-2 space-y-1">
              <li>Identify the common term in both ratios</li>
              <li>Make the common term <strong>equal</strong> in both ratios</li>
              <li>Combine into one three-term ratio</li>
            </ol>
          </div>

          {/* Example 1: Ken, Suzy, Ming */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Money Problem</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The ratio of Ken's money to Suzy's money is <strong>2 : 3</strong>.
              <br />
              The ratio of Ken's money to Ming's money is <strong>6 : 5</strong>.
              <br />
              Find the ratio of Ken's money to Suzy's money to Ming's money.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Common term:</strong> Ken's money (appears in both ratios)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="font-bold text-gray-900 dark:text-gray-100">Ken : Suzy = 2 : 3</p>
                <p className="text-gray-800 dark:text-gray-200 mt-2">
                  ×3 → <strong>6 : 9</strong>
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="font-bold text-gray-900 dark:text-gray-100">Ken : Ming = 6 : 5</p>
                <p className="text-gray-800 dark:text-gray-200 mt-2">
                  (already has Ken = 6)
                </p>
              </div>
            </div>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Ken : Suzy : Ming",
                bars: [
                  { label: "Ken", units: 6, color: "green" },
                  { label: "Suzy", units: 9, color: "yellow" },
                  { label: "Ming", units: 5, color: "blue" }
                ],
                showUnitDividers: true,
                caption: "Combined ratio = 6 : 9 : 5"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-800 dark:text-gray-200 text-lg">
                <strong>Ken : Suzy : Ming = 6 : 9 : 5</strong>
              </p>
            </div>
          </div>

          {/* Example 2: Shapes */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Squares, Triangles, and Circles</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Anna has some shapes.
              <br />
              The ratio of squares to triangles is <strong>1 : 4</strong>.
              <br />
              The ratio of squares to circles is <strong>2 : 5</strong>.
              <br />
              Find the ratio of squares to triangles to circles.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Common term:</strong> Number of squares
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                Make squares equal: LCM of 1 and 2 is 2
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="font-bold text-gray-900 dark:text-gray-100">Squares : Triangles = 1 : 4</p>
                <p className="text-gray-800 dark:text-gray-200 mt-2">
                  ×2 → <strong>2 : 8</strong>
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="font-bold text-gray-900 dark:text-gray-100">Squares : Circles = 2 : 5</p>
                <p className="text-gray-800 dark:text-gray-200 mt-2">
                  (already has squares = 2)
                </p>
              </div>
            </div>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Squares : Triangles : Circles",
                bars: [
                  { label: "Squares", units: 2, color: "blue" },
                  { label: "Triangles", units: 8, color: "green" },
                  { label: "Circles", units: 5, color: "orange" }
                ],
                showUnitDividers: true,
                caption: "Combined ratio = 2 : 8 : 5"
              }}
            />

            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 text-lg">
                <strong>Squares : Triangles : Circles = 2 : 8 : 5</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <em>What is the ratio of triangles to circles? 8 : 5</em>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Working with Three-Term Ratios */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">2. Working with Three-Term Ratios</h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Extracting Two-Term Ratios</h3>
            <p className="text-gray-800 dark:text-gray-200">
              From any three-term ratio <strong>A : B : C</strong>, you can find:
            </p>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 mt-2 space-y-1">
              <li>A : B (first two terms)</li>
              <li>B : C (last two terms)</li>
              <li>A : C (first and last terms)</li>
            </ul>
          </div>

          {/* Example 3: Extracting Ratios */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: Extracting from 6 : 9 : 5</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Given <strong>Ken : Suzy : Ming = 6 : 9 : 5</strong>, find:
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                bars: [
                  { label: "Ken", units: 6, color: "green" },
                  { label: "Suzy", units: 9, color: "yellow" },
                  { label: "Ming", units: 5, color: "blue" }
                ],
                showUnitDividers: true
              }}
            />

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Ken : Suzy = 6 : 9 = 2 : 3</strong> (simplify by ÷3)
                </p>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Suzy : Ming = 9 : 5</strong> (already in simplest form)
                </p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Ken : Ming = 6 : 5</strong> (already in simplest form)
                </p>
              </div>
            </div>
          </div>

          {/* Example 4: Finding Total */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 4: Finding Values from Three-Term Ratio</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Red : Blue : Green paint = <strong>3 : 5 : 2</strong>
              <br />
              If there are <strong>15 litres</strong> of blue paint, find the total amount of paint.
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Paint Ratio",
                bars: [
                  { label: "Red", units: 3, color: "pink" },
                  { label: "Blue", units: 5, color: "blue" },
                  { label: "Green", units: 2, color: "green" }
                ],
                partialBracket: { barIndex: 1, fromUnit: 0, toUnit: 5, value: "15 L", position: "bottom" },
                totalBracket: { barIndices: [0, 1, 2], value: "? L" },
                showUnitDividers: true,
                unitValue: "5 units = 15 L, so 1 unit = 3 L"
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Step 1:</strong> Blue = 5 units = 15 L
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>Step 2:</strong> 1 unit = 15 ÷ 5 = 3 L
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>Step 3:</strong> Total units = 3 + 5 + 2 = 10 units
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>Step 4:</strong> Total paint = 10 × 3 = <strong>30 L</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Complex Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">3. Complex Problems</h2>

          {/* Example 5: Art Exhibition */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 5: Art Exhibition</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              At an art exhibition:
              <br />
              • Ratio of adults to boys = <strong>3 : 2</strong>
              <br />
              • Ratio of boys to girls = <strong>1 : 4</strong>
              <br />
              There are <strong>30 boys</strong>. Find the total number of people.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Common term:</strong> Boys
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                Adults : Boys = 3 : 2 (Boys = 2)
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Boys : Girls = 1 : 4 → ×2 → 2 : 8 (Boys = 2)
              </p>
            </div>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Adults : Boys : Girls = 3 : 2 : 8",
                bars: [
                  { label: "Adults", units: 3, color: "green" },
                  { label: "Boys", units: 2, color: "yellow" },
                  { label: "Girls", units: 8, color: "pink" }
                ],
                partialBracket: { barIndex: 1, fromUnit: 0, toUnit: 2, value: "30", position: "bottom" },
                totalBracket: { barIndices: [0, 1, 2], value: "?" },
                showUnitDividers: true,
                unitValue: "2 units = 30, so 1 unit = 15"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                2 units = 30 → 1 unit = 15
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                Total = 3 + 2 + 8 = 13 units
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                13 × 15 = <strong>195 people</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Key Points Summary */}
        <section>
          <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 p-6 rounded-lg border-2 border-orange-300 dark:border-orange-700">
            <h2 className="text-xl font-bold mb-4 text-orange-800 dark:text-orange-200">Key Points to Remember</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li>✓ Identify the common term between two ratios</li>
              <li>✓ Make the common term equal by scaling</li>
              <li>✓ Combine to form a three-term ratio</li>
              <li>✓ You can extract two-term ratios from any three-term ratio</li>
              <li>✓ Find the value of 1 unit to solve for actual quantities</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
