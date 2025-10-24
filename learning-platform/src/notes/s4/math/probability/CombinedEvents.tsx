import React, { useState } from 'react';

const CombinedEvents = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showPractice1, setShowPractice1] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Combined Events & Probability Rules</h1>
        <p className="text-lg">Addition and multiplication rules for combining probabilities</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Mutually Exclusive Events */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">1. Mutually Exclusive Events</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Two events are <strong>mutually exclusive</strong> if they CANNOT happen at the same time.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Key Property:</p>
              <p className="text-gray-800 dark:text-gray-200">If A and B are mutually exclusive, then P(A ∩ B) = 0</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-400 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">✓ Mutually Exclusive</h3>
              <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                <li>• Rolling a 2 and rolling a 5 (on one die)</li>
                <li>• Being in Year 3 and Year 4 (same student)</li>
                <li>• Drawing a heart and drawing a spade</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-2 border-red-400 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-2">✗ NOT Mutually Exclusive</h3>
              <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                <li>• Rolling an even number and rolling a 4</li>
                <li>• Being tall and having brown hair</li>
                <li>• Drawing a heart and drawing a king</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Addition Rule (Mutually Exclusive):</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-xl font-bold text-gray-900 dark:text-gray-100">
                P(A ∪ B) = P(A) + P(B)
              </p>
              <p className="text-center text-sm text-gray-700 dark:text-gray-300 mt-2">
                When events cannot happen together, just ADD their probabilities
              </p>
            </div>
          </div>

          {/* Example 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-purple-300 dark:border-purple-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 1: Mutually Exclusive Addition</h3>
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="mb-3 px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded transition-colors"
            >
              {showExample1 ? 'Hide' : 'Show'} Solution
            </button>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              A die is rolled. Find P(rolling a 2 or rolling a 5).
            </p>
            {showExample1 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <div className="space-y-2 text-gray-800 dark:text-gray-200">
                  <p>• These events are mutually exclusive (can't roll both at once)</p>
                  <p>• P(2) = 1/6</p>
                  <p>• P(5) = 1/6</p>
                  <p className="font-bold">• P(2 or 5) = P(2) + P(5) = 1/6 + 1/6 = 2/6 = 1/3</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 2: General Addition Rule */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-pink-800 dark:text-pink-300">2. General Addition Rule</h2>

          <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border-l-4 border-pink-500 dark:border-pink-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">For ANY Two Events:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
              </p>
              <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                Subtract the overlap to avoid counting it twice!
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              💡 Why subtract P(A ∩ B)?
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              When events can overlap, P(A) includes some overlap and P(B) includes the same overlap. We've counted it twice, so subtract it once!
            </p>
          </div>

          {/* Example 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-pink-300 dark:border-pink-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 2: General Addition Rule</h3>
            <button
              onClick={() => setShowExample2(!showExample2)}
              className="mb-3 px-4 py-2 bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white rounded transition-colors"
            >
              {showExample2 ? 'Hide' : 'Show'} Solution
            </button>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              From a deck of 52 cards, find P(drawing a heart OR drawing a king).
            </p>
            {showExample2 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <div className="space-y-2 text-gray-800 dark:text-gray-200">
                  <p>• P(heart) = 13/52</p>
                  <p>• P(king) = 4/52</p>
                  <p>• P(heart AND king) = P(king of hearts) = 1/52</p>
                  <p>• P(heart OR king) = 13/52 + 4/52 - 1/52 = 16/52 = 4/13</p>
                  <p className="text-sm italic mt-2">Note: We subtract because the king of hearts is counted in both!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Independent Events */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">3. Independent Events</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Two events are <strong>independent</strong> if the occurrence of one does NOT affect the probability of the other.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Examples:</p>
              <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                <li>• Flipping a coin twice (first flip doesn't affect second)</li>
                <li>• Rolling two dice (dice don't affect each other)</li>
                <li>• Drawing with replacement (put card back, so deck unchanged)</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-2 border-red-400 dark:border-red-600 mb-4">
            <h3 className="font-bold text-red-700 dark:text-red-300 mb-2">⚠️ Common Mistake</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Independent ≠ Mutually Exclusive!<br/>
              • Mutually exclusive: events can't happen together (P(A ∩ B) = 0)<br/>
              • Independent: events don't affect each other (P(A ∩ B) = P(A) × P(B))
            </p>
          </div>
        </div>

        {/* Section 4: Multiplication Rule */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">4. Multiplication Rule (Independent Events)</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 dark:border-teal-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Multiplication Rule:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                P(A ∩ B) = P(A) × P(B)
              </p>
              <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                For independent events, MULTIPLY the probabilities
              </p>
            </div>
          </div>

          {/* Example 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-teal-300 dark:border-teal-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 3: Multiplication Rule</h3>
            <button
              onClick={() => setShowExample3(!showExample3)}
              className="mb-3 px-4 py-2 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white rounded transition-colors"
            >
              {showExample3 ? 'Hide' : 'Show'} Solution
            </button>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              A coin is flipped and a die is rolled. Find P(heads AND rolling a 6).
            </p>
            {showExample3 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <div className="space-y-2 text-gray-800 dark:text-gray-200">
                  <p>• These events are independent</p>
                  <p>• P(heads) = 1/2</p>
                  <p>• P(6) = 1/6</p>
                  <p className="font-bold">• P(heads AND 6) = 1/2 × 1/6 = 1/12</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">Practice Problem</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-orange-300 dark:border-orange-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Practice: Combined Rules</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Two coins are flipped. Find P(at least one head).
            </p>
            <button
              onClick={() => setShowPractice1(!showPractice1)}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white rounded transition-colors"
            >
              {showPractice1 ? 'Hide' : 'Show'} Solution
            </button>
            {showPractice1 && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <div className="space-y-2 text-gray-800 dark:text-gray-200">
                  <p><strong>Method 1: Using Complement (Easier!)</strong></p>
                  <p>• "At least one head" = NOT "zero heads" = NOT "both tails"</p>
                  <p>• P(both tails) = 1/2 × 1/2 = 1/4</p>
                  <p className="font-bold">• P(at least one head) = 1 - 1/4 = 3/4</p>
                  <p className="mt-3"><strong>Method 2: Direct (Harder)</strong></p>
                  <p>• Sample space: {'{HH, HT, TH, TT}'}</p>
                  <p>• At least one head: {'{HH, HT, TH}'} = 3 outcomes</p>
                  <p>• P(at least one head) = 3/4</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 p-6 rounded-lg border-2 border-purple-400 dark:border-purple-600">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">🎯 Key Takeaways</h2>
          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
            <li>✓ Mutually exclusive: events can't happen together → ADD probabilities</li>
            <li>✓ General addition: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</li>
            <li>✓ Independent: events don't affect each other → MULTIPLY probabilities</li>
            <li>✓ P(A ∩ B) = P(A) × P(B) for independent events</li>
            <li>✓ "At least one" problems: use complement strategy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CombinedEvents;
