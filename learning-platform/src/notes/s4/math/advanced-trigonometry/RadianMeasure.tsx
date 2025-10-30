import { useState } from 'react';

const RadianMeasure = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showExample4, setShowExample4] = useState(false);
  const [degInput, setDegInput] = useState(180);
  const [radInput, setRadInput] = useState(Math.PI);

  const degToRad = (deg: number) => (deg * Math.PI / 180).toFixed(4);
  const radToDeg = (rad: number) => (rad * 180 / Math.PI).toFixed(2);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Radian Measure</h1>
        <p className="text-lg">Understanding radians and their applications in circular motion</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is a Radian? */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-800 dark:text-amber-300">1. What is a Radian?</h2>

          <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500 dark:border-amber-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              A <strong>radian</strong> is the angle subtended at the centre of a circle by an arc equal in length to the radius.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded my-3">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100">
                1 radian ≈ 57.3°
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600 mb-4">
            <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Key Facts:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li>• Radians are a pure measure of angle (no units needed)</li>
              <li>• One complete revolution = 2π radians = 360°</li>
              <li>• Half revolution = π radians = 180°</li>
              <li>• Quarter revolution = π/2 radians = 90°</li>
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded border-2 border-purple-300 dark:border-purple-600">
            <h3 className="font-bold mb-3 text-purple-700 dark:text-purple-300">Why Use Radians?</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li>• Simplifies many mathematical formulas</li>
              <li>• Natural unit for circular and periodic motion</li>
              <li>• Essential for calculus with trigonometric functions</li>
              <li>• Makes arc length and area formulas more elegant</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Converting Between Degrees and Radians */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-800 dark:text-amber-300">2. Converting Between Degrees and Radians</h2>

          <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500 dark:border-amber-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Conversion Formulas:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <h4 className="font-bold mb-2 text-center text-gray-900 dark:text-gray-100">Degrees → Radians</h4>
                <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100">radians = degrees × π/180°</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <h4 className="font-bold mb-2 text-center text-gray-900 dark:text-gray-100">Radians → Degrees</h4>
                <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100">degrees = radians × 180°/π</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold mb-3 text-green-700 dark:text-green-300">Common Angle Conversions:</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white dark:bg-gray-800">
                <thead>
                  <tr className="bg-green-100 dark:bg-green-800">
                    <th className="border border-green-300 dark:border-green-600 p-2 text-gray-900 dark:text-gray-100">Degrees</th>
                    <th className="border border-green-300 dark:border-green-600 p-2 text-gray-900 dark:text-gray-100">Radians (exact)</th>
                    <th className="border border-green-300 dark:border-green-600 p-2 text-gray-900 dark:text-gray-100">Radians (decimal)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">0°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">0</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">30°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">π/6</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">≈ 0.524</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">45°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">π/4</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">≈ 0.785</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">60°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">π/3</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">≈ 1.047</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">90°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">π/2</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">≈ 1.571</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">180°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">π</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">≈ 3.142</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">270°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">3π/2</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">≈ 4.712</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">360°</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">2π</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono text-center">≈ 6.283</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded border border-purple-200 dark:border-purple-700 mb-4">
            <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Interactive Converter:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <label className="block text-sm font-bold mb-2 text-gray-900 dark:text-gray-100">Degrees:</label>
                <input
                  type="number"
                  value={degInput}
                  onChange={(e) => setDegInput(Number(e.target.value))}
                  className="w-full px-3 py-2 border-2 border-purple-300 dark:border-purple-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  = <span className="font-mono font-bold">{degToRad(degInput)}</span> radians
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <label className="block text-sm font-bold mb-2 text-gray-900 dark:text-gray-100">Radians:</label>
                <input
                  type="number"
                  step="0.1"
                  value={radInput}
                  onChange={(e) => setRadInput(Number(e.target.value))}
                  className="w-full px-3 py-2 border-2 border-purple-300 dark:border-purple-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  = <span className="font-mono font-bold">{radToDeg(radInput)}</span>°
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Arc Length */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-800 dark:text-amber-300">3. Arc Length</h2>

          <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500 dark:border-amber-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Arc Length Formula:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              For a circle with radius r and central angle θ (in radians):
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100 mb-2">
                s = rθ
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                where s = arc length, r = radius, θ = angle in radians
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 dark:border-yellow-400">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-300">Important Note:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              This simple formula (s = rθ) only works when θ is in radians. If θ is in degrees, you must convert first or use s = (πrθ)/180°
            </p>
          </div>
        </div>

        {/* Section 4: Sector Area */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-800 dark:text-amber-300">4. Area of a Sector</h2>

          <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500 dark:border-amber-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Sector Area Formula:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              For a sector with radius r and central angle θ (in radians):
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100 mb-2">
                A = ½r²θ
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                where A = sector area, r = radius, θ = angle in radians
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
            <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Alternative Formula:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
              If you know the arc length s instead of the angle:
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded">
              <p className="text-center font-mono text-gray-900 dark:text-gray-100">A = ½rs</p>
            </div>
          </div>
        </div>

        {/* Section 5: Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-800 dark:text-amber-300">5. Worked Examples</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 1: Converting to radians</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">Convert 135° to radians in terms of π:</p>
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
                  <p><strong>Step 1:</strong> Use the formula: radians = degrees × π/180°</p>
                  <p><strong>Step 2:</strong> radians = 135° × π/180°</p>
                  <p><strong>Step 3:</strong> radians = 135π/180</p>
                  <p><strong>Step 4:</strong> Simplify: radians = 3π/4</p>
                  <p className="font-mono text-green-600 dark:text-green-400 font-bold">∴ 135° = 3π/4 radians</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 2: Finding arc length</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">A circle has radius 8 cm. Find the arc length subtended by a central angle of 2.5 radians:</p>
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
                  <p><strong>Given:</strong> r = 8 cm, θ = 2.5 radians</p>
                  <p><strong>Formula:</strong> s = rθ</p>
                  <p><strong>Step 1:</strong> s = 8 × 2.5</p>
                  <p><strong>Step 2:</strong> s = 20 cm</p>
                  <p className="font-mono text-green-600 dark:text-green-400 font-bold">∴ Arc length = 20 cm</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 3: Finding sector area</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">A sector has radius 10 cm and central angle π/3 radians. Find its area:</p>
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
                  <p><strong>Given:</strong> r = 10 cm, θ = π/3 radians</p>
                  <p><strong>Formula:</strong> A = ½r²θ</p>
                  <p><strong>Step 1:</strong> A = ½(10)²(π/3)</p>
                  <p><strong>Step 2:</strong> A = ½(100)(π/3)</p>
                  <p><strong>Step 3:</strong> A = 50π/3 cm²</p>
                  <p><strong>Step 4:</strong> A ≈ 52.36 cm²</p>
                  <p className="font-mono text-green-600 dark:text-green-400 font-bold">∴ Area = 50π/3 ≈ 52.36 cm²</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 4: Finding the angle</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">An arc of length 15 cm is formed on a circle of radius 6 cm. Find the angle in radians:</p>
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
                  <p><strong>Given:</strong> s = 15 cm, r = 6 cm</p>
                  <p><strong>Formula:</strong> s = rθ, so θ = s/r</p>
                  <p><strong>Step 1:</strong> θ = 15/6</p>
                  <p><strong>Step 2:</strong> θ = 2.5 radians</p>
                  <p className="font-mono text-green-600 dark:text-green-400 font-bold">∴ Angle = 2.5 radians (≈ 143.2°)</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 6: Angular Velocity */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-800 dark:text-amber-300">6. Angular Velocity</h2>

          <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500 dark:border-amber-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Angular Velocity (ω):</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The rate of change of angle with respect to time:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100 mb-2">
                ω = θ/t
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                where ω = angular velocity (rad/s), θ = angle (radians), t = time (seconds)
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
            <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Linear Velocity (v):</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
              The relationship between linear and angular velocity:
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded">
              <p className="text-center font-mono text-gray-900 dark:text-gray-100">v = rω</p>
              <p className="text-center text-xs text-gray-600 dark:text-gray-400 mt-2">
                where v = linear velocity (m/s), r = radius, ω = angular velocity (rad/s)
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 rounded-lg border-2 border-amber-300 dark:border-amber-600">
          <h3 className="font-bold text-xl mb-4 text-amber-900 dark:text-amber-200">Key Takeaways</h3>
          <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
              <span>1 radian is the angle where arc length equals radius; 2π radians = 360°</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
              <span>Convert degrees to radians: multiply by π/180°</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
              <span>Arc length formula: s = rθ (θ must be in radians)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
              <span>Sector area formula: A = ½r²θ (θ must be in radians)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
              <span>Angular velocity ω = θ/t links rotation to time</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
              <span>Linear velocity v = rω connects circular and straight-line motion</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RadianMeasure;
