import React, { useState } from 'react';

const LogarithmLaws = () => {
  const [showProof1, setShowProof1] = useState(false);
  const [showProof2, setShowProof2] = useState(false);
  const [showProof3, setShowProof3] = useState(false);
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Laws of Logarithms</h1>
        <p className="text-lg">Understanding and applying the three fundamental logarithm laws</p>
      </div>

      <div className="space-y-8">
        {/* Introduction */}
        <div>
          <p className="mb-4">
            Since there are laws for working with exponents, it should not be surprising that there
            are also <strong>laws for logarithms</strong>.
          </p>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Remember:</p>
            <p>The logarithm of a positive number is the <strong>exponent</strong> which 10 must be
            raised to in order to obtain that number.</p>
          </div>
        </div>

        {/* The Three Laws */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">The Three Logarithm Laws</h2>

          <div className="space-y-4">
            {/* Law 1: Product */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-300">
              <h3 className="font-bold text-lg mb-3 text-green-700">Law 1: Product Law</h3>
              <p className="text-2xl font-mono text-center mb-3 bg-white p-3 rounded">
                log(ab) = log a + log b
              </p>
              <p className="text-sm text-center">
                The log of a product equals the sum of the logs
              </p>
            </div>

            {/* Law 2: Quotient */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Law 2: Quotient Law</h3>
              <p className="text-2xl font-mono text-center mb-3 bg-white p-3 rounded">
                log(a/b) = log a - log b
              </p>
              <p className="text-sm text-center">
                The log of a quotient equals the difference of the logs
              </p>
            </div>

            {/* Law 3: Power */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="font-bold text-lg mb-3 text-purple-700">Law 3: Power Law</h3>
              <p className="text-2xl font-mono text-center mb-3 bg-white p-3 rounded">
                log(a^n) = n log a
              </p>
              <p className="text-sm text-center">
                The log of a power equals the exponent times the log
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded border-2 border-gray-400 mt-4">
            <p className="font-semibold mb-2">Important Note:</p>
            <p className="text-sm">
              These laws are true for all positive values of <strong>a</strong> and <strong>b</strong>,
              and for any real value of <strong>n</strong>.
            </p>
          </div>
        </div>

        {/* Proofs */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Proving the Logarithm Laws</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowProof1(!showProof1)}
              className="w-full text-left p-4 bg-green-100 rounded-lg font-semibold hover:bg-green-200 transition"
            >
              {showProof1 ? '▼' : '▶'} Proof of Law 1: log(ab) = log a + log b
            </button>

            {showProof1 && (
              <div className="p-6 bg-white rounded border-l-4 border-green-500">
                <div className="space-y-3">
                  <div>
                    <p className="mb-2">We can express the product using exponential form:</p>
                    <p className="font-mono ml-4">log(ab) = log(10^(log a) × 10^(log b))</p>
                  </div>
                  <div>
                    <p className="mb-2">Using exponent laws (same base, multiply → add exponents):</p>
                    <p className="font-mono ml-4">= log(10^(log a + log b))</p>
                  </div>
                  <div>
                    <p className="mb-2">Since log and exponential are inverse functions:</p>
                    <p className="font-mono ml-4">= log a + log b</p>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <p className="font-bold">Therefore: log(ab) = log a + log b ✓</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowProof2(!showProof2)}
              className="w-full text-left p-4 bg-blue-100 rounded-lg font-semibold hover:bg-blue-200 transition"
            >
              {showProof2 ? '▼' : '▶'} Proof of Law 2: log(a/b) = log a - log b
            </button>

            {showProof2 && (
              <div className="p-6 bg-white rounded border-l-4 border-blue-500">
                <div className="space-y-3">
                  <div>
                    <p className="mb-2">Express the quotient using exponential form:</p>
                    <p className="font-mono ml-4">log(a/b) = log(10^(log a) / 10^(log b))</p>
                  </div>
                  <div>
                    <p className="mb-2">Using exponent laws (same base, divide → subtract exponents):</p>
                    <p className="font-mono ml-4">= log(10^(log a - log b))</p>
                  </div>
                  <div>
                    <p className="mb-2">Since log and exponential are inverse functions:</p>
                    <p className="font-mono ml-4">= log a - log b</p>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <p className="font-bold">Therefore: log(a/b) = log a - log b ✓</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowProof3(!showProof3)}
              className="w-full text-left p-4 bg-purple-100 rounded-lg font-semibold hover:bg-purple-200 transition"
            >
              {showProof3 ? '▼' : '▶'} Proof of Law 3: log(a^n) = n log a
            </button>

            {showProof3 && (
              <div className="p-6 bg-white rounded border-l-4 border-purple-500">
                <div className="space-y-3">
                  <div>
                    <p className="mb-2">Express a^n using exponential form:</p>
                    <p className="font-mono ml-4">log(a^n) = log((10^(log a))^n)</p>
                  </div>
                  <div>
                    <p className="mb-2">Using exponent laws (power of power → multiply):</p>
                    <p className="font-mono ml-4">= log(10^(n × log a))</p>
                  </div>
                  <div>
                    <p className="mb-2">Since log and exponential are inverse functions:</p>
                    <p className="font-mono ml-4">= n × log a</p>
                  </div>
                  <div className="mt-4 p-3 bg-purple-50 rounded">
                    <p className="font-bold">Therefore: log(a^n) = n log a ✓</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-cyan-100 rounded-lg font-semibold hover:bg-cyan-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Simplify Logarithmic Expressions
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-cyan-500">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">a) Simplify: log 2 + log 7</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>Using Product Law: log a + log b = log(ab)</p>
                      <p className="font-mono">log 2 + log 7 = log(2 × 7)</p>
                      <p className="font-mono font-bold text-cyan-600">= log 14</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">b) Simplify: log 6 - log 3</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>Using Quotient Law: log a - log b = log(a/b)</p>
                      <p className="font-mono">log 6 - log 3 = log(6/3)</p>
                      <p className="font-mono">= log 2</p>
                      <p className="font-mono font-bold text-cyan-600">= log 2</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">c) Simplify: 2 + log 9</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>First convert 2 to logarithmic form: 2 = log 100</p>
                      <p className="font-mono">2 + log 9 = log 100 + log 9</p>
                      <p>Using Product Law:</p>
                      <p className="font-mono">= log(100 × 9)</p>
                      <p className="font-mono font-bold text-cyan-600">= log 900</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">d) Simplify: log 49 / log(1/7)</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>Note: This uses division of logs, NOT quotient law!</p>
                      <p className="font-mono">log 49 = log(7²) = 2 log 7</p>
                      <p className="font-mono">log(1/7) = log(7^(-1)) = -log 7</p>
                      <p className="font-mono">= (2 log 7) / (-log 7)</p>
                      <p className="font-mono font-bold text-cyan-600">= -2</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-cyan-100 rounded-lg font-semibold hover:bg-cyan-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Write as Single Logarithm
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-cyan-500">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">a) Write as single logarithm: log 6 + log 5</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p className="font-mono">log 6 + log 5 = log(6 × 5)</p>
                      <p className="font-mono font-bold text-cyan-600">= log 30</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">b) Write as single logarithm: log 10 - log 2</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p className="font-mono">log 10 - log 2 = log(10/2)</p>
                      <p className="font-mono font-bold text-cyan-600">= log 5</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">c) Write as single logarithm: 3 log 2 + log 5</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>Using Power Law first: 3 log 2 = log(2³) = log 8</p>
                      <p className="font-mono">log 8 + log 5 = log(8 × 5)</p>
                      <p className="font-mono font-bold text-cyan-600">= log 40</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">d) Write as single logarithm: log 20 + log(0.2)</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p className="font-mono">log 20 + log(0.2) = log(20 × 0.2)</p>
                      <p className="font-mono">= log 4</p>
                      <p className="font-mono font-bold text-cyan-600">= log 4</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">1. Simplify: log 8 + log 3</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p>Using Product Law:</p>
                  <p className="font-bold">log(8 × 3) = log 24</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">2. Simplify: log 32 - 5 log 2</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-1">
                  <p>log 32 = log(2⁵) = 5 log 2</p>
                  <p>log 32 - 5 log 2 = 5 log 2 - 5 log 2</p>
                  <p className="font-bold">= 0</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">3. Write as single logarithm: log 5 + 2 log 3 - log 45</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-1">
                  <p>2 log 3 = log(3²) = log 9</p>
                  <p>log 5 + log 9 - log 45 = log(5 × 9) - log 45</p>
                  <p>= log 45 - log 45</p>
                  <p className="font-bold">= log 1 = 0</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">4. Simplify: log(√2) using power law</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-1">
                  <p>√2 = 2^(1/2)</p>
                  <p>log(√2) = log(2^(1/2))</p>
                  <p>Using Power Law:</p>
                  <p className="font-bold">= (1/2) log 2</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">5. Prove: log(a^n) = n log a for positive a and real n</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-1">
                  <p>See proof above using exponential form and exponent laws.</p>
                  <p className="font-bold">This is the Power Law of Logarithms</p>
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
                <p className="font-semibold">log(a + b) ≠ log a + log b</p>
                <p className="text-sm">Addition inside log is NOT the same as adding logs!</p>
                <p className="text-sm text-green-600">✓ log(ab) = log a + log b</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">✗</span>
              <div>
                <p className="font-semibold">log(a - b) ≠ log a - log b</p>
                <p className="text-sm">Subtraction inside log is NOT the same as subtracting logs!</p>
                <p className="text-sm text-green-600">✓ log(a/b) = log a - log b</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">✗</span>
              <div>
                <p className="font-semibold">(log a)^n ≠ n log a</p>
                <p className="text-sm">Power outside is NOT the same as power inside!</p>
                <p className="text-sm text-green-600">✓ log(a^n) = n log a</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Product Law:</strong> log(ab) = log a + log b (multiply → add)</li>
            <li><strong>Quotient Law:</strong> log(a/b) = log a - log b (divide → subtract)</li>
            <li><strong>Power Law:</strong> log(a^n) = n log a (power → multiply)</li>
            <li>These laws work for positive values of a and b, any real n</li>
            <li>Laws help simplify logarithmic expressions</li>
            <li>Use laws to write multiple logs as a single log or vice versa</li>
            <li>The laws come from properties of exponents</li>
            <li>DO NOT confuse log(a + b) with log a + log b - they are NOT equal!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogarithmLaws;
