import { useState } from 'react';

const Transformations = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showExample4, setShowExample4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Transformations of Trigonometric Functions</h1>
        <p className="text-lg">Understanding how parameters affect the graphs of sine, cosine, and tangent</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: General Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">1. General Form of Trigonometric Functions</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 dark:border-teal-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Standard Form:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded my-3">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100 mb-3">
                y = a sin[b(x - c)] + d
              </p>
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100">
                y = a cos[b(x - c)] + d
              </p>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
              Where a, b, c, and d are constants that transform the basic function
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
              <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Parameter Effects:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li><span className="font-mono font-bold">a</span> - amplitude (vertical stretch)</li>
                <li><span className="font-mono font-bold">b</span> - period (horizontal compression)</li>
                <li><span className="font-mono font-bold">c</span> - phase shift (horizontal translation)</li>
                <li><span className="font-mono font-bold">d</span> - vertical shift (vertical translation)</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded border-2 border-purple-300 dark:border-purple-600">
              <h3 className="font-bold mb-3 text-purple-700 dark:text-purple-300">Key Formulas:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li className="font-mono">Amplitude = |a|</li>
                <li className="font-mono">Period = 360°/b or 2π/b</li>
                <li className="font-mono">Phase shift = c</li>
                <li className="font-mono">Principal axis: y = d</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Amplitude (Parameter a) */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">2. Amplitude - Vertical Stretch/Compression</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 dark:border-teal-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Understanding Amplitude:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The <strong>amplitude</strong> is the distance from the principal axis to the maximum (or minimum) value.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded my-3">
              <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100">
                Amplitude = |a|
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                The graph oscillates between (d - |a|) and (d + |a|)
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600 mb-4">
            <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Effects of Different Values:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li><span className="font-mono">|a| &gt; 1</span>: Graph is stretched vertically (taller waves)</li>
              <li><span className="font-mono">0 &lt; |a| &lt; 1</span>: Graph is compressed vertically (shorter waves)</li>
              <li><span className="font-mono">a &lt; 0</span>: Graph is reflected in the x-axis</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example: y = 3 sin x</h3>
            <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
              <li>• Amplitude = 3</li>
              <li>• Oscillates between -3 and 3</li>
              <li>• Graph is stretched vertically by factor of 3</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Period (Parameter b) */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">3. Period - Horizontal Stretch/Compression</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 dark:border-teal-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Understanding Period:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The <strong>period</strong> is the horizontal length of one complete cycle of the function.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded my-3">
              <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100 mb-2">
                Period = 360°/b (in degrees)
              </p>
              <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100">
                Period = 2π/b (in radians)
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600 mb-4">
            <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Effects of Different Values:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li><span className="font-mono">b &gt; 1</span>: Graph is compressed horizontally (shorter period, more cycles)</li>
              <li><span className="font-mono">0 &lt; b &lt; 1</span>: Graph is stretched horizontally (longer period, fewer cycles)</li>
              <li><span className="font-mono">b &lt; 0</span>: Graph is reflected in the y-axis</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example: y = sin(2x)</h3>
            <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
              <li>• Period = 360°/2 = 180°</li>
              <li>• Completes 2 cycles in 360°</li>
              <li>• Graph is compressed horizontally by factor of 2</li>
            </ul>
          </div>
        </div>

        {/* Section 4: Phase Shift (Parameter c) */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">4. Phase Shift - Horizontal Translation</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 dark:border-teal-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Understanding Phase Shift:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The <strong>phase shift</strong> is the horizontal displacement of the graph.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded my-3">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">For y = a sin[b(x - c)] + d:</p>
              <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100">
                Phase shift = c
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600 mb-4">
            <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Direction of Shift:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li><span className="font-mono">c &gt; 0</span>: Graph shifts RIGHT by c units</li>
              <li><span className="font-mono">c &lt; 0</span>: Graph shifts LEFT by |c| units</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 dark:border-yellow-400">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-300">Important Note:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              If the function is written as y = sin(bx - c), rewrite it as y = sin[b(x - c/b)] to find the phase shift = c/b
            </p>
          </div>
        </div>

        {/* Section 5: Vertical Shift (Parameter d) */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">5. Vertical Shift - Vertical Translation</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 dark:border-teal-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Understanding Vertical Shift:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The <strong>vertical shift</strong> moves the entire graph up or down, changing the principal axis.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded my-3">
              <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100">
                Principal axis: y = d
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                The graph oscillates above and below this line
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
            <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Effects:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li><span className="font-mono">d &gt; 0</span>: Graph shifts UP by d units</li>
              <li><span className="font-mono">d &lt; 0</span>: Graph shifts DOWN by |d| units</li>
              <li>Maximum value = d + |a|</li>
              <li>Minimum value = d - |a|</li>
            </ul>
          </div>
        </div>

        {/* Section 6: Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">6. Worked Examples</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 1: Complete transformation analysis</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">For y = 2 sin[3(x - 30°)] + 1, find: amplitude, period, phase shift, and vertical shift:</p>
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample1 ? '▼' : '▶'}</span>
            </button>
            {showExample1 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-2">
                <div className="text-sm space-y-2 text-gray-800 dark:text-gray-200">
                  <p><strong>Amplitude:</strong> |a| = |2| = 2</p>
                  <p><strong>Period:</strong> 360°/b = 360°/3 = 120°</p>
                  <p><strong>Phase shift:</strong> c = 30° (shift right 30°)</p>
                  <p><strong>Vertical shift:</strong> d = 1 (shift up 1 unit)</p>
                  <p><strong>Principal axis:</strong> y = 1</p>
                  <p><strong>Maximum value:</strong> 1 + 2 = 3</p>
                  <p><strong>Minimum value:</strong> 1 - 2 = -1</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 2: Converting to standard form</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">Express y = 4 cos(2x - 60°) in standard form and identify transformations:</p>
            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample2 ? '▼' : '▶'}</span>
            </button>
            {showExample2 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-2">
                <div className="text-sm space-y-2 text-gray-800 dark:text-gray-200">
                  <p><strong>Step 1:</strong> Factor out b from the bracket:</p>
                  <p className="ml-4 font-mono">y = 4 cos[2(x - 30°)]</p>
                  <p><strong>Step 2:</strong> Identify parameters: a = 4, b = 2, c = 30°, d = 0</p>
                  <p><strong>Amplitude:</strong> 4</p>
                  <p><strong>Period:</strong> 360°/2 = 180°</p>
                  <p><strong>Phase shift:</strong> 30° right</p>
                  <p><strong>Vertical shift:</strong> 0</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 3: Writing equations from transformations</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">Write the equation of a sine function with amplitude 5, period 90°, phase shift 45° left, and vertical shift 3 down:</p>
            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample3 ? '▼' : '▶'}</span>
            </button>
            {showExample3 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-2">
                <div className="text-sm space-y-2 text-gray-800 dark:text-gray-200">
                  <p><strong>Step 1:</strong> Amplitude = 5, so a = 5</p>
                  <p><strong>Step 2:</strong> Period = 90°, so 360°/b = 90°, thus b = 4</p>
                  <p><strong>Step 3:</strong> Phase shift 45° left, so c = -45°</p>
                  <p><strong>Step 4:</strong> Vertical shift 3 down, so d = -3</p>
                  <p className="font-mono text-green-600 dark:text-green-400 font-bold mt-3">
                    ∴ y = 5 sin[4(x + 45°)] - 3
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 4: Finding maximum and minimum values</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">For y = -3 cos(x) + 2, find the maximum and minimum values:</p>
            <button
              onClick={() => setShowExample4(!showExample4)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample4 ? '▼' : '▶'}</span>
            </button>
            {showExample4 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-2">
                <div className="text-sm space-y-2 text-gray-800 dark:text-gray-200">
                  <p><strong>Step 1:</strong> Identify parameters: a = -3, d = 2</p>
                  <p><strong>Step 2:</strong> Amplitude = |a| = |-3| = 3</p>
                  <p><strong>Step 3:</strong> Principal axis: y = 2</p>
                  <p><strong>Step 4:</strong> Since a is negative, the graph is reflected</p>
                  <p><strong>Maximum:</strong> d + |a| = 2 + 3 = <span className="font-bold text-green-600 dark:text-green-400">5</span></p>
                  <p><strong>Minimum:</strong> d - |a| = 2 - 3 = <span className="font-bold text-green-600 dark:text-green-400">-1</span></p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Note: The negative a reflects the graph, so max occurs where standard cos would have min
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 p-6 rounded-lg border-2 border-teal-300 dark:border-teal-600">
          <h3 className="font-bold text-xl mb-4 text-teal-900 dark:text-teal-200">Key Takeaways</h3>
          <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
            <li className="flex items-start gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
              <span>General form: y = a sin[b(x - c)] + d or y = a cos[b(x - c)] + d</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
              <span>Amplitude = |a| controls vertical stretch; negative a reflects the graph</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
              <span>Period = 360°/b controls horizontal compression; larger b means shorter period</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
              <span>Phase shift = c controls horizontal translation; positive c shifts right</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
              <span>Vertical shift = d moves the principal axis to y = d</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
              <span>Max = d + |a| and Min = d - |a|</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Transformations;
