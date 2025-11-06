import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function GraphingTwoVariableInequalities() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Graphing Linear Inequalities in Two Variables</h1>
        <p className="mt-2 text-indigo-100">Visualizing solution regions with boundary lines and shading</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Introduction */}
        <section className="mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              From One Variable to Two Variables
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Previously, we solved inequalities like <strong>x &gt; 3</strong> (one variable) and showed solutions on a number line.<br /><br />
              Now we'll graph inequalities like <strong>y &lt; 2x + 3</strong> (two variables: x and y) on a coordinate plane. Instead of a line segment, the solution is an entire <strong>region</strong> (half-plane) on the graph!
            </p>
          </div>
        </section>

        {/* Section 1: Boundary Lines */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Drawing the Boundary Line
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The first step is to draw the <strong>boundary line</strong> – the line that separates the solution region from the non-solution region.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">
                Step 1: Convert Inequality to Equation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Replace the inequality symbol with = to get the boundary line equation.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Inequality:</strong> <span className="font-mono">y &lt; 2x + 3</span><br />
                  <strong>Boundary line:</strong> <span className="font-mono">y = 2x + 3</span>
                </p>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                Step 2: Determine Line Style
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Solid Line (─────)</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Use for <strong>≤</strong> or <strong>≥</strong><br />
                    Boundary IS part of solution<br />
                    Points ON the line satisfy the inequality
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Dashed Line (- - - -)</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Use for <strong>&lt;</strong> or <strong>&gt;</strong><br />
                    Boundary is NOT part of solution<br />
                    Points ON the line do NOT satisfy the inequality
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Examples */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Boundary Line Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-300 dark:border-gray-700 p-4 rounded">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">y = 2x + 1 (Solid)</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">For y ≤ 2x + 1 or y ≥ 2x + 1</p>
                <MathToolRenderer
                  toolName="linearInequalityGrapher"
                  parameters={{
                    coefficientX: -2,
                    coefficientY: 1,
                    constant: 1,
                    inequalityType: "<=",
                    xMin: -2,
                    xMax: 3,
                    yMin: -3,
                    yMax: 5,
                    shadeOpacity: 0.15,
                    title: "Solid Boundary"
                  }}
                />
              </div>
              <div className="border border-gray-300 dark:border-gray-700 p-4 rounded">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">y = 2x + 1 (Dashed)</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">For y &lt; 2x + 1 or y &gt; 2x + 1</p>
                <MathToolRenderer
                  toolName="linearInequalityGrapher"
                  parameters={{
                    coefficientX: -2,
                    coefficientY: 1,
                    constant: 1,
                    inequalityType: "<",
                    xMin: -2,
                    xMax: 3,
                    yMin: -3,
                    yMax: 5,
                    shadeOpacity: 0.15,
                    title: "Dashed Boundary"
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Test Point Method */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. The Test Point Method: Which Side to Shade?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Once you've drawn the boundary line, you need to determine which side contains the solutions. The <strong>test point method</strong> makes this easy!
            </p>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">
                The Test Point Method (3 Steps)
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Choose a test point</strong> (usually (0, 0) if it's not on the line)</li>
                <li><strong>Substitute</strong> the test point coordinates into the original inequality</li>
                <li><strong>Check if true:</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>If TRUE → shade the side containing the test point</li>
                    <li>If FALSE → shade the opposite side</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                💡 Why (0, 0) is the Best Test Point
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                The origin (0, 0) makes calculations super easy! Just plug in zeros and see if the inequality is true.<br />
                <strong>Exception:</strong> If the boundary line passes through (0, 0), choose a different point like (1, 0) or (0, 1).
              </p>
            </div>
          </div>

          {/* Example 1 with Test Point */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Graph y &lt; 2x + 3
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-3">
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 1: Draw boundary line</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  Equation: y = 2x + 3<br />
                  Style: Dashed (because &lt; is strict)
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 2: Choose test point</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  Let's use (0, 0)
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 3: Test the point</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 font-mono">
                  y &lt; 2x + 3<br />
                  0 &lt; 2(0) + 3<br />
                  0 &lt; 3 <strong className="text-green-600 dark:text-green-400">✓ TRUE!</strong>
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 4: Shade</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  Since (0, 0) makes the inequality true, shade the side containing (0, 0) – which is <strong>below</strong> the line.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <MathToolRenderer
                toolName="linearInequalityGrapher"
                parameters={{
                  coefficientX: -2,
                  coefficientY: 1,
                  constant: 3,
                  inequalityType: "<",
                  xMin: -2,
                  xMax: 4,
                  yMin: -2,
                  yMax: 8,
                  testPoint: { x: 0, y: 0, label: "(0,0)" },
                  showTestPoint: true,
                  title: "y < 2x + 3"
                }}
                caption="Test point (0,0) is green ✓ because it satisfies the inequality. We shade the region containing it."
              />
            </div>
          </div>

          {/* Example 2 with Test Point */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Graph 2x + 3y ≥ 6
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-3">
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 1: Draw boundary line</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  Equation: 2x + 3y = 6<br />
                  Style: Solid (because ≥ includes the boundary)
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 2: Test point (0, 0)</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 font-mono">
                  2x + 3y ≥ 6<br />
                  2(0) + 3(0) ≥ 6<br />
                  0 ≥ 6 <strong className="text-red-600 dark:text-red-400">✗ FALSE!</strong>
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 3: Shade opposite side</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  Since (0, 0) makes the inequality FALSE, shade the <strong>opposite</strong> side (away from origin).
                </p>
              </div>
            </div>

            <div className="mt-4">
              <MathToolRenderer
                toolName="linearInequalityGrapher"
                parameters={{
                  coefficientX: 2,
                  coefficientY: 3,
                  constant: 6,
                  inequalityType: ">=",
                  xMin: -1,
                  xMax: 5,
                  yMin: -1,
                  yMax: 4,
                  testPoint: { x: 0, y: 0, label: "(0,0)" },
                  showTestPoint: true,
                  title: "2x + 3y ≥ 6"
                }}
                caption="Test point (0,0) is red ✗ because it does NOT satisfy the inequality. We shade the opposite region."
              />
            </div>
          </div>
        </section>

        {/* Section 3: Special Cases */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Special Cases: Vertical and Horizontal Lines
          </h2>

          <div className="mb-6">
            {/* Vertical Lines */}
            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-teal-800 dark:text-teal-300 mb-3">
                Vertical Lines: x = k
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Inequalities like <strong>x ≥ 2</strong> or <strong>x &lt; −1</strong> create vertical boundary lines.
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>x &gt; k:</strong> Shade to the RIGHT of the vertical line</li>
                <li><strong>x &lt; k:</strong> Shade to the LEFT of the vertical line</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-300 dark:border-gray-700 p-4 rounded">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">x ≥ 2</p>
                <MathToolRenderer
                  toolName="linearInequalityGrapher"
                  parameters={{
                    coefficientX: 1,
                    coefficientY: 0,
                    constant: 2,
                    inequalityType: ">=",
                    xMin: -1,
                    xMax: 5,
                    yMin: -3,
                    yMax: 3,
                    title: "x ≥ 2 (Vertical, shade right)"
                  }}
                />
              </div>

              <div className="border border-gray-300 dark:border-gray-700 p-4 rounded">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">x &lt; 1</p>
                <MathToolRenderer
                  toolName="linearInequalityGrapher"
                  parameters={{
                    coefficientX: 1,
                    coefficientY: 0,
                    constant: 1,
                    inequalityType: "<",
                    xMin: -2,
                    xMax: 4,
                    yMin: -3,
                    yMax: 3,
                    title: "x < 1 (Vertical, shade left)"
                  }}
                />
              </div>
            </div>

            {/* Horizontal Lines */}
            <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-pink-800 dark:text-pink-300 mb-3">
                Horizontal Lines: y = k
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Inequalities like <strong>y ≤ 3</strong> or <strong>y &gt; −2</strong> create horizontal boundary lines.
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>y &gt; k:</strong> Shade ABOVE the horizontal line</li>
                <li><strong>y &lt; k:</strong> Shade BELOW the horizontal line</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-300 dark:border-gray-700 p-4 rounded">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">y &gt; 1</p>
                <MathToolRenderer
                  toolName="linearInequalityGrapher"
                  parameters={{
                    coefficientX: 0,
                    coefficientY: 1,
                    constant: 1,
                    inequalityType: ">",
                    xMin: -4,
                    xMax: 4,
                    yMin: -2,
                    yMax: 4,
                    title: "y > 1 (Horizontal, shade above)"
                  }}
                />
              </div>

              <div className="border border-gray-300 dark:border-gray-700 p-4 rounded">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">y ≤ 2</p>
                <MathToolRenderer
                  toolName="linearInequalityGrapher"
                  parameters={{
                    coefficientX: 0,
                    coefficientY: 1,
                    constant: 2,
                    inequalityType: "<=",
                    xMin: -4,
                    xMax: 4,
                    yMin: -1,
                    yMax: 5,
                    title: "y ≤ 2 (Horizontal, shade below)"
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Converting Forms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            4. Working with Different Forms
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Inequalities can be written in different forms. You may need to rearrange to make graphing easier.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Common Forms
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Slope-intercept form:</strong> y &lt; mx + b (easiest to graph!)</li>
                <li><strong>Standard form:</strong> ax + by &lt; c (may need to convert)</li>
                <li><strong>Isolated variable:</strong> x &lt; k or y &lt; k (vertical/horizontal)</li>
              </ul>
            </div>

            {/* Example: Converting */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 3: Graph 3x − 2y &gt; 6
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-3">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 1: Convert to slope-intercept form</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 space-y-1">
                    <span className="block">3x − 2y &gt; 6</span>
                    <span className="block">−2y &gt; −3x + 6</span>
                    <span className="block text-red-600 dark:text-red-400 font-semibold">
                      y &lt; (3/2)x − 3 (sign flipped when dividing by −2!)
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 2: Draw boundary (dashed)</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4">
                    y = (3/2)x − 3 (dashed because &lt; is strict)
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 3: Test (0, 0)</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 font-mono">
                    0 &lt; (3/2)(0) − 3<br />
                    0 &lt; −3 <strong className="text-red-600 dark:text-red-400">✗ FALSE</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 mt-2">
                    Shade opposite side (below the line, away from origin)
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <MathToolRenderer
                  toolName="linearInequalityGrapher"
                  parameters={{
                    coefficientX: 3,
                    coefficientY: -2,
                    constant: 6,
                    inequalityType: ">",
                    xMin: -2,
                    xMax: 6,
                    yMin: -5,
                    yMax: 3,
                    testPoint: { x: 0, y: 0, label: "(0,0)" },
                    showTestPoint: true,
                    title: "3x − 2y > 6"
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice Problems
          </h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Basic Graphing
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Graph: y ≥ x − 1<br />
              (a) Should the boundary be solid or dashed?<br />
              (b) Test point (0, 0): Does it satisfy the inequality?<br />
              (c) Which side should be shaded?
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  (a) <strong>Solid line</strong> (≥ includes the boundary)<br />
                  (b) Test: 0 ≥ 0 − 1 → 0 ≥ −1 <strong className="text-green-600">✓ TRUE</strong><br />
                  (c) Shade the side containing (0, 0), which is <strong>above</strong> the line
                </p>
                <MathToolRenderer
                  toolName="linearInequalityGrapher"
                  parameters={{
                    coefficientX: -1,
                    coefficientY: 1,
                    constant: -1,
                    inequalityType: ">=",
                    xMin: -3,
                    xMax: 4,
                    yMin: -3,
                    yMax: 4,
                    testPoint: { x: 0, y: 0, label: "(0,0)" },
                    showTestPoint: true
                  }}
                />
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Vertical Line
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Graph: x &lt; 3<br />
              Is this a vertical or horizontal line? Which direction to shade?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Vertical line</strong> at x = 3 (dashed because &lt;)<br />
                  Shade to the <strong>left</strong> (all points where x &lt; 3)
                </p>
                <MathToolRenderer
                  toolName="linearInequalityGrapher"
                  parameters={{
                    coefficientX: 1,
                    coefficientY: 0,
                    constant: 3,
                    inequalityType: "<",
                    xMin: -1,
                    xMax: 6,
                    yMin: -3,
                    yMax: 3
                  }}
                />
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Standard Form
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Graph: x + 2y ≤ 4
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Boundary: x + 2y = 4 (solid line)<br />
                  Test (0, 0): 0 + 2(0) ≤ 4 → 0 ≤ 4 <strong className="text-green-600">✓ TRUE</strong><br />
                  Shade the side containing origin
                </p>
                <MathToolRenderer
                  toolName="linearInequalityGrapher"
                  parameters={{
                    coefficientX: 1,
                    coefficientY: 2,
                    constant: 4,
                    inequalityType: "<=",
                    xMin: -1,
                    xMax: 6,
                    yMin: -1,
                    yMax: 4,
                    testPoint: { x: 0, y: 0, label: "(0,0)" },
                    showTestPoint: true
                  }}
                />
              </div>
            )}
          </div>

          {/* Practice 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Conversion Required
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Graph: −2x + y &gt; 4<br />
              (Hint: Rearrange to slope-intercept form first)
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Rearrange: −2x + y &gt; 4 → y &gt; 2x + 4<br />
                  Boundary: y = 2x + 4 (dashed line)<br />
                  Test (0, 0): 0 &gt; 2(0) + 4 → 0 &gt; 4 <strong className="text-red-600">✗ FALSE</strong><br />
                  Shade opposite side (above the line)
                </p>
                <MathToolRenderer
                  toolName="linearInequalityGrapher"
                  parameters={{
                    coefficientX: -2,
                    coefficientY: 1,
                    constant: 4,
                    inequalityType: ">",
                    xMin: -3,
                    xMax: 3,
                    yMin: -2,
                    yMax: 10,
                    testPoint: { x: 0, y: 0, label: "(0,0)" },
                    showTestPoint: true
                  }}
                />
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Boundary line:</strong> Solid for ≤ or ≥, dashed for &lt; or &gt;</li>
            <li><strong>Test point method:</strong> Choose (0,0) if possible, substitute, check if true</li>
            <li><strong>Shading:</strong> If test point is true, shade that side; if false, shade opposite side</li>
            <li><strong>Vertical lines (x = k):</strong> Shade left for x &lt; k, right for x &gt; k</li>
            <li><strong>Horizontal lines (y = k):</strong> Shade below for y &lt; k, above for y &gt; k</li>
            <li><strong>Convert forms:</strong> Slope-intercept (y = mx + b) is usually easiest to graph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
