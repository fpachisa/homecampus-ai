import { useState } from 'react';

const GraphsTransformations = () => {
  const [coeffA, setCoeffA] = useState(1);
  const [verticalShift, setVerticalShift] = useState(0);
  const [horizontalShift, setHorizontalShift] = useState(0);
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  // Generate parabola points (for potential future visualization)
  // const generatePoints = (a: number, h: number, k: number) => {
  //   const points = [];
  //   for (let x = -3; x <= 3; x++) {
  //     const y = a * (x - h) * (x - h) + k;
  //     points.push({ x, y });
  //   }
  //   return points;
  // };

  // const points = generatePoints(coeffA, horizontalShift, verticalShift);
  // const vertex = { x: horizontalShift, y: verticalShift };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Graphs and Transformations</h1>
        <p className="text-lg">Understanding parabolas, table of values, and transformations of quadratic functions</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is a Parabola? */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. The Parabola</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Geometric Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              In geometry, a <strong>parabola</strong> is defined as the locus or set of all points which are equidistant from a fixed
              point called the <strong>focus</strong> and a fixed line called the <strong>directrix</strong>.
            </p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Important Result:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded my-3">
              <p className="text-center text-xl font-bold text-gray-900 dark:text-gray-100">
                The graph of any quadratic function is a parabola.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
              <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Parabola Features:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>• U-shaped curve (smooth and continuous)</li>
                <li>• Has a <strong>vertex</strong> (turning point)</li>
                <li>• Symmetrical about a vertical line through the vertex</li>
                <li>• Opens upwards (∪) or downwards (∩)</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h3 className="font-bold mb-3 text-green-700 dark:text-green-300">Key Properties:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>• The simplest parabola is <span className="font-mono">y = x²</span></li>
                <li>• Vertex at origin (0, 0) for <span className="font-mono">y = x²</span></li>
                <li>• Minimum turning point at (0, 0)</li>
                <li>• Symmetric about the y-axis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Graphing from a Table of Values */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Graphing from a Table of Values</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The simplest quadratic function is <span className="font-mono font-bold">y = x²</span>. Its graph can be drawn
              from a table of values.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example: Graph y = x²</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-center border-collapse border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">x</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">-3</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">-2</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">-1</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">0</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">1</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">2</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">y</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-gray-200">9</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-gray-200">4</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-gray-200">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-blue-600 dark:text-blue-400 font-bold">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-gray-200">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-gray-200">4</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-gray-200">9</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
              <p className="font-bold mb-2">We can see that the graph:</p>
              <ul className="space-y-1 ml-4">
                <li>• is symmetrical about the y-axis</li>
                <li>• has a minimum turning point at (0, 0) which we call the <strong>vertex</strong> of the parabola</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example: Graph y = x² + 2x - 3</h3>
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show table of values from x = -3 to x = 3</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample1 ? '▼' : '▶'}</span>
            </button>
            {showExample1 && (
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-center border-collapse border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">x</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">-3</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">-2</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">-1</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">0</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">1</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">2</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">y</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-gray-200">0</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-gray-200">-3</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-blue-600 dark:text-blue-400 font-bold">-4</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-gray-200">-3</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-gray-200">0</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-gray-200">5</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-gray-200">12</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  The vertex (minimum point) is approximately at (-1, -4).
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Effect of Coefficient a */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">3. Transformations: The Effect of a</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              For a function of the form <span className="font-mono font-bold">y = ax²</span>, the coefficient a affects:
            </p>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200 ml-4">
              <li><strong>a) the position of the graph</strong> - whether it opens upward or downward</li>
              <li><strong>c) the direction in which the graph opens</strong> - the shape of the graph</li>
            </ul>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Rules:</h3>
            <ul className="space-y-3 text-gray-800 dark:text-gray-200">
              <li>
                <span className="font-bold">If |a| &gt; 1,</span> <span className="font-mono">y = ax²</span> is "thinner" than <span className="font-mono">y = x²</span>
                <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">If |a| &lt; 1, <span className="font-mono">y = ax²</span> is "wider" than <span className="font-mono">y = x²</span></span>
              </li>
              <li>
                <span className="font-bold">If a &gt; 0,</span> <span className="font-mono">y = ax²</span> opens upwards ∪
                <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">If a &lt; 0, <span className="font-mono">y = ax²</span> opens downwards ∩</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded mb-4 border border-purple-200 dark:border-purple-700">
            <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Interactive: Explore the effect of a</p>
            <div className="space-y-3">
              <div className="flex gap-2 items-center">
                <span className="text-gray-800 dark:text-gray-200 min-w-[100px]">a = {coeffA}</span>
                <input
                  type="range"
                  min="-3"
                  max="3"
                  step="0.25"
                  value={coeffA}
                  onChange={(e) => setCoeffA(Number(e.target.value))}
                  className="flex-1"
                />
              </div>
              <div className="p-3 rounded bg-blue-100 dark:bg-blue-900/50">
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  <strong>y = {coeffA}x²</strong>
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {coeffA > 0 ? '✓ Opens upwards (∪)' : '✓ Opens downwards (∩)'}
                  {Math.abs(coeffA) > 1 && ' - Thinner than y = x²'}
                  {Math.abs(coeffA) < 1 && Math.abs(coeffA) > 0 && ' - Wider than y = x²'}
                  {coeffA === 1 && ' - Same as y = x²'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Translations */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">4. Transformations: Translations</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Vertex Form:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded my-3">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100">
                y = a(x - h)² + k
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                The vertex is shifted to (h, k)
              </p>
            </div>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200 ml-4">
              <li>• <strong>h</strong>: horizontal shift (left or right)</li>
              <li>• <strong>k</strong>: vertical shift (up or down)</li>
              <li>• The graph has the same shape as <span className="font-mono">y = ax²</span> but is translated</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example: Sketch y = x² + 3</h3>
            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show explanation</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample2 ? '▼' : '▶'}</span>
            </button>
            {showExample2 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-2 text-gray-800 dark:text-gray-200">
                <p>We can write this as <span className="font-mono">y = (x - 0)² + 3</span></p>
                <p>This is <span className="font-mono">y = x²</span> translated:</p>
                <ul className="ml-4 space-y-1 text-sm">
                  <li>• 0 units horizontally (no horizontal shift)</li>
                  <li>• 3 units upwards (k = 3)</li>
                </ul>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  The vertex is at (0, 3).
                </p>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example: Sketch y = (x + 3)²</h3>
            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show explanation</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample3 ? '▼' : '▶'}</span>
            </button>
            {showExample3 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-2 text-gray-800 dark:text-gray-200">
                <p>We can write this as <span className="font-mono">y = (x - (-3))² + 0</span></p>
                <p>This is <span className="font-mono">y = x²</span> translated:</p>
                <ul className="ml-4 space-y-1 text-sm">
                  <li>• 3 units to the left (h = -3)</li>
                  <li>• 0 units vertically (no vertical shift)</li>
                </ul>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  The vertex is at (-3, 0).
                </p>
              </div>
            )}
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded mb-4 border border-purple-200 dark:border-purple-700">
            <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Interactive: Explore Translations</p>
            <div className="space-y-3">
              <div className="flex gap-2 items-center">
                <span className="text-gray-800 dark:text-gray-200 min-w-[200px]">Horizontal shift h = {horizontalShift}</span>
                <input
                  type="range"
                  min="-3"
                  max="3"
                  step="1"
                  value={horizontalShift}
                  onChange={(e) => setHorizontalShift(Number(e.target.value))}
                  className="flex-1"
                />
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-gray-800 dark:text-gray-200 min-w-[200px]">Vertical shift k = {verticalShift}</span>
                <input
                  type="range"
                  min="-3"
                  max="3"
                  step="1"
                  value={verticalShift}
                  onChange={(e) => setVerticalShift(Number(e.target.value))}
                  className="flex-1"
                />
              </div>
              <div className="p-3 rounded bg-blue-100 dark:bg-blue-900/50">
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  <strong>y = (x - {horizontalShift})² + {verticalShift}</strong>
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Vertex at ({horizontalShift}, {verticalShift})
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Completing the Square */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">5. Completing the Square</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              This process can be used to convert quadratic functions into the <strong>completed square form</strong>
              <span className="font-mono"> y = a(x - h)² + k</span>, which makes them easier to graph.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Steps to Complete the Square:</h3>
            <ol className="space-y-3 text-gray-800 dark:text-gray-200 list-decimal ml-6">
              <li>Start with <span className="font-mono">y = ax² + bx + c</span></li>
              <li>Rearrange: <span className="font-mono">y = a(x² + (b/a)x) + c</span></li>
              <li>Complete the square inside the brackets</li>
              <li>Simplify to <span className="font-mono">y = a(x - h)² + k</span> form</li>
            </ol>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example: Write y = x² + 2x + 5 in the form y = (x - h)² + k</h3>
            <div className="p-4 bg-white dark:bg-gray-800 rounded space-y-2">
              <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200">
                <p>y = x² + 2x + 5</p>
                <p className="ml-4">∴ y = x² + 2x + 1² + 5 - 1²</p>
                <p className="ml-4">∴ y = (x + 1)² + 4</p>
              </div>
              <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded text-sm text-gray-800 dark:text-gray-200">
                <p><strong>Interpretation:</strong></p>
                <p>This is <span className="font-mono">y = x²</span> translated 1 unit left and 4 units up.</p>
                <p className="text-blue-600 dark:text-blue-400 font-bold mt-1">Vertex at (-1, 4)</p>
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
              <span>All quadratic functions graph as parabolas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Parabolas can be graphed using a table of values</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>If a &gt; 0, parabola opens upwards; if a &lt; 0, opens downwards</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>If |a| &gt; 1, parabola is thinner; if |a| &lt; 1, wider</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Vertex form y = a(x - h)² + k has vertex at (h, k)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Complete the square to convert standard form to vertex form</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GraphsTransformations;
