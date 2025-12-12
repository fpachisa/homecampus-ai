import { useState } from 'react';

const OrderOfOperations = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Order of Operations</h1>
        <p className="text-lg">Learn the correct order to solve mathematical expressions</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Problem */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">1. Why Does Order Matter?</h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Consider This Problem:</h3>
            <p className="font-mono text-2xl text-center text-gray-900 dark:text-gray-100 mb-4">
              6 + 8 × 3 = ?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-red-300 dark:border-red-600">
                <p className="text-red-600 dark:text-red-400 font-bold mb-2">Wrong Way:</p>
                <p className="font-mono text-gray-900 dark:text-gray-100">6 + 8 = 14</p>
                <p className="font-mono text-gray-900 dark:text-gray-100">14 × 3 = 42 ✗</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-green-300 dark:border-green-600">
                <p className="text-green-600 dark:text-green-400 font-bold mb-2">Correct Way:</p>
                <p className="font-mono text-gray-900 dark:text-gray-100">8 × 3 = 24</p>
                <p className="font-mono text-gray-900 dark:text-gray-100">6 + 24 = 30 ✓</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <p className="text-gray-800 dark:text-gray-200">
              <strong>The order in which we do operations matters!</strong> Without rules, different people would get different answers to the same problem.
            </p>
          </div>
        </section>

        {/* Section 2: The Rule */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">2. The Order of Operations Rule</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">When there are NO brackets:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <ol className="list-decimal list-inside space-y-3 text-gray-800 dark:text-gray-200">
                <li><strong className="text-purple-600 dark:text-purple-400">First:</strong> Work from left to right doing all <strong>multiplication and division</strong></li>
                <li><strong className="text-blue-600 dark:text-blue-400">Then:</strong> Work from left to right doing all <strong>addition and subtraction</strong></li>
              </ol>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Remember It This Way:</h3>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                <span className="text-purple-600 dark:text-purple-400">×</span> and <span className="text-purple-600 dark:text-purple-400">÷</span> are <strong>stronger</strong> than <span className="text-blue-600 dark:text-blue-400">+</span> and <span className="text-blue-600 dark:text-blue-400">−</span>
              </p>
              <p className="text-gray-600 dark:text-gray-400">Multiplication and Division come BEFORE Addition and Subtraction</p>
            </div>
          </div>
        </section>

        {/* Section 3: Worked Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">3. Worked Examples</h2>

          {/* Example 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: 6 + 8 × 3</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 rounded text-sm font-bold text-purple-700 dark:text-purple-300">Step 1</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Do multiplication first: 8 × 3 = 24</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 rounded text-sm font-bold text-blue-700 dark:text-blue-300">Step 2</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Then do addition: 6 + 24 = <strong className="text-green-600 dark:text-green-400">30</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: 15 − 9 ÷ 3</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 rounded text-sm font-bold text-purple-700 dark:text-purple-300">Step 1</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Do division first: 9 ÷ 3 = 3</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 rounded text-sm font-bold text-blue-700 dark:text-blue-300">Step 2</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Then do subtraction: 15 − 3 = <strong className="text-green-600 dark:text-green-400">12</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Example 3 - More Complex */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: 20 + 16 ÷ 4 × 2</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 rounded text-sm font-bold text-purple-700 dark:text-purple-300">Step 1</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Division and multiplication from left to right:</p>
                  <p className="font-mono text-gray-900 dark:text-gray-100 ml-4">16 ÷ 4 = 4</p>
                  <p className="font-mono text-gray-900 dark:text-gray-100 ml-4">4 × 2 = 8</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 rounded text-sm font-bold text-blue-700 dark:text-blue-300">Step 2</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Then do addition: 20 + 8 = <strong className="text-green-600 dark:text-green-400">28</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Example 4 - All Four Operations */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 4: 48 ÷ 8 + 5 × 9 − 27</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 rounded text-sm font-bold text-purple-700 dark:text-purple-300">Step 1</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Division and multiplication (left to right):</p>
                  <p className="font-mono text-gray-900 dark:text-gray-100 ml-4">48 ÷ 8 = 6</p>
                  <p className="font-mono text-gray-900 dark:text-gray-100 ml-4">5 × 9 = 45</p>
                  <p className="font-mono text-gray-600 dark:text-gray-400 ml-4">Expression becomes: 6 + 45 − 27</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 rounded text-sm font-bold text-blue-700 dark:text-blue-300">Step 2</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Addition and subtraction (left to right):</p>
                  <p className="font-mono text-gray-900 dark:text-gray-100 ml-4">6 + 45 = 51</p>
                  <p className="font-mono text-gray-900 dark:text-gray-100 ml-4">51 − 27 = <strong className="text-green-600 dark:text-green-400">24</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">Practice Problems</h2>

          <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">1. Evaluate (no brackets):</p>
            <div className="ml-4 space-y-1 text-gray-800 dark:text-gray-200">
              <p>a) 5 + 4 × 3 = ?</p>
              <p>b) 20 − 12 ÷ 4 = ?</p>
              <p>c) 8 × 6 + 10 = ?</p>
              <p>d) 36 ÷ 6 − 2 = ?</p>
            </div>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solutions
            </button>
            {showSolution1 && (
              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-gray-800 dark:text-gray-200">
                <p><strong>a)</strong> 5 + 4 × 3 = 5 + 12 = 17</p>
                <p><strong>b)</strong> 20 − 12 ÷ 4 = 20 − 3 = 17</p>
                <p><strong>c)</strong> 8 × 6 + 10 = 48 + 10 = 58</p>
                <p><strong>d)</strong> 36 ÷ 6 − 2 = 6 − 2 = 4</p>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
            <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">2. Evaluate (multiple operations):</p>
            <div className="ml-4 space-y-1 text-gray-800 dark:text-gray-200">
              <p>a) 10 + 6 × 5 − 8 = ?</p>
              <p>b) 45 ÷ 9 + 7 × 3 = ?</p>
              <p>c) 100 − 25 × 2 + 30 = ?</p>
              <p>d) 8 × 7 − 42 ÷ 6 = ?</p>
            </div>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solutions
            </button>
            {showSolution2 && (
              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-gray-800 dark:text-gray-200">
                <p><strong>a)</strong> 10 + 6 × 5 − 8 = 10 + 30 − 8 = 40 − 8 = 32</p>
                <p><strong>b)</strong> 45 ÷ 9 + 7 × 3 = 5 + 21 = 26</p>
                <p><strong>c)</strong> 100 − 25 × 2 + 30 = 100 − 50 + 30 = 80</p>
                <p><strong>d)</strong> 8 × 7 − 42 ÷ 6 = 56 − 7 = 49</p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>Multiplication (×)</strong> and <strong>Division (÷)</strong> come FIRST</li>
            <li><strong>Addition (+)</strong> and <strong>Subtraction (−)</strong> come SECOND</li>
            <li>When you have multiple × and ÷, work from <strong>left to right</strong></li>
            <li>When you have multiple + and −, work from <strong>left to right</strong></li>
            <li>This rule ensures everyone gets the <strong>same answer</strong>!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderOfOperations;
