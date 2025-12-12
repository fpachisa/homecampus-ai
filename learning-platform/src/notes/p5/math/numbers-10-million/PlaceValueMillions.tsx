import { useState } from 'react';

const PlaceValueMillions = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showPractice1, setShowPractice1] = useState(false);
  const [showPractice2, setShowPractice2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Place Value to Millions</h1>
        <p className="text-lg">Understanding place value, millions, and how to read large numbers</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Counting to One Million */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. Understanding One Million</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">How Big is One Million?</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Let's count by <strong>hundred thousands</strong> to reach one million!
            </p>
          </div>

          {/* Visual counting representation */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Counting by Hundred Thousands:</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {[100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000].map((num) => (
                <div
                  key={num}
                  className={`px-3 py-2 rounded-full text-sm font-mono ${
                    num === 1000000
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100'
                  }`}
                >
                  {num.toLocaleString()}
                </div>
              ))}
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border border-green-300 dark:border-green-600">
              <p className="text-center text-lg text-gray-900 dark:text-gray-100">
                <strong>10 hundred thousands</strong> = <strong className="text-green-600 dark:text-green-400">1,000,000</strong> (one million)
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">Key Fact:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              10 × 100,000 = <strong>1,000,000</strong>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              We read 1,000,000 as <strong>"one million"</strong>
            </p>
          </div>

          {/* Real-world examples */}
          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded mb-4">
            <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">Real-World Examples of One Million:</h3>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li>• A city with <strong>1,000,000</strong> people has one million residents</li>
              <li>• If you saved $1 every day, it would take about <strong>2,740 years</strong> to save one million dollars!</li>
              <li>• One million seconds is about <strong>11.5 days</strong></li>
            </ul>
          </div>
        </section>

        {/* Section 2: Place Value Chart */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Place Value Chart</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Understanding Place Values</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Each digit in a number has a <strong>place value</strong>. The position tells us how much the digit is worth.
            </p>
          </div>

          {/* Place Value Chart for 1,000,000 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4 overflow-x-auto">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Place Value Chart for One Million:</h3>
            <table className="w-full text-center mb-4">
              <thead>
                <tr>
                  <th className="px-2 py-2 bg-pink-500 text-white rounded-tl">Millions</th>
                  <th className="px-2 py-2 bg-purple-500 text-white">Hundred Thousands</th>
                  <th className="px-2 py-2 bg-blue-500 text-white">Ten Thousands</th>
                  <th className="px-2 py-2 bg-green-500 text-white">Thousands</th>
                  <th className="px-2 py-2 bg-yellow-500 text-white">Hundreds</th>
                  <th className="px-2 py-2 bg-orange-500 text-white">Tens</th>
                  <th className="px-2 py-2 bg-red-500 text-white rounded-tr">Ones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-2xl font-bold text-gray-900 dark:text-gray-100">1</td>
                  <td className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-2xl font-bold text-gray-900 dark:text-gray-100">0</td>
                  <td className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-2xl font-bold text-gray-900 dark:text-gray-100">0</td>
                  <td className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-2xl font-bold text-gray-900 dark:text-gray-100">0</td>
                  <td className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-2xl font-bold text-gray-900 dark:text-gray-100">0</td>
                  <td className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-2xl font-bold text-gray-900 dark:text-gray-100">0</td>
                  <td className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-2xl font-bold text-gray-900 dark:text-gray-100">0</td>
                </tr>
              </tbody>
            </table>
            <p className="text-center text-gray-700 dark:text-gray-300">
              One million has <strong>7 digits</strong>: 1 followed by 6 zeros
            </p>
          </div>

          {/* Spacing Tip */}
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">💡 Tip: Using Gaps to Read Numbers</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-2">
              Large numbers are easier to read when we put gaps (or commas) every 3 digits:
            </p>
            <div className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100">
              1<span className="text-gray-400">,</span>000<span className="text-gray-400">,</span>000 or 1 000 000
            </div>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
              The gaps separate millions, thousands, and hundreds/tens/ones
            </p>
          </div>
        </section>

        {/* Section 3: Reading Large Numbers */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">3. Reading Large Numbers</h2>

          {/* Example: 3,964,127 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4 overflow-x-auto">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Reading 3,964,127</h3>

            <table className="w-full text-center mb-4">
              <thead>
                <tr>
                  <th className="px-2 py-2 bg-pink-500 text-white rounded-tl">Millions</th>
                  <th className="px-2 py-2 bg-purple-500 text-white">Hundred Thousands</th>
                  <th className="px-2 py-2 bg-blue-500 text-white">Ten Thousands</th>
                  <th className="px-2 py-2 bg-green-500 text-white">Thousands</th>
                  <th className="px-2 py-2 bg-yellow-500 text-white">Hundreds</th>
                  <th className="px-2 py-2 bg-orange-500 text-white">Tens</th>
                  <th className="px-2 py-2 bg-red-500 text-white rounded-tr">Ones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-2xl font-bold text-pink-600 dark:text-pink-400">3</td>
                  <td className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-2xl font-bold text-purple-600 dark:text-purple-400">9</td>
                  <td className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-2xl font-bold text-blue-600 dark:text-blue-400">6</td>
                  <td className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-2xl font-bold text-green-600 dark:text-green-400">4</td>
                  <td className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-2xl font-bold text-yellow-600 dark:text-yellow-400">1</td>
                  <td className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-2xl font-bold text-orange-600 dark:text-orange-400">2</td>
                  <td className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-2xl font-bold text-red-600 dark:text-red-400">7</td>
                </tr>
              </tbody>
            </table>

            {/* Breaking down the number */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-800 dark:text-pink-200 rounded font-mono">3,000,000</span>
                <span className="text-gray-600 dark:text-gray-400">= 3 millions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded font-mono">900,000</span>
                <span className="text-gray-600 dark:text-gray-400">= 9 hundred thousands</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded font-mono">60,000</span>
                <span className="text-gray-600 dark:text-gray-400">= 6 ten thousands</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded font-mono">4,000</span>
                <span className="text-gray-600 dark:text-gray-400">= 4 thousands</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 rounded font-mono">100</span>
                <span className="text-gray-600 dark:text-gray-400">= 1 hundred</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 rounded font-mono">20</span>
                <span className="text-gray-600 dark:text-gray-400">= 2 tens</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 rounded font-mono">7</span>
                <span className="text-gray-600 dark:text-gray-400">= 7 ones</span>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border border-green-300 dark:border-green-600">
              <p className="text-gray-900 dark:text-gray-100">
                <strong>In words:</strong> Three million, nine hundred and sixty-four thousand, one hundred and twenty-seven
              </p>
            </div>
          </div>

          {/* How to read large numbers step by step */}
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Steps to Read Large Numbers:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>Start from the <strong>left</strong> (the biggest place value)</li>
              <li>Read the millions part first, then say "million"</li>
              <li>Read the thousands part, then say "thousand"</li>
              <li>Read the hundreds, tens, and ones</li>
            </ol>
          </div>
        </section>

        {/* Worked Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Reading 5,230,418
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Read the number 5,230,418</p>

                <div className="ml-4 space-y-3 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div className="text-gray-800 dark:text-gray-200">
                    <p><strong>Step 1:</strong> Identify the millions: <span className="text-pink-600 dark:text-pink-400 font-bold">5</span> million</p>
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">
                    <p><strong>Step 2:</strong> Read the thousands: <span className="text-green-600 dark:text-green-400 font-bold">230</span> thousand</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">(two hundred and thirty thousand)</p>
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">
                    <p><strong>Step 3:</strong> Read the rest: <span className="text-orange-600 dark:text-orange-400 font-bold">418</span></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">(four hundred and eighteen)</p>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded mt-3">
                    <p className="text-gray-900 dark:text-gray-100"><strong>Answer:</strong> Five million, two hundred and thirty thousand, four hundred and eighteen</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Writing 7,005,060 in Expanded Form
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Write 7,005,060 in expanded form</p>

                <div className="ml-4 space-y-3 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div className="text-gray-800 dark:text-gray-200">
                    <p><strong>Identify each digit's value:</strong></p>
                  </div>
                  <div className="space-y-1 font-mono text-gray-800 dark:text-gray-200">
                    <p>7 in millions place = 7,000,000</p>
                    <p>0 in hundred thousands = 0</p>
                    <p>0 in ten thousands = 0</p>
                    <p>5 in thousands place = 5,000</p>
                    <p>0 in hundreds place = 0</p>
                    <p>6 in tens place = 60</p>
                    <p>0 in ones place = 0</p>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded mt-3">
                    <p className="text-gray-900 dark:text-gray-100"><strong>Expanded form:</strong></p>
                    <p className="font-mono text-gray-900 dark:text-gray-100">7,000,000 + 5,000 + 60</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. What is the value of the digit 4 in each number?
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) 4,321,000</p>
                <p>b) 2,400,000</p>
                <p>c) 5,234,567</p>
              </div>
              <button
                onClick={() => setShowPractice1(!showPractice1)}
                className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded transition-colors"
              >
                {showPractice1 ? 'Hide' : 'Show'} Solutions
              </button>
              {showPractice1 && (
                <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> 4 is in the millions place → 4,000,000 (four million)</p>
                  <p><strong>b)</strong> 4 is in the hundred thousands place → 400,000 (four hundred thousand)</p>
                  <p><strong>c)</strong> 4 is in the thousands place → 4,000 (four thousand)</p>
                </div>
              )}
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Read these numbers in words:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) 2,360,500</p>
                <p>b) 8,007,090</p>
                <p>c) 6,500,003</p>
              </div>
              <button
                onClick={() => setShowPractice2(!showPractice2)}
                className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded transition-colors"
              >
                {showPractice2 ? 'Hide' : 'Show'} Solutions
              </button>
              {showPractice2 && (
                <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> Two million, three hundred and sixty thousand, five hundred</p>
                  <p><strong>b)</strong> Eight million, seven thousand and ninety</p>
                  <p><strong>c)</strong> Six million, five hundred thousand and three</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>10 hundred thousands</strong> make one million (1,000,000)</li>
            <li>One million has <strong>7 digits</strong>: 1 followed by 6 zeros</li>
            <li>Place values from right to left: ones, tens, hundreds, thousands, ten thousands, hundred thousands, <strong>millions</strong></li>
            <li>Use <strong>commas or spaces</strong> every 3 digits to make numbers easier to read</li>
            <li>When reading, start from the <strong>left</strong> (biggest place value first)</li>
            <li><strong>Expanded form</strong> shows each digit's value added together</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaceValueMillions;
