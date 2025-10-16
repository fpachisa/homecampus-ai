import React, { useState } from 'react';

const ExponentialGraphs = () => {
  const [selectedBase, setSelectedBase] = useState(2);
  const [showTable, setShowTable] = useState(true);
  const [compareMode, setCompareMode] = useState(false);

  // Graph Component with full cartesian plane
  const ExponentialGraph = ({ base = 2, showPoints = true, color = '#2563eb' }:
    { base: number; showPoints?: boolean; color?: string }) => {
    const xValues = [-3, -2, -1, 0, 1, 2, 3];
    const yValues = xValues.map(x => Math.pow(base, x));

    // Scale for visualization
    const xScale = 40;
    const yScale = 20;
    const originX = 150;
    const originY = 200;

    return (
      <g>
        {/* Plot curve */}
        <path
          d={`M ${xValues.map((x, i) => {
            const xPos = originX + x * xScale;
            const yPos = originY - yValues[i] * yScale;
            return `${i === 0 ? 'M' : 'L'} ${xPos},${Math.max(yPos, 20)}`;
          }).join(' ')}`}
          fill="none"
          stroke={color}
          strokeWidth="2"
        />

        {/* Plot points */}
        {showPoints && xValues.map((x, i) => {
          const xPos = originX + x * xScale;
          const yPos = Math.max(originY - yValues[i] * yScale, 20);
          return (
            <circle
              key={x}
              cx={xPos}
              cy={yPos}
              r="3"
              fill={color}
            />
          );
        })}

        {/* Function label */}
        <text x="300" y="40" className="text-sm font-bold" fill={color}>
          f(x) = {base}^x
        </text>
      </g>
    );
  };

  // Full Graph with axes
  const GraphCanvas = ({ children }: { children: React.ReactNode }) => {
    const originX = 150;
    const originY = 200;

    return (
      <svg width="450" height="280" className="mx-auto bg-white rounded">
        {/* Grid lines */}
        {[-3, -2, -1, 0, 1, 2, 3].map(i => (
          <g key={`grid-${i}`}>
            <line
              x1={originX + i * 40}
              y1="20"
              x2={originX + i * 40}
              y2="260"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <line
              x1="30"
              y1={originY - i * 40}
              x2="430"
              y2={originY - i * 40}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          </g>
        ))}

        {/* Axes */}
        <line x1="30" y1={originY} x2="430" y2={originY} stroke="#333" strokeWidth="2" />
        <line x1={originX} y1="20" x2={originX} y2="260" stroke="#333" strokeWidth="2" />

        {/* Axis labels */}
        <text x="435" y={originY + 5} className="text-sm font-bold">x</text>
        <text x={originX - 10} y="15" className="text-sm font-bold">y</text>

        {/* X-axis markers */}
        {[-3, -2, -1, 1, 2, 3].map(i => (
          <text key={`x-${i}`} x={originX + i * 40 - 5} y={originY + 20} className="text-xs">
            {i}
          </text>
        ))}

        {/* Y-axis markers */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <text key={`y-${i}`} x={originX - 25} y={originY - i * 20 + 5} className="text-xs">
            {i}
          </text>
        ))}

        {/* Horizontal asymptote (y = 0) */}
        <line
          x1="30"
          y1={originY}
          x2="430"
          y2={originY}
          stroke="#ef4444"
          strokeWidth="1"
          strokeDasharray="5,5"
          opacity="0.5"
        />
        <text x="350" y={originY + 15} className="text-xs text-red-600">y = 0 (asymptote)</text>

        {children}
      </svg>
    );
  };

  // Table of values component
  const TableOfValues = ({ base = 2 }: { base: number }) => {
    const xValues = [-3, -2, -1, 0, 1, 2, 3];
    const yValues = xValues.map(x => Math.pow(base, x));

    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border-2 border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border border-gray-300 p-2">x</th>
              {xValues.map(x => (
                <th key={x} className="border border-gray-300 p-2">{x}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-2 font-semibold">y = {base}^x</td>
              {yValues.map((y, i) => (
                <td key={i} className="border border-gray-300 p-2 text-center">
                  {y < 1 ? y.toFixed(3) : y.toFixed(1)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Graphs of Exponential Functions</h1>
        <p className="text-lg">Visualizing and understanding the behavior of exponential functions</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Drawing Graphs from Tables */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">1. Creating Graphs Using Tables of Values</h2>

          <p className="mb-4">
            To draw an exponential graph, we first create a table of values by substituting different x-values
            into the function.
          </p>

          <div className="bg-blue-50 p-4 rounded mb-4">
            <div className="flex items-center gap-2 mb-3">
              <p className="font-semibold">Select a base to explore:</p>
              <div className="flex gap-2 flex-wrap">
                {[2, 3, 1.5, 0.5].map(base => (
                  <button
                    key={base}
                    onClick={() => setSelectedBase(base)}
                    className={`px-3 py-1 rounded text-sm ${
                      selectedBase === base
                        ? 'bg-purple-600 text-white'
                        : 'bg-white border-2 border-purple-300'
                    }`}
                  >
                    {base}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowTable(!showTable)}
              className="text-sm text-blue-600 underline mb-3"
            >
              {showTable ? 'Hide' : 'Show'} Table of Values
            </button>

            {showTable && <TableOfValues base={selectedBase} />}
          </div>

          <div className="bg-white p-4 rounded border-2 border-purple-300">
            <h3 className="font-semibold mb-3 text-center">Graph of f(x) = {selectedBase}^x</h3>
            <GraphCanvas>
              <ExponentialGraph base={selectedBase} />
            </GraphCanvas>
          </div>
        </div>

        {/* Section 2: Key Features */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">2. Key Features of Exponential Graphs</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded border-2 border-green-300">
              <h3 className="font-bold text-green-700 mb-3">For f(x) = a^x where a &gt; 1:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Y-intercept:</strong> Always at (0, 1) because a^0 = 1</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Behavior:</strong> Graph rises from left to right (increasing)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Asymptote:</strong> Horizontal asymptote at y = 0 (x-axis)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Domain:</strong> All real numbers (-∞, ∞)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Range:</strong> y &gt; 0 (positive values only)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Graph lies entirely <strong>above</strong> the x-axis</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded border-2 border-red-300">
              <h3 className="font-bold text-red-700 mb-3">For f(x) = a^x where 0 &lt; a &lt; 1:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span><strong>Y-intercept:</strong> Still at (0, 1)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span><strong>Behavior:</strong> Graph falls from left to right (decreasing)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span><strong>Asymptote:</strong> Horizontal asymptote at y = 0</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span><strong>Domain:</strong> All real numbers (-∞, ∞)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span><strong>Range:</strong> y &gt; 0 (positive values only)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>As x gets smaller, y approaches <strong>zero</strong> but never reaches it</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mt-4">
            <p className="font-bold mb-2">Important Note:</p>
            <p className="text-sm">
              The line <strong>y = 0</strong> (the x-axis) is called a <strong>horizontal asymptote</strong>.
              The graph gets closer and closer to this line but never actually touches or crosses it.
              This means exponential functions never equal zero!
            </p>
          </div>
        </div>

        {/* Section 3: Comparing Different Bases */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">3. Comparing Different Bases</h2>

          <div className="bg-purple-50 p-4 rounded mb-4">
            <button
              onClick={() => setCompareMode(!compareMode)}
              className="w-full text-left p-3 bg-purple-200 rounded font-semibold hover:bg-purple-300 transition"
            >
              {compareMode ? '▼' : '▶'} Click to Compare Multiple Bases
            </button>
          </div>

          {compareMode && (
            <div className="bg-white p-4 rounded border-2 border-purple-300">
              <h3 className="font-semibold mb-3 text-center">Comparison: Different Base Values</h3>
              <GraphCanvas>
                <ExponentialGraph base={2} showPoints={false} color="#2563eb" />
                <ExponentialGraph base={3} showPoints={false} color="#059669" />
                <ExponentialGraph base={0.5} showPoints={false} color="#dc2626" />
              </GraphCanvas>

              <div className="mt-4 space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-blue-600 inline-block"></span>
                  <span><strong>f(x) = 2^x</strong> - Growth rate: moderate</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-600 inline-block"></span>
                  <span><strong>f(x) = 3^x</strong> - Growth rate: faster</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-red-600 inline-block"></span>
                  <span><strong>f(x) = 0.5^x</strong> - Decay (decreasing)</span>
                </p>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded">
                <p className="font-semibold text-sm mb-2">Observations:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Larger bases (like 3) grow <strong>faster</strong> than smaller bases (like 2)</li>
                  <li>All growth functions (a &gt; 1) pass through (0, 1)</li>
                  <li>Decay functions (0 &lt; a &lt; 1) are reflections of growth functions</li>
                  <li>All curves never touch the x-axis (y = 0 is an asymptote for all)</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Section 4: Worked Example */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">4. Worked Example: Sketching f(x) = 1.3^x</h2>

          <div className="bg-white p-6 rounded border-2 border-gray-300">
            <p className="font-semibold mb-3">Step 1: Create a table of values</p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">x</th>
                    <th className="border border-gray-300 p-2">-2</th>
                    <th className="border border-gray-300 p-2">-1</th>
                    <th className="border border-gray-300 p-2">0</th>
                    <th className="border border-gray-300 p-2">1</th>
                    <th className="border border-gray-300 p-2">2</th>
                    <th className="border border-gray-300 p-2">3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">y</td>
                    <td className="border border-gray-300 p-2 text-center">0.59</td>
                    <td className="border border-gray-300 p-2 text-center">0.77</td>
                    <td className="border border-gray-300 p-2 text-center">1</td>
                    <td className="border border-gray-300 p-2 text-center">1.3</td>
                    <td className="border border-gray-300 p-2 text-center">1.69</td>
                    <td className="border border-gray-300 p-2 text-center">2.2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-semibold mb-2">Step 2: Identify key features</p>
            <ul className="list-disc list-inside text-sm space-y-1 mb-4">
              <li>Y-intercept: (0, 1)</li>
              <li>Since 1.3 &gt; 1, this is an <strong>increasing</strong> function</li>
              <li>Horizontal asymptote: y = 0</li>
            </ul>

            <p className="font-semibold mb-2">Step 3: Plot points and draw smooth curve</p>
            <GraphCanvas>
              <ExponentialGraph base={1.3} color="#9333ea" />
            </GraphCanvas>
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">1. What is the y-intercept of f(x) = 5^x?</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p>The y-intercept occurs when x = 0</p>
                  <p>f(0) = 5^0 = <strong>1</strong></p>
                  <p className="mt-2 text-sm">Answer: (0, 1) - This is true for ALL exponential functions a^x!</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">2. For f(x) = 0.8^x, describe the behavior of the graph.</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p>Since 0 &lt; 0.8 &lt; 1, this is a <strong>decreasing</strong> function (exponential decay)</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    <li>The graph falls from left to right</li>
                    <li>Y-intercept: (0, 1)</li>
                    <li>As x increases, y approaches 0</li>
                    <li>As x decreases, y increases without bound</li>
                  </ul>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">3. Which grows faster: f(x) = 2^x or g(x) = 5^x? Why?</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p className="font-bold mb-2">g(x) = 5^x grows faster</p>
                  <p className="mb-2">Explanation: For exponential functions a^x where a &gt; 1, larger bases grow faster.</p>
                  <p className="text-sm">Example at x = 3:</p>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>f(3) = 2^3 = 8</li>
                    <li>g(3) = 5^3 = 125 (much larger!)</li>
                  </ul>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">4. What is the horizontal asymptote of f(x) = 3^x?</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p>The horizontal asymptote is <strong>y = 0</strong> (the x-axis)</p>
                  <p className="mt-2 text-sm">This means as x → -∞, the function approaches 0 but never reaches it.</p>
                  <p className="text-sm">The graph stays above the x-axis for all x values.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Exponential graphs can be drawn using a table of values</li>
            <li><strong>Y-intercept:</strong> All graphs of f(x) = a^x pass through (0, 1)</li>
            <li><strong>Asymptote:</strong> Horizontal asymptote at y = 0 (graph never touches x-axis)</li>
            <li><strong>Growth (a &gt; 1):</strong> Graph rises from left to right, increases rapidly</li>
            <li><strong>Decay (0 &lt; a &lt; 1):</strong> Graph falls from left to right, approaches zero</li>
            <li><strong>Domain:</strong> All real numbers</li>
            <li><strong>Range:</strong> y &gt; 0 (always positive)</li>
            <li>Larger bases produce steeper growth curves</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExponentialGraphs;
