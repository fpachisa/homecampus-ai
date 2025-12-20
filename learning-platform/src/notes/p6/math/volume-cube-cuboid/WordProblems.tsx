import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function WordProblems() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);
  const [showSolution6, setShowSolution6] = useState(false);
  const [showMethod2, setShowMethod2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Word Problems: Volume of Cube and Cuboid</h1>
        <p className="text-lg text-blue-100">Apply your volume skills to real-world problems involving containers and tanks</p>
      </div>

      <div className="space-y-10">
        {/* Important Unit Conversion */}
        <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500 mb-6">
          <h3 className="font-bold text-lg mb-3 text-amber-800 dark:text-amber-300">Important Unit Conversion</h3>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-xl text-gray-800 dark:text-gray-200">
              <strong>1 litre = 1000 cm³</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Also: 1 ml = 1 cm³
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm">
            This conversion is essential for water tank problems!
          </p>
        </div>

        {/* Section 1: Basic Word Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">1. Basic Volume Word Problems</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Problem-Solving Strategy</h3>
            <ol className="space-y-2 text-gray-800 dark:text-gray-200 list-decimal list-inside">
              <li>Identify what you're asked to find</li>
              <li>Draw or visualize the shape</li>
              <li>Write down the formula you need</li>
              <li>Substitute the known values</li>
              <li>Calculate and include units in your answer</li>
            </ol>
          </div>

          {/* Example 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Finding Dimensions</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Xinyi has a rectangular first-aid box with a volume of 1080 cm³. The length of the box is 15 cm and its height is 6 cm. What is the breadth of the box?
            </p>
            <MathToolRenderer
              toolName="cuboid"
              parameters={{
                length: "?",
                width: "15 cm",
                height: "6 cm",
                highlightElement: "length",
                caption: "First-aid box: Volume = 1080 cm³"
              }}
            />
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              {showSolution1 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Volume = 1080 cm³, Length = 15 cm, Height = 6 cm
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Breadth of cuboid = Volume ÷ (Length × Height)
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <MathText>{'$= \\frac{1080}{15 \\times 6}$'}</MathText>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <MathText>{'$= \\frac{1080}{90}$'}</MathText>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 12 cm
                </p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  The breadth of the first-aid box is 12 cm.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Water Tank Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">2. Water Tank Problems</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Water Level in Tanks</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              When water is poured into a rectangular tank:
            </p>
            <div className="space-y-2 text-gray-800 dark:text-gray-200">
              <p><strong>Volume of water</strong> = Length × Breadth × Water Height</p>
              <p><strong>Water Height</strong> = Volume of water ÷ (Length × Breadth)</p>
              <p><strong>Water Height</strong> = Volume of water ÷ Base Area</p>
            </div>
          </div>

          {/* Example 2: Water Level */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Finding Water Level</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A rectangular tank measures 40 cm by 25 cm by 60 cm. It is filled with 45 litres of water.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              (a) What is the height of the water level?
            </p>
            <MathToolRenderer
              toolName="waterTank"
              parameters={{
                length: 40,
                width: 25,
                height: 60,
                waterHeight: 45,
                unit: "cm",
                showDimensions: true,
                showWaterHeight: true,
                caption: "Tank: 40 cm × 25 cm × 60 cm, filled with 45 litres"
              }}
            />
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              {showSolution2 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  First, convert litres to cm³:
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Volume of water = 45 litres = 45 × 1000 = 45,000 cm³
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Height of water level = Volume ÷ (Length × Breadth)
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <MathText>{'$= \\frac{45000}{40 \\times 25}$'}</MathText>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <MathText>{'$= \\frac{45000}{1000}$'}</MathText>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 45 cm
                </p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  The height of the water level is 45 cm.
                </p>
              </div>
            )}
          </div>

          {/* Example 3: Water to Fill Tank */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: Water Needed to Fill Tank</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A rectangular tank measures 40 cm by 25 cm by 60 cm. It is filled with 45 litres of water.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              (b) How much more water is needed to fill the tank completely? Give your answer in litres.
            </p>
            <MathToolRenderer
              toolName="waterTank"
              parameters={{
                length: 40,
                width: 25,
                height: 60,
                waterHeight: 45,
                unit: "cm",
                showDimensions: true,
                showWaterHeight: true,
                caption: "How much more water to fill completely?"
              }}
            />
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              {showSolution3 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution3 && (
              <div className="mt-4 space-y-4">
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Method 1: Using Total Volume</h4>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">
                    Volume of tank = 40 × 25 × 60 = 60,000 cm³
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">
                    60,000 cm³ = 60 litres
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">
                    Volume of water needed = 60 - 45 = 15 litres
                  </p>
                </div>

                <button
                  onClick={() => setShowMethod2(!showMethod2)}
                  className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                >
                  {showMethod2 ? 'Hide Method 2' : 'Show Method 2'}
                </button>

                {showMethod2 && (
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Method 2: Using Empty Space</h4>
                    <p className="text-gray-800 dark:text-gray-200 mb-2">
                      Height of tank not filled with water = 60 - 45 = 15 cm
                    </p>
                    <p className="text-gray-800 dark:text-gray-200 mb-2">
                      Volume of water needed = 40 × 25 × 15 = 15,000 cm³
                    </p>
                    <p className="text-gray-800 dark:text-gray-200 mb-2">
                      15,000 cm³ = 15 litres
                    </p>
                  </div>
                )}

                <p className="text-green-600 dark:text-green-400 font-bold p-2">
                  15 litres more water is needed to fill the tank completely.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Multi-step Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">3. Multi-step and Transfer Problems</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Problem Types</h3>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200 list-disc list-inside">
              <li><strong>Fractional fill:</strong> Tank is <MathText>{'$\\frac{2}{3}$'}</MathText> filled with water</li>
              <li><strong>Pouring away:</strong> Water is removed from tank</li>
              <li><strong>Transfer:</strong> Water moved from one container to another</li>
              <li><strong>Rate problems:</strong> Water flows at X litres per minute</li>
            </ul>
          </div>

          {/* Example 4: Pouring Away */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 4: Water Poured Away</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A rectangular tank is 38 cm long and 24 cm wide. The height of the water level in the tank is 15 cm.
              Mrs Loh pours away 5472 cm³ of water from the tank. What is the height of the remaining amount of water?
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Before:</p>
                <MathToolRenderer
                  toolName="waterTank"
                  parameters={{
                    length: 38,
                    width: 24,
                    height: 20,
                    waterHeight: 15,
                    unit: "cm",
                    showDimensions: true,
                    showWaterHeight: true,
                    caption: "Initial water level: 15 cm"
                  }}
                />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">After pouring away 5472 cm³:</p>
                <MathToolRenderer
                  toolName="waterTank"
                  parameters={{
                    length: 38,
                    width: 24,
                    height: 20,
                    waterHeight: 9,
                    unit: "cm",
                    showDimensions: true,
                    showWaterHeight: true,
                    caption: "Remaining water level: ?"
                  }}
                />
              </div>
            </div>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              {showSolution4 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution4 && (
              <div className="mt-4 space-y-4">
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Method 1: Find remaining volume first</h4>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">
                    Volume of water at first = 38 × 24 × 15 = 13,680 cm³
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">
                    Volume of water left = 13,680 - 5,472 = 8,208 cm³
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">
                    Height of remaining water = <MathText>{'$\\frac{8208}{38 \\times 24} = \\frac{8208}{912}$'}</MathText> = 9 cm
                  </p>
                </div>

                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Method 2: Find decrease in height</h4>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">
                    Decrease in height of water level = <MathText>{'$\\frac{5472}{38 \\times 24} = \\frac{5472}{912}$'}</MathText> = 6 cm
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">
                    Height of remaining water = 15 - 6 = 9 cm
                  </p>
                </div>

                <p className="text-green-600 dark:text-green-400 font-bold">
                  The height of the remaining amount of water is 9 cm.
                </p>
              </div>
            )}
          </div>

          {/* Example 5: Fractional Fill */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 5: Fractional Fill Problem</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Tank A, which measures 48 cm by 18 cm by 40 cm, is <MathText>{'$\\frac{3}{4}$'}</MathText> filled with water.
              Ali pours all the water from Tank A into an empty cubical container.
              The height of the water level in the cubical container is 20 cm.
              Find the length of the edge of the cubical container.
            </p>
            <MathToolRenderer
              toolName="waterTank"
              parameters={{
                length: 48,
                width: 18,
                height: 40,
                waterHeight: 30,
                unit: "cm",
                showDimensions: true,
                showWaterHeight: true,
                caption: "Tank A: 3/4 filled (water height = 30 cm)"
              }}
            />
            <button
              onClick={() => setShowSolution5(!showSolution5)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              {showSolution5 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution5 && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Height of water level in Tank A = <MathText>{'$\\frac{3}{4}$'}</MathText> × 40 = 30 cm
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Volume of water in Tank A = 48 × 18 × 30 = 25,920 cm³
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  In the cubical container:
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Base area of cubical container = Volume ÷ Height
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <MathText>{'$= \\frac{25920}{20}$'}</MathText> = 1296 cm²
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Since it's a cube: Edge × Edge = 1296
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Length of edge = <MathText>{'$\\sqrt{1296}$'}</MathText> = 36 cm
                </p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  The length of the edge of the cubical container is 36 cm.
                </p>
              </div>
            )}
          </div>

          {/* Example 6: Rate Problem */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 6: Rate Problem</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A rectangular tank with a base area of 9600 cm² and a height of 60 cm is half-filled with water.
              A tap is turned on and water flows into the tank at a rate of 32 litres per minute.
              How long does it take to fill the tank to the brim?
            </p>
            <MathToolRenderer
              toolName="waterTank"
              parameters={{
                length: 120,
                width: 80,
                height: 60,
                waterHeight: 30,
                unit: "cm",
                showDimensions: true,
                showWaterHeight: true,
                caption: "Tank is half-filled. How long to fill completely?"
              }}
            />
            <button
              onClick={() => setShowSolution6(!showSolution6)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              {showSolution6 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution6 && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Tank is half-filled, so we need to fill the other half.
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Volume of empty space = Base Area × <MathText>{'$\\frac{1}{2}$'}</MathText> × Height
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 9600 × <MathText>{'$\\frac{1}{2}$'}</MathText> × 60
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 9600 × 30
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 288,000 cm³
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 288 litres
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Time to fill = Volume needed ÷ Rate
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 288 ÷ 32
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  = 9 minutes
                </p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  It takes 9 minutes to fill the tank to the brim.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Problem-Solving Tips */}
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">Problem-Solving Tips</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">For Water Level Problems</h4>
              <ul className="text-gray-800 dark:text-gray-200 text-sm space-y-1">
                <li>• Convert litres to cm³ first (×1000)</li>
                <li>• Water height = Volume ÷ Base Area</li>
                <li>• Base Area = Length × Breadth</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">For Transfer Problems</h4>
              <ul className="text-gray-800 dark:text-gray-200 text-sm space-y-1">
                <li>• Volume of water stays the same</li>
                <li>• Calculate volume from first container</li>
                <li>• Use that volume for second container</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">For Fractional Fill</h4>
              <ul className="text-gray-800 dark:text-gray-200 text-sm space-y-1">
                <li>• <MathText>{'$\\frac{3}{4}$'}</MathText> filled → water height = <MathText>{'$\\frac{3}{4}$'}</MathText> × total height</li>
                <li>• Or: volume of water = <MathText>{'$\\frac{3}{4}$'}</MathText> × total volume</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">For Rate Problems</h4>
              <ul className="text-gray-800 dark:text-gray-200 text-sm space-y-1">
                <li>• Time = Volume ÷ Rate</li>
                <li>• Match units (litres with litres/min)</li>
                <li>• Convert cm³ to litres if needed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4">Key Takeaways</h3>
          <ul className="space-y-3 text-gray-800 dark:text-gray-200">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">1.</span>
              <span><strong>1 litre = 1000 cm³</strong> (essential conversion)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">2.</span>
              <span><strong>Water height</strong> = Volume of water ÷ Base Area</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">3.</span>
              <span><strong>Volume to fill</strong> = Total volume - Current water volume</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">4.</span>
              <span><strong>When water is transferred</strong>, volume stays constant</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">5.</span>
              <span><strong>Time = Volume ÷ Rate</strong> for flow problems</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">6.</span>
              <span>Always check your units match before calculating!</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
