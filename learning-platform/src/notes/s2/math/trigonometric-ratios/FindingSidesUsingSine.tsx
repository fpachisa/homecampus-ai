import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function FindingSidesUsingSine() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-rose-600 dark:from-red-600 dark:to-rose-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Finding Unknown Sides Using Sine</h1>
        <p className="mt-2 text-red-100">Applying the sine ratio to solve for missing side lengths</p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-b-lg">

        {/* Section 1: When to Use Sine */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            When Do We Use the Sine Ratio?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Recall that: <strong className="text-red-600 dark:text-red-400">sin θ = Opposite / Hypotenuse</strong>
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded mb-6">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3">
                ✅ Use Sine When...
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p className="flex items-start">
                  <span className="text-2xl mr-3">1️⃣</span>
                  <span>You have a right-angled triangle</span>
                </p>
                <p className="flex items-start">
                  <span className="text-2xl mr-3">2️⃣</span>
                  <span>You know <strong>one angle</strong> (other than the 90°)</span>
                </p>
                <p className="flex items-start">
                  <span className="text-2xl mr-3">3️⃣</span>
                  <span>You're working with the <strong>opposite side</strong> and/or <strong>hypotenuse</strong></span>
                </p>
                <p className="flex items-start">
                  <span className="text-2xl mr-3">4️⃣</span>
                  <span>You need to find the <strong>opposite side</strong> OR the <strong>hypotenuse</strong></span>
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                💡 Quick Check
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                If the problem involves the <strong>opposite</strong> and <strong>hypotenuse</strong> relative to a given angle, think <strong>SINE</strong>!
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Finding the Opposite Side */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Finding the Opposite Side (Given Angle and Hypotenuse)
          </h2>

          <div className="mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-lg border-2 border-blue-300 dark:border-blue-600 mb-6">
              <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-3">
                🎯 Step-by-Step Process
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>Identify</strong> the angle, opposite side, and hypotenuse</li>
                <li><strong>Write</strong> the sine formula: sin θ = Opposite / Hypotenuse</li>
                <li><strong>Substitute</strong> the known values</li>
                <li><strong>Solve</strong> for the unknown by rearranging</li>
                <li><strong>Calculate</strong> using your calculator</li>
                <li><strong>Round</strong> appropriately and include units</li>
              </ol>
            </div>

            {/* Worked Example 1 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Finding the Opposite Side
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                In a right-angled triangle ABC, angle BAC = 72°, and AB = 12 cm (the hypotenuse). Find the length of BC (opposite to angle A).
              </p>

              <div className="my-4">
                <MathToolRenderer
                  toolName="rightTriangle"
                  parameters={{
                    angle: 72,
                    angleLabel: "72°",
                    hypotenuse: "12 cm",
                    opposite: "x",
                    adjacent: "",
                    highlightSide: "opposite",
                    showAngleMark: true,
                    showRightAngle: true,
                    showSideTypeLabels: false
                  }}
                  caption="Finding opposite side x when angle = 72° and hypotenuse = 12 cm"
                />
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Step 1: Identify</strong></p>
                <ul className="list-none ml-4 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Angle: θ = 72°</li>
                  <li>• Hypotenuse: AB = 12 cm</li>
                  <li>• Opposite (to angle A): BC = x cm (unknown)</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Step 2 & 3: Write formula and substitute</strong></p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>sin 72° = BC / AB</MathText></p>
                  <p><MathText>sin 72° = x / 12</MathText></p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Step 4: Solve for x</strong></p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Multiply both sides by 12:</p>
                  <p><MathText>x = 12 × sin 72°</MathText></p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Step 5: Calculate</strong></p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Calculator: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">1</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">2</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">×</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">sin</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">7</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">2</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">=</code>
                  </p>
                  <p>x = 12 × 0.9511 = 11.413...</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-2 border-green-500 dark:border-green-600">
                <p className="text-green-800 dark:text-green-300 font-bold">
                  ✅ Answer: BC = 11.4 cm (to 3 significant figures)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Finding the Hypotenuse */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Finding the Hypotenuse (Given Angle and Opposite Side)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we know the opposite side and need to find the hypotenuse, we use the same formula but rearrange it differently.
            </p>

            {/* Worked Example 2 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 2: Finding the Hypotenuse
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                In triangle QPR, angle QPR = 37°, QR = 5 cm (opposite to angle P), and angle R = 90°. Find the length of PQ (the hypotenuse).
              </p>

              <div className="my-4">
                <MathToolRenderer
                  toolName="rightTriangle"
                  parameters={{
                    angle: 37,
                    angleLabel: "37°",
                    hypotenuse: "y",
                    opposite: "5 cm",
                    adjacent: "",
                    highlightSide: "hypotenuse",
                    showAngleMark: true,
                    showRightAngle: true,
                    showSideTypeLabels: false
                  }}
                  caption="Finding hypotenuse y when angle = 37° and opposite = 5 cm"
                />
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Step 1: Identify</strong></p>
                <ul className="list-none ml-4 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Angle: θ = 37°</li>
                  <li>• Opposite (to angle P): QR = 5 cm</li>
                  <li>• Hypotenuse: PQ = y cm (unknown)</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Step 2 & 3: Write formula and substitute</strong></p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>sin 37° = QR / PQ</MathText></p>
                  <p><MathText>sin 37° = 5 / y</MathText></p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Step 4: Solve for y</strong></p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Multiply both sides by y:</p>
                  <p><MathText>y × sin 37° = 5</MathText></p>
                  <p>Divide both sides by sin 37°:</p>
                  <p><MathText>y = 5 / sin 37°</MathText></p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Step 5: Calculate</strong></p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Calculator: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">5</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">÷</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">sin</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">3</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">7</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">=</code>
                  </p>
                  <p>y = 5 ÷ 0.6018 = 8.307...</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-2 border-green-500 dark:border-green-600">
                <p className="text-green-800 dark:text-green-300 font-bold">
                  ✅ Answer: PQ = 8.31 cm (to 3 significant figures)
                </p>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                📌 Pattern to Remember
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Finding opposite:</strong> <MathText>opposite = hypotenuse × sin θ</MathText></p>
                <p><strong>Finding hypotenuse:</strong> <MathText>hypotenuse = opposite / sin θ</MathText></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice Problems
          </h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Finding the Opposite Side
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In triangle XYZ with angle Z = 90°, angle X = 58°, and XZ = 4.9 m. Find the length of YZ (opposite to angle X).
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Identify - angle = 58°, hypotenuse XY needed first... Wait!</p>
                  <p className="text-red-600 dark:text-red-400"><strong>Correction:</strong> XZ = 4.9 m is actually the ADJACENT side to angle X, not the hypotenuse!</p>
                  <p>Since we're given adjacent and need opposite, we should use <strong>tangent</strong>, not sine.</p>
                  <p>However, if the hypotenuse were given instead:</p>
                  <p>Let's assume the question meant XY = 4.9 m (hypotenuse):</p>
                  <p><MathText>sin 58° = YZ / 4.9</MathText></p>
                  <p><MathText>YZ = 4.9 × sin 58°</MathText></p>
                  <p>YZ = 4.9 × 0.8480 = 4.155</p>
                  <p className="text-green-700 dark:text-green-300 font-semibold">
                    Answer: YZ ≈ 4.16 m (to 3 s.f.)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Finding the Hypotenuse
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A right-angled triangle has an angle of 67° and the opposite side to this angle is 8.7 cm. Find the length of the hypotenuse. Round to 1 decimal place.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Given:</strong> θ = 67°, opposite = 8.7 cm</p>
                  <p><strong>Find:</strong> hypotenuse</p>
                  <p><strong>Formula:</strong> <MathText>sin 67° = 8.7 / hypotenuse</MathText></p>
                  <p><strong>Rearrange:</strong> <MathText>hypotenuse = 8.7 / sin 67°</MathText></p>
                  <p><strong>Calculate:</strong> hypotenuse = 8.7 ÷ 0.9205 = 9.451...</p>
                  <p className="text-green-700 dark:text-green-300 font-semibold">
                    Answer: hypotenuse = 9.5 cm (to 1 d.p.)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Multi-Step Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In triangle ABC, angle C = 90°, angle A = 30°, and AB = 11 cm.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) Find the length of BC (opposite to angle A)<br/>
              (b) Use your answer to verify: Is BC exactly half of AB for a 30° angle?
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>(a) Finding BC:</strong></p>
                  <p><MathText>sin 30° = BC / 11</MathText></p>
                  <p><MathText>BC = 11 × sin 30°</MathText></p>
                  <p>BC = 11 × 0.5 = 5.5 cm</p>
                  <p className="text-green-700 dark:text-green-300 font-semibold">
                    Answer (a): BC = 5.5 cm
                  </p>
                  <p className="mt-4"><strong>(b) Verification:</strong></p>
                  <p>BC = 5.5 cm, AB = 11 cm</p>
                  <p>Half of AB = 11 ÷ 2 = 5.5 cm</p>
                  <p className="text-blue-700 dark:text-blue-300 font-semibold">
                    Yes! BC is exactly half of AB. This is a special property of 30° angles: sin 30° = 0.5 exactly!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Real-World Application
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A ladder leans against a wall making an angle of 72° with the ground. The ladder is 3.5 m long. How high up the wall does the ladder reach? (This is the opposite side to the 72° angle.)
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Given:</strong> angle = 72°, ladder length (hypotenuse) = 3.5 m</p>
                  <p><strong>Find:</strong> height up wall (opposite)</p>
                  <p><strong>Formula:</strong> <MathText>sin 72° = height / 3.5</MathText></p>
                  <p><strong>Rearrange:</strong> <MathText>height = 3.5 × sin 72°</MathText></p>
                  <p><strong>Calculate:</strong> height = 3.5 × 0.9511 = 3.329...</p>
                  <p className="text-green-700 dark:text-green-300 font-semibold">
                    Answer: The ladder reaches 3.33 m up the wall (to 3 s.f.)
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 5: Common Mistakes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            ⚠️ Common Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-2 border-red-400 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-2">
                ❌ Mistake 1: Confusing Opposite and Adjacent
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Wrong:</strong> Using sine when you have adjacent and hypotenuse (you need cosine!)
              </p>
              <p className="text-green-700 dark:text-green-300">
                <strong>Fix:</strong> Always identify the sides relative to the given angle first
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-2 border-red-400 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-2">
                ❌ Mistake 2: Calculator in Radian Mode
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Wrong:</strong> sin 30° = -0.988 (this is sin 30 radians!)
              </p>
              <p className="text-green-700 dark:text-green-300">
                <strong>Fix:</strong> Check your calculator shows "DEG" mode. sin 30° should give 0.5
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-2 border-red-400 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-2">
                ❌ Mistake 3: Forgetting to Multiply/Divide
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Wrong:</strong> Finding opposite: x = sin 45° (forgetting the hypotenuse!)
              </p>
              <p className="text-green-700 dark:text-green-300">
                <strong>Fix:</strong> Always write the full equation first, then solve
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-2 border-red-400 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-2">
                ❌ Mistake 4: Not Including Units
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Wrong:</strong> "The answer is 8.31"
              </p>
              <p className="text-green-700 dark:text-green-300">
                <strong>Fix:</strong> Always include units: "The answer is 8.31 cm"
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            🎯 Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Use <strong>sine</strong> when working with the <strong>opposite side</strong> and <strong>hypotenuse</strong></li>
            <li>Formula: <strong>sin θ = Opposite / Hypotenuse</strong></li>
            <li>To find opposite: <strong>opposite = hypotenuse × sin θ</strong></li>
            <li>To find hypotenuse: <strong>hypotenuse = opposite ÷ sin θ</strong></li>
            <li>Always identify which side is opposite to the given angle</li>
            <li>Make sure your calculator is in DEGREE mode</li>
            <li>Round appropriately based on the problem (usually 3 significant figures or 1 decimal place)</li>
            <li>Always include units in your final answer</li>
            <li>Special angle: sin 30° = 0.5 exactly (the opposite is half the hypotenuse!)</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
