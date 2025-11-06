import { useState } from 'react';

export default function DistributiveLawNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Expansion using the Distributive Law</h1>
        <p className="mt-2 text-green-100">Expanding algebraic expressions of the form a(b + c) and (a + b)(c + d)</p>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-8">

        {/* Section 1: Recap of a(b + c) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Expansion of a(b + c) - Recap
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Expansion</strong> is the process of expressing an algebraic expression as the <strong>sum</strong> and/or <strong>difference</strong> of two or more terms.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">
                The Distributive Law
              </h3>
              <div className="text-center text-xl font-bold text-green-700 dark:text-green-300 mb-4">
                a(b + c) = ab + ac
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                This is called the Distributive Law because the first factor <em>a</em> is <strong>distributed</strong>, or multiplied separately, to each of the two terms <em>b</em> and <em>c</em> in the second factor (b + c).
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Important Rules for Negative Signs:
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="border-l-2 border-blue-300 dark:border-blue-600 pl-4">
                  <p className="font-semibold">Negative of (x + y):</p>
                  <p>−(x + y) = −x − y</p>
                </div>
                <div className="border-l-2 border-blue-300 dark:border-blue-600 pl-4">
                  <p className="font-semibold">Negative of (x − y):</p>
                  <p>−(x − y) = −x + y</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Example: Expand 3(x + 2)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong>
              </p>
              <div className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <p>3(x + 2) = 3 × x + 3 × 2</p>
                <p className="ml-12">= 3x + 6</p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Expanding Using Distributive Law
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Expand each of the following expressions:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <div>(a) 2(x + 5)</div>
              <div>(b) −3(6x − y)</div>
              <div>(c) 5 − a(−2b + 3c)</div>
              <div>(d) −4 − 2a(−7x − 6y)</div>
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
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold">(a) 2(x + 5)</p>
                    <p>= 2x + 10</p>
                  </div>
                  <div>
                    <p className="font-semibold">(b) −3(6x − y)</p>
                    <p>= −18x + 3y</p>
                    <p className="text-sm italic">(Note: −3 × −y = +3y)</p>
                  </div>
                  <div>
                    <p className="font-semibold">(c) 5 − a(−2b + 3c)</p>
                    <p>= 5 + 2ab − 3ac</p>
                  </div>
                  <div>
                    <p className="font-semibold">(d) −4 − 2a(−7x − 6y)</p>
                    <p>= −4 + 14ax + 12ay</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Expansion of (a + b)(c + d) using Rectangle Model */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Expansion of (a + b)(c + d)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We can visualize the expansion of (a + b)(c + d) using a rectangle model. If a, b, c, and d are positive, we can think of this expansion as finding the area of a rectangle with sides (a + b) and (c + d).
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
                Rectangle Model Visualization
              </h3>
              <div className="flex justify-center mb-4">
                <div className="border-2 border-gray-600 dark:border-gray-400">
                  {/* Top labels */}
                  <div className="flex">
                    <div className="w-8 h-8 border-b border-gray-600 dark:border-gray-400"></div>
                    <div className="w-32 h-8 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400">
                      c
                    </div>
                    <div className="w-32 h-8 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400">
                      d
                    </div>
                  </div>
                  {/* First row */}
                  <div className="flex">
                    <div className="w-8 h-24 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400">
                      a
                    </div>
                    <div className="w-32 h-24 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 border-r border-gray-600 dark:border-gray-400">
                      ac
                    </div>
                    <div className="w-32 h-24 flex items-center justify-center bg-green-100 dark:bg-green-900/30">
                      ad
                    </div>
                  </div>
                  {/* Second row */}
                  <div className="flex">
                    <div className="w-8 h-24 flex items-center justify-center font-semibold border-r border-t border-gray-600 dark:border-gray-400">
                      b
                    </div>
                    <div className="w-32 h-24 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 border-r border-t border-gray-600 dark:border-gray-400">
                      bc
                    </div>
                    <div className="w-32 h-24 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 border-t border-gray-600 dark:border-gray-400">
                      bd
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-700 dark:text-gray-300">
                Total Area = ac + ad + bc + bd
              </p>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
                The Distributive Law for (a + b)(c + d)
              </h3>
              <div className="text-center text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">
                (a + b)(c + d) = ac + ad + bc + bd
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                Multiply each term in the first factor (a + b) by each term in the second factor (c + d).
              </p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded">
              <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                💡 Important Note:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                This result is the same for all values of a, b, c, and d. However, the result is the same for all values of a, b, c, and d — even when they're negative!
              </p>
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
                Example 1: Expand (a + b)(7x + 5y)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong>
              </p>
              <div className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <p>(a + b)(7x + 5y)</p>
                <p>= a × 7x + a × 5y + b × 7x + b × 5y</p>
                <p className="font-semibold">= 7ax + 5ay + 7bx + 5by</p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Example 2: Expand (3a + 1)(x − 4y)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong>
              </p>
              <div className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <p>(3a + 1)(x − 4y)</p>
                <p>= 3a × x + 3a × (−4y) + 1 × x + 1 × (−4y)</p>
                <p>= 3ax − 12ay + x − 4y</p>
              </div>
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
                <p className="text-sm font-semibold text-purple-800 dark:text-purple-300">💡 Problem-Solving Tip:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Draw arrows to keep track: first term × first term, first term × second term, second term × first term, second term × second term.
                </p>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Example 3: Expand (x − 6y)(3c + 2d)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong>
              </p>
              <div className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <p>(x − 6y)(3c + 2d)</p>
                <p>= x × 3c + x × 2d + (−6y) × 3c + (−6y) × 2d</p>
                <p>= 3cx + 2dx − 18cy − 12dy</p>
              </div>
            </div>

            {/* Example 4 */}
            <div className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded">
              <h3 className="font-semibold text-rose-800 dark:text-rose-300 mb-2">
                Example 4: Expand (8p − 3q)(2r − 5s)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong>
              </p>
              <div className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <p>(8p − 3q)(2r − 5s)</p>
                <p>= 8p × 2r + 8p × (−5s) + (−3q) × 2r + (−3q) × (−5s)</p>
                <p>= 16pr − 40ps − 6qr + 15qs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice Problems
          </h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Expand each expression
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 mb-3">
              <div>(a) (a + b)(8x + 7y)</div>
              <div>(b) (2c + d)(5x + 9y)</div>
              <div>(c) (5a + 2)(x − 2y)</div>
              <div>(d) (6a + 5b)(3c − d)</div>
              <div>(e) (x − 4y)(2c + 3d)</div>
              <div>(f) (7x − 1)(3a + 2b)</div>
              <div>(g) (6p − 5q)(3r − 4s)</div>
              <div>(h) (2p − 9q)(7x − 3y)</div>
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
                  <p>(a) 8ax + 7ay + 8bx + 7by</p>
                  <p>(b) 10cx + 18cy + 5dx + 9dy</p>
                  <p>(c) 5ax − 10ay + 2x − 4y</p>
                  <p>(d) 18ac − 6ad + 15bc − 5bd</p>
                  <p>(e) 2cx + 3dx − 8cy − 12dy</p>
                  <p>(f) 21ax + 14bx − 3a − 2b</p>
                  <p>(g) 18pr − 24ps − 15qr + 20qs</p>
                  <p>(h) 14px − 6py − 63qx + 27qy</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 5: Simplifying After Expansion */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Simplifying Algebraic Expressions After Expansion
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              After expanding, we often need to <strong>simplify</strong> by combining like terms.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example: Simplify −4x(y + 2z) − 3x(5y − z)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong>
              </p>
              <div className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <p>−4x(y + 2z) − 3x(5y − z)</p>
                <p>= −4xy − 8xz − 15xy + 3xz</p>
                <p>= −4xy − 15xy − 8xz + 3xz <span className="text-sm italic">(group like terms)</span></p>
                <p className="font-semibold">= −19xy − 5xz</p>
              </div>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded">
              <h3 className="font-semibold text-teal-800 dark:text-teal-300 mb-2">
                💡 Equivalence Tip:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Using the Distributive Law to write −4x(y + 2z) − 3x(5y − z) in its equivalent form helps us to simplify the expression.
              </p>
            </div>
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Simplify each expression
            </h3>
            <div className="space-y-2 text-gray-700 dark:text-gray-300 mb-3">
              <div>(a) −3x(y + 4z) − 5x(2y − z)</div>
              <div>(b) 2p(−4q − 3r) − 6q(3p + 2r)</div>
            </div>

            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Solution:</p>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold">(a)</p>
                    <p>−3x(y + 4z) − 5x(2y − z)</p>
                    <p>= −3xy − 12xz − 10xy + 5xz</p>
                    <p>= −13xy − 7xz</p>
                  </div>
                  <div>
                    <p className="font-semibold">(b)</p>
                    <p>2p(−4q − 3r) − 6q(3p + 2r)</p>
                    <p>= −8pq − 6pr − 18pq − 12qr</p>
                    <p>= −26pq − 6pr − 12qr</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 6: Challenge Problem */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 border-2 border-orange-400 dark:border-orange-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-300 mb-3 flex items-center">
              <span className="mr-2">🔥</span> Challenge Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Think about what you learned: How would you expand (a + b)(c + d + e)?
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
              Hint: What do you think the expansion of (a + b)(c + d + e) is?
            </p>

            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-orange-300 dark:border-orange-700">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Solution:</p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>We multiply each term in the first factor by each term in the second factor:</p>
                  <p className="font-semibold">(a + b)(c + d + e) = ac + ad + ae + bc + bd + be</p>
                  <p className="mt-3 text-sm italic">
                    This pattern extends to any number of terms! The Distributive Law is very powerful.
                  </p>
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
            <li><strong>Expansion</strong> means expressing an expression as a sum/difference of terms</li>
            <li>The <strong>Distributive Law</strong>: a(b + c) = ab + ac</li>
            <li>For two brackets: <strong>(a + b)(c + d) = ac + ad + bc + bd</strong></li>
            <li>Multiply <strong>each term</strong> in the first factor by <strong>each term</strong> in the second factor</li>
            <li>Watch out for negative signs: −(x + y) = −x − y and −(x − y) = −x + y</li>
            <li>After expanding, always <strong>combine like terms</strong> to simplify</li>
            <li>The rectangle model helps visualize why (a + b)(c + d) = ac + ad + bc + bd</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
