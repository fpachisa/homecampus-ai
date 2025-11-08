import { useState } from 'react';
import RightTriangleVisualizer from '../../../../components/math-tools/RightTriangleVisualizer';

export default function FindingHypotenuse() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Finding the Hypotenuse</h1>
        <p className="mt-2 text-green-100">
          Learn how to calculate the longest side of a right-angled triangle
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Using the Formula c² = a² + b² */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Using the Formula c² = a² + b²
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we know the lengths of the two shorter sides (the legs) of a right-angled triangle, we can use Pythagoras' Theorem to find the length of the hypotenuse.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Step-by-Step Method
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>Identify</strong> the two shorter sides (a and b)</li>
                <li><strong>Square</strong> each side length: calculate a² and b²</li>
                <li><strong>Add</strong> the squares: calculate a² + b²</li>
                <li><strong>Take the square root</strong> to find c: c = √(a² + b²)</li>
                <li><strong>Write the answer</strong> with appropriate units</li>
              </ol>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                🧮 Understanding Square Roots
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The square root (√) is the opposite operation of squaring. For example:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>• 5² = 25, so √25 = 5</li>
                <li>• 12² = 144, so √144 = 12</li>
                <li>• 10² = 100, so √100 = 10</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                For most problems, you'll use a calculator to find square roots. Always check that your answer makes sense - the hypotenuse should be longer than either of the other two sides!
              </p>
            </div>
          </div>

          {/* Worked Example 1 - WITH VISUAL */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 1: Finding the Hypotenuse with Simple Numbers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In triangle ABC, angle C = 90°, BC = 3 cm and AC = 4 cm. Find the length of AB.
            </p>

            {/* Visual Setup */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center font-semibold">
                The Problem Setup
              </p>
              <RightTriangleVisualizer
                angle={null}
                hypotenuse="AB = ?"
                opposite="3 cm"
                adjacent="4 cm"
                highlightSide="none"
                showAngleMark={false}
                showRightAngle={true}
                showSideTypeLabels={false}
                caption="We know the two legs, need to find the hypotenuse"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4 border border-green-300 dark:border-green-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Step 1:</strong> Identify what we know
                <br />
                • BC = 3 cm (one leg)
                <br />
                • AC = 4 cm (other leg)
                <br />
                • AB = ? (hypotenuse - opposite the right angle)
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Step 2:</strong> Apply Pythagoras' Theorem
                <br />
                AB² = BC² + AC²
                <br />
                AB² = 3² + 4²
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Step 3:</strong> Calculate
                <br />
                AB² = 9 + 16 = 25
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Step 4:</strong> Take the square root
                <br />
                AB = √25 = 5 cm
              </p>

              <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded mt-3">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Answer:</strong> The hypotenuse AB = <strong>5 cm</strong>
                </p>
              </div>
            </div>

            {/* Visual Solution */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center font-semibold">
                The Complete Triangle
              </p>
              <RightTriangleVisualizer
                angle={null}
                hypotenuse="5 cm"
                opposite="3 cm"
                adjacent="4 cm"
                highlightSide="hypotenuse"
                showAngleMark={false}
                showRightAngle={true}
                showSideTypeLabels={false}
                caption="The 3-4-5 triangle - a famous Pythagorean triple!"
              />
            </div>
          </div>

          {/* Worked Example 2 - Less Visual */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 2: Finding the Hypotenuse (Calculator Needed)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A right-angled triangle has legs of length 6 m and 8 m. Find the length of the hypotenuse, correct to 3 significant figures.
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Using Pythagoras' Theorem:
                <br />
                c² = 6² + 8²
                <br />
                c² = 36 + 64
                <br />
                c² = 100
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                c = √100 = <strong>10.0 m</strong> (to 3 s.f.)
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                💡 This is the 6-8-10 triangle, a multiple of 3-4-5 (× 2)!
              </p>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Find the Hypotenuse
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In triangle ABC, angle B = 90°, AB = 5 cm and BC = 12 cm. Find the length of AC.
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  In △ABC, ∠B = 90°, so AC is the hypotenuse.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Using Pythagoras' Theorem:
                  <br />
                  AC² = AB² + BC²
                  <br />
                  AC² = 5² + 12² = 25 + 144 = 169
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  ∴ AC = √169 = <strong>13 cm</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  💡 This is the 5-12-13 Pythagorean triple!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Working with Different Units */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Working with Different Units
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In real-world problems, measurements may be given in various units (mm, cm, m, km). It's crucial to work with consistent units throughout your calculation.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                ⚠️ Critical Rule: Use Consistent Units
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Before applying Pythagoras' Theorem, make sure all measurements are in the same units!
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">
                  Common Unit Conversions:
                </p>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                  <li>• 1 m = 100 cm = 1000 mm</li>
                  <li>• 1 km = 1000 m</li>
                  <li>• 1 cm = 10 mm</li>
                </ul>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                📏 Rounding Guidelines
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                When the hypotenuse is not a whole number:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>1 decimal place (1 d.p.):</strong> 12.456... → 12.5</li>
                <li><strong>2 decimal places (2 d.p.):</strong> 12.456... → 12.46</li>
                <li><strong>3 significant figures (3 s.f.):</strong> 12.456... → 12.5</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                Always follow the rounding instructions given in the question!
              </p>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 3: Mixed Units Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A right-angled triangle has sides of length 2.5 m and 180 cm. Find the length of the hypotenuse in metres, correct to 2 decimal places.
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Step 1:</strong> Convert to consistent units (metres)
                <br />
                First side = 2.5 m
                <br />
                Second side = 180 cm = 180 ÷ 100 = 1.8 m
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Step 2:</strong> Apply Pythagoras' Theorem
                <br />
                c² = 2.5² + 1.8²
                <br />
                c² = 6.25 + 3.24 = 9.49
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Step 3:</strong> Calculate and round
                <br />
                c = √9.49 = 3.0805... m
                <br />
                c = <strong>3.08 m</strong> (to 2 d.p.)
              </p>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Unit Conversion
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A right-angled triangle has legs of length 6 cm and 80 mm. Calculate the hypotenuse in cm, correct to 1 decimal place.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Step 1:</strong> Convert to same units (cm)
                  <br />
                  First leg = 6 cm
                  <br />
                  Second leg = 80 mm = 80 ÷ 10 = 8 cm
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Step 2:</strong> Apply Pythagoras' Theorem
                  <br />
                  c² = 6² + 8² = 36 + 64 = 100
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  c = √100 = <strong>10.0 cm</strong> (to 1 d.p.)
                </p>
              </div>
            )}
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Checking Reasonableness
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A student calculates the hypotenuse of a right-angled triangle with legs 9 cm and 12 cm and gets an answer of 2.08 cm.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) Without doing the full calculation, explain why this answer cannot be correct.
              <br />
              (b) Calculate the correct hypotenuse.
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  (a) The answer of 2.08 cm cannot be correct because the hypotenuse must be <strong>longer</strong> than either of the two legs. Since the legs are 9 cm and 12 cm, the hypotenuse must be greater than 12 cm!
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  (b) Correct calculation:
                  <br />
                  c² = 9² + 12² = 81 + 144 = 225
                  <br />
                  c = √225 = <strong>15 cm</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  ✓ This makes sense: 15 cm is indeed longer than both 9 cm and 12 cm
                </p>
              </div>
            )}
          </div>

          {/* Practice Problem 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Challenge Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In triangle XYZ, angle Y = 90°, XY = 35 m and YZ = 28 m. Find the length of XZ in metres, correct to 3 significant figures.
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  In △XYZ, ∠Y = 90°, so XZ is the hypotenuse.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Using Pythagoras' Theorem:
                  <br />
                  XZ² = XY² + YZ²
                  <br />
                  XZ² = 35² + 28² = 1225 + 784 = 2009
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  XZ = √2009 = 44.821... m
                  <br />
                  <strong>Answer:</strong> XZ = <strong>44.8 m</strong> (to 3 s.f.)
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>To find the hypotenuse: use c² = a² + b², then take the square root</li>
            <li>Always square the lengths first, then add, then find the square root</li>
            <li>The hypotenuse is always longer than either of the two legs - use this to check your answer</li>
            <li>Convert all measurements to the same units before calculating</li>
            <li>Round your final answer according to the instructions (1 d.p., 2 d.p., 3 s.f., etc.)</li>
            <li>Famous Pythagorean triples: 3-4-5, 5-12-13, 8-15-17, and their multiples</li>
            <li>Always include units in your final answer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
