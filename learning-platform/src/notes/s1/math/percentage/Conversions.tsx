import { useState } from 'react';
import MathText from '../../../../components/MathText';

const Conversions = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Percentage, Fraction, and Decimal Conversions</h1>
        <p className="mt-2 text-purple-100">Converting between three equivalent representations</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: Percentage to Fraction/Decimal */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Converting Percentage to Fraction and Decimal
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Since percentage means "out of 100", we can easily convert to fractions and decimals.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
                <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">To Fraction:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$x\\% = \\frac{x}{100}$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                  Then simplify to lowest terms
                </p>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded">
                <p className="font-semibold text-pink-800 dark:text-pink-300 mb-2">To Decimal:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$x\\% = x \\div 100$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                  Move decimal point 2 places left
                </p>
              </div>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Converting 75%
            </h3>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded space-y-3">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>To Fraction:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$75\\% = \\frac{75}{100} = \\frac{3}{4}$'}</MathText> (simplified by dividing by 25)
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>To Decimal:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$75\\% = 75 \\div 100 = 0.75$'}</MathText>
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-2 italic text-sm">
                All three forms represent the same value: <MathText>{'$75\\% = \\frac{3}{4} = 0.75$'}</MathText>
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Convert 12.5%
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Convert 12.5% to both a fraction (in simplest form) and a decimal.
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>To Fraction:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$12.5\\% = \\frac{12.5}{100} = \\frac{125}{1000}$'}</MathText> (multiply by 10/10 to remove decimal)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <MathText>{'$= \\frac{125 \\div 125}{1000 \\div 125} = \\frac{1}{8}$'}</MathText> (simplified)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>To Decimal:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$12.5\\% = 12.5 \\div 100 = 0.125$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Answer:</strong> <MathText>{'$12.5\\% = \\frac{1}{8} = 0.125$'}</MathText>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Fraction/Decimal to Percentage */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Converting Fraction and Decimal to Percentage
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To convert to percentage, we multiply by 100 and add the % symbol. This is the reverse operation of converting to decimal.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Conversion Rules:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Fraction to %: <MathText>{'$(\\text{fraction}) \\times 100\\%$'}</MathText></li>
                <li>Decimal to %: <MathText>{'$(\\text{decimal}) \\times 100\\%$'}</MathText></li>
                <li>Remember to include the % symbol in your answer!</li>
              </ul>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Converting to Percentage
            </h3>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded space-y-3">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Fraction to %:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$\\frac{3}{8} = \\frac{3}{8} \\times 100\\% = \\frac{300}{8}\\% = 37.5\\%$'}</MathText>
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Decimal to %:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>$0.65 = 0.65 \\times 100\\% = 65\\%$</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Mixed Conversions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Convert the following to percentages:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-2 ml-4">
              <li><MathText>{'$\\frac{5}{4}$'}</MathText> (improper fraction)</li>
              <li>0.035</li>
            </ul>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>(a)</strong> <MathText>{'$\\frac{5}{4}$'}</MathText>:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$\\frac{5}{4} \\times 100\\% = \\frac{500}{4}\\% = 125\\%$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm italic mt-1">
                  Note: Percentages can be greater than 100%
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-3 mt-4"><strong>(b)</strong> 0.035:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>$0.035 \\times 100\\% = 3.5\\%$</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm italic mt-1">
                  Note: Small decimals give percentages less than 10%
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Comparison Using Percentages */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Comparing Quantities Using Percentages
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Percentages provide a common "language" for comparing quantities. Since all percentages are out of 100,
              they're easier to compare than fractions with different denominators.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Why Use Percentages for Comparison?</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                It's difficult to compare <MathText>{'$\\frac{3}{7}$'}</MathText> and <MathText>{'$\\frac{5}{11}$'}</MathText> directly.
                But if we convert them to percentages (42.86% and 45.45%), we can see that <MathText>{'$\\frac{5}{11}$'}</MathText> is larger.
              </p>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Ordering Quantities
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Arrange in ascending order: <MathText>$0.7$</MathText>, <MathText>{'$\\frac{3}{5}$'}</MathText>, <MathText>$65\\%$</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Convert all to percentages:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li><MathText>{'$0.7 = 0.7 \\times 100\\% = 70\\%$'}</MathText></li>
                <li><MathText>{'$\\frac{3}{5} = \\frac{3}{5} \\times 100\\% = 60\\%$'}</MathText></li>
                <li><MathText>$65\\%$</MathText> (already in percentage)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                Comparing: <MathText>{'$60\\% < 65\\% < 70\\%$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Answer:</strong> <MathText>{'$\\frac{3}{5} < 65\\% < 0.7$'}</MathText>
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Which is Greater?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Which is greater: <MathText>{'$\\frac{7}{12}$'}</MathText> or <MathText>$58\\%$</MathText>?
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
                  Convert <MathText>{'$\\frac{7}{12}$'}</MathText> to percentage:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <MathText>{'$\\frac{7}{12} \\times 100\\% = \\frac{700}{12}\\% = 58.33...\\%$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  Compare: <MathText>{'$58.33\\% > 58\\%$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Answer:</strong> <MathText>{'$\\frac{7}{12}$'}</MathText> is greater than <MathText>$58\\%$</MathText>
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
            <li>To convert % to fraction: divide by 100 and simplify</li>
            <li>To convert % to decimal: divide by 100 (move decimal point 2 places left)</li>
            <li>To convert fraction or decimal to %: multiply by 100 and add % symbol</li>
            <li>Percentages provide a common basis (denominator 100) for comparing quantities</li>
            <li>Remember: <MathText>{'$50\\% = \\frac{1}{2} = 0.5$'}</MathText> are all equivalent</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Conversions;
