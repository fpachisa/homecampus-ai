import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function AdvancedSingleEventProbability() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Advanced Single Event Probability</h1>
        <p className="mt-2 text-indigo-100">Exploring probability when outcomes are not equally likely</p>
      </div>

      <div className="p-6 space-y-8">

        {/* Section 1: Probability with Unequal Outcomes (Sectors) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            When Outcomes Are NOT Equally Likely
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              So far, we've calculated probability when all outcomes are equally likely. But what happens when they're not?
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Consider two different spinners below. Which one has equal-sized sectors, and which one doesn't?
            </p>
          </div>

          {/* Comparing Equal and Unequal Spinners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-2 border-green-500 dark:border-green-600">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3 text-center">
                ✓ Equal Sectors (Equally Likely)
              </h3>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <MathToolRenderer
                  toolName="pieChart"
                  parameters={{
                    categories: ['Red', 'Orange', 'Blue', 'Green', 'Purple'],
                    frequencies: [1, 1, 1, 1, 1],
                    title: 'Spinner A',
                    showAngles: true,
                    showPercentages: true
                  }}
                  caption="All sectors have equal angles (72° each)"
                />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                Since all sectors are equal in size, all five possible outcomes are <strong>equally likely to occur</strong>.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                P(any color) = 1/5 = 20%
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-2 border-orange-500 dark:border-orange-600">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-3 text-center">
                ⚠ Unequal Sectors (NOT Equally Likely)
              </h3>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <MathToolRenderer
                  toolName="pieChart"
                  parameters={{
                    categories: ['Green', 'Red', 'Blue', 'Pink'],
                    frequencies: [180, 90, 45, 45],
                    title: 'Spinner B',
                    showAngles: true,
                    showPercentages: true
                  }}
                  caption="Sectors have different angles: 180°, 90°, 45°, 45°"
                />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                The sectors are of <strong>different sizes</strong>, so the four possible outcomes are <strong>NOT equally likely to occur</strong>.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                P(Green) = 50% ≠ P(Red) = 25% ≠ P(Blue) = 12.5%
              </p>
            </div>
          </div>

          {/* Key Insight */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
              🔑 Key Insight: Probability Depends on Area
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              When outcomes are NOT equally likely (like in Spinner B), we cannot simply count outcomes. Instead, we need to take into account the <strong>area</strong> or <strong>measure</strong> of each outcome.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              In this case, the measure of all the possible outcomes can be given by the <strong>area of the circle</strong>, and the measure of the outcome 'Green' can be given by the <strong>area of the green sector</strong>.
            </p>
          </div>

          {/* General Formula for Unequal Outcomes */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg mb-6 border-2 border-yellow-400 dark:border-yellow-600">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3 text-xl flex items-center">
              <span className="text-3xl mr-3">⚡</span>
              General Probability Formula
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To compute the probability of an event E when outcomes are not equally likely, we have:
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-yellow-500 dark:border-yellow-600 text-center">
              <p className="text-xl text-gray-800 dark:text-gray-200 font-semibold mb-2">
                P(E) = <span className="text-blue-600 dark:text-blue-400">measure of favorable outcomes for event E</span> ÷ <span className="text-purple-600 dark:text-purple-400">measure of all possible outcomes</span>
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-4 text-sm">
              <strong>For spinners and circles:</strong> The "measure" is typically the area or the angle of the sector.
            </p>
          </div>

          {/* Calculating with Sectors */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg mb-6 border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-4 text-xl">
              📐 Two Ways to Calculate Probability with Sectors
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-indigo-300 dark:border-indigo-700">
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Method 1: Using Areas</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  P(sector) = (area of sector) ÷ (area of circle)
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Useful when you know the actual area measurements
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-indigo-300 dark:border-indigo-700">
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Method 2: Using Angles</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  P(sector) = (angle of sector) ÷ 360°
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Simpler! Easier to measure or calculate angles
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded">
              <p className="text-sm text-indigo-800 dark:text-indigo-300">
                <strong>💡 Why Both Work:</strong> The area of a sector is proportional to its angle. Since the angle of a full circle is 360°, we can use angles instead of calculating actual areas!
              </p>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Probability with Unequal Sectors
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A circle is divided into sectors of different colours. A point is selected at random in the circle. Find the probability that the point lies in the:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              (i) red sector<br />
              (ii) blue sector<br />
              (iii) black sector
            </p>

            {/* Spinner Visual */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-300 dark:border-blue-700 mb-4">
              <MathToolRenderer
                toolName="pieChart"
                parameters={{
                  categories: ['Green', 'Red', 'Blue', 'Pink'],
                  frequencies: [180, 90, 45, 45],
                  title: 'Circle with Unequal Sectors',
                  showAngles: true,
                  showPercentages: false,
                  showCalculations: true
                }}
                caption="Green = 180°, Red = 90°, Blue = 45°, Pink = 45°"
              />
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Solution:</strong>
            </p>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(i) P(point selected lies in the red sector)</strong>
                </p>
                <div className="ml-4 space-y-1 text-gray-700 dark:text-gray-300">
                  <p>= (area of red sector) ÷ (area of circle)</p>
                  <p>= (angle of red sector) ÷ (angle of circle)</p>
                  <p>= 90° ÷ 360°</p>
                  <p>= <strong>1/4</strong></p>
                </div>
                <div className="mt-3">
                  <MathToolRenderer
                    toolName="fractionBar"
                    parameters={{
                      fraction1: "1/4"
                    }}
                    caption="Probability = 1/4 or 25%"
                  />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(ii) P(point selected lies in the blue sector)</strong>
                </p>
                <div className="ml-4 space-y-1 text-gray-700 dark:text-gray-300">
                  <p>Angle of the blue sector = 360° − 180° − 90° − 45° = 45°</p>
                  <p className="mt-2">P(blue sector) = (angle of blue sector) ÷ (angle of circle)</p>
                  <p>= 45° ÷ 360°</p>
                  <p>= <strong>1/8</strong></p>
                </div>
                <div className="mt-3">
                  <MathToolRenderer
                    toolName="fractionBar"
                    parameters={{
                      fraction1: "1/8"
                    }}
                    caption="Probability = 1/8 or 12.5%"
                  />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(iii) P(point selected lies in the black sector) = 0</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Since there is no black sector, the event is <strong>impossible</strong> and so its probability is 0.
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded border-l-4 border-purple-500">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                💡 Problem-Solving Tip
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>The area of a sector is proportional to its angle.</strong> Therefore:<br />
                (area of sector) ÷ (area of circle) = (angle of sector) ÷ (angle of circle)<br /><br />
                And the angle of the circle is 360°.<br /><br />
                Visually, we can also see that the red sector makes up 1/4 of the circle.
              </p>
            </div>
          </div>

          {/* Practice Problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Spinner Probabilities
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A spinner is divided into 3 sectors with the following angles:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-3">
              <li>Yellow: 120°</li>
              <li>Purple: 150°</li>
              <li>Orange: 90°</li>
            </ul>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-yellow-300 dark:border-yellow-700 mb-3">
              <MathToolRenderer
                toolName="pieChart"
                parameters={{
                  categories: ['Yellow', 'Purple', 'Orange'],
                  frequencies: [120, 150, 90],
                  title: 'Spinner with 3 Colors',
                  showAngles: true,
                  showPercentages: true
                }}
                caption="Yellow = 120°, Purple = 150°, Orange = 90°"
              />
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              If the spinner is spun once, find the probability that it lands on:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) Yellow<br />
              (b) Purple<br />
              (c) Orange<br />
              (d) Green
            </p>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(a) P(Yellow)</strong> = 120° ÷ 360° = 120/360 = <strong>1/3</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(b) P(Purple)</strong> = 150° ÷ 360° = 150/360 = <strong>5/12</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(c) P(Orange)</strong> = 90° ÷ 360° = 90/360 = <strong>1/4</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(d) P(Green) = 0</strong> (impossible event - there's no green sector)
                    </p>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      <strong>Check:</strong> 1/3 + 5/12 + 1/4 = 4/12 + 5/12 + 3/12 = 12/12 = 1 ✓<br />
                      The probabilities of all possible outcomes add up to 1!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Impossible and Certain Events */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Impossible and Certain Events
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We've encountered some special events in our previous examples. Let's examine them more closely.
            </p>
          </div>

          {/* Key Concepts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-2 border-red-500 dark:border-red-600">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3 text-xl">
                ❌ Impossible Events
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                An event that can <strong>never occur</strong> is called an <strong>impossible event</strong>.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-red-300 dark:border-red-700 mb-3">
                <p className="text-center text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
                  P(impossible event) = 0
                </p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Examples:</strong>
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>Drawing a negative number from cards numbered 1-12</li>
                <li>Rolling a 7 on a standard six-sided die</li>
                <li>Landing on a non-existent sector on a spinner</li>
                <li>Drawing a purple card from a standard deck</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-500 dark:border-green-600">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3 text-xl">
                ✓ Certain Events
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                An event that will <strong>definitely occur</strong> is called a <strong>certain event</strong>.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-300 dark:border-green-700 mb-3">
                <p className="text-center text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  P(certain event) = 1
                </p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Examples:</strong>
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>Drawing a number less than 13 from cards numbered 1-12</li>
                <li>Rolling a number less than 10 on a standard die</li>
                <li>Drawing a card from a standard deck (any card)</li>
                <li>The sun rising tomorrow</li>
              </ul>
            </div>
          </div>

          {/* Probability Range */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg mb-6 border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4 text-xl">
              📊 The Range of Probability
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For any event E, the probability P(E) must satisfy:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-blue-500 dark:border-blue-600 text-center mb-4">
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                0 ≤ P(E) ≤ 1
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-300 dark:border-blue-700">
              <MathToolRenderer
                toolName="numberLine"
                parameters={{
                  min: 0,
                  max: 1,
                  step: 0.1,
                  intervals: [
                    { start: 0, end: 1, startInclusive: true, endInclusive: true, color: '#93c5fd' }
                  ],
                  points: [
                    { value: 0, label: 'Impossible (P = 0)', style: 'closed', color: '#ef4444' },
                    { value: 0.25, label: 'Unlikely', style: 'closed', color: '#fb923c' },
                    { value: 0.5, label: 'Even chance', style: 'closed', color: '#3b82f6' },
                    { value: 0.75, label: 'Likely', style: 'closed', color: '#4ade80' },
                    { value: 1, label: 'Certain (P = 1)', style: 'closed', color: '#22c55e' }
                  ],
                  showTickMarks: true,
                  showTickLabels: true,
                  title: 'Probability Scale: All Events Fall Between 0 and 1'
                }}
                caption="Probability is always between 0 and 1 (inclusive)"
              />
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Classifying Events
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A bag contains 5 red balls and 3 blue balls. Classify each of the following events as impossible, certain, or neither, and state the probability:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              (a) Drawing a red or blue ball<br />
              (b) Drawing a green ball<br />
              (c) Drawing a red ball<br />
              (d) Drawing a ball that is not purple
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Solution:</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Total number of balls = 5 + 3 = 8
            </p>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(a) Drawing a red or blue ball</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  All 8 balls are either red or blue, so this event is <strong className="text-green-600 dark:text-green-400">certain</strong>.<br />
                  P(red or blue) = 8/8 = <strong>1</strong>
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(b) Drawing a green ball</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  There are no green balls in the bag, so this event is <strong className="text-red-600 dark:text-red-400">impossible</strong>.<br />
                  P(green) = 0/8 = <strong>0</strong>
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(c) Drawing a red ball</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  There are 5 red balls out of 8 total, so this event is <strong className="text-blue-600 dark:text-blue-400">neither</strong> impossible nor certain.<br />
                  P(red) = 5/8 = <strong>0.625</strong>
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(d) Drawing a ball that is not purple</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  There are no purple balls, so all balls are "not purple". This event is <strong className="text-green-600 dark:text-green-400">certain</strong>.<br />
                  P(not purple) = 8/8 = <strong>1</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problems */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Event Classification
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A standard six-sided die is rolled. For each event below, determine if it's impossible, certain, or neither, and find the probability:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) Rolling a number less than 7<br />
              (b) Rolling an 8<br />
              (c) Rolling an even number<br />
              (d) Rolling a number greater than 0
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(a) Rolling a number less than 7:</strong> <span className="text-green-600 dark:text-green-400">Certain</span><br />
                      All numbers on a die (1, 2, 3, 4, 5, 6) are less than 7.<br />
                      P = 6/6 = <strong>1</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(b) Rolling an 8:</strong> <span className="text-red-600 dark:text-red-400">Impossible</span><br />
                      A standard die only has numbers 1-6.<br />
                      P = 0/6 = <strong>0</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(c) Rolling an even number:</strong> <span className="text-blue-600 dark:text-blue-400">Neither</span><br />
                      Even numbers: 2, 4, 6 (3 outcomes)<br />
                      P = 3/6 = <strong>1/2</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(d) Rolling a number greater than 0:</strong> <span className="text-green-600 dark:text-green-400">Certain</span><br />
                      All numbers on a die (1, 2, 3, 4, 5, 6) are greater than 0.<br />
                      P = 6/6 = <strong>1</strong>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Probability Range
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Which of the following could be valid probabilities? Explain why or why not:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) P(A) = 0.75<br />
              (b) P(B) = 1.5<br />
              (c) P(C) = −0.2<br />
              (d) P(D) = 0<br />
              (e) P(E) = 1
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(a) P(A) = 0.75:</strong> <span className="text-green-600 dark:text-green-400">✓ Valid</span><br />
                      0.75 is between 0 and 1, so it's a valid probability.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(b) P(B) = 1.5:</strong> <span className="text-red-600 dark:text-red-400">✗ Invalid</span><br />
                      1.5 is greater than 1. Probabilities cannot exceed 1.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(c) P(C) = −0.2:</strong> <span className="text-red-600 dark:text-red-400">✗ Invalid</span><br />
                      −0.2 is negative. Probabilities cannot be negative.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(d) P(D) = 0:</strong> <span className="text-green-600 dark:text-green-400">✓ Valid</span><br />
                      0 represents an impossible event. This is valid.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(e) P(E) = 1:</strong> <span className="text-green-600 dark:text-green-400">✓ Valid</span><br />
                      1 represents a certain event. This is valid.
                    </p>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      <strong>Remember:</strong> All probabilities must satisfy 0 ≤ P(E) ≤ 1
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>When outcomes are <strong>NOT equally likely</strong>, use the <strong>general probability formula</strong>: P(E) = (measure of favorable outcomes) ÷ (measure of all possible outcomes)</li>
            <li>For <strong>circular sectors</strong>: P(sector) = (angle of sector) ÷ 360° = (area of sector) ÷ (area of circle)</li>
            <li><strong>Impossible events</strong> have probability 0 (will never occur)</li>
            <li><strong>Certain events</strong> have probability 1 (will definitely occur)</li>
            <li>For any event E: <strong>0 ≤ P(E) ≤ 1</strong></li>
            <li>Probabilities can be expressed as fractions, decimals, or percentages</li>
            <li>The sum of probabilities of all possible outcomes always equals 1</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
