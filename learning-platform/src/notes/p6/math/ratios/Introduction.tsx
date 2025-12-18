import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function Introduction() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Introduction to Ratios</h1>
        <p className="text-lg">Learn how to compare quantities using ratios</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is a Ratio? */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">1. What is a Ratio?</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Big Idea</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              A <strong>ratio</strong> compares two or more quantities.
              We use the symbol <strong>:</strong> to write ratios.
            </p>
          </div>

          {/* Example 1: Balloons */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Yellow and Green Balloons</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              There are <strong>3 yellow balloons</strong> and <strong>4 green balloons</strong>.
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Yellow and Green Balloons",
                bars: [
                  { label: "Yellow", units: 3, color: "yellow" },
                  { label: "Green", units: 4, color: "green" }
                ],
                showUnitDividers: true,
                caption: "Each box represents 1 balloon"
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                The ratio of yellow balloons to green balloons is <strong>3 : 4</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                We read this as "3 to 4" or "3 is to 4"
              </p>
            </div>
          </div>

          {/* Example 2: Sugar and Flour */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Sugar and Flour for Baking</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              To bake a cake, Xinyi uses <strong>1 cup of sugar</strong> and <strong>2 cups of flour</strong>.
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Recipe Ratio",
                bars: [
                  { label: "Sugar", units: 1, color: "pink" },
                  { label: "Flour", units: 2, color: "orange" }
                ],
                showUnitDividers: true,
                caption: "Each box represents 1 cup"
              }}
            />

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Ratio of sugar to flour = 1 : 2</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>Ratio of flour to sugar = 2 : 1</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2 text-red-600 dark:text-red-400">
                Notice: The ORDER matters! 1:2 is different from 2:1
              </p>
            </div>
          </div>

          {/* Example 3: Oranges and Pears */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: Oranges and Pears</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Rafidah bought <strong>4 oranges</strong> and <strong>12 pears</strong>.
              We can group them to find the ratio.
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                bars: [
                  { label: "Oranges", units: 1, color: "orange" },
                  { label: "Pears", units: 3, color: "green" }
                ],
                showUnitDividers: true,
                caption: "When grouped: 4 oranges = 1 group, 12 pears = 3 groups"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Ratio of oranges to pears = 1 : 3</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                This means: The number of pears is <strong>3 times</strong> the number of oranges!
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Order Matters */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-300">2. Order Matters in Ratios!</h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Important Rule</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              <strong>A : B is NOT the same as B : A</strong>
            </p>
            <p className="text-gray-800 dark:text-gray-200 mt-2">
              Always read the question carefully to know which quantity comes first!
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Boys and Girls</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              In a class, there are <strong>5 boys</strong> and <strong>7 girls</strong>.
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                bars: [
                  { label: "Boys", units: 5, color: "blue" },
                  { label: "Girls", units: 7, color: "pink" }
                ],
                showUnitDividers: true
              }}
            />

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="font-bold text-gray-900 dark:text-gray-100">Ratio of boys to girls:</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">5 : 7</p>
              </div>
              <div className="p-4 bg-pink-50 dark:bg-pink-900/30 rounded-lg">
                <p className="font-bold text-gray-900 dark:text-gray-100">Ratio of girls to boys:</p>
                <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">7 : 5</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Part-to-Part and Part-to-Whole */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">3. Part-to-Part vs Part-to-Whole Ratios</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Two Types of Ratios</h3>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-2">
              <li><strong>Part-to-Part:</strong> Comparing one part to another part</li>
              <li><strong>Part-to-Whole:</strong> Comparing one part to the total</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Durian and Papaya</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The mass of a durian is <strong>5 kg</strong> and the mass of a papaya is <strong>2 kg</strong>.
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                bars: [
                  { label: "Durian", units: 5, color: "yellow" },
                  { label: "Papaya", units: 2, color: "orange" }
                ],
                totalBracket: { barIndices: [0, 1], value: "7 kg total" },
                showUnitDividers: true,
                caption: "Each unit = 1 kg"
              }}
            />

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Part-to-Part:</strong> Durian to Papaya = <strong>5 : 2</strong>
                </p>
              </div>
              <div className="p-3 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Part-to-Part:</strong> Papaya to Durian = <strong>2 : 5</strong>
                </p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Part-to-Whole:</strong> Papaya to Total = <strong>2 : 7</strong> (since 5 + 2 = 7)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Three-Term Ratios */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">4. Three-Term Ratios</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-6">
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              We can compare <strong>three or more quantities</strong> using a three-term ratio.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Hamsters, Rabbits, and Dogs</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              There are <strong>6 hamsters</strong>, <strong>5 rabbits</strong>, and <strong>8 dogs</strong>.
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Animals",
                bars: [
                  { label: "Hamsters", units: 6, color: "orange" },
                  { label: "Rabbits", units: 5, color: "pink" },
                  { label: "Dogs", units: 8, color: "blue" }
                ],
                totalBracket: { barIndices: [0, 1, 2], value: "19 animals" },
                showUnitDividers: true
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Ratio of hamsters : rabbits : dogs = 6 : 5 : 8</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Key Points Summary */}
        <section>
          <div className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/50 dark:to-teal-900/50 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
            <h2 className="text-xl font-bold mb-4 text-green-800 dark:text-green-200">Key Points to Remember</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li>✓ A ratio compares two or more quantities</li>
              <li>✓ We use ":" to write ratios (e.g., 3 : 4)</li>
              <li>✓ <strong>Order matters!</strong> A : B is different from B : A</li>
              <li>✓ Ratio does NOT tell us the actual numbers, just the relationship</li>
              <li>✓ Part-to-whole ratio: compare a part to the total</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
