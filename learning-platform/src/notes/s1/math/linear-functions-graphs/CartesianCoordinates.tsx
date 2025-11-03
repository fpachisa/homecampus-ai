import { useState } from 'react';

const CartesianCoordinates = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Cartesian Coordinates</h1>
        <p className="mt-2 text-blue-100">Understanding the coordinate plane and how to locate points in 2D space</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: Understanding the Coordinate System */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Understanding the Coordinate System
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>Cartesian coordinate system</strong> is named after the French mathematician René Descartes.
              It allows us to locate any point on a flat surface using two perpendicular number lines.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Components:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Origin (O)</strong>: The point where the two axes meet, located at (0, 0)</li>
                <li><strong>x-axis</strong>: The horizontal number line (runs left-right)</li>
                <li><strong>y-axis</strong>: The vertical number line (runs up-down)</li>
                <li><strong>Ordered pair (x, y)</strong>: A pair of numbers that shows the position of a point</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">The Four Quadrants:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                The axes divide the plane into four sections called quadrants:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>1st Quadrant</strong>: Both x and y are positive (+, +)</li>
                <li><strong>2nd Quadrant</strong>: x is negative, y is positive (−, +)</li>
                <li><strong>3rd Quadrant</strong>: Both x and y are negative (−, −)</li>
                <li><strong>4th Quadrant</strong>: x is positive, y is negative (+, −)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                Note: Points on the axes themselves do not belong to any quadrant.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Important: Order Matters!</p>
              <p className="text-gray-700 dark:text-gray-300">
                In an ordered pair (a, b):
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mt-2">
                <li>The <strong>first number (a)</strong> is the x-coordinate (horizontal position)</li>
                <li>The <strong>second number (b)</strong> is the y-coordinate (vertical position)</li>
                <li>(3, 5) is <strong>NOT</strong> the same as (5, 3)!</li>
              </ul>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Identifying Quadrants
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              In which quadrant does each point lie?
            </p>
            <p className="text-gray-700 dark:text-gray-300 ml-4">
              (a) A(4, 7)  &nbsp;&nbsp; (b) B(−3, 5)  &nbsp;&nbsp; (c) C(−2, −6)  &nbsp;&nbsp; (d) D(5, −3)
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>(a) A(4, 7): x = 4 (positive), y = 7 (positive) → <strong>1st Quadrant</strong></li>
                <li>(b) B(−3, 5): x = −3 (negative), y = 5 (positive) → <strong>2nd Quadrant</strong></li>
                <li>(c) C(−2, −6): x = −2 (negative), y = −6 (negative) → <strong>3rd Quadrant</strong></li>
                <li>(d) D(5, −3): x = 5 (positive), y = −3 (negative) → <strong>4th Quadrant</strong></li>
              </ul>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Understanding Coordinates
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              (a) State the coordinates of the origin.<br/>
              (b) In which quadrant does the point P(−7, −2) lie?<br/>
              (c) If a point Q lies in the 4th quadrant, what can you say about its x and y coordinates?
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  (a) The origin is at (0, 0)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (b) P(−7, −2): Both coordinates are negative → <strong>3rd Quadrant</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (c) In the 4th quadrant: x-coordinate is <strong>positive</strong>, y-coordinate is <strong>negative</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Plotting and Reading Points */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Plotting and Reading Points
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To <strong>plot</strong> a point means to mark its position on the coordinate plane using its ordered pair (x, y).
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Steps to Plot a Point (x, y):</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Start at the origin (0, 0)</li>
                <li>Move <strong>x units</strong> along the x-axis (right if positive, left if negative)</li>
                <li>From there, move <strong>y units</strong> parallel to the y-axis (up if positive, down if negative)</li>
                <li>Mark the point at this position</li>
              </ol>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-4">
              <p className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Working with Different Scales:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                The scales on the x-axis and y-axis do not have to be the same! Always check:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>What does each small division represent?</li>
                <li>Are the x and y scales different?</li>
                <li>Where is the origin located?</li>
              </ul>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Plotting Points
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Plot the following points on a coordinate plane: A(3, 4), B(−2, 5), C(−4, −3), D(2, −1)
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Point A(3, 4)</strong>: From origin, move 3 units right, then 4 units up</li>
                <li><strong>Point B(−2, 5)</strong>: From origin, move 2 units left, then 5 units up</li>
                <li><strong>Point C(−4, −3)</strong>: From origin, move 4 units left, then 3 units down</li>
                <li><strong>Point D(2, −1)</strong>: From origin, move 2 units right, then 1 unit down</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                When you plot these points on graph paper, you'll see they're in quadrants 1, 2, 3, and 4 respectively.
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Reading Coordinates
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A rectangle has vertices at A(1, 2), B(5, 2), and C(5, 6). <br/>
              (a) What are the coordinates of the fourth vertex D?<br/>
              (b) What is the length of the rectangle?<br/>
              (c) What is the width of the rectangle?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  (a) For a rectangle, opposite sides are parallel and equal. <br/>
                  A and B have the same y-coordinate (2), and B and C have the same x-coordinate (5).<br/>
                  So D must have x-coordinate of A (which is 1) and y-coordinate of C (which is 6).<br/>
                  <strong>Answer: D(1, 6)</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (b) Length (AB) = difference in x-coordinates = 5 − 1 = <strong>4 units</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (c) Width (BC) = difference in y-coordinates = 6 − 2 = <strong>4 units</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm italic">
                  Actually, this is a square since length = width = 4 units!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Coordinate Transformations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Coordinate Transformations
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We can find new coordinates by moving points horizontally or vertically on the coordinate plane.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Movement Rules:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                If a point P is at (x, y), then:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Moving <strong>a units right</strong> gives new point: (x + a, y)</li>
                <li>Moving <strong>a units left</strong> gives new point: (x − a, y)</li>
                <li>Moving <strong>b units up</strong> gives new point: (x, y + b)</li>
                <li>Moving <strong>b units down</strong> gives new point: (x, y − b)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                Horizontal movement affects the x-coordinate, vertical movement affects the y-coordinate.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Reflections:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                For a point (x, y):
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Reflection in x-axis</strong>: (x, y) becomes (x, −y) — y-coordinate changes sign</li>
                <li><strong>Reflection in y-axis</strong>: (x, y) becomes (−x, y) — x-coordinate changes sign</li>
                <li><strong>Reflection in origin</strong>: (x, y) becomes (−x, −y) — both coordinates change sign</li>
              </ul>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Moving Points
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Point A is at (−2, 7). It is moved 6 units to the right and 10 units down. What are the coordinates of the new position?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                Starting point: A(−2, 7)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Moving 6 units right: x-coordinate increases by 6<br/>
                New x-coordinate: −2 + 6 = 4
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Moving 10 units down: y-coordinate decreases by 10<br/>
                New y-coordinate: 7 − 10 = −3
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Answer: New position is (4, −3)</strong>
              </p>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Reflections
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Point B is at (5, −3). Find the coordinates of B after reflection in:<br/>
              (a) the x-axis  &nbsp;&nbsp; (b) the y-axis  &nbsp;&nbsp; (c) the origin
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                Original point: B(5, −3)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                (a) Reflection in x-axis: (x, y) → (x, −y)<br/>
                B'(5, 3) — only y-coordinate changes sign
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                (b) Reflection in y-axis: (x, y) → (−x, y)<br/>
                B'(−5, −3) — only x-coordinate changes sign
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                (c) Reflection in origin: (x, y) → (−x, −y)<br/>
                B'(−5, 3) — both coordinates change sign
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Transformations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Triangle PQR has vertices P(2, 3), Q(6, 3), and R(4, 7).<br/>
              (a) The triangle is moved 3 units left and 2 units up. Find the new coordinates of P, Q, and R.<br/>
              (b) From the original position, if the triangle is reflected in the x-axis, what are the new coordinates?
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  (a) Moving 3 units left (subtract 3 from x) and 2 units up (add 2 to y):
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                  <li>P(2, 3) → P'(2 − 3, 3 + 2) = <strong>P'(−1, 5)</strong></li>
                  <li>Q(6, 3) → Q'(6 − 3, 3 + 2) = <strong>Q'(3, 5)</strong></li>
                  <li>R(4, 7) → R'(4 − 3, 7 + 2) = <strong>R'(1, 9)</strong></li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  (b) Reflection in x-axis: (x, y) → (x, −y)
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                  <li>P(2, 3) → <strong>P'(2, −3)</strong></li>
                  <li>Q(6, 3) → <strong>Q'(6, −3)</strong></li>
                  <li>R(4, 7) → <strong>R'(4, −7)</strong></li>
                </ul>
              </div>
            )}
          </div>

          {/* Additional Practice */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mt-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Combined Challenge
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A point starts at A(−3, 2). It moves 7 units right, then 5 units down, and finally reflects in the y-axis. What is its final position?
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution (step by step):</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Step 1:</strong> Starting point: A(−3, 2)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Step 2:</strong> Move 7 units right (add 7 to x):<br/>
                  (−3 + 7, 2) = (4, 2)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Step 3:</strong> Move 5 units down (subtract 5 from y):<br/>
                  (4, 2 − 5) = (4, −3)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Step 4:</strong> Reflect in y-axis (change sign of x):<br/>
                  (−4, −3)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Final Answer: (−4, −3)</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>The Cartesian coordinate system uses two perpendicular axes (x-axis and y-axis) to locate points</li>
            <li>An ordered pair (x, y) gives the position of a point: x is horizontal, y is vertical</li>
            <li>The plane is divided into four quadrants with different sign combinations</li>
            <li>Order matters: (a, b) ≠ (b, a) unless a = b</li>
            <li>Points on the axes do not belong to any quadrant</li>
            <li>Horizontal movement changes the x-coordinate; vertical movement changes the y-coordinate</li>
            <li>Reflections change the sign of one or both coordinates depending on the axis of reflection</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartesianCoordinates;
