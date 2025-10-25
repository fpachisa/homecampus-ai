import { useState } from 'react';

const GraphCompletedSquare = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Graphing Quadratics from Vertex Form
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
          Introduction
        </h2>
        <p className="mb-3">
          The <strong>vertex form</strong> of a quadratic function makes graphing incredibly easy
          because it directly reveals the most important features of the parabola.
        </p>
        <div className="p-6 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg mt-4 border-2 border-blue-400 dark:border-blue-600">
          <h3 className="font-bold text-xl mb-3 text-center">Vertex Form</h3>
          <div className="text-center text-2xl font-bold mb-3">
            f(x) = a(x - h)² + k
          </div>
          <p className="text-center text-sm">
            Vertex: (h, k) | Axis of symmetry: x = h
          </p>
        </div>
        <p className="mt-4">
          Understanding transformations helps us quickly sketch parabolas without plotting many points.
        </p>
      </section>

      {/* Understanding Vertex Form */}
      <section className="mb-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
          1. Understanding the Parameters
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Reading the Vertex Form: f(x) = a(x - h)² + k</h3>
          <div className="space-y-3 mt-3">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
              <p className="font-semibold text-blue-700 dark:text-blue-300">(h, k) - The Vertex:</p>
              <p className="ml-4">• Directly gives the coordinates of the vertex</p>
              <p className="ml-4">• <strong>Watch the sign!</strong> f(x) = a(x - 3)² + 2 has vertex (3, 2)</p>
              <p className="ml-4">• f(x) = a(x + 3)² + 2 = a(x - (-3))² + 2 has vertex (-3, 2)</p>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded">
              <p className="font-semibold text-green-700 dark:text-green-300">a - Shape and Orientation:</p>
              <p className="ml-4">• a &gt; 0: opens upward (minimum at vertex)</p>
              <p className="ml-4">• a &lt; 0: opens downward (maximum at vertex)</p>
              <p className="ml-4">• |a| &gt; 1: narrower than y = x²</p>
              <p className="ml-4">• 0 &lt; |a| &lt; 1: wider than y = x²</p>
            </div>
          </div>
        </div>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Common Sign Mistakes to Avoid:</h3>
          <div className="space-y-2 ml-4 text-sm">
            <div className="p-2 bg-red-50 dark:bg-red-900/30 rounded">
              <p><strong>Wrong:</strong> f(x) = (x - 5)² + 3 has vertex (-5, 3) ✗</p>
              <p><strong>Right:</strong> f(x) = (x - 5)² + 3 has vertex (5, 3) ✓</p>
            </div>
            <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded">
              <p><strong>Correct:</strong> f(x) = (x + 5)² + 3 = (x - (-5))² + 3 has vertex (-5, 3) ✓</p>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Transformations */}
      <section className="mb-8 p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">
          2. Understanding Transformations
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Starting Point: Parent Function f(x) = x²</h3>
          <p className="mb-2">Vertex at (0, 0), opens upward, standard width</p>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">
              Vertical Shift (k):
            </h3>
            <p className="mb-2">f(x) = x² + k shifts the parabola up or down</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>k &gt; 0: shift UP by k units</li>
              <li>k &lt; 0: shift DOWN by |k| units</li>
            </ul>
            <p className="text-sm mt-2">
              <strong>Example:</strong> f(x) = x² + 3 shifts y = x² up 3 units → vertex at (0, 3)
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">
              Horizontal Shift (h):
            </h3>
            <p className="mb-2">f(x) = (x - h)² shifts the parabola left or right</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>h &gt; 0: shift RIGHT by h units</li>
              <li>h &lt; 0: shift LEFT by |h| units</li>
            </ul>
            <p className="text-sm mt-2">
              <strong>Example:</strong> f(x) = (x - 4)² shifts y = x² right 4 units → vertex at (4, 0)
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">
              Vertical Stretch/Compression (a):
            </h3>
            <p className="mb-2">f(x) = ax² changes the width and orientation</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>|a| &gt; 1: vertical stretch (narrower)</li>
              <li>0 &lt; |a| &lt; 1: vertical compression (wider)</li>
              <li>a &lt; 0: reflection over x-axis (opens downward)</li>
            </ul>
            <p className="text-sm mt-2">
              <strong>Example:</strong> f(x) = 2x² is narrower; f(x) = -x² opens downward
            </p>
          </div>
        </div>
      </section>

      {/* Graphing Steps */}
      <section className="mb-8 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          3. Step-by-Step Graphing Method
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Steps to Graph from Vertex Form:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Identify the vertex (h, k) from the equation</li>
            <li>Plot the vertex on the coordinate plane</li>
            <li>Draw the axis of symmetry: x = h (vertical dashed line)</li>
            <li>Determine orientation (upward if a &gt; 0, downward if a &lt; 0)</li>
            <li>Find additional points by substituting x-values near the vertex</li>
            <li>Use symmetry to mirror points across the axis of symmetry</li>
            <li>Sketch the smooth U-shaped curve</li>
          </ol>
        </div>

        {/* Worked Example 1 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-800 transition"
          >
            {showExample1 ? '▼' : '▶'} Example 1: Graph f(x) = (x - 2)² + 1
          </button>

          {showExample1 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-purple-500">
              <p className="mb-2"><strong>Given:</strong> f(x) = (x - 2)² + 1</p>

              <p className="mb-2"><strong>Step 1:</strong> Identify vertex</p>
              <p className="ml-4 mb-2">Vertex: (h, k) = (2, 1)</p>

              <p className="mb-2"><strong>Step 2:</strong> Identify other features</p>
              <div className="ml-4 mb-2">
                <p>a = 1 &gt; 0 → opens upward</p>
                <p>|a| = 1 → standard width (same as y = x²)</p>
                <p>Axis of symmetry: x = 2</p>
              </div>

              <p className="mb-2"><strong>Step 3:</strong> Find additional points</p>
              <div className="ml-4 mb-2 space-y-1">
                <p>When x = 1: f(1) = (1-2)² + 1 = 1 + 1 = 2 → point (1, 2)</p>
                <p>When x = 3: f(3) = (3-2)² + 1 = 1 + 1 = 2 → point (3, 2)</p>
                <p>When x = 0: f(0) = (0-2)² + 1 = 4 + 1 = 5 → point (0, 5)</p>
                <p>When x = 4: f(4) = (4-2)² + 1 = 4 + 1 = 5 → point (4, 5)</p>
              </div>

              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-600 rounded">
                <h4 className="font-semibold mb-3">Visual Graph:</h4>
                <svg viewBox="-10 -10 140 140" className="w-full max-w-md mx-auto border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800">
                  {/* Grid */}
                  <line x1="0" y1="65" x2="130" y2="65" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                  <line x1="65" y1="0" x2="65" y2="130" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>

                  {/* Axis labels */}
                  <text x="125" y="70" fontSize="8">x</text>
                  <text x="68" y="10" fontSize="8">y</text>

                  {/* Axis of symmetry */}
                  <line x1="85" y1="10" x2="85" y2="120" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2"/>
                  <text x="88" y="15" fontSize="7" fill="#ef4444">x=2</text>

                  {/* Parabola - shifted right 2 (scale: 10 units = 20px) */}
                  <path d="M 25,115 Q 65,45 105,115" fill="none" stroke="#3b82f6" strokeWidth="2"/>

                  {/* Vertex */}
                  <circle cx="65" cy="55" r="3" fill="#22c55e"/>
                  <text x="70" y="53" fontSize="7" fill="#22c55e">(2,1)</text>

                  {/* Additional points */}
                  <circle cx="45" cy="75" r="2" fill="#3b82f6"/>
                  <text x="30" y="73" fontSize="6">(1,2)</text>
                  <circle cx="85" cy="75" r="2" fill="#3b82f6"/>
                  <text x="88" y="73" fontSize="6">(3,2)</text>
                </svg>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Key Features:</p>
                <p>• Vertex: (2, 1) - minimum point</p>
                <p>• Opens upward (a = 1 &gt; 0)</p>
                <p>• Axis of symmetry: x = 2</p>
                <p>• Y-intercept: (0, 5)</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Negative a */}
      <section className="mb-8 p-6 bg-orange-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700 dark:text-orange-300">
          4. Graphing with Negative 'a'
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">When a &lt; 0:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Parabola opens <strong>downward</strong> (∩ shape)</li>
            <li>Vertex is the <strong>maximum</strong> point</li>
            <li>All other graphing steps remain the same</li>
          </ul>
        </div>

        {/* Worked Example 2 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample2(!showExample2)}
            className="w-full text-left p-4 bg-orange-100 dark:bg-orange-900 rounded-lg font-semibold hover:bg-orange-200 dark:hover:bg-orange-800 transition"
          >
            {showExample2 ? '▼' : '▶'} Example 2: Graph f(x) = -2(x + 1)² + 3
          </button>

          {showExample2 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-orange-500">
              <p className="mb-2"><strong>Given:</strong> f(x) = -2(x + 1)² + 3</p>

              <p className="mb-2"><strong>Step 1:</strong> Rewrite to identify h</p>
              <p className="ml-4 mb-2">f(x) = -2(x - (-1))² + 3</p>

              <p className="mb-2"><strong>Step 2:</strong> Identify vertex and features</p>
              <div className="ml-4 mb-2">
                <p>Vertex: (-1, 3)</p>
                <p>a = -2 &lt; 0 → opens downward</p>
                <p>|a| = 2 &gt; 1 → narrower than y = x²</p>
                <p>Axis of symmetry: x = -1</p>
              </div>

              <p className="mb-2"><strong>Step 3:</strong> Find additional points</p>
              <div className="ml-4 mb-2 space-y-1">
                <p>When x = 0: f(0) = -2(0+1)² + 3 = -2 + 3 = 1 → (0, 1)</p>
                <p>When x = -2: f(-2) = -2(-2+1)² + 3 = -2 + 3 = 1 → (-2, 1)</p>
                <p>When x = 1: f(1) = -2(1+1)² + 3 = -8 + 3 = -5 → (1, -5)</p>
                <p>When x = -3: f(-3) = -2(-3+1)² + 3 = -8 + 3 = -5 → (-3, -5)</p>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Key Features:</p>
                <p>• Vertex: (-1, 3) - maximum point</p>
                <p>• Opens downward (a = -2 &lt; 0)</p>
                <p>• Narrower than standard parabola (|a| = 2)</p>
                <p>• Axis of symmetry: x = -1</p>
                <p>• Y-intercept: (0, 1)</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Converting Standard to Vertex Form */}
      <section className="mb-8 p-6 bg-indigo-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">
          5. Converting Standard Form to Vertex Form
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">When Given Standard Form:</h3>
          <p className="mb-2">
            If you're given f(x) = ax² + bx + c, convert to vertex form by completing the square.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            (See "Completing the Square" notes for detailed method)
          </p>
        </div>

        {/* Worked Example 3 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample3(!showExample3)}
            className="w-full text-left p-4 bg-indigo-100 dark:bg-indigo-900 rounded-lg font-semibold hover:bg-indigo-200 dark:hover:bg-indigo-800 transition"
          >
            {showExample3 ? '▼' : '▶'} Example 3: Convert and Graph f(x) = x² + 4x + 1
          </button>

          {showExample3 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-indigo-500">
              <p className="mb-2"><strong>Given:</strong> f(x) = x² + 4x + 1</p>

              <p className="mb-2"><strong>Step 1:</strong> Complete the square</p>
              <div className="ml-4 mb-2">
                <p>f(x) = (x² + 4x) + 1</p>
                <p>Take half of 4: 4/2 = 2, square it: 2² = 4</p>
                <p>f(x) = (x² + 4x + 4 - 4) + 1</p>
                <p>f(x) = (x + 2)² - 4 + 1</p>
                <p className="font-semibold text-blue-600 dark:text-blue-400">
                  f(x) = (x + 2)² - 3
                </p>
              </div>

              <p className="mb-2"><strong>Step 2:</strong> Identify features from vertex form</p>
              <div className="ml-4 mb-2">
                <p>f(x) = (x - (-2))² + (-3)</p>
                <p>Vertex: (-2, -3)</p>
                <p>a = 1 &gt; 0 → opens upward, minimum</p>
                <p>Axis of symmetry: x = -2</p>
              </div>

              <p className="mb-2"><strong>Step 3:</strong> Find additional points</p>
              <div className="ml-4 mb-2">
                <p>x = 0: f(0) = 1 → (0, 1)</p>
                <p>x = -1: f(-1) = (-1+2)² - 3 = 1 - 3 = -2 → (-1, -2)</p>
                <p>x = -3: f(-3) = (-3+2)² - 3 = 1 - 3 = -2 → (-3, -2)</p>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Vertex Form: f(x) = (x + 2)² - 3</p>
                <p className="mt-2">Vertex: (-2, -3)</p>
                <p>Opens upward with vertex below x-axis</p>
                <p>Has two x-intercepts (can verify with discriminant)</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Practice Problems */}
      <section className="mb-8 p-6 bg-pink-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-pink-700 dark:text-pink-300">
          Practice Problems
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">1. Identify the vertex and sketch f(x) = (x - 3)² - 4</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Vertex: (3, -4)</p>
                <p>Opens upward (a = 1 &gt; 0), minimum at vertex</p>
                <p>Axis of symmetry: x = 3</p>
                <p className="font-semibold">Additional points: (2, -3), (4, -3), (0, 5), (6, 5)</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">2. Graph f(x) = -(x + 2)² + 1 and identify all features</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Vertex: (-2, 1) - maximum point</p>
                <p>Opens downward (a = -1 &lt; 0)</p>
                <p>Axis: x = -2</p>
                <p>Y-intercept: (0, -3)</p>
                <p className="font-semibold">Points: (-3, 0), (-1, 0), (0, -3), (-4, -3)</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">3. Convert to vertex form and graph: f(x) = x² - 6x + 5</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Complete square: f(x) = (x² - 6x + 9) - 9 + 5</p>
                <p>f(x) = (x - 3)² - 4</p>
                <p>Vertex: (3, -4)</p>
                <p className="font-semibold">Opens upward, vertex below x-axis, has 2 x-intercepts</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">4. What transformations change y = x² to f(x) = 3(x - 1)² + 2?</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>1. Shift right 1 unit (h = 1)</p>
                <p>2. Shift up 2 units (k = 2)</p>
                <p>3. Vertical stretch by factor 3 (narrower)</p>
                <p className="font-semibold">Final vertex: (1, 2)</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">
          Key Takeaways
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Vertex form f(x) = a(x - h)² + k reveals vertex (h, k) directly</li>
          <li><strong>Watch signs!</strong> f(x) = (x - 3)² has h = 3, not h = -3</li>
          <li>Parameter a controls orientation (sign) and width (magnitude)</li>
          <li>Transformations: h shifts horizontally, k shifts vertically</li>
          <li>Use axis of symmetry x = h to find symmetric points easily</li>
          <li>Convert standard form to vertex form by completing the square</li>
          <li>Vertex form makes graphing quick - just plot vertex and a few points</li>
          <li>Always verify orientation (up/down) and whether vertex is max or min</li>
        </ul>
      </section>
    </div>
  );
};

export default GraphCompletedSquare;
