import { useState } from 'react';

const ExponentialDecay = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  // Decay visualization component
  const DecayGraph = ({ initial = 320, rate = 0.7, timeLabel = "milliseconds", maxTime = 15 }:
    { initial: number; rate: number; timeLabel?: string; maxTime?: number }) => {
    const times = Array.from({ length: 8 }, (_, i) => i * (maxTime / 7));
    const values = times.map(t => initial * Math.pow(rate, t));
    const maxValue = initial;
    const scale = 150 / maxValue;

    return (
      <svg width="450" height="250" className="mx-auto bg-white rounded">
        {/* Axes */}
        <line x1="50" y1="200" x2="400" y2="200" stroke="#333" strokeWidth="2" />
        <line x1="50" y1="30" x2="50" y2="200" stroke="#333" strokeWidth="2" />

        {/* Axis labels */}
        <text x="375" y="220" className="text-sm font-bold">{timeLabel}</text>
        <text x="20" y="25" className="text-sm font-bold">Value</text>

        {/* Time markers */}
        {times.map((t, i) => {
          const xPos = 50 + (i * 50);
          return (
            <g key={t}>
              <line x1={xPos} y1="195" x2={xPos} y2="205" stroke="#666" strokeWidth="1" />
              <text x={xPos - 10} y="220" className="text-xs">{t.toFixed(0)}</text>
            </g>
          );
        })}

        {/* Horizontal asymptote (y = 0) */}
        <line
          x1="50"
          y1="200"
          x2="400"
          y2="200"
          stroke="#ef4444"
          strokeWidth="1"
          strokeDasharray="5,5"
          opacity="0.5"
        />

        {/* Curve */}
        <path
          d={times.map((_t, i) => {
            const xPos = 50 + (i * 50);
            const yPos = 200 - (values[i] * scale);
            return `${i === 0 ? 'M' : 'L'} ${xPos},${yPos}`;
          }).join(' ')}
          fill="none"
          stroke="#dc2626"
          strokeWidth="3"
        />

        {/* Points */}
        {times.map((t, i) => {
          const xPos = 50 + (i * 50);
          const yPos = 200 - (values[i] * scale);
          return (
            <circle
              key={t}
              cx={xPos}
              cy={yPos}
              r="4"
              fill="#dc2626"
            />
          );
        })}

        {/* Starting point label */}
        <text x="60" y={200 - (values[0] * scale) - 10} className="text-xs font-bold fill-red-600">
          Start: {initial}
        </text>
      </svg>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Exponential Decay</h1>
        <p className="text-lg">Understanding how quantities decrease exponentially over time</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is Exponential Decay */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800">1. What is Exponential Decay?</h2>

          <p className="mb-4">
            If a quantity decreases <strong>exponentially</strong> over time, we say it exhibits
            <strong> exponential decay</strong>.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3">General Form for Exponential Decay:</h3>
            <p className="text-2xl font-mono mb-3 text-center">f(x) = p × a^x</p>
            <p className="text-sm">where:</p>
            <ul className="text-sm space-y-1 ml-4 mt-2">
              <li><strong>p</strong> = initial value (starting amount)</li>
              <li><strong>a</strong> = decay factor (where <strong>0 &lt; a &lt; 1</strong>)</li>
              <li><strong>x</strong> = time period</li>
              <li><strong>f(x)</strong> = value after time x</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Key Characteristic:</p>
            <p>For exponential decay, the base <strong>a must be between 0 and 1</strong> (0 &lt; a &lt; 1).</p>
            <p className="text-sm mt-2">
              This means the quantity multiplies by the same factor (less than 1) in each time period,
              causing it to decrease.
            </p>
          </div>
        </div>

        {/* Section 2: Examples of Decay */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800">2. Examples of Exponential Decay</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 p-4 rounded border-2 border-red-300">
              <h3 className="font-bold text-red-700 mb-3">Natural Examples:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Depreciation in value of goods over time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Temperature of an object as it cools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Radioactive decay</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Drop in current when electrical appliance is turned off</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded border-2 border-orange-300">
              <h3 className="font-bold text-orange-700 mb-3">Mathematical Form:</h3>
              <ul className="space-y-2 text-sm font-mono">
                <li>Value = 100 × 0.9^t</li>
                <li>Temp = 100 × 0.84^t</li>
                <li>Mass = 2.3 × 0.96^t</li>
                <li>Current = 320 × 0.7^t</li>
              </ul>
              <p className="text-xs mt-3">All have 0 &lt; base &lt; 1</p>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800">3. Worked Examples from Real Life</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-red-100 rounded-lg font-semibold hover:bg-red-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Electric Current Decay
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-red-500">
                <p className="font-semibold mb-3">
                  The current I flowing through an electric circuit in a fan, t milliseconds after
                  it is switched off, is given by:
                </p>
                <p className="text-xl font-mono text-center bg-blue-50 p-3 rounded mb-4">
                  I = 320 × 0.7^t milliamps
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">a) Find the initial current in the circuit</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>When t = 0 (just switched off):</p>
                      <p className="font-mono">I = 320 × 0.7^0</p>
                      <p className="font-mono">I = 320 × 1</p>
                      <p className="font-mono font-bold text-red-600">I = 320 milliamps</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">b) Find the current after:</p>
                    <div className="ml-4 space-y-3 bg-gray-50 p-3 rounded">
                      <div>
                        <p className="font-semibold text-sm">i) 4 milliseconds</p>
                        <p className="font-mono">I = 320 × 0.7^4</p>
                        <p className="font-mono">I = 320 × 0.2401</p>
                        <p className="font-mono font-bold text-red-600">I ≈ 76.8 milliamps</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">ii) 10 milliseconds</p>
                        <p className="font-mono">I = 320 × 0.7^10</p>
                        <p className="font-mono">I = 320 × 0.0282</p>
                        <p className="font-mono font-bold text-red-600">I ≈ 9.04 milliamps</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">c) Sketch the graph of I against t for t ≥ 0</p>
                    <div className="ml-4 bg-gray-50 p-3 rounded">
                      <DecayGraph initial={320} rate={0.7} timeLabel="milliseconds" maxTime={15} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">d) How long will it take for the current to reduce to 40 milliamps?</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>Set up equation: 320 × 0.7^t = 40</p>
                      <p>Solve: 0.7^t = 40/320 = 0.125</p>
                      <p>Using technology:</p>
                      <p className="font-mono font-bold text-red-600">t ≈ 5.83 milliseconds</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-red-100 rounded-lg font-semibold hover:bg-red-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Cooling Water Temperature
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-red-500">
                <p className="font-semibold mb-3">
                  Boiling water is left in a pot to cool. After t minutes, its temperature is given by:
                </p>
                <p className="text-xl font-mono text-center bg-blue-50 p-3 rounded mb-4">
                  T = 100 × 0.84^t °C
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">a) Find the initial temperature of the water</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>When t = 0:</p>
                      <p className="font-mono">T = 100 × 0.84^0</p>
                      <p className="font-mono">T = 100 × 1</p>
                      <p className="font-mono font-bold text-red-600">T = 100°C (boiling point)</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">b) Find the water temperature after:</p>
                    <div className="ml-4 space-y-3 bg-gray-50 p-3 rounded">
                      <div>
                        <p className="font-semibold text-sm">i) 2 minutes</p>
                        <p className="font-mono">T = 100 × 0.84^2</p>
                        <p className="font-mono">T = 100 × 0.7056</p>
                        <p className="font-mono font-bold text-red-600">T ≈ 70.6°C</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">ii) 10 minutes</p>
                        <p className="font-mono">T = 100 × 0.84^10</p>
                        <p className="font-mono">T = 100 × 0.1749</p>
                        <p className="font-mono font-bold text-red-600">T ≈ 17.5°C</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">iii) 20 minutes</p>
                        <p className="font-mono">T = 100 × 0.84^20</p>
                        <p className="font-mono">T = 100 × 0.0306</p>
                        <p className="font-mono font-bold text-red-600">T ≈ 3.1°C</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">c) How long will it take for the temperature to fall to 48°C?</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>Set up equation: 100 × 0.84^t = 48</p>
                      <p>Solve: 0.84^t = 0.48</p>
                      <p>Using technology:</p>
                      <p className="font-mono font-bold text-red-600">t ≈ 4.3 minutes</p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                    <p className="font-semibold text-sm mb-1">Note:</p>
                    <p className="text-sm">
                      In reality, the water won't cool below room temperature (usually ~20-25°C).
                      The model is most accurate when the temperature difference is large.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left p-4 bg-red-100 rounded-lg font-semibold hover:bg-red-200 transition"
            >
              {showExample3 ? '▼' : '▶'} Example 3: Radioactive Decay
            </button>

            {showExample3 && (
              <div className="p-6 bg-white rounded border-l-4 border-red-500">
                <p className="font-semibold mb-3">
                  The weight of radioactive material in an ore sample after t years is given by:
                </p>
                <p className="text-xl font-mono text-center bg-blue-50 p-3 rounded mb-4">
                  W = 2.3 × 0.96^t grams
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">a) Find the initial weight</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>When t = 0:</p>
                      <p className="font-mono">W = 2.3 × 0.96^0</p>
                      <p className="font-mono font-bold text-red-600">W = 2.3 grams</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">b) Find the weight after:</p>
                    <div className="ml-4 space-y-3 bg-gray-50 p-3 rounded">
                      <div>
                        <p className="font-semibold text-sm">i) 20 years</p>
                        <p className="font-mono">W = 2.3 × 0.96^20</p>
                        <p className="font-mono">W = 2.3 × 0.4420</p>
                        <p className="font-mono font-bold text-red-600">W ≈ 1.02 grams</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">ii) 40 years</p>
                        <p className="font-mono">W = 2.3 × 0.96^40</p>
                        <p className="font-mono">W = 2.3 × 0.1954</p>
                        <p className="font-mono font-bold text-red-600">W ≈ 0.45 grams</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">iii) 60 years</p>
                        <p className="font-mono">W = 2.3 × 0.96^60</p>
                        <p className="font-mono">W = 2.3 × 0.0864</p>
                        <p className="font-mono font-bold text-red-600">W ≈ 0.20 grams</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">c) Find the percentage weight loss in the first 20 years</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>Initial: 2.3g, After 20 years: 1.02g</p>
                      <p>Loss = 2.3 - 1.02 = 1.28g</p>
                      <p>Percentage = (1.28/2.3) × 100%</p>
                      <p className="font-mono font-bold text-red-600">≈ 55.7% weight loss</p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-purple-50 rounded border-l-4 border-purple-500">
                    <p className="font-semibold text-sm mb-1">Half-Life Concept:</p>
                    <p className="text-sm">
                      The "half-life" is the time it takes for half the radioactive material to decay.
                      For this sample, we can find when W = 1.15g (half of 2.3g) by solving
                      2.3 × 0.96^t = 1.15, which gives t ≈ 17 years.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Comparing Growth and Decay */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800">4. Comparing Exponential Growth and Decay</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-gray-300">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="border border-gray-300 p-3 text-left">Feature</th>
                  <th className="border border-gray-300 p-3 text-left">Exponential Growth</th>
                  <th className="border border-gray-300 p-3 text-left">Exponential Decay</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">Base value (a)</td>
                  <td className="border border-gray-300 p-3">a &gt; 1</td>
                  <td className="border border-gray-300 p-3">0 &lt; a &lt; 1</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Example</td>
                  <td className="border border-gray-300 p-3">1.05, 1.2, 2, 3</td>
                  <td className="border border-gray-300 p-3">0.5, 0.7, 0.96</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">Graph direction</td>
                  <td className="border border-gray-300 p-3">Increases (rises)</td>
                  <td className="border border-gray-300 p-3">Decreases (falls)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Long-term behavior</td>
                  <td className="border border-gray-300 p-3">Grows without bound</td>
                  <td className="border border-gray-300 p-3">Approaches zero</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">Real examples</td>
                  <td className="border border-gray-300 p-3">Population, investment</td>
                  <td className="border border-gray-300 p-3">Cooling, radioactive decay</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                1. A car's value depreciates according to V = 25000 × 0.85^t where t is years.
                Find the initial value and the value after 5 years.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p>Initial value: V(0) = 25000 × 1 = <strong>$25,000</strong></p>
                  <p>After 5 years: V = 25000 × 0.85^5 = 25000 × 0.4437 = <strong>$11,093</strong></p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                2. A medication's concentration in the blood is C = 80 × 0.92^h where h is hours.
                What is the half-life (time for concentration to halve)?
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p>Half of 80 is 40, so solve: 80 × 0.92^h = 40</p>
                  <p>0.92^h = 0.5</p>
                  <p>Using technology: <strong>h ≈ 8.3 hours</strong></p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                3. Is f(x) = 3 × 0.8^x exponential growth or decay? Explain.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p><strong>Exponential decay</strong></p>
                  <p>The base is 0.8, which is between 0 and 1 (0 &lt; 0.8 &lt; 1)</p>
                  <p>This means the function decreases over time</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Exponential decay: f(x) = p × a^x where <strong>0 &lt; a &lt; 1</strong></li>
            <li><strong>p</strong> is the initial value (when x = 0)</li>
            <li><strong>a</strong> is the decay factor (multiply by this each period)</li>
            <li>If a = 1 - r, then r is the decay rate (e.g., 0.96 means 4% decay)</li>
            <li>The function decreases over time, approaching zero but never reaching it</li>
            <li>Horizontal asymptote at y = 0</li>
            <li>Common in nature: radioactive decay, cooling, depreciation</li>
            <li>Half-life: time for quantity to reduce to half its initial value</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExponentialDecay;
