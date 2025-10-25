

const AngleCentre = () => {
  const AngleCentreVisualizer = () => {
    const centerX = 200;
    const centerY = 150;
    const radius = 80;

    const angleA = -140;
    const angleB = -40;
    const angleC = 100;

    const A = {
      x: centerX + radius * Math.cos((angleA * Math.PI) / 180),
      y: centerY + radius * Math.sin((angleA * Math.PI) / 180)
    };
    const B = {
      x: centerX + radius * Math.cos((angleB * Math.PI) / 180),
      y: centerY + radius * Math.sin((angleB * Math.PI) / 180)
    };
    const C = {
      x: centerX + radius * Math.cos((angleC * Math.PI) / 180),
      y: centerY + radius * Math.sin((angleC * Math.PI) / 180)
    };

    return (
      <svg width="400" height="300" className="mx-auto">
        <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#333" strokeWidth="2" />

        <path
          d={`M ${A.x} ${A.y} A ${radius} ${radius} 0 0 1 ${B.x} ${B.y}`}
          fill="none"
          stroke="#fbbf24"
          strokeWidth="4"
        />

        <line x1={centerX} y1={centerY} x2={A.x} y2={A.y} stroke="#ef4444" strokeWidth="2.5" />
        <line x1={centerX} y1={centerY} x2={B.x} y2={B.y} stroke="#ef4444" strokeWidth="2.5" />

        <line x1={C.x} y1={C.y} x2={A.x} y2={A.y} stroke="#2563eb" strokeWidth="2.5" />
        <line x1={C.x} y1={C.y} x2={B.x} y2={B.y} stroke="#2563eb" strokeWidth="2.5" />

        {/* Angle at centre (2θ) */}
        {(() => {
          const arcRadius = 30;
          const startX = centerX + arcRadius * Math.cos((angleA * Math.PI) / 180);
          const startY = centerY + arcRadius * Math.sin((angleA * Math.PI) / 180);
          const endX = centerX + arcRadius * Math.cos((angleB * Math.PI) / 180);
          const endY = centerY + arcRadius * Math.sin((angleB * Math.PI) / 180);

          // Calculate if we need large arc flag
          const angleDiff = angleB - angleA;
          const largeArcFlag = Math.abs(angleDiff) > 180 ? 1 : 0;

          return (
            <>
              <path
                d={`M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
              />
              <text x={centerX - 15} y={centerY - 35} className="text-base font-bold text-red-600">2θ</text>
            </>
          );
        })()}

        {/* Angle at circumference (θ) */}
        {(() => {
          const arcRadius = 25;

          // Direction from C to A
          const dxCA = A.x - C.x;
          const dyCA = A.y - C.y;
          const angleCA = Math.atan2(dyCA, dxCA);

          // Direction from C to B
          const dxCB = B.x - C.x;
          const dyCB = B.y - C.y;
          const angleCB = Math.atan2(dyCB, dxCB);

          const startX = C.x + arcRadius * Math.cos(angleCA);
          const startY = C.y + arcRadius * Math.sin(angleCA);
          const endX = C.x + arcRadius * Math.cos(angleCB);
          const endY = C.y + arcRadius * Math.sin(angleCB);

          // Calculate angle difference
          let angleDiff = angleCB - angleCA;
          if (angleDiff < 0) angleDiff += 2 * Math.PI;
          const largeArcFlag = angleDiff > Math.PI ? 1 : 0;

          // Calculate label position (midpoint of arc)
          const midAngle = angleCA + angleDiff / 2;
          const labelX = C.x + (arcRadius + 15) * Math.cos(midAngle);
          const labelY = C.y + (arcRadius + 15) * Math.sin(midAngle);

          return (
            <>
              <path
                d={`M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
              />
              <text x={labelX - 8} y={labelY + 5} className="text-base font-bold text-blue-600">θ</text>
            </>
          );
        })()}

        <circle cx={centerX} cy={centerY} r="4" fill="#666" />
        <circle cx={A.x} cy={A.y} r="4" fill="#333" />
        <circle cx={B.x} cy={B.y} r="4" fill="#333" />
        <circle cx={C.x} cy={C.y} r="4" fill="#333" />

        <text x={centerX - 10} y={centerY + 20} className="text-base font-bold">O</text>
        <text x={A.x - 20} y={A.y - 10} className="text-base font-bold">A</text>
        <text x={B.x + 10} y={B.y - 10} className="text-base font-bold">B</text>
        <text x={C.x - 10} y={C.y + 20} className="text-base font-bold">C</text>

        <text x={centerX - 50} y={centerY + 120} className="text-sm text-yellow-600 font-semibold">Arc AB</text>
      </svg>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Angle at the Centre Theorem</h1>
        <p className="text-lg">The fundamental relationship between central and inscribed angles</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800">The Theorem</h2>

          <div className="bg-orange-50 p-6 rounded-lg border-4 border-orange-400 mb-6">
            <p className="text-xl font-bold text-center text-orange-900 mb-4">
              The angle subtended by an arc at the centre is twice the angle subtended by the same arc at any point on the remaining part of the circumference
            </p>
            <p className="text-center text-lg font-mono">∠AOB = 2 × ∠ACB</p>
            <p className="text-center text-sm mt-2">(where both angles are subtended by arc AB)</p>
          </div>

          <AngleCentreVisualizer />

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mt-6">
            <p className="font-bold mb-2">Key Points:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>∠AOB is the <strong>angle at the centre</strong></li>
              <li>∠ACB is the <strong>angle at the circumference</strong></li>
              <li>Both angles are subtended by the <strong>same arc AB</strong></li>
              <li>C can be anywhere on the major arc (opposite side from centre)</li>
              <li>The relationship is always: <strong>centre angle = 2 × circumference angle</strong></li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800">Proof of the Theorem</h2>

          <div className="bg-white p-6 rounded-lg border-2 border-purple-300">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Proof Using Isosceles Triangles</h3>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded">
                <p className="font-bold text-purple-800">Step 1: Draw radius OC</p>
                <p>Connect O to C to create two isosceles triangles</p>
                <p className="text-sm mt-1">OA = OB = OC (all radii)</p>
              </div>

              <div className="bg-purple-50 p-4 rounded">
                <p className="font-bold text-purple-800">Step 2: Identify isosceles triangles</p>
                <p>△OAC: OA = OC → ∠OAC = ∠OCA = α (let's call it)</p>
                <p>△OBC: OB = OC → ∠OBC = ∠OCB = β (let's call it)</p>
              </div>

              <div className="bg-purple-50 p-4 rounded">
                <p className="font-bold text-purple-800">Step 3: Apply exterior angle theorem</p>
                <p>In △OAC: ∠AOC = exterior angle</p>
                <p>Exterior angle = sum of opposite interior angles</p>
                <p>∠AOC = α + α = 2α</p>
                <p className="mt-2">Similarly in △OBC:</p>
                <p>∠BOC = β + β = 2β</p>
              </div>

              <div className="bg-purple-50 p-4 rounded">
                <p className="font-bold text-purple-800">Step 4: Add the angles</p>
                <p>∠AOB = ∠AOC + ∠BOC</p>
                <p>∠AOB = 2α + 2β</p>
                <p>∠AOB = 2(α + β)</p>
              </div>

              <div className="bg-green-50 p-4 rounded border-2 border-green-400">
                <p className="font-bold text-green-800">Conclusion:</p>
                <p>But α + β = ∠ACB (angle at circumference)</p>
                <p className="text-lg font-bold mt-2">∴ ∠AOB = 2 × ∠ACB ✓</p>
                <p className="mt-2">The angle at centre is twice the angle at circumference!</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800">Worked Examples</h2>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300 mb-4">
            <h3 className="font-bold text-lg mb-3">Example 1: Finding angle at centre</h3>
            <p className="mb-3"><strong>Problem:</strong> Arc AB subtends ∠ACB = 35° at the circumference. Find ∠AOB.</p>

            <div className="bg-blue-50 p-4 rounded mb-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p>Using the theorem: ∠AOB = 2 × ∠ACB</p>
              <p>∠AOB = 2 × 35°</p>
              <p><strong>∠AOB = 70°</strong></p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300 mb-4">
            <h3 className="font-bold text-lg mb-3">Example 2: Finding angle at circumference</h3>
            <p className="mb-3"><strong>Problem:</strong> In a circle with centre O, ∠AOB = 140°. Point C is on the major arc AB. Find ∠ACB.</p>

            <div className="bg-blue-50 p-4 rounded mb-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p>Using the theorem: ∠AOB = 2 × ∠ACB</p>
              <p>140° = 2 × ∠ACB</p>
              <p>∠ACB = 140° ÷ 2</p>
              <p><strong>∠ACB = 70°</strong></p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300">
            <h3 className="font-bold text-lg mb-3">Example 3: Using reflex angles</h3>
            <p className="mb-3"><strong>Problem:</strong> ∠AOB = 240° (reflex). Point C is on the minor arc. Find ∠ACB.</p>

            <div className="bg-blue-50 p-4 rounded mb-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p>For the minor arc, use the non-reflex angle:</p>
              <p>Non-reflex ∠AOB = 360° - 240° = 120°</p>
              <p className="mt-2">Using the theorem:</p>
              <p>∠ACB = 120° ÷ 2</p>
              <p><strong>∠ACB = 60°</strong></p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-400">
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">Connection to Angle in Semi-circle</h2>
          <p className="mb-3">The angle in semi-circle theorem is a special case of this theorem!</p>
          <div className="bg-white p-4 rounded">
            <p className="mb-2">When AB is a diameter:</p>
            <p>• ∠AOB = 180° (straight line)</p>
            <p>• ∠ACB = 180° ÷ 2 = 90°</p>
            <p className="mt-3 font-semibold text-indigo-800">This proves the angle in semi-circle is 90°!</p>
          </div>
        </div>

        <div className="bg-pink-50 p-6 rounded-lg border-2 border-pink-400">
          <h2 className="text-2xl font-bold mb-4 text-pink-800">Important Notes</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">★</span>
              <span>The point C must be on the <strong>opposite side</strong> of the arc from the centre</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">★</span>
              <span>If C moves along the circumference (same side of AB), ∠ACB stays constant</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">★</span>
              <span>This theorem is the foundation for angles in the same segment</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Practice Problems</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>Arc PQ subtends ∠PRQ = 42° at the circumference. Find ∠POQ.</li>
            <li>In a circle with centre O, ∠AOB = 156°. Find the angle subtended by arc AB at any point C on the major arc.</li>
            <li>∠XOY = 100°. Point Z is on the circumference. If ∠XZY is on the minor arc, find ∠XZY.</li>
            <li>Prove that if ∠AOB = 180°, then ∠ACB = 90° (angle in semi-circle).</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AngleCentre;
