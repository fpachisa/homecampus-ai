import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function FactorisationNegativeNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 dark:from-rose-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Factorisation with Negative Coefficients</h1>
        <p className="mt-2 text-rose-100">Factorising x² + bx + c where c {'>'} 0 and b {'<'} 0, or c {'<'} 0</p>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-8">

        {/* Section 1: c > 0 and b < 0 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Case 1: When c {'>'} 0 and b {'<'} 0
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              What about expressions where c {'>'} 0 but b {'<'} 0? Will the technique of factorisation be similar?
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Let's use the multiplication frame to factorise <MathText>{'$x^2 − 5x + 6$'}</MathText>. Because b = −5 is negative, we need to consider <strong>both positive and negative factors</strong> of the constant term 6.
            </p>

            <div className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-rose-800 dark:text-rose-300 mb-4">
                Step-by-Step: Factorise <MathText>{'$x^2 − 5x + 6$'}</MathText>
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-rose-700 dark:text-rose-300 mb-2">Step 1: Consider all factor pairs of 6</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-rose-300 dark:border-rose-700">
                    <p className="text-gray-700 dark:text-gray-300">6 = 1 × 6 = (−1) × (−6)</p>
                    <p className="text-gray-700 dark:text-gray-300">6 = 2 × 3 = (−2) × (−3)</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-rose-700 dark:text-rose-300 mb-2">Step 2: Find the pair that sums to −5</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-rose-300 dark:border-rose-700 space-y-2 text-gray-700 dark:text-gray-300">
                    <p>Method 1: Use <strong>guess and check</strong></p>
                    <div className="ml-4 space-y-1">
                      <p>Try −3 and 5 in the frame → check if (−3) + 10 = −5? No</p>
                      <p>Try −2 and −3 in different positions</p>
                    </div>
                    <p className="mt-3">Method 2: Use <strong>reasoning</strong></p>
                    <div className="ml-4 space-y-1">
                      <p>Since we want −5 (negative), both factors must be negative</p>
                      <p className="font-semibold">(−2) + (−3) = −5 ✓</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-rose-700 dark:text-rose-300 mb-2">Step 3: Build the multiplication frame</p>
                  <div className="flex justify-center mb-3">
                    <div className="border-2 border-gray-600 dark:border-gray-400">
                      <div className="flex">
                        <div className="w-16 h-12 flex items-center justify-center font-semibold border-b border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">×</div>
                        <div className="w-24 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">x</div>
                        <div className="w-24 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">−3</div>
                      </div>
                      <div className="flex">
                        <div className="w-16 h-16 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">x</div>
                        <div className="w-24 h-16 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300"><MathText>{'$x^2$'}</MathText></div>
                        <div className="w-24 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300">−3x</div>
                      </div>
                      <div className="flex border-t border-gray-600 dark:border-gray-400">
                        <div className="w-16 h-16 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">−2</div>
                        <div className="w-24 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">−2x</div>
                        <div className="w-24 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-gray-700 dark:text-gray-300">+6</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-center font-semibold text-gray-700 dark:text-gray-300">
                    <MathText>{'$x^2 − 5x + 6 = (x − 2)(x − 3)$'}</MathText>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded">
              <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                💡 Key Pattern (c {'>'} 0, b {'<'} 0):
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                When c is positive but b is negative, we need <strong>two negative factors</strong> that:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li><strong>Multiply</strong> to give c (positive)</li>
                <li><strong>Add</strong> to give b (negative)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: c < 0 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Case 2: When c {'<'} 0
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In Sections earlier, we learned how to factorise quadratic expressions of the form <MathText>{'$x^2 + bx + c$'}</MathText> where c {'>'} 0 (and b is either positive or negative).
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              What happens if c {'<'} 0 and b is either positive or negative? Will the technique of factorisation be different?
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4">
                Example: Factorise <MathText>{'$x^2 + 5x − 6$'}</MathText>
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Step 1: Consider factor pairs of −6</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Since the constant term −6 is negative, we need to consider <strong>both positive and negative factors</strong>:
                    </p>
                    <div className="space-y-1 text-gray-700 dark:text-gray-300">
                      <p>−6 = 1 × (−6) = (−1) × 6</p>
                      <p>−6 = 2 × (−3) = (−2) × 3</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Step 2: Find the pair that sums to +5</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 space-y-2 text-gray-700 dark:text-gray-300">
                    <p>Since we want +5 (positive), we need the larger absolute value to be positive:</p>
                    <div className="ml-4 space-y-1">
                      <p>1 + (−6) = −5 ✗</p>
                      <p className="font-semibold">(−1) + 6 = 5 ✓</p>
                      <p>2 + (−3) = −1 ✗</p>
                      <p>(−2) + 3 = 1 ✗</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Step 3: Build the frame</p>
                  <div className="flex justify-center mb-3">
                    <div className="border-2 border-gray-600 dark:border-gray-400">
                      <div className="flex">
                        <div className="w-16 h-12 flex items-center justify-center font-semibold border-b border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">×</div>
                        <div className="w-24 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">x</div>
                        <div className="w-24 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">+6</div>
                      </div>
                      <div className="flex">
                        <div className="w-16 h-16 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">x</div>
                        <div className="w-24 h-16 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300"><MathText>{'$x^2$'}</MathText></div>
                        <div className="w-24 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300">+6x</div>
                      </div>
                      <div className="flex border-t border-gray-600 dark:border-gray-400">
                        <div className="w-16 h-16 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">−1</div>
                        <div className="w-24 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">−x</div>
                        <div className="w-24 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-gray-700 dark:text-gray-300">−6</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-center font-semibold text-gray-700 dark:text-gray-300">
                    <MathText>{'$x^2 + 5x − 6 = (x − 1)(x + 6)$'}</MathText>
                  </p>
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400 italic mt-2">
                    Check: 6x + (−x) = 6x − x = 5x ✓ and (−1) × 6 = −6 ✓
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-4">
                Another Example: Factorise <MathText>{'$x^2 − 5x − 6$'}</MathText>
              </h3>

              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>Step 1: Factors of −6: 1 × (−6), (−1) × 6, 2 × (−3), (−2) × 3</p>
                <p>Step 2: Find pair that sums to −5:</p>
                <div className="ml-4 space-y-1">
                  <p>1 + (−6) = −5 ✓</p>
                </div>
                <div className="flex justify-center mb-2 mt-3">
                  <div className="border-2 border-gray-600 dark:border-gray-400">
                    <div className="flex">
                      <div className="w-16 h-12 flex items-center justify-center font-semibold border-b border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">×</div>
                      <div className="w-24 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">x</div>
                      <div className="w-24 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">−6</div>
                    </div>
                    <div className="flex">
                      <div className="w-16 h-16 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">x</div>
                      <div className="w-24 h-16 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300"><MathText>{'$x^2$'}</MathText></div>
                      <div className="w-24 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300">−6x</div>
                    </div>
                    <div className="flex border-t border-gray-600 dark:border-gray-400">
                      <div className="w-16 h-16 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">+1</div>
                      <div className="w-24 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">+x</div>
                      <div className="w-24 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-gray-700 dark:text-gray-300">−6</div>
                    </div>
                  </div>
                </div>
                <p className="text-center font-semibold">
                  <MathText>{'$x^2 − 5x − 6 = (x + 1)(x − 6)$'}</MathText>
                </p>
              </div>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded">
              <h3 className="font-semibold text-teal-800 dark:text-teal-300 mb-2">
                💡 Key Pattern (c {'<'} 0):
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                When c is negative, we need <strong>one positive and one negative factor</strong> that:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li><strong>Multiply</strong> to give c (negative)</li>
                <li><strong>Add</strong> to give b (could be positive or negative)</li>
                <li>The sign of b tells us which factor has the larger absolute value</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice Problems
          </h2>

          {/* Practice 1: c > 0, b < 0 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice Set 1: c {'>'} 0 and b {'<'} 0
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 mb-3">
              <div>(a) <MathText>{'$x^2 − 7x + 6$'}</MathText></div>
              <div>(b) <MathText>{'$x^2 − 6x + 8$'}</MathText></div>
              <div>(c) <MathText>{'$x^2 − 9x + 8$'}</MathText></div>
              <div>(d) <MathText>{'$x^2 − 9x + 8$'}</MathText></div>
              <div>(e) <MathText>{'$x^2 − 7x + 12$'}</MathText></div>
              <div>(f) <MathText>{'$x^2 − 13x + 12$'}</MathText></div>
            </div>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Solution:</p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>(a) <MathText>{'$(x − 1)(x − 6)$'}</MathText></p>
                  <p>(b) <MathText>{'$(x − 2)(x − 4)$'}</MathText></p>
                  <p>(c) <MathText>{'$(x − 1)(x − 8)$'}</MathText></p>
                  <p>(d) <MathText>{'$(x − 1)(x − 8)$'}</MathText></p>
                  <p>(e) <MathText>{'$(x − 3)(x − 4)$'}</MathText></p>
                  <p>(f) <MathText>{'$(x − 1)(x − 12)$'}</MathText></p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2: c < 0 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice Set 2: c {'<'} 0
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 mb-3">
              <div>(a) <MathText>{'$x^2 − 7x + 6$'}</MathText></div>
              <div>(b) <MathText>{'$x^2 − 6x + 8$'}</MathText></div>
              <div>(c) <MathText>{'$x^2 − 9x + 8$'}</MathText></div>
              <div>(d) <MathText>{'$x^2 − 8x + 12$'}</MathText></div>
              <div>(e) <MathText>{'$x^2 − 7x + 12$'}</MathText></div>
              <div>(f) <MathText>{'$x^2 − 13x + 12$'}</MathText></div>
            </div>

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Solution:</p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>(a) <MathText>{'$(x − 1)(x − 6)$'}</MathText></p>
                  <p>(b) <MathText>{'$(x − 2)(x − 4)$'}</MathText></p>
                  <p>(c) <MathText>{'$(x − 1)(x − 8)$'}</MathText></p>
                  <p>(d) <MathText>{'$(x − 2)(x − 6)$'}</MathText></p>
                  <p>(e) <MathText>{'$(x − 3)(x − 4)$'}</MathText></p>
                  <p>(f) <MathText>{'$(x − 1)(x − 12)$'}</MathText></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Summary Table */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Summary of Patterns
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-gray-400 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="border border-gray-400 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">Case</th>
                  <th className="border border-gray-400 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">Sign of c</th>
                  <th className="border border-gray-400 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">Sign of b</th>
                  <th className="border border-gray-400 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">Factors</th>
                  <th className="border border-gray-400 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">Example</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="bg-green-50 dark:bg-green-900/20">
                  <td className="border border-gray-400 dark:border-gray-600 p-3">1</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">Positive (+)</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">Positive (+)</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">Both positive</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3"><MathText>{'$x^2 + 5x + 6 = (x + 2)(x + 3)$'}</MathText></td>
                </tr>
                <tr className="bg-rose-50 dark:bg-rose-900/20">
                  <td className="border border-gray-400 dark:border-gray-600 p-3">2</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">Positive (+)</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">Negative (−)</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">Both negative</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3"><MathText>{'$x^2 − 5x + 6 = (x − 2)(x − 3)$'}</MathText></td>
                </tr>
                <tr className="bg-blue-50 dark:bg-blue-900/20">
                  <td className="border border-gray-400 dark:border-gray-600 p-3">3</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">Negative (−)</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">Positive (+)</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">One +, one − (larger is +)</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3"><MathText>{'$x^2 + 5x − 6 = (x − 1)(x + 6)$'}</MathText></td>
                </tr>
                <tr className="bg-purple-50 dark:bg-purple-900/20">
                  <td className="border border-gray-400 dark:border-gray-600 p-3">4</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">Negative (−)</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">Negative (−)</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">One +, one − (larger is −)</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3"><MathText>{'$x^2 − 5x − 6 = (x + 1)(x − 6)$'}</MathText></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>When <strong>c {'>'} 0 and b {'<'} 0</strong>: both factors are negative</li>
            <li>When <strong>c {'<'} 0</strong>: one factor is positive, one is negative</li>
            <li>The sign of b tells us which factor has the larger absolute value</li>
            <li>Always consider all possible factor pairs (both positive and negative)</li>
            <li>Use either <strong>guess and check</strong> or <strong>reasoning</strong> to find the correct pair</li>
            <li>The multiplication frame helps organize factorisation systematically</li>
            <li>Always check your answer by expanding back</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
