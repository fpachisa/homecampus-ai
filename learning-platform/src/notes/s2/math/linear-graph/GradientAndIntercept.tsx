import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

const GradientAndIntercept = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Gradient and y-intercept</h1>
        <p className="text-lg text-purple-100">Understanding gradient calculation, types of gradients, and the y-intercept of a line</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Gradient Formula */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. The Gradient Formula
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Calculating Gradient from Two Points
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When you know two points on a line, you can calculate the gradient using this formula:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-purple-400 dark:border-purple-500">
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                For points (x₁, y₁) and (x₂, y₂):
              </p>
              <p className="text-center font-mono text-3xl text-gray-900 dark:text-gray-100 mb-3">
                m = (y₂ − y₁) / (x₂ − x₁)
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                where m represents the gradient
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-6">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">
              Important Tips:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>The letter <strong>m</strong> is commonly used to represent gradient</li>
              <li>It doesn't matter which point you call (x₁, y₁) and which is (x₂, y₂)</li>
              <li><strong>Critical:</strong> Subtract in the same order – if you do y₂ − y₁ on top, do x₂ − x₁ on bottom</li>
              <li>The gradient is the same between any two points on the same straight line</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Find the gradient of the line through (1, 2) and (5, 10)
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p><strong>Step 1:</strong> Identify your points</p>
              <p className="ml-4">(x₁, y₁) = (1, 2) and (x₂, y₂) = (5, 10)</p>

              <p><strong>Step 2:</strong> Apply the formula</p>
              <p className="ml-4">m = (y₂ − y₁) / (x₂ − x₁)</p>
              <p className="ml-4">m = (10 − 2) / (5 − 1)</p>
              <p className="ml-4">m = 8 / 4</p>
              <p className="ml-4"><strong>m = 2</strong></p>

              <p className="mt-3 text-sm bg-blue-100 dark:bg-blue-800/30 p-2 rounded">
                <strong>Meaning:</strong> For every 1 unit we move right, the line goes up 2 units.
              </p>
            </div>
          </div>

          {/* Visual: Line through (1,2) and (5,10) */}
          <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visualizing the Line with Gradient m = 2:</h4>
            <MathToolRenderer
              toolName="functionGraph"
              parameters={{
                expression: "2*x",
                xMin: -1,
                xMax: 6,
                yMin: -1,
                yMax: 12,
                showGrid: true,
                showPoints: [
                  { x: 1, label: "(1,2)", color: "#3b82f6" },
                  { x: 5, label: "(5,10)", color: "#3b82f6" }
                ],
                color: "#3b82f6",
                label: "m = 2",
                caption: "The line passes through (1,2) and (5,10) with gradient 2"
              }}
            />
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Find the gradient through (3, 7) and (9, 19)
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
                  <p>(x₁, y₁) = (3, 7) and (x₂, y₂) = (9, 19)</p>
                  <p>m = (19 − 7) / (9 − 3)</p>
                  <p>m = 12 / 6</p>
                  <p className="font-bold text-lg">m = 2</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Types of Gradients */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Types of Gradients
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Understanding Gradient Sign and Direction
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              The sign of the gradient tells us whether a line goes upward or downward as we move from left to right.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded border-2 border-green-400 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-3 text-lg">
                Positive Gradient (m &gt; 0)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The line slopes <strong>upward</strong> from left to right.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  • As x increases, y increases<br />
                  • Example: m = 2, m = 0.5, m = 5
                </p>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                Like climbing uphill as you walk to the right
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded border-2 border-red-400 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-3 text-lg">
                Negative Gradient (m &lt; 0)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The line slopes <strong>downward</strong> from left to right.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  • As x increases, y decreases<br />
                  • Example: m = −2, m = −0.5, m = −3
                </p>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                Like going downhill as you walk to the right
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-700 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100 text-lg">
              Special Cases
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Zero Gradient (m = 0)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    A <strong>horizontal line</strong> – completely flat
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    The y-value stays constant (e.g., y = 3, y = −2)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Undefined Gradient
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    A <strong>vertical line</strong> – goes straight up and down
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    The x-value stays constant (e.g., x = 5, x = −1)<br />
                    Division by zero (run = 0), so gradient is undefined
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Find the gradient through (4, 8) and (7, 2)
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>m = (2 − 8) / (7 − 4)</p>
              <p>m = −6 / 3</p>
              <p><strong>m = −2</strong></p>
              <p className="text-sm bg-red-100 dark:bg-red-900/30 p-2 rounded">
                <strong>Negative gradient:</strong> The line slopes downward from left to right.
              </p>
            </div>
          </div>

          {/* Visual: Comparing positive and negative gradients */}
          <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visual Comparison of Gradient Types:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">Positive (m = 2)</p>
                <MathToolRenderer
                  toolName="functionGraph"
                  parameters={{
                    expression: "2*x + 1",
                    xMin: -3,
                    xMax: 3,
                    yMin: -5,
                    yMax: 7,
                    showGrid: true,
                    color: "#22c55e",
                    label: "y = 2x + 1",
                    caption: "Slopes upward"
                  }}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">Negative (m = −2)</p>
                <MathToolRenderer
                  toolName="functionGraph"
                  parameters={{
                    expression: "-2*x + 1",
                    xMin: -3,
                    xMax: 3,
                    yMin: -5,
                    yMax: 7,
                    showGrid: true,
                    color: "#ef4444",
                    label: "y = −2x + 1",
                    caption: "Slopes downward"
                  }}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">Zero (m = 0)</p>
                <MathToolRenderer
                  toolName="functionGraph"
                  parameters={{
                    expression: "2",
                    xMin: -3,
                    xMax: 3,
                    yMin: -5,
                    yMax: 7,
                    showGrid: true,
                    color: "#3b82f6",
                    label: "y = 2",
                    caption: "Horizontal line"
                  }}
                />
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Find the gradient and identify its type
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Points: (2, 5) and (2, −3)
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>m = (−3 − 5) / (2 − 2)</p>
                  <p>m = −8 / 0</p>
                  <p className="font-bold text-lg text-orange-600 dark:text-orange-400">
                    m is UNDEFINED
                  </p>
                  <p className="mt-3 text-sm bg-orange-100 dark:bg-orange-900/30 p-2 rounded">
                    Both points have the same x-coordinate (x = 2), so this is a <strong>vertical line</strong>. We cannot divide by zero, so the gradient is undefined.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Understanding y-intercept */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. The y-intercept
          </h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              What is the y-intercept?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>y-intercept</strong> is the point where a line crosses the y-axis.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Key facts about y-intercept:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>At the y-intercept, <strong>x = 0</strong></li>
                <li>We usually write it as just a number (the y-value)</li>
                <li>The letter <strong>c</strong> is commonly used to represent the y-intercept</li>
                <li>Every non-vertical line has exactly one y-intercept</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-700 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Finding the y-intercept from a Graph
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Look at where the line crosses the y-axis and read the y-coordinate.
            </p>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Examples from graphs:</strong>
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Line crosses y-axis at (0, 3) → y-intercept is <strong>3</strong></li>
                <li>• Line crosses y-axis at (0, −2) → y-intercept is <strong>−2</strong></li>
                <li>• Line crosses y-axis at (0, 0) → y-intercept is <strong>0</strong></li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Real-World Meaning of y-intercept
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In real-world situations, the y-intercept often represents the <strong>starting value</strong> or <strong>initial amount</strong> when x = 0.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-purple-300 dark:border-purple-600">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Example: Phone Plan
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Cost = 20 + 0.50 × minutes<br />
                  y-intercept = 20
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Meaning: 20 dollars is the base monthly fee before using any minutes
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-purple-300 dark:border-purple-600">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Example: Tank Draining
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Water = 500 − 10 × hours<br />
                  y-intercept = 500
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Meaning: 500 litres is the amount of water at the start (0 hours)
                </p>
              </div>
            </div>
          </div>

          {/* Visual: Lines with different y-intercepts */}
          <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visualizing Different y-intercepts (same gradient, different starting points):</h4>
            <MathToolRenderer
              toolName="functionGraph"
              parameters={{
                expression: "2*x + 3",
                xMin: -4,
                xMax: 4,
                yMin: -5,
                yMax: 10,
                showGrid: true,
                showPoints: [
                  { x: 0, label: "c = 3", color: "#22c55e" }
                ],
                color: "#22c55e",
                label: "",
                caption: "Three lines with gradient m = 2 but different y-intercepts: y = 2x + 3 (green), y = 2x (blue - not shown), y = 2x − 2 (red - not shown)"
              }}
            />
            <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
              <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-300 dark:border-green-600 text-center">
                <p className="font-mono text-gray-800 dark:text-gray-200">y = 2x + 3</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">y-intercept: 3</p>
              </div>
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-300 dark:border-blue-600 text-center">
                <p className="font-mono text-gray-800 dark:text-gray-200">y = 2x</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">y-intercept: 0</p>
              </div>
              <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded border border-red-300 dark:border-red-600 text-center">
                <p className="font-mono text-gray-800 dark:text-gray-200">y = 2x − 2</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">y-intercept: −2</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Identify the y-intercept
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A line passes through the points (0, 7) and (3, 13). What is the y-intercept?
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  The y-intercept is where the line crosses the y-axis, which means <strong>x = 0</strong>.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  One of the points is <strong>(0, 7)</strong> – this is already on the y-axis!
                </p>
                <p className="font-bold text-lg text-indigo-600 dark:text-indigo-400 mt-3">
                  y-intercept = 7
                </p>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Real-world interpretation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A taxi charges 5 dollars initially plus 2 dollars per kilometer. The cost equation is: Cost = 5 + 2 × km.<br />
              What does the y-intercept represent?
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  The equation is: Cost = 5 + 2 × km
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  The y-intercept is <strong>5</strong> (the constant term).
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  When km = 0 (no distance traveled), the cost is 5 dollars.
                </p>
                <p className="font-bold text-gray-900 dark:text-gray-100 mt-3 bg-green-100 dark:bg-green-900/30 p-2 rounded">
                  The y-intercept represents the initial pickup fee – what you pay just for getting into the taxi before traveling any distance.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Gradient formula: m = (y₂ − y₁) / (x₂ − x₁) – measures steepness of a line</li>
            <li>Positive gradient: line slopes upward (as x increases, y increases)</li>
            <li>Negative gradient: line slopes downward (as x increases, y decreases)</li>
            <li>Zero gradient: horizontal line (y stays constant)</li>
            <li>Undefined gradient: vertical line (x stays constant, cannot divide by zero)</li>
            <li>The y-intercept is where the line crosses the y-axis (where x = 0)</li>
            <li>In real-world contexts, the y-intercept often represents a starting value or initial amount</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GradientAndIntercept;
