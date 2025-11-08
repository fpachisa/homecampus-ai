import { useState } from 'react';
import RightTriangleVisualizer from '../../../../components/math-tools/RightTriangleVisualizer';

export default function FindingShorterSides() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Finding the Shorter Sides</h1>
        <p className="mt-2 text-orange-100">
          Learn how to rearrange Pythagoras' Theorem to find unknown legs
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Rearranging the Formula */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Rearranging the Formula
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we know the hypotenuse and one leg of a right-angled triangle, we can find the other leg by rearranging Pythagoras' Theorem.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                The Three Forms of Pythagoras' Theorem
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Original form</strong> (finding hypotenuse c):
                  </p>
                  <p className="text-center text-xl font-bold text-blue-600 dark:text-blue-400">
                    c² = a² + b²
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Rearranged form 1</strong> (finding leg a when you know b and c):
                  </p>
                  <p className="text-center text-xl font-bold text-green-600 dark:text-green-400">
                    a² = c² - b²
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-2">
                    (Subtract b² from both sides)
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Rearranged form 2</strong> (finding leg b when you know a and c):
                  </p>
                  <p className="text-center text-xl font-bold text-purple-600 dark:text-purple-400">
                    b² = c² - a²
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-2">
                    (Subtract a² from both sides)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                ⚠️ Critical: Always Subtract from the Hypotenuse²
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                When finding a leg, you must always subtract the known leg² from the hypotenuse²:
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  ✓ Correct: unknown leg² = hypotenuse² - known leg²
                </p>
                <p className="text-red-600 dark:text-red-400">
                  ✗ Wrong: unknown leg² = known leg² - hypotenuse² (gives negative!)
                </p>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                📋 Step-by-Step Method
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>Identify</strong> which side is the hypotenuse (longest, opposite right angle)</li>
                <li><strong>Write</strong> the correct rearranged formula</li>
                <li><strong>Substitute</strong> the known values</li>
                <li><strong>Calculate</strong> the squares and subtract</li>
                <li><strong>Take the square root</strong> of the result</li>
                <li><strong>Check</strong> your answer makes sense (should be shorter than hypotenuse)</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 1 - WITH VISUAL */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 1: Finding a Shorter Side
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In triangle ABC, angle C = 90°, AB = 13 cm and BC = 5 cm. Find the length of AC.
            </p>

            {/* Visual Setup */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center font-semibold">
                The Problem Setup
              </p>
              <RightTriangleVisualizer
                angle={null}
                hypotenuse="13 cm"
                opposite="5 cm"
                adjacent="AC = ?"
                highlightSide="adjacent"
                showAngleMark={false}
                showRightAngle={true}
                showSideTypeLabels={false}
                caption="We know the hypotenuse and one leg, need to find the other leg"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Step 1:</strong> Identify the hypotenuse
                <br />
                Since angle C = 90°, the hypotenuse is AB = 13 cm
                <br />
                We know: BC = 5 cm (one leg)
                <br />
                We need to find: AC (the other leg)
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Step 2:</strong> Write the rearranged formula
                <br />
                Using Pythagoras' Theorem: AB² = BC² + AC²
                <br />
                Rearranging for AC: <strong>AC² = AB² - BC²</strong>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Step 3:</strong> Substitute the values
                <br />
                AC² = 13² - 5²
                <br />
                AC² = 169 - 25
                <br />
                AC² = 144
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Step 4:</strong> Take the square root
                <br />
                AC = √144 = 12 cm
              </p>

              <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded mt-3">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Answer:</strong> AC = <strong>12 cm</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  ✓ Check: 12 cm is less than the hypotenuse (13 cm) ✓
                  <br />
                  ✓ This is the 5-12-13 Pythagorean triple!
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2 - Less Visual */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 2: Finding a Leg with Calculator
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A right-angled triangle has a hypotenuse of 25 cm and one leg of 15 cm. Find the length of the other leg, correct to 3 significant figures.
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Let the unknown leg = x cm
                <br />
                Hypotenuse = 25 cm
                <br />
                Known leg = 15 cm
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Using the rearranged formula:
                <br />
                x² = 25² - 15²
                <br />
                x² = 625 - 225 = 400
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                x = √400 = 20 cm
              </p>

              <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded mt-3">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Answer:</strong> The other leg = <strong>20.0 cm</strong> (to 3 s.f.)
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  💡 This is the 15-20-25 triangle, a multiple of 3-4-5 (× 5)!
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Find the Missing Leg
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In triangle PQR, angle Q = 90°, PR = 17 m and QR = 8 m. Find the length of PQ.
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
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  In △PQR, ∠Q = 90°, so PR is the hypotenuse (17 m).
                  <br />
                  Known leg: QR = 8 m
                  <br />
                  Unknown leg: PQ = ?
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Using rearranged Pythagoras' Theorem:
                  <br />
                  PQ² = PR² - QR²
                  <br />
                  PQ² = 17² - 8² = 289 - 64 = 225
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  PQ = √225 = <strong>15 m</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  💡 This is the 8-15-17 Pythagorean triple!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Complex Multi-Step Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Complex Multi-Step Problems
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some problems require us to apply Pythagoras' Theorem more than once, or to find an intermediate value before we can answer the main question. These problems test your problem-solving skills!
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                🧩 Problem-Solving Strategy
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>Read carefully</strong> and draw a diagram if needed</li>
                <li><strong>Identify</strong> what you're trying to find (final answer)</li>
                <li><strong>Break down</strong> the problem into smaller steps</li>
                <li><strong>Find intermediate values</strong> that you need along the way</li>
                <li><strong>Apply Pythagoras' Theorem</strong> to each right-angled triangle</li>
                <li><strong>Check</strong> that your final answer makes sense</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 3 - WITH VISUAL for complex problem */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 3: Point on a Side
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In triangle ABC, angle ACB = 90°. P lies on BC such that BP = 21 cm, PC = 15 cm and AP = 25 cm. Calculate the length of AC.
            </p>

            {/* Visual to show the setup */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center font-semibold">
                Triangle APC (the one we'll use)
              </p>
              <RightTriangleVisualizer
                angle={null}
                hypotenuse="25 cm"
                opposite="AC = ?"
                adjacent="15 cm"
                highlightSide="opposite"
                showAngleMark={false}
                showRightAngle={true}
                showSideTypeLabels={false}
                caption="Focus on triangle APC: We know AP = 25 cm, PC = 15 cm, need AC"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                In △APC, ∠ACP = 90° (given)
                <br />
                We know: AP = 25 cm (hypotenuse), PC = 15 cm (one leg)
                <br />
                We need to find: AC (the other leg)
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Using Pythagoras' Theorem:
                <br />
                AP² = PC² + AC²
                <br />
                25² = 15² + AC²
                <br />
                625 = 225 + AC²
                <br />
                AC² = 625 - 225 = 400
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                ∴ AC = √400 = <strong>20 cm</strong>
              </p>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Two Triangles in One
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Triangle XYZ has a right angle at Y. Point M lies on XZ such that YM is perpendicular to XZ.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Given: XY = 12 cm, YZ = 16 cm, and YM = 9.6 cm
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) Find the length of XZ (the hypotenuse of triangle XYZ)
              <br />
              (b) Find the length of XM
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
                  <strong>Part (a):</strong> In △XYZ, ∠Y = 90°
                  <br />
                  XZ² = XY² + YZ²
                  <br />
                  XZ² = 12² + 16² = 144 + 256 = 400
                  <br />
                  XZ = √400 = <strong>20 cm</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Part (b):</strong> In △XYM, ∠XMY = 90° (since YM ⊥ XZ)
                  <br />
                  XY² = YM² + XM²
                  <br />
                  12² = 9.6² + XM²
                  <br />
                  144 = 92.16 + XM²
                  <br />
                  XM² = 144 - 92.16 = 51.84
                  <br />
                  XM = √51.84 = <strong>7.2 cm</strong>
                </p>
              </div>
            )}
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Finding Multiple Unknown Sides
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In a right-angled triangle, the hypotenuse is 60 cm. One of the legs is twice as long as the other.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Find the lengths of both legs, correct to 1 decimal place.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Hint: Let the shorter leg = x cm, then the longer leg = 2x cm
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
                  Let the shorter leg = x cm
                  <br />
                  Then the longer leg = 2x cm
                  <br />
                  Hypotenuse = 60 cm
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Using Pythagoras' Theorem:
                  <br />
                  60² = x² + (2x)²
                  <br />
                  3600 = x² + 4x²
                  <br />
                  3600 = 5x²
                  <br />
                  x² = 720
                  <br />
                  x = √720 ≈ 26.8 cm
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Therefore:
                  <br />
                  Shorter leg = <strong>26.8 cm</strong>
                  <br />
                  Longer leg = 2 × 26.8 = <strong>53.6 cm</strong>
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
              In triangle ABC, AB = 3 cm and angle ABC = 90°. Q lies on BC such that BQ = QC and AQ = 5 cm.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) Find the length of BQ.
              <br />
              (b) Point X lies on BC such that AX = 7 cm. Does X lie closer to Q or C? Explain.
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
                  <strong>Part (a):</strong> In △ABQ, ∠ABC = 90°
                  <br />
                  We know: AB = 3 cm, AQ = 5 cm (hypotenuse)
                  <br />
                  Finding BQ: AQ² = AB² + BQ²
                  <br />
                  5² = 3² + BQ²
                  <br />
                  25 = 9 + BQ²
                  <br />
                  BQ² = 16
                  <br />
                  BQ = <strong>4 cm</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Since BQ = QC (given), we have QC = 4 cm
                  <br />
                  Therefore BC = BQ + QC = 4 + 4 = 8 cm
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Part (b):</strong> In △ABX, ∠ABC = 90°
                  <br />
                  We know: AB = 3 cm, AX = 7 cm
                  <br />
                  Finding BX: AX² = AB² + BX²
                  <br />
                  7² = 3² + BX²
                  <br />
                  49 = 9 + BX²
                  <br />
                  BX² = 40
                  <br />
                  BX = √40 ≈ 6.32 cm
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Position analysis:
                  <br />
                  • Q is at 4 cm from B
                  <br />
                  • X is at 6.32 cm from B
                  <br />
                  • C is at 8 cm from B
                  <br />
                  <br />
                  Distance QX = 6.32 - 4 = 2.32 cm
                  <br />
                  Distance XC = 8 - 6.32 = 1.68 cm
                  <br />
                  <br />
                  Since XC &lt; QX, point X lies <strong>closer to C</strong>.
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
            <li>To find a shorter side: rearrange to a² = c² - b² or b² = c² - a²</li>
            <li>Always subtract from the hypotenuse² (the larger value)</li>
            <li>The unknown leg must be shorter than the hypotenuse - use this to check</li>
            <li>For complex problems, break them down into smaller steps</li>
            <li>Find intermediate values first before tackling the main question</li>
            <li>Draw diagrams to help visualize the problem</li>
            <li>You may need to apply Pythagoras' Theorem multiple times in one problem</li>
            <li>Always check that your final answer makes sense in context</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
