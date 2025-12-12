import { useState } from 'react';

const OrderOfOperationsWithBrackets = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Order of Operations with Brackets</h1>
        <p className="text-lg">Brackets always come first - they change the order!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Power of Brackets */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-pink-800 dark:text-pink-300">1. Brackets Change Everything!</h2>

          <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border-l-4 border-pink-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Compare These Two Expressions:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
                <p className="text-center text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">6 + 8 × 3</p>
                <p className="font-mono text-gray-900 dark:text-gray-100">8 × 3 = 24 (multiply first)</p>
                <p className="font-mono text-gray-900 dark:text-gray-100">6 + 24 = <strong className="text-blue-600 dark:text-blue-400">30</strong></p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-pink-300 dark:border-pink-600">
                <p className="text-center text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">(6 + 8) × 3</p>
                <p className="font-mono text-gray-900 dark:text-gray-100">6 + 8 = 14 (brackets first!)</p>
                <p className="font-mono text-gray-900 dark:text-gray-100">14 × 3 = <strong className="text-pink-600 dark:text-pink-400">42</strong></p>
              </div>
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
              The brackets made us do the addition first, giving us a different answer!
            </p>
          </div>
        </section>

        {/* Section 2: The Complete Rule */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-pink-800 dark:text-pink-300">2. The Complete Order of Operations</h2>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/30 dark:to-purple-900/30 p-6 rounded-lg border-2 border-pink-300 dark:border-pink-600 mb-4">
            <h3 className="font-bold text-xl mb-4 text-center text-gray-900 dark:text-gray-100">When there are brackets:</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded">
                <span className="w-8 h-8 flex items-center justify-center bg-pink-500 text-white rounded-full font-bold">1</span>
                <div>
                  <p className="font-bold text-pink-600 dark:text-pink-400">BRACKETS FIRST</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Work out everything inside the brackets</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded">
                <span className="w-8 h-8 flex items-center justify-center bg-purple-500 text-white rounded-full font-bold">2</span>
                <div>
                  <p className="font-bold text-purple-600 dark:text-purple-400">Then × and ÷</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Multiplication and division, left to right</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded">
                <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold">3</span>
                <div>
                  <p className="font-bold text-blue-600 dark:text-blue-400">Then + and −</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Addition and subtraction, left to right</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <p className="text-gray-800 dark:text-gray-200 text-center">
              <strong>Memory Tip:</strong> Think of brackets as a <strong>VIP section</strong> - they get served first!
            </p>
          </div>
        </section>

        {/* Section 3: Worked Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-pink-800 dark:text-pink-300">3. Worked Examples</h2>

          {/* Example 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: (6 + 8) × 3</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/50 rounded text-sm font-bold text-pink-700 dark:text-pink-300">Step 1</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Brackets first: (6 + 8) = 14</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 rounded text-sm font-bold text-purple-700 dark:text-purple-300">Step 2</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Then multiply: 14 × 3 = <strong className="text-green-600 dark:text-green-400">42</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: 50 − (12 + 18) ÷ 6</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/50 rounded text-sm font-bold text-pink-700 dark:text-pink-300">Step 1</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Brackets first: (12 + 18) = 30</p>
                  <p className="font-mono text-gray-600 dark:text-gray-400">Expression becomes: 50 − 30 ÷ 6</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 rounded text-sm font-bold text-purple-700 dark:text-purple-300">Step 2</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Then division: 30 ÷ 6 = 5</p>
                  <p className="font-mono text-gray-600 dark:text-gray-400">Expression becomes: 50 − 5</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 rounded text-sm font-bold text-blue-700 dark:text-blue-300">Step 3</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Finally subtraction: 50 − 5 = <strong className="text-green-600 dark:text-green-400">45</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Example 3 - More Complex */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: 8 × (15 − 6) ÷ 3</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/50 rounded text-sm font-bold text-pink-700 dark:text-pink-300">Step 1</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Brackets first: (15 − 6) = 9</p>
                  <p className="font-mono text-gray-600 dark:text-gray-400">Expression becomes: 8 × 9 ÷ 3</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 rounded text-sm font-bold text-purple-700 dark:text-purple-300">Step 2</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">× and ÷ from left to right:</p>
                  <p className="font-mono text-gray-900 dark:text-gray-100 ml-4">8 × 9 = 72</p>
                  <p className="font-mono text-gray-900 dark:text-gray-100 ml-4">72 ÷ 3 = <strong className="text-green-600 dark:text-green-400">24</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Example 4 - Two Brackets */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 4: (4 + 6) × (15 − 7)</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/50 rounded text-sm font-bold text-pink-700 dark:text-pink-300">Step 1</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Work out BOTH brackets:</p>
                  <p className="font-mono text-gray-900 dark:text-gray-100 ml-4">(4 + 6) = 10</p>
                  <p className="font-mono text-gray-900 dark:text-gray-100 ml-4">(15 − 7) = 8</p>
                  <p className="font-mono text-gray-600 dark:text-gray-400">Expression becomes: 10 × 8</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 rounded text-sm font-bold text-purple-700 dark:text-purple-300">Step 2</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Multiply: 10 × 8 = <strong className="text-green-600 dark:text-green-400">80</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Example 5 - Complex with All Operations */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 5: 100 − (8 + 7) × 4 + 20</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/50 rounded text-sm font-bold text-pink-700 dark:text-pink-300">Step 1</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Brackets first: (8 + 7) = 15</p>
                  <p className="font-mono text-gray-600 dark:text-gray-400">Expression becomes: 100 − 15 × 4 + 20</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 rounded text-sm font-bold text-purple-700 dark:text-purple-300">Step 2</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">Multiplication: 15 × 4 = 60</p>
                  <p className="font-mono text-gray-600 dark:text-gray-400">Expression becomes: 100 − 60 + 20</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 rounded text-sm font-bold text-blue-700 dark:text-blue-300">Step 3</span>
                <div>
                  <p className="font-mono text-gray-900 dark:text-gray-100">+ and − from left to right:</p>
                  <p className="font-mono text-gray-900 dark:text-gray-100 ml-4">100 − 60 = 40</p>
                  <p className="font-mono text-gray-900 dark:text-gray-100 ml-4">40 + 20 = <strong className="text-green-600 dark:text-green-400">60</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-pink-800 dark:text-pink-300">Practice Problems</h2>

          <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">1. Evaluate (with brackets):</p>
            <div className="ml-4 space-y-1 text-gray-800 dark:text-gray-200">
              <p>a) (5 + 4) × 3 = ?</p>
              <p>b) (20 − 12) ÷ 4 = ?</p>
              <p>c) 8 × (6 + 4) = ?</p>
              <p>d) 36 ÷ (9 − 3) = ?</p>
            </div>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solutions
            </button>
            {showSolution1 && (
              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-gray-800 dark:text-gray-200">
                <p><strong>a)</strong> (5 + 4) × 3 = 9 × 3 = 27</p>
                <p><strong>b)</strong> (20 − 12) ÷ 4 = 8 ÷ 4 = 2</p>
                <p><strong>c)</strong> 8 × (6 + 4) = 8 × 10 = 80</p>
                <p><strong>d)</strong> 36 ÷ (9 − 3) = 36 ÷ 6 = 6</p>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
            <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">2. Evaluate (more complex):</p>
            <div className="ml-4 space-y-1 text-gray-800 dark:text-gray-200">
              <p>a) (10 + 5) × 2 − 8 = ?</p>
              <p>b) 45 ÷ (3 + 6) + 7 = ?</p>
              <p>c) (8 + 2) × (15 − 10) = ?</p>
              <p>d) 100 − (25 + 15) × 2 = ?</p>
            </div>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solutions
            </button>
            {showSolution2 && (
              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-gray-800 dark:text-gray-200">
                <p><strong>a)</strong> (10 + 5) × 2 − 8 = 15 × 2 − 8 = 30 − 8 = 22</p>
                <p><strong>b)</strong> 45 ÷ (3 + 6) + 7 = 45 ÷ 9 + 7 = 5 + 7 = 12</p>
                <p><strong>c)</strong> (8 + 2) × (15 − 10) = 10 × 5 = 50</p>
                <p><strong>d)</strong> 100 − (25 + 15) × 2 = 100 − 40 × 2 = 100 − 80 = 20</p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>BRACKETS (  )</strong> always come FIRST - they are the VIP!</li>
            <li>Inside brackets, follow the normal rules (× and ÷ before + and −)</li>
            <li>After brackets: <strong>× and ÷</strong>, then <strong>+ and −</strong></li>
            <li>When there are multiple brackets, work out ALL of them before moving on</li>
            <li>Brackets can completely change the answer to a problem!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderOfOperationsWithBrackets;
