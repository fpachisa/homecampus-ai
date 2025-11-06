import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

const SimultaneousEquationsIntro = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-600 dark:to-purple-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Introduction to Simultaneous Equations</h1>
        <p className="text-lg text-pink-100">Understanding systems of equations and the graphical solution method</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What are Simultaneous Equations? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. What are Simultaneous Equations?
          </h2>

          <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Two Conditions, One Solution
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Simultaneous equations</strong> are two (or more) equations that must be satisfied at the same time. We need to find values of x and y that make <em>both</em> equations true.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center font-mono text-lg text-gray-900 dark:text-gray-100 mb-2">
                Example of a system:
              </p>
              <p className="text-center font-mono text-xl text-gray-900 dark:text-gray-100">
                <MathText>x + y = 5</MathText>
              </p>
              <p className="text-center font-mono text-xl text-gray-900 dark:text-gray-100">
                <MathText>x − y = 1</MathText>
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-700 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Why "Simultaneous"?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The word "simultaneous" means "at the same time". We need values that satisfy both equations simultaneously (at once).
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                For <MathText>x + y = 5</MathText> and <MathText>x − y = 1</MathText>:
              </p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>• If x = 3 and y = 2: First equation: 3 + 2 = 5 ✓ | Second equation: 3 − 2 = 1 ✓</li>
                <li>• Both equations are satisfied, so (3, 2) is the solution!</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Real-World Example
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Problem:</strong> Ali buys 2 pens and 3 pencils for 11 dollars. Ben buys 4 pens and 1 pencil for 13 dollars. Find the price of one pen and one pencil.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Let p = price of pen, c = price of pencil
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                <p className="font-mono text-gray-900 dark:text-gray-100"><MathText>2p + 3c = 11</MathText> (Ali's purchase)</p>
                <p className="font-mono text-gray-900 dark:text-gray-100"><MathText>4p + c = 13</MathText> (Ben's purchase)</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                We need values of p and c that satisfy both equations – these are simultaneous equations!
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Graphical Solution Method */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. The Graphical Solution Method
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Intersection = Solution
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we graph both equations on the same axes, the point where the lines intersect is the solution!
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Why Does This Work?</p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Each line represents all points (x, y) that satisfy one equation</li>
                <li>• The intersection point lies on BOTH lines</li>
                <li>• Therefore, it satisfies BOTH equations</li>
                <li>• This is exactly what we're looking for!</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Solve graphically
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <p className="font-mono text-center text-lg text-gray-900 dark:text-gray-100 mb-1">
                <MathText>y = x + 1</MathText>
              </p>
              <p className="font-mono text-center text-lg text-gray-900 dark:text-gray-100">
                <MathText>y = −x + 5</MathText>
              </p>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-semibold mb-2">Step 1: Graph first equation <MathText>y = x + 1</MathText></p>
                <p className="text-sm ml-4">• y-intercept = 1, gradient = 1</p>
                <p className="text-sm ml-4">• Points: (0, 1), (1, 2), (2, 3)</p>
              </div>

              <div>
                <p className="font-semibold mb-2">Step 2: Graph second equation <MathText>y = −x + 5</MathText></p>
                <p className="text-sm ml-4">• y-intercept = 5, gradient = −1</p>
                <p className="text-sm ml-4">• Points: (0, 5), (1, 4), (2, 3)</p>
              </div>

              <div>
                <p className="font-semibold mb-2">Step 3: Find intersection</p>
                <p className="text-sm ml-4">• Lines meet at point (2, 3)</p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                <p className="font-bold text-lg">Solution: x = 2, y = 3</p>
              </div>
            </div>
          </div>

          {/* Visual: Graphical solution showing intersection */}
          <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Interactive Visualization: Lines Intersecting at (2, 3)</h4>
            <MathToolRenderer
              toolName="simultaneousEquationsSolver"
              parameters={{
                equation1: { a: 1, b: -1, c: -1 },  // x - y = -1 → y = x + 1
                equation2: { a: 1, b: 1, c: 5 },     // x + y = 5 → y = -x + 5
                method: "graphical",
                highlightIntersection: true,
                caption: "The two lines intersect at (2, 3), which satisfies both equations"
              }}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-700 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Steps for Graphical Method
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li className="font-semibold">Rearrange both equations into <MathText>y = mx + c</MathText> form (if needed)</li>
              <li className="font-semibold">Graph the first equation on a coordinate plane</li>
              <li className="font-semibold">Graph the second equation on the same axes</li>
              <li className="font-semibold">Find the intersection point – read off the (x, y) coordinates</li>
              <li className="font-semibold">Check your answer by substituting into both original equations</li>
            </ol>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: What is the intersection point?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Two lines are graphed: <MathText>y = 2x + 1</MathText> and <MathText>y = −x + 7</MathText>. They intersect at a point. By checking x = 2, determine if this is the intersection.
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>For x = 2:</p>
                  <p className="ml-4">Line 1: y = 2(2) + 1 = 5</p>
                  <p className="ml-4">Line 2: y = −(2) + 7 = 5</p>
                  <p className="font-bold text-lg text-green-600 dark:text-green-400 mt-3">
                    Both give y = 5, so intersection is at (2, 5) ✓
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Special Cases */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Special Cases
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded border-2 border-red-400 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-3 text-lg">
                No Solution (Parallel Lines)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                When two lines are parallel, they never intersect – there is no solution.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100"><MathText>y = 2x + 3</MathText></p>
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100"><MathText>y = 2x − 1</MathText></p>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Same gradient (2), different intercepts → parallel → no solution
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded border-2 border-green-400 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-3 text-lg">
                Infinite Solutions (Same Line)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                When both equations represent the same line, every point on the line is a solution.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100"><MathText>y = 3x + 2</MathText></p>
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100"><MathText>2y = 6x + 4</MathText></p>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Second equation is just first × 2 → same line → infinite solutions
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded border-l-4 border-blue-500">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Summary of Cases
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold">Lines intersect at one point</p>
                  <p className="text-sm">→ Unique solution (most common case)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-xl">✗</span>
                <div>
                  <p className="font-semibold">Lines are parallel</p>
                  <p className="text-sm">→ No solution</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-xl">∞</span>
                <div>
                  <p className="font-semibold">Lines are identical</p>
                  <p className="text-sm">→ Infinitely many solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Checking Solutions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            4. Checking Your Solution
          </h2>

          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Always Verify!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Graphical solutions can be imprecise if you don't read the coordinates carefully. Always check by substituting your answer into BOTH original equations.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Check if (3, 4) is the solution to:
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
              <p className="font-mono text-center text-gray-900 dark:text-gray-100"><MathText>x + y = 7</MathText></p>
              <p className="font-mono text-center text-gray-900 dark:text-gray-100"><MathText>2x − y = 2</MathText></p>
            </div>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Check Equation 1: <MathText>x + y = 7</MathText></p>
                <p>Substitute x = 3, y = 4:</p>
                <p>3 + 4 = 7 ✓ <span className="text-green-600 dark:text-green-400">Correct!</span></p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Check Equation 2: <MathText>2x − y = 2</MathText></p>
                <p>Substitute x = 3, y = 4:</p>
                <p>2(3) − 4 = 6 − 4 = 2 ✓ <span className="text-green-600 dark:text-green-400">Correct!</span></p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                <p className="font-bold">Both equations satisfied → (3, 4) is the correct solution!</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Check if (2, 5) solves these equations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3 font-mono">
              <MathText>x + 2y = 12</MathText><br />
              <MathText>3x − y = 1</MathText>
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold">Equation 1: <MathText>x + 2y = 12</MathText></p>
                    <p>2 + 2(5) = 2 + 10 = 12 ✓</p>
                  </div>
                  <div>
                    <p className="font-semibold">Equation 2: <MathText>3x − y = 1</MathText></p>
                    <p>3(2) − 5 = 6 − 5 = 1 ✓</p>
                  </div>
                  <p className="font-bold text-lg text-green-600 dark:text-green-400">
                    Yes! (2, 5) is the solution.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Check if (1, 3) solves these equations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3 font-mono">
              <MathText>2x + y = 5</MathText><br />
              <MathText>x − y = 2</MathText>
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold">Equation 1: <MathText>2x + y = 5</MathText></p>
                    <p>2(1) + 3 = 2 + 3 = 5 ✓</p>
                  </div>
                  <div>
                    <p className="font-semibold">Equation 2: <MathText>x − y = 2</MathText></p>
                    <p>1 − 3 = −2 ✗ <span className="text-red-600 dark:text-red-400">(Not equal to 2!)</span></p>
                  </div>
                  <p className="font-bold text-lg text-red-600 dark:text-red-400">
                    No! (1, 3) is NOT the solution – it doesn't satisfy the second equation.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-pink-50 dark:bg-pink-900/30 border-l-4 border-pink-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Simultaneous equations are two equations that must be satisfied at the same time</li>
            <li>Graphical method: graph both lines, find the intersection point</li>
            <li>The intersection point gives the values of x and y that satisfy BOTH equations</li>
            <li>Three possible outcomes: one solution (lines intersect), no solution (parallel), infinite solutions (same line)</li>
            <li>Always check your answer by substituting into both original equations</li>
            <li>Graphical solutions are good for visualization but may be imprecise – algebraic methods are more accurate</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimultaneousEquationsIntro;
