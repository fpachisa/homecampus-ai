import React, { useState } from 'react';

const SolvingFormula = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Solving Quadratic Equations Using the Quadratic Formula
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
          Introduction
        </h2>
        <p className="mb-3">
          The <strong>quadratic formula</strong> is a universal method that can solve any quadratic
          equation. It's derived from completing the square on the general form ax² + bx + c = 0.
        </p>
        <p className="mb-3">
          This formula is especially useful when factoring is difficult or impossible, and it
          always gives you the exact solutions (if they exist).
        </p>
        <div className="p-6 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg mt-4 border-2 border-blue-400 dark:border-blue-600">
          <h3 className="font-bold text-xl mb-3 text-center">The Quadratic Formula</h3>
          <div className="text-center text-2xl font-bold">
            x = (-b ± √(b² - 4ac)) / (2a)
          </div>
          <p className="text-center text-sm mt-3">
            For the equation ax² + bx + c = 0
          </p>
        </div>
      </section>

      {/* Understanding the Formula */}
      <section className="mb-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
          1. Understanding the Formula Components
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Identifying a, b, and c:</h3>
          <p className="mb-3">For the standard form <strong>ax² + bx + c = 0</strong>:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>a</strong> = coefficient of x² (must not be zero)</li>
            <li><strong>b</strong> = coefficient of x</li>
            <li><strong>c</strong> = constant term</li>
          </ul>
          <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded">
            <p className="font-semibold text-red-600 dark:text-red-400">Important:</p>
            <p>Include the signs! If the term is -3x², then a = -3, not 3.</p>
          </div>
        </div>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Examples of Identifying a, b, c:</h3>
          <div className="space-y-3 ml-4">
            <div>
              <p><strong>2x² + 5x - 3 = 0</strong></p>
              <p className="ml-4 text-sm">a = 2, b = 5, c = -3</p>
            </div>
            <div>
              <p><strong>x² - 7x + 10 = 0</strong></p>
              <p className="ml-4 text-sm">a = 1, b = -7, c = 10</p>
            </div>
            <div>
              <p><strong>-3x² + 2x + 8 = 0</strong></p>
              <p className="ml-4 text-sm">a = -3, b = 2, c = 8</p>
            </div>
            <div>
              <p><strong>4x² - 9 = 0</strong> (no x term)</p>
              <p className="ml-4 text-sm">a = 4, b = 0, c = -9</p>
            </div>
          </div>
        </div>
      </section>

      {/* Using the Formula */}
      <section className="mb-8 p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">
          2. Step-by-Step Application
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">The Process:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Write the equation in standard form (ax² + bx + c = 0)</li>
            <li>Identify the values of a, b, and c</li>
            <li>Calculate the discriminant: b² - 4ac</li>
            <li>Substitute a, b, and c into the formula</li>
            <li>Simplify under the square root</li>
            <li>Evaluate the ± to get two solutions</li>
            <li>Simplify if possible</li>
          </ol>
        </div>

        {/* Worked Example 1 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-green-100 dark:bg-green-900 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-800 transition"
          >
            {showExample1 ? '▼' : '▶'} Example 1: Solve x² + 5x + 6 = 0
          </button>

          {showExample1 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-green-500">
              <p className="mb-2"><strong>Given:</strong> x² + 5x + 6 = 0</p>

              <p className="mb-2"><strong>Step 1:</strong> Identify a, b, c</p>
              <p className="ml-4 mb-2">a = 1, b = 5, c = 6</p>

              <p className="mb-2"><strong>Step 2:</strong> Calculate discriminant</p>
              <p className="ml-4 mb-2">b² - 4ac = 5² - 4(1)(6) = 25 - 24 = 1</p>

              <p className="mb-2"><strong>Step 3:</strong> Substitute into formula</p>
              <div className="ml-4 mb-2">
                <p>x = (-b ± √(b² - 4ac)) / (2a)</p>
                <p>x = (-5 ± √1) / (2·1)</p>
                <p>x = (-5 ± 1) / 2</p>
              </div>

              <p className="mb-2"><strong>Step 4:</strong> Evaluate both solutions</p>
              <div className="ml-4 mb-2">
                <p>x = (-5 + 1) / 2 = -4/2 = -2</p>
                <p>x = (-5 - 1) / 2 = -6/2 = -3</p>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Solutions: x = -2 or x = -3</p>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Check:</strong> (-2)² + 5(-2) + 6 = 4 - 10 + 6 = 0 ✓
              </p>
            </div>
          )}
        </div>
      </section>

      {/* The Discriminant */}
      <section className="mb-8 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          3. Understanding the Discriminant
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">What is the Discriminant?</h3>
          <p className="mb-2">
            The discriminant is the expression under the square root: <strong>b² - 4ac</strong>
          </p>
          <p className="mb-3">
            It tells us important information about the solutions before we even solve the equation.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-green-600 dark:text-green-400">
              Case 1: Discriminant &gt; 0 (Positive)
            </h3>
            <p className="mb-2">The equation has <strong>two distinct real solutions</strong></p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Example: b² - 4ac = 25 → √25 = 5 → two different solutions
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">
              Case 2: Discriminant = 0
            </h3>
            <p className="mb-2">The equation has <strong>one repeated real solution</strong></p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Example: b² - 4ac = 0 → √0 = 0 → x = -b/(2a) (only one value)
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-red-600 dark:text-red-400">
              Case 3: Discriminant &lt; 0 (Negative)
            </h3>
            <p className="mb-2">The equation has <strong>no real solutions</strong></p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Example: b² - 4ac = -4 → cannot take square root of negative (in real numbers)
            </p>
          </div>
        </div>

        {/* Worked Example 2 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample2(!showExample2)}
            className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-800 transition"
          >
            {showExample2 ? '▼' : '▶'} Example 2: Solve 2x² - 7x + 3 = 0
          </button>

          {showExample2 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-purple-500">
              <p className="mb-2"><strong>Given:</strong> 2x² - 7x + 3 = 0</p>

              <p className="mb-2"><strong>Step 1:</strong> Identify a, b, c</p>
              <p className="ml-4 mb-2">a = 2, b = -7, c = 3</p>

              <p className="mb-2"><strong>Step 2:</strong> Calculate discriminant</p>
              <p className="ml-4 mb-2">b² - 4ac = (-7)² - 4(2)(3) = 49 - 24 = 25</p>
              <p className="ml-4 mb-2 text-green-600 dark:text-green-400">
                Discriminant = 25 &gt; 0, so we have two distinct real solutions ✓
              </p>

              <p className="mb-2"><strong>Step 3:</strong> Apply the formula</p>
              <div className="ml-4 mb-2">
                <p>x = (7 ± √25) / (2·2)</p>
                <p>x = (7 ± 5) / 4</p>
              </div>

              <p className="mb-2"><strong>Step 4:</strong> Calculate both solutions</p>
              <div className="ml-4 mb-2">
                <p>x = (7 + 5) / 4 = 12/4 = 3</p>
                <p>x = (7 - 5) / 4 = 2/4 = 1/2</p>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Solutions: x = 3 or x = 1/2</p>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Check x = 3:</strong> 2(3)² - 7(3) + 3 = 18 - 21 + 3 = 0 ✓
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Irrational Solutions */}
      <section className="mb-8 p-6 bg-orange-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700 dark:text-orange-300">
          4. Working with Irrational Solutions
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">When Discriminant is Not a Perfect Square:</h3>
          <p className="mb-2">
            If b² - 4ac is positive but not a perfect square, the solutions will involve surds (irrational numbers).
          </p>
          <p className="mb-2">
            Leave answers in exact form unless asked to approximate.
          </p>
        </div>

        {/* Worked Example 3 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample3(!showExample3)}
            className="w-full text-left p-4 bg-orange-100 dark:bg-orange-900 rounded-lg font-semibold hover:bg-orange-200 dark:hover:bg-orange-800 transition"
          >
            {showExample3 ? '▼' : '▶'} Example 3: Solve x² + 4x + 1 = 0
          </button>

          {showExample3 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-orange-500">
              <p className="mb-2"><strong>Given:</strong> x² + 4x + 1 = 0</p>

              <p className="mb-2"><strong>Step 1:</strong> Identify a, b, c</p>
              <p className="ml-4 mb-2">a = 1, b = 4, c = 1</p>

              <p className="mb-2"><strong>Step 2:</strong> Calculate discriminant</p>
              <p className="ml-4 mb-2">b² - 4ac = 4² - 4(1)(1) = 16 - 4 = 12</p>
              <p className="ml-4 mb-2 text-blue-600 dark:text-blue-400">
                Discriminant = 12 &gt; 0 but not a perfect square (irrational solutions)
              </p>

              <p className="mb-2"><strong>Step 3:</strong> Apply the formula</p>
              <div className="ml-4 mb-2">
                <p>x = (-4 ± √12) / (2·1)</p>
                <p>x = (-4 ± √12) / 2</p>
              </div>

              <p className="mb-2"><strong>Step 4:</strong> Simplify the surd</p>
              <div className="ml-4 mb-2">
                <p>√12 = √(4·3) = 2√3</p>
                <p>x = (-4 ± 2√3) / 2</p>
              </div>

              <p className="mb-2"><strong>Step 5:</strong> Simplify the fraction</p>
              <div className="ml-4 mb-2">
                <p>x = -2 ± √3</p>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Exact Solutions: x = -2 + √3 or x = -2 - √3</p>
                <p className="mt-2 text-sm">Approximate: x ≈ -0.27 or x ≈ -3.73</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Practice Problems */}
      <section className="mb-8 p-6 bg-indigo-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">
          Practice Problems
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">1. Solve x² - 6x + 8 = 0 using the quadratic formula</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>a = 1, b = -6, c = 8</p>
                <p>Discriminant: 36 - 32 = 4</p>
                <p>x = (6 ± 2) / 2</p>
                <p className="font-semibold">Answer: x = 4 or x = 2</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">2. Solve 3x² + 5x - 2 = 0</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>a = 3, b = 5, c = -2</p>
                <p>Discriminant: 25 - 4(3)(-2) = 25 + 24 = 49</p>
                <p>x = (-5 ± 7) / 6</p>
                <p className="font-semibold">Answer: x = 1/3 or x = -2</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">3. Solve x² + 2x + 5 = 0</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>a = 1, b = 2, c = 5</p>
                <p>Discriminant: 4 - 20 = -16</p>
                <p className="font-semibold text-red-600 dark:text-red-400">
                  No real solutions (discriminant &lt; 0)
                </p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">4. Solve 2x² - 8x + 5 = 0 (leave in exact form)</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>a = 2, b = -8, c = 5</p>
                <p>Discriminant: 64 - 40 = 24</p>
                <p>x = (8 ± √24) / 4 = (8 ± 2√6) / 4</p>
                <p className="font-semibold">Answer: x = (4 ± √6) / 2</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">5. Solve x² - 10x + 25 = 0</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>a = 1, b = -10, c = 25</p>
                <p>Discriminant: 100 - 100 = 0</p>
                <p>x = 10 / 2 = 5</p>
                <p className="font-semibold">Answer: x = 5 (repeated root)</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">
          Key Takeaways
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>The formula:</strong> x = (-b ± √(b² - 4ac)) / (2a)</li>
          <li>Works for all quadratic equations (universal method)</li>
          <li>First write in standard form and correctly identify a, b, c (including signs!)</li>
          <li>The discriminant (b² - 4ac) tells you about the nature of solutions</li>
          <li>Discriminant &gt; 0: two distinct real solutions</li>
          <li>Discriminant = 0: one repeated solution</li>
          <li>Discriminant &lt; 0: no real solutions</li>
          <li>Simplify surds when possible (e.g., √12 = 2√3)</li>
          <li>Leave answers in exact form unless asked for decimals</li>
        </ul>
      </section>
    </div>
  );
};

export default SolvingFormula;
