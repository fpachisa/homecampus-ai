import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function AlgebraicNotation() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Algebraic Notation &amp; Expressions</h1>
        <p className="mt-2 text-purple-100">Learn how to use letters to represent numbers and write algebraic expressions</p>
      </div>

      <div className="p-6">
        {/* Section 1: Introduction to Variables */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Introduction to Variables
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In algebra, we use letters called <strong>variables</strong> to represent unknown numbers.
              This allows us to write general rules and solve problems when we don't know all the values yet.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For example, if you don't know how many apples you have, you can call it <MathText>x</MathText> apples.
              If each apple costs $2, then the total cost would be <MathText>2x</MathText> dollars.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Key Concept:</strong> Variables are letters that stand in for unknown numbers.
                We can use any letter, but <MathText>x</MathText>, <MathText>y</MathText>, and <MathText>z</MathText> are most common.
              </p>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Understanding Variables
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              If <MathText>n</MathText> represents the number of students in a class, what does <MathText>{'$n + 5$'}</MathText> represent?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong> <MathText>{'$n + 5$'}</MathText> represents 5 more students than the current number.
                If there are <MathText>n</MathText> students now, then <MathText>{'$n + 5$'}</MathText> means adding 5 more students.
              </p>
            </div>
          </div>

          {/* Practice Problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: What does the variable represent?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A car travels at <MathText>v</MathText> km/h for 3 hours. What does <MathText>3v</MathText> represent?
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>3v</MathText> represents the total distance traveled in kilometers. Since distance = speed × time,
                  and the car travels at <MathText>v</MathText> km/h for 3 hours, the distance is <MathText>{'$3 \\times v = 3v$'}</MathText> km.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Terms and Coefficients */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Terms and Coefficients
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An algebraic expression is made up of <strong>terms</strong> separated by + or - signs.
              Each term has a <strong>coefficient</strong> (the number in front) and a <strong>variable part</strong>.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                In the expression <MathText>{'$5x + 3y - 2$'}</MathText>:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><MathText>5x</MathText> is a term (coefficient 5, variable <MathText>x</MathText>)</li>
                <li><MathText>3y</MathText> is a term (coefficient 3, variable <MathText>y</MathText>)</li>
                <li><MathText>{'$-2$'}</MathText> is a constant term (no variable)</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Like Terms:</strong> Terms with the same variable and power are called <strong>like terms</strong>.
                For example, <MathText>3x</MathText> and <MathText>7x</MathText> are like terms, but <MathText>3x</MathText> and <MathText>{'$3x^2$'}</MathText> are not.
              </p>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Identifying Terms and Coefficients
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              In the expression <MathText>{'$7a - 4b + 9$'}</MathText>, identify all terms and their coefficients.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Term 1: <MathText>7a</MathText> (coefficient = 7, variable = <MathText>a</MathText>)</li>
                <li>Term 2: <MathText>{'$-4b$'}</MathText> (coefficient = -4, variable = <MathText>b</MathText>)</li>
                <li>Term 3: <MathText>9</MathText> (constant term, no variable)</li>
              </ul>
            </div>
          </div>

          {/* Practice Problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Identify Like Terms
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Which terms are like terms in the expression <MathText>{'$6x + 3y - 2x + 5y + 4$'}</MathText>?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Like terms:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li><MathText>6x</MathText> and <MathText>{'$-2x$'}</MathText> are like terms (both have variable <MathText>x</MathText>)</li>
                  <li><MathText>3y</MathText> and <MathText>5y</MathText> are like terms (both have variable <MathText>y</MathText>)</li>
                  <li><MathText>4</MathText> is a constant term (stands alone)</li>
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Writing Algebraic Expressions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Writing Algebraic Expressions
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              One of the most important skills in algebra is translating word phrases into algebraic expressions.
              Here are some common translations:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <table className="w-full text-gray-700 dark:text-gray-300">
                <thead className="bg-gray-200 dark:bg-gray-700">
                  <tr>
                    <th className="p-2 text-left border border-gray-300 dark:border-gray-600">Word Phrase</th>
                    <th className="p-2 text-left border border-gray-300 dark:border-gray-600">Algebraic Expression</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-gray-300 dark:border-gray-600">5 more than <MathText>x</MathText></td>
                    <td className="p-2 border border-gray-300 dark:border-gray-600"><MathText>{'$x + 5$'}</MathText></td>
                  </tr>
                  <tr className="bg-gray-100 dark:bg-gray-800/50">
                    <td className="p-2 border border-gray-300 dark:border-gray-600">3 less than <MathText>y</MathText></td>
                    <td className="p-2 border border-gray-300 dark:border-gray-600"><MathText>{'$y - 3$'}</MathText></td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-gray-300 dark:border-gray-600">Twice <MathText>a</MathText></td>
                    <td className="p-2 border border-gray-300 dark:border-gray-600"><MathText>2a</MathText></td>
                  </tr>
                  <tr className="bg-gray-100 dark:bg-gray-800/50">
                    <td className="p-2 border border-gray-300 dark:border-gray-600">Half of <MathText>b</MathText></td>
                    <td className="p-2 border border-gray-300 dark:border-gray-600"><MathText>{'$\\frac{b}{2}$'}</MathText> or <MathText>{'$\\frac{1}{2}b$'}</MathText></td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-gray-300 dark:border-gray-600">The product of 4 and <MathText>n</MathText></td>
                    <td className="p-2 border border-gray-300 dark:border-gray-600"><MathText>4n</MathText></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Translating Word Phrases
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Write an algebraic expression for: "The sum of three times a number and 7"
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Let <MathText>x</MathText> represent "a number"</li>
                <li>"Three times a number" means <MathText>3x</MathText></li>
                <li>"The sum of" means we add</li>
                <li>Final expression: <MathText>{'$3x + 7$'}</MathText></li>
              </ul>
            </div>
          </div>

          {/* Practice Problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Write the Expression
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Write an algebraic expression for: "5 less than twice a number"
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Step-by-step:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>Let <MathText>n</MathText> represent "a number"</li>
                  <li>"Twice a number" means <MathText>2n</MathText></li>
                  <li>"5 less than" means we subtract 5 from what comes after</li>
                  <li><strong>Final expression:</strong> <MathText>{'$2n - 5$'}</MathText></li>
                </ul>
                <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border-l-2 border-blue-500">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Common Mistake:</strong> Students often write <MathText>{'$5 - 2n$'}</MathText>,
                    but "5 less than twice a number" means we start with twice the number and subtract 5!
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
            <li>Variables are letters that represent unknown numbers</li>
            <li>Terms are parts of an expression separated by + or - signs</li>
            <li>Coefficients are the numbers in front of variables</li>
            <li>Like terms have the same variable and power</li>
            <li>Translating word phrases to algebra requires careful attention to order (e.g., "5 less than x" is <MathText>{'$x - 5$'}</MathText>, not <MathText>{'$5 - x$'}</MathText>)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
