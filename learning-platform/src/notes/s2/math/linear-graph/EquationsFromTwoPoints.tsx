import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

const EquationsFromTwoPoints = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Equations from Two Points</h1>
        <p className="text-lg text-orange-100">Finding the equation of a line when you know two points, plus parallel and perpendicular lines</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Two-Point Method */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Finding Equations from Two Points
          </h2>

          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              The Two-Step Process
            </h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-orange-400">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 1: Find the gradient (m)</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Use the formula: <MathText>{'m = (y₂ − y₁) / (x₂ − x₁)'}</MathText>
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-orange-400">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 2: Find the y-intercept (c)</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Substitute m and one point into <MathText>y = mx + c</MathText> and solve for c
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Find the equation through (2, 5) and (6, 13)
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Step 1: Find m</p>
                <p>m = (13 − 5) / (6 − 2)</p>
                <p>m = 8 / 4</p>
                <p className="font-bold">m = 2</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Step 2: Find c using point (2, 5)</p>
                <p>Substitute into <MathText>y = mx + c</MathText>:</p>
                <p>5 = 2(2) + c</p>
                <p>5 = 4 + c</p>
                <p>c = 5 − 4</p>
                <p className="font-bold">c = 1</p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                <p className="font-semibold mb-2">Final Answer:</p>
                <p className="text-xl font-bold"><MathText>y = 2x + 1</MathText></p>
              </div>

              <div className="bg-blue-100 dark:bg-blue-800/30 p-3 rounded">
                <p className="font-semibold mb-2">Check with the other point (6, 13):</p>
                <p>y = 2(6) + 1 = 12 + 1 = 13 ✓</p>
              </div>
            </div>
          </div>

          {/* Visual: Line through two points */}
          <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visualizing the Line y = 2x + 1 Through Points (2, 5) and (6, 13):</h4>
            <MathToolRenderer
              toolName="functionGraph"
              parameters={{
                expression: "2*x + 1",
                xMin: 0,
                xMax: 8,
                yMin: 0,
                yMax: 18,
                showGrid: true,
                showPoints: [
                  { x: 2, label: "(2,5)", color: "#3b82f6" },
                  { x: 6, label: "(6,13)", color: "#3b82f6" }
                ],
                color: "#3b82f6",
                label: "y = 2x + 1",
                caption: "The line passes through both given points with gradient m = 2 and y-intercept c = 1"
              }}
            />
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Find the equation through (1, 3) and (5, 11)
            </h3>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> m = (11 − 3) / (5 − 1) = 8 / 4 = 2</p>
                  <p><strong>Step 2:</strong> Using (1, 3): 3 = 2(1) + c → 3 = 2 + c → c = 1</p>
                  <p className="font-bold text-lg text-green-600 dark:text-green-400 mt-3">
                    <MathText>y = 2x + 1</MathText>
                  </p>
                  <p className="text-sm mt-2">Check: y = 2(5) + 1 = 11 ✓</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Parallel Lines */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Parallel Lines
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Key Rule for Parallel Lines
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-purple-400 dark:border-purple-500">
              <p className="text-center text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Parallel lines have equal gradients
              </p>
              <p className="text-center text-gray-600 dark:text-gray-400">
                If line 1 has gradient m₁ and line 2 has gradient m₂, then:<br />
                Lines are parallel ⟺ m₁ = m₂
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-700 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Why Parallel Lines Have Equal Gradients
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The gradient measures steepness. If two lines have the same steepness and tilt in the same direction, they will never meet – they are parallel!
            </p>
            <div className="grid md:grid-cols-3 gap-3 mt-4">
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded text-center">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1"><MathText>y = 2x + 3</MathText></p>
                <p className="text-xs text-gray-600 dark:text-gray-400">m = 2</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded text-center">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1"><MathText>y = 2x − 1</MathText></p>
                <p className="text-xs text-gray-600 dark:text-gray-400">m = 2</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded text-center">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1"><MathText>y = 2x + 7</MathText></p>
                <p className="text-xs text-gray-600 dark:text-gray-400">m = 2</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 text-center">
              All three lines are parallel (same gradient = 2, different y-intercepts)
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Find a line parallel to <MathText>y = 3x + 2</MathText> passing through (4, 7)
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p><strong>Step 1:</strong> Parallel lines have equal gradients</p>
              <p className="ml-4">Original line: m = 3, so our line also has m = 3</p>

              <p><strong>Step 2:</strong> Find c using the point (4, 7)</p>
              <p className="ml-4">7 = 3(4) + c</p>
              <p className="ml-4">7 = 12 + c</p>
              <p className="ml-4">c = −5</p>

              <p className="font-bold text-lg mt-3 bg-green-100 dark:bg-green-900/30 p-2 rounded">
                Answer: <MathText>y = 3x − 5</MathText>
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Find a line parallel to <MathText>y = −2x + 4</MathText> through (3, 1)
            </h3>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Parallel → same gradient: m = −2</p>
                  <p>Using point (3, 1): 1 = −2(3) + c</p>
                  <p>1 = −6 + c</p>
                  <p>c = 7</p>
                  <p className="font-bold text-lg text-green-600 dark:text-green-400 mt-3">
                    <MathText>y = −2x + 7</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Perpendicular Lines */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Perpendicular Lines
          </h2>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Key Rule for Perpendicular Lines
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-red-400 dark:border-red-500">
              <p className="text-center text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Perpendicular lines have gradients whose product is −1
              </p>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-2">
                If line 1 has gradient m₁ and line 2 has gradient m₂, then:
              </p>
              <p className="text-center font-mono text-lg text-gray-900 dark:text-gray-100">
                m₁ × m₂ = −1
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3">
                or equivalently: m₂ = −1/m₁
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-700 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Finding the Perpendicular Gradient
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Original Gradient</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">m = 2</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Perpendicular: m = −1/2</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Original Gradient</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">m = −3</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Perpendicular: m = 1/3</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Original Gradient</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">m = 1/4</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Perpendicular: m = −4</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Original Gradient</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">m = −2/5</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Perpendicular: m = 5/2</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              <strong>Pattern:</strong> Flip the fraction and change the sign
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Find a line perpendicular to <MathText>y = 4x + 1</MathText> through (2, 5)
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p><strong>Step 1:</strong> Find perpendicular gradient</p>
              <p className="ml-4">Original: m = 4</p>
              <p className="ml-4">Perpendicular: m = −1/4</p>

              <p><strong>Step 2:</strong> Use point (2, 5)</p>
              <p className="ml-4">5 = (−1/4)(2) + c</p>
              <p className="ml-4">5 = −0.5 + c</p>
              <p className="ml-4">c = 5.5</p>

              <p className="font-bold text-lg mt-3 bg-green-100 dark:bg-green-900/30 p-2 rounded">
                Answer: <MathText>y = −0.25x + 5.5</MathText> or <MathText>{'y = −(1/4)x + 5.5'}</MathText>
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Find a line perpendicular to <MathText>y = 2x − 3</MathText> through (4, 1)
            </h3>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Original gradient: m = 2</p>
                  <p>Perpendicular gradient: m = −1/2 = −0.5</p>
                  <p>Using point (4, 1): 1 = (−0.5)(4) + c</p>
                  <p>1 = −2 + c</p>
                  <p>c = 3</p>
                  <p className="font-bold text-lg text-green-600 dark:text-green-400 mt-3">
                    <MathText>y = −0.5x + 3</MathText>
                  </p>
                  <p className="text-sm mt-2">Check: 2 × (−0.5) = −1 ✓</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Special Cases */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            4. Special Cases: Horizontal and Vertical Lines
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded border-2 border-blue-400 dark:border-blue-600">
              <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-3">
                Horizontal Lines
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                Equation form: <MathText>y = k</MathText> (where k is a constant)
              </p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Gradient = 0</li>
                <li>• All points have the same y-coordinate</li>
                <li>• Example: <MathText>y = 3</MathText></li>
                <li>• Perpendicular to vertical lines</li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded border-2 border-orange-400 dark:border-orange-600">
              <h3 className="font-bold text-orange-700 dark:text-orange-300 mb-3">
                Vertical Lines
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                Equation form: <MathText>x = h</MathText> (where h is a constant)
              </p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Gradient = undefined</li>
                <li>• All points have the same x-coordinate</li>
                <li>• Example: <MathText>x = −2</MathText></li>
                <li>• Perpendicular to horizontal lines</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-orange-50 dark:bg-orange-900/30 border-l-4 border-orange-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>To find equation from two points: (1) calculate gradient, (2) substitute to find c</li>
            <li>Parallel lines have equal gradients: m₁ = m₂</li>
            <li>Perpendicular lines have gradients whose product is −1: m₁ × m₂ = −1</li>
            <li>To find perpendicular gradient: flip the fraction and change the sign</li>
            <li>Horizontal lines: <MathText>y = k</MathText> (gradient = 0)</li>
            <li>Vertical lines: <MathText>x = h</MathText> (gradient undefined)</li>
            <li>Always check your answer by substituting a point back into the equation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EquationsFromTwoPoints;
