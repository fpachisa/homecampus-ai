import { useState } from 'react';

const LineEquations = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Equations of Lines</h1>
        <p className="text-lg">Understanding different forms of line equations and how to convert between them</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Introduction to Line Equations */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">1. Introduction to Line Equations</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What is the Equation of a Line?</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The <strong>equation of a line</strong> is a rule which connects the x and y coordinates of <em>all</em> points on the line.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              If a point's coordinates satisfy the equation, then the point lies on the line. If they don't satisfy the equation, the point is not on the line.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Key Concepts:</h3>
            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <div className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">•</span>
                <div>
                  <p className="font-semibold">x-intercept:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">The value of x where the line cuts the x-axis (where y = 0)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">•</span>
                <div>
                  <p className="font-semibold">y-intercept:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">The value of y where the line cuts the y-axis (where x = 0)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">•</span>
                <div>
                  <p className="font-semibold">Axes intercepts:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Together, the x-intercept and y-intercept are called the axes intercepts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Point-Gradient Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">2. Point-Gradient Form</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Point-Gradient Form:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Consider a line with gradient <em>m</em> which passes through the point (x₁, y₁).
            </p>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Suppose (x, y) is a general point on the line. Applying the gradient formula:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center font-mono text-sm text-gray-600 dark:text-gray-400 mb-2">
                (y − y₁)/(x − x₁) = m
              </p>
              <p className="text-center font-mono text-sm text-gray-600 dark:text-gray-400 mb-2">
                ∴ y − y₁ = m(x − x₁)
              </p>
              <div className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-600">
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Point-Gradient Form:
                </p>
                <p className="text-center font-mono text-xl font-bold text-gray-900 dark:text-gray-100">
                  y − y₁ = m(x − x₁)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600 mb-4">
            <h3 className="font-bold mb-2 text-blue-800 dark:text-blue-200">When to Use Point-Gradient Form:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Use this form when you know:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-800 dark:text-gray-200">
              <li>The gradient <em>m</em>, and</li>
              <li>At least one point (x₁, y₁) on the line</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Gradient-Intercept Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">3. Gradient-Intercept Form</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Gradient-Intercept Form:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The gradient-intercept form of the equation of a line with gradient <em>m</em> and y-intercept <em>c</em> is:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center font-mono text-2xl font-bold text-gray-900 dark:text-gray-100">
                y = mx + c
              </p>
              <div className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">
                <p>where m = gradient</p>
                <p>and c = y-intercept</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Reading Information from y = mx + c:</h3>
            <div className="space-y-3">
              <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Example: y = 3x − 5</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">• Gradient m = 3</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">• y-intercept c = −5</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">• The line passes through (0, −5)</p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Example: y = −2x + 7</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">• Gradient m = −2</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">• y-intercept c = 7</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">• The line passes through (0, 7)</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
            <h3 className="font-bold mb-2 text-blue-800 dark:text-blue-200">When to Use Gradient-Intercept Form:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              This form is most useful when you know the gradient and the y-intercept, or when you want to quickly identify these values from an equation.
            </p>
          </div>
        </div>

        {/* Section 4: General Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">4. General Form</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The General Form:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The general form of the equation of a line is:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center font-mono text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                ax + by = d
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                where a, b, and d are constants
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Special Cases:</h3>
            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <div className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">1.</span>
                <div>
                  <p className="font-semibold">Vertical lines: x = k</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Example: x = 2 (vertical line through x = 2)</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Written with a = 1, b = 0, d = k</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">2.</span>
                <div>
                  <p className="font-semibold">Horizontal lines: y = k</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Example: y = −3 (horizontal line through y = −3)</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Can also be written as 0x + 1y = k</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">Convention:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Equations in general form are usually written with a <strong>positive coefficient of x</strong>. For example, write 3x + 5y = 2 rather than −3x − 5y = −2.
            </p>
          </div>
        </div>

        {/* Section 5: Converting Between Forms */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">5. Converting Between Forms</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Conversion Strategies:</h3>

            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  From Gradient-Intercept to General Form:
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Start with: y = mx + c
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                  • Rearrange to get all terms on one side
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4 mb-2">
                  • Multiply to eliminate fractions if needed
                </p>
                <p className="text-sm font-mono text-gray-800 dark:text-gray-200 ml-4">
                  y = (1/2)x − 3  →  2y = x − 6  →  x − 2y = 6
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  From General to Gradient-Intercept Form:
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Start with: ax + by = d
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                  • Isolate y on one side
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4 mb-2">
                  • Divide by the coefficient of y
                </p>
                <p className="text-sm font-mono text-gray-800 dark:text-gray-200 ml-4">
                  3x − 2y = 6  →  −2y = −3x + 6  →  y = (3/2)x − 3
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Finding the Gradient from General Form:
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  For ax + by = d, rearrange to gradient-intercept form:
                </p>
                <p className="text-sm font-mono text-gray-800 dark:text-gray-200 ml-4">
                  by = −ax + d  →  y = (−a/b)x + (d/b)
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4 mt-2">
                  So the gradient is m = −a/b
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-green-100 dark:bg-green-900/50 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Finding Equation from Gradient and Point
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-green-500 dark:border-green-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Find, in gradient-intercept form, the equation of the line which passes through A(1, 3) and B(−2, 5).
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Find the gradient</p>
                    <p className="ml-4 font-mono">m = (y₂ − y₁)/(x₂ − x₁)</p>
                    <p className="ml-4 font-mono">m = (5 − 3)/(−2 − 1)</p>
                    <p className="ml-4 font-mono">m = 2/(−3) = −2/3</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Use point-gradient form with point A(1, 3)</p>
                    <p className="ml-4 font-mono">y − y₁ = m(x − x₁)</p>
                    <p className="ml-4 font-mono">y − 3 = (−2/3)(x − 1)</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 3: Rearrange to gradient-intercept form</p>
                    <p className="ml-4 font-mono">y − 3 = (−2/3)x + 2/3</p>
                    <p className="ml-4 font-mono">y = (−2/3)x + 2/3 + 3</p>
                    <p className="ml-4 font-mono">y = (−2/3)x + 11/3</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200">Answer: y = (−2/3)x + 11/3</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-green-100 dark:bg-green-900/50 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Converting to General Form
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-green-500 dark:border-green-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Write the equation y = (1/2)x − 3 in general form.
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Multiply both sides by 2 to eliminate the fraction</p>
                    <p className="ml-4 font-mono">y = (1/2)x − 3</p>
                    <p className="ml-4 font-mono">2y = x − 6</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 2: Rearrange to ax + by = d form</p>
                    <p className="ml-4 font-mono">−x + 2y = −6</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Step 3: Multiply by −1 to make x coefficient positive</p>
                    <p className="ml-4 font-mono">x − 2y = 6</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200">Answer: x − 2y = 6</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left p-4 bg-green-100 dark:bg-green-900/50 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample3 ? '▼' : '▶'} Example 3: Finding Gradient from General Form
            </button>

            {showExample3 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-green-500 dark:border-green-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Find the gradient of the line with equation 3x + 4y = 7.
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Method 1: Rearrange to gradient-intercept form</p>
                    <p className="ml-4 font-mono">3x + 4y = 7</p>
                    <p className="ml-4 font-mono">4y = −3x + 7</p>
                    <p className="ml-4 font-mono">y = (−3/4)x + 7/4</p>
                    <p className="ml-4">So gradient m = −3/4</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Method 2: Use the formula m = −a/b</p>
                    <p className="ml-4">For ax + by = d, gradient = −a/b</p>
                    <p className="ml-4 font-mono">m = −3/4</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-400 dark:border-green-600">
                    <p className="font-bold text-green-800 dark:text-green-200">Answer: m = −3/4</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. Find, in gradient-intercept form, the equation of the line with:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) gradient 2 and y-intercept 4</p>
                <p>b) gradient −3 and y-intercept −2</p>
                <p>c) gradient 1/2 and y-intercept 0</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-green-600 dark:text-green-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> y = 2x + 4</p>
                  <p><strong>b)</strong> y = −3x − 2</p>
                  <p><strong>c)</strong> y = (1/2)x</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Convert to general form (ax + by = d):
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) y = 3x − 4</p>
                <p>b) y = (−2/3)x + 5</p>
                <p>c) y = x</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-green-600 dark:text-green-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> 3x − y = 4</p>
                  <p><strong>b)</strong> 2x + 3y = 15</p>
                  <p><strong>c)</strong> x − y = 0</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                3. Find the gradient of each line:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) 2x + y = 5</p>
                <p>b) 3x − 4y = 12</p>
                <p>c) 5x + 2y = −3</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-green-600 dark:text-green-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> m = −2/1 = −2</p>
                  <p><strong>b)</strong> m = −3/(−4) = 3/4</p>
                  <p><strong>c)</strong> m = −5/2</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>Point-Gradient Form:</strong> y − y₁ = m(x − x₁) — use when you know gradient and a point</li>
            <li><strong>Gradient-Intercept Form:</strong> y = mx + c — use when you know gradient and y-intercept</li>
            <li><strong>General Form:</strong> ax + by = d — useful for all lines including vertical lines</li>
            <li>The <strong>y-intercept</strong> is where the line crosses the y-axis (where x = 0)</li>
            <li>The <strong>x-intercept</strong> is where the line crosses the x-axis (where y = 0)</li>
            <li>From general form ax + by = d, the gradient is m = −a/b</li>
            <li>You can convert between forms using algebraic rearrangement</li>
            <li>Vertical lines have the form x = k (undefined gradient)</li>
            <li>Horizontal lines have the form y = k (gradient = 0)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LineEquations;
