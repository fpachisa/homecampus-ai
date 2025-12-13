import { useState } from 'react';

const FractionsAsDecimals = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Expressing Fractions as Decimals</h1>
        <p className="text-lg">Learn to convert fractions to decimals using three powerful methods!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Fractions with Denominator 10 or 100 */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">1. Fractions with Denominator 10 or 100</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Easy Cases!</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When the denominator is <strong>10</strong> or <strong>100</strong>, conversion is super easy because our decimal system is based on powers of 10!
            </p>
          </div>

          {/* Tenths */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Tenths (Denominator = 10)</h3>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Rule:</strong> The numerator goes in the <strong>tenths place</strong> (first digit after decimal point).
              </p>
            </div>

            {/* Place value visual */}
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Ones</th>
                    <th className="border dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">.</th>
                    <th className="border dark:border-gray-600 p-2 text-blue-600 dark:text-blue-400">Tenths</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">0</td>
                    <td className="border dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">.</td>
                    <td className="border dark:border-gray-600 p-2 text-blue-600 dark:text-blue-400 font-bold">3</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">3/10 = 0.3</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="font-mono text-gray-900 dark:text-gray-100">1/10 = <strong className="text-blue-600 dark:text-blue-400">0.1</strong></p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="font-mono text-gray-900 dark:text-gray-100">3/10 = <strong className="text-blue-600 dark:text-blue-400">0.3</strong></p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="font-mono text-gray-900 dark:text-gray-100">7/10 = <strong className="text-blue-600 dark:text-blue-400">0.7</strong></p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="font-mono text-gray-900 dark:text-gray-100">9/10 = <strong className="text-blue-600 dark:text-blue-400">0.9</strong></p>
              </div>
            </div>
          </div>

          {/* Hundredths */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Hundredths (Denominator = 100)</h3>

            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Rule:</strong> The numerator uses the <strong>tenths and hundredths places</strong> (two digits after decimal point).
              </p>
            </div>

            {/* Place value visual */}
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Ones</th>
                    <th className="border dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">.</th>
                    <th className="border dark:border-gray-600 p-2 text-blue-600 dark:text-blue-400">Tenths</th>
                    <th className="border dark:border-gray-600 p-2 text-purple-600 dark:text-purple-400">Hundredths</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">0</td>
                    <td className="border dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">.</td>
                    <td className="border dark:border-gray-600 p-2 text-blue-600 dark:text-blue-400 font-bold">1</td>
                    <td className="border dark:border-gray-600 p-2 text-purple-600 dark:text-purple-400 font-bold">4</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">14/100 = 0.14</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="font-mono text-gray-900 dark:text-gray-100">14/100 = <strong className="text-purple-600 dark:text-purple-400">0.14</strong></p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="font-mono text-gray-900 dark:text-gray-100">26/100 = <strong className="text-purple-600 dark:text-purple-400">0.26</strong></p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="font-mono text-gray-900 dark:text-gray-100">3/100 = <strong className="text-purple-600 dark:text-purple-400">0.03</strong></p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="font-mono text-gray-900 dark:text-gray-100">7/100 = <strong className="text-purple-600 dark:text-purple-400">0.07</strong></p>
              </div>
            </div>

            <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Watch out!</strong> For single-digit numerators, add a <strong>zero</strong> in the tenths place!
              </p>
              <p className="font-mono mt-2 text-gray-800 dark:text-gray-200">
                3/100 = 0.<strong className="text-yellow-600 dark:text-yellow-400">0</strong>3 (not 0.3!)
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Using Equivalent Fractions */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">2. Using Equivalent Fractions</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Strategy</h3>
            <p className="text-gray-800 dark:text-gray-200">
              If the denominator isn't 10 or 100, find an <strong>equivalent fraction</strong> that has 10 or 100 as the denominator!
            </p>
            <p className="mt-2 text-gray-800 dark:text-gray-200">
              <strong>Remember:</strong> Multiply both numerator and denominator by the same number.
            </p>
          </div>

          {/* Examples */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Converting to Tenths</h3>

            <div className="space-y-4">
              {/* 1/2 = 5/10 = 0.5 */}
              <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-lg">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="font-mono text-lg text-gray-900 dark:text-gray-100">1/2</span>
                  <span className="text-gray-500">→</span>
                  <span className="font-mono text-lg text-gray-900 dark:text-gray-100">
                    <span className="text-sm text-gray-500">(×5)</span> 5/10
                  </span>
                  <span className="text-gray-500">=</span>
                  <span className="font-mono text-lg font-bold text-green-600 dark:text-green-400">0.5</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">2 × 5 = 10, so multiply top and bottom by 5</p>
              </div>

              {/* 1/5 = 2/10 = 0.2 */}
              <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-lg">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="font-mono text-lg text-gray-900 dark:text-gray-100">1/5</span>
                  <span className="text-gray-500">→</span>
                  <span className="font-mono text-lg text-gray-900 dark:text-gray-100">
                    <span className="text-sm text-gray-500">(×2)</span> 2/10
                  </span>
                  <span className="text-gray-500">=</span>
                  <span className="font-mono text-lg font-bold text-green-600 dark:text-green-400">0.2</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">5 × 2 = 10, so multiply top and bottom by 2</p>
              </div>

              {/* 3/5 = 6/10 = 0.6 */}
              <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-lg">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="font-mono text-lg text-gray-900 dark:text-gray-100">3/5</span>
                  <span className="text-gray-500">→</span>
                  <span className="font-mono text-lg text-gray-900 dark:text-gray-100">
                    <span className="text-sm text-gray-500">(×2)</span> 6/10
                  </span>
                  <span className="text-gray-500">=</span>
                  <span className="font-mono text-lg font-bold text-green-600 dark:text-green-400">0.6</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Converting to Hundredths</h3>

            <div className="space-y-4">
              {/* 1/4 = 25/100 = 0.25 */}
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="font-mono text-lg text-gray-900 dark:text-gray-100">1/4</span>
                  <span className="text-gray-500">→</span>
                  <span className="font-mono text-lg text-gray-900 dark:text-gray-100">
                    <span className="text-sm text-gray-500">(×25)</span> 25/100
                  </span>
                  <span className="text-gray-500">=</span>
                  <span className="font-mono text-lg font-bold text-purple-600 dark:text-purple-400">0.25</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">4 × 25 = 100, so multiply top and bottom by 25</p>
              </div>

              {/* 3/4 = 75/100 = 0.75 */}
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="font-mono text-lg text-gray-900 dark:text-gray-100">3/4</span>
                  <span className="text-gray-500">→</span>
                  <span className="font-mono text-lg text-gray-900 dark:text-gray-100">
                    <span className="text-sm text-gray-500">(×25)</span> 75/100
                  </span>
                  <span className="text-gray-500">=</span>
                  <span className="font-mono text-lg font-bold text-purple-600 dark:text-purple-400">0.75</span>
                </div>
              </div>

              {/* 7/20 = 35/100 = 0.35 */}
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="font-mono text-lg text-gray-900 dark:text-gray-100">7/20</span>
                  <span className="text-gray-500">→</span>
                  <span className="font-mono text-lg text-gray-900 dark:text-gray-100">
                    <span className="text-sm text-gray-500">(×5)</span> 35/100
                  </span>
                  <span className="text-gray-500">=</span>
                  <span className="font-mono text-lg font-bold text-purple-600 dark:text-purple-400">0.35</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">20 × 5 = 100, so multiply top and bottom by 5</p>
              </div>
            </div>
          </div>

          {/* Common conversions table */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Common Fraction-Decimal Equivalents</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">Fraction</th>
                    <th className="border dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">Equivalent</th>
                    <th className="border dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">Decimal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">1/2</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">5/10</td>
                    <td className="border dark:border-gray-600 p-2 font-mono font-bold text-blue-600 dark:text-blue-400">0.5</td>
                  </tr>
                  <tr>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">1/4</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">25/100</td>
                    <td className="border dark:border-gray-600 p-2 font-mono font-bold text-blue-600 dark:text-blue-400">0.25</td>
                  </tr>
                  <tr>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">3/4</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">75/100</td>
                    <td className="border dark:border-gray-600 p-2 font-mono font-bold text-blue-600 dark:text-blue-400">0.75</td>
                  </tr>
                  <tr>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">1/5</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">2/10</td>
                    <td className="border dark:border-gray-600 p-2 font-mono font-bold text-blue-600 dark:text-blue-400">0.2</td>
                  </tr>
                  <tr>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">2/5</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">4/10</td>
                    <td className="border dark:border-gray-600 p-2 font-mono font-bold text-blue-600 dark:text-blue-400">0.4</td>
                  </tr>
                  <tr>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">3/5</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">6/10</td>
                    <td className="border dark:border-gray-600 p-2 font-mono font-bold text-blue-600 dark:text-blue-400">0.6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3: Using Long Division */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">3. Using Long Division</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">When to Use Long Division</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When you can't easily make an equivalent fraction with 10 or 100, use <strong>long division</strong>!
            </p>
            <p className="mt-2 text-gray-800 dark:text-gray-200">
              <strong>Remember:</strong> To convert a/b to a decimal, divide a ÷ b
            </p>
          </div>

          {/* Example 1: 3 ÷ 5 = 0.6 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 3/5 = 3 ÷ 5</h3>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="font-mono text-lg bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-gray-900 dark:text-gray-100">
{`      0.6
    ─────
  5 ) 3.0
      3 0
      ───
        0`}
                  </pre>
                </div>
              </div>
              <div className="flex-1">
                <ol className="list-decimal ml-4 space-y-2 text-gray-800 dark:text-gray-200">
                  <li>3 ÷ 5 doesn't go evenly</li>
                  <li>Add decimal point and zero: 3.0</li>
                  <li>30 ÷ 5 = 6</li>
                  <li>No remainder!</li>
                </ol>
                <p className="mt-4 text-xl font-bold text-orange-600 dark:text-orange-400">3/5 = 0.6</p>
              </div>
            </div>
          </div>

          {/* Example 2: 9 ÷ 4 = 2.25 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 9/4 = 9 ÷ 4</h3>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="font-mono text-lg bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-gray-900 dark:text-gray-100">
{`      2.25
    ─────
  4 ) 9.00
      8
      ──
      1 0
        8
      ──
        20
        20
        ──
         0`}
                  </pre>
                </div>
              </div>
              <div className="flex-1">
                <ol className="list-decimal ml-4 space-y-2 text-gray-800 dark:text-gray-200">
                  <li>9 ÷ 4 = 2 remainder 1</li>
                  <li>Bring down 0: 10 ÷ 4 = 2 remainder 2</li>
                  <li>Bring down 0: 20 ÷ 4 = 5</li>
                  <li>No remainder!</li>
                </ol>
                <p className="mt-4 text-xl font-bold text-orange-600 dark:text-orange-400">9/4 = 2.25</p>
              </div>
            </div>
          </div>

          {/* Alternative method note */}
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">Alternative Method for 9/4</h3>
            <p className="text-gray-800 dark:text-gray-200">
              You can also use equivalent fractions:
            </p>
            <p className="font-mono mt-2 text-gray-800 dark:text-gray-200">
              9/4 = 9 ÷ 4 = 2 + 1/4 = 2 + 25/100 = 2 + 0.25 = <strong className="text-yellow-600 dark:text-yellow-400">2.25</strong>
            </p>
          </div>
        </section>

        {/* Section 4: Rounding Decimals */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">4. Rounding Decimals</h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Repeating Decimals</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Some fractions produce decimals that <strong>never end</strong>! In these cases, we <strong>round</strong> to a specified number of decimal places.
            </p>
          </div>

          {/* Example: 5/6 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: 5/6 = 5 ÷ 6</h3>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="font-mono text-lg bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-gray-900 dark:text-gray-100">
{`      0.833...
    ─────────
  6 ) 5.000
      4 8
      ───
        20
        18
        ──
         20
         18
         ──
          2...`}
                  </pre>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-800 dark:text-gray-200 mb-4">
                  The division keeps going! We get 0.8333... (3 repeats forever)
                </p>
                <div className="space-y-2">
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>To 1 decimal place:</strong> 5/6 ≈ <span className="font-bold text-red-600 dark:text-red-400">0.8</span>
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>To 2 decimal places:</strong> 5/6 ≈ <span className="font-bold text-red-600 dark:text-red-400">0.83</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rounding rules */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Rounding Rules</h3>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                Look at the digit <strong>after</strong> the place you're rounding to:
              </p>
              <ul className="mt-2 ml-4 text-gray-800 dark:text-gray-200">
                <li>• If it's <strong>5 or more</strong> → round UP</li>
                <li>• If it's <strong>less than 5</strong> → round DOWN (keep the same)</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Rounding to 1 decimal place</h4>
                <p className="font-mono text-gray-900 dark:text-gray-100">0.83... → Look at 3</p>
                <p className="text-gray-800 dark:text-gray-200">3 {"<"} 5, so round down</p>
                <p className="font-bold text-green-600 dark:text-green-400">Answer: 0.8</p>
              </div>
              <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Rounding to 2 decimal places</h4>
                <p className="font-mono text-gray-900 dark:text-gray-100">0.833... → Look at third 3</p>
                <p className="text-gray-800 dark:text-gray-200">3 {"<"} 5, so round down</p>
                <p className="font-bold text-green-600 dark:text-green-400">Answer: 0.83</p>
              </div>
            </div>
          </div>

          {/* More rounding examples */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">More Rounding Examples</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">Fraction</th>
                    <th className="border dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">Exact Decimal</th>
                    <th className="border dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">1 d.p.</th>
                    <th className="border dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">2 d.p.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">1/3</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">0.333...</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-blue-600 dark:text-blue-400">0.3</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-blue-600 dark:text-blue-400">0.33</td>
                  </tr>
                  <tr>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">2/3</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">0.666...</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-blue-600 dark:text-blue-400">0.7</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-blue-600 dark:text-blue-400">0.67</td>
                  </tr>
                  <tr>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">5/6</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">0.833...</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-blue-600 dark:text-blue-400">0.8</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-blue-600 dark:text-blue-400">0.83</td>
                  </tr>
                  <tr>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">1/7</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-gray-900 dark:text-gray-100">0.142857...</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-blue-600 dark:text-blue-400">0.1</td>
                    <td className="border dark:border-gray-600 p-2 font-mono text-blue-600 dark:text-blue-400">0.14</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Note: Use ≈ (approximately equal) for rounded values</p>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Practice 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-teal-600 dark:text-teal-400">Practice 1</h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">Express 4/5 as a decimal.</p>
              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="px-4 py-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded transition-colors"
              >
                {showSolution1 ? 'Hide Solution' : 'Show Solution'}
              </button>
              {showSolution1 && (
                <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/30 rounded border border-teal-300 dark:border-teal-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>Method 1 (Equivalent fractions):</strong><br/>
                    4/5 = (4×2)/(5×2) = 8/10 = <strong className="text-teal-600 dark:text-teal-400">0.8</strong><br/><br/>
                    <strong>Method 2 (Long division):</strong><br/>
                    4 ÷ 5 = 0.8
                  </p>
                </div>
              )}
            </div>

            {/* Practice 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-teal-600 dark:text-teal-400">Practice 2</h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">Express 6/8 as a decimal.</p>
              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded transition-colors"
              >
                {showSolution2 ? 'Hide Solution' : 'Show Solution'}
              </button>
              {showSolution2 && (
                <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/30 rounded border border-teal-300 dark:border-teal-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>Step 1:</strong> Simplify first: 6/8 = 3/4<br/>
                    <strong>Step 2:</strong> Convert: 3/4 = 75/100 = <strong className="text-teal-600 dark:text-teal-400">0.75</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Practice 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-teal-600 dark:text-teal-400">Practice 3</h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">Express 2/3 as a decimal correct to 1 decimal place.</p>
              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded transition-colors"
              >
                {showSolution3 ? 'Hide Solution' : 'Show Solution'}
              </button>
              {showSolution3 && (
                <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/30 rounded border border-teal-300 dark:border-teal-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    2 ÷ 3 = 0.666...<br/>
                    Looking at second digit (6) after decimal: 6 ≥ 5, so round up<br/>
                    2/3 ≈ <strong className="text-teal-600 dark:text-teal-400">0.7</strong> (1 d.p.)
                  </p>
                </div>
              )}
            </div>

            {/* Practice 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-teal-600 dark:text-teal-400">Practice 4</h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">Express 17/6 as a decimal correct to 2 decimal places.</p>
              <button
                onClick={() => setShowSolution4(!showSolution4)}
                className="px-4 py-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded transition-colors"
              >
                {showSolution4 ? 'Hide Solution' : 'Show Solution'}
              </button>
              {showSolution4 && (
                <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/30 rounded border border-teal-300 dark:border-teal-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    17 ÷ 6 = 2.833...<br/>
                    Looking at third digit (3) after decimal: 3 {"<"} 5, so round down<br/>
                    17/6 ≈ <strong className="text-teal-600 dark:text-teal-400">2.83</strong> (2 d.p.)
                  </p>
                </div>
              )}
            </div>

            {/* Practice 5 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-teal-600 dark:text-teal-400">Practice 5</h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">Express 1 ÷ 4 as a decimal.</p>
              <button
                onClick={() => setShowSolution5(!showSolution5)}
                className="px-4 py-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded transition-colors"
              >
                {showSolution5 ? 'Hide Solution' : 'Show Solution'}
              </button>
              {showSolution5 && (
                <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/30 rounded border border-teal-300 dark:border-teal-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    1 ÷ 4 = 1/4 = 25/100 = <strong className="text-teal-600 dark:text-teal-400">0.25</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section>
          <div className="bg-blue-100 dark:bg-blue-900/40 p-6 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">Key Takeaways</h2>
            <ul className="space-y-3 text-gray-800 dark:text-gray-200">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">1.</span>
                <span>Fractions with denominator <strong>10</strong>: numerator goes in tenths place (3/10 = 0.3)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">2.</span>
                <span>Fractions with denominator <strong>100</strong>: numerator uses 2 decimal places (14/100 = 0.14)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">3.</span>
                <span>Use <strong>equivalent fractions</strong> to convert to 10ths or 100ths when possible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">4.</span>
                <span>Use <strong>long division</strong> when equivalent fractions don't work easily</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">5.</span>
                <span><strong>Round</strong> repeating decimals: 5+ rounds up, 4- rounds down</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">6.</span>
                <span>Use <strong>≈</strong> (approximately equal) for rounded values</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FractionsAsDecimals;
