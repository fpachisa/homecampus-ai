import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function FindingUnknownAngles() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);
  const [showSolution6, setShowSolution6] = useState(false);
  const [showChallenge1, setShowChallenge1] = useState(false);
  const [showChallenge2, setShowChallenge2] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Finding Unknown Angles</h1>
        <p className="mt-2 text-purple-100">Apply your knowledge of parallelograms, rhombuses, and trapeziums to solve problems</p>
      </div>

      <div className="p-6">
        {/* Section 1: Quick Review */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Quick Review: Key Properties
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {/* Parallelogram */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-300 dark:border-blue-700">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Parallelogram</h3>
              <MathToolRenderer
                toolName="parallelogramAngles"
                parameters={{
                  vertexLabels: ['A', 'B', 'C', 'D'],
                  angles: ['a', 'b', 'a', 'b'],
                  showParallelMarkers: true,
                  skewAngle: 30,
                  caption: ''
                }}
              />
              <ul className="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                <li>Opposite angles equal</li>
                <li>Adjacent angles = 180°</li>
              </ul>
            </div>

            {/* Rhombus */}
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-300 dark:border-green-700">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">Rhombus</h3>
              <MathToolRenderer
                toolName="rhombusAngles"
                parameters={{
                  vertexLabels: ['E', 'F', 'G', 'H'],
                  angles: ['e', 'f', 'e', 'f'],
                  orientation: 'tilted',
                  showEqualSideMarkers: true,
                  showParallelMarkers: false,
                  caption: ''
                }}
              />
              <ul className="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                <li>4 equal sides</li>
                <li>Same angle properties as parallelogram</li>
              </ul>
            </div>

            {/* Trapezium */}
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded border border-orange-300 dark:border-orange-700">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Trapezium</h3>
              <MathToolRenderer
                toolName="trapeziumAngles"
                parameters={{
                  vertexLabels: ['S', 'R', 'Q', 'P'],
                  angles: ['s', 'r', 'q', 'p'],
                  showParallelMarkers: true,
                  topSideRatio: 0.5,
                  caption: ''
                }}
              />
              <ul className="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                <li>1 pair of parallel sides</li>
                <li>Co-interior angles = 180°</li>
              </ul>
            </div>
          </div>

          {/* Summary Box */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
              Strategy for Finding Unknown Angles
            </h3>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li><strong>Identify the shape</strong> - Is it a parallelogram, rhombus, or trapezium?</li>
              <li><strong>Find parallel sides</strong> - Look for arrow markers</li>
              <li><strong>Apply the correct property:</strong>
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Opposite angles equal (parallelogram/rhombus)</li>
                  <li>Adjacent angles sum to 180° (all three)</li>
                  <li>Co-interior angles sum to 180° (trapezium)</li>
                </ul>
              </li>
              <li><strong>Check your answer</strong> - All angles should sum to 360°</li>
            </ol>
          </div>
        </section>

        {/* Section 2: Parallelogram Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Parallelogram Problems
          </h2>

          {/* Problem 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Problem 1: Using opposite angles
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

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Finding ∠k:</strong> ∠k is opposite to ∠HEF</p>
                  <p><MathText>{'$\\angle k = \\angle HEF = 120°$'}</MathText></p>

                  <p className="mt-2"><strong>Finding ∠m:</strong> ∠m is adjacent to ∠HEF</p>
                  <p><MathText>{'$\\angle m = 180° - 120° = 60°$'}</MathText></p>

                  <p className="mt-2"><strong>Finding ∠j:</strong> ∠j is opposite to ∠m</p>
                  <p><MathText>{'$\\angle j = \\angle m = 60°$'}</MathText></p>

                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Answer: ∠j = 60°, ∠k = 120°, ∠m = 60°
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Check: 120° + 60° + 120° + 60° = 360° ✓</p>
                </div>
              </div>
            )}
          </div>

          {/* Problem 2 - Using adjacent angles */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Problem 2: Using adjacent angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              PQRS is a parallelogram. ∠PQR = 72°. Find ∠a, ∠b, and ∠c.
            </p>

            <MathToolRenderer
              toolName="parallelogramAngles"
              parameters={{
                vertexLabels: ['P', 'Q', 'R', 'S'],
                angles: ['a', '72°', 'b', 'c'],
                highlightAngles: [1],
                showParallelMarkers: true,
                skewAngle: 35,
                caption: 'Find angles a, b, and c'
              }}
            />

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Finding ∠a:</strong> ∠a is adjacent to ∠PQR</p>
                  <p><MathText>{'$\\angle a = 180° - 72° = 108°$'}</MathText></p>

                  <p className="mt-2"><strong>Finding ∠b:</strong> ∠b is opposite to ∠a</p>
                  <p><MathText>{'$\\angle b = \\angle a = 108°$'}</MathText></p>

                  <p className="mt-2"><strong>Finding ∠c:</strong> ∠c is opposite to ∠PQR</p>
                  <p><MathText>{'$\\angle c = \\angle PQR = 72°$'}</MathText></p>

                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Answer: ∠a = 108°, ∠b = 108°, ∠c = 72°
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Check: 108° + 72° + 108° + 72° = 360° ✓</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Rhombus Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Rhombus Problems
          </h2>

          {/* Problem 3 */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Problem 3: Finding multiple angles
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

            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-green-300 dark:border-green-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Finding ∠e:</strong> Opposite angles are equal</p>
                  <p><MathText>{'$\\angle e = \\angle UVW = 135°$'}</MathText></p>

                  <p className="mt-2"><strong>Finding ∠f:</strong> Adjacent angles sum to 180°</p>
                  <p><MathText>{'$\\angle f = 180° - 135° = 45°$'}</MathText></p>

                  <p className="mt-2"><strong>Finding ∠g:</strong> Opposite to ∠f</p>
                  <p><MathText>{'$\\angle g = \\angle f = 45°$'}</MathText></p>

                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Answer: ∠e = 135°, ∠f = 45°, ∠g = 45°
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Check: 135° + 45° + 135° + 45° = 360° ✓</p>
                </div>
              </div>
            )}
          </div>

          {/* Problem 4 - Diamond rhombus */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Problem 4: Diamond-shaped rhombus
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
                caption: 'Find ∠GHF (at vertex H)'
              }}
            />

            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-green-300 dark:border-green-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Find ∠FGH (opposite to ∠HEF)</p>
                  <p><MathText>{'$\\angle FGH = \\angle HEF = 40°$'}</MathText></p>

                  <p className="mt-2"><strong>Step 2:</strong> Find ∠GHE (adjacent to ∠HEF)</p>
                  <p><MathText>{'$\\angle GHE = 180° - 40° = 140°$'}</MathText></p>

                  <p className="mt-2"><strong>Step 3:</strong> Find ∠GHF</p>
                  <p>The diagonal EG divides ∠GHE into two equal parts (rhombus symmetry)</p>
                  <p><MathText>{'$\\angle GHF = 140° \\div 2 = 70°$'}</MathText></p>

                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Answer: <MathText>{'$\\angle GHF = 70°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Trapezium Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Trapezium Problems
          </h2>

          {/* Problem 5 */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
              Problem 5: Using co-interior angles
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

            <button
              onClick={() => setShowSolution5(!showSolution5)}
              className="mt-3 px-4 py-2 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white rounded transition-colors"
            >
              {showSolution5 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution5 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-orange-300 dark:border-orange-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Property:</strong> In a trapezium, co-interior angles sum to 180°</p>
                  <p>∠SPQ and ∠QRS are on the same side (right side) between the parallel lines</p>
                  <p><MathText>{'$\\angle QRS = 180° - 116°$'}</MathText></p>

                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Answer: <MathText>{'$\\angle QRS = 64°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Problem 6 */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
              Problem 6: Multiple unknown angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              WXYZ is a trapezium. WX // ZY. ∠XWZ = 125° and ∠WZY = 78°. Find ∠a and ∠c.
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

            <button
              onClick={() => setShowSolution6(!showSolution6)}
              className="mt-3 px-4 py-2 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white rounded transition-colors"
            >
              {showSolution6 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution6 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-orange-300 dark:border-orange-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Finding ∠a:</strong> Co-interior with ∠WZY (left side)</p>
                  <p><MathText>{'$\\angle a = 180° - 78° = 102°$'}</MathText></p>

                  <p className="mt-2"><strong>Finding ∠c:</strong> Co-interior with ∠XWZ (right side)</p>
                  <p><MathText>{'$\\angle c = 180° - 125° = 55°$'}</MathText></p>

                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Answer: ∠a = 102°, ∠c = 55°
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Check: 78° + 55° + 125° + 102° = 360° ✓</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 5: Challenge Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Challenge Problems
          </h2>

          {/* Challenge 1 - Combined shapes */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
              Challenge 1: Parallelogram with triangle
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              ABCD is a parallelogram. ∠ABC = 118°. Find ∠m and ∠n.
            </p>

            <MathToolRenderer
              toolName="parallelogramAngles"
              parameters={{
                vertexLabels: ['A', 'B', 'C', 'D'],
                angles: ['m', '118°', null, 'n'],
                highlightAngles: [0, 1, 3],
                showParallelMarkers: true,
                skewAngle: 28,
                caption: 'Find ∠m and ∠n'
              }}
            />

            <button
              onClick={() => setShowChallenge1(!showChallenge1)}
              className="mt-3 px-4 py-2 bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white rounded transition-colors"
            >
              {showChallenge1 ? 'Hide' : 'Show'} Solution
            </button>
            {showChallenge1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Finding ∠m:</strong> ∠m is adjacent to ∠ABC</p>
                  <p><MathText>{'$\\angle m = 180° - 118° = 62°$'}</MathText></p>

                  <p className="mt-2"><strong>Finding ∠n:</strong> ∠n is opposite to ∠ABC</p>
                  <p><MathText>{'$\\angle n = \\angle ABC = 118°$'}</MathText></p>

                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Answer: ∠m = 62°, ∠n = 118°
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Challenge 2 - Finding all angles */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
              Challenge 2: Finding all trapezium angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              RSTU is a trapezium. RS // UT. ∠URS = 130° and ∠STU = 75°. Find ∠RST and ∠TUR.
            </p>

            <MathToolRenderer
              toolName="trapeziumAngles"
              parameters={{
                vertexLabels: ['U', 'T', 'S', 'R'],
                angles: ['?', '75°', '?', '130°'],
                highlightAngles: [1, 3],
                showParallelMarkers: true,
                topSideRatio: 0.55,
                caption: 'Find ∠RST and ∠TUR'
              }}
            />

            <button
              onClick={() => setShowChallenge2(!showChallenge2)}
              className="mt-3 px-4 py-2 bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white rounded transition-colors"
            >
              {showChallenge2 ? 'Hide' : 'Show'} Solution
            </button>
            {showChallenge2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Finding ∠TUR:</strong> Co-interior with ∠URS (left side)</p>
                  <p><MathText>{'$\\angle TUR = 180° - 130° = 50°$'}</MathText></p>

                  <p className="mt-2"><strong>Finding ∠RST:</strong> Co-interior with ∠STU (right side)</p>
                  <p><MathText>{'$\\angle RST = 180° - 75° = 105°$'}</MathText></p>

                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    Answer: ∠TUR = 50°, ∠RST = 105°
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Check: 130° + 105° + 75° + 50° = 360° ✓</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Summary Table */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Summary: Which Property to Use?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Shape</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Property</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">When to Use</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3" rowSpan={2}>Parallelogram</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Opposite angles equal</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Given one angle, find the angle diagonally across</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Adjacent angles = 180°</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Given one angle, find the angle next to it</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3" rowSpan={2}>Rhombus</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Same as parallelogram</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">All parallelogram properties apply</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">4 equal sides</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Finding lengths, not angles</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Trapezium</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Co-interior angles = 180°</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Given angle on one side, find angle on same side between parallel lines</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Always <strong>identify the shape first</strong> - parallelogram, rhombus, or trapezium</li>
            <li>Look for <strong>parallel sides</strong> (marked with arrows)</li>
            <li>For <strong>parallelograms and rhombuses</strong>: opposite angles are equal, adjacent angles sum to 180°</li>
            <li>For <strong>trapeziums</strong>: co-interior angles between parallel sides sum to 180°</li>
            <li>Always <strong>check your answer</strong> - all four angles should sum to 360°</li>
            <li>If there are <strong>triangles inside</strong> the shape, use angle sum = 180° for the triangle too</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
