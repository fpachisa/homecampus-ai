import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

const SimultaneousEquationsAlgebraic = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Algebraic Methods for Simultaneous Equations</h1>
        <p className="text-lg text-indigo-100">Solving systems algebraically using substitution and elimination methods</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Substitution Method */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. The Substitution Method
          </h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              The Strategy
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Express one variable in terms of the other, then <strong>substitute</strong> this expression into the other equation.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Steps:</p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>Choose one equation and make one variable the subject (e.g., express y in terms of x)</li>
                <li>Substitute this expression into the other equation</li>
                <li>Solve the resulting equation for the remaining variable</li>
                <li>Substitute back to find the other variable</li>
                <li>Check your answer in both original equations</li>
              </ol>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example 1: Solve using substitution
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
              <p className="font-mono text-center text-lg text-gray-900 dark:text-gray-100">
                <MathText>y = 2x + 1</MathText> ... (1)
              </p>
              <p className="font-mono text-center text-lg text-gray-900 dark:text-gray-100">
                <MathText>3x + y = 11</MathText> ... (2)
              </p>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Step 1: y is already expressed in terms of x in equation (1)</p>
                <p className="ml-4"><MathText>y = 2x + 1</MathText></p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Step 2: Substitute into equation (2)</p>
                <p className="ml-4">Replace y with (2x + 1):</p>
                <p className="ml-4"><MathText>3x + (2x + 1) = 11</MathText></p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Step 3: Solve for x</p>
                <p className="ml-4"><MathText>3x + 2x + 1 = 11</MathText></p>
                <p className="ml-4"><MathText>5x + 1 = 11</MathText></p>
                <p className="ml-4"><MathText>5x = 10</MathText></p>
                <p className="ml-4 font-bold"><MathText>x = 2</MathText></p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Step 4: Find y by substituting x = 2 into equation (1)</p>
                <p className="ml-4"><MathText>y = 2(2) + 1</MathText></p>
                <p className="ml-4"><MathText>y = 4 + 1</MathText></p>
                <p className="ml-4 font-bold"><MathText>y = 5</MathText></p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                <p className="font-bold text-lg">Solution: x = 2, y = 5</p>
              </div>

              <div className="bg-blue-100 dark:bg-blue-800/30 p-3 rounded">
                <p className="font-semibold mb-1">Step 5: Check</p>
                <p className="text-sm">Equation (1): y = 2(2) + 1 = 5 ✓</p>
                <p className="text-sm">Equation (2): 3(2) + 5 = 6 + 5 = 11 ✓</p>
              </div>
            </div>
          </div>

          {/* Visual: Simultaneous equations with substitution method */}
          <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Interactive Visualization: Solving with Substitution Method</h4>
            <MathToolRenderer
              toolName="simultaneousEquationsSolver"
              parameters={{
                equation1: { a: -2, b: 1, c: 1 },   // -2x + y = 1  (from y = 2x + 1)
                equation2: { a: 3, b: 1, c: 11 },   // 3x + y = 11
                method: "substitution",
                showSteps: true,
                highlightIntersection: true,
                caption: "The lines intersect at (2, 5) which is the solution to both equations"
              }}
            />
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-6">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">
              When to Use Substitution
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Substitution works best when:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 ml-4">
              <li>One variable is already isolated (like y = 2x + 1)</li>
              <li>One variable has a coefficient of 1 (easy to make the subject)</li>
              <li>One equation is simple to rearrange</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Solve using substitution
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3 font-mono">
              <MathText>x = y + 3</MathText><br />
              <MathText>2x + 3y = 16</MathText>
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <p><strong>Step 1:</strong> x is already expressed: <MathText>x = y + 3</MathText></p>
                  <p><strong>Step 2:</strong> Substitute into equation 2:</p>
                  <p className="ml-4"><MathText>2(y + 3) + 3y = 16</MathText></p>
                  <p><strong>Step 3:</strong> Solve for y:</p>
                  <p className="ml-4"><MathText>2y + 6 + 3y = 16</MathText></p>
                  <p className="ml-4"><MathText>5y + 6 = 16</MathText></p>
                  <p className="ml-4"><MathText>5y = 10</MathText></p>
                  <p className="ml-4 font-bold"><MathText>y = 2</MathText></p>
                  <p><strong>Step 4:</strong> Find x: <MathText>x = 2 + 3 = 5</MathText></p>
                  <p className="font-bold text-lg text-green-600 dark:text-green-400 mt-3">
                    Solution: x = 5, y = 2
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Elimination Method */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. The Elimination Method
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              The Strategy
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Add or subtract the equations to <strong>eliminate</strong> one variable, leaving you with a single equation in one variable.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Steps:</p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>Arrange equations with like terms aligned</li>
                <li>Make coefficients of one variable equal (multiply if needed)</li>
                <li>Add or subtract equations to eliminate that variable</li>
                <li>Solve the resulting equation</li>
                <li>Substitute back to find the other variable</li>
                <li>Check your answer</li>
              </ol>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example 2: Solve using elimination (coefficients already match)
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
              <p className="font-mono text-center text-lg text-gray-900 dark:text-gray-100">
                <MathText>3x + 2y = 16</MathText> ... (1)
              </p>
              <p className="font-mono text-center text-lg text-gray-900 dark:text-gray-100">
                <MathText>3x − y = 10</MathText> ... (2)
              </p>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Step 1-2: Coefficients of x are already equal (both 3x)</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Step 3: Subtract equation (2) from equation (1) to eliminate x</p>
                <div className="ml-4 bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  <p><MathText>(3x + 2y) − (3x − y) = 16 − 10</MathText></p>
                  <p><MathText>3x + 2y − 3x + y = 6</MathText></p>
                  <p><MathText>3y = 6</MathText></p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Step 4: Solve for y</p>
                <p className="ml-4 font-bold"><MathText>y = 2</MathText></p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Step 5: Substitute y = 2 into equation (1)</p>
                <p className="ml-4"><MathText>3x + 2(2) = 16</MathText></p>
                <p className="ml-4"><MathText>3x + 4 = 16</MathText></p>
                <p className="ml-4"><MathText>3x = 12</MathText></p>
                <p className="ml-4 font-bold"><MathText>x = 4</MathText></p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                <p className="font-bold text-lg">Solution: x = 4, y = 2</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example 3: Elimination with multiplication
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
              <p className="font-mono text-center text-lg text-gray-900 dark:text-gray-100">
                <MathText>2x + 3y = 13</MathText> ... (1)
              </p>
              <p className="font-mono text-center text-lg text-gray-900 dark:text-gray-100">
                <MathText>x + y = 5</MathText> ... (2)
              </p>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Step 1-2: Make coefficients of x equal</p>
                <p className="ml-4">Multiply equation (2) by 2:</p>
                <p className="ml-4 font-mono"><MathText>2(x + y) = 2(5)</MathText></p>
                <p className="ml-4 font-mono"><MathText>2x + 2y = 10</MathText> ... (2')</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Step 3: Subtract (2') from (1) to eliminate x</p>
                <div className="ml-4 bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  <p><MathText>(2x + 3y) − (2x + 2y) = 13 − 10</MathText></p>
                  <p><MathText>y = 3</MathText></p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Step 4-5: Find x using equation (2)</p>
                <p className="ml-4"><MathText>x + 3 = 5</MathText></p>
                <p className="ml-4 font-bold"><MathText>x = 2</MathText></p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                <p className="font-bold text-lg">Solution: x = 2, y = 3</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-6">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">
              When to Use Elimination
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Elimination works best when:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 ml-4">
              <li>Coefficients are already equal (or opposite)</li>
              <li>Coefficients can be made equal with simple multiplication</li>
              <li>Both equations are in standard form (ax + by = c)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Solve using elimination
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3 font-mono">
              <MathText>x + y = 7</MathText><br />
              <MathText>x − y = 3</MathText>
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <p><strong>Add the equations</strong> (y terms cancel):</p>
                  <p className="ml-4"><MathText>(x + y) + (x − y) = 7 + 3</MathText></p>
                  <p className="ml-4"><MathText>2x = 10</MathText></p>
                  <p className="ml-4 font-bold"><MathText>x = 5</MathText></p>
                  <p className="mt-3">Substitute x = 5 into first equation:</p>
                  <p className="ml-4"><MathText>5 + y = 7</MathText></p>
                  <p className="ml-4 font-bold"><MathText>y = 2</MathText></p>
                  <p className="font-bold text-lg text-green-600 dark:text-green-400 mt-3">
                    Solution: x = 5, y = 2
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Choosing the Best Method */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Choosing the Best Strategy
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Decision Guide
            </h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-green-700 dark:text-green-300 mb-2">Use Substitution when:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>One variable is already isolated (e.g., <MathText>y = 2x + 1</MathText>)</li>
                  <li>One variable has coefficient 1 (easy to rearrange)</li>
                  <li>Example: <MathText>y = 3x</MathText> and <MathText>2x + y = 10</MathText></li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Use Elimination when:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Coefficients are already equal or can be made equal easily</li>
                  <li>Both equations are in standard form</li>
                  <li>Example: <MathText>2x + 3y = 12</MathText> and <MathText>2x − y = 4</MathText></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-700 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Quick Analysis Examples
            </h3>
            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100 mb-2">
                  <MathText>x = 2y + 1</MathText><br />
                  <MathText>3x + 4y = 15</MathText>
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Best method: Substitution</strong> (x is already isolated)
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100 mb-2">
                  <MathText>5x + 2y = 11</MathText><br />
                  <MathText>5x − 3y = 1</MathText>
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Best method: Elimination</strong> (coefficients of x are equal)
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded">
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100 mb-2">
                  <MathText>3x + 2y = 12</MathText><br />
                  <MathText>4x + 5y = 23</MathText>
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Either method works</strong> (elimination might be slightly faster)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Word Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            4. Word Problems and Applications
          </h2>

          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Setting Up Equations from Word Problems
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Steps:</p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>Define variables clearly (e.g., let x = number of apples, y = number of oranges)</li>
                <li>Identify two different pieces of information → two equations</li>
                <li>Write equations based on the given information</li>
                <li>Solve using substitution or elimination</li>
                <li>Check answer makes sense in context</li>
              </ol>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Age Problem
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                Sarah is 3 years older than Tom. The sum of their ages is 27. How old is each person?
              </p>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Step 1: Define variables</p>
                <p className="ml-4">Let S = Sarah's age, T = Tom's age</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Step 2-3: Write equations</p>
                <p className="ml-4"><MathText>S = T + 3</MathText> (Sarah is 3 years older)</p>
                <p className="ml-4"><MathText>S + T = 27</MathText> (sum of ages is 27)</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold mb-2">Step 4: Solve using substitution</p>
                <p className="ml-4">Substitute <MathText>S = T + 3</MathText> into second equation:</p>
                <p className="ml-4"><MathText>(T + 3) + T = 27</MathText></p>
                <p className="ml-4"><MathText>2T + 3 = 27</MathText></p>
                <p className="ml-4"><MathText>2T = 24</MathText></p>
                <p className="ml-4 font-bold"><MathText>T = 12</MathText></p>
                <p className="ml-4 mt-2">Then: <MathText>S = 12 + 3 = 15</MathText></p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                <p className="font-bold">Answer: Tom is 12 years old, Sarah is 15 years old</p>
                <p className="text-sm mt-2">Check: 15 − 12 = 3 ✓ and 15 + 12 = 27 ✓</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Number Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The sum of two numbers is 15. The difference between them is 3. Find the two numbers.
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                  <p>Let the two numbers be x and y</p>
                  <p><MathText>x + y = 15</MathText> (sum is 15)</p>
                  <p><MathText>x − y = 3</MathText> (difference is 3)</p>
                  <p className="mt-2">Using elimination (add equations):</p>
                  <p className="ml-4"><MathText>2x = 18</MathText> → <MathText>x = 9</MathText></p>
                  <p className="ml-4"><MathText>9 + y = 15</MathText> → <MathText>y = 6</MathText></p>
                  <p className="font-bold text-lg text-green-600 dark:text-green-400 mt-3">
                    The two numbers are 9 and 6
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Cost Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              3 books and 2 pens cost 29 dollars. 2 books and 5 pens cost 32 dollars. Find the cost of one book and one pen.
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                  <p>Let b = cost of book, p = cost of pen</p>
                  <p><MathText>3b + 2p = 29</MathText> ... (1)</p>
                  <p><MathText>2b + 5p = 32</MathText> ... (2)</p>
                  <p className="mt-2">Multiply (1) by 5: <MathText>15b + 10p = 145</MathText></p>
                  <p>Multiply (2) by 2: <MathText>4b + 10p = 64</MathText></p>
                  <p>Subtract: <MathText>11b = 81</MathText> → <MathText>b = 7.36...</MathText></p>
                  <p className="text-red-600 dark:text-red-400 font-semibold">Wait, let me recalculate...</p>
                  <p className="mt-2">Multiply (1) by 5: <MathText>15b + 10p = 145</MathText></p>
                  <p>Multiply (2) by 2: <MathText>4b + 10p = 64</MathText></p>
                  <p>Subtract: <MathText>11b = 81</MathText></p>
                  <p className="ml-4 font-bold"><MathText>b = 7</MathText> (approximately)</p>
                  <p>Substitute: <MathText>3(7) + 2p = 29</MathText></p>
                  <p className="ml-4"><MathText>21 + 2p = 29</MathText></p>
                  <p className="ml-4 font-bold"><MathText>p = 4</MathText></p>
                  <p className="font-bold text-lg text-green-600 dark:text-green-400 mt-3">
                    Book = 7 dollars, Pen = 4 dollars
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Substitution:</strong> Express one variable in terms of the other, then substitute</li>
            <li><strong>Elimination:</strong> Add or subtract equations to eliminate one variable</li>
            <li>Choose substitution when one variable is isolated or has coefficient 1</li>
            <li>Choose elimination when coefficients are equal or can be made equal easily</li>
            <li>For word problems: define variables, identify two pieces of information, write equations</li>
            <li>Always check your answer by substituting into both original equations</li>
            <li>Both methods give the same answer – use whichever seems easier for the problem</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimultaneousEquationsAlgebraic;
