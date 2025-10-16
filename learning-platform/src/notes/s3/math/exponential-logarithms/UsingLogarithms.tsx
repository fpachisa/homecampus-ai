import React, { useState } from 'react';

const UsingLogarithms = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showExample4, setShowExample4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Using Logarithms to Solve Equations</h1>
        <p className="text-lg">Solving exponential equations that can't be solved by equating bases</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Why We Need Logarithms */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800">1. When Same-Base Method Doesn't Work</h2>

          <p className="mb-4">
            An exponential equation such as <span className="font-mono">2^x = 7</span> cannot be solved
            by writing both sides with the same base. We have seen how to solve an equation like this
            graphically. However, to obtain an <strong>exact answer</strong>, we can use logarithms.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-lg mb-3">The Problem:</h3>
            <p className="mb-3">Solve: <span className="font-mono text-xl">2^x = 7</span></p>
            <p className="text-sm">We cannot write 7 as a power of 2, so we need a different approach.</p>
          </div>
        </div>

        {/* Section 2: The Method */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800">2. The Logarithm Method</h2>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300 mb-4">
            <h3 className="font-bold text-lg mb-3">Strategy for Solving with Logarithms:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Isolate the exponential term</li>
              <li>Take the <strong>logarithm of both sides</strong></li>
              <li>Use the Power Law: log(a^x) = x log a</li>
              <li>Solve for the unknown</li>
              <li>Calculate using a calculator</li>
            </ol>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Key Rule:</p>
            <p>If we take the log of <strong>one side</strong> of an equation, we must take the log of
            <strong> the other side</strong> too!</p>
            <p className="mt-2 text-sm font-mono">If a = b, then log a = log b</p>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800">3. Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-teal-100 rounded-lg font-semibold hover:bg-teal-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Solve 2^x = 7
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-teal-500">
                <p className="font-semibold mb-3">Solve: 2^x = 7</p>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1">Step 1: Take log of both sides</p>
                    <p className="ml-4 font-mono">log(2^x) = log 7</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 2: Use Power Law on left side</p>
                    <p className="ml-4 font-mono">x log 2 = log 7</p>
                    <p className="ml-4 text-sm text-gray-600">Remember: log(a^x) = x log a</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 3: Solve for x</p>
                    <p className="ml-4 font-mono">x = log 7 / log 2</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 4: Calculate using calculator</p>
                    <p className="ml-4 font-mono">x = 0.8451 / 0.3010</p>
                    <p className="ml-4 font-mono font-bold text-teal-600">x ≈ 2.807</p>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <p className="font-semibold">Check: 2^2.807 ≈ 7.00 ✓</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-teal-100 rounded-lg font-semibold hover:bg-teal-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Solve 5 × 2^x = 70
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-teal-500">
                <p className="font-semibold mb-3">Solve: 5 × 2^x = 70</p>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1">Step 1: Isolate exponential term</p>
                    <p className="ml-4 font-mono">2^x = 70 / 5</p>
                    <p className="ml-4 font-mono">2^x = 14</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 2: Take log of both sides</p>
                    <p className="ml-4 font-mono">log(2^x) = log 14</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 3: Use Power Law</p>
                    <p className="ml-4 font-mono">x log 2 = log 14</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 4: Solve for x</p>
                    <p className="ml-4 font-mono">x = log 14 / log 2</p>
                    <p className="ml-4 font-mono">x = 1.1461 / 0.3010</p>
                    <p className="ml-4 font-mono font-bold text-teal-600">x ≈ 3.807</p>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <p className="font-semibold">Check: 5 × 2^3.807 ≈ 70 ✓</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left p-4 bg-teal-100 rounded-lg font-semibold hover:bg-teal-200 transition"
            >
              {showExample3 ? '▼' : '▶'} Example 3: Solve 30 × 0.9^x = 15
            </button>

            {showExample3 && (
              <div className="p-6 bg-white rounded border-l-4 border-teal-500">
                <p className="font-semibold mb-3">Solve: 30 × 0.9^x = 15</p>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1">Step 1: Isolate exponential term</p>
                    <p className="ml-4 font-mono">0.9^x = 15 / 30</p>
                    <p className="ml-4 font-mono">0.9^x = 0.5</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 2: Take log of both sides</p>
                    <p className="ml-4 font-mono">log(0.9^x) = log 0.5</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 3: Use Power Law</p>
                    <p className="ml-4 font-mono">x log 0.9 = log 0.5</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 4: Solve for x</p>
                    <p className="ml-4 font-mono">x = log 0.5 / log 0.9</p>
                    <p className="ml-4 font-mono">x = (-0.3010) / (-0.0458)</p>
                    <p className="ml-4 font-mono font-bold text-teal-600">x ≈ 6.58</p>
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                    <p className="font-semibold text-sm mb-1">Note:</p>
                    <p className="text-sm">
                      Both logs are negative (since 0.9 and 0.5 are between 0 and 1), but dividing
                      two negatives gives a positive result.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample4(!showExample4)}
              className="w-full text-left p-4 bg-teal-100 rounded-lg font-semibold hover:bg-teal-200 transition"
            >
              {showExample4 ? '▼' : '▶'} Example 4: Real-World Application - Population Growth
            </button>

            {showExample4 && (
              <div className="p-6 bg-white rounded border-l-4 border-teal-500">
                <p className="font-semibold mb-3">
                  In favorable conditions, an insect colony is expected to grow by 85% each month.
                  Suppose the initial population is P₀. How long would you expect it to take for the
                  population to become <strong>10 times its original size</strong>?
                </p>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1">Step 1: Write the exponential function</p>
                    <p className="ml-4">Growth rate: 85% means multiply by 1.85 each month</p>
                    <p className="ml-4 font-mono">P = P₀ × 1.85^t</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 2: Set up equation for 10 times original</p>
                    <p className="ml-4 font-mono">10P₀ = P₀ × 1.85^t</p>
                    <p className="ml-4 font-mono">10 = 1.85^t</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 3: Take log of both sides</p>
                    <p className="ml-4 font-mono">log 10 = log(1.85^t)</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 4: Use Power Law</p>
                    <p className="ml-4 font-mono">log 10 = t log 1.85</p>
                    <p className="ml-4 font-mono">1 = t log 1.85</p>
                    <p className="ml-4 text-sm text-gray-600">(since log 10 = 1)</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 5: Solve for t</p>
                    <p className="ml-4 font-mono">t = 1 / log 1.85</p>
                    <p className="ml-4 font-mono">t = 1 / 0.2672</p>
                    <p className="ml-4 font-mono font-bold text-teal-600">t ≈ 3.74 months</p>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <p className="font-semibold">Answer: About 3.7 to 3.8 months</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Summary of Process */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800">4. Summary of the Process</h2>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-blue-300">
            <h3 className="font-bold mb-3">To solve a^x = b using logarithms:</h3>
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="font-bold mr-2 min-w-[2rem]">1.</span>
                <div>
                  <p className="font-semibold">Take log of both sides</p>
                  <p className="text-sm font-mono">log(a^x) = log b</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 min-w-[2rem]">2.</span>
                <div>
                  <p className="font-semibold">Use Power Law on left side</p>
                  <p className="text-sm font-mono">x log a = log b</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 min-w-[2rem]">3.</span>
                <div>
                  <p className="font-semibold">Solve for x</p>
                  <p className="text-sm font-mono">x = log b / log a</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 min-w-[2rem]">4.</span>
                <div>
                  <p className="font-semibold">Calculate with calculator</p>
                  <p className="text-sm">Find log b and log a, then divide</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">1. Solve for x: 2^x = 3 (give answer to 4 sig figs)</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-1">
                  <p>Take log: log(2^x) = log 3</p>
                  <p>Power Law: x log 2 = log 3</p>
                  <p>Solve: x = log 3 / log 2 = 0.4771 / 0.3010</p>
                  <p className="font-bold">x ≈ 1.585</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">2. Solve for x: 5^x = 1000</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-1">
                  <p>log(5^x) = log 1000</p>
                  <p>x log 5 = 3 (since log 1000 = 3)</p>
                  <p>x = 3 / log 5 = 3 / 0.699</p>
                  <p className="font-bold">x ≈ 4.29</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">3. Solve: 4 × 5^x = 1200</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-1">
                  <p>Isolate: 5^x = 300</p>
                  <p>log(5^x) = log 300</p>
                  <p>x log 5 = log 300</p>
                  <p>x = log 300 / log 5 = 2.477 / 0.699</p>
                  <p className="font-bold">x ≈ 3.54</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                4. An investment grows according to V = 1000 × 1.05^t. How long until it reaches $1500?
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-1">
                  <p>1500 = 1000 × 1.05^t</p>
                  <p>1.5 = 1.05^t</p>
                  <p>log(1.05^t) = log 1.5</p>
                  <p>t log 1.05 = log 1.5</p>
                  <p>t = log 1.5 / log 1.05 = 0.1761 / 0.0212</p>
                  <p className="font-bold">t ≈ 8.31 years</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
          <h2 className="text-xl font-bold mb-4 text-red-800">Common Mistakes to Avoid</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">✗</span>
              <div>
                <p className="font-semibold">Taking log of only one side</p>
                <p className="text-sm">If you take log of left side, MUST take log of right side too!</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">✗</span>
              <div>
                <p className="font-semibold">Forgetting to use Power Law</p>
                <p className="text-sm">log(a^x) = x log a, not just log a</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">✗</span>
              <div>
                <p className="font-semibold">Not isolating the exponential term first</p>
                <p className="text-sm">Solve 5 × 2^x = 40 → First get 2^x = 8, then take logs</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Use logarithms to solve exponential equations when same-base method doesn't work</li>
            <li>Take log of <strong>both sides</strong> of the equation</li>
            <li>Use Power Law: log(a^x) = x log a to bring x out of the exponent</li>
            <li>General formula: If a^x = b, then x = log b / log a</li>
            <li>Always isolate the exponential term first before taking logs</li>
            <li>Use calculator to find numerical values</li>
            <li>This method works for any exponential equation</li>
            <li>Check your answer by substituting back into original equation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsingLogarithms;
