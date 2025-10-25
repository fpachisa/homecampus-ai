import { useState } from 'react';

const SolvingExponential = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Solving Exponential Equations that Reduce to Quadratics
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
          Introduction
        </h2>
        <p className="mb-3">
          Some exponential equations can be transformed into quadratic equations using a clever
          technique called <strong>substitution</strong>. This is particularly useful when the
          exponents follow a pattern like 2x and x.
        </p>
        <p className="mb-3">
          The key insight is recognizing that expressions like 2²ˣ can be rewritten as (2ˣ)²,
          which suggests we can substitute u = 2ˣ to get a quadratic equation in u.
        </p>
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded mt-4">
          <p className="font-semibold">Key Strategy:</p>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>Make a substitution to convert to quadratic form</li>
            <li>Solve the resulting quadratic equation</li>
            <li>Back-substitute to find the original variable</li>
            <li>Use logarithms to solve for the exponent</li>
          </ol>
        </div>
      </section>

      {/* Basic Substitution Method */}
      <section className="mb-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
          1. Basic Substitution Method
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Recognizing the Pattern:</h3>
          <p className="mb-3">Look for equations where one term has double the exponent of another:</p>
          <div className="space-y-2 ml-4">
            <p>• 2²ˣ - 5(2ˣ) + 4 = 0 → Let u = 2ˣ, then 2²ˣ = (2ˣ)² = u²</p>
            <p>• 3²ˣ + 3ˣ - 6 = 0 → Let u = 3ˣ, then 3²ˣ = u²</p>
            <p>• eˣ - 4e⁻ˣ + 3 = 0 → Let u = eˣ, then e⁻ˣ = 1/u</p>
          </div>
        </div>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Step-by-Step Process:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Identify the substitution (usually u = base to the power x)</li>
            <li>Rewrite the equation in terms of u</li>
            <li>Solve the quadratic equation for u</li>
            <li>Back-substitute to get the exponential equation</li>
            <li>Take logarithms to solve for x</li>
            <li>Check for extraneous solutions (reject negative u values if needed)</li>
          </ol>
        </div>

        {/* Worked Example 1 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition"
          >
            {showExample1 ? '▼' : '▶'} Example 1: Solve 2²ˣ - 5(2ˣ) + 4 = 0
          </button>

          {showExample1 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-blue-500">
              <p className="mb-2"><strong>Given:</strong> 2²ˣ - 5(2ˣ) + 4 = 0</p>

              <p className="mb-2"><strong>Step 1:</strong> Make substitution</p>
              <div className="ml-4 mb-2">
                <p>Let u = 2ˣ</p>
                <p>Then 2²ˣ = (2ˣ)² = u²</p>
              </div>

              <p className="mb-2"><strong>Step 2:</strong> Rewrite in terms of u</p>
              <p className="ml-4 mb-2">u² - 5u + 4 = 0</p>

              <p className="mb-2"><strong>Step 3:</strong> Solve the quadratic</p>
              <div className="ml-4 mb-2">
                <p>Factor: (u - 1)(u - 4) = 0</p>
                <p>u = 1 or u = 4</p>
              </div>

              <p className="mb-2"><strong>Step 4:</strong> Back-substitute u = 2ˣ</p>
              <div className="ml-4 mb-2">
                <p>Case 1: 2ˣ = 1</p>
                <p>Case 2: 2ˣ = 4</p>
              </div>

              <p className="mb-2"><strong>Step 5:</strong> Solve for x</p>
              <div className="ml-4 mb-2 space-y-2">
                <div>
                  <p>Case 1: 2ˣ = 1 = 2⁰</p>
                  <p className="ml-4">x = 0</p>
                </div>
                <div>
                  <p>Case 2: 2ˣ = 4 = 2²</p>
                  <p className="ml-4">x = 2</p>
                </div>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Solutions: x = 0 or x = 2</p>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Check x = 2:</strong> 2⁴ - 5(2²) + 4 = 16 - 20 + 4 = 0 ✓
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Using Logarithms */}
      <section className="mb-8 p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">
          2. Using Logarithms for Back-Substitution
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">When Solutions Aren't Obvious:</h3>
          <p className="mb-2">
            If the back-substitution gives values that aren't obvious powers, use logarithms:
          </p>
          <div className="text-center text-lg my-3 p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
            If aˣ = b, then x = log_a(b) = ln(b) / ln(a)
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Using the change of base formula with natural logarithms (ln)
          </p>
        </div>

        {/* Worked Example 2 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample2(!showExample2)}
            className="w-full text-left p-4 bg-green-100 dark:bg-green-900 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-800 transition"
          >
            {showExample2 ? '▼' : '▶'} Example 2: Solve 3²ˣ - 10(3ˣ) + 9 = 0
          </button>

          {showExample2 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-green-500">
              <p className="mb-2"><strong>Given:</strong> 3²ˣ - 10(3ˣ) + 9 = 0</p>

              <p className="mb-2"><strong>Step 1:</strong> Make substitution</p>
              <p className="ml-4 mb-2">Let u = 3ˣ, then 3²ˣ = u²</p>

              <p className="mb-2"><strong>Step 2:</strong> Rewrite and solve</p>
              <div className="ml-4 mb-2">
                <p>u² - 10u + 9 = 0</p>
                <p>(u - 1)(u - 9) = 0</p>
                <p>u = 1 or u = 9</p>
              </div>

              <p className="mb-2"><strong>Step 3:</strong> Back-substitute</p>
              <div className="ml-4 mb-2">
                <p>3ˣ = 1 or 3ˣ = 9</p>
              </div>

              <p className="mb-2"><strong>Step 4:</strong> Solve for x</p>
              <div className="ml-4 mb-2 space-y-2">
                <div>
                  <p>Case 1: 3ˣ = 1 = 3⁰ → x = 0</p>
                </div>
                <div>
                  <p>Case 2: 3ˣ = 9 = 3² → x = 2</p>
                </div>
                <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                  <p className="text-sm font-semibold">Using logarithms (alternative):</p>
                  <p className="text-sm ml-4">For 3ˣ = 9: x = ln(9)/ln(3) = 2</p>
                </div>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Solutions: x = 0 or x = 2</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* More Complex Examples */}
      <section className="mb-8 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          3. More Complex Substitutions
        </h2>

        <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">Different Patterns:</h3>
          <div className="space-y-3 ml-4">
            <div>
              <p className="font-semibold text-blue-600 dark:text-blue-400">Negative Exponents:</p>
              <p className="text-sm">eˣ + e⁻ˣ = 5 → Multiply by eˣ to clear negative exponent</p>
            </div>
            <div>
              <p className="font-semibold text-green-600 dark:text-green-400">Different Bases:</p>
              <p className="text-sm">4ˣ - 6(2ˣ) + 8 = 0 → Note that 4ˣ = (2²)ˣ = (2ˣ)²</p>
            </div>
            <div>
              <p className="font-semibold text-purple-600 dark:text-purple-400">Fractional Exponents:</p>
              <p className="text-sm">x - 5√x + 6 = 0 → Let u = √x = x^(1/2), then x = u²</p>
            </div>
          </div>
        </div>

        {/* Worked Example 3 */}
        <div className="mt-6">
          <button
            onClick={() => setShowExample3(!showExample3)}
            className="w-full text-left p-4 bg-purple-100 dark:bg-purple-900 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-800 transition"
          >
            {showExample3 ? '▼' : '▶'} Example 3: Solve 4ˣ - 5(2ˣ) + 4 = 0
          </button>

          {showExample3 && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded border-l-4 border-purple-500">
              <p className="mb-2"><strong>Given:</strong> 4ˣ - 5(2ˣ) + 4 = 0</p>

              <p className="mb-2"><strong>Step 1:</strong> Rewrite 4ˣ in terms of base 2</p>
              <p className="ml-4 mb-2">4ˣ = (2²)ˣ = 2²ˣ = (2ˣ)²</p>

              <p className="mb-2"><strong>Step 2:</strong> Make substitution</p>
              <p className="ml-4 mb-2">Let u = 2ˣ, then 4ˣ = u²</p>

              <p className="mb-2"><strong>Step 3:</strong> Rewrite and solve</p>
              <div className="ml-4 mb-2">
                <p>u² - 5u + 4 = 0</p>
                <p>(u - 1)(u - 4) = 0</p>
                <p>u = 1 or u = 4</p>
              </div>

              <p className="mb-2"><strong>Step 4:</strong> Back-substitute</p>
              <div className="ml-4 mb-2">
                <p>2ˣ = 1 or 2ˣ = 4</p>
              </div>

              <p className="mb-2"><strong>Step 5:</strong> Solve for x</p>
              <div className="ml-4 mb-2 space-y-2">
                <div>
                  <p>Case 1: 2ˣ = 1 = 2⁰ → x = 0</p>
                </div>
                <div>
                  <p>Case 2: 2ˣ = 4 = 2² → x = 2</p>
                </div>
              </div>

              <div className="ml-4 p-3 bg-green-50 dark:bg-green-900/30 rounded mt-3">
                <p className="font-semibold">Solutions: x = 0 or x = 2</p>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Check x = 0:</strong> 4⁰ - 5(2⁰) + 4 = 1 - 5 + 4 = 0 ✓
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Special Cases */}
      <section className="mb-8 p-6 bg-orange-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700 dark:text-orange-300">
          4. Special Cases and Common Pitfalls
        </h2>

        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-red-600 dark:text-red-400">
              Pitfall 1: Negative Solutions for u
            </h3>
            <p className="mb-2">
              Since u = aˣ (where a &gt; 0), u must always be positive!
            </p>
            <p className="text-sm">
              <strong>Example:</strong> If solving gives u = -2, reject this solution because 2ˣ cannot equal -2.
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">
              Pitfall 2: Zero Solutions for u
            </h3>
            <p className="mb-2">
              u = aˣ can never equal zero (exponential functions are always positive).
            </p>
            <p className="text-sm">
              <strong>Example:</strong> If solving gives u = 0, reject this solution.
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2 text-green-600 dark:text-green-400">
              Special Case: Using Calculator for Logarithms
            </h3>
            <p className="mb-2">When the answer isn't a nice integer:</p>
            <div className="ml-4 text-sm space-y-1">
              <p>If 2ˣ = 7, then x = log₂(7) = ln(7)/ln(2) ≈ 2.807</p>
              <p>Leave in exact form unless asked for decimal approximation</p>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <h3 className="font-semibold mb-2">Detailed Example: Solve 5²ˣ - 6(5ˣ) + 5 = 0</h3>
            <div className="space-y-2 ml-4 text-sm">
              <p>Let u = 5ˣ: u² - 6u + 5 = 0</p>
              <p>Factor: (u - 1)(u - 5) = 0</p>
              <p>u = 1 or u = 5</p>
              <p>5ˣ = 1 → x = 0</p>
              <p>5ˣ = 5 → x = 1</p>
              <p className="font-semibold text-green-600 dark:text-green-400">Solutions: x = 0 or x = 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Problems */}
      <section className="mb-8 p-6 bg-indigo-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">
          Practice Problems
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">1. Solve 2²ˣ - 3(2ˣ) + 2 = 0</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Let u = 2ˣ: u² - 3u + 2 = 0</p>
                <p>(u - 1)(u - 2) = 0 → u = 1 or u = 2</p>
                <p>2ˣ = 1 → x = 0; 2ˣ = 2 → x = 1</p>
                <p className="font-semibold">Answer: x = 0 or x = 1</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">2. Solve 3²ˣ - 4(3ˣ) + 3 = 0</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Let u = 3ˣ: u² - 4u + 3 = 0</p>
                <p>(u - 1)(u - 3) = 0 → u = 1 or u = 3</p>
                <p>3ˣ = 1 → x = 0; 3ˣ = 3 → x = 1</p>
                <p className="font-semibold">Answer: x = 0 or x = 1</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">3. Solve 4ˣ - 3(2ˣ) + 2 = 0</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Rewrite: (2ˣ)² - 3(2ˣ) + 2 = 0</p>
                <p>Let u = 2ˣ: u² - 3u + 2 = 0</p>
                <p>(u - 1)(u - 2) = 0 → u = 1 or u = 2</p>
                <p className="font-semibold">Answer: x = 0 or x = 1</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">4. Solve 9ˣ - 10(3ˣ) + 9 = 0</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Rewrite 9ˣ = (3²)ˣ = (3ˣ)²</p>
                <p>Let u = 3ˣ: u² - 10u + 9 = 0</p>
                <p>(u - 1)(u - 9) = 0 → u = 1 or u = 9</p>
                <p>3ˣ = 1 → x = 0; 3ˣ = 9 = 3² → x = 2</p>
                <p className="font-semibold">Answer: x = 0 or x = 2</p>
              </div>
            </details>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded">
            <p className="font-semibold mb-2">5. Solve 2²ˣ⁺¹ - 9(2ˣ) + 4 = 0</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Show Solution
              </summary>
              <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-600 rounded">
                <p>Rewrite: 2·2²ˣ - 9(2ˣ) + 4 = 0</p>
                <p>Let u = 2ˣ: 2u² - 9u + 4 = 0</p>
                <p>(2u - 1)(u - 4) = 0 → u = 1/2 or u = 4</p>
                <p>2ˣ = 1/2 = 2⁻¹ → x = -1; 2ˣ = 4 = 2² → x = 2</p>
                <p className="font-semibold">Answer: x = -1 or x = 2</p>
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
          <li>Use substitution when exponents follow a pattern (like 2x and x)</li>
          <li>Common substitution: Let u = aˣ, then a²ˣ = u²</li>
          <li>Rewrite different bases using the same base (4ˣ = (2²)ˣ = (2ˣ)²)</li>
          <li>After solving for u, back-substitute to get exponential equations</li>
          <li>Use logarithms when solutions aren't obvious: x = ln(b)/ln(a) for aˣ = b</li>
          <li><strong>Important:</strong> u = aˣ must always be positive (reject u ≤ 0)</li>
          <li>Check your final answers in the original equation</li>
          <li>Leave answers in exact form using logarithms unless asked for decimals</li>
        </ul>
      </section>
    </div>
  );
};

export default SolvingExponential;
