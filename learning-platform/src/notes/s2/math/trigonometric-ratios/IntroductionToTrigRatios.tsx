import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function IntroductionToTrigRatios() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Introduction to Trigonometric Ratios</h1>
        <p className="mt-2 text-purple-100">Discovering the relationship between angles and sides in right-angled triangles</p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-b-lg">

        {/* Section 1: What is Trigonometry? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What is Trigonometry?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Trigonometry</strong> comes from Greek words meaning "triangle measurement." It's a powerful branch of mathematics that helps us find unknown heights and distances indirectly.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Real-World Applications
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><strong>Surveyors</strong> measure land and construction angles</li>
                <li><strong>Architects</strong> design buildings with precise angles</li>
                <li><strong>Engineers</strong> calculate heights of towers and bridges</li>
                <li><strong>Navigators</strong> determine positions using angles</li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              In this chapter, we focus on <strong>right-angled triangles</strong> and learn how the ratios between sides remain constant for a given angle.
            </p>
          </div>
        </section>

        {/* Section 2: Labeling Triangle Sides */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Identifying the Three Sides of a Right-Angled Triangle
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Every right-angled triangle has three sides with special names. These names change depending on which angle we're considering!
            </p>

            {/* Visual representation */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border-2 border-indigo-300 dark:border-indigo-600 mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-4 text-center">
                The Three Sides (with respect to angle θ)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-2 border-red-400 dark:border-red-600">
                  <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">Hypotenuse</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    • The <strong>longest side</strong><br/>
                    • Always opposite the right angle (90°)<br/>
                    • Never changes regardless of which angle you consider
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border-2 border-blue-400 dark:border-blue-600">
                  <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Opposite</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    • The side <strong>opposite</strong> to the angle θ<br/>
                    • Does NOT touch the angle<br/>
                    • Changes if you consider a different angle
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-2 border-green-400 dark:border-green-600">
                  <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Adjacent</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    • The side <strong>next to</strong> the angle θ<br/>
                    • Touches the angle θ<br/>
                    • NOT the hypotenuse<br/>
                    • Changes if you consider a different angle
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-3 rounded">
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  <strong>Key Point:</strong> The hypotenuse is always the same, but opposite and adjacent depend on which angle you're looking at!
                </p>
              </div>
            </div>

            {/* Worked Example */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Identifying Sides
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Consider a right-angled triangle with angle θ. Here's how we identify each side:
              </p>

              {/* Visual: Triangle with labeled sides */}
              <div className="my-6">
                <MathToolRenderer
                  toolName="rightTriangle"
                  parameters={{
                    angle: 35,
                    angleLabel: "θ",
                    hypotenuse: "AB",
                    opposite: "BC",
                    adjacent: "AC",
                    highlightSide: "none",
                    showAngleMark: true,
                    showRightAngle: true,
                    showSideTypeLabels: true
                  }}
                  caption="Right-angled triangle with all three sides labeled relative to angle θ"
                />
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong className="text-red-600 dark:text-red-400">Hypotenuse:</strong> AB (longest side, opposite the 90° angle)</li>
                <li><strong className="text-blue-600 dark:text-blue-400">Opposite (to angle θ):</strong> BC (doesn't touch angle θ)</li>
                <li><strong className="text-green-600 dark:text-green-400">Adjacent (to angle θ):</strong> AC (touches angle θ, but isn't the hypotenuse)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Discovery - Constant Ratios */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Amazing Discovery: Ratios Stay Constant!
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Here's the magical property that makes trigonometry work: <strong>For a given angle, the ratio between any two sides of a right-angled triangle is always the same</strong>, no matter how large or small the triangle is!
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Investigation: Why Do Ratios Stay Constant?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Imagine you have multiple right-angled triangles, all with the same angle of 30°. Even though the triangles are different sizes, something special happens:
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-purple-300 dark:border-purple-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">For angle A = 30°:</p>
                <ul className="list-none space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                  <li>• Triangle 1 (small): BC/AB = 2.16/4.33 = 0.50</li>
                  <li>• Triangle 2 (medium): BC/AB = 4.32/8.66 = 0.50</li>
                  <li>• Triangle 3 (large): BC/AB = 6.48/12.99 = 0.50</li>
                </ul>
                <p className="text-purple-700 dark:text-purple-300 font-semibold mt-3">
                  All three ratios equal 0.50! This works because the triangles are <strong>similar</strong> (same shape, different size).
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This constant ratio for each angle is what we call a <strong>trigonometric ratio</strong>. Since the ratio only depends on the angle (not the triangle size), we can create tables of these values!
            </p>
          </div>
        </section>

        {/* Section 4: The Three Trigonometric Ratios */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Three Primary Trigonometric Ratios
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We define three special ratios for any angle θ (theta) in a right-angled triangle:
            </p>

            {/* Sine */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-5 rounded-lg border-2 border-red-300 dark:border-red-600 mb-4">
              <h3 className="text-xl font-bold text-red-700 dark:text-red-300 mb-3">
                1. Sine (sin)
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-red-200 dark:border-red-700 mb-4">
                <p className="text-2xl font-mono text-center mb-2">
                  <MathText>sin θ = Opposite / Hypotenuse</MathText>
                </p>
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                  (Sine relates the opposite side to the hypotenuse)
                </p>
              </div>
              <MathToolRenderer
                toolName="rightTriangle"
                parameters={{
                  angle: 40,
                  angleLabel: "θ",
                  hypotenuse: "Hypotenuse",
                  opposite: "Opposite",
                  adjacent: "",
                  highlightSide: "opposite",
                  showAngleMark: true,
                  showRightAngle: true,
                  showSideTypeLabels: false
                }}
                caption="Sine uses the Opposite and Hypotenuse (highlighted in red)"
              />
            </div>

            {/* Cosine */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-lg border-2 border-blue-300 dark:border-blue-600 mb-4">
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">
                2. Cosine (cos)
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 mb-4">
                <p className="text-2xl font-mono text-center mb-2">
                  <MathText>cos θ = Adjacent / Hypotenuse</MathText>
                </p>
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                  (Cosine relates the adjacent side to the hypotenuse)
                </p>
              </div>
              <MathToolRenderer
                toolName="rightTriangle"
                parameters={{
                  angle: 40,
                  angleLabel: "θ",
                  hypotenuse: "Hypotenuse",
                  opposite: "",
                  adjacent: "Adjacent",
                  highlightSide: "adjacent",
                  showAngleMark: true,
                  showRightAngle: true,
                  showSideTypeLabels: false
                }}
                caption="Cosine uses the Adjacent and Hypotenuse (adjacent highlighted in red)"
              />
            </div>

            {/* Tangent */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-lg border-2 border-green-300 dark:border-green-600 mb-4">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-3">
                3. Tangent (tan)
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-200 dark:border-green-700 mb-4">
                <p className="text-2xl font-mono text-center mb-2">
                  <MathText>tan θ = Opposite / Adjacent</MathText>
                </p>
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                  (Tangent relates the opposite side to the adjacent side)
                </p>
              </div>
              <MathToolRenderer
                toolName="rightTriangle"
                parameters={{
                  angle: 40,
                  angleLabel: "θ",
                  hypotenuse: "",
                  opposite: "Opposite",
                  adjacent: "Adjacent",
                  highlightSide: "opposite",
                  showAngleMark: true,
                  showRightAngle: true,
                  showSideTypeLabels: false
                }}
                caption="Tangent uses the Opposite and Adjacent (opposite highlighted in red)"
              />
            </div>

            {/* SOH-CAH-TOA Mnemonic */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-lg border-4 border-yellow-400 dark:border-yellow-600 mt-6">
              <h3 className="text-2xl font-bold text-yellow-800 dark:text-yellow-300 mb-3 text-center">
                🎯 Remember: SOH-CAH-TOA
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded text-center">
                  <p className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">SOH</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>S</strong>ine = <strong>O</strong>pposite / <strong>H</strong>ypotenuse
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded text-center">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">CAH</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>C</strong>osine = <strong>A</strong>djacent / <strong>H</strong>ypotenuse
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded text-center">
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">TOA</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>T</strong>angent = <strong>O</strong>pposite / <strong>A</strong>djacent
                  </p>
                </div>
              </div>
              <p className="text-center text-yellow-800 dark:text-yellow-300 mt-4 font-semibold">
                This is your best friend in trigonometry! Memorize it!
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Writing Trigonometric Ratios */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Writing Trigonometric Ratios for a Triangle
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Writing Ratios
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In triangle XYZ, angle Z = 90°, XY = c m, YZ = a m, and XZ = b m. Write expressions for:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>For angle X:</strong></p>
              <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>• <strong>Hypotenuse:</strong> c (opposite the right angle)</li>
                <li>• <strong>Opposite to X:</strong> a (side YZ)</li>
                <li>• <strong>Adjacent to X:</strong> b (side XZ)</li>
              </ul>
              <div className="mt-4 space-y-2 bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>sin X = a/c</MathText> (opposite over hypotenuse)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>cos X = b/c</MathText> (adjacent over hypotenuse)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>tan X = a/b</MathText> (opposite over adjacent)
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Identify and Write
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In triangle PQR with angle R = 90°, PR = x cm, QR = y cm, and PQ = z cm:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) Identify the hypotenuse, opposite, and adjacent sides with respect to angle P<br/>
              (b) Write expressions for sin P, cos P, and tan P
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>(a) With respect to angle P:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mb-3">
                  <li>Hypotenuse: z (PQ is opposite the right angle)</li>
                  <li>Opposite: y (QR doesn't touch angle P)</li>
                  <li>Adjacent: x (PR touches angle P)</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>(b) Trigonometric ratios:</strong></p>
                <div className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                  <p><MathText>sin P = y/z</MathText></p>
                  <p><MathText>cos P = x/z</MathText></p>
                  <p><MathText>tan P = y/x</MathText></p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Equal Tangents
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In triangle MNO with angle O = 90°, MN = a m, OM = b m, and ON = c m.<br/>
              If tan M = tan N, write down a possible set of values for a, b, and c.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Solution:</strong></p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  For angle M: <MathText>tan M = c/b</MathText> (opposite over adjacent)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  For angle N: <MathText>tan N = b/c</MathText> (opposite over adjacent)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  If tan M = tan N, then c/b = b/c, which means <MathText>{'c² = b²'}</MathText>, so c = b.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  This is a <strong>45-45-90 triangle</strong> (isosceles right triangle)!
                </p>
                <p className="text-green-700 dark:text-green-300 font-semibold">
                  Possible values: a = 5, b = 3, c = 3 (or any values where b = c and a satisfies Pythagoras' theorem)
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 6: Using Calculator Values */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Finding Trigonometric Ratios with a Calculator
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While we discovered that ratios are constant for each angle, we don't want to measure triangles every time! Fortunately, calculators have these values built in.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Example 3: Using Calculator
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Find the value of:
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">(a) tan 47°</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Calculator sequence: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">tan</code>
                  <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">4</code>
                  <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">7</code>
                  <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">=</code>
                </p>
                <p className="text-green-700 dark:text-green-300 font-semibold">Answer: tan 47° = 1.072 (to 3 decimal places)</p>

                <p className="text-gray-700 dark:text-gray-300 mt-4 mb-2">(b) sin 75.3°</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Calculator sequence: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">sin</code>
                  <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">7</code>
                  <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">5</code>
                  <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">.</code>
                  <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">3</code>
                  <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-1">=</code>
                </p>
                <p className="text-green-700 dark:text-green-300 font-semibold">Answer: sin 75.3° = 0.967 (to 3 decimal places)</p>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                ⚠️ Important: Check Your Calculator Mode!
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Make sure your calculator is in <strong>DEGREE mode</strong> (not radian mode) when working with angles in degrees. Most calculators show "DEG" on the display.
              </p>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Calculator Practice
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Use a calculator to evaluate (give answers to 3 decimal places):
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) sin 35° + cos 49°<br/>
              (b) 2 cos 42.3° + 3 sin 16.8°<br/>
              (c) tan 71.6° × tan 16.7°
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
                  <p>(a) sin 35° + cos 49° = 0.574 + 0.656 = <strong className="text-green-600 dark:text-green-400">1.230</strong></p>
                  <p>(b) 2 cos 42.3° + 3 sin 16.8° = 2(0.738) + 3(0.289) = 1.476 + 0.867 = <strong className="text-green-600 dark:text-green-400">2.343</strong></p>
                  <p>(c) tan 71.6° × tan 16.7° = 3.006 × 0.300 = <strong className="text-green-600 dark:text-green-400">0.902</strong></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Advanced: Special Angle Values */}
        <div className="mt-6">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold"
          >
            <span>{showAdvanced ? '▼' : '▶'}</span>
            <span>Advanced: Special Angle Values (30°, 45°, 60°)</span>
          </button>
          {showAdvanced && (
            <div className="mt-4 ml-6 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-2 border-indigo-300 dark:border-indigo-600">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
                Common Angles You Should Know
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Some angles have nice exact values that are worth memorizing:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-indigo-300 dark:border-indigo-600">
                  <thead>
                    <tr className="bg-indigo-100 dark:bg-indigo-900/40">
                      <th className="border border-indigo-300 dark:border-indigo-600 p-2 text-gray-800 dark:text-gray-100">Angle</th>
                      <th className="border border-indigo-300 dark:border-indigo-600 p-2 text-gray-800 dark:text-gray-100">sin θ</th>
                      <th className="border border-indigo-300 dark:border-indigo-600 p-2 text-gray-800 dark:text-gray-100">cos θ</th>
                      <th className="border border-indigo-300 dark:border-indigo-600 p-2 text-gray-800 dark:text-gray-100">tan θ</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="border border-indigo-300 dark:border-indigo-600 p-2 text-center font-semibold">30°</td>
                      <td className="border border-indigo-300 dark:border-indigo-600 p-2 text-center">0.5</td>
                      <td className="border border-indigo-300 dark:border-indigo-600 p-2 text-center">0.866</td>
                      <td className="border border-indigo-300 dark:border-indigo-600 p-2 text-center">0.577</td>
                    </tr>
                    <tr className="bg-indigo-50 dark:bg-indigo-900/20">
                      <td className="border border-indigo-300 dark:border-indigo-600 p-2 text-center font-semibold">45°</td>
                      <td className="border border-indigo-300 dark:border-indigo-600 p-2 text-center">0.707</td>
                      <td className="border border-indigo-300 dark:border-indigo-600 p-2 text-center">0.707</td>
                      <td className="border border-indigo-300 dark:border-indigo-600 p-2 text-center">1.0</td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-300 dark:border-indigo-600 p-2 text-center font-semibold">60°</td>
                      <td className="border border-indigo-300 dark:border-indigo-600 p-2 text-center">0.866</td>
                      <td className="border border-indigo-300 dark:border-indigo-600 p-2 text-center">0.5</td>
                      <td className="border border-indigo-300 dark:border-indigo-600 p-2 text-center">1.732</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm">
                Notice: sin 30° = cos 60° = 0.5, and sin 60° = cos 30° = 0.866. These are called <strong>complementary angles</strong>!
              </p>
            </div>
          )}
        </div>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            🎯 Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Trigonometry helps us find unknown heights and distances using angle relationships</li>
            <li>Every right-angled triangle has three sides: <strong>hypotenuse</strong> (longest), <strong>opposite</strong>, and <strong>adjacent</strong></li>
            <li>The hypotenuse is always the same, but opposite and adjacent depend on which angle you're considering</li>
            <li>For a given angle, the ratio between two sides is <strong>constant</strong>, regardless of triangle size</li>
            <li>The three primary ratios are: <strong>sin θ = Opp/Hyp</strong>, <strong>cos θ = Adj/Hyp</strong>, <strong>tan θ = Opp/Adj</strong></li>
            <li>Remember <strong>SOH-CAH-TOA</strong> to recall which ratio uses which sides</li>
            <li>Use your calculator to find trigonometric ratios (make sure it's in degree mode!)</li>
            <li>Special angles (30°, 45°, 60°) have nice values worth memorizing</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
