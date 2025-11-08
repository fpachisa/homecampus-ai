import { useState } from 'react';
import RightTriangleVisualizer from '../../../../components/math-tools/RightTriangleVisualizer';
import SquareVisualizer from '../../../../components/math-tools/SquareVisualizer';

export default function PythagorasIntroduction() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showProof, setShowProof] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Introduction to Pythagoras' Theorem</h1>
        <p className="mt-2 text-purple-100">
          Discover one of mathematics' most beautiful and useful relationships
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Understanding Right-Angled Triangles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Understanding Right-Angled Triangles
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>right-angled triangle</strong> is a special triangle that has one angle measuring exactly 90° (a right angle). This right angle is what makes Pythagoras' Theorem work!
            </p>

            {/* Visual: Basic Right Triangle */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Visual: Right-Angled Triangle ABC
              </h3>
              <RightTriangleVisualizer
                angle={35}
                hypotenuse="AB"
                opposite="BC"
                adjacent="AC"
                highlightSide="none"
                showAngleMark={true}
                showRightAngle={true}
                showSideTypeLabels={false}
                caption="Triangle ABC with right angle at C"
              />
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 text-center italic">
                Notice the small square at C showing the 90° angle
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Identifying the Hypotenuse
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The <strong>hypotenuse</strong> is the longest side of a right-angled triangle. It is always the side opposite the right angle.
              </p>

              {/* Visual: Highlighting hypotenuse */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <RightTriangleVisualizer
                  angle={40}
                  hypotenuse="13"
                  opposite="5"
                  adjacent="12"
                  highlightSide="hypotenuse"
                  showAngleMark={true}
                  showRightAngle={true}
                  showSideTypeLabels={true}
                  caption="The hypotenuse (13) is highlighted in red - it's opposite the right angle"
                />
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                Why is the hypotenuse the longest side?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In any triangle, the longest side is opposite the largest angle. Since 90° is the largest angle that can exist in a right-angled triangle, the side opposite to it must be the longest.
              </p>

              {/* Visual: Comparing triangles with different angles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-semibold text-center">
                    3-4-5 Triangle
                  </p>
                  <RightTriangleVisualizer
                    angle={null}
                    hypotenuse="5"
                    opposite="3"
                    adjacent="4"
                    highlightSide="hypotenuse"
                    showAngleMark={false}
                    showRightAngle={true}
                    showSideTypeLabels={false}
                    caption="Hypotenuse (5) > opposite (3) and adjacent (4)"
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-semibold text-center">
                    5-12-13 Triangle
                  </p>
                  <RightTriangleVisualizer
                    angle={null}
                    hypotenuse="13"
                    opposite="5"
                    adjacent="12"
                    highlightSide="hypotenuse"
                    showAngleMark={false}
                    showRightAngle={true}
                    showSideTypeLabels={false}
                    caption="Hypotenuse (13) > opposite (5) and adjacent (12)"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Identify the Hypotenuse
            </h3>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <RightTriangleVisualizer
                angle={null}
                hypotenuse="PR (13 cm)"
                opposite="PQ (5 cm)"
                adjacent="QR (12 cm)"
                highlightSide="none"
                showAngleMark={false}
                showRightAngle={true}
                showSideTypeLabels={false}
                caption="Triangle PQR with angle Q = 90°"
              />
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) Which side is the hypotenuse?
              <br />
              (b) Why is PR longer than PQ and QR?
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
                  (a) The hypotenuse is <strong>PR</strong> (13 cm) because it is the side opposite the right angle at Q.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  (b) PR is longer because it is opposite the largest angle (90°). In any triangle, the longest side is always opposite the largest angle.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <RightTriangleVisualizer
                    angle={null}
                    hypotenuse="PR (13 cm)"
                    opposite="PQ (5 cm)"
                    adjacent="QR (12 cm)"
                    highlightSide="hypotenuse"
                    showAngleMark={false}
                    showRightAngle={true}
                    showSideTypeLabels={false}
                    caption="PR is highlighted - it's the longest side!"
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Discovering the Relationship */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Discovering the Relationship
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Let's investigate a fascinating pattern that exists in every right-angled triangle. We'll measure the sides and then square each measurement to see what emerges.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                Investigation: The 3-4-5 Triangle
              </h3>

              {/* Visual: 3-4-5 triangle */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <RightTriangleVisualizer
                  angle={null}
                  hypotenuse="5"
                  opposite="3"
                  adjacent="4"
                  highlightSide="none"
                  showAngleMark={false}
                  showRightAngle={true}
                  showSideTypeLabels={false}
                  caption="A right triangle with sides 3, 4, and 5"
                />
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Let's square each side:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
                <li>• 3² = 9</li>
                <li>• 4² = 16</li>
                <li>• 5² = 25</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                Notice: 9 + 16 = 25, so 3² + 4² = 5²!
              </p>
            </div>

            {/* Visual Proof with Squares */}
            <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-pink-800 dark:text-pink-300 mb-2">
                🎨 Visualizing with Actual Squares
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We can draw actual squares on each side of the triangle to see this relationship visually!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Square on side a (3)
                  </p>
                  <SquareVisualizer
                    side="3"
                    highlightMode="area"
                    showFormula={true}
                    showGrid={true}
                    gridSize={3}
                    caption="Area = 3² = 9 square units"
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Square on side b (4)
                  </p>
                  <SquareVisualizer
                    side="4"
                    highlightMode="area"
                    showFormula={true}
                    showGrid={true}
                    gridSize={4}
                    caption="Area = 4² = 16 square units"
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Square on hypotenuse c (5)
                  </p>
                  <SquareVisualizer
                    side="5"
                    highlightMode="area"
                    showFormula={true}
                    showGrid={true}
                    gridSize={5}
                    caption="Area = 5² = 25 square units"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 p-4 rounded">
                <p className="text-center text-lg font-bold text-gray-800 dark:text-gray-100">
                  9 + 16 = 25
                </p>
                <p className="text-center text-gray-700 dark:text-gray-300 mt-2">
                  The area of the square on the hypotenuse equals the sum of the areas of the squares on the other two sides!
                </p>
              </div>

              <button
                onClick={() => setShowProof(!showProof)}
                className="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700 text-white rounded transition-colors"
              >
                {showProof ? 'Hide' : 'Show'} More Examples
              </button>

              {showProof && (
                <div className="mt-4 space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                      Example: 5-12-13 Triangle
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded mb-3">
                      <RightTriangleVisualizer
                        angle={null}
                        hypotenuse="13"
                        opposite="5"
                        adjacent="12"
                        highlightSide="none"
                        showAngleMark={false}
                        showRightAngle={true}
                        showSideTypeLabels={false}
                      />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      5² + 12² = 25 + 144 = 169 = 13² ✓
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                      Example: 8-15-17 Triangle
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded mb-3">
                      <RightTriangleVisualizer
                        angle={null}
                        hypotenuse="17"
                        opposite="8"
                        adjacent="15"
                        highlightSide="none"
                        showAngleMark={false}
                        showRightAngle={true}
                        showSideTypeLabels={false}
                      />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      8² + 15² = 64 + 225 = 289 = 17² ✓
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Complete the Pattern
            </h3>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <RightTriangleVisualizer
                angle={null}
                hypotenuse="17"
                opposite="8"
                adjacent="15"
                highlightSide="none"
                showAngleMark={false}
                showRightAngle={true}
                showSideTypeLabels={false}
                caption="Triangle with sides 8 cm, 15 cm, and 17 cm"
              />
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) Which side is the hypotenuse?
              <br />
              (b) Calculate 8² + 15²
              <br />
              (c) Calculate 17²
              <br />
              (d) Does the pattern hold true?
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
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded mb-3">
                  <RightTriangleVisualizer
                    angle={null}
                    hypotenuse="17"
                    opposite="8"
                    adjacent="15"
                    highlightSide="hypotenuse"
                    showAngleMark={false}
                    showRightAngle={true}
                    showSideTypeLabels={false}
                    caption="The hypotenuse is 17 cm (highlighted)"
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (a) The hypotenuse is <strong>17 cm</strong> (the longest side)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (b) 8² + 15² = 64 + 225 = <strong>289</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (c) 17² = <strong>289</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  (d) Yes! The pattern holds: 8² + 15² = 17², or 64 + 225 = 289 ✓
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: The Theorem Statement */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Theorem Statement
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Based on our investigation, we can now state Pythagoras' Theorem formally.
            </p>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3">Pythagoras' Theorem</h3>
              <p className="mb-4 text-blue-100">
                In a right-angled triangle, the square of the length of the hypotenuse is equal to the sum of the squares of the lengths of the other two sides.
              </p>
              <div className="bg-white/10 p-4 rounded backdrop-blur-sm">
                <p className="text-center text-2xl font-bold mb-2">
                  a² + b² = c²
                </p>
                <p className="text-center text-sm text-blue-100">
                  where c is the hypotenuse, and a and b are the other two sides
                </p>
              </div>
            </div>

            {/* Visual: Labeled triangle showing formula */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
                Visual Representation of the Formula
              </h3>
              <RightTriangleVisualizer
                angle={37}
                angleLabel="θ"
                hypotenuse="c"
                opposite="a"
                adjacent="b"
                highlightSide="none"
                showAngleMark={true}
                showRightAngle={true}
                showSideTypeLabels={false}
                caption="General form: a² + b² = c²"
              />
              <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-4">
                The formula works for any right-angled triangle, regardless of size!
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                ⚠️ Important: When Can We Use It?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Pythagoras' Theorem ONLY works for right-angled triangles!
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>✓ Can use:</strong> Triangle with one 90° angle</li>
                <li><strong>✗ Cannot use:</strong> Triangle with all acute angles</li>
                <li><strong>✗ Cannot use:</strong> Triangle with one obtuse angle</li>
                <li><strong>✗ Cannot use:</strong> Any other shape</li>
              </ul>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Can We Use Pythagoras' Theorem?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              For each triangle shown, state whether Pythagoras' Theorem can be applied.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 text-center">
                  Triangle A (angles: 90°, 45°, 45°)
                </p>
                <RightTriangleVisualizer
                  angle={45}
                  hypotenuse="c"
                  opposite="a"
                  adjacent="a"
                  highlightSide="none"
                  showAngleMark={true}
                  showRightAngle={true}
                  showSideTypeLabels={false}
                />
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 text-center">
                  Triangle B (sides: 9, 12, 15 with right angle)
                </p>
                <RightTriangleVisualizer
                  angle={null}
                  hypotenuse="15"
                  opposite="9"
                  adjacent="12"
                  highlightSide="none"
                  showAngleMark={false}
                  showRightAngle={true}
                  showSideTypeLabels={false}
                />
              </div>
            </div>

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
                  <strong>Triangle A:</strong> YES ✓ - This triangle has a right angle (90°), so Pythagoras' Theorem applies.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Triangle B:</strong> YES ✓ - The triangle has a right angle, so we can use Pythagoras' Theorem. In fact, 9² + 12² = 81 + 144 = 225 = 15² ✓
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
            <li>A right-angled triangle has one angle that measures exactly 90°</li>
            <li>The hypotenuse is the longest side and is always opposite the right angle</li>
            <li>Pythagoras' Theorem states: a² + b² = c² (where c is the hypotenuse)</li>
            <li>The theorem ONLY applies to right-angled triangles - never to other shapes</li>
            <li>The relationship can be visualized as: the sum of the areas of squares on the two shorter sides equals the area of the square on the hypotenuse</li>
            <li>The formula can be written in different ways depending on how the triangle is labeled</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
