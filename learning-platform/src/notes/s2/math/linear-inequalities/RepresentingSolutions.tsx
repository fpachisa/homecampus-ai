import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function RepresentingSolutions() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Representing Solutions</h1>
        <p className="mt-2 text-blue-100">Number lines, interval notation, and compound inequalities</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Number Line Representation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Number Line Representation
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A number line is the most visual way to show all solutions to an inequality. It shows WHERE the solutions are and whether boundary points are included.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Two Key Elements</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">1. Circle Type (at the boundary)</p>
                  <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300 space-y-1">
                    <li><strong>Open circle (○):</strong> Boundary NOT included (&lt; or &gt;)</li>
                    <li><strong>Closed circle (●):</strong> Boundary IS included (≤ or ≥)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">2. Shading Direction</p>
                  <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300 space-y-1">
                    <li><strong>Shade left:</strong> Values less than the boundary (&lt; or ≤)</li>
                    <li><strong>Shade right:</strong> Values greater than the boundary (&gt; or ≥)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Visual examples grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-300 dark:border-gray-700 p-4 rounded">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">x &lt; 3</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">Open circle, shade left</p>
                <div className="w-full overflow-hidden">
                  <MathToolRenderer
                    toolName="numberLine"
                    parameters={{
                      min: -1,
                      max: 6,
                      intervals: [
                        { start: null, end: 3, startInclusive: false, endInclusive: false, color: "#3b82f6" }
                      ],
                      points: [
                        { value: 3, style: "open", color: "#3b82f6" }
                      ]
                    }}
                  />
                </div>
              </div>

              <div className="border border-gray-300 dark:border-gray-700 p-4 rounded">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">x ≥ 3</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">Closed circle, shade right</p>
                <div className="w-full overflow-hidden">
                  <MathToolRenderer
                    toolName="numberLine"
                    parameters={{
                      min: -1,
                      max: 6,
                      intervals: [
                        { start: 3, end: null, startInclusive: true, color: "#10b981" }
                      ],
                      points: [
                        { value: 3, style: "closed", color: "#10b981" }
                      ]
                    }}
                  />
                </div>
              </div>

              <div className="border border-gray-300 dark:border-gray-700 p-4 rounded">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">x &gt; −2</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">Open circle, shade right</p>
                <div className="w-full overflow-hidden">
                  <MathToolRenderer
                    toolName="numberLine"
                    parameters={{
                      min: -5,
                      max: 3,
                      intervals: [
                        { start: -2, end: null, startInclusive: false, color: "#f59e0b" }
                      ],
                      points: [
                        { value: -2, style: "open", color: "#f59e0b" }
                      ]
                    }}
                  />
                </div>
              </div>

              <div className="border border-gray-300 dark:border-gray-700 p-4 rounded">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">x ≤ −2</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">Closed circle, shade left</p>
                <div className="w-full overflow-hidden">
                  <MathToolRenderer
                    toolName="numberLine"
                    parameters={{
                      min: -5,
                      max: 3,
                      intervals: [
                        { start: null, end: -2, startInclusive: false, endInclusive: true, color: "#8b5cf6" }
                      ],
                      points: [
                        { value: -2, style: "closed", color: "#8b5cf6" }
                      ]
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Interval Notation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Interval Notation
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Interval notation</strong> is a compact way to write solution sets using brackets and parentheses.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">Bracket Rules</h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>[ or ]</strong> = <strong>Closed bracket</strong> = Boundary IS included (≤ or ≥)</p>
                <p><strong>( or )</strong> = <strong>Parenthesis</strong> = Boundary NOT included (&lt; or &gt;)</p>
                <p><strong>∞ or −∞</strong> = Always use parenthesis (infinity is never reached!)</p>
              </div>
            </div>

            {/* Conversion Table */}
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300 dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-800 dark:text-gray-100">Inequality</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-800 dark:text-gray-100">Interval Notation</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-800 dark:text-gray-100">Meaning</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">x &lt; 5</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">(−∞, 5)</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">All values up to (but not including) 5</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">x ≤ 5</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">(−∞, 5]</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">All values up to and including 5</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">x &gt; 3</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">(3, ∞)</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">All values greater than 3</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">x ≥ 3</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">[3, ∞)</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">All values 3 and greater</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">−2 ≤ x &lt; 4</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">[−2, 4)</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">From −2 (included) to 4 (not included)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                💡 Memory Trick
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Square bracket = Solid circle</strong> (both have corners/are "complete")<br />
                <strong>Parenthesis = Open circle</strong> (both are curved/"open")
              </p>
            </div>
          </div>

          {/* Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example: Converting Between Forms
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Solve 2x − 3 ≥ 5 and write in interval notation.
              </p>
              <p className="text-gray-700 dark:text-gray-300 space-y-1">
                <strong>Step 1:</strong> Solve<br />
                2x − 3 ≥ 5<br />
                2x ≥ 8<br />
                x ≥ 4
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Step 2:</strong> Convert to interval notation<br />
                <span className="font-mono text-lg">[4, ∞)</span>
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Visual representation:</p>
              <div className="w-full overflow-hidden">
                <MathToolRenderer
                  toolName="numberLine"
                  parameters={{
                    min: 0,
                    max: 10,
                    intervals: [
                      { start: 4, end: null, startInclusive: true, color: "#10b981", label: "[4, ∞)" }
                    ],
                    points: [
                      { value: 4, style: "closed", color: "#10b981" }
                    ],
                    title: "x ≥ 4 = [4, ∞)"
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Compound Inequalities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Compound Inequalities
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Compound inequalities</strong> combine two inequalities using AND or OR.
            </p>

            {/* AND inequalities */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                AND Inequalities (Intersection)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Written as: <strong>a &lt; x AND x &lt; b</strong> or more compactly: <strong>a &lt; x &lt; b</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Meaning:</strong> x must satisfy BOTH conditions simultaneously.<br />
                <strong>Solution set:</strong> The overlap (intersection) of both inequalities.
              </p>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Example: −2 &lt; x &lt; 5</p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  x must be greater than −2 AND less than 5<br />
                  Interval notation: (−2, 5)
                </p>
                <div className="w-full overflow-hidden">
                  <MathToolRenderer
                    toolName="numberLine"
                    parameters={{
                      min: -5,
                      max: 8,
                      intervals: [
                        { start: -2, end: 5, startInclusive: false, endInclusive: false, color: "#8b5cf6" }
                      ],
                      points: [
                        { value: -2, style: "open", color: "#8b5cf6" },
                        { value: 5, style: "open", color: "#8b5cf6" }
                      ],
                      title: "−2 < x < 5"
                    }}
                  />
                </div>
              </div>
            </div>

            {/* OR inequalities */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">
                OR Inequalities (Union)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Written as: <strong>x &lt; a OR x &gt; b</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Meaning:</strong> x can satisfy EITHER condition (or both if they overlap).<br />
                <strong>Solution set:</strong> The combination (union) of both inequalities.
              </p>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Example: x &lt; −1 OR x &gt; 3</p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  x can be less than −1 OR greater than 3<br />
                  Interval notation: (−∞, −1) ∪ (3, ∞)
                </p>
                <div className="w-full overflow-hidden">
                  <MathToolRenderer
                    toolName="numberLine"
                    parameters={{
                      min: -5,
                      max: 7,
                      intervals: [
                        { start: null, end: -1, startInclusive: false, endInclusive: false, color: "#f97316" },
                        { start: 3, end: null, startInclusive: false, color: "#f97316" }
                      ],
                      points: [
                        { value: -1, style: "open", color: "#f97316" },
                        { value: 3, style: "open", color: "#f97316" }
                      ],
                      title: "x < −1 OR x > 3"
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Solving compound inequalities */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example: Solving −3 ≤ 2x + 1 &lt; 9
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Strategy:</strong> Treat this as TWO inequalities, solve both sides simultaneously
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-mono ml-4">
                  −3 ≤ 2x + 1   AND   2x + 1 &lt; 9
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Step 1:</strong> Subtract 1 from all three parts
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-mono ml-4">
                  −3 − 1 ≤ 2x + 1 − 1 &lt; 9 − 1<br />
                  −4 ≤ 2x &lt; 8
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Step 2:</strong> Divide all parts by 2
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-mono ml-4">
                  −4 ÷ 2 ≤ 2x ÷ 2 &lt; 8 ÷ 2<br />
                  <strong>−2 ≤ x &lt; 4</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Interval notation:</strong> [−2, 4)
                </p>
              </div>
              <div className="mt-4">
                <div className="w-full overflow-hidden">
                  <MathToolRenderer
                    toolName="numberLine"
                    parameters={{
                      min: -5,
                      max: 7,
                      intervals: [
                        { start: -2, end: 4, startInclusive: true, endInclusive: false, color: "#3b82f6" }
                      ],
                      points: [
                        { value: -2, style: "closed", color: "#3b82f6" },
                        { value: 4, style: "open", color: "#3b82f6" }
                      ],
                      title: "−2 ≤ x < 4 = [−2, 4)"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice Problems
          </h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Interval Notation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Write in interval notation: x ≥ −3
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300">
                  x ≥ −3 means x can be −3 or anything greater<br /><br />
                  <strong className="font-mono text-lg">[−3, ∞)</strong><br /><br />
                  [−3 because ≥ includes −3 (closed bracket)<br />
                  ∞) because it goes to infinity (always parenthesis)
                </p>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Compound Inequality (AND)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Solve and graph: −1 ≤ x + 2 ≤ 5
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Subtract 2 from all three parts:<br />
                  −1 − 2 ≤ x + 2 − 2 ≤ 5 − 2<br />
                  <strong>−3 ≤ x ≤ 3</strong><br /><br />
                  Interval notation: <strong>[−3, 3]</strong>
                </p>
                <div className="w-full overflow-hidden">
                  <MathToolRenderer
                    toolName="numberLine"
                    parameters={{
                      min: -5,
                      max: 5,
                      intervals: [
                        { start: -3, end: 3, startInclusive: true, endInclusive: true, color: "#10b981" }
                      ],
                      points: [
                        { value: -3, style: "closed", color: "#10b981" },
                        { value: 3, style: "closed", color: "#10b981" }
                      ]
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: OR Inequality
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Write in interval notation: x ≤ 0 OR x &gt; 4
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Two separate intervals connected by union symbol:<br /><br />
                  x ≤ 0: (−∞, 0]<br />
                  x &gt; 4: (4, ∞)<br /><br />
                  <strong className="font-mono text-lg">(−∞, 0] ∪ (4, ∞)</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Number line:</strong> Open circles for &lt; or &gt;, closed circles for ≤ or ≥</li>
            <li><strong>Interval notation:</strong> Parentheses ( ) for strict, square brackets [ ] for inclusive</li>
            <li><strong>Infinity:</strong> Always use parentheses with ∞ or −∞</li>
            <li><strong>AND (intersection):</strong> Values must satisfy both conditions, written as a &lt; x &lt; b</li>
            <li><strong>OR (union):</strong> Values can satisfy either condition, use ∪ symbol to combine intervals</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
