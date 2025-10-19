import React, { useState } from 'react';

const MeasuresOfCentre = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [dataValues, setDataValues] = useState([3, 6, 5, 7, 4, 6, 5, 6, 7, 6, 8, 10, 7, 8]);

  // Calculate mean
  const calculateMean = (data: number[]) => {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return (sum / data.length).toFixed(2);
  };

  // Calculate median
  const calculateMedian = (data: number[]) => {
    const sorted = [...data].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return ((sorted[mid - 1] + sorted[mid]) / 2).toFixed(2);
    }
    return sorted[mid].toString();
  };

  // Calculate mode
  const calculateMode = (data: number[]) => {
    const frequency: { [key: number]: number } = {};
    data.forEach(val => {
      frequency[val] = (frequency[val] || 0) + 1;
    });
    const maxFreq = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency).filter(key => frequency[Number(key)] === maxFreq);
    return modes.length === data.length ? 'No mode' : modes.join(', ');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Measures of Centre</h1>
        <p className="text-lg">Understanding mean, median, and mode</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Introduction */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">1. Why Measure the Centre?</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 mb-4">
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              We can gain a better understanding of a data set by locating the <strong>middle</strong> or <strong>centre</strong> of the data, and by measuring its <strong>spread</strong>.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The three main statistics we use to measure the centre are the <strong>mean</strong>, the <strong>median</strong>, and the <strong>mode</strong>.
            </p>
          </div>
        </div>

        {/* Section 2: The Mean */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">2. The Mean (x̄)</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The <strong>mean</strong> x̄ of a data set is the <strong>arithmetic average</strong> of the data values.
            </p>
            <div className="bg-white dark:bg-gray-800 p-5 rounded">
              <p className="text-center text-2xl font-mono mb-2 text-gray-900 dark:text-gray-100">
                mean = sum of data values / number of data values
              </p>
              <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100">
                x̄ = Σx / n
              </p>
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center">
                <p>where Σx = sum of all data values</p>
                <p>n = number of data values</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
              💡 Note: The mean is not necessarily a member of the data set.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Example:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
              Data: 2, 3, 5, 9, 11
            </p>
            <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200 font-mono">
              <p>x̄ = (2 + 3 + 5 + 9 + 11) / 5</p>
              <p>x̄ = 30 / 5</p>
              <p className="font-bold">x̄ = 6</p>
            </div>
          </div>
        </div>

        {/* Section 3: The Median */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">3. The Median</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              The <strong>median</strong> of a data set is the <strong>middle value</strong> when the set is written in order.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The median splits the data in two halves. Half of the data are less than or equal to the median, and half are greater than or equal to the median.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Finding the Median:</h3>

            <div className="space-y-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">For ODD number of values:</p>
                <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
                  If there are n data values, the median is the <span className="font-mono bg-white dark:bg-gray-700 px-2 py-1 rounded">(n+1)/2</span> th data value.
                </p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
                  <p className="text-sm text-gray-700 dark:text-gray-300">Example: n = 17</p>
                  <p className="text-sm font-mono text-gray-900 dark:text-gray-100">(17+1)/2 = 9</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">→ The median is the 9th value</p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">For EVEN number of values:</p>
                <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
                  The median is the <strong>average</strong> of the two middle values.
                </p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
                  <p className="text-sm text-gray-700 dark:text-gray-300">Example: n = 20</p>
                  <p className="text-sm font-mono text-gray-900 dark:text-gray-100">(20+1)/2 = 10.5</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">→ The median is the average of the 10th and 11th values</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Examples:</h3>
            <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
              <div>
                <p className="font-semibold mb-1">Odd: 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 10 (n = 11)</p>
                <p className="ml-4 font-mono">Position: (11+1)/2 = 6th → Median = 6</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Even: 3, 4, 5, 6, 8, 9, 10, 10 (n = 8)</p>
                <p className="ml-4 font-mono">Position: (8+1)/2 = 4.5th → Median = (6+8)/2 = 7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: The Mode */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">4. The Mode</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              The <strong>mode</strong> is the most frequently occurring value in the data set.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Special Cases:</h3>

            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded border border-yellow-300 dark:border-yellow-600">
                <p className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Bimodal:</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  If there are two values which are the most frequently occurring, both values are modes and we say the data is <strong>bimodal</strong>.
                </p>
                <p className="text-xs font-mono mt-2 text-gray-700 dark:text-gray-300">
                  Example: 3, 6, 5, 7, 7, 6, 8, 10 → Modes: 6 and 7
                </p>
              </div>

              <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded border border-red-300 dark:border-red-600">
                <p className="font-semibold text-red-700 dark:text-red-300 mb-1">No Mode:</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  If there are more than two most frequently occurring values, we say the mode is <strong>undefined</strong> and do not use it.
                </p>
                <p className="text-xs font-mono mt-2 text-gray-700 dark:text-gray-300">
                  Example: 1, 2, 3, 4, 5 (all appear once) → No mode
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Example:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
              Data: 3, 6, 5, 7, 4, 6, 7, 6, 8, 10, 7, 8
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
              6 appears 3 times, 7 appears 3 times → <strong>Bimodal: 6 and 7</strong>
            </p>
          </div>
        </div>

        {/* Interactive Calculator */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">Interactive Calculator</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded border-2 border-purple-300 dark:border-purple-600">
            <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Enter data values (comma-separated):</p>
            <input
              type="text"
              value={dataValues.join(', ')}
              onChange={(e) => {
                const values = e.target.value.split(',').map(v => Number(v.trim())).filter(v => !isNaN(v));
                if (values.length > 0) setDataValues(values);
              }}
              className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 mb-4"
              placeholder="3, 6, 5, 7, 4, 6, 5, 6, 7, 6, 8, 10, 7, 8"
            />

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/50 p-4 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Mean:</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{calculateMean(dataValues)}</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/50 p-4 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Median:</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{calculateMedian(dataValues)}</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/50 p-4 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Mode:</p>
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{calculateMode(dataValues)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-green-100 dark:bg-green-900/50 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Finding Mean, Median, and Mode
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-green-500 dark:border-green-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Data: The number of peas in randomly selected pods: 3, 6, 5, 7, 4, 6, 5, 6, 7, 6, 8, 10, 7, 8
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">i) Find the mean:</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200 font-mono">
                      <p>Σx = 3 + 6 + 5 + ... + 10 + 7 + 8 = 95</p>
                      <p>n = 15</p>
                      <p>x̄ = 95/15</p>
                      <p className="font-bold text-blue-600 dark:text-blue-400">x̄ ≈ 6.33 peas</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">ii) Find the median:</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>Ordered: 3, 4, 5, 5, 6, 6, 6, <span className="font-bold text-purple-600 dark:text-purple-400">6</span>, 6, 7, 7, 7, 8, 8, 10</p>
                      <p className="font-mono">n = 15, position = (15+1)/2 = 8th value</p>
                      <p className="font-bold text-purple-600 dark:text-purple-400">Median = 6 peas</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-orange-700 dark:text-orange-300 mb-2">iii) Find the mode:</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>6 appears 5 times (most frequent)</p>
                      <p>7 appears 3 times</p>
                      <p className="font-bold text-orange-600 dark:text-orange-400">Mode = 6 peas</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-green-100 dark:bg-green-900/50 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Even Number of Values
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-green-500 dark:border-green-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Data: 13, 14, 18, 18, 19, 21, 22, 22, 24, 25, 27, 28, 30, 33, 43 (after adding 9th pod with 9 peas)
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Find the new median:</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>New data has n = 16 values (even)</p>
                      <p className="font-mono">Position = (16+1)/2 = 8.5</p>
                      <p>→ Average of 8th and 9th values</p>
                      <p className="font-mono">Median = (6 + 7)/2 = 6.5 peas</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left p-4 bg-green-100 dark:bg-green-900/50 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample3 ? '▼' : '▶'} Example 3: Estimating Mean from Grouped Data
            </button>

            {showExample3 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-green-500 dark:border-green-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  When data is grouped in class intervals, use the <strong>midpoint</strong> of each interval:
                </p>

                <div className="ml-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <table className="w-full text-sm border-collapse mb-3">
                    <thead>
                      <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                        <th className="text-left p-2 text-gray-900 dark:text-gray-100">Class Interval</th>
                        <th className="text-left p-2 text-gray-900 dark:text-gray-100">Midpoint</th>
                        <th className="text-left p-2 text-gray-900 dark:text-gray-100">Frequency</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-800 dark:text-gray-200">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2">50-59</td>
                        <td className="p-2">54.5</td>
                        <td className="p-2">5</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2">60-69</td>
                        <td className="p-2">64.5</td>
                        <td className="p-2">9</td>
                      </tr>
                      <tr>
                        <td className="p-2">70-79</td>
                        <td className="p-2">74.5</td>
                        <td className="p-2">3</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="space-y-1 text-sm text-gray-800 dark:text-gray-200 font-mono">
                    <p>Estimated mean = (54.5×5 + 64.5×9 + 74.5×3) / (5+9+3)</p>
                    <p>= (272.5 + 580.5 + 223.5) / 17</p>
                    <p className="font-bold text-blue-600 dark:text-blue-400">≈ 63.3</p>
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
            <li><strong>Mean (x̄)</strong> = sum of values / number of values = Σx / n</li>
            <li><strong>Median</strong> = middle value when data is ordered</li>
            <li>For odd n: median is at position <span className="font-mono">(n+1)/2</span></li>
            <li>For even n: median is average of two middle values</li>
            <li><strong>Mode</strong> = most frequently occurring value</li>
            <li><strong>Bimodal</strong> = two values with equal highest frequency</li>
            <li>If all values occur equally, the mode is <strong>undefined</strong></li>
            <li>For <strong>grouped data</strong>, use the <strong>midpoint</strong> of class intervals to estimate the mean</li>
            <li>The mean uses all data values; the median and mode are less affected by outliers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MeasuresOfCentre;
