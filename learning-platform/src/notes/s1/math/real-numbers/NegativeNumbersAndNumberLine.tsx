import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function NegativeNumbersAndNumberLine() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Negative Numbers & the Number Line</h1>
        <p className="mt-2 text-blue-100">
          Exploring numbers less than zero and visualizing them on the number line
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Understanding Negative Numbers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            A. Understanding Negative Numbers
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong className="text-blue-600 dark:text-blue-400">Negative numbers</strong> are numbers less than zero. They appear in many real-world situations:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  🌡️ Temperature
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <MathText>-5°C means 5 degrees below freezing</MathText>
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                  ⛰️ Altitude
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <MathText>-200m means 200 meters below sea level</MathText>
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
                <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                  💰 Money
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <MathText>-$50 means a debt of $50 or spending $50</MathText>
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Temperature Changes
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                On a winter day, the temperature at 6am was <MathText>-3°C</MathText>. By noon, it rose to <MathText>2°C</MathText>. How much did the temperature increase?
              </p>
              <div className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Starting temperature: <MathText>-3°C</MathText></p>
                <p>Ending temperature: <MathText>2°C</MathText></p>
                <p>Increase: From <MathText>-3</MathText> to <MathText>0</MathText> is <MathText>3</MathText> degrees, then from <MathText>0</MathText> to <MathText>2</MathText> is another <MathText>2</MathText> degrees</p>
                <p><strong>Total increase: <MathText>5°C</MathText></strong></p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-gray-100">Key Concept:</strong> Negative numbers represent values below zero. The negative sign (<MathText>-</MathText>) indicates direction opposite to positive numbers.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Real-World Negative Numbers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A submarine is at 150 meters below sea level. Represent this using a negative number.
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Solution:</strong> The submarine's position is <MathText>{'$-150$ meters'}</MathText> (negative because it's below sea level, which is 0)
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Number Line Representation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            B. The Number Line
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong className="text-blue-600 dark:text-blue-400">number line</strong> is a visual way to represent all numbers. It extends infinitely in both directions:
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded border border-gray-300 dark:border-gray-600 mb-6">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>← Negative numbers get smaller</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">ZERO</span>
                  <span>Positive numbers get larger →</span>
                </div>
                <svg width="600" height="80" viewBox="0 0 600 80" className="mx-auto">
                  {/* Number line */}
                  <line x1="50" y1="40" x2="550" y2="40" stroke="currentColor" strokeWidth="2" className="text-gray-700 dark:text-gray-400" />
                  <polygon points="545,40 535,35 535,45" fill="currentColor" className="text-gray-700 dark:text-gray-400" />
                  <polygon points="55,40 65,35 65,45" fill="currentColor" className="text-gray-700 dark:text-gray-400" />

                  {/* Tick marks and labels */}
                  {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((num, idx) => {
                    const x = 50 + (idx * 50);
                    return (
                      <g key={num}>
                        <line x1={x} y1={35} x2={x} y2={45} stroke="currentColor" strokeWidth={num === 0 ? 3 : 2} className={num === 0 ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-500"} />
                        <text x={x} y={60} textAnchor="middle" fontSize="12" fill="currentColor" className={num === 0 ? "text-blue-600 dark:text-blue-400 font-bold" : "text-gray-700 dark:text-gray-300"}>{num}</text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 2: Plotting Numbers on a Number Line
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Plot the following numbers on a number line: <MathText>-4, 2, 0, -1, 3</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Steps:</strong></p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Draw a horizontal line with arrows on both ends</li>
                  <li>Mark the center as 0 (zero/origin)</li>
                  <li>Mark equal intervals to the right (positive) and left (negative)</li>
                  <li>Plot each number at its correct position</li>
                </ol>
                <p className="mt-3"><strong>Result:</strong> <MathText>-4</MathText> is 4 units left of 0, <MathText>-1</MathText> is 1 unit left, <MathText>2</MathText> is 2 units right, and <MathText>3</MathText> is 3 units right.</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-gray-100">Important:</strong> On a horizontal number line:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                <li>Numbers to the <strong>left</strong> are smaller</li>
                <li>Numbers to the <strong>right</strong> are larger</li>
                <li><strong>Zero</strong> is neither positive nor negative</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Number Line Positions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Which number is furthest to the left on a number line: <MathText>-7, -2, 5, -5</MathText>?
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
                  <p><strong>Solution:</strong></p>
                  <p>On a number line, numbers furthest to the left are the smallest.</p>
                  <p>Ordering from left to right: <MathText>-7, -5, -2, 5</MathText></p>
                  <p><strong>Answer: <MathText>-7</MathText></strong> is furthest to the left (smallest number)</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Comparing and Ordering */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            C. Comparing and Ordering Numbers
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use inequality symbols to compare numbers:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  Greater Than (<MathText>{'$>$'}</MathText>)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <MathText>{'$5 > 2$'}</MathText> means "5 is greater than 2"
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <MathText>{'$-1 > -4$'}</MathText> (closer to zero means greater)
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                  Less Than (<MathText>{'$<$'}</MathText>)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <MathText>{'$2 < 5$'}</MathText> means "2 is less than 5"
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <MathText>{'$-4 < -1$'}</MathText> (further left means smaller)
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 3: Comparing Negative Numbers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Which is greater: <MathText>-8</MathText> or <MathText>-3</MathText>?
              </p>
              <div className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>On a number line, <MathText>-3</MathText> is to the right of <MathText>-8</MathText></p>
                <p>Numbers to the right are always greater</p>
                <p><strong>Therefore: <MathText>{'$-3 > -8$'}</MathText></strong></p>
                <p className="text-sm italic mt-2">Remember: <MathText>-3</MathText> is "less negative" than <MathText>-8</MathText>, making it greater!</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 4: Ordering Numbers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Arrange these numbers in ascending order (smallest to largest): <MathText>3, -5, 0, -2, 7, -1</MathText>
              </p>
              <div className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p><strong>Step 1:</strong> Identify negative numbers: <MathText>-5, -2, -1</MathText></p>
                <p><strong>Step 2:</strong> Identify zero and positive numbers: <MathText>0, 3, 7</MathText></p>
                <p><strong>Step 3:</strong> Order negatives (most negative first): <MathText>-5, -2, -1</MathText></p>
                <p><strong>Step 4:</strong> Order positives: <MathText>0, 3, 7</MathText></p>
                <p><strong>Answer: <MathText>-5, -2, -1, 0, 3, 7</MathText></strong></p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-gray-100">Quick Rule:</strong> When comparing two negative numbers, the one closer to zero is greater. For example: <MathText>{'$-2 > -10$'}</MathText>
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Ordering Challenge
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Arrange in descending order (largest to smallest): <MathText>-12, 5, -3, 0, 8, -7</MathText>
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
                  <p><strong>Solution:</strong></p>
                  <p>Descending order means largest to smallest (right to left on number line)</p>
                  <p>Positive numbers first (largest to smallest): <MathText>8, 5</MathText></p>
                  <p>Then zero: <MathText>0</MathText></p>
                  <p>Then negative numbers (closest to zero first): <MathText>-3, -7, -12</MathText></p>
                  <p><strong>Answer: <MathText>8, 5, 0, -3, -7, -12</MathText></strong></p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mt-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Temperature Comparison
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Which temperature is colder: <MathText>-15°C</MathText> or <MathText>-8°C</MathText>?
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p>Colder means a smaller number (further left on the number line)</p>
                  <p><MathText>{'$-15 < -8$'}</MathText> (−15 is further left)</p>
                  <p><strong>Answer: <MathText>-15°C</MathText> is colder</strong></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Negative numbers are less than zero and appear in real-world contexts like temperature, altitude, and money</li>
            <li>The number line extends infinitely in both directions with zero at the center</li>
            <li>On a horizontal number line, numbers to the left are smaller and numbers to the right are larger</li>
            <li>When comparing negative numbers, the one closer to zero is greater (e.g., <MathText>{'$-2 > -5$'}</MathText>)</li>
            <li>Use <MathText>{'$>$'}</MathText> for "greater than" and <MathText>{'$<$'}</MathText> for "less than"</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
