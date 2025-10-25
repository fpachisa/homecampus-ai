

const AngleSameArc = () => {
  const SameArcVisualizer = () => {
    const centerX = 200;
    const centerY = 150;
    const radius = 80;

    const angleA = -140;
    const angleB = -40;
    const angleC = 90;
    const angleD = 120;

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
    const D = {
      x: centerX + radius * Math.cos((angleD * Math.PI) / 180),
      y: centerY + radius * Math.sin((angleD * Math.PI) / 180)
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

        <line x1={C.x} y1={C.y} x2={A.x} y2={A.y} stroke="#2563eb" strokeWidth="2.5" />
        <line x1={C.x} y1={C.y} x2={B.x} y2={B.y} stroke="#2563eb" strokeWidth="2.5" />

        <line x1={D.x} y1={D.y} x2={A.x} y2={A.y} stroke="#2563eb" strokeWidth="2.5" />
        <line x1={D.x} y1={D.y} x2={B.x} y2={B.y} stroke="#2563eb" strokeWidth="2.5" />

        {/* Angle at C (θ) */}
        {(() => {
          const arcRadius = 20;

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
                stroke="#ef4444"
                strokeWidth="2"
              />
              <text x={labelX - 5} y={labelY + 5} className="text-base font-bold text-red-600">θ</text>
            </>
          );
        })()}

        {/* Angle at D (θ) */}
        {(() => {
          const arcRadius = 20;

          // Direction from D to A
          const dxDA = A.x - D.x;
          const dyDA = A.y - D.y;
          const angleDA = Math.atan2(dyDA, dxDA);

          // Direction from D to B
          const dxDB = B.x - D.x;
          const dyDB = B.y - D.y;
          const angleDB = Math.atan2(dyDB, dxDB);

          const startX = D.x + arcRadius * Math.cos(angleDA);
          const startY = D.y + arcRadius * Math.sin(angleDA);
          const endX = D.x + arcRadius * Math.cos(angleDB);
          const endY = D.y + arcRadius * Math.sin(angleDB);

          // Calculate angle difference
          let angleDiff = angleDB - angleDA;
          if (angleDiff < 0) angleDiff += 2 * Math.PI;
          const largeArcFlag = angleDiff > Math.PI ? 1 : 0;

          // Calculate label position (midpoint of arc)
          const midAngle = angleDA + angleDiff / 2;
          const labelX = D.x + (arcRadius + 15) * Math.cos(midAngle);
          const labelY = D.y + (arcRadius + 15) * Math.sin(midAngle);

          return (
            <>
              <path
                d={`M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
              />
              <text x={labelX - 5} y={labelY + 5} className="text-base font-bold text-red-600">θ</text>
            </>
          );
        })()}

        <circle cx={centerX} cy={centerY} r="3" fill="#666" />
        <circle cx={A.x} cy={A.y} r="4" fill="#333" />
        <circle cx={B.x} cy={B.y} r="4" fill="#333" />
        <circle cx={C.x} cy={C.y} r="4" fill="#333" />
        <circle cx={D.x} cy={D.y} r="4" fill="#333" />

        <text x={centerX - 10} y={centerY + 20} className="text-sm font-bold">O</text>
        <text x={A.x - 20} y={A.y - 10} className="text-base font-bold">A</text>
        <text x={B.x + 10} y={B.y - 10} className="text-base font-bold">B</text>
        <text x={C.x - 10} y={C.y + 20} className="text-base font-bold">C</text>
        <text x={D.x - 25} y={D.y + 5} className="text-base font-bold">D</text>

        <text x={centerX - 50} y={centerY + 120} className="text-sm text-yellow-600 font-semibold">Same Arc AB</text>
        <text x={centerX + 30} y={centerY + 80} className="text-sm text-blue-600 font-semibold">∠ACB = ∠ADB</text>
      </svg>
    );
  };

  const CyclicQuadVisualizer = () => {
    const centerX = 200;
    const centerY = 150;
    const radius = 75;

    // Create an irregular quadrilateral
    const P = { x: centerX + radius * Math.cos((140 * Math.PI) / 180), y: centerY + radius * Math.sin((140 * Math.PI) / 180) };
    const Q = { x: centerX + radius * Math.cos((20 * Math.PI) / 180), y: centerY + radius * Math.sin((20 * Math.PI) / 180) };
    const R = { x: centerX + radius * Math.cos((-70 * Math.PI) / 180), y: centerY + radius * Math.sin((-70 * Math.PI) / 180) };
    const S = { x: centerX + radius * Math.cos((200 * Math.PI) / 180), y: centerY + radius * Math.sin((200 * Math.PI) / 180) };

    return (
      <svg width="400" height="300" className="mx-auto">
        <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#333" strokeWidth="2" />

        <polygon
          points={`${P.x},${P.y} ${Q.x},${Q.y} ${R.x},${R.y} ${S.x},${S.y}`}
          fill="rgba(147, 51, 234, 0.1)"
          stroke="#9333ea"
          strokeWidth="2.5"
        />

        <circle cx={P.x} cy={P.y} r="4" fill="#333" />
        <circle cx={Q.x} cy={Q.y} r="4" fill="#333" />
        <circle cx={R.x} cy={R.y} r="4" fill="#333" />
        <circle cx={S.x} cy={S.y} r="4" fill="#333" />
        <circle cx={centerX} cy={centerY} r="3" fill="#666" />

        <text x={P.x - 25} y={P.y - 5} className="text-base font-bold">P</text>
        <text x={Q.x + 12} y={Q.y - 5} className="text-base font-bold">Q</text>
        <text x={R.x + 18} y={R.y + 5} className="text-base font-bold">R</text>
        <text x={S.x - 25} y={S.y + 15} className="text-base font-bold">S</text>
        <text x={centerX - 18} y={centerY + 5} className="text-sm">O</text>

        <text x={centerX - 70} y={centerY + 100} className="text-sm font-semibold text-purple-700">∠P + ∠R = 180°</text>
        <text x={centerX - 70} y={centerY + 115} className="text-sm font-semibold text-purple-700">∠Q + ∠S = 180°</text>
      </svg>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Angles Subtended by the Same Arc</h1>
        <p className="text-lg">Exploring angles in the same segment and cyclic quadrilaterals</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Theorem: Angles in the Same Segment</h2>

          <div className="bg-purple-50 p-6 rounded-lg border-4 border-purple-400 mb-6">
            <p className="text-xl font-bold text-center text-purple-900 mb-4">
              Angles in the same segment of a circle are equal
            </p>
            <p className="text-center text-lg">If ∠ACB and ∠ADB are in the same segment, then ∠ACB = ∠ADB</p>
          </div>

          <SameArcVisualizer />

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mt-6">
            <p className="font-bold mb-2">Understanding "Same Segment":</p>
            <ul className="list-disc list-inside space-y-1">
              <li>A <strong>segment</strong> is the region between a chord and its arc</li>
              <li>Points C and D are in the <strong>same segment</strong> (same side of chord AB)</li>
              <li>Both angles are subtended by the <strong>same arc AB</strong></li>
              <li>The angles will <strong>always be equal</strong>, no matter where C and D are in that segment</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Proof Using Angle at Centre</h2>

          <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Simple Proof</h3>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <p className="font-bold text-blue-800">Step 1: Use angle at centre theorem</p>
                <p>Both ∠ACB and ∠ADB are subtended by arc AB</p>
                <p className="mt-2">∠AOB = 2 × ∠ACB (angle at centre theorem)</p>
                <p>∠AOB = 2 × ∠ADB (angle at centre theorem)</p>
              </div>

              <div className="bg-blue-50 p-4 rounded">
                <p className="font-bold text-blue-800">Step 2: Since both equal 2 × the same central angle</p>
                <p>2 × ∠ACB = 2 × ∠ADB</p>
              </div>

              <div className="bg-green-50 p-4 rounded border-2 border-green-400">
                <p className="font-bold text-green-800">Conclusion:</p>
                <p className="text-lg font-bold mt-2">∴ ∠ACB = ∠ADB ✓</p>
                <p className="mt-2">Angles in the same segment are equal!</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Cyclic Quadrilaterals</h2>

          <div className="bg-pink-50 p-6 rounded-lg border-4 border-pink-400 mb-6">
            <p className="text-xl font-bold text-center text-pink-900 mb-4">
              Opposite angles of a cyclic quadrilateral add up to 180°
            </p>
            <p className="text-center text-lg">∠P + ∠R = 180° and ∠Q + ∠S = 180°</p>
            <p className="text-center text-sm mt-2">(A cyclic quadrilateral has all four vertices on a circle)</p>
          </div>

          <CyclicQuadVisualizer />

          <div className="bg-indigo-50 p-4 rounded border-l-4 border-indigo-500 mt-6">
            <p className="font-bold mb-2">What is a Cyclic Quadrilateral?</p>
            <p>A quadrilateral whose four vertices all lie on the circumference of a circle.</p>
            <p className="mt-2 text-sm">Also called: <strong>inscribed quadrilateral</strong> or <strong>concyclic quadrilateral</strong></p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Proof of Cyclic Quadrilateral Property</h2>

          <div className="bg-white p-6 rounded-lg border-2 border-purple-300">
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded">
                <p className="font-bold text-purple-800">Consider quadrilateral PQRS inscribed in a circle</p>
                <p>Arc PQR subtends ∠PSR at S</p>
                <p>Arc PQR also subtends ∠POR at centre O (reflex angle)</p>
              </div>

              <div className="bg-purple-50 p-4 rounded">
                <p className="font-bold text-purple-800">Using angle at centre theorem</p>
                <p>Reflex ∠POR = 2 × ∠PSR</p>
                <p>Non-reflex ∠POR = 360° - (2 × ∠PSR) = 360° - 2∠PSR</p>
              </div>

              <div className="bg-purple-50 p-4 rounded">
                <p className="font-bold text-purple-800">For the opposite angle ∠PQR</p>
                <p>Non-reflex ∠POR = 2 × ∠PQR</p>
                <p>So: 360° - 2∠PSR = 2∠PQR</p>
                <p>180° - ∠PSR = ∠PQR</p>
              </div>

              <div className="bg-green-50 p-4 rounded border-2 border-green-400">
                <p className="font-bold text-green-800">Therefore:</p>
                <p className="text-lg font-bold mt-2">∠PQR + ∠PSR = 180° ✓</p>
                <p className="mt-2">Similarly for the other pair of opposite angles!</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Worked Examples</h2>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300 mb-4">
            <h3 className="font-bold text-lg mb-3">Example 1: Angles in same segment</h3>
            <p className="mb-3"><strong>Problem:</strong> Points C and D are in the same segment. If ∠ACB = 48°, find ∠ADB.</p>

            <div className="bg-blue-50 p-4 rounded mb-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p>Since C and D are in the same segment:</p>
              <p>∠ADB = ∠ACB (angles in same segment are equal)</p>
              <p><strong>∠ADB = 48°</strong></p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300 mb-4">
            <h3 className="font-bold text-lg mb-3">Example 2: Cyclic quadrilateral</h3>
            <p className="mb-3"><strong>Problem:</strong> ABCD is a cyclic quadrilateral. If ∠A = 85° and ∠B = 70°, find ∠C and ∠D.</p>

            <div className="bg-blue-50 p-4 rounded mb-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p>Opposite angles sum to 180°:</p>
              <p className="mt-2">∠A + ∠C = 180°</p>
              <p>85° + ∠C = 180°</p>
              <p><strong>∠C = 95°</strong></p>
              <p className="mt-3">∠B + ∠D = 180°</p>
              <p>70° + ∠D = 180°</p>
              <p><strong>∠D = 110°</strong></p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300">
            <h3 className="font-bold text-lg mb-3">Example 3: Finding if quadrilateral is cyclic</h3>
            <p className="mb-3"><strong>Problem:</strong> In quadrilateral PQRS, ∠P = 92° and ∠R = 88°. Can PQRS be cyclic?</p>

            <div className="bg-blue-50 p-4 rounded mb-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p>For PQRS to be cyclic, opposite angles must sum to 180°</p>
              <p className="mt-2">Check: ∠P + ∠R = 92° + 88° = 180° ✓</p>
              <p className="mt-2"><strong>Yes, PQRS can be cyclic</strong></p>
              <p className="text-sm mt-2">(Provided ∠Q + ∠S also equals 180°)</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-400">
          <h2 className="text-2xl font-bold mb-4 text-orange-800">Exterior Angle Property</h2>
          <p className="mb-3 font-semibold">The exterior angle of a cyclic quadrilateral equals the opposite interior angle</p>
          <div className="bg-white p-4 rounded">
            <p>If we extend side PQ of cyclic quadrilateral PQRS:</p>
            <p className="mt-2">Exterior angle at Q = ∠S (opposite interior angle)</p>
            <p className="text-sm mt-2 text-gray-600">This is because exterior angle + ∠Q = 180° and ∠Q + ∠S = 180°</p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Practice Problems</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>Points X and Y are in the same segment. If ∠AXB = 62°, find ∠AYB.</li>
            <li>WXYZ is a cyclic quadrilateral. If ∠W = 3x and ∠Y = 2x + 20°, find x.</li>
            <li>Prove that if opposite angles of a quadrilateral sum to 180°, then the quadrilateral is cyclic.</li>
            <li>In cyclic quadrilateral ABCD, ∠A = 2∠C. Find both angles.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AngleSameArc;
