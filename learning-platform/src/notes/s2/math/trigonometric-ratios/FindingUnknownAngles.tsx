import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function FindingUnknownAngles() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showCalculatorGuide, setShowCalculatorGuide] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 dark:from-orange-600 dark:to-amber-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Finding Unknown Angles</h1>
        <p className="mt-2 text-orange-100">Using inverse trigonometric functions to find angles</p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-b-lg">

        {/* Section 1: The Inverse Problem */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Inverse Problem: From Ratio to Angle
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              So far, we've been using trigonometric ratios to find <strong>sides</strong> when we know the <strong>angle</strong>. But what if we know the sides and need to find the angle?
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-5 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                🔄 Forward vs. Inverse Operations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-blue-400 dark:border-blue-600">
                  <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">FORWARD (What we've been doing)</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Given: angle θ = 30°</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Find: sin 30° = ?</p>
                  <p className="text-green-700 dark:text-green-300 font-semibold">Answer: sin 30° = 0.5</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-orange-400 dark:border-orange-600">
                  <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">INVERSE (New skill!)</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Given: sin θ = 0.5</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Find: θ = ?</p>
                  <p className="text-green-700 dark:text-green-300 font-semibold">Answer: θ = 30°</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To "undo" a trigonometric function, we use its <strong>inverse function</strong>. These are written as:
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-5 rounded-lg border-2 border-orange-300 dark:border-orange-600">
              <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-4 text-center">Inverse Trigonometric Functions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded text-center">
                  <p className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">sin⁻¹</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Also called:</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">"inverse sine" or "arcsin"</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">cos⁻¹</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Also called:</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">"inverse cosine" or "arccos"</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded text-center">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">tan⁻¹</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Also called:</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">"inverse tangent" or "arctan"</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mt-6">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                ⚠️ Important Note on Notation
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                The "⁻¹" in sin⁻¹ does NOT mean "to the power of -1". It means "inverse function". On your calculator, these buttons might be labeled as <code className="bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded">sin⁻¹</code>, <code className="bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded">asin</code>, or <code className="bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded">arcsin</code>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Using Inverse Functions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            How to Find an Angle Using Inverse Functions
          </h2>

          <div className="mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-lg border-2 border-blue-300 dark:border-blue-600 mb-6">
              <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-3">
                🎯 Step-by-Step Process
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>Calculate the ratio</strong> - Find sin θ, cos θ, or tan θ using the given sides</li>
                <li><strong>Choose the inverse function</strong> - Use sin⁻¹, cos⁻¹, or tan⁻¹ accordingly</li>
                <li><strong>Apply on calculator</strong> - Make sure calculator is in DEGREE mode!</li>
                <li><strong>Round appropriately</strong> - Usually to 1 decimal place for angles</li>
              </ol>
            </div>

            {/* Worked Example 1 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Finding an Angle Using Inverse Sine
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                In a right-angled triangle, the opposite side to angle x is 15 cm and the hypotenuse is 22 cm. Find the value of x.
              </p>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Step 1: Calculate the ratio</strong></p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Opposite = 15 cm, Hypotenuse = 22 cm</p>
                  <p>Opposite & Hypotenuse → use SINE</p>
                  <p><MathText>sin x = 15 / 22</MathText></p>
                  <p><MathText>sin x = 0.6818...</MathText></p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Step 2-3: Use inverse sine</strong></p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>To find x when sin x = 0.6818, use sin⁻¹:</p>
                  <p><MathText>{'x = sin⁻¹(0.6818)'}</MathText></p>
                  <p>Calculator sequence:</p>
                  <div className="flex flex-wrap gap-1 my-2">
                    <code className="bg-blue-200 dark:bg-blue-800 px-3 py-1 rounded font-bold">SHIFT</code>
                    <code className="bg-blue-200 dark:bg-blue-800 px-3 py-1 rounded font-bold">sin</code>
                    <span className="px-2">or</span>
                    <code className="bg-blue-200 dark:bg-blue-800 px-3 py-1 rounded font-bold">sin⁻¹</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">(</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">1</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">5</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">÷</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">2</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">2</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">)</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">=</code>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Step 4: Result</strong></p>
                <p className="text-gray-700 dark:text-gray-300">x = 42.97...°</p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-2 border-green-500 dark:border-green-600">
                <p className="text-green-800 dark:text-green-300 font-bold">
                  ✅ Answer: x = 43.0° (to 1 decimal place)
                </p>
              </div>
            </div>

            {/* Worked Example 2 - Inverse Cosine */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 2: Finding an Angle Using Inverse Cosine
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                In triangle ABC with angle C = 90°, AC = 13 cm (adjacent to angle A) and AB = 22 cm (hypotenuse). Find angle A to 1 decimal place.
              </p>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Step 1: Calculate ratio</strong></p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Adjacent = 13 cm, Hypotenuse = 22 cm → use COSINE</p>
                  <p><MathText>cos A = 13 / 22 = 0.5909</MathText></p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Step 2-3: Use inverse cosine</strong></p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>{'A = cos⁻¹(0.5909)'}</MathText></p>
                  <p>Calculator: <code className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">SHIFT</code> + <code className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">cos</code> then <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">0.5909</code></p>
                  <p>A = 53.77...°</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-2 border-green-500 dark:border-green-600">
                <p className="text-green-800 dark:text-green-300 font-bold">
                  ✅ Answer: A = 53.8° (to 1 d.p.)
                </p>
              </div>
            </div>

            {/* Worked Example 3 - Inverse Tangent */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 3: Finding an Angle Using Inverse Tangent
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A right-angled triangle has sides of 15.5 cm (opposite to angle z) and 23.6 cm (adjacent to angle z). Calculate angle z.
              </p>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Opposite = 15.5 cm, Adjacent = 23.6 cm → use TANGENT</p>
                  <p><MathText>tan z = 15.5 / 23.6 = 0.6567</MathText></p>
                  <p><MathText>{'z = tan⁻¹(0.6567)'}</MathText></p>
                  <p>Calculator: <code className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">SHIFT</code> + <code className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">tan</code> then <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">0.6567</code></p>
                  <p>z = 33.29...°</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-2 border-green-500 dark:border-green-600">
                <p className="text-green-800 dark:text-green-300 font-bold">
                  ✅ Answer: z = 33.3° (to 1 d.p.)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Calculator Guide */}
        <section className="mb-8">
          <button
            onClick={() => setShowCalculatorGuide(!showCalculatorGuide)}
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold mb-4"
          >
            <span>{showCalculatorGuide ? '▼' : '▶'}</span>
            <span>📱 Calculator Guide for Inverse Functions (Click to Expand)</span>
          </button>

          {showCalculatorGuide && (
            <div className="ml-6 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-2 border-indigo-300 dark:border-indigo-600">
              <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-4">
                How to Access Inverse Functions on Different Calculators
              </h3>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-indigo-300 dark:border-indigo-600">
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-2">Most Scientific Calculators:</h4>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Method 1:</strong> Press <code className="bg-indigo-200 dark:bg-indigo-800 px-2 py-1 rounded">SHIFT</code> or <code className="bg-indigo-200 dark:bg-indigo-800 px-2 py-1 rounded">2nd</code> then the trig function</p>
                    <p className="ml-4">Example: <code className="bg-indigo-200 dark:bg-indigo-800 px-2 py-1 rounded">SHIFT</code> + <code className="bg-indigo-200 dark:bg-indigo-800 px-2 py-1 rounded">sin</code> gives sin⁻¹</p>
                    <p><strong>Method 2:</strong> Look for dedicated buttons labeled <code className="bg-indigo-200 dark:bg-indigo-800 px-2 py-1 rounded">sin⁻¹</code>, <code className="bg-indigo-200 dark:bg-indigo-800 px-2 py-1 rounded">cos⁻¹</code>, <code className="bg-indigo-200 dark:bg-indigo-800 px-2 py-1 rounded">tan⁻¹</code></p>
                    <p><strong>Method 3:</strong> Some calculators use <code className="bg-indigo-200 dark:bg-indigo-800 px-2 py-1 rounded">asin</code>, <code className="bg-indigo-200 dark:bg-indigo-800 px-2 py-1 rounded">acos</code>, <code className="bg-indigo-200 dark:bg-indigo-800 px-2 py-1 rounded">atan</code></p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-indigo-300 dark:border-indigo-600">
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-2">Full Example Sequence:</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">To calculate sin⁻¹(0.5):</p>
                  <div className="flex flex-wrap gap-1 my-2">
                    <code className="bg-indigo-200 dark:bg-indigo-800 px-3 py-1 rounded">SHIFT</code>
                    <code className="bg-indigo-200 dark:bg-indigo-800 px-3 py-1 rounded">sin</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">(</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">0</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">.</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">5</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">)</code>
                    <code className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">=</code>
                  </div>
                  <p className="text-green-700 dark:text-green-300 font-semibold">Result: 30°</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-2 border-red-400 dark:border-red-600">
                  <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">⚠️ Common Calculator Errors:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>Wrong mode:</strong> Make sure calculator is in DEGREE mode, not RADIAN mode!</li>
                    <li><strong>Order matters:</strong> Press the inverse function button BEFORE entering the number</li>
                    <li><strong>Parentheses:</strong> Some calculators require parentheses around the value</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Section 4: Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice Problems
          </h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Using Inverse Sine
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In a right-angled triangle, sin A = 0.78. Find the value of angle A to 1 decimal place.
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Given:</strong> sin A = 0.78</p>
                  <p><strong>Find:</strong> A = ?</p>
                  <p><strong>Use inverse sine:</strong> <MathText>{'A = sin⁻¹(0.78)'}</MathText></p>
                  <p><strong>Calculator:</strong> SHIFT + sin, then 0.78</p>
                  <p>A = 51.26...°</p>
                  <p className="text-green-700 dark:text-green-300 font-semibold">
                    Answer: A = 51.3° (to 1 d.p.)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: From Triangle to Angle
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A right-angled triangle has a base of 8.7 cm and a height of 5.7 cm. Find the angle between the base and the hypotenuse.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <em>Hint: The height is opposite to this angle, and the base is adjacent.</em>
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
                  <p><strong>Identify:</strong> Opposite = 5.7 cm, Adjacent = 8.7 cm</p>
                  <p><strong>Ratio:</strong> Opposite & Adjacent → use TANGENT</p>
                  <p><strong>Calculate:</strong> <MathText>tan θ = 5.7 / 8.7 = 0.6552</MathText></p>
                  <p><strong>Inverse:</strong> <MathText>{'θ = tan⁻¹(0.6552)'}</MathText></p>
                  <p><strong>Result:</strong> θ = 33.23...°</p>
                  <p className="text-green-700 dark:text-green-300 font-semibold">
                    Answer: The angle is 33.2° (to 1 d.p.)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Choosing the Right Inverse
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In triangle PQR with angle R = 90°, PQ = 18 m (hypotenuse) and QR = 12 m (adjacent to angle P). Find angle P.
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
                  <p><strong>Identify:</strong> Hypotenuse = 18 m, Adjacent (to P) = 12 m</p>
                  <p><strong>Ratio:</strong> Adjacent & Hypotenuse → use COSINE</p>
                  <p><strong>Calculate:</strong> <MathText>cos P = 12 / 18 = 0.6667</MathText></p>
                  <p><strong>Inverse:</strong> <MathText>{'P = cos⁻¹(0.6667)'}</MathText></p>
                  <p><strong>Result:</strong> P = 48.19...°</p>
                  <p className="text-green-700 dark:text-green-300 font-semibold">
                    Answer: P = 48.2° (to 1 d.p.)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Real-World Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A ramp is 2.5 m long and rises to a height of 0.4 m. What angle does the ramp make with the horizontal ground?
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
                  <p><strong>Understand:</strong> Ramp length = hypotenuse = 2.5 m, Height = opposite = 0.4 m</p>
                  <p><strong>Ratio:</strong> Opposite & Hypotenuse → use SINE</p>
                  <p><strong>Calculate:</strong> <MathText>sin θ = 0.4 / 2.5 = 0.16</MathText></p>
                  <p><strong>Inverse:</strong> <MathText>{'θ = sin⁻¹(0.16)'}</MathText></p>
                  <p><strong>Result:</strong> θ = 9.21...°</p>
                  <p className="text-green-700 dark:text-green-300 font-semibold">
                    Answer: The ramp makes an angle of 9.2° with the ground (to 1 d.p.)
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
                ❌ Mistake 1: Forgetting to Use Inverse Function
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Wrong:</strong> "sin θ = 0.5, so θ = 0.5°"
              </p>
              <p className="text-green-700 dark:text-green-300">
                <strong>Correct:</strong> "sin θ = 0.5, so θ = sin⁻¹(0.5) = 30°"
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-2 border-red-400 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-2">
                ❌ Mistake 2: Radian Mode Instead of Degree Mode
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Wrong:</strong> sin⁻¹(0.5) = 0.524 (this is in radians!)
              </p>
              <p className="text-green-700 dark:text-green-300">
                <strong>Correct:</strong> sin⁻¹(0.5) = 30° (in degree mode)
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-2 border-red-400 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-2">
                ❌ Mistake 3: Calculating Ratio Backwards
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Wrong:</strong> Given opposite = 5, adjacent = 8. tan θ = 8/5
              </p>
              <p className="text-green-700 dark:text-green-300">
                <strong>Correct:</strong> tan θ = opposite/adjacent = 5/8
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-2 border-red-400 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-2">
                ❌ Mistake 4: Not Rounding Appropriately
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Wrong:</strong> "The angle is 42.9735821456°"
              </p>
              <p className="text-green-700 dark:text-green-300">
                <strong>Correct:</strong> "The angle is 43.0° (to 1 d.p.)" or "42.97° (to 2 d.p.)"
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
            <li>To find an angle from a ratio, use <strong>inverse trigonometric functions</strong></li>
            <li><strong>sin⁻¹</strong> (inverse sine) undoes sine: if sin θ = 0.5, then θ = sin⁻¹(0.5)</li>
            <li><strong>cos⁻¹</strong> (inverse cosine) undoes cosine</li>
            <li><strong>tan⁻¹</strong> (inverse tangent) undoes tangent</li>
            <li>Access inverse functions on calculator: usually <strong>SHIFT</strong> + trig button</li>
            <li>The "⁻¹" means inverse function, NOT "to the power of -1"</li>
            <li>Always ensure calculator is in <strong>DEGREE mode</strong></li>
            <li>Round angles to <strong>1 decimal place</strong> unless specified otherwise</li>
            <li>Process: Calculate ratio → Choose inverse → Apply on calculator → Round</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
