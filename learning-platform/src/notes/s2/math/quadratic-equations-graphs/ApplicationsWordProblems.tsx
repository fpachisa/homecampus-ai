import { useState } from 'react';
import MathText from '../../../../components/MathText';
import ParabolaGraphVisualizer from '../../../../components/math-tools/ParabolaGraphVisualizer';

export default function ApplicationsWordProblems() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Real-World Applications</h1>
        <p className="mt-2 text-amber-100">Solve practical problems using quadratic equations</p>
      </div>

      <div className="bg-white dark:bg-gray-800 px-6 pb-6 rounded-b-lg">

        {/* Section 1: Area and Perimeter Problems */}
        <section className="mb-8 mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Area and Perimeter Problems
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many real-world problems involving rectangles, gardens, and fields lead to quadratic equations!
            </p>

            {/* Visual: Problem-Solving Strategy */}
            <div className="bg-gradient-to-b from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 border-2 border-amber-400 dark:border-amber-500 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-4 text-center text-lg">
                Word Problem Strategy
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-amber-600 dark:bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Read carefully and draw a diagram</p>
                    <p className="text-sm text-amber-700 dark:text-amber-400">Visualize the problem with labels</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-600 dark:bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Define variables</p>
                    <p className="text-sm text-amber-700 dark:text-amber-400">Let x = the unknown quantity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-600 dark:bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Set up equation from given information</p>
                    <p className="text-sm text-amber-700 dark:text-amber-400">Use formulas: Area = l × w, Perimeter = 2(l + w)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-600 dark:bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Solve the quadratic equation</p>
                    <p className="text-sm text-amber-700 dark:text-amber-400">Use factorization or other methods</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-600 dark:bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Check solutions make sense</p>
                    <p className="text-sm text-amber-700 dark:text-amber-400">Reject negative dimensions!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 1: Rectangle Area Problem */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 1: Rectangle Dimensions
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  {/* Problem Statement */}
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-400 dark:border-yellow-500 p-3 rounded">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Problem:</strong> A rectangular garden has a length that is 7 meters more than its width.
                      If the area is 60 m², find the dimensions.
                    </p>
                  </div>

                  {/* Step 1: Diagram */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Step 1: Draw a diagram</p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-blue-400 dark:border-blue-500">
                      <div className="text-center">
                        <div className="inline-block border-4 border-green-500 dark:border-green-400 p-8 rounded">
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">Length = x + 7</p>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-700 dark:text-gray-300 writing-vertical">Width = x</p>
                            <div className="mx-8"></div>
                          </div>
                          <p className="text-sm text-green-700 dark:text-green-400 font-semibold mt-4">Area = 60 m²</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Variables */}
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded">
                    <p className="font-semibold text-indigo-800 dark:text-indigo-300 mb-1">Step 2: Define variables</p>
                    <div className="text-gray-700 dark:text-gray-300">
                      <p>Let x = width (in meters)</p>
                      <p>Then x + 7 = length (in meters)</p>
                    </div>
                  </div>

                  {/* Step 3: Equation */}
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded">
                    <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Step 3: Set up equation</p>
                    <div className="text-gray-700 dark:text-gray-300 space-y-1">
                      <p>Area = length × width</p>
                      <p><MathText>60 = (x + 7) × x</MathText></p>
                      <p><MathText>60 = x² + 7x</MathText></p>
                      <p><MathText>x² + 7x - 60 = 0</MathText></p>
                    </div>
                  </div>

                  {/* Step 4: Solve */}
                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                    <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Step 4: Solve</p>
                    <div className="text-gray-700 dark:text-gray-300 space-y-1">
                      <p>Factor: <MathText>(x + 12)(x - 5) = 0</MathText></p>
                      <p>x = −12 or x = 5</p>
                    </div>
                  </div>

                  {/* Step 5: Check */}
                  <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded border-2 border-red-400 dark:border-red-500">
                    <p className="font-semibold text-red-800 dark:text-red-300 mb-2">Step 5: Check solutions</p>
                    <div className="text-gray-700 dark:text-gray-300 space-y-2">
                      <div className="flex items-start">
                        <span className="text-red-600 dark:text-red-400 mr-2 text-lg">✗</span>
                        <p>x = −12: Negative width doesn't make sense! <strong>REJECT</strong></p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-600 dark:text-green-400 mr-2 text-lg">✓</span>
                        <p>x = 5: This makes sense!</p>
                      </div>
                    </div>
                  </div>

                  {/* Final Answer */}
                  <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded border-2 border-green-500 dark:border-green-400">
                    <p className="font-bold text-green-800 dark:text-green-300 mb-2 text-lg">✓ Final Answer:</p>
                    <div className="text-gray-700 dark:text-gray-300 space-y-1">
                      <p><strong>Width:</strong> 5 m</p>
                      <p><strong>Length:</strong> 5 + 7 = 12 m</p>
                      <p className="text-sm text-green-700 dark:text-green-400 mt-2">
                        Check: 5 × 12 = 60 m² ✓
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 2: Maximum Area */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 2: Maximum Area with Fixed Perimeter
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-400 dark:border-yellow-500 p-3 rounded">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Problem:</strong> You have 40 meters of fencing to enclose a rectangular garden.
                      What dimensions give the maximum area?
                    </p>
                  </div>

                  {/* Diagram */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Diagram:</p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-blue-400 dark:border-blue-500">
                      <div className="text-center">
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Perimeter = 40 m</p>
                        <div className="inline-block border-4 border-orange-500 dark:border-orange-400 p-8 rounded">
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">Length = l</p>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-700 dark:text-gray-300 writing-vertical">Width = w</p>
                            <div className="mx-8"></div>
                          </div>
                          <p className="text-sm text-orange-700 dark:text-orange-400 font-semibold mt-4">Area = ?</p>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                          2(l + w) = 40 → l + w = 20
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Setup */}
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded">
                    <p className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Set up:</p>
                    <div className="text-gray-700 dark:text-gray-300 space-y-1">
                      <p>Let w = width</p>
                      <p>From perimeter: l + w = 20 → l = 20 − w</p>
                      <p>Area = l × w = (20 − w) × w</p>
                      <p className="font-semibold"><MathText>A = -w² + 20w</MathText></p>
                    </div>
                  </div>

                  {/* Find Maximum */}
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded">
                    <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Find maximum (vertex):</p>
                    <div className="text-gray-700 dark:text-gray-300 space-y-2">
                      <p>For <MathText>A = -w² + 20w</MathText>: a = −1, b = 20</p>
                      <p>Width at maximum: <MathText>{'w = -20/(2×-1) = 10'}</MathText></p>
                      <p>Length: l = 20 − 10 = 10</p>
                      <p>Maximum area: <MathText>A = 10 × 10 = 100</MathText></p>
                    </div>
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded border-2 border-green-500 dark:border-green-400">
                    <p className="font-bold text-green-800 dark:text-green-300 text-lg">✓ Maximum area: 100 m²</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">When width = length = 10 m (it's a square!)</p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-400 dark:border-blue-500 p-3 rounded">
                    <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">💡 Key Insight:</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      For a fixed perimeter, a square always gives the maximum area!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Garden Dimensions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A rectangular field has a width that is 4 meters less than its length.
              If the area is 96 m², find the width.
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Let w = width, then length = w + 4</p>
                  <p>Area: <MathText>w(w + 4) = 96</MathText></p>
                  <p><MathText>w² + 4w - 96 = 0</MathText></p>
                  <p>Factor: <MathText>(w + 12)(w - 8) = 0</MathText></p>
                  <p>w = −12 (reject) or w = 8</p>
                  <p className="font-semibold text-green-700 dark:text-green-300 mt-3">
                    ✓ Width = 8 m, Length = 12 m
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Projectile Motion */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Projectile Motion Basics
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When objects are thrown or launched, their height follows a quadratic pattern over time.
            </p>

            {/* Visual: Height Equation Explanation */}
            <div className="bg-gradient-to-b from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-400 dark:border-blue-500 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4 text-center text-lg">
                Projectile Height Formula
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <div className="text-center mb-4">
                  <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                    <MathText>{'h = -at² + vt + h₀'}</MathText>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded border border-red-300 dark:border-red-600">
                    <p className="font-semibold text-red-800 dark:text-red-300 mb-1">a (gravity)</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Usually 5 (simplified)<br/>
                      Makes parabola open downward
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-300 dark:border-green-600">
                    <p className="font-semibold text-green-800 dark:text-green-300 mb-1">v (initial velocity)</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      How fast thrown upward<br/>
                      (in m/s)
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded border border-blue-300 dark:border-blue-600">
                    <p className="font-semibold text-blue-800 dark:text-blue-300 mb-1">h₀ (initial height)</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Starting height<br/>
                      (in meters)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual: Trajectory Diagram */}
            <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">
                Typical Projectile Path
              </h4>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-300 dark:border-gray-600">
                <ParabolaGraphVisualizer
                  a={-5}
                  b={20}
                  c={5}
                  showVertex={true}
                  showAxisOfSymmetry={true}
                  showIntercepts={true}
                  xRange={[0, 5]}
                  yRange={[0, 30]}
                  caption="Example: h = -5t² + 20t + 5 (height vs time)"
                />
              </div>
            </div>

            {/* Example 3: Projectile Motion */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 3: Ball Thrown Upward
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-400 dark:border-yellow-500 p-3 rounded">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Problem:</strong> A ball is thrown upward with initial velocity 30 m/s from ground level.
                      Its height is given by <MathText>h = -5t² + 30t</MathText>.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      (a) Find the maximum height<br/>
                      (b) When does it hit the ground?
                    </p>
                  </div>

                  {/* Part (a) - Maximum Height */}
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded">
                    <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                      (a) Maximum height (vertex):
                    </p>
                    <div className="text-gray-700 dark:text-gray-300 space-y-2">
                      <p>Given: <MathText>h = -5t² + 30t</MathText></p>
                      <p>a = −5, b = 30</p>

                      <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded my-2">
                        <p className="text-sm font-semibold mb-1">Time at maximum:</p>
                        <p><MathText>{'t = -30/(2×-5) = 30/10 = 3'}</MathText> seconds</p>
                      </div>

                      <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                        <p className="text-sm font-semibold mb-1">Maximum height:</p>
                        <p><MathText>h = -5(3)² + 30(3)</MathText></p>
                        <p><MathText>h = -45 + 90</MathText></p>
                        <p><MathText>h = 45</MathText> meters</p>
                      </div>
                    </div>

                    <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded border-2 border-green-500 dark:border-green-400 mt-3">
                      <p className="font-bold text-green-800 dark:text-green-300">
                        ✓ Maximum height: 45 m (reached after 3 seconds)
                      </p>
                    </div>
                  </div>

                  {/* Part (b) - Landing Time */}
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded">
                    <p className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                      (b) When does it hit the ground? (h = 0)
                    </p>
                    <div className="text-gray-700 dark:text-gray-300 space-y-2">
                      <p>Set h = 0:</p>
                      <p><MathText>-5t² + 30t = 0</MathText></p>
                      <p>Factor: <MathText>t(-5t + 30) = 0</MathText></p>
                      <p>t = 0 or <MathText>-5t + 30 = 0 → t = 6</MathText></p>

                      <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded mt-2">
                        <p className="text-sm">t = 0: starting time (thrown)</p>
                        <p className="text-sm">t = 6: landing time</p>
                      </div>
                    </div>

                    <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded border-2 border-green-500 dark:border-green-400 mt-3">
                      <p className="font-bold text-green-800 dark:text-green-300">
                        ✓ Hits ground after 6 seconds
                      </p>
                    </div>
                  </div>

                  {/* Summary Diagram */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">Summary Graph:</p>
                    <ParabolaGraphVisualizer
                      a={-5}
                      b={30}
                      c={0}
                      showVertex={true}
                      showAxisOfSymmetry={false}
                      showIntercepts={true}
                      xRange={[0, 7]}
                      yRange={[0, 50]}
                      caption="h = -5t² + 30t → Max: 45m at t=3s, Lands at t=6s"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Rocket Launch
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A toy rocket's height is <MathText>h = -5t² + 25t + 10</MathText>.
              Find the maximum height.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Given: <MathText>h = -5t² + 25t + 10</MathText></p>
                  <p>a = −5, b = 25</p>
                  <p>Time at max: <MathText>{'t = -25/(2×-5) = 25/10 = 2.5'}</MathText> seconds</p>
                  <p>Height at t = 2.5:</p>
                  <p><MathText>h = -5(2.5)² + 25(2.5) + 10</MathText></p>
                  <p><MathText>h = -31.25 + 62.5 + 10</MathText></p>
                  <p className="font-semibold text-green-700 dark:text-green-300 mt-3">
                    ✓ Maximum height = 41.25 m (at t = 2.5 seconds)
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Number Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Number and Pattern Problems
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Problems involving consecutive numbers, products, and patterns often lead to quadratic equations.
            </p>

            {/* Visual: Consecutive Numbers Reference */}
            <div className="bg-gradient-to-b from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-400 dark:border-purple-500 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-4 text-center">
                Consecutive Number Patterns
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-purple-300 dark:border-purple-600">
                  <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2 text-center">
                    Consecutive Integers
                  </p>
                  <div className="text-gray-700 dark:text-gray-300 text-sm">
                    <p className="text-center mb-2">n, n+1, n+2, ...</p>
                    <p className="text-xs text-center text-purple-600 dark:text-purple-400">
                      Example: 5, 6, 7
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-purple-300 dark:border-purple-600">
                  <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2 text-center">
                    Consecutive Even
                  </p>
                  <div className="text-gray-700 dark:text-gray-300 text-sm">
                    <p className="text-center mb-2">n, n+2, n+4, ...</p>
                    <p className="text-xs text-center text-purple-600 dark:text-purple-400">
                      Example: 6, 8, 10
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-purple-300 dark:border-purple-600">
                  <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2 text-center">
                    Consecutive Odd
                  </p>
                  <div className="text-gray-700 dark:text-gray-300 text-sm">
                    <p className="text-center mb-2">n, n+2, n+4, ...</p>
                    <p className="text-xs text-center text-purple-600 dark:text-purple-400">
                      Example: 5, 7, 9
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 4: Consecutive Numbers */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 4: Product of Consecutive Numbers
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-400 dark:border-yellow-500 p-3 rounded">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Problem:</strong> Two consecutive positive integers have a product of 132.
                      Find the integers.
                    </p>
                  </div>

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded">
                    <p className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Set up:</p>
                    <div className="text-gray-700 dark:text-gray-300 space-y-1">
                      <p>Let n = first integer</p>
                      <p>Then n + 1 = second integer</p>
                      <p>Product: <MathText>n(n + 1) = 132</MathText></p>
                    </div>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded">
                    <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Solve:</p>
                    <div className="text-gray-700 dark:text-gray-300 space-y-1">
                      <p><MathText>n² + n = 132</MathText></p>
                      <p><MathText>n² + n - 132 = 0</MathText></p>
                      <p>Factor: <MathText>(n + 12)(n - 11) = 0</MathText></p>
                      <p>n = −12 or n = 11</p>
                    </div>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded">
                    <p className="font-semibold text-red-800 dark:text-red-300 mb-2">Check:</p>
                    <div className="text-gray-700 dark:text-gray-300 space-y-1">
                      <p>✗ n = −12: Gives −12 and −11 (negative, but problem asks for positive)</p>
                      <p>✓ n = 11: Gives 11 and 12</p>
                    </div>
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded border-2 border-green-500 dark:border-green-400">
                    <p className="font-bold text-green-800 dark:text-green-300 text-lg">
                      ✓ The integers are 11 and 12
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      Check: 11 × 12 = 132 ✓
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Sum and Square
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The sum of a number and its square is 56. Find the number.
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Let n = the number</p>
                  <p>Sum of number and its square:</p>
                  <p><MathText>n + n² = 56</MathText></p>
                  <p>Rearrange: <MathText>n² + n - 56 = 0</MathText></p>
                  <p>Factor: <MathText>(n + 8)(n - 7) = 0</MathText></p>
                  <p>n = −8 or n = 7</p>
                  <p className="font-semibold text-green-700 dark:text-green-300 mt-3">
                    ✓ Both solutions are valid: −8 or 7
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Check: 7 + 49 = 56 ✓ and −8 + 64 = 56 ✓
                  </p>
                </div>
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
            <li>Always draw a diagram for word problems to visualize the situation</li>
            <li>Define variables clearly and express all unknowns in terms of one variable</li>
            <li>Use appropriate formulas: Area = l × w, Perimeter = 2(l + w)</li>
            <li>For projectile motion: <MathText>{'h = -at² + vt + h₀'}</MathText>, maximum at vertex</li>
            <li>Consecutive integers: n, n+1, n+2; Consecutive even/odd: n, n+2, n+4</li>
            <li>Always check solutions in context - reject negative dimensions, negative times, etc.</li>
            <li>Verify your answer makes sense in the original problem</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
