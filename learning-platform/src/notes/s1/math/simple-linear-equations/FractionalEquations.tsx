import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function FractionalEquations() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Fractional Equations</h1>
        <p className="mt-2 text-green-100">Master solving equations with fractions using the LCM method and handle variables in denominators</p>
      </div>

      <div className="p-6">
        {/* Section 1: LCM Method */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Equations with Fractions (LCM Method)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When an equation contains <strong>fractions</strong>, the best strategy is to <strong>clear the fractions</strong>
              by multiplying both sides by the <strong>Lowest Common Multiple (LCM)</strong> of all denominators.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>LCM Method Strategy:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Identify all denominators in the equation</li>
                <li>Find the LCM of all denominators</li>
                <li>Multiply <strong>both sides</strong> by the LCM</li>
                <li>Simplify (fractions will cancel out)</li>
                <li>Solve the resulting equation</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Simple Fractional Equation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$\\frac{x}{3} = \\frac{x+2}{5}$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Identify denominators: 3 and 5</p>
                <p><strong>Step 2:</strong> Find LCM: LCM(3, 5) = 15</p>
                <p className="mt-3"><strong>Step 3:</strong> Multiply both sides by 15</p>
                <p className="ml-4"><MathText>{'$15 \\times \\frac{x}{3} = 15 \\times \\frac{x+2}{5}$'}</MathText></p>
                <p className="mt-3"><strong>Step 4:</strong> Simplify (fractions cancel)</p>
                <p className="ml-4"><MathText>{'$5x = 3(x + 2)$'}</MathText></p>
                <p className="ml-4"><MathText>{'$5x = 3x + 6$'}</MathText></p>
                <p className="mt-3"><strong>Step 5:</strong> Solve</p>
                <p className="ml-4"><MathText>{'$5x - 3x = 6$'}</MathText></p>
                <p className="ml-4"><MathText>{'$2x = 6$'}</MathText></p>
                <p className="ml-4"><MathText>{'$x = 3$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> <MathText>{'$\\frac{3}{3} = 1$'}</MathText>, <MathText>{'$\\frac{3+2}{5} = \\frac{5}{5} = 1$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> x = 3
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Fractional Equation with Mixed Terms
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$\\frac{y}{5} - 6 = \\frac{y-3}{2}$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Denominators: 5 and 2, LCM = 10</p>
                <p><strong>Step 2:</strong> Multiply all terms by 10</p>
                <p className="ml-4"><MathText>{'$10 \\times \\frac{y}{5} - 10 \\times 6 = 10 \\times \\frac{y-3}{2}$'}</MathText></p>
                <p><strong>Step 3:</strong> Simplify</p>
                <p className="ml-4"><MathText>{'$2y - 60 = 5(y - 3)$'}</MathText></p>
                <p className="ml-4"><MathText>{'$2y - 60 = 5y - 15$'}</MathText></p>
                <p><strong>Step 4:</strong> Solve</p>
                <p className="ml-4"><MathText>{'$2y - 5y = -15 + 60$'}</MathText></p>
                <p className="ml-4"><MathText>{'$-3y = 45$'}</MathText></p>
                <p className="ml-4"><MathText>{'$y = -15$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> y = -15
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Complex Numerators
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$\\frac{3m+2}{5} = \\frac{4m-7}{6}$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>LCM(5, 6) = 30</strong></p>
                <p>Multiply by 30: <MathText>{'$30 \\times \\frac{3m+2}{5} = 30 \\times \\frac{4m-7}{6}$'}</MathText></p>
                <p>Simplify: <MathText>{'$6(3m + 2) = 5(4m - 7)$'}</MathText></p>
                <p>Expand: <MathText>{'$18m + 12 = 20m - 35$'}</MathText></p>
                <p>Solve: <MathText>{'$18m - 20m = -35 - 12$'}</MathText></p>
                <p className="ml-4"><MathText>{'$-2m = -47$'}</MathText></p>
                <p className="ml-4"><MathText>{'$m = 23.5$'}</MathText> or <MathText>{'$\\frac{47}{2}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> m = 23.5
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Fractional Equations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve using the LCM method:
            </p>
            <div className="ml-4 space-y-1 text-gray-700 dark:text-gray-300">
              <p>(a) <MathText>{'$\\frac{x}{2} = \\frac{x-1}{3}$'}</MathText></p>
              <p>(b) <MathText>{'$\\frac{2y+1}{4} = \\frac{y+3}{3}$'}</MathText></p>
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
                    <p className="font-semibold">(a) <MathText>{'$\\frac{x}{2} = \\frac{x-1}{3}$'}</MathText></p>
                    <p className="ml-4">LCM(2,3) = 6, multiply by 6: <MathText>{'$3x = 2(x-1)$'}</MathText></p>
                    <p className="ml-4"><MathText>{'$3x = 2x - 2$'}</MathText>, so <MathText>{'$x = -2$'}</MathText></p>
                  </div>
                  <div>
                    <p className="font-semibold">(b) <MathText>{'$\\frac{2y+1}{4} = \\frac{y+3}{3}$'}</MathText></p>
                    <p className="ml-4">LCM(4,3) = 12, multiply: <MathText>{'$3(2y+1) = 4(y+3)$'}</MathText></p>
                    <p className="ml-4"><MathText>{'$6y + 3 = 4y + 12$'}</MathText>, so <MathText>{'$2y = 9$'}</MathText>, <MathText>{'$y = 4.5$'}</MathText></p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Variable in Denominator */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Variable in Denominator
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When the variable appears in the <strong>denominator</strong>, we must be extra careful.
              The denominator can <strong>never equal zero</strong>, so some solutions may be invalid!
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <p className="text-red-800 dark:text-red-300 mb-3 font-semibold">
                ⚠️ CRITICAL RULE: Denominator Cannot Be Zero
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Before solving, identify <strong>restricted values</strong> - values that would make any denominator zero.
                After solving, <strong>always check</strong> that your solution doesn't equal a restricted value.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Strategy:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Identify restricted values (what makes denominators zero)</li>
                <li>Find LCM of all denominators (including variable expressions)</li>
                <li>Multiply both sides by LCM</li>
                <li>Solve the resulting equation</li>
                <li><strong>CHECK:</strong> Ensure solution doesn't equal any restricted value</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Basic Variable in Denominator
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$\\frac{6}{x-2} = 3$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Identify restriction</p>
                <p className="ml-4">Denominator <MathText>{'$x - 2$'}</MathText> cannot equal zero</p>
                <p className="ml-4">So <MathText>{'$x \\neq 2$'}</MathText> (x cannot be 2)</p>
                <p className="mt-3"><strong>Step 2:</strong> Multiply both sides by <MathText>{'$(x-2)$'}</MathText></p>
                <p className="ml-4"><MathText>{'$(x-2) \\times \\frac{6}{x-2} = 3 \\times (x-2)$'}</MathText></p>
                <p className="ml-4"><MathText>{'$6 = 3(x - 2)$'}</MathText></p>
                <p className="mt-3"><strong>Step 3:</strong> Solve</p>
                <p className="ml-4"><MathText>{'$6 = 3x - 6$'}</MathText></p>
                <p className="ml-4"><MathText>{'$12 = 3x$'}</MathText></p>
                <p className="ml-4"><MathText>{'$x = 4$'}</MathText></p>
                <p className="mt-3"><strong>Step 4: CHECK restriction</strong></p>
                <p className="ml-4">Is <MathText>{'$x = 4$'}</MathText> equal to 2? NO ✓</p>
                <p className="ml-4">Since <MathText>{'$4 \\neq 2$'}</MathText>, the solution is valid</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> x = 4 (Valid)
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 5 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 5: Two Variable Denominators
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$\\frac{1}{y+3} = \\frac{2}{y}$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Restrictions:</strong> <MathText>{'$y \\neq -3$'}</MathText> and <MathText>{'$y \\neq 0$'}</MathText></p>
                <p><strong>LCM:</strong> <MathText>{'$y(y+3)$'}</MathText></p>
                <p><strong>Multiply:</strong> <MathText>{'$y(y+3) \\times \\frac{1}{y+3} = y(y+3) \\times \\frac{2}{y}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$y = 2(y + 3)$'}</MathText></p>
                <p className="ml-4"><MathText>{'$y = 2y + 6$'}</MathText></p>
                <p className="ml-4"><MathText>{'$-y = 6$'}</MathText></p>
                <p className="ml-4"><MathText>{'$y = -6$'}</MathText></p>
                <p><strong>Check:</strong> Is <MathText>{'$y = -6$'}</MathText> equal to -3 or 0? NO ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> y = -6 (Valid)
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Variable in Denominator
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve and check restrictions:
            </p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">
              <MathText>{'$\\frac{10}{m+1} = 5$'}</MathText>
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Restriction:</strong> <MathText>{'$m \\neq -1$'}</MathText></p>
                  <p>Multiply by <MathText>{'$(m+1)$'}</MathText>: <MathText>{'$10 = 5(m+1)$'}</MathText></p>
                  <p><MathText>{'$10 = 5m + 5$'}</MathText>, so <MathText>{'$5m = 5$'}</MathText>, <MathText>{'$m = 1$'}</MathText></p>
                  <p><strong>Check:</strong> <MathText>{'$1 \\neq -1$'}</MathText> ✓ Valid</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <strong>Answer:</strong> m = 1
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Extraneous Solutions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Checking for Extraneous Solutions
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An <strong>extraneous solution</strong> is a solution that emerges from the algebraic process but
              makes the original equation <strong>undefined</strong> (division by zero). We must always check and reject these!
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <p className="text-red-800 dark:text-red-300 mb-3 font-semibold">
                ⚠️ When Do Extraneous Solutions Occur?
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                When we multiply both sides by a variable expression, we can accidentally introduce solutions
                that make the <strong>original denominators zero</strong>. These must be rejected as <strong>invalid</strong>.
              </p>
            </div>
          </div>

          {/* Worked Example 6 - Extraneous */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 6: Detecting an Extraneous Solution
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$\\frac{x}{x-3} = \\frac{3}{x-3}$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Restriction:</strong> <MathText>{'$x \\neq 3$'}</MathText> (makes denominator zero)</p>
                <p><strong>Multiply by <MathText>{'$(x-3)$'}</MathText>:</strong></p>
                <p className="ml-4"><MathText>{'$x = 3$'}</MathText></p>
                <p className="mt-3 text-red-600 dark:text-red-400 font-semibold">
                  <strong>Check: Is x = 3 allowed?</strong>
                </p>
                <p className="ml-4">If <MathText>{'$x = 3$'}</MathText>, then <MathText>{'$x - 3 = 0$'}</MathText></p>
                <p className="ml-4">This makes the denominator ZERO → UNDEFINED! ✗</p>
                <p className="mt-3 text-red-600 dark:text-red-400 font-semibold">
                  <strong>Answer:</strong> x = 3 is EXTRANEOUS (Invalid)
                </p>
                <p className="mt-2 bg-red-100 dark:bg-red-900/30 p-3 rounded">
                  <strong>Conclusion:</strong> This equation has <strong>NO SOLUTION</strong> because the only
                  algebraic solution makes the equation undefined.
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 7 - Valid after check */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 7: Valid Solution After Checking
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve: <MathText>{'$\\frac{4}{n-5} + 2 = \\frac{6}{n-5}$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Restriction:</strong> <MathText>{'$n \\neq 5$'}</MathText></p>
                <p><strong>Multiply by <MathText>{'$(n-5)$'}</MathText>:</strong></p>
                <p className="ml-4"><MathText>{'$4 + 2(n-5) = 6$'}</MathText></p>
                <p className="ml-4"><MathText>{'$4 + 2n - 10 = 6$'}</MathText></p>
                <p className="ml-4"><MathText>{'$2n - 6 = 6$'}</MathText></p>
                <p className="ml-4"><MathText>{'$2n = 12$'}</MathText></p>
                <p className="ml-4"><MathText>{'$n = 6$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> Is <MathText>{'$n = 6$'}</MathText> equal to 5?</p>
                <p className="ml-4">NO! <MathText>{'$6 \\neq 5$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> n = 6 (Valid Solution)
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Detecting Extraneous Solutions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Solve and determine if the solution is valid or extraneous:
            </p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">
              <MathText>{'$\\frac{2}{p+1} = \\frac{p-1}{p+1}$'}</MathText>
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
                  <p><strong>Restriction:</strong> <MathText>{'$p \\neq -1$'}</MathText></p>
                  <p>Multiply by <MathText>{'$(p+1)$'}</MathText>: <MathText>{'$2 = p - 1$'}</MathText></p>
                  <p>Solve: <MathText>{'$p = 3$'}</MathText></p>
                  <p><strong>Check:</strong> Is <MathText>{'$p = 3$'}</MathText> equal to <MathText>-1</MathText>?</p>
                  <p className="ml-4">NO! <MathText>{'$3 \\neq -1$'}</MathText> ✓</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <strong>Answer:</strong> p = 3 is VALID
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Use the <strong>LCM method</strong> to clear fractions: find LCM of denominators, multiply both sides</li>
            <li>When variables are in denominators, <strong>identify restrictions first</strong> (values that make denominator zero)</li>
            <li><strong>ALWAYS CHECK</strong> that your solution doesn't make any denominator zero</li>
            <li><strong>Extraneous solutions</strong> are algebraically correct but make the original equation undefined</li>
            <li>If a solution equals a restricted value, it must be <strong>rejected as invalid</strong></li>
            <li>Some equations may have <strong>no solution</strong> if all algebraic solutions are extraneous</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
