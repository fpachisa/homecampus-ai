import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function RateAndSpeed() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Rate and Speed</h1>
        <p className="mt-2 text-purple-100">
          Understand rates, speed calculations, and distance-time relationships
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section A: Understanding Rate */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            A. Understanding Rate
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong className="text-purple-600 dark:text-purple-400">rate</strong> compares two <strong>different</strong> quantities. Unlike ratios (which compare similar quantities), rates always have units from both quantities.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                Rate vs Ratio: Key Difference
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold text-gray-800 dark:text-gray-100">Ratio:</p>
                  <p className="text-sm">Compares quantities of the SAME kind</p>
                  <p className="text-sm italic">Example: 5 boys : 7 girls (both are people)</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold text-gray-800 dark:text-gray-100">Rate:</p>
                  <p className="text-sm">Compares quantities of DIFFERENT kinds</p>
                  <p className="text-sm italic">Example: \$8.70 per 3 litres (money per volume)</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-pink-800 dark:text-pink-300 mb-3">
                Common Types of Rates
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <p>• <strong>Price per unit:</strong> \$/L, \$/kg, \$/m²</p>
                <p>• <strong>Speed:</strong> km/h, m/s, km/min</p>
                <p>• <strong>Work rate:</strong> words/min, boxes/hour</p>
                <p>• <strong>Consumption rate:</strong> L/100km, kWh/day</p>
                <p>• <strong>Exchange rate:</strong> SGD/USD, EUR/SGD</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Calculating Rate
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Mary typed 300 words in 5 minutes. Find her average rate of typing in words/min.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Rate of typing = <MathText>{'$\\frac{\\text{Number of words}}{\\text{Time taken}}$'}</MathText></p>
                <p className="ml-4">= <MathText>{'$\\frac{300 \\text{ words}}{5 \\text{ minutes}}$'}</MathText></p>
                <p className="ml-4">= 60 words/min</p>
                <p className="mt-4 font-semibold">Answer: 60 words per minute</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 2: Comparing Rates (Better Value)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Brand A detergent costs \$8.70 for 3 litres. Brand B costs \$13.50 for 5 litres. Which is cheaper per litre?
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p><strong>Brand A:</strong></p>
                <p className="ml-4">Price per litre = \$8.70 ÷ 3 = \$2.90/L</p>
                <p className="mt-3"><strong>Brand B:</strong></p>
                <p className="ml-4">Price per litre = \$13.50 ÷ 5 = \$2.70/L</p>
                <p className="mt-4">Comparing: \$2.70 {'<'} \$2.90</p>
                <p className="mt-3 font-semibold">Answer: Brand B is cheaper at \$2.70 per litre</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Rate Calculations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A car travelled 450 km on 40 L of petrol. Find the rate of petrol consumption in:
              (a) km per L  (b) L per 100 km
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p><strong>(a) km per L:</strong></p>
                  <p className="ml-4">Rate = 450 km ÷ 40 L = 11.25 km/L</p>
                  <p className="mt-3"><strong>(b) L per 100 km:</strong></p>
                  <p className="ml-4">Rate = <MathText>{'$\\frac{40 \\text{ L}}{450 \\text{ km}}$'}</MathText></p>
                  <p className="ml-4">= <MathText>{'$\\frac{40}{450} \\times 100$'}</MathText> L per 100 km</p>
                  <p className="ml-4">= <MathText>{'$\\frac{4000}{450}$'}</MathText> = 8.89 L/100km (to 2 d.p.)</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section B: Speed Formula and Calculations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            B. Speed Formula and Calculations
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong className="text-indigo-600 dark:text-indigo-400">Speed</strong> is a special type of rate that measures how fast an object moves. It compares distance travelled to time taken.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
                The Speed Formula Triangle
              </h3>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border-2 border-indigo-300 dark:border-indigo-700">
                    <div className="text-center mb-4">
                      <div className="inline-block border-b-[80px] border-b-indigo-500 dark:border-b-indigo-400 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent relative">
                        <div className="absolute top-[-60px] left-[-40px] w-[80px] text-center">
                          <p className="font-bold text-white text-xl">D</p>
                        </div>
                        <div className="absolute top-[20px] left-[-60px] w-[50px] text-center">
                          <p className="font-bold text-white">S</p>
                        </div>
                        <div className="absolute top-[20px] right-[-60px] w-[50px] text-center">
                          <p className="font-bold text-white">T</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-4">Cover what you want to find!</p>
                  </div>
                </div>
                <div className="flex-1 space-y-3 text-gray-700 dark:text-gray-300">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded border border-indigo-300 dark:border-indigo-700">
                    <p className="font-semibold text-indigo-700 dark:text-indigo-300">Speed (S):</p>
                    <p><MathText>{'$S = \\frac{D}{T}$'}</MathText></p>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded border border-indigo-300 dark:border-indigo-700">
                    <p className="font-semibold text-indigo-700 dark:text-indigo-300">Distance (D):</p>
                    <p><MathText>{'$D = S \\times T$'}</MathText></p>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded border border-indigo-300 dark:border-indigo-700">
                    <p className="font-semibold text-indigo-700 dark:text-indigo-300">Time (T):</p>
                    <p><MathText>{'$T = \\frac{D}{S}$'}</MathText></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 3: Finding Speed
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Alex cycles 3 km in 15 minutes. Find his speed in km/min.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Given: Distance = 3 km, Time = 15 min</p>
                <p className="mt-3">Using formula: <MathText>{'$\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$= \\frac{3 \\text{ km}}{15 \\text{ min}}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$= \\frac{1}{5}$'}</MathText> km/min</p>
                <p className="ml-4">= 0.2 km/min</p>
                <p className="mt-4 font-semibold">Answer: 0.2 km/min (or 1/5 km/min)</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 4: Finding Distance
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A train travels at 80 km/h for 1 hour and 15 minutes. Find the distance travelled.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Given: Speed = 80 km/h, Time = 1 h 15 min = 1.25 h</p>
                <p className="mt-3">Using formula: <MathText>{'$\\text{Distance} = \\text{Speed} \\times \\text{Time}$'}</MathText></p>
                <p className="ml-4">= 80 km/h × 1.25 h</p>
                <p className="ml-4">= 100 km</p>
                <p className="mt-4 font-semibold">Answer: 100 km</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 5: Finding Time
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Jenny walks 600 m at a speed of 1.5 m/s. How long does she take? Give your answer in minutes and seconds.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Given: Distance = 600 m, Speed = 1.5 m/s</p>
                <p className="mt-3">Using formula: <MathText>{'$\\text{Time} = \\frac{\\text{Distance}}{\\text{Speed}}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$= \\frac{600 \\text{ m}}{1.5 \\text{ m/s}}$'}</MathText></p>
                <p className="ml-4">= 400 seconds</p>
                <p className="mt-3">Convert to minutes and seconds:</p>
                <p className="ml-4">400 s = 6 minutes 40 seconds</p>
                <p className="mt-4 font-semibold">Answer: 6 minutes 40 seconds</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Speed Calculations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              The average speed of an MRT train between two stations is 65 km/h. If it takes 2 minutes and 30 seconds to travel from one station to the other, find the distance between the two stations, correct to 0.1 km.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p>Given: Speed = 65 km/h</p>
                  <p>Time = 2 min 30 s = 2.5 min = 2.5/60 h = 1/24 h</p>
                  <p className="mt-3">Using: Distance = Speed × Time</p>
                  <p className="ml-4"><MathText>{'$= 65 \\times \\frac{1}{24}$'}</MathText></p>
                  <p className="ml-4">= 2.708... km</p>
                  <p className="ml-4">≈ 2.7 km (to 1 d.p.)</p>
                  <p className="mt-4 font-semibold">Answer: 2.7 km</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section C: Distance-Time Graphs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            C. Distance-Time Graphs
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong className="text-teal-600 dark:text-teal-400">distance-time graph</strong> shows how distance changes over time. The gradient (slope) of the line represents speed.
            </p>

            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-teal-800 dark:text-teal-300 mb-3">
                Reading Distance-Time Graphs
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold text-teal-700 dark:text-teal-300">Horizontal line (flat):</p>
                  <p className="text-sm">Object is stationary (not moving, resting)</p>
                  <p className="text-sm">Speed = 0</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold text-teal-700 dark:text-teal-300">Straight sloped line:</p>
                  <p className="text-sm">Object moving at constant speed</p>
                  <p className="text-sm">Steeper = faster speed</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold text-teal-700 dark:text-teal-300">Curved line:</p>
                  <p className="text-sm">Object is accelerating or decelerating</p>
                  <p className="text-sm">Speed is changing</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold text-teal-700 dark:text-teal-300">Gradient (slope):</p>
                  <p className="text-sm">Speed = <MathText>{'$\\frac{\\text{Change in distance}}{\\text{Change in time}}$'}</MathText></p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 6: Interpreting a Graph
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A distance-time graph shows a journey with three stages:
              </p>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                  <p className="font-semibold">Stage 1 (0 to 1 hour):</p>
                  <p>Distance increases from 0 to 60 km</p>
                  <p>Speed = 60 km ÷ 1 h = <strong>60 km/h</strong></p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                  <p className="font-semibold">Stage 2 (1 to 1.5 hours):</p>
                  <p>Distance stays at 60 km (horizontal line)</p>
                  <p>Speed = 0 (resting/stationary)</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                  <p className="font-semibold">Stage 3 (1.5 to 2.5 hours):</p>
                  <p>Distance increases from 60 km to 100 km</p>
                  <p>Speed = 40 km ÷ 1 h = <strong>40 km/h</strong></p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>Fastest stage:</strong> Stage 1 (60 km/h)
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                💡 Graph Tips
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Always label axes: Distance (y-axis) and Time (x-axis)</li>
                <li>Identify what each section of the graph represents</li>
                <li>Calculate speed from gradient: rise ÷ run</li>
                <li>Horizontal sections mean the object stopped</li>
                <li>The steeper the line, the faster the speed</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Graph Analysis
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A cyclist travels 20 km in the first hour, rests for 30 minutes, then travels another 15 km in 45 minutes. Sketch a distance-time graph and find the speed in each moving stage.
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p><strong>Stage 1 (0 to 1 hour):</strong></p>
                  <p className="ml-4">Distance: 0 to 20 km</p>
                  <p className="ml-4">Speed = 20 km ÷ 1 h = 20 km/h</p>
                  <p className="mt-3"><strong>Stage 2 (1 to 1.5 hours):</strong></p>
                  <p className="ml-4">Resting (horizontal line at 20 km)</p>
                  <p className="ml-4">Speed = 0</p>
                  <p className="mt-3"><strong>Stage 3 (1.5 to 2.25 hours):</strong></p>
                  <p className="ml-4">Distance: 20 to 35 km</p>
                  <p className="ml-4">Time: 0.75 h (45 minutes)</p>
                  <p className="ml-4">Speed = 15 km ÷ 0.75 h = 20 km/h</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section D: Average Speed */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            D. Average Speed Calculations
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong className="text-red-600 dark:text-red-400">Average speed</strong> is the total distance divided by total time. It's NOT the average of the speeds!
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3">
                ⚠️ Common Mistake
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold text-red-700 dark:text-red-300">❌ WRONG:</p>
                  <p>Average speed = <MathText>{'$\\frac{\\text{Speed}_1 + \\text{Speed}_2}{2}$'}</MathText></p>
                  <p className="text-sm italic">This is incorrect!</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold text-green-700 dark:text-green-300">✓ CORRECT:</p>
                  <p>Average speed = <MathText>{'$\\frac{\\text{Total distance}}{\\text{Total time}}$'}</MathText></p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 7: Multi-Stage Journey
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Kate drives for 2 hours at 60 km/h, then for 3 hours at 70 km/h. Calculate the average speed for the whole journey.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p><strong>Step 1: Find total distance</strong></p>
                <p className="ml-4">First part: 60 km/h × 2 h = 120 km</p>
                <p className="ml-4">Second part: 70 km/h × 3 h = 210 km</p>
                <p className="ml-4">Total distance = 120 + 210 = 330 km</p>
                <p className="mt-3"><strong>Step 2: Find total time</strong></p>
                <p className="ml-4">Total time = 2 + 3 = 5 hours</p>
                <p className="mt-3"><strong>Step 3: Calculate average speed</strong></p>
                <p className="ml-4">Average speed = 330 km ÷ 5 h = 66 km/h</p>
                <p className="mt-4 font-semibold">Answer: 66 km/h</p>
                <p className="mt-3 text-sm italic text-orange-600 dark:text-orange-400">
                  Note: If we wrongly averaged the speeds: (60+70)÷2 = 65 km/h ≠ 66 km/h
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 8: Mixed Units
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Mr Lee runs 5 km in 40 minutes and then walks 2 km at 4 km/h. Calculate his average speed for the whole journey in km/h.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p><strong>Step 1: Find total distance</strong></p>
                <p className="ml-4">Total distance = 5 + 2 = 7 km</p>
                <p className="mt-3"><strong>Step 2: Find total time</strong></p>
                <p className="ml-4">Running time = 40 min = 40/60 h = 2/3 h</p>
                <p className="ml-4">Walking time = 2 km ÷ 4 km/h = 0.5 h</p>
                <p className="ml-4">Total time = 2/3 + 0.5 = 2/3 + 1/2 = 7/6 hours</p>
                <p className="mt-3"><strong>Step 3: Calculate average speed</strong></p>
                <p className="ml-4">Average speed = 7 km ÷ (7/6) h</p>
                <p className="ml-4">= 7 × (6/7) = 6 km/h</p>
                <p className="mt-4 font-semibold">Answer: 6 km/h</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Average Speed
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A car travels for the first 1.5 hours at 64 km/h and the next 2.5 hours at 72 km/h. Calculate the average speed for the whole journey.
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p><strong>Step 1: Total distance</strong></p>
                  <p className="ml-4">First part: 64 × 1.5 = 96 km</p>
                  <p className="ml-4">Second part: 72 × 2.5 = 180 km</p>
                  <p className="ml-4">Total = 96 + 180 = 276 km</p>
                  <p className="mt-3"><strong>Step 2: Total time</strong></p>
                  <p className="ml-4">Total = 1.5 + 2.5 = 4 hours</p>
                  <p className="mt-3"><strong>Step 3: Average speed</strong></p>
                  <p className="ml-4">= 276 ÷ 4 = 69 km/h</p>
                  <p className="mt-4 font-semibold">Answer: 69 km/h</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Rate compares two DIFFERENT quantities (unlike ratios which compare similar quantities)</li>
            <li>Speed = Distance ÷ Time,  Distance = Speed × Time,  Time = Distance ÷ Speed</li>
            <li>Common speed units: km/h, m/s, km/min (always include units!)</li>
            <li>On distance-time graphs: gradient = speed, horizontal line = stationary, steeper = faster</li>
            <li>Average speed = Total distance ÷ Total time (NOT average of speeds)</li>
            <li>Always convert time to the same units before calculating average speed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
