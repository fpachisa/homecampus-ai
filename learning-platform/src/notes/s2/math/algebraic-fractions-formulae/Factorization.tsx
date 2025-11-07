import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function Factorization() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Simplifying by Factorization</h1>
        <p className="mt-2 text-green-100">Using factorization to simplify complex algebraic fractions</p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-b-lg">

        {/* Section 1: Why Factor First? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Why Factor Before Simplifying?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sometimes, common factors are not immediately obvious in algebraic fractions. By factorizing the numerator and denominator first, we can identify and cancel common factors more easily.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                📋 Strategy for Simplifying by Factorization:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Factor the numerator completely</li>
                <li>Factor the denominator completely</li>
                <li>Cancel common factors</li>
                <li>Write the simplified fraction</li>
              </ol>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                💡 Key Insight:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Factorization reveals hidden common factors that weren't visible in the original form. Always factor BOTH numerator and denominator before canceling!
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Factoring Linear Expressions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Simplifying with Linear Factors
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Linear expressions can often be factored by extracting common factors. Look for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 ml-4">
              <li>Common numerical coefficients</li>
              <li>Common variable factors</li>
              <li>Common binomial factors (like x + 3 or 2a − 5)</li>
            </ul>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Extracting Common Factor from Numerator
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Simplify: <MathText>{'\\frac{a^2+4ab^2}{3ab}'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Factor the numerator
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                a² + 4ab² = a(a + 4b²)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                Extract common factor 'a'
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Rewrite the fraction
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                <MathText>{'\\frac{a^2+4ab^2}{3ab} = \\frac{a(a+4b^2)}{3ab}'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Cancel common factor 'a'
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                <MathText>{'= \\frac{a+4b^2}{3b}'}</MathText>
              </p>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Extracting Common Factor from Denominator
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Simplify: <MathText>{'\\frac{3t}{(t²−2t)}'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Factor the denominator
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                t² − 2t = t(t − 2)
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Rewrite the fraction
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                <MathText>{'\\frac{3t}{t^2-2t} = \\frac{3t}{t(t-2)}'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Cancel common factor 't'
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                <MathText>{'= \\frac{3}{t-2}'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm italic">
                Note: The fraction is undefined when t = 0 or t = 2
              </p>
            </div>
          </div>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Simplify <MathText>{'\\frac{(h²+7hk)}{(5hk)}'}</MathText>
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
                  Factor numerator: h² + 7hk = h(h + 7k)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Rewrite: <MathText>{'\\frac{h(h+7k)}{5hk}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Cancel common factor 'h':
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  Answer: <MathText>{'\\frac{h+7k}{5k}'}</MathText>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Factoring Quadratic Expressions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Simplifying with Quadratic Factors
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Quadratic expressions require more advanced factorization techniques. Key patterns to recognize:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-300 dark:border-purple-700 p-4 rounded">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                  Difference of Squares:
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'a²−b² = (a+b)(a−b)'}</MathText>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Example: x² − 9 = (x+3)(x−3)
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-300 dark:border-purple-700 p-4 rounded">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                  Factoring Trinomials:
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'x²+bx+c = (x+p)(x+q)'}</MathText>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  where pq = c and p + q = b
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Using Difference of Squares
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Simplify: <MathText>{'\\frac{(x²−3x)}{(3x−9)}'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Factor numerator and denominator
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                Numerator: x² − 3x = x(x − 3)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                Denominator: 3x − 9 = 3(x − 3)
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Rewrite the fraction
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                <MathText>{'\\frac{x(x-3)}{3(x-3)}'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Cancel common factor (x − 3)
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                <MathText>{'= \\frac{x}{3}'}</MathText>
              </p>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Factoring Both Numerator and Denominator
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Simplify: <MathText>{'\\frac{(2m²−4m)}{(m²−4)}'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Factor the numerator
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                2m² − 4m = 2m(m − 2)
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Factor the denominator (difference of squares)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                m² − 4 = (m + 2)(m − 2)
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Rewrite and cancel
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                <MathText>{'\\frac{2m(m-2)}{(m+2)(m-2)}'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                Cancel (m − 2):
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                <MathText>{'= \\frac{2m}{m+2}'}</MathText>
              </p>
            </div>
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Simplify <MathText>{'\\frac{(3v²−9v)}{(v²−9)}'}</MathText>
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
                  Factor numerator: 3v² − 9v = 3v(v − 3)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Factor denominator: v² − 9 = (v + 3)(v − 3)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Rewrite: <MathText>{'\\frac{3v(v-3)}{(v+3)(v-3)}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Cancel (v − 3):
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  Answer: <MathText>{'\\frac{3v}{v+3}'}</MathText>
                </p>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Simplify <MathText>{'\\frac{(x²−3xy−4y²)}{(3x²−12xy)}'}</MathText>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Hint: Factor x² − 3xy − 4y² using the multiplication frame method
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Factor numerator: x² − 3xy − 4y² = (x − 4y)(x + y)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Factor denominator: 3x² − 12xy = 3x(x − 4y)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Rewrite: <MathText>{'\\frac{(x-4y)(x+y)}{3x(x-4y)}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Cancel (x − 4y):
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  Answer: <MathText>{'\\frac{x+y}{3x}'}</MathText>
                </p>
              </div>
            )}
          </div>

          {/* Practice 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Simplify <MathText>{'\\frac{(z²−4z)}{(4z−16)}'}</MathText>
            </h3>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Factor numerator: z² − 4z = z(z − 4)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Factor denominator: 4z − 16 = 4(z − 4)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Rewrite: <MathText>{'\\frac{z(z-4)}{4(z-4)}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Cancel (z − 4):
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  Answer: <MathText>{'\\frac{z}{4}'}</MathText>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            ⚠️ Common Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                ❌ Mistake 1: Canceling Terms Instead of Factors
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Wrong:</strong> <MathText>{'\\frac{x+3}{x+5}'}</MathText> ≠ <MathText>{'\\frac{3}{5}'}</MathText> (cannot cancel x's - they are terms, not factors)
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Remember:</strong> Only cancel factors that multiply the entire numerator or denominator!
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                ❌ Mistake 2: Forgetting to Factor Completely
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Wrong:</strong> <MathText>{'\\frac{2x^2-8}{x-2}'}</MathText> → factoring numerator as 2(x² − 4) but stopping there
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Correct:</strong> 2(x² − 4) = 2(x + 2)(x − 2), then cancel (x − 2)
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                ❌ Mistake 3: Sign Errors
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Note: (a − b) and (b − a) are negatives of each other
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Example:</strong> <MathText>{'\\frac{x-3}{3-x} = \\frac{x-3}{-(x-3)} = -1'}</MathText>
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">
            🔑 Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Always factor numerator and denominator completely before canceling</li>
            <li>Look for common numerical factors, variable factors, and binomial factors</li>
            <li>Key quadratic patterns: difference of squares (a² − b²) and trinomial factoring</li>
            <li>Only cancel factors (things that multiply), never cancel terms (things that add/subtract)</li>
            <li>Watch for sign differences: (a − b) = −(b − a)</li>
            <li>Check that the denominator never equals zero in the original and simplified forms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
