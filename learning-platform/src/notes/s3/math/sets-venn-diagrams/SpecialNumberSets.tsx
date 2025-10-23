import React, { useState } from 'react';

const SpecialNumberSets = () => {
  const [selectedSet, setSelectedSet] = useState('N');
  const [testNumber, setTestNumber] = useState('3');
  const [showExample1, setShowExample1] = useState(false);

  // Number line component
  const NumberLine = ({ setType }: { setType: string }) => {
    const numbers = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];
    const highlight = (n: number) => {
      switch(setType) {
        case 'N': return n >= 0;
        case 'Z': return true;
        case 'Z+': return n > 0;
        case 'Z-': return n < 0;
        default: return false;
      }
    };

    return (
      <svg width="650" height="100" className="mx-auto">
        {/* Main line */}
        <line x1="50" y1="50" x2="600" y2="50" stroke="#333" strokeWidth="2" />

        {/* Arrow */}
        <polygon points="600,50 590,45 590,55" fill="#333" />

        {/* Numbers and ticks */}
        {numbers.map((n, i) => {
          const x = 50 + (i * 42);
          const isHighlighted = highlight(n);
          return (
            <g key={n}>
              <line x1={x} y1="45" x2={x} y2="55" stroke="#666" strokeWidth="2" />
              <circle
                cx={x}
                cy={50}
                r="6"
                fill={isHighlighted ? "#16a34a" : "white"}
                stroke={isHighlighted ? "#16a34a" : "#666"}
                strokeWidth="2"
              />
              <text x={x} y="75" textAnchor="middle" className="text-sm font-semibold">
                {n}
              </text>
            </g>
          );
        })}
      </svg>
    );
  };

  const checkNumberInSet = (num: string, set: string): boolean => {
    const n = parseFloat(num);
    if (isNaN(n)) return false;

    switch(set) {
      case 'N': return n >= 0 && Number.isInteger(n);
      case 'Z': return Number.isInteger(n);
      case 'Z+': return n > 0 && Number.isInteger(n);
      case 'Z-': return n < 0 && Number.isInteger(n);
      case 'Q': {
        // Check if it can be written as a fraction
        const str = num.toString();
        return !isNaN(n) && (Number.isInteger(n) || str.includes('.') || str.includes('/'));
      }
      case 'R': return !isNaN(n);
      default: return false;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Special Number Sets</h1>
        <p className="text-lg">Understanding ℕ, ℤ, ℚ, and ℝ</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Natural Numbers */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">1. Natural Numbers (ℕ)</h2>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              The set of <strong>natural numbers</strong> is the set of counting numbers starting from 0.
            </p>
            <p className="font-mono text-lg text-center">ℕ = {'{0, 1, 2, 3, 4, 5, 6, 7, ...}'}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold mb-3 text-center">Natural Numbers on Number Line:</p>
            <NumberLine setType="N" />
            <p className="text-sm text-center mt-2 text-gray-600">Green dots show natural numbers</p>
          </div>

          <div className="bg-white p-4 rounded border-2 border-gray-300">
            <h3 className="font-bold mb-2">Key Properties:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>All are non-negative (≥ 0)</li>
              <li>All are whole numbers (no fractions or decimals)</li>
              <li>Goes on forever (infinite set)</li>
              <li>Used for counting: 0 objects, 1 object, 2 objects, ...</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Integers */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">2. Integers (ℤ)</h2>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              The set of <strong>integers</strong> includes all positive and negative whole numbers, and zero.
            </p>
            <p className="font-mono text-lg text-center">ℤ = {'{..., -3, -2, -1, 0, 1, 2, 3, ...}'}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold mb-3 text-center">Integers on Number Line:</p>
            <NumberLine setType="Z" />
            <p className="text-sm text-center mt-2 text-gray-600">All dots are green - all integers shown</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded border-2 border-green-300">
              <h3 className="font-bold text-green-700 mb-3">Positive Integers (ℤ⁺):</h3>
              <p className="font-mono text-sm mb-2">ℤ⁺ = {'{1, 2, 3, 4, 5, 6, 7, ...}'}</p>
              <p className="text-sm text-gray-600">All positive whole numbers (greater than 0)</p>
              <div className="bg-gray-50 p-2 rounded mt-2">
                <NumberLine setType="Z+" />
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded border-2 border-red-300">
              <h3 className="font-bold text-red-700 mb-3">Negative Integers (ℤ⁻):</h3>
              <p className="font-mono text-sm mb-2">ℤ⁻ = {'{..., -7, -6, -5, -4, -3, -2, -1}'}</p>
              <p className="text-sm text-gray-600">All negative whole numbers (less than 0)</p>
              <div className="bg-gray-50 p-2 rounded mt-2">
                <NumberLine setType="Z-" />
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Important Relationships:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>ℕ ⊆ ℤ (all natural numbers are integers)</li>
              <li>ℤ⁺ ⊆ ℤ (positive integers are subset of all integers)</li>
              <li>ℤ⁻ ⊆ ℤ (negative integers are subset of all integers)</li>
              <li>0 ∈ ℤ but 0 ∉ ℤ⁺ and 0 ∉ ℤ⁻</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Rational Numbers */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">3. Rational Numbers (ℚ)</h2>

          <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              <strong>Rational numbers</strong> are numbers that can be written in the form p/q
              where p and q are integers and q ≠ 0.
            </p>
            <div className="bg-white p-4 rounded">
              <p className="font-mono text-lg text-center mb-2">ℚ = {'{p/q | p, q ∈ ℤ, q ≠ 0}'}</p>
              <p className="text-sm text-center text-gray-600">Read as: "p over q where p and q are integers, q not zero"</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Examples of Rational Numbers:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-semibold mb-2">Fractions:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><span className="font-mono">15/4</span></li>
                  <li><span className="font-mono">10/1 = 10</span></li>
                  <li><span className="font-mono">1/2 = 0.5</span></li>
                  <li><span className="font-mono">-8/3</span></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Decimals:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><span className="font-mono">0.527</span> (terminates)</li>
                  <li><span className="font-mono">0.363636...</span> (repeats: 0.3̅6̅)</li>
                  <li><span className="font-mono">2.14̅</span> (repeats from 4)</li>
                </ul>
              </div>
            </div>

            <div className="bg-cyan-50 p-3 rounded mt-4">
              <p className="font-semibold text-sm mb-1">Key Insight:</p>
              <p className="text-sm">
                All integers are rational (e.g., 10 = 10/1). All terminating and recurring decimals are rational.
              </p>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded border-2 border-orange-300">
            <h3 className="font-bold text-orange-700 mb-3">Irrational Numbers (ℚ'):</h3>
            <p className="mb-3 text-sm">
              <strong>Irrational numbers</strong> are numbers that <em>cannot</em> be written as a fraction.
            </p>
            <p className="font-semibold mb-2 text-sm">Examples:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><span className="font-mono">√3</span> (square root of 3)</li>
              <li><span className="font-mono">√5</span> (square root of 5)</li>
              <li><span className="font-mono">π</span> (pi = 3.14159...)</li>
              <li><span className="font-mono">√2</span> (cannot be placed on number line as exact fraction)</li>
            </ul>
            <p className="text-xs text-gray-600 mt-3">
              Irrational numbers have decimal expansions that neither terminate nor repeat.
            </p>
          </div>
        </div>

        {/* Section 4: Real Numbers */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">4. Real Numbers (ℝ)</h2>

          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              The set of <strong>real numbers</strong> includes all numbers that can be placed on the number line.
            </p>
            <p className="text-sm">
              ℝ includes both rational and irrational numbers.
            </p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Real Numbers Include:</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>All rational numbers (ℚ)</li>
              <li>All irrational numbers (ℚ')</li>
              <li>All integers (ℤ)</li>
              <li>All natural numbers (ℕ)</li>
            </ul>

            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="font-semibold mb-2 text-center">Hierarchy of Number Sets:</p>
              <div className="text-center space-y-1 text-sm font-mono">
                <p>ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ</p>
              </div>
              <p className="text-xs text-center mt-2 text-gray-600">
                Natural → Integers → Rational → Real
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Important:</p>
            <p className="text-sm">
              ℝ includes all rational and irrational numbers. However, 1/0 and √-2 cannot be placed
              on a number line, so they are not real numbers.
            </p>
          </div>
        </div>

        {/* Interactive Element */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">5. Test Number Membership</h2>

          <div className="bg-purple-50 p-4 rounded">
            <p className="font-semibold mb-3">Interactive: Check if a number belongs to a set</p>
            <div className="flex gap-2 mb-4 flex-wrap">
              {[
                { key: 'N', label: 'ℕ (Natural)' },
                { key: 'Z', label: 'ℤ (Integers)' },
                { key: 'Z+', label: 'ℤ⁺ (Positive Int)' },
                { key: 'Z-', label: 'ℤ⁻ (Negative Int)' },
                { key: 'Q', label: 'ℚ (Rational)' },
                { key: 'R', label: 'ℝ (Real)' }
              ].map(set => (
                <button
                  key={set.key}
                  onClick={() => setSelectedSet(set.key)}
                  className={`px-3 py-2 rounded text-sm ${
                    selectedSet === set.key
                      ? 'bg-purple-600 text-white'
                      : 'bg-white border-2 border-purple-300'
                  }`}
                >
                  {set.label}
                </button>
              ))}
            </div>

            <div className="flex gap-2 items-center mb-3">
              <input
                type="text"
                value={testNumber}
                onChange={(e) => setTestNumber(e.target.value)}
                className="px-3 py-2 border-2 border-gray-300 rounded w-32"
                placeholder="-3.5"
              />
              <span className="font-mono text-lg">
                {checkNumberInSet(testNumber, selectedSet) ? '∈' : '∉'}
              </span>
              <span className="font-mono">{selectedSet}</span>
            </div>

            <div className="bg-white p-3 rounded">
              <p className="text-sm">
                <strong>{testNumber}</strong>{' '}
                {checkNumberInSet(testNumber, selectedSet) ? 'belongs to' : 'does NOT belong to'}{' '}
                the set <strong>{selectedSet}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Worked Example */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Worked Example</h2>

          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-purple-100 rounded-lg font-semibold hover:bg-purple-200 transition"
          >
            {showExample1 ? '▼' : '▶'} Example: Classifying Numbers
          </button>

          {showExample1 && (
            <div className="mt-3 p-6 bg-white rounded border-l-4 border-purple-500">
              <p className="font-semibold mb-3">Determine whether each number is rational, irrational, or neither:</p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold mb-2">a) 3 ∈ ℤ⁺</p>
                  <p className="text-sm"><strong>TRUE</strong> - 3 is a positive integer</p>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold mb-2">b) 6 ∈ ℤ</p>
                  <p className="text-sm"><strong>TRUE</strong> - 6 is an integer</p>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold mb-2">c) -1/4 ∉ ℚ</p>
                  <p className="text-sm"><strong>FALSE</strong> - -1/4 IS a rational number (p/q form)</p>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold mb-2">d) √2 ∉ ℚ</p>
                  <p className="text-sm"><strong>TRUE</strong> - √2 is irrational, not rational</p>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold mb-2">e) 0.3684 ∈ ℝ</p>
                  <p className="text-sm"><strong>TRUE</strong> - 0.3684 is a real number (it's rational, and all rationals are real)</p>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold mb-2">f) 1/(0.1) ∈ ℤ</p>
                  <p className="text-sm"><strong>TRUE</strong> - 1/0.1 = 10, which is an integer</p>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold mb-2">g) √-3 (neither)</p>
                  <p className="text-sm">
                    <strong>NEITHER rational nor irrational</strong> - Cannot be placed on real number line
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">1. Show that 0.527 is a rational number.</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p className="text-sm mb-2">Let x = 0.527</p>
                  <p className="text-sm">Then 1000x = 527</p>
                  <p className="text-sm">So x = 527/1000</p>
                  <p className="font-bold mt-2">Since 0.527 = 527/1000, it is rational</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">2. Show that 0.36̅ (0.363636...) is a rational number.</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p className="text-sm">Let x = 0.363636...</p>
                  <p className="text-sm">Then 100x = 36.3636...</p>
                  <p className="text-sm">Subtracting: 100x - x = 36.36... - 0.36...</p>
                  <p className="text-sm">99x = 36</p>
                  <p className="text-sm">x = 36/99 = 4/11</p>
                  <p className="font-bold mt-2">Therefore 0.36̅ = 4/11 (rational)</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                3. Give an example to show that the sum of two irrational numbers is always irrational is FALSE.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p className="text-sm">Consider: √2 + (-√2)</p>
                  <p className="text-sm mt-1">Both √2 and -√2 are irrational</p>
                  <p className="text-sm">But their sum: √2 + (-√2) = 0, which is rational!</p>
                  <p className="font-bold mt-2">This counterexample shows the statement is false.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>ℕ (Natural numbers):</strong> {'{0, 1, 2, 3, ...}'} - counting numbers from 0</li>
            <li><strong>ℤ (Integers):</strong> {'{..., -2, -1, 0, 1, 2, ...}'} - whole numbers (positive, negative, zero)</li>
            <li><strong>ℤ⁺ (Positive integers):</strong> {'{1, 2, 3, ...}'} - positive whole numbers only</li>
            <li><strong>ℤ⁻ (Negative integers):</strong> {'{..., -3, -2, -1}'} - negative whole numbers only</li>
            <li><strong>ℚ (Rational numbers):</strong> Numbers that can be written as p/q (integers, fractions, terminating/repeating decimals)</li>
            <li><strong>ℚ' (Irrational numbers):</strong> Numbers that cannot be written as fractions (√2, √3, π)</li>
            <li><strong>ℝ (Real numbers):</strong> All numbers on the number line (rational + irrational)</li>
            <li><strong>Hierarchy:</strong> ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ</li>
            <li>All special number sets except ℕ, ℤ⁺, ℤ⁻ are infinite in both directions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecialNumberSets;
