import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function FactorisationPositiveNotes() {
  const [showSolution1, setShowSolution1] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Factorisation of x² + bx + c (where c {'>'}  0 and b {'>'} 0)</h1>
        <p className="mt-2 text-emerald-100">Using multiplication frames and rectangular arrays to factorise quadratics</p>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-8">

        {/* Section 1: The Rectangular Array Method */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Understanding the Rectangular Array
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We learned how to use the multiplication frame to expand <MathText>{'$(x + 2)(x + 3)$'}</MathText> to get <MathText>{'$x^2 + 5x + 6$'}</MathText>.
              Now we want to do the reverse: factorise <MathText>{'$x^2 + 5x + 6$'}</MathText> to obtain <MathText>{'$(x + 2)(x + 3)$'}</MathText>.
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-4">
                Key Insight: The Rectangular Array
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The expansion creates a <strong>rectangular array</strong> divided into <strong>four distinct regions</strong>:
              </p>

              <div className="flex justify-center mb-4">
                <div className="border-2 border-gray-600 dark:border-gray-400">
                  <div className="flex">
                    <div className="w-16 h-12 flex items-center justify-center font-semibold border-b border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">×</div>
                    <div className="w-28 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">x</div>
                    <div className="w-28 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">+3</div>
                  </div>
                  <div className="flex">
                    <div className="w-16 h-20 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">x</div>
                    <div className="w-28 h-20 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">
                      <div className="text-center">
                        <MathText>{'$x^2$'}</MathText>
                        <p className="text-xs mt-1">x × x</p>
                      </div>
                    </div>
                    <div className="w-28 h-20 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300">
                      <div className="text-center">
                        +3x
                        <p className="text-xs mt-1">x × 3</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-t border-gray-600 dark:border-gray-400">
                    <div className="w-16 h-20 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">+2</div>
                    <div className="w-28 h-20 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">
                      <div className="text-center">
                        +2x
                        <p className="text-xs mt-1">2 × x</p>
                      </div>
                    </div>
                    <div className="w-28 h-20 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-gray-700 dark:text-gray-300">
                      <div className="text-center">
                        +6
                        <p className="text-xs mt-1">2 × 3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong className="text-yellow-700 dark:text-yellow-400">Top-left region:</strong> x × x = <MathText>{'$x^2$'}</MathText> disc</li>
                <li><strong className="text-green-700 dark:text-green-400">Bottom-right region:</strong> 2 × 3 = 6 (constant discs)</li>
                <li><strong className="text-blue-700 dark:text-blue-400">Remaining two regions:</strong> 3x + 2x = 5x (x discs)</li>
              </ul>

              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-emerald-300 dark:border-emerald-700">
                <p className="font-semibold text-emerald-700 dark:text-emerald-300">Result:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$'}</MathText>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Method 1 - Using Algebra Discs and Multiplication Frame */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Method 1: Using Algebra Discs and Multiplication Frame
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To factorise <MathText>{'$x^2 + 5x + 6$'}</MathText>, we need to arrange the terms in the multiplication frame.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4">
                Step-by-Step Process:
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Step 1: Place the x² and constant terms</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Notice that there is only one region to put the <MathText>{'$x^2$'}</MathText> disc: the <strong>top left</strong> region (x × x).
                    The constant 6 goes in the <strong>bottom right</strong> region (the product of two numbers).
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    The <MathText>{'$x^2$'}</MathText> disc is the result of x in the factor (x + 2) and x in the factor (x + 3), i.e., x × x = <MathText>{'$x^2$'}</MathText>
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Step 2: Consider possible pairs of factors</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    For the constant term 6, we have to consider all <strong>possible pairs of factors</strong> whose product is 6:
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700">
                    <p className="text-gray-700 dark:text-gray-300">6 = 1 × 6 = 2 × 3</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Step 3: Find the pair that gives the correct x-term</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    We need the pair whose <strong>sum</strong> equals the coefficient of the x-term (which is 5).
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700">
                    <p className="text-gray-700 dark:text-gray-300">1 + 6 = 7 ✗</p>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">2 + 3 = 5 ✓</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-2">
                      We use 2 and 3 because 2 + 3 = 5 (the coefficient of 5x)
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Step 4: Fill in the multiplication frame</p>
                  <div className="flex justify-center mb-3">
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
                  <p className="text-center font-semibold text-gray-700 dark:text-gray-300">
                    <MathText>{'$x^2 + 5x + 6 = (x + 2)(x + 3)$'}</MathText>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Method 2 - Using Multiplication Frame Only */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Method 2: Using Multiplication Frame Only (Faster!)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Once we understand the pattern, we can factorise without drawing all the discs. Let's factorise <MathText>{'$x^2 + 5x + 6$'}</MathText> using just the frame.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-4">
                Quick Method:
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Step 1: Write the x² term and constant in frame</p>
                  <div className="flex justify-center mb-2">
                    <div className="border-2 border-gray-600 dark:border-gray-400">
                      <div className="flex">
                        <div className="w-16 h-12 flex items-center justify-center font-semibold border-b border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">×</div>
                        <div className="w-32 h-12 border-b border-l border-gray-600 dark:border-gray-400"></div>
                      </div>
                      <div className="flex">
                        <div className="w-16 h-16 border-r border-gray-600 dark:border-gray-400"></div>
                        <div className="w-32 h-16 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 border-r-2 border-b-2 border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300"><MathText>{'$x^2$'}</MathText></div>
                        <div className="w-32 h-16 border-b-2 border-gray-600 dark:border-gray-400"></div>
                      </div>
                      <div className="flex border-t border-gray-600 dark:border-gray-400">
                        <div className="w-16 h-16 border-r border-gray-600 dark:border-gray-400"></div>
                        <div className="w-32 h-16 border-r-2 border-gray-600 dark:border-gray-400"></div>
                        <div className="w-32 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-gray-700 dark:text-gray-300">+6</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Step 2: Find pairs of factors of 6</p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-purple-300 dark:border-purple-700 text-gray-700 dark:text-gray-300">
                    <p>6 = 1 × 6 (sum = 7)</p>
                    <p className="font-semibold">6 = 2 × 3 (sum = 5) ✓ Use this!</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Step 3: Fill in the frame</p>
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
                  <p className="text-center font-semibold text-gray-700 dark:text-gray-300">
                    Answer: <MathText>{'$(x + 2)(x + 3)$'}</MathText>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded">
              <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                💡 Key Pattern to Remember:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                For <MathText>{'$x^2 + bx + c$'}</MathText>, find two numbers that:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li><strong>Multiply</strong> to give c (the constant)</li>
                <li><strong>Add</strong> to give b (the coefficient of x)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Worked Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Worked Examples
          </h2>

          <div className="space-y-6">
            {/* Example 1 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Factorise <MathText>{'$x^2 + 7x + 6$'}</MathText>
              </h3>
              <div className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                <p>Find two numbers that multiply to 6 and add to 7:</p>
                <p className="ml-4">6 = 1 × 6, and 1 + 6 = 7 ✓</p>
                <p className="font-semibold"><MathText>{'$x^2 + 7x + 6 = (x + 1)(x + 6)$'}</MathText></p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Example 2: Factorise <MathText>{'$x^2 + 6x + 8$'}</MathText>
              </h3>
              <div className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                <p>Find two numbers that multiply to 8 and add to 6:</p>
                <p className="ml-4">8 = 1 × 8 (sum = 9) ✗</p>
                <p className="ml-4">8 = 2 × 4 (sum = 6) ✓</p>
                <p className="font-semibold"><MathText>{'$x^2 + 6x + 8 = (x + 2)(x + 4)$'}</MathText></p>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Example 3: Factorise <MathText>{'$x^2 + 9x + 8$'}</MathText>
              </h3>
              <div className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                <p>Find two numbers that multiply to 8 and add to 9:</p>
                <p className="ml-4">8 = 1 × 8 (sum = 9) ✓</p>
                <p className="ml-4">8 = 2 × 4 (sum = 6) ✗</p>
                <p className="font-semibold"><MathText>{'$x^2 + 9x + 8 = (x + 1)(x + 8)$'}</MathText></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Practice Problems */}
        <section className="mb-8">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Factorise each expression
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 italic">
              Use both methods: (i) with algebra discs and multiplication frame, (ii) with multiplication frame only
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 mb-3">
              <div>(a) <MathText>{'$x^2 + 7x + 6$'}</MathText></div>
              <div>(b) <MathText>{'$x^2 + 6x + 8$'}</MathText></div>
              <div>(c) <MathText>{'$x^2 + 9x + 8$'}</MathText></div>
              <div>(d) <MathText>{'$x^2 + 8x + 12$'}</MathText></div>
              <div>(e) <MathText>{'$x^2 + 7x + 12$'}</MathText></div>
              <div>(f) <MathText>{'$x^2 + 13x + 12$'}</MathText></div>
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
                  <p>(a) <MathText>{'$(x + 1)(x + 6)$'}</MathText></p>
                  <p>(b) <MathText>{'$(x + 2)(x + 4)$'}</MathText></p>
                  <p>(c) <MathText>{'$(x + 1)(x + 8)$'}</MathText></p>
                  <p>(d) <MathText>{'$(x + 2)(x + 6)$'}</MathText></p>
                  <p>(e) <MathText>{'$(x + 3)(x + 4)$'}</MathText></p>
                  <p>(f) <MathText>{'$(x + 1)(x + 12)$'}</MathText></p>
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
            <li>To factorise <MathText>{'$x^2 + bx + c$'}</MathText> where b {'>'} 0 and c {'>'} 0:</li>
            <li>Find two numbers that <strong>multiply to c</strong> and <strong>add to b</strong></li>
            <li>Use the multiplication frame to organize the factorisation systematically</li>
            <li>The rectangular array has four regions: <MathText>{'$x^2$'}</MathText> (top-left), constant (bottom-right), and two x-terms</li>
            <li>Always check your answer by expanding back</li>
            <li>Method 2 (frame only) is faster once you understand the pattern</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
