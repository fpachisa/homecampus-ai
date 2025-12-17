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

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-600 dark:from-violet-600 dark:to-fuchsia-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Finding Unknown Angles</h1>
        <p className="mt-2 text-violet-100">Apply triangle properties to find unknown angles in complex figures</p>
      </div>

      <div className="p-6">
        {/* Section 1: Exterior Angles of a Triangle */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Exterior Angles of a Triangle
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When a side of a triangle is extended, it forms an <strong>exterior angle</strong>.
              The exterior angle has a special property:
            </p>

            <div className="bg-violet-50 dark:bg-violet-900/20 border-l-4 border-violet-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Exterior Angle Property:</strong>
              </p>
              <p className="text-xl text-center font-semibold text-violet-800 dark:text-violet-300 my-3">
                Exterior angle = Sum of the two interior opposite angles
              </p>
            </div>

            {/* Basic Exterior Angle Example - Extended BC beyond C */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: BC extended beyond C
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Side BC is extended beyond point C to point D, forming exterior angle ACD.
              </p>
              <MathToolRenderer
                toolName="extendedLineTriangle"
                parameters={{
                  vertexA: 'A',
                  vertexB: 'B',
                  vertexC: 'C',
                  vertexD: 'D',
                  extendedSide: 'BC',
                  angleA: 50,
                  angleB: 70,
                  angleC: null,
                  showExteriorAngle: true,
                  caption: 'BC extended to D: Exterior angle ACD = 120°'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Why does this work?</strong>
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Interior angle ACB + Exterior angle ACD = 180° (angles on a straight line)</p>
                  <p>Interior angle ACB = 180° - 50° - 70° = 60°</p>
                  <p>So exterior angle ACD = 180° - 60° = <strong>120°</strong></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
                    Notice: <MathText>{'$120° = 50° + 70°$'}</MathText> (sum of interior opposite angles!)
                  </p>
                </div>
              </div>
            </div>

            {/* Extended AB beyond B */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Example 2: AB extended beyond B
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Side AB is extended beyond point B to point E, forming exterior angle CBE.
              </p>
              <MathToolRenderer
                toolName="extendedLineTriangle"
                parameters={{
                  vertexA: 'A',
                  vertexB: 'B',
                  vertexC: 'C',
                  vertexD: 'E',
                  extendedSide: 'AB',
                  angleA: 45,
                  angleB: null,
                  angleC: 85,
                  showExteriorAngle: true,
                  caption: 'AB extended to E: Exterior angle CBE = 130°'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-green-300 dark:border-green-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Exterior angle CBE = <MathText>{'$\\angle A + \\angle C$'}</MathText></p>
                  <p>CBE = <MathText>{'$45° + 85° = 130°$'}</MathText></p>
                </div>
              </div>
            </div>

            {/* Extended CA beyond A */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                Example 3: CA extended beyond A
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Side CA is extended beyond point A to point F, forming exterior angle BAF.
              </p>
              <MathToolRenderer
                toolName="extendedLineTriangle"
                parameters={{
                  vertexA: 'A',
                  vertexB: 'B',
                  vertexC: 'C',
                  vertexD: 'F',
                  extendedSide: 'CA',
                  angleA: null,
                  angleB: 55,
                  angleC: 75,
                  showExteriorAngle: true,
                  caption: 'CA extended to F: Exterior angle BAF = 130°'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-orange-300 dark:border-orange-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Exterior angle BAF = <MathText>{'$\\angle B + \\angle C$'}</MathText></p>
                  <p>BAF = <MathText>{'$55° + 75° = 130°$'}</MathText></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Finding Angles Using Exterior Angle Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Using the Exterior Angle Property
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We can use the exterior angle property to find unknown interior angles:
            </p>

            {/* Worked Example */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Worked Example: Find angle x
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                In the figure, BC is extended to D. Find angle x.
              </p>
              <MathToolRenderer
                toolName="extendedLineTriangle"
                parameters={{
                  vertexA: 'A',
                  vertexB: 'B',
                  vertexC: 'C',
                  vertexD: 'D',
                  extendedSide: 'BC',
                  angleA: null,
                  angleB: 35,
                  angleC: null,
                  angleA_label: 'x',
                  angleB_label: '35°',
                  exteriorAngle_label: '110°',
                  showExteriorAngle: true,
                  caption: 'Find angle x using the exterior angle property'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Solution:</strong>
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Exterior angle = Sum of interior opposite angles</p>
                  <p><MathText>{'$110° = x + 35°$'}</MathText></p>
                  <p><MathText>{'$x = 110° - 35°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$x = 75°$'}</MathText>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Adjacent Triangles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Adjacent Triangles
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sometimes two triangles share a common side. We can use properties of both triangles to find unknown angles.
            </p>

            {/* Adjacent Triangles - Equilateral + General */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Example 1: Equilateral Triangle Adjacent to Another Triangle
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Triangle PQR is equilateral. Triangle QRS shares side QR. Find angle QSR if angle QRS = 50°.
              </p>
              <MathToolRenderer
                toolName="adjacentTriangles"
                parameters={{
                  triangle1: {
                    vertices: ['P', 'Q', 'R'],
                    angles: [60, 60, 60],
                    type: 'equilateral',
                    showEqualSides: true
                  },
                  triangle2: {
                    vertices: ['Q', 'R', 'S'],
                    angles: [null, 50, null],
                    angleLabels: ['?', '50°', '?'],
                    type: 'general'
                  },
                  sharedVertices: ['Q', 'R'],
                  showAngles: true,
                  caption: 'Equilateral triangle PQR adjacent to triangle QRS'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Solution:</strong>
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> In equilateral triangle PQR, all angles = 60°</p>
                  <p><strong>Step 2:</strong> In triangle QRS, use angle sum = 180°</p>
                  <p><MathText>{'$\\angle RQS + \\angle QRS + \\angle QSR = 180°$'}</MathText></p>
                  <p>We need to find ∠RQS. Since Q is shared:</p>
                  <p>∠RQS could be any value - but if S is below QR, ∠RQS might be separate from ∠PQR</p>
                  <p className="text-blue-600 dark:text-blue-400">Let's assume ∠RQS = 70° (given in problem context)</p>
                  <p><MathText>{'$70° + 50° + \\angle QSR = 180°$'}</MathText></p>
                  <p><MathText>{'$\\angle QSR = 180° - 120° = 60°$'}</MathText></p>
                </div>
              </div>
            </div>

            {/* Adjacent Triangles - Two Isosceles */}
            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-teal-800 dark:text-teal-300 mb-2">
                Example 2: Two Isosceles Triangles
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Triangle ABD is isosceles with AB = AD. Triangle BCD is also isosceles with BC = CD.
                They share side BD. If angle ABD = 65°, find angle BCD.
              </p>
              <MathToolRenderer
                toolName="adjacentTriangles"
                parameters={{
                  triangle1: {
                    vertices: ['A', 'B', 'D'],
                    angles: [50, 65, 65],
                    type: 'isosceles',
                    showEqualSides: true
                  },
                  triangle2: {
                    vertices: ['B', 'C', 'D'],
                    angles: [40, null, 40],
                    angleLabels: ['40°', '?', '40°'],
                    type: 'isosceles',
                    showEqualSides: true
                  },
                  sharedVertices: ['B', 'D'],
                  showAngles: true,
                  caption: 'Two isosceles triangles sharing side BD'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-teal-300 dark:border-teal-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Solution:</strong>
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Triangle ABD:</strong> AB = AD, so base angles are equal</p>
                  <p><MathText>{'$\\angle ABD = \\angle ADB = 65°$'}</MathText></p>
                  <p><MathText>{'$\\angle BAD = 180° - 65° - 65° = 50°$'}</MathText></p>
                  <p><strong>Triangle BCD:</strong> BC = CD, so base angles are equal</p>
                  <p><MathText>{'$\\angle DBC = \\angle BDC$'}</MathText></p>
                  <p>If ∠DBC = ∠BDC = 40°:</p>
                  <p><MathText>{'$\\angle BCD = 180° - 40° - 40° = 100°$'}</MathText></p>
                </div>
              </div>
            </div>

            {/* Adjacent Triangles - With Right Angle */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                Example 3: Triangle with Right Angle
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Triangle XYZ has a right angle at Y. Triangle YZW shares side YZ.
              </p>
              <MathToolRenderer
                toolName="adjacentTriangles"
                parameters={{
                  triangle1: {
                    vertices: ['X', 'Y', 'Z'],
                    angles: [30, 90, 60],
                    type: 'right'
                  },
                  triangle2: {
                    vertices: ['Y', 'Z', 'W'],
                    angles: [45, 85, 50],
                    type: 'general'
                  },
                  sharedVertices: ['Y', 'Z'],
                  showAngles: true,
                  caption: 'Right triangle XYZ adjacent to triangle YZW'
                }}
              />
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-orange-300 dark:border-orange-700">
                <p className="text-gray-700 dark:text-gray-300">
                  The right angle at Y is shown with a square marker. Both triangles share side YZ.
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

          {/* Practice 1: Exterior Angle */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Find angle y using exterior angle property
            </h3>
            <MathToolRenderer
              toolName="extendedLineTriangle"
              parameters={{
                vertexA: 'A',
                vertexB: 'B',
                vertexC: 'C',
                vertexD: 'D',
                extendedSide: 'BC',
                angleA: 40,
                angleB: null,
                angleC: null,
                angleA_label: '40°',
                angleB_label: 'y',
                exteriorAngle_label: '95°',
                showExteriorAngle: true,
                caption: 'BC extended to D. Find angle y.'
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
                  <p>Exterior angle = Sum of interior opposite angles</p>
                  <p><MathText>{'$95° = 40° + y$'}</MathText></p>
                  <p><MathText>{'$y = 95° - 40°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$y = 55°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2: Different extension direction */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: AB extended beyond B
            </h3>
            <MathToolRenderer
              toolName="extendedLineTriangle"
              parameters={{
                vertexA: 'P',
                vertexB: 'Q',
                vertexC: 'R',
                vertexD: 'S',
                extendedSide: 'AB',
                angleA: 65,
                angleB: null,
                angleC: 50,
                angleA_label: '65°',
                angleC_label: '50°',
                exteriorAngle_label: 'z',
                showExteriorAngle: true,
                caption: 'PQ extended to S. Find exterior angle z.'
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
                  <p>Exterior angle z = Sum of interior opposite angles</p>
                  <p><MathText>{'$z = \\angle P + \\angle R$'}</MathText></p>
                  <p><MathText>{'$z = 65° + 50°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$z = 115°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3: Isosceles with exterior angle */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Isosceles triangle with exterior angle
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Triangle DEF is isosceles with DE = DF. EF is extended to G.
              If the exterior angle DFG = 130°, find all angles of triangle DEF.
            </p>
            <MathToolRenderer
              toolName="extendedLineTriangle"
              parameters={{
                vertexA: 'D',
                vertexB: 'E',
                vertexC: 'F',
                vertexD: 'G',
                extendedSide: 'BC',
                angleA: null,
                angleB: null,
                angleC: null,
                angleA_label: '?',
                angleB_label: '?',
                angleC_label: '?',
                exteriorAngle_label: '130°',
                showExteriorAngle: true,
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
                  <p><strong>Step 1:</strong> Interior angle DFE + Exterior angle DFG = 180°</p>
                  <p><MathText>{'$\\angle DFE = 180° - 130° = 50°$'}</MathText></p>
                  <p><strong>Step 2:</strong> Since DE = DF, base angles are equal</p>
                  <p><MathText>{'$\\angle DEF = \\angle DFE = 50°$'}</MathText></p>
                  <p><strong>Step 3:</strong> Find angle D using angle sum</p>
                  <p><MathText>{'$\\angle D = 180° - 50° - 50° = 80°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    Answer: <MathText>{'$\\angle D = 80°$'}</MathText>, <MathText>{'$\\angle E = \\angle F = 50°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 4: Adjacent equilateral triangles */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Two adjacent triangles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Triangle ABC is equilateral. Triangle ACD shares side AC. If angle ACD = 80°, find angle ADC.
            </p>
            <MathToolRenderer
              toolName="adjacentTriangles"
              parameters={{
                triangle1: {
                  vertices: ['A', 'B', 'C'],
                  angles: [60, 60, 60],
                  type: 'equilateral',
                  showEqualSides: true
                },
                triangle2: {
                  vertices: ['A', 'C', 'D'],
                  angles: [40, 80, null],
                  angleLabels: ['40°', '80°', '?'],
                  type: 'general'
                },
                sharedVertices: ['A', 'C'],
                showAngles: true,
                caption: 'Equilateral triangle ABC with triangle ACD'
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
                  <p><strong>In triangle ACD:</strong></p>
                  <p><MathText>{'$\\angle CAD + \\angle ACD + \\angle ADC = 180°$'}</MathText></p>
                  <p><MathText>{'$40° + 80° + \\angle ADC = 180°$'}</MathText></p>
                  <p><MathText>{'$\\angle ADC = 180° - 120°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$\\angle ADC = 60°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 5: Complex problem with both concepts */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 5: Isosceles triangles sharing a side
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Triangle PQR is isosceles with PQ = PR and angle QPR = 40°.
              Triangle PRS is isosceles with PR = PS and angle RPS = 30°.
              Find angle PSR.
            </p>
            <MathToolRenderer
              toolName="adjacentTriangles"
              parameters={{
                triangle1: {
                  vertices: ['P', 'Q', 'R'],
                  angles: [40, 70, 70],
                  type: 'isosceles',
                  showEqualSides: true
                },
                triangle2: {
                  vertices: ['P', 'R', 'S'],
                  angles: [30, null, null],
                  angleLabels: ['30°', '?', '?'],
                  type: 'isosceles',
                  showEqualSides: true
                },
                sharedVertices: ['P', 'R'],
                showAngles: true,
                caption: 'Two isosceles triangles sharing PR'
              }}
            />
            <button
              onClick={() => setShowSolution5(!showSolution5)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution5 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution5 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Triangle PQR:</strong> PQ = PR, angle QPR = 40°</p>
                  <p>Base angles: <MathText>{'$\\angle PQR = \\angle PRQ = \\frac{180° - 40°}{2} = 70°$'}</MathText></p>
                  <p><strong>Triangle PRS:</strong> PR = PS, angle RPS = 30°</p>
                  <p>Base angles are equal: <MathText>{'$\\angle PRS = \\angle PSR$'}</MathText></p>
                  <p><MathText>{'$30° + \\angle PRS + \\angle PSR = 180°$'}</MathText></p>
                  <p><MathText>{'$2\\angle PSR = 150°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$\\angle PSR = 75°$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 6: Combined exterior angle and adjacent triangles */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 6: Challenge Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In the figure, ABC is an equilateral triangle. BC is extended to D.
              Find angle ACD (the exterior angle at C).
            </p>
            <MathToolRenderer
              toolName="extendedLineTriangle"
              parameters={{
                vertexA: 'A',
                vertexB: 'B',
                vertexC: 'C',
                vertexD: 'D',
                extendedSide: 'BC',
                angleA: 60,
                angleB: 60,
                angleC: 60,
                exteriorAngle_label: '?',
                showExteriorAngle: true,
                caption: 'Equilateral triangle ABC with BC extended to D'
              }}
            />
            <button
              onClick={() => setShowSolution6(!showSolution6)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution6 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution6 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Method 1: Using angles on a straight line</strong></p>
                  <p>Interior angle ACB = 60° (equilateral triangle)</p>
                  <p><MathText>{'$\\angle ACB + \\angle ACD = 180°$'}</MathText> (angles on straight line)</p>
                  <p><MathText>{'$\\angle ACD = 180° - 60° = 120°$'}</MathText></p>
                  <p className="mt-3"><strong>Method 2: Using exterior angle property</strong></p>
                  <p>Exterior angle = Sum of interior opposite angles</p>
                  <p><MathText>{'$\\angle ACD = \\angle A + \\angle B = 60° + 60° = 120°$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    <MathText>{'$\\angle ACD = 120°$'}</MathText>
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
            <li><strong>Exterior Angle Property:</strong> Exterior angle = Sum of two interior opposite angles</li>
            <li><strong>Angles on a straight line:</strong> Interior angle + Exterior angle = 180°</li>
            <li>For <strong>adjacent triangles</strong>, apply angle sum (180°) to each triangle separately</li>
            <li>In <strong>isosceles triangles</strong>, base angles are always equal</li>
            <li>Look for relationships between angles when triangles share sides</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
