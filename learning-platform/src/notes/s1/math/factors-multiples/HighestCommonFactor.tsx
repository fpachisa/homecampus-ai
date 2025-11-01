import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function HighestCommonFactor() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Highest Common Factor (HCF)</h1>
        <p className="mt-2 text-green-100">
          Finding the largest number that divides into two or more numbers exactly
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Understanding Common Factors
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When two or more numbers share the same factors, we call these <strong className="text-green-600 dark:text-green-400">common factors</strong>. Among all the common factors, the largest one is called the <strong className="text-teal-600 dark:text-teal-400">Highest Common Factor (HCF)</strong>.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example: Finding HCF of 18 and 24
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Let's find the common factors by listing all factors of each number:
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-3">
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Factors of 18:</p>
                  <p className="ml-4">1, 2, 3, <span className="text-green-600 dark:text-green-400 font-semibold">6</span>, 9, 18</p>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Factors of 24:</p>
                  <p className="ml-4">1, 2, 3, 4, <span className="text-green-600 dark:text-green-400 font-semibold">6</span>, 8, 12, 24</p>
                </div>
                <div className="pt-2 border-t border-blue-200 dark:border-blue-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-gray-100">Common factors:</strong> 1, 2, 3, <span className="text-green-600 dark:text-green-400 font-bold">6</span>
                  </p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded border border-green-300 dark:border-green-600">
                <p className="text-gray-800 dark:text-gray-200">
                  The <strong>largest</strong> common factor is <strong className="text-green-700 dark:text-green-400">6</strong>.
                </p>
                <p className="text-gray-800 dark:text-gray-200 mt-1">
                  Therefore, <strong>HCF of 18 and 24 = 6</strong>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Definition:</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The <strong>Highest Common Factor (HCF)</strong> of two or more whole numbers is the <strong>largest whole number</strong> that divides the given numbers exactly (without remainder).
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 italic">
                Note: HCF is also known as the Greatest Common Divisor (GCD).
              </p>
            </div>
          </div>
        </section>

        {/* Method: Prime Factorisation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Finding HCF Using Prime Factorisation
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For larger numbers, listing all factors can be tedious. A more efficient method is to use <strong className="text-green-600 dark:text-green-400">prime factorisation</strong>.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Method: HCF Using Prime Factorisation
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-2">
                <li>Express each number as a product of its prime factors in index notation</li>
                <li>Identify the <strong>common prime factors</strong></li>
                <li>For each common prime, choose the <strong>lowest power</strong></li>
                <li>Multiply these together to get the HCF</li>
              </ol>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Worked Example: Find the HCF of 84, 126, and 245
              </h3>

              <div className="bg-white dark:bg-gray-800 p-5 rounded border border-blue-200 dark:border-blue-700 mb-4">
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-3">
                  <strong>Step 1:</strong> Express each number in prime factorisation
                </p>
                <div className="space-y-3 ml-4 text-gray-700 dark:text-gray-300">
                  <div className="grid grid-cols-[120px_1fr] gap-4">
                    <span className="font-semibold">84 = </span>
                    <span><MathText>$2^2 \times 3 \times 7$</MathText></span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] gap-4">
                    <span className="font-semibold">126 = </span>
                    <span><MathText>$2 \times 3^2 \times 7$</MathText></span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] gap-4">
                    <span className="font-semibold">245 = </span>
                    <span><MathText>$5 \times 7^2$</MathText></span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2 mt-4">
                  <strong>Step 2:</strong> Create a table to identify common prime factors
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 dark:border-gray-600 mt-2">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-gray-100">Number</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-900 dark:text-gray-100">2</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-900 dark:text-gray-100">3</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-900 dark:text-gray-100">5</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-900 dark:text-gray-100">7</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">84</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"><MathText>$2^2$</MathText></td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"><MathText>$3$</MathText></td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">-</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center bg-green-50 dark:bg-green-900/20"><MathText>$7$</MathText></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">126</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"><MathText>$2$</MathText></td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"><MathText>$3^2$</MathText></td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">-</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center bg-green-50 dark:bg-green-900/20"><MathText>$7$</MathText></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">245</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">-</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">-</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"><MathText>$5$</MathText></td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center bg-green-50 dark:bg-green-900/20"><MathText>$7^2$</MathText></td>
                      </tr>
                      <tr className="bg-green-100 dark:bg-green-900/30 font-semibold">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">HCF</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">-</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">-</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">-</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-green-700 dark:text-green-400"><MathText>$7$</MathText></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Step 3:</strong> Only <strong>7</strong> is common to all three numbers.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>The lowest power of 7 is $7^1 = 7$</MathText>
                </p>
              </div>

              <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded border border-green-300 dark:border-green-600">
                <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg">
                  <strong>∴ HCF = 7</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                  7 is the only prime factor common to 84, 126, and 245.
                </p>
              </div>

              <div className="mt-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong className="text-gray-900 dark:text-gray-100">Key Rule:</strong> When finding HCF using prime factorisation, we choose the <em>lowest power</em> of each common prime factor. This is because the HCF must divide all numbers exactly, so it can only include factors that are common to all.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: HCF Using Prime Factorisation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Find the HCF of 252 and 360 using prime factorisation.
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Solution:</p>
                  <div className="ml-4 space-y-2">
                    <p>Express in prime factorisation:</p>
                    <p><MathText>$252 = 2^2 \times 3^2 \times 7$</MathText></p>
                    <p><MathText>$360 = 2^3 \times 3^2 \times 5$</MathText></p>
                    <p className="mt-3">Common prime factors: 2 and 3</p>
                    <p><MathText>Lowest powers: $2^2$ and $3^2$</MathText></p>
                    <p className="mt-2"><MathText>HCF = $2^2 \times 3^2 = 4 \times 9 = 36$</MathText></p>
                  </div>
                  <div className="mt-3 p-3 bg-green-100 dark:bg-green-900/30 rounded border border-green-300 dark:border-green-600">
                    <p className="font-semibold text-green-700 dark:text-green-400">
                      <strong>Answer: HCF = 36</strong>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Applications Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Applications of HCF
          </h2>

          <div className="mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Application 1: Simplifying Fractions
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <MathText>{`We use HCF to express fractions in their simplest form. To simplify $\\frac{18}{24}$:`}</MathText>
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Step 1:</strong> Find HCF of 18 and 24 = 6
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Step 2:</strong> Divide both numerator and denominator by HCF
                </p>
                <div className="text-center my-3">
                  <p className="text-gray-900 dark:text-gray-100 text-lg">
                    <MathText>{`$\\frac{18}{24} = \\frac{18 \\div 6}{24 \\div 6} = \\frac{3}{4}$`}</MathText>
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{`$\\frac{3}{4}$ is the simplest form because HCF(3, 4) = 1`}</MathText>
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Application 2: Grouping and Division Problems
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Problem:</strong> A teacher has 60 red markers and 84 blue markers. She wants to divide them into identical groups with the same number of red and blue markers in each group, using all the markers. What is the maximum number of groups she can make?
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Solution:</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  The maximum number of groups = HCF of 60 and 84
                </p>
                <div className="ml-4 space-y-1">
                  <p className="text-gray-700 dark:text-gray-300"><MathText>$60 = 2^2 \times 3 \times 5$</MathText></p>
                  <p className="text-gray-700 dark:text-gray-300"><MathText>$84 = 2^2 \times 3 \times 7$</MathText></p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2"><MathText>HCF = $2^2 \times 3 = 12$</MathText></p>
                </div>
                <div className="mt-3 p-3 bg-green-100 dark:bg-green-900/30 rounded border border-green-300 dark:border-green-600">
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>Answer:</strong> She can make <strong>12 groups</strong>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    (Each group will have 5 red and 7 blue markers)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Real-World HCF Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              John wants to cut two ribbons of length 48 cm and 72 cm into pieces of equal length. What is the greatest possible length of each piece so that no ribbon is left over?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Solution:</p>
                  <p className="ml-4">
                    The greatest possible length = HCF of 48 and 72
                  </p>
                  <div className="ml-4 space-y-1">
                    <p><MathText>$48 = 2^4 \times 3$</MathText></p>
                    <p><MathText>$72 = 2^3 \times 3^2$</MathText></p>
                    <p className="mt-2"><MathText>HCF = $2^3 \times 3 = 8 \times 3 = 24$</MathText></p>
                  </div>
                  <div className="mt-3 p-3 bg-green-100 dark:bg-green-900/30 rounded border border-green-300 dark:border-green-600">
                    <p className="font-semibold text-green-700 dark:text-green-400">
                      <strong>Answer: 24 cm</strong>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                      The 48 cm ribbon will be cut into 2 pieces, and the 72 cm ribbon into 3 pieces.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Special Cases */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Special Cases and Important Notes
          </h2>

          <div className="space-y-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                When numbers are relatively prime
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                If two numbers have <strong>no common factors</strong> other than 1, they are called <strong>relatively prime</strong> or <strong>coprime</strong>.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Example: HCF(15, 16) = 1 because 15 and 16 share no common prime factors.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-gray-100">Remember:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-2 mt-2">
                <li>The HCF of any two numbers is always ≤ the smaller number</li>
                <li>The HCF of two numbers can never be greater than either of the numbers</li>
                <li>If one number divides another exactly, the HCF is the smaller number</li>
                <li>The HCF is useful for simplifying fractions and solving division problems</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mt-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Challenge: Think About This
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              We found that HCF of 84, 126, and 245 is 7. Is 7 the HCF of <em>any two</em> of these three numbers? Explain your answer.
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Discussion
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Answer: No, not always!</p>
                  <div className="ml-4 space-y-2">
                    <p>Let's check pairs:</p>
                    <p><MathText>• HCF(84, 126) = $2 \times 3 \times 7 = 42$ (not 7)</MathText></p>
                    <p><MathText>• HCF(84, 245) = $7$ ✓</MathText></p>
                    <p><MathText>• HCF(126, 245) = $7$ ✓</MathText></p>
                  </div>
                  <p className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-300 dark:border-blue-600">
                    <strong>Key insight:</strong> The HCF of three numbers might be smaller than the HCF of some pairs of those numbers. When we find the HCF of multiple numbers, we're looking for factors common to <em>all</em> of them.
                  </p>
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
              The <strong>Highest Common Factor (HCF)</strong> is the largest number that divides two or more numbers exactly
            </li>
            <li>
              To find HCF using prime factorisation: express numbers as products of primes, identify common factors, and choose the <strong>lowest power</strong> of each
            </li>
            <li>
              HCF is used to simplify fractions to their lowest terms
            </li>
            <li>
              HCF helps solve real-world problems involving equal grouping or division
            </li>
            <li>
              Numbers with HCF = 1 are called <strong>relatively prime</strong> or <strong>coprime</strong>
            </li>
            <li>
              The HCF of any numbers is always less than or equal to the smallest number
            </li>
            <li>
              If one number divides another exactly, the HCF equals the smaller number
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
