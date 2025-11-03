import { useState } from 'react';
import MathText from '../../../../components/MathText';

const Gradient = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-orange-600 dark:from-red-600 dark:to-orange-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Gradient of Linear Graphs</h1>
        <p className="mt-2 text-red-100">Understanding steepness, calculating gradient, and interpreting rate of change</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: Understanding Gradient */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Understanding Gradient
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>gradient</strong> (also called slope) of a line measures how steep it is.
              A steeper line has a larger gradient.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Gradient Formula:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <MathText>{'Gradient (m) = $\\frac{\\text{vertical change}}{\\text{horizontal change}}$ = $\\frac{\\text{rise}}{\\text{run}}$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                For two points <MathText>{'$(x_1, y_1)$'}</MathText> and <MathText>{'$(x_2, y_2)$'}</MathText>:
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{'$m = \\frac{y_2 - y_1}{x_2 - x_1}$'}</MathText>
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Understanding Rise and Run:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Rise</strong> = vertical change = change in y-coordinate = <MathText>{'$y_2 - y_1$'}</MathText></li>
                <li><strong>Run</strong> = horizontal change = change in x-coordinate = <MathText>{'$x_2 - x_1$'}</MathText></li>
                <li>Think of it as: "How much do I go up (or down) for every step I take to the right?"</li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Positive vs. Negative Gradients:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Positive gradient (m &gt; 0)</strong>: Line slopes upward from left to right ↗</li>
                <li><strong>Negative gradient (m &lt: 0)</strong>: Line slopes downward from left to right ↘</li>
                <li>The <strong>bigger</strong> the gradient, the <strong>steeper</strong> the line</li>
              </ul>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Calculating Gradient
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Find the gradient of the line passing through the points A(1, 2) and B(4, 8).
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                Using the gradient formula: <MathText>{'$m = \\frac{y_2 - y_1}{x_2 - x_1}$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Point A: <MathText>{'$(x_1, y_1) = (1, 2)$'}</MathText><br/>
                Point B: <MathText>{'$(x_2, y_2) = (4, 8)$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <MathText>{'$m = \\frac{8 - 2}{4 - 1} = \\frac{6}{3} = 2$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Gradient = 2</strong> (positive, so line slopes upward)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm italic">
                This means: for every 1 unit we move right, we go up 2 units.
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Finding Gradient
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Calculate the gradient of the line through each pair of points:<br/>
              (a) (2, 5) and (6, 13)<br/>
              (b) (−1, 7) and (3, −1)<br/>
              (c) (0, 4) and (5, 4)
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
                  (a) <MathText>{'$m = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$'}</MathText> (positive gradient)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (b) <MathText>{'$m = \\frac{-1 - 7}{3 - (-1)} = \\frac{-8}{4} = -2$'}</MathText> (negative gradient)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (c) <MathText>{'$m = \\frac{4 - 4}{5 - 0} = \\frac{0}{5} = 0$'}</MathText> (zero gradient - horizontal line!)
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Special Cases */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Special Cases: Horizontal and Vertical Lines
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Two special types of lines have unique gradients that are important to understand.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Horizontal Lines:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Equation form: <MathText>y = c</MathText> (where c is a constant)</li>
                <li>Example: <MathText>y = 3</MathText>, <MathText>y = -5</MathText></li>
                <li><strong>Gradient = 0</strong> (no vertical change, completely flat)</li>
                <li>Rise = 0, so <MathText>{'$m = \\frac{0}{\\text{run}} = 0$'}</MathText></li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <p className="font-semibold text-red-800 dark:text-red-300 mb-2">Vertical Lines:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Equation form: <MathText>x = c</MathText> (where c is a constant)</li>
                <li>Example: <MathText>x = 2</MathText>, <MathText>x = -4</MathText></li>
                <li><strong>Gradient = undefined</strong> (cannot divide by zero!)</li>
                <li>Run = 0, so <MathText>{'$m = \\frac{\\text{rise}}{0}$'}</MathText> which is undefined</li>
                <li>Vertical lines go straight up/down with infinite steepness</li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-4">
              <p className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Quick Memory Aid:</p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>HOY-VUX</strong><br/>
                H = <strong>H</strong>orizontal, O = gradient is <strong>0</strong>, Y = equation uses <strong>Y</strong><br/>
                V = <strong>V</strong>ertical, U = gradient is <strong>U</strong>ndefined, X = equation uses <strong>X</strong>
              </p>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Special Line Gradients
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Find the gradient of each line:<br/>
              (a) <MathText>y = 7</MathText><br/>
              (b) <MathText>x = -3</MathText><br/>
              (c) The line through (2, 5) and (2, 9)
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                (a) <MathText>y = 7</MathText> is a horizontal line → <strong>gradient = 0</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                (b) <MathText>x = -3</MathText> is a vertical line → <strong>gradient = undefined</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                (c) Both points have x = 2, so this is a vertical line<br/>
                We can verify: <MathText>{'$m = \\frac{9 - 5}{2 - 2} = \\frac{4}{0}$'}</MathText> = <strong>undefined</strong>
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Identifying Special Lines
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              (a) Write the equation of a horizontal line passing through (4, −2).<br/>
              (b) Write the equation of a vertical line passing through (−5, 3).<br/>
              (c) What is the gradient of the line <MathText>x = 0</MathText>?
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
                <p className="text-gray-700 dark:text-gray-300">
                  (a) Horizontal line: y-coordinate stays constant<br/>
                  Equation: <strong><MathText>y = -2</MathText></strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (b) Vertical line: x-coordinate stays constant<br/>
                  Equation: <strong><MathText>x = -5</MathText></strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (c) <MathText>x = 0</MathText> is the y-axis itself (a vertical line)<br/>
                  Gradient = <strong>undefined</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Gradient as Rate of Change */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Gradient in Real-World Contexts
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In real-world problems, the gradient represents a <strong>rate of change</strong> - how fast one quantity changes with respect to another.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Common Real-World Gradients:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Speed</strong>: Distance-time graph → gradient = speed (km/h, m/s)</li>
                <li><strong>Cost per item</strong>: Total cost vs. quantity → gradient = price per unit</li>
                <li><strong>Temperature change</strong>: Temperature vs. time → gradient = rate of heating/cooling</li>
                <li><strong>Exchange rate</strong>: Currency conversion → gradient = exchange rate</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Interpreting the Equation <MathText>{'$y = mx + c$'}</MathText>:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>m (gradient)</strong> = rate of change = "how much y changes per unit of x"</li>
                <li><strong>c (y-intercept)</strong> = starting value = "value of y when x = 0"</li>
              </ul>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Speed from Distance-Time Graph
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A car's distance (d km) from its starting point after t hours is given by <MathText>{'$d = 50t + 20$'}</MathText>.<br/>
              (a) What is the gradient?<br/>
              (b) What does this gradient represent?<br/>
              (c) What does the y-intercept represent?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                (a) Comparing with <MathText>{'$y = mx + c$'}</MathText>: <strong>gradient m = 50</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                (b) The gradient represents <strong>speed = 50 km/h</strong><br/>
                (The car travels 50 km every hour)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                (c) The y-intercept c = 20 represents the <strong>starting distance = 20 km</strong><br/>
                (The car was already 20 km from its starting point at time t = 0)
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Cost Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              The cost (C dollars) to print x T-shirts is given by <MathText>{'$C = 8x + 150$'}</MathText>.<br/>
              (a) What is the cost per T-shirt?<br/>
              (b) What does 150 represent?<br/>
              (c) How much would it cost to print 25 T-shirts?
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
                  (a) Gradient m = 8<br/>
                  Cost per T-shirt = <strong>$8</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (b) y-intercept c = 150<br/>
                  This represents the <strong>setup fee or fixed cost = $150</strong> (even if 0 T-shirts are printed)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (c) When x = 25:<br/>
                  <MathText>{'$C = 8(25) + 150 = 200 + 150 = 350$'}</MathText><br/>
                  Cost for 25 T-shirts = <strong>$350</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Applications */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            4. Applications and Problem Solving
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Gradient helps us solve many geometric and real-world problems.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Parallel Lines:</p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Parallel lines have equal gradients.</strong><br/>
                If line 1 has gradient <MathText>{'$m_1$'}</MathText> and line 2 has gradient <MathText>{'$m_2$'}</MathText>, then:<br/>
                Lines are parallel if <MathText>{'$m_1 = m_2$'}</MathText>
              </p>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Parallel Lines
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Line L passes through (1, 3) and (4, 9). Line M passes through (0, 2) and (2, 6). Are these lines parallel?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Gradient of Line L:</strong><br/>
                <MathText>{'$m_L = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Gradient of Line M:</strong><br/>
                <MathText>{'$m_M = \\frac{6 - 2}{2 - 0} = \\frac{4}{2} = 2$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Since <MathText>{'$m_L = m_M = 2$'}</MathText>, the lines <strong>ARE parallel</strong>.
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Challenge Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A rectangle ABCD has vertices A(1, 2), B(5, 4), C(4, 6), and D(0, 4).<br/>
              (a) Find the gradient of side AB.<br/>
              (b) Find the gradient of side DC.<br/>
              (c) Verify that AB and DC are parallel.
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  (a) Gradient of AB: A(1, 2) to B(5, 4)<br/>
                  <MathText>{'$m_{AB} = \\frac{4 - 2}{5 - 1} = \\frac{2}{4} = \\frac{1}{2}$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (b) Gradient of DC: D(0, 4) to C(4, 6)<br/>
                  <MathText>{'$m_{DC} = \\frac{6 - 4}{4 - 0} = \\frac{2}{4} = \\frac{1}{2}$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (c) Since <MathText>{'$m_{AB} = m_{DC} = \\frac{1}{2}$'}</MathText>, sides AB and DC are <strong>parallel</strong> ✓<br/>
                  <span className="text-sm italic">(As they should be, since opposite sides of a rectangle are parallel!)</span>
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
            <li>Gradient measures the steepness of a line: <MathText>{'$m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$'}</MathText></li>
            <li>Positive gradient: line slopes upward (↗); Negative gradient: line slopes downward (↘)</li>
            <li>Horizontal lines have gradient = 0 (equation: <MathText>y = c</MathText>)</li>
            <li>Vertical lines have undefined gradient (equation: <MathText>x = c</MathText>)</li>
            <li>In real life, gradient represents rate of change (speed, cost per item, etc.)</li>
            <li>In <MathText>{'$y = mx + c$'}</MathText>: m is the gradient (rate), c is the y-intercept (starting value)</li>
            <li>Parallel lines have equal gradients</li>
            <li>The bigger the absolute value of gradient, the steeper the line</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gradient;
