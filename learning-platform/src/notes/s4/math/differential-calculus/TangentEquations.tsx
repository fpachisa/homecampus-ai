const TangentEquations = () => {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">Equations of Tangents and Normals</h1>
        <p className="text-xl opacity-90">Finding Lines Related to Curves</p>
      </div>

      <div className="max-w-4xl mx-auto p-8 space-y-12">

        {/* Section 1: Tangent Equations */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            1. Finding the Equation of a Tangent
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              To find the equation of a tangent line at a point, we need:
            </p>
            <ol className="space-y-2 ml-4">
              <li>1. The point (a, f(a))</li>
              <li>2. The gradient m = f'(a)</li>
            </ol>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
              <p className="font-semibold mb-2">Point-Slope Form:</p>
              <p className="font-mono text-lg">y - y₁ = m(x - x₁)</p>
              <p className="text-sm mt-2">or rearrange to: y = mx + c</p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 1.1
            </h3>
            <p className="mb-3">
              Find the equation of the tangent to f(x) = x² at x = 3
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2">Solution:</p>
              <div className="ml-4 space-y-2">
                <div>
                  <p className="font-semibold">Step 1: Find the point</p>
                  <p className="font-mono">f(3) = 3² = 9</p>
                  <p>Point: (3, 9)</p>
                </div>
                <div>
                  <p className="font-semibold">Step 2: Find the gradient</p>
                  <p className="font-mono">f'(x) = 2x</p>
                  <p className="font-mono">f'(3) = 2(3) = 6</p>
                  <p>Gradient: m = 6</p>
                </div>
                <div>
                  <p className="font-semibold">Step 3: Write equation</p>
                  <p className="font-mono">y - 9 = 6(x - 3)</p>
                  <p className="font-mono">y - 9 = 6x - 18</p>
                  <p className="font-mono">y = 6x - 9</p>
                </div>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded mt-3">
                <p className="font-semibold">Tangent equation: y = 6x - 9</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Normal Lines */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            2. Normal Lines
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              A <strong>normal line</strong> is perpendicular to the tangent at that point.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-semibold mb-2">Perpendicular Gradients:</p>
              <p className="font-mono">m₁ · m₂ = -1</p>
              <p className="mt-2">If tangent gradient is m, normal gradient is <strong>-1/m</strong></p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 2.1
            </h3>
            <p className="mb-3">
              Find the equation of the normal to f(x) = x² at x = 3
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2">Solution:</p>
              <div className="ml-4 space-y-2">
                <p>From before: point is (3, 9), tangent gradient is 6</p>
                <div>
                  <p className="font-semibold">Normal gradient:</p>
                  <p className="font-mono">m_normal = -1/6</p>
                </div>
                <div>
                  <p className="font-semibold">Normal equation:</p>
                  <p className="font-mono">y - 9 = (-1/6)(x - 3)</p>
                  <p className="font-mono">y - 9 = -x/6 + 1/2</p>
                  <p className="font-mono">y = -x/6 + 19/2</p>
                </div>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded mt-3">
                <p className="font-semibold">Normal equation: y = -x/6 + 19/2</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Applications */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            3. Applications to Curve Sketching
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              Tangent information helps us understand curve behavior:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• <strong>Horizontal tangent:</strong> f'(x) = 0 (turning point)</li>
              <li>• <strong>f'(x) &gt; 0:</strong> Curve increasing, tangent slopes up</li>
              <li>• <strong>f'(x) &lt; 0:</strong> Curve decreasing, tangent slopes down</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h3 className="font-bold mb-3">Finding Horizontal Tangents:</h3>
            <p className="mb-2">Set f'(x) = 0 and solve for x</p>
            <p className="text-sm">Example: For f(x) = x³ - 3x:</p>
            <div className="font-mono ml-4 mt-2 space-y-1">
              <p>f'(x) = 3x² - 3 = 0</p>
              <p>x² = 1</p>
              <p>x = ±1</p>
            </div>
            <p className="mt-2 text-sm">Horizontal tangents at x = -1 and x = 1</p>
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
              <span>Tangent: y - f(a) = f'(a)(x - a)</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Normal gradient = -1/(tangent gradient)</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Horizontal tangent when f'(x) = 0</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Perpendicular gradients multiply to -1</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default TangentEquations;
