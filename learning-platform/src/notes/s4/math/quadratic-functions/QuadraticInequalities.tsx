import { useState } from 'react';

const QuadraticInequalities = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showExample4, setShowExample4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Quadratic Inequalities</h1>
        <p className="text-lg">Solving quadratic inequalities using sign diagrams and graphical methods</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Introduction */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. What is a Quadratic Inequality?</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              A <strong>quadratic inequality</strong> can be written in either the form <span className="font-mono">ax² + bx + c &gt; 0</span> or
              <span className="font-mono"> ax² + bx + c &lt; 0</span> where a ≠ 0.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              We have seen that the solutions to a quadratic equation are the x-intercepts of the corresponding quadratic function.
              In a similar way, the solutions to a quadratic <strong>inequality</strong> are the values of x for which the
              corresponding function has a particular sign.
            </p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Strategy:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">To solve quadratic inequalities we use the following procedure:</p>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200 ml-4">
              <li>• Make the RHS zero by shifting all terms to the LHS</li>
              <li>• Fully factorise the LHS</li>
              <li>• Draw a sign diagram for the LHS</li>
              <li>• Determine the values required from the sign diagram</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Sign Diagrams */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Sign Diagrams</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              A <strong>sign diagram</strong> shows where an expression is positive (+) or negative (-).
              For a quadratic in factored form <span className="font-mono">(x + 7)(x - 2)</span>, we:
            </p>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200 ml-4">
              <li>1. Find the critical values (where each factor = 0)</li>
              <li>2. Draw a number line with these critical values</li>
              <li>3. Test the sign in each region</li>
              <li>4. Determine where the expression is positive or negative</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 1: Solve for x: x² + 5x &lt; 14</h3>
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample1 ? '▼' : '▶'}</span>
            </button>
            {showExample1 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-3">
                <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200">
                  <p><strong>Step 1: Make RHS zero</strong></p>
                  <p className="ml-4">x² + 5x &lt; 14</p>
                  <p className="ml-4">∴ x² + 5x - 14 &lt; 0</p>

                  <p className="mt-3"><strong>Step 2: Factorise</strong></p>
                  <p className="ml-4">∴ (x + 7)(x - 2) &lt; 0</p>

                  <p className="mt-3"><strong>Step 3: Sign diagram of LHS</strong></p>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded my-2">
                    <div className="flex items-center justify-center space-x-4 text-xs">
                      <span>-</span>
                      <span className="text-red-600 dark:text-red-400">━━━━</span>
                      <span className="font-bold">-7</span>
                      <span className="text-green-600 dark:text-green-400">━━━━</span>
                      <span className="font-bold">2</span>
                      <span className="text-red-600 dark:text-red-400">━━━━</span>
                      <span>+</span>
                    </div>
                    <div className="text-center mt-2 text-xs">
                      <p className="text-red-600 dark:text-red-400">negative | <span className="text-green-600 dark:text-green-400">positive</span> | <span className="text-red-600 dark:text-red-400">negative</span></p>
                    </div>
                  </div>

                  <p className="mt-3"><strong>Step 4: Determine solution</strong></p>
                  <p className="ml-4">The inequality is true for -7 &lt; x &lt; 2</p>
                  <p className="ml-4 text-green-600 dark:text-green-400 font-bold mt-2">∴ Solution: -7 &lt; x &lt; 2</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 2: Solve for x: x² + 4x &gt; -4x</h3>
            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample2 ? '▼' : '▶'}</span>
            </button>
            {showExample2 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-3">
                <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200">
                  <p>x² + 4x &gt; -4x</p>
                  <p className="ml-4">∴ x² + 4x + 4x &gt; 0</p>
                  <p className="ml-4">∴ x² + 4x + 4 &gt; 0</p>
                  <p className="ml-4">∴ (x + 2)² &gt; 0</p>

                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded my-2">
                    <div className="flex items-center justify-center space-x-4 text-xs">
                      <span className="text-green-600 dark:text-green-400">━━━━━━</span>
                      <span className="font-bold">-2</span>
                      <span className="text-green-600 dark:text-green-400">━━━━━━</span>
                    </div>
                    <div className="text-center mt-2 text-xs">
                      <p className="text-green-600 dark:text-green-400">positive | <span className="text-gray-600">zero</span> | positive</p>
                    </div>
                  </div>

                  <p className="mt-3">The inequality is true for all real x</p>
                  <p className="ml-4 text-green-600 dark:text-green-400 font-bold">∴ Solution: all real x</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Graphical Interpretation */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">3. Graphical Interpretation</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              We can also solve quadratic inequalities by considering the graph of the quadratic function.
            </p>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200 ml-4">
              <li>• <span className="font-mono">ax² + bx + c &gt; 0</span>: Find where the parabola is <strong>above</strong> the x-axis</li>
              <li>• <span className="font-mono">ax² + bx + c &lt; 0</span>: Find where the parabola is <strong>below</strong> the x-axis</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
              <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Parabola Opens Upward (a &gt; 0):</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>• <strong>Positive</strong> outside the x-intercepts</li>
                <li>• <strong>Negative</strong> between the x-intercepts</li>
                <li>• If only one intercept: always positive except at that point</li>
                <li>• If no intercepts: always positive</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h3 className="font-bold mb-3 text-green-700 dark:text-green-300">Parabola Opens Downward (a &lt; 0):</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>• <strong>Negative</strong> outside the x-intercepts</li>
                <li>• <strong>Positive</strong> between the x-intercepts</li>
                <li>• If only one intercept: always negative except at that point</li>
                <li>• If no intercepts: always negative</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 3: Solve x² - 2x &gt; 6 graphically</h3>
            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample3 ? '▼' : '▶'}</span>
            </button>
            {showExample3 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-3">
                <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200">
                  <p><strong>Rearrange:</strong></p>
                  <p className="ml-4">x² - 2x &gt; 6</p>
                  <p className="ml-4">∴ x² - 2x - 6 &gt; 0</p>

                  <p className="mt-3"><strong>Find x-intercepts (where y = 0):</strong></p>
                  <p className="ml-4">x² - 2x - 6 = 0</p>
                  <p className="ml-4">Using the quadratic formula:</p>
                  <p className="ml-4">x = (2 ± √(4 + 24))/2</p>
                  <p className="ml-4">x = (2 ± √28)/2</p>
                  <p className="ml-4">x = 1 ± √7</p>
                  <p className="ml-4">x ≈ -1.65  or  x ≈ 3.65</p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded my-2">
                    <p className="text-sm"><strong>Graphical analysis:</strong></p>
                    <p className="text-sm mt-1">Since a = 1 &gt; 0, the parabola opens upwards ∪</p>
                    <p className="text-sm mt-1">The function is positive (y &gt; 0) when:</p>
                    <p className="text-sm mt-1">x &lt; 1 - √7  or  x &gt; 1 + √7</p>
                  </div>

                  <p className="text-green-600 dark:text-green-400 font-bold mt-2">∴ Solution: x &lt; 1 - √7  or  x &gt; 1 + √7</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Or approximately: x &lt; -1.65  or  x &gt; 3.65</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 4: Solve 3x² + 6x + 3 &lt; 0</h3>
            <button
              onClick={() => setShowExample4(!showExample4)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample4 ? '▼' : '▶'}</span>
            </button>
            {showExample4 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-3">
                <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200">
                  <p><strong>Factorise:</strong></p>
                  <p className="ml-4">3x² + 6x + 3 &lt; 0</p>
                  <p className="ml-4">∴ 3(x² + 2x + 1) &lt; 0</p>
                  <p className="ml-4">∴ 3(x + 1)² &lt; 0</p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded my-2 border-l-4 border-yellow-500 dark:border-yellow-400">
                    <p className="text-sm"><strong>Important observation:</strong></p>
                    <p className="text-sm mt-1">(x + 1)² is always ≥ 0 for all real x</p>
                    <p className="text-sm mt-1">Therefore 3(x + 1)² is always ≥ 0</p>
                    <p className="text-sm mt-1">It can never be &lt; 0</p>
                  </div>

                  <p className="text-red-600 dark:text-red-400 font-bold mt-2">∴ No solution (the inequality is never true)</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 4: Special Cases */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">4. Special Cases</h2>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 dark:border-yellow-400 mb-4">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-300">Perfect Squares:</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p>When a quadratic is a perfect square like <span className="font-mono">(x - a)²</span>:</p>
              <ul className="ml-4 space-y-1">
                <li>• <span className="font-mono">(x - a)² &gt; 0</span>: True for all x except x = a</li>
                <li>• <span className="font-mono">(x - a)² ≥ 0</span>: True for all real x</li>
                <li>• <span className="font-mono">(x - a)² &lt; 0</span>: Never true (no solution)</li>
                <li>• <span className="font-mono">(x - a)² = 0</span>: Only true at x = a</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 dark:border-yellow-400">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-300">No Real x-intercepts:</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p>When the discriminant Δ = b² - 4ac &lt; 0 (no real roots):</p>
              <ul className="ml-4 space-y-1">
                <li>• If a &gt; 0: parabola opens upward, always positive</li>
                <li>• If a &lt; 0: parabola opens downward, always negative</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-600">
          <h3 className="font-bold text-xl mb-4 text-blue-900 dark:text-blue-200">Key Takeaways</h3>
          <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Always rearrange inequality to have 0 on RHS before solving</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Factorise completely before drawing sign diagram</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Sign diagrams show where expression is positive or negative</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Graphically: ax² + bx + c &gt; 0 means parabola is above x-axis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Perfect squares (x - a)² are never negative</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Some inequalities have no solution or are true for all real x</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuadraticInequalities;
