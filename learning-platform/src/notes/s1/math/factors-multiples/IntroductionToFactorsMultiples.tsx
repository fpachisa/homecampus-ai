import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function IntroductionToFactorsMultiples() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Introduction to Factors and Multiples</h1>
        <p className="mt-2 text-blue-100">
          Understanding the fundamental building blocks of whole numbers
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Multiples */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            A. What are Multiples?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We can find the <strong className="text-blue-600 dark:text-blue-400">multiples</strong> of a whole number by multiplying it by another positive whole number.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example: Multiples of 3
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                The multiples of 3 are:
              </p>
              <div className="font-mono text-gray-800 dark:text-gray-200 space-y-1">
                <p><MathText>$3 \times 1 = 3$</MathText></p>
                <p><MathText>$3 \times 2 = 6$</MathText></p>
                <p><MathText>$3 \times 3 = 9$</MathText></p>
                <p><MathText>$3 \times 4 = 12$</MathText></p>
                <p><MathText>$3 \times 5 = 15$</MathText></p>
                <p>... and so on</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                So the multiples of 3 are: <span className="font-semibold">3, 6, 9, 12, 15, ...</span>
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-gray-100">Key Concept:</strong> Multiples of a number form an infinite sequence that starts with the number itself and continues by adding that number repeatedly.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Finding Multiples
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Write down the first six multiples of 5.
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Solution:</strong>
                </p>
                <div className="space-y-1 text-gray-700 dark:text-gray-300">
                  <p><MathText>$5 \times 1 = 5$</MathText></p>
                  <p><MathText>$5 \times 2 = 10$</MathText></p>
                  <p><MathText>$5 \times 3 = 15$</MathText></p>
                  <p><MathText>$5 \times 4 = 20$</MathText></p>
                  <p><MathText>$5 \times 5 = 25$</MathText></p>
                  <p><MathText>$5 \times 6 = 30$</MathText></p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  The first six multiples of 5 are: <strong>5, 10, 15, 20, 25, 30</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Factors */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            B. What are Factors?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A whole number greater than 1 can be expressed as a product of two whole numbers. These are called <strong className="text-blue-600 dark:text-blue-400">factors</strong>.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example: Factors of 12
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                We can express 12 as a product in several ways:
              </p>
              <div className="text-gray-800 dark:text-gray-200 space-y-1">
                <p><MathText>$12 = 1 \times 12$</MathText></p>
                <p><MathText>$12 = 2 \times 6$</MathText></p>
                <p><MathText>$12 = 3 \times 4$</MathText></p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                Therefore, 1, 2, 3, 4, 6, and 12 are the <strong>factors</strong> of 12.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                We say that 12 is <strong>divisible</strong> by each of its factors.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded border border-gray-300 dark:border-gray-600 mb-4">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    <MathText>$12 = 3 \times 4$</MathText>
                  </p>
                  <div className="flex gap-8 items-center justify-center mt-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded border-2 border-blue-500">
                      <p className="text-sm text-gray-600 dark:text-gray-400">3 is a factor</p>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded border-2 border-blue-500">
                      <p className="text-sm text-gray-600 dark:text-gray-400">4 is a factor</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm italic">
                    12 is a multiple of both 3 and 4
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Important Definition
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A whole number greater than 1 is <strong>divisible</strong> by each of its factors. This means it can be divided by any of its factors <strong>without leaving a remainder</strong>.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Finding Factors
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              List all the factors of 18.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Find all pairs of numbers that multiply to give 18:
                </p>
                <div className="space-y-1 text-gray-700 dark:text-gray-300">
                  <p><MathText>$18 = 1 \times 18$</MathText></p>
                  <p><MathText>$18 = 2 \times 9$</MathText></p>
                  <p><MathText>$18 = 3 \times 6$</MathText></p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>The factors of 18 are: 1, 2, 3, 6, 9, 18</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 italic">
                  Note: We list factors in order from smallest to largest, and each factor appears only once.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: The Connection */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Link Between Multiples and Factors
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Do you see the connection between multiples and factors? They are two sides of the same coin!
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-l-4 border-purple-500 p-5 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                Understanding the Relationship
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  If we say that <strong>12 is a multiple of 3</strong>, we can also say that <strong>3 is a factor of 12</strong>.
                </p>
                <p>
                  Similarly, if <strong>12 is a multiple of 4</strong>, then <strong>4 is a factor of 12</strong>.
                </p>
                <p className="pt-2 border-t border-purple-200 dark:border-purple-700">
                  <strong className="text-purple-900 dark:text-purple-200">Key Insight:</strong> Factors and multiples are <em>inverse relationships</em>:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>If A is a factor of B, then B is a multiple of A</li>
                  <li>If B is a multiple of A, then A is a factor of B</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong className="text-gray-900 dark:text-gray-100">Remember:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-2">
                <li><strong>Multiples</strong> are found by <em>multiplying</em> - they get larger</li>
                <li><strong>Factors</strong> are found by <em>dividing</em> - they are smaller than or equal to the number</li>
                <li>Every number has a <em>finite</em> number of factors</li>
                <li>Every number has an <em>infinite</em> number of multiples</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Understanding the Connection
            </h3>
            <div className="text-gray-700 dark:text-gray-300 mb-3">
              <p className="mb-2">(a) Is 5 a factor of 10? Why?</p>
              <p className="mb-2">(b) Is 3 a factor of 10? Why?</p>
              <p>(c) Can a whole number greater than 10 be a factor of 10? Explain your reasoning.</p>
            </div>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">(a) Yes, 5 is a factor of 10.</p>
                    <p className="ml-4"><MathText>Because $10 = 5 \times 2$, we can divide 10 by 5 without leaving a remainder. Therefore, 10 is divisible by 5, which means 5 is a factor of 10.</MathText></p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">(b) No, 3 is not a factor of 10.</p>
                    <p className="ml-4"><MathText>There is no whole number that we can multiply by 3 to get exactly 10. When we divide 10 by 3, we get $10 \div 3 = 3$ remainder $1$. Since there is a remainder, 3 is not a factor of 10.</MathText></p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">(c) No, a number greater than 10 cannot be a factor of 10.</p>
                    <p className="ml-4"><MathText>A factor of a number must divide into it exactly. If a number is greater than 10, it cannot divide into 10 to give a whole number result. For example, 11 is greater than 10, and $10 \div 11$ is less than 1, not a whole number.</MathText></p>
                  </div>
                </div>
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
            <li>
              <strong>Multiples</strong> of a number are found by multiplying it by positive whole numbers (1, 2, 3, ...)
            </li>
            <li>
              <strong>Factors</strong> of a number are whole numbers that divide into it exactly (without remainder)
            </li>
            <li>
              If A is a factor of B, then B is a multiple of A (and vice versa)
            </li>
            <li>
              A number is <strong>divisible</strong> by each of its factors
            </li>
            <li>
              Every number has a <strong>finite</strong> number of factors but an <strong>infinite</strong> number of multiples
            </li>
            <li>
              Factors are always less than or equal to the number itself
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
