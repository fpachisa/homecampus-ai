import { useState } from 'react';

const SimplifyingSurds = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [testNumber, setTestNumber] = useState(12);

  // Find the largest perfect square factor
  const simplifySurd = (n: number) => {
    if (n <= 0) return { coefficient: 0, radicand: 0 };

    let coefficient = 1;
    let radicand = n;

    // Check for perfect square factors
    for (let i = Math.floor(Math.sqrt(n)); i > 1; i--) {
      if (radicand % (i * i) === 0) {
        coefficient *= i;
        radicand /= (i * i);
      }
    }

    return { coefficient, radicand };
  };

  const simplified = simplifySurd(testNumber);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Simplifying Surds</h1>
        <p className="text-lg">Extract perfect square factors to simplify surds</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Simplification Process */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800 dark:text-red-300">1. The Simplification Process</h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 dark:border-red-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Strategy:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              To simplify a surd, <strong>extract the largest perfect square factor</strong> from under the square root.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-center text-xl font-mono mb-2 text-gray-900 dark:text-gray-100">
                √a = √(perfect square × other) = √perfect square × √other
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Pull the perfect square out as its square root
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Step-by-Step Method:</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-800 dark:text-gray-200">
              <li><strong>Factor</strong> the number under the root into prime factors (or find perfect square factors)</li>
              <li><strong>Identify</strong> the largest perfect square factor</li>
              <li><strong>Split</strong> the square root using √(ab) = √a × √b</li>
              <li><strong>Evaluate</strong> the perfect square and write in simplified form</li>
            </ol>
          </div>
        </div>

        {/* Section 2: Examples of Simplification */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800 dark:text-red-300">2. Simplifying Common Surds</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Small Numbers:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li className="font-mono">√8 = √(4 × 2) = 2√2</li>
                <li className="font-mono">√12 = √(4 × 3) = 2√3</li>
                <li className="font-mono">√18 = √(9 × 2) = 3√2</li>
                <li className="font-mono">√20 = √(4 × 5) = 2√5</li>
                <li className="font-mono">√27 = √(9 × 3) = 3√3</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
              <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Larger Numbers:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li className="font-mono">√32 = √(16 × 2) = 4√2</li>
                <li className="font-mono">√45 = √(9 × 5) = 3√5</li>
                <li className="font-mono">√50 = √(25 × 2) = 5√2</li>
                <li className="font-mono">√72 = √(36 × 2) = 6√2</li>
                <li className="font-mono">√98 = √(49 × 2) = 7√2</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded mb-4 border border-purple-200 dark:border-purple-700">
            <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Interactive: Simplify any surd</p>
            <div className="flex gap-2 items-center mb-3 flex-wrap">
              <span className="text-gray-800 dark:text-gray-200">√</span>
              <input
                type="number"
                value={testNumber}
                onChange={(e) => setTestNumber(Number(e.target.value))}
                className="px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded w-24 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                placeholder="12"
                min="1"
              />
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="font-mono text-lg text-gray-900 dark:text-gray-100">
                {simplified.coefficient > 1 && `${simplified.coefficient}`}
                {simplified.radicand > 1 ? `√${simplified.radicand}` : simplified.coefficient === 1 ? Math.sqrt(testNumber) : ''}
              </span>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                {simplified.radicand === 1
                  ? `√${testNumber} = ${simplified.coefficient} (perfect square!)`
                  : `√${testNumber} simplifies to ${simplified.coefficient > 1 ? simplified.coefficient : ''}√${simplified.radicand}`
                }
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Prime Factorization Method */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800 dark:text-red-300">3. Prime Factorization Method</h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 dark:border-red-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Alternative Approach:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              For complex numbers, use <strong>prime factorization</strong> to identify pairs of identical prime factors. Each pair comes out as one factor.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: Simplify √72</h3>
            <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
              <div>
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Step 1: Prime factorization</p>
                <p className="font-mono ml-4">72 = 2 × 2 × 2 × 3 × 3</p>
              </div>

              <div>
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Step 2: Identify pairs</p>
                <p className="font-mono ml-4">72 = (2 × 2) × 2 × (3 × 3)</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 ml-4">Two pairs of 2's and one pair of 3's</p>
              </div>

              <div>
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Step 3: Extract pairs</p>
                <p className="font-mono ml-4">√72 = √(2² × 3² × 2)</p>
                <p className="font-mono ml-4">= 2 × 3 × √2</p>
                <p className="font-mono ml-4 font-bold">= 6√2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Simplifying with Variables */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800 dark:text-red-300">4. Simplifying Surds with Variables</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Rule:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-center text-xl font-mono mb-2 text-gray-900 dark:text-gray-100">
                √(x²) = x  (for x ≥ 0)
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Perfect square variables come out of the square root
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Examples:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li className="font-mono">√(4x²) = √4 × √(x²) = 2x</li>
              <li className="font-mono">√(9a²) = √9 × √(a²) = 3a</li>
              <li className="font-mono">√(25x²y²) = √25 × √(x²) × √(y²) = 5xy</li>
              <li className="font-mono">√(18a²) = √(9 × 2 × a²) = 3a√2</li>
            </ul>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800 dark:text-red-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-red-100 dark:bg-red-900/50 rounded-lg font-semibold hover:bg-red-200 dark:hover:bg-red-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Simplifying √50
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-red-500 dark:border-red-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Simplify √50</p>

                <div className="ml-4 space-y-2 bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-gray-800 dark:text-gray-200">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Method 1: Perfect Square Factors</p>
                  <p className="font-mono">√50</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Find perfect square factor: 50 = 25 × 2</p>
                  <p className="font-mono">= √(25 × 2)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Use √(ab) = √a × √b</p>
                  <p className="font-mono">= √25 × √2</p>
                  <p className="font-mono font-bold">= 5√2</p>

                  <div className="mt-4">
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Method 2: Prime Factorization</p>
                    <p className="font-mono">50 = 2 × 5 × 5</p>
                    <p className="font-mono">√50 = √(2 × 5²)</p>
                    <p className="font-mono">= 5√2</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-red-100 dark:bg-red-900/50 rounded-lg font-semibold hover:bg-red-200 dark:hover:bg-red-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Simplifying √98
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-red-500 dark:border-red-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Simplify √98</p>

                <div className="ml-4 space-y-2 bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-gray-800 dark:text-gray-200">
                  <p className="font-mono">√98</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Find perfect square factor: 98 = 49 × 2</p>
                  <p className="font-mono">= √(49 × 2)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Separate the roots</p>
                  <p className="font-mono">= √49 × √2</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Evaluate √49</p>
                  <p className="font-mono font-bold">= 7√2</p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left p-4 bg-red-100 dark:bg-red-900/50 rounded-lg font-semibold hover:bg-red-200 dark:hover:bg-red-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample3 ? '▼' : '▶'} Example 3: Simplifying √200
            </button>

            {showExample3 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-red-500 dark:border-red-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Simplify √200</p>

                <div className="ml-4 space-y-2 bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-gray-800 dark:text-gray-200">
                  <p className="font-mono">√200</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Prime factorization: 200 = 2³ × 5² = 8 × 25</p>
                  <p className="font-mono">= √(100 × 2)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Largest perfect square is 100</p>
                  <p className="font-mono">= √100 × √2</p>
                  <p className="font-mono font-bold">= 10√2</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800 dark:text-red-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. Simplify the following surds:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) √8</p>
                <p>b) √18</p>
                <p>c) √32</p>
                <p>d) √75</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-red-600 dark:text-red-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> √8 = √(4 × 2) = 2√2</p>
                  <p><strong>b)</strong> √18 = √(9 × 2) = 3√2</p>
                  <p><strong>c)</strong> √32 = √(16 × 2) = 4√2</p>
                  <p><strong>d)</strong> √75 = √(25 × 3) = 5√3</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Simplify using prime factorization:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) √128</p>
                <p>b) √180</p>
                <p>c) √300</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-red-600 dark:text-red-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> 128 = 2⁷ = 2⁶ × 2 → √128 = 8√2</p>
                  <p><strong>b)</strong> 180 = 2² × 3² × 5 → √180 = 6√5</p>
                  <p><strong>c)</strong> 300 = 2² × 3 × 5² → √300 = 10√3</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                3. Simplify surds with variables:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) √(16x²)</p>
                <p>b) √(49a²b²)</p>
                <p>c) √(12x²)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-red-600 dark:text-red-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> √(16x²) = 4x</p>
                  <p><strong>b)</strong> √(49a²b²) = 7ab</p>
                  <p><strong>c)</strong> √(12x²) = √(4 × 3 × x²) = 2x√3</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li>To simplify a surd, <strong>extract the largest perfect square factor</strong></li>
            <li>Use <strong>√(ab) = √a × √b</strong> to separate perfect squares from surds</li>
            <li><strong>Prime factorization</strong> helps identify pairs of factors</li>
            <li>Each <strong>pair of identical prime factors</strong> comes out as one factor</li>
            <li>A surd is fully simplified when the radicand has <strong>no perfect square factors</strong></li>
            <li>For variables: <strong>√(x²) = x</strong> (for x ≥ 0)</li>
            <li>Common simplifications to memorize: √8 = 2√2, √12 = 2√3, √18 = 3√2, √50 = 5√2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimplifyingSurds;
