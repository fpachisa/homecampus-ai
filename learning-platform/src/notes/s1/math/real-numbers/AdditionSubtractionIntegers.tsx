import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function AdditionSubtractionIntegers() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Addition & Subtraction of Integers</h1>
        <p className="mt-2 text-green-100">
          Master integer operations using zero pairs and number line strategies
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Addition with Zero Pairs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            A. Adding Integers Using Zero Pairs
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong className="text-green-600 dark:text-green-400">zero pair</strong> concept helps us understand integer addition. A zero pair is formed when we combine a positive and negative number that cancel out:
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">
                Zero Pair Concept
              </h3>
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center text-white font-bold text-xl">+</div>
                <span className="text-2xl text-gray-700 dark:text-gray-300">+</span>
                <div className="w-12 h-12 rounded-full bg-red-500 dark:bg-red-400 flex items-center justify-center text-white font-bold text-xl">−</div>
                <span className="text-2xl text-gray-700 dark:text-gray-300">=</span>
                <span className="text-3xl font-bold text-gray-800 dark:text-gray-100">0</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                <MathText>{'$(+1) + (-1) = 0$'}</MathText>
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-2 italic">
                One blue disc (positive) + one red disc (negative) = zero
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Rules for Adding Integers
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">Same signs:</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Add the numbers and keep the same sign</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Example: <MathText>{'$(+5) + (+3) = +8$'}</MathText> or <MathText>{'$(-4) + (-6) = -10$'}</MathText></p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 dark:bg-green-400 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">Different signs:</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Subtract the smaller from the larger, use sign of the larger</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Example: <MathText>{'$(+7) + (-3) = +4$'}</MathText> (7 {'>'} 3, so result is positive)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Adding with Same Signs
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculate: <MathText>{'$(-5) + (-3)$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Both numbers are negative (same sign)</p>
                <p>Step 1: Add the absolute values: <MathText>{'$5 + 3 = 8$'}</MathText></p>
                <p>Step 2: Keep the negative sign</p>
                <p><strong>Answer: <MathText>{'$(-5) + (-3) = -8$'}</MathText></strong></p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 2: Adding with Different Signs (Zero Pairs)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculate: <MathText>{'$(+6) + (-4)$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution Using Zero Pairs:</strong></p>
                <p>Visualize: 6 blue discs (positive) + 4 red discs (negative)</p>
                <p>Form 4 zero pairs (4 blue + 4 red = 0)</p>
                <p>Remaining: 2 blue discs</p>
                <p><strong>Answer: <MathText>{'$(+6) + (-4) = +2$'}</MathText></strong></p>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-2">Alternatively: <MathText>{'$6 - 4 = 2$'}</MathText> (larger is positive, so result is positive)</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Adding Integers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Calculate: <MathText>{'$(-8) + (+5)$'}</MathText>
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
                  <p>Different signs: subtract smaller from larger</p>
                  <p><MathText>{'$8 - 5 = 3$'}</MathText></p>
                  <p>Since 8 {'>'} 5 and 8 is negative, result is negative</p>
                  <p><strong>Answer: <MathText>{'$(-8) + (+5) = -3$'}</MathText></strong></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Subtraction of Integers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            B. Subtracting Integers
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Subtracting an integer is the same as <strong className="text-green-600 dark:text-green-400">adding its opposite</strong>:
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">
                Subtraction Rule
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-300 dark:border-green-700 mb-3">
                <p className="text-center text-xl font-bold text-gray-800 dark:text-gray-100">
                  <MathText>{'$a - b = a + (-b)$'}</MathText>
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                "Subtracting is the same as adding the negative"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  Subtracting Positive
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <MathText>{'$5 - (+3) = 5 + (-3) = 2$'}</MathText>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">Change to addition of negative</p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
                <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                  Subtracting Negative
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <MathText>{'$5 - (-3) = 5 + (+3) = 8$'}</MathText>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">Minus a negative = add positive!</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 3: Subtracting a Positive Number
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculate: <MathText>{'$(-4) - (+7)$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: Change subtraction to addition: <MathText>{'$(-4) + (-7)$'}</MathText></p>
                <p>Step 2: Both negative, so add and keep negative sign</p>
                <p>Step 3: <MathText>{'$4 + 7 = 11$'}</MathText>, keep negative</p>
                <p><strong>Answer: <MathText>{'$(-4) - (+7) = -11$'}</MathText></strong></p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 4: Subtracting a Negative Number
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculate: <MathText>{'$3 - (-5)$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: "Minus a negative" becomes "plus a positive": <MathText>{'$3 + (+5)$'}</MathText></p>
                <p>Step 2: Both positive, so add normally</p>
                <p><strong>Answer: <MathText>{'$3 - (-5) = 8$'}</MathText></strong></p>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-2">Remember: Two negatives make a positive!</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Subtracting Integers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Calculate: <MathText>{'$(-6) - (-9)$'}</MathText>
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
                  <p>Change to addition: <MathText>{'$(-6) + (+9)$'}</MathText></p>
                  <p>Different signs: <MathText>{'$9 - 6 = 3$'}</MathText></p>
                  <p>Since 9 {'>'} 6 and 9 is positive, result is positive</p>
                  <p><strong>Answer: <MathText>{'$(-6) - (-9) = +3$'}</MathText></strong></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Combined Operations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            C. Combined Operations & Real-World Applications
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In multi-step problems, work from left to right, converting all subtractions to additions:
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 5: Multi-Step Calculation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Simplify: <MathText>{'$8 - (-3) + (-5) - 4$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: Convert all to addition: <MathText>{'$8 + (+3) + (-5) + (-4)$'}</MathText></p>
                <p>Step 2: Group positives and negatives: <MathText>{'$(8 + 3) + (-5 + -4)$'}</MathText></p>
                <p>Step 3: Add each group: <MathText>{'$11 + (-9)$'}</MathText></p>
                <p>Step 4: Different signs: <MathText>{'$11 - 9 = 2$'}</MathText></p>
                <p><strong>Answer: <MathText>{'$2$'}</MathText></strong></p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 6: Real-World Application - Bank Account
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Sarah's bank account had $120. She deposited $50, then withdrew $80, then deposited $30. What is her final balance?
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Starting balance: <MathText>{'$+120$'}</MathText></p>
                <p>Deposit $50: <MathText>{'$+50$'}</MathText></p>
                <p>Withdraw $80: <MathText>{'$-80$'}</MathText></p>
                <p>Deposit $30: <MathText>{'$+30$'}</MathText></p>
                <p>Calculation: <MathText>{'$120 + 50 - 80 + 30$'}</MathText></p>
                <p>= <MathText>{'$(120 + 50 + 30) - 80 = 200 - 80$'}</MathText></p>
                <p><strong>Final Balance: $120</strong></p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Multi-Step Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Calculate: <MathText>{'$-5 + 8 - (-3) - 6$'}</MathText>
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
                  <p>Convert to addition: <MathText>{'$-5 + 8 + (+3) + (-6)$'}</MathText></p>
                  <p>Group: <MathText>{'$(8 + 3) + (-5 + -6) = 11 + (-11)$'}</MathText></p>
                  <p><strong>Answer: <MathText>{'$0$'}</MathText></strong></p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Temperature Change
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              The temperature was <MathText>-7°C</MathText> in the morning. It rose by <MathText>12°C</MathText> during the day, then dropped by <MathText>5°C</MathText> in the evening. What is the final temperature?
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
                  <p>Start: <MathText>-7°C</MathText></p>
                  <p>Rose 12°C: <MathText>{'$-7 + 12 = 5°C$'}</MathText></p>
                  <p>Dropped 5°C: <MathText>{'$5 - 5 = 0°C$'}</MathText></p>
                  <p><strong>Final Temperature: <MathText>0°C</MathText> (freezing point!)</strong></p>
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
            <li>Zero pairs: <MathText>{'$(+1) + (-1) = 0$'}</MathText> - one positive and one negative cancel out</li>
            <li>Same signs: Add the numbers and keep the sign (e.g., <MathText>{'$(-5) + (-3) = -8$'}</MathText>)</li>
            <li>Different signs: Subtract smaller from larger, keep sign of larger (e.g., <MathText>{'$(+7) + (-3) = +4$'}</MathText>)</li>
            <li>Subtraction rule: <MathText>{'$a - b = a + (-b)$'}</MathText> (change to adding the opposite)</li>
            <li>Subtracting a negative = adding a positive: <MathText>{'$5 - (-3) = 5 + 3 = 8$'}</MathText></li>
            <li>In multi-step problems, convert all operations to addition and work left to right</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
