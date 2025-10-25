import { useState } from 'react';

const ComplementOfSet = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  // Visual Complement Component
  const ComplementVisualizer = ({
    U: _U,
    A,
    AComplement
  }: {
    U: number[];
    A: number[];
    AComplement: number[]
  }) => {
    return (
      <svg width="450" height="280" className="mx-auto">
        {/* Universal set rectangle */}
        <rect x="20" y="20" width="410" height="240" fill="#f0f9ff" stroke="#0369a1" strokeWidth="3" rx="10" />
        <text x="30" y="45" className="text-2xl font-bold fill-blue-700">U</text>

        {/* Set A circle */}
        <circle cx="225" cy="140" r="80" fill="#bfdbfe" stroke="#1e40af" strokeWidth="3" />
        <text x="210" y="100" className="text-xl font-bold fill-blue-900">A</text>

        {/* Elements in A */}
        {A.slice(0, 4).map((el, i) => {
          const positions = [
            { x: 200, y: 130 },
            { x: 245, y: 130 },
            { x: 210, y: 160 },
            { x: 240, y: 160 }
          ];
          const pos = positions[i] || { x: 225, y: 140 };
          return (
            <text key={`a-${i}`} x={pos.x} y={pos.y} className="text-sm font-semibold fill-blue-800">
              {el}
            </text>
          );
        })}

        {/* Elements in A' (complement) */}
        {AComplement.slice(0, 6).map((el, i) => {
          const positions = [
            { x: 60, y: 80 },
            { x: 370, y: 80 },
            { x: 60, y: 200 },
            { x: 370, y: 200 },
            { x: 60, y: 140 },
            { x: 370, y: 140 }
          ];
          const pos = positions[i] || { x: 400, y: 240 };
          return (
            <text key={`ac-${i}`} x={pos.x} y={pos.y} className="text-sm font-semibold fill-blue-700">
              {el}
            </text>
          );
        })}

        {/* Label for complement region */}
        <text x="350" y="250" className="text-lg font-bold fill-blue-700">A'</text>
      </svg>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Complement of a Set</h1>
        <p className="text-lg">Understanding the universal set and set complements</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Universal Set */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800">1. The Universal Set</h2>

          <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              The <strong>universal set</strong> U is the set of all elements we are considering.
            </p>
            <p className="text-sm">
              It's like the "universe" for our problem - everything we're working with is in U.
            </p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Examples:</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <p>If we're only interested in positive whole numbers:</p>
                <p className="font-mono ml-4 mt-1">U = {'{1, 2, 3, 4, ...}'}</p>
              </li>
              <li>
                <p>If we're only interested in single-digit numbers:</p>
                <p className="font-mono ml-4 mt-1">U = {'{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}'}</p>
              </li>
              <li>
                <p>If we're studying a class of 30 students:</p>
                <p className="font-mono ml-4 mt-1">U = {'{all 30 students in the class}'}</p>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Important:</p>
            <p className="text-sm">
              The universal set depends on the context of the problem. It can change from one problem to another!
            </p>
          </div>
        </div>

        {/* Section 2: Complement Definition */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800">2. Understanding Complements</h2>

          <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              The <strong>complement</strong> of a set A is the set of all elements of U that are <em>not</em> elements of A.
            </p>
            <div className="bg-white p-4 rounded mt-3">
              <p className="text-sm mb-2">The complement of A is written <strong>A'</strong></p>
              <p className="text-sm">We say that A and A' are <strong>complementary</strong></p>
            </div>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Example:</h3>
            <div className="space-y-2">
              <p>Let <span className="font-mono">U = {'{1, 2, 3, 4, 5, 6, 7, 8, 9}'}</span></p>
              <p>Let <span className="font-mono">A = {'{2, 5, 6, 8}'}</span></p>
              <p className="mt-3">Then the complement A' contains all elements in U that are NOT in A:</p>
              <p className="font-mono text-lg text-center mt-2 text-cyan-600">
                A' = {'{1, 3, 4, 7, 9}'}
              </p>
            </div>
          </div>

          {/* Visual Representation */}
          <div className="bg-gray-50 p-4 rounded">
            <p className="font-semibold mb-3 text-center">Visual: Complement in Universal Set</p>
            <ComplementVisualizer
              U={[1,2,3,4,5,6,7,8,9]}
              A={[2,5,6,8]}
              AComplement={[1,3,4,7,9]}
            />
            <p className="text-center text-sm mt-3 text-gray-600">
              Blue circle = A, Outside region = A' (everything in U that's not in A)
            </p>
          </div>
        </div>

        {/* Section 3: Complement Properties */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800">3. Formulas for Complements</h2>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300 mb-4">
            <h3 className="font-bold text-lg mb-4">Key Formulas:</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-bold mb-2">Formula 1: Counting Elements</p>
                <p className="font-mono text-lg text-center">n(A') = n(U) - n(A)</p>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Number of elements NOT in A = Total - Number in A
                </p>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-bold mb-2">Formula 2: Relationship Between A and A'</p>
                <p className="font-mono text-lg text-center">n(A) + n(A') = n(U)</p>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Elements in A + Elements not in A = All elements
                </p>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-bold mb-2">Formula 3: Rearranged</p>
                <p className="font-mono text-lg text-center">n(A) = n(U) - n(A')</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded border-2 border-green-300">
            <h3 className="font-bold text-green-700 mb-3">Example Using Formulas:</h3>
            <p className="mb-2">If U is a finite set and B ⊆ A, explain why n(A') ≤ n(B').</p>
            <div className="bg-white p-4 rounded mt-3">
              <p className="text-sm mb-2"><strong>Explanation:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Since B ⊆ A, we know that B is "smaller than or equal to" A</li>
                <li>Therefore n(B) ≤ n(A)</li>
                <li>Using the formula: n(A') = n(U) - n(A) and n(B') = n(U) - n(B)</li>
                <li>Since n(B) ≤ n(A), subtracting gives: n(U) - n(B) ≥ n(U) - n(A)</li>
                <li>Therefore: n(B') ≥ n(A'), or equivalently, n(A') ≤ n(B')</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Special Cases */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800">4. Special Cases</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded border-2 border-purple-300">
              <h3 className="font-bold text-purple-700 mb-3">Case 1: Finite vs Infinite</h3>
              <div className="space-y-2 text-sm">
                <p><strong>If U is finite and A ⊆ U:</strong></p>
                <ul className="list-disc list-inside ml-2">
                  <li>A is finite</li>
                  <li>A' is finite</li>
                </ul>
                <p className="mt-3"><strong>If U is infinite:</strong></p>
                <ul className="list-disc list-inside ml-2">
                  <li>Both A and A' could be infinite</li>
                  <li>Or one finite, one infinite</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded border-2 border-orange-300">
              <h3 className="font-bold text-orange-700 mb-3">Case 2: Impossible Situation</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Why is this impossible?</strong></p>
                <p className="font-mono text-sm">A and A' both finite, but U is infinite</p>
                <div className="bg-white p-3 rounded mt-2">
                  <p className="text-xs"><strong>Reason:</strong></p>
                  <p className="text-xs mt-1">
                    If A is finite with n(A) = a, and A' is finite with n(A') = b,
                    then n(U) = n(A) + n(A') = a + b, which is finite. This contradicts U being infinite!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-cyan-100 rounded-lg font-semibold hover:bg-cyan-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Finding Complements
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-cyan-500">
                <p className="font-semibold mb-3">
                  Let U = {'{1, 2, 3, 4, 5, 6, 7, 8}'}. Find the complement of:
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">a) A = {'{2, 5, 6}'}</p>
                    <div className="ml-4 bg-gray-50 p-4 rounded">
                      <p className="text-sm mb-2">A' contains all elements in U that are NOT in A</p>
                      <p className="font-mono font-bold text-cyan-600">A' = {'{1, 3, 4, 7, 8}'}</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">b) B = {'{odd numbers}'}</p>
                    <div className="ml-4 bg-gray-50 p-4 rounded">
                      <p className="text-sm mb-2">Odd numbers in U: {'{1, 3, 5, 7}'}</p>
                      <p className="text-sm">Even numbers in U: {'{2, 4, 6, 8}'}</p>
                      <p className="font-mono font-bold text-cyan-600 mt-2">B' = {'{2, 4, 6, 8}'} = {'{even numbers}'}</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">c) C = {'{composite numbers}'}</p>
                    <div className="ml-4 bg-gray-50 p-4 rounded">
                      <p className="text-sm mb-2">Composite numbers in U: {'{4, 6, 8}'}</p>
                      <p className="font-mono font-bold text-cyan-600">C' = {'{1, 2, 3, 5, 7}'}</p>
                      <p className="text-xs text-gray-600 mt-2">(Contains 1, and the prime numbers 2, 3, 5, 7)</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">d) D = {'{perfect squares}'}</p>
                    <div className="ml-4 bg-gray-50 p-4 rounded">
                      <p className="text-sm mb-2">Perfect squares in U: {'{1, 4}'}</p>
                      <p className="font-mono font-bold text-cyan-600">D' = {'{2, 3, 5, 6, 7, 8}'}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-cyan-100 rounded-lg font-semibold hover:bg-cyan-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Using Formulas
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-cyan-500">
                <p className="font-semibold mb-3">
                  Suppose U is a finite set. Write a formula for n(A') in terms of n(A) and n(U).
                </p>

                <div className="ml-4 bg-gray-50 p-4 rounded space-y-3">
                  <div>
                    <p className="font-bold">Solution:</p>
                    <p className="text-sm mt-2">
                      We know that every element in U is either in A or in A' (but not both).
                    </p>
                    <p className="text-sm mt-1">Therefore:</p>
                    <p className="font-mono text-lg text-center my-3">n(A) + n(A') = n(U)</p>
                    <p className="text-sm">Rearranging to solve for n(A'):</p>
                    <p className="font-mono text-lg text-center my-3 text-cyan-600 font-bold">
                      n(A') = n(U) - n(A)
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded mt-4">
                    <p className="font-semibold text-sm mb-2">Example Application:</p>
                    <p className="text-sm">
                      If n(U) = 54 and n(A) = 17, then:
                    </p>
                    <p className="font-mono text-sm mt-1">n(A') = 54 - 17 = <strong>37</strong></p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                1. Let U = {'{letters of the English alphabet}'}. Find the complement of P = {'{C, F, J, M, P, U, Y, Z}'}.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p className="font-mono text-sm">
                    P' = {'{A, B, D, E, G, H, I, K, L, N, O, Q, R, S, T, V, W, X}'}
                  </p>
                  <p className="text-sm mt-2">All letters EXCEPT C, F, J, M, P, U, Y, Z</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                2. Let U = {'{1, 2, 3, ..., 30}'}. If A = {'{factors of 30}'}, find A' and state n(A').
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p className="text-sm">Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30</p>
                  <p className="text-sm">So n(A) = 8</p>
                  <p className="font-mono text-sm mt-2">
                    A' = {'{4, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29}'}
                  </p>
                  <p className="text-sm mt-2">Using the formula: n(A') = n(U) - n(A) = 30 - 8 = <strong>22</strong></p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                3. Given that n(U) = 40, n(A) = 17, and n(B) = 25, find n(A') and n(B').
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p className="font-mono">n(A') = n(U) - n(A) = 40 - 17 = <strong>23</strong></p>
                  <p className="font-mono">n(B') = n(U) - n(B) = 40 - 25 = <strong>15</strong></p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                4. Explain why it is impossible for A and A' to both be finite if U is the set of positive whole numbers.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p className="text-sm">
                    If both A and A' were finite, say n(A) = a and n(A') = b, then:
                  </p>
                  <p className="font-mono text-sm">n(U) = n(A) + n(A') = a + b</p>
                  <p className="text-sm mt-2">
                    This would mean U is finite (with a + b elements). But U is the set of positive whole numbers,
                    which is infinite. This is a contradiction!
                  </p>
                  <p className="text-sm mt-2 font-bold">
                    Therefore, at least one of A or A' must be infinite.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>The <strong>universal set U</strong> is the set of all elements we're considering in a problem</li>
            <li>The <strong>complement of A</strong>, written <strong>A'</strong>, contains all elements in U that are NOT in A</li>
            <li>A and A' are called <strong>complementary sets</strong></li>
            <li><strong>Key Formula:</strong> n(A') = n(U) - n(A)</li>
            <li><strong>Relationship:</strong> n(A) + n(A') = n(U)</li>
            <li>If U is finite and A ⊆ U, then both A and A' must be finite</li>
            <li>If U is infinite, it's impossible for both A and A' to be finite</li>
            <li>The complement depends on what the universal set is!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComplementOfSet;
