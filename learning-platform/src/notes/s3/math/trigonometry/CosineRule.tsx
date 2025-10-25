

const CosineRule = () => {
  const CosineRuleDiagram = () => (
    <svg width="350" height="280" className="mx-auto">
      {/* Triangle */}
      <polygon points="80,220 300,220 200,80" fill="#fce7f3" stroke="#333" strokeWidth="2" />

      {/* Vertices labels */}
      <text x="75" y="240" className="text-base font-bold">A</text>
      <text x="305" y="240" className="text-base font-bold">B</text>
      <text x="195" y="70" className="text-base font-bold">C</text>

      {/* Side labels */}
      <text x="255" y="150" className="text-sm font-semibold fill-purple-600">a</text>
      <text x="130" y="150" className="text-sm font-semibold fill-purple-600">b</text>
      <text x="185" y="245" className="text-sm font-semibold fill-red-600">c</text>

      {/* Angle C highlighted */}
      <path d="M 200 100 A 20 20 0 0 1 218 108" fill="none" stroke="#ef4444" strokeWidth="3" />
      <text x="215" y="100" className="text-sm fill-red-600 font-bold">C</text>

      {/* Formula */}
      <text x="70" y="25" className="text-sm font-semibold">c² = a² + b² - 2ab cos C</text>
    </svg>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">7. Cosine Rule</h1>
        <p className="text-lg">Using the cosine rule to solve non-right-angled triangles</p>
      </div>

      <div className="space-y-6">
        <div>
          <p className="mb-4">The cosine rule (or law of cosines) is used when the sine rule doesn't work. It's particularly useful when you know three sides or two sides and the included angle.</p>

          <CosineRuleDiagram />

          <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-lg mb-4">
            <p className="text-2xl font-bold mb-3 text-center">The Cosine Rule</p>
            <p className="text-xl mb-2 text-center">c² = a² + b² - 2ab cos C</p>
            <p className="text-sm text-center mb-3">or rearranged to find an angle:</p>
            <p className="text-xl text-center">cos C = (a² + b² - c²) / 2ab</p>
          </div>

          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500 mb-4">
            <p className="font-semibold mb-2">When to Use Cosine Rule:</p>
            <p className="mb-2">Use the cosine rule when you have:</p>
            <ul className="space-y-1">
              <li>• Three sides (SSS) - to find any angle</li>
              <li>• Two sides and the included angle (SAS) - to find the third side</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded mb-4">
            <p className="font-bold mb-2">Pythagoras' Theorem as a Special Case:</p>
            <p className="mb-2">When angle C = 90°, we have cos 90° = 0, so the formula becomes:</p>
            <p className="font-mono text-center bg-white p-2 rounded">c² = a² + b² - 2ab(0) = a² + b²</p>
            <p className="mt-2 text-sm italic">This is Pythagoras' theorem! The cosine rule is a generalization that works for all triangles.</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">7.1 Finding a Side (SAS)</h3>

          <div className="bg-white p-4 rounded border border-gray-300 mb-4">
            <p className="font-semibold mb-2">Example 1: Finding a Side (SAS)</p>
            <p className="mb-2">In triangle ABC, a = 7 cm, b = 9 cm, angle C = 60°. Find side c.</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm">c² = a² + b² - 2ab cos C</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">c² = 7² + 9² - 2(7)(9) cos 60°</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">c² = 49 + 81 - 126(0.5)</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">c² = 130 - 63 = 67</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">c ≈ 8.19 cm</p>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <p className="font-semibold mb-2">Steps to find a side:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Identify the two given sides (a and b) and included angle (C)</li>
              <li>Substitute into c² = a² + b² - 2ab cos C</li>
              <li>Calculate carefully with correct order of operations</li>
              <li>Take the square root to find c</li>
              <li>Check answer is reasonable</li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">7.2 Finding an Angle (SSS)</h3>

          <div className="bg-white p-4 rounded border border-gray-300 mb-4">
            <p className="font-semibold mb-2">Example 2: Finding an Angle (SSS)</p>
            <p className="mb-2">In triangle ABC, a = 8 cm, b = 11 cm, c = 13 cm. Find angle C.</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm">cos C = (a² + b² - c²) / 2ab</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">cos C = (8² + 11² - 13²) / (2 × 8 × 11)</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">cos C = (64 + 121 - 169) / 176</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">cos C = 16 / 176 ≈ 0.091</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">C = cos⁻¹(0.091) ≈ 84.8°</p>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <p className="font-semibold mb-2">Steps to find an angle:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Rearrange: cos C = (a² + b² - c²) / 2ab</li>
              <li>Substitute the three known sides</li>
              <li>Calculate the cosine value</li>
              <li>Note: negative cosine → obtuse angle</li>
              <li>Use cos⁻¹ to find the angle</li>
              <li>Verify answer makes sense (0° &lt; C &lt; 180°)</li>
            </ol>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mt-4">
            <p className="font-bold mb-2">Understanding the Sign of cos C:</p>
            <p className="mb-1">• If cos C &gt; 0 → C is acute (0° &lt; C &lt; 90°)</p>
            <p className="mb-1">• If cos C = 0 → C is a right angle (C = 90°)</p>
            <p>• If cos C &lt; 0 → C is obtuse (90° &lt; C &lt; 180°)</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">7.3 All Three Forms</h3>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-red-50 p-4 rounded border-2 border-red-300">
              <p className="text-center text-lg font-bold mb-2">For side a</p>
              <p className="text-center text-sm font-mono">a² = b² + c² - 2bc cos A</p>
            </div>
            <div className="bg-blue-50 p-4 rounded border-2 border-blue-300">
              <p className="text-center text-lg font-bold mb-2">For side b</p>
              <p className="text-center text-sm font-mono">b² = a² + c² - 2ac cos B</p>
            </div>
            <div className="bg-purple-50 p-4 rounded border-2 border-purple-300">
              <p className="text-center text-lg font-bold mb-2">For side c</p>
              <p className="text-center text-sm font-mono">c² = a² + b² - 2ab cos C</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">7.4 Choosing Between Sine and Cosine Rule</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-gray-300">
              <thead>
                <tr className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                  <th className="border border-gray-300 p-3">What You Know</th>
                  <th className="border border-gray-300 p-3">Which Rule to Use</th>
                  <th className="border border-gray-300 p-3">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">AAS or ASA<br/>(2 angles + 1 side)</td>
                  <td className="border border-gray-300 p-3 text-center">Sine Rule</td>
                  <td className="border border-gray-300 p-3 text-sm">A=40°, B=60°, a=8</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">SSA<br/>(2 sides + non-included angle)</td>
                  <td className="border border-gray-300 p-3 text-center">Sine Rule</td>
                  <td className="border border-gray-300 p-3 text-sm">a=7, b=9, A=35°</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">SAS<br/>(2 sides + included angle)</td>
                  <td className="border border-gray-300 p-3 text-center">Cosine Rule</td>
                  <td className="border border-gray-300 p-3 text-sm">a=7, b=9, C=60°</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">SSS<br/>(3 sides)</td>
                  <td className="border border-gray-300 p-3 text-center">Cosine Rule</td>
                  <td className="border border-gray-300 p-3 text-sm">a=8, b=11, c=13</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded border-l-4 border-pink-500 mt-6">
          <p className="font-bold mb-2">Key Takeaways:</p>
          <ul className="space-y-1">
            <li>• Cosine rule: c² = a² + b² - 2ab cos C</li>
            <li>• Use for SAS (two sides + included angle) or SSS (three sides)</li>
            <li>• To find angle: cos C = (a² + b² - c²) / 2ab</li>
            <li>• Generalizes Pythagoras: when C=90°, becomes c² = a² + b²</li>
            <li>• Negative cosine → obtuse angle</li>
            <li>• Choose sine rule for AAS, ASA, SSA</li>
            <li>• Choose cosine rule for SAS, SSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CosineRule;
