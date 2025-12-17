import { useState } from 'react';
import MathText from '../../../../components/MathText';
import PieChartVisualizer from '../../../../components/math-tools/PieChartVisualizer';
import LineChartVisualizer from '../../../../components/math-tools/LineChartVisualizer';

const PieChartsLineGraphs = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-600 dark:from-pink-600 dark:to-rose-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Pie Charts & Line Graphs</h1>
        <p className="mt-2 text-pink-100">Visualizing proportions and trends in data</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: Pie Charts Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Understanding Pie Charts
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>pie chart</strong> is a circular diagram divided into sectors (slices), where each sector represents a proportion of the whole. Pie charts are perfect for showing how parts make up a complete whole.
            </p>
            <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded mb-4">
              <p className="font-semibold text-pink-800 dark:text-pink-300 mb-2">Key Features of Pie Charts:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Circle = 100%:</strong> The entire pie represents the complete dataset</li>
                <li><strong>Sectors:</strong> Each slice shows a category's proportion</li>
                <li><strong>Angles:</strong> Sector size is determined by angle calculations</li>
                <li><strong>Labels:</strong> Show category names and values/percentages</li>
              </ul>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The complete circle is 360°, so each sector's angle represents its proportion of the total.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Understanding Pie Chart Proportions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A pie chart shows how 40 students travel to school:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mb-3">
              <li>Bus: 20 students</li>
              <li>Walk: 12 students</li>
              <li>Car: 8 students</li>
            </ul>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>What percentage takes the bus?</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                Percentage = (20 ÷ 40) × 100% = 0.5 × 100% = <strong>50%</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                The bus sector would take up exactly half (50%) of the circle.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Calculating Sector Angles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Calculating Pie Chart Angles
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To draw a pie chart, we need to calculate the angle of each sector. This is one of the most important skills in data handling!
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Formula for Sector Angle:</p>
              <div className="text-gray-700 dark:text-gray-300 text-lg">
                <MathText>Angle of sector = (Frequency ÷ Total frequency) × 360°</MathText>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm">
                Why 360°? Because a complete circle has 360 degrees!
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Calculating All Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              60 students chose their favorite sport:
            </p>
            <div className="overflow-x-auto mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <table className="w-full border-collapse mb-4">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Sport</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Frequency</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Calculation</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Angle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Football</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">30</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">(30÷60) × 360°</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">180°</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Basketball</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">18</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">(18÷60) × 360°</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">108°</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Badminton</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">12</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">(12÷60) × 360°</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">72°</td>
                  </tr>
                  <tr className="bg-gray-100 dark:bg-gray-700 font-semibold">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Total</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-800 dark:text-gray-100">60</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300"></td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-800 dark:text-gray-100">360°</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                ✅ Check: All angles should add up to 360° (180° + 108° + 72° = 360°)
              </p>
            </div>

            {/* Interactive Pie Chart Visualization */}
            <div className="mt-6">
              <PieChartVisualizer
                categories={['Football', 'Basketball', 'Badminton']}
                frequencies={[30, 18, 12]}
                title="Favorite Sports"
                showAngles={true}
                displayMode="frequency"
              />
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Calculate Pie Chart Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A class of 36 students chose their favorite season:
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Season</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Summer</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">15</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Spring</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">9</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Autumn</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">6</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Winter</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">6</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Calculate the angle for each season's sector.
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
                  Summer: (15 ÷ 36) × 360° = <strong>150°</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Spring: (9 ÷ 36) × 360° = <strong>90°</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Autumn: (6 ÷ 36) × 360° = <strong>60°</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Winter: (6 ÷ 36) × 360° = <strong>60°</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                  Check: 150° + 90° + 60° + 60° = 360° ✅
                </p>

                {/* Interactive Pie Chart for Practice */}
                <div className="mt-6">
                  <PieChartVisualizer
                    categories={['Summer', 'Spring', 'Autumn', 'Winter']}
                    frequencies={[15, 9, 6, 6]}
                    title="Favorite Seasons"
                    showAngles={true}
                    displayMode="frequency"
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Line Graphs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Line Graphs for Trends
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>line graph</strong> shows how data changes over time or in sequence. Points are plotted and connected with lines, making it easy to see trends, patterns, and changes.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Features of Line Graphs:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Time or sequence on X-axis:</strong> Shows progression (months, years, time)</li>
                <li><strong>Values on Y-axis:</strong> Shows the quantity being measured</li>
                <li><strong>Points connected by lines:</strong> Shows continuous change</li>
                <li><strong>Trends visible:</strong> Easy to see if values are increasing, decreasing, or staying steady</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Reading a Line Graph
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A line graph shows a shop's daily sales over one week:
            </p>
            <div className="overflow-x-auto mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <table className="w-full border-collapse mb-4">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Day</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Sales ($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">Mon</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">200</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">Tue</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">250</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">Wed</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">280</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">Thu</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">270</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">Fri</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">350</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">Sat</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">400</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">Sun</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">380</td></tr>
                </tbody>
              </table>
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>What trends can we see?</strong></p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Sales generally <strong>increased</strong> from Monday to Saturday</li>
                <li>The biggest jump was from Thursday to Friday (+$80)</li>
                <li>Sales decreased slightly on Sunday</li>
                <li>Weekend sales (Sat, Sun) were highest</li>
              </ul>

              {/* Interactive Line Chart Visualization */}
              <div className="mt-6">
                <LineChartVisualizer
                  xLabels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
                  yValues={[200, 250, 280, 270, 350, 400, 380]}
                  title="Daily Sales ($)"
                  xAxisLabel="Day of Week"
                  yAxisLabel="Sales ($)"
                  showGrid={true}
                  showPoints={true}
                />
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Interpreting Line Graphs
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A line graph shows temperature recorded every 3 hours:
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Time</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Temp (°C)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">6am</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">24</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">9am</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">28</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">12pm</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">32</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">3pm</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">34</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">6pm</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">30</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              (a) What was the highest temperature, and when?<br />
              (b) Describe the overall trend.<br />
              (c) Predict the temperature at 9pm. Explain your reasoning.
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
                  (a) <strong>34°C at 3pm</strong> (hottest part of the day)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (b) Temperature <strong>increased from 6am to 3pm</strong> (getting hotter during the day), then <strong>decreased from 3pm to 6pm</strong> (cooling down in the evening)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  (c) Prediction: Around <strong>26-28°C</strong>. Reasoning: The temperature dropped 4°C from 3pm to 6pm (34° → 30°). Following the cooling trend, it should drop another few degrees by 9pm.
                </p>

                {/* Interactive Line Chart for Temperature */}
                <div className="mt-6">
                  <LineChartVisualizer
                    xLabels={['6am', '9am', '12pm', '3pm', '6pm']}
                    yValues={[24, 28, 32, 34, 30]}
                    title="Temperature Throughout the Day"
                    xAxisLabel="Time"
                    yAxisLabel="Temperature (°C)"
                    showGrid={true}
                    showPoints={true}
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: When to Use Each Type */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            4. Choosing Between Pie Charts and Line Graphs
          </h2>

          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded">
                <h4 className="font-semibold text-pink-800 dark:text-pink-300 mb-2">Use Pie Charts When:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Showing parts of a whole (proportions)</li>
                  <li>Data adds up to 100%</li>
                  <li>Comparing relative sizes</li>
                  <li>You have 3-7 categories (not too many)</li>
                  <li>Example: Budget breakdown, survey results</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Use Line Graphs When:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Showing change over time</li>
                  <li>Data is continuous or sequential</li>
                  <li>Looking for trends or patterns</li>
                  <li>Making predictions based on trends</li>
                  <li>Example: Temperature changes, sales over time</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Choosing the Right Graph
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              For each scenario, decide whether a pie chart or line graph would be more appropriate:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-3">
              <li>Showing how a company's revenue changed each quarter for 2 years</li>
              <li>Displaying how a student's $50 allowance is spent on food, transport, and savings</li>
              <li>Tracking the number of visitors to a website each month for a year</li>
              <li>Showing the market share of 5 smartphone brands</li>
            </ol>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li><strong>Line graph</strong> - Shows change over time (quarters), reveals trends</li>
                  <li><strong>Pie chart</strong> - Shows how the whole ($50) is divided into parts</li>
                  <li><strong>Line graph</strong> - Tracks changes month by month, shows growth/decline patterns</li>
                  <li><strong>Pie chart</strong> - Shows proportions of total market share (parts of 100%)</li>
                </ol>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-pink-50 dark:bg-pink-900/30 border-l-4 border-pink-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Pie charts</strong> show proportions of a whole using sectors in a circle (360° total)</li>
            <li>Calculate sector angles: <strong>(Frequency ÷ Total) × 360°</strong> - this is critical!</li>
            <li>All sector angles must add up to exactly 360° (check your work!)</li>
            <li><strong>Line graphs</strong> show trends and changes over time by connecting data points</li>
            <li>Use pie charts for <strong>parts of a whole</strong>, line graphs for <strong>changes over time</strong></li>
            <li>Both must have clear titles, labels, and appropriate scales</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default PieChartsLineGraphs;
