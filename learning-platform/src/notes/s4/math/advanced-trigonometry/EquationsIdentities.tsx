import { useState } from 'react';

const EquationsIdentities = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showExample4, setShowExample4] = useState(false);
  const [showExample5, setShowExample5] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Trigonometric Equations & Identities</h1>
        <p className="text-lg">Solving equations and applying fundamental trigonometric identities</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Fundamental Identities */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-300">1. Fundamental Trigonometric Identities</h2>

          <div className="bg-rose-50 dark:bg-rose-900/30 p-6 rounded-lg border-l-4 border-rose-500 dark:border-rose-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Pythagorean Identity:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100 mb-2">
                sin²θ + cos²θ = 1
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                The most important identity, derived from the unit circle
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
              <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Quotient Identity:</h3>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-mono text-center text-gray-900 dark:text-gray-100">tan θ = sin θ / cos θ</p>
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded border-2 border-purple-300 dark:border-purple-600">
              <h3 className="font-bold mb-3 text-purple-700 dark:text-purple-300">Reciprocal Identities:</h3>
              <div className="bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100">cosec θ = 1/sin θ</p>
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100">sec θ = 1/cos θ</p>
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100">cot θ = 1/tan θ</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold mb-3 text-green-700 dark:text-green-300">Variations of Pythagorean Identity:</h3>
            <div className="bg-white dark:bg-gray-800 p-3 rounded space-y-2">
              <p className="font-mono text-sm text-gray-900 dark:text-gray-100">1 + tan²θ = sec²θ</p>
              <p className="font-mono text-sm text-gray-900 dark:text-gray-100">1 + cot²θ = cosec²θ</p>
            </div>
          </div>
        </div>

        {/* Section 2: Solving Basic Trigonometric Equations */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-300">2. Solving Basic Trigonometric Equations</h2>

          <div className="bg-rose-50 dark:bg-rose-900/30 p-6 rounded-lg border-l-4 border-rose-500 dark:border-rose-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">General Approach:</h3>
            <ol className="space-y-2 text-sm text-gray-800 dark:text-gray-200 ml-6 list-decimal">
              <li>Isolate the trigonometric function</li>
              <li>Find the reference angle</li>
              <li>Determine which quadrants give valid solutions (ASTC rule)</li>
              <li>Find all solutions in the specified range</li>
              <li>Check if the range allows multiple cycles</li>
            </ol>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 dark:border-yellow-400">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-300">Important:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Always check the specified range (e.g., 0° ≤ x ≤ 360° or 0 ≤ x ≤ 2π). Some problems may require solutions beyond one cycle.
            </p>
          </div>
        </div>

        {/* Section 3: Types of Trigonometric Equations */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-300">3. Types of Trigonometric Equations</h2>

          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
              <h3 className="font-bold mb-2 text-blue-700 dark:text-blue-300">Type 1: Linear Equations</h3>
              <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">Form: sin x = a, cos x = b, or tan x = c</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Example: 2 sin x = 1</p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded border-2 border-purple-300 dark:border-purple-600">
              <h3 className="font-bold mb-2 text-purple-700 dark:text-purple-300">Type 2: Quadratic Equations</h3>
              <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">Form: a sin²x + b sin x + c = 0</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Solve like a quadratic, then find angles</p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h3 className="font-bold mb-2 text-green-700 dark:text-green-300">Type 3: Equations with Multiple Functions</h3>
              <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">Use identities to convert to single function</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Example: sin x = cos x → tan x = 1</p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded border-2 border-orange-300 dark:border-orange-600">
              <h3 className="font-bold mb-2 text-orange-700 dark:text-orange-300">Type 4: Equations with Different Arguments</h3>
              <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">Form: sin(2x) = cos x</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Requires careful manipulation using identities</p>
            </div>
          </div>
        </div>

        {/* Section 4: Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-300">4. Worked Examples</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 1: Linear equation</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">Solve 2 sin x - 1 = 0 for 0° ≤ x ≤ 360°:</p>
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
                  <p><strong>Step 1:</strong> Rearrange: 2 sin x = 1</p>
                  <p><strong>Step 2:</strong> sin x = 1/2</p>
                  <p><strong>Step 3:</strong> Reference angle: sin 30° = 1/2</p>
                  <p><strong>Step 4:</strong> Sin is positive in Quadrants I and II</p>
                  <p><strong>Step 5:</strong> Solutions: x = 30° (Q1) and x = 180° - 30° = 150° (Q2)</p>
                  <p className="font-mono text-green-600 dark:text-green-400 font-bold">∴ x = 30° or x = 150°</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 2: Quadratic equation</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">Solve 2 cos²x - cos x = 0 for 0° ≤ x ≤ 360°:</p>
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
                  <p><strong>Step 1:</strong> Factor: cos x(2 cos x - 1) = 0</p>
                  <p><strong>Step 2:</strong> Either cos x = 0 or 2 cos x - 1 = 0</p>
                  <p><strong>Case 1:</strong> cos x = 0 → x = 90° or x = 270°</p>
                  <p><strong>Case 2:</strong> cos x = 1/2 → x = 60° or x = 300°</p>
                  <p className="font-mono text-green-600 dark:text-green-400 font-bold">∴ x = 60°, 90°, 270°, or 300°</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 3: Using Pythagorean identity</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">If sin θ = 3/5 and θ is in Quadrant II, find cos θ:</p>
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
                  <p><strong>Step 1:</strong> Use sin²θ + cos²θ = 1</p>
                  <p><strong>Step 2:</strong> (3/5)² + cos²θ = 1</p>
                  <p><strong>Step 3:</strong> 9/25 + cos²θ = 1</p>
                  <p><strong>Step 4:</strong> cos²θ = 16/25</p>
                  <p><strong>Step 5:</strong> cos θ = ±4/5</p>
                  <p><strong>Step 6:</strong> In Quadrant II, cosine is negative</p>
                  <p className="font-mono text-green-600 dark:text-green-400 font-bold">∴ cos θ = -4/5</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 4: Equation with multiple cycles</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">Solve sin x = -0.5 for 0° ≤ x ≤ 720°:</p>
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
                  <p><strong>Step 1:</strong> Reference angle: sin 30° = 0.5</p>
                  <p><strong>Step 2:</strong> Sin is negative in Quadrants III and IV</p>
                  <p><strong>First cycle (0° to 360°):</strong></p>
                  <p className="ml-4">• Q3: x = 180° + 30° = 210°</p>
                  <p className="ml-4">• Q4: x = 360° - 30° = 330°</p>
                  <p><strong>Second cycle (360° to 720°):</strong></p>
                  <p className="ml-4">• Add 360°: x = 210° + 360° = 570°</p>
                  <p className="ml-4">• Add 360°: x = 330° + 360° = 690°</p>
                  <p className="font-mono text-green-600 dark:text-green-400 font-bold">∴ x = 210°, 330°, 570°, or 690°</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 5: Proving an identity</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">Prove that (1 - sin²x)/cos x = cos x:</p>
            <button
              onClick={() => setShowExample5(!showExample5)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample5 ? '▼' : '▶'}</span>
            </button>
            {showExample5 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-2">
                <div className="text-sm space-y-2 text-gray-800 dark:text-gray-200">
                  <p><strong>Step 1:</strong> Start with LHS: (1 - sin²x)/cos x</p>
                  <p><strong>Step 2:</strong> Use Pythagorean identity: sin²x + cos²x = 1</p>
                  <p><strong>Step 3:</strong> Therefore: 1 - sin²x = cos²x</p>
                  <p><strong>Step 4:</strong> Substitute: cos²x/cos x</p>
                  <p><strong>Step 5:</strong> Simplify: cos x</p>
                  <p className="font-mono text-green-600 dark:text-green-400 font-bold">∴ LHS = RHS (proven)</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 5: Problem-Solving Strategies */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-300">5. Problem-Solving Strategies</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-600">
            <h3 className="font-bold text-lg mb-4 text-blue-900 dark:text-blue-200">When solving trigonometric equations:</h3>
            <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">1.</span>
                <span><strong>Simplify first:</strong> Use identities to express in terms of one function if possible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">2.</span>
                <span><strong>Factor when possible:</strong> Look for common factors or quadratic patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">3.</span>
                <span><strong>Use ASTC rule:</strong> Determine which quadrants give valid solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">4.</span>
                <span><strong>Check the range:</strong> Make sure all solutions are within the specified interval</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">5.</span>
                <span><strong>Verify solutions:</strong> Substitute back into the original equation when unsure</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/30 dark:to-pink-900/30 p-6 rounded-lg border-2 border-rose-300 dark:border-rose-600">
          <h3 className="font-bold text-xl mb-4 text-rose-900 dark:text-rose-200">Key Takeaways</h3>
          <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
            <li className="flex items-start gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-bold">•</span>
              <span>The Pythagorean identity sin²θ + cos²θ = 1 is fundamental to solving many problems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-bold">•</span>
              <span>Use reference angles and ASTC rule to find all solutions in a given range</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-bold">•</span>
              <span>Quadratic trigonometric equations can be factored or solved using the quadratic formula</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-bold">•</span>
              <span>Multiple cycles require adding 360° (or 2π) to solutions from the first cycle</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-bold">•</span>
              <span>Identities allow us to simplify complex expressions and prove relationships</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EquationsIdentities;
