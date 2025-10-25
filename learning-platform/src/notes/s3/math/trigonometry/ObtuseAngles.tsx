

const ObtuseAngles = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">4. Trigonometry with Obtuse Angles</h1>
        <p className="text-lg">Extending trigonometry beyond 90° to obtuse angles</p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">4.1 Relationship between Acute and Obtuse Angles</h3>
          <p className="mb-4">Trigonometric ratios can be extended to obtuse angles (90° to 180°). Understanding these relationships is crucial for solving problems with non-right triangles.</p>

          <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500 mb-4">
            <p className="font-bold mb-2">Key Relationships:</p>
            <p className="mb-1">• sin(180° - θ) = sin θ</p>
            <p className="mb-1">• cos(180° - θ) = -cos θ</p>
            <p className="mb-1">• tan(180° - θ) = -tan θ</p>
          </div>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border-2 border-gray-300">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="border border-gray-300 p-3">Angle Range</th>
                  <th className="border border-gray-300 p-3">sin θ</th>
                  <th className="border border-gray-300 p-3">cos θ</th>
                  <th className="border border-gray-300 p-3">tan θ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 text-center font-semibold">0° to 90°</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600 font-semibold">Positive</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600 font-semibold">Positive</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600 font-semibold">Positive</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-center font-semibold">90° to 180°</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600 font-semibold">Positive</td>
                  <td className="border border-gray-300 p-3 text-center text-red-600 font-semibold">Negative</td>
                  <td className="border border-gray-300 p-3 text-center text-red-600 font-semibold">Negative</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300">
            <p className="font-semibold mb-2">Examples:</p>
            <p className="mb-1">• sin 150° = sin 30° = 1/2</p>
            <p className="mb-1">• cos 120° = -cos 60° = -1/2</p>
            <p className="mb-1">• sin 135° = sin 45° = √2/2</p>
            <p>• cos 150° = -cos 30° = -√3/2</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">4.2 The ASTC Rule (All Students Take Calculus)</h3>
          <p className="mb-4">A helpful mnemonic for remembering which trigonometric functions are positive in each quadrant.</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-green-100 p-4 rounded border-2 border-green-500">
              <p className="font-bold text-center text-lg mb-2">Quadrant I (0°-90°)</p>
              <p className="text-center font-semibold text-green-700">ALL</p>
              <p className="text-center text-sm">All ratios positive</p>
              <p className="text-center text-xs mt-2">sin+, cos+, tan+</p>
            </div>
            <div className="bg-blue-100 p-4 rounded border-2 border-blue-500">
              <p className="font-bold text-center text-lg mb-2">Quadrant II (90°-180°)</p>
              <p className="text-center font-semibold text-blue-700">SINE</p>
              <p className="text-center text-sm">Only sine positive</p>
              <p className="text-center text-xs mt-2">sin+, cos-, tan-</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded border-2 border-yellow-500">
              <p className="font-bold text-center text-lg mb-2">Quadrant III (180°-270°)</p>
              <p className="text-center font-semibold text-yellow-700">TAN</p>
              <p className="text-center text-sm">Only tangent positive</p>
              <p className="text-center text-xs mt-2">sin-, cos-, tan+</p>
            </div>
            <div className="bg-red-100 p-4 rounded border-2 border-red-500">
              <p className="font-bold text-center text-lg mb-2">Quadrant IV (270°-360°)</p>
              <p className="text-center font-semibold text-red-700">COSINE</p>
              <p className="text-center text-sm">Only cosine positive</p>
              <p className="text-center text-xs mt-2">sin-, cos+, tan-</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">4.3 Calculating with Obtuse Angles</h3>

          <div className="bg-blue-50 p-4 rounded mb-4">
            <p className="font-semibold mb-2">Steps to find trig values for obtuse angles:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Identify the related acute angle: θ' = 180° - θ</li>
              <li>Calculate the trig ratio for the acute angle</li>
              <li>Apply the correct sign based on the quadrant (ASTC rule)</li>
            </ol>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300 mb-4">
            <p className="font-semibold mb-2">Example 1: Find sin 120°</p>
            <p className="mb-1">Step 1: Related acute angle = 180° - 120° = 60°</p>
            <p className="mb-1">Step 2: sin 60° = √3/2</p>
            <p className="mb-1">Step 3: Sine is positive in Quadrant II (90°-180°)</p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-2">Therefore: sin 120° = √3/2</p>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300">
            <p className="font-semibold mb-2">Example 2: Find cos 150°</p>
            <p className="mb-1">Step 1: Related acute angle = 180° - 150° = 30°</p>
            <p className="mb-1">Step 2: cos 30° = √3/2</p>
            <p className="mb-1">Step 3: Cosine is negative in Quadrant II (90°-180°)</p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-2">Therefore: cos 150° = -√3/2</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">4.4 Solving Equations with Obtuse Angles</h3>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mb-4">
            <p className="font-bold mb-2">Important Note:</p>
            <p>When solving equations like sin θ = 0.5, there are often TWO solutions in the range 0° to 180°:</p>
            <p className="mt-2">• One acute angle: θ = sin⁻¹(0.5) = 30°</p>
            <p>• One obtuse angle: θ = 180° - 30° = 150°</p>
            <p className="mt-2 text-sm italic">Always check which solution(s) make sense in the context of the problem!</p>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300">
            <p className="font-semibold mb-2">Example: Solve sin θ = 0.866 for 0° ≤ θ ≤ 180°</p>
            <p className="mb-2">Step 1: Find the acute angle</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm">θ₁ = sin⁻¹(0.866) ≈ 60°</p>
            <p className="mb-2 mt-2">Step 2: Find the obtuse angle</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm">θ₂ = 180° - 60° = 120°</p>
            <p className="mt-2 font-semibold">Solutions: θ = 60° or θ = 120°</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded border-l-4 border-orange-500 mt-6">
          <p className="font-bold mb-2">Key Takeaways:</p>
          <ul className="space-y-1">
            <li>• Obtuse angles range from 90° to 180°</li>
            <li>• Use ASTC to remember signs: All-Sine-Tan-Cosine</li>
            <li>• In Quadrant II (90°-180°): sine is positive, cosine and tangent are negative</li>
            <li>• Use 180° - θ to find the related acute angle</li>
            <li>• Many trig equations have both acute and obtuse solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ObtuseAngles;
