import { useState } from 'react';

const ComparingOrderingNumbers = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showPractice1, setShowPractice1] = useState(false);
  const [showPractice2, setShowPractice2] = useState(false);
  const [showPractice3, setShowPractice3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Comparing & Ordering Numbers</h1>
        <p className="text-lg">Using symbols to compare, ordering from smallest to largest, and rounding large numbers</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Comparing Large Numbers */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">1. Comparing Large Numbers</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Comparison Symbols</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-gray-300 dark:border-gray-600">
                <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">&lt;</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Less than</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">smaller number first</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-gray-300 dark:border-gray-600">
                <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">&gt;</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Greater than</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">bigger number first</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-gray-300 dark:border-gray-600">
                <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">=</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Equal to</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">same value</p>
              </div>
            </div>
          </div>

          {/* Tip for remembering */}
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">💡 Memory Trick: The Hungry Crocodile!</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Think of &lt; and &gt; as a crocodile's mouth. The crocodile is <strong>hungry</strong> and always wants to eat the <strong>bigger number</strong>!
            </p>
            <div className="flex justify-center items-center gap-4 mt-3 text-2xl">
              <span className="text-gray-900 dark:text-gray-100">5</span>
              <span className="text-green-600 dark:text-green-400 text-4xl">&lt;</span>
              <span className="text-gray-900 dark:text-gray-100 font-bold">8</span>
              <span className="text-gray-500 dark:text-gray-400 ml-4">(crocodile eating 8)</span>
            </div>
          </div>

          {/* Steps to Compare */}
          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Steps to Compare Large Numbers:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>First, check the <strong>number of digits</strong> - more digits = bigger number</li>
              <li>If same digits, compare from the <strong>left</strong> (biggest place value first)</li>
              <li>Find the first digit that's different</li>
              <li>The number with the bigger digit wins!</li>
            </ol>
          </div>

          {/* Visual Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Compare 3,456,789 and 3,465,123</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-center mb-4">
                <thead>
                  <tr>
                    <th className="px-2 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">Number</th>
                    <th className="px-2 py-2 bg-pink-200 dark:bg-pink-800 text-pink-800 dark:text-pink-200">M</th>
                    <th className="px-2 py-2 bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200">100K</th>
                    <th className="px-2 py-2 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200">10K</th>
                    <th className="px-2 py-2 bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200">1K</th>
                    <th className="px-2 py-2 bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200">100</th>
                    <th className="px-2 py-2 bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200">10</th>
                    <th className="px-2 py-2 bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200">1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">3,456,789</td>
                    <td className="px-2 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">3</td>
                    <td className="px-2 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">4</td>
                    <td className="px-2 py-2 border border-gray-300 dark:border-gray-600 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 font-bold">5</td>
                    <td className="px-2 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">6</td>
                    <td className="px-2 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">7</td>
                    <td className="px-2 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">8</td>
                    <td className="px-2 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">9</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">3,465,123</td>
                    <td className="px-2 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">3</td>
                    <td className="px-2 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">4</td>
                    <td className="px-2 py-2 border border-gray-300 dark:border-gray-600 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 font-bold">6</td>
                    <td className="px-2 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">5</td>
                    <td className="px-2 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">1</td>
                    <td className="px-2 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">2</td>
                    <td className="px-2 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border border-green-300 dark:border-green-600">
              <p className="text-gray-900 dark:text-gray-100">
                Same digits until the 10K place: <strong>5 &lt; 6</strong>
              </p>
              <p className="text-gray-900 dark:text-gray-100 mt-2">
                Therefore: <strong>3,456,789 &lt; 3,465,123</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Ordering Numbers */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">2. Ordering Numbers</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Two Ways to Order:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-green-300 dark:border-green-600">
                <h4 className="font-bold text-green-700 dark:text-green-300">Ascending Order</h4>
                <p className="text-gray-800 dark:text-gray-200">Smallest → Largest</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Going UP like climbing stairs</p>
                <p className="font-mono mt-2 text-gray-900 dark:text-gray-100">1 → 2 → 3 → 4 → 5</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-red-300 dark:border-red-600">
                <h4 className="font-bold text-red-700 dark:text-red-300">Descending Order</h4>
                <p className="text-gray-800 dark:text-gray-200">Largest → Smallest</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Going DOWN like a slide</p>
                <p className="font-mono mt-2 text-gray-900 dark:text-gray-100">5 → 4 → 3 → 2 → 1</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900/50 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-900/70 transition text-gray-900 dark:text-gray-100 mb-4"
          >
            {showExample1 ? '▼' : '▶'} Example: Order 2,345,000 | 2,340,500 | 2,345,001 in ascending order
          </button>

          {showExample1 && (
            <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-purple-500 dark:border-purple-400 mb-4">
              <div className="space-y-3 text-gray-800 dark:text-gray-200">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 1:</strong> All have 7 digits, so compare from left</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 2:</strong> All start with 2,34...</p>
                  <p>Compare the 4th digit (thousands):</p>
                  <ul className="ml-4 mt-2">
                    <li>2,34<span className="text-red-600 dark:text-red-400 font-bold">0</span>,500 → 0</li>
                    <li>2,34<span className="text-red-600 dark:text-red-400 font-bold">5</span>,000 → 5</li>
                    <li>2,34<span className="text-red-600 dark:text-red-400 font-bold">5</span>,001 → 5</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 3:</strong> 2,340,500 is smallest (0 in thousands)</p>
                  <p>Compare 2,345,000 and 2,345,001:</p>
                  <p>Ones place: 0 vs 1 → 2,345,000 is smaller</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded">
                  <p><strong>Ascending order:</strong></p>
                  <p className="font-mono">2,340,500 &lt; 2,345,000 &lt; 2,345,001</p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Section 3: Rounding Large Numbers */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">3. Rounding Large Numbers</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Rounding Rules:</h3>
            <div className="space-y-2 text-gray-800 dark:text-gray-200">
              <p>Look at the digit <strong>one place to the right</strong> of where you're rounding to:</p>
              <ul className="list-disc list-inside ml-4">
                <li>If it's <strong>0, 1, 2, 3, or 4</strong> → Round DOWN (keep the digit the same)</li>
                <li>If it's <strong>5, 6, 7, 8, or 9</strong> → Round UP (add 1 to the digit)</li>
              </ul>
              <p className="mt-2">Then change all digits to the right to zeros!</p>
            </div>
          </div>

          {/* Rounding Examples */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Rounding Examples for 3,456,789:</h3>

            <div className="space-y-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="text-gray-900 dark:text-gray-100">
                  <strong>Round to nearest 10:</strong> 3,456,78<span className="text-red-600 dark:text-red-400 underline">9</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">9 ≥ 5, so round up → <strong>3,456,790</strong></p>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded">
                <p className="text-gray-900 dark:text-gray-100">
                  <strong>Round to nearest 1,000:</strong> 3,456,<span className="text-red-600 dark:text-red-400 underline">7</span>89
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">7 ≥ 5, so round up → <strong>3,457,000</strong></p>
              </div>

              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded">
                <p className="text-gray-900 dark:text-gray-100">
                  <strong>Round to nearest 100,000:</strong> 3,4<span className="text-red-600 dark:text-red-400 underline">5</span>6,789
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">5 ≥ 5, so round up → <strong>3,500,000</strong></p>
              </div>

              <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded">
                <p className="text-gray-900 dark:text-gray-100">
                  <strong>Round to nearest million:</strong> 3,<span className="text-red-600 dark:text-red-400 underline">4</span>56,789
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">4 &lt; 5, so round down → <strong>3,000,000</strong></p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowExample2(!showExample2)}
            className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900/50 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-900/70 transition text-gray-900 dark:text-gray-100 mb-4"
          >
            {showExample2 ? '▼' : '▶'} Example: Round 7,849,521 to the nearest hundred thousand
          </button>

          {showExample2 && (
            <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-purple-500 dark:border-purple-400 mb-4">
              <div className="space-y-3 text-gray-800 dark:text-gray-200">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 1:</strong> Find the hundred thousands digit: 7,<span className="text-blue-600 dark:text-blue-400 font-bold">8</span>49,521</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 2:</strong> Look at the digit to its right (ten thousands): 7,8<span className="text-red-600 dark:text-red-400 font-bold">4</span>9,521</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 3:</strong> 4 &lt; 5, so round DOWN (keep the 8)</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded">
                  <p><strong>Answer:</strong> 7,800,000</p>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => setShowExample3(!showExample3)}
            className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900/50 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-900/70 transition text-gray-900 dark:text-gray-100 mb-4"
          >
            {showExample3 ? '▼' : '▶'} Example: Round 4,950,000 to the nearest million
          </button>

          {showExample3 && (
            <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-purple-500 dark:border-purple-400 mb-4">
              <div className="space-y-3 text-gray-800 dark:text-gray-200">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 1:</strong> Find the millions digit: <span className="text-blue-600 dark:text-blue-400 font-bold">4</span>,950,000</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 2:</strong> Look at the digit to its right (hundred thousands): 4,<span className="text-red-600 dark:text-red-400 font-bold">9</span>50,000</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 3:</strong> 9 ≥ 5, so round UP (4 becomes 5)</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded">
                  <p><strong>Answer:</strong> 5,000,000</p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. Compare using &lt;, &gt;, or =
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) 5,234,567 ___ 5,243,567</p>
                <p>b) 8,000,001 ___ 7,999,999</p>
                <p>c) 3,500,000 ___ 3,500,000</p>
              </div>
              <button
                onClick={() => setShowPractice1(!showPractice1)}
                className="mt-3 px-4 py-2 bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white rounded transition-colors"
              >
                {showPractice1 ? 'Hide' : 'Show'} Solutions
              </button>
              {showPractice1 && (
                <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> 5,234,567 <span className="text-red-600 dark:text-red-400">&lt;</span> 5,243,567 (3 &lt; 4 in ten thousands)</p>
                  <p><strong>b)</strong> 8,000,001 <span className="text-green-600 dark:text-green-400">&gt;</span> 7,999,999 (8 &gt; 7 in millions)</p>
                  <p><strong>c)</strong> 3,500,000 <span className="text-blue-600 dark:text-blue-400">=</span> 3,500,000 (same number)</p>
                </div>
              )}
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Arrange in descending order:
              </p>
              <p className="ml-4 text-sm text-gray-800 dark:text-gray-200">
                4,567,890 | 4,576,890 | 4,567,980 | 4,567,809
              </p>
              <button
                onClick={() => setShowPractice2(!showPractice2)}
                className="mt-3 px-4 py-2 bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white rounded transition-colors"
              >
                {showPractice2 ? 'Hide' : 'Show'} Solution
              </button>
              {showPractice2 && (
                <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>Descending (largest to smallest):</strong></p>
                  <p className="font-mono">4,576,890 &gt; 4,567,980 &gt; 4,567,890 &gt; 4,567,809</p>
                </div>
              )}
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                3. Round 6,385,472 to:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) Nearest ten thousand</p>
                <p>b) Nearest hundred thousand</p>
                <p>c) Nearest million</p>
              </div>
              <button
                onClick={() => setShowPractice3(!showPractice3)}
                className="mt-3 px-4 py-2 bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white rounded transition-colors"
              >
                {showPractice3 ? 'Hide' : 'Show'} Solutions
              </button>
              {showPractice3 && (
                <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> 6,390,000 (5 in thousands, so round up)</p>
                  <p><strong>b)</strong> 6,400,000 (8 in ten thousands, so round up)</p>
                  <p><strong>c)</strong> 6,000,000 (3 in hundred thousands, so round down)</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>&lt;</strong> means less than, <strong>&gt;</strong> means greater than, <strong>=</strong> means equal to</li>
            <li>Compare from the <strong>left</strong> (biggest place value first)</li>
            <li><strong>Ascending</strong> = smallest to largest (going up)</li>
            <li><strong>Descending</strong> = largest to smallest (going down)</li>
            <li>When rounding, look at the digit <strong>one place to the right</strong></li>
            <li>Digits 0-4 → round down, Digits 5-9 → round up</li>
            <li>After rounding, replace all digits to the right with <strong>zeros</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComparingOrderingNumbers;
