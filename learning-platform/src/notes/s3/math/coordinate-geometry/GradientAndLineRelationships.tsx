import { useState } from 'react';

const GradientAndLineRelationships = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Gradient and Line Relationships</h1>
        <p className="text-lg">Understanding gradient, parallel lines, and perpendicular lines</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Understanding Gradient */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">1. Understanding Gradient</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The <strong>gradient</strong> of a line is a measure of its <strong>steepness</strong>. It tells us how quickly the line rises or falls as we move along it.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              We calculate the gradient by choosing two points on the line, then dividing the <strong>vertical step</strong> between them by the <strong>horizontal step</strong>.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Calculating Gradient:</h3>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-3">
              <p className="text-center font-mono text-lg text-gray-900 dark:text-gray-100 mb-2">
                gradient = vertical step / horizontal step
              </p>
              <p className="text-center font-mono text-lg text-gray-900 dark:text-gray-100">
                or
              </p>
              <p className="text-center font-mono text-lg text-gray-900 dark:text-gray-100 mt-2">
                gradient = y-step / x-step
              </p>
            </div>
            <div className="space-y-2 text-gray-800 dark:text-gray-200">
              <p><strong>• Vertical step (y-step):</strong> How much the line goes up or down</p>
              <p><strong>• Horizontal step (x-step):</strong> How much the line goes left or right</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Positive Gradient</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                An <strong>upward sloping</strong> line has a positive gradient
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                As x increases, y increases
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-2 border-red-300 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-2">Negative Gradient</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                A <strong>downward sloping</strong> line has a negative gradient
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                As x increases, y decreases
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
              <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Zero/Undefined</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Horizontal line:</strong> gradient = 0
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Vertical line:</strong> gradient is undefined
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: The Gradient Formula */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">2. The Gradient Formula</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Gradient Formula:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              For points A(x₁, y₁) and B(x₂, y₂), the vertical step is y₂ − y₁, and the horizontal step is x₂ − x₁.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                The gradient of the line through (x₁, y₁) and (x₂, y₂) is:
              </p>
              <p className="text-center font-mono text-2xl text-gray-900 dark:text-gray-100">
                m = (y₂ − y₁) / (x₂ − x₁)
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">Important Notes:</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li>The letter <strong>m</strong> is commonly used to represent gradient</li>
              <li>It doesn't matter which point you call (x₁, y₁) and which you call (x₂, y₂)</li>
              <li>Make sure you subtract in the same order: if you do y₂ − y₁ on top, do x₂ − x₁ on bottom</li>
              <li>Gradient is the same between any two points on a straight line</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Special Cases:</h3>
            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <div className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">1.</span>
                <div>
                  <p className="font-semibold">Horizontal Line (y = constant)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Vertical step = 0, so gradient = 0</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">2.</span>
                <div>
                  <p className="font-semibold">Vertical Line (x = constant)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Horizontal step = 0, so gradient is undefined (can't divide by zero)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Parallel Lines */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">3. Parallel Lines</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Two lines are <strong>parallel</strong> if there is always the same distance between them. Parallel lines never intersect.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">The Parallel Lines Rule:</h3>
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded border-2 border-indigo-400 dark:border-indigo-500">
              <p className="text-center text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                For lines which are neither horizontal nor vertical:
              </p>
              <p className="text-center text-xl font-bold text-indigo-700 dark:text-indigo-300">
                Lines are parallel if and only if their gradients are equal
              </p>
            </div>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 text-center">
              If lines l₁ and l₂ have gradients m₁ and m₂, then l₁ ∥ l₂ ⟺ m₁ = m₂
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-400 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">✓ Parallel Lines:</h3>
              <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">
                Line 1: gradient = 3
              </p>
              <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">
                Line 2: gradient = 3
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Same gradient → Lines are parallel
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-2 border-red-400 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-2">✗ NOT Parallel:</h3>
              <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">
                Line 1: gradient = 2
              </p>
              <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">
                Line 2: gradient = −1/2
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Different gradients → Lines are not parallel
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Perpendicular Lines */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">4. Perpendicular Lines</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Two lines are <strong>perpendicular</strong> if they are at right angles (90°) to one another.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">The Perpendicular Lines Rule:</h3>
            <div className="bg-pink-50 dark:bg-pink-900/30 p-4 rounded border-2 border-pink-400 dark:border-pink-500">
              <p className="text-center text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                For lines which are neither horizontal nor vertical:
              </p>
              <p className="text-center text-xl font-bold text-pink-700 dark:text-pink-300 mb-3">
                Lines are perpendicular if and only if their gradients are negative reciprocals
              </p>
              <p className="text-center text-lg font-mono text-gray-900 dark:text-gray-100">
                m₁ × m₂ = −1
              </p>
            </div>
            <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
              <p className="font-semibold mb-2">Equivalently:</p>
              <p className="ml-4">• If m₁ = a/b, then m₂ = −b/a</p>
              <p className="ml-4">• If m₁ = 3, then m₂ = −1/3</p>
              <p className="ml-4">• If m₁ = −2/5, then m₂ = 5/2</p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">How to Find the Perpendicular Gradient:</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p><strong>Step 1:</strong> Take the negative reciprocal of the original gradient</p>
              <p className="ml-4">• Flip the fraction (reciprocal)</p>
              <p className="ml-4">• Change the sign (negative)</p>
              <p><strong>Example:</strong> If m = 2/3, perpendicular gradient = −3/2</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-400 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">✓ Perpendicular Lines:</h3>
              <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">
                Line 1: gradient = 2
              </p>
              <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">
                Line 2: gradient = −1/2
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Check: 2 × (−1/2) = −1 ✓
              </p>
              <p className="text-xs font-semibold text-green-700 dark:text-green-300">
                Lines are perpendicular
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-2 border-red-400 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-2">✗ NOT Perpendicular:</h3>
              <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">
                Line 1: gradient = 3
              </p>
              <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">
                Line 2: gradient = −2
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Check: 3 × (−2) = −6 ≠ −1 ✗
              </p>
              <p className="text-xs font-semibold text-red-700 dark:text-red-300">
                Lines are not perpendicular
              </p>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900/50 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Finding the Gradient
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-purple-500 dark:border-purple-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Find the gradient of the line through A(−1, 2) and B(3, 5).
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Identify the coordinates</p>
                    <p className="ml-4">A(−1, 2) → x₁ = −1, y₁ = 2</p>
                    <p className="ml-4">B(3, 5) → x₂ = 3, y₂ = 5</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Apply the gradient formula</p>
                    <p className="ml-4 font-mono">m = (y₂ − y₁) / (x₂ − x₁)</p>
                    <p className="ml-4 font-mono">m = (5 − 2) / (3 − (−1))</p>
                    <p className="ml-4 font-mono">m = 3 / 4</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200">Answer: m = 3/4</p>
                    <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                      The line has a positive gradient, so it slopes upward.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900/50 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Finding Gradient of Perpendicular Lines
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-purple-500 dark:border-purple-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Find the gradient of all lines perpendicular to a line with gradient 2/7.
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Identify the given gradient</p>
                    <p className="ml-4">Original gradient: m₁ = 2/7</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Find the negative reciprocal</p>
                    <p className="ml-4">Reciprocal of 2/7 is 7/2</p>
                    <p className="ml-4">Negative reciprocal is −7/2</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 3: Verify using m₁ × m₂ = −1</p>
                    <p className="ml-4 font-mono">(2/7) × (−7/2) = −14/14 = −1 ✓</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200">Answer: m = −7/2</p>
                    <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                      Any line perpendicular to the original line has gradient −7/2.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900/50 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample3 ? '▼' : '▶'} Example 3: Determining if Lines are Parallel or Perpendicular
            </button>

            {showExample3 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-purple-500 dark:border-purple-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Line l₁ passes through (1, 3) and (5, −5). Line l₂ passes through (−2, 1) and (0, −3). Are the lines parallel, perpendicular, or neither?
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Find gradient of l₁</p>
                    <p className="ml-4 font-mono">m₁ = (−5 − 3) / (5 − 1)</p>
                    <p className="ml-4 font-mono">m₁ = −8 / 4 = −2</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Find gradient of l₂</p>
                    <p className="ml-4 font-mono">m₂ = (−3 − 1) / (0 − (−2))</p>
                    <p className="ml-4 font-mono">m₂ = −4 / 2 = −2</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 3: Compare the gradients</p>
                    <p className="ml-4">m₁ = −2 and m₂ = −2</p>
                    <p className="ml-4">Since m₁ = m₂, the lines are <strong>parallel</strong></p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200">Answer: The lines are PARALLEL</p>
                    <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                      Both lines have the same gradient (−2), so they never intersect.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. Find the gradient of the line through each pair of points:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) (2, 3) and (5, 12)</p>
                <p>b) (−1, 4) and (3, −2)</p>
                <p>c) (0, 0) and (−4, 6)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-purple-600 dark:text-purple-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> m = (12 − 3)/(5 − 2) = 9/3 = 3</p>
                  <p><strong>b)</strong> m = (−2 − 4)/(3 − (−1)) = −6/4 = −3/2</p>
                  <p><strong>c)</strong> m = (6 − 0)/(−4 − 0) = 6/(−4) = −3/2</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Find the gradient of all lines perpendicular to a line with gradient:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) 1/2</p>
                <p>b) −5</p>
                <p>c) 3</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-purple-600 dark:text-purple-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> Negative reciprocal of 1/2 is −2</p>
                  <p><strong>b)</strong> Negative reciprocal of −5 is 1/5</p>
                  <p><strong>c)</strong> Negative reciprocal of 3 is −1/3</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                3. If two lines have these gradients, are they perpendicular?
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) 1/3 and 3</p>
                <p>b) 5 and −5</p>
                <p>c) 2/3 and −3/2</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-purple-600 dark:text-purple-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> (1/3) × 3 = 1 ≠ −1, so NOT perpendicular</p>
                  <p><strong>b)</strong> 5 × (−5) = −25 ≠ −1, so NOT perpendicular</p>
                  <p><strong>c)</strong> (2/3) × (−3/2) = −6/6 = −1, so YES perpendicular ✓</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>Gradient</strong> measures the steepness of a line</li>
            <li><strong>Gradient formula:</strong> m = (y₂ − y₁)/(x₂ − x₁)</li>
            <li><strong>Positive gradient:</strong> line slopes upward (↗)</li>
            <li><strong>Negative gradient:</strong> line slopes downward (↘)</li>
            <li><strong>Horizontal line:</strong> gradient = 0</li>
            <li><strong>Vertical line:</strong> gradient is undefined</li>
            <li><strong>Parallel lines:</strong> have equal gradients (m₁ = m₂)</li>
            <li><strong>Perpendicular lines:</strong> have gradients that are negative reciprocals (m₁ × m₂ = −1)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GradientAndLineRelationships;
