import React, { useState } from 'react';

const SignDiagrams = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Sign Diagrams</h1>
        <p className="text-lg">Understanding where functions are positive, negative, zero, or undefined</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Creating Sign Diagrams */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. Creating Sign Diagrams</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What is a Sign Diagram?</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              A <strong>sign diagram</strong> is a number line which indicates the values of <strong>x</strong> for which a function is:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li><strong>Positive (+)</strong> - above the x-axis</li>
              <li><strong>Negative (−)</strong> - below the x-axis</li>
              <li><strong>Zero (0)</strong> - on the x-axis</li>
              <li><strong>Undefined</strong> - does not exist at that x-value</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Components of a Sign Diagram:</h3>
            <div className="space-y-3">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <div className="flex items-center justify-center">
                  <div className="flex-1 max-w-2xl">
                    <div className="flex items-center">
                      <div className="flex-1 h-1 bg-gray-800 dark:bg-gray-300"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-800 dark:bg-gray-300 mx-8"></div>
                      <div className="flex-1 h-1 bg-gray-800 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-900 dark:text-gray-100">
                      <span>−</span>
                      <span>0</span>
                      <span>+</span>
                    </div>
                    <div className="text-center mt-4 text-xs text-gray-600 dark:text-gray-400">
                      <p>← horizontal line (x-axis)</p>
                      <p>solid dot • = zero (function equals 0)</p>
                      <p>dashed mark | = undefined</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded border border-red-300 dark:border-red-600">
                  <p className="font-bold text-red-700 dark:text-red-300 mb-1">Negative (−)</p>
                  <p className="text-gray-700 dark:text-gray-300">Function is below x-axis</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">f(x) &lt; 0</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded border border-blue-300 dark:border-blue-600">
                  <p className="font-bold text-blue-700 dark:text-blue-300 mb-1">Zero (0)</p>
                  <p className="text-gray-700 dark:text-gray-300">Function crosses x-axis</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">f(x) = 0 (solid •)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-300 dark:border-green-600">
                  <p className="font-bold text-green-700 dark:text-green-300 mb-1">Positive (+)</p>
                  <p className="text-gray-700 dark:text-gray-300">Function is above x-axis</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">f(x) > 0</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded border-2 border-indigo-300 dark:border-indigo-600 mb-4">
            <h3 className="font-bold text-indigo-700 dark:text-indigo-300 mb-3">Critical Values:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              <strong>Critical values</strong> are the x-values where:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li>The function equals <strong>zero</strong> (x-intercepts) - marked with a solid dot •</li>
              <li>The function is <strong>undefined</strong> - marked with a dashed line |</li>
            </ul>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
              These are the points where the sign of the function may change.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example Sign Diagram:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              For the function y = f(x) with x-intercepts at x = 1, 2, and 3:
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded">
              <div className="flex items-center justify-center mb-2">
                <div className="flex-1 max-w-3xl">
                  <div className="relative">
                    {/* Number line */}
                    <div className="flex items-center">
                      <div className="flex-1 h-1 bg-gray-800 dark:bg-gray-300"></div>
                    </div>
                    {/* Marks */}
                    <div className="flex justify-between mt-2 px-12 text-gray-900 dark:text-gray-100">
                      <div className="text-center">
                        <div className="w-3 h-3 rounded-full bg-gray-800 dark:bg-gray-300 mx-auto mb-1"></div>
                        <span className="text-sm">1</span>
                      </div>
                      <div className="text-center">
                        <div className="w-3 h-3 rounded-full bg-gray-800 dark:bg-gray-300 mx-auto mb-1"></div>
                        <span className="text-sm">2</span>
                      </div>
                      <div className="text-center">
                        <div className="w-3 h-3 rounded-full bg-gray-800 dark:bg-gray-300 mx-auto mb-1"></div>
                        <span className="text-sm">3</span>
                      </div>
                    </div>
                    {/* Signs */}
                    <div className="flex justify-between px-4 mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
                      <span className="flex-1 text-center text-red-600 dark:text-red-400">−</span>
                      <span className="flex-1 text-center text-green-600 dark:text-green-400">+</span>
                      <span className="flex-1 text-center text-red-600 dark:text-red-400">−</span>
                      <span className="flex-1 text-center text-green-600 dark:text-green-400">+</span>
                    </div>
                    <div className="text-center mt-4 text-xs text-gray-600 dark:text-gray-400">
                      <p>The corresponding sign diagram</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Sign Changes and Powers */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Sign Changes and Powers</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">When Does the Sign Change?</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              When a linear factor of a function has:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li><strong>Odd power:</strong> There IS a change of sign about the corresponding critical value</li>
              <li><strong>Even power:</strong> There is NO change of sign about the corresponding critical value</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
              <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Odd Power (Sign Changes):</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-mono mb-1 text-gray-900 dark:text-gray-100">f(x) = (x − 3)</p>
                  <p className="text-gray-700 dark:text-gray-300">Power: 1 (odd)</p>
                  <div className="mt-2 bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    <div className="flex items-center justify-center">
                      <span className="text-red-600 dark:text-red-400 mr-4">−</span>
                      <span className="text-gray-900 dark:text-gray-100">|</span>
                      <span className="text-gray-900 dark:text-gray-100 mx-2">3</span>
                      <span className="text-gray-900 dark:text-gray-100">|</span>
                      <span className="text-green-600 dark:text-green-400 ml-4">+</span>
                    </div>
                    <p className="text-center text-xs text-green-600 dark:text-green-400 mt-1">Sign CHANGES at x = 3</p>
                  </div>
                </div>

                <div>
                  <p className="font-mono mb-1 text-gray-900 dark:text-gray-100">f(x) = (x + 1)³</p>
                  <p className="text-gray-700 dark:text-gray-300">Power: 3 (odd)</p>
                  <div className="mt-2 bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    <div className="flex items-center justify-center">
                      <span className="text-red-600 dark:text-red-400 mr-4">−</span>
                      <span className="text-gray-900 dark:text-gray-100">|</span>
                      <span className="text-gray-900 dark:text-gray-100 mx-2">−1</span>
                      <span className="text-gray-900 dark:text-gray-100">|</span>
                      <span className="text-green-600 dark:text-green-400 ml-4">+</span>
                    </div>
                    <p className="text-center text-xs text-green-600 dark:text-green-400 mt-1">Sign CHANGES at x = −1</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-purple-300 dark:border-purple-600">
              <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Even Power (No Sign Change):</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-mono mb-1 text-gray-900 dark:text-gray-100">f(x) = (x − 2)²</p>
                  <p className="text-gray-700 dark:text-gray-300">Power: 2 (even)</p>
                  <div className="mt-2 bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    <div className="flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 mr-4">+</span>
                      <span className="text-gray-900 dark:text-gray-100">|</span>
                      <span className="text-gray-900 dark:text-gray-100 mx-2">2</span>
                      <span className="text-gray-900 dark:text-gray-100">|</span>
                      <span className="text-green-600 dark:text-green-400 ml-4">+</span>
                    </div>
                    <p className="text-center text-xs text-purple-600 dark:text-purple-400 mt-1">Sign STAYS SAME at x = 2</p>
                  </div>
                </div>

                <div>
                  <p className="font-mono mb-1 text-gray-900 dark:text-gray-100">f(x) = 3(x + 2)²</p>
                  <p className="text-gray-700 dark:text-gray-300">Power: 2 (even)</p>
                  <div className="mt-2 bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    <div className="flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 mr-4">+</span>
                      <span className="text-gray-900 dark:text-gray-100">|</span>
                      <span className="text-gray-900 dark:text-gray-100 mx-2">−2</span>
                      <span className="text-gray-900 dark:text-gray-100">|</span>
                      <span className="text-green-600 dark:text-green-400 ml-4">+</span>
                    </div>
                    <p className="text-center text-xs text-purple-600 dark:text-purple-400 mt-1">Sign STAYS SAME at x = −2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-200">Key Rule:</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p>• <strong>Odd power (1, 3, 5, ...):</strong> Graph <em>crosses</em> the x-axis → sign changes</p>
              <p>• <strong>Even power (2, 4, 6, ...):</strong> Graph <em>touches</em> the x-axis → sign stays the same</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Complex Example:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              For f(x) = (x − 3)(x + 2)², the sign diagram is:
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded space-y-3">
              <div>
                <p className="text-sm mb-2 text-gray-800 dark:text-gray-200"><strong>Step 1: Find critical values</strong></p>
                <p className="text-sm text-gray-700 dark:text-gray-300">• (x − 3) = 0 → x = 3 (power 1, odd)</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">• (x + 2)² = 0 → x = −2 (power 2, even)</p>
              </div>
              <div>
                <p className="text-sm mb-2 text-gray-800 dark:text-gray-200"><strong>Step 2: Check sign in each region</strong></p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Test x = −3: f(−3) = (−6)(1) < 0 → negative</p>
              </div>
              <div>
                <p className="text-sm mb-2 text-gray-800 dark:text-gray-200"><strong>Step 3: Apply power rules</strong></p>
                <div className="flex items-center justify-center mt-2">
                  <div className="flex-1 max-w-2xl">
                    <div className="flex items-center justify-between px-8 text-gray-900 dark:text-gray-100">
                      <span className="text-red-600 dark:text-red-400 font-bold">−</span>
                      <div className="text-center">
                        <div className="w-3 h-3 rounded-full bg-gray-800 dark:bg-gray-300 mx-auto"></div>
                        <span className="text-sm">−2</span>
                        <p className="text-xs text-purple-600 dark:text-purple-400">even: same</p>
                      </div>
                      <span className="text-red-600 dark:text-red-400 font-bold">−</span>
                      <div className="text-center">
                        <div className="w-3 h-3 rounded-full bg-gray-800 dark:bg-gray-300 mx-auto"></div>
                        <span className="text-sm">3</span>
                        <p className="text-xs text-blue-600 dark:text-blue-400">odd: change</p>
                      </div>
                      <span className="text-green-600 dark:text-green-400 font-bold">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Drawing a Sign Diagram
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Draw a sign diagram for f(x) = (x + 1)/(x − 2)
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Step 1: Find critical values</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">• Numerator: x + 1 = 0 → x = −1 (zero)</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">• Denominator: x − 2 = 0 → x = 2 (undefined)</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Step 2: Test signs in each region</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">• x < −1: Try x = −2: f(−2) = (−1)/(−4) = + (positive)</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">• −1 < x < 2: Try x = 0: f(0) = (1)/(−2) = − (negative)</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">• x > 2: Try x = 3: f(3) = (4)/(1) = + (positive)</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Step 3: Draw sign diagram</p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <div className="flex items-center justify-center">
                        <div className="flex-1 max-w-2xl">
                          <div className="flex items-center justify-between px-8 text-gray-900 dark:text-gray-100">
                            <span className="text-green-600 dark:text-green-400 font-bold">+</span>
                            <div className="text-center">
                              <div className="w-3 h-3 rounded-full bg-gray-800 dark:bg-gray-300 mx-auto"></div>
                              <span className="text-sm">−1</span>
                            </div>
                            <span className="text-red-600 dark:text-red-400 font-bold">−</span>
                            <div className="text-center">
                              <div className="w-0.5 h-4 bg-gray-800 dark:bg-gray-300 mx-auto"></div>
                              <span className="text-sm">2</span>
                            </div>
                            <span className="text-green-600 dark:text-green-400 font-bold">+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Sign Diagram with Powers
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  For f(x) = 3(x + 2)², explain why the sign diagram is all positive except at x = −2
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Analysis:</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      • The factor (x + 2)² has an <strong>even power (2)</strong>
                    </p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      • This means the sign does NOT change at x = −2
                    </p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      • The coefficient 3 is positive
                    </p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      • (x + 2)² is always ≥ 0 (squares are never negative)
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Sign Diagram:</p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <div className="flex items-center justify-center">
                        <div className="flex-1 max-w-xl">
                          <div className="flex items-center justify-between px-8 text-gray-900 dark:text-gray-100">
                            <span className="text-green-600 dark:text-green-400 font-bold">+</span>
                            <div className="text-center">
                              <div className="w-3 h-3 rounded-full bg-gray-800 dark:bg-gray-300 mx-auto"></div>
                              <span className="text-sm">−2</span>
                            </div>
                            <span className="text-green-600 dark:text-green-400 font-bold">+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-center text-purple-600 dark:text-purple-400 mt-2">
                      Even power → no sign change, stays positive on both sides
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. Draw sign diagrams for each function:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) f(x) = x − 5</p>
                <p>b) f(x) = (x − 1)(x + 3)</p>
                <p>c) f(x) = (x + 2)²(x − 1)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-3 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> Zeros at x = 5: negative for x < 5, positive for x > 5</p>
                  <p><strong>b)</strong> Zeros at x = 1 and x = −3: + | −3 | − | 1 | +</p>
                  <p><strong>c)</strong> Zero at x = −2 (even, no change), x = 1 (odd, change): + | −2 | + | 1 | +</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. For f(x) = 2/(4 − x):
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) For what value of x is f(x) undefined?</p>
                <p>b) Draw the sign diagram</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> Undefined when 4 − x = 0 → x = 4</p>
                  <p><strong>b)</strong> Sign diagram: + | 4 | − (positive for x < 4, undefined at x = 4, negative for x > 4)</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li>A <strong>sign diagram</strong> shows where a function is positive (+), negative (−), zero (•), or undefined (|)</li>
            <li><strong>Critical values</strong> are x-values where the function is zero or undefined</li>
            <li>Mark zeros with a <strong>solid dot (•)</strong> and undefined points with a <strong>dashed line (|)</strong></li>
            <li><strong>Odd powers</strong> (1, 3, 5...) cause sign changes at critical values</li>
            <li><strong>Even powers</strong> (2, 4, 6...) do NOT cause sign changes</li>
            <li>Test a point in each region to determine if it's positive or negative</li>
            <li>The horizontal line represents the <strong>x-axis</strong></li>
            <li>Sign diagrams help visualize where graphs are above/below the x-axis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SignDiagrams;
