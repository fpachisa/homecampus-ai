import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function WritingExpressions() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Writing Algebraic Expressions</h1>
        <p className="text-lg">Learn to use letters to represent unknown numbers and write expressions</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is a Variable? */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">1. What is a Variable?</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Big Idea</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              A <strong>variable</strong> is a letter (like n, x, or y) that represents an unknown number.
              We use variables when we don't know the exact value of something.
            </p>
          </div>

          {/* Example: Cupcakes in a Box */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Mystery Cupcakes</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              There are some cupcakes in a box, but we don't know how many.
              We can use the letter <strong>n</strong> to represent this unknown number.
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Cupcakes in the Box",
                bars: [
                  {
                    label: "In box",
                    segments: [{ value: "n", units: 1 }],
                    totalLabel: "n cupcakes"
                  }
                ],
                caption: "The letter n represents the unknown number of cupcakes"
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Key Point:</strong> We can use ANY letter to represent an unknown number.
                Common choices are n, x, y, p, q, and m.
              </p>
            </div>
          </div>

          {/* Table showing different possibilities */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Why Use Variables?</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              If there are <strong>n</strong> cupcakes in the box and <strong>3 cupcakes</strong> on a plate,
              how many cupcakes are there altogether?
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-purple-100 dark:bg-purple-900/50">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">Cupcakes in box</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">Total cupcakes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">5</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">5 + 3 = 8</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">6</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">6 + 3 = 9</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">10</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">10 + 3 = 13</td>
                  </tr>
                  <tr className="bg-purple-100 dark:bg-purple-900/50 font-bold">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-purple-700 dark:text-purple-300">n</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-purple-700 dark:text-purple-300">n + 3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-800 dark:text-gray-200 font-bold">
                (n + 3) is an <span className="text-green-600 dark:text-green-400">algebraic expression</span>!
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Addition Expressions */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">2. Addition Expressions</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              When we <strong>add</strong> a number to a variable, we write it as <strong>variable + number</strong>.
            </p>
          </div>

          {/* Example 1: Cookies */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Raju's Cookies</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Raju had <strong>7 cookies</strong> at first. His mother gives him <strong>y cookies</strong> more.
              How many cookies does Raju have now?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Raju's Cookies",
                bars: [
                  {
                    label: "Total",
                    segments: [
                      { value: "7", units: 1 },
                      { value: "y", units: 1 }
                    ],
                    totalLabel: "?",
                    bracketPosition: "top"
                  }
                ],
                caption: "Raju has (7 + y) cookies now"
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 text-lg">
                <strong>Answer:</strong> Raju will have <strong>(7 + y)</strong> cookies.
              </p>
            </div>
          </div>

          {/* Example 2: Oranges - Working Backwards */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Alan's Oranges</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              After eating <strong>k oranges</strong>, Alan has <strong>3 oranges</strong> left.
              How many oranges did he have at first? Express your answer in terms of k.
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Alan's Oranges",
                bars: [
                  {
                    label: "At first",
                    segments: [
                      { value: "k", units: 1, highlight: true },
                      { value: "3", units: 1 }
                    ],
                    totalLabel: "?",
                    bracketPosition: "top"
                  }
                ],
                caption: "He ate k oranges, leaving 3. So he started with (k + 3)."
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 text-lg">
                <strong>Answer:</strong> He had <strong>(k + 3)</strong> oranges at first.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Reasoning: eaten + left = total, so k + 3 = total
              </p>
            </div>
          </div>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Practice: Addition Expression</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Hassan is 12 years old now. In <strong>p years' time</strong>, how old will Hassan be?
              Express your answer in terms of p.
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Think about it...",
                bars: [
                  {
                    label: "Future age",
                    segments: [
                      { value: "12", units: 1 },
                      { value: "p", units: 1 }
                    ],
                    totalLabel: "?",
                    bracketPosition: "top"
                  }
                ]
              }}
            />

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Solution:</strong> Hassan will be <strong>(12 + p)</strong> years old.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Current age + years to pass = Future age
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Subtraction Expressions */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">3. Subtraction Expressions</h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 mb-6">
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              When we <strong>subtract</strong>, the ORDER matters!
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-200 space-y-1">
              <li><strong>p - 2</strong> means "start with p, take away 2"</li>
              <li><strong>12 - j</strong> means "start with 12, take away j"</li>
            </ul>
          </div>

          {/* Example 1: Buns in bag */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Buns in a Bag</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              There are <strong>p buns</strong> in a bag. Leila takes out <strong>2 buns</strong>.
              How many buns are left in the bag?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Buns in the Bag",
                bars: [
                  {
                    label: "Original",
                    segments: [{ value: "p", units: 1 }]
                  },
                  {
                    label: "Left",
                    segments: [
                      { value: "?", units: 1 },
                      { value: "2", units: 1, highlight: true }
                    ],
                    totalLabel: "p - 2",
                    bracketPosition: "bottom"
                  }
                ],
                caption: "Take away 2 from p buns"
              }}
            />

            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 text-lg">
                <strong>Answer:</strong> There are <strong>(p - 2)</strong> buns left in the bag.
              </p>
            </div>
          </div>

          {/* Example 2: Mary's Apples - Subtracting variable */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Mary's Apples</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Mary had <strong>12 apples</strong> at first. She gave away <strong>j apples</strong>.
              How many apples did she have left? Express your answer in terms of j.
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Mary's Apples",
                bars: [
                  {
                    label: "At first",
                    segments: [{ value: "12", units: 1 }]
                  },
                  {
                    label: "After",
                    segments: [
                      { value: "?", units: 1 },
                      { value: "j", units: 1, highlight: true }
                    ]
                  }
                ],
                caption: "Started with 12, gave away j"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 text-lg">
                <strong>Answer:</strong> She had <strong>(12 - j)</strong> apples left.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-red-600 dark:text-red-400">
                Notice: This is NOT (j - 12)! Order matters in subtraction.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Common Subtraction Phrases</h3>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Subtract c from 20",
                bars: [
                  {
                    label: "Total",
                    segments: [
                      { value: "?", units: 1 },
                      { value: "c", units: 1, highlight: true }
                    ],
                    totalLabel: "20",
                    bracketPosition: "top"
                  }
                ],
                caption: "Expression: 20 - c"
              }}
            />

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "15 less than d",
                bars: [
                  {
                    label: "d",
                    segments: [
                      { value: "?", units: 1 },
                      { value: "15", units: 1, highlight: true }
                    ],
                    totalLabel: "d",
                    bracketPosition: "top"
                  }
                ],
                caption: "Expression: d - 15 (NOT 15 - d!)"
              }}
            />

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200 font-bold">
                Watch out! "15 less than d" means d - 15, NOT 15 - d
              </p>
            </div>
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Practice: Subtraction Expression</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Hassan is 12 years old now. <strong>r years ago</strong>, how old was Hassan?
              Express your answer in terms of r.
            </p>

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <MathToolRenderer
                  toolName="barModel"
                  parameters={{
                    title: "Hassan's Age in the Past",
                    bars: [
                      {
                        label: "Now",
                        segments: [{ value: "12", units: 1 }]
                      },
                      {
                        label: "r years ago",
                        segments: [
                          { value: "?", units: 1 },
                          { value: "r", units: 1, highlight: true }
                        ]
                      }
                    ]
                  }}
                />
                <p className="text-gray-800 dark:text-gray-200 mt-4">
                  <strong>Solution:</strong> Hassan was <strong>(12 - r)</strong> years old.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Multiplication Expressions */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">4. Multiplication Expressions</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Special Rule for Multiplication</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              In algebra, we write <strong>m × 8</strong> as <strong>8m</strong> (number before letter, no × sign!)
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-200 space-y-1">
              <li>5 × q = <strong>5q</strong></li>
              <li>n × 3 = <strong>3n</strong></li>
              <li>2 × y × 4 = <strong>8y</strong></li>
            </ul>
          </div>

          {/* Example 1: Shirts and Buttons */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Shirts and Buttons</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Each shirt has <strong>8 buttons</strong>. If Jiahao has <strong>m shirts</strong>,
              how many buttons are there altogether?
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-green-100 dark:bg-green-900/50">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">Number of shirts</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">Number of buttons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">1 × 8 = 8</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">2</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">2 × 8 = 16</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">5</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-gray-800 dark:text-gray-200">5 × 8 = 40</td>
                  </tr>
                  <tr className="bg-green-100 dark:bg-green-900/50 font-bold">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-700 dark:text-green-300">m</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-700 dark:text-green-300">m × 8 = 8m</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "m shirts × 8 buttons each",
                bars: [
                  {
                    label: "Buttons",
                    segments: [
                      { value: "8", units: 1 },
                      { value: "8", units: 1 },
                      { value: "8", units: 1 },
                      { value: "...", units: 1 }
                    ],
                    totalLabel: "8m",
                    bracketPosition: "top"
                  }
                ],
                caption: "Each unit of 8 buttons, repeated m times = 8m buttons"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 text-lg">
                <strong>Answer:</strong> There are <strong>8m</strong> buttons altogether.
              </p>
            </div>
          </div>

          {/* Example 2: Stickers */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Leila and Siti's Stickers</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Leila has <strong>q stickers</strong>. Siti has <strong>5 times as many stickers</strong> as Leila.
              How many stickers does Siti have?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Comparing Stickers",
                bars: [
                  {
                    label: "Leila",
                    segments: [{ value: "q", units: 1 }]
                  },
                  {
                    label: "Siti",
                    segments: [
                      { value: "q", units: 1 },
                      { value: "q", units: 1 },
                      { value: "q", units: 1 },
                      { value: "q", units: 1 },
                      { value: "q", units: 1 }
                    ],
                    totalLabel: "?",
                    bracketPosition: "bottom"
                  }
                ],
                showUnitDividers: true,
                caption: "Siti has 5 groups of q stickers"
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                q + q + q + q + q = 5 × q = <strong>5q</strong>
              </p>
            </div>

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 text-lg">
                <strong>Answer:</strong> Siti has <strong>5q</strong> stickers.
              </p>
            </div>
          </div>

          {/* More multiplication expressions visual */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">3 groups of x</h3>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "3 groups of x",
                bars: [
                  {
                    label: "Total",
                    segments: [
                      { value: "x", units: 1 },
                      { value: "x", units: 1 },
                      { value: "x", units: 1 }
                    ],
                    totalLabel: "3x",
                    bracketPosition: "bottom"
                  }
                ],
                showUnitDividers: true,
                caption: "3 × x = 3x"
              }}
            />
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Practice: Multiplication Expression</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A notebook costs $w. Amy buys 6 notebooks. How much does she pay?
              Express your answer in terms of w.
            </p>

            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <MathToolRenderer
                  toolName="barModel"
                  parameters={{
                    title: "6 notebooks at $w each",
                    bars: [
                      {
                        label: "Cost",
                        segments: [
                          { value: "w", units: 1 },
                          { value: "w", units: 1 },
                          { value: "w", units: 1 },
                          { value: "w", units: 1 },
                          { value: "w", units: 1 },
                          { value: "w", units: 1 }
                        ],
                        totalLabel: "6w",
                        bracketPosition: "bottom"
                      }
                    ],
                    showUnitDividers: true
                  }}
                />
                <p className="text-gray-800 dark:text-gray-200 mt-4">
                  <strong>Solution:</strong> Amy pays <strong>$6w</strong> or <strong>$(6w)</strong>.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 5: Division Expressions */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">5. Division Expressions</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Writing Division</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              We write division as a <strong>fraction</strong>:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-200 space-y-1">
              <li>y ÷ 6 = <strong>y/6</strong></li>
              <li>p ÷ 3 = <strong>p/3</strong></li>
            </ul>
          </div>

          {/* Example 1: Sharing Money */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Sharing Money</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <strong>$p</strong> is shared equally among <strong>3 children</strong>.
              How much does each child get?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "$p shared among 3 children",
                bars: [
                  {
                    label: "Total",
                    segments: [
                      { value: "?", units: 1 },
                      { value: "?", units: 1 },
                      { value: "?", units: 1 }
                    ],
                    totalLabel: "$p",
                    bracketPosition: "top"
                  }
                ],
                showUnitDividers: true,
                caption: "Each part = p ÷ 3 = p/3"
              }}
            />

            <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 text-lg">
                <strong>Answer:</strong> Each child has <strong>$(p/3)</strong> or <strong>$p/3</strong>.
              </p>
            </div>

            {/* Numerical check */}
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-bold mb-2">Let's check with $120:</p>
              <p className="text-gray-800 dark:text-gray-200">
                $120 ÷ 3 = $120/3 = <strong>$40</strong> each child
              </p>
            </div>
          </div>

          {/* Example 2: Simon and Lucas */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Simon and Lucas</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Simon has <strong>5 times as much money</strong> as Lucas. They have a total of <strong>$q</strong>.
              Express the amount of money Lucas has in terms of q.
            </p>

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
                    ]
                  },
                  {
                    label: "Lucas",
                    segments: [{ value: "?", units: 1 }]
                  }
                ],
                groupBracket: { value: "$q", bars: [0, 1] },
                showUnitDividers: true,
                caption: "6 equal units = $q total"
              }}
            />

            <div className="mt-4 space-y-2">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Step 1:</strong> Count total units: 5 + 1 = <strong>6 units</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Step 2:</strong> 6 units = $q
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Step 3:</strong> 1 unit = $q ÷ 6 = <strong>$(q/6)</strong>
              </p>
            </div>

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 text-lg">
                <strong>Answer:</strong> Lucas has <strong>$(q/6)</strong>.
              </p>
            </div>
          </div>

          {/* Expression Table Summary */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Divide y by 6</h3>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Divide y by 6",
                bars: [
                  {
                    label: "y",
                    segments: [
                      { value: "?", units: 1 },
                      { value: "?", units: 1 },
                      { value: "?", units: 1 },
                      { value: "?", units: 1 },
                      { value: "?", units: 1 },
                      { value: "?", units: 1 }
                    ],
                    totalLabel: "y",
                    bracketPosition: "top"
                  }
                ],
                showUnitDividers: true,
                caption: "Each part = y/6"
              }}
            />
          </div>

          {/* Practice 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Practice: Division Expression</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Mr Low rented a bus for <strong>p students</strong>. He was charged <strong>$30</strong> for the bus rental
              and <strong>$6</strong> for each student. Express the total amount Mr Low paid in terms of p.
            </p>

            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <MathToolRenderer
                  toolName="barModel"
                  parameters={{
                    title: "Bus Rental Cost",
                    bars: [
                      {
                        label: "Total",
                        segments: [
                          { value: "$30", units: 1 },
                          { value: "$6p", units: 1 }
                        ],
                        totalLabel: "?",
                        bracketPosition: "top"
                      }
                    ],
                    caption: "Fixed cost + variable cost"
                  }}
                />
                <div className="mt-4 space-y-2 text-gray-800 dark:text-gray-200">
                  <p>Bus rental = $30</p>
                  <p>Student cost = $6 × p = $6p</p>
                  <p><strong>Total = $30 + $6p = $(30 + 6p)</strong></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Summary Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">Summary: Ways to Write Expressions</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-indigo-100 dark:bg-indigo-900/50">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">Statement</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">Expression</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">Add 10 to a</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-indigo-600 dark:text-indigo-400">a + 10</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">12 more than b</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-indigo-600 dark:text-indigo-400">b + 12</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">Subtract c from 20</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-indigo-600 dark:text-indigo-400">20 - c</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">15 less than d</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-indigo-600 dark:text-indigo-400">d - 15</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">3 groups of x</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-indigo-600 dark:text-indigo-400">3x</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">Divide y by 6</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-bold text-indigo-600 dark:text-indigo-400">y/6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section>
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/50 dark:to-indigo-900/50 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-700">
            <h2 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-200">Key Takeaways</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li>✓ A <strong>variable</strong> is a letter that represents an unknown number</li>
              <li>✓ <strong>Addition:</strong> n + 3 means "n plus 3"</li>
              <li>✓ <strong>Subtraction:</strong> p - 2 means "p minus 2" (ORDER matters!)</li>
              <li>✓ <strong>Multiplication:</strong> Write 5 × q as <strong>5q</strong> (number before letter)</li>
              <li>✓ <strong>Division:</strong> Write y ÷ 6 as <strong>y/6</strong> (fraction form)</li>
              <li>✓ Use <strong>bar models</strong> to visualize and understand expressions</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
