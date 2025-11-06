import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function QuadraticExpansionNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Expansion of Quadratic Expressions</h1>
        <p className="mt-2 text-cyan-100">Using multiplication frames and grid method to expand (px + q)(rx + s)</p>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-8">

        {/* Section 1: Introduction to Multiplication Frame */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Multiplication Frame (Grid Method)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We've learned that 2(x + 3) can be expanded using the Distributive Law. We can also represent this expansion using a <strong>multiplication frame</strong> (also called the grid method).
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example: 2(x + 3) using Multiplication Frame
              </h3>
              <div className="flex justify-center mb-4">
                <div className="border-2 border-gray-600 dark:border-gray-400">
                  {/* Labels */}
                  <div className="flex">
                    <div className="w-16 h-12 flex items-center justify-center font-semibold border-b border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">
                      ×
                    </div>
                    <div className="w-24 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">
                      x
                    </div>
                    <div className="w-24 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">
                      +3
                    </div>
                  </div>
                  {/* Row */}
                  <div className="flex">
                    <div className="w-16 h-16 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">
                      2
                    </div>
                    <div className="w-24 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">
                      2x
                    </div>
                    <div className="w-24 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-gray-700 dark:text-gray-300">
                      6
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-700 dark:text-gray-300">
                Result: 2(x + 3) = 2x + 6
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              This method will be very useful for factorising quadratic expressions later!
            </p>
          </div>
        </section>

        {/* Section 2: Expanding (px + q)(rx + s) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Expanding (x + 2)(x + 3) Using the Grid Method
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Let's use the multiplication frame to expand (x + 2)(x + 3). The expression (x + 2)(x + 3) has two factors: (x + 2) and (x + 3).
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-4">
                Step-by-Step Process:
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Step 1: Draw the frame</p>
                  <div className="flex justify-center mb-2">
                    <div className="border-2 border-gray-600 dark:border-gray-400">
                      <div className="flex">
                        <div className="w-16 h-12 flex items-center justify-center font-semibold border-b border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">×</div>
                        <div className="w-24 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">x</div>
                        <div className="w-24 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">+3</div>
                      </div>
                      <div className="flex">
                        <div className="w-16 h-16 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">x</div>
                        <div className="w-24 h-16 border-r border-gray-600 dark:border-gray-400"></div>
                        <div className="w-24 h-16"></div>
                      </div>
                      <div className="flex border-t border-gray-600 dark:border-gray-400">
                        <div className="w-16 h-16 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">+2</div>
                        <div className="w-24 h-16 border-r border-gray-600 dark:border-gray-400"></div>
                        <div className="w-24 h-16"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Step 2: Fill in each cell by multiplying</p>
                  <div className="flex justify-center mb-2">
                    <div className="border-2 border-gray-600 dark:border-gray-400">
                      <div className="flex">
                        <div className="w-16 h-12 flex items-center justify-center font-semibold border-b border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">×</div>
                        <div className="w-24 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">x</div>
                        <div className="w-24 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">+3</div>
                      </div>
                      <div className="flex">
                        <div className="w-16 h-16 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">x</div>
                        <div className="w-24 h-16 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300"><MathText>{'$x^2$'}</MathText></div>
                        <div className="w-24 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300">+3x</div>
                      </div>
                      <div className="flex border-t border-gray-600 dark:border-gray-400">
                        <div className="w-16 h-16 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">+2</div>
                        <div className="w-24 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">+2x</div>
                        <div className="w-24 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-gray-700 dark:text-gray-300">+6</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    Color coding: Yellow = x² term, Blue = x terms, Green = constant
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Step 3: Add all terms together</p>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700 text-gray-700 dark:text-gray-300">
                    <p>(x + 2)(x + 3) = <MathText>{'$x^2$'}</MathText> + 3x + 2x + 6</p>
                    <p className="ml-16">= <MathText>{'$x^2$'}</MathText> + 5x + 6</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 p-4 rounded">
              <h3 className="font-semibold text-cyan-800 dark:text-cyan-300 mb-2">
                📊 The Rectangular Array Pattern
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Notice that the terms form a <strong>rectangular array</strong> divided into four distinct regions:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Top-left: the x² disc (x × x)</li>
                <li>Bottom-right: the constant discs (2 × 3 = 6)</li>
                <li>Remaining two regions: the x discs (3x + 2x = 5x)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Worked Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Worked Examples
          </h2>

          <div className="space-y-6">
            {/* Example 1 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Expand (3x + 1)(x − 2)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution using grid method:</strong>
              </p>
              <div className="flex justify-center my-4">
                <div className="border-2 border-gray-600 dark:border-gray-400">
                  <div className="flex">
                    <div className="w-16 h-12 flex items-center justify-center font-semibold border-b border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">×</div>
                    <div className="w-24 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">x</div>
                    <div className="w-24 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">−2</div>
                  </div>
                  <div className="flex">
                    <div className="w-16 h-16 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">3x</div>
                    <div className="w-24 h-16 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300"><MathText>{'$3x^2$'}</MathText></div>
                    <div className="w-24 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300">−6x</div>
                  </div>
                  <div className="flex border-t border-gray-600 dark:border-gray-400">
                    <div className="w-16 h-16 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">+1</div>
                    <div className="w-24 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">+x</div>
                    <div className="w-24 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-gray-700 dark:text-gray-300">−2</div>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-gray-700 dark:text-gray-300">
                <p>(3x + 1)(x − 2) = <MathText>{'$3x^2$'}</MathText> − 6x + x − 2</p>
                <p className="ml-20 font-semibold">= <MathText>{'$3x^2$'}</MathText> − 5x − 2</p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Example 2: Expand (3y − 4)(2y − 1)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="text-gray-700 dark:text-gray-300 space-y-1">
                <p>(3y − 4)(2y − 1)</p>
                <p>= 3y × 2y + 3y × (−1) + (−4) × 2y + (−4) × (−1)</p>
                <p>= <MathText>{'$6y^2$'}</MathText> − 3y − 8y + 4</p>
                <p className="font-semibold">= <MathText>{'$6y^2$'}</MathText> − 11y + 4</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Practice Problems */}
        <section className="mb-8">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Expand using the grid method
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 mb-3">
              <div>(a) (x + 3)(x + 4)</div>
              <div>(b) (2x + 1)(x − 3)</div>
              <div>(c) (3x + 1)(x − 2)</div>
              <div>(d) (3 − 2x)(3x + 1)</div>
              <div>(e) (3 − 2p)(4 − 3p)</div>
              <div>(f) (−3x − 2)(2x + 3)</div>
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
                  <p>(a) <MathText>{'$x^2 + 7x + 12$'}</MathText></p>
                  <p>(b) <MathText>{'$2x^2 − 5x − 3$'}</MathText></p>
                  <p>(c) <MathText>{'$3x^2 − 5x − 2$'}</MathText></p>
                  <p>(d) <MathText>{'$−6x^2 − 3x + 3$'}</MathText></p>
                  <p>(e) <MathText>{'$6p^2 − 17p + 12$'}</MathText></p>
                  <p>(f) <MathText>{'$−6x^2 − 13x − 6$'}</MathText></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 5: Expanding Expressions with Cubes and Squares */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Expanding Expressions Involving Squares and Cubes
          </h2>

          <div className="mb-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                Example: Expand <MathText>{'$ab(ac + b^2)$'}</MathText>
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong>
              </p>
              <div className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <p><MathText>{'$ab(ac + b^2)$'}</MathText></p>
                <p>= ab × ac + ab × <MathText>{'$b^2$'}</MathText></p>
                <p>= <MathText>{'$a^2bc + ab^3$'}</MathText></p>
              </div>
              <p className="mt-3 text-sm italic text-gray-600 dark:text-gray-400">
                Remember: <MathText>{'$b \\times b^2 = b^3$'}</MathText> and <MathText>{'$a \\times a = a^2$'}</MathText>
              </p>
            </div>

            <div className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded">
              <h3 className="font-semibold text-rose-800 dark:text-rose-300 mb-2">
                Example: Simplify <MathText>{'$x(xy + y) − y(xy + x)$'}</MathText>
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong>
              </p>
              <div className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <p><MathText>{'$x(xy + y) − y(xy + x)$'}</MathText></p>
                <p>= <MathText>{'$x^2y + xy − xy^2 − xy$'}</MathText></p>
                <p>= <MathText>{'$x^2y − xy^2$'}</MathText></p>
              </div>
              <p className="mt-3 text-sm italic text-gray-600 dark:text-gray-400">
                Note: xy and −xy cancel out, and <MathText>{'$x^2y \\neq xy^2$'}</MathText> (different powers)
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Expand and simplify
            </h3>
            <div className="space-y-2 text-gray-700 dark:text-gray-300 mb-3">
              <div>(a) <MathText>{'$xy(yz + x^2 − xy)$'}</MathText></div>
              <div>(b) <MathText>{'$h^2(km + n) − m(h^2m − h^2k)$'}</MathText></div>
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
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold">(a)</p>
                    <p><MathText>{'$xy(yz + x^2 − xy) = xy^2z + x^3y − x^2y^2$'}</MathText></p>
                  </div>
                  <div>
                    <p className="font-semibold">(b)</p>
                    <p><MathText>{'$h^2(km + n) − m(h^2m − h^2k)$'}</MathText></p>
                    <p>= <MathText>{'$h^2km + h^2n − h^2m^2 + h^2km$'}</MathText></p>
                    <p>= <MathText>{'$2h^2km + h^2n − h^2m^2$'}</MathText></p>
                  </div>
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
            <li>The <strong>multiplication frame (grid method)</strong> helps visualize quadratic expansion</li>
            <li>To expand (px + q)(rx + s), multiply each term in the first bracket by each term in the second</li>
            <li>The result forms a rectangular array with four regions: x² term, x terms, and constant</li>
            <li>Always combine like terms after expanding</li>
            <li>Watch for negative signs when multiplying</li>
            <li>For expressions with cubes/squares: <MathText>{'$a \\times a^2 = a^3$'}</MathText> and <MathText>{'$b \\times b^2 = b^3$'}</MathText></li>
            <li>The grid method will be essential for factorising quadratic expressions later!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
