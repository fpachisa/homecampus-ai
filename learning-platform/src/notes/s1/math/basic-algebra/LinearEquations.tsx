import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function LinearEquations() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-500 to-green-600 dark:from-emerald-600 dark:to-green-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Solving Linear Equations</h1>
        <p className="mt-2 text-emerald-100">Learn to solve equations systematically using inverse operations</p>
      </div>

      <div className="p-6">
        {/* Section 1: One-Step Equations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            One-Step Equations
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An <strong>equation</strong> is a mathematical statement showing that two expressions are equal.
              Solving an equation means finding the value of the variable that makes the equation true.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Principle: Balance</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                An equation is like a balanced scale. Whatever you do to one side, you must do to the other side
                to keep it balanced!
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Inverse Operations:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Addition ↔ Subtraction (opposites)</li>
                <li>Multiplication ↔ Division (opposites)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                To isolate the variable, use the inverse operation of what's being done to it.
              </p>
            </div>
          </div>

          {/* Worked Example 1 */}
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
                <p>We need to isolate <MathText>x</MathText> (get <MathText>x</MathText> by itself)</p>
                <p className="ml-4">Currently: <MathText>x</MathText> has 5 added to it</p>
                <p className="ml-4">Inverse operation: Subtract 5 from both sides</p>
                <p className="mt-3"><MathText>{'$x + 5 - 5 = 12 - 5$'}</MathText></p>
                <p><MathText>{'$x = 7$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> <MathText>{'$7 + 5 = 12$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$x = 7$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Multiplication Equation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$4y = 20$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>Currently: <MathText>y</MathText> is multiplied by 4</p>
                <p className="ml-4">Inverse operation: Divide both sides by 4</p>
                <p className="mt-3"><MathText>{'$\\frac{4y}{4} = \\frac{20}{4}$'}</MathText></p>
                <p><MathText>{'$y = 5$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> <MathText>{'$4 \\times 5 = 20$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$y = 5$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: One-Step Equation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$a - 8 = 15$'}</MathText>
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>a</MathText> has 8 subtracted from it</p>
                  <p>Inverse: Add 8 to both sides</p>
                  <p className="ml-4"><MathText>{'$a - 8 + 8 = 15 + 8$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$a = 23$'}</MathText></p>
                  <p className="mt-2"><strong>Check:</strong> <MathText>{'$23 - 8 = 15$'}</MathText> ✓</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$a = 23$'}</MathText>
                  </p>
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
              Many equations require two steps to solve. The standard form is <MathText>{'$ax + b = c$'}</MathText>.
              Follow the order: handle addition/subtraction first, then multiplication/division.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Steps to Solve <MathText>{'$ax + b = c$'}</MathText>:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>Step 1:</strong> Remove the constant term (<MathText>b</MathText>) using inverse operation</li>
                <li><strong>Step 2:</strong> Remove the coefficient (<MathText>a</MathText>) using inverse operation</li>
                <li><strong>Step 3:</strong> Check your answer</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Two-Step Equation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$3x + 7 = 19$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Remove the +7 by subtracting 7 from both sides</p>
                <p className="ml-4"><MathText>{'$3x + 7 - 7 = 19 - 7$'}</MathText></p>
                <p className="ml-4"><MathText>{'$3x = 12$'}</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Remove the 3 by dividing both sides by 3</p>
                <p className="ml-4"><MathText>{'$\\frac{3x}{3} = \\frac{12}{3}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$x = 4$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> <MathText>{'$3(4) + 7 = 12 + 7 = 19$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$x = 4$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Negative Coefficient
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$5 - 2m = 11$'}</MathText>
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Subtract 5 from both sides</p>
                  <p className="ml-4"><MathText>{'$5 - 2m - 5 = 11 - 5$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$-2m = 6$'}</MathText></p>
                  <p className="mt-2"><strong>Step 2:</strong> Divide both sides by -2</p>
                  <p className="ml-4"><MathText>{'$\\frac{-2m}{-2} = \\frac{6}{-2}$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$m = -3$'}</MathText></p>
                  <p className="mt-2"><strong>Check:</strong> <MathText>{'$5 - 2(-3) = 5 + 6 = 11$'}</MathText> ✓</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$m = -3$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Equations with Brackets */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Equations with Brackets
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When an equation contains brackets, you must <strong>expand the brackets first</strong>,
              then solve using the same steps as before.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Strategy:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Expand all brackets (use distributive law)</li>
                <li>Simplify by collecting like terms</li>
                <li>Solve the resulting equation</li>
                <li>Check your answer</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Equation with Brackets
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$2(x + 3) = 14$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Expand the brackets</p>
                <p className="ml-4"><MathText>{'$2(x + 3) = 14$'}</MathText></p>
                <p className="ml-4"><MathText>{'$2x + 6 = 14$'}</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Subtract 6 from both sides</p>
                <p className="ml-4"><MathText>{'$2x + 6 - 6 = 14 - 6$'}</MathText></p>
                <p className="ml-4"><MathText>{'$2x = 8$'}</MathText></p>
                <p className="mt-3"><strong>Step 3:</strong> Divide both sides by 2</p>
                <p className="ml-4"><MathText>{'$\\frac{2x}{2} = \\frac{8}{2}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$x = 4$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> <MathText>{'$2(4 + 3) = 2(7) = 14$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$x = 4$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Multiple Brackets
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$3(y - 2) + 5 = 17$'}</MathText>
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Expand brackets</p>
                  <p className="ml-4"><MathText>{'$3y - 6 + 5 = 17$'}</MathText></p>
                  <p className="mt-2"><strong>Step 2:</strong> Simplify</p>
                  <p className="ml-4"><MathText>{'$3y - 1 = 17$'}</MathText></p>
                  <p className="mt-2"><strong>Step 3:</strong> Add 1 to both sides</p>
                  <p className="ml-4"><MathText>{'$3y = 18$'}</MathText></p>
                  <p className="mt-2"><strong>Step 4:</strong> Divide by 3</p>
                  <p className="ml-4"><MathText>{'$y = 6$'}</MathText></p>
                  <p className="mt-2"><strong>Check:</strong> <MathText>{'$3(6 - 2) + 5 = 3(4) + 5 = 17$'}</MathText> ✓</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$y = 6$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Variables on Both Sides */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Variables on Both Sides
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When the variable appears on both sides of the equation, we need an extra step:
              collect all variable terms on one side and all constants on the other side.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Strategy:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Expand brackets if present</li>
                <li>Move all variable terms to one side (usually the left)</li>
                <li>Move all constant terms to the other side</li>
                <li>Solve the resulting equation</li>
                <li>Check your answer</li>
              </ol>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Tip:</strong> To move a term to the other side, use its inverse operation.
                If it's <MathText>{'$+3x$'}</MathText>, subtract <MathText>3x</MathText> from both sides.
              </p>
            </div>
          </div>

          {/* Worked Example 5 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 5: Variables on Both Sides
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$5x - 3 = 2x + 9$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Collect variable terms on left (subtract <MathText>2x</MathText> from both sides)</p>
                <p className="ml-4"><MathText>{'$5x - 3 - 2x = 2x + 9 - 2x$'}</MathText></p>
                <p className="ml-4"><MathText>{'$3x - 3 = 9$'}</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Add 3 to both sides</p>
                <p className="ml-4"><MathText>{'$3x - 3 + 3 = 9 + 3$'}</MathText></p>
                <p className="ml-4"><MathText>{'$3x = 12$'}</MathText></p>
                <p className="mt-3"><strong>Step 3:</strong> Divide by 3</p>
                <p className="ml-4"><MathText>{'$x = 4$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong></p>
                <p className="ml-4">LHS: <MathText>{'$5(4) - 3 = 20 - 3 = 17$'}</MathText></p>
                <p className="ml-4">RHS: <MathText>{'$2(4) + 9 = 8 + 9 = 17$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$x = 4$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Complex Equation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$7a + 5 = 3a - 7$'}</MathText>
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Subtract <MathText>3a</MathText> from both sides</p>
                  <p className="ml-4"><MathText>{'$7a + 5 - 3a = 3a - 7 - 3a$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$4a + 5 = -7$'}</MathText></p>
                  <p className="mt-2"><strong>Step 2:</strong> Subtract 5 from both sides</p>
                  <p className="ml-4"><MathText>{'$4a = -12$'}</MathText></p>
                  <p className="mt-2"><strong>Step 3:</strong> Divide by 4</p>
                  <p className="ml-4"><MathText>{'$a = -3$'}</MathText></p>
                  <p className="mt-2"><strong>Check:</strong> LHS: <MathText>{'$7(-3) + 5 = -16$'}</MathText>, RHS: <MathText>{'$3(-3) - 7 = -16$'}</MathText> ✓</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$a = -3$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 5 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Brackets + Both Sides
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$3(x + 2) = 2(x - 1) + 10$'}</MathText>
            </p>
            <button
              onClick={() => setShowSolution5(!showSolution5)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution5 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution5 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Expand both brackets</p>
                  <p className="ml-4"><MathText>{'$3x + 6 = 2x - 2 + 10$'}</MathText></p>
                  <p className="mt-2"><strong>Step 2:</strong> Simplify right side</p>
                  <p className="ml-4"><MathText>{'$3x + 6 = 2x + 8$'}</MathText></p>
                  <p className="mt-2"><strong>Step 3:</strong> Subtract <MathText>2x</MathText> from both sides</p>
                  <p className="ml-4"><MathText>{'$x + 6 = 8$'}</MathText></p>
                  <p className="mt-2"><strong>Step 4:</strong> Subtract 6 from both sides</p>
                  <p className="ml-4"><MathText>{'$x = 2$'}</MathText></p>
                  <p className="mt-2"><strong>Check:</strong> LHS: <MathText>{'$3(2 + 2) = 12$'}</MathText>, RHS: <MathText>{'$2(2 - 1) + 10 = 12$'}</MathText> ✓</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$x = 2$'}</MathText>
                  </p>
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
            <li>An equation is like a balanced scale - whatever you do to one side, do to the other</li>
            <li>Use inverse operations to isolate the variable</li>
            <li>For two-step equations: handle addition/subtraction first, then multiplication/division</li>
            <li>Always expand brackets before solving</li>
            <li>When variables are on both sides, collect them all on one side first</li>
            <li>Always check your answer by substituting back into the original equation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
