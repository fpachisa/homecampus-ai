import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function DivideWholeByFraction() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Dividing a Whole Number by a Fraction</h1>
        <p className="text-lg">Learn to answer: "How many fractional pieces fit in a whole number?"</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Counting Model */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">1. The Counting Model: How Many Fit?</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Big Idea</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              When you divide a whole number by a fraction, you're asking:
              <strong> "How many of these fractional pieces fit in the whole?"</strong>
            </p>
            <p className="text-gray-800 dark:text-gray-200 mt-2">
              The answer is <strong>LARGER</strong> than the original whole number!
            </p>
          </div>

          {/* Visual Example 1: 1 ÷ 1/4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: <MathText>{'$1 \\div \\frac{1}{4}$'}</MathText></h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <strong>Question:</strong> Raju has 1 pizza. He wants to give <MathText>{'$\\frac{1}{4}$'}</MathText> of the pizza to each of his friends.
              How many friends can he give the pizza to?
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500 mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Think:</strong> How many quarters are there in 1 whole? <strong>4!</strong>
              </p>
            </div>

            <MathToolRenderer
              toolName="fractionDivision"
              parameters={{
                dividend: "1",
                divisor: "1/4",
                showReciprocal: true,
                showSteps: true,
                showResult: true,
                caption: "1 pizza divided into quarters - He can give pizza to 4 friends"
              }}
            />
          </div>

          {/* Visual Example 2: 2 ÷ 1/4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: <MathText>{'$2 \\div \\frac{1}{4}$'}</MathText></h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <strong>Question:</strong> Anna has 2 pizzas. She gives <MathText>{'$\\frac{1}{4}$'}</MathText> of a pizza to each of her friends.
              How many friends can she give the pizzas to?
            </p>

            <MathToolRenderer
              toolName="fractionDivision"
              parameters={{
                dividend: "2",
                divisor: "1/4",
                showReciprocal: true,
                showSteps: true,
                showResult: true,
                caption: "2 pizzas divided into quarters - She can give pizza to 8 friends"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Notice:</strong> Dividing by <MathText>{'$\\frac{1}{4}$'}</MathText> is the same as multiplying by 4!
              </p>
            </div>
          </div>

          {/* Visual Example 3: 4 ÷ 1/3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: <MathText>{'$4 \\div \\frac{1}{3}$'}</MathText></h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <strong>Question:</strong> A group of children share 4 bars of chocolate equally.
              Each child gets <MathText>{'$\\frac{1}{3}$'}</MathText> of a chocolate bar.
              How many children are there?
            </p>

            <MathToolRenderer
              toolName="fractionDivision"
              parameters={{
                dividend: "4",
                divisor: "1/3",
                showReciprocal: true,
                showSteps: true,
                showResult: true,
                caption: "4 chocolate bars divided into thirds - There are 12 children"
              }}
            />
          </div>
        </section>

        {/* Section 2: Non-Unit Fractions */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">2. Dividing by Non-Unit Fractions</h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What About <MathText>{'$\\frac{2}{3}$'}</MathText> or <MathText>{'$\\frac{3}{4}$'}</MathText>?</h3>
            <p className="text-gray-800 dark:text-gray-200">
              The same idea applies! We still ask "how many fit?" but now each portion is larger.
            </p>
          </div>

          {/* Visual Example 4: 4 ÷ 2/3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 4: <MathText>{'$4 \\div \\frac{2}{3}$'}</MathText></h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <strong>Question:</strong> A group of children share 4 bars of chocolate equally.
              Each child gets <MathText>{'$\\frac{2}{3}$'}</MathText> of a chocolate bar.
              How many children are there?
            </p>

            <MathToolRenderer
              toolName="fractionDivision"
              parameters={{
                dividend: "4",
                divisor: "2/3",
                showReciprocal: true,
                showSteps: true,
                showResult: true,
                caption: "How many two-thirds are in 4? Answer: 6 children"
              }}
            />

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Think:</strong> How many two-thirds are there in 4 wholes? <strong>6!</strong>
              </p>
            </div>
          </div>

          {/* Visual Example 5: 6 ÷ 3/4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 5: <MathText>{'$6 \\div \\frac{3}{4}$'}</MathText></h3>

            <MathToolRenderer
              toolName="fractionDivision"
              parameters={{
                dividend: "6",
                divisor: "3/4",
                showReciprocal: true,
                showSteps: true,
                showResult: true,
                caption: "How many three-quarters are in 6? Answer: 8"
              }}
            />
          </div>
        </section>

        {/* Section 3: The Reciprocal Rule */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">3. The Reciprocal Rule</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Formula</h3>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg text-center">
              <p className="text-2xl font-mono text-gray-900 dark:text-gray-100">
                <MathText>{'$n \\div \\frac{a}{b} = n \\times \\frac{b}{a}$'}</MathText>
              </p>
            </div>
            <p className="text-gray-800 dark:text-gray-200 mt-4">
              <strong>To divide by a fraction, multiply by its reciprocal (flip the fraction)!</strong>
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Examples of Reciprocals</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="text-gray-900 dark:text-gray-100">Reciprocal of <MathText>{'$\\frac{1}{3}$'}</MathText></p>
                <p className="text-xl font-bold text-purple-600 dark:text-purple-400"><MathText>{'$\\frac{3}{1} = 3$'}</MathText></p>
              </div>
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="text-gray-900 dark:text-gray-100">Reciprocal of <MathText>{'$\\frac{2}{3}$'}</MathText></p>
                <p className="text-xl font-bold text-purple-600 dark:text-purple-400"><MathText>{'$\\frac{3}{2}$'}</MathText></p>
              </div>
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="text-gray-900 dark:text-gray-100">Reciprocal of <MathText>{'$\\frac{1}{4}$'}</MathText></p>
                <p className="text-xl font-bold text-purple-600 dark:text-purple-400"><MathText>{'$\\frac{4}{1} = 4$'}</MathText></p>
              </div>
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="text-gray-900 dark:text-gray-100">Reciprocal of <MathText>{'$\\frac{3}{5}$'}</MathText></p>
                <p className="text-xl font-bold text-purple-600 dark:text-purple-400"><MathText>{'$\\frac{5}{3}$'}</MathText></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">4. Practice Problems</h2>

          <div className="space-y-6">
            {/* Problem 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 1: <MathText>{'$3 \\div \\frac{1}{5}$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                A jug contains 3 litres of juice. Each glass holds <MathText>{'$\\frac{1}{5}$'}</MathText> litre.
                How many glasses can be filled?
              </p>

              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors mb-4"
              >
                {showSolution1 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution1 && (
                <MathToolRenderer
                  toolName="fractionDivision"
                  parameters={{
                    dividend: "3",
                    divisor: "1/5",
                    showReciprocal: true,
                    showSteps: true,
                    showResult: true,
                    caption: "15 glasses can be filled"
                  }}
                />
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 2: <MathText>{'$5 \\div \\frac{1}{6}$'}</MathText>
              </h3>

              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors mb-4"
              >
                {showSolution2 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution2 && (
                <MathToolRenderer
                  toolName="fractionDivision"
                  parameters={{
                    dividend: "5",
                    divisor: "1/6",
                    showReciprocal: true,
                    showSteps: true,
                    showResult: true
                  }}
                />
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 3: <MathText>{'$4 \\div \\frac{4}{5}$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                There are 4 litres of juice in both jugs altogether.
                John fills bottles that each hold <MathText>{'$\\frac{4}{5}$'}</MathText> litre.
                How many bottles can he fill?
              </p>

              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors mb-4"
              >
                {showSolution3 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution3 && (
                <MathToolRenderer
                  toolName="fractionDivision"
                  parameters={{
                    dividend: "4",
                    divisor: "4/5",
                    showReciprocal: true,
                    showSteps: true,
                    showResult: true,
                    caption: "John can fill 5 bottles"
                  }}
                />
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 4: <MathText>{'$\\frac{3}{4} \\div \\frac{1}{12}$'}</MathText> (Challenge!)
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                Ramli took <MathText>{'$\\frac{1}{12}$'}</MathText> h to complete a puzzle.
                How many such puzzles did he complete in <MathText>{'$\\frac{3}{4}$'}</MathText> h?
              </p>

              <button
                onClick={() => setShowSolution4(!showSolution4)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors mb-4"
              >
                {showSolution4 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution4 && (
                <MathToolRenderer
                  toolName="fractionDivision"
                  parameters={{
                    dividend: "3/4",
                    divisor: "1/12",
                    showReciprocal: true,
                    showSteps: true,
                    showResult: true,
                    caption: "Ramli completed 9 puzzles"
                  }}
                />
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Key Takeaways</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Dividing by a fraction gives a LARGER answer</strong> (opposite to dividing by a whole number!)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Think "How many fit?"</strong> - How many of the fraction fit in the whole number?
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>The Rule:</strong> <MathText>{'$n \\div \\frac{a}{b} = n \\times \\frac{b}{a}$'}</MathText> (flip and multiply!)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Dividing by <MathText>{'$\\frac{1}{n}$'}</MathText></strong> is the same as multiplying by n.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
