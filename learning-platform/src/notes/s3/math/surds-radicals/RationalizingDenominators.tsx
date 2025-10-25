import { useState } from 'react';

const RationalizingDenominators = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Rationalizing Denominators</h1>
        <p className="text-lg">Eliminate surds from denominators using conjugates</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Why Rationalize? */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">1. Why Rationalize Denominators?</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Rational vs Irrational Denominators:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              It's considered standard form to have a <strong>rational number</strong> (not a surd) in the denominator.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Rationalizing</strong> is the process of eliminating surds from the denominator.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-2 border-red-300 dark:border-red-600">
              <h3 className="font-bold mb-3 text-red-700 dark:text-red-300">Not Rationalized:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li className="font-mono">1/√2 <span className="text-gray-600 dark:text-gray-400">(surd in denominator)</span></li>
                <li className="font-mono">5/√3 <span className="text-gray-600 dark:text-gray-400">(surd in denominator)</span></li>
                <li className="font-mono">2/(3 + √5) <span className="text-gray-600 dark:text-gray-400">(surd in denominator)</span></li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h3 className="font-bold mb-3 text-green-700 dark:text-green-300">Rationalized:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li className="font-mono">√2/2 <span className="text-gray-600 dark:text-gray-400">(rational denominator)</span></li>
                <li className="font-mono">5√3/3 <span className="text-gray-600 dark:text-gray-400">(rational denominator)</span></li>
                <li className="font-mono">(6 - 2√5)/4 <span className="text-gray-600 dark:text-gray-400">(rational denominator)</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Monomial Denominators */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">2. Rationalizing Monomial Denominators</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Method:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Multiply both numerator and denominator by the <strong>surd in the denominator</strong>.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-center text-xl font-mono mb-2 text-gray-900 dark:text-gray-100">
                a/√b = (a/√b) × (√b/√b) = (a√b)/b
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Multiply by √b/√b (which equals 1)
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Step-by-Step Example: 1/√3</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p className="font-mono">1/√3</p>
              <p className="text-gray-600 dark:text-gray-400">↓ Multiply top and bottom by √3</p>
              <p className="font-mono">= (1 × √3)/(√3 × √3)</p>
              <p className="text-gray-600 dark:text-gray-400">↓ Simplify (√3 × √3 = 3)</p>
              <p className="font-mono font-bold">= √3/3</p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">More Examples:</h3>
            <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
              <li>
                <p className="font-mono mb-1">5/√2 = (5√2)/(√2 × √2) = 5√2/2</p>
              </li>
              <li>
                <p className="font-mono mb-1">3/√7 = (3√7)/(√7 × √7) = 3√7/7</p>
              </li>
              <li>
                <p className="font-mono mb-1">2/√5 = (2√5)/5</p>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">With Larger Surds:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              If the denominator is not in simplest form, <strong>simplify it first</strong>!
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Example: 6/√8</p>
              <div className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p className="font-mono">= 6/(2√2) <span className="text-gray-600 dark:text-gray-400">(simplify √8 first)</span></p>
                <p className="font-mono">= 3/√2</p>
                <p className="font-mono">= 3√2/2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Binomial Denominators (Conjugates) */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">3. Rationalizing Binomial Denominators</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Conjugate Method:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              When the denominator is a binomial containing a surd (like a + √b), multiply by its <strong>conjugate</strong>.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-center mb-2 text-gray-900 dark:text-gray-100">
                The conjugate of <span className="font-mono">(a + √b)</span> is <span className="font-mono">(a - √b)</span>
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Change the sign between the terms
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Why Conjugates Work:</h3>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded mb-3">
              <p className="font-mono text-center mb-2 text-gray-900 dark:text-gray-100">
                (a + √b)(a - √b) = a² - b
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Difference of two squares - the surds cancel!
              </p>
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              This gives us a rational denominator because the surd terms eliminate each other.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Step-by-Step Example: 1/(2 + √3)</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p className="font-mono">1/(2 + √3)</p>
              <p className="text-gray-600 dark:text-gray-400">↓ Multiply by conjugate (2 - √3)/(2 - √3)</p>
              <p className="font-mono">= (1 × (2 - √3))/((2 + √3)(2 - √3))</p>
              <p className="text-gray-600 dark:text-gray-400">↓ Expand denominator using difference of squares</p>
              <p className="font-mono">= (2 - √3)/(4 - 3)</p>
              <p className="text-gray-600 dark:text-gray-400">↓ Simplify</p>
              <p className="font-mono font-bold">= 2 - √3</p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Conjugate Pairs:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-800 dark:text-gray-200">
              <div>
                <p className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Expression:</p>
                <ul className="space-y-1">
                  <li className="font-mono">1 + √2</li>
                  <li className="font-mono">3 - √5</li>
                  <li className="font-mono">√7 + 2</li>
                  <li className="font-mono">√3 - √2</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Conjugate:</p>
                <ul className="space-y-1">
                  <li className="font-mono">1 - √2</li>
                  <li className="font-mono">3 + √5</li>
                  <li className="font-mono">√7 - 2</li>
                  <li className="font-mono">√3 + √2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Complex Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">4. Complex Rationalization</h2>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Key Steps for Complex Fractions:</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li>Simplify all surds first</li>
              <li>Identify the conjugate of the denominator</li>
              <li>Multiply numerator and denominator by the conjugate</li>
              <li>Expand the numerator (FOIL if needed)</li>
              <li>Simplify the denominator using difference of squares</li>
              <li>Simplify the final answer (combine like terms, reduce if possible)</li>
            </ol>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg font-semibold hover:bg-indigo-200 dark:hover:bg-indigo-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Rationalize 4/√5
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-indigo-500 dark:border-indigo-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Rationalize: 4/√5</p>

                <div className="ml-4 space-y-2 bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-gray-800 dark:text-gray-200">
                  <p className="font-mono">4/√5</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Multiply by √5/√5</p>
                  <p className="font-mono">= (4 × √5)/(√5 × √5)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Simplify</p>
                  <p className="font-mono font-bold">= 4√5/5</p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg font-semibold hover:bg-indigo-200 dark:hover:bg-indigo-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Rationalize 6/(3 + √2)
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-indigo-500 dark:border-indigo-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Rationalize: 6/(3 + √2)</p>

                <div className="ml-4 space-y-2 bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-gray-800 dark:text-gray-200">
                  <p className="font-mono">6/(3 + √2)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Multiply by conjugate (3 - √2)/(3 - √2)</p>
                  <p className="font-mono">= (6(3 - √2))/((3 + √2)(3 - √2))</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Expand numerator, use difference of squares for denominator</p>
                  <p className="font-mono">= (18 - 6√2)/(9 - 2)</p>
                  <p className="font-mono">= (18 - 6√2)/7</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Can also write as two fractions</p>
                  <p className="font-mono font-bold">= 18/7 - 6√2/7</p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left p-4 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg font-semibold hover:bg-indigo-200 dark:hover:bg-indigo-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample3 ? '▼' : '▶'} Example 3: Rationalize (√5 + 1)/(√5 - 1)
            </button>

            {showExample3 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-indigo-500 dark:border-indigo-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Rationalize: (√5 + 1)/(√5 - 1)</p>

                <div className="ml-4 space-y-2 bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-gray-800 dark:text-gray-200">
                  <p className="font-mono">(√5 + 1)/(√5 - 1)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Multiply by conjugate (√5 + 1)/(√5 + 1)</p>
                  <p className="font-mono">= ((√5 + 1)(√5 + 1))/((√5 - 1)(√5 + 1))</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Expand numerator (FOIL), denominator is difference of squares</p>
                  <p className="font-mono">= (5 + √5 + √5 + 1)/(5 - 1)</p>
                  <p className="font-mono">= (6 + 2√5)/4</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Simplify by dividing by 2</p>
                  <p className="font-mono font-bold">= (3 + √5)/2</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. Rationalize monomial denominators:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) 1/√7</p>
                <p>b) 3/√2</p>
                <p>c) 8/√6</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-indigo-600 dark:text-indigo-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> 1/√7 = √7/7</p>
                  <p><strong>b)</strong> 3/√2 = 3√2/2</p>
                  <p><strong>c)</strong> 8/√6 = 8√6/6 = 4√6/3</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Rationalize binomial denominators:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) 1/(1 + √3)</p>
                <p>b) 2/(5 - √2)</p>
                <p>c) 4/(√7 + 2)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-indigo-600 dark:text-indigo-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> 1/(1 + √3) = (1 - √3)/(1 - 3) = (1 - √3)/(-2) = (√3 - 1)/2</p>
                  <p><strong>b)</strong> 2/(5 - √2) = 2(5 + √2)/(25 - 2) = (10 + 2√2)/23</p>
                  <p><strong>c)</strong> 4/(√7 + 2) = 4(√7 - 2)/(7 - 4) = (4√7 - 8)/3</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                3. Complex rationalization:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) (2 + √3)/(2 - √3)</p>
                <p>b) (√6 + √2)/(√6 - √2)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-indigo-600 dark:text-indigo-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> (2 + √3)/(2 - √3) = (4 + 4√3 + 3)/(4 - 3) = 7 + 4√3</p>
                  <p><strong>b)</strong> (√6 + √2)/(√6 - √2) = (6 + 2√12 + 2)/(6 - 2) = (8 + 4√3)/4 = 2 + √3</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>Rationalizing</strong> means eliminating surds from the denominator</li>
            <li><strong>Monomial denominator:</strong> Multiply by √b/√b</li>
            <li><strong>Binomial denominator:</strong> Multiply by the conjugate</li>
            <li>The <strong>conjugate</strong> of (a + √b) is (a - √b)</li>
            <li><strong>Difference of squares:</strong> (a + √b)(a - √b) = a² - b</li>
            <li>Always <strong>simplify surds first</strong> before rationalizing</li>
            <li>Remember to <strong>simplify the final answer</strong> (combine like terms, reduce fractions)</li>
            <li>Multiplying by conjugate eliminates surd from denominator because surds cancel</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RationalizingDenominators;
