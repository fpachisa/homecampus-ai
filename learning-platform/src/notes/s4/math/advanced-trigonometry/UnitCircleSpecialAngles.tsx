import { useState } from 'react';

const UnitCircleSpecialAngles = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showExample4, setShowExample4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Unit Circle & Special Angles</h1>
        <p className="text-lg">Understanding the unit circle and trigonometric values for special angles</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Unit Circle */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">1. The Unit Circle</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The <strong>unit circle</strong> is a circle with:
            </p>
            <ul className="space-y-2 ml-6 text-gray-800 dark:text-gray-200">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400">•</span>
                <span>Centre at the origin (0, 0)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400">•</span>
                <span>Radius = 1 unit</span>
              </li>
            </ul>
            <div className="bg-white dark:bg-gray-800 p-4 rounded my-3">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100">
                x² + y² = 1
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                Equation of the unit circle
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600 mb-4">
            <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Key Properties:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              For any angle θ measured from the positive x-axis, a point P on the unit circle has coordinates:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100">
                P = (cos θ, sin θ)
              </p>
            </div>
            <ul className="space-y-2 mt-3 text-sm text-gray-800 dark:text-gray-200">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>The x-coordinate is cos θ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>The y-coordinate is sin θ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>tan θ = sin θ / cos θ = y / x</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Special Angles */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">2. Special Angles</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              There are specific angles for which we can find <strong>exact values</strong> of trigonometric ratios:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <h4 className="font-bold text-center mb-2 text-gray-900 dark:text-gray-100">Common Special Angles</h4>
                <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <li>• 0°</li>
                  <li>• 30°</li>
                  <li>• 45°</li>
                  <li>• 60°</li>
                  <li>• 90°</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <h4 className="font-bold text-center mb-2 text-gray-900 dark:text-gray-100">Extended Angles</h4>
                <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <li>• 120°, 135°, 150°</li>
                  <li>• 180°</li>
                  <li>• 210°, 225°, 240°</li>
                  <li>• 270°</li>
                  <li>• 300°, 315°, 330°</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Exact Values Table:</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100 dark:bg-green-800">
                    <th className="border border-green-300 dark:border-green-600 p-2 text-gray-900 dark:text-gray-100">Angle θ</th>
                    <th className="border border-green-300 dark:border-green-600 p-2 text-gray-900 dark:text-gray-100">sin θ</th>
                    <th className="border border-green-300 dark:border-green-600 p-2 text-gray-900 dark:text-gray-100">cos θ</th>
                    <th className="border border-green-300 dark:border-green-600 p-2 text-gray-900 dark:text-gray-100">tan θ</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">0°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">0</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">30°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">1/2</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">√3/2</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">1/√3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">45°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">1/√2</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">1/√2</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">60°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">√3/2</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">1/2</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">√3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">90°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">undefined</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Section 3: All Four Quadrants */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">3. Trigonometry in All Four Quadrants</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">ASTC Rule:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Remember which trigonometric ratios are <strong>positive</strong> in each quadrant:
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-red-100 dark:bg-red-900/50 p-4 rounded border-2 border-red-400 dark:border-red-600">
                <p className="font-bold text-center text-red-800 dark:text-red-300">Quadrant II (90°-180°)</p>
                <p className="text-center text-sm mt-2 text-gray-800 dark:text-gray-200">Sin positive</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded border-2 border-green-400 dark:border-green-600">
                <p className="font-bold text-center text-green-800 dark:text-green-300">Quadrant I (0°-90°)</p>
                <p className="text-center text-sm mt-2 text-gray-800 dark:text-gray-200">All positive</p>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/50 p-4 rounded border-2 border-orange-400 dark:border-orange-600">
                <p className="font-bold text-center text-orange-800 dark:text-orange-300">Quadrant III (180°-270°)</p>
                <p className="text-center text-sm mt-2 text-gray-800 dark:text-gray-200">Tan positive</p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded border-2 border-blue-400 dark:border-blue-600">
                <p className="font-bold text-center text-blue-800 dark:text-blue-300">Quadrant IV (270°-360°)</p>
                <p className="text-center text-sm mt-2 text-gray-800 dark:text-gray-200">Cos positive</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 dark:border-yellow-400 mb-4">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-300">Reference Angles:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200 mb-3">
              For any angle θ, the <strong>reference angle</strong> is the acute angle formed between the terminal side and the x-axis.
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded">
              <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <li className="font-mono">Quadrant I: reference angle = θ</li>
                <li className="font-mono">Quadrant II: reference angle = 180° - θ</li>
                <li className="font-mono">Quadrant III: reference angle = θ - 180°</li>
                <li className="font-mono">Quadrant IV: reference angle = 360° - θ</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">4. Worked Examples</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 1: Finding exact values in Quadrant II</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">Find the exact value of sin 150°:</p>
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
                  <p><strong>Step 1:</strong> Identify the quadrant: 150° is in Quadrant II</p>
                  <p><strong>Step 2:</strong> Find reference angle: 180° - 150° = 30°</p>
                  <p><strong>Step 3:</strong> sin is positive in Quadrant II</p>
                  <p><strong>Step 4:</strong> sin 150° = sin 30° = <span className="font-mono text-green-600 dark:text-green-400 font-bold">1/2</span></p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 2: Finding exact values in Quadrant III</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">Find the exact value of tan 225°:</p>
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
                  <p><strong>Step 1:</strong> Identify the quadrant: 225° is in Quadrant III</p>
                  <p><strong>Step 2:</strong> Find reference angle: 225° - 180° = 45°</p>
                  <p><strong>Step 3:</strong> tan is positive in Quadrant III</p>
                  <p><strong>Step 4:</strong> tan 225° = tan 45° = <span className="font-mono text-green-600 dark:text-green-400 font-bold">1</span></p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 3: Finding exact values in Quadrant IV</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">Find the exact value of cos 300°:</p>
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
                  <p><strong>Step 1:</strong> Identify the quadrant: 300° is in Quadrant IV</p>
                  <p><strong>Step 2:</strong> Find reference angle: 360° - 300° = 60°</p>
                  <p><strong>Step 3:</strong> cos is positive in Quadrant IV</p>
                  <p><strong>Step 4:</strong> cos 300° = cos 60° = <span className="font-mono text-green-600 dark:text-green-400 font-bold">1/2</span></p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 4: Using the unit circle coordinates</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">A point P on the unit circle corresponds to an angle of 240°. Find the coordinates of P:</p>
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
                  <p><strong>Step 1:</strong> P = (cos 240°, sin 240°)</p>
                  <p><strong>Step 2:</strong> 240° is in Quadrant III, reference angle = 240° - 180° = 60°</p>
                  <p><strong>Step 3:</strong> In Quadrant III, both sin and cos are negative</p>
                  <p><strong>Step 4:</strong> cos 240° = -cos 60° = -1/2</p>
                  <p><strong>Step 5:</strong> sin 240° = -sin 60° = -√3/2</p>
                  <p className="font-mono text-green-600 dark:text-green-400 font-bold">∴ P = (-1/2, -√3/2)</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-600">
          <h3 className="font-bold text-xl mb-4 text-purple-900 dark:text-purple-200">Key Takeaways</h3>
          <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <span>The unit circle has equation x² + y² = 1 with any point P = (cos θ, sin θ)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <span>Special angles (0°, 30°, 45°, 60°, 90°) have exact trigonometric values</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <span>Use ASTC rule: All positive (Q1), Sin positive (Q2), Tan positive (Q3), Cos positive (Q4)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <span>Reference angles help find exact values in all quadrants</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <span>The sign of the ratio depends on the quadrant; the magnitude depends on the reference angle</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UnitCircleSpecialAngles;
