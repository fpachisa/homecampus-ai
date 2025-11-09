import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function BasicProbabilityCalculation() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Basic Probability Calculation</h1>
        <p className="mt-2 text-blue-100">Learning to calculate and measure the likelihood of events</p>
      </div>

      <div className="p-6 space-y-8">

        {/* Section 1: Equally Likely Outcomes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Equally Likely Outcomes and Fair Experiments
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In the previous section, we learned that tossing a coin has two possible outcomes: 'head' and 'tail'. But what is the <strong>chance</strong> of getting a head?
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If the chance of obtaining a 'head' is the same as the chance of obtaining a 'tail', we say that the two outcomes are <strong className="text-blue-600 dark:text-blue-400">equally likely to occur</strong>, and the coin is <strong>fair</strong> or <strong>unbiased</strong>.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Key Definitions
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Fair/Unbiased:</strong> All outcomes are equally likely to occur (e.g., a fair coin, a fair die)</li>
                <li><strong>Favorable outcome:</strong> An outcome that we are interested in or want to happen</li>
                <li><strong>Event:</strong> A specific outcome or set of outcomes we're examining (e.g., "obtaining a head")</li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Since there are two equally likely outcomes when tossing a fair coin, and obtaining a 'head' is 1 out of these 2 outcomes, we say that the <strong className="text-blue-600 dark:text-blue-400">probability</strong> of obtaining a 'head' is one over two, written as 1/2 or 0.5.
            </p>
          </div>

          {/* The Probability Formula */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg mb-6 border-2 border-yellow-400 dark:border-yellow-600">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3 text-xl flex items-center">
              <span className="text-3xl mr-3">⚡</span>
              The Fundamental Probability Formula
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In a probability experiment with <strong>equally likely outcomes</strong>, the probability P(E) of an event E happening is given by:
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-yellow-500 dark:border-yellow-600 text-center">
              <p className="text-xl text-gray-800 dark:text-gray-200 font-semibold mb-2">
                P(E) = <span className="text-blue-600 dark:text-blue-400">number of favorable outcomes for event E</span> ÷ <span className="text-purple-600 dark:text-purple-400">total number of possible outcomes</span>
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-4 text-sm">
              <strong>Remember:</strong> This formula only works when all outcomes are equally likely!
            </p>
          </div>

          {/* Probability Scale */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg mb-6 border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-4 text-xl">
              📏 Understanding the Probability Scale
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Probability is a <strong>measure of chance</strong> that takes values between 0 and 1 (inclusive). We can represent probabilities on a number line:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
              <MathToolRenderer
                toolName="numberLine"
                parameters={{
                  min: 0,
                  max: 1,
                  step: 0.1,
                  points: [
                    { value: 0, label: 'Impossible', style: 'closed', color: '#ef4444' },
                    { value: 0.5, label: 'Even chance (1/2)', style: 'closed', color: '#3b82f6' },
                    { value: 1, label: 'Certain', style: 'closed', color: '#22c55e' }
                  ],
                  showTickMarks: true,
                  showTickLabels: true,
                  title: 'Probability Scale'
                }}
                caption="Probability values range from 0 (impossible) to 1 (certain)"
              />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded border border-red-300 dark:border-red-700">
                <p className="font-semibold text-red-700 dark:text-red-300">P(E) = 0</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Impossible event (will never happen)</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-300 dark:border-blue-700">
                <p className="font-semibold text-blue-700 dark:text-blue-300">P(E) = 0.5</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Even chance (50:50)</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-300 dark:border-green-700">
                <p className="font-semibold text-green-700 dark:text-green-300">P(E) = 1</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Certain event (will definitely happen)</p>
              </div>
            </div>
          </div>

          {/* Practice Problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Fair vs Biased
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A coin is tossed 100 times and lands on 'head' 87 times. Do you think this coin is fair or biased? Explain your reasoning.
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
                  <strong>The coin is likely biased.</strong> For a fair coin, we would expect approximately 50 heads in 100 tosses. Getting 87 heads is significantly more than expected, suggesting the coin is not fair and is more likely to land on 'head' than 'tail'.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Simple Probability Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Calculating Simple Probabilities
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Let's apply the probability formula to various situations. Remember: we need to <strong>identify the favorable outcomes</strong> and count the <strong>total possible outcomes</strong>.
            </p>
          </div>

          {/* Worked Example with Visual */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Drawing Numbered Cards
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A card is drawn at random from a box containing 12 cards numbered 1, 2, 3, 4, ..., 12. Find the probability of drawing:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (i) a '7'<br />
              (ii) a perfect square<br />
              (iii) a negative number<br />
              (iv) a number less than 13
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-300 dark:border-blue-700 mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3 font-semibold">Sample space visualization:</p>
              <MathToolRenderer
                toolName="setVisualizer"
                parameters={{
                  setName: 'S',
                  elements: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                  displayMode: 'box',
                  showCardinality: true,
                  showBraces: true
                }}
                caption="Sample space: All 12 cards"
              />
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              <strong>Solution:</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Total number of possible outcomes = 12
            </p>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(i) P(drawing a '7') = 1/12</strong>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  There is only one card with '7', so there is 1 favorable outcome.
                </p>
                <div className="mt-2">
                  <MathToolRenderer
                    toolName="fractionBar"
                    parameters={{
                      fraction1: "1/12"
                    }}
                    caption="Visual representation of 1/12"
                  />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(ii) P(drawing a perfect square) = 3/12 = 1/4</strong>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Perfect squares from 1 to 12 are: 1, 4, and 9. So there are 3 favorable outcomes.
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded mb-2">
                  <MathToolRenderer
                    toolName="setVisualizer"
                    parameters={{
                      setName: 'Perfect squares',
                      elements: ['1', '4', '9'],
                      displayMode: 'box',
                      showCardinality: true,
                      showBraces: true
                    }}
                    caption="Favorable outcomes: Perfect squares"
                  />
                </div>
                <div className="mt-2">
                  <MathToolRenderer
                    toolName="fractionBar"
                    parameters={{
                      fraction1: "3/12"
                    }}
                    caption="3/12 = 1/4"
                  />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(iii) P(drawing a negative number) = 0/12 = 0</strong>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  There are no negative numbers from 1 to 12, so there are 0 favorable outcomes. This is an <strong>impossible event</strong>.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(iv) P(drawing a number less than 13) = 12/12 = 1</strong>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  All 12 numbers from 1 to 12 are less than 13, so there are 12 favorable outcomes. This is a <strong>certain event</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Prime Numbers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A ball is drawn at random from a bag containing balls numbered 10, 11, 12, 13, ..., 24. Find the probability of drawing:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (i) a '21'<br />
              (ii) an odd number<br />
              (iii) a prime number
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
              <em>Recall: A prime number is a positive integer that has exactly 2 different factors: 1 and itself.</em>
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
                  Total number of possible outcomes = 15 (numbers from 10 to 24)
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(i) P(drawing a '21') = 1/15</strong>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      There is only one ball numbered 21.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(ii) P(drawing an odd number) = 8/15</strong>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Odd numbers: 11, 13, 15, 17, 19, 21, 23 (7 numbers). Wait, we also need to check - from 10 to 24, odd numbers are 11, 13, 15, 17, 19, 21, 23. That's 7 numbers.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">Actually: <strong>7/15</strong></p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>(iii) P(drawing a prime number) = 5/15 = 1/3</strong>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Prime numbers from 10 to 24: 11, 13, 17, 19, 23 (5 prime numbers)
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Playing Card Probability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Probability with Playing Cards
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A standard deck of playing cards is a common context for probability problems. Let's first understand the structure of a deck.
            </p>

            {/* Deck Structure */}
            <div className="bg-gradient-to-r from-red-50 to-blue-50 dark:from-red-900/20 dark:to-blue-900/20 p-6 rounded-lg mb-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-xl">
                🃏 Structure of a Standard Deck
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-300 dark:border-gray-600">
                  <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Total Cards</p>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">52 cards</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-300 dark:border-gray-600">
                  <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Number of Suits</p>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">4 suits</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">The Four Suits:</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded border border-red-300 dark:border-red-700">
                    <p className="font-semibold text-red-700 dark:text-red-300">♥ Hearts (Red)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">13 cards</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded border border-red-300 dark:border-red-700">
                    <p className="font-semibold text-red-700 dark:text-red-300">♦ Diamonds (Red)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">13 cards</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-400 dark:border-gray-600">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">♠ Spades (Black)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">13 cards</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-400 dark:border-gray-600">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">♣ Clubs (Black)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">13 cards</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Each suit has 13 ranks:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded text-sm text-blue-800 dark:text-blue-300">
                    Numbered cards: 2-10 (9 cards per suit)
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded text-sm text-purple-800 dark:text-purple-300">
                    Face cards: Jack, Queen, King (3 cards per suit)
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded text-sm text-green-800 dark:text-green-300">
                    Aces: 1 per suit
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded">
                  <p className="font-semibold text-red-800 dark:text-red-300">Red Cards</p>
                  <p className="text-2xl font-bold text-red-600 dark:text-red-400">26 cards</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">(Hearts + Diamonds)</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded border border-gray-400 dark:border-gray-600">
                  <p className="font-semibold text-gray-800 dark:text-gray-200">Black Cards</p>
                  <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">26 cards</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">(Spades + Clubs)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Standard Deck Probability
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A card is drawn at random from a standard pack of 52 playing cards. Find the probability of drawing:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (i) a black card<br />
              (ii) a red Ace<br />
              (iii) a diamond<br />
              (iv) a card which is not a diamond
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Solution:</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Total number of possible outcomes = 52
            </p>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>(i)</strong> There are 26 black cards in the pack (13 spades + 13 clubs).
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  P(drawing a black card) = 26/52 = <strong>1/2</strong>
                </p>
                <div className="mt-2">
                  <MathToolRenderer
                    toolName="fractionBar"
                    parameters={{
                      fraction1: "26/52"
                    }}
                    caption="26/52 = 1/2"
                  />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>(ii)</strong> There are 2 red Aces in the pack (Ace of hearts and Ace of diamonds).
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  P(drawing a red Ace) = 2/52 = <strong>1/26</strong>
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>(iii)</strong> There are 13 diamonds in the pack.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  P(drawing a diamond) = 13/52 = <strong>1/4</strong>
                </p>
                <div className="mt-2">
                  <MathToolRenderer
                    toolName="fractionBar"
                    parameters={{
                      fraction1: "13/52"
                    }}
                    caption="13/52 = 1/4"
                  />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>(iv)</strong> We can solve this in two ways:
                </p>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded mb-3">
                  <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Method 1: Direct counting</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Since there are 13 diamonds in the pack, then there are<br />
                    52 − 13 = 39 cards which are not diamonds.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    P(drawing a card which is not a diamond) = 39/52 = <strong>3/4</strong>
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Method 2: Using complementary probability</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Since a card is either a diamond or not a diamond, then
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    P(drawing a diamond) + P(drawing a card which is not a diamond) = 1
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    ∴ P(drawing a card which is not a diamond)<br />
                    = 1 − P(drawing a diamond)<br />
                    = 1 − 1/4<br />
                    = <strong>3/4</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded border-l-4 border-green-500">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">
                💡 Complementary Probability Formula
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                For any event E:  <strong>P(not E) = 1 − P(E)</strong>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                This is useful when it's easier to calculate the probability of the event NOT happening!
              </p>
            </div>
          </div>

          {/* Practice Problems */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Playing Cards
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              All the 26 red cards from a standard pack of playing cards are mixed thoroughly. A card is then drawn at random. Find the probability of drawing:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (i) the Queen of hearts<br />
              (ii) the Jack of clubs<br />
              (iii) a card with a number less than 5
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
                  Total number of red cards = 26
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(i) P(Queen of hearts) = 1/26</strong>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      There is only one Queen of hearts in the red cards.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(ii) P(Jack of clubs) = 0</strong>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      The Jack of clubs is a black card, so it's not in the red card pile. This is an impossible event.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>(iii) P(number less than 5) = 8/26 = 4/13</strong>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Cards with numbers less than 5 are: 2, 3, 4 (Ace is typically counted as 1 or high, not as a number card).<br />
                      In red cards: 2♥, 3♥, 4♥, 2♦, 3♦, 4♦ = 6 cards. But wait, if we count Ace as 1, then we also have A♥ and A♦.<br />
                      So that's 2 + 3 + 4 from hearts = 3, and same from diamonds = 3, plus 2 Aces = 8 cards total.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Complementary Probability
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A standard deck of 52 cards is shuffled. One card is drawn at random. What is the probability that the card is NOT a King?
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Method 1:</strong> There are 4 Kings in a deck, so there are 52 − 4 = 48 cards that are not Kings.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  P(not a King) = 48/52 = <strong>12/13</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Method 2:</strong> Using complementary probability:
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  P(King) = 4/52 = 1/13<br />
                  P(not a King) = 1 − 1/13 = <strong>12/13</strong>
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
            <li><strong>Probability formula:</strong> P(E) = (number of favorable outcomes) ÷ (total number of possible outcomes)</li>
            <li>This formula only works when all outcomes are <strong>equally likely</strong></li>
            <li>Probability values range from <strong>0 (impossible) to 1 (certain)</strong></li>
            <li>A standard deck has <strong>52 cards</strong>: 4 suits of 13 cards each</li>
            <li><strong>26 red cards</strong> (hearts ♥ and diamonds ♦) and <strong>26 black cards</strong> (spades ♠ and clubs ♣)</li>
            <li><strong>Complementary probability:</strong> P(not E) = 1 − P(E)</li>
            <li>Always <strong>simplify fractions</strong> to their lowest terms</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
