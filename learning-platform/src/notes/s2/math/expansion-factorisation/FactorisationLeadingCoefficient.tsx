import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function FactorisationLeadingCoefficientNotes() {
  const [showSolution1, setShowSolution1] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 dark:from-violet-600 dark:to-purple-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Factorisation of ax² + bx + c (where a ≠ 1)</h1>
        <p className="mt-2 text-violet-100">Using guess and check or reasoning methods for harder factorisations</p>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-8">

        {/* Section 1: Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Challenge: When the Coefficient of x² is Not 1
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If the coefficient of <MathText>{'$x^2$'}</MathText> is not equal to 1, i.e., a ≠ 1, we can still use guess and check to factorise <MathText>{'$ax^2 + bx + c$'}</MathText>. We can also use reasoning to find the factors of <MathText>{'$ax^2 + bx + c$'}</MathText>, but we have to first observe a pattern.
            </p>

            <div className="bg-violet-50 dark:bg-violet-900/20 border-l-4 border-violet-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-violet-800 dark:text-violet-300 mb-3">
                Key Observation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Let's use an example to illustrate both methods. We can also use reasoning to find the factors of <MathText>{'$ax^2 + bx + c$'}</MathText>, but we have to first observe a pattern.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Example: Factorise <MathText>{'$2x^2 + 7x − 15$'}</MathText>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Method 1 - Guess and Check */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Method 1: Guess and Check
          </h2>

          <div className="mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4">
                Step-by-Step: Factorise <MathText>{'$2x^2 + 7x − 15$'}</MathText>
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Step 1: Find factor pairs of −15 (constant)</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 text-gray-700 dark:text-gray-300">
                    <p>−15 = 1 × (−15) or (−1) × 15</p>
                    <p>−15 = 3 × (−5) or (−3) × 5</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Step 2: Consider what gives <MathText>{'$2x^2$'}</MathText></p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 text-gray-700 dark:text-gray-300">
                    <p>First, notice that <MathText>{'$2x^2 = 2x \\times x$'}</MathText></p>
                    <p className="text-sm italic mt-2">This means our factors will be of the form (2x ± ?) (x ± ?)</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Step 3: Guess and check with multiplication frame</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Let's try different combinations. We want the numbers whose <strong>product is −30</strong> (from 2 × (−15)) and whose <strong>sum is 7</strong> (coefficient of x).
                  </p>

                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded border border-red-300 dark:border-red-700">
                      <p className="text-gray-700 dark:text-gray-300 mb-2">❌ Try (2x + 5)(x − 3):</p>
                      <div className="flex justify-center mb-2">
                        <div className="border-2 border-gray-600 dark:border-gray-400">
                          <div className="flex">
                            <div className="w-16 h-10 flex items-center justify-center font-semibold border-b border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">×</div>
                            <div className="w-20 h-10 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">x</div>
                            <div className="w-20 h-10 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">−3</div>
                          </div>
                          <div className="flex">
                            <div className="w-16 h-14 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">2x</div>
                            <div className="w-20 h-14 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm"><MathText>{'$2x^2$'}</MathText></div>
                            <div className="w-20 h-14 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300 text-sm">−6x</div>
                          </div>
                          <div className="flex border-t border-gray-600 dark:border-gray-400">
                            <div className="w-16 h-14 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">+5</div>
                            <div className="w-20 h-14 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">+5x</div>
                            <div className="w-20 h-14 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-gray-700 dark:text-gray-300 text-sm">−15</div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">5x + (−6x) = −x ≠ 7x ✗</p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-300 dark:border-green-700">
                      <p className="text-gray-700 dark:text-gray-300 mb-2">✓ Try (2x − 3)(x + 5):</p>
                      <div className="flex justify-center mb-2">
                        <div className="border-2 border-gray-600 dark:border-gray-400">
                          <div className="flex">
                            <div className="w-16 h-10 flex items-center justify-center font-semibold border-b border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">×</div>
                            <div className="w-20 h-10 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">x</div>
                            <div className="w-20 h-10 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">+5</div>
                          </div>
                          <div className="flex">
                            <div className="w-16 h-14 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">2x</div>
                            <div className="w-20 h-14 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm"><MathText>{'$2x^2$'}</MathText></div>
                            <div className="w-20 h-14 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300 text-sm">+10x</div>
                          </div>
                          <div className="flex border-t border-gray-600 dark:border-gray-400">
                            <div className="w-16 h-14 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">−3</div>
                            <div className="w-20 h-14 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">−3x</div>
                            <div className="w-20 h-14 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-gray-700 dark:text-gray-300 text-sm">−15</div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-green-700 dark:text-green-300">10x + (−3x) = 7x ✓ This is correct!</p>
                    </div>
                  </div>

                  <p className="mt-4 text-center font-semibold text-gray-700 dark:text-gray-300 text-lg">
                    <MathText>{'$2x^2 + 7x − 15 = (2x − 3)(x + 5)$'}</MathText>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded">
              <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                ⚠️ Note About Guess and Check:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                In the example above, we got the answer after two trials. Otherwise, we would have to repeat the process for the other six cases.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                If the coefficient of <MathText>{'$x^2$'}</MathText>, −6, has four pairs of factors, so there are four cases for −6 to try (see the PDF example). This can both be tedious and time consuming.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Method 2 - Using Reasoning */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Method 2: Using Reasoning (More Efficient!)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Before we begin, we need to observe a pattern. Consider the example: <MathText>{'$2x^2 + 7x − 15 = (2x − 3)(x + 5)$'}</MathText>
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-4">
                Key Pattern to Observe:
              </h3>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-purple-300 dark:border-purple-700 mb-4">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Notice that the products of the two terms in each diagonal (circled in Fig. 3.17) are equal. This can help us factorise <MathText>{'$2x^2 + 7x − 15$'}</MathText>.
                </p>
                <div className="flex justify-center">
                  <div className="text-center space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">10x × (−3x) = −30x²</p>
                    <p className="text-gray-700 dark:text-gray-300">2x² × (−15) = −30x²</p>
                    <p className="font-semibold text-purple-700 dark:text-purple-300 mt-3">The products are equal!</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                This pattern is ALWAYS true for all quadratic expressions. We can use this to our advantage!
              </p>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-4">
                Reasoning Method Steps:
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Step 1: Find the product of the first and last terms</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-indigo-300 dark:border-indigo-700 text-gray-700 dark:text-gray-300">
                    <p>For <MathText>{'$2x^2 + 7x − 15$'}</MathText>:</p>
                    <p className="font-semibold"><MathText>{'$2x^2 \\times (−15) = −30x^2$'}</MathText></p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Step 2: Find two numbers whose product is −30 and sum is 7</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-indigo-300 dark:border-indigo-700 space-y-2 text-gray-700 dark:text-gray-300">
                    <p>We need numbers that multiply to give −30 and add to give 7:</p>
                    <div className="ml-4 space-y-1">
                      <p>−30 = 1 × (−30) or (−1) × 30</p>
                      <p>−30 = 2 × (−15) or (−2) × 15</p>
                      <p>−30 = 3 × (−10) or <span className="font-semibold">(−3) × 10 ✓</span></p>
                      <p>−30 = 5 × (−6) or (−5) × 6</p>
                    </div>
                    <p className="mt-3">Since (−3) + 10 = 7, we use <span className="font-semibold">−3 and 10</span>.</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Step 3: Fill in the multiplication frame</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                    Since 2x × (−3) = −6x and x × 10 = 10x, we write 2x and x in the remaining two regions.
                  </p>
                  <div className="flex justify-center mb-3">
                    <div className="border-2 border-gray-600 dark:border-gray-400">
                      <div className="flex">
                        <div className="w-16 h-10 flex items-center justify-center font-semibold border-b border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">×</div>
                        <div className="w-20 h-10 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">x</div>
                        <div className="w-20 h-10 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">+5</div>
                      </div>
                      <div className="flex">
                        <div className="w-16 h-14 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">2x</div>
                        <div className="w-20 h-14 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm"><MathText>{'$2x^2$'}</MathText></div>
                        <div className="w-20 h-14 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300 text-sm">+10x</div>
                      </div>
                      <div className="flex border-t border-gray-600 dark:border-gray-400">
                        <div className="w-16 h-14 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">−3</div>
                        <div className="w-20 h-14 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">−3x</div>
                        <div className="w-20 h-14 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-gray-700 dark:text-gray-300 text-sm">−15</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Step 4: Find the HCF of terms in each row and column</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-indigo-300 dark:border-indigo-700 text-gray-700 dark:text-gray-300 space-y-2">
                    <p>For the first row containing <MathText>{'$2x^2$'}</MathText> and −3x, HCF = x, so we put <strong>x</strong></p>
                    <p>For the second row containing 10x and −15, HCF = 5, so we put <strong>5</strong></p>
                    <p>For the first column containing <MathText>{'$2x^2$'}</MathText> and 10x, HCF = 2x, so we put <strong>2x</strong></p>
                    <p>For the second column containing −3x and −15, HCF = −3, so we put <strong>−3</strong></p>
                  </div>
                  <p className="mt-4 text-center font-semibold text-gray-700 dark:text-gray-300 text-lg">
                    <MathText>{'$2x^2 + 7x − 15 = (2x − 3)(x + 5)$'}</MathText>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Worked Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            More Examples
          </h2>

          <div className="space-y-6">
            {/* Example 1 */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Example 1: Factorise <MathText>{'$3x^2 + 10x + 8$'}</MathText>
              </h3>
              <div className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                <p>Step 1: <MathText>{'$3x^2 \\times 8 = 24x^2$'}</MathText></p>
                <p>Step 2: Find two numbers that multiply to 24 and add to 10:</p>
                <p className="ml-4">4 and 6 (since 4 × 6 = 24 and 4 + 6 = 10)</p>
                <p>Step 3-4: Fill frame and find HCFs:</p>
                <p className="font-semibold"><MathText>{'$3x^2 + 10x + 8 = (3x + 4)(x + 2)$'}</MathText></p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 2: Factorise <MathText>{'$6x^2 − 13x + 6$'}</MathText>
              </h3>
              <div className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                <p>Step 1: <MathText>{'$6x^2 \\times 6 = 36x^2$'}</MathText></p>
                <p>Step 2: Find two numbers that multiply to 36 and add to −13:</p>
                <p className="ml-4">−4 and −9 (since (−4) × (−9) = 36 and (−4) + (−9) = −13)</p>
                <p className="font-semibold"><MathText>{'$6x^2 − 13x + 6 = (2x − 3)(3x − 2)$'}</MathText></p>
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
              Try using Method 2 (reasoning) for efficiency!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 mb-3">
              <div>(a) <MathText>{'$2x^2 + 7x − 15$'}</MathText></div>
              <div>(b) <MathText>{'$3x^2 + 7x − 6$'}</MathText></div>
              <div>(c) <MathText>{'$4c^2 + 10c + 4$'}</MathText></div>
              <div>(d) <MathText>{'$5d^2 − 145d + 600$'}</MathText></div>
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
                  <p>(a) <MathText>{'$(2x − 3)(x + 5)$'}</MathText></p>
                  <p>(b) <MathText>{'$(3x − 2)(x + 3)$'}</MathText></p>
                  <p>(c) <MathText>{'$(2c + 1)(2c + 4)$'}</MathText> or <MathText>{'$2(2c + 1)(c + 2)$'}</MathText></p>
                  <p>(d) <MathText>{'$(5d − 145)(d − 600)$'}</MathText> or <MathText>{'$5(d − 29)(d − 120)$'}</MathText></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 6: Negative Leading Coefficient */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Factorising with Negative Leading Coefficient
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Now, how do we factorise an expression with a negative coefficient of <MathText>{'$x^2$'}</MathText>, e.g., <MathText>{'$−2x^2 − 7x + 15$'}</MathText>?
            </p>

            <div className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-rose-800 dark:text-rose-300 mb-3">
                Method: Extract the Negative Sign First
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                One method is to extract the negative sign as follows:
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-rose-300 dark:border-rose-700 space-y-2 text-gray-700 dark:text-gray-300">
                <p><MathText>{'$−2x^2 − 7x + 15 = −(2x^2 + 7x − 15)$'}</MathText></p>
                <p className="ml-4">= <MathText>{'$−(2x − 3)(x + 5)$'}</MathText></p>
                <p className="ml-4">= <MathText>{'$(3 − 2x)(x + 5)$'}</MathText></p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-3">
                Note: We can factorise <MathText>{'$2x^2 + 7x − 15$'}</MathText> using the above method to obtain (2x − 3)(x + 5). Then, <MathText>{'$−2x^2 − 7x + 15 = −(2x^2 + 7x − 15)$'}</MathText> = −(2x − 3)(x + 5)
              </p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded">
              <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                💡 Alternative Expression:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                We can also express the answer as (3 − 2x)(x + 5) since −(2x − 3) = −2x + 3 = 3 − 2x.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Method 1 (Guess and Check):</strong> Try different factor combinations until you find the right one</li>
            <li><strong>Method 2 (Reasoning - Recommended):</strong> Find the product of first and last terms, then find two numbers that multiply to that product and add to the middle coefficient</li>
            <li>The reasoning method is more efficient and systematic</li>
            <li>For negative leading coefficients: factor out −1 first, then factorise</li>
            <li>Always check your answer by expanding back</li>
            <li>The diagonal products in the multiplication frame are always equal</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
