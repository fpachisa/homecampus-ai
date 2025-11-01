import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function PrimeNumbersAndFactorisation() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Prime Numbers and Prime Factorisation</h1>
        <p className="mt-2 text-purple-100">
          Discover the building blocks of all whole numbers
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Real-World Connection */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-l-4 border-cyan-500 p-5 rounded mb-8">
          <h3 className="font-semibold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center gap-2">
            <span className="text-2xl">🔐</span>
            Did You Know?
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Modern encryption technology, which keeps our online banking and personal data secure, relies heavily on the mathematics of prime numbers! From online payments to mobile banking, encryption uses prime numbers to protect our information from being misused or stolen.
          </p>
        </div>

        {/* Section 1: Prime vs Composite Numbers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Prime Numbers and Composite Numbers
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Based on the number of factors a whole number has, we can classify it as either <strong className="text-purple-600 dark:text-purple-400">prime</strong> or <strong className="text-pink-600 dark:text-pink-400">composite</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {/* Prime Number Definition */}
              <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-300 dark:border-purple-700 p-4 rounded">
                <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2">Prime Number</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  A prime number has <strong>only two factors</strong>: 1 and itself.
                </p>
                <p className="text-purple-700 dark:text-purple-400 text-sm font-semibold">
                  Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...
                </p>
              </div>

              {/* Composite Number Definition */}
              <div className="bg-pink-50 dark:bg-pink-900/20 border-2 border-pink-300 dark:border-pink-700 p-4 rounded">
                <h4 className="font-bold text-pink-800 dark:text-pink-300 mb-2">Composite Number</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  A composite number has <strong>more than two factors</strong>.
                </p>
                <p className="text-pink-700 dark:text-pink-400 text-sm font-semibold">
                  Examples: 4, 6, 8, 9, 10, 12, 14, 15, 16, 18...
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 p-4 rounded mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-yellow-800 dark:text-yellow-300">Important:</strong> The numbers 0 and 1 are <strong>neither prime nor composite</strong>. They are special cases in mathematics.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example: Determining Prime vs Composite
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">(a) Is 143 prime or composite?</p>
                  <p className="ml-4 mt-1">
                    <MathText>Check if 143 is divisible by any prime number smaller than 143:

                    $143 \div 11 = 13$ (exactly!)

                    Since 143 has factors 1, 11, 13, and 143, it has more than two factors.

                    **∴ 143 is a composite number**</MathText>
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">(b) Is 29 prime or composite?</p>
                  <p className="ml-4 mt-1">
                    Check if 29 is divisible by prime numbers 2, 3, 5, 7:
                    <br/>
                    29 is not divisible by any of these primes.
                    <br/>
                    29 has only two factors: 1 and 29 itself.
                    <br/>
                    <strong className="text-purple-600 dark:text-purple-400">∴ 29 is a prime number</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Identifying Prime and Composite Numbers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Determine whether each number is prime or composite: (a) 234, (b) 171, (c) 31
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold">(a) 234 is composite</p>
                    <p className="ml-4">234 ends in an even digit (4), so it is divisible by 2. It has factors other than 1 and itself.</p>
                  </div>
                  <div>
                    <p className="font-semibold">(b) 171 is composite</p>
                    <p className="ml-4"><MathText>$171 = 9 \times 19$, so it has factors 1, 9, 19, and 171.</MathText></p>
                  </div>
                  <div>
                    <p className="font-semibold">(c) 31 is prime</p>
                    <p className="ml-4">31 is not divisible by 2, 3, or 5. It has only two factors: 1 and 31.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Prime Factorisation - Factor Trees */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Prime Factorisation Using Factor Trees
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Expressing a composite number as a product of its <strong>prime factors</strong> is called <strong className="text-purple-600 dark:text-purple-400">prime factorisation</strong>. One visual method is using a <strong>factor tree</strong>.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example: Factor Tree for 30
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Let's express 30 as a product of its prime factors:
              </p>

              <div className="bg-white dark:bg-gray-800 p-6 rounded border border-blue-200 dark:border-blue-700 mb-4">
                <div className="font-mono text-center space-y-3">
                  <div className="text-xl font-bold text-gray-900 dark:text-gray-100">30</div>
                  <div className="flex justify-center items-center gap-8">
                    <span className="text-gray-600 dark:text-gray-400">↙</span>
                    <span className="text-gray-600 dark:text-gray-400">↘</span>
                  </div>
                  <div className="flex justify-center gap-16">
                    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded border-2 border-purple-500 font-bold">2</span>
                    <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded border border-gray-400">15</span>
                  </div>
                  <div className="flex justify-center items-center gap-8">
                    <span className="invisible">↙</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-16">↙</span>
                    <span className="text-gray-600 dark:text-gray-400">↘</span>
                  </div>
                  <div className="flex justify-center gap-12">
                    <span className="invisible px-4 py-2">_</span>
                    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded border-2 border-purple-500 font-bold">3</span>
                    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded border-2 border-purple-500 font-bold">5</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step-by-step:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><MathText>Split 30 into any factor pair: $30 = 2 \times 15$</MathText></li>
                <li>Circle 2 (it's prime, so we stop)</li>
                <li><MathText>Split 15 further: $15 = 3 \times 5$</MathText></li>
                <li>Circle 3 and 5 (both are prime, so we stop)</li>
              </ol>

              <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded border border-purple-300 dark:border-purple-600">
                <p className="text-gray-800 dark:text-gray-200">
                  <MathText>{`**Prime factorisation of 30:** $30 = 2 \\times 3 \\times 5$`}</MathText>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{`**Important Note:** There are multiple ways to create a factor tree for the same number, but the final prime factorisation will always be the same! For example, we could have started with $30 = 5 \\times 6$ instead, but we'd still end up with $2 \\times 3 \\times 5$.`}</MathText>
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Create a Factor Tree
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Find the prime factorisation of 54 using a factor tree.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded border border-gray-300 dark:border-gray-600 mb-4">
                  <div className="font-mono text-center space-y-3">
                    <div className="text-xl font-bold text-gray-900 dark:text-gray-100">54</div>
                    <div className="flex justify-center items-center gap-8">
                      <span className="text-gray-600 dark:text-gray-400">↙</span>
                      <span className="text-gray-600 dark:text-gray-400">↘</span>
                    </div>
                    <div className="flex justify-center gap-16">
                      <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded border border-gray-400">6</span>
                      <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded border border-gray-400">9</span>
                    </div>
                    <div className="flex justify-center items-center gap-16">
                      <div className="flex flex-col items-center">
                        <div className="flex gap-4 mb-2">
                          <span className="text-gray-600 dark:text-gray-400">↙</span>
                          <span className="text-gray-600 dark:text-gray-400">↘</span>
                        </div>
                        <div className="flex gap-6">
                          <span className="px-3 py-2 bg-purple-100 dark:bg-purple-900/30 rounded border-2 border-purple-500 font-bold text-sm">2</span>
                          <span className="px-3 py-2 bg-purple-100 dark:bg-purple-900/30 rounded border-2 border-purple-500 font-bold text-sm">3</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex gap-4 mb-2">
                          <span className="text-gray-600 dark:text-gray-400">↙</span>
                          <span className="text-gray-600 dark:text-gray-400">↘</span>
                        </div>
                        <div className="flex gap-6">
                          <span className="px-3 py-2 bg-purple-100 dark:bg-purple-900/30 rounded border-2 border-purple-500 font-bold text-sm">3</span>
                          <span className="px-3 py-2 bg-purple-100 dark:bg-purple-900/30 rounded border-2 border-purple-500 font-bold text-sm">3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{`**Prime factorisation:** $54 = 2 \\times 3 \\times 3 \\times 3$`}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>Or using index notation (which we'll learn next): $54 = 2 \times 3^3$</MathText>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Index Notation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Index Notation (Powers)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When a prime factor appears multiple times in a prime factorisation, we can use <strong className="text-blue-600 dark:text-blue-400">index notation</strong> (also called <em>powers</em>) to write it more concisely.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Understanding Index Notation
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <MathText>If we have $2 \times 2 \times 2 = 2^3$, which is read as **"2 to the power of 3"** or **"2 cubed"**.</MathText>
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center justify-center gap-12">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2"><MathText>$2^3$</MathText></p>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <p>↑ <strong className="text-blue-600 dark:text-blue-400">base</strong></p>
                        <p className="ml-4">↗ <strong className="text-purple-600 dark:text-purple-400">index/power</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The <strong className="text-blue-600 dark:text-blue-400">base</strong> is the number being multiplied (2)</li>
                  <li>The <strong className="text-purple-600 dark:text-purple-400">index</strong> (or power/exponent) shows how many times to multiply the base (3)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Common Powers:</h3>
              <div className="grid md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
                <div><MathText>$2^2$ = "2 squared" = $2 \times 2 = 4$</MathText></div>
                <div><MathText>$3^2$ = "3 squared" = $3 \times 3 = 9$</MathText></div>
                <div><MathText>$2^3$ = "2 cubed" = $2 \times 2 \times 2 = 8$</MathText></div>
                <div><MathText>$5^2$ = "5 squared" = $5 \times 5 = 25$</MathText></div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example: Prime Factorisation with Index Notation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Express 720 as the product of its prime factors in index notation.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 mb-2">Using a factor tree, we find:</p>
                <p className="text-gray-900 dark:text-gray-100 mb-2"><MathText>$720 = 2 \times 2 \times 2 \times 2 \times 3 \times 3 \times 5$</MathText></p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">Count the repeated factors:</p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700 dark:text-gray-300">
                  <li><MathText>2 appears 4 times → $2^4$</MathText></li>
                  <li><MathText>3 appears 2 times → $3^2$</MathText></li>
                  <li><MathText>5 appears 1 time → $5$ (or $5^1$)</MathText></li>
                </ul>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded border border-purple-300 dark:border-purple-600">
                <p className="text-gray-800 dark:text-gray-200 font-semibold">
                  <MathText>{`**Answer:** $720 = 2^4 \\times 3^2 \\times 5$`}</MathText>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Index Notation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Express 702 as the product of its prime factors in index notation.
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Solution:</strong>
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Using a factor tree or successive division:</p>
                  <p><MathText>$702 = 2 \times 351$</MathText></p>
                  <p><MathText>$351 = 3 \times 117$</MathText></p>
                  <p><MathText>$117 = 3 \times 39$</MathText></p>
                  <p><MathText>$39 = 3 \times 13$</MathText></p>
                  <p className="mt-3"><MathText>So: $702 = 2 \times 3 \times 3 \times 3 \times 13$</MathText></p>
                  <p className="font-semibold text-purple-700 dark:text-purple-400 mt-2">
                    <MathText>{`**Answer:** $702 = 2 \\times 3^3 \\times 13$`}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Successive Short Division (Alternative Method) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Successive Short Division Method
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Besides factor trees, we can also find prime factors using the <strong className="text-blue-600 dark:text-blue-400">successive short division</strong> method. This involves dividing by the smallest prime repeatedly.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example: Finding Prime Factors of 360
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 mb-3">
                <div className="font-mono space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="w-8 text-purple-600 dark:text-purple-400 font-bold">2</span>
                    <span className="border-l-2 border-gray-400 dark:border-gray-600 pl-3">360</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-8 text-purple-600 dark:text-purple-400 font-bold">2</span>
                    <span className="border-l-2 border-gray-400 dark:border-gray-600 pl-3">180</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-8 text-purple-600 dark:text-purple-400 font-bold">2</span>
                    <span className="border-l-2 border-gray-400 dark:border-gray-600 pl-3">90</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-8 text-purple-600 dark:text-purple-400 font-bold">3</span>
                    <span className="border-l-2 border-gray-400 dark:border-gray-600 pl-3">45</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-8 text-purple-600 dark:text-purple-400 font-bold">3</span>
                    <span className="border-l-2 border-gray-400 dark:border-gray-600 pl-3">15</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-8 text-purple-600 dark:text-purple-400 font-bold">5</span>
                    <span className="border-l-2 border-gray-400 dark:border-gray-600 pl-3">5</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-8"></span>
                    <span className="border-l-2 border-gray-400 dark:border-gray-600 pl-3 font-bold text-purple-600 dark:text-purple-400">1</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <MathText>Read the prime factors from left to right: $2, 2, 2, 3, 3, 5$</MathText>
              </p>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded border border-purple-300 dark:border-purple-600">
                <p className="text-gray-800 dark:text-gray-200 font-semibold">
                  <MathText>{`**Answer:** $360 = 2 \\times 2 \\times 2 \\times 3 \\times 3 \\times 5 = 2^3 \\times 3^2 \\times 5$`}</MathText>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-gray-100">Pro Tip:</strong> When using successive short division:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                <li>Always start with the smallest prime (2)</li>
                <li>Keep dividing by the same prime until you can't anymore</li>
                <li>Then move to the next prime (3, 5, 7, ...)</li>
                <li>Stop when you reach 1</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Successive Short Division
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Use successive short division to find the prime factorisation of 180 in index notation.
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded border border-gray-300 dark:border-gray-600 mb-3">
                  <div className="font-mono space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="w-8 text-purple-600 dark:text-purple-400 font-bold">2</span>
                      <span className="border-l-2 border-gray-400 dark:border-gray-600 pl-3">180</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-8 text-purple-600 dark:text-purple-400 font-bold">2</span>
                      <span className="border-l-2 border-gray-400 dark:border-gray-600 pl-3">90</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-8 text-purple-600 dark:text-purple-400 font-bold">3</span>
                      <span className="border-l-2 border-gray-400 dark:border-gray-600 pl-3">45</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-8 text-purple-600 dark:text-purple-400 font-bold">3</span>
                      <span className="border-l-2 border-gray-400 dark:border-gray-600 pl-3">15</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-8 text-purple-600 dark:text-purple-400 font-bold">5</span>
                      <span className="border-l-2 border-gray-400 dark:border-gray-600 pl-3">5</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-8"></span>
                      <span className="border-l-2 border-gray-400 dark:border-gray-600 pl-3 font-bold text-purple-600 dark:text-purple-400">1</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>Prime factors: $2, 2, 3, 3, 5$</MathText>
                </p>
                <p className="font-semibold text-purple-700 dark:text-purple-400">
                  <MathText>{`**Answer:** $180 = 2^2 \\times 3^2 \\times 5$`}</MathText>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Advanced Section - Collapsible */}
        <div className="mt-6">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
          >
            <span>{showAdvanced ? '▼' : '▶'}</span>
            <span>Advanced: Why Prime Factorisation is Always the Same</span>
          </button>
          {showAdvanced && (
            <div className="mt-4 ml-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded border-l-2 border-blue-500">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                No matter which method you use (factor tree or successive division), or which factors you choose first, you'll always get the same prime factorisation. This is a fundamental property in mathematics called the <strong>Fundamental Theorem of Arithmetic</strong>.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>For example, whether you split 280 as $2 \times 140$ or as $10 \times 28$ initially, you'll always end up with $2^3 \times 5 \times 7$.</MathText>
              </p>
            </div>
          )}
        </div>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Prime numbers</strong> have only two factors: 1 and themselves (e.g., 2, 3, 5, 7, 11...)
            </li>
            <li>
              <strong>Composite numbers</strong> have more than two factors (e.g., 4, 6, 8, 9, 10...)
            </li>
            <li>
              0 and 1 are neither prime nor composite
            </li>
            <li>
              <strong>Prime factorisation</strong> expresses a composite number as a product of prime numbers only
            </li>
            <li>
              <strong>Factor trees</strong> and <strong>successive short division</strong> are two methods to find prime factors
            </li>
            <li>
              <MathText>{`**Index notation** uses powers to show repeated factors: $2 \\times 2 \\times 2 = 2^3$`}</MathText>
            </li>
            <li>
              The prime factorisation of a number is unique - it's always the same regardless of the method used
            </li>
            <li>
              <MathText>{`In index notation like $2^3$: 2 is the **base**, 3 is the **index/power**`}</MathText>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
