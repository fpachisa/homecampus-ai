import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function FindingAverage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Finding the Average</h1>
        <p className="text-lg">Learn how to find the average of a set of numbers</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Big Idea - Evening Out */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">1. The Big Idea: Evening Out</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What is Average?</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              <strong>Average</strong> is what each value would be if we <strong>evened out</strong> all the values to be equal.
            </p>
          </div>

          {/* Example with cube towers */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Four Towers of Cubes</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Four towers are built using different numbers of cubes: <strong>3, 7, 6, and 4</strong> cubes.
            </p>

            <MathToolRenderer
              toolName="averageTowerVisualizer"
              parameters={{
                values: [3, 7, 6, 4],
                labels: ["Tower 1", "Tower 2", "Tower 3", "Tower 4"],
                title: "Can We Even Out These Towers?"
              }}
            />

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Think:</strong> If we move some cubes so that all four towers have the same height,
                how many cubes will each tower have?
              </p>
            </div>
          </div>

          {/* Show the evened out result */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">After Evening Out</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              When we redistribute the cubes equally, each tower has <strong>5 cubes</strong>!
            </p>

            <MathToolRenderer
              toolName="averageTowerVisualizer"
              parameters={{
                values: [3, 7, 6, 4],
                showEvenedOut: true,
                showAverage: true,
                title: "Evened Out - Each Tower Has 5 Cubes",
                caption: "The average number of cubes is 5. This is the 'fair share' each tower gets."
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-semibold">
                The <span className="text-green-600 dark:text-green-400">average</span> number of cubes in each tower is <strong>5</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The Formula */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-cyan-700 dark:text-cyan-300">2. The Formula</h2>

          <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border-l-4 border-cyan-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Average Formula</h3>
            <p className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 my-4">
              Average = Total Value ÷ Number of Data
            </p>
          </div>

          {/* Worked Example: Quiz Scores */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Connie's Quiz Scores</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Connie took part in 4 quizzes. Her scores were: <strong>24, 30, 12, and 20</strong>.
            </p>

            <MathToolRenderer
              toolName="averageTowerVisualizer"
              parameters={{
                values: [24, 30, 12, 20],
                labels: ["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4"],
                title: "Connie's Quiz Scores"
              }}
            />

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 1:</strong> Find the total score
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  Total = 24 + 30 + 12 + 20 = <strong>86</strong>
                </p>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 2:</strong> Count the number of quizzes
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  Number of quizzes = <strong>4</strong>
                </p>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 3:</strong> Calculate the average
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  Average = 86 ÷ 4 = <strong>21.5</strong>
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                Connie's average score was <strong>21.5</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Decimals in Averages */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">3. Averages Can Be Decimals</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Important!</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              The average can be a <strong>decimal</strong>, even when all the original values are whole numbers.
            </p>
          </div>

          {/* Example: Mass of Children */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Mass of 4 Children</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The masses of 4 children are: <strong>38 kg, 40 kg, 37 kg, and 42 kg</strong>.
            </p>

            <MathToolRenderer
              toolName="averageTowerVisualizer"
              parameters={{
                values: [38, 40, 37, 42],
                labels: ["Child 1", "Child 2", "Child 3", "Child 4"],
                title: "Mass of 4 Children (kg)"
              }}
            />

            <div className="mt-4 space-y-2">
              <p className="text-gray-800 dark:text-gray-200">
                Total mass = 38 + 40 + 37 + 42 = <strong>157 kg</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Average mass = 157 ÷ 4 = <strong>39.25 kg</strong>
              </p>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Note:</strong> The average mass is 39.25 kg. This doesn't mean any child actually weighs 39.25 kg!
                It just shows the "typical" or "central" value.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Reading from Bar Graphs */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">4. Reading from Bar Graphs</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-6">
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              Sometimes data is given in a <strong>bar graph</strong>. Read the values from the graph, then calculate the average.
            </p>
          </div>

          {/* Example: Books Read */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Samad's Books</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The graph shows the number of books Samad read from September to December.
              What was the average number of books Samad read per month?
            </p>

            <MathToolRenderer
              toolName="barChart"
              parameters={{
                categories: ["Sep", "Oct", "Nov", "Dec"],
                values: [6, 11, 10, 13],
                title: "Number of Books Read",
                xLabel: "Month",
                yLabel: "Number of Books",
                showValues: true
              }}
            />

            <div className="mt-4 space-y-2">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Step 1:</strong> Read values from graph: 6, 11, 10, 13
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Step 2:</strong> Total = 6 + 11 + 10 + 13 = <strong>40 books</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Step 3:</strong> Average = 40 ÷ 4 = <strong>10 books per month</strong>
              </p>
            </div>

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                Samad read an average of <strong>10 books</strong> a month from September to December.
              </p>
            </div>
          </div>

          {/* Another bar graph example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Peter's Savings</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The bar graph shows the amount of money Peter saves each month from January to May.
              What is his average savings per month?
            </p>

            <MathToolRenderer
              toolName="barChart"
              parameters={{
                categories: ["Jan", "Feb", "Mar", "Apr", "May"],
                values: [60, 90, 80, 75, 50],
                title: "Peter's Savings",
                xLabel: "Month",
                yLabel: "Amount ($)",
                showValues: true
              }}
            />

            <div className="mt-4 space-y-2">
              <p className="text-gray-800 dark:text-gray-200">
                Total savings = $60 + $90 + $80 + $75 + $50 = <strong>$355</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Number of months = <strong>5</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Average = $355 ÷ 5 = <strong>$71</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: More Practice Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">5. More Examples</h2>

          {/* Example: Three towers */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Three Towers</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Three towers have <strong>8, 7, and 6</strong> cubes. What is the average?
            </p>

            <MathToolRenderer
              toolName="averageTowerVisualizer"
              parameters={{
                values: [8, 7, 6],
                title: "Three Towers"
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                Average = 21 ÷ 3 = <strong>7 cubes</strong>
              </p>
            </div>
          </div>

          {/* Example: Watermelons */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Watermelons in Crates</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The total number of watermelons in 3 crates is 69.
              What is the average number of watermelons in each crate?
            </p>

            <div className="space-y-2 mt-4">
              <p className="text-gray-800 dark:text-gray-200">
                Total = <strong>69</strong> watermelons
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Number of crates = <strong>3</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Average = 69 ÷ 3 = <strong>23 watermelons per crate</strong>
              </p>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Remember:</strong> Each crate doesn't need to have exactly 23 watermelons!
                One might have 20, another 25, and another 24. The average is just 23.
              </p>
            </div>
          </div>
        </section>

        {/* Key Points Summary */}
        <section>
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
            <h2 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">Key Points to Remember</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li className="flex items-start gap-2">
                <span className="text-green-500">&#10003;</span>
                <span>Average = Total Value ÷ Number of Data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">&#10003;</span>
                <span>Average is like "evening out" all values to be equal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">&#10003;</span>
                <span>Average can be a decimal (like 21.5 or 39.25)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">&#10003;</span>
                <span>Individual values don't need to equal the average</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">&#10003;</span>
                <span>Always show your working: Total = ..., Average = Total ÷ Number = ...</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
