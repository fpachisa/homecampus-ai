import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function AngleSumOfTriangle() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Angle Sum of a Triangle</h1>
        <p className="mt-2 text-emerald-100">Learn that the angles in any triangle always add up to 180°</p>
      </div>

      <div className="p-6">
        {/* Section 1: The Angle Sum Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Angle Sum Property
          </h2>

          <div className="mb-6">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Rule:</strong>
              </p>
              <p className="text-xl text-center font-semibold text-emerald-800 dark:text-emerald-300 my-3">
                The sum of angles in a triangle = 180°
              </p>
              <p className="text-center text-gray-700 dark:text-gray-300">
                <MathText>{'$\\angle A + \\angle B + \\angle C = 180°$'}</MathText>
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This property is true for <strong>ALL triangles</strong> - equilateral, isosceles, scalene,
              acute, right, or obtuse. Let's verify with different types:
            </p>

            {/* Acute Triangle Example */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Acute Triangle
              </h3>
              <MathToolRenderer
                toolName="generalTriangle"
                parameters={{
                  vertexA_label: 'A',
                  vertexB_label: 'B',
                  vertexC_label: 'C',
                  angleA: 50,
                  angleB: 70,
                  angleC: 60,
                  showAngles: true,
                  equalSides: 'none',
                  caption: 'Acute triangle: 50° + 70° + 60° = 180°'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  <MathText>{'$50° + 70° + 60° = 180°$'}</MathText> ✓
                </p>
              </div>
            </div>

            {/* Right Triangle Example */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                Example 2: Right Triangle
              </h3>
              <MathToolRenderer
                toolName="generalTriangle"
                parameters={{
                  vertexA_label: 'D',
                  vertexB_label: 'E',
                  vertexC_label: 'F',
                  angleA: 40,
                  angleB: 50,
                  angleC: 90,
                  showAngles: true,
                  showRightAngleMarker: true,
                  equalSides: 'none',
                  caption: 'Right triangle: 90° + 40° + 50° = 180°'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-orange-300 dark:border-orange-700">
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  <MathText>{'$90° + 40° + 50° = 180°$'}</MathText> ✓
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-1">
                  In a right triangle, the two acute angles always add up to 90°
                </p>
              </div>
            </div>

            {/* Obtuse Triangle Example */}
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                Example 3: Obtuse Triangle
              </h3>
              <MathToolRenderer
                toolName="generalTriangle"
                parameters={{
                  vertexA_label: 'G',
                  vertexB_label: 'H',
                  vertexC_label: 'I',
                  angleA: 115,
                  angleB: 25,
                  angleC: 40,
                  showAngles: true,
                  equalSides: 'none',
                  caption: 'Obtuse triangle: 25° + 115° + 40° = 180°'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-red-300 dark:border-red-700">
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  <MathText>{'$25° + 115° + 40° = 180°$'}</MathText> ✓
                </p>
              </div>
            </div>

            {/* Equilateral Triangle Example */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Example 4: Equilateral Triangle
              </h3>
              <MathToolRenderer
                toolName="generalTriangle"
                parameters={{
                  vertexA_label: 'J',
                  vertexB_label: 'K',
                  vertexC_label: 'L',
                  angleA: 60,
                  angleB: 60,
                  angleC: 60,
                  showAngles: true,
                  equalSides: 'all',
                  caption: 'Equilateral triangle: 60° + 60° + 60° = 180°'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  <MathText>{'$60° + 60° + 60° = 180°$'}</MathText> ✓
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-1">
                  Each angle in an equilateral triangle = 180° ÷ 3 = 60°
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Finding Unknown Angles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Finding Unknown Angles
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If we know two angles in a triangle, we can find the third angle:
            </p>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Add the two known angles</li>
              <li>Subtract from 180°</li>
            </ol>

            {/* Worked Example 1 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Worked Example 1: Find angle x
              </h3>
              <MathToolRenderer
                toolName="generalTriangle"
                parameters={{
                  vertexA_label: 'P',
                  vertexB_label: 'Q',
                  vertexC_label: 'R',
                  angleA: null,
                  angleB: 75,
                  angleC: 45,
                  angleA_label: 'x',
                  angleB_label: '75°',
                  angleC_label: '45°',
                  showAngles: true,
                  equalSides: 'none',
                  caption: 'Find angle x'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Solution:</strong>
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Sum of angles in a triangle = 180°</p>
                  <p><MathText>{'$x + 75° + 45° = 180°$'}</MathText></p>
                  <p><MathText>{'$x + 120° = 180°$'}</MathText></p>
                  <p><MathText>{'$x = 180° - 120°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$x = 60°$'}</MathText>
                  </p>
                </div>
              </div>
            </div>

            {/* Worked Example 2: Using isosceles property */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Worked Example 2: Isosceles Triangle
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                In isosceles triangle ABC, AB = AC and angle A = 40°. Find angles B and C.
              </p>
              <MathToolRenderer
                toolName="generalTriangle"
                parameters={{
                  vertexA_label: 'A',
                  vertexB_label: 'B',
                  vertexC_label: 'C',
                  angleA: 40,
                  angleB: null,
                  angleC: null,
                  angleA_label: '40°',
                  angleB_label: '?',
                  angleC_label: '?',
                  showAngles: true,
                  equalSides: 'b-c',
                  caption: 'Isosceles triangle with AB = AC'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-green-300 dark:border-green-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Solution:</strong>
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Since AB = AC, the base angles are equal</p>
                  <p><MathText>{'$\\angle B = \\angle C$'}</MathText></p>
                  <p><strong>Step 2:</strong> Use angle sum = 180°</p>
                  <p><MathText>{'$40° + \\angle B + \\angle C = 180°$'}</MathText></p>
                  <p><MathText>{'$40° + 2\\angle B = 180°$'}</MathText> (since ∠B = ∠C)</p>
                  <p><MathText>{'$2\\angle B = 140°$'}</MathText></p>
                  <p><MathText>{'$\\angle B = 70°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$\\angle B = \\angle C = 70°$'}</MathText>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Special Cases */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Special Cases to Remember
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Right Triangle Special Case */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                In a Right Triangle:
              </h3>
              <MathToolRenderer
                toolName="generalTriangle"
                parameters={{
                  vertexA_label: 'A',
                  vertexB_label: 'B',
                  vertexC_label: 'C',
                  angleA: 35,
                  angleB: 55,
                  angleC: 90,
                  showAngles: true,
                  showRightAngleMarker: true,
                  equalSides: 'none',
                  caption: 'The two acute angles add up to 90°'
                }}
              />
              <div className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                <p>If one angle = 90°, then:</p>
                <p><MathText>{'$\\text{Other two angles} = 180° - 90° = 90°$'}</MathText></p>
              </div>
            </div>

            {/* Equilateral Triangle Special Case */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                In an Equilateral Triangle:
              </h3>
              <MathToolRenderer
                toolName="generalTriangle"
                parameters={{
                  vertexA_label: 'P',
                  vertexB_label: 'Q',
                  vertexC_label: 'R',
                  angleA: 60,
                  angleB: 60,
                  angleC: 60,
                  showAngles: true,
                  equalSides: 'all',
                  caption: 'All angles equal 60°'
                }}
              />
              <div className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                <p>All 3 angles are equal:</p>
                <p><MathText>{'$\\text{Each angle} = 180° \\div 3 = 60°$'}</MathText></p>
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
              Practice 1: Find angle a
            </h3>
            <MathToolRenderer
              toolName="generalTriangle"
              parameters={{
                vertexA_label: 'X',
                vertexB_label: 'Y',
                vertexC_label: 'Z',
                angleA: null,
                angleB: 80,
                angleC: 55,
                angleA_label: 'a',
                angleB_label: '80°',
                angleC_label: '55°',
                showAngles: true,
                equalSides: 'none',
                caption: 'Find angle a'
              }}
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
                  <p><MathText>{'$a + 80° + 55° = 180°$'}</MathText></p>
                  <p><MathText>{'$a + 135° = 180°$'}</MathText></p>
                  <p><MathText>{'$a = 180° - 135°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$a = 45°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Find angle b in a right triangle
            </h3>
            <MathToolRenderer
              toolName="generalTriangle"
              parameters={{
                vertexA_label: 'A',
                vertexB_label: 'B',
                vertexC_label: 'C',
                angleA: null,
                angleB: 28,
                angleC: 90,
                angleA_label: 'b',
                angleB_label: '28°',
                angleC_label: '90°',
                showAngles: true,
                showRightAngleMarker: true,
                equalSides: 'none',
                caption: 'Right triangle: Find angle b'
              }}
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
                  <p><MathText>{'$90° + b + 28° = 180°$'}</MathText></p>
                  <p><MathText>{'$b = 180° - 90° - 28°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$b = 62°$'}</MathText>
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    (Quick check: In a right triangle, the other two angles add to 90°: 62° + 28° = 90° ✓)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Isosceles triangle with equal base angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In isosceles triangle PQR, PQ = PR. If angle Q = 65°, find angles P and R.
            </p>
            <MathToolRenderer
              toolName="generalTriangle"
              parameters={{
                vertexA_label: 'P',
                vertexB_label: 'Q',
                vertexC_label: 'R',
                angleA: null,
                angleB: 65,
                angleC: null,
                angleA_label: '?',
                angleB_label: '65°',
                angleC_label: '?',
                showAngles: true,
                equalSides: 'a-c',
                caption: 'Isosceles triangle with PQ = PR'
              }}
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
                  <p><strong>Step 1:</strong> Since PQ = PR, base angles Q and R are equal</p>
                  <p><MathText>{'$\\angle R = \\angle Q = 65°$'}</MathText></p>
                  <p><strong>Step 2:</strong> Find angle P</p>
                  <p><MathText>{'$\\angle P + 65° + 65° = 180°$'}</MathText></p>
                  <p><MathText>{'$\\angle P = 180° - 130°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$\\angle P = 50°$'}</MathText>, <MathText>{'$\\angle R = 65°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Isosceles right triangle
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Triangle DEF is an isosceles right triangle with the right angle at F.
              Find angles D and E.
            </p>
            <MathToolRenderer
              toolName="generalTriangle"
              parameters={{
                vertexA_label: 'D',
                vertexB_label: 'E',
                vertexC_label: 'F',
                angleA: null,
                angleB: null,
                angleC: 90,
                angleA_label: '?',
                angleB_label: '?',
                angleC_label: '90°',
                showAngles: true,
                showRightAngleMarker: true,
                equalSides: 'a-b',
                caption: 'Isosceles right triangle with DF = EF'
              }}
            />
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Isosceles means two sides equal, so DF = EF</p>
                  <p>The angles opposite equal sides are equal: <MathText>{'$\\angle D = \\angle E$'}</MathText></p>
                  <p><strong>Step 2:</strong> Use angle sum = 180°</p>
                  <p><MathText>{'$\\angle D + \\angle E + 90° = 180°$'}</MathText></p>
                  <p><MathText>{'$\\angle D + \\angle E = 90°$'}</MathText></p>
                  <p>Since ∠D = ∠E:</p>
                  <p><MathText>{'$2\\angle D = 90°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$\\angle D = \\angle E = 45°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-emerald-50 dark:bg-emerald-900/30 border-l-4 border-emerald-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Sum of angles in ANY triangle = 180°</strong></li>
            <li>To find an unknown angle: add known angles, subtract from 180°</li>
            <li>In a <strong>right triangle</strong>: the two acute angles add up to 90°</li>
            <li>In an <strong>equilateral triangle</strong>: each angle = 60°</li>
            <li>In an <strong>isosceles triangle</strong>: base angles are equal</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
