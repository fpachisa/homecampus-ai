import React, { useState } from 'react';

const VennDiagramRegions = () => {
  const [selectedIdentity, setSelectedIdentity] = useState('complement-union');
  const [showExample1, setShowExample1] = useState(false);

  // Component to show set identity visually
  const IdentityVisualization = ({ type }: { type: string }) => {
    return (
      <div className="grid md:grid-cols-2 gap-4">
        {/* Left side - LHS */}
        <div className="bg-white p-4 rounded border-2 border-blue-300">
          <p className="font-semibold text-center mb-3">
            {type === 'complement-union' && '(A ∪ B)\''}
            {type === 'complement-intersection' && '(A ∩ B)\''}
            {type === 'distributive1' && 'A ∪ (B ∩ C)'}
            {type === 'distributive2' && 'A ∩ (B ∪ C)'}
          </p>
          <svg width="300" height="220">
            <rect x="10" y="10" width="280" height="200" fill="#f0f9ff" stroke="#0369a1" strokeWidth="2" rx="8" />

            {type === 'complement-union' && (
              <>
                {/* Shade everything EXCEPT the union */}
                <rect x="10" y="10" width="280" height="200" fill="#86efac" opacity="0.5" rx="8" />
                <circle cx="110" cy="110" r="60" fill="#f0f9ff" stroke="#1e40af" strokeWidth="2" />
                <circle cx="190" cy="110" r="60" fill="#f0f9ff" stroke="#dc2626" strokeWidth="2" />
                <text x="80" y="110" className="text-sm font-bold">A</text>
                <text x="210" y="110" className="text-sm font-bold">B</text>
              </>
            )}

            {type === 'complement-intersection' && (
              <>
                {/* Shade everything EXCEPT the intersection */}
                <rect x="10" y="10" width="280" height="200" fill="#86efac" opacity="0.5" rx="8" />
                <ellipse cx="150" cy="110" rx="35" ry="60" fill="#f0f9ff" />
                <circle cx="110" cy="110" r="60" fill="none" stroke="#1e40af" strokeWidth="2" />
                <circle cx="190" cy="110" r="60" fill="none" stroke="#dc2626" strokeWidth="2" />
                <text x="70" y="110" className="text-sm font-bold">A</text>
                <text x="220" y="110" className="text-sm font-bold">B</text>
              </>
            )}
          </svg>
        </div>

        {/* Right side - RHS */}
        <div className="bg-white p-4 rounded border-2 border-green-300">
          <p className="font-semibold text-center mb-3">
            {type === 'complement-union' && 'A\' ∩ B\''}
            {type === 'complement-intersection' && 'A\' ∪ B\''}
            {type === 'distributive1' && '(A ∪ B) ∩ (A ∪ C)'}
            {type === 'distributive2' && '(A ∩ B) ∪ (A ∩ C)'}
          </p>
          <svg width="300" height="220">
            <rect x="10" y="10" width="280" height="200" fill="#f0f9ff" stroke="#0369a1" strokeWidth="2" rx="8" />

            {type === 'complement-union' && (
              <>
                {/* Shade region outside both circles */}
                <rect x="10" y="10" width="280" height="200" fill="#86efac" opacity="0.5" rx="8" />
                <circle cx="110" cy="110" r="60" fill="#f0f9ff" stroke="#1e40af" strokeWidth="2" />
                <circle cx="190" cy="110" r="60" fill="#f0f9ff" stroke="#dc2626" strokeWidth="2" />
                <text x="80" y="110" className="text-sm font-bold">A</text>
                <text x="210" y="110" className="text-sm font-bold">B</text>
              </>
            )}

            {type === 'complement-intersection' && (
              <>
                {/* Shade everywhere except the intersection */}
                <rect x="10" y="10" width="280" height="200" fill="#86efac" opacity="0.5" rx="8" />
                <ellipse cx="150" cy="110" rx="35" ry="60" fill="#f0f9ff" />
                <circle cx="110" cy="110" r="60" fill="none" stroke="#1e40af" strokeWidth="2" />
                <circle cx="190" cy="110" r="60" fill="none" stroke="#dc2626" strokeWidth="2" />
                <text x="70" y="110" className="text-sm font-bold">A</text>
                <text x="220" y="110" className="text-sm font-bold">B</text>
              </>
            )}
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Venn Diagram Regions</h1>
        <p className="text-lg">Understanding set identities and laws using Venn diagrams</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Set Identities */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800">1. What are Set Identities?</h2>

          <div className="bg-violet-50 p-6 rounded-lg border-l-4 border-violet-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              The regions of a Venn diagram can be used to verify <strong>set identities</strong>.
              These are equations involving sets which are true for <em>all</em> sets.
            </p>
            <p className="text-sm">
              A Venn diagram can show visually that two different set expressions represent the same region.
            </p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300">
            <h3 className="font-bold mb-3">Common Set Identities:</h3>
            <div className="space-y-2 text-sm font-mono">
              <p>• A ∪ A' = U</p>
              <p>• A ∩ A' = ∅</p>
              <p>• (A ∪ B)' = A' ∩ B'  <span className="text-gray-600 text-xs">(De Morgan's Law)</span></p>
              <p>• (A ∩ B)' = A' ∪ B'  <span className="text-gray-600 text-xs">(De Morgan's Law)</span></p>
            </div>
          </div>
        </div>

        {/* Section 2: De Morgan's Laws */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800">2. De Morgan's Laws</h2>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300 mb-4">
            <h3 className="font-bold text-lg mb-4">The Two Laws:</h3>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-bold mb-2">Law 1: Complement of Union</p>
                <p className="font-mono text-lg text-center">(A ∪ B)' = A' ∩ B'</p>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  "NOT (A or B)" = "NOT A AND NOT B"
                </p>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-bold mb-2">Law 2: Complement of Intersection</p>
                <p className="font-mono text-lg text-center">(A ∩ B)' = A' ∪ B'</p>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  "NOT (A and B)" = "NOT A OR NOT B"
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded mb-4">
            <p className="font-semibold mb-3">Interactive: Visualize De Morgan's Laws</p>
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setSelectedIdentity('complement-union')}
                className={`px-3 py-2 rounded text-sm ${
                  selectedIdentity === 'complement-union'
                    ? 'bg-violet-600 text-white'
                    : 'bg-white border-2 border-violet-300'
                }`}
              >
                (A ∪ B)' = A' ∩ B'
              </button>
              <button
                onClick={() => setSelectedIdentity('complement-intersection')}
                className={`px-3 py-2 rounded text-sm ${
                  selectedIdentity === 'complement-intersection'
                    ? 'bg-violet-600 text-white'
                    : 'bg-white border-2 border-violet-300'
                }`}
              >
                (A ∩ B)' = A' ∪ B'
              </button>
            </div>

            <IdentityVisualization type={selectedIdentity} />

            <div className="bg-white p-3 rounded mt-4">
              <p className="text-sm font-semibold mb-2">Explanation:</p>
              {selectedIdentity === 'complement-union' && (
                <div className="text-sm space-y-1">
                  <p><strong>Left:</strong> (A ∪ B)' = Everything NOT in A or B (green shaded region)</p>
                  <p><strong>Right:</strong> A' ∩ B' = Region NOT in A AND NOT in B (same green region)</p>
                  <p className="text-green-600 font-bold mt-2">Both show the same region! ✓</p>
                </div>
              )}
              {selectedIdentity === 'complement-intersection' && (
                <div className="text-sm space-y-1">
                  <p><strong>Left:</strong> (A ∩ B)' = Everything NOT in both A and B</p>
                  <p><strong>Right:</strong> A' ∪ B' = Region NOT in A OR NOT in B (or neither)</p>
                  <p className="text-green-600 font-bold mt-2">Both show the same region! ✓</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Understanding De Morgan's Laws:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>When you take the complement of a union, it becomes an <strong>intersection</strong> of complements</li>
              <li>When you take the complement of an intersection, it becomes a <strong>union</strong> of complements</li>
              <li>The operation "flips": ∪ ↔ ∩</li>
              <li>Each set gets complemented: A → A', B → B'</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Distributive Laws */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800">3. Distributive Laws</h2>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300 mb-4">
            <h3 className="font-bold text-lg mb-4">The Distributive Laws:</h3>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-bold mb-2">Law 1: Union Distributes Over Intersection</p>
                <p className="font-mono text-lg text-center">A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)</p>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-bold mb-2">Law 2: Intersection Distributes Over Union</p>
                <p className="font-mono text-lg text-center">A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Example Verification:</h3>
            <p className="text-sm mb-3">
              Let's verify: <span className="font-mono">A ∪ (B ∩ A') = A ∪ B</span>
            </p>

            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm mb-2"><strong>Using algebra of sets:</strong></p>
              <div className="space-y-1 text-sm font-mono ml-4">
                <p>A ∪ (B ∩ A')</p>
                <p>= (A ∪ B) ∩ (A ∪ A')  <span className="text-xs text-gray-600">← distributive law</span></p>
                <p>= (A ∪ B) ∩ U  <span className="text-xs text-gray-600">← A ∪ A' = U</span></p>
                <p>= A ∪ B  <span className="text-xs text-gray-600">← X ∩ U = X</span></p>
              </div>
              <p className="text-green-600 font-bold mt-3 text-sm">Identity verified! ✓</p>
            </div>
          </div>
        </div>

        {/* Section 4: Other Important Identities */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800">4. Other Important Identities</h2>

          <div className="bg-white p-6 rounded border-2 border-gray-300">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-bold mb-2">Universal and Empty Set Laws:</h4>
                <ul className="space-y-1 font-mono text-sm">
                  <li>A ∪ ∅ = A</li>
                  <li>A ∩ U = A</li>
                  <li>A ∪ U = U</li>
                  <li>A ∩ ∅ = ∅</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-2">Complement Laws:</h4>
                <ul className="space-y-1 font-mono text-sm">
                  <li>A ∪ A' = U</li>
                  <li>A ∩ A' = ∅</li>
                  <li>(A')' = A</li>
                  <li>U' = ∅</li>
                  <li>∅' = U</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-2">Idempotent Laws:</h4>
                <ul className="space-y-1 font-mono text-sm">
                  <li>A ∪ A = A</li>
                  <li>A ∩ A = A</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-2">Absorption Laws:</h4>
                <ul className="space-y-1 font-mono text-sm">
                  <li>A ∪ (A ∩ B) = A</li>
                  <li>A ∩ (A ∪ B) = A</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Example */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800">Worked Example</h2>

          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-violet-100 rounded-lg font-semibold hover:bg-violet-200 transition"
          >
            {showExample1 ? '▼' : '▶'} Example: Using Laws to Show Identity
          </button>

          {showExample1 && (
            <div className="mt-3 p-6 bg-white rounded border-l-4 border-violet-500">
              <p className="font-semibold mb-3">
                Use the laws for the algebra of sets to show that:
              </p>
              <p className="font-mono text-lg text-center mb-4">(A ∪ B) ∩ (A ∪ D) = (A ∩ C) ∪ (B ∩ D)</p>

              <div className="bg-gray-50 p-4 rounded space-y-3">
                <p className="font-semibold text-sm">Solution:</p>
                <div className="space-y-2 text-sm">
                  <div className="font-mono">
                    <p>(A ∪ B) ∩ (A ∪ D)</p>
                  </div>
                  <div className="ml-4">
                    <p className="font-mono">= A ∪ (B ∩ D)</p>
                    <p className="text-xs text-gray-600">Using distributive law: X ∪ (Y ∩ Z) = (X ∪ Y) ∩ (X ∪ Z) in reverse</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded mt-4">
                  <p className="text-sm"><strong>Note:</strong> The problem as stated may have a typo. Let me verify with the distributive law:</p>
                  <div className="font-mono text-sm mt-2">
                    <p>(A ∪ B) ∩ (A ∪ D)</p>
                    <p>= A ∪ (B ∩ D)  <span className="text-xs">← by distributive law</span></p>
                  </div>
                  <p className="text-xs mt-2 text-gray-600">
                    This doesn't equal (A ∩ C) ∪ (B ∩ D) unless there's additional context.
                  </p>
                </div>

                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm font-semibold">Correct Application:</p>
                  <p className="font-mono text-sm mt-1">(A ∪ B) ∩ (C ∪ D) = (A ∩ C) ∪ (A ∩ D) ∪ (B ∩ C) ∪ (B ∩ D)</p>
                  <p className="text-xs text-gray-600 mt-1">This is the full expansion using distributive laws</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">1. Use De Morgan's Law to simplify: (A ∩ (B ∩ A'))'</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p className="text-sm"><strong>Step 1:</strong> Apply De Morgan's Law</p>
                  <p className="font-mono text-sm">(A ∩ (B ∩ A'))' = A' ∪ (B ∩ A')'</p>
                  <p className="text-sm mt-2"><strong>Step 2:</strong> Apply De Morgan's Law again</p>
                  <p className="font-mono text-sm">= A' ∪ (B' ∪ A)</p>
                  <p className="text-sm mt-2"><strong>Step 3:</strong> Rearrange using associativity</p>
                  <p className="font-mono text-sm">= A' ∪ B' ∪ A = A ∪ A' ∪ B' = U ∪ B' = U</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">2. Show that A ∩ (B ∪ A') = A ∩ B using set laws</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <div className="font-mono text-sm space-y-1">
                    <p>A ∩ (B ∪ A')</p>
                    <p>= (A ∩ B) ∪ (A ∩ A')  <span className="text-xs text-gray-600">← distributive law</span></p>
                    <p>= (A ∩ B) ∪ ∅  <span className="text-xs text-gray-600">← A ∩ A' = ∅</span></p>
                    <p>= A ∩ B  <span className="text-xs text-gray-600">← X ∪ ∅ = X</span></p>
                  </div>
                  <p className="text-green-600 font-bold mt-2 text-sm">Identity proven! ✓</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">3. Verify using Venn diagrams: (A ∪ B)' and A' ∩ B' represent the same region</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Guidance</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded text-sm">
                  <p className="mb-2"><strong>Steps:</strong></p>
                  <ul className="list-decimal list-inside space-y-1">
                    <li>Draw two overlapping circles A and B in rectangle U</li>
                    <li>For (A ∪ B)', shade everything OUTSIDE both circles</li>
                    <li>For A' ∩ B', shade the region that's both outside A AND outside B</li>
                    <li>Both should show the same shaded region (outside both circles)</li>
                  </ul>
                  <p className="mt-2 font-bold">This verifies De Morgan's First Law!</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Set identities</strong> are equations that are true for all sets</li>
            <li><strong>De Morgan's First Law:</strong> (A ∪ B)' = A' ∩ B'</li>
            <li><strong>De Morgan's Second Law:</strong> (A ∩ B)' = A' ∪ B'</li>
            <li>De Morgan's: complement flips the operation (∪ ↔ ∩) and complements each set</li>
            <li><strong>Distributive laws:</strong> Union and intersection distribute over each other</li>
            <li>Venn diagrams can <strong>verify</strong> identities by showing both sides shade the same region</li>
            <li>Key identities: A ∪ A' = U, A ∩ A' = ∅, A ∪ ∅ = A, A ∩ U = A</li>
            <li>Absorption laws: A ∪ (A ∩ B) = A and A ∩ (A ∪ B) = A</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VennDiagramRegions;
