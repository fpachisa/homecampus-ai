import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function AreaSemiQuarter() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Area of a Semicircle and a Quarter Circle</h1>
        <p className="text-lg">Learn to calculate the area of partial circles</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Area of a Semicircle */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-amber-700 dark:text-amber-300">1. Area of a Semicircle</h2>

          <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Formula</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              A <strong>semicircle</strong> is <strong>half</strong> of a circle, so its area is half the area of a full circle.
            </p>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg text-center mt-4">
              <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                Area of semicircle = <MathText>{'$\\frac{1}{2} \\times \\pi \\times r^2$'}</MathText>
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Visual: The Semicircle</h3>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "semicircle",
                orientation: "top",
                showCentre: true,
                showRadiusLine: true,
                showShading: true,
                caption: "A semicircle is half a circle"
              }}
            />
          </div>

          {/* Semicircle Example 1: Diameter Given */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Example 1: Diameter Given <MathText>{'$(\\text{Take } \\pi = \\frac{22}{7})$'}</MathText>
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Find the area of the semicircle. The diameter is 42 cm.
            </p>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "semicircle",
                orientation: "top",
                givenValue: "42",
                givenType: "diameter",
                unit: "cm",
                showCentre: true,
                showDiameterLine: true,
                showShading: true
              }}
            />

            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-2">Solution:</p>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Step 1: Find the radius</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Radius = 42 cm ÷ 2 = 21 cm
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>Step 2: Find the area of the full circle</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Area of circle = <MathText>{'$\\frac{22}{7} \\times 21 \\times 21$'}</MathText> = 1386 cm²
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>Step 3: Find the area of the semicircle</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Area of semicircle = 1386 ÷ 2 = <strong>693 cm²</strong>
              </p>
            </div>
          </div>

          {/* Semicircle Example 2: Radius Given */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Example 2: Radius Given <MathText>{'$(\\text{Take } \\pi = 3.14)$'}</MathText>
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Find the area of a semicircle with radius 10 m.
            </p>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "semicircle",
                orientation: "bottom",
                givenValue: "10",
                givenType: "radius",
                unit: "m",
                showCentre: true,
                showRadiusLine: true,
                showShading: true
              }}
            />

            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-2">Solution:</p>
              <p className="text-gray-800 dark:text-gray-200">
                Area of circle = 3.14 × 10 × 10 = 314 m²
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Area of semicircle = 314 ÷ 2 = <strong>157 m²</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Area of a Quarter Circle */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">2. Area of a Quarter Circle</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Formula</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              A <strong>quarter circle</strong> is <strong>one-fourth</strong> of a circle, so its area is one-quarter the area of a full circle.
            </p>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg text-center mt-4">
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                Area of quarter circle = <MathText>{'$\\frac{1}{4} \\times \\pi \\times r^2$'}</MathText>
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Visual: The Quarter Circle</h3>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "quarter",
                orientation: "top-right",
                showCentre: true,
                showRadiusLine: true,
                showShading: true,
                caption: "A quarter circle is one-fourth of a circle"
              }}
            />
          </div>

          {/* Quarter Circle Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Example: <MathText>{'$(\\text{Take } \\pi = 3.14)$'}</MathText>
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Find the area of the quarter circle. The radius is 4 cm.
            </p>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "quarter",
                orientation: "bottom-left",
                givenValue: "4",
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
                Area of circle = 3.14 × 4 × 4 = 50.24 cm²
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Area of quarter circle = 50.24 ÷ 4 = <strong>12.56 cm²</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Area of a Three-Quarter Circle */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">3. Area of a Three-Quarter Circle</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Formula</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              A <strong>three-quarter circle</strong> is <strong>three-fourths</strong> of a circle, so its area is three-quarters the area of a full circle.
            </p>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg text-center mt-4">
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                Area of three-quarter circle = <MathText>{'$\\frac{3}{4} \\times \\pi \\times r^2$'}</MathText>
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Visual: The Three-Quarter Circle</h3>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "three-quarter",
                orientation: "missing-top-right",
                showCentre: true,
                showRadiusLine: true,
                showShading: true,
                caption: "A three-quarter circle is three-fourths of a circle"
              }}
            />
          </div>

          {/* Three-Quarter Circle Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Example: <MathText>{'$(\\text{Take } \\pi = \\frac{22}{7})$'}</MathText>
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Find the area of the three-quarter circle. The radius is 14 cm.
            </p>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "three-quarter",
                orientation: "missing-bottom-left",
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
                <strong>Step 1: Find the area of the full circle</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Area of circle = <MathText>{'$\\frac{22}{7} \\times 14 \\times 14$'}</MathText> = 616 cm²
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>Step 2: Find the area of the three-quarter circle</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Area of <MathText>{'$\\frac{3}{4}$'}</MathText> circle = <MathText>{'$\\frac{3}{4} \\times 616$'}</MathText> = <strong>462 cm²</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Summary of Formulas */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">4. Summary of Formulas</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-red-100 dark:bg-red-900/40 rounded-lg text-center">
                <p className="font-bold text-red-700 dark:text-red-300 mb-2">Full Circle</p>
                <p className="text-gray-800 dark:text-gray-200">
                  <MathText>{'$\\pi r^2$'}</MathText>
                </p>
              </div>
              <div className="p-4 bg-amber-100 dark:bg-amber-900/40 rounded-lg text-center">
                <p className="font-bold text-amber-700 dark:text-amber-300 mb-2">Semicircle</p>
                <p className="text-gray-800 dark:text-gray-200">
                  <MathText>{'$\\frac{1}{2} \\times \\pi r^2$'}</MathText>
                </p>
              </div>
              <div className="p-4 bg-orange-100 dark:bg-orange-900/40 rounded-lg text-center">
                <p className="font-bold text-orange-700 dark:text-orange-300 mb-2">Quarter Circle</p>
                <p className="text-gray-800 dark:text-gray-200">
                  <MathText>{'$\\frac{1}{4} \\times \\pi r^2$'}</MathText>
                </p>
              </div>
              <div className="p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg text-center">
                <p className="font-bold text-indigo-700 dark:text-indigo-300 mb-2">Three-Quarter</p>
                <p className="text-gray-800 dark:text-gray-200">
                  <MathText>{'$\\frac{3}{4} \\times \\pi r^2$'}</MathText>
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Tip:</strong> Always find the area of the <strong>full circle first</strong>, then multiply by the fraction (<MathText>{'$\\frac{1}{2}$'}</MathText>, <MathText>{'$\\frac{1}{4}$'}</MathText>, or <MathText>{'$\\frac{3}{4}$'}</MathText>).
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">5. Practice Problems</h2>

          <div className="space-y-6">
            {/* Problem 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 1 <MathText>{'$(\\text{Take } \\pi = \\frac{22}{7})$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                Find the area of the semicircle. Diameter = 28 cm.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "semicircle",
                  orientation: "top",
                  givenValue: "28",
                  givenType: "diameter",
                  unit: "cm",
                  showCentre: true,
                  showDiameterLine: true,
                  showShading: true
                }}
              />

              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                {showSolution1 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution1 && (
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-800 dark:text-gray-200">
                    Radius = 28 ÷ 2 = 14 cm
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Area of circle = <MathText>{'$\\frac{22}{7} \\times 14 \\times 14$'}</MathText> = 616 cm²
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Area of semicircle = 616 ÷ 2 = <strong>308 cm²</strong>
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
                Find the area of the quarter circle. Radius = 22 cm.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "quarter",
                  orientation: "top-right",
                  givenValue: "22",
                  givenType: "radius",
                  unit: "cm",
                  showCentre: true,
                  showRadiusLine: true,
                  showShading: true
                }}
              />

              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                {showSolution2 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution2 && (
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-800 dark:text-gray-200">
                    Area of circle = 3.14 × 22 × 22 = 1519.76 cm²
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Area of quarter circle = 1519.76 ÷ 4 = <strong>379.94 cm²</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 3 <MathText>{'$(\\text{Take } \\pi = \\frac{22}{7})$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                A quarter of a circular pizza has a radius of 14 cm. Find its area.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "quarter",
                  orientation: "top-left",
                  givenValue: "14",
                  givenType: "radius",
                  unit: "cm",
                  showCentre: true,
                  showRadiusLine: true,
                  showShading: true
                }}
              />

              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                {showSolution3 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution3 && (
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-800 dark:text-gray-200">
                    Area of circle = <MathText>{'$\\frac{22}{7} \\times 14 \\times 14$'}</MathText> = 616 cm²
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Area of quarter = 616 ÷ 4 = <strong>154 cm²</strong>
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
                A semicircular garden has a radius of 8 m. Find the area of the garden.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "semicircle",
                  orientation: "right",
                  givenValue: "8",
                  givenType: "radius",
                  unit: "m",
                  showCentre: true,
                  showRadiusLine: true,
                  showShading: true
                }}
              />

              <button
                onClick={() => setShowSolution4(!showSolution4)}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                {showSolution4 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution4 && (
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-800 dark:text-gray-200">
                    Area of circle = 3.14 × 8 × 8 = 200.96 m²
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Area of semicircle = 200.96 ÷ 2 = <strong>100.48 m²</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Key Takeaways</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Area of semicircle</strong> = <MathText>{'$\\frac{1}{2} \\times \\pi r^2$'}</MathText> = Area of circle ÷ 2
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Area of quarter circle</strong> = <MathText>{'$\\frac{1}{4} \\times \\pi r^2$'}</MathText> = Area of circle ÷ 4
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Area of three-quarter circle</strong> = <MathText>{'$\\frac{3}{4} \\times \\pi r^2$'}</MathText> = Area of circle × <MathText>{'$\\frac{3}{4}$'}</MathText>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4.</span>
              <p className="text-gray-800 dark:text-gray-200">
                Always find the <strong>radius</strong> first if diameter is given!
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Strategy:</strong> Calculate area of full circle first, then multiply by the appropriate fraction.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
