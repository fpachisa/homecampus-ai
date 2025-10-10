import React, { useState } from 'react';

const SolvingCompletingSquare = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Solving Quadratic Equations by Completing the Square
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
          Introduction
        </h2>
        <p className="mb-3">
          <strong>Completing the square</strong> is a powerful algebraic technique that transforms
          a quadratic equation into a perfect square trinomial. This method works for all quadratic
          equations, even when factoring is difficult or impossible.
        </p>
        <p className="mb-3">
          The main idea is to rewrite ax² + bx + c = 0 in the form (x + p)² = q,
          which can then be solved by taking square roots.
        </p>
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded mt-4">
          <p className="font-semibold">Why Learn This Method?</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Works for all quadratic equations</li>
            <li>Helps derive the quadratic formula</li>
            <li>Converts to vertex form for graphing</li>
            <li>Deepens understanding of quadratic structure</li>
          </ul>
        </div>
      </section>

      {/* Understanding Perfect Squares */}
      <section className="mb-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
          1. Understanding Perfect Square Trinomials
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Recognizing Perfect Squares:</h3>
          <p className="mb-3">Recall that when we expand (x + a)², we get:</p>
          <div className="text-center text-lg my-3 p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
            (x + a)² = x² + 2ax + a²
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Notice: The constant term (a²) is the square of half the coefficient of x.
          </p>
        </div>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Key Pattern:</h3>
          <p className="mb-2">For x² + bx to become a perfect square trinomial:</p>
          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li>Take the coefficient of x (which is b)</li>
            <li>Divide it by 2 to get b/2</li>
            <li>Square the result to get (b/2)²</li>
            <li>Add (b/2)² to complete the square</li>
          </ol>
          <div className="text-center text-lg my-3 p-3 bg-green-50 dark:bg-green-900/30 rounded">
            x² + bx + (b/2)² = (x + b/2)²
          </div>
        </div>

        <div className="mb-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded">
          <h3 className="font-semibold mb-2">Examples of Perfect Squares:</h3>
          <div className="space-y-2 ml-4">
            <p>x² + 6x + 9 = (x + 3)² because (6/2)² = 3² = 9</p>
            <p>x² - 10x + 25 = (x - 5)² because (-10/2)² = (-5)² = 25</p>
            <p>x² + 8x + 16 = (x + 4)² because (8/2)² = 4² = 16</p>
          </div>
        </div>
      </section>

      {/* Method for a = 1 */}
      <section className="mb-8 p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">
          2. Completing the Square (when a = 1)
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Step-by-Step Method:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Ensure the equation is in form x² + bx + c = 0</li>
            <li>Move the constant to the right side: x² + bx = -c</li>
            <li>Take half of b, square it: (b/2)²</li>
            <li>Add (b/2)² to both sides</li>
            <li>Write the left side as a perfect square: (x + b/2)²</li>
            <li>Take square root of both sides</li>
            <li>Solve for x</li>
          </ol>
        </div>

        {/* Worked Example 1 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-green-100 dark:bg-green-900 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-800 transition"
          >
            {showExample1 ? '▼' : '▶'} Example 1: Solve x² + 6x + 5 = 0
          </button>

          {showExample1 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-green-500">
              <p className="mb-2"><strong>Given:</strong> x² + 6x + 5 = 0</p>

              <p className="mb-2"><strong>Step 1:</strong> Move constant to right side</p>
              <p className="ml-4 mb-2">x² + 6x = -5</p>

              <p className="mb-2"><strong>Step 2:</strong> Calculate (b/2)²</p>
              <div className="ml-4 mb-2">
                <p>b = 6, so b/2 = 3</p>
                <p>(b/2)² = 3² = 9</p>
              </div>

              <p className="mb-2"><strong>Step 3:</strong> Add 9 to both sides</p>
              <p className="ml-4 mb-2">x² + 6x + 9 = -5 + 9</p>
              <p className="ml-4 mb-2">x² + 6x + 9 = 4</p>

              <p className="mb-2"><strong>Step 4:</strong> Write left side as perfect square</p>
              <p className="ml-4 mb-2">(x + 3)² = 4</p>

              <p className="mb-2"><strong>Step 5:</strong> Take square root of both sides</p>
              <p className="ml-4 mb-2">x + 3 = ±√4</p>
              <p className="ml-4 mb-2">x + 3 = ±2</p>

              <p className="mb-2"><strong>Step 6:</strong> Solve for x</p>
              <div className="ml-4 mb-2">
                <p>x + 3 = 2 or x + 3 = -2</p>
                <p>x = -1 or x = -5</p>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Solutions: x = -1 or x = -5</p>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Check:</strong> (-1)² + 6(-1) + 5 = 1 - 6 + 5 = 0 ✓
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Method for a ≠ 1 */}
      <section className="mb-8 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          3. Completing the Square (when a ≠ 1)
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Additional First Step:</h3>
          <p className="mb-2">
            When the coefficient of x² is not 1, we must first divide the entire equation by a
            to make the leading coefficient equal to 1.
          </p>
          <div className="text-center text-lg my-3 p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
            ax² + bx + c = 0 → x² + (b/a)x + (c/a) = 0
          </div>
        </div>

        {/* Worked Example 2 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample2(!showExample2)}
            className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-800 transition"
          >
            {showExample2 ? '▼' : '▶'} Example 2: Solve 2x² + 8x + 6 = 0
          </button>

          {showExample2 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-purple-500">
              <p className="mb-2"><strong>Given:</strong> 2x² + 8x + 6 = 0</p>

              <p className="mb-2"><strong>Step 1:</strong> Divide entire equation by 2</p>
              <p className="ml-4 mb-2">x² + 4x + 3 = 0</p>

              <p className="mb-2"><strong>Step 2:</strong> Move constant to right side</p>
              <p className="ml-4 mb-2">x² + 4x = -3</p>

              <p className="mb-2"><strong>Step 3:</strong> Calculate (b/2)²</p>
              <div className="ml-4 mb-2">
                <p>b = 4, so b/2 = 2</p>
                <p>(b/2)² = 2² = 4</p>
              </div>

              <p className="mb-2"><strong>Step 4:</strong> Add 4 to both sides</p>
              <p className="ml-4 mb-2">x² + 4x + 4 = -3 + 4</p>
              <p className="ml-4 mb-2">(x + 2)² = 1</p>

              <p className="mb-2"><strong>Step 5:</strong> Take square root</p>
              <p className="ml-4 mb-2">x + 2 = ±1</p>

              <p className="mb-2"><strong>Step 6:</strong> Solve for x</p>
              <div className="ml-4 mb-2">
                <p>x + 2 = 1 or x + 2 = -1</p>
                <p>x = -1 or x = -3</p>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Solutions: x = -1 or x = -3</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Converting to Vertex Form */}
      <section className="mb-8 p-6 bg-orange-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700 dark:text-orange-300">
          4. Converting to Vertex Form
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">From Standard to Vertex Form:</h3>
          <p className="mb-2">
            Completing the square can convert f(x) = ax² + bx + c into vertex form:
          </p>
          <div className="text-center text-lg my-3 p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
            f(x) = a(x - h)² + k
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            where (h, k) is the vertex of the parabola
          </p>
        </div>

        {/* Worked Example 3 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample3(!showExample3)}
            className="w-full text-left p-4 bg-orange-100 dark:bg-orange-900 rounded-lg font-semibold hover:bg-orange-200 dark:hover:bg-orange-800 transition"
          >
            {showExample3 ? '▼' : '▶'} Example 3: Convert f(x) = x² - 6x + 11 to vertex form
          </button>

          {showExample3 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-orange-500">
              <p className="mb-2"><strong>Given:</strong> f(x) = x² - 6x + 11</p>

              <p className="mb-2"><strong>Step 1:</strong> Group x terms and constant separately</p>
              <p className="ml-4 mb-2">f(x) = (x² - 6x) + 11</p>

              <p className="mb-2"><strong>Step 2:</strong> Calculate (b/2)²</p>
              <div className="ml-4 mb-2">
                <p>b = -6, so b/2 = -3</p>
                <p>(b/2)² = (-3)² = 9</p>
              </div>

              <p className="mb-2"><strong>Step 3:</strong> Add and subtract 9 inside the parentheses</p>
              <p className="ml-4 mb-2">f(x) = (x² - 6x + 9 - 9) + 11</p>
              <p className="ml-4 mb-2">f(x) = (x² - 6x + 9) - 9 + 11</p>

              <p className="mb-2"><strong>Step 4:</strong> Factor the perfect square</p>
              <p className="ml-4 mb-2">f(x) = (x - 3)² + 2</p>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Vertex form: f(x) = (x - 3)² + 2</p>
                <p className="mt-2">Vertex: (3, 2)</p>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Verification:</strong> Expand (x - 3)² + 2 = x² - 6x + 9 + 2 = x² - 6x + 11 ✓
              </p>
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
            <p className="font-semibold mb-2">1. Solve x² + 8x + 12 = 0 by completing the square</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>x² + 8x = -12</p>
                <p>Add (8/2)² = 16 to both sides</p>
                <p>(x + 4)² = -12 + 16 = 4</p>
                <p>x + 4 = ±2</p>
                <p className="font-semibold">Answer: x = -2 or x = -6</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">2. Solve 3x² - 12x + 9 = 0 by completing the square</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Divide by 3: x² - 4x + 3 = 0</p>
                <p>x² - 4x = -3</p>
                <p>Add (-4/2)² = 4: (x - 2)² = -3 + 4 = 1</p>
                <p>x - 2 = ±1</p>
                <p className="font-semibold">Answer: x = 3 or x = 1</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">3. Convert f(x) = x² + 10x + 18 to vertex form</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>f(x) = (x² + 10x) + 18</p>
                <p>Add/subtract (10/2)² = 25</p>
                <p>f(x) = (x² + 10x + 25) - 25 + 18</p>
                <p>f(x) = (x + 5)² - 7</p>
                <p className="font-semibold">Answer: f(x) = (x + 5)² - 7, vertex (-5, -7)</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">4. Solve x² - 5x + 2 = 0 by completing the square</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>x² - 5x = -2</p>
                <p>Add (-5/2)² = 25/4</p>
                <p>(x - 5/2)² = -2 + 25/4 = 17/4</p>
                <p>x - 5/2 = ±√(17/4) = ±(√17)/2</p>
                <p className="font-semibold">Answer: x = (5 ± √17)/2</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">5. Convert f(x) = 2x² - 8x + 10 to vertex form</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>f(x) = 2(x² - 4x) + 10</p>
                <p>Complete square inside: x² - 4x + 4 - 4</p>
                <p>f(x) = 2[(x - 2)² - 4] + 10</p>
                <p>f(x) = 2(x - 2)² - 8 + 10</p>
                <p className="font-semibold">Answer: f(x) = 2(x - 2)² + 2, vertex (2, 2)</p>
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
          <li>To complete the square: add (b/2)² where b is the coefficient of x</li>
          <li>When a ≠ 1, divide the entire equation by a first</li>
          <li>The method transforms the equation into (x + p)² = q form</li>
          <li>Completing the square converts standard form to vertex form</li>
          <li>Vertex form f(x) = a(x - h)² + k reveals the vertex (h, k)</li>
          <li>This method works for all quadratic equations (unlike factoring)</li>
          <li>When adding (b/2)² to one side, remember to add it to the other side too</li>
          <li>If the right side becomes negative, there are no real solutions</li>
        </ul>
      </section>
    </div>
  );
};

export default SolvingCompletingSquare;
