import { useState } from 'react';
import RightTriangleVisualizer from '../../../../components/math-tools/RightTriangleVisualizer';
import GeneralTriangleVisualizer from '../../../../components/math-tools/GeneralTriangleVisualizer';

export default function ConverseTheorem() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showEquivalence, setShowEquivalence] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 dark:from-violet-600 dark:to-purple-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Converse of Pythagoras' Theorem</h1>
        <p className="mt-2 text-violet-100">
          Learn how to test if a triangle is right-angled using side lengths
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Understanding the Converse */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Understanding the Converse
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We've learned that Pythagoras' Theorem tells us about the relationship between the sides of a right-angled triangle. But what about the reverse? Can we use side lengths to determine if a triangle has a right angle?
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                What is a Converse Statement?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A <strong>converse</strong> statement switches the "if" and "then" parts of the original statement.
              </p>
              <div className="space-y-4 mt-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Original Pythagoras' Theorem:</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    <strong>IF</strong> a triangle is right-angled, <strong>THEN</strong> a² + b² = c²
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="text-3xl text-blue-600 dark:text-blue-400">⇅</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Converse of Pythagoras' Theorem:</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    <strong>IF</strong> a² + b² = c², <strong>THEN</strong> the triangle is right-angled
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 text-white p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3">The Converse of Pythagoras' Theorem</h3>
              <p className="mb-4 text-purple-100">
                In a triangle ABC, if the square of the length of the longest side is equal to the sum of the squares of the lengths of the other two sides, then the triangle is a right-angled triangle.
              </p>
              <div className="bg-white/10 p-4 rounded backdrop-blur-sm">
                <p className="text-center text-xl font-bold mb-2">
                  If a² + b² = c²
                </p>
                <p className="text-center text-lg">
                  then the angle opposite the longest side (c) is 90°
                </p>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                💡 Understanding Equivalence
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                When Pythagoras' Theorem and its converse are both true, we say the two statements are <strong>equivalent</strong>. This means:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Triangle is right-angled ⇔ a² + b² = c²</li>
                <li>One statement is true if and only if the other is true</li>
                <li>They describe the same mathematical reality from different angles</li>
              </ul>
              <button
                onClick={() => setShowEquivalence(!showEquivalence)}
                className="mt-3 px-4 py-2 bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 text-white rounded transition-colors"
              >
                {showEquivalence ? 'Hide' : 'Show'} Example
              </button>
              {showEquivalence && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-amber-300 dark:border-amber-700">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Example of Equivalence:</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Statement 1: "A triangle is equilateral"
                    <br />
                    Statement 2: "A triangle has three equal sides"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    These are equivalent because:
                    <br />
                    • If a triangle is equilateral, then it has three equal sides (true)
                    <br />
                    • If a triangle has three equal sides, then it is equilateral (also true)
                    <br />
                    They mean exactly the same thing, just stated differently!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 1: Understanding the Difference
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Explain the difference between Pythagoras' Theorem and its converse.
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Pythagoras' Theorem:</strong>
                <br />
                • <em>Starts with</em> a right-angled triangle
                <br />
                • <em>Tells us</em> that a² + b² = c² must be true
                <br />
                • <em>Used for</em> finding unknown side lengths
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Converse of Pythagoras' Theorem:</strong>
                <br />
                • <em>Starts with</em> three side lengths
                <br />
                • <em>Tells us</em> if a² + b² = c², then the triangle is right-angled
                <br />
                • <em>Used for</em> testing whether a triangle has a right angle
              </p>

              <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded mt-3">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Key difference:</strong> The original theorem works forward (right angle → side relationship), while the converse works backward (side relationship → right angle).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Testing for Right-Angled Triangles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Testing for Right-Angled Triangles
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we're given the three side lengths of a triangle, we can use the converse to determine if it's a right-angled triangle.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                📋 Step-by-Step Method
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>Identify</strong> the longest side (this should be c, the potential hypotenuse)</li>
                <li><strong>Square</strong> all three side lengths</li>
                <li><strong>Calculate</strong> the sum of the squares of the two shorter sides (a² + b²)</li>
                <li><strong>Compare</strong> with the square of the longest side (c²)</li>
                <li><strong>Conclude</strong>:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>If a² + b² = c², the triangle IS right-angled</li>
                    <li>If a² + b² ≠ c², the triangle is NOT right-angled</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                ⚠️ Critical: Identify the Longest Side First!
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The longest side MUST be treated as the potential hypotenuse (c). If you use a shorter side as c, your test will give incorrect results.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Example:</strong> Given sides 13, 12, and 5
                  <br />
                  ✓ Correct: Test if 12² + 5² = 13² (using 13 as c)
                  <br />
                  ✗ Wrong: Test if 13² + 5² = 12² (using 12 as c)
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2 - From PDF */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 2: Testing a Triangle (From Your Textbook)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Determine if each of the following triangles is a right-angled triangle. For each right-angled triangle, state which angle is the right angle.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              (a) △ABC, given that AB = 39 cm, BC = 15 cm and AC = 36 cm
              <br />
              (b) △PQR, given that PQ = 28 m, QR = 20 m and PR = 19 m
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="text-center">
                <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Triangle (a)</p>
                <RightTriangleVisualizer
                  angle={null}
                  hypotenuse="AB = 39 cm"
                  opposite="BC = 15 cm"
                  adjacent="AC = 36 cm"
                  highlightSide="none"
                  showRightAngle={true}
                  caption="Testing: 15² + 36² = 39²?"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Triangle (b)</p>
                <GeneralTriangleVisualizer
                  sideA="PQ = 28 m"
                  sideB="QR = 20 m"
                  sideC="PR = 19 m"
                  showAngles={false}
                  caption="Testing: 20² + 19² = 28²? (NOT right-angled)"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Part (a):</strong> AB is the longest side of △ABC
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Check if AB² = BC² + AC²:
                <br />
                AB² = 39² = 1521
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                BC² + AC² = 15² + 36²
                <br />
                = 225 + 1296
                <br />
                = 1521
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Since AB² = BC² + AC², then by the converse of Pythagoras' Theorem, △ABC <strong>is</strong> a right-angled triangle where <strong>∠C = 90°</strong>.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Part (b):</strong> PQ is the longest side of △PQR
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Check if PQ² = QR² + PR²:
                <br />
                PQ² = 28² = 784
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                QR² + PR² = 20² + 19²
                <br />
                = 400 + 361
                <br />
                = 761
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                Since PQ² ≠ QR² + PR² (784 ≠ 761), △PQR is <strong>not</strong> a right-angled triangle.
              </p>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Is It Right-Angled?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A triangle has sides of length 7 cm, 24 cm, and 25 cm.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) Is this triangle right-angled? Show your working.
              <br />
              (b) If yes, which angle is the right angle?
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
                  (a) The longest side is 25 cm, so we test if 7² + 24² = 25²
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  7² + 24² = 49 + 576 = 625
                  <br />
                  25² = 625
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Since 7² + 24² = 25², the triangle <strong>IS</strong> right-angled.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  (b) The right angle is opposite the longest side (25 cm). If we label the vertices so that the side of 25 cm is opposite vertex C, then <strong>∠C = 90°</strong>.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  💡 This is the 7-24-25 Pythagorean triple!
                </p>
              </div>
            )}
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Multiple Triangles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Which of the following triangles are right-angled? For those that are, state the right angle.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) Sides: 9 m, 12 m, 15 m
              <br />
              (b) Sides: 10 cm, 11 cm, 12 cm
              <br />
              (c) Sides: 20 mm, 21 mm, 29 mm
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
                  (a) Longest side = 15 m
                  <br />
                  9² + 12² = 81 + 144 = 225
                  <br />
                  15² = 225
                  <br />
                  ✓ YES, right-angled (angle opposite 15 m side is 90°)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  (b) Longest side = 12 cm
                  <br />
                  10² + 11² = 100 + 121 = 221
                  <br />
                  12² = 144
                  <br />
                  ✗ NO, not right-angled (221 ≠ 144)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  (c) Longest side = 29 mm
                  <br />
                  20² + 21² = 400 + 441 = 841
                  <br />
                  29² = 841
                  <br />
                  ✓ YES, right-angled (angle opposite 29 mm side is 90°)
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Applications of the Converse */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Applications of the Converse
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The converse of Pythagoras' Theorem has important practical applications, especially in construction and carpentry where checking for right angles is essential.
            </p>

            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-teal-800 dark:text-teal-300 mb-2">
                🏗️ Real-World Uses
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>Construction:</strong> Checking if walls meet at right angles</li>
                <li><strong>Carpentry:</strong> Verifying square corners in furniture</li>
                <li><strong>Surveying:</strong> Confirming property boundaries are perpendicular</li>
                <li><strong>Ancient Egypt:</strong> "Rope stretchers" used the 3-4-5 triangle to create perfect right angles for pyramid construction</li>
                <li><strong>Quality Control:</strong> Testing if manufactured components have correct angles</li>
              </ul>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                📏 The 3-4-5 Method in Construction
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Builders often use the 3-4-5 triangle (or multiples like 6-8-10 or 9-12-15) to check for right angles:
              </p>

              <div className="my-4">
                <RightTriangleVisualizer
                  angle={null}
                  hypotenuse="5 units"
                  opposite="3 units"
                  adjacent="4 units"
                  highlightSide="hypotenuse"
                  showRightAngle={true}
                  showAngleMark={false}
                  caption="The famous 3-4-5 triangle: If diagonal = 5, then corner = 90°"
                />
              </div>

              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Measure 3 units along one line</li>
                <li>Measure 4 units along the other line</li>
                <li>Measure the diagonal distance</li>
                <li>If the diagonal is exactly 5 units, the corner is a perfect right angle</li>
              </ol>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                This works because 3² + 4² = 9 + 16 = 25 = 5² ✓
              </p>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 3: Checking a Corner
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A carpenter is building a rectangular frame. She measures 90 cm along one edge, 120 cm along the perpendicular edge, and finds that the diagonal is 150 cm. Is the corner truly a right angle?
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                We need to check if this forms a right-angled triangle using the converse.
                <br />
                Sides: 90 cm, 120 cm, and diagonal 150 cm
                <br />
                Longest side: 150 cm
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Test: Does 90² + 120² = 150²?
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                90² + 120² = 8100 + 14400 = 22500
                <br />
                150² = 22500
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Since 90² + 120² = 150², the triangle is right-angled.
              </p>

              <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded mt-3">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Answer:</strong> Yes, the corner is a true right angle. The frame is perfectly square.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  💡 This is the 90-120-150 triangle, a multiple of 3-4-5 (× 30)!
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Building a Wall
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A builder wants to check if a wall meets the floor at a right angle. He marks a point 40 cm up the wall and another point 30 cm from the base of the wall along the floor. He then measures the diagonal distance between these two points and gets 50 cm.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Is the wall perpendicular to the floor? Justify your answer mathematically.
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
                  We have a triangle with sides 30 cm, 40 cm, and 50 cm.
                  <br />
                  Longest side = 50 cm
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Test if 30² + 40² = 50²:
                  <br />
                  30² + 40² = 900 + 1600 = 2500
                  <br />
                  50² = 2500
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Since 30² + 40² = 50², by the converse of Pythagoras' Theorem, the triangle is right-angled.
                  <br />
                  <br />
                  <strong>Answer:</strong> Yes, the wall is perpendicular to the floor (they meet at 90°).
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  💡 This is the famous 3-4-5 triangle scaled by 10!
                </p>
              </div>
            )}
          </div>

          {/* Practice Problem 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Ancient Egyptian Surveyors
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Ancient Egyptian "rope stretchers" used a rope with 12 evenly-spaced knots (forming 12 equal segments). They would form a triangle with sides of 3, 4, and 5 segments to create a right angle.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) Verify mathematically that this creates a right angle.
              <br />
              (b) If each segment was 1 cubit (about 52 cm), what were the actual measurements of the triangle?
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
                  (a) Triangle with sides in ratio 3:4:5
                  <br />
                  Test: 3² + 4² = 5²?
                  <br />
                  9 + 16 = 25 ✓
                  <br />
                  Yes, this creates a right angle by the converse of Pythagoras' Theorem.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  (b) With each segment = 52 cm:
                  <br />
                  • Side 1: 3 × 52 = 156 cm
                  <br />
                  • Side 2: 4 × 52 = 208 cm
                  <br />
                  • Hypotenuse: 5 × 52 = 260 cm
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                  🏛️ Historical note: This technique was used to ensure the corners of temples and pyramids were perfectly square - a testament to the practical power of mathematics!
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
            <li>The converse reverses the original theorem: if a² + b² = c², then the triangle is right-angled</li>
            <li>Pythagoras' Theorem and its converse are equivalent statements</li>
            <li>To test if a triangle is right-angled: identify the longest side, then check if (shorter)² + (shorter)² = (longest)²</li>
            <li>Always use the longest side as c in your calculation</li>
            <li>The right angle is opposite the longest side (the hypotenuse)</li>
            <li>The 3-4-5 triangle (and its multiples) is commonly used in construction to create right angles</li>
            <li>The converse has practical applications in construction, carpentry, and quality control</li>
            <li>If a² + b² ≠ c², the triangle is not right-angled</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
