import { useState } from 'react';

const WordProblems = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Word Problems with Decimals</h1>
        <p className="text-lg">Apply your decimal skills to solve real-world problems!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Problem-Solving Strategy */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-300">1. Problem-Solving Strategy</h2>

          <div className="bg-rose-50 dark:bg-rose-900/30 p-6 rounded-lg border-l-4 border-rose-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Steps to Solve Word Problems:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li><strong>Read carefully</strong> - What information is given? What are you asked to find?</li>
              <li><strong>Identify the operations</strong> - Do you need to add, subtract, multiply, or divide?</li>
              <li><strong>Check units</strong> - Make sure all units are the same before calculating</li>
              <li><strong>Show your working</strong> - Write out each step clearly</li>
              <li><strong>Check your answer</strong> - Does it make sense? Include the correct units!</li>
            </ol>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 mb-4">
            <p className="text-gray-800 dark:text-gray-200">
              <strong>💡 Tip:</strong> Estimation helps! Round the numbers first to get an approximate answer, then check if your final answer is close to your estimate.
            </p>
          </div>
        </section>

        {/* Section 2: Single-Step Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-300">2. Single-Step Word Problems</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Multiplication</h3>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                A packet of rice has a mass of <strong>2.5 kg</strong>. What is the mass of <strong>3 such packets</strong>?
              </p>
            </div>

            <div className="space-y-2 text-gray-800 dark:text-gray-200">
              <p><strong>Given:</strong> 1 packet = 2.5 kg</p>
              <p><strong>Find:</strong> Mass of 3 packets</p>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded mt-3">
                <p>Mass of 3 packets = 3 × 2.5 kg</p>
                <p className="ml-20">= <strong>7.5 kg</strong></p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center font-bold text-green-700 dark:text-green-300">The mass of 3 packets of rice is 7.5 kg.</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Division</h3>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                A ribbon is <strong>4.8 m</strong> long. It is cut into <strong>6 equal pieces</strong>. What is the length of each piece?
              </p>
            </div>

            <div className="space-y-2 text-gray-800 dark:text-gray-200">
              <p><strong>Given:</strong> Total length = 4.8 m, Number of pieces = 6</p>
              <p><strong>Find:</strong> Length of each piece</p>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded mt-3">
                <p>Length of each piece = 4.8 m ÷ 6</p>
                <p className="ml-28">= <strong>0.8 m</strong></p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center font-bold text-green-700 dark:text-green-300">Each piece of ribbon is 0.8 m long.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Multi-Step Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-300">3. Multi-Step Word Problems</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Multiple Operations with Unit Conversion</h3>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                A worker had <strong>150 m</strong> of cable at first. He used <strong>73.6 m</strong> of cable and cut the remaining cable into <strong>40 equal pieces</strong>. What was the length of each shorter piece of cable in centimetres?
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-4">
              <p className="text-yellow-800 dark:text-yellow-300 font-semibold">Estimation:</p>
              <p className="text-gray-700 dark:text-gray-300">76.4 m ÷ 40 ≈ 80 m ÷ 40 = 2 m</p>
            </div>

            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p><strong>Step 1:</strong> Find the remaining cable</p>
                <p className="ml-4">150 m − 73.6 m = <strong>76.4 m</strong></p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p><strong>Step 2:</strong> Find the length of each piece</p>
                <p className="ml-4">76.4 m ÷ 40 = <strong>1.91 m</strong></p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p><strong>Step 3:</strong> Convert to centimetres</p>
                <p className="ml-4">1.91 m = 1.91 × 100 cm = <strong>191 cm</strong></p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center font-bold text-green-700 dark:text-green-300">The length of each shorter piece of cable was 191 cm.</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Combining Different Units</h3>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                The mass of one packet of rice is <strong>2.5 kg</strong>. The mass of one packet of flour is <strong>820 g</strong>. Find the total mass of <strong>3 packets of rice</strong> and <strong>5 packets of flour</strong>. Express your answer in kilograms.
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-4">
              <p className="text-yellow-800 dark:text-yellow-300 font-semibold">Important:</p>
              <p className="text-gray-700 dark:text-gray-300">We need to make sure both measurements have the same unit before adding!</p>
            </div>

            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p><strong>Step 1:</strong> Find the mass of 3 packets of rice</p>
                <p className="ml-4">3 × 2.5 kg = <strong>7.5 kg</strong></p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p><strong>Step 2:</strong> Find the mass of 5 packets of flour</p>
                <p className="ml-4">5 × 820 g = 4100 g</p>
                <p className="ml-4">4100 g = <strong>4.1 kg</strong></p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p><strong>Step 3:</strong> Add the masses together</p>
                <p className="ml-4">7.5 kg + 4.1 kg = <strong>11.6 kg</strong></p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center font-bold text-green-700 dark:text-green-300">The total mass of 3 packets of rice and 5 packets of flour is 11.6 kg.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Bar Model Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-300">4. Bar Model Problems</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Comparison Problem</h3>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                3 identical pens and 3 identical storybooks cost <strong>$46.80</strong>. Each pen costs <strong>$3.10 less</strong> than each storybook. How much does a storybook cost?
              </p>
            </div>

            {/* Bar Model Visualization */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 text-center">Bar Model:</p>
              <div className="space-y-2">
                {/* Pens */}
                <div className="flex items-center gap-2">
                  <span className="w-20 text-sm text-gray-700 dark:text-gray-300">Pens:</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-16 bg-yellow-300 dark:bg-yellow-600 border border-yellow-500 rounded flex items-center justify-center text-xs font-bold">
                        ?
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">$3.10 less each</span>
                </div>
                {/* Storybooks */}
                <div className="flex items-center gap-2">
                  <span className="w-20 text-sm text-gray-700 dark:text-gray-300">Books:</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-20 bg-green-300 dark:bg-green-600 border border-green-500 rounded flex items-center justify-center text-xs font-bold">
                        ?
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center mt-2">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Total = $46.80</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p><strong>Step 1:</strong> Find the total cost of the "$3.10 less" parts</p>
                <p className="ml-4">3 × $3.10 = <strong>$9.30</strong></p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p><strong>Step 2:</strong> Find the value of 6 equal units (if all were storybooks)</p>
                <p className="ml-4">$46.80 − $9.30 = $37.50</p>
                <p className="ml-4 text-sm text-gray-600 dark:text-gray-400">(This is the cost of 6 storybooks)</p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p><strong>Step 3:</strong> Find the cost of 1 storybook</p>
                <p className="ml-4">$37.50 ÷ 6 = <strong>$6.25</strong></p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded">
                <p><strong>Check:</strong></p>
                <p className="ml-4">Cost of 1 pen = $6.25 − $3.10 = $3.15</p>
                <p className="ml-4">Total = 3 × $3.15 + 3 × $6.25 = $9.45 + $18.75 = $28.20</p>
                <p className="ml-4 text-red-600 dark:text-red-400 text-sm">Wait, let me recalculate...</p>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded mt-4">
              <p className="text-orange-800 dark:text-orange-300 font-semibold mb-2">Corrected Solution:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">If pen = storybook − $3.10, and 3 pens + 3 books = $46.80:</p>
              <p className="text-gray-700 dark:text-gray-300">Let storybook = 1 unit. Then pen = 1 unit − $3.10</p>
              <p className="text-gray-700 dark:text-gray-300">3(unit − $3.10) + 3(unit) = $46.80</p>
              <p className="text-gray-700 dark:text-gray-300">6 units − $9.30 = $46.80</p>
              <p className="text-gray-700 dark:text-gray-300">6 units = $56.10</p>
              <p className="text-gray-700 dark:text-gray-300">1 unit = $56.10 ÷ 6 = <strong>$9.35</strong></p>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-center font-bold text-green-700 dark:text-green-300">A storybook costs $9.35.</p>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: Mass Problem
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Cindy had 5.1 kg of beads. She bought another 2.34 kg of beads and packed all of them equally into 8 packets. What was the mass of beads in each packet? Leave your answer in grams.
              </p>
              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution1 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution1 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Step 1:</strong> Total mass = 5.1 + 2.34 = 7.44 kg</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Step 2:</strong> Mass per packet = 7.44 ÷ 8 = 0.93 kg</p>
                  <p className="text-gray-800 dark:text-gray-200"><strong>Step 3:</strong> Convert to grams = 0.93 × 1000 = <strong>930 g</strong></p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Length Problem
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                The perimeter of a rectangular photo is 56.8 cm. Its length is 3 times as long as its breadth. What is the length of the photo?
              </p>
              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution2 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution2 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-2">Let breadth = 1 unit, length = 3 units</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">Perimeter = 2 × (length + breadth) = 2 × (3 + 1) = 8 units</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">8 units = 56.8 cm</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">1 unit = 56.8 ÷ 8 = 7.1 cm</p>
                  <p className="text-gray-800 dark:text-gray-200">Length = 3 × 7.1 = <strong>21.3 cm</strong></p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Money Problem
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Ahmad bought 9 identical pencils for $13.05 and 6 identical glue sticks for $12.90. How much did 2 such pencils and 3 such glue sticks cost altogether?
              </p>
              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution3 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution3 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Step 1:</strong> Cost of 1 pencil = $13.05 ÷ 9 = $1.45</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Step 2:</strong> Cost of 1 glue stick = $12.90 ÷ 6 = $2.15</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Step 3:</strong> Cost of 2 pencils = 2 × $1.45 = $2.90</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Step 4:</strong> Cost of 3 glue sticks = 3 × $2.15 = $6.45</p>
                  <p className="text-gray-800 dark:text-gray-200">Total = $2.90 + $6.45 = <strong>$9.35</strong></p>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 4: Volume Problem
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                The total volume of 4 identical cups of juice and 5 identical glasses of water is 3440 ml. The total volume of 2 such cups of juice and 2 such glasses of water is 1530 ml. Find the volume of 1 cup of juice and 2 glasses of water. Give your answers in litres.
              </p>
              <button
                onClick={() => setShowSolution4(!showSolution4)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution4 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution4 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-2">Let juice = J, water = W</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">4J + 5W = 3440 ml ... (1)</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">2J + 2W = 1530 ml ... (2)</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">From (2): 4J + 4W = 3060 ml ... (3)</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">(1) − (3): W = 3440 − 3060 = 380 ml</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">From (2): 2J + 760 = 1530, so 2J = 770, J = 385 ml</p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">1J + 2W = 385 + 760 = 1145 ml = <strong>1.145 ℓ</strong></p>
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
            <li><strong>Read carefully</strong> to understand what is given and what to find</li>
            <li><strong>Check units</strong> - convert to the same unit before calculating</li>
            <li>Use <strong>estimation</strong> to check if your answer is reasonable</li>
            <li><strong>Bar models</strong> help visualize comparison problems</li>
            <li>Show <strong>all your working</strong> and include <strong>units</strong> in your answer</li>
            <li>For multi-step problems, solve <strong>one step at a time</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WordProblems;
