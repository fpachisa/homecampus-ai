import React, { useState } from 'react';

const StandardForm = () => {
  const [inputNumber, setInputNumber] = useState('68000000');
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  // Convert to standard form
  const toStandardForm = (num: string) => {
    try {
      const value = parseFloat(num);
      if (isNaN(value) || value === 0) return { coefficient: '0', exponent: '0', formatted: '0' };

      const exponent = Math.floor(Math.log10(Math.abs(value)));
      const coefficient = value / Math.pow(10, exponent);

      return {
        coefficient: coefficient.toFixed(2),
        exponent: exponent.toString(),
        formatted: `${coefficient.toFixed(2)} × 10^${exponent}`
      };
    } catch {
      return { coefficient: '0', exponent: '0', formatted: 'Invalid input' };
    }
  };

  const standardForm = toStandardForm(inputNumber);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Standard Form (Scientific Notation)</h1>
        <p className="text-lg">Writing very large and very small numbers efficiently</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is Standard Form? */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800">1. What is Standard Form?</h2>

          <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              <strong>Standard form</strong> (also called <strong>scientific notation</strong>) is a way to write very large or very small numbers in a compact form.
            </p>
            <div className="bg-white p-4 rounded mt-3">
              <p className="text-center text-2xl font-mono">
                a × 10<sup>k</sup>
              </p>
              <p className="text-center text-sm text-gray-600 mt-2">
                where 1 ≤ a &lt; 10 and k is an integer
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 rounded border-2 border-gray-300">
              <h3 className="font-bold mb-3 text-cyan-700">Coefficient (a)</h3>
              <p className="text-sm mb-2">
                A number between 1 and 10 (can equal 1, but never 10)
              </p>
              <p className="text-xs text-gray-600">Must have: 1 ≤ a &lt; 10</p>
            </div>
            <div className="bg-white p-4 rounded border-2 border-gray-300">
              <h3 className="font-bold mb-3 text-cyan-700">Exponent (k)</h3>
              <p className="text-sm mb-2">
                An integer showing how many places the decimal moves
              </p>
              <p className="text-xs text-gray-600">Positive for large numbers, negative for small numbers</p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded border-2 border-blue-300">
            <h3 className="font-bold text-blue-700 mb-2">Why Use Standard Form?</h3>
            <ul className="space-y-1 text-sm list-disc list-inside">
              <li>Makes very large numbers easier to read and write</li>
              <li>Makes very small numbers easier to read and write</li>
              <li>Easier to compare magnitudes of numbers</li>
              <li>Essential in science (astronomy, physics, chemistry)</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Writing Large Numbers */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800">2. Writing Large Numbers in Standard Form</h2>

          <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Process:</h3>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Place the decimal point after the first non-zero digit</li>
              <li>Count how many places you moved the decimal (this is k)</li>
              <li>For large numbers (≥ 10), k is positive</li>
              <li>Write as a × 10<sup>k</sup></li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Example: Convert 68,000,000 to standard form</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-mono text-lg">68,000,000</p>
                <p className="text-sm text-gray-600 mt-1">↓ Place decimal after first digit</p>
                <p className="font-mono">6.8</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-sm">Count places moved from original position:</p>
                <p className="font-mono">6<span className="text-red-500">.8000000</span> → moved 7 places left</p>
              </div>
              <div className="p-3 bg-green-50 rounded">
                <p className="text-sm font-semibold">Standard form:</p>
                <p className="font-mono text-xl text-center">6.8 × 10<sup>7</sup></p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded border-2 border-green-300">
            <h3 className="font-bold text-green-700 mb-2">More Examples:</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-mono">23,600,000 = 2.36 × 10<sup>7</sup></li>
              <li className="font-mono">361,000,000 = 3.61 × 10<sup>8</sup></li>
              <li className="font-mono">6,800,000,000 = 6.8 × 10<sup>9</sup></li>
            </ul>
          </div>
        </div>

        {/* Section 3: Writing Small Numbers */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800">3. Writing Small Numbers in Standard Form</h2>

          <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Process:</h3>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Place the decimal point after the first non-zero digit</li>
              <li>Count how many places you moved the decimal (this is k)</li>
              <li>For small numbers (&lt; 1), k is negative</li>
              <li>Write as a × 10<sup>k</sup></li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Example: Convert 0.00002360 to standard form</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-mono text-lg">0.00002360</p>
                <p className="text-sm text-gray-600 mt-1">↓ Place decimal after first non-zero digit</p>
                <p className="font-mono">2.360</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-sm">Count places moved from original position:</p>
                <p className="font-mono">0.00002<span className="text-red-500">.</span>360 → moved 5 places right</p>
                <p className="text-xs text-gray-600 mt-1">Moving right means negative exponent</p>
              </div>
              <div className="p-3 bg-green-50 rounded">
                <p className="text-sm font-semibold">Standard form:</p>
                <p className="font-mono text-xl text-center">2.36 × 10<sup>-5</sup></p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded border-2 border-green-300">
            <h3 className="font-bold text-green-700 mb-2">More Examples:</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-mono">0.000471 = 4.71 × 10<sup>-4</sup></li>
              <li className="font-mono">0.000000236 = 2.36 × 10<sup>-7</sup></li>
              <li className="font-mono">0.0007853 = 7.853 × 10<sup>-4</sup></li>
            </ul>
          </div>
        </div>

        {/* Section 4: Interactive Converter */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800">4. Interactive Standard Form Converter</h2>

          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="mb-4">
              <label className="text-sm block mb-2 font-semibold">Enter a number (ordinary form):</label>
              <input
                type="text"
                value={inputNumber}
                onChange={(e) => setInputNumber(e.target.value)}
                placeholder="e.g., 68000000 or 0.000023"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded text-lg"
              />
            </div>

            <div className="bg-white p-6 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Standard Form:</p>
              <p className="text-3xl font-mono text-center text-cyan-600 mb-4">
                {standardForm.coefficient} × 10<sup>{standardForm.exponent}</sup>
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-blue-50 rounded">
                  <p className="font-semibold text-blue-800">Coefficient (a):</p>
                  <p className="font-mono text-lg">{standardForm.coefficient}</p>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <p className="font-semibold text-green-800">Exponent (k):</p>
                  <p className="font-mono text-lg">{standardForm.exponent}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Converting Back to Ordinary Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800">5. Converting Standard Form to Ordinary Form</h2>

          <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Rules:</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <p className="font-semibold mb-1">If k is positive:</p>
                <p className="text-sm">Move decimal point k places to the RIGHT</p>
                <p className="text-xs text-gray-600">(Makes number larger)</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold mb-1">If k is negative:</p>
                <p className="text-sm">Move decimal point |k| places to the LEFT</p>
                <p className="text-xs text-gray-600">(Makes number smaller)</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Example 1: Convert 2.57 × 10<sup>4</sup> to ordinary form</h3>
            <div className="space-y-2">
              <p className="font-mono">2.57 × 10<sup>4</sup></p>
              <p className="text-sm text-gray-600">↓ k = 4 (positive), so move decimal 4 places RIGHT</p>
              <p className="font-mono">2.5700 → 25700</p>
              <p className="text-center font-bold text-green-600">= 25,700</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Example 2: Convert 7.853 × 10<sup>-3</sup> to ordinary form</h3>
            <div className="space-y-2">
              <p className="font-mono">7.853 × 10<sup>-3</sup></p>
              <p className="text-sm text-gray-600">↓ k = -3 (negative), so move decimal 3 places LEFT</p>
              <p className="font-mono">007.853 → 0.007853</p>
              <p className="text-center font-bold text-green-600">= 0.007853</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded border-2 border-green-300">
            <h3 className="font-bold text-green-700 mb-2">More Examples:</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-mono">2.3 × 10<sup>3</sup> = 2,300</li>
              <li className="font-mono">2.3 × 10<sup>-2</sup> = 0.023</li>
              <li className="font-mono">6.04 × 10<sup>7</sup> = 60,400,000</li>
              <li className="font-mono">4.215 × 10<sup>-1</sup> = 0.4215</li>
            </ul>
          </div>
        </div>

        {/* Section 6: Understanding k and Place Value */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800">6. Understanding the Exponent k</h2>

          <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Place Value Rule:</h3>
            <p className="mb-3">
              10<sup>k</sup> is the <strong>place value</strong> of the first significant figure in the original number.
            </p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Determining k:</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>If original number ≥ 10:</strong> k is positive</li>
              <li><strong>If original number is between 1 and 10:</strong> k = 0</li>
              <li><strong>If original number &lt; 1:</strong> k is negative</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Examples:</p>
            <ul className="space-y-1 text-sm">
              <li>23,600,000: First digit 2 is in the 10,000,000s place → 10<sup>7</sup> → k = 7</li>
              <li>0.000471: First digit 4 is in the 0.0001s place → 10<sup>-4</sup> → k = -4</li>
            </ul>
          </div>
        </div>

        {/* Section 7: Real-World Applications */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800">7. Real-World Applications</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded border-2 border-blue-300">
              <h3 className="font-bold text-blue-700 mb-3">Astronomy:</h3>
              <ul className="space-y-2 text-sm">
                <li>Distance to sun: 1.5 × 10<sup>11</sup> m</li>
                <li>Speed of light: 3.0 × 10<sup>8</sup> m/s</li>
                <li>1 parsec: 3.1 × 10<sup>16</sup> m</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded border-2 border-green-300">
              <h3 className="font-bold text-green-700 mb-3">Microscopy:</h3>
              <ul className="space-y-2 text-sm">
                <li>Red blood cell: 4 × 10<sup>-6</sup> m</li>
                <li>Virus size: ~1 × 10<sup>-7</sup> m</li>
                <li>Atom radius: ~1 × 10<sup>-10</sup> m</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded border-2 border-purple-300">
            <h3 className="font-bold text-purple-700 mb-3">Other Applications:</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Population:</strong> World population ≈ 8 × 10<sup>9</sup> people</li>
              <li><strong>Probability:</strong> Winning lottery ≈ 1 × 10<sup>-8</sup></li>
              <li><strong>Computing:</strong> 1 GB = 1 × 10<sup>9</sup> bytes</li>
            </ul>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-cyan-100 rounded-lg font-semibold hover:bg-cyan-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Writing in Scientific Notation
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-cyan-500">
                <p className="font-semibold mb-3">Write in scientific notation: 23,600,000</p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">23,600,000</p>
                  <p className="text-sm text-gray-600">↓ Place decimal after first digit</p>
                  <p className="font-mono">2.36</p>
                  <p className="text-sm text-gray-600">↓ Count places: moved 7 to the left</p>
                  <p className="font-mono text-green-600 font-bold">= 2.36 × 10<sup>7</sup></p>
                </div>

                <p className="font-semibold mb-3 mt-6">Write in scientific notation: 0.0000236</p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">0.0000236</p>
                  <p className="text-sm text-gray-600">↓ Place decimal after first non-zero digit</p>
                  <p className="font-mono">2.36</p>
                  <p className="text-sm text-gray-600">↓ Count places: moved 5 to the right (negative)</p>
                  <p className="font-mono text-green-600 font-bold">= 2.36 × 10<sup>-5</sup></p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-cyan-100 rounded-lg font-semibold hover:bg-cyan-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Converting to Ordinary Form
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-cyan-500">
                <p className="font-semibold mb-3">Write as an ordinary number: 2.57 × 10<sup>4</sup></p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">2.57 × 10<sup>4</sup></p>
                  <p className="text-sm text-gray-600">↓ k = 4 (positive), move decimal 4 places RIGHT</p>
                  <p className="font-mono">2.5700 → 25,700</p>
                  <p className="font-mono text-green-600 font-bold">= 25,700</p>
                </div>

                <p className="font-semibold mb-3 mt-6">Write as an ordinary number: 7.853 × 10<sup>-3</sup></p>
                <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="font-mono">7.853 × 10<sup>-3</sup></p>
                  <p className="text-sm text-gray-600">↓ k = -3 (negative), move decimal 3 places LEFT</p>
                  <p className="font-mono">007.853 → 0.007853</p>
                  <p className="font-mono text-green-600 font-bold">= 0.007853</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">1. Write in scientific notation:</p>
              <div className="ml-4 space-y-1 text-sm">
                <p>a) 230</p>
                <p>b) 53,900</p>
                <p>c) 0.0361</p>
                <p>d) 0.000680</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-cyan-600 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-1 text-sm">
                  <p><strong>a)</strong> 230 = 2.3 × 10<sup>2</sup></p>
                  <p><strong>b)</strong> 53,900 = 5.39 × 10<sup>4</sup></p>
                  <p><strong>c)</strong> 0.0361 = 3.61 × 10<sup>-2</sup></p>
                  <p><strong>d)</strong> 0.000680 = 6.80 × 10<sup>-4</sup> or 6.8 × 10<sup>-4</sup></p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">2. Write as an ordinary number:</p>
              <div className="ml-4 space-y-1 text-sm">
                <p>a) 2.3 × 10<sup>3</sup></p>
                <p>b) 2.3 × 10<sup>-2</sup></p>
                <p>c) 5.64 × 10<sup>5</sup></p>
                <p>d) 7.931 × 10<sup>-4</sup></p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-cyan-600 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-1 text-sm">
                  <p><strong>a)</strong> 2.3 × 10<sup>3</sup> = 2,300</p>
                  <p><strong>b)</strong> 2.3 × 10<sup>-2</sup> = 0.023</p>
                  <p><strong>c)</strong> 5.64 × 10<sup>5</sup> = 564,000</p>
                  <p><strong>d)</strong> 7.931 × 10<sup>-4</sup> = 0.0007931</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">3. Write each quantity in standard form:</p>
              <div className="ml-4 space-y-1 text-sm">
                <p>a) There are approximately 4 million red blood cells in a drop of blood.</p>
                <p>b) The thickness of a coin is about 0.0008 m.</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-cyan-600 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2 text-sm">
                  <p><strong>a)</strong> 4 million = 4,000,000 = 4 × 10<sup>6</sup></p>
                  <p><strong>b)</strong> 0.0008 m = 8 × 10<sup>-4</sup> m</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Standard form: a × 10<sup>k</sup> where 1 ≤ a &lt; 10</li>
            <li>For large numbers (≥ 10): k is positive</li>
            <li>For small numbers (&lt; 1): k is negative</li>
            <li>To convert TO standard form: count decimal places moved</li>
            <li>To convert FROM standard form: move decimal k places</li>
            <li>Positive k → move RIGHT (larger), Negative k → move LEFT (smaller)</li>
            <li>Essential for astronomy, microscopy, and computing</li>
            <li>Makes comparing magnitudes of very different numbers easier</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StandardForm;
