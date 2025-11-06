import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function SystemsOfInequalities() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 dark:from-rose-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Systems of Linear Inequalities</h1>
        <p className="mt-2 text-rose-100">Finding feasible regions where multiple constraints overlap</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Introduction */}
        <section className="mb-8">
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
              What is a System of Inequalities?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A <strong>system of inequalities</strong> is a set of two or more inequalities with the same variables. The solution is the region where <strong>ALL</strong> inequalities are satisfied simultaneously.
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded">
              <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Example System:</p>
              <p className="text-gray-700 dark:text-gray-300 font-mono">
                y ≤ x + 2<br />
                y &gt; −x + 1
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                The solution includes only points that satisfy <strong>BOTH</strong> inequalities at the same time.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Graphing Systems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Graphing Systems of Inequalities
          </h2>

          <div className="mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Step-by-Step Process
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Graph each inequality separately</strong> (boundary line + shading)</li>
                <li><strong>Identify the overlapping region</strong> (where shadings intersect)</li>
                <li><strong>The feasible region</strong> is where ALL shadings overlap</li>
                <li><strong>Boundary segments</strong> within the feasible region follow the line style (solid/dashed) of their inequality</li>
              </ol>
            </div>

            {/* Example 1: Simple System */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Example 1: Simple System with Two Inequalities
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-200 dark:border-green-700 space-y-3">
                <p className="text-gray-700 dark:text-gray-300 font-semibold">System:</p>
                <p className="text-gray-700 dark:text-gray-300 font-mono ml-4">
                  y ≤ x + 2<br />
                  y ≥ −x
                </p>

                <div className="mt-3">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 1: Graph first inequality (y ≤ x + 2)</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 text-sm">
                    • Boundary: y = x + 2 (solid line)<br />
                    • Shade below the line
                  </p>
                </div>

                <div className="mt-3">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 2: Graph second inequality (y ≥ −x)</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 text-sm">
                    • Boundary: y = −x (solid line)<br />
                    • Shade above the line
                  </p>
                </div>

                <div className="mt-3">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 3: Find overlap</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 text-sm">
                    The <strong>feasible region</strong> is where both shadings overlap (the darker region on the graph)
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">First inequality: y ≤ x + 2</p>
                  <MathToolRenderer
                    toolName="linearInequalityGrapher"
                    parameters={{
                      coefficientX: -1,
                      coefficientY: 1,
                      constant: 2,
                      inequalityType: "<=",
                      xMin: -4,
                      xMax: 4,
                      yMin: -4,
                      yMax: 4,
                      color: "#3b82f6",
                      shadeOpacity: 0.3
                    }}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Second inequality: y ≥ −x</p>
                  <MathToolRenderer
                    toolName="linearInequalityGrapher"
                    parameters={{
                      coefficientX: 1,
                      coefficientY: 1,
                      constant: 0,
                      inequalityType: ">=",
                      xMin: -4,
                      xMax: 4,
                      yMin: -4,
                      yMax: 4,
                      color: "#10b981",
                      shadeOpacity: 0.3
                    }}
                  />
                </div>
              </div>

              <div className="mt-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-300 dark:border-indigo-700 p-3 rounded">
                <p className="text-sm text-indigo-800 dark:text-indigo-300 font-semibold mb-2">
                  💡 Visualization Tip:
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  In practice, you'd typically draw both inequalities on the SAME graph and look for where the shaded regions overlap. The overlapping area (where both conditions are true) is your solution!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Feasible Regions and Vertices */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Feasible Regions and Vertices
          </h2>

          <div className="mb-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">
                Key Concepts
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Feasible Region:</strong> The area where ALL inequalities in the system are satisfied. This is the solution set.</li>
                <li><strong>Vertices (Corner Points):</strong> The points where boundary lines intersect. These are often crucial in optimization problems.</li>
                <li><strong>Bounded vs Unbounded:</strong> A region is bounded if it's enclosed (finite area), unbounded if it extends infinitely in some direction.</li>
              </ul>
            </div>

            {/* Example 2: Finding Vertices */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 2: System with Three Inequalities
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-3">
                <p className="text-gray-700 dark:text-gray-300 font-semibold">System:</p>
                <p className="text-gray-700 dark:text-gray-300 font-mono ml-4">
                  x ≥ 0<br />
                  y ≥ 0<br />
                  x + y ≤ 4
                </p>

                <div className="mt-3">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Analysis:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li>x ≥ 0: Right half-plane (shade right of y-axis)</li>
                    <li>y ≥ 0: Upper half-plane (shade above x-axis)</li>
                    <li>x + y ≤ 4: Below the line x + y = 4</li>
                  </ul>
                </div>

                <div className="mt-3">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Feasible Region:</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 text-sm">
                    A <strong>triangle</strong> in the first quadrant with vertices at:
                  </p>
                  <ul className="list-disc list-inside ml-8 text-gray-700 dark:text-gray-300 text-sm">
                    <li>(0, 0) - origin</li>
                    <li>(4, 0) - where x + y = 4 meets x-axis</li>
                    <li>(0, 4) - where x + y = 4 meets y-axis</li>
                  </ul>
                </div>

                <div className="mt-3">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Type:</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 text-sm">
                    <strong>Bounded</strong> - The feasible region is a finite triangle
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Visual: Combined system showing triangular feasible region</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <MathToolRenderer
                    toolName="linearInequalityGrapher"
                    parameters={{
                      coefficientX: 1,
                      coefficientY: 0,
                      constant: 0,
                      inequalityType: ">=",
                      xMin: -1,
                      xMax: 5,
                      yMin: -1,
                      yMax: 5,
                      color: "#3b82f6",
                      shadeOpacity: 0.2,
                      title: "x ≥ 0"
                    }}
                  />
                  <MathToolRenderer
                    toolName="linearInequalityGrapher"
                    parameters={{
                      coefficientX: 0,
                      coefficientY: 1,
                      constant: 0,
                      inequalityType: ">=",
                      xMin: -1,
                      xMax: 5,
                      yMin: -1,
                      yMax: 5,
                      color: "#10b981",
                      shadeOpacity: 0.2,
                      title: "y ≥ 0"
                    }}
                  />
                  <MathToolRenderer
                    toolName="linearInequalityGrapher"
                    parameters={{
                      coefficientX: 1,
                      coefficientY: 1,
                      constant: 4,
                      inequalityType: "<=",
                      xMin: -1,
                      xMax: 5,
                      yMin: -1,
                      yMax: 5,
                      color: "#8b5cf6",
                      shadeOpacity: 0.2,
                      title: "x + y ≤ 4"
                    }}
                  />
                </div>
                <div className="mt-3 bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The <strong>feasible region</strong> is the triangular area in the first quadrant where all three shaded regions overlap (vertices at (0,0), (4,0), and (0,4)).
                  </p>
                </div>
              </div>
            </div>

            {/* Example 3: Unbounded Region */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 3: Unbounded Feasible Region
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-3">
                <p className="text-gray-700 dark:text-gray-300 font-semibold">System:</p>
                <p className="text-gray-700 dark:text-gray-300 font-mono ml-4">
                  x ≥ 1<br />
                  y ≥ x + 1
                </p>

                <div className="mt-3">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Analysis:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li>x ≥ 1: Vertical line at x = 1, shade right</li>
                    <li>y ≥ x + 1: Line with slope 1, y-intercept 1, shade above</li>
                  </ul>
                </div>

                <div className="mt-3">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Feasible Region:</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 text-sm">
                    The region extends infinitely upward and to the right.<br />
                    <strong>Vertex at (1, 2)</strong> - where x = 1 meets y = x + 1
                  </p>
                </div>

                <div className="mt-3">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Type:</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 text-sm">
                    <strong>Unbounded</strong> - The feasible region extends infinitely
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <MathToolRenderer
                    toolName="linearInequalityGrapher"
                    parameters={{
                      coefficientX: 1,
                      coefficientY: 0,
                      constant: 1,
                      inequalityType: ">=",
                      xMin: -1,
                      xMax: 5,
                      yMin: -1,
                      yMax: 7,
                      color: "#3b82f6",
                      shadeOpacity: 0.25,
                      title: "x ≥ 1"
                    }}
                  />
                  <MathToolRenderer
                    toolName="linearInequalityGrapher"
                    parameters={{
                      coefficientX: -1,
                      coefficientY: 1,
                      constant: 1,
                      inequalityType: ">=",
                      xMin: -1,
                      xMax: 5,
                      yMin: -1,
                      yMax: 7,
                      color: "#10b981",
                      shadeOpacity: 0.25,
                      title: "y ≥ x + 1"
                    }}
                  />
                </div>
                <div className="mt-3 bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The feasible region (where both shaded areas overlap) extends infinitely up and to the right, with a vertex at (1, 2).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Finding Vertices Algebraically */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Finding Vertices Algebraically
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To find exact coordinates of vertices (corner points), solve the system of equations formed by pairs of boundary lines.
            </p>

            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-teal-800 dark:text-teal-300 mb-3">
                Process for Finding Vertices
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Identify which boundary lines form the corners of the feasible region</li>
                <li>Convert each pair of inequalities to equations (replace ≤, ≥, etc. with =)</li>
                <li>Solve the system of two equations (substitution or elimination)</li>
                <li>Check if the point is within the feasible region (satisfies all inequalities)</li>
              </ol>
            </div>

            {/* Example */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 4: Finding All Vertices
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-3">
                <p className="text-gray-700 dark:text-gray-300 font-semibold">System:</p>
                <p className="text-gray-700 dark:text-gray-300 font-mono ml-4">
                  x ≥ 0<br />
                  y ≥ 0<br />
                  2x + y ≤ 6<br />
                  x + 2y ≤ 6
                </p>

                <div className="mt-3">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Potential vertices (boundary intersections):</p>
                </div>

                <div className="ml-4 space-y-3">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Vertex 1: x = 0 and y = 0</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm ml-3">
                      → <strong>(0, 0)</strong> ✓ (origin)
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Vertex 2: x = 0 and 2x + y = 6</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm ml-3">
                      2(0) + y = 6 → y = 6<br />
                      Check: 0 + 2(6) = 12 ≤ 6? <strong className="text-red-600">✗ NO</strong><br />
                      This point is outside the feasible region
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Vertex 3: x = 0 and x + 2y = 6</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm ml-3">
                      0 + 2y = 6 → y = 3<br />
                      Check: 2(0) + 3 = 3 ≤ 6? <strong className="text-green-600">✓ YES</strong><br />
                      → <strong>(0, 3)</strong> ✓
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Vertex 4: y = 0 and 2x + y = 6</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm ml-3">
                      2x + 0 = 6 → x = 3<br />
                      Check: 3 + 2(0) = 3 ≤ 6? <strong className="text-green-600">✓ YES</strong><br />
                      → <strong>(3, 0)</strong> ✓
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Vertex 5: 2x + y = 6 and x + 2y = 6</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm ml-3">
                      Solve system:<br />
                      2x + y = 6 → y = 6 − 2x<br />
                      x + 2(6 − 2x) = 6<br />
                      x + 12 − 4x = 6<br />
                      −3x = −6 → x = 2<br />
                      y = 6 − 2(2) = 2<br />
                      → <strong>(2, 2)</strong> ✓
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Final vertices:</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4">
                    (0, 0), (3, 0), (2, 2), (0, 3)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Special Cases */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            4. Special Cases
          </h2>

          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* No Solution */}
              <div className="border border-gray-300 dark:border-gray-700 p-4 rounded">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">No Solution</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  When constraints contradict each other, there's no region that satisfies all inequalities.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-mono mb-2">
                  Example:<br />
                  y &gt; x + 2<br />
                  y &lt; x − 1
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  These never overlap (parallel lines, incompatible shading)
                </p>
              </div>

              {/* Entire plane */}
              <div className="border border-gray-300 dark:border-gray-700 p-4 rounded">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Entire Plane</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  When all constraints are automatically satisfied, every point is in the solution.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-mono mb-2">
                  Example:<br />
                  x &gt; −1000<br />
                  y &gt; −1000
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Almost every reasonable point satisfies this
                </p>
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
              Practice 1: Simple System
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Graph the system and describe the feasible region:<br />
              y ≤ 2x<br />
              y ≥ x − 3
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
                  • y ≤ 2x: Solid line, shade below<br />
                  • y ≥ x − 3: Solid line, shade above<br /><br />
                  <strong>Feasible region:</strong> The wedge-shaped area between the two lines (unbounded, extends infinitely to the right)
                </p>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Rectangular Region
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              What system of inequalities creates a rectangle with corners at (1,1), (1,4), (5,1), and (5,4)?
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
                  <strong>System:</strong><br />
                  x ≥ 1 (left boundary)<br />
                  x ≤ 5 (right boundary)<br />
                  y ≥ 1 (bottom boundary)<br />
                  y ≤ 4 (top boundary)<br /><br />
                  All boundaries are solid lines (≤ or ≥), creating a closed rectangle.
                </p>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Finding Vertices
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Find all vertices of the feasible region:<br />
              x ≥ 0, y ≥ 0<br />
              x + y ≤ 5<br />
              2x + y ≤ 8
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Vertices:</strong><br />
                  1. (0, 0) - origin<br />
                  2. (4, 0) - where 2x + y = 8 meets x-axis<br />
                  3. (3, 2) - intersection of x + y = 5 and 2x + y = 8<br />
                  4. (0, 5) - where x + y = 5 meets y-axis<br /><br />

                  <strong>How to find (3, 2):</strong><br />
                  Solve: x + y = 5 and 2x + y = 8<br />
                  Subtract first from second: x = 3<br />
                  Substitute: 3 + y = 5 → y = 2
                </p>
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
            <li><strong>System solution:</strong> The feasible region where ALL inequalities are satisfied simultaneously</li>
            <li><strong>Graph method:</strong> Draw all inequalities on same graph, find overlapping shaded area</li>
            <li><strong>Vertices:</strong> Corner points where boundary lines intersect - found by solving pairs of equations</li>
            <li><strong>Bounded region:</strong> Enclosed area (finite); Unbounded region: Extends infinitely</li>
            <li><strong>Check vertices:</strong> Always verify that intersection points satisfy all inequalities</li>
            <li><strong>Applications:</strong> Systems model multiple constraints in optimization problems (coming next!)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
