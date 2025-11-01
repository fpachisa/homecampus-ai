import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function RoundingDecimalPlaces() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Rounding to Decimal Places</h1>
        <p className="mt-2 text-purple-100">
          Master the art of approximation through rounding whole numbers and decimals
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section A: Understanding Rounding and Midpoint */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            A. Understanding Rounding and the Midpoint Concept
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong className="text-purple-600 dark:text-purple-400">To approximate</strong> is to find a suitable value for a quantity within a specified degree of accuracy. When we round numbers, we're finding the nearest value at a specific place value.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                The Midpoint Concept
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Imagine you're standing between two towns. If you're exactly halfway between them, which town are you nearer to? Neither! You're at the <strong>midpoint</strong>.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                In rounding, when a number is at the midpoint (the digit is 5), we have a convention: <strong>always round up</strong>.
              </p>
              <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
                <p className="text-center font-semibold text-gray-800 dark:text-gray-100">
                  If the digit is 5 or more → round UP
                </p>
                <p className="text-center font-semibold text-gray-800 dark:text-gray-100">
                  If the digit is less than 5 → round DOWN
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Visualizing on a Number Line
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Round 23,645 to the nearest 10.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>We need to find which multiple of 10 is closest to 23,645.</p>
                <p className="ml-4">• 23,640 is one option (round down)</p>
                <p className="ml-4">• 23,650 is the other option (round up)</p>
                <p className="mt-3">Look at the ones digit: <strong>5</strong></p>
                <p>Since 5 is the midpoint, we round UP.</p>
                <p className="mt-3"><MathText>{'$23\\,645 \\approx 23\\,650$'}</MathText> (correct to the nearest 10)</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 2: Rounding Down
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Round 23,645 to the nearest 100.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Look at the tens digit: <strong>4</strong></p>
                <p>Since 4 {'<'} 5, we round DOWN.</p>
                <p className="mt-3"><MathText>{'$23\\,645 \\approx 23\\,600$'}</MathText> (correct to the nearest 100)</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Understanding Midpoint
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Round 24,891 to the nearest: (a) 10, (b) 100, (c) 1,000
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p><strong>(a) Nearest 10:</strong> Look at ones digit = 1</p>
                  <p className="ml-4">Since 1 {'<'} 5, round down → <MathText>{'$24\\,890$'}</MathText></p>
                  <p className="mt-2"><strong>(b) Nearest 100:</strong> Look at tens digit = 9</p>
                  <p className="ml-4">Since 9 ≥ 5, round up → <MathText>{'$24\\,900$'}</MathText></p>
                  <p className="mt-2"><strong>(c) Nearest 1,000:</strong> Look at hundreds digit = 8</p>
                  <p className="ml-4">Since 8 ≥ 5, round up → <MathText>{'$25\\,000$'}</MathText></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section B: Rounding Whole Numbers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            B. Rounding Whole Numbers to Place Values
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When rounding whole numbers, follow this process:
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Rounding Process
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 dark:bg-purple-400 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">Identify the place value</p>
                    <p className="text-sm">Nearest 10? Look at ones. Nearest 100? Look at tens. Nearest 1000? Look at hundreds.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 dark:bg-purple-400 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">Examine the next digit</p>
                    <p className="text-sm">Look at the digit in the place value to the right of your target.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 dark:bg-purple-400 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">Apply the rounding rule</p>
                    <p className="text-sm">If digit ≥ 5, round up. If digit {'<'} 5, round down.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 dark:bg-purple-400 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">Use zeros as placeholders</p>
                    <p className="text-sm">Replace all digits to the right with zeros.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 3: Population Figure
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The exact population of Singapore in 2017 was 5,610,475. Round to the nearest: (a) 1,000, (b) million.
              </p>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p><strong>(a) Nearest 1,000:</strong></p>
                <p className="ml-4">Look at the hundreds digit: <strong>4</strong></p>
                <p className="ml-4">Since 4 {'<'} 5, round down</p>
                <p className="ml-4"><MathText>{'$5\\,610\\,475 \\approx 5\\,610\\,000$'}</MathText></p>

                <p className="mt-3"><strong>(b) Nearest million:</strong></p>
                <p className="ml-4">Look at the hundred thousands digit: <strong>6</strong></p>
                <p className="ml-4">Since 6 ≥ 5, round up</p>
                <p className="ml-4"><MathText>{'$5\\,610\\,475 \\approx 6\\,000\\,000$'}</MathText></p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Rounding Whole Numbers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              In 2018, there were 24,891 taxis in Singapore. Round to the nearest: (a) 10, (b) 100, (c) ten thousand.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>(a) Nearest 10:</strong> Look at ones digit = 1</p>
                  <p className="ml-4">1 {'<'} 5 → round down → <MathText>{'$24\\,890$'}</MathText></p>

                  <p className="mt-2"><strong>(b) Nearest 100:</strong> Look at tens digit = 9</p>
                  <p className="ml-4">9 ≥ 5 → round up → <MathText>{'$24\\,900$'}</MathText></p>

                  <p className="mt-2"><strong>(c) Nearest ten thousand:</strong> Look at thousands digit = 4</p>
                  <p className="ml-4">4 {'<'} 5 → round down → <MathText>{'$20\\,000$'}</MathText></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section C: Rounding Decimals */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            C. Rounding to Decimal Places
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Rounding decimals works exactly the same way as rounding whole numbers! The key is to understand decimal place values.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                Decimal Places Quick Reference
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-700 dark:text-gray-300">
                  <thead className="bg-purple-100 dark:bg-purple-900/30">
                    <tr>
                      <th className="p-2 text-left">Round to...</th>
                      <th className="p-2 text-left">Look at digit in...</th>
                      <th className="p-2 text-left">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="p-2">1 d.p. (tenths)</td>
                      <td className="p-2">hundredths place</td>
                      <td className="p-2">8.4<span className="font-bold text-purple-600 dark:text-purple-400">6</span>95 → 8.5</td>
                    </tr>
                    <tr>
                      <td className="p-2">2 d.p. (hundredths)</td>
                      <td className="p-2">thousandths place</td>
                      <td className="p-2">8.46<span className="font-bold text-purple-600 dark:text-purple-400">9</span>5 → 8.47</td>
                    </tr>
                    <tr>
                      <td className="p-2">3 d.p. (thousandths)</td>
                      <td className="p-2">ten-thousandths place</td>
                      <td className="p-2">8.469<span className="font-bold text-purple-600 dark:text-purple-400">5</span> → 8.470</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 4: Rounding to 1 Decimal Place
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Round 8.4695 to 1 decimal place.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>1 d.p. means we want one digit after the decimal point.</p>
                <p>Look at the <strong>hundredths</strong> place (2nd decimal place): <strong>6</strong></p>
                <p>Since 6 ≥ 5, round the tenths digit UP from 4 to 5</p>
                <p className="mt-3"><MathText>{'$8.4695 \\approx 8.5$'}</MathText> (correct to 1 d.p.)</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 5: Rounding to 2 Decimal Places
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Round 8.4695 to 2 decimal places.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>2 d.p. means we want two digits after the decimal point.</p>
                <p>Look at the <strong>thousandths</strong> place (3rd decimal place): <strong>9</strong></p>
                <p>Since 9 ≥ 5, round the hundredths digit UP from 6 to 7</p>
                <p className="mt-3"><MathText>{'$8.4695 \\approx 8.47$'}</MathText> (correct to 2 d.p.)</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 6: Rounding to 3 Decimal Places
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Round 8.4695 to 3 decimal places.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>3 d.p. means we want three digits after the decimal point.</p>
                <p>Look at the <strong>ten-thousandths</strong> place (4th decimal place): <strong>5</strong></p>
                <p>Since 5 ≥ 5, round the thousandths digit UP from 9 to 10</p>
                <p>This creates a carry: 8.469 becomes 8.470</p>
                <p className="mt-3"><MathText>{'$8.4695 \\approx 8.470$'}</MathText> (correct to 3 d.p.)</p>
                <p className="text-sm italic text-purple-600 dark:text-purple-400 mt-2">
                  Note: The trailing zero in 8.470 is important! It shows we rounded to 3 d.p., not 2 d.p.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Rounding Decimals
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Round 9.003 50 to: (a) the nearest tenth, (b) 3 decimal places
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>(a) Nearest tenth (1 d.p.):</strong></p>
                  <p className="ml-4">Look at hundredths place = 0</p>
                  <p className="ml-4">Since 0 {'<'} 5, round down (keep tenths as 0)</p>
                  <p className="ml-4"><MathText>{'$9.00350 \\approx 9.0$'}</MathText></p>

                  <p className="mt-3"><strong>(b) 3 decimal places:</strong></p>
                  <p className="ml-4">Look at ten-thousandths place (4th decimal) = 5</p>
                  <p className="ml-4">Since 5 ≥ 5, round up the thousandths from 3 to 4</p>
                  <p className="ml-4"><MathText>{'$9.00350 \\approx 9.004$'}</MathText></p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Why Accuracy Matters
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A measurement is recorded as 8.4695 cm. Round to: (a) 1 d.p., (b) 2 d.p., (c) 3 d.p. Which is most accurate?
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-3">
                  <p><strong>(a) 1 d.p.:</strong> <MathText>{'$8.5$'}</MathText> cm</p>
                  <p><strong>(b) 2 d.p.:</strong> <MathText>{'$8.47$'}</MathText> cm</p>
                  <p><strong>(c) 3 d.p.:</strong> <MathText>{'$8.470$'}</MathText> cm</p>

                  <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded">
                    <p className="font-semibold text-purple-700 dark:text-purple-300">Which is most accurate?</p>
                    <p className="mt-2"><strong>3 d.p. (8.470 cm)</strong> is the most accurate because it's closest to the original measurement 8.4695 cm.</p>
                    <p className="mt-2 text-sm italic">The more decimal places you keep, the more accurate the rounded value. However, we choose the appropriate level based on the context - a carpenter might use 1 d.p., while a scientist might need 3 d.p. or more.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>The midpoint rule: if the digit is 5 or more, round up; if less than 5, round down</li>
            <li>For whole numbers: identify the place value, look at the next digit to the right, apply the rule, use zeros as placeholders</li>
            <li>For decimals: the same process applies - just be careful to identify the correct decimal place</li>
            <li>1 d.p. = look at hundredths; 2 d.p. = look at thousandths; 3 d.p. = look at ten-thousandths</li>
            <li>More decimal places = higher accuracy (8.470 is more accurate than 8.47 or 8.5)</li>
            <li>Trailing zeros in decimal places show precision (8.470 vs 8.47 communicate different levels of measurement accuracy)</li>
            <li>Choose the degree of accuracy based on context (construction vs. scientific measurement)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
