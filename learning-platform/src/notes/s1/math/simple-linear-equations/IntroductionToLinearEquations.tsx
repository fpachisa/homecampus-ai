import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function IntroductionToLinearEquations() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Introduction to Linear Equations</h1>
        <p className="mt-2 text-blue-100">Master solving one-step and two-step equations using the balance principle</p>
      </div>

      <div className="p-6">
        {/* Section 1: One-Step Equations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            One-Step Equations
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An <strong>equation</strong> is a mathematical statement that two expressions are equal.
              A <strong>linear equation</strong> is one where the variable has a power of 1.
              To solve an equation means to find the value of the variable that makes the equation true.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>The Balance Principle:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Think of an equation like a balanced scale. Both sides are equal. Whatever you do to one side,
                you must do to the other side to keep it balanced.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Inverse Operations:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                <li>Addition ↔ Subtraction</li>
                <li>Multiplication ↔ Division</li>
              </ul>
            </div>
          </div>

          {/* Worked Example 1: Addition */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Addition Equation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$x + 5 = 12$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Goal:</strong> Isolate <MathText>x</MathText> by removing the <MathText>5</MathText></p>
                <p><strong>Strategy:</strong> Since 5 is <em>added</em>, we use the inverse operation: <em>subtract</em> 5 from both sides</p>
                <p className="mt-3"><strong>Steps:</strong></p>
                <p className="ml-4"><MathText>{'$x + 5 = 12$'}</MathText></p>
                <p className="ml-4"><MathText>{'$x + 5 - 5 = 12 - 5$'}</MathText> (subtract 5 from both sides)</p>
                <p className="ml-4"><MathText>{'$x = 7$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> Substitute <MathText>{'$x = 7$'}</MathText> back into original equation:</p>
                <p className="ml-4"><MathText>{'$7 + 5 = 12$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> x = 7
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2: Multiplication */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Multiplication Equation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$3x = 15$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Goal:</strong> Isolate <MathText>x</MathText> by removing the coefficient <MathText>3</MathText></p>
                <p><strong>Strategy:</strong> Since <MathText>x</MathText> is <em>multiplied</em> by 3, we use the inverse: <em>divide</em> by 3</p>
                <p className="mt-3"><strong>Steps:</strong></p>
                <p className="ml-4"><MathText>{'$3x = 15$'}</MathText></p>
                <p className="ml-4"><MathText>{'$\\frac{3x}{3} = \\frac{15}{3}$'}</MathText> (divide both sides by 3)</p>
                <p className="ml-4"><MathText>{'$x = 5$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> <MathText>{'$3(5) = 15$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> x = 5
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 3: Subtraction and Division */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: More One-Step Equations
            </h3>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold mb-2">(a) Solve: <MathText>{'$y - 8 = 4$'}</MathText></p>
                  <p className="ml-4">Add 8 to both sides: <MathText>{'$y = 4 + 8 = 12$'}</MathText></p>
                  <p className="ml-4 text-sm text-gray-600 dark:text-gray-400">Check: 12 - 8 = 4 ✓</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">(b) Solve: <MathText>{'$\\frac{m}{4} = 3$'}</MathText></p>
                  <p className="ml-4">Multiply both sides by 4: <MathText>{'$m = 3 \\times 4 = 12$'}</MathText></p>
                  <p className="ml-4 text-sm text-gray-600 dark:text-gray-400">Check: <MathText>{'$\\frac{12}{4} = 3$'}</MathText> ✓</p>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: One-Step Equations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve these one-step equations:
            </p>
            <div className="ml-4 space-y-1 text-gray-700 dark:text-gray-300">
              <p>(a) <MathText>{'$x + 9 = 15$'}</MathText></p>
              <p>(b) <MathText>{'$5y = 35$'}</MathText></p>
              <p>(c) <MathText>{'$n - 6 = 10$'}</MathText></p>
            </div>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold">(a) <MathText>{'$x + 9 = 15$'}</MathText></p>
                    <p className="ml-4">Subtract 9 from both sides: <MathText>{'$x = 15 - 9 = 6$'}</MathText></p>
                  </div>
                  <div>
                    <p className="font-semibold">(b) <MathText>{'$5y = 35$'}</MathText></p>
                    <p className="ml-4">Divide both sides by 5: <MathText>{'$y = 35 \\div 5 = 7$'}</MathText></p>
                  </div>
                  <div>
                    <p className="font-semibold">(c) <MathText>{'$n - 6 = 10$'}</MathText></p>
                    <p className="ml-4">Add 6 to both sides: <MathText>{'$n = 10 + 6 = 16$'}</MathText></p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Two-Step Equations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Two-Step Equations
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many equations require two steps to solve. These have the form <MathText>{'$ax + b = c$'}</MathText>,
              where we need to remove both a constant and a coefficient.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Two-Step Equation Strategy:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>Step 1:</strong> Remove the constant (add or subtract)</li>
                <li><strong>Step 2:</strong> Remove the coefficient (multiply or divide)</li>
              </ol>
              <p className="mt-3 text-gray-700 dark:text-gray-300 italic text-sm">
                Remember: Do the opposite of PEMDAS! Remove addition/subtraction first, then multiplication/division.
              </p>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Basic Two-Step Equation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$3x + 7 = 19$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Goal:</strong> Isolate <MathText>x</MathText></p>
                <p className="mt-3"><strong>Step 1:</strong> Remove the constant (7)</p>
                <p className="ml-4"><MathText>{'$3x + 7 = 19$'}</MathText></p>
                <p className="ml-4"><MathText>{'$3x + 7 - 7 = 19 - 7$'}</MathText> (subtract 7 from both sides)</p>
                <p className="ml-4"><MathText>{'$3x = 12$'}</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Remove the coefficient (3)</p>
                <p className="ml-4"><MathText>{'$\\frac{3x}{3} = \\frac{12}{3}$'}</MathText> (divide both sides by 3)</p>
                <p className="ml-4"><MathText>{'$x = 4$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> <MathText>{'$3(4) + 7 = 12 + 7 = 19$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> x = 4
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 5 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 5: Two-Step with Subtraction
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$5y - 3 = 17$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Remove the constant (-3)</p>
                <p className="ml-4"><MathText>{'$5y - 3 = 17$'}</MathText></p>
                <p className="ml-4"><MathText>{'$5y - 3 + 3 = 17 + 3$'}</MathText> (add 3 to both sides)</p>
                <p className="ml-4"><MathText>{'$5y = 20$'}</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Remove the coefficient (5)</p>
                <p className="ml-4"><MathText>{'$\\frac{5y}{5} = \\frac{20}{5}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$y = 4$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> <MathText>{'$5(4) - 3 = 20 - 3 = 17$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> y = 4
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 6 - Negative */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 6: Two-Step with Negative Coefficient
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$2m + 9 = 5$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Remove the constant (9)</p>
                <p className="ml-4"><MathText>{'$2m + 9 - 9 = 5 - 9$'}</MathText></p>
                <p className="ml-4"><MathText>{'$2m = -4$'}</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Remove the coefficient (2)</p>
                <p className="ml-4"><MathText>{'$\\frac{2m}{2} = \\frac{-4}{2}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$m = -2$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> <MathText>{'$2(-2) + 9 = -4 + 9 = 5$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> m = -2
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Two-Step Equations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve these two-step equations:
            </p>
            <div className="ml-4 space-y-1 text-gray-700 dark:text-gray-300">
              <p>(a) <MathText>{'$4x + 5 = 21$'}</MathText></p>
              <p>(b) <MathText>{'$7y - 2 = 26$'}</MathText></p>
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
                    <p className="font-semibold">(a) <MathText>{'$4x + 5 = 21$'}</MathText></p>
                    <p className="ml-4">Step 1: <MathText>{'$4x = 21 - 5 = 16$'}</MathText></p>
                    <p className="ml-4">Step 2: <MathText>{'$x = 16 \\div 4 = 4$'}</MathText></p>
                    <p className="ml-4 text-green-600 dark:text-green-400 font-semibold">Answer: x = 4</p>
                  </div>
                  <div>
                    <p className="font-semibold">(b) <MathText>{'$7y - 2 = 26$'}</MathText></p>
                    <p className="ml-4">Step 1: <MathText>{'$7y = 26 + 2 = 28$'}</MathText></p>
                    <p className="ml-4">Step 2: <MathText>{'$y = 28 \\div 7 = 4$'}</MathText></p>
                    <p className="ml-4 text-green-600 dark:text-green-400 font-semibold">Answer: y = 4</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Checking Solutions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Checking Solutions
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              After solving an equation, it's important to <strong>check</strong> your answer by substituting it back
              into the original equation. If both sides equal the same value, your solution is correct!
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>How to Check a Solution:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Take your solution value</li>
                <li>Substitute it into the original equation</li>
                <li>Evaluate the left-hand side (LHS)</li>
                <li>Evaluate the right-hand side (RHS)</li>
                <li>If LHS = RHS, the solution is correct ✓</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 7 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 7: Verifying a Solution
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Check if <MathText>{'$x = 5$'}</MathText> is the solution to <MathText>{'$2x + 3 = 13$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Original equation:</strong> <MathText>{'$2x + 3 = 13$'}</MathText></p>
                <p><strong>Substitute <MathText>{'$x = 5$'}</MathText>:</strong></p>
                <p className="ml-4">LHS: <MathText>{'$2(5) + 3 = 10 + 3 = 13$'}</MathText></p>
                <p className="ml-4">RHS: <MathText>13</MathText></p>
                <p className="mt-3">Since LHS = RHS (both equal 13), <MathText>{'$x = 5$'}</MathText> is correct ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Verification:</strong> x = 5 is the correct solution
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 8 - Incorrect solution */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 8: Identifying an Incorrect Solution
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Is <MathText>{'$y = 3$'}</MathText> a solution to <MathText>{'$5y - 7 = 10$'}</MathText>?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Substitute <MathText>{'$y = 3$'}</MathText>:</strong></p>
                <p className="ml-4">LHS: <MathText>{'$5(3) - 7 = 15 - 7 = 8$'}</MathText></p>
                <p className="ml-4">RHS: <MathText>10</MathText></p>
                <p className="mt-3">Since LHS ≠ RHS (8 ≠ 10), <MathText>{'$y = 3$'}</MathText> is NOT the solution ✗</p>
                <p className="text-red-600 dark:text-red-400 font-semibold mt-3">
                  <strong>Verification:</strong> y = 3 is incorrect
                </p>
                <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                  (The correct solution is <MathText>{'$y = \\frac{17}{5} = 3.4$'}</MathText>)
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Checking Solutions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Check if the given values are correct solutions:
            </p>
            <div className="ml-4 space-y-2 text-gray-700 dark:text-gray-300">
              <p>(a) Is <MathText>{'$x = 4$'}</MathText> a solution to <MathText>{'$3x - 5 = 7$'}</MathText>?</p>
              <p>(b) Is <MathText>{'$m = -2$'}</MathText> a solution to <MathText>{'$4m + 10 = 2$'}</MathText>?</p>
            </div>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold">(a) Check <MathText>{'$x = 4$'}</MathText> in <MathText>{'$3x - 5 = 7$'}</MathText></p>
                    <p className="ml-4">LHS: <MathText>{'$3(4) - 5 = 12 - 5 = 7$'}</MathText></p>
                    <p className="ml-4">RHS: 7</p>
                    <p className="ml-4 text-green-600 dark:text-green-400 font-semibold">LHS = RHS, so x = 4 is correct ✓</p>
                  </div>
                  <div>
                    <p className="font-semibold">(b) Check <MathText>{'$m = -2$'}</MathText> in <MathText>{'$4m + 10 = 2$'}</MathText></p>
                    <p className="ml-4">LHS: <MathText>{'$4(-2) + 10 = -8 + 10 = 2$'}</MathText></p>
                    <p className="ml-4">RHS: 2</p>
                    <p className="ml-4 text-green-600 dark:text-green-400 font-semibold">LHS = RHS, so m = -2 is correct ✓</p>
                  </div>
                </div>
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
            <li>Equations must stay balanced - whatever you do to one side, do to the other</li>
            <li>Use <strong>inverse operations</strong> to isolate the variable: addition ↔ subtraction, multiplication ↔ division</li>
            <li>For <strong>one-step equations</strong>, identify and undo the single operation</li>
            <li>For <strong>two-step equations</strong>, remove constants first, then coefficients</li>
            <li>Always <strong>check your solution</strong> by substituting back into the original equation</li>
            <li>If LHS = RHS after substitution, your solution is correct!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
