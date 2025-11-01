import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function MultiplicationDivisionIntegers() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Multiplication & Division of Integers</h1>
        <p className="mt-2 text-purple-100">
          Understanding sign rules and operations with positive and negative numbers
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Multiplication of Integers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            A. Multiplying Integers
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When multiplying integers, the <strong className="text-purple-600 dark:text-purple-400">sign of the result</strong> depends on the signs of the numbers being multiplied:
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-4 text-center text-lg">
                Sign Rules for Multiplication
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-green-500">
                  <div className="text-center mb-3">
                    <span className="text-3xl">✅</span>
                    <h4 className="font-bold text-green-700 dark:text-green-400 mt-2">Same Signs = Positive</h4>
                  </div>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <p><MathText>{'$(+) \\times (+) = (+)$'}</MathText></p>
                    <p><MathText>{'$(-) \\times (-) = (+)$'}</MathText></p>
                    <p className="text-xs italic text-gray-600 dark:text-gray-400 mt-2">Example: <MathText>{'$3 \\times 4 = 12$'}</MathText></p>
                    <p className="text-xs italic text-gray-600 dark:text-gray-400">Example: <MathText>{'$(-3) \\times (-4) = 12$'}</MathText></p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-red-500">
                  <div className="text-center mb-3">
                    <span className="text-3xl">⚠️</span>
                    <h4 className="font-bold text-red-700 dark:text-red-400 mt-2">Different Signs = Negative</h4>
                  </div>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <p><MathText>{'$(+) \\times (-) = (-)$'}</MathText></p>
                    <p><MathText>{'$(-) \\times (+) = (-)$'}</MathText></p>
                    <p className="text-xs italic text-gray-600 dark:text-gray-400 mt-2">Example: <MathText>{'$3 \\times (-4) = -12$'}</MathText></p>
                    <p className="text-xs italic text-gray-600 dark:text-gray-400">Example: <MathText>{'$(-3) \\times 4 = -12$'}</MathText></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-gray-100">Memory Tip:</strong> "Friends of friends are friends (+). Enemies of enemies are friends (+). But friends of enemies are enemies (-), and enemies of friends are enemies (-)!"
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Multiplying Same Signs
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculate: <MathText>{'$(-6) \\times (-7)$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Both numbers are negative (same signs)</p>
                <p>Step 1: Multiply the absolute values: <MathText>{'$6 \\times 7 = 42$'}</MathText></p>
                <p>Step 2: Same signs → positive result</p>
                <p><strong>Answer: <MathText>{'$(-6) \\times (-7) = +42$'}</MathText></strong></p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 2: Multiplying Different Signs
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculate: <MathText>{'$8 \\times (-5)$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>One positive, one negative (different signs)</p>
                <p>Step 1: Multiply the absolute values: <MathText>{'$8 \\times 5 = 40$'}</MathText></p>
                <p>Step 2: Different signs → negative result</p>
                <p><strong>Answer: <MathText>{'$8 \\times (-5) = -40$'}</MathText></strong></p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Multiplication
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Calculate: <MathText>{'$(-9) \\times 4$'}</MathText>
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p>Different signs (one negative, one positive)</p>
                  <p>Multiply values: <MathText>{'$9 \\times 4 = 36$'}</MathText></p>
                  <p>Different signs → negative</p>
                  <p><strong>Answer: <MathText>{'$(-9) \\times 4 = -36$'}</MathText></strong></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Division of Integers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            B. Dividing Integers
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Division follows the <strong className="text-purple-600 dark:text-purple-400">same sign rules</strong> as multiplication:
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-4 text-center text-lg">
                Sign Rules for Division
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-green-500">
                  <div className="text-center mb-3">
                    <span className="text-3xl">✅</span>
                    <h4 className="font-bold text-green-700 dark:text-green-400 mt-2">Same Signs = Positive</h4>
                  </div>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <p><MathText>{'$(+) \\div (+) = (+)$'}</MathText></p>
                    <p><MathText>{'$(-) \\div (-) = (+)$'}</MathText></p>
                    <p className="text-xs italic text-gray-600 dark:text-gray-400 mt-2">Example: <MathText>{'$12 \\div 3 = 4$'}</MathText></p>
                    <p className="text-xs italic text-gray-600 dark:text-gray-400">Example: <MathText>{'$(-12) \\div (-3) = 4$'}</MathText></p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-red-500">
                  <div className="text-center mb-3">
                    <span className="text-3xl">⚠️</span>
                    <h4 className="font-bold text-red-700 dark:text-red-400 mt-2">Different Signs = Negative</h4>
                  </div>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <p><MathText>{'$(+) \\div (-) = (-)$'}</MathText></p>
                    <p><MathText>{'$(-) \\div (+) = (-)$'}</MathText></p>
                    <p className="text-xs italic text-gray-600 dark:text-gray-400 mt-2">Example: <MathText>{'$12 \\div (-3) = -4$'}</MathText></p>
                    <p className="text-xs italic text-gray-600 dark:text-gray-400">Example: <MathText>{'$(-12) \\div 3 = -4$'}</MathText></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 3: Division with Same Signs
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculate: <MathText>{'$(-36) \\div (-9)$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Both numbers are negative (same signs)</p>
                <p>Step 1: Divide the absolute values: <MathText>{'$36 \\div 9 = 4$'}</MathText></p>
                <p>Step 2: Same signs → positive result</p>
                <p><strong>Answer: <MathText>{'$(-36) \\div (-9) = +4$'}</MathText></strong></p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 4: Division with Different Signs
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculate: <MathText>{'$20 \\div (-4)$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>One positive, one negative (different signs)</p>
                <p>Step 1: Divide the absolute values: <MathText>{'$20 \\div 4 = 5$'}</MathText></p>
                <p>Step 2: Different signs → negative result</p>
                <p><strong>Answer: <MathText>{'$20 \\div (-4) = -5$'}</MathText></strong></p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Division
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Calculate: <MathText>{'$(-45) \\div 5$'}</MathText>
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p>Different signs (one negative, one positive)</p>
                  <p>Divide values: <MathText>{'$45 \\div 5 = 9$'}</MathText></p>
                  <p>Different signs → negative</p>
                  <p><strong>Answer: <MathText>{'$(-45) \\div 5 = -9$'}</MathText></strong></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Order of Operations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            C. Order of Operations (BODMAS/PEMDAS)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When expressions contain multiple operations, follow the <strong className="text-purple-600 dark:text-purple-400">order of operations</strong>:
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-4 text-center text-lg">
                BODMAS / PEMDAS
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">B / P</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">Brackets / Parentheses</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">O / E</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">Orders / Exponents</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-center col-span-2 md:col-span-1">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">DM</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">Division & Multiplication</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">(left to right)</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-center col-span-2">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">AS</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">Addition & Subtraction</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">(left to right)</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 5: Order of Operations with Integers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Simplify: <MathText>{'$-3 \\times 4 + 8 \\div (-2)$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: No brackets, do multiplication and division first (left to right)</p>
                <p>Multiplication: <MathText>{'$-3 \\times 4 = -12$'}</MathText></p>
                <p>Division: <MathText>{'$8 \\div (-2) = -4$'}</MathText></p>
                <p>Step 2: Now add: <MathText>{'$-12 + (-4) = -16$'}</MathText></p>
                <p><strong>Answer: <MathText>{'$-16$'}</MathText></strong></p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 6: Complex Expression with Brackets
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Simplify: <MathText>{'$(5 - 8) \\times (-2) + 6$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: Brackets first: <MathText>{'$5 - 8 = -3$'}</MathText></p>
                <p>Expression becomes: <MathText>{'$(-3) \\times (-2) + 6$'}</MathText></p>
                <p>Step 2: Multiplication: <MathText>{'$(-3) \\times (-2) = +6$'}</MathText></p>
                <p>Expression becomes: <MathText>{'$6 + 6$'}</MathText></p>
                <p>Step 3: Addition: <MathText>{'$6 + 6 = 12$'}</MathText></p>
                <p><strong>Answer: <MathText>{'$12$'}</MathText></strong></p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Order of Operations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Simplify: <MathText>{'$12 \\div (-3) - 2 \\times 5$'}</MathText>
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p>Division and multiplication first (left to right):</p>
                  <p><MathText>{'$12 \\div (-3) = -4$'}</MathText></p>
                  <p><MathText>{'$2 \\times 5 = 10$'}</MathText></p>
                  <p>Then subtraction: <MathText>{'$-4 - 10 = -14$'}</MathText></p>
                  <p><strong>Answer: <MathText>{'$-14$'}</MathText></strong></p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Brackets and Operations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Simplify: <MathText>{'$(-2) \\times (3 - 7) + 10 \\div (-5)$'}</MathText>
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p>Brackets first: <MathText>{'$3 - 7 = -4$'}</MathText></p>
                  <p>Becomes: <MathText>{'$(-2) \\times (-4) + 10 \\div (-5)$'}</MathText></p>
                  <p>Multiplication: <MathText>{'$(-2) \\times (-4) = 8$'}</MathText></p>
                  <p>Division: <MathText>{'$10 \\div (-5) = -2$'}</MathText></p>
                  <p>Addition: <MathText>{'$8 + (-2) = 6$'}</MathText></p>
                  <p><strong>Answer: <MathText>{'$6$'}</MathText></strong></p>
                </div>
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
            <li><strong>Multiplication & Division Sign Rules:</strong> Same signs → positive result, different signs → negative result</li>
            <li>Positive × Positive = Positive (e.g., <MathText>{'$3 \\times 4 = 12$'}</MathText>)</li>
            <li>Negative × Negative = Positive (e.g., <MathText>{'$(-3) \\times (-4) = 12$'}</MathText>)</li>
            <li>Positive × Negative = Negative (e.g., <MathText>{'$3 \\times (-4) = -12$'}</MathText>)</li>
            <li>Division follows the same sign rules as multiplication</li>
            <li>Order of operations: BODMAS/PEMDAS - Brackets, Orders, Division/Multiplication, Addition/Subtraction</li>
            <li>Within the same priority level (like × and ÷), work from left to right</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
