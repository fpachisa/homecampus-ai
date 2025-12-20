import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function EvaluatingExpressions() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Evaluating Algebraic Expressions</h1>
        <p className="text-lg">Learn to find the value of expressions by substitution</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is Substitution? */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">1. What is Substitution?</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Big Idea</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              <strong>Substitution</strong> means replacing a variable with a specific number to find the actual value.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mt-2">
              When we know what <strong>y = 9</strong>, we can substitute 9 into the expression!
            </p>
          </div>

          {/* Simple example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: The Magic of Substitution</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              If <strong>y = 5</strong>, find the value of <strong>y + 3</strong>.
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "y + 3 when y = 5",
                bars: [
                  {
                    label: "Expression",
                    segments: [
                      { value: "5", units: 5 },
                      { value: "3", units: 3 }
                    ],
                    totalLabel: "?",
                    bracketPosition: "top"
                  }
                ],
                caption: "Replace y with 5, then add 3"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-mono text-lg">
                y + 3
              </p>
              <p className="text-gray-800 dark:text-gray-200 font-mono text-lg">
                = <strong>5</strong> + 3 (substitute y = 5)
              </p>
              <p className="text-gray-800 dark:text-gray-200 font-mono text-lg">
                = <strong>8</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Evaluating Addition and Subtraction */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">2. Evaluating Addition and Subtraction</h2>

          {/* Example 1: Stick and Rod */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: The Stick and the Rod</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The difference in length between a stick and a rod is <strong>y cm</strong>.
              The stick is <strong>20 cm</strong> long.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-2">(a) Express the length of the rod in terms of y.</p>
            <p className="text-gray-800 dark:text-gray-200 mb-4">(b) When y = 9, what is the length of the rod?</p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Comparing Stick and Rod",
                bars: [
                  {
                    label: "Stick",
                    segments: [{ value: "20 cm", units: 1 }]
                  },
                  {
                    label: "Rod",
                    segments: [
                      { value: "20 cm", units: 1 },
                      { value: "y cm", units: 1 }
                    ],
                    totalLabel: "?",
                    bracketPosition: "bottom"
                  }
                ],
                caption: "The rod is y cm longer than the stick"
              }}
            />

            <div className="mt-4 space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-bold">(a) Length of rod in terms of y:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono mt-1">
                  Length of rod = 20 + y = <strong>(20 + y) cm</strong>
                </p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-bold">(b) When y = 9:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono mt-1">
                  Length of rod = 20 + y
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = 20 + <strong>9</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = <strong>29 cm</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Example 2: Hassan's Age */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Hassan's Age Table</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Hassan is <strong>12 years old</strong> now. What are his ages at different periods of time?
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-orange-100 dark:bg-orange-900/50">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">Time</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">Expression</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">If p=3, q=5, r=5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">now</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-gray-800 dark:text-gray-200">12</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">12</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">in 3 years' time</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">12 + 3</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-green-600 dark:text-green-400">15</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">in p years' time</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-orange-600 dark:text-orange-400">12 + p</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">12 + 3 = 15</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">in q years' time</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-orange-600 dark:text-orange-400">12 + q</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">12 + 5 = 17</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">5 years ago</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">12 - 5</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-green-600 dark:text-green-400">7</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">r years ago</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-orange-600 dark:text-orange-400">12 - r</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">12 - 5 = 7</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Hassan's Age: In p years' time",
                bars: [
                  {
                    label: "Future",
                    segments: [
                      { value: "12", units: 1 },
                      { value: "p", units: 1 }
                    ],
                    totalLabel: "12 + p",
                    bracketPosition: "bottom"
                  }
                ],
                caption: "When p = 3: 12 + 3 = 15 years old"
              }}
            />
          </div>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Practice: Substitution</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              If <strong>n = 7</strong>, find the value of <strong>25 - n</strong>.
            </p>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  25 - n
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = 25 - <strong>7</strong> (substitute n = 7)
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = <strong>18</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Evaluating Multiplication and Division */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">3. Evaluating Multiplication and Division</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-6">
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              Remember: <strong>4x means 4 × x</strong>. So when x = 5, we calculate 4 × 5 = 20.
            </p>
          </div>

          {/* Example: Cherries in boxes */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Cherries in Three Boxes</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Box A has <strong>x cherries</strong>. Box B has <strong>3 times as many cherries</strong> as Box A.
              Box C has <strong>9 cherries</strong>.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-2">(a) Express the total number of cherries in terms of x.</p>
            <p className="text-gray-800 dark:text-gray-200 mb-4">(b) Box A has 15 cherries. How many cherries are there altogether?</p>

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
                showUnitDividers: true,
                caption: "Box A = x, Box B = 3x, Box C = 9"
              }}
            />

            <div className="mt-4 space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-bold">(a) Total cherries in terms of x:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono mt-1">
                  Total = x + 3x + 9
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = <strong>4x + 9</strong>
                </p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-bold">(b) When x = 15:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono mt-1">
                  Total = 4x + 9
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = 4 × <strong>15</strong> + 9
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = 60 + 9
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = <strong>69 cherries</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Example: Division with money */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Simon and Lucas's Money</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Simon has <strong>5 times as much money</strong> as Lucas. They have a total of <strong>$q</strong>.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-2">(a) Express the amount Lucas has in terms of q.</p>
            <p className="text-gray-800 dark:text-gray-200 mb-4">(b) Find the amount Lucas has when q = 84.</p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Simon and Lucas's Money",
                bars: [
                  {
                    label: "Simon",
                    segments: [
                      { value: "", units: 1 },
                      { value: "", units: 1 },
                      { value: "", units: 1 },
                      { value: "", units: 1 },
                      { value: "", units: 1 }
                    ],
                    totalLabel: "5 units"
                  },
                  {
                    label: "Lucas",
                    segments: [{ value: "?", units: 1 }],
                    totalLabel: "1 unit"
                  }
                ],
                groupBracket: { value: "$q", bars: [0, 1] },
                showUnitDividers: true,
                caption: "6 equal units = $q"
              }}
            />

            <div className="mt-4 space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-bold">(a) Lucas's amount in terms of q:</p>
                <p className="text-gray-800 dark:text-gray-200 mt-1">Total units = 5 + 1 = 6 units</p>
                <p className="text-gray-800 dark:text-gray-200">6 units = $q</p>
                <p className="text-gray-800 dark:text-gray-200">1 unit = $q ÷ 6 = <strong>$(q/6)</strong></p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-bold">(b) When q = 84:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono mt-1">
                  Lucas has = q/6
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = <strong>84</strong>/6
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = <strong>$14</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Practice: Multiplication</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              If <strong>m = 8</strong>, find the value of <strong>5m + 3</strong>.
            </p>

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  5m + 3
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = 5 × <strong>8</strong> + 3
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = 40 + 3
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = <strong>43</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Word Problem Evaluation */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">4. Word Problem Evaluation</h2>

          {/* Example: Bus rental */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Bus Rental</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Mr Low rented a bus to take <strong>p students</strong> for a learning journey.
              He was charged <strong>$30 for rental</strong> of the bus and <strong>$6 for each student</strong>.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-2">(a) Find the amount Mr Low paid in terms of p.</p>
            <p className="text-gray-800 dark:text-gray-200 mb-4">(b) How much did Mr Low pay when p = 20?</p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Bus Rental Cost",
                bars: [
                  {
                    label: "Total Cost",
                    segments: [
                      { value: "$30", units: 1 },
                      { value: "$6p", units: 1 }
                    ],
                    totalLabel: "?",
                    bracketPosition: "top"
                  }
                ],
                caption: "Fixed cost ($30) + Variable cost ($6 per student)"
              }}
            />

            <div className="mt-4 space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-bold">(a) Amount in terms of p:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono mt-1">
                  Amount = $30 + $6 × p
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = $30 + $6p
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = <strong>$(30 + 6p)</strong>
                </p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 font-bold">(b) When p = 20:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono mt-1">
                  Amount = $(30 + 6p)
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = $(30 + 6 × <strong>20</strong>)
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = $(30 + 120)
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">
                  = <strong>$150</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Practice: Word Problem</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A taxi charges <strong>$3 flag-down fare</strong> plus <strong>$2 per kilometre</strong>.
              If the journey is <strong>k kilometres</strong>:
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-2">(a) Write the fare in terms of k.</p>
            <p className="text-gray-800 dark:text-gray-200 mb-4">(b) Find the fare when k = 12 kilometres.</p>

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
                    title: "Taxi Fare",
                    bars: [
                      {
                        label: "Fare",
                        segments: [
                          { value: "$3", units: 1 },
                          { value: "$2k", units: 1 }
                        ],
                        totalLabel: "?",
                        bracketPosition: "top"
                      }
                    ],
                    caption: "Flag-down + distance cost"
                  }}
                />
                <div className="mt-4 space-y-2 text-gray-800 dark:text-gray-200">
                  <p><strong>(a)</strong> Fare = $3 + $2k = <strong>$(3 + 2k)</strong></p>
                  <p><strong>(b)</strong> When k = 12:</p>
                  <p className="font-mono ml-4">= $(3 + 2 × 12)</p>
                  <p className="font-mono ml-4">= $(3 + 24)</p>
                  <p className="font-mono ml-4">= <strong>$27</strong></p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 4: More complex */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Practice: Division Expression</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <strong>$w</strong> is shared equally among <strong>4 friends</strong>.
              Each friend also receives an extra <strong>$5</strong>.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-2">(a) Express how much each friend gets in terms of w.</p>
            <p className="text-gray-800 dark:text-gray-200 mb-4">(b) Find the amount each friend gets when w = 80.</p>

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
                    title: "Sharing Money",
                    bars: [
                      {
                        label: "$w shared",
                        segments: [
                          { value: "?", units: 1 },
                          { value: "?", units: 1 },
                          { value: "?", units: 1 },
                          { value: "?", units: 1 }
                        ],
                        totalLabel: "$w",
                        bracketPosition: "top"
                      }
                    ],
                    showUnitDividers: true,
                    caption: "Each gets w/4, plus $5 extra"
                  }}
                />
                <div className="mt-4 space-y-2 text-gray-800 dark:text-gray-200">
                  <p><strong>(a)</strong> Each friend gets: w/4 + 5 = <strong>$(w/4 + 5)</strong></p>
                  <p><strong>(b)</strong> When w = 80:</p>
                  <p className="font-mono ml-4">= $(80/4 + 5)</p>
                  <p className="font-mono ml-4">= $(20 + 5)</p>
                  <p className="font-mono ml-4">= <strong>$25</strong></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Step-by-step Guide */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">Steps for Evaluation</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-2 border-indigo-300 dark:border-indigo-700 mb-6">
            <ol className="list-decimal list-inside space-y-3 text-gray-800 dark:text-gray-200">
              <li>
                <strong>Identify the expression</strong> (e.g., 4x + 9)
              </li>
              <li>
                <strong>Write down the given value</strong> (e.g., x = 15)
              </li>
              <li>
                <strong>Substitute</strong> - Replace the variable with the number
              </li>
              <li>
                <strong>Calculate</strong> - Follow order of operations (× ÷ before + -)
              </li>
              <li>
                <strong>Write the answer</strong> with units if needed
              </li>
            </ol>
          </div>
        </section>

        {/* Key Takeaways */}
        <section>
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50 p-6 rounded-lg border-2 border-orange-300 dark:border-orange-700">
            <h2 className="text-xl font-bold mb-4 text-orange-800 dark:text-orange-200">Key Takeaways</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li>✓ <strong>Substitution</strong> = replacing a variable with a specific number</li>
              <li>✓ When substituting, <strong>4x means 4 × x</strong></li>
              <li>✓ <strong>x/6 means x ÷ 6</strong></li>
              <li>✓ Always <strong>multiply/divide before add/subtract</strong></li>
              <li>✓ Check your answer makes sense in the context</li>
              <li>✓ Include units in your final answer (cm, $, etc.)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
