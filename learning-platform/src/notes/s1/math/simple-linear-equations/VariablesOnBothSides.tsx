import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function VariablesOnBothSides() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Equations with Variables on Both Sides</h1>
        <p className="mt-2 text-purple-100">Learn to collect like terms, expand brackets, and solve complex multi-step equations</p>
      </div>

      <div className="p-6">
        {/* Section 1: Variables on Both Sides */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Collecting Like Terms - Variables on Both Sides
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some equations have variables on <strong>both sides</strong> of the equals sign.
              To solve these, we need to collect all the variable terms on one side and all the constants on the other side.
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Strategy for Variables on Both Sides:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Collect all variable terms on one side (usually left)</li>
                <li>Collect all constants on the other side (usually right)</li>
                <li>Solve the resulting two-step equation</li>
              </ol>
              <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm italic">
                <strong>Tip:</strong> Move the smaller variable term to eliminate it from one side.
              </p>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Basic Variables on Both Sides
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$5x - 3 = 2x + 9$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Collect variable terms on the left side</p>
                <p className="ml-4"><MathText>{'$5x - 3 = 2x + 9$'}</MathText></p>
                <p className="ml-4"><MathText>{'$5x - 2x - 3 = 2x - 2x + 9$'}</MathText> (subtract <MathText>2x</MathText> from both sides)</p>
                <p className="ml-4"><MathText>{'$3x - 3 = 9$'}</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Collect constants on the right side</p>
                <p className="ml-4"><MathText>{'$3x - 3 + 3 = 9 + 3$'}</MathText> (add 3 to both sides)</p>
                <p className="ml-4"><MathText>{'$3x = 12$'}</MathText></p>
                <p className="mt-3"><strong>Step 3:</strong> Solve for x</p>
                <p className="ml-4"><MathText>{'$x = 12 \\div 3 = 4$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> <MathText>{'$5(4) - 3 = 20 - 3 = 17$'}</MathText>, <MathText>{'$2(4) + 9 = 8 + 9 = 17$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> x = 4
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Variables and Constants Mixed
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$7y + 2 = 3y + 18$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Move variable terms to left</p>
                <p className="ml-4"><MathText>{'$7y - 3y + 2 = 18$'}</MathText></p>
                <p className="ml-4"><MathText>{'$4y + 2 = 18$'}</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Move constants to right</p>
                <p className="ml-4"><MathText>{'$4y = 18 - 2$'}</MathText></p>
                <p className="ml-4"><MathText>{'$4y = 16$'}</MathText></p>
                <p className="mt-3"><strong>Step 3:</strong> Solve</p>
                <p className="ml-4"><MathText>{'$y = 4$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> <MathText>{'$7(4) + 2 = 30$'}</MathText>, <MathText>{'$3(4) + 18 = 30$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> y = 4
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Variables on Both Sides
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve these equations:
            </p>
            <div className="ml-4 space-y-1 text-gray-700 dark:text-gray-300">
              <p>(a) <MathText>{'$6x - 5 = x + 15$'}</MathText></p>
              <p>(b) <MathText>{'$8m + 3 = 5m + 21$'}</MathText></p>
            </div>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold">(a) <MathText>{'$6x - 5 = x + 15$'}</MathText></p>
                    <p className="ml-4"><MathText>{'$6x - x = 15 + 5$'}</MathText></p>
                    <p className="ml-4"><MathText>{'$5x = 20$'}</MathText></p>
                    <p className="ml-4"><MathText>{'$x = 4$'}</MathText></p>
                  </div>
                  <div>
                    <p className="font-semibold">(b) <MathText>{'$8m + 3 = 5m + 21$'}</MathText></p>
                    <p className="ml-4"><MathText>{'$8m - 5m = 21 - 3$'}</MathText></p>
                    <p className="ml-4"><MathText>{'$3m = 18$'}</MathText></p>
                    <p className="ml-4"><MathText>{'$m = 6$'}</MathText></p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Equations with Brackets */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Equations with Brackets
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When an equation contains <strong>brackets (parentheses)</strong>, you must first <strong>expand</strong> them
              using the distributive law before solving.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Distributive Law:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><MathText>{'$a(b + c) = ab + ac$'}</MathText></p>
                <p><MathText>{'$a(b - c) = ab - ac$'}</MathText></p>
                <p className="mt-3 text-sm"><strong>Remember:</strong> Multiply the term outside by EVERY term inside the brackets.</p>
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Strategy:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Expand all brackets</li>
                <li>Simplify (collect like terms on each side)</li>
                <li>Collect variables on one side, constants on other</li>
                <li>Solve</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Single Bracket
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$3(x + 2) = 2x + 12$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Expand the bracket</p>
                <p className="ml-4"><MathText>{'$3(x + 2) = 2x + 12$'}</MathText></p>
                <p className="ml-4"><MathText>{'$3x + 6 = 2x + 12$'}</MathText> (multiply 3 by x and by 2)</p>
                <p className="mt-3"><strong>Step 2:</strong> Collect variable terms</p>
                <p className="ml-4"><MathText>{'$3x - 2x = 12 - 6$'}</MathText></p>
                <p className="ml-4"><MathText>{'$x = 6$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> <MathText>{'$3(6 + 2) = 3(8) = 24$'}</MathText>, <MathText>{'$2(6) + 12 = 24$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> x = 6
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Brackets on Both Sides
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$4(y - 2) = 2(y + 3)$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Expand both brackets</p>
                <p className="ml-4"><MathText>{'$4(y - 2) = 2(y + 3)$'}</MathText></p>
                <p className="ml-4"><MathText>{'$4y - 8 = 2y + 6$'}</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Collect terms</p>
                <p className="ml-4"><MathText>{'$4y - 2y = 6 + 8$'}</MathText></p>
                <p className="ml-4"><MathText>{'$2y = 14$'}</MathText></p>
                <p className="mt-3"><strong>Step 3:</strong> Solve</p>
                <p className="ml-4"><MathText>{'$y = 7$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> <MathText>{'$4(7 - 2) = 4(5) = 20$'}</MathText>, <MathText>{'$2(7 + 3) = 2(10) = 20$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> y = 7
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 5 - Negative Bracket */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 5: Negative Multiplier
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$5(m + 1) - 3 = 2(m + 4)$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Expand brackets</p>
                <p className="ml-4"><MathText>{'$5m + 5 - 3 = 2m + 8$'}</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Simplify left side</p>
                <p className="ml-4"><MathText>{'$5m + 2 = 2m + 8$'}</MathText></p>
                <p className="mt-3"><strong>Step 3:</strong> Collect terms</p>
                <p className="ml-4"><MathText>{'$5m - 2m = 8 - 2$'}</MathText></p>
                <p className="ml-4"><MathText>{'$3m = 6$'}</MathText></p>
                <p className="ml-4"><MathText>{'$m = 2$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> m = 2
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Equations with Brackets
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve these equations:
            </p>
            <div className="ml-4 space-y-1 text-gray-700 dark:text-gray-300">
              <p>(a) <MathText>{'$2(x + 3) = x + 10$'}</MathText></p>
              <p>(b) <MathText>{'$3(n - 1) = 2(n + 2)$'}</MathText></p>
            </div>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold">(a) <MathText>{'$2(x + 3) = x + 10$'}</MathText></p>
                    <p className="ml-4">Expand: <MathText>{'$2x + 6 = x + 10$'}</MathText></p>
                    <p className="ml-4">Collect: <MathText>{'$2x - x = 10 - 6$'}</MathText></p>
                    <p className="ml-4"><MathText>{'$x = 4$'}</MathText></p>
                  </div>
                  <div>
                    <p className="font-semibold">(b) <MathText>{'$3(n - 1) = 2(n + 2)$'}</MathText></p>
                    <p className="ml-4">Expand: <MathText>{'$3n - 3 = 2n + 4$'}</MathText></p>
                    <p className="ml-4">Collect: <MathText>{'$3n - 2n = 4 + 3$'}</MathText></p>
                    <p className="ml-4"><MathText>{'$n = 7$'}</MathText></p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Multi-Step Equations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Multi-Step Equations
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Multi-step equations</strong> combine everything we've learned: brackets, variables on both sides,
              and multiple terms. Success requires a systematic approach.
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Multi-Step Strategy (The "ESCS" Method):</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>E</strong>xpand all brackets</li>
                <li><strong>S</strong>implify each side (collect like terms on each side separately)</li>
                <li><strong>C</strong>ollect variables on one side, constants on other</li>
                <li><strong>S</strong>olve the resulting equation</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 6 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 6: Complex Multi-Step
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$2(3x + 1) - 5 = 4(x - 2) + 7$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1: Expand</strong> all brackets</p>
                <p className="ml-4"><MathText>{'$2(3x + 1) - 5 = 4(x - 2) + 7$'}</MathText></p>
                <p className="ml-4"><MathText>{'$6x + 2 - 5 = 4x - 8 + 7$'}</MathText></p>
                <p className="mt-3"><strong>Step 2: Simplify</strong> each side</p>
                <p className="ml-4">Left: <MathText>{'$6x - 3$'}</MathText></p>
                <p className="ml-4">Right: <MathText>{'$4x - 1$'}</MathText></p>
                <p className="ml-4"><MathText>{'$6x - 3 = 4x - 1$'}</MathText></p>
                <p className="mt-3"><strong>Step 3: Collect</strong> terms</p>
                <p className="ml-4"><MathText>{'$6x - 4x = -1 + 3$'}</MathText></p>
                <p className="ml-4"><MathText>{'$2x = 2$'}</MathText></p>
                <p className="mt-3"><strong>Step 4: Solve</strong></p>
                <p className="ml-4"><MathText>{'$x = 1$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> LHS = <MathText>{'$2(3 + 1) - 5 = 8 - 5 = 3$'}</MathText>, RHS = <MathText>{'$4(1 - 2) + 7 = -4 + 7 = 3$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> x = 1
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 7 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 7: Multiple Brackets and Terms
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$5(y - 2) + 3y = 2(3y + 1) - 7$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Expand:</strong> <MathText>{'$5y - 10 + 3y = 6y + 2 - 7$'}</MathText></p>
                <p><strong>Simplify:</strong> <MathText>{'$8y - 10 = 6y - 5$'}</MathText></p>
                <p><strong>Collect:</strong> <MathText>{'$8y - 6y = -5 + 10$'}</MathText></p>
                <p className="ml-4"><MathText>{'$2y = 5$'}</MathText></p>
                <p><strong>Solve:</strong> <MathText>{'$y = 2.5$'}</MathText> or <MathText>{'$\\frac{5}{2}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> y = 2.5
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Multi-Step Equations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve this challenging equation:
            </p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">
              <MathText>{'$3(2x + 1) - 4 = 2(x + 5) + x$'}</MathText>
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Expand:</strong> <MathText>{'$6x + 3 - 4 = 2x + 10 + x$'}</MathText></p>
                  <p><strong>Simplify:</strong> <MathText>{'$6x - 1 = 3x + 10$'}</MathText></p>
                  <p><strong>Collect:</strong> <MathText>{'$6x - 3x = 10 + 1$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$3x = 11$'}</MathText></p>
                  <p><strong>Solve:</strong> <MathText>{'$x = \\frac{11}{3}$'}</MathText> or <MathText>{'$x \\approx 3.67$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> x = 11/3 or 3.67
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>When variables appear on <strong>both sides</strong>, collect all variable terms on one side and constants on the other</li>
            <li>Always <strong>expand brackets first</strong> using the distributive law: <MathText>{'$a(b + c) = ab + ac$'}</MathText></li>
            <li>For multi-step equations, use the <strong>ESCS method</strong>: Expand, Simplify, Collect, Solve</li>
            <li>Simplify each side <strong>separately</strong> before collecting terms across the equals sign</li>
            <li>Work systematically and show all steps clearly</li>
            <li>Always check your answer by substituting back into the original equation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
