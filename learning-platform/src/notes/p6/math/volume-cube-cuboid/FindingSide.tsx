import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function FindingSide() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);
  const [showSolution6, setShowSolution6] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Finding the Side of Cube or Cuboid</h1>
        <p className="text-lg text-purple-100">Learn how to find unknown dimensions when given the volume</p>
      </div>

      <div className="space-y-10">
        {/* Section 1: Volume Formula Basics */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">1. Volume Formula Basics</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What is Volume?</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <strong>Volume</strong> is the amount of space a solid takes up. We measure volume in <strong>cubic units</strong> like cm³ or m³.
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              Think of it as counting how many unit cubes can fit inside the solid!
            </p>
          </div>

          {/* Unit Cube Grid Visualization */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Visualizing Volume with Unit Cubes</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A cuboid that is 4 cm long, 3 cm wide, and 2 cm high contains 4 × 3 × 2 = 24 unit cubes.
            </p>
            <MathToolRenderer
              toolName="unitCubeGrid"
              parameters={{
                cubesAlong: 4,
                cubesDeep: 3,
                cubesHigh: 2,
                unit: "cm³",
                showDimensions: true,
                caption: "Volume = 4 × 3 × 2 = 24 cm³"
              }}
            />
          </div>

          {/* Key Formulas */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">Key Formulas</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Volume of Cube</h4>
                <p className="text-gray-800 dark:text-gray-200">
                  Volume = Side × Side × Side
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  Volume = Side³
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Volume of Cuboid</h4>
                <p className="text-gray-800 dark:text-gray-200">
                  Volume = Length × Breadth × Height
                </p>
              </div>
            </div>
          </div>

          {/* Example 1: Calculate Volume */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Find the Volume</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Find the volume of a cuboid with length 8 m, breadth 4 m, and height 3 m.
            </p>
            <MathToolRenderer
              toolName="cuboid"
              parameters={{
                length: "4 m",
                width: "8 m",
                height: "3 m",
                caption: "Cuboid: 8 m × 4 m × 3 m"
              }}
            />
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 transition-colors"
            >
              {showSolution1 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Volume of cuboid = Length × Breadth × Height
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 8 × 4 × 3
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 96 m³
                </p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  The volume of the cuboid is 96 m³.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Finding Unknown Dimension */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">2. Finding an Unknown Dimension</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Insight</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Since <strong>Volume = Length × Breadth × Height</strong>, we can rearrange to find any unknown dimension:
            </p>
            <div className="space-y-2 text-gray-800 dark:text-gray-200">
              <p><strong>Height</strong> = Volume ÷ (Length × Breadth)</p>
              <p><strong>Breadth</strong> = Volume ÷ (Length × Height)</p>
              <p><strong>Length</strong> = Volume ÷ (Breadth × Height)</p>
            </div>
          </div>

          {/* Example 2: Finding Height */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Finding the Height</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A cuboid has a volume of 24 cm³. Its length is 4 cm and its breadth is 3 cm. Find its height.
            </p>
            <MathToolRenderer
              toolName="cuboid"
              parameters={{
                length: "3 cm",
                width: "4 cm",
                height: "?",
                highlightElement: "height",
                caption: "Volume = 24 cm³, Find the height"
              }}
            />
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 transition-colors"
            >
              {showSolution2 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Volume of cuboid = 24 cm³
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Height of cuboid = Volume ÷ (Length × Breadth)
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <MathText>{'$= \\frac{24}{4 \\times 3}$'}</MathText>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <MathText>{'$= \\frac{24}{12}$'}</MathText>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 2 cm
                </p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  The height of the cuboid is 2 cm.
                </p>
              </div>
            )}
          </div>

          {/* Example 3: Finding Length */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: Finding the Length</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Lucas has a box with a volume of 480 cm³. The height of the box is 6 cm and its breadth is 8 cm. What is the length of the box?
            </p>
            <MathToolRenderer
              toolName="cuboid"
              parameters={{
                length: "8 cm",
                width: "?",
                height: "6 cm",
                highlightElement: "width",
                caption: "Volume = 480 cm³, Find the length"
              }}
            />
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 transition-colors"
            >
              {showSolution3 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Volume of box = 480 cm³
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Length of box = Volume ÷ (Breadth × Height)
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <MathText>{'$= \\frac{480}{8 \\times 6}$'}</MathText>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <MathText>{'$= \\frac{480}{48}$'}</MathText>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 10 cm
                </p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  The length of the box is 10 cm.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Finding Cube Edge from Volume */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">3. Finding the Edge of a Cube</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Cube Root</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              For a <strong>cube</strong>, all sides are equal. If the volume is V, then:
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Volume = Side × Side × Side = Side³
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              To find the side, we need the <strong>cube root</strong>:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-lg text-center text-gray-800 dark:text-gray-200">
                Side of cube = <MathText>{'$\\sqrt[3]{\\text{Volume}}$'}</MathText>
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm">
              The cube root symbol <MathText>{'$\\sqrt[3]{\\phantom{x}}$'}</MathText> means "what number, multiplied by itself 3 times, gives this value?"
            </p>
          </div>

          {/* Common Cube Roots Table */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">Common Perfect Cubes</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-purple-500 dark:bg-purple-600 text-white">
                    <th className="p-3 text-left">Side</th>
                    <th className="p-3 text-left">Volume (Side³)</th>
                    <th className="p-3 text-left">Cube Root</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">1</td>
                    <td className="p-3">1</td>
                    <td className="p-3"><MathText>{'$\\sqrt[3]{1} = 1$'}</MathText></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                    <td className="p-3">2</td>
                    <td className="p-3">8</td>
                    <td className="p-3"><MathText>{'$\\sqrt[3]{8} = 2$'}</MathText></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">3</td>
                    <td className="p-3">27</td>
                    <td className="p-3"><MathText>{'$\\sqrt[3]{27} = 3$'}</MathText></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                    <td className="p-3">4</td>
                    <td className="p-3">64</td>
                    <td className="p-3"><MathText>{'$\\sqrt[3]{64} = 4$'}</MathText></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">5</td>
                    <td className="p-3">125</td>
                    <td className="p-3"><MathText>{'$\\sqrt[3]{125} = 5$'}</MathText></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                    <td className="p-3">6</td>
                    <td className="p-3">216</td>
                    <td className="p-3"><MathText>{'$\\sqrt[3]{216} = 6$'}</MathText></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">7</td>
                    <td className="p-3">343</td>
                    <td className="p-3"><MathText>{'$\\sqrt[3]{343} = 7$'}</MathText></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                    <td className="p-3">8</td>
                    <td className="p-3">512</td>
                    <td className="p-3"><MathText>{'$\\sqrt[3]{512} = 8$'}</MathText></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">9</td>
                    <td className="p-3">729</td>
                    <td className="p-3"><MathText>{'$\\sqrt[3]{729} = 9$'}</MathText></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="p-3">10</td>
                    <td className="p-3">1000</td>
                    <td className="p-3"><MathText>{'$\\sqrt[3]{1000} = 10$'}</MathText></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Example 4: Finding Edge of Cube */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 4: Finding the Edge of a Cube</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A cubical box has a volume of 729 cm³. What is the length of one edge of the box?
            </p>
            <MathToolRenderer
              toolName="cuboid"
              parameters={{
                length: "?",
                width: "?",
                height: "?",
                caption: "A cube with volume 729 cm³"
              }}
            />
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 transition-colors"
            >
              {showSolution4 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Volume of cubical box = 729 cm³
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  For a cube: Volume = Side × Side × Side
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  729 = 9 × 9 × 9
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Length of one edge = <MathText>{'$\\sqrt[3]{729}$'}</MathText> = 9 cm
                </p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  The length of one edge of the cubical box is 9 cm.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Using Face Area */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">4. Using Face Area to Find Dimensions</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Relationships</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              When you know the area of a face and the volume:
            </p>
            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <p><strong>For Cuboid:</strong></p>
              <p className="ml-4">Volume = Base Area × Height</p>
              <p className="ml-4">So: Height = Volume ÷ Base Area</p>
              <p className="mt-3"><strong>For Cube:</strong></p>
              <p className="ml-4">Face Area = Side × Side = Side²</p>
              <p className="ml-4">So: Side = <MathText>{'$\\sqrt{\\text{Face Area}}$'}</MathText> (square root)</p>
            </div>
          </div>

          {/* Example 5: Using Base Area */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 5: Using Base Area</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The area of the base of a cuboid is 70 cm² and its volume is 1050 cm³. Find the height of the cuboid.
            </p>
            <MathToolRenderer
              toolName="cuboid"
              parameters={{
                length: "",
                width: "",
                height: "?",
                highlightElement: "height",
                caption: "Base Area = 70 cm², Volume = 1050 cm³"
              }}
            />
            <button
              onClick={() => setShowSolution5(!showSolution5)}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 transition-colors"
            >
              {showSolution5 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution5 && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Volume = 1050 cm³
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Since Volume = Base Area × Height:
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Height of cuboid = Volume ÷ Base Area
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <MathText>{'$= \\frac{1050}{70}$'}</MathText>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 15 cm
                </p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  The height of the cuboid is 15 cm.
                </p>
              </div>
            )}
          </div>

          {/* Example 6: Cube Face Area */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 6: Finding Edge from Face Area</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The area of the shaded face of a cube is 36 cm². Find the length of one edge of the cube.
            </p>
            <MathToolRenderer
              toolName="cuboid"
              parameters={{
                length: "?",
                width: "?",
                height: "?",
                caption: "Face Area = 36 cm²"
              }}
            />
            <button
              onClick={() => setShowSolution6(!showSolution6)}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 transition-colors"
            >
              {showSolution6 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution6 && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Area of square face = 36 cm²
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Area of square = Side × Side = Side²
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  36 = 6 × 6
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Length of cube = <MathText>{'$\\sqrt{36}$'}</MathText> = 6 cm
                </p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  The length of one edge of the cube is 6 cm.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-4">Key Takeaways</h3>
          <ul className="space-y-3 text-gray-800 dark:text-gray-200">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">1.</span>
              <span><strong>Volume of cube</strong> = Side × Side × Side = Side³</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">2.</span>
              <span><strong>Volume of cuboid</strong> = Length × Breadth × Height</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">3.</span>
              <span><strong>To find unknown dimension</strong>: Divide volume by the product of the other two dimensions</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">4.</span>
              <span><strong>Edge of cube</strong> = Cube root of volume (<MathText>{'$\\sqrt[3]{V}$'}</MathText>)</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">5.</span>
              <span><strong>Height from base area</strong> = Volume ÷ Base Area</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">6.</span>
              <span><strong>Edge from face area (cube)</strong> = Square root of face area (<MathText>{'$\\sqrt{A}$'}</MathText>)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
