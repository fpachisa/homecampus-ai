import { useState } from 'react';
import MathText from '../../../../components/MathText';

const LinearGraphs = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Linear Functions and Linear Graphs</h1>
        <p className="mt-2 text-green-100">Understanding linear functions in the form y = mx + c and their straight-line graphs</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: Identifying Linear Functions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Identifying Linear Functions
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>linear function</strong> is a function whose graph is a straight line.
              All linear functions can be written in the form <MathText>{'$y = mx + c$'}</MathText>, where m and c are constants (fixed numbers).
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">The Linear Function Form:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <MathText>{'$y = mx + c$'}</MathText>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>m</strong> is the coefficient of x (the number multiplying x)</li>
                <li><strong>c</strong> is the constant term (the number on its own)</li>
                <li>Both m and c can be positive, negative, or zero</li>
                <li>The graph is always a straight line</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Examples of Linear Functions:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><MathText>{'$y = 2x + 3$'}</MathText> — where m = 2, c = 3</li>
                <li><MathText>{'$y = -x + 5$'}</MathText> — where m = −1, c = 5</li>
                <li><MathText>{'$y = 3x$'}</MathText> — where m = 3, c = 0</li>
                <li><MathText>{'$y = 4$'}</MathText> — where m = 0, c = 4 (horizontal line)</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <p className="font-semibold text-red-800 dark:text-red-300 mb-2">NOT Linear Functions:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                These are NOT linear because they don't fit <MathText>{'$y = mx + c$'}</MathText>:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><MathText>{'$y = x^2 + 3$'}</MathText> — has <MathText>{'$x^2$'}</MathText> (quadratic)</li>
                <li><MathText>{'$y = \\frac{1}{x}$'}</MathText> — has x in denominator</li>
                <li><MathText>{'$y = 2^x$'}</MathText> — has x as exponent (exponential)</li>
              </ul>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Identifying Linear Functions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Which of these are linear functions? For the linear ones, identify m and c.<br/>
              (a) <MathText>{'$y = 5x - 2$'}</MathText> &nbsp;&nbsp; (b) <MathText>{'$y = x^2$'}</MathText> &nbsp;&nbsp; (c) <MathText>{'$y = 7$'}</MathText> &nbsp;&nbsp; (d) <MathText>{'$y = -3x$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                (a) <MathText>{'$y = 5x - 2$'}</MathText> — <strong>LINEAR</strong>, m = 5, c = −2
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                (b) <MathText>{'$y = x^2$'}</MathText> — <strong>NOT LINEAR</strong> (has <MathText>{'$x^2$'}</MathText>)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                (c) <MathText>{'$y = 7$'}</MathText> — <strong>LINEAR</strong>, can write as <MathText>{'$y = 0x + 7$'}</MathText>, so m = 0, c = 7
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                (d) <MathText>{'$y = -3x$'}</MathText> — <strong>LINEAR</strong>, can write as <MathText>{'$y = -3x + 0$'}</MathText>, so m = −3, c = 0
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Linear or Not?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Determine if each function is linear. If yes, state the values of m and c.<br/>
              (a) <MathText>{'$y = 10 - 2x$'}</MathText><br/>
              (b) <MathText>{'$y = \\frac{x}{3} + 4$'}</MathText><br/>
              (c) <MathText>{'$y = 3(x + 2)$'}</MathText>
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
                  (a) <MathText>{'$y = 10 - 2x$'}</MathText> = <MathText>{'$y = -2x + 10$'}</MathText><br/>
                  <strong>LINEAR</strong>, m = −2, c = 10
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (b) <MathText>{'$y = \\frac{x}{3} + 4$'}</MathText> = <MathText>{'$y = \\frac{1}{3}x + 4$'}</MathText><br/>
                  <strong>LINEAR</strong>, m = 1/3, c = 4
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (c) <MathText>{'$y = 3(x + 2) = 3x + 6$'}</MathText><br/>
                  <strong>LINEAR</strong>, m = 3, c = 6
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Graphing Linear Functions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Graphing Linear Functions
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To draw the graph of a linear function, we follow these steps:
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Steps to Graph <MathText>{'$y = mx + c$'}</MathText>:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Create a table of values</strong>: Choose several x-values and calculate the corresponding y-values</li>
                <li><strong>Plot the points</strong>: Mark each (x, y) pair on the coordinate plane</li>
                <li><strong>Draw a straight line</strong>: Connect the points with a ruler (it should be perfectly straight)</li>
                <li><strong>Label the line</strong>: Write the equation next to the line</li>
              </ol>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Pro Tip:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Since a line is determined by just <strong>two points</strong>, you only need two points to draw it.
                However, it's good practice to plot a <strong>third point</strong> to check your work!
              </p>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Graphing a Linear Function
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Draw the graph of <MathText>{'$y = 2x + 1$'}</MathText> for values of x from −2 to 3.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1: Create a table of values</strong>
              </p>
              <table className="border-collapse border border-gray-300 dark:border-gray-600 ml-4 mb-3">
                <thead>
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">x</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">−2</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">−1</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">0</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">1</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">2</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">3</th>
                  </tr>
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">y</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">−3</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">−1</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">1</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">3</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">5</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">7</th>
                  </tr>
                </thead>
              </table>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm italic">
                Calculation examples: When x = −2, y = 2(−2) + 1 = −4 + 1 = −3<br/>
                When x = 0, y = 2(0) + 1 = 0 + 1 = 1
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Step 2:</strong> Plot points (−2, −3), (−1, −1), (0, 1), (1, 3), (2, 5), (3, 7)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Step 3:</strong> Draw a straight line through all the points
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Step 4:</strong> Label the line as <MathText>{'$y = 2x + 1$'}</MathText>
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Complete the Table
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Complete the table of values for <MathText>{'$y = -x + 4$'}</MathText>, then describe what points you would plot.
            </p>
            <table className="border-collapse border border-gray-300 dark:border-gray-600 ml-4 mb-3">
              <thead>
                <tr>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">x</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">0</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">1</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">2</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">3</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">4</th>
                </tr>
                <tr>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">y</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">?</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">?</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">?</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">?</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">?</th>
                </tr>
              </thead>
            </table>
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
                  Using <MathText>{'$y = -x + 4$'}</MathText>:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>When x = 0: y = −0 + 4 = <strong>4</strong></li>
                  <li>When x = 1: y = −1 + 4 = <strong>3</strong></li>
                  <li>When x = 2: y = −2 + 4 = <strong>2</strong></li>
                  <li>When x = 3: y = −3 + 4 = <strong>1</strong></li>
                  <li>When x = 4: y = −4 + 4 = <strong>0</strong></li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Points to plot:</strong> (0, 4), (1, 3), (2, 2), (3, 1), (4, 0)
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Interpreting Linear Graphs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Interpreting Linear Graphs
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Once we have a linear graph, we can use it to find information about the function.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Reading from Graphs:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Finding y from x</strong>: Draw a vertical line from the x-value to the graph, then horizontal to the y-axis</li>
                <li><strong>Finding x from y</strong>: Draw a horizontal line from the y-value to the graph, then vertical to the x-axis</li>
                <li><strong>Checking if a point is on the line</strong>: Substitute the coordinates into the equation and see if it's true</li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Special Points on the Graph:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>y-intercept</strong>: Where the line crosses the y-axis (when x = 0)</li>
                <li className="ml-6 text-sm">In <MathText>{'$y = mx + c$'}</MathText>, the y-intercept is <strong>c</strong></li>
                <li><strong>x-intercept</strong>: Where the line crosses the x-axis (when y = 0)</li>
                <li className="ml-6 text-sm">To find: set y = 0 and solve for x</li>
              </ul>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Finding Intercepts
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              For the line <MathText>{'$y = 3x - 6$'}</MathText>, find:<br/>
              (a) The y-intercept<br/>
              (b) The x-intercept
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                (a) <strong>y-intercept</strong> (where x = 0):<br/>
                <MathText>{'$y = 3(0) - 6 = 0 - 6 = -6$'}</MathText><br/>
                y-intercept is <strong>−6</strong> or the point <strong>(0, −6)</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                (b) <strong>x-intercept</strong> (where y = 0):<br/>
                <MathText>{'$0 = 3x - 6$'}</MathText><br/>
                <MathText>{'$6 = 3x$'}</MathText><br/>
                <MathText>{'$x = 2$'}</MathText><br/>
                x-intercept is <strong>2</strong> or the point <strong>(2, 0)</strong>
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Real-World Application
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A car is driving at constant speed. The distance traveled (d km) after t hours is given by <MathText>{'$d = 50t + 20$'}</MathText>.<br/>
              (a) What does the number 20 represent?<br/>
              (b) What does the number 50 represent?<br/>
              (c) How far has the car traveled after 3 hours?
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
                <p className="text-gray-700 dark:text-gray-300">
                  (a) The number <strong>20</strong> is the d-intercept (when t = 0).<br/>
                  It represents the <strong>starting distance</strong> - the car had already traveled 20 km before we started timing.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (b) The number <strong>50</strong> is the coefficient of t.<br/>
                  It represents the car's <strong>speed: 50 km/h</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (c) After 3 hours (when t = 3):<br/>
                  <MathText>{'$d = 50(3) + 20 = 150 + 20 = 170$'}</MathText><br/>
                  The car has traveled <strong>170 km</strong>
                </p>
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
            <li>A linear function has the form <MathText>{'$y = mx + c$'}</MathText> where m and c are constants</li>
            <li>The graph of a linear function is always a straight line</li>
            <li>To graph a linear function: make a table, plot points, draw a straight line</li>
            <li>The y-intercept is c (where the line crosses the y-axis when x = 0)</li>
            <li>The x-intercept is found by setting y = 0 and solving for x</li>
            <li>Linear functions can model real-world situations like distance-time and cost relationships</li>
            <li>In context problems, m often represents a rate (speed, cost per item, etc.) and c represents a starting value</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinearGraphs;
