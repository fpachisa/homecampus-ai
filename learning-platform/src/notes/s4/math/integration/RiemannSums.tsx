import React, { useState } from 'react';

const RiemannSums = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showPractice1, setShowPractice1] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">The Riemann Integral</h1>
        <p className="text-lg">The formal definition of integration using limits</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Riemann Sum Concept */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">
            1. What is a Riemann Sum?
          </h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Big Idea:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              A <strong>Riemann sum</strong> is a method of approximating the area under a curve by dividing the
              region into <strong>n rectangles</strong> and summing their areas. As n approaches infinity (rectangles
              become infinitesimally thin), the Riemann sum approaches the exact area.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">The Setup:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200 mb-3">
              To approximate ∫<sub>a</sub><sup>b</sup> f(x) dx:
            </p>
            <ol className="space-y-2 text-sm text-gray-800 dark:text-gray-200 ml-4">
              <li><strong>1. Divide the interval [a, b] into n subintervals</strong></li>
              <li className="ml-4">• Each subinterval has width Δx = (b - a) / n</li>
              <li><strong>2. Choose a sample point in each subinterval</strong></li>
              <li className="ml-4">• x₀ = a, x₁ = a + Δx, x₂ = a + 2Δx, ..., xₙ = b</li>
              <li><strong>3. Create rectangles with heights f(xᵢ)</strong></li>
              <li><strong>4. Sum the areas: Σ f(xᵢ) · Δx</strong></li>
            </ol>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Left Riemann Sum</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                Use left endpoint of each subinterval
              </p>
              <div className="bg-white dark:bg-gray-800 p-2 rounded">
                <p className="text-xs font-mono text-gray-900 dark:text-gray-100">
                  L<sub>n</sub> = Σ f(xᵢ₋₁) · Δx
                </p>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                • Underestimates if f is increasing
                <br />• Overestimates if f is decreasing
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded border-2 border-purple-300 dark:border-purple-600">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Right Riemann Sum</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                Use right endpoint of each subinterval
              </p>
              <div className="bg-white dark:bg-gray-800 p-2 rounded">
                <p className="text-xs font-mono text-gray-900 dark:text-gray-100">
                  R<sub>n</sub> = Σ f(xᵢ) · Δx
                </p>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                • Overestimates if f is increasing
                <br />• Underestimates if f is decreasing
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Midpoint Riemann Sum</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                Use midpoint of each subinterval
              </p>
              <div className="bg-white dark:bg-gray-800 p-2 rounded">
                <p className="text-xs font-mono text-gray-900 dark:text-gray-100">
                  M<sub>n</sub> = Σ f(x̄ᵢ) · Δx
                </p>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                • Usually most accurate
                <br />• Balances over/underestimation
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Computing Riemann Sums */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">
            2. Computing Riemann Sums
          </h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 1: Left Riemann Sum</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Approximate ∫<sub>0</sub><sup>4</sup> x² dx using a Left Riemann Sum with n = 4 rectangles.
            </p>

            <button
              onClick={() => setShowExample1(!showExample1)}
              className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors mb-3"
            >
              {showExample1 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showExample1 && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 1: Find Δx</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    Δx = (b - a) / n = (4 - 0) / 4 = 1
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 2: Identify left endpoints</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    x₀ = 0, x₁ = 1, x₂ = 2, x₃ = 3
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 3: Evaluate f(x) = x² at left endpoints</p>
                  <div className="text-sm font-mono text-gray-800 dark:text-gray-200 space-y-1">
                    <p>f(0) = 0² = 0</p>
                    <p>f(1) = 1² = 1</p>
                    <p>f(2) = 2² = 4</p>
                    <p>f(3) = 3² = 9</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 4: Compute Riemann Sum</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    L₄ = Δx · [f(0) + f(1) + f(2) + f(3)]
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    L₄ = 1 · [0 + 1 + 4 + 9]
                  </p>
                  <p className="text-sm font-mono font-bold text-blue-700 dark:text-blue-300 mt-2">
                    L₄ = 14
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-xs text-gray-900 dark:text-gray-100 font-semibold mb-1">Compare:</p>
                  <p className="text-xs text-gray-800 dark:text-gray-200">
                    The exact value is ∫<sub>0</sub><sup>4</sup> x² dx = [x³/3]<sub>0</sub><sup>4</sup> = 64/3 ≈ 21.33
                    <br />Our approximation: 14 (underestimate because x² is increasing)
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 2: Right Riemann Sum</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Approximate ∫<sub>0</sub><sup>4</sup> x² dx using a Right Riemann Sum with n = 4 rectangles.
            </p>

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors mb-3"
            >
              {showExample2 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showExample2 && (
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border border-purple-200 dark:border-purple-700 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 1: Δx = 1 (same as before)</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 2: Identify right endpoints</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    x₁ = 1, x₂ = 2, x₃ = 3, x₄ = 4
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 3: Evaluate f(x) = x²</p>
                  <div className="text-sm font-mono text-gray-800 dark:text-gray-200 space-y-1">
                    <p>f(1) = 1² = 1</p>
                    <p>f(2) = 2² = 4</p>
                    <p>f(3) = 3² = 9</p>
                    <p>f(4) = 4² = 16</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 4: Compute Riemann Sum</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    R₄ = 1 · [1 + 4 + 9 + 16]
                  </p>
                  <p className="text-sm font-mono font-bold text-purple-700 dark:text-purple-300 mt-2">
                    R₄ = 30
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-xs text-gray-900 dark:text-gray-100 font-semibold mb-1">Compare:</p>
                  <p className="text-xs text-gray-800 dark:text-gray-200">
                    Exact value: 21.33 | Left: 14 (under) | Right: 30 (over)
                    <br />The true value is between the left and right estimates!
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 3: Midpoint Riemann Sum</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Approximate ∫<sub>0</sub><sup>4</sup> x² dx using a Midpoint Riemann Sum with n = 4 rectangles.
            </p>

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="px-4 py-2 bg-green-600 dark:bg-green-500 text-white rounded hover:bg-green-700 dark:hover:bg-green-600 transition-colors mb-3"
            >
              {showExample3 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showExample3 && (
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-200 dark:border-green-700 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 1: Δx = 1</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 2: Find midpoints</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    x̄₁ = 0.5, x̄₂ = 1.5, x̄₃ = 2.5, x̄₄ = 3.5
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 3: Evaluate f(x) = x²</p>
                  <div className="text-sm font-mono text-gray-800 dark:text-gray-200 space-y-1">
                    <p>f(0.5) = 0.25</p>
                    <p>f(1.5) = 2.25</p>
                    <p>f(2.5) = 6.25</p>
                    <p>f(3.5) = 12.25</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 4: Compute Riemann Sum</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    M₄ = 1 · [0.25 + 2.25 + 6.25 + 12.25]
                  </p>
                  <p className="text-sm font-mono font-bold text-green-700 dark:text-green-300 mt-2">
                    M₄ = 21
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-xs text-gray-900 dark:text-gray-100 font-semibold mb-1">Best Approximation:</p>
                  <p className="text-xs text-gray-800 dark:text-gray-200">
                    Exact: 21.33 | Left: 14 | Right: 30 | <strong>Midpoint: 21</strong>
                    <br />The midpoint method is closest to the exact value!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: The Formal Definition */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">
            3. The Formal Definition of the Riemann Integral
          </h2>

          <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/40 dark:to-red-900/40 p-6 rounded-lg border-2 border-orange-400 dark:border-orange-600 mb-4">
            <h3 className="font-bold text-xl mb-4 text-orange-900 dark:text-orange-200 text-center">
              The Limit Definition
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100 mb-3">
                ∫<sub>a</sub><sup>b</sup> f(x) dx = lim<sub>n→∞</sub> Σ<sub>i=1</sub><sup>n</sup> f(xᵢ) · Δx
              </p>
              <p className="text-center text-sm text-gray-700 dark:text-gray-300 mt-3">
                where Δx = (b - a) / n and xᵢ is a sample point in the i-th subinterval
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">What This Means:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li className="flex items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mr-2">1.</span>
                <span>Divide [a, b] into n subintervals, each of width Δx = (b - a) / n</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mr-2">2.</span>
                <span>In each subinterval, choose a sample point xᵢ (could be left, right, or midpoint)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mr-2">3.</span>
                <span>Form the Riemann sum: Σ f(xᵢ) · Δx</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mr-2">4.</span>
                <span>Take the limit as n → ∞ (rectangles become infinitely thin)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mr-2">5.</span>
                <span>If this limit exists and is the same regardless of choice of sample points, f is <strong>integrable</strong></span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Why It Works:</h4>
              <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-2">
                <li>✓ As n increases, rectangles get thinner</li>
                <li>✓ Approximation becomes more accurate</li>
                <li>✓ In the limit, we get the exact area</li>
                <li>✓ This is why integration gives exact areas</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Connection to FTC:</h4>
              <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-2">
                <li>✓ Riemann sums define what integration means</li>
                <li>✓ FTC provides an easier way to compute it</li>
                <li>✓ Instead of taking limits, find antiderivatives</li>
                <li>✓ Both methods give the same answer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Increasing Accuracy */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">
            4. How Accuracy Improves with n
          </h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">For ∫<sub>0</sub><sup>4</sup> x² dx (exact value ≈ 21.33):</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-orange-100 dark:bg-orange-900/30">
                  <tr>
                    <th className="px-3 py-2 text-left text-gray-900 dark:text-gray-100">n (rectangles)</th>
                    <th className="px-3 py-2 text-right text-gray-900 dark:text-gray-100">Left</th>
                    <th className="px-3 py-2 text-right text-gray-900 dark:text-gray-100">Right</th>
                    <th className="px-3 py-2 text-right text-gray-900 dark:text-gray-100">Midpoint</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-3 py-2">4</td>
                    <td className="px-3 py-2 text-right font-mono">14.00</td>
                    <td className="px-3 py-2 text-right font-mono">30.00</td>
                    <td className="px-3 py-2 text-right font-mono">21.00</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-3 py-2">8</td>
                    <td className="px-3 py-2 text-right font-mono">17.50</td>
                    <td className="px-3 py-2 text-right font-mono">25.50</td>
                    <td className="px-3 py-2 text-right font-mono">21.25</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-3 py-2">16</td>
                    <td className="px-3 py-2 text-right font-mono">19.44</td>
                    <td className="px-3 py-2 text-right font-mono">23.44</td>
                    <td className="px-3 py-2 text-right font-mono">21.31</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-3 py-2">100</td>
                    <td className="px-3 py-2 text-right font-mono">21.09</td>
                    <td className="px-3 py-2 text-right font-mono">21.57</td>
                    <td className="px-3 py-2 text-right font-mono">21.33</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-900/20 font-bold">
                    <td className="px-3 py-2">∞ (exact)</td>
                    <td className="px-3 py-2 text-right font-mono text-green-700 dark:text-green-300">21.33</td>
                    <td className="px-3 py-2 text-right font-mono text-green-700 dark:text-green-300">21.33</td>
                    <td className="px-3 py-2 text-right font-mono text-green-700 dark:text-green-300">21.33</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 text-center">
              Notice how all three methods converge to the same value as n increases!
            </p>
          </div>
        </div>

        {/* Section 5: The Trapezoidal Rule */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">
            5. The Trapezoidal Rule
          </h2>

          <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500 dark:border-amber-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">A Better Approximation:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Instead of rectangles, use <strong>trapezoids</strong> to approximate the area. This often gives
              better accuracy than left or right Riemann sums.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-center text-lg font-mono text-gray-900 dark:text-gray-100 mb-2">
                T<sub>n</sub> = (Δx/2) · [f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]
              </p>
              <p className="text-center text-xs text-gray-600 dark:text-gray-400 mt-2">
                First and last terms have coefficient 1, all others have coefficient 2
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-gray-300 dark:border-gray-600">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Trapezoid vs Rectangle:</h4>
            <div className="grid md:grid-cols-2 gap-3 text-xs">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                <p className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Rectangle (Riemann):</p>
                <p className="text-gray-700 dark:text-gray-300">Uses one height per interval (left, right, or midpoint)</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded">
                <p className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Trapezoid:</p>
                <p className="text-gray-700 dark:text-gray-300">Uses both endpoints, averages them (better for curves)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problem */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">Practice Problem</h2>

          <div className="bg-white dark:bg-gray-800 p-5 rounded border-2 border-orange-300 dark:border-orange-600">
            <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">Problem:</p>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Use a Right Riemann Sum with n = 5 to approximate ∫<sub>1</sub><sup>6</sup> (2x) dx
            </p>

            <button
              onClick={() => setShowPractice1(!showPractice1)}
              className="px-4 py-2 bg-orange-600 dark:bg-orange-500 text-white rounded hover:bg-orange-700 dark:hover:bg-orange-600 transition-colors text-sm"
            >
              {showPractice1 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showPractice1 && (
              <div className="mt-4 bg-orange-50 dark:bg-orange-900/20 p-4 rounded border border-orange-200 dark:border-orange-700 space-y-2">
                <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                  Δx = (6 - 1) / 5 = 1
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Right endpoints: x₁=2, x₂=3, x₃=4, x₄=5, x₅=6
                </p>
                <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                  f(2)=4, f(3)=6, f(4)=8, f(5)=10, f(6)=12
                </p>
                <p className="text-sm font-mono text-gray-800 dark:text-gray-200 mt-2">
                  R₅ = 1 · [4 + 6 + 8 + 10 + 12]
                </p>
                <p className="text-sm font-mono font-bold text-orange-700 dark:text-orange-300">
                  R₅ = 40
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  (Exact: [x²]₁⁶ = 36 - 1 = 35, so we overestimated by 5)
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 p-6 rounded-lg border-2 border-orange-300 dark:border-orange-600">
          <h2 className="text-2xl font-bold mb-4 text-orange-900 dark:text-orange-200">Key Takeaways</h2>
          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Riemann sums approximate areas using rectangles: left, right, or midpoint</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>As n → ∞, Riemann sums converge to the exact integral value</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Midpoint sums typically give better approximations than left or right</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>The trapezoidal rule uses trapezoids instead of rectangles for better accuracy</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Riemann sums provide the formal definition: ∫<sub>a</sub><sup>b</sup> f(x) dx = lim<sub>n→∞</sub> Σ f(xᵢ)·Δx</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>The Fundamental Theorem of Calculus makes computing integrals much easier than using limits</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RiemannSums;
