import { useState } from 'react';

const CommonLogarithms = () => {
  const [selectedLog, setSelectedLog] = useState('log 100');
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  // Logarithm converter component
  const LogConverter = ({ exponential, logarithmic }:
    { exponential: string; logarithmic: string }) => {
    return (
      <div className="grid md:grid-cols-2 gap-4 my-4">
        <div className="bg-blue-50 p-4 rounded border-2 border-blue-300">
          <p className="text-sm font-semibold mb-2 text-blue-700">Exponential Form:</p>
          <p className="text-xl font-mono text-center">{exponential}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded border-2 border-purple-300">
          <p className="text-sm font-semibold mb-2 text-purple-700">Logarithmic Form:</p>
          <p className="text-xl font-mono text-center">{logarithmic}</p>
        </div>
      </div>
    );
  };

  // Calculator display component
  const CalculatorDisplay = ({ input, output }:
    { input: string; output: string }) => {
    return (
      <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm">
        <div className="mb-2 flex justify-between">
          <span>Input:</span>
          <span>{input}</span>
        </div>
        <div className="text-lg flex justify-between border-t border-gray-600 pt-2">
          <span>Output:</span>
          <span className="font-bold">{output}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Common Logarithms</h1>
        <p className="text-lg">Understanding logarithms as the inverse of exponentiation</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is a Logarithm */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">1. What is a Logarithm?</h2>

          <p className="mb-4">
            Given the exponential function <span className="font-mono">y = a^x</span>, we want a way
            to write <strong>x</strong> in terms of <strong>y</strong>. To do this, we define a
            function called a <strong>logarithm</strong>.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              The <strong>common logarithm</strong> of a positive number is the power that 10 must
              be raised to in order to obtain the number.
            </p>
            <div className="bg-white p-4 rounded">
              <p className="text-center mb-2">If <span className="font-mono text-lg">b = 10^x</span></p>
              <p className="text-center text-xl font-mono font-bold">then x = log b</p>
            </div>
            <p className="text-sm mt-3">
              We read "log b" as "<strong>the logarithm of b</strong>" or "<strong>log base 10 of b</strong>"
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Key Concept:</p>
            <p>A logarithm is an <strong>exponent</strong>. It answers the question:</p>
            <p className="font-italic mt-2">"What power must I raise 10 to, in order to get this number?"</p>
          </div>
        </div>

        {/* Section 2: Converting Between Forms */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">2. Converting Between Exponential and Logarithmic Forms</h2>

          <div className="space-y-4">
            <LogConverter exponential="10³ = 1000" logarithmic="log 1000 = 3" />
            <LogConverter exponential="10⁻¹ = 0.1" logarithmic="log(1/10) = -1" />
            <LogConverter exponential="10⁰ = 1" logarithmic="log 1 = 0" />
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mt-4">
            <h3 className="font-semibold mb-3">Understanding the Pattern:</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-mono">since 1000 = 10³</span>, we can write <span className="font-mono">log 1000 = 3</span></p>
              <p><span className="font-mono">since 1/10 = 10⁻¹</span>, we can write <span className="font-mono">log(1/10) = -1</span></p>
              <p className="pt-2 border-t">The logarithm gives us the <strong>exponent</strong> (power of 10)</p>
            </div>
          </div>
        </div>

        {/* Section 3: Finding Easy Logarithms */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">3. Logarithms We Can Find Quickly</h2>

          <p className="mb-4">
            We can find the logarithms of 1000 and 1/10 easily because we can write these values
            quickly as powers of 10.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded border-2 border-green-300">
              <h3 className="font-bold text-green-700 mb-3">Easy to Calculate:</h3>
              <ul className="space-y-2 text-sm font-mono">
                <li>log 1 = 0 <span className="text-xs text-gray-600">(10⁰ = 1)</span></li>
                <li>log 10 = 1 <span className="text-xs text-gray-600">(10¹ = 10)</span></li>
                <li>log 100 = 2 <span className="text-xs text-gray-600">(10² = 100)</span></li>
                <li>log 1000 = 3 <span className="text-xs text-gray-600">(10³ = 1000)</span></li>
                <li>log 0.1 = -1 <span className="text-xs text-gray-600">(10⁻¹ = 0.1)</span></li>
                <li>log 0.01 = -2 <span className="text-xs text-gray-600">(10⁻² = 0.01)</span></li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded border-2 border-red-300">
              <h3 className="font-bold text-red-700 mb-3">Need Calculator:</h3>
              <ul className="space-y-2 text-sm font-mono">
                <li>log 47 ≈ 1.672</li>
                <li>log 5 ≈ 0.699</li>
                <li>log 800 ≈ 2.903</li>
                <li>log 0.4 ≈ -0.398</li>
              </ul>
              <p className="text-xs mt-3 text-gray-600">
                Can't write as simple powers of 10
              </p>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded mb-4">
            <p className="font-semibold mb-2">Interactive: Select a logarithm to explore</p>
            <div className="flex gap-2 mb-3 flex-wrap">
              {['log 100', 'log 1000', 'log(1/10)', 'log 1', 'log 10'].map(log => (
                <button
                  key={log}
                  onClick={() => setSelectedLog(log)}
                  className={`px-3 py-1 rounded text-sm ${
                    selectedLog === log
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white border-2 border-indigo-300'
                  }`}
                >
                  {log}
                </button>
              ))}
            </div>
            <div className="bg-white p-3 rounded">
              {selectedLog === 'log 100' && (
                <div>
                  <p className="font-mono text-lg mb-2">log 100 = ?</p>
                  <p className="text-sm">Ask: "What power of 10 gives 100?"</p>
                  <p className="text-sm">Answer: 10² = 100</p>
                  <p className="font-mono font-bold text-indigo-600">log 100 = 2</p>
                </div>
              )}
              {selectedLog === 'log 1000' && (
                <div>
                  <p className="font-mono text-lg mb-2">log 1000 = ?</p>
                  <p className="text-sm">Ask: "What power of 10 gives 1000?"</p>
                  <p className="text-sm">Answer: 10³ = 1000</p>
                  <p className="font-mono font-bold text-indigo-600">log 1000 = 3</p>
                </div>
              )}
              {selectedLog === 'log(1/10)' && (
                <div>
                  <p className="font-mono text-lg mb-2">log(1/10) = ?</p>
                  <p className="text-sm">Ask: "What power of 10 gives 1/10?"</p>
                  <p className="text-sm">Answer: 10⁻¹ = 1/10</p>
                  <p className="font-mono font-bold text-indigo-600">log(1/10) = -1</p>
                </div>
              )}
              {selectedLog === 'log 1' && (
                <div>
                  <p className="font-mono text-lg mb-2">log 1 = ?</p>
                  <p className="text-sm">Ask: "What power of 10 gives 1?"</p>
                  <p className="text-sm">Answer: 10⁰ = 1</p>
                  <p className="font-mono font-bold text-indigo-600">log 1 = 0</p>
                </div>
              )}
              {selectedLog === 'log 10' && (
                <div>
                  <p className="font-mono text-lg mb-2">log 10 = ?</p>
                  <p className="text-sm">Ask: "What power of 10 gives 10?"</p>
                  <p className="text-sm">Answer: 10¹ = 10</p>
                  <p className="font-mono font-bold text-indigo-600">log 10 = 1</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Section 4: Using a Calculator */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">4. Using a Calculator to Find Logarithms</h2>

          <p className="mb-4">
            If we cannot easily write a positive number as a power of 10, we use a calculator to
            find its logarithm.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-400 mb-4">
            <h3 className="font-semibold mb-3">Calculator Examples:</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm mb-2">Finding log 47:</p>
                <CalculatorDisplay input="log(47)" output="1.672097858..." />
                <p className="text-xs mt-1 text-gray-600">This means 10^1.672... ≈ 47</p>
              </div>
              <div>
                <p className="text-sm mb-2">Finding log 0.4:</p>
                <CalculatorDisplay input="log(0.4)" output="-0.3979400087..." />
                <p className="text-xs mt-1 text-gray-600">This means 10^(-0.398...) ≈ 0.4</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
            <p className="font-semibold mb-2">Using Your Calculator:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Press the "log" button</li>
              <li>Enter the number</li>
              <li>Press "=" or "Enter"</li>
              <li>Round to appropriate decimal places (usually 3 or 4)</li>
            </ol>
          </div>
        </div>

        {/* Section 5: Domain Restrictions */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">5. Important Domain Restrictions</h2>

          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
            <h3 className="font-bold text-red-700 mb-3 text-lg">When Logarithms Don't Exist</h3>

            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">log 0 does not exist</p>
                <p className="text-sm">There is no power of 10 that gives 0</p>
                <p className="text-xs text-gray-600 mt-1">10^x is always positive for any real x</p>
              </div>

              <div>
                <p className="font-semibold mb-2">log(negative number) does not exist</p>
                <p className="text-sm">There is no real power of 10 that gives a negative number</p>
                <p className="text-xs text-gray-600 mt-1">log(-5) is undefined in real numbers</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white rounded">
              <p className="font-bold text-sm mb-1">Rule:</p>
              <p className="text-sm">log x is positive if x is <strong>positive</strong></p>
              <p className="text-sm">log x is negative if x is <strong>between 0 and 1</strong></p>
              <p className="text-sm">log x is <strong>undefined</strong> if x ≤ 0</p>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">6. Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-indigo-100 rounded-lg font-semibold hover:bg-indigo-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Finding Logarithms
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-indigo-500">
                <p className="font-semibold mb-3">Find the following logarithms:</p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">a) log 100,000</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>100,000 = 10 × 10 × 10 × 10 × 10 = 10⁵</p>
                      <p className="font-mono font-bold text-indigo-600">log 100,000 = 5</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">b) log(√10)</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>√10 = 10^(1/2)</p>
                      <p className="font-mono font-bold text-indigo-600">log(√10) = 1/2 = 0.5</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">c) log 0.001</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>0.001 = 1/1000 = 1/(10³) = 10⁻³</p>
                      <p className="font-mono font-bold text-indigo-600">log 0.001 = -3</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-indigo-100 rounded-lg font-semibold hover:bg-indigo-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Using Calculator
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-indigo-500">
                <p className="font-semibold mb-3">Use your calculator to find (round to 3 decimal places):</p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">a) log 28</p>
                    <div className="ml-4 bg-gray-50 p-3 rounded">
                      <CalculatorDisplay input="log(28)" output="1.447158031..." />
                      <p className="font-mono font-bold text-indigo-600 mt-2">log 28 ≈ 1.447</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">b) log 5</p>
                    <div className="ml-4 bg-gray-50 p-3 rounded">
                      <CalculatorDisplay input="log(5)" output="0.6989700043..." />
                      <p className="font-mono font-bold text-indigo-600 mt-2">log 5 ≈ 0.699</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">c) log 300</p>
                    <div className="ml-4 bg-gray-50 p-3 rounded">
                      <CalculatorDisplay input="log(300)" output="2.477121255..." />
                      <p className="font-mono font-bold text-indigo-600 mt-2">log 300 ≈ 2.477</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">1. Without using a calculator, find: log 10,000</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p>10,000 = 10⁴</p>
                  <p className="font-bold">log 10,000 = 4</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">2. Write an equivalent logarithmic statement for 10⁻² = 0.01</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p className="font-bold">log(0.01) = -2</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">3. Write an equivalent exponential statement for log 70 = 1.845</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p className="font-bold">10^1.845 = 70</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">4. Explain why log 0 and log(-6) do not exist</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p><strong>log 0:</strong> There is no power of 10 that equals 0. 10^x is always positive.</p>
                  <p><strong>log(-6):</strong> There is no real power of 10 that gives a negative number.</p>
                  <p className="text-sm">Logarithms are only defined for positive numbers.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>A logarithm is an exponent - it tells us what power of 10 gives a number</li>
            <li>If b = 10^x, then x = log b</li>
            <li>log 10 = 1, log 100 = 2, log 1000 = 3 (powers of 10 are easy)</li>
            <li>Use a calculator for numbers that aren't simple powers of 10</li>
            <li><strong>log 0</strong> and <strong>log(negative)</strong> do not exist</li>
            <li>log x &gt; 0 when x &gt; 1</li>
            <li>log x = 0 when x = 1</li>
            <li>log x &lt; 0 when 0 &lt; x &lt; 1</li>
            <li>Logarithms are the inverse function of exponentiation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommonLogarithms;
