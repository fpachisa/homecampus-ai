import React, { useState } from 'react';

const IntegrationRules = () => {
  const [showEx1, setShowEx1] = useState(false);
  const [showEx2, setShowEx2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Rules for Integration</h1>
        <p className="text-lg">Master the techniques for finding antiderivatives</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Power Rule */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">1. The Power Rule</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100 mb-2">
                ∫ x<sup>n</sup> dx = (x<sup>n+1</sup>)/(n+1) + C
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">where n ≠ -1</p>
            </div>
            <p className="mt-3 text-gray-800 dark:text-gray-200">
              <strong>Steps:</strong> 1) Add 1 to the exponent, 2) Divide by the new exponent, 3) Add + C
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-300 dark:border-gray-600">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">Examples:</h4>
              <div className="space-y-2 text-sm font-mono text-gray-800 dark:text-gray-200">
                <p>∫ x² dx = x³/3 + C</p>
                <p>∫ x⁵ dx = x⁶/6 + C</p>
                <p>∫ x dx = x²/2 + C</p>
                <p>∫ 1 dx = x + C</p>
                <p>∫ x⁻² dx = -x⁻¹ + C = -1/x + C</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-300 dark:border-gray-600">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">With Fractional/Negative Exponents:</h4>
              <div className="space-y-2 text-sm font-mono text-gray-800 dark:text-gray-200">
                <p>∫ √x dx = ∫ x<sup>1/2</sup> dx = (2/3)x<sup>3/2</sup> + C</p>
                <p>∫ 1/x² dx = ∫ x⁻² dx = -x⁻¹ + C</p>
                <p>∫ 1/√x dx = ∫ x⁻<sup>1/2</sup> dx = 2x<sup>1/2</sup> + C</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Constant Multiple Rule */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">2. Constant Multiple Rule</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100 mb-2">
                ∫ k·f(x) dx = k·∫ f(x) dx
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">Constants can be pulled out of the integral</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 1: Using Constant Multiple Rule</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">Find ∫ 5x³ dx</p>

            <button onClick={() => setShowEx1(!showEx1)} className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors mb-3">
              {showEx1 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showEx1 && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-2">
                <p className="text-sm font-mono text-gray-800 dark:text-gray-200">∫ 5x³ dx = 5·∫ x³ dx</p>
                <p className="text-sm font-mono text-gray-800 dark:text-gray-200">= 5·(x⁴/4) + C</p>
                <p className="text-sm font-mono font-bold text-blue-700 dark:text-blue-300">= (5x⁴)/4 + C</p>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Sum/Difference Rule */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">3. Sum and Difference Rule</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100 mb-2">
                ∫ [f(x) ± g(x)] dx = ∫ f(x) dx ± ∫ g(x) dx
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">Integrate each term separately</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 2: Polynomial Integration</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">Find ∫ (3x⁴ - 8x² + 5x - 2) dx</p>

            <button onClick={() => setShowEx2(!showEx2)} className="px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors mb-3">
              {showEx2 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showEx2 && (
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border border-purple-200 dark:border-purple-700 space-y-3">
                <p className="text-sm text-gray-800 dark:text-gray-200">Integrate term by term:</p>
                <div className="text-sm font-mono text-gray-800 dark:text-gray-200 space-y-1">
                  <p>∫ 3x⁴ dx = 3·(x⁵/5) = (3x⁵)/5</p>
                  <p>∫ -8x² dx = -8·(x³/3) = -(8x³)/3</p>
                  <p>∫ 5x dx = 5·(x²/2) = (5x²)/2</p>
                  <p>∫ -2 dx = -2x</p>
                </div>
                <p className="text-sm font-bold text-purple-700 dark:text-purple-300 mt-3">
                  Answer: (3x⁵)/5 - (8x³)/3 + (5x²)/2 - 2x + C
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Section 4: Special Functions */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">4. Special Functions</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-gray-300 dark:border-gray-600">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-3">Exponential:</h4>
              <div className="space-y-2 text-sm font-mono text-gray-800 dark:text-gray-200">
                <p>∫ e<sup>x</sup> dx = e<sup>x</sup> + C</p>
                <p>∫ a<sup>x</sup> dx = a<sup>x</sup>/ln(a) + C</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-gray-300 dark:border-gray-600">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">Trigonometric:</h4>
              <div className="space-y-2 text-sm font-mono text-gray-800 dark:text-gray-200">
                <p>∫ sin(x) dx = -cos(x) + C</p>
                <p>∫ cos(x) dx = sin(x) + C</p>
                <p>∫ sec²(x) dx = tan(x) + C</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 p-6 rounded-lg border-2 border-green-300 dark:border-green-600">
          <h2 className="text-2xl font-bold mb-4 text-green-900 dark:text-green-200">Key Takeaways</h2>
          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Power Rule: Increase exponent by 1, divide by new exponent</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Constants multiply integrals: ∫ k·f(x) dx = k·∫ f(x) dx</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Sum/Difference: Integrate each term separately</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Always add + C to indefinite integrals</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntegrationRules;
