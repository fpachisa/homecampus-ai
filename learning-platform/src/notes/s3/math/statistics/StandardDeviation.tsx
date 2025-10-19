import React, { useState } from 'react';

const StandardDeviation = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [dataSet, setDataSet] = useState([2, 3, 5, 9, 11]);

  // Calculate mean
  const calculateMean = (data: number[]) => {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
  };

  // Calculate standard deviation
  const calculateStdDev = (data: number[]) => {
    const mean = calculateMean(data);
    const squaredDiffs = data.map(x => Math.pow(x - mean, 2));
    const variance = squaredDiffs.reduce((acc, val) => acc + val, 0) / data.length;
    return Math.sqrt(variance);
  };

  const mean = calculateMean(dataSet);
  const stdDev = calculateStdDev(dataSet);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-rose-600 to-orange-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Standard Deviation</h1>
        <p className="text-lg">Measuring the spread of data using all data values</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Introduction */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-300">1. Why Do We Need Standard Deviation?</h2>

          <div className="bg-rose-50 dark:bg-rose-900/30 p-6 rounded-lg border-l-4 border-rose-500 dark:border-rose-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Limitations of Range and IQR:</h3>
            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <p>
                <strong>Range:</strong> Not a reliable measure of spread because it is heavily influenced by outliers.
              </p>
              <p>
                <strong>IQR:</strong> Not influenced by outliers, but it still only uses <strong>two data values</strong> in its calculation.
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded border-2 border-green-300 dark:border-green-600">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">A Better Measure:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              A preferred measure of spread is the <strong>standard deviation</strong>, which indicates the degree to which the data values <strong>deviate</strong> from the mean. The advantage of standard deviation is that it uses <strong>all of the data values</strong>.
            </p>
          </div>
        </div>

        {/* Section 2: Understanding Deviation */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-300">2. Deviation from the Mean</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What is Deviation?</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              For each data value x, we can find the <strong>deviation</strong> from the mean x̄.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100">
                Deviation = x − x̄
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: Deviations for data set {2, 3, 5, 9, 11}</h3>

            <div className="mb-3">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Mean x̄ = (2 + 3 + 5 + 9 + 11) / 5 = 6
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                    <th className="text-left p-2 text-gray-900 dark:text-gray-100">x</th>
                    <th className="text-left p-2 text-gray-900 dark:text-gray-100">x − x̄</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-2">2</td>
                    <td className="p-2">2 − 6 = <span className="text-blue-600 dark:text-blue-400">−4</span></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-2">3</td>
                    <td className="p-2">3 − 6 = <span className="text-blue-600 dark:text-blue-400">−3</span></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-2">5</td>
                    <td className="p-2">5 − 6 = <span className="text-blue-600 dark:text-blue-400">−1</span></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-2">9</td>
                    <td className="p-2">9 − 6 = <span className="text-green-600 dark:text-green-400">+3</span></td>
                  </tr>
                  <tr>
                    <td className="p-2">11</td>
                    <td className="p-2">11 − 6 = <span className="text-green-600 dark:text-green-400">+5</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              ⚠️ Problem with Using Average Deviation:
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              If we take the average of these deviations, the result will <strong>always be 0</strong>! (−4 − 3 − 1 + 3 + 5 = 0)
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
              Solution: We <strong>square</strong> the deviations to form a set of positive values, then take their average.
            </p>
          </div>
        </div>

        {/* Section 3: The Standard Deviation Formula */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-300">3. The Standard Deviation Formula</h2>

          <div className="bg-rose-50 dark:bg-rose-900/30 p-6 rounded-lg border-l-4 border-rose-500 dark:border-rose-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The <strong>standard deviation σ</strong> (Greek letter sigma) of a data set with n data values and mean x̄ is given by:
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded">
              <p className="text-center text-2xl font-mono mb-4 text-gray-900 dark:text-gray-100">
                σ = √(Σ(x − x̄)² / n)
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p className="text-center">where:</p>
                <p className="text-center">Σ(x − x̄)² = sum of squared deviations</p>
                <p className="text-center">n = number of data values</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Steps to Calculate Standard Deviation:</h3>
            <ol className="space-y-2 text-sm text-gray-800 dark:text-gray-200 list-decimal ml-6">
              <li>Calculate the mean x̄</li>
              <li>For each data value, find the deviation (x − x̄)</li>
              <li>Square each deviation to get (x − x̄)²</li>
              <li>Find the sum of all squared deviations: Σ(x − x̄)²</li>
              <li>Divide by n (the number of data values)</li>
              <li>Take the square root of the result</li>
            </ol>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded border-2 border-purple-300 dark:border-purple-600">
            <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Why Take the Square Root?</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              We square the deviations to make them all positive, then take the square root at the end so that the result has the <strong>same units</strong> as the original data.
            </p>
          </div>
        </div>

        {/* Section 4: Interpreting Standard Deviation */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-300">4. Interpreting Standard Deviation</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">What Does Standard Deviation Tell Us?</h3>
            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <p>
                <strong>Small standard deviation:</strong> Data values are close to the mean. The data is <strong>consistent</strong> or <strong>reliable</strong>.
              </p>
              <p>
                <strong>Large standard deviation:</strong> Data values are spread out from the mean. The data is <strong>inconsistent</strong> or <strong>variable</strong>.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example Comparison:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded">
                <p className="font-semibold text-green-700 dark:text-green-300 mb-2">Dataset A:</p>
                <p className="text-sm text-gray-800 dark:text-gray-200 mb-1">Values: 10, 11, 10, 11, 10</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Mean: 10.4</p>
                <p className="text-sm font-bold text-green-600 dark:text-green-400">σ ≈ 0.49 (small)</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Very consistent data</p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/30 rounded">
                <p className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Dataset B:</p>
                <p className="text-sm text-gray-800 dark:text-gray-200 mb-1">Values: 4, 8, 11, 13, 16</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Mean: 10.4</p>
                <p className="text-sm font-bold text-orange-600 dark:text-orange-400">σ ≈ 4.38 (large)</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">More spread out data</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Calculator */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-300">Interactive Calculator</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded border-2 border-purple-300 dark:border-purple-600">
            <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Enter data values (comma-separated):</p>
            <input
              type="text"
              value={dataSet.join(', ')}
              onChange={(e) => {
                const values = e.target.value.split(',').map(v => Number(v.trim())).filter(v => !isNaN(v));
                if (values.length > 0) setDataSet(values);
              }}
              className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 mb-4"
              placeholder="2, 3, 5, 9, 11"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/50 p-4 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Mean (x̄):</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{mean.toFixed(2)}</p>
              </div>
              <div className="bg-rose-50 dark:bg-rose-900/50 p-4 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Standard Deviation (σ):</p>
                <p className="text-2xl font-bold text-rose-600 dark:text-rose-400">{stdDev.toFixed(2)}</p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Calculation breakdown:</p>
              <div className="space-y-1 text-xs text-gray-800 dark:text-gray-200 font-mono">
                {dataSet.map((x, i) => (
                  <p key={i}>
                    ({x} − {mean.toFixed(2)})² = {Math.pow(x - mean, 2).toFixed(2)}
                  </p>
                ))}
                <p className="border-t border-gray-300 dark:border-gray-600 pt-1 mt-1">
                  Sum = {dataSet.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b, 0).toFixed(2)}
                </p>
                <p>Average = {(dataSet.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b, 0) / dataSet.length).toFixed(2)}</p>
                <p className="font-bold">√(Average) = {stdDev.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Example */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-300">Worked Example</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-rose-100 dark:bg-rose-900/50 rounded-lg font-semibold hover:bg-rose-200 dark:hover:bg-rose-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example: Comparing Wholesale Suppliers
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-rose-500 dark:border-rose-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  A greengrocer counts blemished oranges from two wholesalers (5 random crates each):
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded">
                      <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Sunblessed:</p>
                      <p className="text-sm text-gray-800 dark:text-gray-200">Data: 4, 16, 14, 8, 8</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">x̄ = 10</p>
                      <p className="text-sm font-bold text-blue-600 dark:text-blue-400">σ ≈ 4.38</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-gray-800 rounded">
                      <p className="font-semibold text-green-700 dark:text-green-300 mb-2">Valencia Star:</p>
                      <p className="text-sm text-gray-800 dark:text-gray-200">Data: 9, 12, 11, 10, 13</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">x̄ = 11</p>
                      <p className="text-sm font-bold text-green-600 dark:text-green-400">σ ≈ 1.41</p>
                    </div>
                  </div>

                  <div className="p-4 bg-green-100 dark:bg-green-900/50 rounded">
                    <p className="font-semibold text-green-800 dark:text-green-200 mb-2">Conclusion:</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      <strong>Valencia Star</strong> oranges have less blemishes on average (σ = 1.41 is much smaller than 4.38).
                      The Valencia Star supplier generally has <strong>fewer blemished oranges</strong> and is more <strong>consistent</strong>.
                    </p>
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
            <li><strong>Standard deviation (σ)</strong> measures how spread out data values are from the mean</li>
            <li>Uses <strong>all data values</strong>, not just two like range or IQR</li>
            <li>Formula: <span className="font-mono">σ = √(Σ(x − x̄)² / n)</span></li>
            <li><strong>Small σ</strong> = data close to mean = consistent/reliable data</li>
            <li><strong>Large σ</strong> = data spread out from mean = inconsistent/variable data</li>
            <li>We square deviations to make them positive, then take square root for correct units</li>
            <li>The Greek letter <strong>sigma (σ)</strong> is used to represent standard deviation</li>
            <li>Technology (calculators, computers) is often used to calculate σ for large data sets</li>
            <li>Standard deviation is the most commonly used measure of spread in statistics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StandardDeviation;
