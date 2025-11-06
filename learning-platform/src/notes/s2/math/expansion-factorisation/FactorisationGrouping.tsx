import { useState } from 'react';

export default function FactorisationGroupingNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 dark:from-indigo-600 dark:to-blue-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Factorisation into the Form (a + b)(c + d)</h1>
        <p className="mt-2 text-indigo-100">Factorising four-term expressions using grouping method</p>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-8">

        {/* Section 1: Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Can We Factorise Other Algebraic Expressions?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In previous sections, we learned how to factorise quadratic expressions of the form (px + q)(rx + s).
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Can we factorise other algebraic expressions into the form (a + b)(c + d)?
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
                Recall: Expansion of (a + b)(c + d)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                In Section 3.2B, we learned how to expand (a + b)(c + d) to obtain ac + ad + bc + bd.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                In this section, we will learn two methods to factorise algebraic expressions of the form <strong>ac + ad + bc + bd</strong> into the form <strong>(a + b)(c + d)</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Method 1 - Using Multiplication Frame */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Method 1: Using Multiplication Frame
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We can arrange the four terms in a multiplication frame to help us factorise the expression.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4">
                Example: Factorise ac + ad + bc + bd
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Step 1: Arrange terms in the frame</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    We extract common factors from the rows and columns:
                  </p>
                  <div className="flex justify-center mb-3">
                    <div className="border-2 border-gray-600 dark:border-gray-400">
                      <div className="flex">
                        <div className="w-16 h-12 flex items-center justify-center font-semibold border-b border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">×</div>
                        <div className="w-28 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">c</div>
                        <div className="w-28 h-12 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">+d</div>
                      </div>
                      <div className="flex">
                        <div className="w-16 h-20 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">a</div>
                        <div className="w-28 h-20 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">ac</div>
                        <div className="w-28 h-20 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-gray-700 dark:text-gray-300">+ad</div>
                      </div>
                      <div className="flex border-t border-gray-600 dark:border-gray-400">
                        <div className="w-16 h-20 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">+b</div>
                        <div className="w-28 h-20 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300">+bc</div>
                        <div className="w-28 h-20 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-gray-700 dark:text-gray-300">+bd</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-center font-semibold text-gray-700 dark:text-gray-300">
                    ac + ad + bc + bd = (a + b)(c + d)
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700">
                  <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Class Discussion:</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Does Method 1 work regardless of how we arrange the four terms in the rectangular array of the multiplication frame?
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm italic mt-3">
                    The following shows some other arrangements of the four terms. Discuss with your classmates which arrangements work and which do not.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded">
              <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                ⚠️ Important: Arrangement Matters!
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                For Method 1 to work, we have to be careful of how we arrange the four terms in the rectangular array of the multiplication frame.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                Not all arrangements will work! The terms need to be positioned so that common factors can be extracted from rows and columns.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Method 2 - Factorisation by Grouping */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Method 2: Factorisation by Grouping (More Flexible!)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In the expansion of (a + b)(c + d), the intermediate step is a(c + d) + b(c + d):
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">
                The Grouping Method
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <p>(a + b)(c + d) = a(c + d) + b(c + d)</p>
                <p className="ml-20">= ac + ad + bc + bd</p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To factorise an algebraic expression of the form ac + ad + bc + bd, we should <strong>group the four terms into two appropriate groups</strong>, where the two terms in each group have a common factor. Then, we can extract the common factor of each group:
              </p>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700 space-y-2 text-gray-700 dark:text-gray-300">
                <p>ac + ad + bc + bd = (ac + ad) + (bc + bd)</p>
                <p className="ml-20">= a(c + d) + b(c + d)</p>
                <p className="ml-20">= (a + b)(c + d)</p>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-3">
                We <strong>group</strong> the four terms into two groups: extract common factor from each group, then extract common factor (c + d).
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                📖 Why is it Called "Factorisation by Grouping"?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                This method is called <strong>factorisation by grouping</strong> because we <em>group</em> the four terms into two appropriate groups first.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Worked Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Worked Examples
          </h2>

          <div className="space-y-6">
            {/* Example 1 - Multiplication Frame */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1 (Method 1): Factorise 3x + 6y + 2xz + 4yz
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Using multiplication frame:</strong>
              </p>
              <div className="flex justify-center mb-3">
                <div className="border-2 border-gray-600 dark:border-gray-400">
                  <div className="flex">
                    <div className="w-16 h-10 flex items-center justify-center font-semibold border-b border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">×</div>
                    <div className="w-24 h-10 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">3</div>
                    <div className="w-24 h-10 flex items-center justify-center font-semibold border-b border-l border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">+2z</div>
                  </div>
                  <div className="flex">
                    <div className="w-16 h-16 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">x</div>
                    <div className="w-24 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">3x</div>
                    <div className="w-24 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-gray-700 dark:text-gray-300 text-sm">+2xz</div>
                  </div>
                  <div className="flex border-t border-gray-600 dark:border-gray-400">
                    <div className="w-16 h-16 flex items-center justify-center font-semibold border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">+2y</div>
                    <div className="w-24 h-16 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 border-r border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 text-sm">+6y</div>
                    <div className="w-24 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-gray-700 dark:text-gray-300 text-sm">+4yz</div>
                  </div>
                </div>
              </div>
              <p className="text-center font-semibold text-gray-700 dark:text-gray-300">
                3x + 6y + 2xz + 4yz = (x + 2y)(3 + 2z)
              </p>
            </div>

            {/* Example 2 - Grouping */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Example 2 (Method 2): Factorise 3x + 6y + 2xz + 4yz
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Using grouping method:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>3x + 6y + 2xz + 4yz</p>
                <p>= (3x + 6y) + (2xz + 4yz) <span className="text-sm italic">(group into two pairs)</span></p>
                <p>= 3(x + 2y) + 2z(x + 2y) <span className="text-sm italic">(extract common factors)</span></p>
                <p className="font-semibold">= (x + 2y)(3 + 2z) <span className="text-sm italic">(extract common factor (x + 2y))</span></p>
              </div>
            </div>

            {/* Example 3 - Different Grouping */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Example 3: Factorise xy + 3y + 2x + 6
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution (grouping method):</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>xy + 3y + 2x + 6</p>
                <p>= (xy + 3y) + (2x + 6) <span className="text-sm italic">(group first two and last two)</span></p>
                <p>= y(x + 3) + 2(x + 3) <span className="text-sm italic">(extract common factors)</span></p>
                <p className="font-semibold">= (x + 3)(y + 2) <span className="text-sm italic">(extract common factor (x + 3))</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Important Notes About Grouping */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Class Discussion: Different Groupings
          </h2>

          <div className="mb-6">
            <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-cyan-800 dark:text-cyan-300 mb-3">
                Does Method 2 Work Regardless of Arrangement?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The following shows some other arrangements of the four terms. Discuss with your classmates which arrangements work and which do not.
              </p>

              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-cyan-300 dark:border-cyan-700">
                  <p className="font-semibold">(i) ac + bc + ad + bd</p>
                  <p className="text-sm">= c(a + b) + d(a + b) = (a + b)(c + d) ✓</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-cyan-300 dark:border-cyan-700">
                  <p className="font-semibold">(ii) ac + bd + ad + bc</p>
                  <p className="text-sm">Cannot group easily ✗</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-cyan-300 dark:border-cyan-700">
                  <p className="font-semibold">(iii) ac + bd + bc + ad</p>
                  <p className="text-sm">= c(a + b) + d(b + a) = (a + b)(c + d) ✓</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-4">
                From the above Class Discussion, we observe that for <strong>Method 2</strong>, we also have to be careful of how we arrange the four terms for Method 2 to work.
              </p>
            </div>

            <div className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded">
              <h3 className="font-semibold text-rose-800 dark:text-rose-300 mb-2">
                ⚠️ Important Rule:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                It does not help if we group ac + ad + bc + bd as (ac + bd) + (bc + ad). Why?
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-2">
                Because we cannot extract a common factor from ac + bd (no common factors!)
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice Problems
          </h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice Set 1: Factorise using Method 1 (Multiplication Frame)
            </h3>
            <div className="space-y-2 text-gray-700 dark:text-gray-300 mb-3">
              <div>(a) 2a + 4b + 3ac + 6bc</div>
              <div>(b) 6pq + 9p + 4q + 6</div>
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
                  <p>(a) (a + 2b)(2 + 3c)</p>
                  <p>(b) (2q + 3)(3p + 2)</p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice Set 2: Factorise using Method 2 (Grouping)
            </h3>
            <div className="space-y-2 text-gray-700 dark:text-gray-300 mb-3">
              <div>(a) xy + 5x + 4y + 20</div>
              <div>(b) 6mn + 8m + 9n + 12</div>
              <div>(c) 2ab + 4a + 3b + 6</div>
              <div>(d) pq + 2p + 3q + 6</div>
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
                    <p>= (xy + 5x) + (4y + 20)</p>
                    <p>= x(y + 5) + 4(y + 5)</p>
                    <p>= (y + 5)(x + 4)</p>
                  </div>
                  <div>
                    <p className="font-semibold">(b)</p>
                    <p>= (6mn + 8m) + (9n + 12)</p>
                    <p>= 2m(3n + 4) + 3(3n + 4)</p>
                    <p>= (3n + 4)(2m + 3)</p>
                  </div>
                  <div>
                    <p className="font-semibold">(c)</p>
                    <p>= (2ab + 4a) + (3b + 6)</p>
                    <p>= 2a(b + 2) + 3(b + 2)</p>
                    <p>= (b + 2)(2a + 3)</p>
                  </div>
                  <div>
                    <p className="font-semibold">(d)</p>
                    <p>= (pq + 2p) + (3q + 6)</p>
                    <p>= p(q + 2) + 3(q + 2)</p>
                    <p>= (q + 2)(p + 3)</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 7: Summary Comparison */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Comparing the Two Methods
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-gray-400 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="border border-gray-400 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">Method</th>
                  <th className="border border-gray-400 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">Process</th>
                  <th className="border border-gray-400 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">Advantages</th>
                  <th className="border border-gray-400 dark:border-gray-600 p-3 text-gray-800 dark:text-gray-200">Key Point</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="bg-blue-50 dark:bg-blue-900/20">
                  <td className="border border-gray-400 dark:border-gray-600 p-3 font-semibold">Method 1: Frame</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">Arrange in multiplication frame, extract common factors from rows/columns</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">Visual, organized</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">Arrangement matters!</td>
                </tr>
                <tr className="bg-green-50 dark:bg-green-900/20">
                  <td className="border border-gray-400 dark:border-gray-600 p-3 font-semibold">Method 2: Grouping</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">Group into two pairs, extract common factor from each, then extract overall common factor</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">Flexible, works algebraically</td>
                  <td className="border border-gray-400 dark:border-gray-600 p-3">Must group with common factors!</td>
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
            <li>Expressions of the form ac + ad + bc + bd can be factorised into (a + b)(c + d)</li>
            <li><strong>Method 1 (Multiplication Frame):</strong> Arrange terms in frame and extract common factors</li>
            <li><strong>Method 2 (Grouping - Recommended):</strong> Group into two pairs with common factors, extract from each group, then extract overall</li>
            <li>Both methods require careful arrangement - not all groupings work!</li>
            <li>The grouping must allow extraction of common factors from each group</li>
            <li>Always check your answer by expanding back</li>
            <li>Factorisation by grouping is called so because we <em>group</em> terms before factorising</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
