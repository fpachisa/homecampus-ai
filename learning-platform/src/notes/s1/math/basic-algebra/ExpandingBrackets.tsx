import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function ExpandingBrackets() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Expanding Brackets</h1>
        <p className="mt-2 text-orange-100">Master the distributive law and expand complex algebraic expressions</p>
      </div>

      <div className="p-6">
        {/* Section 1: Distributive Law - Single Bracket */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Distributive Law - Single Bracket
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>distributive law</strong> states that when you multiply a number (or variable) by a sum or difference in brackets,
              you must multiply it by every term inside the brackets.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>The Distributive Law:</strong>
              </p>
              <p className="text-center text-xl text-gray-800 dark:text-gray-200 my-3">
                <MathText>{'$a(b + c) = ab + ac$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                The term outside multiplies <strong>each term</strong> inside the brackets.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Steps to Expand:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Multiply the term outside by the first term inside</li>
                <li>Multiply the term outside by the second term inside</li>
                <li>Write the results with their correct signs</li>
                <li>Simplify if possible</li>
              </ol>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Basic Expansion
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Expand: <MathText>{'$3(x + 5)$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>Multiply 3 by each term inside the brackets:</p>
                <p className="ml-4"><MathText>{'$3(x + 5) = 3 \\times x + 3 \\times 5$'}</MathText></p>
                <p className="ml-4"><MathText>{'$= 3x + 15$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$3x + 15$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Expand with Variables
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Expand: <MathText>{'$x(2x + 7)$'}</MathText>
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
                  <p>Multiply <MathText>x</MathText> by each term inside:</p>
                  <p className="ml-4"><MathText>{'$x(2x + 7) = x \\times 2x + x \\times 7$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$= 2x^2 + 7x$'}</MathText></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 ml-4">
                    (Remember: <MathText>{'$x \\times 2x = 2x^2$'}</MathText> because <MathText>{'$x \\times x = x^2$'}</MathText>)
                  </p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$2x^2 + 7x$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Expanding with Negative Multipliers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Expanding with Negative Multipliers
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When the term outside the brackets is negative, you must carefully handle the signs.
              A negative times a positive gives negative, and a negative times a negative gives positive!
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Sign Rules (Critical!):</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><MathText>{'$(+) \\times (+) = (+)$'}</MathText></li>
                <li><MathText>{'$(+) \\times (-) = (-)$'}</MathText></li>
                <li><MathText>{'$(-) \\times (+) = (-)$'}</MathText></li>
                <li><MathText>{'$(-) \\times (-) = (+)$'}</MathText></li>
              </ul>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Negative Multiplier
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Expand: <MathText>{'$-2(x - 5)$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>Multiply -2 by each term inside (watch the signs!):</p>
                <p className="ml-4"><MathText>{'$-2(x - 5) = (-2) \\times x + (-2) \\times (-5)$'}</MathText></p>
                <p className="ml-4"><MathText>{'$= -2x + 10$'}</MathText></p>
                <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border-l-2 border-blue-500">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Why +10?</strong> Because <MathText>{'$(-2) \\times (-5) = +10$'}</MathText> (negative times negative is positive!)
                  </p>
                </div>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$-2x + 10$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Negative Outside Brackets
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Expand: <MathText>{'$-3(2a + 4b - 1)$'}</MathText>
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
                  <p>Multiply -3 by each term:</p>
                  <p className="ml-4"><MathText>{'$(-3) \\times 2a = -6a$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$(-3) \\times 4b = -12b$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$(-3) \\times (-1) = +3$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$-6a - 12b + 3$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Expanding Double Brackets */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Expanding Double Brackets
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we have two brackets multiplied together, we must multiply <strong>every term</strong> in the first bracket
              by <strong>every term</strong> in the second bracket. This is often remembered using <strong>FOIL</strong>:
              First, Outer, Inner, Last.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>FOIL Method for <MathText>{'$(a + b)(c + d)$'}</MathText>:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>F</strong>irst: Multiply first terms: <MathText>{'$a \\times c = ac$'}</MathText></li>
                <li><strong>O</strong>uter: Multiply outer terms: <MathText>{'$a \\times d = ad$'}</MathText></li>
                <li><strong>I</strong>nner: Multiply inner terms: <MathText>{'$b \\times c = bc$'}</MathText></li>
                <li><strong>L</strong>ast: Multiply last terms: <MathText>{'$b \\times d = bd$'}</MathText></li>
              </ul>
              <p className="text-center text-lg text-gray-800 dark:text-gray-200 mt-4">
                <MathText>{'$(a + b)(c + d) = ac + ad + bc + bd$'}</MathText>
              </p>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Double Brackets
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Expand: <MathText>{'$(x + 3)(x + 5)$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution using FOIL:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>F</strong>irst: <MathText>{'$x \\times x = x^2$'}</MathText></p>
                <p><strong>O</strong>uter: <MathText>{'$x \\times 5 = 5x$'}</MathText></p>
                <p><strong>I</strong>nner: <MathText>{'$3 \\times x = 3x$'}</MathText></p>
                <p><strong>L</strong>ast: <MathText>{'$3 \\times 5 = 15$'}</MathText></p>
                <p className="mt-3">Combine all terms:</p>
                <p className="ml-4"><MathText>{'$= x^2 + 5x + 3x + 15$'}</MathText></p>
                <p className="ml-4"><MathText>{'$= x^2 + 8x + 15$'}</MathText> (combine like terms <MathText>5x</MathText> and <MathText>3x</MathText>)</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$x^2 + 8x + 15$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: FOIL with Subtraction
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Expand: <MathText>{'$(x - 2)(x + 7)$'}</MathText>
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
                  <p><strong>Using FOIL (watch the signs!):</strong></p>
                  <p className="ml-4"><strong>F</strong>irst: <MathText>{'$x \\times x = x^2$'}</MathText></p>
                  <p className="ml-4"><strong>O</strong>uter: <MathText>{'$x \\times 7 = 7x$'}</MathText></p>
                  <p className="ml-4"><strong>I</strong>nner: <MathText>{'$(-2) \\times x = -2x$'}</MathText></p>
                  <p className="ml-4"><strong>L</strong>ast: <MathText>{'$(-2) \\times 7 = -14$'}</MathText></p>
                  <p className="mt-3">Combine:</p>
                  <p className="ml-4"><MathText>{'$= x^2 + 7x - 2x - 14$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$= x^2 + 5x - 14$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$x^2 + 5x - 14$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Expanding and Simplifying */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Expanding and Simplifying
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sometimes you need to expand multiple brackets and then simplify by collecting like terms.
              This combines all the skills you've learned so far!
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Strategy:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Expand each bracket separately</li>
                <li>Write out all terms</li>
                <li>Collect like terms</li>
                <li>Write final simplified answer</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Expand and Simplify
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Expand and simplify: <MathText>{'$2(x + 3) + 3(x - 1)$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Expand first bracket</p>
                <p className="ml-4"><MathText>{'$2(x + 3) = 2x + 6$'}</MathText></p>
                <p className="mt-2"><strong>Step 2:</strong> Expand second bracket</p>
                <p className="ml-4"><MathText>{'$3(x - 1) = 3x - 3$'}</MathText></p>
                <p className="mt-2"><strong>Step 3:</strong> Write out all terms</p>
                <p className="ml-4"><MathText>{'$= 2x + 6 + 3x - 3$'}</MathText></p>
                <p className="mt-2"><strong>Step 4:</strong> Collect like terms</p>
                <p className="ml-4">Terms with <MathText>x</MathText>: <MathText>{'$2x + 3x = 5x$'}</MathText></p>
                <p className="ml-4">Constants: <MathText>{'$6 - 3 = 3$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$5x + 3$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Multiple Brackets
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Expand and simplify: <MathText>{'$4(2a - 1) - 3(a + 2)$'}</MathText>
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
                  <p><strong>Step 1:</strong> Expand first bracket</p>
                  <p className="ml-4"><MathText>{'$4(2a - 1) = 8a - 4$'}</MathText></p>
                  <p className="mt-2"><strong>Step 2:</strong> Expand second bracket (watch the minus!)</p>
                  <p className="ml-4"><MathText>{'$-3(a + 2) = -3a - 6$'}</MathText></p>
                  <p className="mt-2"><strong>Step 3:</strong> Write out all terms</p>
                  <p className="ml-4"><MathText>{'$= 8a - 4 - 3a - 6$'}</MathText></p>
                  <p className="mt-2"><strong>Step 4:</strong> Collect like terms</p>
                  <p className="ml-4">Terms with <MathText>a</MathText>: <MathText>{'$8a - 3a = 5a$'}</MathText></p>
                  <p className="ml-4">Constants: <MathText>{'$-4 - 6 = -10$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$5a - 10$'}</MathText>
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
            <li>The distributive law: multiply the outside term by every term inside the brackets</li>
            <li>Pay careful attention to signs when expanding with negative multipliers</li>
            <li>For double brackets, use FOIL: First, Outer, Inner, Last</li>
            <li>Always simplify your answer by collecting like terms</li>
            <li>Check your signs - negative times negative gives positive!</li>
            <li>When multiple brackets are present, expand each one separately, then combine</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
