import { useState } from 'react';

const UnitCubes = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Understanding Volume with Unit Cubes</h1>
        <p className="text-lg">Learn what volume means and how to measure it by counting unit cubes</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is Volume? */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">1. What is Volume?</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              <strong>Volume</strong> is the amount of space that an object takes up (or occupies).
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Think About It:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p className="text-gray-800 dark:text-gray-200">
                  🧊 A big box takes up <strong>more space</strong> than a small box
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded">
                <p className="text-gray-800 dark:text-gray-200">
                  📦 The big box has a <strong>greater volume</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 mb-4">
            <p className="text-gray-800 dark:text-gray-200">
              <strong>Real-life examples:</strong> How much water a tank can hold, how much sand fills a bucket, or how much space is inside a room - these are all examples of volume!
            </p>
          </div>
        </section>

        {/* Section 2: What is a Unit Cube? */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">2. What is a Unit Cube?</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              A <strong>unit cube</strong> is a cube where each edge is <strong>1 unit</strong> long.
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              The volume of a unit cube is <strong>1 cubic unit</strong>.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <svg viewBox="0 0 220 200" className="w-56 h-52">
                  {/* Isometric cube - viewed from above-front-right */}
                  {/* Key vertices:
                      Top: (110, 30)
                      Back-left: (50, 65)
                      Back-right: (170, 65)
                      Center (front of top face): (110, 100)
                      Front-left: (50, 135)
                      Front-right: (170, 135)
                      Bottom: (110, 170)
                  */}
                  {/* Left face (darker) */}
                  <polygon
                    points="50,65 110,100 110,170 50,135"
                    fill="#a78bfa"
                    stroke="#7c3aed"
                    strokeWidth="2"
                  />
                  {/* Right face (medium) */}
                  <polygon
                    points="170,65 170,135 110,170 110,100"
                    fill="#c4b5fd"
                    stroke="#7c3aed"
                    strokeWidth="2"
                  />
                  {/* Top face (lightest) */}
                  <polygon
                    points="110,30 170,65 110,100 50,65"
                    fill="#ede9fe"
                    stroke="#7c3aed"
                    strokeWidth="2"
                  />
                  {/* Labels positioned outside the cube */}
                  <text x="140" y="38" fontSize="13" fill="#4c1d95" fontWeight="bold">1 unit</text>
                  <text x="5" y="105" fontSize="13" fill="#4c1d95" fontWeight="bold">1 unit</text>
                  <text x="175" y="105" fontSize="13" fill="#4c1d95" fontWeight="bold">1 unit</text>
                </svg>
              </div>
            </div>
            <p className="text-center text-gray-800 dark:text-gray-200">
              This is a <strong>unit cube</strong>. Its volume is <strong>1 cubic unit</strong>.
            </p>
          </div>
        </section>

        {/* Section 3: Counting Unit Cubes */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">3. Counting Unit Cubes to Find Volume</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Method:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              To find the volume of a solid made of unit cubes, simply <strong>count how many unit cubes</strong> make up the solid.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: A Row of Cubes</h3>
            <div className="flex items-center justify-center mb-4">
              <svg viewBox="0 0 280 100" className="w-80 h-28">
                {/* Row of 3 isometric cubes - proper proportions */}
                {[0, 1, 2].map(i => {
                  const offsetX = i * 70;
                  // Cube vertices for edge length ~40, dx=35, dy=20, dz=40
                  // Centered at (60, 50) for each cube
                  return (
                    <g key={i} transform={`translate(${offsetX}, 0)`}>
                      {/* Left face (darker) */}
                      <polygon
                        points="25,30 60,50 60,90 25,70"
                        fill="#a78bfa"
                        stroke="#7c3aed"
                        strokeWidth="1.5"
                      />
                      {/* Right face (medium) */}
                      <polygon
                        points="95,30 95,70 60,90 60,50"
                        fill="#c4b5fd"
                        stroke="#7c3aed"
                        strokeWidth="1.5"
                      />
                      {/* Top face (lightest) */}
                      <polygon
                        points="60,10 95,30 60,50 25,30"
                        fill="#ede9fe"
                        stroke="#7c3aed"
                        strokeWidth="1.5"
                      />
                      {/* Number label on top face */}
                      <text x="60" y="35" fontSize="14" fill="#4c1d95" fontWeight="bold" textAnchor="middle">{i + 1}</text>
                    </g>
                  );
                })}
              </svg>
            </div>
            <p className="text-center text-gray-800 dark:text-gray-200">
              This solid has <strong>3 unit cubes</strong>, so its volume is <strong>3 cubic units</strong>.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-4">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">Counting Layers (for larger solids):</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              For bigger solids, count in <strong>layers</strong>:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>Count the unit cubes in <strong>one layer</strong></li>
              <li>Count <strong>how many layers</strong> there are</li>
              <li><strong>Multiply</strong> to find the total</li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Counting Layers</h3>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded mb-4">
              <p className="mb-2 text-gray-800 dark:text-gray-200">A cuboid has:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                <li><strong>4 cubes</strong> along the length</li>
                <li><strong>2 cubes</strong> along the breadth</li>
                <li><strong>3 layers</strong> high</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Cubes in each layer:</strong> 4 × 2 = 8 cubes
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Total cubes:</strong> 8 × 3 = <strong>24 cubic units</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Comparing Volumes */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">4. Comparing Volumes</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Idea:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              To compare volumes, count the unit cubes in each solid. The solid with <strong>more unit cubes</strong> has the <strong>greater volume</strong>.
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 mb-4">
            <p className="text-gray-800 dark:text-gray-200">
              <strong>Important:</strong> Different shapes can have the <strong>same volume</strong>! A tall, thin solid might have the same number of cubes as a short, wide solid.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Same Volume, Different Shape</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-center">
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Solid A</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">3 cubes in a row</p>
                <div className="flex justify-center mb-2">
                  {/* 1x3x1 cuboid - 3 cubes in a horizontal row */}
                  <svg viewBox="0 0 110 100" className="w-28 h-24">
                    {(() => {
                      const edge = 20;
                      const dx = edge * 0.866;
                      const dy = edge * 0.5;
                      const dz = edge;
                      const originX = 72;
                      const originY = 38;

                      const project = (x: number, y: number, z: number) => ({
                        x: originX + x * dx - y * dx,
                        y: originY - z * dz + x * dy + y * dy
                      });

                      const poly = (pts: {x: number, y: number}[]) =>
                        pts.map(p => `${p.x},${p.y}`).join(' ');

                      const cubes = [];
                      // 3 cubes along y-axis (nx=1, ny=3, nz=1) - horizontal row
                      for (let gy = 0; gy < 3; gy++) {
                        const gx = 0, gz = 0;
                        const v100 = project(gx + 1, gy, gz);
                        const v010 = project(gx, gy + 1, gz);
                        const v110 = project(gx + 1, gy + 1, gz);
                        const v001 = project(gx, gy, gz + 1);
                        const v101 = project(gx + 1, gy, gz + 1);
                        const v011 = project(gx, gy + 1, gz + 1);
                        const v111 = project(gx + 1, gy + 1, gz + 1);

                        cubes.push(
                          <g key={gy}>
                            <polygon points={poly([v001, v101, v111, v011])} fill="#dbeafe" stroke="#3b82f6" strokeWidth="1"/>
                            <polygon points={poly([v100, v110, v111, v101])} fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1"/>
                            <polygon points={poly([v010, v110, v111, v011])} fill="#93c5fd" stroke="#3b82f6" strokeWidth="1"/>
                          </g>
                        );
                      }
                      return cubes;
                    })()}
                  </svg>
                </div>
                <p className="text-gray-800 dark:text-gray-200">Volume = <strong>3 cubic units</strong></p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-center">
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Solid B</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">L-shaped</p>
                <div className="flex justify-center mb-2">
                  {/* L-shape: cubes at (0,0,0), (1,0,0), (0,1,0) */}
                  <svg viewBox="0 0 110 100" className="w-28 h-24">
                    {(() => {
                      const edge = 20;
                      const dx = edge * 0.866;
                      const dy = edge * 0.5;
                      const dz = edge;
                      const originX = 55;
                      const originY = 45;

                      const project = (x: number, y: number, z: number) => ({
                        x: originX + x * dx - y * dx,
                        y: originY - z * dz + x * dy + y * dy
                      });

                      const poly = (pts: {x: number, y: number}[]) =>
                        pts.map(p => `${p.x},${p.y}`).join(' ');

                      // L-shape positions
                      const positions = [[0,0,0], [1,0,0], [0,1,0]];
                      const cubes = [];

                      for (const [gx, gy, gz] of positions) {
                        const v100 = project(gx + 1, gy, gz);
                        const v010 = project(gx, gy + 1, gz);
                        const v110 = project(gx + 1, gy + 1, gz);
                        const v001 = project(gx, gy, gz + 1);
                        const v101 = project(gx + 1, gy, gz + 1);
                        const v011 = project(gx, gy + 1, gz + 1);
                        const v111 = project(gx + 1, gy + 1, gz + 1);

                        cubes.push(
                          <g key={`${gx}-${gy}-${gz}`}>
                            <polygon points={poly([v001, v101, v111, v011])} fill="#dcfce7" stroke="#22c55e" strokeWidth="1"/>
                            <polygon points={poly([v100, v110, v111, v101])} fill="#bbf7d0" stroke="#22c55e" strokeWidth="1"/>
                            <polygon points={poly([v010, v110, v111, v011])} fill="#86efac" stroke="#22c55e" strokeWidth="1"/>
                          </g>
                        );
                      }
                      return cubes;
                    })()}
                  </svg>
                </div>
                <p className="text-gray-800 dark:text-gray-200">Volume = <strong>3 cubic units</strong></p>
              </div>
            </div>
            <p className="text-center mt-4 text-gray-800 dark:text-gray-200">
              Both solids have the <strong>same volume</strong> even though they look different!
            </p>
          </div>
        </section>

        {/* Worked Example */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">Worked Example</h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Example: Finding Volume of a Solid
            </h3>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              A solid is made of unit cubes arranged in 2 layers. Each layer has 3 × 2 = 6 cubes. Find the volume.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Solution:</p>
              <div className="space-y-2 text-gray-800 dark:text-gray-200">
                <p><strong>Step 1:</strong> Cubes in one layer = 3 × 2 = 6 cubes</p>
                <p><strong>Step 2:</strong> Number of layers = 2</p>
                <p><strong>Step 3:</strong> Total cubes = 6 × 2 = 12 cubes</p>
                <p className="mt-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
                  <strong>Volume of solid = 12 cubic units</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: Count the Cubes
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A solid is made of 5 unit cubes arranged in a row. What is its volume?
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
                    Volume = 5 unit cubes = <strong>5 cubic units</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Counting Layers
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A cuboid has 4 cubes in each layer and 3 layers. What is its volume?
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
                    Volume = 4 × 3 = <strong>12 cubic units</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Compare Volumes
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Solid A has 8 unit cubes. Solid B has 6 unit cubes. Which has the greater volume?
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
                    Solid A has 8 cubic units. Solid B has 6 cubic units.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Since 8 {'>'} 6, <strong>Solid A has the greater volume</strong>.
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
            <li><strong>Volume</strong> is the amount of space an object takes up</li>
            <li>A <strong>unit cube</strong> has a volume of <strong>1 cubic unit</strong></li>
            <li>To find volume, <strong>count the unit cubes</strong> that make up the solid</li>
            <li>For layered solids: Volume = cubes in one layer × number of layers</li>
            <li>Different shapes can have the <strong>same volume</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UnitCubes;
