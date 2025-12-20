import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function FaceArea() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-600 dark:to-cyan-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Finding the Area of One Face</h1>
        <p className="text-lg text-teal-100">Learn to find face areas using volume and other dimensions</p>
      </div>

      <div className="space-y-10">
        {/* Section 1: Base Area from Volume */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-300">1. Finding Base Area from Volume</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Relationship</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              We know that: <strong>Volume = Length × Breadth × Height</strong>
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Since Length × Breadth = Base Area, we can write:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">
                <strong>Volume = Base Area × Height</strong>
              </p>
              <p className="text-lg text-teal-600 dark:text-teal-400">
                <strong>Base Area = Volume ÷ Height</strong>
              </p>
            </div>
          </div>

          {/* Visual Explanation */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Understanding the Relationship</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Think of stacking layers. Each layer has an area equal to the base. The volume is the base area times the number of layers (height).
            </p>
            <MathToolRenderer
              toolName="unitCubeGrid"
              parameters={{
                cubesAlong: 5,
                cubesDeep: 4,
                cubesHigh: 3,
                unit: "cm³",
                showDimensions: true,
                highlightLayer: 1,
                caption: "Base area = 5 × 4 = 20 cm². With 3 layers, Volume = 20 × 3 = 60 cm³"
              }}
            />
          </div>

          {/* Example 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Finding Base Area</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A rectangular container has a volume of 960 m³ and a height of 8 m. Find the base area of the container.
            </p>
            <MathToolRenderer
              toolName="cuboid"
              parameters={{
                length: "",
                width: "",
                height: "8 m",
                caption: "Volume = 960 m³, Height = 8 m"
              }}
            />
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 transition-colors"
            >
              {showSolution1 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Volume = Base Area × Height
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Base Area = Volume ÷ Height
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 960 ÷ 8
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 120 m²
                </p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  The base area of the container is 120 m².
                </p>
              </div>
            )}
          </div>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h3 className="font-bold mb-4 text-yellow-800 dark:text-yellow-300">Practice: Try This!</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A cuboid has a volume of 750 cm³ and a height of 5 cm. Find its base area.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 transition-colors"
            >
              {showSolution2 ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Base Area = Volume ÷ Height = 750 ÷ 5 = <strong>150 cm²</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Face Area of Cuboid */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-300">2. Finding Face Area of a Cuboid</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Different Faces of a Cuboid</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              A cuboid has 6 faces. We can find the area of any face by dividing the volume by the perpendicular dimension:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Top/Bottom Face</h4>
                <p className="text-gray-800 dark:text-gray-200 text-sm">
                  Area = Length × Breadth
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-sm">
                  = Volume ÷ Height
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Front/Back Face</h4>
                <p className="text-gray-800 dark:text-gray-200 text-sm">
                  Area = Length × Height
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-sm">
                  = Volume ÷ Breadth
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Left/Right Face</h4>
                <p className="text-gray-800 dark:text-gray-200 text-sm">
                  Area = Breadth × Height
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-sm">
                  = Volume ÷ Length
                </p>
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Finding a Shaded Face Area</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The volume of a cuboid is 3840 cm³. The breadth of the cuboid is 10 cm. What is the area of the shaded face?
            </p>
            <MathToolRenderer
              toolName="cuboid"
              parameters={{
                length: "",
                width: "10 cm",
                height: "",
                caption: "Volume = 3840 cm³, Breadth = 10 cm. Find the shaded face area."
              }}
            />
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 transition-colors"
            >
              {showSolution3 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Volume = Length × Breadth × Height = 3840 cm³
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  We can write: Volume = Breadth × Area of shaded face
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Area of shaded face = Volume ÷ Breadth
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 3840 ÷ 10
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 384 cm²
                </p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  The area of the shaded face is 384 cm².
                </p>
              </div>
            )}
          </div>

          {/* Example 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: Another Face Area Problem</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The volume of a cuboid is 1190 cm³. The area of its shaded face is 85 cm². Find the length of the cuboid.
            </p>
            <MathToolRenderer
              toolName="cuboid"
              parameters={{
                length: "?",
                width: "",
                height: "",
                shadedFace: "side",
                caption: "Volume = 1190 cm³, Shaded face area = 85 cm²"
              }}
            />
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 transition-colors"
            >
              {showSolution4 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Volume = Length × Area of shaded face
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Length of cuboid = Volume ÷ Area of shaded face
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <MathText>{'$= \\frac{1190}{85}$'}</MathText>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 14 cm
                </p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  The length of the cuboid is 14 cm.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Face Area of Cube */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-300">3. Finding Face Area of a Cube</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Two-Step Process</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              To find the face area of a cube when given its volume:
            </p>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 1:</strong> Find the edge length using cube root
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  Edge = <MathText>{'$\\sqrt[3]{\\text{Volume}}$'}</MathText>
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 2:</strong> Calculate the face area
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  Face Area = Edge × Edge = Edge²
                </p>
              </div>
            </div>
          </div>

          {/* Example 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 4: Face Area of a Cube</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The volume of a cube is 5832 cm³. Find the area of a square face of the cube.
            </p>
            <MathToolRenderer
              toolName="cuboid"
              parameters={{
                length: "?",
                width: "?",
                height: "?",
                caption: "A cube with volume 5832 cm³"
              }}
            />
            <button
              onClick={() => setShowSolution5(!showSolution5)}
              className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 transition-colors"
            >
              {showSolution5 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution5 && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Volume = 5832 cm³
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Step 1:</strong> Find the edge length
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Length = <MathText>{'$\\sqrt[3]{5832}$'}</MathText>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Since 18 × 18 × 18 = 5832
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Edge = 18 cm
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-3">
                  <strong>Step 2:</strong> Find the face area
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Area of a square face = Edge × Edge
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 18 × 18
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 324 cm²
                </p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  The area of a square face of the cube is 324 cm².
                </p>
              </div>
            )}
          </div>

          {/* Quick Reference: More Perfect Cubes */}
          <div className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/40 dark:to-cyan-900/40 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">Larger Perfect Cubes (Useful Reference)</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-teal-500 dark:bg-teal-600 text-white">
                    <th className="p-3 text-left">Edge</th>
                    <th className="p-3 text-left">Volume (Edge³)</th>
                    <th className="p-3 text-left">Face Area (Edge²)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">11</td>
                    <td className="p-3">1331</td>
                    <td className="p-3">121</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                    <td className="p-3">12</td>
                    <td className="p-3">1728</td>
                    <td className="p-3">144</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">13</td>
                    <td className="p-3">2197</td>
                    <td className="p-3">169</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                    <td className="p-3">14</td>
                    <td className="p-3">2744</td>
                    <td className="p-3">196</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">15</td>
                    <td className="p-3">3375</td>
                    <td className="p-3">225</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                    <td className="p-3">18</td>
                    <td className="p-3">5832</td>
                    <td className="p-3">324</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">20</td>
                    <td className="p-3">8000</td>
                    <td className="p-3">400</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-teal-50 dark:bg-teal-900/30 border-l-4 border-teal-500 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-teal-700 dark:text-teal-300 mb-4">Key Takeaways</h3>
          <ul className="space-y-3 text-gray-800 dark:text-gray-200">
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">1.</span>
              <span><strong>Base Area</strong> = Volume ÷ Height</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">2.</span>
              <span><strong>Face Area of Cuboid</strong> = Volume ÷ (perpendicular dimension)</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">3.</span>
              <span><strong>For Cube Face Area:</strong> First find edge (<MathText>{'$\\sqrt[3]{V}$'}</MathText>), then square it (Edge²)</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">4.</span>
              <span>Remember: Volume has cubic units (cm³), Area has square units (cm²)</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">5.</span>
              <span>Use the calculator for cube roots of non-perfect cubes</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
