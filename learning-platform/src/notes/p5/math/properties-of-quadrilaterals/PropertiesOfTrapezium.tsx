import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function PropertiesOfTrapezium() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 dark:from-orange-600 dark:to-amber-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Properties of Trapezium</h1>
        <p className="mt-2 text-orange-100">Learn about the quadrilateral with exactly one pair of parallel sides</p>
      </div>

      <div className="p-6">
        {/* Section 1: What is a Trapezium? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What is a Trapezium?
          </h2>

          <div className="mb-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Definition:</strong>
              </p>
              <p className="text-xl text-center font-semibold text-orange-800 dark:text-orange-300 my-3">
                A trapezium is a quadrilateral with exactly ONE pair of parallel sides
              </p>
              <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                (Different from parallelogram which has TWO pairs of parallel sides)
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Look at trapezium PQRS below. Notice only the top and bottom sides are parallel:
            </p>

            <MathToolRenderer
              toolName="trapeziumAngles"
              parameters={{
                vertexLabels: ['S', 'R', 'Q', 'P'],
                angles: [null, null, null, null],
                showParallelMarkers: true,
                showEqualSideMarkers: false,
                topSideRatio: 0.5,
                caption: 'Trapezium PQRS with PQ // SR (one pair of parallel sides)'
              }}
            />

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-300 dark:border-green-700">
                <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Parallel Sides:</p>
                <p className="text-gray-700 dark:text-gray-300"><MathText>{'$PQ \\parallel SR$'}</MathText></p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Only one pair!)</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-300 dark:border-red-700">
                <p className="font-semibold text-red-800 dark:text-red-300 mb-2">Non-Parallel Sides:</p>
                <p className="text-gray-700 dark:text-gray-300">PS and QR are NOT parallel</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(They would meet if extended)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Key Angle Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Key Angle Property
          </h2>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
              Sum of Angles Between Parallel Sides = 180°
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The angles on the same side of the trapezium (between the parallel sides) add up to 180°. These are called <strong>co-interior angles</strong>.
            </p>

            <MathToolRenderer
              toolName="trapeziumAngles"
              parameters={{
                vertexLabels: ['S', 'R', 'Q', 'P'],
                angles: ['z', 'y', 'x', 'w'],
                highlightAngles: [0, 3],
                showParallelMarkers: true,
                showAngleSumAnnotation: true,
                topSideRatio: 0.5,
                caption: '∠w + ∠z = 180° (left side) and ∠x + ∠y = 180° (right side)'
              }}
            />

            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-amber-300 dark:border-amber-700">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Left Side:</p>
                  <p className="text-lg text-orange-600 dark:text-orange-400">
                    <MathText>{'$\\angle w + \\angle z = 180°$'}</MathText>
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Right Side:</p>
                  <p className="text-lg text-orange-600 dark:text-orange-400">
                    <MathText>{'$\\angle x + \\angle y = 180°$'}</MathText>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why does this work? */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Why Does This Work?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Because PQ and SR are parallel, the slanted sides (PS and QR) act as <strong>transversals</strong>.
              The angles on the same side of a transversal between parallel lines are co-interior angles, and they always sum to 180°.
            </p>

            <MathToolRenderer
              toolName="trapeziumAngles"
              parameters={{
                vertexLabels: ['S', 'R', 'Q', 'P'],
                angles: ['116°', null, null, '64°'],
                highlightAngles: [0, 3],
                showParallelMarkers: true,
                topSideRatio: 0.5,
                caption: 'Example: 64° + 116° = 180° ✓'
              }}
            />
          </div>
        </section>

        {/* Section 3: Comparing with Parallelogram */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Trapezium vs Parallelogram
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              It's important to know the difference between a trapezium and a parallelogram:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Trapezium */}
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded border border-orange-300 dark:border-orange-700">
                <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">Trapezium</h3>
                <MathToolRenderer
                  toolName="trapeziumAngles"
                  parameters={{
                    vertexLabels: ['A', 'B', 'C', 'D'],
                    angles: [null, null, null, null],
                    showParallelMarkers: true,
                    topSideRatio: 0.5,
                    caption: 'ONE pair of parallel sides'
                  }}
                />
                <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 space-y-1">
                  <li>Only 1 pair of parallel sides</li>
                  <li>Opposite angles are NOT equal</li>
                  <li>Adjacent angles on parallel sides sum to 180°</li>
                </ul>
              </div>

              {/* Parallelogram */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-300 dark:border-blue-700">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Parallelogram</h3>
                <MathToolRenderer
                  toolName="parallelogramAngles"
                  parameters={{
                    vertexLabels: ['E', 'F', 'G', 'H'],
                    angles: [null, null, null, null],
                    showParallelMarkers: true,
                    skewAngle: 30,
                    caption: 'TWO pairs of parallel sides'
                  }}
                />
                <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 space-y-1">
                  <li>2 pairs of parallel sides</li>
                  <li>Opposite angles ARE equal</li>
                  <li>ALL adjacent angles sum to 180°</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Isosceles Trapezium */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Special Case: Isosceles Trapezium
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              An <strong>isosceles trapezium</strong> has equal non-parallel sides. This makes the base angles equal on each side.
            </p>

            <MathToolRenderer
              toolName="trapeziumAngles"
              parameters={{
                vertexLabels: ['D', 'C', 'B', 'A'],
                angles: ['70°', '70°', '110°', '110°'],
                showParallelMarkers: true,
                showEqualSideMarkers: true,
                isIsosceles: true,
                topSideRatio: 0.6,
                caption: 'Isosceles trapezium: ∠A = ∠B and ∠C = ∠D'
              }}
            />

            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
              <p className="text-gray-700 dark:text-gray-300 text-center">
                In an isosceles trapezium: <MathText>{'$\\angle A = \\angle B$'}</MathText> and <MathText>{'$\\angle C = \\angle D$'}</MathText>
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Worked Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Worked Examples
          </h2>

          {/* Example 1 - Like PDF page 8 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Finding angles using co-interior property
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              PQRS is a trapezium. PQ // RS. ∠SPQ = 116°. Find ∠QRS.
            </p>

            <MathToolRenderer
              toolName="trapeziumAngles"
              parameters={{
                vertexLabels: ['S', 'R', 'Q', 'P'],
                angles: [null, '?', null, '116°'],
                highlightAngles: [1, 3],
                showParallelMarkers: true,
                topSideRatio: 0.5,
                caption: 'Find ∠QRS'
              }}
            />

            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Solution:</p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>∠SPQ and ∠QRS are co-interior angles (on the right side between the parallel lines)</p>
                <p>Sum of co-interior angles = 180°</p>
                <p><MathText>{'$\\angle QRS = 180° - 116°$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
                  Answer: <MathText>{'$\\angle QRS = 64°$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Example 2 - Like PDF page 8 WXYZ */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 2: Finding two unknown angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              WXYZ is a trapezium. WX // ZY. ∠WXY = 125° and ∠WZY = 78°. Find ∠a and ∠c.
            </p>

            <MathToolRenderer
              toolName="trapeziumAngles"
              parameters={{
                vertexLabels: ['Z', 'Y', 'X', 'W'],
                angles: ['78°', 'c', '125°', 'a'],
                highlightAngles: [0, 2],
                showParallelMarkers: true,
                topSideRatio: 0.5,
                caption: 'Find ∠a and ∠c'
              }}
            />

            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-green-300 dark:border-green-700">
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Solution:</p>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                  <p><strong>Finding ∠a:</strong> ∠a and ∠WZY are co-interior angles (left side)</p>
                  <p><MathText>{'$\\angle a = 180° - 78° = 102°$'}</MathText></p>
                </div>
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <p><strong>Finding ∠c:</strong> ∠c and ∠WXY are co-interior angles (right side)</p>
                  <p><MathText>{'$\\angle c = 180° - 125° = 55°$'}</MathText></p>
                </div>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
                  Answer: <MathText>{'$\\angle a = 102°$'}</MathText>, <MathText>{'$\\angle c = 55°$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Example 3 - With triangle */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
              Example 3: Trapezium with triangle
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              ABCD is a trapezium. AB // DC. ACD is an isosceles triangle with ∠CDA = 74° and ∠ABC = 100°. Find ∠y.
            </p>

            <MathToolRenderer
              toolName="trapeziumAngles"
              parameters={{
                vertexLabels: ['D', 'C', 'B', 'A'],
                angles: ['74°', null, '100°', null],
                highlightAngles: [0, 2],
                showParallelMarkers: true,
                topSideRatio: 0.6,
                caption: 'Find ∠y at vertex C'
              }}
            />

            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Solution:</p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> In isosceles triangle ACD, ∠CAD = ∠CDA = 74°</p>
                <p><strong>Step 2:</strong> Find ∠ACD using triangle angle sum:</p>
                <p><MathText>{'$\\angle ACD = 180° - 74° - 74° = 32°$'}</MathText></p>
                <p><strong>Step 3:</strong> Find ∠y using co-interior angles:</p>
                <p>∠ABC and ∠BCD are co-interior angles</p>
                <p><MathText>{'$\\angle BCD = 180° - 100° = 80°$'}</MathText></p>
                <p><MathText>{'$\\angle y = \\angle BCD - \\angle ACD = 80° - 32° = 48°$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
                  Answer: <MathText>{'$\\angle y = 48°$'}</MathText>
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
              Practice 1: Find the unknown angle
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              EFGH is a trapezium. EF // HG. ∠FEH = 72°. Find ∠EHG.
            </p>

            <MathToolRenderer
              toolName="trapeziumAngles"
              parameters={{
                vertexLabels: ['H', 'G', 'F', 'E'],
                angles: ['?', null, null, '72°'],
                highlightAngles: [0, 3],
                showParallelMarkers: true,
                topSideRatio: 0.5,
                caption: 'Find ∠EHG'
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
                  <p>∠FEH and ∠EHG are co-interior angles</p>
                  <p><MathText>{'$\\angle EHG = 180° - 72°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
                    <MathText>{'$\\angle EHG = 108°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Multiple unknown angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              JKLM is a trapezium. JK // ML. ∠KJM = 95° and ∠KLM = 120°. Find ∠JKL and ∠JML.
            </p>

            <MathToolRenderer
              toolName="trapeziumAngles"
              parameters={{
                vertexLabels: ['M', 'L', 'K', 'J'],
                angles: ['?', '120°', '?', '95°'],
                highlightAngles: [1, 3],
                showParallelMarkers: true,
                topSideRatio: 0.55,
                caption: 'Find ∠JKL and ∠JML'
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
                  <p><strong>∠JML (co-interior with ∠KJM):</strong></p>
                  <p><MathText>{'$\\angle JML = 180° - 95° = 85°$'}</MathText></p>
                  <p className="mt-2"><strong>∠JKL (co-interior with ∠KLM):</strong></p>
                  <p><MathText>{'$\\angle JKL = 180° - 120° = 60°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Answer: ∠JKL = 60°, ∠JML = 85°
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Isosceles trapezium
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              RSTU is an isosceles trapezium. RS // UT. ∠SRU = 65°. Find ∠TUR, ∠RST, and ∠STU.
            </p>

            <MathToolRenderer
              toolName="trapeziumAngles"
              parameters={{
                vertexLabels: ['U', 'T', 'S', 'R'],
                angles: ['?', '?', '?', '65°'],
                highlightAngles: [3],
                showParallelMarkers: true,
                showEqualSideMarkers: true,
                isIsosceles: true,
                topSideRatio: 0.6,
                caption: 'Isosceles trapezium RSTU'
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
                  <p><strong>∠RST (base angle equal to ∠SRU in isosceles trapezium):</strong></p>
                  <p><MathText>{'$\\angle RST = \\angle SRU = 65°$'}</MathText></p>
                  <p className="mt-2"><strong>∠TUR (co-interior with ∠SRU):</strong></p>
                  <p><MathText>{'$\\angle TUR = 180° - 65° = 115°$'}</MathText></p>
                  <p className="mt-2"><strong>∠STU (equal to ∠TUR in isosceles trapezium):</strong></p>
                  <p><MathText>{'$\\angle STU = \\angle TUR = 115°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Answer: ∠TUR = 115°, ∠RST = 65°, ∠STU = 115°
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Verify your understanding
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In trapezium ABCD with AB // DC, if ∠A = 80° and ∠D = 100°, check: Is this a valid trapezium?
            </p>

            <MathToolRenderer
              toolName="trapeziumAngles"
              parameters={{
                vertexLabels: ['D', 'C', 'B', 'A'],
                angles: ['100°', null, null, '80°'],
                highlightAngles: [0, 3],
                showParallelMarkers: true,
                topSideRatio: 0.5,
                caption: 'Is this valid? Check co-interior angles'
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
                  <p><strong>Check:</strong> ∠A and ∠D are co-interior angles (left side)</p>
                  <p><MathText>{'$\\angle A + \\angle D = 80° + 100° = 180°$'}</MathText> ✓</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Yes! This is a valid trapezium because the co-interior angles sum to 180°.
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
            <li>A <strong>trapezium</strong> has exactly <strong>ONE pair of parallel sides</strong></li>
            <li>Angles on the same side of the trapezium (between parallel sides) <strong>sum to 180°</strong></li>
            <li>This is because they are <strong>co-interior angles</strong></li>
            <li>An <strong>isosceles trapezium</strong> has equal non-parallel sides and equal base angles</li>
            <li>All four angles still add up to 360°</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
