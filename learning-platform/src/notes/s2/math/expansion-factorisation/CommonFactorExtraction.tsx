import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function CommonFactorsNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Factorisation by Extracting Common Factors</h1>
        <p className="mt-2 text-orange-100">The reverse process of expansion - expressing expressions as products</p>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-8">

        {/* Section 1: What is Factorisation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What is Factorisation?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Factorisation</strong> is the process of expressing an algebraic expression as the <strong>product</strong> of two or more factors.
            </p>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">
                Recap: Factorisation from Book 1
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                In Book 1, we learned how to factorise expressions of the form ab + ac by extracting the common factor a:
              </p>
              <div className="text-center text-lg font-bold text-orange-700 dark:text-orange-300 mb-2">
                ab + ac = a(b + c)
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                We "factor out" the common factor a from both terms
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Factorisation is the Reverse of Expansion
              </h3>
              <div className="flex items-center justify-center space-x-4 text-gray-700 dark:text-gray-300">
                <div className="text-center">
                  <p className="font-semibold">a(b + c)</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-sm">expand →</p>
                  <p className="text-sm">← factorise</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">ab + ac</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded">
              <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                ⚠️ Important: Extracting Negative Common Factors
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                When extracting negative common factors such as −1, we have to <strong>change the sign</strong> inside the brackets:
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-amber-300 dark:border-amber-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p className="font-semibold">−x − y = −(x + y)</p>
                  <p className="text-sm italic">Factor out −1, change sign</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Factorising Linear Expressions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Factorising Linear Expressions
          </h2>

          <div className="space-y-6">
            {/* Example 1 */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Example 1: Factorise 12x + 18
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong>
              </p>
              <div className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                <p>Step 1: Find the Highest Common Factor (HCF) of 12 and 18</p>
                <p className="ml-6">HCF of 12 and 18 = 6</p>
                <p>Step 2: Factor out the HCF:</p>
                <p className="ml-6">12x + 18 = 6(2x + 3)</p>
              </div>
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-green-300 dark:border-green-700">
                <p className="text-sm font-semibold text-green-800 dark:text-green-300">Check:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Expand 6(2x + 3) = 12x + 18 ✓
                </p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Example 2: Factorise −15x − 6
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong>
              </p>
              <div className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                <p>HCF of 6 and 15 = 3, so −3 is a common factor</p>
                <p>−15x − 6 = −3(5x + 2)</p>
                <p className="text-sm italic mt-2">Note: When factoring out −3, signs change inside brackets</p>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 3: Factorise −10ax + 25ay
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong>
              </p>
              <div className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                <p>Step 1: Rearrange the order of terms (easier to work with)</p>
                <p className="ml-6">−10ax + 25ay = 25ay − 10ax</p>
                <p>Step 2: Find common factors</p>
                <p className="ml-6">Common factors are 5 and a</p>
                <p>Step 3: Factor out 5a:</p>
                <p className="ml-6">= 5a(5y − 2x)</p>
              </div>
            </div>
          </div>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mt-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Factorise completely
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 mb-3">
              <div>(a) 12x + 8</div>
              <div>(b) 21 + 35a</div>
              <div>(c) −15x − 25</div>
              <div>(d) −8 − 20p</div>
              <div>(e) −27ax + 12ay</div>
              <div>(f) −42xy − 12xz</div>
              <div>(g) 36p − 54pq + 18pr</div>
              <div>(h) −9z − 24bz − 15cz</div>
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
                  <p>(a) 4(3x + 2)</p>
                  <p>(b) 7(3 + 5a)</p>
                  <p>(c) −5(3x + 5)</p>
                  <p>(d) −4(2 + 5p)</p>
                  <p>(e) 3a(−9x + 4y) or −3a(9x − 4y)</p>
                  <p>(f) −6x(7y + 2z) or 6x(−7y − 2z)</p>
                  <p>(g) 18p(2 − 3q + r)</p>
                  <p>(h) −3z(3 + 8b + 5c)</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Factorising Expressions with Squares and Cubes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Factorising Expressions with Squares and Cubes
          </h2>

          <div className="mb-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                Example 1: Factorise <MathText>{'$6x^2 + 15x$'}</MathText>
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong>
              </p>
              <div className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                <p>HCF of 6 and 15 = 3</p>
                <p>HCF of <MathText>{'$x^2$'}</MathText> and x = x</p>
                <p className="font-semibold"><MathText>{'$6x^2 + 15x = 3x(2x + 5)$'}</MathText></p>
              </div>
            </div>

            <div className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded">
              <h3 className="font-semibold text-rose-800 dark:text-rose-300 mb-2">
                Example 2: Factorise <MathText>{'$−a^3bc − a^2b^2$'}</MathText>
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong>
              </p>
              <div className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                <p>HCF of <MathText>{'$a^3$'}</MathText> and <MathText>{'$a^2$'}</MathText> = <MathText>{'$a^2$'}</MathText></p>
                <p>HCF of b and <MathText>{'$b^2$'}</MathText> = b</p>
                <p><MathText>{'$−a^3bc − a^2b^2 = −a^2b(ac + b)$'}</MathText></p>
              </div>
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-rose-300 dark:border-rose-700">
                <p className="text-sm font-semibold text-rose-800 dark:text-rose-300">💡 Tip:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Factor out −1 when the first term is negative: <MathText>{'$−x − y = −(x + y)$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Factorise completely
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 mb-3">
              <div>(a) <MathText>{'$10x^2 + 8x$'}</MathText></div>
              <div>(b) <MathText>{'$10a^2 − 15a$'}</MathText></div>
              <div>(c) <MathText>{'$−49b − 28b^2$'}</MathText></div>
              <div>(d) <MathText>{'$2\\pi r^2 + 2\\pi rh$'}</MathText></div>
              <div>(e) <MathText>{'$x^3y^2 − yz^2$'}</MathText></div>
              <div>(f) <MathText>{'$c^2d^3 + c^3d^2 − c^2d^2$'}</MathText></div>
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
                  <p>(a) <MathText>{'$2x(5x + 4)$'}</MathText></p>
                  <p>(b) <MathText>{'$5a(2a − 3)$'}</MathText></p>
                  <p>(c) <MathText>{'$−7b(7 + 4b)$'}</MathText></p>
                  <p>(d) <MathText>{'$2\\pi r(r + h)$'}</MathText></p>
                  <p>(e) <MathText>{'$y(x^3y − z^2)$'}</MathText></p>
                  <p>(f) <MathText>{'$c^2d^2(d + c − 1)$'}</MathText></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Thinking Time */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 border-2 border-teal-400 dark:border-teal-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300 mb-3 flex items-center">
              <span className="mr-2">🤔</span> Thinking Time
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-semibold mb-2">1. Can we factorise quadratic expressions of the form <MathText>{'$ax^2 + c$'}</MathText>?</p>
                <p className="text-sm italic ml-4">
                  If yes, give an example and factorise it. If no, explain why not.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">2. Can we factorise quadratic expressions of the form <MathText>{'$ax^2 + bx + c$'}</MathText> where a, b, and c have no common factors other than 1 or −1?</p>
                <p className="text-sm italic ml-4">
                  If not, how can we factorise such expressions?
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-4 px-4 py-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Discussion
            </button>

            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-teal-300 dark:border-teal-700">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold">Answer 1:</p>
                    <p>Yes! For example, <MathText>{'$6x^2 + 15 = 3(2x^2 + 5)$'}</MathText></p>
                    <p className="text-sm italic">We can factorise if there's a common factor.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Answer 2:</p>
                    <p>We cannot just extract common factors. We need to learn another method to express <MathText>{'$x^2 + 5x + 6$'}</MathText> as <MathText>{'$(x + 2)(x + 3)$'}</MathText>.</p>
                    <p className="text-sm italic mt-2">This is what we'll learn in the next sections!</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 5: Real-World Application */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Real-World Application
          </h2>

          <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-cyan-800 dark:text-cyan-300 mb-2">
              Problem: Rectangle Area
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The area of a rectangle with a length of (2x − 3) cm is <MathText>{'$(4x^2 + 8x + 15)$'}</MathText> cm². Without factorising the expression, explain if the breadth of the rectangle can be (x + 5) cm.
            </p>

            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-3 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-cyan-300 dark:border-cyan-700">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Solution:</p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>If breadth = (x + 5) cm, then:</p>
                  <p>Area = Length × Breadth</p>
                  <p>= (2x − 3)(x + 5)</p>
                  <p>= <MathText>{'$2x^2 + 10x − 3x − 15$'}</MathText></p>
                  <p>= <MathText>{'$2x^2 + 7x − 15$'}</MathText></p>
                  <p className="mt-3 font-semibold">This is NOT equal to <MathText>{'$4x^2 + 8x + 15$'}</MathText></p>
                  <p className="text-sm italic">Therefore, the breadth cannot be (x + 5) cm.</p>
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
            <li><strong>Factorisation</strong> is the reverse of expansion - expressing as a product</li>
            <li>To factorise: find the <strong>Highest Common Factor (HCF)</strong> and factor it out</li>
            <li>When factoring out negative numbers, remember to <strong>change signs</strong> inside brackets</li>
            <li>−(x + y) means −x − y, and −(x − y) means −x + y</li>
            <li>For expressions with powers: HCF of <MathText>{'$x^3$'}</MathText> and <MathText>{'$x^2$'}</MathText> is <MathText>{'$x^2$'}</MathText> (lower power)</li>
            <li>Always check your factorisation by expanding back</li>
            <li>Not all quadratic expressions can be factorised by extracting common factors</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
