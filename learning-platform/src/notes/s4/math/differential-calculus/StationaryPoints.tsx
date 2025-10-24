import React, { useState } from 'react';

const StationaryPoints = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">Stationary Points</h1>
        <p className="text-xl opacity-90">Maxima, Minima, and Optimization</p>
      </div>

      <div className="max-w-4xl mx-auto p-8 space-y-12">

        {/* Section 1: Finding Stationary Points */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            1. Finding Stationary Points
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              A <strong>stationary point</strong> is where the derivative equals zero (horizontal tangent).
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-semibold mb-2">To Find Stationary Points:</p>
              <ol className="ml-4 space-y-1">
                <li>1. Find f'(x)</li>
                <li>2. Solve f'(x) = 0</li>
                <li>3. Find y-coordinates using f(x)</li>
              </ol>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 1.1
            </h3>
            <p className="mb-3">
              Find the stationary points of f(x) = x³ - 3x + 2
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">Step 1: Find f'(x)</p>
                  <p className="font-mono ml-4">f'(x) = 3x² - 3</p>
                </div>
                <div>
                  <p className="font-semibold">Step 2: Solve f'(x) = 0</p>
                  <div className="font-mono ml-4 space-y-1">
                    <p>3x² - 3 = 0</p>
                    <p>x² = 1</p>
                    <p>x = ±1</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Step 3: Find y-coordinates</p>
                  <div className="ml-4">
                    <p>f(-1) = (-1)³ - 3(-1) + 2 = -1 + 3 + 2 = 4</p>
                    <p>f(1) = 1³ - 3(1) + 2 = 1 - 3 + 2 = 0</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded mt-3">
                <p className="font-semibold">Stationary points: (-1, 4) and (1, 0)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Nature of Stationary Points */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            2. Nature of Stationary Points
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              Not all stationary points are the same! We need to determine if they are maxima, minima, or inflection points.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">First Derivative Test:</h3>
              <div className="space-y-2 text-sm">
                <p>• <strong>Maximum:</strong> f' changes from + to 0 to - (rising → peak → falling)</p>
                <p>• <strong>Minimum:</strong> f' changes from - to 0 to + (falling → valley → rising)</p>
                <p>• <strong>Inflection:</strong> f' same sign both sides (no change in direction)</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 2.1
            </h3>
            <p className="mb-3">
              Classify the stationary points of f(x) = x³ - 3x + 2 at x = -1 and x = 1
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="mb-2">We have f'(x) = 3x² - 3</p>
              <div className="space-y-3 mt-3">
                <div>
                  <p className="font-semibold">At x = -1:</p>
                  <p className="text-sm ml-4">Test x = -2: f'(-2) = 3(4) - 3 = 9 &gt; 0 (positive)</p>
                  <p className="text-sm ml-4">Test x = 0: f'(0) = -3 &lt; 0 (negative)</p>
                  <p className="ml-4 font-semibold text-green-600">+ to - → Maximum at (-1, 4)</p>
                </div>
                <div>
                  <p className="font-semibold">At x = 1:</p>
                  <p className="text-sm ml-4">Test x = 0: f'(0) = -3 &lt; 0 (negative)</p>
                  <p className="text-sm ml-4">Test x = 2: f'(2) = 3(4) - 3 = 9 &gt; 0 (positive)</p>
                  <p className="ml-4 font-semibold text-green-600">- to + → Minimum at (1, 0)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Second Derivative Test */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            3. Second Derivative Test
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              The <strong>second derivative</strong> provides a quicker way to classify stationary points.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-semibold mb-2">Second Derivative Test:</p>
              <p className="text-sm">If f'(a) = 0, then:</p>
              <div className="ml-4 mt-2 space-y-1">
                <p>• f''(a) &gt; 0 → Minimum (concave up ∪)</p>
                <p>• f''(a) &lt; 0 → Maximum (concave down ∩)</p>
                <p>• f''(a) = 0 → Inconclusive (use first derivative test)</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 3.1
            </h3>
            <p className="mb-3">
              Use the second derivative test for f(x) = x³ - 3x + 2
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <div className="space-y-3">
                <p>f'(x) = 3x² - 3</p>
                <p>f''(x) = 6x</p>
                <div className="mt-3">
                  <p className="font-semibold">At x = -1:</p>
                  <p className="ml-4">f''(-1) = 6(-1) = -6 &lt; 0</p>
                  <p className="ml-4 font-semibold text-green-600">→ Maximum</p>
                </div>
                <div>
                  <p className="font-semibold">At x = 1:</p>
                  <p className="ml-4">f''(1) = 6(1) = 6 &gt; 0</p>
                  <p className="ml-4 font-semibold text-green-600">→ Minimum</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Optimization */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            4. Optimization Problems
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              Optimization problems ask us to find maximum or minimum values in real-world contexts.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-semibold mb-2">Process:</p>
              <ol className="ml-4 space-y-1 text-sm">
                <li>1. Define variables</li>
                <li>2. Write function to optimize</li>
                <li>3. Find f'(x) and solve f'(x) = 0</li>
                <li>4. Verify it's a max/min using derivative tests</li>
                <li>5. Interpret answer in context</li>
              </ol>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 4.1
            </h3>
            <p className="mb-3">
              A rectangle has perimeter 100m. Find the dimensions that maximize its area.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <div className="space-y-2 text-sm">
                <p>Let length = l, width = w</p>
                <p>Constraint: 2l + 2w = 100 → w = 50 - l</p>
                <p>Area: A = l × w = l(50 - l) = 50l - l²</p>
                <p className="mt-2">A'(l) = 50 - 2l</p>
                <p>Set A'(l) = 0: 50 - 2l = 0 → l = 25</p>
                <p>Then w = 50 - 25 = 25</p>
                <p className="mt-2">A''(l) = -2 &lt; 0 → Maximum ✓</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded mt-3">
                <p className="font-semibold">Maximum area when rectangle is 25m × 25m (a square!)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border-2 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
            🎓 Key Takeaways
          </h3>
          <ul className="space-y-2 text-lg">
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Stationary points: solve f'(x) = 0</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>First derivative test: check sign change of f'(x)</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Second derivative test: f''(x) &gt; 0 → min, f''(x) &lt; 0 → max</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Optimization: formulate, differentiate, find critical points, verify</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default StationaryPoints;
