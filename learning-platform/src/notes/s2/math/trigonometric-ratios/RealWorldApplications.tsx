import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function RealWorldApplications() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-600 dark:to-cyan-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Real-World Applications of Trigonometry</h1>
        <p className="mt-2 text-teal-100">Using trigonometric ratios to solve practical problems</p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-b-lg">

        {/* Section 1: Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Trigonometry in the Real World
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Trigonometry isn't just abstract mathematics - it's a powerful tool used every day by professionals around the world to solve real problems!
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-600 mb-6">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4">
                🌍 Who Uses Trigonometry?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">🏗️ Civil Engineers</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Calculate heights of buildings, slopes of ramps, and structural angles</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">🛫 Pilots & Navigators</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Determine flight paths, distances, and approach angles</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">📐 Surveyors</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Measure land areas and distances without direct measurement</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">🏛️ Architects</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Design buildings with precise angles and proportions</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              In this section, we'll learn about <strong>angles of elevation and depression</strong> and how to apply trigonometry to solve real-world problems involving heights, distances, and angles.
            </p>
          </div>
        </section>

        {/* Section 2: Angles of Elevation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Angle of Elevation
          </h2>

          <div className="mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-5 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">
                📐 What is an Angle of Elevation?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The <strong>angle of elevation</strong> is the angle between the horizontal line of sight and the line of sight <strong>UP</strong> to an object above you.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Think of it as:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                  <li>You're standing on the ground looking UP at a bird in a tree</li>
                  <li>You're at the bottom of a building looking UP at the top</li>
                  <li>You're looking UP at a kite in the sky</li>
                </ul>
                <p className="text-green-700 dark:text-green-300 font-semibold mt-3">
                  Key word: <strong>UP</strong> - the object is ABOVE you
                </p>
              </div>
            </div>

            {/* Visual Diagram */}
            <div className="my-6">
              <MathToolRenderer
                toolName="elevationDepression"
                parameters={{
                  type: "elevation",
                  angle: 33,
                  height: "h",
                  distance: "d",
                  observerLabel: "Observer",
                  targetLabel: "Top of building",
                  showTriangle: true,
                  showRightAngle: true,
                  highlightSide: "height"
                }}
                caption="Angle of Elevation: Observer on ground looking UP at the top of building"
              />
            </div>

            {/* Worked Example 1 */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Example 1: Finding Height Using Angle of Elevation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A person standing 38 m from the foot of a building looks up at the top. The angle of elevation is 33°. Calculate the height of the building.
              </p>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Step 1: Draw and label diagram</strong></p>
                <ul className="list-none ml-4 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Horizontal distance from building = 38 m (adjacent to angle)</li>
                  <li>• Height of building = h m (opposite to angle)</li>
                  <li>• Angle of elevation = 33°</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Step 2: Choose ratio</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  Opposite (height) & Adjacent (38 m) → use TANGENT
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Step 3: Set up equation</strong></p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>tan 33° = h / 38</MathText></p>
                  <p><MathText>h = 38 × tan 33°</MathText></p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Step 4: Calculate</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  h = 38 × 0.6494 = 24.68 m
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-2 border-green-500 dark:border-green-600">
                <p className="text-green-800 dark:text-green-300 font-bold">
                  ✅ Answer: The height of the building is 24.7 m (to 3 s.f.)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Angles of Depression */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Angle of Depression
          </h2>

          <div className="mb-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-5 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                📐 What is an Angle of Depression?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The <strong>angle of depression</strong> is the angle between the horizontal line of sight and the line of sight <strong>DOWN</strong> to an object below you.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-purple-300 dark:border-purple-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Think of it as:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                  <li>You're at the top of a cliff looking DOWN at a boat in the sea</li>
                  <li>You're on a tower looking DOWN at a person on the ground</li>
                  <li>You're in a plane looking DOWN at a city</li>
                </ul>
                <p className="text-purple-700 dark:text-purple-300 font-semibold mt-3">
                  Key word: <strong>DOWN</strong> - the object is BELOW you
                </p>
              </div>
            </div>

            {/* Visual Diagram */}
            <div className="my-6">
              <MathToolRenderer
                toolName="elevationDepression"
                parameters={{
                  type: "depression",
                  angle: 62,
                  height: "h",
                  distance: "d",
                  observerLabel: "Observer on cliff",
                  targetLabel: "Boat",
                  showTriangle: true,
                  showRightAngle: true,
                  highlightSide: "distance"
                }}
                caption="Angle of Depression: Observer on cliff looking DOWN at boat"
              />
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                🔑 Key Insight: Alternate Angles
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Here's something important: The <strong>angle of depression from the top</strong> equals the <strong>angle of elevation from the bottom</strong>! They are <strong>alternate angles</strong> (formed by parallel horizontal lines).
              </p>
              <p className="text-purple-700 dark:text-purple-300 font-semibold">
                This means you can solve depression problems using the same triangle at ground level!
              </p>
            </div>

            {/* Worked Example 2 */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Example 2: Using Angle of Depression
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                From the top of a cliff 130 m high, the angle of depression to a boat at sea is 62°. How far is the boat from the foot of the cliff?
              </p>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-purple-300 dark:border-purple-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Step 1: Understand the setup</strong></p>
                <ul className="list-none ml-4 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Height of cliff = 130 m (opposite to the angle at ground level)</li>
                  <li>• Distance to boat = d m (adjacent to the angle at ground level)</li>
                  <li>• Angle of depression = 62° (which equals angle of elevation at bottom)</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-purple-300 dark:border-purple-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Step 2: Use the ground-level triangle</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  Opposite (130 m) & Adjacent (d) → use TANGENT
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-purple-300 dark:border-purple-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Step 3: Set up equation</strong></p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>tan 62° = 130 / d</MathText></p>
                  <p><MathText>d = 130 / tan 62°</MathText></p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-purple-300 dark:border-purple-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Step 4: Calculate</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  d = 130 ÷ 1.8807 = 69.12 m
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border-2 border-purple-500 dark:border-purple-600">
                <p className="text-purple-800 dark:text-purple-300 font-bold">
                  ✅ Answer: The boat is 69.1 m from the foot of the cliff (to 3 s.f.)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Comparison */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            📊 Elevation vs. Depression: Quick Comparison
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border-2 border-indigo-400 dark:border-indigo-600">
              <thead>
                <tr className="bg-indigo-100 dark:bg-indigo-900/40">
                  <th className="border border-indigo-300 dark:border-indigo-600 p-3 text-gray-800 dark:text-gray-100">Feature</th>
                  <th className="border border-indigo-300 dark:border-indigo-600 p-3 text-gray-800 dark:text-gray-100">Angle of Elevation</th>
                  <th className="border border-indigo-300 dark:border-indigo-600 p-3 text-gray-800 dark:text-gray-100">Angle of Depression</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="bg-green-50 dark:bg-green-900/10">
                  <td className="border border-indigo-300 dark:border-indigo-600 p-3 font-semibold">Direction</td>
                  <td className="border border-indigo-300 dark:border-indigo-600 p-3">Looking UP ⬆️</td>
                  <td className="border border-indigo-300 dark:border-indigo-600 p-3">Looking DOWN ⬇️</td>
                </tr>
                <tr className="bg-purple-50 dark:bg-purple-900/10">
                  <td className="border border-indigo-300 dark:border-indigo-600 p-3 font-semibold">Observer Position</td>
                  <td className="border border-indigo-300 dark:border-indigo-600 p-3">Below the object</td>
                  <td className="border border-indigo-300 dark:border-indigo-600 p-3">Above the object</td>
                </tr>
                <tr className="bg-blue-50 dark:bg-blue-900/10">
                  <td className="border border-indigo-300 dark:border-indigo-600 p-3 font-semibold">Example</td>
                  <td className="border border-indigo-300 dark:border-indigo-600 p-3">Person on ground looking at top of tower</td>
                  <td className="border border-indigo-300 dark:border-indigo-600 p-3">Person on cliff looking at boat below</td>
                </tr>
                <tr className="bg-yellow-50 dark:bg-yellow-900/10">
                  <td className="border border-indigo-300 dark:border-indigo-600 p-3 font-semibold">Relationship</td>
                  <td className="border border-indigo-300 dark:border-indigo-600 p-3" colSpan={2}>Angle of depression from top = Angle of elevation from bottom (alternate angles)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice Problems
          </h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Flagpole Height
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A point A on level ground is 2.8 m away from the foot Q of a flagpole PQ. Given that AP makes an angle of 54° with the horizontal, find the height of the flagpole.
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Given:</strong> Horizontal distance = 2.8 m, Angle of elevation = 54°</p>
                  <p><strong>Find:</strong> Height of flagpole (opposite)</p>
                  <p><strong>Ratio:</strong> tan 54° = height / 2.8</p>
                  <p><strong>Solve:</strong> height = 2.8 × tan 54°</p>
                  <p>height = 2.8 × 1.3764 = 3.854 m</p>
                  <p className="text-green-700 dark:text-green-300 font-semibold">
                    Answer: The flagpole is 3.85 m high (to 3 s.f.)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Tower and Distance
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The height of a tower TF is 40 m. Point A is on level ground such that AT makes an angle of 37° with the horizontal. Find the distance FA.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Given:</strong> Height = 40 m (opposite), Angle = 37°</p>
                  <p><strong>Find:</strong> Distance FA (adjacent)</p>
                  <p><strong>Ratio:</strong> tan 37° = 40 / FA</p>
                  <p><strong>Rearrange:</strong> FA = 40 / tan 37°</p>
                  <p>FA = 40 ÷ 0.7536 = 53.08 m</p>
                  <p className="text-green-700 dark:text-green-300 font-semibold">
                    Answer: FA = 53.1 m (to 3 s.f.)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Ladder Against Wall
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A ladder of length 2.5 m leans against a window of a building. When the ladder leans against the top edge of the window, it forms an angle of 55° with the ground. When it leans against the lower edge of the same window, it forms an angle of 38° with the ground. Find the height of the window, giving your answer in centimeters.
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Position 1 (top edge):</strong> sin 55° = h₁ / 2.5</p>
                  <p>h₁ = 2.5 × sin 55° = 2.5 × 0.8192 = 2.048 m</p>
                  <p><strong>Position 2 (bottom edge):</strong> sin 38° = h₂ / 2.5</p>
                  <p>h₂ = 2.5 × sin 38° = 2.5 × 0.6157 = 1.539 m</p>
                  <p><strong>Window height:</strong> h₁ - h₂ = 2.048 - 1.539 = 0.509 m = 50.9 cm</p>
                  <p className="text-green-700 dark:text-green-300 font-semibold">
                    Answer: The window is 50.9 cm high (to 3 s.f.)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Angle of Depression
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              From the top of a building 32 m high, RHS is another building and PH is a horizontal sky bridge linking the buildings. Given that angle RPH = 40.7° and angle HPS = 22.4°, calculate the height of building RHS.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <em>Hint: Draw a diagram. RHS is taller, with R at the top and S at the bottom.</em>
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Setup:</strong> Building PQ = 32 m (given). Bridge is at P (32 m high).</p>
                  <p><strong>Looking UP to R:</strong> Angle of elevation = 40.7°</p>
                  <p>Height above bridge: tan 40.7° = RH / PH</p>
                  <p><strong>Looking DOWN to S:</strong> Angle of depression = 22.4°</p>
                  <p>Height below bridge: tan 22.4° = HS / PH</p>
                  <p className="text-blue-700 dark:text-blue-300">
                    This is a complex multi-step problem involving two triangles. The total height of RHS = height above bridge + 32 m + height below bridge.
                  </p>
                  <p>Using the relationships and solving: Height of RHS ≈ 98.8 m</p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 5 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 5: Tree Height
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Two points P and Q are 10 m apart on level ground, due West of the foot B of a tree TB. Given that angle TPB = 23° and angle TQB = 32°, find the height of the tree.
            </p>
            <button
              onClick={() => setShowSolution5(!showSolution5)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution5 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution5 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Let:</strong> Height of tree = h, Distance PB = x, then QB = x - 10</p>
                  <p><strong>From P:</strong> tan 23° = h / x</p>
                  <p><strong>From Q:</strong> tan 32° = h / (x - 10)</p>
                  <p><strong>From first equation:</strong> x = h / tan 23°</p>
                  <p><strong>Substitute into second:</strong> tan 32° = h / (h/tan 23° - 10)</p>
                  <p>Solving this equation gives h ≈ 8.43 m</p>
                  <p className="text-green-700 dark:text-green-300 font-semibold">
                    Answer: The tree is approximately 8.43 m tall
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 6: Problem-Solving Strategy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            🎯 General Problem-Solving Strategy
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-600">
            <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
              <li className="pl-2">
                <strong>Read carefully</strong> - Understand what's given and what you need to find
              </li>
              <li className="pl-2">
                <strong>Draw a clear diagram</strong> - Label all known values and the unknown
              </li>
              <li className="pl-2">
                <strong>Identify the right triangle</strong> - Sometimes there are multiple triangles
              </li>
              <li className="pl-2">
                <strong>Label sides relative to the angle</strong> - Opposite, adjacent, hypotenuse
              </li>
              <li className="pl-2">
                <strong>Choose the correct ratio</strong> - Use SOH-CAH-TOA
              </li>
              <li className="pl-2">
                <strong>Set up the equation</strong> - Write it out clearly before calculating
              </li>
              <li className="pl-2">
                <strong>Solve and calculate</strong> - Use your calculator correctly
              </li>
              <li className="pl-2">
                <strong>Check reasonableness</strong> - Does your answer make sense?
              </li>
              <li className="pl-2">
                <strong>Include units</strong> - Always state units in your final answer
              </li>
            </ol>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            🎯 Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Angle of elevation</strong> - looking UP from horizontal to an object above</li>
            <li><strong>Angle of depression</strong> - looking DOWN from horizontal to an object below</li>
            <li>Angle of depression from top = Angle of elevation from bottom (alternate angles)</li>
            <li>Always draw a clear diagram first - this is crucial for real-world problems</li>
            <li>Identify which triangle to work with (sometimes there are multiple)</li>
            <li>Label all sides relative to the angle you're using</li>
            <li>Common scenarios: heights of buildings/towers, distances from objects, ladder problems</li>
            <li>Tangent is often most useful (uses opposite and adjacent, not hypotenuse)</li>
            <li>Check if your answer makes sense in the context of the problem</li>
            <li>Trigonometry is used daily by engineers, architects, surveyors, pilots, and many others!</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
