import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function PropertiesOfRhombus() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Properties of Rhombus</h1>
        <p className="mt-2 text-green-100">Learn about the special parallelogram with 4 equal sides</p>
      </div>

      <div className="p-6">
        {/* Section 1: What is a Rhombus? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What is a Rhombus?
          </h2>

          <div className="mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Definition:</strong>
              </p>
              <p className="text-xl text-center font-semibold text-green-800 dark:text-green-300 my-3">
                A rhombus is a parallelogram with 4 equal sides
              </p>
              <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                Think of it as a "tilted square" or a "diamond shape"
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Look at rhombus EFGH below. Notice the tick marks showing ALL sides are equal:
            </p>

            <MathToolRenderer
              toolName="rhombusAngles"
              parameters={{
                vertexLabels: ['E', 'F', 'G', 'H'],
                angles: [null, null, null, null],
                orientation: 'diamond',
                showEqualSideMarkers: true,
                showParallelMarkers: true,
                caption: 'Rhombus EFGH - All 4 sides are equal: EF = FG = GH = HE'
              }}
            />

            <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded border border-emerald-300 dark:border-emerald-700">
              <p className="font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Key Property:</p>
              <p className="text-gray-700 dark:text-gray-300 text-center text-lg">
                <MathText>{'$EF = FG = GH = HE$'}</MathText>
              </p>
              <p className="text-center text-gray-600 dark:text-gray-400 mt-2 text-sm">
                (All 4 sides are equal - this is what makes it a rhombus!)
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Rhombus vs Parallelogram */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Rhombus vs Parallelogram
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A rhombus is a <strong>special type of parallelogram</strong>. It has all the properties of a parallelogram, PLUS the extra property that all 4 sides are equal.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Parallelogram */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-300 dark:border-blue-700">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Parallelogram</h3>
                <MathToolRenderer
                  toolName="parallelogramAngles"
                  parameters={{
                    vertexLabels: ['A', 'B', 'C', 'D'],
                    angles: [null, null, null, null],
                    showParallelMarkers: true,
                    showEqualSideMarkers: true,
                    skewAngle: 30,
                    caption: 'Opposite sides equal'
                  }}
                />
                <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 space-y-1">
                  <li>2 pairs of parallel sides</li>
                  <li>Opposite sides equal</li>
                </ul>
              </div>

              {/* Rhombus */}
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-300 dark:border-green-700">
                <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">Rhombus</h3>
                <MathToolRenderer
                  toolName="rhombusAngles"
                  parameters={{
                    vertexLabels: ['E', 'F', 'G', 'H'],
                    angles: [null, null, null, null],
                    orientation: 'diamond',
                    showEqualSideMarkers: true,
                    showParallelMarkers: true,
                    caption: 'ALL 4 sides equal'
                  }}
                />
                <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 space-y-1">
                  <li>2 pairs of parallel sides</li>
                  <li><strong>ALL 4 sides equal</strong></li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Remember:</strong> Every rhombus is a parallelogram, but not every parallelogram is a rhombus!
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: All Properties of a Rhombus */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            All Properties of a Rhombus
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Since a rhombus is a special parallelogram, it has ALL the properties of a parallelogram:
            </p>

            {/* Property 1: 4 Equal Sides */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Property 1: 4 Equal Sides
              </h3>
              <MathToolRenderer
                toolName="rhombusAngles"
                parameters={{
                  vertexLabels: ['P', 'Q', 'R', 'S'],
                  angles: [null, null, null, null],
                  orientation: 'tilted',
                  showEqualSideMarkers: true,
                  showParallelMarkers: false,
                  caption: 'PQ = QR = RS = SP (all sides equal)'
                }}
              />
            </div>

            {/* Property 2: 2 Pairs of Parallel Sides */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Property 2: 2 Pairs of Parallel Sides
              </h3>
              <MathToolRenderer
                toolName="rhombusAngles"
                parameters={{
                  vertexLabels: ['P', 'Q', 'R', 'S'],
                  angles: [null, null, null, null],
                  orientation: 'tilted',
                  showEqualSideMarkers: false,
                  showParallelMarkers: true,
                  caption: 'PQ // SR and PS // QR'
                }}
              />
              <div className="mt-3 text-gray-700 dark:text-gray-300">
                <p><MathText>{'$PQ \\parallel SR$'}</MathText> and <MathText>{'$PS \\parallel QR$'}</MathText></p>
              </div>
            </div>

            {/* Property 3: Opposite Angles Equal */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Property 3: Opposite Angles are Equal
              </h3>
              <MathToolRenderer
                toolName="rhombusAngles"
                parameters={{
                  vertexLabels: ['T', 'U', 'V', 'W'],
                  angles: ['45°', '135°', '45°', '135°'],
                  highlightAngles: [0, 2],
                  orientation: 'tilted',
                  showEqualSideMarkers: true,
                  showParallelMarkers: false,
                  caption: '∠T = ∠V = 45° (opposite) and ∠U = ∠W = 135° (opposite)'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  <MathText>{'$\\angle T = \\angle V$'}</MathText> and <MathText>{'$\\angle U = \\angle W$'}</MathText>
                </p>
              </div>
            </div>

            {/* Property 4: Adjacent Angles Sum to 180° */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                Property 4: Adjacent Angles Sum to 180°
              </h3>
              <MathToolRenderer
                toolName="rhombusAngles"
                parameters={{
                  vertexLabels: ['A', 'B', 'C', 'D'],
                  angles: ['55°', '125°', '55°', '125°'],
                  highlightAngles: [0, 1],
                  orientation: 'tilted',
                  showEqualSideMarkers: true,
                  showParallelMarkers: false,
                  caption: '∠A + ∠B = 55° + 125° = 180°'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  <MathText>{'$\\angle A + \\angle B = 180°$'}</MathText> (co-interior angles)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Worked Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Worked Examples
          </h2>

          {/* Example 1 - Like PDF page 7 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Finding angles using opposite angles property
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              TUVW is a rhombus. ∠UVW = 135°. Find ∠e, ∠f, and ∠g.
            </p>

            <MathToolRenderer
              toolName="rhombusAngles"
              parameters={{
                vertexLabels: ['T', 'U', 'V', 'W'],
                angles: ['e', 'f', '135°', 'g'],
                highlightAngles: [2],
                orientation: 'tilted',
                showEqualSideMarkers: true,
                showParallelMarkers: false,
                caption: 'Find angles e, f, and g'
              }}
            />

            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Solution:</p>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                  <p><strong>Finding ∠e:</strong> Opposite angles are equal</p>
                  <p><MathText>{'$\\angle e = \\angle UVW = 135°$'}</MathText></p>
                </div>
                <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                  <p><strong>Finding ∠f:</strong> Adjacent angles sum to 180°</p>
                  <p><MathText>{'$\\angle f = 180° - 135° = 45°$'}</MathText></p>
                </div>
                <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded">
                  <p><strong>Finding ∠g:</strong> ∠g and ∠f are opposite angles</p>
                  <p><MathText>{'$\\angle g = \\angle f = 45°$'}</MathText></p>
                </div>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
                  Answer: <MathText>{'$\\angle e = 135°$'}</MathText>, <MathText>{'$\\angle f = 45°$'}</MathText>, <MathText>{'$\\angle g = 45°$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Example 2 - Like PDF page 7 EFGH */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 2: Finding angles in a diamond-shaped rhombus
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              EFGH is a rhombus. ∠HEF = 40°. Find ∠GHF.
            </p>

            <MathToolRenderer
              toolName="rhombusAngles"
              parameters={{
                vertexLabels: ['E', 'F', 'G', 'H'],
                angles: ['40°', null, null, null],
                highlightAngles: [0],
                orientation: 'diamond',
                showEqualSideMarkers: true,
                showParallelMarkers: false,
                caption: 'Rhombus EFGH with ∠HEF = 40°'
              }}
            />

            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-green-300 dark:border-green-700">
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Solution:</p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Find ∠FGH (opposite to ∠HEF)</p>
                <p><MathText>{'$\\angle FGH = \\angle HEF = 40°$'}</MathText></p>

                <p className="mt-2"><strong>Step 2:</strong> Find ∠EFG (adjacent to ∠HEF)</p>
                <p><MathText>{'$\\angle EFG = 180° - 40° = 140°$'}</MathText></p>

                <p className="mt-2"><strong>Step 3:</strong> Find ∠GHE (opposite to ∠EFG)</p>
                <p><MathText>{'$\\angle GHE = \\angle EFG = 140°$'}</MathText></p>

                <p className="mt-2"><strong>Step 4:</strong> Find ∠GHF</p>
                <p>∠GHF is half of ∠GHE (by symmetry of rhombus)</p>
                <p><MathText>{'$\\angle GHF = 140° \\div 2 = 70°$'}</MathText></p>

                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  Answer: <MathText>{'$\\angle GHF = 70°$'}</MathText>
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
              ABCD is a rhombus. ∠ABC = 70°. Find ∠BCD and ∠DAB.
            </p>

            <MathToolRenderer
              toolName="rhombusAngles"
              parameters={{
                vertexLabels: ['A', 'B', 'C', 'D'],
                angles: ['?', '70°', '?', null],
                highlightAngles: [1],
                orientation: 'tilted',
                showEqualSideMarkers: true,
                showParallelMarkers: false,
                caption: 'Find ∠BCD and ∠DAB'
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
                  <p><strong>∠BCD (adjacent to ∠ABC):</strong></p>
                  <p><MathText>{'$\\angle BCD = 180° - 70° = 110°$'}</MathText></p>
                  <p className="mt-2"><strong>∠DAB (opposite to ∠BCD):</strong></p>
                  <p><MathText>{'$\\angle DAB = \\angle BCD = 110°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Answer: ∠BCD = 110°, ∠DAB = 110°
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Using rhombus properties
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              PQRS is a rhombus. ∠RPQ = 55°. Find ∠x and ∠y.
            </p>

            <MathToolRenderer
              toolName="rhombusAngles"
              parameters={{
                vertexLabels: ['P', 'Q', 'R', 'S'],
                angles: ['55°', null, 'x', 'y'],
                highlightAngles: [0],
                orientation: 'tilted',
                showEqualSideMarkers: true,
                showParallelMarkers: false,
                caption: 'PQRS is a rhombus with ∠RPQ = 55°'
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
                  <p><strong>Finding ∠x (opposite to ∠RPQ):</strong></p>
                  <p><MathText>{'$\\angle x = \\angle RPQ = 55°$'}</MathText></p>
                  <p className="mt-2"><strong>Finding ∠y (adjacent to ∠RPQ):</strong></p>
                  <p><MathText>{'$\\angle y = 180° - 55° = 125°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Answer: <MathText>{'$\\angle x = 55°$'}</MathText>, <MathText>{'$\\angle y = 125°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Diamond orientation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              WXYZ is a rhombus. ∠WXY = 50°. Find all other angles.
            </p>

            <MathToolRenderer
              toolName="rhombusAngles"
              parameters={{
                vertexLabels: ['W', 'X', 'Y', 'Z'],
                angles: ['?', '50°', '?', '?'],
                highlightAngles: [1],
                orientation: 'diamond',
                showEqualSideMarkers: true,
                showParallelMarkers: false,
                caption: 'Find ∠YZW, ∠ZWX, and ∠XYZ'
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
                  <p><strong>∠ZWX (opposite to ∠XYZ):</strong></p>
                  <p>First find ∠XYZ: Adjacent to ∠WXY, so <MathText>{'$\\angle XYZ = 180° - 50° = 130°$'}</MathText></p>
                  <p><MathText>{'$\\angle ZWX = \\angle XYZ = 130°$'}</MathText></p>
                  <p className="mt-2"><strong>∠YZW (opposite to ∠WXY):</strong></p>
                  <p><MathText>{'$\\angle YZW = \\angle WXY = 50°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Answer: ∠XYZ = 130°, ∠YZW = 50°, ∠ZWX = 130°
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Identify properties
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In rhombus KLMN, which side is equal to KL? Which angle is equal to ∠KLM?
            </p>

            <MathToolRenderer
              toolName="rhombusAngles"
              parameters={{
                vertexLabels: ['K', 'L', 'M', 'N'],
                angles: [null, null, null, null],
                orientation: 'tilted',
                showEqualSideMarkers: true,
                showParallelMarkers: true,
                caption: 'Rhombus KLMN'
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
                  <p><strong>Side equal to KL:</strong></p>
                  <p>In a rhombus, ALL sides are equal!</p>
                  <p><MathText>{'$KL = LM = MN = NK$'}</MathText></p>
                  <p className="mt-2"><strong>Angle equal to ∠KLM:</strong></p>
                  <p>∠MNK is opposite to ∠KLM</p>
                  <p><MathText>{'$\\angle MNK = \\angle KLM$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Answer: All sides equal KL. ∠MNK = ∠KLM
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
            <li>A <strong>rhombus</strong> has <strong>4 equal sides</strong></li>
            <li>A rhombus is a special type of parallelogram</li>
            <li>It has <strong>2 pairs of parallel sides</strong></li>
            <li><strong>Opposite angles are equal</strong></li>
            <li><strong>Adjacent angles sum to 180°</strong></li>
            <li>All four angles add up to 360°</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
