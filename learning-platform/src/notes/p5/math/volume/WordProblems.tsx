import { useState } from 'react';

const WordProblems = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Word Problems on Volume</h1>
        <p className="text-lg">Apply your volume knowledge to solve real-world problems</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Finding Volume of Water */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">1. Finding Volume of Water in a Tank</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Strategy:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Use the formula: <strong>Volume of water = length × breadth × water height</strong>
            </p>
            <p className="text-gray-800 dark:text-gray-200 mt-2">
              Note: The water height is how high the water is in the tank (not the tank's total height).
            </p>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Volume of Water in a Tank
            </h3>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              A cubical tank of side 30 m is partially filled with water. The height of the water level is 12 m.
              What is the volume of water in the tank?
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Solution:</p>
              <div className="space-y-2 text-gray-800 dark:text-gray-200">
                <p>Volume of water = length × breadth × water height</p>
                <p>= 30 m × 30 m × 12 m</p>
                <p className="p-2 bg-green-100 dark:bg-green-900/30 rounded mt-2">
                  <strong>Volume of water = 10,800 m³</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Water Needed to Fill Tank */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">2. Finding Water Needed to Fill a Tank</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Two Methods:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Method 1:</h4>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Water needed = Total volume − Current water volume
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Method 2:</h4>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Find the empty height, then:
                  Water needed = length × breadth × empty height
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Water Needed to Fill Tank
            </h3>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              A cubical tank of side 30 m has water to a height of 12 m.
              How much more water is needed to fill the tank completely?
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Solution (Method 2):</p>
              <div className="space-y-2 text-gray-800 dark:text-gray-200">
                <p>Height of tank not filled with water = 30 m − 12 m = 18 m</p>
                <p className="mt-2">Volume of water needed = 30 m × 30 m × 18 m</p>
                <p className="p-2 bg-green-100 dark:bg-green-900/30 rounded mt-2">
                  <strong>= 16,200 m³</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Water Transfer Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">3. Water Transfer Problems</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Strategy:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>Find the volume of water in Container A</li>
              <li>Find the volume of Container B (or how much water fills it)</li>
              <li>Calculate: Water left = Water in A − Water transferred to B</li>
            </ol>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Pouring Water Between Containers
            </h3>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              Cubical container A of side 35 cm was filled with water to a height of 16 cm.
              Some of the water was poured into an empty rectangular container B (40 cm × 15 cm × 12 cm) to fill it to the brim.
              Find the volume of water left in container A. Give your answer in litres and millilitres.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Solution:</p>
              <div className="space-y-2 text-gray-800 dark:text-gray-200">
                <p><strong>Step 1:</strong> Volume of water in container A</p>
                <p className="ml-4">= 35 × 35 × 16 = 19,600 cm³</p>

                <p className="mt-2"><strong>Step 2:</strong> Volume of container B (water transferred)</p>
                <p className="ml-4">= 40 × 15 × 12 = 7,200 cm³</p>

                <p className="mt-2"><strong>Step 3:</strong> Volume of water left in A</p>
                <p className="ml-4">= 19,600 − 7,200 = 12,400 cm³</p>
                <p className="ml-4">= 12,400 ml = 12 ℓ 400 ml</p>

                <p className="p-2 bg-green-100 dark:bg-green-900/30 rounded mt-2">
                  <strong>Water left in A = 12 ℓ 400 ml</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Fractional Fill Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">4. Fractional Fill Problems</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Understanding Fractional Fill:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              When a tank is "²⁄₃ full", it means the water height is ²⁄₃ of the tank's total height.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Water height = fraction × total height</strong>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Example: If a 18 cm tall tank is ²⁄₃ full, water height = ²⁄₃ × 18 = 12 cm
              </p>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Tank ²⁄₃ Full
            </h3>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              A rectangular tank measuring 32 cm by 32 cm by 18 cm contained 3 ℓ of water at first.
              Some water was poured into the tank until it was ²⁄₃ full.
              How much water was added into the tank?
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Solution:</p>
              <div className="space-y-2 text-gray-800 dark:text-gray-200">
                <p><strong>Step 1:</strong> Find water height when ²⁄₃ full</p>
                <p className="ml-4">Water height = ²⁄₃ × 18 cm = 12 cm</p>

                <p className="mt-2"><strong>Step 2:</strong> Find volume when ²⁄₃ full</p>
                <p className="ml-4">= 32 × 32 × 12 = 12,288 cm³ = 12,288 ml</p>

                <p className="mt-2"><strong>Step 3:</strong> Convert initial water to ml</p>
                <p className="ml-4">3 ℓ = 3000 ml = 3000 cm³</p>

                <p className="mt-2"><strong>Step 4:</strong> Find water added</p>
                <p className="ml-4">= 12,288 − 3000 = 9,288 cm³</p>

                <p className="p-2 bg-green-100 dark:bg-green-900/30 rounded mt-2">
                  <strong>Water added = 9,288 cm³ (or 9,288 ml)</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Another Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Bottles into Tank
            </h3>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              6 bottles of water were emptied into an empty rectangular tank measuring 24 cm by 20 cm by 15 cm
              until the tank was ⁴⁄₅ full of water. Each bottle contained the same amount of water.
              How much water was in each bottle?
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Solution:</p>
              <div className="space-y-2 text-gray-800 dark:text-gray-200">
                <p><strong>Step 1:</strong> Find water height when ⁴⁄₅ full</p>
                <p className="ml-4">Water height = ⁴⁄₅ × 15 cm = 12 cm</p>

                <p className="mt-2"><strong>Step 2:</strong> Find total volume of water</p>
                <p className="ml-4">= 24 × 20 × 12 = 5,760 cm³</p>

                <p className="mt-2"><strong>Step 3:</strong> Find volume in each bottle</p>
                <p className="ml-4">= 5,760 ÷ 6 = 960 cm³</p>

                <p className="p-2 bg-green-100 dark:bg-green-900/30 rounded mt-2">
                  <strong>Each bottle = 960 cm³ (or 960 ml)</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: Volume of Water
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A rectangular tank measures 36 cm by 20 cm by 24 cm. It is filled with water to a depth of 13 cm.
                Find the volume of water in the tank.
              </p>
              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution1 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution1 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">Volume = 36 × 20 × 13</p>
                  <p className="text-gray-800 dark:text-gray-200"><strong>= 9,360 cm³</strong></p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Water Needed
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A rectangular tank measures 36 cm by 20 cm by 24 cm. It is filled with water to a depth of 13 cm.
                Find the volume of water needed to fill the tank completely.
              </p>
              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution2 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution2 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">Empty height = 24 − 13 = 11 cm</p>
                  <p className="text-gray-800 dark:text-gray-200">Water needed = 36 × 20 × 11</p>
                  <p className="text-gray-800 dark:text-gray-200"><strong>= 7,920 cm³</strong></p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Using Jugs to Fill
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A rectangular tank of 40 cm by 15 cm by 20 cm is partially filled with water to a height of 8 cm.
                The capacity of a jug is 800 ml. How many jugs of water are needed to fill the tank to its brim?
              </p>
              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution3 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution3 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">Empty height = 20 − 8 = 12 cm</p>
                  <p className="text-gray-800 dark:text-gray-200">Water needed = 40 × 15 × 12 = 7,200 cm³ = 7,200 ml</p>
                  <p className="text-gray-800 dark:text-gray-200">Number of jugs = 7,200 ÷ 800 = <strong>9 jugs</strong></p>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 4: Fractional Fill
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A rectangular tank measuring 18 cm by 10 cm by 12 cm was ⁵⁄₆ full of water at first.
                440 cm³ of the water was poured away. What was the volume of water left?
                Express your answer in millilitres.
              </p>
              <button
                onClick={() => setShowSolution4(!showSolution4)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution4 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution4 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">Water height = ⁵⁄₆ × 12 = 10 cm</p>
                  <p className="text-gray-800 dark:text-gray-200">Initial volume = 18 × 10 × 10 = 1,800 cm³</p>
                  <p className="text-gray-800 dark:text-gray-200">Water left = 1,800 − 440 = 1,360 cm³</p>
                  <p className="text-gray-800 dark:text-gray-200"><strong>= 1,360 ml</strong></p>
                </div>
              )}
            </div>

            {/* Problem 5 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 5: Challenge Problem
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A rectangular tank has a square base with sides 9 m and height of 11 m.
                It contained 250 m³ of water. Another 425 m³ was poured into the tank.
                How much more water is needed to fill the tank completely?
              </p>
              <button
                onClick={() => setShowSolution5(!showSolution5)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution5 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution5 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">Total tank volume = 9 × 9 × 11 = 891 m³</p>
                  <p className="text-gray-800 dark:text-gray-200">Current water = 250 + 425 = 675 m³</p>
                  <p className="text-gray-800 dark:text-gray-200">Water needed = 891 − 675 = <strong>216 m³</strong></p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Volume of water</strong> = length × breadth × water height</li>
            <li><strong>Water needed to fill</strong> = Total volume − Current water volume</li>
            <li>Or: Water needed = length × breadth × empty height</li>
            <li>For <strong>fractional fill</strong>: Water height = fraction × total height</li>
            <li>In <strong>transfer problems</strong>: Water left = Initial water − Water transferred</li>
            <li>Always convert to the required units (ml, ℓ, cm³, m³)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WordProblems;
