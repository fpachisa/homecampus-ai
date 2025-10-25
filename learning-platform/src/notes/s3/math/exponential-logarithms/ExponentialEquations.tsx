import { useState } from 'react';

const ExponentialEquations = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showExample4, setShowExample4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Exponential Equations</h1>
        <p className="text-lg">Solving equations where the unknown appears in the exponent</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What are Exponential Equations */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">1. What is an Exponential Equation?</h2>

          <p className="mb-4">
            An <strong>exponential equation</strong> is an equation in which the unknown occurs as part
            of the exponent or index.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded border-2 border-green-300">
              <h3 className="font-bold text-green-700 mb-2">Examples of Exponential Equations:</h3>
              <ul className="space-y-2 text-sm font-mono">
                <li>2^x = 8</li>
                <li>30 × 3^x = 7</li>
                <li>5 × 2^x = 40</li>
                <li>3^(x-2) = 1/9</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded border-2 border-blue-300">
              <h3 className="font-bold text-blue-700 mb-2">NOT Exponential Equations:</h3>
              <ul className="space-y-2 text-sm font-mono">
                <li>x^2 = 8 <span className="text-xs">(quadratic)</span></li>
                <li>3x + 5 = 7 <span className="text-xs">(linear)</span></li>
                <li>x^3 - 2x = 0 <span className="text-xs">(polynomial)</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Method - Same Base */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">2. Solving by Writing with the Same Base</h2>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3">The Key Rule:</h3>
            <p className="text-xl font-mono mb-3 text-center">If a^x = a^k, then x = k</p>
            <p className="text-sm">
              When both sides have the same base, we can <strong>equate the exponents</strong>.
            </p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300">
            <h3 className="font-semibold mb-3">Strategy for Solving:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Try to write both sides of the equation with the <strong>same base</strong></li>
              <li>Once bases are equal, <strong>equate the exponents</strong></li>
              <li>Solve the resulting equation for the unknown</li>
            </ol>
          </div>
        </div>

        {/* Worked Example 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">3. Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-green-100 rounded-lg font-semibold hover:bg-green-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Solve 2^x = 32
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-green-500">
                <p className="font-semibold mb-3">Given: 2^x = 32</p>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1">Step 1: Write 32 as a power of 2</p>
                    <p className="ml-4 font-mono">32 = 2^5</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 2: Rewrite equation</p>
                    <p className="ml-4 font-mono">2^x = 2^5</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 3: Equate exponents (bases are equal)</p>
                    <p className="ml-4 font-mono text-lg font-bold text-green-600">x = 5</p>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <p className="font-semibold">Check: 2^5 = 32 ✓</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-green-100 rounded-lg font-semibold hover:bg-green-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Solve 3^(x-2) = 1/9
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-green-500">
                <p className="font-semibold mb-3">Given: 3^(x-2) = 1/9</p>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1">Step 1: Write 1/9 as a power of 3</p>
                    <p className="ml-4 font-mono">1/9 = 1/(3^2) = 3^(-2)</p>
                    <p className="ml-4 text-sm text-gray-600">Remember: 1/a^n = a^(-n)</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 2: Rewrite equation</p>
                    <p className="ml-4 font-mono">3^(x-2) = 3^(-2)</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 3: Equate exponents</p>
                    <p className="ml-4 font-mono">x - 2 = -2</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 4: Solve for x</p>
                    <p className="ml-4 font-mono text-lg font-bold text-green-600">x = 0</p>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <p className="font-semibold">Check: 3^(0-2) = 3^(-2) = 1/9 ✓</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left p-4 bg-green-100 rounded-lg font-semibold hover:bg-green-200 transition"
            >
              {showExample3 ? '▼' : '▶'} Example 3: Solve 6 × 3^x = 54
            </button>

            {showExample3 && (
              <div className="p-6 bg-white rounded border-l-4 border-green-500">
                <p className="font-semibold mb-3">Given: 6 × 3^x = 54</p>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1">Step 1: Isolate the exponential term</p>
                    <p className="ml-4 font-mono">3^x = 54 ÷ 6</p>
                    <p className="ml-4 font-mono">3^x = 9</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 2: Write 9 as a power of 3</p>
                    <p className="ml-4 font-mono">9 = 3^2</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 3: Rewrite equation</p>
                    <p className="ml-4 font-mono">3^x = 3^2</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 4: Equate exponents</p>
                    <p className="ml-4 font-mono text-lg font-bold text-green-600">x = 2</p>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <p className="font-semibold">Check: 6 × 3^2 = 6 × 9 = 54 ✓</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample4(!showExample4)}
              className="w-full text-left p-4 bg-green-100 rounded-lg font-semibold hover:bg-green-200 transition"
            >
              {showExample4 ? '▼' : '▶'} Example 4: Solve 4^(x-1) = (1/2)^(1-3x)
            </button>

            {showExample4 && (
              <div className="p-6 bg-white rounded border-l-4 border-green-500">
                <p className="font-semibold mb-3">Given: 4^(x-1) = (1/2)^(1-3x)</p>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1">Step 1: Write both sides with base 2</p>
                    <p className="ml-4 font-mono">4 = 2^2</p>
                    <p className="ml-4 font-mono">1/2 = 2^(-1)</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 2: Rewrite using power rules</p>
                    <p className="ml-4 font-mono">(2^2)^(x-1) = (2^(-1))^(1-3x)</p>
                    <p className="ml-4 font-mono">2^(2(x-1)) = 2^(-1(1-3x))</p>
                    <p className="ml-4 font-mono">2^(2x-2) = 2^(3x-1)</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 3: Equate exponents</p>
                    <p className="ml-4 font-mono">2x - 2 = 3x - 1</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Step 4: Solve for x</p>
                    <p className="ml-4 font-mono">-2 + 1 = 3x - 2x</p>
                    <p className="ml-4 font-mono text-lg font-bold text-green-600">x = -1</p>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <p className="font-semibold">Check substitution verifies the solution ✓</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Using Technology */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">4. Using Technology for Complex Equations</h2>

          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 mb-4">
            <h3 className="font-bold text-lg mb-3">When the Same Base Method Doesn't Work</h3>
            <p className="mb-3">
              If we cannot easily write both sides with the same base, we need to use technology
              (graphing calculator or logarithms, which we'll learn later).
            </p>

            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Example: 2^x = 7</p>
              <p className="text-sm mb-2">
                We cannot write 7 as a power of 2, so we use a calculator or logarithms.
              </p>
              <p className="font-mono">x ≈ 2.807</p>
              <p className="text-sm mt-2 text-gray-600">
                (We'll learn the logarithm method to solve this exactly in later sections)
              </p>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">1. Solve: 5 × 2^x = 40</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p>Step 1: 2^x = 40 ÷ 5 = 8</p>
                  <p>Step 2: 8 = 2^3</p>
                  <p>Step 3: 2^x = 2^3</p>
                  <p className="font-bold">Answer: x = 3</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">2. Solve: 4 × 5^x = 500</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p>Step 1: 5^x = 500 ÷ 4 = 125</p>
                  <p>Step 2: 125 = 5^3</p>
                  <p>Step 3: 5^x = 5^3</p>
                  <p className="font-bold">Answer: x = 3</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">3. Solve: 2^(2-5x) = 4^x</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p>Step 1: Write with base 2: 4 = 2^2</p>
                  <p>Step 2: 2^(2-5x) = (2^2)^x = 2^(2x)</p>
                  <p>Step 3: Equate exponents: 2 - 5x = 2x</p>
                  <p>Step 4: 2 = 7x</p>
                  <p className="font-bold">Answer: x = 2/7</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">4. Solve: 3^(x+1) × 9^(-x) = (1/3)^(x+1)</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p>Step 1: Write with base 3: 9 = 3^2, 1/3 = 3^(-1)</p>
                  <p>Step 2: 3^(x+1) × 3^(-2x) = 3^(-(x+1))</p>
                  <p>Step 3: Using exponent rules: 3^(x+1-2x) = 3^(-x-1)</p>
                  <p>Step 4: 3^(1-x) = 3^(-x-1)</p>
                  <p>Step 5: Equate: 1 - x = -x - 1</p>
                  <p>Step 6: 1 = -1 (contradiction!)</p>
                  <p className="font-bold">Answer: No solution</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">5. Solve: 25^x = 5^(x+4)</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p>Step 1: Write with base 5: 25 = 5^2</p>
                  <p>Step 2: (5^2)^x = 5^(x+4)</p>
                  <p>Step 3: 5^(2x) = 5^(x+4)</p>
                  <p>Step 4: 2x = x + 4</p>
                  <p className="font-bold">Answer: x = 4</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Common Pitfalls */}
        <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
          <h2 className="text-xl font-bold mb-4 text-red-800">Common Mistakes to Avoid</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">✗</span>
              <div>
                <p className="font-semibold">Don't forget negative signs!</p>
                <p className="text-sm">1/9 = 3^(-2), not 3^2</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">✗</span>
              <div>
                <p className="font-semibold">Apply power rules correctly</p>
                <p className="text-sm">(a^m)^n = a^(mn), not a^(m+n)</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">✗</span>
              <div>
                <p className="font-semibold">Isolate the exponential first</p>
                <p className="text-sm">In 5 × 2^x = 40, divide both sides by 5 before equating exponents</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Exponential equations have the unknown in the exponent</li>
            <li><strong>Main method:</strong> Write both sides with the same base, then equate exponents</li>
            <li>If a^x = a^k, then x = k (only when bases are equal)</li>
            <li>Use index laws to rewrite expressions: a^(-n) = 1/a^n, (a^m)^n = a^(mn)</li>
            <li>Always isolate the exponential term first before equating exponents</li>
            <li>Common bases to remember: 4 = 2^2, 8 = 2^3, 9 = 3^2, 27 = 3^3, 16 = 2^4 or 4^2</li>
            <li>If you can't find a common base, use technology or logarithms (next section)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExponentialEquations;
