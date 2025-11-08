import { useState } from 'react';
import RightTriangleVisualizer from '../../../../components/math-tools/RightTriangleVisualizer';
import RectangleVisualizer from '../../../../components/math-tools/RectangleVisualizer';

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
        <h1 className="text-3xl font-bold">Real-World Applications</h1>
        <p className="mt-2 text-teal-100">
          See how Pythagoras' Theorem solves practical problems in everyday life
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Introduction */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              🌍 Why Pythagoras' Theorem Matters
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Pythagoras' Theorem isn't just an abstract mathematical formula - it's used every day by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li><strong>Construction workers</strong> checking if corners are square</li>
              <li><strong>Architects</strong> designing buildings and calculating diagonal supports</li>
              <li><strong>Pilots and navigators</strong> calculating shortest distances</li>
              <li><strong>Engineers</strong> designing structures with right-angled supports</li>
              <li><strong>GPS systems</strong> calculating distances between locations</li>
              <li><strong>Carpenters</strong> ensuring walls meet at right angles</li>
            </ul>
          </div>
        </div>

        {/* Section 1: Ladder Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Ladder Problems
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              One of the most common applications of Pythagoras' Theorem involves ladders leaning against walls. The wall, ground, and ladder form a right-angled triangle!
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                🪜 Understanding the Ladder Setup
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  In a typical ladder problem:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>• <strong>Vertical leg:</strong> Height up the wall</li>
                  <li>• <strong>Horizontal leg:</strong> Distance from wall to base of ladder</li>
                  <li>• <strong>Hypotenuse:</strong> Length of the ladder</li>
                  <li>• <strong>Right angle:</strong> Where wall meets ground</li>
                </ul>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                💡 When practicing with the AI tutor, you'll see interactive visualizations showing the ladder, wall, and ground forming a right triangle!
              </p>
            </div>
          </div>

          {/* Worked Example 1 - From PDF */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 1: The Classic Ladder Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A construction worker is on a ladder that is placed against a vertical wall. The top of the ladder is 2.4 m above the ground and the foot of the ladder is 0.5 m from the wall for stability. Calculate the length of the ladder.
            </p>

            <div className="my-4">
              <RightTriangleVisualizer
                angle={null}
                hypotenuse="x m"
                opposite="2.4 m"
                adjacent="0.5 m"
                highlightSide="none"
                showRightAngle={true}
                caption="The ladder, wall, and ground form a right-angled triangle"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Let the length of the ladder be x m.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The wall and ground form a right angle, so we can use Pythagoras' Theorem:
                <br />
                • Vertical side (height) = 2.4 m
                <br />
                • Horizontal side (distance from wall) = 0.5 m
                <br />
                • Hypotenuse (ladder) = x m
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Using Pythagoras' Theorem:
                <br />
                x² = 2.4² + 0.5²
                <br />
                x² = 5.76 + 0.25
                <br />
                x² = 6.01
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                x = √6.01 (since x &gt; 0)
                <br />
                x = 2.45 m (to 3 significant figures)
              </p>

              <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded mt-3">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Answer:</strong> The ladder is <strong>2.45 m</strong> long.
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Fire Rescue Ladder
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A fire rescue ladder is 10 m long. It is placed against a building with its base 2 m from the wall. How high up the building does the ladder reach? Give your answer to 2 decimal places.
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Let the height = h m
                  <br />
                  Ladder (hypotenuse) = 10 m
                  <br />
                  Distance from wall = 2 m
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Using Pythagoras' Theorem:
                  <br />
                  10² = 2² + h²
                  <br />
                  100 = 4 + h²
                  <br />
                  h² = 96
                  <br />
                  h = √96 = 9.798... m
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Answer:</strong> The ladder reaches <strong>9.80 m</strong> up the building.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Distance and Navigation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Distance and Navigation
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pythagoras' Theorem helps us find the shortest distance between two points when traveling in perpendicular directions (like moving East then North, or along a grid).
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                🧭 Navigation Key Concept
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                When someone travels in two perpendicular directions (forming a right angle), the direct distance is the hypotenuse of the right triangle formed by their path.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="text-gray-700 dark:text-gray-300 font-mono text-sm">
                  Example path:
                  <br />
                  Start → 12 km East → 5 km North → End
                  <br />
                  <br />
                  Direct distance = √(12² + 5²) = √169 = 13 km
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2 - From PDF */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 2: Boat Navigation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Boat A travels due East from Port P for 3 hours to reach Port Q and then travels due South for another 2 hours to reach Port R. Boat B travels due North from Port P for 2 hours to reach Port S and then travels due East for 3 hours to reach Port T.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If the average speeds of Boat A and Boat B are 12 km/h and 18 km/h respectively, calculate the shortest distance between:
              <br />
              (i) Port Q and Port S
            </p>


            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution (i):</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Boat A's journey to Q:</strong>
                <br />
                Distance PQ = speed × time = 12 × 3 = 36 km (East)
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Boat B's journey to S:</strong>
                <br />
                Distance PS = speed × time = 18 × 2 = 36 km (North)
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                In triangle PQS, angle P = 90° (East and North are perpendicular).
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Using Pythagoras' Theorem:
                <br />
                QS² = PQ² + PS²
                <br />
                QS² = 36² + 36²
                <br />
                QS² = 1296 + 1296
                <br />
                QS² = 2592
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                QS = √2592 (since QS &gt; 0)
                <br />
                QS = 50.9 km (to 3 significant figures)
              </p>

              <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded mt-3">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Answer:</strong> The shortest distance between Port Q and Port S is <strong>50.9 km</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Hiking Trail
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A hiker walks 8 km north from camp, then turns and walks 15 km east. How far is the hiker from camp in a straight line? Round to 1 decimal place.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  North and East are perpendicular, so we have a right triangle.
                  <br />
                  North distance = 8 km
                  <br />
                  East distance = 15 km
                  <br />
                  Direct distance = d km
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  d² = 8² + 15²
                  <br />
                  d² = 64 + 225 = 289
                  <br />
                  d = √289 = 17 km
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Answer:</strong> The hiker is <strong>17.0 km</strong> from camp.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  💡 This is the 8-15-17 Pythagorean triple!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Rectangle and Room Diagonals */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Rectangle and Room Diagonals
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In any rectangle, the diagonal divides it into two congruent right-angled triangles. We can use Pythagoras' Theorem to find the length of the diagonal.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                📐 Rectangle Diagonal Formula
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                For a rectangle with length l and width w:
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="text-center text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  Diagonal² = length² + width²
                  <br />
                  d² = l² + w²
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 3: TV Screen Diagonal
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A rectangular TV screen has a width of 80 cm and a height of 45 cm. Find the diagonal length of the screen (this is how TV sizes are measured). Give your answer to the nearest cm.
            </p>

            <div className="my-4">
              <RectangleVisualizer
                length="80 cm"
                width="45 cm"
                highlightMode="none"
                caption="The diagonal divides the rectangle into two right-angled triangles"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The diagonal of a rectangle forms the hypotenuse of a right triangle.
                <br />
                Width = 80 cm
                <br />
                Height = 45 cm
                <br />
                Diagonal = d cm
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Using Pythagoras' Theorem:
                <br />
                d² = 80² + 45²
                <br />
                d² = 6400 + 2025
                <br />
                d² = 8425
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                d = √8425
                <br />
                d = 91.788... cm
              </p>

              <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded mt-3">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Answer:</strong> The diagonal is approximately <strong>92 cm</strong> (to the nearest cm).
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  💡 This would be marketed as a "92 cm" or "36 inch" TV!
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Will the Table Fit?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A dining table is 240 cm long and 100 cm wide. A doorway is 220 cm wide. Can the table be carried diagonally through the doorway? Show your working.
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  First, find the diagonal of the table:
                  <br />
                  d² = 240² + 100²
                  <br />
                  d² = 57600 + 10000
                  <br />
                  d² = 67600
                  <br />
                  d = √67600 = 260 cm
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Compare with doorway:
                  <br />
                  Diagonal of table = 260 cm
                  <br />
                  Width of doorway = 220 cm
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Answer:</strong> No, the table cannot fit through the doorway diagonally because its diagonal (260 cm) is greater than the doorway width (220 cm). The table needs to be disassembled or a different doorway must be used.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: 3D Applications (Extension) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3D Applications - Space Diagonals
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We can extend Pythagoras' Theorem to three dimensions! To find the space diagonal of a rectangular box (cuboid), we apply the theorem twice.
            </p>

            <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-pink-800 dark:text-pink-300 mb-2">
                📦 3D Diagonal Method
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>Step 1:</strong> Find the diagonal of the base (using length and width)</li>
                <li><strong>Step 2:</strong> Use that diagonal with the height to find the space diagonal</li>
              </ol>
              <div className="bg-white dark:bg-gray-800 p-3 rounded mt-3">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  For a box with length l, width w, and height h:
                  <br />
                  Base diagonal² = l² + w²
                  <br />
                  Space diagonal² = (base diagonal)² + h²
                  <br />
                  Or directly: Space diagonal² = l² + w² + h²
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              Example 4: Shipping Container
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A shipping container has dimensions 12 m long, 2.4 m wide, and 2.6 m high. Find the length of the longest straight pole that can fit inside the container. Give your answer to 2 decimal places.
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The longest pole that can fit is the space diagonal.
                <br />
                Length (l) = 12 m
                <br />
                Width (w) = 2.4 m
                <br />
                Height (h) = 2.6 m
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Step 1:</strong> Find the base diagonal
                <br />
                Base diagonal² = 12² + 2.4²
                <br />
                Base diagonal² = 144 + 5.76
                <br />
                Base diagonal² = 149.76
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Step 2:</strong> Find the space diagonal
                <br />
                Space diagonal² = 149.76 + 2.6²
                <br />
                Space diagonal² = 149.76 + 6.76
                <br />
                Space diagonal² = 156.52
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Space diagonal = √156.52
                <br />
                Space diagonal = 12.51 m (to 2 d.p.)
              </p>

              <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded mt-3">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Answer:</strong> The longest pole that can fit is <strong>12.51 m</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Cuboid Challenge
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A rectangular room is 5 m long, 4 m wide, and 3 m high. A spider is at one corner of the floor and a fly is at the opposite corner of the ceiling. What is the shortest straight-line distance the spider would need to travel to reach the fly?
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  This is the space diagonal of the room.
                  <br />
                  l = 5 m, w = 4 m, h = 3 m
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Step 1:</strong> Base diagonal²
                  <br />
                  = 5² + 4² = 25 + 16 = 41
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Step 2:</strong> Space diagonal²
                  <br />
                  = 41 + 3² = 41 + 9 = 50
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Space diagonal = √50 = 7.07 m (to 2 d.p.)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Answer:</strong> The shortest distance is <strong>7.07 m</strong>.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  💡 Note: This is the straight-line distance through the air. If the spider crawled along the surfaces, the path might be different!
                </p>
              </div>
            )}
          </div>

          {/* Practice Problem 5 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 5: Gift Box
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A gift box measures 30 cm × 20 cm × 15 cm. What is the length of the longest ribbon that can be placed straight across the inside of the box from one corner to the opposite corner? Round to 1 decimal place.
            </p>
            <button
              onClick={() => setShowSolution5(!showSolution5)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution5 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution5 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Using the direct formula: d² = l² + w² + h²
                  <br />
                  d² = 30² + 20² + 15²
                  <br />
                  d² = 900 + 400 + 225
                  <br />
                  d² = 1525
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  d = √1525 = 39.05 cm (to 1 d.p.)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Answer:</strong> The longest ribbon is <strong>39.1 cm</strong>.
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
            <li>Ladder problems: wall, ground, and ladder form a right triangle</li>
            <li>Navigation: perpendicular directions create right triangles for shortest distance calculations</li>
            <li>Rectangle diagonals: use d² = length² + width² to find diagonal</li>
            <li>3D space diagonals: apply Pythagoras twice, or use d² = l² + w² + h²</li>
            <li>Always identify the right angle first - usually where two perpendicular surfaces meet</li>
            <li>Draw diagrams to visualize the problem and identify the right triangle</li>
            <li>Check your answer makes practical sense in the real-world context</li>
            <li>Include appropriate units in your final answer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
