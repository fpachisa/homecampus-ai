import React, { useState } from 'react';

const ThreeDimensionalCoordinates = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">3-Dimensional Coordinate Geometry</h1>
        <p className="text-lg">Understanding 3D coordinates, distance, and midpoint in three-dimensional space</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The 3D Coordinate System */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">1. The 3D Coordinate System</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Extending to Three Dimensions:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              In 2D, we used two perpendicular axes (x and y). In <strong>three-dimensional space</strong>, we add a third axis called the <strong>z-axis</strong>.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>The <strong>x-axis</strong> represents the horizontal left-right direction</li>
              <li>The <strong>y-axis</strong> represents the depth (front-back direction)</li>
              <li>The <strong>z-axis</strong> represents the vertical up-down direction</li>
              <li>All three axes meet at the <strong>origin</strong>, O(0, 0, 0)</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">3D Coordinates: Ordered Triples</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Any point in 3D space can be described using an <strong>ordered triple</strong> of numbers.
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-3">
              <p className="text-center font-mono text-xl text-gray-900 dark:text-gray-100">(x, y, z)</p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                (x-coordinate, y-coordinate, z-coordinate)
              </p>
            </div>
            <div className="space-y-2 text-gray-800 dark:text-gray-200">
              <div className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <p>The <strong>x-coordinate</strong> tells us how far left or right from the origin</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <p>The <strong>y-coordinate</strong> tells us how far forward or backward from the origin</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <p>The <strong>z-coordinate</strong> tells us how far up or down from the origin</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Visualizing with Rectangular Prisms (Cuboids):</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
              A great way to understand 3D coordinates is by thinking of a <strong>cuboid</strong> (rectangular prism) with one vertex at the origin.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 ml-4">
              <li>The <strong>width</strong> of the cuboid extends along the x-axis</li>
              <li>The <strong>length</strong> of the cuboid extends along the y-axis</li>
              <li>The <strong>height</strong> of the cuboid extends along the z-axis</li>
              <li>The vertices of the cuboid have coordinates based on these dimensions</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Understanding 3D Coordinates with Cuboids */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">2. Cuboid Vertices and Coordinates</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Example: Cuboid with dimensions 6 × 4 × 5</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              If a cuboid has width = 6 units (x-axis), length = 4 units (y-axis), and height = 5 units (z-axis), with one vertex at the origin, we can find all 8 vertex coordinates:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Bottom Face (z = 0)</h3>
              <div className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p className="font-mono">A(0, 0, 0) - Origin</p>
                <p className="font-mono">B(6, 0, 0) - Along x-axis</p>
                <p className="font-mono">E(0, 4, 0) - Along y-axis</p>
                <p className="font-mono">F(6, 4, 0) - x and y</p>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
              <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Top Face (z = 5)</h3>
              <div className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p className="font-mono">D(0, 0, 5) - Along z-axis</p>
                <p className="font-mono">C(6, 0, 5) - x and z</p>
                <p className="font-mono">H(0, 4, 5) - y and z</p>
                <p className="font-mono">G(6, 4, 5) - All three</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">Pattern Recognition:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Notice how each coordinate is either 0 or the maximum value (6, 4, or 5) for the cuboid vertices. Points can have any values within or outside this range!
            </p>
          </div>
        </div>

        {/* Section 3: Distance in 3D Space */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">3. Distance Between Two Points in 3D</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The 3D Distance Formula:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              This formula extends the 2D distance formula by including the z-coordinate. It's derived by applying Pythagoras' theorem <strong>twice</strong>!
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-4">
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                The distance <em>d</em> between points (x₁, y₁, z₁) and (x₂, y₂, z₂) is:
              </p>
              <p className="text-center font-mono text-xl text-gray-900 dark:text-gray-100">
                d = √[(x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²]
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">Derivation (Space Diagonal of Cuboid):</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p>• First, find the diagonal of the base (2D): d₁² = (x₂ − x₁)² + (y₂ − y₁)²</p>
              <p>• Then, use this diagonal with the height to form a right triangle in 3D</p>
              <p>• Apply Pythagoras again: d² = d₁² + (z₂ − z₁)²</p>
              <p>• Substitute: d² = (x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²</p>
              <p>• Taking the square root gives us the 3D distance formula</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Space Diagonal of a Cuboid:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              For a cuboid with dimensions width (w), length (l), and height (h), the <strong>space diagonal</strong> (from one corner to the opposite corner) has length:
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <p className="text-center font-mono text-xl text-gray-900 dark:text-gray-100">
                d = √(w² + l² + h²)
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold mb-2 text-green-800 dark:text-green-200">Quick Example:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
              For a cuboid 6 × 4 × 5, the space diagonal is:
            </p>
            <p className="text-sm font-mono text-gray-900 dark:text-gray-100 ml-4">
              d = √(6² + 4² + 5²) = √(36 + 16 + 25) = √77 units
            </p>
          </div>
        </div>

        {/* Section 4: Midpoint in 3D */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">4. Midpoint in 3D Space</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The <strong>midpoint</strong> in 3D space is the point exactly halfway between two points. We find it by averaging each coordinate separately.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">The 3D Midpoint Formula:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Average the x-coordinates, the y-coordinates, and the z-coordinates separately.
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                If A(x₁, y₁, z₁) and B(x₂, y₂, z₂) are two points, then the midpoint M has coordinates:
              </p>
              <p className="text-center font-mono text-xl text-gray-900 dark:text-gray-100">
                M = ((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2)
              </p>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded border-2 border-purple-300 dark:border-purple-600 mb-4">
            <h3 className="font-bold mb-2 text-purple-800 dark:text-purple-200">Memory Tip:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Just like in 2D, <strong>add and divide by 2</strong> for each coordinate. The pattern extends naturally from 2D to 3D!
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
            <h3 className="font-bold mb-2 text-blue-800 dark:text-blue-200">Midpoint of Space Diagonal:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              For a cuboid with vertices at O(0, 0, 0) and G(w, l, h), the center point (midpoint of space diagonal) is at:
            </p>
            <p className="text-sm font-mono text-gray-900 dark:text-gray-100 ml-4 mt-2">
              M = (w/2, l/2, h/2)
            </p>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900/50 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Finding Distance Between Two Points in 3D
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-purple-500 dark:border-purple-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Find the distance between A(2, 1, 3) and B(5, 4, 7).
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Identify the coordinates</p>
                    <p className="ml-4">A(2, 1, 3) → x₁ = 2, y₁ = 1, z₁ = 3</p>
                    <p className="ml-4">B(5, 4, 7) → x₂ = 5, y₂ = 4, z₂ = 7</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Apply the 3D distance formula</p>
                    <p className="ml-4 font-mono">AB = √[(x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²]</p>
                    <p className="ml-4 font-mono">AB = √[(5 − 2)² + (4 − 1)² + (7 − 3)²]</p>
                    <p className="ml-4 font-mono">AB = √[3² + 3² + 4²]</p>
                    <p className="ml-4 font-mono">AB = √[9 + 9 + 16]</p>
                    <p className="ml-4 font-mono">AB = √34</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200">Answer: AB = √34 units</p>
                    <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">(≈ 5.83 units if decimal approximation needed)</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900/50 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Finding the Midpoint in 3D
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-purple-500 dark:border-purple-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Find the midpoint M of the line segment joining A(−2, 3, 5) and B(4, −1, 9).
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Identify the coordinates</p>
                    <p className="ml-4">A(−2, 3, 5) → x₁ = −2, y₁ = 3, z₁ = 5</p>
                    <p className="ml-4">B(4, −1, 9) → x₂ = 4, y₂ = −1, z₂ = 9</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Find the x-coordinate of M</p>
                    <p className="ml-4 font-mono">x = (x₁ + x₂)/2 = (−2 + 4)/2 = 2/2 = 1</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 3: Find the y-coordinate of M</p>
                    <p className="ml-4 font-mono">y = (y₁ + y₂)/2 = (3 + (−1))/2 = 2/2 = 1</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 4: Find the z-coordinate of M</p>
                    <p className="ml-4 font-mono">z = (z₁ + z₂)/2 = (5 + 9)/2 = 14/2 = 7</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200">Answer: M(1, 1, 7)</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900/50 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample3 ? '▼' : '▶'} Example 3: Space Diagonal of a Cuboid
            </button>

            {showExample3 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-purple-500 dark:border-purple-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  A cuboid has dimensions 8 cm × 6 cm × 10 cm. Find the length of its space diagonal.
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Identify the dimensions</p>
                    <p className="ml-4">Width (w) = 8 cm</p>
                    <p className="ml-4">Length (l) = 6 cm</p>
                    <p className="ml-4">Height (h) = 10 cm</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Apply the space diagonal formula</p>
                    <p className="ml-4 font-mono">d = √(w² + l² + h²)</p>
                    <p className="ml-4 font-mono">d = √(8² + 6² + 10²)</p>
                    <p className="ml-4 font-mono">d = √(64 + 36 + 100)</p>
                    <p className="ml-4 font-mono">d = √200</p>
                    <p className="ml-4 font-mono">d = √(100 × 2)</p>
                    <p className="ml-4 font-mono">d = 10√2</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200">Answer: Space diagonal = 10√2 cm</p>
                    <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">(≈ 14.14 cm if decimal approximation needed)</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. Find the distance between the following pairs of points:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) A(0, 0, 0) and B(3, 4, 12)</p>
                <p>b) P(1, 2, 3) and Q(4, 6, 8)</p>
                <p>c) M(−1, −2, 5) and N(2, 1, −3)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-purple-600 dark:text-purple-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> AB = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13 units</p>
                  <p><strong>b)</strong> PQ = √(3² + 4² + 5²) = √(9 + 16 + 25) = √50 = 5√2 units</p>
                  <p><strong>c)</strong> MN = √(3² + 3² + (−8)²) = √(9 + 9 + 64) = √82 units</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Find the midpoint of the line segment joining:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) A(0, 0, 0) and B(6, 8, 10)</p>
                <p>b) P(−2, 4, 6) and Q(4, −2, 8)</p>
                <p>c) M(1, 3, 5) and N(7, 9, 11)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-purple-600 dark:text-purple-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> M = ((0+6)/2, (0+8)/2, (0+10)/2) = (3, 4, 5)</p>
                  <p><strong>b)</strong> M = ((−2+4)/2, (4+(−2))/2, (6+8)/2) = (1, 1, 7)</p>
                  <p><strong>c)</strong> M = ((1+7)/2, (3+9)/2, (5+11)/2) = (4, 6, 8)</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                3. Cuboid Problems:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) Find the space diagonal of a cuboid with dimensions 5 cm × 12 cm × 9 cm</p>
                <p>b) A cuboid has a space diagonal of 15 cm, width 6 cm, and length 8 cm. Find its height.</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-purple-600 dark:text-purple-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> d = √(5² + 12² + 9²) = √(25 + 144 + 81) = √250 = 5√10 cm</p>
                  <p><strong>b)</strong> 15² = 6² + 8² + h² → 225 = 36 + 64 + h² → h² = 125 → h = 5√5 cm</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                4. Challenge Problem:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>A cuboid has one vertex at the origin O(0, 0, 0) and the opposite vertex at G(6, 4, 5). Point P is located at (2, 3, 4). Find:</p>
                <p className="ml-4">a) The distance from O to P</p>
                <p className="ml-4">b) The distance from P to G</p>
                <p className="ml-4">c) The center point (midpoint of space diagonal OG)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-purple-600 dark:text-purple-400 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> OP = √(2² + 3² + 4²) = √(4 + 9 + 16) = √29 units</p>
                  <p><strong>b)</strong> PG = √[(6−2)² + (4−3)² + (5−4)²] = √(16 + 1 + 1) = √18 = 3√2 units</p>
                  <p><strong>c)</strong> Center = ((0+6)/2, (0+4)/2, (0+5)/2) = (3, 2, 2.5)</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li>3D space has three perpendicular axes: <strong>x-axis</strong> (horizontal), <strong>y-axis</strong> (depth), and <strong>z-axis</strong> (vertical)</li>
            <li>Points in 3D are described using <strong>ordered triples (x, y, z)</strong></li>
            <li>Cuboids (rectangular prisms) help visualize 3D coordinates with vertices at specific coordinate positions</li>
            <li><strong>3D Distance formula:</strong> d = √[(x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²]</li>
            <li><strong>Space diagonal of cuboid:</strong> d = √(width² + length² + height²)</li>
            <li><strong>3D Midpoint formula:</strong> M = ((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2)</li>
            <li>The formulas extend naturally from 2D by adding the z-coordinate component</li>
            <li>Leave answers in surd form for exact values</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThreeDimensionalCoordinates;
