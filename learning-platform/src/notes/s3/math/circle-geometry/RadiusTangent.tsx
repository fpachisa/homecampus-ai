const RadiusTangent = () => {
  const TangentVisualizer = ({ showRightAngle = true }) => {
    const centerX = 200;
    const centerY = 150;
    const radius = 80;

    const tangentAngle = -30;
    const pointT = {
      x: centerX + radius * Math.cos((tangentAngle * Math.PI) / 180),
      y: centerY + radius * Math.sin((tangentAngle * Math.PI) / 180)
    };

    const tangentLength = 120;
    const tangentDir = { x: Math.sin((tangentAngle * Math.PI) / 180), y: -Math.cos((tangentAngle * Math.PI) / 180) };
    const tangentStart = { x: pointT.x - tangentDir.x * tangentLength, y: pointT.y - tangentDir.y * tangentLength };
    const tangentEnd = { x: pointT.x + tangentDir.x * tangentLength, y: pointT.y + tangentDir.y * tangentLength };

    // Calculate right angle marker using direction vectors
    const markerSize = 12;

    // Direction from T to O (radius direction)
    const dxTO = centerX - pointT.x;
    const dyTO = centerY - pointT.y;
    const lenTO = Math.sqrt(dxTO * dxTO + dyTO * dyTO);
    const uxTO = (dxTO / lenTO) * markerSize;
    const uyTO = (dyTO / lenTO) * markerSize;

    // Tangent direction (normalized)
    const uxTangent = tangentDir.x * markerSize;
    const uyTangent = tangentDir.y * markerSize;

    // Right angle marker points
    const p1 = { x: pointT.x + uxTO, y: pointT.y + uyTO };
    const p2 = { x: p1.x + uxTangent, y: p1.y + uyTangent };
    const p3 = { x: pointT.x + uxTangent, y: pointT.y + uyTangent };

    return (
      <svg width="400" height="300" className="mx-auto">
        <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#333" strokeWidth="2" />

        <line x1={tangentStart.x} y1={tangentStart.y} x2={tangentEnd.x} y2={tangentEnd.y} stroke="#22c55e" strokeWidth="3" />
        <line x1={centerX} y1={centerY} x2={pointT.x} y2={pointT.y} stroke="#ef4444" strokeWidth="3" />

        {showRightAngle && (
          <path
            d={`M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y}`}
            fill="none"
            stroke="#ef4444"
            strokeWidth="2.5"
          />
        )}

        <circle cx={centerX} cy={centerY} r="4" fill="#666" />
        <circle cx={pointT.x} cy={pointT.y} r="4" fill="#333" />

        <text x={centerX - 15} y={centerY + 25} className="text-base font-bold">O</text>
        <text x={pointT.x + 10} y={pointT.y - 10} className="text-base font-bold">T</text>
        <text x={centerX + 15} y={centerY} className="text-sm text-red-600">radius</text>
        <text x={pointT.x + 25} y={pointT.y + 25} className="text-sm text-green-600">tangent</text>

        {showRightAngle && (
          <text x={pointT.x - 45} y={pointT.y + 10} className="text-lg font-bold text-red-600">90°</text>
        )}
      </svg>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Radius-Tangent Theorem</h1>
        <p className="text-lg">The perpendicular relationship between radius and tangent</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">What is a Tangent?</h2>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-400 mb-4">
            <p className="text-lg mb-3"><strong>Tangent:</strong> A line that touches a circle at exactly one point.</p>
            <p className="text-sm">The point where the tangent touches the circle is called the <strong>point of tangency</strong> or <strong>point of contact</strong>.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-semibold mb-2">Key Properties:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Touches at exactly ONE point</li>
                <li>Never crosses into the circle</li>
                <li>Different from a secant (which cuts through)</li>
                <li>Infinite tangents possible to a circle</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded">
              <p className="font-semibold mb-2">Comparison:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Tangent:</strong> 1 point of contact</li>
                <li><strong>Secant:</strong> 2 points of contact</li>
                <li><strong>Chord:</strong> Line segment (not extended)</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">The Radius-Tangent Theorem</h2>

          <div className="bg-red-50 p-6 rounded-lg border-4 border-red-400 mb-6">
            <p className="text-xl font-bold text-center text-red-900 mb-4">
              The radius is perpendicular to the tangent at the point of tangency
            </p>
            <p className="text-center text-lg">OT ⊥ tangent</p>
            <p className="text-center">∠OTangent = 90°</p>
          </div>

          <TangentVisualizer showRightAngle={true} />

          <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500 mt-6">
            <p className="font-bold mb-2">Converse Theorem:</p>
            <p>If a line through a point on the circle is perpendicular to the radius at that point, then the line is a tangent to the circle.</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">Using Pythagoras with Tangents</h2>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-400">
            <p className="font-bold text-lg mb-3">When a tangent is drawn from an external point P:</p>
            <p className="mb-3">Triangle OTP is a right triangle (right angle at T)</p>
            <p className="text-xl font-mono font-bold text-center bg-white p-3 rounded my-3">
              OP² = OT² + PT²
            </p>
            <p className="text-sm">Where:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>O = centre of circle</li>
              <li>T = point of tangency</li>
              <li>P = external point</li>
              <li>OT = radius (r)</li>
              <li>PT = tangent length</li>
            </ul>
            <p className="mt-3 font-semibold">Therefore: <span className="text-lg">PT² = OP² - r²</span></p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">Worked Examples</h2>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300 mb-4">
            <h3 className="font-bold text-lg mb-3">Example 1: Finding tangent length</h3>
            <p className="mb-3"><strong>Problem:</strong> From an external point P, a tangent touches a circle at T. The radius is 5cm and OP = 13cm. Find PT.</p>

            <div className="bg-blue-50 p-4 rounded mb-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p>Since radius ⊥ tangent, ∠OTP = 90°</p>
              <p className="mt-2">Using Pythagoras in △OTP:</p>
              <p>OP² = OT² + PT²</p>
              <p>13² = 5² + PT²</p>
              <p>169 = 25 + PT²</p>
              <p>PT² = 144</p>
              <p><strong>PT = 12cm</strong></p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300 mb-4">
            <h3 className="font-bold text-lg mb-3">Example 2: Finding distance to centre</h3>
            <p className="mb-3"><strong>Problem:</strong> A tangent of length 24cm touches a circle of radius 7cm. How far is the external point from the centre?</p>

            <div className="bg-blue-50 p-4 rounded mb-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p>Given: OT = 7cm, PT = 24cm</p>
              <p className="mt-2">Using OP² = OT² + PT²:</p>
              <p>OP² = 7² + 24²</p>
              <p>OP² = 49 + 576</p>
              <p>OP² = 625</p>
              <p><strong>OP = 25cm</strong></p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300">
            <h3 className="font-bold text-lg mb-3">Example 3: Angle problem</h3>
            <p className="mb-3"><strong>Problem:</strong> A tangent PT touches circle with centre O at T. If ∠OPT = 35°, find ∠TOP.</p>

            <div className="bg-blue-50 p-4 rounded mb-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p>In △OTP:</p>
              <p>∠OTP = 90° (radius ⊥ tangent)</p>
              <p>∠OPT = 35° (given)</p>
              <p className="mt-2">Using angle sum in triangle:</p>
              <p>∠TOP + ∠OTP + ∠OPT = 180°</p>
              <p>∠TOP + 90° + 35° = 180°</p>
              <p><strong>∠TOP = 55°</strong></p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-400">
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">Important Points to Remember</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">✓</span>
              <span>The radius and tangent always meet at 90°</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">✓</span>
              <span>This creates a right-angled triangle (useful for Pythagoras)</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">✓</span>
              <span>Only one tangent can be drawn at a given point on the circle</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">✓</span>
              <span>Two tangents can be drawn to a circle from an external point</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Practice Problems</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>A tangent from point P touches a circle at T. If PT = 15cm and radius = 8cm, find OP.</li>
            <li>From an external point 17cm from the centre, a tangent is drawn to a circle of radius 8cm. Find the tangent length.</li>
            <li>Prove that the radius is perpendicular to the tangent at the point of contact.</li>
            <li>A tangent and radius meet at point T. If ∠OTP = 90° and OP = 2r, find PT in terms of r.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RadiusTangent;
