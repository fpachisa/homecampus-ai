import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function FindingUnknownAngles() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 dark:from-indigo-600 dark:to-blue-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Finding Unknown Angles</h1>
        <p className="mt-2 text-indigo-100">Combining all angle properties to solve problems</p>
      </div>

      <div className="p-6">
        {/* Section 1: Summary of Properties */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Summary of Angle Properties
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Property 1 */}
            <div className="bg-violet-50 dark:bg-violet-900/30 p-4 rounded-lg border-2 border-violet-400 dark:border-violet-600">
              <h3 className="font-bold text-violet-800 dark:text-violet-200 mb-2 text-center">Angles on a Straight Line</h3>
              <p className="text-gray-800 dark:text-gray-200 text-center text-lg font-bold">Sum = 180°</p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mt-2">
                <div className="flex justify-center">
                  <svg viewBox="0 0 220 120" width="220" height="120" className="max-w-full">
                    {/* Base line */}
                    <line x1="20" y1="80" x2="200" y2="80" stroke="#4B5563" strokeWidth="2" />
                    {/* Ray for angle division */}
                    <line x1="110" y1="80" x2="160" y2="20" stroke="#4B5563" strokeWidth="2" />
                    {/* Arc for angle a (right side) */}
                    <path d="M 135 80 A 25 25 0 0 0 125 58" fill="none" stroke="#3B82F6" strokeWidth="2.5" />
                    {/* Arc for angle b (left side) */}
                    <path d="M 85 80 A 25 25 0 0 1 125 58" fill="none" stroke="#10B981" strokeWidth="2.5" />
                    {/* Center point */}
                    <circle cx="110" cy="80" r="4" fill="#1F2937" />
                    {/* Labels */}
                    <text x="145" y="65" fontSize="16" fontWeight="bold" fill="#3B82F6">a</text>
                    <text x="70" y="60" fontSize="16" fontWeight="bold" fill="#10B981">b</text>
                  </svg>
                </div>
                <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
                  <p className="text-center text-gray-800 dark:text-gray-200 text-sm font-medium">
                    a + b = 180°
                  </p>
                </div>
              </div>
            </div>

            {/* Property 2 */}
            <div className="bg-pink-50 dark:bg-pink-900/30 p-4 rounded-lg border-2 border-pink-400 dark:border-pink-600">
              <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2 text-center">Vertically Opposite</h3>
              <p className="text-gray-800 dark:text-gray-200 text-center text-lg font-bold">Equal</p>
              <MathToolRenderer
                toolName="verticallyOppositeAngles"
                parameters={{
                  angles: [70, 110, 70, 110],
                  labels: ['a', 'b', 'a', 'b']
                }}
              />
            </div>

            {/* Property 3 */}
            <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg border-2 border-teal-400 dark:border-teal-600">
              <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-2 text-center">Angles at a Point</h3>
              <p className="text-gray-800 dark:text-gray-200 text-center text-lg font-bold">Sum = 360°</p>
              <MathToolRenderer
                toolName="anglesAtPoint"
                parameters={{
                  angles: [90, 90, 90, 90],
                  labels: ['a', 'b', 'c', 'd'],
                  showSum: false
                }}
              />
            </div>
          </div>
        </section>

        {/* Section 2: Problem-Solving Strategy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Problem-Solving Strategy
          </h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Step-by-Step Approach:</strong>
            </p>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Identify</strong> what information is given</li>
              <li><strong>Look for</strong> straight lines, intersecting lines, or angles at a point</li>
              <li><strong>Apply</strong> the correct property</li>
              <li><strong>Calculate</strong> step by step</li>
              <li><strong>Check</strong> your answer makes sense</li>
            </ol>
          </div>
        </section>

        {/* Section 3: Multi-Step Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Multi-Step Problems
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sometimes you need to use <strong>more than one property</strong> to find all the unknown angles.
            </p>

            {/* Worked Example 1 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Worked Example: Two intersecting lines
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Two straight lines WX and YZ intersect at O. Find all four angles.
              </p>
              <MathToolRenderer
                toolName="verticallyOppositeAngles"
                parameters={{
                  angles: [72, null, null, null],
                  labels: ['72°', 'b', 'c', 'd'],
                  highlight: 0
                }}
                caption="Given one angle is 72°, find b, c, and d"
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Solution:</strong>
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Use vertically opposite angles</p>
                  <p className="ml-4"><MathText>{'$\\angle c = 72°$'}</MathText> (vertically opposite to 72°)</p>
                  <p><strong>Step 2:</strong> Use angles on a straight line</p>
                  <p className="ml-4"><MathText>{'$72° + \\angle b = 180°$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$\\angle b = 180° - 72° = 108°$'}</MathText></p>
                  <p><strong>Step 3:</strong> Use vertically opposite angles again</p>
                  <p className="ml-4"><MathText>{'$\\angle d = 108°$'}</MathText> (vertically opposite to b)</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
                    <strong>Answer:</strong> b = 108°, c = 72°, d = 108°
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Multiple Solution Methods */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Multiple Solution Methods
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some problems can be solved in more than one way. Both methods should give the same answer!
            </p>

            {/* Worked Example 2 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Worked Example: Using Both Properties
              </h3>
              <MathToolRenderer
                toolName="verticallyOppositeAngles"
                parameters={{
                  angles: [55, null, null, null],
                  labels: ['55°', 'b', 'c', 'd'],
                  highlight: 0
                }}
                caption="Given one angle is 55°, find all other angles"
              />
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                  <p className="text-blue-700 dark:text-blue-300 font-semibold mb-2">Using Vertically Opposite:</p>
                  <div className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <p>∠c is vertically opposite to 55°</p>
                    <p className="text-green-600 dark:text-green-400 font-semibold">∠c = 55°</p>
                  </div>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                  <p className="text-blue-700 dark:text-blue-300 font-semibold mb-2">Using Straight Line:</p>
                  <div className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <p>55° + ∠b = 180°</p>
                    <p className="text-green-600 dark:text-green-400 font-semibold">∠b = 125°, ∠d = 125°</p>
                  </div>
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
              Practice 1: Find all four angles
            </h3>
            <MathToolRenderer
              toolName="verticallyOppositeAngles"
              parameters={{
                angles: [65, null, null, null],
                labels: ['65°', 'b', 'c', 'd'],
                highlight: 0
              }}
              caption="Two lines intersect. Given angle a = 65°, find b, c, and d"
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
                  <p><strong>∠c = 65°</strong> (vertically opposite)</p>
                  <p><strong>∠b = 180° - 65° = 115°</strong> (angles on straight line)</p>
                  <p><strong>∠d = 115°</strong> (vertically opposite to b)</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    Answer: b = 115°, c = 65°, d = 115°
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Combined angles problem
            </h3>
            <MathToolRenderer
              toolName="anglesOnLine"
              parameters={{
                angles: [28, 63, 45, null],
                labels: ['28°', '63°', '45°', 'q'],
                showSum: false
              }}
              caption="Find angle q on the straight line"
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
                  <p>Angles on a straight line sum to 180°:</p>
                  <p><MathText>{'$28° + 63° + 45° + q = 180°$'}</MathText></p>
                  <p><MathText>{'$136° + q = 180°$'}</MathText></p>
                  <p><MathText>{'$q = 180° - 136°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$q = 44°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Find the unknown angle at a point
            </h3>
            <MathToolRenderer
              toolName="anglesAtPoint"
              parameters={{
                angles: [120, 85, 70, null],
                labels: ['120°', '85°', '70°', 'x'],
                showSum: false
              }}
              caption="Four angles at a point. Find angle x"
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
                  <p>Angles at a point sum to 360°:</p>
                  <p><MathText>{'$120° + 85° + 70° + x = 360°$'}</MathText></p>
                  <p><MathText>{'$275° + x = 360°$'}</MathText></p>
                  <p><MathText>{'$x = 360° - 275°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$x = 85°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Angles on a straight line</strong> sum to 180°</li>
            <li><strong>Vertically opposite angles</strong> are always equal</li>
            <li><strong>Angles at a point</strong> sum to 360°</li>
            <li>Complex problems often need <strong>multiple properties</strong></li>
            <li>Always <strong>check your answer</strong> by verifying the sum or equality</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
