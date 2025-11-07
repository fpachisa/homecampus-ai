import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function EquationsFormulae() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 dark:from-violet-600 dark:to-purple-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Solving Equations and Manipulating Formulae</h1>
        <p className="mt-2 text-violet-100">Master equation solving and formula rearrangement</p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-b-lg">

        {/* Section 1: Solving Equations with Fractions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Solving Equations with Algebraic Fractions
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When solving equations involving algebraic fractions, we have two main methods. Both work, but one is often more efficient!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  Method 1: Convert to Equivalent Fractions
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Find LCD of all fractions</li>
                  <li>Convert each fraction</li>
                  <li>Combine fractions</li>
                  <li>Solve the resulting equation</li>
                </ol>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                  Method 2: Multiply by LCD ⚡ (Faster!)
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Find LCD of all fractions</li>
                  <li>Multiply EVERY term by LCD</li>
                  <li>Fractions disappear!</li>
                  <li>Solve simple equation</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Solving Using Both Methods
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Solve: <MathText>{'\\frac{a-2}{5} + \\frac{a-1}{3} = 1'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Method 1: Convert to Equivalent Fractions</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> LCD = 15
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Convert fractions
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                <MathText>{'\\frac{3(a-2)}{15} + \\frac{5(a-1)}{15} = 1'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Combine
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                <MathText>{'\\frac{3a-6+5a-5}{15} = 1'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                <MathText>{'\\frac{8a-11}{15} = 1'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 4:</strong> Solve
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                8a − 11 = 15
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                8a = 26
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 ml-4">
                a = <MathText>{'\\frac{26}{8} = \\frac{13}{4}'}</MathText> = 3¼
              </p>

              <div className="border-t border-blue-300 dark:border-blue-600 pt-3 mt-3">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Method 2: Multiply by LCD (Faster!)</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 1:</strong> LCD = 15, multiply all terms by 15
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  15 × <MathText>{'\\frac{a-2}{5}'}</MathText> + 15 × <MathText>{'\\frac{a-1}{3}'}</MathText> = 15 × 1
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  3(a−2) + 5(a−1) = 15
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 2:</strong> Expand and simplify
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  3a − 6 + 5a − 5 = 15
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  8a − 11 = 15
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  8a = 26
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  a = <MathText>{'\\frac{13}{4}'}</MathText> = 3¼
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Equation with Zero on One Side
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Solve: <MathText>{'\\frac{6}{(2b−5)} - \\frac{4}{(b−3)} = 0'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution: Using Method 2</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> LCD = (2b − 5)(b − 3)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Multiply all terms by LCD
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                6(b − 3) − 4(2b − 5) = 0
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Expand
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                6b − 18 − 8b + 20 = 0
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 4:</strong> Simplify and solve
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                −2b + 2 = 0
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                −2b = −2
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                b = 1
              </p>
            </div>
          </div>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Solve <MathText>{'\\frac{a}{(a+2)} = \\frac{3}{5}'}</MathText>
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
                  LCD = 5(a + 2)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Multiply both sides: 5a = 3(a + 2)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Expand: 5a = 3a + 6
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Simplify: 2a = 6
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  Answer: a = 3
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Changing Subject of Formula */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Changing the Subject of a Formula
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A formula shows the relationship between variables. The <strong>subject</strong> of a formula is the variable that appears alone on one side with a coefficient of 1.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                What Does "Change the Subject" Mean?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                To make a variable the subject means to rearrange the formula so that variable is alone on one side.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Example: In <MathText>{'A = l × b'}</MathText>, A is the subject
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  To make b the subject: <MathText>{'\\frac{b = A}{l}'}</MathText>
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                📋 Steps to Change the Subject:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Identify which variable you want to make the subject</li>
                <li>Use inverse operations to isolate that variable</li>
                <li>If variable is in denominator, multiply to clear fractions</li>
                <li>If variable appears multiple times, collect terms</li>
                <li>Make sure the variable has coefficient of 1</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Making v the Subject
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The focal length formula for lenses: <MathText>{'\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Make v the subject of the formula.
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Isolate 1/v on one side
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                <MathText>{'\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u}'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Combine fractions on right side (LCD = fu)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                <MathText>{'\\frac{1}{v} = \\frac{u}{fu} - \\frac{f}{fu} = \\frac{u-f}{fu}'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Take reciprocal of both sides
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                <MathText>{'v = \\frac{fu}{u-f}'}</MathText>
              </p>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Variable in Denominator
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Make h the subject: <MathText>{'V = \\frac{1}{3}πr²h'}</MathText>
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Multiply both sides by 3
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-4">
                <MathText>{'3V = πr²h'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Divide both sides by πr²
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                <MathText>{'h = \\frac{3V}{πr²}'}</MathText>
              </p>
            </div>
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Make r the subject of <MathText>{'v² = u² + 2as'}</MathText>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Wait - there's no r! This is checking if you're paying attention. Let's make u the subject instead.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Rearrange to isolate u²:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  u² = v² − 2as
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Take square root of both sides:
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  <MathText>{'u = √(v²−2as)'}</MathText>
                </p>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Make x the subject of <MathText>{'y = (x−p)² + q'}</MathText>
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
                  <strong>Step 1:</strong> Subtract q from both sides
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  y − q = (x − p)²
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 2:</strong> Take square root
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  <MathText>{'√(y−q) = x − p'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 3:</strong> Add p to both sides
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  <MathText>{'x = p + √(y−q)'}</MathText>
                </p>
              </div>
            )}
          </div>

          {/* Practice 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Make l the subject of <MathText>{'t = 2π√\\frac{l}{g}'}</MathText>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              (Pendulum formula - but let's make l the subject)
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 1:</strong> Divide by 2π
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  <MathText>{'\\frac{t}{2\\pi} = √\\frac{l}{g}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 2:</strong> Square both sides
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  <MathText>{'\\frac{t^2}{4\\pi^2} = \\frac{l}{g}'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 3:</strong> Multiply by g
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  <MathText>{'l = \\frac{gt^2}{4\\pi^2}'}</MathText>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Inverse Operations Table */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            🔄 Inverse Operations Reference
          </h2>

          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-violet-500 dark:bg-violet-700 text-white">
                <tr>
                  <th className="p-3 text-left">Operation</th>
                  <th className="p-3 text-left">Inverse Operation</th>
                  <th className="p-3 text-left">Example</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-3">Add a</td>
                  <td className="p-3">Subtract a</td>
                  <td className="p-3">x + 5 → x (subtract 5)</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-3">Subtract a</td>
                  <td className="p-3">Add a</td>
                  <td className="p-3">x − 3 → x (add 3)</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-3">Multiply by a</td>
                  <td className="p-3">Divide by a</td>
                  <td className="p-3">2x → x (divide by 2)</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-3">Divide by a</td>
                  <td className="p-3">Multiply by a</td>
                  <td className="p-3">x/4 → x (multiply by 4)</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-3">Square</td>
                  <td className="p-3">Square root</td>
                  <td className="p-3">x² → x (take √)</td>
                </tr>
                <tr>
                  <td className="p-3">Square root</td>
                  <td className="p-3">Square</td>
                  <td className="p-3">√x → x (square both sides)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-violet-50 dark:bg-violet-900/30 border-l-4 border-violet-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-violet-700 dark:text-violet-300 mb-3">
            🔑 Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>To solve equations with fractions: multiply all terms by LCD (fastest method)</li>
            <li>This eliminates fractions and gives a simple equation to solve</li>
            <li>To change subject: use inverse operations to isolate the variable</li>
            <li>If variable is in denominator, multiply to clear fractions first</li>
            <li>If variable is squared, take square root (and vice versa)</li>
            <li>Subject must have coefficient of 1 and appear on one side only</li>
            <li>Always check your answer makes sense (denominators ≠ 0)</li>
            <li>Work systematically - one operation at a time</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
