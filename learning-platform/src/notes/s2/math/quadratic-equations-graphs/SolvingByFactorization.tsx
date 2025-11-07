import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function SolvingByFactorization() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 dark:from-rose-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Solving by Factorization</h1>
        <p className="mt-2 text-rose-100">Use factorization and zero product property to solve quadratics</p>
      </div>

      <div className="bg-white dark:bg-gray-800 px-6 pb-6 rounded-b-lg">

        {/* Section 1: Review of Factorization */}
        <section className="mb-8 mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Quick Review: Factorizing Quadratics
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Before we can solve by factorization, we need to remember how to factorize quadratic expressions.
              This is the reverse of expanding brackets!
            </p>

            {/* Visual: Factorization Pattern */}
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/30 dark:to-pink-900/30 border-2 border-rose-400 dark:border-rose-500 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-rose-800 dark:text-rose-300 mb-4 text-center text-lg">
                Factorization Pattern
              </h3>
              <div className="text-center space-y-3">
                <div className="text-2xl font-bold text-rose-900 dark:text-rose-100">
                  <MathText>x² + bx + c = (x + p)(x + q)</MathText>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-rose-300 dark:border-rose-600">
                    <p className="text-sm font-semibold text-rose-700 dark:text-rose-300 mb-1">Find p and q such that:</p>
                    <p className="text-gray-700 dark:text-gray-300"><MathText>p + q = b</MathText></p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-rose-300 dark:border-rose-600">
                    <p className="text-sm font-semibold text-rose-700 dark:text-rose-300 mb-1">And:</p>
                    <p className="text-gray-700 dark:text-gray-300"><MathText>p × q = c</MathText></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual: Sign Patterns Table */}
            <div className="overflow-x-auto mb-6">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Sign Patterns Cheat Sheet</h3>
              <table className="min-w-full border-2 border-gray-300 dark:border-gray-600">
                <thead className="bg-gray-200 dark:bg-gray-700">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">Form</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">Signs of p and q</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">Example</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      <MathText>x² + bx + c</MathText><br/>
                      <span className="text-xs">(b &gt; 0, c &gt; 0)</span>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      Both <span className="text-green-600 dark:text-green-400 font-bold">POSITIVE</span>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      <MathText>x² + 7x + 12 = (x+3)(x+4)</MathText>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      <MathText>x² - bx + c</MathText><br/>
                      <span className="text-xs">(b &lt; 0, c &gt; 0)</span>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      Both <span className="text-red-600 dark:text-red-400 font-bold">NEGATIVE</span>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      <MathText>x² - 7x + 12 = (x-3)(x-4)</MathText>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      <MathText>x² + bx - c</MathText><br/>
                      <span className="text-xs">(c &lt; 0)</span>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">DIFFERENT SIGNS</span><br/>
                      <span className="text-xs">(larger one matches b)</span>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                      <MathText>x² + x - 12 = (x+4)(x-3)</MathText>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Visual: Example Factorization */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example: Factorize x² + 5x + 6
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    We need two numbers that <strong>multiply to 6</strong> and <strong>add to 5</strong>
                  </p>

                  {/* Visual: Factor Pairs Table */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded border border-gray-300 dark:border-gray-600">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">Factor Pairs of 6:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-300 dark:border-gray-600">
                        <p className="text-sm text-gray-700 dark:text-gray-300 text-center">1 × 6</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">Sum: 7 ✗</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-300 dark:border-gray-600">
                        <p className="text-sm text-gray-700 dark:text-gray-300 text-center">2 × 3</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">Sum: 5 ✓</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-300 dark:border-gray-600">
                        <p className="text-sm text-gray-700 dark:text-gray-300 text-center">3 × 2</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">Sum: 5 ✓</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-300 dark:border-gray-600">
                        <p className="text-sm text-gray-700 dark:text-gray-300 text-center">6 × 1</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">Sum: 7 ✗</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded border-2 border-green-500 dark:border-green-400">
                    <p className="text-gray-700 dark:text-gray-300">✓ We found: p = 2, q = 3</p>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold mt-2">
                      <MathText>x² + 5x + 6 = (x + 2)(x + 3)</MathText>
                    </p>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-400 dark:border-yellow-500 p-3 rounded">
                    <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-1">✓ Check by expanding:</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <MathText>(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6 ✓</MathText>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Zero Product Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Zero Product Property
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is the KEY to solving quadratic equations by factorization!
            </p>

            {/* Visual: Zero Product Property Box */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border-2 border-indigo-400 dark:border-indigo-500 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-4 text-center text-lg">
                Zero Product Property
              </h3>
              <div className="text-center space-y-4">
                <div className="text-xl text-gray-700 dark:text-gray-300">
                  If <MathText>a × b = 0</MathText>
                </div>
                <div className="text-3xl font-bold text-indigo-900 dark:text-indigo-100">
                  then
                </div>
                <div className="text-xl text-gray-700 dark:text-gray-300">
                  <MathText>a = 0</MathText> OR <MathText>b = 0</MathText> (or both)
                </div>
              </div>

              <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded border border-indigo-300 dark:border-indigo-600">
                <p className="text-sm text-gray-700 dark:text-gray-300 text-center mb-2">
                  <strong>Why?</strong> The only way a product can be zero is if at least one factor is zero.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="text-center text-sm text-gray-700 dark:text-gray-300">
                    <p>5 × 0 = 0 ✓</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">One factor is zero</p>
                  </div>
                  <div className="text-center text-sm text-gray-700 dark:text-gray-300">
                    <p>0 × 7 = 0 ✓</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">One factor is zero</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual: Applying to Factored Form */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-400 dark:border-purple-500 p-5 rounded-lg mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3 text-center">
                Applying to Factored Quadratics
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <div className="text-center space-y-3">
                  <p className="text-gray-700 dark:text-gray-300">If <MathText>(x + p)(x + q) = 0</MathText></p>
                  <p className="text-lg font-semibold text-purple-700 dark:text-purple-300">Then either:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded border-2 border-blue-500 dark:border-blue-400">
                      <p className="text-gray-700 dark:text-gray-300 font-semibold"><MathText>x + p = 0</MathText></p>
                      <p className="text-gray-700 dark:text-gray-300 mt-1"><MathText>x = -p</MathText></p>
                    </div>
                    <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded border-2 border-green-500 dark:border-green-400">
                      <p className="text-gray-700 dark:text-gray-300 font-semibold"><MathText>x + q = 0</MathText></p>
                      <p className="text-gray-700 dark:text-gray-300 mt-1"><MathText>x = -q</MathText></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 1: Using Zero Product Property */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 1: Solve (x + 3)(x - 5) = 0
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    The equation is already factored, so we can apply the zero product property directly!
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Solution 1 */}
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border border-blue-300 dark:border-blue-600">
                      <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">First factor = 0:</p>
                      <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        <p><MathText>x + 3 = 0</MathText></p>
                        <p className="text-sm text-blue-600 dark:text-blue-400">Subtract 3 from both sides</p>
                        <p className="font-bold text-green-700 dark:text-green-300"><MathText>x = -3</MathText></p>
                      </div>
                    </div>

                    {/* Solution 2 */}
                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border border-green-300 dark:border-green-600">
                      <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Second factor = 0:</p>
                      <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        <p><MathText>x - 5 = 0</MathText></p>
                        <p className="text-sm text-green-600 dark:text-green-400">Add 5 to both sides</p>
                        <p className="font-bold text-green-700 dark:text-green-300"><MathText>x = 5</MathText></p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded border-2 border-green-500 dark:border-green-400 mt-3">
                    <p className="font-semibold text-green-800 dark:text-green-300 text-center">
                      ✓ Solutions: x = −3 or x = 5
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 2: Repeated Root */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 2: Solve (x - 2)² = 0
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>This means <MathText>(x - 2)(x - 2) = 0</MathText></p>
                  <p>Both factors are the same, so:</p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                    <p><MathText>x - 2 = 0</MathText></p>
                    <p className="font-bold text-green-700 dark:text-green-300 mt-2"><MathText>x = 2</MathText></p>
                  </div>
                  <p className="text-sm italic text-blue-700 dark:text-blue-400">
                    This is called a <strong>repeated root</strong> or <strong>double root</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Solve (x - 4)(x + 1) = 0
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
                  <p>Either <MathText>x - 4 = 0</MathText> or <MathText>x + 1 = 0</MathText></p>
                  <p>From first factor: <MathText>x = 4</MathText></p>
                  <p>From second factor: <MathText>x = -1</MathText></p>
                  <p className="font-semibold text-green-700 dark:text-green-300 mt-3">
                    ✓ Solutions: x = 4 or x = −1
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Complete Solution Process */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Complete Solution by Factorization
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Most quadratic equations aren't already factored. Here's the complete process:
            </p>

            {/* Visual: Step-by-Step Process */}
            <div className="bg-gradient-to-b from-rose-50 to-pink-50 dark:from-rose-900/30 dark:to-pink-900/30 border-2 border-rose-400 dark:border-rose-500 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-rose-800 dark:text-rose-300 mb-4 text-center">
                Complete Factorization Method
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-rose-600 dark:bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Rearrange to standard form</p>
                    <p className="text-sm text-rose-700 dark:text-rose-400">Get ax² + bx + c = 0</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-rose-600 dark:bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Factorize the left side</p>
                    <p className="text-sm text-rose-700 dark:text-rose-400">Write as (x + p)(x + q) = 0</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-rose-600 dark:bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Apply zero product property</p>
                    <p className="text-sm text-rose-700 dark:text-rose-400">Set each factor equal to zero</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-rose-600 dark:bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Solve each equation</p>
                    <p className="text-sm text-rose-700 dark:text-rose-400">Find both values of x</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-rose-600 dark:bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Check your solutions</p>
                    <p className="text-sm text-rose-700 dark:text-rose-400">Substitute back into original equation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 3: Complete Process */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 3: Solve x² + 6x + 8 = 0
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-1">Step 1: Check standard form</p>
                    <p className="text-gray-700 dark:text-gray-300"><MathText>x² + 6x + 8 = 0</MathText> ✓ Already in standard form</p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">Step 2: Factorize</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Find two numbers that multiply to 8 and add to 6:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
                      <div className="bg-white dark:bg-gray-800 p-2 text-center text-sm rounded">
                        <p className="text-gray-700 dark:text-gray-300">1 × 8</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Sum: 9 ✗</p>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900/40 p-2 text-center text-sm rounded border-2 border-green-500">
                        <p className="text-gray-700 dark:text-gray-300">2 × 4</p>
                        <p className="text-xs text-green-700 dark:text-green-400">Sum: 6 ✓</p>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900/40 p-2 text-center text-sm rounded border-2 border-green-500">
                        <p className="text-gray-700 dark:text-gray-300">4 × 2</p>
                        <p className="text-xs text-green-700 dark:text-green-400">Sum: 6 ✓</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-2 text-center text-sm rounded">
                        <p className="text-gray-700 dark:text-gray-300">8 × 1</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Sum: 9 ✗</p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold"><MathText>(x + 2)(x + 4) = 0</MathText></p>
                  </div>

                  {/* Step 3 & 4 */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">Steps 3 & 4: Apply zero product property and solve</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                        <p className="text-gray-700 dark:text-gray-300"><MathText>x + 2 = 0</MathText></p>
                        <p className="text-gray-700 dark:text-gray-300 font-bold text-green-700 dark:text-green-300"><MathText>x = -2</MathText></p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                        <p className="text-gray-700 dark:text-gray-300"><MathText>x + 4 = 0</MathText></p>
                        <p className="text-gray-700 dark:text-gray-300 font-bold text-green-700 dark:text-green-300"><MathText>x = -4</MathText></p>
                      </div>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded border-2 border-green-500 dark:border-green-400">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">Step 5: Check</p>
                    <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <p>If x = −2: <MathText>(-2)² + 6(-2) + 8 = 4 - 12 + 8 = 0 ✓</MathText></p>
                      <p>If x = −4: <MathText>(-4)² + 6(-4) + 8 = 16 - 24 + 8 = 0 ✓</MathText></p>
                    </div>
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded border-2 border-green-500 dark:border-green-400">
                    <p className="font-bold text-green-800 dark:text-green-300 text-center text-lg">
                      ✓ Solutions: x = −2 or x = −4
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 4: Needs Rearrangement */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Example 4: Solve x² = 4x (needs rearrangement)
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-400 dark:border-red-500 p-3 rounded">
                    <p className="text-sm font-semibold text-red-800 dark:text-red-300 mb-1">⚠️ Common Mistake!</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Don't divide by x! You'll lose one solution. Always rearrange to = 0 first.
                    </p>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-center">
                      <p className="text-gray-700 dark:text-gray-300 font-mono"><MathText>x² = 4x</MathText></p>
                    </div>

                    <div className="text-center text-purple-600 dark:text-purple-400">↓ Subtract 4x from both sides</div>

                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-center">
                      <p className="text-gray-700 dark:text-gray-300 font-mono"><MathText>x² - 4x = 0</MathText></p>
                    </div>

                    <div className="text-center text-blue-600 dark:text-blue-400">↓ Factor out common x</div>

                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-center">
                      <p className="text-gray-700 dark:text-gray-300 font-mono"><MathText>x(x - 4) = 0</MathText></p>
                    </div>

                    <div className="text-center text-green-600 dark:text-green-400">↓ Apply zero product property</div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded">
                        <p className="text-gray-700 dark:text-gray-300 text-center"><MathText>x = 0</MathText></p>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded">
                        <p className="text-gray-700 dark:text-gray-300 text-center"><MathText>x - 4 = 0</MathText></p>
                        <p className="text-gray-700 dark:text-gray-300 text-center"><MathText>x = 4</MathText></p>
                      </div>
                    </div>

                    <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded border-2 border-green-500 dark:border-green-400">
                      <p className="font-bold text-green-800 dark:text-green-300 text-center">
                        ✓ Solutions: x = 0 or x = 4
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Solve x² + 5x + 4 = 0
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
                  <p>Find two numbers that multiply to 4 and add to 5:</p>
                  <p>Numbers: 1 and 4 (since 1 × 4 = 4 and 1 + 4 = 5)</p>
                  <p>Factorize: <MathText>(x + 1)(x + 4) = 0</MathText></p>
                  <p>Either <MathText>x + 1 = 0</MathText> → <MathText>x = -1</MathText></p>
                  <p>Or <MathText>x + 4 = 0</MathText> → <MathText>x = -4</MathText></p>
                  <p className="font-semibold text-green-700 dark:text-green-300 mt-3">
                    ✓ Solutions: x = −1 or x = −4
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Solve x² - 3x = 10
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
                  <p>Rearrange: <MathText>x² - 3x - 10 = 0</MathText></p>
                  <p>Find two numbers that multiply to −10 and add to −3:</p>
                  <p>Numbers: −5 and 2 (since −5 × 2 = −10 and −5 + 2 = −3)</p>
                  <p>Factorize: <MathText>(x - 5)(x + 2) = 0</MathText></p>
                  <p>Either <MathText>x - 5 = 0</MathText> → <MathText>x = 5</MathText></p>
                  <p>Or <MathText>x + 2 = 0</MathText> → <MathText>x = -2</MathText></p>
                  <p className="font-semibold text-green-700 dark:text-green-300 mt-3">
                    ✓ Solutions: x = 5 or x = −2
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Solve x² = 7x
            </h3>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Rearrange: <MathText>x² - 7x = 0</MathText></p>
                  <p>Factor out x: <MathText>x(x - 7) = 0</MathText></p>
                  <p>Either <MathText>x = 0</MathText></p>
                  <p>Or <MathText>x - 7 = 0</MathText> → <MathText>x = 7</MathText></p>
                  <p className="font-semibold text-green-700 dark:text-green-300 mt-3">
                    ✓ Solutions: x = 0 or x = 7
                  </p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-400 italic mt-2">
                    Note: Don't forget x = 0 is a solution!
                  </p>
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
            <li>To factorize <MathText>x² + bx + c</MathText>, find two numbers that multiply to c and add to b</li>
            <li>Zero Product Property: if <MathText>a × b = 0</MathText>, then <MathText>a = 0</MathText> or <MathText>b = 0</MathText></li>
            <li>Complete process: Rearrange → Factorize → Apply ZPP → Solve → Check</li>
            <li>ALWAYS rearrange to standard form (= 0) before factorizing</li>
            <li>When solving <MathText>x² = kx</MathText>, don't divide by x! Rearrange and factor instead</li>
            <li>Don't forget x = 0 can be a valid solution!</li>
            <li>Check both solutions by substituting back into the original equation</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
