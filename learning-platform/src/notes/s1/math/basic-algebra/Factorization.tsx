import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function Factorization() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Factorization</h1>
        <p className="mt-2 text-cyan-100">Learn to factor expressions by finding common factors and recognizing patterns</p>
      </div>

      <div className="p-6">
        {/* Section 1: Common Factor Extraction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Common Factor Extraction
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Factorization</strong> is the reverse of expansion. Instead of removing brackets, we put brackets back in!
              The first step is to find the <strong>highest common factor (HCF)</strong> of all terms.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Concept:</strong> Factorization undoes expansion
              </p>
              <p className="text-center text-lg text-gray-800 dark:text-gray-200 my-2">
                <MathText>{'$ab + ac = a(b + c)$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                The common factor <MathText>a</MathText> is "taken out" of the brackets.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Steps to Factor:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Find the highest common factor (HCF) of all terms</li>
                <li>Write the HCF outside the brackets</li>
                <li>Divide each term by the HCF to find what goes inside the brackets</li>
                <li>Check your answer by expanding - you should get back the original expression!</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Simple Factorization
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Factorize: <MathText>{'$6x + 9$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Find HCF of 6 and 9</p>
                <p className="ml-4">Factors of 6: 1, 2, 3, 6</p>
                <p className="ml-4">Factors of 9: 1, 3, 9</p>
                <p className="ml-4">HCF = 3</p>
                <p className="mt-3"><strong>Step 2:</strong> Write HCF outside brackets</p>
                <p className="ml-4"><MathText>{'$6x + 9 = 3(\\text{?})$'}</MathText></p>
                <p className="mt-3"><strong>Step 3:</strong> Divide each term by 3</p>
                <p className="ml-4"><MathText>{'$6x \\div 3 = 2x$'}</MathText></p>
                <p className="ml-4"><MathText>{'$9 \\div 3 = 3$'}</MathText></p>
                <p className="mt-3"><strong>Step 4:</strong> Write final answer</p>
                <p className="ml-4"><MathText>{'$= 3(2x + 3)$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> Expand <MathText>{'$3(2x + 3) = 6x + 9$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$3(2x + 3)$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Variable Common Factor
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Factorize: <MathText>{'$4x^2 + 6x$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Find HCF of coefficients and variables</p>
                <p className="ml-4">Coefficient HCF: HCF of 4 and 6 = 2</p>
                <p className="ml-4">Variable HCF: both have <MathText>x</MathText>, take lowest power = <MathText>x</MathText></p>
                <p className="ml-4">Overall HCF = <MathText>2x</MathText></p>
                <p className="mt-3"><strong>Step 2 & 3:</strong> Divide each term by <MathText>2x</MathText></p>
                <p className="ml-4"><MathText>{'$4x^2 \\div 2x = 2x$'}</MathText></p>
                <p className="ml-4"><MathText>{'$6x \\div 2x = 3$'}</MathText></p>
                <p className="ml-4"><MathText>{'$= 2x(2x + 3)$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> Expand <MathText>{'$2x(2x + 3) = 4x^2 + 6x$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$2x(2x + 3)$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Factorize Completely
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Factorize: <MathText>{'$15a^2 - 10a$'}</MathText>
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
                  <p><strong>Find HCF:</strong></p>
                  <p className="ml-4">HCF of 15 and 10 = 5</p>
                  <p className="ml-4">Both terms have <MathText>a</MathText></p>
                  <p className="ml-4">HCF = <MathText>5a</MathText></p>
                  <p className="mt-3"><strong>Divide each term by <MathText>5a</MathText>:</strong></p>
                  <p className="ml-4"><MathText>{'$15a^2 \\div 5a = 3a$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$-10a \\div 5a = -2$'}</MathText></p>
                  <p className="mt-3"><strong>Check:</strong> <MathText>{'$5a(3a - 2) = 15a^2 - 10a$'}</MathText> ✓</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$5a(3a - 2)$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Factoring by Grouping */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Factoring by Grouping
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When an expression has four terms with no common factor, we can sometimes factor by <strong>grouping</strong>.
              We group the terms in pairs and factor each pair separately.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Steps for Factoring by Grouping:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Group the first two terms and the last two terms</li>
                <li>Factor out the common factor from each group</li>
                <li>Look for a common binomial factor in both groups</li>
                <li>Factor out the common binomial</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Grouping Method
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Factorize: <MathText>{'$ax + ay + bx + by$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Group in pairs</p>
                <p className="ml-4"><MathText>{'$= (ax + ay) + (bx + by)$'}</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Factor each group</p>
                <p className="ml-4">From first group: <MathText>{'$ax + ay = a(x + y)$'}</MathText></p>
                <p className="ml-4">From second group: <MathText>{'$bx + by = b(x + y)$'}</MathText></p>
                <p className="ml-4"><MathText>{'$= a(x + y) + b(x + y)$'}</MathText></p>
                <p className="mt-3"><strong>Step 3:</strong> Notice common binomial <MathText>{'$(x + y)$'}</MathText></p>
                <p className="mt-3"><strong>Step 4:</strong> Factor out <MathText>{'$(x + y)$'}</MathText></p>
                <p className="ml-4"><MathText>{'$= (x + y)(a + b)$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$(x + y)(a + b)$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Factor by Grouping
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Factorize: <MathText>{'$3x + 6 + xy + 2y$'}</MathText>
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
                  <p><strong>Group in pairs:</strong></p>
                  <p className="ml-4"><MathText>{'$= (3x + 6) + (xy + 2y)$'}</MathText></p>
                  <p className="mt-2"><strong>Factor each group:</strong></p>
                  <p className="ml-4"><MathText>{'$= 3(x + 2) + y(x + 2)$'}</MathText></p>
                  <p className="mt-2"><strong>Factor out common binomial <MathText>{'$(x + 2)$'}</MathText>:</strong></p>
                  <p className="ml-4"><MathText>{'$= (x + 2)(3 + y)$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$(x + 2)(3 + y)$'}</MathText> or <MathText>{'$(x + 2)(y + 3)$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Special Products - Difference of Squares */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Special Products - Difference of Squares
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>difference of squares</strong> is an expression in the form <MathText>{'$a^2 - b^2$'}</MathText>.
              This has a special factorization pattern that you should memorize!
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Difference of Squares Formula:</strong>
              </p>
              <p className="text-center text-xl text-gray-800 dark:text-gray-200 my-3">
                <MathText>{'$a^2 - b^2 = (a + b)(a - b)$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                A square minus another square factors into the sum and difference of their roots.
              </p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>How to Recognize:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Two terms only</li>
                <li>Subtraction (minus) sign between them</li>
                <li>Both terms are perfect squares</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                Examples: <MathText>{'$x^2 - 9$'}</MathText>, <MathText>{'$25 - y^2$'}</MathText>, <MathText>{'$4a^2 - 49b^2$'}</MathText>
              </p>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Simple Difference of Squares
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Factorize: <MathText>{'$x^2 - 9$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Recognize it's a difference of squares</p>
                <p className="ml-4"><MathText>{'$x^2$'}</MathText> is a perfect square (square of <MathText>x</MathText>)</p>
                <p className="ml-4"><MathText>9</MathText> is a perfect square (square of 3)</p>
                <p className="ml-4">They are subtracted</p>
                <p className="mt-3"><strong>Step 2:</strong> Identify <MathText>a</MathText> and <MathText>b</MathText></p>
                <p className="ml-4"><MathText>{'$a = x$'}</MathText> (since <MathText>{'$a^2 = x^2$'}</MathText>)</p>
                <p className="ml-4"><MathText>{'$b = 3$'}</MathText> (since <MathText>{'$b^2 = 9$'}</MathText>)</p>
                <p className="mt-3"><strong>Step 3:</strong> Apply formula <MathText>{'$a^2 - b^2 = (a + b)(a - b)$'}</MathText></p>
                <p className="ml-4"><MathText>{'$= (x + 3)(x - 3)$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> Expand <MathText>{'$(x + 3)(x - 3)$'}</MathText></p>
                <p className="ml-4"><MathText>{'$= x^2 - 3x + 3x - 9 = x^2 - 9$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$(x + 3)(x - 3)$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 5 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 5: More Complex Difference of Squares
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Factorize: <MathText>{'$4x^2 - 25$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Identify <MathText>a</MathText> and <MathText>b</MathText>:</strong></p>
                <p className="ml-4"><MathText>{'$4x^2 = (2x)^2$'}</MathText>, so <MathText>{'$a = 2x$'}</MathText></p>
                <p className="ml-4"><MathText>{'$25 = 5^2$'}</MathText>, so <MathText>{'$b = 5$'}</MathText></p>
                <p className="mt-3"><strong>Apply formula:</strong></p>
                <p className="ml-4"><MathText>{'$= (2x + 5)(2x - 5)$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$(2x + 5)(2x - 5)$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Difference of Squares
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Factorize: <MathText>{'$9a^2 - 16b^2$'}</MathText>
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
                  <p><strong>Identify perfect squares:</strong></p>
                  <p className="ml-4"><MathText>{'$9a^2 = (3a)^2$'}</MathText>, so <MathText>{'$a = 3a$'}</MathText> (in formula)</p>
                  <p className="ml-4"><MathText>{'$16b^2 = (4b)^2$'}</MathText>, so <MathText>{'$b = 4b$'}</MathText> (in formula)</p>
                  <p className="mt-2"><strong>Apply <MathText>{'$a^2 - b^2 = (a + b)(a - b)$'}</MathText>:</strong></p>
                  <p className="ml-4"><MathText>{'$= (3a + 4b)(3a - 4b)$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$(3a + 4b)(3a - 4b)$'}</MathText>
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
            <li>Factorization is the reverse of expansion - we put brackets back in</li>
            <li>Always look for the highest common factor (HCF) first</li>
            <li>For four-term expressions with no common factor, try grouping in pairs</li>
            <li>Recognize the difference of squares pattern: <MathText>{'$a^2 - b^2 = (a + b)(a - b)$'}</MathText></li>
            <li>Always check your answer by expanding - you should get back the original expression</li>
            <li>A fully factorized expression cannot be factored any further</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
