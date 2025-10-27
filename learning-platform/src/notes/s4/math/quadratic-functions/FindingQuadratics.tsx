import { useState } from 'react';

const FindingQuadratics = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showProblem1, setShowProblem1] = useState(false);
  const [showProblem2, setShowProblem2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Finding Quadratic Functions</h1>
        <p className="text-lg">Using vertices, intercepts, and points to determine quadratic equations</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Introduction */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. Finding a Quadratic Function</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              We can use information about axes intercepts, the vertex, and other points on a graph to establish the
              equation of a quadratic function.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              The form we choose to write the function in is often determined by the information available.
            </p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Three Key Forms:</h3>
            <ul className="space-y-3 text-gray-800 dark:text-gray-200">
              <li>
                <strong>If a quadratic has vertex (h, k),</strong> we use the form:
                <div className="font-mono text-center my-2 text-lg">f(x) = a(x - h)² + k</div>
              </li>
              <li>
                <strong>If a quadratic has x-intercepts α and β,</strong> we use the form:
                <div className="font-mono text-center my-2 text-lg">f(x) = a(x - α)(x - β)</div>
              </li>
              <li>
                <strong>If a quadratic touches the x-axis at α,</strong> we use the form:
                <div className="font-mono text-center my-2 text-lg">f(x) = a(x - α)²</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Using Vertex Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Using the Vertex</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 1: Find the quadratic function with vertex (1, 2) and y-intercept 3</h3>
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample1 ? '▼' : '▶'}</span>
            </button>
            {showExample1 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-3">
                <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200">
                  <p><strong>Using the vertex (h, k) = (1, 2):</strong></p>
                  <p className="ml-4">f(x) = a(x - 1)² + 2  for some value of a</p>
                  <p className="mt-3"><strong>But f(0) = 3, so:</strong></p>
                  <p className="ml-4">a(0 - 1)² + 2 = 3</p>
                  <p className="ml-4">∴ a + 2 = 3</p>
                  <p className="ml-4">∴ a = 1</p>
                  <p className="mt-3 text-blue-600 dark:text-blue-400 font-bold">∴ f(x) = (x - 1)² + 2</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>Note:</strong> We can expand this to standard form:</p>
                  <p className="font-mono ml-4">f(x) = x² - 2x + 1 + 2 = x² - 2x + 3</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Using Intercepts */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">3. Using x-intercepts</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 2: Find the quadratic function with x-intercepts -3 and 3, and y-intercept 6</h3>
            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample2 ? '▼' : '▶'}</span>
            </button>
            {showExample2 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-3">
                <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200">
                  <p><strong>x-intercepts -3 and 3, and y-intercept 6</strong></p>
                  <p className="ml-4">a = 2,  b = 3,  c = 1</p>
                  <p className="mt-3"><strong>State the y-intercept:</strong></p>
                  <p className="ml-4">y = a(0)² + b(0) + c</p>
                  <p className="ml-4">∴ the y-intercept is c</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>For a quadratic in standard form y = ax² + bx + c:</strong></p>
                  <p className="ml-4">the y-intercept is the constant term c</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 3: Find the quadratic function with vertex (2, 11) and which passes through (-1, -7)</h3>
            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample3 ? '▼' : '▶'}</span>
            </button>
            {showExample3 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-3">
                <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200">
                  <p><strong>Using the vertex (h, k) = (2, 11):</strong></p>
                  <p className="ml-4">f(x) = a(x - 2)² + 11  for some value of a</p>
                  <p className="mt-3"><strong>But f(-1) = -7, so:</strong></p>
                  <p className="ml-4">a(-1 - 2)² + 11 = -7</p>
                  <p className="ml-4">∴ 9a + 11 = -7</p>
                  <p className="ml-4">∴ 9a = -18</p>
                  <p className="ml-4">∴ a = -2</p>
                  <p className="mt-3 text-blue-600 dark:text-blue-400 font-bold">∴ f(x) = -2(x - 2)² + 11</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 4: Problem Solving */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">4. Problem Solving with Quadratics</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Quadratic functions model many real-world situations, particularly:
            </p>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200 ml-4">
              <li>• <strong>Projectile motion</strong> (balls, rockets, objects thrown in the air)</li>
              <li>• <strong>Optimization problems</strong> (maximizing profit or area)</li>
              <li>• <strong>Physical phenomena</strong> (bridges, satellite dishes, headlight reflectors)</li>
            </ul>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Problem 1: Rocket Height</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The height of a rocket t seconds after it is fired upwards is given by <span className="font-mono">H(t) = 100t - 5t²</span> metres,
              where t ≥ 0.
            </p>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200 ml-4">
              <li>a) How long does the rocket take to reach its maximum height?</li>
              <li>b) Find the maximum height reached by the rocket.</li>
              <li>c) How long does it take for the rocket to fall back to Earth?</li>
            </ul>
            <button
              onClick={() => setShowProblem1(!showProblem1)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors mt-3"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showProblem1 ? '▼' : '▶'}</span>
            </button>
            {showProblem1 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-4">
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">a) Time to reach maximum height:</p>
                  <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                    <p>H(t) = 100t - 5t²</p>
                    <p>∴ H(t) = -5t² + 100t</p>
                    <p className="mt-2">Now  a = -5  which is &lt; 0, so the shape of the graph is ∩</p>
                    <p className="mt-2">The maximum height is reached when  t = -b/(2a)</p>
                    <p className="ml-12">= -100/(2×(-5))</p>
                    <p className="ml-12">= 10</p>
                    <p className="text-green-600 dark:text-green-400 font-bold mt-2">∴ the maximum height is reached after 10 seconds.</p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">b) Maximum height:</p>
                  <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                    <p>H(10) = 100(10) - 5(10)²</p>
                    <p className="ml-6">= 1000 - 500</p>
                    <p className="ml-6">= 500</p>
                    <p className="text-green-600 dark:text-green-400 font-bold mt-2">∴ the maximum height reached is 500 m.</p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">c) Time to fall back to Earth:</p>
                  <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                    <p>The rocket falls back to Earth when  H(t) = 0</p>
                    <p className="ml-12">∴ -5t² + 100t = 0</p>
                    <p className="ml-12">∴ -5t(t - 20) = 0</p>
                    <p className="ml-12">∴ t = 0  or  t = 20</p>
                    <p className="text-green-600 dark:text-green-400 font-bold mt-2">∴ the rocket falls back to Earth after 20 seconds.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Problem 2: Profit Maximization</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              A manufacturer finds that the profit from assembling x bicycles per day is given by
              <span className="font-mono"> P(x) = -x² + 50x - 200</span> dollars.
            </p>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200 ml-4">
              <li>a) How many bicycles should be assembled per day to maximize the profit?</li>
              <li>b) Find the maximum profit.</li>
              <li>c) What is the loss made if no bicycles are assembled in a day? Suggest why this loss would be made.</li>
            </ul>
            <button
              onClick={() => setShowProblem2(!showProblem2)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors mt-3"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showProblem2 ? '▼' : '▶'}</span>
            </button>
            {showProblem2 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-4">
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">a) Number of bicycles to maximize profit:</p>
                  <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                    <p>P(x) = -x² + 50x - 200</p>
                    <p className="mt-2">a = -1  which is &lt; 0, so the graph opens downwards ∩</p>
                    <p className="mt-2">Maximum profit when  x = -b/(2a)</p>
                    <p className="ml-12">= -50/(2×(-1))</p>
                    <p className="ml-12">= 25</p>
                    <p className="text-green-600 dark:text-green-400 font-bold mt-2">∴ 25 bicycles should be assembled per day.</p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">b) Maximum profit:</p>
                  <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                    <p>P(25) = -(25)² + 50(25) - 200</p>
                    <p className="ml-6">= -625 + 1250 - 200</p>
                    <p className="ml-6">= 425</p>
                    <p className="text-green-600 dark:text-green-400 font-bold mt-2">∴ the maximum profit is \$425.</p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">c) Loss when no bicycles assembled:</p>
                  <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                    <p>When x = 0:</p>
                    <p className="ml-4">P(0) = -(0)² + 50(0) - 200</p>
                    <p className="ml-4">= -200</p>
                    <p className="text-red-600 dark:text-red-400 font-bold mt-2">∴ the loss is \$200 per day.</p>
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">This loss represents fixed costs (rent, utilities, insurance) that must be paid even if no bicycles are produced.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 5: Real-World Applications */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">5. Other Applications</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
              <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Parabolic Structures:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>• Satellite dishes (focus receives signals)</li>
                <li>• Car headlights (focus emits light rays)</li>
                <li>• Bridge arches (distribute weight evenly)</li>
                <li>• Cathedral domes (architectural strength)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h3 className="font-bold mb-3 text-green-700 dark:text-green-300">Optimization Problems:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>• Maximizing area with fixed perimeter</li>
                <li>• Minimizing cost in production</li>
                <li>• Finding optimal pricing for revenue</li>
                <li>• Determining best launch angles</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 dark:border-yellow-400">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-300">Key Strategy:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              When solving real-world problems with quadratics, always:
            </p>
            <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200 ml-4 mt-2">
              <li>1. Identify what the variables represent (with units!)</li>
              <li>2. Determine if you're looking for a maximum or minimum</li>
              <li>3. Use the vertex formula x = -b/(2a) to find the optimal value</li>
              <li>4. Substitute back to find the answer</li>
              <li>5. Check that your answer makes sense in context</li>
            </ul>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-600">
          <h3 className="font-bold text-xl mb-4 text-blue-900 dark:text-blue-200">Key Takeaways</h3>
          <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Use vertex form f(x) = a(x - h)² + k when you know the vertex (h, k)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Use factored form f(x) = a(x - α)(x - β) when you know x-intercepts α and β</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Use touch point form f(x) = a(x - α)² when parabola touches x-axis at α</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Always use an additional point to find the value of a</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Real-world problems often involve finding maximum (a &lt; 0) or minimum (a &gt; 0) values</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>The vertex formula x = -b/(2a) is crucial for optimization problems</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FindingQuadratics;
