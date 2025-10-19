import React, { useState } from 'react';

const RationalExponents = () => {
  const [base, setBase] = useState(8);
  const [numerator, setNumerator] = useState(1);
  const [denominator, setDenominator] = useState(3);
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  // Calculate nth root
  const calculateRationalPower = (base: number, num: number, den: number) => {
    try {
      const result = Math.pow(base, num / den);
      return isFinite(result) ? result.toFixed(3) : 'undefined';
    } catch {
      return 'undefined';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Rational Exponents</h1>
        <p className="text-lg">Understanding fractional powers and roots</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is a Rational Exponent? */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">1. What is a Rational Exponent?</h2>

          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              A <strong>rational exponent</strong> is an exponent that can be written as a fraction m/n where m and n are integers and n &gt; 0.
            </p>
            <p className="text-sm text-gray-700">
              Rational exponents provide a way to express roots using exponent notation.
            </p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300">
            <h3 className="font-bold mb-3">Examples of Rational Exponents:</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-mono">a<sup>1/2</sup>, a<sup>1/3</sup>, a<sup>1/4</sup> (form: 1/n)</li>
              <li className="font-mono">a<sup>2/3</sup>, a<sup>3/4</sup>, a<sup>5/2</sup> (form: m/n)</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Form a^(1/n) */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">2. Rational Exponents of the Form 1/n</h2>

          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Rule:</h3>
            <p className="mb-3">
              If n is a positive integer, then:
            </p>
            <div className="bg-white p-4 rounded mt-3">
              <p className="text-center text-2xl font-mono">
                a<sup>1/n</sup> = ⁿ√a
              </p>
              <p className="text-center text-sm text-gray-600 mt-2">
                where ⁿ√a is called the <strong>nth root of a</strong>
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Special Cases:</h3>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-mono text-lg">a<sup>1/2</sup> = √a</p>
                <p className="text-xs text-gray-600 mt-1">This is the square root (most common)</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-mono text-lg">a<sup>1/3</sup> = ³√a</p>
                <p className="text-xs text-gray-600 mt-1">This is the cube root</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-mono text-lg">a<sup>1/4</sup> = ⁴√a</p>
                <p className="text-xs text-gray-600 mt-1">This is the fourth root</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded border-2 border-green-300 mb-4">
            <h3 className="font-bold text-green-700 mb-2">Examples:</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-mono">25<sup>1/2</sup> = √25 = 5</li>
              <li className="font-mono">8<sup>1/3</sup> = ³√8 = 2</li>
              <li className="font-mono">16<sup>1/4</sup> = ⁴√16 = 2</li>
              <li className="font-mono">27<sup>1/3</sup> = ³√27 = 3</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <p className="font-semibold mb-3">Verification:</p>
            <div className="space-y-2 text-sm">
              <p>Why does 8<sup>1/3</sup> = 2?</p>
              <p className="ml-4">Because 2³ = 8</p>
              <p className="ml-4 text-gray-600">The cube root of 8 is the number that, when cubed, gives 8</p>
            </div>
          </div>
        </div>

        {/* Section 3: Form a^(m/n) */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">3. Rational Exponents of the Form m/n</h2>

          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Rule:</h3>
            <p className="mb-3">
              If m and n are integers with n &gt; 0, then:
            </p>
            <div className="bg-white p-4 rounded mt-3 space-y-3">
              <p className="text-center text-2xl font-mono">
                a<sup>m/n</sup> = ⁿ√(a<sup>m</sup>) = (ⁿ√a)<sup>m</sup>
              </p>
              <p className="text-sm text-center text-gray-600">
                Both forms are equivalent - use whichever is more convenient
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Two Ways to Calculate:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded">
                <p className="font-semibold text-blue-800 mb-2">Method 1: Power then Root</p>
                <p className="font-mono text-sm">8<sup>2/3</sup> = ³√(8²)</p>
                <p className="font-mono text-sm">= ³√64</p>
                <p className="font-mono text-sm">= 4</p>
              </div>
              <div className="p-4 bg-green-50 rounded">
                <p className="font-semibold text-green-800 mb-2">Method 2: Root then Power</p>
                <p className="font-mono text-sm">8<sup>2/3</sup> = (³√8)²</p>
                <p className="font-mono text-sm">= 2²</p>
                <p className="font-mono text-sm">= 4</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3 text-center">
              Method 2 is often easier when you can find the root easily!
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded border-2 border-green-300">
            <h3 className="font-bold text-green-700 mb-2">Examples:</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-mono">27<sup>2/3</sup> = (³√27)² = 3² = 9</li>
              <li className="font-mono">16<sup>3/4</sup> = (⁴√16)³ = 2³ = 8</li>
              <li className="font-mono">25<sup>3/2</sup> = (√25)³ = 5³ = 125</li>
            </ul>
          </div>
        </div>

        {/* Section 4: Interactive Calculator */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">4. Interactive Rational Exponent Calculator</h2>

          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-sm block mb-1 font-semibold">Base (a):</label>
                <input
                  type="number"
                  value={base}
                  onChange={(e) => setBase(Number(e.target.value))}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-sm block mb-1 font-semibold">Numerator (m):</label>
                <input
                  type="number"
                  value={numerator}
                  onChange={(e) => setNumerator(Number(e.target.value))}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-sm block mb-1 font-semibold">Denominator (n):</label>
                <input
                  type="number"
                  value={denominator}
                  onChange={(e) => setDenominator(Number(e.target.value) || 1)}
                  min="1"
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <p className="text-xl font-mono text-center mb-2">
                {base}<sup>{numerator}/{denominator}</sup>
              </p>
              <p className="text-center text-2xl font-bold text-indigo-600">
                ≈ {calculateRationalPower(base, numerator, denominator)}
              </p>
              <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
                <p className="font-semibold mb-2">Interpretation:</p>
                <p className="font-mono">
                  {base}<sup>{numerator}/{denominator}</sup> =
                  <sup>{denominator}</sup>√({base}<sup>{numerator}</sup>) =
                  (<sup>{denominator}</sup>√{base})<sup>{numerator}</sup>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Exponent Laws with Rational Exponents */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">5. Applying Exponent Laws</h2>

          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Important:</h3>
            <p className="mb-3">
              All the exponent laws we learned still apply when exponents are rational (fractions)!
            </p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Exponent Laws Apply:</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-mono">a<sup>m/n</sup> × a<sup>p/q</sup> = a<sup>(m/n)+(p/q)</sup></li>
              <li className="font-mono">a<sup>m/n</sup> / a<sup>p/q</sup> = a<sup>(m/n)-(p/q)</sup></li>
              <li className="font-mono">(a<sup>m/n</sup>)<sup>p</sup> = a<sup>(m/n)×p</sup> = a<sup>mp/n</sup></li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded border-2 border-green-300">
            <h3 className="font-bold text-green-700 mb-2">Examples:</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="font-mono">8<sup>1/3</sup> × 8<sup>1/3</sup> × 8<sup>1/3</sup></p>
                <p className="font-mono ml-4">= 8<sup>(1/3)+(1/3)+(1/3)</sup> = 8<sup>1</sup> = 8</p>
              </li>
              <li>
                <p className="font-mono">27<sup>1/3</sup> × 27<sup>1/3</sup> × 27<sup>1/3</sup></p>
                <p className="font-mono ml-4">= 27<sup>1</sup> = 27</p>
              </li>
              <li>
                <p className="font-mono">(8<sup>2</sup>)<sup>1/3</sup></p>
                <p className="font-mono ml-4">= 8<sup>2×(1/3)</sup> = 8<sup>2/3</sup></p>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 6: Converting Forms */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">6. Converting Between Forms</h2>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Radical ↔ Exponential Form:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded">
                <p className="font-semibold text-blue-800 mb-3">Radical → Exponential:</p>
                <ul className="space-y-2 text-sm">
                  <li className="font-mono">√a = a<sup>1/2</sup></li>
                  <li className="font-mono">³√a = a<sup>1/3</sup></li>
                  <li className="font-mono">ⁿ√(a<sup>m</sup>) = a<sup>m/n</sup></li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded">
                <p className="font-semibold text-green-800 mb-3">Exponential → Radical:</p>
                <ul className="space-y-2 text-sm">
                  <li className="font-mono">a<sup>1/2</sup> = √a</li>
                  <li className="font-mono">a<sup>1/3</sup> = ³√a</li>
                  <li className="font-mono">a<sup>m/n</sup> = ⁿ√(a<sup>m</sup>)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Pro Tip:</p>
            <p className="text-sm">
              When dealing with rational exponents, it's often easier to write the base number as a prime raised to a power, then simplify using exponent laws.
            </p>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-indigo-100 rounded-lg font-semibold hover:bg-indigo-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Evaluating Rational Exponents
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-indigo-500">
                <p className="font-semibold mb-3">Evaluate: √50 correct to 2 decimal places</p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">√50 = 50<sup>1/2</sup></p>
                  <p className="text-sm text-gray-600">↓ Use calculator</p>
                  <p className="font-mono">≈ 7.07</p>
                </div>

                <p className="font-semibold mb-3 mt-6">Evaluate: 25<sup>3/2</sup></p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">25<sup>3/2</sup></p>
                  <p className="text-sm text-gray-600">↓ Use form (√a)ᵐ</p>
                  <p className="font-mono">= (√25)³</p>
                  <p className="font-mono">= 5³</p>
                  <p className="font-mono">= 125</p>
                </div>

                <p className="font-semibold mb-3 mt-6">Evaluate: 27<sup>2/3</sup></p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">27<sup>2/3</sup></p>
                  <p className="text-sm text-gray-600">↓ Use form (ⁿ√a)ᵐ</p>
                  <p className="font-mono">= (³√27)²</p>
                  <p className="font-mono">= 3²</p>
                  <p className="font-mono">= 9</p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-indigo-100 rounded-lg font-semibold hover:bg-indigo-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Simplifying with Exponent Laws
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-indigo-500">
                <p className="font-semibold mb-3">Simplify: (8²)<sup>1/3</sup></p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">(8²)<sup>1/3</sup></p>
                  <p className="text-sm text-gray-600">↓ Use power to power law: multiply exponents</p>
                  <p className="font-mono">= 8<sup>2×(1/3)</sup></p>
                  <p className="font-mono">= 8<sup>2/3</sup></p>
                  <p className="text-sm text-gray-600">↓ Evaluate</p>
                  <p className="font-mono">= (³√8)²</p>
                  <p className="font-mono">= 2² = 4</p>
                </div>

                <p className="font-semibold mb-3 mt-6">Simplify: 8<sup>1/3</sup> × 8<sup>2/3</sup></p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">8<sup>1/3</sup> × 8<sup>2/3</sup></p>
                  <p className="text-sm text-gray-600">↓ Use multiplication law: add exponents</p>
                  <p className="font-mono">= 8<sup>(1/3)+(2/3)</sup></p>
                  <p className="font-mono">= 8<sup>3/3</sup></p>
                  <p className="font-mono">= 8<sup>1</sup> = 8</p>
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
              <p className="font-semibold mb-2">1. Evaluate correct to 2 decimal places:</p>
              <div className="ml-4 space-y-1 text-sm">
                <p>a) √20</p>
                <p>b) ³√300</p>
                <p>c) ⁴√80</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-indigo-600 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-1 text-sm">
                  <p><strong>a)</strong> √20 = 20<sup>1/2</sup> ≈ 4.47</p>
                  <p><strong>b)</strong> ³√300 = 300<sup>1/3</sup> ≈ 6.69</p>
                  <p><strong>c)</strong> ⁴√80 = 80<sup>1/4</sup> ≈ 2.99</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">2. Evaluate exactly:</p>
              <div className="ml-4 space-y-1 text-sm">
                <p>a) 25<sup>1/2</sup></p>
                <p>b) 27<sup>2/3</sup></p>
                <p>c) 16<sup>3/4</sup></p>
                <p>d) 4<sup>-1/2</sup></p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-indigo-600 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-1 text-sm">
                  <p><strong>a)</strong> 25<sup>1/2</sup> = √25 = 5</p>
                  <p><strong>b)</strong> 27<sup>2/3</sup> = (³√27)² = 3² = 9</p>
                  <p><strong>c)</strong> 16<sup>3/4</sup> = (⁴√16)³ = 2³ = 8</p>
                  <p><strong>d)</strong> 4<sup>-1/2</sup> = 1/√4 = 1/2</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">3. Simplify using exponent laws:</p>
              <div className="ml-4 space-y-1 text-sm">
                <p>a) 5<sup>1/2</sup> × 5<sup>1/2</sup></p>
                <p>b) 10<sup>1/3</sup> × 10<sup>2/3</sup></p>
                <p>c) (27<sup>1/3</sup>)<sup>2</sup></p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-indigo-600 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-1 text-sm">
                  <p><strong>a)</strong> 5<sup>1/2</sup> × 5<sup>1/2</sup> = 5<sup>(1/2)+(1/2)</sup> = 5<sup>1</sup> = 5</p>
                  <p><strong>b)</strong> 10<sup>1/3</sup> × 10<sup>2/3</sup> = 10<sup>(1/3)+(2/3)</sup> = 10<sup>1</sup> = 10</p>
                  <p><strong>c)</strong> (27<sup>1/3</sup>)<sup>2</sup> = 27<sup>(1/3)×2</sup> = 27<sup>2/3</sup> = 9</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>a<sup>1/n</sup> = ⁿ√a (the nth root of a)</li>
            <li>a<sup>m/n</sup> = ⁿ√(a<sup>m</sup>) = (ⁿ√a)<sup>m</sup></li>
            <li>a<sup>1/2</sup> = √a (square root is the most common)</li>
            <li>All exponent laws apply to rational exponents</li>
            <li>Root then power is often easier than power then root</li>
            <li>Can convert between radical and exponential forms freely</li>
            <li>Negative rational exponents: a<sup>-m/n</sup> = 1/a<sup>m/n</sup></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RationalExponents;
