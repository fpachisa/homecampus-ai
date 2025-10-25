import { useState } from 'react';

const GradientOfTangent = () => {
  const [showPractice1, setShowPractice1] = useState(false);
  const [showPractice2, setShowPractice2] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">Gradient of a Tangent</h1>
        <p className="text-xl opacity-90">Understanding Instantaneous Rate of Change</p>
      </div>

      <div className="max-w-4xl mx-auto p-8 space-y-12">

        {/* Section 1: Tangent vs Secant */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            1. Tangent vs Secant Lines
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              A <strong>secant line</strong> connects two points on a curve, while a
              <strong> tangent line</strong> touches the curve at exactly one point.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
              <p className="font-semibold mb-2">Key Difference:</p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>Secant:</strong> Average rate of change between two points</li>
                <li>• <strong>Tangent:</strong> Instantaneous rate of change at one point</li>
              </ul>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 1.1
            </h3>
            <p className="mb-3">
              For f(x) = x², find the gradient of the secant line from x = 2 to x = 4.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2">Solution:</p>
              <div className="font-mono ml-4 space-y-1">
                <p>Point 1: (2, 4)  since f(2) = 4</p>
                <p>Point 2: (4, 16) since f(4) = 16</p>
                <p className="mt-2">Gradient = (16 - 4)/(4 - 2) = 12/2 = 6</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded mt-3">
                <p className="font-semibold">∴ Secant gradient = 6</p>
              </div>
            </div>
          </div>

          {/* Practice */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold mb-3 text-yellow-700 dark:text-yellow-400">
              🎯 Practice Problem 1.1
            </h3>
            <p className="mb-3">
              For f(x) = x² + 3x, find the secant gradient from x = 1 to x = 3.
            </p>
            <button
              onClick={() => setShowPractice1(!showPractice1)}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded transition"
            >
              {showPractice1 ? 'Hide' : 'Show'} Solution
            </button>
            {showPractice1 && (
              <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded">
                <div className="font-mono ml-4 space-y-1">
                  <p>f(1) = 1 + 3 = 4</p>
                  <p>f(3) = 9 + 9 = 18</p>
                  <p>Gradient = (18 - 4)/(3 - 1) = 14/2 = 7</p>
                </div>
                <p className="font-semibold mt-2">Answer: 7</p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Gradient as Limit Process */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            2. Gradient as a Limit Process
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              The gradient of a tangent is found by taking the limit of secant gradients as the
              two points get closer together.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-mono text-lg mb-2">
                m = lim<sub>h→0</sub> [f(x + h) - f(x)] / h
              </p>
              <p className="text-sm">This is the <strong>difference quotient</strong></p>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              📝 Worked Example 2.1
            </h3>
            <p className="mb-3">
              Find the gradient of the tangent to f(x) = x² at x = 3 using the limit definition.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2">Solution:</p>
              <div className="font-mono text-sm ml-4 space-y-1">
                <p>m = lim<sub>h→0</sub> [f(3 + h) - f(3)] / h</p>
                <p className="ml-4">= lim<sub>h→0</sub> [(3 + h)² - 9] / h</p>
                <p className="ml-4">= lim<sub>h→0</sub> [9 + 6h + h² - 9] / h</p>
                <p className="ml-4">= lim<sub>h→0</sub> [6h + h²] / h</p>
                <p className="ml-4">= lim<sub>h→0</sub> (6 + h)</p>
                <p className="ml-4">= 6</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded mt-3">
                <p className="font-semibold">∴ Gradient at x = 3 is 6</p>
              </div>
            </div>
          </div>

          {/* Practice */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold mb-3 text-yellow-700 dark:text-yellow-400">
              🎯 Practice Problem 2.1
            </h3>
            <p className="mb-3">
              Find the gradient of f(x) = x² at x = 5 using the limit definition.
            </p>
            <button
              onClick={() => setShowPractice2(!showPractice2)}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded transition"
            >
              {showPractice2 ? 'Hide' : 'Show'} Solution
            </button>
            {showPractice2 && (
              <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded">
                <div className="font-mono text-sm ml-4 space-y-1">
                  <p>lim<sub>h→0</sub> [(5+h)² - 25] / h</p>
                  <p>= lim<sub>h→0</sub> [25 + 10h + h² - 25] / h</p>
                  <p>= lim<sub>h→0</sub> (10 + h) = 10</p>
                </div>
                <p className="font-semibold mt-2">Answer: 10</p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Approximating from Graphs */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            3. Approximating Gradients from Graphs
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <p className="text-lg mb-4">
              We can estimate the gradient of a tangent by drawing the tangent line on a graph and
              calculating rise/run.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Steps:</h3>
              <ol className="space-y-2 ml-4">
                <li>1. Draw the tangent line at the point of interest</li>
                <li>2. Choose two points on the tangent line</li>
                <li>3. Calculate: gradient = rise / run = Δy / Δx</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 className="font-bold text-lg mb-3">Key Observations:</h3>
            <ul className="space-y-2 ml-4">
              <li>• Gradient &gt; 0 when curve is increasing</li>
              <li>• Gradient &lt; 0 when curve is decreasing</li>
              <li>• Gradient = 0 at turning points (peaks and valleys)</li>
            </ul>
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
              <span>Secant lines connect two points; tangent lines touch at one point</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Tangent gradient = lim<sub>h→0</sub> [f(x+h) - f(x)] / h</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>This limit process is the foundation of derivatives</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span>Gradient sign indicates whether curve is increasing/decreasing</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default GradientOfTangent;
