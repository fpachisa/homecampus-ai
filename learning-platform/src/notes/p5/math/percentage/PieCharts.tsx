import { useState } from 'react';
import MathText from '../../../../components/MathText';
import PieChartVisualizer from '../../../../components/math-tools/PieChartVisualizer';

const PieCharts = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Percentage in Pie Charts</h1>
        <p className="text-lg">Learn to read pie charts and convert fractions to percentages!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Reading Pie Charts */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">1. Reading Pie Charts</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border-l-4 border-orange-500 mb-4">
              <p className="text-orange-800 dark:text-orange-300 font-semibold">
                A pie chart shows how a whole is divided into parts. All parts add up to 100%!
              </p>
            </div>

            {/* Example pie chart with visualization */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Example: Books borrowed by 4 classes</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Total = 200 books</p>

              {/* Pie Chart Visualization - shows frequency so students calculate % */}
              <div className="mb-4">
                <PieChartVisualizer
                  categories={['Class A', 'Class B', 'Class C', 'Class D']}
                  frequencies={[60, 20, 70, 50]}
                  title="Books Borrowed by Classes"
                  showAngles={false}
                  displayMode="frequency"
                />
              </div>

              <div className="text-gray-800 dark:text-gray-200 space-y-2 mt-4">
                <p><strong>(a)</strong> How many books were borrowed by Class D?</p>
                <p className="ml-4">200 − 60 − 20 − 70 = <strong>50 books</strong></p>
                <p><strong>(b)</strong> Which class borrowed the most books?</p>
                <p className="ml-4"><strong>Class C</strong> (70 books = 35%)</p>
                <p><strong>(c)</strong> What percentage did Class B borrow?</p>
                <p className="ml-4"><MathText>{'$\\frac{20}{200} \\times 100\\% = $'}</MathText><strong>10%</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Percentages in Pie Charts */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">2. Percentages in Pie Charts</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
              <p className="text-blue-800 dark:text-blue-300 font-semibold">
                Pie charts often show percentages directly. Remember: all percentages must add up to 100%!
              </p>
            </div>

            {/* Example with percentages */}
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-3">
                Example: Favourite sports of 40 students
              </p>

              {/* Pie Chart showing percentages */}
              <div className="mb-4">
                <PieChartVisualizer
                  categories={['Swimming', 'Football', 'Badminton']}
                  frequencies={[25, 40, 35]}
                  title="Favourite Sports"
                  showAngles={false}
                  displayMode="percentage"
                />
              </div>

              <div className="text-gray-800 dark:text-gray-200 space-y-2 mt-4">
                <p><strong>Question:</strong> If 40 students were surveyed, how many chose Football?</p>
                <p className="mt-3"><strong>Solution:</strong></p>
                <p className="ml-4">Football = 40% of 40 students</p>
                <p className="ml-4">= <MathText>{'$\\frac{40}{100} \\times 40$'}</MathText></p>
                <p className="ml-4">= <strong>16 students</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Fractions in Pie Charts */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">3. Converting Fractions to Percentages</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500 mb-4">
              <p className="text-purple-800 dark:text-purple-300 font-semibold">
                Sometimes pie charts show fractions. You can convert these to percentages!
              </p>
            </div>

            {/* Example with fractions */}
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 mb-4">
              <p className="font-semibold text-amber-800 dark:text-amber-300 mb-3">
                Example: Favourite pets in a class
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                  <p className="text-gray-800 dark:text-gray-200">Hamster</p>
                  <p className="font-semibold"><MathText>{'$\\frac{1}{4}$'}</MathText> = 25%</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                  <p className="text-gray-800 dark:text-gray-200">Rabbit</p>
                  <p className="font-semibold"><MathText>{'$\\frac{1}{5}$'}</MathText> = 20%</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                  <p className="text-gray-800 dark:text-gray-200">Cat</p>
                  <p className="font-semibold">? = ?%</p>
                </div>
              </div>

              {/* Pie Chart showing the result */}
              <div className="mb-4">
                <PieChartVisualizer
                  categories={['Hamster', 'Rabbit', 'Cat']}
                  frequencies={[25, 20, 55]}
                  title="Favourite Pets"
                  showAngles={false}
                  displayMode="percentage"
                />
              </div>

              <div className="text-gray-800 dark:text-gray-200 space-y-2">
                <p><strong>Question:</strong> What percentage of the class chose cat?</p>
                <p className="mt-3"><strong>Step 1:</strong> Find the fraction for cat</p>
                <p className="ml-4">
                  <MathText>{'$1 - \\frac{1}{4} - \\frac{1}{5}$'}</MathText>
                </p>
                <p className="ml-4">
                  = <MathText>{'$\\frac{20}{20} - \\frac{5}{20} - \\frac{4}{20}$'}</MathText>
                </p>
                <p className="ml-4">
                  = <MathText>{'$\\frac{11}{20}$'}</MathText>
                </p>
                <p className="mt-3"><strong>Step 2:</strong> Convert to percentage</p>
                <p className="ml-4">
                  <MathText>{'$\\frac{11}{20} \\times 100\\% = \\frac{1100}{20}\\% = $'}</MathText><strong>55%</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Solving Pie Chart Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">4. Solving Pie Chart Problems</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-500 mb-4">
              <p className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
                Example: Stationery sold in a shop
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                  <p className="text-gray-800 dark:text-gray-200">Pens</p>
                  <p className="font-semibold"><MathText>{'$\\frac{3}{5}$'}</MathText></p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                  <p className="text-gray-800 dark:text-gray-200">Rulers</p>
                  <p className="font-semibold"><MathText>{'$\\frac{1}{10}$'}</MathText></p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                  <p className="text-gray-800 dark:text-gray-200">Erasers</p>
                  <p className="font-semibold">?</p>
                </div>
              </div>

              {/* Pie Chart for stationery - shows frequency so students calculate % */}
              <div className="mb-4">
                <PieChartVisualizer
                  categories={['Pens', 'Rulers', 'Erasers']}
                  frequencies={[60, 10, 30]}
                  title="Stationery Sold"
                  showAngles={false}
                  displayMode="frequency"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-gray-800 dark:text-gray-200">
                <div>
                  <p className="font-medium mb-2">(a) What % of stationery sold were pens?</p>
                  <p><MathText>{'$\\frac{3}{5} \\times 100\\% = \\frac{300}{5}\\% = $'}</MathText><strong>60%</strong></p>
                </div>
                <div>
                  <p className="font-medium mb-2">(b) What % were erasers?</p>
                  <div className="space-y-1">
                    <p>Erasers = <MathText>{'$1 - \\frac{3}{5} - \\frac{1}{10}$'}</MathText></p>
                    <p>= <MathText>{'$\\frac{10}{10} - \\frac{6}{10} - \\frac{1}{10} = \\frac{3}{10}$'}</MathText></p>
                    <p><MathText>{'$\\frac{3}{10} \\times 100\\% = $'}</MathText><strong>30%</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">💡 Tips for Pie Chart Problems:</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>All fractions/percentages must add up to 1 (or 100%)</li>
                <li>To find a missing part: subtract known parts from 1 (or 100%)</li>
                <li>Convert fractions to the same denominator when adding/subtracting</li>
                <li>Convert to percentage: multiply fraction by 100%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: Reading the pie chart
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Look at this pie chart. What percentage of books were Fiction?
              </p>
              <div className="mb-4">
                <PieChartVisualizer
                  categories={['Fiction', 'Non-fiction', 'Comics']}
                  frequencies={[45, 35, 20]}
                  title="Books Borrowed (Total: 100)"
                  showAngles={false}
                  displayMode="frequency"
                  highlightSector={0}
                />
              </div>
              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution1 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution1 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    Fiction = <strong>45%</strong>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    As a fraction: <MathText>{'$\\frac{45}{100} = \\frac{9}{20}$'}</MathText>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Finding missing percentage
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A pie chart shows favourite fruits: Apples = <MathText>{'$\\frac{2}{5}$'}</MathText>, Oranges = <MathText>{'$\\frac{1}{4}$'}</MathText>, Bananas = ?
                <br />What percentage chose bananas?
              </p>
              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution2 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution2 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <div className="text-gray-800 dark:text-gray-200 space-y-2">
                    <p>Bananas = <MathText>{'$1 - \\frac{2}{5} - \\frac{1}{4}$'}</MathText></p>
                    <p>= <MathText>{'$\\frac{20}{20} - \\frac{8}{20} - \\frac{5}{20}$'}</MathText></p>
                    <p>= <MathText>{'$\\frac{7}{20}$'}</MathText></p>
                    <p className="mt-2">As percentage: <MathText>{'$\\frac{7}{20} \\times 100\\% = $'}</MathText><strong>35%</strong></p>
                  </div>
                  <div className="mt-4">
                    <PieChartVisualizer
                      categories={['Apples', 'Oranges', 'Bananas']}
                      frequencies={[40, 25, 35]}
                      title="Favourite Fruits"
                      showAngles={false}
                      displayMode="percentage"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Finding the quantity
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                80 students were surveyed about their favourite drink. Use the pie chart to find how many chose Milo.
              </p>
              <div className="mb-4">
                <PieChartVisualizer
                  categories={['Milo', 'Tea', 'Coffee', 'Juice']}
                  frequencies={[35, 25, 15, 25]}
                  title="Favourite Drinks"
                  showAngles={false}
                  displayMode="percentage"
                  highlightSector={0}
                />
              </div>
              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution3 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution3 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    Milo = 35% of 80 students
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 mt-2">
                    = <MathText>{'$\\frac{35}{100} \\times 80$'}</MathText>
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 mt-2">
                    = <MathText>{'$\\frac{35 \\times 80}{100} = \\frac{2800}{100}$'}</MathText>
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 mt-2">
                    = <strong>28 students</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-orange-50 dark:bg-orange-900/30 border-l-4 border-orange-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>A pie chart represents the <strong>whole</strong> - all parts add up to 100%</li>
            <li>To find a missing part: subtract known parts from 100%</li>
            <li>To convert fraction to %: multiply by 100%</li>
            <li>To find quantity from %: multiply percentage × total ÷ 100</li>
            <li>Check your answer: all parts should add up to 100%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
