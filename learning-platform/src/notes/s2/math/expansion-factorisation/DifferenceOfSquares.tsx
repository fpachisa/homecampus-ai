import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function DifferenceOfSquares() {
  // State for expandable solutions
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);
  const [showSolution6, setShowSolution6] = useState(false);
  const [showSolution7, setShowSolution7] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 text-white p-6 rounded-t-lg shadow-lg">
        <h1 className="text-3xl font-bold">Difference of Squares Identity</h1>
        <p className="mt-2 text-emerald-100">
          Discover the magical cancellation that happens when you multiply (a+b)(a-b)
        </p>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-8">

        {/* Section 1: Introduction and Mystery */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Disappearing Middle Terms
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Here's a mathematical magic trick: When you multiply (a + b)(a - b), something amazing happens - the middle terms completely disappear! Let's discover why.
            </p>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-5 rounded-lg mb-4 border border-emerald-300 dark:border-emerald-700">
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-3 flex items-center">
                <span className="text-2xl mr-2">✨</span>
                Quick Challenge
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Calculate: 35 × 35 = 1,225
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Calculate: 65 × 65 = 4,225
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Now, without multiplying directly, can you find 65 × 65 - 35 × 35 = ?
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm italic mt-3">
                (Hint: By the end of this lesson, you'll solve this in 2 seconds!)
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Discovering (a+b)(a-b) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Discovering the Difference of Squares Identity
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Method 1: Using the Distributive Law
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Let's expand (a + b)(a - b) carefully and watch the magic happen:
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <MathText>$(a + b)(a - b)$</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-6">
                = <MathText>$a(a - b) + b(a - b)$</MathText> <span className="text-sm text-gray-600 dark:text-gray-400">(Distribute first bracket)</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-6">
                = <MathText>{'$a^{2} - ab + ba - b^{2}$'}</MathText> <span className="text-sm text-gray-600 dark:text-gray-400">(Distribute a and b)</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-6">
                = <MathText>{'$a^{2} - ab + ab - b^{2}$'}</MathText> <span className="text-sm text-gray-600 dark:text-gray-400">(Since ba = ab)</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 ml-6">
                = <MathText>{'$a^{2} + 0 - b^{2}$'}</MathText> <span className="text-sm text-gray-600 dark:text-gray-400">(−ab + ab = 0, they cancel!)</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 ml-6 text-lg font-semibold">
                = <MathText>{'$a^{2} - b^{2}$'}</MathText>
              </p>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-300 dark:border-emerald-700">
              <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                🎯 The Magic Explained:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                When we expand (a + b)(a - b), we get four terms initially:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>a × a = a²</li>
                <li>a × (−b) = −ab</li>
                <li>b × a = +ab</li>
                <li>b × (−b) = −b²</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                The middle two terms (−ab and +ab) are opposites, so they cancel perfectly! We're left with just a² − b².
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Method 2: Using a Multiplication Grid
            </h3>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm">
              <pre className="text-gray-800 dark:text-gray-200">
{`        ×  │    a    │   -b
    ───────┼─────────┼─────────
        a  │   a²    │  -ab
    ───────┼─────────┼─────────
        b  │   ab    │  -b²
`}
              </pre>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sum of all regions: <MathText>{'$a^{2} - ab + ab - b^{2} = a^{2} - b^{2}$'}</MathText>
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Method 3: Geometric Proof
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This identity has a beautiful geometric interpretation. Imagine we start with a large square of side a, then cut out a smaller square of side b:
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg mb-4 border border-indigo-300 dark:border-indigo-700">
              <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
                📐 Geometric Visualization
              </h4>

              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
                <pre className="text-gray-800 dark:text-gray-200 text-xs">
{`    Step 1: Large square (a×a)     Step 2: Cut out small square (b×b)
    ┌─────────────────┐             ┌─────────────┬───┐
    │                 │             │             │   │
    │                 │             │             │ b │
    │      a²         │   minus     │   a² - b²   │   │
    │                 │             │             ├───┤
    │                 │             │             │b²│
    └─────────────────┘             └─────────────┴───┘
            a                               a

    Step 3: Rearrange the L-shape into a rectangle
    ┌──────────────────────────────┐
    │      (a - b)                 │ b
    │                              │
    └──────────────────────────────┘
    ├────────── (a + b) ───────────┤

    Area = (a + b) × (a - b)
`}
                </pre>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Key insight:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Start with a large square: area = a²</li>
                <li>Remove a small square from corner: area removed = b²</li>
                <li>Remaining L-shaped area = a² − b²</li>
                <li>This L-shape can be rearranged into a rectangle with dimensions (a + b) by (a − b)</li>
                <li>Therefore: (a + b)(a − b) = a² − b²</li>
              </ul>
            </div>
          </div>

          {/* Identity Box */}
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 border-2 border-emerald-500 dark:border-emerald-600 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-3 flex items-center">
              <span className="text-2xl mr-2">💡</span>
              Difference of Squares Identity
            </h3>
            <p className="text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
              <MathText>{'$(a + b)(a - b) = a^{2} - b^{2}$'}</MathText>
            </p>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
              Also known as the "Difference of Two Squares" identity
            </p>
          </div>
        </section>

        {/* Worked Examples for Expansion */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Worked Examples: Expanding Using Difference of Squares
          </h2>

          {/* Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Expand (x + 5)(x - 5)
            </h3>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p className="mb-2">
                <strong>Solution:</strong> Using <MathText>{'$(a + b)(a - b) = a^{2} - b^{2}$'}</MathText>
              </p>
              <p>
                Here, a = x and b = 5
              </p>
              <p>
                <MathText>{'$(x + 5)(x - 5) = x^{2} - 5^{2}$'}</MathText>
              </p>
              <p className="ml-6 text-lg font-semibold">
                = <MathText>{'$x^{2} - 25$'}</MathText>
              </p>
              <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/40 rounded">
                <p className="text-sm">
                  <strong>Notice how fast this is!</strong> Compare with expanding normally:
                </p>
                <p className="text-sm">(x + 5)(x - 5) = x² - 5x + 5x - 25 = x² - 25</p>
                <p className="text-sm">Using the identity, we skip the middle steps entirely!</p>
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Expand (2x + 7y)(2x - 7y)
            </h3>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p className="mb-2">
                <strong>Solution:</strong> Here, a = 2x and b = 7y
              </p>
              <p>
                <MathText>{'$(2x + 7y)(2x - 7y) = (2x)^{2} - (7y)^{2}$'}</MathText>
              </p>
              <p className="ml-6 text-lg font-semibold">
                = <MathText>{'$4x^{2} - 49y^{2}$'}</MathText>
              </p>
              <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/40 rounded">
                <p className="text-sm">
                  <strong>Calculations:</strong>
                </p>
                <p className="text-sm">• (2x)² = 4x²</p>
                <p className="text-sm">• (7y)² = 49y²</p>
                <p className="text-sm">• No middle term!</p>
              </div>
            </div>
          </div>

          {/* Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Expand <MathText>{'$(4a - \\frac{7}{2}b)(4a + \\frac{7}{2}b)$'}</MathText>
            </h3>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p className="mb-2">
                <strong>Solution:</strong> Notice the order doesn't matter! (a - b)(a + b) = (a + b)(a - b)
              </p>
              <p>
                Here, a = 4a and b = 7b/2
              </p>
              <p>
                <MathText>{'$(4a - \\frac{7}{2}b)(4a + \\frac{7}{2}b) = (4a)^{2} - (\\frac{7}{2}b)^{2}$'}</MathText>
              </p>
              <p className="ml-6 text-lg font-semibold">
                = <MathText>{'$16a^{2} - \\frac{49}{4}b^{2}$'}</MathText>
              </p>
            </div>
          </div>

          {/* Practice Problems */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">
              Practice: Expand the following using difference of squares
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (a) (x + 3)(x - 3)
                </p>
                <button
                  onClick={() => setShowSolution1(!showSolution1)}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
                >
                  {showSolution1 ? 'Hide' : 'Show'} Solution
                </button>
                {showSolution1 && (
                  <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                    <p className="text-gray-700 dark:text-gray-300">
                      <MathText>{'$(x + 3)(x - 3) = x^{2} - 3^{2} = x^{2} - 9$'}</MathText>
                    </p>
                  </div>
                )}
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (b) (5y - 4)(5y + 4)
                </p>
                <button
                  onClick={() => setShowSolution2(!showSolution2)}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
                >
                  {showSolution2 ? 'Hide' : 'Show'} Solution
                </button>
                {showSolution2 && (
                  <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                    <p className="text-gray-700 dark:text-gray-300">
                      <MathText>{'$(5y - 4)(5y + 4) = (5y)^{2} - 4^{2} = 25y^{2} - 16$'}</MathText>
                    </p>
                  </div>
                )}
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (c) (6b - a)(6b + a)
                </p>
                <button
                  onClick={() => setShowSolution3(!showSolution3)}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
                >
                  {showSolution3 ? 'Hide' : 'Show'} Solution
                </button>
                {showSolution3 && (
                  <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                    <p className="text-gray-700 dark:text-gray-300">
                      <MathText>{'$(6b - a)(6b + a) = (6b)^{2} - a^{2} = 36b^{2} - a^{2}$'}</MathText>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Factorising */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Factorising Using Difference of Squares
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When factorising, we work backwards: if we see a² - b², we know it factors as (a + b)(a - b).
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
              How to Recognize Difference of Squares
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              An expression is a difference of squares if:
            </p>

            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 ml-4">
              <li>It has exactly two terms (binomial)</li>
              <li>Both terms are perfect squares</li>
              <li>The operation between them is subtraction (−)</li>
            </ol>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                ⚠️ Important Note
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                • a² − b² can be factorised (difference of squares) ✓
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                • a² + b² <strong>cannot</strong> be factorised using real numbers (sum of squares) ✗
              </p>
            </div>
          </div>

          {/* Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Factorise x² - 9
            </h3>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p className="mb-2"><strong>Step 1:</strong> Check if it's a difference of squares</p>
              <p className="ml-4">• Is it two terms with subtraction? Yes: x² and 9</p>
              <p className="ml-4">• Are both perfect squares? √(x²) = x ✓, √9 = 3 ✓</p>

              <p className="mt-3"><strong>Step 2:</strong> Apply the identity</p>
              <p className="ml-4">Since a² - b² = (a + b)(a - b), we have:</p>
              <p className="ml-4">a = x, b = 3</p>

              <p className="mt-3"><strong>Answer:</strong></p>
              <p className="ml-4 text-lg font-semibold">
                <MathText>{'$x^{2} - 9 = (x + 3)(x - 3)$'}</MathText>
              </p>

              <p className="mt-3"><strong>Verify:</strong> (x + 3)(x - 3) = x² - 9 ✓</p>
            </div>
          </div>

          {/* Example 5 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 5: Factorise 25x² - 16
            </h3>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p className="mb-2"><strong>Step 1:</strong> Check perfect squares</p>
              <p className="ml-4">• √(25x²) = 5x ✓</p>
              <p className="ml-4">• √16 = 4 ✓</p>

              <p className="mt-3"><strong>Answer:</strong></p>
              <p className="ml-4 text-lg font-semibold">
                <MathText>{'$25x^{2} - 16 = (5x + 4)(5x - 4)$'}</MathText>
              </p>
            </div>
          </div>

          {/* Example 6 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 6: Factorise 81a² - 36ab + 4b²
            </h3>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p className="mb-2"><strong>Step 1:</strong> Check if it's a difference of squares</p>
              <p className="ml-4">• This has THREE terms, not two</p>
              <p className="ml-4">• This is NOT a difference of squares!</p>

              <p className="mt-3"><strong>Step 2:</strong> Could it be a perfect square?</p>
              <p className="ml-4">Check: √(81a²) = 9a, √(4b²) = 2b</p>
              <p className="ml-4">Middle term check: 2 × 9a × 2b = 36ab ✓</p>
              <p className="ml-4">We have -36ab, so it matches a² - 2ab + b²</p>

              <p className="mt-3"><strong>Answer:</strong></p>
              <p className="ml-4 text-lg font-semibold">
                <MathText>{'$81a^{2} - 36ab + 4b^{2} = (9a - 2b)^{2}$'}</MathText>
              </p>
              <p className="mt-2 text-sm italic">
                (This is a perfect square, not difference of squares!)
              </p>
            </div>
          </div>

          {/* Practice Problems */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">
              Practice: Factorise if possible (state N.A. if not applicable)
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (d) x² - 64
                </p>
                <button
                  onClick={() => setShowSolution4(!showSolution4)}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
                >
                  {showSolution4 ? 'Hide' : 'Show'} Solution
                </button>
                {showSolution4 && (
                  <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      √(x²) = x, √64 = 8
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                      Answer: <MathText>{'$(x + 8)(x - 8)$'}</MathText>
                    </p>
                  </div>
                )}
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (e) 49h² - 42hk + 36k²
                </p>
                <button
                  onClick={() => setShowSolution5(!showSolution5)}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
                >
                  {showSolution5 ? 'Hide' : 'Show'} Solution
                </button>
                {showSolution5 && (
                  <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      This has 3 terms, so it's not a difference of squares.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Check perfect square: √(49h²) = 7h, √(36k²) = 6k
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Middle: 2 × 7h × 6k = 84hk ≠ 42hk ✗
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                      Answer: <strong>N.A.</strong> (Cannot be factorised using special identities)
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Applications */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Applications: Mental Math Shortcuts
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The special algebraic identities aren't just abstract math - they provide powerful shortcuts for mental calculations!
            </p>

            {/* Application 1 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-l-4 border-purple-500 p-5 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3 flex items-center">
                <span className="text-2xl mr-2">🚀</span>
                Application 1: Quick Multiplication
              </h3>
              <div className="text-gray-700 dark:text-gray-300 space-y-3">
                <p className="font-semibold">Calculate: 35 × 35 mentally</p>

                <p><strong>Method:</strong> Rewrite as (30 + 5)²</p>
                <p className="ml-4">
                  Using <MathText>{'$(a + b)^{2} = a^{2} + 2ab + b^{2}$'}</MathText>:
                </p>
                <p className="ml-4">
                  (30 + 5)² = 30² + 2(30)(5) + 5²
                </p>
                <p className="ml-4">
                  = 900 + 300 + 25
                </p>
                <p className="ml-4 text-lg font-bold">
                  = 1,225
                </p>

                <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/40 rounded">
                  <p className="text-sm">
                    <strong>The trick:</strong> Numbers ending in 5 are perfect for this! For any number ending in 5:
                  </p>
                  <p className="text-sm">• 25² = 625, 45² = 2,025, 65² = 4,225, 75² = 5,625</p>
                </div>
              </div>
            </div>

            {/* Application 2 */}
            <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 border-l-4 border-emerald-500 p-5 rounded mb-6">
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-3 flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                Application 2: Calculate 2022² - 2021²
              </h3>
              <div className="text-gray-700 dark:text-gray-300 space-y-3">
                <p>Without a calculator, this seems impossible! But using difference of squares:</p>

                <p className="ml-4">
                  <MathText>{'$2022^{2} - 2021^{2}$'}</MathText>
                </p>
                <p className="ml-4">
                  = <MathText>{'$(2022 + 2021)(2022 - 2021)$'}</MathText> <span className="text-sm">(difference of squares!)</span>
                </p>
                <p className="ml-4">
                  = (4043)(1)
                </p>
                <p className="ml-4 text-lg font-bold">
                  = 4,043
                </p>

                <div className="mt-4 p-3 bg-emerald-100 dark:bg-emerald-900/40 rounded">
                  <p className="text-sm">
                    <strong>General pattern:</strong> n² - (n-1)² = (n + n - 1)(n - n + 1) = (2n - 1)(1) = 2n - 1
                  </p>
                  <p className="text-sm">So consecutive squares always differ by an odd number!</p>
                  <p className="text-sm">• 10² - 9² = 19, 50² - 49² = 99, 100² - 99² = 199</p>
                </div>
              </div>
            </div>

            {/* Application 3 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500 p-5 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Application 3: Solving Equations
              </h3>
              <div className="text-gray-700 dark:text-gray-300 space-y-3">
                <p className="font-semibold">
                  Problem: Given that x and y are positive integers, solve x² - 9y² = 13
                </p>

                <p><strong>Solution using Polya's Problem-Solving Model:</strong></p>

                <p className="mt-2"><strong>Stage 1: Understand</strong></p>
                <p className="ml-4">• We need to factorise x² - 9y² (difference of squares)</p>
                <p className="ml-4">• Then solve for positive integer values</p>

                <p className="mt-2"><strong>Stage 2: Plan</strong></p>
                <p className="ml-4">• Factorise using a² - b² = (a + b)(a - b)</p>
                <p className="ml-4">• Find factor pairs of 13</p>

                <p className="mt-2"><strong>Stage 3: Execute</strong></p>
                <p className="ml-4">
                  <MathText>{'$x^{2} - 9y^{2} = x^{2} - (3y)^{2} = (x + 3y)(x - 3y) = 13$'}</MathText>
                </p>
                <p className="ml-4">Since 13 is prime, its only factors are 1 and 13</p>
                <p className="ml-4">Since x and y are positive, x - 3y {"<"} x + 3y</p>
                <p className="ml-4">Therefore: x - 3y = 1 and x + 3y = 13</p>

                <p className="ml-4 mt-2">Adding equations: 2x = 14, so x = 7</p>
                <p className="ml-4">Substituting: 7 + 3y = 13, so 3y = 6, y = 2</p>

                <p className="mt-2 ml-4 text-lg font-bold">
                  Answer: x = 7, y = 2
                </p>

                <p className="mt-2"><strong>Stage 4: Verify</strong></p>
                <p className="ml-4">
                  Check: 7² - 9(2²) = 49 - 36 = 13 ✓
                </p>
              </div>
            </div>

            {/* Practice Application */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">
                Challenge Problems: Apply Your Knowledge
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    (f) Calculate 103 × 97 using difference of squares
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    (Hint: Think of this as (100 + 3)(100 - 3))
                  </p>
                  <button
                    onClick={() => setShowSolution6(!showSolution6)}
                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
                  >
                    {showSolution6 ? 'Hide' : 'Show'} Solution
                  </button>
                  {showSolution6 && (
                    <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        103 × 97 = (100 + 3)(100 - 3)
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        = 100² - 3² (using difference of squares)
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        = 10,000 - 9
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 font-bold">
                        = 9,991
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    (g) If a + b = 10 and a - b = 4, find a² - b² without finding a and b first
                  </p>
                  <button
                    onClick={() => setShowSolution7(!showSolution7)}
                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
                  >
                    {showSolution7 ? 'Hide' : 'Show'} Solution
                  </button>
                  {showSolution7 && (
                    <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        Using the identity: <MathText>{'$a^{2} - b^{2} = (a + b)(a - b)$'}</MathText>
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        We already know: a + b = 10 and a - b = 4
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        Therefore: a² - b² = (10)(4)
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 font-bold">
                        = 40
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        (No need to solve for a and b individually!)
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            🎯 Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Difference of Squares Identity:</strong> <MathText>{'$(a + b)(a - b) = a^{2} - b^{2}$'}</MathText>
            </li>
            <li>
              The middle terms (+ab and -ab) cancel out, leaving only a² - b²
            </li>
            <li>
              To expand: Square the first term, subtract the square of the second term
            </li>
            <li>
              To factorise a² - b²: Write as (a + b)(a - b)
            </li>
            <li>
              a² + b² (sum of squares) cannot be factorised using real numbers
            </li>
            <li>
              Order doesn't matter: (a + b)(a - b) = (a - b)(a + b)
            </li>
            <li>
              Mental math applications: Calculate n² - (n-1)² = 2n - 1 instantly
            </li>
            <li>
              Problem-solving: Factorise first, then solve equations strategically
            </li>
            <li>
              Geometric proof: Rearranging an L-shaped region shows why this identity works
            </li>
          </ul>
        </div>

        {/* Summary of All Three Identities */}
        <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-emerald-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-emerald-900/30 border-2 border-purple-500 dark:border-purple-600 p-6 rounded-lg shadow-lg mt-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">
            📚 The Three Special Algebraic Identities
          </h3>

          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Identity 1</p>
              <p className="text-lg">
                <MathText>{'$(a+b)^{2}$'}</MathText>
              </p>
              <p className="text-sm mt-1">
                = <MathText>{'$a^{2}+2ab+b^{2}$'}</MathText>
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Identity 2</p>
              <p className="text-lg">
                <MathText>{'$(a-b)^{2}$'}</MathText>
              </p>
              <p className="text-sm mt-1">
                = <MathText>{'$a^{2}-2ab+b^{2}$'}</MathText>
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Identity 3</p>
              <p className="text-lg">
                <MathText>{'$(a+b)(a-b)$'}</MathText>
              </p>
              <p className="text-sm mt-1">
                = <MathText>{'$a^{2}-b^{2}$'}</MathText>
              </p>
            </div>
          </div>

          <p className="text-center text-gray-700 dark:text-gray-300 mt-4 text-sm italic">
            Master these three identities, and you'll have powerful tools for expansion, factorisation, and problem-solving!
          </p>
        </div>

      </div>
    </div>
  );
}
