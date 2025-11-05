import { useState } from 'react';

const FrequencyTables = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Organizing Data with Frequency Tables</h1>
        <p className="mt-2 text-green-100">Learning to organize raw data using tally marks and frequency tables</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: Tally Marks */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Using Tally Marks to Count
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Tally marks</strong> are a simple and efficient way to count items as you collect data. Instead of writing numbers repeatedly, we use strokes (|) to keep track.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Tally Mark System:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Each item is marked with a vertical stroke: | | | |</li>
                <li>Every <strong>5th mark</strong> crosses the previous four diagonally: <span className="font-mono text-lg">||||/</span></li>
                <li>This groups tallies in sets of 5, making counting easier</li>
                <li>Example: <span className="font-mono text-lg">||||/ ||||/ |||</span> = 13 items</li>
              </ul>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Grouping by fives makes it much faster to count the total, especially when dealing with large amounts of data.
            </p>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Reading Tally Marks
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A teacher recorded student absences for a week using tally marks:
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-mono text-lg">
                Monday: ||||/ ||||/ ||||<br />
                Tuesday: ||||/ ||<br />
                Wednesday: ||||/ ||||/ |
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4 mb-2"><strong>How many students were absent each day?</strong></p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Monday:</strong> 2 groups of 5 + 4 = 10 + 4 = <strong>14 students</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Tuesday:</strong> 1 group of 5 + 2 = 5 + 2 = <strong>7 students</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Wednesday:</strong> 2 groups of 5 + 1 = 10 + 1 = <strong>11 students</strong>
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Counting with Tally Marks
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A survey asked students their favorite sport. The tally marks show:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 font-mono text-lg ml-4">
              Football: ||||/ ||||/ ||||/ ||<br />
              Basketball: ||||/ ||||/ |<br />
              Swimming: ||||/ |||
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              How many students chose each sport? What is the total number of students surveyed?
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  Football: 3 × 5 + 2 = 15 + 2 = <strong>17 students</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Basketball: 2 × 5 + 1 = 10 + 1 = <strong>11 students</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Swimming: 1 × 5 + 3 = 5 + 3 = <strong>8 students</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3 font-semibold">
                  Total surveyed: 17 + 11 + 8 = <strong>36 students</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Frequency Tables */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Constructing Frequency Tables
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>frequency table</strong> organizes data by showing how many times each value or category appears. It has three main parts:
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Class</strong> - The item or category being counted (e.g., colors, scores, ages)</li>
                <li><strong>Tally</strong> - Tally marks showing the count</li>
                <li><strong>Frequency</strong> - The number of times each class occurs (the count)</li>
              </ul>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Frequency tables turn messy raw data into clear, organized information that's easy to understand and analyze.
            </p>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Creating a Frequency Table
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              20 students were asked how many siblings they have. The raw data is:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3 font-mono">
              2, 1, 0, 3, 1, 2, 1, 0, 2, 3, 1, 2, 0, 1, 4, 2, 1, 3, 1, 2
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Create a frequency table for this data.</strong>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Number of Siblings</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Tally</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-mono">|||</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-mono">||||/ |||</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">8</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">2</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-mono">||||/ |</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">6</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">3</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-mono">|||</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">4</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-mono">|</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">1</td>
                  </tr>
                  <tr className="bg-gray-100 dark:bg-gray-700 font-semibold">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-800 dark:text-gray-100">Total</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300"></td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-800 dark:text-gray-100">20</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                Notice how the organized table makes it immediately clear that most students (8) have 1 sibling.
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Build Your Own Frequency Table
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Students were asked their favorite color. Raw data:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3 font-mono">
              Blue, Red, Blue, Green, Blue, Red, Blue, Yellow, Green, Red, Blue, Blue, Red, Green, Blue
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Create a frequency table showing the tally and frequency for each color.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Color</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Tally</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">Blue</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-mono">||||/ |||</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">8</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">Red</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-mono">||||</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">4</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">Green</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-mono">||</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">Yellow</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-mono">|</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">1</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-gray-700 font-semibold">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-800 dark:text-gray-100">Total</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-800 dark:text-gray-100">15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Interpreting Frequency Tables */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Interpreting Frequency Tables
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Once data is organized in a frequency table, we can easily answer questions and calculate useful information:
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Common Calculations:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Total frequency:</strong> Add all frequencies together</li>
                <li><strong>Most common (mode):</strong> Find the class with the highest frequency</li>
                <li><strong>Percentage:</strong> (Frequency ÷ Total) × 100%</li>
                <li><strong>Ratio:</strong> Compare frequencies between classes</li>
              </ul>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Analyzing a Frequency Table
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A class recorded the number of books students read last month:
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded overflow-x-auto">
              <table className="w-full border-collapse mb-4">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Books Read</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">0</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">3</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">1</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">5</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">2</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">8</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">3</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">4</td></tr>
                </tbody>
              </table>
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>(a) How many students are in the class?</strong></p>
              <p className="text-gray-700 dark:text-gray-300">Total = 3 + 5 + 8 + 4 = <strong>20 students</strong></p>

              <p className="text-gray-700 dark:text-gray-300 mb-2 mt-4"><strong>(b) What is the most common number of books read?</strong></p>
              <p className="text-gray-700 dark:text-gray-300">The highest frequency is 8, so <strong>2 books</strong> is most common</p>

              <p className="text-gray-700 dark:text-gray-300 mb-2 mt-4"><strong>(c) What percentage of students read 3 books?</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                Percentage = (4 ÷ 20) × 100% = 0.2 × 100% = <strong>20%</strong>
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Analyzing Data
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Students were surveyed about their favorite subject:
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Subject</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">Math</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">12</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">Science</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">15</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">English</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">8</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">History</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">5</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              (a) How many students were surveyed?<br />
              (b) Which subject is most popular?<br />
              (c) What percentage chose Math?<br />
              (d) What is the ratio of Science to History?
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (a) Total = 12 + 15 + 8 + 5 = <strong>40 students</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (b) Science has the highest frequency (15), so <strong>Science</strong> is most popular
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (c) Percentage = (12 ÷ 40) × 100% = 0.3 × 100% = <strong>30%</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  (d) Ratio = 15 : 5 = <strong>3 : 1</strong> (simplify by dividing both by 5)
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Tally marks</strong> provide an efficient way to count data, grouping by fives for easy totaling</li>
            <li>A <strong>frequency table</strong> has three columns: Class (item), Tally (marks), and Frequency (count)</li>
            <li><strong>Class</strong> is the category being counted, <strong>frequency</strong> is how many times it appears</li>
            <li>Frequency tables transform messy raw data into organized, understandable information</li>
            <li>From frequency tables, we can calculate totals, find the mode, determine percentages, and compare using ratios</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default FrequencyTables;
