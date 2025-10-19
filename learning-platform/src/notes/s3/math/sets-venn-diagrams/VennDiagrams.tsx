import React, { useState } from 'react';

const VennDiagrams = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [selectedOperation, setSelectedOperation] = useState<'none' | 'intersection' | 'union' | 'A-only' | 'B-only'>('none');

  // Single set Venn diagram
  const SingleSetDiagram = () => (
    <svg width="350" height="250" className="mx-auto">
      {/* Universal set */}
      <rect x="20" y="20" width="310" height="210" fill="#f0f9ff" stroke="#0369a1" strokeWidth="3" rx="10" />
      <text x="30" y="45" className="text-2xl font-bold fill-blue-700">U</text>

      {/* Set A */}
      <circle cx="175" cy="125" r="70" fill="#bfdbfe" stroke="#1e40af" strokeWidth="3" />
      <text x="160" y="95" className="text-2xl font-bold fill-blue-900">A</text>

      {/* Complement region */}
      <text x="280" y="220" className="text-xl font-bold fill-blue-700">A'</text>
    </svg>
  );

  // Two sets Venn diagram with interactive shading
  const TwoSetsDiagram = ({ operation }: { operation: string }) => {
    return (
      <svg width="450" height="300" className="mx-auto">
        {/* Universal set */}
        <rect x="20" y="20" width="410" height="260" fill="#f0f9ff" stroke="#0369a1" strokeWidth="3" rx="10" />
        <text x="30" y="45" className="text-2xl font-bold fill-blue-700">U</text>

        {/* Left circle (A) */}
        <circle
          cx="160"
          cy="150"
          r="85"
          fill={operation === 'A-only' || operation === 'union' ? '#86efac' : '#dbeafe'}
          stroke="#1e40af"
          strokeWidth="3"
          opacity="0.7"
        />

        {/* Right circle (B) */}
        <circle
          cx="260"
          cy="150"
          r="85"
          fill={operation === 'B-only' || operation === 'union' ? '#86efac' : '#fecaca'}
          stroke="#dc2626"
          strokeWidth="3"
          opacity="0.7"
        />

        {/* Intersection overlay */}
        {operation === 'intersection' && (
          <ellipse cx="210" cy="150" rx="50" ry="85" fill="#86efac" opacity="0.8" />
        )}

        {/* Labels */}
        <text x="110" y="145" className="text-2xl font-bold fill-blue-900">A</text>
        <text x="290" y="145" className="text-2xl font-bold fill-red-900">B</text>
      </svg>
    );
  };

  // Subset diagram
  const SubsetDiagram = () => (
    <svg width="400" height="280" className="mx-auto">
      {/* Universal set */}
      <rect x="20" y="20" width="360" height="240" fill="#f0f9ff" stroke="#0369a1" strokeWidth="3" rx="10" />
      <text x="30" y="45" className="text-2xl font-bold fill-blue-700">U</text>

      {/* Larger set B */}
      <circle cx="200" cy="140" r="90" fill="#fecaca" stroke="#dc2626" strokeWidth="3" opacity="0.6" />
      <text x="300" y="120" className="text-2xl font-bold fill-red-900">B</text>

      {/* Smaller set A inside B */}
      <circle cx="200" cy="140" r="50" fill="#bfdbfe" stroke="#1e40af" strokeWidth="3" />
      <text x="185" y="145" className="text-xl font-bold fill-blue-900">A</text>
    </svg>
  );

  // Disjoint sets diagram
  const DisjointDiagram = () => (
    <svg width="450" height="250" className="mx-auto">
      {/* Universal set */}
      <rect x="20" y="20" width="410" height="210" fill="#f0f9ff" stroke="#0369a1" strokeWidth="3" rx="10" />
      <text x="30" y="45" className="text-2xl font-bold fill-blue-700">U</text>

      {/* Left circle (A) - no overlap */}
      <circle cx="140" cy="125" r="70" fill="#bfdbfe" stroke="#1e40af" strokeWidth="3" />
      <text x="125" y="130" className="text-2xl font-bold fill-blue-900">A</text>

      {/* Right circle (B) - no overlap */}
      <circle cx="300" cy="125" r="70" fill="#fecaca" stroke="#dc2626" strokeWidth="3" />
      <text x="285" y="130" className="text-2xl font-bold fill-red-900">B</text>
    </svg>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Venn Diagrams</h1>
        <p className="text-lg">Visual representation of sets and their relationships</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is a Venn Diagram? */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800">1. What is a Venn Diagram?</h2>

          <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              A <strong>Venn diagram</strong> consists of a universal set U represented by a rectangle,
              and sets within it that are usually represented by circles.
            </p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Key Components:</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Rectangle:</strong> Represents the universal set (U)</li>
              <li><strong>Circles:</strong> Represent individual sets (A, B, C, etc.)</li>
              <li><strong>Regions:</strong> Different areas show different set relationships</li>
              <li><strong>Labels:</strong> Sets are labeled (A, B) and universal set is labeled U</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <p className="font-semibold mb-3 text-center">Single Set Venn Diagram:</p>
            <SingleSetDiagram />
            <p className="text-sm text-center mt-3 text-gray-600">
              Circle A is inside rectangle U. Region outside A but inside U is A' (complement)
            </p>
          </div>
        </div>

        {/* Section 2: Two-Set Venn Diagrams */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800">2. Venn Diagrams for Two Sets</h2>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Overlapping Sets:</h3>
            <p className="mb-3">
              When representing two sets A and B on the same Venn diagram, there are several possible layouts:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
              <li>If A and B have elements in common, the circles <strong>overlap</strong></li>
              <li>The overlapping region represents <strong>A ∩ B</strong> (intersection)</li>
              <li>If A and B are disjoint, the circles <strong>don't overlap</strong></li>
              <li>If A ⊆ B, circle A is <strong>completely inside</strong> circle B</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded mb-4">
            <p className="font-semibold mb-3">Interactive: Explore Set Operations</p>
            <div className="flex gap-2 mb-4 flex-wrap">
              {[
                { key: 'none', label: 'Basic Diagram' },
                { key: 'intersection', label: 'A ∩ B' },
                { key: 'union', label: 'A ∪ B' },
                { key: 'A-only', label: 'A but not B' },
                { key: 'B-only', label: 'B but not A' }
              ].map(op => (
                <button
                  key={op.key}
                  onClick={() => setSelectedOperation(op.key as any)}
                  className={`px-3 py-2 rounded text-sm ${
                    selectedOperation === op.key
                      ? 'bg-rose-600 text-white'
                      : 'bg-white border-2 border-rose-300'
                  }`}
                >
                  {op.label}
                </button>
              ))}
            </div>

            <TwoSetsDiagram operation={selectedOperation} />

            <div className="bg-white p-3 rounded mt-4">
              <p className="font-semibold text-sm mb-2">Current Selection:</p>
              {selectedOperation === 'none' && (
                <p className="text-sm">Basic two-set Venn diagram with overlapping regions</p>
              )}
              {selectedOperation === 'intersection' && (
                <p className="text-sm"><strong>Green region:</strong> A ∩ B (elements in both A and B)</p>
              )}
              {selectedOperation === 'union' && (
                <p className="text-sm"><strong>Green regions:</strong> A ∪ B (elements in A or B or both)</p>
              )}
              {selectedOperation === 'A-only' && (
                <p className="text-sm"><strong>Green region:</strong> Elements in A but not in B (A ∩ B')</p>
              )}
              {selectedOperation === 'B-only' && (
                <p className="text-sm"><strong>Green region:</strong> Elements in B but not in A (B ∩ A')</p>
              )}
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Reading a Two-Set Venn Diagram:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>Intersection (overlap):</strong> Elements in BOTH A and B</li>
              <li><strong>A only:</strong> Elements in A but not in B (left portion only)</li>
              <li><strong>B only:</strong> Elements in B but not in A (right portion only)</li>
              <li><strong>Outside both:</strong> Elements in U but not in A or B (in neither set)</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Special Relationships */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800">3. Special Set Relationships</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Subset */}
            <div className="bg-green-50 p-4 rounded border-2 border-green-300">
              <h3 className="font-bold text-green-700 mb-3">Subset (A ⊆ B):</h3>
              <p className="text-sm mb-3">
                If every element of A is also in B, place circle A <strong>completely inside</strong> circle B.
              </p>
              <SubsetDiagram />
              <p className="text-sm text-center mt-2 text-gray-600">A is completely within B</p>
            </div>

            {/* Disjoint */}
            <div className="bg-orange-50 p-4 rounded border-2 border-orange-300">
              <h3 className="font-bold text-orange-700 mb-3">Disjoint Sets (A ∩ B = ∅):</h3>
              <p className="text-sm mb-3">
                If A and B have <strong>no elements in common</strong>, draw circles that don't overlap.
              </p>
              <DisjointDiagram />
              <p className="text-sm text-center mt-2 text-gray-600">No overlap - A and B are disjoint</p>
            </div>
          </div>
        </div>

        {/* Section 4: Drawing Venn Diagrams */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800">4. How to Draw a Venn Diagram</h2>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Step-by-Step Process:</h3>
            <ol className="list-decimal list-inside space-y-3 text-sm">
              <li>
                <strong>Draw the universal set:</strong> Start with a rectangle and label it U
              </li>
              <li>
                <strong>Draw circles for each set:</strong> Place circles inside the rectangle
                <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                  <li>If sets overlap, draw overlapping circles</li>
                  <li>If one is a subset, draw one circle inside another</li>
                  <li>If disjoint, draw separate circles</li>
                </ul>
              </li>
              <li>
                <strong>Label each set:</strong> Write A, B, etc. inside or near each circle
              </li>
              <li>
                <strong>Place elements:</strong> Write specific elements in the appropriate regions
                <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                  <li>Elements in A only go in the A-only region</li>
                  <li>Elements in both A and B go in the overlap</li>
                  <li>Elements in neither go outside both circles but inside U</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="bg-cyan-50 p-4 rounded border-2 border-cyan-300">
            <h3 className="font-bold mb-3">Tips for Drawing:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Make circles large enough to write elements clearly</li>
              <li>Ensure overlap regions are visible if sets intersect</li>
              <li>Keep the diagram neat and well-labeled</li>
              <li>Place elements in the intersection FIRST, then fill other regions</li>
            </ul>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-rose-100 rounded-lg font-semibold hover:bg-rose-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Drawing a Two-Set Venn Diagram
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-rose-500">
                <p className="font-semibold mb-3">
                  Let U = {'{x ∈ ℤ⁺ | x < 8}'} and A = {'{2, 3, 4}'} and B = {'{1, 2, 3, 4}'}
                </p>
                <p className="mb-3">Draw a Venn diagram to represent:</p>
                <div className="space-y-3 text-sm">
                  <p><strong>a)</strong> A and B</p>
                  <p><strong>b)</strong> Illustrate A and B on a Venn diagram</p>
                </div>

                <div className="ml-4 bg-gray-50 p-4 rounded mt-4">
                  <p className="text-sm mb-3"><strong>Solution:</strong></p>
                  <p className="text-sm mb-2">First, identify all elements:</p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>U = {'{1, 2, 3, 4, 5, 6, 7}'}</li>
                    <li>A = {'{2, 3, 4}'}</li>
                    <li>B = {'{1, 2, 3, 4}'}</li>
                    <li>A ∩ B = {'{2, 3, 4}'} (elements in both)</li>
                    <li>A ∪ B = {'{1, 2, 3, 4}'}</li>
                  </ul>

                  <svg width="450" height="300" className="mx-auto mt-4">
                    {/* Universal set */}
                    <rect x="20" y="20" width="410" height="260" fill="#f0f9ff" stroke="#0369a1" strokeWidth="3" rx="10" />
                    <text x="30" y="45" className="text-xl font-bold fill-blue-700">U</text>

                    {/* Left circle (A) */}
                    <circle cx="160" cy="150" r="85" fill="#dbeafe" stroke="#1e40af" strokeWidth="3" opacity="0.7" />
                    <text x="110" y="145" className="text-xl font-bold fill-blue-900">A</text>

                    {/* Right circle (B) */}
                    <circle cx="260" cy="150" r="85" fill="#fecaca" stroke="#dc2626" strokeWidth="3" opacity="0.7" />
                    <text x="290" y="145" className="text-xl font-bold fill-red-900">B</text>

                    {/* Elements in intersection */}
                    <text x="200" y="140" className="text-sm font-semibold">2</text>
                    <text x="215" y="155" className="text-sm font-semibold">3</text>
                    <text x="200" y="170" className="text-sm font-semibold">4</text>

                    {/* Element in B only */}
                    <text x="300" y="155" className="text-sm font-semibold">1</text>

                    {/* Elements outside both */}
                    <text x="60" y="80" className="text-sm font-semibold">5</text>
                    <text x="370" y="80" className="text-sm font-semibold">6</text>
                    <text x="60" y="240" className="text-sm font-semibold">7</text>
                  </svg>

                  <p className="text-sm mt-3 text-gray-600 text-center">
                    Notice: A ⊆ B (all of A is within B)
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-rose-100 rounded-lg font-semibold hover:bg-rose-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Reading a Venn Diagram
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-rose-500">
                <p className="font-semibold mb-3">
                  From the Venn diagram below, list the elements of:
                </p>

                <svg width="450" height="280" className="mx-auto mb-4">
                  {/* Universal set */}
                  <rect x="20" y="20" width="410" height="240" fill="#f0f9ff" stroke="#0369a1" strokeWidth="3" rx="10" />
                  <text x="30" y="45" className="text-xl font-bold fill-blue-700">U</text>

                  {/* Circles */}
                  <circle cx="160" cy="140" r="75" fill="#dbeafe" stroke="#1e40af" strokeWidth="3" opacity="0.6" />
                  <text x="110" y="120" className="text-xl font-bold fill-blue-900">A</text>
                  <circle cx="260" cy="140" r="75" fill="#fecaca" stroke="#dc2626" strokeWidth="3" opacity="0.6" />
                  <text x="290" y="120" className="text-xl font-bold fill-red-900">B</text>

                  {/* Elements */}
                  <text x="120" y="145" className="text-base">3</text>
                  <text x="130" y="165" className="text-base">7</text>
                  <text x="200" y="140" className="text-base">1</text>
                  <text x="215" y="160" className="text-base">5</text>
                  <text x="285" y="145" className="text-base">2</text>
                  <text x="295" y="165" className="text-base">6</text>
                  <text x="60" y="100" className="text-base">4</text>
                  <text x="370" y="230" className="text-base">8</text>
                </svg>

                <div className="space-y-3 ml-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold mb-1">a) A</p>
                    <p className="font-mono text-sm">A = {'{1, 3, 5, 7}'}</p>
                    <p className="text-xs text-gray-600">Elements in circle A (including intersection)</p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold mb-1">b) B</p>
                    <p className="font-mono text-sm">B = {'{1, 2, 5, 6}'}</p>
                    <p className="text-xs text-gray-600">Elements in circle B (including intersection)</p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold mb-1">c) A ∩ B</p>
                    <p className="font-mono text-sm">A ∩ B = {'{1, 5}'}</p>
                    <p className="text-xs text-gray-600">Elements in the overlap region</p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold mb-1">d) A ∪ B</p>
                    <p className="font-mono text-sm">A ∪ B = {'{1, 2, 3, 5, 6, 7}'}</p>
                    <p className="text-xs text-gray-600">All elements in either A or B</p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold mb-1">e) U</p>
                    <p className="font-mono text-sm">U = {'{1, 2, 3, 4, 5, 6, 7, 8}'}</p>
                    <p className="text-xs text-gray-600">All elements in the rectangle</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                1. Draw a Venn diagram for U = {'{1, 2, 3, 4}'},  A = {'{1, 2, 3, 4}'} and B = {'{3, 4, 5, 6}'}
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Guidance</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded text-sm">
                  <p className="mb-2"><strong>Steps:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Note: 5 and 6 are in B but not in U, so can't be shown</li>
                    <li>A ∩ B (within U) = {'{3, 4}'}</li>
                    <li>A only = {'{1, 2}'}</li>
                    <li>B only (within U) = ∅ (nothing)</li>
                    <li>Outside both = ∅</li>
                  </ul>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                2. Draw a Venn diagram to represent A = {'{factors of 30}'} and B = {'{factors of 20}'} where U = {'{1, 2, 3, ..., 30}'}
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded text-sm space-y-2">
                  <p>A = {'{1, 2, 3, 5, 6, 10, 15, 30}'}</p>
                  <p>B = {'{1, 2, 4, 5, 10, 20}'}</p>
                  <p>A ∩ B = {'{1, 2, 5, 10}'} (common factors)</p>
                  <p className="mt-2">Place in intersection: 1, 2, 5, 10</p>
                  <p>Place in A only: 3, 6, 15, 30</p>
                  <p>Place in B only: 4, 20</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>A <strong>Venn diagram</strong> uses a rectangle for U and circles for sets</li>
            <li><strong>Overlapping circles:</strong> Shows sets with common elements (intersection)</li>
            <li><strong>Separate circles:</strong> Shows disjoint sets (no common elements)</li>
            <li><strong>Circle within circle:</strong> Shows subset relationship (A ⊆ B)</li>
            <li><strong>Intersection region:</strong> Elements in BOTH sets</li>
            <li><strong>Union:</strong> All shaded regions (elements in either or both sets)</li>
            <li>Always place elements in the <strong>intersection first</strong>, then fill other regions</li>
            <li>Label all sets (U, A, B) clearly</li>
            <li>Elements outside all circles but inside U belong to none of the sets</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VennDiagrams;
