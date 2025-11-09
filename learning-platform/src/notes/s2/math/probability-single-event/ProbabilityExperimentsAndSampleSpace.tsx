import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function ProbabilityExperimentsAndSampleSpace() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Probability Experiments and Sample Space</h1>
        <p className="mt-2 text-purple-100">Understanding the foundation of probability through experiments and possible outcomes</p>
      </div>

      <div className="p-6 space-y-8">

        {/* Section 1: Understanding Probability Experiments */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What is a Probability Experiment?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Every day, we encounter situations where we cannot predict the outcome with certainty. Will it rain today? Which football team will win the match? What number will appear when you roll a die?
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong className="text-purple-600 dark:text-purple-400">probability experiment</strong> is a process or operation whose outcome cannot be predicted with certainty. In other words, the outcome depends on <strong>chance</strong>.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                Real-World Examples of Probability Experiments
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Tossing a coin:</strong> Will it land on heads or tails?</li>
                <li><strong>Rolling a die:</strong> What number from 1 to 6 will appear?</li>
                <li><strong>Drawing a card from a deck:</strong> Which card will you pick?</li>
                <li><strong>Spinning a spinner:</strong> Which color will the pointer land on?</li>
                <li><strong>Drawing a ball from a bag:</strong> What color ball will you get?</li>
              </ul>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Identifying Probability Experiments
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Which of the following are probability experiments?
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-3">
              <li>Calculating 5 + 7</li>
              <li>Flipping a coin to decide who goes first in a game</li>
              <li>Checking the temperature in Singapore at noon</li>
              <li>Drawing a card from a shuffled deck</li>
            </ol>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              <strong>Answer:</strong> Items 2 and 4 are probability experiments because their outcomes depend on chance. Items 1 and 3 have predictable outcomes (5 + 7 always equals 12, but note that while temperature checking involves measurement, the specific temperature value is unpredictable beforehand, so it could be considered a probability experiment in a broader sense).
            </p>
          </div>

          {/* Practice Problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Identify the Experiment
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A bag contains 5 red marbles and 3 blue marbles. You draw one marble without looking. Is this a probability experiment? Why or why not?
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Yes, this is a probability experiment.</strong> The outcome (which color marble you draw) cannot be predicted with certainty before you draw. Each draw depends on chance. You might get red, or you might get blue – the outcome is uncertain until the experiment is performed.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Listing Sample Spaces */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Sample Space: All Possible Outcomes
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The collection of all the <strong>possible outcomes</strong> of a probability experiment is called the <strong className="text-purple-600 dark:text-purple-400">sample space</strong>.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use a pair of braces <strong>{ }</strong> to enclose the possible outcomes when listing the sample space. This is called <strong>set notation</strong>.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                Key Concept: Sample Space Notation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                When writing a sample space:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Use braces { } to enclose all outcomes</li>
                <li>Separate outcomes with commas</li>
                <li>Count the total number of possible outcomes</li>
              </ul>
            </div>
          </div>

          {/* Visual Examples with Math Tools */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg mb-6 border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4 text-xl">
              📊 Examples of Sample Spaces
            </h3>

            {/* Example 1: Tossing a coin */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Example 1: Tossing a Coin</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                When you toss a coin, there are two possible outcomes: a 'head' or a 'tail'.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-200 dark:border-blue-700 mb-3">
                <MathToolRenderer
                  toolName="setVisualizer"
                  parameters={{
                    setName: 'Coin Toss',
                    elements: ['H', 'T'],
                    displayMode: 'box',
                    showCardinality: true,
                    showBraces: true
                  }}
                  caption="Sample space for tossing a coin"
                />
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Sample space = {'{H, T}'}</strong><br />
                Total number of possible outcomes = <strong>2</strong>
              </p>
            </div>

            {/* Example 2: Rolling a die */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Example 2: Rolling a Die</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A standard six-sided die has the numbers 1, 2, 3, 4, 5, and 6 on its faces.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-200 dark:border-blue-700 mb-3">
                <MathToolRenderer
                  toolName="setVisualizer"
                  parameters={{
                    setName: 'Rolling a Die',
                    elements: ['1', '2', '3', '4', '5', '6'],
                    displayMode: 'box',
                    showCardinality: true,
                    showBraces: true
                  }}
                  caption="Sample space for rolling a standard die"
                />
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Sample space = {'{1, 2, 3, 4, 5, 6}'}</strong><br />
                Total number of possible outcomes = <strong>6</strong>
              </p>
            </div>

            {/* Example 3: Spinner */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Example 3: Spinning a Color Wheel</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A spinner is divided into five equal sectors of different colors: Red, Orange, Blue, Green, and Purple.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-200 dark:border-blue-700 mb-3">
                <MathToolRenderer
                  toolName="setVisualizer"
                  parameters={{
                    setName: 'Color Spinner',
                    elements: ['Red', 'Orange', 'Blue', 'Green', 'Purple'],
                    displayMode: 'box',
                    showCardinality: true,
                    showBraces: true
                  }}
                  caption="Sample space for the color spinner"
                />
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Sample space = {'{Red, Orange, Blue, Green, Purple}'}</strong><br />
                Total number of possible outcomes = <strong>5</strong>
              </p>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Writing Sample Spaces
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Ten identical cards numbered 11, 12, 13, ..., 20 are placed in a box. One card is drawn at random from the box. Write down the sample space and state the total number of possible outcomes.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Solution:</strong><br />
              Sample space = {'{11, 12, 13, 14, 15, 16, 17, 18, 19, 20}'}<br />
              Total number of possible outcomes = <strong>10</strong>
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-300 dark:border-blue-700 mt-4">
              <MathToolRenderer
                toolName="setVisualizer"
                parameters={{
                  setName: 'S',
                  elements: ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                  displayMode: 'box',
                  showCardinality: true,
                  showBraces: true
                }}
                caption="Sample space for cards numbered 11 to 20"
              />
            </div>
          </div>

          {/* Practice Problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: List the Sample Space
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A bag contains cards with the vowels A, E, I, O, U. One card is drawn at random. Write down the sample space and state the total number of possible outcomes.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Sample space = {'{A, E, I, O, U}'}</strong><br />
                  Total number of possible outcomes = <strong>5</strong>
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <MathToolRenderer
                    toolName="setVisualizer"
                    parameters={{
                      setName: 'S',
                      elements: ['A', 'E', 'I', 'O', 'U'],
                      displayMode: 'box',
                      showCardinality: true,
                      showBraces: true
                    }}
                    caption="Sample space for vowel cards"
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Complex Sample Spaces */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Complex Sample Spaces
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sometimes, sample spaces can be more complex. We need special notation to handle:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Identical items that need to be distinguished</strong> (using subscripts)</li>
              <li><strong>Large ranges of numbers</strong> (using ellipsis ...)</li>
              <li><strong>Two-digit or multi-digit numbers</strong></li>
            </ul>
          </div>

          {/* Subscript Notation */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
              Using Subscripts for Identical Items
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              When items are identical (like balls of the same color), we use <strong>subscripts</strong> to distinguish them.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              For example: B₁, B₂ for two black balls, and W₁, W₂, W₃ for three white balls.
            </p>
          </div>

          {/* Worked Example with Subscripts */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Drawing Balls from a Bag
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A bag contains two identical black balls and three identical white balls. One ball is drawn at random from the bag. Write down the sample space and state the total number of possible outcomes.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Solution:</strong><br />
              Let B₁ and B₂ represent the two black balls.<br />
              Let W₁, W₂ and W₃ represent the three white balls.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-300 dark:border-blue-700 mb-3">
              <MathToolRenderer
                toolName="setVisualizer"
                parameters={{
                  setName: 'S',
                  elements: ['B₁', 'B₂', 'W₁', 'W₂', 'W₃'],
                  displayMode: 'box',
                  showCardinality: true,
                  showBraces: true
                }}
                caption="Sample space with subscript notation"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Sample space = {'{B₁, B₂, W₁, W₂, W₃}'}</strong><br />
              Total number of possible outcomes = <strong>5</strong>
            </p>
            <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded">
              <p className="text-sm text-purple-800 dark:text-purple-300">
                <strong>💡 Problem-Solving Tip:</strong> We use subscripts B₁ and B₂ to differentiate between the two black balls. Similarly, we use W₁, W₂ and W₃ for the three white balls. This helps us count all distinct outcomes.
              </p>
            </div>
          </div>

          {/* Ellipsis Notation */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
              Using Ellipsis for Large Sample Spaces
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              When the sample space has many outcomes in a clear pattern, we use <strong>ellipsis (...)</strong> to avoid writing them all out.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              For example: {'{10, 11, 12, ..., 99}'} represents all two-digit numbers from 10 to 99.
            </p>
          </div>

          {/* Worked Example with Ellipsis */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Two-Digit Numbers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A two-digit number is chosen at random. Write down the sample space and state the total number of possible outcomes.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Solution:</strong><br />
              Sample space = {'{10, 11, 12, 13, ..., 99}'}<br /><br />
              Total number of possible outcomes<br />
              = number of integers from 1 to 99 − number of integers from 1 to 9<br />
              = 99 − 9<br />
              = <strong>90</strong>
            </p>
            <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded">
              <p className="text-sm text-purple-800 dark:text-purple-300">
                <strong>💡 Problem-Solving Tip:</strong> We use ellipsis '...' when there are too many outcomes to list. Here, we list the first 4 outcomes so the reader can interpret that the final outcome at the end follows the same pattern.
              </p>
            </div>
          </div>

          {/* Practice Problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Complex Sample Space
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Five identical blue marbles and four identical red marbles are placed in a bag. One marble is drawn at random.<br /><br />
              (a) Write down the sample space using subscript notation.<br />
              (b) State the total number of possible outcomes.
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>(a)</strong> Let B₁, B₂, B₃, B₄, B₅ represent the five blue marbles.<br />
                  Let R₁, R₂, R₃, R₄ represent the four red marbles.
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-3">
                  <MathToolRenderer
                    toolName="setVisualizer"
                    parameters={{
                      setName: 'S',
                      elements: ['B₁', 'B₂', 'B₃', 'B₄', 'B₅', 'R₁', 'R₂', 'R₃', 'R₄'],
                      displayMode: 'box',
                      showCardinality: true,
                      showBraces: true
                    }}
                    caption="Sample space for blue and red marbles"
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Sample space = {'{B₁, B₂, B₃, B₄, B₅, R₁, R₂, R₃, R₄}'}</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>(b)</strong> Total number of possible outcomes = <strong>9</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>A <strong>probability experiment</strong> is a process whose outcome cannot be predicted with certainty</li>
            <li>The <strong>sample space</strong> is the collection of all possible outcomes</li>
            <li>We use braces { } to enclose the sample space in <strong>set notation</strong></li>
            <li>Use <strong>subscripts</strong> (B₁, B₂, W₁, W₂) to distinguish identical items</li>
            <li>Use <strong>ellipsis (...)</strong> for large sample spaces with clear patterns</li>
            <li>Always count the <strong>total number of possible outcomes</strong></li>
          </ul>
        </div>

      </div>
    </div>
  );
}
