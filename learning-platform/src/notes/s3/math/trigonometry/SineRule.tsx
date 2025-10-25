

const SineRule = () => {
  const SineRuleDiagram = () => (
    <svg width="350" height="280" className="mx-auto">
      {/* Triangle */}
      <polygon points="80,220 300,220 180,60" fill="#fef3c7" stroke="#333" strokeWidth="2" />

      {/* Vertices labels */}
      <text x="75" y="240" className="text-base font-bold">A</text>
      <text x="305" y="240" className="text-base font-bold">B</text>
      <text x="175" y="50" className="text-base font-bold">C</text>

      {/* Side labels (lowercase) */}
      <text x="245" y="140" className="text-sm font-semibold fill-blue-600">a</text>
      <text x="120" y="140" className="text-sm font-semibold fill-blue-600">b</text>
      <text x="185" y="245" className="text-sm font-semibold fill-blue-600">c</text>

      {/* Angles */}
      <path d="M 100 220 A 20 20 0 0 0 88 205" fill="none" stroke="#ef4444" strokeWidth="2" />
      <path d="M 280 220 A 20 20 0 0 1 292 205" fill="none" stroke="#ef4444" strokeWidth="2" />
      <path d="M 180 80 A 20 20 0 0 1 195 88" fill="none" stroke="#ef4444" strokeWidth="2" />

      {/* Formula */}
      <text x="80" y="25" className="text-sm font-semibold">a/sin A = b/sin B = c/sin C</text>
    </svg>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">6. Sine Rule</h1>
        <p className="text-lg">Using the sine rule to solve non-right-angled triangles</p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">6.1 Investigation Activity</h3>
          <div className="bg-green-50 p-4 rounded mb-4">
            <p className="font-semibold mb-2">Discovery Exercise:</p>
            <p className="mb-2">Draw any triangle and label it with vertices A, B, C and opposite sides a, b, c.</p>
            <p className="mb-2">Measure all three angles and all three sides carefully.</p>
            <p className="mb-2">Calculate the ratios: a/sin A, b/sin B, and c/sin C</p>
            <p className="font-semibold text-green-700">What do you notice? These ratios are equal!</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">6.2 The Sine Rule (Law of Sines)</h3>
          <p className="mb-4">The sine rule relates the sides of a triangle to the sines of their opposite angles. It works for ALL triangles, not just right-angled ones.</p>

          <SineRuleDiagram />

          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 p-6 rounded-lg text-center mb-4">
            <p className="text-2xl font-bold mb-3">The Sine Rule</p>
            <p className="text-xl mb-2">a/sin A = b/sin B = c/sin C</p>
            <p className="text-sm">or equivalently</p>
            <p className="text-xl mt-2">sin A/a = sin B/b = sin C/c</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-semibold mb-2">When to Use Sine Rule:</p>
              <p className="text-sm mb-2">Use the sine rule when you have:</p>
              <ul className="space-y-1 text-sm">
                <li>• Two angles and one side (AAS or ASA)</li>
                <li>• Two sides and a non-included angle (SSA)</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded">
              <p className="font-semibold mb-2">Important Note:</p>
              <p className="text-sm">The SSA case can sometimes have two possible solutions (ambiguous case). Always check if both acute and obtuse angles are possible.</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300 mb-4">
            <p className="font-semibold mb-2">Example 1: Finding a Side</p>
            <p className="mb-2">In triangle ABC, angle A = 40°, angle B = 65°, side a = 8 cm. Find side b.</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm">a/sin A = b/sin B</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">8/sin 40° = b/sin 65°</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">b = (8 × sin 65°) / sin 40°</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">b ≈ 11.3 cm</p>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300">
            <p className="font-semibold mb-2">Example 2: Finding an Angle</p>
            <p className="mb-2">In triangle ABC, side a = 12 cm, side b = 15 cm, angle A = 35°. Find angle B.</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm">a/sin A = b/sin B</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">12/sin 35° = 15/sin B</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">sin B = (15 × sin 35°) / 12</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">sin B ≈ 0.717</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">B ≈ 45.8° (or 134.2° - check which is valid)</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">6.3 The Ambiguous Case (SSA)</h3>

          <div className="bg-red-50 p-4 rounded border-l-4 border-red-500 mb-4">
            <p className="font-bold mb-2">Warning: The SSA Case</p>
            <p className="mb-2">When you know two sides and a non-included angle (SSA), there can be TWO possible triangles!</p>
            <p className="text-sm">This is because sin θ and sin(180° - θ) are equal.</p>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300">
            <p className="font-semibold mb-2">Example: Ambiguous Case</p>
            <p className="mb-2">Given: a = 7 cm, b = 8 cm, angle A = 30°. Find angle B.</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm">sin B = (8 × sin 30°) / 7</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">sin B ≈ 0.571</p>
            <p className="font-semibold mt-2 mb-1">Two possible solutions:</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm">B₁ = sin⁻¹(0.571) ≈ 34.8° (acute)</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">B₂ = 180° - 34.8° ≈ 145.2° (obtuse)</p>
            <p className="text-sm mt-2 italic">Check: Does A + B + C = 180° for both solutions?</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">6.4 Step-by-Step Strategy</h3>

          <div className="bg-blue-50 p-4 rounded">
            <p className="font-semibold mb-2">To solve a triangle using the sine rule:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Draw and label the triangle with given information</li>
              <li>Identify what you know and what you need to find</li>
              <li>Choose the correct form of sine rule: a/sin A = b/sin B</li>
              <li>Substitute known values</li>
              <li>Rearrange and solve for the unknown</li>
              <li>For SSA cases, check for two possible solutions</li>
              <li>Verify: check if angles sum to 180°</li>
            </ol>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded border-l-4 border-yellow-500 mt-6">
          <p className="font-bold mb-2">Key Takeaways:</p>
          <ul className="space-y-1">
            <li>• Sine rule: a/sin A = b/sin B = c/sin C</li>
            <li>• Use when you have: AAS, ASA, or SSA</li>
            <li>• Each side is opposite to its corresponding angle (a is opposite A, etc.)</li>
            <li>• SSA case may have two solutions (ambiguous case)</li>
            <li>• Always verify: A + B + C = 180°</li>
            <li>• Works for ALL triangles (not just right-angled)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SineRule;
