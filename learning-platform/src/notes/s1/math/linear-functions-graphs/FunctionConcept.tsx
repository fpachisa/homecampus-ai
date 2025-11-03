import { useState } from 'react';
import MathText from '../../../../components/MathText';

const FunctionConcept = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Concept of a Function</h1>
        <p className="mt-2 text-purple-100">Understanding what functions are and how they represent relationships between quantities</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: Understanding Functions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Understanding Functions
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>function</strong> is like a machine that takes an input, applies a rule, and produces an output.
              For every input, there is <strong>exactly one</strong> output.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">The Function Machine:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Think of a function as a machine with three parts:
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>1. Input (x)</strong> → The number you put into the machine</p>
                <p><strong>2. Rule</strong> → What the machine does to the input (e.g., "add 3", "multiply by 2")</p>
                <p><strong>3. Output (y)</strong> → The result that comes out</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                Example: If the rule is "add 3" and you input 5, the output is 8.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Key Property of Functions:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Each input has exactly ONE output.</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                ✓ This IS a function: Input 3 always gives output 7<br/>
                ✗ This is NOT a function: Input 3 sometimes gives 7, sometimes gives 9
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Function Terminology:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Independent variable (x)</strong>: The input value (what you control)</li>
                <li><strong>Dependent variable (y)</strong>: The output value (depends on the input)</li>
                <li><strong>Corresponding values</strong>: For each x-value, the y-value it maps to</li>
              </ul>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Function Machine
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A function machine has the rule "multiply by 4, then subtract 1". Find the output when the input is:
              <br/>(a) 5 &nbsp;&nbsp; (b) 10 &nbsp;&nbsp; (c) 0
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Rule: "multiply by 4, then subtract 1"
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                (a) Input = 5: (5 × 4) − 1 = 20 − 1 = <strong>19</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                (b) Input = 10: (10 × 4) − 1 = 40 − 1 = <strong>39</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                (c) Input = 0: (0 × 4) − 1 = 0 − 1 = <strong>−1</strong>
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Identifying Functions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Which of the following represents a function?<br/>
              (a) "The number of wheels on bicycles" (input: number of bicycles, output: total wheels)<br/>
              (b) "Your age" (input: person, output: could be different depending on when asked)<br/>
              (c) "Square a number" (input: a number, output: its square)
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
                  (a) <strong>YES, this is a function.</strong> Each number of bicycles gives exactly one total number of wheels (number of bicycles × 2).
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (b) <strong>NO, not a function of time.</strong> The same person has different ages at different times.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  (c) <strong>YES, this is a function.</strong> Each number has exactly one square (e.g., 5 always gives 25).
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Representations of Functions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Representations of Functions
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Functions can be represented in <strong>four different ways</strong>. Each representation shows the same relationship in a different format.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Four Representations:</p>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold">1. Statement (Words):</p>
                  <p className="ml-4 italic">"The output is 3 more than the input"</p>
                </div>
                <div>
                  <p className="font-semibold">2. Table of Values:</p>
                  <div className="ml-4 mt-1">
                    <table className="border-collapse border border-gray-300 dark:border-gray-600">
                      <thead>
                        <tr>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-1">x</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-1">1</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-1">2</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-1">3</th>
                        </tr>
                        <tr>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-1">y</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-1">4</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-1">5</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-1">6</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">3. Graph:</p>
                  <p className="ml-4 italic">Points plotted on a coordinate plane showing the relationship</p>
                </div>
                <div>
                  <p className="font-semibold">4. Equation (Algebraic):</p>
                  <p className="ml-4"><MathText>y = x + 3</MathText></p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                All four representations show the same function - just in different ways!
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-4">
              <p className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Ordered Pairs:</p>
              <p className="text-gray-700 dark:text-gray-300">
                We can also write functions as sets of <strong>ordered pairs (x, y)</strong>.<br/>
                Example: {`{(1, 4), (2, 5), (3, 6)}`} represents the function above.
              </p>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Converting Between Representations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A function has the rule "double the input, then add 1".<br/>
              (a) Write this as an equation<br/>
              (b) Create a table for x = 0, 1, 2, 3<br/>
              (c) Write the first three ordered pairs
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                (a) "Double the input" means multiply x by 2, "then add 1" means +1<br/>
                Equation: <MathText>y = 2x + 1</MathText>
              </p>
              <div className="mt-3">
                <p className="text-gray-700 dark:text-gray-300 mb-1">(b) Table:</p>
                <table className="border-collapse border border-gray-300 dark:border-gray-600 ml-4">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">x</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">0</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">1</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">2</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">3</th>
                    </tr>
                    <tr>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">y</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">1</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">3</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">5</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">7</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                (c) First three ordered pairs: <strong>(0, 1), (1, 3), (2, 5)</strong>
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: From Table to Equation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Look at this table and find the equation that represents the function:
            </p>
            <table className="border-collapse border border-gray-300 dark:border-gray-600 ml-4 mb-3">
              <thead>
                <tr>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">x</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">2</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">4</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">6</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">8</th>
                </tr>
                <tr>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">y</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">10</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">20</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">30</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-700 dark:text-gray-300">40</th>
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
                <p className="text-gray-700 dark:text-gray-300">
                  Look for a pattern: What operation turns x into y?
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  When x = 2, y = 10 (2 × 5 = 10)<br/>
                  When x = 4, y = 20 (4 × 5 = 20)<br/>
                  When x = 6, y = 30 (6 × 5 = 30)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Pattern: y is always 5 times x
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Answer: <MathText>y = 5x</MathText></strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Function Evaluation and Applications */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Function Evaluation and Applications
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Evaluating a function</strong> means finding the output when given an input, or vice versa.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Two Types of Function Problems:</p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>1. Given x, find y</strong> (Forward):</p>
                <p className="ml-4">Substitute the x-value into the equation and calculate y</p>
                <p className="ml-4 italic">Example: If <MathText>y = 2x + 1</MathText> and x = 3, find y</p>
                <p className="ml-8"><MathText>y = 2(3) + 1 = 7</MathText></p>

                <p className="mt-3"><strong>2. Given y, find x</strong> (Backward):</p>
                <p className="ml-4">Substitute the y-value and solve the equation for x</p>
                <p className="ml-4 italic">Example: If <MathText>y = 2x + 1</MathText> and y = 11, find x</p>
                <p className="ml-8"><MathText>{'$11 = 2x + 1$'}</MathText></p>
                <p className="ml-8"><MathText>{'$10 = 2x$'}</MathText></p>
                <p className="ml-8"><MathText>{'$x = 5$'}</MathText></p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Real-World Functions:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Functions appear everywhere in real life:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Temperature conversion (Celsius to Fahrenheit)</li>
                <li>Currency exchange rates</li>
                <li>Speed, distance, and time relationships</li>
                <li>Pricing (cost based on quantity)</li>
              </ul>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Real-World Application
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A lift in a building starts at ground level (floor 0) and goes up. The floor number (f) is related to the lift button number (n) by the equation <MathText>f = n + 1</MathText>.<br/>
              (a) If you press button 5, which floor do you reach?<br/>
              (b) If you want to go to floor 12, which button should you press?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                (a) Given: n = 5 (button pressed), find f (floor reached)<br/>
                <MathText>f = n + 1 = 5 + 1 = 6</MathText><br/>
                <strong>Answer: Floor 6</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                (b) Given: f = 12 (floor wanted), find n (button to press)<br/>
                <MathText>{'$12 = n + 1$'}</MathText><br/>
                <MathText>{'$n = 12 - 1 = 11$'}</MathText><br/>
                <strong>Answer: Button 11</strong>
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Function Evaluation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              The temperature in a freezer (T°C) after h hours is given by <MathText>T = 20 - 5h</MathText>.<br/>
              (a) What is the starting temperature (when h = 0)?<br/>
              (b) What is the temperature after 3 hours?<br/>
              (c) After how many hours does the temperature reach −10°C?
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
                  (a) When h = 0:<br/>
                  <MathText>T = 20 - 5(0) = 20 - 0 = 20</MathText><br/>
                  <strong>Starting temperature: 20°C</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  (b) When h = 3:<br/>
                  <MathText>T = 20 - 5(3) = 20 - 15 = 5</MathText><br/>
                  <strong>After 3 hours: 5°C</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  (c) When T = −10, find h:<br/>
                  <MathText>{'$-10 = 20 - 5h$'}</MathText><br/>
                  <MathText>{'$-10 - 20 = -5h$'}</MathText><br/>
                  <MathText>{'$-30 = -5h$'}</MathText><br/>
                  <MathText>{'$h = 6$'}</MathText><br/>
                  <strong>After 6 hours</strong>
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
            <li>A function is a relationship where each input has exactly one output</li>
            <li>Functions can be represented in four ways: words, tables, graphs, and equations</li>
            <li>The independent variable (x) is the input; the dependent variable (y) is the output</li>
            <li>Ordered pairs (x, y) show the input-output relationship</li>
            <li>To evaluate a function: substitute the given value and calculate the result</li>
            <li>Functions model many real-world relationships</li>
            <li>You can work "forward" (x → y) or "backward" (y → x)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FunctionConcept;
