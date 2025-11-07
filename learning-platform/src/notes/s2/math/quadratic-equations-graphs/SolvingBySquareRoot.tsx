import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function SolvingBySquareRoot() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Solving by Taking Square Roots</h1>
        <p className="mt-2 text-emerald-100">Learn to solve quadratics using the square root method</p>
      </div>

      <div className="bg-white dark:bg-gray-800 px-6 pb-6 rounded-b-lg">

        {/* Section 1: Pure Quadratics */}
        <section className="mb-8 mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Solving Pure Quadratics (x² = k)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The simplest quadratic equations have the form <MathText>x² = k</MathText>. These can be solved by taking the square root of both sides.
            </p>

            {/* Visual: Square Root Principle */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border-2 border-emerald-400 dark:border-emerald-500 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-4 text-center text-lg">
                Square Root Principle
              </h3>
              <div className="text-center space-y-3">
                <div className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">
                  <p className="mb-2">If <MathText>x² = k</MathText></p>
                  <p className="text-3xl">then</p>
                  <p className="mt-2"><MathText>x = ±√k</MathText></p>
                </div>
                <p className="text-emerald-700 dark:text-emerald-300 text-sm italic">(when k ≥ 0)</p>
              </div>
            </div>

            {/* Visual: Why ± ? */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-500 p-5 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center">
                <span className="text-2xl mr-2">🤔</span>
                Why do we need the ± symbol?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-green-400 dark:border-green-500">
                  <p className="font-semibold text-green-700 dark:text-green-300 mb-2">Positive root:</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">If <MathText>x = 5</MathText></p>
                  <p className="text-gray-700 dark:text-gray-300">then <MathText>x² = 5 × 5 = 25 ✓</MathText></p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-green-400 dark:border-green-500">
                  <p className="font-semibold text-green-700 dark:text-green-300 mb-2">Negative root:</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">If <MathText>x = -5</MathText></p>
                  <p className="text-gray-700 dark:text-gray-300">then <MathText>x² = (-5) × (-5) = 25 ✓</MathText></p>
                </div>
              </div>
              <p className="text-blue-700 dark:text-blue-300 mt-3 text-center italic">
                Both positive and negative values give the same square!
              </p>
            </div>

            {/* Visual: Three Cases */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Three Possible Cases:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Case 1: k > 0 */}
                <div className="bg-green-50 dark:bg-green-900/30 border-2 border-green-500 dark:border-green-400 p-4 rounded-lg">
                  <div className="text-center mb-2">
                    <span className="text-3xl">✓✓</span>
                  </div>
                  <p className="font-semibold text-green-800 dark:text-green-300 text-center mb-2">k &gt; 0</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 text-center mb-2">Two real solutions</p>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Example:</p>
                    <p className="text-sm"><MathText>x² = 9</MathText></p>
                    <p className="text-sm"><MathText>x = ±3</MathText></p>
                    <p className="text-xs text-green-700 dark:text-green-400 mt-1">x = 3 or x = −3</p>
                  </div>
                </div>

                {/* Case 2: k = 0 */}
                <div className="bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500 dark:border-blue-400 p-4 rounded-lg">
                  <div className="text-center mb-2">
                    <span className="text-3xl">✓</span>
                  </div>
                  <p className="font-semibold text-blue-800 dark:text-blue-300 text-center mb-2">k = 0</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 text-center mb-2">One solution</p>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Example:</p>
                    <p className="text-sm"><MathText>x² = 0</MathText></p>
                    <p className="text-sm"><MathText>x = 0</MathText></p>
                    <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">Only one value</p>
                  </div>
                </div>

                {/* Case 3: k < 0 */}
                <div className="bg-red-50 dark:bg-red-900/30 border-2 border-red-500 dark:border-red-400 p-4 rounded-lg">
                  <div className="text-center mb-2">
                    <span className="text-3xl">✗</span>
                  </div>
                  <p className="font-semibold text-red-800 dark:text-red-300 text-center mb-2">k &lt; 0</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 text-center mb-2">No real solution</p>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Example:</p>
                    <p className="text-sm"><MathText>x² = -9</MathText></p>
                    <p className="text-sm"><MathText>x = √(-9)</MathText></p>
                    <p className="text-xs text-red-700 dark:text-red-400 mt-1">No real answer!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 1 - Visual */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 1: Solving x² = 49
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  {/* Visual step diagram */}
                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg w-full text-center">
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-xl"><MathText>x² = 49</MathText></p>
                    </div>

                    <div className="text-emerald-600 dark:text-emerald-400 font-semibold">↓ Take square root of both sides</div>

                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg w-full text-center">
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-xl"><MathText>x = ±√49</MathText></p>
                    </div>

                    <div className="text-emerald-600 dark:text-emerald-400 font-semibold">↓ Simplify √49 = 7</div>

                    <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded-lg w-full border-2 border-green-500 dark:border-green-400">
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-xl text-center"><MathText>x = ±7</MathText></p>
                      <p className="text-green-700 dark:text-green-300 text-sm text-center mt-2">
                        This means: x = 7 or x = −7
                      </p>
                    </div>
                  </div>

                  {/* Verification */}
                  <div className="border-t-2 border-blue-200 dark:border-blue-700 pt-3 mt-4">
                    <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Check both solutions:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                        <p className="text-sm text-gray-700 dark:text-gray-300">If x = 7:</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300"><MathText>7² = 49 ✓</MathText></p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                        <p className="text-sm text-gray-700 dark:text-gray-300">If x = −7:</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300"><MathText>(-7)² = 49 ✓</MathText></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 2 - Exact Form */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 2: Solving x² = 12 (Exact Form)
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg w-full text-center">
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-xl"><MathText>x² = 12</MathText></p>
                    </div>

                    <div className="text-emerald-600 dark:text-emerald-400 font-semibold">↓ Take square root</div>

                    <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded-lg w-full border-2 border-green-500 dark:border-green-400">
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-xl text-center"><MathText>{'x = ±√12'}</MathText></p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-400 dark:border-yellow-500 p-3 rounded mt-3">
                    <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-2">💡 Tip: Simplifying Radicals</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      √12 can be simplified because 12 = 4 × 3
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <MathText>{'√12 = √(4×3) = √4 × √3 = 2√3'}</MathText>
                    </p>
                    <p className="text-sm font-semibold text-green-700 dark:text-green-300 mt-2">
                      Better answer: <MathText>{'x = ±2√3'}</MathText>
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded border border-gray-300 dark:border-gray-600">
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Exact form:</p>
                      <p className="text-gray-700 dark:text-gray-300 font-semibold"><MathText>{'x = ±2√3'}</MathText></p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded border border-gray-300 dark:border-gray-600">
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Decimal (approx):</p>
                      <p className="text-gray-700 dark:text-gray-300 font-semibold">x ≈ ±3.46</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 3 - No Solution */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 3: Solving x² + 16 = 0
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg w-full text-center">
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-xl"><MathText>x² + 16 = 0</MathText></p>
                    </div>

                    <div className="text-emerald-600 dark:text-emerald-400 font-semibold">↓ Subtract 16 from both sides</div>

                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg w-full text-center">
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-xl"><MathText>x² = -16</MathText></p>
                    </div>

                    <div className="text-red-600 dark:text-red-400 font-semibold">↓ k is negative!</div>

                    <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded-lg w-full border-2 border-red-500 dark:border-red-400">
                      <p className="text-red-800 dark:text-red-300 font-bold text-center text-xl">
                        No real solution
                      </p>
                      <p className="text-red-700 dark:text-red-400 text-sm text-center mt-2">
                        Cannot take square root of negative number
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Solve x² = 100
            </h3>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>x² = 100</MathText></p>
                  <p><MathText>x = ±√100</MathText></p>
                  <p><MathText>x = ±10</MathText></p>
                  <p className="font-semibold text-green-700 dark:text-green-300 mt-3">
                    ✓ Solutions: x = 10 or x = −10
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Solve x² = 20 (Leave in exact form)
            </h3>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>x² = 20</MathText></p>
                  <p><MathText>{'x = ±√20'}</MathText></p>
                  <p className="text-sm mt-2">Simplify: 20 = 4 × 5</p>
                  <p><MathText>{'√20 = √(4×5) = √4 × √5 = 2√5'}</MathText></p>
                  <p className="font-semibold text-green-700 dark:text-green-300 mt-3">
                    <MathText>{'✓ x = ±2√5'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Solving ax² = k */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Solving ax² = k (with coefficient)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When the x² term has a coefficient other than 1, we first divide both sides by that coefficient to isolate x².
            </p>

            {/* Visual: Process */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border-2 border-indigo-400 dark:border-indigo-500 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-4 text-center">
                Two-Step Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-indigo-400 dark:border-indigo-500">
                  <div className="text-center mb-2">
                    <div className="bg-indigo-600 dark:bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mx-auto mb-2">1</div>
                    <p className="font-semibold text-indigo-800 dark:text-indigo-300">Isolate x²</p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                    Divide both sides by the coefficient a
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded mt-2 text-center">
                    <MathText>{'ax² = k → x² = k/a'}</MathText>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-indigo-400 dark:border-indigo-500">
                  <div className="text-center mb-2">
                    <div className="bg-indigo-600 dark:bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mx-auto mb-2">2</div>
                    <p className="font-semibold text-indigo-800 dark:text-indigo-300">Take Square Root</p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                    Apply the square root principle
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded mt-2 text-center">
                    <MathText>{'x² = k/a → x = ±√(k/a)'}</MathText>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 4 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 4: Solving 4x² = 64
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg w-full text-center">
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-xl"><MathText>4x² = 64</MathText></p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Coefficient a = 4</p>
                    </div>

                    <div className="text-indigo-600 dark:text-indigo-400 font-semibold">↓ Divide both sides by 4</div>

                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg w-full text-center">
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-xl"><MathText>x² = 16</MathText></p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Isolated x²</p>
                    </div>

                    <div className="text-emerald-600 dark:text-emerald-400 font-semibold">↓ Take square root</div>

                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg w-full text-center">
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-xl"><MathText>x = ±√16</MathText></p>
                    </div>

                    <div className="text-emerald-600 dark:text-emerald-400 font-semibold">↓ Simplify</div>

                    <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded-lg w-full border-2 border-green-500 dark:border-green-400">
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-xl text-center"><MathText>x = ±4</MathText></p>
                      <p className="text-green-700 dark:text-green-300 text-sm text-center mt-2">
                        Solutions: x = 4 or x = −4
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 5 - Starting from not standard */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 5: Solving 3x² - 12 = 0
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg w-full text-center">
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-xl"><MathText>3x² - 12 = 0</MathText></p>
                    </div>

                    <div className="text-purple-600 dark:text-purple-400 font-semibold">↓ Add 12 to both sides</div>

                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg w-full text-center">
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-xl"><MathText>3x² = 12</MathText></p>
                    </div>

                    <div className="text-indigo-600 dark:text-indigo-400 font-semibold">↓ Divide by 3</div>

                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg w-full text-center">
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-xl"><MathText>x² = 4</MathText></p>
                    </div>

                    <div className="text-emerald-600 dark:text-emerald-400 font-semibold">↓ Take square root</div>

                    <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded-lg w-full border-2 border-green-500 dark:border-green-400">
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-xl text-center"><MathText>x = ±2</MathText></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Solve 2x² = 50
            </h3>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>2x² = 50</MathText></p>
                  <p>Divide by 2: <MathText>x² = 25</MathText></p>
                  <p>Take square root: <MathText>x = ±√25</MathText></p>
                  <p className="font-semibold text-green-700 dark:text-green-300 mt-3">
                    ✓ x = ±5 (x = 5 or x = −5)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Solve 5x² - 20 = 0
            </h3>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>5x² - 20 = 0</MathText></p>
                  <p>Add 20: <MathText>5x² = 20</MathText></p>
                  <p>Divide by 5: <MathText>x² = 4</MathText></p>
                  <p>Take square root: <MathText>x = ±2</MathText></p>
                  <p className="font-semibold text-green-700 dark:text-green-300 mt-3">
                    ✓ x = 2 or x = −2
                  </p>
                </div>
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
            <li>If <MathText>x² = k</MathText>, then <MathText>x = ±√k</MathText> (remember both positive and negative roots!)</li>
            <li>If k &gt; 0: two real solutions</li>
            <li>If k = 0: one solution (x = 0)</li>
            <li>If k &lt; 0: no real solutions</li>
            <li>For <MathText>ax² = k</MathText>, first divide by a to get <MathText>{'x² = k/a'}</MathText>, then take square root</li>
            <li>Always simplify radicals when possible (e.g., √12 = 2√3)</li>
            <li>Check your solutions by substituting back into the original equation</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
