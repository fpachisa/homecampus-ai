import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function DivideFractionByWhole() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Dividing a Fraction by a Whole Number</h1>
        <p className="text-lg">Learn how to divide fractions by whole numbers using visual models and the reciprocal rule!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Understanding with Visual Models */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">1. Understanding with Visual Models</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Big Idea</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              When you <strong>divide a fraction by a whole number</strong>, you are cutting that fraction into more pieces.
              The result is <strong>smaller</strong> than the original fraction!
            </p>
          </div>

          {/* Visual Example 1: 1/2 ÷ 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: <MathText>{'$\\frac{1}{2} \\div 2$'}</MathText></h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <strong>Think about it:</strong> You have half a pie. You share it equally between 2 children.
              How much does each child get?
            </p>

            <MathToolRenderer
              toolName="fractionDivision"
              parameters={{
                dividend: "1/2",
                divisor: "2",
                showReciprocal: true,
                showSteps: true,
                showResult: true,
                caption: "Half a pie divided into 2 equal parts - each child gets 1/4 of the pie"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Key Insight:</strong> When you cut <MathText>{'$\\frac{1}{2}$'}</MathText> into 2 equal pieces,
                each piece is <MathText>{'$\\frac{1}{4}$'}</MathText> of the whole.
              </p>
            </div>
          </div>

          {/* Visual Example 2: 1/2 ÷ 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: <MathText>{'$\\frac{1}{2} \\div 3$'}</MathText></h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <strong>Context:</strong> Mrs Tan bakes a cake. She has half the cake left and shares it equally among 3 children.
              What fraction of the cake does each child get?
            </p>

            <MathToolRenderer
              toolName="fractionDivision"
              parameters={{
                dividend: "1/2",
                divisor: "3",
                showReciprocal: true,
                showSteps: true,
                showResult: true,
                caption: "Half a cake shared among 3 children - each gets 1/6 of the whole cake"
              }}
            />
          </div>

          {/* Visual Example 3: 2/3 ÷ 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: <MathText>{'$\\frac{2}{3} \\div 3$'}</MathText></h3>

            <MathToolRenderer
              toolName="fractionDivision"
              parameters={{
                dividend: "2/3",
                divisor: "3",
                showReciprocal: true,
                showSteps: true,
                showResult: true,
                caption: "Two-thirds divided into 3 equal parts gives 2/9"
              }}
            />
          </div>
        </section>

        {/* Section 2: The Reciprocal Rule */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">2. The Reciprocal Rule</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Magic Rule</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <strong>Dividing by a number is the same as multiplying by its reciprocal!</strong>
            </p>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg text-center">
              <p className="text-2xl font-mono text-gray-900 dark:text-gray-100">
                <MathText>{'$\\frac{a}{b} \\div n = \\frac{a}{b} \\times \\frac{1}{n} = \\frac{a}{b \\times n}$'}</MathText>
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">What is a Reciprocal?</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The <strong>reciprocal</strong> of a number is 1 divided by that number.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="text-gray-900 dark:text-gray-100">Reciprocal of 2</p>
                <p className="text-xl font-bold text-purple-600 dark:text-purple-400"><MathText>{'$\\frac{1}{2}$'}</MathText></p>
              </div>
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="text-gray-900 dark:text-gray-100">Reciprocal of 3</p>
                <p className="text-xl font-bold text-purple-600 dark:text-purple-400"><MathText>{'$\\frac{1}{3}$'}</MathText></p>
              </div>
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="text-gray-900 dark:text-gray-100">Reciprocal of 4</p>
                <p className="text-xl font-bold text-purple-600 dark:text-purple-400"><MathText>{'$\\frac{1}{4}$'}</MathText></p>
              </div>
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-center">
                <p className="text-gray-900 dark:text-gray-100">Reciprocal of 5</p>
                <p className="text-xl font-bold text-purple-600 dark:text-purple-400"><MathText>{'$\\frac{1}{5}$'}</MathText></p>
              </div>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Worked Example: <MathText>{'$\\frac{3}{4} \\div 2$'}</MathText></h3>

            <MathToolRenderer
              toolName="fractionDivision"
              parameters={{
                dividend: "3/4",
                divisor: "2",
                showReciprocal: true,
                showSteps: true,
                showResult: true
              }}
            />
          </div>
        </section>

        {/* Section 3: Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">3. Practice Problems</h2>

          <div className="space-y-6">
            {/* Problem 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 1: <MathText>{'$\\frac{1}{3} \\div 4$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                <MathText>{'$\\frac{1}{6}$'}</MathText> of a cake is shared equally between 2 people.
                How much cake does each person get?
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
                    dividend: "1/3",
                    divisor: "4",
                    showReciprocal: true,
                    showSteps: true,
                    showResult: true,
                    caption: "Each person gets 1/12 of the cake"
                  }}
                />
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 2: <MathText>{'$\\frac{3}{5} \\div 6$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                <MathText>{'$\\frac{3}{5}$'}</MathText> of a ribbon is cut equally into 6 pieces.
                What is the length of each piece of ribbon?
              </p>

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
                    dividend: "3/5",
                    divisor: "6",
                    showReciprocal: true,
                    showSteps: true,
                    showResult: true,
                    caption: "Each piece is 1/10 of the original ribbon"
                  }}
                />
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 3: <MathText>{'$\\frac{5}{9} \\div 5$'}</MathText>
              </h3>

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
                    dividend: "5/9",
                    divisor: "5",
                    showReciprocal: true,
                    showSteps: true,
                    showResult: true
                  }}
                />
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
                Problem 4: <MathText>{'$\\frac{7}{8} \\div 3$'}</MathText>
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                <MathText>{'$\\frac{3}{4}$'}</MathText> kg of sugar is packed equally into 3 packets.
                What is the mass of each packet of sugar?
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
                    dividend: "7/8",
                    divisor: "3",
                    showReciprocal: true,
                    showSteps: true,
                    showResult: true,
                    caption: "Each packet has 7/24 kg of sugar"
                  }}
                />
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Key Takeaways</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Dividing a fraction by a whole number makes the result smaller.</strong>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>The Rule:</strong> <MathText>{'$\\frac{a}{b} \\div n = \\frac{a}{b} \\times \\frac{1}{n} = \\frac{a}{b \\times n}$'}</MathText>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Key insight:</strong> Dividing by n is the same as multiplying by <MathText>{'$\\frac{1}{n}$'}</MathText>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Always simplify</strong> your answer to the lowest terms!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
