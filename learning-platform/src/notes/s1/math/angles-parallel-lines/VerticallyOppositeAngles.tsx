import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function VerticallyOppositeAngles() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Vertically Opposite Angles</h1>
        <p className="mt-2 text-orange-100">Discover that vertically opposite angles are always equal when two lines intersect</p>
      </div>

      <div className="p-6">
        {/* Section 1: What are Vertically Opposite Angles? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Vertically Opposite Angles Are Equal
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When two straight lines cross (intersect) at a point, they form <strong>four angles</strong>.
              The angles that are <strong>directly opposite</strong> each other are called <strong>vertically opposite angles</strong>,
              and they are <strong>always equal</strong>.
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Rule:</strong>
              </p>
              <p className="text-xl text-center font-semibold text-orange-800 dark:text-orange-300 my-3">
                Vertically opposite angles are EQUAL
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-center text-sm mb-2">
                If two lines AB and CD intersect at point O, then:
              </p>
              <p className="text-center">
                <MathText>{'$\\angle AOC = \\angle BOD$'}</MathText> (one pair of opposite angles)
              </p>
              <p className="text-center">
                <MathText>{'$\\angle AOD = \\angle BOC$'}</MathText> (the other pair)
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>How to Identify Vertically Opposite Angles:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>They are formed when two lines intersect (cross)</li>
                <li>They are on <strong>opposite sides</strong> of the intersection point</li>
                <li>They do <strong>not</strong> share any common arms</li>
                <li>There are always <strong>two pairs</strong> of vertically opposite angles</li>
              </ul>
            </div>

            {/* Visual Example */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visual Example:</h4>
              <MathToolRenderer
                toolName="verticallyOppositeAngles"
                parameters={{
                  angles: [65, 115, 65, 115],
                  labels: ['a', 'b', 'c', 'd'],
                  highlight: 0
                }}
                caption="Two intersecting lines form 4 angles. Opposite angles are equal."
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                Angles a and c are vertically opposite (both 65°), and angles b and d are vertically opposite (both 115°)
              </p>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Finding a Vertically Opposite Angle
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Two lines intersect at point O. One angle measures <MathText>{'$65^{\\circ}$'}</MathText>. Find the angle vertically opposite to it.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Apply the vertically opposite angles rule</p>
                <p className="ml-4">Vertically opposite angles are equal</p>
                <p><strong>Step 2:</strong> Find the opposite angle</p>
                <p className="ml-4">The angle opposite to <MathText>{'$65^{\\circ}$'}</MathText> is also <MathText>{'$65^{\\circ}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$65^{\\circ}$'}</MathText>
                </p>
                <p className="mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-sm">
                  <strong>Note:</strong> This is the <strong>simplest</strong> type of problem - just remember that opposite angles are equal!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Combining with Other Angle Rules */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Combining Vertically Opposite Angles with Other Rules
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We can combine the vertically opposite angles rule with <strong>angles on a line</strong> to solve more complex problems.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Insight:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                When two lines intersect, adjacent angles (next to each other) are <strong>supplementary</strong> (they add to <MathText>{'$180^{\\circ}$'}</MathText>),
                and opposite angles are <strong>equal</strong>.
              </p>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Using Adjacent Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Lines AB and CD intersect at O. If <MathText>{'$\\angle AOC = 130^{\\circ}$'}</MathText>, find all the other angles.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Find the vertically opposite angle</p>
                <p className="ml-4"><MathText>{'$\\angle BOD = \\angle AOC = 130^{\\circ}$'}</MathText> (vertically opposite)</p>
                <p><strong>Step 2:</strong> Find an adjacent angle using angles on a line</p>
                <p className="ml-4"><MathText>{'$\\angle AOC + \\angle AOD = 180^{\\circ}$'}</MathText> (angles on line CD)</p>
                <p className="ml-4"><MathText>{'$130^{\\circ} + \\angle AOD = 180^{\\circ}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$\\angle AOD = 50^{\\circ}$'}</MathText></p>
                <p><strong>Step 3:</strong> Find the last angle</p>
                <p className="ml-4"><MathText>{'$\\angle BOC = \\angle AOD = 50^{\\circ}$'}</MathText> (vertically opposite)</p>
                <p><strong>Step 4:</strong> Check (angles around a point sum to 360°)</p>
                <p className="ml-4"><MathText>{'$130^{\\circ} + 50^{\\circ} + 130^{\\circ} + 50^{\\circ} = 360^{\\circ}$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$\\angle BOD = 130^{\\circ}$'}</MathText>, <MathText>{'$\\angle AOD = 50^{\\circ}$'}</MathText>, <MathText>{'$\\angle BOC = 50^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Using Algebra
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Two lines intersect. One angle is <MathText>{'$(3x + 10)^{\\circ}$'}</MathText> and the vertically opposite angle is <MathText>{'$(5x - 30)^{\\circ}$'}</MathText>. Find <MathText>x</MathText>.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Apply vertically opposite angles rule</p>
                <p className="ml-4">Vertically opposite angles are equal, so:</p>
                <p className="ml-4"><MathText>{'$3x + 10 = 5x - 30$'}</MathText></p>
                <p><strong>Step 2:</strong> Rearrange to collect <MathText>x</MathText> terms</p>
                <p className="ml-4"><MathText>{'$10 + 30 = 5x - 3x$'}</MathText></p>
                <p className="ml-4"><MathText>{'$40 = 2x$'}</MathText></p>
                <p><strong>Step 3:</strong> Solve for <MathText>x</MathText></p>
                <p className="ml-4"><MathText>{'$x = 20$'}</MathText></p>
                <p><strong>Step 4:</strong> Find the actual angle size (optional check)</p>
                <p className="ml-4">First angle: <MathText>{'$3x + 10 = 3(20) + 10 = 70^{\\circ}$'}</MathText></p>
                <p className="ml-4">Opposite angle: <MathText>{'$5x - 30 = 5(20) - 30 = 70^{\\circ}$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$x = 20$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Complex Algebraic Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Two straight lines intersect at point P. One of the four angles formed is <MathText>{'$(2x + 15)^{\\circ}$'}</MathText>.
              The adjacent angle to it is <MathText>{'$(3x - 35)^{\\circ}$'}</MathText>. Find all four angles.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Use angles on a line (adjacent angles are supplementary)</p>
                <p className="ml-4"><MathText>{'$(2x + 15) + (3x - 35) = 180$'}</MathText></p>
                <p><strong>Step 2:</strong> Simplify</p>
                <p className="ml-4"><MathText>{'$5x - 20 = 180$'}</MathText></p>
                <p className="ml-4"><MathText>{'$5x = 200$'}</MathText></p>
                <p className="ml-4"><MathText>{'$x = 40$'}</MathText></p>
                <p><strong>Step 3:</strong> Find the two given angles</p>
                <p className="ml-4">First angle: <MathText>{'$2x + 15 = 2(40) + 15 = 95^{\\circ}$'}</MathText></p>
                <p className="ml-4">Second angle: <MathText>{'$3x - 35 = 3(40) - 35 = 85^{\\circ}$'}</MathText></p>
                <p><strong>Step 4:</strong> Use vertically opposite angles to find the other two</p>
                <p className="ml-4">Third angle = <MathText>{'$95^{\\circ}$'}</MathText> (opposite to first)</p>
                <p className="ml-4">Fourth angle = <MathText>{'$85^{\\circ}$'}</MathText> (opposite to second)</p>
                <p><strong>Check:</strong> <MathText>{'$95 + 85 + 95 + 85 = 360^{\\circ}$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The four angles are <MathText>{'$95^{\\circ}$'}</MathText>, <MathText>{'$85^{\\circ}$'}</MathText>, <MathText>{'$95^{\\circ}$'}</MathText>, <MathText>{'$85^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Simple Opposite Angle
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Two lines cross at point Q. If one of the angles is <MathText>{'$42^{\\circ}$'}</MathText>, what is the size of the angle vertically opposite to it?
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
                  <p><strong>Rule:</strong> Vertically opposite angles are equal</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$42^{\\circ}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Find All Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Lines AB and CD intersect at O. If <MathText>{'$\\angle AOD = 72^{\\circ}$'}</MathText>, find the other three angles.
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
                  <p><strong>Vertically opposite:</strong> <MathText>{'$\\angle BOC = 72^{\\circ}$'}</MathText></p>
                  <p><strong>Adjacent angle:</strong> <MathText>{'$\\angle AOC = 180^{\\circ} - 72^{\\circ} = 108^{\\circ}$'}</MathText></p>
                  <p><strong>Last angle:</strong> <MathText>{'$\\angle BOD = 108^{\\circ}$'}</MathText> (opposite to <MathText>{'$\\angle AOC$'}</MathText>)</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$\\angle BOC = 72^{\\circ}$'}</MathText>, <MathText>{'$\\angle AOC = 108^{\\circ}$'}</MathText>, <MathText>{'$\\angle BOD = 108^{\\circ}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Equal Expressions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Two vertically opposite angles are <MathText>{'$(4x - 10)^{\\circ}$'}</MathText> and <MathText>{'$(2x + 30)^{\\circ}$'}</MathText>. Find <MathText>x</MathText> and the angle size.
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
                  <p><strong>Equation:</strong> <MathText>{'$4x - 10 = 2x + 30$'}</MathText> (opposite angles equal)</p>
                  <p><strong>Rearrange:</strong> <MathText>{'$4x - 2x = 30 + 10$'}</MathText></p>
                  <p><strong>Simplify:</strong> <MathText>{'$2x = 40$'}</MathText></p>
                  <p><strong>Solve:</strong> <MathText>{'$x = 20$'}</MathText></p>
                  <p><strong>Angle:</strong> <MathText>{'$4x - 10 = 4(20) - 10 = 70^{\\circ}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$x = 20$'}</MathText>; angle = <MathText>{'$70^{\\circ}$'}</MathText>
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
              Two lines meet at point R. One angle is <MathText>{'$5x^{\\circ}$'}</MathText>. An adjacent angle is <MathText>{'$(2x + 12)^{\\circ}$'}</MathText>. Find all four angles.
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
                  <p><strong>Adjacent angles on line:</strong> <MathText>{'$5x + (2x + 12) = 180$'}</MathText></p>
                  <p><strong>Simplify:</strong> <MathText>{'$7x + 12 = 180$'}</MathText></p>
                  <p><strong>Solve:</strong> <MathText>{'$7x = 168$'}</MathText>, so <MathText>{'$x = 24$'}</MathText></p>
                  <p><strong>First angle:</strong> <MathText>{'$5x = 5(24) = 120^{\\circ}$'}</MathText></p>
                  <p><strong>Second angle:</strong> <MathText>{'$2x + 12 = 2(24) + 12 = 60^{\\circ}$'}</MathText></p>
                  <p><strong>Third angle:</strong> <MathText>{'$120^{\\circ}$'}</MathText> (opposite to first)</p>
                  <p><strong>Fourth angle:</strong> <MathText>{'$60^{\\circ}$'}</MathText> (opposite to second)</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$120^{\\circ}$'}</MathText>, <MathText>{'$60^{\\circ}$'}</MathText>, <MathText>{'$120^{\\circ}$'}</MathText>, <MathText>{'$60^{\\circ}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-orange-50 dark:bg-orange-900/30 border-l-4 border-orange-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Vertically opposite angles are always equal</strong> - this is a fundamental property</li>
            <li>When two lines intersect, there are <strong>two pairs</strong> of vertically opposite angles</li>
            <li>Adjacent angles (next to each other) at an intersection are <strong>supplementary</strong> (sum to <MathText>{'$180^{\\circ}$'}</MathText>)</li>
            <li>For algebraic problems: set opposite angles equal OR use adjacent angles sum to <MathText>{'$180^{\\circ}$'}</MathText></li>
            <li>All four angles around the intersection point sum to <MathText>{'$360^{\\circ}$'}</MathText> (angles at a point)</li>
            <li>Quick check: opposite angles should be equal, and each pair of adjacent angles should sum to <MathText>{'$180^{\\circ}$'}</MathText></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
