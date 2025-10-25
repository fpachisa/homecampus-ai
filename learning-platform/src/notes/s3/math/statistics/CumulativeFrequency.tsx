import { useState } from 'react';

const CumulativeFrequency = () => {
  const [showExample1, setShowExample1] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Cumulative Frequency Graphs</h1>
        <p className="text-lg">Understanding cumulative frequency and percentiles</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is Cumulative Frequency? */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800 dark:text-cyan-300">1. Cumulative Frequency</h2>

          <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border-l-4 border-cyan-500 dark:border-cyan-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When we calculated the median from a frequency table, we used a <strong>cumulative frequency</strong> column to record the number of data values <strong>less than or equal to</strong> a particular value.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: Building a Cumulative Frequency Column</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                    <th className="text-left p-2 text-gray-900 dark:text-gray-100">Weight (w kg)</th>
                    <th className="text-left p-2 text-gray-900 dark:text-gray-100">Frequency</th>
                    <th className="text-left p-2 text-cyan-700 dark:text-cyan-300">Cumulative Frequency</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-2">70 ≤ w &lt; 75</td>
                    <td className="p-2">3</td>
                    <td className="p-2 bg-cyan-50 dark:bg-cyan-900/30">3</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-2">75 ≤ w &lt; 80</td>
                    <td className="p-2">8</td>
                    <td className="p-2 bg-cyan-50 dark:bg-cyan-900/30">3 + 8 = 11</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-2">80 ≤ w &lt; 85</td>
                    <td className="p-2">16</td>
                    <td className="p-2 bg-cyan-50 dark:bg-cyan-900/30">11 + 16 = 27</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-2">85 ≤ w &lt; 90</td>
                    <td className="p-2">21</td>
                    <td className="p-2 bg-cyan-50 dark:bg-cyan-900/30">27 + 21 = 48</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-2">90 ≤ w &lt; 95</td>
                    <td className="p-2">19</td>
                    <td className="p-2 bg-cyan-50 dark:bg-cyan-900/30">48 + 19 = 67</td>
                  </tr>
                  <tr>
                    <td className="p-2">Total</td>
                    <td className="p-2 font-bold">80</td>
                    <td className="p-2 bg-cyan-100 dark:bg-cyan-900/50 font-bold">80</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              The final cumulative frequency should equal the total number of data values.
            </p>
          </div>
        </div>

        {/* Section 2: Cumulative Frequency Graphs */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800 dark:text-cyan-300">2. Cumulative Frequency Graphs</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              A <strong>cumulative frequency graph</strong> shows the cumulative frequency plotted against the data values.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Uses of Cumulative Frequency Graphs:</h3>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200 list-disc ml-6">
              <li>Estimate the number of data values less than or equal to a particular value</li>
              <li>Estimate the value corresponding to a particular cumulative frequency</li>
              <li>Estimate the quartiles and median of the data set</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">How to Draw a Cumulative Frequency Graph:</h3>
            <ol className="space-y-2 text-sm text-gray-800 dark:text-gray-200 list-decimal ml-6">
              <li>Add a cumulative frequency column to your frequency table</li>
              <li>Plot cumulative frequency on the y-axis (vertical)</li>
              <li>Plot the <strong>upper boundary</strong> of each class interval on the x-axis (horizontal)</li>
              <li>Join the points with a smooth curve (S-shaped)</li>
              <li>The curve should start at the lower boundary of the first class with cumulative frequency = 0</li>
            </ol>
          </div>
        </div>

        {/* Section 3: Percentiles */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800 dark:text-cyan-300">3. Percentiles</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              A <strong>percentile</strong> is the score below which a certain percentage of the data lies.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              For example, if your score in a test is the 75th percentile, then 75% of the class scored less than you.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Quartiles as Percentiles:</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-cyan-50 dark:bg-cyan-900/30 rounded text-center">
                <p className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Q₁</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">Lower Quartile</p>
                <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 my-2">25th</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">percentile</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded text-center">
                <p className="font-bold text-purple-700 dark:text-purple-300 mb-2">Q₂</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">Median</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 my-2">50th</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">percentile</p>
              </div>
              <div className="p-4 bg-cyan-50 dark:bg-cyan-900/30 rounded text-center">
                <p className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Q₃</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">Upper Quartile</p>
                <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 my-2">75th</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">percentile</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">Using Cumulative Frequency Graphs to Find Percentiles:</h3>
            <ol className="text-sm text-gray-800 dark:text-gray-200 space-y-2 list-decimal ml-6">
              <li>Find the total number of data values (n)</li>
              <li>Calculate the position: percentile × n / 100</li>
              <li>Draw a horizontal line from this value on the y-axis to the curve</li>
              <li>Draw a vertical line down to the x-axis</li>
              <li>Read the percentile value on the x-axis</li>
            </ol>
          </div>
        </div>

        {/* Section 4: Interpreting Cumulative Frequency Graphs */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800 dark:text-cyan-300">4. Shape and Distribution</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">What Does the Cumulative Frequency Graph Tell Us?</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded">
                <p className="font-semibold text-green-700 dark:text-green-300 mb-2 text-center">Symmetric</p>
                <div className="h-24 bg-white dark:bg-gray-800 rounded flex items-center justify-center mb-2">
                  <p className="text-xs text-gray-600 dark:text-gray-400">[S-curve centered]</p>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">Smooth S-shape, centered</p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/30 rounded">
                <p className="font-semibold text-orange-700 dark:text-orange-300 mb-2 text-center">Positively Skewed</p>
                <div className="h-24 bg-white dark:bg-gray-800 rounded flex items-center justify-center mb-2">
                  <p className="text-xs text-gray-600 dark:text-gray-400">[S-curve shifted right]</p>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">Steeper at start, gentler at end</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2 text-center">Negatively Skewed</p>
                <div className="h-24 bg-white dark:bg-gray-800 rounded flex items-center justify-center mb-2">
                  <p className="text-xs text-gray-600 dark:text-gray-400">[S-curve shifted left]</p>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">Gentler at start, steeper at end</p>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Example */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800 dark:text-cyan-300">Worked Example</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg font-semibold hover:bg-cyan-200 dark:hover:bg-cyan-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example: Estimating Median and Quartiles from Cumulative Frequency
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-cyan-500 dark:border-cyan-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  The weights of 80 male basketball players were recorded:
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">Data Summary:</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      Total number of players (n) = 80
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">i) Estimate the median weight:</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Median position = 50th percentile</p>
                      <p className="font-mono">Position = 50% of 80 = 40</p>
                      <p>From graph at cumulative frequency = 40:</p>
                      <p className="font-bold text-purple-600 dark:text-purple-400">Median weight ≈ 83 kg</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">ii) Estimate Q₁ and Q₃:</p>
                    <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                      <div>
                        <p className="font-semibold">Q₁ (25th percentile):</p>
                        <p className="font-mono ml-4">Position = 25% of 80 = 20</p>
                        <p className="ml-4">From graph: <strong className="text-cyan-600 dark:text-cyan-400">Q₁ ≈ 79 kg</strong></p>
                      </div>
                      <div>
                        <p className="font-semibold">Q₃ (75th percentile):</p>
                        <p className="font-mono ml-4">Position = 75% of 80 = 60</p>
                        <p className="ml-4">From graph: <strong className="text-cyan-600 dark:text-cyan-400">Q₃ ≈ 87 kg</strong></p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-green-700 dark:text-green-300 mb-2">iii) How many players weigh less than 90 kg?</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Draw vertical line from x = 90 to curve</p>
                      <p>Read cumulative frequency on y-axis</p>
                      <p className="font-bold text-green-600 dark:text-green-400">Approximately 48 players weigh less than 90 kg</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>Cumulative frequency</strong> = running total of frequencies (number of values ≤ a particular value)</li>
            <li>A <strong>cumulative frequency graph</strong> plots cumulative frequency against data values</li>
            <li>Plot points at the <strong>upper boundary</strong> of each class interval</li>
            <li>Join points with a <strong>smooth S-shaped curve</strong></li>
            <li>A <strong>percentile</strong> is the score below which a certain percentage of data lies</li>
            <li><strong>Q₁</strong> = 25th percentile, <strong>Q₂</strong> (median) = 50th percentile, <strong>Q₃</strong> = 75th percentile</li>
            <li>To find a percentile: calculate position = (percentile/100) × n, then read from graph</li>
            <li>Cumulative frequency graphs can estimate: median, quartiles, percentiles, number of values below/above a threshold</li>
            <li>Shape of curve indicates distribution: symmetric, positively skewed, or negatively skewed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CumulativeFrequency;
