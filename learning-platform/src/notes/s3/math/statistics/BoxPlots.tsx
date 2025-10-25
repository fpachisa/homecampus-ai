import { useState } from 'react';

const BoxPlots = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Box Plots and Quartiles</h1>
        <p className="text-lg">Understanding the five-number summary and box-and-whisker plots</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Five-Number Summary */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">1. The Five-Number Summary</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The <strong>five-number summary</strong> of a data set consists of:
            </p>
            <div className="grid md:grid-cols-5 gap-3">
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-center border-2 border-indigo-300 dark:border-indigo-600">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">1</p>
                <p className="font-semibold text-indigo-700 dark:text-indigo-300">Minimum</p>
                <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">(min)</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-center border-2 border-indigo-300 dark:border-indigo-600">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">2</p>
                <p className="font-semibold text-indigo-700 dark:text-indigo-300">Q₁</p>
                <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">Lower Quartile</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-center border-2 border-purple-400 dark:border-purple-600">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">3</p>
                <p className="font-semibold text-purple-700 dark:text-purple-300">Q₂</p>
                <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">Median</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-center border-2 border-indigo-300 dark:border-indigo-600">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">4</p>
                <p className="font-semibold text-indigo-700 dark:text-indigo-300">Q₃</p>
                <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">Upper Quartile</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-center border-2 border-indigo-300 dark:border-indigo-600">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">5</p>
                <p className="font-semibold text-indigo-700 dark:text-indigo-300">Maximum</p>
                <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">(max)</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Quartiles Explained:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              The <strong>median</strong> divides an ordered data set into two halves. By finding the middle value of each half, we divide the original data into <strong>quarters</strong>. These middle values are called <strong>quartiles</strong>.
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded">
                <p className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Q₁ (Lower Quartile):</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  The middle value of the <strong>lower half</strong> of the data. One quarter or 25% of the data values are less than or equal to Q₁.
                </p>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Q₂ (Median):</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  The middle value of the data set. 50% of data values are less than or equal to Q₂.
                </p>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded">
                <p className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Q₃ (Upper Quartile):</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  The middle value of the <strong>upper half</strong> of the data. Three quarters or 75% of the data values are less than or equal to Q₃.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
              💡 Note: The median is sometimes referred to as Q₂ because it is the 2nd quartile.
            </p>
          </div>
        </div>

        {/* Section 2: Range and IQR */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">2. Range and Interquartile Range</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Range */}
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
              <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Range:</h3>
              <p className="text-gray-800 dark:text-gray-200 mb-3">
                The <strong>range</strong> of a data set is the difference between the <strong>maximum</strong> and <strong>minimum</strong> data values.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100">
                  Range = max − min
                </p>
              </div>
              <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded">
                <p className="text-xs text-yellow-700 dark:text-yellow-300">
                  ⚠️ Limitation: The range can be heavily influenced by outliers
                </p>
              </div>
            </div>

            {/* IQR */}
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400">
              <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Interquartile Range (IQR):</h3>
              <p className="text-gray-800 dark:text-gray-200 mb-3">
                The <strong>IQR</strong> is the range of the middle half or 50% of the data.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100 mb-2">
                  IQR = Q₃ − Q₁
                </p>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  or IQR = upper quartile − lower quartile
                </p>
              </div>
              <div className="mt-3 p-3 bg-green-100 dark:bg-green-900/50 rounded">
                <p className="text-xs text-green-700 dark:text-green-300">
                  ✓ Advantage: Not influenced by outliers; only uses two data values
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
              Data: 13, 14, 18, 18, 19, 21, <span className="font-bold text-purple-600 dark:text-purple-400">22</span>, 22, 24, 25, 27, 28, 30, 33, 43
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Five-number summary:</p>
                <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                  <li>• Min = 13</li>
                  <li>• Q₁ = 18</li>
                  <li>• Q₂ = 22 (median)</li>
                  <li>• Q₃ = 28</li>
                  <li>• Max = 43</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Measures of spread:</p>
                <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                  <li>• Range = 43 − 13 = <strong>30</strong></li>
                  <li>• IQR = 28 − 18 = <strong>10</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Box Plots */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">3. Box Plots (Box-and-Whisker Plots)</h2>

          <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border-l-4 border-pink-500 dark:border-pink-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              A <strong>box plot</strong> or <strong>box-and-whisker plot</strong> is a visual display of the five-number summary of a data set.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Components of a Box Plot:</h3>

            {/* Visual representation */}
            <div className="mb-6 p-6 bg-gray-50 dark:bg-gray-700/50 rounded">
              <div className="relative h-24 mb-4">
                {/* Number line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300 dark:bg-gray-600"></div>

                {/* Box plot visualization */}
                <div className="absolute bottom-0" style={{left: '10%', width: '80%'}}>
                  {/* Left whisker */}
                  <div className="absolute h-1 bg-indigo-500 dark:bg-indigo-400" style={{left: '0%', width: '12.5%', top: '30px'}}></div>
                  <div className="absolute h-8 w-1 bg-indigo-500 dark:bg-indigo-400" style={{left: '0%', top: '14px'}}></div>

                  {/* Box */}
                  <div className="absolute h-16 bg-indigo-200 dark:bg-indigo-800 border-2 border-indigo-500 dark:border-indigo-400 rounded"
                       style={{left: '12.5%', width: '50%', top: '6px'}}>
                    {/* Median line */}
                    <div className="absolute h-full w-1 bg-purple-600 dark:bg-purple-400" style={{left: '50%'}}></div>
                  </div>

                  {/* Right whisker */}
                  <div className="absolute h-1 bg-indigo-500 dark:bg-indigo-400" style={{left: '62.5%', width: '37.5%', top: '30px'}}></div>
                  <div className="absolute h-8 w-1 bg-indigo-500 dark:bg-indigo-400" style={{left: '100%', top: '14px'}}></div>
                </div>

                {/* Labels */}
                <div className="absolute" style={{left: '10%', bottom: '-25px'}}>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Min</p>
                </div>
                <div className="absolute" style={{left: '22.5%', bottom: '-25px'}}>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Q₁</p>
                </div>
                <div className="absolute" style={{left: '47.5%', bottom: '-25px'}}>
                  <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 text-center">Q₂</p>
                </div>
                <div className="absolute" style={{left: '72.5%', bottom: '-25px'}}>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Q₃</p>
                </div>
                <div className="absolute" style={{left: '90%', bottom: '-25px'}}>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Max</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-8">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded">
                <p className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">The Rectangular Box:</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Represents the <strong>middle half</strong> of the data set. Its length is the <strong>interquartile range (IQR)</strong>.
                </p>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-1">The Median Line:</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  A vertical line inside the box showing the position of the median (Q₂).
                </p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-1">The Lower Whisker:</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Represents the 25% of the data with the <strong>lowest values</strong>.
                </p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-1">The Upper Whisker:</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Represents the 25% of the data with the <strong>highest values</strong>.
                </p>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded">
                <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Distance Between Ends:</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  The distance between the ends of the whiskers is the <strong>range</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Parallel Box Plots */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">4. Parallel Box Plots</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Comparing Data Sets:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              To compare two data sets, we can draw a box plot for each data set on the same scale. This is called a <strong>parallel box plot</strong>.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">What to Compare:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Centre (Location):</p>
                <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1 list-disc ml-4">
                  <li>Compare medians</li>
                  <li>Which data set has higher values overall?</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Spread (Variability):</p>
                <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1 list-disc ml-4">
                  <li>Compare IQRs and ranges</li>
                  <li>Which data set is more consistent/reliable?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg font-semibold hover:bg-indigo-200 dark:hover:bg-indigo-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Creating a Box Plot
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-indigo-500 dark:border-indigo-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Travel times (Car): 13, 14, 18, 18, 19, 21, 22, 22, 24, 25, 27, 28, 30, 33, 43
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Step 1: Find the five-number summary</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>• Min = 13</p>
                      <p>• Q₁ = 18 (median of lower half)</p>
                      <p>• Q₂ = 22 (median)</p>
                      <p>• Q₃ = 28 (median of upper half)</p>
                      <p>• Max = 43</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Step 2: Draw the box plot</p>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded">
                      <div className="relative h-20 mb-4">
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300 dark:bg-gray-600"></div>
                        <div className="absolute bottom-0" style={{left: '5%', width: '90%'}}>
                          <div className="absolute h-1 bg-indigo-500 dark:bg-indigo-400" style={{left: '0%', width: '16.67%', top: '30px'}}></div>
                          <div className="absolute h-8 w-1 bg-indigo-500 dark:bg-indigo-400" style={{left: '0%', top: '14px'}}></div>
                          <div className="absolute h-16 bg-indigo-200 dark:bg-indigo-800 border-2 border-indigo-500 dark:border-indigo-400 rounded"
                               style={{left: '16.67%', width: '33.33%', top: '6px'}}>
                            <div className="absolute h-full w-1 bg-purple-600 dark:bg-purple-400" style={{left: '40%'}}></div>
                          </div>
                          <div className="absolute h-1 bg-indigo-500 dark:bg-indigo-400" style={{left: '50%', width: '50%', top: '30px'}}></div>
                          <div className="absolute h-8 w-1 bg-indigo-500 dark:bg-indigo-400" style={{left: '100%', top: '14px'}}></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-6">
                        <span>10</span>
                        <span>20</span>
                        <span>30</span>
                        <span>40</span>
                        <span>50</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg font-semibold hover:bg-indigo-200 dark:hover:bg-indigo-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Comparing with Parallel Box Plots
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-indigo-500 dark:border-indigo-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Compare travel times: Car vs Bus
                </p>

                <div className="ml-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">Car: min=13, Q₁=18, Q₂=22, Q₃=28, max=43</p>
                    <p className="text-sm font-semibold text-green-700 dark:text-green-300">Bus: min=16, Q₁=17, Q₂=18, Q₃=21, max=30</p>
                  </div>

                  <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded">
                      <p className="font-semibold mb-1">i) Which is quicker?</p>
                      <p className="ml-4">
                        The bus is generally quicker. The bus median (18) is lower than the car median (22).
                      </p>
                    </div>
                    <div className="p-3 bg-white dark:bg-gray-800 rounded">
                      <p className="font-semibold mb-1">ii) Which is more reliable?</p>
                      <p className="ml-4">
                        The bus is more reliable. Car IQR = 28−18 = 10. Bus IQR = 21−17 = 4.
                        The bus has less spread/variability.
                      </p>
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
            <li><strong>Five-number summary:</strong> min, Q₁, Q₂ (median), Q₃, max</li>
            <li><strong>Q₁ (lower quartile)</strong> = 25th percentile (25% of data below)</li>
            <li><strong>Q₂ (median)</strong> = 50th percentile (50% of data below)</li>
            <li><strong>Q₃ (upper quartile)</strong> = 75th percentile (75% of data below)</li>
            <li><strong>Range</strong> = max − min (measures total spread, but influenced by outliers)</li>
            <li><strong>IQR</strong> = Q₃ − Q₁ (measures spread of middle 50%, not influenced by outliers)</li>
            <li>A <strong>box plot</strong> visually displays the five-number summary</li>
            <li>The <strong>box</strong> shows the middle 50% of data, its length = IQR</li>
            <li>The <strong>whiskers</strong> show the lowest 25% and highest 25%</li>
            <li><strong>Parallel box plots</strong> allow visual comparison of two data sets</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BoxPlots;
