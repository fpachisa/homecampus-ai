import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function PartsOfCircle() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Parts of a Circle</h1>
        <p className="text-lg">Learn about the centre, radius, and diameter of a circle</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Introduction to Circles */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">1. What is a Circle?</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              A <strong>circle</strong> is a closed curved shape where every point on the curve is
              the <strong>same distance</strong> from the centre.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">A Circle with Centre O</h3>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "full",
                showCentre: true,
                showRadiusLine: false,
                centreLabel: "O",
                caption: "The centre of a circle is usually labelled O"
              }}
            />

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Note:</strong> The centre is a point inside the circle. It is usually labelled
                with the letter <strong>O</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Radius */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">2. The Radius</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              The <strong>radius</strong> is a straight line from the <strong>centre</strong> of
              the circle to <strong>any point</strong> on the circle.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mt-2">
              All radii (plural of radius) of the same circle have the <strong>same length</strong>.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Circle with Radius 4 cm</h3>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "full",
                givenValue: "4",
                givenType: "radius",
                unit: "cm",
                showCentre: true,
                showRadiusLine: true,
                centreLabel: "O",
                caption: "OA is a radius of the circle"
              }}
            />

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-lg">
                <p className="text-gray-900 dark:text-gray-100 font-bold">Symbol</p>
                <p className="text-gray-800 dark:text-gray-200">We use <strong>r</strong> to represent the radius</p>
              </div>
              <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-lg">
                <p className="text-gray-900 dark:text-gray-100 font-bold">All radii are equal</p>
                <p className="text-gray-800 dark:text-gray-200">OA = OB = OC = 4 cm</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Diameter */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">3. The Diameter</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              The <strong>diameter</strong> is a straight line that passes through the <strong>centre</strong>
              of the circle and has both endpoints on the circle.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mt-2">
              The diameter is the <strong>longest</strong> line you can draw inside a circle.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Circle with Diameter 10 cm</h3>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "full",
                givenValue: "10",
                givenType: "diameter",
                unit: "cm",
                showCentre: true,
                showDiameterLine: true,
                centreLabel: "O",
                caption: "AB is a diameter of the circle"
              }}
            />

            <div className="mt-4 p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
              <p className="text-gray-900 dark:text-gray-100 font-bold">Symbol</p>
              <p className="text-gray-800 dark:text-gray-200">We use <strong>d</strong> to represent the diameter</p>
            </div>
          </div>
        </section>

        {/* Section 4: The Key Relationship */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">4. The Key Relationship: Diameter = 2 × Radius</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Formula</h3>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg text-center mb-4">
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                Diameter = 2 × Radius
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">or</p>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                d = 2 × r
              </p>
            </div>
            <p className="text-gray-800 dark:text-gray-200">
              This also means: <strong>Radius = Diameter ÷ 2</strong> or <strong>r = d ÷ 2</strong>
            </p>
          </div>

          {/* Example: Finding Diameter from Radius */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Finding Diameter from Radius</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The radius of a circle is 5.5 m. Find its diameter.
            </p>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "full",
                givenValue: "5.5",
                givenType: "radius",
                unit: "m",
                showCentre: true,
                showRadiusLine: true,
                centreLabel: "O"
              }}
            />

            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-2">Solution:</p>
              <p className="text-gray-800 dark:text-gray-200">Radius = 5.5 m</p>
              <p className="text-gray-800 dark:text-gray-200">Diameter = 2 × 5.5 m</p>
              <p className="text-gray-800 dark:text-gray-200 font-bold">Diameter = 11 m</p>
            </div>
          </div>

          {/* Example: Finding Radius from Diameter */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Finding Radius from Diameter</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The diameter of a circle is 15 m. Find its radius.
            </p>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "full",
                givenValue: "15",
                givenType: "diameter",
                unit: "m",
                showCentre: true,
                showDiameterLine: true,
                centreLabel: "O"
              }}
            />

            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-2">Solution:</p>
              <p className="text-gray-800 dark:text-gray-200">Diameter = 15 m</p>
              <p className="text-gray-800 dark:text-gray-200">Radius = 15 m ÷ 2</p>
              <p className="text-gray-800 dark:text-gray-200 font-bold">Radius = 7.5 m</p>
            </div>
          </div>
        </section>

        {/* Section 5: Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-300">5. Practice Problems</h2>

          <div className="space-y-6">
            {/* Problem 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 1: Find the Diameter
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                The radius of a circle is 6 cm. Find its diameter.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "full",
                  givenValue: "6",
                  givenType: "radius",
                  unit: "cm",
                  showCentre: true,
                  showRadiusLine: true
                }}
              />

              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
              >
                {showSolution1 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution1 && (
                <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/30 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-800 dark:text-gray-200">Diameter = 2 × Radius</p>
                  <p className="text-gray-800 dark:text-gray-200">Diameter = 2 × 6 cm</p>
                  <p className="text-gray-800 dark:text-gray-200 font-bold">Diameter = 12 cm</p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 2: Find the Radius
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                The diameter of a circle is 24 cm. Find its radius.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "full",
                  givenValue: "24",
                  givenType: "diameter",
                  unit: "cm",
                  showCentre: true,
                  showDiameterLine: true
                }}
              />

              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
              >
                {showSolution2 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution2 && (
                <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/30 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-800 dark:text-gray-200">Radius = Diameter ÷ 2</p>
                  <p className="text-gray-800 dark:text-gray-200">Radius = 24 cm ÷ 2</p>
                  <p className="text-gray-800 dark:text-gray-200 font-bold">Radius = 12 cm</p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 3: Missing Values
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                Complete the table:
              </p>

              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-4">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Circle</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Radius</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Diameter</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200">W</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200">13 cm</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200">?</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200">X</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200">?</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200">13 cm</td>
                  </tr>
                </tbody>
              </table>

              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
              >
                {showSolution3 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution3 && (
                <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/30 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Circle W:</strong></p>
                  <p className="text-gray-800 dark:text-gray-200">Diameter = 2 × 13 cm = <strong>26 cm</strong></p>
                  <p className="text-gray-800 dark:text-gray-200 mt-2"><strong>Circle X:</strong></p>
                  <p className="text-gray-800 dark:text-gray-200">Radius = 13 cm ÷ 2 = <strong>6.5 cm</strong></p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Key Takeaways</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1.</span>
              <p className="text-gray-800 dark:text-gray-200">
                The <strong>centre (O)</strong> is the point inside the circle that is equidistant from all points on the circle.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2.</span>
              <p className="text-gray-800 dark:text-gray-200">
                The <strong>radius (r)</strong> is a line from the centre to any point on the circle.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3.</span>
              <p className="text-gray-800 dark:text-gray-200">
                The <strong>diameter (d)</strong> is a line passing through the centre with both endpoints on the circle.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Key formula:</strong> Diameter = 2 × Radius (or d = 2r)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5.</span>
              <p className="text-gray-800 dark:text-gray-200">
                All radii of the same circle are <strong>equal in length</strong>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
