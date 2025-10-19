import React, { useState } from 'react';

const AbsoluteValueFunction = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [inputValue, setInputValue] = useState(5);

  // Calculate absolute value
  const absValue = Math.abs(inputValue);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Absolute Value Function</h1>
        <p className="text-lg">Understanding the absolute value (modulus) and its graphical representation</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Understanding Absolute Value */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. Understanding Absolute Value</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The <strong>absolute value</strong> or <strong>modulus</strong> of a real number <em>x</em> is its <strong>distance from 0</strong> on the number line.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              We write the absolute value of x as <strong>|x|</strong>.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Key Properties:</h3>
            <div className="space-y-3">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Distance Interpretation:</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Since absolute value represents distance, it <strong>cannot be negative</strong>.
                </p>
                <p className="text-center mt-3 font-mono text-lg text-gray-900 dark:text-gray-100">|x| ≥ 0 for all x</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border border-green-300 dark:border-green-600">
                  <p className="font-semibold mb-2 text-green-700 dark:text-green-300">For Positive Numbers:</p>
                  <p className="text-sm mb-2 text-gray-800 dark:text-gray-200">If <strong>x ≥ 0</strong>, then <strong>|x| = x</strong></p>
                  <div className="space-y-1 text-xs font-mono text-gray-700 dark:text-gray-300">
                    <p>|5| = 5</p>
                    <p>|0| = 0</p>
                    <p>|3.7| = 3.7</p>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border border-red-300 dark:border-red-600">
                  <p className="font-semibold mb-2 text-red-700 dark:text-red-300">For Negative Numbers:</p>
                  <p className="text-sm mb-2 text-gray-800 dark:text-gray-200">If <strong>x < 0</strong>, then <strong>|x| = −x</strong></p>
                  <div className="space-y-1 text-xs font-mono text-gray-700 dark:text-gray-300">
                    <p>|−5| = −(−5) = 5</p>
                    <p>|−2.3| = −(−2.3) = 2.3</p>
                    <p>|−100| = 100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded mb-4 border border-purple-200 dark:border-purple-700">
            <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Interactive: Calculate Absolute Value</p>
            <div className="flex gap-3 items-center mb-3">
              <span className="text-gray-800 dark:text-gray-200">|</span>
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
                className="px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded w-32 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                placeholder="5"
              />
              <span className="text-gray-800 dark:text-gray-200">| = <strong className="text-blue-600 dark:text-blue-400 text-xl">{absValue}</strong></span>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                {inputValue >= 0
                  ? `Since ${inputValue} ≥ 0, the absolute value equals ${inputValue}`
                  : `Since ${inputValue} < 0, the absolute value equals −(${inputValue}) = ${absValue}`
                }
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded border-2 border-indigo-300 dark:border-indigo-600">
            <h3 className="font-bold text-indigo-700 dark:text-indigo-300 mb-3">Number Line Visualization:</h3>
            <p className="mb-3 text-sm text-gray-800 dark:text-gray-200">
              The absolute value represents the distance from zero on the number line:
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded">
              <div className="flex items-center justify-center mb-4">
                <div className="flex-1 max-w-2xl">
                  <div className="relative">
                    {/* Number line */}
                    <div className="flex items-center">
                      <div className="flex-1 h-1 bg-gray-800 dark:bg-gray-300"></div>
                    </div>
                    {/* Marks */}
                    <div className="flex justify-between px-4 mt-2 text-gray-900 dark:text-gray-100">
                      <div className="text-center">
                        <div className="w-2 h-2 rounded-full bg-red-600 mx-auto mb-1"></div>
                        <span className="text-sm">−5</span>
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">|−5| = 5</p>
                      </div>
                      <div className="text-center">
                        <div className="w-3 h-3 rounded-full bg-gray-800 dark:bg-gray-300 mx-auto mb-1"></div>
                        <span className="text-sm">0</span>
                      </div>
                      <div className="text-center">
                        <div className="w-2 h-2 rounded-full bg-green-600 mx-auto mb-1"></div>
                        <span className="text-sm">5</span>
                        <p className="text-xs text-green-600 dark:text-green-400 mt-1">|5| = 5</p>
                      </div>
                    </div>
                    {/* Arrows showing distance */}
                    <div className="mt-6 text-center text-xs text-gray-600 dark:text-gray-400">
                      <p>Both −5 and 5 are <strong>5 units</strong> away from 0</p>
                      <p className="mt-1">Therefore: |−5| = |5| = 5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Graphing Absolute Value */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Graphing Absolute Value Functions</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Basic Absolute Value Function:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The graph of <strong>y = |x|</strong> is a V-shaped graph with its vertex at the origin.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-2xl font-mono mb-3 text-gray-900 dark:text-gray-100">
                y = |x| = {'{'}
                <span className="text-sm align-middle">
                  <span className="inline-block ml-2">x, if x ≥ 0</span><br/>
                  <span className="inline-block ml-8">−x, if x < 0</span>
                </span>
                {'}'}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Characteristics of y = |x|:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Shape:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <li>V-shaped graph</li>
                  <li>Vertex (corner point) at (0, 0)</li>
                  <li>Two straight line segments</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Properties:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <li>Domain: all real numbers (ℝ)</li>
                  <li>Range: y ≥ 0</li>
                  <li>Always positive or zero</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Left side (x < 0):</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <li>Follows y = −x</li>
                  <li>Gradient = −1</li>
                  <li>Decreasing</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Right side (x ≥ 0):</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <li>Follows y = x</li>
                  <li>Gradient = 1</li>
                  <li>Increasing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Table of Values for y = |x|:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded overflow-x-auto">
              <table className="min-w-full text-sm text-center">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-gray-900 dark:text-gray-100">x</th>
                    <th className="px-4 py-2 text-gray-900 dark:text-gray-100">−3</th>
                    <th className="px-4 py-2 text-gray-900 dark:text-gray-100">−2</th>
                    <th className="px-4 py-2 text-gray-900 dark:text-gray-100">−1</th>
                    <th className="px-4 py-2 text-gray-900 dark:text-gray-100">0</th>
                    <th className="px-4 py-2 text-gray-900 dark:text-gray-100">1</th>
                    <th className="px-4 py-2 text-gray-900 dark:text-gray-100">2</th>
                    <th className="px-4 py-2 text-gray-900 dark:text-gray-100">3</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200">
                  <tr className="border-t border-gray-300 dark:border-gray-600">
                    <td className="px-4 py-2 font-semibold">|x|</td>
                    <td className="px-4 py-2">3</td>
                    <td className="px-4 py-2">2</td>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2 font-bold">0</td>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">2</td>
                    <td className="px-4 py-2">3</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-center text-gray-600 dark:text-gray-400 mt-3">
                Notice the symmetry: |−x| = |x| for all x
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">Transformations of Absolute Value Functions:</h3>
            <p className="mb-3 text-sm text-gray-800 dark:text-gray-200">
              Absolute value functions can be transformed just like other functions:
            </p>
            <div className="space-y-3 text-sm">
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-mono mb-1 text-gray-900 dark:text-gray-100">y = |x − h| + k</p>
                <p className="text-gray-700 dark:text-gray-300">Vertex moves to (h, k)</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-mono mb-1 text-gray-900 dark:text-gray-100">y = a|x|</p>
                <p className="text-gray-700 dark:text-gray-300">Vertical stretch/compression by factor |a|. If a < 0, also reflects over x-axis</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-mono mb-1 text-gray-900 dark:text-gray-100">y = |−x| = |x|</p>
                <p className="text-gray-700 dark:text-gray-300">Reflection over y-axis (no change, absolute value is symmetric)</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded border-2 border-indigo-300 dark:border-indigo-600">
            <h3 className="font-bold text-indigo-700 dark:text-indigo-300 mb-3">Important Properties:</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <div className="flex items-start gap-2">
                <span className="text-indigo-600 dark:text-indigo-400">•</span>
                <p><strong>Symmetry:</strong> The graph of y = |x| is symmetric about the y-axis</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-600 dark:text-indigo-400">•</span>
                <p><strong>Non-differentiable:</strong> The graph has a "sharp corner" at x = 0 (not smooth)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-600 dark:text-indigo-400">•</span>
                <p><strong>Always positive:</strong> Output values are always ≥ 0</p>
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
              {showExample1 ? '▼' : '▶'} Example 1: Evaluating Absolute Value Expressions
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Evaluate the following:
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">a) |−7|</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Since −7 < 0, use |x| = −x</p>
                      <p className="font-mono">|−7| = −(−7) = 7</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">b) |5 − 8|</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>First calculate inside: 5 − 8 = −3</p>
                      <p className="font-mono">|−3| = 3</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">c) |−4| + |−2|</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Evaluate each absolute value separately:</p>
                      <p className="font-mono">|−4| = 4, |−2| = 2</p>
                      <p className="font-mono">4 + 2 = 6</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">d) |3| − |−5|</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p className="font-mono">|3| = 3, |−5| = 5</p>
                      <p className="font-mono">3 − 5 = −2</p>
                      <p className="text-xs text-yellow-700 dark:text-yellow-400 mt-1">Note: The result can be negative!</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Graphing Transformations
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Describe how the graph of y = |x| is transformed to create:
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">a) y = |x| + 3</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      Vertical translation <strong>up 3 units</strong><br/>
                      Vertex moves from (0, 0) to (0, 3)
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">b) y = |x − 2|</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      Horizontal translation <strong>right 2 units</strong><br/>
                      Vertex moves from (0, 0) to (2, 0)
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">c) y = 2|x|</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      Vertical stretch by factor 2<br/>
                      Graph becomes steeper (narrower V-shape)<br/>
                      Vertex stays at (0, 0)
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">d) y = −|x|</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      Reflection in the x-axis<br/>
                      V-shape opens downward (∧-shape)<br/>
                      Vertex at (0, 0), range: y ≤ 0
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">e) y = |x + 1| − 2</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      Horizontal translation <strong>left 1 unit</strong> (because x + 1 = x − (−1))<br/>
                      Then vertical translation <strong>down 2 units</strong><br/>
                      Vertex moves to (−1, −2)
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
                1. Evaluate:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) |−12|</p>
                <p>b) |6 − 10|</p>
                <p>c) |−3| × |−4|</p>
                <p>d) ||−5| − |8||</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> 12</p>
                  <p><strong>b)</strong> |−4| = 4</p>
                  <p><strong>c)</strong> 3 × 4 = 12</p>
                  <p><strong>d)</strong> |5 − 8| = |−3| = 3</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. For the function y = |x − 3| + 1:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) What is the vertex?</p>
                <p>b) What is the domain?</p>
                <p>c) What is the range?</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> Vertex: (3, 1)</p>
                  <p><strong>b)</strong> Domain: all real numbers (−∞, ∞) or ℝ</p>
                  <p><strong>c)</strong> Range: y ≥ 1 or [1, ∞)</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>Absolute value</strong> |x| represents the distance from 0, so it's always ≥ 0</li>
            <li>If x ≥ 0, then |x| = x; if x < 0, then |x| = −x</li>
            <li>The graph of <strong>y = |x|</strong> is a V-shaped graph with vertex at (0, 0)</li>
            <li>For x < 0, the graph follows y = −x (gradient −1)</li>
            <li>For x ≥ 0, the graph follows y = x (gradient 1)</li>
            <li>Domain of y = |x| is all real numbers; range is y ≥ 0</li>
            <li>Transformations: y = |x − h| + k has vertex at (h, k)</li>
            <li>The graph is <strong>symmetric</strong> about the y-axis: |−x| = |x|</li>
            <li>Absolute value functions are useful for modeling distances and magnitudes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AbsoluteValueFunction;
