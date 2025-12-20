import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function SimplifyingExpressions() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Simplifying Algebraic Expressions</h1>
        <p className="text-lg">Learn to combine like terms and simplify expressions</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Understanding Like Terms */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-300">1. Understanding Like Terms</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What are Like Terms?</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              <strong>Like terms</strong> have the <strong>same variable</strong>.
              We can only add or subtract terms that are alike!
            </p>
          </div>

          {/* Visual Example: Clips in boxes */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Boxes of Clips</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Mr Tan had <strong>6 boxes of blue clips</strong> and <strong>2 boxes of red clips</strong>.
              There were <strong>y clips</strong> in each box.
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Blue Clips (6 boxes)",
                bars: [
                  {
                    label: "Blue",
                    segments: [
                      { value: "y", units: 1 },
                      { value: "y", units: 1 },
                      { value: "y", units: 1 },
                      { value: "y", units: 1 },
                      { value: "y", units: 1 },
                      { value: "y", units: 1 }
                    ],
                    totalLabel: "6y",
                    bracketPosition: "bottom"
                  }
                ],
                showUnitDividers: true,
                colorScheme: "items",
                caption: "6 boxes × y clips = 6y clips"
              }}
            />

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Red Clips (2 boxes)",
                bars: [
                  {
                    label: "Red",
                    segments: [
                      { value: "y", units: 1 },
                      { value: "y", units: 1 }
                    ],
                    totalLabel: "2y",
                    bracketPosition: "bottom"
                  }
                ],
                showUnitDividers: true,
                caption: "2 boxes × y clips = 2y clips"
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>6y and 2y are LIKE TERMS</strong> because they both have the variable <strong>y</strong>.
              </p>
            </div>
          </div>

          {/* Like vs Unlike Terms */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Like Terms vs Unlike Terms</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-2 border-green-500">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Like Terms (Can combine)</h4>
                <ul className="space-y-1 text-gray-800 dark:text-gray-200">
                  <li>• 3y and 5y → both have <strong>y</strong></li>
                  <li>• 2x and 7x → both have <strong>x</strong></li>
                  <li>• 4 and 9 → both are <strong>numbers only</strong></li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border-2 border-red-500">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">Unlike Terms (Cannot combine)</h4>
                <ul className="space-y-1 text-gray-800 dark:text-gray-200">
                  <li>• 3x and 5y → different variables</li>
                  <li>• 2x and 7 → one has x, one doesn't</li>
                  <li>• 4a and 4b → different variables</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200 font-bold text-red-600 dark:text-red-400">
                Common Mistake: 3x + 2y ≠ 5xy!
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                You cannot combine unlike terms. 3x + 2y stays as 3x + 2y.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Adding Like Terms */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">2. Adding Like Terms</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              To add like terms: <strong>Add the coefficients</strong> (the numbers in front).
            </p>
            <p className="text-gray-800 dark:text-gray-200 mt-2">
              6y + 2y = (6 + 2)y = <strong>8y</strong>
            </p>
          </div>

          {/* Example: Total clips */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: How Many Clips Altogether?</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Mr Tan had <strong>6 boxes of blue clips (6y)</strong> and <strong>2 boxes of red clips (2y)</strong>.
              How many clips did he have altogether?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Total Clips",
                bars: [
                  {
                    label: "Blue",
                    segments: [
                      { value: "y", units: 1 },
                      { value: "y", units: 1 },
                      { value: "y", units: 1 },
                      { value: "y", units: 1 },
                      { value: "y", units: 1 },
                      { value: "y", units: 1 }
                    ],
                    totalLabel: "6y"
                  },
                  {
                    label: "Red",
                    segments: [
                      { value: "y", units: 1 },
                      { value: "y", units: 1 }
                    ],
                    totalLabel: "2y"
                  }
                ],
                groupBracket: { value: "8y", bars: [0, 1] },
                showUnitDividers: true,
                caption: "6y + 2y = 8y clips altogether"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 text-lg">
                <strong>6y + 2y = 8y</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Think: 6 boxes + 2 boxes = 8 boxes (of y clips each)
              </p>
            </div>
          </div>

          {/* More examples */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">More Addition Examples</h3>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-mono text-lg">
                  3x + 5x = <strong>8x</strong>
                </p>
                <MathToolRenderer
                  toolName="barModel"
                  parameters={{
                    bars: [
                      {
                        label: "",
                        segments: [
                          { value: "x", units: 1 },
                          { value: "x", units: 1 },
                          { value: "x", units: 1 }
                        ],
                        totalLabel: "3x"
                      },
                      {
                        label: "",
                        segments: [
                          { value: "x", units: 1 },
                          { value: "x", units: 1 },
                          { value: "x", units: 1 },
                          { value: "x", units: 1 },
                          { value: "x", units: 1 }
                        ],
                        totalLabel: "5x"
                      }
                    ],
                    groupBracket: { value: "8x", bars: [0, 1] },
                    showUnitDividers: true
                  }}
                />
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-mono text-lg">
                  4a + a = 4a + 1a = <strong>5a</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Remember: "a" by itself means "1a"
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-mono text-lg">
                  7m + 3m + 2m = <strong>12m</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Practice: Adding Like Terms</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Simplify: <strong>9p + 4p</strong>
            </p>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <MathToolRenderer
                  toolName="barModel"
                  parameters={{
                    bars: [
                      {
                        label: "9p",
                        segments: [{ value: "", units: 9 }],
                        totalLabel: "9p"
                      },
                      {
                        label: "4p",
                        segments: [{ value: "", units: 4 }],
                        totalLabel: "4p"
                      }
                    ],
                    groupBracket: { value: "13p", bars: [0, 1] },
                    showUnitDividers: true
                  }}
                />
                <p className="text-gray-800 dark:text-gray-200 mt-4">
                  <strong>9p + 4p = 13p</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Subtracting Like Terms */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">3. Subtracting Like Terms</h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 mb-6">
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              To subtract like terms: <strong>Subtract the coefficients</strong>.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mt-2">
              6y - 2y = (6 - 2)y = <strong>4y</strong>
            </p>
          </div>

          {/* Example: Difference in clips */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: How Many More Blue Clips?</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Mr Tan had <strong>6 boxes of blue clips</strong> and <strong>2 boxes of red clips</strong>.
              How many more blue clips than red clips did he have?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Comparing Clips",
                bars: [
                  {
                    label: "Blue",
                    segments: [
                      { value: "2y", units: 1 },
                      { value: "4y", units: 1, highlight: true }
                    ],
                    totalLabel: "6y"
                  },
                  {
                    label: "Red",
                    segments: [
                      { value: "2y", units: 1 }
                    ],
                    totalLabel: "2y"
                  }
                ],
                caption: "Blue has 4y more boxes than red"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 text-lg">
                <strong>6y - 2y = 4y</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                He had <strong>4y more blue clips</strong> than red clips.
              </p>
            </div>
          </div>

          {/* More subtraction examples */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">More Subtraction Examples</h3>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-mono text-lg">
                  10x - 3x = <strong>7x</strong>
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-mono text-lg">
                  8n - n = 8n - 1n = <strong>7n</strong>
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-mono text-lg">
                  15k - 6k - 4k = <strong>5k</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Practice: Subtracting Like Terms</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Simplify: <strong>12q - 5q</strong>
            </p>

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <MathToolRenderer
                  toolName="barModel"
                  parameters={{
                    bars: [
                      {
                        label: "Start",
                        segments: [{ value: "", units: 12 }],
                        totalLabel: "12q"
                      },
                      {
                        label: "After",
                        segments: [
                          { value: "", units: 7 },
                          { value: "", units: 5, highlight: true }
                        ],
                        totalLabel: "7q"
                      }
                    ],
                    showUnitDividers: true,
                    caption: "Take away 5 units"
                  }}
                />
                <p className="text-gray-800 dark:text-gray-200 mt-4">
                  <strong>12q - 5q = 7q</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Combining Terms with Constants */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">4. Combining Terms with Constants</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Rule</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              When you have <strong>variables AND numbers</strong>:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-200 space-y-1">
              <li>Combine like terms with variables together</li>
              <li>Combine number constants together</li>
              <li>Write the final answer with variable term first</li>
            </ul>
          </div>

          {/* Example: Clips with extra */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Clips Plus Extras</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Mr Tan had <strong>6 boxes of blue clips</strong>, <strong>2 boxes of red clips</strong>,
              and found <strong>2 extra blue clips</strong> and <strong>5 extra red clips</strong>.
              How many clips did he have in the end?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "All Clips",
                bars: [
                  {
                    label: "Boxes",
                    segments: [
                      { value: "6y", units: 1 },
                      { value: "2y", units: 1 }
                    ],
                    totalLabel: "8y"
                  },
                  {
                    label: "Extras",
                    segments: [
                      { value: "2", units: 1 },
                      { value: "5", units: 1 }
                    ],
                    totalLabel: "7"
                  }
                ],
                groupBracket: { value: "8y + 7", bars: [0, 1] },
                caption: "Combine like terms: (6y + 2y) + (2 + 5) = 8y + 7"
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 mb-2">
                <strong>Step by step:</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 font-mono">
                6y + 2 + 2y + 5
              </p>
              <p className="text-gray-800 dark:text-gray-200 font-mono">
                = (6y + 2y) + (2 + 5)
              </p>
              <p className="text-gray-800 dark:text-gray-200 font-mono">
                = <strong>8y + 7</strong>
              </p>
            </div>
          </div>

          {/* Visual breakdown using AlgebraExpression */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Visual: Grouping Like Terms</h3>

            <MathToolRenderer
              toolName="algebraExpression"
              parameters={{
                expression: "5x + 3 - 2x + 7",
                highlightLikeTerms: true,
                showCoefficients: true,
                showBreakdown: true,
                caption: "Group the x terms together, and the numbers together"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-mono">
                5x + 3 - 2x + 7
              </p>
              <p className="text-gray-800 dark:text-gray-200 font-mono">
                = (5x - 2x) + (3 + 7)
              </p>
              <p className="text-gray-800 dark:text-gray-200 font-mono">
                = <strong>3x + 10</strong>
              </p>
            </div>
          </div>

          {/* More complex examples */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">More Examples</h3>

            <div className="space-y-6">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Example 1:</strong></p>
                <MathToolRenderer
                  toolName="algebraExpression"
                  parameters={{
                    expression: "4a + 2b - 3a + 5",
                    highlightLikeTerms: true,
                    showBreakdown: true
                  }}
                />
                <p className="text-gray-800 dark:text-gray-200 font-mono mt-2">
                  = (4a - 3a) + 2b + 5 = <strong>a + 2b + 5</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Note: 2b cannot combine with a or 5 (different variables)
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Example 2:</strong></p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  7m + 3 + 2m - 1
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = (7m + 2m) + (3 - 1)
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = <strong>9m + 2</strong>
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Example 3:</strong></p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  10n - 4 - 3n + 9
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = (10n - 3n) + (-4 + 9)
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = <strong>7n + 5</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Practice: Combining Terms</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Simplify: <strong>8k + 5 - 3k + 2</strong>
            </p>

            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <MathToolRenderer
                  toolName="algebraExpression"
                  parameters={{
                    expression: "8k + 5 - 3k + 2",
                    highlightLikeTerms: true,
                    showBreakdown: true
                  }}
                />
                <div className="mt-4 text-gray-800 dark:text-gray-200">
                  <p className="font-mono">8k + 5 - 3k + 2</p>
                  <p className="font-mono">= (8k - 3k) + (5 + 2)</p>
                  <p className="font-mono">= <strong>5k + 7</strong></p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 4: Word Problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Practice: Word Problem</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Box A has <strong>x cherries</strong>. Box B has <strong>3 times as many cherries</strong> as Box A.
              Box C has <strong>9 cherries</strong>.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Express the total number of cherries in all 3 boxes in terms of x.
            </p>

            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <MathToolRenderer
                  toolName="barModel"
                  parameters={{
                    title: "Cherries in Boxes",
                    bars: [
                      {
                        label: "Box A",
                        segments: [{ value: "x", units: 1 }]
                      },
                      {
                        label: "Box B",
                        segments: [
                          { value: "x", units: 1 },
                          { value: "x", units: 1 },
                          { value: "x", units: 1 }
                        ],
                        totalLabel: "3x"
                      },
                      {
                        label: "Box C",
                        segments: [{ value: "9", units: 1 }]
                      }
                    ],
                    groupBracket: { value: "?", bars: [0, 1, 2] },
                    showUnitDividers: true
                  }}
                />
                <div className="mt-4 text-gray-800 dark:text-gray-200">
                  <p>Box A = x</p>
                  <p>Box B = 3x</p>
                  <p>Box C = 9</p>
                  <p className="mt-2 font-bold">Total = x + 3x + 9 = <strong>4x + 9</strong></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">Common Mistakes to Avoid</h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-2 border-red-300 dark:border-red-700 mb-6">
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <p className="text-red-600 dark:text-red-400 font-bold">Mistake 1: Adding unlike terms</p>
                <p className="text-gray-800 dark:text-gray-200 mt-1">
                  <span className="line-through">3x + 2y = 5xy</span>
                </p>
                <p className="text-green-600 dark:text-green-400 mt-1">
                  Correct: 3x + 2y (cannot simplify further)
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <p className="text-red-600 dark:text-red-400 font-bold">Mistake 2: Adding variables</p>
                <p className="text-gray-800 dark:text-gray-200 mt-1">
                  <span className="line-through">3x + 2x = 5xx or 5x²</span>
                </p>
                <p className="text-green-600 dark:text-green-400 mt-1">
                  Correct: 3x + 2x = 5x
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <p className="text-red-600 dark:text-red-400 font-bold">Mistake 3: Writing x1 instead of x</p>
                <p className="text-gray-800 dark:text-gray-200 mt-1">
                  <span className="line-through">4x - 3x = 1x</span>
                </p>
                <p className="text-green-600 dark:text-green-400 mt-1">
                  Correct: 4x - 3x = x (not 1x)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section>
          <div className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/50 dark:to-cyan-900/50 p-6 rounded-lg border-2 border-teal-300 dark:border-teal-700">
            <h2 className="text-xl font-bold mb-4 text-teal-800 dark:text-teal-200">Key Takeaways</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li>✓ <strong>Like terms</strong> have the same variable (3x and 5x are like terms)</li>
              <li>✓ <strong>Add like terms</strong>: 6y + 2y = 8y (add the coefficients)</li>
              <li>✓ <strong>Subtract like terms</strong>: 6y - 2y = 4y (subtract the coefficients)</li>
              <li>✓ <strong>Unlike terms cannot be combined</strong>: 3x + 2y stays as 3x + 2y</li>
              <li>✓ <strong>Group like terms together</strong>: 5x + 3 - 2x + 7 = 3x + 10</li>
              <li>✓ A variable alone means "1 times" that variable: x = 1x</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
