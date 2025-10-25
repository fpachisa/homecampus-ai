import { useState } from 'react';

const CoordinatePlaneFundamentals = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Coordinate Plane Fundamentals</h1>
        <p className="text-lg">Understanding the Cartesian plane, coordinates, distance, and midpoints</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Cartesian Plane */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. The Cartesian Plane</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Number Plane:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The <strong>number plane</strong> or <strong>Cartesian plane</strong> consists of two perpendicular axes which intersect at the <strong>origin</strong>, O.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>The <strong>x-axis</strong> is horizontal</li>
              <li>The <strong>y-axis</strong> is vertical</li>
              <li>The axes divide the plane into four <strong>quadrants</strong></li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Coordinates: Ordered Pairs</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              We can describe any point on the Cartesian plane using an <strong>ordered pair</strong> of numbers called <strong>coordinates</strong>.
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-3">
              <p className="text-center font-mono text-lg text-gray-900 dark:text-gray-100">(x, y)</p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                (x-coordinate, y-coordinate)
              </p>
            </div>
            <div className="space-y-2 text-gray-800 dark:text-gray-200">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <p>The <strong>x-coordinate</strong> gives the horizontal position along the x-axis</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <p>The <strong>y-coordinate</strong> gives the vertical position along the y-axis</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Quadrant 1 (+, +)</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Both x and y are positive
              </p>
              <p className="font-mono text-xs mt-2 text-gray-900 dark:text-gray-100">Example: (3, 4)</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded border-2 border-purple-300 dark:border-purple-600">
              <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Quadrant 2 (−, +)</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                x is negative, y is positive
              </p>
              <p className="font-mono text-xs mt-2 text-gray-900 dark:text-gray-100">Example: (−2, 5)</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded border-2 border-orange-300 dark:border-orange-600">
              <h3 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Quadrant 3 (−, −)</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Both x and y are negative
              </p>
              <p className="font-mono text-xs mt-2 text-gray-900 dark:text-gray-100">Example: (−4, −3)</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-2 border-red-300 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-2">Quadrant 4 (+, −)</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                x is positive, y is negative
              </p>
              <p className="font-mono text-xs mt-2 text-gray-900 dark:text-gray-100">Example: (6, −2)</p>
            </div>
          </div>
        </div>

        {/* Section 2: Distance Between Two Points */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Distance Between Two Points</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Distance Formula:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              To find the distance <em>d</em> between two points, we use the horizontal and vertical grid lines to construct a right-angled triangle, then apply Pythagoras' theorem.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-4">
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                The distance <em>d</em> between points (x₁, y₁) and (x₂, y₂) is:
              </p>
              <p className="text-center font-mono text-xl text-gray-900 dark:text-gray-100">
                d = √[(x₂ − x₁)² + (y₂ − y₁)²]
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">Derivation:</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p>• <strong>x-step</strong> (horizontal distance) = x₂ − x₁</p>
              <p>• <strong>y-step</strong> (vertical distance) = y₂ − y₁</p>
              <p>• By Pythagoras: d² = (x-step)² + (y-step)²</p>
              <p>• Therefore: d² = (x₂ − x₁)² + (y₂ − y₁)²</p>
              <p>• Taking the square root: d = √[(x₂ − x₁)² + (y₂ − y₁)²]</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Key Points to Remember:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>The order of subtraction doesn't matter since we're squaring the differences</li>
              <li>Distance is always positive (or zero if the points are the same)</li>
              <li>You can use this formula for any two points on the plane</li>
              <li>Leave your answer in surd form for exact values (e.g., √41 units)</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Midpoint of a Line Segment */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">3. Midpoint of a Line Segment</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The <strong>midpoint</strong> of a line segment [AB] is the point on [AB] which is equidistant from A and B.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              In other words, it's the point exactly halfway between A and B.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">The Midpoint Formula:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The x-coordinate of the midpoint is the <strong>average</strong> of the x-coordinates of A and B.
              The y-coordinate of the midpoint is the <strong>average</strong> of the y-coordinates of A and B.
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                If A(x₁, y₁) and B(x₂, y₂) are two points, then the midpoint of [AB] has coordinates:
              </p>
              <p className="text-center font-mono text-xl text-gray-900 dark:text-gray-100">
                M = ((x₁ + x₂)/2, (y₁ + y₂)/2)
              </p>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded border-2 border-purple-300 dark:border-purple-600">
            <h3 className="font-bold mb-2 text-purple-800 dark:text-purple-200">Memory Tip:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              To find the midpoint, simply <strong>add the coordinates and divide by 2</strong> (find the average).
            </p>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Finding Distance Between Two Points
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Find the distance between A(−2, 1) and B(3, 4).
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Identify the coordinates</p>
                    <p className="ml-4">A(−2, 1) → x₁ = −2, y₁ = 1</p>
                    <p className="ml-4">B(3, 4) → x₂ = 3, y₂ = 4</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Apply the distance formula</p>
                    <p className="ml-4 font-mono">AB = √[(x₂ − x₁)² + (y₂ − y₁)²]</p>
                    <p className="ml-4 font-mono">AB = √[(3 − (−2))² + (4 − 1)²]</p>
                    <p className="ml-4 font-mono">AB = √[(3 + 2)² + (3)²]</p>
                    <p className="ml-4 font-mono">AB = √[5² + 3²]</p>
                    <p className="ml-4 font-mono">AB = √[25 + 9]</p>
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
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Finding the Midpoint
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Find the midpoint M of [AB] given A(−1, 3) and B(4, 7).
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Identify the coordinates</p>
                    <p className="ml-4">A(−1, 3) → x₁ = −1, y₁ = 3</p>
                    <p className="ml-4">B(4, 7) → x₂ = 4, y₂ = 7</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Find the x-coordinate of M</p>
                    <p className="ml-4 font-mono">x = (x₁ + x₂)/2</p>
                    <p className="ml-4 font-mono">x = (−1 + 4)/2</p>
                    <p className="ml-4 font-mono">x = 3/2 = 1.5</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 3: Find the y-coordinate of M</p>
                    <p className="ml-4 font-mono">y = (y₁ + y₂)/2</p>
                    <p className="ml-4 font-mono">y = (3 + 7)/2</p>
                    <p className="ml-4 font-mono">y = 10/2 = 5</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200">Answer: M(1.5, 5) or M(3/2, 5)</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample3 ? '▼' : '▶'} Example 3: Finding Unknown Coordinates
            </button>

            {showExample3 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Find b given that A(3, −2) and B(b, 1) are √13 units apart.
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Set up the distance formula</p>
                    <p className="ml-4 font-mono">√[(b − 3)² + (1 − (−2))²] = √13</p>
                    <p className="ml-4 font-mono">√[(b − 3)² + 3²] = √13</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Square both sides</p>
                    <p className="ml-4 font-mono">(b − 3)² + 9 = 13</p>
                    <p className="ml-4 font-mono">(b − 3)² = 4</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 3: Solve for b</p>
                    <p className="ml-4 font-mono">b − 3 = ±2</p>
                    <p className="ml-4 font-mono">b = 3 + 2 = 5  or  b = 3 − 2 = 1</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200">Answer: b = 5 or b = 1</p>
                    <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                      Point B could be at two possible locations: (5, 1) or (1, 1)
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. Find the distance between each pair of points:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) A(1, 6) and B(3, −4)</p>
                <p>b) C(−3, −1) and D(−6, 1)</p>
                <p>c) P(0, 0) and Q(5, 12)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> AB = √[(3−1)² + (−4−6)²] = √[4 + 100] = √104 = 2√26 units</p>
                  <p><strong>b)</strong> CD = √[(−6−(−3))² + (1−(−1))²] = √[9 + 4] = √13 units</p>
                  <p><strong>c)</strong> PQ = √[5² + 12²] = √[25 + 144] = √169 = 13 units</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Find the midpoint of the line segment joining:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) (2, 3) and (8, 11)</p>
                <p>b) (−5, 4) and (3, −2)</p>
                <p>c) (0, 6) and (−4, 0)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> M = ((2+8)/2, (3+11)/2) = (5, 7)</p>
                  <p><strong>b)</strong> M = ((−5+3)/2, (4+(−2))/2) = (−1, 1)</p>
                  <p><strong>c)</strong> M = ((0+(−4))/2, (6+0)/2) = (−2, 3)</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                3. Challenge Problem:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>Triangle ABC has vertices A(1, 3), B(−1, −1), and C(4, 1). Classify the triangle as equilateral, isosceles, or scalene by calculating the lengths of all three sides.</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>AB</strong> = √[(−1−1)² + (−1−3)²] = √[4 + 16] = √20 = 2√5</p>
                  <p><strong>BC</strong> = √[(4−(−1))² + (1−(−1))²] = √[25 + 4] = √29</p>
                  <p><strong>AC</strong> = √[(4−1)² + (1−3)²] = √[9 + 4] = √13</p>
                  <p className="font-bold mt-2">All sides have different lengths, so the triangle is <strong>scalene</strong>.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li>The Cartesian plane has two perpendicular axes (x-axis horizontal, y-axis vertical)</li>
            <li>Points are described using <strong>ordered pairs (x, y)</strong></li>
            <li>The plane is divided into <strong>four quadrants</strong> with different sign combinations</li>
            <li><strong>Distance formula:</strong> d = √[(x₂ − x₁)² + (y₂ − y₁)²] (derived from Pythagoras)</li>
            <li><strong>Midpoint formula:</strong> M = ((x₁ + x₂)/2, (y₁ + y₂)/2) (average of coordinates)</li>
            <li>Distance is always positive or zero; leave answers in surd form for exact values</li>
            <li>The midpoint is equidistant from both endpoints</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoordinatePlaneFundamentals;
