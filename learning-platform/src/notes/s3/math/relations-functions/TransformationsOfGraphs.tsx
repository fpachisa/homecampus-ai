import React, { useState } from 'react';

const TransformationsOfGraphs = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Transformations of Graphs</h1>
        <p className="text-lg">Understanding how to translate, stretch, and reflect function graphs</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Translations */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. Translations (Shifts)</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What are Translations?</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Different parts of a function's equation control different features of its graph.
              Understanding which part controls what allows us to <strong>transform</strong> functions.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              A <strong>translation</strong> moves the graph without changing its shape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded border-2 border-green-400 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Vertical Translation:</h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
                <p className="text-center text-2xl font-mono mb-2 text-gray-900 dark:text-gray-100">y = f(x) + k</p>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">Adds/subtracts outside the function</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>• If <strong>k > 0</strong>: shift <strong>upward</strong> by k units</li>
                <li>• If <strong>k < 0</strong>: shift <strong>downward</strong> by |k| units</li>
              </ul>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded mt-3 text-xs text-gray-700 dark:text-gray-300">
                <p><strong>Example:</strong></p>
                <p>y = x² + 3 → shifts y = x² up 3 units</p>
                <p>y = x² − 2 → shifts y = x² down 2 units</p>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded border-2 border-purple-400 dark:border-purple-600">
              <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Horizontal Translation:</h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
                <p className="text-center text-2xl font-mono mb-2 text-gray-900 dark:text-gray-100">y = f(x − h)</p>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">Replaces x with (x − h)</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>• If <strong>h > 0</strong>: shift <strong>right</strong> by h units</li>
                <li>• If <strong>h < 0</strong>: shift <strong>left</strong> by |h| units</li>
              </ul>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded mt-3 text-xs text-gray-700 dark:text-gray-300">
                <p><strong>Example:</strong></p>
                <p>y = (x − 3)² → shifts y = x² right 3 units</p>
                <p>y = (x + 1)² → shifts y = x² left 1 unit</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-200">Important Note - Horizontal Shift Direction:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              The horizontal shift is <strong>opposite</strong> to what you might expect!
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-800 dark:text-gray-200">
              <li>y = f(x − h) moves <strong>right</strong> (positive direction) even though there's a minus sign</li>
              <li>y = f(x + h) moves <strong>left</strong> (negative direction) even though there's a plus sign</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Combined Translations:</h3>
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded">
              <p className="text-center text-2xl font-mono mb-3 text-gray-900 dark:text-gray-100">y = f(x − h) + k</p>
              <p className="text-center text-sm text-gray-700 dark:text-gray-300 mb-4">
                Moves the graph <strong>right h units</strong> and <strong>up k units</strong>
              </p>
              <div className="text-sm text-gray-800 dark:text-gray-200 space-y-2">
                <p><strong>Example:</strong> y = (x − 3)² + 2</p>
                <p className="ml-4">• Start with y = x² (basic parabola)</p>
                <p className="ml-4">• Move right 3 units (because of x − 3)</p>
                <p className="ml-4">• Move up 2 units (because of +2)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Stretches and Compressions */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Stretches and Compressions</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What are Stretches?</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Stretches change the <strong>shape</strong> of the graph by pulling it away from or compressing it toward an axis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded border-2 border-green-400 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Vertical Stretch:</h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
                <p className="text-center text-2xl font-mono mb-2 text-gray-900 dark:text-gray-100">y = p f(x), p > 0</p>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">Multiply whole function by p</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>• If <strong>p > 1</strong>: <strong>stretch</strong> away from x-axis (taller)</li>
                <li>• If <strong>0 < p < 1</strong>: <strong>compress</strong> toward x-axis (shorter)</li>
                <li>• Each point becomes <strong>p times</strong> its previous distance from x-axis</li>
              </ul>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded mt-3 text-xs text-gray-700 dark:text-gray-300">
                <p><strong>Example:</strong></p>
                <p>y = 2f(x) → each y-value doubles</p>
                <p>y = ½f(x) → each y-value halves</p>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded border-2 border-purple-400 dark:border-purple-600">
              <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Horizontal Stretch:</h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
                <p className="text-center text-2xl font-mono mb-2 text-gray-900 dark:text-gray-100">y = f(qx), q > 0</p>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">Multiply x by q inside function</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>• If <strong>q > 1</strong>: <strong>compress</strong> toward y-axis (narrower)</li>
                <li>• If <strong>0 < q < 1</strong>: <strong>stretch</strong> away from y-axis (wider)</li>
                <li>• Each point becomes <strong>1/q times</strong> its previous distance from y-axis</li>
              </ul>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded mt-3 text-xs text-gray-700 dark:text-gray-300">
                <p><strong>Example:</strong></p>
                <p>y = f(2x) → compresses horizontally (narrower)</p>
                <p>y = f(½x) → stretches horizontally (wider)</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-200">Key Difference:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              • <strong>Vertical stretch (y = p f(x)):</strong> p > 1 stretches, 0 < p < 1 compresses<br/>
              • <strong>Horizontal stretch (y = f(qx)):</strong> q > 1 compresses, 0 < q < 1 stretches (opposite!)
            </p>
          </div>
        </div>

        {/* Section 3: Reflections */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">3. Reflections</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What are Reflections?</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Reflections <strong>flip</strong> the graph across an axis, creating a mirror image.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded border-2 border-red-400 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-3">Reflection in x-axis:</h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
                <p className="text-center text-2xl font-mono mb-2 text-gray-900 dark:text-gray-100">y = −f(x)</p>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">Negative sign outside function</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>• <strong>Flips</strong> the graph over the x-axis</li>
                <li>• Positive y-values become negative</li>
                <li>• Negative y-values become positive</li>
                <li>• Points on x-axis stay fixed</li>
              </ul>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded mt-3 text-xs text-gray-700 dark:text-gray-300">
                <p><strong>Example:</strong></p>
                <p>y = −x² flips the parabola upside down</p>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded border-2 border-orange-400 dark:border-orange-600">
              <h3 className="font-bold text-orange-700 dark:text-orange-300 mb-3">Reflection in y-axis:</h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
                <p className="text-center text-2xl font-mono mb-2 text-gray-900 dark:text-gray-100">y = f(−x)</p>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">Negative sign inside function</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>• <strong>Flips</strong> the graph over the y-axis</li>
                <li>• Left side becomes right side</li>
                <li>• Right side becomes left side</li>
                <li>• Points on y-axis stay fixed</li>
              </ul>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded mt-3 text-xs text-gray-700 dark:text-gray-300">
                <p><strong>Example:</strong></p>
                <p>y = (−x)³ = −x³ flips y = x³ over y-axis</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Summary of All Transformations:</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-gray-100">Transformation</th>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-gray-100">Equation</th>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-gray-100">Effect</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200">
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="px-4 py-2">Vertical translation</td>
                    <td className="px-4 py-2 font-mono">y = f(x) + k</td>
                    <td className="px-4 py-2">Up k units (k > 0) or down |k| units (k < 0)</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="px-4 py-2">Horizontal translation</td>
                    <td className="px-4 py-2 font-mono">y = f(x − h)</td>
                    <td className="px-4 py-2">Right h units (h > 0) or left |h| units (h < 0)</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="px-4 py-2">Vertical stretch</td>
                    <td className="px-4 py-2 font-mono">y = p f(x)</td>
                    <td className="px-4 py-2">p > 1 stretches, 0 < p < 1 compresses</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="px-4 py-2">Horizontal stretch</td>
                    <td className="px-4 py-2 font-mono">y = f(qx)</td>
                    <td className="px-4 py-2">q > 1 compresses, 0 < q < 1 stretches</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="px-4 py-2">Reflection in x-axis</td>
                    <td className="px-4 py-2 font-mono">y = −f(x)</td>
                    <td className="px-4 py-2">Flip over x-axis</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="px-4 py-2">Reflection in y-axis</td>
                    <td className="px-4 py-2 font-mono">y = f(−x)</td>
                    <td className="px-4 py-2">Flip over y-axis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded border-2 border-indigo-300 dark:border-indigo-600">
            <h3 className="font-bold mb-3 text-indigo-700 dark:text-indigo-300">Invariant Points:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
              <strong>Invariant points</strong> are points which do not move under a transformation:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-800 dark:text-gray-200">
              <li>Translation: no invariant points (everything moves)</li>
              <li>Vertical stretch/reflection in x-axis: points on x-axis (y = 0)</li>
              <li>Horizontal stretch/reflection in y-axis: points on y-axis (x = 0)</li>
            </ul>
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
              {showExample1 ? '▼' : '▶'} Example 1: Describing Transformations
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Describe the transformations that map y = f(x) to:
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">a) y = f(x) + 3</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      <strong>Vertical translation</strong> upwards by 3 units
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">b) y = f(x − 1)</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      <strong>Horizontal translation</strong> to the right by 1 unit
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">c) y = 2f(x)</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      <strong>Vertical stretch</strong> by scale factor 2 (away from x-axis)
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">d) y = −f(x)</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      <strong>Reflection</strong> in the x-axis
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">e) y = f(x − 1) − 5</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      <strong>Horizontal translation</strong> right 1 unit, then <strong>vertical translation</strong> down 5 units
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Finding Equations After Transformations
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Find the equation of the resulting function g(x) when:
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                      a) f(x) = 3x + 2 is translated 5 units downwards
                    </p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Vertical translation down 5: subtract 5</p>
                      <p className="font-mono">g(x) = f(x) − 5 = (3x + 2) − 5 = 3x − 3</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                      b) f(x) = x² + 2x is stretched vertically with scale factor 3
                    </p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Vertical stretch by 3: multiply entire function by 3</p>
                      <p className="font-mono">g(x) = 3f(x) = 3(x² + 2x) = 3x² + 6x</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                      c) f(x) = 2x³ − 5x² + 4x − 3 is reflected in the y-axis
                    </p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Reflection in y-axis: replace x with −x</p>
                      <p className="font-mono">g(x) = f(−x) = 2(−x)³ − 5(−x)² + 4(−x) − 3</p>
                      <p className="font-mono">= −2x³ − 5x² − 4x − 3</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample3 ? '▼' : '▶'} Example 3: Combined Transformations
            </button>

            {showExample3 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  The function f(x) = mx + c is a straight line. State the gradient of:
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">a) y = f(x)</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      Gradient = <strong>m</strong> (no change)
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">b) y = f(x − 1)</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      Horizontal translation doesn't change gradient<br/>
                      Gradient = <strong>m</strong>
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">c) y = 2f(x)</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      Vertical stretch by 2 multiplies gradient by 2<br/>
                      Gradient = <strong>2m</strong>
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">d) y = −f(x)</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      Reflection in x-axis changes sign of gradient<br/>
                      Gradient = <strong>−m</strong>
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
                1. Describe the transformation that moves y = f(x) to:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) y = f(x + 3)</p>
                <p>b) y = f(x) − 4</p>
                <p>c) y = ½f(x)</p>
                <p>d) y = f(3x)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> Horizontal translation left 3 units</p>
                  <p><strong>b)</strong> Vertical translation down 4 units</p>
                  <p><strong>c)</strong> Vertical compression by scale factor ½</p>
                  <p><strong>d)</strong> Horizontal compression by scale factor ⅓</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Suppose f(x) has domain {'{'}x | −2 ≤ x ≤ 5{'}'} and range {'{'}y | y ≥ 3{'}'}. Find the domain and range of:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) y = f(x) + 2</p>
                <p>b) y = f(x + 4)</p>
                <p>c) y = ½f(x)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> Domain: [−2, 5] (unchanged), Range: {'{'}y | y ≥ 5{'}'} (shifted up 2)</p>
                  <p><strong>b)</strong> Domain: [−6, 1] (shifted left 4), Range: {'{'}y | y ≥ 3{'}'} (unchanged)</p>
                  <p><strong>c)</strong> Domain: [−2, 5] (unchanged), Range: {'{'}y | y ≥ 1.5{'}'} (compressed by ½)</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>Vertical translation:</strong> y = f(x) + k moves up/down k units</li>
            <li><strong>Horizontal translation:</strong> y = f(x − h) moves right/left (opposite of sign!)</li>
            <li><strong>Vertical stretch:</strong> y = p f(x) where p > 1 stretches, 0 < p < 1 compresses</li>
            <li><strong>Horizontal stretch:</strong> y = f(qx) where q > 1 compresses, 0 < q < 1 stretches</li>
            <li><strong>Reflection in x-axis:</strong> y = −f(x) flips over x-axis</li>
            <li><strong>Reflection in y-axis:</strong> y = f(−x) flips over y-axis</li>
            <li>Translations preserve shape, stretches change shape, reflections create mirror images</li>
            <li>Transformations can be combined: apply them in order</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransformationsOfGraphs;
