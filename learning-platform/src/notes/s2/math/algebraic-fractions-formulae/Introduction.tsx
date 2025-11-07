import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function Introduction() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Introduction to Algebraic Fractions</h1>
        <p className="mt-2 text-purple-100">Understanding fractions with algebraic expressions</p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-b-lg">

        {/* Section 1: What are Algebraic Fractions? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What are Algebraic Fractions?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In primary school, you learned about numerical fractions like <MathText>{'\\frac{3}{5}'}</MathText>, <MathText>{'\\frac{12}{7}'}</MathText>, and <MathText>{'\\frac{-5}{8}'}</MathText>. These fractions have integers in both the numerator and denominator.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An <strong className="text-indigo-600 dark:text-indigo-400">algebraic fraction</strong> is a fraction of the form <MathText>{'\\frac{A}{B}'}</MathText>, where A and/or B are algebraic expressions (containing variables).
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                Examples of Algebraic Fractions:
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <MathText>{'\\frac{2y}{5}'}</MathText> (algebraic expression in numerator)</li>
                <li>• <MathText>{'\\frac{16}{4h + k}'}</MathText> (algebraic expression in denominator)</li>
                <li>• <MathText>{'\\frac{7x}{(2x+1)(3x-1)}'}</MathText> (algebraic expressions in both)</li>
                <li>• <MathText>{'\\frac{3f^2}{f^2-1}'}</MathText> (quadratic expressions)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                ⚠️ Important: When is a Fraction Undefined?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                A fraction is undefined when its denominator equals zero. For algebraic fractions, we must identify values that make the denominator zero.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Example: The fraction <MathText>{'\\frac{5}{x - 3}'}</MathText> is undefined when x = 3, because the denominator becomes zero.
              </p>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Identifying When Fractions are Undefined
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              For which values is the fraction <MathText>{'\\frac{2x+5}{3x-9}'}</MathText> undefined?
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                The fraction is undefined when the denominator equals zero:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                3x − 9 = 0
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                3x = 9
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                x = 3
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                The fraction is undefined when x = 3.
              </p>
            </div>
          </div>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: For which values is <MathText>{'\\frac{7}{2x+8}'}</MathText> undefined?
            </h3>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Set denominator equal to zero:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  2x + 8 = 0
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  2x = −8
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  x = −4
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  The fraction is undefined when x = −4.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Equivalent Fractions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Equivalent Algebraic Fractions
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Just like numerical fractions, the value of an algebraic fraction remains unchanged if both its numerator and denominator are multiplied or divided by the same non-zero number or expression.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Equivalent Fractions Rule:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <MathText>{'\\frac{A}{B} = \\frac{A \\times C}{B \\times C}'}</MathText> where B, C ≠ 0
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{'\\frac{A}{B} = \\frac{A \\div C}{B \\div C}'}</MathText> where B + C ≠ 0
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Visual Understanding:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Multiplying:</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <MathText>{'\\frac{A}{B} = \\frac{A \\times C}{B \\times C}'}</MathText>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Example: <MathText>{'\\frac{x}{3} = \\frac{x \\times 5}{3 \\times 5} = \\frac{5x}{15}'}</MathText>
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Dividing:</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <MathText>{'\\frac{A \\times C}{B \\times C} = \\frac{A}{B}'}</MathText>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Example: <MathText>{'\\frac{6x}{9} = \\frac{6x \\div 3}{9 \\div 3} = \\frac{2x}{3}'}</MathText>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Simplifying Algebraic Fractions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Simplifying Algebraic Fractions
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To simplify an algebraic fraction, we divide both the numerator and denominator by their common factors. The goal is to have no common factors except 1.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                📝 Steps to Simplify:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Identify common factors in numerator and denominator</li>
                <li>Divide both by the common factor</li>
                <li>For variables: subtract exponents (x⁵/x² = x³)</li>
                <li>Check final answer has no common factors except 1</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Simplifying by Canceling Common Factors
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Simplify: <MathText>{'\\frac{3xy^3}{9x^3y^2}'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Identify common factors
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                • Numerator: 3xy³ = 3 × x × y × y × y
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                • Denominator: 9x³y² = 9 × x × x × x × y × y
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Divide by common factors
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                • Numerical: 3 and 9 have common factor 3 → <MathText>{'\\frac{3}{9} = \\frac{1}{3}'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                • Variable x: <MathText>{'\\frac{x}{x^3} = \\frac{1}{x^2}'}</MathText> (subtract exponents: 1 − 3 = −2)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                • Variable y: <MathText>{'\\frac{y^3}{y^2} = y'}</MathText> (subtract exponents: 3 − 2 = 1)
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Write simplified form
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                <MathText>{'\\frac{3xy^3}{9x^3y^2} = \\frac{y}{3x^2}'}</MathText>
              </p>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Simplifying with Multiple Variables
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Simplify: <MathText>{'\\frac{8x²y}{12x⁴y⁴}'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Divide numerator and denominator by common factors:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                • Divide by 4: <MathText>{'\\frac{8}{12} = \\frac{2}{3}'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                • Divide by x²: <MathText>{'\\frac{x^2}{x^4} = \\frac{1}{x^2}'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                • Divide by y: <MathText>{'\\frac{y}{y^4} = \\frac{1}{y^3}'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                <MathText>{'\\frac{8x^2y}{12x^4y^4} = \\frac{2}{3x^2y^3}'}</MathText>
              </p>
            </div>
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Simplify <MathText>{'\\frac{15p²q}{25pq³}'}</MathText>
            </h3>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Divide by common factors:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  • Divide by 5: <MathText>{'\\frac{15}{25} = \\frac{3}{5}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  • Divide by p: <MathText>{'\\frac{p^2}{p} = p'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  • Divide by q: <MathText>{'\\frac{q}{q^3} = \\frac{1}{q^2}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  Answer: <MathText>{'\\frac{3p}{5q^2}'}</MathText>
                </p>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Simplify <MathText>{'\\frac{9x⁴(x−y)³}{27x²y³(x−y)}'}</MathText>
            </h3>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Divide by common factors:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  • Divide by 9: <MathText>{'\\frac{9}{27}'}</MathText> = <MathText>{'\\frac{1}{3}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  • Divide by x²: <MathText>{'\\frac{x⁴}{x²}'}</MathText> = x²
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  • Divide by (x−y): <MathText>{'\\frac{(x−y)³}{(x−y)}'}</MathText> = (x−y)²
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  Answer: <MathText>{'\\frac{x²(x−y)²}{3y³}'}</MathText>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            🔑 Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>An algebraic fraction has algebraic expressions in the numerator and/or denominator</li>
            <li>A fraction is undefined when the denominator equals zero</li>
            <li>Equivalent fractions: <MathText>{'\\frac{A}{B} = \\frac{A \\times C}{B \\times C}'}</MathText> where B, C ≠ 0</li>
            <li>To simplify, divide numerator and denominator by common factors</li>
            <li>For variables: divide by subtracting exponents (<MathText>{'\\frac{x^m}{x^n} = x^{m-n}'}</MathText>)</li>
            <li>Simplified fractions should have no common factors except 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
