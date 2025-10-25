

const TangentsExternal = () => {
  const TwoTangentsVisualizer = () => {
    const centerX = 200;
    const centerY = 180;
    const radius = 70;
    const externalX = 200;
    const externalY = 50;

    // Calculate tangent points correctly
    // Distance from external point to center
    const dx = externalX - centerX;
    const dy = externalY - centerY;
    const distOP = Math.sqrt(dx * dx + dy * dy);

    // Angle from O to P
    const angleOP = Math.atan2(dy, dx);

    // Angle between OP and tangent line (sin(alpha) = r / OP)
    const alpha = Math.asin(radius / distOP);

    // Tangent points are at angles: angleOP ± (90° - alpha)
    const angle1 = angleOP - (Math.PI / 2 - alpha);
    const angle2 = angleOP + (Math.PI / 2 - alpha);

    const T1 = {
      x: centerX + radius * Math.cos(angle1),
      y: centerY + radius * Math.sin(angle1)
    };

    const T2 = {
      x: centerX + radius * Math.cos(angle2),
      y: centerY + radius * Math.sin(angle2)
    };

    return (
      <svg width="400" height="300" className="mx-auto">
        <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#333" strokeWidth="2" />

        <line x1={externalX} y1={externalY} x2={T1.x} y2={T1.y} stroke="#22c55e" strokeWidth="3" />
        <line x1={externalX} y1={externalY} x2={T2.x} y2={T2.y} stroke="#22c55e" strokeWidth="3" />

        <line x1={centerX} y1={centerY} x2={T1.x} y2={T1.y} stroke="#ef4444" strokeWidth="2" strokeDasharray="4" />
        <line x1={centerX} y1={centerY} x2={T2.x} y2={T2.y} stroke="#ef4444" strokeWidth="2" strokeDasharray="4" />
        <line x1={centerX} y1={centerY} x2={externalX} y2={externalY} stroke="#666" strokeWidth="2" strokeDasharray="4" />

        {/* Right angle markers using direction vectors */}
        {(() => {
          const markerSize = 10;

          // For T1
          const dxOT1 = T1.x - centerX;
          const dyOT1 = T1.y - centerY;
          const lenOT1 = Math.sqrt(dxOT1 * dxOT1 + dyOT1 * dyOT1);
          const uxOT1 = (dxOT1 / lenOT1) * markerSize;
          const uyOT1 = (dyOT1 / lenOT1) * markerSize;

          const dxPT1 = T1.x - externalX;
          const dyPT1 = T1.y - externalY;
          const lenPT1 = Math.sqrt(dxPT1 * dxPT1 + dyPT1 * dyPT1);
          const uxPT1 = (dxPT1 / lenPT1) * markerSize;
          const uyPT1 = (dyPT1 / lenPT1) * markerSize;

          const p1T1 = { x: T1.x - uxOT1, y: T1.y - uyOT1 };
          const p2T1 = { x: p1T1.x - uxPT1, y: p1T1.y - uyPT1 };
          const p3T1 = { x: T1.x - uxPT1, y: T1.y - uyPT1 };

          // For T2
          const dxOT2 = T2.x - centerX;
          const dyOT2 = T2.y - centerY;
          const lenOT2 = Math.sqrt(dxOT2 * dxOT2 + dyOT2 * dyOT2);
          const uxOT2 = (dxOT2 / lenOT2) * markerSize;
          const uyOT2 = (dyOT2 / lenOT2) * markerSize;

          const dxPT2 = T2.x - externalX;
          const dyPT2 = T2.y - externalY;
          const lenPT2 = Math.sqrt(dxPT2 * dxPT2 + dyPT2 * dyPT2);
          const uxPT2 = (dxPT2 / lenPT2) * markerSize;
          const uyPT2 = (dyPT2 / lenPT2) * markerSize;

          const p1T2 = { x: T2.x - uxOT2, y: T2.y - uyOT2 };
          const p2T2 = { x: p1T2.x - uxPT2, y: p1T2.y - uyPT2 };
          const p3T2 = { x: T2.x - uxPT2, y: T2.y - uyPT2 };

          return (
            <>
              <path
                d={`M ${p1T1.x} ${p1T1.y} L ${p2T1.x} ${p2T1.y} L ${p3T1.x} ${p3T1.y}`}
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
              />
              <path
                d={`M ${p1T2.x} ${p1T2.y} L ${p2T2.x} ${p2T2.y} L ${p3T2.x} ${p3T2.y}`}
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
              />
            </>
          );
        })()}

        <circle cx={centerX} cy={centerY} r="4" fill="#666" />
        <circle cx={externalX} cy={externalY} r="4" fill="#2563eb" />
        <circle cx={T1.x} cy={T1.y} r="4" fill="#333" />
        <circle cx={T2.x} cy={T2.y} r="4" fill="#333" />

        <text x={centerX - 15} y={centerY + 5} className="text-base font-bold">O</text>
        <text x={externalX + 10} y={externalY - 5} className="text-base font-bold text-blue-600">P</text>
        <text x={T1.x - 25} y={T1.y + 5} className="text-base font-bold">T₁</text>
        <text x={T2.x + 10} y={T2.y + 5} className="text-base font-bold">T₂</text>

        <text x={externalX - 120} y={externalY + 60} className="text-sm text-green-600 font-semibold">PT₁ = PT₂</text>
      </svg>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Tangents from an External Point</h1>
        <p className="text-lg">The equal tangents theorem and its applications</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800">The Equal Tangents Theorem</h2>

          <div className="bg-emerald-50 p-6 rounded-lg border-4 border-emerald-400 mb-6">
            <p className="text-xl font-bold text-center text-emerald-900 mb-4">
              Tangents from an external point to a circle are equal in length
            </p>
            <p className="text-center text-lg">If PA and PB are tangents from point P, then PA = PB</p>
          </div>

          <TwoTangentsVisualizer />

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mt-6">
            <p className="font-bold mb-2">Key Setup:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>P is an <strong>external point</strong> (outside the circle)</li>
              <li>Two tangents are drawn from P</li>
              <li>They touch the circle at T₁ and T₂</li>
              <li>The tangent lengths PT₁ and PT₂ are <strong>always equal</strong></li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800">Proof of Equal Tangents</h2>

          <div className="bg-white p-6 rounded-lg border-2 border-purple-300">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Step-by-Step Proof</h3>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded">
                <p className="font-bold text-purple-800">Step 1: Draw radii</p>
                <p>Draw radii OT₁ and OT₂ to the points of tangency</p>
              </div>

              <div className="bg-purple-50 p-4 rounded">
                <p className="font-bold text-purple-800">Step 2: Identify right angles</p>
                <p>∠OT₁P = 90° (radius ⊥ tangent)</p>
                <p>∠OT₂P = 90° (radius ⊥ tangent)</p>
              </div>

              <div className="bg-purple-50 p-4 rounded">
                <p className="font-bold text-purple-800">Step 3: Consider triangles OT₁P and OT₂P</p>
                <p>In △OT₁P and △OT₂P:</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>OT₁ = OT₂ (both radii)</li>
                  <li>OP = OP (common side)</li>
                  <li>∠OT₁P = ∠OT₂P = 90°</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded">
                <p className="font-bold text-purple-800">Step 4: Apply RHS congruence</p>
                <p>By RHS (Right angle-Hypotenuse-Side):</p>
                <p className="font-semibold mt-2">△OT₁P ≅ △OT₂P</p>
              </div>

              <div className="bg-green-50 p-4 rounded border-2 border-green-400">
                <p className="font-bold text-green-800">Conclusion:</p>
                <p>Since the triangles are congruent:</p>
                <p className="text-lg font-bold mt-2">PT₁ = PT₂</p>
                <p className="mt-2">Therefore, tangents from an external point are equal! ✓</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800">Finding Tangent Lengths</h2>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-400 mb-4">
            <p className="font-bold text-lg mb-3">Using Pythagoras:</p>
            <p className="mb-2">In right triangle OT₁P:</p>
            <p className="text-xl font-mono font-bold text-center bg-white p-3 rounded my-3">
              PT₁² = OP² - r²
            </p>
            <p className="text-sm">Where:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>OP = distance from external point to centre</li>
              <li>r = radius of circle</li>
              <li>PT₁ = tangent length</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800">Worked Examples</h2>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300 mb-4">
            <h3 className="font-bold text-lg mb-3">Example 1: Finding tangent length</h3>
            <p className="mb-3"><strong>Problem:</strong> Two tangents from point P touch a circle at A and B. If OP = 10cm and radius = 6cm, find PA.</p>

            <div className="bg-blue-50 p-4 rounded mb-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p>In △OAP: ∠OAP = 90° (radius ⊥ tangent)</p>
              <p className="mt-2">Using Pythagoras:</p>
              <p>OP² = OA² + PA²</p>
              <p>10² = 6² + PA²</p>
              <p>100 = 36 + PA²</p>
              <p>PA² = 64</p>
              <p><strong>PA = 8cm</strong></p>
              <p className="mt-2 text-sm text-gray-600">Note: PB = PA = 8cm (equal tangents)</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300 mb-4">
            <h3 className="font-bold text-lg mb-3">Example 2: Finding radius</h3>
            <p className="mb-3"><strong>Problem:</strong> Tangents from P to circle touch at A and B. If PA = 12cm and OP = 13cm, find the radius.</p>

            <div className="bg-blue-50 p-4 rounded mb-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p>In △OAP:</p>
              <p>OP² = OA² + PA²</p>
              <p>13² = r² + 12²</p>
              <p>169 = r² + 144</p>
              <p>r² = 25</p>
              <p><strong>r = 5cm</strong></p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300">
            <h3 className="font-bold text-lg mb-3">Example 3: Angle between tangents</h3>
            <p className="mb-3"><strong>Problem:</strong> Two tangents from P meet the circle at A and B. If PA = PB = 12cm and ∠APB = 60°, find OP.</p>

            <div className="bg-blue-50 p-4 rounded mb-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p>Since PA = PB, △PAB is isosceles</p>
              <p>∠APB = 60° and PA = PB</p>
              <p className="mt-2">This means △PAB is actually equilateral!</p>
              <p>So AB = PA = PB = 12cm</p>
              <p className="mt-2">In △OAP:</p>
              <p>∠OAP = 90°, ∠APO = 30° (half of 60°)</p>
              <p className="mt-2">Using trigonometry:</p>
              <p>cos(30°) = PA/OP</p>
              <p>√3/2 = 12/OP</p>
              <p><strong>OP = 24/√3 = 8√3 cm</strong></p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-400">
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">Additional Properties</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2 text-xl">✓</span>
              <div>
                <p className="font-semibold">Equal angles:</p>
                <p className="text-sm">∠OPT₁ = ∠OPT₂ (line OP bisects angle between tangents)</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2 text-xl">✓</span>
              <div>
                <p className="font-semibold">Symmetry:</p>
                <p className="text-sm">The line OP is the axis of symmetry for the configuration</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2 text-xl">✓</span>
              <div>
                <p className="font-semibold">Kite shape:</p>
                <p className="text-sm">Quadrilateral PT₁OT₂ is a kite with two pairs of adjacent equal sides</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Practice Problems</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>Two tangents from P touch a circle at A and B. If PA = 15cm and radius = 9cm, find OP.</li>
            <li>Tangents from external point P touch the circle at A and B. If OP = 17cm and radius = 8cm, find PA and PB.</li>
            <li>Prove that the line joining the external point to the centre bisects the angle between the two tangents.</li>
            <li>Two tangents from P touch a circle at A and B. If ∠APB = 80°, find ∠AOB.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TangentsExternal;
