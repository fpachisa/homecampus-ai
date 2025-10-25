import { useState } from 'react';

const Antiderivatives = () => {
  const [showEx1, setShowEx1] = useState(false);
  const [showEx2, setShowEx2] = useState(false);
  const [showEx3, setShowEx3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Introduction to Integration</h1>
        <p className="text-lg">Antiderivatives and the Indefinite Integral</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Concept of Antiderivatives */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">
            1. What is an Antiderivative?
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Fundamental Question:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              If differentiation tells us the rate of change, can we work <strong>backwards</strong>? Given a
              function f(x), can we find a function F(x) whose derivative is f(x)?
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-center text-gray-900 dark:text-gray-100 mb-2">
                If <span className="font-mono">F'(x) = f(x)</span>, then <span className="font-mono font-bold text-blue-700 dark:text-blue-300">F(x)</span> is an <strong>antiderivative</strong> of f(x)
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 1: Finding an Antiderivative</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Find an antiderivative of f(x) = 2x.
            </p>

            <button
              onClick={() => setShowEx1(!showEx1)}
              className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors mb-3"
            >
              {showEx1 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showEx1 && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-3">
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  We need F(x) such that F'(x) = 2x.
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Think: "What function, when differentiated, gives 2x?"
                </p>
                <p className="text-sm font-mono text-gray-800 dark:text-gray-200 mt-2">
                  Try F(x) = x²
                </p>
                <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                  Check: F'(x) = 2x ✓
                </p>
                <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mt-3">
                  Therefore, F(x) = x² is an antiderivative of f(x) = 2x
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Section 2: The Constant of Integration */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">
            2. The Constant of Integration
          </h2>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Important Insight:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Antiderivatives are <strong>not unique</strong>! If F(x) is an antiderivative of f(x), then so is
              F(x) + C for any constant C, because the derivative of a constant is zero.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-sm font-mono text-gray-900 dark:text-gray-100">
                d/dx[F(x) + C] = F'(x) + 0 = f(x)
              </p>
              <p className="text-center text-lg font-bold text-yellow-700 dark:text-yellow-300 mt-3">
                Always add "+ C" to antiderivatives!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-300 dark:border-gray-600">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Example:</h4>
              <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">If f(x) = 2x, then:</p>
              <ul className="text-sm font-mono text-gray-800 dark:text-gray-200 space-y-1">
                <li>• F(x) = x² + 5 ✓</li>
                <li>• F(x) = x² - 3 ✓</li>
                <li>• F(x) = x² + 0 ✓</li>
                <li>• F(x) = x² + C ✓ (general form)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-300 dark:border-gray-600">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Why "+ C" Matters:</h4>
              <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-2">
                <li>✓ Represents infinitely many antiderivatives</li>
                <li>✓ All differ by a constant</li>
                <li>✓ C can be determined with initial conditions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Indefinite Integral Notation */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">
            3. The Indefinite Integral
          </h2>

          <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border-l-4 border-cyan-500 dark:border-cyan-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Notation:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              The <strong>indefinite integral</strong> of f(x) is denoted by the integral symbol:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100 mb-3">
                ∫ f(x) dx = F(x) + C
              </p>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p>• ∫ is the <strong>integral sign</strong></p>
                <p>• f(x) is the <strong>integrand</strong> (function being integrated)</p>
                <p>• dx indicates integration with respect to x</p>
                <p>• F(x) + C is the <strong>general antiderivative</strong></p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Basic Integration Formulas */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">
            4. Basic Integration Formulas
          </h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Essential Formulas to Memorize:</h3>

            <div className="grid gap-3">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-200 dark:border-blue-700">
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100">
                  ∫ k dx = kx + C <span className="text-xs text-gray-600 dark:text-gray-400">(constant)</span>
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-200 dark:border-blue-700">
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100">
                  ∫ x<sup>n</sup> dx = (x<sup>n+1</sup>)/(n+1) + C <span className="text-xs text-gray-600 dark:text-gray-400">(n ≠ -1)</span>
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-200 dark:border-blue-700">
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100">
                  ∫ e<sup>x</sup> dx = e<sup>x</sup> + C
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-200 dark:border-blue-700">
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100">
                  ∫ sin(x) dx = -cos(x) + C
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-200 dark:border-blue-700">
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100">
                  ∫ cos(x) dx = sin(x) + C
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 2: Using the Power Rule</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Find ∫ x³ dx
            </p>

            <button
              onClick={() => setShowEx2(!showEx2)}
              className="px-4 py-2 bg-cyan-600 dark:bg-cyan-500 text-white rounded hover:bg-cyan-700 dark:hover:bg-cyan-600 transition-colors mb-3"
            >
              {showEx2 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showEx2 && (
              <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded border border-cyan-200 dark:border-cyan-700 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Apply the power rule:</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    ∫ x<sup>n</sup> dx = (x<sup>n+1</sup>)/(n+1) + C
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Here, n = 3:</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    ∫ x³ dx = (x<sup>3+1</sup>)/(3+1) + C
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    = x⁴/4 + C
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Check by differentiating:</p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    d/dx[x⁴/4 + C] = (4x³)/4 = x³ ✓
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 3: Multiple Terms</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Find ∫ (4x² - 6x + 3) dx
            </p>

            <button
              onClick={() => setShowEx3(!showEx3)}
              className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors mb-3"
            >
              {showEx3 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showEx3 && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-3">
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Integrate term by term:
                </p>
                <div className="text-sm font-mono text-gray-800 dark:text-gray-200 space-y-2">
                  <p>∫ 4x² dx = 4 · (x³/3) = (4x³)/3</p>
                  <p>∫ -6x dx = -6 · (x²/2) = -3x²</p>
                  <p>∫ 3 dx = 3x</p>
                </div>
                <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mt-3">
                  Answer: (4x³)/3 - 3x² + 3x + C
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Section 5: Differentiation vs Integration */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">
            5. The Relationship: Differentiation ↔ Integration
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-2 border-red-300 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-3">Differentiation</h3>
              <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">Forward process:</p>
              <p className="font-mono text-sm text-gray-900 dark:text-gray-100">F(x) → F'(x)</p>
              <ul className="text-xs text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                <li>• Finds rate of change</li>
                <li>• Slope of tangent</li>
                <li>• Unique answer</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Integration</h3>
              <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">Reverse process:</p>
              <p className="font-mono text-sm text-gray-900 dark:text-gray-100">f(x) → F(x) + C</p>
              <ul className="text-xs text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                <li>• Finds accumulated quantity</li>
                <li>• Area under curve</li>
                <li>• Family of answers (+C)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-100 to-green-100 dark:from-red-900/20 dark:to-green-900/20 p-4 rounded-lg border border-gray-300 dark:border-gray-600">
            <p className="text-center font-bold text-gray-900 dark:text-gray-100">
              Integration "undoes" differentiation and vice versa
            </p>
            <p className="text-center text-sm text-gray-700 dark:text-gray-300 mt-2">
              They are <strong>inverse operations</strong>, like addition and subtraction!
            </p>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-600">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-200">Key Takeaways</h2>
          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>An antiderivative F(x) of f(x) satisfies F'(x) = f(x)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Antiderivatives always include "+ C" because derivatives of constants are zero</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>The indefinite integral ∫ f(x) dx represents the general antiderivative F(x) + C</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Power rule for integration: ∫ x<sup>n</sup> dx = x<sup>n+1</sup>/(n+1) + C (n ≠ -1)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Integration and differentiation are inverse operations</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Antiderivatives;
