const FirstPrinciples = () => {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">Differentiation from First Principles</h1>
        <p className="text-xl opacity-90">Deriving Derivatives the Original Way</p>
      </div>

      <div className="max-w-4xl mx-auto p-8 space-y-12">

        {/* Section 1: First Principles Formula */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            1. First Principles Formula
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              <strong>First principles</strong> means finding the derivative using the original limit definition.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-mono text-lg mb-2">
                f'(x) = lim<sub>h→0</sub> [f(x + h) - f(x)] / h
              </p>
              <div className="text-sm mt-3 space-y-1">
                <p><strong>Steps:</strong></p>
                <p>1. Calculate f(x + h)</p>
                <p>2. Subtract f(x)</p>
                <p>3. Divide by h</p>
                <p>4. Simplify</p>
                <p>5. Take limit as h → 0</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 1.1
            </h3>
            <p className="mb-3">Find the derivative of f(x) = x³ from first principles</p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <div className="font-mono text-sm ml-4 space-y-1">
                <p>f'(x) = lim<sub>h→0</sub> [(x+h)³ - x³] / h</p>
                <p className="ml-4">= lim<sub>h→0</sub> [x³ + 3x²h + 3xh² + h³ - x³] / h</p>
                <p className="ml-4">= lim<sub>h→0</sub> [3x²h + 3xh² + h³] / h</p>
                <p className="ml-4">= lim<sub>h→0</sub> (3x² + 3xh + h²)</p>
                <p className="ml-4">= 3x²</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded mt-3">
                <p className="font-semibold">∴ d/dx[x³] = 3x²</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Polynomials */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            2. Applying to Polynomials
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              By applying first principles to powers of x, we discover the <strong>power rule</strong>.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
            <h3 className="font-bold mb-3">Pattern Discovery:</h3>
            <div className="space-y-1 font-mono">
              <p>d/dx[x] = 1 = 1·x⁰</p>
              <p>d/dx[x²] = 2x = 2·x¹</p>
              <p>d/dx[x³] = 3x² = 3·x²</p>
              <p>d/dx[x⁴] = 4x³ = 4·x³</p>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded mt-3">
              <p className="font-semibold">Power Rule: d/dx[xⁿ] = n·xⁿ⁻¹</p>
            </div>
          </div>
        </section>

        {/* Section 3: Common Derivatives */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            3. Deriving Common Derivatives
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 3.1: Square Root
            </h3>
            <p className="mb-3">Find d/dx[√x] from first principles</p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <div className="font-mono text-sm ml-4 space-y-1">
                <p>d/dx[√x] = lim<sub>h→0</sub> [√(x+h) - √x] / h</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">(Rationalize)</p>
                <p className="ml-4">= lim<sub>h→0</sub> [(x+h) - x] / [h(√(x+h) + √x)]</p>
                <p className="ml-4">= lim<sub>h→0</sub> 1 / (√(x+h) + √x)</p>
                <p className="ml-4">= 1/(2√x)</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded mt-3">
                <p className="font-semibold">∴ d/dx[√x] = 1/(2√x)</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h3 className="font-bold mb-3">Common Derivatives:</h3>
            <div className="space-y-2 font-mono">
              <p>d/dx[x^n] = n·x^(n-1)</p>
              <p>d/dx[√x] = 1/(2√x)</p>
              <p>d/dx[1/x] = -1/x²</p>
              <p>d/dx[c] = 0  <span className="text-sm text-gray-600">(constant)</span></p>
            </div>
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
              <span>First principles: f'(x) = lim<sub>h→0</sub> [f(x+h) - f(x)] / h</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Simplify before taking the limit</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Power rule emerges from first principles</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Rationalization helps with square roots</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default FirstPrinciples;
