import React, { useState } from 'react';

const ExponentialFunctions = () => {
  const [selectedBase, setSelectedBase] = useState(2);
  const [selectedFunction, setSelectedFunction] = useState('3^x');
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  // Calculate exponential values
  const calculateExp = (base: number, x: number) => {
    return Math.pow(base, x).toFixed(2);
  };

  // Function Visualizer Component
  const FunctionVisualizer = ({ base = 2 }: { base: number }) => {
    const xValues = [-2, -1, 0, 1, 2, 3];
    const yValues = xValues.map(x => Math.pow(base, x));
    const maxY = Math.max(...yValues);
    const scale = 150 / maxY;

    return (
      <svg width="400" height="250" className="mx-auto">
        {/* Axes */}
        <line x1="50" y1="200" x2="350" y2="200" stroke="#333" strokeWidth="2" />
        <line x1="50" y1="20" x2="50" y2="200" stroke="#333" strokeWidth="2" />

        {/* Axis labels */}
        <text x="360" y="205" className="text-sm font-bold">x</text>
        <text x="30" y="15" className="text-sm font-bold">y</text>

        {/* Grid lines and x-axis markers */}
        {xValues.map((x, i) => {
          const xPos = 50 + (i + 1) * 50;
          return (
            <g key={x}>
              <line x1={xPos} y1="195" x2={xPos} y2="205" stroke="#666" strokeWidth="1" />
              <text x={xPos - 5} y="220" className="text-xs">{x}</text>
            </g>
          );
        })}

        {/* Plot points and curve */}
        {xValues.map((x, i) => {
          const xPos = 50 + (i + 1) * 50;
          const yPos = 200 - yValues[i] * scale;
          return (
            <circle
              key={x}
              cx={xPos}
              cy={yPos}
              r="4"
              fill="#ef4444"
              className="hover:r-6 transition-all"
            />
          );
        })}

        {/* Smooth curve through points */}
        <path
          d={`M ${100},${200 - yValues[0] * scale} ${xValues.slice(1).map((x, i) => {
            const xPos = 50 + (i + 2) * 50;
            const yPos = 200 - yValues[i + 1] * scale;
            return `L ${xPos},${yPos}`;
          }).join(' ')}`}
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
        />

        {/* Function label */}
        <text x="200" y="40" className="text-sm font-bold fill-blue-600">
          f(x) = {base}^x
        </text>
      </svg>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Exponential Functions</h1>
        <p className="text-lg">Understanding functions where the variable appears in the exponent</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Definition */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800">1. What is an Exponential Function?</h2>

          <p className="mb-4">
            An <strong>exponential function</strong> is a function in which the variable occurs as part
            of the exponent (or index).
          </p>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3">General Form:</h3>
            <p className="text-xl font-mono mb-3">f(x) = a^x</p>
            <p className="text-sm">where <strong>a</strong> is a positive constant (called the base) and <strong>x</strong> is the variable</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded border-2 border-green-300">
              <h3 className="font-bold text-green-700 mb-2">Examples of Exponential Functions:</h3>
              <ul className="space-y-2 text-sm">
                <li className="font-mono">f(x) = 3^x</li>
                <li className="font-mono">g(x) = 2^(x-4)</li>
                <li className="font-mono">h(x) = 6 + 5^(-x)</li>
                <li className="font-mono">y = 7^x</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded border-2 border-red-300">
              <h3 className="font-bold text-red-700 mb-2">NOT Exponential Functions:</h3>
              <ul className="space-y-2 text-sm">
                <li className="font-mono">f(x) = x^3 <span className="text-xs">(x is base, not exponent)</span></li>
                <li className="font-mono">f(x) = 10 × 2^(2/x) <span className="text-xs">(x in denominator)</span></li>
                <li className="font-mono">f(x) = 9x - x^6 <span className="text-xs">(polynomial)</span></li>
                <li className="font-mono">f(x) = 5 - 3x^(-2) <span className="text-xs">(x is base)</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Key Insight:</p>
            <p>In an exponential function, the <strong>variable must be in the exponent</strong>, not in the base!</p>
          </div>
        </div>

        {/* Section 2: Interactive Visualization */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800">2. Visualizing Exponential Functions</h2>

          <div className="bg-purple-50 p-4 rounded mb-4">
            <p className="font-semibold mb-3">Explore different bases:</p>
            <div className="flex gap-2 mb-4 flex-wrap">
              {[2, 3, 4, 5, 1.5, 0.5].map(base => (
                <button
                  key={base}
                  onClick={() => setSelectedBase(base)}
                  className={`px-4 py-2 rounded ${
                    selectedBase === base
                      ? 'bg-orange-600 text-white'
                      : 'bg-white border-2 border-orange-300'
                  }`}
                >
                  {base}^x
                </button>
              ))}
            </div>
            <FunctionVisualizer base={selectedBase} />
          </div>

          <div className="bg-white p-4 rounded border border-gray-300">
            <h3 className="font-semibold mb-2">Observations:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>When base &gt; 1: The function <strong>increases</strong> (exponential growth)</li>
              <li>When 0 &lt; base &lt; 1: The function <strong>decreases</strong> (exponential decay)</li>
              <li>All exponential functions pass through the point (0, 1) because a^0 = 1</li>
              <li>The function never touches the x-axis (horizontal asymptote at y = 0)</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Evaluating Exponential Functions */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800">3. Evaluating Exponential Functions</h2>

          <p className="mb-4">
            To evaluate an exponential function, we substitute the given value of x and calculate the result.
          </p>

          {/* Worked Example 1 */}
          <div className="mt-6">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-orange-100 rounded-lg font-semibold hover:bg-orange-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Evaluate f(x) = 3 - 2^(-x)
            </button>

            {showExample1 && (
              <div className="mt-3 p-4 bg-white rounded border-l-4 border-orange-500">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">a) Find f(0)</p>
                    <div className="ml-4 space-y-1">
                      <p className="font-mono">f(0) = 3 - 2^(-0)</p>
                      <p className="font-mono">= 3 - 2^0</p>
                      <p className="font-mono">= 3 - 1</p>
                      <p className="font-mono font-bold text-green-600">= 2</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">b) Find f(3)</p>
                    <div className="ml-4 space-y-1">
                      <p className="font-mono">f(3) = 3 - 2^(-3)</p>
                      <p className="font-mono">= 3 - 1/8</p>
                      <p className="font-mono font-bold text-green-600">= 2⅞ or 2.875</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">c) Find f(-x)</p>
                    <div className="ml-4 space-y-1">
                      <p className="font-mono">f(-x) = 3 - 2^(-(-x))</p>
                      <p className="font-mono">= 3 - 2^x</p>
                      <p className="font-mono font-bold text-green-600">= 3 - 2^x</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Worked Example 2 */}
          <div className="mt-4">
            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-orange-100 rounded-lg font-semibold hover:bg-orange-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Evaluate g(x) = 3^(x-2)
            </button>

            {showExample2 && (
              <div className="mt-3 p-4 bg-white rounded border-l-4 border-orange-500">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">a) Find g(0)</p>
                    <div className="ml-4 space-y-1">
                      <p className="font-mono">g(0) = 3^(0-2)</p>
                      <p className="font-mono">= 3^(-2)</p>
                      <p className="font-mono">= 1/9</p>
                      <p className="font-mono font-bold text-green-600">≈ 0.111</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">b) Find g(4)</p>
                    <div className="ml-4 space-y-1">
                      <p className="font-mono">g(4) = 3^(4-2)</p>
                      <p className="font-mono">= 3^2</p>
                      <p className="font-mono font-bold text-green-600">= 9</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">c) Find g(-1)</p>
                    <div className="ml-4 space-y-1">
                      <p className="font-mono">g(-1) = 3^(-1-2)</p>
                      <p className="font-mono">= 3^(-3)</p>
                      <p className="font-mono">= 1/27</p>
                      <p className="font-mono font-bold text-green-600">≈ 0.037</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">d) Find g(x + 5)</p>
                    <div className="ml-4 space-y-1">
                      <p className="font-mono">g(x + 5) = 3^((x+5)-2)</p>
                      <p className="font-mono">= 3^(x+3)</p>
                      <p className="font-mono font-bold text-green-600">= 3^(x+3)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 4: Exponential Growth Context */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800">4. Real-World Context: Exponential Growth</h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-300">
            <h3 className="font-bold text-lg mb-3">Lotus Plant Example</h3>
            <p className="mb-3">
              A lotus plant initially covers an area of 40 cm². The area it covers increases by 20% each week.
            </p>

            <div className="bg-white p-4 rounded mb-3">
              <p className="mb-2"><strong>Question:</strong> Why is this exponential growth?</p>
              <p className="text-sm">
                Each week, the area is multiplied by 1.2 (an increase of 20%). After n weeks,
                the area is given by:
              </p>
              <p className="font-mono text-center text-lg my-3">A(n) = 40 × 1.2^n cm²</p>
              <p className="text-sm">
                The variable <strong>n</strong> appears in the exponent, making this an exponential function!
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <p className="font-semibold mb-2">Quick Calculations:</p>
              <ul className="space-y-1 text-sm">
                <li>Week 0: A(0) = 40 × 1 = <strong>40 cm²</strong></li>
                <li>Week 1: A(1) = 40 × 1.2 = <strong>48 cm²</strong></li>
                <li>Week 2: A(2) = 40 × 1.44 = <strong>57.6 cm²</strong></li>
                <li>Week 3: A(3) = 40 × 1.728 = <strong>69.1 cm²</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">1. Determine which of the following are exponential functions:</p>
              <div className="ml-4 space-y-2 text-sm">
                <p>a) f(x) = 7^x <span className="ml-4 text-gray-500">(exponential)</span></p>
                <p>b) f(x) = x^4 <span className="ml-4 text-gray-500">(NOT exponential - polynomial)</span></p>
                <p>c) f(x) = 5 - 3x^(-2) <span className="ml-4 text-gray-500">(NOT exponential)</span></p>
                <p>d) f(x) = -2 - 5^(3x) <span className="ml-4 text-gray-500">(exponential)</span></p>
              </div>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">2. For f(x) = 3^x + 2, find:</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p>a) f(0) = 3^0 + 2 = 1 + 2 = <strong>3</strong></p>
                  <p>b) f(2) = 3^2 + 2 = 9 + 2 = <strong>11</strong></p>
                  <p>c) f(-1) = 3^(-1) + 2 = 1/3 + 2 = <strong>2⅓</strong></p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">3. For g(x) = 5^(-x) - 3, find:</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p>a) g(0) = 5^0 - 3 = 1 - 3 = <strong>-2</strong></p>
                  <p>b) g(1) = 5^(-1) - 3 = 0.2 - 3 = <strong>-2.8</strong></p>
                  <p>c) g(-2) = 5^2 - 3 = 25 - 3 = <strong>22</strong></p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">4. A bacteria population doubles every hour. Initially there are 500 bacteria.</p>
              <p className="text-sm ml-4 mt-2">Write an exponential function for the population P after t hours.</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p className="mb-2">Since the population doubles each hour, we multiply by 2 each time:</p>
                  <p className="font-mono text-lg font-bold">P(t) = 500 × 2^t</p>
                  <p className="mt-2 text-sm">After 3 hours: P(3) = 500 × 8 = 4000 bacteria</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Exponential functions have the form f(x) = a^x where the <strong>variable is in the exponent</strong></li>
            <li>The base 'a' must be positive and not equal to 1</li>
            <li>When a &gt; 1: exponential growth (function increases)</li>
            <li>When 0 &lt; a &lt; 1: exponential decay (function decreases)</li>
            <li>All exponential functions pass through (0, 1) since a^0 = 1</li>
            <li>Exponential functions model many real-world phenomena: population growth, compound interest, radioactive decay</li>
            <li>To evaluate, substitute the x-value and use exponent rules</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExponentialFunctions;
