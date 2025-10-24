import React, { useState } from 'react';

const DifferentiationRules = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">Rules for Differentiation</h1>
        <p className="text-xl opacity-90">Power, Product, Quotient, and Chain Rules</p>
      </div>

      <div className="max-w-4xl mx-auto p-8 space-y-12">

        {/* Section 1: Power Rule */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            1. Power Rule
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-mono text-2xl mb-2">
                d/dx[xⁿ] = n·xⁿ⁻¹
              </p>
              <p className="text-sm">Multiply by the power, then subtract 1 from the power</p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Examples
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded space-y-2">
              <div>
                <p>d/dx[x⁵] = 5x⁴</p>
                <p>d/dx[x⁻²] = -2x⁻³ = -2/x³</p>
                <p>d/dx[x^(1/2)] = (1/2)x^(-1/2) = 1/(2√x)</p>
                <p>d/dx[3x⁴] = 12x³</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Product Rule */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            2. Product Rule
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-mono text-xl mb-2">
                d/dx[u·v] = u'v + uv'
              </p>
              <p className="text-sm">Derivative of first × second + first × derivative of second</p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 2.1
            </h3>
            <p className="mb-3">Find d/dx[(x² + 1)(x³ - 2x)]</p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="mb-2">Let u = x² + 1, v = x³ - 2x</p>
              <p className="mb-2">Then u' = 2x, v' = 3x² - 2</p>
              <div className="font-mono text-sm ml-4 space-y-1 mt-2">
                <p>d/dx[uv] = u'v + uv'</p>
                <p>= (2x)(x³ - 2x) + (x² + 1)(3x² - 2)</p>
                <p>= 2x⁴ - 4x² + 3x⁴ - 2x² + 3x² - 2</p>
                <p>= 5x⁴ - 3x² - 2</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Quotient Rule */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            3. Quotient Rule
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-mono text-xl mb-2">
                d/dx[u/v] = (u'v - uv')/v²
              </p>
              <p className="text-sm">Low dee high minus high dee low, over low squared</p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 mb-6 border-l-4 border-yellow-500">
            <p className="font-bold mb-2">⚠️ Common Mistake:</p>
            <p>The order matters! It's u'v - uv', NOT uv' - u'v</p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 3.1
            </h3>
            <p className="mb-3">Find d/dx[(x² + 1)/(x - 1)]</p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="mb-2">Let u = x² + 1, v = x - 1</p>
              <p className="mb-2">Then u' = 2x, v' = 1</p>
              <div className="font-mono text-sm ml-4 space-y-1 mt-2">
                <p>d/dx[u/v] = (u'v - uv')/v²</p>
                <p>= [(2x)(x-1) - (x²+1)(1)] / (x-1)²</p>
                <p>= [2x² - 2x - x² - 1] / (x-1)²</p>
                <p>= (x² - 2x - 1) / (x-1)²</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Chain Rule */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            4. Chain Rule
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-mono text-xl mb-2">
                d/dx[f(g(x))] = f'(g(x)) · g'(x)
              </p>
              <p className="text-sm">Derivative of outside × derivative of inside</p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 4.1
            </h3>
            <p className="mb-3">Find d/dx[(x² + 1)⁵]</p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="mb-2">Let u = x² + 1 (inside)</p>
              <p className="mb-2">Then we have u⁵ (outside)</p>
              <div className="font-mono text-sm ml-4 space-y-1 mt-2">
                <p>d/dx[(x²+1)⁵] = 5(x²+1)⁴ · 2x</p>
                <p>= 10x(x²+1)⁴</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded mt-3 text-sm">
                <p><strong>Process:</strong></p>
                <p>1. Derivative of u⁵ is 5u⁴</p>
                <p>2. Derivative of u = x² + 1 is 2x</p>
                <p>3. Multiply them together</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Combining Rules */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            5. Combining Rules
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              Many problems require using multiple rules together. Work from the outside in!
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 5.1
            </h3>
            <p className="mb-3">Find d/dx[x²√(x + 1)]</p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="mb-2">This needs <strong>product rule</strong> and <strong>chain rule</strong>:</p>
              <p className="mb-2">Let u = x², v = √(x+1)</p>
              <div className="font-mono text-sm ml-4 space-y-1 mt-2">
                <p>u' = 2x</p>
                <p>v' = 1/(2√(x+1)) · 1  <span className="text-xs text-gray-600">(chain rule)</span></p>
                <p className="mt-2">d/dx[uv] = u'v + uv'</p>
                <p>= 2x·√(x+1) + x²·[1/(2√(x+1))]</p>
                <p>= 2x√(x+1) + x²/(2√(x+1))</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border-2 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
            🎓 Key Takeaways
          </h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold">Power: d/dx[xⁿ] = nxⁿ⁻¹</p>
            </div>
            <div>
              <p className="font-semibold">Product: d/dx[uv] = u'v + uv'</p>
            </div>
            <div>
              <p className="font-semibold">Quotient: d/dx[u/v] = (u'v - uv')/v²</p>
            </div>
            <div>
              <p className="font-semibold">Chain: d/dx[f(g(x))] = f'(g(x))·g'(x)</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DifferentiationRules;
