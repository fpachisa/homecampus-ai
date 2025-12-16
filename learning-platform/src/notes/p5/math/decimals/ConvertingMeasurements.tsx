import { useState } from 'react';

const ConvertingMeasurements = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Converting Measurements</h1>
        <p className="text-lg">Use multiplication and division by 10, 100, and 1000 to convert between units!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Key Conversions */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">1. Key Conversion Facts</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Length */}
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-3 text-blue-800 dark:text-blue-300">📏 Length</h3>
              <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                <li><strong>1 m = 100 cm</strong></li>
                <li><strong>1 km = 1000 m</strong></li>
              </ul>
            </div>

            {/* Mass */}
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-3 text-green-800 dark:text-green-300">⚖️ Mass</h3>
              <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                <li><strong>1 kg = 1000 g</strong></li>
              </ul>
            </div>

            {/* Volume */}
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-lg mb-3 text-purple-800 dark:text-purple-300">🧪 Volume/Capacity</h3>
              <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                <li><strong>1 ℓ = 1000 ml</strong></li>
              </ul>
            </div>

            {/* Rule */}
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-lg mb-3 text-yellow-800 dark:text-yellow-300">💡 The Rule</h3>
              <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                <li><strong>Big → Small:</strong> Multiply</li>
                <li><strong>Small → Big:</strong> Divide</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Length Conversions */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">2. Length Conversions</h2>

          {/* m to cm */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Converting metres to centimetres (m → cm)</h3>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4">
              <p className="text-blue-800 dark:text-blue-300 font-semibold">Rule: 1 m = 100 cm, so multiply by 100</p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example: Convert 0.9 m to cm</p>
                <p className="text-gray-800 dark:text-gray-200">0.9 m = 0.9 × 100 cm = <strong>90 cm</strong></p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example: Convert 3 m 28 cm to cm</p>
                <p className="text-gray-800 dark:text-gray-200">3 m 28 cm = 300 cm + 28 cm = <strong>328 cm</strong></p>
              </div>
            </div>
          </div>

          {/* cm to m */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Converting centimetres to metres (cm → m)</h3>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4">
              <p className="text-blue-800 dark:text-blue-300 font-semibold">Rule: Divide by 100</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example: Write 285 cm in metres and centimetres</p>
              <p className="text-gray-800 dark:text-gray-200 mb-1">285 cm = 200 cm + 85 cm</p>
              <p className="text-gray-800 dark:text-gray-200">= <strong>2 m 85 cm</strong></p>
            </div>
          </div>

          {/* km to m */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Converting kilometres to metres (km ↔ m)</h3>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4">
              <p className="text-blue-800 dark:text-blue-300 font-semibold">Rule: 1 km = 1000 m</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">km → m (multiply by 1000)</p>
                <p className="text-gray-800 dark:text-gray-200">1.8 km = 1.8 × 1000 m = <strong>1800 m</strong></p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">m → km (divide by 1000)</p>
                <p className="text-gray-800 dark:text-gray-200">4008 m = 4000 m + 8 m = <strong>4 km 8 m</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Mass Conversions */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">3. Mass Conversions</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Converting kilograms and grams (kg ↔ g)</h3>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mb-4">
              <p className="text-green-800 dark:text-green-300 font-semibold">Rule: 1 kg = 1000 g</p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example: Write 5 kg 82 g in grams</p>
                <p className="text-gray-800 dark:text-gray-200 mb-1">5 kg 82 g = 5000 g + 82 g</p>
                <p className="text-gray-800 dark:text-gray-200">= <strong>5082 g</strong></p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example: Write 3109 g in kilograms and grams</p>
                <p className="text-gray-800 dark:text-gray-200 mb-1">3109 g = 3000 g + 109 g</p>
                <p className="text-gray-800 dark:text-gray-200">= <strong>3 kg 109 g</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Volume Conversions */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">4. Volume/Capacity Conversions</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Converting litres and millilitres (ℓ ↔ ml)</h3>

            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg mb-4">
              <p className="text-purple-800 dark:text-purple-300 font-semibold">Rule: 1 ℓ = 1000 ml</p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example: Write 2 ℓ 5 ml in millilitres</p>
                <p className="text-gray-800 dark:text-gray-200 mb-1">2 ℓ 5 ml = 2000 ml + 5 ml</p>
                <p className="text-gray-800 dark:text-gray-200">= <strong>2005 ml</strong></p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example: Write 4625 ml in litres and millilitres</p>
                <p className="text-gray-800 dark:text-gray-200 mb-1">4625 ml = 4000 ml + 625 ml</p>
                <p className="text-gray-800 dark:text-gray-200">= <strong>4 ℓ 625 ml</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Box */}
        <section>
          <div className="bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40 p-6 rounded-lg border-2 border-indigo-300 dark:border-indigo-700">
            <h3 className="font-bold text-xl mb-4 text-indigo-800 dark:text-indigo-300">📌 Conversion Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-2 border-indigo-300 dark:border-indigo-600 bg-indigo-200 dark:bg-indigo-800 p-3 text-indigo-900 dark:text-indigo-100">Type</th>
                    <th className="border-2 border-indigo-300 dark:border-indigo-600 bg-indigo-200 dark:bg-indigo-800 p-3 text-indigo-900 dark:text-indigo-100">Conversion</th>
                    <th className="border-2 border-indigo-300 dark:border-indigo-600 bg-indigo-200 dark:bg-indigo-800 p-3 text-indigo-900 dark:text-indigo-100">Big → Small</th>
                    <th className="border-2 border-indigo-300 dark:border-indigo-600 bg-indigo-200 dark:bg-indigo-800 p-3 text-indigo-900 dark:text-indigo-100">Small → Big</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Length</td>
                    <td className="border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">1 m = 100 cm</td>
                    <td className="border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">× 100</td>
                    <td className="border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">÷ 100</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Length</td>
                    <td className="border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">1 km = 1000 m</td>
                    <td className="border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">× 1000</td>
                    <td className="border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">÷ 1000</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Mass</td>
                    <td className="border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">1 kg = 1000 g</td>
                    <td className="border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">× 1000</td>
                    <td className="border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">÷ 1000</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">Volume</td>
                    <td className="border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">1 ℓ = 1000 ml</td>
                    <td className="border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">× 1000</td>
                    <td className="border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-200">÷ 1000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: Length Conversion
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Write 2 km 315 m in metres.
              </p>
              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution1 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution1 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-1">2 km 315 m = 2000 m + 315 m</p>
                  <p className="text-gray-800 dark:text-gray-200">= <strong>2315 m</strong></p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Mass Conversion
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Convert 14.085 kg to grams.
              </p>
              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution2 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution2 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-1">14.085 kg = 14.085 × 1000 g</p>
                  <p className="text-gray-800 dark:text-gray-200">= <strong>14 085 g</strong></p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Volume Conversion
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Write 7250 ml in litres and millilitres.
              </p>
              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution3 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution3 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-1">7250 ml = 7000 ml + 250 ml</p>
                  <p className="text-gray-800 dark:text-gray-200">= <strong>7 ℓ 250 ml</strong></p>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 4: Decimal Conversion
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Convert 3.5 ℓ to millilitres.
              </p>
              <button
                onClick={() => setShowSolution4(!showSolution4)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution4 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution4 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-1">3.5 ℓ = 3.5 × 1000 ml</p>
                  <p className="text-gray-800 dark:text-gray-200">= <strong>3500 ml</strong></p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>1 m = 100 cm</strong> and <strong>1 km = 1000 m</strong></li>
            <li><strong>1 kg = 1000 g</strong></li>
            <li><strong>1 ℓ = 1000 ml</strong></li>
            <li>Converting from <strong>big to small units</strong>: <strong>Multiply</strong></li>
            <li>Converting from <strong>small to big units</strong>: <strong>Divide</strong></li>
            <li>Use your knowledge of × and ÷ by 10, 100, 1000!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConvertingMeasurements;
