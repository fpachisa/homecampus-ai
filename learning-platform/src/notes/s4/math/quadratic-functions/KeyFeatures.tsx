import { useState } from 'react';

const KeyFeatures = () => {
  const [testA, setTestA] = useState(1);
  const [testB, setTestB] = useState(0);
  const [testC, setTestC] = useState(-4);
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showExample4, setShowExample4] = useState(false);

  // Calculate axis of symmetry
  const axisOfSymmetry = testA !== 0 ? -testB / (2 * testA) : 0;

  // Calculate vertex
  const vertexX = axisOfSymmetry;
  const vertexY = testA * vertexX * vertexX + testB * vertexX + testC;

  // Calculate y-intercept
  const yIntercept = testC;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Key Features of Parabolas</h1>
        <p className="text-lg">Intercepts, axis of symmetry, and the vertex of quadratic functions</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Axes Intercepts */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. Axes Intercepts</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definitions:</h3>
            <ul className="space-y-3 text-gray-800 dark:text-gray-200">
              <li>
                • An <strong>x-intercept</strong> of a function is a value of x where its graph meets the x-axis.
                <br />
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-4">x-intercepts are found by letting y be 0 in the equation of the function.</span>
              </li>
              <li>
                • A <strong>y-intercept</strong> of a function is a value of y where its graph meets the y-axis.
                <br />
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-4">y-intercepts are found by letting x be 0 in the equation of the function.</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Important:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              For a quadratic function of the form <span className="font-mono">y = ax² + bx + c</span>, the <strong>y-intercept is the constant term c</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
              <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Finding the y-intercept:</h3>
              <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p className="font-mono">If y = ax² + bx + c</p>
                <p className="font-mono">When x = 0:</p>
                <p className="font-mono ml-4">y = a(0)² + b(0) + c</p>
                <p className="font-mono ml-4">y = c</p>
                <p className="mt-2 text-blue-600 dark:text-blue-400 font-bold">∴ the y-intercept is c</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h3 className="font-bold mb-3 text-green-700 dark:text-green-300">Number of x-intercepts:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>A quadratic may have:</li>
                <li>• <strong>Two x-intercepts</strong> (crosses x-axis twice)</li>
                <li>• <strong>One x-intercept</strong> (touches x-axis once)</li>
                <li>• <strong>No x-intercepts</strong> (doesn't touch x-axis)</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 1: Find the x-intercepts of y = 2(x - 3)(x + 2)</h3>
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample1 ? '▼' : '▶'}</span>
            </button>
            {showExample1 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-2">
                <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200">
                  <p>When y = 0:</p>
                  <p className="ml-4">2(x - 3)(x + 2) = 0</p>
                  <p className="ml-4">∴ x - 3 = 0  or  x + 2 = 0</p>
                  <p className="ml-4">∴ x = 3  or  x = -2</p>
                  <p className="ml-4 text-green-600 dark:text-green-400 font-bold mt-2">∴ the x-intercepts are 3 and -2</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 2: Find the x-intercepts of y = x² - 6x + 9</h3>
            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample2 ? '▼' : '▶'}</span>
            </button>
            {showExample2 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-2">
                <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200">
                  <p>When y = 0:</p>
                  <p className="ml-4">x² - 6x + 9 = 0</p>
                  <p className="ml-4">(x - 3)² = 0</p>
                  <p className="ml-4">∴ x = 3</p>
                  <p className="ml-4 text-green-600 dark:text-green-400 font-bold mt-2">∴ the x-intercept is 3</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Note: Since the quadratic has only one x-intercept, the graph <strong>touches</strong> the x-axis at x = 3.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Section 2: Axis of Symmetry */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Axis of Symmetry</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The graph of any quadratic function is symmetrical about a vertical line passing through the vertex. This line is called the <strong>axis of symmetry</strong>.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              If the graph has two x-intercepts, then the axis of symmetry is midway between them.
            </p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Formula:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded my-3">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100 mb-2">
                x = -b/(2a)
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                The equation of the axis of symmetry of y = ax² + bx + c
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 3: Find the equation of the axis of symmetry of y = 2x² + 3x + 1</h3>
            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample3 ? '▼' : '▶'}</span>
            </button>
            {showExample3 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-2">
                <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200">
                  <p>y = 2x² + 3x + 1  has  a = 2,  b = 3,  c = 1</p>
                  <p className="mt-2">Now  -b/(2a) = -3/(2 × 2) = -3/4</p>
                  <p className="ml-4 text-green-600 dark:text-green-400 font-bold mt-2">∴ the axis of symmetry has equation  x = -3/4</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded mb-4 border border-purple-200 dark:border-purple-700">
            <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Interactive: Calculate Axis of Symmetry</p>
            <div className="space-y-3">
              <div className="flex gap-2 items-center flex-wrap">
                <span className="text-gray-800 dark:text-gray-200">y =</span>
                <input
                  type="number"
                  value={testA}
                  onChange={(e) => setTestA(Number(e.target.value))}
                  className="px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded w-20 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                <span className="text-gray-800 dark:text-gray-200">x² +</span>
                <input
                  type="number"
                  value={testB}
                  onChange={(e) => setTestB(Number(e.target.value))}
                  className="px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded w-20 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                <span className="text-gray-800 dark:text-gray-200">x +</span>
                <input
                  type="number"
                  value={testC}
                  onChange={(e) => setTestC(Number(e.target.value))}
                  className="px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded w-20 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-3 rounded bg-blue-100 dark:bg-blue-900/50">
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  <strong>Axis of symmetry: x = {axisOfSymmetry.toFixed(3)}</strong>
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Calculation: -b/(2a) = -({testB})/(2×{testA}) = {axisOfSymmetry.toFixed(3)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: The Vertex */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">3. The Vertex</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The <strong>vertex</strong> or <strong>turning point</strong> of the quadratic function <span className="font-mono">y = ax² + bx + c</span> is the point at which the function has:
            </p>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200 ml-4">
              <li>• a <strong>maximum value</strong> for a &lt; 0  (parabola opens downwards ∩)</li>
              <li>• a <strong>minimum value</strong> for a &gt; 0  (parabola opens upwards ∪)</li>
            </ul>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Finding the Vertex:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Since the vertex lies on the axis of symmetry, its x-coordinate is <span className="font-mono font-bold">x = -b/(2a)</span>.
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              The y-coordinate is found by <strong>substituting this x-coordinate into the function</strong>.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded my-3">
              <div className="space-y-2 text-sm font-mono text-gray-900 dark:text-gray-100">
                <p><strong>Step 1:</strong> Find x = -b/(2a)</p>
                <p><strong>Step 2:</strong> Substitute to find y</p>
                <p className="text-blue-600 dark:text-blue-400"><strong>Vertex:</strong> (x, y)</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 4: Consider the quadratic function y = -x² + 2x + 3</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">a) Find the axes intercepts, b) Find the equation of the axis of symmetry, c) Find the coordinates of the vertex, d) Hence sketch the function.</p>
            <button
              onClick={() => setShowExample4(!showExample4)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show complete solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample4 ? '▼' : '▶'}</span>
            </button>
            {showExample4 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-4">
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">a) Find the intercepts:</p>
                  <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                    <p><strong>y-intercept:</strong> When x = 0, y = 3</p>
                    <p className="mt-2"><strong>x-intercepts:</strong> When y = 0,</p>
                    <p className="ml-4">-x² + 2x + 3 = 0</p>
                    <p className="ml-4">x² - 2x - 3 = 0</p>
                    <p className="ml-4">(x - 3)(x + 1) = 0</p>
                    <p className="ml-4">∴ x = 3  or  x = -1</p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">b) Axis of symmetry:</p>
                  <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                    <p>a = -1,  b = 2,  c = 3</p>
                    <p>x = -b/(2a) = -2/(2×(-1)) = 1</p>
                    <p className="text-blue-600 dark:text-blue-400 font-bold">∴ the axis of symmetry is  x = 1</p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">c) Vertex coordinates:</p>
                  <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                    <p>When  x = 1,  y = -(1)² + 2(1) + 3</p>
                    <p className="ml-12">= -1 + 2 + 3</p>
                    <p className="ml-12">= 4</p>
                    <p className="text-blue-600 dark:text-blue-400 font-bold mt-2">∴ the vertex is  (1, 4)</p>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <strong>d) Sketch:</strong> The parabola opens downwards (a = -1 &lt; 0), has vertex at (1, 4) which is a maximum,
                    y-intercept at 3, and x-intercepts at -1 and 3.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded mb-4 border border-purple-200 dark:border-purple-700">
            <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Interactive: Find the Vertex</p>
            <div className="space-y-3">
              <div className="p-3 rounded bg-blue-100 dark:bg-blue-900/50">
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  <strong>For y = {testA}x² + {testB}x + {testC}:</strong>
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200 mt-2">
                  • y-intercept: <span className="font-bold">{yIntercept}</span>
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  • Axis of symmetry: <span className="font-bold">x = {axisOfSymmetry.toFixed(3)}</span>
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  • Vertex: <span className="font-bold">({vertexX.toFixed(3)}, {vertexY.toFixed(3)})</span>
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200 mt-2">
                  {testA > 0 ? '• Opens upwards ∪ (minimum at vertex)' : '• Opens downwards ∩ (maximum at vertex)'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-600">
          <h3 className="font-bold text-xl mb-4 text-blue-900 dark:text-blue-200">Key Takeaways</h3>
          <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>y-intercept of y = ax² + bx + c is simply c (let x = 0)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>x-intercepts found by letting y = 0 and solving (may have 0, 1, or 2)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Axis of symmetry formula: x = -b/(2a)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Vertex x-coordinate is -b/(2a), then substitute to find y</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>If a &gt; 0, vertex is a minimum; if a &lt; 0, vertex is a maximum</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>These features are essential for sketching parabolas accurately</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
