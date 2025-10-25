import { useState } from 'react';

const BasicConcepts = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showPractice1, setShowPractice1] = useState(false);
  const [showPractice2, setShowPractice2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Basic Probability Concepts</h1>
        <p className="text-lg">Understanding experiments, outcomes, sample spaces, and fundamental probability calculations</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Sample Spaces and Outcomes */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. Sample Spaces and Outcomes</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Terms:</h3>
            <div className="space-y-3">
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Experiment:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">An activity or process that produces results (e.g., rolling a die, flipping a coin)</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Outcome:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">One possible result from an experiment</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Sample Space (S):</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">The set of ALL possible outcomes from an experiment</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Event:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">A set of one or more outcomes from the sample space</p>
              </div>
            </div>
          </div>

          {/* Example 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-blue-300 dark:border-blue-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 1: Rolling a Standard Die</h3>
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="mb-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded transition-colors"
            >
              {showExample1 ? 'Hide' : 'Show'} Solution
            </button>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              List the sample space for rolling a standard six-sided die.
            </p>
            {showExample1 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Solution:</p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Sample space S = {'{1, 2, 3, 4, 5, 6}'}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  There are 6 possible outcomes, and n(S) = 6
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Section 2: Basic Probability Formula */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">2. Basic Probability Calculation</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Probability Formula:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                P(Event) = Number of favorable outcomes / Total number of possible outcomes
              </p>
              <p className="text-center text-lg text-gray-700 dark:text-gray-300">
                P(E) = n(E) / n(S)
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-400 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Certain Event</h3>
              <p className="text-sm text-gray-800 dark:text-gray-200">P(E) = 1</p>
              <p className="text-xs text-gray-700 dark:text-gray-300">The event MUST happen</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-2 border-red-400 dark:border-red-600">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-2">Impossible Event</h3>
              <p className="text-sm text-gray-800 dark:text-gray-200">P(E) = 0</p>
              <p className="text-xs text-gray-700 dark:text-gray-300">The event CANNOT happen</p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <p className="font-semibold text-yellow-800 dark:text-yellow-200">
              💡 Probability Range: 0 ≤ P(E) ≤ 1 (or 0% to 100%)
            </p>
          </div>

          {/* Example 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-purple-300 dark:border-purple-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 2: Card Probability</h3>
            <button
              onClick={() => setShowExample2(!showExample2)}
              className="mb-3 px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded transition-colors"
            >
              {showExample2 ? 'Hide' : 'Show'} Solution
            </button>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              A standard deck has 52 cards. What is the probability of drawing a heart?
            </p>
            {showExample2 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Solution:</p>
                <div className="space-y-2 text-gray-800 dark:text-gray-200">
                  <p>• Total cards: n(S) = 52</p>
                  <p>• Hearts in deck: n(heart) = 13</p>
                  <p>• P(heart) = 13/52 = 1/4 = 0.25 or 25%</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Complementary Events */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">3. Complementary Events</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Complement Rule:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              The <strong>complement</strong> of event A (written as A') is the event that A does NOT occur.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-xl font-bold text-gray-900 dark:text-gray-100">
                P(A') = 1 - P(A)
              </p>
              <p className="text-center text-sm text-gray-700 dark:text-gray-300 mt-2">
                OR: P(A) + P(A') = 1
              </p>
            </div>
          </div>

          {/* Example 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-indigo-300 dark:border-indigo-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 3: Complement in Action</h3>
            <button
              onClick={() => setShowExample3(!showExample3)}
              className="mb-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded transition-colors"
            >
              {showExample3 ? 'Hide' : 'Show'} Solution
            </button>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              If P(rain tomorrow) = 0.35, what is P(no rain tomorrow)?
            </p>
            {showExample3 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Solution:</p>
                <div className="space-y-2 text-gray-800 dark:text-gray-200">
                  <p>• P(no rain) = P(rain') = 1 - P(rain)</p>
                  <p>• P(no rain) = 1 - 0.35 = 0.65 or 65%</p>
                  <p className="text-sm italic mt-3 text-gray-700 dark:text-gray-300">
                    The complement is useful when it's easier to calculate what doesn't happen!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 4: Probability with Sets */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">4. Probability with Sets and Venn Diagrams</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 dark:border-teal-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Set Notation in Probability:</h3>
            <div className="space-y-3">
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">P(A ∪ B):</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Probability that A OR B occurs (union)</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">P(A ∩ B):</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Probability that A AND B both occur (intersection)</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Universal Set (U):</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">The sample space S in probability context</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              💡 Venn Diagram Connection:
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Venn diagrams help visualize overlapping events. The total area represents the sample space, and each region's size shows probability.
            </p>
          </div>
        </div>

        {/* Practice Problems */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">Practice Problems</h2>

          {/* Practice 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-orange-300 dark:border-orange-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Practice 1: Sample Space</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              A coin is flipped twice. List the sample space and find P(exactly one head).
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
                  <p>• Sample space: S = {'{HH, HT, TH, TT}'}</p>
                  <p>• n(S) = 4</p>
                  <p>• Outcomes with exactly one head: {'{HT, TH}'}</p>
                  <p>• n(exactly one head) = 2</p>
                  <p className="font-bold">• P(exactly one head) = 2/4 = 1/2 = 0.5 or 50%</p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-orange-300 dark:border-orange-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Practice 2: Complement</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              A bag contains 20 marbles: 7 red, 5 blue, and 8 green. What is the probability of NOT drawing a red marble?
            </p>
            <button
              onClick={() => setShowPractice2(!showPractice2)}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white rounded transition-colors"
            >
              {showPractice2 ? 'Hide' : 'Show'} Solution
            </button>
            {showPractice2 && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <div className="space-y-2 text-gray-800 dark:text-gray-200">
                  <p><strong>Method 1: Direct Calculation</strong></p>
                  <p>• Not red = blue or green = 5 + 8 = 13</p>
                  <p>• P(not red) = 13/20 = 0.65 or 65%</p>
                  <p className="mt-3"><strong>Method 2: Using Complement</strong></p>
                  <p>• P(red) = 7/20 = 0.35</p>
                  <p>• P(not red) = 1 - P(red) = 1 - 0.35 = 0.65 or 65%</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 p-6 rounded-lg border-2 border-blue-400 dark:border-blue-600">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">🎯 Key Takeaways</h2>
          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
            <li>✓ Sample space (S) contains ALL possible outcomes</li>
            <li>✓ P(Event) = favorable outcomes / total outcomes</li>
            <li>✓ Probability always between 0 and 1 (0% to 100%)</li>
            <li>✓ P(A') = 1 - P(A) for complement events</li>
            <li>✓ Set notation connects to probability: ∪ (OR), ∩ (AND)</li>
            <li>✓ Venn diagrams visualize probability relationships</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BasicConcepts;
