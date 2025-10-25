import { useState } from 'react';

const Limits = () => {
  const [showPractice1, setShowPractice1] = useState(false);
  const [showPractice2, setShowPractice2] = useState(false);
  const [showPractice3, setShowPractice3] = useState(false);
  const [showPractice4, setShowPractice4] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header with Gradient */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">Limits</h1>
        <p className="text-xl opacity-90">Understanding Approaching Values - The Foundation of Calculus</p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-8 space-y-12">

        {/* Section 1: Introduction to Limits */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            1. Introduction to Limits
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              A <strong>limit</strong> describes what value a function approaches as the input
              approaches a particular value. The key word is <em>approaches</em> - we're interested
              in the behavior near a point, not necessarily at the point itself.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-mono text-lg mb-2">
                lim<sub>x→a</sub> f(x) = L
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Read as: "The limit of f(x) as x approaches a equals L"
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 mb-6 border-l-4 border-yellow-500">
            <h3 className="font-bold text-lg mb-3">Key Insight:</h3>
            <p className="mb-2">
              The limit describes the <strong>approaching behavior</strong>, not necessarily the actual value at that point.
            </p>
            <p className="text-sm">
              Think of driving toward a city: the limit is the city you're heading toward, even if you haven't arrived yet!
            </p>
          </div>

          {/* Worked Example 1.1 */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 1.1
            </h3>
            <p className="mb-3">
              Evaluate: lim<sub>x→3</sub> (x² + 2x - 1)
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p className="mb-2">
                Since this is a polynomial, we can use <strong>direct substitution</strong>:
              </p>
              <div className="font-mono ml-4 space-y-1 mb-3">
                <p>lim<sub>x→3</sub> (x² + 2x - 1) = 3² + 2(3) - 1</p>
                <p className="ml-8">= 9 + 6 - 1</p>
                <p className="ml-8">= 14</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                <p className="font-semibold">
                  ∴ lim<sub>x→3</sub> (x² + 2x - 1) = 14
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1.1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold mb-3 text-yellow-700 dark:text-yellow-400">
              🎯 Practice Problem 1.1
            </h3>
            <p className="mb-3">
              Evaluate: lim<sub>x→-2</sub> (x³ - 3x + 5)
            </p>

            <button
              onClick={() => setShowPractice1(!showPractice1)}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded transition"
            >
              {showPractice1 ? 'Hide' : 'Show'} Solution
            </button>

            {showPractice1 && (
              <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded">
                <p className="mb-2">Using direct substitution:</p>
                <div className="font-mono ml-4 space-y-1">
                  <p>lim<sub>x→-2</sub> (x³ - 3x + 5) = (-2)³ - 3(-2) + 5</p>
                  <p className="ml-8">= -8 + 6 + 5</p>
                  <p className="ml-8">= 3</p>
                </div>
                <p className="font-semibold mt-2">Answer: 3</p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Evaluating Limits Algebraically */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            2. Evaluating Limits Algebraically
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              Sometimes direct substitution gives us <strong>0/0</strong>, which is called an
              <strong> indeterminate form</strong>. When this happens, we need to use algebraic
              techniques to simplify the expression first.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-3">Common Techniques:</h3>
            <ul className="space-y-2 ml-4">
              <li>• <strong>Factoring:</strong> Factor numerator and denominator to cancel common terms</li>
              <li>• <strong>Rationalization:</strong> Multiply by conjugate to eliminate square roots</li>
              <li>• <strong>Simplification:</strong> Combine like terms or expand</li>
            </ul>
          </div>

          {/* Worked Example 2.1: Factoring */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 2.1: Factoring Technique
            </h3>
            <p className="mb-3">
              Evaluate: lim<sub>x→2</sub> (x² - 4)/(x - 2)
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p className="mb-2">
                Direct substitution gives 0/0 (indeterminate). Let's factor:
              </p>
              <div className="font-mono ml-4 space-y-1 mb-3">
                <p>lim<sub>x→2</sub> (x² - 4)/(x - 2)</p>
                <p className="ml-4">= lim<sub>x→2</sub> [(x - 2)(x + 2)]/(x - 2)</p>
                <p className="ml-4">= lim<sub>x→2</sub> (x + 2)  <span className="text-sm text-gray-600 dark:text-gray-400">(cancel common factor)</span></p>
                <p className="ml-4">= 2 + 2</p>
                <p className="ml-4">= 4</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                <p className="font-semibold">
                  ∴ lim<sub>x→2</sub> (x² - 4)/(x - 2) = 4
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2.2: Rationalization */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 2.2: Rationalization
            </h3>
            <p className="mb-3">
              Evaluate: lim<sub>x→0</sub> (√(x + 1) - 1)/x
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p className="mb-2">
                Direct substitution gives 0/0. We'll rationalize by multiplying by the conjugate:
              </p>
              <div className="font-mono text-sm ml-4 space-y-1 mb-3">
                <p>lim<sub>x→0</sub> (√(x + 1) - 1)/x × (√(x + 1) + 1)/(√(x + 1) + 1)</p>
                <p className="ml-4">= lim<sub>x→0</sub> [(x + 1) - 1] / [x(√(x + 1) + 1)]</p>
                <p className="ml-4">= lim<sub>x→0</sub> x / [x(√(x + 1) + 1)]</p>
                <p className="ml-4">= lim<sub>x→0</sub> 1 / (√(x + 1) + 1)</p>
                <p className="ml-4">= 1 / (√1 + 1)</p>
                <p className="ml-4">= 1/2</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                <p className="font-semibold">
                  ∴ lim<sub>x→0</sub> (√(x + 1) - 1)/x = 1/2
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2.1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold mb-3 text-yellow-700 dark:text-yellow-400">
              🎯 Practice Problem 2.1
            </h3>
            <p className="mb-3">
              Evaluate: lim<sub>x→3</sub> (x² - 9)/(x - 3)
            </p>

            <button
              onClick={() => setShowPractice2(!showPractice2)}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded transition"
            >
              {showPractice2 ? 'Hide' : 'Show'} Solution
            </button>

            {showPractice2 && (
              <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded">
                <p className="mb-2">Factor the numerator:</p>
                <div className="font-mono ml-4 space-y-1">
                  <p>lim<sub>x→3</sub> (x² - 9)/(x - 3)</p>
                  <p>= lim<sub>x→3</sub> (x - 3)(x + 3)/(x - 3)</p>
                  <p>= lim<sub>x→3</sub> (x + 3)</p>
                  <p>= 3 + 3 = 6</p>
                </div>
                <p className="font-semibold mt-2">Answer: 6</p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: One-Sided Limits */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            3. One-Sided Limits
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              Sometimes we need to consider what happens when we approach a point from the
              <strong> left</strong> or from the <strong>right</strong> separately.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-3">Notation:</h3>
            <div className="space-y-3">
              <div>
                <p className="font-mono">lim<sub>x→a⁻</sub> f(x)</p>
                <p className="text-sm ml-4">Left-hand limit (approaching from values less than a)</p>
              </div>
              <div>
                <p className="font-mono">lim<sub>x→a⁺</sub> f(x)</p>
                <p className="text-sm ml-4">Right-hand limit (approaching from values greater than a)</p>
              </div>
              <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded">
                <p className="font-semibold">Important:</p>
                <p className="text-sm">
                  The overall limit lim<sub>x→a</sub> f(x) exists <strong>only if</strong> both
                  one-sided limits exist and are equal!
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 3.1 */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 3.1: Piecewise Function
            </h3>
            <div className="mb-3">
              <p className="mb-2">Consider the piecewise function:</p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded font-mono">
                <p>f(x) = &#123;</p>
                <p className="ml-4">x² if x &lt; 2</p>
                <p className="ml-4">2x if x ≥ 2</p>
                <p>&#125;</p>
              </div>
              <p className="mt-3">Find lim<sub>x→2</sub> f(x)</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="font-semibold mb-2">Solution:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">Left-hand limit:</p>
                  <p className="ml-4">lim<sub>x→2⁻</sub> f(x) = lim<sub>x→2⁻</sub> x² = 4</p>
                </div>
                <div>
                  <p className="font-semibold">Right-hand limit:</p>
                  <p className="ml-4">lim<sub>x→2⁺</sub> f(x) = lim<sub>x→2⁺</sub> 2x = 4</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                  <p className="font-semibold">
                    Since lim<sub>x→2⁻</sub> f(x) = lim<sub>x→2⁺</sub> f(x) = 4,
                  </p>
                  <p className="font-semibold">
                    ∴ lim<sub>x→2</sub> f(x) = 4
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Problem 3.1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold mb-3 text-yellow-700 dark:text-yellow-400">
              🎯 Practice Problem 3.1
            </h3>
            <div className="mb-3">
              <p className="mb-2">For the function:</p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm">
                <p>g(x) = &#123;</p>
                <p className="ml-4">3x - 1 if x &lt; 1</p>
                <p className="ml-4">x + 1 if x ≥ 1</p>
                <p>&#125;</p>
              </div>
              <p className="mt-3">Does lim<sub>x→1</sub> g(x) exist?</p>
            </div>

            <button
              onClick={() => setShowPractice3(!showPractice3)}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded transition"
            >
              {showPractice3 ? 'Hide' : 'Show'} Solution
            </button>

            {showPractice3 && (
              <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded">
                <div className="space-y-2">
                  <p>Left-hand: lim<sub>x→1⁻</sub> g(x) = 3(1) - 1 = 2</p>
                  <p>Right-hand: lim<sub>x→1⁺</sub> g(x) = 1 + 1 = 2</p>
                  <p className="font-semibold mt-2">
                    Yes! lim<sub>x→1</sub> g(x) = 2 (both sides agree)
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Limits at Infinity */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            4. Limits at Infinity
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              <strong>Limits at infinity</strong> describe the behavior of a function as x gets
              very large (positive or negative). These limits tell us about <strong>horizontal asymptotes</strong>.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-3">For Rational Functions:</h3>
            <div className="space-y-2">
              <p>• If degree(numerator) &lt; degree(denominator): limit = 0</p>
              <p>• If degree(numerator) = degree(denominator): limit = ratio of leading coefficients</p>
              <p>• If degree(numerator) &gt; degree(denominator): limit = ±∞</p>
            </div>
            <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded">
              <p className="font-semibold text-sm">Technique: Divide by highest power of x</p>
            </div>
          </div>

          {/* Worked Example 4.1 */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 4.1: Same Degree
            </h3>
            <p className="mb-3">
              Evaluate: lim<sub>x→∞</sub> (3x² + 2x)/(2x² - 5)
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p className="mb-2">Divide numerator and denominator by x² (highest power):</p>
              <div className="font-mono ml-4 space-y-1 mb-3">
                <p>lim<sub>x→∞</sub> (3x² + 2x)/(2x² - 5)</p>
                <p className="ml-4">= lim<sub>x→∞</sub> (3 + 2/x)/(2 - 5/x²)</p>
                <p className="ml-4 text-sm text-gray-600 dark:text-gray-400">(As x → ∞: 2/x → 0 and 5/x² → 0)</p>
                <p className="ml-4">= (3 + 0)/(2 - 0)</p>
                <p className="ml-4">= 3/2</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                <p className="font-semibold">
                  ∴ lim<sub>x→∞</sub> (3x² + 2x)/(2x² - 5) = 3/2
                </p>
                <p className="text-sm mt-1">The horizontal asymptote is y = 3/2</p>
              </div>
            </div>
          </div>

          {/* Worked Example 4.2 */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 4.2: Lower Degree Numerator
            </h3>
            <p className="mb-3">
              Evaluate: lim<sub>x→∞</sub> (5x + 3)/(x² + 1)
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p className="mb-2">Degree of numerator (1) &lt; degree of denominator (2):</p>
              <div className="font-mono ml-4 space-y-1 mb-3">
                <p>lim<sub>x→∞</sub> (5x + 3)/(x² + 1)</p>
                <p className="ml-4">= lim<sub>x→∞</sub> (5/x + 3/x²)/(1 + 1/x²)</p>
                <p className="ml-4">= (0 + 0)/(1 + 0)</p>
                <p className="ml-4">= 0</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                <p className="font-semibold">
                  ∴ lim<sub>x→∞</sub> (5x + 3)/(x² + 1) = 0
                </p>
                <p className="text-sm mt-1">The horizontal asymptote is y = 0 (the x-axis)</p>
              </div>
            </div>
          </div>

          {/* Practice Problem 4.1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold mb-3 text-yellow-700 dark:text-yellow-400">
              🎯 Practice Problem 4.1
            </h3>
            <p className="mb-3">
              Evaluate: lim<sub>x→∞</sub> (4x³ - x)/(2x³ + 5x² - 1)
            </p>

            <button
              onClick={() => setShowPractice4(!showPractice4)}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded transition"
            >
              {showPractice4 ? 'Hide' : 'Show'} Solution
            </button>

            {showPractice4 && (
              <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded">
                <p className="mb-2">Divide by x³:</p>
                <div className="font-mono ml-4 space-y-1">
                  <p>lim<sub>x→∞</sub> (4x³ - x)/(2x³ + 5x² - 1)</p>
                  <p>= lim<sub>x→∞</sub> (4 - 1/x²)/(2 + 5/x - 1/x³)</p>
                  <p>= 4/2</p>
                  <p>= 2</p>
                </div>
                <p className="font-semibold mt-2">Answer: 2</p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border-2 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
            🎓 Key Takeaways
          </h3>
          <ul className="space-y-2 text-lg">
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Limits describe approaching behavior, not actual values</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Direct substitution works for continuous functions</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Factor and simplify to handle 0/0 indeterminate forms</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>One-sided limits must agree for overall limit to exist</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Limits at infinity reveal horizontal asymptotes</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>For rational functions: compare degrees to find limit at infinity</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Limits;
