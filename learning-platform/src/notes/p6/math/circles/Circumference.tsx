import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function Circumference() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Circumference of a Circle</h1>
        <p className="text-lg">Learn to calculate the distance around a circle</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is Circumference? */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">1. What is Circumference?</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              The <strong>circumference</strong> is the <strong>distance around</strong> a circle.
              It is like the perimeter of a circle.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Visual: The Circumference</h3>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "full",
                showCentre: true,
                showRadiusLine: false,
                highlightArc: true,
                caption: "The circumference is the curved boundary of the circle"
              }}
            />
          </div>
        </section>

        {/* Section 2: The Magic Number Pi */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-pink-700 dark:text-pink-300">2. The Magic Number: Pi (<MathText>{'$\\pi$'}</MathText>)</h2>

          <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border-l-4 border-pink-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Discovery</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When you divide the circumference of ANY circle by its diameter, you always get
              approximately the same number: <strong>3.14159...</strong>
            </p>
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg text-center">
              <p className="text-xl text-gray-900 dark:text-gray-100">
                <MathText>{'$\\frac{\\text{Circumference}}{\\text{Diameter}} \\approx 3.14$'}</MathText>
              </p>
            </div>
            <p className="text-gray-800 dark:text-gray-200 mt-4">
              This special number is called <strong>pi</strong> (pronounced "pie") and is written as <MathText>{'$\\pi$'}</MathText>.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Values of Pi We Use</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-pink-100 dark:bg-pink-900/40 rounded-lg text-center">
                <p className="text-gray-900 dark:text-gray-100 font-bold text-lg">Decimal Form</p>
                <p className="text-3xl font-bold text-pink-600 dark:text-pink-400 mt-2">
                  <MathText>{'$\\pi = 3.14$'}</MathText>
                </p>
              </div>
              <div className="p-4 bg-pink-100 dark:bg-pink-900/40 rounded-lg text-center">
                <p className="text-gray-900 dark:text-gray-100 font-bold text-lg">Fraction Form</p>
                <p className="text-3xl font-bold text-pink-600 dark:text-pink-400 mt-2">
                  <MathText>{'$\\pi = \\frac{22}{7}$'}</MathText>
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Note:</strong> Questions will tell you which value of <MathText>{'$\\pi$'}</MathText> to use.
                Use <MathText>{'$\\frac{22}{7}$'}</MathText> when the radius or diameter is a multiple of 7.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: The Circumference Formula */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">3. The Circumference Formula</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Two Forms of the Formula</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-2">When diameter is given:</p>
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  C = <MathText>{'$\\pi$'}</MathText> × d
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-2">When radius is given:</p>
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  C = 2 × <MathText>{'$\\pi$'}</MathText> × r
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Remember:</strong> Since d = 2r, both formulas give the same answer!
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Examples with Diameter Given */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">4. Finding Circumference (Diameter Given)</h2>

          {/* Example 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Example 1: <MathText>{'$(\\text{Take } \\pi = \\frac{22}{7})$'}</MathText>
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A circle has a diameter of 21 cm. Find its circumference.
            </p>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "full",
                givenValue: "21",
                givenType: "diameter",
                unit: "cm",
                showCentre: true,
                showDiameterLine: true
              }}
            />

            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-2">Solution:</p>
              <p className="text-gray-800 dark:text-gray-200">
                Circumference = <MathText>{'$\\pi$'}</MathText> × Diameter
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                <MathText>{'$= \\frac{22}{7} \\times 21$'}</MathText>
              </p>
              <p className="text-gray-800 dark:text-gray-200 font-bold">= 66 cm</p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Example 2: <MathText>{'$(\\text{Take } \\pi = 3.14)$'}</MathText>
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The diameter of a hula hoop is 70 cm. Find the circumference of the hoop.
            </p>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "full",
                givenValue: "70",
                givenType: "diameter",
                unit: "cm",
                showCentre: true,
                showDiameterLine: true
              }}
            />

            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-2">Solution:</p>
              <p className="text-gray-800 dark:text-gray-200">Circumference = <MathText>{'$\\pi$'}</MathText> × Diameter</p>
              <p className="text-gray-800 dark:text-gray-200">= 3.14 × 70 cm</p>
              <p className="text-gray-800 dark:text-gray-200 font-bold">= 219.8 cm</p>
            </div>
          </div>
        </section>

        {/* Section 5: Examples with Radius Given */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">5. Finding Circumference (Radius Given)</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Two Methods</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When the radius is given, you can either:
            </p>
            <ol className="list-decimal list-inside mt-2 text-gray-800 dark:text-gray-200">
              <li><strong>Method 1:</strong> Find the diameter first, then use C = <MathText>{'$\\pi$'}</MathText> × d</li>
              <li><strong>Method 2:</strong> Use the formula C = 2 × <MathText>{'$\\pi$'}</MathText> × r directly</li>
            </ol>
          </div>

          {/* Example 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Example 3: <MathText>{'$(\\text{Take } \\pi = \\frac{22}{7})$'}</MathText>
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The radius of a circle is 7 m. Find its circumference.
            </p>

            <MathToolRenderer
              toolName="p6Circle"
              parameters={{
                mode: "full",
                givenValue: "7",
                givenType: "radius",
                unit: "m",
                showCentre: true,
                showRadiusLine: true
              }}
            />

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-lg">
                <p className="text-gray-900 dark:text-gray-100 font-bold mb-2">Method 1:</p>
                <p className="text-gray-800 dark:text-gray-200">Diameter = 2 × 7 m = 14 m</p>
                <p className="text-gray-800 dark:text-gray-200">C = <MathText>{'$\\pi$'}</MathText> × d</p>
                <p className="text-gray-800 dark:text-gray-200">
                  <MathText>{'$= \\frac{22}{7} \\times 14$'}</MathText>
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-bold">= 44 m</p>
              </div>
              <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-lg">
                <p className="text-gray-900 dark:text-gray-100 font-bold mb-2">Method 2:</p>
                <p className="text-gray-800 dark:text-gray-200">C = 2 × <MathText>{'$\\pi$'}</MathText> × r</p>
                <p className="text-gray-800 dark:text-gray-200">
                  <MathText>{'$= 2 \\times \\frac{22}{7} \\times 7$'}</MathText>
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-bold">= 44 m</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">6. Practice Problems</h2>

          <div className="space-y-6">
            {/* Problem 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 1 <MathText>{'$(\\text{Take } \\pi = \\frac{22}{7})$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                A circle has a diameter of 14 cm. Find its circumference.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "full",
                  givenValue: "14",
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
                  <p className="text-gray-800 dark:text-gray-200">C = <MathText>{'$\\pi$'}</MathText> × d</p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <MathText>{'$= \\frac{22}{7} \\times 14$'}</MathText>
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 font-bold">= 44 cm</p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 2 <MathText>{'$(\\text{Take } \\pi = 3.14)$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                The radius of a circle is 10 cm. Find its circumference.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "full",
                  givenValue: "10",
                  givenType: "radius",
                  unit: "cm",
                  showCentre: true,
                  showRadiusLine: true
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
                  <p className="text-gray-800 dark:text-gray-200">C = 2 × <MathText>{'$\\pi$'}</MathText> × r</p>
                  <p className="text-gray-800 dark:text-gray-200">= 2 × 3.14 × 10</p>
                  <p className="text-gray-800 dark:text-gray-200 font-bold">= 62.8 cm</p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 3 <MathText>{'$(\\text{Take } \\pi = \\frac{22}{7})$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                A circular track has a radius of 35 m. How far does an athlete run if they complete one lap?
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "full",
                  givenValue: "35",
                  givenType: "radius",
                  unit: "m",
                  showCentre: true,
                  showRadiusLine: true,
                  highlightArc: true
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
                  <p className="text-gray-800 dark:text-gray-200">C = 2 × <MathText>{'$\\pi$'}</MathText> × r</p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <MathText>{'$= 2 \\times \\frac{22}{7} \\times 35$'}</MathText>
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 font-bold">= 220 m</p>
                  <p className="text-gray-800 dark:text-gray-200 mt-2">The athlete runs 220 m in one lap.</p>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 4 <MathText>{'$(\\text{Take } \\pi = 3.14)$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                A circular table has a diameter of 1.5 m. Find the circumference of the table.
              </p>

              <MathToolRenderer
                toolName="p6Circle"
                parameters={{
                  mode: "full",
                  givenValue: "1.5",
                  givenType: "diameter",
                  unit: "m",
                  showCentre: true,
                  showDiameterLine: true
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
                  <p className="text-gray-800 dark:text-gray-200">C = <MathText>{'$\\pi$'}</MathText> × d</p>
                  <p className="text-gray-800 dark:text-gray-200">= 3.14 × 1.5</p>
                  <p className="text-gray-800 dark:text-gray-200 font-bold">= 4.71 m</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Key Takeaways</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Circumference</strong> is the distance around a circle (like perimeter).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Pi (<MathText>{'$\\pi$'}</MathText>)</strong> ≈ 3.14 or <MathText>{'$\\frac{22}{7}$'}</MathText>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Formula with diameter:</strong> C = <MathText>{'$\\pi$'}</MathText> × d
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Formula with radius:</strong> C = 2 × <MathText>{'$\\pi$'}</MathText> × r
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5.</span>
              <p className="text-gray-800 dark:text-gray-200">
                Use <MathText>{'$\\frac{22}{7}$'}</MathText> when the measurement is a <strong>multiple of 7</strong> for easier calculation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
