import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function PropertiesOfParallelogram() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Properties of Parallelogram</h1>
        <p className="mt-2 text-blue-100">Learn the special properties of parallelograms - sides, angles, and parallel lines</p>
      </div>

      <div className="p-6">
        {/* Section 1: What is a Parallelogram? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What is a Parallelogram?
          </h2>

          <div className="mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Definition:</strong>
              </p>
              <p className="text-xl text-center font-semibold text-blue-800 dark:text-blue-300 my-3">
                A parallelogram is a quadrilateral with 2 pairs of parallel sides
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Look at parallelogram WXYZ below. Notice the arrow markers showing which sides are parallel:
            </p>

            <MathToolRenderer
              toolName="parallelogramAngles"
              parameters={{
                vertexLabels: ['W', 'X', 'Y', 'Z'],
                angles: [null, null, null, null],
                showParallelMarkers: true,
                showEqualSideMarkers: false,
                skewAngle: 30,
                caption: 'Parallelogram WXYZ with parallel sides marked'
              }}
            />

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-300 dark:border-green-700">
                <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Parallel Sides:</p>
                <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                  <li><MathText>{'$WX \\parallel ZY$'}</MathText> (top // bottom)</li>
                  <li><MathText>{'$WZ \\parallel XY$'}</MathText> (left // right)</li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border border-purple-300 dark:border-purple-700">
                <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Equal Sides:</p>
                <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                  <li><MathText>{'$WX = ZY$'}</MathText> (opposite sides)</li>
                  <li><MathText>{'$WZ = XY$'}</MathText> (opposite sides)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Angle Properties */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Angle Properties of a Parallelogram
          </h2>

          {/* Property 1: Opposite angles are equal */}
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-2">
              Property 1: Opposite Angles are Equal
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In a parallelogram, angles that are diagonally opposite each other are equal.
            </p>

            <MathToolRenderer
              toolName="parallelogramAngles"
              parameters={{
                vertexLabels: ['A', 'B', 'C', 'D'],
                angles: ['120°', '60°', '120°', '60°'],
                highlightAngles: [0, 2],
                showParallelMarkers: true,
                skewAngle: 30,
                caption: 'Opposite angles are equal: ∠A = ∠C = 120° and ∠B = ∠D = 60°'
              }}
            />

            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border border-emerald-300 dark:border-emerald-700">
              <p className="text-gray-700 dark:text-gray-300 text-center">
                <MathText>{'$\\angle A = \\angle C$'}</MathText> (opposite angles)
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                <MathText>{'$\\angle B = \\angle D$'}</MathText> (opposite angles)
              </p>
            </div>
          </div>

          {/* Property 2: Adjacent angles sum to 180° */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
              Property 2: Adjacent Angles Sum to 180°
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Any two angles that are next to each other (adjacent) add up to 180°. This is because they are co-interior angles between parallel lines.
            </p>

            <MathToolRenderer
              toolName="parallelogramAngles"
              parameters={{
                vertexLabels: ['E', 'F', 'G', 'H'],
                angles: ['115°', '65°', '115°', '65°'],
                highlightAngles: [0, 1],
                showParallelMarkers: true,
                skewAngle: 25,
                caption: 'Adjacent angles sum to 180°: ∠E + ∠F = 115° + 65° = 180°'
              }}
            />

            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border border-orange-300 dark:border-orange-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">All adjacent pairs sum to 180°:</p>
              <div className="grid grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
                <p><MathText>{'$\\angle E + \\angle F = 180°$'}</MathText></p>
                <p><MathText>{'$\\angle F + \\angle G = 180°$'}</MathText></p>
                <p><MathText>{'$\\angle G + \\angle H = 180°$'}</MathText></p>
                <p><MathText>{'$\\angle H + \\angle E = 180°$'}</MathText></p>
              </div>
            </div>
          </div>

          {/* Why do adjacent angles sum to 180°? */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Why Do Adjacent Angles Sum to 180°?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Because the top and bottom sides are parallel, the left side acts as a <strong>transversal</strong>. The angles on the same side of the transversal (co-interior angles) always add up to 180°.
            </p>

            <MathToolRenderer
              toolName="parallelogramAngles"
              parameters={{
                vertexLabels: ['P', 'Q', 'R', 'S'],
                angles: ['130°', '50°', '130°', '50°'],
                highlightAngles: [0, 3],
                showParallelMarkers: true,
                skewAngle: 40,
                caption: '∠P and ∠S are co-interior angles: 130° + 50° = 180°'
              }}
            />
          </div>
        </section>

        {/* Section 3: Identifying Sides and Angles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Identifying Parallel and Equal Sides
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In a parallelogram, you need to be able to identify:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Which sides are <strong>parallel</strong> to each other</li>
              <li>Which sides are <strong>equal</strong> in length</li>
              <li>Which angles are <strong>opposite</strong> (and therefore equal)</li>
              <li>Which angles are <strong>adjacent</strong> (and therefore sum to 180°)</li>
            </ul>

            <MathToolRenderer
              toolName="parallelogramAngles"
              parameters={{
                vertexLabels: ['J', 'K', 'L', 'M'],
                angles: ['j', 'k', 'l', 'm'],
                showParallelMarkers: true,
                skewAngle: 35,
                caption: 'Parallelogram JKLM - Can you identify the relationships?'
              }}
            />

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Parallel Sides:</p>
                <p className="text-gray-700 dark:text-gray-300"><MathText>{'$JK \\parallel ML$'}</MathText></p>
                <p className="text-gray-700 dark:text-gray-300"><MathText>{'$JM \\parallel KL$'}</MathText></p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Opposite Angles:</p>
                <p className="text-gray-700 dark:text-gray-300"><MathText>{'$\\angle j = \\angle l$'}</MathText></p>
                <p className="text-gray-700 dark:text-gray-300"><MathText>{'$\\angle k = \\angle m$'}</MathText></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Worked Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Worked Examples
          </h2>

          {/* Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Finding Opposite Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              EFGH is a parallelogram. ∠HEF = 120°. Find ∠j, ∠k, and ∠m.
            </p>

            <MathToolRenderer
              toolName="parallelogramAngles"
              parameters={{
                vertexLabels: ['E', 'F', 'G', 'H'],
                angles: ['120°', 'j', 'k', 'm'],
                highlightAngles: [0],
                showParallelMarkers: true,
                skewAngle: 30,
                caption: 'Find angles j, k, and m'
              }}
            />

            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Solution:</p>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded">
                  <p><strong>Finding ∠k:</strong> Opposite angles are equal</p>
                  <p><MathText>{'$\\angle k = \\angle HEF = 120°$'}</MathText></p>
                </div>
                <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                  <p><strong>Finding ∠m:</strong> Adjacent angles sum to 180°</p>
                  <p><MathText>{'$\\angle m = 180° - 120° = 60°$'}</MathText></p>
                </div>
                <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                  <p><strong>Finding ∠j:</strong> ∠j and ∠m are opposite angles</p>
                  <p><MathText>{'$\\angle j = \\angle m = 60°$'}</MathText></p>
                </div>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
                  Answer: <MathText>{'$\\angle j = 60°$'}</MathText>, <MathText>{'$\\angle k = 120°$'}</MathText>, <MathText>{'$\\angle m = 60°$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Example 2: With diagram from PDF */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 2: Using Triangle Properties
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              PQRS is a parallelogram. ∠QSR = 51°. Find ∠a.
            </p>

            <MathToolRenderer
              toolName="parallelogramAngles"
              parameters={{
                vertexLabels: ['P', 'Q', 'R', 'S'],
                angles: ['a', null, null, '51°'],
                highlightAngles: [0, 3],
                showParallelMarkers: true,
                skewAngle: 35,
                caption: 'PQRS is a parallelogram with ∠QSR = 51°'
              }}
            />

            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-green-300 dark:border-green-700">
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Solution:</p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>In triangle QRS:</p>
                <p><MathText>{'$\\angle QRS = 180° - 90° - 51° = 39°$'}</MathText></p>
                <p>Since opposite angles of a parallelogram are equal:</p>
                <p><MathText>{'$\\angle a = \\angle QRS = 39°$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
                  Answer: <MathText>{'$\\angle a = 39°$'}</MathText>
                </p>
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
              Practice 1: Find the unknown angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              ABCD is a parallelogram. ∠ABC = 75°. Find ∠BCD, ∠CDA, and ∠DAB.
            </p>

            <MathToolRenderer
              toolName="parallelogramAngles"
              parameters={{
                vertexLabels: ['A', 'B', 'C', 'D'],
                angles: ['?', '75°', '?', '?'],
                highlightAngles: [1],
                showParallelMarkers: true,
                skewAngle: 25,
                caption: 'Find all unknown angles'
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
                  <p><strong>∠CDA (opposite to ∠ABC):</strong></p>
                  <p><MathText>{'$\\angle CDA = \\angle ABC = 75°$'}</MathText> (opposite angles)</p>
                  <p className="mt-2"><strong>∠BCD (adjacent to ∠ABC):</strong></p>
                  <p><MathText>{'$\\angle BCD = 180° - 75° = 105°$'}</MathText></p>
                  <p className="mt-2"><strong>∠DAB (opposite to ∠BCD):</strong></p>
                  <p><MathText>{'$\\angle DAB = \\angle BCD = 105°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Answer: ∠BCD = 105°, ∠CDA = 75°, ∠DAB = 105°
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Identify parallel sides
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In parallelogram MNOP, which side is parallel to MN? Which side is equal to NO?
            </p>

            <MathToolRenderer
              toolName="parallelogramAngles"
              parameters={{
                vertexLabels: ['M', 'N', 'O', 'P'],
                angles: [null, null, null, null],
                showParallelMarkers: true,
                skewAngle: 30,
                caption: 'Parallelogram MNOP'
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
                  <p><strong>Side parallel to MN:</strong> PO (opposite side)</p>
                  <p><MathText>{'$MN \\parallel PO$'}</MathText></p>
                  <p className="mt-2"><strong>Side equal to NO:</strong> MP (opposite side)</p>
                  <p><MathText>{'$NO = MP$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Answer: MN // PO and NO = MP
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Finding angles using properties
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              WXYZ is a parallelogram. ∠WXY = 118°. Find ∠XYZ.
            </p>

            <MathToolRenderer
              toolName="parallelogramAngles"
              parameters={{
                vertexLabels: ['W', 'X', 'Y', 'Z'],
                angles: [null, '118°', '?', null],
                highlightAngles: [1, 2],
                showParallelMarkers: true,
                skewAngle: 28,
                caption: 'Find ∠XYZ'
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
                  <p>∠WXY and ∠XYZ are adjacent angles</p>
                  <p>Adjacent angles in a parallelogram sum to 180°</p>
                  <p><MathText>{'$\\angle XYZ = 180° - 118°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
                    <MathText>{'$\\angle XYZ = 62°$'}</MathText>
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
            <li>A <strong>parallelogram</strong> has 2 pairs of parallel sides</li>
            <li>Opposite sides are <strong>equal</strong> in length</li>
            <li><strong>Opposite angles are equal</strong></li>
            <li><strong>Adjacent angles sum to 180°</strong> (co-interior angles)</li>
            <li>All four angles add up to 360°</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
