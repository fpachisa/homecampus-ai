import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function AdditionSubtraction() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Adding and Subtracting Algebraic Fractions</h1>
        <p className="mt-2 text-cyan-100">Finding common denominators and combining fractions</p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-b-lg">

        {/* Section 1: Review - Why Common Denominators? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Why Do We Need Common Denominators?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You can only add or subtract fractions when they have the same denominator. This is because fractions represent parts of a whole, and we can only combine parts that are divided the same way.
            </p>

            <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-cyan-800 dark:text-cyan-300 mb-2">
                📝 Addition/Subtraction Rules:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                When denominators are the SAME:
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-3 ml-4">
                <MathText>{'\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}'}</MathText>
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 ml-4">
                <MathText>{'\\frac{a}{c} - \\frac{b}{c} = \\frac{a-b}{c}'}</MathText>
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                ⚠️ Common Mistake:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Wrong:</strong> <MathText>{'\\frac{2}{3} + \\frac{5}{8} = \\frac{2+5}{3+8}'}</MathText> ❌
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                You cannot add numerators and denominators separately! You must find a common denominator first.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Finding LCD */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Finding the Least Common Denominator (LCD)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Least Common Denominator (LCD) is the smallest expression that both denominators divide into evenly. For algebraic fractions, we often need to factor first to find the LCD.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                📋 Steps to Find LCD:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Factor each denominator completely</li>
                <li>List all different factors that appear</li>
                <li>For each factor, use the highest power that appears</li>
                <li>Multiply all these factors together</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Finding LCD with Numerical Denominators
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Find the LCD of <MathText>{'\\frac{2}{(3a)}'}</MathText> and <MathText>{'\\frac{3}{(5a)}'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> List the factors
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                • First denominator: 3a = 3 × a
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                • Second denominator: 5a = 5 × a
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Identify all different factors
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                Factors: 3, 5, a
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Multiply them together
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                LCD = 3 × 5 × a = 15a
              </p>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: LCD with Algebraic Expressions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Find the LCD of <MathText>{'\\frac{3}{(2b−4c)}'}</MathText> and <MathText>{'\\frac{2}{(3b−6c)}'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Factor each denominator
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                • 2b − 4c = 2(b − 2c)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                • 3b − 6c = 3(b − 2c)
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> List all factors with highest powers
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                Factors: 2, 3, (b − 2c)
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Multiply
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                LCD = 2 × 3 × (b − 2c) = 6(b − 2c)
              </p>
            </div>
          </div>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Find the LCD of <MathText>{'\\frac{6}{(5a)}'}</MathText> and <MathText>{'\\frac{3}{(8a)}'}</MathText>
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
                  Denominators: 5a and 8a
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Factors: 5, 8, a
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Since 5 and 8 have no common factors, multiply all:
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  LCD = 40a
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Adding and Subtracting */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Adding and Subtracting Algebraic Fractions
          </h2>

          <div className="mb-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                📐 Complete Process:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Find the LCD of all denominators</li>
                <li>Convert each fraction to an equivalent fraction with LCD</li>
                <li>Add or subtract the numerators</li>
                <li>Keep the common denominator</li>
                <li>Simplify the result if possible</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Adding Fractions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Simplify: <MathText>{'\\frac{2}{3a} + \\frac{3}{5a}'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Find LCD (from Example 1)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                LCD = 15a
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Convert to equivalent fractions
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                • <MathText>{'\\frac{2}{3a} = \\frac{2 \\times 5}{3a \\times 5} = \\frac{10}{15a}'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                • <MathText>{'\\frac{3}{5a} = \\frac{3 \\times 3}{5a \\times 3} = \\frac{9}{15a}'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Add numerators
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                <MathText>{'\\frac{10}{15a} + \\frac{9}{15a} = \\frac{10+9}{15a}'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                Answer: <MathText>{'\\frac{19}{15a}'}</MathText>
              </p>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Subtracting with Factorization
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Simplify: <MathText>{'\\frac{3}{2b-4c} + \\frac{2}{3b-6c}'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Factor and find LCD
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                2b − 4c = 2(b − 2c)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                3b − 6c = 3(b − 2c)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                LCD = 6(b − 2c)
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Convert to equivalent fractions
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                • <MathText>{'\\frac{3}{2(b-2c)} = \\frac{3 \\times 3}{6(b-2c)} = \\frac{9}{6(b-2c)}'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                • <MathText>{'\\frac{2}{3(b-2c)} = \\frac{2 \\times 2}{6(b-2c)} = \\frac{4}{6(b-2c)}'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Add numerators
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                <MathText>{'\\frac{9+4}{6(b-2c)} = \\frac{13}{6(b-2c)}'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                Answer: <MathText>{'\\frac{13}{6(b-2c)}'}</MathText>
              </p>
            </div>
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Add <MathText>{'\\frac{4}{2b+3c} + \\frac{7}{6b+9c}'}</MathText>
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
                  Factor: 6b + 9c = 3(2b + 3c)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  LCD = 3(2b + 3c) = 6b + 9c
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Convert first fraction: <MathText>{'\\frac{4}{2b+3c} = \\frac{12}{6b+9c}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Second fraction already has LCD
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Add: <MathText>{'\\frac{12+7}{6b+9c} = \\frac{19}{6b+9c}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  Answer: <MathText>{'\\frac{19}{6b+9c}'}</MathText> or <MathText>{'\\frac{19}{3(2b+3c)}'}</MathText>
                </p>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Subtract <MathText>{'\\frac{2h}{(h−2k)} - \\frac{3k}{(2k−h)}'}</MathText>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Hint: Watch out for the sign! (2k − h) = −(h − 2k)
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
                  Rewrite: (2k − h) = −(h − 2k)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  So: <MathText>{'\\frac{3k}{(2k−h)} = \\frac{-3k}{(h−2k)}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Rewrite problem: <MathText>{'\\frac{2h}{(h−2k)} - \\frac{-3k}{(h−2k)}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  = <MathText>{'\\frac{2h}{(h−2k)} + \\frac{3k}{(h−2k)}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Combine: <MathText>{'\\frac{(2h+3k)}{(h−2k)}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  Answer: <MathText>{'\\frac{(2h+3k)}{(h−2k)}'}</MathText>
                </p>
              </div>
            )}
          </div>

          {/* Practice 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Simplify <MathText>{'\\frac{5x}{(4x−3y)} - \\frac{7y}{(6y−8x)}'}</MathText>
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
                  Factor: 6y − 8x = −2(4x − 3y)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  So: <MathText>{'\\frac{7y}{(6y−8x)} = \\frac{7y}{-2(4x−3y)} = \\frac{-7y}{2(4x−3y)}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  LCD = 2(4x − 3y)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Convert: <MathText>{'\\frac{5x}{(4x−3y)} = \\frac{10x}{2(4x−3y)}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Combine: <MathText>{'\\frac{10x−(−7y)}{2(4x−3y)} = \\frac{(10x+7y)}{2(4x−3y)}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  Answer: <MathText>{'\\frac{(10x+7y)}{2(4x−3y)}'}</MathText>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Sign Rules */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            ⚠️ Watch Out for Signs!
          </h2>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
            <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3">
              Important Sign Rules:
            </h3>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Rule 1:</strong> (a − b) = −(b − a)
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: (x − 3) = −(3 − x)
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Rule 2:</strong> When subtracting, distribute the negative
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: (5x) − (2x + 3) = 5x − 2x − 3 = 3x − 3
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Rule 3:</strong> −(a + b) = −a − b
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: −(x + 5) = −x − 5
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-cyan-50 dark:bg-cyan-900/30 border-l-4 border-cyan-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-300 mb-3">
            🔑 Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Can only add/subtract fractions with the SAME denominator</li>
            <li>Find LCD by factoring denominators and taking highest powers of each factor</li>
            <li>Convert each fraction to equivalent fraction with LCD</li>
            <li>Add or subtract numerators, keep the common denominator</li>
            <li>Watch for sign differences: (a − b) = −(b − a)</li>
            <li>Always simplify final answer if possible</li>
            <li>Check for factorization opportunities in denominators before finding LCD</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
