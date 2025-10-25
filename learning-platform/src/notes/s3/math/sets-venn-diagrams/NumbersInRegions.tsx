import { useState } from 'react';

const NumbersInRegions = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  // Two-set diagram with numbers
  const TwoSetNumberDiagram = ({
    aOnly,
    intersection,
    bOnly,
    outside
  }: {
    aOnly: number;
    intersection: number;
    bOnly: number;
    outside: number;
  }) => (
    <svg width="450" height="300" className="mx-auto">
      {/* Universal set */}
      <rect x="20" y="20" width="410" height="260" fill="#f0f9ff" stroke="#0369a1" strokeWidth="3" rx="10" />
      <text x="30" y="45" className="text-xl font-bold fill-blue-700">U</text>

      {/* Left circle (A) */}
      <circle cx="160" cy="150" r="85" fill="#dbeafe" stroke="#1e40af" strokeWidth="3" opacity="0.7" />
      <text x="110" y="140" className="text-xl font-bold fill-blue-900">A</text>

      {/* Right circle (B) */}
      <circle cx="260" cy="150" r="85" fill="#fecaca" stroke="#dc2626" strokeWidth="3" opacity="0.7" />
      <text x="290" y="140" className="text-xl font-bold fill-red-900">B</text>

      {/* Numbers in regions */}
      <circle cx="120" cy="150" r="20" fill="white" stroke="#1e40af" strokeWidth="2" />
      <text x="115" y="157" className="text-lg font-bold fill-blue-900">{aOnly}</text>

      <circle cx="210" cy="150" r="20" fill="white" stroke="#16a34a" strokeWidth="2" />
      <text x="205" y="157" className="text-lg font-bold fill-green-900">{intersection}</text>

      <circle cx="300" cy="150" r="20" fill="white" stroke="#dc2626" strokeWidth="2" />
      <text x="295" y="157" className="text-lg font-bold fill-red-900">{bOnly}</text>

      <circle cx="370" cy="240" r="20" fill="white" stroke="#666" strokeWidth="2" />
      <text x="365" y="247" className="text-lg font-bold fill-gray-700">{outside}</text>
    </svg>
  );

  // Three-set diagram with numbers
  const ThreeSetDiagram = () => (
    <svg width="500" height="350" className="mx-auto">
      {/* Universal set */}
      <rect x="20" y="20" width="460" height="310" fill="#f0f9ff" stroke="#0369a1" strokeWidth="3" rx="10" />
      <text x="30" y="45" className="text-xl font-bold fill-blue-700">U</text>

      {/* Three circles */}
      <circle cx="200" cy="150" r="80" fill="#dbeafe" stroke="#1e40af" strokeWidth="2" opacity="0.5" />
      <text x="140" y="130" className="text-lg font-bold fill-blue-900">A</text>

      <circle cx="290" cy="150" r="80" fill="#fecaca" stroke="#dc2626" strokeWidth="2" opacity="0.5" />
      <text x="330" y="130" className="text-lg font-bold fill-red-900">B</text>

      <circle cx="245" cy="220" r="80" fill="#d4f4dd" stroke="#16a34a" strokeWidth="2" opacity="0.5" />
      <text x="240" y="290" className="text-lg font-bold fill-green-900">C</text>

      {/* Region labels */}
      <text x="165" y="120" className="text-sm">(11)</text>
      <text x="305" y="120" className="text-sm">(....)</text>
      <text x="240" y="160" className="text-sm">(4)</text>
      <text x="240" y="210" className="text-sm">(2)</text>
      <text x="200" y="240" className="text-sm">(1)</text>
      <text x="280" y="240" className="text-sm">(....)</text>
      <text x="240" y="275" className="text-sm">(....)</text>
      <text x="430" y="310" className="text-sm">(6)</text>
    </svg>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Numbers in Regions</h1>
        <p className="text-lg">Counting elements and using the cardinality formula</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Bracket Notation */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-800">1. Bracket Notation</h2>

          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              To indicate the <strong>number of elements</strong> in a region of a Venn diagram,
              we write the number in <strong>brackets</strong>.
            </p>
            <p className="text-sm">
              For example, if a region contains 6 elements, we write <strong>(6)</strong> in that region.
            </p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Example: Two-Set Diagram with Numbers</h3>
            <p className="text-sm mb-4">
              For the Venn diagram alongside, A ∩ B contains <strong>6 elements</strong>,
              A contains <strong>4 + 6 = 10 elements</strong>, and A ∪ B contains <strong>4 + 6 + 3 = 13 elements</strong>.
            </p>

            <TwoSetNumberDiagram aOnly={4} intersection={6} bOnly={3} outside={7} />

            <div className="mt-4 bg-gray-50 p-4 rounded">
              <p className="font-semibold mb-2">Reading the diagram:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>n(A) = 4 + 6 = <strong>10</strong> (elements in A only + intersection)</li>
                <li>n(B) = 6 + 3 = <strong>9</strong> (intersection + elements in B only)</li>
                <li>n(A ∩ B) = <strong>6</strong> (intersection region)</li>
                <li>n(A ∪ B) = 4 + 6 + 3 = <strong>13</strong> (all shaded regions)</li>
                <li>n(U) = 4 + 6 + 3 + 7 = <strong>20</strong> (all regions)</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Important:</p>
            <p className="text-sm">
              When counting n(A), include ALL regions that are part of A, including the intersection!
            </p>
          </div>
        </div>

        {/* Section 2: The Cardinality Formula */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-800">2. The Cardinality Formula</h2>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300 mb-4">
            <h3 className="font-bold text-lg mb-4">The Formula:</h3>
            <div className="bg-white p-6 rounded">
              <p className="font-mono text-2xl text-center mb-3">n(A ∪ B) = n(A) + n(B) - n(A ∩ B)</p>
              <p className="text-sm text-center text-gray-600">
                Number in union = Number in A + Number in B - Number in intersection
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Why do we subtract n(A ∩ B)?</h3>
            <div className="space-y-3 text-sm">
              <p>
                When we add n(A) + n(B), we count the elements in the intersection <strong>twice</strong>:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Once when counting all elements in A</li>
                <li>Once again when counting all elements in B</li>
              </ul>
              <p className="mt-2">
                To get the correct count, we must <strong>subtract n(A ∩ B)</strong> once to fix the double-counting.
              </p>
            </div>

            <div className="bg-cyan-50 p-4 rounded mt-4">
              <p className="font-semibold text-sm mb-2">Visual Explanation:</p>
              <TwoSetNumberDiagram aOnly={4} intersection={6} bOnly={3} outside={7} />
              <div className="mt-3 text-sm space-y-1">
                <p>n(A) = 10 (includes the 6 in intersection)</p>
                <p>n(B) = 9 (includes the 6 in intersection)</p>
                <p>n(A) + n(B) = 10 + 9 = 19 (counted intersection twice!)</p>
                <p className="font-bold text-blue-600">n(A ∪ B) = 19 - 6 = 13 ✓</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded border-2 border-green-300">
            <h3 className="font-bold text-green-700 mb-3">Rearranging the Formula:</h3>
            <div className="space-y-2 text-sm">
              <p>We can rearrange the formula to find different values:</p>
              <div className="ml-4 space-y-1 font-mono">
                <p>• n(A ∩ B) = n(A) + n(B) - n(A ∪ B)</p>
                <p>• n(A) = n(A ∪ B) - n(B) + n(A ∩ B)</p>
                <p>• n(B) = n(A ∪ B) - n(A) + n(A ∩ B)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Finding Unknown Values */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-800">3. Finding Unknown Elements</h2>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Strategy for Solving Problems:</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li><strong>Start with the intersection:</strong> Fill in n(A ∩ B) first if known</li>
              <li><strong>Fill in A-only region:</strong> Calculate n(A) - n(A ∩ B)</li>
              <li><strong>Fill in B-only region:</strong> Calculate n(B) - n(A ∩ B)</li>
              <li><strong>Fill in outside region:</strong> Calculate n(U) - n(A ∪ B)</li>
              <li><strong>Use formulas:</strong> Apply the cardinality formula when needed</li>
            </ol>
          </div>
        </div>

        {/* Section 4: Three-Set Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-800">4. Three-Set Problems</h2>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300 mb-4">
            <h3 className="font-bold mb-3">Three-Set Cardinality Formula:</h3>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <p className="mb-2">n(A ∪ B ∪ C) = n(A) + n(B) + n(C)</p>
              <p className="ml-8">- n(A ∩ B) - n(A ∩ C) - n(B ∩ C)</p>
              <p className="ml-8">+ n(A ∩ B ∩ C)</p>
            </div>
            <p className="text-sm mt-3 text-gray-600">
              Add all sets, subtract pairwise intersections, add back the triple intersection
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <p className="font-semibold mb-3 text-center">Three-Set Venn Diagram Example:</p>
            <ThreeSetDiagram />
            <p className="text-sm text-center mt-3 text-gray-600">
              Fill in the center intersection first, then work outward
            </p>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-800">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-amber-100 rounded-lg font-semibold hover:bg-amber-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Using the Cardinality Formula
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-amber-500">
                <p className="font-semibold mb-3">
                  Suppose n(A) = 28, n(B) = 25, and n(A' ∩ B') = 9.
                </p>
                <p className="mb-4">Given that n(U) = 59, find n(A ∪ B).</p>

                <div className="bg-gray-50 p-4 rounded space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-2">Step 1: Understand what we know</p>
                    <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                      <li>n(A) = 28</li>
                      <li>n(B) = 25</li>
                      <li>n(U) = 59</li>
                      <li>n(A' ∩ B') = 9 (elements in neither A nor B)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-2">Step 2: Find n(A ∪ B)</p>
                    <p className="text-sm">Elements in U = Elements in (A ∪ B) + Elements in neither</p>
                    <p className="font-mono text-sm mt-1">n(U) = n(A ∪ B) + n(A' ∩ B')</p>
                    <p className="font-mono text-sm">59 = n(A ∪ B) + 9</p>
                    <p className="font-mono text-sm font-bold text-amber-600">n(A ∪ B) = 50</p>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-2">Step 3: Verify using cardinality formula</p>
                    <p className="font-mono text-sm">n(A ∪ B) = n(A) + n(B) - n(A ∩ B)</p>
                    <p className="font-mono text-sm">50 = 28 + 25 - n(A ∩ B)</p>
                    <p className="font-mono text-sm">n(A ∩ B) = 53 - 50 = 3</p>
                  </div>

                  <div className="bg-white p-3 rounded mt-3">
                    <p className="font-bold text-sm">Answer: n(A ∪ B) = <span className="text-amber-600">50</span></p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-amber-100 rounded-lg font-semibold hover:bg-amber-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Filling in a Venn Diagram
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-amber-500">
                <p className="font-semibold mb-3">
                  Suppose n(U) = 54, n(A) = 22, n(A') = 11, n(B') = 9, and n(A' ∪ B') = 18.
                </p>
                <p className="mb-4">Represent this information on a Venn diagram. Hence find:</p>

                <div className="bg-gray-50 p-4 rounded space-y-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">Step 1: Find basic values</p>
                    <div className="space-y-1 text-sm ml-4">
                      <p className="font-mono">n(A) = 22 (given)</p>
                      <p className="font-mono">n(B) = n(U) - n(B') = 54 - 9 = 45</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-2">Step 2: Find n(A ∩ B)</p>
                    <p className="text-sm">Using De Morgan's Law: (A ∪ B)' = A' ∩ B'</p>
                    <p className="text-sm">We know n(A' ∪ B') = 18</p>
                    <p className="text-sm">So elements NOT in (A' ∪ B') are in A ∩ B</p>
                    <p className="font-mono text-sm mt-1">n(A ∩ B) = n(U) - n(A' ∪ B') = 54 - 18 = 36</p>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-2">Step 3: Fill in regions</p>
                    <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                      <li>A ∩ B: <span className="font-mono">(36)</span></li>
                      <li>A only: <span className="font-mono">n(A) - n(A ∩ B) = 22 - 36 = ???</span> (ERROR!)</li>
                    </ul>
                    <p className="text-red-600 text-sm mt-2">
                      <strong>Wait!</strong> If n(A ∩ B) = 36 but n(A) = 22, this is impossible!
                      The intersection cannot be larger than the set itself.
                    </p>
                    <p className="text-sm mt-2">
                      Let me recalculate: If n(A') = 11 is given, then n(A) should be 54 - 11 = 43, not 22.
                      There may be an error in the problem statement.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                1. Given n(P) = 17, n(Q) = 13, and n(P' ∩ Q') = 12, find n(P ∪ Q) if n(U) = 59.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p className="text-sm">n(U) = n(P ∪ Q) + n(P' ∩ Q')</p>
                  <p className="font-mono text-sm">59 = n(P ∪ Q) + 12</p>
                  <p className="font-mono text-sm font-bold">n(P ∪ Q) = 47</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                2. Given n(A) = 40, n(B) = 32, and n(A ∪ B) = 54, find n(A ∩ B).
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p className="text-sm">Using the cardinality formula:</p>
                  <p className="font-mono text-sm">n(A ∪ B) = n(A) + n(B) - n(A ∩ B)</p>
                  <p className="font-mono text-sm">54 = 40 + 32 - n(A ∩ B)</p>
                  <p className="font-mono text-sm">n(A ∩ B) = 72 - 54</p>
                  <p className="font-mono text-sm font-bold">n(A ∩ B) = 18</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                3. Given that n(U) = 54, how many elements are in neither P nor Q if n(P ∪ Q) = 39?
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p className="text-sm">Elements in neither = n(P' ∩ Q')</p>
                  <p className="font-mono text-sm">n(P' ∩ Q') = n(U) - n(P ∪ Q)</p>
                  <p className="font-mono text-sm">= 54 - 39</p>
                  <p className="font-mono text-sm font-bold">= 15</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Use <strong>bracket notation</strong> (4) to show number of elements in a region</li>
            <li><strong>Cardinality Formula:</strong> n(A ∪ B) = n(A) + n(B) - n(A ∩ B)</li>
            <li>We subtract n(A ∩ B) to avoid <strong>double-counting</strong> the intersection</li>
            <li><strong>Strategy:</strong> Fill in intersection first, then work outward</li>
            <li>n(A' ∩ B') = elements in <strong>neither</strong> A nor B</li>
            <li>n(U) = n(A ∪ B) + n(A' ∩ B')</li>
            <li>For three sets, use the inclusion-exclusion principle</li>
            <li>Always check that intersection ≤ each individual set</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NumbersInRegions;
