import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function FractionAndRatio() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Fraction and Ratio</h1>
        <p className="text-lg">Discover the connection between fractions and ratios</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Fractions to Ratios */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-300">1. Converting Fractions to Ratios</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Key Insight</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              When we say "<strong>A is <MathText>{'$\\frac{a}{b}$'}</MathText> of B</strong>", it means:
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-xl mt-2">
              <strong>A : B = a : b</strong>
            </p>
          </div>

          {/* Example 1: Stickers */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Leila's and Siti's Stickers</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The number of Leila's stickers is <MathText>{'$\\frac{1}{2}$'}</MathText> of Siti's stickers.
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                bars: [
                  { label: "Leila", units: 1, color: "pink" },
                  { label: "Siti", units: 2, color: "purple" }
                ],
                showUnitDividers: true,
                caption: "Leila has 1 part, Siti has 2 parts"
              }}
            />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <MathText>{'$\\frac{1}{2}$'}</MathText> of Siti's = <strong>Ratio 1 : 2</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>Leila : Siti = 1 : 2</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                We can also say: Siti has <strong>twice</strong> as many stickers as Leila!
              </p>
            </div>
          </div>

          {/* Example 2: Marbles */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Mike's and Sam's Marbles</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The number of Mike's marbles is <MathText>{'$\\frac{3}{5}$'}</MathText> of Sam's marbles.
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                bars: [
                  { label: "Mike", units: 3, color: "blue" },
                  { label: "Sam", units: 5, color: "green" }
                ],
                showUnitDividers: true,
                caption: "Mike has 3 parts, Sam has 5 parts"
              }}
            />

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <MathText>{'$\\frac{3}{5}$'}</MathText> of Sam's = <strong>Ratio 3 : 5</strong>
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                <strong>Mike : Sam = 3 : 5</strong>
              </p>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200 font-bold">
                What about the other way around?
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                Sam : Mike = 5 : 3
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                So Sam's marbles is <MathText>{'$\\frac{5}{3}$'}</MathText> of Mike's marbles!
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Ratios to Fractions */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-cyan-700 dark:text-cyan-300">2. Converting Ratios to Fractions</h2>

          <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border-l-4 border-cyan-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Two Types of Fractions from Ratios</h3>
            <p className="text-gray-800 dark:text-gray-200">
              From ratio <strong>A : B</strong>, we can find:
            </p>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 mt-2 space-y-1">
              <li><strong>Part-to-Part:</strong> A is <MathText>{'$\\frac{A}{B}$'}</MathText> of B</li>
              <li><strong>Part-to-Whole:</strong> A is <MathText>{'$\\frac{A}{A+B}$'}</MathText> of total</li>
            </ul>
          </div>

          {/* Example 3: Parcel Mass */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 3: Mass of Parcels</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The ratio of the mass of Parcel A to the mass of Parcel B is <strong>4 : 5</strong>.
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                bars: [
                  { label: "Parcel A", units: 4, color: "orange" },
                  { label: "Parcel B", units: 5, color: "blue" }
                ],
                totalBracket: { barIndices: [0, 1], value: "9 units total" },
                showUnitDividers: true
              }}
            />

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                <p className="font-bold text-gray-900 dark:text-gray-100">Part-to-Part:</p>
                <p className="text-gray-800 dark:text-gray-200 mt-2">
                  Mass of A = <MathText>{'$\\frac{4}{5}$'}</MathText> of mass of B
                </p>
                <p className="text-gray-800 dark:text-gray-200 mt-2">
                  Mass of B = <MathText>{'$\\frac{5}{4}$'}</MathText> of mass of A
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="font-bold text-gray-900 dark:text-gray-100">Part-to-Whole:</p>
                <p className="text-gray-800 dark:text-gray-200 mt-2">
                  Mass of A = <MathText>{'$\\frac{4}{9}$'}</MathText> of total mass
                </p>
                <p className="text-gray-800 dark:text-gray-200 mt-2">
                  Mass of B = <MathText>{'$\\frac{5}{9}$'}</MathText> of total mass
                </p>
              </div>
            </div>
          </div>

          {/* Example 4: Water in Jugs */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 4: Water in Jugs</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The volume of water in Jug X is <MathText>{'$\\frac{11}{12}$'}</MathText> of the volume in Jug Y.
            </p>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                bars: [
                  { label: "Jug X", units: 11, color: "blue" },
                  { label: "Jug Y", units: 12, color: "cyan" }
                ],
                totalBracket: { barIndices: [0, 1], value: "23 units total" },
                showUnitDividers: true,
                caption: "Jug X : Jug Y = 11 : 12"
              }}
            />

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>(i)</strong> Ratio of Jug Y to Jug X = <strong>12 : 11</strong>
                </p>
              </div>
              <div className="p-3 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>(ii)</strong> Jug X as fraction of total = <MathText>{'$\\frac{11}{23}$'}</MathText>
                </p>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>(iii)</strong> Jug X as fraction of Jug Y = <MathText>{'$\\frac{11}{12}$'}</MathText>
                </p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>(iv)</strong> Total as ratio to Jug X = <strong>23 : 11</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The Deep Connection */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">3. The Deep Connection</h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Fractions ARE Ratios!</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Every fraction <MathText>{'$\\frac{a}{b}$'}</MathText> can be thought of as a ratio <strong>a : b</strong>.
            </p>
            <p className="text-gray-800 dark:text-gray-200 mt-2">
              The numerator and denominator become the two terms of the ratio!
            </p>
          </div>

          {/* Example 5: Ribbons */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 5: Ribbons</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Lina has pink, red, and blue ribbons.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border p-2">Colour</th>
                    <th className="border p-2">Pink</th>
                    <th className="border p-2">Red</th>
                    <th className="border p-2">Blue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 font-bold bg-gray-100 dark:bg-gray-700">Length</td>
                    <td className="border p-2 bg-pink-100 dark:bg-pink-900">36 cm</td>
                    <td className="border p-2 bg-red-100 dark:bg-red-900">42 cm</td>
                    <td className="border p-2 bg-blue-100 dark:bg-blue-900">14 cm</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <MathToolRenderer
              toolName="ratioBarModel"
              parameters={{
                title: "Pink : Red : Blue = 36 : 42 : 14 = 18 : 21 : 7",
                bars: [
                  { label: "Pink", units: 18, color: "pink" },
                  { label: "Red", units: 21, color: "orange" },
                  { label: "Blue", units: 7, color: "blue" }
                ],
                showUnitDividers: false,
                caption: "Divide all by 2 to simplify"
              }}
            />

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-pink-50 dark:bg-pink-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>(i)</strong> Pink as fraction of Red:
                  <MathText>{'$\\frac{36}{42} = \\frac{6}{7}$'}</MathText>
                </p>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>(ii)</strong> Ratio of Red to Blue = 42 : 14 = <strong>3 : 1</strong>
                </p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>(iii)</strong> If ratio to Pink ribbon is 7 : 18, it must be the <strong>Blue</strong> ribbon!
                </p>
              </div>
            </div>
          </div>

          {/* Quick Reference Table */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Quick Reference</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border p-3">Fraction Statement</th>
                    <th className="border p-3">Ratio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">A is <MathText>{'$\\frac{1}{2}$'}</MathText> of B</td>
                    <td className="border p-3 font-bold">A : B = 1 : 2</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-750">
                    <td className="border p-3">A is <MathText>{'$\\frac{2}{3}$'}</MathText> of B</td>
                    <td className="border p-3 font-bold">A : B = 2 : 3</td>
                  </tr>
                  <tr>
                    <td className="border p-3">A is <MathText>{'$\\frac{3}{4}$'}</MathText> of B</td>
                    <td className="border p-3 font-bold">A : B = 3 : 4</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-750">
                    <td className="border p-3">A is <MathText>{'$\\frac{5}{8}$'}</MathText> of B</td>
                    <td className="border p-3 font-bold">A : B = 5 : 8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Points Summary */}
        <section>
          <div className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/50 dark:to-cyan-900/50 p-6 rounded-lg border-2 border-teal-300 dark:border-teal-700">
            <h2 className="text-xl font-bold mb-4 text-teal-800 dark:text-teal-200">Key Points to Remember</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li>✓ "A is a/b of B" means A : B = a : b</li>
              <li>✓ From ratio A : B, A is A/(A+B) of the total</li>
              <li>✓ The numerator and denominator of a fraction form a ratio</li>
              <li>✓ Part-to-Part fraction uses just the two parts</li>
              <li>✓ Part-to-Whole fraction uses the part and the total</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
