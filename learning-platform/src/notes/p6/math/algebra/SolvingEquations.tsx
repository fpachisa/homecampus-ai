import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function SolvingEquations() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Solving Algebraic Equations</h1>
        <p className="text-lg">Learn to find the value of unknowns using equations</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is an Equation? */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-rose-700 dark:text-rose-300">1. What is an Equation?</h2>

          <div className="bg-rose-50 dark:bg-rose-900/30 p-6 rounded-lg border-l-4 border-rose-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Big Idea</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              An <strong>equation</strong> is a statement that two things are equal.
              It has an <strong>equals sign (=)</strong>.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mt-2">
              <strong>Solving an equation</strong> means finding the value of the unknown that makes the equation true.
            </p>
          </div>

          {/* Expression vs Equation */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Expression vs Equation</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Expression</h4>
                <p className="text-gray-800 dark:text-gray-200">No equals sign</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono text-lg mt-2">3x + 5</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono text-lg">2y - 7</p>
              </div>

              <div className="p-4 bg-rose-50 dark:bg-rose-900/30 rounded-lg border-2 border-rose-300 dark:border-rose-700">
                <h4 className="font-bold text-rose-700 dark:text-rose-300 mb-2">Equation</h4>
                <p className="text-gray-800 dark:text-gray-200">Has equals sign</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono text-lg mt-2">3x + 5 = 20</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono text-lg">2y - 7 = 11</p>
              </div>
            </div>
          </div>

          {/* Balance Scale Concept */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Thinking About Equations: The Balance Scale</h3>

            <MathToolRenderer
              toolName="balanceScale"
              parameters={{
                leftSide: "x + 5",
                rightSide: "12",
                caption: "An equation is like a balanced scale - both sides must be equal!"
              }}
            />

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200 font-bold">
                Key Insight: Solving an equation is like finding what 1 unit equals!
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                Think of it as finding the value of 1 unit in bar model problems.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: One-Step Equations */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">2. One-Step Equations</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              One-step equations can be solved in a single calculation.
            </p>
          </div>

          {/* Example 1: Siti's Crayons */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Siti's Crayons</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Siti had <strong>7 crayons</strong>. She then bought <strong>j more crayons</strong>.
              She had <strong>18 crayons</strong> in the end.
              How many crayons did Siti buy?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Siti's Crayons",
                bars: [
                  {
                    label: "Total",
                    segments: [
                      { value: "7", units: 1 },
                      { value: "j", units: 1, highlight: true }
                    ],
                    totalLabel: "18",
                    bracketPosition: "top"
                  }
                ],
                caption: "7 + j = 18"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-bold">Setting up the equation:</p>
              <p className="text-gray-800 dark:text-gray-200 font-mono mt-1">7 + j = 18</p>
              <p className="text-gray-800 dark:text-gray-200 font-bold mt-3">Solving:</p>
              <p className="text-gray-800 dark:text-gray-200 font-mono">j = 18 - 7</p>
              <p className="text-gray-800 dark:text-gray-200 font-mono">j = <strong>11</strong></p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                Siti bought <strong>11 crayons</strong>.
              </p>
            </div>
          </div>

          {/* Example 2: Simple multiplication */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Solving 9g = 72</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Find the value of g if <strong>9g = 72</strong>.
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "9g = 72",
                bars: [
                  {
                    label: "Total",
                    segments: [
                      { value: "g", units: 1 },
                      { value: "g", units: 1 },
                      { value: "g", units: 1 },
                      { value: "g", units: 1 },
                      { value: "g", units: 1 },
                      { value: "g", units: 1 },
                      { value: "g", units: 1 },
                      { value: "g", units: 1 },
                      { value: "g", units: 1 }
                    ],
                    totalLabel: "72",
                    bracketPosition: "top"
                  }
                ],
                showUnitDividers: true,
                caption: "9 units = 72, so 1 unit = ?"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-mono">9g = 72</p>
              <p className="text-gray-800 dark:text-gray-200 font-mono">g = 72 ÷ 9</p>
              <p className="text-gray-800 dark:text-gray-200 font-mono">g = <strong>8</strong></p>
            </div>
          </div>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Practice: One-Step Equation</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Solve: <strong>3h = 16 - 4</strong>. Find the value of h.
            </p>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-800 dark:text-gray-200 font-mono">3h = 16 - 4</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">3h = 12</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">h = 12 ÷ 3</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">h = <strong>4</strong></p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Bar Models for Equations */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">3. Using Bar Models to Solve Equations</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-6">
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              Bar models help us <strong>visualize</strong> the equation and find the solution.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mt-2">
              The key strategy: Find what <strong>1 unit</strong> equals!
            </p>
          </div>

          {/* Example: Container with buttons */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Buttons in a Container</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A container had <strong>k yellow buttons</strong> at first.
              After Mrs Tan put <strong>the same number of yellow buttons (k)</strong> and <strong>4 green buttons</strong> into the container,
              there were <strong>20 buttons</strong> in all.
              How many buttons were there in the container at first?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Buttons in Container",
                bars: [
                  {
                    label: "Total",
                    segments: [
                      { value: "k", units: 1 },
                      { value: "k", units: 1 },
                      { value: "4", units: 1, highlight: true }
                    ],
                    totalLabel: "20",
                    bracketPosition: "top"
                  }
                ],
                showUnitDividers: true,
                caption: "k + k + 4 = 20, which is 2k + 4 = 20"
              }}
            />

            <div className="mt-4 space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-bold">Setting up the equation:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono mt-1">k + k + 4 = 20</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">2k + 4 = 20</p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-bold">Solving step by step:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono mt-1">2k + 4 = 20</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">2k = 20 - 4 (subtract 4 from both sides)</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">2k = 16</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">k = 16 ÷ 2 (divide both sides by 2)</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">k = <strong>8</strong></p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  There were <strong>8 buttons</strong> in the container at first.
                </p>
              </div>
            </div>
          </div>

          {/* Balance scale showing the steps */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">The Balance Scale View</h3>

            <MathToolRenderer
              toolName="balanceScale"
              parameters={{
                leftSide: "2k + 4",
                rightSide: "20",
                operation: "subtract",
                operationValue: "4",
                step: 0,
                showInverse: true,
                caption: "Step 1: Subtract 4 from both sides to isolate the variable term"
              }}
            />

            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-bold">After subtracting 4:</p>
              <p className="text-gray-800 dark:text-gray-200 font-mono">2k = 16</p>
              <p className="text-gray-800 dark:text-gray-200 font-bold mt-2">After dividing by 2:</p>
              <p className="text-gray-800 dark:text-gray-200 font-mono">k = 8</p>
            </div>
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Practice: Bar Model Equation</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Lucy had 18 coins in her savings jar at first.
              When she put <strong>p coins</strong> in the jar, there were <strong>35 coins</strong> in all.
              How many coins did she put in the jar?
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
                    title: "Lucy's Coins",
                    bars: [
                      {
                        label: "Total",
                        segments: [
                          { value: "18", units: 1 },
                          { value: "p", units: 1, highlight: true }
                        ],
                        totalLabel: "35",
                        bracketPosition: "top"
                      }
                    ],
                    caption: "18 + p = 35"
                  }}
                />
                <div className="mt-4 text-gray-800 dark:text-gray-200">
                  <p className="font-mono">18 + p = 35</p>
                  <p className="font-mono">p = 35 - 18</p>
                  <p className="font-mono">p = <strong>17</strong></p>
                  <p className="mt-2">Lucy put <strong>17 coins</strong> in the jar.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Multi-Step Equations */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">4. Multi-Step Equations</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              Some equations need <strong>two or more steps</strong> to solve.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mt-2">
              Strategy: First find the <strong>total value of the variable terms</strong>, then find <strong>1 unit</strong>.
            </p>
          </div>

          {/* Example: Table tennis and badminton */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Table Tennis and Badminton</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              There is a total of <strong>70 children</strong> playing table tennis or badminton in a sports hall.
              There are <strong>x children</strong> playing table tennis.
              There are <strong>14 more children</strong> playing badminton than table tennis.
              How many children are playing table tennis?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Children Playing Sports",
                bars: [
                  {
                    label: "Table Tennis",
                    segments: [{ value: "x", units: 1 }]
                  },
                  {
                    label: "Badminton",
                    segments: [
                      { value: "x", units: 1 },
                      { value: "14", units: 1, highlight: true }
                    ],
                    totalLabel: "x + 14"
                  }
                ],
                groupBracket: { value: "70", bars: [0, 1] },
                showUnitDividers: true,
                caption: "Table tennis: x, Badminton: x + 14, Total: 70"
              }}
            />

            <div className="mt-4 space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-bold">Setting up the equation:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono mt-1">x + (x + 14) = 70</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">2x + 14 = 70</p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-bold">Solving step by step:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono mt-1">2x + 14 = 70</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">2x = 70 - 14</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">2x = 56</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">x = 56 ÷ 2</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">x = <strong>28</strong></p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>28 children</strong> are playing table tennis.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  (Check: 28 + (28 + 14) = 28 + 42 = 70 ✓)
                </p>
              </div>
            </div>
          </div>

          {/* Example: Sum of two numbers */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Sum of Two Numbers</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The sum of two numbers is <strong>60</strong>. The smaller number is <strong>p</strong>.
              The greater number is <strong>4 times</strong> the smaller number.
              What are the two numbers?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Two Numbers",
                bars: [
                  {
                    label: "Smaller",
                    segments: [{ value: "p", units: 1 }]
                  },
                  {
                    label: "Greater",
                    segments: [
                      { value: "p", units: 1 },
                      { value: "p", units: 1 },
                      { value: "p", units: 1 },
                      { value: "p", units: 1 }
                    ],
                    totalLabel: "4p"
                  }
                ],
                groupBracket: { value: "60", bars: [0, 1] },
                showUnitDividers: true,
                caption: "5 units = 60"
              }}
            />

            <div className="mt-4 space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-bold">Setting up:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono mt-1">p + 4p = 60</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">5p = 60</p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-bold">Solving:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono mt-1">5p = 60</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">p = 60 ÷ 5</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">p = <strong>12</strong></p>
                <p className="text-gray-800 dark:text-gray-200 font-mono mt-2">Greater number = 4p = 4 × 12 = <strong>48</strong></p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  The smaller number is <strong>12</strong>. The greater number is <strong>48</strong>.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  (Check: 12 + 48 = 60 ✓, and 48 = 4 × 12 ✓)
                </p>
              </div>
            </div>
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Practice: Multi-Step Equation</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Khadijah baked <strong>n chocolate cookies</strong>, <strong>30 coconut cookies</strong>, and <strong>2n peanut cookies</strong>.
              She baked <strong>75 cookies</strong> altogether.
              How many chocolate cookies did she bake?
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
                  toolName="barModel"
                  parameters={{
                    title: "Khadijah's Cookies",
                    bars: [
                      {
                        label: "Chocolate",
                        segments: [{ value: "n", units: 1 }]
                      },
                      {
                        label: "Coconut",
                        segments: [{ value: "30", units: 1 }]
                      },
                      {
                        label: "Peanut",
                        segments: [
                          { value: "n", units: 1 },
                          { value: "n", units: 1 }
                        ],
                        totalLabel: "2n"
                      }
                    ],
                    groupBracket: { value: "75", bars: [0, 1, 2] },
                    showUnitDividers: true
                  }}
                />
                <div className="mt-4 text-gray-800 dark:text-gray-200">
                  <p className="font-mono">n + 30 + 2n = 75</p>
                  <p className="font-mono">3n + 30 = 75</p>
                  <p className="font-mono">3n = 75 - 30</p>
                  <p className="font-mono">3n = 45</p>
                  <p className="font-mono">n = 45 ÷ 3</p>
                  <p className="font-mono">n = <strong>15</strong></p>
                  <p className="mt-2">She baked <strong>15 chocolate cookies</strong>.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 5: Word Problems with Equations */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">5. Word Problems with Equations</h2>

          {/* Example: James and Alex */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: James and Alex's Money</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              James has <strong>$x</strong>. He has <strong>$14 less than Alex</strong>.
              They have <strong>$50 in all</strong>.
              How much money does James have?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "James and Alex's Money",
                bars: [
                  {
                    label: "James",
                    segments: [{ value: "x", units: 1 }]
                  },
                  {
                    label: "Alex",
                    segments: [
                      { value: "x", units: 1 },
                      { value: "14", units: 1, highlight: true }
                    ],
                    totalLabel: "x + 14"
                  }
                ],
                groupBracket: { value: "$50", bars: [0, 1] },
                caption: "Alex has $14 more than James"
              }}
            />

            <div className="mt-4 space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-bold">Understanding the problem:</p>
                <p className="text-gray-800 dark:text-gray-200 mt-1">James has $x</p>
                <p className="text-gray-800 dark:text-gray-200">"James has $14 less than Alex" means Alex has $14 more</p>
                <p className="text-gray-800 dark:text-gray-200">So Alex has $(x + 14)</p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-bold">Solving:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono mt-1">x + (x + 14) = 50</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">2x + 14 = 50</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">2x = 50 - 14</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">2x = 36</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">x = 36 ÷ 2</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">x = <strong>18</strong></p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  James has <strong>$18</strong>.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  (Check: James = $18, Alex = $18 + $14 = $32, Total = $18 + $32 = $50 ✓)
                </p>
              </div>
            </div>
          </div>

          {/* Practice 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Practice: Word Problem</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The sum of two numbers is <strong>96</strong>.
              The first number is <strong>r</strong>.
              It is <strong>7 times</strong> the second number.
              What is the first number?
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
                    title: "Two Numbers",
                    bars: [
                      {
                        label: "First (r)",
                        segments: [
                          { value: "", units: 1 },
                          { value: "", units: 1 },
                          { value: "", units: 1 },
                          { value: "", units: 1 },
                          { value: "", units: 1 },
                          { value: "", units: 1 },
                          { value: "", units: 1 }
                        ],
                        totalLabel: "r = 7 units"
                      },
                      {
                        label: "Second",
                        segments: [{ value: "", units: 1 }],
                        totalLabel: "1 unit"
                      }
                    ],
                    groupBracket: { value: "96", bars: [0, 1] },
                    showUnitDividers: true,
                    caption: "8 units = 96"
                  }}
                />
                <div className="mt-4 text-gray-800 dark:text-gray-200">
                  <p>Let second number = 1 unit</p>
                  <p>First number = 7 units</p>
                  <p className="font-mono mt-2">7 units + 1 unit = 96</p>
                  <p className="font-mono">8 units = 96</p>
                  <p className="font-mono">1 unit = 96 ÷ 8 = 12</p>
                  <p className="font-mono mt-2">First number (r) = 7 × 12 = <strong>84</strong></p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 5 - Complex */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Challenge: Complex Word Problem</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Andy weighs <strong>(j + 3) kg</strong>.
              Bill weighs <strong>j kg more than Andy</strong>.
              The total mass of the two boys is <strong>45 kg</strong>.
              Find the value of j.
            </p>

            <button
              onClick={() => setShowSolution5(!showSolution5)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution5 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution5 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <MathToolRenderer
                  toolName="barModel"
                  parameters={{
                    title: "Andy and Bill's Mass",
                    bars: [
                      {
                        label: "Andy",
                        segments: [
                          { value: "j", units: 1 },
                          { value: "3", units: 1 }
                        ],
                        totalLabel: "j + 3"
                      },
                      {
                        label: "Bill",
                        segments: [
                          { value: "j", units: 1 },
                          { value: "3", units: 1 },
                          { value: "j", units: 1, highlight: true }
                        ],
                        totalLabel: "2j + 3"
                      }
                    ],
                    groupBracket: { value: "45 kg", bars: [0, 1] },
                    caption: "Bill = Andy + j = (j + 3) + j = 2j + 3"
                  }}
                />
                <div className="mt-4 text-gray-800 dark:text-gray-200">
                  <p>Andy = (j + 3) kg</p>
                  <p>Bill = Andy + j = (j + 3) + j = (2j + 3) kg</p>
                  <p className="font-mono mt-2">(j + 3) + (2j + 3) = 45</p>
                  <p className="font-mono">3j + 6 = 45</p>
                  <p className="font-mono">3j = 45 - 6</p>
                  <p className="font-mono">3j = 39</p>
                  <p className="font-mono">j = 39 ÷ 3</p>
                  <p className="font-mono">j = <strong>13</strong></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Strategy Summary */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">Steps to Solve Equations</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-2 border-indigo-300 dark:border-indigo-700 mb-6">
            <ol className="list-decimal list-inside space-y-3 text-gray-800 dark:text-gray-200">
              <li>
                <strong>Read the problem</strong> carefully and identify the unknown
              </li>
              <li>
                <strong>Draw a bar model</strong> to visualize the relationship
              </li>
              <li>
                <strong>Write the equation</strong> from the bar model
              </li>
              <li>
                <strong>Simplify</strong> by combining like terms
              </li>
              <li>
                <strong>Isolate the variable</strong> (get all variable terms on one side)
              </li>
              <li>
                <strong>Solve</strong> by finding what 1 unit equals
              </li>
              <li>
                <strong>Check your answer</strong> by substituting back!
              </li>
            </ol>
          </div>
        </section>

        {/* Key Takeaways */}
        <section>
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/50 dark:to-pink-900/50 p-6 rounded-lg border-2 border-rose-300 dark:border-rose-700">
            <h2 className="text-xl font-bold mb-4 text-rose-800 dark:text-rose-200">Key Takeaways</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li>✓ An <strong>equation</strong> has an equals sign (=)</li>
              <li>✓ <strong>Solving</strong> means finding the value of the unknown</li>
              <li>✓ <strong>Bar models</strong> help visualize equations</li>
              <li>✓ Think of it as finding what <strong>1 unit</strong> equals</li>
              <li>✓ Whatever you do to one side, <strong>do to the other side</strong></li>
              <li>✓ Always <strong>check your answer</strong> by substituting back!</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
