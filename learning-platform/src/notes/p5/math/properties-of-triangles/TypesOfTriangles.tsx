import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function TypesOfTriangles() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Types of Triangles</h1>
        <p className="mt-2 text-indigo-100">Learn to classify triangles by their sides and angles</p>
      </div>

      <div className="p-6">
        {/* Section 1: Classification by Sides */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Classifying Triangles by Sides
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Triangles can be classified based on the <strong>lengths of their sides</strong>.
              There are three types: equilateral, isosceles, and scalene triangles.
            </p>

            {/* Equilateral Triangle */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                1. Equilateral Triangle
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                An <strong>equilateral triangle</strong> has <strong>3 equal sides</strong> and <strong>3 equal angles</strong> (each 60°).
              </p>
              <MathToolRenderer
                toolName="generalTriangle"
                parameters={{
                  vertexA_label: 'A',
                  vertexB_label: 'B',
                  vertexC_label: 'C',
                  angleA: 60,
                  angleB: 60,
                  angleC: 60,
                  showAngles: true,
                  equalSides: 'all',
                  caption: 'Equilateral triangle: All sides equal, all angles = 60°'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>All 3 sides are equal (shown by tick marks)</li>
                  <li>All 3 angles are equal: <MathText>{'$60° + 60° + 60° = 180°$'}</MathText></li>
                </ul>
              </div>
            </div>

            {/* Isosceles Triangle */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                2. Isosceles Triangle
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                An <strong>isosceles triangle</strong> has <strong>2 equal sides</strong> and <strong>2 equal base angles</strong>.
              </p>
              <MathToolRenderer
                toolName="generalTriangle"
                parameters={{
                  vertexA_label: 'P',
                  vertexB_label: 'Q',
                  vertexC_label: 'R',
                  angleA: 40,
                  angleB: 70,
                  angleC: 70,
                  showAngles: true,
                  equalSides: 'b-c',
                  caption: 'Isosceles triangle: Two equal sides (PQ = PR), two equal base angles'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-green-300 dark:border-green-700">
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>2 sides are equal (PQ = PR, shown by tick marks)</li>
                  <li>The angles opposite the equal sides are also equal</li>
                  <li><MathText>{'$\\angle Q = \\angle R = 70°$'}</MathText> (base angles)</li>
                </ul>
              </div>
            </div>

            {/* Scalene Triangle */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                3. Scalene Triangle
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A <strong>scalene triangle</strong> has <strong>no equal sides</strong> and <strong>no equal angles</strong>.
              </p>
              <MathToolRenderer
                toolName="generalTriangle"
                parameters={{
                  vertexA_label: 'X',
                  vertexB_label: 'Y',
                  vertexC_label: 'Z',
                  angleA: 50,
                  angleB: 60,
                  angleC: 70,
                  showAngles: true,
                  equalSides: 'none',
                  caption: 'Scalene triangle: All sides different, all angles different'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>All 3 sides have different lengths (no tick marks)</li>
                  <li>All 3 angles are different: 50°, 60°, 70°</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Classification by Angles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Classifying Triangles by Angles
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Triangles can also be classified based on their <strong>angles</strong>.
              There are three types: acute, right, and obtuse triangles.
            </p>

            {/* Acute Triangle */}
            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-teal-800 dark:text-teal-300 mb-2">
                1. Acute Triangle
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                An <strong>acute triangle</strong> has <strong>all angles less than 90°</strong>.
              </p>
              <MathToolRenderer
                toolName="generalTriangle"
                parameters={{
                  vertexA_label: 'A',
                  vertexB_label: 'B',
                  vertexC_label: 'C',
                  angleA: 65,
                  angleB: 55,
                  angleC: 60,
                  showAngles: true,
                  equalSides: 'none',
                  caption: 'Acute triangle: All angles < 90°'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-teal-300 dark:border-teal-700">
                <p className="text-gray-700 dark:text-gray-300">
                  All angles (65°, 55°, 60°) are less than 90°
                </p>
              </div>
            </div>

            {/* Right Triangle */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                2. Right Triangle
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A <strong>right triangle</strong> has <strong>one angle equal to 90°</strong>.
              </p>
              <MathToolRenderer
                toolName="generalTriangle"
                parameters={{
                  vertexA_label: 'D',
                  vertexB_label: 'E',
                  vertexC_label: 'F',
                  angleA: 35,
                  angleB: 55,
                  angleC: 90,
                  showAngles: true,
                  showRightAngleMarker: true,
                  equalSides: 'none',
                  caption: 'Right triangle: One angle = 90° (shown with square marker)'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-orange-300 dark:border-orange-700">
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>The 90° angle is marked with a small square</li>
                  <li>The other two angles add up to 90°: <MathText>{'$35° + 55° = 90°$'}</MathText></li>
                </ul>
              </div>
            </div>

            {/* Obtuse Triangle */}
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                3. Obtuse Triangle
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                An <strong>obtuse triangle</strong> has <strong>one angle greater than 90°</strong>.
              </p>
              <MathToolRenderer
                toolName="generalTriangle"
                parameters={{
                  vertexA_label: 'G',
                  vertexB_label: 'H',
                  vertexC_label: 'I',
                  angleA: 25,
                  angleB: 40,
                  angleC: 115,
                  showAngles: true,
                  equalSides: 'none',
                  caption: 'Obtuse triangle: One angle > 90°'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-red-300 dark:border-red-700">
                <p className="text-gray-700 dark:text-gray-300">
                  The angle at I (115°) is greater than 90°
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Combined Classifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Combined Classifications
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A triangle can be described using <strong>both</strong> classifications. For example:
            </p>

            {/* Isosceles Right Triangle */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                Example: Isosceles Right Triangle
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                This triangle is <strong>both</strong> isosceles (2 equal sides) <strong>and</strong> right (has a 90° angle).
              </p>
              <MathToolRenderer
                toolName="generalTriangle"
                parameters={{
                  vertexA_label: 'J',
                  vertexB_label: 'K',
                  vertexC_label: 'L',
                  angleA: 45,
                  angleB: 45,
                  angleC: 90,
                  showAngles: true,
                  showRightAngleMarker: true,
                  equalSides: 'a-b',
                  caption: 'Isosceles right triangle: 90° angle with two 45° angles'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-indigo-300 dark:border-indigo-700">
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Has a 90° angle at L (right triangle)</li>
                  <li>Two equal sides JL = KL (isosceles)</li>
                  <li>Two equal angles: <MathText>{'$45° + 45° = 90°$'}</MathText></li>
                </ul>
              </div>
            </div>

            {/* Obtuse Isosceles Triangle */}
            <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-pink-800 dark:text-pink-300 mb-2">
                Example: Obtuse Isosceles Triangle
              </h3>
              <MathToolRenderer
                toolName="generalTriangle"
                parameters={{
                  vertexA_label: 'M',
                  vertexB_label: 'N',
                  vertexC_label: 'O',
                  angleA: 110,
                  angleB: 35,
                  angleC: 35,
                  showAngles: true,
                  equalSides: 'b-c',
                  caption: 'Obtuse isosceles triangle: One obtuse angle, two equal sides'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-pink-300 dark:border-pink-700">
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Has an obtuse angle of 110°</li>
                  <li>Two equal sides (MN = MO)</li>
                  <li>Two equal base angles of 35°</li>
                </ul>
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
              Practice 1: Classify this triangle
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
                caption: 'Classify this triangle by sides and angles'
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
                  <p><strong>By sides:</strong> Equilateral (all 3 sides equal - shown by tick marks)</p>
                  <p><strong>By angles:</strong> Acute (all angles are 60°, which is less than 90°)</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    Answer: Equilateral acute triangle
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Classify this triangle
            </h3>
            <MathToolRenderer
              toolName="generalTriangle"
              parameters={{
                vertexA_label: 'A',
                vertexB_label: 'B',
                vertexC_label: 'C',
                angleA: 50,
                angleB: 40,
                angleC: 90,
                showAngles: true,
                showRightAngleMarker: true,
                equalSides: 'none',
                caption: 'Classify this triangle by sides and angles'
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
                  <p><strong>By sides:</strong> Scalene (no equal sides - no tick marks)</p>
                  <p><strong>By angles:</strong> Right (has a 90° angle marked with square)</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    Answer: Scalene right triangle
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Find the unknown angle
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Triangle DEF is isosceles with DE = DF. If angle E = 55°, find angle D and angle F.
            </p>
            <MathToolRenderer
              toolName="generalTriangle"
              parameters={{
                vertexA_label: 'D',
                vertexB_label: 'E',
                vertexC_label: 'F',
                angleA: null,
                angleB: 55,
                angleC: null,
                angleA_label: '?',
                angleB_label: '55°',
                angleC_label: '?',
                showAngles: true,
                equalSides: 'a-c',
                caption: 'Isosceles triangle with DE = DF'
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
                  <p><strong>Step 1:</strong> In isosceles triangle DEF, DE = DF</p>
                  <p>The base angles (E and F) are equal.</p>
                  <p><MathText>{'$\\angle F = \\angle E = 55°$'}</MathText></p>
                  <p><strong>Step 2:</strong> Use angle sum of triangle = 180°</p>
                  <p><MathText>{'$\\angle D + \\angle E + \\angle F = 180°$'}</MathText></p>
                  <p><MathText>{'$\\angle D + 55° + 55° = 180°$'}</MathText></p>
                  <p><MathText>{'$\\angle D = 180° - 110° = 70°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    Answer: <MathText>{'$\\angle D = 70°$'}</MathText> and <MathText>{'$\\angle F = 55°$'}</MathText>
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
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">By Sides:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><strong>Equilateral:</strong> 3 equal sides</li>
                <li><strong>Isosceles:</strong> 2 equal sides</li>
                <li><strong>Scalene:</strong> No equal sides</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">By Angles:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><strong>Acute:</strong> All angles &lt; 90°</li>
                <li><strong>Right:</strong> One angle = 90°</li>
                <li><strong>Obtuse:</strong> One angle &gt; 90°</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
