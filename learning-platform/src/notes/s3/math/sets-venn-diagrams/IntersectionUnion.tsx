import React, { useState } from 'react';

const IntersectionUnion = () => {
  const [operation, setOperation] = useState<'intersection' | 'union'>('intersection');
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  // Example sets for interactive demo
  const setA = [1, 3, 4, 6];
  const setB = [2, 3, 5, 6, 7];
  const intersection = [3, 6];
  const union = [1, 2, 3, 4, 5, 6, 7];

  // Venn Diagram for Intersection and Union
  const VennDiagramOperation = ({ op }: { op: 'intersection' | 'union' }) => {
    return (
      <svg width="450" height="300" className="mx-auto">
        {/* Universal set */}
        <rect x="20" y="20" width="410" height="260" fill="#f0f9ff" stroke="#0369a1" strokeWidth="2" rx="10" />
        <text x="30" y="45" className="text-xl font-bold fill-blue-700">U</text>

        {/* Left circle (A) */}
        <circle
          cx="160" cy="150" r="85"
          fill={op === 'union' ? '#86efac' : '#dbeafe'}
          stroke="#1e40af" strokeWidth="3" opacity="0.7"
        />

        {/* Right circle (B) */}
        <circle
          cx="260" cy="150" r="85"
          fill={op === 'union' ? '#86efac' : '#dbeafe'}
          stroke="#dc2626" strokeWidth="3" opacity="0.7"
        />

        {/* Intersection region overlay */}
        {op === 'intersection' && (
          <ellipse cx="210" cy="150" rx="50" ry="85" fill="#86efac" opacity="0.8" />
        )}

        {/* Labels */}
        <text x="110" y="140" className="text-xl font-bold fill-blue-900">A</text>
        <text x="290" y="140" className="text-xl font-bold fill-red-900">B</text>

        {/* Operation label */}
        <text x="175" y="270" className="text-lg font-bold fill-gray-700">
          {op === 'intersection' ? 'A ∩ B' : 'A ∪ B'}
        </text>

        {/* Show elements */}
        {op === 'intersection' ? (
          <>
            <text x="195" y="145" className="text-sm font-semibold">3</text>
            <text x="215" y="160" className="text-sm font-semibold">6</text>
          </>
        ) : (
          <>
            <text x="100" y="145" className="text-sm">1</text>
            <text x="120" y="165" className="text-sm">4</text>
            <text x="195" y="145" className="text-sm">3</text>
            <text x="215" y="160" className="text-sm">6</text>
            <text x="285" y="145" className="text-sm">2</text>
            <text x="305" y="125" className="text-sm">5</text>
            <text x="305" y="165" className="text-sm">7</text>
          </>
        )}
      </svg>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Intersection and Union</h1>
        <p className="text-lg">Combining sets with ∩ and ∪ operations</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Intersection */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">1. Intersection</h2>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              The <strong>intersection</strong> of two sets A and B is the set of elements that are in
              <strong> both</strong> set A <strong>and</strong> set B.
            </p>
            <p className="font-mono text-lg text-center">A ∩ B</p>
            <p className="text-sm text-center mt-2">Read as: "A intersection B"</p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Example:</h3>
            <div className="space-y-2">
              <p>If <span className="font-mono">A = {'{1, 3, 4, 6}'}</span></p>
              <p>and <span className="font-mono">B = {'{2, 3, 5, 6, 7}'}</span></p>
              <p className="mt-3">Then elements in BOTH A and B are 3 and 6:</p>
              <p className="font-mono text-lg text-center mt-2 text-green-600">
                A ∩ B = {'{3, 6}'}
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mb-4">
            <p className="font-bold mb-2">Key Word: AND</p>
            <p className="text-sm">
              Intersection means elements must be in <strong>both</strong> sets. Think "AND" logic.
            </p>
          </div>
        </div>

        {/* Section 2: Union */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">2. Union</h2>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              The <strong>union</strong> of two sets A and B is the set of elements that are in
              <strong> either</strong> set A <strong>or</strong> set B (or in both).
            </p>
            <p className="font-mono text-lg text-center">A ∪ B</p>
            <p className="text-sm text-center mt-2">Read as: "A union B"</p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Example:</h3>
            <div className="space-y-2">
              <p>If <span className="font-mono">A = {'{1, 3, 4, 6}'}</span></p>
              <p>and <span className="font-mono">B = {'{2, 3, 5, 6, 7}'}</span></p>
              <p className="mt-3">Then elements in A OR B (or both) are:</p>
              <p className="font-mono text-lg text-center mt-2 text-blue-600">
                A ∪ B = {'{1, 2, 3, 4, 5, 6, 7}'}
              </p>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Note: Each element is listed only once, even if it's in both sets
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mb-4">
            <p className="font-bold mb-2">Key Word: OR</p>
            <p className="text-sm">
              Union means elements are in <strong>either or both</strong> sets. Think "OR" logic.
            </p>
            <p className="text-sm mt-2">
              <strong>Important:</strong> Elements in both A and B are included in the union,
              but we only list them once!
            </p>
          </div>
        </div>

        {/* Interactive Visualization */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">3. Visualizing Operations</h2>

          <div className="bg-purple-50 p-4 rounded mb-4">
            <p className="font-semibold mb-3">Interactive: Choose an operation to visualize</p>
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => setOperation('intersection')}
                className={`px-4 py-2 rounded ${
                  operation === 'intersection'
                    ? 'bg-green-600 text-white'
                    : 'bg-white border-2 border-green-300'
                }`}
              >
                Intersection (A ∩ B)
              </button>
              <button
                onClick={() => setOperation('union')}
                className={`px-4 py-2 rounded ${
                  operation === 'union'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border-2 border-blue-300'
                }`}
              >
                Union (A ∪ B)
              </button>
            </div>

            <VennDiagramOperation op={operation} />

            <div className="bg-white p-4 rounded mt-4">
              <p className="font-semibold mb-2">Current Operation:</p>
              {operation === 'intersection' ? (
                <div>
                  <p className="font-mono">A ∩ B = {'{3, 6}'}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Green region shows elements in BOTH A and B
                  </p>
                </div>
              ) : (
                <div>
                  <p className="font-mono">A ∪ B = {'{1, 2, 3, 4, 5, 6, 7}'}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Green regions show all elements in EITHER A or B (or both)
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Section 4: Disjoint Sets */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">4. Disjoint Sets</h2>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              Two sets A and B are <strong>disjoint</strong> or <strong>mutually exclusive</strong> if
              they have no elements in common.
            </p>
            <p className="font-mono text-lg text-center">A ∩ B = ∅</p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Example:</h3>
            <div className="space-y-3">
              <p>Let <span className="font-mono">A = {'{c, d, j, m, p}'}</span></p>
              <p>Let <span className="font-mono">B = {'{b, d, k, m, t}'}</span></p>
              <p className="mt-3">Are A and B disjoint?</p>
              <div className="bg-gray-50 p-3 rounded mt-2">
                <p className="text-red-600 font-bold">NO</p>
                <p className="text-sm mt-1">
                  A and B have common elements: d and m
                </p>
                <p className="font-mono text-sm">A ∩ B = {'{d, m}'} ≠ ∅</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <p className="font-semibold mb-3 text-center">Disjoint Sets Visual</p>
            <svg width="400" height="200" className="mx-auto">
              {/* Left circle (A) */}
              <circle cx="120" cy="100" r="60" fill="#dbeafe" stroke="#1e40af" strokeWidth="3" />
              <text x="100" y="105" className="text-xl font-bold fill-blue-900">A</text>

              {/* Right circle (B) - separate, no overlap */}
              <circle cx="280" cy="100" r="60" fill="#fecaca" stroke="#dc2626" strokeWidth="3" />
              <text x="260" y="105" className="text-xl font-bold fill-red-900">B</text>

              {/* Label */}
              <text x="150" y="180" className="text-sm font-semibold fill-gray-700">
                No overlap: A ∩ B = ∅
              </text>
            </svg>
          </div>
        </div>

        {/* Section 5: Combined Operations */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">5. Combined Operations</h2>

          <p className="mb-4">
            We can combine intersection, union, and complement operations to create more complex expressions.
          </p>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Common Combined Operations:</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-mono font-semibold mb-1">(A ∪ B)'</p>
                <p className="text-gray-600">Elements NOT in either A or B</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-mono font-semibold mb-1">(A ∩ B)'</p>
                <p className="text-gray-600">Elements NOT in both A and B</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-mono font-semibold mb-1">A ∪ B'</p>
                <p className="text-gray-600">Elements in A OR not in B</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-mono font-semibold mb-1">A ∩ B'</p>
                <p className="text-gray-600">Elements in A but NOT in B</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded border-2 border-blue-300">
            <h3 className="font-bold mb-3">Cardinality Formula:</h3>
            <p className="font-mono text-lg text-center mb-2">n(A ∪ B) = n(A) + n(B) - n(A ∩ B)</p>
            <p className="text-sm text-gray-600 text-center">
              We subtract n(A ∩ B) because we've counted those elements twice
            </p>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-green-100 rounded-lg font-semibold hover:bg-green-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Finding Intersection and Union
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-green-500">
                <p className="font-semibold mb-3">Find A ∩ B and A ∪ B for:</p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">
                      a) A = {'{red, pink, green, blue}'} and B = {'{purple, blue, green, yellow, red}'}
                    </p>
                    <div className="ml-4 bg-gray-50 p-4 rounded space-y-2">
                      <p><strong>A ∩ B:</strong> Elements in BOTH sets</p>
                      <p className="font-mono">A ∩ B = {'{red, green, blue}'}</p>
                      <p className="mt-3"><strong>A ∪ B:</strong> Elements in EITHER set</p>
                      <p className="font-mono">A ∪ B = {'{red, pink, green, blue, purple, yellow}'}</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">
                      b) A = {'{2, 5, 8, 11}'} and B = {'{3, 7, 11, 15, 19}'}
                    </p>
                    <div className="ml-4 bg-gray-50 p-4 rounded space-y-2">
                      <p><strong>A ∩ B:</strong> Only 11 is in both</p>
                      <p className="font-mono">A ∩ B = {'{11}'}</p>
                      <p className="mt-3"><strong>A ∪ B:</strong> All elements from both sets</p>
                      <p className="font-mono">A ∪ B = {'{2, 3, 5, 7, 8, 11, 15, 19}'}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-green-100 rounded-lg font-semibold hover:bg-green-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Using Cardinality Formula
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-green-500">
                <p className="font-semibold mb-3">
                  Suppose A = {'{factors of 20}'} and B = {'{prime numbers less than 20}'}.
                </p>

                <div className="space-y-4">
                  <div className="ml-4 bg-gray-50 p-4 rounded space-y-3">
                    <div>
                      <p className="font-semibold mb-2">a) List elements of A, B, and find n(A) and n(B)</p>
                      <p className="font-mono text-sm">A = {'{1, 2, 4, 5, 10, 20}'}, n(A) = 6</p>
                      <p className="font-mono text-sm">B = {'{2, 3, 5, 7, 11, 13, 17, 19}'}, n(B) = 8</p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">b) Find A ∩ B and n(A ∩ B)</p>
                      <p className="text-sm">Prime factors of 20: 2 and 5</p>
                      <p className="font-mono text-sm">A ∩ B = {'{2, 5}'}, n(A ∩ B) = 2</p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">c) Show that n(A ∪ B) = n(A) + n(B) - n(A ∩ B)</p>
                      <div className="bg-white p-3 rounded">
                        <p className="font-mono text-sm">A ∪ B = {'{1, 2, 3, 4, 5, 7, 10, 11, 13, 17, 19, 20}'}</p>
                        <p className="text-sm mt-2">n(A ∪ B) = 12</p>
                        <p className="text-sm mt-2">Using formula:</p>
                        <p className="font-mono text-sm">n(A ∪ B) = 6 + 8 - 2 = 12 ✓</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                1. Find A ∩ B and A ∪ B for A = {'{factors of 36}'} and B = {'{factors of 63}'}.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p className="text-sm">A = {'{1, 2, 3, 4, 6, 9, 12, 18, 36}'}</p>
                  <p className="text-sm">B = {'{1, 3, 7, 9, 21, 63}'}</p>
                  <p className="font-mono mt-2">A ∩ B = {'{1, 3, 9}'}</p>
                  <p className="font-mono">A ∪ B = {'{1, 2, 3, 4, 6, 7, 9, 12, 18, 21, 36, 63}'}</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                2. Let P = {'{factors of 15}'}, Q = {'{composite numbers less than or equal to 15}'}, and
                R = {'{even numbers less than 15}'}. Which pair of sets is disjoint?
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p className="text-sm">P = {'{1, 3, 5, 15}'}</p>
                  <p className="text-sm">Q = {'{4, 6, 8, 9, 10, 12, 14, 15}'}</p>
                  <p className="text-sm">R = {'{2, 4, 6, 8, 10, 12, 14}'}</p>
                  <p className="mt-2 font-bold">P and R are disjoint</p>
                  <p className="text-sm">P ∩ R = ∅ (P contains only odd numbers, R contains only even numbers)</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                3. Suppose n(A) = 28, n(Q) = 32, and n(P ∩ Q) = 12. Find n(P ∪ Q).
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p className="text-sm">Using the formula: n(P ∪ Q) = n(P) + n(Q) - n(P ∩ Q)</p>
                  <p className="font-mono mt-2">n(P ∪ Q) = 28 + 32 - 12 = <strong>48</strong></p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Intersection (A ∩ B):</strong> Elements in BOTH sets (think "AND")</li>
            <li><strong>Union (A ∪ B):</strong> Elements in EITHER set or both (think "OR")</li>
            <li><strong>Disjoint sets:</strong> Sets with no common elements (A ∩ B = ∅)</li>
            <li><strong>Important formula:</strong> n(A ∪ B) = n(A) + n(B) - n(A ∩ B)</li>
            <li>In a union, list each element only once (even if it appears in both sets)</li>
            <li>Combined operations: (A ∪ B)', (A ∩ B)', A ∪ B', A ∩ B' all have different meanings</li>
            <li>Visual: Intersection is the overlap region; Union is all shaded regions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntersectionUnion;
