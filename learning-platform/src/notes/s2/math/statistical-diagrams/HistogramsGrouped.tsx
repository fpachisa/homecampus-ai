import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function HistogramsGroupedNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 dark:from-rose-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Histograms for Grouped Data</h1>
        <p className="mt-2 text-rose-100">Using class intervals to handle large datasets</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Why Group Data? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            When and Why to Group Data
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we have <strong>large data sets</strong> or data with <strong>many different values</strong>,
              ungrouped histograms and stem-and-leaf diagrams become impractical. Instead, we group the data into
              <strong> class intervals</strong> (also called bins or groups).
            </p>
          </div>

          {/* When to Group */}
          <div className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-6 rounded mb-6">
            <h3 className="text-lg font-semibold text-rose-800 dark:text-rose-300 mb-3">
              When to Use Grouped Data
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Large number of data values</strong> (typically 40+ values)</li>
              <li><strong>Wide range of values</strong> (e.g., heights from 140 cm to 180 cm)</li>
              <li><strong>Many different values</strong> in the data set</li>
              <li><strong>Low frequency</strong> for individual values (most values appear only 0-2 times)</li>
              <li>When you want to focus on the <strong>overall pattern</strong> rather than exact values</li>
            </ul>
          </div>

          {/* Example Comparison */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-4">
              Example: Student Heights (40 students)
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Problem with Ungrouped:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Range: 140-180 cm (41 possible values!)<br />
                  Most heights appear 0-2 times<br />
                  Histogram would be very wide and sparse
                </p>
                <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded text-xs text-red-800 dark:text-red-300">
                  ❌ Ungrouped histogram impractical
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Solution with Grouping:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Group into class intervals:<br />
                  140-150, 150-160, 160-170, 170-180<br />
                  Clear distribution pattern visible
                </p>
                <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded text-xs text-green-800 dark:text-green-300">
                  ✓ Grouped histogram much clearer
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Class Intervals */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Understanding Class Intervals
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>class interval</strong> is a range of values grouped together. For example, the interval
              140-150 includes all heights from 140 cm up to (but not including) 150 cm.
            </p>
          </div>

          {/* Interval Notation */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-3">
              Class Interval Notation
            </h3>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  <MathText>Standard Notation: a ≤ x &lt; b</MathText>
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  This means: <strong>a</strong> is included, <strong>b</strong> is <span className="underline">not</span> included
                </p>
                <div className="mt-3 space-y-2 text-sm">
                  <p className="text-gray-700 dark:text-gray-300">
                    <MathText>{'Example: 140 ≤ x < 150'}</MathText>
                  </p>
                  <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
                    <li>Includes: 140.0, 140.5, 141.3, 149.9 cm</li>
                    <li>Excludes: 150.0 cm (belongs to next interval)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Alternative Notations:
                </p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• <strong>140-150</strong> (common in textbooks, same meaning)</p>
                  <p>• <strong>[140, 150)</strong> (interval notation: [ = included, ) = excluded)</p>
                  <p>• All mean: "from 140 (included) up to but not including 150"</p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded">
              <p className="text-sm text-purple-900 dark:text-purple-200">
                <strong>Important:</strong> The intervals must be <strong>continuous</strong> - the end of one interval
                is the start of the next. This ensures no gaps and no overlaps.
              </p>
            </div>
          </div>

          {/* Class Width */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded">
            <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
              Class Width (Interval Size)
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>class width</strong> is the size of each interval. All intervals should have the
              <strong> same width</strong> for a standard histogram.
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Calculating Class Width:
              </p>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p className="font-mono bg-gray-50 dark:bg-gray-900 p-2 rounded">
                  <MathText>Class Width = Upper Boundary - Lower Boundary</MathText>
                </p>
                <p className="mt-3">Example: For interval 140-150:</p>
                <p className="font-mono bg-gray-50 dark:bg-gray-900 p-2 rounded">
                  <MathText>Width = 150 - 140 = 10</MathText>
                </p>
              </div>
            </div>

            <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Choosing Class Width:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li><strong>Too small</strong> (e.g., width of 1) → Too many intervals, like ungrouped data</li>
                <li><strong>Too large</strong> (e.g., width of 50) → Too few intervals, pattern hidden</li>
                <li><strong>Goldilocks zone</strong>: Usually 5-10 intervals total is ideal</li>
                <li><strong>Common widths</strong>: 5, 10, 20, 25, 50 (use "nice" numbers)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Constructing Grouped Histograms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Constructing Histograms for Grouped Data
          </h2>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Worked Example: Waiting Times at a Pharmacy
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The waiting times (in minutes) for 36 patients at a pharmacy are recorded.
            </p>

            {/* Steps */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Step 1: Decide on class intervals
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Given intervals: <MathText>{'0 ≤ x < 10, 10 ≤ x < 20, 20 ≤ x < 30, 30 ≤ x < 40, 40 ≤ x < 50'}</MathText>
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Class width = 10 minutes (equal for all intervals ✓)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  Step 2: Create frequency table
                </p>

                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">
                        <MathText>Waiting Time (min)</MathText>
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Tally</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                        <MathText>{'0 ≤ x < 10'}</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                        <MathText>|||| ||</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">7</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                        <MathText>{'10 ≤ x < 20'}</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                        <MathText>|||| |||| |</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">11</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                        <MathText>{'20 ≤ x < 30'}</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                        <MathText>|||| |||</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">8</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                        <MathText>{'30 ≤ x < 40'}</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                        <MathText>|||| |||</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">8</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                        <MathText>{'40 ≤ x < 50'}</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">||</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">2</td>
                    </tr>
                    <tr className="bg-green-100 dark:bg-green-900/30 font-semibold">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-800 dark:text-gray-100" colSpan={2}>
                        Total
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-800 dark:text-gray-100">36 ✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  Step 3: Draw the histogram
                </p>

                <svg viewBox="0 0 600 350" className="w-full h-auto">
                  {/* Y-axis */}
                  <line x1="60" y1="30" x2="60" y2="280" stroke="currentColor" strokeWidth="2" className="text-gray-800 dark:text-gray-300" />
                  {/* X-axis */}
                  <line x1="60" y1="280" x2="570" y2="280" stroke="currentColor" strokeWidth="2" className="text-gray-800 dark:text-gray-300" />

                  {/* Y-axis labels (Frequency) */}
                  {[0, 2, 4, 6, 8, 10, 12].map((freq) => {
                    const y = 280 - freq * 20;
                    return (
                      <g key={freq}>
                        <line x1="55" y1={y} x2="60" y2={y} stroke="currentColor" strokeWidth="1" className="text-gray-600 dark:text-gray-400" />
                        <text x="45" y={y + 4} textAnchor="end" className="fill-gray-700 dark:fill-gray-300 text-sm">{freq}</text>
                      </g>
                    );
                  })}

                  {/* Histogram bars */}
                  {/* 0-10: freq 7 */}
                  <rect x="60" y="140" width="100" height="140" fill="#f472b6" stroke="#ec4899" strokeWidth="1" />
                  {/* 10-20: freq 11 - MODAL CLASS */}
                  <rect x="160" y="60" width="100" height="220" fill="#f43f5e" stroke="#e11d48" strokeWidth="2" />
                  {/* 20-30: freq 8 */}
                  <rect x="260" y="120" width="100" height="160" fill="#f472b6" stroke="#ec4899" strokeWidth="1" />
                  {/* 30-40: freq 8 */}
                  <rect x="360" y="120" width="100" height="160" fill="#f472b6" stroke="#ec4899" strokeWidth="1" />
                  {/* 40-50: freq 2 */}
                  <rect x="460" y="240" width="100" height="40" fill="#f472b6" stroke="#ec4899" strokeWidth="1" />

                  {/* X-axis labels */}
                  {[0, 10, 20, 30, 40, 50].map((time, i) => {
                    const x = 60 + i * 100;
                    return (
                      <text key={time} x={x} y="300" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-sm">{time}</text>
                    );
                  })}

                  {/* Axis labels */}
                  <text x="315" y="330" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-base font-semibold">Waiting Time (minutes)</text>
                  <text x="20" y="160" textAnchor="middle" transform="rotate(-90, 20, 160)" className="fill-gray-700 dark:fill-gray-300 text-base font-semibold">Frequency</text>

                  {/* Title */}
                  <text x="315" y="20" textAnchor="middle" className="fill-gray-800 dark:fill-gray-100 text-lg font-bold">Pharmacy Waiting Times</text>
                </svg>

                <div className="mt-4 p-3 bg-pink-50 dark:bg-pink-900/20 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Modal Class:</strong> The interval <MathText>{'10 ≤ x < 20'}</MathText> has the highest frequency (11),
                    shown in darker pink. Most patients waited between 10-20 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Impact of Class Intervals */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            How Class Intervals Affect Interpretation
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Critical Insight:</strong> The choice of class intervals can significantly change how data appears.
              The same data set can look very different with different interval choices - this can reveal or hide patterns,
              and even mislead if done improperly.
            </p>
          </div>

          {/* Comparison Button */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">
              Example: Same Data, Different Intervals
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Consider the same height data grouped three different ways:
            </p>

            <button
              onClick={() => setShowComparison(!showComparison)}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showComparison ? 'Hide' : 'Show'} Interval Comparison
            </button>

            {showComparison && (
              <div className="mt-4 space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Narrow intervals */}
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-red-400">
                    <p className="font-semibold text-sm text-gray-800 dark:text-gray-100 mb-2 text-center">
                      Width = 5 (Too Narrow)
                    </p>
                    <div className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                      <p>140-145: |||</p>
                      <p>145-150: ||</p>
                      <p>150-155: ||||</p>
                      <p>155-160: <MathText>|||| ||||</MathText></p>
                      <p>160-165: <MathText>|||| |||</MathText></p>
                      <p>165-170: <MathText>|||| ||||</MathText></p>
                      <p>170-175: ||||</p>
                      <p>175-180: |||</p>
                    </div>
                    <p className="text-xs text-red-700 dark:text-red-400 mt-2">
                      ❌ Too many intervals - pattern unclear
                    </p>
                  </div>

                  {/* Good intervals */}
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-green-500">
                    <p className="font-semibold text-sm text-gray-800 dark:text-gray-100 mb-2 text-center">
                      Width = 10 (Good)
                    </p>
                    <div className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                      <p>140-150: <MathText>||||</MathText></p>
                      <p>150-160: <MathText>|||| |||| ||||</MathText></p>
                      <p>160-170: <MathText>|||| |||| |||| |</MathText></p>
                      <p>170-180: <MathText>|||| ||</MathText></p>
                    </div>
                    <p className="text-xs text-green-700 dark:text-green-400 mt-2">
                      ✓ Clear pattern: most students 150-170 cm
                    </p>
                  </div>

                  {/* Wide intervals */}
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-orange-400">
                    <p className="font-semibold text-sm text-gray-800 dark:text-gray-100 mb-2 text-center">
                      Width = 20 (Too Wide)
                    </p>
                    <div className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                      <p>140-160: <MathText>|||| |||| |||| |||| |</MathText></p>
                      <p>160-180: <MathText>|||| |||| |||| |||| ||||</MathText></p>
                    </div>
                    <p className="text-xs text-orange-700 dark:text-orange-400 mt-2">
                      ⚠️ Too few intervals - detail lost
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <p className="text-sm text-blue-900 dark:text-blue-200">
                    <strong>Lesson:</strong> Choose intervals that show the pattern clearly without too much or too little detail.
                    Generally, aim for <strong>5-10 intervals</strong> total.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Warning about Misleading Histograms */}
          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-500 p-6 rounded">
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
              <span className="text-2xl">⚠️</span>
              Avoiding Misleading Histograms
            </h3>

            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Histograms can be manipulated to mislead readers. Be aware of these tactics:
            </p>

            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span><strong>Unequal class widths</strong> - Makes comparison difficult</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span><strong>Truncated y-axis</strong> - Doesn't start at zero, exaggerates differences</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span><strong>Cherry-picked intervals</strong> - Chosen to hide or emphasize certain patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span><strong>Inconsistent scales</strong> - Y-axis increments not uniform</span>
              </li>
            </ul>

            <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 rounded">
              <p className="text-xs text-red-900 dark:text-red-200 font-semibold">
                <strong>Critical Thinking:</strong> Always check the axes, scales, and interval choices before
                interpreting a histogram. Ask: Could this data be grouped differently to show a different story?
              </p>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice Problems
          </h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Creating a Frequency Table
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Test scores out of 100 for 30 students: 45, 67, 82, 91, 56, 73, 88, 62, 75, 59, 84, 70, 77, 81, 68,
              92, 58, 79, 86, 63, 74, 89, 65, 78, 71, 83, 60, 76, 87, 69
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              (a) Group this data using intervals: <MathText>{'40 ≤ x < 50, 50 ≤ x < 60'}</MathText>, etc.<br />
              (b) Create a frequency table.<br />
              (c) What is the modal class?
            </p>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">(a) & (b) Frequency Table:</p>

                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 mb-4">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Score</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                        <MathText>{'40 ≤ x < 50'}</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">1</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                        <MathText>{'50 ≤ x < 60'}</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">4</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                        <MathText>{'60 ≤ x < 70'}</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">7</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                        <MathText>{'70 ≤ x < 80'}</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">9</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                        <MathText>{'80 ≤ x < 90'}</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">7</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                        <MathText>{'90 ≤ x < 100'}</MathText>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">2</td>
                    </tr>
                    <tr className="bg-green-100 dark:bg-green-900/30 font-semibold">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-800 dark:text-gray-100">Total</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-800 dark:text-gray-100">30 ✓</td>
                    </tr>
                  </tbody>
                </table>

                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">(c) Modal Class:</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  The modal class is <MathText>{'70 ≤ x < 80'}</MathText> with frequency 9. This means most students
                  scored between 70 and 79 marks.
                </p>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Analyzing Interval Choice
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Explain why using class intervals of width 1 for data ranging from 0 to 100 would be impractical
              for a grouped histogram.
            </p>

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
                  <span className="block"><strong>Using intervals of width 1 would be impractical because:</strong></span>

                  <span className="block">• <strong>Too many intervals:</strong> You would need 100 separate intervals
                  (0-1, 1-2, 2-3, ..., 99-100), making the histogram extremely wide and difficult to read.</span>

                  <span className="block">• <strong>Defeats the purpose of grouping:</strong> With width = 1, each interval
                  represents a single value, which is the same as an ungrouped histogram. The whole point of grouping is
                  to combine values together to see patterns more clearly.</span>

                  <span className="block">• <strong>Pattern unclear:</strong> With so many bars, most likely having low
                  frequencies, the overall distribution pattern would be very difficult to identify.</span>

                  <span className="block">• <strong>Better alternative:</strong> Use wider intervals like 10 or 20
                  (e.g., 0-10, 10-20, etc.), which would give 10 or 5 intervals respectively - much more manageable and
                  clearer for showing the distribution.</span>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-rose-50 dark:bg-rose-900/30 border-l-4 border-rose-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-rose-700 dark:text-rose-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Group data into class intervals</strong> when you have large datasets or many different values.
            </li>
            <li>
              Class intervals use notation like <MathText>{'140 ≤ x < 150'}</MathText>, meaning 140 is included but 150 is not.
            </li>
            <li>
              All class intervals should have <strong>equal width</strong> for standard histograms.
            </li>
            <li>
              The <strong>modal class</strong> is the interval with the highest frequency (tallest bar).
            </li>
            <li>
              Choose <strong>5-10 intervals</strong> total for best visualization - too few or too many hides patterns.
            </li>
            <li>
              <strong>Different interval choices</strong> can make the same data look very different - choose carefully and honestly.
            </li>
            <li>
              When reading histograms, always check the <strong>axes, scales, and interval widths</strong> to avoid being misled.
            </li>
          </ul>
        </div>

        {/* Summary Comparison */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-700 mt-8">
          <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">
            Summary: When to Use Each Diagram Type
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
              <thead>
                <tr className="bg-indigo-100 dark:bg-indigo-900/30">
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">Diagram</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">Best For</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">Data Size</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-100">Preserves Values?</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="bg-white dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-semibold">Dot Diagram</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Small datasets, showing individual values</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">10-30 values</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center">✓</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-semibold">Histogram (Ungrouped)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Frequency distribution, few different values</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">20-40 values</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center">✓</td>
                </tr>
                <tr className="bg-white dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-semibold">Stem-and-Leaf</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Preserving values while showing distribution</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">30-100 values</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center">✓</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-semibold">Histogram (Grouped)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Large datasets, showing overall pattern</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">40+ values</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-center">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
