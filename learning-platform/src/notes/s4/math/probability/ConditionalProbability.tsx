import { useState } from 'react';

const ConditionalProbability = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showExample4, setShowExample4] = useState(false);
  const [showPractice1, setShowPractice1] = useState(false);
  const [showPractice2, setShowPractice2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Conditional Probability</h1>
        <p className="text-lg">Understanding probability when additional information is given</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Conditional Probability Concept */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">1. What is Conditional Probability?</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              <strong>Conditional probability</strong> is the probability of an event occurring <em>given that</em> another event has already occurred.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                P(A|B)
              </p>
              <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                Read as: "The probability of A <strong>given</strong> B"
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Idea: Restricted Sample Space</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              When we know B has occurred, we only consider the part of the sample space where B is true. This <strong>restricts</strong> our sample space.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example in everyday language:</p>
              <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                <li>• P(student passes exam) - regular probability</li>
                <li>• P(student passes exam | student studied 5+ hours) - conditional probability</li>
                <li>• The second probability considers only students who studied 5+ hours</li>
              </ul>
            </div>
          </div>

          {/* Example 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-indigo-300 dark:border-indigo-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 1: Understanding "Given That"</h3>
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="mb-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded transition-colors"
            >
              {showExample1 ? 'Hide' : 'Show'} Solution
            </button>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Two dice are rolled. Given that the sum is 8, what is the probability that both dice show the same number?
            </p>
            {showExample1 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <div className="space-y-3 text-gray-800 dark:text-gray-200">
                  <p><strong>Step 1: List all ways to get sum = 8</strong></p>
                  <p className="ml-4">(2,6), (3,5), (4,4), (5,3), (6,2) → 5 outcomes</p>
                  <p className="ml-4">This is our new restricted sample space</p>

                  <p className="mt-3"><strong>Step 2: How many have both dice the same?</strong></p>
                  <p className="ml-4">Only (4,4) → 1 outcome</p>

                  <p className="mt-3 font-bold">P(same | sum=8) = 1/5</p>

                  <p className="text-sm italic mt-3 text-gray-700 dark:text-gray-300">
                    Note: We only looked at the 5 outcomes where sum=8, not all 36 possible rolls!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 2: Conditional Probability Formula */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. The Conditional Probability Formula</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Formula:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
              <p className="text-center text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                P(A|B) = P(A ∩ B) / P(B)
              </p>
              <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                (provided P(B) ≠ 0)
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">What does this mean?</p>
              <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                <li>• <strong>P(A ∩ B)</strong> = probability both A and B occur</li>
                <li>• <strong>P(B)</strong> = probability B occurs (our new "universe")</li>
                <li>• We divide to find what fraction of B-outcomes also have A</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded border-2 border-purple-400 dark:border-purple-600 mb-4">
            <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Rearranged (Multiplication Form):</h3>
            <p className="text-center text-xl font-bold text-gray-900 dark:text-gray-100">
              P(A ∩ B) = P(B) × P(A|B)
            </p>
            <p className="text-center text-sm text-gray-700 dark:text-gray-300 mt-2">
              Also equals: P(A) × P(B|A)
            </p>
          </div>

          {/* Example 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-blue-300 dark:border-blue-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 2: Using the Formula</h3>
            <button
              onClick={() => setShowExample2(!showExample2)}
              className="mb-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded transition-colors"
            >
              {showExample2 ? 'Hide' : 'Show'} Solution
            </button>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              In a class of 30 students, 18 study Math, 15 study Physics, and 10 study both. If a student studies Physics, what is the probability they also study Math?
            </p>
            {showExample2 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <div className="space-y-3 text-gray-800 dark:text-gray-200">
                  <p><strong>We want:</strong> P(Math | Physics)</p>

                  <p className="mt-2"><strong>Given information:</strong></p>
                  <p className="ml-4">• P(Physics) = 15/30 = 1/2</p>
                  <p className="ml-4">• P(Math ∩ Physics) = 10/30 = 1/3</p>

                  <p className="mt-3"><strong>Apply formula:</strong></p>
                  <p className="ml-4">P(Math | Physics) = P(Math ∩ Physics) / P(Physics)</p>
                  <p className="ml-4">= (10/30) / (15/30)</p>
                  <p className="ml-4">= 10/15</p>
                  <p className="ml-4 font-bold">= 2/3</p>

                  <p className="text-sm italic mt-3 text-gray-700 dark:text-gray-300">
                    Interpretation: Of the 15 Physics students, 10 also study Math, so 10/15 = 2/3
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              💡 Testing for Independence:
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Events A and B are <strong>independent</strong> if and only if:<br/>
              <span className="font-bold">P(A|B) = P(A)</span><br/>
              This means: knowing B occurred doesn't change the probability of A
            </p>
          </div>
        </div>

        {/* Section 3: Conditional Probability with Trees */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">3. Conditional Probability with Tree Diagrams</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 dark:border-teal-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Using Trees for Conditional Probability:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Tree diagrams naturally show conditional probabilities on their branches!
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Key Insight:</p>
              <p className="text-sm text-gray-800 dark:text-gray-200">
                Each branch probability is <strong>conditional</strong> on the path taken to reach it. The branches show P(second outcome | first outcome).
              </p>
            </div>
          </div>

          {/* Example 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-teal-300 dark:border-teal-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 3: Medical Testing</h3>
            <button
              onClick={() => setShowExample3(!showExample3)}
              className="mb-3 px-4 py-2 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white rounded transition-colors"
            >
              {showExample3 ? 'Hide' : 'Show'} Solution
            </button>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              A disease affects 1% of the population. A test is 95% accurate for those with the disease, and 90% accurate for those without. If someone tests positive, what's the probability they have the disease?
            </p>
            {showExample3 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <div className="space-y-3 text-gray-800 dark:text-gray-200">
                  <p><strong>Step 1: Set up tree</strong></p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-xs">
                    <p>         Positive (0.95) → D & Pos: 0.01 × 0.95 = 0.0095</p>
                    <p>Disease (0.01)</p>
                    <p>         Negative (0.05) → D & Neg: 0.01 × 0.05 = 0.0005</p>
                    <p>Start</p>
                    <p>         Positive (0.10) → No D & Pos: 0.99 × 0.10 = 0.099</p>
                    <p>No Disease (0.99)</p>
                    <p>         Negative (0.90) → No D & Neg: 0.99 × 0.90 = 0.891</p>
                  </div>

                  <p className="mt-3"><strong>Step 2: Find P(Disease | Positive)</strong></p>
                  <p className="ml-4">• P(Positive) = 0.0095 + 0.099 = 0.1085</p>
                  <p className="ml-4">• P(Disease ∩ Positive) = 0.0095</p>
                  <p className="ml-4">• P(Disease | Positive) = 0.0095 / 0.1085</p>
                  <p className="ml-4 font-bold">≈ 0.0875 or 8.75%</p>

                  <p className="text-sm italic mt-3 text-red-700 dark:text-red-300">
                    Surprising! Even with a positive test, only 8.75% chance of having the disease because it's so rare.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 4: Two-Way Tables */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">4. Conditional Probability with Two-Way Tables</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Two-Way Tables:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Also called <strong>contingency tables</strong>, they organize data by two categories and make conditional probability easy to read.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">How to find P(A|B) from a table:</p>
              <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                <li>1. Find the row or column for B (the "given" condition)</li>
                <li>2. Find the cell for A ∩ B (both conditions)</li>
                <li>3. Divide: P(A|B) = (A ∩ B value) / (B total)</li>
              </ul>
            </div>
          </div>

          {/* Example 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-purple-300 dark:border-purple-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 4: Survey Data</h3>
            <button
              onClick={() => setShowExample4(!showExample4)}
              className="mb-3 px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded transition-colors"
            >
              {showExample4 ? 'Hide' : 'Show'} Solution
            </button>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              A survey of 100 people about pet ownership:
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2"></th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Dog</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">No Dog</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Total</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Cat</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">15</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">25</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">40</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">No Cat</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">35</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">25</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">60</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Total</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">50</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">50</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-800 dark:text-gray-200">
              Find P(has cat | has dog).
            </p>
            {showExample4 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <div className="space-y-2 text-gray-800 dark:text-gray-200">
                  <p><strong>We want:</strong> P(Cat | Dog)</p>
                  <p className="mt-2"><strong>Look at the "Dog" column (our given condition):</strong></p>
                  <p className="ml-4">• Total people with dogs: 50</p>
                  <p className="ml-4">• People with both cat AND dog: 15</p>
                  <p className="mt-2 font-bold">P(Cat | Dog) = 15/50 = 3/10 = 0.3 or 30%</p>
                  <p className="text-sm italic mt-2 text-gray-700 dark:text-gray-300">
                    Of the 50 dog owners, 15 also have cats.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">Practice Problems</h2>

          {/* Practice 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-orange-300 dark:border-orange-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Practice 1: Formula Application</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              P(A) = 0.6, P(B) = 0.5, P(A ∩ B) = 0.3. Find P(A|B) and determine if A and B are independent.
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
                  <p><strong>Part 1: Find P(A|B)</strong></p>
                  <p className="ml-4">P(A|B) = P(A ∩ B) / P(B)</p>
                  <p className="ml-4">= 0.3 / 0.5</p>
                  <p className="ml-4 font-bold">= 0.6</p>

                  <p className="mt-3"><strong>Part 2: Test for independence</strong></p>
                  <p className="ml-4">For independence, need P(A|B) = P(A)</p>
                  <p className="ml-4">P(A|B) = 0.6 and P(A) = 0.6</p>
                  <p className="ml-4 font-bold">YES, they are independent!</p>
                  <p className="text-sm italic mt-2">Knowing B occurred doesn't change probability of A.</p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-orange-300 dark:border-orange-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Practice 2: Two-Way Table</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Using the pet ownership table from Example 4, find P(has dog | does not have cat).
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
                  <p><strong>Look at "No Cat" row (our given condition):</strong></p>
                  <p className="ml-4">• Total people without cats: 60</p>
                  <p className="ml-4">• People with dog but no cat: 35</p>
                  <p className="mt-2 font-bold">P(Dog | No Cat) = 35/60 = 7/12 ≈ 0.583 or 58.3%</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/50 dark:to-blue-900/50 p-6 rounded-lg border-2 border-indigo-400 dark:border-indigo-600">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">🎯 Key Takeaways</h2>
          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
            <li>✓ P(A|B) means "probability of A given that B has occurred"</li>
            <li>✓ Formula: P(A|B) = P(A ∩ B) / P(B)</li>
            <li>✓ Conditional probability uses a restricted sample space</li>
            <li>✓ Independence: P(A|B) = P(A) (knowing B doesn't affect A)</li>
            <li>✓ Tree diagrams: branches show conditional probabilities naturally</li>
            <li>✓ Two-way tables: read off conditional probabilities directly</li>
            <li>✓ Bayes' theorem: updating probabilities with new information</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConditionalProbability;
