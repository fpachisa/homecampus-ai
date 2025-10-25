import { useState } from 'react';

const LogarithmsOtherBases = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [selectedConversion, setSelectedConversion] = useState<'2^5=32' | '3^2=9' | '5^-1=0.2' | '7^0=1'>('2^5=32');

  // Conversion visualizer
  const ConversionVisualizer = () => {
    const conversions: Record<typeof selectedConversion, { exp: string; log: string }> = {
      '2^5=32': { exp: '2^5 = 32', log: 'log₂ 32 = 5' },
      '3^2=9': { exp: '3^2 = 9', log: 'log₃ 9 = 2' },
      '5^-1=0.2': { exp: '5^(-1) = 1/5', log: 'log₅(1/5) = -1' },
      '7^0=1': { exp: '7^0 = 1', log: 'log₇ 1 = 0' }
    };

    return (
      <div className="bg-white p-4 rounded border-2 border-purple-300">
        <div className="flex gap-2 mb-4 flex-wrap">
          {Object.keys(conversions).map(key => (
            <button
              key={key}
              onClick={() => setSelectedConversion(key as typeof selectedConversion)}
              className={`px-3 py-1 rounded text-sm ${
                selectedConversion === key
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {key}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <p className="text-sm font-semibold mb-2 text-blue-700">Exponential Form:</p>
            <p className="text-xl font-mono text-center">{conversions[selectedConversion].exp}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <p className="text-sm font-semibold mb-2 text-purple-700">Logarithmic Form:</p>
            <p className="text-xl font-mono text-center">{conversions[selectedConversion].log}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Logarithms in Other Bases</h1>
        <p className="text-lg">Understanding logarithms with bases other than 10</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Introduction */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">1. Beyond Base 10</h2>

          <p className="mb-4">
            We have seen that a <strong>common logarithm</strong> is the power that 10 must be raised
            to in order to obtain a given number. A common logarithm can therefore be described as a
            <strong> logarithm in base 10</strong>.
          </p>

          <p className="mb-4">
            We can also talk about logarithms in bases other than 10.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition: Logarithm in Base a</h3>
            <p className="mb-3">
              The <strong>logarithm in base a of b</strong> is the power that <strong>a</strong> must
              be raised to in order to obtain <strong>b</strong>.
            </p>
            <div className="bg-white p-4 rounded">
              <p className="text-center mb-2">If <span className="font-mono text-lg">a^x = b</span> where a &gt; 0, b &gt; 0, then:</p>
              <p className="text-center text-xl font-mono font-bold">x = log_a b</p>
            </div>
            <p className="text-sm mt-3">
              We read "log_a b" as "<strong>log base a of b</strong>"
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Important:</p>
            <p>If no base is specified, we assume <strong>base 10</strong> (common logarithm).</p>
            <p className="mt-2 font-mono">log b means log₁₀ b</p>
          </div>
        </div>

        {/* Section 2: Converting Forms */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">2. Converting Between Forms</h2>

          <p className="mb-4">
            Just like with base 10 logarithms, we can convert between exponential and logarithmic
            forms for any base.
          </p>

          <div className="bg-purple-50 p-4 rounded mb-4">
            <h3 className="font-semibold mb-3">Key Rule:</h3>
            <p className="text-center text-xl font-mono mb-2">If a^x = b, then log_a b = x</p>
            <p className="text-sm text-center">The logarithm gives us the <strong>exponent</strong></p>
          </div>

          <ConversionVisualizer />

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded border-2 border-green-300">
              <h3 className="font-bold text-green-700 mb-3">More Examples:</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-mono">2^3 = 8</p>
                  <p className="text-gray-600">↔ log₂ 8 = 3</p>
                </div>
                <div>
                  <p className="font-mono">4^(1/2) = 2</p>
                  <p className="text-gray-600">↔ log₄ 2 = 1/2</p>
                </div>
                <div>
                  <p className="font-mono">3^(-1) = 1/3</p>
                  <p className="text-gray-600">↔ log₃(1/3) = -1</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded border-2 border-blue-300">
              <h3 className="font-bold text-blue-700 mb-3">Question to Ask:</h3>
              <p className="text-sm mb-3">"What power must the <strong>base</strong> be raised to?"</p>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-mono">log₄ 64 = ?</p>
                  <p className="text-gray-600">Ask: 4^? = 64</p>
                  <p className="text-gray-600">Answer: 4^3 = 64, so log₄ 64 = 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">3. Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-purple-100 rounded-lg font-semibold hover:bg-purple-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Write Equivalent Logarithmic Statements
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-purple-500">
                <p className="font-semibold mb-3">Write an equivalent logarithmic statement for:</p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">a) 2^5 = 32</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>The base is 2, the exponent is 5, the result is 32</p>
                      <p className="font-mono font-bold text-purple-600">log₂ 32 = 5</p>
                      <p className="text-sm text-gray-600">Read as: "log base 2 of 32 equals 5"</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">b) 7^(-1) = 1/7</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>The base is 7, the exponent is -1, the result is 1/7</p>
                      <p className="font-mono font-bold text-purple-600">log₇(1/7) = -1</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">c) 3^(-4) = 1/81</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>The base is 3, the exponent is -4, the result is 1/81</p>
                      <p className="font-mono font-bold text-purple-600">log₃(1/81) = -4</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">d) 5^(-1) = 0.2</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>0.2 = 1/5, so 5^(-1) = 1/5</p>
                      <p className="font-mono font-bold text-purple-600">log₅(1/5) = -1</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-purple-100 rounded-lg font-semibold hover:bg-purple-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Evaluate Logarithms in Different Bases
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-purple-500">
                <p className="font-semibold mb-3">Find the value of:</p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">a) log₃ 81</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>Ask: "What power of 3 gives 81?"</p>
                      <p>3^1 = 3, 3^2 = 9, 3^3 = 27, 3^4 = 81</p>
                      <p className="font-mono font-bold text-purple-600">log₃ 81 = 4</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">b) log₂ 16</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>Ask: "What power of 2 gives 16?"</p>
                      <p>2^4 = 16</p>
                      <p className="font-mono font-bold text-purple-600">log₂ 16 = 4</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">c) log₅ 1</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>Ask: "What power of 5 gives 1?"</p>
                      <p>5^0 = 1</p>
                      <p className="font-mono font-bold text-purple-600">log₅ 1 = 0</p>
                      <p className="text-sm text-gray-600">Note: log_a 1 = 0 for ANY base a!</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">d) log₄ 2</p>
                    <div className="ml-4 space-y-1 bg-gray-50 p-3 rounded">
                      <p>Ask: "What power of 4 gives 2?"</p>
                      <p>4^(1/2) = √4 = 2</p>
                      <p className="font-mono font-bold text-purple-600">log₄ 2 = 1/2</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Important Properties */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">4. Universal Properties</h2>

          <p className="mb-4">
            Certain properties hold for logarithms in <strong>any base</strong>:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded border-2 border-green-300">
              <h3 className="font-bold text-green-700 mb-3">Property 1:</h3>
              <p className="font-mono text-lg mb-2">log_a 1 = 0</p>
              <p className="text-sm">For any base a, the log of 1 is always 0</p>
              <p className="text-xs text-gray-600 mt-2">Because a^0 = 1 for any a</p>
            </div>

            <div className="bg-blue-50 p-4 rounded border-2 border-blue-300">
              <h3 className="font-bold text-blue-700 mb-3">Property 2:</h3>
              <p className="font-mono text-lg mb-2">log_a a = 1</p>
              <p className="text-sm">The log base a of a is always 1</p>
              <p className="text-xs text-gray-600 mt-2">Because a^1 = a</p>
            </div>

            <div className="bg-orange-50 p-4 rounded border-2 border-orange-300">
              <h3 className="font-bold text-orange-700 mb-3">Property 3:</h3>
              <p className="font-mono text-lg mb-2">log_a(a^x) = x</p>
              <p className="text-sm">Log and exponent with same base cancel</p>
              <p className="text-xs text-gray-600 mt-2">Because a^x is already in the form we want</p>
            </div>

            <div className="bg-pink-50 p-4 rounded border-2 border-pink-300">
              <h3 className="font-bold text-pink-700 mb-3">Property 4:</h3>
              <p className="font-mono text-lg mb-2">a^(log_a x) = x</p>
              <p className="text-sm">Exponent and log with same base cancel</p>
              <p className="text-xs text-gray-600 mt-2">They are inverse operations</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mt-4">
            <p className="font-bold mb-2">Examples of Universal Properties:</p>
            <ul className="space-y-1 text-sm">
              <li>log₂ 1 = 0, log₅ 1 = 0, log₁₀ 1 = 0</li>
              <li>log₂ 2 = 1, log₅ 5 = 1, log₁₀ 10 = 1</li>
              <li>log₃(3^7) = 7, log₂(2^(-5)) = -5</li>
              <li>2^(log₂ 50) = 50, 7^(log₇ 100) = 100</li>
            </ul>
          </div>
        </div>

        {/* Section 4: Calculator Note */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">5. Using Technology</h2>

          <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-400">
            <h3 className="font-semibold mb-3">Finding Logarithms in Other Bases:</h3>
            <p className="mb-3 text-sm">
              Most calculators only have buttons for log base 10 (log) and log base e (ln).
              To find logarithms in other bases, we need to use a formula:
            </p>

            <div className="bg-white p-4 rounded mb-3">
              <p className="text-center text-xl font-mono font-bold mb-2">log_a b = log b / log a</p>
              <p className="text-center text-sm">(using base 10 logs on calculator)</p>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <p className="font-semibold mb-2">Example: Find log₂ 7</p>
              <p className="text-sm mb-1">log₂ 7 = log 7 / log 2</p>
              <p className="text-sm mb-1">= 0.8451 / 0.3010</p>
              <p className="text-sm font-bold">≈ 2.807</p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500 mt-4">
            <p className="font-semibold mb-2">Note:</p>
            <p className="text-sm">
              If no base is specified, we assume working in <strong>base 10</strong>.
              This is why it's called the "common" logarithm - it's the most commonly used!
            </p>
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">1. Write an equivalent exponential statement for log₂ 16 = 4</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p className="font-bold">2^4 = 16</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">2. Write an equivalent logarithmic statement for 3^2 = 9</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p className="font-bold">log₃ 9 = 2</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">3. Find: log₄ 1</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p>4^? = 1</p>
                  <p>4^0 = 1</p>
                  <p className="font-bold">log₄ 1 = 0</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">4. Find: log₈ 2</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p>8^? = 2</p>
                  <p>8 = 2^3, so 8^(1/3) = 2</p>
                  <p className="font-bold">log₈ 2 = 1/3</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">5. Simplify: log₅(5^12)</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p>Using Property: log_a(a^x) = x</p>
                  <p className="font-bold">log₅(5^12) = 12</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Logarithms can be in any base, not just base 10</li>
            <li>If a^x = b, then log_a b = x (logarithm gives the exponent)</li>
            <li>If no base specified, assume base 10 (common logarithm)</li>
            <li>log_a 1 = 0 for any base a</li>
            <li>log_a a = 1 for any base a</li>
            <li>log_a(a^x) = x (log and exponent cancel with same base)</li>
            <li>To find log_a b on calculator: log_a b = log b / log a</li>
            <li>Logarithm laws work for any base</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogarithmsOtherBases;
