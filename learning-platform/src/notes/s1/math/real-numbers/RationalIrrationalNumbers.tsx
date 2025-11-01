import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function RationalIrrationalNumbers() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 dark:from-indigo-600 dark:to-blue-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Rational & Irrational Numbers</h1>
        <p className="mt-2 text-indigo-100">
          Understanding the complete system of real numbers and their classification
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Rational Numbers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            A. Rational Numbers
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong className="text-indigo-600 dark:text-indigo-400">rational number</strong> is any number that can be expressed as a fraction <MathText>{'$\\frac{a}{b}$'}</MathText> where <MathText>a</MathText> and <MathText>b</MathText> are integers and <MathText>{'$b \\neq 0$'}</MathText>.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-4">
                Examples of Rational Numbers
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-indigo-200 dark:border-indigo-700">
                    <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Fractions</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <MathText>{'$\\frac{3}{4}, \\frac{-2}{5}, \\frac{7}{1}$'}</MathText>
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-indigo-200 dark:border-indigo-700">
                    <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Whole Numbers</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <MathText>{'$5 = \\frac{5}{1}, \\quad 0 = \\frac{0}{1}$'}</MathText>
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-indigo-200 dark:border-indigo-700">
                    <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Terminating Decimals</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <MathText>{'$0.5 = \\frac{1}{2}, \\quad 0.75 = \\frac{3}{4}$'}</MathText>
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-indigo-200 dark:border-indigo-700">
                    <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Recurring Decimals</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <MathText>{'$0.\\overline{3} = \\frac{1}{3}$'}</MathText> (0.333...)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Types of Decimal Representations
              </h3>

              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-indigo-600 dark:text-indigo-400">1. Terminating Decimals</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Decimals that end after a finite number of digits</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Example: <MathText>0.25, 0.125, 3.5</MathText></p>
                </div>

                <div>
                  <p className="font-semibold text-indigo-600 dark:text-indigo-400">2. Recurring Decimals (Repeating)</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Decimals with a pattern that repeats forever</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Example: <MathText>{'$0.\\overline{6} = 0.666...$'}</MathText>, <MathText>{'$0.\\overline{142857} = 0.142857142857...$'}</MathText></p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs mt-1 italic">The bar notation indicates the repeating part</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Converting Decimals to Fractions
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Convert <MathText>0.625</MathText> to a fraction.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: Count decimal places: 3 places</p>
                <p>Step 2: Write as fraction over <MathText>{'$10^3 = 1000$'}</MathText>: <MathText>{'$\\frac{625}{1000}$'}</MathText></p>
                <p>Step 3: Simplify by dividing both by 125:</p>
                <p><MathText>{'$\\frac{625 \\div 125}{1000 \\div 125} = \\frac{5}{8}$'}</MathText></p>
                <p><strong>Answer: <MathText>{'$0.625 = \\frac{5}{8}$'}</MathText></strong></p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Identifying Rational Numbers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Which of these are rational numbers? <MathText>{'$-7, \\frac{3}{4}, 0.5, \\sqrt{2}$'}</MathText>
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
                  <p>✅ <MathText>-7</MathText> is rational: <MathText>{'$-7 = \\frac{-7}{1}$'}</MathText></p>
                  <p>✅ <MathText>{'$\\frac{3}{4}$'}</MathText> is rational: already in fraction form</p>
                  <p>✅ <MathText>0.5</MathText> is rational: <MathText>{'$0.5 = \\frac{1}{2}$'}</MathText></p>
                  <p>❌ <MathText>{'$\\sqrt{2}$'}</MathText> is NOT rational (it's irrational - see next section!)</p>
                  <p><strong>Answer: -7, 3/4, and 0.5 are rational</strong></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Irrational Numbers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            B. Irrational Numbers
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An <strong className="text-indigo-600 dark:text-indigo-400">irrational number</strong> cannot be expressed as a fraction <MathText>{'$\\frac{a}{b}$'}</MathText>. Their decimal representations are <strong>non-terminating and non-repeating</strong>.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-4">
                Common Irrational Numbers
              </h3>

              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-indigo-200 dark:border-indigo-700">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-indigo-500 dark:bg-indigo-400 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      √
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Square Roots of Non-Perfect Squares</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        <MathText>{'$\\sqrt{2} \\approx 1.414213...$'}</MathText> (never ends, never repeats)
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <MathText>{'$\\sqrt{3} \\approx 1.732050...$'}</MathText>, <MathText>{'$\\sqrt{5} \\approx 2.236067...$'}</MathText>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-indigo-200 dark:border-indigo-700">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-500 dark:bg-purple-400 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      π
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Pi (π)</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        <MathText>{'$\\pi \\approx 3.141592653589793...$'}</MathText>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        The ratio of a circle's circumference to its diameter
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-indigo-200 dark:border-indigo-700">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-500 dark:bg-green-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      e
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Euler's Number (e)</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        <MathText>{'$e \\approx 2.718281828...$'}</MathText>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        Important in advanced mathematics (you'll see this later!)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-gray-100">Key Difference:</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <div>
                  <p className="font-semibold text-green-600 dark:text-green-400">✅ Rational</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Can be written as <MathText>{'$\\frac{a}{b}$'}</MathText></p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Decimals terminate OR repeat</p>
                </div>
                <div>
                  <p className="font-semibold text-red-600 dark:text-red-400">❌ Irrational</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Cannot be written as <MathText>{'$\\frac{a}{b}$'}</MathText></p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Decimals never terminate, never repeat</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 2: Identifying Irrational Numbers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Which of these are irrational? <MathText>{'$\\sqrt{16}, \\sqrt{5}, \\pi, 0.\\overline{7}$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>❌ <MathText>{'$\\sqrt{16} = 4$'}</MathText> is rational (perfect square)</p>
                <p>✅ <MathText>{'$\\sqrt{5} \\approx 2.236...$'}</MathText> is irrational (non-perfect square)</p>
                <p>✅ <MathText>{'$\\pi \\approx 3.14159...$'}</MathText> is irrational (famous constant)</p>
                <p>❌ <MathText>{'$0.\\overline{7} = 0.777...$'}</MathText> is rational (repeating decimal)</p>
                <p><strong>Answer: <MathText>{'$\\sqrt{5}$'}</MathText> and <MathText>{'$\\pi$'}</MathText> are irrational</strong></p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Rational or Irrational?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Classify each number as rational or irrational: <MathText>{'$\\sqrt{9}, \\sqrt{7}, 0.25, \\pi$'}</MathText>
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
                  <p>✅ <strong>Rational:</strong> <MathText>{'$\\sqrt{9} = 3 = \\frac{3}{1}$'}</MathText> (perfect square)</p>
                  <p>❌ <strong>Irrational:</strong> <MathText>{'$\\sqrt{7} \\approx 2.6457...$'}</MathText> (non-perfect square)</p>
                  <p>✅ <strong>Rational:</strong> <MathText>{'$0.25 = \\frac{1}{4}$'}</MathText> (terminating decimal)</p>
                  <p>❌ <strong>Irrational:</strong> <MathText>{'$\\pi$'}</MathText> (non-terminating, non-repeating)</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Real Numbers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            C. The Real Number System
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong className="text-indigo-600 dark:text-indigo-400">Real numbers</strong> include ALL rational and irrational numbers. They form a complete number system that can represent any point on the number line.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-4 text-center">
                Hierarchy of Real Numbers
              </h3>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-indigo-300 dark:border-indigo-600">
                {/* Largest box - Real Numbers */}
                <div className="border-4 border-blue-500 dark:border-blue-400 rounded-lg p-4">
                  <h4 className="text-center font-bold text-blue-600 dark:text-blue-400 mb-4">Real Numbers (ℝ)</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Rational Numbers */}
                    <div className="border-4 border-green-500 dark:border-green-400 rounded-lg p-3">
                      <h5 className="text-center font-semibold text-green-600 dark:text-green-400 mb-2">Rational (ℚ)</h5>
                      <div className="space-y-2">
                        <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded text-sm">
                          <p className="font-semibold text-gray-800 dark:text-gray-100">Integers (ℤ)</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">..., -2, -1, 0, 1, 2, ...</p>
                          <div className="ml-2 mt-1 bg-green-100 dark:bg-green-900/30 p-1 rounded">
                            <p className="font-semibold text-gray-800 dark:text-gray-100 text-xs">Whole (𝕎)</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">0, 1, 2, 3, ...</p>
                            <div className="ml-2 mt-1 bg-green-200 dark:bg-green-900/40 p-1 rounded">
                              <p className="font-semibold text-gray-800 dark:text-gray-100 text-xs">Natural (ℕ)</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">1, 2, 3, ...</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded text-sm">
                          <p className="font-semibold text-gray-800 dark:text-gray-100">Fractions</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400"><MathText>{'$\\frac{1}{2}, \\frac{3}{4}, -\\frac{2}{5}$'}</MathText></p>
                        </div>
                      </div>
                    </div>

                    {/* Irrational Numbers */}
                    <div className="border-4 border-purple-500 dark:border-purple-400 rounded-lg p-3">
                      <h5 className="text-center font-semibold text-purple-600 dark:text-purple-400 mb-2">Irrational</h5>
                      <div className="space-y-2">
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded text-sm">
                          <p className="font-semibold text-gray-800 dark:text-gray-100">Square Roots</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400"><MathText>{'$\\sqrt{2}, \\sqrt{3}, \\sqrt{5}$'}</MathText></p>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded text-sm">
                          <p className="font-semibold text-gray-800 dark:text-gray-100">Constants</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400"><MathText>{'$\\pi, e$'}</MathText></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 3: Plotting Real Numbers on Number Line
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Plot approximately: <MathText>{'$\\sqrt{2}, 2.5, \\pi$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p><MathText>{'$\\sqrt{2} \\approx 1.414$'}</MathText> → between 1 and 2, closer to 1</p>
                <p><MathText>2.5</MathText> → exactly halfway between 2 and 3</p>
                <p><MathText>{'$\\pi \\approx 3.14$'}</MathText> → between 3 and 4, very close to 3</p>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-2">All real numbers can be represented as points on the number line!</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-gray-100">Important Facts:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                <li>All integers are rational numbers</li>
                <li>All rational numbers are real numbers</li>
                <li>All irrational numbers are real numbers</li>
                <li>Every point on the number line represents a real number</li>
                <li>There are infinitely more irrational numbers than rational numbers!</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Number Classification
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Classify <MathText>-5</MathText> using ALL applicable categories: Natural, Whole, Integer, Rational, Irrational, Real
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
                  <p><strong>Solution for -5:</strong></p>
                  <p>❌ NOT Natural (naturals are positive: 1, 2, 3, ...)</p>
                  <p>❌ NOT Whole (whole numbers start from 0)</p>
                  <p>✅ <strong>Integer</strong> (negative whole number)</p>
                  <p>✅ <strong>Rational</strong> (<MathText>{'$-5 = \\frac{-5}{1}$'}</MathText>)</p>
                  <p>❌ NOT Irrational (it can be written as a fraction)</p>
                  <p>✅ <strong>Real</strong> (all numbers on number line are real)</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Between Which Integers?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Between which two consecutive integers does <MathText>{'$\\sqrt{20}$'}</MathText> lie?
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
                  <p>Find perfect squares near 20:</p>
                  <p><MathText>{'$\\sqrt{16} = 4$'}</MathText> and <MathText>{'$\\sqrt{25} = 5$'}</MathText></p>
                  <p>Since <MathText>{'$16 < 20 < 25$'}</MathText>, we have:</p>
                  <p><MathText>{'$\\sqrt{16} < \\sqrt{20} < \\sqrt{25}$'}</MathText></p>
                  <p><MathText>{'$4 < \\sqrt{20} < 5$'}</MathText></p>
                  <p><strong>Answer: <MathText>{'$\\sqrt{20}$'}</MathText> lies between 4 and 5</strong></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">(Actually <MathText>{'$\\sqrt{20} \\approx 4.472$'}</MathText>)</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Rational numbers</strong> can be expressed as <MathText>{'$\\frac{a}{b}$'}</MathText> where <MathText>a</MathText> and <MathText>b</MathText> are integers (<MathText>{'$b \\neq 0$'}</MathText>)</li>
            <li>Rational numbers include: integers, fractions, terminating decimals, and recurring decimals</li>
            <li><strong>Irrational numbers</strong> cannot be expressed as fractions; their decimals never terminate and never repeat</li>
            <li>Common irrational numbers: <MathText>{'$\\sqrt{2}, \\sqrt{3}, \\pi, e$'}</MathText></li>
            <li><strong>Real numbers (ℝ)</strong> include ALL rational and irrational numbers</li>
            <li>Number hierarchy: Natural ⊂ Whole ⊂ Integers ⊂ Rational ⊂ Real</li>
            <li>Every point on the number line represents a unique real number</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
