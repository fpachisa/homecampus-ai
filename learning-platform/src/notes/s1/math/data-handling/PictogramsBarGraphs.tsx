import { useState } from 'react';
import BarChartVisualizer from '../../../../components/math-tools/BarChartVisualizer';

const PictogramsBarGraphs = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Pictograms & Bar Graphs</h1>
        <p className="mt-2 text-blue-100">Visual representations that make data easy to understand at a glance</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: Pictograms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Understanding Pictograms
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>pictogram</strong> uses pictures or symbols to represent data. Each symbol represents a specific quantity, making the information visual and engaging.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Features of Pictograms:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Symbols/Figures:</strong> Use consistent images (e.g., 🍎 for apples)</li>
                <li><strong>Key/Scale:</strong> States what each symbol represents (e.g., 🍎 = 10 apples)</li>
                <li><strong>Title:</strong> Clearly describes what the pictogram shows</li>
                <li><strong>Same size symbols:</strong> All symbols must be identical in size</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Reading a Pictogram
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Books Sold at Book Fair</strong>
            </p>
            <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Key:</strong> 📚 = 20 books</p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300 mt-4">
                <p>Fiction: 📚 📚 📚 📚 = 80 books</p>
                <p>Non-Fiction: 📚 📚 📚 = 60 books</p>
                <p>Comics: 📚 📚 📚 📚 📚 = 100 books</p>
                <p>Biography: 📚 📚 = 40 books</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>Total books sold:</strong> 80 + 60 + 100 + 40 = <strong>280 books</strong>
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Interpreting Pictograms
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Ice Cream Cones Sold</strong> (Key: 🍦 = 15 cones)
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-3">
              <p>Monday: 🍦 🍦 🍦</p>
              <p>Tuesday: 🍦 🍦 🍦 🍦</p>
              <p>Wednesday: 🍦 🍦 🍦 🍦 🍦</p>
              <p>Thursday: 🍦 🍦</p>
              <p>Friday: 🍦 🍦 🍦 🍦 🍦 🍦</p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              (a) How many cones were sold on Wednesday?<br />
              (b) Which day had the highest sales?<br />
              (c) How many more cones were sold on Friday than Thursday?
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
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (a) Wednesday: 5 symbols × 15 = <strong>75 cones</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (b) <strong>Friday</strong> (6 symbols = 90 cones)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  (c) Friday (90) - Thursday (30) = <strong>60 more cones</strong>
                </p>

                {/* Bar Chart showing the data */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Same data as a bar chart:</h4>
                  <BarChartVisualizer
                    categories={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
                    values={[45, 60, 75, 30, 90]}
                    title="Ice Cream Cones Sold"
                    xLabel="Day"
                    yLabel="Cones Sold"
                    orientation="vertical"
                    showValues={true}
                  />
                  <p className="text-gray-700 dark:text-gray-300 text-sm italic mt-3">
                    📝 Notice: A bar chart makes it much easier to compare values and see patterns than a pictogram!
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Bar Graphs Basics */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Bar Graphs (Bar Charts)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>bar graph</strong> (or bar chart) uses rectangular bars to show quantities. Bar graphs are more precise than pictograms and better for comparing values.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Key Features of Bar Graphs:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Equal width bars:</strong> All bars have the same width</li>
                <li><strong>Uniform gaps:</strong> Spaces between bars are equal</li>
                <li><strong>Labeled axes:</strong> X-axis (categories) and Y-axis (frequency/values)</li>
                <li><strong>Title:</strong> Describes what data is shown</li>
                <li><strong>Scale:</strong> Y-axis shows the measurement scale</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Vertical Bar Graph
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A survey asked 50 students about their favorite fruit:
            </p>
            <div className="overflow-x-auto mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <table className="w-full border-collapse mb-4">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Fruit</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Apple</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">18</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Orange</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">15</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Banana</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">12</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Grapes</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">5</td></tr>
                </tbody>
              </table>
              <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                In a bar graph, each fruit would have a vertical bar with height corresponding to its frequency. The Y-axis would go from 0 to 20 (with headroom), and the X-axis would list the fruit names.
              </p>

              {/* Interactive Bar Chart Visualization */}
              <div className="mt-6">
                <BarChartVisualizer
                  categories={['Apple', 'Orange', 'Banana', 'Grapes']}
                  values={[18, 15, 12, 5]}
                  title="Favorite Fruits (50 students)"
                  xLabel="Fruit"
                  yLabel="Number of Students"
                  orientation="vertical"
                  showValues={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Horizontal vs Vertical */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Vertical vs. Horizontal Bar Graphs
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bar graphs can be drawn in two orientations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Vertical Bar Graph</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Bars go up from horizontal axis</li>
                  <li>Categories on X-axis (horizontal)</li>
                  <li>Values on Y-axis (vertical)</li>
                  <li><strong>Best for:</strong> Few categories, short names</li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Horizontal Bar Graph</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Bars extend right from vertical axis</li>
                  <li>Categories on Y-axis (vertical)</li>
                  <li>Values on X-axis (horizontal)</li>
                  <li><strong>Best for:</strong> Long category names, many categories</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Both types show exactly the same information - the choice depends on what makes the data clearest.
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Creating a Bar Graph
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Students voted for their favorite lunch option:
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Lunch Option</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Votes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Chicken Rice</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">25</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Nasi Lemak</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">20</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Pasta</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">15</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Sandwiches</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">10</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              (a) Which orientation (vertical or horizontal) would be better for this data? Why?<br />
              (b) What should the maximum value on the frequency axis be?<br />
              (c) Which lunch option was most popular?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (a) <strong>Either works well</strong>, but horizontal might be slightly better because the category names are somewhat long ("Chicken Rice" takes more space than just "Rice")
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (b) Maximum value should be at least 25 (the highest frequency). <strong>30</strong> would be a good choice to leave some headroom.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  (c) <strong>Chicken Rice</strong> with 25 votes
                </p>

                {/* Vertical Bar Chart */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Vertical Bar Chart:</h4>
                  <BarChartVisualizer
                    categories={['Chicken Rice', 'Nasi Lemak', 'Pasta', 'Sandwiches']}
                    values={[25, 20, 15, 10]}
                    title="Favorite Lunch Options - Vertical"
                    xLabel="Lunch Option"
                    yLabel="Votes"
                    orientation="vertical"
                    showValues={true}
                  />
                </div>

                {/* Horizontal Bar Chart */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Horizontal Bar Chart (better for longer names):</h4>
                  <BarChartVisualizer
                    categories={['Chicken Rice', 'Nasi Lemak', 'Pasta', 'Sandwiches']}
                    values={[25, 20, 15, 10]}
                    title="Favorite Lunch Options - Horizontal"
                    xLabel="Votes"
                    yLabel="Lunch Option"
                    orientation="horizontal"
                    showValues={true}
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Pictograms</strong> use symbols/pictures with a key stating what each symbol represents</li>
            <li>Pictograms are visual and engaging but less precise than bar graphs</li>
            <li><strong>Bar graphs</strong> use rectangular bars of equal width with uniform gaps to show quantities</li>
            <li>Bar graphs can be <strong>vertical</strong> (bars go up) or <strong>horizontal</strong> (bars go right)</li>
            <li>Choose horizontal bars when category names are long or there are many categories</li>
            <li>Both types must have a title, labeled axes, and appropriate scale</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default PictogramsBarGraphs;
