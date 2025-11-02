import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function AnglesAtPoint() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Angles at a Point</h1>
        <p className="mt-2 text-blue-100">Discover that angles meeting at a point always sum to 360°</p>
      </div>

      <div className="p-6">
        {/* Section 1: Angles Around a Point */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Angles Around a Point Sum to 360°
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When several angles meet at a single point, they form a complete rotation around that point.
              The sum of all angles around a point is always <strong>360°</strong>.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Rule:</strong>
              </p>
              <p className="text-xl text-center font-semibold text-blue-800 dark:text-blue-300 my-3">
                <MathText>{'$a + b + c + d + ... = 360^{\\circ}$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-center text-sm">
                (where a, b, c, d, ... are angles meeting at a point)
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Why 360°?</strong> A full rotation around a point completes one full circle, which is 360 degrees.
            </p>

            {/* Visual Example */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visual Example:</h4>
              <MathToolRenderer
                toolName="anglesAtPoint"
                parameters={{
                  angles: [90, 120, 80, 70],
                  labels: ['a', 'b', 'c', 'd'],
                  showSum: true
                }}
                caption="Four angles meeting at point O sum to 360°"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                Notice how the angles form a complete rotation around the point
              </p>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Finding One Unknown Angle
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Four angles meet at point O: <MathText>{'$90^{\\circ}$'}</MathText>, <MathText>{'$120^{\\circ}$'}</MathText>, <MathText>{'$80^{\\circ}$'}</MathText>, and <MathText>x</MathText>. Find the value of <MathText>x</MathText>.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Write the equation using the angles at a point rule</p>
                <p className="ml-4"><MathText>{'$90^{\\circ} + 120^{\\circ} + 80^{\\circ} + x = 360^{\\circ}$'}</MathText></p>
                <p><strong>Step 2:</strong> Add the known angles</p>
                <p className="ml-4"><MathText>{'$290^{\\circ} + x = 360^{\\circ}$'}</MathText></p>
                <p><strong>Step 3:</strong> Solve for <MathText>x</MathText></p>
                <p className="ml-4"><MathText>{'$x = 360^{\\circ} - 290^{\\circ}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$x = 70^{\\circ}$'}</MathText></p>
                <p><strong>Step 4:</strong> Check your answer</p>
                <p className="ml-4"><MathText>{'$90^{\\circ} + 120^{\\circ} + 80^{\\circ} + 70^{\\circ} = 360^{\\circ}$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$x = 70^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Algebraic Expressions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Angles with Algebraic Expressions
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sometimes angles are given as algebraic expressions. We still use the same rule: angles at a point sum to 360°.
            </p>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Using Algebraic Expressions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Three angles at a point are <MathText>{'$2x$'}</MathText>, <MathText>{'$3x$'}</MathText>, and <MathText>{'$4x$'}</MathText>. Find the value of <MathText>x</MathText> and each angle.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Write the equation</p>
                <p className="ml-4"><MathText>{'$2x + 3x + 4x = 360^{\\circ}$'}</MathText></p>
                <p><strong>Step 2:</strong> Combine like terms</p>
                <p className="ml-4"><MathText>{'$9x = 360^{\\circ}$'}</MathText></p>
                <p><strong>Step 3:</strong> Solve for <MathText>x</MathText></p>
                <p className="ml-4"><MathText>{'$x = 360^{\\circ} \\div 9 = 40^{\\circ}$'}</MathText></p>
                <p><strong>Step 4:</strong> Find each angle</p>
                <p className="ml-4">First angle: <MathText>{'$2x = 2(40^{\\circ}) = 80^{\\circ}$'}</MathText></p>
                <p className="ml-4">Second angle: <MathText>{'$3x = 3(40^{\\circ}) = 120^{\\circ}$'}</MathText></p>
                <p className="ml-4">Third angle: <MathText>{'$4x = 4(40^{\\circ}) = 160^{\\circ}$'}</MathText></p>
                <p><strong>Step 5:</strong> Check</p>
                <p className="ml-4"><MathText>{'$80^{\\circ} + 120^{\\circ} + 160^{\\circ} = 360^{\\circ}$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$x = 40^{\\circ}$'}</MathText>; angles are <MathText>{'$80^{\\circ}$'}</MathText>, <MathText>{'$120^{\\circ}$'}</MathText>, <MathText>{'$160^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Mixed Expressions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Four angles at point P are <MathText>{'$x$'}</MathText>, <MathText>{'$2x$'}</MathText>, <MathText>{'$3x$'}</MathText>, and <MathText>{'$90^{\\circ}$'}</MathText>. Find <MathText>x</MathText>.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Write the equation</p>
                <p className="ml-4"><MathText>{'$x + 2x + 3x + 90^{\\circ} = 360^{\\circ}$'}</MathText></p>
                <p><strong>Step 2:</strong> Combine like terms</p>
                <p className="ml-4"><MathText>{'$6x + 90^{\\circ} = 360^{\\circ}$'}</MathText></p>
                <p><strong>Step 3:</strong> Isolate the <MathText>x</MathText> term</p>
                <p className="ml-4"><MathText>{'$6x = 360^{\\circ} - 90^{\\circ}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$6x = 270^{\\circ}$'}</MathText></p>
                <p><strong>Step 4:</strong> Solve for <MathText>x</MathText></p>
                <p className="ml-4"><MathText>{'$x = 270^{\\circ} \\div 6 = 45^{\\circ}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$x = 45^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Find the Missing Angle
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Five angles meet at point O: <MathText>{'$60^{\\circ}$'}</MathText>, <MathText>{'$75^{\\circ}$'}</MathText>, <MathText>{'$85^{\\circ}$'}</MathText>, <MathText>{'$90^{\\circ}$'}</MathText>, and <MathText>a</MathText>. Find <MathText>a</MathText>.
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
                  <p><strong>Equation:</strong> <MathText>{'$60^{\\circ} + 75^{\\circ} + 85^{\\circ} + 90^{\\circ} + a = 360^{\\circ}$'}</MathText></p>
                  <p><strong>Simplify:</strong> <MathText>{'$310^{\\circ} + a = 360^{\\circ}$'}</MathText></p>
                  <p><strong>Solve:</strong> <MathText>{'$a = 360^{\\circ} - 310^{\\circ} = 50^{\\circ}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$a = 50^{\\circ}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Algebraic Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Three angles at a point are <MathText>x</MathText>, <MathText>{'$2x$'}</MathText>, and <MathText>{'$x + 60^{\\circ}$'}</MathText>. Find <MathText>x</MathText> and the size of each angle.
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
                  <p><strong>Equation:</strong> <MathText>{'$x + 2x + (x + 60^{\\circ}) = 360^{\\circ}$'}</MathText></p>
                  <p><strong>Simplify:</strong> <MathText>{'$4x + 60^{\\circ} = 360^{\\circ}$'}</MathText></p>
                  <p><strong>Solve:</strong> <MathText>{'$4x = 300^{\\circ}$'}</MathText>, so <MathText>{'$x = 75^{\\circ}$'}</MathText></p>
                  <p><strong>Angles:</strong></p>
                  <p className="ml-4">First: <MathText>{'$x = 75^{\\circ}$'}</MathText></p>
                  <p className="ml-4">Second: <MathText>{'$2x = 150^{\\circ}$'}</MathText></p>
                  <p className="ml-4">Third: <MathText>{'$x + 60^{\\circ} = 135^{\\circ}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$x = 75^{\\circ}$'}</MathText>; angles are <MathText>{'$75^{\\circ}$'}</MathText>, <MathText>{'$150^{\\circ}$'}</MathText>, <MathText>{'$135^{\\circ}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Equal Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Four equal angles meet at a point. What is the size of each angle?
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
                  <p><strong>Let each angle = </strong> <MathText>x</MathText></p>
                  <p><strong>Equation:</strong> <MathText>{'$x + x + x + x = 360^{\\circ}$'}</MathText></p>
                  <p><strong>Simplify:</strong> <MathText>{'$4x = 360^{\\circ}$'}</MathText></p>
                  <p><strong>Solve:</strong> <MathText>{'$x = 90^{\\circ}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> Each angle is <MathText>{'$90^{\\circ}$'}</MathText> (right angles)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Challenge Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Three angles at point Q are in the ratio <MathText>{'$2:3:4$'}</MathText>. Find the size of each angle.
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
                  <p><strong>Let the angles be:</strong> <MathText>{'$2x$'}</MathText>, <MathText>{'$3x$'}</MathText>, and <MathText>{'$4x$'}</MathText></p>
                  <p><strong>Equation:</strong> <MathText>{'$2x + 3x + 4x = 360^{\\circ}$'}</MathText></p>
                  <p><strong>Simplify:</strong> <MathText>{'$9x = 360^{\\circ}$'}</MathText></p>
                  <p><strong>Solve:</strong> <MathText>{'$x = 40^{\\circ}$'}</MathText></p>
                  <p><strong>Angles:</strong></p>
                  <p className="ml-4">First: <MathText>{'$2x = 80^{\\circ}$'}</MathText></p>
                  <p className="ml-4">Second: <MathText>{'$3x = 120^{\\circ}$'}</MathText></p>
                  <p className="ml-4">Third: <MathText>{'$4x = 160^{\\circ}$'}</MathText></p>
                  <p><strong>Check ratio:</strong> <MathText>{'$80:120:160 = 2:3:4$'}</MathText> ✓</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$80^{\\circ}$'}</MathText>, <MathText>{'$120^{\\circ}$'}</MathText>, <MathText>{'$160^{\\circ}$'}</MathText>
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
            <li>Angles meeting at a point always sum to <MathText>{'$360^{\\circ}$'}</MathText> (a complete rotation)</li>
            <li>To find an unknown angle, add the known angles and subtract from <MathText>{'$360^{\\circ}$'}</MathText></li>
            <li>When angles are given as expressions, form an equation and solve for the variable</li>
            <li>Always check your answer by verifying the sum equals <MathText>{'$360^{\\circ}$'}</MathText></li>
            <li>Ratios can be converted to expressions by using a common variable (e.g., <MathText>{'$2:3:4$'}</MathText> becomes <MathText>{'$2x$'}</MathText>, <MathText>{'$3x$'}</MathText>, <MathText>{'$4x$'}</MathText>)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
