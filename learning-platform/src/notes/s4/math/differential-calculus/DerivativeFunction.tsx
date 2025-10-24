import React, { useState } from 'react';

const DerivativeFunction = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showPractice1, setShowPractice1] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">The Derivative Function</h1>
        <p className="text-xl opacity-90">From Gradients to Derivatives</p>
      </div>

      <div className="max-w-4xl mx-auto p-8 space-y-12">

        {/* Section 1: Definition */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            1. Definition of the Derivative
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              The <strong>derivative</strong> is a function that gives the gradient of the tangent
              line at any point on the original function.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-mono text-lg mb-2">
                f'(x) = lim<sub>h→0</sub> [f(x + h) - f(x)] / h
              </p>
              <p className="text-sm">This is the <strong>derivative function</strong></p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 1.1
            </h3>
            <p className="mb-3">Find f'(x) for f(x) = x²</p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <div className="font-mono text-sm ml-4 space-y-1">
                <p>f'(x) = lim<sub>h→0</sub> [(x+h)² - x²] / h</p>
                <p className="ml-4">= lim<sub>h→0</sub> [x² + 2xh + h² - x²] / h</p>
                <p className="ml-4">= lim<sub>h→0</sub> [2xh + h²] / h</p>
                <p className="ml-4">= lim<sub>h→0</sub> (2x + h)</p>
                <p className="ml-4">= 2x</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded mt-3">
                <p className="font-semibold">∴ If f(x) = x², then f'(x) = 2x</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Notation */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            2. Derivative Notation
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              There are several equivalent ways to write derivatives. All mean the same thing!
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg space-y-3">
              <div>
                <p className="font-semibold">Prime Notation:</p>
                <p className="font-mono ml-4">f'(x), y', g'(x)</p>
              </div>
              <div>
                <p className="font-semibold">Leibniz Notation:</p>
                <p className="font-mono ml-4">dy/dx, df/dx</p>
              </div>
              <div>
                <p className="font-semibold">Operator Notation:</p>
                <p className="font-mono ml-4">d/dx[f(x)]</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 className="font-bold mb-2">All Equivalent:</h3>
            <p className="font-mono">f'(x) = dy/dx = d/dx[f(x)]</p>
            <p className="text-sm mt-2">Use whichever notation is most convenient for your problem!</p>
          </div>
        </section>

        {/* Section 3: Differentiability */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            3. Differentiability and Continuity
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              Not all functions are differentiable everywhere. A function must be continuous to be
              differentiable, but continuity alone doesn't guarantee differentiability.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
            <h3 className="font-bold mb-3">Where Derivatives Don't Exist:</h3>
            <ul className="space-y-2 ml-4">
              <li>• <strong>Corners or cusps:</strong> Sharp points (like in |x| at x = 0)</li>
              <li>• <strong>Vertical tangents:</strong> Infinite gradient</li>
              <li>• <strong>Discontinuities:</strong> Jumps or breaks in the function</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 className="font-bold mb-2">Key Relationship:</h3>
            <p className="mb-2">Differentiable → Continuous ✓</p>
            <p>Continuous → Differentiable ✗ (not always!)</p>
            <p className="text-sm mt-3">Example: f(x) = |x| is continuous at x = 0 but not differentiable there.</p>
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
              <span>Derivative is a function, not just a number</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>f'(x), dy/dx, and d/dx[f(x)] all mean the same thing</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Differentiable functions must be continuous</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Derivatives don't exist at corners, cusps, or discontinuities</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default DerivativeFunction;
