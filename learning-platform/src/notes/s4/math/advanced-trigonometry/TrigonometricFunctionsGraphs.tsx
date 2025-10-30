import { useState } from 'react';

const TrigonometricFunctionsGraphs = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Trigonometric Functions & Graphs</h1>
        <p className="text-lg">Understanding the graphs of sine, cosine, and tangent functions</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Sine Function */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">1. The Sine Function: y = sin x</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Features:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Domain & Range:</h4>
                <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <li className="font-mono">Domain: All real numbers</li>
                  <li className="font-mono">Range: -1 ≤ y ≤ 1</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Period & Amplitude:</h4>
                <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <li className="font-mono">Period: 360° (2π radians)</li>
                  <li className="font-mono">Amplitude: 1</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600 mb-4">
            <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Important Points on y = sin x:</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white dark:bg-gray-800">
                <thead>
                  <tr className="bg-blue-100 dark:bg-blue-800">
                    <th className="border border-blue-300 dark:border-blue-600 p-2 text-gray-900 dark:text-gray-100">x</th>
                    <th className="border border-blue-300 dark:border-blue-600 p-2 text-gray-900 dark:text-gray-100">sin x</th>
                    <th className="border border-blue-300 dark:border-blue-600 p-2 text-gray-900 dark:text-gray-100">Point</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">0°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-sm">Start of cycle</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">90°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-sm">Maximum</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">180°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-sm">Middle of cycle</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">270°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">-1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-sm">Minimum</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">360°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-sm">End of cycle</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 dark:border-yellow-400">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-300">Graph Characteristics:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li>• The sine curve is smooth and wave-like</li>
              <li>• It oscillates between -1 and 1</li>
              <li>• Crosses the x-axis at 0°, 180°, 360°, ...</li>
              <li>• Has rotational symmetry about the origin (odd function)</li>
            </ul>
          </div>
        </div>

        {/* Section 2: The Cosine Function */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">2. The Cosine Function: y = cos x</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Features:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Domain & Range:</h4>
                <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <li className="font-mono">Domain: All real numbers</li>
                  <li className="font-mono">Range: -1 ≤ y ≤ 1</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Period & Amplitude:</h4>
                <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <li className="font-mono">Period: 360° (2π radians)</li>
                  <li className="font-mono">Amplitude: 1</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600 mb-4">
            <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Important Points on y = cos x:</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white dark:bg-gray-800">
                <thead>
                  <tr className="bg-blue-100 dark:bg-blue-800">
                    <th className="border border-blue-300 dark:border-blue-600 p-2 text-gray-900 dark:text-gray-100">x</th>
                    <th className="border border-blue-300 dark:border-blue-600 p-2 text-gray-900 dark:text-gray-100">cos x</th>
                    <th className="border border-blue-300 dark:border-blue-600 p-2 text-gray-900 dark:text-gray-100">Point</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">0°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-sm">Maximum</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">90°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-sm">Middle of cycle</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">180°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">-1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-sm">Minimum</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">270°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-sm">Middle of cycle</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">360°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-sm">Maximum</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded border-l-4 border-purple-500 dark:border-purple-400">
            <h3 className="font-bold mb-2 text-purple-800 dark:text-purple-300">Relationship to Sine:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              The cosine graph is identical to the sine graph but shifted 90° to the left. This means:
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
              <p className="font-mono text-center text-gray-900 dark:text-gray-100">cos x = sin(x + 90°)</p>
            </div>
          </div>
        </div>

        {/* Section 3: The Tangent Function */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">3. The Tangent Function: y = tan x</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Features:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Domain & Range:</h4>
                <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <li className="font-mono">Domain: All reals except 90°, 270°, ...</li>
                  <li className="font-mono">Range: All real numbers</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Period:</h4>
                <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <li className="font-mono">Period: 180° (π radians)</li>
                  <li className="text-xs text-gray-600 dark:text-gray-400">Half the period of sin/cos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-l-4 border-red-500 dark:border-red-400 mb-4">
            <h3 className="font-bold mb-2 text-red-800 dark:text-red-300">Asymptotes:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
              Vertical asymptotes occur where cos x = 0 (since tan x = sin x / cos x):
            </p>
            <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200 ml-4">
              <li>• x = 90°, 270°, 450°, ...</li>
              <li>• Or generally: x = 90° + 180°n (where n is any integer)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 dark:border-yellow-400">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-300">Graph Characteristics:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li>• The graph has repeating "branches" separated by asymptotes</li>
              <li>• Each branch increases from -∞ to +∞</li>
              <li>• Crosses the x-axis at 0°, 180°, 360°, ...</li>
              <li>• Has rotational symmetry about the origin (odd function)</li>
              <li>• Period is 180° (half that of sine and cosine)</li>
            </ul>
          </div>
        </div>

        {/* Section 4: Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">4. Worked Examples</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 1: Reading values from the sine graph</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">For y = sin x, what are the x-values in the range 0° ≤ x ≤ 360° where sin x = 0.5?</p>
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
                  <p><strong>Step 1:</strong> We know sin 30° = 0.5</p>
                  <p><strong>Step 2:</strong> Sin is also positive in Quadrant II</p>
                  <p><strong>Step 3:</strong> Second solution: 180° - 30° = 150°</p>
                  <p className="font-mono text-green-600 dark:text-green-400 font-bold">∴ x = 30° or x = 150°</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 2: Analyzing the cosine graph</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">State the range of x-values for which cos x &gt; 0 in the interval 0° ≤ x ≤ 360°:</p>
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
                  <p><strong>Step 1:</strong> Cosine is positive in Quadrants I and IV</p>
                  <p><strong>Step 2:</strong> cos x = 0 at x = 90° and x = 270°</p>
                  <p><strong>Step 3:</strong> Cosine is positive from 0° to 90° and from 270° to 360°</p>
                  <p className="font-mono text-green-600 dark:text-green-400 font-bold">∴ 0° ≤ x &lt; 90° or 270° &lt; x ≤ 360°</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 3: Understanding tangent asymptotes</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">Explain why tan 90° is undefined and describe what happens to the graph near x = 90°:</p>
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
                  <p><strong>Step 1:</strong> tan x = sin x / cos x</p>
                  <p><strong>Step 2:</strong> At x = 90°: sin 90° = 1 and cos 90° = 0</p>
                  <p><strong>Step 3:</strong> tan 90° = 1/0 which is undefined (division by zero)</p>
                  <p><strong>Step 4:</strong> As x approaches 90° from the left, tan x → +∞</p>
                  <p><strong>Step 5:</strong> As x approaches 90° from the right, tan x → -∞</p>
                  <p className="font-mono text-green-600 dark:text-green-400 font-bold">∴ There is a vertical asymptote at x = 90°</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 5: Comparing the Three Functions */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">5. Comparing Sine, Cosine, and Tangent</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-white dark:bg-gray-800 rounded">
              <thead>
                <tr className="bg-indigo-100 dark:bg-indigo-800">
                  <th className="border border-indigo-300 dark:border-indigo-600 p-3 text-gray-900 dark:text-gray-100">Property</th>
                  <th className="border border-indigo-300 dark:border-indigo-600 p-3 text-gray-900 dark:text-gray-100">y = sin x</th>
                  <th className="border border-indigo-300 dark:border-indigo-600 p-3 text-gray-900 dark:text-gray-100">y = cos x</th>
                  <th className="border border-indigo-300 dark:border-indigo-600 p-3 text-gray-900 dark:text-gray-100">y = tan x</th>
                </tr>
              </thead>
              <tbody className="text-gray-800 dark:text-gray-200">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-bold">Domain</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">All reals</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">All reals</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">All reals except 90° + 180°n</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-bold">Range</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">[-1, 1]</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">[-1, 1]</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">All reals</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-bold">Period</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">360°</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">360°</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">180°</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-bold">Amplitude</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">1</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">1</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">N/A</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-bold">Asymptotes</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">None</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">None</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">x = 90° + 180°n</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 p-6 rounded-lg border-2 border-indigo-300 dark:border-indigo-600">
          <h3 className="font-bold text-xl mb-4 text-indigo-900 dark:text-indigo-200">Key Takeaways</h3>
          <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
              <span>Sine and cosine graphs oscillate between -1 and 1 with a period of 360°</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
              <span>The cosine graph is the sine graph shifted 90° to the left</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
              <span>Tangent has vertical asymptotes at 90°, 270°, etc., and a period of 180°</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
              <span>Understanding these graphs helps solve trigonometric equations and inequalities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
              <span>Domain restrictions for tangent occur where cosine equals zero</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrigonometricFunctionsGraphs;
