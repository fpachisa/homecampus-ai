import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

const EquationOfLine = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Equation of a Line</h1>
        <p className="text-lg text-green-100">Understanding y = mx + c and writing equations of straight lines</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Gradient-Intercept Form */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. The Gradient-Intercept Form: y = mx + c
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              The Standard Form of a Linear Equation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Every straight line (except vertical lines) can be written in the form:
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-green-400 dark:border-green-500">
              <p className="text-center font-mono text-4xl text-gray-900 dark:text-gray-100 mb-4">
                <MathText>y = mx + c</MathText>
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">m =</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">the gradient (slope) of the line</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">c =</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">the y-intercept (where the line crosses the y-axis)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-700 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Reading Information from an Equation
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100 mb-2">
                  <MathText>y = 3x + 5</MathText>
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Gradient (m) = <strong>3</strong></li>
                  <li>• y-intercept (c) = <strong>5</strong></li>
                  <li>• Line crosses y-axis at point <strong>(0, 5)</strong></li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100 mb-2">
                  <MathText>y = −2x + 7</MathText>
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Gradient (m) = <strong>−2</strong> (negative, so slopes downward)</li>
                  <li>• y-intercept (c) = <strong>7</strong></li>
                  <li>• Line crosses y-axis at point <strong>(0, 7)</strong></li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100 mb-2">
                  <MathText>y = 0.5x − 3</MathText>
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Gradient (m) = <strong>0.5</strong> (gentle upward slope)</li>
                  <li>• y-intercept (c) = <strong>−3</strong></li>
                  <li>• Line crosses y-axis at point <strong>(0, −3)</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-6">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">
              Special Cases:
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-semibold mb-1"><MathText>y = 2x</MathText> (no constant term)</p>
                <p className="text-sm">• Gradient = 2, y-intercept = 0 (passes through origin)</p>
              </div>
              <div>
                <p className="font-semibold mb-1"><MathText>y = 4</MathText> (no x term)</p>
                <p className="text-sm">• Gradient = 0 (horizontal line), y-intercept = 4</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Identify m and c
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              For the equation <MathText>y = −4x + 9</MathText>, what are the gradient and y-intercept?
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Comparing <MathText>y = −4x + 9</MathText> with <MathText>y = mx + c</MathText>:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-1">
                  • <strong>Gradient (m) = −4</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  • <strong>y-intercept (c) = 9</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Writing Equations Given m and c */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Writing Equations Given Gradient and y-intercept
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              The Process
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When you know the gradient (m) and y-intercept (c), simply substitute them into the formula <MathText>y = mx + c</MathText>.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Write the equation with gradient 5 and y-intercept 3
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p><strong>Given:</strong> m = 5, c = 3</p>
              <p><strong>Formula:</strong> <MathText>y = mx + c</MathText></p>
              <p><strong>Substitute:</strong> <MathText>y = 5x + 3</MathText></p>
              <p className="text-sm bg-blue-100 dark:bg-blue-800/30 p-2 rounded mt-3">
                That's it! The equation is <strong><MathText>y = 5x + 3</MathText></strong>
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Gradient = −2, y-intercept = 7
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>m = −2, c = 7</p>
              <p><MathText>y = mx + c</MathText></p>
              <p><MathText>y = −2x + 7</MathText></p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Write the equation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A line has gradient 0.5 and crosses the y-axis at −4. Write its equation.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Given:</strong> m = 0.5, c = −4
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Substitute into <MathText>y = mx + c</MathText>:
                </p>
                <p className="font-bold text-lg text-green-600 dark:text-green-400">
                  <MathText>y = 0.5x − 4</MathText>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Finding Equations from Graphs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Finding Equations from Graphs
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Step-by-Step Method
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li><strong>Find the y-intercept (c):</strong> Look where the line crosses the y-axis</li>
              <li><strong>Find the gradient (m):</strong> Choose two clear points on the line and use the gradient formula</li>
              <li><strong>Write the equation:</strong> Substitute m and c into <MathText>y = mx + c</MathText></li>
              <li><strong>Check:</strong> Pick a point on the line and verify it satisfies your equation</li>
            </ol>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example: Finding equation from a graph
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p><strong>Step 1:</strong> Line crosses y-axis at (0, 2) → c = 2</p>
              <p><strong>Step 2:</strong> Line passes through (0, 2) and (4, 10)</p>
              <p className="ml-4">m = (10 − 2) / (4 − 0) = 8 / 4 = 2</p>
              <p><strong>Step 3:</strong> <MathText>y = 2x + 2</MathText></p>
              <p><strong>Step 4:</strong> Check with point (4, 10):</p>
              <p className="ml-4">y = 2(4) + 2 = 8 + 2 = 10 ✓</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-700 mb-6">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">
              Common Mistakes to Avoid
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <p className="text-sm">Using points that don't lie exactly on grid intersections – this leads to rounding errors</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <p className="text-sm">Mixing up the x and y coordinates when calculating gradient</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <p className="text-sm">Forgetting to check your answer with another point on the line</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Word Problems and Real Contexts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            4. Equations from Word Problems
          </h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Identifying m and c in Context
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-indigo-300 dark:border-indigo-600">
                <p className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Gradient (m) represents:</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Rate of change</li>
                  <li>• Cost per unit</li>
                  <li>• Speed</li>
                  <li>• Growth rate</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-indigo-300 dark:border-indigo-600">
                <p className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">y-intercept (c) represents:</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Starting amount</li>
                  <li>• Fixed cost</li>
                  <li>• Initial value</li>
                  <li>• Base fee</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Visual: y = mx + c examples */}
          <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visualizing y = mx + c with Different Values:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">y = 3x + 5</p>
                <MathToolRenderer
                  toolName="functionGraph"
                  parameters={{
                    expression: "3*x + 5",
                    xMin: -3,
                    xMax: 3,
                    yMin: -5,
                    yMax: 15,
                    showGrid: true,
                    showPoints: [{ x: 0, label: "(0,5)", color: "#3b82f6" }],
                    color: "#3b82f6",
                    label: "m=3, c=5"
                  }}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-purple-700 dark:text-purple-400 mb-2">y = −2x + 7</p>
                <MathToolRenderer
                  toolName="functionGraph"
                  parameters={{
                    expression: "-2*x + 7",
                    xMin: -3,
                    xMax: 3,
                    yMin: -5,
                    yMax: 15,
                    showGrid: true,
                    showPoints: [{ x: 0, label: "(0,7)", color: "#8b5cf6" }],
                    color: "#8b5cf6",
                    label: "m=−2, c=7"
                  }}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-orange-700 dark:text-orange-400 mb-2">y = 0.5x − 3</p>
                <MathToolRenderer
                  toolName="functionGraph"
                  parameters={{
                    expression: "0.5*x - 3",
                    xMin: -3,
                    xMax: 3,
                    yMin: -5,
                    yMax: 15,
                    showGrid: true,
                    showPoints: [{ x: 0, label: "(0,−3)", color: "#f97316" }],
                    color: "#f97316",
                    label: "m=0.5, c=−3"
                  }}
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example: Car Rental Problem
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p className="bg-white dark:bg-gray-800 p-3 rounded">
                A car rental company charges 50 dollars per day plus an initial insurance fee of 20 dollars. Write an equation for the total cost (C) in terms of the number of days (d).
              </p>
              <p><strong>Step 1: Identify the variables</strong></p>
              <p className="ml-4">• Cost per day = 50 (this is the gradient, m)</p>
              <p className="ml-4">• Initial fee = 20 (this is the y-intercept, c)</p>
              <p><strong>Step 2: Write the equation</strong></p>
              <p className="ml-4 font-mono"><MathText>C = 50d + 20</MathText></p>
              <p className="text-sm bg-blue-100 dark:bg-blue-800/30 p-2 rounded mt-3">
                <strong>Interpretation:</strong> The cost starts at 20 dollars and increases by 50 dollars for each day.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Phone Bill
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A phone plan costs 15 dollars per month plus 0.10 dollars per text message. Write an equation for the monthly cost (C) in terms of the number of texts (t).
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Identify:</strong></p>
                  <p className="ml-4">• Cost per text = 0.10 (gradient, m)</p>
                  <p className="ml-4">• Monthly base fee = 15 (y-intercept, c)</p>
                  <p className="mt-3"><strong>Equation:</strong></p>
                  <p className="font-bold text-lg text-green-600 dark:text-green-400 ml-4">
                    <MathText>C = 0.10t + 15</MathText>
                  </p>
                  <p className="text-sm mt-3">
                    or equivalently: <MathText>C = 0.1t + 15</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Temperature Conversion
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Water starts at 20°C and heats up at 5°C per minute. Write an equation for temperature (T) after m minutes.
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Identify:</strong></p>
                  <p className="ml-4">• Rate of heating = 5°C per minute (gradient)</p>
                  <p className="ml-4">• Starting temperature = 20°C (y-intercept)</p>
                  <p className="mt-3"><strong>Equation:</strong></p>
                  <p className="font-bold text-lg text-green-600 dark:text-green-400 ml-4">
                    <MathText>T = 5m + 20</MathText>
                  </p>
                  <p className="text-sm mt-3 bg-green-100 dark:bg-green-900/30 p-2 rounded">
                    Check: After 0 minutes, T = 5(0) + 20 = 20°C ✓<br />
                    After 4 minutes, T = 5(4) + 20 = 40°C ✓
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>The standard form of a linear equation is <MathText>y = mx + c</MathText></li>
            <li>m is the gradient (steepness), c is the y-intercept (starting value)</li>
            <li>Given m and c, just substitute them into the formula</li>
            <li>To find equation from a graph: identify c where line crosses y-axis, calculate m using two points</li>
            <li>In word problems: gradient = rate of change, y-intercept = initial/starting value</li>
            <li>Always check your equation by testing with a point you know is on the line</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EquationOfLine;
