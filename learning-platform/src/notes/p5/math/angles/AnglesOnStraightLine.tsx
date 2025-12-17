import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function AnglesOnStraightLine() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 dark:from-violet-600 dark:to-purple-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Angles on a Straight Line</h1>
        <p className="mt-2 text-violet-100">Learn that angles on a straight line always add up to 180°</p>
      </div>

      <div className="p-6">
        {/* Section 1: Understanding Angles on a Straight Line */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Understanding Angles on a Straight Line
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When two or more angles are formed on a straight line, they always add up to <strong>180°</strong>.
              This is because a straight line is half of a full turn (360° ÷ 2 = 180°).
            </p>

            <div className="bg-violet-50 dark:bg-violet-900/20 border-l-4 border-violet-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Rule:</strong>
              </p>
              <p className="text-xl text-center font-semibold text-violet-800 dark:text-violet-300 my-3">
                Angles on a straight line = 180°
              </p>
            </div>

            {/* Visual Example 1: Two angles */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Example 1: Two Angles on a Straight Line</h4>
              <MathToolRenderer
                toolName="anglesOnLine"
                parameters={{
                  angles: [110, 70],
                  labels: ['a', 'b'],
                  showSum: true
                }}
                caption="AOB is a straight line. ∠a + ∠b = 110° + 70° = 180°"
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600">
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  <MathText>{'$\\angle a + \\angle b = 110° + 70° = 180°$'}</MathText>
                </p>
              </div>
            </div>

            {/* Visual Example 2: Three angles */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Example 2: Three Angles on a Straight Line</h4>
              <MathToolRenderer
                toolName="anglesOnLine"
                parameters={{
                  angles: [65, 58, 57],
                  labels: ['p', 'q', 'r'],
                  showSum: true
                }}
                caption="XY is a straight line. ∠p + ∠q + ∠r = 65° + 58° + 57° = 180°"
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600">
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  <MathText>{'$\\angle p + \\angle q + \\angle r = 65° + 58° + 57° = 180°$'}</MathText>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Finding Unknown Angles (Two Angles) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Finding Unknown Angles (Two Angles)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When you know one angle on a straight line, you can find the other by subtracting from 180°.
            </p>

            {/* Worked Example */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Worked Example: Find the unknown angle
              </h3>
              <MathToolRenderer
                toolName="anglesOnLine"
                parameters={{
                  angles: [125, null],
                  labels: ['125°', 'x'],
                  showSum: false
                }}
                caption="Find angle x"
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Solution:</strong>
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Angles on a straight line sum to 180°</p>
                  <p><MathText>{'$125° + x = 180°$'}</MathText></p>
                  <p><MathText>{'$x = 180° - 125°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$x = 55°$'}</MathText>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Finding Unknown Angles (Three+ Angles) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Finding Unknown Angles (Three or More Angles)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When there are multiple angles, add all the known angles first, then subtract from 180°.
            </p>

            {/* Worked Example */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Worked Example: Three angles on a line
              </h3>
              <MathToolRenderer
                toolName="anglesOnLine"
                parameters={{
                  angles: [33, 46, null],
                  labels: ['33°', '46°', 'c'],
                  showSum: false
                }}
                caption="Find angle c"
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Solution:</strong>
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>First, add the known angles: <MathText>{'$33° + 46° = 79°$'}</MathText></p>
                  <p>Then subtract from 180°:</p>
                  <p><MathText>{'$c = 180° - 79°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$c = 101°$'}</MathText>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice Problems
          </h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Find angle k
            </h3>
            <MathToolRenderer
              toolName="anglesOnLine"
              parameters={{
                angles: [15, 144, null],
                labels: ['15°', '144°', 'k'],
                showSum: false
              }}
              caption="Find angle k"
            />
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>{'$15° + 144° + k = 180°$'}</MathText></p>
                  <p><MathText>{'$159° + k = 180°$'}</MathText></p>
                  <p><MathText>{'$k = 180° - 159°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$k = 21°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Find angle m
            </h3>
            <MathToolRenderer
              toolName="anglesOnLine"
              parameters={{
                angles: [67, null],
                labels: ['67°', 'm'],
                showSum: false
              }}
              caption="Find angle m"
            />
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>{'$67° + m = 180°$'}</MathText></p>
                  <p><MathText>{'$m = 180° - 67°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$m = 113°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Find angle n
            </h3>
            <MathToolRenderer
              toolName="anglesOnLine"
              parameters={{
                angles: [52, 73, null],
                labels: ['52°', '73°', 'n'],
                showSum: false
              }}
              caption="Find angle n"
            />
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>{'$52° + 73° + n = 180°$'}</MathText></p>
                  <p><MathText>{'$125° + n = 180°$'}</MathText></p>
                  <p><MathText>{'$n = 180° - 125°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$n = 55°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-violet-50 dark:bg-violet-900/30 border-l-4 border-violet-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-violet-700 dark:text-violet-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Angles on a straight line always add up to <strong>180°</strong></li>
            <li>A straight line is half of a full turn (360° ÷ 2 = 180°)</li>
            <li>To find an unknown angle: subtract the known angles from 180°</li>
            <li>This rule works for 2, 3, or more angles on a line</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
