import React, { useState } from 'react';

const DomainAndRange = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Domain and Range</h1>
        <p className="text-lg">Understanding the set of possible inputs and outputs for functions</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Domain and Range Concepts */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. Domain and Range Concepts</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition - Domain:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The <strong>domain</strong> of a relation is the set of values which the variable on the <strong>horizontal axis</strong> can take.
              This variable is usually <strong>x</strong>.
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded mt-3">
              <p className="text-center font-semibold text-gray-900 dark:text-gray-100">Domain = All possible x-values (inputs)</p>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition - Range:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The <strong>range</strong> of a relation is the set of values which the variable on the <strong>vertical axis</strong> can take.
              This variable is usually <strong>y</strong>.
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded mt-3">
              <p className="text-center font-semibold text-gray-900 dark:text-gray-100">Range = All possible y-values (outputs)</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Visual Representation:</h3>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-8">
                  <div className="text-left">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Range (y-values)</p>
                    <div className="bg-indigo-200 dark:bg-indigo-800 px-4 py-12 rounded">
                      <p className="writing-mode-vertical text-gray-900 dark:text-gray-100 font-mono">↕</p>
                    </div>
                  </div>
                  <div>
                    <div className="bg-gray-300 dark:bg-gray-600 h-32 w-32 rounded flex items-center justify-center">
                      <p className="text-gray-700 dark:text-gray-300">Graph</p>
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Domain (x-values)</p>
                      <div className="bg-blue-200 dark:bg-blue-800 px-12 py-4 rounded inline-block mt-1">
                        <p className="font-mono text-gray-900 dark:text-gray-100">←→</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              For a relation defined for all x such that 1 ≤ x &lt; 5, with y-values satisfying −2 &lt; y ≤ 4:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Domain:</p>
                <p className="font-mono text-sm text-gray-800 dark:text-gray-200">{'{'}x | 1 ≤ x &lt; 5{'}'}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Read as: "the set of x such that x is greater than or equal to 1 and less than 5"</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Range:</p>
                <p className="font-mono text-sm text-gray-800 dark:text-gray-200">{'{'}y | −2 < y ≤ 4{'}'}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Read as: "the set of y such that y is greater than −2 and less than or equal to 4"</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded border-2 border-purple-300 dark:border-purple-600">
            <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Interval Notation:</h3>
            <p className="mb-3 text-sm text-gray-800 dark:text-gray-200">
              Domain and range are often described using <strong>interval notation</strong>:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded space-y-2 text-sm">
              <div className="flex items-center gap-4">
                <span className="font-mono w-32 text-gray-900 dark:text-gray-100">[a, b]</span>
                <span className="text-gray-700 dark:text-gray-300">Closed interval: a ≤ x ≤ b (includes endpoints)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono w-32 text-gray-900 dark:text-gray-100">(a, b)</span>
                <span className="text-gray-700 dark:text-gray-300">Open interval: a < x < b (excludes endpoints)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono w-32 text-gray-900 dark:text-gray-100">[a, b)</span>
                <span className="text-gray-700 dark:text-gray-300">Half-open: a ≤ x < b (includes a, excludes b)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono w-32 text-gray-900 dark:text-gray-100">(-∞, a]</span>
                <span className="text-gray-700 dark:text-gray-300">x ≤ a (all values up to and including a)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono w-32 text-gray-900 dark:text-gray-100">[a, ∞)</span>
                <span className="text-gray-700 dark:text-gray-300">x ≥ a (all values from a onwards)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono w-32 text-gray-900 dark:text-gray-100">(-∞, ∞)</span>
                <span className="text-gray-700 dark:text-gray-300">All real numbers (ℝ)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Natural Domain */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Natural Domain</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What is Natural Domain?</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              To fully describe a function, we need both a <strong>rule</strong> and a <strong>domain</strong>.
            </p>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              If a domain is not specified, we use the <strong>natural domain</strong>, which is the <strong>largest subset of ℝ</strong> for which f(x) is defined.
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-200">Common Domain Restrictions:</h3>
            <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-1 text-gray-900 dark:text-gray-100">1. Square Roots:</p>
                <p className="font-mono mb-1">f(x) = √x</p>
                <p className="text-gray-700 dark:text-gray-300">Restriction: x ≥ 0 (cannot take square root of negative numbers)</p>
                <p className="text-indigo-600 dark:text-indigo-400">Natural domain: {'{'}x | x ≥ 0{'}'} or [0, ∞)</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-1 text-gray-900 dark:text-gray-100">2. Denominators:</p>
                <p className="font-mono mb-1">f(x) = 1/(x − 3)</p>
                <p className="text-gray-700 dark:text-gray-300">Restriction: x ≠ 3 (cannot divide by zero)</p>
                <p className="text-indigo-600 dark:text-indigo-400">Natural domain: {'{'}x | x ≠ 3{'}'} or (-∞, 3) ∪ (3, ∞)</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-1 text-gray-900 dark:text-gray-100">3. Combined Restrictions:</p>
                <p className="font-mono mb-1">f(x) = 2/√(x + 3)</p>
                <p className="text-gray-700 dark:text-gray-300">Restrictions: x + 3 > 0 (square root and denominator both require x + 3 > 0)</p>
                <p className="text-indigo-600 dark:text-indigo-400">Natural domain: {'{'}x | x > −3{'}'} or (−3, ∞)</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Finding Natural Domain - Step by Step:</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                <p className="text-gray-800 dark:text-gray-200">Identify any <strong>square roots</strong> or even roots - the radicand must be ≥ 0</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                <p className="text-gray-800 dark:text-gray-200">Identify any <strong>denominators</strong> - they cannot equal zero</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                <p className="text-gray-800 dark:text-gray-200">Solve inequalities to find which x-values are <strong>allowed</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                <p className="text-gray-800 dark:text-gray-200">Express the domain using <strong>set notation</strong> or <strong>interval notation</strong></p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Detailed Example:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">Find the natural domain of f(x) = √(x + 3) + √(5 − x)</p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded space-y-3 text-sm">
              <div>
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Step 1: Identify restrictions</p>
                <p className="text-gray-800 dark:text-gray-200">• First square root requires: x + 3 ≥ 0 → x ≥ −3</p>
                <p className="text-gray-800 dark:text-gray-200">• Second square root requires: 5 − x ≥ 0 → x ≤ 5</p>
              </div>
              <div>
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Step 2: Combine restrictions</p>
                <p className="text-gray-800 dark:text-gray-200">Both conditions must be true: x ≥ −3 <strong>AND</strong> x ≤ 5</p>
              </div>
              <div>
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Step 3: Write domain</p>
                <p className="text-indigo-600 dark:text-indigo-400">Natural domain: {'{'}x | −3 ≤ x ≤ 5{'}'} or [−3, 5]</p>
              </div>
            </div>
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
              {showExample1 ? '▼' : '▶'} Example 1: Finding Domain and Range from a Graph
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  A graph shows a speed function during a race. Time is shown from 0 to 90 seconds,
                  and speed varies from a minimum of about 100 km/h to a maximum of about 300 km/h.
                </p>

                <div className="ml-4 space-y-3 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">a) Why must this be a function?</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      At any given moment in time (x-value), there can only be one speed (y-value).
                      A vertical line at any time t would cut the graph only once. Therefore, it passes the vertical line test.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">b) Find the domain and range</p>
                    <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                      <p><strong>Domain:</strong> Time values from 0 to 90 seconds</p>
                      <p className="font-mono text-indigo-600 dark:text-indigo-400">{'{'}t | 0 ≤ t ≤ 90{'}'} or [0, 90]</p>
                      <p className="mt-2"><strong>Range:</strong> Speed values from approximately 100 to 300 km/h</p>
                      <p className="font-mono text-indigo-600 dark:text-indigo-400">{'{'}v | 100 ≤ v ≤ 300{'}'} or [100, 300]</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Finding Natural Domain
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Find the natural domain of each function:
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">a) f(x) = 4√(x − 2)</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Restriction: x − 2 ≥ 0</p>
                      <p>Solve: x ≥ 2</p>
                      <p className="font-mono text-indigo-600 dark:text-indigo-400">Natural domain: {'{'}x | x ≥ 2{'}'} or [2, ∞)</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">b) f(x) = 3/(x − 2)</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Restriction: x − 2 ≠ 0</p>
                      <p>Solve: x ≠ 2</p>
                      <p className="font-mono text-indigo-600 dark:text-indigo-400">Natural domain: {'{'}x | x ≠ 2{'}'} or (-∞, 2) ∪ (2, ∞)</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">c) f(x) = √(3 − x)</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Restriction: 3 − x ≥ 0</p>
                      <p>Solve: −x ≥ −3 → x ≤ 3</p>
                      <p className="font-mono text-indigo-600 dark:text-indigo-400">Natural domain: {'{'}x | x ≤ 3{'}'} or (-∞, 3]</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">d) f(x) = 1/((x − 1)(x + 2))</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Restrictions: (x − 1) ≠ 0 and (x + 2) ≠ 0</p>
                      <p>Solve: x ≠ 1 and x ≠ −2</p>
                      <p className="font-mono text-indigo-600 dark:text-indigo-400">Natural domain: {'{'}x | x ≠ 1, x ≠ −2{'}'}</p>
                      <p className="font-mono text-indigo-600 dark:text-indigo-400">or (-∞, −2) ∪ (−2, 1) ∪ (1, ∞)</p>
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
                1. Find the natural domain of each function:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) f(x) = 2x</p>
                <p>b) f(x) = 1/x</p>
                <p>c) f(x) = √(x − 3)</p>
                <p>d) f(x) = 1/(x + 5)</p>
                <p>e) f(x) = 1/√x</p>
                <p>f) f(x) = √x + √(2 − x)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> All real numbers: (-∞, ∞) or ℝ</p>
                  <p><strong>b)</strong> {'{'}x | x ≠ 0{'}'} or (-∞, 0) ∪ (0, ∞)</p>
                  <p><strong>c)</strong> {'{'}x | x ≥ 3{'}'} or [3, ∞)</p>
                  <p><strong>d)</strong> {'{'}x | x ≠ −5{'}'} or (-∞, −5) ∪ (−5, ∞)</p>
                  <p><strong>e)</strong> {'{'}x | x > 0{'}'} or (0, ∞) [must be positive for both √ and denominator]</p>
                  <p><strong>f)</strong> {'{'}x | 0 ≤ x ≤ 2{'}'} or [0, 2] [x ≥ 0 AND x ≤ 2]</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Explain why the natural domain of each function is restricted:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) f(x) = √(x²− 9)</p>
                <p>b) f(x) = x/(x² − 9)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> Need x² − 9 ≥ 0, so x² ≥ 9, which means x ≤ −3 or x ≥ 3</p>
                  <p className="ml-4">Domain: (-∞, −3] ∪ [3, ∞)</p>
                  <p><strong>b)</strong> Need x² − 9 ≠ 0, so x² ≠ 9, which means x ≠ ±3</p>
                  <p className="ml-4">Domain: (-∞, −3) ∪ (−3, 3) ∪ (3, ∞)</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>Domain</strong> = set of all possible x-values (horizontal axis, inputs)</li>
            <li><strong>Range</strong> = set of all possible y-values (vertical axis, outputs)</li>
            <li>Use <strong>interval notation</strong> or <strong>set notation</strong> to express domain and range</li>
            <li><strong>Natural domain</strong> = largest subset of ℝ for which f(x) is defined</li>
            <li>Common restrictions: <strong>square roots</strong> (radicand ≥ 0) and <strong>denominators</strong> (cannot be 0)</li>
            <li>For combined restrictions, find where <strong>all conditions</strong> are satisfied</li>
            <li>Square brackets [ ] include endpoints, parentheses ( ) exclude them</li>
            <li>Always use parentheses with ∞ or −∞ (infinity is never "reached")</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DomainAndRange;
