import { useState } from 'react';

const DefiniteIntegrals = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showExample4, setShowExample4] = useState(false);
  const [showPractice1, setShowPractice1] = useState(false);
  const [showPractice2, setShowPractice2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">The Definite Integral</h1>
        <p className="text-lg">Computing exact areas and evaluating integrals with limits</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Definite vs Indefinite Integrals */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">
            1. Definite vs. Indefinite Integrals
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-600">
              <h3 className="font-bold text-lg mb-3 text-blue-800 dark:text-blue-300">Indefinite Integral</h3>
              <div className="bg-white dark:bg-gray-800 p-3 rounded mb-3">
                <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100">
                  ∫ f(x) dx = F(x) + C
                </p>
              </div>
              <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-2">
                <li>• No limits of integration</li>
                <li>• Result is a <strong>function</strong></li>
                <li>• Includes constant C</li>
                <li>• Represents family of antiderivatives</li>
              </ul>
            </div>

            <div className="bg-violet-50 dark:bg-violet-900/30 p-6 rounded-lg border-2 border-violet-300 dark:border-violet-600">
              <h3 className="font-bold text-lg mb-3 text-violet-800 dark:text-violet-300">Definite Integral</h3>
              <div className="bg-white dark:bg-gray-800 p-3 rounded mb-3">
                <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100">
                  ∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) - F(a)
                </p>
              </div>
              <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-2">
                <li>• Has limits a (lower) and b (upper)</li>
                <li>• Result is a <strong>number</strong></li>
                <li>• No constant C (it cancels out)</li>
                <li>• Represents exact area or net change</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400">
            <p className="text-sm text-gray-800 dark:text-gray-200">
              <strong>Key Insight:</strong> The definite integral gives us a <strong>specific numerical value</strong>,
              while the indefinite integral gives us a <strong>general function</strong> (plus C).
            </p>
          </div>
        </div>

        {/* Section 2: Fundamental Theorem of Calculus */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">
            2. The Fundamental Theorem of Calculus (Part 1)
          </h2>

          <div className="bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/40 dark:to-purple-900/40 p-6 rounded-lg border-2 border-violet-400 dark:border-violet-600 mb-4">
            <h3 className="font-bold text-xl mb-4 text-violet-900 dark:text-violet-200 text-center">
              The Most Important Theorem in Calculus
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100 mb-3">
                ∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) - F(a)
              </p>
              <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                where F(x) is any antiderivative of f(x)
              </p>
            </div>
            <div className="mt-4 text-sm text-gray-800 dark:text-gray-200">
              <p className="mb-2"><strong>What it means:</strong></p>
              <ul className="space-y-1 ml-4">
                <li>1. Find any antiderivative F(x) of f(x)</li>
                <li>2. Evaluate F at the upper limit b</li>
                <li>3. Evaluate F at the lower limit a</li>
                <li>4. Subtract: F(b) - F(a)</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Notation:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              We use square brackets with limits to show evaluation:
            </p>
            <div className="bg-violet-50 dark:bg-violet-900/20 p-4 rounded border border-violet-200 dark:border-violet-700">
              <p className="text-center font-mono text-lg text-gray-900 dark:text-gray-100">
                ∫<sub>a</sub><sup>b</sup> f(x) dx = [F(x)]<sub>a</sub><sup>b</sup> = F(b) - F(a)
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Evaluating Definite Integrals */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">
            3. Evaluating Definite Integrals
          </h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 1: Basic Definite Integral</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Evaluate ∫<sub>1</sub><sup>3</sup> x² dx
            </p>

            <button
              onClick={() => setShowExample1(!showExample1)}
              className="px-4 py-2 bg-violet-600 dark:bg-violet-500 text-white rounded hover:bg-violet-700 dark:hover:bg-violet-600 transition-colors mb-3"
            >
              {showExample1 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showExample1 && (
              <div className="bg-violet-50 dark:bg-violet-900/20 p-4 rounded border border-violet-200 dark:border-violet-700 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 1: Find the antiderivative</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    ∫ x² dx = x³/3 + C
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    (Note: We don't need + C for definite integrals)
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 2: Apply the limits</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    ∫<sub>1</sub><sup>3</sup> x² dx = [x³/3]<sub>1</sub><sup>3</sup>
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 3: Evaluate at upper and lower limits</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    = (3³/3) - (1³/3)
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    = 27/3 - 1/3
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    = 9 - 1/3
                  </p>
                  <p className="text-sm font-mono font-bold text-violet-700 dark:text-violet-300 mt-2">
                    = 26/3 ≈ 8.67
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-300 dark:border-green-700">
                  <p className="text-xs text-gray-900 dark:text-gray-100 font-semibold mb-1">Interpretation:</p>
                  <p className="text-xs text-gray-800 dark:text-gray-200">
                    The area under the curve y = x² from x = 1 to x = 3 is exactly 26/3 square units.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 2: Polynomial Integration</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Evaluate ∫<sub>0</sub><sup>2</sup> (3x² - 4x + 5) dx
            </p>

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="px-4 py-2 bg-violet-600 dark:bg-violet-500 text-white rounded hover:bg-violet-700 dark:hover:bg-violet-600 transition-colors mb-3"
            >
              {showExample2 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showExample2 && (
              <div className="bg-violet-50 dark:bg-violet-900/20 p-4 rounded border border-violet-200 dark:border-violet-700 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 1: Find antiderivative</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    ∫ (3x² - 4x + 5) dx = x³ - 2x² + 5x
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 2: Apply limits</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    = [x³ - 2x² + 5x]<sub>0</sub><sup>2</sup>
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 3: Evaluate</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    = [2³ - 2(2²) + 5(2)] - [0³ - 2(0²) + 5(0)]
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    = [8 - 8 + 10] - [0]
                  </p>
                  <p className="text-sm font-mono font-bold text-violet-700 dark:text-violet-300 mt-2">
                    = 10
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 4: Properties of Definite Integrals */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">
            4. Properties of Definite Integrals
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Property 1: Reversed Limits</h4>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded mb-2">
                <p className="text-center font-mono text-sm text-gray-900 dark:text-gray-100">
                  ∫<sub>a</sub><sup>b</sup> f(x) dx = -∫<sub>b</sub><sup>a</sup> f(x) dx
                </p>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Swapping limits changes the sign
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">Property 2: Zero Width</h4>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded mb-2">
                <p className="text-center font-mono text-sm text-gray-900 dark:text-gray-100">
                  ∫<sub>a</sub><sup>a</sup> f(x) dx = 0
                </p>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Same limits give zero area
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-purple-300 dark:border-purple-600">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Property 3: Additivity</h4>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded mb-2">
                <p className="text-center font-mono text-sm text-gray-900 dark:text-gray-100">
                  ∫<sub>a</sub><sup>b</sup> f(x) dx + ∫<sub>b</sub><sup>c</sup> f(x) dx = ∫<sub>a</sub><sup>c</sup> f(x) dx
                </p>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Split intervals add up
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-orange-300 dark:border-orange-600">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-3">Property 4: Constant Multiple</h4>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded mb-2">
                <p className="text-center font-mono text-sm text-gray-900 dark:text-gray-100">
                  ∫<sub>a</sub><sup>b</sup> k·f(x) dx = k·∫<sub>a</sub><sup>b</sup> f(x) dx
                </p>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Pull constants out
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Area Between Curves and the x-axis */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">
            5. Areas Below the x-axis
          </h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 dark:border-red-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Important Warning:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              When a function is <strong>below the x-axis</strong> (negative), the definite integral gives a
              <strong> negative value</strong>. To find the actual <strong>geometric area</strong>, take the absolute value.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-center font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Net Area vs. Total Area
              </p>
              <div className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                <p>• <strong>Net Area:</strong> ∫<sub>a</sub><sup>b</sup> f(x) dx (can be negative)</p>
                <p>• <strong>Total Area:</strong> ∫<sub>a</sub><sup>b</sup> |f(x)| dx (always positive)</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 3: Function Below x-axis</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Evaluate ∫<sub>0</sub><sup>π</sup> sin(x) dx
            </p>

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="px-4 py-2 bg-red-600 dark:bg-red-500 text-white rounded hover:bg-red-700 dark:hover:bg-red-600 transition-colors mb-3"
            >
              {showExample3 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showExample3 && (
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-200 dark:border-red-700 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 1: Antiderivative</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    ∫ sin(x) dx = -cos(x)
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 2: Evaluate</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    = [-cos(x)]<sub>0</sub><sup>π</sup>
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    = [-cos(π)] - [-cos(0)]
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    = [-(-1)] - [-1]
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    = 1 - (-1)
                  </p>
                  <p className="text-sm font-mono font-bold text-red-700 dark:text-red-300 mt-2">
                    = 2
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-300 dark:border-green-700">
                  <p className="text-xs text-gray-900 dark:text-gray-100 font-semibold mb-1">Note:</p>
                  <p className="text-xs text-gray-800 dark:text-gray-200">
                    From 0 to π, sin(x) is positive (above x-axis), so the integral is positive. The area is 2 square units.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 4: Mixed Positive and Negative</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Find the net area and total area for f(x) = x - 1 from x = 0 to x = 3
            </p>

            <button
              onClick={() => setShowExample4(!showExample4)}
              className="px-4 py-2 bg-violet-600 dark:bg-violet-500 text-white rounded hover:bg-violet-700 dark:hover:bg-violet-600 transition-colors mb-3"
            >
              {showExample4 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showExample4 && (
              <div className="bg-violet-50 dark:bg-violet-900/20 p-4 rounded border border-violet-200 dark:border-violet-700 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 1: Find where f(x) = 0</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    x - 1 = 0 → x = 1
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Below x-axis: [0, 1], Above x-axis: [1, 3]
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 2: Net Area</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    ∫<sub>0</sub><sup>3</sup> (x - 1) dx = [x²/2 - x]<sub>0</sub><sup>3</sup>
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    = (9/2 - 3) - (0) = 3/2
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 3: Total Area</p>
                  <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">Split into two parts:</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    Area₁ = |∫<sub>0</sub><sup>1</sup> (x-1) dx| = |[x²/2-x]<sub>0</sub><sup>1</sup>| = |-1/2| = 1/2
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    Area₂ = ∫<sub>1</sub><sup>3</sup> (x-1) dx = [x²/2-x]<sub>1</sub><sup>3</sup> = 2
                  </p>
                  <p className="text-sm font-mono font-bold text-violet-700 dark:text-violet-300 mt-2">
                    Total Area = 1/2 + 2 = 5/2 = 2.5 square units
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-5 rounded border-2 border-violet-300 dark:border-violet-600">
              <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">Problem 1:</p>
              <p className="text-gray-800 dark:text-gray-200 mb-3">
                Evaluate ∫<sub>1</sub><sup>4</sup> (2x + 3) dx
              </p>

              <button
                onClick={() => setShowPractice1(!showPractice1)}
                className="px-4 py-2 bg-violet-600 dark:bg-violet-500 text-white rounded hover:bg-violet-700 dark:hover:bg-violet-600 transition-colors text-sm"
              >
                {showPractice1 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showPractice1 && (
                <div className="mt-4 bg-violet-50 dark:bg-violet-900/20 p-4 rounded border border-violet-200 dark:border-violet-700">
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    Antiderivative: x² + 3x
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200 mt-2">
                    = [x² + 3x]<sub>1</sub><sup>4</sup>
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    = (16 + 12) - (1 + 3)
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    = 28 - 4
                  </p>
                  <p className="text-sm font-mono font-bold text-violet-700 dark:text-violet-300 mt-2">
                    = 24
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded border-2 border-fuchsia-300 dark:border-fuchsia-600">
              <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">Problem 2:</p>
              <p className="text-gray-800 dark:text-gray-200 mb-3">
                Evaluate ∫<sub>0</sub><sup>1</sup> (x³ - 2x²) dx
              </p>

              <button
                onClick={() => setShowPractice2(!showPractice2)}
                className="px-4 py-2 bg-fuchsia-600 dark:bg-fuchsia-500 text-white rounded hover:bg-fuchsia-700 dark:hover:bg-fuchsia-600 transition-colors text-sm"
              >
                {showPractice2 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showPractice2 && (
                <div className="mt-4 bg-fuchsia-50 dark:bg-fuchsia-900/20 p-4 rounded border border-fuchsia-200 dark:border-fuchsia-700">
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    Antiderivative: x⁴/4 - 2x³/3
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200 mt-2">
                    = [x⁴/4 - 2x³/3]<sub>0</sub><sup>1</sup>
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    = (1/4 - 2/3) - (0)
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    = 3/12 - 8/12
                  </p>
                  <p className="text-sm font-mono font-bold text-fuchsia-700 dark:text-fuchsia-300 mt-2">
                    = -5/12
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    (Negative because more area is below x-axis than above)
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/40 dark:to-fuchsia-900/40 p-6 rounded-lg border-2 border-violet-300 dark:border-violet-600">
          <h2 className="text-2xl font-bold mb-4 text-violet-900 dark:text-violet-200">Key Takeaways</h2>
          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Definite integrals have limits and give a numerical result (not a function)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>The Fundamental Theorem: ∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) - F(a)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>No need for "+ C" in definite integrals (it cancels out)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Swapping limits changes the sign: ∫<sub>a</sub><sup>b</sup> = -∫<sub>b</sub><sup>a</sup></span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Areas below the x-axis contribute negative values to the integral</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>For total geometric area, split at zeros and sum absolute values</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DefiniteIntegrals;
