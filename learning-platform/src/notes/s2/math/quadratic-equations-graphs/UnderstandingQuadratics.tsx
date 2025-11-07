import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function UnderstandingQuadratics() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Understanding Quadratic Equations</h1>
        <p className="mt-2 text-purple-100">Learn to recognize and work with quadratic equations</p>
      </div>

      <div className="bg-white dark:bg-gray-800 px-6 pb-6 rounded-b-lg">

        {/* Section 1: What is a Quadratic Equation? */}
        <section className="mb-8 mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What is a Quadratic Equation?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>quadratic equation</strong> is an equation where the highest power of the variable is 2 (squared).
              The standard form looks like this:
            </p>

            {/* Visual: Standard Form Box */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 border-2 border-purple-400 dark:border-purple-500 p-6 rounded-lg mb-6">
              <div className="text-center">
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-2 font-semibold">STANDARD FORM</p>
                <div className="text-3xl font-bold text-purple-900 dark:text-purple-100 mb-4">
                  <MathText>{'ax² + bx + c = 0'}</MathText>
                </div>
                <p className="text-purple-700 dark:text-purple-300 text-sm">where a ≠ 0</p>
              </div>
            </div>

            {/* Visual: Coefficient Labels Diagram */}
            <div className="bg-gray-50 dark:bg-gray-900/50 border-2 border-gray-300 dark:border-gray-600 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
                Understanding the Parts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Coefficient a */}
                <div className="bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-400 dark:border-blue-500 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                    <MathText>a</MathText>
                  </div>
                  <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">
                    Quadratic Coefficient
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    Multiplies x²<br/>Must not be zero
                  </p>
                </div>

                {/* Coefficient b */}
                <div className="bg-green-50 dark:bg-green-900/30 border-2 border-green-400 dark:border-green-500 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
                    <MathText>b</MathText>
                  </div>
                  <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">
                    Linear Coefficient
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    Multiplies x<br/>Can be zero
                  </p>
                </div>

                {/* Coefficient c */}
                <div className="bg-orange-50 dark:bg-orange-900/30 border-2 border-orange-400 dark:border-orange-500 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-2">
                    <MathText>c</MathText>
                  </div>
                  <p className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-1">
                    Constant Term
                  </p>
                  <p className="text-xs text-orange-600 dark:text-orange-400">
                    No variable<br/>Can be zero
                  </p>
                </div>
              </div>
            </div>

            {/* Visual: Examples Table */}
            <div className="overflow-x-auto mb-6">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Examples with Coefficients Identified
              </h3>
              <table className="min-w-full border-2 border-gray-300 dark:border-gray-600">
                <thead className="bg-gray-200 dark:bg-gray-700">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">Equation</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-blue-700 dark:text-blue-300">a</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-green-700 dark:text-green-300">b</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-orange-700 dark:text-orange-300">c</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      <MathText>x² + 5x + 6 = 0</MathText>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-blue-700 dark:text-blue-300 font-semibold">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-700 dark:text-green-300 font-semibold">5</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-orange-700 dark:text-orange-300 font-semibold">6</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      <MathText>2x² - 3x + 1 = 0</MathText>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-blue-700 dark:text-blue-300 font-semibold">2</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-700 dark:text-green-300 font-semibold">−3</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-orange-700 dark:text-orange-300 font-semibold">1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      <MathText>x² - 4 = 0</MathText>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-blue-700 dark:text-blue-300 font-semibold">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-700 dark:text-green-300 font-semibold">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-orange-700 dark:text-orange-300 font-semibold">−4</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      <MathText>3x² + 7x = 0</MathText>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-blue-700 dark:text-blue-300 font-semibold">3</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-700 dark:text-green-300 font-semibold">7</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-orange-700 dark:text-orange-300 font-semibold">0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Visual: Quadratic vs Linear Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border-2 border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">✓</span>
                  <h3 className="font-semibold text-green-800 dark:text-green-300">These ARE Quadratic</h3>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><MathText>x² + 2x - 3 = 0</MathText></li>
                  <li><MathText>5x² = 20</MathText></li>
                  <li><MathText>x² - x = 6</MathText></li>
                  <li><MathText>2x² + 1 = 0</MathText></li>
                </ul>
                <p className="text-xs text-green-700 dark:text-green-400 mt-3 italic">
                  All have x² term with non-zero coefficient
                </p>
              </div>

              <div className="border-2 border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">✗</span>
                  <h3 className="font-semibold text-red-800 dark:text-red-300">These are NOT Quadratic</h3>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><MathText>2x + 3 = 0</MathText> <span className="text-xs text-red-600 dark:text-red-400">(linear)</span></li>
                  <li><MathText>x³ - 2x = 0</MathText> <span className="text-xs text-red-600 dark:text-red-400">(cubic)</span></li>
                  <li><MathText>5 = x</MathText> <span className="text-xs text-red-600 dark:text-red-400">(linear)</span></li>
                  <li><MathText>{'x⁴ + x² = 0'}</MathText> <span className="text-xs text-red-600 dark:text-red-400">(quartic)</span></li>
                </ul>
                <p className="text-xs text-red-700 dark:text-red-400 mt-3 italic">
                  No x² term OR highest power is not 2
                </p>
              </div>
            </div>
          </div>

          {/* Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example 1: Identifying Quadratic Equations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Is <MathText>3x² + 2x - 5 = 0</MathText> a quadratic equation? If yes, identify a, b, and c.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Solution:</p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Check for x² term → Yes, 3x² is present</p>
                <p><strong>Step 2:</strong> Check that coefficient of x² is not zero → a = 3 ≠ 0 ✓</p>
                <p><strong>Step 3:</strong> Identify coefficients:</p>
                <div className="ml-6 mt-2 space-y-1">
                  <p className="text-blue-700 dark:text-blue-300">• a = 3 (coefficient of x²)</p>
                  <p className="text-green-700 dark:text-green-300">• b = 2 (coefficient of x)</p>
                  <p className="text-orange-700 dark:text-orange-300">• c = −5 (constant term)</p>
                </div>
                <p className="mt-3 font-semibold text-green-700 dark:text-green-300">✓ Yes, this is a quadratic equation</p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Identify the Coefficients
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              For the equation <MathText>5x² - 8x + 3 = 0</MathText>, identify a, b, and c.
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
                  <p>Comparing <MathText>5x² - 8x + 3 = 0</MathText> with <MathText>ax² + bx + c = 0</MathText>:</p>
                  <div className="ml-4 mt-2 space-y-1">
                    <p className="text-blue-700 dark:text-blue-300 font-semibold">a = 5</p>
                    <p className="text-green-700 dark:text-green-300 font-semibold">b = −8</p>
                    <p className="text-orange-700 dark:text-orange-300 font-semibold">c = 3</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Rearranging to Standard Form */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Rearranging to Standard Form
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sometimes quadratic equations aren't in standard form. We need to rearrange them by moving all terms to one side.
            </p>

            {/* Visual: Step-by-Step Process */}
            <div className="bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border-2 border-indigo-400 dark:border-indigo-500 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-4 text-center">
                Rearrangement Process
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-indigo-600 dark:bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Move all terms to one side (usually left)</p>
                    <p className="text-sm text-indigo-700 dark:text-indigo-400">Make the right side equal to zero</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-600 dark:bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Arrange in descending powers</p>
                    <p className="text-sm text-indigo-700 dark:text-indigo-400">x² terms, then x terms, then constants</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-600 dark:bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Combine like terms</p>
                    <p className="text-sm text-indigo-700 dark:text-indigo-400">Add or subtract similar terms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-600 dark:bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Simplify if possible</p>
                    <p className="text-sm text-indigo-700 dark:text-indigo-400">Divide by common factors if helpful</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 2 - Visual Step by Step */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 2: Rearranging to Standard Form
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Rearrange <MathText>x² + 3x = 4</MathText> into standard form and identify a, b, c.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  {/* Visual flow diagram */}
                  <div className="flex flex-col space-y-2">
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-center">
                      <p className="text-gray-700 dark:text-gray-300 font-mono"><MathText>x² + 3x = 4</MathText></p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Original equation</p>
                    </div>

                    <div className="text-center text-indigo-600 dark:text-indigo-400 text-2xl">↓</div>
                    <p className="text-center text-sm text-indigo-700 dark:text-indigo-400">Subtract 4 from both sides</p>

                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-center">
                      <p className="text-gray-700 dark:text-gray-300 font-mono"><MathText>x² + 3x - 4 = 0</MathText></p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Standard form!</p>
                    </div>
                  </div>

                  <div className="border-t-2 border-blue-200 dark:border-blue-700 pt-3 mt-3">
                    <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Coefficients:</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded text-center">
                        <p className="text-xs text-blue-600 dark:text-blue-400">a</p>
                        <p className="text-lg font-bold text-blue-800 dark:text-blue-200">1</p>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded text-center">
                        <p className="text-xs text-green-600 dark:text-green-400">b</p>
                        <p className="text-lg font-bold text-green-800 dark:text-green-200">3</p>
                      </div>
                      <div className="bg-orange-100 dark:bg-orange-900/40 p-2 rounded text-center">
                        <p className="text-xs text-orange-600 dark:text-orange-400">c</p>
                        <p className="text-lg font-bold text-orange-800 dark:text-orange-200">−4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 3 - More Complex */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 3: Rearranging with Multiple Steps
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Rearrange <MathText>2x² = 5x + 3</MathText> into standard form.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                      <p className="text-gray-700 dark:text-gray-300 font-mono"><MathText>2x² = 5x + 3</MathText></p>
                    </div>

                    <div className="text-indigo-600 dark:text-indigo-400 text-center">↓ Subtract 5x from both sides</div>

                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                      <p className="text-gray-700 dark:text-gray-300 font-mono"><MathText>2x² - 5x = 3</MathText></p>
                    </div>

                    <div className="text-indigo-600 dark:text-indigo-400 text-center">↓ Subtract 3 from both sides</div>

                    <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded border-2 border-green-500 dark:border-green-400">
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-center font-bold">
                        <MathText>2x² - 5x - 3 = 0</MathText>
                      </p>
                      <p className="text-xs text-green-700 dark:text-green-400 mt-2 text-center">✓ Standard form: a = 2, b = −5, c = −3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Rearrange to Standard Form
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Rearrange <MathText>x² + 7 = 6x</MathText> into standard form and identify a, b, and c.
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
                  <p><strong>Step 1:</strong> Move 6x to left side</p>
                  <p className="ml-4"><MathText>x² - 6x + 7 = 0</MathText></p>

                  <p><strong>Step 2:</strong> Terms are already arranged (x², then x, then constant)</p>

                  <p><strong>Step 3:</strong> Identify coefficients:</p>
                  <div className="ml-4 space-y-1">
                    <p className="text-blue-700 dark:text-blue-300">a = 1</p>
                    <p className="text-green-700 dark:text-green-300">b = −6</p>
                    <p className="text-orange-700 dark:text-orange-300">c = 7</p>
                  </div>

                  <p className="font-semibold text-green-700 dark:text-green-300 mt-3">
                    ✓ Final answer: <MathText>x² - 6x + 7 = 0</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Simplify First, Then Rearrange
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Rearrange <MathText>2x² + 4x = x² - 3x + 10</MathText> into standard form.
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
                  <p><strong>Original:</strong> <MathText>2x² + 4x = x² - 3x + 10</MathText></p>

                  <p><strong>Step 1:</strong> Subtract x² from both sides</p>
                  <p className="ml-4"><MathText>x² + 4x = -3x + 10</MathText></p>

                  <p><strong>Step 2:</strong> Add 3x to both sides</p>
                  <p className="ml-4"><MathText>x² + 7x = 10</MathText></p>

                  <p><strong>Step 3:</strong> Subtract 10 from both sides</p>
                  <p className="ml-4"><MathText>x² + 7x - 10 = 0</MathText></p>

                  <p className="font-semibold text-green-700 dark:text-green-300 mt-3">
                    ✓ Standard form: <MathText>x² + 7x - 10 = 0</MathText>
                  </p>
                  <p className="ml-4 text-sm">a = 1, b = 7, c = −10</p>
                </div>
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
            <li>A quadratic equation has the form <MathText>ax² + bx + c = 0</MathText> where a ≠ 0</li>
            <li>The coefficient <strong>a</strong> (x² term) must never be zero, but b and c can be zero</li>
            <li>To identify a, b, c: compare your equation with the standard form</li>
            <li>To rearrange: move all terms to one side, arrange by descending powers, combine like terms</li>
            <li>Always verify your final form: it should equal zero on the right side</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
