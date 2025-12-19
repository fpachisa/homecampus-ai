import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function AreaOfCircle() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-red-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Area of a Circle</h1>
        <p className="text-lg">Learn to calculate the space inside a circle</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is Area? */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-rose-700 dark:text-rose-300">1. What is the Area of a Circle?</h2>

          <div className="bg-rose-50 dark:bg-rose-900/30 p-6 rounded-lg border-l-4 border-rose-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              The <strong>area of a circle</strong> is the amount of space inside the circle.
              It is measured in <strong>square units</strong> (cm², m², etc.).
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Visual: The Area</h3>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "full",
                showCentre: true,
                showRadiusLine: true,
                showShading: true,
                caption: "The shaded region shows the area of the circle"
              }}
            />
          </div>
        </section>

        {/* Section 2: The Area Formula */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">2. The Area Formula</h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Formula</h3>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg text-center mb-4">
              <p className="text-3xl font-bold text-red-600 dark:text-red-400">
                Area = <MathText>{'$\\pi \\times r \\times r$'}</MathText>
              </p>
              <p className="text-xl text-gray-700 dark:text-gray-300 mt-2">or</p>
              <p className="text-3xl font-bold text-red-600 dark:text-red-400">
                A = <MathText>{'$\\pi r^2$'}</MathText>
              </p>
            </div>

            <p className="text-gray-800 dark:text-gray-200">
              where <strong>r</strong> is the radius of the circle.
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
            <p className="text-gray-800 dark:text-gray-200">
              <strong>Important:</strong> The formula uses the <strong>radius</strong>, not the diameter!
              If you're given the diameter, you must first find the radius (r = d ÷ 2).
            </p>
          </div>
        </section>

        {/* Section 3: Examples with Radius Given */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">3. Finding Area (Radius Given)</h2>

          {/* Example 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Example 1: <MathText>{'$(\\text{Take } \\pi = \\frac{22}{7})$'}</MathText>
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A circle has a radius of 7 cm. Find its area.
            </p>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "full",
                givenValue: "7",
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
                Area = <MathText>{'$\\pi \\times r \\times r$'}</MathText>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                <MathText>{'$= \\frac{22}{7} \\times 7 \\times 7$'}</MathText>
              </p>
              <p className="text-gray-800 dark:text-gray-200 font-bold">
                = 154 cm²
              </p>
            </div>

            <div className="mt-4 p-4 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Tip:</strong> When the radius is 7 (or a multiple of 7), using <MathText>{'$\\pi = \\frac{22}{7}$'}</MathText> makes the calculation easier because the 7s cancel out!
              </p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Example 2: <MathText>{'$(\\text{Take } \\pi = 3.14)$'}</MathText>
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Find the area of a circular garden with radius 5 m.
            </p>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "full",
                givenValue: "5",
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
                Area = <MathText>{'$\\pi \\times r \\times r$'}</MathText>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                = 3.14 × 5 × 5
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                = 3.14 × 25
              </p>
              <p className="text-gray-800 dark:text-gray-200 font-bold">
                = 78.5 m²
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Examples with Diameter Given */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">4. Finding Area (Diameter Given)</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Remember!</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When the <strong>diameter</strong> is given, you must first find the <strong>radius</strong>:
            </p>
            <p className="text-xl text-center mt-2 text-gray-900 dark:text-gray-100 font-bold">
              Radius = Diameter ÷ 2
            </p>
          </div>

          {/* Example 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Example: <MathText>{'$(\\text{Take } \\pi = 3.14)$'}</MathText>
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The diameter of a circle is 20 cm. Find its area.
            </p>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "full",
                givenValue: "20",
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
                Radius = 20 cm ÷ 2 = 10 cm
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>Step 2: Calculate the area</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Area = <MathText>{'$\\pi \\times r \\times r$'}</MathText>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                = 3.14 × 10 × 10
              </p>
              <p className="text-gray-800 dark:text-gray-200 font-bold">
                = 314 cm²
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
                A circle has a radius of 14 cm. Find its area.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "full",
                  givenValue: "14",
                  givenType: "radius",
                  unit: "cm",
                  showCentre: true,
                  showRadiusLine: true,
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
                    Area = <MathText>{'$\\pi \\times r \\times r$'}</MathText>
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <MathText>{'$= \\frac{22}{7} \\times 14 \\times 14$'}</MathText>
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 font-bold">
                    = 616 cm²
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
                The diameter of a circular pond is 12 m. Find its area.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "full",
                  givenValue: "12",
                  givenType: "diameter",
                  unit: "m",
                  showCentre: true,
                  showDiameterLine: true,
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
                    Radius = 12 ÷ 2 = 6 m
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Area = 3.14 × 6 × 6
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 font-bold">
                    = 113.04 m²
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
                A circular clock has a diameter of 28 cm. Find its area.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "full",
                  givenValue: "28",
                  givenType: "diameter",
                  unit: "cm",
                  showCentre: true,
                  showDiameterLine: true,
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
                    Radius = 28 ÷ 2 = 14 cm
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Area = <MathText>{'$\\frac{22}{7} \\times 14 \\times 14$'}</MathText>
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 font-bold">
                    = 616 cm²
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
                A pizza has a radius of 15 cm. Find the area of the pizza.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "full",
                  givenValue: "15",
                  givenType: "radius",
                  unit: "cm",
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
                    Area = 3.14 × 15 × 15
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    = 3.14 × 225
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 font-bold">
                    = 706.5 cm²
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-gradient-to-r from-rose-100 to-red-100 dark:from-rose-900/30 dark:to-red-900/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Key Takeaways</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Area of a circle</strong> = <MathText>{'$\\pi \\times r \\times r$'}</MathText> or <MathText>{'$\\pi r^2$'}</MathText>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2.</span>
              <p className="text-gray-800 dark:text-gray-200">
                The formula always uses the <strong>radius</strong>. If given diameter, find radius first (r = d ÷ 2).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3.</span>
              <p className="text-gray-800 dark:text-gray-200">
                Area is measured in <strong>square units</strong> (cm², m², etc.).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4.</span>
              <p className="text-gray-800 dark:text-gray-200">
                When the radius is a multiple of 7, use <MathText>{'$\\pi = \\frac{22}{7}$'}</MathText> for easier calculations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
