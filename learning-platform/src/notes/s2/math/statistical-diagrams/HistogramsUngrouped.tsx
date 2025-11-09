import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function HistogramsUngroupedNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Histograms for Ungrouped Data</h1>
        <p className="mt-2 text-emerald-100">From dot diagrams to frequency distributions</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Transition from Dot Diagrams */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            From Dot Diagrams to Histograms
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In the previous topic, we learned that dot diagrams become impractical for large data sets.
              When we have many data points, we can transform a dot diagram into a <strong>histogram</strong>
              by drawing rectangles over the columns of dots.
            </p>
          </div>

          {/* Visual Transformation */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-4">
              Transformation: Dot Diagram → Histogram
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Dot Diagram */}
              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 text-center">
                  Dot Diagram
                </p>
                <svg viewBox="0 0 300 180" className="w-full h-auto border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800">
                  <line x1="30" y1="140" x2="270" y2="140" stroke="currentColor" strokeWidth="2" className="text-gray-800 dark:text-gray-300" />
                  {[2, 3, 4, 5, 6, 7, 8].map((value) => {
                    const x = 30 + (value - 2) * 40;
                    return (
                      <g key={value}>
                        <line x1={x} y1="135" x2={x} y2="145" stroke="currentColor" strokeWidth="2" className="text-gray-800 dark:text-gray-300" />
                        <text x={x} y="160" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">{value}</text>
                      </g>
                    );
                  })}
                  {/* Score 2: 1 dot */}
                  <circle cx="30" cy="120" r="3" fill="#3b82f6" />
                  {/* Score 3: 3 dots */}
                  <circle cx="70" cy="120" r="3" fill="#3b82f6" />
                  <circle cx="70" cy="100" r="3" fill="#3b82f6" />
                  <circle cx="70" cy="80" r="3" fill="#3b82f6" />
                  {/* Score 4: 4 dots */}
                  <circle cx="110" cy="120" r="3" fill="#3b82f6" />
                  <circle cx="110" cy="100" r="3" fill="#3b82f6" />
                  <circle cx="110" cy="80" r="3" fill="#3b82f6" />
                  <circle cx="110" cy="60" r="3" fill="#3b82f6" />
                  {/* Score 5: 6 dots */}
                  <circle cx="150" cy="120" r="3" fill="#3b82f6" />
                  <circle cx="150" cy="100" r="3" fill="#3b82f6" />
                  <circle cx="150" cy="80" r="3" fill="#3b82f6" />
                  <circle cx="150" cy="60" r="3" fill="#3b82f6" />
                  <circle cx="150" cy="40" r="3" fill="#3b82f6" />
                  <circle cx="150" cy="20" r="3" fill="#3b82f6" />
                  {/* Score 6: 3 dots */}
                  <circle cx="190" cy="120" r="3" fill="#3b82f6" />
                  <circle cx="190" cy="100" r="3" fill="#3b82f6" />
                  <circle cx="190" cy="80" r="3" fill="#3b82f6" />
                  {/* Score 7: 2 dots */}
                  <circle cx="230" cy="120" r="3" fill="#3b82f6" />
                  <circle cx="230" cy="100" r="3" fill="#3b82f6" />
                  {/* Score 8: 1 dot */}
                  <circle cx="270" cy="120" r="3" fill="#3b82f6" />
                  <text x="150" y="175" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">Score</text>
                </svg>
              </div>

              {/* Histogram */}
              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 text-center">
                  Histogram (Same Data)
                </p>
                <svg viewBox="0 0 300 180" className="w-full h-auto border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800">
                  {/* Axes */}
                  <line x1="30" y1="20" x2="30" y2="140" stroke="currentColor" strokeWidth="2" className="text-gray-800 dark:text-gray-300" />
                  <line x1="30" y1="140" x2="270" y2="140" stroke="currentColor" strokeWidth="2" className="text-gray-800 dark:text-gray-300" />

                  {/* Bars */}
                  <rect x="30" y="120" width="34" height="20" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1" />
                  <rect x="70" y="80" width="34" height="60" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1" />
                  <rect x="110" y="60" width="34" height="80" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1" />
                  <rect x="150" y="20" width="34" height="120" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1" />
                  <rect x="190" y="80" width="34" height="60" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1" />
                  <rect x="230" y="100" width="34" height="40" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1" />
                  <rect x="270" y="120" width="0" height="20" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1" />

                  {/* X-axis labels */}
                  {[2, 3, 4, 5, 6, 7, 8].map((value) => {
                    const x = 30 + (value - 2) * 40 + 17;
                    return (
                      <text key={value} x={x} y="160" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">{value}</text>
                    );
                  })}

                  {/* Y-axis labels */}
                  {[0, 2, 4, 6].map((value) => {
                    const y = 140 - value * 20;
                    return (
                      <text key={value} x="20" y={y + 4} textAnchor="end" className="fill-gray-700 dark:fill-gray-300 text-xs">{value}</text>
                    );
                  })}

                  <text x="150" y="175" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">Score</text>
                  <text x="12" y="80" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs" transform="rotate(-90, 12, 80)">Frequency</text>
                </svg>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded">
              <p className="text-sm text-blue-900 dark:text-blue-200">
                <strong>Key Insight:</strong> If you draw a rectangle over each column of dots in a dot diagram,
                you get a histogram! The height of each bar represents the frequency (number of dots).
              </p>
            </div>
          </div>

          {/* What is a Histogram? */}
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-6 rounded mb-6">
            <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-3">
              What is a Histogram?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A <strong>histogram</strong> is a diagram that displays the frequency distribution of numerical data
              using rectangular bars. Each bar represents a value or range of values, and the height of the bar
              shows how many times that value occurs in the data set.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3 font-semibold">
              Key Difference from Bar Charts:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 text-sm">
              <li>
                <strong>Histograms</strong> → Used for <span className="text-emerald-700 dark:text-emerald-300 font-semibold">numerical data</span>,
                bars are continuous (touching), x-axis is a number scale
              </li>
              <li>
                <strong>Bar Charts</strong> → Used for <span className="text-blue-700 dark:text-blue-300 font-semibold">categorical data</span>,
                bars have gaps, x-axis has category labels
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Frequency Tables */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Constructing Frequency Tables
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Before drawing a histogram, we organize our data into a <strong>frequency table</strong>.
              This table shows each unique value and how many times it appears.
            </p>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Worked Example: Shooting Competition Scores
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The table shows the scores of 40 participants in a shooting competition (total score: 10 points):
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <div className="grid grid-cols-10 gap-1 text-center text-sm font-mono">
                <span className="text-gray-700 dark:text-gray-300">8</span>
                <span className="text-gray-700 dark:text-gray-300">6</span>
                <span className="text-gray-700 dark:text-gray-300">4</span>
                <span className="text-gray-700 dark:text-gray-300">3</span>
                <span className="text-gray-700 dark:text-gray-300">5</span>
                <span className="text-gray-700 dark:text-gray-300">5</span>
                <span className="text-gray-700 dark:text-gray-300">2</span>
                <span className="text-gray-700 dark:text-gray-300">9</span>
                <span className="text-gray-700 dark:text-gray-300">2</span>
                <span className="text-gray-700 dark:text-gray-300">7</span>
                <span className="text-gray-700 dark:text-gray-300">9</span>
                <span className="text-gray-700 dark:text-gray-300">3</span>
                <span className="text-gray-700 dark:text-gray-300">3</span>
                <span className="text-gray-700 dark:text-gray-300">7</span>
                <span className="text-gray-700 dark:text-gray-300">7</span>
                <span className="text-gray-700 dark:text-gray-300">5</span>
                <span className="text-gray-700 dark:text-gray-300">2</span>
                <span className="text-gray-700 dark:text-gray-300">8</span>
                <span className="text-gray-700 dark:text-gray-300">3</span>
                <span className="text-gray-700 dark:text-gray-300">7</span>
                <span className="text-gray-700 dark:text-gray-300">4</span>
                <span className="text-gray-700 dark:text-gray-300">8</span>
                <span className="text-gray-700 dark:text-gray-300">7</span>
                <span className="text-gray-700 dark:text-gray-300">8</span>
                <span className="text-gray-700 dark:text-gray-300">2</span>
                <span className="text-gray-700 dark:text-gray-300">6</span>
                <span className="text-gray-700 dark:text-gray-300">4</span>
                <span className="text-gray-700 dark:text-gray-300">4</span>
                <span className="text-gray-700 dark:text-gray-300">4</span>
                <span className="text-gray-700 dark:text-gray-300">6</span>
                <span className="text-gray-700 dark:text-gray-300">7</span>
                <span className="text-gray-700 dark:text-gray-300">7</span>
                <span className="text-gray-700 dark:text-gray-300">6</span>
                <span className="text-gray-700 dark:text-gray-300">2</span>
                <span className="text-gray-700 dark:text-gray-300">6</span>
                <span className="text-gray-700 dark:text-gray-300">4</span>
                <span className="text-gray-700 dark:text-gray-300">4</span>
                <span className="text-gray-700 dark:text-gray-300">6</span>
                <span className="text-gray-700 dark:text-gray-300">10</span>
                <span className="text-gray-700 dark:text-gray-300">6</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Step 1: List all possible scores systematically
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Since the maximum score is 10 points, possible scores are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Step 2: Use tally marks to count frequencies
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Go through the data systematically and make a tally mark for each occurrence.
                  Cross through each number as you count it to avoid missing or double-counting.
                </p>

                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded">
                  <p className="text-xs text-emerald-900 dark:text-emerald-200 font-semibold mb-2">
                    <MathText>Tally Tip</MathText>: Group tally marks in fives by drawing the fifth mark across the first four.
                    This makes counting easier. Example: <MathText>||||</MathText> = 5
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  Step 3: Create the frequency table
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Score</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Tally</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Frequency</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="bg-white dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">1</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">-</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">0</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800/50">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">2</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300"><MathText>||||</MathText></td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">5</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">3</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300"><MathText>||||</MathText></td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">4</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800/50">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">4</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300"><MathText>|||| |</MathText></td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">6</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">5</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">|||</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">3</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800/50">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">6</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300"><MathText>|||| |</MathText></td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">6</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">7</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300"><MathText>|||| ||</MathText></td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">7</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800/50">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">8</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">||||</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">4</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">9</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">||</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">2</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800/50">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">10</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">|</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">1</td>
                      </tr>
                      <tr className="bg-emerald-100 dark:bg-emerald-900/30 font-semibold">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-800 dark:text-gray-100" colSpan={2}>
                          Total frequency
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-800 dark:text-gray-100">40</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-3 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                  <p className="text-xs text-yellow-900 dark:text-yellow-200">
                    <strong>Check:</strong> The sum of all frequencies should equal the total number of data values (40 participants).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Drawing Histograms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Constructing Histograms from Frequency Tables
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Once we have a frequency table, we can draw a histogram by following these steps:
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4 mb-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-5 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Step 1: Draw and label the axes
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                • <strong>Horizontal axis (x-axis):</strong> The numerical values (e.g., Score, Height, Age)
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                • <strong>Vertical axis (y-axis):</strong> The frequency (how many times each value occurs)
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-5 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Step 2: Choose appropriate scales
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                • The x-axis should cover all possible values (not just values that occur)
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                • The y-axis should go up to at least the highest frequency
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-5 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Step 3: Draw bars for each value
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                • Each bar represents one value on the x-axis
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                • The height of the bar equals the frequency
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                • <strong>Bars must touch</strong> (no gaps) - this is what makes it a histogram, not a bar chart!
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-5 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Step 4: Add title and check
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                • Give your histogram a descriptive title
                • Verify that bar heights match the frequency table
              </p>
            </div>
          </div>

          {/* Completed Histogram Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
              Histogram: Shooting Competition Scores
            </h3>

            <svg viewBox="0 0 600 350" className="w-full h-auto">
              {/* Y-axis */}
              <line x1="60" y1="30" x2="60" y2="280" stroke="currentColor" strokeWidth="2" className="text-gray-800 dark:text-gray-300" />
              {/* X-axis */}
              <line x1="60" y1="280" x2="570" y2="280" stroke="currentColor" strokeWidth="2" className="text-gray-800 dark:text-gray-300" />

              {/* Y-axis labels */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((freq) => {
                const y = 280 - freq * 30;
                return (
                  <g key={freq}>
                    <line x1="55" y1={y} x2="60" y2={y} stroke="currentColor" strokeWidth="1" className="text-gray-600 dark:text-gray-400" />
                    <text x="45" y={y + 4} textAnchor="end" className="fill-gray-700 dark:fill-gray-300 text-sm">{freq}</text>
                  </g>
                );
              })}

              {/* Histogram bars */}
              {/* Score 1: freq 0 */}
              <rect x="60" y="280" width="50" height="0" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1" />
              {/* Score 2: freq 5 */}
              <rect x="110" y="130" width="50" height="150" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1" />
              {/* Score 3: freq 4 */}
              <rect x="160" y="160" width="50" height="120" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1" />
              {/* Score 4: freq 6 */}
              <rect x="210" y="100" width="50" height="180" fill="#c084fc" stroke="#7c3aed" strokeWidth="1" />
              {/* Score 5: freq 3 */}
              <rect x="260" y="190" width="50" height="90" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1" />
              {/* Score 6: freq 6 */}
              <rect x="310" y="100" width="50" height="180" fill="#c084fc" stroke="#7c3aed" strokeWidth="1" />
              {/* Score 7: freq 7 - MODAL CLASS */}
              <rect x="360" y="70" width="50" height="210" fill="#f472b6" stroke="#ec4899" strokeWidth="2" />
              {/* Score 8: freq 4 */}
              <rect x="410" y="160" width="50" height="120" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1" />
              {/* Score 9: freq 2 */}
              <rect x="460" y="220" width="50" height="60" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1" />
              {/* Score 10: freq 1 */}
              <rect x="510" y="250" width="50" height="30" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1" />

              {/* X-axis labels */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => {
                const x = 60 + (score - 1) * 50 + 25;
                return (
                  <text key={score} x={x} y="300" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-sm">{score}</text>
                );
              })}

              {/* Axis labels */}
              <text x="315" y="330" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-base font-semibold">Score</text>
              <text x="20" y="160" textAnchor="middle" transform="rotate(-90, 20, 160)" className="fill-gray-700 dark:fill-gray-300 text-base font-semibold">Frequency</text>

              {/* Title */}
              <text x="315" y="20" textAnchor="middle" className="fill-gray-800 dark:fill-gray-100 text-lg font-bold">Shooting Competition Scores (40 Participants)</text>
            </svg>

            <div className="mt-4 p-3 bg-pink-50 dark:bg-pink-900/20 rounded">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Modal Class:</strong> The tallest bar (highlighted in pink) shows the mode is <strong>7</strong> -
                this was the most common score, achieved by 7 participants.
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
              Practice 1: Frequency Table
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The number of pets owned by 20 students: 0, 1, 2, 1, 0, 3, 1, 2, 1, 0, 2, 1, 4, 1, 2, 1, 3, 2, 1, 1
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              (a) Create a frequency table for this data.<br />
              (b) What is the mode (most common number of pets)?
            </p>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">(a) Frequency Table:</p>
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 mb-4">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Number of Pets</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Tally</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">0</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">|||</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">3</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">1</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300"><MathText>|||| ||||</MathText></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">9</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300"><MathText>||||</MathText></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">5</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">||</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">2</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">4</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">|</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">1</td>
                    </tr>
                    <tr className="bg-green-100 dark:bg-green-900/30 font-semibold">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-800 dark:text-gray-100" colSpan={2}>Total</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-800 dark:text-gray-100">20 ✓</td>
                    </tr>
                  </tbody>
                </table>

                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">(b) Mode:</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  The mode is <strong>1 pet</strong>, as it has the highest frequency (9 students).
                </p>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Comparing Histograms and Bar Charts
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Explain the key differences between a histogram and a bar chart. When would you use each?
            </p>

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Key Differences:</p>

                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                    <p className="font-semibold mb-1">1. Data Type:</p>
                    <p>• <strong>Histogram:</strong> Numerical/quantitative data (heights, scores, ages)</p>
                    <p>• <strong>Bar Chart:</strong> Categorical/qualitative data (colors, countries, subjects)</p>
                  </div>

                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                    <p className="font-semibold mb-1">2. Bar Spacing:</p>
                    <p>• <strong>Histogram:</strong> Bars touch (continuous data)</p>
                    <p>• <strong>Bar Chart:</strong> Gaps between bars (discrete categories)</p>
                  </div>

                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                    <p className="font-semibold mb-1">3. X-Axis:</p>
                    <p>• <strong>Histogram:</strong> Numerical scale (must include all values in range)</p>
                    <p>• <strong>Bar Chart:</strong> Category labels (can be in any order)</p>
                  </div>

                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded">
                    <p className="font-semibold mb-1">4. Purpose:</p>
                    <p>• <strong>Histogram:</strong> Shows frequency distribution and shape of data</p>
                    <p>• <strong>Bar Chart:</strong> Compares quantities across different categories</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-emerald-50 dark:bg-emerald-900/30 border-l-4 border-emerald-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Histograms</strong> are created by drawing rectangles over columns of dots in a dot diagram.
            </li>
            <li>
              Before drawing a histogram, organize data into a <strong>frequency table</strong> with tally marks.
            </li>
            <li>
              Histogram bars must <strong>touch</strong> (no gaps) because they represent continuous numerical data.
            </li>
            <li>
              The <strong>height of each bar</strong> represents the frequency - how many times that value occurs.
            </li>
            <li>
              The x-axis must include <strong>all values in the range</strong>, even if some have frequency 0.
            </li>
            <li>
              The <strong>tallest bar</strong> indicates the mode (most common value), called the <strong>modal class</strong>.
            </li>
            <li>
              Histograms (numerical data, bars touch) are different from bar charts (categorical data, bars have gaps).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
