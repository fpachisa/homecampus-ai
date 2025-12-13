import { useState } from 'react';

const DivisionAsFractions = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Division of Whole Numbers as Fractions</h1>
        <p className="text-lg">Discover the amazing connection between division and fractions!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Understanding Division as Fractions */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">1. Division and Fractions are the Same!</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Big Idea</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              When you <strong>divide</strong> something equally, you create <strong>fractions</strong>!
            </p>
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-xl font-mono text-center text-gray-900 dark:text-gray-100">
                a ÷ b = <span className="text-orange-600 dark:text-orange-400 font-bold">a/b</span>
              </p>
            </div>
          </div>

          {/* Visual Example: 1 pizza shared by 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Sharing 1 Pizza Among 3 Friends</h3>

            <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
              {/* Pizza visual */}
              <div className="flex-shrink-0">
                <svg width="150" height="150" viewBox="0 0 150 150" className="mx-auto">
                  <circle cx="75" cy="75" r="70" fill="#FCD34D" stroke="#F59E0B" strokeWidth="3"/>
                  <line x1="75" y1="5" x2="75" y2="145" stroke="#92400E" strokeWidth="2"/>
                  <line x1="14" y1="110" x2="136" y2="40" stroke="#92400E" strokeWidth="2"/>
                  <line x1="14" y1="40" x2="136" y2="110" stroke="#92400E" strokeWidth="2"/>
                  <circle cx="75" cy="75" r="8" fill="#DC2626"/>
                  <circle cx="55" cy="55" r="5" fill="#DC2626"/>
                  <circle cx="95" cy="55" r="5" fill="#DC2626"/>
                  <circle cx="55" cy="95" r="5" fill="#DC2626"/>
                  <circle cx="95" cy="95" r="5" fill="#DC2626"/>
                </svg>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">1 pizza cut into 3 equal parts</p>
              </div>

              <div className="flex-grow">
                <div className="space-y-3">
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>Situation:</strong> 1 pizza is shared equally among 3 children.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>Division:</strong> 1 ÷ 3 = ?
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>Each child gets:</strong> <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">1/3</span> of the pizza
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Key Insight:</strong> The number being shared (1) becomes the <strong>numerator</strong>.
                The number of people sharing (3) becomes the <strong>denominator</strong>.
              </p>
            </div>
          </div>

          {/* More examples */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">More Examples: 1 ÷ n = 1/n</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-orange-100 dark:bg-orange-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">1 ÷ 2 = <strong className="text-orange-600 dark:text-orange-400">1/2</strong></p>
                <p className="text-sm text-gray-600 dark:text-gray-400">one half</p>
              </div>
              <div className="p-4 bg-orange-100 dark:bg-orange-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">1 ÷ 4 = <strong className="text-orange-600 dark:text-orange-400">1/4</strong></p>
                <p className="text-sm text-gray-600 dark:text-gray-400">one quarter</p>
              </div>
              <div className="p-4 bg-orange-100 dark:bg-orange-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">1 ÷ 5 = <strong className="text-orange-600 dark:text-orange-400">1/5</strong></p>
                <p className="text-sm text-gray-600 dark:text-gray-400">one fifth</p>
              </div>
              <div className="p-4 bg-orange-100 dark:bg-orange-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">1 ÷ 8 = <strong className="text-orange-600 dark:text-orange-400">1/8</strong></p>
                <p className="text-sm text-gray-600 dark:text-gray-400">one eighth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Dividing Multiple Items */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">2. Dividing Multiple Items Equally</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Pattern</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When you share <strong>m items</strong> among <strong>n people</strong>, each person gets <strong>m/n</strong>.
            </p>
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-xl font-mono text-center text-gray-900 dark:text-gray-100">
                m ÷ n = <span className="text-blue-600 dark:text-blue-400 font-bold">m/n</span>
              </p>
            </div>
          </div>

          {/* Visual Example: 2 pizzas shared by 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Sharing 2 Pizzas Among 3 Friends</h3>

            <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
              {/* Two pizzas visual */}
              <div className="flex-shrink-0 flex gap-2">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="#FCD34D" stroke="#F59E0B" strokeWidth="2"/>
                  <line x1="50" y1="5" x2="50" y2="95" stroke="#92400E" strokeWidth="2"/>
                  <line x1="11" y1="72" x2="89" y2="28" stroke="#92400E" strokeWidth="2"/>
                  <line x1="11" y1="28" x2="89" y2="72" stroke="#92400E" strokeWidth="2"/>
                </svg>
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="#FCD34D" stroke="#F59E0B" strokeWidth="2"/>
                  <line x1="50" y1="5" x2="50" y2="95" stroke="#92400E" strokeWidth="2"/>
                  <line x1="11" y1="72" x2="89" y2="28" stroke="#92400E" strokeWidth="2"/>
                  <line x1="11" y1="28" x2="89" y2="72" stroke="#92400E" strokeWidth="2"/>
                </svg>
              </div>

              <div className="flex-grow">
                <div className="space-y-3">
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>Situation:</strong> 2 pizzas are shared equally among 3 children.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>Division:</strong> 2 ÷ 3 = ?
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>Method:</strong> Cut each pizza into 3 pieces. Each child gets 2 pieces (one from each pizza).
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>Each child gets:</strong> <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2/3</span> of a pizza
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* More examples */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">More Examples: m ÷ n = m/n</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">3 ÷ 4 = <strong className="text-blue-600 dark:text-blue-400">3/4</strong></p>
              </div>
              <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">4 ÷ 5 = <strong className="text-blue-600 dark:text-blue-400">4/5</strong></p>
              </div>
              <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">4 ÷ 7 = <strong className="text-blue-600 dark:text-blue-400">4/7</strong></p>
              </div>
              <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">3 ÷ 8 = <strong className="text-blue-600 dark:text-blue-400">3/8</strong></p>
              </div>
              <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">6 ÷ 7 = <strong className="text-blue-600 dark:text-blue-400">6/7</strong></p>
              </div>
              <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="text-lg font-mono text-gray-900 dark:text-gray-100">5 ÷ 9 = <strong className="text-blue-600 dark:text-blue-400">5/9</strong></p>
              </div>
            </div>
          </div>

          {/* Simplifying */}
          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Don't Forget to Simplify!</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Some fractions can be simplified to their lowest terms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <p className="font-mono text-gray-900 dark:text-gray-100">4 ÷ 6 = 4/6 = <strong className="text-green-600 dark:text-green-400">2/3</strong></p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Divide both by 2</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <p className="font-mono text-gray-900 dark:text-gray-100">6 ÷ 8 = 6/8 = <strong className="text-green-600 dark:text-green-400">3/4</strong></p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Divide both by 2</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Improper Fractions and Mixed Numbers */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">3. When Items Are More Than People</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Improper Fractions and Mixed Numbers</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When the number of items is <strong>more</strong> than the number of people, each person gets <strong>more than 1 whole</strong>!
            </p>
          </div>

          {/* Visual Example: 5 cakes shared by 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Sharing 5 Cakes Among 4 Children</h3>

            <div className="space-y-4">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Situation:</strong> 5 cakes are shared equally among 4 children.
              </p>

              <div className="flex flex-wrap gap-2 justify-center my-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-16 h-16 rounded-full bg-pink-300 dark:bg-pink-700 border-4 border-pink-500 flex items-center justify-center">
                    <span className="text-pink-800 dark:text-pink-200 font-bold">{i}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Step 1:</strong> 5 ÷ 4 = 5/4 (improper fraction)
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Step 2:</strong> Convert to mixed number: 5 ÷ 4 = 1 remainder 1
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Answer:</strong> 5/4 = <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">1 1/4</span>
                </p>
              </div>

              <p className="text-gray-800 dark:text-gray-200">
                Each child gets <strong>1 whole cake</strong> and <strong>1/4 of another cake</strong>.
              </p>
            </div>
          </div>

          {/* Converting improper to mixed */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Converting Improper Fractions to Mixed Numbers</h3>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Method:</strong> Divide the numerator by the denominator.
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-800 dark:text-gray-200">
                <li>The <strong>quotient</strong> becomes the whole number</li>
                <li>The <strong>remainder</strong> becomes the new numerator</li>
                <li>The denominator stays the same</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                <p className="font-mono text-gray-900 dark:text-gray-100">7 ÷ 3 = 7/3</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">7 = 3 × 2 + 1</p>
                <p className="font-bold text-purple-600 dark:text-purple-400">= 2 1/3</p>
              </div>
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                <p className="font-mono text-gray-900 dark:text-gray-100">9 ÷ 4 = 9/4</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">9 = 4 × 2 + 1</p>
                <p className="font-bold text-purple-600 dark:text-purple-400">= 2 1/4</p>
              </div>
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                <p className="font-mono text-gray-900 dark:text-gray-100">11 ÷ 5 = 11/5</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">11 = 5 × 2 + 1</p>
                <p className="font-bold text-purple-600 dark:text-purple-400">= 2 1/5</p>
              </div>
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                <p className="font-mono text-gray-900 dark:text-gray-100">17 ÷ 3 = 17/3</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">17 = 3 × 5 + 2</p>
                <p className="font-bold text-purple-600 dark:text-purple-400">= 5 2/3</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Word Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">4. Solving Word Problems</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Problem-Solving Steps</h3>
            <ol className="list-decimal ml-6 space-y-2 text-gray-800 dark:text-gray-200">
              <li><strong>Identify</strong> what is being shared and among how many</li>
              <li><strong>Write</strong> the division as a fraction</li>
              <li><strong>Simplify</strong> if possible</li>
              <li><strong>Convert</strong> to mixed number if needed</li>
              <li><strong>Include units</strong> in your answer</li>
            </ol>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-teal-600 dark:text-teal-400">Practice 1: The Pizza Problem</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              4 pizzas are shared equally among 7 children. What fraction of a pizza does each child get?
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="px-4 py-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/30 rounded border border-teal-300 dark:border-teal-700">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Solution:</strong><br/>
                  4 pizzas ÷ 7 children = 4/7<br/><br/>
                  Each child gets <strong className="text-teal-600 dark:text-teal-400">4/7</strong> of a pizza.
                </p>
              </div>
            )}
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-teal-600 dark:text-teal-400">Practice 2: The Rope Problem</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Liz has 7 metres of string. She cuts it into 4 equal pieces. What is the length of each piece?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="px-4 py-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/30 rounded border border-teal-300 dark:border-teal-700">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Solution:</strong><br/>
                  7 metres ÷ 4 pieces = 7/4 m<br/>
                  7/4 = 1 3/4<br/><br/>
                  Each piece is <strong className="text-teal-600 dark:text-teal-400">1 3/4 metres</strong> (or 7/4 m) long.
                </p>
              </div>
            )}
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-teal-600 dark:text-teal-400">Practice 3: The Water Problem</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              6 litres of water is poured equally into 8 flasks. How much water is in each flask?
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="px-4 py-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/30 rounded border border-teal-300 dark:border-teal-700">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Solution:</strong><br/>
                  6 litres ÷ 8 flasks = 6/8 litres<br/>
                  6/8 = 3/4 (simplify by dividing by 2)<br/><br/>
                  Each flask has <strong className="text-teal-600 dark:text-teal-400">3/4 litre</strong> of water.
                </p>
              </div>
            )}
          </div>

          {/* Practice Problem 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-teal-600 dark:text-teal-400">Practice 4: The Chocolate Problem</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              13 chocolate bars are shared equally among 5 children. How many chocolate bars does each child get?
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="px-4 py-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/30 rounded border border-teal-300 dark:border-teal-700">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Solution:</strong><br/>
                  13 ÷ 5 = 13/5<br/>
                  13 = 5 × 2 + 3<br/>
                  13/5 = 2 3/5<br/><br/>
                  Each child gets <strong className="text-teal-600 dark:text-teal-400">2 3/5</strong> chocolate bars.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <section>
          <div className="bg-orange-100 dark:bg-orange-900/40 p-6 rounded-lg border-l-4 border-orange-500">
            <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-200">Key Takeaways</h2>
            <ul className="space-y-3 text-gray-800 dark:text-gray-200">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">1.</span>
                <span><strong>Division = Fractions:</strong> a ÷ b = a/b</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">2.</span>
                <span>The <strong>numerator</strong> is what's being shared; the <strong>denominator</strong> is how many are sharing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">3.</span>
                <span>When numerator {">"} denominator, you get an <strong>improper fraction</strong> (more than 1 whole)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">4.</span>
                <span>Convert improper fractions to <strong>mixed numbers</strong> by dividing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">5.</span>
                <span>Always <strong>simplify</strong> your fractions and include <strong>units</strong> in word problems</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DivisionAsFractions;
