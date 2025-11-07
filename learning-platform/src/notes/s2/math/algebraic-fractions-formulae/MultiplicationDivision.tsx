import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function MultiplicationDivision() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Multiplying and Dividing Algebraic Fractions</h1>
        <p className="mt-2 text-orange-100">Mastering operations with algebraic fractions</p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-b-lg">

        {/* Section 1: Multiplying Algebraic Fractions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Multiplying Algebraic Fractions
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Multiplying algebraic fractions follows the same rule as multiplying numerical fractions: multiply the numerators together and multiply the denominators together.
            </p>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                📐 Multiplication Rule:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                <MathText>{'\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}'}</MathText>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                where b, d ≠ 0
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                💡 Smart Strategy: Simplify BEFORE Multiplying!
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                It's much easier to:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Factor numerators and denominators first</li>
                <li>Cancel common factors diagonally (across fractions)</li>
                <li>Then multiply what remains</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Simple Multiplication
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Simplify: <MathText>{'\\frac{ab}{c} \\times \\frac{4c}{6a^2b}'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Write as single fraction
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                <MathText>{'\\frac{ab \\times 4c}{c \\times 6a^2b}'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Cancel common factors
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                • Cancel 'a' from numerator and a² from denominator → leaves a in denominator
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                • Cancel 'b' (appears once in each)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                • Cancel 'c' (appears once in each)
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Simplify remaining numbers
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                <MathText>{'\\frac{4}{6} = \\frac{2}{3}'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                Answer: <MathText>{'\\frac{2}{3a}'}</MathText>
              </p>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Multiplication with Factorization
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Simplify: <MathText>{'\\frac{4x-16}{x+y} \\times \\frac{8}{5x+5y}'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Factor where possible
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                4x − 16 = 4(x − 4)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                5x + 5y = 5(x + y)
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Rewrite with factors
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                <MathText>{'\\frac{4(x-4)}{x+y} \\times \\frac{8}{5(x+y)}'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Cancel common factors
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                • (x + y) appears in both denominators - cancel it
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                • Simplify numbers: 4 × 8 = 32, and <MathText>{'\\frac{32}{5}'}</MathText> remains
              </p>

              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                Answer: <MathText>{'\\frac{32(x-4)}{5(x+y)^2}'}</MathText> or <MathText>{'\\frac{32x-128}{5(x+y)^2}'}</MathText>
              </p>
            </div>
          </div>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Multiply <MathText>{'\\frac{6d}{9f^2} \\times \\frac{3f^2}{8f^2}'}</MathText>
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
                  Write as single fraction: <MathText>{'\\frac{6d \\times 3f^2}{9f^2 \\times 8f^2}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Cancel f²:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Simplify numbers: 6 × 3 = 18, 9 × 8 = 72, <MathText>{'\\frac{18}{72} = \\frac{1}{4}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  Answer: <MathText>{'\\frac{d}{4f^2}'}</MathText>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Dividing Algebraic Fractions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Dividing Algebraic Fractions
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dividing by a fraction is the same as multiplying by its reciprocal. The <strong>reciprocal</strong> of a fraction is obtained by swapping the numerator and denominator.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                📐 Division Rule:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-3">
                <MathText>{'\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Steps:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mt-2">
                <li>Keep the first fraction</li>
                <li>Change ÷ to ×</li>
                <li>Flip the second fraction (find reciprocal)</li>
                <li>Multiply</li>
              </ol>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-300 dark:border-purple-700 p-4 rounded">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                What is a Reciprocal?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="text-gray-700 dark:text-gray-300">
                    Reciprocal of <MathText>{'\\frac{c}{d}'}</MathText> is <MathText>{'\\frac{d}{c}'}</MathText>
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="text-gray-700 dark:text-gray-300">
                    Reciprocal of x is <MathText>{'\\frac{1}{x}'}</MathText>
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="text-gray-700 dark:text-gray-300">
                    Reciprocal of <MathText>{'\\frac{4}{5}'}</MathText> is <MathText>{'\\frac{5}{4}'}</MathText>
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="text-gray-700 dark:text-gray-300">
                    Reciprocal of <MathText>{'\\frac{2x+1}{3}'}</MathText> is <MathText>{'\\frac{3}{2x+1}'}</MathText>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Simple Division
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Simplify: <MathText>{'\\frac{p}{q} \\div \\frac{p^2r}{q^2} \\times \\frac{pr^2}{2q}'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Convert division to multiplication
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                <MathText>{'\\frac{p}{q} \\times \\frac{q^2}{p^2r} \\times \\frac{pr^2}{2q}'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Combine all fractions
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                <MathText>{'\\frac{p \\times q^2 \\times pr^2}{q \\times p^2r \\times 2q}'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Cancel common factors
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                • p cancels with p² → leaves p in denominator
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                • q² cancels with q × q → leaves nothing
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                • r cancels with r² → leaves r in numerator
              </p>

              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                Answer: <MathText>{'\\frac{r^2}{2p}'}</MathText>
              </p>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Division with Factorization
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Simplify: <MathText>{'\\frac{h}{h^2-2h+1} \\times \\frac{(h-1)^3}{2h+1}'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Factor h² − 2h + 1
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                h² − 2h + 1 = (h − 1)²
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Rewrite with factors
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                <MathText>{'\\frac{h}{(h-1)^2} \\times \\frac{(h-1)^3}{2h+1}'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Combine and cancel
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                <MathText>{'\\frac{h(h-1)^3}{(h-1)^2(2h+1)}'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                Cancel (h−1)²: leaves (h−1) in numerator
              </p>

              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                Answer: <MathText>{'\\frac{h(h-1)}{2h+1}'}</MathText>
              </p>
            </div>
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Divide <MathText>{'\\frac{m^2-4}{m^2-3m+2} \\div \\frac{m}{m-1}'}</MathText>
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
                  <strong>Step 1:</strong> Convert to multiplication
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                  <MathText>{'\\frac{m^2-4}{m^2-3m+2} \\times \\frac{m-1}{m}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 2:</strong> Factor
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  m² − 4 = (m + 2)(m − 2)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                  m² − 3m + 2 = (m − 1)(m − 2)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 3:</strong> Rewrite and cancel
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  <MathText>{'\\frac{(m+2)(m-2)(m-1)}{(m-1)(m-2)m}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  Cancel (m − 1) and (m − 2)
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  Answer: <MathText>{'\\frac{m+2}{m}'}</MathText>
                </p>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Simplify <MathText>{'\\frac{(2x-3)^2}{a} \\times \\frac{a^2}{9-6x}'}</MathText>
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
                  Factor denominator: 9 − 6x = −3(2x − 3)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Rewrite: <MathText>{'\\frac{(2x-3)^2 a^2}{a \\times (-3)(2x-3)}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Cancel (2x − 3) and a:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'\\frac{a(2x-3)}{-3}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  Answer: <MathText>{'\\frac{-a(2x-3)}{3}'}</MathText> or <MathText>{'\\frac{a(3-2x)}{3}'}</MathText>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            📋 Quick Reference Guide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">
                ✖️ MULTIPLICATION
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <MathText>{'\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}'}</MathText>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>Multiply straight across</li>
                <li>Cancel before multiplying (easier!)</li>
                <li>Factor if needed</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3">
                ➗ DIVISION
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <MathText>{'\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}'}</MathText>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>Keep, Change, Flip (KCF)</li>
                <li>Find reciprocal of divisor</li>
                <li>Then multiply</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-orange-50 dark:bg-orange-900/30 border-l-4 border-orange-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 mb-3">
            🔑 Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Multiply fractions: multiply numerators and multiply denominators</li>
            <li>Simplify BEFORE multiplying by canceling common factors (saves time!)</li>
            <li>Divide fractions: multiply by the reciprocal (flip the second fraction)</li>
            <li>Reciprocal of <MathText>{'\\frac{a}{b}'}</MathText> is <MathText>{'\\frac{b}{a}'}</MathText>; reciprocal of x is <MathText>{'\\frac{1}{x}'}</MathText></li>
            <li>Remember: Keep, Change, Flip (KCF) for division</li>
            <li>Always factor expressions to find hidden common factors</li>
            <li>Can cancel factors diagonally across multiplication</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
