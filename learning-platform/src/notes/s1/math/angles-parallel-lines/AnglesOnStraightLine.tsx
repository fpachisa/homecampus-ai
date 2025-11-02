import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function AnglesOnStraightLine() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Angles on a Straight Line</h1>
        <p className="mt-2 text-green-100">Learn that adjacent angles on a straight line sum to 180° (supplementary angles)</p>
      </div>

      <div className="p-6">
        {/* Section 1: Angles on a Line */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Angles on a Straight Line Sum to 180°
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When two or more angles are placed <strong>adjacent to each other</strong> on a straight line,
              the sum of these angles is always <strong>180°</strong>.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Rule:</strong>
              </p>
              <p className="text-xl text-center font-semibold text-green-800 dark:text-green-300 my-3">
                <MathText>{'$a + b + c + ... = 180^{\\circ}$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-center text-sm">
                (where a, b, c, ... are adjacent angles on a straight line)
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Important Terms:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>Adjacent angles:</strong> Angles that are next to each other, sharing a common vertex and one common side</li>
                <li><strong>Supplementary angles:</strong> Two angles that add up to <MathText>{'$180^{\\circ}$'}</MathText></li>
                <li><strong>Straight angle:</strong> An angle of exactly <MathText>{'$180^{\\circ}$'}</MathText>, forming a straight line</li>
              </ul>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Why 180°?</strong> A straight line represents a half rotation (half of 360°), which equals 180 degrees.
            </p>

            {/* Visual Example */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visual Example:</h4>
              <MathToolRenderer
                toolName="anglesOnLine"
                parameters={{
                  angles: [110, 70],
                  labels: ['a', 'b'],
                  showSum: true
                }}
                caption="Two supplementary angles on a straight line sum to 180°"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                These two angles are supplementary - they add up to 180°
              </p>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Two Angles on a Line (Supplementary Angles)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Two angles on a straight line are <MathText>{'$110^{\\circ}$'}</MathText> and <MathText>x</MathText>. Find the value of <MathText>x</MathText>.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Write the equation using angles on a line rule</p>
                <p className="ml-4"><MathText>{'$110^{\\circ} + x = 180^{\\circ}$'}</MathText></p>
                <p><strong>Step 2:</strong> Solve for <MathText>x</MathText></p>
                <p className="ml-4"><MathText>{'$x = 180^{\\circ} - 110^{\\circ}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$x = 70^{\\circ}$'}</MathText></p>
                <p><strong>Step 3:</strong> Check</p>
                <p className="ml-4"><MathText>{'$110^{\\circ} + 70^{\\circ} = 180^{\\circ}$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$x = 70^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Three Angles on a Line
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Three angles on a straight line are <MathText>{'$60^{\\circ}$'}</MathText>, <MathText>{'$50^{\\circ}$'}</MathText>, and <MathText>y</MathText>. Find <MathText>y</MathText>.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Write the equation</p>
                <p className="ml-4"><MathText>{'$60^{\\circ} + 50^{\\circ} + y = 180^{\\circ}$'}</MathText></p>
                <p><strong>Step 2:</strong> Add the known angles</p>
                <p className="ml-4"><MathText>{'$110^{\\circ} + y = 180^{\\circ}$'}</MathText></p>
                <p><strong>Step 3:</strong> Solve for <MathText>y</MathText></p>
                <p className="ml-4"><MathText>{'$y = 180^{\\circ} - 110^{\\circ} = 70^{\\circ}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$y = 70^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Algebraic Expressions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Using Algebraic Expressions
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Just like with angles at a point, we can use algebra to solve problems involving angles on a straight line.
            </p>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Two Algebraic Expressions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Two angles on a straight line are <MathText>{'$2x$'}</MathText> and <MathText>{'$3x$'}</MathText>. Find the value of <MathText>x</MathText> and each angle.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Write the equation</p>
                <p className="ml-4"><MathText>{'$2x + 3x = 180^{\\circ}$'}</MathText></p>
                <p><strong>Step 2:</strong> Combine like terms</p>
                <p className="ml-4"><MathText>{'$5x = 180^{\\circ}$'}</MathText></p>
                <p><strong>Step 3:</strong> Solve for <MathText>x</MathText></p>
                <p className="ml-4"><MathText>{'$x = 180^{\\circ} \\div 5 = 36^{\\circ}$'}</MathText></p>
                <p><strong>Step 4:</strong> Find each angle</p>
                <p className="ml-4">First angle: <MathText>{'$2x = 2(36^{\\circ}) = 72^{\\circ}$'}</MathText></p>
                <p className="ml-4">Second angle: <MathText>{'$3x = 3(36^{\\circ}) = 108^{\\circ}$'}</MathText></p>
                <p><strong>Step 5:</strong> Check</p>
                <p className="ml-4"><MathText>{'$72^{\\circ} + 108^{\\circ} = 180^{\\circ}$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$x = 36^{\\circ}$'}</MathText>; angles are <MathText>{'$72^{\\circ}$'}</MathText> and <MathText>{'$108^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Mixed Numerical and Algebraic
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Three angles on line AB are <MathText>{'$x$'}</MathText>, <MathText>{'$2x$'}</MathText>, and <MathText>{'$30^{\\circ}$'}</MathText>. Find <MathText>x</MathText> and all angles.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Form equation</p>
                <p className="ml-4"><MathText>{'$x + 2x + 30^{\\circ} = 180^{\\circ}$'}</MathText></p>
                <p><strong>Step 2:</strong> Combine like terms</p>
                <p className="ml-4"><MathText>{'$3x + 30^{\\circ} = 180^{\\circ}$'}</MathText></p>
                <p><strong>Step 3:</strong> Isolate <MathText>x</MathText> term</p>
                <p className="ml-4"><MathText>{'$3x = 180^{\\circ} - 30^{\\circ} = 150^{\\circ}$'}</MathText></p>
                <p><strong>Step 4:</strong> Solve</p>
                <p className="ml-4"><MathText>{'$x = 150^{\\circ} \\div 3 = 50^{\\circ}$'}</MathText></p>
                <p><strong>Step 5:</strong> Find all angles</p>
                <p className="ml-4">First: <MathText>{'$x = 50^{\\circ}$'}</MathText></p>
                <p className="ml-4">Second: <MathText>{'$2x = 100^{\\circ}$'}</MathText></p>
                <p className="ml-4">Third: <MathText>{'$30^{\\circ}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$x = 50^{\\circ}$'}</MathText>; angles are <MathText>{'$50^{\\circ}$'}</MathText>, <MathText>{'$100^{\\circ}$'}</MathText>, <MathText>{'$30^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Find the Supplement
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Two angles on a line are <MathText>{'$125^{\\circ}$'}</MathText> and <MathText>p</MathText>. Find <MathText>p</MathText>.
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
                  <p><strong>Equation:</strong> <MathText>{'$125^{\\circ} + p = 180^{\\circ}$'}</MathText></p>
                  <p><strong>Solve:</strong> <MathText>{'$p = 180^{\\circ} - 125^{\\circ} = 55^{\\circ}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$p = 55^{\\circ}$'}</MathText>
                  </p>
                  <p className="mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-sm">
                    <strong>Note:</strong> <MathText>{'$125^{\\circ}$'}</MathText> and <MathText>{'$55^{\\circ}$'}</MathText> are <strong>supplementary angles</strong> (they sum to <MathText>{'$180^{\\circ}$'}</MathText>)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Four Angles on a Line
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Four angles on a straight line measure <MathText>{'$35^{\\circ}$'}</MathText>, <MathText>{'$40^{\\circ}$'}</MathText>, <MathText>{'$55^{\\circ}$'}</MathText>, and <MathText>q</MathText>. Find <MathText>q</MathText>.
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
                  <p><strong>Equation:</strong> <MathText>{'$35^{\\circ} + 40^{\\circ} + 55^{\\circ} + q = 180^{\\circ}$'}</MathText></p>
                  <p><strong>Simplify:</strong> <MathText>{'$130^{\\circ} + q = 180^{\\circ}$'}</MathText></p>
                  <p><strong>Solve:</strong> <MathText>{'$q = 50^{\\circ}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$q = 50^{\\circ}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Algebraic Challenge
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Two angles on a line are <MathText>{'$(3x + 20)^{\\circ}$'}</MathText> and <MathText>{'$(2x + 10)^{\\circ}$'}</MathText>. Find <MathText>x</MathText> and both angles.
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
                  <p><strong>Equation:</strong> <MathText>{'$(3x + 20) + (2x + 10) = 180$'}</MathText></p>
                  <p><strong>Expand:</strong> <MathText>{'$3x + 20 + 2x + 10 = 180$'}</MathText></p>
                  <p><strong>Combine:</strong> <MathText>{'$5x + 30 = 180$'}</MathText></p>
                  <p><strong>Solve:</strong> <MathText>{'$5x = 150$'}</MathText>, so <MathText>{'$x = 30$'}</MathText></p>
                  <p><strong>First angle:</strong> <MathText>{'$3x + 20 = 3(30) + 20 = 110^{\\circ}$'}</MathText></p>
                  <p><strong>Second angle:</strong> <MathText>{'$2x + 10 = 2(30) + 10 = 70^{\\circ}$'}</MathText></p>
                  <p><strong>Check:</strong> <MathText>{'$110^{\\circ} + 70^{\\circ} = 180^{\\circ}$'}</MathText> ✓</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$x = 30$'}</MathText>; angles are <MathText>{'$110^{\\circ}$'}</MathText> and <MathText>{'$70^{\\circ}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Word Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              One angle is three times larger than another angle. If these two angles are supplementary (on a straight line), find both angles.
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
                  <p><strong>Let:</strong> smaller angle = <MathText>x</MathText></p>
                  <p className="ml-4">larger angle = <MathText>{'$3x$'}</MathText> (three times larger)</p>
                  <p><strong>Equation:</strong> <MathText>{'$x + 3x = 180^{\\circ}$'}</MathText></p>
                  <p><strong>Simplify:</strong> <MathText>{'$4x = 180^{\\circ}$'}</MathText></p>
                  <p><strong>Solve:</strong> <MathText>{'$x = 45^{\\circ}$'}</MathText></p>
                  <p><strong>Angles:</strong></p>
                  <p className="ml-4">Smaller angle: <MathText>{'$45^{\\circ}$'}</MathText></p>
                  <p className="ml-4">Larger angle: <MathText>{'$3(45^{\\circ}) = 135^{\\circ}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> The angles are <MathText>{'$45^{\\circ}$'}</MathText> and <MathText>{'$135^{\\circ}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Adjacent angles on a straight line always sum to <MathText>{'$180^{\\circ}$'}</MathText></li>
            <li><strong>Supplementary angles</strong> are two angles that add up to <MathText>{'$180^{\\circ}$'}</MathText></li>
            <li>To find an unknown angle, add known angles and subtract from <MathText>{'$180^{\\circ}$'}</MathText></li>
            <li>Use the same algebraic techniques as with angles at a point, but sum to <MathText>{'$180^{\\circ}$'}</MathText> instead of <MathText>{'$360^{\\circ}$'}</MathText></li>
            <li>Always check your answer by verifying the sum equals <MathText>{'$180^{\\circ}$'}</MathText></li>
            <li>Common error: Don't confuse angles on a line (<MathText>{'$180^{\\circ}$'}</MathText>) with angles at a point (<MathText>{'$360^{\\circ}$'}</MathText>)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
