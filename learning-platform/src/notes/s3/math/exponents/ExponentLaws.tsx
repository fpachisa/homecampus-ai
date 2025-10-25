import { useState } from 'react';

const ExponentLaws = () => {
  const [baseA, setBaseA] = useState(2);
  const [expM, setExpM] = useState(3);
  const [expN, setExpN] = useState(4);
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  // Calculate powers
  const calculatePower = (base: number, exp: number) => {
    return Math.pow(base, exp);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Exponent Laws</h1>
        <p className="text-lg">Master the fundamental laws of exponents</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Basic Exponent Notation */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">1. Exponent Notation</h2>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              <strong>Exponent notation</strong> represents repeated multiplication of the same number.
            </p>
            <div className="bg-white p-4 rounded mt-3">
              <p className="text-center text-xl font-mono">
                a<sup>n</sup> = a × a × a × ... × a
              </p>
              <p className="text-center text-sm text-gray-600 mt-2">n factors of a</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded border-2 border-gray-300">
              <h3 className="font-bold mb-3 text-purple-700">Base</h3>
              <p className="text-sm">
                In a<sup>n</sup>, <strong>a</strong> is the <strong>base</strong>
              </p>
              <p className="text-xs text-gray-600 mt-2">The number being multiplied</p>
            </div>
            <div className="bg-white p-4 rounded border-2 border-gray-300">
              <h3 className="font-bold mb-3 text-purple-700">Exponent</h3>
              <p className="text-sm">
                In a<sup>n</sup>, <strong>n</strong> is the <strong>exponent</strong>
              </p>
              <p className="text-xs text-gray-600 mt-2">Also called power or index</p>
            </div>
            <div className="bg-white p-4 rounded border-2 border-gray-300">
              <h3 className="font-bold mb-3 text-purple-700">Result</h3>
              <p className="text-sm">
                Read as: "a to the power of n"
              </p>
              <p className="text-xs text-gray-600 mt-2">Product of n factors</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded border-2 border-green-300 mb-4">
            <h3 className="font-bold text-green-700 mb-2">Examples:</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-mono">5³ = 5 × 5 × 5 = 125</li>
              <li className="font-mono">2⁴ = 2 × 2 × 2 × 2 = 16</li>
              <li className="font-mono">7² = 7 × 7 = 49</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Multiplication Law */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">2. Multiplication Law</h2>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Rule:</h3>
            <p className="mb-3">
              To <strong>multiply</strong> numbers with the <strong>same base</strong>, keep the base and <strong>add</strong> the exponents.
            </p>
            <div className="bg-white p-4 rounded mt-3">
              <p className="text-center text-2xl font-mono">
                a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Why does this work?</h3>
            <div className="space-y-2 text-sm">
              <p className="font-mono">7⁸ × 7⁴ = (7×7×7×7×7×7×7×7) × (7×7×7×7)</p>
              <p className="text-center">↓</p>
              <p className="font-mono text-center">= 7 × 7 × 7 × 7 × 7 × 7 × 7 × 7 × 7 × 7 × 7 × 7</p>
              <p className="text-center">↓</p>
              <p className="font-mono text-center">= 7¹² = 7⁸⁺⁴</p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded mb-4">
            <p className="font-semibold mb-3">Interactive Calculator:</p>
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div>
                <label className="text-sm block mb-1">Base (a):</label>
                <input
                  type="number"
                  value={baseA}
                  onChange={(e) => setBaseA(Number(e.target.value))}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-sm block mb-1">Exponent m:</label>
                <input
                  type="number"
                  value={expM}
                  onChange={(e) => setExpM(Number(e.target.value))}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-sm block mb-1">Exponent n:</label>
                <input
                  type="number"
                  value={expN}
                  onChange={(e) => setExpN(Number(e.target.value))}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="text-lg font-mono text-center">
                {baseA}<sup>{expM}</sup> × {baseA}<sup>{expN}</sup> = {baseA}<sup>{expM + expN}</sup>
              </p>
              <p className="text-center text-sm text-gray-600 mt-2">
                = {calculatePower(baseA, expM)} × {calculatePower(baseA, expN)} = {calculatePower(baseA, expM + expN)}
              </p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded border-2 border-green-300">
            <h3 className="font-bold text-green-700 mb-2">Examples:</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-mono">3² × 3⁵ = 3²⁺⁵ = 3⁷</li>
              <li className="font-mono">x⁶ × x³ = x⁶⁺³ = x⁹</li>
              <li className="font-mono">t³ × t⁴ × t⁵ = t³⁺⁴⁺⁵ = t¹²</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Division Law */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">3. Division Law</h2>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Rule:</h3>
            <p className="mb-3">
              To <strong>divide</strong> numbers with the <strong>same base</strong>, keep the base and <strong>subtract</strong> the exponents.
            </p>
            <div className="bg-white p-4 rounded mt-3">
              <p className="text-center text-2xl font-mono">
                a<sup>m</sup> / a<sup>n</sup> = a<sup>m-n</sup>
              </p>
              <p className="text-center text-sm text-gray-600 mt-2">(provided a ≠ 0)</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded border-2 border-green-300 mb-4">
            <h3 className="font-bold text-green-700 mb-2">Examples:</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-mono">x¹¹ / x⁵ = x¹¹⁻⁵ = x⁶</li>
              <li className="font-mono">7⁹ / 7² = 7⁹⁻² = 7⁷</li>
              <li className="font-mono">a<sup>m</sup> / a<sup>n</sup> = a<sup>m-n</sup> (provided a ≠ 0)</li>
            </ul>
          </div>
        </div>

        {/* Section 4: Power to a Power */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">4. Power to a Power Law</h2>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Rule:</h3>
            <p className="mb-3">
              When <strong>raising a power to a power</strong>, keep the base and <strong>multiply</strong> the exponents.
            </p>
            <div className="bg-white p-4 rounded mt-3">
              <p className="text-center text-2xl font-mono">
                (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Why does this work?</h3>
            <div className="space-y-2 text-sm">
              <p className="font-mono">(5²)³ = 5² × 5² × 5²</p>
              <p className="text-center">↓</p>
              <p className="font-mono text-center">= 5²⁺²⁺² = 5⁶ = 5²ˣ³</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded border-2 border-green-300">
            <h3 className="font-bold text-green-700 mb-2">Examples:</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-mono">(5²)³ = 5²ˣ³ = 5⁶</li>
              <li className="font-mono">(t⁴)³ = t⁴ˣ³ = t¹²</li>
              <li className="font-mono">(x⁷)² = x⁷ˣ² = x¹⁴</li>
            </ul>
          </div>
        </div>

        {/* Section 5: Product and Quotient to a Power */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">5. Product and Quotient to a Power</h2>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Rules:</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">Power of a Product:</p>
                <p className="text-center text-xl font-mono">(ab)<sup>n</sup> = a<sup>n</sup>b<sup>n</sup></p>
                <p className="text-xs text-center text-gray-600 mt-2">Raise each factor to the power</p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">Power of a Quotient:</p>
                <p className="text-center text-xl font-mono">(a/b)<sup>n</sup> = a<sup>n</sup>/b<sup>n</sup></p>
                <p className="text-xs text-center text-gray-600 mt-2">Raise both numerator and denominator (b ≠ 0)</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded border-2 border-green-300">
            <h3 className="font-bold text-green-700 mb-2">Examples:</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-mono">(ab)<sup>n</sup> = a<sup>n</sup>b<sup>n</sup></li>
              <li className="font-mono">(2x)³ = 2³x³ = 8x³</li>
              <li className="font-mono">(3/4)² = 3²/4² = 9/16</li>
            </ul>
          </div>
        </div>

        {/* Section 6: Zero and Negative Exponents */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">6. Zero and Negative Exponents</h2>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Rules:</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">Zero Exponent:</p>
                <p className="text-center text-xl font-mono">a<sup>0</sup> = 1</p>
                <p className="text-xs text-center text-gray-600 mt-2">(provided a ≠ 0)</p>
                <p className="text-sm mt-2">Any non-zero number raised to the power of zero equals 1.</p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">Negative Exponent:</p>
                <p className="text-center text-xl font-mono">a<sup>-n</sup> = 1/a<sup>n</sup></p>
                <p className="text-sm mt-2">A negative exponent means "reciprocal".</p>
                <p className="text-sm mt-1">In particular: a<sup>-1</sup> = 1/a</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Reciprocals:</h3>
            <p className="text-sm mb-3">
              a<sup>n</sup> and a<sup>-n</sup> are <strong>reciprocals</strong> of one another.
            </p>
            <p className="text-sm">
              This means: a<sup>n</sup> × a<sup>-n</sup> = a<sup>n + (-n)</sup> = a<sup>0</sup> = 1
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded border-2 border-green-300">
            <h3 className="font-bold text-green-700 mb-2">Examples:</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-mono">5⁰ = 1</li>
              <li className="font-mono">x⁰ = 1 (x ≠ 0)</li>
              <li className="font-mono">6⁻¹ = 1/6</li>
              <li className="font-mono">5⁻³ = 1/5³ = 1/125</li>
              <li className="font-mono">x⁻⁵ = 1/x⁵</li>
            </ul>
          </div>
        </div>

        {/* Section 7: Prime Number Bases */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">7. Writing Powers with Prime Number Bases</h2>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Strategy:</h3>
            <p className="mb-3">
              Express composite numbers as powers of <strong>prime numbers</strong>, then apply exponent laws.
            </p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Common Prime Power Equivalents:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="space-y-1">
                <p className="font-mono">4 = 2²</p>
                <p className="font-mono">8 = 2³</p>
                <p className="font-mono">16 = 2⁴</p>
                <p className="font-mono">32 = 2⁵</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono">9 = 3²</p>
                <p className="font-mono">27 = 3³</p>
                <p className="font-mono">25 = 5²</p>
                <p className="font-mono">125 = 5³</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded border-2 border-green-300">
            <h3 className="font-bold text-green-700 mb-2">Example:</h3>
            <div className="space-y-2 text-sm">
              <p className="font-mono">4 × 2<sup>p</sup> = 2² × 2<sup>p</sup> = 2²⁺<sup>p</sup></p>
              <p className="font-mono">32 / 8 = 2⁵ / 2³ = 2⁵⁻³ = 2² = 4</p>
              <p className="font-mono">25<sup>x-1</sup> = (5²)<sup>x-1</sup> = 5²⁽ˣ⁻¹⁾ = 5²ˣ⁻²</p>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-purple-100 rounded-lg font-semibold hover:bg-purple-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Simplifying with Exponent Laws
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-purple-500">
                <p className="font-semibold mb-3">Simplify: 7⁸ × 7⁴</p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">7⁸ × 7⁴</p>
                  <p className="text-sm text-gray-600">↓ Use multiplication law: add exponents</p>
                  <p className="font-mono">= 7⁸⁺⁴</p>
                  <p className="font-mono">= 7¹²</p>
                </div>

                <p className="font-semibold mb-3 mt-6">Simplify: x¹¹ / x⁵</p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">x¹¹ / x⁵</p>
                  <p className="text-sm text-gray-600">↓ Use division law: subtract exponents</p>
                  <p className="font-mono">= x¹¹⁻⁵</p>
                  <p className="font-mono">= x⁶</p>
                </div>

                <p className="font-semibold mb-3 mt-6">Simplify: (5²)³</p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">(5²)³</p>
                  <p className="text-sm text-gray-600">↓ Use power to power law: multiply exponents</p>
                  <p className="font-mono">= 5²ˣ³</p>
                  <p className="font-mono">= 5⁶</p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-purple-100 rounded-lg font-semibold hover:bg-purple-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Prime Number Bases
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-purple-500">
                <p className="font-semibold mb-3">Write 4 × 2<sup>p</sup> as a power with a prime number base</p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">4 × 2<sup>p</sup></p>
                  <p className="text-sm text-gray-600">↓ Express 4 as 2²</p>
                  <p className="font-mono">= 2² × 2<sup>p</sup></p>
                  <p className="text-sm text-gray-600">↓ Use multiplication law</p>
                  <p className="font-mono">= 2²⁺<sup>p</sup></p>
                </div>

                <p className="font-semibold mb-3 mt-6">Write 25<sup>x-1</sup> as a power with base 5</p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">25<sup>x-1</sup></p>
                  <p className="text-sm text-gray-600">↓ Express 25 as 5²</p>
                  <p className="font-mono">= (5²)<sup>x-1</sup></p>
                  <p className="text-sm text-gray-600">↓ Use power to power law</p>
                  <p className="font-mono">= 5²⁽ˣ⁻¹⁾</p>
                  <p className="font-mono">= 5²ˣ⁻²</p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left p-4 bg-purple-100 rounded-lg font-semibold hover:bg-purple-200 transition"
            >
              {showExample3 ? '▼' : '▶'} Example 3: Negative Exponents
            </button>

            {showExample3 && (
              <div className="p-6 bg-white rounded border-l-4 border-purple-500">
                <p className="font-semibold mb-3">Write as a fraction in lowest terms: 6⁻¹</p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">6⁻¹</p>
                  <p className="text-sm text-gray-600">↓ Use negative exponent rule: a⁻ⁿ = 1/aⁿ</p>
                  <p className="font-mono">= 1/6</p>
                </div>

                <p className="font-semibold mb-3 mt-6">Write without brackets or negative exponents: (5x)⁻¹</p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">(5x)⁻¹</p>
                  <p className="text-sm text-gray-600">↓ Use negative exponent rule</p>
                  <p className="font-mono">= 1/(5x)</p>
                  <p className="font-mono">= 1/5x</p>
                </div>

                <p className="font-semibold mb-3 mt-6">Write as a power with a negative exponent: 5³ / 5⁵</p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">5³ / 5⁵</p>
                  <p className="text-sm text-gray-600">↓ Use division law</p>
                  <p className="font-mono">= 5³⁻⁵</p>
                  <p className="font-mono">= 5⁻²</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">1. Simplify using the exponent laws:</p>
              <div className="ml-4 space-y-1 text-sm">
                <p>a) 3² × 3⁵</p>
                <p>b) x⁶ × x³</p>
                <p>c) 7⁹ / 7⁵</p>
                <p>d) (t⁴)³</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-purple-600 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-1 text-sm">
                  <p><strong>a)</strong> 3² × 3⁵ = 3⁷</p>
                  <p><strong>b)</strong> x⁶ × x³ = x⁹</p>
                  <p><strong>c)</strong> 7⁹ / 7⁵ = 7⁴</p>
                  <p><strong>d)</strong> (t⁴)³ = t¹²</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">2. Write as a power with a prime number base:</p>
              <div className="ml-4 space-y-1 text-sm">
                <p>a) 121</p>
                <p>b) 32</p>
                <p>c) 8¹ / 4</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-purple-600 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-1 text-sm">
                  <p><strong>a)</strong> 121 = 11²</p>
                  <p><strong>b)</strong> 32 = 2⁵</p>
                  <p><strong>c)</strong> 8¹ / 4 = 2³ / 2² = 2¹ = 2</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">3. Write as a fraction in lowest terms:</p>
              <div className="ml-4 space-y-1 text-sm">
                <p>a) 6⁻¹</p>
                <p>b) 4⁻¹</p>
                <p>c) 13⁻¹</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-purple-600 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-1 text-sm">
                  <p><strong>a)</strong> 6⁻¹ = 1/6</p>
                  <p><strong>b)</strong> 4⁻¹ = 1/4</p>
                  <p><strong>c)</strong> 13⁻¹ = 1/13</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Summary of Laws */}
        <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-400">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Summary: Exponent Laws</h2>
          <div className="space-y-2 text-sm">
            <p className="font-mono"><strong>Multiplication:</strong> aᵐ × aⁿ = aᵐ⁺ⁿ</p>
            <p className="font-mono"><strong>Division:</strong> aᵐ / aⁿ = aᵐ⁻ⁿ (a ≠ 0)</p>
            <p className="font-mono"><strong>Power to Power:</strong> (aᵐ)ⁿ = aᵐⁿ</p>
            <p className="font-mono"><strong>Product to Power:</strong> (ab)ⁿ = aⁿbⁿ</p>
            <p className="font-mono"><strong>Quotient to Power:</strong> (a/b)ⁿ = aⁿ/bⁿ (b ≠ 0)</p>
            <p className="font-mono"><strong>Zero Exponent:</strong> a⁰ = 1 (a ≠ 0)</p>
            <p className="font-mono"><strong>Negative Exponent:</strong> a⁻ⁿ = 1/aⁿ</p>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Exponent notation represents repeated multiplication</li>
            <li><strong>Same base</strong> is required for multiplication and division laws</li>
            <li><strong>Add exponents</strong> when multiplying, <strong>subtract</strong> when dividing</li>
            <li><strong>Multiply exponents</strong> when raising a power to a power</li>
            <li>Any non-zero number to the power of 0 equals 1</li>
            <li>Negative exponents create reciprocals</li>
            <li>Express composite numbers as prime powers to simplify</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExponentLaws;
