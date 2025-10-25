import { useState } from 'react';

const RelationsFunctionsFundamentals = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [testPoints, _setTestPoints] = useState<Array<[number, number]>>([
    [1, 2],
    [2, 3],
    [3, 4]
  ]);

  // Helper function to check if a set of points represents a function
  const isFunction = (points: Array<[number, number]>) => {
    const xValues = points.map(p => p[0]);
    const uniqueX = new Set(xValues);
    return xValues.length === uniqueX.size;
  };

  const isFunctionResult = isFunction(testPoints);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Relations and Functions Fundamentals</h1>
        <p className="text-lg">Understanding the relationship between variables and when a relation is a function</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Understanding Relations */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. Understanding Relations</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              A <strong>relation</strong> between variables <em>x</em> and <em>y</em> is any set of points in the (x, y) plane.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              We say that the points <strong>connect</strong> the two variables.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Relations Can Be Expressed As:</h3>
            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">1.</span>
                <div>
                  <p className="font-semibold">An Equation</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Example: y = x - 2 (generates a straight line)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">2.</span>
                <div>
                  <p className="font-semibold">A Finite Set of Points</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Example: {'{'}(1, 2), (3, 4), (5, 6){'}'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">3.</span>
                <div>
                  <p className="font-semibold">An Infinite Set of Points</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Example: All points on a curve or graph</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">Important Note:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Not all relations can be defined by an equation. Some relations are simply described by a set of points but cannot be expressed as a single equation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Relation as Equation:</h3>
              <p className="font-mono text-sm mb-2 text-gray-900 dark:text-gray-100">y = x - 2</p>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                This equation generates an infinite set of points forming a straight line.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded border-2 border-purple-300 dark:border-purple-600">
              <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Relation as Points:</h3>
              <p className="font-mono text-sm mb-2 text-gray-900 dark:text-gray-100">{'{'}(0, 1), (1, 2), (−3, 1){'}'}</p>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                These 8 points form a relation but cannot be described by a single equation.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Defining Functions */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Defining Functions</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              A <strong>function</strong> is a relation in which <strong>no two different points have the same x-coordinate</strong> (or first component).
            </p>
          </div>

          <div className="dark:bg-indigo-950 p-6 rounded border-2 border-indigo-300 dark:border-indigo-400 mb-4">
            <h3 className="font-bold mb-3 text-indigo-800 dark:text-indigo-300">Key Insight:</h3>
            <div className="space-y-2 text-gray-800 dark:text-white">
              <p className="text-center text-lg font-semibold">
                Every function is a relation, but not every relation is a function.
              </p>
              <p className="text-sm text-gray-600 dark:text-indigo-200 text-center">
                A function is a <em>special type</em> of relation with unique x-values.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-400 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">✓ IS a Function:</h3>
              <p className="font-mono text-sm mb-2 text-gray-900 dark:text-gray-100">{'{'}(1, 2), (2, 3), (3, 4){'}'}</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                Each x-value appears only once. All x-coordinates are different.
              </p>
              <div className="bg-white dark:bg-gray-800 p-2 rounded text-xs">
                <p className="text-gray-800 dark:text-gray-200">x = 1 → y = 2</p>
                <p className="text-gray-800 dark:text-gray-200">x = 2 → y = 3</p>
                <p className="text-gray-800 dark:text-gray-200">x = 3 → y = 4</p>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-2 border-red-400 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-3">✗ NOT a Function:</h3>
              <p className="font-mono text-sm mb-2 text-gray-900 dark:text-gray-100">{'{'}(−1, −2), (−1, 3){'}'}</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                The x-value −1 appears twice with different y-values.
              </p>
              <div className="bg-white dark:bg-gray-800 p-2 rounded text-xs">
                <p className="text-red-600 dark:text-red-400">x = −1 → y = −2</p>
                <p className="text-red-600 dark:text-red-400">x = −1 → y = 3 ← Conflict!</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded mb-4 border border-purple-200 dark:border-purple-700">
            <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Interactive: Test if points form a function</p>
            <div className="space-y-2 mb-3">
              <p className="text-sm text-gray-700 dark:text-gray-300">Enter points (x, y):</p>
              <div className="font-mono text-sm bg-white dark:bg-gray-700 p-3 rounded border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">
                {'{'}
                {testPoints.map((p, i) => (
                  <span key={i}>
                    ({p[0]}, {p[1]}){i < testPoints.length - 1 ? ', ' : ''}
                  </span>
                ))}
                {'}'}
              </div>
            </div>
            <div className={`p-3 rounded ${isFunctionResult ? 'bg-green-100 dark:bg-green-900/50' : 'bg-red-100 dark:bg-red-900/50'}`}>
              <p className="text-sm text-gray-800 dark:text-gray-200">
                <strong>Result:</strong> This relation {isFunctionResult ? 'IS' : 'is NOT'} a function.
              </p>
              {!isFunctionResult && (
                <p className="text-xs text-red-700 dark:text-red-300 mt-1">
                  (Some x-values appear more than once)
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Section 3: Vertical Line Test */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">3. Vertical Line Test (Geometric Test)</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Vertical Line Test:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Suppose we draw all possible vertical lines on the graph of a relation.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>If each line cuts the graph <strong>at most once</strong>, then the relation <strong>is a function</strong>.</li>
              <li>If at least one line cuts the graph <strong>more than once</strong>, then the relation is <strong>not a function</strong>.</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-green-400 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">✓ Passes Test (Function):</h3>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-2 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">[Parabola graph: y = x²]</p>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Every vertical line cuts the graph only once.
                </p>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                This is a function because for each x-value, there is exactly one y-value.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-red-400 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-2">✗ Fails Test (Not a Function):</h3>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-2 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">[Circle graph: x² + y² = 25]</p>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Vertical lines cut the graph twice.
                </p>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                This is NOT a function because some x-values correspond to two different y-values.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">Why This Works:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              A vertical line represents a single x-value. If the line crosses the graph more than once,
              it means that one x-value is paired with multiple y-values, which violates the definition of a function.
            </p>
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
              {showExample1 ? '▼' : '▶'} Example 1: Identifying Functions from Point Sets
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Determine which of the following relations are functions:
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-mono mb-2 text-gray-900 dark:text-gray-100">a) {'{'}(1, 5), (2, 7), (3, 9), (4, 11){'}'}</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Check x-coordinates: 1, 2, 3, 4 - all different</p>
                      <p className="font-bold text-green-600 dark:text-green-400">✓ This IS a function</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-mono mb-2 text-gray-900 dark:text-gray-100">b) {'{'}(0, 3), (1, 4), (0, −3), (2, 5){'}'}</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Check x-coordinates: 0, 1, 0, 2</p>
                      <p className="text-red-600 dark:text-red-400">The x-value 0 appears twice!</p>
                      <p className="font-bold text-red-600 dark:text-red-400">✗ This is NOT a function</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-mono mb-2 text-gray-900 dark:text-gray-100">c) {'{'}(−2, 1), (−1, 1), (0, 1), (1, 1){'}'}</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Check x-coordinates: −2, −1, 0, 1 - all different</p>
                      <p className="text-gray-600 dark:text-gray-400">Note: y-values can repeat!</p>
                      <p className="font-bold text-green-600 dark:text-green-400">✓ This IS a function</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Applying the Vertical Line Test
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Which of these graphs represent functions?
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">a) Parabola opening upward</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Apply vertical line test:</p>
                      <p>Every vertical line we could draw cuts the parabola at most once.</p>
                      <p className="font-bold text-green-600 dark:text-green-400">✓ This IS a function</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">b) Circle</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Apply vertical line test:</p>
                      <p>Vertical lines through the middle of the circle cut it twice.</p>
                      <p className="font-bold text-red-600 dark:text-red-400">✗ This is NOT a function</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">c) Straight line (not vertical)</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Apply vertical line test:</p>
                      <p>Every vertical line cuts the straight line exactly once.</p>
                      <p className="font-bold text-green-600 dark:text-green-400">✓ This IS a function</p>
                    </div>
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
                1. Determine whether each relation is a function:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) {'{'}(2, 3), (4, 5), (6, 7){'}'}</p>
                <p>b) {'{'}(1, 1), (1, 2), (1, 3){'}'}</p>
                <p>c) {'{'}(−3, 0), (−2, 0), (−1, 0), (0, 0){'}'}</p>
                <p>d) y = 2x + 1</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> Function - all x-values are different</p>
                  <p><strong>b)</strong> NOT a function - x = 1 appears three times</p>
                  <p><strong>c)</strong> Function - all x-values are different (y-values can repeat)</p>
                  <p><strong>d)</strong> Function - for each x, there is exactly one y</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Use the vertical line test to determine which graphs represent functions:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) Horizontal line</p>
                <p>b) Vertical line</p>
                <p>c) Ellipse</p>
                <p>d) Cubic function y = x³</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> Function - each vertical line cuts once</p>
                  <p><strong>b)</strong> NOT a function - infinitely many points have the same x</p>
                  <p><strong>c)</strong> NOT a function - vertical lines through middle cut twice</p>
                  <p><strong>d)</strong> Function - each vertical line cuts once</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li>A <strong>relation</strong> is any set of points in the (x, y) plane connecting two variables</li>
            <li>Relations can be expressed as <strong>equations</strong> or as <strong>finite/infinite sets of points</strong></li>
            <li>A <strong>function</strong> is a special relation where no two points have the same x-coordinate</li>
            <li><strong>Every function is a relation</strong>, but not every relation is a function</li>
            <li><strong>Vertical Line Test</strong>: If any vertical line cuts the graph more than once, it's not a function</li>
            <li>In a function, each x-value maps to <strong>exactly one</strong> y-value</li>
            <li>Y-values <strong>can repeat</strong> in functions - only x-values must be unique</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RelationsFunctionsFundamentals;
