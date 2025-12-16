import { useState } from 'react';

const CubicUnits = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Volume in Cubic Centimetres and Cubic Metres</h1>
        <p className="text-lg">Learn about standard units of volume: cm³ and m³</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Cubic Centimetres */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">1. Cubic Centimetres (cm³)</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What is a 1-cm cube?</h3>
            <p className="text-gray-800 dark:text-gray-200">
              A <strong>1-cm cube</strong> is a cube where each edge is exactly <strong>1 centimetre</strong> long.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="flex items-center justify-center mb-4">
              <svg viewBox="0 0 220 200" className="w-56 h-52">
                {/* Proper isometric cube for 1-cm cube */}
                {/* Left face (darker) */}
                <polygon
                  points="50,65 110,100 110,170 50,135"
                  fill="#5eead4"
                  stroke="#0d9488"
                  strokeWidth="2"
                />
                {/* Right face (medium) */}
                <polygon
                  points="170,65 170,135 110,170 110,100"
                  fill="#99f6e4"
                  stroke="#0d9488"
                  strokeWidth="2"
                />
                {/* Top face (lightest) */}
                <polygon
                  points="110,30 170,65 110,100 50,65"
                  fill="#ccfbf1"
                  stroke="#0d9488"
                  strokeWidth="2"
                />
                {/* Labels positioned outside the cube */}
                <text x="138" y="38" fontSize="13" fill="#134e4a" fontWeight="bold">1 cm</text>
                <text x="5" y="105" fontSize="13" fill="#134e4a" fontWeight="bold">1 cm</text>
                <text x="175" y="105" fontSize="13" fill="#134e4a" fontWeight="bold">1 cm</text>
              </svg>
            </div>
            <p className="text-center text-gray-800 dark:text-gray-200">
              This is a <strong>1-cm cube</strong>.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Volume of a 1-cm cube:</h3>
            <p className="text-xl text-center font-mono bg-white dark:bg-gray-800 p-4 rounded text-gray-900 dark:text-gray-100">
              Volume = <strong>1 cubic centimetre</strong> = <strong>1 cm³</strong>
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Building with 1-cm cubes:</h3>
            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <p>• A solid made of <strong>6</strong> one-cm cubes has volume <strong>6 cm³</strong></p>
              <p>• A solid made of <strong>8</strong> one-cm cubes has volume <strong>8 cm³</strong></p>
              <p>• A solid made of <strong>12</strong> one-cm cubes has volume <strong>12 cm³</strong></p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500">
            <p className="text-gray-800 dark:text-gray-200">
              <strong>When to use cm³:</strong> For small objects like erasers, dice, sugar cubes, or small containers.
            </p>
          </div>
        </section>

        {/* Section 2: Cubic Metres */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">2. Cubic Metres (m³)</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What is a 1-m cube?</h3>
            <p className="text-gray-800 dark:text-gray-200">
              A <strong>1-m cube</strong> is a cube where each edge is exactly <strong>1 metre</strong> long.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="flex items-center justify-center mb-4">
              <svg viewBox="0 0 220 200" className="w-56 h-52">
                {/* Proper isometric cube for 1-m cube */}
                {/* Left face (darker) */}
                <polygon
                  points="50,65 110,100 110,170 50,135"
                  fill="#fde047"
                  stroke="#ca8a04"
                  strokeWidth="2"
                />
                {/* Right face (medium) */}
                <polygon
                  points="170,65 170,135 110,170 110,100"
                  fill="#fef08a"
                  stroke="#ca8a04"
                  strokeWidth="2"
                />
                {/* Top face (lightest) */}
                <polygon
                  points="110,30 170,65 110,100 50,65"
                  fill="#fef9c3"
                  stroke="#ca8a04"
                  strokeWidth="2"
                />
                {/* Labels positioned outside the cube */}
                <text x="140" y="38" fontSize="13" fill="#713f12" fontWeight="bold">1 m</text>
                <text x="8" y="105" fontSize="13" fill="#713f12" fontWeight="bold">1 m</text>
                <text x="175" y="105" fontSize="13" fill="#713f12" fontWeight="bold">1 m</text>
              </svg>
            </div>
            <p className="text-center text-gray-800 dark:text-gray-200">
              This is a <strong>1-m cube</strong> (about the size of a large washing machine!)
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Volume of a 1-m cube:</h3>
            <p className="text-xl text-center font-mono bg-white dark:bg-gray-800 p-4 rounded text-gray-900 dark:text-gray-100">
              Volume = <strong>1 cubic metre</strong> = <strong>1 m³</strong>
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Building with 1-m cubes:</h3>
            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <p>• A solid made of <strong>8</strong> one-m cubes has volume <strong>8 m³</strong></p>
              <p>• A solid made of <strong>18</strong> one-m cubes has volume <strong>18 m³</strong></p>
              <p>• A solid made of <strong>24</strong> one-m cubes has volume <strong>24 m³</strong></p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500">
            <p className="text-gray-800 dark:text-gray-200">
              <strong>When to use m³:</strong> For large objects like rooms, swimming pools, storage containers, or shipping boxes.
            </p>
          </div>
        </section>

        {/* Section 3: Choosing the Right Unit */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">3. Choosing the Right Unit</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded">
                <h3 className="font-bold text-teal-700 dark:text-teal-300 mb-3">Use cm³ for:</h3>
                <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                  <li>📦 Small boxes</li>
                  <li>🧊 Ice cubes</li>
                  <li>🎲 Dice</li>
                  <li>🍬 Candy containers</li>
                  <li>📚 Small books</li>
                </ul>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded">
                <h3 className="font-bold text-yellow-700 dark:text-yellow-300 mb-3">Use m³ for:</h3>
                <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                  <li>🏠 Rooms</li>
                  <li>🏊 Swimming pools</li>
                  <li>📦 Shipping containers</li>
                  <li>🚛 Lorries</li>
                  <li>🏢 Buildings</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">Think About It:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              How many 1-cm cubes can fit inside a 1-m cube?
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-gray-800 dark:text-gray-200">
                1 m = 100 cm, so a 1-m cube is 100 cm × 100 cm × 100 cm
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                That's <strong>100 × 100 × 100 = 1,000,000</strong> cm cubes!
              </p>
            </div>
          </div>
        </section>

        {/* Worked Example */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">Worked Example</h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Finding Volume in cm³
            </h3>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              A solid is built using 1-cm cubes. It has 3 layers, with 2 rows of 4 cubes in each layer. Find its volume in cm³.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Solution:</p>
              <div className="space-y-2 text-gray-800 dark:text-gray-200">
                <p><strong>Step 1:</strong> Cubes in one row = 4</p>
                <p><strong>Step 2:</strong> Cubes in one layer = 4 × 2 = 8 cubes</p>
                <p><strong>Step 3:</strong> Total cubes = 8 × 3 = 24 cubes</p>
                <p className="mt-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
                  <strong>Volume = 24 cm³</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: Volume in cm³
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                I use 15 one-cm cubes to build a solid. What is its volume?
              </p>
              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution1 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution1 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    Volume = 15 one-cm cubes = <strong>15 cm³</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Volume in m³
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A cuboid is made of 1-m cubes. It has 2 layers, with 3 × 4 = 12 cubes in each layer. What is its volume?
              </p>
              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution2 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution2 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    Volume = 12 × 2 = <strong>24 m³</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Choosing Units
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Which unit (cm³ or m³) would you use to measure the volume of: (a) a pencil box, (b) a classroom?
              </p>
              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution3 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution3 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    (a) Pencil box: <strong>cm³</strong> (small object)
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    (b) Classroom: <strong>m³</strong> (large space)
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>A <strong>1-cm cube</strong> has a volume of <strong>1 cm³</strong> (1 cubic centimetre)</li>
            <li>A <strong>1-m cube</strong> has a volume of <strong>1 m³</strong> (1 cubic metre)</li>
            <li>Use <strong>cm³</strong> for small objects (erasers, boxes, containers)</li>
            <li>Use <strong>m³</strong> for large objects (rooms, pools, buildings)</li>
            <li>Count the cubes to find the volume in the correct unit</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CubicUnits;
