import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function SimplifyingExpressions() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Simplifying Algebraic Expressions</h1>
        <p className="mt-2 text-green-100">Learn to combine like terms and simplify complex expressions</p>
      </div>

      <div className="p-6">
        {/* Section 1: Collecting Like Terms - Basics */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Collecting Like Terms - Basics
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Simplifying</strong> an expression means combining like terms to make it as short as possible.
              Remember: <strong>like terms</strong> have the exact same variable and power.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>The Rule:</strong> You can only add or subtract like terms by adding or subtracting their coefficients.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Example: <MathText>{'$3x + 5x = (3 + 5)x = 8x$'}</MathText>
              </p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Remember:</strong> You cannot combine <MathText>3x</MathText> and <MathText>3y</MathText> (different variables),
                or <MathText>3x</MathText> and <MathText>{'$3x^2$'}</MathText> (different powers)!
              </p>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Collecting Like Terms
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Simplify: <MathText>{'$7a + 3a - 2a$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>All terms have the same variable <MathText>a</MathText>, so they are like terms.</p>
                <p><MathText>{'$7a + 3a - 2a = (7 + 3 - 2)a$'}</MathText></p>
                <p><MathText>{'$= 8a$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>8a</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Simple Simplification
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Simplify: <MathText>{'$9x + 4x - 5x + 2x$'}</MathText>
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  All terms have variable <MathText>x</MathText>, so combine coefficients:
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$9x + 4x - 5x + 2x = (9 + 4 - 5 + 2)x = 10x$'}</MathText>
                </p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>10x</MathText>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Simplifying with Multiple Variables */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Simplifying with Multiple Variables
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When an expression has different variables, you need to group and simplify like terms separately.
              Terms with different variables stay separate in your final answer.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Strategy:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Identify and group all like terms (same variable and power)</li>
                <li>Simplify each group separately</li>
                <li>Write the simplified expression with all terms</li>
              </ol>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Multiple Variables
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Simplify: <MathText>{'$5x + 3y + 2x - y + 4$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Group like terms</p>
                <p className="ml-4">Terms with <MathText>x</MathText>: <MathText>5x</MathText> and <MathText>2x</MathText></p>
                <p className="ml-4">Terms with <MathText>y</MathText>: <MathText>3y</MathText> and <MathText>{'$-y$'}</MathText></p>
                <p className="ml-4">Constant: <MathText>4</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Simplify each group</p>
                <p className="ml-4"><MathText>{'$5x + 2x = 7x$'}</MathText></p>
                <p className="ml-4"><MathText>{'$3y - y = 2y$'}</MathText></p>
                <p className="ml-4">Constant stays: <MathText>4</MathText></p>
                <p className="mt-3"><strong>Step 3:</strong> Combine all simplified terms</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$7x + 2y + 4$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Three Variables
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Simplify: <MathText>{'$4a + 2b - 3c + 5a - b + 2c$'}</MathText>
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
                  <p><strong>Group like terms:</strong></p>
                  <p className="ml-4">Terms with <MathText>a</MathText>: <MathText>{'$4a + 5a = 9a$'}</MathText></p>
                  <p className="ml-4">Terms with <MathText>b</MathText>: <MathText>{'$2b - b = b$'}</MathText></p>
                  <p className="ml-4">Terms with <MathText>c</MathText>: <MathText>{'$-3c + 2c = -c$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$9a + b - c$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Complex Simplification */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Complex Simplification
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sometimes expressions have fractional coefficients, negative terms, or mixed operations.
              The same rules apply - just be extra careful with signs and fractions!
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Tips for Complex Expressions:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Watch for negative signs - they affect the coefficient</li>
                <li>For fractions, find a common denominator when adding/subtracting</li>
                <li>Keep track of positive and negative terms carefully</li>
              </ul>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Fractional Coefficients
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Simplify: <MathText>{'$\\frac{1}{2}x + \\frac{3}{4}x + \\frac{1}{4}x$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>All terms have variable <MathText>x</MathText>, so add the fractional coefficients:</p>
                <p><MathText>{'$\\frac{1}{2}x + \\frac{3}{4}x + \\frac{1}{4}x$'}</MathText></p>
                <p>Convert to common denominator (4):</p>
                <p><MathText>{'$= \\frac{2}{4}x + \\frac{3}{4}x + \\frac{1}{4}x$'}</MathText></p>
                <p>Add numerators:</p>
                <p><MathText>{'$= \\frac{2 + 3 + 1}{4}x = \\frac{6}{4}x$'}</MathText></p>
                <p>Simplify:</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$\\frac{3}{2}x$'}</MathText> or <MathText>{'$1\\frac{1}{2}x$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Negative Terms
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Simplify: <MathText>{'$7y - 3x - 4y + 8x - 2y$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Group like terms (watch the signs!):</strong></p>
                <p className="ml-4">Terms with <MathText>y</MathText>: <MathText>{'$7y - 4y - 2y$'}</MathText></p>
                <p className="ml-4">Terms with <MathText>x</MathText>: <MathText>{'$-3x + 8x$'}</MathText></p>
                <p className="mt-3"><strong>Simplify each group:</strong></p>
                <p className="ml-4"><MathText>{'$7y - 4y - 2y = (7 - 4 - 2)y = y$'}</MathText></p>
                <p className="ml-4"><MathText>{'$-3x + 8x = (-3 + 8)x = 5x$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$5x + y$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Complex Expression
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Simplify: <MathText>{'$\\frac{2}{3}a + \\frac{1}{2}b - \\frac{1}{3}a + \\frac{1}{4}b$'}</MathText>
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
                  <p><strong>Group and simplify terms with <MathText>a</MathText>:</strong></p>
                  <p className="ml-4"><MathText>{'$\\frac{2}{3}a - \\frac{1}{3}a = \\frac{2-1}{3}a = \\frac{1}{3}a$'}</MathText></p>
                  <p className="mt-2"><strong>Group and simplify terms with <MathText>b</MathText>:</strong></p>
                  <p className="ml-4"><MathText>{'$\\frac{1}{2}b + \\frac{1}{4}b$'}</MathText></p>
                  <p className="ml-4">Common denominator is 4:</p>
                  <p className="ml-4"><MathText>{'$= \\frac{2}{4}b + \\frac{1}{4}b = \\frac{3}{4}b$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$\\frac{1}{3}a + \\frac{3}{4}b$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Multiple Operations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Simplify: <MathText>{'$-5m + 3n - 2m + 7 - 4n + 9$'}</MathText>
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
                  <p><strong>Group like terms:</strong></p>
                  <p className="ml-4">Terms with <MathText>m</MathText>: <MathText>{'$-5m - 2m = -7m$'}</MathText></p>
                  <p className="ml-4">Terms with <MathText>n</MathText>: <MathText>{'$3n - 4n = -n$'}</MathText></p>
                  <p className="ml-4">Constants: <MathText>{'$7 + 9 = 16$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$-7m - n + 16$'}</MathText>
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
            <li>Only like terms (same variable and power) can be combined</li>
            <li>When simplifying, add or subtract the coefficients of like terms</li>
            <li>Group different variables separately - they cannot be combined</li>
            <li>Pay careful attention to negative signs when combining terms</li>
            <li>For fractional coefficients, use common denominators to add/subtract</li>
            <li>Always write your final answer in simplest form</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
