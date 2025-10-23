import React, { useState } from 'react';

const IntervalNotation = () => {
  const [selectedInterval, setSelectedInterval] = useState('closed');
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  // Number line component for intervals
  const IntervalNumberLine = ({
    start,
    end,
    includeStart = true,
    includeEnd = true,
    label
  }: {
    start: number;
    end: number;
    includeStart?: boolean;
    includeEnd?: boolean;
    label: string;
  }) => {
    return (
      <div className="bg-white p-4 rounded">
        <p className="font-mono text-center mb-3">{label}</p>
        <svg width="500" height="80" className="mx-auto">
          {/* Main line */}
          <line x1="50" y1="40" x2="450" y2="40" stroke="#333" strokeWidth="2" />
          <polygon points="450,40 440,35 440,45" fill="#333" />

          {/* Ticks for reference */}
          {[-3, -2, -1, 0, 1, 2, 3, 4, 5].map((n) => {
            const x = 250 + n * 40;
            return (
              <g key={n}>
                <line x1={x} y1="35" x2={x} y2="45" stroke="#666" strokeWidth="1" />
                <text x={x} y="60" textAnchor="middle" className="text-xs">{n}</text>
              </g>
            );
          })}

          {/* Interval line */}
          <line
            x1={250 + start * 40}
            y1="40"
            x2={250 + end * 40}
            y2="40"
            stroke="#16a34a"
            strokeWidth="6"
          />

          {/* Start point */}
          <circle
            cx={250 + start * 40}
            cy="40"
            r="5"
            fill={includeStart ? "#16a34a" : "white"}
            stroke="#16a34a"
            strokeWidth="3"
          />

          {/* End point */}
          <circle
            cx={250 + end * 40}
            cy="40"
            r="5"
            fill={includeEnd ? "#16a34a" : "white"}
            stroke="#16a34a"
            strokeWidth="3"
          />
        </svg>
        <p className="text-xs text-center mt-2 text-gray-600">
          {includeStart ? 'Filled' : 'Open'} circle at {start}, {includeEnd ? 'filled' : 'open'} circle at {end}
        </p>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Interval Notation</h1>
        <p className="text-lg">Describing sets of real numbers using intervals</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is Interval Notation? */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800">1. What is Interval Notation?</h2>

          <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Definition:</h3>
            <p className="mb-3">
              Consider the set of real numbers between -3 and 2, including 2.
            </p>
            <p className="mb-2">
              This is an infinite set, so we cannot list all elements. Instead, we describe it using
              an <strong>interval</strong> on the number line.
            </p>
            <div className="bg-white p-4 rounded mt-3">
              <p className="text-sm mb-2">We can write this interval as:</p>
              <p className="font-mono text-lg text-center">{'{x ∈ ℝ | -3 < x ≤ 2}'}</p>
              <p className="text-xs text-center mt-2 text-gray-600">
                Read as: "x such that x is between -3 and 2, including 2"
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300">
            <h3 className="font-bold mb-3">Understanding the Notation:</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-mono">{'{x ∈ ℝ | -3 < x ≤ 2}'}</span></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><span className="font-mono">x ∈ ℝ</span> means "x is a real number"</li>
                <li><span className="font-mono">|</span> means "such that"</li>
                <li><span className="font-mono">-3 &lt; x</span> means "x is greater than -3" (open circle at -3)</li>
                <li><span className="font-mono">x ≤ 2</span> means "x is less than or equal to 2" (filled circle at 2)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Types of Intervals */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800">2. Types of Intervals</h2>

          <div className="space-y-4">
            {/* Closed Interval */}
            <div className="bg-blue-50 p-6 rounded border-2 border-blue-300">
              <h3 className="font-bold text-blue-700 mb-3">Closed Interval</h3>
              <p className="text-sm mb-3">
                Both endpoints are <strong>included</strong> (≤ or ≥ symbols)
              </p>
              <IntervalNumberLine
                start={-1}
                end={3}
                includeStart={true}
                includeEnd={true}
                label="{x ∈ ℝ | -1 ≤ x ≤ 3}"
              />
              <p className="text-sm mt-2 text-gray-600">
                Both -1 and 3 are included (filled circles)
              </p>
            </div>

            {/* Open Interval */}
            <div className="bg-green-50 p-6 rounded border-2 border-green-300">
              <h3 className="font-bold text-green-700 mb-3">Open Interval</h3>
              <p className="text-sm mb-3">
                Neither endpoint is <strong>included</strong> ({"<"} or {">"} symbols only)
              </p>
              <IntervalNumberLine
                start={0}
                end={4}
                includeStart={false}
                includeEnd={false}
                label="{x ∈ ℝ | 0 < x < 4}"
              />
              <p className="text-sm mt-2 text-gray-600">
                Neither 0 nor 4 is included (open circles)
              </p>
            </div>

            {/* Half-Open Intervals */}
            <div className="bg-purple-50 p-6 rounded border-2 border-purple-300">
              <h3 className="font-bold text-purple-700 mb-3">Half-Open Intervals</h3>
              <p className="text-sm mb-3">
                One endpoint included, one excluded
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <IntervalNumberLine
                  start={-2}
                  end={2}
                  includeStart={false}
                  includeEnd={true}
                  label="{x ∈ ℝ | -2 < x ≤ 2}"
                />
                <IntervalNumberLine
                  start={-1}
                  end={3}
                  includeStart={true}
                  includeEnd={false}
                  label="{x ∈ ℝ | -1 ≤ x < 3}"
                />
              </div>
            </div>

            {/* Unbounded Intervals */}
            <div className="bg-orange-50 p-6 rounded border-2 border-orange-300">
              <h3 className="font-bold text-orange-700 mb-3">Unbounded Intervals</h3>
              <p className="text-sm mb-3">
                Extends infinitely in one or both directions
              </p>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded">
                  <p className="font-mono mb-2">{'{x ∈ ℝ | x > 2}'}</p>
                  <p className="text-gray-600">All numbers greater than 2 (extends to infinity)</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-mono mb-2">{'{x ∈ ℝ | x ≤ -4}'}</p>
                  <p className="text-gray-600">All numbers less than or equal to -4 (extends to negative infinity)</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-mono mb-2">{'{x ∈ ℝ | x < -4 or x ≥ 7}'}</p>
                  <p className="text-gray-600">Two separate unbounded regions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Interactive Visualization */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800">3. Visualizing Different Intervals</h2>

          <div className="bg-cyan-50 p-4 rounded">
            <p className="font-semibold mb-3">Interactive: Select an interval type</p>
            <div className="flex gap-2 mb-4 flex-wrap">
              {[
                { key: 'closed', label: '[-1, 3] Closed' },
                { key: 'open', label: '(0, 4) Open' },
                { key: 'half1', label: '(-2, 2] Half-open' },
                { key: 'half2', label: '[-1, 3) Half-open' }
              ].map(int => (
                <button
                  key={int.key}
                  onClick={() => setSelectedInterval(int.key)}
                  className={`px-3 py-2 rounded text-sm ${
                    selectedInterval === int.key
                      ? 'bg-teal-600 text-white'
                      : 'bg-white border-2 border-teal-300'
                  }`}
                >
                  {int.label}
                </button>
              ))}
            </div>

            {selectedInterval === 'closed' && (
              <IntervalNumberLine
                start={-1}
                end={3}
                includeStart={true}
                includeEnd={true}
                label="{x ∈ ℝ | -1 ≤ x ≤ 3}"
              />
            )}
            {selectedInterval === 'open' && (
              <IntervalNumberLine
                start={0}
                end={4}
                includeStart={false}
                includeEnd={false}
                label="{x ∈ ℝ | 0 < x < 4}"
              />
            )}
            {selectedInterval === 'half1' && (
              <IntervalNumberLine
                start={-2}
                end={2}
                includeStart={false}
                includeEnd={true}
                label="{x ∈ ℝ | -2 < x ≤ 2}"
              />
            )}
            {selectedInterval === 'half2' && (
              <IntervalNumberLine
                start={-1}
                end={3}
                includeStart={true}
                includeEnd={false}
                label="{x ∈ ℝ | -1 ≤ x < 3}"
              />
            )}
          </div>
        </div>

        {/* Section 4: Writing Intervals */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800">4. Writing Interval Notation</h2>

          <div className="bg-white p-6 rounded border-2 border-gray-300 mb-4">
            <h3 className="font-bold mb-3">Common Interval Formats:</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 text-left">Set Notation</th>
                    <th className="p-2 text-left">Number Line</th>
                    <th className="p-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-2 font-mono text-xs">{'{x | x ≤ 6}'}</td>
                    <td className="p-2">Filled circle at 6, arrow left</td>
                    <td className="p-2">x less than or equal to 6</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">{'{x | x > -5}'}</td>
                    <td className="p-2">Open circle at -5, arrow right</td>
                    <td className="p-2">x greater than -5</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">{'{x | -3 < x ≤ 1}'}</td>
                    <td className="p-2">Open at -3, filled at 1</td>
                    <td className="p-2">x between -3 and 1, including 1</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">{'{x | x < -4 or x ≥ 7}'}</td>
                    <td className="p-2">Two separate regions</td>
                    <td className="p-2">x less than -4 OR at least 7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-bold mb-2">Remember:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>Open circle (○):</strong> endpoint NOT included ({"<"} or {">"})</li>
              <li><strong>Filled circle (●):</strong> endpoint IS included (≤ or ≥)</li>
              <li><strong>Arrow:</strong> continues infinitely in that direction</li>
            </ul>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-teal-100 rounded-lg font-semibold hover:bg-teal-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Writing Interval Notation
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-teal-500">
                <p className="font-semibold mb-3">Write each set in interval notation:</p>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold mb-2">a) The set of integers greater than 0 and less than or equal to 7</p>
                    <p className="text-sm mb-2">Integers: 1, 2, 3, 4, 5, 6, 7</p>
                    <p className="font-mono">{'{x ∈ ℤ | 0 < x ≤ 7}'}</p>
                    <p className="text-sm mt-1">OR we can list: {'{1, 2, 3, 4, 5, 6, 7}'}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold mb-2">b) Represent on a number line: {'{x ∈ ℤ | -2 < x < 5}'}</p>
                    <IntervalNumberLine
                      start={-2}
                      end={5}
                      includeStart={false}
                      includeEnd={false}
                      label="Integers: {-1, 0, 1, 2, 3, 4}"
                    />
                    <p className="text-sm mt-2">
                      Note: Only integers in this range are -1, 0, 1, 2, 3, 4
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold mb-2">c) Describe using a single interval: {'{x | 3 ≤ x < 9 ∩ -1 < x < 4}'}</p>
                    <p className="text-sm mb-2">Find the overlap (intersection) of both conditions:</p>
                    <p className="text-sm">• First: 3 ≤ x {"<"} 9</p>
                    <p className="text-sm">• Second: -1 {"<"} x {"<"} 4</p>
                    <p className="font-mono mt-2 font-bold">{'{x | 3 ≤ x < 4}'}</p>
                    <p className="text-sm text-gray-600 mt-1">The overlap is from 3 (included) to 4 (not included)</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-teal-100 rounded-lg font-semibold hover:bg-teal-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Interpreting Intervals
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-teal-500">
                <p className="font-semibold mb-3">For each interval, write down the meaning:</p>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-mono mb-2">{'{x | x ≤ 6}'}</p>
                    <p className="text-sm"><strong>Meaning:</strong> The set of real numbers less than or equal to 6</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-mono mb-2">{'{x ∈ ℤ | x > -5}'}</p>
                    <p className="text-sm"><strong>Meaning:</strong> The set of integers greater than -5</p>
                    <p className="text-sm mt-1">Integers: {'{-4, -3, -2, -1, 0, 1, 2, ...}'}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-mono mb-2">{'{x ∈ ℕ | x < 10}'}</p>
                    <p className="text-sm"><strong>Meaning:</strong> Natural numbers less than 10</p>
                    <p className="text-sm mt-1">Numbers: {'{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}'}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">1. Write in interval notation: "the set of real numbers between 10 and 100"</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p className="font-mono">{'{x ∈ ℝ | 10 ≤ x ≤ 100}'}</p>
                  <p className="text-sm mt-2 text-gray-600">"Between" typically includes both endpoints</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">2. Write in interval notation: "the set of integers between -1 and 1, including 1"</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p className="font-mono">{'{x ∈ ℤ | -1 ≤ x ≤ 1}'}</p>
                  <p className="text-sm mt-1">Integers: {'{-1, 0, 1}'}</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">3. Sketch on a number line: {'{x ∈ ℕ | 3 ≤ x < 10}'}</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded">
                  <p className="text-sm mb-2">Natural numbers from 3 to 9 (included 3, not 10)</p>
                  <p className="font-mono text-sm">{'{3, 4, 5, 6, 7, 8, 9}'}</p>
                  <IntervalNumberLine
                    start={3}
                    end={10}
                    includeStart={true}
                    includeEnd={false}
                    label="Natural numbers: {3, 4, 5, 6, 7, 8, 9}"
                  />
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Interval notation</strong> describes sets of numbers on the number line</li>
            <li>Format: {'{x ∈ set | condition}'} or {'{x | condition}'}</li>
            <li><strong>Open circle (○):</strong> Endpoint not included ({"<"} or {">"})</li>
            <li><strong>Filled circle (●):</strong> Endpoint included (≤ or ≥)</li>
            <li><strong>Closed interval:</strong> Both endpoints included</li>
            <li><strong>Open interval:</strong> Neither endpoint included</li>
            <li><strong>Half-open:</strong> One endpoint included, one not</li>
            <li><strong>Unbounded:</strong> Extends to infinity in one or both directions</li>
            <li>Always specify the set (ℕ, ℤ, ℝ) when using interval notation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntervalNotation;
