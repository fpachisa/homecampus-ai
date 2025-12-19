import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function PerimeterSemiQuarter() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Perimeter of a Semicircle and a Quarter Circle</h1>
        <p className="text-lg">Learn to find the total distance around partial circles</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Perimeter of a Semicircle */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-300">1. Perimeter of a Semicircle</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What is a Semicircle?</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              A <strong>semicircle</strong> is <strong>half</strong> of a circle.
              Its perimeter consists of:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-200">
              <li>The curved part (arc) = half the circumference</li>
              <li>The straight part = diameter</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">The Semicircle</h3>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "semicircle",
                orientation: "top",
                showCentre: true,
                showRadiusLine: false,
                showDiameterLine: true,
                highlightArc: true,
                caption: "A semicircle: half of a circle"
              }}
            />

            <div className="mt-4 p-4 bg-teal-100 dark:bg-teal-900/40 rounded-lg text-center">
              <p className="text-lg font-bold text-teal-700 dark:text-teal-300">
                Perimeter of semicircle = Arc length + Diameter
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                = <MathText>{'$\\frac{1}{2} \\times \\pi \\times d + d$'}</MathText>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                or = <MathText>{'$\\pi r + 2r$'}</MathText> (when radius is given)
              </p>
            </div>
          </div>

          {/* Semicircle Example 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Example 1: Diameter Given <MathText>{'$(\\text{Take } \\pi = 3.14)$'}</MathText>
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The diameter of a semicircle is 10 cm. Find its perimeter.
            </p>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "semicircle",
                orientation: "top",
                givenValue: "10",
                givenType: "diameter",
                unit: "cm",
                showCentre: true,
                showDiameterLine: true
              }}
            />

            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-2">Solution:</p>
              <p className="text-gray-800 dark:text-gray-200">
                Circumference = <MathText>{'$\\pi$'}</MathText> × Diameter = 3.14 × 10 = 31.4 cm
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Arc length = 31.4 ÷ 2 = 15.7 cm
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Perimeter of semicircle = 15.7 + 10 = <strong>25.7 cm</strong>
              </p>
            </div>
          </div>

          {/* Semicircle Example 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Example 2: Radius Given <MathText>{'$(\\text{Take } \\pi = \\frac{22}{7})$'}</MathText>
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Find the perimeter of the semicircle. The radius is 28 cm.
            </p>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "semicircle",
                orientation: "bottom",
                givenValue: "28",
                givenType: "radius",
                unit: "cm",
                showCentre: true,
                showRadiusLine: true
              }}
            />

            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-2">Solution:</p>
              <p className="text-gray-800 dark:text-gray-200">
                Arc length = <MathText>{'$\\frac{1}{2} \\times 2 \\times \\pi \\times r = \\frac{1}{2} \\times 2 \\times \\frac{22}{7} \\times 28$'}</MathText> = 88 cm
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Perimeter = Arc length + Radius + Radius
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                = 88 + 28 + 28 = <strong>144 cm</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Perimeter of a Quarter Circle */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-cyan-700 dark:text-cyan-300">2. Perimeter of a Quarter Circle</h2>

          <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border-l-4 border-cyan-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What is a Quarter Circle?</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              A <strong>quarter circle</strong> is <strong>one-fourth</strong> of a circle.
              Its perimeter consists of:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-200">
              <li>The curved part (arc) = one-quarter of the circumference</li>
              <li>Two straight edges = radius + radius</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">The Quarter Circle</h3>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "quarter",
                orientation: "top-right",
                showCentre: true,
                showRadiusLine: true,
                highlightArc: true,
                showShading: true,
                caption: "A quarter circle: one-fourth of a circle"
              }}
            />

            <div className="mt-4 p-4 bg-cyan-100 dark:bg-cyan-900/40 rounded-lg text-center">
              <p className="text-lg font-bold text-cyan-700 dark:text-cyan-300">
                Perimeter of quarter circle = Arc length + Radius + Radius
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                = <MathText>{'$\\frac{1}{4} \\times 2\\pi r + r + r$'}</MathText>
              </p>
            </div>
          </div>

          {/* Quarter Circle Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Example: <MathText>{'$(\\text{Take } \\pi = 3.14)$'}</MathText>
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Find the perimeter of the quarter circle with radius 5 cm.
            </p>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "quarter",
                orientation: "top-left",
                givenValue: "5",
                givenType: "radius",
                unit: "cm",
                showCentre: true,
                showRadiusLine: true,
                showShading: true
              }}
            />

            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-2">Solution:</p>
              <p className="text-gray-800 dark:text-gray-200">
                Circumference = 2 × <MathText>{'$\\pi$'}</MathText> × r = 2 × 3.14 × 5 = 31.4 cm
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Arc length = 31.4 ÷ 4 = 7.85 cm
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Perimeter = 7.85 + 5 + 5 = <strong>17.85 cm</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Three-Quarter Circle */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">3. Perimeter of a Three-Quarter Circle</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Three-Quarter Circle</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              A <strong>three-quarter circle</strong> is <strong>three-fourths</strong> of a circle.
              Its perimeter consists of:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-200">
              <li>The curved part (arc) = three-quarters of the circumference</li>
              <li>Two straight edges = radius + radius</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Example: <MathText>{'$(\\text{Take } \\pi = \\frac{22}{7})$'}</MathText>
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Find the perimeter of the figure. The radius is 14 cm.
            </p>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "three-quarter",
                orientation: "missing-bottom-right",
                givenValue: "14",
                givenType: "radius",
                unit: "cm",
                showCentre: true,
                showRadiusLine: true,
                showShading: true
              }}
            />

            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-2">Solution:</p>
              <p className="text-gray-800 dark:text-gray-200">
                Arc length = <MathText>{'$\\frac{3}{4} \\times 2 \\times \\pi \\times r$'}</MathText>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                = <MathText>{'$\\frac{3}{4} \\times 2 \\times \\frac{22}{7} \\times 14$'}</MathText> = 66 cm
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Perimeter = 66 + 14 + 14 = <strong>94 cm</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">4. Practice Problems</h2>

          <div className="space-y-6">
            {/* Problem 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 1 <MathText>{'$(\\text{Take } \\pi = \\frac{22}{7})$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                Find the perimeter of the semicircle. Diameter = 35 cm.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "semicircle",
                  orientation: "top",
                  givenValue: "35",
                  givenType: "diameter",
                  unit: "cm",
                  showCentre: true,
                  showDiameterLine: true
                }}
              />

              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                {showSolution1 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution1 && (
                <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
                  <p className="text-gray-800 dark:text-gray-200">
                    Arc length = <MathText>{'$\\frac{1}{2} \\times \\frac{22}{7} \\times 35$'}</MathText> = 55 cm
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Perimeter = 55 + 35 = <strong>90 cm</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 2 <MathText>{'$(\\text{Take } \\pi = 3.14)$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                Find the perimeter of the quarter circle. Radius = 8 m. Round to the nearest whole number.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "quarter",
                  orientation: "bottom-left",
                  givenValue: "8",
                  givenType: "radius",
                  unit: "m",
                  showCentre: true,
                  showRadiusLine: true,
                  showShading: true
                }}
              />

              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                {showSolution2 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution2 && (
                <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
                  <p className="text-gray-800 dark:text-gray-200">
                    Circumference = 2 × 3.14 × 8 = 50.24 m
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Arc length = 50.24 ÷ 4 = 12.56 m
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Perimeter = 12.56 + 8 + 8 = 28.56 m ≈ <strong>29 m</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 3 <MathText>{'$(\\text{Take } \\pi = 3.14)$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                Find the perimeter of the semicircle. Radius = 20 m.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "semicircle",
                  orientation: "bottom",
                  givenValue: "20",
                  givenType: "radius",
                  unit: "m",
                  showCentre: true,
                  showRadiusLine: true,
                  showShading: true
                }}
              />

              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                {showSolution3 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution3 && (
                <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
                  <p className="text-gray-800 dark:text-gray-200">
                    Arc length = <MathText>{'$\\pi \\times r$'}</MathText> = 3.14 × 20 = 62.8 m
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Diameter = 2 × 20 = 40 m
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Perimeter = 62.8 + 40 = <strong>102.8 m</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 4 <MathText>{'$(\\text{Take } \\pi = 3.14)$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                Find the perimeter of the quarter circle. Radius = 4.5 cm. Round to 2 decimal places.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "quarter",
                  orientation: "top-right",
                  givenValue: "4.5",
                  givenType: "radius",
                  unit: "cm",
                  showCentre: true,
                  showRadiusLine: true,
                  showShading: true
                }}
              />

              <button
                onClick={() => setShowSolution4(!showSolution4)}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                {showSolution4 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution4 && (
                <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
                  <p className="text-gray-800 dark:text-gray-200">
                    Circumference = 2 × 3.14 × 4.5 = 28.26 cm
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Arc length = 28.26 ÷ 4 = 7.065 cm
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Perimeter = 7.065 + 4.5 + 4.5 = 16.065 cm ≈ <strong>16.07 cm</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Key Takeaways</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Semicircle perimeter</strong> = Arc (<MathText>{'$\\frac{1}{2}$'}</MathText> circumference) + Diameter
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Quarter circle perimeter</strong> = Arc (<MathText>{'$\\frac{1}{4}$'}</MathText> circumference) + Radius + Radius
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Three-quarter circle perimeter</strong> = Arc (<MathText>{'$\\frac{3}{4}$'}</MathText> circumference) + Radius + Radius
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4.</span>
              <p className="text-gray-800 dark:text-gray-200">
                Always identify the <strong>curved parts</strong> and <strong>straight parts</strong> before calculating!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
