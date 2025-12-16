import { useState } from 'react';

const VolumeFormula = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Volume of Cubes and Cuboids</h1>
        <p className="text-lg">Learn the formulas to calculate volume without counting every cube</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Volume Formula for Cuboids */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. Volume Formula for Cuboids</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Big Idea:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Instead of counting every cube, we can use a <strong>formula</strong> to calculate volume quickly!
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Understanding the Formula:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <svg viewBox="0 0 280 220" className="w-full max-w-xs mx-auto">
                  {/* Proper isometric cuboid - only 3 visible faces */}
                  {/* Cuboid: length along bottom-left edge, breadth along bottom-right edge, height vertical */}

                  {/* Left face (darker blue) */}
                  <polygon
                    points="70,95 170,153 170,85 70,27"
                    fill="#93c5fd"
                    stroke="#2563eb"
                    strokeWidth="2"
                  />
                  {/* Right face (medium blue) */}
                  <polygon
                    points="170,153 210,130 210,62 170,85"
                    fill="#bfdbfe"
                    stroke="#2563eb"
                    strokeWidth="2"
                  />
                  {/* Top face (lightest blue) */}
                  <polygon
                    points="70,27 170,85 210,62 110,4"
                    fill="#dbeafe"
                    stroke="#2563eb"
                    strokeWidth="2"
                  />

                  {/* Labels positioned on the correct edges */}
                  {/* Length: bottom-left edge of left face */}
                  <text x="95" y="140" fontSize="14" fill="#1e40af" fontWeight="bold" textAnchor="middle">length</text>
                  {/* Breadth: bottom-right edge of right face */}
                  <text x="205" y="155" fontSize="14" fill="#1e40af" fontWeight="bold">breadth</text>
                  {/* Height: left vertical edge */}
                  <text x="50" y="65" fontSize="14" fill="#1e40af" fontWeight="bold">height</text>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-800 dark:text-gray-200 mb-2">A cuboid has 3 dimensions:</p>
                <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                  <li>• <strong>Length</strong> - how long it is</li>
                  <li>• <strong>Breadth</strong> - how wide it is</li>
                  <li>• <strong>Height</strong> - how tall it is</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-2 border-green-500 mb-4">
            <h3 className="font-bold text-xl text-green-800 dark:text-green-300 mb-3 text-center">Volume Formula for Cuboid</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-2xl text-center font-bold text-gray-900 dark:text-gray-100">
                Volume = length × breadth × height
              </p>
              <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
                or V = L × B × H
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 mb-4">
            <p className="text-gray-800 dark:text-gray-200">
              <strong>Why does this work?</strong> The formula counts all the cubes at once:
            </p>
            <ul className="mt-2 space-y-1 text-gray-800 dark:text-gray-200">
              <li>• Length × Breadth = cubes in one layer</li>
              <li>• × Height = total cubes (all layers)</li>
            </ul>
          </div>

          {/* Worked Example for Cuboid */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Volume of a Cuboid
            </h3>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              A cuboid measures 4 cm by 2 cm by 3 cm. Find its volume.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Solution:</p>
              <div className="space-y-2 text-gray-800 dark:text-gray-200">
                <p>Volume = length × breadth × height</p>
                <p>Volume = 4 cm × 2 cm × 3 cm</p>
                <p className="mt-2 p-2 bg-green-100 dark:bg-green-900/30 rounded">
                  <strong>Volume = 24 cm³</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Volume Formula for Cubes */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Volume Formula for Cubes</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What makes a cube special?</h3>
            <p className="text-gray-800 dark:text-gray-200">
              A <strong>cube</strong> is a special cuboid where all edges are the <strong>same length</strong>.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="flex items-center justify-center mb-4">
              <svg viewBox="0 0 220 200" className="w-56 h-52">
                {/* Proper isometric cube */}
                {/* Left face (darker) */}
                <polygon
                  points="50,65 110,100 110,170 50,135"
                  fill="#fca5a5"
                  stroke="#dc2626"
                  strokeWidth="2"
                />
                {/* Right face (medium) */}
                <polygon
                  points="170,65 170,135 110,170 110,100"
                  fill="#fecaca"
                  stroke="#dc2626"
                  strokeWidth="2"
                />
                {/* Top face (lightest) */}
                <polygon
                  points="110,30 170,65 110,100 50,65"
                  fill="#fee2e2"
                  stroke="#dc2626"
                  strokeWidth="2"
                />
                {/* Labels positioned outside the cube */}
                <text x="138" y="38" fontSize="13" fill="#991b1b" fontWeight="bold">6 cm</text>
                <text x="5" y="105" fontSize="13" fill="#991b1b" fontWeight="bold">6 cm</text>
                <text x="175" y="105" fontSize="13" fill="#991b1b" fontWeight="bold">6 cm</text>
              </svg>
            </div>
            <p className="text-center text-gray-800 dark:text-gray-200">
              All sides of a cube are <strong>equal</strong>!
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-2 border-green-500 mb-4">
            <h3 className="font-bold text-xl text-green-800 dark:text-green-300 mb-3 text-center">Volume Formula for Cube</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-2xl text-center font-bold text-gray-900 dark:text-gray-100">
                Volume = length × length × length
              </p>
              <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
                or V = L × L × L
              </p>
            </div>
          </div>

          {/* Worked Example for Cube */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Volume of a Cube
            </h3>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              A cube has sides of 2 cm. Find its volume.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Solution:</p>
              <div className="space-y-2 text-gray-800 dark:text-gray-200">
                <p>Volume = length × length × length</p>
                <p>Volume = 2 cm × 2 cm × 2 cm</p>
                <p className="mt-2 p-2 bg-green-100 dark:bg-green-900/30 rounded">
                  <strong>Volume = 8 cm³</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Applying the Formulas */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">3. Applying the Formulas</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Steps to Find Volume:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>Identify the shape (cube or cuboid)</li>
              <li>Find the dimensions (length, breadth, height)</li>
              <li>Use the correct formula</li>
              <li>Calculate and include the correct unit (cm³ or m³)</li>
            </ol>
          </div>

          {/* More worked examples */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Finding Volume of a Room
            </h3>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              A room measures 12 m by 8 m by 4 m. Find its volume.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Solution:</p>
              <div className="space-y-2 text-gray-800 dark:text-gray-200">
                <p>Volume = length × breadth × height</p>
                <p>Volume = 12 m × 8 m × 4 m</p>
                <p className="mt-2 p-2 bg-green-100 dark:bg-green-900/30 rounded">
                  <strong>Volume = 384 m³</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Finding Volume of a Container
            </h3>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              A rectangular glass container measures 10 cm by 6 cm by 4 cm. What is its volume?
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Solution:</p>
              <div className="space-y-2 text-gray-800 dark:text-gray-200">
                <p>Volume = length × breadth × height</p>
                <p>Volume = 10 cm × 6 cm × 4 cm</p>
                <p className="mt-2 p-2 bg-green-100 dark:bg-green-900/30 rounded">
                  <strong>Volume = 240 cm³</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: Volume of a Cuboid
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A cuboid measures 5 cm by 3 cm by 2 cm. Find its volume.
              </p>
              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution1 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution1 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">Volume = 5 × 3 × 2</p>
                  <p className="text-gray-800 dark:text-gray-200"><strong>Volume = 30 cm³</strong></p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Volume of a Cube
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Find the volume of a cube with sides of 6 cm.
              </p>
              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution2 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution2 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">Volume = 6 × 6 × 6</p>
                  <p className="text-gray-800 dark:text-gray-200"><strong>Volume = 216 cm³</strong></p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Volume in m³
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A storage container measures 10 m by 5 m by 12 m. Find its volume.
              </p>
              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution3 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution3 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">Volume = 10 × 5 × 12</p>
                  <p className="text-gray-800 dark:text-gray-200"><strong>Volume = 600 m³</strong></p>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 4: Volume of a Cube (m³)
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A cubical water tank has sides of 4 m. What is its volume?
              </p>
              <button
                onClick={() => setShowSolution4(!showSolution4)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution4 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution4 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">Volume = 4 × 4 × 4</p>
                  <p className="text-gray-800 dark:text-gray-200"><strong>Volume = 64 m³</strong></p>
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
            <li><strong>Volume of cuboid</strong> = length × breadth × height</li>
            <li><strong>Volume of cube</strong> = length × length × length</li>
            <li>A cube is a special cuboid with all sides equal</li>
            <li>Always include the correct unit: <strong>cm³</strong> or <strong>m³</strong></li>
            <li>The formula counts all the cubes at once using multiplication</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VolumeFormula;
