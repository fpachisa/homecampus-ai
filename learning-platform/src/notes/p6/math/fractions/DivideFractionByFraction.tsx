import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function DivideFractionByFraction() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);
  const [showSolution6, setShowSolution6] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Dividing a Fraction by a Fraction</h1>
        <p className="text-lg">Master the final piece of fraction division: dividing one fraction by another!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Visual Model */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">1. Visual Model: How Many Fit?</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Big Idea</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              When you divide one fraction by another, you're asking:
              <strong> "How many of the second fraction fit in the first?"</strong>
            </p>
          </div>

          {/* Visual Example 1: 1/2 ÷ 1/4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: <MathText>{'$\\frac{1}{2} \\div \\frac{1}{4}$'}</MathText></h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <strong>Question:</strong> Raju has <MathText>{'$\\frac{1}{2}$'}</MathText> of a cake.
              He cuts it into equal pieces. Each piece is <MathText>{'$\\frac{1}{4}$'}</MathText> of the cake.
              How many pieces of cake does he get?
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500 mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Think:</strong> How many quarters fit in half? <strong>2!</strong>
              </p>
            </div>

            <MathToolRenderer
              toolName="fractionDivision"
              parameters={{
                dividend: "1/2",
                divisor: "1/4",
                showReciprocal: true,
                showSteps: true,
                showResult: true,
                caption: "How many 1/4 pieces fit in 1/2? Answer: 2 pieces"
              }}
            />
          </div>

          {/* Visual Example 2: 2/3 ÷ 1/6 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: <MathText>{'$\\frac{2}{3} \\div \\frac{1}{6}$'}</MathText></h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <strong>Question:</strong> Hassan has <MathText>{'$\\frac{2}{3}$'}</MathText> of a pancake.
              He cuts it into equal pieces. Each piece is <MathText>{'$\\frac{1}{6}$'}</MathText> of a pancake.
              How many pieces of pancake does he get?
            </p>

            <MathToolRenderer
              toolName="fractionDivision"
              parameters={{
                dividend: "2/3",
                divisor: "1/6",
                showReciprocal: true,
                showSteps: true,
                showResult: true,
                caption: "There are 4 sixths in two-thirds"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Bar Model Insight:</strong> If we divide a bar into sixths, <MathText>{'$\\frac{2}{3}$'}</MathText> covers 4 of those sixths!
              </p>
            </div>
          </div>

          {/* Visual Example 3: 3/4 ÷ 1/8 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: <MathText>{'$\\frac{3}{4} \\div \\frac{1}{8}$'}</MathText></h3>

            <MathToolRenderer
              toolName="fractionDivision"
              parameters={{
                dividend: "3/4",
                divisor: "1/8",
                showReciprocal: true,
                showSteps: true,
                showResult: true,
                caption: "How many eighths fit in three-quarters? Answer: 6"
              }}
            />
          </div>
        </section>

        {/* Section 2: The Reciprocal Rule */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-300">2. The Reciprocal Rule</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Golden Rule for Dividing Fractions</h3>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg text-center">
              <p className="text-2xl font-mono text-gray-900 dark:text-gray-100">
                <MathText>{'$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$'}</MathText>
              </p>
            </div>
            <p className="text-gray-800 dark:text-gray-200 mt-4 text-center text-xl">
              <strong>Keep - Change - Flip!</strong>
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-center">
                <p className="font-bold text-blue-700 dark:text-blue-300">Keep</p>
                <p className="text-gray-800 dark:text-gray-200">First fraction stays the same</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="font-bold text-purple-700 dark:text-purple-300">Change</p>
                <p className="text-gray-800 dark:text-gray-200">Division to multiplication</p>
              </div>
              <div className="p-3 bg-orange-100 dark:bg-orange-900/40 rounded-lg text-center">
                <p className="font-bold text-orange-700 dark:text-orange-300">Flip</p>
                <p className="text-gray-800 dark:text-gray-200">Second fraction upside down</p>
              </div>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Worked Example: <MathText>{'$\\frac{2}{3} \\div \\frac{2}{9}$'}</MathText></h3>

            <MathToolRenderer
              toolName="fractionDivision"
              parameters={{
                dividend: "2/3",
                divisor: "2/9",
                showReciprocal: true,
                showSteps: true,
                showResult: true
              }}
            />
          </div>

          {/* Another Worked Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Another Example: <MathText>{'$\\frac{4}{10} \\div \\frac{2}{5}$'}</MathText></h3>

            <MathToolRenderer
              toolName="fractionDivision"
              parameters={{
                dividend: "4/10",
                divisor: "2/5",
                showReciprocal: true,
                showSteps: true,
                showResult: true
              }}
            />
          </div>
        </section>

        {/* Section 3: Simplifying Before Multiplying */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">3. Simplifying Before Multiplying</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Pro Tip: Simplify First!</h3>
            <p className="text-gray-800 dark:text-gray-200">
              You can simplify across the numerator and denominator <strong>before</strong> multiplying.
              This makes the calculation much easier!
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: <MathText>{'$\\frac{4}{9} \\div \\frac{2}{3}$'}</MathText></h3>

            <div className="space-y-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 1: Set up as multiplication</p>
                <p className="text-xl text-center"><MathText>{'$\\frac{4}{9} \\times \\frac{3}{2}$'}</MathText></p>
              </div>

              <div className="p-4 bg-yellow-100 dark:bg-yellow-900/40 rounded-lg">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 2: Simplify across!</p>
                <p className="text-gray-800 dark:text-gray-200">
                  4 and 2 share a common factor of 2: <MathText>{'$4 \\div 2 = 2$'}</MathText> and <MathText>{'$2 \\div 2 = 1$'}</MathText>
                </p>
                <p className="text-gray-800 dark:text-gray-200 mt-2">
                  9 and 3 share a common factor of 3: <MathText>{'$9 \\div 3 = 3$'}</MathText> and <MathText>{'$3 \\div 3 = 1$'}</MathText>
                </p>
                <p className="text-xl text-center mt-3"><MathText>{'$\\frac{2}{3} \\times \\frac{1}{1} = \\frac{2}{3}$'}</MathText></p>
              </div>
            </div>

            <MathToolRenderer
              toolName="fractionDivision"
              parameters={{
                dividend: "4/9",
                divisor: "2/3",
                showReciprocal: true,
                showSteps: true,
                showResult: true,
                caption: "After simplifying: 2/3"
              }}
            />
          </div>
        </section>

        {/* Section 4: Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">4. Practice Problems</h2>

          <div className="space-y-6">
            {/* Problem 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 1: <MathText>{'$\\frac{1}{3} \\div \\frac{1}{6}$'}</MathText>
              </h3>

              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mb-4"
              >
                {showSolution1 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution1 && (
                <MathToolRenderer
                  toolName="fractionDivision"
                  parameters={{
                    dividend: "1/3",
                    divisor: "1/6",
                    showReciprocal: true,
                    showSteps: true,
                    showResult: true
                  }}
                />
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 2: <MathText>{'$\\frac{3}{4} \\div \\frac{1}{8}$'}</MathText>
              </h3>

              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mb-4"
              >
                {showSolution2 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution2 && (
                <MathToolRenderer
                  toolName="fractionDivision"
                  parameters={{
                    dividend: "3/4",
                    divisor: "1/8",
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
                Problem 3: <MathText>{'$\\frac{2}{9} \\div \\frac{1}{4}$'}</MathText>
              </h3>

              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mb-4"
              >
                {showSolution3 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution3 && (
                <MathToolRenderer
                  toolName="fractionDivision"
                  parameters={{
                    dividend: "2/9",
                    divisor: "1/4",
                    showReciprocal: true,
                    showSteps: true,
                    showResult: true
                  }}
                />
              )}
            </div>

            {/* Problem 4 - Word Problem */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 4 (Word Problem): <MathText>{'$\\frac{2}{3} \\div \\frac{1}{3}$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                Jiahao had <MathText>{'$\\frac{2}{3}$'}</MathText> of a pizza.
                He gave each friend <MathText>{'$\\frac{1}{3}$'}</MathText> of the whole pizza.
                How many friends did he give the pieces of pizza to?
              </p>

              <button
                onClick={() => setShowSolution4(!showSolution4)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mb-4"
              >
                {showSolution4 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution4 && (
                <MathToolRenderer
                  toolName="fractionDivision"
                  parameters={{
                    dividend: "2/3",
                    divisor: "1/3",
                    showReciprocal: true,
                    showSteps: true,
                    showResult: true,
                    caption: "Jiahao gave pizza to 2 friends"
                  }}
                />
              )}
            </div>

            {/* Problem 5 - Word Problem */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 5 (Word Problem): <MathText>{'$\\frac{5}{9} \\div \\frac{1}{9}$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                Salleh has <MathText>{'$\\frac{5}{9}$'}</MathText> kg of popcorn. He packs them into packets.
                Each packet has a mass of <MathText>{'$\\frac{1}{9}$'}</MathText> kg.
                How many packets of popcorn does Salleh pack?
              </p>

              <button
                onClick={() => setShowSolution5(!showSolution5)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mb-4"
              >
                {showSolution5 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution5 && (
                <MathToolRenderer
                  toolName="fractionDivision"
                  parameters={{
                    dividend: "5/9",
                    divisor: "1/9",
                    showReciprocal: true,
                    showSteps: true,
                    showResult: true,
                    caption: "Salleh packs 5 packets"
                  }}
                />
              )}
            </div>

            {/* Problem 6 - Word Problem */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 6 (Challenge): <MathText>{'$\\frac{2}{5} \\div \\frac{1}{10}$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                A jug contains <MathText>{'$\\frac{2}{5}$'}</MathText> litre of orange juice.
                Audrey pours the juice equally into some glasses such that each glass contains <MathText>{'$\\frac{1}{10}$'}</MathText> litre of juice.
                How many glasses does she use?
              </p>

              <button
                onClick={() => setShowSolution6(!showSolution6)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mb-4"
              >
                {showSolution6 ? 'Hide Solution' : 'Show Solution'}
              </button>

              {showSolution6 && (
                <MathToolRenderer
                  toolName="fractionDivision"
                  parameters={{
                    dividend: "2/5",
                    divisor: "1/10",
                    showReciprocal: true,
                    showSteps: true,
                    showResult: true,
                    caption: "Audrey uses 4 glasses"
                  }}
                />
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Key Takeaways</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>The Question:</strong> "How many of the second fraction fit in the first?"
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>The Rule:</strong> <MathText>{'$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$'}</MathText>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Remember:</strong> Keep - Change - Flip!
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Pro Tip:</strong> Simplify before multiplying to make calculations easier!
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Always:</strong> Express your answer in the simplest form!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
