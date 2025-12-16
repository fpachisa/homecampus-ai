import { useState } from 'react';

const VolumeLiquids = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Volume of Liquids</h1>
        <p className="text-lg">Learn about litres, millilitres, and how they relate to cubic centimetres</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Relationship */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800 dark:text-cyan-300">1. Litres, Millilitres, and Cubic Centimetres</h2>

          <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border-l-4 border-cyan-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Key Relationship:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-xl text-center font-bold text-gray-900 dark:text-gray-100 mb-2">
                1 litre = 1000 millilitres = 1000 cm³
              </p>
              <p className="text-center text-gray-600 dark:text-gray-400">
                1 ℓ = 1000 ml = 1000 cm³
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-2 border-green-500 mb-4">
            <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 text-center">Important Facts to Remember:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded text-center">
                <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">1 ml</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">1 cm³</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded text-center">
                <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">1 ℓ</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">1000 ml</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded text-center">
                <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">1 ℓ</p>
                <p className="text-gray-600 dark:text-gray-400">=</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">1000 cm³</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 mb-4">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">Why is this useful?</h3>
            <p className="text-gray-800 dark:text-gray-200">
              This allows us to calculate the volume of liquid a container can hold using the same formula as for solids!
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Visualizing 1 Litre:</h3>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <svg viewBox="0 0 220 200" className="w-48 h-44 mx-auto mb-2">
                  {/* Proper isometric cube for 10cm cube */}
                  {/* Left face (darker) */}
                  <polygon
                    points="50,65 110,100 110,170 50,135"
                    fill="#67e8f9"
                    stroke="#06b6d4"
                    strokeWidth="2"
                  />
                  {/* Right face (medium) */}
                  <polygon
                    points="170,65 170,135 110,170 110,100"
                    fill="#a5f3fc"
                    stroke="#06b6d4"
                    strokeWidth="2"
                  />
                  {/* Top face (lightest) */}
                  <polygon
                    points="110,30 170,65 110,100 50,65"
                    fill="#cffafe"
                    stroke="#06b6d4"
                    strokeWidth="2"
                  />
                  {/* Labels */}
                  <text x="138" y="38" fontSize="13" fill="#0e7490" fontWeight="bold">10 cm</text>
                  <text x="5" y="105" fontSize="13" fill="#0e7490" fontWeight="bold">10 cm</text>
                  <text x="175" y="105" fontSize="13" fill="#0e7490" fontWeight="bold">10 cm</text>
                </svg>
                <p className="text-sm text-gray-600 dark:text-gray-400">10 × 10 × 10 cm cube</p>
                <p className="text-sm font-bold text-gray-800 dark:text-gray-200">= 1000 cm³ = 1 ℓ</p>
              </div>
            </div>
            <p className="text-center mt-4 text-gray-800 dark:text-gray-200">
              A cube measuring 10 cm on each side can hold exactly <strong>1 litre</strong> of water!
            </p>
          </div>
        </section>

        {/* Section 2: Converting Between Units */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800 dark:text-cyan-300">2. Converting Between Units</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Conversion Guide:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-3">cm³ → ml</h4>
                <p className="text-gray-800 dark:text-gray-200 mb-2">Just use the same number!</p>
                <div className="space-y-1 text-sm">
                  <p className="font-mono text-gray-800 dark:text-gray-200">100 cm³ = 100 ml</p>
                  <p className="font-mono text-gray-800 dark:text-gray-200">500 cm³ = 500 ml</p>
                  <p className="font-mono text-gray-800 dark:text-gray-200">1500 cm³ = 1500 ml</p>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded">
                <h4 className="font-bold text-green-800 dark:text-green-300 mb-3">cm³ → ℓ</h4>
                <p className="text-gray-800 dark:text-gray-200 mb-2">Divide by 1000</p>
                <div className="space-y-1 text-sm">
                  <p className="font-mono text-gray-800 dark:text-gray-200">1000 cm³ = 1 ℓ</p>
                  <p className="font-mono text-gray-800 dark:text-gray-200">2000 cm³ = 2 ℓ</p>
                  <p className="font-mono text-gray-800 dark:text-gray-200">3500 cm³ = 3.5 ℓ</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">Converting ml to ℓ and ml:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              When you have many millilitres, express the answer in <strong>litres and millilitres</strong>.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Example:</strong> 2310 ml = ?</p>
              <p className="text-gray-800 dark:text-gray-200">2310 ml = 2000 ml + 310 ml</p>
              <p className="text-gray-800 dark:text-gray-200">= 2 ℓ 310 ml</p>
            </div>
          </div>
        </section>

        {/* Section 3: Volume of Water in Containers */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800 dark:text-cyan-300">3. Volume of Water in Containers</h2>

          <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border-l-4 border-cyan-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">How to Find the Volume of Water:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>Use the formula: Volume = length × breadth × height</li>
              <li>The <strong>height</strong> is the water level (how high the water is)</li>
              <li>Convert to ml or ℓ if needed</li>
            </ol>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Volume of Water in a Tank
            </h3>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              A rectangular container measures 10 cm by 6 cm by 8 cm. It is completely filled with water.
              Find the volume of water in the container.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Solution:</p>
              <div className="space-y-2 text-gray-800 dark:text-gray-200">
                <p>Volume of water = length × breadth × height</p>
                <p>= 10 cm × 6 cm × 8 cm</p>
                <p>= 480 cm³</p>
                <p className="mt-2">Since 1 cm³ = 1 ml:</p>
                <p className="p-2 bg-green-100 dark:bg-green-900/30 rounded">
                  <strong>Volume of water = 480 cm³ = 480 ml</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Another Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Converting to Litres and Millilitres
            </h3>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              A rectangular tank measures 22 cm by 15 cm. Water fills it to a height of 7 cm.
              Find the volume of water. Give your answer in litres and millilitres.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Solution:</p>
              <div className="space-y-2 text-gray-800 dark:text-gray-200">
                <p>Volume of water = 22 cm × 15 cm × 7 cm</p>
                <p>= 2310 cm³</p>
                <p>= 2310 ml</p>
                <p className="mt-2">Converting to litres and millilitres:</p>
                <p>2310 ml = 2000 ml + 310 ml</p>
                <p className="p-2 bg-green-100 dark:bg-green-900/30 rounded">
                  <strong>Volume of water = 2 ℓ 310 ml</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-cyan-800 dark:text-cyan-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: Convert to ml
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Express 69 cm³ in millilitres.
              </p>
              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution1 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution1 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    Since 1 cm³ = 1 ml:
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>69 cm³ = 69 ml</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Convert to Litres
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Express 7 ℓ in cubic centimetres.
              </p>
              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution2 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution2 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    Since 1 ℓ = 1000 cm³:
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    7 ℓ = 7 × 1000 = <strong>7000 cm³</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Convert to ℓ and ml
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Express 8034 ml in litres and millilitres.
              </p>
              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution3 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution3 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    8034 ml = 8000 ml + 34 ml
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    = <strong>8 ℓ 34 ml</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 4: Volume of Water
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A rectangular tank measures 20 cm by 20 cm by 25 cm. It is completely filled with water.
                Find the volume of water. Give your answer in litres.
              </p>
              <button
                onClick={() => setShowSolution4(!showSolution4)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution4 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution4 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    Volume = 20 × 20 × 25 = 10000 cm³
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    = 10000 ml
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    = 10000 ÷ 1000 = <strong>10 ℓ</strong>
                  </p>
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
            <li><strong>1 ml = 1 cm³</strong> (they are the same!)</li>
            <li><strong>1 ℓ = 1000 ml = 1000 cm³</strong></li>
            <li>To convert cm³ to ml: use the same number</li>
            <li>To convert cm³ to ℓ: divide by 1000</li>
            <li>Volume of liquid = length × breadth × water height</li>
            <li>Express large volumes in <strong>ℓ and ml</strong> (e.g., 2 ℓ 310 ml)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VolumeLiquids;
