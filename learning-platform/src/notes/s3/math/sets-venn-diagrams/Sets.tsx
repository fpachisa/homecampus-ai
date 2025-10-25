import { useState } from 'react';

const Sets = () => {
  const [selectedSet, setSelectedSet] = useState('P');
  const [testElement, setTestElement] = useState('5');
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  // Example sets
  const exampleSets: Record<string, number[]> = {
    P: [2, 3, 5, 7, 11],
    V: [1, 5, 9, 15, 21],
    E: [2, 4, 6, 8, 10, 12],
  };

  // Check if element is in set
  const isElementInSet = (element: string, setName: string) => {
    const num = parseInt(element);
    return exampleSets[setName]?.includes(num);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Sets</h1>
        <p className="text-lg">Understanding collections of numbers or objects</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is a Set? */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">1. What is a Set?</h2>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              A <strong>set</strong> is a collection of numbers or objects.
            </p>
            <p className="text-sm">
              Each object is called an <strong>element</strong> or <strong>member</strong> of the set.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 rounded border-2 border-gray-300">
              <h3 className="font-bold mb-3">Set Notation:</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="font-mono">∈</span> means "is an element of" or "is in"</li>
                <li><span className="font-mono">∉</span> means "is not an element of" or "is not in"</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border-2 border-gray-300">
              <h3 className="font-bold mb-3">Writing Sets:</h3>
              <p className="text-sm mb-2">
                Write members within <strong>curly brackets</strong>, separated by commas.
              </p>
              <p className="font-mono text-sm">P = {'{2, 3, 5, 7, 11, ...}'}</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded border-2 border-green-300 mb-4">
            <h3 className="font-bold text-green-700 mb-2">Examples:</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-mono">P = {'{2, 3, 5, 7, 11, ...}'} <span className="text-gray-600">(set of prime numbers)</span></li>
              <li className="font-mono">5 ∈ P <span className="text-gray-600">(5 is prime)</span></li>
              <li className="font-mono">8 ∉ P <span className="text-gray-600">(8 is not prime)</span></li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded mb-4">
            <p className="font-semibold mb-3">Interactive: Test element membership</p>
            <div className="flex gap-3 mb-3 flex-wrap">
              {Object.keys(exampleSets).map(setName => (
                <button
                  key={setName}
                  onClick={() => setSelectedSet(setName)}
                  className={`px-4 py-2 rounded ${
                    selectedSet === setName
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border-2 border-blue-300'
                  }`}
                >
                  Set {setName} = {'{'}
                  {exampleSets[setName].slice(0, 3).join(', ')}
                  {'...}'}
                </button>
              ))}
            </div>
            <div className="flex gap-2 items-center mb-3">
              <input
                type="number"
                value={testElement}
                onChange={(e) => setTestElement(e.target.value)}
                className="px-3 py-2 border-2 border-gray-300 rounded w-24"
                placeholder="5"
              />
              <span className="font-mono text-lg">
                {isElementInSet(testElement, selectedSet) ? '∈' : '∉'}
              </span>
              <span className="font-mono">{selectedSet}</span>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="text-sm">
                <strong>{testElement}</strong>{' '}
                {isElementInSet(testElement, selectedSet) ? 'is' : 'is not'} an element of set{' '}
                <strong>{selectedSet}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Counting Elements */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">2. Counting Elements of Sets</h2>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Notation: n(A)</h3>
            <p className="mb-2">
              <span className="font-mono">n(A)</span> means "the number of elements in set A"
            </p>
            <ul className="space-y-1 text-sm ml-4 list-disc">
              <li>A set with a <strong>finite number</strong> of elements is called a <strong>finite set</strong></li>
              <li>A set with an <strong>infinite number</strong> of elements is called an <strong>infinite set</strong></li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded border-2 border-green-300">
              <h3 className="font-bold text-green-700 mb-3">Finite Sets:</h3>
              <ul className="space-y-2 text-sm">
                <li className="font-mono">V = {'{a, e, i, o, u}'}</li>
                <li className="font-mono">n(V) = 5</li>
                <li className="mt-3 font-mono">D = {'{2, 5, 7}'}</li>
                <li className="font-mono">n(D) = 3</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded border-2 border-orange-300">
              <h3 className="font-bold text-orange-700 mb-3">Infinite Sets:</h3>
              <ul className="space-y-2 text-sm">
                <li className="font-mono">E = {'{2, 4, 6, 8, 10, ...}'}</li>
                <li className="text-gray-600">(even numbers - infinite)</li>
                <li className="mt-3 font-mono">ℕ = {'{0, 1, 2, 3, 4, ...}'}</li>
                <li className="text-gray-600">(natural numbers - infinite)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Equal Sets */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">3. Equal Sets</h2>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p>
              Two sets are <strong>equal</strong> if they contain exactly the same elements.
            </p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Example:</h3>
            <div className="space-y-2">
              <p className="font-mono">{'{3, 8, 9, 11, 14}'} = {'{11, 8, 14, 3, 9}'}</p>
              <p className="text-sm text-gray-600">
                Order doesn't matter - both sets contain the same elements
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Important Note:</p>
            <p className="text-sm">The order in which elements are listed doesn't matter. Only the membership matters.</p>
          </div>
        </div>

        {/* Section 4: Subsets */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">4. Subsets</h2>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              Set A is a <strong>subset</strong> of set B if every element of A is also an element of B.
            </p>
            <p className="font-mono text-center text-lg">We write: A ⊆ B</p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Example:</h3>
            <div className="space-y-3">
              <p>Let <span className="font-mono">D = {'{2, 5, 7}'}</span></p>
              <p>Let <span className="font-mono">P = {'{2, 3, 5, 7, 11, ...}'}</span> (prime numbers)</p>
              <p className="mt-3">
                Since every element of D (2, 5, and 7) is also in P, we can write:
              </p>
              <p className="font-mono text-lg text-center text-blue-600">D ⊆ P</p>
            </div>
          </div>

          {/* Visual representation */}
          <div className="bg-gray-50 p-4 rounded">
            <p className="font-semibold mb-3 text-center">Visual: Subset Relationship</p>
            <svg width="400" height="250" className="mx-auto">
              {/* Larger set P */}
              <ellipse cx="200" cy="125" rx="150" ry="100" fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
              <text x="50" y="50" className="text-2xl font-bold fill-blue-600">P (Primes)</text>

              {/* Smaller set D inside P */}
              <ellipse cx="200" cy="125" rx="70" ry="50" fill="#86efac" stroke="#16a34a" strokeWidth="3" />
              <text x="165" y="120" className="text-lg font-bold fill-green-700">D</text>

              {/* Elements of D */}
              <text x="160" y="145" className="text-sm font-semibold">{'{2, 5, 7}'}</text>

              {/* Other elements of P */}
              <text x="280" y="80" className="text-sm">3</text>
              <text x="100" y="170" className="text-sm">11</text>
              <text x="320" y="150" className="text-sm">13</text>
            </svg>
            <p className="text-center text-sm mt-2 text-gray-600">D is completely inside P, so D ⊆ P</p>
          </div>
        </div>

        {/* Section 5: Empty Set */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">5. The Empty Set</h2>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              The <strong>empty set</strong> is a set which contains no elements.
            </p>
            <p className="text-sm">
              We can write it as: <span className="font-mono">∅</span> or <span className="font-mono">{'{  }'}</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Key Property:</h3>
            <p>The empty set is a subset of all other sets.</p>
            <p className="text-sm text-gray-600 mt-2">
              (Since there are no elements in ∅, we can't find any element that's NOT in another set)
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Remember:</p>
            <p className="text-sm">∅ ⊆ A for any set A</p>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-blue-100 rounded-lg font-semibold hover:bg-blue-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Set Membership and Counting
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-blue-500">
                <p className="font-semibold mb-3">
                  Let P = {'{'}composite factors of 50{'}'} and Q = {'{'}numbers less than 50 with exactly 4 factors{'}'}
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">a) List the elements of P and Q</p>
                    <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                      <p><strong>P:</strong> Composite factors of 50 are: 4, 6, 10, 25, 50</p>
                      <p className="font-mono">P = {'{4, 6, 10, 25, 50}'}</p>
                      <p className="mt-3"><strong>Q:</strong> Numbers with exactly 4 factors (less than 50):</p>
                      <p className="text-sm text-gray-600">
                        6 (1,2,3,6), 8 (1,2,4,8), 10 (1,2,5,10), 14 (1,2,7,14), 15 (1,3,5,15), ...
                      </p>
                      <p className="font-mono">Q = {'{6, 8, 10, 14, 15, 21, 22, 26, 27, 33, 34, 35, 38, 39, 46}'}</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">b) True or false?</p>
                    <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                      <p><span className="font-bold">i)</span> 10 ∈ P → <span className="text-green-600 font-bold">TRUE</span> (10 is in P)</p>
                      <p><span className="font-bold">ii)</span> 18 ∈ Q → <span className="text-red-600 font-bold">FALSE</span> (18 has 6 factors)</p>
                      <p><span className="font-bold">iii)</span> 5 ∉ P → <span className="text-green-600 font-bold">TRUE</span> (5 is prime, not composite)</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">c) Find n(P) and n(Q)</p>
                    <div className="ml-4 space-y-2 bg-gray-50 p-4 rounded">
                      <p className="font-mono">n(P) = 5</p>
                      <p className="font-mono">n(Q) = 15</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">d) Is P ⊆ Q?</p>
                    <div className="ml-4 bg-gray-50 p-4 rounded">
                      <p className="text-red-600 font-bold">NO</p>
                      <p className="text-sm mt-2">
                        Not all elements of P are in Q. For example, 4 ∈ P but 4 ∉ Q.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-blue-100 rounded-lg font-semibold hover:bg-blue-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Subsets
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-blue-500">
                <p className="font-semibold mb-3">
                  Suppose A ⊆ B. If n(A) = k, how many subsets does A have?
                </p>

                <div className="ml-4 bg-gray-50 p-4 rounded">
                  <p className="mb-3">
                    A set with k elements has <strong>2^k</strong> subsets (including the empty set and the set itself).
                  </p>
                  <p className="font-bold">Answer: 2^k subsets</p>

                  <div className="mt-4 p-3 bg-white rounded">
                    <p className="text-sm font-semibold mb-2">Example: If A = {'{a, b, c}'}, then n(A) = 3</p>
                    <p className="text-sm">Number of subsets = 2³ = 8</p>
                    <p className="text-sm mt-2">The subsets are:</p>
                    <p className="text-xs font-mono mt-1">
                      ∅, {'{a}'}, {'{b}'}, {'{c}'}, {'{a,b}'}, {'{a,c}'}, {'{b,c}'}, {'{a,b,c}'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                1. List the elements of A, the set of positive two-digit whole numbers which contain the digit 4.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p className="font-mono">A = {'{14, 24, 34, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 54, 64, 74, 84, 94}'}</p>
                  <p className="mt-2 text-sm">n(A) = 18</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                2. For each set, state whether it is finite or infinite. If finite, state n(set).
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p><strong>a)</strong> A = {'{factors of 6}'} → Finite, n(A) = 4 {'{1, 2, 3, 6}'}</p>
                  <p><strong>b)</strong> B = {'{multiples of 6}'} → Infinite</p>
                  <p><strong>c)</strong> C = {'{factors of 17}'} → Finite, n(C) = 2 {'{1, 17}'}</p>
                  <p><strong>d)</strong> D = {'{odd numbers}'} → Infinite</p>
                  <p><strong>e)</strong> E = {'{prime numbers less than 20}'} → Finite, n(E) = 8</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                3. Decide whether A ⊆ B for each pair:
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p><strong>a)</strong> A = {'{2, 5, 6}'} and B = {'{1, 2, 3, 4, 5, 6, 7, 8}'} → <span className="text-green-600 font-bold">YES ✓</span></p>
                  <p><strong>b)</strong> A = {'{4, 8, 11, 12}'} and B = {'{2, 4, 6, 8, 10, 12, 14, 16}'} → <span className="text-red-600 font-bold">NO ✗</span> (11 ∉ B)</p>
                  <p><strong>c)</strong> A = ∅ and B = {'{1, 4, 7, 10}'} → <span className="text-green-600 font-bold">YES ✓</span> (empty set is subset of all sets)</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>A <strong>set</strong> is a collection of objects called <strong>elements</strong></li>
            <li>Use <strong>∈</strong> for "is an element of" and <strong>∉</strong> for "is not an element of"</li>
            <li>Write sets using curly brackets: {'{a, b, c}'}</li>
            <li><strong>n(A)</strong> counts the number of elements in set A</li>
            <li><strong>Finite sets</strong> have a countable number of elements; <strong>infinite sets</strong> do not</li>
            <li>Two sets are <strong>equal</strong> if they contain exactly the same elements (order doesn't matter)</li>
            <li><strong>A ⊆ B</strong> means every element of A is also in B (A is a subset of B)</li>
            <li>The <strong>empty set</strong> (∅ or {'{ }'}) contains no elements and is a subset of every set</li>
            <li>A set with k elements has <strong>2^k subsets</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sets;
