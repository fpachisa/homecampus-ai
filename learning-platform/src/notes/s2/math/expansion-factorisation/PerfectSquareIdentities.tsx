import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function PerfectSquareIdentities() {
  // State for expandable solutions
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);
  const [showSolution6, setShowSolution6] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 text-white p-6 rounded-t-lg shadow-lg">
        <h1 className="text-3xl font-bold">Perfect Square Identities</h1>
        <p className="mt-2 text-purple-100">
          Discover the beautiful patterns in (a+b)² and (a-b)² using geometric reasoning and algebraic expansion
        </p>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-8">

        {/* Section 1: Introduction and Common Misconception */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Perfect Square Challenge
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Quick question: Without using a calculator, what is 2022² - 2021²? Seems difficult, right? By the end of this lesson, you'll be able to solve this in seconds using perfect square identities!
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                ⚠️ Common Mistake Alert!
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Many students think: <MathText>{'$(a + b)^{2} = a^{2} + b^{2}$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                But this is <strong>WRONG</strong>! Let's see why with a simple example:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                If <MathText>{'$(a + b)^{2} = a^{2} + b^{2}$'}</MathText> were true, then:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                • <MathText>{'$(2 + 3)^{2} = 2^{2} + 3^{2}$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                • <MathText>{'$5^{2} = 4 + 9$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                • 25 = 13 ❌ This is clearly false!
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              So what is the <em>correct</em> expansion of (a + b)²? Let's discover it together!
            </p>
          </div>
        </section>

        {/* Section 2: Discovering (a+b)² */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Discovering the First Perfect Square Identity: (a + b)²
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Method 1: Using the Distributive Law
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Remember that <MathText>{'$(a + b)^{2}$'}</MathText> means <MathText>{'$(a + b) \\times (a + b)$'}</MathText>. Let's expand this carefully:
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <MathText>{'$(a + b)^{2} = (a + b)(a + b)$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-6">
                = <MathText>{'$a(a + b) + b(a + b)$'}</MathText> <span className="text-sm text-gray-600 dark:text-gray-400">(Distribute first bracket)</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-6">
                = <MathText>{'$a^{2} + ab + ba + b^{2}$'}</MathText> <span className="text-sm text-gray-600 dark:text-gray-400">(Distribute a and b)</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-6">
                = <MathText>{'$a^{2} + ab + ab + b^{2}$'}</MathText> <span className="text-sm text-gray-600 dark:text-gray-400">(Since ba = ab)</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 ml-6 text-lg font-semibold">
                = <MathText>{'$a^{2} + 2ab + b^{2}$'}</MathText> <span className="text-sm text-gray-600 dark:text-gray-400">(Combine like terms)</span>
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Method 2: Using a Multiplication Grid
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We can visualize this expansion using a multiplication grid (also called an area model):
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm">
              <pre className="text-gray-800 dark:text-gray-200">
{`        ×  │    a    │    b
    ───────┼─────────┼─────────
        a  │   a²    │   ab
    ───────┼─────────┼─────────
        b  │   ab    │   b²
`}
              </pre>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Adding all four regions: <MathText>{'$a^{2} + ab + ab + b^{2} = a^{2} + 2ab + b^{2}$'}</MathText>
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Method 3: Geometric Proof Using Area
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Now for the most beautiful proof! Imagine a square with side length (a + b):
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg mb-4 border border-indigo-300 dark:border-indigo-700">
              <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
                📐 Geometric Visualization
              </h4>

              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
                <pre className="text-gray-800 dark:text-gray-200 text-xs">
{`          a              b
    ┌──────────────┬──────────┐
    │              │          │
  a │      a²      │    ab    │
    │              │          │
    ├──────────────┼──────────┤
    │              │          │
  b │      ab      │    b²    │
    │              │          │
    └──────────────┴──────────┘
         (a + b)
`}
                </pre>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Understanding the diagram:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>The big square has side length (a + b), so its total area is (a + b)²</li>
                <li>We divide it into 4 regions:</li>
                <li className="ml-6">• Top-left square: area = a × a = a²</li>
                <li className="ml-6">• Top-right rectangle: area = a × b = ab</li>
                <li className="ml-6">• Bottom-left rectangle: area = b × a = ab</li>
                <li className="ml-6">• Bottom-right square: area = b × b = b²</li>
                <li>Total area = a² + ab + ab + b² = <strong>a² + 2ab + b²</strong></li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Notice how we get <em>two</em> rectangles with area ab, which is why the middle term is <strong>2ab</strong>, not just ab!
            </p>
          </div>

          {/* Identity Box */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 border-2 border-purple-500 dark:border-purple-600 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center">
              <span className="text-2xl mr-2">💡</span>
              First Perfect Square Identity
            </h3>
            <p className="text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
              <MathText>{'$(a + b)^{2} = a^{2} + 2ab + b^{2}$'}</MathText>
            </p>
          </div>
        </section>

        {/* Worked Examples for (a+b)² */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Worked Examples: Expanding (a + b)²
          </h2>

          {/* Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Expand (x + 4)²
            </h3>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p className="mb-2">
                <strong>Solution:</strong> Using the identity <MathText>{'$(a + b)^{2} = a^{2} + 2ab + b^{2}$'}</MathText>
              </p>
              <p>
                Here, a = x and b = 4
              </p>
              <p>
                <MathText>{'$(x + 4)^{2} = x^{2} + 2(x)(4) + 4^{2}$'}</MathText>
              </p>
              <p className="ml-6">
                = <MathText>{'$x^{2} + 8x + 16$'}</MathText>
              </p>
              <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/40 rounded">
                <p className="text-sm">
                  <strong>Breaking it down:</strong>
                </p>
                <p className="text-sm">• Square of first term: x² = x²</p>
                <p className="text-sm">• Double product: 2 × x × 4 = 8x</p>
                <p className="text-sm">• Square of second term: 4² = 16</p>
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Expand <MathText>{'$(3y + \\frac{1}{3})^{2}$'}</MathText>
            </h3>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p className="mb-2">
                <strong>Solution:</strong> Here, a = 3y and b = 1/3
              </p>
              <p>
                <MathText>{'$(3y + \\frac{1}{3})^{2} = (3y)^{2} + 2(3y)(\\frac{1}{3}) + (\\frac{1}{3})^{2}$'}</MathText>
              </p>
              <p className="ml-6">
                = <MathText>{'$9y^{2} + 2y + \\frac{1}{9}$'}</MathText>
              </p>
              <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/40 rounded">
                <p className="text-sm">
                  <strong>Step-by-step:</strong>
                </p>
                <p className="text-sm">• (3y)² = 9y²</p>
                <p className="text-sm">• 2 × 3y × 1/3 = 6y/3 = 2y</p>
                <p className="text-sm">• (1/3)² = 1/9</p>
              </div>
            </div>
          </div>

          {/* Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Expand (4a + 3b)²
            </h3>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p className="mb-2">
                <strong>Solution:</strong> Here, a = 4a and b = 3b (yes, we can have variables with coefficients!)
              </p>
              <p>
                <MathText>{'$(4a + 3b)^{2} = (4a)^{2} + 2(4a)(3b) + (3b)^{2}$'}</MathText>
              </p>
              <p className="ml-6">
                = <MathText>{'$16a^{2} + 24ab + 9b^{2}$'}</MathText>
              </p>
              <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/40 rounded">
                <p className="text-sm">
                  <strong>Careful with:</strong>
                </p>
                <p className="text-sm">• (4a)² = 4² × a² = 16a² (square both the coefficient and variable)</p>
                <p className="text-sm">• 2 × 4a × 3b = 24ab</p>
                <p className="text-sm">• (3b)² = 9b²</p>
              </div>
            </div>
          </div>

          {/* Practice Problems */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">
              Practice: Expand the following
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (a) (x + 6)²
                </p>
                <button
                  onClick={() => setShowSolution1(!showSolution1)}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
                >
                  {showSolution1 ? 'Hide' : 'Show'} Solution
                </button>
                {showSolution1 && (
                  <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <MathText>{'$(x + 6)^{2} = x^{2} + 2(x)(6) + 6^{2}$'}</MathText>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 ml-6">
                      = <MathText>{'$x^{2} + 12x + 36$'}</MathText>
                    </p>
                  </div>
                )}
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (b) (7 + 3a)²
                </p>
                <button
                  onClick={() => setShowSolution2(!showSolution2)}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
                >
                  {showSolution2 ? 'Hide' : 'Show'} Solution
                </button>
                {showSolution2 && (
                  <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <MathText>{'$(7 + 3a)^{2} = 7^{2} + 2(7)(3a) + (3a)^{2}$'}</MathText>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 ml-6">
                      = <MathText>{'$49 + 42a + 9a^{2}$'}</MathText>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Discovering (a-b)² */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Discovering the Second Perfect Square Identity: (a - b)²
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Now let's explore what happens when we have (a - b)² instead of (a + b)². We can derive this identity cleverly by replacing b with (-b) in our first identity!
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Starting with: <MathText>{'$(a + b)^{2} = a^{2} + 2ab + b^{2}$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Replace b with (-b):
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-6">
                <MathText>{'$(a + (-b))^{2} = a^{2} + 2a(-b) + (-b)^{2}$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-6">
                <MathText>{'$(a - b)^{2} = a^{2} - 2ab + b^{2}$'}</MathText>
              </p>
              <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/40 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Key points:</strong>
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">• 2a(-b) = -2ab (negative middle term)</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">• (-b)² = b² (not -b²! A negative squared is positive)</p>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                ⚠️ Common Mistake Alert!
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Students often write: <MathText>{'$(a - b)^{2} = a^{2} - b^{2}$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                This is <strong>WRONG</strong>! The correct answer has three terms, not two, and the last term is <strong>+ b²</strong> (positive), not - b².
              </p>
            </div>
          </div>

          {/* Identity Box */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 border-2 border-purple-500 dark:border-purple-600 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center">
              <span className="text-2xl mr-2">💡</span>
              Second Perfect Square Identity
            </h3>
            <p className="text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
              <MathText>{'$(a - b)^{2} = a^{2} - 2ab + b^{2}$'}</MathText>
            </p>
          </div>
        </section>

        {/* Worked Examples for (a-b)² */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Worked Examples: Expanding (a - b)²
          </h2>

          {/* Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Expand (x - 3)²
            </h3>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p className="mb-2">
                <strong>Solution:</strong> Using <MathText>{'$(a - b)^{2} = a^{2} - 2ab + b^{2}$'}</MathText>
              </p>
              <p>
                Here, a = x and b = 3
              </p>
              <p>
                <MathText>{'$(x - 3)^{2} = x^{2} - 2(x)(3) + 3^{2}$'}</MathText>
              </p>
              <p className="ml-6">
                = <MathText>{'$x^{2} - 6x + 9$'}</MathText>
              </p>
              <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/40 rounded">
                <p className="text-sm">
                  <strong>Notice:</strong>
                </p>
                <p className="text-sm">• First term: x² (always positive)</p>
                <p className="text-sm">• Middle term: -6x (negative because of the minus sign)</p>
                <p className="text-sm">• Last term: +9 (always positive!)</p>
              </div>
            </div>
          </div>

          {/* Example 5 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 5: Expand (5a - 2b)²
            </h3>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p className="mb-2">
                <strong>Solution:</strong> Here, a = 5a and b = 2b
              </p>
              <p>
                <MathText>{'$(5a - 2b)^{2} = (5a)^{2} - 2(5a)(2b) + (2b)^{2}$'}</MathText>
              </p>
              <p className="ml-6">
                = <MathText>{'$25a^{2} - 20ab + 4b^{2}$'}</MathText>
              </p>
              <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/40 rounded">
                <p className="text-sm">
                  <strong>Calculations:</strong>
                </p>
                <p className="text-sm">• (5a)² = 25a²</p>
                <p className="text-sm">• 2 × 5a × 2b = 20ab, but with minus: -20ab</p>
                <p className="text-sm">• (2b)² = 4b²</p>
              </div>
            </div>
          </div>

          {/* Practice Problems */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">
              Practice: Expand the following
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (c) (x - 4)²
                </p>
                <button
                  onClick={() => setShowSolution3(!showSolution3)}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
                >
                  {showSolution3 ? 'Hide' : 'Show'} Solution
                </button>
                {showSolution3 && (
                  <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <MathText>{'$(x - 4)^{2} = x^{2} - 2(x)(4) + 4^{2}$'}</MathText>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 ml-6">
                      = <MathText>{'$x^{2} - 8x + 16$'}</MathText>
                    </p>
                  </div>
                )}
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (d) (3a - 4b)²
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
                      <MathText>{'$(3a - 4b)^{2} = (3a)^{2} - 2(3a)(4b) + (4b)^{2}$'}</MathText>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 ml-6">
                      = <MathText>{'$9a^{2} - 24ab + 16b^{2}$'}</MathText>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Factorising with Perfect Squares */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Factorising Using Perfect Square Identities
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Since factorisation is the reverse of expansion, we can use our perfect square identities backwards!
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg mb-4 border border-indigo-300 dark:border-indigo-700">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
                🔄 Reverse Process
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="flex items-center justify-between">
                  <span>Expansion →</span>
                  <span className="font-mono text-sm">(a+b)² → a²+2ab+b²</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Factorisation ←</span>
                  <span className="font-mono text-sm">a²+2ab+b² → (a+b)²</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
              How to Recognize Perfect Square Trinomials
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              An expression is a perfect square if:
            </p>

            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 ml-4">
              <li>It has three terms (trinomial)</li>
              <li>First and last terms are perfect squares (can take square root)</li>
              <li>Middle term = ±2 × √(first term) × √(last term)</li>
            </ol>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 6: Factorise x² + 10x + 25
              </h3>
              <div className="text-gray-700 dark:text-gray-300 space-y-2">
                <p className="mb-2"><strong>Step 1:</strong> Check if first and last terms are perfect squares</p>
                <p className="ml-4">• √(x²) = x ✓</p>
                <p className="ml-4">• √25 = 5 ✓</p>

                <p className="mt-3"><strong>Step 2:</strong> Check if middle term = 2 × first × last</p>
                <p className="ml-4">• 2 × x × 5 = 10x ✓</p>
                <p className="ml-4">• Yes! The middle term matches</p>

                <p className="mt-3"><strong>Step 3:</strong> Write as perfect square</p>
                <p className="ml-4">Since pattern is a² + 2ab + b², we get:</p>
                <p className="ml-4 text-lg font-semibold">
                  <MathText>{'$x^{2} + 10x + 25 = (x + 5)^{2}$'}</MathText>
                </p>

                <p className="mt-3"><strong>Step 4:</strong> Verify by expanding</p>
                <p className="ml-4">(x + 5)² = x² + 10x + 25 ✓ Correct!</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 7: Factorise 9y² + 24y + 16
              </h3>
              <div className="text-gray-700 dark:text-gray-300 space-y-2">
                <p className="mb-2"><strong>Step 1:</strong> Check perfect squares</p>
                <p className="ml-4">• √(9y²) = 3y ✓</p>
                <p className="ml-4">• √16 = 4 ✓</p>

                <p className="mt-3"><strong>Step 2:</strong> Check middle term</p>
                <p className="ml-4">• 2 × 3y × 4 = 24y ✓</p>

                <p className="mt-3"><strong>Answer:</strong></p>
                <p className="ml-4 text-lg font-semibold">
                  <MathText>{'$9y^{2} + 24y + 16 = (3y + 4)^{2}$'}</MathText>
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 8: Factorise 4a² - 12ab + 9b²
              </h3>
              <div className="text-gray-700 dark:text-gray-300 space-y-2">
                <p className="mb-2"><strong>Step 1:</strong> Check perfect squares</p>
                <p className="ml-4">• √(4a²) = 2a ✓</p>
                <p className="ml-4">• √(9b²) = 3b ✓</p>

                <p className="mt-3"><strong>Step 2:</strong> Check middle term (note the minus sign!)</p>
                <p className="ml-4">• 2 × 2a × 3b = 12ab</p>
                <p className="ml-4">• Middle term is -12ab, so this matches the pattern a² - 2ab + b²</p>

                <p className="mt-3"><strong>Answer:</strong></p>
                <p className="ml-4 text-lg font-semibold">
                  <MathText>{'$4a^{2} - 12ab + 9b^{2} = (2a - 3b)^{2}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problems */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">
              Practice: Factorise if possible (state N.A. if not a perfect square)
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (e) x² + 18x + 81
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
                      Check: √(x²) = x, √81 = 9
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Middle: 2 × x × 9 = 18x ✓
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                      Answer: <MathText>{'$(x + 9)^{2}$'}</MathText>
                    </p>
                  </div>
                )}
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (f) 16x² + 28xy + 49y²
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
                      Check: √(16x²) = 4x, √(49y²) = 7y
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Middle: 2 × 4x × 7y = 56xy
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      But we have 28xy ≠ 56xy ✗
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                      Answer: <strong>N.A.</strong> (Not a perfect square)
                    </p>
                  </div>
                )}
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
              <strong>First Perfect Square Identity:</strong> <MathText>{'$(a + b)^{2} = a^{2} + 2ab + b^{2}$'}</MathText>
            </li>
            <li>
              <strong>Second Perfect Square Identity:</strong> <MathText>{'$(a - b)^{2} = a^{2} - 2ab + b^{2}$'}</MathText>
            </li>
            <li>
              (a + b)² is NOT equal to a² + b² - there's always a middle term of 2ab
            </li>
            <li>
              In (a - b)², the last term is +b² (positive), not -b²
            </li>
            <li>
              To expand: Square first, double product for middle, square last
            </li>
            <li>
              To factorise: Check if it's a perfect square trinomial using the 3-step test
            </li>
            <li>
              Geometric area models provide beautiful visual proofs of these identities
            </li>
            <li>
              Always verify your factorisation by expanding back
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
