import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function AnglesAtPoint() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-600 dark:to-cyan-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Angles at a Point</h1>
        <p className="mt-2 text-teal-100">Learn that angles around a point always add up to 360°</p>
      </div>

      <div className="p-6">
        {/* Section 1: Understanding Angles at a Point */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Understanding Angles at a Point
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When several lines meet at a <strong>single point</strong>, they form angles around that point.
              These angles always add up to <strong>360°</strong> because they form a complete circle.
            </p>

            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Rule:</strong>
              </p>
              <p className="text-xl text-center font-semibold text-teal-800 dark:text-teal-300 my-3">
                Angles at a point = 360°
              </p>
            </div>

            {/* Visual Example */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Example: Four Angles at a Point</h4>
              <MathToolRenderer
                toolName="anglesAtPoint"
                parameters={{
                  angles: [60, 70, 130, 100],
                  labels: ['a', 'b', 'c', 'd'],
                  showSum: true
                }}
                caption="∠a + ∠b + ∠c + ∠d = 60° + 70° + 130° + 100° = 360°"
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600">
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  <MathText>{'$\\angle a + \\angle b + \\angle c + \\angle d = 60° + 70° + 130° + 100° = 360°$'}</MathText>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Finding Unknown Angles at a Point */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Finding Unknown Angles at a Point
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To find an unknown angle at a point:
            </p>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Add all the known angles</li>
              <li>Subtract from 360°</li>
            </ol>

            {/* Worked Example */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Worked Example: Find the unknown angle
              </h3>
              <MathToolRenderer
                toolName="anglesAtPoint"
                parameters={{
                  angles: [110, 90, null],
                  labels: ['110°', '90°', 'h'],
                  showSum: false
                }}
                caption="Find angle h"
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Solution:</strong>
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Angles at a point sum to 360°</p>
                  <p><MathText>{'$110° + 90° + h = 360°$'}</MathText></p>
                  <p><MathText>{'$200° + h = 360°$'}</MathText></p>
                  <p><MathText>{'$h = 360° - 200°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$h = 160°$'}</MathText>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Equal Angles at a Point */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Equal Angles at a Point
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sometimes angles at a point are equal. Think of a wind turbine with 3 equal blades!
            </p>

            {/* Wind Turbine Example */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example: Wind Turbine with 3 Equal Blades
              </h3>
              <MathToolRenderer
                toolName="anglesAtPoint"
                parameters={{
                  angles: [120, 120, 120],
                  labels: ['a', 'b', 'c'],
                  showSum: true
                }}
                caption="Three equal angles: each is 360° ÷ 3 = 120°"
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>How to find each angle:</strong>
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>If 3 angles are equal and sum to 360°:</p>
                  <p><MathText>{'$\\text{Each angle} = 360° \\div 3 = 120°$'}</MathText></p>
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
              toolName="anglesAtPoint"
              parameters={{
                angles: [135, 25, null],
                labels: ['135°', '25°', 'x'],
                showSum: false
              }}
              caption="Find angle x"
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
                  <p><MathText>{'$135° + 25° + x = 360°$'}</MathText></p>
                  <p><MathText>{'$160° + x = 360°$'}</MathText></p>
                  <p><MathText>{'$x = 360° - 160°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$x = 200°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Find angle d
            </h3>
            <MathToolRenderer
              toolName="anglesAtPoint"
              parameters={{
                angles: [95, 75, 110, null],
                labels: ['95°', '75°', '110°', 'd'],
                showSum: false
              }}
              caption="Four angles at a point. Find angle d"
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
                  <p><MathText>{'$95° + 75° + 110° + d = 360°$'}</MathText></p>
                  <p><MathText>{'$280° + d = 360°$'}</MathText></p>
                  <p><MathText>{'$d = 360° - 280°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$d = 80°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Four equal angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Four equal angles meet at a point. What is the size of each angle?
            </p>
            <MathToolRenderer
              toolName="anglesAtPoint"
              parameters={{
                angles: [90, 90, 90, 90],
                labels: ['a', 'a', 'a', 'a'],
                showSum: true
              }}
              caption="Four equal angles at a point"
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
                  <p>If 4 angles are equal and sum to 360°:</p>
                  <p><MathText>{'$\\text{Each angle} = 360° \\div 4$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$\\text{Each angle} = 90°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-teal-50 dark:bg-teal-900/30 border-l-4 border-teal-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Angles at a point always add up to <strong>360°</strong></li>
            <li>This is because a full turn around a point is 360°</li>
            <li>To find an unknown angle: add known angles, then subtract from 360°</li>
            <li>For <em>n</em> equal angles at a point: each angle = 360° ÷ <em>n</em></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
