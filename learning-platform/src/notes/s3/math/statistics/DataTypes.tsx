import { useState } from 'react';

const DataTypes = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Data Types and Organization</h1>
        <p className="text-lg">Understanding discrete and continuous numerical data</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Introduction to Statistics */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. What is Statistics?</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              <strong>Statistics</strong> is the study of <strong>collecting and analysing data</strong>.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Key Terms:</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Population:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">The group of things or people we are interested in finding information about</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Sample:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">A subset chosen from the population</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Census:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Collecting data from the whole population</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Survey:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Collecting data from a sample</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Types of Data */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Types of Numerical Data</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Variables:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When we collect data, we measure or observe a particular feature or <strong>variable</strong> associated with the population.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Discrete Data */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-blue-300 dark:border-blue-600">
              <h3 className="font-bold text-xl mb-3 text-blue-700 dark:text-blue-300">Discrete Numerical Data</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Definition:</p>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    Takes <strong>exact numerical values</strong>. Usually a result of <strong>counting</strong>.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Examples:</p>
                  <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1 ml-4 list-disc">
                    <li>Number of nights stayed at a hotel</li>
                    <li>Number of students in a class</li>
                    <li>Number of shots in a tennis point</li>
                    <li>Shoe sizes (can only be 7, 8, 9, etc.)</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-300 dark:border-green-600">
                  <p className="text-sm font-semibold text-green-700 dark:text-green-300">
                    ✓ Can only take specific values like 1, 2, 3, 4, 5...
                  </p>
                </div>
              </div>
            </div>

            {/* Continuous Data */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-purple-300 dark:border-purple-600">
              <h3 className="font-bold text-xl mb-3 text-purple-700 dark:text-purple-300">Continuous Numerical Data</h3>
              <div className="space-y-3">
                <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Definition:</p>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    Can take <strong>any numerical value within a range</strong>. Usually a result of <strong>measuring</strong>.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Examples:</p>
                  <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1 ml-4 list-disc">
                    <li>Body temperature (35°C to 41°C)</li>
                    <li>Weight of rugby players</li>
                    <li>Distance travelled by trams</li>
                    <li>Running times for 200 metres</li>
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/30 p-3 rounded border border-orange-300 dark:border-orange-600">
                  <p className="text-sm font-semibold text-orange-700 dark:text-orange-300">
                    ✓ Can take any value: 37.6°C, 37.62°C, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
              💡 Key Difference: Discrete = Counting (exact values) | Continuous = Measuring (any value in a range)
            </p>
          </div>
        </div>

        {/* Section 3: Organizing Discrete Data */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">3. Organizing Discrete Data</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Display Methods:</h3>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Tally Table</p>
                <p className="text-xs text-gray-700 dark:text-gray-300">Count occurrences using tally marks</p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Frequency Table</p>
                <p className="text-xs text-gray-700 dark:text-gray-300">Show values and their frequencies</p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Column Graph</p>
                <p className="text-xs text-gray-700 dark:text-gray-300">Visual display with vertical bars</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded border-l-4 border-green-500 dark:border-green-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Mode:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-2">
              The <strong>mode</strong> is the most frequently occurring value in a data set.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              For ungrouped discrete data, the mode is easy to identify from the frequency table.
            </p>
          </div>
        </div>

        {/* Section 4: Grouped Discrete Data */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">4. Grouped Discrete Data</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Class Intervals:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              When there are many different data values, it may be appropriate to group the data into <strong>class intervals</strong>.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Example:</strong> Instead of listing every score from 50 to 109, group them:
              </p>
              <ul className="text-sm text-gray-800 dark:text-gray-200 mt-2 ml-4 space-y-1">
                <li>• 50 to 59</li>
                <li>• 60 to 69</li>
                <li>• 70 to 79</li>
                <li>• 80 to 89</li>
                <li>• 90 to 99</li>
                <li>• 100 to 109</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded border-2 border-purple-300 dark:border-purple-600">
            <h3 className="font-bold mb-3 text-purple-700 dark:text-purple-300">Modal Class:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              The <strong>modal class</strong> is the class interval with the <strong>highest frequency</strong>.
            </p>
          </div>
        </div>

        {/* Section 5: Continuous Data */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">5. Continuous Numerical Data</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Characteristics:</h3>
            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <p>
                ✓ Can take <strong>any numerical value within a certain range</strong>
              </p>
              <p>
                ✓ Usually a result of <strong>measuring</strong>
              </p>
              <p>
                ✓ No two values will be <strong>exactly</strong> the same
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                Example: Two people with body temperature "37.6°C" - even though recorded the same,
                one might actually be 37.62°C and the other 37.6°C. Their temperatures won't be <em>exactly</em> 37.6°C.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Displaying Continuous Data:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Continuous data must be organized into <strong>class intervals</strong> and displayed using a <strong>frequency histogram</strong>.
            </p>
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Example: Weight of rugby players</p>
              <div className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                <p>• 75 ⩽ w &lt; 80 kg</p>
                <p>• 80 ⩽ w &lt; 85 kg</p>
                <p>• 85 ⩽ w &lt; 90 kg</p>
                <p>• 90 ⩽ w &lt; 95 kg</p>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Note: "⩽ w &lt;" means "greater than or equal to w, but less than"
              </p>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Identifying Discrete vs Continuous Data
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Classify each variable as discrete or continuous:
                </p>

                <div className="ml-4 space-y-3 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-mono text-gray-900 dark:text-gray-100">a) Number of students in a classroom</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                      <strong className="text-blue-600 dark:text-blue-400">Discrete</strong> - counted (can only be 20, 21, 22... not 20.5 students)
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-gray-900 dark:text-gray-100">b) Height of students</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                      <strong className="text-purple-600 dark:text-purple-400">Continuous</strong> - measured (can be 165.3 cm, 165.34 cm, etc.)
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-gray-900 dark:text-gray-100">c) Number of goals scored in a football match</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                      <strong className="text-blue-600 dark:text-blue-400">Discrete</strong> - counted (0, 1, 2, 3...)
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-gray-900 dark:text-gray-100">d) Time taken to run 100 metres</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                      <strong className="text-purple-600 dark:text-purple-400">Continuous</strong> - measured (can be 12.5 s, 12.54 s, etc.)
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Creating a Frequency Table
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Number of nights stayed at a hotel: 2, 3, 1, 2, 4, 2, 6, 3, 4, 5, 8, 3, 1, 5, 7, 2, 1, 2, 4, 5
                </p>

                <div className="ml-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Frequency Table:</p>
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                        <th className="text-left p-2 text-gray-900 dark:text-gray-100">Nights</th>
                        <th className="text-left p-2 text-gray-900 dark:text-gray-100">Frequency</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-800 dark:text-gray-200">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2">1</td>
                        <td className="p-2">3</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2 font-bold">2</td>
                        <td className="p-2 font-bold bg-green-50 dark:bg-green-900/30">6</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2">3</td>
                        <td className="p-2">3</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2">4</td>
                        <td className="p-2">3</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2">5</td>
                        <td className="p-2">3</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2">6</td>
                        <td className="p-2">1</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2">7</td>
                        <td className="p-2">1</td>
                      </tr>
                      <tr>
                        <td className="p-2">8</td>
                        <td className="p-2">1</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-3">
                    <strong>Mode = 2 nights</strong> (highest frequency of 6)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>Statistics</strong> is the study of collecting and analysing data</li>
            <li><strong>Discrete data</strong> takes exact values (counting) - e.g., 1, 2, 3, 4...</li>
            <li><strong>Continuous data</strong> can take any value in a range (measuring) - e.g., 37.6°C, 165.3 cm</li>
            <li><strong>Population</strong> = whole group; <strong>Sample</strong> = subset of population</li>
            <li><strong>Census</strong> = data from whole population; <strong>Survey</strong> = data from sample</li>
            <li>Discrete data can be displayed in <strong>tally tables, frequency tables, column graphs</strong></li>
            <li>Continuous data must use <strong>class intervals</strong> and <strong>histograms</strong></li>
            <li><strong>Mode</strong> = most frequently occurring value</li>
            <li><strong>Modal class</strong> = class interval with highest frequency</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataTypes;
