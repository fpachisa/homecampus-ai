import React, { useState } from 'react';

const ExponentialGrowth = () => {
  const [selectedTime, setSelectedTime] = useState(15);
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  // Growth visualization component
  const GrowthGraph = ({ initial = 50, rate = 1.07, timeLabel = "weeks" }:
    { initial: number; rate: number; timeLabel?: string }) => {
    const times = Array.from({ length: 8 }, (_, i) => i * 5);
    const values = times.map(t => initial * Math.pow(rate, t));
    const maxValue = Math.max(...values);
    const scale = 150 / maxValue;

    return (
      <svg width="450" height="250" className="mx-auto bg-white rounded">
        {/* Axes */}
        <line x1="50" y1="200" x2="400" y2="200" stroke="#333" strokeWidth="2" />
        <line x1="50" y1="30" x2="50" y2="200" stroke="#333" strokeWidth="2" />

        {/* Axis labels */}
        <text x="410" y="205" className="text-sm font-bold">{timeLabel}</text>
        <text x="30" y="25" className="text-sm font-bold">Population</text>

        {/* Time markers */}
        {times.map((t, i) => {
          const xPos = 50 + (i * 50);
          return (
            <g key={t}>
              <line x1={xPos} y1="195" x2={xPos} y2="205" stroke="#666" strokeWidth="1" />
              <text x={xPos - 5} y="220" className="text-xs">{t}</text>
            </g>
          );
        })}

        {/* Curve */}
        <path
          d={times.map((t, i) => {
            const xPos = 50 + (i * 50);
            const yPos = 200 - (values[i] * scale);
            return `${i === 0 ? 'M' : 'L'} ${xPos},${yPos}`;
          }).join(' ')}
          fill="none"
          stroke="#059669"
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
              fill="#059669"
            />
          );
        })}

        {/* Starting point label */}
        <text x="60" y={200 - (values[0] * scale) - 10} className="text-xs font-bold fill-green-600">
          Start: {initial}
        </text>
      </svg>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Exponential Growth</h1>
        <p className="text-lg">Understanding how quantities grow exponentially over time</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is Exponential Growth */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800">1. What is Exponential Growth?</h2>

          <p className="mb-4">
            If a quantity increases <strong>exponentially</strong> over time, we say it exhibits
            <strong> exponential growth</strong>.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3">General Form for Exponential Growth:</h3>
            <p className="text-2xl font-mono mb-3 text-center">f(x) = p × a^x</p>
            <p className="text-sm">where:</p>
            <ul className="text-sm space-y-1 ml-4 mt-2">
              <li><strong>p</strong> = initial value (starting amount)</li>
              <li><strong>a</strong> = growth factor (where <strong>a &gt; 1</strong>)</li>
              <li><strong>x</strong> = time period</li>
              <li><strong>f(x)</strong> = value after time x</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Key Characteristic:</p>
            <p>For exponential growth, the base <strong>a must be greater than 1</strong> (a &gt; 1).</p>
            <p className="text-sm mt-2">
              This means the quantity multiplies by the same factor in each time period.
            </p>
          </div>
        </div>

        {/* Section 2: Real-World Example */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800">2. Example: Rabbit Population</h2>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-300">
            <h3 className="font-bold text-lg mb-3">🐰 Rabbit Farm Population</h3>
            <p className="mb-3">
              The population of rabbits on a farm is given by the function:
            </p>
            <p className="text-xl font-mono text-center mb-3 bg-white p-3 rounded">
              R = 50 × 1.07^n
            </p>
            <p className="text-sm mb-4">
              where <strong>n</strong> is the number of weeks after the rabbit farm was established.
            </p>

            <div className="bg-white p-4 rounded mb-4">
              <h4 className="font-semibold mb-2">Understanding the function:</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>50</strong> = original rabbit population (when n = 0)</li>
                <li><strong>1.07</strong> = growth factor (7% increase each week)</li>
                <li>Each week, the population is multiplied by 1.07</li>
              </ul>
            </div>

            <div className="space-y-3">
              <div>
                <p className="font-semibold mb-2">Calculations:</p>
                <div className="bg-white p-3 rounded space-y-2 text-sm">
                  <p><strong>Week 0:</strong> R = 50 × 1.07^0 = 50 × 1 = <strong>50 rabbits</strong></p>
                  <p><strong>Week 15:</strong> R = 50 × 1.07^15 ≈ 50 × 2.759 ≈ <strong>138 rabbits</strong></p>
                  <p><strong>Week 30:</strong> R = 50 × 1.07^30 ≈ 50 × 7.612 ≈ <strong>381 rabbits</strong></p>
                </div>
              </div>

              <div className="mt-4">
                <p className="font-semibold mb-2">Interactive Visualization:</p>
                <GrowthGraph initial={50} rate={1.07} timeLabel="weeks" />
              </div>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800">3. Worked Examples from Real Life</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-emerald-100 rounded-lg font-semibold hover:bg-emerald-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Mongoose Population Growth
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-emerald-500">
                <p className="font-semibold mb-3">
                  A local zoo starts a breeding program. The expected population in n years is given by:
                </p>
                <p className="text-xl font-mono text-center bg-blue-50 p-3 rounded mb-4">
                  P = 40 × 1.15^n
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">a) What is the initial population purchased by the zoo?</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>When n = 0 (at the start):</p>
                      <p className="font-mono">P = 40 × 1.15^0</p>
                      <p className="font-mono">P = 40 × 1</p>
                      <p className="font-mono font-bold text-green-600">P = 40 mongooses</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">b) Find the expected population after:</p>
                    <div className="ml-4 space-y-3 bg-gray-50 p-3 rounded">
                      <div>
                        <p className="font-semibold text-sm">i) 3 years</p>
                        <p className="font-mono">P = 40 × 1.15^3</p>
                        <p className="font-mono">P = 40 × 1.521</p>
                        <p className="font-mono font-bold text-green-600">P ≈ 61 mongooses</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">ii) 10 years</p>
                        <p className="font-mono">P = 40 × 1.15^10</p>
                        <p className="font-mono">P = 40 × 4.046</p>
                        <p className="font-mono font-bold text-green-600">P ≈ 162 mongooses</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">iii) 30 years</p>
                        <p className="font-mono">P = 40 × 1.15^30</p>
                        <p className="font-mono">P = 40 × 66.212</p>
                        <p className="font-mono font-bold text-green-600">P ≈ 2,648 mongooses</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">c) How long will it take for the population to reach 100?</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>Set up equation: 40 × 1.15^n = 100</p>
                      <p>Using technology or trial: 1.15^n = 2.5</p>
                      <p className="font-mono font-bold text-green-600">n ≈ 6.4 years</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-emerald-100 rounded-lg font-semibold hover:bg-emerald-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Endangered Gorilla Population
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-emerald-500">
                <p className="font-semibold mb-3">
                  The number of breeding females in an endangered gorilla population is G₀ = 28.
                  The population grows according to:
                </p>
                <p className="text-xl font-mono text-center bg-blue-50 p-3 rounded mb-4">
                  G = G₀ × 1.01^n
                </p>
                <p className="text-sm mb-4">where n is the number of years</p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">a) There are currently 28 breeding females. Find G₀.</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p className="font-mono font-bold text-green-600">G₀ = 28 breeding females</p>
                      <p className="text-sm text-gray-600">
                        (This is the initial population, so G₀ is simply 28)
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">b) Predict the number of breeding females after:</p>
                    <div className="ml-4 space-y-3 bg-gray-50 p-3 rounded">
                      <div>
                        <p className="font-semibold text-sm">i) 5 years</p>
                        <p className="font-mono">G = 28 × 1.01^5</p>
                        <p className="font-mono">G = 28 × 1.051</p>
                        <p className="font-mono font-bold text-green-600">G ≈ 29 breeding females</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">ii) 10 years</p>
                        <p className="font-mono">G = 28 × 1.01^10</p>
                        <p className="font-mono">G = 28 × 1.105</p>
                        <p className="font-mono font-bold text-green-600">G ≈ 31 breeding females</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">iii) 20 years</p>
                        <p className="font-mono">G = 28 × 1.01^20</p>
                        <p className="font-mono">G = 28 × 1.220</p>
                        <p className="font-mono font-bold text-green-600">G ≈ 34 breeding females</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
                    <p className="font-semibold text-sm mb-1">Note:</p>
                    <p className="text-sm">
                      A growth rate of 1.01 means only 1% increase per year. This is much slower
                      growth than the mongoose example (15% per year). Small differences in growth
                      rate lead to huge differences over time!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Characteristics */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800">4. Characteristics of Exponential Growth</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded border-2 border-green-300">
              <h3 className="font-bold text-green-700 mb-3">Mathematical Properties:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Function form: f(x) = p × a^x where a &gt; 1</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Starting value is p (when x = 0)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Multiplies by same factor each period</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Graph curves upward (increasing slope)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Eventually grows very rapidly</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded border-2 border-blue-300">
              <h3 className="font-bold text-blue-700 mb-3">Real-World Examples:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Population growth (humans, animals, bacteria)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Compound interest in savings accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Viral spread (diseases, social media posts)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Chain reactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Technology adoption</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500 mt-4">
            <p className="font-bold mb-2">Important Limitation:</p>
            <p className="text-sm">
              In reality, exponential growth cannot continue forever. Eventually, resources become
              limited (food, water, space, etc.) and growth slows down. The exponential model is
              most accurate for the early stages of growth under favorable conditions.
            </p>
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                1. A bacteria culture starts with 200 bacteria and doubles every hour.
                Write the exponential function and find the population after 5 hours.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p>Function: P = 200 × 2^t (t in hours)</p>
                  <p>After 5 hours: P = 200 × 2^5 = 200 × 32 = <strong>6,400 bacteria</strong></p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                2. An investment grows according to V = 1000 × 1.05^t where t is in years.
                What is the initial investment and what is the annual growth rate?
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p>Initial investment: V(0) = 1000 × 1 = <strong>$1,000</strong></p>
                  <p>Growth rate: 1.05 = 1 + 0.05, so <strong>5% per year</strong></p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                3. A city's population is P = 50,000 × 1.02^n where n is years since 2020.
                Estimate the population in 2030.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p>Years from 2020 to 2030: n = 10</p>
                  <p>P = 50,000 × 1.02^10</p>
                  <p>P = 50,000 × 1.219</p>
                  <p><strong>P ≈ 60,950 people</strong></p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Exponential growth: f(x) = p × a^x where <strong>a &gt; 1</strong></li>
            <li><strong>p</strong> is the initial value (when x = 0)</li>
            <li><strong>a</strong> is the growth factor (multiply by this each period)</li>
            <li>If a = 1 + r, then r is the growth rate (e.g., 1.07 means 7% growth)</li>
            <li>Growth accelerates over time - starts slow, becomes very rapid</li>
            <li>Common in nature: populations, epidemics, compound interest</li>
            <li>Real growth eventually slows due to resource limitations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExponentialGrowth;
