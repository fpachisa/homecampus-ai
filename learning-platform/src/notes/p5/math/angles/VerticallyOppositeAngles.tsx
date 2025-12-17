import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function VerticallyOppositeAngles() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-600 dark:from-pink-600 dark:to-rose-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Vertically Opposite Angles</h1>
        <p className="mt-2 text-pink-100">Learn that vertically opposite angles are always equal</p>
      </div>

      <div className="p-6">
        {/* Section 1: Understanding Vertically Opposite Angles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Understanding Vertically Opposite Angles
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When <strong>two straight lines intersect</strong> (cross each other), they form <strong>4 angles</strong>.
              The angles that are <strong>opposite each other</strong> are called <strong>vertically opposite angles</strong>.
            </p>

            <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Rule:</strong>
              </p>
              <p className="text-xl text-center font-semibold text-pink-800 dark:text-pink-300 my-3">
                Vertically opposite angles are EQUAL
              </p>
            </div>

            {/* Visual Example */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Two Lines Intersecting</h4>
              <MathToolRenderer
                toolName="verticallyOppositeAngles"
                parameters={{
                  angles: [115, 65, 115, 65],
                  labels: ['a', 'b', 'c', 'd'],
                  highlight: 0
                }}
                caption="When two lines cross: ∠a = ∠c = 115° and ∠b = ∠d = 65°"
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600">
                <p className="text-gray-700 dark:text-gray-300 text-center mb-2">
                  <strong>Vertically opposite pairs:</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  <MathText>{'$\\angle a = \\angle c = 115°$'}</MathText> and <MathText>{'$\\angle b = \\angle d = 65°$'}</MathText>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Identifying Vertically Opposite Pairs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Identifying Vertically Opposite Pairs
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When two lines intersect, there are <strong>2 pairs</strong> of vertically opposite angles:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Angles that are <strong>across from each other</strong> (not next to each other)</li>
              <li>Each pair shares the same measurement</li>
            </ul>

            {/* Visual Example */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Example: Finding the pairs</h4>
              <MathToolRenderer
                toolName="verticallyOppositeAngles"
                parameters={{
                  angles: [72, 108, 72, 108],
                  labels: ['w', 'x', 'y', 'z']
                }}
                caption="∠w = ∠y (first pair) and ∠x = ∠z (second pair)"
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600">
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  <strong>Pair 1:</strong> <MathText>{'$\\angle w = \\angle y$'}</MathText> |
                  <strong> Pair 2:</strong> <MathText>{'$\\angle x = \\angle z$'}</MathText>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Finding Unknown Angles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Finding Unknown Angles
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You can use <strong>two properties together</strong> to find unknown angles:
            </p>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li><strong>Vertically opposite angles are equal</strong></li>
              <li><strong>Angles on a straight line sum to 180°</strong></li>
            </ol>

            {/* Worked Example */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Worked Example: Find all angles
              </h3>
              <MathToolRenderer
                toolName="verticallyOppositeAngles"
                parameters={{
                  angles: [53, null, null, null],
                  labels: ['53°', 'b', 'c', 'd'],
                  highlight: 0
                }}
                caption="Given ∠a = 53°, find ∠b, ∠c, and ∠d"
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Solution:</strong>
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Find ∠c (vertically opposite to 53°)</p>
                  <p className="ml-4"><MathText>{'$\\angle c = 53°$'}</MathText> (vertically opposite angles are equal)</p>
                  <p><strong>Step 2:</strong> Find ∠b (on a straight line with 53°)</p>
                  <p className="ml-4"><MathText>{'$53° + \\angle b = 180°$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$\\angle b = 180° - 53° = 127°$'}</MathText></p>
                  <p><strong>Step 3:</strong> Find ∠d (vertically opposite to ∠b)</p>
                  <p className="ml-4"><MathText>{'$\\angle d = 127°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
                    <strong>Answer:</strong> <MathText>{'$\\angle b = 127°$'}</MathText>, <MathText>{'$\\angle c = 53°$'}</MathText>, <MathText>{'$\\angle d = 127°$'}</MathText>
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
              Practice 1: Find angle x
            </h3>
            <MathToolRenderer
              toolName="verticallyOppositeAngles"
              parameters={{
                angles: [58, null, null, null],
                labels: ['58°', 'x', '', ''],
                highlight: 0
              }}
              caption="Find angle x (vertically opposite to 58°)"
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
                  <p>Angle x is NOT vertically opposite to 58°.</p>
                  <p>Angle x is on a straight line with 58°:</p>
                  <p><MathText>{'$58° + x = 180°$'}</MathText></p>
                  <p><MathText>{'$x = 180° - 58°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$x = 122°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Find all four angles
            </h3>
            <MathToolRenderer
              toolName="verticallyOppositeAngles"
              parameters={{
                angles: [75, null, null, null],
                labels: ['75°', 'b', 'c', 'd'],
                highlight: 0
              }}
              caption="Given angle a = 75°, find angles b, c, and d"
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
                  <p><MathText>{'$\\angle c = 75°$'}</MathText> (vertically opposite to 75°)</p>
                  <p><MathText>{'$\\angle b = 180° - 75° = 105°$'}</MathText> (angles on straight line)</p>
                  <p><MathText>{'$\\angle d = 105°$'}</MathText> (vertically opposite to b)</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <strong>Answer:</strong> b = 105°, c = 75°, d = 105°
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Find the adjacent angle
            </h3>
            <MathToolRenderer
              toolName="verticallyOppositeAngles"
              parameters={{
                angles: [42, null, null, null],
                labels: ['42°', 'p', 'q', 'r'],
                highlight: 0
              }}
              caption="Given one angle is 42°, find all other angles"
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
                  <p><MathText>{'$\\angle q = 42°$'}</MathText> (vertically opposite to 42°)</p>
                  <p><MathText>{'$\\angle p = 180° - 42° = 138°$'}</MathText> (angles on straight line)</p>
                  <p><MathText>{'$\\angle r = 138°$'}</MathText> (vertically opposite to p)</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <strong>Answer:</strong> p = 138°, q = 42°, r = 138°
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-pink-50 dark:bg-pink-900/30 border-l-4 border-pink-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>When two lines intersect, they form <strong>4 angles</strong></li>
            <li><strong>Vertically opposite angles are always equal</strong></li>
            <li>There are <strong>2 pairs</strong> of vertically opposite angles</li>
            <li>You can combine this with "angles on a straight line = 180°" to find all angles</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
