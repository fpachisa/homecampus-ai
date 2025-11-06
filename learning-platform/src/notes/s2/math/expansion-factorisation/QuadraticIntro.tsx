import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function IntroductionNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Introduction to Quadratic Expressions</h1>
        <p className="mt-2 text-purple-100">Understanding algebraic expressions and introducing quadratic forms</p>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-8">

        {/* Section 1: Algebraic Expressions Recap */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What are Algebraic Expressions?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An <strong>algebraic expression</strong> is an expression containing letters (variables), numbers, and/or operations. Variables represent unknown values that can change.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Examples of Algebraic Expressions:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>x + 8</li>
                <li>3y − 7</li>
                <li>(6 − x)/2</li>
                <li>x − 3xy + 4y − 7</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Key Terminology:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Variable:</strong> A letter representing an unknown value (e.g., x, y, z)</li>
                <li><strong>Coefficient:</strong> The number multiplying a variable (in 3x, the coefficient is 3)</li>
                <li><strong>Term:</strong> A single part of an expression (e.g., in x − 3xy + 4y, the terms are x, −3xy, and 4y)</li>
                <li><strong>Constant term:</strong> A term without a variable (e.g., −7 in the expression above)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Linear Expressions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Linear Expressions
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>linear expression</strong> in one variable x is an algebraic expression that contains only one term in x, with or without a constant term.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Examples of Linear Expressions:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>x + 8</li>
                <li>5x</li>
                <li>3y − 7</li>
                <li>(6 − x)/2</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                NOT Linear Expressions (Why?):
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><MathText>{'$x^2 − 5x + 6$'}</MathText> — contains x²  (squared term)</li>
                <li>4x + y − 8 — contains two different variables</li>
                <li>2x − 3xy + 7 — contains a product of variables (xy)</li>
              </ul>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Identifying Linear Expressions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Which of the following are linear expressions? Give your reasons.
            </p>
            <ul className="list-none space-y-1 text-gray-700 dark:text-gray-300 ml-4">
              <li>(a) 7 − 4x</li>
              <li>(b) 5y + 8</li>
              <li>(c) (2 − x)/9</li>
              <li>(d) 4x + y − 8</li>
              <li>(e) 4</li>
              <li>(f) 2x − 3xy + 7</li>
              <li><MathText>{'$(g) x^2 − 5x + 6$'}</MathText></li>
            </ul>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Solution:</p>
                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>(a), (b), (c), (e):</strong> Linear expressions ✓</li>
                  <li><strong>(d):</strong> NOT linear — has two variables (x and y)</li>
                  <li><strong>(f):</strong> NOT linear — contains product of variables (xy)</li>
                  <li><strong>(g):</strong> NOT linear — contains x² (squared term)</li>
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Quadratic Expressions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Quadratic Expressions
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We've seen terms like xy and ab. What about x × x? We can write it as x² (read as "x squared").
              This is similar to how we write 3 × 3 = 3² and 4 × 4 = 4².
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                Definition: Quadratic Expression
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A <strong>quadratic expression</strong> in one variable x is of the form:
              </p>
              <div className="text-center text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">
                <MathText>{'$ax^2 + bx + c$'}</MathText>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                where a, b, and c are constants and a ≠ 0.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm italic">
                Note: If a = 0, then it becomes a linear expression.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Examples of Quadratic Expressions:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><MathText>{'$x^2 − 5x + 6$'}</MathText></li>
                <li><MathText>{'$3x^2 − 9x$'}</MathText></li>
                <li><MathText>{'$−4x^2 + 3$'}</MathText></li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-gray-500 p-4 rounded">
              <h3 className="font-semibold text-gray-800 dark:text-gray-300 mb-2">
                Important Notation Conventions:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><MathText>{'$x^2$'}</MathText> means x × x (NOT x × 2)</li>
                <li>−4x² means −4 × x × x</li>
                <li>xy means x × y (NOT x + y)</li>
                <li>ab means a × b (NOT a + b)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Addition and Subtraction of Like Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Addition and Subtraction of Quadratic Expressions
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To add or subtract quadratic expressions, we add or subtract <strong>like terms</strong> in the same way we add or subtract real numbers.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">
                Like Terms in x²:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                We add/subtract coefficients of x² terms:
              </p>
              <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><MathText>{'$(−2x^2) + (−3x^2) = −5x^2$'}</MathText></li>
                <li><MathText>{'$5x^2 + (−2x^2) = 5x^2 − 2x^2 = 3x^2$'}</MathText></li>
                <li><MathText>{'$2x^2 − 5x^2 = −3x^2$'}</MathText></li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example: Simplify 5x² + (−11x²)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                5x² + (−11x²) = 5x² − 11x² = −6x²
              </p>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Adding and Subtracting Like Terms
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Without using a calculator, simplify the following:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
              <div>(a) <MathText>{'$x^2 + (−6x^2)$'}</MathText></div>
              <div>(b) <MathText>{'$10x^2 + (−19x^2)$'}</MathText></div>
              <div>(c) <MathText>{'$−13y^2 + 3y^2$'}</MathText></div>
              <div>(d) <MathText>{'$−28y^2 + 15y^2$'}</MathText></div>
            </div>

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Solution:</p>
                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
                  <li>(a) <MathText>{'$x^2 + (−6x^2) = −5x^2$'}</MathText></li>
                  <li>(b) <MathText>{'$10x^2 + (−19x^2) = −9x^2$'}</MathText></li>
                  <li>(c) <MathText>{'$−13y^2 + 3y^2 = −10y^2$'}</MathText></li>
                  <li>(d) <MathText>{'$−28y^2 + 15y^2 = −13y^2$'}</MathText></li>
                </ul>
              </div>
            )}
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded">
            <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
              ⚠️ Important: Unlike Terms Cannot Be Combined
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              We <strong>cannot</strong> add or subtract <strong>unlike terms</strong>. For example:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>2x + 3 cannot be simplified (x and 3 are unlike terms)</li>
              <li><MathText>{'$x^2 − 5x + 6$'}</MathText> cannot be simplified (x², x, and 6 are all unlike terms)</li>
              <li><MathText>{'$x^2$'}</MathText> and −5x are unlike because the variables x have different powers</li>
            </ul>
          </div>
        </section>

        {/* Section 5: Simplifying Complex Expressions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Simplifying Algebraic Expressions
          </h2>

          <div className="mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example: Simplify −3x² + (−4x²) + 2 − 8
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong>
              </p>
              <div className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <p>−3x² + (−4x²) + 2 − 8</p>
                <p>= −3x² − 4x² + 2 − 8</p>
                <p>= −7x² + (−6)</p>
                <p className="font-semibold">= −7x² − 6</p>
              </div>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Simplifying Expressions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Simplify each of the following expressions:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <div>(a) <MathText>{'$−5x^2 + (−2x^2) + 3 − 7$'}</MathText></div>
              <div>(b) <MathText>{'$8x^2 + (−6x^2) + 4x − 9x$'}</MathText></div>
              <div>(c) <MathText>{'$−4y^2 − yx + 3y^2 − (−5xy)$'}</MathText></div>
            </div>

            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Solution:</p>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold">(a)</p>
                    <p><MathText>{'$−5x^2 + (−2x^2) + 3 − 7$'}</MathText></p>
                    <p><MathText>{'$= −7x^2 − 4$'}</MathText></p>
                  </div>
                  <div>
                    <p className="font-semibold">(b)</p>
                    <p><MathText>{'$8x^2 + (−6x^2) + 4x − 9x$'}</MathText></p>
                    <p><MathText>{'$= 2x^2 − 5x$'}</MathText></p>
                  </div>
                  <div>
                    <p className="font-semibold">(c)</p>
                    <p><MathText>{'$−4y^2 − yx + 3y^2 − (−5xy)$'}</MathText></p>
                    <p>Note: yx = xy, so −yx = −xy</p>
                    <p><MathText>{'$= −y^2 − xy + 5xy$'}</MathText></p>
                    <p><MathText>{'$= −y^2 + 4xy$'}</MathText></p>
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
            <li>An <strong>algebraic expression</strong> contains letters (variables), numbers, and operations</li>
            <li>A <strong>linear expression</strong> has only one term in x (with possible constant)</li>
            <li>A <strong>quadratic expression</strong> has the form ax² + bx + c where a ≠ 0</li>
            <li>We can only add/subtract <strong>like terms</strong> by combining their coefficients</li>
            <li>Terms with different powers of variables (like x² and x) are <strong>unlike terms</strong> and cannot be combined</li>
            <li>When simplifying, group like terms together and combine their coefficients</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
