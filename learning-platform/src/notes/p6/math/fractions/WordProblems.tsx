import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function WordProblems() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Word Problems: Fraction Division</h1>
        <p className="text-lg">Apply your fraction division skills to solve real-world problems!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Single-Step Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">1. Single-Step Word Problems</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Problem Types</h3>
            <div className="space-y-2 text-gray-800 dark:text-gray-200">
              <p><strong>Sharing:</strong> "Total is shared so each gets X. How many people?"</p>
              <p><strong>Cutting:</strong> "Total is cut into pieces of size X. How many pieces?"</p>
              <p><strong>Filling:</strong> "Total poured into containers of size X. How many containers?"</p>
            </div>
          </div>

          {/* Example 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Juice Bottles</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              There are <MathText>{'$1\\frac{3}{4}$'}</MathText> litres of juice in Jug A and <MathText>{'$2\\frac{1}{4}$'}</MathText> litres of juice in Jug B.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <strong>(a)</strong> How many litres of juice are there in both jugs altogether?
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <strong>(b)</strong> John has some empty bottles. The capacity of each bottle is <MathText>{'$\\frac{4}{5}$'}</MathText> litre.
              He fills all the bottles completely with juice from both jugs. How many bottles can he fill?
            </p>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors mb-4"
            >
              {showSolution1 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showSolution1 && (
              <div className="space-y-6">
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Part (a): Total juice</h4>
                  <p className="text-gray-800 dark:text-gray-200">
                    <MathText>{'$1\\frac{3}{4} + 2\\frac{1}{4} = 3\\frac{4}{4} = 4$'}</MathText> litres
                  </p>
                  <p className="text-green-600 dark:text-green-400 font-bold mt-2">
                    There are 4 litres of juice altogether.
                  </p>
                </div>

                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Part (b): Number of bottles</h4>
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
                </div>
              </div>
            )}
          </div>

          {/* Example 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Puzzle Completion</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Ramli took <MathText>{'$\\frac{1}{12}$'}</MathText> h to complete a puzzle.
              How many such puzzles did he complete in <MathText>{'$\\frac{3}{4}$'}</MathText> h?
            </p>

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors mb-4"
            >
              {showSolution2 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showSolution2 && (
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
        </section>

        {/* Section 2: Multi-Step Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-pink-700 dark:text-pink-300">2. Multi-Step Word Problems</h2>

          <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border-l-4 border-pink-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Problem-Solving Strategy</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li><strong>Draw a bar model</strong> to visualize the problem</li>
              <li><strong>Identify what's given</strong> and what you need to find</li>
              <li><strong>Work step by step</strong>, solving one part at a time</li>
              <li><strong>Check</strong> if your answer makes sense</li>
            </ol>
          </div>

          {/* Example 3: Pizza Problem */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: Sharing Pizza</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Julie, Tom and Ben had a pizza. Julie ate <MathText>{'$\\frac{1}{4}$'}</MathText> of the pizza.
              Tom and Ben shared the rest of the pizza equally.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-2">
              <strong>(a)</strong> What fraction of the pizza did Tom and Ben share?
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <strong>(b)</strong> What fraction of the pizza did Tom have?
            </p>

            {/* Bar Model */}
            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Pizza Problem",
                bars: [
                  {
                    label: "Pizza",
                    segments: [
                      { value: "Julie", units: 1, highlight: true },
                      { value: "Tom", units: 1 },
                      { value: "Ben", units: 1 },
                      { value: "", units: 1 }
                    ],
                    totalLabel: "1 whole",
                    bracketPosition: "top"
                  }
                ],
                showUnitDividers: true,
                caption: "The pizza is divided into 4 equal parts"
              }}
            />

            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors mb-4 mt-4"
            >
              {showSolution3 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showSolution3 && (
              <div className="space-y-6">
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Part (a): Tom and Ben's share</h4>
                  <p className="text-gray-800 dark:text-gray-200">
                    Remainder = <MathText>{'$1 - \\frac{1}{4} = \\frac{3}{4}$'}</MathText>
                  </p>
                  <p className="text-green-600 dark:text-green-400 font-bold mt-2">
                    Tom and Ben shared <MathText>{'$\\frac{3}{4}$'}</MathText> of the pizza.
                  </p>
                </div>

                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Part (b): Tom's fraction</h4>
                  <MathToolRenderer
                    toolName="fractionDivision"
                    parameters={{
                      dividend: "3/4",
                      divisor: "2",
                      showReciprocal: true,
                      showSteps: true,
                      showResult: true,
                      caption: "Tom had 3/8 of the pizza"
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Example 4: T-Shirts Problem */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 4: Peter's Money</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Peter spent <MathText>{'$\\frac{2}{5}$'}</MathText> of his money on a pair of pants and
              <MathText>{'$\\frac{2}{3}$'}</MathText> of the remainder on 6 T-shirts.
              What fraction of the money did Peter spend on each T-shirt?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Peter's Money",
                bars: [
                  {
                    label: "Total",
                    segments: [
                      { value: "Pants", units: 2, highlight: true },
                      { value: "6 T-shirts", units: 2 },
                      { value: "Left", units: 1 }
                    ],
                    totalLabel: "All money",
                    bracketPosition: "top"
                  }
                ],
                showUnitDividers: true,
                caption: "Peter's money divided into 5 equal parts"
              }}
            />

            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors mb-4 mt-4"
            >
              {showSolution4 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showSolution4 && (
              <div className="space-y-6">
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 1: Find the remainder</h4>
                  <p className="text-gray-800 dark:text-gray-200">
                    Remainder after pants = <MathText>{'$1 - \\frac{2}{5} = \\frac{3}{5}$'}</MathText>
                  </p>
                </div>

                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 2: Find fraction spent on T-shirts</h4>
                  <p className="text-gray-800 dark:text-gray-200">
                    Fraction on T-shirts = <MathText>{'$\\frac{2}{3} \\times \\frac{3}{5} = \\frac{6}{15} = \\frac{2}{5}$'}</MathText>
                  </p>
                </div>

                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 3: Find fraction per T-shirt</h4>
                  <MathToolRenderer
                    toolName="fractionDivision"
                    parameters={{
                      dividend: "2/5",
                      divisor: "6",
                      showReciprocal: true,
                      showSteps: true,
                      showResult: true,
                      caption: "Peter spent 1/15 of his money on each T-shirt"
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Challenging Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">3. Challenging Problems</h2>

          {/* Example 5: Paper Clips */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 5: Paper Clips</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              There are some blue paper clips and green paper clips in a container.
              <MathText>{'$\\frac{2}{3}$'}</MathText> of the paper clips are blue and the rest are green.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The blue and green paper clips are packed separately into boxes.
              Sam packs <MathText>{'$\\frac{1}{12}$'}</MathText> of the blue paper clips into each box and
              Mei packs <MathText>{'$\\frac{1}{9}$'}</MathText> of the green paper clips into each box.
              How many boxes do they need to pack all the paper clips?
            </p>

            <button
              onClick={() => setShowSolution5(!showSolution5)}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors mb-4"
            >
              {showSolution5 ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showSolution5 && (
              <div className="space-y-6">
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 1: Find boxes for blue clips</h4>
                  <MathToolRenderer
                    toolName="fractionDivision"
                    parameters={{
                      dividend: "2/3",
                      divisor: "1/12",
                      showReciprocal: true,
                      showSteps: true,
                      showResult: true,
                      caption: "8 boxes needed for blue paper clips"
                    }}
                  />
                </div>

                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 2: Find fraction of green clips</h4>
                  <p className="text-gray-800 dark:text-gray-200">
                    Green clips = <MathText>{'$1 - \\frac{2}{3} = \\frac{1}{3}$'}</MathText>
                  </p>
                </div>

                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Step 3: Find boxes for green clips</h4>
                  <MathToolRenderer
                    toolName="fractionDivision"
                    parameters={{
                      dividend: "1/3",
                      divisor: "1/9",
                      showReciprocal: true,
                      showSteps: true,
                      showResult: true,
                      caption: "3 boxes needed for green paper clips"
                    }}
                  />
                </div>

                <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Final Answer:</h4>
                  <p className="text-gray-800 dark:text-gray-200">
                    Total boxes = 8 + 3 = <strong>11 boxes</strong>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Problem-Solving Tips */}
        <section className="bg-gradient-to-r from-indigo-100 to-pink-100 dark:from-indigo-900/30 dark:to-pink-900/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Problem-Solving Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <h3 className="font-bold text-indigo-700 dark:text-indigo-300 mb-2">When to Use Division</h3>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-1">
                <li>"How many groups/pieces/people?"</li>
                <li>"Shared equally... how many?"</li>
                <li>"Cut into pieces of size X"</li>
                <li>"Each container holds X"</li>
              </ul>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <h3 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Common Mistakes to Avoid</h3>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-1">
                <li>Forgetting to find the remainder first</li>
                <li>Dividing in the wrong order</li>
                <li>Not simplifying the final answer</li>
                <li>Forgetting units in the answer</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Key Takeaways</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Draw a bar model</strong> to visualize multi-step problems
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Find the remainder first</strong> when something is "used" or "spent"
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Work step by step</strong> - don't try to do everything at once
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Check your answer</strong> - does it make sense in the context?
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Include units</strong> in your final answer (litres, kg, pieces, etc.)
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
